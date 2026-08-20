import { c as __toESM, n as require_jsx_runtime, o as require_react } from "../index.js";
import { Bn as Toaster$1, Hn as createLucideIcon, f as DirectionContext, i as LoaderCircle, n as Info, r as TriangleAlert, s as TooltipProvider, t as CircleCheck } from "./circle-check-BS0cIZDz.js";
//#region node_modules/@base-ui/react/direction-provider/DirectionProvider.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1), import_jsx_runtime = require_jsx_runtime(), DirectionProvider = function DirectionProvider(props) {
	const { direction = "ltr" } = props;
	const contextValue = import_react.useMemo(() => ({ direction }), [direction]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DirectionContext.Provider, {
		value: contextValue,
		children: props.children
	});
}, M = (e, i, s, u, m, a, l, h) => {
	let d = document.documentElement, w = ["light", "dark"];
	function p(n) {
		(Array.isArray(e) ? e : [e]).forEach((y) => {
			let k = y === "class", S = k && a ? m.map((f) => a[f] || f) : m;
			k ? (d.classList.remove(...S), d.classList.add(a && a[n] ? a[n] : n)) : d.setAttribute(y, n);
		}), R(n);
	}
	function R(n) {
		h && w.includes(n) && (d.style.colorScheme = n);
	}
	function c() {
		return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
	}
	if (u) p(u);
	else try {
		let n = localStorage.getItem(i) || s;
		p(l && n === "system" ? c() : n);
	} catch (n) {}
}, x = import_react.createContext(void 0), U = {
	setTheme: (e) => {},
	themes: []
}, z = () => {
	var e;
	return (e = import_react.useContext(x)) != null ? e : U;
};
import_react.memo(({ forcedTheme: e, storageKey: i, attribute: s, enableSystem: u, enableColorScheme: m, defaultTheme: a, value: l, themes: h, nonce: d, scriptProps: w }) => {
	let p = JSON.stringify([
		s,
		i,
		a,
		e,
		h,
		l,
		u,
		m
	]).slice(1, -1);
	return import_react.createElement("script", {
		...w,
		suppressHydrationWarning: !0,
		nonce: typeof window == "undefined" ? d : "",
		dangerouslySetInnerHTML: { __html: `(${M.toString()})(${p})` }
	});
});
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var OctagonX = createLucideIcon("octagon-x", [
	["path", {
		d: "m15 9-6 6",
		key: "1uzhvr"
	}],
	["path", {
		d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",
		key: "2d38gg"
	}],
	["path", {
		d: "m9 9 6 6",
		key: "z0biqf"
	}]
]);
//#endregion
//#region components/ui/sonner.tsx
var Toaster = ({ ...props }) => {
	const { theme = "system" } = z();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
		theme,
		className: "toaster group",
		icons: {
			success: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4" }),
			info: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "size-4" }),
			warning: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-4" }),
			error: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OctagonX, { className: "size-4" }),
			loading: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" })
		},
		style: {
			"--normal-bg": "var(--popover)",
			"--normal-text": "var(--popover-foreground)",
			"--normal-border": "var(--border)",
			"--border-radius": "var(--radius)"
		},
		toastOptions: { classNames: { toast: "cn-toast" } },
		...props
	});
};
//#endregion
//#region components/providers.tsx
function Providers({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DirectionProvider, {
		direction: "rtl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, { children }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
			position: "top-center",
			richColors: true
		})]
	});
}
//#endregion
export { Providers };
