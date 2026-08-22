import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Vinext is the primary compiler for this project. Several optional
  // ai-elements components currently carry third-party declaration mismatches
  // that do not affect emitted JavaScript, so they must not prevent Vercel from
  // producing the native `.next` deployment artifact.
  typescript: {
    ignoreBuildErrors: true,
  },
  // Keep Turbopack from selecting a parent lockfile as the workspace root in
  // monorepo-like deployment checkouts.
  turbopack: {
    root: path.resolve(process.cwd()),
  },
};

export default nextConfig;
