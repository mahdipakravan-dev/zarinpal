import { createHash, randomUUID } from "node:crypto";
import { appendFile, mkdir, readFile, rename, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const indexPath = resolve(root, "lib/generated/sales-pulse-index.json");
const merchantDirectory = resolve(root, "public/data/sales-pulse/merchants");
const cachePath = resolve(root, "lib/generated/sales-pulse-ai-cache.json");
const auditLogPath = resolve(
  root,
  process.env.LIARA_AI_LOG_PATH ?? ".sales-pulse-logs/liara-ai.jsonl"
);
const promptVersion = "sales-pulse-action-v1";

function optionValues(name) {
  const values = [];
  for (let index = 0; index < process.argv.length; index += 1) {
    if (process.argv[index] === name && process.argv[index + 1]) values.push(process.argv[index + 1]);
  }
  return values;
}

function optionNumber(name) {
  const value = optionValues(name)[0];
  if (value === undefined) return null;
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed < 1) throw new Error(`${name} must be a positive integer.`);
  return parsed;
}

const all = process.argv.includes("--all");
const force = process.argv.includes("--force");
const dryRun = process.argv.includes("--dry-run");
const merchantFilters = new Set(optionValues("--merchant"));
const periodFilters = new Set(optionValues("--period"));
const limit = optionNumber("--limit");
const configuredModel = process.env.LIARA_AI_MODEL ?? "openai/gpt-5.6-luna";

if (!all && merchantFilters.size === 0) {
  throw new Error(
    "Select at least one merchant with --merchant M250, or explicitly use --all. " +
      "Optionally add --period nowruz-1405 and --limit 10."
  );
}

function stableHash(value) {
  return createHash("sha256").update(JSON.stringify(value)).digest("hex");
}

function environmentInteger(name, fallback, minimum, maximum) {
  const value = Number(process.env[name] ?? fallback);
  if (!Number.isInteger(value) || value < minimum || value > maximum) {
    throw new Error(`${name} must be an integer between ${minimum} and ${maximum}.`);
  }
  return value;
}

async function readJson(path) {
  return JSON.parse(await readFile(path, "utf8"));
}

async function readCache() {
  try {
    const cache = await readJson(cachePath);
    return cache.version === 1 && cache.entries ? cache : { version: 1, entries: {} };
  } catch (error) {
    if (error?.code === "ENOENT") return { version: 1, entries: {} };
    throw error;
  }
}

async function writeJsonAtomic(path, value) {
  const temporary = `${path}.${process.pid}.tmp`;
  await writeFile(temporary, `${JSON.stringify(value)}\n`, "utf8");
  await rename(temporary, path);
}

async function auditLog(entry) {
  await mkdir(dirname(auditLogPath), { recursive: true });
  await appendFile(auditLogPath, `${JSON.stringify(entry)}\n`, "utf8");
  if (process.env.LIARA_AI_LOG_CONSOLE !== "false") {
    console.log(`[liara-ai-audit] ${JSON.stringify(entry)}`);
  }
}

function responseBody(text) {
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

function factsFor(merchant, period, result) {
  const strongestFactor = [...result.growthFactors].sort(
    (left, right) => Math.abs(right.value) - Math.abs(left.value)
  )[0];
  const strongestHour = [...result.hourlyImpact].sort((left, right) => right.value - left.value)[0];

  return {
    period: period.label,
    merchantCategory: merchant.categoryTitle,
    confidence: result.confidence,
    sessions: result.sampleSize,
    successfulPurchases: result.verifiedPurchases,
    changes: {
      successfulSalesPercent: result.totalGrowth,
      successfulPurchaseCountPercent: result.kpis.successfulCount.change,
      averagePurchasePercent: result.kpis.avgBasket.change,
      paymentSuccessRatePoints: result.kpis.successRate.change,
      returningCardSharePoints: result.kpis.returningShare.change,
    },
    strongestGrowthFactor: {
      label: strongestFactor.label,
      contributionPoints: strongestFactor.value,
    },
    strongestThreeHourWindow: {
      label: strongestHour.label,
      contributionPoints: strongestHour.value,
    },
    ruleBasedSuggestion: result.insight.ruleAction ?? result.insight.action,
  };
}

function messagesFor(facts) {
  return [
    {
      role: "system",
      content: [
        "شما دستیار رشد کسب‌وکار پذیرندگان پرداخت هستید.",
        "فقط براساس داده تجمیعی ورودی، یک اقدام عملی، کم‌ریسک و قابل‌آزمایش پیشنهاد کنید.",
        "رابطه علّی، عدد، تخفیف یا واقعیتی که در ورودی نیست نسازید.",
        "اگر اطمینان کم است، پیشنهاد را به جمع‌آوری داده یا یک آزمایش محدود معطوف کنید.",
        "پاسخ باید فارسی روان، یک جمله و حداکثر ۳۵ کلمه باشد.",
        'فقط JSON معتبر با ساختار {"action":"..."} برگردانید و هیچ متن دیگری ننویسید.',
      ].join("\n"),
    },
    {
      role: "user",
      content: `برای این خلاصه عملکرد یک پیشنهاد اجرایی بنویس:\n${JSON.stringify(facts)}`,
    },
  ];
}

function parseAction(content) {
  const cleaned = content.trim().replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "");
  const start = cleaned.indexOf("{");
  const end = cleaned.lastIndexOf("}");
  if (start < 0 || end <= start) throw new Error("AI response did not contain a JSON object.");
  const parsed = JSON.parse(cleaned.slice(start, end + 1));
  const action = typeof parsed.action === "string" ? parsed.action.replace(/\s+/g, " ").trim() : "";
  if (action.length < 20 || action.length > 280) {
    throw new Error("AI action must contain between 20 and 280 characters.");
  }
  if (action.split(/\s+/u).length > 35) throw new Error("AI action must not exceed 35 words.");
  if (/https?:\/\/|```|[#*_]/.test(action)) throw new Error("AI action contains unsupported markup.");
  return action;
}

function wait(milliseconds) {
  return new Promise((resolveWait) => setTimeout(resolveWait, milliseconds));
}

async function requestAction({ url, apiKey, model, timeoutMs, facts, jobKey }) {
  let lastError;
  for (let attempt = 0; attempt < 3; attempt += 1) {
    const requestId = randomUUID();
    const body = { model, messages: messagesFor(facts) };
    const startedAt = Date.now();
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), timeoutMs);
    await auditLog({
      timestamp: new Date(startedAt).toISOString(),
      event: "request",
      requestId,
      jobKey,
      attempt: attempt + 1,
      request: {
        url,
        method: "POST",
        headers: {
          Authorization: "Bearer [REDACTED]",
          "Content-Type": "application/json",
        },
        body,
      },
    });
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
        signal: controller.signal,
      });
      const responseText = await response.text();
      await auditLog({
        timestamp: new Date().toISOString(),
        event: "response",
        requestId,
        jobKey,
        attempt: attempt + 1,
        durationMs: Date.now() - startedAt,
        response: {
          status: response.status,
          statusText: response.statusText,
          headers: Object.fromEntries(response.headers.entries()),
          body: responseBody(responseText),
        },
      });
      if (!response.ok) {
        const error = new Error(
          `Liara AI returned HTTP ${response.status}: ${responseText.slice(0, 240)}`
        );
        error.retryable = response.status === 429 || response.status >= 500;
        throw error;
      }
      const completion = JSON.parse(responseText);
      const content = completion.choices?.[0]?.message?.content;
      if (typeof content !== "string") throw new Error("Liara AI returned no message content.");
      return parseAction(content);
    } catch (error) {
      lastError = error;
      const hasRetryableFlag =
        error !== null && typeof error === "object" && "retryable" in error;
      if (!hasRetryableFlag) {
        await auditLog({
          timestamp: new Date().toISOString(),
          event: "error",
          requestId,
          jobKey,
          attempt: attempt + 1,
          durationMs: Date.now() - startedAt,
          error: {
            name: error instanceof Error ? error.name : "UnknownError",
            message: error instanceof Error ? error.message : String(error),
          },
        });
      }
      if (attempt === 2 || (error.retryable === false)) break;
      await wait(800 * 2 ** attempt);
    } finally {
      clearTimeout(timeout);
    }
  }
  throw lastError;
}

async function main() {
  const index = await readJson(indexPath);
  const cache = await readCache();
  const selectedMerchants = index.merchants.filter(
    (merchant) => all || merchantFilters.has(merchant.id)
  );
  if (selectedMerchants.length === 0) throw new Error("No merchant matched the requested filters.");

  const selectedPeriods = index.periods.filter(
    (period) => periodFilters.size === 0 || periodFilters.has(period.id)
  );
  if (selectedPeriods.length === 0) throw new Error("No period matched the requested filters.");

  const jobs = [];
  const merchantFiles = new Map();
  for (const merchant of selectedMerchants) {
    const path = resolve(merchantDirectory, `${merchant.id}.json`);
    const results = await readJson(path);
    merchantFiles.set(merchant.id, { path, results, dirty: false });
    for (const period of selectedPeriods) {
      const result = results[period.id];
      if (!result?.eligible) continue;
      const facts = factsFor(merchant, period, result);
      const inputHash = stableHash({ promptVersion, model: configuredModel, facts });
      jobs.push({ merchant, period, result, facts, inputHash });
    }
  }

  const limitedJobs = limit ? jobs.slice(0, limit) : jobs;
  console.log(`[sales-pulse-ai] selected ${limitedJobs.length} eligible merchant-period jobs.`);
  if (dryRun) return;

  const url = process.env.LIARA_AI_URL;
  const apiKey = process.env.LIARA_AI_API_KEY;
  const model = configuredModel;
  if (!url || !apiKey) {
    throw new Error("LIARA_AI_URL and LIARA_AI_API_KEY are required in .env.local or the shell environment.");
  }
  const timeoutMs = environmentInteger("LIARA_AI_TIMEOUT_MS", 45_000, 5_000, 120_000);
  const concurrency = environmentInteger("LIARA_AI_CONCURRENCY", 2, 1, 5);
  let completed = 0;

  async function enrich(job) {
    const key = `${job.merchant.id}:${job.period.id}`;
    const cached = cache.entries[key];
    const action =
      !force && cached?.inputHash === job.inputHash
        ? cached.action
        : await requestAction({
            url,
            apiKey,
            model,
            timeoutMs,
            facts: job.facts,
            jobKey: key,
          });
    const generatedAt = cached?.inputHash === job.inputHash ? cached.generatedAt : new Date().toISOString();
    cache.entries[key] = { inputHash: job.inputHash, action, model, generatedAt };
    job.result.insight.action = action;
    job.result.insight.actionSource = "ai";
    job.result.insight.ai = { model, generatedAt };
    merchantFiles.get(job.merchant.id).dirty = true;
    completed += 1;
    console.log(`[sales-pulse-ai] ${completed}/${limitedJobs.length} ${key}`);
  }

  let cursor = 0;
  async function worker() {
    while (cursor < limitedJobs.length) {
      const job = limitedJobs[cursor];
      cursor += 1;
      await enrich(job);
    }
  }
  await Promise.all(Array.from({ length: concurrency }, () => worker()));

  for (const file of merchantFiles.values()) {
    if (file.dirty) await writeJsonAtomic(file.path, file.results);
  }
  await writeJsonAtomic(cachePath, cache);
  console.log(`[sales-pulse-ai] enriched ${completed} suggestions; rule-based fallbacks remain intact.`);
}

await main();
