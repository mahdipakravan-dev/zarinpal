import { c as __toESM, n as require_jsx_runtime, o as require_react, t as require_react_dom } from "../index.js";
import { $ as FocusGuard, $t as getNodeChildren, A as usePopupInteractionProps, An as EMPTY_ARRAY, At as useAnimationFrame, B as useDismiss, Bn as toast, Bt as tabbable, C as FOCUSABLE_POPUP_PROPS, Cn as isHTMLElement, Ct as windowResize, D as setPopupOpenState, Dn as cn, Dt as useAnimationsFinished, E as createDefaultInitialFocus, En as isShadowRoot, Et as useOpenChangeComplete, F as ReactStore, Fn as useRefWithInit, Ft as getPreviousTabbable, G as useFloatingTree, Gt as isIndexOutOfListBounds, H as FloatingTree, Ht as getMaxListIndex, I as useStore, In as formatErrorMessage, It as getTabbableAfterElement, J as usePortalContext, Jt as isMouseLikePointerType, K as FloatingTreeStore, Kt as isListIndexDisabled, L as fastComponent, Ln as makeEventPreventable, Lt as getTabbableBeforeElement, M as usePopupRootSync, Mn as NOOP, Mt as useTimeout, N as useTriggerDataForwarding, Nn as isReactVersionAtLeast, Nt as focusable, O as useImplicitActiveTrigger, On as clsx, Ot as resolveRef, P as useSyncedFloatingRootContext, Pn as useMergedRefs, Pt as getNextTabbable, Q as createAttribute, Qt as getNodeAncestors, R as fastComponentRef, Rn as mergeProps, Rt as isOutsideEvent, S as PopupTriggerMap, Sn as isElement, St as triggerPress, T as attachPreventUnmountOnClose, Tn as isOverflowElement, Tt as transitionStatusMapping, U as useFloatingNodeId, Ut as getMinListIndex, V as FloatingNode, Vn as createLucideIcon, Vt as findNonDisabledListIndex, W as useFloatingParentNodeId, Wt as isElementVisible, X as DROPDOWN_COLLISION_AVOIDANCE, Xt as isVirtualPointerEvent, Yt as isVirtualClick, Z as POPUP_COLLISION_AVOIDANCE, Zt as stopEvent, _ as useFloatingRootContext, _n as useIsoLayoutEffect, _t as none, a as TooltipContent, an as getTarget, at as popupStateMapping, b as createPopupFloatingRootContext, bn as getParentNode, c as usePositioner, cn as ARROW_RIGHT$1, ct as triggerOpenStateMapping, dn as webkit, dt as closePress, en as getFloatingFocusElement, et as visuallyHidden, f as useDirection, fn as ios, g as useFocus, gn as ownerDocument, gt as listNavigation, h as useHoverFloatingInteraction, hn as useId$1, ht as itemPress, i as Tooltip, in as contains, it as addEventListener, j as usePopupRootStore, jn as EMPTY_OBJECT, jt as Timeout, k as useOpenStateTransitions, kn as useRenderElement, kt as AnimationFrame, l as getDisabledMountTransitionStyles, ln as ARROW_UP$1, lt as createChangeEventDetails, m as useHoverReferenceInteraction, mn as useBaseUiId, mt as imperativeAction, n as Info, nn as isTypeableElement, nt as useValueAsRef, on as ARROW_DOWN$1, ot as popupTransitionStateMapping, p as safePolygon, pn as mac, pt as focusOut, q as FloatingPortal, qt as rectToClientRect, r as TriangleAlert, rn as activeElement, rt as mergeCleanups, s as TooltipTrigger, sn as ARROW_LEFT$1, st as pressableTriggerOpenStateMapping, t as CircleCheck, tn as isTypeableCombobox, tt as visuallyHiddenInput, u as useAnchorPositioning, un as jsdom, ut as cancelOpen, v as usePopupHandleStore, vn as useStableCallback, w as PopupHandleAttachment, wn as isLastTraversableNode, wt as useTransitionStatus, x as popupStoreSelectors, xn as getWindow, y as createInitialPopupStoreState, yn as getNodeName, yt as siblingOpen, z as platform, zt as isTabbable } from "./circle-check-JsXgLQsO.js";
//#region node_modules/lucide-react/dist/esm/icons/check.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Check = createLucideIcon("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChevronDown = createLucideIcon("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Copy = createLucideIcon("copy", [["rect", {
	width: "14",
	height: "14",
	x: "8",
	y: "8",
	rx: "2",
	ry: "2",
	key: "17jyea"
}], ["path", {
	d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
	key: "zix9uf"
}]]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Download = createLucideIcon("download", [
	["path", {
		d: "M12 15V3",
		key: "m9g1x1"
	}],
	["path", {
		d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
		key: "ih7n3h"
	}],
	["path", {
		d: "m7 10 5 5 5-5",
		key: "brsn70"
	}]
]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Ellipsis = createLucideIcon("ellipsis", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "1",
		key: "41hilf"
	}],
	["circle", {
		cx: "19",
		cy: "12",
		r: "1",
		key: "1wjl8i"
	}],
	["circle", {
		cx: "5",
		cy: "12",
		r: "1",
		key: "1pcz8c"
	}]
]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Plus = createLucideIcon("plus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "M12 5v14",
	key: "s699le"
}]]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Receipt = createLucideIcon("receipt", [
	["path", {
		d: "M12 17V7",
		key: "pyj7ub"
	}],
	["path", {
		d: "M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8",
		key: "1elt7d"
	}],
	["path", {
		d: "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z",
		key: "ycz6yz"
	}]
]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Search = createLucideIcon("search", [["path", {
	d: "m21 21-4.34-4.34",
	key: "14j7rj"
}], ["circle", {
	cx: "11",
	cy: "11",
	r: "8",
	key: "4ej97u"
}]]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Share2 = createLucideIcon("share-2", [
	["circle", {
		cx: "18",
		cy: "5",
		r: "3",
		key: "gq8acd"
	}],
	["circle", {
		cx: "6",
		cy: "12",
		r: "3",
		key: "w7nqdw"
	}],
	["circle", {
		cx: "18",
		cy: "19",
		r: "3",
		key: "1xt0gg"
	}],
	["line", {
		x1: "8.59",
		x2: "15.42",
		y1: "13.51",
		y2: "17.49",
		key: "47mynk"
	}],
	["line", {
		x1: "15.41",
		x2: "8.59",
		y1: "6.51",
		y2: "10.49",
		key: "1n3mei"
	}]
]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var X = createLucideIcon("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChartNoAxesColumn = createLucideIcon("chart-no-axes-column", [
	["path", {
		d: "M5 21v-6",
		key: "1hz6c0"
	}],
	["path", {
		d: "M12 21V3",
		key: "1lcnhd"
	}],
	["path", {
		d: "M19 21V9",
		key: "unv183"
	}]
]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChevronLeft = createLucideIcon("chevron-left", [["path", {
	d: "m15 18-6-6 6-6",
	key: "1wnfg3"
}]]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var GitGraph = createLucideIcon("git-graph", [
	["circle", {
		cx: "5",
		cy: "6",
		r: "3",
		key: "1qnov2"
	}],
	["path", {
		d: "M5 9v6",
		key: "158jrl"
	}],
	["circle", {
		cx: "5",
		cy: "18",
		r: "3",
		key: "104gr9"
	}],
	["path", {
		d: "M12 3v18",
		key: "108xh3"
	}],
	["circle", {
		cx: "19",
		cy: "6",
		r: "3",
		key: "108a5v"
	}],
	["path", {
		d: "M16 15.7A9 9 0 0 0 19 9",
		key: "1e3vqb"
	}]
]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var HeartPulse = createLucideIcon("heart-pulse", [["path", {
	d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
	key: "mvr1a0"
}], ["path", {
	d: "M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",
	key: "auskq0"
}]]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var LogOut = createLucideIcon("log-out", [
	["path", {
		d: "m16 17 5-5-5-5",
		key: "1bji2h"
	}],
	["path", {
		d: "M21 12H9",
		key: "dn1m92"
	}],
	["path", {
		d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
		key: "1uf3rs"
	}]
]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Repeat = createLucideIcon("repeat", [
	["path", {
		d: "m17 2 4 4-4 4",
		key: "nntrym"
	}],
	["path", {
		d: "M3 11v-1a4 4 0 0 1 4-4h14",
		key: "84bu3i"
	}],
	["path", {
		d: "m7 22-4-4 4-4",
		key: "1wqhfi"
	}],
	["path", {
		d: "M21 13v1a4 4 0 0 1-4 4H3",
		key: "1rx37r"
	}]
]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Settings = createLucideIcon("settings", [["path", {
	d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
	key: "1i5ecw"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "3",
	key: "1v7zrd"
}]]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Wallet = createLucideIcon("wallet", [["path", {
	d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
	key: "18etb6"
}], ["path", {
	d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",
	key: "xoc0q4"
}]]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Waypoints = createLucideIcon("waypoints", [
	["path", {
		d: "m10.586 5.414-5.172 5.172",
		key: "4mc350"
	}],
	["path", {
		d: "m18.586 13.414-5.172 5.172",
		key: "8c96vv"
	}],
	["path", {
		d: "M6 12h12",
		key: "8npq4p"
	}],
	["circle", {
		cx: "12",
		cy: "20",
		r: "2",
		key: "144qzu"
	}],
	["circle", {
		cx: "12",
		cy: "4",
		r: "2",
		key: "muu5ef"
	}],
	["circle", {
		cx: "20",
		cy: "12",
		r: "2",
		key: "1xzzfp"
	}],
	["circle", {
		cx: "4",
		cy: "12",
		r: "2",
		key: "1hvhnz"
	}]
]);
//#endregion
//#region node_modules/@base-ui/react/use-render/useRender.mjs
/**
* Renders a Base UI element.
*
* @public
*/
function useRender(params) {
	return useRenderElement(params.defaultTagName ?? "div", params, params);
}
//#endregion
//#region node_modules/class-variance-authority/dist/index.mjs
/**
* Copyright 2022 Joe Bell. All rights reserved.
*
* This file is licensed to you under the Apache License, Version 2.0
* (the "License"); you may not use this file except in compliance with the
* License. You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
* WARRANTIES OR REPRESENTATIONS OF ANY KIND, either express or implied. See the
* License for the specific language governing permissions and limitations under
* the License.
*/ var falsyToString = (value) => typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
var cx = clsx;
var cva = (base, config) => (props) => {
	var _config_compoundVariants;
	if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
	const { variants, defaultVariants } = config;
	const getVariantClassNames = Object.keys(variants).map((variant) => {
		const variantProp = props === null || props === void 0 ? void 0 : props[variant];
		const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
		if (variantProp === null) return null;
		const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
		return variants[variant][variantKey];
	});
	const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param) => {
		let [key, value] = param;
		if (value === void 0) return acc;
		acc[key] = value;
		return acc;
	}, {});
	return cx(base, getVariantClassNames, config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param) => {
		let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
		return Object.entries(compoundVariantOptions).every((param) => {
			let [key, value] = param;
			return Array.isArray(value) ? value.includes({
				...defaultVariants,
				...propsWithoutUndefined
			}[key]) : {
				...defaultVariants,
				...propsWithoutUndefined
			}[key] === value;
		}) ? [
			...acc,
			cvClass,
			cvClassName
		] : acc;
	}, []), props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
};
//#endregion
//#region hooks/use-mobile.ts
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
	const [isMobile, setIsMobile] = import_react.useState(void 0);
	import_react.useEffect(() => {
		const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
		const onChange = () => {
			setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		};
		mql.addEventListener("change", onChange);
		setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		return () => mql.removeEventListener("change", onChange);
	}, []);
	return !!isMobile;
}
//#endregion
//#region node_modules/@base-ui/react/internals/composite/root/CompositeRootContext.mjs
var CompositeRootContext = /* @__PURE__ */ import_react.createContext(void 0);
function useCompositeRootContext(optional = false) {
	const context = import_react.useContext(CompositeRootContext);
	if (context === void 0 && !optional) throw new Error(formatErrorMessage(16));
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/utils/useFocusableWhenDisabled.mjs
function useFocusableWhenDisabled(parameters) {
	const { focusableWhenDisabled, disabled, composite = false, tabIndex: tabIndexProp = 0, isNativeButton } = parameters;
	const isFocusableComposite = composite && focusableWhenDisabled !== false;
	const isNonFocusableComposite = composite && focusableWhenDisabled === false;
	return { props: import_react.useMemo(() => {
		const additionalProps = { onKeyDown(event) {
			if (disabled && focusableWhenDisabled && event.key !== "Tab") event.preventDefault();
		} };
		if (!composite) {
			additionalProps.tabIndex = tabIndexProp;
			if (!isNativeButton && disabled) additionalProps.tabIndex = focusableWhenDisabled ? tabIndexProp : -1;
		}
		if (isNativeButton && (focusableWhenDisabled || isFocusableComposite) || !isNativeButton && disabled) additionalProps["aria-disabled"] = disabled;
		if (isNativeButton && (!focusableWhenDisabled || isNonFocusableComposite)) additionalProps.disabled = disabled;
		return additionalProps;
	}, [
		composite,
		disabled,
		focusableWhenDisabled,
		isFocusableComposite,
		isNonFocusableComposite,
		isNativeButton,
		tabIndexProp
	]) };
}
//#endregion
//#region node_modules/@base-ui/react/utils/dispatchClickWithModifiers.mjs
/**
* Dispatches a constructed click on the target so it carries the source event's
* modifier state, which `click()` always reports as unpressed. Like `click()`,
* the untrusted click still runs native activation behavior (form submission,
* link navigation).
* `detail` defaults to 0 (the native convention for keyboard-generated clicks);
* pass `detail: 1` when the click represents a mouse gesture so consumers keying
* off `detail === 0` don't classify it as a keyboard activation.
*/
function dispatchClickWithModifiers(target, sourceEvent, { detail = 0 } = {}) {
	target.dispatchEvent(new (getWindow(target)).PointerEvent("click", {
		bubbles: true,
		cancelable: true,
		composed: true,
		detail,
		shiftKey: sourceEvent.shiftKey,
		ctrlKey: sourceEvent.ctrlKey,
		altKey: sourceEvent.altKey,
		metaKey: sourceEvent.metaKey
	}));
}
//#endregion
//#region node_modules/@base-ui/react/internals/use-button/useButton.mjs
function useButton(parameters = {}) {
	const { disabled = false, focusableWhenDisabled, tabIndex = 0, native: isNativeButton = true, composite: compositeProp } = parameters;
	const elementRef = import_react.useRef(null);
	const compositeRootContext = useCompositeRootContext(true);
	const isCompositeItem = compositeProp ?? compositeRootContext !== void 0;
	const { props: focusableWhenDisabledProps } = useFocusableWhenDisabled({
		focusableWhenDisabled,
		disabled,
		composite: isCompositeItem,
		tabIndex,
		isNativeButton
	});
	const updateDisabled = import_react.useCallback(() => {
		const element = elementRef.current;
		if (!isButtonElement(element)) return;
		if (isCompositeItem && disabled && focusableWhenDisabledProps.disabled === void 0 && element.disabled) element.disabled = false;
	}, [
		disabled,
		focusableWhenDisabledProps.disabled,
		isCompositeItem
	]);
	useIsoLayoutEffect(updateDisabled, [updateDisabled]);
	return {
		getButtonProps: import_react.useCallback((externalProps = {}) => {
			const { onClick: externalOnClick, onMouseDown: externalOnMouseDown, onKeyUp: externalOnKeyUp, onKeyDown: externalOnKeyDown, onPointerDown: externalOnPointerDown, ...otherExternalProps } = externalProps;
			return mergeProps({
				onClick(event) {
					if (disabled) {
						event.preventDefault();
						return;
					}
					externalOnClick?.(event);
				},
				onMouseDown(event) {
					if (!disabled) externalOnMouseDown?.(event);
				},
				onKeyDown(event) {
					if (disabled) return;
					makeEventPreventable(event);
					externalOnKeyDown?.(event);
					if (event.baseUIHandlerPrevented) return;
					const isCurrentTarget = event.target === event.currentTarget;
					const currentTarget = event.currentTarget;
					const isButton = isButtonElement(currentTarget);
					const isLink = !isNativeButton && isValidLinkElement(currentTarget);
					const shouldClick = isCurrentTarget && (isNativeButton ? isButton : !isLink);
					const isEnterKey = event.key === "Enter";
					const isSpaceKey = event.key === " ";
					const role = currentTarget.getAttribute("role");
					const isTextNavigationRole = role?.startsWith("menuitem") || role === "option" || role === "gridcell";
					if (isCurrentTarget && isCompositeItem && isSpaceKey) {
						if (event.defaultPrevented && isTextNavigationRole) return;
						event.preventDefault();
						if (!isNativeButton || isButton) {
							event.preventBaseUIHandler();
							dispatchClickWithModifiers(currentTarget, event);
						}
						return;
					}
					if (!shouldClick || isNativeButton || !isSpaceKey && !isEnterKey) {
						if (isCurrentTarget && isLink && isSpaceKey) event.preventDefault();
						return;
					}
					if (event.defaultPrevented) return;
					event.preventDefault();
					if (isEnterKey) {
						event.preventBaseUIHandler();
						dispatchClickWithModifiers(currentTarget, event);
					}
				},
				onKeyUp(event) {
					if (disabled) return;
					makeEventPreventable(event);
					externalOnKeyUp?.(event);
					if (event.target === event.currentTarget && isNativeButton && isCompositeItem && isButtonElement(event.currentTarget) && event.key === " ") {
						event.preventDefault();
						return;
					}
					if (event.baseUIHandlerPrevented) return;
					if (event.target === event.currentTarget && !isNativeButton && !isCompositeItem && !event.defaultPrevented && event.key === " ") {
						event.preventBaseUIHandler();
						dispatchClickWithModifiers(event.currentTarget, event);
					}
				},
				onPointerDown(event) {
					if (disabled) {
						event.preventDefault();
						return;
					}
					externalOnPointerDown?.(event);
				}
			}, isNativeButton ? { type: "button" } : { role: "button" }, focusableWhenDisabledProps, otherExternalProps);
		}, [
			disabled,
			focusableWhenDisabledProps,
			isCompositeItem,
			isNativeButton
		]),
		buttonRef: useStableCallback((element) => {
			elementRef.current = element;
			updateDisabled();
		})
	};
}
function isButtonElement(elem) {
	return isHTMLElement(elem) && elem.tagName === "BUTTON";
}
function isValidLinkElement(elem) {
	return isHTMLElement(elem) && elem.tagName === "A" && Boolean(elem.href);
}
//#endregion
//#region node_modules/@base-ui/react/button/Button.mjs
/**
* A button component that can be used to trigger actions.
* Renders a `<button>` element.
*
* Documentation: [Base UI Button](https://base-ui.com/react/components/button)
*/
var Button$1 = /* @__PURE__ */ import_react.forwardRef(function Button(componentProps, forwardedRef) {
	const { render, className, disabled = false, focusableWhenDisabled = false, nativeButton = true, style, ...elementProps } = componentProps;
	const { getButtonProps, buttonRef } = useButton({
		disabled,
		focusableWhenDisabled,
		native: nativeButton
	});
	return useRenderElement("button", componentProps, {
		state: { disabled },
		ref: [forwardedRef, buttonRef],
		props: [elementProps, getButtonProps]
	});
});
//#endregion
//#region components/ui/button.tsx
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/80",
			outline: "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
			secondary: "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
			ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
			destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pe-2 has-data-[icon=inline-start]:ps-2",
			xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pe-1.5 has-data-[icon=inline-start]:ps-1.5 [&_svg:not([class*='size-'])]:size-3",
			sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pe-1.5 has-data-[icon=inline-start]:ps-1.5 [&_svg:not([class*='size-'])]:size-3.5",
			lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pe-2 has-data-[icon=inline-start]:ps-2",
			icon: "size-8",
			"icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
			"icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
			"icon-lg": "size-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant = "default", size = "default", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
		"data-slot": "button",
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
//#endregion
//#region node_modules/@base-ui/react/internals/field-constants/constants.mjs
var DEFAULT_VALIDITY_STATE = {
	badInput: false,
	customError: false,
	patternMismatch: false,
	rangeOverflow: false,
	rangeUnderflow: false,
	stepMismatch: false,
	tooLong: false,
	tooShort: false,
	typeMismatch: false,
	valid: null,
	valueMissing: false
};
var DEFAULT_FIELD_ROOT_STATE = {
	disabled: false,
	valid: null,
	touched: false,
	dirty: false,
	filled: false,
	focused: false
};
var fieldValidityMapping = { valid(value) {
	if (value === null) return null;
	if (value) return { "data-valid": "" };
	return { "data-invalid": "" };
} };
//#endregion
//#region node_modules/@base-ui/react/internals/field-root-context/FieldRootContext.mjs
var DEFAULT_FIELD_ROOT_CONTEXT = {
	invalid: void 0,
	name: void 0,
	validityData: {
		state: DEFAULT_VALIDITY_STATE,
		errors: [],
		error: "",
		value: "",
		initialValue: null
	},
	setValidityData: NOOP,
	disabled: void 0,
	setTouched: NOOP,
	setDirty: NOOP,
	setFilled: NOOP,
	setFocused: NOOP,
	validationMode: "onSubmit",
	shouldValidateOnChange: () => false,
	state: DEFAULT_FIELD_ROOT_STATE,
	registerFieldControl: NOOP,
	validation: {
		getValidationProps: (_disabled, props = EMPTY_OBJECT) => props,
		inputRef: { current: null },
		registeredInputs: /* @__PURE__ */ new Map(),
		registerInput: NOOP,
		getInputControl: () => null,
		commit: async () => {},
		change: NOOP
	}
};
var FieldRootContext = /* @__PURE__ */ import_react.createContext(DEFAULT_FIELD_ROOT_CONTEXT);
function useFieldRootContext(optional = true) {
	const context = import_react.useContext(FieldRootContext);
	if (context.setValidityData === NOOP && !optional) throw new Error(formatErrorMessage(28));
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/internals/form-context/FormContext.mjs
var FormContext = /* @__PURE__ */ import_react.createContext({
	elementRef: { current: null },
	formRef: { current: { fields: /* @__PURE__ */ new Map() } },
	errors: {},
	clearErrors: NOOP,
	validationMode: "onSubmit",
	submitAttemptedRef: { current: false }
});
function useFormContext() {
	return import_react.useContext(FormContext);
}
//#endregion
//#region node_modules/@base-ui/react/internals/labelable-provider/LabelableContext.mjs
/**
* A context for providing [labelable elements](https://html.spec.whatwg.org/multipage/forms.html#category-label)\
* with an accessible name (label) and description.
*/
var LabelableContext = /* @__PURE__ */ import_react.createContext({
	controlId: void 0,
	registerControlId: NOOP,
	labelId: void 0,
	setLabelId: NOOP,
	messageIds: [],
	setMessageIds: NOOP,
	getDescriptionProps: (externalProps) => externalProps
});
function useLabelableContext() {
	return import_react.useContext(LabelableContext);
}
//#endregion
//#region node_modules/@base-ui/react/internals/labelable-provider/useLabelableId.mjs
function useLabelableId(params = {}) {
	const { id, implicit = false, controlRef } = params;
	const { controlId, registerControlId } = useLabelableContext();
	const defaultId = useBaseUiId(id);
	const controlIdForEffect = implicit ? controlId : void 0;
	const controlSourceRef = useRefWithInit(() => Symbol());
	const hasRegisteredRef = import_react.useRef(false);
	const hadExplicitIdRef = import_react.useRef(id != null);
	const unregisterControlId = useStableCallback(() => {
		if (!hasRegisteredRef.current || registerControlId === NOOP) return;
		hasRegisteredRef.current = false;
		registerControlId(controlSourceRef.current, void 0);
	});
	useIsoLayoutEffect(() => {
		if (registerControlId === NOOP) return;
		let nextId;
		if (implicit) {
			const elem = controlRef?.current;
			if (isElement(elem) && elem.closest("label") != null) nextId = id ?? null;
			else nextId = controlIdForEffect ?? defaultId;
		} else if (id != null) {
			hadExplicitIdRef.current = true;
			nextId = id;
		} else if (hadExplicitIdRef.current) nextId = defaultId;
		else {
			unregisterControlId();
			return;
		}
		if (nextId === void 0) {
			unregisterControlId();
			return;
		}
		hasRegisteredRef.current = true;
		registerControlId(controlSourceRef.current, nextId);
	}, [
		id,
		controlRef,
		controlIdForEffect,
		registerControlId,
		implicit,
		defaultId,
		controlSourceRef,
		unregisterControlId
	]);
	import_react.useEffect(() => {
		return unregisterControlId;
	}, [unregisterControlId]);
	return controlId ?? defaultId;
}
//#endregion
//#region node_modules/@base-ui/utils/useControlled.mjs
function useControlled({ controlled, default: defaultProp, name, state = "value" }) {
	const { current: isControlled } = import_react.useRef(controlled !== void 0);
	const [valueState, setValue] = import_react.useState(defaultProp);
	return [isControlled ? controlled : valueState, import_react.useCallback((newValue) => {
		if (!isControlled) setValue(newValue);
	}, [])];
}
//#endregion
//#region node_modules/@base-ui/react/internals/field-register-control/useRegisterFieldControl.mjs
function useRegisterFieldControl(controlRef, id, value, getFormValueOverride, enabled = true, name) {
	const { registerFieldControl } = useFieldRootContext();
	const sourceRef = useRefWithInit(() => Symbol());
	useIsoLayoutEffect(() => {
		const source = sourceRef.current;
		if (!enabled) {
			registerFieldControl(source, void 0);
			return;
		}
		registerFieldControl(source, {
			controlRef,
			getValue: getFormValueOverride,
			id,
			name,
			value
		});
	}, [
		controlRef,
		enabled,
		getFormValueOverride,
		id,
		name,
		registerFieldControl,
		sourceRef,
		value
	]);
	useIsoLayoutEffect(() => {
		const source = sourceRef.current;
		return () => {
			registerFieldControl(source, void 0);
		};
	}, [registerFieldControl, sourceRef]);
}
//#endregion
//#region node_modules/@base-ui/react/field/control/FieldControl.mjs
/**
* The form control to label and validate.
* Renders an `<input>` element.
*
* You can omit this part and use any Base UI input component instead. For example,
* [Input](https://base-ui.com/react/components/input), [Checkbox](https://base-ui.com/react/components/checkbox),
* or [Select](https://base-ui.com/react/components/select), among others, will work with Field out of the box.
*
* Documentation: [Base UI Field](https://base-ui.com/react/components/field)
*/
var FieldControl = /* @__PURE__ */ import_react.forwardRef(function FieldControl(componentProps, forwardedRef) {
	const { render, className, id: idProp, name: nameProp, value: valueProp, disabled: disabledProp = false, onValueChange, defaultValue, autoFocus = false, style, ...elementProps } = componentProps;
	const { state: fieldState, name: fieldName, disabled: fieldDisabled, setTouched, setDirty, validityData, setFocused, setFilled, validationMode, validation } = useFieldRootContext();
	const { clearErrors } = useFormContext();
	const disabled = fieldDisabled || disabledProp;
	const name = fieldName ?? nameProp;
	const state = {
		...fieldState,
		disabled
	};
	const { labelId } = useLabelableContext();
	const id = useLabelableId({ id: idProp });
	useIsoLayoutEffect(() => {
		const hasExternalValue = valueProp != null;
		if (validation.inputRef.current?.value || hasExternalValue && valueProp !== "") setFilled(true);
		else if (hasExternalValue && valueProp === "") setFilled(false);
	}, [
		validation.inputRef,
		setFilled,
		valueProp
	]);
	const inputRef = import_react.useRef(null);
	useIsoLayoutEffect(() => {
		if (autoFocus && inputRef.current === activeElement(ownerDocument(inputRef.current))) setFocused(true);
	}, [autoFocus, setFocused]);
	const [valueUnwrapped] = useControlled({
		controlled: valueProp,
		default: defaultValue,
		name: "FieldControl",
		state: "value"
	});
	const isControlled = valueProp !== void 0;
	const value = isControlled ? valueUnwrapped : void 0;
	const getValueFromInput = useStableCallback(() => validation.inputRef.current?.value);
	useRegisterFieldControl(validation.inputRef, id, value, getValueFromInput, !disabled, nameProp);
	return useRenderElement("input", componentProps, {
		ref: [forwardedRef, inputRef],
		state,
		props: [
			{
				id,
				disabled,
				name,
				ref: validation.inputRef,
				"aria-labelledby": labelId,
				autoFocus,
				...isControlled ? { value } : { defaultValue },
				onChange(event) {
					const inputValue = event.currentTarget.value;
					onValueChange?.(inputValue, createChangeEventDetails(none, event.nativeEvent));
					setDirty(inputValue !== (validityData.initialValue ?? ""));
					setFilled(inputValue !== "");
					if (!event.nativeEvent.defaultPrevented) {
						clearErrors(name);
						validation.change(inputValue);
					}
				},
				onFocus() {
					setFocused(true);
				},
				onBlur(event) {
					setTouched(true);
					setFocused(false);
					if (validationMode === "onBlur") validation.commit(event.currentTarget.value);
				},
				onKeyDown(event) {
					if (event.currentTarget.tagName === "INPUT" && event.key === "Enter") {
						setTouched(true);
						validation.commit(event.currentTarget.value);
					}
				}
			},
			elementProps,
			(props) => validation.getValidationProps(disabled, props)
		],
		stateAttributesMapping: fieldValidityMapping
	});
});
//#endregion
//#region node_modules/@base-ui/react/input/Input.mjs
/**
* A native input element that automatically works with [Field](https://base-ui.com/react/components/field).
* Renders an `<input>` element.
*
* Documentation: [Base UI Input](https://base-ui.com/react/components/input)
*/
var Input$1 = /* @__PURE__ */ import_react.forwardRef(function Input(props, forwardedRef) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldControl, {
		ref: forwardedRef,
		...props
	});
});
//#endregion
//#region components/ui/input.tsx
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
		type,
		"data-slot": "input",
		className: cn("h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40", className),
		...props
	});
}
//#endregion
//#region node_modules/@base-ui/react/separator/Separator.mjs
/**
* A separator element accessible to screen readers.
* Renders a `<div>` element.
*
* Documentation: [Base UI Separator](https://base-ui.com/react/components/separator)
*/
var Separator$1 = /* @__PURE__ */ import_react.forwardRef(function SeparatorComponent(componentProps, forwardedRef) {
	const { className, render, orientation = "horizontal", style, ...elementProps } = componentProps;
	return useRenderElement("div", componentProps, {
		state: { orientation },
		ref: forwardedRef,
		props: [{
			role: "separator",
			"aria-orientation": orientation
		}, elementProps]
	});
});
//#endregion
//#region components/ui/separator.tsx
function Separator({ className, orientation = "horizontal", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator$1, {
		"data-slot": "separator",
		orientation,
		className: cn("shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch", className),
		...props
	});
}
//#endregion
//#region node_modules/@base-ui/react/dialog/root/DialogRootContext.mjs
var DialogRootContext = /* @__PURE__ */ import_react.createContext(void 0);
function useDialogRootContext(optional) {
	const store = import_react.useContext(DialogRootContext);
	if (!optional && store === void 0) throw new Error(formatErrorMessage(27));
	return store;
}
//#endregion
//#region node_modules/@base-ui/react/dialog/backdrop/DialogBackdrop.mjs
/**
* An overlay displayed beneath the popup.
* Renders a `<div>` element.
*
* Documentation: [Base UI Dialog](https://base-ui.com/react/components/dialog)
*/
var DialogBackdrop = /* @__PURE__ */ import_react.forwardRef(function DialogBackdrop(componentProps, forwardedRef) {
	const { render, className, style, forceRender = false, ...elementProps } = componentProps;
	const store = useDialogRootContext();
	const open = store.useState("open");
	const nested = store.useState("nested");
	const mounted = store.useState("mounted");
	return useRenderElement("div", componentProps, {
		state: {
			open,
			transitionStatus: store.useState("transitionStatus")
		},
		ref: [store.context.backdropRef, forwardedRef],
		stateAttributesMapping: popupTransitionStateMapping,
		props: [{
			role: "presentation",
			hidden: !mounted,
			style: {
				userSelect: "none",
				WebkitUserSelect: "none"
			}
		}, elementProps],
		enabled: forceRender || !nested
	});
});
//#endregion
//#region node_modules/@base-ui/react/dialog/close/DialogClose.mjs
/**
* A button that closes the dialog.
* Renders a `<button>` element.
*
* Documentation: [Base UI Dialog](https://base-ui.com/react/components/dialog)
*/
var DialogClose = /* @__PURE__ */ import_react.forwardRef(function DialogClose(componentProps, forwardedRef) {
	const { render, className, style, disabled = false, nativeButton = true, ...elementProps } = componentProps;
	const store = useDialogRootContext();
	const open = store.useState("open");
	const { getButtonProps, buttonRef } = useButton({
		disabled,
		native: nativeButton
	});
	const state = { disabled };
	function handleClick(event) {
		if (open) store.setOpen(false, createChangeEventDetails(closePress, event.nativeEvent));
	}
	return useRenderElement("button", componentProps, {
		state,
		ref: [forwardedRef, buttonRef],
		props: [
			{ onClick: handleClick },
			elementProps,
			getButtonProps
		]
	});
});
//#endregion
//#region node_modules/@base-ui/react/dialog/description/DialogDescription.mjs
/**
* A paragraph with additional information about the dialog.
* Renders a `<p>` element.
*
* Documentation: [Base UI Dialog](https://base-ui.com/react/components/dialog)
*/
var DialogDescription = /* @__PURE__ */ import_react.forwardRef(function DialogDescription(componentProps, forwardedRef) {
	const { render, className, style, id: idProp, ...elementProps } = componentProps;
	const store = useDialogRootContext();
	const id = useBaseUiId(idProp);
	store.useSyncedValueWithCleanup("descriptionElementId", id);
	return useRenderElement("p", componentProps, {
		ref: forwardedRef,
		props: [{ id }, elementProps]
	});
});
//#endregion
//#region node_modules/@base-ui/react/floating-ui-react/utils/enqueueFocus.mjs
var rafId = 0;
function enqueueFocus(el, options = {}) {
	const { preventScroll = false, sync = false, shouldFocus } = options;
	cancelAnimationFrame(rafId);
	function exec() {
		if (shouldFocus && !shouldFocus()) return;
		el?.focus({ preventScroll });
	}
	if (sync) {
		exec();
		return NOOP;
	}
	const currentRafId = requestAnimationFrame(exec);
	rafId = currentRafId;
	return () => {
		if (rafId === currentRafId) {
			cancelAnimationFrame(currentRafId);
			rafId = 0;
		}
	};
}
//#endregion
//#region node_modules/@base-ui/react/floating-ui-react/utils/markOthers.mjs
var counters = {
	inert: /* @__PURE__ */ new WeakMap(),
	"aria-hidden": /* @__PURE__ */ new WeakMap()
};
var markerName = "data-base-ui-inert";
var uncontrolledElementsSets = {
	inert: /* @__PURE__ */ new WeakSet(),
	"aria-hidden": /* @__PURE__ */ new WeakSet()
};
var markerCounterMap = /* @__PURE__ */ new WeakMap();
var lockCount = 0;
function getUncontrolledElementsSet(controlAttribute) {
	return uncontrolledElementsSets[controlAttribute];
}
function unwrapHost(node) {
	if (!node) return null;
	return isShadowRoot(node) ? node.host : unwrapHost(node.parentNode);
}
var correctElements = (parent, targets) => targets.map((target) => {
	if (parent.contains(target)) return target;
	const correctedTarget = unwrapHost(target);
	if (parent.contains(correctedTarget)) return correctedTarget;
	return null;
}).filter((x) => x != null);
var buildKeepSet = (targets) => {
	const keep = /* @__PURE__ */ new Set();
	targets.forEach((target) => {
		let node = target;
		while (node && !keep.has(node)) {
			keep.add(node);
			node = node.parentNode;
		}
	});
	return keep;
};
var collectOutsideElements = (root, keepElements, stopElements) => {
	const outside = [];
	const walk = (parent) => {
		if (!parent || stopElements.has(parent)) return;
		Array.from(parent.children).forEach((node) => {
			if (getNodeName(node) === "script") return;
			if (keepElements.has(node)) walk(node);
			else outside.push(node);
		});
	};
	walk(root);
	return outside;
};
function applyAttributeToOthers(uncorrectedAvoidElements, body, ariaHidden, inert, { mark = true }) {
	let controlAttribute = null;
	if (inert) controlAttribute = "inert";
	else if (ariaHidden) controlAttribute = "aria-hidden";
	let counterMap = null;
	let uncontrolledElementsSet = null;
	const avoidElements = correctElements(body, uncorrectedAvoidElements);
	const markerTargets = mark ? collectOutsideElements(body, buildKeepSet(avoidElements), new Set(avoidElements)) : [];
	const hiddenElements = [];
	const markedElements = [];
	if (controlAttribute) {
		const map = counters[controlAttribute];
		const currentUncontrolledElementsSet = getUncontrolledElementsSet(controlAttribute);
		uncontrolledElementsSet = currentUncontrolledElementsSet;
		counterMap = map;
		const ariaLiveElements = correctElements(body, Array.from(body.querySelectorAll("[aria-live]")));
		const controlElements = avoidElements.concat(ariaLiveElements);
		collectOutsideElements(body, buildKeepSet(controlElements), new Set(controlElements)).forEach((node) => {
			const attr = node.getAttribute(controlAttribute);
			const alreadyHidden = attr !== null && attr !== "false";
			const counterValue = (map.get(node) || 0) + 1;
			map.set(node, counterValue);
			hiddenElements.push(node);
			if (counterValue === 1 && alreadyHidden) currentUncontrolledElementsSet.add(node);
			if (!alreadyHidden) node.setAttribute(controlAttribute, controlAttribute === "inert" ? "" : "true");
		});
	}
	if (mark) markerTargets.forEach((node) => {
		const markerValue = (markerCounterMap.get(node) || 0) + 1;
		markerCounterMap.set(node, markerValue);
		markedElements.push(node);
		if (markerValue === 1) node.setAttribute(markerName, "");
	});
	lockCount += 1;
	return () => {
		if (counterMap) hiddenElements.forEach((element) => {
			const counterValue = (counterMap.get(element) || 0) - 1;
			counterMap.set(element, counterValue);
			if (!counterValue) {
				if (!uncontrolledElementsSet?.has(element) && controlAttribute) element.removeAttribute(controlAttribute);
				uncontrolledElementsSet?.delete(element);
			}
		});
		if (mark) markedElements.forEach((element) => {
			const markerValue = (markerCounterMap.get(element) || 0) - 1;
			markerCounterMap.set(element, markerValue);
			if (!markerValue) element.removeAttribute(markerName);
		});
		lockCount -= 1;
		if (!lockCount) {
			counters.inert = /* @__PURE__ */ new WeakMap();
			counters["aria-hidden"] = /* @__PURE__ */ new WeakMap();
			uncontrolledElementsSets.inert = /* @__PURE__ */ new WeakSet();
			uncontrolledElementsSets["aria-hidden"] = /* @__PURE__ */ new WeakSet();
			markerCounterMap = /* @__PURE__ */ new WeakMap();
		}
	};
}
function markOthers(avoidElements, options = {}) {
	const { ariaHidden = false, inert = false, mark = true } = options;
	const body = ownerDocument(avoidElements[0]).body;
	return applyAttributeToOthers(avoidElements, body, ariaHidden, inert, { mark });
}
//#endregion
//#region node_modules/@base-ui/react/floating-ui-react/components/FloatingFocusManager.mjs
function getEventType(event, lastInteractionType) {
	const win = getWindow(getTarget(event));
	if (event instanceof win.KeyboardEvent) return "keyboard";
	if (event instanceof win.FocusEvent) return lastInteractionType || "keyboard";
	if ("pointerType" in event) return event.pointerType || "keyboard";
	if ("touches" in event) return "touch";
	if (event instanceof win.MouseEvent) return lastInteractionType || (event.detail === 0 ? "keyboard" : "mouse");
	return "";
}
var LIST_LIMIT = 20;
var previouslyFocusedElements = [];
function clearDisconnectedPreviouslyFocusedElements() {
	previouslyFocusedElements = previouslyFocusedElements.filter((entry) => {
		return entry.deref()?.isConnected;
	});
}
function addPreviouslyFocusedElement(element) {
	clearDisconnectedPreviouslyFocusedElements();
	if (element && getNodeName(element) !== "body") {
		previouslyFocusedElements.push(new WeakRef(element));
		if (previouslyFocusedElements.length > LIST_LIMIT) previouslyFocusedElements = previouslyFocusedElements.slice(-LIST_LIMIT);
	}
}
function getPreviouslyFocusedElement() {
	clearDisconnectedPreviouslyFocusedElements();
	return previouslyFocusedElements[previouslyFocusedElements.length - 1]?.deref();
}
function getFirstTabbableElement(container) {
	if (!container) return null;
	if (isTabbable(container)) return container;
	return tabbable(container)[0] || container;
}
function handleTabIndex(floatingFocusElement) {
	if (floatingFocusElement.hasAttribute("tabindex") && !floatingFocusElement.hasAttribute("data-tabindex")) return;
	if (!floatingFocusElement.getAttribute("role")?.includes("dialog")) return;
	const tabbableContent = focusable(floatingFocusElement).filter((element) => {
		const dataTabIndex = element.getAttribute("data-tabindex") || "";
		return isTabbable(element) || element.hasAttribute("data-tabindex") && !dataTabIndex.startsWith("-");
	});
	const tabIndex = floatingFocusElement.getAttribute("tabindex");
	if (tabbableContent.length === 0) {
		if (tabIndex !== "0") {
			floatingFocusElement.setAttribute("tabindex", "0");
			floatingFocusElement.setAttribute("data-tabindex", "0");
		}
	} else if (tabIndex !== "-1" || floatingFocusElement.hasAttribute("data-tabindex") && floatingFocusElement.getAttribute("data-tabindex") !== "-1") {
		floatingFocusElement.setAttribute("tabindex", "-1");
		floatingFocusElement.setAttribute("data-tabindex", "-1");
	}
}
/**
* Provides focus management for the floating element.
* @see https://floating-ui.com/docs/FloatingFocusManager
* @internal
*/
function FloatingFocusManager(props) {
	const { context, children, disabled = false, initialFocus = true, returnFocus = true, restoreFocus = false, modal = true, closeOnFocusOut = true, openInteractionType = "", nextFocusableElement, previousFocusableElement, beforeContentFocusGuardRef, externalTree, getInsideElements } = props;
	const store = "rootStore" in context ? context.rootStore : context;
	const open = store.useState("open");
	const domReference = store.useState("domReferenceElement");
	const floating = store.useState("floatingElement");
	const { events, dataRef } = store.context;
	const getNodeId = useStableCallback(() => dataRef.current.floatingContext?.nodeId);
	const ignoreInitialFocus = initialFocus === false;
	const isUntrappedTypeableCombobox = isTypeableCombobox(domReference) && ignoreInitialFocus;
	const initialFocusRef = useValueAsRef(initialFocus);
	const returnFocusRef = useValueAsRef(returnFocus);
	const openInteractionTypeRef = useValueAsRef(openInteractionType);
	const openRef = useValueAsRef(open);
	const tree = useFloatingTree(externalTree);
	const portalContext = usePortalContext();
	const preventReturnFocusRef = import_react.useRef(false);
	const isPointerDownRef = import_react.useRef(false);
	const pointerDownOutsideRef = import_react.useRef(false);
	const lastFocusedTabbableRef = import_react.useRef(null);
	const closeTypeRef = import_react.useRef("");
	const lastInteractionTypeRef = import_react.useRef("");
	const beforeGuardRef = import_react.useRef(null);
	const afterGuardRef = import_react.useRef(null);
	const mergedBeforeGuardRef = useMergedRefs(beforeGuardRef, beforeContentFocusGuardRef, portalContext?.beforeInsideRef);
	const mergedAfterGuardRef = useMergedRefs(afterGuardRef, portalContext?.afterInsideRef);
	const blurTimeout = useTimeout();
	const pointerDownTimeout = useTimeout();
	const restoreFocusFrame = useAnimationFrame();
	const isInsidePortal = portalContext != null;
	const floatingFocusElement = getFloatingFocusElement(floating);
	const getTabbableContent = useStableCallback((container = floatingFocusElement) => {
		return container ? tabbable(container) : [];
	});
	const getResolvedInsideElements = useStableCallback(() => getInsideElements?.().filter((element) => element != null) ?? []);
	import_react.useEffect(() => {
		if (disabled || !modal) return;
		function onKeyDown(event) {
			if (event.key === "Tab") {
				if (contains(floatingFocusElement, activeElement(ownerDocument(floatingFocusElement))) && getTabbableContent().length === 0 && !isUntrappedTypeableCombobox) stopEvent(event);
			}
		}
		return addEventListener(ownerDocument(floatingFocusElement), "keydown", onKeyDown);
	}, [
		disabled,
		floatingFocusElement,
		modal,
		isUntrappedTypeableCombobox,
		getTabbableContent
	]);
	import_react.useEffect(() => {
		if (disabled || !open) return;
		const doc = ownerDocument(floatingFocusElement);
		function clearPointerDownOutside() {
			pointerDownOutsideRef.current = false;
		}
		function onPointerDown(event) {
			const target = getTarget(event);
			const insideElements = getResolvedInsideElements();
			pointerDownOutsideRef.current = !(contains(floating, target) || contains(domReference, target) || contains(portalContext?.portalNode, target) || insideElements.some((element) => element === target || contains(element, target)));
			lastInteractionTypeRef.current = event.pointerType || "keyboard";
			if (target?.closest(`[data-base-ui-click-trigger]`)) {
				isPointerDownRef.current = true;
				pointerDownTimeout.start(0, () => {
					isPointerDownRef.current = false;
				});
			}
		}
		function onKeyDown() {
			lastInteractionTypeRef.current = "keyboard";
		}
		return mergeCleanups(addEventListener(doc, "pointerdown", onPointerDown, true), addEventListener(doc, "pointerup", clearPointerDownOutside, true), addEventListener(doc, "pointercancel", clearPointerDownOutside, true), addEventListener(doc, "keydown", onKeyDown, true), clearPointerDownOutside);
	}, [
		disabled,
		floating,
		domReference,
		floatingFocusElement,
		open,
		portalContext,
		pointerDownTimeout,
		getResolvedInsideElements
	]);
	import_react.useEffect(() => {
		if (disabled || !closeOnFocusOut) return;
		const doc = ownerDocument(floatingFocusElement);
		function handlePointerDown() {
			isPointerDownRef.current = true;
			pointerDownTimeout.start(0, () => {
				isPointerDownRef.current = false;
			});
		}
		function handleFocusIn(event) {
			const target = getTarget(event);
			if (isTabbable(target)) lastFocusedTabbableRef.current = target;
		}
		function handleFocusOutside(event) {
			const relatedTarget = event.relatedTarget;
			const currentTarget = event.currentTarget;
			const target = getTarget(event);
			if (modal && relatedTarget == null && target != null && contains(floating, target)) addPreviouslyFocusedElement(target);
			queueMicrotask(() => {
				const nodeId = getNodeId();
				const triggers = store.context.triggerElements;
				const insideElements = getResolvedInsideElements();
				const isRelatedFocusGuard = relatedTarget?.hasAttribute(createAttribute("focus-guard")) && [
					beforeGuardRef.current,
					afterGuardRef.current,
					portalContext?.beforeInsideRef.current,
					portalContext?.afterInsideRef.current,
					portalContext?.beforeOutsideRef.current,
					portalContext?.afterOutsideRef.current,
					resolveRef(previousFocusableElement),
					resolveRef(nextFocusableElement)
				].includes(relatedTarget);
				const movedToUnrelatedNode = !(contains(domReference, relatedTarget) || contains(floating, relatedTarget) || contains(relatedTarget, floating) || contains(portalContext?.portalNode, relatedTarget) || insideElements.some((element) => element === relatedTarget || contains(element, relatedTarget)) || triggers.hasMatchingElement((trigger) => contains(trigger, relatedTarget)) || isRelatedFocusGuard || tree && (getNodeChildren(tree.nodesRef.current, nodeId).find((node) => contains(node.context?.elements.floating, relatedTarget) || contains(node.context?.elements.domReference, relatedTarget)) || getNodeAncestors(tree.nodesRef.current, nodeId).find((node) => [node.context?.elements.floating, getFloatingFocusElement(node.context?.elements.floating)].includes(relatedTarget) || node.context?.elements.domReference === relatedTarget)));
				if (currentTarget === domReference && floatingFocusElement) handleTabIndex(floatingFocusElement);
				if (restoreFocus && currentTarget !== domReference && !isElementVisible(target) && activeElement(doc) === doc.body) {
					if (isHTMLElement(floatingFocusElement)) {
						floatingFocusElement.focus();
						if (restoreFocus === "popup") {
							restoreFocusFrame.request(() => {
								floatingFocusElement.focus();
							});
							return;
						}
					}
					const tabbableContent = getTabbableContent();
					const prevTabbable = lastFocusedTabbableRef.current;
					const nodeToFocus = (prevTabbable && tabbableContent.includes(prevTabbable) ? prevTabbable : null) || tabbableContent[tabbableContent.length - 1] || floatingFocusElement;
					if (isHTMLElement(nodeToFocus)) nodeToFocus.focus();
				}
				if (dataRef.current.insideReactTree) {
					dataRef.current.insideReactTree = false;
					return;
				}
				if ((isUntrappedTypeableCombobox ? true : !modal) && relatedTarget && movedToUnrelatedNode && !isPointerDownRef.current && (isUntrappedTypeableCombobox || relatedTarget !== getPreviouslyFocusedElement())) {
					preventReturnFocusRef.current = true;
					store.setOpen(false, createChangeEventDetails(focusOut, event));
				}
			});
		}
		function markInsideReactTree() {
			if (pointerDownOutsideRef.current) return;
			dataRef.current.insideReactTree = true;
			blurTimeout.start(0, () => {
				dataRef.current.insideReactTree = false;
			});
		}
		const domReferenceElement = isHTMLElement(domReference) ? domReference : null;
		if (!floating && !domReferenceElement) return;
		return mergeCleanups(domReferenceElement && addEventListener(domReferenceElement, "focusout", handleFocusOutside), domReferenceElement && addEventListener(domReferenceElement, "pointerdown", handlePointerDown), floating && addEventListener(floating, "focusin", handleFocusIn), floating && addEventListener(floating, "focusout", handleFocusOutside), floating && portalContext && addEventListener(floating, "focusout", markInsideReactTree, true));
	}, [
		disabled,
		domReference,
		floating,
		floatingFocusElement,
		modal,
		tree,
		portalContext,
		store,
		closeOnFocusOut,
		restoreFocus,
		getTabbableContent,
		isUntrappedTypeableCombobox,
		getNodeId,
		dataRef,
		blurTimeout,
		pointerDownTimeout,
		restoreFocusFrame,
		nextFocusableElement,
		previousFocusableElement,
		getResolvedInsideElements
	]);
	import_react.useEffect(() => {
		if (disabled || !floating || !open) return;
		const portalNodes = Array.from(portalContext?.portalNode?.querySelectorAll(`[${createAttribute("portal")}]`) || []);
		const rootAncestorComboboxDomReference = (tree ? getNodeAncestors(tree.nodesRef.current, getNodeId()) : []).find((node) => isTypeableCombobox(node.context?.elements.domReference || null))?.context?.elements.domReference;
		const ariaHiddenCleanup = markOthers([
			...[
				floating,
				...portalNodes,
				beforeGuardRef.current,
				afterGuardRef.current,
				portalContext?.beforeOutsideRef.current,
				portalContext?.afterOutsideRef.current,
				...getResolvedInsideElements()
			],
			rootAncestorComboboxDomReference,
			resolveRef(previousFocusableElement),
			resolveRef(nextFocusableElement),
			isUntrappedTypeableCombobox ? domReference : null
		].filter((x) => x != null), {
			ariaHidden: modal || isUntrappedTypeableCombobox,
			mark: false
		});
		const markerCleanup = markOthers([floating, ...portalNodes].filter((x) => x != null));
		return () => {
			markerCleanup();
			ariaHiddenCleanup();
		};
	}, [
		open,
		disabled,
		domReference,
		floating,
		modal,
		portalContext,
		isUntrappedTypeableCombobox,
		tree,
		getNodeId,
		nextFocusableElement,
		previousFocusableElement,
		getResolvedInsideElements
	]);
	useIsoLayoutEffect(() => {
		if (!open || disabled || !isHTMLElement(floatingFocusElement)) return;
		closeTypeRef.current = "";
		lastInteractionTypeRef.current = "";
		const doc = ownerDocument(floatingFocusElement);
		const previouslyFocusedElement = activeElement(doc);
		queueMicrotask(() => {
			const initialFocusValueOrFn = initialFocusRef.current;
			const resolvedInitialFocus = typeof initialFocusValueOrFn === "function" ? initialFocusValueOrFn(openInteractionTypeRef.current || "") : initialFocusValueOrFn;
			if (resolvedInitialFocus === void 0 || resolvedInitialFocus === false) return;
			if (contains(floatingFocusElement, previouslyFocusedElement)) return;
			let focusableElements = null;
			const getDefaultFocusElement = () => {
				if (focusableElements == null) focusableElements = getTabbableContent(floatingFocusElement);
				return focusableElements[0] || floatingFocusElement;
			};
			let elToFocus;
			if (resolvedInitialFocus === true || resolvedInitialFocus === null) elToFocus = getDefaultFocusElement();
			else elToFocus = resolveRef(resolvedInitialFocus);
			elToFocus = elToFocus || getDefaultFocusElement();
			const hadFocusInside = contains(floatingFocusElement, activeElement(doc));
			enqueueFocus(elToFocus, {
				preventScroll: elToFocus === floatingFocusElement,
				shouldFocus() {
					if (!openRef.current) return false;
					if (hadFocusInside) return true;
					const currentActiveElement = activeElement(doc);
					return !(currentActiveElement !== elToFocus && contains(floatingFocusElement, currentActiveElement));
				}
			});
		});
	}, [
		disabled,
		open,
		floatingFocusElement,
		getTabbableContent,
		initialFocusRef,
		openInteractionTypeRef,
		openRef
	]);
	useIsoLayoutEffect(() => {
		if (disabled || !floatingFocusElement) return;
		const doc = ownerDocument(floatingFocusElement);
		const elementFocusedBeforeOpen = activeElement(doc);
		const preferPreviousFocus = openInteractionTypeRef.current == null;
		addPreviouslyFocusedElement(elementFocusedBeforeOpen);
		function onOpenChangeLocal(details) {
			if (!details.open) closeTypeRef.current = getEventType(details.nativeEvent, lastInteractionTypeRef.current);
			if (details.reason === "trigger-hover" && details.nativeEvent.type === "mouseleave") preventReturnFocusRef.current = true;
			if (details.reason !== "outside-press") return;
			if (details.nested) preventReturnFocusRef.current = false;
			else if (isVirtualClick(details.nativeEvent) || isVirtualPointerEvent(details.nativeEvent)) preventReturnFocusRef.current = false;
			else {
				let isPreventScrollSupported = false;
				ownerDocument(floatingFocusElement).createElement("div").focus({ get preventScroll() {
					isPreventScrollSupported = true;
					return false;
				} });
				if (isPreventScrollSupported) preventReturnFocusRef.current = false;
				else preventReturnFocusRef.current = true;
			}
		}
		events.on("openchange", onOpenChangeLocal);
		function getReturnElement(closeType) {
			const returnFocusValueOrFn = returnFocusRef.current;
			let resolvedReturnFocusValue = typeof returnFocusValueOrFn === "function" ? returnFocusValueOrFn(closeType) : returnFocusValueOrFn;
			if (resolvedReturnFocusValue === void 0 || resolvedReturnFocusValue === false) return null;
			if (resolvedReturnFocusValue === null) resolvedReturnFocusValue = true;
			const referenceReturnElement = domReference?.isConnected ? domReference : null;
			const previousReturnElement = elementFocusedBeforeOpen?.isConnected && getNodeName(elementFocusedBeforeOpen) !== "body" ? elementFocusedBeforeOpen : null;
			let defaultReturnElement = preferPreviousFocus ? previousReturnElement || referenceReturnElement : referenceReturnElement || previousReturnElement;
			if (!defaultReturnElement) defaultReturnElement = getPreviouslyFocusedElement() || null;
			if (typeof resolvedReturnFocusValue === "boolean") return defaultReturnElement;
			return resolveRef(resolvedReturnFocusValue) || defaultReturnElement || null;
		}
		return () => {
			events.off("openchange", onOpenChangeLocal);
			const activeEl = activeElement(doc);
			const insideElements = getResolvedInsideElements();
			const isFocusInsideFloatingTree = contains(floating, activeEl) || insideElements.some((element) => element === activeEl || contains(element, activeEl)) || tree && getNodeChildren(tree.nodesRef.current, getNodeId(), false).some((node) => contains(node.context?.elements.floating, activeEl));
			const returnFocusValueOrFn = returnFocusRef.current;
			const closeType = closeTypeRef.current;
			const returnElement = getReturnElement(closeType);
			queueMicrotask(() => {
				const tabbableReturnElement = getFirstTabbableElement(returnElement);
				const hasExplicitReturnFocus = typeof returnFocusValueOrFn !== "boolean";
				if (returnFocusValueOrFn && !preventReturnFocusRef.current && isHTMLElement(tabbableReturnElement) && (!hasExplicitReturnFocus && tabbableReturnElement !== activeEl && activeEl !== doc.body ? isFocusInsideFloatingTree : true)) {
					const focusOptions = { preventScroll: true };
					if (closeType === "keyboard") focusOptions.focusVisible = true;
					tabbableReturnElement.focus(focusOptions);
				}
				preventReturnFocusRef.current = false;
			});
		};
	}, [
		disabled,
		floating,
		floatingFocusElement,
		returnFocusRef,
		openInteractionTypeRef,
		events,
		tree,
		domReference,
		getNodeId,
		getResolvedInsideElements
	]);
	useIsoLayoutEffect(() => {
		if (!webkit || open || !floating) return;
		const activeEl = activeElement(ownerDocument(floating));
		if (!isHTMLElement(activeEl) || !isTypeableElement(activeEl)) return;
		if (contains(floating, activeEl)) activeEl.blur();
	}, [open, floating]);
	useIsoLayoutEffect(() => {
		if (disabled || !portalContext) return;
		portalContext.setFocusManagerState({
			modal,
			closeOnFocusOut,
			open,
			onOpenChange: store.setOpen,
			domReference
		});
		return () => {
			portalContext.setFocusManagerState(null);
		};
	}, [
		disabled,
		portalContext,
		modal,
		open,
		store,
		closeOnFocusOut,
		domReference
	]);
	useIsoLayoutEffect(() => {
		if (disabled || !floatingFocusElement) return;
		handleTabIndex(floatingFocusElement);
		return () => {
			queueMicrotask(clearDisconnectedPreviouslyFocusedElements);
		};
	}, [disabled, floatingFocusElement]);
	const shouldRenderGuards = !disabled && (modal ? !isUntrappedTypeableCombobox : true) && (isInsidePortal || modal);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [
		shouldRenderGuards && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusGuard, {
			"data-type": "inside",
			ref: mergedBeforeGuardRef,
			onFocus: (event) => {
				if (modal) {
					const els = getTabbableContent();
					enqueueFocus(els[els.length - 1]);
				} else if (portalContext?.portalNode) {
					preventReturnFocusRef.current = false;
					if (isOutsideEvent(event, portalContext.portalNode)) getNextTabbable(domReference)?.focus();
					else resolveRef(previousFocusableElement ?? portalContext.beforeOutsideRef)?.focus();
				}
			}
		}),
		children,
		shouldRenderGuards && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusGuard, {
			"data-type": "inside",
			ref: mergedAfterGuardRef,
			onFocus: (event) => {
				if (modal) enqueueFocus(getTabbableContent()[0]);
				else if (portalContext?.portalNode) {
					if (closeOnFocusOut) preventReturnFocusRef.current = true;
					if (isOutsideEvent(event, portalContext.portalNode)) getPreviousTabbable(domReference)?.focus();
					else resolveRef(nextFocusableElement ?? portalContext.afterOutsideRef)?.focus();
				}
			}
		})
	] });
}
//#endregion
//#region node_modules/@base-ui/react/floating-ui-react/hooks/useClick.mjs
/**
* Opens or closes the floating element when clicking the reference element.
* @see https://floating-ui.com/docs/useClick
*/
function useClick(context, props = {}) {
	const { enabled = true, event: eventOption = "click", toggle = true, ignoreMouse = false, stickIfOpen = true, touchOpenDelay = 0, reason = triggerPress } = props;
	const store = "rootStore" in context ? context.rootStore : context;
	const dataRef = store.context.dataRef;
	const pointerTypeRef = import_react.useRef(void 0);
	const frame = useAnimationFrame();
	const touchOpenTimeout = useTimeout();
	const reference = import_react.useMemo(() => {
		function setOpenWithTouchDelay(nextOpen, nativeEvent, target, pointerType) {
			const details = createChangeEventDetails(reason, nativeEvent, target);
			if (nextOpen && pointerType === "touch" && touchOpenDelay > 0) touchOpenTimeout.start(touchOpenDelay, () => {
				store.setOpen(true, details);
			});
			else store.setOpen(nextOpen, details);
		}
		function getNextOpen(open, currentTarget, isClickLikeOpenEvent) {
			const openEvent = dataRef.current.openEvent;
			const hasClickedOnInactiveTrigger = store.select("domReferenceElement") !== currentTarget;
			if (open && hasClickedOnInactiveTrigger) return true;
			if (!open) return true;
			if (!toggle) return true;
			if (openEvent && stickIfOpen) return !isClickLikeOpenEvent(openEvent.type);
			return false;
		}
		return {
			onPointerDown(event) {
				pointerTypeRef.current = isMouseLikePointerType(event.pointerType, true) && isVirtualPointerEvent(event.nativeEvent) ? "virtual" : event.pointerType;
			},
			onMouseDown(event) {
				const pointerType = pointerTypeRef.current;
				const nativeEvent = event.nativeEvent;
				const open = store.select("open");
				if (event.button !== 0 || eventOption === "click" || isMouseLikePointerType(pointerType, true) && ignoreMouse) return;
				const nextOpen = getNextOpen(open, event.currentTarget, (openEventType) => openEventType === "click" || openEventType === "mousedown");
				const target = getTarget(nativeEvent);
				if (isTypeableElement(target)) {
					setOpenWithTouchDelay(nextOpen, nativeEvent, target, pointerType);
					return;
				}
				const eventCurrentTarget = event.currentTarget;
				frame.request(() => {
					setOpenWithTouchDelay(nextOpen, nativeEvent, eventCurrentTarget, pointerType);
				});
			},
			onClick(event) {
				if (eventOption === "mousedown-only") return;
				const pointerType = pointerTypeRef.current;
				if (eventOption === "mousedown" && pointerType) {
					pointerTypeRef.current = void 0;
					return;
				}
				if (isMouseLikePointerType(pointerType, true) && ignoreMouse) return;
				setOpenWithTouchDelay(getNextOpen(store.select("open"), event.currentTarget, (openEventType) => openEventType === "click" || openEventType === "mousedown" || openEventType === "keydown" || openEventType === "keyup"), event.nativeEvent, event.currentTarget, pointerType);
			},
			onKeyDown() {
				pointerTypeRef.current = void 0;
			}
		};
	}, [
		dataRef,
		eventOption,
		ignoreMouse,
		reason,
		store,
		stickIfOpen,
		toggle,
		frame,
		touchOpenTimeout,
		touchOpenDelay
	]);
	return import_react.useMemo(() => enabled ? { reference } : EMPTY_OBJECT, [enabled, reference]);
}
//#endregion
//#region node_modules/@base-ui/react/floating-ui-react/hooks/useListNavigation.mjs
var ESCAPE = "Escape";
function isStationaryWebKitPointer(event) {
	return webkit && event.movementX === 0 && event.movementY === 0;
}
function doSwitch(orientation, vertical, horizontal) {
	switch (orientation) {
		case "vertical": return vertical;
		case "horizontal": return horizontal;
		default: return vertical || horizontal;
	}
}
function isMainOrientationKey(key, orientation) {
	return doSwitch(orientation, key === "ArrowUp" || key === "ArrowDown", key === "ArrowLeft" || key === "ArrowRight");
}
function isMainOrientationToEndKey(key, orientation, rtl) {
	return doSwitch(orientation, key === "ArrowDown", rtl ? key === "ArrowLeft" : key === "ArrowRight") || key === "Enter" || key === " " || key === "";
}
function isCrossOrientationOpenKey(key, orientation, rtl) {
	return doSwitch(orientation, rtl ? key === ARROW_LEFT$1 : key === ARROW_RIGHT$1, key === ARROW_DOWN$1);
}
function isCrossOrientationCloseKey(key, orientation, rtl, grid) {
	const vertical = rtl ? key === ARROW_RIGHT$1 : key === ARROW_LEFT$1;
	const horizontal = key === ARROW_UP$1;
	if (orientation === "both" || orientation === "horizontal" && grid) return key === ESCAPE;
	return doSwitch(orientation, vertical, horizontal);
}
/**
* Adds arrow key-based navigation of a list of items, either using real DOM
* focus or virtual focus.
* @see https://floating-ui.com/docs/useListNavigation
*/
function useListNavigation(context, props) {
	const { listRef, activeIndex, onNavigate: onNavigateProp = () => {}, enabled = true, selectedIndex = null, allowEscape = false, loopFocus = false, nested = false, rtl = false, virtual = false, focusItemOnOpen = "auto", focusItemOnHover = true, openOnArrowKeyDown = true, disabledIndices = void 0, orientation = "vertical", parentOrientation, id, resetOnPointerLeave = true, externalTree, grid: navigateGrid } = props;
	const isGrid = navigateGrid != null;
	const store = "rootStore" in context ? context.rootStore : context;
	const open = store.useState("open");
	const floatingElement = store.useState("floatingElement");
	const domReferenceElement = store.useState("domReferenceElement");
	const dataRef = store.context.dataRef;
	const floatingFocusElement = getFloatingFocusElement(floatingElement);
	const typeableComboboxReference = isTypeableCombobox(domReferenceElement);
	const floatingFocusElementRef = useValueAsRef(floatingFocusElement);
	const parentId = useFloatingParentNodeId();
	const tree = useFloatingTree(externalTree);
	const focusItemOnOpenRef = import_react.useRef(focusItemOnOpen);
	const indexRef = import_react.useRef(selectedIndex ?? -1);
	const keyRef = import_react.useRef(null);
	const isPointerModalityRef = import_react.useRef(true);
	const onNavigate = useStableCallback((event) => {
		onNavigateProp(indexRef.current === -1 ? null : indexRef.current, event);
	});
	const previousMountedRef = import_react.useRef(!!floatingElement);
	const previousOpenRef = import_react.useRef(open);
	const forceSyncFocusRef = import_react.useRef(false);
	const forceScrollIntoViewRef = import_react.useRef(false);
	const cancelQueuedFocusRef = import_react.useRef(null);
	const disabledIndicesRef = useValueAsRef(disabledIndices);
	const latestOpenRef = useValueAsRef(open);
	const selectedIndexRef = useValueAsRef(selectedIndex);
	const resetOnPointerLeaveRef = useValueAsRef(resetOnPointerLeave);
	const focusFrame = useAnimationFrame();
	const waitForListPopulatedFrame = useAnimationFrame();
	const focusItem = useStableCallback(() => {
		function runFocus(item) {
			if (virtual) tree?.events.emit("virtualfocus", item);
			else cancelQueuedFocusRef.current = enqueueFocus(item, {
				sync: forceSyncFocusRef.current,
				preventScroll: true
			});
		}
		const initialItem = listRef.current[indexRef.current];
		const forceScrollIntoView = forceScrollIntoViewRef.current;
		if (initialItem) runFocus(initialItem);
		(forceSyncFocusRef.current ? (callback) => callback() : (callback) => focusFrame.request(callback))(() => {
			const waitedItem = listRef.current[indexRef.current] || initialItem;
			if (!waitedItem) return;
			if (!initialItem) runFocus(waitedItem);
			if (item && (forceScrollIntoView || !isPointerModalityRef.current)) waitedItem.scrollIntoView?.({
				block: "nearest",
				inline: "nearest"
			});
		});
	});
	useIsoLayoutEffect(() => {
		dataRef.current.orientation = orientation;
	}, [dataRef, orientation]);
	useIsoLayoutEffect(() => {
		if (!enabled) return;
		if (open && floatingElement) {
			indexRef.current = selectedIndex ?? -1;
			if (focusItemOnOpenRef.current && selectedIndex != null) {
				forceScrollIntoViewRef.current = true;
				onNavigate();
			}
		} else if (previousMountedRef.current) {
			indexRef.current = -1;
			onNavigate();
		}
	}, [
		enabled,
		open,
		floatingElement,
		selectedIndex,
		onNavigate
	]);
	useIsoLayoutEffect(() => {
		if (!enabled) return;
		if (!open) {
			forceSyncFocusRef.current = false;
			return;
		}
		if (!floatingElement) return;
		if (activeIndex == null) {
			forceSyncFocusRef.current = false;
			if (selectedIndexRef.current != null) return;
			if (previousMountedRef.current) {
				indexRef.current = -1;
				focusItem();
			}
			if ((!previousOpenRef.current || !previousMountedRef.current) && focusItemOnOpenRef.current && (keyRef.current != null || focusItemOnOpenRef.current === true && keyRef.current == null)) {
				let runs = 0;
				const waitForListPopulated = () => {
					if (listRef.current[0] == null) {
						if (runs < 2) (runs ? (callback) => waitForListPopulatedFrame.request(callback) : queueMicrotask)(waitForListPopulated);
						runs += 1;
					} else {
						indexRef.current = keyRef.current == null || isMainOrientationToEndKey(keyRef.current, orientation, rtl) || nested ? getMinListIndex(listRef) : getMaxListIndex(listRef);
						keyRef.current = null;
						onNavigate();
					}
				};
				waitForListPopulated();
			}
		} else if (!isIndexOutOfListBounds(listRef.current, activeIndex)) {
			indexRef.current = activeIndex;
			focusItem();
			forceScrollIntoViewRef.current = false;
		}
	}, [
		enabled,
		open,
		floatingElement,
		activeIndex,
		selectedIndexRef,
		nested,
		listRef,
		orientation,
		rtl,
		onNavigate,
		focusItem,
		waitForListPopulatedFrame
	]);
	useIsoLayoutEffect(() => {
		if (!enabled || floatingElement || !tree || virtual || !previousMountedRef.current) return;
		const nodes = tree.nodesRef.current;
		const parent = nodes.find((node) => node.id === parentId)?.context?.elements.floating;
		const activeEl = activeElement(ownerDocument(domReferenceElement ?? parent ?? null));
		const treeContainsActiveEl = nodes.some((node) => node.context && contains(node.context.elements.floating, activeEl));
		if (parent && !treeContainsActiveEl && isPointerModalityRef.current) parent.focus({ preventScroll: true });
	}, [
		enabled,
		floatingElement,
		domReferenceElement,
		tree,
		parentId,
		virtual
	]);
	useIsoLayoutEffect(() => {
		previousOpenRef.current = open;
		previousMountedRef.current = !!floatingElement;
	});
	useIsoLayoutEffect(() => {
		if (!open) {
			keyRef.current = null;
			focusItemOnOpenRef.current = focusItemOnOpen;
		}
	}, [open, focusItemOnOpen]);
	const hasActiveIndex = activeIndex != null;
	const syncCurrentTarget = useStableCallback((event) => {
		if (!latestOpenRef.current) return;
		const index = listRef.current.indexOf(event.currentTarget);
		if (index !== -1 && (indexRef.current !== index || activeIndex !== index)) {
			indexRef.current = index;
			onNavigate(event);
		}
	});
	const getParentOrientation = useStableCallback(() => {
		return parentOrientation ?? tree?.nodesRef.current.find((node) => node.id === parentId)?.context?.dataRef?.current.orientation;
	});
	const getMinEnabledIndex = useStableCallback(() => {
		return getMinListIndex(listRef, disabledIndicesRef.current);
	});
	const commonOnKeyDown = useStableCallback((event) => {
		isPointerModalityRef.current = false;
		forceSyncFocusRef.current = true;
		if (event.which === 229) return;
		if (!latestOpenRef.current && event.currentTarget === floatingFocusElementRef.current) return;
		if (nested && isCrossOrientationCloseKey(event.key, orientation, rtl, isGrid)) {
			if (!isMainOrientationKey(event.key, getParentOrientation())) stopEvent(event);
			store.setOpen(false, createChangeEventDetails(listNavigation, event.nativeEvent));
			if (isHTMLElement(domReferenceElement)) if (virtual) tree?.events.emit("virtualfocus", domReferenceElement);
			else domReferenceElement.focus();
			return;
		}
		const currentIndex = indexRef.current;
		const minIndex = getMinListIndex(listRef, disabledIndices);
		const maxIndex = getMaxListIndex(listRef, disabledIndices);
		if (!typeableComboboxReference) {
			if (event.key === "Home") {
				stopEvent(event);
				indexRef.current = minIndex;
				onNavigate(event);
			}
			if (event.key === "End") {
				stopEvent(event);
				indexRef.current = maxIndex;
				onNavigate(event);
			}
		}
		if (navigateGrid != null) {
			const index = navigateGrid(event, indexRef.current, listRef, orientation, loopFocus, rtl, disabledIndices, minIndex, maxIndex);
			if (index != null) {
				indexRef.current = index;
				onNavigate(event);
			}
			if (orientation === "both") return;
		}
		if (isMainOrientationKey(event.key, orientation)) {
			stopEvent(event);
			if (open && !virtual && activeElement(event.currentTarget.ownerDocument) === event.currentTarget) {
				indexRef.current = isMainOrientationToEndKey(event.key, orientation, rtl) ? minIndex : maxIndex;
				onNavigate(event);
				return;
			}
			if (isMainOrientationToEndKey(event.key, orientation, rtl)) if (loopFocus) if (currentIndex >= maxIndex) if (allowEscape && currentIndex !== listRef.current.length) indexRef.current = -1;
			else {
				forceSyncFocusRef.current = false;
				indexRef.current = minIndex;
			}
			else indexRef.current = findNonDisabledListIndex(listRef.current, {
				startingIndex: currentIndex,
				disabledIndices
			});
			else indexRef.current = Math.min(maxIndex, findNonDisabledListIndex(listRef.current, {
				startingIndex: currentIndex,
				disabledIndices
			}));
			else if (loopFocus) if (currentIndex <= minIndex) if (allowEscape && currentIndex !== -1) indexRef.current = listRef.current.length;
			else {
				forceSyncFocusRef.current = false;
				indexRef.current = maxIndex;
			}
			else indexRef.current = findNonDisabledListIndex(listRef.current, {
				startingIndex: currentIndex,
				decrement: true,
				disabledIndices
			});
			else indexRef.current = Math.max(minIndex, findNonDisabledListIndex(listRef.current, {
				startingIndex: currentIndex,
				decrement: true,
				disabledIndices
			}));
			if (isIndexOutOfListBounds(listRef.current, indexRef.current)) indexRef.current = -1;
			onNavigate(event);
		}
	});
	const item = import_react.useMemo(() => {
		return {
			onFocus(event) {
				forceSyncFocusRef.current = true;
				syncCurrentTarget(event);
			},
			onClick: ({ currentTarget }) => currentTarget.focus({ preventScroll: true }),
			onMouseMove(event) {
				if (isStationaryWebKitPointer(event)) return;
				forceSyncFocusRef.current = true;
				forceScrollIntoViewRef.current = false;
				if (focusItemOnHover) syncCurrentTarget(event);
			},
			onPointerLeave(event) {
				if (!latestOpenRef.current || !isPointerModalityRef.current || event.pointerType === "touch") return;
				forceSyncFocusRef.current = true;
				const relatedTarget = event.relatedTarget;
				if (!focusItemOnHover || listRef.current.includes(relatedTarget)) return;
				if (!resetOnPointerLeaveRef.current) return;
				cancelQueuedFocusRef.current?.();
				cancelQueuedFocusRef.current = null;
				indexRef.current = -1;
				onNavigate(event);
				if (!virtual) {
					const floatingFocusEl = floatingFocusElementRef.current;
					const activeEl = activeElement(ownerDocument(floatingFocusEl));
					if (floatingFocusEl && contains(floatingFocusEl, activeEl)) floatingFocusEl.focus({ preventScroll: true });
				}
			}
		};
	}, [
		syncCurrentTarget,
		latestOpenRef,
		floatingFocusElementRef,
		focusItemOnHover,
		listRef,
		onNavigate,
		resetOnPointerLeaveRef,
		virtual
	]);
	const ariaActiveDescendantProp = import_react.useMemo(() => {
		return virtual && open && hasActiveIndex && { "aria-activedescendant": `${id}-${activeIndex}` };
	}, [
		virtual,
		open,
		hasActiveIndex,
		id,
		activeIndex
	]);
	const floating = import_react.useMemo(() => {
		return {
			"aria-orientation": orientation === "both" ? void 0 : orientation,
			...!typeableComboboxReference ? ariaActiveDescendantProp : {},
			onKeyDown(event) {
				if (event.key === "Tab" && event.shiftKey && open && !virtual) {
					const target = getTarget(event.nativeEvent);
					if (target && !contains(floatingFocusElementRef.current, target)) return;
					stopEvent(event);
					store.setOpen(false, createChangeEventDetails(focusOut, event.nativeEvent));
					if (isHTMLElement(domReferenceElement)) domReferenceElement.focus();
					return;
				}
				commonOnKeyDown(event);
			},
			onPointerMove(event) {
				if (isStationaryWebKitPointer(event)) return;
				isPointerModalityRef.current = true;
			}
		};
	}, [
		ariaActiveDescendantProp,
		commonOnKeyDown,
		floatingFocusElementRef,
		orientation,
		typeableComboboxReference,
		store,
		open,
		virtual,
		domReferenceElement
	]);
	const trigger = import_react.useMemo(() => {
		function openOnNavigationKeyDown(event) {
			store.setOpen(true, createChangeEventDetails(listNavigation, event.nativeEvent, event.currentTarget));
		}
		function checkVirtualMouse(event) {
			if (focusItemOnOpen === "auto" && isVirtualClick(event.nativeEvent)) focusItemOnOpenRef.current = !virtual;
		}
		function checkVirtualPointer(event) {
			focusItemOnOpenRef.current = focusItemOnOpen;
			if (focusItemOnOpen === "auto" && isVirtualPointerEvent(event.nativeEvent)) focusItemOnOpenRef.current = true;
		}
		return {
			onKeyDown(event) {
				const currentOpen = store.select("open");
				isPointerModalityRef.current = false;
				const isArrowKey = event.key.startsWith("Arrow");
				const isParentCrossOpenKey = isCrossOrientationOpenKey(event.key, getParentOrientation(), rtl);
				const isMainKey = isMainOrientationKey(event.key, orientation);
				const isNavigationKey = (nested ? isParentCrossOpenKey : isMainKey) || event.key === "Enter" || event.key.trim() === "";
				if (virtual && currentOpen) return commonOnKeyDown(event);
				if (!currentOpen && !openOnArrowKeyDown && isArrowKey) return;
				if (isNavigationKey) {
					const isParentMainKey = isMainOrientationKey(event.key, getParentOrientation());
					keyRef.current = nested && isParentMainKey ? null : event.key;
				}
				if (nested) {
					if (isParentCrossOpenKey) {
						stopEvent(event);
						if (currentOpen) {
							indexRef.current = getMinEnabledIndex();
							onNavigate(event);
						} else openOnNavigationKeyDown(event);
					}
					return;
				}
				if (isMainKey) {
					if (selectedIndexRef.current != null) indexRef.current = selectedIndexRef.current;
					stopEvent(event);
					if (!currentOpen && openOnArrowKeyDown) openOnNavigationKeyDown(event);
					else commonOnKeyDown(event);
					if (currentOpen) onNavigate(event);
				}
			},
			onFocus(event) {
				if (store.select("open") && !virtual) {
					indexRef.current = -1;
					onNavigate(event);
				}
			},
			onPointerDown: checkVirtualPointer,
			onPointerEnter: checkVirtualPointer,
			onMouseDown: checkVirtualMouse,
			onClick: checkVirtualMouse
		};
	}, [
		commonOnKeyDown,
		focusItemOnOpen,
		getMinEnabledIndex,
		nested,
		onNavigate,
		store,
		openOnArrowKeyDown,
		orientation,
		getParentOrientation,
		rtl,
		selectedIndexRef,
		virtual
	]);
	const reference = import_react.useMemo(() => {
		return {
			...ariaActiveDescendantProp,
			...trigger
		};
	}, [ariaActiveDescendantProp, trigger]);
	return import_react.useMemo(() => enabled ? {
		reference,
		floating,
		item,
		trigger
	} : {}, [
		enabled,
		reference,
		floating,
		trigger,
		item
	]);
}
//#endregion
//#region node_modules/@base-ui/react/floating-ui-react/hooks/useTypeahead.mjs
/**
* Provides a matching callback that can be used to focus an item as the user
* types, often used in tandem with `useListNavigation()`.
* @see https://floating-ui.com/docs/useTypeahead
*/
function useTypeahead(context, props) {
	const { listRef, elementsRef, activeIndex, onMatch: onMatchProp, disabledIndices, onTyping, enabled = true, resetMs = 750, selectedIndex = null } = props;
	const store = "rootStore" in context ? context.rootStore : context;
	const open = store.useState("open");
	const timeout = useTimeout();
	const stringRef = import_react.useRef("");
	const prevIndexRef = import_react.useRef(selectedIndex ?? activeIndex ?? -1);
	const matchIndexRef = import_react.useRef(null);
	const onKeyDown = useStableCallback((event) => {
		function getElement(index) {
			return elementsRef?.current[index];
		}
		function isItemAvailable(index) {
			const element = getElement(index);
			if (element && !isElementVisible(element) || element?.matches(":disabled")) return false;
			return disabledIndices == null || !isListIndexDisabled(EMPTY_ARRAY, index, disabledIndices);
		}
		function getMatchingIndex(list, string, startIndex = 0) {
			if (list.length === 0) return -1;
			const normalizedStartIndex = (startIndex % list.length + list.length) % list.length;
			const lowerString = string.toLowerCase();
			for (let offset = 0; offset < list.length; offset += 1) {
				const index = (normalizedStartIndex + offset) % list.length;
				if (!list[index]?.toLowerCase().startsWith(lowerString) || !isItemAvailable(index)) continue;
				return index;
			}
			return -1;
		}
		const listContent = listRef.current;
		if (stringRef.current.length > 0 && event.key === " ") {
			stopEvent(event);
			onTyping?.(true);
		}
		if (stringRef.current.length > 0 && stringRef.current[0] !== " ") {
			if (getMatchingIndex(listContent, stringRef.current) === -1 && event.key !== " ") onTyping?.(false);
		}
		if (listContent == null || event.key.length !== 1 || event.ctrlKey || event.metaKey || event.altKey) return;
		if (open && event.key !== " ") {
			stopEvent(event);
			onTyping?.(true);
		}
		const isNewSession = stringRef.current === "";
		if (isNewSession) prevIndexRef.current = selectedIndex ?? activeIndex ?? -1;
		if (listContent.every((text, index) => text && isItemAvailable(index) ? text[0]?.toLowerCase() !== text[1]?.toLowerCase() : true) && stringRef.current === event.key) {
			stringRef.current = "";
			prevIndexRef.current = matchIndexRef.current;
		}
		stringRef.current += event.key;
		timeout.start(resetMs, () => {
			stringRef.current = "";
			prevIndexRef.current = matchIndexRef.current;
			onTyping?.(false);
		});
		const startIndex = ((isNewSession ? selectedIndex ?? activeIndex ?? -1 : prevIndexRef.current) ?? 0) + 1;
		const index = getMatchingIndex(listContent, stringRef.current, startIndex);
		if (index !== -1) {
			onMatchProp?.(index);
			matchIndexRef.current = index;
		} else if (event.key !== " ") {
			stringRef.current = "";
			onTyping?.(false);
		}
	});
	const onBlur = useStableCallback((event) => {
		const next = event.relatedTarget;
		const currentDomReferenceElement = store.select("domReferenceElement");
		const currentFloatingElement = store.select("floatingElement");
		if (contains(currentDomReferenceElement, next) || contains(currentFloatingElement, next)) return;
		timeout.clear();
		stringRef.current = "";
		prevIndexRef.current = matchIndexRef.current;
		onTyping?.(false);
	});
	useIsoLayoutEffect(() => {
		if (!open && selectedIndex !== null) return;
		timeout.clear();
		matchIndexRef.current = null;
		if (stringRef.current !== "") stringRef.current = "";
	}, [
		open,
		selectedIndex,
		timeout
	]);
	const sharedProps = import_react.useMemo(() => ({
		onKeyDown,
		onBlur
	}), [onKeyDown, onBlur]);
	return import_react.useMemo(() => enabled ? {
		reference: sharedProps,
		floating: sharedProps
	} : {}, [enabled, sharedProps]);
}
//#endregion
//#region node_modules/@base-ui/react/dialog/portal/DialogPortalContext.mjs
var DialogPortalContext = /* @__PURE__ */ import_react.createContext(void 0);
function useDialogPortalContext() {
	const value = import_react.useContext(DialogPortalContext);
	if (value === void 0) throw new Error(formatErrorMessage(26));
	return value;
}
var COMPOSITE_KEYS = new Set([
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight",
	"Home",
	"End"
]);
//#endregion
//#region node_modules/@base-ui/react/dialog/utils/stateAttributesMapping.mjs
/**
* Shared by `Dialog.Popup` and `Dialog.Viewport`, whose states have the same shape.
* `nested` is not mapped: unmapped `true` booleans already render as `data-nested`.
*/
var dialogStateAttributesMapping = {
	...popupStateMapping,
	...transitionStatusMapping,
	nestedDialogOpen(value) {
		return value ? { "data-nested-dialog-open": "" } : null;
	}
};
//#endregion
//#region node_modules/@base-ui/react/dialog/popup/DialogPopup.mjs
/**
* A container for the dialog contents.
* Renders a `<div>` element.
*
* Documentation: [Base UI Dialog](https://base-ui.com/react/components/dialog)
*/
var DialogPopup = /* @__PURE__ */ import_react.forwardRef(function DialogPopup(componentProps, forwardedRef) {
	const { render, className, style, finalFocus, initialFocus, ...elementProps } = componentProps;
	const store = useDialogRootContext();
	const descriptionElementId = store.useState("descriptionElementId");
	const disablePointerDismissal = store.useState("disablePointerDismissal");
	const floatingRootContext = store.useState("floatingRootContext");
	const rootPopupProps = store.useState("popupProps");
	const modal = store.useState("modal");
	const mounted = store.useState("mounted");
	const nested = store.useState("nested");
	const nestedOpenDialogCount = store.useState("nestedOpenDialogCount");
	const open = store.useState("open");
	const openMethod = store.useState("openMethod");
	const titleElementId = store.useState("titleElementId");
	const transitionStatus = store.useState("transitionStatus");
	const role = store.useState("role");
	const floatingId = floatingRootContext.useState("floatingId");
	useDialogPortalContext();
	useOpenChangeComplete({
		open,
		ref: store.context.popupRef,
		onComplete() {
			if (open) store.context.onOpenChangeComplete?.(true);
		}
	});
	const resolvedInitialFocus = initialFocus === void 0 ? createDefaultInitialFocus(store.context.popupRef) : initialFocus;
	const nestedDialogOpen = nestedOpenDialogCount > 0;
	const setPopupElement = store.useStateSetter("popupElement");
	const element = useRenderElement("div", componentProps, {
		state: {
			open,
			nested,
			transitionStatus,
			nestedDialogOpen
		},
		props: [
			rootPopupProps,
			{
				id: floatingId,
				"aria-labelledby": titleElementId,
				"aria-describedby": descriptionElementId,
				role,
				...FOCUSABLE_POPUP_PROPS,
				hidden: !mounted,
				onKeyDown(event) {
					if (COMPOSITE_KEYS.has(event.key)) event.stopPropagation();
				},
				style: { "--nested-dialogs": nestedOpenDialogCount }
			},
			elementProps
		],
		ref: [
			forwardedRef,
			store.context.popupRef,
			setPopupElement
		],
		stateAttributesMapping: dialogStateAttributesMapping
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingFocusManager, {
		context: floatingRootContext,
		openInteractionType: openMethod,
		disabled: !mounted,
		closeOnFocusOut: !disablePointerDismissal,
		initialFocus: resolvedInitialFocus,
		returnFocus: finalFocus,
		modal: modal !== false,
		restoreFocus: "popup",
		children: element
	});
});
//#endregion
//#region node_modules/@base-ui/utils/inertValue.mjs
function inertValue(value) {
	if (isReactVersionAtLeast(19)) return value;
	return value ? "true" : void 0;
}
//#endregion
//#region node_modules/@base-ui/react/utils/InternalBackdrop.mjs
/**
* @internal
*/
var InternalBackdrop = /* @__PURE__ */ import_react.forwardRef(function InternalBackdrop(props, ref) {
	const { cutout, ...otherProps } = props;
	let clipPath;
	if (cutout) {
		const rect = cutout.getBoundingClientRect();
		clipPath = `polygon(0% 0%,100% 0%,100% 100%,0% 100%,0% 0%,${rect.left}px ${rect.top}px,${rect.left}px ${rect.bottom}px,${rect.right}px ${rect.bottom}px,${rect.right}px ${rect.top}px,${rect.left}px ${rect.top}px)`;
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		role: "presentation",
		"data-base-ui-inert": "",
		...otherProps,
		style: {
			position: "fixed",
			inset: 0,
			userSelect: "none",
			WebkitUserSelect: "none",
			clipPath
		}
	});
});
//#endregion
//#region node_modules/@base-ui/react/dialog/portal/DialogPortal.mjs
/**
* A portal element that moves the popup to a different part of the DOM.
* By default, the portal element is appended to `<body>`.
* Renders a `<div>` element.
*
* Documentation: [Base UI Dialog](https://base-ui.com/react/components/dialog)
*/
var DialogPortal = /* @__PURE__ */ import_react.forwardRef(function DialogPortal(props, forwardedRef) {
	const { keepMounted = false, ...portalProps } = props;
	const store = useDialogRootContext();
	const mounted = store.useState("mounted");
	const modal = store.useState("modal");
	const open = store.useState("open");
	if (!(mounted || keepMounted)) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogPortalContext.Provider, {
		value: keepMounted,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FloatingPortal, {
			ref: forwardedRef,
			...portalProps,
			children: [mounted && modal === true && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InternalBackdrop, {
				ref: store.context.internalBackdropRef,
				inert: inertValue(!open)
			}), props.children]
		})
	});
});
//#endregion
//#region node_modules/@base-ui/utils/useScrollLock.mjs
var originalHtmlStyles = {};
var originalBodyStyles = {};
var originalHtmlScrollBehavior = "";
function getViewportScroller(html, body) {
	return isOverflowElement(html) ? html : body;
}
function isPageScrollLocked(win, html, body) {
	return /hidden|clip/.test(win.getComputedStyle(getViewportScroller(html, body)).overflowY);
}
function hasInsetScrollbars(referenceElement) {
	if (typeof document === "undefined") return false;
	const doc = ownerDocument(referenceElement);
	return getWindow(doc).innerWidth - doc.documentElement.clientWidth > 0;
}
function supportsStableScrollbarGutter(referenceElement) {
	if (!(typeof CSS !== "undefined" && CSS.supports && CSS.supports("scrollbar-gutter", "stable")) || typeof document === "undefined") return false;
	const doc = ownerDocument(referenceElement);
	const html = doc.documentElement;
	const body = doc.body;
	const scrollContainer = getViewportScroller(html, body);
	const originalScrollContainerOverflowY = scrollContainer.style.overflowY;
	const originalHtmlStyleGutter = html.style.scrollbarGutter;
	html.style.scrollbarGutter = "stable";
	scrollContainer.style.overflowY = "scroll";
	const before = scrollContainer.offsetWidth;
	scrollContainer.style.overflowY = "hidden";
	const after = scrollContainer.offsetWidth;
	scrollContainer.style.overflowY = originalScrollContainerOverflowY;
	html.style.scrollbarGutter = originalHtmlStyleGutter;
	return before === after;
}
function preventScrollOverlayScrollbars(referenceElement) {
	const doc = ownerDocument(referenceElement);
	const html = doc.documentElement;
	const body = doc.body;
	const elementToLock = getViewportScroller(html, body);
	const originalElementToLockStyles = {
		overflowY: elementToLock.style.overflowY,
		overflowX: elementToLock.style.overflowX
	};
	Object.assign(elementToLock.style, {
		overflowY: "hidden",
		overflowX: "hidden"
	});
	return () => {
		Object.assign(elementToLock.style, originalElementToLockStyles);
	};
}
function preventScrollInsetScrollbars(referenceElement) {
	const doc = ownerDocument(referenceElement);
	const html = doc.documentElement;
	const body = doc.body;
	const win = getWindow(html);
	let scrollTop = 0;
	let scrollLeft = 0;
	let updateGutterOnly = false;
	const resizeFrame = AnimationFrame.create();
	if (webkit && (win.visualViewport?.scale ?? 1) !== 1) return () => {};
	function lockScroll() {
		const htmlStyles = win.getComputedStyle(html);
		const bodyStyles = win.getComputedStyle(body);
		const scrollbarGutterValue = (htmlStyles.scrollbarGutter || "").includes("both-edges") ? "stable both-edges" : "stable";
		scrollTop = html.scrollTop;
		scrollLeft = html.scrollLeft;
		originalHtmlStyles = {
			scrollbarGutter: html.style.scrollbarGutter,
			overflowY: html.style.overflowY,
			overflowX: html.style.overflowX
		};
		originalHtmlScrollBehavior = html.style.scrollBehavior;
		originalBodyStyles = {
			position: body.style.position,
			height: body.style.height,
			width: body.style.width,
			boxSizing: body.style.boxSizing,
			overflowY: body.style.overflowY,
			overflowX: body.style.overflowX,
			scrollBehavior: body.style.scrollBehavior
		};
		const isScrollableY = html.scrollHeight > html.clientHeight;
		const isScrollableX = html.scrollWidth > html.clientWidth;
		const hasConstantOverflowY = htmlStyles.overflowY === "scroll" || bodyStyles.overflowY === "scroll";
		const hasConstantOverflowX = htmlStyles.overflowX === "scroll" || bodyStyles.overflowX === "scroll";
		const scrollbarWidth = Math.max(0, win.innerWidth - body.clientWidth);
		const scrollbarHeight = Math.max(0, win.innerHeight - body.clientHeight);
		const marginY = parseFloat(bodyStyles.marginTop) + parseFloat(bodyStyles.marginBottom);
		const marginX = parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight);
		const elementToLock = getViewportScroller(html, body);
		updateGutterOnly = supportsStableScrollbarGutter(referenceElement);
		if (updateGutterOnly) {
			html.style.scrollbarGutter = scrollbarGutterValue;
			elementToLock.style.overflowY = "hidden";
			elementToLock.style.overflowX = "hidden";
			return;
		}
		Object.assign(html.style, {
			scrollbarGutter: scrollbarGutterValue,
			overflowY: "hidden",
			overflowX: "hidden"
		});
		if (isScrollableY || hasConstantOverflowY) html.style.overflowY = "scroll";
		if (isScrollableX || hasConstantOverflowX) html.style.overflowX = "scroll";
		Object.assign(body.style, {
			position: "relative",
			height: marginY || scrollbarHeight ? `calc(100dvh - ${marginY + scrollbarHeight}px)` : "100dvh",
			width: marginX || scrollbarWidth ? `calc(100vw - ${marginX + scrollbarWidth}px)` : "100vw",
			boxSizing: "border-box",
			overflowY: "hidden",
			overflowX: "hidden",
			scrollBehavior: "unset"
		});
		body.scrollTop = scrollTop;
		body.scrollLeft = scrollLeft;
		html.setAttribute("data-base-ui-scroll-locked", "");
		html.style.scrollBehavior = "unset";
	}
	function cleanup() {
		Object.assign(html.style, originalHtmlStyles);
		Object.assign(body.style, originalBodyStyles);
		if (!updateGutterOnly) {
			html.scrollTop = scrollTop;
			html.scrollLeft = scrollLeft;
			html.removeAttribute("data-base-ui-scroll-locked");
			html.style.scrollBehavior = originalHtmlScrollBehavior;
		}
	}
	function handleResize() {
		cleanup();
		resizeFrame.request(lockScroll);
	}
	lockScroll();
	const unsubscribeResize = addEventListener(win, "resize", handleResize);
	return () => {
		resizeFrame.cancel();
		cleanup();
		if (typeof win.removeEventListener === "function") unsubscribeResize();
	};
}
var ScrollLocker = class {
	lockCount = 0;
	restore = null;
	timeoutLock = Timeout.create();
	timeoutUnlock = Timeout.create();
	acquire(referenceElement) {
		this.lockCount += 1;
		if (this.lockCount === 1 && this.restore === null) this.timeoutLock.start(0, () => this.lock(referenceElement));
		return this.release;
	}
	release = () => {
		this.lockCount -= 1;
		if (this.lockCount === 0 && this.restore) this.timeoutUnlock.start(0, this.unlock);
	};
	unlock = () => {
		if (this.lockCount === 0 && this.restore) {
			this.restore?.();
			this.restore = null;
		}
	};
	lock(referenceElement) {
		if (this.lockCount === 0 || this.restore !== null) return;
		const doc = ownerDocument(referenceElement);
		const html = doc.documentElement;
		const body = doc.body;
		const win = getWindow(html);
		if (isPageScrollLocked(win, html, body)) {
			const observer = new win.MutationObserver(() => {
				if (isPageScrollLocked(win, html, body)) return;
				observer.disconnect();
				this.restore = null;
				this.lock(referenceElement);
			});
			const options = { attributes: true };
			observer.observe(html, options);
			observer.observe(body, options);
			this.restore = () => observer.disconnect();
			return;
		}
		const hasOverlayScrollbars = ios || !hasInsetScrollbars(referenceElement);
		this.restore = hasOverlayScrollbars ? preventScrollOverlayScrollbars(referenceElement) : preventScrollInsetScrollbars(referenceElement);
	}
};
var SCROLL_LOCKER = new ScrollLocker();
/**
* Locks the scroll of the document when enabled.
*
* @param enabled - Whether to enable the scroll lock.
* @param referenceElement - Element to use as a reference for lock calculations.
*/
function useScrollLock(enabled = true, referenceElement = null) {
	useIsoLayoutEffect(() => {
		if (!enabled) return;
		return SCROLL_LOCKER.acquire(referenceElement);
	}, [enabled, referenceElement]);
}
//#endregion
//#region node_modules/@base-ui/react/dialog/root/useDialogRoot.mjs
function DialogInteractions({ store, parentContext, isDrawer }) {
	const open = store.useState("open");
	const disablePointerDismissal = store.useState("disablePointerDismissal");
	const modal = store.useState("modal");
	const popupElement = store.useState("popupElement");
	const floatingRootContext = store.useState("floatingRootContext");
	const [ownNestedOpenDialogs, setOwnNestedOpenDialogs] = import_react.useState(0);
	const [ownNestedOpenDrawers, setOwnNestedOpenDrawers] = import_react.useState(0);
	const isTopmost = ownNestedOpenDialogs === 0;
	const dismiss = useDismiss(floatingRootContext, {
		outsidePressEvent() {
			if (store.context.internalBackdropRef.current || store.context.backdropRef.current) return "intentional";
			return {
				mouse: modal === "trap-focus" ? "sloppy" : "intentional",
				touch: "sloppy"
			};
		},
		outsidePress(event) {
			if (!store.context.outsidePressEnabledRef.current) return false;
			if ("button" in event && event.button !== 0) return false;
			if ("touches" in event) {
				if (event.type === "touchend") {
					if (event.changedTouches.length !== 1 || event.touches.length !== 0) return false;
				} else if (event.touches.length !== 1) return false;
			}
			const target = getTarget(event);
			if (isTopmost && !disablePointerDismissal) {
				if (modal) {
					const internalBackdrop = store.context.internalBackdropRef.current;
					const backdrop = store.context.backdropRef.current;
					return internalBackdrop || backdrop ? internalBackdrop === target || backdrop === target || contains(target, popupElement) && !target?.hasAttribute("data-base-ui-portal") : true;
				}
				return true;
			}
			return false;
		},
		escapeKey: isTopmost
	});
	useScrollLock(open && modal === true, popupElement);
	store.useContextCallback("onNestedDialogOpen", (dialogCount, drawerCount) => {
		setOwnNestedOpenDialogs(dialogCount);
		setOwnNestedOpenDrawers(drawerCount);
	});
	useIsoLayoutEffect(() => {
		if (parentContext?.onNestedDialogOpen) if (open) parentContext.onNestedDialogOpen(ownNestedOpenDialogs + 1, ownNestedOpenDrawers + (isDrawer ? 1 : 0));
		else parentContext.onNestedDialogOpen(0, 0);
		return () => {
			if (parentContext?.onNestedDialogOpen && open) parentContext.onNestedDialogOpen(0, 0);
		};
	}, [
		isDrawer,
		open,
		ownNestedOpenDialogs,
		ownNestedOpenDrawers,
		parentContext
	]);
	usePopupInteractionProps(store, {
		activeTriggerProps: dismiss.reference,
		inactiveTriggerProps: dismiss.trigger,
		popupProps: dismiss.floating,
		nestedOpenDialogCount: ownNestedOpenDialogs,
		nestedOpenDrawerCount: ownNestedOpenDrawers
	});
	return null;
}
//#endregion
//#region node_modules/@base-ui/react/dialog/store/DialogStore.mjs
var selectors$2 = {
	...popupStoreSelectors,
	modal: (state) => state.modal,
	nested: (state) => state.nested,
	nestedOpenDialogCount: (state) => state.nestedOpenDialogCount,
	nestedOpenDrawerCount: (state) => state.nestedOpenDrawerCount,
	disablePointerDismissal: (state) => state.disablePointerDismissal,
	openMethod: (state) => state.openMethod,
	descriptionElementId: (state) => state.descriptionElementId,
	titleElementId: (state) => state.titleElementId,
	viewportElement: (state) => state.viewportElement,
	role: (state) => state.role
};
/**
* The subset of `DialogStore` that detached handle-backed triggers rely on. Both the real
* `DialogStore` and the inert fallback store satisfy it, so a trigger can read from whichever
* store the handle currently exposes.
*/
var DialogStore = class extends ReactStore {
	constructor(initialState, floatingId, nested) {
		const triggerElements = new PopupTriggerMap();
		const state = createInitialState$1(initialState, triggerElements, floatingId, nested);
		super(state, createInitialContext$1(triggerElements), selectors$2);
	}
	setOpen = (nextOpen, eventDetails) => {
		eventDetails.preventUnmountOnClose = () => {
			this.set("preventUnmountingOnClose", true);
		};
		if (!nextOpen && eventDetails.trigger == null && this.state.activeTriggerId != null) eventDetails.trigger = this.state.activeTriggerElement ?? void 0;
		this.context.onOpenChange?.(nextOpen, eventDetails);
		if (eventDetails.isCanceled) return;
		this.state.floatingRootContext.dispatchOpenChange(nextOpen, eventDetails);
		const updatedState = { open: nextOpen };
		setPopupOpenState(updatedState, nextOpen, eventDetails.trigger);
		this.update(updatedState);
	};
};
function createInitialState$1(initialState, triggerElements, floatingId, nested = false) {
	const state = {
		...createInitialPopupStoreState(),
		modal: true,
		disablePointerDismissal: false,
		viewportElement: null,
		descriptionElementId: void 0,
		titleElementId: void 0,
		openMethod: null,
		nested: false,
		nestedOpenDialogCount: 0,
		nestedOpenDrawerCount: 0,
		role: "dialog",
		...initialState
	};
	state.floatingRootContext = createPopupFloatingRootContext(triggerElements, floatingId, nested);
	return state;
}
function createInitialContext$1(triggerElements) {
	return {
		popupRef: /* @__PURE__ */ import_react.createRef(),
		backdropRef: /* @__PURE__ */ import_react.createRef(),
		internalBackdropRef: /* @__PURE__ */ import_react.createRef(),
		outsidePressEnabledRef: { current: true },
		triggerElements,
		onOpenChange: void 0,
		onOpenChangeComplete: void 0
	};
}
//#endregion
//#region node_modules/@base-ui/react/dialog/root/useRenderDialogRoot.mjs
function useRenderDialogRoot(mode, props) {
	const { children, open: openProp, defaultOpen = false, onOpenChange, onOpenChangeComplete, disablePointerDismissal: disablePointerDismissalProp = false, modal: modalProp = true, actionsRef, handle, triggerId: triggerIdProp, defaultTriggerId: defaultTriggerIdProp = null } = props;
	const isDrawer = mode === "drawer";
	const isAlertDialog = mode === "alert-dialog";
	const modal = isAlertDialog ? true : modalProp;
	const disablePointerDismissal = isAlertDialog || disablePointerDismissalProp;
	const role = isAlertDialog ? "alertdialog" : "dialog";
	const parentStore = useDialogRootContext(true);
	const rootState = {
		modal,
		disablePointerDismissal,
		nested: parentStore != null,
		role
	};
	const store = usePopupRootStore((floatingId, floatingNested) => new DialogStore({
		open: defaultOpen,
		openProp,
		activeTriggerId: defaultTriggerIdProp,
		triggerIdProp,
		...rootState
	}, floatingId, floatingNested), true);
	store.useControlledProp("openProp", openProp);
	store.useControlledProp("triggerIdProp", triggerIdProp);
	store.useSyncedValues(rootState);
	store.useContextCallback("onOpenChange", onOpenChange);
	store.useContextCallback("onOpenChangeComplete", onOpenChangeComplete);
	const open = store.useState("open");
	const mounted = store.useState("mounted");
	const payload = store.useState("payload");
	usePopupRootSync(store, open);
	useImplicitActiveTrigger(store);
	const { forceUnmount } = useOpenStateTransitions(open, store);
	import_react.useImperativeHandle(actionsRef, () => ({
		unmount: forceUnmount,
		close: () => store.setOpen(false, createChangeEventDetails(imperativeAction))
	}), [forceUnmount, store]);
	const shouldRenderInteractions = open || mounted;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogRootContext.Provider, {
		value: store,
		children: [
			handle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopupHandleAttachment, {
				handle,
				store
			}),
			shouldRenderInteractions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogInteractions, {
				store,
				parentContext: parentStore?.context,
				isDrawer
			}),
			typeof children === "function" ? children({ payload }) : children
		]
	});
}
//#endregion
//#region node_modules/@base-ui/react/dialog/root/DialogRoot.mjs
/**
* Groups all parts of the dialog.
* Doesn't render its own HTML element.
*
* Documentation: [Base UI Dialog](https://base-ui.com/react/components/dialog)
*/
function DialogRoot(props) {
	return useRenderDialogRoot("dialog", props);
}
//#endregion
//#region node_modules/@base-ui/react/dialog/title/DialogTitle.mjs
/**
* A heading that labels the dialog.
* Renders an `<h2>` element.
*
* Documentation: [Base UI Dialog](https://base-ui.com/react/components/dialog)
*/
var DialogTitle = /* @__PURE__ */ import_react.forwardRef(function DialogTitle(componentProps, forwardedRef) {
	const { render, className, style, id: idProp, ...elementProps } = componentProps;
	const store = useDialogRootContext();
	const id = useBaseUiId(idProp);
	store.useSyncedValueWithCleanup("titleElementId", id);
	return useRenderElement("h2", componentProps, {
		ref: forwardedRef,
		props: [{ id }, elementProps]
	});
});
//#endregion
//#region node_modules/@base-ui/utils/useEnhancedClickHandler.mjs
/**
* Provides a cross-browser way to determine the type of the pointer used to click.
* Safari and Firefox do not provide the PointerEvent to the click handler (they use MouseEvent) yet.
* Additionally, this implementation detects if the click was triggered by the keyboard.
*
* @param handler The function to be called when the button is clicked. The first parameter is the original event and the second parameter is the pointer type.
*/
function useEnhancedClickHandler(handler) {
	const lastClickInteractionTypeRef = import_react.useRef("");
	const handlePointerDown = import_react.useCallback((event) => {
		if (event.defaultPrevented) return;
		lastClickInteractionTypeRef.current = event.pointerType;
		handler(event, event.pointerType);
	}, [handler]);
	return {
		onClick: import_react.useCallback((event) => {
			if (event.detail === 0) {
				handler(event, "keyboard");
				return;
			}
			if ("pointerType" in event) handler(event, event.pointerType);
			else handler(event, lastClickInteractionTypeRef.current);
			lastClickInteractionTypeRef.current = "";
		}, [handler]),
		onPointerDown: handlePointerDown
	};
}
//#endregion
//#region node_modules/@base-ui/react/internals/useValueChanged.mjs
function useValueChanged(value, onChange) {
	const valueRef = import_react.useRef(value);
	const onChangeCallback = useStableCallback(onChange);
	useIsoLayoutEffect(() => {
		if (valueRef.current !== value) onChangeCallback(valueRef.current);
		valueRef.current = value;
	}, [value, onChangeCallback]);
}
//#endregion
//#region node_modules/@base-ui/react/utils/useOpenInteractionType.mjs
function useOpenMethodTriggerProps(open, setOpenMethod) {
	const { onClick, onPointerDown } = useEnhancedClickHandler(useStableCallback((_, interactionType) => {
		if (!(typeof open === "function" ? open() : open)) setOpenMethod(interactionType || (ios ? "touch" : ""));
	}));
	return import_react.useMemo(() => ({
		onClick,
		onPointerDown
	}), [onClick, onPointerDown]);
}
/**
* Determines the interaction type (keyboard, mouse, touch, etc.) that opened the component.
*
* @param open The open state of the component.
*/
function useOpenInteractionType(open) {
	const [openMethod, setOpenMethod] = import_react.useState(null);
	const triggerProps = useOpenMethodTriggerProps(open, setOpenMethod);
	useValueChanged(open, (previousOpen) => {
		if (previousOpen && !open) setOpenMethod(null);
	});
	return import_react.useMemo(() => ({
		openMethod,
		triggerProps
	}), [openMethod, triggerProps]);
}
//#endregion
//#region components/ui/sheet.tsx
function Sheet({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogRoot, {
		"data-slot": "sheet",
		...props
	});
}
function SheetPortal({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogPortal, {
		"data-slot": "sheet-portal",
		...props
	});
}
function SheetOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogBackdrop, {
		"data-slot": "sheet-overlay",
		className: cn("fixed inset-0 z-50 bg-black/10 transition-opacity duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-backdrop-filter:backdrop-blur-xs", className),
		...props
	});
}
function SheetContent({ className, children, side = "right", showCloseButton = true, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPopup, {
		"data-slot": "sheet-content",
		"data-side": side,
		className: cn("fixed z-50 flex flex-col gap-4 bg-popover bg-clip-padding text-sm text-popover-foreground shadow-lg transition duration-200 ease-in-out data-ending-style:opacity-0 data-starting-style:opacity-0 data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=bottom]:data-ending-style:translate-y-[2.5rem] data-[side=bottom]:data-starting-style:translate-y-[2.5rem] data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-e data-[side=left]:data-ending-style:translate-x-[-2.5rem] rtl:data-[side=left]:data-ending-style:-translate-x-[-2.5rem] data-[side=left]:data-starting-style:translate-x-[-2.5rem] rtl:data-[side=left]:data-starting-style:-translate-x-[-2.5rem] data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-s data-[side=right]:data-ending-style:translate-x-[2.5rem] rtl:data-[side=right]:data-ending-style:-translate-x-[2.5rem] data-[side=right]:data-starting-style:translate-x-[2.5rem] rtl:data-[side=right]:data-starting-style:-translate-x-[2.5rem] data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=top]:data-ending-style:translate-y-[-2.5rem] data-[side=top]:data-starting-style:translate-y-[-2.5rem] data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm", className),
		...props,
		children: [children, showCloseButton && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
			"data-slot": "sheet-close",
			render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				className: "absolute top-3 end-3",
				size: "icon-sm"
			}),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})] });
}
function SheetHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "sheet-header",
		className: cn("flex flex-col gap-0.5 p-4", className),
		...props
	});
}
function SheetTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
		"data-slot": "sheet-title",
		className: cn("font-heading text-base font-medium text-foreground", className),
		...props
	});
}
function SheetDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
		"data-slot": "sheet-description",
		className: cn("text-sm text-muted-foreground", className),
		...props
	});
}
//#endregion
//#region node_modules/@base-ui/utils/usePreviousValue.mjs
/**
* Returns a previous value of its argument.
* @param value Current value.
* @returns Previous value, or null if there is no previous value.
*/
function usePreviousValue(value) {
	const [state, setState] = import_react.useState({
		current: value,
		previous: null
	});
	if (!Object.is(value, state.current)) setState({
		current: value,
		previous: state.current
	});
	return state.previous;
}
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var PanelLeft = createLucideIcon("panel-left", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}], ["path", {
	d: "M9 3v18",
	key: "fh3hqa"
}]]);
//#endregion
//#region components/ui/sidebar.tsx
var SIDEBAR_COOKIE_NAME = "sidebar_state";
var SIDEBAR_COOKIE_MAX_AGE = 3600 * 24 * 7;
var SIDEBAR_WIDTH = "16rem";
var SIDEBAR_WIDTH_MOBILE = "18rem";
var SIDEBAR_WIDTH_ICON = "4rem";
var SIDEBAR_KEYBOARD_SHORTCUT = "b";
var SidebarContext = import_react.createContext(null);
function useSidebar() {
	const context = import_react.useContext(SidebarContext);
	if (!context) throw new Error("useSidebar must be used within a SidebarProvider.");
	return context;
}
function SidebarProvider({ defaultOpen = true, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }) {
	const isMobile = useIsMobile();
	const [openMobile, setOpenMobile] = import_react.useState(false);
	const [_open, _setOpen] = import_react.useState(defaultOpen);
	const open = openProp ?? _open;
	const setOpen = import_react.useCallback((value) => {
		const openState = typeof value === "function" ? value(open) : value;
		if (setOpenProp) setOpenProp(openState);
		else _setOpen(openState);
		document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
	}, [setOpenProp, open]);
	const toggleSidebar = import_react.useCallback(() => {
		return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
	}, [
		isMobile,
		setOpen,
		setOpenMobile
	]);
	import_react.useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
				event.preventDefault();
				toggleSidebar();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [toggleSidebar]);
	const state = open ? "expanded" : "collapsed";
	const contextValue = import_react.useMemo(() => ({
		state,
		open,
		setOpen,
		isMobile,
		openMobile,
		setOpenMobile,
		toggleSidebar
	}), [
		state,
		open,
		setOpen,
		isMobile,
		openMobile,
		setOpenMobile,
		toggleSidebar
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarContext.Provider, {
		value: contextValue,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"data-slot": "sidebar-wrapper",
			style: {
				"--sidebar-width": SIDEBAR_WIDTH,
				"--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
				...style
			},
			className: cn("group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar", className),
			...props,
			children
		})
	});
}
function Sidebar({ side = "left", variant = "sidebar", collapsible = "offcanvas", className, children, dir, ...props }) {
	const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
	if (collapsible === "none") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "sidebar",
		className: cn("flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground", className),
		...props,
		children
	});
	if (isMobile) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		open: openMobile,
		onOpenChange: setOpenMobile,
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
			dir,
			"data-sidebar": "sidebar",
			"data-slot": "sidebar",
			"data-mobile": "true",
			className: cn("w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden", className),
			style: { "--sidebar-width": SIDEBAR_WIDTH_MOBILE },
			side,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetHeader, {
				className: "sr-only",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, { children: "Sidebar" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetDescription, { children: "Displays the mobile sidebar." })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-full w-full flex-col",
				children
			})]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group peer hidden text-sidebar-foreground md:block",
		"data-state": state,
		"data-collapsible": state === "collapsed" ? collapsible : "",
		"data-variant": variant,
		"data-side": side,
		"data-slot": "sidebar",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"data-slot": "sidebar-gap",
			className: cn("relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"data-slot": "sidebar-container",
			"data-side": side,
			className: cn("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear data-[side=left]:left-0 data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] md:flex", variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-e group-data-[side=right]:border-s", className),
			...props,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-sidebar": "sidebar",
				"data-slot": "sidebar-inner",
				className: "flex size-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow-sm group-data-[variant=floating]:ring-1 group-data-[variant=floating]:ring-sidebar-border",
				children
			})
		})]
	});
}
function SidebarTrigger({ className, onClick, ...props }) {
	const { toggleSidebar } = useSidebar();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		"data-sidebar": "trigger",
		"data-slot": "sidebar-trigger",
		variant: "ghost",
		size: "icon-sm",
		className: cn(className),
		onClick: (event) => {
			onClick?.(event);
			toggleSidebar();
		},
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelLeft, { className: "rtl:rotate-180" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Toggle Sidebar"
		})]
	});
}
function SidebarInset({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		"data-slot": "sidebar-inset",
		className: cn("relative flex w-full flex-1 flex-col bg-background md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ms-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ms-2", className),
		...props
	});
}
function SidebarHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "sidebar-header",
		"data-sidebar": "header",
		className: cn("flex flex-col gap-2 p-2", className),
		...props
	});
}
function SidebarFooter({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "sidebar-footer",
		"data-sidebar": "footer",
		className: cn("flex flex-col gap-2 p-2", className),
		...props
	});
}
function SidebarSeparator({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {
		"data-slot": "sidebar-separator",
		"data-sidebar": "separator",
		className: cn("mx-2 bg-sidebar-border data-horizontal:w-auto", className),
		...props
	});
}
function SidebarContent({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "sidebar-content",
		"data-sidebar": "content",
		className: cn("no-scrollbar flex min-h-0 flex-1 flex-col gap-0 overflow-auto group-data-[collapsible=icon]:overflow-hidden", className),
		...props
	});
}
function SidebarGroup({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "sidebar-group",
		"data-sidebar": "group",
		className: cn("relative flex w-full min-w-0 flex-col p-2", className),
		...props
	});
}
function SidebarGroupLabel({ className, render, ...props }) {
	return useRender({
		defaultTagName: "div",
		props: mergeProps({ className: cn("flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 ring-sidebar-ring outline-hidden transition-[margin,opacity] duration-200 ease-linear group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", className) }, props),
		render,
		state: {
			slot: "sidebar-group-label",
			sidebar: "group-label"
		}
	});
}
function SidebarGroupContent({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "sidebar-group-content",
		"data-sidebar": "group-content",
		className: cn("w-full text-sm", className),
		...props
	});
}
function SidebarMenu({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		"data-slot": "sidebar-menu",
		"data-sidebar": "menu",
		className: cn("flex w-full min-w-0 flex-col gap-0", className),
		...props
	});
}
function SidebarMenuItem({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
		"data-slot": "sidebar-menu-item",
		"data-sidebar": "menu-item",
		className: cn("group/menu-item relative", className),
		...props
	});
}
var sidebarMenuButtonVariants = cva("peer/menu-button group/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-start text-sm ring-sidebar-ring outline-hidden transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pe-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground [&_svg]:size-4 [&_svg]:shrink-0 [&>span:last-child]:truncate", {
	variants: {
		variant: {
			default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
			outline: "bg-background shadow-[0_0_0_1px_var(--sidebar-border)] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_var(--sidebar-accent)]"
		},
		size: {
			default: "h-8 text-sm",
			sm: "h-7 text-xs",
			lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function SidebarMenuButton({ render, isActive = false, variant = "default", size = "default", tooltip, className, ...props }) {
	const { isMobile, state } = useSidebar();
	const comp = useRender({
		defaultTagName: "button",
		props: mergeProps({ className: cn(sidebarMenuButtonVariants({
			variant,
			size
		}), className) }, props),
		render: !tooltip ? render : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, { render }),
		state: {
			slot: "sidebar-menu-button",
			sidebar: "menu-button",
			size,
			active: isActive
		}
	});
	if (!tooltip) return comp;
	if (typeof tooltip === "string") tooltip = { children: tooltip };
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [comp, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
		side: "right",
		align: "center",
		hidden: state !== "collapsed" || isMobile,
		...tooltip
	})] });
}
//#endregion
//#region components/app-sidebar.tsx
var growthItems = [
	{
		id: "sales-pulse",
		label: "نبض فروش",
		icon: HeartPulse,
		page: "sales-pulse"
	},
	{
		id: "buyer-loyalty",
		label: "وفاداری خریداران",
		icon: Repeat,
		page: "buyer-loyalty"
	},
	{
		id: "peer-position",
		label: "جایگاه همتا",
		icon: ChartNoAxesColumn,
		page: "peer-position"
	},
	{
		id: "payment-health",
		label: "سلامت پرداخت",
		icon: Waypoints,
		page: "payment-health"
	},
	{
		id: "business-graph",
		label: "گراف کسب‌وکار",
		icon: GitGraph,
		page: "business-graph"
	}
];
function NavGroup({ label, items, activePage, onNavigate }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarGroup, {
		className: "px-2 py-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarGroupLabel, {
			className: "h-7 px-3 text-[10px] font-semibold text-sidebar-foreground/55",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarGroupContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarMenu, {
			className: "gap-1",
			children: items.map(({ id, label: itemLabel, icon: Icon, page }) => {
				const isActive = page ? activePage === page : false;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarMenuButton, {
					isActive,
					tooltip: {
						children: itemLabel,
						side: "left"
					},
					"aria-current": isActive ? "page" : void 0,
					className: cn("h-10 cursor-pointer items-center gap-2 rounded-lg px-3 text-[13px] font-medium text-sidebar-foreground/72 transition-colors duration-200 hover:bg-muted hover:text-sidebar-foreground focus-visible:ring-sidebar-border active:bg-muted motion-reduce:transition-none", "data-active:bg-muted data-active:text-sidebar-foreground", "group-data-[collapsible=icon]:mx-auto group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:[&>span]:hidden"),
					onClick: () => page && onNavigate(page),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: itemLabel })]
				}) }, id);
			})
		}) })]
	});
}
function SidebarCollapseControl() {
	const { state, toggleSidebar } = useSidebar();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-label": state === "expanded" ? "جمع کردن سایدبار" : "باز کردن سایدبار",
		title: state === "expanded" ? "جمع کردن سایدبار" : "باز کردن سایدبار",
		onClick: toggleSidebar,
		className: "absolute top-1/2 -left-3 z-10 hidden size-7 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-sidebar-border bg-sidebar text-sidebar-foreground shadow-[0_8px_20px_rgba(15,23,42,0.10)] transition-colors duration-200 hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-sidebar-border motion-reduce:transition-none md:flex",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
			className: cn("size-4 transition-transform duration-200 motion-reduce:transition-none", state === "collapsed" && "rotate-180"),
			"aria-hidden": "true"
		})
	});
}
function AppSidebar({ activePage, onNavigate }) {
	const [accountOpen, setAccountOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sidebar, {
		side: "right",
		variant: "floating",
		collapsible: "icon",
		className: "zarin-clean-sidebar",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarCollapseControl, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarHeader, {
				className: "gap-2.5 p-3 group-data-[collapsible=icon]:p-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2 group-data-[collapsible=icon]:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex min-w-0 items-center group-data-[collapsible=icon]:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm font-extrabold text-sidebar-foreground",
							children: "داشبورد زرین‌پال"
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-expanded": accountOpen,
						"aria-controls": "sidebar-account-menu",
						onClick: () => setAccountOpen((open) => !open),
						className: "flex w-full cursor-pointer items-center gap-3 rounded-xl bg-muted/60 p-2.5 text-start ring-1 ring-sidebar-border transition-colors duration-200 hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-sidebar-ring/35 motion-reduce:transition-none group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex size-9 shrink-0 items-center justify-center rounded-xl border border-sidebar-border bg-sidebar text-sidebar-foreground group-data-[collapsible=icon]:size-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1 group-data-[collapsible=icon]:hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-sm font-bold text-sidebar-foreground",
									children: "مهدی پاکروان"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-xs text-muted-foreground",
									dir: "ltr",
									children: "zarinp.al/mahdipakravan"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
								className: cn("shrink-0 text-muted-foreground transition-transform duration-200 motion-reduce:transition-none group-data-[collapsible=icon]:hidden", accountOpen && "rotate-180"),
								"aria-hidden": "true"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						id: "sidebar-account-menu",
						className: cn("grid transition-[grid-template-rows,opacity] duration-200 motion-reduce:transition-none group-data-[collapsible=icon]:hidden", accountOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "min-h-0 overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1 rounded-lg border border-sidebar-border bg-sidebar p-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "flex h-8 cursor-pointer items-center gap-2 rounded-md px-2 text-start text-xs font-medium text-sidebar-foreground/78 transition-colors duration-200 hover:bg-muted hover:text-sidebar-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring/35 motion-reduce:transition-none",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, {
										className: "size-3.5",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "جزئیات پذیرنده" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "flex h-8 cursor-pointer items-center gap-2 rounded-md px-2 text-start text-xs font-medium text-sidebar-foreground/78 transition-colors duration-200 hover:bg-muted hover:text-sidebar-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring/35 motion-reduce:transition-none",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, {
										className: "size-3.5",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "تنظیمات حساب" })]
								})]
							})
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarSeparator, { className: "mx-5 group-data-[collapsible=icon]:mx-auto group-data-[collapsible=icon]:w-8" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarContent, {
				className: "pt-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "بخش‌های داشبورد",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavGroup, {
						label: "رشد کسب‌وکار",
						items: growthItems,
						activePage,
						onNavigate
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarFooter, {
				className: "mt-auto gap-1 p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarSeparator, { className: "mx-2 group-data-[collapsible=icon]:mx-auto group-data-[collapsible=icon]:w-8" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarMenu, {
					className: "gap-1 pt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarMenuButton, {
						tooltip: {
							children: "تنظیمات زرین‌لینک",
							side: "left"
						},
						className: "h-10 cursor-pointer items-center gap-2 rounded-lg px-3 text-[13px] font-medium text-sidebar-foreground/72 transition-colors duration-200 hover:bg-muted hover:text-sidebar-foreground focus-visible:ring-sidebar-border group-data-[collapsible=icon]:mx-auto group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:[&>span]:hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "تنظیمات زرین‌لینک" })]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarMenuButton, {
						tooltip: {
							children: "خروج",
							side: "left"
						},
						className: "h-10 cursor-pointer items-center gap-2 rounded-lg px-3 text-[13px] font-medium text-sidebar-foreground/58 transition-colors duration-200 hover:bg-muted hover:text-sidebar-foreground focus-visible:ring-sidebar-border group-data-[collapsible=icon]:mx-auto group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:[&>span]:hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "خروج" })]
					}) })]
				})]
			})
		]
	});
}
//#endregion
//#region components/dashboard/page-heading.tsx
function PageHeading({ title, subtitle, action, className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		"data-slot": "page-heading",
		className: cn("flex flex-col gap-2.5 sm:flex-row sm:items-start sm:justify-between", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 flex-col gap-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-extrabold tracking-tight sm:text-xl",
				children: title
			}), subtitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-2xl text-xs leading-5 text-muted-foreground sm:text-sm",
				children: subtitle
			}) : null]
		}), action]
	});
}
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Bell = createLucideIcon("bell", [["path", {
	d: "M10.268 21a2 2 0 0 0 3.464 0",
	key: "vwvbt9"
}], ["path", {
	d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
	key: "11g9vi"
}]]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Ticket = createLucideIcon("ticket", [
	["path", {
		d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
		key: "qn84l0"
	}],
	["path", {
		d: "M13 5v2",
		key: "dyzc3o"
	}],
	["path", {
		d: "M13 17v2",
		key: "1ont0d"
	}],
	["path", {
		d: "M13 11v2",
		key: "1wjjxi"
	}]
]);
//#endregion
//#region components/ui/badge.tsx
var badgeVariants = cva("group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pe-1.5 has-data-[icon=inline-start]:ps-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!", {
	variants: { variant: {
		default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
		secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
		destructive: "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
		outline: "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
		ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
		link: "text-primary underline-offset-4 hover:underline"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant = "default", render, ...props }) {
	return useRender({
		defaultTagName: "span",
		props: mergeProps({ className: cn(badgeVariants({ variant }), className) }, props),
		render,
		state: {
			slot: "badge",
			variant
		}
	});
}
//#endregion
//#region components/dashboard-header.tsx
function DashboardHeader() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-20 flex h-12 shrink-0 items-center justify-between gap-3 border-b bg-background/90 px-3 backdrop-blur-sm md:px-4",
		dir: "ltr",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			dir: "ltr",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "ghost",
				size: "sm",
				className: "hidden sm:inline-flex",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ticket, { "data-icon": "inline-start" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold",
					children: "تیکت‌ها"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "ghost",
				size: "icon-sm",
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						className: "absolute -top-1 -right-1 size-5 justify-center rounded-full p-0 text-[10px]",
						children: "۱۳"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: "اعلان‌ها"
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			"aria-label": "زرین‌پال",
			dir: "rtl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/zarinpal-logo.svg",
				alt: "زرین‌پال",
				className: "h-7 w-auto"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarTrigger, { className: "md:hidden" })]
		})]
	});
}
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Clock = createLucideIcon("clock", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "M12 6v6l4 2",
	key: "mmk7yg"
}]]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CreditCard = createLucideIcon("credit-card", [["rect", {
	width: "20",
	height: "14",
	x: "2",
	y: "5",
	rx: "2",
	key: "ynyp8z"
}], ["line", {
	x1: "2",
	x2: "22",
	y1: "10",
	y2: "10",
	key: "1b3vmo"
}]]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ShieldCheck = createLucideIcon("shield-check", [["path", {
	d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
	key: "oel41y"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Target = createLucideIcon("target", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "6",
		key: "1vlfrh"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "2",
		key: "1c9p78"
	}]
]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var TrendingUp = createLucideIcon("trending-up", [["path", {
	d: "M16 7h6v6",
	key: "box55l"
}], ["path", {
	d: "m22 7-8.5 8.5-5-5L2 17",
	key: "1t1m79"
}]]);
//#endregion
//#region components/dashboard/analysis-slot.tsx
function AnalysisSlot({ title, description, children, className, ...props }) {
	const headingId = (0, import_react.useId)();
	const empty = import_react.Children.count(children) === 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-labelledby": headingId,
		"data-slot": "analysis-slot",
		"data-empty": empty ? "true" : "false",
		className: cn("rail-panel flex min-h-36 flex-col gap-2.5 p-2.5 text-card-foreground sm:p-3", "data-[empty=true]:border-dashed data-[empty=true]:bg-card/70", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex flex-col gap-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: headingId,
				className: "font-heading text-sm font-medium",
				children: title
			}), description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: description
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex min-h-20 flex-1 flex-col",
			children: empty ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "rail-empty-grid min-h-20 flex-1 rounded-md"
			}) : children
		})]
	});
}
//#endregion
//#region components/dashboard/insight-page.tsx
function InsightPage({ title, story, note, children, className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-slot": "insight-page",
		className: cn("flex flex-col gap-2.5", className),
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeading, {
				title,
				subtitle: story
			}),
			note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-3xl text-xs leading-5 text-muted-foreground sm:text-sm",
				children: note
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 gap-2.5 md:grid-cols-2",
				children
			})
		]
	});
}
//#endregion
//#region components/pages/business-graph-page.tsx
var impactNodes = [
	{
		label: "مناسبت",
		value: "+۲۸٪",
		x: 410,
		y: 54,
		tone: "accent"
	},
	{
		label: "فروش موفق",
		value: "۶۸۲م",
		x: 250,
		y: 132,
		tone: "primary"
	},
	{
		label: "خریدار بازگشتی",
		value: "۳۹٪",
		x: 92,
		y: 84,
		tone: "good"
	},
	{
		label: "ساعت اوج",
		value: "۲۰-۲۲",
		x: 108,
		y: 218,
		tone: "muted"
	},
	{
		label: "NoAttempt",
		value: "۷.۸٪",
		x: 374,
		y: 230,
		tone: "warn"
	}
];
var graphEdges = [
	["مناسبت", "فروش موفق"],
	["خریدار بازگشتی", "فروش موفق"],
	["ساعت اوج", "فروش موفق"],
	["NoAttempt", "فروش موفق"]
];
var nodeToneClass = {
	accent: "fill-accent stroke-primary/25",
	good: "fill-[color-mix(in_oklch,var(--chart-2)_14%,white)] stroke-[var(--chart-2)]/45",
	muted: "fill-muted stroke-border",
	primary: "fill-primary stroke-primary",
	warn: "fill-card stroke-[var(--chart-5)]/45"
};
function nodePoint(label) {
	const node = impactNodes.find((item) => item.label === label);
	if (!node) throw new Error(`Unknown graph node: ${label}`);
	return node;
}
function GraphPreview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "rail-empty-grid min-h-72 overflow-hidden rounded-md border border-border bg-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "sr-only",
			children: "گراف روابط بین مناسبت، خریدار بازگشتی، ساعت اوج، NoAttempt و فروش موفق."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 500 300",
			className: "h-full min-h-72 w-full",
			role: "img",
			"aria-label": "پیش‌نمایش گراف هوشمند کسب‌وکار",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
				"aria-hidden": "true",
				children: graphEdges.map(([from, to]) => {
					const start = nodePoint(from);
					const end = nodePoint(to);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: start.x,
						x2: end.x,
						y1: start.y,
						y2: end.y,
						className: "stroke-primary/35",
						strokeWidth: "2",
						strokeLinecap: "round",
						strokeDasharray: from === "NoAttempt" ? "5 6" : void 0
					}, `${from}-${to}`);
				})
			}), impactNodes.map((node) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: node.x - 58,
					y: node.y - 28,
					width: "116",
					height: "56",
					rx: "8",
					className: nodeToneClass[node.tone],
					strokeWidth: "1.5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: node.x,
					y: node.y - 4,
					textAnchor: "middle",
					className: "fill-foreground text-[12px] font-bold",
					children: node.label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: node.x,
					y: node.y + 16,
					textAnchor: "middle",
					className: "fill-muted-foreground text-[11px] font-semibold",
					children: node.value
				})
			] }, node.label))]
		})]
	});
}
function CompactList({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "flex flex-col gap-2",
		children: items.map(({ icon: Icon, label, value }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "grid grid-cols-[auto_1fr_auto] items-center gap-2 rounded-md border border-border bg-muted/35 px-2.5 py-2 text-xs",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex size-7 items-center justify-center rounded-md bg-card text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "size-3.5",
						"aria-hidden": "true"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium text-foreground",
					children: label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-extrabold tabular-nums text-foreground",
					children: value
				})
			]
		}, label))
	});
}
function BusinessGraphPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InsightPage, {
		title: "گراف هوشمند کسب‌وکار",
		story: "روابط پنهان بین فروش، خریدار، زمان و مسیر پرداخت را روی یک نقشه عملیاتی ببینید",
		note: "گراف از داده‌های تجمیع‌شده ساخته می‌شود و هویت سایر پذیرنده‌ها یا خریداران افشا نمی‌شود.",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnalysisSlot, {
				className: "md:col-span-2",
				title: "نمای گراف تعاملی",
				description: "هر گره یک متغیر اثرگذار است؛ ضخامت ارتباط‌ها با قدرت همبستگی تغییر می‌کند.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraphPreview, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnalysisSlot, {
				title: "گره‌های پرتأثیر",
				description: "متغیرهایی که بیشترین سهم را در تغییر فروش دارند.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompactList, { items: [
					{
						icon: TrendingUp,
						label: "رشد مناسبت",
						value: "+۲۸٪"
					},
					{
						icon: Repeat,
						label: "خریدار بازگشتی",
						value: "۳۹٪"
					},
					{
						icon: CreditCard,
						label: "میانگین سبد",
						value: "۹۸۲ه"
					}
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnalysisSlot, {
				title: "مسیرهای علّی محتمل",
				description: "زنجیره‌های قابل بررسی، با سطح اطمینان آماری.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompactList, { items: [
					{
						icon: Clock,
						label: "اوج ۲۰ تا ۲۲ ← فروش",
						value: "۰.۷۴"
					},
					{
						icon: TriangleAlert,
						label: "NoAttempt ← افت موفقیت",
						value: "۰.۶۲"
					},
					{
						icon: ShieldCheck,
						label: "Retry ← بازیابی نشست",
						value: "۰.۵۷"
					}
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnalysisSlot, {
				className: "md:col-span-2",
				title: "پیشنهاد مداخله",
				description: "اقدام پیشنهادی بر اساس ساختار فعلی گراف.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rail-banner grid gap-2.5 p-2.5 sm:grid-cols-[auto_1fr] sm:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-9 items-center justify-center rounded-md bg-white/10 text-accent",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, {
							className: "size-4",
							"aria-hidden": "true"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-6 text-white/90",
						children: "پیشنهاد خرید دوم را در بازه ۱۵ تا ۴۵ روز پس از خرید اول فعال کنید و همزمان ترمینال‌های دارای NoAttempt بالا را از قیف پرداخت جداگانه پایش کنید."
					})]
				})
			})
		]
	});
}
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CalendarDays = createLucideIcon("calendar-days", [
	["path", {
		d: "M8 2v3",
		key: "1ioesn"
	}],
	["path", {
		d: "M16 2v3",
		key: "otl347"
	}],
	["rect", {
		x: "3",
		y: "3",
		width: "18",
		height: "18",
		rx: "2",
		key: "h1oib"
	}],
	["path", {
		d: "M3 9h18",
		key: "1pudct"
	}],
	["path", {
		d: "M8 13h.01",
		key: "1sbv64"
	}],
	["path", {
		d: "M12 13h.01",
		key: "y0uutt"
	}],
	["path", {
		d: "M16 13h.01",
		key: "wip0gl"
	}],
	["path", {
		d: "M8 17h.01",
		key: "p3bg7i"
	}],
	["path", {
		d: "M12 17h.01",
		key: "p32p05"
	}],
	["path", {
		d: "M16 17h.01",
		key: "ql8jdd"
	}]
]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Lightbulb = createLucideIcon("lightbulb", [
	["path", {
		d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
		key: "1gvzjb"
	}],
	["path", {
		d: "M9 18h6",
		key: "x1upvd"
	}],
	["path", {
		d: "M10 22h4",
		key: "ceow96"
	}]
]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ShoppingCart = createLucideIcon("shopping-cart", [
	["circle", {
		cx: "8",
		cy: "21",
		r: "1",
		key: "jimo8o"
	}],
	["circle", {
		cx: "19",
		cy: "21",
		r: "1",
		key: "13723u"
	}],
	["path", {
		d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
		key: "9zh506"
	}]
]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Store = createLucideIcon("store", [
	["path", {
		d: "M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5",
		key: "slp6dd"
	}],
	["path", {
		d: "M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244",
		key: "o0xfot"
	}],
	["path", {
		d: "M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05",
		key: "wn3emo"
	}]
]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Users = createLucideIcon("users", [
	["path", {
		d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
		key: "1yyitq"
	}],
	["path", {
		d: "M16 3.128a4 4 0 0 1 0 7.744",
		key: "16gr8j"
	}],
	["path", {
		d: "M22 21v-2a4 4 0 0 0-3-3.87",
		key: "kshegd"
	}],
	["circle", {
		cx: "9",
		cy: "7",
		r: "4",
		key: "nufk8"
	}]
]);
//#endregion
//#region lib/buyer-loyalty-mock-data.ts
var BUYER_LOYALTY_METRICS = [
	{
		id: "verified-purchases",
		label: "خریدهای قابل شناسایی",
		value: "۱,۰۲۵,۶۴۷",
		caption: "try_status = Verified",
		icon: "cart",
		tone: "navy"
	},
	{
		id: "observed-cards",
		label: "شناسه کارت‌های مشاهده‌شده",
		value: "۳۹۶,۳۶۵",
		caption: "کارت یکتا",
		icon: "card",
		tone: "teal"
	},
	{
		id: "returning-cards",
		label: "کارت‌های بازگشتی",
		value: "۱۲۶,۳۲۵",
		caption: "حداقل دو خرید",
		icon: "users",
		tone: "violet"
	},
	{
		id: "returning-rate",
		label: "درصد کارت‌های بازگشتی",
		value: "۳۱.۸۵٪",
		caption: "از کل کارت‌ها",
		icon: "repeat",
		tone: "teal"
	},
	{
		id: "repeat-sales-share",
		label: "سهم خریدهای تکراری از فروش",
		value: "۶۱.۳۵٪",
		caption: "خرید دوم یا بعدی",
		icon: "trend",
		tone: "sky"
	}
];
var BEHAVIOR_SEGMENTS = [
	{
		label: "کارت بازگشتی (۲+ خرید)",
		count: "۱۲۶,۳۲۵",
		share: 31.85,
		tone: "teal"
	},
	{
		label: "تک‌خریدی",
		count: "۲۱۸,۳۴۲",
		share: 55.09,
		tone: "mint"
	},
	{
		label: "کارت تازه در بازه ۸ هفته",
		count: "۲۳,۴۶۵",
		share: 5.92,
		tone: "sky"
	},
	{
		label: "کارت وفادار/درخشان",
		count: "۱۶,۳۳۱",
		share: 4.12,
		tone: "violet"
	},
	{
		label: "کارت در معرض ریزش",
		count: "۱۱,۹۰۲",
		share: 3.02,
		tone: "amber"
	}
];
var SECOND_PURCHASE_LABELS = [
	"روز ۷",
	"روز ۳۰",
	"روز ۶۰",
	"روز ۹۰"
];
var SECOND_PURCHASE_SERIES = [{
	label: "پذیرنده شما",
	values: [
		5,
		14,
		19,
		23
	],
	tone: "navy"
}, {
	label: "میانه همتایان",
	values: [
		8,
		21,
		28,
		33
	],
	tone: "muted"
}];
var COHORT_HEADERS = [
	"روز ۷",
	"روز ۳۰",
	"روز ۶۰",
	"روز ۹۰"
];
var RETENTION_COHORT_ROWS = [
	{
		month: "فروردین ۱۴۰۳",
		values: [
			6,
			14,
			19,
			23
		]
	},
	{
		month: "اسفند ۱۴۰۲",
		values: [
			7,
			15,
			20,
			24
		]
	},
	{
		month: "بهمن ۱۴۰۲",
		values: [
			6,
			13,
			18,
			22
		]
	},
	{
		month: "دی ۱۴۰۲",
		values: [
			5,
			12,
			16,
			20
		]
	},
	{
		month: "آذر ۱۴۰۲",
		values: [
			5,
			11,
			15,
			null
		]
	}
];
//#endregion
//#region lib/format.ts
var persianDigits = [
	"۰",
	"۱",
	"۲",
	"۳",
	"۴",
	"۵",
	"۶",
	"۷",
	"۸",
	"۹"
];
function toPersianDigits(value) {
	return String(value).replace(/\d/g, (digit) => persianDigits[Number(digit)] ?? digit);
}
function formatPersianNumber(value, options) {
	return toPersianDigits(value.toLocaleString("fa-IR", options));
}
function formatPersianPercent(value, signed = false) {
	return `${signed && value > 0 ? "+" : ""}${formatPersianNumber(value, { maximumFractionDigits: 1 })}٪`;
}
//#endregion
//#region components/buyer-loyalty/buyer-loyalty-dashboard.tsx
var loyaltyTheme = {
	"--loyalty-ink": "#1a2148",
	"--loyalty-subtle": "#6b7590",
	"--loyalty-line": "#e4e9f3",
	"--loyalty-wash": "#f6f8fc",
	"--loyalty-navy": "#171f4a",
	"--loyalty-navy-2": "#1e3f85",
	"--loyalty-teal": "#0f9a84",
	"--loyalty-teal-soft": "#e7f8f4",
	"--loyalty-teal-line": "#b9eadb",
	"--loyalty-teal-wash": "#f0fbf7",
	"--loyalty-mint": "#6ac89e",
	"--loyalty-mint-soft": "#e7f8ef",
	"--loyalty-mint-line": "#c7ecd8",
	"--loyalty-sky": "#2f6fe8",
	"--loyalty-sky-soft": "#eaf2ff",
	"--loyalty-sky-line": "#c8d9fb",
	"--loyalty-violet": "#174fd6",
	"--loyalty-violet-alpha": "color-mix(in oklch, #174fd6 58%, transparent)",
	"--loyalty-violet-soft": "#eaf1ff",
	"--loyalty-violet-line": "#c8d8ff",
	"--loyalty-amber": "#e8892d",
	"--loyalty-amber-alpha": "color-mix(in oklch, #e8892d 78%, transparent)",
	"--loyalty-amber-soft": "#fff3e4",
	"--loyalty-amber-line": "#ffd8a8",
	"--loyalty-rose": "#e25555",
	"--loyalty-rose-soft": "#f6f8fc",
	"--loyalty-rose-line": "#e4e9f3",
	"--loyalty-sky-alpha": "color-mix(in oklch, #2f6fe8 68%, transparent)",
	"--loyalty-mint-alpha": "color-mix(in oklch, #6ac89e 68%, transparent)",
	"--loyalty-teal-alpha": "color-mix(in oklch, #0f9a84 18%, transparent)",
	"--loyalty-muted-line": "#96a3ba",
	"--loyalty-yellow": "#ffd60a"
};
var panelClass$3 = "rail-panel rail-panel-interactive [--rail-accent:var(--loyalty-violet)] [--rail-line:var(--loyalty-line)]";
var toneStyles = {
	amber: {
		bg: "bg-[var(--loyalty-amber)]",
		border: "border-[var(--loyalty-amber-line)]",
		soft: "bg-[var(--loyalty-amber-soft)]",
		stroke: "stroke-[var(--loyalty-amber)]",
		text: "text-[var(--loyalty-amber)]",
		wash: "bg-[var(--loyalty-amber-soft)]"
	},
	mint: {
		bg: "bg-[var(--loyalty-mint)]",
		border: "border-[var(--loyalty-mint-line)]",
		soft: "bg-[var(--loyalty-mint-soft)]",
		stroke: "stroke-[var(--loyalty-mint)]",
		text: "text-[var(--loyalty-mint)]",
		wash: "bg-[var(--loyalty-mint-soft)]"
	},
	navy: {
		bg: "bg-[var(--loyalty-navy)]",
		border: "border-[var(--loyalty-line)]",
		soft: "bg-[var(--loyalty-wash)]",
		stroke: "stroke-[var(--loyalty-navy)]",
		text: "text-[var(--loyalty-navy)]",
		wash: "bg-[var(--loyalty-wash)]"
	},
	rose: {
		bg: "bg-[var(--loyalty-rose)]",
		border: "border-[var(--loyalty-line)]",
		soft: "bg-[var(--loyalty-wash)]",
		stroke: "stroke-[var(--loyalty-rose)]",
		text: "text-[var(--loyalty-rose)]",
		wash: "bg-[var(--loyalty-wash)]"
	},
	sky: {
		bg: "bg-[var(--loyalty-sky)]",
		border: "border-[var(--loyalty-sky-line)]",
		soft: "bg-[var(--loyalty-sky-soft)]",
		stroke: "stroke-[var(--loyalty-sky)]",
		text: "text-[var(--loyalty-sky)]",
		wash: "bg-[var(--loyalty-sky-soft)]"
	},
	teal: {
		bg: "bg-[var(--loyalty-teal)]",
		border: "border-[var(--loyalty-teal-line)]",
		soft: "bg-[var(--loyalty-teal-soft)]",
		stroke: "stroke-[var(--loyalty-teal)]",
		text: "text-[var(--loyalty-teal)]",
		wash: "bg-[var(--loyalty-teal-wash)]"
	},
	violet: {
		bg: "bg-[var(--loyalty-violet)]",
		border: "border-[var(--loyalty-violet-line)]",
		soft: "bg-[var(--loyalty-violet-soft)]",
		stroke: "stroke-[var(--loyalty-violet)]",
		text: "text-[var(--loyalty-violet)]",
		wash: "bg-[var(--loyalty-violet-soft)]"
	}
};
var metricIconMap$1 = {
	card: CreditCard,
	cart: ShoppingCart,
	repeat: Repeat,
	trend: TrendingUp,
	users: Users
};
var primaryMetricIds = new Set([
	"verified-purchases",
	"observed-cards",
	"returning-rate"
]);
var behaviorArcs = BEHAVIOR_SEGMENTS.reduce((items, segment) => {
	const offset = items.reduce((sum, item) => sum + item.share, 0);
	return [...items, {
		...segment,
		offset
	}];
}, []);
function formatChartPercent(value) {
	return formatPersianPercent(value);
}
function Panel$2({ title, description, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn(panelClass$3, "flex flex-col gap-2.5 p-2.5 sm:p-3", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex flex-col gap-0.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-sm font-bold text-[var(--loyalty-ink)] sm:text-base",
				children: title
			}), description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs leading-5 text-[var(--loyalty-subtle)]",
				children: description
			}) : null]
		}), children]
	});
}
function ToolbarButton({ icon: Icon, label, ariaLabel }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		"aria-label": ariaLabel,
		className: "flex h-10 w-full min-w-0 cursor-pointer items-center justify-between gap-2 rounded-lg border border-[var(--loyalty-line)] bg-card px-2.5 text-start transition-colors duration-200 hover:bg-[var(--loyalty-wash)] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40 motion-reduce:transition-none",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex min-w-0 items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				className: "size-4 shrink-0 text-[var(--loyalty-violet)]",
				"aria-hidden": "true"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "truncate text-xs font-extrabold text-[var(--loyalty-ink)]",
				children: label
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
			className: "size-3.5 shrink-0 text-[var(--loyalty-violet)]",
			"aria-hidden": "true"
		})]
	});
}
function BuyerLoyaltyHeader({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("flex flex-col gap-2.5 lg:flex-row lg:items-start lg:justify-between", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 items-center gap-2.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex size-10 shrink-0 items-center justify-center rounded-md bg-[var(--loyalty-yellow)] text-[var(--loyalty-ink)] sm:size-11",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
					className: "size-5",
					"aria-hidden": "true"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 flex-col gap-0.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-lg font-extrabold tracking-tight text-[var(--loyalty-ink)] sm:text-xl",
					children: "رفتار و وفاداری خریداران"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-[var(--loyalty-subtle)] sm:text-sm",
					children: "تحلیل رفتار کارت‌ها بر اساس خریدهای قابل شناسایی"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid w-full shrink-0 grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-2.5 lg:w-auto lg:min-w-[18rem]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarButton, {
				icon: Store,
				label: "پذیرنده",
				ariaLabel: "انتخاب پذیرنده برای تحلیل وفاداری"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarButton, {
				icon: CalendarDays,
				label: "بازه",
				ariaLabel: "انتخاب بازه زمانی تحلیل وفاداری"
			})]
		})]
	});
}
function MetricCard({ metric }) {
	const Icon = metricIconMap$1[metric.icon];
	const styles = toneStyles[metric.tone];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn(panelClass$3, "flex items-start justify-between gap-2 p-2.5"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 flex-col gap-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-[11px] font-semibold leading-4 text-[var(--loyalty-ink)]",
					children: metric.label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: cn("text-lg font-extrabold leading-none tracking-tight sm:text-xl", styles.text),
					children: metric.value
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] text-[var(--loyalty-subtle)]",
					children: metric.caption
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("flex size-8 shrink-0 items-center justify-center rounded-lg border", styles.border, styles.soft, styles.text),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				className: "size-3.5",
				"aria-hidden": "true"
			})
		})]
	});
}
function MetricStrip({ className }) {
	const metrics = BUYER_LOYALTY_METRICS.filter((metric) => primaryMetricIds.has(metric.id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-label": "شاخص‌های خلاصه وفاداری",
		className: cn("grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-2.5", className),
		children: metrics.map((metric) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, { metric }, metric.id))
	});
}
function InsightActionPanel({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		"aria-labelledby": "buyer-loyalty-insight-heading",
		className: cn("rail-banner flex flex-col gap-2.5 p-2.5 sm:p-3", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex size-8 items-center justify-center rounded-md bg-white/10 text-[var(--loyalty-yellow)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, {
						className: "size-4",
						"aria-hidden": "true"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "buyer-loyalty-insight-heading",
					className: "text-sm font-bold text-white",
					children: "بینش کلیدی"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "relative text-sm leading-6 text-white/90",
				children: "۱۴٪ کارت‌های اولین‌بار در فروردین طی ۳۰ روز خرید دیگری داشتند؛ همتایان ۲۱٪. با رسیدن به میانه، حدود ۱۸۰ خرید تکراری بیشتر قابل انتظار است."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex gap-2 border-t border-white/10 pt-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex size-8 shrink-0 items-center justify-center rounded-md bg-white/10 text-[var(--loyalty-mint)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, {
						className: "size-3.5",
						"aria-hidden": "true"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-0.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold text-[var(--loyalty-mint)]",
						children: "اقدام پیشنهادی"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs leading-5 text-white/85 sm:text-sm sm:leading-6",
						children: "پیشنهاد خرید دوم را در بازه‌ای اجرا کنید که مشتریان وفادار معمولاً بازمی‌گردند."
					})]
				})]
			})
		]
	});
}
function BehaviorDonutCard({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel$2, {
		className,
		title: "تقسیم‌بندی کارت‌ها بر اساس رفتار",
		description: "سهم کارت‌های مشاهده‌شده در هر وضعیت رفتاری",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
			className: "grid flex-1 items-center gap-2.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "sr-only",
					children: "توزیع کارت‌های یکتا بر اساس رفتار خرید و بازگشت."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto flex size-36 items-center justify-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						viewBox: "0 0 120 120",
						className: "size-full -rotate-90 motion-reduce:rotate-0",
						"aria-hidden": "true",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "60",
							cy: "60",
							r: "45",
							fill: "none",
							className: "stroke-[var(--loyalty-line)]",
							strokeWidth: "15"
						}), behaviorArcs.map((segment) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "60",
							cy: "60",
							r: "45",
							fill: "none",
							pathLength: 100,
							className: toneStyles[segment.tone].stroke,
							strokeWidth: "15",
							strokeDasharray: `${segment.share} ${100 - segment.share}`,
							strokeDashoffset: -segment.offset
						}, segment.label))]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-0 flex flex-col items-center justify-center text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-2xl font-extrabold text-[var(--loyalty-ink)]",
							children: "۳۹۶,۳۶۵"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-[var(--loyalty-subtle)]",
							children: "کارت یکتا"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid grid-cols-1 gap-1.5 sm:grid-cols-2 xl:grid-cols-1",
					children: BEHAVIOR_SEGMENTS.map((segment) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid min-w-0 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("size-3 rounded-sm", toneStyles[segment.tone].bg),
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "min-w-0 truncate text-[var(--loyalty-ink)]",
								children: segment.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums text-[var(--loyalty-subtle)]",
								children: formatChartPercent(segment.share)
							})
						]
					}, segment.label))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "rounded-md bg-[var(--loyalty-wash)] px-2.5 py-2 text-xs text-[var(--loyalty-subtle)]",
			children: "در معرض ریزش: آخرین خرید ۶۰ تا ۹۰ روز قبل و هنوز خرید جدیدی انجام نشده است."
		})]
	});
}
function buildChartPoints(values, labels, max) {
	const width = 460;
	const height = 190;
	const top = 20;
	const left = 44;
	const xStep = width / Math.max(labels.length - 1, 1);
	return values.map((value, index) => ({
		label: labels[index] ?? "",
		value,
		x: left + index * xStep,
		y: top + height - value / max * height
	}));
}
function TrendChart({ labels, compact = false, max, series, title }) {
	const chartSeries = series.map((item) => ({
		...item,
		points: buildChartPoints(item.values, labels, max)
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: cn("flex flex-col gap-2.5", !compact && "flex-1"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
				className: "sr-only",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-center gap-4 text-xs text-[var(--loyalty-subtle)]",
				children: series.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("h-0.5 w-8 rounded-full", item.tone === "muted" ? "bg-[var(--loyalty-muted-line)]" : item.tone === "teal" ? "bg-[var(--loyalty-teal)]" : "bg-[var(--loyalty-navy)]"),
						"aria-hidden": "true"
					}), item.label]
				}, item.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 560 250",
				className: cn("h-auto w-full", compact ? "max-h-40" : "min-h-40 sm:min-h-48"),
				role: "img",
				"aria-label": title,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					"aria-hidden": "true",
					children: [
						[
							0,
							10,
							20,
							30,
							40
						].map((tick) => {
							const y = 210 - tick / max * 190;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
								x1: "44",
								x2: "520",
								y1: y,
								y2: y,
								className: "stroke-[var(--loyalty-line)]",
								strokeWidth: "1"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
								x: "22",
								y: y + 4,
								textAnchor: "middle",
								className: "fill-[var(--loyalty-subtle)] text-[10px]",
								children: formatChartPercent(tick)
							})] }, tick);
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: "44",
							x2: "520",
							y1: "210",
							y2: "210",
							className: "stroke-[var(--loyalty-line)]",
							strokeWidth: "1.5"
						}),
						labels.map((label, index) => {
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
								x: 44 + index * (460 / Math.max(labels.length - 1, 1)),
								y: "235",
								textAnchor: "middle",
								className: "fill-[var(--loyalty-subtle)] text-[11px]",
								children: label
							}, label);
						})
					]
				}), chartSeries.map((item) => {
					const lineTone = item.tone === "muted" ? "stroke-[var(--loyalty-muted-line)]" : item.tone === "teal" ? "stroke-[var(--loyalty-teal)]" : "stroke-[var(--loyalty-navy)]";
					const textTone = item.tone === "muted" ? "fill-[var(--loyalty-muted-line)]" : item.tone === "teal" ? "fill-[var(--loyalty-teal)]" : "fill-[var(--loyalty-navy)]";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", {
						points: item.points.map((point) => `${point.x},${point.y}`).join(" "),
						fill: "none",
						className: lineTone,
						strokeWidth: "3",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeDasharray: item.tone === "muted" ? "7 8" : void 0
					}), item.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: point.x,
						cy: point.y,
						r: "5",
						className: cn("fill-card", lineTone),
						strokeWidth: "3"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: point.x,
						y: point.y - 12,
						textAnchor: "middle",
						className: cn("text-[11px] font-semibold", textTone),
						children: formatChartPercent(point.value)
					})] }, `${item.label}-${point.label}`))] }, item.label);
				})]
			})
		]
	});
}
function SecondPurchaseCard({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel$2, {
		className,
		title: "نرخ خرید دوم یا بعدی در بازه‌های زمانی",
		description: "از بین کارت‌های اولین‌بار مشاهده‌شده",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendChart, {
			labels: SECOND_PURCHASE_LABELS,
			max: 40,
			series: SECOND_PURCHASE_SERIES,
			title: "نمودار نرخ خرید دوم یا بعدی در روزهای ۷، ۳۰، ۶۰ و ۹۰"
		})
	});
}
function cohortCellStyle(value) {
	return {
		backgroundColor: `color-mix(in oklch, var(--loyalty-violet) ${Math.min(34 + value * 1.8, 78)}%, white)`,
		color: value >= 20 ? "white" : "var(--loyalty-ink)"
	};
}
function RetentionCohortCard({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel$2, {
		className,
		title: "Retention Cohort بر اساس ماه اولین مشاهده",
		description: "درصد کارت‌هایی که در بازه زمانی، خرید تکراری داشته‌اند",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full min-w-[28rem] border-separate border-spacing-0 text-center text-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
						className: "sr-only",
						children: "جدول cohort نگهداشت کارت‌ها بر اساس ماه اولین مشاهده و بازگشت در روزهای ۷، ۳۰، ۶۰ و ۹۰."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						scope: "col",
						className: "p-2 text-start font-medium text-[var(--loyalty-subtle)]",
						children: "ماه اول مشاهده"
					}), COHORT_HEADERS.map((header) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						scope: "col",
						className: "p-2 font-medium text-[var(--loyalty-subtle)]",
						children: header
					}, header))] }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: RETENTION_COHORT_ROWS.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						scope: "row",
						className: "border-t border-[var(--loyalty-line)] p-2 text-start font-medium text-[var(--loyalty-ink)]",
						children: row.month
					}), row.values.map((value, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "border-t border-white p-2 font-bold tabular-nums",
						style: value === null ? void 0 : cohortCellStyle(value),
						children: value === null ? "–" : formatChartPercent(value)
					}, `${row.month}-${COHORT_HEADERS[index]}`))] }, row.month)) })
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "flex items-start gap-2 rounded-md bg-[var(--loyalty-wash)] px-2.5 py-2 text-xs text-[var(--loyalty-subtle)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
				className: "mt-0.5 shrink-0 text-[var(--loyalty-navy)]",
				"aria-hidden": "true"
			}), "سطرهای اخیر به دلیل right-censoring فرصت کامل برای ۹۰ روز ندارند."]
		})]
	});
}
function DataScopeNote() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "flex items-start gap-2 px-1 text-[11px] leading-5 text-[var(--loyalty-subtle)] sm:text-xs",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
			className: "mt-0.5 size-3.5 shrink-0 text-[var(--loyalty-violet)]",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "محدودیت شش‌ماهه داده و محاسبه روی payer_card_key یعنی نتایج انحراف عملکرد نسبت به baseline هستند، نه اثبات اثر علّی." })]
	});
}
function BuyerLoyaltyDashboard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-2.5 text-[var(--loyalty-ink)]",
		style: loyaltyTheme,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-2.5 lg:grid-cols-[minmax(14rem,18rem)_minmax(0,1fr)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuyerLoyaltyHeader, { className: "lg:col-start-2" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InsightActionPanel, { className: "lg:col-start-1 lg:row-span-2 lg:row-start-1" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricStrip, { className: "lg:col-start-2" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-label": "تحلیل نگهداشت و فاصله خرید",
				className: "grid grid-cols-1 gap-2.5 md:grid-cols-2 xl:grid-cols-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RetentionCohortCard, { className: "xl:col-span-5" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SecondPurchaseCard, { className: "xl:col-span-4" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BehaviorDonutCard, { className: "xl:col-span-3" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataScopeNote, {})
		]
	});
}
//#endregion
//#region components/pages/buyer-loyalty-page.tsx
function BuyerLoyaltyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuyerLoyaltyDashboard, {});
}
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Building2 = createLucideIcon("building-2", [
	["path", {
		d: "M10 12h4",
		key: "a56b0p"
	}],
	["path", {
		d: "M10 8h4",
		key: "1sr2af"
	}],
	["path", {
		d: "M14 21v-3a2 2 0 0 0-4 0v3",
		key: "1rgiei"
	}],
	["path", {
		d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",
		key: "secmi2"
	}],
	["path", {
		d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",
		key: "16ra0t"
	}]
]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var RefreshCw = createLucideIcon("refresh-cw", [
	["path", {
		d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
		key: "v9h5vc"
	}],
	["path", {
		d: "M21 3v5h-5",
		key: "1q7to0"
	}],
	["path", {
		d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
		key: "3uifl3"
	}],
	["path", {
		d: "M8 16H3v5",
		key: "1cv678"
	}]
]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ShieldAlert = createLucideIcon("shield-alert", [
	["path", {
		d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
		key: "oel41y"
	}],
	["path", {
		d: "M12 8v4",
		key: "1got3b"
	}],
	["path", {
		d: "M12 16h.01",
		key: "1drbdi"
	}]
]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Terminal = createLucideIcon("terminal", [["path", {
	d: "M12 19h8",
	key: "baeox8"
}], ["path", {
	d: "m4 17 6-6-6-6",
	key: "1yngyt"
}]]);
//#endregion
//#region lib/payment-health-mock-data.ts
var PAYMENT_HEALTH_PERIODS = [
	{
		id: "khordad-1403",
		label: "۱ تا ۳۱ خرداد ۱۴۰۳"
	},
	{
		id: "ordibehesht-1403",
		label: "۱ تا ۳۱ اردیبهشت ۱۴۰۳"
	},
	{
		id: "farvardin-1403",
		label: "۱ تا ۳۱ فروردین ۱۴۰۳"
	}
];
var PAYMENT_HEALTH_MERCHANTS = [
	{
		id: "merchant-a",
		label: "پذیرنده الف"
	},
	{
		id: "merchant-b",
		label: "پذیرنده ب"
	},
	{
		id: "merchant-c",
		label: "پذیرنده ج"
	}
];
/** Classic payment-path funnel from gateway display to verified paid. */
var PAYMENT_FUNNEL = [
	{
		id: "gateway",
		label: "نمایش درگاه",
		count: 1684214,
		rate: 100,
		tone: "violet"
	},
	{
		id: "bank-entry",
		label: "ورود به بانک",
		count: 1222873,
		rate: 72.6,
		tone: "lavender"
	},
	{
		id: "bank-success",
		label: "موفقیت در بانک",
		count: 1045230,
		rate: 62.1,
		tone: "indigo"
	},
	{
		id: "paid",
		label: "پرداخت موفق",
		count: 1025627,
		rate: 60.9,
		tone: "green"
	}
];
var FUNNEL_SUMMARY = {
	postEntrySuccess: 84.2,
	vsPeerPoints: -6.4,
	peerMedian: 90.6,
	headline: "بیشترین ریزش بین نمایش درگاه و ورود به بانک است.",
	takeaway: "مسئله اصلی NoAttempt است؛ نه لزوماً شکست بانکی."
};
var PAYMENT_HEALTH_KPIS = [
	{
		id: "bank-reach",
		label: "نرخ ورود به بانک",
		value: "۷۲٫۶٪",
		caption: "از کل نمایش درگاه",
		tone: "warn",
		icon: "bank"
	},
	{
		id: "post-entry",
		label: "موفقیت پس از ورود",
		value: "۸۴٫۲٪",
		caption: "۶٫۴ واحد کمتر از همتایان",
		tone: "warn",
		icon: "check"
	},
	{
		id: "retry",
		label: "بازیابی با Retry",
		value: "۱۸٫۴٪",
		caption: "از نشست‌های ناموفق اولیه",
		tone: "good",
		icon: "refresh"
	},
	{
		id: "no-attempt",
		label: "No Attempt",
		value: "۲۷٫۴٪",
		caption: "قبل از ورود به بانک",
		tone: "warn",
		icon: "alert"
	},
	{
		id: "verify-issue",
		label: "مشکل Verify",
		value: "۱٫۹٪",
		caption: "پس از موفقیت بانکی",
		tone: "neutral",
		icon: "shield"
	},
	{
		id: "terminal-gap",
		label: "شکاف ترمینال‌ها",
		value: "۹٫۱٪",
		caption: "اختلاف بهترین و بدترین",
		tone: "violet",
		icon: "terminal"
	}
];
var FUNNEL_DROPOFFS = [
	{
		id: "gateway-to-bank",
		from: "نمایش درگاه",
		to: "ورود به بانک",
		lostCount: 461341,
		lostRate: 27.4,
		severity: "high"
	},
	{
		id: "bank-to-success",
		from: "ورود به بانک",
		to: "موفقیت در بانک",
		lostCount: 177643,
		lostRate: 14.5,
		severity: "medium"
	},
	{
		id: "success-to-paid",
		from: "موفقیت در بانک",
		to: "پرداخت موفق",
		lostCount: 19603,
		lostRate: 1.9,
		severity: "low"
	}
];
var AMOUNT_BUCKETS = [
	{
		id: "low",
		label: "زیر ۲۰۰ هزار",
		bankSuccess: 88.4,
		peerMedian: 91.2
	},
	{
		id: "mid",
		label: "۲۰۰ تا ۸۰۰ هزار",
		bankSuccess: 84.1,
		peerMedian: 90.5
	},
	{
		id: "high",
		label: "۸۰۰ هزار تا ۲ میلیون",
		bankSuccess: 79.6,
		peerMedian: 88.8
	},
	{
		id: "xl",
		label: "بالای ۲ میلیون",
		bankSuccess: 74.2,
		peerMedian: 86.1
	}
];
var TERMINAL_ROWS = [
	{
		id: "t1",
		name: "ترمینال اصلی",
		successRate: 86.8,
		noAttempt: 22.1,
		sample: "۷۴۲k"
	},
	{
		id: "t2",
		name: "ترمینال موبایل",
		successRate: 81.4,
		noAttempt: 29.6,
		sample: "۴۱۸k"
	},
	{
		id: "t3",
		name: "ترمینال VIP",
		successRate: 90.5,
		noAttempt: 18.4,
		sample: "۱۲۶k"
	},
	{
		id: "t4",
		name: "ترمینال آزمایشی",
		successRate: 77.7,
		noAttempt: 34.2,
		sample: "۳۸k"
	}
];
var PSP_ANOMALIES = [
	{
		id: "psp-05",
		label: "PSP-05",
		deviation: -8.4,
		note: "افت موفقیت پس از ورود، پس از تعدیل مبلغ",
		tone: "warn"
	},
	{
		id: "issuer-mellat",
		label: "صادرکننده ملت",
		deviation: -3.1,
		note: "انحراف خفیف نسبت به الگوی همین پذیرنده",
		tone: "neutral"
	},
	{
		id: "psp-02",
		label: "PSP-02",
		deviation: 2.6,
		note: "بهتر از انتظار پس از کنترل ترکیب مبلغ",
		tone: "good"
	}
];
var RETRY_STATS = {
	recoveredSessions: 42180,
	recoveredShare: 18.4,
	medianAttempts: 2,
	note: "Retry بیشترین اثر را در بازه مبلغ متوسط دارد."
};
//#endregion
//#region node_modules/@base-ui/utils/useOnFirstRender.mjs
function useOnFirstRender(fn) {
	const ref = import_react.useRef(true);
	if (ref.current) {
		ref.current = false;
		fn();
	}
}
//#endregion
//#region node_modules/@base-ui/utils/isElementDisabled.mjs
function isElementDisabled(element) {
	return element == null || element.hasAttribute("disabled") || element.getAttribute("aria-disabled") === "true";
}
//#endregion
//#region node_modules/@base-ui/react/select/root/SelectRootContext.mjs
var SelectRootContext = /* @__PURE__ */ import_react.createContext(null);
function useSelectRootContext() {
	const context = import_react.useContext(SelectRootContext);
	if (context === null) throw new Error(formatErrorMessage(60));
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/internals/itemEquality.mjs
var defaultItemEquality = (itemValue, selectedValue) => Object.is(itemValue, selectedValue);
function compareItemEquality(itemValue, selectedValue, comparer) {
	if (itemValue == null || selectedValue == null) return Object.is(itemValue, selectedValue);
	return comparer(itemValue, selectedValue);
}
function findItemIndex(itemValues, selectedValue, comparer) {
	if (!itemValues || itemValues.length === 0) return -1;
	return itemValues.findIndex((itemValue) => {
		if (itemValue === void 0) return false;
		return compareItemEquality(itemValue, selectedValue, comparer);
	});
}
function removeItem(selectedValues, itemValue, comparer) {
	return selectedValues.filter((selectedValue) => !compareItemEquality(itemValue, selectedValue, comparer));
}
//#endregion
//#region node_modules/@base-ui/react/internals/serializeValue.mjs
function serializeValue(value) {
	if (value == null) return "";
	if (typeof value === "string") return value;
	try {
		return JSON.stringify(value);
	} catch {
		return String(value);
	}
}
//#endregion
//#region node_modules/@base-ui/react/internals/resolveValueLabel.mjs
function isGroupedItems(items) {
	return items != null && items.length > 0 && typeof items[0] === "object" && items[0] != null && "items" in items[0];
}
/**
* Checks if the items array contains an item with a null value that has a non-null label.
*/
function hasNullItemLabel(items) {
	if (!Array.isArray(items)) return items != null && "null" in items;
	const arrayItems = items;
	if (isGroupedItems(arrayItems)) {
		for (const group of arrayItems) for (const item of group.items) if (item && item.value == null && item.label != null) return true;
		return false;
	}
	for (const item of arrayItems) if (item && item.value == null && item.label != null) return true;
	return false;
}
function stringifyAsLabel(item, itemToStringLabel) {
	if (itemToStringLabel && item != null) return itemToStringLabel(item) ?? "";
	if (item && typeof item === "object") {
		if ("label" in item && item.label != null) return String(item.label);
		if ("value" in item) return String(item.value);
	}
	return serializeValue(item);
}
function stringifyAsValue(item, itemToStringValue) {
	if (itemToStringValue && item != null) return itemToStringValue(item) ?? "";
	if (item && typeof item === "object" && "value" in item && "label" in item) return serializeValue(item.value);
	return serializeValue(item);
}
function resolveSelectedLabel(value, items, itemToStringLabel) {
	function fallback() {
		return stringifyAsLabel(value, itemToStringLabel);
	}
	if (itemToStringLabel && value != null) return itemToStringLabel(value);
	if (value && typeof value === "object" && "label" in value && value.label != null) return value.label;
	if (items && !Array.isArray(items)) return items[value] ?? fallback();
	if (Array.isArray(items)) {
		const arrayItems = items;
		const flatItems = isGroupedItems(arrayItems) ? arrayItems.flatMap((group) => group.items) : arrayItems;
		if (value == null || typeof value !== "object") {
			const match = flatItems.find((item) => item.value === value);
			if (match && match.label != null) return match.label;
			return fallback();
		}
		if ("value" in value) {
			const match = flatItems.find((item) => item && item.value === value.value);
			if (match && match.label != null) return match.label;
		}
	}
	return fallback();
}
function resolveMultipleLabels(values, items, itemToStringLabel) {
	return values.reduce((acc, value, index) => {
		if (index > 0) acc.push(", ");
		acc.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: resolveSelectedLabel(value, items, itemToStringLabel) }, index));
		return acc;
	}, []);
}
//#endregion
//#region node_modules/@base-ui/react/select/store.mjs
var selectors$1 = {
	id: (state) => state.id,
	labelId: (state) => state.labelId,
	modal: (state) => state.modal,
	items: (state) => state.items,
	itemToStringLabel: (state) => state.itemToStringLabel,
	isItemEqualToValue: (state) => state.isItemEqualToValue,
	value: (state) => state.value,
	hasSelectedValue: (state) => {
		const { value, multiple, itemToStringValue } = state;
		if (value == null) return false;
		if (multiple && Array.isArray(value)) return value.length > 0;
		return stringifyAsValue(value, itemToStringValue) !== "";
	},
	hasNullItemLabel: (state, enabled) => {
		return enabled ? hasNullItemLabel(state.items) : false;
	},
	open: (state) => state.open,
	mounted: (state) => state.mounted,
	forceMount: (state) => state.forceMount,
	transitionStatus: (state) => state.transitionStatus,
	openMethod: (state) => state.openMethod,
	activeIndex: (state) => state.activeIndex,
	selectedIndex: (state) => state.selectedIndex,
	isActive: (state, index) => state.activeIndex === index,
	isSelected: (state, itemValue) => {
		const comparer = state.isItemEqualToValue;
		const storeValue = state.value;
		if (state.multiple) return Array.isArray(storeValue) && storeValue.some((selectedItem) => compareItemEquality(itemValue, selectedItem, comparer));
		return compareItemEquality(itemValue, storeValue, comparer);
	},
	isSelectedByFocus: (state, index) => {
		return state.selectedIndex === index;
	},
	popupProps: (state) => state.popupProps,
	triggerProps: (state) => state.triggerProps,
	triggerElement: (state) => state.triggerElement,
	positionerElement: (state) => state.positionerElement,
	listElement: (state) => state.listElement,
	popupSide: (state) => state.popupSide,
	scrollUpArrowVisible: (state) => state.scrollUpArrowVisible,
	scrollDownArrowVisible: (state) => state.scrollDownArrowVisible,
	hasScrollArrows: (state) => state.hasScrollArrows
};
//#endregion
//#region node_modules/@base-ui/react/internals/areArraysEqual.mjs
function areArraysEqual(array1, array2, itemComparer = (a, b) => a === b) {
	return array1.length === array2.length && array1.every((value, index) => itemComparer(value, array2[index]));
}
//#endregion
//#region node_modules/@base-ui/react/internals/clamp.mjs
function clamp(val, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
	return Math.max(min, Math.min(val, max));
}
function getMaxScrollOffset(scrollSize, clientSize) {
	return Math.max(0, scrollSize - clientSize);
}
function normalizeScrollOffset(value, max) {
	if (max <= 0) return 0;
	const clamped = clamp(value, 0, max);
	const startDistance = clamped;
	const endDistance = max - clamped;
	const withinStartTolerance = startDistance <= 1;
	const withinEndTolerance = endDistance <= 1;
	if (withinStartTolerance && withinEndTolerance) return startDistance <= endDistance ? 0 : max;
	if (withinStartTolerance) return 0;
	if (withinEndTolerance) return max;
	return clamped;
}
//#endregion
//#region node_modules/@base-ui/react/select/root/SelectRoot.mjs
/**
* Groups all parts of the select.
* Doesn't render its own HTML element.
*
* Documentation: [Base UI Select](https://base-ui.com/react/components/select)
*/
function SelectRoot(props) {
	const { id, value: valueProp, defaultValue = null, onValueChange, open: openProp, defaultOpen = false, onOpenChange, name: nameProp, form, autoComplete, disabled: disabledProp = false, readOnly = false, required = false, modal = true, actionsRef, inputRef, onOpenChangeComplete, items, multiple = false, itemToStringLabel, itemToStringValue, isItemEqualToValue = defaultItemEquality, highlightItemOnHover = true, children } = props;
	const { clearErrors } = useFormContext();
	const { setDirty, setTouched, setFocused, validityData, setFilled, name: fieldName, disabled: fieldDisabled, validation, validationMode } = useFieldRootContext();
	const generatedId = useLabelableId({ id });
	const disabled = fieldDisabled || disabledProp;
	const name = fieldName ?? nameProp;
	const [value, setValueUnwrapped] = useControlled({
		controlled: valueProp,
		default: multiple ? defaultValue ?? EMPTY_ARRAY : defaultValue,
		name: "Select",
		state: "value"
	});
	const [open, setOpenUnwrapped] = useControlled({
		controlled: openProp,
		default: defaultOpen,
		name: "Select",
		state: "open"
	});
	const listRef = import_react.useRef([]);
	const labelsRef = import_react.useRef([]);
	const popupRef = import_react.useRef(null);
	const scrollHandlerRef = import_react.useRef(null);
	const scrollArrowsMountedCountRef = import_react.useRef(0);
	const valueRef = import_react.useRef(null);
	const valuesRef = import_react.useRef([]);
	const typingRef = import_react.useRef(false);
	const firstItemTextRef = import_react.useRef(null);
	const selectedItemTextRef = import_react.useRef(null);
	const selectionRef = import_react.useRef({
		allowSelectedMouseUp: false,
		allowUnselectedMouseUp: false,
		dragY: 0
	});
	const alignItemWithTriggerActiveRef = import_react.useRef(false);
	const { mounted, setMounted, transitionStatus } = useTransitionStatus(open);
	const { openMethod, triggerProps: interactionTypeProps } = useOpenInteractionType(open);
	const store = useRefWithInit(() => new ReactStore({
		id: generatedId,
		labelId: void 0,
		modal,
		multiple,
		itemToStringLabel,
		itemToStringValue,
		isItemEqualToValue,
		value,
		open,
		mounted,
		transitionStatus,
		items,
		forceMount: false,
		openMethod: null,
		activeIndex: null,
		selectedIndex: null,
		popupProps: {},
		triggerProps: {},
		triggerElement: null,
		positionerElement: null,
		listElement: null,
		popupSide: null,
		scrollUpArrowVisible: false,
		scrollDownArrowVisible: false,
		hasScrollArrows: false
	})).current;
	const activeIndex = useStore(store, selectors$1.activeIndex);
	const selectedIndex = useStore(store, selectors$1.selectedIndex);
	const triggerElement = useStore(store, selectors$1.triggerElement);
	const positionerElement = useStore(store, selectors$1.positionerElement);
	const previousOpenMethod = usePreviousValue(openMethod);
	const renderedOpenMethod = openMethod ?? previousOpenMethod;
	const serializedValue = import_react.useMemo(() => {
		if (multiple) return "";
		return stringifyAsValue(value, itemToStringValue);
	}, [
		multiple,
		value,
		itemToStringValue
	]);
	const fieldStringValue = import_react.useMemo(() => {
		if (multiple && Array.isArray(value)) return value.map((currentValue) => stringifyAsValue(currentValue, itemToStringValue));
		return stringifyAsValue(value, itemToStringValue);
	}, [
		multiple,
		value,
		itemToStringValue
	]);
	useRegisterFieldControl(useValueAsRef(triggerElement), generatedId, value, useStableCallback(() => fieldStringValue), !disabled, nameProp);
	const initialValueRef = import_react.useRef(value);
	const hasSelectedValue = multiple ? Array.isArray(value) && value.length > 0 : value != null && serializedValue !== "";
	useIsoLayoutEffect(() => {
		setFilled(hasSelectedValue);
	}, [hasSelectedValue, setFilled]);
	useIsoLayoutEffect(function syncSelectedIndex() {
		let target = value;
		let empty = false;
		if (multiple) {
			const currentValue = Array.isArray(value) ? value : [];
			empty = currentValue.length === 0;
			target = currentValue[currentValue.length - 1];
		}
		const index = empty ? -1 : findItemIndex(valuesRef.current, target, isItemEqualToValue);
		const nextIndex = index === -1 ? null : index;
		if (nextIndex === null) selectedItemTextRef.current = null;
		if (open) return;
		store.set("selectedIndex", nextIndex);
	}, [
		multiple,
		open,
		value,
		isItemEqualToValue,
		store
	]);
	function isSelectedValueDirty(currentValue) {
		const initialValue = validityData.initialValue;
		if (Array.isArray(currentValue) && Array.isArray(initialValue)) return !areArraysEqual(currentValue, initialValue, (itemValue, initialItemValue) => compareItemEquality(itemValue, initialItemValue, isItemEqualToValue));
		return currentValue !== initialValue;
	}
	useValueChanged(value, () => {
		clearErrors(name);
		setDirty(isSelectedValueDirty(value));
		validation.change(value);
	});
	const setOpen = useStableCallback((nextOpen, eventDetails) => {
		onOpenChange?.(nextOpen, eventDetails);
		if (eventDetails.isCanceled) return;
		setOpenUnwrapped(nextOpen);
		if (!nextOpen && (eventDetails.reason === "focus-out" || eventDetails.reason === "outside-press")) {
			setTouched(true);
			setFocused(false);
			if (validationMode === "onBlur") validation.commit(value);
		}
	});
	const handleUnmount = useStableCallback(() => {
		setMounted(false);
		store.update({
			activeIndex: null,
			openMethod: null,
			scrollUpArrowVisible: false,
			scrollDownArrowVisible: false
		});
		onOpenChangeComplete?.(false);
	});
	useOpenChangeComplete({
		enabled: !actionsRef,
		open,
		ref: popupRef,
		onComplete() {
			if (!open) handleUnmount();
		}
	});
	import_react.useImperativeHandle(actionsRef, () => ({ unmount: handleUnmount }), [handleUnmount]);
	const setValue = useStableCallback((nextValue, eventDetails) => {
		onValueChange?.(nextValue, eventDetails);
		if (eventDetails.isCanceled) return;
		setValueUnwrapped(nextValue);
	});
	const handleScrollArrowVisibility = useStableCallback((scroller) => {
		const maxScrollTop = getMaxScrollOffset(scroller.scrollHeight, scroller.clientHeight);
		const scrollTop = normalizeScrollOffset(scroller.scrollTop, maxScrollTop);
		const shouldShowUp = scrollTop > 0;
		const shouldShowDown = scrollTop < maxScrollTop;
		store.set("scrollUpArrowVisible", shouldShowUp);
		store.set("scrollDownArrowVisible", shouldShowDown);
	});
	const floatingContext = useFloatingRootContext({
		open,
		onOpenChange: setOpen,
		elements: {
			reference: triggerElement,
			floating: positionerElement
		}
	});
	const click = useClick(floatingContext, {
		enabled: !readOnly && !disabled,
		event: "mousedown"
	});
	const dismiss = useDismiss(floatingContext);
	const listNavigation = useListNavigation(floatingContext, {
		enabled: !readOnly && !disabled,
		listRef,
		activeIndex,
		selectedIndex,
		disabledIndices: EMPTY_ARRAY,
		onNavigate(nextActiveIndex) {
			if (nextActiveIndex === null && !open) return;
			store.set("activeIndex", nextActiveIndex);
		},
		focusItemOnHover: highlightItemOnHover
	});
	const typeahead = useTypeahead(floatingContext, {
		enabled: !readOnly && !disabled && (open || !multiple),
		listRef: labelsRef,
		activeIndex,
		selectedIndex,
		disabledIndices: (index) => isElementDisabled(listRef.current[index]),
		onMatch(index) {
			if (open) store.set("activeIndex", index);
			else setValue(valuesRef.current[index], createChangeEventDetails(none));
		},
		onTyping(typing) {
			typingRef.current = typing;
		}
	});
	const mergedTriggerProps = import_react.useMemo(() => mergeProps(typeahead.reference, listNavigation.reference, dismiss.reference, click.reference, interactionTypeProps), [
		click.reference,
		typeahead.reference,
		listNavigation.reference,
		dismiss.reference,
		interactionTypeProps
	]);
	const popupProps = import_react.useMemo(() => mergeProps(FOCUSABLE_POPUP_PROPS, typeahead.floating, listNavigation.floating, dismiss.floating), [
		typeahead.floating,
		listNavigation.floating,
		dismiss.floating
	]);
	const itemProps = listNavigation.item ?? EMPTY_OBJECT;
	useOnFirstRender(() => {
		store.update({
			popupProps,
			triggerProps: mergedTriggerProps
		});
	});
	store.useSyncedValues({
		id: generatedId,
		modal,
		multiple,
		value,
		open,
		mounted,
		transitionStatus,
		popupProps,
		triggerProps: mergedTriggerProps,
		items,
		itemToStringLabel,
		itemToStringValue,
		isItemEqualToValue,
		openMethod: renderedOpenMethod
	});
	const contextValue = import_react.useMemo(() => ({
		store,
		floatingContext,
		required,
		disabled,
		readOnly,
		multiple,
		highlightItemOnHover,
		setValue,
		setOpen,
		listRef,
		popupRef,
		scrollHandlerRef,
		handleScrollArrowVisibility,
		scrollArrowsMountedCountRef,
		itemProps,
		valueRef,
		valuesRef,
		labelsRef,
		typingRef,
		selectionRef,
		firstItemTextRef,
		selectedItemTextRef,
		validation,
		onOpenChangeComplete,
		alignItemWithTriggerActiveRef,
		initialValueRef
	}), [
		store,
		floatingContext,
		required,
		disabled,
		readOnly,
		multiple,
		highlightItemOnHover,
		setValue,
		setOpen,
		itemProps,
		validation,
		onOpenChangeComplete,
		handleScrollArrowVisibility
	]);
	const ref = useMergedRefs(inputRef, validation.inputRef);
	const hiddenInputName = multiple ? void 0 : name;
	const hiddenInputs = import_react.useMemo(() => {
		if (!multiple || !Array.isArray(value) || !name) return null;
		return value.map((v) => {
			const currentSerializedValue = stringifyAsValue(v, itemToStringValue);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "hidden",
				form,
				name,
				value: currentSerializedValue,
				disabled
			}, currentSerializedValue);
		});
	}, [
		multiple,
		value,
		form,
		name,
		itemToStringValue,
		disabled
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectRootContext.Provider, {
		value: contextValue,
		children: [
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				...validation.getValidationProps(disabled, {
					onFocus() {
						store.state.triggerElement?.focus({ focusVisible: true });
					},
					onChange(event) {
						if (event.nativeEvent.defaultPrevented || disabled || readOnly) return;
						const nextValue = event.currentTarget.value;
						const details = createChangeEventDetails(none, event.nativeEvent);
						function handleChange() {
							if (multiple) return;
							const nextValueLower = nextValue.toLowerCase();
							let matchingIndex = valuesRef.current.findIndex((candidate) => stringifyAsValue(candidate, itemToStringValue).toLowerCase() === nextValueLower || stringifyAsLabel(candidate, itemToStringLabel).toLowerCase() === nextValueLower);
							if (matchingIndex === -1) matchingIndex = valuesRef.current.findIndex((_, index) => {
								const renderedLabel = labelsRef.current[index];
								return renderedLabel != null && renderedLabel.toLowerCase() === nextValueLower;
							});
							const matchingValue = valuesRef.current[matchingIndex];
							if (matchingValue != null) setValue(matchingValue, details);
						}
						store.set("forceMount", true);
						queueMicrotask(handleChange);
					}
				}),
				id: generatedId && hiddenInputName == null ? `${generatedId}-hidden-input` : void 0,
				form,
				name: hiddenInputName,
				autoComplete,
				value: serializedValue,
				disabled,
				required: required && !(multiple && hasSelectedValue),
				readOnly,
				ref,
				style: name ? visuallyHiddenInput : visuallyHidden,
				tabIndex: -1,
				"aria-hidden": true,
				suppressHydrationWarning: true
			}),
			hiddenInputs
		]
	});
}
//#endregion
//#region node_modules/@base-ui/react/utils/resolveAriaLabelledBy.mjs
function resolveAriaLabelledBy(fieldLabelId, localLabelId) {
	return fieldLabelId ?? localLabelId;
}
//#endregion
//#region node_modules/@base-ui/react/utils/getPseudoElementBounds.mjs
var BOUNDARY_OFFSET = 5;
/**
* Determines if a mouse event occurred within the bounds of an element
* (including its pseudo-elements), with a small tolerance for pointer drift.
*/
function isMouseWithinBounds(event, element) {
	const bounds = getPseudoElementBounds(element);
	return event.clientX >= bounds.left - BOUNDARY_OFFSET && event.clientX <= bounds.right + BOUNDARY_OFFSET && event.clientY >= bounds.top - BOUNDARY_OFFSET && event.clientY <= bounds.bottom + BOUNDARY_OFFSET;
}
function getPseudoElementBounds(element) {
	const elementRect = element.getBoundingClientRect();
	const win = getWindow(element);
	if (jsdom) return elementRect;
	const beforeStyles = win.getComputedStyle(element, "::before");
	const afterStyles = win.getComputedStyle(element, "::after");
	if (!(beforeStyles.content !== "none" || afterStyles.content !== "none")) return elementRect;
	const beforeWidth = parseFloat(beforeStyles.width) || 0;
	const beforeHeight = parseFloat(beforeStyles.height) || 0;
	const afterWidth = parseFloat(afterStyles.width) || 0;
	const afterHeight = parseFloat(afterStyles.height) || 0;
	const totalWidth = Math.max(elementRect.width, beforeWidth, afterWidth);
	const totalHeight = Math.max(elementRect.height, beforeHeight, afterHeight);
	const widthDiff = totalWidth - elementRect.width;
	const heightDiff = totalHeight - elementRect.height;
	return {
		left: elementRect.left - widthDiff / 2,
		right: elementRect.right + widthDiff / 2,
		top: elementRect.top - heightDiff / 2,
		bottom: elementRect.bottom + heightDiff / 2
	};
}
//#endregion
//#region node_modules/@base-ui/react/select/trigger/SelectTrigger.mjs
var SELECTED_DELAY = 400;
var stateAttributesMapping$2 = {
	...pressableTriggerOpenStateMapping,
	...fieldValidityMapping,
	popupSide: (side) => side ? { "data-popup-side": side } : null,
	value: () => null
};
/**
* A button that opens the select popup.
* Renders a `<button>` element.
*
* Documentation: [Base UI Select](https://base-ui.com/react/components/select)
*/
var SelectTrigger$1 = /* @__PURE__ */ import_react.forwardRef(function SelectTrigger(componentProps, forwardedRef) {
	const { render, className, id: idProp, disabled: disabledProp = false, nativeButton = true, style, ...elementProps } = componentProps;
	const { setTouched, setFocused, validationMode, state: fieldState, disabled: fieldDisabled } = useFieldRootContext();
	const { labelId: fieldLabelId } = useLabelableContext();
	const { store, setOpen, selectionRef, validation, readOnly, required, alignItemWithTriggerActiveRef, disabled: selectDisabled } = useSelectRootContext();
	const disabled = fieldDisabled || selectDisabled || disabledProp;
	const open = useStore(store, selectors$1.open);
	const mounted = useStore(store, selectors$1.mounted);
	const value = useStore(store, selectors$1.value);
	const triggerProps = useStore(store, selectors$1.triggerProps);
	const positionerElement = useStore(store, selectors$1.positionerElement);
	const listElement = useStore(store, selectors$1.listElement);
	const popupSideValue = useStore(store, selectors$1.popupSide);
	const rootId = useStore(store, selectors$1.id);
	const selectLabelId = useStore(store, selectors$1.labelId);
	const hasSelectedValue = useStore(store, selectors$1.hasSelectedValue);
	const popupSide = mounted && positionerElement ? popupSideValue : null;
	const id = idProp ?? rootId;
	const ariaLabelledBy = resolveAriaLabelledBy(fieldLabelId, selectLabelId);
	useLabelableId({ id });
	const positionerRef = useValueAsRef(positionerElement);
	const triggerRef = import_react.useRef(null);
	const { getButtonProps, buttonRef } = useButton({
		disabled,
		native: nativeButton
	});
	const setTriggerElement = store.useStateSetter("triggerElement");
	const timeoutFocus = useTimeout();
	const timeoutMouseDown = useTimeout();
	const selectedDelayTimeout = useTimeout();
	import_react.useEffect(() => {
		if (open) {
			selectedDelayTimeout.start(SELECTED_DELAY, () => {
				selectionRef.current.allowUnselectedMouseUp = true;
				selectionRef.current.allowSelectedMouseUp = true;
			});
			return () => {
				selectedDelayTimeout.clear();
			};
		}
		selectionRef.current = {
			allowSelectedMouseUp: false,
			allowUnselectedMouseUp: false,
			dragY: 0
		};
		timeoutMouseDown.clear();
	}, [
		open,
		selectionRef,
		timeoutMouseDown,
		selectedDelayTimeout
	]);
	const mergedProps = mergeProps(triggerProps, {
		id,
		role: "combobox",
		"aria-expanded": open,
		"aria-haspopup": "listbox",
		"aria-controls": open ? listElement?.id ?? getFloatingFocusElement(positionerElement)?.id : void 0,
		"aria-labelledby": ariaLabelledBy,
		"aria-readonly": readOnly || void 0,
		"aria-required": required || void 0,
		tabIndex: disabled ? -1 : 0,
		onFocus(event) {
			setFocused(true);
			if (open && alignItemWithTriggerActiveRef.current) setOpen(false, createChangeEventDetails(none, event.nativeEvent));
			timeoutFocus.start(0, () => {
				store.set("forceMount", true);
			});
		},
		onBlur(event) {
			if (contains(positionerElement, event.relatedTarget)) return;
			setTouched(true);
			setFocused(false);
			if (validationMode === "onBlur") validation.commit(value);
		},
		onMouseDown(event) {
			if (open) return;
			const doc = ownerDocument(event.currentTarget);
			function handleMouseUp(mouseEvent) {
				if (!triggerRef.current) return;
				const mouseUpTarget = mouseEvent.target;
				if (contains(triggerRef.current, mouseUpTarget) || contains(positionerRef.current, mouseUpTarget)) return;
				if (isMouseWithinBounds(mouseEvent, triggerRef.current)) return;
				setOpen(false, createChangeEventDetails(cancelOpen, mouseEvent));
			}
			timeoutMouseDown.start(0, () => {
				doc.addEventListener("mouseup", handleMouseUp, { once: true });
			});
		}
	}, elementProps, getButtonProps);
	const props = validation.getValidationProps(disabled, mergedProps);
	props.role = "combobox";
	const state = {
		...fieldState,
		open,
		disabled,
		value,
		readOnly,
		popupSide,
		placeholder: !hasSelectedValue
	};
	return useRenderElement("button", componentProps, {
		ref: [
			forwardedRef,
			triggerRef,
			buttonRef,
			setTriggerElement
		],
		state,
		stateAttributesMapping: stateAttributesMapping$2,
		props
	});
});
//#endregion
//#region node_modules/@base-ui/react/select/value/SelectValue.mjs
var stateAttributesMapping$1 = { value: () => null };
/**
* A text label of the currently selected item.
* Renders a `<span>` element.
*
* Documentation: [Base UI Select](https://base-ui.com/react/components/select)
*/
var SelectValue$1 = /* @__PURE__ */ import_react.forwardRef(function SelectValue(componentProps, forwardedRef) {
	const { className, render, children: childrenProp, placeholder, style, ...elementProps } = componentProps;
	const { store, valueRef } = useSelectRootContext();
	const value = useStore(store, selectors$1.value);
	const items = useStore(store, selectors$1.items);
	const itemToStringLabel = useStore(store, selectors$1.itemToStringLabel);
	const hasSelectedValue = useStore(store, selectors$1.hasSelectedValue);
	const shouldCheckNullItemLabel = !hasSelectedValue && placeholder != null && childrenProp == null;
	const hasNullLabel = useStore(store, selectors$1.hasNullItemLabel, shouldCheckNullItemLabel);
	const state = {
		value,
		placeholder: !hasSelectedValue
	};
	let children = null;
	if (typeof childrenProp === "function") children = childrenProp(value);
	else if (childrenProp != null) children = childrenProp;
	else if (shouldCheckNullItemLabel && !hasNullLabel) children = placeholder;
	else if (Array.isArray(value)) children = resolveMultipleLabels(value, items, itemToStringLabel);
	else children = resolveSelectedLabel(value, items, itemToStringLabel);
	return useRenderElement("span", componentProps, {
		state,
		ref: [forwardedRef, valueRef],
		props: [{ children }, elementProps],
		stateAttributesMapping: stateAttributesMapping$1
	});
});
//#endregion
//#region node_modules/@base-ui/react/select/icon/SelectIcon.mjs
/**
* An icon that indicates that the trigger button opens a select popup.
* Renders a `<span>` element.
*
* Documentation: [Base UI Select](https://base-ui.com/react/components/select)
*/
var SelectIcon = /* @__PURE__ */ import_react.forwardRef(function SelectIcon(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const { store } = useSelectRootContext();
	return useRenderElement("span", componentProps, {
		state: { open: useStore(store, selectors$1.open) },
		ref: forwardedRef,
		props: [{
			"aria-hidden": true,
			children: "▼"
		}, elementProps],
		stateAttributesMapping: triggerOpenStateMapping
	});
});
//#endregion
//#region node_modules/@base-ui/react/select/portal/SelectPortal.mjs
/**
* A portal element that moves the popup to a different part of the DOM.
* By default, the portal element is appended to `<body>`.
* Renders a `<div>` element.
*
* Documentation: [Base UI Select](https://base-ui.com/react/components/select)
*/
var SelectPortal = /* @__PURE__ */ import_react.forwardRef(function SelectPortal(portalProps, forwardedRef) {
	const { store } = useSelectRootContext();
	const mounted = useStore(store, selectors$1.mounted);
	const forceMount = useStore(store, selectors$1.forceMount);
	if (!(mounted || forceMount)) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingPortal, {
		ref: forwardedRef,
		...portalProps
	});
});
//#endregion
//#region node_modules/@base-ui/react/internals/composite/list/CompositeListContext.mjs
var CompositeListContext = /* @__PURE__ */ import_react.createContext({
	register: () => {},
	unregister: () => {},
	subscribeMapChange: () => () => {},
	nextIndexRef: { current: 0 }
});
function useCompositeListContext() {
	return import_react.useContext(CompositeListContext);
}
//#endregion
//#region node_modules/@base-ui/react/internals/composite/list/CompositeList.mjs
/**
* Provides context for a list of items in a composite component.
*/
function CompositeList(props) {
	const { children, elementsRef, labelsRef, onMapChange: onMapChangeProp } = props;
	const onMapChange = useStableCallback(onMapChangeProp);
	const [, setMapTick] = import_react.useState(false);
	const listeners = useRefWithInit(createListeners).current;
	const map = useRefWithInit(createMap).current;
	const nextIndexRef = import_react.useRef(0);
	const isDirtyRef = import_react.useRef(true);
	const itemsRef = import_react.useRef([]);
	const mutationObserverRef = import_react.useRef(null);
	const scheduleMapUpdate = useStableCallback(() => {
		if (isDirtyRef.current) return;
		isDirtyRef.current = true;
		setMapTick((tick) => !tick);
	});
	const register = useStableCallback((node, registration) => {
		map.set(node, registration);
		scheduleMapUpdate();
	});
	const unregister = useStableCallback((node) => {
		map.delete(node);
		scheduleMapUpdate();
	});
	const syncRefs = useStableCallback((items) => {
		const nextMap = /* @__PURE__ */ new Map();
		elementsRef.current.length = 0;
		if (labelsRef) labelsRef.current.length = 0;
		items.forEach((item) => {
			nextMap.set(item.element, {
				...item.registration.metadata ?? {},
				index: item.index
			});
			elementsRef.current[item.index] = item.element;
			if (labelsRef) labelsRef.current[item.index] = item.registration.label !== void 0 ? item.registration.label : item.registration.textRef?.current?.textContent ?? item.element.textContent;
		});
		nextIndexRef.current = elementsRef.current.length;
		return nextMap;
	});
	function observe(sortedNodes) {
		mutationObserverRef.current?.disconnect();
		mutationObserverRef.current = null;
		if (typeof MutationObserver !== "function" || sortedNodes.length < 2) return;
		const mutationObserver = new MutationObserver((entries) => {
			if (!hasMovedNode(entries)) return;
			let previousConnectedNode = null;
			for (const node of sortedNodes) {
				if (!node.isConnected) continue;
				if (previousConnectedNode && sortByDocumentPosition(previousConnectedNode, node) > 0) {
					mutationObserver.disconnect();
					scheduleMapUpdate();
					return;
				}
				previousConnectedNode = node;
			}
		});
		mutationObserverRef.current = mutationObserver;
		const roots = /* @__PURE__ */ new Set();
		for (let i = 1; i < sortedNodes.length; i += 1) {
			const root = getCommonAncestor(sortedNodes[i - 1], sortedNodes[i]);
			if (root) roots.add(root);
		}
		roots.forEach((root) => mutationObserver.observe(root, { childList: true }));
	}
	const flush = useStableCallback(() => {
		const [items, automaticNodes] = getCompositeListSnapshot(map);
		const nextMap = syncRefs(items);
		observe(automaticNodes);
		itemsRef.current = items;
		isDirtyRef.current = false;
		listeners.forEach((listener) => listener(nextMap));
		onMapChange(nextMap);
	});
	useIsoLayoutEffect(() => {
		if (!isDirtyRef.current) syncRefs(itemsRef.current);
		return () => {
			elementsRef.current = [];
			if (labelsRef) labelsRef.current = [];
		};
	}, [
		elementsRef,
		labelsRef,
		syncRefs
	]);
	useIsoLayoutEffect(() => {
		if (isDirtyRef.current) flush();
	});
	useIsoLayoutEffect(() => {
		return () => {
			mutationObserverRef.current?.disconnect();
			isDirtyRef.current = true;
		};
	}, []);
	const subscribeMapChange = useStableCallback((fn) => {
		listeners.add(fn);
		return () => {
			listeners.delete(fn);
		};
	});
	const contextValue = import_react.useMemo(() => ({
		register,
		unregister,
		subscribeMapChange,
		nextIndexRef
	}), [
		register,
		unregister,
		subscribeMapChange,
		nextIndexRef
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompositeListContext.Provider, {
		value: contextValue,
		children
	});
}
function createMap() {
	return /* @__PURE__ */ new Map();
}
function createListeners() {
	return /* @__PURE__ */ new Set();
}
function getCompositeListSnapshot(map) {
	const reservedIndices = /* @__PURE__ */ new Set();
	const items = [];
	const automaticItems = [];
	map.forEach((registration, node) => {
		if (!node.isConnected) return;
		const index = registration.index;
		const item = {
			index: index ?? -1,
			element: node,
			registration
		};
		if (index === null) automaticItems.push(item);
		else if (index >= 0) {
			reservedIndices.add(index);
			items.push(item);
		}
	});
	let nextAutomaticIndex = 0;
	automaticItems.sort((a, b) => sortByDocumentPosition(a.element, b.element));
	automaticItems.forEach((item) => {
		while (reservedIndices.has(nextAutomaticIndex)) nextAutomaticIndex += 1;
		item.index = nextAutomaticIndex;
		items.push(item);
		nextAutomaticIndex += 1;
	});
	if (reservedIndices.size > 0) items.sort((a, b) => a.index - b.index);
	return [items, automaticItems.map((item) => item.element)];
}
function getCommonAncestor(firstNode, lastNode) {
	let ancestor = firstNode.parentElement;
	while (ancestor && !ancestor.contains(lastNode)) ancestor = ancestor.parentElement;
	return ancestor;
}
function hasMovedNode(entries) {
	for (const entry of entries) for (let i = 0; i < entry.removedNodes.length; i += 1) if (entry.removedNodes[i].isConnected) return true;
	return false;
}
function sortByDocumentPosition(a, b) {
	return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
}
//#endregion
//#region node_modules/@base-ui/react/select/positioner/SelectPositionerContext.mjs
var SelectPositionerContext = /* @__PURE__ */ import_react.createContext(void 0);
function useSelectPositionerContext() {
	const context = import_react.useContext(SelectPositionerContext);
	if (!context) throw new Error(formatErrorMessage(59));
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/select/popup/utils.mjs
function clearStyles(element, originalStyles) {
	if (element) Object.assign(element.style, originalStyles);
}
var LIST_FUNCTIONAL_STYLES = {
	position: "relative",
	maxHeight: "100%",
	overflowX: "hidden",
	overflowY: "auto"
};
//#endregion
//#region node_modules/@base-ui/react/utils/useAnchoredPopupScrollLock.mjs
var VIEWPORT_WIDTH_TOLERANCE_PX = 20;
/**
* Manages scroll lock for anchored popups. For non-touch opens, scroll lock is applied when
* enabled. For touch opens, scroll lock is applied only when the positioner width is effectively
* viewport-sized.
*/
function useAnchoredPopupScrollLock(enabled, touchOpen, positionerElement, referenceElement) {
	const [touchOpenShouldLockScroll, setTouchOpenShouldLockScroll] = import_react.useState(false);
	useIsoLayoutEffect(() => {
		if (!enabled || !touchOpen || positionerElement == null) {
			setTouchOpenShouldLockScroll(false);
			return;
		}
		const viewportWidth = ownerDocument(positionerElement).documentElement.clientWidth;
		const popupWidth = positionerElement.offsetWidth;
		setTouchOpenShouldLockScroll(viewportWidth > 0 && popupWidth > 0 && popupWidth >= viewportWidth - VIEWPORT_WIDTH_TOLERANCE_PX);
	}, [
		enabled,
		touchOpen,
		positionerElement
	]);
	useScrollLock(enabled && (!touchOpen || touchOpenShouldLockScroll), referenceElement);
}
//#endregion
//#region node_modules/@base-ui/react/select/positioner/SelectPositioner.mjs
var FIXED = { position: "fixed" };
/**
* Positions the select popup.
* Renders a `<div>` element.
*
* Documentation: [Base UI Select](https://base-ui.com/react/components/select)
*/
var SelectPositioner = /* @__PURE__ */ import_react.forwardRef(function SelectPositioner(componentProps, forwardedRef) {
	const { anchor, className, render, positionMethod, side, align, sideOffset, alignOffset, collisionBoundary = "clipping-ancestors", collisionPadding, arrowPadding, sticky, disableAnchorTracking, alignItemWithTrigger = true, collisionAvoidance = DROPDOWN_COLLISION_AVOIDANCE, style, ...elementProps } = componentProps;
	const { store, listRef, labelsRef, alignItemWithTriggerActiveRef, selectedItemTextRef, valuesRef, initialValueRef, popupRef, setValue, floatingContext: floatingRootContext } = useSelectRootContext();
	const open = useStore(store, selectors$1.open);
	const mounted = useStore(store, selectors$1.mounted);
	const modal = useStore(store, selectors$1.modal);
	const value = useStore(store, selectors$1.value);
	const openMethod = useStore(store, selectors$1.openMethod);
	const positionerElement = useStore(store, selectors$1.positionerElement);
	const triggerElement = useStore(store, selectors$1.triggerElement);
	const isItemEqualToValue = useStore(store, selectors$1.isItemEqualToValue);
	const transitionStatus = useStore(store, selectors$1.transitionStatus);
	const scrollUpArrowRef = import_react.useRef(null);
	const scrollDownArrowRef = import_react.useRef(null);
	const [controlledAlignItemWithTrigger, setControlledAlignItemWithTrigger] = import_react.useState(alignItemWithTrigger);
	const alignItemWithTriggerActive = mounted && controlledAlignItemWithTrigger && openMethod !== "touch";
	if (!mounted && controlledAlignItemWithTrigger !== alignItemWithTrigger) setControlledAlignItemWithTrigger(alignItemWithTrigger);
	import_react.useImperativeHandle(alignItemWithTriggerActiveRef, () => alignItemWithTriggerActive);
	useAnchoredPopupScrollLock((alignItemWithTriggerActive || modal) && open, openMethod === "touch", positionerElement, triggerElement);
	const positioning = useAnchorPositioning({
		anchor,
		floatingRootContext,
		positionMethod,
		mounted,
		side,
		sideOffset,
		align,
		alignOffset,
		arrowPadding,
		collisionBoundary,
		collisionPadding,
		sticky,
		disableAnchorTracking: disableAnchorTracking ?? alignItemWithTriggerActive,
		collisionAvoidance,
		keepMounted: true
	});
	const renderedSide = alignItemWithTriggerActive ? "none" : positioning.side;
	const positionerStyles = alignItemWithTriggerActive ? FIXED : positioning.positionerStyles;
	const state = {
		open,
		side: renderedSide,
		align: positioning.align,
		anchorHidden: positioning.anchorHidden
	};
	useIsoLayoutEffect(() => {
		store.set("popupSide", positioning.side);
	}, [store, positioning.side]);
	const element = usePositioner(componentProps, state, {
		styles: positionerStyles,
		transitionStatus,
		props: elementProps,
		refs: [forwardedRef, store.useStateSetter("positionerElement")],
		hidden: !mounted,
		inert: !open
	});
	const prevMapSizeRef = import_react.useRef(0);
	const onMapChange = useStableCallback((map) => {
		if (valuesRef.current.length === 0) return;
		const prevSize = prevMapSizeRef.current;
		prevMapSizeRef.current = map.size;
		if (map.size === prevSize) return;
		const eventDetails = createChangeEventDetails(none);
		if (prevSize !== 0 && !store.state.multiple && value !== null) {
			if (findItemIndex(valuesRef.current, value, isItemEqualToValue) === -1) {
				const initialSelectedValue = initialValueRef.current;
				const nextValue = initialSelectedValue != null && findItemIndex(valuesRef.current, initialSelectedValue, isItemEqualToValue) !== -1 ? initialSelectedValue : null;
				setValue(nextValue, eventDetails);
				if (nextValue === null) {
					store.set("selectedIndex", null);
					selectedItemTextRef.current = null;
				}
			}
		}
		if (prevSize !== 0 && store.state.multiple && Array.isArray(value)) {
			const nextValue = value.filter((selectedItemValue) => findItemIndex(valuesRef.current, selectedItemValue, isItemEqualToValue) !== -1);
			if (nextValue.length !== value.length) {
				setValue(nextValue, eventDetails);
				if (nextValue.length === 0) {
					store.set("selectedIndex", null);
					selectedItemTextRef.current = null;
				}
			}
		}
		if (open && alignItemWithTriggerActive) {
			store.update({
				scrollUpArrowVisible: false,
				scrollDownArrowVisible: false
			});
			const stylesToClear = { height: "" };
			clearStyles(positionerElement, stylesToClear);
			clearStyles(popupRef.current, stylesToClear);
		}
	});
	const contextValue = import_react.useMemo(() => ({
		...positioning,
		side: renderedSide,
		alignItemWithTriggerActive,
		setControlledAlignItemWithTrigger,
		scrollUpArrowRef,
		scrollDownArrowRef
	}), [
		positioning,
		renderedSide,
		alignItemWithTriggerActive,
		setControlledAlignItemWithTrigger
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompositeList, {
		elementsRef: listRef,
		labelsRef,
		onMapChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectPositionerContext.Provider, {
			value: contextValue,
			children: [mounted && modal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InternalBackdrop, {
				inert: inertValue(!open),
				cutout: triggerElement
			}), element]
		})
	});
});
//#endregion
//#region node_modules/@base-ui/react/utils/styles.mjs
var DISABLE_SCROLLBAR_CLASS_NAME = "base-ui-disable-scrollbar";
var styleDisableScrollbar = {
	className: DISABLE_SCROLLBAR_CLASS_NAME,
	getElement(nonce) {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", {
			nonce,
			href: DISABLE_SCROLLBAR_CLASS_NAME,
			precedence: "base-ui:low",
			children: `.${DISABLE_SCROLLBAR_CLASS_NAME}{scrollbar-width:none}.${DISABLE_SCROLLBAR_CLASS_NAME}::-webkit-scrollbar{display:none}`
		});
	}
};
//#endregion
//#region node_modules/@base-ui/react/toolbar/root/ToolbarRootContext.mjs
var ToolbarRootContext = /* @__PURE__ */ import_react.createContext(void 0);
function useToolbarRootContext(optional) {
	const context = import_react.useContext(ToolbarRootContext);
	if (context === void 0 && !optional) throw new Error(formatErrorMessage(69));
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/internals/csp-context/CSPContext.mjs
var CSPContext = /* @__PURE__ */ import_react.createContext(void 0);
var DEFAULT_CSP_CONTEXT_VALUE = { disableStyleElements: false };
function useCSPContext() {
	return import_react.useContext(CSPContext) ?? DEFAULT_CSP_CONTEXT_VALUE;
}
//#endregion
//#region node_modules/@base-ui/react/select/popup/SelectPopup.mjs
var stateAttributesMapping = {
	...popupStateMapping,
	...transitionStatusMapping
};
/**
* A container for the select list.
* Renders a `<div>` element.
*
* Documentation: [Base UI Select](https://base-ui.com/react/components/select)
*/
var SelectPopup = /* @__PURE__ */ import_react.forwardRef(function SelectPopup(componentProps, forwardedRef) {
	const { render, className, style, finalFocus, ...elementProps } = componentProps;
	const { store, popupRef, onOpenChangeComplete, setOpen, valueRef, firstItemTextRef, selectedItemTextRef, multiple, handleScrollArrowVisibility, scrollHandlerRef, listRef, highlightItemOnHover, floatingContext: floatingRootContext } = useSelectRootContext();
	const { side, align, alignItemWithTriggerActive, isPositioned, setControlledAlignItemWithTrigger } = useSelectPositionerContext();
	const insideToolbar = useToolbarRootContext(true) != null;
	const direction = useDirection();
	const { nonce, disableStyleElements } = useCSPContext();
	const id = useStore(store, selectors$1.id);
	const open = useStore(store, selectors$1.open);
	const openMethod = useStore(store, selectors$1.openMethod);
	const mounted = useStore(store, selectors$1.mounted);
	const popupProps = useStore(store, selectors$1.popupProps);
	const transitionStatus = useStore(store, selectors$1.transitionStatus);
	const triggerElement = useStore(store, selectors$1.triggerElement);
	const positionerElement = useStore(store, selectors$1.positionerElement);
	const listElement = useStore(store, selectors$1.listElement);
	const reachedMaxHeightRef = import_react.useRef(false);
	const initialPlacedRef = import_react.useRef(false);
	const originalPositionerStylesRef = import_react.useRef({});
	const scrollArrowFrame = useAnimationFrame();
	const handleScroll = useStableCallback((scroller) => {
		if (!positionerElement || !popupRef.current || !initialPlacedRef.current) return;
		const isTopPositioned = positionerElement.style.top === "0px";
		const isBottomPositioned = positionerElement.style.bottom === "0px";
		if (reachedMaxHeightRef.current || !alignItemWithTriggerActive || !isTopPositioned && !isBottomPositioned) {
			handleScrollArrowVisibility(scroller);
			return;
		}
		const scale = getScale(positionerElement);
		const currentHeight = normalizeSize(positionerElement.getBoundingClientRect().height, "y", scale);
		const doc = ownerDocument(positionerElement);
		const win = getWindow(positionerElement);
		const positionerStyles = win.getComputedStyle(positionerElement);
		const marginTop = parseFloat(positionerStyles.marginTop);
		const marginBottom = parseFloat(positionerStyles.marginBottom);
		const maxPopupHeight = getMaxPopupHeight(win.getComputedStyle(popupRef.current));
		const maxAvailableHeight = Math.min(doc.documentElement.clientHeight - marginTop - marginBottom, maxPopupHeight);
		const scrollTop = scroller.scrollTop;
		const maxScrollTop = getMaxScrollTop(scroller);
		let nextScrollTop = null;
		const setHeight = (height) => {
			positionerElement.style.height = `${height}px`;
		};
		const diff = isTopPositioned ? maxScrollTop - scrollTop : scrollTop;
		const nextHeight = Math.min(currentHeight + diff, maxAvailableHeight);
		if (diff <= 1) {
			const heightDelta = clamp(diff, 0, maxAvailableHeight - currentHeight);
			if (heightDelta > 0) setHeight(currentHeight + heightDelta);
			scroller.scrollTop = isTopPositioned ? maxScrollTop : 0;
			if (maxAvailableHeight - (currentHeight + heightDelta) <= 1) reachedMaxHeightRef.current = true;
			handleScrollArrowVisibility(scroller);
			return;
		}
		if (maxAvailableHeight - nextHeight > 1) nextScrollTop = isTopPositioned ? Infinity : 0;
		else if (isBottomPositioned && scrollTop < maxScrollTop) nextScrollTop = scrollTop - (diff - (currentHeight + diff - maxAvailableHeight));
		const nextPositionerHeight = Math.ceil(nextHeight);
		if (nextPositionerHeight !== 0) setHeight(nextPositionerHeight);
		if (nextScrollTop != null) {
			const target = clamp(nextScrollTop, 0, getMaxScrollTop(scroller));
			if (Math.abs(scroller.scrollTop - target) > 1) scroller.scrollTop = target;
		}
		if (nextPositionerHeight >= maxAvailableHeight - 1) reachedMaxHeightRef.current = true;
		handleScrollArrowVisibility(scroller);
	});
	import_react.useImperativeHandle(scrollHandlerRef, () => handleScroll, [handleScroll]);
	useOpenChangeComplete({
		open,
		ref: popupRef,
		onComplete() {
			if (open) onOpenChangeComplete?.(true);
		}
	});
	const state = {
		open,
		transitionStatus,
		side,
		align
	};
	useIsoLayoutEffect(() => {
		if (!positionerElement || !popupRef.current || Object.keys(originalPositionerStylesRef.current).length) return;
		originalPositionerStylesRef.current = {
			top: positionerElement.style.top || "0",
			left: positionerElement.style.left || "0",
			right: positionerElement.style.right,
			height: positionerElement.style.height,
			bottom: positionerElement.style.bottom,
			minHeight: positionerElement.style.minHeight,
			maxHeight: positionerElement.style.maxHeight,
			marginTop: positionerElement.style.marginTop,
			marginBottom: positionerElement.style.marginBottom
		};
	}, [popupRef, positionerElement]);
	useIsoLayoutEffect(() => {
		if (open || alignItemWithTriggerActive) return;
		initialPlacedRef.current = false;
		reachedMaxHeightRef.current = false;
		clearStyles(positionerElement, originalPositionerStylesRef.current);
	}, [
		open,
		alignItemWithTriggerActive,
		positionerElement,
		popupRef
	]);
	useIsoLayoutEffect(() => {
		const popupElement = popupRef.current;
		if (!open || !triggerElement || !positionerElement || !popupElement || alignItemWithTriggerActive && !isPositioned || store.state.transitionStatus === "ending") return;
		initialPlacedRef.current = true;
		popupElement.style.removeProperty("--transform-origin");
		if (!alignItemWithTriggerActive) {
			scrollArrowFrame.request(() => handleScrollArrowVisibility(listElement || popupElement));
			return;
		}
		const restoreTransformStyles = unsetTransformStyles(popupElement);
		try {
			let textElement = selectedItemTextRef.current;
			if (!textElement?.isConnected) textElement = !selectors$1.hasSelectedValue(store.state) && firstItemTextRef.current?.isConnected ? firstItemTextRef.current : null;
			const valueElement = valueRef.current;
			const win = getWindow(positionerElement);
			const positionerStyles = win.getComputedStyle(positionerElement);
			const popupStyles = win.getComputedStyle(popupElement);
			const doc = ownerDocument(triggerElement);
			const scale = getScale(triggerElement);
			const triggerRect = normalizeRect(triggerElement.getBoundingClientRect(), scale);
			const positionerRect = normalizeRect(positionerElement.getBoundingClientRect(), scale);
			const triggerHeight = triggerRect.height;
			const scroller = listElement || popupElement;
			const scrollHeight = scroller.scrollHeight;
			const borderBottom = parseFloat(popupStyles.borderBottomWidth);
			const marginTop = parseFloat(positionerStyles.marginTop) || 10;
			const marginBottom = parseFloat(positionerStyles.marginBottom) || 10;
			const minHeight = parseFloat(positionerStyles.minHeight) || 100;
			const maxPopupHeight = getMaxPopupHeight(popupStyles);
			const paddingLeft = 5;
			const paddingRight = 5;
			const triggerCollisionThreshold = 20;
			const viewportHeight = doc.documentElement.clientHeight - marginTop - marginBottom;
			const viewportWidth = doc.documentElement.clientWidth;
			const availableSpaceBeneathTrigger = viewportHeight - triggerRect.bottom + triggerHeight;
			let textRect;
			let alignedLeft = direction === "rtl" ? triggerRect.right - positionerRect.width : triggerRect.left;
			let offsetY = 0;
			if (textElement && valueElement) {
				const valueRect = normalizeRect(valueElement.getBoundingClientRect(), scale);
				textRect = normalizeRect(textElement.getBoundingClientRect(), scale);
				alignedLeft = positionerRect.left + (direction === "rtl" ? valueRect.right - textRect.right : valueRect.left - textRect.left);
				const valueCenterFromTriggerTop = valueRect.top - triggerRect.top + valueRect.height / 2;
				offsetY = textRect.top - positionerRect.top + textRect.height / 2 - valueCenterFromTriggerTop;
			}
			const idealHeight = availableSpaceBeneathTrigger + offsetY + marginBottom + borderBottom;
			let height = Math.min(viewportHeight, idealHeight);
			const maxHeight = viewportHeight - marginTop - marginBottom;
			const scrollTop = idealHeight - height;
			const maxRight = viewportWidth - paddingRight;
			positionerElement.style.left = `${clamp(alignedLeft, paddingLeft, maxRight - positionerRect.width)}px`;
			positionerElement.style.height = `${height}px`;
			positionerElement.style.maxHeight = "none";
			positionerElement.style.marginTop = `${marginTop}px`;
			positionerElement.style.marginBottom = `${marginBottom}px`;
			popupElement.style.height = "100%";
			const maxScrollTop = getMaxScrollTop(scroller);
			const isTopPositioned = scrollTop >= maxScrollTop - 1;
			if (isTopPositioned) height = Math.min(viewportHeight, positionerRect.height) - (scrollTop - maxScrollTop);
			const fallbackToAlignPopupToTrigger = triggerRect.top < triggerCollisionThreshold || triggerRect.bottom > viewportHeight - triggerCollisionThreshold || Math.ceil(height) + 1 < Math.min(scrollHeight, minHeight);
			const isPinchZoomed = (win.visualViewport?.scale ?? 1) !== 1 && webkit;
			if (fallbackToAlignPopupToTrigger || isPinchZoomed) {
				clearStyles(positionerElement, originalPositionerStylesRef.current);
				setControlledAlignItemWithTrigger(false);
				return;
			}
			const initialHeight = Math.max(minHeight, height);
			if (isTopPositioned) {
				const topOffset = Math.max(0, viewportHeight - idealHeight);
				positionerElement.style.top = positionerRect.height >= maxHeight ? "0" : `${topOffset}px`;
				positionerElement.style.height = `${height}px`;
				scroller.scrollTop = getMaxScrollTop(scroller);
			} else {
				positionerElement.style.bottom = "0";
				scroller.scrollTop = scrollTop;
			}
			if (textRect) {
				const popupTop = positionerRect.top;
				const popupHeight = positionerRect.height;
				const textCenterY = textRect.top + textRect.height / 2;
				const clampedY = clamp(popupHeight > 0 ? (textCenterY - popupTop) / popupHeight * 100 : 50, 0, 100);
				popupElement.style.setProperty("--transform-origin", `50% ${clampedY}%`);
			}
			if (initialHeight === viewportHeight || height >= maxPopupHeight) reachedMaxHeightRef.current = true;
			handleScrollArrowVisibility(scroller);
			if (highlightItemOnHover && store.state.selectedIndex === null && store.state.activeIndex === null && listRef.current[0] != null) store.set("activeIndex", 0);
		} finally {
			restoreTransformStyles();
		}
	}, [
		store,
		open,
		positionerElement,
		triggerElement,
		valueRef,
		firstItemTextRef,
		selectedItemTextRef,
		popupRef,
		handleScrollArrowVisibility,
		alignItemWithTriggerActive,
		setControlledAlignItemWithTrigger,
		scrollArrowFrame,
		listElement,
		listRef,
		highlightItemOnHover,
		direction,
		isPositioned
	]);
	import_react.useEffect(() => {
		if (!alignItemWithTriggerActive || !positionerElement || !open) return;
		const win = getWindow(positionerElement);
		function handleResize(event) {
			setOpen(false, createChangeEventDetails(windowResize, event));
		}
		return addEventListener(win, "resize", handleResize);
	}, [
		setOpen,
		alignItemWithTriggerActive,
		positionerElement,
		open
	]);
	const defaultProps = {
		...listElement ? {
			role: "presentation",
			"aria-orientation": void 0
		} : {
			role: "listbox",
			"aria-multiselectable": multiple || void 0,
			id: `${id}-list`
		},
		onKeyDown(event) {
			if (insideToolbar && COMPOSITE_KEYS.has(event.key)) event.stopPropagation();
		},
		onScroll(event) {
			if (listElement) return;
			handleScroll(event.currentTarget);
		},
		...alignItemWithTriggerActive && { style: listElement ? { height: "100%" } : LIST_FUNCTIONAL_STYLES },
		className: !listElement && alignItemWithTriggerActive ? styleDisableScrollbar.className : void 0
	};
	const element = useRenderElement("div", componentProps, {
		ref: [forwardedRef, popupRef],
		state,
		stateAttributesMapping,
		props: [
			popupProps,
			defaultProps,
			getDisabledMountTransitionStyles(transitionStatus),
			elementProps
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [!disableStyleElements && styleDisableScrollbar.getElement(nonce), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingFocusManager, {
		context: floatingRootContext,
		modal: false,
		disabled: !mounted,
		openInteractionType: openMethod,
		returnFocus: finalFocus,
		restoreFocus: true,
		children: element
	})] });
});
function getMaxPopupHeight(popupStyles) {
	const maxHeightStyle = popupStyles.maxHeight;
	return maxHeightStyle.endsWith("px") ? parseFloat(maxHeightStyle) || Infinity : Infinity;
}
function getMaxScrollTop(scroller) {
	return getMaxScrollOffset(scroller.scrollHeight, scroller.clientHeight);
}
function getScale(element) {
	return platform.getScale(element);
}
function normalizeSize(size, axis, scale) {
	return size / scale[axis];
}
function normalizeRect(rect, scale) {
	return rectToClientRect({
		x: normalizeSize(rect.x, "x", scale),
		y: normalizeSize(rect.y, "y", scale),
		width: normalizeSize(rect.width, "x", scale),
		height: normalizeSize(rect.height, "y", scale)
	});
}
var TRANSFORM_STYLE_RESETS = [
	["transform", "none"],
	["scale", "1"],
	["translate", "0 0"]
];
function unsetTransformStyles(popupElement) {
	const { style } = popupElement;
	const originalStyles = {};
	for (const [property, value] of TRANSFORM_STYLE_RESETS) {
		originalStyles[property] = style.getPropertyValue(property);
		style.setProperty(property, value, "important");
	}
	return () => {
		for (const [property] of TRANSFORM_STYLE_RESETS) {
			const originalValue = originalStyles[property];
			if (originalValue) style.setProperty(property, originalValue);
			else style.removeProperty(property);
		}
	};
}
//#endregion
//#region node_modules/@base-ui/react/select/list/SelectList.mjs
/**
* A container for the select items.
* Renders a `<div>` element.
*
* Documentation: [Base UI Select](https://base-ui.com/react/components/select)
*/
var SelectList = /* @__PURE__ */ import_react.forwardRef(function SelectList(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const { store, scrollHandlerRef, multiple } = useSelectRootContext();
	const { alignItemWithTriggerActive } = useSelectPositionerContext();
	const hasScrollArrows = useStore(store, selectors$1.hasScrollArrows);
	const openMethod = useStore(store, selectors$1.openMethod);
	const defaultProps = {
		id: `${useStore(store, selectors$1.id)}-list`,
		role: "listbox",
		"aria-multiselectable": multiple || void 0,
		onScroll(event) {
			scrollHandlerRef.current?.(event.currentTarget);
		},
		...alignItemWithTriggerActive && { style: LIST_FUNCTIONAL_STYLES },
		className: hasScrollArrows && openMethod !== "touch" ? styleDisableScrollbar.className : void 0
	};
	return useRenderElement("div", componentProps, {
		ref: [forwardedRef, store.useStateSetter("listElement")],
		props: [defaultProps, elementProps]
	});
});
//#endregion
//#region node_modules/@base-ui/react/internals/composite/list/useCompositeListItem.mjs
/**
* Used to register a list item and its index (DOM position) in the `CompositeList`.
*/
function useCompositeListItem(params = {}) {
	const { guess, label, metadata, textRef, index: externalIndex } = params;
	const { register, unregister, subscribeMapChange, nextIndexRef } = useCompositeListContext();
	const indexRef = import_react.useRef(-1);
	const [internalIndex, setInternalIndex] = import_react.useState(externalIndex == null && guess ? () => {
		if (indexRef.current === -1) {
			const newIndex = nextIndexRef.current;
			nextIndexRef.current += 1;
			indexRef.current = newIndex;
		}
		return indexRef.current;
	} : -1);
	const index = externalIndex ?? internalIndex;
	const componentRef = import_react.useRef(null);
	const ref = import_react.useCallback((node) => {
		const previousNode = componentRef.current;
		if (previousNode) unregister(previousNode);
		componentRef.current = node;
		if (node) register(node, {
			metadata: metadata ?? null,
			index: externalIndex ?? null,
			label,
			textRef
		});
	}, [
		externalIndex,
		register,
		unregister,
		metadata,
		label,
		textRef
	]);
	useIsoLayoutEffect(() => {
		if (externalIndex != null) return;
		return subscribeMapChange((map) => {
			const i = componentRef.current ? map.get(componentRef.current)?.index : null;
			if (i != null) setInternalIndex(i);
		});
	}, [externalIndex, subscribeMapChange]);
	return {
		ref,
		index
	};
}
//#endregion
//#region node_modules/@base-ui/react/select/item/SelectItemContext.mjs
var SelectItemContext = /* @__PURE__ */ import_react.createContext(void 0);
function useSelectItemContext() {
	const context = import_react.useContext(SelectItemContext);
	if (!context) throw new Error(formatErrorMessage(57));
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/select/item/SelectItem.mjs
/**
* An individual option in the select popup.
* Renders a `<div>` element.
*
* Documentation: [Base UI Select](https://base-ui.com/react/components/select)
*/
var SelectItem$1 = /* @__PURE__ */ import_react.memo(/* @__PURE__ */ import_react.forwardRef(function SelectItem(componentProps, forwardedRef) {
	const { render, className, style, value: itemValue = null, label, disabled: disabledProp = false, nativeButton = false, ...elementProps } = componentProps;
	const textRef = import_react.useRef(null);
	const listItem = useCompositeListItem({
		guess: true,
		label,
		textRef
	});
	const { store, itemProps, setOpen, setValue, selectionRef, typingRef, valuesRef, multiple, selectedItemTextRef, disabled: selectDisabled, readOnly } = useSelectRootContext();
	const disabled = selectDisabled || disabledProp;
	const highlighted = useStore(store, selectors$1.isActive, listItem.index);
	const open = useStore(store, selectors$1.open);
	const selected = useStore(store, selectors$1.isSelected, itemValue);
	const selectedByFocus = useStore(store, selectors$1.isSelectedByFocus, listItem.index);
	const isItemEqualToValue = useStore(store, selectors$1.isItemEqualToValue);
	const index = listItem.index;
	const itemRef = import_react.useRef(null);
	useIsoLayoutEffect(() => {
		const values = valuesRef.current;
		values[index] = itemValue;
		return () => {
			delete values[index];
		};
	}, [
		index,
		itemValue,
		valuesRef
	]);
	useIsoLayoutEffect(() => {
		const selectedValue = store.state.value;
		let selectedCandidate = selectedValue;
		if (multiple && Array.isArray(selectedValue)) selectedCandidate = selectedValue.length > 0 ? selectedValue[selectedValue.length - 1] : void 0;
		if (selectedCandidate !== void 0 && compareItemEquality(itemValue, selectedCandidate, isItemEqualToValue)) {
			store.set("selectedIndex", index);
			if (textRef.current) selectedItemTextRef.current = textRef.current;
		}
	}, [
		index,
		multiple,
		isItemEqualToValue,
		store,
		itemValue,
		selectedItemTextRef
	]);
	const pointerTypeRef = import_react.useRef("mouse");
	const allowMouseSelectionRef = import_react.useRef(false);
	const { getButtonProps, buttonRef } = useButton({
		disabled,
		focusableWhenDisabled: true,
		native: nativeButton,
		composite: true
	});
	const state = {
		disabled,
		selected,
		highlighted
	};
	function commitSelection(event) {
		if (selectDisabled || readOnly) return;
		const selectedValue = store.state.value;
		if (multiple) {
			const currentValue = Array.isArray(selectedValue) ? selectedValue : [];
			setValue(selected ? removeItem(currentValue, itemValue, isItemEqualToValue) : [...currentValue, itemValue], createChangeEventDetails(itemPress, event));
		} else {
			setValue(itemValue, createChangeEventDetails(itemPress, event));
			setOpen(false, createChangeEventDetails(itemPress, event));
		}
	}
	function resetDragMovement() {
		selectionRef.current.dragY = 0;
	}
	const defaultProps = {
		role: "option",
		"aria-selected": selected,
		tabIndex: open && highlighted ? 0 : -1,
		onKeyDown(event) {
			store.set("activeIndex", index);
			if (event.key === " " && typingRef.current) event.preventDefault();
		},
		onClick(event) {
			const isMouseClick = pointerTypeRef.current !== "touch";
			const clickPointerType = event.nativeEvent.pointerType;
			const isVirtualMouseClick = isMouseClick && isVirtualClick(event.nativeEvent) && (clickPointerType !== void 0 || highlighted);
			const isInvalidMouseClick = isMouseClick && !isVirtualMouseClick && !allowMouseSelectionRef.current;
			allowMouseSelectionRef.current = false;
			if (disabled || isInvalidMouseClick) return;
			commitSelection(event.nativeEvent);
		},
		onPointerEnter(event) {
			pointerTypeRef.current = event.pointerType;
		},
		onPointerMove(event) {
			if (event.pointerType === "mouse" && event.buttons === 1) {
				const selection = selectionRef.current;
				selection.dragY += event.movementY;
				if (selection.dragY ** 2 >= 64) selection.allowUnselectedMouseUp = true;
			}
		},
		onPointerDown(event) {
			pointerTypeRef.current = event.pointerType;
			allowMouseSelectionRef.current = true;
			resetDragMovement();
		},
		onMouseUp() {
			resetDragMovement();
			if (disabled || pointerTypeRef.current === "touch") return;
			if (allowMouseSelectionRef.current) return;
			const disallowSelectedMouseUp = !selectionRef.current.allowSelectedMouseUp && selected;
			const disallowUnselectedMouseUp = !selectionRef.current.allowUnselectedMouseUp && !selected;
			if (disallowSelectedMouseUp || disallowUnselectedMouseUp) return;
			allowMouseSelectionRef.current = true;
			itemRef.current?.click();
			allowMouseSelectionRef.current = false;
		}
	};
	const element = useRenderElement("div", componentProps, {
		ref: [
			buttonRef,
			forwardedRef,
			listItem.ref,
			itemRef
		],
		state,
		props: [
			itemProps,
			defaultProps,
			elementProps,
			getButtonProps
		]
	});
	const contextValue = import_react.useMemo(() => ({
		selected,
		index,
		textRef,
		selectedByFocus
	}), [
		selected,
		index,
		textRef,
		selectedByFocus
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemContext.Provider, {
		value: contextValue,
		children: element
	});
}));
//#endregion
//#region node_modules/@base-ui/react/select/item-indicator/SelectItemIndicator.mjs
/**
* Indicates whether the select item is selected.
* Renders a `<span>` element.
*
* Documentation: [Base UI Select](https://base-ui.com/react/components/select)
*/
var SelectItemIndicator = /* @__PURE__ */ import_react.forwardRef(function SelectItemIndicator(componentProps, forwardedRef) {
	const { selected } = useSelectItemContext();
	if (!(componentProps.keepMounted || selected)) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inner, {
		...componentProps,
		ref: forwardedRef
	});
});
var Inner = /* @__PURE__ */ import_react.memo(/* @__PURE__ */ import_react.forwardRef((componentProps, forwardedRef) => {
	const { render, className, style, keepMounted, ...elementProps } = componentProps;
	const { selected } = useSelectItemContext();
	const indicatorRef = import_react.useRef(null);
	const { transitionStatus, setMounted } = useTransitionStatus(selected);
	const element = useRenderElement("span", componentProps, {
		ref: [forwardedRef, indicatorRef],
		state: {
			selected,
			transitionStatus
		},
		props: [{
			"aria-hidden": true,
			children: "✔️"
		}, elementProps],
		stateAttributesMapping: transitionStatusMapping
	});
	useOpenChangeComplete({
		open: selected,
		ref: indicatorRef,
		onComplete() {
			if (!selected) setMounted(false);
		}
	});
	return element;
}));
//#endregion
//#region node_modules/@base-ui/react/select/item-text/SelectItemText.mjs
/**
* A text label of the select item.
* Renders a `<div>` element.
*
* Documentation: [Base UI Select](https://base-ui.com/react/components/select)
*/
var SelectItemText = /* @__PURE__ */ import_react.memo(/* @__PURE__ */ import_react.forwardRef(function SelectItemText(componentProps, forwardedRef) {
	const { index, textRef, selectedByFocus } = useSelectItemContext();
	const { firstItemTextRef, selectedItemTextRef } = useSelectRootContext();
	const { render, className, style, ...elementProps } = componentProps;
	return useRenderElement("div", componentProps, {
		ref: [
			import_react.useCallback((node) => {
				if (!node) return;
				if (index === 0) firstItemTextRef.current = node;
				if (selectedByFocus) selectedItemTextRef.current = node;
			}, [
				firstItemTextRef,
				selectedItemTextRef,
				index,
				selectedByFocus
			]),
			forwardedRef,
			textRef
		],
		props: elementProps
	});
}));
//#endregion
//#region node_modules/@base-ui/react/select/scroll-arrow/SelectScrollArrow.mjs
/**
* @internal
*/
var SelectScrollArrow = /* @__PURE__ */ import_react.forwardRef(function SelectScrollArrow(componentProps, forwardedRef) {
	const { render, className, style, direction, keepMounted, ...elementProps } = componentProps;
	const isUp = direction === "up";
	const { store, popupRef, listRef, handleScrollArrowVisibility, scrollArrowsMountedCountRef } = useSelectRootContext();
	const { side, scrollDownArrowRef, scrollUpArrowRef } = useSelectPositionerContext();
	const stateVisible = useStore(store, isUp ? selectors$1.scrollUpArrowVisible : selectors$1.scrollDownArrowVisible);
	const openMethod = useStore(store, selectors$1.openMethod);
	const visible = stateVisible && openMethod !== "touch";
	const timeout = useTimeout();
	const scrollArrowRef = isUp ? scrollUpArrowRef : scrollDownArrowRef;
	const { mounted, transitionStatus, setMounted } = useTransitionStatus(visible);
	useIsoLayoutEffect(() => {
		scrollArrowsMountedCountRef.current += 1;
		store.set("hasScrollArrows", true);
		return () => {
			scrollArrowsMountedCountRef.current = Math.max(0, scrollArrowsMountedCountRef.current - 1);
			if (scrollArrowsMountedCountRef.current === 0) store.set("hasScrollArrows", false);
		};
	}, [store, scrollArrowsMountedCountRef]);
	useOpenChangeComplete({
		open: visible,
		ref: scrollArrowRef,
		onComplete() {
			if (!visible) setMounted(false);
		}
	});
	const element = useRenderElement("div", componentProps, {
		ref: [forwardedRef, scrollArrowRef],
		state: {
			direction,
			visible,
			side,
			transitionStatus
		},
		props: [{
			"aria-hidden": true,
			children: isUp ? "▲" : "▼",
			style: { position: "absolute" },
			onMouseMove(event) {
				if (event.movementX === 0 && event.movementY === 0 || timeout.isStarted()) return;
				store.set("activeIndex", null);
				function scrollNextItem() {
					const scroller = store.state.listElement ?? popupRef.current;
					if (!scroller) return;
					store.set("activeIndex", null);
					handleScrollArrowVisibility(scroller);
					const maxScrollTop = getMaxScrollOffset(scroller.scrollHeight, scroller.clientHeight);
					const scrollTop = normalizeScrollOffset(scroller.scrollTop, maxScrollTop);
					const isScrolledToEdge = scrollTop === (isUp ? 0 : maxScrollTop);
					const items = listRef.current;
					if (scrollTop !== scroller.scrollTop) scroller.scrollTop = scrollTop;
					if (isScrolledToEdge) {
						timeout.clear();
						return;
					}
					if (items.length > 0) {
						const scrollArrowHeight = scrollArrowRef.current?.offsetHeight || 0;
						scroller.scrollTop = getTargetScrollTop(items, isUp, scrollTop, scroller.clientHeight, scrollArrowHeight, maxScrollTop);
					}
					timeout.start(40, scrollNextItem);
				}
				timeout.start(40, scrollNextItem);
			},
			onMouseLeave() {
				timeout.clear();
			}
		}, elementProps],
		stateAttributesMapping: transitionStatusMapping
	});
	if (!(mounted || keepMounted)) return null;
	return element;
});
function getTargetScrollTop(items, isUp, scrollTop, clientHeight, scrollArrowHeight, maxScrollTop) {
	if (isUp) {
		let firstVisibleIndex = 0;
		const visibleTop = scrollTop + scrollArrowHeight - 1;
		for (let i = 0; i < items.length; i += 1) {
			const item = items[i];
			if (item && item.offsetTop >= visibleTop) {
				firstVisibleIndex = i;
				break;
			}
		}
		const targetIndex = Math.max(0, firstVisibleIndex - 1);
		const targetItem = items[targetIndex];
		return targetIndex < firstVisibleIndex && targetItem ? normalizeScrollOffset(targetItem.offsetTop - scrollArrowHeight, maxScrollTop) : 0;
	}
	let lastVisibleIndex = items.length - 1;
	const visibleBottom = scrollTop + clientHeight - scrollArrowHeight + 1;
	for (let i = 0; i < items.length; i += 1) {
		const item = items[i];
		if (item && item.offsetTop + item.offsetHeight > visibleBottom) {
			lastVisibleIndex = Math.max(0, i - 1);
			break;
		}
	}
	const targetIndex = Math.min(items.length - 1, lastVisibleIndex + 1);
	const targetItem = items[targetIndex];
	return targetIndex > lastVisibleIndex && targetItem ? normalizeScrollOffset(targetItem.offsetTop + targetItem.offsetHeight - clientHeight + scrollArrowHeight, maxScrollTop) : maxScrollTop;
}
//#endregion
//#region node_modules/@base-ui/react/select/scroll-down-arrow/SelectScrollDownArrow.mjs
/**
* An element that scrolls the select popup down when hovered. Does not render when using touch input.
* Renders a `<div>` element.
*
* Documentation: [Base UI Select](https://base-ui.com/react/components/select)
*/
var SelectScrollDownArrow = /* @__PURE__ */ import_react.forwardRef(function SelectScrollDownArrow(props, forwardedRef) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollArrow, {
		...props,
		ref: forwardedRef,
		direction: "down"
	});
});
//#endregion
//#region node_modules/@base-ui/react/select/scroll-up-arrow/SelectScrollUpArrow.mjs
/**
* An element that scrolls the select popup up when hovered. Does not render when using touch input.
* Renders a `<div>` element.
*
* Documentation: [Base UI Select](https://base-ui.com/react/components/select)
*/
var SelectScrollUpArrow = /* @__PURE__ */ import_react.forwardRef(function SelectScrollUpArrow(props, forwardedRef) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollArrow, {
		...props,
		ref: forwardedRef,
		direction: "up"
	});
});
//#endregion
//#region node_modules/@base-ui/react/select/group/SelectGroupContext.mjs
var SelectGroupContext = /* @__PURE__ */ import_react.createContext(void 0);
//#endregion
//#region node_modules/@base-ui/react/select/group/SelectGroup.mjs
/**
* Groups related select items with the corresponding label.
* Renders a `<div>` element.
*
* Documentation: [Base UI Select](https://base-ui.com/react/components/select)
*/
var SelectGroup$1 = /* @__PURE__ */ import_react.forwardRef(function SelectGroup(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const [labelId, setLabelId] = import_react.useState();
	const contextValue = import_react.useMemo(() => ({
		labelId,
		setLabelId
	}), [labelId, setLabelId]);
	const element = useRenderElement("div", componentProps, {
		ref: forwardedRef,
		props: [{
			role: "group",
			"aria-labelledby": labelId
		}, elementProps]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectGroupContext.Provider, {
		value: contextValue,
		children: element
	});
});
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChevronUp = createLucideIcon("chevron-up", [["path", {
	d: "m18 15-6-6-6 6",
	key: "153udz"
}]]);
//#endregion
//#region components/ui/select.tsx
var Select = SelectRoot;
function SelectGroup({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectGroup$1, {
		"data-slot": "select-group",
		className: cn("scroll-my-1 p-1", className),
		...props
	});
}
function SelectValue({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue$1, {
		"data-slot": "select-value",
		className: cn("flex flex-1 text-start", className),
		...props
	});
}
function SelectTrigger({ className, size = "default", children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
		"data-slot": "select-trigger",
		"data-size": size,
		className: cn("flex w-fit items-center justify-between gap-1.5 rounded-lg border border-input bg-transparent py-2 pe-2 ps-2.5 text-sm whitespace-nowrap transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-placeholder:text-muted-foreground data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "pointer-events-none size-4 text-muted-foreground" }) })]
	});
}
function SelectContent({ className, children, side = "bottom", sideOffset = 4, align = "center", alignOffset = 0, alignItemWithTrigger = true, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPositioner, {
		side,
		sideOffset,
		align,
		alignOffset,
		alignItemWithTrigger,
		className: "isolate z-50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectPopup, {
			"data-slot": "select-content",
			"data-align-trigger": alignItemWithTrigger,
			className: cn("relative isolate z-50 max-h-(--available-height) w-(--anchor-width) min-w-36 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[align-trigger=true]:animate-none data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-start-2 data-[side=inline-start]:slide-in-from-end-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
			...props,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectList, { children }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
			]
		})
	}) });
}
function SelectItem({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
		"data-slot": "select-item",
		className: cn("relative flex w-full cursor-default items-center gap-1.5 rounded-md py-1 pe-8 ps-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, {
			className: "flex flex-1 shrink-0 gap-2 whitespace-nowrap",
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, {
			render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute end-2 flex size-4 items-center justify-center" }),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "pointer-events-none" })
		})]
	});
}
function SelectScrollUpButton({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpArrow, {
		"data-slot": "select-scroll-up-button",
		className: cn("top-0 z-10 flex w-full cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, {})
	});
}
function SelectScrollDownButton({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownArrow, {
		"data-slot": "select-scroll-down-button",
		className: cn("bottom-0 z-10 flex w-full cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {})
	});
}
//#endregion
//#region components/payment-health/payment-health-dashboard.tsx
var healthTheme = {
	"--health-ink": "#1a2148",
	"--health-subtle": "#6b7590",
	"--health-line": "#e4e9f3",
	"--health-wash": "#f6f8fc",
	"--health-violet": "#174fd6",
	"--health-violet-soft": "#eaf1ff",
	"--health-violet-line": "#c8d8ff",
	"--health-lavender": "#3b74ef",
	"--health-indigo": "#0f9a84",
	"--health-teal": "#0f9a84",
	"--health-good": "#119a6c",
	"--health-good-soft": "#e6f7ef",
	"--health-warn": "#e25555",
	"--health-warn-soft": "#f6f8fc",
	"--health-amber": "#e8892d",
	"--health-amber-soft": "#fff6ea",
	"--health-yellow": "#ffd60a"
};
var panelClass$2 = "rail-panel rail-panel-interactive [--rail-accent:var(--health-violet)] [--rail-line:var(--health-line)]";
var kpiIconMap = {
	bank: Building2,
	check: CircleCheck,
	refresh: RefreshCw,
	terminal: Terminal,
	alert: TriangleAlert,
	shield: ShieldAlert
};
var toneIconClass = {
	good: "bg-[var(--health-good-soft)] text-[var(--health-good)]",
	warn: "bg-[var(--health-wash)] text-[var(--health-warn)] ring-1 ring-[var(--health-line)]",
	neutral: "bg-[var(--health-wash)] text-[var(--health-subtle)]",
	violet: "bg-[var(--health-violet-soft)] text-[var(--health-violet)]"
};
var funnelFill = {
	violet: "var(--health-violet)",
	lavender: "var(--health-lavender)",
	indigo: "var(--health-indigo)",
	green: "var(--health-good)"
};
function Panel$1({ title, description, children, className, headingId }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn(panelClass$2, "flex flex-col gap-2.5 p-2.5 sm:p-3", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex flex-col gap-0.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: headingId,
				className: "text-sm font-bold text-[var(--health-ink)] sm:text-base",
				children: title
			}), description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs leading-5 text-[var(--health-subtle)]",
				children: description
			}) : null]
		}), children]
	});
}
function HealthHeader() {
	const [periodId, setPeriodId] = (0, import_react.useState)(PAYMENT_HEALTH_PERIODS[0].id);
	const [merchantId, setMerchantId] = (0, import_react.useState)(PAYMENT_HEALTH_MERCHANTS[0].id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "flex flex-col gap-2.5 md:flex-row md:items-start md:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 items-center gap-2.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex size-10 shrink-0 items-center justify-center rounded-md bg-[var(--health-yellow)] text-[var(--health-ink)] sm:size-11",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
					className: "size-5",
					"aria-hidden": "true"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 flex-col gap-0.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-lg font-extrabold tracking-tight text-[var(--health-ink)] sm:text-xl",
					children: "سلامت مسیر پرداخت"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-[var(--health-subtle)] sm:text-sm",
					children: "کجا فروش بالقوه از دست می‌رود؟ · قیف NoAttempt تا verify"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid w-full shrink-0 grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-2.5 md:w-auto md:min-w-[18rem]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-w-0 sm:min-w-36",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: merchantId,
					onValueChange: (value) => value && setMerchantId(value),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger, {
						className: "h-10 w-full border-[var(--health-line)] bg-card [&>svg:last-child]:text-[var(--health-violet)]",
						"aria-label": "انتخاب پذیرنده",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Store, {
							className: "size-4 text-[var(--health-violet)]",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "min-w-0 flex-1 truncate text-xs font-extrabold text-[var(--health-ink)]",
							children: "پذیرنده"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: PAYMENT_HEALTH_MERCHANTS.map((merchant) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: merchant.id,
						children: merchant.label
					}, merchant.id)) })]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-w-0 sm:min-w-36",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: periodId,
					onValueChange: (value) => value && setPeriodId(value),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger, {
						className: "h-10 w-full border-[var(--health-line)] bg-card [&>svg:last-child]:text-[var(--health-violet)]",
						"aria-label": "انتخاب بازه زمانی",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {
							className: "size-4 text-[var(--health-violet)]",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "min-w-0 flex-1 truncate text-xs font-extrabold text-[var(--health-ink)]",
							children: "بازه"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: PAYMENT_HEALTH_PERIODS.map((period) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: period.id,
						children: period.label
					}, period.id)) })]
				})
			})]
		})]
	});
}
/**
* Signature funnel: stacked trapezoids that taper, with side labels + rates.
* Uses geometric narrowing (not just bar widths) so the path reads as a funnel.
*/
function PaymentFunnelDiagram() {
	const stages = PAYMENT_FUNNEL;
	const width = 320;
	const stageH = 46;
	const gap = 6;
	const topPad = 8;
	const sidePad = 8;
	const height = topPad + stages.length * stageH + (stages.length - 1) * gap + 8;
	function stageGeometry(index) {
		const inset = sidePad + index / (stages.length - 1) * 52;
		const nextInset = sidePad + (index + 1) / (stages.length - 1) * 52;
		return {
			y: topPad + index * (stageH + gap),
			topLeft: inset,
			topRight: width - inset,
			bottomLeft: nextInset,
			bottomRight: width - nextInset
		};
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "flex flex-col gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
			className: "sr-only",
			children: ["قیف مسیر پرداخت از نمایش درگاه تا پرداخت موفق.", stages.map((stage) => ` ${stage.label}: ${formatPersianNumber(stage.count)} نشست، ${formatPersianPercent(stage.rate)} از کل.`).join("")]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 lg:grid-cols-[minmax(0,1fr)_11rem] lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: `0 0 ${width} ${height}`,
				className: "mx-auto h-auto w-full max-w-md",
				role: "img",
				"aria-hidden": "true",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "funnel-shine",
					x1: "0",
					y1: "0",
					x2: "1",
					y2: "1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "white",
						stopOpacity: "0.22"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "55%",
						stopColor: "white",
						stopOpacity: "0"
					})]
				}) }), stages.map((stage, index) => {
					const g = stageGeometry(index);
					const points = [
						`${g.topLeft},${g.y}`,
						`${g.topRight},${g.y}`,
						`${g.bottomRight},${g.y + stageH}`,
						`${g.bottomLeft},${g.y + stageH}`
					].join(" ");
					const midY = g.y + stageH / 2;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
							points,
							fill: funnelFill[stage.tone],
							className: "transition-[filter] duration-200"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
							points,
							fill: "url(#funnel-shine)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: width / 2,
							y: midY - 6,
							textAnchor: "middle",
							className: "fill-white text-[11px] font-semibold",
							children: stage.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: width / 2,
							y: midY + 10,
							textAnchor: "middle",
							className: "fill-white/95 text-[12px] font-extrabold",
							children: formatPersianNumber(stage.count)
						})
					] }, stage.id);
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "flex flex-col gap-2",
				children: stages.map((stage, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center justify-between gap-2 rounded-lg border border-[var(--health-line)] bg-[var(--health-wash)] px-2.5 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex min-w-0 items-center gap-2 text-xs text-[var(--health-ink)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "size-2.5 shrink-0 rounded-full",
							style: { background: funnelFill[stage.tone] },
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate font-medium",
							children: stage.label
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "shrink-0 text-xs font-extrabold tabular-nums text-[var(--health-ink)]",
						children: [formatPersianPercent(stage.rate), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: index === 0 ? " از کل نشست‌ها" : ` نسبت به نمایش درگاه؛ افت از مرحله قبل ${formatPersianPercent(stages[index - 1].rate - stage.rate)}`
						})]
					})]
				}, stage.id))
			})]
		})]
	});
}
function FunnelHero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel$1, {
		title: "قیف مسیر پرداخت",
		description: "از نمایش درگاه تا پرداخت موفق؛ ریزش بین مراحل مسیر فروش بالقوه را نشان می‌دهد",
		headingId: "payment-funnel-heading",
		className: "lg:col-span-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentFunnelDiagram, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2 rounded-lg border border-[var(--health-line)] bg-[var(--health-wash)] p-2.5 sm:grid-cols-[auto_1fr] sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-2xl font-extrabold tabular-nums text-[var(--health-warn)]",
					children: formatPersianPercent(FUNNEL_SUMMARY.postEntrySuccess)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-0.5 text-xs sm:text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold text-[var(--health-ink)]",
						children: "نرخ موفقیت پس از ورود به بانک"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[var(--health-warn)]",
						children: [
							toPersianDigits(Math.abs(FUNNEL_SUMMARY.vsPeerPoints)),
							" واحد درصد کمتر از همتایان مشابه (میانه ",
							formatPersianPercent(FUNNEL_SUMMARY.peerMedian),
							")"
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "rail-banner p-2.5 sm:p-3",
				"aria-labelledby": "funnel-insight-heading",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex items-center gap-2 text-[var(--health-teal)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, {
						className: "size-3.5",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						id: "funnel-insight-heading",
						className: "text-sm font-bold text-white",
						children: "بینش کلیدی قیف"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "relative mt-1.5 text-sm leading-6 text-white/90",
					children: [
						FUNNEL_SUMMARY.headline,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-[var(--health-teal)]",
							children: FUNNEL_SUMMARY.takeaway
						})
					]
				})]
			})
		]
	});
}
function DropOffPanel() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel$1, {
		className: "self-start",
		title: "ریزش بین مراحل",
		description: "بزرگ‌ترین گلوگاه مسیر را اول هدف بگیرید",
		headingId: "payment-dropoff-heading",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "flex flex-col gap-1.5",
			children: FUNNEL_DROPOFFS.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: cn("rounded-lg border p-2", step.severity === "high" ? "border-[var(--health-warn)]/25 bg-card" : step.severity === "medium" ? "border-[var(--health-amber)]/30 bg-[var(--health-amber-soft)]" : "border-[var(--health-line)] bg-[var(--health-wash)]"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs font-semibold text-[var(--health-ink)]",
							children: [
								step.from,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mx-1 text-[var(--health-subtle)]",
									children: "→"
								}),
								step.to
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-[11px] text-[var(--health-subtle)]",
							children: [formatPersianNumber(step.lostCount), " نشست از دست‌رفته"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: cn("text-sm font-extrabold tabular-nums", step.severity === "high" ? "text-[var(--health-warn)]" : step.severity === "medium" ? "text-[var(--health-amber)]" : "text-[var(--health-ink)]"),
						children: [formatPersianPercent(step.lostRate), "-"]
					})]
				})
			}, step.id))
		})
	});
}
function KpiCard$1({ kpi }) {
	const Icon = kpiIconMap[kpi.icon];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn(panelClass$2, "flex flex-col gap-2 p-2.5"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-[11px] font-semibold leading-4 text-[var(--health-ink)]",
					children: kpi.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("flex size-8 shrink-0 items-center justify-center rounded-lg", toneIconClass[kpi.tone]),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "size-3.5",
						"aria-hidden": "true"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("text-lg font-extrabold tracking-tight sm:text-xl", kpi.tone === "warn" ? "text-[var(--health-warn)]" : "text-[var(--health-ink)]"),
				children: kpi.value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] text-[var(--health-subtle)]",
				children: kpi.caption
			})
		]
	});
}
function AmountSuccessChart() {
	const max = 100;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel$1, {
		title: "موفقیت پس از ورود به بانک",
		description: "به‌تفکیک بازه مبلغ، در برابر میانه همتایان",
		headingId: "amount-success-heading",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "flex flex-col gap-2.5",
			"aria-label": "نرخ موفقیت بر اساس مبلغ",
			children: AMOUNT_BUCKETS.map((bucket) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex flex-col gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-2 text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium text-[var(--health-ink)]",
						children: bucket.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "tabular-nums text-[var(--health-subtle)]",
						children: [
							"شما ",
							formatPersianPercent(bucket.bankSuccess),
							" · همتا",
							" ",
							formatPersianPercent(bucket.peerMedian)
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative h-2.5 overflow-hidden rounded-full bg-[var(--health-wash)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute inset-y-0 start-0 rounded-full bg-[var(--health-violet-line)]",
						style: { width: `${bucket.peerMedian / max * 100}%` },
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute inset-y-0 start-0 rounded-full bg-[var(--health-violet)]",
						style: { width: `${bucket.bankSuccess / max * 100}%` },
						"aria-hidden": "true"
					})]
				})]
			}, bucket.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] text-[var(--health-subtle)]",
			children: "نوار بنفش تیره = شما · نوار روشن = میانه همتا"
		})]
	});
}
function RetryPanel() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel$1, {
		title: "بازیابی با Retry",
		description: "نشست‌هایی که پس از تلاش مجدد به خرید موفق رسیدند",
		headingId: "retry-heading",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg bg-[var(--health-good-soft)] p-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] text-[var(--health-subtle)]",
					children: "سهم بازیابی"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-2xl font-extrabold text-[var(--health-good)]",
					children: formatPersianPercent(RETRY_STATS.recoveredShare)
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg bg-[var(--health-wash)] p-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] text-[var(--health-subtle)]",
					children: "نشست بازیابی‌شده"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-2xl font-extrabold text-[var(--health-ink)]",
					children: formatPersianNumber(RETRY_STATS.recoveredSessions)
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "rounded-lg border border-[var(--health-line)] bg-[var(--health-wash)] px-2.5 py-2 text-xs leading-5 text-[var(--health-subtle)]",
			children: [
				"میانگین تلاش تا موفقیت:",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold text-[var(--health-ink)]",
					children: toPersianDigits(RETRY_STATS.medianAttempts)
				}),
				". ",
				RETRY_STATS.note
			]
		})]
	});
}
function TerminalTable() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel$1, {
		title: "تفاوت ترمینال‌ها",
		description: "فقط ترمینال‌هایی با نمونه کافی",
		headingId: "terminal-heading",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full min-w-[22rem] border-separate border-spacing-0 text-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
						className: "sr-only",
						children: "مقایسه نرخ موفقیت و NoAttempt بین ترمینال‌های پذیرنده"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "text-[var(--health-subtle)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								scope: "col",
								className: "p-2 text-start font-medium",
								children: "ترمینال"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								scope: "col",
								className: "p-2 text-end font-medium",
								children: "موفقیت"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								scope: "col",
								className: "p-2 text-end font-medium",
								children: "NoAttempt"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								scope: "col",
								className: "p-2 text-end font-medium",
								children: "نمونه"
							})
						]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: TERMINAL_ROWS.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							scope: "row",
							className: "border-t border-[var(--health-line)] p-2 text-start font-semibold text-[var(--health-ink)]",
							children: row.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "border-t border-[var(--health-line)] p-2 text-end tabular-nums font-bold text-[var(--health-ink)]",
							children: formatPersianPercent(row.successRate)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "border-t border-[var(--health-line)] p-2 text-end tabular-nums text-[var(--health-warn)]",
							children: formatPersianPercent(row.noAttempt)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "border-t border-[var(--health-line)] p-2 text-end text-[var(--health-subtle)]",
							children: row.sample
						})
					] }, row.id)) })
				]
			})
		})
	});
}
function PspAnomalyPanel() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel$1, {
		title: "ناهنجاری PSP یا صادرکننده",
		description: "انحراف تعدیل‌شده نسبت به الگوی مورد انتظار",
		headingId: "psp-anomaly-heading",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "flex flex-col gap-2",
			children: PSP_ANOMALIES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-start justify-between gap-2.5 rounded-lg border border-[var(--health-line)] bg-[var(--health-wash)] px-2.5 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold text-[var(--health-ink)]",
						children: item.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-[11px] leading-5 text-[var(--health-subtle)]",
						children: item.note
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: cn("shrink-0 text-sm font-extrabold tabular-nums", item.tone === "warn" ? "text-[var(--health-warn)]" : item.tone === "good" ? "text-[var(--health-good)]" : "text-[var(--health-ink)]"),
					children: [
						item.deviation > 0 ? "+" : "",
						toPersianDigits(item.deviation.toFixed(1)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-medium",
							children: " واحد"
						})
					]
				})]
			}, item.id))
		})
	});
}
function Disclaimer$1() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "flex items-start justify-center gap-2 px-1 text-center text-[11px] leading-5 text-[var(--health-subtle)] sm:text-xs",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
			className: "mt-0.5 size-3.5 shrink-0 text-[var(--health-violet)]",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "نشست ناموفق الزاماً با اصلاح مسیر به خرید موفق تبدیل نمی‌شد؛ اثر مالی را سناریویی بخوانید، نه درآمد قطعی ازدست‌رفته." })]
	});
}
function PaymentHealthDashboard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-2.5 text-[var(--health-ink)]",
		style: healthTheme,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HealthHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				"aria-label": "شاخص‌های سلامت مسیر",
				className: "grid grid-cols-2 gap-2 sm:gap-2.5 md:grid-cols-3 xl:grid-cols-6",
				children: PAYMENT_HEALTH_KPIS.map((kpi) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard$1, { kpi }, kpi.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-label": "قیف و ریزش مسیر پرداخت",
				className: "grid grid-cols-1 gap-2.5 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FunnelHero, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropOffPanel, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-label": "تحلیل‌های تکمیلی مسیر پرداخت",
				className: "grid grid-cols-1 gap-2.5 md:grid-cols-2 xl:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AmountSuccessChart, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RetryPanel, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TerminalTable, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PspAnomalyPanel, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer$1, {})
		]
	});
}
//#endregion
//#region components/pages/payment-health-page.tsx
function PaymentHealthPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentHealthDashboard, {});
}
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Activity = createLucideIcon("activity", [["path", {
	d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
	key: "169zse"
}]]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Ban = createLucideIcon("ban", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "M4.929 4.929 19.07 19.071",
	key: "196cmz"
}]]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Coins = createLucideIcon("coins", [
	["path", {
		d: "M13.744 17.736a6 6 0 1 1-7.48-7.48",
		key: "bq4yh3"
	}],
	["path", {
		d: "M15 6h1v4",
		key: "11y1tn"
	}],
	["path", {
		d: "m6.134 14.768.866-.5 2 3.464",
		key: "17snzx"
	}],
	["circle", {
		cx: "16",
		cy: "8",
		r: "6",
		key: "14bfc9"
	}]
]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Hash = createLucideIcon("hash", [
	["line", {
		x1: "4",
		x2: "20",
		y1: "9",
		y2: "9",
		key: "4lhtct"
	}],
	["line", {
		x1: "4",
		x2: "20",
		y1: "15",
		y2: "15",
		key: "vyu0kd"
	}],
	["line", {
		x1: "10",
		x2: "8",
		y1: "3",
		y2: "21",
		key: "1ggp8o"
	}],
	["line", {
		x1: "16",
		x2: "14",
		y1: "3",
		y2: "21",
		key: "weycgp"
	}]
]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Layers = createLucideIcon("layers", [
	["path", {
		d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
		key: "zw3jo"
	}],
	["path", {
		d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
		key: "1wduqc"
	}],
	["path", {
		d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
		key: "kqbvx6"
	}]
]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Lock = createLucideIcon("lock", [["rect", {
	width: "18",
	height: "11",
	x: "3",
	y: "11",
	rx: "2",
	ry: "2",
	key: "1w4ew1"
}], ["path", {
	d: "M7 11V7a5 5 0 0 1 10 0v4",
	key: "fwvmzm"
}]]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Medal = createLucideIcon("medal", [
	["path", {
		d: "M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",
		key: "143lza"
	}],
	["path", {
		d: "M11 12 5.12 2.2",
		key: "qhuxz6"
	}],
	["path", {
		d: "m13 12 5.88-9.8",
		key: "hbye0f"
	}],
	["path", {
		d: "M8 7h8",
		key: "i86dvs"
	}],
	["circle", {
		cx: "12",
		cy: "17",
		r: "5",
		key: "qbz8iq"
	}],
	["path", {
		d: "M12 18v-2h-.5",
		key: "fawc4q"
	}]
]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Percent = createLucideIcon("percent", [
	["line", {
		x1: "19",
		x2: "5",
		y1: "5",
		y2: "19",
		key: "1x9vlm"
	}],
	["circle", {
		cx: "6.5",
		cy: "6.5",
		r: "2.5",
		key: "4mh3h7"
	}],
	["circle", {
		cx: "17.5",
		cy: "17.5",
		r: "2.5",
		key: "1mdrzq"
	}]
]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Ruler = createLucideIcon("ruler", [
	["path", {
		d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",
		key: "icamh8"
	}],
	["path", {
		d: "m14.5 12.5 2-2",
		key: "inckbg"
	}],
	["path", {
		d: "m11.5 9.5 2-2",
		key: "fmmyf7"
	}],
	["path", {
		d: "m8.5 6.5 2-2",
		key: "vc6u1g"
	}],
	["path", {
		d: "m17.5 15.5 2-2",
		key: "wo5hmg"
	}]
]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Trophy = createLucideIcon("trophy", [
	["path", {
		d: "M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2",
		key: "pwuv1l"
	}],
	["path", {
		d: "M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2",
		key: "1y54w1"
	}],
	["path", {
		d: "M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3",
		key: "e30mpu"
	}],
	["path", {
		d: "M4 22h16",
		key: "57wxv0"
	}],
	["path", {
		d: "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",
		key: "1mhfuq"
	}],
	["path", {
		d: "M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3",
		key: "i0yafy"
	}]
]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Zap = createLucideIcon("zap", [["path", {
	d: "M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",
	key: "1v7up4"
}]]);
//#endregion
//#region lib/peer-position-mock-data.ts
var PEER_PERIODS = [
	{
		id: "khordad-1403",
		label: "۱ تا ۳۱ خرداد ۱۴۰۳"
	},
	{
		id: "ordibehesht-1403",
		label: "۱ تا ۳۱ اردیبهشت ۱۴۰۳"
	},
	{
		id: "farvardin-1403",
		label: "۱ تا ۳۱ فروردین ۱۴۰۳"
	}
];
var PEER_CATEGORIES = [
	{
		id: "restaurant",
		label: "رستوران و فست‌فود"
	},
	{
		id: "retail",
		label: "خرده‌فروشی"
	},
	{
		id: "digital",
		label: "خدمات دیجیتال"
	}
];
var PEER_GROUP_STATS = {
	peerCount: 23,
	comparedTo: 23,
	groupingMethod: "هوشمند"
};
var PEER_KEY_INSIGHT = {
	growthPercentile: 78,
	returnPercentile: 31,
	peerCount: 23,
	headline: "شما در رشد فروش بین ۲۳ پذیرنده مشابه در صدک ۷۸ هستید؛",
	highlight: "اما نرخ بازگشت ۳۰روزه شما در صدک ۳۱ است.",
	takeaway: "مسئله اصلی جذب مشتری نیست؛ نگهداشت مشتری است."
};
var PEER_CRITERIA = [
	{
		id: "category",
		label: "رستوران، برگر و فست‌فود",
		icon: "store"
	},
	{
		id: "size",
		label: "اندازه کسب‌وکار (تعداد پرداخت)",
		icon: "ruler"
	},
	{
		id: "avg-ticket",
		label: "میانگین تراکنش ۸۰۰٬۰۰۰ تومان",
		icon: "coins"
	},
	{
		id: "volume",
		label: "تعداد پرداخت‌ها (۱۰۰k تا ۱۰۵k)",
		icon: "hash"
	},
	{
		id: "return-share",
		label: "سهم مشتریان بازگشتی ۳۱٪ تا ۵۰٪",
		icon: "repeat"
	},
	{
		id: "hours",
		label: "اوج فعالیت عصر و شب",
		icon: "clock"
	},
	{
		id: "verify",
		label: "نوع Verified",
		icon: "shield"
	},
	{
		id: "psp",
		label: "ترکیب PSP (در تحلیل conversion)",
		icon: "layers"
	}
];
var PERCENTILE_BARS = [
	{
		id: "growth",
		label: "رشد فروش ماهانه",
		percentile: 78,
		median: 50,
		q1: 25,
		q3: 75,
		tone: "good"
	},
	{
		id: "success",
		label: "نرخ موفقیت تعدیل‌شده",
		percentile: 62,
		median: 50,
		q1: 25,
		q3: 75,
		tone: "neutral"
	},
	{
		id: "return-rate",
		label: "نرخ بازگشت ۳۰ روزه",
		percentile: 31,
		median: 50,
		q1: 25,
		q3: 75,
		tone: "warn"
	},
	{
		id: "return-sales",
		label: "سهم فروش از بازگشتی‌ها",
		percentile: 36,
		median: 50,
		q1: 25,
		q3: 75,
		tone: "warn"
	}
];
var PEER_KPIS = [
	{
		id: "sales-amount",
		label: "مبلغ فروش موفق",
		you: "۱۲٫۴ میلیارد تومان",
		median: "۷٫۱ میلیارد تومان",
		percentile: 78,
		tone: "good",
		icon: "wallet"
	},
	{
		id: "growth",
		label: "رشد فروش ماهانه",
		you: "+۲۷٪",
		median: "+۱۴٪",
		percentile: 78,
		tone: "good",
		icon: "trend"
	},
	{
		id: "success",
		label: "نرخ موفقیت تعدیل‌شده",
		you: "۹۳٫۲٪",
		median: "۹۰٫۱٪",
		percentile: 62,
		tone: "good",
		icon: "shield"
	},
	{
		id: "avg-basket",
		label: "متوسط مبلغ خرید",
		you: "۳۷۵٬۰۰۰ تومان",
		median: "۳۲۸٬۰۰۰ تومان",
		percentile: 57,
		tone: "good",
		icon: "cart"
	},
	{
		id: "return-rate",
		label: "نرخ بازگشت ۳۰ روزه",
		you: "۱۴٪",
		median: "۲۱٪",
		percentile: 31,
		tone: "warn",
		icon: "users"
	},
	{
		id: "return-sales",
		label: "سهم فروش از بازگشتی‌ها",
		you: "۲۳٪",
		median: "۳۱٪",
		percentile: 36,
		tone: "warn",
		icon: "zap"
	},
	{
		id: "no-attempt",
		label: "No Attempt",
		you: "۴٫۸٪",
		median: "۶٫۲٪",
		percentile: 72,
		tone: "good",
		icon: "ban"
	},
	{
		id: "retry",
		label: "Retry",
		you: "۴۶٪",
		median: "۳۹٪",
		percentile: 64,
		tone: "good",
		icon: "refresh"
	},
	{
		id: "fee-pressure",
		label: "شاخص نسبی فشار کارمزد",
		you: "۰٫۷۲",
		median: "۱٫۰۰",
		percentile: 81,
		tone: "good",
		icon: "percent"
	},
	{
		id: "stability",
		label: "پایداری فروش",
		you: "۱۸٪",
		median: "۲۶٪",
		percentile: 76,
		tone: "good",
		icon: "pulse"
	}
];
/** Normalized 0–10 scores for radar (higher = better). */
var RADAR_AXES = [
	{
		id: "growth",
		label: "رشد فروش",
		you: 7.8,
		median: 5
	},
	{
		id: "sales",
		label: "مبلغ فروش",
		you: 7.8,
		median: 5
	},
	{
		id: "success",
		label: "موفقیت تعدیل‌شده",
		you: 6.2,
		median: 5
	},
	{
		id: "basket",
		label: "متوسط خرید",
		you: 5.7,
		median: 5
	},
	{
		id: "return-rate",
		label: "نرخ بازگشت ۳۰روزه",
		you: 3.1,
		median: 5
	},
	{
		id: "return-sales",
		label: "سهم فروش بازگشتی",
		you: 3.6,
		median: 5
	},
	{
		id: "fee",
		label: "فشار کارمزد",
		you: 8.1,
		median: 5
	},
	{
		id: "stability",
		label: "پایداری فروش",
		you: 7.6,
		median: 5
	}
];
var COHORT_ACTIVITY = {
	peakHours: "۱۸ تا ۲۲",
	yourPercentile: 78,
	similarCount: 18,
	/** Density curve samples 0–100 for SVG path. */
	curve: [
		4,
		6,
		9,
		14,
		22,
		34,
		48,
		62,
		74,
		84,
		90,
		94,
		96,
		94,
		88,
		78,
		64,
		48,
		34,
		22,
		14,
		9,
		6,
		4
	]
};
var LEADERBOARD = [
	{
		id: "a",
		name: "پذیرنده الف",
		score: 92,
		medal: "gold"
	},
	{
		id: "b",
		name: "پذیرنده ب",
		score: 88,
		medal: "silver"
	},
	{
		id: "c",
		name: "پذیرنده ج",
		score: 86,
		medal: "bronze"
	},
	{
		id: "you",
		name: "شما",
		score: 74,
		isYou: true
	}
];
//#endregion
//#region components/peer-position/peer-position-dashboard.tsx
var peerTheme = {
	"--peer-ink": "#1a2148",
	"--peer-subtle": "#6b7590",
	"--peer-line": "#e4e9f3",
	"--peer-wash": "#f6f8fc",
	"--peer-navy": "#171f4a",
	"--peer-violet": "#174fd6",
	"--peer-violet-soft": "#eaf1ff",
	"--peer-violet-line": "#c8d8ff",
	"--peer-teal": "#0f9a84",
	"--peer-teal-soft": "#e7f8f4",
	"--peer-good": "#119a6c",
	"--peer-good-soft": "#e6f7ef",
	"--peer-warn": "#e25555",
	"--peer-warn-soft": "#f6f8fc",
	"--peer-amber": "#e8892d",
	"--peer-yellow": "#ffd60a"
};
var panelClass$1 = "rail-panel rail-panel-interactive [--rail-accent:var(--peer-violet)] [--rail-line:var(--peer-line)]";
var metricIconMap = {
	wallet: Wallet,
	trend: TrendingUp,
	shield: ShieldCheck,
	cart: ShoppingCart,
	users: Users,
	zap: Zap,
	ban: Ban,
	refresh: RefreshCw,
	percent: Percent,
	pulse: Activity
};
var criterionIconMap = {
	store: Store,
	ruler: Ruler,
	coins: Coins,
	hash: Hash,
	clock: Clock,
	repeat: RefreshCw,
	shield: ShieldCheck,
	layers: Layers
};
var iconToneClass = {
	good: "bg-[var(--peer-good-soft)] text-[var(--peer-good)]",
	warn: "bg-[var(--peer-wash)] text-[var(--peer-warn)] ring-1 ring-[var(--peer-line)]",
	neutral: "bg-[var(--peer-violet-soft)] text-[var(--peer-violet)]"
};
var percentileTextClass = {
	good: "text-[var(--peer-good)]",
	warn: "text-[var(--peer-warn)]",
	neutral: "text-[var(--peer-violet)]"
};
function Panel({ title, description, children, className, headingId }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn(panelClass$1, "flex flex-col gap-2.5 p-2.5 sm:p-3", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex flex-col gap-0.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: headingId,
				className: "text-sm font-bold text-[var(--peer-ink)] sm:text-base",
				children: title
			}), description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs leading-5 text-[var(--peer-subtle)]",
				children: description
			}) : null]
		}), children]
	});
}
function PeerHeader() {
	const [periodId, setPeriodId] = (0, import_react.useState)(PEER_PERIODS[0].id);
	const [categoryId, setCategoryId] = (0, import_react.useState)(PEER_CATEGORIES[0].id);
	function handlePeriodChange(value) {
		if (value) setPeriodId(value);
	}
	function handleCategoryChange(value) {
		if (value) setCategoryId(value);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "flex flex-col gap-2.5 md:flex-row md:items-start md:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 items-center gap-2.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex size-10 shrink-0 items-center justify-center rounded-md bg-[var(--peer-yellow)] text-[var(--peer-ink)] sm:size-11",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, {
					className: "size-5",
					"aria-hidden": "true"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 flex-col gap-0.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-lg font-extrabold tracking-tight text-[var(--peer-ink)] sm:text-xl",
					children: "جایگاه شما در میان کسب‌وکارهای مشابه"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-[var(--peer-subtle)] sm:text-sm",
					children: "مقایسه با همتایان هم‌پروفایل · حداقل ۱۰ پذیرنده در گروه"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid w-full shrink-0 grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-2.5 md:w-auto md:min-w-[18rem]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-w-0 sm:min-w-36",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: periodId,
					onValueChange: handlePeriodChange,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger, {
						className: "h-10 w-full border-[var(--peer-line)] bg-card [&>svg:last-child]:text-[var(--peer-violet)]",
						"aria-label": "انتخاب بازه زمانی",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {
							className: "size-4 text-[var(--peer-violet)]",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "min-w-0 flex-1 truncate text-xs font-extrabold text-[var(--peer-ink)]",
							children: "بازه"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: PEER_PERIODS.map((period) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: period.id,
						children: period.label
					}, period.id)) })]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-w-0 sm:min-w-36",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: categoryId,
					onValueChange: handleCategoryChange,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger, {
						className: "h-10 w-full border-[var(--peer-line)] bg-card [&>svg:last-child]:text-[var(--peer-violet)]",
						"aria-label": "انتخاب دسته کسب‌وکار",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Store, {
							className: "size-4 text-[var(--peer-violet)]",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "min-w-0 flex-1 truncate text-xs font-extrabold text-[var(--peer-ink)]",
							children: "دسته"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: PEER_CATEGORIES.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: category.id,
						children: category.label
					}, category.id)) })]
				})
			})]
		})]
	});
}
function PeerStatsBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-label": "خلاصه گروه همتا",
		className: cn(panelClass$1, "grid grid-cols-1 divide-y divide-[var(--peer-line)] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-[1.1fr_1.1fr_0.9fr_auto] lg:divide-x lg:divide-x-reverse"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-0.5 px-2.5 py-2 sm:px-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[11px] text-[var(--peer-subtle)]",
					children: "تعداد همتایان در گروه شما"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-sm font-bold text-[var(--peer-ink)]",
					children: [formatPersianNumber(PEER_GROUP_STATS.peerCount), " پذیرنده"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-0.5 px-2.5 py-2 sm:px-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[11px] text-[var(--peer-subtle)]",
					children: "شما در مقایسه با"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-sm font-bold text-[var(--peer-ink)]",
					children: [formatPersianNumber(PEER_GROUP_STATS.comparedTo), " پذیرنده مشابه"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-0.5 px-2.5 py-2 sm:px-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[11px] text-[var(--peer-subtle)]",
					children: "روش گروه‌بندی"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-2 text-sm font-bold text-[var(--peer-ink)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "size-2 rounded-full bg-[var(--peer-violet)]",
						"aria-hidden": "true"
					}), PEER_GROUP_STATS.groupingMethod]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center px-2.5 py-2 sm:px-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					className: "h-9 w-full cursor-pointer gap-2 border-[var(--peer-violet-line)] text-[var(--peer-violet)] hover:bg-[var(--peer-violet-soft)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { "aria-hidden": "true" }),
						"مشاهده و ویرایش گروه",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
							className: "opacity-60",
							"aria-hidden": "true"
						})
					]
				})
			})
		]
	});
}
function KeyInsightBanner() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
		"aria-labelledby": "peer-key-insight-heading",
		className: "rail-banner p-2.5 sm:p-3",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex flex-col gap-1.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 text-[var(--peer-teal)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, {
					className: "size-3.5",
					"aria-hidden": "true"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "peer-key-insight-heading",
					className: "text-xs font-semibold sm:text-sm",
					children: "بینش کلیدی"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm leading-6 text-white/90",
				children: [
					PEER_KEY_INSIGHT.headline,
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-bold text-white",
						children: ["صدک ", toPersianDigits(PEER_KEY_INSIGHT.growthPercentile)]
					}),
					" — ",
					PEER_KEY_INSIGHT.highlight,
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium text-[var(--peer-teal)]",
						children: PEER_KEY_INSIGHT.takeaway
					})
				]
			})]
		})
	});
}
function PercentileTrack({ bar }) {
	const markerColor = bar.tone === "warn" ? "bg-[var(--peer-amber)]" : "bg-[var(--peer-violet)]";
	const valueColor = percentileTextClass[bar.tone];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "flex min-w-0 flex-col gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
			className: "flex items-baseline justify-between gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs text-[var(--peer-subtle)]",
				children: bar.label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: cn("text-lg font-extrabold tabular-nums", valueColor),
				children: [toPersianDigits(bar.percentile), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "sr-only",
					children: [
						" ",
						"از ۱۰۰؛",
						" ",
						bar.tone === "warn" ? "پایین‌تر از میانه گروه" : "بالاتر یا نزدیک میانه گروه"
					]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-3 rounded-full bg-[var(--peer-wash)]",
			role: "img",
			"aria-label": `${bar.label}: صدک ${toPersianDigits(bar.percentile)}، میانه گروه صدک ${toPersianDigits(bar.median)}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute inset-y-0 rounded-full bg-[var(--peer-violet-soft)]",
					style: {
						right: `${bar.q1}%`,
						width: `${bar.q3 - bar.q1}%`
					},
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute inset-y-0 w-px border-s border-dashed border-[var(--peer-subtle)]",
					style: { right: `${bar.median}%` },
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("absolute top-1/2 size-3 -translate-y-1/2 rounded-full ring-2 ring-white transition-transform duration-300 motion-reduce:transition-none", markerColor),
					style: { right: `calc(${bar.percentile}% - 6px)` },
					"aria-hidden": "true"
				})
			]
		})]
	});
}
function PercentileSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		title: "جایگاه شما در هر شاخص",
		description: "موقعیت شما نسبت به توزیع همتایان (صدک)",
		headingId: "peer-percentile-heading",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			className: "flex flex-wrap items-center justify-center gap-3 text-xs text-[var(--peer-subtle)]",
			"aria-label": "راهنمای نمودار صدک",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "size-2.5 rounded-full bg-[var(--peer-violet)]",
						"aria-hidden": "true"
					}), "صدک شما"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "h-3 w-px border-s border-dashed border-[var(--peer-subtle)]",
						"aria-hidden": "true"
					}), "میانه گروه"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "h-2.5 w-6 rounded-sm bg-[var(--peer-violet-soft)]",
						"aria-hidden": "true"
					}), "بازه میانه ۲۵ تا ۷۵"]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 gap-2.5 sm:grid-cols-2 xl:grid-cols-4",
			children: PERCENTILE_BARS.map((bar) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PercentileTrack, { bar }, bar.id))
		})]
	});
}
function KpiCard({ kpi }) {
	const Icon = metricIconMap[kpi.icon];
	const youTone = kpi.tone === "warn" ? "text-[var(--peer-warn)]" : "text-[var(--peer-ink)]";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn(panelClass$1, "flex flex-col gap-2 p-2.5"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("flex size-9 shrink-0 items-center justify-center rounded-lg", iconToneClass[kpi.tone === "neutral" ? "neutral" : kpi.tone]),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "size-4",
					"aria-hidden": "true"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-xs font-semibold leading-5 text-[var(--peer-ink)]",
				children: kpi.label
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
			className: "mt-auto flex flex-col gap-2 text-xs",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-[var(--peer-subtle)]",
						children: "شما"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: cn("text-sm font-extrabold", youTone),
						children: kpi.you
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-[var(--peer-subtle)]",
						children: "میانه گروه"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "font-medium text-[var(--peer-ink)]",
						children: kpi.median
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline justify-between gap-2 border-t border-[var(--peer-line)] pt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-[var(--peer-subtle)]",
						children: "صدک شما"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
						className: cn("font-bold", percentileTextClass[kpi.tone]),
						children: [
							toPersianDigits(kpi.percentile),
							" از ۱۰۰",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: kpi.tone === "warn" ? " — پایین‌تر از میانه" : " — بالاتر از میانه"
							})
						]
					})]
				})
			]
		})]
	});
}
function KpiGrid() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-labelledby": "peer-kpi-heading",
		className: "flex flex-col gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex flex-col gap-0.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "peer-kpi-heading",
				className: "text-sm font-bold text-[var(--peer-ink)] sm:text-base",
				children: "مقایسه شاخص‌های کلیدی"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-[var(--peer-subtle)]",
				children: "مقادیر شما و جایگاه صدکی نسبت به گروه همتا"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 gap-2 sm:gap-2.5 md:grid-cols-3 xl:grid-cols-5",
			children: PEER_KPIS.map((kpi) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, { kpi }, kpi.id))
		})]
	});
}
function radarPoint(value, index, total, radius) {
	const angle = -Math.PI / 2 + index / total * Math.PI * 2;
	const r = value / 10 * radius;
	return {
		x: 140 + Math.cos(angle) * r,
		y: 140 + Math.sin(angle) * r
	};
}
function polygonPath(values, radius) {
	return values.map((value, index) => {
		const point = radarPoint(value, index, values.length, radius);
		return `${index === 0 ? "M" : "L"}${point.x.toFixed(1)} ${point.y.toFixed(1)}`;
	}).join(" ").concat(" Z");
}
function RadarChart() {
	const radius = 96;
	const youValues = RADAR_AXES.map((axis) => axis.you);
	const medianValues = RADAR_AXES.map((axis) => axis.median);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		title: "نمای کلی عملکرد",
		description: "مقایسه نرمال‌شده شاخص‌ها (۰ بدتر — ۱۰ بهتر)",
		headingId: "peer-radar-heading",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			className: "flex flex-wrap items-center gap-2.5 text-xs text-[var(--peer-subtle)]",
			"aria-label": "راهنمای نمودار رادار",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "h-0.5 w-5 bg-[var(--peer-violet)]",
					"aria-hidden": "true"
				}), "شما"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "h-0 w-5 border-t border-dashed border-[var(--peer-teal)]",
					"aria-hidden": "true"
				}), "میانه گروه"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
			className: "mx-auto w-full max-w-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
				className: "sr-only",
				children: ["نمودار رادار مقایسه شما با میانه گروه در هشت شاخص نرمال‌شده.", RADAR_AXES.map((axis) => ` ${axis.label}: شما ${toPersianDigits(axis.you)}، میانه ${toPersianDigits(axis.median)}.`).join("")]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 280 280",
				className: "mx-auto h-auto w-full",
				role: "img",
				"aria-hidden": "true",
				children: [
					[
						.25,
						.5,
						.75,
						1
					].map((scale) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
						fill: "none",
						stroke: "var(--peer-line)",
						strokeWidth: "1",
						points: RADAR_AXES.map((_, index) => {
							const point = radarPoint(10 * scale, index, RADAR_AXES.length, radius);
							return `${point.x},${point.y}`;
						}).join(" ")
					}, scale)),
					RADAR_AXES.map((axis, index) => {
						const tip = radarPoint(10, index, RADAR_AXES.length, radius);
						const label = radarPoint(10, index, RADAR_AXES.length, radius + 22);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: 140,
							y1: 140,
							x2: tip.x,
							y2: tip.y,
							stroke: "var(--peer-line)",
							strokeWidth: "1"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: label.x,
							y: label.y,
							textAnchor: "middle",
							dominantBaseline: "middle",
							className: "fill-[var(--peer-subtle)] text-[9px]",
							children: axis.label
						})] }, axis.id);
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: polygonPath(medianValues, radius),
						fill: "color-mix(in oklch, var(--peer-teal) 12%, transparent)",
						stroke: "var(--peer-teal)",
						strokeWidth: "1.75",
						strokeDasharray: "4 3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: polygonPath(youValues, radius),
						fill: "color-mix(in oklch, var(--peer-violet) 16%, transparent)",
						stroke: "var(--peer-violet)",
						strokeWidth: "2"
					}),
					youValues.map((value, index) => {
						const point = radarPoint(value, index, youValues.length, radius);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: point.x,
							cy: point.y,
							r: "3.5",
							fill: "var(--peer-violet)"
						}, `you-${RADAR_AXES[index].id}`);
					})
				]
			})]
		})]
	});
}
function CohortCurve() {
	const width = 320;
	const height = 140;
	const paddingX = 12;
	const paddingY = 16;
	const values = COHORT_ACTIVITY.curve;
	const max = Math.max(...values);
	const points = values.map((value, index) => {
		return {
			x: paddingX + index / (values.length - 1) * (width - paddingX * 2),
			y: height - paddingY - value / max * (height - paddingY * 2)
		};
	});
	const path = points.map((point, index) => `${index === 0 ? "M" : "L"}${point.x.toFixed(1)} ${point.y.toFixed(1)}`).join(" ");
	const marker = points[Math.round(COHORT_ACTIVITY.yourPercentile / 100 * (values.length - 1))] ?? points[points.length - 1];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "flex flex-col gap-2.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
				className: "sr-only",
				children: [
					"توزیع پذیرندگان در cohort فعالیتی؛ جایگاه شما صدک",
					" ",
					toPersianDigits(COHORT_ACTIVITY.yourPercentile),
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-start justify-between gap-2.5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-[var(--peer-subtle)]",
						children: "جایگاه شما"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-[var(--peer-subtle)]",
						children: "درصد پذیرندگان"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-3xl font-extrabold text-[var(--peer-violet)]",
						children: [toPersianDigits(COHORT_ACTIVITY.yourPercentile), "٪"]
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: `0 0 ${width} ${height}`,
				className: "h-auto w-full",
				role: "img",
				"aria-hidden": "true",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: path,
						fill: "none",
						stroke: "var(--peer-violet)",
						strokeWidth: "2.5",
						strokeLinecap: "round"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: marker.x,
						y1: marker.y,
						x2: marker.x,
						y2: height - paddingY,
						stroke: "var(--peer-violet)",
						strokeWidth: "1.5",
						strokeDasharray: "3 3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: marker.x,
						cy: marker.y,
						r: "5",
						fill: "var(--peer-violet)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: paddingX,
						y: height - 2,
						className: "fill-[var(--peer-subtle)] text-[10px]",
						children: "۰٪"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: width / 2,
						y: height - 2,
						textAnchor: "middle",
						className: "fill-[var(--peer-subtle)] text-[10px]",
						children: "۵۰٪"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: width - paddingX,
						y: height - 2,
						textAnchor: "end",
						className: "fill-[var(--peer-subtle)] text-[10px]",
						children: "۱۰۰٪"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "rounded-lg bg-[var(--peer-wash)] px-2.5 py-2 text-center text-xs text-[var(--peer-subtle)]",
				children: [
					"تعداد پذیرندگان با الگوی زمانی مشابه:",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-[var(--peer-ink)]",
						children: toPersianDigits(COHORT_ACTIVITY.similarCount)
					})
				]
			})
		]
	});
}
function Leaderboard() {
	const medalClass = {
		gold: "text-amber-500",
		silver: "text-slate-400",
		bronze: "text-orange-700"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "text-sm font-bold text-[var(--peer-ink)]",
			children: "پذیرندگان برتر گروه شما"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-[var(--peer-subtle)]",
			children: "بر اساس ترکیب چند شاخص کلیدی"
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "flex flex-col gap-2",
			children: LEADERBOARD.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: cn("flex min-h-11 items-center justify-between gap-2.5 rounded-lg border px-2.5 py-2 text-sm", row.isYou ? "border-[var(--peer-violet-line)] bg-[var(--peer-violet-soft)]" : "border-[var(--peer-line)] bg-card"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						row.medal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Medal, {
							className: cn("size-4", medalClass[row.medal]),
							"aria-hidden": "true"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "size-4",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-[var(--peer-ink)]",
							children: row.name
						}),
						row.medal === "gold" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] text-[var(--peer-subtle)]",
							children: "صدک کلی"
						}) : null
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-extrabold tabular-nums text-[var(--peer-ink)]",
					children: toPersianDigits(row.score)
				})]
			}, row.id))
		})]
	});
}
function CohortLeaderboardSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
		className: "self-start",
		title: "مقایسه در Cohort فعالیتی شما",
		description: `ساعت اوج خرید شما: ${COHORT_ACTIVITY.peakHours}`,
		headingId: "peer-cohort-heading",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-2.5 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CohortCurve, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaderboard, {})]
		})
	});
}
function PeerGroupAside() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		"aria-labelledby": "peer-group-heading",
		className: cn(panelClass$1, "flex h-fit flex-col gap-2.5 p-2.5 sm:p-3 lg:sticky lg:top-4"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex flex-col gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "peer-group-heading",
					className: "text-sm font-bold text-[var(--peer-ink)] sm:text-base",
					children: "گروه همتا (Peer Group)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs leading-5 text-[var(--peer-subtle)]",
					children: "پذیرندگان با ویژگی‌های مشابه شما"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid grid-cols-1 gap-0 divide-y divide-[var(--peer-line)] sm:grid-cols-2 sm:gap-2 sm:divide-y-0 lg:grid-cols-1 lg:gap-0 lg:divide-y",
				children: PEER_CRITERIA.map((item) => {
					const Icon = criterionIconMap[item.icon];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-2 py-2 text-xs text-[var(--peer-ink)] sm:rounded-lg sm:border sm:border-[var(--peer-line)] sm:px-2 sm:py-2 lg:rounded-none lg:border-0 lg:px-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-7 shrink-0 items-center justify-center rounded-md bg-[var(--peer-teal-soft)] text-[var(--peer-teal)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-3.5",
								"aria-hidden": "true"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "leading-5",
							children: item.label
						})]
					}, item.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "flex items-start gap-2 rounded-lg bg-[var(--peer-violet-soft)] px-2.5 py-2 text-[11px] leading-5 text-[var(--peer-ink)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
					className: "mt-0.5 size-3.5 shrink-0 text-[var(--peer-violet)]",
					"aria-hidden": "true"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "داده‌ها ترکیبی و بدون افشای هویت هستند." })]
			})
		]
	});
}
function Disclaimer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "flex items-start justify-center gap-2 px-2 text-center text-xs leading-5 text-[var(--peer-subtle)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
			className: "mt-0.5 size-3.5 shrink-0",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "اعداد و صدک‌ها بر اساس داده‌های مشاهده‌شده شما و همتایان در بازه انتخابی محاسبه شده‌اند و تضمینی برای آینده نیستند." })]
	});
}
function PeerPositionDashboard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-2.5",
		style: peerTheme,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PeerHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PeerStatsBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-2.5 lg:grid-cols-[minmax(0,1fr)_15rem]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 flex-col gap-2.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyInsightBanner, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PercentileSection, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiGrid, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							"aria-label": "نمودارهای مقایسه‌ای",
							className: "grid grid-cols-1 gap-2.5 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadarChart, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CohortLeaderboardSection, {})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PeerGroupAside, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, {})
		]
	});
}
//#endregion
//#region components/pages/peer-position-page.tsx
function PeerPositionPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PeerPositionDashboard, {});
}
//#endregion
//#region components/sales-pulse/cumulative-trend-chart.tsx
function CumulativeTrendChart({ data }) {
	const width = 520;
	const height = 200;
	const padding = {
		top: 16,
		right: 12,
		bottom: 32,
		left: 40
	};
	const chartWidth = width - padding.left - padding.right;
	const chartHeight = height - padding.top - padding.bottom;
	const values = data.flatMap((point) => [point.actual, point.baseline]);
	const maxValue = Math.max(...values) * 1.08;
	const minValue = 0;
	const xStep = chartWidth / (data.length - 1);
	const toX = (index) => padding.left + index * xStep;
	const toY = (value) => padding.top + chartHeight - (value - minValue) / (maxValue - minValue) * chartHeight;
	const actualPath = data.map((point, index) => `${index === 0 ? "M" : "L"} ${toX(index)} ${toY(point.actual)}`).join(" ");
	const baselinePath = data.map((point, index) => `${index === 0 ? "M" : "L"} ${toX(index)} ${toY(point.baseline)}`).join(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
				className: "sr-only",
				children: "روند تجمعی فروش موفق در بازه مناسبت در مقایسه با baseline"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: `0 0 ${width} ${height}`,
				className: "h-auto w-full max-h-52",
				role: "img",
				"aria-label": "نمودار خطی روند تجمعی فروش موفق",
				children: [
					[
						0,
						.25,
						.5,
						.75,
						1
					].map((tick) => {
						const y = padding.top + chartHeight * (1 - tick);
						const value = minValue + (maxValue - minValue) * tick;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: padding.left,
							x2: width - padding.right,
							y1: y,
							y2: y,
							className: "stroke-border",
							strokeDasharray: "4 4"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: padding.left - 6,
							y: y + 4,
							textAnchor: "end",
							className: "fill-muted-foreground text-[9px]",
							children: formatPersianNumber(value, { maximumFractionDigits: 0 })
						})] }, tick);
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: baselinePath,
						fill: "none",
						className: "stroke-muted-foreground/60",
						strokeWidth: "2",
						strokeDasharray: "6 4"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: actualPath,
						fill: "none",
						className: "stroke-[var(--pulse-good)]",
						strokeWidth: "2.5",
						strokeLinecap: "round",
						strokeLinejoin: "round"
					}),
					data.map((point, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: toX(index),
						cy: toY(point.actual),
						r: "3.5",
						className: "fill-[var(--pulse-good)]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: toX(index),
						y: height - 8,
						textAnchor: "middle",
						className: "fill-muted-foreground text-[9px]",
						children: point.date
					})] }, point.date))
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex flex-wrap justify-center gap-3 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-block h-0.5 w-5 rounded bg-[var(--pulse-good)]",
						"aria-hidden": "true"
					}), "عملکرد واقعی"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-block h-0.5 w-5 rounded border-t-2 border-dashed border-muted-foreground/60",
						"aria-hidden": "true"
					}), "baseline"]
				})]
			})
		]
	});
}
//#endregion
//#region components/sales-pulse/growth-charts.tsx
function formatFactorValue(value) {
	return `${value > 0 ? "+" : ""}${formatPersianNumber(value, { maximumFractionDigits: 1 })}٪`;
}
function GrowthWaterfall({ factors, total }) {
	const maxBarHeight = 128;
	const maxAbs = Math.max(...factors.map((f) => Math.abs(f.value)), total);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "flex h-full flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
			className: "sr-only",
			children: [
				"نمودار آبشاری تجزیه رشد فروش:",
				" ",
				factors.map((f) => `${f.label} ${formatFactorValue(f.value)}`).join("، "),
				" ",
				"مجموع ",
				formatPersianNumber(total),
				"٪"
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 items-end justify-center gap-2.5 px-2 pt-3 sm:gap-3",
			"aria-hidden": "true",
			children: [factors.map((factor) => {
				const barHeight = Math.abs(factor.value) / maxAbs * maxBarHeight;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex max-w-16 flex-1 flex-col items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("text-xs font-semibold tabular-nums", factor.positive ? "text-[var(--pulse-good)]" : "text-[var(--pulse-warn)]"),
							children: formatFactorValue(factor.value)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex w-full max-w-10 items-end justify-center",
							style: { height: maxBarHeight },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: cn("w-full rounded-t-md motion-reduce:transition-none", factor.positive ? "bg-[var(--pulse-good)]" : "bg-[var(--pulse-warn)]"),
								style: { height: Math.max(barHeight, 8) }
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-center text-[11px] leading-tight text-muted-foreground",
							children: factor.label
						})
					]
				}, factor.label);
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex max-w-16 flex-1 flex-col items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs font-bold text-[var(--pulse-good)]",
						children: [
							"+",
							formatPersianNumber(total),
							"٪"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex w-full max-w-10 items-end justify-center",
						style: { height: maxBarHeight },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-full rounded-t-md bg-[var(--pulse-good)]",
							style: { height: total / maxAbs * maxBarHeight }
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-center text-[11px] font-medium leading-tight",
						children: "رشد خالص فروش"
					})
				]
			})]
		})]
	});
}
function GrowthDonut({ total }) {
	const radius = 54;
	const circumference = 2 * Math.PI * radius;
	const dashOffset = circumference * (1 - Math.min(total / 40, 1));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto flex size-36 items-center justify-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 128 128",
			className: "size-full -rotate-90 motion-reduce:rotate-0",
			"aria-hidden": "true",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "64",
				cy: "64",
				r: radius,
				fill: "none",
				className: "stroke-muted",
				strokeWidth: "12"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "64",
				cy: "64",
				r: radius,
				fill: "none",
				className: "stroke-[var(--pulse-good)]",
				strokeWidth: "12",
				strokeLinecap: "round",
				strokeDasharray: circumference,
				strokeDashoffset: dashOffset
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 flex flex-col items-center justify-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-2xl font-bold text-[var(--pulse-good)]",
				children: [
					"+",
					formatPersianNumber(total),
					"٪"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs text-muted-foreground",
				children: "رشد کل"
			})]
		})]
	});
}
function GrowthBreakdownBlocks({ factors, total }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-center justify-center gap-2 text-sm",
		"aria-hidden": "true",
		children: [
			factors.map((factor, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [index > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted-foreground",
					children: factor.positive ? "+" : "−"
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: cn("rounded-lg px-2.5 py-1.5 font-medium", factor.positive ? "bg-[var(--pulse-good)]/10 text-[var(--pulse-good)]" : "bg-[var(--pulse-wash)] text-[var(--pulse-warn)] ring-1 ring-[var(--pulse-line)]"),
					children: [
						factor.label,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-bold",
							children: formatFactorValue(factor.value)
						})
					]
				})]
			}, factor.label)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground",
				children: "="
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "rounded-md bg-[var(--pulse-good)] px-2.5 py-1.5 font-bold text-white",
				children: [formatPersianNumber(total), "٪ رشد کل"]
			})
		]
	});
}
//#endregion
//#region components/sales-pulse/hourly-impact-chart.tsx
function HourlyImpactChart({ data }) {
	const width = 360;
	const height = 136;
	const padding = {
		top: 10,
		right: 8,
		bottom: 24,
		left: 8
	};
	const chartWidth = width - padding.left - padding.right;
	const chartHeight = height - padding.top - padding.bottom;
	const midY = padding.top + chartHeight / 2;
	const maxAbs = Math.max(...data.map((item) => Math.abs(item.value)), 1);
	const barWidth = chartWidth / data.length - 6;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "sr-only",
			children: "توزیع اثر خالص رشد فروش بر اساس ساعت روز"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: `0 0 ${width} ${height}`,
			className: "h-auto w-full max-h-36",
			role: "img",
			"aria-label": "نمودار میله‌ای اثر رشد بر اساس ساعت",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: padding.left,
				x2: width - padding.right,
				y1: midY,
				y2: midY,
				className: "stroke-border"
			}), data.map((item, index) => {
				const barHeight = Math.abs(item.value) / maxAbs * (chartHeight / 2 - 4);
				const x = padding.left + index * (chartWidth / data.length) + 3;
				const y = item.value >= 0 ? midY - barHeight : midY;
				const positive = item.value >= 0;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x,
						y,
						width: barWidth,
						height: Math.max(barHeight, 2),
						rx: 3,
						className: cn(positive ? "fill-[var(--pulse-good)]" : "fill-[var(--pulse-blue)]")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: x + barWidth / 2,
						y: height - 8,
						textAnchor: "middle",
						className: "fill-muted-foreground text-[9px]",
						children: item.label
					}),
					Math.abs(item.value) >= 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
						x: x + barWidth / 2,
						y: positive ? y - 4 : y + barHeight + 12,
						textAnchor: "middle",
						className: cn("text-[8px] font-medium", positive ? "fill-[var(--pulse-good)]" : "fill-[var(--pulse-blue)]"),
						children: [
							item.value > 0 ? "+" : "",
							formatPersianNumber(item.value, { maximumFractionDigits: 1 }),
							"٪"
						]
					}) : null
				] }, item.hour);
			})]
		})]
	});
}
//#endregion
//#region lib/sales-pulse-mock-data.ts
var SALES_PULSE_PERIODS = [
	{
		id: "nowruz-1403",
		label: "نوروز ۱۴۰۳",
		range: "۱۵ اسفند ۱۴۰۳ – ۴ فروردین ۱۴۰۴"
	},
	{
		id: "yalda-1403",
		label: "یلدا ۱۴۰۳",
		range: "۲۹ آذر – ۱ دی ۱۴۰۳"
	},
	{
		id: "black-friday",
		label: "جمعه سیاه",
		range: "۲۴ – ۳۰ آبان ۱۴۰۳"
	}
];
var SALES_PULSE_MERCHANTS = [
	{
		id: "merchant-a",
		label: "پذیرنده الف"
	},
	{
		id: "merchant-b",
		label: "پذیرنده ب"
	},
	{
		id: "merchant-c",
		label: "پذیرنده ج"
	}
];
var SALES_PULSE_KPIS = [
	{
		id: "successful-count",
		label: "تعداد خرید موفق",
		value: "۱۲۳٬۴۵۰",
		change: "+۲۶٪",
		changeType: "percent",
		baseline: "۹۸٬۰۰۰",
		baselineLabel: "baseline",
		trend: [
			72,
			78,
			75,
			82,
			88,
			91,
			95,
			100
		],
		accent: "emerald",
		icon: "receipt"
	},
	{
		id: "sales-amount",
		label: "مبلغ فروش موفق",
		value: "۴۲٫۸",
		unit: "میلیارد تومان",
		change: "+۲۷٪",
		changeType: "percent",
		baseline: "۳۳٫۷",
		baselineLabel: "baseline",
		trend: [
			68,
			74,
			79,
			83,
			87,
			92,
			96,
			100
		],
		accent: "violet",
		icon: "wallet"
	},
	{
		id: "avg-basket",
		label: "متوسط مبلغ هر خرید",
		value: "۳۴۷",
		unit: "هزار تومان",
		change: "+۸٪",
		changeType: "percent",
		baseline: "۳۲۱",
		baselineLabel: "baseline",
		trend: [
			88,
			89,
			90,
			91,
			93,
			95,
			97,
			100
		],
		accent: "blue",
		icon: "basket"
	},
	{
		id: "success-rate",
		label: "نرخ موفقیت پرداخت",
		value: "۸۴٫۷٪",
		change: "+۳٫۲",
		changeType: "points",
		baseline: "۸۱٫۵٪",
		baselineLabel: "baseline",
		trend: [
			78,
			80,
			81,
			82,
			83,
			84,
			84.5,
			84.7
		],
		accent: "emerald",
		icon: "check"
	},
	{
		id: "returning-share",
		label: "سهم کارت‌های بازگشتی",
		value: "۲۸٫۶٪",
		change: "+۶٫۱",
		changeType: "points",
		baseline: "۲۲٫۵٪",
		baselineLabel: "baseline",
		trend: [
			62,
			65,
			68,
			72,
			76,
			80,
			84,
			86
		],
		accent: "amber",
		icon: "users"
	}
];
var SALES_PULSE_GROWTH_FACTORS = [
	{
		label: "اثر تعداد خرید",
		value: 19,
		positive: true
	},
	{
		label: "اثر متوسط سبد",
		value: 8,
		positive: true
	},
	{
		label: "اثر نرخ موفقیت",
		value: 1.8,
		positive: true
	},
	{
		label: "اثر کارت بازگشتی",
		value: -1.8,
		positive: false
	}
];
var SALES_PULSE_INSIGHT = {
	headline: "فروش موفق ۲۷٪ بالاتر از baseline مورد انتظار بود.",
	bullets: [
		"بیشترین سهم رشد از افزایش تعداد خرید (+۱۹٪) و متوسط سبد (+۸٪) آمده است.",
		"پیک فروش بین ۱۸:۰۰ تا ۲۱:۰۰ مشاهده شد؛ سهم این بازه ۳۴٪ از کل رشد است.",
		"سهم کارت‌های بازگشتی ۶٫۱ واحد درصدی بالاتر رفت، اما اثر خالص تجزیه رشد منفی بود."
	],
	action: "پیشنهاد: کمپین بازگشت مشتری برای ساعات غیرپیک ۱۲:۰۰–۱۵:۰۰ را آزمایش کنید."
};
var SALES_PULSE_CUMULATIVE_TREND = [
	{
		date: "۲۵ بهمن",
		actual: 4.2,
		baseline: 3.8
	},
	{
		date: "۲۸ بهمن",
		actual: 9.1,
		baseline: 8
	},
	{
		date: "۲ اسفند",
		actual: 14.8,
		baseline: 12.5
	},
	{
		date: "۵ اسفند",
		actual: 21.3,
		baseline: 17.2
	},
	{
		date: "۸ اسفند",
		actual: 27.6,
		baseline: 22.1
	},
	{
		date: "۱۱ اسفند",
		actual: 33.4,
		baseline: 27
	},
	{
		date: "۱۴ اسفند",
		actual: 38.9,
		baseline: 31.8
	},
	{
		date: "۱۷ اسفند",
		actual: 42.8,
		baseline: 33.7
	}
];
var SALES_PULSE_HOURLY_IMPACT = [
	{
		hour: 0,
		label: "۰",
		value: -2.1
	},
	{
		hour: 3,
		label: "۳",
		value: -1.4
	},
	{
		hour: 6,
		label: "۶",
		value: .8
	},
	{
		hour: 9,
		label: "۹",
		value: 3.2
	},
	{
		hour: 12,
		label: "۱۲",
		value: 5.6
	},
	{
		hour: 15,
		label: "۱۵",
		value: 7.1
	},
	{
		hour: 18,
		label: "۱۸",
		value: 11.4
	},
	{
		hour: 21,
		label: "۲۱",
		value: 8.9
	}
];
var HEATMAP_DAYS = [
	"شنبه",
	"یکشنبه",
	"دوشنبه",
	"سه‌شنبه",
	"چهارشنبه",
	"پنجشنبه",
	"جمعه"
];
var HEATMAP_BLOCKS = [
	"۰–۳",
	"۳–۶",
	"۶–۹",
	"۹–۱۲",
	"۱۲–۱۵",
	"۱۵–۱۸",
	"۱۸–۲۱",
	"۲۱–۲۴"
];
var SALES_PULSE_HEATMAP = [
	[
		-.8,
		-1.2,
		.4,
		1.8,
		2.4,
		3.1,
		5.6,
		2.2
	],
	[
		-.5,
		-.9,
		.6,
		2.1,
		2.8,
		3.4,
		6.1,
		2.8
	],
	[
		-.3,
		-.6,
		.9,
		2.4,
		3,
		3.8,
		6.4,
		3
	],
	[
		.1,
		-.4,
		1.1,
		2.6,
		3.2,
		4,
		6.8,
		3.2
	],
	[
		.3,
		-.2,
		1.3,
		2.9,
		3.5,
		4.3,
		7.1,
		3.5
	],
	[
		.5,
		0,
		1.5,
		3.1,
		3.8,
		4.6,
		7.4,
		3.8
	],
	[
		-.2,
		-.7,
		.7,
		2,
		2.6,
		3.3,
		5.9,
		2.5
	]
];
var SALES_PULSE_QUICK_COMPARISON = [
	{
		label: "تعداد خرید موفق",
		value: "+۲۶٪"
	},
	{
		label: "مبلغ فروش موفق",
		value: "+۲۷٪"
	},
	{
		label: "متوسط مبلغ هر خرید",
		value: "+۸٪"
	},
	{
		label: "نرخ موفقیت پرداخت",
		value: "+۳٫۲"
	},
	{
		label: "سهم کارت‌های بازگشتی",
		value: "+۶٫۱"
	}
];
//#endregion
//#region components/sales-pulse/impact-heatmap.tsx
function cellColor(value) {
	if (value >= 6) return "bg-[var(--pulse-good)] text-white";
	if (value >= 4) return "bg-[color-mix(in_oklch,var(--pulse-good)_82%,white)] text-white";
	if (value >= 2) return "bg-[color-mix(in_oklch,var(--pulse-good)_48%,white)] text-[var(--pulse-ink)]";
	if (value >= .5) return "bg-[color-mix(in_oklch,var(--pulse-good)_28%,white)] text-[var(--pulse-ink)]";
	if (value >= 0) return "bg-[var(--pulse-wash)] text-[var(--pulse-ink)]";
	if (value >= -.5) return "bg-[color-mix(in_oklch,var(--pulse-blue)_14%,white)] text-[var(--pulse-ink)]";
	return "bg-[color-mix(in_oklch,var(--pulse-blue)_32%,white)] text-[var(--pulse-ink)]";
}
function ImpactHeatmap({ values }) {
	const cells = HEATMAP_DAYS.flatMap((day, dayIndex) => HEATMAP_BLOCKS.map((block, blockIndex) => ({
		day,
		block,
		value: values[dayIndex]?.[blockIndex] ?? 0
	})));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "w-full overflow-x-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
				className: "sr-only",
				children: "ماتریس اثر خالص رشد بر اساس روز هفته و بازه ساعتی"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-w-[360px]",
				role: "grid",
				"aria-label": "ماتریس اثر رشد بر اساس روز و ساعت",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-[3.75rem_repeat(8,minmax(2rem,1fr))] gap-0.5 text-[9px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { "aria-hidden": "true" }),
						HEATMAP_BLOCKS.map((block) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pb-0.5 text-center font-medium text-muted-foreground",
							role: "columnheader",
							children: block
						}, block)),
						HEATMAP_DAYS.map((day, dayIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "contents",
							role: "row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center font-medium text-muted-foreground",
								role: "rowheader",
								children: day
							}), HEATMAP_BLOCKS.map((block, blockIndex) => {
								const value = values[dayIndex]?.[blockIndex] ?? 0;
								const sign = value > 0 ? "+" : "";
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									role: "gridcell",
									title: `${day} · ${block}: ${sign}${formatPersianNumber(value, { maximumFractionDigits: 1 })}٪`,
									className: cn("flex h-6 items-center justify-center rounded-sm text-[8px] font-medium tabular-nums motion-reduce:transition-none sm:h-7 sm:text-[9px]", cellColor(value)),
									children: Math.abs(value) >= 1 ? `${sign}${formatPersianNumber(value, { maximumFractionDigits: 1 })}` : ""
								}, `${day}-${block}`);
							})]
						}, day))
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-1.5 flex flex-wrap items-center gap-2 text-[10px] text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "کمتر" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-0.5",
						"aria-hidden": "true",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-sm bg-[color-mix(in_oklch,var(--pulse-blue)_32%,white)]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-sm bg-[color-mix(in_oklch,var(--pulse-blue)_14%,white)]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-sm bg-[var(--pulse-wash)]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-sm bg-[color-mix(in_oklch,var(--pulse-good)_48%,white)]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-sm bg-[var(--pulse-good)]" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "بیشتر" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "sr-only",
				children: cells.filter((cell) => Math.abs(cell.value) >= 2).map((cell) => `${cell.day} ${cell.block}: ${cell.value}٪`).join("؛ ")
			})
		]
	});
}
//#endregion
//#region components/sales-pulse/insight-panel.tsx
function InsightPanel({ headline, bullets, action, variant = "panel" }) {
	if (variant === "card") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
		className: "rounded-lg border border-[var(--pulse-violet-line)] bg-[var(--pulse-violet-soft)] p-2.5",
		"aria-labelledby": "sales-pulse-insight-heading",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex size-8 shrink-0 items-center justify-center rounded-lg bg-[var(--pulse-violet)]/15 text-[var(--pulse-violet)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, {
					className: "size-3.5",
					"aria-hidden": "true"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						id: "sales-pulse-insight-heading",
						className: "text-sm font-semibold text-[var(--pulse-ink)]",
						children: "بینش"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-6 text-[var(--pulse-ink)]",
						children: headline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex list-inside list-disc flex-col gap-1 text-xs text-[var(--pulse-subtle)]",
						children: bullets.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "rounded-lg bg-card/80 px-2.5 py-2 text-xs ring-1 ring-[var(--pulse-line)] sm:text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-[var(--pulse-violet)]",
							children: "پیشنهاد: "
						}), action]
					})
				]
			})]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "rail-banner flex h-full flex-col gap-2.5 p-2.5 sm:p-3",
		"aria-labelledby": "sales-pulse-insight-heading",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex items-center gap-2 text-[var(--pulse-teal)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, {
					className: "size-3.5",
					"aria-hidden": "true"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					id: "sales-pulse-insight-heading",
					className: "text-sm font-bold text-white",
					children: "بینش کلیدی"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "relative text-sm leading-6 text-white/90",
				children: headline
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "relative flex flex-col gap-1.5 text-xs text-white/80 sm:text-sm",
				children: bullets.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						className: "mt-1.5 size-1.5 shrink-0 rounded-full bg-[var(--pulse-teal)]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
				}, item))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-auto flex gap-2 rounded-lg border border-white/15 bg-white/10 p-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, {
					className: "size-3.5 shrink-0 text-[var(--pulse-teal)]",
					"aria-hidden": "true"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs leading-5 text-white/90 sm:text-sm sm:leading-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-[var(--pulse-teal)]",
						children: "پیشنهاد: "
					}), action]
				})]
			})
		]
	});
}
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ShoppingBasket = createLucideIcon("shopping-basket", [
	["path", {
		d: "m15 11-1 9",
		key: "5wnq3a"
	}],
	["path", {
		d: "m19 11-4-7",
		key: "cnml18"
	}],
	["path", {
		d: "M2 11h20",
		key: "3eubbj"
	}],
	["path", {
		d: "m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4",
		key: "yiazzp"
	}],
	["path", {
		d: "M4.5 15.5h15",
		key: "13mye1"
	}],
	["path", {
		d: "m5 11 4-7",
		key: "116ra9"
	}],
	["path", {
		d: "m9 11 1 9",
		key: "1ojof7"
	}]
]);
//#endregion
//#region components/sales-pulse/sparkline.tsx
var accentStroke = {
	emerald: "stroke-[var(--pulse-good)]",
	violet: "stroke-[var(--pulse-violet)]",
	blue: "stroke-[var(--pulse-blue)]",
	amber: "stroke-[var(--pulse-amber)]"
};
function Sparkline({ data, accent = "emerald", className, width = 88, height = 36 }) {
	if (data.length < 2) return null;
	const min = Math.min(...data);
	const range = Math.max(...data) - min || 1;
	const points = data.map((value, index) => {
		return `${index / (data.length - 1) * width},${height - (value - min) / range * (height - 4) - 2}`;
	}).join(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		width,
		height,
		viewBox: `0 0 ${width} ${height}`,
		"aria-hidden": "true",
		className: cn("overflow-visible", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", {
			fill: "none",
			className: cn(accentStroke[accent], "motion-reduce:transition-none"),
			strokeWidth: "2",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			points
		})
	});
}
//#endregion
//#region components/sales-pulse/kpi-scorecard.tsx
var iconMap = {
	receipt: Receipt,
	wallet: Wallet,
	basket: ShoppingBasket,
	check: CircleCheck,
	users: Users
};
var accentStyles = {
	emerald: {
		icon: "bg-[var(--pulse-good)]/10 text-[var(--pulse-good)]",
		change: "text-[var(--pulse-good)]"
	},
	violet: {
		icon: "bg-[var(--pulse-violet-soft)] text-[var(--pulse-violet)]",
		change: "text-[var(--pulse-violet)]"
	},
	blue: {
		icon: "bg-[var(--pulse-blue-soft)] text-[var(--pulse-blue)]",
		change: "text-[var(--pulse-blue)]"
	},
	amber: {
		icon: "bg-[var(--pulse-amber-soft)] text-[var(--pulse-amber)]",
		change: "text-[var(--pulse-amber)]"
	}
};
function KpiScorecard({ kpi }) {
	const Icon = iconMap[kpi.icon];
	const styles = accentStyles[kpi.accent];
	const changeSuffix = kpi.changeType === "points" ? " واحد درصدی نسبت به baseline" : " نسبت به baseline";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn("rail-panel rail-panel-interactive flex flex-col gap-2 p-2.5 [--rail-accent:var(--pulse-blue)] [--rail-line:var(--pulse-line)]"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 flex-col gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("flex size-8 items-center justify-center rounded-lg", styles.icon),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "size-3.5",
						"aria-hidden": "true"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-[11px] font-semibold text-[var(--pulse-subtle)]",
					children: kpi.label
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkline, {
				data: kpi.trend,
				accent: kpi.accent
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-auto flex flex-col gap-0.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-lg font-extrabold tracking-tight text-[var(--pulse-ink)] sm:text-xl",
					children: [kpi.value, kpi.unit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ms-1 text-xs font-normal text-[var(--pulse-subtle)] sm:text-sm",
						children: kpi.unit
					}) : null]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: cn("flex items-center gap-1 text-xs font-medium sm:text-sm", styles.change),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, {
						className: "size-3.5 shrink-0",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [kpi.change, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-normal text-[var(--pulse-subtle)]",
						children: changeSuffix
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[11px] text-[var(--pulse-subtle)]",
					children: [
						kpi.baselineLabel,
						": ",
						kpi.baseline,
						kpi.unit && kpi.id !== "sales-amount" && kpi.id !== "avg-basket" ? "" : kpi.unit ? ` ${kpi.unit}` : ""
					]
				})
			]
		})]
	});
}
function KpiScorecardGrid({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-label": "شاخص‌های کلیدی عملکرد",
		className: "grid grid-cols-2 gap-2 sm:gap-2.5 md:grid-cols-3 xl:grid-cols-5",
		children
	});
}
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CalendarRange = createLucideIcon("calendar-range", [
	["rect", {
		x: "3",
		y: "3",
		width: "18",
		height: "18",
		rx: "2",
		key: "h1oib"
	}],
	["path", {
		d: "M16 2v3",
		key: "otl347"
	}],
	["path", {
		d: "M3 9h18",
		key: "1pudct"
	}],
	["path", {
		d: "M8 2v3",
		key: "1ioesn"
	}],
	["path", {
		d: "M17 13h-6",
		key: "1qbiup"
	}],
	["path", {
		d: "M13 17H7",
		key: "1x38vv"
	}],
	["path", {
		d: "M7 13h.01",
		key: "1vezk1"
	}],
	["path", {
		d: "M17 17h.01",
		key: "1sd3ek"
	}]
]);
//#endregion
//#region components/sales-pulse/period-toolbar.tsx
function PeriodToolbar({ periodId, merchantId, onPeriodChange, onMerchantChange, variant = "panel" }) {
	const isInline = variant === "inline";
	const period = SALES_PULSE_PERIODS.find((item) => item.id === periodId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn(isInline ? "flex w-full flex-col gap-2 lg:w-auto" : "rail-panel flex flex-col gap-2 p-2.5 [--rail-line:var(--pulse-line)] sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-2.5 sm:p-3"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("grid w-full grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-2.5", isInline ? "lg:w-auto lg:min-w-[18rem]" : "sm:w-auto"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-w-0 sm:min-w-36",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: merchantId,
					onValueChange: onMerchantChange,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger, {
						className: "h-10 w-full justify-start gap-2 rounded-lg border-[var(--pulse-line)] bg-card px-3 py-2 text-start hover:border-[var(--pulse-blue-line)] hover:bg-[var(--pulse-wash)] data-[popup-open]:border-[var(--pulse-blue-line)] data-[popup-open]:bg-[var(--pulse-wash)] [&>svg:last-child]:text-[var(--pulse-blue)]",
						"aria-label": "انتخاب پذیرنده",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Store, {
							className: "size-4 shrink-0 text-[var(--pulse-blue)]",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "min-w-0 flex-1 truncate text-xs font-extrabold text-[var(--pulse-ink)]",
							children: "پذیرنده"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
						className: "min-w-56 rounded-lg p-1.5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectGroup, { children: SALES_PULSE_MERCHANTS.map((merchant, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: merchant.id,
							label: merchant.label,
							className: "py-2 pe-8 ps-2 data-highlighted:bg-[var(--pulse-wash)] data-selected:bg-[var(--pulse-blue-soft)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex min-w-0 flex-col gap-0.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-semibold text-[var(--pulse-ink)]",
									children: merchant.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] text-[var(--pulse-subtle)]",
									children: index === 0 ? "پذیرنده اصلی داشبورد" : "قابل مقایسه با همین baseline"
								})]
							})
						}, merchant.id)) })
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-w-0 sm:min-w-36",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: periodId,
					onValueChange: onPeriodChange,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger, {
						className: "h-10 w-full justify-start gap-2 rounded-lg border-[var(--pulse-line)] bg-card px-3 py-2 text-start hover:border-[var(--pulse-blue-line)] hover:bg-[var(--pulse-wash)] data-[popup-open]:border-[var(--pulse-blue-line)] data-[popup-open]:bg-[var(--pulse-wash)] [&>svg:last-child]:text-[var(--pulse-blue)]",
						"aria-label": "انتخاب بازه تحلیل",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarRange, {
							className: "size-4 shrink-0 text-[var(--pulse-blue)]",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "min-w-0 flex-1 truncate text-xs font-extrabold text-[var(--pulse-ink)]",
							children: "بازه"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
						className: "min-w-64 rounded-lg p-1.5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectGroup, { children: SALES_PULSE_PERIODS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: item.id,
							label: item.label,
							className: "py-2 pe-8 ps-2 data-highlighted:bg-[var(--pulse-wash)] data-selected:bg-[var(--pulse-blue-soft)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex min-w-0 flex-col gap-0.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-semibold text-[var(--pulse-ink)]",
									children: item.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] text-[var(--pulse-subtle)]",
									children: item.range
								})]
							})
						}, item.id)) })
					})]
				})
			})]
		}), period && !isInline ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "rounded-md bg-[var(--pulse-wash)] px-2.5 py-1.5 text-xs text-[var(--pulse-subtle)] sm:text-sm",
			children: [
				"بازه:",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold text-[var(--pulse-ink)]",
					children: period.range
				})
			]
		}) : null]
	});
}
function DataLimitNote() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "flex items-start justify-center gap-2 px-1 text-center text-[11px] leading-5 text-[var(--pulse-subtle)] sm:text-xs",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
			className: "mt-0.5 size-3.5 shrink-0 text-[var(--pulse-violet)]",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "پنجره داده ۶ ماهه ممکن است cohortهای قدیمی را ناقص کند. مبالغ به تومان نمایش داده شده‌اند." })]
	});
}
//#endregion
//#region components/sales-pulse/quick-comparison-list.tsx
function QuickComparisonList({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-labelledby": "quick-comparison-heading",
		className: "flex h-full flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				id: "quick-comparison-heading",
				className: "mb-0.5 text-sm font-bold text-[var(--pulse-ink)] sm:text-base",
				children: "مقایسه سریع"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-xs text-[var(--pulse-subtle)]",
				children: "انحراف‌های کلیدی نسبت به baseline"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-1 flex-col gap-1.5",
				children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex min-h-9 items-center justify-between gap-2 rounded-lg border border-[var(--pulse-line)] bg-[var(--pulse-wash)] px-2.5 py-1.5 text-xs transition-colors duration-200 hover:bg-[var(--pulse-violet-soft)] motion-reduce:transition-none sm:text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[var(--pulse-subtle)]",
						children: item.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: cn("font-extrabold tabular-nums", item.value.startsWith("+") ? "text-[var(--pulse-good)]" : "text-[var(--pulse-ink)]"),
						children: [item.value, !item.value.includes("٪") ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[10px] font-normal text-[var(--pulse-subtle)] sm:text-xs",
							children: [" ", "واحد درصدی"]
						}) : null]
					})]
				}, item.label))
			})
		]
	});
}
//#endregion
//#region components/sales-pulse/sales-pulse-dashboard.tsx
var pulseTheme = {
	"--pulse-ink": "#1a2148",
	"--pulse-subtle": "#6b7590",
	"--pulse-line": "#e4e9f3",
	"--pulse-wash": "#f6f8fc",
	"--pulse-blue": "#174fd6",
	"--pulse-blue-soft": "#eaf1ff",
	"--pulse-blue-line": "#c8d8ff",
	"--pulse-violet": "#174fd6",
	"--pulse-violet-soft": "#eaf1ff",
	"--pulse-violet-line": "#c8d8ff",
	"--pulse-teal": "#0f9a84",
	"--pulse-good": "#119a6c",
	"--pulse-warn": "#d44949",
	"--pulse-amber": "#e8892d",
	"--pulse-amber-soft": "#fff6ea",
	"--pulse-amber-line": "#ffe0b5",
	"--pulse-yellow": "#ffd60a"
};
var panelClass = "rail-panel rail-panel-interactive [--rail-accent:var(--pulse-blue)] [--rail-line:var(--pulse-line)]";
function SalesPulseHeader({ controls }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "flex min-w-0 flex-col gap-2.5 lg:flex-row lg:items-start lg:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 items-center gap-2.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex size-10 shrink-0 items-center justify-center rounded-md bg-[var(--pulse-yellow)] text-[var(--pulse-ink)] sm:size-11",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {
					className: "size-5",
					"aria-hidden": "true"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 flex-col gap-0.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-lg font-extrabold tracking-tight text-[var(--pulse-ink)] sm:text-xl",
					children: "نبض فروش و مناسبت‌ها"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-[var(--pulse-subtle)] sm:text-sm",
					children: "انحراف مناسبت نسبت به baseline · کنترل مبلغ، ساعت و ترکیب خریدار"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "w-full shrink-0 lg:w-auto",
			children: controls
		})]
	});
}
function SalesPulseDashboard() {
	const [periodId, setPeriodId] = (0, import_react.useState)("nowruz-1403");
	const [merchantId, setMerchantId] = (0, import_react.useState)("merchant-a");
	function handlePeriodChange(value) {
		if (value) setPeriodId(value);
	}
	function handleMerchantChange(value) {
		if (value) setMerchantId(value);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-2.5 text-[var(--pulse-ink)]",
		style: pulseTheme,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SalesPulseHeader, { controls: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PeriodToolbar, {
				variant: "inline",
				periodId,
				merchantId,
				onPeriodChange: handlePeriodChange,
				onMerchantChange: handleMerchantChange
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiScorecardGrid, { children: SALES_PULSE_KPIS.map((kpi) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiScorecard, { kpi }, kpi.id)) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-labelledby": "growth-breakdown-heading",
				className: "grid grid-cols-1 gap-2.5 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: cn(panelClass, "flex flex-col gap-2.5 p-2.5 sm:p-3"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "growth-breakdown-heading",
							className: "text-sm font-bold text-[var(--pulse-ink)] sm:text-base",
							children: "تجزیه رشد مناسبت"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-xs leading-5 text-[var(--pulse-subtle)]",
							children: "اثر تعداد خرید، سبد، موفقیت پرداخت و سهم کارت‌های بازگشتی"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 gap-3 sm:grid-cols-[7.5rem_1fr] lg:grid-cols-[8rem_1fr]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GrowthDonut, { total: 27 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GrowthWaterfall, {
								factors: SALES_PULSE_GROWTH_FACTORS,
								total: 27
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GrowthBreakdownBlocks, {
							factors: SALES_PULSE_GROWTH_FACTORS,
							total: 27
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InsightPanel, {
					headline: SALES_PULSE_INSIGHT.headline,
					bullets: SALES_PULSE_INSIGHT.bullets,
					action: SALES_PULSE_INSIGHT.action
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-label": "نمودارهای تکمیلی",
				className: "grid grid-cols-1 gap-2.5 md:grid-cols-2 xl:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: cn(panelClass, "p-2.5 sm:p-3 md:col-span-2 xl:col-span-2"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
							className: "mb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-sm font-bold text-[var(--pulse-ink)] sm:text-base",
								children: "روند تجمعی فروش موفق"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0.5 text-xs leading-5 text-[var(--pulse-subtle)]",
								children: "واقعی در برابر baseline در طول بازه مناسبت"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CumulativeTrendChart, { data: SALES_PULSE_CUMULATIVE_TREND })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
						className: cn(panelClass, "p-2.5 sm:p-3"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickComparisonList, { items: SALES_PULSE_QUICK_COMPARISON })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: cn(panelClass, "self-start p-2.5 sm:p-3"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
							className: "mb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-sm font-bold text-[var(--pulse-ink)] sm:text-base",
								children: "توزیع اثر رشد بر اساس ساعت"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0.5 text-xs leading-5 text-[var(--pulse-subtle)]",
								children: "سهم خالص هر بازه ساعتی از رشد کل"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HourlyImpactChart, { data: SALES_PULSE_HOURLY_IMPACT })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: cn(panelClass, "self-start overflow-x-auto p-2.5 sm:p-3 md:col-span-2"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
							className: "mb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-sm font-bold text-[var(--pulse-ink)] sm:text-base",
								children: "ماتریس اثر خالص رشد"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0.5 text-xs leading-5 text-[var(--pulse-subtle)]",
								children: "شدت اثر بر اساس روز هفته و بازه ساعتی"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImpactHeatmap, { values: SALES_PULSE_HEATMAP })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataLimitNote, {})
		]
	});
}
//#endregion
//#region components/pages/sales-pulse-page.tsx
function SalesPulsePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SalesPulseDashboard, {});
}
//#endregion
//#region lib/dashboard.ts
var PAGE_TITLES = {
	"business-graph": "گراف هوشمند کسب و کار",
	"sales-pulse": "نبض فروش و مناسبت‌ها",
	"buyer-loyalty": "رفتار و وفاداری خریداران",
	"peer-position": "جایگاه در میان کسب‌وکارهای مشابه",
	"payment-health": "سلامت مسیر پرداخت",
	transactions: "تراکنش‌ها",
	discounts: "کدهای تخفیف",
	links: "لینک‌های پرداخت"
};
//#endregion
//#region components/ui/card.tsx
function Card({ className, size = "default", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "card",
		"data-size": size,
		className: cn("group/card flex flex-col gap-(--card-spacing) overflow-hidden rounded-lg bg-card py-(--card-spacing) text-sm text-card-foreground ring-1 ring-foreground/10 [--card-spacing:--spacing(2.5)] has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(2)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-lg *:[img:last-child]:rounded-b-lg", className),
		...props
	});
}
function CardHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "card-header",
		className: cn("group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-lg px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing)", className),
		...props
	});
}
function CardContent({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "card-content",
		className: cn("px-(--card-spacing)", className),
		...props
	});
}
//#endregion
//#region node_modules/@base-ui/react/menu/positioner/MenuPositionerContext.mjs
var MenuPositionerContext = /* @__PURE__ */ import_react.createContext(void 0);
function useMenuPositionerContext(optional) {
	const context = import_react.useContext(MenuPositionerContext);
	if (context === void 0 && !optional) throw new Error(formatErrorMessage(33));
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/menu/root/MenuRootContext.mjs
var MenuRootContext = /* @__PURE__ */ import_react.createContext(void 0);
function useMenuRootContext(optional) {
	const context = import_react.useContext(MenuRootContext);
	if (context === void 0 && !optional) throw new Error(formatErrorMessage(36));
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/context-menu/root/ContextMenuRootContext.mjs
var ContextMenuRootContext = /* @__PURE__ */ import_react.createContext(void 0);
function useContextMenuRootContext(optional = true) {
	const context = import_react.useContext(ContextMenuRootContext);
	if (context === void 0 && !optional) throw new Error(formatErrorMessage(25));
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/menu/item/useMenuItemCommonProps.mjs
/**
* Returns common props shared by all menu item types.
* This hook extracts the shared logic for id, role, tabIndex, onKeyDown,
* onMouseMove, onClick, and onMouseUp handlers.
*/
function useMenuItemCommonProps(params) {
	const { closeOnClick, highlighted, id, nodeId, store, typingRef, itemRef, itemMetadata } = params;
	const { events: menuEvents } = store.useState("floatingTreeRoot");
	const open = store.useState("open");
	const contextMenuContext = useContextMenuRootContext(true);
	const isContextMenu = contextMenuContext !== void 0;
	return import_react.useMemo(() => ({
		id,
		role: "menuitem",
		tabIndex: open && highlighted ? 0 : -1,
		onKeyDown(event) {
			if (event.key === " " && typingRef?.current) event.preventDefault();
		},
		onMouseMove(event) {
			if (!nodeId) return;
			menuEvents.emit("itemhover", {
				nodeId,
				target: event.currentTarget
			});
		},
		onClick(event) {
			if (closeOnClick) menuEvents.emit("close", {
				domEvent: event,
				reason: itemPress
			});
		},
		onMouseUp(event) {
			if (contextMenuContext) {
				const initialCursorPoint = contextMenuContext.initialCursorPointRef.current;
				contextMenuContext.initialCursorPointRef.current = null;
				if (isContextMenu && initialCursorPoint && Math.abs(event.clientX - initialCursorPoint.x) <= 1 && Math.abs(event.clientY - initialCursorPoint.y) <= 1) return;
				if (isContextMenu && !mac && event.button === 2) return;
			}
			if (itemRef.current && store.context.allowMouseUpTriggerRef.current && (!isContextMenu || event.button === 2)) {
				if (itemMetadata.type === "regular-item") dispatchClickWithModifiers(itemRef.current, event, { detail: 1 });
			}
		}
	}), [
		closeOnClick,
		highlighted,
		id,
		menuEvents,
		nodeId,
		open,
		store,
		typingRef,
		itemRef,
		contextMenuContext,
		isContextMenu,
		itemMetadata
	]);
}
//#endregion
//#region node_modules/@base-ui/react/menu/item/useMenuItem.mjs
var REGULAR_ITEM = { type: "regular-item" };
function useMenuItem(params) {
	const { closeOnClick, disabled, highlighted, id, store, typingRef = store.context.typingRef, nativeButton, itemMetadata, nodeId } = params;
	const itemRef = import_react.useRef(null);
	const { getButtonProps, buttonRef } = useButton({
		disabled,
		focusableWhenDisabled: true,
		native: nativeButton,
		composite: true
	});
	const commonProps = useMenuItemCommonProps({
		closeOnClick,
		highlighted,
		id,
		nodeId,
		store,
		typingRef,
		itemRef,
		itemMetadata
	});
	const getItemProps = import_react.useCallback((externalProps) => {
		return mergeProps(commonProps, { onMouseEnter() {
			if (itemMetadata.type !== "submenu-trigger") return;
			itemMetadata.setActive();
		} }, externalProps, getButtonProps);
	}, [
		commonProps,
		getButtonProps,
		itemMetadata
	]);
	const mergedRef = useMergedRefs(itemRef, buttonRef);
	return import_react.useMemo(() => ({
		getItemProps,
		itemRef: mergedRef
	}), [getItemProps, mergedRef]);
}
//#endregion
//#region node_modules/@base-ui/react/menu/item/MenuItem.mjs
/**
* An individual interactive item in the menu.
* Renders a `<div>` element.
*
* Documentation: [Base UI Menu](https://base-ui.com/react/components/menu)
*/
var MenuItem = /* @__PURE__ */ import_react.forwardRef(function MenuItem(componentProps, forwardedRef) {
	const { render, className, id: idProp, label, nativeButton = false, disabled: disabledProp = false, closeOnClick = true, style, ...elementProps } = componentProps;
	const listItem = useCompositeListItem({
		guess: true,
		label
	});
	const menuPositionerContext = useMenuPositionerContext(true);
	const id = useBaseUiId(idProp);
	const { store } = useMenuRootContext();
	const rootDisabled = store.useState("disabled");
	const disabled = disabledProp || rootDisabled;
	const highlighted = store.useState("isActive", listItem.index);
	const itemProps = store.useState("itemProps");
	const { getItemProps, itemRef } = useMenuItem({
		closeOnClick,
		disabled,
		highlighted,
		id,
		store,
		nativeButton,
		nodeId: menuPositionerContext?.context.nodeId,
		itemMetadata: REGULAR_ITEM
	});
	return useRenderElement("div", componentProps, {
		state: {
			disabled,
			highlighted
		},
		props: [
			itemProps,
			elementProps,
			getItemProps
		],
		ref: [
			itemRef,
			forwardedRef,
			listItem.ref
		]
	});
});
//#endregion
//#region node_modules/@base-ui/react/menu/popup/MenuPopup.mjs
/**
* A container for the menu items.
* Renders a `<div>` element.
*
* Documentation: [Base UI Menu](https://base-ui.com/react/components/menu)
*/
var MenuPopup = /* @__PURE__ */ import_react.forwardRef(function MenuPopup(componentProps, forwardedRef) {
	const { render, className, style, finalFocus, ...elementProps } = componentProps;
	const { store } = useMenuRootContext();
	const { side, align } = useMenuPositionerContext();
	const insideToolbar = useToolbarRootContext(true) != null;
	const open = store.useState("open");
	const transitionStatus = store.useState("transitionStatus");
	const popupProps = store.useState("popupProps");
	const mounted = store.useState("mounted");
	const instantType = store.useState("instantType");
	const activeTriggerElement = store.useState("activeTriggerElement");
	const parent = store.useState("parent");
	const lastOpenChangeReason = store.useState("lastOpenChangeReason");
	const rootId = store.useState("rootId");
	const floatingContext = store.useState("floatingRootContext");
	const floatingTreeRoot = store.useState("floatingTreeRoot");
	const closeDelay = store.useState("closeDelay");
	const hoverEnabled = store.useState("hoverEnabled");
	const disabled = store.useState("disabled");
	const openMethod = store.useState("openMethod");
	const isContextMenu = parent.type === "context-menu";
	useOpenChangeComplete({
		open,
		ref: store.context.popupRef,
		onComplete() {
			if (open) store.context.onOpenChangeComplete?.(true);
		}
	});
	import_react.useEffect(() => {
		function handleClose(event) {
			store.setOpen(false, createChangeEventDetails(event.reason, event.domEvent));
		}
		floatingTreeRoot.events.on("close", handleClose);
		return () => {
			floatingTreeRoot.events.off("close", handleClose);
		};
	}, [floatingTreeRoot.events, store]);
	useHoverFloatingInteraction(floatingContext, {
		enabled: hoverEnabled && !disabled && !isContextMenu && parent.type !== "menubar",
		closeDelay
	});
	const setPopupElement = store.useStateSetter("popupElement");
	const element = useRenderElement("div", componentProps, {
		state: {
			transitionStatus,
			side,
			align,
			open,
			nested: parent.type === "menu",
			instant: instantType
		},
		ref: [
			forwardedRef,
			store.context.popupRef,
			setPopupElement
		],
		stateAttributesMapping: popupTransitionStateMapping,
		props: [
			popupProps,
			{ onKeyDown(event) {
				if (insideToolbar && COMPOSITE_KEYS.has(event.key)) event.stopPropagation();
			} },
			getDisabledMountTransitionStyles(transitionStatus),
			elementProps,
			{ "data-rootownerid": rootId }
		]
	});
	let returnFocus = parent.type === void 0 || isContextMenu;
	if (activeTriggerElement || parent.type === "menubar" && lastOpenChangeReason !== "outside-press") returnFocus = true;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingFocusManager, {
		context: floatingContext,
		openInteractionType: openMethod,
		modal: isContextMenu,
		disabled: !mounted,
		returnFocus: finalFocus === void 0 ? returnFocus : finalFocus,
		initialFocus: parent.type !== "menu",
		restoreFocus: true,
		externalTree: parent.type !== "menubar" ? floatingTreeRoot : void 0,
		previousFocusableElement: activeTriggerElement,
		nextFocusableElement: parent.type === void 0 ? store.context.triggerFocusTargetRef : void 0,
		beforeContentFocusGuardRef: parent.type === void 0 ? store.context.beforeContentFocusGuardRef : void 0,
		children: element
	});
});
//#endregion
//#region node_modules/@base-ui/react/menu/portal/MenuPortalContext.mjs
var MenuPortalContext = /* @__PURE__ */ import_react.createContext(void 0);
function useMenuPortalContext() {
	const value = import_react.useContext(MenuPortalContext);
	if (value === void 0) throw new Error(formatErrorMessage(32));
	return value;
}
//#endregion
//#region node_modules/@base-ui/react/menu/portal/MenuPortal.mjs
/**
* A portal element that moves the popup to a different part of the DOM.
* By default, the portal element is appended to `<body>`.
* Renders a `<div>` element.
*
* Documentation: [Base UI Menu](https://base-ui.com/react/components/menu)
*/
var MenuPortal = /* @__PURE__ */ import_react.forwardRef(function MenuPortal(props, forwardedRef) {
	const { keepMounted = false, ...portalProps } = props;
	const { store } = useMenuRootContext();
	if (!(store.useState("mounted") || keepMounted)) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuPortalContext.Provider, {
		value: keepMounted,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingPortal, {
			ref: forwardedRef,
			...portalProps
		})
	});
});
//#endregion
//#region node_modules/@base-ui/react/menu/positioner/MenuPositioner.mjs
/**
* Positions the menu popup against the trigger.
* Renders a `<div>` element.
*
* Documentation: [Base UI Menu](https://base-ui.com/react/components/menu)
*/
var MenuPositioner = /* @__PURE__ */ import_react.forwardRef(function MenuPositioner(componentProps, forwardedRef) {
	const { anchor: anchorProp, positionMethod: positionMethodProp = "absolute", className, render, side, align: alignProp, sideOffset: sideOffsetProp = 0, alignOffset: alignOffsetProp = 0, collisionBoundary = "clipping-ancestors", collisionPadding = 5, arrowPadding = 5, sticky = false, disableAnchorTracking = false, collisionAvoidance: collisionAvoidanceProp = DROPDOWN_COLLISION_AVOIDANCE, style, ...elementProps } = componentProps;
	const { store } = useMenuRootContext();
	const keepMounted = useMenuPortalContext();
	const contextMenuContext = useContextMenuRootContext(true);
	const parent = store.useState("parent");
	const floatingRootContext = store.useState("floatingRootContext");
	const floatingTreeRoot = store.useState("floatingTreeRoot");
	const mounted = store.useState("mounted");
	const open = store.useState("open");
	const modal = store.useState("modal");
	const openMethod = store.useState("openMethod");
	const triggerElement = store.useState("activeTriggerElement");
	const transitionStatus = store.useState("transitionStatus");
	const positionerElement = store.useState("positionerElement");
	const instantType = store.useState("instantType");
	const adaptiveOrigin = store.useState("adaptiveOrigin");
	const lastOpenChangeReason = store.useState("lastOpenChangeReason");
	const floatingNodeId = store.useState("floatingNodeId");
	const floatingParentNodeId = store.useState("floatingParentNodeId");
	const domReference = floatingRootContext.useState("domReferenceElement");
	const previousTriggerRef = import_react.useRef(null);
	const runOnceAnimationsFinish = useAnimationsFinished(positionerElement);
	let anchor = anchorProp;
	let sideOffset = sideOffsetProp;
	let alignOffset = alignOffsetProp;
	let align = alignProp;
	let collisionAvoidance = collisionAvoidanceProp;
	if (parent.type === "context-menu") {
		anchor = anchorProp ?? parent.context?.anchor;
		align = align ?? "start";
		if (!side && align !== "center") {
			alignOffset = componentProps.alignOffset ?? 2;
			sideOffset = componentProps.sideOffset ?? -5;
		}
	}
	let computedSide = side;
	let computedAlign = align;
	if (parent.type === "menu") {
		computedSide = computedSide ?? "inline-end";
		computedAlign = computedAlign ?? "start";
		collisionAvoidance = componentProps.collisionAvoidance ?? POPUP_COLLISION_AVOIDANCE;
	} else if (parent.type === "menubar") {
		computedSide = computedSide ?? (parent.context.orientation === "vertical" ? "inline-end" : "bottom");
		computedAlign = computedAlign ?? "start";
	}
	const contextMenu = parent.type === "context-menu";
	const positioner = useAnchorPositioning({
		anchor,
		floatingRootContext,
		positionMethod: contextMenuContext ? "fixed" : positionMethodProp,
		mounted,
		side: computedSide,
		sideOffset,
		align: computedAlign,
		alignOffset,
		arrowPadding: contextMenu ? 0 : arrowPadding,
		collisionBoundary,
		collisionPadding,
		sticky,
		nodeId: floatingNodeId,
		keepMounted,
		disableAnchorTracking,
		collisionAvoidance,
		shift: contextMenu ? {
			crossAxis: !("side" in collisionAvoidance && collisionAvoidance.side === "flip"),
			rootBoundary: "layoutViewport"
		} : void 0,
		externalTree: floatingTreeRoot,
		adaptiveOrigin
	});
	import_react.useEffect(() => {
		function onMenuOpenChange(details) {
			if (details.open) {
				if (details.parentNodeId === floatingNodeId) store.set("hoverEnabled", false);
				if (details.nodeId !== floatingNodeId && details.parentNodeId === store.select("floatingParentNodeId")) store.setOpen(false, createChangeEventDetails(siblingOpen));
			}
		}
		floatingTreeRoot.events.on("menuopenchange", onMenuOpenChange);
		return () => {
			floatingTreeRoot.events.off("menuopenchange", onMenuOpenChange);
		};
	}, [
		store,
		floatingTreeRoot.events,
		floatingNodeId
	]);
	import_react.useEffect(() => {
		if (store.select("floatingParentNodeId") == null) return;
		function onParentClose(details) {
			if (details.open || details.nodeId !== store.select("floatingParentNodeId")) return;
			const reason = details.reason ?? "sibling-open";
			store.setOpen(false, createChangeEventDetails(reason));
		}
		floatingTreeRoot.events.on("menuopenchange", onParentClose);
		return () => {
			floatingTreeRoot.events.off("menuopenchange", onParentClose);
		};
	}, [floatingTreeRoot.events, store]);
	const closeTimeout = useTimeout();
	import_react.useEffect(() => {
		if (!open) closeTimeout.clear();
	}, [open, closeTimeout]);
	import_react.useEffect(() => {
		function onItemHover(event) {
			if (!open || event.nodeId !== store.select("floatingParentNodeId")) return;
			if (event.target && triggerElement && triggerElement !== event.target) {
				const delay = store.select("closeDelay");
				if (delay > 0) {
					if (!closeTimeout.isStarted()) closeTimeout.start(delay, () => {
						store.setOpen(false, createChangeEventDetails(siblingOpen));
					});
				} else store.setOpen(false, createChangeEventDetails(siblingOpen));
			} else closeTimeout.clear();
		}
		floatingTreeRoot.events.on("itemhover", onItemHover);
		return () => {
			floatingTreeRoot.events.off("itemhover", onItemHover);
		};
	}, [
		floatingTreeRoot.events,
		open,
		triggerElement,
		store,
		closeTimeout
	]);
	import_react.useEffect(() => {
		const eventDetails = {
			open,
			nodeId: floatingNodeId,
			parentNodeId: floatingParentNodeId,
			reason: store.select("lastOpenChangeReason")
		};
		floatingTreeRoot.events.emit("menuopenchange", eventDetails);
	}, [
		floatingTreeRoot.events,
		open,
		store,
		floatingNodeId,
		floatingParentNodeId
	]);
	useIsoLayoutEffect(() => {
		const currentTrigger = domReference;
		const previousTrigger = previousTriggerRef.current;
		if (currentTrigger) previousTriggerRef.current = currentTrigger;
		if (previousTrigger && currentTrigger && currentTrigger !== previousTrigger) {
			store.set("instantType", void 0);
			const abortController = new AbortController();
			runOnceAnimationsFinish(() => {
				store.set("instantType", "trigger-change");
			}, abortController.signal);
			return () => {
				abortController.abort();
			};
		}
	}, [
		domReference,
		runOnceAnimationsFinish,
		store
	]);
	const state = {
		open,
		side: positioner.side,
		align: positioner.align,
		anchorHidden: positioner.anchorHidden,
		nested: parent.type === "menu",
		instant: instantType
	};
	const menubarModal = parent.type === "menubar" && parent.context.modal;
	useAnchoredPopupScrollLock(open && (menubarModal || modal && lastOpenChangeReason !== "trigger-hover"), openMethod === "touch", positionerElement, triggerElement);
	const element = usePositioner(componentProps, state, {
		styles: positioner.positionerStyles,
		transitionStatus,
		props: elementProps,
		refs: [forwardedRef, store.useStateSetter("positionerElement")],
		hidden: !mounted,
		inert: !open
	});
	const shouldRenderBackdrop = mounted && parent.type !== "menu" && (parent.type !== "menubar" && modal && lastOpenChangeReason !== "trigger-hover" || parent.type === "menubar" && parent.context.modal);
	let backdropCutout = null;
	if (parent.type === "menubar") backdropCutout = parent.context.contentElement;
	else if (parent.type === void 0) backdropCutout = triggerElement;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MenuPositionerContext.Provider, {
		value: positioner,
		children: [shouldRenderBackdrop && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InternalBackdrop, {
			ref: parent.type === "context-menu" || parent.type === "nested-context-menu" ? parent.context.internalBackdropRef : null,
			inert: inertValue(!open),
			cutout: backdropCutout
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingNode, {
			id: floatingNodeId,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompositeList, {
				elementsRef: store.context.itemDomElements,
				labelsRef: store.context.itemLabels,
				children: element
			})
		})]
	});
});
//#endregion
//#region node_modules/@base-ui/react/menubar/MenubarContext.mjs
var MenubarContext = /* @__PURE__ */ import_react.createContext(null);
function useMenubarContext(optional) {
	const context = import_react.useContext(MenubarContext);
	if (context === null && !optional) throw new Error(formatErrorMessage(5));
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/menu/store/MenuStore.mjs
var selectors = {
	...popupStoreSelectors,
	disabled: (state) => state.parent.type === "menubar" ? state.parent.context.disabled || state.disabled : state.disabled,
	modal: (state) => (state.parent.type === void 0 || state.parent.type === "context-menu") && (state.modal ?? true),
	openMethod: (state) => state.openMethod,
	allowMouseEnter: (state) => state.allowMouseEnter,
	highlightItemOnHover: (state) => state.highlightItemOnHover,
	parent: (state) => state.parent,
	rootId: (state) => {
		if (state.parent.type === "menu") return state.parent.store.select("rootId");
		return state.parent.type !== void 0 ? state.parent.context.rootId : state.rootId;
	},
	activeIndex: (state) => state.activeIndex,
	isActive: (state, itemIndex) => state.activeIndex === itemIndex,
	hoverEnabled: (state) => state.hoverEnabled,
	instantType: (state) => state.instantType,
	lastOpenChangeReason: (state) => state.openChangeReason,
	floatingTreeRoot: (state) => {
		if (state.parent.type === "menu") return state.parent.store.select("floatingTreeRoot");
		return state.floatingTreeRoot;
	},
	floatingNodeId: (state) => state.floatingNodeId,
	floatingParentNodeId: (state) => state.floatingParentNodeId,
	itemProps: (state) => state.itemProps,
	closeDelay: (state) => state.closeDelay,
	adaptiveOrigin: (state) => state.adaptiveOrigin,
	keyboardEventRelay: (state) => {
		if (state.keyboardEventRelay) return state.keyboardEventRelay;
		if (state.parent.type === "menu") return state.parent.store.select("keyboardEventRelay");
	}
};
/**
* The store view that detached handle-backed triggers read from. Both the real `MenuStore` and the
* inert fallback store satisfy it, so a trigger can read from whichever store the handle currently
* exposes. Narrowed to the members a trigger actually uses — the trigger-data members plus `setOpen`
* (called by the focus guards) — so the exposed surface can't bypass the open-change pipeline; on
* the detached fallback store every one of these mutations is a no-op.
*/
var MenuStore = class extends ReactStore {
	constructor(initialState) {
		super({
			...createInitialState(),
			...initialState
		}, createInitialContext(), selectors);
		this.unsubscribeParentListener = this.observe("parent", (parent) => {
			this.unsubscribeParentListener?.();
			if (parent.type === "menu") {
				let rootId = parent.store.select("rootId");
				let floatingTreeRoot = parent.store.select("floatingTreeRoot");
				let keyboardEventRelay = parent.store.select("keyboardEventRelay");
				this.unsubscribeParentListener = parent.store.subscribe(() => {
					const nextRootId = parent.store.select("rootId");
					const nextFloatingTreeRoot = parent.store.select("floatingTreeRoot");
					const nextKeyboardEventRelay = parent.store.select("keyboardEventRelay");
					if (rootId === nextRootId && floatingTreeRoot === nextFloatingTreeRoot && keyboardEventRelay === nextKeyboardEventRelay) return;
					rootId = nextRootId;
					floatingTreeRoot = nextFloatingTreeRoot;
					keyboardEventRelay = nextKeyboardEventRelay;
					this.notifyAll();
				});
				this.context.allowMouseUpTriggerRef = parent.store.context.allowMouseUpTriggerRef;
				return;
			}
			if (parent.type !== void 0) this.context.allowMouseUpTriggerRef = parent.context.allowMouseUpTriggerRef;
			this.unsubscribeParentListener = null;
		});
	}
	setOpen(open, eventDetails) {
		this.state.floatingRootContext.context.events.emit("setOpen", {
			open,
			eventDetails
		});
	}
	unsubscribeParentListener = null;
};
function createInitialContext() {
	return {
		positionerRef: /* @__PURE__ */ import_react.createRef(),
		popupRef: /* @__PURE__ */ import_react.createRef(),
		typingRef: { current: false },
		itemDomElements: { current: [] },
		itemLabels: { current: [] },
		allowMouseUpTriggerRef: { current: false },
		triggerFocusTargetRef: /* @__PURE__ */ import_react.createRef(),
		beforeContentFocusGuardRef: /* @__PURE__ */ import_react.createRef(),
		onOpenChangeComplete: void 0,
		triggerElements: new PopupTriggerMap()
	};
}
function createInitialState() {
	return {
		...createInitialPopupStoreState(),
		disabled: false,
		modal: true,
		openMethod: null,
		allowMouseEnter: false,
		highlightItemOnHover: true,
		parent: { type: void 0 },
		rootId: void 0,
		activeIndex: null,
		hoverEnabled: true,
		instantType: void 0,
		openChangeReason: null,
		floatingTreeRoot: new FloatingTreeStore(),
		floatingNodeId: void 0,
		floatingParentNodeId: null,
		itemProps: EMPTY_OBJECT,
		keyboardEventRelay: void 0,
		closeDelay: 0,
		adaptiveOrigin: void 0
	};
}
//#endregion
//#region node_modules/@base-ui/react/menu/submenu-root/MenuSubmenuRootContext.mjs
var MenuSubmenuRootContext = /* @__PURE__ */ import_react.createContext(void 0);
function useMenuSubmenuRootContext() {
	return import_react.useContext(MenuSubmenuRootContext);
}
//#endregion
//#region node_modules/@base-ui/react/menu/root/MenuRoot.mjs
/**
* Groups all parts of the menu.
* Doesn't render its own HTML element.
*
* Documentation: [Base UI Menu](https://base-ui.com/react/components/menu)
*/
var MenuRoot = fastComponent(function MenuRoot(props) {
	const { children, open: openProp, onOpenChange, onOpenChangeComplete, defaultOpen = false, disabled: disabledProp = false, modal: modalProp, loopFocus = true, orientation = "vertical", actionsRef, closeParentOnEsc = false, handle, triggerId: triggerIdProp, defaultTriggerId: defaultTriggerIdProp = null, highlightItemOnHover = true } = props;
	const contextMenuContext = useContextMenuRootContext(true);
	const parentMenuRootContext = useMenuRootContext(true);
	const menubarContext = useMenubarContext(true);
	const isSubmenu = useMenuSubmenuRootContext();
	const parentFromContext = import_react.useMemo(() => {
		if (isSubmenu && parentMenuRootContext) return {
			type: "menu",
			store: parentMenuRootContext.store
		};
		if (menubarContext) return {
			type: "menubar",
			context: menubarContext
		};
		if (contextMenuContext && !parentMenuRootContext) return {
			type: "context-menu",
			context: contextMenuContext
		};
		return { type: void 0 };
	}, [
		contextMenuContext,
		parentMenuRootContext,
		menubarContext,
		isSubmenu
	]);
	const store = useMenuRootStore({
		open: defaultOpen,
		openProp,
		activeTriggerId: defaultTriggerIdProp,
		triggerIdProp,
		parent: parentFromContext
	});
	store.useControlledProp("openProp", openProp);
	store.useControlledProp("triggerIdProp", triggerIdProp);
	store.useContextCallback("onOpenChangeComplete", onOpenChangeComplete);
	const rootId = useId$1();
	const floatingId = useId$1();
	const floatingTreeRoot = store.useState("floatingTreeRoot");
	const floatingNodeIdFromContext = useFloatingNodeId(floatingTreeRoot);
	const floatingParentNodeIdFromContext = useFloatingParentNodeId();
	const open = store.useState("open");
	const activeTriggerElement = store.useState("activeTriggerElement");
	const positionerElement = store.useState("positionerElement");
	const hoverEnabled = store.useState("hoverEnabled");
	const disabled = store.useState("disabled");
	const lastOpenChangeReason = store.useState("lastOpenChangeReason");
	const parent = store.useState("parent");
	const activeIndex = store.useState("activeIndex");
	const payload = store.useState("payload");
	const floatingParentNodeId = store.useState("floatingParentNodeId");
	const openEventRef = import_react.useRef(null);
	const allowOutsidePressDismissalRef = import_react.useRef(parent.type !== "context-menu");
	const allowOutsidePressDismissalTimeout = useTimeout();
	const allowTouchToCloseRef = import_react.useRef(true);
	const allowTouchToCloseTimeout = useTimeout();
	const nested = floatingParentNodeId != null;
	const { openMethod, triggerProps: interactionTypeProps } = useOpenInteractionType(open);
	store.useSyncedValues({
		disabled: disabledProp,
		highlightItemOnHover,
		modal: parent.type === void 0 ? modalProp : void 0,
		openMethod,
		rootId
	});
	useImplicitActiveTrigger(store);
	const { forceUnmount } = useOpenStateTransitions(open, store, () => {
		store.set("allowMouseEnter", false);
	});
	useIsoLayoutEffect(() => {
		if (contextMenuContext && !parentMenuRootContext) store.update({
			parent: {
				type: "context-menu",
				context: contextMenuContext
			},
			floatingNodeId: floatingNodeIdFromContext,
			floatingParentNodeId: floatingParentNodeIdFromContext
		});
		else if (parentMenuRootContext) store.update({
			floatingNodeId: floatingNodeIdFromContext,
			floatingParentNodeId: floatingParentNodeIdFromContext
		});
	}, [
		contextMenuContext,
		parentMenuRootContext,
		floatingNodeIdFromContext,
		floatingParentNodeIdFromContext,
		store
	]);
	import_react.useEffect(() => {
		if (!open) openEventRef.current = null;
		if (parent.type !== "context-menu") return;
		if (!open) {
			allowOutsidePressDismissalTimeout.clear();
			allowOutsidePressDismissalRef.current = false;
			return;
		}
		allowOutsidePressDismissalTimeout.start(500, () => {
			allowOutsidePressDismissalRef.current = true;
		});
	}, [
		allowOutsidePressDismissalTimeout,
		open,
		parent.type
	]);
	useIsoLayoutEffect(() => {
		if (!open && !hoverEnabled) store.set("hoverEnabled", true);
	}, [
		open,
		hoverEnabled,
		store
	]);
	const setOpen = useStableCallback((nextOpen, eventDetails) => {
		const reason = eventDetails.reason;
		if (!nextOpen && !store.select("open")) return;
		if (open === nextOpen && eventDetails.trigger === activeTriggerElement && lastOpenChangeReason === reason) return;
		const shouldPreventUnmountOnClose = attachPreventUnmountOnClose(eventDetails);
		if (!nextOpen && eventDetails.trigger == null) eventDetails.trigger = activeTriggerElement ?? void 0;
		onOpenChange?.(nextOpen, eventDetails);
		if (eventDetails.isCanceled) return;
		store.state.floatingRootContext.dispatchOpenChange(nextOpen, eventDetails);
		const nativeEvent = eventDetails.event;
		if (nextOpen === false && nativeEvent?.type === "click" && nativeEvent.pointerType === "touch" && !allowTouchToCloseRef.current) return;
		if (nextOpen && reason === "trigger-focus") {
			allowTouchToCloseRef.current = false;
			allowTouchToCloseTimeout.start(300, () => {
				allowTouchToCloseRef.current = true;
			});
		} else {
			allowTouchToCloseRef.current = true;
			allowTouchToCloseTimeout.clear();
		}
		const isKeyboardClick = (reason === "trigger-press" || reason === "item-press") && nativeEvent.detail === 0;
		const isDismissClose = !nextOpen && (reason === "escape-key" || reason == null);
		const updatedState = {
			open: nextOpen,
			openChangeReason: reason
		};
		openEventRef.current = eventDetails.event;
		setPopupOpenState(updatedState, nextOpen, eventDetails.trigger, shouldPreventUnmountOnClose());
		store.update(updatedState);
		if (parent.type === "menubar" && (reason === "trigger-focus" || reason === "focus-out" || reason === "trigger-hover" || reason === "list-navigation" || reason === "sibling-open")) store.set("instantType", "group");
		else if (isKeyboardClick || isDismissClose) store.set("instantType", isKeyboardClick ? "click" : "dismiss");
		else store.set("instantType", void 0);
	});
	const floatingRootContext = useSyncedFloatingRootContext({
		popupStore: store,
		floatingId,
		nested: floatingParentNodeIdFromContext != null,
		onOpenChange: setOpen
	});
	const floatingEvents = floatingRootContext.context.events;
	useIsoLayoutEffect(() => {
		const handleSetOpenEvent = ({ open: nextOpen, eventDetails }) => setOpen(nextOpen, eventDetails);
		floatingEvents.on("setOpen", handleSetOpenEvent);
		return () => {
			floatingEvents?.off("setOpen", handleSetOpenEvent);
		};
	}, [floatingEvents, setOpen]);
	const handleImperativeClose = import_react.useCallback(() => {
		store.setOpen(false, createChangeEventDetails(imperativeAction));
	}, [store]);
	import_react.useImperativeHandle(actionsRef, () => ({
		unmount: forceUnmount,
		close: handleImperativeClose
	}), [forceUnmount, handleImperativeClose]);
	let ctx;
	if (parent.type === "context-menu") ctx = parent.context;
	import_react.useImperativeHandle(ctx?.positionerRef, () => positionerElement, [positionerElement]);
	import_react.useImperativeHandle(ctx?.actionsRef, () => ({ setOpen }), [setOpen]);
	const dismiss = useDismiss(floatingRootContext, {
		enabled: !disabled,
		bubbles: { escapeKey: closeParentOnEsc && parent.type === "menu" },
		outsidePress() {
			if (parent.type !== "context-menu" || openEventRef.current?.type === "contextmenu") return true;
			return allowOutsidePressDismissalRef.current;
		},
		externalTree: nested ? floatingTreeRoot : void 0
	});
	const direction = useDirection();
	const setActiveIndex = import_react.useCallback((index) => {
		if (store.select("activeIndex") === index) return;
		store.set("activeIndex", index);
	}, [store]);
	const listNavigation$1 = useListNavigation(floatingRootContext, {
		enabled: !disabled,
		listRef: store.context.itemDomElements,
		activeIndex,
		nested: parent.type !== void 0,
		loopFocus,
		orientation,
		parentOrientation: parent.type === "menubar" ? parent.context.orientation : void 0,
		rtl: direction === "rtl",
		disabledIndices: EMPTY_ARRAY,
		onNavigate: setActiveIndex,
		openOnArrowKeyDown: parent.type !== "context-menu",
		externalTree: nested ? floatingTreeRoot : void 0,
		focusItemOnHover: highlightItemOnHover
	});
	const onTyping = import_react.useCallback((nextTyping) => {
		store.context.typingRef.current = nextTyping;
	}, [store]);
	const typeahead = useTypeahead(floatingRootContext, {
		enabled: !disabled,
		listRef: store.context.itemLabels,
		elementsRef: store.context.itemDomElements,
		activeIndex,
		resetMs: 500,
		onMatch: (index) => {
			if (open && index !== activeIndex) store.set("activeIndex", index);
		},
		onTyping
	});
	usePopupInteractionProps(store, {
		floatingRootContext,
		activeTriggerProps: import_react.useMemo(() => {
			const mergedProps = mergeProps(typeahead.reference, listNavigation$1.reference, dismiss.reference, { onMouseMove() {
				store.set("allowMouseEnter", true);
			} }, interactionTypeProps);
			mergedProps["aria-haspopup"] = "menu";
			mergedProps["aria-expanded"] = open;
			return mergedProps;
		}, [
			store,
			typeahead.reference,
			listNavigation$1.reference,
			dismiss.reference,
			interactionTypeProps,
			open
		]),
		inactiveTriggerProps: import_react.useMemo(() => {
			const mergedProps = mergeProps(listNavigation$1.trigger, dismiss.trigger, interactionTypeProps);
			mergedProps["aria-haspopup"] = "menu";
			mergedProps["aria-expanded"] = false;
			return mergedProps;
		}, [
			listNavigation$1.trigger,
			dismiss.trigger,
			interactionTypeProps
		]),
		popupProps: import_react.useMemo(() => mergeProps(FOCUSABLE_POPUP_PROPS, {
			id: floatingId,
			role: "menu",
			"aria-labelledby": activeTriggerElement?.id,
			onMouseMove() {
				store.set("allowMouseEnter", true);
				if (parent.type === "menu") store.set("hoverEnabled", false);
			},
			onClick() {
				if (store.select("hoverEnabled")) store.set("hoverEnabled", false);
			},
			onKeyDown(event) {
				const relay = store.select("keyboardEventRelay");
				if (relay && !event.isPropagationStopped()) relay(event);
			}
		}, typeahead.floating, listNavigation$1.floating, dismiss.floating), [
			activeTriggerElement,
			floatingId,
			parent.type,
			store,
			typeahead.floating,
			listNavigation$1.floating,
			dismiss.floating
		]),
		itemProps: listNavigation$1.item ?? EMPTY_OBJECT
	});
	const context = import_react.useMemo(() => ({
		store,
		parent: parentFromContext
	}), [store, parentFromContext]);
	const content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MenuRootContext.Provider, {
		value: context,
		children: [handle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopupHandleAttachment, {
			handle,
			store
		}), typeof children === "function" ? children({ payload }) : children]
	});
	if (parent.type === void 0 || parent.type === "context-menu") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingTree, {
		externalTree: floatingTreeRoot,
		children: content
	});
	return content;
});
function useMenuRootStore(initialState) {
	return useRefWithInit(() => new MenuStore(initialState)).current;
}
//#endregion
//#region node_modules/@base-ui/react/internals/composite/item/useCompositeItem.mjs
function useCompositeItem(params = {}) {
	const { highlightItemOnHover, highlightedIndex, onHighlightedIndexChange } = useCompositeRootContext();
	const { ref, index } = useCompositeListItem(params);
	const isHighlighted = highlightedIndex === index;
	const itemRef = import_react.useRef(null);
	const mergedRef = useMergedRefs(ref, itemRef);
	return {
		compositeProps: {
			tabIndex: isHighlighted ? 0 : -1,
			onFocus() {
				onHighlightedIndexChange(index);
			},
			onMouseMove() {
				const item = itemRef.current;
				if (!highlightItemOnHover || !item) return;
				const disabled = item.hasAttribute("disabled") || item.ariaDisabled === "true";
				if (!isHighlighted && !disabled) item.focus();
			}
		},
		compositeRef: mergedRef,
		index
	};
}
//#endregion
//#region node_modules/@base-ui/react/internals/composite/item/CompositeItem.mjs
function CompositeItem(componentProps) {
	const { render, className, style, state = EMPTY_OBJECT, props = EMPTY_ARRAY, refs = EMPTY_ARRAY, metadata, stateAttributesMapping, tag = "div", ...elementProps } = componentProps;
	const { compositeProps, compositeRef } = useCompositeItem({ metadata });
	return useRenderElement(tag, componentProps, {
		state,
		ref: [compositeRef, ...refs],
		props: [
			compositeProps,
			...props,
			elementProps
		],
		stateAttributesMapping
	});
}
//#endregion
//#region node_modules/@base-ui/react/menu/utils/findRootOwnerId.mjs
function findRootOwnerId(node) {
	if (isHTMLElement(node) && node.hasAttribute("data-rootownerid")) return node.getAttribute("data-rootownerid");
	if (isLastTraversableNode(node)) return;
	return findRootOwnerId(getParentNode(node));
}
//#endregion
//#region node_modules/@base-ui/react/utils/popups/useTriggerFocusGuards.mjs
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1);
/**
* Minimal store interface required by the focus guard hook.
* Both PopoverStore and MenuStore satisfy this interface.
*/
/**
* Provides focus guard handlers for popup triggers (Popover, Menu).
*
* When the popup is open, invisible focus guard elements are placed before and after
* the trigger. These handlers close the popup and move focus to the appropriate
* tabbable element when the guards receive focus (i.e. when the user tabs out).
*/
function useTriggerFocusGuards(store, triggerElementRef) {
	const preFocusGuardRef = import_react.useRef(null);
	function handlePreFocusGuardFocus(event) {
		import_react_dom.flushSync(() => {
			store.setOpen(false, createChangeEventDetails(focusOut, event.nativeEvent, event.currentTarget));
		});
		getTabbableBeforeElement(preFocusGuardRef.current)?.focus();
	}
	function handleFocusTargetFocus(event) {
		const positionerElement = store.select("positionerElement");
		if (positionerElement && isOutsideEvent(event, positionerElement)) store.context.beforeContentFocusGuardRef.current?.focus();
		else {
			import_react_dom.flushSync(() => {
				store.setOpen(false, createChangeEventDetails(focusOut, event.nativeEvent, event.currentTarget));
			});
			let nextTabbable = getTabbableAfterElement(store.context.triggerFocusTargetRef.current || triggerElementRef.current);
			while (nextTabbable !== null && contains(positionerElement, nextTabbable)) {
				const prevTabbable = nextTabbable;
				nextTabbable = getNextTabbable(nextTabbable);
				if (nextTabbable === prevTabbable) break;
			}
			nextTabbable?.focus();
		}
	}
	return {
		preFocusGuardRef,
		handlePreFocusGuardFocus,
		handleFocusTargetFocus
	};
}
//#endregion
//#region node_modules/@base-ui/react/utils/useMixedToggleClickHandler.mjs
/**
* Returns `click` and `mousedown` handlers that fix the behavior of triggers of popups that are toggled by different events.
* For example, a button that opens a popup on mousedown and closes it on click.
* This hook prevents the popup from closing immediately after the mouse button is released.
*/
function useMixedToggleClickHandler(params) {
	const { enabled = true, mouseDownAction, open } = params;
	const ignoreClickRef = import_react.useRef(false);
	return import_react.useMemo(() => {
		if (!enabled) return EMPTY_OBJECT;
		return {
			onMouseDown: (event) => {
				if (mouseDownAction === "open" && !open || mouseDownAction === "close" && open) {
					ignoreClickRef.current = true;
					ownerDocument(event.currentTarget).addEventListener("click", () => {
						ignoreClickRef.current = false;
					}, { once: true });
				}
			},
			onClick: (event) => {
				if (ignoreClickRef.current) {
					ignoreClickRef.current = false;
					event.preventBaseUIHandler();
				}
			}
		};
	}, [
		enabled,
		mouseDownAction,
		open
	]);
}
//#endregion
//#region node_modules/@base-ui/react/menu/trigger/MenuTrigger.mjs
/**
* A button that opens the menu.
* Renders a `<button>` element.
*
* Documentation: [Base UI Menu](https://base-ui.com/react/components/menu)
*/
var MenuTrigger = fastComponentRef(function MenuTrigger(componentProps, forwardedRef) {
	const { render, className, style, disabled: disabledProp = false, nativeButton = true, id: idProp, openOnHover: openOnHoverProp, delay = 100, closeDelay = 0, handle, payload, ...elementProps } = componentProps;
	const rootContext = useMenuRootContext(true);
	const store = usePopupHandleStore(handle) ?? rootContext?.store;
	if (!store) throw new Error(formatErrorMessage(85));
	const thisTriggerId = useBaseUiId(idProp);
	const isTriggerActive = store.useState("isTriggerActive", thisTriggerId);
	const floatingRootContext = store.useState("floatingRootContext");
	const isOpenedByThisTrigger = store.useState("isOpenedByTrigger", thisTriggerId);
	const popupId = store.useState("triggerPopupId", thisTriggerId);
	const triggerElementRef = import_react.useRef(null);
	const parent = useMenuParent();
	const compositeRootContext = useCompositeRootContext(true);
	const floatingTreeRootFromContext = useFloatingTree();
	const floatingTreeRoot = import_react.useMemo(() => {
		return floatingTreeRootFromContext ?? new FloatingTreeStore();
	}, [floatingTreeRootFromContext]);
	const { registerTrigger, isMountedByThisTrigger } = useTriggerDataForwarding(thisTriggerId, triggerElementRef, store, {
		payload,
		closeDelay,
		parent,
		floatingTreeRoot,
		floatingNodeId: useFloatingNodeId(floatingTreeRoot),
		floatingParentNodeId: useFloatingParentNodeId(),
		keyboardEventRelay: compositeRootContext?.relayKeyboardEvent
	});
	const isInMenubar = parent.type === "menubar";
	const rootDisabled = store.useState("disabled");
	const disabled = disabledProp || rootDisabled || isInMenubar && parent.context.disabled;
	const { getButtonProps, buttonRef } = useButton({
		disabled,
		native: nativeButton
	});
	import_react.useEffect(() => {
		if (!isOpenedByThisTrigger && parent.type === void 0) store.context.allowMouseUpTriggerRef.current = false;
	}, [
		store,
		isOpenedByThisTrigger,
		parent.type
	]);
	const triggerRef = import_react.useRef(null);
	const allowMouseUpTriggerTimeout = useTimeout();
	const handleDocumentMouseUp = useStableCallback((mouseEvent) => {
		if (!triggerRef.current) return;
		allowMouseUpTriggerTimeout.clear();
		store.context.allowMouseUpTriggerRef.current = false;
		const mouseUpTarget = mouseEvent.target;
		if (contains(triggerRef.current, mouseUpTarget) || contains(store.select("positionerElement"), mouseUpTarget) || mouseUpTarget === triggerRef.current) return;
		if (mouseUpTarget != null && findRootOwnerId(mouseUpTarget) === store.select("rootId")) return;
		if (isMouseWithinBounds(mouseEvent, triggerRef.current)) return;
		floatingTreeRoot.events.emit("close", {
			domEvent: mouseEvent,
			reason: cancelOpen
		});
	});
	import_react.useEffect(() => {
		if (isOpenedByThisTrigger && store.select("lastOpenChangeReason") === "trigger-hover") ownerDocument(triggerRef.current).addEventListener("mouseup", handleDocumentMouseUp, { once: true });
	}, [
		isOpenedByThisTrigger,
		handleDocumentMouseUp,
		store
	]);
	const parentMenubarHasSubmenuOpen = isInMenubar && parent.context.hasSubmenuOpen;
	const hoverProps = useHoverReferenceInteraction(floatingRootContext, {
		enabled: (openOnHoverProp ?? parentMenubarHasSubmenuOpen) && !disabled && (!isInMenubar || parentMenubarHasSubmenuOpen && !isMountedByThisTrigger),
		handleClose: safePolygon({ blockPointerEvents: !isInMenubar }),
		mouseOnly: true,
		move: false,
		restMs: parent.type === void 0 ? delay : void 0,
		delay: { close: closeDelay },
		triggerElementRef,
		externalTree: floatingTreeRoot,
		isActiveTrigger: isTriggerActive,
		isClosing: () => store.select("transitionStatus") === "ending"
	});
	const stickIfOpen = useStickIfOpen(isOpenedByThisTrigger, store.select("lastOpenChangeReason"));
	const click = useClick(floatingRootContext, {
		enabled: !disabled,
		event: isOpenedByThisTrigger && isInMenubar ? "click" : "mousedown",
		toggle: true,
		ignoreMouse: false,
		stickIfOpen: parent.type === void 0 ? stickIfOpen : false
	});
	const focus = useFocus(floatingRootContext, { enabled: !disabled && parentMenubarHasSubmenuOpen });
	const mixedToggleHandlers = useMixedToggleClickHandler({
		open: isOpenedByThisTrigger,
		enabled: isInMenubar,
		mouseDownAction: "open"
	});
	const localInteractionProps = import_react.useMemo(() => mergeProps(focus.reference, click.reference), [focus.reference, click.reference]);
	const rootTriggerProps = store.useState("triggerProps", isMountedByThisTrigger);
	const { preFocusGuardRef, handlePreFocusGuardFocus, handleFocusTargetFocus } = useTriggerFocusGuards(store, triggerElementRef);
	const state = {
		disabled,
		open: isOpenedByThisTrigger
	};
	const ref = [
		triggerRef,
		forwardedRef,
		buttonRef,
		registerTrigger,
		triggerElementRef
	];
	const props = [
		localInteractionProps,
		hoverProps ?? EMPTY_OBJECT,
		rootTriggerProps,
		{
			"aria-haspopup": "menu",
			"aria-controls": popupId,
			id: thisTriggerId,
			onMouseDown: (event) => {
				if (store.select("open")) return;
				allowMouseUpTriggerTimeout.start(200, () => {
					store.context.allowMouseUpTriggerRef.current = true;
				});
				ownerDocument(event.currentTarget).addEventListener("mouseup", handleDocumentMouseUp, { once: true });
			}
		},
		isInMenubar ? { role: "menuitem" } : {},
		mixedToggleHandlers,
		elementProps,
		getButtonProps
	];
	const element = useRenderElement("button", componentProps, {
		enabled: !isInMenubar,
		stateAttributesMapping: pressableTriggerOpenStateMapping,
		state,
		ref,
		props
	});
	if (isInMenubar) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompositeItem, {
		tag: "button",
		render,
		className,
		style,
		state,
		refs: ref,
		props,
		stateAttributesMapping: pressableTriggerOpenStateMapping
	});
	if (isOpenedByThisTrigger) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusGuard, {
			ref: preFocusGuardRef,
			onFocus: handlePreFocusGuardFocus
		}, `${thisTriggerId}-pre-focus-guard`),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: element }, thisTriggerId),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusGuard, {
			ref: store.context.triggerFocusTargetRef,
			onFocus: handleFocusTargetFocus
		}, `${thisTriggerId}-post-focus-guard`)
	] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: element }, thisTriggerId);
});
/**
* Determines whether to ignore clicks after a hover-open.
*/
function useStickIfOpen(open, openReason) {
	const stickIfOpenTimeout = useTimeout();
	const [stickIfOpen, setStickIfOpen] = import_react.useState(false);
	useIsoLayoutEffect(() => {
		if (open && openReason === "trigger-hover") {
			setStickIfOpen(true);
			stickIfOpenTimeout.start(500, () => {
				setStickIfOpen(false);
			});
		} else if (!open) {
			stickIfOpenTimeout.clear();
			setStickIfOpen(false);
		}
	}, [
		open,
		openReason,
		stickIfOpenTimeout
	]);
	return stickIfOpen;
}
function useMenuParent() {
	const menubarContext = useMenubarContext(true);
	return import_react.useMemo(() => {
		if (menubarContext) return {
			type: "menubar",
			context: menubarContext
		};
		return { type: void 0 };
	}, [menubarContext]);
}
//#endregion
//#region components/ui/dropdown-menu.tsx
function DropdownMenu({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuRoot, {
		"data-slot": "dropdown-menu",
		...props
	});
}
function DropdownMenuTrigger({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuTrigger, {
		"data-slot": "dropdown-menu-trigger",
		...props
	});
}
function DropdownMenuContent({ align = "start", alignOffset = 0, side = "bottom", sideOffset = 4, className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuPositioner, {
		className: "isolate z-50 outline-none",
		align,
		alignOffset,
		side,
		sideOffset,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuPopup, {
			"data-slot": "dropdown-menu-content",
			className: cn("z-50 max-h-(--available-height) w-(--anchor-width) min-w-32 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 outline-none data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-start-2 data-[side=inline-start]:slide-in-from-end-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:overflow-hidden data-closed:fade-out-0 data-closed:zoom-out-95", className),
			...props
		})
	}) });
}
function DropdownMenuItem({ className, inset, variant = "default", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuItem, {
		"data-slot": "dropdown-menu-item",
		"data-inset": inset,
		"data-variant": variant,
		className: cn("group/dropdown-menu-item relative flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:ps-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive", className),
		...props
	});
}
//#endregion
//#region components/ui/empty.tsx
function Empty({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "empty",
		className: cn("flex w-full min-w-0 flex-1 flex-col items-center justify-center gap-3 rounded-lg border-dashed p-4 text-center text-balance", className),
		...props
	});
}
function EmptyHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "empty-header",
		className: cn("flex max-w-sm flex-col items-center gap-2", className),
		...props
	});
}
var emptyMediaVariants = cva("mb-1.5 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0", {
	variants: { variant: {
		default: "bg-transparent",
		icon: "flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground [&_svg:not([class*='size-'])]:size-4"
	} },
	defaultVariants: { variant: "default" }
});
function EmptyMedia({ className, variant = "default", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "empty-icon",
		"data-variant": variant,
		className: cn(emptyMediaVariants({
			variant,
			className
		})),
		...props
	});
}
function EmptyTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "empty-title",
		className: cn("font-heading text-sm font-medium tracking-tight", className),
		...props
	});
}
function EmptyDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "empty-description",
		className: cn("text-sm/relaxed text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary", className),
		...props
	});
}
//#endregion
//#region components/ui/table.tsx
function Table({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "table-container",
		className: "relative w-full overflow-x-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
			"data-slot": "table",
			className: cn("w-full caption-bottom text-sm", className),
			...props
		})
	});
}
function TableHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
		"data-slot": "table-header",
		className: cn("[&_tr]:border-b", className),
		...props
	});
}
function TableBody({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
		"data-slot": "table-body",
		className: cn("[&_tr:last-child]:border-0", className),
		...props
	});
}
function TableRow({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
		"data-slot": "table-row",
		className: cn("border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted", className),
		...props
	});
}
function TableHead({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
		"data-slot": "table-head",
		className: cn("h-10 px-2 text-start align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pe-0", className),
		...props
	});
}
function TableCell({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
		"data-slot": "table-cell",
		className: cn("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pe-0", className),
		...props
	});
}
//#endregion
//#region app/page.tsx
var linkRows = [
	[
		"منتورشیپ کدریویو",
		"۶۷۳۹۹",
		"۲,۰۰۰,۰۰۰",
		"۰۹ بهمن ۱۴۰۳، ۱۴:۵۰"
	],
	[
		"منتورشیپ فوری",
		"۶۷۳۹۹",
		"۵,۰۰۰,۰۰۰",
		"۰۷ بهمن ۱۴۰۳، ۱۹:۱۷"
	],
	[
		"منتورشیپ آموزشی",
		"۶۷۳۹۲",
		"۱۰,۰۰۰,۰۰۰",
		"۰۷ بهمن ۱۴۰۳، ۱۹:۱۳"
	]
];
function SearchInput() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative w-full sm:w-56",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 start-2.5 -translate-y-1/2 text-muted-foreground" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				"aria-label": "جستجو",
				placeholder: "جستجو",
				className: "ps-8 pe-10"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
				className: "pointer-events-none absolute top-1/2 end-2 -translate-y-1/2 rounded-full border bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground",
				children: "/"
			})
		]
	});
}
function FilterChip({ children, active = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		variant: active ? "default" : "outline",
		size: "sm",
		className: "rounded-full",
		children: [children, active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { "data-icon": "inline-end" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { "data-icon": "inline-end" })]
	});
}
function TableFooterBar({ count }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-2 border-t px-3 py-2.5 sm:flex-row sm:items-center sm:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 text-sm text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "تعداد سطر در صفحه:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
				defaultValue: "15",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
					className: "h-8 w-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: "15",
						children: "۱۵"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: "25",
						children: "۲۵"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: "50",
						children: "۵۰"
					})
				] })]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm text-muted-foreground",
			children: count
		})]
	});
}
function TransactionsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeading, {
			title: "تراکنش‌ها",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { "data-icon": "inline-start" }), "ایجاد خروجی"]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			className: "min-h-[220px]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				className: "flex flex-col gap-2.5 pt-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
								active: true,
								children: "وضعیت: موفق"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, { children: "روش پرداخت" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, { children: "تاریخ" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, { children: "مبلغ" })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchInput, {})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, {
					className: "min-h-36 border-none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(EmptyHeader, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyMedia, {
							variant: "icon",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Receipt, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyTitle, { children: "آخرین تراکنش‌های درگاه" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyDescription, { children: "تاکنون تراکنشی در این درگاه انجام نشده است" })
					] })
				})]
			})
		})]
	});
}
function DiscountsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeading, {
			title: "کدهای تخفیف",
			subtitle: "ایجاد و مدیریت کدهای تخفیف برای لینک‌های پرداخت",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { "data-icon": "inline-start" }), "ایجاد کد تخفیف"] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
			className: "border-b",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, { children: "وضعیت" })
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
			className: "p-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "کد تخفیف" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "دفعات استفاده شده" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "حداکثر قابل استفاده" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "تاریخ و ساعت انقضا" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "وضعیت" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { className: "w-10" })
			] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableBody, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
					className: "text-sm font-medium",
					dir: "ltr",
					children: "webinar30"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: "۳۰ درصد · تمام لینک‌های پرداخت"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: "۰" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: "نامحدود" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: "–" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "فعال" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowActions, {}) })
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
					className: "text-sm font-medium",
					dir: "ltr",
					children: "webinar_30"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: "۳۰ درصد · تمام لینک‌های پرداخت"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: "۰" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: "نامحدود" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: "۱۲ بهمن ۱۴۰۳، ۱۸:۲۰" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "secondary",
					children: "غیرفعال"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowActions, {}) })
			] })] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableFooterBar, { count: "۲ نتیجه" })]
		})] })]
	});
}
function LinksPage() {
	const [copied, setCopied] = (0, import_react.useState)(false);
	const handleCopy = async () => {
		await navigator.clipboard?.writeText("https://zarinp.al/mahdipakravan");
		setCopied(true);
		toast.success("لینک کپی شد");
		setTimeout(() => setCopied(false), 1500);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeading, {
			title: "لینک‌های پرداخت",
			subtitle: "ایجاد و مدیریت لینک‌های پرداخت"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
			className: "border-b pb-2.5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 items-center gap-2 rounded-full border bg-muted/30 px-2.5 py-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex size-7 shrink-0 items-center justify-center rounded-lg border bg-background",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Receipt, { className: "text-muted-foreground" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: "لینک پرداخت سریع: "
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							dir: "ltr",
							children: "https://zarinp.al/mahdipakravan"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "icon-sm",
						onClick: handleCopy,
						children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "کپی"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "icon-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "اشتراک‌گذاری"
						})]
					})]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
			className: "flex flex-col gap-2.5 pt-2.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, { children: "نوع" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, { children: "وضعیت" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, { children: "مبلغ" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchInput, {})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "overflow-hidden rounded-lg border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "عنوان" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableHead, { children: ["مبلغ ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-normal text-muted-foreground",
						children: "ریال"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "موجودی/ظرفیت" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "تاریخ ایجاد" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "وضعیت" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { className: "w-10" })
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: linkRows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex size-8 shrink-0 items-center justify-center rounded-lg border bg-muted/40",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Receipt, { className: "text-muted-foreground" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: row[0]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [row[1], " · لینک فروش محصول"]
						})] })]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: row[2] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-muted-foreground",
						children: "تعیین نشده"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: row[3] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "secondary",
						children: "غیرفعال"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowActions, {}) })
				] }, row[0])) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableFooterBar, { count: "۳ نتیجه" })]
			})]
		})] })]
	});
}
function RowActions() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		variant: "ghost",
		size: "icon-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "عملیات"
		})]
	}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
		align: "end",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, { children: "ویرایش" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, { children: "غیرفعال‌سازی" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				variant: "destructive",
				children: "حذف"
			})
		]
	})] });
}
var pages = {
	"business-graph": BusinessGraphPage,
	"sales-pulse": SalesPulsePage,
	"buyer-loyalty": BuyerLoyaltyPage,
	"peer-position": PeerPositionPage,
	"payment-health": PaymentHealthPage,
	transactions: TransactionsPage,
	discounts: DiscountsPage,
	links: LinksPage
};
function Home() {
	const [page, setPage] = (0, import_react.useState)("sales-pulse");
	const mainRef = (0, import_react.useRef)(null);
	const ActivePage = pages[page];
	const handleNavigate = (nextPage) => {
		setPage(nextPage);
		requestAnimationFrame(() => {
			window.scrollTo(0, 0);
			mainRef.current?.scrollTo(0, 0);
			mainRef.current?.focus({ preventScroll: true });
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppSidebar, {
		activePage: page,
		onNavigate: handleNavigate
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarInset, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		ref: mainRef,
		id: "dashboard-main",
		tabIndex: -1,
		"aria-label": PAGE_TITLES[page],
		className: "dashboard-shell flex flex-1 flex-col gap-3 px-3 pb-3 pt-4 outline-none md:px-4 md:pb-4 md:pt-5 xl:px-5 xl:pb-5 xl:pt-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActivePage, {})
	})] })] });
}
//#endregion
export { Home as default };
