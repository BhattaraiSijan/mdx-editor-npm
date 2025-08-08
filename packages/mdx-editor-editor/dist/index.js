import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import * as t$2 from "react";
import t__default, { memo, forwardRef, useRef, useEffect, useImperativeHandle, useState, useReducer, createContext, useMemo, useLayoutEffect, useCallback, Suspense } from "react";
import { customComponents, LegacyGlobalStyles } from "@sijanbhattarai/mdx-editor-core";
import { usePublisher, insertJsx$, Button, useMdastNodeUpdater, GenericJsxEditor, GenericDirectiveEditor, MDXEditor, headingsPlugin, listsPlugin, quotePlugin, thematicBreakPlugin, markdownShortcutPlugin, codeBlockPlugin, frontmatterPlugin, imagePlugin, linkPlugin, linkDialogPlugin, directivesPlugin, diffSourcePlugin, toolbarPlugin, jsxPlugin, realmPlugin, UndoRedo, BoldItalicUnderlineToggles, ListsToggle, BlockTypeSelect, CreateLink, CodeToggle, InsertImage, DiffSourceToggleWrapper } from "@mdxeditor/editor";
import { MapContextProvider, useMapContext, InputField, transformToVedaData, DevseedUiThemeProvider, VedaUIProvider, ReactQueryProvider, reserializedMdxContent } from "@sijanbhattarai/mdx-editor-utils";
import Dt$2 from "focus-trap-react";
import ReactDOM from "react-dom";
import "@sijanbhattarai/mdx-editor-ui";
import "@teamimpact/veda-ui";
import dynamic from "next/dynamic";
import Link from "next/link";
import { createUITheme } from "@devseed-ui/theme-provider";
import { visit } from "unist-util-visit";
import { fromMarkdown } from "mdast-util-from-markdown";
import { mdxJsx } from "micromark-extension-mdx-jsx";
import { mdxJsxFromMarkdown } from "mdast-util-mdx-jsx";
function Ft$2(E) {
  return E && E.__esModule && Object.prototype.hasOwnProperty.call(E, "default") ? E.default : E;
}
var bt$1 = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(E) {
  (function() {
    var w = {}.hasOwnProperty;
    function k() {
      for (var Be = "", je = 0; je < arguments.length; je++) {
        var Qe = arguments[je];
        Qe && (Be = ge(Be, T(Qe)));
      }
      return Be;
    }
    function T(Be) {
      if (typeof Be == "string" || typeof Be == "number")
        return Be;
      if (typeof Be != "object")
        return "";
      if (Array.isArray(Be))
        return k.apply(null, Be);
      if (Be.toString !== Object.prototype.toString && !Be.toString.toString().includes("[native code]"))
        return Be.toString();
      var je = "";
      for (var Qe in Be)
        w.call(Be, Qe) && Be[Qe] && (je = ge(je, Qe));
      return je;
    }
    function ge(Be, je) {
      return je ? Be ? Be + " " + je : Be + je : Be;
    }
    E.exports ? (k.default = k, E.exports = k) : window.classNames = k;
  })();
})(bt$1);
var Pt$1 = bt$1.exports;
const g$2 = /* @__PURE__ */ Ft$2(Pt$1), Se$1 = ({
  type: E,
  children: w,
  secondary: k,
  base: T,
  accentStyle: ge,
  outline: Be,
  inverse: je,
  size: Qe,
  unstyled: Je,
  onClick: Ze,
  className: Xe,
  ...gt
}) => {
  const dt = g$2(
    "usa-button",
    {
      "usa-button--secondary": k,
      "usa-button--base": T,
      "usa-button--accent-cool": ge === "cool",
      "usa-button--accent-warm": ge === "warm",
      "usa-button--outline": Be,
      "usa-button--inverse": je,
      "usa-button--big": Qe === "big",
      "usa-button--unstyled": Je
    },
    Xe
  );
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: E,
      className: dt,
      onClick: Ze,
      "data-testid": "button",
      ...gt,
      children: w
    }
  );
}, qt$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1l-.5-2zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" })), Qt$1 = memo(qt$1), Jt$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("circle", { cx: 17, cy: 4.54, r: 2 }), /* @__PURE__ */ t$2.createElement("path", { d: "M14 17h-2c0 1.65-1.35 3-3 3s-3-1.35-3-3 1.35-3 3-3v-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5zm3-3.5h-1.86l1.67-3.67C17.42 8.5 16.44 7 14.96 7h-5.2c-.81 0-1.54.47-1.87 1.2L7.22 10l1.92.53L9.79 9H12l-1.83 4.1c-.6 1.33.39 2.9 1.85 2.9H17v5h2v-5.5c0-1.1-.9-2-2-2z" })), Xt$1 = memo(Jt$1), e1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M4 10h3v7H4zm6.5 0h3v7h-3zM2 19h20v3H2zm15-9h3v7h-3zm-5-9L2 6v2h20V6z" })), t1 = memo(e1), s1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" })), a1 = memo(s1), n1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.947 9.947 0 0 1 12.28 0C16.43 19.18 14.03 20 12 20z" })), c1 = memo(n1), i1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" })), o1 = memo(i1), r1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" })), l1 = memo(r1), h1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" })), m1 = memo(h1), d1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "m22 5.72-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39 6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a9 9 0 0 0 0-18zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" })), v1 = memo(d1), g1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" })), u1 = memo(g1), w1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z" })), p1 = memo(w1), f1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" })), M1 = memo(f1), x1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" })), E1 = memo(x1), b1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "m7 10 5 5 5-5z" })), z1 = memo(b1), S1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "m7 14 5-5 5 5z" })), _1 = memo(S1), C1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" })), N1 = memo(C1), y1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" })), L1 = memo(y1), k1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "m14 12-2 2-2-2 2-2 2 2zm-2-6 2.12 2.12 2.5-2.5L12 1 7.38 5.62l2.5 2.5L12 6zm-6 6 2.12-2.12-2.5-2.5L1 12l4.62 4.62 2.5-2.5L6 12zm12 0-2.12 2.12 2.5 2.5L23 12l-4.62-4.62-2.5 2.5L18 12zm-6 6-2.12-2.12-2.5 2.5L12 23l4.62-4.62-2.5-2.5L12 18z" })), $1 = memo(k1), H1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" })), V1 = memo(H1), B1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5a2.5 2.5 0 0 1 5 0v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5a2.5 2.5 0 0 0 5 0V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z" })), O1 = memo(B1), A1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" })), D1 = memo(A1), T1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8A5.87 5.87 0 0 1 6 12c0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z" })), F1 = memo(T1), P1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M20 8v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8c0-1.86 1.28-3.41 3-3.86V2h3v2h4V2h3v2.14c1.72.45 3 2 3 3.86zM6 12v2h10v2h2v-4H6z" })), R1 = memo(P1), U1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("circle", { cx: 7, cy: 7, r: 2 }), /* @__PURE__ */ t$2.createElement("path", { d: "M20 13V4.83C20 3.27 18.73 2 17.17 2c-.75 0-1.47.3-2 .83l-1.25 1.25c-.16-.05-.33-.08-.51-.08-.4 0-.77.12-1.08.32l2.76 2.76c.2-.31.32-.68.32-1.08 0-.18-.03-.34-.07-.51l1.25-1.25a.828.828 0 0 1 1.41.59V13h-6.85c-.3-.21-.57-.45-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5A2.251 2.251 0 0 0 5 12.25V13H2v6c0 1.1.9 2 2 2 0 .55.45 1 1 1h14c.55 0 1-.45 1-1 1.1 0 2-.9 2-2v-6h-2z" })), Y1 = memo(U1), W1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: "1em", viewBox: "0 0 24 24", width: "1em", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M17 10.13a33.86 33.86 0 0 1-10 0 1.92 1.92 0 0 1-1.51-1.46 10.42 10.42 0 0 1 0-4.84 1.92 1.92 0 0 1 1.57-1.46 33.86 33.86 0 0 1 10 0 1.9 1.9 0 0 1 1.56 1.46 10.16 10.16 0 0 1 0 4.84A1.9 1.9 0 0 1 17 10.13Zm4 12.12H7a5.25 5.25 0 0 1 0-10.5h10a3.25 3.25 0 0 1 0 6.5H7a1.25 1.25 0 0 1 0-2.5h10a.75.75 0 0 0 0-1.5H7a2.75 2.75 0 0 0 0 5.5h14a1.25 1.25 0 0 1 0 2.5Z" })), K1 = memo(W1), I1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" })), Z1 = memo(I1), G1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M20 8h-2.81a5.985 5.985 0 0 0-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z" })), j1 = memo(G1), q1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "m22.7 19-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" })), Q1 = memo(q1), J1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z" })), X1 = memo(J1), es$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M18 11v2h4v-2h-4zm-2 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61zM20.4 5.6c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.4zM4 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v4h2v-4h1l5 3V6L8 9H4zm11.5 3c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34z" })), ts$1 = memo(es$1), ss$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { fillRule: "evenodd", d: "m12 5 8 13h2v2H2v-2h2l8-13zm.05 8-2.69 5h5.38l-2.69-5zM5.5 3l-.018.024A2.5 2.5 0 0 0 7.498 7 2.5 2.5 0 1 1 5.5 3z" })), as$1 = memo(ss$1), ns$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" })), cs$1 = memo(ns$1), is$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" })), os$1 = memo(is$1), rs$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" })), ls$1 = memo(rs$1), hs$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" })), ms$1 = memo(hs$1), ds$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" })), vs$1 = memo(ds$1), gs$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" })), us$1 = memo(gs$1), ws$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M21.6 18.2 13 11.75v-.91a3.496 3.496 0 0 0-.18-6.75A3.51 3.51 0 0 0 8.5 7.5h2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .84-.69 1.52-1.53 1.5-.54-.01-.97.45-.97.99v1.76L2.4 18.2c-.77.58-.36 1.8.6 1.8h18c.96 0 1.37-1.22.6-1.8zM6 18l6-4.5 6 4.5H6z" })), ps$1 = memo(ws$1), fs$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "m16.99 5 .63 1.37 1.37.63-1.37.63L16.99 9l-.63-1.37L14.99 7l1.37-.63.63-1.37M11 6.13V4h2c.57 0 1.1.17 1.55.45l1.43-1.43A4.899 4.899 0 0 0 13 2H7.5v2H9v2.14A5.007 5.007 0 0 0 5.26 9.5h3.98L15 11.65v-.62a5 5 0 0 0-4-4.9zM1 22h4V11H1v11zm19-5h-7l-2.09-.73.33-.94L13 16h2.82c.65 0 1.18-.53 1.18-1.18 0-.49-.31-.93-.77-1.11L8.97 11H7v9.02L14 22l8-3c-.01-1.1-.89-2-2-2zm0-3c1.1 0 2-.9 2-2s-2-4-2-4-2 2.9-2 4 .9 2 2 2z" })), Ms$1 = memo(fs$1), xs$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: "1em", viewBox: "0 0 24 24", width: "1em", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M15.7 2.37 15 2.3V4a3 3 0 0 1-6 0V2.3l-.7.07a7 7 0 0 0-6.3 7V20h3V10h1.5v12h11V10H19v10h3V9.33a7 7 0 0 0-6.3-6.96Z" })), Es$1 = memo(xs$1), bs$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })), zs$1 = memo(bs$1), Ss$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 7H9.5v-.5h-2v3h2V13H11v1c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1zm7 0h-1.5v-.5h-2v3h2V13H18v1c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1z" })), _s = memo(Ss$1), Cs$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" })), Ns$1 = memo(Cs$1), ys$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" })), Ls$1 = memo(ys$1), ks$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" })), $s$1 = memo(ks$1), Hs = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M11 14H9a9 9 0 0 1 9-9v2c-3.87 0-7 3.13-7 7zm7-3V9c-2.76 0-5 2.24-5 5h2c0-1.66 1.34-3 3-3zM7 4c0-1.11-.89-2-2-2s-2 .89-2 2 .89 2 2 2 2-.89 2-2zm4.45.5h-2A2.99 2.99 0 0 1 6.5 7h-3C2.67 7 2 7.67 2 8.5V11h6V8.74a4.97 4.97 0 0 0 3.45-4.24zM19 17c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm1.5 1h-3a2.99 2.99 0 0 1-2.95-2.5h-2A4.97 4.97 0 0 0 16 19.74V22h6v-2.5c0-.83-.67-1.5-1.5-1.5z" })), Vs$1 = memo(Hs), Bs$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "m13.783 15.172 2.121-2.121 5.996 5.996-2.121 2.121zM17.5 10c1.93 0 3.5-1.57 3.5-3.5 0-.58-.16-1.12-.41-1.6l-2.7 2.7-1.49-1.49 2.7-2.7c-.48-.25-1.02-.41-1.6-.41C15.57 3 14 4.57 14 6.5c0 .41.08.8.21 1.16l-1.85 1.85-1.78-1.78.71-.71-1.41-1.41L12 3.49a3 3 0 0 0-4.24 0L4.22 7.03l1.41 1.41H2.81l-.71.71 3.54 3.54.71-.71V9.15l1.41 1.41.71-.71 1.78 1.78-7.41 7.41 2.12 2.12L16.34 9.79c.36.13.75.21 1.16.21z" })), Os$1 = memo(Bs$1), As$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: "1em", viewBox: "0 0 24 24", width: "1em", ...E }, /* @__PURE__ */ t$2.createElement("circle", { cx: 10.5, cy: 4.5, r: 1.5 }), /* @__PURE__ */ t$2.createElement("path", { d: "M19.59 16h-1.27l-.64.71h-1.27L15.14 21h1.27l.64-.71h1.9l.64.71h1.27l-1.27-5zm-5.21-3.28L14 14.19l-3.8-1.26-.1-.16.52-3.13c.93 1.37 2.15 2.11 4.6 2.11v-1.5c-2.44 0-3.09-.77-3.9-2.39a2.65 2.65 0 0 0-3-1.59L3.75 7.41v3.38l-1.51-.5-.48 1.42 4.35 1.45L5 20.86l2 .28 1-7.34.38.13L10 16.3V21h2v-5.3l-.49-.7 2 .67-.37 1.27 1.91.57 1.24-4.19Zm-9.13-1.43v-2.7l1.57-.4-.49 3.46Z" })), Ds$1 = memo(As$1), Ts$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-2 8c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8H8v-.57c0-.81.48-1.53 1.22-1.85a6.95 6.95 0 0 1 5.56 0A2.01 2.01 0 0 1 16 17.43V18z" })), Fs$1 = memo(Ts$1), Ps$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" })), Rs$1 = memo(Ps$1), Us = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M21.25 10.5c-.41 0-.75.34-.75.75h-1.54a6.978 6.978 0 0 0-1.52-3.65l1.09-1.09.01.01c.29.29.77.29 1.06 0s.29-.77 0-1.06L18.54 4.4a.754.754 0 0 0-1.06 0c-.29.29-.29.76-.01 1.05l-1.09 1.09a7.015 7.015 0 0 0-3.64-1.51V3.5h.01c.41 0 .75-.34.75-.75S13.16 2 12.75 2h-1.5c-.41 0-.75.34-.75.75s.33.74.74.75v1.55c-1.37.14-2.62.69-3.64 1.51L6.51 5.47l.01-.01c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0L4.4 5.46c-.29.29-.29.77 0 1.06.29.29.76.29 1.05.01l1.09 1.09a6.89 6.89 0 0 0-1.5 3.63H3.5c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.5c0 .41.34.75.75.75s.75-.34.75-.75h1.54c.15 1.37.69 2.61 1.5 3.63l-1.09 1.09a.742.742 0 0 0-1.05.01c-.29.29-.29.77 0 1.06l1.06 1.06c.29.29.77.29 1.06 0 .29-.29.29-.77 0-1.06l-.01-.01 1.09-1.09c1.02.82 2.26 1.36 3.63 1.51v1.55c-.41.01-.74.34-.74.75s.34.75.75.75h1.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-.01v-1.54c1.37-.14 2.62-.69 3.64-1.51l1.09 1.09c-.29.29-.28.76.01 1.05.29.29.77.29 1.06 0l1.06-1.06c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-.01.01-1.09-1.09a7.025 7.025 0 0 0 1.52-3.65h1.54c0 .41.34.75.75.75s.75-.34.75-.75v-1.5c.01-.4-.33-.74-.74-.74zM13.75 8c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM12 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1.75-5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM8.5 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm1.75 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm3.5 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm.75-4c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1z" })), Ys$1 = memo(Us), Ws$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" })), Ks$1 = memo(Ws$1), Is$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M22 9 12 2 2 9h9v13h2V9z" }), /* @__PURE__ */ t$2.createElement("path", { d: "m4.14 12-1.96.37.82 4.37V22h2l.02-4H7v4h2v-6H4.9zm14.96 4H15v6h2v-4h1.98l.02 4h2v-5.26l.82-4.37-1.96-.37z" })), Zs$1 = memo(Is$1), Gs$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" })), js$1 = memo(Gs$1), qs$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-4-8c0-.55.45-1 1-1s1 .45 1 1h-1v1h1v2h-1v1h1v2h-2V5z" })), Qs$1 = memo(qs$1), Js$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "m21.41 10.59-7.99-8c-.78-.78-2.05-.78-2.83 0l-8.01 8c-.78.78-.78 2.05 0 2.83l8.01 8c.78.78 2.05.78 2.83 0l7.99-8c.79-.79.79-2.05 0-2.83zM13.5 14.5V12H10v3H8v-4c0-.55.45-1 1-1h4.5V7.5L17 11l-3.5 3.5z" })), Xs$1 = memo(Js$1), ea = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10 2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4L11 14v5h2v-6.2l-2.2-2.3zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z" })), ta = memo(ea), sa = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z" })), aa = memo(sa), na = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" })), ca = memo(na), ia = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7" })), oa = memo(ia), ra = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31A7.902 7.902 0 0 1 12 20zm6.31-3.1L7.1 5.69A7.902 7.902 0 0 1 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z" })), la = memo(ra), ha = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "m13 10.17-2.5-2.5V2.25a1.25 1.25 0 0 1 2.5 0v7.92zm7 2.58v-7.5a1.25 1.25 0 0 0-2.5 0V11h-1V3.25a1.25 1.25 0 0 0-2.5 0v7.92l6 6v-4.42zM9.5 4.25C9.5 3.56 8.94 3 8.25 3c-.67 0-1.2.53-1.24 1.18L9.5 6.67V4.25zm3.5 5.92-2.5-2.5V2.25a1.25 1.25 0 0 1 2.5 0v7.92zm7 2.58v-7.5a1.25 1.25 0 0 0-2.5 0V11h-1V3.25a1.25 1.25 0 0 0-2.5 0v7.92l6 6v-4.42zM9.5 4.25C9.5 3.56 8.94 3 8.25 3c-.67 0-1.2.53-1.24 1.18L9.5 6.67V4.25zm11.69 16.94L2.81 2.81 1.39 4.22l5.63 5.63L7 9.83v4.3c-1.11-.64-2.58-1.47-2.6-1.48-.17-.09-.34-.14-.54-.14-.26 0-.5.09-.7.26-.04.01-1.16 1.11-1.16 1.11l6.8 7.18c.57.6 1.35.94 2.18.94H17c.62 0 1.18-.19 1.65-.52l-.02-.02 1.15 1.15 1.41-1.42z" })), ma = memo(ha), da = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M20 9H4v2h16V9zM4 15h16v-2H4v2z" })), va = memo(da), ga = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: "1em", viewBox: "0 0 24 24", width: "1em", ...E }, /* @__PURE__ */ t$2.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ t$2.createElement("path", { d: "M6.05 8.05a7.001 7.001 0 0 0-.02 9.88c1.47-3.4 4.09-6.24 7.36-7.93A15.952 15.952 0 0 0 8 19.32c2.6 1.23 5.8.78 7.95-1.37C19.43 14.47 20 4 20 4S9.53 4.57 6.05 8.05z" })), ua = memo(ga), wa = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" })), pa = memo(wa), fa = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M21 14c0-.55-.45-1-1-1h-2v2h2c.55 0 1-.45 1-1zm-1 3h-2v2h2c.55 0 1-.45 1-1s-.45-1-1-1zm-8-3h-2v4h2c0 1.1.9 2 2 2h3v-8h-3c-1.1 0-2 .9-2 2z" }), /* @__PURE__ */ t$2.createElement("path", { d: "M5 13c0-1.1.9-2 2-2h1.5c1.93 0 3.5-1.57 3.5-3.5S10.43 4 8.5 4H5c-.55 0-1 .45-1 1s.45 1 1 1h3.5c.83 0 1.5.67 1.5 1.5S9.33 9 8.5 9H7c-2.21 0-4 1.79-4 4s1.79 4 4 4h2v-2H7c-1.1 0-2-.9-2-2z" })), Ma = memo(fa), xa = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0 0 11 15.9V19H7v2h10v-2h-4v-3.1a5.01 5.01 0 0 0 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" })), Ea = memo(xa), ba = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" })), za = memo(ba), Sa = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" })), _a = memo(Sa), Ca = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" })), Na = memo(Ca), ya = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" })), La = memo(ya), ka = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" })), $a = memo(ka), Ha = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: "1em", viewBox: "0 0 24 24", width: "1em", ...E }, /* @__PURE__ */ t$2.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ t$2.createElement("path", { d: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" })), Va = memo(Ha), Ba = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "m4 18 8.5-6L4 6v12zm9-12v12l8.5-6L13 6z" })), Oa = memo(Ba), Aa = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M11 18V6l-8.5 6 8.5 6zm.5-6 8.5 6V6l-8.5 6z" })), Da = memo(Aa), Ta = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" })), Fa = memo(Ta), Pa = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" })), Ra = memo(Pa), Ua = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M19 9h-1V4H8v16h14v-8c0-1.66-1.34-3-3-3zm-9-3h6v3h-6V6zm4 11h-4v-5h4v5zm2 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm3 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM4.5 8A2.5 2.5 0 0 0 2 10.5v8a2.5 2.5 0 0 0 5 0v-8A2.5 2.5 0 0 0 4.5 8z" })), Ya = memo(Ua), Wa = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" })), Ka = memo(Wa), Ia = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M15 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V7l-5-5zM6 20V4h8v4h4v12H6zm10-10v5c0 2.21-1.79 4-4 4s-4-1.79-4-4V8.5a2.5 2.5 0 0 1 2.76-2.49c1.3.13 2.24 1.32 2.24 2.63V15h-2V8.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5V15c0 1.1.9 2 2 2s2-.9 2-2v-5h2z" })), Za = memo(Ia), Ga = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" })), ja = memo(Ga), qa = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39A.998.998 0 0 0 18.95 4H5.04c-.83 0-1.3.95-.79 1.61z" })), Qa = memo(qa), Ja = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" })), Xa = memo(Ja), e2 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2a.506.506 0 0 1 .2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67a.49.49 0 0 1-.44.28zM3.5 9.72a.499.499 0 0 1-.41-.79c.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25a.5.5 0 0 1-.12.7c-.23.16-.54.11-.7-.12a9.388 9.388 0 0 0-3.39-2.94c-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07a.47.47 0 0 1-.35-.15c-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1a7.297 7.297 0 0 1-2.17-5.22c0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29a11.14 11.14 0 0 1-.73-3.96c0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z" })), t2 = memo(e2), s2 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M18.41 16.59 13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z" })), a2 = memo(s2), n2 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M14.4 6 14 4H5v17h2v-7h5.6l.4 2h7V6z" })), c2 = memo(n2), i2 = (E) => /* @__PURE__ */ t$2.createElement("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M6.459 17a4.444 4.444 0 0 1-4.116-2.768 4.541 4.541 0 0 1 .954-4.909 4.405 4.405 0 0 1 4.845-.982 4.5 4.5 0 0 1 2.747 4.159 4.514 4.514 0 0 1-1.292 3.181A4.403 4.403 0 0 1 6.459 17Zm11.111 0a4.444 4.444 0 0 1-4.116-2.768 4.541 4.541 0 0 1 .954-4.909 4.405 4.405 0 0 1 4.845-.982A4.5 4.5 0 0 1 22 12.5a4.514 4.514 0 0 1-1.292 3.181A4.403 4.403 0 0 1 17.57 17Z" })), o2 = memo(i2), r2 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" })), l2 = memo(r2), h2 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: "1em", viewBox: "0 0 24 24", width: "1em", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M17 18.16a6 6 0 0 0-2.95.8 4.08 4.08 0 0 1-2.05.6 3.81 3.81 0 0 1-2-.56 5.84 5.84 0 0 0-5.9 0 4.05 4.05 0 0 1-2 .6v2a6 6 0 0 0 3-.8 4.05 4.05 0 0 1 1.9-.69 3.87 3.87 0 0 1 2.05.6 5.84 5.84 0 0 0 5.9 0 4.08 4.08 0 0 1 2.05-.6 3.81 3.81 0 0 1 2.05.6 5.9 5.9 0 0 0 2.95.8v-2a3.81 3.81 0 0 1-2-.51 6 6 0 0 0-3-.84Zm3-3.65a6.8 6.8 0 0 0-2-.71V10h3l-9-7-9 7h3v3.8a6.8 6.8 0 0 0-1.95.71 4.15 4.15 0 0 1-2 .6v1.95a6.07 6.07 0 0 0 3-.8 3.8 3.8 0 0 1 4.1 0 5.87 5.87 0 0 0 2.95.8 6 6 0 0 0 2.95-.8 3.8 3.8 0 0 1 4.1 0 5.9 5.9 0 0 0 2.95.8v-1.95a3.81 3.81 0 0 1-2.1-.6Zm-9.95 0V11h4v3.54a4.19 4.19 0 0 1-2 .57 3.8 3.8 0 0 1-2.05-.57Z" })), m2 = memo(h2), d2 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" })), v2 = memo(d2), g2 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z" })), u2 = memo(g2), w2 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" })), p2 = memo(w2), f2 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z" })), M2 = memo(f2), x2 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z" })), E2 = memo(x2), b2 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: "1em", viewBox: "0 0 24 24", width: "1em", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7C6.73 19.91 6.14 18 6.14 18A2.69 2.69 0 0 0 5 16.5c-.91-.62.07-.61.07-.61a2.13 2.13 0 0 1 1.53 1 2.14 2.14 0 0 0 2.91.83 2.16 2.16 0 0 1 .63-1.34c-2.14-.21-4.52-1.07-4.52-4.9a3.89 3.89 0 0 1 1-2.69 3.57 3.57 0 0 1 .1-2.64s.84-.27 2.75 1a9.63 9.63 0 0 1 5 0c1.91-1.29 2.75-1 2.75-1a3.57 3.57 0 0 1 .1 2.64 3.89 3.89 0 0 1 1 2.69c0 3.84-2.34 4.68-4.57 4.93a2.39 2.39 0 0 1 .68 1.85v2.75c0 .33.18.58.69.48A10 10 0 0 0 12 2Z", fillRule: "evenodd" })), z2 = memo(b2), S2 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { fillRule: "evenodd", d: "M3 3v8h8V3H3zm6 6H5V5h4v4zm-6 4v8h8v-8H3zm6 6H5v-4h4v4zm4-16v8h8V3h-8zm6 6h-4V5h4v4zm-6 4v8h8v-8h-8zm6 6h-4v-4h4v4z" })), _2 = memo(S2), C2 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M22 9V7h-2v2h-2v2h2v2h2v-2h2V9zM8 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm4.51-8.95C13.43 5.11 14 6.49 14 8s-.57 2.89-1.49 3.95C14.47 11.7 16 10.04 16 8s-1.53-3.7-3.49-3.95zm4.02 9.78C17.42 14.66 18 15.7 18 17v3h2v-3c0-1.45-1.59-2.51-3.47-3.17z" })), N2 = memo(C2), y2 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73 1.17-.52 2.61-.91 4.24-.91zM4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58A2.01 2.01 0 0 0 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29zM20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85A6.95 6.95 0 0 0 20 14c-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24v-1.57zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z" })), L2 = memo(y2), k2 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M17 20c-.29 0-.56-.06-.76-.15-.71-.37-1.21-.88-1.71-2.38-.51-1.56-1.47-2.29-2.39-3-.79-.61-1.61-1.24-2.32-2.53C9.29 10.98 9 9.93 9 9c0-2.8 2.2-5 5-5s5 2.2 5 5h2c0-3.93-3.07-7-7-7S7 5.07 7 9c0 1.26.38 2.65 1.07 3.9.91 1.65 1.98 2.48 2.85 3.15.81.62 1.39 1.07 1.71 2.05.6 1.82 1.37 2.84 2.73 3.55A3.999 3.999 0 0 0 21 18h-2c0 1.1-.9 2-2 2zM7.64 2.64 6.22 1.22C4.23 3.21 3 5.96 3 9s1.23 5.79 3.22 7.78l1.41-1.41C6.01 13.74 5 11.49 5 9s1.01-4.74 2.64-6.36zM11.5 9a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0-5 0z" })), $2 = memo(k2), H2 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" })), V2 = memo(H2), B2 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" })), O2 = memo(B2), A2 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M14.59 8 12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" })), D2 = memo(A2), T2 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" })), F2 = memo(T2), P2 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" })), R2 = memo(P2), U2 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: "1em", viewBox: "0 0 24 24", width: "1em", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm-3 14h-2v-4h-4v4H8V7h2v4h4V7h2Z" })), Y2 = memo(U2), W2 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z" })), K2 = memo(W2), I2 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5-4-4V4h8v3.5l-4 4z" })), Z2 = memo(I2), G2 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: "1em", viewBox: "0 0 24 24", width: "1em", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M19 12a7 7 0 0 0-6.34-7 27.32 27.32 0 0 1 2.21-2.09.44.44 0 0 0-.29-.78 10.62 10.62 0 0 0-9.17 7.5 4.26 4.26 0 0 0-.15.47v.06A7.18 7.18 0 0 0 5 12a7 7 0 0 0 6.35 7 27.71 27.71 0 0 1-2.21 2.1.44.44 0 0 0 .29.78 10.65 10.65 0 0 0 9.23-7.69v-.14c0-.05.05-.13.07-.2A6.76 6.76 0 0 0 19 12Zm-7 3.5a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5Z" })), j2 = memo(G2), q2 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: "1em", viewBox: "0 0 24 24", width: "1em", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M11 14.14C11 13.38 9.33 13 8.5 13S6 13.38 6 14.14V15h5Z" }), /* @__PURE__ */ t$2.createElement("circle", { cx: 8.5, cy: 10.5, r: 1.5 }), /* @__PURE__ */ t$2.createElement("path", { d: "M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm-7 13H4V7h9Zm7 0h-5v-2h5Zm0-4h-5v-2h5Zm0-4h-5V7h5Z" })), Q2 = memo(q2), J2 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" })), X2 = memo(J2), en$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" })), tn = memo(en$1), sn$2 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: "1em", viewBox: "0 0 24 24", width: "1em", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M0 0h24v24H0V0z", fill: "none" }), /* @__PURE__ */ t$2.createElement("path", { d: "M11 7h2v2h-2V7zm0 4h2v6h-2v-6zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" })), an$2 = memo(sn$2), nn$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M21 8c-1.45 0-2.26 1.44-1.93 2.51l-3.55 3.56c-.3-.09-.74-.09-1.04 0l-2.55-2.55C12.27 10.45 11.46 9 10 9c-1.45 0-2.27 1.44-1.93 2.52l-4.56 4.55C2.44 15.74 1 16.55 1 18c0 1.1.9 2 2 2 1.45 0 2.26-1.44 1.93-2.51l4.55-4.56c.3.09.74.09 1.04 0l2.55 2.55C12.73 16.55 13.54 18 15 18c1.45 0 2.27-1.44 1.93-2.52l3.56-3.55c1.07.33 2.51-.48 2.51-1.93 0-1.1-.9-2-2-2z" }), /* @__PURE__ */ t$2.createElement("path", { d: "m15 9 .94-2.07L18 6l-2.06-.93L15 3l-.92 2.07L12 6l2.08.93zM3.5 11 4 9l2-.5L4 8l-.5-2L3 8l-2 .5L3 9z" })), cn$1 = memo(nn$1), on$2 = (E) => /* @__PURE__ */ t$2.createElement("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M8.273 3.063c-.958.045-1.612.198-2.184.423a4.41 4.41 0 0 0-1.592 1.04 4.409 4.409 0 0 0-1.035 1.596c-.222.572-.372 1.227-.414 2.185-.042.958-.052 1.266-.047 3.71.005 2.444.016 2.75.062 3.71.046.958.198 1.612.423 2.184a4.41 4.41 0 0 0 1.04 1.592 4.4 4.4 0 0 0 1.597 1.035c.572.221 1.227.372 2.185.414.958.042 1.266.052 3.71.047 2.443-.005 2.75-.016 3.71-.061.96-.046 1.611-.199 2.183-.423a4.411 4.411 0 0 0 1.592-1.04 4.41 4.41 0 0 0 1.035-1.597c.222-.572.372-1.227.414-2.184.042-.96.052-1.268.047-3.711-.005-2.444-.016-2.75-.061-3.71-.046-.96-.198-1.612-.423-2.184a4.418 4.418 0 0 0-1.04-1.592 4.4 4.4 0 0 0-1.597-1.035c-.572-.221-1.227-.372-2.185-.414-.958-.041-1.266-.052-3.71-.047-2.444.005-2.75.015-3.71.062m.105 16.27c-.878-.038-1.354-.184-1.672-.306a2.802 2.802 0 0 1-1.036-.671 2.772 2.772 0 0 1-.675-1.034c-.124-.317-.272-.793-.313-1.67-.045-.95-.054-1.234-.06-3.637-.004-2.403.005-2.687.046-3.636.038-.877.184-1.354.306-1.671.162-.421.357-.72.672-1.036a2.778 2.778 0 0 1 1.033-.675c.317-.124.793-.272 1.67-.313.95-.045 1.234-.054 3.637-.06 2.402-.005 2.687.004 3.637.046.876.038 1.354.183 1.67.306.421.162.72.357 1.037.671.316.315.511.613.675 1.034.124.317.271.792.313 1.67.045.95.055 1.234.06 3.636.004 2.402-.004 2.688-.046 3.636-.038.878-.184 1.354-.306 1.672a2.79 2.79 0 0 1-.672 1.036 2.78 2.78 0 0 1-1.033.675c-.317.124-.794.271-1.67.313-.95.045-1.234.054-3.637.06-2.403.005-2.687-.005-3.636-.046M15.715 7.19a1.08 1.08 0 1 0 2.16-.004 1.08 1.08 0 0 0-2.16.004m-8.336 4.819a4.62 4.62 0 1 0 9.242-.018 4.62 4.62 0 0 0-9.242.018M9 12.006a3 3 0 1 1 6-.012 3 3 0 0 1-6 .012" })), rn$2 = memo(on$2), ln$2 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z" })), hn$2 = memo(ln$2), mn$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z" })), dn$2 = memo(mn$1), vn$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 5.08 16zm2.95-8H5.08a7.987 7.987 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" })), gn$1 = memo(vn$1), un$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M5.59 7.41 10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z" })), wn$1 = memo(un$1), pn$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" })), fn$1 = memo(pn$1), Mn$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z" })), xn$1 = memo(Mn$1), En$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: "1em", viewBox: "0 0 24 24", width: "1em", ...E }, /* @__PURE__ */ t$2.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ t$2.createElement("path", { d: "M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2 11.7V16h-4v-2.3C8.48 12.63 7 11.53 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.49-1.51 3.65-3 4.7z" })), bn$1 = memo(En$1), zn$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M19.667 3A1.322 1.322 0 0 1 21 4.298V19.7a1.323 1.323 0 0 1-1.333 1.3H4.328A1.32 1.32 0 0 1 3 19.701V4.3A1.32 1.32 0 0 1 4.328 3h15.339Zm-4.898 6.1a2.834 2.834 0 0 0-2.55 1.403h-.036V9.316H9.6V18h2.692v-4.296c0-1.133.214-2.23 1.616-2.23 1.382 0 1.4 1.296 1.4 2.303V18H18v-4.764c0-2.338-.503-4.136-3.231-4.136Zm-6.86.216H5.213V18h2.694V9.316ZM6.561 5A1.57 1.57 0 0 0 5 6.565a1.57 1.57 0 0 0 1.562 1.564l.142-.006a1.572 1.572 0 0 0 1.42-1.558l-.006-.142A1.572 1.572 0 0 0 6.562 5Z" })), Sn$1 = memo(zn$1), _n$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" })), Cn$1 = memo(_n$1), Nn$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M17 7h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1 0 1.43-.98 2.63-2.31 2.98l1.46 1.46C20.88 15.61 22 13.95 22 12c0-2.76-2.24-5-5-5zm-1 4h-2.19l2 2H16zM2 4.27l3.11 3.11A4.991 4.991 0 0 0 2 12c0 2.76 2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1 0-1.59 1.21-2.9 2.76-3.07L8.73 11H8v2h2.73L13 15.27V17h1.73l4.01 4L20 19.74 3.27 3 2 4.27z" })), yn$1 = memo(Nn$1), Ln$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" })), kn$1 = memo(Ln$1), $n$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2a2 2 0 0 0 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z" })), Hn$1 = memo($n$1), Vn$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "m12 12.9-2.13 2.09c-.56.56-.87 1.29-.87 2.07C9 18.68 10.35 20 12 20s3-1.32 3-2.94c0-.78-.31-1.52-.87-2.07L12 12.9z" }), /* @__PURE__ */ t$2.createElement("path", { d: "m16 6-.44.55C14.38 8.02 12 7.19 12 5.3V2S4 6 4 13c0 2.92 1.56 5.47 3.89 6.86-.56-.79-.89-1.76-.89-2.8 0-1.32.52-2.56 1.47-3.5L12 10.1l3.53 3.47c.95.93 1.47 2.17 1.47 3.5 0 1.02-.31 1.96-.85 2.75 1.89-1.15 3.29-3.06 3.71-5.3.66-3.55-1.07-6.9-3.86-8.52z" })), Bn$1 = memo(Vn$1), On$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "m19.77 7.23.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33a2.5 2.5 0 0 0 2.5 2.5c.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5a2.5 2.5 0 0 0 5 0V9c0-.69-.28-1.32-.73-1.77zM12 10H6V5h6v5zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" })), An$1 = memo(On$1), Dn$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" })), Tn$1 = memo(Dn$1), Fn$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z" })), Pn = memo(Fn$1), Rn$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M9.17 16.83a4.008 4.008 0 0 0 5.66 0 4.008 4.008 0 0 0 0-5.66l-5.66 5.66zM18 2.01 6 2c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V4c0-1.11-.89-1.99-2-1.99zM10 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM7 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm5 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" })), Un$1 = memo(Rn$1), Yn$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z" })), Wn$1 = memo(Yn$1), Kn$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "m21.41 11.58-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" })), In = memo(Kn$1), Zn$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z" })), Gn$1 = memo(Zn$1), jn$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M21 5h-2.64l1.14-3.14L17.15 1l-1.46 4H3v2l2 6-2 6v2h18v-2l-2-6 2-6V5zm-5 9h-3v3h-2v-3H8v-2h3V9h2v3h3v2z" })), qn$1 = memo(jn$1), Qn$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm2.5 11.59.9 3.88-3.4-2.05-3.4 2.05.9-3.87-3-2.59 3.96-.34L12 6.02l1.54 3.64 3.96.34-3 2.59z" })), Jn$1 = memo(Qn$1), Xn$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M18.92 6.01C18.72 5.42 18.16 5 17.5 5H15V3H9v2H6.5c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" })), ec = memo(Xn$1), tc = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z" })), sc = memo(tc), ac = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" })), nc = memo(ac), cc = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" })), ic = memo(cc), oc = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z" })), rc = memo(oc), lc = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: "1em", viewBox: "0 0 24 24", width: "1em", ...E }, /* @__PURE__ */ t$2.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ t$2.createElement("path", { d: "M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z" })), hc = memo(lc), mc = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M11 7 9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z" })), dc = memo(mc), vc = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" })), gc = memo(vc), uc = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 0 0 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" })), wc = memo(uc), pc = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" })), fc = memo(pc), Mc = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" })), xc = memo(Mc), Ec = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "m20.5 3-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" })), bc = memo(Ec), zc = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M19.5 6c-1.31 0-2.37 1.01-2.48 2.3-1.88-.5-2.84-1.8-5.02-1.8-2.19 0-3.14 1.3-5.02 1.8C6.87 7.02 5.81 6 4.5 6A2.5 2.5 0 0 0 2 8.5V9c0 6 3.6 7.81 6.52 7.98C9.53 17.62 10.72 18 12 18s2.47-.38 3.48-1.02C18.4 16.81 22 15 22 9v-.5A2.5 2.5 0 0 0 19.5 6zm-16 3v-.5c0-.55.45-1 1-1s1 .45 1 1v3c0 1.28.38 2.47 1.01 3.48C4.99 14.27 3.5 12.65 3.5 9zm17 0c0 3.65-1.49 5.27-3.01 5.98.64-1.01 1.01-2.2 1.01-3.48v-3c0-.55.45-1 1-1s1 .45 1 1V9zm-9.81 1.48c-.44.26-.96.56-1.69.76V10.2c.48-.17.84-.38 1.18-.58C10.72 9.3 11.23 9 12 9s1.27.3 1.8.62c.34.2.71.42 1.2.59v1.04c-.75-.21-1.26-.51-1.71-.78-.46-.27-.8-.47-1.29-.47s-.84.2-1.31.48z" })), Sc = memo(zc), _c = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm6 11h-3v3h-2v-3H8v-2h3v-3h2v3h3v2z" })), Cc = memo(_c), Nc = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" })), yc = memo(Nc), Lc = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M17 10.43V2H7v8.43c0 .35.18.68.49.86l4.18 2.51-.99 2.34-3.41.29 2.59 2.24L9.07 22 12 20.23 14.93 22l-.78-3.33 2.59-2.24-3.41-.29-.99-2.34 4.18-2.51c.3-.18.48-.5.48-.86zm-4 1.8-1 .6-1-.6V3h2v9.23z" })), kc = memo(Lc), $c = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" })), Hc = memo($c), Vc = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" })), Bc = memo(Vc), Oc = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3A8.994 8.994 0 0 0 13 3.06V1h-2v2.06A8.994 8.994 0 0 0 3.06 11H1v2h2.06A8.994 8.994 0 0 0 11 20.94V23h2v-2.06A8.994 8.994 0 0 0 20.94 13H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" })), Ac = memo(Oc), Dc = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" })), Tc = memo(Dc), Fc = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" })), Pc = memo(Fc), Rc = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: "1em", viewBox: "0 0 24 24", width: "1em", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M11.41 7.41 10 6l-6 6 6 6 1.41-1.41L6.83 12zm8 0L18 6l-6 6 6 6 1.41-1.41L14.83 12z" })), Uc = memo(Rc), Yc = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: "1em", viewBox: "0 0 24 24", width: "1em", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "m14 6-1.41 1.41L17.17 12l-4.58 4.59L14 18l6-6zM6 6 4.59 7.41 9.17 12l-4.58 4.59L6 18l6-6z" })), Wc = memo(Yc), Kc = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M21 3 3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z" })), Ic = memo(Kc), Zc = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" })), Gc = memo(Zc), jc = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M7.58 4.08 6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2a8.445 8.445 0 0 1 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43a8.495 8.495 0 0 1 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z" })), qc = memo(jc), Qc = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" })), Jc = memo(Qc), Xc = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M20 18.69 7.84 6.14 5.27 3.49 4 4.76l2.8 2.8v.01c-.52.99-.8 2.16-.8 3.42v5l-2 2v1h13.73l2 2L21 19.72l-1-1.03zM12 22c1.11 0 2-.89 2-2h-4c0 1.11.89 2 2 2zm6-7.32V11c0-3.08-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68c-.15.03-.29.08-.42.12-.1.03-.2.07-.3.11h-.01c-.01 0-.01 0-.02.01-.23.09-.46.2-.68.31 0 0-.01 0-.01.01L18 14.68z" })), ei$1 = memo(Xc), ti$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M17 12h2L12 2 5.05 12H7l-3.9 6h6.92v4h3.96v-4H21z" })), si$1 = memo(ti$1), ai$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" })), ni$1 = memo(ai$1), ci = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" })), ii$1 = memo(ci), oi$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("circle", { cx: 4.5, cy: 9.5, r: 2.5 }), /* @__PURE__ */ t$2.createElement("circle", { cx: 9, cy: 5.5, r: 2.5 }), /* @__PURE__ */ t$2.createElement("circle", { cx: 15, cy: 5.5, r: 2.5 }), /* @__PURE__ */ t$2.createElement("circle", { cx: 19.5, cy: 9.5, r: 2.5 }), /* @__PURE__ */ t$2.createElement("path", { d: "M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z" })), ri$1 = memo(oi$1), li$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" })), hi$1 = memo(li$1), mi$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("circle", { cx: 12, cy: 12, r: 3.2 }), /* @__PURE__ */ t$2.createElement("path", { d: "M9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" })), di$1 = memo(mi$1), vi$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z" })), gi$1 = memo(vi$1), ui$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("circle", { cx: 12, cy: 19, r: 2 }), /* @__PURE__ */ t$2.createElement("path", { d: "M10 3h4v12h-4z" })), wi$1 = memo(ui$1), pi$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" })), fi$1 = memo(pi$1), Mi = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { fillRule: "evenodd", d: "M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3z" })), xi$1 = memo(Mi), Ei$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" })), bi$1 = memo(Ei$1), zi$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: "1em", viewBox: "0 0 24 24", width: "1em", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M17.51 7A5.62 5.62 0 0 0 7 5.51a4.5 4.5 0 0 0 .49 9h9.75A3.74 3.74 0 0 0 17.51 7ZM4.076 20.774 6.08 15.77l1.857.743-2.003 5.004zm4.998-.002 2.003-5.004 1.856.743-2.002 5.004zm4.998.008 2.002-5.004 1.857.743-2.002 5.004z" })), Si$1 = memo(zi$1), _i$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M16 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm4.78 3.58A6.95 6.95 0 0 0 18 7c-.67 0-1.31.1-1.92.28.58.55.92 1.32.92 2.15V10h5v-.57c0-.81-.48-1.53-1.22-1.85zM6 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.92 1.28C7.31 7.1 6.67 7 6 7c-.99 0-1.93.21-2.78.58A2.01 2.01 0 0 0 2 9.43V10h5v-.57c0-.83.34-1.6.92-2.15zM10 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 6H8v-.57c0-.81.48-1.53 1.22-1.85a6.95 6.95 0 0 1 5.56 0A2.01 2.01 0 0 1 16 9.43V10zm-1 6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 6h-8v-.57c0-.81.48-1.53 1.22-1.85a6.95 6.95 0 0 1 5.56 0A2.01 2.01 0 0 1 21 21.43V22zM5 16c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 6H3v-.57c0-.81.48-1.53 1.22-1.85a6.95 6.95 0 0 1 5.56 0A2.01 2.01 0 0 1 11 21.43V22zm1.75-9v-2h-1.5v2H9l3 3 3-3h-2.25z" })), Ci$1 = memo(_i$1), Ni$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z" })), yi$1 = memo(Ni$1), Li$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M19 13H5v-2h14v2z" })), ki$1 = memo(Li$1), $i = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z" })), Hi$1 = memo($i), Vi = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z" })), Bi$1 = memo(Vi), Oi = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("circle", { cx: 6.18, cy: 17.82, r: 2.18 }), /* @__PURE__ */ t$2.createElement("path", { d: "M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z" })), Ai$1 = memo(Oi), Di = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M11 5h2v14h-2V5zm-6 7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm2.78 1.58a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 1 15.43V16h8v-.57c0-.81-.48-1.53-1.22-1.85zM19 12c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm2.78 1.58a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 15 15.43V16h8v-.57c0-.81-.48-1.53-1.22-1.85z" })), Ti$1 = memo(Di), Fi = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M15.5 6.5C15.5 5.66 17 4 17 4s1.5 1.66 1.5 2.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5zm4 8.5a2.5 2.5 0 0 0 2.5-2.5c0-1.67-2.5-4.5-2.5-4.5S17 10.83 17 12.5a2.5 2.5 0 0 0 2.5 2.5zM13 14h-2v-2H9v2H7v2h2v2h2v-2h2v-2zm3-2v10H4V12c0-2.97 2.16-5.43 5-5.91V4H7V2h6c1.13 0 2.15.39 2.99 1.01l-1.43 1.43C14.1 4.17 13.57 4 13 4h-2v2.09c2.84.48 5 2.94 5 5.91z" })), Pi$1 = memo(Fi), Ri$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67 2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z" })), Ui = memo(Ri$1), Yi$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: "1em", viewBox: "0 0 24 24", width: "1em", ...E }, /* @__PURE__ */ t$2.createElement("g", { "data-name": "Severe Weather" }, /* @__PURE__ */ t$2.createElement("path", { d: "M4.05 17.73 12 4l8 13.85A5 5 0 0 0 19.2 8a7.49 7.49 0 0 0-14-2 6 6 0 0 0-1.15 11.73Z" }), /* @__PURE__ */ t$2.createElement("path", { d: "M12 7 3.34 22h17.32Zm0 13.4a1 1 0 1 1 1-1 1 1 0 0 1-1 1ZM11 17v-4.6h2V17Z" }))), Wi$1 = memo(Yi$1), Ki$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }), /* @__PURE__ */ t$2.createElement("path", { d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" })), Ii$1 = memo(Ki$1), Zi = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z" })), Gi$1 = memo(Zi), ji = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M19.8 18.4 14 10.67V6.5l1.35-1.69c.26-.33.03-.81-.39-.81H9.04c-.42 0-.65.48-.39.81L10 6.5v4.17L4.2 18.4c-.49.66-.02 1.6.8 1.6h14c.82 0 1.29-.94.8-1.6z" })), qi$1 = memo(ji), Qi$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" })), Ji = memo(Qi$1), Xi$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" })), eo$1 = memo(Xi$1), to$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" })), so$1 = memo(to$1), ao$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("circle", { cx: 15.5, cy: 9.5, r: 1.5 }), /* @__PURE__ */ t$2.createElement("circle", { cx: 8.5, cy: 9.5, r: 1.5 }), /* @__PURE__ */ t$2.createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-3.5c.73 0 1.39.19 1.97.53.12-.14.86-.98 1.01-1.14A5.39 5.39 0 0 0 12 15c-1.11 0-2.13.33-2.99.88.97 1.09.01.02 1.01 1.14.59-.33 1.25-.52 1.98-.52z" })), no$1 = memo(ao$1), co$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M9 15.5h6v1H9v-1z" }), /* @__PURE__ */ t$2.createElement("circle", { cx: 15.5, cy: 9.5, r: 1.5 }), /* @__PURE__ */ t$2.createElement("circle", { cx: 8.5, cy: 9.5, r: 1.5 }), /* @__PURE__ */ t$2.createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" })), io$1 = memo(co$1), oo$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("circle", { cx: 15.5, cy: 9.5, r: 1.5 }), /* @__PURE__ */ t$2.createElement("circle", { cx: 8.5, cy: 9.5, r: 1.5 }), /* @__PURE__ */ t$2.createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-4c-.73 0-1.38-.18-1.96-.52-.12.14-.86.98-1.01 1.15a5.49 5.49 0 0 0 5.95-.01c-.97-1.09-.01-.02-1.01-1.15-.59.35-1.24.53-1.97.53z" })), ro = memo(oo$1), lo$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("circle", { cx: 15.5, cy: 9.5, r: 1.5 }), /* @__PURE__ */ t$2.createElement("circle", { cx: 8.5, cy: 9.5, r: 1.5 }), /* @__PURE__ */ t$2.createElement("circle", { cx: 15.5, cy: 9.5, r: 1.5 }), /* @__PURE__ */ t$2.createElement("circle", { cx: 8.5, cy: 9.5, r: 1.5 }), /* @__PURE__ */ t$2.createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-2.5c2.33 0 4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2s-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5z" })), ho = memo(lo$1), mo$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("circle", { cx: 15.5, cy: 9.5, r: 1.5 }), /* @__PURE__ */ t$2.createElement("circle", { cx: 8.5, cy: 9.5, r: 1.5 }), /* @__PURE__ */ t$2.createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-6c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5z" })), vo$1 = memo(mo$1), go$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" })), uo$1 = memo(go$1), wo$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" })), po$1 = memo(wo$1), fo$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" })), Mo$1 = memo(fo$1), xo$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "m17.21 9-4.38-6.56a.993.993 0 0 0-.83-.42c-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" })), Eo$1 = memo(xo$1), bo$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: "1em", viewBox: "0 0 24 24", width: "1em", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "m20.76 14.07-.66-1.34-2.88 1.42L13.5 12l3.72-2.15 2.88 1.42.66-1.34-1.97-.98 2.25-1.3-.75-1.3-2.25 1.3.14-2.2-1.5-.1-.21 3.2-3.72 2.15V6.4l2.67-1.78-.84-1.24-1.83 1.22V2h-1.5v2.6L9.42 3.38l-.84 1.24 2.67 1.78v4.3L7.53 8.55l-.21-3.2-1.5.1.14 2.2-2.25-1.3-.75 1.3 2.25 1.3-1.97.98.66 1.34 2.88-1.42L10.5 12l-3.72 2.15-2.88-1.42-.66 1.34 1.97.98-2.25 1.3.75 1.3 2.25-1.3-.14 2.2 1.5.1.21-3.2 3.72-2.15v4.3l-2.67 1.78.84 1.24 1.83-1.22V22h1.5v-2.6l1.83 1.22.84-1.24-2.67-1.78v-4.3l3.72 2.15.21 3.2 1.5-.1-.14-2.2 2.25 1.3.75-1.3-2.25-1.3 1.97-.98z" })), zo$1 = memo(bo$1), So = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "m9.12 5-7.18 6.79c-.6.56-.94 1.35-.94 2.18V20c0 1.66 1.34 3 3 3h13.75a1.25 1.25 0 0 0 0-2.5H12v-1h7.75a1.25 1.25 0 0 0 0-2.5H12v-1h8.75a1.25 1.25 0 0 0 0-2.5H12v-1h6.75a1.25 1.25 0 0 0 0-2.5H8.86c.64-1.11 1.48-2.58 1.49-2.61a1.065 1.065 0 0 0-.12-1.23C10.22 6.12 9.12 5 9.12 5zM14 6.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75m0-1.5c-1.24 0-2.25 1.01-2.25 2.25S12.76 9.25 14 9.25 16.25 8.24 16.25 7 15.24 4.75 14 4.75zm5.75.75c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5m0-1.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM16.5 1c-.83 0-1.5.67-1.5 1.5S15.67 4 16.5 4 18 3.33 18 2.5 17.33 1 16.5 1z" })), _o$1 = memo(So), Co$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M4 5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm4.78 3.58a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 2 10.43V11h8v-.57c0-.81-.48-1.53-1.22-1.85zM18 7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm2.78 1.58a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 14 10.43V11h8v-.57c0-.81-.48-1.53-1.22-1.85zM22 17l-4-4v3H6v-3l-4 4 4 4v-3h12v3l4-4z" })), No$1 = memo(Co$1), yo$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: "1em", viewBox: "0 0 24 24", width: "1em", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M15.17 15 13 17.17V6.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 11 6.83v10.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15z" })), Lo$1 = memo(yo$1), ko$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z" })), $o$1 = memo(ko$1), Ho$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" })), Vo$1 = memo(Ho$1), Bo = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" })), Oo$1 = memo(Bo), Ao$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" })), Do$1 = memo(Ao$1), To$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z" })), Fo$1 = memo(To$1), Po$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm7.46 7.12-2.78 1.15a4.982 4.982 0 0 0-2.95-2.94l1.15-2.78c2.1.8 3.77 2.47 4.58 4.57zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zM9.13 4.54l1.17 2.78a5 5 0 0 0-2.98 2.97L4.54 9.13a7.984 7.984 0 0 1 4.59-4.59zM4.54 14.87l2.78-1.15a4.968 4.968 0 0 0 2.97 2.96l-1.17 2.78a7.996 7.996 0 0 1-4.58-4.59zm10.34 4.59-1.15-2.78a4.978 4.978 0 0 0 2.95-2.97l2.78 1.17a8.007 8.007 0 0 1-4.58 4.58z" })), Ro$1 = memo(Po$1), Uo$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2h1v-6.1c0-3.87 3.13-7 7-7s7 3.13 7 7V19h-8v2h8c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62z" }), /* @__PURE__ */ t$2.createElement("circle", { cx: 9, cy: 13, r: 1 }), /* @__PURE__ */ t$2.createElement("circle", { cx: 15, cy: 13, r: 1 }), /* @__PURE__ */ t$2.createElement("path", { d: "M18 11.03A6.04 6.04 0 0 0 12.05 6c-3.03 0-6.29 2.51-6.03 6.45a8.075 8.075 0 0 0 4.86-5.89c1.31 2.63 4 4.44 7.12 4.47z" })), Yo$1 = memo(Uo$1), Wo$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z" })), Ko$1 = memo(Wo$1), Io$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M22 4h-2c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h2V4zM2.17 11.12c-.11.25-.17.52-.17.8V13c0 1.1.9 2 2 2h5.5l-.92 4.65c-.05.22-.02.46.08.66.23.45.52.86.88 1.22L10 22l6.41-6.41c.38-.38.59-.89.59-1.42V6.34C17 5.05 15.95 4 14.66 4h-8.1c-.71 0-1.36.37-1.72.97l-2.67 6.15z" })), Zo$1 = memo(Io$1), Go = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M2 20h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1H2v11zm19.83-7.12c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66a4.8 4.8 0 0 0-.88-1.22L14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.84A2.34 2.34 0 0 0 9.34 20h8.11c.7 0 1.36-.37 1.72-.97l2.66-6.15z" })), jo$1 = memo(Go), qo$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M9 1h6v2H9zm10.03 6.39 1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42A8.962 8.962 0 0 0 12 4a9 9 0 0 0-9 9c0 4.97 4.02 9 9 9a8.994 8.994 0 0 0 7.03-14.61zM13 14h-2V8h2v6z" })), Qo$1 = memo(qo$1), Jo$1 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5zM7 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" })), Xo$1 = memo(Jo$1), e0 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" })), t0 = memo(e0), s0 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6 10H6v-2h8v2zm4-4H6v-2h12v2z" })), a0 = memo(s0), n0 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: "1em", viewBox: "0 0 24 24", width: "1em", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M13 16v-2h2.77c.08-.32.16-.65.23-1 1.19-5.95 4-6 4-10H4a10.35 10.35 0 0 0 .48 3H8v2H5.26c.32.69.68 1.36 1 2H10v2H7.51A13.86 13.86 0 0 1 9 15a6.24 6.24 0 0 1-1 6l1 1c2.82-1.54 4.85-3.09 6.1-6Z" })), c0 = memo(n0), i0 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "m12.87 15.07-2.54-2.51.03-.03A17.52 17.52 0 0 0 14.07 6H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7 1.62-4.33L19.12 17h-3.24z" })), o0 = memo(i0), r0 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "m16 18 2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z" })), l0 = memo(r0), h0 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "m16 6 2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" })), m0 = memo(h0), d0 = (E) => /* @__PURE__ */ t$2.createElement("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M19.912 7.925v.527A11.562 11.562 0 0 1 8.265 20.098 11.443 11.443 0 0 1 2 18.265c.328.017.657.017.985 0a8.132 8.132 0 0 0 5.093-1.698 4.092 4.092 0 0 1-3.786-2.852c.255.062.518.091.781.085.36-.002.72-.047 1.07-.136a4.109 4.109 0 0 1-3.21-4.024c.566.32 1.202.494 1.851.51a4.126 4.126 0 0 1-1.34-5.518 11.613 11.613 0 0 0 8.488 4.295 4.397 4.397 0 0 1-.119-.934 4.092 4.092 0 0 1 4.092-4.092 4.04 4.04 0 0 1 3.005 1.29 7.929 7.929 0 0 0 2.53-1c-.3.953-.94 1.763-1.8 2.274A7.725 7.725 0 0 0 22 5.803a8.489 8.489 0 0 1-2.088 2.122Z", fillRule: "evenodd" })), v0 = memo(d0), g0 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z" })), u0 = memo(g0), w0 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M7.41 18.59 8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z" })), p0 = memo(w0), f0 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M12 5.83 15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z" })), M0 = memo(f0), x0 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79s7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58s9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z" })), E0 = memo(x0), b0 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11z" })), z0 = memo(b0), S0 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z" })), _0 = memo(S0), C0 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" })), N0 = memo(C0), y0 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" })), L0 = memo(y0), k0 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46A11.804 11.804 0 0 0 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" })), $0 = memo(k0), H0 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 0 0 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4 9.91 6.09 12 8.18V4z" })), V0 = memo(H0), B0 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" })), O0 = memo(B0), A0 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M18.5 8A2.5 2.5 0 0 0 21 5.5C21 3.83 18.5 1 18.5 1S16 3.83 16 5.5A2.5 2.5 0 0 0 18.5 8zm-5 1c.83 0 1.5-.67 1.5-1.5 0-.84-1.5-2.5-1.5-2.5S12 6.66 12 7.5c0 .83.67 1.5 1.5 1.5zM9.12 5l-7.18 6.79c-.6.56-.94 1.35-.94 2.18V20c0 1.66 1.34 3 3 3h13.75a1.25 1.25 0 0 0 0-2.5H12v-1h7.75a1.25 1.25 0 0 0 0-2.5H12v-1h8.75a1.25 1.25 0 0 0 0-2.5H12v-1h6.75a1.25 1.25 0 0 0 0-2.5H8.86c.64-1.11 1.48-2.58 1.49-2.61a1.065 1.065 0 0 0-.12-1.23C10.22 6.12 9.12 5 9.12 5z" })), D0 = memo(A0), T0 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "m1 9 2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8 3 3 3-3a4.237 4.237 0 0 0-6 0zm-4-4 2 2a7.074 7.074 0 0 1 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" })), F0 = memo(T0), P0 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" })), R0 = memo(P0), U0 = (E) => /* @__PURE__ */ t$2.createElement("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M13.522 10.775 19.48 4h-1.412l-5.172 5.883L8.765 4H4l6.247 8.895L4 20h1.412l5.461-6.212L15.236 20H20l-6.478-9.225Zm-1.933 2.199-.633-.886L5.92 5.04h2.168l4.064 5.688.633.886 5.283 7.394H15.9l-4.311-6.034Z" })), Y0 = memo(U0), W0 = (E) => /* @__PURE__ */ t$2.createElement("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M19.816 5.389a2.469 2.469 0 0 1 1.766 1.746c.291 1.598.43 3.22.417 4.843a25.867 25.867 0 0 1-.417 4.794 2.468 2.468 0 0 1-1.766 1.795c-2.593.318-5.204.46-7.816.429a58.411 58.411 0 0 1-7.816-.429 2.469 2.469 0 0 1-1.766-1.746 25.879 25.879 0 0 1-.417-4.843 25.85 25.85 0 0 1 .417-4.793 2.468 2.468 0 0 1 1.766-1.796c2.594-.3 5.205-.427 7.816-.379a58.413 58.413 0 0 1 7.816.379ZM9.95 9.046v5.864l5.233-2.932L9.95 9.046Z" })), K0 = memo(W0), I0 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }), /* @__PURE__ */ t$2.createElement("path", { d: "M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" })), Z0 = memo(I0), G0 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "m15 3 2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3h-6zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3v6zm6 12-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6h6zm12-6-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6v-6z" })), j0 = memo(G0), q0 = (E) => /* @__PURE__ */ t$2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...E }, /* @__PURE__ */ t$2.createElement("path", { d: "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z" })), Q0 = memo(q0), h$2 = (E) => {
  const w = (k) => {
    const {
      size: T,
      className: ge,
      focusable: Be = !1,
      role: je = "img",
      ...Qe
    } = k, Je = {
      className: g$2(
        "usa-icon",
        {
          [`usa-icon--size-${T}`]: T !== void 0
        },
        ge
      ),
      focusable: Be,
      role: je,
      ...Qe
    };
    return je === "img" && !Qe["aria-hidden"] && !Qe["aria-label"] && !Qe["aria-labelledby"] && console.warn(
      "Icon with img role is missing an accessible label. https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Img_role#associated_wai-aria_roles_states_and_properties"
    ), /* @__PURE__ */ jsx(E, { ...Je });
  };
  return w.displayName = E.displayName, w;
}, l$2 = class {
};
l$2.AccessibilityNew = h$2(Qt$1), l$2.AccessibleForward = h$2(Xt$1), l$2.AccountBalance = h$2(t1), l$2.AccountBox = h$2(a1), l$2.AccountCircle = h$2(c1), l$2.Add = h$2(o1), l$2.AddCircle = h$2(l1), l$2.AddCircleOutline = h$2(m1), l$2.Alarm = h$2(v1), l$2.AlternateEmail = h$2(u1), l$2.Announcement = h$2(p1), l$2.ArrowBack = h$2(M1), l$2.ArrowDownward = h$2(E1), l$2.ArrowDropDown = h$2(z1), l$2.ArrowDropUp = h$2(_1), l$2.ArrowForward = h$2(N1), l$2.ArrowUpward = h$2(L1), l$2.Api = h$2($1), l$2.Assessment = h$2(V1), l$2.AttachFile = h$2(O1), l$2.AttachMoney = h$2(D1), l$2.Autorenew = h$2(F1), l$2.Backpack = h$2(R1), l$2.Bathtub = h$2(Y1), l$2.Bedding = h$2(K1), l$2.Bookmark = h$2(Z1), l$2.BugReport = h$2(j1), l$2.Build = h$2(Q1), l$2.CalendarToday = h$2(X1), l$2.Campaign = h$2(ts$1), l$2.Camping = h$2(as$1), l$2.Cancel = h$2(cs$1), l$2.Chat = h$2(os$1), l$2.Check = h$2(ls$1), l$2.CheckBoxOutlineBlank = h$2(ms$1), l$2.CheckCircle = h$2(vs$1), l$2.CheckCircleOutline = h$2(us$1), l$2.Checkroom = h$2(ps$1), l$2.CleanHands = h$2(Ms$1), l$2.Clothes = h$2(Es$1), l$2.Close = h$2(zs$1), l$2.ClosedCaption = h$2(_s), l$2.Cloud = h$2(Ns$1), l$2.Code = h$2(Ls$1), l$2.Comment = h$2($s$1), l$2.ConnectWithoutContact = h$2(Vs$1), l$2.Construction = h$2(Os$1), l$2.ConstructionWorker = h$2(Ds$1), l$2.ContactPage = h$2(Fs$1), l$2.ContentCopy = h$2(Rs$1), l$2.Coronavirus = h$2(Ys$1), l$2.CreditCard = h$2(Ks$1), l$2.Deck = h$2(Zs$1), l$2.Delete = h$2(js$1), l$2.DeviceThermostat = h$2(Qs$1), l$2.Directions = h$2(Xs$1), l$2.DirectionsBike = h$2(ta), l$2.DirectionsBus = h$2(aa), l$2.DirectionsCar = h$2(ca), l$2.DirectionsWalk = h$2(oa), l$2.DoNotDisturb = h$2(la), l$2.DoNotTouch = h$2(ma), l$2.DragHandle = h$2(va), l$2.Eco = h$2(ua), l$2.Edit = h$2(pa), l$2.ElectricalServices = h$2(Ma), l$2.EmojiEvents = h$2(Ea), l$2.Error = h$2(za), l$2.ErrorOutline = h$2(_a), l$2.Event = h$2(Na), l$2.ExpandLess = h$2(La), l$2.ExpandMore = h$2($a), l$2.Facebook = h$2(Va), l$2.FastForward = h$2(Oa), l$2.FastRewind = h$2(Da), l$2.Favorite = h$2(Fa), l$2.FavoriteBorder = h$2(Ra), l$2.Fax = h$2(Ya), l$2.FileDownload = h$2(Ka), l$2.FilePresent = h$2(Za), l$2.FileUpload = h$2(ja), l$2.FilterAlt = h$2(Qa), l$2.FilterList = h$2(Xa), l$2.Fingerprint = h$2(t2), l$2.FirstPage = h$2(a2), l$2.Flag = h$2(c2), l$2.Flickr = h$2(o2), l$2.Flight = h$2(l2), l$2.Flooding = h$2(m2), l$2.Folder = h$2(v2), l$2.FolderOpen = h$2(u2), l$2.FormatQuote = h$2(p2), l$2.FormatSize = h$2(M2), l$2.Forum = h$2(E2), l$2.Github = h$2(z2), l$2.GridView = h$2(_2), l$2.GroupAdd = h$2(N2), l$2.Groups = h$2(L2), l$2.Hearing = h$2($2), l$2.Help = h$2(V2), l$2.HelpOutline = h$2(O2), l$2.HighlightOff = h$2(D2), l$2.History = h$2(F2), l$2.Home = h$2(R2), l$2.Hospital = h$2(Y2), l$2.Hotel = h$2(K2), l$2.HourglassEmpty = h$2(Z2), l$2.Hurricane = h$2(j2), l$2.Identification = h$2(Q2), l$2.Image = h$2(X2), l$2.Info = h$2(tn), l$2.InfoOutline = h$2(an$2), l$2.Insights = h$2(cn$1), l$2.Instagram = h$2(rn$2), l$2.Keyboard = h$2(hn$2), l$2.Label = h$2(dn$2), l$2.Language = h$2(gn$1), l$2.LastPage = h$2(wn$1), l$2.Launch = h$2(fn$1), l$2.Lightbulb = h$2(xn$1), l$2.LightbulbOutline = h$2(bn$1), l$2.LinkedIn = h$2(Sn$1), l$2.Link = h$2(Cn$1), l$2.LinkOff = h$2(yn$1), l$2.List = h$2(kn$1), l$2.LocalCafe = h$2(Hn$1), l$2.LocalFireDepartment = h$2(Bn$1), l$2.LocalGasStation = h$2(An$1), l$2.LocalGroceryStore = h$2(Tn$1), l$2.LocalHospital = h$2(Pn), l$2.LocalLaundryService = h$2(Un$1), l$2.LocalLibrary = h$2(Wn$1), l$2.LocalOffer = h$2(In), l$2.LocalParking = h$2(Gn$1), l$2.LocalPharmacy = h$2(qn$1), l$2.LocalPolice = h$2(Jn$1), l$2.LocalTaxi = h$2(ec), l$2.LocationCity = h$2(sc), l$2.LocationOn = h$2(nc), l$2.Lock = h$2(ic), l$2.LockOpen = h$2(rc), l$2.LockOutline = h$2(hc), l$2.Login = h$2(dc), l$2.Logout = h$2(gc), l$2.Loop = h$2(wc), l$2.Mail = h$2(fc), l$2.MailOutline = h$2(xc), l$2.Map = h$2(bc), l$2.Masks = h$2(Sc), l$2.MedicalServices = h$2(Cc), l$2.Menu = h$2(yc), l$2.MilitaryTech = h$2(kc), l$2.MoreHoriz = h$2(Hc), l$2.MoreVert = h$2(Bc), l$2.MyLocation = h$2(Ac), l$2.NavigateBefore = h$2(Tc), l$2.NavigateNext = h$2(Pc), l$2.NavigateFarBefore = h$2(Uc), l$2.NavigateFarNext = h$2(Wc), l$2.NearMe = h$2(Ic), l$2.Notifications = h$2(Gc), l$2.NotificationsActive = h$2(qc), l$2.NotificationsNone = h$2(Jc), l$2.NotificationsOff = h$2(ei$1), l$2.Park = h$2(si$1), l$2.People = h$2(ni$1), l$2.Person = h$2(ii$1), l$2.Pets = h$2(ri$1), l$2.Phone = h$2(hi$1), l$2.PhotoCamera = h$2(di$1), l$2.Print = h$2(gi$1), l$2.PriorityHigh = h$2(wi$1), l$2.Public = h$2(fi$1), l$2.PushPin = h$2(xi$1), l$2.RadioButtonUnchecked = h$2(bi$1), l$2.Rain = h$2(Si$1), l$2.ReduceCapacity = h$2(Ci$1), l$2.RemoveCircle = h$2(yi$1), l$2.Remove = h$2(ki$1), l$2.Report = h$2(Hi$1), l$2.Restaurant = h$2(Bi$1), l$2.RssFeed = h$2(Ai$1), l$2.SafetyDivider = h$2(Ti$1), l$2.Sanitizer = h$2(Pi$1), l$2.SaveAlt = h$2(Ui), l$2.SevereWeather = h$2(Wi$1), l$2.Schedule = h$2(Ii$1), l$2.School = h$2(Gi$1), l$2.Science = h$2(qi$1), l$2.Search = h$2(Ji), l$2.Security = h$2(eo$1), l$2.Send = h$2(so$1), l$2.SentimentDissatisfied = h$2(no$1), l$2.SentimentNeutral = h$2(io$1), l$2.SentimentSatisfied = h$2(ro), l$2.SentimentSatisfiedAlt = h$2(ho), l$2.SentimentVeryDissatisfied = h$2(vo$1), l$2.Settings = h$2(uo$1), l$2.Share = h$2(po$1), l$2.Shield = h$2(Mo$1), l$2.ShoppingBasket = h$2(Eo$1), l$2.Snow = h$2(zo$1), l$2.Soap = h$2(_o$1), l$2.SocialDistance = h$2(No$1), l$2.SortArrow = h$2(Lo$1), l$2.Spellcheck = h$2($o$1), l$2.Star = h$2(Vo$1), l$2.StarHalf = h$2(Oo$1), l$2.StarOutline = h$2(Do$1), l$2.Store = h$2(Fo$1), l$2.Support = h$2(Ro$1), l$2.SupportAgent = h$2(Yo$1), l$2.TextFields = h$2(Ko$1), l$2.ThumbDownAlt = h$2(Zo$1), l$2.ThumbUpAlt = h$2(jo$1), l$2.Timer = h$2(Qo$1), l$2.ToggleOff = h$2(Xo$1), l$2.ToggleOn = h$2(t0), l$2.Topic = h$2(a0), l$2.Tornado = h$2(c0), l$2.Translate = h$2(o0), l$2.TrendingDown = h$2(l0), l$2.TrendingUp = h$2(m0), l$2.Twitter = h$2(v0), l$2.Undo = h$2(u0), l$2.UnfoldLess = h$2(p0), l$2.UnfoldMore = h$2(M0), l$2.Update = h$2(E0), l$2.UploadFile = h$2(z0), l$2.Verified = h$2(_0), l$2.VerifiedUser = h$2(N0), l$2.Visibility = h$2(L0), l$2.VisibilityOff = h$2($0), l$2.VolumeOff = h$2(V0), l$2.Warning = h$2(O0), l$2.Wash = h$2(D0), l$2.Wifi = h$2(F0), l$2.Work = h$2(R0), l$2.X = h$2(Y0), l$2.Youtube = h$2(K0), l$2.ZoomIn = h$2(Z0), l$2.ZoomOutMap = h$2(j0), l$2.ZoomOut = h$2(Q0);
let ae$1 = l$2;
const Ve$1 = forwardRef(
  (E, w) => {
    const {
      id: k,
      name: T,
      type: ge,
      className: Be,
      validationStatus: je,
      inputSize: Qe,
      inputRef: Je,
      ...Ze
    } = E, Xe = g$2(
      "usa-input",
      {
        "usa-input--error": je === "error",
        "usa-input--success": je === "success",
        "usa-input--small": Qe === "small",
        "usa-input--medium": Qe === "medium"
      },
      Be
    );
    return /* @__PURE__ */ jsx(
      "input",
      {
        "data-testid": "textInput",
        className: Xe,
        id: k,
        name: T,
        type: ge,
        ref: Je || w,
        ...Ze
      }
    );
  }
);
Ve$1.displayName = "TextInput";
const wr = (E, w = "", k = {}) => {
  const T = (Be) => Be.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  let ge = E.replace(/{{(.*?)}}/g, (Be, je) => {
    const Qe = je.trim(), Je = k[Qe];
    if (Qe !== "query" && Je) {
      const Ze = new RegExp(Je, "i"), Xe = w.match(Ze);
      return Xe ? T(Xe[1]) : "";
    }
    return T(w);
  });
  return ge = "^(?:" + ge + ")$", new RegExp(ge, "i");
};
var I$5 = /* @__PURE__ */ ((E) => (E[E.SELECT_OPTION = 0] = "SELECT_OPTION", E[E.CLEAR = 1] = "CLEAR", E[E.OPEN_LIST = 2] = "OPEN_LIST", E[E.CLOSE_LIST = 3] = "CLOSE_LIST", E[E.FOCUS_OPTION = 4] = "FOCUS_OPTION", E[E.UPDATE_FILTER = 5] = "UPDATE_FILTER", E[E.BLUR = 6] = "BLUR", E[E.CLEAR_SELECTION = 7] = "CLEAR_SELECTION", E[E.FOCUS_INPUT = 8] = "FOCUS_INPUT", E))(I$5 || {});
const pr$1 = (E, w, k, T) => {
  const ge = (Be) => {
    const je = wr(
      T.filter,
      Be,
      T.extras
    ), Qe = w.filter(
      (Je) => je.test(Je.label.toLowerCase())
    );
    return k ? {
      closestMatch: Qe.length > 0 ? Qe[0] : w[0],
      optionsToDisplay: w
    } : {
      closestMatch: Qe[0],
      optionsToDisplay: Qe
    };
  };
  return useReducer((Be, je) => {
    switch (je.type) {
      case 0:
        return {
          ...Be,
          isOpen: !1,
          selectedOption: je.option,
          focusMode: we$2.Input,
          inputValue: je.option.label,
          filteredOptions: w,
          focusedOption: je.option,
          statusText: ""
        };
      case 5: {
        const { closestMatch: Qe, optionsToDisplay: Je } = ge(
          je.value
        ), Ze = {
          ...Be,
          isOpen: !0,
          filteredOptions: Je,
          inputValue: je.value,
          statusText: `${Je.length} result${Je.length > 1 ? "s" : ""} available.`
        };
        return Je.length < 1 && (Ze.statusText = "No results."), k || !Be.selectedOption ? Ze.focusedOption = Qe : Be.selectedOption && (Ze.filteredOptions.includes(Be.selectedOption) ? Ze.focusedOption = Be.selectedOption : Ze.focusedOption = Qe), Ze;
      }
      case 2: {
        const Qe = Be.filteredOptions.length ? `${Be.filteredOptions.length} result${Be.filteredOptions.length > 1 ? "s" : ""} available.` : "No results.";
        return {
          ...Be,
          isOpen: !0,
          focusMode: we$2.Input,
          focusedOption: Be.selectedOption || Be.focusedOption || w[0],
          statusText: Qe
        };
      }
      case 3: {
        const Qe = {
          ...Be,
          isOpen: !1,
          focusMode: we$2.Input,
          focusedOption: void 0,
          statusText: ""
        };
        return Be.filteredOptions.length === 0 && (Qe.filteredOptions = w, Qe.inputValue = ""), Be.selectedOption && (Qe.inputValue = Be.selectedOption.label), Qe;
      }
      case 4: {
        const Qe = Be.filteredOptions.length ? `${Be.filteredOptions.length} result${Be.filteredOptions.length > 1 ? "s" : ""} available.` : "No results.";
        return {
          ...Be,
          isOpen: !0,
          focusedOption: je.option,
          focusMode: we$2.Item,
          statusText: Qe
        };
      }
      case 1:
        return {
          ...Be,
          inputValue: "",
          isOpen: !1,
          focusMode: we$2.Input,
          selectedOption: void 0,
          filteredOptions: w,
          focusedOption: w[0],
          statusText: ""
        };
      case 6: {
        const Qe = {
          ...Be,
          isOpen: !1,
          focusMode: we$2.None,
          filteredOptions: w,
          statusText: ""
        };
        return Be.selectedOption ? (Qe.inputValue = Be.selectedOption.label, Qe.focusedOption = Be.selectedOption) : (Qe.inputValue = "", Qe.focusedOption = w[0]), Qe;
      }
      case 7:
        return {
          ...Be,
          inputValue: "",
          isOpen: !1,
          focusMode: we$2.None,
          selectedOption: void 0,
          filteredOptions: w,
          focusedOption: void 0,
          statusText: ""
        };
      case 8:
        return {
          ...Be,
          focusMode: we$2.Input
        };
      default:
        throw new Error();
    }
  }, E);
}, fr$1 = ".*{{query}}.*";
var we$2 = /* @__PURE__ */ ((E) => (E[E.None = 0] = "None", E[E.Input = 1] = "Input", E[E.Item = 2] = "Item", E))(we$2 || {});
const Mr$1 = ({
  focused: E,
  ...w
}) => {
  const k = useRef(null);
  return useEffect(() => {
    E && k.current && k.current.focus();
  }), /* @__PURE__ */ jsx(
    "input",
    {
      type: "text",
      ...w,
      className: "usa-combo-box__input",
      "data-testid": "combo-box-input",
      autoCapitalize: "off",
      autoComplete: "off",
      ref: k
    }
  );
}, xr$1 = ({
  id: E,
  name: w,
  className: k,
  options: T,
  defaultValue: ge,
  disabled: Be,
  onChange: je,
  assistiveHint: Qe,
  noResults: Je,
  selectProps: Ze,
  inputProps: Xe,
  ulProps: gt,
  customFilter: dt,
  disableFiltering: fl = !1
}, Jr) => {
  var Ll;
  const $l = !!Be;
  let Il;
  ge && (Il = T.find((Kl) => Kl.value === ge));
  const Wr = dt || { filter: fr$1 }, Bl = {
    isOpen: !1,
    selectedOption: Il || void 0,
    focusedOption: void 0,
    focusMode: 0,
    filteredOptions: T,
    inputValue: Il ? Il.label : "",
    statusText: ""
  }, [zl, Vl] = pr$1(
    Bl,
    T,
    fl,
    Wr
  ), Rl = useRef(null), Wl = useRef(null), Hl = useRef(null);
  useEffect(() => {
    zl.filteredOptions = T;
  }, [T]), useEffect(() => {
    var Kl;
    je && je(((Kl = zl.selectedOption) == null ? void 0 : Kl.value) || void 0);
  }, [zl.selectedOption]), useEffect(() => {
    zl.focusMode === 2 && zl.focusedOption && Hl.current && Hl.current.focus();
  }, [zl.focusMode, zl.focusedOption]), useEffect(() => {
    if (zl.isOpen && zl.focusedOption && Hl.current && Wl.current && zl.focusMode === 1) {
      const Kl = Hl.current.offsetTop + Hl.current.offsetHeight, Zl = Wl.current.scrollTop + Wl.current.offsetHeight;
      Kl > Zl && (Wl.current.scrollTop = Kl - Wl.current.offsetHeight), Hl.current.offsetTop < Wl.current.scrollTop && (Wl.current.scrollTop = Hl.current.offsetTop);
    }
  }, [zl.isOpen, zl.focusedOption]), useEffect(() => {
    var Kl;
    zl.focusMode !== 0 && ((Kl = Rl.current) != null && Kl.contains(window.document.activeElement) || Vl({
      type: I$5.BLUR
    }));
  }, [zl.focusMode]), useImperativeHandle(
    Jr,
    () => ({
      focus: () => Vl({ type: I$5.FOCUS_INPUT }),
      clearSelection: () => Vl({ type: I$5.CLEAR_SELECTION })
    }),
    []
  );
  const jl = (Kl) => {
    if (Kl.key === "Escape")
      Vl({ type: I$5.CLOSE_LIST });
    else if (Kl.key === "ArrowDown" || Kl.key == "Down")
      Kl.preventDefault(), Vl({
        type: I$5.FOCUS_OPTION,
        option: zl.selectedOption || zl.focusedOption || zl.filteredOptions[0]
      });
    else if (Kl.key === "Tab") {
      if (zl.isOpen && !zl.selectedOption) {
        const Zl = fl ? zl.focusedOption : zl.selectedOption || zl.focusedOption;
        Zl ? (Kl.preventDefault(), Vl({
          type: I$5.FOCUS_OPTION,
          option: Zl
        })) : Vl({
          type: I$5.BLUR
        });
      }
      !zl.isOpen && zl.selectedOption && Vl({
        type: I$5.BLUR
      });
    } else if (Kl.key === "Enter" && zl.isOpen) {
      Kl.preventDefault();
      const Zl = zl.filteredOptions.find(
        (ru) => ru.label.toLowerCase() === zl.inputValue.toLowerCase()
      );
      Zl ? Vl({
        type: I$5.SELECT_OPTION,
        option: Zl
      }) : zl.selectedOption ? Vl({
        type: I$5.CLOSE_LIST
      }) : Vl({ type: I$5.CLEAR });
    }
  }, Ul = (Kl) => {
    var Zl;
    const { relatedTarget: ru } = Kl;
    (!ru || ru instanceof Node && !((Zl = Rl.current) != null && Zl.contains(ru))) && zl.focusMode !== 0 && Vl({ type: I$5.BLUR });
  }, Ql = (Kl) => {
    Kl.key === "Tab" && zl.isOpen && zl.selectedOption && (Kl.preventDefault(), Vl({
      type: I$5.FOCUS_OPTION,
      option: zl.selectedOption
    }));
  }, Xl = (Kl, Zl, ru) => {
    const su = Zl.focusedOption ? Zl.filteredOptions.indexOf(Zl.focusedOption) : -1, ou = Zl.filteredOptions[0], au = Zl.filteredOptions[Zl.filteredOptions.length - 1];
    if (su === -1)
      Kl({ type: I$5.FOCUS_OPTION, option: ou });
    else {
      const lu = su + ru;
      if (lu < 0)
        Kl({ type: I$5.CLOSE_LIST });
      else if (lu >= Zl.filteredOptions.length)
        Kl({ type: I$5.FOCUS_OPTION, option: au });
      else {
        const cu = Zl.filteredOptions[lu];
        Kl({ type: I$5.FOCUS_OPTION, option: cu });
      }
    }
  }, Gl = (Kl) => {
    var Zl;
    const { relatedTarget: ru } = Kl;
    (!ru || ru instanceof Node && !((Zl = Rl.current) != null && Zl.contains(ru))) && Vl({ type: I$5.BLUR });
  }, tu = (Kl) => {
    Kl.key === "Escape" ? Vl({ type: I$5.CLOSE_LIST }) : Kl.key === "Tab" || Kl.key === "Enter" ? (Kl.preventDefault(), zl.focusedOption && Vl({
      type: I$5.SELECT_OPTION,
      option: zl.focusedOption
    })) : Kl.key === "ArrowDown" || Kl.key === "Down" ? (Kl.preventDefault(), Xl(
      Vl,
      zl,
      1
      /* Next */
    )) : (Kl.key === "ArrowUp" || Kl.key === "Up") && (Kl.preventDefault(), Xl(
      Vl,
      zl,
      -1
      /* Previous */
    ));
  }, nu = zl.selectedOption && zl.selectedOption.label === zl.inputValue, ql = g$2("usa-combo-box", k, {
    "usa-combo-box--pristine": nu
  }), Yl = `${E}--list`, eu = `${E}--assistiveHint`, Jl = zl.focusedOption ? zl.filteredOptions.findIndex((Kl) => Kl === zl.focusedOption) : -1, iu = Jl > -1 && `${Yl}--option-${Jl}`;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "data-testid": "combo-box",
      "data-enhanced": "true",
      className: ql,
      ref: Rl,
      children: [
        /* @__PURE__ */ jsx(
          "select",
          {
            ...Ze,
            className: "usa-select usa-sr-only usa-combo-box__select",
            name: w,
            "aria-hidden": !0,
            tabIndex: -1,
            defaultValue: (Ll = zl.selectedOption) == null ? void 0 : Ll.value,
            "data-testid": "combo-box-select",
            children: T.map((Kl) => /* @__PURE__ */ jsx("option", { value: Kl.value, children: Kl.label }, Kl.value))
          }
        ),
        /* @__PURE__ */ jsx(
          Mr$1,
          {
            ...Xe,
            role: "combobox",
            onChange: (Kl) => {
              Xe != null && Xe.onChange && Xe?.onChange(Kl), Vl({ type: I$5.UPDATE_FILTER, value: Kl.target.value });
            },
            onClick: () => Vl({ type: I$5.OPEN_LIST }),
            onBlur: Ul,
            onKeyDown: jl,
            value: zl.inputValue,
            focused: zl.focusMode === 1,
            "aria-owns": Yl,
            "aria-controls": Yl,
            "aria-autocomplete": "list",
            "aria-describedby": eu,
            "aria-expanded": zl.isOpen,
            "aria-activedescendant": zl.isOpen && iu || "",
            id: E,
            disabled: $l
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "usa-combo-box__clear-input__wrapper", tabIndex: -1, children: /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            className: "usa-combo-box__clear-input",
            "aria-label": "Clear the select contents",
            onClick: () => Vl({ type: I$5.CLEAR }),
            "data-testid": "combo-box-clear-button",
            onKeyDown: Ql,
            hidden: !nu || $l,
            disabled: $l,
            children: " "
          }
        ) }),
        /* @__PURE__ */ jsx("span", { className: "usa-combo-box__input-button-separator", children: " " }),
        /* @__PURE__ */ jsx("span", { className: "usa-combo-box__toggle-list__wrapper", tabIndex: -1, children: /* @__PURE__ */ jsx(
          "button",
          {
            "data-testid": "combo-box-toggle",
            type: "button",
            className: "usa-combo-box__toggle-list",
            tabIndex: -1,
            "aria-label": "Toggle the dropdown list",
            onClick: () => Vl({
              type: zl.isOpen ? I$5.CLOSE_LIST : I$5.OPEN_LIST
            }),
            disabled: $l,
            children: " "
          }
        ) }),
        /* @__PURE__ */ jsxs(
          "ul",
          {
            ...gt,
            "data-testid": "combo-box-option-list",
            tabIndex: -1,
            id: Yl,
            className: "usa-combo-box__list",
            role: "listbox",
            ref: Wl,
            hidden: !zl.isOpen,
            children: [
              zl.filteredOptions.map((Kl, Zl) => {
                const ru = Kl === zl.focusedOption, su = Kl === zl.selectedOption, ou = g$2("usa-combo-box__list-option", {
                  "usa-combo-box__list-option--focused": ru,
                  "usa-combo-box__list-option--selected": su
                });
                return /* @__PURE__ */ jsx(
                  "li",
                  {
                    ref: ru ? Hl : null,
                    value: Kl.value,
                    className: ou,
                    tabIndex: ru ? 0 : -1,
                    role: "option",
                    "aria-selected": su,
                    "aria-setsize": zl.filteredOptions.length,
                    "aria-posinset": Zl + 1,
                    id: Yl + `--option-${Zl}`,
                    onKeyDown: tu,
                    onBlur: Gl,
                    "data-testid": `combo-box-option-${Kl.value}`,
                    "data-value": Kl.value,
                    onMouseEnter: () => Vl({ type: I$5.FOCUS_OPTION, option: Kl }),
                    onClick: () => {
                      Vl({ type: I$5.SELECT_OPTION, option: Kl });
                    },
                    children: Kl.label
                  },
                  Kl.value
                );
              }),
              zl.filteredOptions.length === 0 ? /* @__PURE__ */ jsx("li", { className: "usa-combo-box__list-option--no-results", children: Je || "No results found" }) : null
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "usa-combo-box__status usa-sr-only", role: "status", children: zl.statusText }),
        /* @__PURE__ */ jsx(
          "span",
          {
            id: eu,
            className: "usa-sr-only",
            "data-testid": "combo-box-assistive-hint",
            children: Qe || `When autocomplete results are available use up and down arrows to review
           and enter to select. Touch device users, explore by touch or with swipe
           gestures.`
          }
        )
      ]
    }
  );
};
forwardRef(xr$1);
const br$1 = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
], zr$1 = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
], Sr$1 = ["S", "M", "T", "W", "Th", "F", "S"], ye$2 = "MM/DD/YYYY", St = "YYYY-MM-DD", We = {
  months: br$1,
  daysOfWeek: zr$1,
  daysOfWeekShort: Sr$1,
  statuses: [
    "You can navigate by day using left and right arrows",
    "Weeks by using up and down arrows",
    "Months by using page up and page down keys",
    "Years by using shift plus page up and shift plus page down",
    "Home and end keys navigate to the beginning and end of a week"
  ],
  selectedDate: "Selected date",
  selectAMonth: "Select a month.",
  toggleCalendar: "Toggle calendar",
  backOneYear: "Navigate back one year",
  backOneMonth: "Navigate back one month",
  forwardOneYear: "Navigate forward one year",
  forwardOneMonth: "Navigate forward one month",
  selectMonth: "Select month",
  selectYear: "Select year"
}, le$1 = (E, w = St) => {
  const k = (je, Qe) => `0000${je}`.slice(-Qe), T = E.getMonth() + 1, ge = E.getDate(), Be = E.getFullYear();
  return w === ye$2 ? [k(T, 2), k(ge, 2), k(Be, 4)].join("/") : [k(Be, 4), k(T, 2), k(ge, 2)].join("-");
}, it$4 = () => typeof navigator < "u" && (navigator.userAgent.match(/(iPod|iPhone|iPad)/g) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && !window.MSStream, $r$1 = ({
  date: E,
  onClick: w,
  onKeyDown: k,
  onMouseMove: T,
  isDisabled: ge = !1,
  isSelected: Be = !1,
  isFocused: je = !1,
  isPrevMonth: Qe = !1,
  isFocusedMonth: Je = !1,
  isNextMonth: Ze = !1,
  isToday: Xe = !1,
  isRangeDate: gt = !1,
  isRangeStart: dt = !1,
  isRangeEnd: fl = !1,
  isWithinRange: Jr = !1,
  i18n: Ll = We
}, $l) => {
  const Il = E.getDate(), Wr = E.getMonth(), Bl = E.getFullYear(), zl = E.getDay(), Vl = le$1(E), Rl = je ? 0 : -1, Wl = g$2("usa-date-picker__calendar__date", {
    "usa-date-picker__calendar__date--previous-month": Qe,
    "usa-date-picker__calendar__date--current-month": Je,
    "usa-date-picker__calendar__date--next-month": Ze,
    "usa-date-picker__calendar__date--selected": Be,
    "usa-date-picker__calendar__date--today": Xe,
    "usa-date-picker__calendar__date--focused": je,
    "usa-date-picker__calendar__date--range-date": gt,
    "usa-date-picker__calendar__date--range-date-start": dt,
    "usa-date-picker__calendar__date--range-date-end": fl,
    "usa-date-picker__calendar__date--within-range": Jr
  }), Hl = Ll.months[parseInt(`${Wr}`)], jl = Ll.daysOfWeek[parseInt(`${zl}`)], Ul = () => {
    w(Vl);
  }, Ql = (Gl) => {
    k(Gl);
  }, Xl = () => {
    ge || it$4() || T(E);
  };
  return (
    // Ignoring error: "The attribute aria-selected is not supported by the role button. This role is implicit on the element button."
    // Ignoring because this attribute is present in the USWDS implementation (https://github.com/uswds/uswds/blob/develop/src/js/components/date-picker.js#L1017)
    // eslint-disable-next-line jsx-a11y/role-supports-aria-props
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        "data-testid": "select-date",
        ref: $l,
        onClick: Ul,
        tabIndex: Rl,
        className: Wl,
        "data-day": Il,
        "data-month": Wr + 1,
        "data-year": Bl,
        "data-value": Vl,
        "aria-label": `${Il} ${Hl} ${Bl} ${jl}`,
        "aria-selected": !!Be,
        disabled: ge,
        onKeyDown: Ql,
        onMouseMove: Je ? Xl : void 0,
        children: Il
      }
    )
  );
};
forwardRef($r$1);
const ft$1 = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", Ar = ({
  imageId: E,
  file: w
}) => {
  const k = useRef(new FileReader()), [T, ge] = useState(!0), [Be, je] = useState(ft$1), [Qe, Je] = useState(!1);
  useEffect(() => (k.current.onloadend = () => {
    ge(!1), je(k.current.result);
  }, k.current.readAsDataURL(w), () => {
    k.current.onloadend = null;
  }), []);
  const { name: Ze } = w, Xe = () => {
    je(ft$1), Je(!0);
  }, gt = Ze.indexOf(".pdf") > 0, dt = Ze.indexOf(".doc") > 0 || Ze.indexOf(".pages") > 0, fl = Ze.indexOf(".mov") > 0 || Ze.indexOf(".mp4") > 0, Jr = Ze.indexOf(".xls") > 0 || Ze.indexOf(".numbers") > 0, Ll = g$2("usa-file-input__preview-image", {
    "is-loading": T,
    "usa-file-input__preview-image--pdf": Qe && gt,
    "usa-file-input__preview-image--word": Qe && dt,
    "usa-file-input__preview-image--video": Qe && fl,
    "usa-file-input__preview-image--excel": Qe && Jr,
    "usa-file-input__preview-image--generic": Qe && !gt && !dt && !fl && !Jr
  });
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "data-testid": "file-input-preview",
      className: "usa-file-input__preview",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            id: E,
            "data-testid": "file-input-preview-image",
            src: Be,
            alt: "",
            className: Ll,
            onError: Xe
          }
        ),
        Ze
      ]
    }
  );
}, Dr$1 = (E) => E.replace(/[^a-z0-9]/g, function(w) {
  const k = w.charCodeAt(0);
  return k === 32 ? "-" : k >= 65 && k <= 90 ? `img_${w.toLowerCase()}` : `__${k.toString(16).slice(-4)}`;
}), Tr$1 = ({
  name: E,
  id: w,
  dragText: k,
  chooseText: T,
  errorText: ge,
  disabled: Be,
  multiple: je,
  className: Qe,
  accept: Je,
  onChange: Ze,
  onDrop: Xe,
  ...gt
}, dt) => {
  const fl = useRef(null), [Jr, Ll] = useState(!1), [$l, Il] = useState(!1), [Wr, Bl] = useState([]), [zl, Vl] = useState(!1);
  useEffect(() => {
    if (typeof navigator > "u") return;
    const Jl = /rv:11.0/i.test(navigator?.userAgent) || /Edge\/\d./i.test(navigator?.userAgent);
    Vl(Jl);
  }, [typeof navigator]), useImperativeHandle(
    dt,
    () => ({
      input: fl.current,
      clearFiles: () => Bl([]),
      files: Wr
    }),
    [Wr]
  );
  const Rl = g$2(
    "usa-file-input",
    {
      "usa-file-input--disabled": Be
    },
    Qe
  ), Wl = g$2("usa-file-input__target", {
    "usa-file-input--drag": Jr,
    "has-invalid-file": $l
  }), Hl = je ? "Drag files here or " : "Drag file here or ", jl = "choose from folder", Ul = "This is not a valid file type.", Ql = [];
  if (Wr)
    for (let Jl = 0; Jl < Wr?.length; Jl++) {
      const iu = Dr$1(Wr[parseInt(`${Jl}`)].name), Kl = `filePreview_${iu}`;
      Ql.push(
        /* @__PURE__ */ jsx(
          Ar,
          {
            imageId: iu,
            file: Wr[parseInt(`${Jl}`)]
          },
          Kl
        )
      );
    }
  const Xl = g$2("usa-file-input__instructions", {
    "display-none": Ql.length > 0
  }), Gl = Ql.length > 1 ? `${Ql.length} files selected` : "Selected file", tu = (Jl) => {
    if (Il(!1), Je) {
      const iu = Je.split(",");
      let Kl = !0;
      for (let Zl = 0; Zl < Jl.dataTransfer.files.length; Zl += 1) {
        const ru = Jl.dataTransfer.files[parseInt(`${Zl}`)];
        if (Kl)
          for (let su = 0; su < iu.length; su += 1) {
            const ou = iu[parseInt(`${su}`)];
            if (Kl = ru.name.indexOf(ou) > 0 || ru.type.includes(ou.replace(/\*/g, "")), Kl) break;
          }
        else break;
      }
      Kl || (Bl([]), Il(!0), Jl.preventDefault(), Jl.stopPropagation());
    }
  }, nu = () => Ll(!0), ql = () => Ll(!1), Yl = (Jl) => {
    tu(Jl), Ll(!1), Xe && Xe(Jl);
  }, eu = (Jl) => {
    var iu, Kl, Zl, ru;
    Il(!1);
    const su = [];
    if ((Kl = (iu = Jl.target) == null ? void 0 : iu.files) != null && Kl.length) {
      const ou = ((ru = (Zl = Jl.target) == null ? void 0 : Zl.files) == null ? void 0 : ru.length) || 0;
      for (let au = 0; au < ou; au++) {
        const lu = Jl.target.files.item(au);
        lu && su.push(lu);
      }
    }
    Bl(su), Ze && Ze(Jl);
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-testid": "file-input",
      className: Rl,
      "aria-disabled": Be,
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          "data-testid": "file-input-droptarget",
          className: Wl,
          onDragOver: nu,
          onDragLeave: ql,
          onDrop: Yl,
          children: [
            Ql.length > 0 && /* @__PURE__ */ jsxs(
              "div",
              {
                "data-testid": "file-input-preview-heading",
                className: "usa-file-input__preview-heading",
                children: [
                  Gl,
                  " ",
                  /* @__PURE__ */ jsxs("span", { className: "usa-file-input__choose", children: [
                    "Change file",
                    Ql.length > 1 && "s"
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "div",
              {
                "data-testid": "file-input-instructions",
                className: Xl,
                "aria-hidden": "true",
                children: [
                  !zl && /* @__PURE__ */ jsx("span", { className: "usa-file-input__drag-text", children: k || Hl }),
                  /* @__PURE__ */ jsx("span", { className: "usa-file-input__choose", children: T || jl })
                ]
              }
            ),
            Ql,
            /* @__PURE__ */ jsx("div", { "data-testid": "file-input-box", className: "usa-file-input__box" }),
            $l && /* @__PURE__ */ jsx(
              "div",
              {
                "data-testid": "file-input-error",
                className: "usa-file-input__accepted-files-message",
                children: ge || Ul
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                ...gt,
                ref: fl,
                type: "file",
                "data-testid": "file-input-input",
                name: E,
                id: w,
                className: "usa-file-input__input",
                disabled: Be,
                onChange: eu,
                multiple: je,
                accept: Je
              }
            )
          ]
        }
      )
    }
  );
};
forwardRef(Tr$1);
const Xr$1 = (E) => {
  const [w, k] = useState(E || !1), T = (ge) => {
    const Be = ge.target;
    return ge && Be && Be.closest(".usa-modal") ? Be.hasAttribute("[data-close-modal]") || !!Be.closest("[data-close-modal]") : !0;
  };
  return { isOpen: w, toggleModal: (ge, Be) => ge && !T(ge) ? (ge.stopPropagation(), !1) : (k(Be === !0 ? !0 : Be === !1 ? !1 : (je) => !je), !0) };
}, el$1 = () => {
  var E;
  if (typeof document < "u") {
    const w = document.createElement("div");
    w.setAttribute(
      "style",
      "visibility: hidden; overflow: scroll; ms-overflow-style: scrollbar"
    ), document.body.appendChild(w);
    const k = document.createElement("div");
    w.appendChild(k);
    const T = `${w.offsetWidth - k.offsetWidth}px`;
    return (E = w.parentNode) == null || E.removeChild(w), T;
  }
  return "";
}, tl$1 = ({
  handleClose: E,
  ...w
}) => /* @__PURE__ */ jsx(
  Se$1,
  {
    "aria-label": "Close this window",
    ...w,
    className: "usa-modal__close",
    onClick: E,
    "data-close-modal": !0,
    type: "button",
    children: /* @__PURE__ */ jsx(ae$1.Close, { "aria-hidden": "true" })
  }
), sl$1 = ({
  modalId: E,
  className: w,
  children: k,
  handleClose: T,
  isLarge: ge = !1,
  forceAction: Be = !1,
  ...je
}, Qe) => {
  const Je = g$2(
    "usa-modal",
    {
      "usa-modal--lg": ge
    },
    w
  );
  return /* @__PURE__ */ jsx(
    "div",
    {
      ...je,
      "data-testid": "modalWindow",
      className: Je,
      ref: Qe,
      "data-force-action": Be,
      children: /* @__PURE__ */ jsxs("div", { className: "usa-modal__content", children: [
        /* @__PURE__ */ jsx("div", { className: "usa-modal__main", children: k }),
        !Be && /* @__PURE__ */ jsx(tl$1, { "aria-controls": E, handleClose: T })
      ] })
    }
  );
}, al$1 = forwardRef(sl$1), nl$1 = ({ id: E, children: w, isVisible: k, forceAction: T, className: ge, handleClose: Be, ...je }, Qe) => {
  const Je = g$2(
    "usa-modal-wrapper",
    {
      "is-visible": k,
      "is-hidden": !k
    },
    ge
  );
  return /* @__PURE__ */ jsx("div", { ...je, ref: Qe, id: E, className: Je, role: "dialog", children: /* @__PURE__ */ jsx(
    "div",
    {
      "data-testid": "modalOverlay",
      className: "usa-modal-overlay",
      onClick: T ? void 0 : Be,
      "aria-controls": E,
      children: w
    }
  ) });
}, cl$1 = forwardRef(nl$1), il$1 = ({
  id: E,
  children: w,
  isLarge: k = !1,
  forceAction: T = !1,
  modalRoot: ge = ".usa-modal-wrapper",
  renderToPortal: Be = !0,
  isInitiallyOpen: je,
  ...Qe
}, Je) => {
  const { isOpen: Ze, toggleModal: Xe } = Xr$1(je), [gt, dt] = useState(!1), fl = useRef(), Jr = useRef(), Ll = useRef(null), $l = `body > *:not(${ge || ".usa-modal-wrapper"}):not([aria-hidden])`, Il = "[data-modal-hidden]", Wr = (Hl) => {
    Xe(Hl, !1);
  };
  useImperativeHandle(
    Je,
    () => ({
      modalId: E,
      modalIsOpen: Ze,
      toggleModal: Xe
    }),
    [E, Ze]
  );
  const Bl = () => {
    const { body: Hl } = document;
    Hl.style.paddingRight = Jr.current || "", Hl.classList.add("usa-js-modal--active"), document.querySelectorAll($l).forEach((jl) => {
      jl.setAttribute("aria-hidden", "true"), jl.setAttribute("data-modal-hidden", "");
    }), T && Hl.classList.add("usa-js-no-click");
  }, zl = () => {
    const { body: Hl } = document;
    Hl.style.paddingRight = fl.current || "", Hl.classList.remove("usa-js-modal--active"), Hl.classList.remove("usa-js-no-click"), document.querySelectorAll(Il).forEach((jl) => {
      jl.removeAttribute("aria-hidden"), jl.removeAttribute("data-modal-hidden");
    });
  };
  useEffect(() => {
    const Hl = el$1(), jl = window.getComputedStyle(document.body).getPropertyValue("padding-right") || "0px", Ul = `${parseInt(jl.replace(/px/, ""), 10) + parseInt(Hl.replace(/px/, ""), 10)}px`;
    return fl.current = jl, Jr.current = Ul, dt(!0), () => {
      zl();
    };
  }, []), useEffect(() => {
    gt && (Ze === !0 ? Bl() : Ze === !1 && zl());
  }, [Ze]);
  const Vl = Qe["aria-labelledby"], Rl = Qe["aria-describedby"];
  Vl || console.error(`${E} is missing aria-labelledby attribute`), Rl || console.error(`${E} is missing aria-describedby attribute`), delete Qe["aria-labelledby"], delete Qe["aria-describedby"];
  const Wl = /* @__PURE__ */ jsx(Dt$2, { active: Ze, focusTrapOptions: {
    initialFocus: () => {
      var Hl;
      return ((Hl = Ll.current) == null ? void 0 : Hl.querySelector("[data-focus]")) || Ll.current || !1;
    },
    escapeDeactivates: () => T ? !1 : (Wr(), !0)
  }, children: /* @__PURE__ */ jsx(
    cl$1,
    {
      role: "dialog",
      id: E,
      "aria-labelledby": Vl,
      "aria-describedby": Rl,
      "data-force-action": T,
      isVisible: Ze,
      handleClose: Wr,
      forceAction: T,
      children: /* @__PURE__ */ jsx(
        al$1,
        {
          modalId: E,
          ...Qe,
          ref: Ll,
          isLarge: k,
          forceAction: T,
          tabIndex: -1,
          handleClose: Wr,
          children: w
        }
      )
    }
  ) });
  if (Be) {
    const Hl = document.getElementById("modal-root") || document.body;
    return ReactDOM.createPortal(Wl, Hl);
  } else
    return Wl;
};
forwardRef(il$1);
const DEFAULT_MAP_PROPS = {
  center: "[-94.5, 41.25]",
  zoom: "8.3",
  datasetId: "vulcan-ffco2-yeargrid-v4",
  layerId: "vulcan-total-co2",
  dateTime: "2020-12-31",
  compareDateTime: "2015-12-31",
  compareLabel: "2020 VS 2015",
  attrUrl: "",
  attrAuthor: "",
  caption: ""
}, InsertMapButton = (E) => {
  const w = usePublisher(insertJsx$);
  return /* @__PURE__ */ jsxs(
    Button,
    {
      onClick: () => {
        try {
          w({
            name: "MapBlock",
            kind: "flow",
            props: {
              datasetId: DEFAULT_MAP_PROPS.datasetId,
              layerId: DEFAULT_MAP_PROPS.layerId,
              dateTime: DEFAULT_MAP_PROPS.dateTime
            }
          });
        } catch (T) {
          console.error("Error inserting Map component:", T), alert("Could not insert Map component. See console for details.");
        }
      },
      title: "Insert Map",
      className: "text-sm display-flex flex-align-center padding-1",
      children: [
        /* @__PURE__ */ jsx(ae$1.Map, { className: "margin-right-05 width-3 height-3", "aria-hidden": "true" }),
        "Add Map"
      ]
    }
  );
}, InsertSectionBreak = (E) => {
  const w = usePublisher(insertJsx$);
  return /* @__PURE__ */ jsx(
    Button,
    {
      onClick: () => {
        try {
          w({
            name: "Break",
            kind: "text",
            props: {}
          });
        } catch (T) {
          console.error("Error inserting Map component:", T), alert("Could not insert chart component. See console for details.");
        }
      },
      title: "Insert Map",
      className: "text-sm display-flex flex-align-center padding-1",
      children: "Insert Break"
    }
  );
}, InsertIframe = (E) => {
  const w = usePublisher(insertJsx$);
  return /* @__PURE__ */ jsx(
    Button,
    {
      onClick: () => {
        try {
          w({
            name: "iframe",
            kind: "flow",
            props: {
              src: "https://example.com",
              width: "100%",
              height: "400",
              frameBorder: "0",
              title: "Embedded Content"
            }
          });
        } catch (T) {
          console.error("Error inserting iframe component:", T), alert("Could not insert iframe. See console for details.");
        }
      },
      title: "Insert Iframe",
      className: "text-sm display-flex flex-align-center padding-1",
      children: "Insert Iframe"
    }
  );
};
class Subscribable {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(w) {
    const k = {
      listener: w
    };
    return this.listeners.add(k), this.onSubscribe(), () => {
      this.listeners.delete(k), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}
const isServer = typeof window > "u" || "Deno" in window;
function noop() {
}
function functionalUpdate(E, w) {
  return typeof E == "function" ? E(w) : E;
}
function isValidTimeout(E) {
  return typeof E == "number" && E >= 0 && E !== 1 / 0;
}
function timeUntilStale(E, w) {
  return Math.max(E + (w || 0) - Date.now(), 0);
}
function parseQueryArgs(E, w, k) {
  return isQueryKey(E) ? typeof w == "function" ? {
    ...k,
    queryKey: E,
    queryFn: w
  } : {
    ...w,
    queryKey: E
  } : E;
}
function parseFilterArgs(E, w, k) {
  return isQueryKey(E) ? [{
    ...w,
    queryKey: E
  }, k] : [E || {}, w];
}
function matchQuery(E, w) {
  const {
    type: k = "all",
    exact: T,
    fetchStatus: ge,
    predicate: Be,
    queryKey: je,
    stale: Qe
  } = E;
  if (isQueryKey(je)) {
    if (T) {
      if (w.queryHash !== hashQueryKeyByOptions(je, w.options))
        return !1;
    } else if (!partialMatchKey(w.queryKey, je))
      return !1;
  }
  if (k !== "all") {
    const Je = w.isActive();
    if (k === "active" && !Je || k === "inactive" && Je)
      return !1;
  }
  return !(typeof Qe == "boolean" && w.isStale() !== Qe || typeof ge < "u" && ge !== w.state.fetchStatus || Be && !Be(w));
}
function matchMutation(E, w) {
  const {
    exact: k,
    fetching: T,
    predicate: ge,
    mutationKey: Be
  } = E;
  if (isQueryKey(Be)) {
    if (!w.options.mutationKey)
      return !1;
    if (k) {
      if (hashQueryKey(w.options.mutationKey) !== hashQueryKey(Be))
        return !1;
    } else if (!partialMatchKey(w.options.mutationKey, Be))
      return !1;
  }
  return !(typeof T == "boolean" && w.state.status === "loading" !== T || ge && !ge(w));
}
function hashQueryKeyByOptions(E, w) {
  return (w?.queryKeyHashFn || hashQueryKey)(E);
}
function hashQueryKey(E) {
  return JSON.stringify(E, (w, k) => isPlainObject(k) ? Object.keys(k).sort().reduce((T, ge) => (T[ge] = k[ge], T), {}) : k);
}
function partialMatchKey(E, w) {
  return partialDeepEqual(E, w);
}
function partialDeepEqual(E, w) {
  return E === w ? !0 : typeof E != typeof w ? !1 : E && w && typeof E == "object" && typeof w == "object" ? !Object.keys(w).some((k) => !partialDeepEqual(E[k], w[k])) : !1;
}
function replaceEqualDeep(E, w) {
  if (E === w)
    return E;
  const k = isPlainArray(E) && isPlainArray(w);
  if (k || isPlainObject(E) && isPlainObject(w)) {
    const T = k ? E.length : Object.keys(E).length, ge = k ? w : Object.keys(w), Be = ge.length, je = k ? [] : {};
    let Qe = 0;
    for (let Je = 0; Je < Be; Je++) {
      const Ze = k ? Je : ge[Je];
      je[Ze] = replaceEqualDeep(E[Ze], w[Ze]), je[Ze] === E[Ze] && Qe++;
    }
    return T === Be && Qe === T ? E : je;
  }
  return w;
}
function isPlainArray(E) {
  return Array.isArray(E) && E.length === Object.keys(E).length;
}
function isPlainObject(E) {
  if (!hasObjectPrototype(E))
    return !1;
  const w = E.constructor;
  if (typeof w > "u")
    return !0;
  const k = w.prototype;
  return !(!hasObjectPrototype(k) || !k.hasOwnProperty("isPrototypeOf"));
}
function hasObjectPrototype(E) {
  return Object.prototype.toString.call(E) === "[object Object]";
}
function isQueryKey(E) {
  return Array.isArray(E);
}
function sleep(E) {
  return new Promise((w) => {
    setTimeout(w, E);
  });
}
function scheduleMicrotask(E) {
  sleep(0).then(E);
}
function getAbortController() {
  if (typeof AbortController == "function")
    return new AbortController();
}
function replaceData(E, w, k) {
  return k.isDataEqual != null && k.isDataEqual(E, w) ? E : typeof k.structuralSharing == "function" ? k.structuralSharing(E, w) : k.structuralSharing !== !1 ? replaceEqualDeep(E, w) : w;
}
class FocusManager extends Subscribable {
  constructor() {
    super(), this.setup = (w) => {
      if (!isServer && window.addEventListener) {
        const k = () => w();
        return window.addEventListener("visibilitychange", k, !1), window.addEventListener("focus", k, !1), () => {
          window.removeEventListener("visibilitychange", k), window.removeEventListener("focus", k);
        };
      }
    };
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var w;
      (w = this.cleanup) == null || w.call(this), this.cleanup = void 0;
    }
  }
  setEventListener(w) {
    var k;
    this.setup = w, (k = this.cleanup) == null || k.call(this), this.cleanup = w((T) => {
      typeof T == "boolean" ? this.setFocused(T) : this.onFocus();
    });
  }
  setFocused(w) {
    this.focused !== w && (this.focused = w, this.onFocus());
  }
  onFocus() {
    this.listeners.forEach(({
      listener: w
    }) => {
      w();
    });
  }
  isFocused() {
    return typeof this.focused == "boolean" ? this.focused : typeof document > "u" ? !0 : [void 0, "visible", "prerender"].includes(document.visibilityState);
  }
}
const focusManager = new FocusManager(), onlineEvents = ["online", "offline"];
class OnlineManager extends Subscribable {
  constructor() {
    super(), this.setup = (w) => {
      if (!isServer && window.addEventListener) {
        const k = () => w();
        return onlineEvents.forEach((T) => {
          window.addEventListener(T, k, !1);
        }), () => {
          onlineEvents.forEach((T) => {
            window.removeEventListener(T, k);
          });
        };
      }
    };
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var w;
      (w = this.cleanup) == null || w.call(this), this.cleanup = void 0;
    }
  }
  setEventListener(w) {
    var k;
    this.setup = w, (k = this.cleanup) == null || k.call(this), this.cleanup = w((T) => {
      typeof T == "boolean" ? this.setOnline(T) : this.onOnline();
    });
  }
  setOnline(w) {
    this.online !== w && (this.online = w, this.onOnline());
  }
  onOnline() {
    this.listeners.forEach(({
      listener: w
    }) => {
      w();
    });
  }
  isOnline() {
    return typeof this.online == "boolean" ? this.online : typeof navigator > "u" || typeof navigator.onLine > "u" ? !0 : navigator.onLine;
  }
}
const onlineManager = new OnlineManager();
function defaultRetryDelay(E) {
  return Math.min(1e3 * 2 ** E, 3e4);
}
function canFetch(E) {
  return (E ?? "online") === "online" ? onlineManager.isOnline() : !0;
}
class CancelledError {
  constructor(w) {
    this.revert = w?.revert, this.silent = w?.silent;
  }
}
function isCancelledError(E) {
  return E instanceof CancelledError;
}
function createRetryer(E) {
  let w = !1, k = 0, T = !1, ge, Be, je;
  const Qe = new Promise(($l, Il) => {
    Be = $l, je = Il;
  }), Je = ($l) => {
    T || (fl(new CancelledError($l)), E.abort == null || E.abort());
  }, Ze = () => {
    w = !0;
  }, Xe = () => {
    w = !1;
  }, gt = () => !focusManager.isFocused() || E.networkMode !== "always" && !onlineManager.isOnline(), dt = ($l) => {
    T || (T = !0, E.onSuccess == null || E.onSuccess($l), ge?.(), Be($l));
  }, fl = ($l) => {
    T || (T = !0, E.onError == null || E.onError($l), ge?.(), je($l));
  }, Jr = () => new Promise(($l) => {
    ge = (Il) => {
      const Wr = T || !gt();
      return Wr && $l(Il), Wr;
    }, E.onPause == null || E.onPause();
  }).then(() => {
    ge = void 0, T || E.onContinue == null || E.onContinue();
  }), Ll = () => {
    if (T)
      return;
    let $l;
    try {
      $l = E.fn();
    } catch (Il) {
      $l = Promise.reject(Il);
    }
    Promise.resolve($l).then(dt).catch((Il) => {
      var Wr, Bl;
      if (T)
        return;
      const zl = (Wr = E.retry) != null ? Wr : 3, Vl = (Bl = E.retryDelay) != null ? Bl : defaultRetryDelay, Rl = typeof Vl == "function" ? Vl(k, Il) : Vl, Wl = zl === !0 || typeof zl == "number" && k < zl || typeof zl == "function" && zl(k, Il);
      if (w || !Wl) {
        fl(Il);
        return;
      }
      k++, E.onFail == null || E.onFail(k, Il), sleep(Rl).then(() => {
        if (gt())
          return Jr();
      }).then(() => {
        w ? fl(Il) : Ll();
      });
    });
  };
  return canFetch(E.networkMode) ? Ll() : Jr().then(Ll), {
    promise: Qe,
    cancel: Je,
    continue: () => ge?.() ? Qe : Promise.resolve(),
    cancelRetry: Ze,
    continueRetry: Xe
  };
}
const defaultLogger = console;
function createNotifyManager() {
  let E = [], w = 0, k = (Xe) => {
    Xe();
  }, T = (Xe) => {
    Xe();
  };
  const ge = (Xe) => {
    let gt;
    w++;
    try {
      gt = Xe();
    } finally {
      w--, w || Qe();
    }
    return gt;
  }, Be = (Xe) => {
    w ? E.push(Xe) : scheduleMicrotask(() => {
      k(Xe);
    });
  }, je = (Xe) => (...gt) => {
    Be(() => {
      Xe(...gt);
    });
  }, Qe = () => {
    const Xe = E;
    E = [], Xe.length && scheduleMicrotask(() => {
      T(() => {
        Xe.forEach((gt) => {
          k(gt);
        });
      });
    });
  };
  return {
    batch: ge,
    batchCalls: je,
    schedule: Be,
    setNotifyFunction: (Xe) => {
      k = Xe;
    },
    setBatchNotifyFunction: (Xe) => {
      T = Xe;
    }
  };
}
const notifyManager = createNotifyManager();
class Removable {
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), isValidTimeout(this.cacheTime) && (this.gcTimeout = setTimeout(() => {
      this.optionalRemove();
    }, this.cacheTime));
  }
  updateCacheTime(w) {
    this.cacheTime = Math.max(this.cacheTime || 0, w ?? (isServer ? 1 / 0 : 5 * 60 * 1e3));
  }
  clearGcTimeout() {
    this.gcTimeout && (clearTimeout(this.gcTimeout), this.gcTimeout = void 0);
  }
}
class Query extends Removable {
  constructor(w) {
    super(), this.abortSignalConsumed = !1, this.defaultOptions = w.defaultOptions, this.setOptions(w.options), this.observers = [], this.cache = w.cache, this.logger = w.logger || defaultLogger, this.queryKey = w.queryKey, this.queryHash = w.queryHash, this.initialState = w.state || getDefaultState$1(this.options), this.state = this.initialState, this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  setOptions(w) {
    this.options = {
      ...this.defaultOptions,
      ...w
    }, this.updateCacheTime(this.options.cacheTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && this.cache.remove(this);
  }
  setData(w, k) {
    const T = replaceData(this.state.data, w, this.options);
    return this.dispatch({
      data: T,
      type: "success",
      dataUpdatedAt: k?.updatedAt,
      manual: k?.manual
    }), T;
  }
  setState(w, k) {
    this.dispatch({
      type: "setState",
      state: w,
      setStateOptions: k
    });
  }
  cancel(w) {
    var k;
    const T = this.promise;
    return (k = this.retryer) == null || k.cancel(w), T ? T.then(noop).catch(noop) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({
      silent: !0
    });
  }
  reset() {
    this.destroy(), this.setState(this.initialState);
  }
  isActive() {
    return this.observers.some((w) => w.options.enabled !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }
  isStale() {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some((w) => w.getCurrentResult().isStale);
  }
  isStaleByTime(w = 0) {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || !timeUntilStale(this.state.dataUpdatedAt, w);
  }
  onFocus() {
    var w;
    const k = this.observers.find((T) => T.shouldFetchOnWindowFocus());
    k && k.refetch({
      cancelRefetch: !1
    }), (w = this.retryer) == null || w.continue();
  }
  onOnline() {
    var w;
    const k = this.observers.find((T) => T.shouldFetchOnReconnect());
    k && k.refetch({
      cancelRefetch: !1
    }), (w = this.retryer) == null || w.continue();
  }
  addObserver(w) {
    this.observers.includes(w) || (this.observers.push(w), this.clearGcTimeout(), this.cache.notify({
      type: "observerAdded",
      query: this,
      observer: w
    }));
  }
  removeObserver(w) {
    this.observers.includes(w) && (this.observers = this.observers.filter((k) => k !== w), this.observers.length || (this.retryer && (this.abortSignalConsumed ? this.retryer.cancel({
      revert: !0
    }) : this.retryer.cancelRetry()), this.scheduleGc()), this.cache.notify({
      type: "observerRemoved",
      query: this,
      observer: w
    }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || this.dispatch({
      type: "invalidate"
    });
  }
  fetch(w, k) {
    var T, ge;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.dataUpdatedAt && k != null && k.cancelRefetch)
        this.cancel({
          silent: !0
        });
      else if (this.promise) {
        var Be;
        return (Be = this.retryer) == null || Be.continueRetry(), this.promise;
      }
    }
    if (w && this.setOptions(w), !this.options.queryFn) {
      const fl = this.observers.find((Jr) => Jr.options.queryFn);
      fl && this.setOptions(fl.options);
    }
    process.env.NODE_ENV !== "production" && (Array.isArray(this.options.queryKey) || this.logger.error("As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']"));
    const je = getAbortController(), Qe = {
      queryKey: this.queryKey,
      pageParam: void 0,
      meta: this.meta
    }, Je = (fl) => {
      Object.defineProperty(fl, "signal", {
        enumerable: !0,
        get: () => {
          if (je)
            return this.abortSignalConsumed = !0, je.signal;
        }
      });
    };
    Je(Qe);
    const Ze = () => this.options.queryFn ? (this.abortSignalConsumed = !1, this.options.queryFn(Qe)) : Promise.reject("Missing queryFn for queryKey '" + this.options.queryHash + "'"), Xe = {
      fetchOptions: k,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn: Ze
    };
    if (Je(Xe), (T = this.options.behavior) == null || T.onFetch(Xe), this.revertState = this.state, this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((ge = Xe.fetchOptions) == null ? void 0 : ge.meta)) {
      var gt;
      this.dispatch({
        type: "fetch",
        meta: (gt = Xe.fetchOptions) == null ? void 0 : gt.meta
      });
    }
    const dt = (fl) => {
      if (isCancelledError(fl) && fl.silent || this.dispatch({
        type: "error",
        error: fl
      }), !isCancelledError(fl)) {
        var Jr, Ll, $l, Il;
        (Jr = (Ll = this.cache.config).onError) == null || Jr.call(Ll, fl, this), ($l = (Il = this.cache.config).onSettled) == null || $l.call(Il, this.state.data, fl, this), process.env.NODE_ENV !== "production" && this.logger.error(fl);
      }
      this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
    };
    return this.retryer = createRetryer({
      fn: Xe.fetchFn,
      abort: je?.abort.bind(je),
      onSuccess: (fl) => {
        var Jr, Ll, $l, Il;
        if (typeof fl > "u") {
          process.env.NODE_ENV !== "production" && this.logger.error("Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: " + this.queryHash), dt(new Error(this.queryHash + " data is undefined"));
          return;
        }
        this.setData(fl), (Jr = (Ll = this.cache.config).onSuccess) == null || Jr.call(Ll, fl, this), ($l = (Il = this.cache.config).onSettled) == null || $l.call(Il, fl, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
      },
      onError: dt,
      onFail: (fl, Jr) => {
        this.dispatch({
          type: "failed",
          failureCount: fl,
          error: Jr
        });
      },
      onPause: () => {
        this.dispatch({
          type: "pause"
        });
      },
      onContinue: () => {
        this.dispatch({
          type: "continue"
        });
      },
      retry: Xe.options.retry,
      retryDelay: Xe.options.retryDelay,
      networkMode: Xe.options.networkMode
    }), this.promise = this.retryer.promise, this.promise;
  }
  dispatch(w) {
    const k = (T) => {
      var ge, Be;
      switch (w.type) {
        case "failed":
          return {
            ...T,
            fetchFailureCount: w.failureCount,
            fetchFailureReason: w.error
          };
        case "pause":
          return {
            ...T,
            fetchStatus: "paused"
          };
        case "continue":
          return {
            ...T,
            fetchStatus: "fetching"
          };
        case "fetch":
          return {
            ...T,
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchMeta: (ge = w.meta) != null ? ge : null,
            fetchStatus: canFetch(this.options.networkMode) ? "fetching" : "paused",
            ...!T.dataUpdatedAt && {
              error: null,
              status: "loading"
            }
          };
        case "success":
          return {
            ...T,
            data: w.data,
            dataUpdateCount: T.dataUpdateCount + 1,
            dataUpdatedAt: (Be = w.dataUpdatedAt) != null ? Be : Date.now(),
            error: null,
            isInvalidated: !1,
            status: "success",
            ...!w.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null
            }
          };
        case "error":
          const je = w.error;
          return isCancelledError(je) && je.revert && this.revertState ? {
            ...this.revertState,
            fetchStatus: "idle"
          } : {
            ...T,
            error: je,
            errorUpdateCount: T.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: T.fetchFailureCount + 1,
            fetchFailureReason: je,
            fetchStatus: "idle",
            status: "error"
          };
        case "invalidate":
          return {
            ...T,
            isInvalidated: !0
          };
        case "setState":
          return {
            ...T,
            ...w.state
          };
      }
    };
    this.state = k(this.state), notifyManager.batch(() => {
      this.observers.forEach((T) => {
        T.onQueryUpdate(w);
      }), this.cache.notify({
        query: this,
        type: "updated",
        action: w
      });
    });
  }
}
function getDefaultState$1(E) {
  const w = typeof E.initialData == "function" ? E.initialData() : E.initialData, k = typeof w < "u", T = k ? typeof E.initialDataUpdatedAt == "function" ? E.initialDataUpdatedAt() : E.initialDataUpdatedAt : 0;
  return {
    data: w,
    dataUpdateCount: 0,
    dataUpdatedAt: k ? T ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: k ? "success" : "loading",
    fetchStatus: "idle"
  };
}
class QueryCache extends Subscribable {
  constructor(w) {
    super(), this.config = w || {}, this.queries = [], this.queriesMap = {};
  }
  build(w, k, T) {
    var ge;
    const Be = k.queryKey, je = (ge = k.queryHash) != null ? ge : hashQueryKeyByOptions(Be, k);
    let Qe = this.get(je);
    return Qe || (Qe = new Query({
      cache: this,
      logger: w.getLogger(),
      queryKey: Be,
      queryHash: je,
      options: w.defaultQueryOptions(k),
      state: T,
      defaultOptions: w.getQueryDefaults(Be)
    }), this.add(Qe)), Qe;
  }
  add(w) {
    this.queriesMap[w.queryHash] || (this.queriesMap[w.queryHash] = w, this.queries.push(w), this.notify({
      type: "added",
      query: w
    }));
  }
  remove(w) {
    const k = this.queriesMap[w.queryHash];
    k && (w.destroy(), this.queries = this.queries.filter((T) => T !== w), k === w && delete this.queriesMap[w.queryHash], this.notify({
      type: "removed",
      query: w
    }));
  }
  clear() {
    notifyManager.batch(() => {
      this.queries.forEach((w) => {
        this.remove(w);
      });
    });
  }
  get(w) {
    return this.queriesMap[w];
  }
  getAll() {
    return this.queries;
  }
  /**
   * @deprecated This method should be used with only one object argument.
   */
  find(w, k) {
    const [T] = parseFilterArgs(w, k);
    return typeof T.exact > "u" && (T.exact = !0), this.queries.find((ge) => matchQuery(T, ge));
  }
  /**
   * @deprecated This method should be used with only one object argument.
   */
  findAll(w, k) {
    const [T] = parseFilterArgs(w, k);
    return Object.keys(T).length > 0 ? this.queries.filter((ge) => matchQuery(T, ge)) : this.queries;
  }
  notify(w) {
    notifyManager.batch(() => {
      this.listeners.forEach(({
        listener: k
      }) => {
        k(w);
      });
    });
  }
  onFocus() {
    notifyManager.batch(() => {
      this.queries.forEach((w) => {
        w.onFocus();
      });
    });
  }
  onOnline() {
    notifyManager.batch(() => {
      this.queries.forEach((w) => {
        w.onOnline();
      });
    });
  }
}
class Mutation extends Removable {
  constructor(w) {
    super(), this.defaultOptions = w.defaultOptions, this.mutationId = w.mutationId, this.mutationCache = w.mutationCache, this.logger = w.logger || defaultLogger, this.observers = [], this.state = w.state || getDefaultState(), this.setOptions(w.options), this.scheduleGc();
  }
  setOptions(w) {
    this.options = {
      ...this.defaultOptions,
      ...w
    }, this.updateCacheTime(this.options.cacheTime);
  }
  get meta() {
    return this.options.meta;
  }
  setState(w) {
    this.dispatch({
      type: "setState",
      state: w
    });
  }
  addObserver(w) {
    this.observers.includes(w) || (this.observers.push(w), this.clearGcTimeout(), this.mutationCache.notify({
      type: "observerAdded",
      mutation: this,
      observer: w
    }));
  }
  removeObserver(w) {
    this.observers = this.observers.filter((k) => k !== w), this.scheduleGc(), this.mutationCache.notify({
      type: "observerRemoved",
      mutation: this,
      observer: w
    });
  }
  optionalRemove() {
    this.observers.length || (this.state.status === "loading" ? this.scheduleGc() : this.mutationCache.remove(this));
  }
  continue() {
    var w, k;
    return (w = (k = this.retryer) == null ? void 0 : k.continue()) != null ? w : this.execute();
  }
  async execute() {
    const w = () => {
      var Wl;
      return this.retryer = createRetryer({
        fn: () => this.options.mutationFn ? this.options.mutationFn(this.state.variables) : Promise.reject("No mutationFn found"),
        onFail: (Hl, jl) => {
          this.dispatch({
            type: "failed",
            failureCount: Hl,
            error: jl
          });
        },
        onPause: () => {
          this.dispatch({
            type: "pause"
          });
        },
        onContinue: () => {
          this.dispatch({
            type: "continue"
          });
        },
        retry: (Wl = this.options.retry) != null ? Wl : 0,
        retryDelay: this.options.retryDelay,
        networkMode: this.options.networkMode
      }), this.retryer.promise;
    }, k = this.state.status === "loading";
    try {
      var T, ge, Be, je, Qe, Je, Ze, Xe;
      if (!k) {
        var gt, dt, fl, Jr;
        this.dispatch({
          type: "loading",
          variables: this.options.variables
        }), await ((gt = (dt = this.mutationCache.config).onMutate) == null ? void 0 : gt.call(dt, this.state.variables, this));
        const Hl = await ((fl = (Jr = this.options).onMutate) == null ? void 0 : fl.call(Jr, this.state.variables));
        Hl !== this.state.context && this.dispatch({
          type: "loading",
          context: Hl,
          variables: this.state.variables
        });
      }
      const Wl = await w();
      return await ((T = (ge = this.mutationCache.config).onSuccess) == null ? void 0 : T.call(ge, Wl, this.state.variables, this.state.context, this)), await ((Be = (je = this.options).onSuccess) == null ? void 0 : Be.call(je, Wl, this.state.variables, this.state.context)), await ((Qe = (Je = this.mutationCache.config).onSettled) == null ? void 0 : Qe.call(Je, Wl, null, this.state.variables, this.state.context, this)), await ((Ze = (Xe = this.options).onSettled) == null ? void 0 : Ze.call(Xe, Wl, null, this.state.variables, this.state.context)), this.dispatch({
        type: "success",
        data: Wl
      }), Wl;
    } catch (Wl) {
      try {
        var Ll, $l, Il, Wr, Bl, zl, Vl, Rl;
        throw await ((Ll = ($l = this.mutationCache.config).onError) == null ? void 0 : Ll.call($l, Wl, this.state.variables, this.state.context, this)), process.env.NODE_ENV !== "production" && this.logger.error(Wl), await ((Il = (Wr = this.options).onError) == null ? void 0 : Il.call(Wr, Wl, this.state.variables, this.state.context)), await ((Bl = (zl = this.mutationCache.config).onSettled) == null ? void 0 : Bl.call(zl, void 0, Wl, this.state.variables, this.state.context, this)), await ((Vl = (Rl = this.options).onSettled) == null ? void 0 : Vl.call(Rl, void 0, Wl, this.state.variables, this.state.context)), Wl;
      } finally {
        this.dispatch({
          type: "error",
          error: Wl
        });
      }
    }
  }
  dispatch(w) {
    const k = (T) => {
      switch (w.type) {
        case "failed":
          return {
            ...T,
            failureCount: w.failureCount,
            failureReason: w.error
          };
        case "pause":
          return {
            ...T,
            isPaused: !0
          };
        case "continue":
          return {
            ...T,
            isPaused: !1
          };
        case "loading":
          return {
            ...T,
            context: w.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: !canFetch(this.options.networkMode),
            status: "loading",
            variables: w.variables
          };
        case "success":
          return {
            ...T,
            data: w.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1
          };
        case "error":
          return {
            ...T,
            data: void 0,
            error: w.error,
            failureCount: T.failureCount + 1,
            failureReason: w.error,
            isPaused: !1,
            status: "error"
          };
        case "setState":
          return {
            ...T,
            ...w.state
          };
      }
    };
    this.state = k(this.state), notifyManager.batch(() => {
      this.observers.forEach((T) => {
        T.onMutationUpdate(w);
      }), this.mutationCache.notify({
        mutation: this,
        type: "updated",
        action: w
      });
    });
  }
}
function getDefaultState() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0
  };
}
class MutationCache extends Subscribable {
  constructor(w) {
    super(), this.config = w || {}, this.mutations = [], this.mutationId = 0;
  }
  build(w, k, T) {
    const ge = new Mutation({
      mutationCache: this,
      logger: w.getLogger(),
      mutationId: ++this.mutationId,
      options: w.defaultMutationOptions(k),
      state: T,
      defaultOptions: k.mutationKey ? w.getMutationDefaults(k.mutationKey) : void 0
    });
    return this.add(ge), ge;
  }
  add(w) {
    this.mutations.push(w), this.notify({
      type: "added",
      mutation: w
    });
  }
  remove(w) {
    this.mutations = this.mutations.filter((k) => k !== w), this.notify({
      type: "removed",
      mutation: w
    });
  }
  clear() {
    notifyManager.batch(() => {
      this.mutations.forEach((w) => {
        this.remove(w);
      });
    });
  }
  getAll() {
    return this.mutations;
  }
  find(w) {
    return typeof w.exact > "u" && (w.exact = !0), this.mutations.find((k) => matchMutation(w, k));
  }
  findAll(w) {
    return this.mutations.filter((k) => matchMutation(w, k));
  }
  notify(w) {
    notifyManager.batch(() => {
      this.listeners.forEach(({
        listener: k
      }) => {
        k(w);
      });
    });
  }
  resumePausedMutations() {
    var w;
    return this.resuming = ((w = this.resuming) != null ? w : Promise.resolve()).then(() => {
      const k = this.mutations.filter((T) => T.state.isPaused);
      return notifyManager.batch(() => k.reduce((T, ge) => T.then(() => ge.continue().catch(noop)), Promise.resolve()));
    }).then(() => {
      this.resuming = void 0;
    }), this.resuming;
  }
}
function infiniteQueryBehavior() {
  return {
    onFetch: (E) => {
      E.fetchFn = () => {
        var w, k, T, ge, Be, je;
        const Qe = (w = E.fetchOptions) == null || (k = w.meta) == null ? void 0 : k.refetchPage, Je = (T = E.fetchOptions) == null || (ge = T.meta) == null ? void 0 : ge.fetchMore, Ze = Je?.pageParam, Xe = Je?.direction === "forward", gt = Je?.direction === "backward", dt = ((Be = E.state.data) == null ? void 0 : Be.pages) || [], fl = ((je = E.state.data) == null ? void 0 : je.pageParams) || [];
        let Jr = fl, Ll = !1;
        const $l = (Rl) => {
          Object.defineProperty(Rl, "signal", {
            enumerable: !0,
            get: () => {
              var Wl;
              if ((Wl = E.signal) != null && Wl.aborted)
                Ll = !0;
              else {
                var Hl;
                (Hl = E.signal) == null || Hl.addEventListener("abort", () => {
                  Ll = !0;
                });
              }
              return E.signal;
            }
          });
        }, Il = E.options.queryFn || (() => Promise.reject("Missing queryFn for queryKey '" + E.options.queryHash + "'")), Wr = (Rl, Wl, Hl, jl) => (Jr = jl ? [Wl, ...Jr] : [...Jr, Wl], jl ? [Hl, ...Rl] : [...Rl, Hl]), Bl = (Rl, Wl, Hl, jl) => {
          if (Ll)
            return Promise.reject("Cancelled");
          if (typeof Hl > "u" && !Wl && Rl.length)
            return Promise.resolve(Rl);
          const Ul = {
            queryKey: E.queryKey,
            pageParam: Hl,
            meta: E.options.meta
          };
          $l(Ul);
          const Ql = Il(Ul);
          return Promise.resolve(Ql).then((Gl) => Wr(Rl, Hl, Gl, jl));
        };
        let zl;
        if (!dt.length)
          zl = Bl([]);
        else if (Xe) {
          const Rl = typeof Ze < "u", Wl = Rl ? Ze : getNextPageParam(E.options, dt);
          zl = Bl(dt, Rl, Wl);
        } else if (gt) {
          const Rl = typeof Ze < "u", Wl = Rl ? Ze : getPreviousPageParam(E.options, dt);
          zl = Bl(dt, Rl, Wl, !0);
        } else {
          Jr = [];
          const Rl = typeof E.options.getNextPageParam > "u";
          zl = (Qe && dt[0] ? Qe(dt[0], 0, dt) : !0) ? Bl([], Rl, fl[0]) : Promise.resolve(Wr([], fl[0], dt[0]));
          for (let Hl = 1; Hl < dt.length; Hl++)
            zl = zl.then((jl) => {
              if (Qe && dt[Hl] ? Qe(dt[Hl], Hl, dt) : !0) {
                const Ql = Rl ? fl[Hl] : getNextPageParam(E.options, jl);
                return Bl(jl, Rl, Ql);
              }
              return Promise.resolve(Wr(jl, fl[Hl], dt[Hl]));
            });
        }
        return zl.then((Rl) => ({
          pages: Rl,
          pageParams: Jr
        }));
      };
    }
  };
}
function getNextPageParam(E, w) {
  return E.getNextPageParam == null ? void 0 : E.getNextPageParam(w[w.length - 1], w);
}
function getPreviousPageParam(E, w) {
  return E.getPreviousPageParam == null ? void 0 : E.getPreviousPageParam(w[0], w);
}
class QueryClient {
  constructor(w = {}) {
    this.queryCache = w.queryCache || new QueryCache(), this.mutationCache = w.mutationCache || new MutationCache(), this.logger = w.logger || defaultLogger, this.defaultOptions = w.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = [], this.mountCount = 0, process.env.NODE_ENV !== "production" && w.logger && this.logger.error("Passing a custom logger has been deprecated and will be removed in the next major version.");
  }
  mount() {
    this.mountCount++, this.mountCount === 1 && (this.unsubscribeFocus = focusManager.subscribe(() => {
      focusManager.isFocused() && (this.resumePausedMutations(), this.queryCache.onFocus());
    }), this.unsubscribeOnline = onlineManager.subscribe(() => {
      onlineManager.isOnline() && (this.resumePausedMutations(), this.queryCache.onOnline());
    }));
  }
  unmount() {
    var w, k;
    this.mountCount--, this.mountCount === 0 && ((w = this.unsubscribeFocus) == null || w.call(this), this.unsubscribeFocus = void 0, (k = this.unsubscribeOnline) == null || k.call(this), this.unsubscribeOnline = void 0);
  }
  /**
   * @deprecated This method should be used with only one object argument.
   */
  isFetching(w, k) {
    const [T] = parseFilterArgs(w, k);
    return T.fetchStatus = "fetching", this.queryCache.findAll(T).length;
  }
  isMutating(w) {
    return this.mutationCache.findAll({
      ...w,
      fetching: !0
    }).length;
  }
  /**
   * @deprecated This method will accept only queryKey in the next major version.
   */
  getQueryData(w, k) {
    var T;
    return (T = this.queryCache.find(w, k)) == null ? void 0 : T.state.data;
  }
  /**
   * @deprecated This method should be used with only one object argument.
   */
  ensureQueryData(w, k, T) {
    const ge = parseQueryArgs(w, k, T), Be = this.getQueryData(ge.queryKey);
    return Be ? Promise.resolve(Be) : this.fetchQuery(ge);
  }
  /**
   * @deprecated This method should be used with only one object argument.
   */
  getQueriesData(w) {
    return this.getQueryCache().findAll(w).map(({
      queryKey: k,
      state: T
    }) => {
      const ge = T.data;
      return [k, ge];
    });
  }
  setQueryData(w, k, T) {
    const ge = this.queryCache.find(w), Be = ge?.state.data, je = functionalUpdate(k, Be);
    if (typeof je > "u")
      return;
    const Qe = parseQueryArgs(w), Je = this.defaultQueryOptions(Qe);
    return this.queryCache.build(this, Je).setData(je, {
      ...T,
      manual: !0
    });
  }
  /**
   * @deprecated This method should be used with only one object argument.
   */
  setQueriesData(w, k, T) {
    return notifyManager.batch(() => this.getQueryCache().findAll(w).map(({
      queryKey: ge
    }) => [ge, this.setQueryData(ge, k, T)]));
  }
  getQueryState(w, k) {
    var T;
    return (T = this.queryCache.find(w, k)) == null ? void 0 : T.state;
  }
  /**
   * @deprecated This method should be used with only one object argument.
   */
  removeQueries(w, k) {
    const [T] = parseFilterArgs(w, k), ge = this.queryCache;
    notifyManager.batch(() => {
      ge.findAll(T).forEach((Be) => {
        ge.remove(Be);
      });
    });
  }
  /**
   * @deprecated This method should be used with only one object argument.
   */
  resetQueries(w, k, T) {
    const [ge, Be] = parseFilterArgs(w, k, T), je = this.queryCache, Qe = {
      type: "active",
      ...ge
    };
    return notifyManager.batch(() => (je.findAll(ge).forEach((Je) => {
      Je.reset();
    }), this.refetchQueries(Qe, Be)));
  }
  /**
   * @deprecated This method should be used with only one object argument.
   */
  cancelQueries(w, k, T) {
    const [ge, Be = {}] = parseFilterArgs(w, k, T);
    typeof Be.revert > "u" && (Be.revert = !0);
    const je = notifyManager.batch(() => this.queryCache.findAll(ge).map((Qe) => Qe.cancel(Be)));
    return Promise.all(je).then(noop).catch(noop);
  }
  /**
   * @deprecated This method should be used with only one object argument.
   */
  invalidateQueries(w, k, T) {
    const [ge, Be] = parseFilterArgs(w, k, T);
    return notifyManager.batch(() => {
      var je, Qe;
      if (this.queryCache.findAll(ge).forEach((Ze) => {
        Ze.invalidate();
      }), ge.refetchType === "none")
        return Promise.resolve();
      const Je = {
        ...ge,
        type: (je = (Qe = ge.refetchType) != null ? Qe : ge.type) != null ? je : "active"
      };
      return this.refetchQueries(Je, Be);
    });
  }
  /**
   * @deprecated This method should be used with only one object argument.
   */
  refetchQueries(w, k, T) {
    const [ge, Be] = parseFilterArgs(w, k, T), je = notifyManager.batch(() => this.queryCache.findAll(ge).filter((Je) => !Je.isDisabled()).map((Je) => {
      var Ze;
      return Je.fetch(void 0, {
        ...Be,
        cancelRefetch: (Ze = Be?.cancelRefetch) != null ? Ze : !0,
        meta: {
          refetchPage: ge.refetchPage
        }
      });
    }));
    let Qe = Promise.all(je).then(noop);
    return Be != null && Be.throwOnError || (Qe = Qe.catch(noop)), Qe;
  }
  /**
   * @deprecated This method should be used with only one object argument.
   */
  fetchQuery(w, k, T) {
    const ge = parseQueryArgs(w, k, T), Be = this.defaultQueryOptions(ge);
    typeof Be.retry > "u" && (Be.retry = !1);
    const je = this.queryCache.build(this, Be);
    return je.isStaleByTime(Be.staleTime) ? je.fetch(Be) : Promise.resolve(je.state.data);
  }
  /**
   * @deprecated This method should be used with only one object argument.
   */
  prefetchQuery(w, k, T) {
    return this.fetchQuery(w, k, T).then(noop).catch(noop);
  }
  /**
   * @deprecated This method should be used with only one object argument.
   */
  fetchInfiniteQuery(w, k, T) {
    const ge = parseQueryArgs(w, k, T);
    return ge.behavior = infiniteQueryBehavior(), this.fetchQuery(ge);
  }
  /**
   * @deprecated This method should be used with only one object argument.
   */
  prefetchInfiniteQuery(w, k, T) {
    return this.fetchInfiniteQuery(w, k, T).then(noop).catch(noop);
  }
  resumePausedMutations() {
    return this.mutationCache.resumePausedMutations();
  }
  getQueryCache() {
    return this.queryCache;
  }
  getMutationCache() {
    return this.mutationCache;
  }
  getLogger() {
    return this.logger;
  }
  getDefaultOptions() {
    return this.defaultOptions;
  }
  setDefaultOptions(w) {
    this.defaultOptions = w;
  }
  setQueryDefaults(w, k) {
    const T = this.queryDefaults.find((ge) => hashQueryKey(w) === hashQueryKey(ge.queryKey));
    T ? T.defaultOptions = k : this.queryDefaults.push({
      queryKey: w,
      defaultOptions: k
    });
  }
  getQueryDefaults(w) {
    if (!w)
      return;
    const k = this.queryDefaults.find((T) => partialMatchKey(w, T.queryKey));
    return process.env.NODE_ENV !== "production" && this.queryDefaults.filter((ge) => partialMatchKey(w, ge.queryKey)).length > 1 && this.logger.error("[QueryClient] Several query defaults match with key '" + JSON.stringify(w) + "'. The first matching query defaults are used. Please check how query defaults are registered. Order does matter here. cf. https://react-query.tanstack.com/reference/QueryClient#queryclientsetquerydefaults."), k?.defaultOptions;
  }
  setMutationDefaults(w, k) {
    const T = this.mutationDefaults.find((ge) => hashQueryKey(w) === hashQueryKey(ge.mutationKey));
    T ? T.defaultOptions = k : this.mutationDefaults.push({
      mutationKey: w,
      defaultOptions: k
    });
  }
  getMutationDefaults(w) {
    if (!w)
      return;
    const k = this.mutationDefaults.find((T) => partialMatchKey(w, T.mutationKey));
    return process.env.NODE_ENV !== "production" && this.mutationDefaults.filter((ge) => partialMatchKey(w, ge.mutationKey)).length > 1 && this.logger.error("[QueryClient] Several mutation defaults match with key '" + JSON.stringify(w) + "'. The first matching mutation defaults are used. Please check how mutation defaults are registered. Order does matter here. cf. https://react-query.tanstack.com/reference/QueryClient#queryclientsetmutationdefaults."), k?.defaultOptions;
  }
  defaultQueryOptions(w) {
    if (w != null && w._defaulted)
      return w;
    const k = {
      ...this.defaultOptions.queries,
      ...this.getQueryDefaults(w?.queryKey),
      ...w,
      _defaulted: !0
    };
    return !k.queryHash && k.queryKey && (k.queryHash = hashQueryKeyByOptions(k.queryKey, k)), typeof k.refetchOnReconnect > "u" && (k.refetchOnReconnect = k.networkMode !== "always"), typeof k.useErrorBoundary > "u" && (k.useErrorBoundary = !!k.suspense), k;
  }
  defaultMutationOptions(w) {
    return w != null && w._defaulted ? w : {
      ...this.defaultOptions.mutations,
      ...this.getMutationDefaults(w?.mutationKey),
      ...w,
      _defaulted: !0
    };
  }
  clear() {
    this.queryCache.clear(), this.mutationCache.clear();
  }
}
const n$1 = [
  {
    metadata: {
      id: "ct-ch4-monthgrid-v2023",
      name: "CarbonTracker-CH₄ Isotopic Methane Inverse Fluxes",
      description: "Global, monthly 1 degree resolution methane emission estimates from microbial, fossil and pyrogenic sources derived using inverse modeling, version 2023",
      taxonomy: [
        {
          name: "Topics",
          values: [
            { id: "Anthropogenic Emissions", name: "Anthropogenic Emissions" },
            { id: "Natural Emissions and Sinks", name: "Natural Emissions and Sinks" },
            { id: "Methane", name: "Methane" }
          ]
        },
        {
          name: "Source",
          values: [
            { id: "NASA", name: "NASA" },
            { id: "NOAA", name: "NOAA" }
          ]
        },
        {
          name: "Gas",
          values: [{ id: "CH₄", name: "CH₄" }]
        },
        {
          name: "Product Type",
          values: [
            { id: "Ground Measurements", name: "Ground Measurements" },
            { id: "Model Output", name: "Model Output" }
          ]
        }
      ],
      layers: [
        {
          id: "total-ch4",
          stacCol: "ct-ch4-monthgrid-v2023",
          name: "Total CH₄ Emission",
          type: "raster",
          description: "Total methane emission from microbial, fossil and pyrogenic sources.",
          zoomExtent: [0, 0],
          legend: {
            unit: { label: "g CH₄/m²/year" },
            type: "gradient",
            min: "0",
            max: "50",
            stops: [
              "#F7F4F9",
              "#E9E3F0",
              "#D9C3DF",
              "#CDA0CD",
              "#D57ABA",
              "#E34A9F",
              "#DF2179",
              "#C10E51",
              "#92003F",
              "#67001F"
            ]
          },
          compare: {
            datasetId: "ct-ch4-monthgrid-v2023",
            layerId: "total-ch4",
            mapLabel: ({ dateFns: E, datetime: w, compareDatetime: k }) => E && w && k ? `${E.format(w, "LLL yyyy")} VS ${E.format(k, "LLL yyyy")}` : ""
          }
        },
        {
          id: "microbial-ch4",
          stacCol: "ct-ch4-monthgrid-v2023",
          name: "Microbial CH₄ Emission",
          type: "raster",
          description: "Emission of methane from all microbial sources, such as wetlands, ruminants, agriculture and termites.",
          zoomExtent: [0, 20],
          legend: {
            unit: { label: "g CH₄/m²/year" },
            type: "gradient",
            min: "0",
            max: "30",
            stops: [
              "#F7F4F9",
              "#E9E3F0",
              "#D9C3DF",
              "#CDA0CD",
              "#D57ABA",
              "#E34A9F",
              "#DF2179",
              "#C10E51",
              "#92003F",
              "#67001F"
            ]
          },
          compare: {
            datasetId: "ct-ch4-monthgrid-v2023",
            layerId: "microbial-ch4",
            mapLabel: ({ dateFns: E, datetime: w, compareDatetime: k }) => E && w && k ? `${E.format(w, "LLL yyyy")} VS ${E.format(k, "LLL yyyy")}` : ""
          }
        },
        {
          id: "fossil-ch4",
          stacCol: "ct-ch4-monthgrid-v2023",
          name: "Fossil CH₄ Emission",
          type: "raster",
          description: "Emission of methane from all fossil sources, such as oil and gas activities and coal mining.",
          zoomExtent: [0, 20],
          legend: {
            unit: { label: "g CH₄/m²/year" },
            type: "gradient",
            min: "0",
            max: "50",
            stops: [
              "#F7F4F9",
              "#E9E3F0",
              "#D9C3DF",
              "#CDA0CD",
              "#D57ABA",
              "#E34A9F",
              "#DF2179",
              "#C10E51",
              "#92003F",
              "#67001F"
            ]
          },
          compare: {
            datasetId: "ct-ch4-monthgrid-v2023",
            layerId: "fossil-ch4",
            mapLabel: ({ dateFns: E, datetime: w, compareDatetime: k }) => E && w && k ? `${E.format(w, "LLL yyyy")} VS ${E.format(k, "LLL yyyy")}` : ""
          }
        },
        {
          id: "pyrogenic-ch4",
          stacCol: "ct-ch4-monthgrid-v2023",
          name: "Pyrogenic CH₄ Emission",
          type: "raster",
          description: "Emission of methane from all sources of biomass burning, such as wildfires and crop residue burning.",
          zoomExtent: [0, 20],
          legend: {
            unit: { label: "g CH₄/m²/year" },
            type: "gradient",
            min: "0",
            max: "8",
            stops: [
              "#F7F4F9",
              "#E9E3F0",
              "#D9C3DF",
              "#CDA0CD",
              "#D57ABA",
              "#E34A9F",
              "#DF2179",
              "#C10E51",
              "#92003F",
              "#67001F"
            ]
          },
          compare: {
            datasetId: "ct-ch4-monthgrid-v2023",
            layerId: "pyrogenic-ch4",
            mapLabel: ({ dateFns: E, datetime: w, compareDatetime: k }) => E && w && k ? `${E.format(w, "LLL yyyy")} VS ${E.format(k, "LLL yyyy")}` : ""
          }
        }
      ]
    },
    slug: "ct-ch4-monthgrid-v2023",
    content: ""
    // If you want to include full markdown content, you can parse it in here
  },
  {
    metadata: {
      id: "eccodarwin-co2flux-monthgrid-v5",
      name: "Air-Sea CO₂ Flux, ECCO-Darwin Model v5",
      description: "Global, monthly average air-sea CO₂ flux at ~1/3° resolution from 2020 to 2022",
      taxonomy: [
        {
          name: "Topics",
          values: [{ id: "Natural Emissions and Sinks", name: "Natural Emissions and Sinks" }]
        },
        {
          name: "Source",
          values: [{ id: "NASA", name: "NASA" }]
        },
        {
          name: "Gas",
          values: [{ id: "CO₂", name: "CO₂" }]
        },
        {
          name: "Product Type",
          values: [{ id: "Model Output", name: "Model Output" }]
        }
      ],
      layers: [
        {
          id: "air-sea-co2",
          stacCol: "eccodarwin-co2flux-monthgrid-v5",
          name: "Air-Sea CO₂ Flux",
          type: "raster",
          description: "Monthly mean air-sea CO₂ Flux (negative into ocean)",
          zoomExtent: [0, 20],
          legend: {
            unit: { label: "mmol m²/s" },
            type: "gradient",
            min: "-0.0007",
            max: "0.0007",
            stops: [
              "#0000FF",
              "#3399FF",
              "#66CCFF",
              "#FFFFFF",
              "#FF66CC",
              "#FF3399",
              "#FF0000"
            ]
          },
          compare: {
            datasetId: "eccodarwin-co2flux-monthgrid-v5",
            layerId: "air-sea-co2",
            mapLabel: ({ dateFns: E, datetime: w, compareDatetime: k }) => E && w && k ? `${E.format(w, "LLL yyyy")} VS ${E.format(k, "LLL yyyy")}` : ""
          }
        }
      ]
    },
    slug: "eccodarwin-co2flux-monthgrid-v5",
    content: ""
    // optional: parsed MDX markdown content if needed
  },
  {
    metadata: {
      id: "vulcan-total-co2",
      name: "Vulcan Fossil Fuel CO₂ Emissions, Version 4",
      description: "Annual (2010 - 2021), 1 km resolution estimates of carbon dioxide emissions from fossil fuels and cement production over the contiguous United States, version 4.0",
      isHidden: !0,
      taxonomy: [
        {
          name: "Topics",
          values: [
            { id: "Anthropogenic Emissions", name: "Anthropogenic Emissions" }
          ]
        },
        {
          name: "Source",
          values: [
            { id: "NAU", name: "NAU" },
            { id: "NASA", name: "NASA" },
            { id: "NOAA", name: "NOAA" },
            { id: "NSF", name: "NSF" }
          ]
        },
        {
          name: "Gas",
          values: [
            { id: "CO₂", name: "CO₂" }
          ]
        },
        {
          name: "Product Type",
          values: [
            { id: "Model Output", name: "Model Output" }
          ]
        }
      ],
      layers: [
        {
          id: "vulcan-elc-res-co2",
          stacCol: "vulcan-ffco2-elc-res-yeargrid-v4",
          name: "Scope 2 Residential Fossil Fuel CO₂ Emissions",
          type: "raster",
          description: "Estimated total annual CO₂ emissions from fossil fuel combustion (ffCO₂) across all sectors.",
          zoomExtent: [0, 20],
          legend: {
            unit: { label: "tonne CO₂/km²/year" },
            type: "gradient",
            min: "0",
            max: "500",
            stops: [
              "#5e4fa2",
              "#388eba",
              "#75c8a5",
              "#bfe5a0",
              "#f1f9a9",
              "#feeea2",
              "#fdbf6f",
              "#f67b4a",
              "#d8434e",
              "#9e0142"
            ]
          },
          compare: {
            datasetId: "vulcan-ffco2-yeargrid-v4",
            layerId: "vulcan-total-co2",
            mapLabel: ({ dateFns: E, datetime: w, compareDatetime: k }) => E && w && k ? `${E.format(w, "LLL yyyy")} VS ${E.format(k, "LLL yyyy")}` : ""
          },
          info: {
            source: "NASA",
            spatialExtent: "Contiguous United States",
            temporalResolution: "Annual",
            unit: "tonne CO₂/km²/year"
          }
        }
      ]
    },
    slug: "vulcan-ffco2-elc-res-yeargrid-v4",
    content: ""
  },
  {
    metadata: {
      id: "vulcan-ffco2-yeargrid-v4",
      name: "Vulcan Fossil Fuel CO₂ Emissions",
      description: "Annual (2010 - 2021), 1 km resolution estimates of carbon dioxide emissions from fossil fuel combustion over the contiguous United States, version 4.0",
      taxonomy: [
        {
          name: "Topics",
          values: [
            { id: "Anthropogenic Emissions", name: "Anthropogenic Emissions" },
            { id: "Urban", name: "Urban" }
          ]
        },
        {
          name: "Source",
          values: [
            { id: "NAU", name: "NAU" },
            { id: "NASA", name: "NASA" },
            { id: "NOAA", name: "NOAA" },
            { id: "NSF", name: "NSF" }
          ]
        },
        {
          name: "Gas",
          values: [
            { id: "CO₂", name: "CO₂" }
          ]
        },
        {
          name: "Product Type",
          values: [
            { id: "Hybrid Product", name: "Hybrid Product" }
          ]
        }
      ],
      layers: [
        {
          id: "vulcan-total-co2",
          stacCol: "vulcan-ffco2-yeargrid-v4",
          name: "Total Fossil Fuel CO₂ Emissions",
          type: "raster",
          description: "Estimated total annual CO₂ emissions from fossil fuel combustion (ffCO₂) across all sectors.",
          zoomExtent: [0, 20],
          legend: {
            unit: { label: "tonne CO₂/km²/year" },
            type: "gradient",
            min: "0",
            max: "1400",
            stops: [
              "#5e4fa2",
              "#388eba",
              "#75c8a5",
              "#bfe5a0",
              "#f1f9a9",
              "#feeea2",
              "#fdbf6f",
              "#f67b4a",
              "#d8434e",
              "#9e0142"
            ]
          },
          compare: {
            datasetId: "vulcan-ffco2-yeargrid-v4",
            layerId: "vulcan-total-co2",
            mapLabel: ({ dateFns: E, datetime: w, compareDatetime: k }) => E && w && k ? `${E.format(w, "LLL yyyy")} VS ${E.format(k, "LLL yyyy")}` : ""
          },
          info: {
            source: "NASA",
            spatialExtent: "Contiguous United States",
            temporalResolution: "Annual",
            unit: "tonne CO₂/km²/year"
          }
        },
        {
          id: "vulcan-air-co2",
          stacCol: "vulcan-ffco2-yeargrid-v4",
          name: "Airport Fossil Fuel CO₂ Emissions",
          type: "raster",
          description: "Estimated total annual ffCO₂ emissions from taxi, take-off, and landing up to 3000 ft.",
          zoomExtent: [0, 20],
          legend: {
            unit: { label: "tonne CO₂/km²/year" },
            type: "gradient",
            min: "0",
            max: "1400",
            stops: [
              "#5e4fa2",
              "#388eba",
              "#75c8a5",
              "#bfe5a0",
              "#f1f9a9",
              "#feeea2",
              "#fdbf6f",
              "#f67b4a",
              "#d8434e",
              "#9e0142"
            ]
          },
          compare: {
            datasetId: "vulcan-ffco2-yeargrid-v4",
            layerId: "vulcan-air-co2",
            mapLabel: ({ dateFns: E, datetime: w, compareDatetime: k }) => E && w && k ? `${E.format(w, "LLL yyyy")} VS ${E.format(k, "LLL yyyy")}` : ""
          },
          info: {
            source: "NASA",
            spatialExtent: "Contiguous United States",
            temporalResolution: "Annual",
            unit: "tonne CO₂/km²/year"
          }
        },
        {
          id: "vulcan-res-co2",
          stacCol: "vulcan-ffco2-yeargrid-v4",
          name: "Residential Fossil Fuel CO₂ Emissions",
          type: "raster",
          description: "Estimated total annual ffCO₂ emissions from Residential buildings.",
          zoomExtent: [0, 20],
          legend: {
            unit: { label: "tonne CO₂/km²/year" },
            type: "gradient",
            min: "0",
            max: "1400",
            stops: [
              "#5e4fa2",
              "#388eba",
              "#75c8a5",
              "#bfe5a0",
              "#f1f9a9",
              "#feeea2",
              "#fdbf6f",
              "#f67b4a",
              "#d8434e",
              "#9e0142"
            ]
          },
          compare: {
            datasetId: "vulcan-ffco2-elc-res-yeargrid-v4",
            layerId: "vulcan-elc-res-co2",
            mapLabel: ({ dateFns: E, datetime: w, compareDatetime: k }) => E && w && k ? `${E.format(w, "LLL yyyy")} VS ${E.format(k, "LLL yyyy")}` : ""
          },
          info: {
            source: "NASA",
            spatialExtent: "Contiguous United States",
            temporalResolution: "Annual",
            unit: "tonne CO₂/km²/year"
          }
        }
        // Add other layers like vulcan-com-co2, vulcan-ind-co2, etc. if needed
      ]
    },
    slug: "vulcan-ffco2-yeargrid-v4",
    content: ""
  },
  {
    metadata: {
      id: "vulcan-ffco2-elc-res-yeargrid-v4",
      name: "Vulcan Fossil Fuel CO₂ Emissions, Version 4",
      description: "Annual (2010 - 2021), 1 km resolution estimates of carbon dioxide emissions from fossil fuels and cement production over the contiguous United States, version 4.0",
      isHidden: !0,
      taxonomy: [
        {
          name: "Topics",
          values: [
            { id: "Anthropogenic Emissions", name: "Anthropogenic Emissions" }
          ]
        },
        {
          name: "Source",
          values: [
            { id: "NAU", name: "NAU" },
            { id: "NASA", name: "NASA" },
            { id: "NOAA", name: "NOAA" },
            { id: "NSF", name: "NSF" }
          ]
        },
        {
          name: "Gas",
          values: [
            { id: "CO₂", name: "CO₂" }
          ]
        },
        {
          name: "Product Type",
          values: [
            { id: "Model Output", name: "Model Output" }
          ]
        }
      ],
      layers: [
        {
          id: "vulcan-elc-res-co2",
          stacCol: "vulcan-ffco2-elc-res-yeargrid-v4",
          name: "Scope 2 Residential Fossil Fuel CO₂ Emissions",
          type: "raster",
          description: "Estimated total annual CO₂ emissions from fossil fuel combustion (ffCO₂) across all sectors.",
          zoomExtent: [0, 20],
          legend: {
            unit: { label: "tonne CO₂/km²/year" },
            type: "gradient",
            min: "0",
            max: "500",
            stops: [
              "#5e4fa2",
              "#388eba",
              "#75c8a5",
              "#bfe5a0",
              "#f1f9a9",
              "#feeea2",
              "#fdbf6f",
              "#f67b4a",
              "#d8434e",
              "#9e0142"
            ]
          },
          compare: {
            datasetId: "vulcan-ffco2-yeargrid-v4",
            layerId: "vulcan-total-co2",
            mapLabel: ({ dateFns: E, datetime: w, compareDatetime: k }) => E && w && k ? `${E.format(w, "LLL yyyy")} VS ${E.format(k, "LLL yyyy")}` : ""
          },
          info: {
            source: "NASA",
            spatialExtent: "Contiguous United States",
            temporalResolution: "Annual",
            unit: "tonne CO₂/km²/year"
          }
        }
      ]
    },
    slug: "vulcan-ffco2-elc-res-yeargrid-v4",
    content: ""
  }
], transformedDatasets = n$1.map((E) => ({
  id: E.metadata.id,
  data: {
    id: E.metadata.id,
    name: E.metadata.name,
    description: E.metadata.description,
    usage: [],
    media: {},
    taxonomy: E.metadata.taxonomy || [],
    infoDescription: E.metadata.description,
    layers: E.metadata.layers
  }
})), datasetsForVedaProvider = {};
transformedDatasets.forEach((E) => {
  datasetsForVedaProvider[E.id] = E;
});
new QueryClient();
const r$1 = createContext(null);
function t$1(E, w) {
  return { getTheme: function() {
    return w ?? null;
  } };
}
function t(E, ...w) {
  const k = new URL("https://lexical.dev/docs/error"), T = new URLSearchParams();
  T.append("code", E);
  for (const ge of w) T.append("v", ge);
  throw k.search = T.toString(), Error(`Minified Lexical error #${E}; visit ${k.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
const e = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, n$2 = e && "documentMode" in document ? document.documentMode : null, r = e && /Mac|iPod|iPhone|iPad/.test(navigator.platform), i = e && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent), s = !(!e || !("InputEvent" in window) || n$2) && "getTargetRanges" in new window.InputEvent("input"), o = e && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), l$1 = e && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, c = e && /Android/.test(navigator.userAgent), a$1 = e && /^(?=.*Chrome).*/i.test(navigator.userAgent), u$1 = e && c && a$1, f$2 = e && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !a$1;
function d$1(...E) {
  const w = [];
  for (const k of E) if (k && typeof k == "string") for (const [T] of k.matchAll(/\S+/g)) w.push(T);
  return w;
}
const h$1 = 1, g$1 = 3, _ = 9, p$1 = 11, y = 0, m$1 = 1, x = 2, C$1 = 0, S$1 = 1, v = 2, N = 4, b = 8, O = 128, A = 1792 | (112 | (3 | N | b) | O), D = 1, P = 2, F$1 = 3, L$1 = 4, I$4 = 5, z$2 = 6, K$2 = o || l$1 || f$2 ? " " : "​", R$2 = `

`, B$1 = i ? " " : K$2, W$2 = "֑-߿יִ-﷽ﹰ-ﻼ", J$1 = "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿", $$1 = new RegExp("^[^" + J$1 + "]*[" + W$2 + "]"), j$1 = new RegExp("^[^" + W$2 + "]*[" + J$1 + "]"), U$2 = { bold: 1, capitalize: 1024, code: 16, highlight: O, italic: 2, lowercase: 256, strikethrough: N, subscript: 32, superscript: 64, underline: b, uppercase: 512 }, V = { directionless: 1, unmergeable: 2 }, Y$1 = { center: P, end: z$2, justify: L$1, left: D, right: F$1, start: I$4 }, H$1 = { [P]: "center", [z$2]: "end", [L$1]: "justify", [D]: "left", [F$1]: "right", [I$4]: "start" }, q$1 = { normal: 0, segmented: 2, token: 1 }, G$1 = { [C$1]: "normal", [v]: "segmented", [S$1]: "token" }, Q$2 = "$config";
function Z$1(E, w, k, T, ge, Be) {
  let je = E.getFirstChild();
  for (; je !== null; ) {
    const Qe = je.__key;
    je.__parent === w && (xi(je) && Z$1(je, Qe, k, T, ge, Be), k.has(Qe) || Be.delete(Qe), ge.push(Qe)), je = je.getNextSibling();
  }
}
const tt$1 = 100;
let et$1 = !1, nt$1 = 0;
function rt$2(E) {
  nt$1 = E.timeStamp;
}
function it$3(E, w, k) {
  const T = E.nodeName === "BR", ge = w.__lexicalLineBreak;
  return ge && (E === ge || T && E.previousSibling === ge) || T && Ts(E, k) !== void 0;
}
function st$2(E, w, k) {
  const T = xo(co(k));
  let ge = null, Be = null;
  T !== null && T.anchorNode === E && (ge = T.anchorOffset, Be = T.focusOffset);
  const je = E.nodeValue;
  je !== null && zs(w, je, ge, Be, !1);
}
function ot$2(E, w, k) {
  if (_r(E)) {
    const T = E.anchor.getNode();
    if (T.is(k) && E.format !== T.getFormat()) return !1;
  }
  return fs(w) && k.isAttached();
}
function lt$2(E, w, k, T) {
  for (let ge = E; ge && !zo(ge); ge = eo(ge)) {
    const Be = Ts(ge, w);
    if (Be !== void 0) {
      const je = Ss(Be, k);
      if (je) return vi(je) || !To(ge) ? void 0 : [ge, je];
    } else if (ge === T) return [T, Es(k)];
  }
}
function ct$3(E, w, k) {
  et$1 = !0;
  const T = performance.now() - nt$1 > tt$1;
  try {
    _i(E, () => {
      const ge = Pr() || function(dt) {
        return dt.getEditorState().read(() => {
          const fl = Pr();
          return fl !== null ? fl.clone() : null;
        });
      }(E), Be = /* @__PURE__ */ new Map(), je = E.getRootElement(), Qe = E._editorState, Je = E._blockCursorElement;
      let Ze = !1, Xe = "";
      for (let dt = 0; dt < w.length; dt++) {
        const fl = w[dt], Jr = fl.type, Ll = fl.target, $l = lt$2(Ll, E, Qe, je);
        if (!$l) continue;
        const [Il, Wr] = $l;
        if (Jr === "characterData") T && sr(Wr) && fs(Ll) && ot$2(ge, Ll, Wr) && st$2(Ll, Wr, E);
        else if (Jr === "childList") {
          Ze = !0;
          const Bl = fl.addedNodes;
          for (let Rl = 0; Rl < Bl.length; Rl++) {
            const Wl = Bl[Rl], Hl = vs(Wl), jl = Wl.parentNode;
            if (jl != null && Wl !== Je && Hl === null && !it$3(Wl, jl, E)) {
              if (i) {
                const Ul = (To(Wl) ? Wl.innerText : null) || Wl.nodeValue;
                Ul && (Xe += Ul);
              }
              jl.removeChild(Wl);
            }
          }
          const zl = fl.removedNodes, Vl = zl.length;
          if (Vl > 0) {
            let Rl = 0;
            for (let Wl = 0; Wl < Vl; Wl++) {
              const Hl = zl[Wl];
              (it$3(Hl, Ll, E) || Je === Hl) && (Ll.appendChild(Hl), Rl++);
            }
            Vl !== Rl && Be.set(Il, Wr);
          }
        }
      }
      if (Be.size > 0) for (const [dt, fl] of Be) fl.reconcileObservedMutation(dt, E);
      const gt = k.takeRecords();
      if (gt.length > 0) {
        for (let dt = 0; dt < gt.length; dt++) {
          const fl = gt[dt], Jr = fl.addedNodes, Ll = fl.target;
          for (let $l = 0; $l < Jr.length; $l++) {
            const Il = Jr[$l], Wr = Il.parentNode;
            Wr == null || Il.nodeName !== "BR" || it$3(Il, Ll, E) || Wr.removeChild(Il);
          }
        }
        k.takeRecords();
      }
      ge !== null && (Ze && Ms(ge), i && Xs(E) && ge.insertRawText(Xe));
    });
  } finally {
    et$1 = !1;
  }
}
function at$1(E) {
  const w = E._observer;
  w !== null && ct$3(E, w.takeRecords(), w);
}
function ut$1(E) {
  (function(w) {
    nt$1 === 0 && co(w).addEventListener("textInput", rt$2, !0);
  })(E), E._observer = new MutationObserver((w, k) => {
    ct$3(E, w, k);
  });
}
function pt(E) {
  const w = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Set();
  for (let T = typeof E == "function" ? E : E.replace; T.prototype && T.prototype.getType !== void 0; T = Object.getPrototypeOf(T)) {
    const { ownNodeConfig: ge } = Ro(T);
    if (ge && ge.stateConfigs) for (const Be of ge.stateConfigs) {
      let je;
      "stateConfig" in Be ? (je = Be.stateConfig, Be.flat && k.add(je.key)) : je = Be, w.set(je.key, je);
    }
  }
  return { flatKeys: k, sharedConfigMap: w };
}
class yt {
  constructor(w, k, T = void 0, ge = /* @__PURE__ */ new Map(), Be = void 0) {
    this.node = w, this.sharedNodeState = k, this.unknownState = T, this.knownState = ge;
    const { sharedConfigMap: je } = this.sharedNodeState, Qe = Be !== void 0 ? Be : function(Je, Ze, Xe) {
      let gt = Xe.size;
      if (Ze) for (const dt in Ze) {
        const fl = Je.get(dt);
        fl && Xe.has(fl) || gt++;
      }
      return gt;
    }(je, T, ge);
    this.size = Qe;
  }
  getValue(w) {
    const k = this.knownState.get(w);
    if (k !== void 0) return k;
    this.sharedNodeState.sharedConfigMap.set(w.key, w);
    let T = w.defaultValue;
    if (this.unknownState && w.key in this.unknownState) {
      const ge = this.unknownState[w.key];
      ge !== void 0 && (T = w.parse(ge)), this.updateFromKnown(w, T);
    }
    return T;
  }
  getInternalState() {
    return [this.unknownState, this.knownState];
  }
  toJSON() {
    const w = { ...this.unknownState }, k = {};
    for (const [T, ge] of this.knownState) T.isEqual(ge, T.defaultValue) ? delete w[T.key] : w[T.key] = T.unparse(ge);
    for (const T of this.sharedNodeState.flatKeys) T in w && (k[T] = w[T], delete w[T]);
    return Ct(w) && (k.$ = w), k;
  }
  getWritable(w) {
    if (this.node === w) return this;
    const { sharedNodeState: k, unknownState: T } = this, ge = new Map(this.knownState);
    return new yt(w, k, function(Be, je, Qe) {
      let Je;
      if (Qe) for (const [Ze, Xe] of Object.entries(Qe)) {
        const gt = Be.get(Ze);
        gt ? je.has(gt) || je.set(gt, gt.parse(Xe)) : (Je = Je || {}, Je[Ze] = Xe);
      }
      return Je;
    }(k.sharedConfigMap, ge, T), ge, this.size);
  }
  updateFromKnown(w, k) {
    const T = w.key;
    this.sharedNodeState.sharedConfigMap.set(T, w);
    const { knownState: ge, unknownState: Be } = this;
    ge.has(w) || Be && T in Be || (Be && (delete Be[T], this.unknownState = Ct(Be)), this.size++), ge.set(w, k);
  }
  updateFromUnknown(w, k) {
    const T = this.sharedNodeState.sharedConfigMap.get(w);
    T ? this.updateFromKnown(T, T.parse(k)) : (this.unknownState = this.unknownState || {}, w in this.unknownState || this.size++, this.unknownState[w] = k);
  }
  updateFromJSON(w) {
    const { knownState: k } = this;
    for (const T of k.keys()) k.set(T, T.defaultValue);
    if (this.size = k.size, this.unknownState = void 0, w) for (const [T, ge] of Object.entries(w)) this.updateFromUnknown(T, ge);
  }
}
function mt$1(E) {
  const w = E.getWritable(), k = w.__state ? w.__state.getWritable(w) : new yt(w, xt$1(w));
  return w.__state = k, k;
}
function xt$1(E) {
  return E.__state ? E.__state.sharedNodeState : ts(Oo(), E.getType()).sharedNodeState;
}
function Ct(E) {
  if (E) for (const w in E) return E;
}
function vt$1(E, w, k) {
  for (const [T, ge] of w.knownState) {
    if (E.has(T.key)) continue;
    E.add(T.key);
    const Be = k ? k.getValue(T) : T.defaultValue;
    if (Be !== ge && !T.isEqual(Be, ge)) return !0;
  }
  return !1;
}
function Tt$1(E, w, k) {
  const { unknownState: T } = w, ge = k ? k.unknownState : void 0;
  if (T) {
    for (const [Be, je] of Object.entries(T))
      if (!E.has(Be) && (E.add(Be), je !== (ge ? ge[Be] : void 0)))
        return !0;
  }
  return !1;
}
function kt(E, w) {
  const k = E.__state;
  return k && k.node === E ? k.getWritable(w) : k;
}
function Nt$1(E, w) {
  const k = E.__mode, T = E.__format, ge = E.__style, Be = w.__mode, je = w.__format, Qe = w.__style, Je = E.__state, Ze = w.__state;
  return (k === null || k === Be) && (T === null || T === je) && (ge === null || ge === Qe) && (E.__state === null || Je === Ze || function(Xe, gt) {
    if (Xe === gt) return !0;
    if (Xe && gt && Xe.size !== gt.size) return !1;
    const dt = /* @__PURE__ */ new Set();
    return !(Xe && vt$1(dt, Xe, gt) || gt && vt$1(dt, gt, Xe) || Xe && Tt$1(dt, Xe, gt) || gt && Tt$1(dt, gt, Xe));
  }(Je, Ze));
}
function bt(E, w) {
  const k = E.mergeWithSibling(w), T = ni()._normalizedNodes;
  return T.add(E.__key), T.add(w.__key), k;
}
function wt(E) {
  let w, k, T = E;
  if (T.__text !== "" || !T.isSimpleText() || T.isUnmergeable()) {
    for (; (w = T.getPreviousSibling()) !== null && sr(w) && w.isSimpleText() && !w.isUnmergeable(); ) {
      if (w.__text !== "") {
        if (Nt$1(w, T)) {
          T = bt(w, T);
          break;
        }
        break;
      }
      w.remove();
    }
    for (; (k = T.getNextSibling()) !== null && sr(k) && k.isSimpleText() && !k.isUnmergeable(); ) {
      if (k.__text !== "") {
        if (Nt$1(T, k)) {
          T = bt(T, k);
          break;
        }
        break;
      }
      k.remove();
    }
  } else T.remove();
}
function Et$1(E) {
  return Mt(E.anchor), Mt(E.focus), E;
}
function Mt(E) {
  for (; E.type === "element"; ) {
    const w = E.getNode(), k = E.offset;
    let T, ge;
    if (k === w.getChildrenSize() ? (T = w.getChildAtIndex(k - 1), ge = !0) : (T = w.getChildAtIndex(k), ge = !1), sr(T)) {
      E.set(T.__key, ge ? T.getTextContentSize() : 0, "text", !0);
      break;
    }
    if (!xi(T)) break;
    E.set(T.__key, ge ? T.getChildrenSize() : 0, "element", !0);
  }
}
let Ot$1, At, Dt$1, Pt, Ft$1, Lt, It, zt, Kt$1, Rt, Bt = "", Wt = "", Jt = null, $t = "", jt = "", Ut = !1, Vt = !1, Yt = null;
function Ht$1(E, w) {
  const k = It.get(E);
  if (w !== null) {
    const T = fe(E);
    T.parentNode === w && w.removeChild(T);
  }
  if (zt.has(E) || At._keyToDOMMap.delete(E), xi(k)) {
    const T = oe(k, It);
    qt(T, 0, T.length - 1, null);
  }
  k !== void 0 && Ys(Rt, Dt$1, Pt, k, "destroyed");
}
function qt(E, w, k, T) {
  let ge = w;
  for (; ge <= k; ++ge) {
    const Be = E[ge];
    Be !== void 0 && Ht$1(Be, T);
  }
}
function Gt(E, w) {
  E.setProperty("text-align", w);
}
const Xt = "40px";
function Qt(E, w) {
  const k = Ot$1.theme.indent;
  if (typeof k == "string") {
    const ge = E.classList.contains(k);
    w > 0 && !ge ? E.classList.add(k) : w < 1 && ge && E.classList.remove(k);
  }
  const T = getComputedStyle(E).getPropertyValue("--lexical-indent-base-value") || Xt;
  E.style.setProperty("padding-inline-start", w === 0 ? "" : `calc(${w} * ${T})`);
}
function Zt(E, w) {
  const k = E.style;
  w === 0 ? Gt(k, "") : w === D ? Gt(k, "left") : w === P ? Gt(k, "center") : w === F$1 ? Gt(k, "right") : w === L$1 ? Gt(k, "justify") : w === I$4 ? Gt(k, "start") : w === z$2 && Gt(k, "end");
}
function te(E, w) {
  const k = zt.get(E);
  k === void 0 && t(60);
  const T = k.createDOM(Ot$1, At);
  if (function(ge, Be, je) {
    const Qe = je._keyToDOMMap;
    (function(Je, Ze, Xe) {
      const gt = `__lexicalKey_${Ze._key}`;
      Je[gt] = Xe;
    })(Be, je, ge), Qe.set(ge, Be);
  }(E, T, At), sr(k) ? T.setAttribute("data-lexical-text", "true") : vi(k) && T.setAttribute("data-lexical-decorator", "true"), xi(k)) {
    const ge = k.__indent, Be = k.__size;
    if (ge !== 0 && Qt(T, ge), Be !== 0) {
      const Qe = Be - 1;
      (function(Je, Ze, Xe, gt) {
        const dt = Wt;
        Wt = "", ee(Je, Xe, 0, Ze, Xe.getDOMSlot(gt)), ie(Xe, gt), Wt = dt;
      })(oe(k, zt), Qe, k, T);
    }
    const je = k.__format;
    je !== 0 && Zt(T, je), k.isInline() || re(null, k, T), Zs(k) && (Bt += R$2, jt += R$2);
  } else {
    const ge = k.getTextContent();
    if (vi(k)) {
      const Be = k.decorate(At, Ot$1);
      Be !== null && ce(E, Be), T.contentEditable = "false";
    } else sr(k) && (k.isDirectionless() || (Wt += ge));
    Bt += ge, jt += ge;
  }
  return w !== null && w.insertChild(T), Ys(Rt, Dt$1, Pt, k, "created"), T;
}
function ee(E, w, k, T, ge) {
  const Be = Bt;
  Bt = "";
  let je = k;
  for (; je <= T; ++je) {
    te(E[je], ge);
    const Qe = zt.get(E[je]);
    Qe !== null && sr(Qe) && (Jt === null && (Jt = Qe.getFormat()), $t === "" && ($t = Qe.getStyle()));
  }
  Zs(w) && (Bt += R$2), ge.element.__lexicalTextContent = Bt, Bt = Be + Bt;
}
function ne(E, w) {
  if (E) {
    const k = E.__last;
    if (k) {
      const T = w.get(k);
      if (T) return Wn(T) ? "line-break" : vi(T) && T.isInline() ? "decorator" : null;
    }
    return "empty";
  }
  return null;
}
function re(E, w, k) {
  const T = ne(E, It), ge = ne(w, zt);
  T !== ge && w.getDOMSlot(k).setManagedLineBreak(ge);
}
function ie(E, w) {
  const k = w.__lexicalDirTextContent || "", T = w.__lexicalDir || "";
  if (k !== Wt || T !== Yt) {
    const ge = Wt === "", Be = ge ? Yt : function(je) {
      return $$1.test(je) ? "rtl" : j$1.test(je) ? "ltr" : null;
    }(Wt);
    if (Be !== T) {
      const je = w.classList, Qe = Ot$1.theme;
      let Je = T !== null ? Qe[T] : void 0, Ze = Be !== null ? Qe[Be] : void 0;
      if (Je !== void 0) {
        if (typeof Je == "string") {
          const Xe = d$1(Je);
          Je = Qe[T] = Xe;
        }
        je.remove(...Je);
      }
      if (Be === null || ge && Be === "ltr") w.removeAttribute("dir");
      else {
        if (Ze !== void 0) {
          if (typeof Ze == "string") {
            const Xe = d$1(Ze);
            Ze = Qe[Be] = Xe;
          }
          Ze !== void 0 && je.add(...Ze);
        }
        w.dir = Be;
      }
      Vt || (E.getWritable().__dir = Be);
    }
    Yt = Be, w.__lexicalDirTextContent = Wt, w.__lexicalDir = Be;
  }
}
function se(E, w, k) {
  const T = Wt;
  var ge;
  Wt = "", Jt = null, $t = "", function(Be, je, Qe) {
    const Je = Bt, Ze = Be.__size, Xe = je.__size;
    Bt = "";
    const gt = Qe.element;
    if (Ze === 1 && Xe === 1) {
      const dt = Be.__first, fl = je.__first;
      if (dt === fl) le(dt, gt);
      else {
        const Ll = fe(dt), $l = te(fl, null);
        try {
          gt.replaceChild($l, Ll);
        } catch (Il) {
          if (typeof Il == "object" && Il != null) {
            const Wr = `${Il.toString()} Parent: ${gt.tagName}, new child: {tag: ${$l.tagName} key: ${fl}}, old child: {tag: ${Ll.tagName}, key: ${dt}}.`;
            throw new Error(Wr);
          }
          throw Il;
        }
        Ht$1(dt, null);
      }
      const Jr = zt.get(fl);
      sr(Jr) && (Jt === null && (Jt = Jr.getFormat()), $t === "" && ($t = Jr.getStyle()));
    } else {
      const dt = oe(Be, It), fl = oe(je, zt);
      if (dt.length !== Ze && t(227), fl.length !== Xe && t(228), Ze === 0) Xe !== 0 && ee(fl, je, 0, Xe - 1, Qe);
      else if (Xe === 0) {
        if (Ze !== 0) {
          const Jr = Qe.after == null && Qe.before == null && Qe.element.__lexicalLineBreak == null;
          qt(dt, 0, Ze - 1, Jr ? null : gt), Jr && (gt.textContent = "");
        }
      } else (function(Jr, Ll, $l, Il, Wr, Bl) {
        const zl = Il - 1, Vl = Wr - 1;
        let Rl, Wl, Hl = Bl.getFirstChild(), jl = 0, Ul = 0;
        for (; jl <= zl && Ul <= Vl; ) {
          const Gl = Ll[jl], tu = $l[Ul];
          if (Gl === tu) Hl = ae(le(tu, Bl.element)), jl++, Ul++;
          else {
            Rl === void 0 && (Rl = new Set(Ll)), Wl === void 0 && (Wl = new Set($l));
            const ql = Wl.has(Gl), Yl = Rl.has(tu);
            if (ql) if (Yl) {
              const eu = to(At, tu);
              eu === Hl ? Hl = ae(le(tu, Bl.element)) : (Bl.withBefore(Hl).insertChild(eu), le(tu, Bl.element)), jl++, Ul++;
            } else te(tu, Bl.withBefore(Hl)), Ul++;
            else Hl = ae(fe(Gl)), Ht$1(Gl, Bl.element), jl++;
          }
          const nu = zt.get(tu);
          nu !== null && sr(nu) && (Jt === null && (Jt = nu.getFormat()), $t === "" && ($t = nu.getStyle()));
        }
        const Ql = jl > zl, Xl = Ul > Vl;
        if (Ql && !Xl) {
          const Gl = $l[Vl + 1], tu = Gl === void 0 ? null : At.getElementByKey(Gl);
          ee($l, Jr, Ul, Vl, Bl.withBefore(tu));
        } else Xl && !Ql && qt(Ll, jl, zl, Bl.element);
      })(je, dt, fl, Ze, Xe, Qe);
    }
    Zs(je) && (Bt += R$2), gt.__lexicalTextContent = Bt, Bt = Je + Bt;
  }(E, w, w.getDOMSlot(k)), ie(w, k), ge = w, Jt == null || Jt === ge.__textFormat || Vt || ge.setTextFormat(Jt), function(Be) {
    $t === "" || $t === Be.__textStyle || Vt || Be.setTextStyle($t);
  }(w), Wt = T;
}
function oe(E, w) {
  const k = [];
  let T = E.__first;
  for (; T !== null; ) {
    const ge = w.get(T);
    ge === void 0 && t(101), k.push(T), T = ge.__next;
  }
  return k;
}
function le(E, w) {
  const k = It.get(E);
  let T = zt.get(E);
  k !== void 0 && T !== void 0 || t(61);
  const ge = Ut || Lt.has(E) || Ft$1.has(E), Be = to(At, E);
  if (k === T && !ge) {
    if (xi(k)) {
      const je = Be.__lexicalTextContent;
      je !== void 0 && (Bt += je, jt += je);
      const Qe = Be.__lexicalDirTextContent;
      Qe !== void 0 && (Wt += Qe);
    } else {
      const je = k.getTextContent();
      sr(k) && !k.isDirectionless() && (Wt += je), jt += je, Bt += je;
    }
    return Be;
  }
  if (k !== T && ge && Ys(Rt, Dt$1, Pt, T, "updated"), T.updateDOM(k, Be, Ot$1)) {
    const je = te(E, null);
    return w === null && t(62), w.replaceChild(je, Be), Ht$1(E, null), je;
  }
  if (xi(k) && xi(T)) {
    const je = T.__indent;
    je !== k.__indent && Qt(Be, je);
    const Qe = T.__format;
    Qe !== k.__format && Zt(Be, Qe), ge && (se(k, T, Be), ki(T) || T.isInline() || re(k, T, Be)), Zs(T) && (Bt += R$2, jt += R$2);
  } else {
    const je = T.getTextContent();
    if (vi(T)) {
      const Qe = T.decorate(At, Ot$1);
      Qe !== null && ce(E, Qe);
    } else sr(T) && !T.isDirectionless() && (Wt += je);
    Bt += je, jt += je;
  }
  if (!Vt && ki(T) && T.__cachedText !== jt) {
    const je = T.getWritable();
    je.__cachedText = jt, T = je;
  }
  return Be;
}
function ce(E, w) {
  let k = At._pendingDecorators;
  const T = At._decorators;
  if (k === null) {
    if (T[E] === w) return;
    k = Ns(At);
  }
  k[E] = w;
}
function ae(E) {
  let w = E.nextSibling;
  return w !== null && w === At._blockCursorElement && (w = w.nextSibling), w;
}
function ue(E, w, k, T, ge, Be) {
  Bt = "", jt = "", Wt = "", Ut = T === x, Yt = null, At = k, Ot$1 = k._config, Dt$1 = k._nodes, Pt = At._listeners.mutation, Ft$1 = ge, Lt = Be, It = E._nodeMap, zt = w._nodeMap, Vt = w._readOnly, Kt$1 = new Map(k._keyToDOMMap);
  const je = /* @__PURE__ */ new Map();
  return Rt = je, le("root", null), At = void 0, Dt$1 = void 0, Ft$1 = void 0, Lt = void 0, It = void 0, zt = void 0, Ot$1 = void 0, Kt$1 = void 0, Rt = void 0, je;
}
function fe(E) {
  const w = Kt$1.get(E);
  return w === void 0 && t(75, E), w;
}
function de(E) {
  return { type: E };
}
const he = de("SELECTION_CHANGE_COMMAND"), _e = de("CLICK_COMMAND"), pe = de("DELETE_CHARACTER_COMMAND"), ye$1 = de("INSERT_LINE_BREAK_COMMAND"), me = de("INSERT_PARAGRAPH_COMMAND"), xe$1 = de("CONTROLLED_TEXT_INSERTION_COMMAND"), Ce = de("PASTE_COMMAND"), Se = de("REMOVE_TEXT_COMMAND"), ve$1 = de("DELETE_WORD_COMMAND"), Te = de("DELETE_LINE_COMMAND"), ke$1 = de("FORMAT_TEXT_COMMAND"), Ne$1 = de("UNDO_COMMAND"), be$1 = de("REDO_COMMAND"), we$1 = de("KEYDOWN_COMMAND"), Ee$1 = de("KEY_ARROW_RIGHT_COMMAND"), Me$1 = de("MOVE_TO_END"), Oe$1 = de("KEY_ARROW_LEFT_COMMAND"), Ae$1 = de("MOVE_TO_START"), De = de("KEY_ARROW_UP_COMMAND"), Pe = de("KEY_ARROW_DOWN_COMMAND"), Fe$1 = de("KEY_ENTER_COMMAND"), Le = de("KEY_SPACE_COMMAND"), Ie = de("KEY_BACKSPACE_COMMAND"), ze = de("KEY_ESCAPE_COMMAND"), Ke$1 = de("KEY_DELETE_COMMAND"), Re$1 = de("KEY_TAB_COMMAND"), $e = de("DROP_COMMAND"), Ue = de("DRAGSTART_COMMAND"), Ve = de("DRAGOVER_COMMAND"), Ye = de("DRAGEND_COMMAND"), He = de("COPY_COMMAND"), qe = de("CUT_COMMAND"), Ge = de("SELECT_ALL_COMMAND"), en = de("FOCUS_COMMAND"), nn = de("BLUR_COMMAND"), rn$1 = de("KEY_MODIFIER_COMMAND"), sn$1 = Object.freeze({}), on$1 = 30, ln$1 = [["keydown", function(E, w) {
  if (cn = E.timeStamp, an$1 = E.key, !w.isComposing() && !Qs(w, we$1, E) && E.key != null) {
    if (yn && $s(E)) return _i(w, () => {
      wn(w, mn);
    }), yn = !1, void (mn = "");
    if (function(k) {
      return Bs(k, "ArrowRight", { shiftKey: "any" });
    }(E)) Qs(w, Ee$1, E);
    else if (function(k) {
      return Bs(k, "ArrowRight", Ws);
    }(E)) Qs(w, Me$1, E);
    else if (function(k) {
      return Bs(k, "ArrowLeft", { shiftKey: "any" });
    }(E)) Qs(w, Oe$1, E);
    else if (function(k) {
      return Bs(k, "ArrowLeft", Ws);
    }(E)) Qs(w, Ae$1, E);
    else if (function(k) {
      return Bs(k, "ArrowUp", { altKey: "any", shiftKey: "any" });
    }(E)) Qs(w, De, E);
    else if (function(k) {
      return Bs(k, "ArrowDown", { altKey: "any", shiftKey: "any" });
    }(E)) Qs(w, Pe, E);
    else if (function(k) {
      return Bs(k, "Enter", { altKey: "any", ctrlKey: "any", metaKey: "any", shiftKey: !0 });
    }(E)) _n = !0, Qs(w, Fe$1, E);
    else if (function(k) {
      return k.key === " ";
    }(E)) Qs(w, Le, E);
    else if (function(k) {
      return r && Bs(k, "o", { ctrlKey: !0 });
    }(E)) E.preventDefault(), _n = !0, Qs(w, ye$1, !0);
    else if (function(k) {
      return Bs(k, "Enter", { altKey: "any", ctrlKey: "any", metaKey: "any" });
    }(E)) _n = !1, Qs(w, Fe$1, E);
    else if (function(k) {
      return Bs(k, "Backspace", { shiftKey: "any" }) || r && Bs(k, "h", { ctrlKey: !0 });
    }(E)) $s(E) ? Qs(w, Ie, E) : (E.preventDefault(), Qs(w, pe, !0));
    else if (function(k) {
      return k.key === "Escape";
    }(E)) Qs(w, ze, E);
    else if (function(k) {
      return Bs(k, "Delete", {}) || r && Bs(k, "d", { ctrlKey: !0 });
    }(E)) (function(k) {
      return k.key === "Delete";
    })(E) ? Qs(w, Ke$1, E) : (E.preventDefault(), Qs(w, pe, !1));
    else if (function(k) {
      return Bs(k, "Backspace", Js);
    }(E)) E.preventDefault(), Qs(w, ve$1, !0);
    else if (function(k) {
      return Bs(k, "Delete", Js);
    }(E)) E.preventDefault(), Qs(w, ve$1, !1);
    else if (function(k) {
      return r && Bs(k, "Backspace", { metaKey: !0 });
    }(E)) E.preventDefault(), Qs(w, Te, !0);
    else if (function(k) {
      return r && (Bs(k, "Delete", { metaKey: !0 }) || Bs(k, "k", { ctrlKey: !0 }));
    }(E)) E.preventDefault(), Qs(w, Te, !1);
    else if (function(k) {
      return Bs(k, "b", Ws);
    }(E)) E.preventDefault(), Qs(w, ke$1, "bold");
    else if (function(k) {
      return Bs(k, "u", Ws);
    }(E)) E.preventDefault(), Qs(w, ke$1, "underline");
    else if (function(k) {
      return Bs(k, "i", Ws);
    }(E)) E.preventDefault(), Qs(w, ke$1, "italic");
    else if (function(k) {
      return Bs(k, "Tab", { shiftKey: "any" });
    }(E)) Qs(w, Re$1, E);
    else if (function(k) {
      return Bs(k, "z", Ws);
    }(E)) E.preventDefault(), Qs(w, Ne$1, void 0);
    else if (function(k) {
      return r ? Bs(k, "z", { metaKey: !0, shiftKey: !0 }) : Bs(k, "y", { ctrlKey: !0 }) || Bs(k, "z", { ctrlKey: !0, shiftKey: !0 });
    }(E)) E.preventDefault(), Qs(w, be$1, void 0);
    else {
      const k = w._editorState._selection;
      k === null || _r(k) ? js(E) && (E.preventDefault(), Qs(w, Ge, E)) : function(T) {
        return Bs(T, "c", Ws);
      }(E) ? (E.preventDefault(), Qs(w, He, E)) : function(T) {
        return Bs(T, "x", Ws);
      }(E) ? (E.preventDefault(), Qs(w, qe, E)) : js(E) && (E.preventDefault(), Qs(w, Ge, E));
    }
    (function(k) {
      return k.ctrlKey || k.shiftKey || k.altKey || k.metaKey;
    })(E) && Qs(w, rn$1, E);
  }
}], ["pointerdown", function(E, w) {
  const k = E.target, T = E.pointerType;
  ko(k) && T !== "touch" && T !== "pen" && E.button === 0 && _i(w, () => {
    rs(k) || (gn = !0);
  });
}], ["compositionstart", function(E, w) {
  _i(w, () => {
    const k = Pr();
    if (_r(k) && !w.isComposing()) {
      const T = k.anchor, ge = k.anchor.getNode();
      xs(T.key), (E.timeStamp < cn + on$1 || T.type === "element" || !k.isCollapsed() || ge.getFormat() !== k.format || sr(ge) && ge.getStyle() !== k.style) && Qs(w, xe$1, B$1);
    }
  });
}], ["compositionend", function(E, w) {
  i ? pn = !0 : l$1 || !o && !f$2 ? _i(w, () => {
    wn(w, E.data);
  }) : (yn = !0, mn = E.data);
}], ["input", function(E, w) {
  E.stopPropagation(), _i(w, () => {
    if (To(E.target) && rs(E.target)) return;
    const k = Pr(), T = E.data, ge = bn(E);
    if (T != null && _r(k) && Sn(k, ge, T, E.timeStamp, !1)) {
      pn && (wn(w, T), pn = !1);
      const Be = k.anchor.getNode(), je = xo(co(w));
      if (je === null) return;
      const Qe = k.isBackward(), Je = Qe ? k.anchor.offset : k.focus.offset, Ze = Qe ? k.focus.offset : k.anchor.offset;
      s && !k.isCollapsed() && sr(Be) && je.anchorNode !== null && Be.getTextContent().slice(0, Je) + T + Be.getTextContent().slice(Je + Ze) === Ls(je.anchorNode) || Qs(w, xe$1, T);
      const Xe = T.length;
      i && Xe > 1 && E.inputType === "insertCompositionText" && !w.isComposing() && (k.anchor.offset -= Xe), o || l$1 || f$2 || !w.isComposing() || (cn = 0, xs(null));
    } else
      Is(!1, w, T !== null ? T : void 0), pn && (wn(w, T || void 0), pn = !1);
    (function() {
      Zr();
      const Be = ni();
      at$1(Be);
    })();
  }, { event: E }), fn = null;
}], ["click", function(E, w) {
  _i(w, () => {
    const k = Pr(), T = xo(co(w)), ge = Fr();
    if (T) {
      if (_r(k)) {
        const Be = k.anchor, je = Be.getNode();
        if (Be.type === "element" && Be.offset === 0 && k.isCollapsed() && !ki(je) && ws().getChildrenSize() === 1 && je.getTopLevelElementOrThrow().isEmpty() && ge !== null && k.is(ge)) T.removeAllRanges(), k.dirty = !0;
        else if (E.detail === 3 && !k.isCollapsed() && je !== k.focus.getNode()) {
          const Qe = function(Je, Ze) {
            let Xe = Je;
            for (; Xe !== ws() && Xe != null; ) {
              if (Ze(Xe)) return Xe;
              Xe = Xe.getParent();
            }
            return null;
          }(je, (Je) => xi(Je) && !Je.isInline());
          xi(Qe) && Qe.select(0);
        }
      } else if (E.pointerType === "touch" || E.pointerType === "pen") {
        const Be = T.anchorNode;
        (To(Be) || fs(Be)) && Ms(Dr(ge, T, w, E));
      }
    }
    Qs(w, _e, E);
  });
}], ["cut", sn$1], ["copy", sn$1], ["dragstart", sn$1], ["dragover", sn$1], ["dragend", sn$1], ["paste", sn$1], ["focus", sn$1], ["blur", sn$1], ["drop", sn$1]];
s && ln$1.push(["beforeinput", (E, w) => function(k, T) {
  const ge = k.inputType, Be = bn(k);
  ge === "deleteCompositionText" || i && Xs(T) || ge !== "insertCompositionText" && _i(T, () => {
    const je = Pr();
    if (ge === "deleteContentBackward") {
      if (je === null) {
        const fl = Fr();
        if (!_r(fl)) return;
        Ms(fl.clone());
      }
      if (_r(je)) {
        const fl = je.anchor.key === je.focus.key;
        if (Qe = k.timeStamp, an$1 === "MediaLast" && Qe < cn + on$1 && T.isComposing() && fl) {
          if (xs(null), cn = 0, setTimeout(() => {
            _i(T, () => {
              xs(null);
            });
          }, on$1), _r(je)) {
            const Jr = je.anchor.getNode();
            Jr.markDirty(), sr(Jr) || t(142), Nn(je, Jr);
          }
        } else {
          xs(null), k.preventDefault();
          const Jr = je.anchor.getNode(), Ll = Jr.getTextContent(), $l = Jr.canInsertTextAfter(), Il = je.anchor.offset === 0 && je.focus.offset === Ll.length;
          let Wr = u$1 && fl && !Il && $l;
          if (Wr && je.isCollapsed() && (Wr = !vi(Gs(je.anchor, !0))), !Wr) {
            Qs(T, pe, !0);
            const Bl = Pr();
            u$1 && _r(Bl) && Bl.isCollapsed() && (xn = Bl, setTimeout(() => xn = null));
          }
        }
        return;
      }
    }
    var Qe;
    if (!_r(je)) return;
    const Je = k.data;
    fn !== null && Is(!1, T, fn), je.dirty && fn === null || !je.isCollapsed() || ki(je.anchor.getNode()) || Be === null || je.applyDOMRange(Be), fn = null;
    const Ze = je.anchor, Xe = je.focus, gt = Ze.getNode(), dt = Xe.getNode();
    if (ge !== "insertText" && ge !== "insertTranspose") switch (k.preventDefault(), ge) {
      case "insertFromYank":
      case "insertFromDrop":
      case "insertReplacementText":
        Qs(T, xe$1, k);
        break;
      case "insertFromComposition":
        xs(null), Qs(T, xe$1, k);
        break;
      case "insertLineBreak":
        xs(null), Qs(T, ye$1, !1);
        break;
      case "insertParagraph":
        xs(null), _n && !l$1 ? (_n = !1, Qs(T, ye$1, !1)) : Qs(T, me, void 0);
        break;
      case "insertFromPaste":
      case "insertFromPasteAsQuotation":
        Qs(T, Ce, k);
        break;
      case "deleteByComposition":
        (function(fl, Jr) {
          return fl !== Jr || xi(fl) || xi(Jr) || !as(fl) || !as(Jr);
        })(gt, dt) && Qs(T, Se, k);
        break;
      case "deleteByDrag":
      case "deleteByCut":
        Qs(T, Se, k);
        break;
      case "deleteContent":
        Qs(T, pe, !1);
        break;
      case "deleteWordBackward":
        Qs(T, ve$1, !0);
        break;
      case "deleteWordForward":
        Qs(T, ve$1, !1);
        break;
      case "deleteHardLineBackward":
      case "deleteSoftLineBackward":
        Qs(T, Te, !0);
        break;
      case "deleteContentForward":
      case "deleteHardLineForward":
      case "deleteSoftLineForward":
        Qs(T, Te, !1);
        break;
      case "formatStrikeThrough":
        Qs(T, ke$1, "strikethrough");
        break;
      case "formatBold":
        Qs(T, ke$1, "bold");
        break;
      case "formatItalic":
        Qs(T, ke$1, "italic");
        break;
      case "formatUnderline":
        Qs(T, ke$1, "underline");
        break;
      case "historyUndo":
        Qs(T, Ne$1, void 0);
        break;
      case "historyRedo":
        Qs(T, be$1, void 0);
    }
    else {
      if (Je === `
`) k.preventDefault(), Qs(T, ye$1, !1);
      else if (Je === R$2) k.preventDefault(), Qs(T, me, void 0);
      else if (Je == null && k.dataTransfer) {
        const fl = k.dataTransfer.getData("text/plain");
        k.preventDefault(), je.insertRawText(fl);
      } else Je != null && Sn(je, Be, Je, k.timeStamp, !0) ? (k.preventDefault(), Qs(T, xe$1, Je)) : fn = Je;
      un = k.timeStamp;
    }
  });
}(E, w)]);
let cn = 0, an$1 = null, un = 0, fn = null;
const dn$1 = /* @__PURE__ */ new WeakMap();
let hn$1 = !1, gn = !1, _n = !1, pn = !1, yn = !1, mn = "", xn = null, Cn = [0, "", 0, "root", 0];
function Sn(E, w, k, T, ge) {
  const Be = E.anchor, je = E.focus, Qe = Be.getNode(), Je = ni(), Ze = xo(co(Je)), Xe = Ze !== null ? Ze.anchorNode : null, gt = Be.key, dt = Je.getElementByKey(gt), fl = k.length;
  return gt !== je.key || !sr(Qe) || (!ge && (!s || un < T + 50) || Qe.isDirty() && fl < 2 || Ds(k)) && Be.offset !== je.offset && !Qe.isComposing() || us(Qe) || Qe.isDirty() && fl > 1 || (ge || !s) && dt !== null && !Qe.isComposing() && Xe !== hs(dt) || Ze !== null && w !== null && (!w.collapsed || w.startContainer !== Ze.anchorNode || w.startOffset !== Ze.anchorOffset) || Qe.getFormat() !== E.format || Qe.getStyle() !== E.style || function(Jr, Ll) {
    if (Ll.isSegmented()) return !0;
    if (!Jr.isCollapsed()) return !1;
    const $l = Jr.anchor.offset, Il = Ll.getParentOrThrow(), Wr = as(Ll);
    return $l === 0 ? !Ll.canInsertTextBefore() || !Il.canInsertTextBefore() && !Ll.isComposing() || Wr || function(Bl) {
      const zl = Bl.getPreviousSibling();
      return (sr(zl) || xi(zl) && zl.isInline()) && !zl.canInsertTextAfter();
    }(Ll) : $l === Ll.getTextContentSize() && (!Ll.canInsertTextAfter() || !Il.canInsertTextAfter() && !Ll.isComposing() || Wr);
  }(E, Qe);
}
function vn(E, w) {
  return fs(E) && E.nodeValue !== null && w !== 0 && w !== E.nodeValue.length;
}
function Tn(E, w, k) {
  const { anchorNode: T, anchorOffset: ge, focusNode: Be, focusOffset: je } = E;
  hn$1 && (hn$1 = !1, vn(T, ge) && vn(Be, je) && !xn) || _i(w, () => {
    if (!k) return void Ms(null);
    if (!ss(w, T, Be)) return;
    let Qe = Pr();
    if (xn && _r(Qe) && Qe.isCollapsed()) {
      const Je = Qe.anchor, Ze = xn.anchor;
      (Je.key === Ze.key && Je.offset === Ze.offset + 1 || Je.offset === 1 && Ze.getNode().is(Je.getNode().getPreviousSibling())) && (Qe = xn.clone(), Ms(Qe));
    }
    if (xn = null, _r(Qe)) {
      const Je = Qe.anchor, Ze = Je.getNode();
      if (Qe.isCollapsed()) {
        E.type === "Range" && E.anchorNode === E.focusNode && (Qe.dirty = !0);
        const Xe = co(w).event, gt = Xe ? Xe.timeStamp : performance.now(), [dt, fl, Jr, Ll, $l] = Cn, Il = ws(), Wr = w.isComposing() === !1 && Il.getTextContent() === "";
        if (gt < $l + 200 && Je.offset === Jr && Je.key === Ll) kn(Qe, dt, fl);
        else if (Je.type === "text") sr(Ze) || t(141), Nn(Qe, Ze);
        else if (Je.type === "element" && !Wr) {
          xi(Ze) || t(259);
          const Bl = Je.getNode();
          Bl.isEmpty() ? function(zl, Vl) {
            const Rl = Vl.getTextFormat(), Wl = Vl.getTextStyle();
            kn(zl, Rl, Wl);
          }(Qe, Bl) : kn(Qe, 0, "");
        }
      } else {
        const Xe = Je.key, gt = Qe.focus.key, dt = Qe.getNodes(), fl = dt.length, Jr = Qe.isBackward(), Ll = Jr ? je : ge, $l = Jr ? ge : je, Il = Jr ? gt : Xe, Wr = Jr ? Xe : gt;
        let Bl = A, zl = !1;
        for (let Vl = 0; Vl < fl; Vl++) {
          const Rl = dt[Vl], Wl = Rl.getTextContentSize();
          if (sr(Rl) && Wl !== 0 && !(Vl === 0 && Rl.__key === Il && Ll === Wl || Vl === fl - 1 && Rl.__key === Wr && $l === 0) && (zl = !0, Bl &= Rl.getFormat(), Bl === 0)) break;
        }
        Qe.format = zl ? Bl : 0;
      }
    }
    Qs(w, he, void 0);
  });
}
function kn(E, w, k) {
  E.format === w && E.style === k || (E.format = w, E.style = k, E.dirty = !0);
}
function Nn(E, w) {
  kn(E, w.getFormat(), w.getStyle());
}
function bn(E) {
  if (!E.getTargetRanges) return null;
  const w = E.getTargetRanges();
  return w.length === 0 ? null : w[0];
}
function wn(E, w) {
  const k = E._compositionKey;
  if (xs(null), k !== null && w != null) {
    if (w === "") {
      const T = Ss(k), ge = hs(E.getElementByKey(k));
      return void (ge !== null && ge.nodeValue !== null && sr(T) && zs(T, ge.nodeValue, null, null, !0));
    }
    if (w[w.length - 1] === `
`) {
      const T = Pr();
      if (_r(T)) {
        const ge = T.focus;
        return T.anchor.set(ge.key, ge.offset, ge.type), void Qs(E, Fe$1, null);
      }
    }
  }
  Is(!0, E, w);
}
function En(E) {
  let w = E.__lexicalEventHandles;
  return w === void 0 && (w = [], E.__lexicalEventHandles = w), w;
}
const Mn = /* @__PURE__ */ new Map();
function On(E) {
  const w = Co(E.target);
  if (w === null) return;
  const k = ls(w.anchorNode);
  if (k === null) return;
  gn && (gn = !1, _i(k, () => {
    const Je = Fr(), Ze = w.anchorNode;
    (To(Ze) || fs(Ze)) && Ms(Dr(Je, w, k, E));
  }));
  const T = Ps(k), ge = T[T.length - 1], Be = ge._key, je = Mn.get(Be), Qe = je || ge;
  Qe !== k && Tn(w, Qe, !1), Tn(w, k, !0), k !== ge ? Mn.set(Be, k) : je && Mn.delete(Be);
}
function An(E) {
  E._lexicalHandled = !0;
}
function Dn(E) {
  return E._lexicalHandled === !0;
}
function Fn(E) {
  const w = E.ownerDocument, k = dn$1.get(w);
  if (k === void 0) return;
  const T = k - 1;
  T >= 0 || t(164), dn$1.set(w, T), T === 0 && w.removeEventListener("selectionchange", On);
  const ge = cs(E);
  os(ge) ? (function(je) {
    if (je._parentEditor !== null) {
      const Qe = Ps(je), Je = Qe[Qe.length - 1]._key;
      Mn.get(Je) === je && Mn.delete(Je);
    } else Mn.delete(je._key);
  }(ge), E.__lexicalEditor = null) : ge && t(198);
  const Be = En(E);
  for (let je = 0; je < Be.length; je++) Be[je]();
  E.__lexicalEventHandles = [];
}
function Ln(E, w, k) {
  Zr();
  const T = E.__key, ge = E.getParent();
  if (ge === null) return;
  const Be = function(Qe) {
    const Je = Pr();
    if (!_r(Je) || !xi(Qe)) return Je;
    const { anchor: Ze, focus: Xe } = Je, gt = Ze.getNode(), dt = Xe.getNode();
    return oo(gt, Qe) && Ze.set(Qe.__key, 0, "element"), oo(dt, Qe) && Xe.set(Qe.__key, 0, "element"), Je;
  }(E);
  let je = !1;
  if (_r(Be) && w) {
    const Qe = Be.anchor, Je = Be.focus;
    Qe.key === T && (zr(Qe, E, ge, E.getPreviousSibling(), E.getNextSibling()), je = !0), Je.key === T && (zr(Je, E, ge, E.getPreviousSibling(), E.getNextSibling()), je = !0);
  } else yr(Be) && w && E.isSelected() && E.selectPrevious();
  if (_r(Be) && w && !je) {
    const Qe = E.getIndexWithinParent();
    ys(E), Lr(Be, ge, Qe, -1);
  } else ys(E);
  k || fo(ge) || ge.canBeEmpty() || !ge.isEmpty() || Ln(ge, w), w && Be && ki(ge) && ge.isEmpty() && ge.selectEnd();
}
class zn {
  static getType() {
    const { ownNodeType: w } = Ro(this);
    return w === void 0 && t(64, this.name), w;
  }
  static clone(w) {
    t(65, this.name);
  }
  $config() {
    return {};
  }
  config(w, k) {
    const T = k.extends || Object.getPrototypeOf(this.constructor);
    return Object.assign(k, { extends: T, type: w }), { [w]: k };
  }
  afterCloneFrom(w) {
    this.__key === w.__key ? (this.__parent = w.__parent, this.__next = w.__next, this.__prev = w.__prev, this.__state = w.__state) : w.__state && (this.__state = w.__state.getWritable(this));
  }
  constructor(w) {
    this.__type = this.constructor.getType(), this.__parent = null, this.__prev = null, this.__next = null, Object.defineProperty(this, "__state", { configurable: !0, enumerable: !1, value: void 0, writable: !0 }), ps(this, w);
  }
  getType() {
    return this.__type;
  }
  isInline() {
    t(137, this.constructor.name);
  }
  isAttached() {
    let w = this.__key;
    for (; w !== null; ) {
      if (w === "root") return !0;
      const k = Ss(w);
      if (k === null) break;
      w = k.__parent;
    }
    return !1;
  }
  isSelected(w) {
    const k = w || Pr();
    if (k == null) return !1;
    const T = k.getNodes().some((ge) => ge.__key === this.__key);
    if (sr(this)) return T;
    if (_r(k) && k.anchor.type === "element" && k.focus.type === "element") {
      if (k.isCollapsed()) return !1;
      const ge = this.getParent();
      if (vi(this) && this.isInline() && ge) {
        const Be = k.isBackward() ? k.focus : k.anchor;
        if (ge.is(Be.getNode()) && Be.offset === ge.getChildrenSize() && this.is(ge.getLastChild())) return !1;
      }
    }
    return T;
  }
  getKey() {
    return this.__key;
  }
  getIndexWithinParent() {
    const w = this.getParent();
    if (w === null) return -1;
    let k = w.getFirstChild(), T = 0;
    for (; k !== null; ) {
      if (this.is(k)) return T;
      T++, k = k.getNextSibling();
    }
    return -1;
  }
  getParent() {
    const w = this.getLatest().__parent;
    return w === null ? null : Ss(w);
  }
  getParentOrThrow() {
    const w = this.getParent();
    return w === null && t(66, this.__key), w;
  }
  getTopLevelElement() {
    let w = this;
    for (; w !== null; ) {
      const k = w.getParent();
      if (fo(k)) return xi(w) || w === this && vi(w) || t(194), w;
      w = k;
    }
    return null;
  }
  getTopLevelElementOrThrow() {
    const w = this.getTopLevelElement();
    return w === null && t(67, this.__key), w;
  }
  getParents() {
    const w = [];
    let k = this.getParent();
    for (; k !== null; ) w.push(k), k = k.getParent();
    return w;
  }
  getParentKeys() {
    const w = [];
    let k = this.getParent();
    for (; k !== null; ) w.push(k.__key), k = k.getParent();
    return w;
  }
  getPreviousSibling() {
    const w = this.getLatest().__prev;
    return w === null ? null : Ss(w);
  }
  getPreviousSiblings() {
    const w = [], k = this.getParent();
    if (k === null) return w;
    let T = k.getFirstChild();
    for (; T !== null && !T.is(this); ) w.push(T), T = T.getNextSibling();
    return w;
  }
  getNextSibling() {
    const w = this.getLatest().__next;
    return w === null ? null : Ss(w);
  }
  getNextSiblings() {
    const w = [];
    let k = this.getNextSibling();
    for (; k !== null; ) w.push(k), k = k.getNextSibling();
    return w;
  }
  getCommonAncestor(w) {
    const k = xi(this) ? this : this.getParent(), T = xi(w) ? w : w.getParent(), ge = k && T ? Cl(k, T) : null;
    return ge ? ge.commonAncestor : null;
  }
  is(w) {
    return w != null && this.__key === w.__key;
  }
  isBefore(w) {
    const k = Cl(this, w);
    return k !== null && (k.type === "descendant" || (k.type === "branch" ? yl(k) === -1 : (k.type !== "same" && k.type !== "ancestor" && t(279), !1)));
  }
  isParentOf(w) {
    const k = Cl(this, w);
    return k !== null && k.type === "ancestor";
  }
  getNodesBetween(w) {
    const k = this.isBefore(w), T = [], ge = /* @__PURE__ */ new Set();
    let Be = this;
    for (; Be !== null; ) {
      const je = Be.__key;
      if (ge.has(je) || (ge.add(je), T.push(Be)), Be === w) break;
      const Qe = xi(Be) ? k ? Be.getFirstChild() : Be.getLastChild() : null;
      if (Qe !== null) {
        Be = Qe;
        continue;
      }
      const Je = k ? Be.getNextSibling() : Be.getPreviousSibling();
      if (Je !== null) {
        Be = Je;
        continue;
      }
      const Ze = Be.getParentOrThrow();
      if (ge.has(Ze.__key) || T.push(Ze), Ze === w) break;
      let Xe = null, gt = Ze;
      do {
        if (gt === null && t(68), Xe = k ? gt.getNextSibling() : gt.getPreviousSibling(), gt = gt.getParent(), gt === null) break;
        Xe !== null || ge.has(gt.__key) || T.push(gt);
      } while (Xe === null);
      Be = Xe;
    }
    return k || T.reverse(), T;
  }
  isDirty() {
    const w = ni()._dirtyLeaves;
    return w !== null && w.has(this.__key);
  }
  getLatest() {
    const w = Ss(this.__key);
    return w === null && t(113), w;
  }
  getWritable() {
    Zr();
    const w = ei(), k = ni(), T = w._nodeMap, ge = this.__key, Be = this.getLatest(), je = k._cloneNotNeeded, Qe = Pr();
    if (Qe !== null && Qe.setCachedNodes(null), je.has(ge)) return ms(Be), Be;
    const Je = Fo(Be);
    return je.add(ge), ms(Je), T.set(ge, Je), Je;
  }
  getTextContent() {
    return "";
  }
  getTextContentSize() {
    return this.getTextContent().length;
  }
  createDOM(w, k) {
    t(70);
  }
  updateDOM(w, k, T) {
    t(71);
  }
  exportDOM(w) {
    return { element: this.createDOM(w._config, w) };
  }
  exportJSON() {
    const w = this.__state ? this.__state.toJSON() : void 0;
    return { type: this.__type, version: 1, ...w };
  }
  static importJSON(w) {
    t(18, this.name);
  }
  updateFromJSON(w) {
    return function(k, T) {
      const ge = k.getWritable(), Be = T.$;
      let je = Be;
      for (const Qe of xt$1(ge).flatKeys) Qe in T && (je !== void 0 && je !== Be || (je = { ...Be }), je[Qe] = T[Qe]);
      return (ge.__state || je) && mt$1(k).updateFromJSON(je), ge;
    }(this, w);
  }
  static transform() {
    return null;
  }
  remove(w) {
    Ln(this, !0, w);
  }
  replace(w, k) {
    Zr();
    let T = Pr();
    T !== null && (T = T.clone()), _o(this, w);
    const ge = this.getLatest(), Be = this.__key, je = w.__key, Qe = w.getWritable(), Je = this.getParentOrThrow().getWritable(), Ze = Je.__size;
    ys(Qe);
    const Xe = ge.getPreviousSibling(), gt = ge.getNextSibling(), dt = ge.__prev, fl = ge.__next, Jr = ge.__parent;
    if (Ln(ge, !1, !0), Xe === null ? Je.__first = je : Xe.getWritable().__next = je, Qe.__prev = dt, gt === null ? Je.__last = je : gt.getWritable().__prev = je, Qe.__next = fl, Qe.__parent = Jr, Je.__size = Ze, k && (xi(this) && xi(Qe) || t(139), this.getChildren().forEach((Ll) => {
      Qe.append(Ll);
    })), _r(T)) {
      Ms(T);
      const Ll = T.anchor, $l = T.focus;
      Ll.key === Be && hr(Ll, Qe), $l.key === Be && hr($l, Qe);
    }
    return Cs() === Be && xs(je), Qe;
  }
  insertAfter(w, k = !0) {
    Zr(), _o(this, w);
    const T = this.getWritable(), ge = w.getWritable(), Be = ge.getParent(), je = Pr();
    let Qe = !1, Je = !1;
    if (Be !== null) {
      const fl = w.getIndexWithinParent();
      if (ys(ge), _r(je)) {
        const Jr = Be.__key, Ll = je.anchor, $l = je.focus;
        Qe = Ll.type === "element" && Ll.key === Jr && Ll.offset === fl + 1, Je = $l.type === "element" && $l.key === Jr && $l.offset === fl + 1;
      }
    }
    const Ze = this.getNextSibling(), Xe = this.getParentOrThrow().getWritable(), gt = ge.__key, dt = T.__next;
    if (Ze === null ? Xe.__last = gt : Ze.getWritable().__prev = gt, Xe.__size++, T.__next = gt, ge.__next = dt, ge.__prev = T.__key, ge.__parent = T.__parent, k && _r(je)) {
      const fl = this.getIndexWithinParent();
      Lr(je, Xe, fl + 1);
      const Jr = Xe.__key;
      Qe && je.anchor.set(Jr, fl + 2, "element"), Je && je.focus.set(Jr, fl + 2, "element");
    }
    return w;
  }
  insertBefore(w, k = !0) {
    Zr(), _o(this, w);
    const T = this.getWritable(), ge = w.getWritable(), Be = ge.__key;
    ys(ge);
    const je = this.getPreviousSibling(), Qe = this.getParentOrThrow().getWritable(), Je = T.__prev, Ze = this.getIndexWithinParent();
    je === null ? Qe.__first = Be : je.getWritable().__next = Be, Qe.__size++, T.__prev = Be, ge.__prev = Je, ge.__next = T.__key, ge.__parent = T.__parent;
    const Xe = Pr();
    return k && _r(Xe) && Lr(Xe, this.getParentOrThrow(), Ze), w;
  }
  isParentRequired() {
    return !1;
  }
  createParentElementNode() {
    return Bi();
  }
  selectStart() {
    return this.selectPrevious();
  }
  selectEnd() {
    return this.selectNext(0, 0);
  }
  selectPrevious(w, k) {
    Zr();
    const T = this.getPreviousSibling(), ge = this.getParentOrThrow();
    if (T === null) return ge.select(0, 0);
    if (xi(T)) return T.select();
    if (!sr(T)) {
      const Be = T.getIndexWithinParent() + 1;
      return ge.select(Be, Be);
    }
    return T.select(w, k);
  }
  selectNext(w, k) {
    Zr();
    const T = this.getNextSibling(), ge = this.getParentOrThrow();
    if (T === null) return ge.select();
    if (xi(T)) return T.select(0, 0);
    if (!sr(T)) {
      const Be = T.getIndexWithinParent();
      return ge.select(Be, Be);
    }
    return T.select(w, k);
  }
  markDirty() {
    this.getWritable();
  }
  reconcileObservedMutation(w, k) {
    this.markDirty();
  }
}
class Kn extends zn {
  static getType() {
    return "linebreak";
  }
  static clone(w) {
    return new Kn(w.__key);
  }
  constructor(w) {
    super(w);
  }
  getTextContent() {
    return `
`;
  }
  createDOM() {
    return document.createElement("br");
  }
  updateDOM() {
    return !1;
  }
  isInline() {
    return !0;
  }
  static importDOM() {
    return { br: (w) => function(k) {
      const T = k.parentElement;
      if (T !== null && wo(T)) {
        const ge = T.firstChild;
        if (ge === k || ge.nextSibling === k && Jn(ge)) {
          const Be = T.lastChild;
          if (Be === k || Be.previousSibling === k && Jn(Be)) return !0;
        }
      }
      return !1;
    }(w) || function(k) {
      const T = k.parentElement;
      if (T !== null && wo(T)) {
        const ge = T.firstChild;
        if (ge === k || ge.nextSibling === k && Jn(ge)) return !1;
        const Be = T.lastChild;
        if (Be === k || Be.previousSibling === k && Jn(Be)) return !0;
      }
      return !1;
    }(w) ? null : { conversion: Rn, priority: 0 } };
  }
  static importJSON(w) {
    return Bn().updateFromJSON(w);
  }
}
function Rn(E) {
  return { node: Bn() };
}
function Bn() {
  return go(new Kn());
}
function Wn(E) {
  return E instanceof Kn;
}
function Jn(E) {
  return fs(E) && /^( |\t|\r?\n)+$/.test(E.textContent || "");
}
function $n(E, w) {
  return 16 & w ? "code" : w & O ? "mark" : 32 & w ? "sub" : 64 & w ? "sup" : null;
}
function jn(E, w) {
  return 1 & w ? "strong" : 2 & w ? "em" : "span";
}
function Un(E, w, k, T, ge) {
  const Be = T.classList;
  let je = Vs(ge, "base");
  je !== void 0 && Be.add(...je), je = Vs(ge, "underlineStrikethrough");
  let Qe = !1;
  const Je = w & b && w & N;
  je !== void 0 && (k & b && k & N ? (Qe = !0, Je || Be.add(...je)) : Je && Be.remove(...je));
  for (const Ze in U$2) {
    const Xe = U$2[Ze];
    if (je = Vs(ge, Ze), je !== void 0) if (k & Xe) {
      if (Qe && (Ze === "underline" || Ze === "strikethrough")) {
        w & Xe && Be.remove(...je);
        continue;
      }
      w & Xe && (!Je || Ze !== "underline") && Ze !== "strikethrough" || Be.add(...je);
    } else w & Xe && Be.remove(...je);
  }
}
function Vn(E, w, k) {
  const T = w.firstChild, ge = k.isComposing(), Be = E + (ge ? K$2 : "");
  if (T == null) w.textContent = Be;
  else {
    const je = T.nodeValue;
    if (je !== Be) if (ge || i) {
      const [Qe, Je, Ze] = function(Xe, gt) {
        const dt = Xe.length, fl = gt.length;
        let Jr = 0, Ll = 0;
        for (; Jr < dt && Jr < fl && Xe[Jr] === gt[Jr]; ) Jr++;
        for (; Ll + Jr < dt && Ll + Jr < fl && Xe[dt - Ll - 1] === gt[fl - Ll - 1]; ) Ll++;
        return [Jr, dt - Jr - Ll, gt.slice(Jr, fl - Ll)];
      }(je, Be);
      Je !== 0 && T.deleteData(Qe, Je), T.insertData(Qe, Ze);
    } else T.nodeValue = Be;
  }
}
function Yn(E, w, k, T, ge, Be) {
  Vn(ge, E, w);
  const je = Be.theme.text;
  je !== void 0 && Un(0, 0, T, E, je);
}
function Hn(E, w) {
  const k = document.createElement(w);
  return k.appendChild(E), k;
}
class qn extends zn {
  static getType() {
    return "text";
  }
  static clone(w) {
    return new qn(w.__text, w.__key);
  }
  afterCloneFrom(w) {
    super.afterCloneFrom(w), this.__text = w.__text, this.__format = w.__format, this.__style = w.__style, this.__mode = w.__mode, this.__detail = w.__detail;
  }
  constructor(w = "", k) {
    super(k), this.__text = w, this.__format = 0, this.__style = "", this.__mode = 0, this.__detail = 0;
  }
  getFormat() {
    return this.getLatest().__format;
  }
  getDetail() {
    return this.getLatest().__detail;
  }
  getMode() {
    const w = this.getLatest();
    return G$1[w.__mode];
  }
  getStyle() {
    return this.getLatest().__style;
  }
  isToken() {
    return this.getLatest().__mode === 1;
  }
  isComposing() {
    return this.__key === Cs();
  }
  isSegmented() {
    return this.getLatest().__mode === 2;
  }
  isDirectionless() {
    return !!(1 & this.getLatest().__detail);
  }
  isUnmergeable() {
    return !!(2 & this.getLatest().__detail);
  }
  hasFormat(w) {
    const k = U$2[w];
    return !!(this.getFormat() & k);
  }
  isSimpleText() {
    return this.__type === "text" && this.__mode === 0;
  }
  getTextContent() {
    return this.getLatest().__text;
  }
  getFormatFlags(w, k) {
    return gs(this.getLatest().__format, w, k);
  }
  canHaveFormat() {
    return !0;
  }
  isInline() {
    return !0;
  }
  createDOM(w, k) {
    const T = this.__format, ge = $n(0, T), Be = jn(0, T), je = ge === null ? Be : ge, Qe = document.createElement(je);
    let Je = Qe;
    this.hasFormat("code") && Qe.setAttribute("spellcheck", "false"), ge !== null && (Je = document.createElement(Be), Qe.appendChild(Je)), Yn(Je, this, 0, T, this.__text, w);
    const Ze = this.__style;
    return Ze !== "" && (Qe.style.cssText = Ze), Qe;
  }
  updateDOM(w, k, T) {
    const ge = this.__text, Be = w.__format, je = this.__format, Qe = $n(0, Be), Je = $n(0, je), Ze = jn(0, Be), Xe = jn(0, je);
    if ((Qe === null ? Ze : Qe) !== (Je === null ? Xe : Je)) return !0;
    if (Qe === Je && Ze !== Xe) {
      const Ll = k.firstChild;
      Ll == null && t(48);
      const $l = document.createElement(Xe);
      return Yn($l, this, 0, je, ge, T), k.replaceChild($l, Ll), !1;
    }
    let gt = k;
    Je !== null && Qe !== null && (gt = k.firstChild, gt == null && t(49)), Vn(ge, gt, this);
    const dt = T.theme.text;
    dt !== void 0 && Be !== je && Un(0, Be, je, gt, dt);
    const fl = w.__style, Jr = this.__style;
    return fl !== Jr && (k.style.cssText = Jr), !1;
  }
  static importDOM() {
    return { "#text": () => ({ conversion: tr, priority: 0 }), b: () => ({ conversion: Xn, priority: 0 }), code: () => ({ conversion: rr, priority: 0 }), em: () => ({ conversion: rr, priority: 0 }), i: () => ({ conversion: rr, priority: 0 }), mark: () => ({ conversion: rr, priority: 0 }), s: () => ({ conversion: rr, priority: 0 }), span: () => ({ conversion: Gn, priority: 0 }), strong: () => ({ conversion: rr, priority: 0 }), sub: () => ({ conversion: rr, priority: 0 }), sup: () => ({ conversion: rr, priority: 0 }), u: () => ({ conversion: rr, priority: 0 }) };
  }
  static importJSON(w) {
    return ir().updateFromJSON(w);
  }
  updateFromJSON(w) {
    return super.updateFromJSON(w).setTextContent(w.text).setFormat(w.format).setDetail(w.detail).setMode(w.mode).setStyle(w.style);
  }
  exportDOM(w) {
    let { element: k } = super.exportDOM(w);
    return To(k) || t(132), k.style.whiteSpace = "pre-wrap", this.hasFormat("lowercase") ? k.style.textTransform = "lowercase" : this.hasFormat("uppercase") ? k.style.textTransform = "uppercase" : this.hasFormat("capitalize") && (k.style.textTransform = "capitalize"), this.hasFormat("bold") && (k = Hn(k, "b")), this.hasFormat("italic") && (k = Hn(k, "i")), this.hasFormat("strikethrough") && (k = Hn(k, "s")), this.hasFormat("underline") && (k = Hn(k, "u")), { element: k };
  }
  exportJSON() {
    return { detail: this.getDetail(), format: this.getFormat(), mode: this.getMode(), style: this.getStyle(), text: this.getTextContent(), ...super.exportJSON() };
  }
  selectionTransform(w, k) {
  }
  setFormat(w) {
    const k = this.getWritable();
    return k.__format = typeof w == "string" ? U$2[w] : w, k;
  }
  setDetail(w) {
    const k = this.getWritable();
    return k.__detail = typeof w == "string" ? V[w] : w, k;
  }
  setStyle(w) {
    const k = this.getWritable();
    return k.__style = w, k;
  }
  toggleFormat(w) {
    const k = gs(this.getFormat(), w, null);
    return this.setFormat(k);
  }
  toggleDirectionless() {
    const w = this.getWritable();
    return w.__detail ^= 1, w;
  }
  toggleUnmergeable() {
    const w = this.getWritable();
    return w.__detail ^= 2, w;
  }
  setMode(w) {
    const k = q$1[w];
    if (this.__mode === k) return this;
    const T = this.getWritable();
    return T.__mode = k, T;
  }
  setTextContent(w) {
    if (this.__text === w) return this;
    const k = this.getWritable();
    return k.__text = w, k;
  }
  select(w, k) {
    Zr();
    let T = w, ge = k;
    const Be = Pr(), je = this.getTextContent(), Qe = this.__key;
    if (typeof je == "string") {
      const Je = je.length;
      T === void 0 && (T = Je), ge === void 0 && (ge = Je);
    } else T = 0, ge = 0;
    if (!_r(Be)) return Er(Qe, T, Qe, ge, "text", "text");
    {
      const Je = Cs();
      Je !== Be.anchor.key && Je !== Be.focus.key || xs(Qe), Be.setTextNodeRange(this, T, this, ge);
    }
    return Be;
  }
  selectStart() {
    return this.select(0, 0);
  }
  selectEnd() {
    const w = this.getTextContentSize();
    return this.select(w, w);
  }
  spliceText(w, k, T, ge) {
    const Be = this.getWritable(), je = Be.__text, Qe = T.length;
    let Je = w;
    Je < 0 && (Je = Qe + Je, Je < 0 && (Je = 0));
    const Ze = Pr();
    if (ge && _r(Ze)) {
      const gt = w + Qe;
      Ze.setTextNodeRange(Be, gt, Be, gt);
    }
    const Xe = je.slice(0, Je) + T + je.slice(Je + k);
    return Be.__text = Xe, Be;
  }
  canInsertTextBefore() {
    return !0;
  }
  canInsertTextAfter() {
    return !0;
  }
  splitText(...w) {
    Zr();
    const k = this.getLatest(), T = k.getTextContent();
    if (T === "") return [];
    const ge = k.__key, Be = Cs(), je = T.length;
    w.sort((Hl, jl) => Hl - jl), w.push(je);
    const Qe = [], Je = w.length;
    for (let Hl = 0, jl = 0; Hl < je && jl <= Je; jl++) {
      const Ul = w[jl];
      Ul > Hl && (Qe.push(T.slice(Hl, Ul)), Hl = Ul);
    }
    const Ze = Qe.length;
    if (Ze === 1) return [k];
    const Xe = Qe[0], gt = k.getParent();
    let dt;
    const fl = k.getFormat(), Jr = k.getStyle(), Ll = k.__detail;
    let $l = !1, Il = null, Wr = null;
    const Bl = Pr();
    if (_r(Bl)) {
      const [Hl, jl] = Bl.isBackward() ? [Bl.focus, Bl.anchor] : [Bl.anchor, Bl.focus];
      Hl.type === "text" && Hl.key === ge && (Il = Hl), jl.type === "text" && jl.key === ge && (Wr = jl);
    }
    k.isSegmented() ? (dt = ir(Xe), dt.__format = fl, dt.__style = Jr, dt.__detail = Ll, dt.__state = kt(k, dt), $l = !0) : dt = k.setTextContent(Xe);
    const zl = [dt];
    for (let Hl = 1; Hl < Ze; Hl++) {
      const jl = ir(Qe[Hl]);
      jl.__format = fl, jl.__style = Jr, jl.__detail = Ll, jl.__state = kt(k, jl);
      const Ul = jl.__key;
      Be === ge && xs(Ul), zl.push(jl);
    }
    const Vl = Il ? Il.offset : null, Rl = Wr ? Wr.offset : null;
    let Wl = 0;
    for (const Hl of zl) {
      if (!Il && !Wr) break;
      const jl = Wl + Hl.getTextContentSize();
      if (Il !== null && Vl !== null && Vl <= jl && Vl >= Wl && (Il.set(Hl.getKey(), Vl - Wl, "text"), Vl < jl && (Il = null)), Wr !== null && Rl !== null && Rl <= jl && Rl >= Wl) {
        Wr.set(Hl.getKey(), Rl - Wl, "text");
        break;
      }
      Wl = jl;
    }
    if (gt !== null) {
      (function(Ul) {
        const Ql = Ul.getPreviousSibling(), Xl = Ul.getNextSibling();
        Ql !== null && ms(Ql), Xl !== null && ms(Xl);
      })(this);
      const Hl = gt.getWritable(), jl = this.getIndexWithinParent();
      $l ? (Hl.splice(jl, 0, zl), this.remove()) : Hl.splice(jl, 1, zl), _r(Bl) && Lr(Bl, gt, jl, Ze - 1);
    }
    return zl;
  }
  mergeWithSibling(w) {
    const k = w === this.getPreviousSibling();
    k || w === this.getNextSibling() || t(50);
    const T = this.__key, ge = w.__key, Be = this.__text, je = Be.length;
    Cs() === ge && xs(T);
    const Qe = Pr();
    if (_r(Qe)) {
      const gt = Qe.anchor, dt = Qe.focus;
      gt !== null && gt.key === ge && Kr(gt, k, T, w, je), dt !== null && dt.key === ge && Kr(dt, k, T, w, je);
    }
    const Je = w.__text, Ze = k ? Je + Be : Be + Je;
    this.setTextContent(Ze);
    const Xe = this.getWritable();
    return w.remove(), Xe;
  }
  isTextEntity() {
    return !1;
  }
}
function Gn(E) {
  return { forChild: or(E.style), node: null };
}
function Xn(E) {
  const w = E, k = w.style.fontWeight === "normal";
  return { forChild: or(w.style, k ? void 0 : "bold"), node: null };
}
const Qn = /* @__PURE__ */ new WeakMap();
function Zn(E) {
  if (!To(E)) return !1;
  if (E.nodeName === "PRE") return !0;
  const w = E.style.whiteSpace;
  return typeof w == "string" && w.startsWith("pre");
}
function tr(E) {
  const w = E;
  E.parentElement === null && t(129);
  let k = w.textContent || "";
  if (function(T) {
    let ge, Be = T.parentNode;
    const je = [T];
    for (; Be !== null && (ge = Qn.get(Be)) === void 0 && !Zn(Be); ) je.push(Be), Be = Be.parentNode;
    const Qe = ge === void 0 ? Be : ge;
    for (let Je = 0; Je < je.length; Je++) Qn.set(je[Je], Qe);
    return Qe;
  }(w) !== null) {
    const T = k.split(/(\r?\n|\t)/), ge = [], Be = T.length;
    for (let je = 0; je < Be; je++) {
      const Qe = T[je];
      Qe === `
` || Qe === `\r
` ? ge.push(Bn()) : Qe === "	" ? ge.push(cr()) : Qe !== "" && ge.push(ir(Qe));
    }
    return { node: ge };
  }
  if (k = k.replace(/\r/g, "").replace(/[ \t\n]+/g, " "), k === "") return { node: null };
  if (k[0] === " ") {
    let T = w, ge = !0;
    for (; T !== null && (T = er(T, !1)) !== null; ) {
      const Be = T.textContent || "";
      if (Be.length > 0) {
        /[ \t\n]$/.test(Be) && (k = k.slice(1)), ge = !1;
        break;
      }
    }
    ge && (k = k.slice(1));
  }
  if (k[k.length - 1] === " ") {
    let T = w, ge = !0;
    for (; T !== null && (T = er(T, !0)) !== null; )
      if ((T.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0) {
        ge = !1;
        break;
      }
    ge && (k = k.slice(0, k.length - 1));
  }
  return k === "" ? { node: null } : { node: ir(k) };
}
function er(E, w) {
  let k = E;
  for (; ; ) {
    let T;
    for (; (T = w ? k.nextSibling : k.previousSibling) === null; ) {
      const Be = k.parentElement;
      if (Be === null) return null;
      k = Be;
    }
    if (k = T, To(k)) {
      const Be = k.style.display;
      if (Be === "" && !bo(k) || Be !== "" && !Be.startsWith("inline")) return null;
    }
    let ge = k;
    for (; (ge = w ? k.firstChild : k.lastChild) !== null; ) k = ge;
    if (fs(k)) return k;
    if (k.nodeName === "BR") return null;
  }
}
const nr = { code: "code", em: "italic", i: "italic", mark: "highlight", s: "strikethrough", strong: "bold", sub: "subscript", sup: "superscript", u: "underline" };
function rr(E) {
  const w = nr[E.nodeName.toLowerCase()];
  return w === void 0 ? { node: null } : { forChild: or(E.style, w), node: null };
}
function ir(E = "") {
  return go(new qn(E));
}
function sr(E) {
  return E instanceof qn;
}
function or(E, w) {
  const k = E.fontWeight, T = E.textDecoration.split(" "), ge = k === "700" || k === "bold", Be = T.includes("line-through"), je = E.fontStyle === "italic", Qe = T.includes("underline"), Je = E.verticalAlign;
  return (Ze) => (sr(Ze) && (ge && !Ze.hasFormat("bold") && Ze.toggleFormat("bold"), Be && !Ze.hasFormat("strikethrough") && Ze.toggleFormat("strikethrough"), je && !Ze.hasFormat("italic") && Ze.toggleFormat("italic"), Qe && !Ze.hasFormat("underline") && Ze.toggleFormat("underline"), Je !== "sub" || Ze.hasFormat("subscript") || Ze.toggleFormat("subscript"), Je !== "super" || Ze.hasFormat("superscript") || Ze.toggleFormat("superscript"), w && !Ze.hasFormat(w) && Ze.toggleFormat(w)), Ze);
}
class lr extends qn {
  static getType() {
    return "tab";
  }
  static clone(w) {
    return new lr(w.__key);
  }
  constructor(w) {
    super("	", w), this.__detail = 2;
  }
  static importDOM() {
    return null;
  }
  createDOM(w) {
    const k = super.createDOM(w), T = Vs(w.theme, "tab");
    return T !== void 0 && k.classList.add(...T), k;
  }
  static importJSON(w) {
    return cr().updateFromJSON(w);
  }
  setTextContent(w) {
    return w !== "	" && w !== "" && t(126), super.setTextContent("	");
  }
  spliceText(w, k, T, ge) {
    return T === "" && k === 0 || T === "	" && k === 1 || t(286), this;
  }
  setDetail(w) {
    return w !== 2 && t(127), this;
  }
  setMode(w) {
    return w !== "normal" && t(128), this;
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function cr() {
  return go(new lr());
}
function ar(E) {
  return E instanceof lr;
}
class ur {
  constructor(w, k, T) {
    this._selection = null, this.key = w, this.offset = k, this.type = T;
  }
  is(w) {
    return this.key === w.key && this.offset === w.offset && this.type === w.type;
  }
  isBefore(w) {
    return this.key === w.key ? this.offset < w.offset : pl(Ol(Sl(this, "next")), Ol(Sl(w, "next"))) < 0;
  }
  getNode() {
    const w = Ss(this.key);
    return w === null && t(20), w;
  }
  set(w, k, T, ge) {
    const Be = this._selection, je = this.key;
    ge && this.key === w && this.offset === k && this.type === T || (this.key = w, this.offset = k, this.type = T, Qr() || (Cs() === je && xs(w), Be !== null && (Be.setCachedNodes(null), Be.dirty = !0)));
  }
}
function fr(E, w, k) {
  return new ur(E, w, k);
}
function dr(E, w) {
  let k = w.__key, T = E.offset, ge = "element";
  if (sr(w)) {
    ge = "text";
    const Be = w.getTextContentSize();
    T > Be && (T = Be);
  } else if (!xi(w)) {
    const Be = w.getNextSibling();
    if (sr(Be)) k = Be.__key, T = 0, ge = "text";
    else {
      const je = w.getParent();
      je && (k = je.__key, T = w.getIndexWithinParent() + 1);
    }
  }
  E.set(k, T, ge);
}
function hr(E, w) {
  if (xi(w)) {
    const k = w.getLastDescendant();
    xi(k) || sr(k) ? dr(E, k) : dr(E, w);
  } else dr(E, w);
}
class gr {
  constructor(w) {
    this._cachedNodes = null, this._nodes = w, this.dirty = !1;
  }
  getCachedNodes() {
    return this._cachedNodes;
  }
  setCachedNodes(w) {
    this._cachedNodes = w;
  }
  is(w) {
    if (!yr(w)) return !1;
    const k = this._nodes, T = w._nodes;
    return k.size === T.size && Array.from(k).every((ge) => T.has(ge));
  }
  isCollapsed() {
    return !1;
  }
  isBackward() {
    return !1;
  }
  getStartEndPoints() {
    return null;
  }
  add(w) {
    this.dirty = !0, this._nodes.add(w), this._cachedNodes = null;
  }
  delete(w) {
    this.dirty = !0, this._nodes.delete(w), this._cachedNodes = null;
  }
  clear() {
    this.dirty = !0, this._nodes.clear(), this._cachedNodes = null;
  }
  has(w) {
    return this._nodes.has(w);
  }
  clone() {
    return new gr(new Set(this._nodes));
  }
  extract() {
    return this.getNodes();
  }
  insertRawText(w) {
  }
  insertText() {
  }
  insertNodes(w) {
    const k = this.getNodes(), T = k.length, ge = k[T - 1];
    let Be;
    if (sr(ge)) Be = ge.select();
    else {
      const je = ge.getIndexWithinParent() + 1;
      Be = ge.getParentOrThrow().select(je, je);
    }
    Be.insertNodes(w);
    for (let je = 0; je < T; je++) k[je].remove();
  }
  getNodes() {
    const w = this._cachedNodes;
    if (w !== null) return w;
    const k = this._nodes, T = [];
    for (const ge of k) {
      const Be = Ss(ge);
      Be !== null && T.push(Be);
    }
    return Qr() || (this._cachedNodes = T), T;
  }
  getTextContent() {
    const w = this.getNodes();
    let k = "";
    for (let T = 0; T < w.length; T++) k += w[T].getTextContent();
    return k;
  }
  deleteNodes() {
    const w = this.getNodes();
    if ((Pr() || Fr()) === this && w[0]) {
      const k = nl(w[0], "next");
      Tl(gl(k, k));
    }
    for (const k of w) k.remove();
  }
}
function _r(E) {
  return E instanceof pr;
}
class pr {
  constructor(w, k, T, ge) {
    this.anchor = w, this.focus = k, w._selection = this, k._selection = this, this._cachedNodes = null, this.format = T, this.style = ge, this.dirty = !1;
  }
  getCachedNodes() {
    return this._cachedNodes;
  }
  setCachedNodes(w) {
    this._cachedNodes = w;
  }
  is(w) {
    return !!_r(w) && this.anchor.is(w.anchor) && this.focus.is(w.focus) && this.format === w.format && this.style === w.style;
  }
  isCollapsed() {
    return this.anchor.is(this.focus);
  }
  getNodes() {
    const w = this._cachedNodes;
    if (w !== null) return w;
    const k = function(T) {
      const ge = [], [Be, je] = T.getTextSlices();
      Be && ge.push(Be.caret.origin);
      const Qe = /* @__PURE__ */ new Set(), Je = /* @__PURE__ */ new Set();
      for (const Ze of T) if (Qo(Ze)) {
        const { origin: Xe } = Ze;
        ge.length === 0 ? Qe.add(Xe) : (Je.add(Xe), ge.push(Xe));
      } else {
        const { origin: Xe } = Ze;
        xi(Xe) && Je.has(Xe) || ge.push(Xe);
      }
      if (je && ge.push(je.caret.origin), Xo(T.focus) && xi(T.focus.origin) && T.focus.getNodeAtCaret() === null) for (let Ze = ol(T.focus.origin, "previous"); Qo(Ze) && Qe.has(Ze.origin) && !Ze.origin.isEmpty() && Ze.origin.is(ge[ge.length - 1]); Ze = cl(Ze)) Qe.delete(Ze.origin), ge.pop();
      for (; ge.length > 1; ) {
        const Ze = ge[ge.length - 1];
        if (!xi(Ze) || Je.has(Ze) || Ze.isEmpty() || Qe.has(Ze)) break;
        ge.pop();
      }
      if (ge.length === 0 && T.isCollapsed()) {
        const Ze = Ol(T.anchor), Xe = Ol(T.anchor.getFlipped()), gt = (fl) => qo(fl) ? fl.origin : fl.getNodeAtCaret(), dt = gt(Ze) || gt(Xe) || (T.anchor.getNodeAtCaret() ? Ze.origin : Xe.origin);
        ge.push(dt);
      }
      return ge;
    }(Pl(Nl(this), "next"));
    return Qr() || (this._cachedNodes = k), k;
  }
  setTextNodeRange(w, k, T, ge) {
    this.anchor.set(w.__key, k, "text"), this.focus.set(T.__key, ge, "text");
  }
  getTextContent() {
    const w = this.getNodes();
    if (w.length === 0) return "";
    const k = w[0], T = w[w.length - 1], ge = this.anchor, Be = this.focus, je = ge.isBefore(Be), [Qe, Je] = xr(this);
    let Ze = "", Xe = !0;
    for (let gt = 0; gt < w.length; gt++) {
      const dt = w[gt];
      if (xi(dt) && !dt.isInline()) Xe || (Ze += `
`), Xe = !dt.isEmpty();
      else if (Xe = !1, sr(dt)) {
        let fl = dt.getTextContent();
        dt === k ? dt === T ? ge.type === "element" && Be.type === "element" && Be.offset !== ge.offset || (fl = Qe < Je ? fl.slice(Qe, Je) : fl.slice(Je, Qe)) : fl = je ? fl.slice(Qe) : fl.slice(Je) : dt === T && (fl = je ? fl.slice(0, Je) : fl.slice(0, Qe)), Ze += fl;
      } else !vi(dt) && !Wn(dt) || dt === T && this.isCollapsed() || (Ze += dt.getTextContent());
    }
    return Ze;
  }
  applyDOMRange(w) {
    const k = ni(), T = k.getEditorState()._selection, ge = br(w.startContainer, w.startOffset, w.endContainer, w.endOffset, k, T);
    if (ge === null) return;
    const [Be, je] = ge;
    this.anchor.set(Be.key, Be.offset, Be.type, !0), this.focus.set(je.key, je.offset, je.type, !0), Et$1(this);
  }
  clone() {
    const w = this.anchor, k = this.focus;
    return new pr(fr(w.key, w.offset, w.type), fr(k.key, k.offset, k.type), this.format, this.style);
  }
  toggleFormat(w) {
    this.format = gs(this.format, w, null), this.dirty = !0;
  }
  setFormat(w) {
    this.format = w, this.dirty = !0;
  }
  setStyle(w) {
    this.style = w, this.dirty = !0;
  }
  hasFormat(w) {
    const k = U$2[w];
    return !!(this.format & k);
  }
  insertRawText(w) {
    const k = w.split(/(\r?\n|\t)/), T = [], ge = k.length;
    for (let Be = 0; Be < ge; Be++) {
      const je = k[Be];
      je === `
` || je === `\r
` ? T.push(Bn()) : je === "	" ? T.push(cr()) : T.push(ir(je));
    }
    this.insertNodes(T);
  }
  insertText(w) {
    const k = this.anchor, T = this.focus, ge = this.format, Be = this.style;
    let je = k, Qe = T;
    !this.isCollapsed() && T.isBefore(k) && (je = T, Qe = k), je.type === "element" && function($l, Il, Wr, Bl) {
      const zl = $l.getNode(), Vl = zl.getChildAtIndex($l.offset), Rl = ir(), Wl = ki(zl) ? Bi().append(Rl) : Rl;
      Rl.setFormat(Wr), Rl.setStyle(Bl), Vl === null ? zl.append(Wl) : Vl.insertBefore(Wl), $l.is(Il) && Il.set(Rl.__key, 0, "text"), $l.set(Rl.__key, 0, "text");
    }(je, Qe, ge, Be), Qe.type === "element" && vl(Qe, Ol(Sl(Qe, "next")));
    const Je = je.offset;
    let Ze = Qe.offset;
    const Xe = this.getNodes(), gt = Xe.length;
    let dt = Xe[0];
    sr(dt) || t(26);
    const fl = dt.getTextContent().length, Jr = dt.getParentOrThrow();
    let Ll = Xe[gt - 1];
    if (gt === 1 && Qe.type === "element" && (Ze = fl, Qe.set(je.key, Ze, "text")), this.isCollapsed() && Je === fl && (us(dt) || !dt.canInsertTextAfter() || !Jr.canInsertTextAfter() && dt.getNextSibling() === null)) {
      let $l = dt.getNextSibling();
      if (sr($l) && $l.canInsertTextBefore() && !us($l) || ($l = ir(), $l.setFormat(ge), $l.setStyle(Be), Jr.canInsertTextAfter() ? dt.insertAfter($l) : Jr.insertAfter($l)), $l.select(0, 0), dt = $l, w !== "") return void this.insertText(w);
    } else if (this.isCollapsed() && Je === 0 && (us(dt) || !dt.canInsertTextBefore() || !Jr.canInsertTextBefore() && dt.getPreviousSibling() === null)) {
      let $l = dt.getPreviousSibling();
      if (sr($l) && !us($l) || ($l = ir(), $l.setFormat(ge), Jr.canInsertTextBefore() ? dt.insertBefore($l) : Jr.insertBefore($l)), $l.select(), dt = $l, w !== "") return void this.insertText(w);
    } else if (dt.isSegmented() && Je !== fl) {
      const $l = ir(dt.getTextContent());
      $l.setFormat(ge), dt.replace($l), dt = $l;
    } else if (!this.isCollapsed() && w !== "") {
      const $l = Ll.getParent();
      if (!Jr.canInsertTextBefore() || !Jr.canInsertTextAfter() || xi($l) && (!$l.canInsertTextBefore() || !$l.canInsertTextAfter())) return this.insertText(""), Nr(this.anchor, this.focus, null), void this.insertText(w);
    }
    if (gt === 1) {
      if (as(dt)) {
        const Bl = ir(w);
        return Bl.select(), void dt.replace(Bl);
      }
      const $l = dt.getFormat(), Il = dt.getStyle();
      if (Je !== Ze || $l === ge && Il === Be) {
        if (ar(dt)) {
          const Bl = ir(w);
          return Bl.setFormat(ge), Bl.setStyle(Be), Bl.select(), void dt.replace(Bl);
        }
      } else {
        if (dt.getTextContent() !== "") {
          const Bl = ir(w);
          if (Bl.setFormat(ge), Bl.setStyle(Be), Bl.select(), Je === 0) dt.insertBefore(Bl, !1);
          else {
            const [zl] = dt.splitText(Je);
            zl.insertAfter(Bl, !1);
          }
          return void (Bl.isComposing() && this.anchor.type === "text" && (this.anchor.offset -= w.length));
        }
        dt.setFormat(ge), dt.setStyle(Be);
      }
      const Wr = Ze - Je;
      dt = dt.spliceText(Je, Wr, w, !0), dt.getTextContent() === "" ? dt.remove() : this.anchor.type === "text" && (dt.isComposing() ? this.anchor.offset -= w.length : (this.format = $l, this.style = Il));
    } else {
      const $l = /* @__PURE__ */ new Set([...dt.getParentKeys(), ...Ll.getParentKeys()]), Il = xi(dt) ? dt : dt.getParentOrThrow();
      let Wr = xi(Ll) ? Ll : Ll.getParentOrThrow(), Bl = Ll;
      if (!Il.is(Wr) && Wr.isInline()) do
        Bl = Wr, Wr = Wr.getParentOrThrow();
      while (Wr.isInline());
      if (Qe.type === "text" && (Ze !== 0 || Ll.getTextContent() === "") || Qe.type === "element" && Ll.getIndexWithinParent() < Ze) if (sr(Ll) && !as(Ll) && Ze !== Ll.getTextContentSize()) {
        if (Ll.isSegmented()) {
          const Hl = ir(Ll.getTextContent());
          Ll.replace(Hl), Ll = Hl;
        }
        ki(Qe.getNode()) || Qe.type !== "text" || (Ll = Ll.spliceText(0, Ze, "")), $l.add(Ll.__key);
      } else {
        const Hl = Ll.getParentOrThrow();
        Hl.canBeEmpty() || Hl.getChildrenSize() !== 1 ? Ll.remove() : Hl.remove();
      }
      else $l.add(Ll.__key);
      const zl = Wr.getChildren(), Vl = new Set(Xe), Rl = Il.is(Wr), Wl = Il.isInline() && dt.getNextSibling() === null ? Il : dt;
      for (let Hl = zl.length - 1; Hl >= 0; Hl--) {
        const jl = zl[Hl];
        if (jl.is(dt) || xi(jl) && jl.isParentOf(dt)) break;
        jl.isAttached() && (!Vl.has(jl) || jl.is(Bl) ? Rl || Wl.insertAfter(jl, !1) : jl.remove());
      }
      if (!Rl) {
        let Hl = Wr, jl = null;
        for (; Hl !== null; ) {
          const Ul = Hl.getChildren(), Ql = Ul.length;
          (Ql === 0 || Ul[Ql - 1].is(jl)) && ($l.delete(Hl.__key), jl = Hl), Hl = Hl.getParent();
        }
      }
      if (as(dt)) if (Je === fl) dt.select();
      else {
        const Hl = ir(w);
        Hl.select(), dt.replace(Hl);
      }
      else dt = dt.spliceText(Je, fl - Je, w, !0), dt.getTextContent() === "" ? dt.remove() : dt.isComposing() && this.anchor.type === "text" && (this.anchor.offset -= w.length);
      for (let Hl = 1; Hl < gt; Hl++) {
        const jl = Xe[Hl], Ul = jl.__key;
        $l.has(Ul) || jl.remove();
      }
    }
  }
  removeText() {
    const w = Pr() === this;
    kl(this, Ml(Nl(this))), w && Pr() !== this && Ms(this);
  }
  formatText(w, k = null) {
    if (this.isCollapsed()) return this.toggleFormat(w), void xs(null);
    const T = this.getNodes(), ge = [];
    for (const zl of T) sr(zl) && ge.push(zl);
    const Be = (zl) => {
      T.forEach((Vl) => {
        if (xi(Vl)) {
          const Rl = Vl.getFormatFlags(w, zl);
          Vl.setTextFormat(Rl);
        }
      });
    }, je = ge.length;
    if (je === 0) return this.toggleFormat(w), xs(null), void Be(k);
    const Qe = this.anchor, Je = this.focus, Ze = this.isBackward(), Xe = Ze ? Je : Qe, gt = Ze ? Qe : Je;
    let dt = 0, fl = ge[0], Jr = Xe.type === "element" ? 0 : Xe.offset;
    if (Xe.type === "text" && Jr === fl.getTextContentSize() && (dt = 1, fl = ge[1], Jr = 0), fl == null) return;
    const Ll = fl.getFormatFlags(w, k);
    Be(Ll);
    const $l = je - 1;
    let Il = ge[$l];
    const Wr = gt.type === "text" ? gt.offset : Il.getTextContentSize();
    if (fl.is(Il)) {
      if (Jr === Wr) return;
      if (us(fl) || Jr === 0 && Wr === fl.getTextContentSize()) fl.setFormat(Ll);
      else {
        const zl = fl.splitText(Jr, Wr), Vl = Jr === 0 ? zl[0] : zl[1];
        Vl.setFormat(Ll), Xe.type === "text" && Xe.set(Vl.__key, 0, "text"), gt.type === "text" && gt.set(Vl.__key, Wr - Jr, "text");
      }
      return void (this.format = Ll);
    }
    Jr === 0 || us(fl) || ([, fl] = fl.splitText(Jr), Jr = 0), fl.setFormat(Ll);
    const Bl = Il.getFormatFlags(w, Ll);
    Wr > 0 && (Wr === Il.getTextContentSize() || us(Il) || ([Il] = Il.splitText(Wr)), Il.setFormat(Bl));
    for (let zl = dt + 1; zl < $l; zl++) {
      const Vl = ge[zl], Rl = Vl.getFormatFlags(w, Bl);
      Vl.setFormat(Rl);
    }
    Xe.type === "text" && Xe.set(fl.__key, Jr, "text"), gt.type === "text" && gt.set(Il.__key, Wr, "text"), this.format = Ll | Bl;
  }
  insertNodes(w) {
    if (w.length === 0) return;
    if (this.isCollapsed() || this.removeText(), this.anchor.key === "root") {
      this.insertParagraph();
      const Jr = Pr();
      return _r(Jr) || t(134), Jr.insertNodes(w);
    }
    const k = (this.isBackward() ? this.focus : this.anchor).getNode(), T = Mo(k, Eo), ge = w[w.length - 1];
    if (xi(T) && "__language" in T) {
      if ("__language" in w[0]) this.insertText(w[0].getTextContent());
      else {
        const Jr = $r(this);
        T.splice(Jr, 0, w), ge.selectEnd();
      }
      return;
    }
    if (!w.some((Jr) => (xi(Jr) || vi(Jr)) && !Jr.isInline())) {
      xi(T) || t(211, k.constructor.name, k.getType());
      const Jr = $r(this);
      return T.splice(Jr, 0, w), void ge.selectEnd();
    }
    const Be = function(Jr) {
      const Ll = Bi();
      let $l = null;
      for (let Il = 0; Il < Jr.length; Il++) {
        const Wr = Jr[Il], Bl = Wn(Wr);
        if (Bl || vi(Wr) && Wr.isInline() || xi(Wr) && Wr.isInline() || sr(Wr) || Wr.isParentRequired()) {
          if ($l === null && ($l = Wr.createParentElementNode(), Ll.append($l), Bl)) continue;
          $l !== null && $l.append(Wr);
        } else Ll.append(Wr), $l = null;
      }
      return Ll;
    }(w), je = Be.getLastDescendant(), Qe = Be.getChildren(), Je = !xi(T) || !T.isEmpty() ? this.insertParagraph() : null, Ze = Qe[Qe.length - 1];
    let Xe = Qe[0];
    var gt;
    xi(gt = Xe) && Eo(gt) && !gt.isEmpty() && xi(T) && (!T.isEmpty() || T.canMergeWhenEmpty()) && (xi(T) || t(211, k.constructor.name, k.getType()), T.append(...Xe.getChildren()), Xe = Qe[1]), Xe && (T === null && t(212, k.constructor.name, k.getType()), function(Jr, Ll, $l) {
      const Il = Ll.getParentOrThrow().getLastChild();
      let Wr = Ll;
      const Bl = [Ll];
      for (; Wr !== Il; ) Wr.getNextSibling() || t(140), Wr = Wr.getNextSibling(), Bl.push(Wr);
      let zl = Jr;
      for (const Vl of Bl) zl = zl.insertAfter(Vl);
    }(T, Xe));
    const dt = Mo(je, Eo);
    Je && xi(dt) && (Je.canMergeWhenEmpty() || Eo(Ze)) && (dt.append(...Je.getChildren()), Je.remove()), xi(T) && T.isEmpty() && T.remove(), je.selectEnd();
    const fl = xi(T) ? T.getLastChild() : null;
    Wn(fl) && dt !== T && fl.remove();
  }
  insertParagraph() {
    if (this.anchor.key === "root") {
      const je = Bi();
      return ws().splice(this.anchor.offset, 0, [je]), je.select(), je;
    }
    const w = $r(this), k = Mo(this.anchor.getNode(), Eo);
    xi(k) || t(213);
    const T = k.getChildAtIndex(w), ge = T ? [T, ...T.getNextSiblings()] : [], Be = k.insertNewAfter(this, !1);
    return Be ? (Be.append(...ge), Be.selectStart(), Be) : null;
  }
  insertLineBreak(w) {
    const k = Bn();
    if (this.insertNodes([k]), w) {
      const T = k.getParentOrThrow(), ge = k.getIndexWithinParent();
      T.select(ge, ge);
    }
  }
  extract() {
    const w = this.getNodes(), k = w.length, T = k - 1, ge = this.anchor, Be = this.focus;
    let je = w[0], Qe = w[T];
    const [Je, Ze] = xr(this);
    if (k === 0) return [];
    if (k === 1) {
      if (sr(je) && !this.isCollapsed()) {
        const gt = Je > Ze ? Ze : Je, dt = Je > Ze ? Je : Ze, fl = je.splitText(gt, dt), Jr = gt === 0 ? fl[0] : fl[1];
        return Jr != null ? [Jr] : [];
      }
      return [je];
    }
    const Xe = ge.isBefore(Be);
    if (sr(je)) {
      const gt = Xe ? Je : Ze;
      gt === je.getTextContentSize() ? w.shift() : gt !== 0 && ([, je] = je.splitText(gt), w[0] = je);
    }
    if (sr(Qe)) {
      const gt = Qe.getTextContent().length, dt = Xe ? Ze : Je;
      dt === 0 ? w.pop() : dt !== gt && ([Qe] = Qe.splitText(dt), w[T] = Qe);
    }
    return w;
  }
  modify(w, k, T) {
    if (Ur(this, w, k, T)) return;
    const ge = w === "move", Be = ni(), je = xo(co(Be));
    if (!je) return;
    const Qe = Be._blockCursorElement, Je = Be._rootElement, Ze = this.focus.getNode();
    if (Je === null || Qe === null || !xi(Ze) || Ze.isInline() || Ze.canBeEmpty() || mo(Qe, Be, Je), this.dirty) {
      let Xe = to(Be, this.anchor.key), gt = to(Be, this.focus.key);
      this.anchor.type === "text" && (Xe = hs(Xe)), this.focus.type === "text" && (gt = hs(gt)), Xe && gt && Rr(je, Xe, this.anchor.offset, gt, this.focus.offset);
    }
    if (function(Xe, gt, dt, fl) {
      Xe.modify(gt, dt, fl);
    }(je, w, k ? "backward" : "forward", T), je.rangeCount > 0) {
      const Xe = je.getRangeAt(0), gt = this.anchor.getNode(), dt = ki(gt) ? gt : uo(gt);
      if (this.applyDOMRange(Xe), this.dirty = !0, !ge) {
        const fl = this.getNodes(), Jr = [];
        let Ll = !1;
        for (let $l = 0; $l < fl.length; $l++) {
          const Il = fl[$l];
          oo(Il, dt) ? Jr.push(Il) : Ll = !0;
        }
        if (Ll && Jr.length > 0) if (k) {
          const $l = Jr[0];
          xi($l) ? $l.selectStart() : $l.getParentOrThrow().selectStart();
        } else {
          const $l = Jr[Jr.length - 1];
          xi($l) ? $l.selectEnd() : $l.getParentOrThrow().selectEnd();
        }
        je.anchorNode === Xe.startContainer && je.anchorOffset === Xe.startOffset || function($l) {
          const Il = $l.focus, Wr = $l.anchor, Bl = Wr.key, zl = Wr.offset, Vl = Wr.type;
          Wr.set(Il.key, Il.offset, Il.type, !0), Il.set(Bl, zl, Vl, !0);
        }(this);
      }
    }
    T === "lineboundary" && Ur(this, w, k, T, "decorators");
  }
  forwardDeletion(w, k, T) {
    if (!T && (w.type === "element" && xi(k) && w.offset === k.getChildrenSize() || w.type === "text" && w.offset === k.getTextContentSize())) {
      const ge = k.getParent(), Be = k.getNextSibling() || (ge === null ? null : ge.getNextSibling());
      if (xi(Be) && Be.isShadowRoot()) return !0;
    }
    return !1;
  }
  deleteCharacter(w) {
    const k = this.isCollapsed();
    if (this.isCollapsed()) {
      const T = this.anchor;
      let ge = T.getNode();
      if (this.forwardDeletion(T, ge, w)) return;
      const Be = dl(Sl(T, w ? "previous" : "next"));
      if (Be.getTextSlices().every((Qe) => Qe === null || Qe.distance === 0)) {
        let Qe = { type: "initial" };
        for (const Je of Be.iterNodeCarets("shadowRoot")) if (Qo(Je)) {
          if (!Je.origin.isInline()) {
            if (Je.origin.isShadowRoot()) {
              if (Qe.type === "merge-block") break;
              if (xi(Be.anchor.origin) && Be.anchor.origin.isEmpty()) {
                const Ze = Ol(Je);
                kl(this, gl(Ze, Ze)), Be.anchor.origin.remove();
              }
              return;
            }
            Qe.type !== "merge-next-block" && Qe.type !== "merge-block" || (Qe = { block: Qe.block, caret: Je, type: "merge-block" });
          }
        } else {
          if (Qe.type === "merge-block") break;
          if (Xo(Je)) {
            if (xi(Je.origin)) {
              if (Je.origin.isInline()) {
                if (!Je.origin.isParentOf(Be.anchor.origin)) break;
              } else Qe = { block: Je.origin, type: "merge-next-block" };
              continue;
            }
            if (vi(Je.origin)) {
              if (!Je.origin.isIsolated()) if (Qe.type === "merge-next-block" && (Je.origin.isKeyboardSelectable() || !Je.origin.isInline()) && xi(Be.anchor.origin) && Be.anchor.origin.isEmpty()) {
                Be.anchor.origin.remove();
                const Ze = Or();
                Ze.add(Je.origin.getKey()), Ms(Ze);
              } else Je.origin.remove();
              return;
            }
            break;
          }
        }
        if (Qe.type === "merge-block") {
          const { caret: Je, block: Ze } = Qe;
          return kl(this, gl(!Je.origin.isEmpty() && Ze.isEmpty() ? bl(nl(Ze, Je.direction)) : Be.anchor, Je)), this.removeText();
        }
      }
      const je = this.focus;
      if (this.modify("extend", w, "character"), this.isCollapsed()) {
        if (w && T.offset === 0 && Cr(this, T.getNode())) return;
      } else {
        const Qe = je.type === "text" ? je.getNode() : null;
        if (ge = T.type === "text" ? T.getNode() : null, Qe !== null && Qe.isSegmented()) {
          const Je = je.offset, Ze = Qe.getTextContentSize();
          if (Qe.is(ge) || w && Je !== Ze || !w && Je !== 0) return void vr(Qe, w, Je);
        } else if (ge !== null && ge.isSegmented()) {
          const Je = T.offset, Ze = ge.getTextContentSize();
          if (ge.is(Qe) || w && Je !== 0 || !w && Je !== Ze) return void vr(ge, w, Je);
        }
        (function(Je, Ze) {
          const Xe = Je.anchor, gt = Je.focus, dt = Xe.getNode(), fl = gt.getNode();
          if (dt === fl && Xe.type === "text" && gt.type === "text") {
            const Jr = Xe.offset, Ll = gt.offset, $l = Jr < Ll, Il = $l ? Jr : Ll, Wr = $l ? Ll : Jr, Bl = Wr - 1;
            Il !== Bl && function(zl) {
              return !(Ds(zl) || Sr(zl));
            }(dt.getTextContent().slice(Il, Wr)) && (Ze ? gt.set(gt.key, Bl, gt.type) : Xe.set(Xe.key, Bl, Xe.type));
          }
        })(this, w);
      }
    }
    if (this.removeText(), w && !k && this.isCollapsed() && this.anchor.type === "element" && this.anchor.offset === 0) {
      const T = this.anchor.getNode();
      T.isEmpty() && ki(T.getParent()) && T.getPreviousSibling() === null && Cr(this, T);
    }
  }
  deleteLine(w) {
    this.isCollapsed() && this.modify("extend", w, "lineboundary"), this.isCollapsed() ? this.deleteCharacter(w) : this.removeText();
  }
  deleteWord(w) {
    if (this.isCollapsed()) {
      const k = this.anchor, T = k.getNode();
      if (this.forwardDeletion(k, T, w)) return;
      this.modify("extend", w, "word");
    }
    this.removeText();
  }
  isBackward() {
    return this.focus.isBefore(this.anchor);
  }
  getStartEndPoints() {
    return [this.anchor, this.focus];
  }
}
function yr(E) {
  return E instanceof gr;
}
function mr(E) {
  const w = E.offset;
  if (E.type === "text") return w;
  const k = E.getNode();
  return w === k.getChildrenSize() ? k.getTextContent().length : 0;
}
function xr(E) {
  const w = E.getStartEndPoints();
  if (w === null) return [0, 0];
  const [k, T] = w;
  return k.type === "element" && T.type === "element" && k.key === T.key && k.offset === T.offset ? [0, 0] : [mr(k), mr(T)];
}
function Cr(E, w) {
  for (let k = w; k; k = k.getParent()) {
    if (xi(k)) {
      if (k.collapseAtStart(E)) return !0;
      if (fo(k)) break;
    }
    if (k.getPreviousSibling()) break;
  }
  return !1;
}
const Sr = (() => {
  try {
    const E = new RegExp("\\p{Emoji}", "u"), w = E.test.bind(E);
    if (w("❤️") && w("#️⃣") && w("👍")) return w;
  } catch {
  }
  return () => !1;
})();
function vr(E, w, k) {
  const T = E, ge = T.getTextContent().split(/(?=\s)/g), Be = ge.length;
  let je = 0, Qe = 0;
  for (let Ze = 0; Ze < Be; Ze++) {
    const Xe = Ze === Be - 1;
    if (Qe = je, je += ge[Ze].length, w && je === k || je > k || Xe) {
      ge.splice(Ze, 1), Xe && (Qe = void 0);
      break;
    }
  }
  const Je = ge.join("").trim();
  Je === "" ? T.remove() : (T.setTextContent(Je), T.select(Qe, Qe));
}
function Tr(E, w, k, T) {
  let ge, Be = w;
  if (To(E)) {
    let je = !1;
    const Qe = E.childNodes, Je = Qe.length, Ze = T._blockCursorElement;
    Be === Je && (je = !0, Be = Je - 1);
    let Xe = Qe[Be], gt = !1;
    if (Xe === Ze) Xe = Qe[Be + 1], gt = !0;
    else if (Ze !== null) {
      const dt = Ze.parentNode;
      E === dt && w > Array.prototype.indexOf.call(dt.children, Ze) && Be--;
    }
    if (ge = Os(Xe), sr(ge)) Be = As(ge, je);
    else {
      let dt = Os(E);
      if (dt === null) return null;
      if (xi(dt)) {
        const fl = T.getElementByKey(dt.getKey());
        fl === null && t(214), [dt, Be] = dt.getDOMSlot(fl).resolveChildIndex(dt, fl, E, w), xi(dt) || t(215), je && Be >= dt.getChildrenSize() && (Be = Math.max(0, dt.getChildrenSize() - 1));
        let Jr = dt.getChildAtIndex(Be);
        if (xi(Jr) && function(Ll, $l, Il) {
          const Wr = Ll.getParent();
          return Il === null || Wr === null || !Wr.canBeEmpty() || Wr !== Il.getNode();
        }(Jr, 0, k)) {
          const Ll = je ? Jr.getLastDescendant() : Jr.getFirstDescendant();
          Ll === null ? dt = Jr : (Jr = Ll, dt = xi(Jr) ? Jr : Jr.getParentOrThrow()), Be = 0;
        }
        sr(Jr) ? (ge = Jr, dt = null, Be = As(Jr, je)) : Jr !== dt && je && !gt && (xi(dt) || t(216), Be = Math.min(dt.getChildrenSize(), Be + 1));
      } else {
        const fl = dt.getIndexWithinParent();
        Be = w === 0 && vi(dt) && Os(E) === dt ? fl : fl + 1, dt = dt.getParentOrThrow();
      }
      if (xi(dt)) return fr(dt.__key, Be, "element");
    }
  } else ge = Os(E);
  return sr(ge) ? fr(ge.__key, Be, "text") : null;
}
function kr(E, w, k) {
  const T = E.offset, ge = E.getNode();
  if (T === 0) {
    const Be = ge.getPreviousSibling(), je = ge.getParent();
    if (w) {
      if ((k || !w) && Be === null && xi(je) && je.isInline()) {
        const Qe = je.getPreviousSibling();
        sr(Qe) && E.set(Qe.__key, Qe.getTextContent().length, "text");
      }
    } else xi(Be) && !k && Be.isInline() ? E.set(Be.__key, Be.getChildrenSize(), "element") : sr(Be) && E.set(Be.__key, Be.getTextContent().length, "text");
  } else if (T === ge.getTextContent().length) {
    const Be = ge.getNextSibling(), je = ge.getParent();
    if (w && xi(Be) && Be.isInline()) E.set(Be.__key, 0, "element");
    else if ((k || w) && Be === null && xi(je) && je.isInline() && !je.canInsertTextAfter()) {
      const Qe = je.getNextSibling();
      sr(Qe) && E.set(Qe.__key, 0, "text");
    }
  }
}
function Nr(E, w, k) {
  if (E.type === "text" && w.type === "text") {
    const T = E.isBefore(w), ge = E.is(w);
    kr(E, T, ge), kr(w, !T, ge), ge && w.set(E.key, E.offset, E.type);
    const Be = ni();
    if (Be.isComposing() && Be._compositionKey !== E.key && _r(k)) {
      const je = k.anchor, Qe = k.focus;
      E.set(je.key, je.offset, je.type, !0), w.set(Qe.key, Qe.offset, Qe.type, !0);
    }
  }
}
function br(E, w, k, T, ge, Be) {
  if (E === null || k === null || !ss(ge, E, k)) return null;
  const je = Tr(E, w, _r(Be) ? Be.anchor : null, ge);
  if (je === null) return null;
  const Qe = Tr(k, T, _r(Be) ? Be.focus : null, ge);
  if (Qe === null) return null;
  if (je.type === "element" && Qe.type === "element") {
    const Je = Os(E), Ze = Os(k);
    if (vi(Je) && vi(Ze)) return null;
  }
  return Nr(je, Qe, Be), [je, Qe];
}
function Er(E, w, k, T, ge, Be) {
  const je = ei(), Qe = new pr(fr(E, w, ge), fr(k, T, Be), 0, "");
  return Qe.dirty = !0, je._selection = Qe, Qe;
}
function Mr() {
  const E = fr("root", 0, "element"), w = fr("root", 0, "element");
  return new pr(E, w, 0, "");
}
function Or() {
  return new gr(/* @__PURE__ */ new Set());
}
function Dr(E, w, k, T) {
  const ge = k._window;
  if (ge === null) return null;
  const Be = T || ge.event, je = Be ? Be.type : void 0, Qe = je === "selectionchange", Je = !et$1 && (Qe || je === "beforeinput" || je === "compositionstart" || je === "compositionend" || je === "click" && Be && Be.detail === 3 || je === "drop" || je === void 0);
  let Ze, Xe, gt, dt;
  if (_r(E) && !Je) return E.clone();
  if (w === null) return null;
  if (Ze = w.anchorNode, Xe = w.focusNode, gt = w.anchorOffset, dt = w.focusOffset, Qe && _r(E) && !ss(k, Ze, Xe)) return E.clone();
  const fl = br(Ze, gt, Xe, dt, k, E);
  if (fl === null) return null;
  const [Jr, Ll] = fl;
  return new pr(Jr, Ll, _r(E) ? E.format : 0, _r(E) ? E.style : "");
}
function Pr() {
  return ei()._selection;
}
function Fr() {
  return ni()._editorState._selection;
}
function Lr(E, w, k, T = 1) {
  const ge = E.anchor, Be = E.focus, je = ge.getNode(), Qe = Be.getNode();
  if (!w.is(je) && !w.is(Qe)) return;
  const Je = w.__key;
  if (E.isCollapsed()) {
    const Ze = ge.offset;
    if (k <= Ze && T > 0 || k < Ze && T < 0) {
      const Xe = Math.max(0, Ze + T);
      ge.set(Je, Xe, "element"), Be.set(Je, Xe, "element"), Ir(E);
    }
  } else {
    const Ze = E.isBackward(), Xe = Ze ? Be : ge, gt = Xe.getNode(), dt = Ze ? ge : Be, fl = dt.getNode();
    if (w.is(gt)) {
      const Jr = Xe.offset;
      (k <= Jr && T > 0 || k < Jr && T < 0) && Xe.set(Je, Math.max(0, Jr + T), "element");
    }
    if (w.is(fl)) {
      const Jr = dt.offset;
      (k <= Jr && T > 0 || k < Jr && T < 0) && dt.set(Je, Math.max(0, Jr + T), "element");
    }
  }
  Ir(E);
}
function Ir(E) {
  const w = E.anchor, k = w.offset, T = E.focus, ge = T.offset, Be = w.getNode(), je = T.getNode();
  if (E.isCollapsed()) {
    if (!xi(Be)) return;
    const Qe = Be.getChildrenSize(), Je = k >= Qe, Ze = Je ? Be.getChildAtIndex(Qe - 1) : Be.getChildAtIndex(k);
    if (sr(Ze)) {
      let Xe = 0;
      Je && (Xe = Ze.getTextContentSize()), w.set(Ze.__key, Xe, "text"), T.set(Ze.__key, Xe, "text");
    }
  } else {
    if (xi(Be)) {
      const Qe = Be.getChildrenSize(), Je = k >= Qe, Ze = Je ? Be.getChildAtIndex(Qe - 1) : Be.getChildAtIndex(k);
      if (sr(Ze)) {
        let Xe = 0;
        Je && (Xe = Ze.getTextContentSize()), w.set(Ze.__key, Xe, "text");
      }
    }
    if (xi(je)) {
      const Qe = je.getChildrenSize(), Je = ge >= Qe, Ze = Je ? je.getChildAtIndex(Qe - 1) : je.getChildAtIndex(ge);
      if (sr(Ze)) {
        let Xe = 0;
        Je && (Xe = Ze.getTextContentSize()), T.set(Ze.__key, Xe, "text");
      }
    }
  }
}
function zr(E, w, k, T, ge) {
  let Be = null, je = 0, Qe = null;
  T !== null ? (Be = T.__key, sr(T) ? (je = T.getTextContentSize(), Qe = "text") : xi(T) && (je = T.getChildrenSize(), Qe = "element")) : ge !== null && (Be = ge.__key, sr(ge) ? Qe = "text" : xi(ge) && (Qe = "element")), Be !== null && Qe !== null ? E.set(Be, je, Qe) : (je = w.getIndexWithinParent(), je === -1 && (je = k.getChildrenSize()), E.set(k.__key, je, "element"));
}
function Kr(E, w, k, T, ge) {
  E.type === "text" ? E.set(k, E.offset + (w ? 0 : ge), "text") : E.offset > T.getIndexWithinParent() && E.set(E.key, E.offset - 1, "element");
}
function Rr(E, w, k, T, ge) {
  try {
    E.setBaseAndExtent(w, k, T, ge);
  } catch {
  }
}
function Br(E, w, k, T, ge, Be, je) {
  const Qe = T.anchorNode, Je = T.focusNode, Ze = T.anchorOffset, Xe = T.focusOffset, gt = document.activeElement;
  if (ge.has(Pi) && gt !== Be || gt !== null && is(gt)) return;
  if (!_r(w)) return void (E !== null && ss(k, Qe, Je) && T.removeAllRanges());
  const dt = w.anchor, fl = w.focus, Jr = dt.key, Ll = fl.key, $l = to(k, Jr), Il = to(k, Ll), Wr = dt.offset, Bl = fl.offset, zl = w.format, Vl = w.style, Rl = w.isCollapsed();
  let Wl = $l, Hl = Il, jl = !1;
  if (dt.type === "text") {
    Wl = hs($l);
    const nu = dt.getNode();
    jl = nu.getFormat() !== zl || nu.getStyle() !== Vl;
  } else _r(E) && E.anchor.type === "text" && (jl = !0);
  var Ul, Ql, Xl, Gl, tu;
  if (fl.type === "text" && (Hl = hs(Il)), Wl !== null && Hl !== null && (Rl && (E === null || jl || _r(E) && (E.format !== zl || E.style !== Vl)) && (Ul = zl, Ql = Vl, Xl = Wr, Gl = Jr, tu = performance.now(), Cn = [Ul, Ql, Xl, Gl, tu]), Ze !== Wr || Xe !== Bl || Qe !== Wl || Je !== Hl || T.type === "Range" && Rl || (gt !== null && Be.contains(gt) || Be.focus({ preventScroll: !0 }), dt.type === "element"))) {
    if (Rr(T, Wl, Wr, Hl, Bl), !ge.has(Li) && w.isCollapsed() && Be !== null && Be === document.activeElement) {
      const nu = _r(w) && w.anchor.type === "element" ? Wl.childNodes[Wr] || null : T.rangeCount > 0 ? T.getRangeAt(0) : null;
      if (nu !== null) {
        let ql;
        if (nu instanceof Text) {
          const Yl = document.createRange();
          Yl.selectNode(nu), ql = Yl.getBoundingClientRect();
        } else ql = nu.getBoundingClientRect();
        (function(Yl, eu, Jl) {
          const iu = no(Jl), Kl = lo(iu);
          if (iu === null || Kl === null) return;
          let { top: Zl, bottom: ru } = eu, su = 0, ou = 0, au = Jl;
          for (; au !== null; ) {
            const lu = au === iu.body;
            if (lu) su = 0, ou = co(Yl).innerHeight;
            else {
              const uu = au.getBoundingClientRect();
              su = uu.top, ou = uu.bottom;
            }
            let cu = 0;
            if (Zl < su ? cu = -(su - Zl) : ru > ou && (cu = ru - ou), cu !== 0) if (lu) Kl.scrollBy(0, cu);
            else {
              const uu = au.scrollTop;
              au.scrollTop += cu;
              const du = au.scrollTop - uu;
              Zl -= du, ru -= du;
            }
            if (lu) break;
            au = eo(au);
          }
        })(k, ql, Be);
      }
    }
    hn$1 = !0;
  }
}
function $r(E) {
  let w = E;
  E.isCollapsed() || w.removeText();
  const k = Pr();
  _r(k) && (w = k), _r(w) || t(161);
  const T = w.anchor;
  let ge = T.getNode(), Be = T.offset;
  for (; !Eo(ge); ) {
    const je = ge;
    if ([ge, Be] = jr(ge, Be), je.is(ge)) break;
  }
  return Be;
}
function jr(E, w) {
  const k = E.getParent();
  if (!k) {
    const ge = Bi();
    return ws().append(ge), ge.select(), [ws(), 0];
  }
  if (sr(E)) {
    const ge = E.splitText(w);
    if (ge.length === 0) return [k, E.getIndexWithinParent()];
    const Be = w === 0 ? 0 : 1;
    return [k, ge[0].getIndexWithinParent() + Be];
  }
  if (!xi(E) || w === 0) return [k, E.getIndexWithinParent()];
  const T = E.getChildAtIndex(w);
  if (T) {
    const ge = new pr(fr(E.__key, w, "element"), fr(E.__key, w, "element"), 0, ""), Be = E.insertNewAfter(ge);
    Be && Be.append(T, ...T.getNextSiblings());
  }
  return [k, E.getIndexWithinParent() + 1];
}
function Ur(E, w, k, T, ge = "decorators-and-blocks") {
  if (w === "move" && T === "character" && !E.isCollapsed()) {
    const [Xe, gt] = k === E.isBackward() ? [E.focus, E.anchor] : [E.anchor, E.focus];
    return gt.set(Xe.key, Xe.offset, Xe.type), !0;
  }
  const Be = Sl(E.focus, k ? "previous" : "next"), je = T === "lineboundary", Qe = w === "move";
  let Je = Be, Ze = ge === "decorators-and-blocks";
  if (!Al(Je)) {
    for (const Xe of Je) {
      Ze = !1;
      const { origin: gt } = Xe;
      if (!vi(gt) || gt.isIsolated() || (Je = Xe, !je || !gt.isInline())) break;
    }
    if (Ze) for (const Xe of dl(Be).iterNodeCarets(w === "extend" ? "shadowRoot" : "root")) {
      if (Qo(Xe)) Xe.origin.isInline() || (Je = Xe);
      else {
        if (xi(Xe.origin)) continue;
        vi(Xe.origin) && !Xe.origin.isInline() && (Je = Xe);
      }
      break;
    }
  }
  if (Je === Be) return !1;
  if (Qe && !je && vi(Je.origin) && Je.origin.isKeyboardSelectable()) {
    const Xe = Or();
    return Xe.add(Je.origin.getKey()), Ms(Xe), !0;
  }
  return Je = Ol(Je), Qe && vl(E.anchor, Je), vl(E.focus, Je), Ze || !je;
}
let Vr = null, Yr = null, Hr = !1, qr = !1, Gr = 0;
const Xr = { characterData: !0, childList: !0, subtree: !0 };
function Qr() {
  return Hr || Vr !== null && Vr._readOnly;
}
function Zr() {
  Hr && t(13);
}
function ti() {
  Gr > 99 && t(14);
}
function ei() {
  return Vr === null && t(195, ri()), Vr;
}
function ni() {
  return Yr === null && t(196, ri()), Yr;
}
function ri() {
  let E = 0;
  const w = /* @__PURE__ */ new Set(), k = qi.version;
  if (typeof window < "u") for (const ge of document.querySelectorAll("[contenteditable]")) {
    const Be = cs(ge);
    if (os(Be)) E++;
    else if (Be) {
      let je = String(Be.constructor.version || "<0.17.1");
      je === k && (je += " (separately built, likely a bundler configuration issue)"), w.add(je);
    }
  }
  let T = ` Detected on the page: ${E} compatible editor(s) with version ${k}`;
  return w.size && (T += ` and incompatible editors with versions ${Array.from(w).join(", ")}`), T;
}
function ii() {
  return Yr;
}
function si(E, w, k) {
  const T = w.__type, ge = ts(E, T);
  let Be = k.get(T);
  Be === void 0 && (Be = Array.from(ge.transforms), k.set(T, Be));
  const je = Be.length;
  for (let Qe = 0; Qe < je && (Be[Qe](w), w.isAttached()); Qe++) ;
}
function oi(E, w) {
  return E !== void 0 && E.__key !== w && E.isAttached();
}
function li(E, w) {
  if (!w) return;
  const k = E._updateTags;
  let T = w;
  Array.isArray(w) || (T = [w]);
  for (const ge of T) k.add(ge);
}
function ai(E, w) {
  const k = E.type, T = w.get(k);
  T === void 0 && t(17, k);
  const ge = T.klass;
  E.type !== ge.getType() && t(18, ge.name);
  const Be = ge.importJSON(E), je = E.children;
  if (xi(Be) && Array.isArray(je)) for (let Qe = 0; Qe < je.length; Qe++) {
    const Je = ai(je[Qe], w);
    Be.append(Je);
  }
  return Be;
}
function ui(E, w, k) {
  const T = Vr, ge = Hr, Be = Yr;
  Vr = w, Hr = !0, Yr = E;
  try {
    return k();
  } finally {
    Vr = T, Hr = ge, Yr = Be;
  }
}
function fi(E, w) {
  const k = E._pendingEditorState, T = E._rootElement, ge = E._headless || T === null;
  if (k === null) return;
  const Be = E._editorState, je = Be._selection, Qe = k._selection, Je = E._dirtyType !== y, Ze = Vr, Xe = Hr, gt = Yr, dt = E._updating, fl = E._observer;
  let Jr = null;
  if (E._pendingEditorState = null, E._editorState = k, !ge && Je && fl !== null) {
    Yr = E, Vr = k, Hr = !1, E._updating = !0;
    try {
      const Rl = E._dirtyType, Wl = E._dirtyElements, Hl = E._dirtyLeaves;
      fl.disconnect(), Jr = ue(Be, k, E, Rl, Wl, Hl);
    } catch (Rl) {
      if (Rl instanceof Error && E._onError(Rl), qr) throw Rl;
      return Yi(E, null, T, k), ut$1(E), E._dirtyType = x, qr = !0, fi(E, Be), void (qr = !1);
    } finally {
      fl.observe(T, Xr), E._updating = dt, Vr = Ze, Hr = Xe, Yr = gt;
    }
  }
  k._readOnly || (k._readOnly = !0);
  const Ll = E._dirtyLeaves, $l = E._dirtyElements, Il = E._normalizedNodes, Wr = E._updateTags, Bl = E._deferred;
  Je && (E._dirtyType = y, E._cloneNotNeeded.clear(), E._dirtyLeaves = /* @__PURE__ */ new Set(), E._dirtyElements = /* @__PURE__ */ new Map(), E._normalizedNodes = /* @__PURE__ */ new Set(), E._updateTags = /* @__PURE__ */ new Set()), function(Rl, Wl) {
    const Hl = Rl._decorators;
    let jl = Rl._pendingDecorators || Hl;
    const Ul = Wl._nodeMap;
    let Ql;
    for (Ql in jl) Ul.has(Ql) || (jl === Hl && (jl = Ns(Rl)), delete jl[Ql]);
  }(E, k);
  const zl = ge ? null : xo(co(E));
  if (E._editable && zl !== null && (Je || Qe === null || Qe.dirty) && T !== null && !Wr.has(Ii)) {
    Yr = E, Vr = k;
    try {
      if (fl !== null && fl.disconnect(), Je || Qe === null || Qe.dirty) {
        const Rl = E._blockCursorElement;
        Rl !== null && mo(Rl, E, T), Br(je, Qe, E, zl, Wr, T);
      }
      (function(Rl, Wl, Hl) {
        let jl = Rl._blockCursorElement;
        if (_r(Hl) && Hl.isCollapsed() && Hl.anchor.type === "element" && Wl.contains(document.activeElement)) {
          const Ul = Hl.anchor, Ql = Ul.getNode(), Xl = Ul.offset;
          let Gl = !1, tu = null;
          if (Xl === Ql.getChildrenSize())
            yo(Ql.getChildAtIndex(Xl - 1)) && (Gl = !0);
          else {
            const nu = Ql.getChildAtIndex(Xl);
            if (nu !== null && yo(nu)) {
              const ql = nu.getPreviousSibling();
              (ql === null || yo(ql)) && (Gl = !0, tu = Rl.getElementByKey(nu.__key));
            }
          }
          if (Gl) {
            const nu = Rl.getElementByKey(Ql.__key);
            return jl === null && (Rl._blockCursorElement = jl = function(ql) {
              const Yl = ql.theme, eu = document.createElement("div");
              eu.contentEditable = "false", eu.setAttribute("data-lexical-cursor", "true");
              let Jl = Yl.blockCursor;
              if (Jl !== void 0) {
                if (typeof Jl == "string") {
                  const iu = d$1(Jl);
                  Jl = Yl.blockCursor = iu;
                }
                Jl !== void 0 && eu.classList.add(...Jl);
              }
              return eu;
            }(Rl._config)), Wl.style.caretColor = "transparent", void (tu === null ? nu.appendChild(jl) : nu.insertBefore(jl, tu));
          }
        }
        jl !== null && mo(jl, Rl, Wl);
      })(E, T, Qe);
    } finally {
      fl !== null && fl.observe(T, Xr), Yr = gt, Vr = Ze;
    }
  }
  Jr !== null && function(Rl, Wl, Hl, jl, Ul) {
    const Ql = Array.from(Rl._listeners.mutation), Xl = Ql.length;
    for (let Gl = 0; Gl < Xl; Gl++) {
      const [tu, nu] = Ql[Gl];
      for (const ql of nu) {
        const Yl = Wl.get(ql);
        Yl !== void 0 && tu(Yl, { dirtyLeaves: jl, prevEditorState: Ul, updateTags: Hl });
      }
    }
  }(E, Jr, Wr, Ll, Be), _r(Qe) || Qe === null || je !== null && je.is(Qe) || E.dispatchCommand(he, void 0);
  const Vl = E._pendingDecorators;
  Vl !== null && (E._decorators = Vl, E._pendingDecorators = null, di("decorator", E, !0, Vl)), function(Rl, Wl, Hl) {
    const jl = bs(Wl), Ul = bs(Hl);
    jl !== Ul && di("textcontent", Rl, !0, Ul);
  }(E, w || Be, k), di("update", E, !0, { dirtyElements: $l, dirtyLeaves: Ll, editorState: k, mutatedNodes: Jr, normalizedNodes: Il, prevEditorState: w || Be, tags: Wr }), function(Rl, Wl) {
    if (Rl._deferred = [], Wl.length !== 0) {
      const Hl = Rl._updating;
      Rl._updating = !0;
      try {
        for (let jl = 0; jl < Wl.length; jl++) Wl[jl]();
      } finally {
        Rl._updating = Hl;
      }
    }
  }(E, Bl), function(Rl) {
    const Wl = Rl._updates;
    if (Wl.length !== 0) {
      const Hl = Wl.shift();
      if (Hl) {
        const [jl, Ul] = Hl;
        gi(Rl, jl, Ul);
      }
    }
  }(E);
}
function di(E, w, k, ...T) {
  const ge = w._updating;
  w._updating = k;
  try {
    const Be = Array.from(w._listeners[E]);
    for (let je = 0; je < Be.length; je++) Be[je].apply(null, T);
  } finally {
    w._updating = ge;
  }
}
function hi(E, w) {
  const k = E._updates;
  let T = w || !1;
  for (; k.length !== 0; ) {
    const ge = k.shift();
    if (ge) {
      const [Be, je] = ge;
      let Qe;
      if (je !== void 0) {
        if (Qe = je.onUpdate, je.skipTransforms && (T = !0), je.discrete) {
          const Je = E._pendingEditorState;
          Je === null && t(191), Je._flushSync = !0;
        }
        Qe && E._deferred.push(Qe), li(E, je.tag);
      }
      Be();
    }
  }
  return T;
}
function gi(E, w, k) {
  const T = E._updateTags;
  let ge, Be = !1, je = !1;
  k !== void 0 && (ge = k.onUpdate, li(E, k.tag), Be = k.skipTransforms || !1, je = k.discrete || !1), ge && E._deferred.push(ge);
  const Qe = E._editorState;
  let Je = E._pendingEditorState, Ze = !1;
  (Je === null || Je._readOnly) && (Je = E._pendingEditorState = Ni(Je || Qe), Ze = !0), Je._flushSync = je;
  const Xe = Vr, gt = Hr, dt = Yr, fl = E._updating;
  Vr = Je, Hr = !1, E._updating = !0, Yr = E;
  const Jr = E._headless || E.getRootElement() === null;
  Xi(null);
  try {
    Ze && (Jr ? Qe._selection !== null && (Je._selection = Qe._selection.clone()) : Je._selection = function(Il, Wr) {
      const Bl = Il.getEditorState()._selection, zl = xo(co(Il));
      return _r(Bl) || Bl == null ? Dr(Bl, zl, Il, Wr) : Bl.clone();
    }(E, k && k.event || null));
    const Ll = E._compositionKey;
    w(), Be = hi(E, Be), function(Il, Wr) {
      const Bl = Wr.getEditorState()._selection, zl = Il._selection;
      if (_r(zl)) {
        const Vl = zl.anchor, Rl = zl.focus;
        let Wl;
        if (Vl.type === "text" && (Wl = Vl.getNode(), Wl.selectionTransform(Bl, zl)), Rl.type === "text") {
          const Hl = Rl.getNode();
          Wl !== Hl && Hl.selectionTransform(Bl, zl);
        }
      }
    }(Je, E), E._dirtyType !== y && (Be ? function(Il, Wr) {
      const Bl = Wr._dirtyLeaves, zl = Il._nodeMap;
      for (const Vl of Bl) {
        const Rl = zl.get(Vl);
        sr(Rl) && Rl.isAttached() && Rl.isSimpleText() && !Rl.isUnmergeable() && wt(Rl);
      }
    }(Je, E) : function(Il, Wr) {
      const Bl = Wr._dirtyLeaves, zl = Wr._dirtyElements, Vl = Il._nodeMap, Rl = Cs(), Wl = /* @__PURE__ */ new Map();
      let Hl = Bl, jl = Hl.size, Ul = zl, Ql = Ul.size;
      for (; jl > 0 || Ql > 0; ) {
        if (jl > 0) {
          Wr._dirtyLeaves = /* @__PURE__ */ new Set();
          for (const Xl of Hl) {
            const Gl = Vl.get(Xl);
            sr(Gl) && Gl.isAttached() && Gl.isSimpleText() && !Gl.isUnmergeable() && wt(Gl), Gl !== void 0 && oi(Gl, Rl) && si(Wr, Gl, Wl), Bl.add(Xl);
          }
          if (Hl = Wr._dirtyLeaves, jl = Hl.size, jl > 0) {
            Gr++;
            continue;
          }
        }
        Wr._dirtyLeaves = /* @__PURE__ */ new Set(), Wr._dirtyElements = /* @__PURE__ */ new Map(), Ul.delete("root") && Ul.set("root", !0);
        for (const Xl of Ul) {
          const Gl = Xl[0], tu = Xl[1];
          if (zl.set(Gl, tu), !tu) continue;
          const nu = Vl.get(Gl);
          nu !== void 0 && oi(nu, Rl) && si(Wr, nu, Wl);
        }
        Hl = Wr._dirtyLeaves, jl = Hl.size, Ul = Wr._dirtyElements, Ql = Ul.size, Gr++;
      }
      Wr._dirtyLeaves = Bl, Wr._dirtyElements = zl;
    }(Je, E), hi(E), function(Il, Wr, Bl, zl) {
      const Vl = Il._nodeMap, Rl = Wr._nodeMap, Wl = [];
      for (const [Hl] of zl) {
        const jl = Rl.get(Hl);
        jl !== void 0 && (jl.isAttached() || (xi(jl) && Z$1(jl, Hl, Vl, Rl, Wl, zl), Vl.has(Hl) || zl.delete(Hl), Wl.push(Hl)));
      }
      for (const Hl of Wl) Rl.delete(Hl);
      for (const Hl of Bl) {
        const jl = Rl.get(Hl);
        jl === void 0 || jl.isAttached() || (Vl.has(Hl) || Bl.delete(Hl), Rl.delete(Hl));
      }
    }(Qe, Je, E._dirtyLeaves, E._dirtyElements)), Ll !== E._compositionKey && (Je._flushSync = !0);
    const $l = Je._selection;
    if (_r($l)) {
      const Il = Je._nodeMap, Wr = $l.anchor.key, Bl = $l.focus.key;
      Il.get(Wr) !== void 0 && Il.get(Bl) !== void 0 || t(19);
    } else yr($l) && $l._nodes.size === 0 && (Je._selection = null);
  } catch (Ll) {
    return Ll instanceof Error && E._onError(Ll), E._pendingEditorState = Qe, E._dirtyType = x, E._cloneNotNeeded.clear(), E._dirtyLeaves = /* @__PURE__ */ new Set(), E._dirtyElements.clear(), void fi(E);
  } finally {
    Vr = Xe, Hr = gt, Yr = dt, E._updating = fl, Gr = 0;
  }
  E._dirtyType !== y || E._deferred.length > 0 || function(Ll, $l) {
    const Il = $l.getEditorState()._selection, Wr = Ll._selection;
    if (Wr !== null) {
      if (Wr.dirty || !Wr.is(Il)) return !0;
    } else if (Il !== null) return !0;
    return !1;
  }(Je, E) ? Je._flushSync ? (Je._flushSync = !1, fi(E)) : Ze && ns(() => {
    fi(E);
  }) : (Je._flushSync = !1, Ze && (T.clear(), E._deferred = [], E._pendingEditorState = null));
}
function _i(E, w, k) {
  Yr === E && k === void 0 ? w() : gi(E, w, k);
}
class pi {
  constructor(w, k, T) {
    this.element = w, this.before = k || null, this.after = T || null;
  }
  withBefore(w) {
    return new pi(this.element, w, this.after);
  }
  withAfter(w) {
    return new pi(this.element, this.before, w);
  }
  withElement(w) {
    return this.element === w ? this : new pi(w, this.before, this.after);
  }
  insertChild(w) {
    const k = this.before || this.getManagedLineBreak();
    return k !== null && k.parentElement !== this.element && t(222), this.element.insertBefore(w, k), this;
  }
  removeChild(w) {
    return w.parentElement !== this.element && t(223), this.element.removeChild(w), this;
  }
  replaceChild(w, k) {
    return k.parentElement !== this.element && t(224), this.element.replaceChild(w, k), this;
  }
  getFirstChild() {
    const w = this.after ? this.after.nextSibling : this.element.firstChild;
    return w === this.before || w === this.getManagedLineBreak() ? null : w;
  }
  getManagedLineBreak() {
    return this.element.__lexicalLineBreak || null;
  }
  setManagedLineBreak(w) {
    if (w === null) this.removeManagedLineBreak();
    else {
      const k = w === "decorator" && (l$1 || o);
      this.insertManagedLineBreak(k);
    }
  }
  removeManagedLineBreak() {
    const w = this.getManagedLineBreak();
    if (w) {
      const k = this.element, T = w.nodeName === "IMG" ? w.nextSibling : null;
      T && k.removeChild(T), k.removeChild(w), k.__lexicalLineBreak = void 0;
    }
  }
  insertManagedLineBreak(w) {
    const k = this.getManagedLineBreak();
    if (k) {
      if (w === (k.nodeName === "IMG")) return;
      this.removeManagedLineBreak();
    }
    const T = this.element, ge = this.before, Be = document.createElement("br");
    if (T.insertBefore(Be, ge), w) {
      const je = document.createElement("img");
      je.setAttribute("data-lexical-linebreak", "true"), je.style.cssText = "display: inline !important; border: 0px !important; margin: 0px !important;", je.alt = "", T.insertBefore(je, Be), T.__lexicalLineBreak = je;
    } else T.__lexicalLineBreak = Be;
  }
  getFirstChildOffset() {
    let w = 0;
    for (let k = this.after; k !== null; k = k.previousSibling) w++;
    return w;
  }
  resolveChildIndex(w, k, T, ge) {
    if (T === this.element) {
      const Je = this.getFirstChildOffset();
      return [w, Math.min(Je + w.getChildrenSize(), Math.max(Je, ge))];
    }
    const Be = yi(k, T);
    Be.push(ge);
    const je = yi(k, this.element);
    let Qe = w.getIndexWithinParent();
    for (let Je = 0; Je < je.length; Je++) {
      const Ze = Be[Je], Xe = je[Je];
      if (Ze === void 0 || Ze < Xe) break;
      if (Ze > Xe) {
        Qe += 1;
        break;
      }
    }
    return [w.getParentOrThrow(), Qe];
  }
}
function yi(E, w) {
  const k = [];
  let T = w;
  for (; T !== E && T !== null; T = T.parentNode) {
    let ge = 0;
    for (let Be = T.previousSibling; Be !== null; Be = Be.previousSibling) ge++;
    k.push(ge);
  }
  return T !== E && t(225), k.reverse();
}
class mi extends zn {
  constructor(w) {
    super(w), this.__first = null, this.__last = null, this.__size = 0, this.__format = 0, this.__style = "", this.__indent = 0, this.__dir = null, this.__textFormat = 0, this.__textStyle = "";
  }
  afterCloneFrom(w) {
    super.afterCloneFrom(w), this.__key === w.__key && (this.__first = w.__first, this.__last = w.__last, this.__size = w.__size), this.__indent = w.__indent, this.__format = w.__format, this.__style = w.__style, this.__dir = w.__dir, this.__textFormat = w.__textFormat, this.__textStyle = w.__textStyle;
  }
  getFormat() {
    return this.getLatest().__format;
  }
  getFormatType() {
    const w = this.getFormat();
    return H$1[w] || "";
  }
  getStyle() {
    return this.getLatest().__style;
  }
  getIndent() {
    return this.getLatest().__indent;
  }
  getChildren() {
    const w = [];
    let k = this.getFirstChild();
    for (; k !== null; ) w.push(k), k = k.getNextSibling();
    return w;
  }
  getChildrenKeys() {
    const w = [];
    let k = this.getFirstChild();
    for (; k !== null; ) w.push(k.__key), k = k.getNextSibling();
    return w;
  }
  getChildrenSize() {
    return this.getLatest().__size;
  }
  isEmpty() {
    return this.getChildrenSize() === 0;
  }
  isDirty() {
    const w = ni()._dirtyElements;
    return w !== null && w.has(this.__key);
  }
  isLastChild() {
    const w = this.getLatest(), k = this.getParentOrThrow().getLastChild();
    return k !== null && k.is(w);
  }
  getAllTextNodes() {
    const w = [];
    let k = this.getFirstChild();
    for (; k !== null; ) {
      if (sr(k) && w.push(k), xi(k)) {
        const T = k.getAllTextNodes();
        w.push(...T);
      }
      k = k.getNextSibling();
    }
    return w;
  }
  getFirstDescendant() {
    let w = this.getFirstChild();
    for (; xi(w); ) {
      const k = w.getFirstChild();
      if (k === null) break;
      w = k;
    }
    return w;
  }
  getLastDescendant() {
    let w = this.getLastChild();
    for (; xi(w); ) {
      const k = w.getLastChild();
      if (k === null) break;
      w = k;
    }
    return w;
  }
  getDescendantByIndex(w) {
    const k = this.getChildren(), T = k.length;
    if (w >= T) {
      const Be = k[T - 1];
      return xi(Be) && Be.getLastDescendant() || Be || null;
    }
    const ge = k[w];
    return xi(ge) && ge.getFirstDescendant() || ge || null;
  }
  getFirstChild() {
    const w = this.getLatest().__first;
    return w === null ? null : Ss(w);
  }
  getFirstChildOrThrow() {
    const w = this.getFirstChild();
    return w === null && t(45, this.__key), w;
  }
  getLastChild() {
    const w = this.getLatest().__last;
    return w === null ? null : Ss(w);
  }
  getLastChildOrThrow() {
    const w = this.getLastChild();
    return w === null && t(96, this.__key), w;
  }
  getChildAtIndex(w) {
    const k = this.getChildrenSize();
    let T, ge;
    if (w < k / 2) {
      for (T = this.getFirstChild(), ge = 0; T !== null && ge <= w; ) {
        if (ge === w) return T;
        T = T.getNextSibling(), ge++;
      }
      return null;
    }
    for (T = this.getLastChild(), ge = k - 1; T !== null && ge >= w; ) {
      if (ge === w) return T;
      T = T.getPreviousSibling(), ge--;
    }
    return null;
  }
  getTextContent() {
    let w = "";
    const k = this.getChildren(), T = k.length;
    for (let ge = 0; ge < T; ge++) {
      const Be = k[ge];
      w += Be.getTextContent(), xi(Be) && ge !== T - 1 && !Be.isInline() && (w += R$2);
    }
    return w;
  }
  getTextContentSize() {
    let w = 0;
    const k = this.getChildren(), T = k.length;
    for (let ge = 0; ge < T; ge++) {
      const Be = k[ge];
      w += Be.getTextContentSize(), xi(Be) && ge !== T - 1 && !Be.isInline() && (w += R$2.length);
    }
    return w;
  }
  getDirection() {
    return this.getLatest().__dir;
  }
  getTextFormat() {
    return this.getLatest().__textFormat;
  }
  hasFormat(w) {
    if (w !== "") {
      const k = Y$1[w];
      return !!(this.getFormat() & k);
    }
    return !1;
  }
  hasTextFormat(w) {
    const k = U$2[w];
    return !!(this.getTextFormat() & k);
  }
  getFormatFlags(w, k) {
    return gs(this.getLatest().__textFormat, w, k);
  }
  getTextStyle() {
    return this.getLatest().__textStyle;
  }
  select(w, k) {
    Zr();
    const T = Pr();
    let ge = w, Be = k;
    const je = this.getChildrenSize();
    if (!this.canBeEmpty()) {
      if (w === 0 && k === 0) {
        const Je = this.getFirstChild();
        if (sr(Je) || xi(Je)) return Je.select(0, 0);
      } else if (!(w !== void 0 && w !== je || k !== void 0 && k !== je)) {
        const Je = this.getLastChild();
        if (sr(Je) || xi(Je)) return Je.select();
      }
    }
    ge === void 0 && (ge = je), Be === void 0 && (Be = je);
    const Qe = this.__key;
    return _r(T) ? (T.anchor.set(Qe, ge, "element"), T.focus.set(Qe, Be, "element"), T.dirty = !0, T) : Er(Qe, ge, Qe, Be, "element", "element");
  }
  selectStart() {
    const w = this.getFirstDescendant();
    return w ? w.selectStart() : this.select();
  }
  selectEnd() {
    const w = this.getLastDescendant();
    return w ? w.selectEnd() : this.select();
  }
  clear() {
    const w = this.getWritable();
    return this.getChildren().forEach((k) => k.remove()), w;
  }
  append(...w) {
    return this.splice(this.getChildrenSize(), 0, w);
  }
  setDirection(w) {
    const k = this.getWritable();
    return k.__dir = w, k;
  }
  setFormat(w) {
    return this.getWritable().__format = w !== "" ? Y$1[w] : 0, this;
  }
  setStyle(w) {
    return this.getWritable().__style = w || "", this;
  }
  setTextFormat(w) {
    const k = this.getWritable();
    return k.__textFormat = w, k;
  }
  setTextStyle(w) {
    const k = this.getWritable();
    return k.__textStyle = w, k;
  }
  setIndent(w) {
    return this.getWritable().__indent = w, this;
  }
  splice(w, k, T) {
    const ge = T.length, Be = this.getChildrenSize(), je = this.getWritable();
    w + k <= Be || t(226, String(w), String(k), String(Be));
    const Qe = je.__key, Je = [], Ze = [], Xe = this.getChildAtIndex(w + k);
    let gt = null, dt = Be - k + ge;
    if (w !== 0) if (w === Be) gt = this.getLastChild();
    else {
      const Jr = this.getChildAtIndex(w);
      Jr !== null && (gt = Jr.getPreviousSibling());
    }
    if (k > 0) {
      let Jr = gt === null ? this.getFirstChild() : gt.getNextSibling();
      for (let Ll = 0; Ll < k; Ll++) {
        Jr === null && t(100);
        const $l = Jr.getNextSibling(), Il = Jr.__key;
        ys(Jr.getWritable()), Ze.push(Il), Jr = $l;
      }
    }
    let fl = gt;
    for (let Jr = 0; Jr < ge; Jr++) {
      const Ll = T[Jr];
      fl !== null && Ll.is(fl) && (gt = fl = fl.getPreviousSibling());
      const $l = Ll.getWritable();
      $l.__parent === Qe && dt--, ys($l);
      const Il = Ll.__key;
      if (fl === null) je.__first = Il, $l.__prev = null;
      else {
        const Wr = fl.getWritable();
        Wr.__next = Il, $l.__prev = Wr.__key;
      }
      Ll.__key === Qe && t(76), $l.__parent = Qe, Je.push(Il), fl = Ll;
    }
    if (w + k === Be)
      fl !== null && (fl.getWritable().__next = null, je.__last = fl.__key);
    else if (Xe !== null) {
      const Jr = Xe.getWritable();
      if (fl !== null) {
        const Ll = fl.getWritable();
        Jr.__prev = fl.__key, Ll.__next = Xe.__key;
      } else Jr.__prev = null;
    }
    if (je.__size = dt, Ze.length) {
      const Jr = Pr();
      if (_r(Jr)) {
        const Ll = new Set(Ze), $l = new Set(Je), { anchor: Il, focus: Wr } = Jr;
        Ci(Il, Ll, $l) && zr(Il, Il.getNode(), this, gt, Xe), Ci(Wr, Ll, $l) && zr(Wr, Wr.getNode(), this, gt, Xe), dt !== 0 || this.canBeEmpty() || fo(this) || this.remove();
      }
    }
    return je;
  }
  getDOMSlot(w) {
    return new pi(w);
  }
  exportDOM(w) {
    const { element: k } = super.exportDOM(w);
    if (To(k)) {
      const T = this.getIndent();
      T > 0 && (k.style.paddingInlineStart = 40 * T + "px");
      const ge = this.getDirection();
      ge && (k.dir = ge);
    }
    return { element: k };
  }
  exportJSON() {
    const w = { children: [], direction: this.getDirection(), format: this.getFormatType(), indent: this.getIndent(), ...super.exportJSON() }, k = this.getTextFormat(), T = this.getTextStyle();
    return k !== 0 && (w.textFormat = k), T !== "" && (w.textStyle = T), w;
  }
  updateFromJSON(w) {
    return super.updateFromJSON(w).setFormat(w.format).setIndent(w.indent).setDirection(w.direction).setTextFormat(w.textFormat || 0).setTextStyle(w.textStyle || "");
  }
  insertNewAfter(w, k) {
    return null;
  }
  canIndent() {
    return !0;
  }
  collapseAtStart(w) {
    return !1;
  }
  excludeFromCopy(w) {
    return !1;
  }
  canReplaceWith(w) {
    return !0;
  }
  canInsertAfter(w) {
    return !0;
  }
  canBeEmpty() {
    return !0;
  }
  canInsertTextBefore() {
    return !0;
  }
  canInsertTextAfter() {
    return !0;
  }
  isInline() {
    return !1;
  }
  isShadowRoot() {
    return !1;
  }
  canMergeWith(w) {
    return !1;
  }
  extractWithChild(w, k, T) {
    return !1;
  }
  canMergeWhenEmpty() {
    return !1;
  }
  reconcileObservedMutation(w, k) {
    const T = this.getDOMSlot(w);
    let ge = T.getFirstChild();
    for (let Be = this.getFirstChild(); Be; Be = Be.getNextSibling()) {
      const je = k.getElementByKey(Be.getKey());
      je !== null && (ge == null ? (T.insertChild(je), ge = je) : ge !== je && T.replaceChild(je, ge), ge = ge.nextSibling);
    }
  }
}
function xi(E) {
  return E instanceof mi;
}
function Ci(E, w, k) {
  let T = E.getNode();
  for (; T; ) {
    const ge = T.__key;
    if (w.has(ge) && !k.has(ge)) return !0;
    T = T.getParent();
  }
  return !1;
}
class Si extends zn {
  decorate(w, k) {
    t(47);
  }
  isIsolated() {
    return !1;
  }
  isInline() {
    return !0;
  }
  isKeyboardSelectable() {
    return !0;
  }
}
function vi(E) {
  return E instanceof Si;
}
class Ti extends mi {
  static getType() {
    return "root";
  }
  static clone() {
    return new Ti();
  }
  constructor() {
    super("root"), this.__cachedText = null;
  }
  getTopLevelElementOrThrow() {
    t(51);
  }
  getTextContent() {
    const w = this.__cachedText;
    return !Qr() && ni()._dirtyType !== y || w === null ? super.getTextContent() : w;
  }
  remove() {
    t(52);
  }
  replace(w) {
    t(53);
  }
  insertBefore(w) {
    t(54);
  }
  insertAfter(w) {
    t(55);
  }
  updateDOM(w, k) {
    return !1;
  }
  splice(w, k, T) {
    for (const ge of T) xi(ge) || vi(ge) || t(282);
    return super.splice(w, k, T);
  }
  static importJSON(w) {
    return ws().updateFromJSON(w);
  }
  collapseAtStart() {
    return !0;
  }
}
function ki(E) {
  return E instanceof Ti;
}
function Ni(E) {
  return new Ei(new Map(E._nodeMap));
}
function bi() {
  return new Ei(/* @__PURE__ */ new Map([["root", new Ti()]]));
}
function wi(E) {
  const w = E.exportJSON(), k = E.constructor;
  if (w.type !== k.getType() && t(130, k.name), xi(E)) {
    const T = w.children;
    Array.isArray(T) || t(59, k.name);
    const ge = E.getChildren();
    for (let Be = 0; Be < ge.length; Be++) {
      const je = wi(ge[Be]);
      T.push(je);
    }
  }
  return w;
}
class Ei {
  constructor(w, k) {
    this._nodeMap = w, this._selection = k || null, this._flushSync = !1, this._readOnly = !1;
  }
  isEmpty() {
    return this._nodeMap.size === 1 && this._selection === null;
  }
  read(w, k) {
    return ui(k && k.editor || null, this, w);
  }
  clone(w) {
    const k = new Ei(this._nodeMap, w === void 0 ? this._selection : w);
    return k._readOnly = !0, k;
  }
  toJSON() {
    return ui(null, this, () => ({ root: wi(ws()) }));
  }
}
const Ai = "history-merge", Pi = "collaboration", Li = "skip-scroll-into-view", Ii = "skip-dom-selection";
class zi extends mi {
  static getType() {
    return "artificial";
  }
  createDOM(w) {
    return document.createElement("div");
  }
}
class Ki extends mi {
  static getType() {
    return "paragraph";
  }
  static clone(w) {
    return new Ki(w.__key);
  }
  createDOM(w) {
    const k = document.createElement("p"), T = Vs(w.theme, "paragraph");
    return T !== void 0 && k.classList.add(...T), k;
  }
  updateDOM(w, k, T) {
    return !1;
  }
  static importDOM() {
    return { p: (w) => ({ conversion: Ri, priority: 0 }) };
  }
  exportDOM(w) {
    const { element: k } = super.exportDOM(w);
    if (To(k)) {
      this.isEmpty() && k.append(document.createElement("br"));
      const T = this.getFormatType();
      T && (k.style.textAlign = T);
    }
    return { element: k };
  }
  static importJSON(w) {
    return Bi().updateFromJSON(w);
  }
  exportJSON() {
    return { ...super.exportJSON(), textFormat: this.getTextFormat(), textStyle: this.getTextStyle() };
  }
  insertNewAfter(w, k) {
    const T = Bi();
    T.setTextFormat(w.format), T.setTextStyle(w.style);
    const ge = this.getDirection();
    return T.setDirection(ge), T.setFormat(this.getFormatType()), T.setStyle(this.getStyle()), this.insertAfter(T, k), T;
  }
  collapseAtStart() {
    const w = this.getChildren();
    if (w.length === 0 || sr(w[0]) && w[0].getTextContent().trim() === "") {
      if (this.getNextSibling() !== null) return this.selectNext(), this.remove(), !0;
      if (this.getPreviousSibling() !== null) return this.selectPrevious(), this.remove(), !0;
    }
    return !1;
  }
}
function Ri(E) {
  const w = Bi();
  return E.style && (w.setFormat(E.style.textAlign), Lo(E, w)), { node: w };
}
function Bi() {
  return go(new Ki());
}
function Wi(E) {
  return E instanceof Ki;
}
function Yi(E, w, k, T) {
  const ge = E._keyToDOMMap;
  ge.clear(), E._editorState = bi(), E._pendingEditorState = T, E._compositionKey = null, E._dirtyType = y, E._cloneNotNeeded.clear(), E._dirtyLeaves = /* @__PURE__ */ new Set(), E._dirtyElements.clear(), E._normalizedNodes = /* @__PURE__ */ new Set(), E._updateTags = /* @__PURE__ */ new Set(), E._updates = [], E._blockCursorElement = null;
  const Be = E._observer;
  Be !== null && (Be.disconnect(), E._observer = null), w !== null && (w.textContent = ""), k !== null && (k.textContent = "", ge.set("root", k));
}
function Hi(E) {
  const w = E || {}, k = ii(), T = w.theme || {}, ge = E === void 0 ? k : w.parentEditor || null, Be = w.disableEvents || !1, je = bi(), Qe = w.namespace || (ge !== null ? ge._config.namespace : Fs()), Je = w.editorState, Ze = [Ti, qn, Kn, lr, Ki, zi, ...w.nodes || []], { onError: Xe, html: gt } = w, dt = w.editable === void 0 || w.editable;
  let fl;
  if (E === void 0 && k !== null) fl = k._nodes;
  else {
    fl = /* @__PURE__ */ new Map();
    for (let Ll = 0; Ll < Ze.length; Ll++) {
      let $l = Ze[Ll], Il = null, Wr = null;
      if (typeof $l != "function") {
        const Wl = $l;
        $l = Wl.replace, Il = Wl.with, Wr = Wl.withKlass || null;
      }
      const { ownNodeConfig: Bl } = Ro($l), zl = $l.getType(), Vl = $l.transform(), Rl = /* @__PURE__ */ new Set();
      Bl && Bl.$transform && Rl.add(Bl.$transform), Vl !== null && Rl.add(Vl), fl.set(zl, { exportDOM: gt && gt.export ? gt.export.get($l) : void 0, klass: $l, replace: Il, replaceWithKlass: Wr, sharedNodeState: pt(Ze[Ll]), transforms: Rl });
    }
  }
  const Jr = new qi(je, ge, fl, { disableEvents: Be, namespace: Qe, theme: T }, Xe || console.error, function(Ll, $l) {
    const Il = /* @__PURE__ */ new Map(), Wr = /* @__PURE__ */ new Set(), Bl = (zl) => {
      Object.keys(zl).forEach((Vl) => {
        let Rl = Il.get(Vl);
        Rl === void 0 && (Rl = [], Il.set(Vl, Rl)), Rl.push(zl[Vl]);
      });
    };
    return Ll.forEach((zl) => {
      const Vl = zl.klass.importDOM;
      if (Vl == null || Wr.has(Vl)) return;
      Wr.add(Vl);
      const Rl = Vl.call(zl.klass);
      Rl !== null && Bl(Rl);
    }), $l && Bl($l), Il;
  }(fl, gt ? gt.import : void 0), dt, E);
  return Je !== void 0 && (Jr._pendingEditorState = Je, Jr._dirtyType = x), Jr;
}
class qi {
  constructor(w, k, T, ge, Be, je, Qe, Je) {
    this._createEditorArgs = Je, this._parentEditor = k, this._rootElement = null, this._editorState = w, this._pendingEditorState = null, this._compositionKey = null, this._deferred = [], this._keyToDOMMap = /* @__PURE__ */ new Map(), this._updates = [], this._updating = !1, this._listeners = { decorator: /* @__PURE__ */ new Set(), editable: /* @__PURE__ */ new Set(), mutation: /* @__PURE__ */ new Map(), root: /* @__PURE__ */ new Set(), textcontent: /* @__PURE__ */ new Set(), update: /* @__PURE__ */ new Set() }, this._commands = /* @__PURE__ */ new Map(), this._config = ge, this._nodes = T, this._decorators = {}, this._pendingDecorators = null, this._dirtyType = y, this._cloneNotNeeded = /* @__PURE__ */ new Set(), this._dirtyLeaves = /* @__PURE__ */ new Set(), this._dirtyElements = /* @__PURE__ */ new Map(), this._normalizedNodes = /* @__PURE__ */ new Set(), this._updateTags = /* @__PURE__ */ new Set(), this._observer = null, this._key = Fs(), this._onError = Be, this._htmlConversions = je, this._editable = Qe, this._headless = k !== null && k._headless, this._window = null, this._blockCursorElement = null;
  }
  isComposing() {
    return this._compositionKey != null;
  }
  registerUpdateListener(w) {
    const k = this._listeners.update;
    return k.add(w), () => {
      k.delete(w);
    };
  }
  registerEditableListener(w) {
    const k = this._listeners.editable;
    return k.add(w), () => {
      k.delete(w);
    };
  }
  registerDecoratorListener(w) {
    const k = this._listeners.decorator;
    return k.add(w), () => {
      k.delete(w);
    };
  }
  registerTextContentListener(w) {
    const k = this._listeners.textcontent;
    return k.add(w), () => {
      k.delete(w);
    };
  }
  registerRootListener(w) {
    const k = this._listeners.root;
    return w(this._rootElement, null), k.add(w), () => {
      w(null, this._rootElement), k.delete(w);
    };
  }
  registerCommand(w, k, T) {
    T === void 0 && t(35);
    const ge = this._commands;
    ge.has(w) || ge.set(w, [/* @__PURE__ */ new Set(), /* @__PURE__ */ new Set(), /* @__PURE__ */ new Set(), /* @__PURE__ */ new Set(), /* @__PURE__ */ new Set()]);
    const Be = ge.get(w);
    Be === void 0 && t(36, String(w));
    const je = Be[T];
    return je.add(k), () => {
      je.delete(k), Be.every((Qe) => Qe.size === 0) && ge.delete(w);
    };
  }
  registerMutationListener(w, k, T) {
    const ge = this.resolveRegisteredNodeAfterReplacements(this.getRegisteredNode(w)).klass, Be = this._listeners.mutation;
    let je = Be.get(k);
    je === void 0 && (je = /* @__PURE__ */ new Set(), Be.set(k, je)), je.add(ge);
    const Qe = T && T.skipInitialization;
    return Qe !== void 0 && Qe || this.initializeMutationListener(k, ge), () => {
      je.delete(ge), je.size === 0 && Be.delete(k);
    };
  }
  getRegisteredNode(w) {
    const k = this._nodes.get(w.getType());
    return k === void 0 && t(37, w.name), k;
  }
  resolveRegisteredNodeAfterReplacements(w) {
    for (; w.replaceWithKlass; ) w = this.getRegisteredNode(w.replaceWithKlass);
    return w;
  }
  initializeMutationListener(w, k) {
    const T = this._editorState, ge = Po(T).get(k.getType());
    if (!ge) return;
    const Be = /* @__PURE__ */ new Map();
    for (const je of ge.keys()) Be.set(je, "created");
    Be.size > 0 && w(Be, { dirtyLeaves: /* @__PURE__ */ new Set(), prevEditorState: T, updateTags: /* @__PURE__ */ new Set(["registerMutationListener"]) });
  }
  registerNodeTransformToKlass(w, k) {
    const T = this.getRegisteredNode(w);
    return T.transforms.add(k), T;
  }
  registerNodeTransform(w, k) {
    const T = this.registerNodeTransformToKlass(w, k), ge = [T], Be = T.replaceWithKlass;
    if (Be != null) {
      const je = this.registerNodeTransformToKlass(Be, k);
      ge.push(je);
    }
    return function(je, Qe) {
      const Je = Po(je.getEditorState()), Ze = [];
      for (const Xe of Qe) {
        const gt = Je.get(Xe);
        gt && Ze.push(gt);
      }
      Ze.length !== 0 && je.update(() => {
        for (const Xe of Ze) for (const gt of Xe.keys()) {
          const dt = Ss(gt);
          dt && dt.markDirty();
        }
      }, je._pendingEditorState === null ? { tag: Ai } : void 0);
    }(this, ge.map((je) => je.klass.getType())), () => {
      ge.forEach((je) => je.transforms.delete(k));
    };
  }
  hasNode(w) {
    return this._nodes.has(w.getType());
  }
  hasNodes(w) {
    return w.every(this.hasNode.bind(this));
  }
  dispatchCommand(w, k) {
    return Qs(this, w, k);
  }
  getDecorators() {
    return this._decorators;
  }
  getRootElement() {
    return this._rootElement;
  }
  getKey() {
    return this._key;
  }
  setRootElement(w) {
    const k = this._rootElement;
    if (w !== k) {
      const T = Vs(this._config.theme, "root"), ge = this._pendingEditorState || this._editorState;
      if (this._rootElement = w, Yi(this, k, w, ge), k !== null && (this._config.disableEvents || Fn(k), T != null && k.classList.remove(...T)), w !== null) {
        const Be = lo(w), je = w.style;
        je.userSelect = "text", je.whiteSpace = "pre-wrap", je.wordBreak = "break-word", w.setAttribute("data-lexical-editor", "true"), this._window = Be, this._dirtyType = x, ut$1(this), this._updateTags.add(Ai), fi(this), this._config.disableEvents || function(Qe, Je) {
          const Ze = Qe.ownerDocument, Xe = dn$1.get(Ze);
          (Xe === void 0 || Xe < 1) && Ze.addEventListener("selectionchange", On), dn$1.set(Ze, (Xe || 0) + 1), Qe.__lexicalEditor = Je;
          const gt = En(Qe);
          for (let dt = 0; dt < ln$1.length; dt++) {
            const [fl, Jr] = ln$1[dt], Ll = typeof Jr == "function" ? ($l) => {
              Dn($l) || (An($l), (Je.isEditable() || fl === "click") && Jr($l, Je));
            } : ($l) => {
              if (Dn($l)) return;
              An($l);
              const Il = Je.isEditable();
              switch (fl) {
                case "cut":
                  return Il && Qs(Je, qe, $l);
                case "copy":
                  return Qs(Je, He, $l);
                case "paste":
                  return Il && Qs(Je, Ce, $l);
                case "dragstart":
                  return Il && Qs(Je, Ue, $l);
                case "dragover":
                  return Il && Qs(Je, Ve, $l);
                case "dragend":
                  return Il && Qs(Je, Ye, $l);
                case "focus":
                  return Il && Qs(Je, en, $l);
                case "blur":
                  return Il && Qs(Je, nn, $l);
                case "drop":
                  return Il && Qs(Je, $e, $l);
              }
            };
            Qe.addEventListener(fl, Ll), gt.push(() => {
              Qe.removeEventListener(fl, Ll);
            });
          }
        }(w, this), T != null && w.classList.add(...T);
      } else this._window = null, this._updateTags.add(Ai), fi(this);
      di("root", this, !1, w, k);
    }
  }
  getElementByKey(w) {
    return this._keyToDOMMap.get(w) || null;
  }
  getEditorState() {
    return this._editorState;
  }
  setEditorState(w, k) {
    w.isEmpty() && t(38);
    let T = w;
    T._readOnly && (T = Ni(w), T._selection = w._selection ? w._selection.clone() : null), at$1(this);
    const ge = this._pendingEditorState, Be = this._updateTags, je = k !== void 0 ? k.tag : null;
    ge === null || ge.isEmpty() || (je != null && Be.add(je), fi(this)), this._pendingEditorState = T, this._dirtyType = x, this._dirtyElements.set("root", !1), this._compositionKey = null, je != null && Be.add(je), this._updating || fi(this);
  }
  parseEditorState(w, k) {
    return function(T, ge, Be) {
      const je = bi(), Qe = Vr, Je = Hr, Ze = Yr, Xe = ge._dirtyElements, gt = ge._dirtyLeaves, dt = ge._cloneNotNeeded, fl = ge._dirtyType;
      ge._dirtyElements = /* @__PURE__ */ new Map(), ge._dirtyLeaves = /* @__PURE__ */ new Set(), ge._cloneNotNeeded = /* @__PURE__ */ new Set(), ge._dirtyType = 0, Vr = je, Hr = !1, Yr = ge, Xi(null);
      try {
        const Jr = ge._nodes;
        ai(T.root, Jr), Be && Be(), je._readOnly = !0;
      } catch (Jr) {
        Jr instanceof Error && ge._onError(Jr);
      } finally {
        ge._dirtyElements = Xe, ge._dirtyLeaves = gt, ge._cloneNotNeeded = dt, ge._dirtyType = fl, Vr = Qe, Hr = Je, Yr = Ze;
      }
      return je;
    }(typeof w == "string" ? JSON.parse(w) : w, this, k);
  }
  read(w) {
    return fi(this), this.getEditorState().read(w, { editor: this });
  }
  update(w, k) {
    (function(T, ge, Be) {
      T._updating ? T._updates.push([ge, Be]) : gi(T, ge, Be);
    })(this, w, k);
  }
  focus(w, k = {}) {
    const T = this._rootElement;
    T !== null && (T.setAttribute("autocapitalize", "off"), _i(this, () => {
      const ge = Pr(), Be = ws();
      ge !== null ? ge.dirty || Ms(ge.clone()) : Be.getChildrenSize() !== 0 && (k.defaultSelection === "rootStart" ? Be.selectStart() : Be.selectEnd()), io("focus"), so(() => {
        T.removeAttribute("autocapitalize"), w && w();
      });
    }), this._pendingEditorState === null && T.removeAttribute("autocapitalize"));
  }
  blur() {
    const w = this._rootElement;
    w !== null && w.blur();
    const k = xo(this._window);
    k !== null && k.removeAllRanges();
  }
  isEditable() {
    return this._editable;
  }
  setEditable(w) {
    this._editable !== w && (this._editable = w, di("editable", this, !0, w));
  }
  toJSON() {
    return { editorState: this._editorState.toJSON() };
  }
}
qi.version = "0.33.1+prod.esm";
let Gi = null;
function Xi(E) {
  Gi = E;
}
let Qi = 1;
function ts(E, w) {
  const k = es(E, w);
  return k === void 0 && t(30, w), k;
}
function es(E, w) {
  return E._nodes.get(w);
}
const ns = typeof queueMicrotask == "function" ? queueMicrotask : (E) => {
  Promise.resolve().then(E);
};
function rs(E) {
  return vi(ks(E));
}
function is(E) {
  const w = document.activeElement;
  if (!To(w)) return !1;
  const k = w.nodeName;
  return vi(ks(E)) && (k === "INPUT" || k === "TEXTAREA" || w.contentEditable === "true" && cs(w) == null);
}
function ss(E, w, k) {
  const T = E.getRootElement();
  try {
    return T !== null && T.contains(w) && T.contains(k) && w !== null && !is(w) && ls(w) === E;
  } catch {
    return !1;
  }
}
function os(E) {
  return E instanceof qi;
}
function ls(E) {
  let w = E;
  for (; w != null; ) {
    const k = cs(w);
    if (os(k)) return k;
    w = eo(w);
  }
  return null;
}
function cs(E) {
  return E ? E.__lexicalEditor : null;
}
function as(E) {
  return ar(E) || E.isToken();
}
function us(E) {
  return as(E) || E.isSegmented();
}
function fs(E) {
  return ko(E) && E.nodeType === g$1;
}
function ds(E) {
  return ko(E) && E.nodeType === _;
}
function hs(E) {
  let w = E;
  for (; w != null; ) {
    if (fs(w)) return w;
    w = w.firstChild;
  }
  return null;
}
function gs(E, w, k) {
  const T = U$2[w];
  if (k !== null && (E & T) == (k & T)) return E;
  let ge = E ^ T;
  return w === "subscript" ? ge &= -65 : w === "superscript" ? ge &= -33 : w === "lowercase" ? (ge &= -513, ge &= -1025) : w === "uppercase" ? (ge &= -257, ge &= -1025) : w === "capitalize" && (ge &= -257, ge &= -513), ge;
}
function ps(E, w) {
  const k = function() {
    const je = Gi;
    return Gi = null, je;
  }();
  if ((w = w || k && k.__key) != null) return void (E.__key = w);
  Zr(), ti();
  const T = ni(), ge = ei(), Be = "" + Qi++;
  ge._nodeMap.set(Be, E), xi(E) ? T._dirtyElements.set(Be, !0) : T._dirtyLeaves.add(Be), T._cloneNotNeeded.add(Be), T._dirtyType = m$1, E.__key = Be;
}
function ys(E) {
  const w = E.getParent();
  if (w !== null) {
    const k = E.getWritable(), T = w.getWritable(), ge = E.getPreviousSibling(), Be = E.getNextSibling(), je = Be !== null ? Be.__key : null, Qe = ge !== null ? ge.__key : null, Je = ge !== null ? ge.getWritable() : null, Ze = Be !== null ? Be.getWritable() : null;
    ge === null && (T.__first = je), Be === null && (T.__last = Qe), Je !== null && (Je.__next = je), Ze !== null && (Ze.__prev = Qe), k.__prev = null, k.__next = null, k.__parent = null, T.__size--;
  }
}
function ms(E) {
  ti();
  const w = E.getLatest(), k = w.__parent, T = ei(), ge = ni(), Be = T._nodeMap, je = ge._dirtyElements;
  k !== null && function(Je, Ze, Xe) {
    let gt = Je;
    for (; gt !== null; ) {
      if (Xe.has(gt)) return;
      const dt = Ze.get(gt);
      if (dt === void 0) break;
      Xe.set(gt, !1), gt = dt.__parent;
    }
  }(k, Be, je);
  const Qe = w.__key;
  ge._dirtyType = m$1, xi(E) ? je.set(Qe, !0) : ge._dirtyLeaves.add(Qe);
}
function xs(E) {
  Zr();
  const w = ni(), k = w._compositionKey;
  if (E !== k) {
    if (w._compositionKey = E, k !== null) {
      const T = Ss(k);
      T !== null && T.getWritable();
    }
    if (E !== null) {
      const T = Ss(E);
      T !== null && T.getWritable();
    }
  }
}
function Cs() {
  return Qr() ? null : ni()._compositionKey;
}
function Ss(E, w) {
  const k = (w || ei())._nodeMap.get(E);
  return k === void 0 ? null : k;
}
function vs(E, w) {
  const k = Ts(E, ni());
  return k !== void 0 ? Ss(k, w) : null;
}
function Ts(E, w) {
  return E[`__lexicalKey_${w._key}`];
}
function ks(E, w) {
  let k = E;
  for (; k != null; ) {
    const T = vs(k, w);
    if (T !== null) return T;
    k = eo(k);
  }
  return null;
}
function Ns(E) {
  const w = E._decorators, k = Object.assign({}, w);
  return E._pendingDecorators = k, k;
}
function bs(E) {
  return E.read(() => ws().getTextContent());
}
function ws() {
  return Es(ei());
}
function Es(E) {
  return E._nodeMap.get("root");
}
function Ms(E) {
  Zr();
  const w = ei();
  E !== null && (E.dirty = !0, E.setCachedNodes(null)), w._selection = E;
}
function Os(E) {
  const w = ni(), k = function(T, ge) {
    let Be = T;
    for (; Be != null; ) {
      const je = Ts(Be, ge);
      if (je !== void 0) return je;
      Be = eo(Be);
    }
    return null;
  }(E, w);
  return k === null ? E === w.getRootElement() ? Ss("root") : null : Ss(k);
}
function As(E, w) {
  return w ? E.getTextContentSize() : 0;
}
function Ds(E) {
  return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(E);
}
function Ps(E) {
  const w = [];
  let k = E;
  for (; k !== null; ) w.push(k), k = k._parentEditor;
  return w;
}
function Fs() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substring(0, 5);
}
function Ls(E) {
  return fs(E) ? E.nodeValue : null;
}
function Is(E, w, k) {
  const T = xo(co(w));
  if (T === null) return;
  const ge = T.anchorNode;
  let { anchorOffset: Be, focusOffset: je } = T;
  if (ge !== null) {
    let Qe = Ls(ge);
    const Je = ks(ge);
    if (Qe !== null && sr(Je)) {
      if (Qe === K$2 && k) {
        const Ze = k.length;
        Qe = k, Be = Ze, je = Ze;
      }
      Qe !== null && zs(Je, Qe, Be, je, E);
    }
  }
}
function zs(E, w, k, T, ge) {
  let Be = E;
  if (Be.isAttached() && (ge || !Be.isDirty())) {
    const je = Be.isComposing();
    let Qe = w;
    (je || ge) && w[w.length - 1] === K$2 && (Qe = w.slice(0, -1));
    const Je = Be.getTextContent();
    if (ge || Qe !== Je) {
      if (Qe === "") {
        if (xs(null), o || l$1 || f$2) Be.remove();
        else {
          const Ll = ni();
          setTimeout(() => {
            Ll.update(() => {
              Be.isAttached() && Be.remove();
            });
          }, 20);
        }
        return;
      }
      const Ze = Be.getParent(), Xe = Fr(), gt = Be.getTextContentSize(), dt = Cs(), fl = Be.getKey();
      if (Be.isToken() || dt !== null && fl === dt && !je || _r(Xe) && (Ze !== null && !Ze.canInsertTextBefore() && Xe.anchor.offset === 0 || Xe.anchor.key === E.__key && Xe.anchor.offset === 0 && !Be.canInsertTextBefore() && !je || Xe.focus.key === E.__key && Xe.focus.offset === gt && !Be.canInsertTextAfter() && !je)) return void Be.markDirty();
      const Jr = Pr();
      if (!_r(Jr) || k === null || T === null) return void Be.setTextContent(Qe);
      if (Jr.setTextNodeRange(Be, k, Be, T), Be.isSegmented()) {
        const Ll = ir(Be.getTextContent());
        Be.replace(Ll), Be = Ll;
      }
      Be.setTextContent(Qe);
    }
  }
}
function Ks(E, w, k) {
  const T = w[k] || !1;
  return T === "any" || T === E[k];
}
function Rs(E, w) {
  return Ks(E, w, "altKey") && Ks(E, w, "ctrlKey") && Ks(E, w, "shiftKey") && Ks(E, w, "metaKey");
}
function Bs(E, w, k) {
  return Rs(E, k) && E.key.toLowerCase() === w.toLowerCase();
}
const Ws = { ctrlKey: !r, metaKey: r }, Js = { altKey: r, ctrlKey: !r };
function $s(E) {
  return E.key === "Backspace";
}
function js(E) {
  return Bs(E, "a", Ws);
}
function Vs(E, w) {
  E.__lexicalClassNameCache === void 0 && (E.__lexicalClassNameCache = {});
  const k = E.__lexicalClassNameCache, T = k[w];
  if (T !== void 0) return T;
  const ge = E[w];
  if (typeof ge == "string") {
    const Be = d$1(ge);
    return k[w] = Be, Be;
  }
  return ge;
}
function Ys(E, w, k, T, ge) {
  if (k.size === 0) return;
  const Be = T.__type, je = T.__key, Qe = w.get(Be);
  Qe === void 0 && t(33, Be);
  const Je = Qe.klass;
  let Ze = E.get(Je);
  Ze === void 0 && (Ze = /* @__PURE__ */ new Map(), E.set(Je, Ze));
  const Xe = Ze.get(je), gt = Xe === "destroyed" && ge === "created";
  (Xe === void 0 || gt) && Ze.set(je, gt ? "updated" : ge);
}
function qs(E, w, k) {
  const T = E.getParent();
  let ge = k, Be = E;
  return T !== null && k === 0 && (ge = Be.getIndexWithinParent(), Be = T), Be.getChildAtIndex(ge - 1);
}
function Gs(E, w) {
  const k = E.offset;
  if (E.type === "element")
    return qs(E.getNode(), w, k);
  {
    const T = E.getNode();
    if (k === 0 || !w) {
      const ge = T.getPreviousSibling();
      return ge === null ? qs(T.getParentOrThrow(), w, T.getIndexWithinParent() + 0) : ge;
    }
  }
  return null;
}
function Xs(E) {
  const w = co(E).event, k = w && w.inputType;
  return k === "insertFromPaste" || k === "insertFromPasteAsQuotation";
}
function Qs(E, w, k) {
  return function(T, ge, Be) {
    const je = Ps(T);
    for (let Qe = 4; Qe >= 0; Qe--) for (let Je = 0; Je < je.length; Je++) {
      const Ze = je[Je], Xe = Ze._commands.get(ge);
      if (Xe !== void 0) {
        const gt = Xe[Qe];
        if (gt !== void 0) {
          const dt = Array.from(gt), fl = dt.length;
          let Jr = !1;
          if (_i(Ze, () => {
            for (let Ll = 0; Ll < fl; Ll++) if (dt[Ll](Be, T)) return void (Jr = !0);
          }), Jr) return Jr;
        }
      }
    }
    return !1;
  }(E, w, k);
}
function Zs(E) {
  return !ki(E) && !E.isLastChild() && !E.isInline();
}
function to(E, w) {
  const k = E._keyToDOMMap.get(w);
  return k === void 0 && t(75, w), k;
}
function eo(E) {
  const w = E.assignedSlot || E.parentElement;
  return No(w) ? w.host : w;
}
function no(E) {
  return ds(E) ? E : To(E) ? E.ownerDocument : null;
}
function io(E) {
  Zr(), ni()._updateTags.add(E);
}
function so(E) {
  Zr(), ni()._deferred.push(E);
}
function oo(E, w) {
  let k = E.getParent();
  for (; k !== null; ) {
    if (k.is(w)) return !0;
    k = k.getParent();
  }
  return !1;
}
function lo(E) {
  const w = no(E);
  return w ? w.defaultView : null;
}
function co(E) {
  const w = E._window;
  return w === null && t(78), w;
}
function ao(E) {
  return xi(E) && E.isInline() || vi(E) && E.isInline();
}
function uo(E) {
  let w = E.getParentOrThrow();
  for (; w !== null; ) {
    if (fo(w)) return w;
    w = w.getParentOrThrow();
  }
  return w;
}
function fo(E) {
  return ki(E) || xi(E) && E.isShadowRoot();
}
function go(E) {
  const w = ni(), k = E.getType(), T = es(w, k);
  T === void 0 && t(200, E.constructor.name, k);
  const { replace: ge, replaceWithKlass: Be } = T;
  if (ge !== null) {
    const je = ge(E), Qe = je.constructor;
    return Be !== null ? je instanceof Be || t(201, Be.name, Be.getType(), Qe.name, Qe.getType(), E.constructor.name, k) : je instanceof E.constructor && Qe !== E.constructor || t(202, Qe.name, Qe.getType(), E.constructor.name, k), je.__key === E.__key && t(203, E.constructor.name, k, Qe.name, Qe.getType()), je;
  }
  return E;
}
function _o(E, w) {
  !ki(E.getParent()) || xi(w) || vi(w) || t(99);
}
function po(E) {
  const w = Ss(E);
  return w === null && t(63, E), w;
}
function yo(E) {
  return (vi(E) || xi(E) && !E.canBeEmpty()) && !E.isInline();
}
function mo(E, w, k) {
  k.style.removeProperty("caret-color"), w._blockCursorElement = null;
  const T = E.parentElement;
  T !== null && T.removeChild(E);
}
function xo(E) {
  return e ? (E || window).getSelection() : null;
}
function Co(E) {
  const w = lo(E);
  return w ? w.getSelection() : null;
}
function vo(E) {
  return To(E) && E.tagName === "A";
}
function To(E) {
  return ko(E) && E.nodeType === h$1;
}
function ko(E) {
  return typeof E == "object" && E !== null && "nodeType" in E && typeof E.nodeType == "number";
}
function No(E) {
  return ko(E) && E.nodeType === p$1;
}
function bo(E) {
  const w = new RegExp(/^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|mark|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/, "i");
  return E.nodeName.match(w) !== null;
}
function wo(E) {
  const w = new RegExp(/^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/, "i");
  return E.nodeName.match(w) !== null;
}
function Eo(E) {
  if (vi(E) && !E.isInline()) return !0;
  if (!xi(E) || fo(E)) return !1;
  const w = E.getFirstChild(), k = w === null || Wn(w) || sr(w) || w.isInline();
  return !E.isInline() && E.canBeEmpty() !== !1 && k;
}
function Mo(E, w) {
  let k = E;
  for (; k !== null && k.getParent() !== null && !w(k); ) k = k.getParentOrThrow();
  return w(k) ? k : null;
}
function Oo() {
  return ni();
}
const Ao = /* @__PURE__ */ new WeakMap(), Do = /* @__PURE__ */ new Map();
function Po(E) {
  if (!E._readOnly && E.isEmpty()) return Do;
  E._readOnly || t(192);
  let w = Ao.get(E);
  return w || (w = function(k) {
    const T = /* @__PURE__ */ new Map();
    for (const [ge, Be] of k._nodeMap) {
      const je = Be.__type;
      let Qe = T.get(je);
      Qe || (Qe = /* @__PURE__ */ new Map(), T.set(je, Qe)), Qe.set(ge, Be);
    }
    return T;
  }(E), Ao.set(E, w)), w;
}
function Fo(E) {
  const w = E.constructor.clone(E);
  return w.afterCloneFrom(E), w;
}
function Lo(E, w) {
  const k = parseInt(E.style.paddingInlineStart, 10) || 0, T = Math.round(k / 40);
  w.setIndent(T);
}
function Io(E) {
  E.__lexicalUnmanaged = !0;
}
function zo(E) {
  return E.__lexicalUnmanaged === !0;
}
function Ko(E, w) {
  return function(k, T) {
    return Object.prototype.hasOwnProperty.call(k, T);
  }(E, w) && E[w] !== zn[w];
}
function Ro(E) {
  const w = Q$2 in E.prototype ? E.prototype[Q$2]() : void 0, k = /* @__PURE__ */ function(je) {
    return je === Si || je === mi || je === zn;
  }(E), T = !k && Ko(E, "getType") ? E.getType() : void 0;
  let ge, Be = T;
  if (w) if (T) ge = w[T];
  else for (const [je, Qe] of Object.entries(w)) Be = je, ge = Qe;
  if (!k && Be && (Ko(E, "getType") || (E.getType = () => Be), Ko(E, "clone") || (E.clone = (je) => (Xi(je), new E())), Ko(E, "importJSON") || (E.importJSON = ge && ge.$importJSON || ((je) => new E().updateFromJSON(je))), !Ko(E, "importDOM") && ge)) {
    const { importDOM: je } = ge;
    je && (E.importDOM = () => je);
  }
  return { ownNodeConfig: ge, ownNodeType: Be };
}
const Wo = { next: "previous", previous: "next" };
class Jo {
  constructor(w) {
    this.origin = w;
  }
  [Symbol.iterator]() {
    return _l({ hasNext: Xo, initial: this.getAdjacentCaret(), map: (w) => w, step: (w) => w.getAdjacentCaret() });
  }
  getAdjacentCaret() {
    return nl(this.getNodeAtCaret(), this.direction);
  }
  getSiblingCaret() {
    return nl(this.origin, this.direction);
  }
  remove() {
    const w = this.getNodeAtCaret();
    return w && w.remove(), this;
  }
  replaceOrInsert(w, k) {
    const T = this.getNodeAtCaret();
    return w.is(this.origin) || w.is(T) || (T === null ? this.insert(w) : T.replace(w, k)), this;
  }
  splice(w, k, T = "next") {
    const ge = T === this.direction ? k : Array.from(k).reverse();
    let Be = this;
    const je = this.getParentAtCaret(), Qe = /* @__PURE__ */ new Map();
    for (let Je = Be.getAdjacentCaret(); Je !== null && Qe.size < w; Je = Je.getAdjacentCaret()) {
      const Ze = Je.origin.getWritable();
      Qe.set(Ze.getKey(), Ze);
    }
    for (const Je of ge) {
      if (Qe.size > 0) {
        const Ze = Be.getNodeAtCaret();
        if (Ze) {
          if (Qe.delete(Ze.getKey()), Qe.delete(Je.getKey()), !(Ze.is(Je) || Be.origin.is(Je))) {
            const Xe = Je.getParent();
            Xe && Xe.is(je) && Je.remove(), Ze.replace(Je);
          }
        } else Ze === null && t(263, Array.from(Qe).join(" "));
      } else Be.insert(Je);
      Be = nl(Je, this.direction);
    }
    for (const Je of Qe.values()) Je.remove();
    return this;
  }
}
class $o extends Jo {
  type = "child";
  getLatest() {
    const w = this.origin.getLatest();
    return w === this.origin ? this : ol(w, this.direction);
  }
  getParentCaret(w = "root") {
    return nl(Vo(this.getParentAtCaret(), w), this.direction);
  }
  getFlipped() {
    const w = Uo(this.direction);
    return nl(this.getNodeAtCaret(), w) || ol(this.origin, w);
  }
  getParentAtCaret() {
    return this.origin;
  }
  getChildCaret() {
    return this;
  }
  isSameNodeCaret(w) {
    return w instanceof $o && this.direction === w.direction && this.origin.is(w.origin);
  }
  isSamePointCaret(w) {
    return this.isSameNodeCaret(w);
  }
}
const jo = { root: ki, shadowRoot: fo };
function Uo(E) {
  return Wo[E];
}
function Vo(E, w = "root") {
  return jo[w](E) ? null : E;
}
class Yo extends Jo {
  type = "sibling";
  getLatest() {
    const w = this.origin.getLatest();
    return w === this.origin ? this : nl(w, this.direction);
  }
  getSiblingCaret() {
    return this;
  }
  getParentAtCaret() {
    return this.origin.getParent();
  }
  getChildCaret() {
    return xi(this.origin) ? ol(this.origin, this.direction) : null;
  }
  getParentCaret(w = "root") {
    return nl(Vo(this.getParentAtCaret(), w), this.direction);
  }
  getFlipped() {
    const w = Uo(this.direction);
    return nl(this.getNodeAtCaret(), w) || ol(this.origin.getParentOrThrow(), w);
  }
  isSamePointCaret(w) {
    return w instanceof Yo && this.direction === w.direction && this.origin.is(w.origin);
  }
  isSameNodeCaret(w) {
    return (w instanceof Yo || w instanceof Ho) && this.direction === w.direction && this.origin.is(w.origin);
  }
}
class Ho extends Jo {
  type = "text";
  constructor(w, k) {
    super(w), this.offset = k;
  }
  getLatest() {
    const w = this.origin.getLatest();
    return w === this.origin ? this : rl(w, this.direction, this.offset);
  }
  getParentAtCaret() {
    return this.origin.getParent();
  }
  getChildCaret() {
    return null;
  }
  getParentCaret(w = "root") {
    return nl(Vo(this.getParentAtCaret(), w), this.direction);
  }
  getFlipped() {
    return rl(this.origin, Uo(this.direction), this.offset);
  }
  isSamePointCaret(w) {
    return w instanceof Ho && this.direction === w.direction && this.origin.is(w.origin) && this.offset === w.offset;
  }
  isSameNodeCaret(w) {
    return (w instanceof Yo || w instanceof Ho) && this.direction === w.direction && this.origin.is(w.origin);
  }
  getSiblingCaret() {
    return nl(this.origin, this.direction);
  }
}
function qo(E) {
  return E instanceof Ho;
}
function Xo(E) {
  return E instanceof Yo;
}
function Qo(E) {
  return E instanceof $o;
}
const Zo = { next: class extends Ho {
  direction = "next";
  getNodeAtCaret() {
    return this.origin.getNextSibling();
  }
  insert(E) {
    return this.origin.insertAfter(E), this;
  }
}, previous: class extends Ho {
  direction = "previous";
  getNodeAtCaret() {
    return this.origin.getPreviousSibling();
  }
  insert(E) {
    return this.origin.insertBefore(E), this;
  }
} }, tl = { next: class extends Yo {
  direction = "next";
  getNodeAtCaret() {
    return this.origin.getNextSibling();
  }
  insert(E) {
    return this.origin.insertAfter(E), this;
  }
}, previous: class extends Yo {
  direction = "previous";
  getNodeAtCaret() {
    return this.origin.getPreviousSibling();
  }
  insert(E) {
    return this.origin.insertBefore(E), this;
  }
} }, el = { next: class extends $o {
  direction = "next";
  getNodeAtCaret() {
    return this.origin.getFirstChild();
  }
  insert(E) {
    return this.origin.splice(0, 0, [E]), this;
  }
}, previous: class extends $o {
  direction = "previous";
  getNodeAtCaret() {
    return this.origin.getLastChild();
  }
  insert(E) {
    return this.origin.splice(this.origin.getChildrenSize(), 0, [E]), this;
  }
} };
function nl(E, w) {
  return E ? new tl[w](E) : null;
}
function rl(E, w, k) {
  return E ? new Zo[w](E, il(E, k)) : null;
}
function il(E, w) {
  const k = E.getTextContentSize();
  let T = w === "next" ? k : w === "previous" ? 0 : w;
  return (T < 0 || T > k) && (function(ge, ...Be) {
    const je = new URL("https://lexical.dev/docs/error"), Qe = new URLSearchParams();
    Qe.append("code", ge);
    for (const Je of Be) Qe.append("v", Je);
    je.search = Qe.toString(), console.warn(`Minified Lexical warning #${ge}; visit ${je.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
  }(284, String(w), String(k), E.getKey()), T = T < 0 ? 0 : k), T;
}
function sl(E, w) {
  return new ul(E, w);
}
function ol(E, w) {
  return xi(E) ? new el[w](E) : null;
}
function ll(E) {
  return E && E.getChildCaret() || E;
}
function cl(E) {
  return E && ll(E.getAdjacentCaret());
}
class al {
  type = "node-caret-range";
  constructor(w, k, T) {
    this.anchor = w, this.focus = k, this.direction = T;
  }
  getLatest() {
    const w = this.anchor.getLatest(), k = this.focus.getLatest();
    return w === this.anchor && k === this.focus ? this : new al(w, k, this.direction);
  }
  isCollapsed() {
    return this.anchor.isSamePointCaret(this.focus);
  }
  getTextSlices() {
    const w = (ge) => {
      const Be = this[ge].getLatest();
      return qo(Be) ? function(je, Qe) {
        const { direction: Je, origin: Ze } = je, Xe = il(Ze, Qe === "focus" ? Uo(Je) : Je);
        return sl(je, Xe - je.offset);
      }(Be, ge) : null;
    }, k = w("anchor"), T = w("focus");
    if (k && T) {
      const { caret: ge } = k, { caret: Be } = T;
      if (ge.isSameNodeCaret(Be)) return [sl(ge, Be.offset - ge.offset), null];
    }
    return [k, T];
  }
  iterNodeCarets(w = "root") {
    const k = qo(this.anchor) ? this.anchor.getSiblingCaret() : this.anchor.getLatest(), T = this.focus.getLatest(), ge = qo(T), Be = (je) => je.isSameNodeCaret(T) ? null : cl(je) || je.getParentCaret(w);
    return _l({ hasNext: (je) => je !== null && !(ge && T.isSameNodeCaret(je)), initial: k.isSameNodeCaret(T) ? null : Be(k), map: (je) => je, step: Be });
  }
  [Symbol.iterator]() {
    return this.iterNodeCarets("root");
  }
}
class ul {
  type = "slice";
  constructor(w, k) {
    this.caret = w, this.distance = k;
  }
  getSliceIndices() {
    const { distance: w, caret: { offset: k } } = this, T = k + w;
    return T < k ? [T, k] : [k, T];
  }
  getTextContent() {
    const [w, k] = this.getSliceIndices();
    return this.caret.origin.getTextContent().slice(w, k);
  }
  getTextContentSize() {
    return Math.abs(this.distance);
  }
  removeTextSlice() {
    const { caret: { origin: w, direction: k } } = this, [T, ge] = this.getSliceIndices(), Be = w.getTextContent();
    return rl(w.setTextContent(Be.slice(0, T) + Be.slice(ge)), k, T);
  }
}
function dl(E) {
  return gl(E, nl(ws(), E.direction));
}
function hl(E) {
  return gl(E, E);
}
function gl(E, w) {
  return E.direction !== w.direction && t(265), new al(E, w, E.direction);
}
function _l(E) {
  const { initial: w, hasNext: k, step: T, map: ge } = E;
  let Be = w;
  return { [Symbol.iterator]() {
    return this;
  }, next() {
    if (!k(Be)) return { done: !0, value: void 0 };
    const je = { done: !1, value: ge(Be) };
    return Be = T(Be), je;
  } };
}
function pl(E, w) {
  const k = Cl(E.origin, w.origin);
  switch (k === null && t(275, E.origin.getKey(), w.origin.getKey()), k.type) {
    case "same": {
      const T = E.type === "text", ge = w.type === "text";
      return T && ge ? function(Be, je) {
        return Math.sign(Be - je);
      }(E.offset, w.offset) : E.type === w.type ? 0 : T ? -1 : ge ? 1 : E.type === "child" ? -1 : 1;
    }
    case "ancestor":
      return E.type === "child" ? -1 : 1;
    case "descendant":
      return w.type === "child" ? 1 : -1;
    case "branch":
      return yl(k);
  }
}
function yl(E) {
  const { a: w, b: k } = E, T = w.__key, ge = k.__key;
  let Be = w, je = k;
  for (; Be && je; Be = Be.getNextSibling(), je = je.getNextSibling()) {
    if (Be.__key === ge) return -1;
    if (je.__key === T) return 1;
  }
  return Be === null ? 1 : -1;
}
function ml(E, w) {
  return w.is(E);
}
function xl(E) {
  return xi(E) ? [E.getLatest(), null] : [E.getParent(), E.getLatest()];
}
function Cl(E, w) {
  if (E.is(w)) return { commonAncestor: E, type: "same" };
  const k = /* @__PURE__ */ new Map();
  for (let [T, ge] = xl(E); T; ge = T, T = T.getParent()) k.set(T, ge);
  for (let [T, ge] = xl(w); T; ge = T, T = T.getParent()) {
    const Be = k.get(T);
    if (Be !== void 0) return Be === null ? (ml(E, T) || t(276), { commonAncestor: T, type: "ancestor" }) : ge === null ? (ml(w, T) || t(277), { commonAncestor: T, type: "descendant" }) : ((xi(Be) || ml(E, Be)) && (xi(ge) || ml(w, ge)) && T.is(Be.getParent()) && T.is(ge.getParent()) || t(278), { a: Be, b: ge, commonAncestor: T, type: "branch" });
  }
  return null;
}
function Sl(E, w) {
  const { type: k, key: T, offset: ge } = E, Be = po(E.key);
  return k === "text" ? (sr(Be) || t(266, Be.getType(), T), rl(Be, w, ge)) : (xi(Be) || t(267, Be.getType(), T), Fl(Be, E.offset, w));
}
function vl(E, w) {
  const { origin: k, direction: T } = w, ge = T === "next";
  qo(w) ? E.set(k.getKey(), w.offset, "text") : Xo(w) ? sr(k) ? E.set(k.getKey(), il(k, T), "text") : E.set(k.getParentOrThrow().getKey(), k.getIndexWithinParent() + (ge ? 1 : 0), "element") : (Qo(w) && xi(k) || t(268), E.set(k.getKey(), ge ? 0 : k.getChildrenSize(), "element"));
}
function Tl(E) {
  const w = Pr(), k = _r(w) ? w : Mr();
  return kl(k, E), Ms(k), k;
}
function kl(E, w) {
  vl(E.anchor, w.anchor), vl(E.focus, w.focus);
}
function Nl(E) {
  const { anchor: w, focus: k } = E, T = Sl(w, "next"), ge = Sl(k, "next"), Be = pl(T, ge) <= 0 ? "next" : "previous";
  return gl(Dl(T, Be), Dl(ge, Be));
}
function bl(E) {
  const { direction: w, origin: k } = E, T = nl(k, Uo(w)).getNodeAtCaret();
  return T ? nl(T, w) : ol(k.getParentOrThrow(), w);
}
function wl(E, w = "root") {
  const k = [E];
  for (let T = Qo(E) ? E.getParentCaret(w) : E.getSiblingCaret(); T !== null; T = T.getParentCaret(w)) k.push(bl(T));
  return k;
}
function El(E) {
  return !!E && E.origin.isAttached();
}
function Ml(E, w = "removeEmptySlices") {
  if (E.isCollapsed()) return E;
  const k = "root", T = "next";
  let ge = w;
  const Be = Pl(E, T), je = wl(Be.anchor, k), Qe = wl(Be.focus.getFlipped(), k), Je = /* @__PURE__ */ new Set(), Ze = [];
  for (const Jr of Be.iterNodeCarets(k)) if (Qo(Jr)) Je.add(Jr.origin.getKey());
  else if (Xo(Jr)) {
    const { origin: Ll } = Jr;
    xi(Ll) && !Je.has(Ll.getKey()) || Ze.push(Ll);
  }
  for (const Jr of Ze) Jr.remove();
  for (const Jr of Be.getTextSlices()) {
    if (!Jr) continue;
    const { origin: Ll } = Jr.caret, $l = Ll.getTextContentSize(), Il = bl(nl(Ll, T)), Wr = Ll.getMode();
    if (Math.abs(Jr.distance) === $l && ge === "removeEmptySlices" || Wr === "token" && Jr.distance !== 0) Il.remove();
    else if (Jr.distance !== 0) {
      ge = "removeEmptySlices";
      let Bl = Jr.removeTextSlice();
      const zl = Jr.caret.origin;
      if (Wr === "segmented") {
        const Vl = Bl.origin, Rl = ir(Vl.getTextContent()).setStyle(Vl.getStyle()).setFormat(Vl.getFormat());
        Il.replaceOrInsert(Rl), Bl = rl(Rl, T, Bl.offset);
      }
      zl.is(je[0].origin) && (je[0] = Bl), zl.is(Qe[0].origin) && (Qe[0] = Bl.getFlipped());
    }
  }
  let Xe, gt;
  for (const Jr of je) if (El(Jr)) {
    Xe = Ol(Jr);
    break;
  }
  for (const Jr of Qe) if (El(Jr)) {
    gt = Ol(Jr);
    break;
  }
  const dt = function(Jr, Ll, $l) {
    if (!Jr || !Ll) return null;
    const Il = Jr.getParentAtCaret(), Wr = Ll.getParentAtCaret();
    if (!Il || !Wr) return null;
    const Bl = Il.getParents().reverse();
    Bl.push(Il);
    const zl = Wr.getParents().reverse();
    zl.push(Wr);
    const Vl = Math.min(Bl.length, zl.length);
    let Rl;
    for (Rl = 0; Rl < Vl && Bl[Rl] === zl[Rl]; Rl++) ;
    const Wl = (Ul, Ql) => {
      let Xl;
      for (let Gl = Rl; Gl < Ul.length; Gl++) {
        const tu = Ul[Gl];
        if (fo(tu)) return;
        !Xl && Ql(tu) && (Xl = tu);
      }
      return Xl;
    }, Hl = Wl(Bl, Eo), jl = Hl && Wl(zl, (Ul) => $l.has(Ul.getKey()) && Eo(Ul));
    return Hl && jl ? [Hl, jl] : null;
  }(Xe, gt, Je);
  if (dt) {
    const [Jr, Ll] = dt;
    ol(Jr, "previous").splice(0, Ll.getChildren()), Ll.remove();
  }
  const fl = [Xe, gt, ...je, ...Qe].find(El);
  if (fl)
    return hl(Dl(Ol(fl), E.direction));
  t(269, JSON.stringify(je.map((Jr) => Jr.origin.__key)));
}
function Ol(E) {
  const w = function(ge) {
    let Be = ge;
    for (; Qo(Be); ) {
      const je = cl(Be);
      if (!Qo(je)) break;
      Be = je;
    }
    return Be;
  }(E.getLatest()), { direction: k } = w;
  if (sr(w.origin)) return qo(w) ? w : rl(w.origin, k, k);
  const T = w.getAdjacentCaret();
  return Xo(T) && sr(T.origin) ? rl(T.origin, k, Uo(k)) : w;
}
function Al(E) {
  return qo(E) && E.offset !== il(E.origin, E.direction);
}
function Dl(E, w) {
  return E.direction === w ? E : E.getFlipped();
}
function Pl(E, w) {
  return E.direction === w ? E : gl(Dl(E.focus, w), Dl(E.anchor, w));
}
function Fl(E, w, k) {
  let T = ol(E, "next");
  for (let ge = 0; ge < w; ge++) {
    const Be = T.getAdjacentCaret();
    if (Be === null) break;
    T = Be;
  }
  return Dl(T, k);
}
const m = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, u = m ? useLayoutEffect : useEffect, p = { tag: Ai };
function f$1({ initialConfig: E, children: w }) {
  const k = useMemo(() => {
    const { theme: T, namespace: ge, nodes: Be, onError: je, editorState: Qe, html: Je } = E, Ze = t$1(null, T), Xe = Hi({ editable: E.editable, html: Je, namespace: ge, nodes: Be, onError: (gt) => je(gt, Xe), theme: T });
    return function(gt, dt) {
      if (dt !== null) {
        if (dt === void 0) gt.update(() => {
          const fl = ws();
          if (fl.isEmpty()) {
            const Jr = Bi();
            fl.append(Jr);
            const Ll = m ? document.activeElement : null;
            (Pr() !== null || Ll !== null && Ll === gt.getRootElement()) && Jr.select();
          }
        }, p);
        else if (dt !== null) switch (typeof dt) {
          case "string": {
            const fl = gt.parseEditorState(dt);
            gt.setEditorState(fl, p);
            break;
          }
          case "object":
            gt.setEditorState(dt, p);
            break;
          case "function":
            gt.update(() => {
              ws().isEmpty() && dt(gt);
            }, p);
        }
      }
    }(Xe, Qe), [Xe, Ze];
  }, []);
  return u(() => {
    const T = E.editable, [ge] = k;
    ge.setEditable(T === void 0 || T);
  }, []), jsx(r$1.Provider, { value: k, children: w });
}
const C = /* @__PURE__ */ new Map();
function I$3(E) {
  const w = {};
  if (!E) return w;
  const k = E.split(";");
  for (const T of k) if (T !== "") {
    const [ge, Be] = T.split(/:([^]+)/);
    ge && Be && (w[ge.trim()] = Be.trim());
  }
  return w;
}
function B(E) {
  let w = C.get(E);
  return w === void 0 && (w = I$3(E), C.set(E, w)), w;
}
const M$2 = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, R$1 = M$2 && "documentMode" in document ? document.documentMode : null;
!(!M$2 || !("InputEvent" in window) || R$1) && "getTargetRanges" in new window.InputEvent("input");
function I$2(...E) {
  const w = [];
  for (const k of E) if (k && typeof k == "string") for (const [T] of k.matchAll(/\S+/g)) w.push(T);
  return w;
}
function rt$1(E, ...w) {
  const k = I$2(...w);
  k.length > 0 && E.classList.add(...k);
}
function it$2(E, ...w) {
  const k = I$2(...w);
  k.length > 0 && E.classList.remove(...k);
}
function ct$2(E) {
  return E ? E.getAdjacentCaret() : null;
}
function _t$1(E, w) {
  const k = [], T = Array.from(E).reverse();
  for (let ge = T.pop(); ge !== void 0; ge = T.pop()) if (w(ge)) k.push(ge);
  else if (xi(ge)) for (const Be of Kt(ge)) T.push(Be);
  return k;
}
function Kt(E) {
  return Ht(ol(E, "previous"));
}
function Ht(E) {
  return _l({ hasNext: Xo, initial: E.getAdjacentCaret(), map: (w) => w.origin.getLatest(), step: (w) => w.getAdjacentCaret() });
}
const mt = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, ft = mt && "documentMode" in document ? document.documentMode : null;
!(!mt || !("InputEvent" in window) || ft) && "getTargetRanges" in new window.InputEvent("input");
class Dt extends mi {
  static getType() {
    return "quote";
  }
  static clone(w) {
    return new Dt(w.__key);
  }
  createDOM(w) {
    const k = document.createElement("blockquote");
    return rt$1(k, w.theme.quote), k;
  }
  updateDOM(w, k) {
    return !1;
  }
  static importDOM() {
    return { blockquote: (w) => ({ conversion: Tt, priority: 0 }) };
  }
  exportDOM(w) {
    const { element: k } = super.exportDOM(w);
    if (To(k)) {
      this.isEmpty() && k.append(document.createElement("br"));
      const T = this.getFormatType();
      T && (k.style.textAlign = T);
      const ge = this.getDirection();
      ge && (k.dir = ge);
    }
    return { element: k };
  }
  static importJSON(w) {
    return xt().updateFromJSON(w);
  }
  insertNewAfter(w, k) {
    const T = Bi(), ge = this.getDirection();
    return T.setDirection(ge), this.insertAfter(T, k), T;
  }
  collapseAtStart() {
    const w = Bi();
    return this.getChildren().forEach((k) => w.append(k)), this.replace(w), !0;
  }
  canMergeWhenEmpty() {
    return !0;
  }
}
function xt() {
  return go(new Dt());
}
class Nt extends mi {
  static getType() {
    return "heading";
  }
  static clone(w) {
    return new Nt(w.__tag, w.__key);
  }
  constructor(w, k) {
    super(k), this.__tag = w;
  }
  getTag() {
    return this.__tag;
  }
  setTag(w) {
    const k = this.getWritable();
    return this.__tag = w, k;
  }
  createDOM(w) {
    const k = this.__tag, T = document.createElement(k), ge = w.theme.heading;
    if (ge !== void 0) {
      const Be = ge[k];
      rt$1(T, Be);
    }
    return T;
  }
  updateDOM(w, k, T) {
    return w.__tag !== this.__tag;
  }
  static importDOM() {
    return { h1: (w) => ({ conversion: Ot, priority: 0 }), h2: (w) => ({ conversion: Ot, priority: 0 }), h3: (w) => ({ conversion: Ot, priority: 0 }), h4: (w) => ({ conversion: Ot, priority: 0 }), h5: (w) => ({ conversion: Ot, priority: 0 }), h6: (w) => ({ conversion: Ot, priority: 0 }), p: (w) => {
      const k = w.firstChild;
      return k !== null && Et(k) ? { conversion: () => ({ node: null }), priority: 3 } : null;
    }, span: (w) => Et(w) ? { conversion: (k) => ({ node: _t("h1") }), priority: 3 } : null };
  }
  exportDOM(w) {
    const { element: k } = super.exportDOM(w);
    if (To(k)) {
      this.isEmpty() && k.append(document.createElement("br"));
      const T = this.getFormatType();
      T && (k.style.textAlign = T);
      const ge = this.getDirection();
      ge && (k.dir = ge);
    }
    return { element: k };
  }
  static importJSON(w) {
    return _t(w.tag).updateFromJSON(w);
  }
  updateFromJSON(w) {
    return super.updateFromJSON(w).setTag(w.tag);
  }
  exportJSON() {
    return { ...super.exportJSON(), tag: this.getTag() };
  }
  insertNewAfter(w, k = !0) {
    const T = w ? w.anchor.offset : 0, ge = this.getLastDescendant(), Be = !ge || w && w.anchor.key === ge.getKey() && T === ge.getTextContentSize() || !w ? Bi() : _t(this.getTag()), je = this.getDirection();
    if (Be.setDirection(je), this.insertAfter(Be, k), T === 0 && !this.isEmpty() && w) {
      const Qe = Bi();
      Qe.select(), this.replace(Qe, !0);
    }
    return Be;
  }
  collapseAtStart() {
    const w = this.isEmpty() ? Bi() : _t(this.getTag());
    return this.getChildren().forEach((k) => w.append(k)), this.replace(w), !0;
  }
  extractWithChild() {
    return !0;
  }
}
function Et(E) {
  return E.nodeName.toLowerCase() === "span" && E.style.fontSize === "26pt";
}
function Ot(E) {
  const w = E.nodeName.toLowerCase();
  let k = null;
  return w !== "h1" && w !== "h2" && w !== "h3" && w !== "h4" && w !== "h5" && w !== "h6" || (k = _t(w), E.style !== null && (Lo(E, k), k.setFormat(E.style.textAlign))), { node: k };
}
function Tt(E) {
  const w = xt();
  return E.style !== null && (w.setFormat(E.style.textAlign), Lo(E, w)), { node: w };
}
function _t(E = "h1") {
  return go(new Nt(E));
}
function I$1(E, ...w) {
  const k = new URL("https://lexical.dev/docs/error"), T = new URLSearchParams();
  T.append("code", E);
  for (const ge of w) T.append("v", ge);
  throw k.search = T.toString(), Error(`Minified Lexical error #${E}; visit ${k.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function M$1(E) {
  let w = 1, k = E.getParent();
  for (; k != null; ) {
    if (nt(k)) {
      const T = k.getParent();
      if (at(T)) {
        w++, k = T.getParent();
        continue;
      }
      I$1(40);
    }
    return w;
  }
  return w;
}
function K$1(E) {
  return nt(E) && at(E.getFirstChild());
}
function W$1(E) {
  return et().append(E);
}
function U$1(E, w) {
  E.splice(E.getChildrenSize(), 0, w);
}
function z$1(E, w) {
  const k = E.getLastChild(), T = w.getFirstChild();
  k && T && K$1(k) && K$1(T) && (z$1(k.getFirstChild(), T.getFirstChild()), T.remove());
  const ge = w.getChildren();
  ge.length > 0 && E.append(...ge), w.remove();
}
function H(E) {
  const w = E.getListType() !== "check";
  let k = E.getStart();
  for (const T of E.getChildren()) nt(T) && (T.getValue() !== k && T.setValue(k), w && T.getLatest().__checked != null && T.setChecked(void 0), at(T.getFirstChild()) || k++);
}
function X$1(E) {
  const w = /* @__PURE__ */ new Set();
  if (K$1(E) || w.has(E.getKey())) return;
  const k = E.getParent(), T = E.getNextSibling(), ge = E.getPreviousSibling();
  if (K$1(T) && K$1(ge)) {
    const Be = ge.getFirstChild();
    if (at(Be)) {
      Be.append(E);
      const je = T.getFirstChild();
      at(je) && (U$1(Be, je.getChildren()), T.remove(), w.add(T.getKey()));
    }
  } else if (K$1(T)) {
    const Be = T.getFirstChild();
    if (at(Be)) {
      const je = Be.getFirstChild();
      je !== null && je.insertBefore(E);
    }
  } else if (K$1(ge)) {
    const Be = ge.getFirstChild();
    at(Be) && Be.append(E);
  } else if (at(k)) {
    const Be = et().setTextFormat(E.getTextFormat()).setTextStyle(E.getTextStyle()), je = ct$1(k.getListType()).setTextFormat(k.getTextFormat()).setTextStyle(k.getTextStyle());
    Be.append(je), je.append(E), ge ? ge.insertAfter(Be) : T ? T.insertBefore(Be) : k.append(Be);
  }
}
function j(E) {
  if (K$1(E)) return;
  const w = E.getParent(), k = w ? w.getParent() : void 0;
  if (at(k ? k.getParent() : void 0) && nt(k) && at(w)) {
    const T = w ? w.getFirstChild() : void 0, ge = w ? w.getLastChild() : void 0;
    if (E.is(T)) k.insertBefore(E), w.isEmpty() && k.remove();
    else if (E.is(ge)) k.insertAfter(E), w.isEmpty() && k.remove();
    else {
      const Be = w.getListType(), je = et(), Qe = ct$1(Be);
      je.append(Qe), E.getPreviousSiblings().forEach((Xe) => Qe.append(Xe));
      const Je = et(), Ze = ct$1(Be);
      Je.append(Ze), U$1(Ze, E.getNextSiblings()), k.insertBefore(je), k.insertAfter(Je), k.replace(E);
    }
  }
}
function Q$1(...E) {
  const w = [];
  for (const k of E) if (k && typeof k == "string") for (const [T] of k.matchAll(/\S+/g)) w.push(T);
  return w;
}
class Y extends mi {
  $config() {
    return this.config("listitem", { $transform: (w) => {
      if (w.__checked == null) return;
      const k = w.getParent();
      at(k) && k.getListType() !== "check" && w.getChecked() != null && w.setChecked(void 0);
    }, extends: mi, importDOM: { li: () => ({ conversion: Z, priority: 0 }) } });
  }
  constructor(w = 1, k = void 0, T) {
    super(T), this.__value = w === void 0 ? 1 : w, this.__checked = k;
  }
  afterCloneFrom(w) {
    super.afterCloneFrom(w), this.__value = w.__value, this.__checked = w.__checked;
  }
  createDOM(w) {
    const k = document.createElement("li");
    return this.updateListItemDOM(null, k, w), k;
  }
  updateListItemDOM(w, k, T) {
    const ge = this.getParent();
    at(ge) && ge.getListType() === "check" && function(Qe, Je, Ze, Xe) {
      at(Je.getFirstChild()) ? (Qe.removeAttribute("role"), Qe.removeAttribute("tabIndex"), Qe.removeAttribute("aria-checked")) : (Qe.setAttribute("role", "checkbox"), Qe.setAttribute("tabIndex", "-1"), Ze && Je.__checked === Ze.__checked || Qe.setAttribute("aria-checked", Je.getChecked() ? "true" : "false"));
    }(k, this, w), k.value = this.__value, function(Qe, Je, Ze) {
      const Xe = [], gt = [], dt = Je.list, fl = dt ? dt.listitem : void 0;
      let Jr;
      if (dt && dt.nested && (Jr = dt.nested.listitem), fl !== void 0 && Xe.push(...Q$1(fl)), dt) {
        const Ll = Ze.getParent(), $l = at(Ll) && Ll.getListType() === "check", Il = Ze.getChecked();
        $l && !Il || gt.push(dt.listitemUnchecked), $l && Il || gt.push(dt.listitemChecked), $l && Xe.push(Il ? dt.listitemChecked : dt.listitemUnchecked);
      }
      if (Jr !== void 0) {
        const Ll = Q$1(Jr);
        Ze.getChildren().some(($l) => at($l)) ? Xe.push(...Ll) : gt.push(...Ll);
      }
      gt.length > 0 && it$2(Qe, ...gt), Xe.length > 0 && rt$1(Qe, ...Xe);
    }(k, T.theme, this);
    const Be = w ? w.__style : "", je = this.__style;
    Be !== je && (je === "" ? k.removeAttribute("style") : k.style.cssText = je), function(Qe, Je, Ze) {
      const Xe = B(Je.__textStyle);
      for (const gt in Xe) Qe.style.setProperty(`--listitem-marker-${gt}`, Xe[gt]);
      if (Ze) for (const gt in B(Ze.__textStyle)) gt in Xe || Qe.style.removeProperty(`--listitem-marker-${gt}`);
    }(k, this, w);
  }
  updateDOM(w, k, T) {
    const ge = k;
    return this.updateListItemDOM(w, ge, T), !1;
  }
  updateFromJSON(w) {
    return super.updateFromJSON(w).setValue(w.value).setChecked(w.checked);
  }
  exportDOM(w) {
    const k = this.createDOM(w._config), T = this.getFormatType();
    T && (k.style.textAlign = T);
    const ge = this.getDirection();
    return ge && (k.dir = ge), { element: k };
  }
  exportJSON() {
    return { ...super.exportJSON(), checked: this.getChecked(), value: this.getValue() };
  }
  append(...w) {
    for (let k = 0; k < w.length; k++) {
      const T = w[k];
      if (xi(T) && this.canMergeWith(T)) {
        const ge = T.getChildren();
        this.append(...ge), T.remove();
      } else super.append(T);
    }
    return this;
  }
  replace(w, k) {
    if (nt(w)) return super.replace(w);
    this.setIndent(0);
    const T = this.getParentOrThrow();
    if (!at(T)) return w;
    if (T.__first === this.getKey()) T.insertBefore(w);
    else if (T.__last === this.getKey()) T.insertAfter(w);
    else {
      const ge = ct$1(T.getListType());
      let Be = this.getNextSibling();
      for (; Be; ) {
        const je = Be;
        Be = Be.getNextSibling(), ge.append(je);
      }
      T.insertAfter(w), w.insertAfter(ge);
    }
    return k && (xi(w) || I$1(139), this.getChildren().forEach((ge) => {
      w.append(ge);
    })), this.remove(), T.getChildrenSize() === 0 && T.remove(), w;
  }
  insertAfter(w, k = !0) {
    const T = this.getParentOrThrow();
    if (at(T) || I$1(39), nt(w)) return super.insertAfter(w, k);
    const ge = this.getNextSiblings();
    if (T.insertAfter(w, k), ge.length !== 0) {
      const Be = ct$1(T.getListType());
      ge.forEach((je) => Be.append(je)), w.insertAfter(Be, k);
    }
    return w;
  }
  remove(w) {
    const k = this.getPreviousSibling(), T = this.getNextSibling();
    super.remove(w), k && T && K$1(k) && K$1(T) && (z$1(k.getFirstChild(), T.getFirstChild()), T.remove());
  }
  insertNewAfter(w, k = !0) {
    const T = et().updateFromJSON(this.exportJSON()).setChecked(!this.getChecked() && void 0);
    return this.insertAfter(T, k), T;
  }
  collapseAtStart(w) {
    const k = Bi();
    this.getChildren().forEach((je) => k.append(je));
    const T = this.getParentOrThrow(), ge = T.getParentOrThrow(), Be = nt(ge);
    if (T.getChildrenSize() === 1) if (Be) T.remove(), ge.select();
    else {
      T.insertBefore(k), T.remove();
      const je = w.anchor, Qe = w.focus, Je = k.getKey();
      je.type === "element" && je.getNode().is(this) && je.set(Je, je.offset, "element"), Qe.type === "element" && Qe.getNode().is(this) && Qe.set(Je, Qe.offset, "element");
    }
    else T.insertBefore(k), this.remove();
    return !0;
  }
  getValue() {
    return this.getLatest().__value;
  }
  setValue(w) {
    const k = this.getWritable();
    return k.__value = w, k;
  }
  getChecked() {
    const w = this.getLatest();
    let k;
    const T = this.getParent();
    return at(T) && (k = T.getListType()), k === "check" ? !!w.__checked : void 0;
  }
  setChecked(w) {
    const k = this.getWritable();
    return k.__checked = w, k;
  }
  toggleChecked() {
    const w = this.getWritable();
    return w.setChecked(!w.__checked);
  }
  getIndent() {
    const w = this.getParent();
    if (w === null || !this.isAttached()) return this.getLatest().__indent;
    let k = w.getParentOrThrow(), T = 0;
    for (; nt(k); ) k = k.getParentOrThrow().getParentOrThrow(), T++;
    return T;
  }
  setIndent(w) {
    typeof w != "number" && I$1(117), (w = Math.floor(w)) >= 0 || I$1(199);
    let k = this.getIndent();
    for (; k !== w; ) k < w ? (X$1(this), k++) : (j(this), k--);
    return this;
  }
  canInsertAfter(w) {
    return nt(w);
  }
  canReplaceWith(w) {
    return nt(w);
  }
  canMergeWith(w) {
    return nt(w) || Wi(w);
  }
  extractWithChild(w, k) {
    if (!_r(k)) return !1;
    const T = k.anchor.getNode(), ge = k.focus.getNode();
    return this.isParentOf(T) && this.isParentOf(ge) && this.getTextContent().length === k.getTextContent().length;
  }
  isParentRequired() {
    return !0;
  }
  createParentElementNode() {
    return ct$1("bullet");
  }
  canMergeWhenEmpty() {
    return !0;
  }
}
function Z(E) {
  if (E.classList.contains("task-list-item")) {
    for (const k of E.children) if (k.tagName === "INPUT") return tt(k);
  }
  const w = E.getAttribute("aria-checked");
  return { node: et(w === "true" || w !== "false" && void 0) };
}
function tt(E) {
  return E.getAttribute("type") !== "checkbox" ? { node: null } : { node: et(E.hasAttribute("checked")) };
}
function et(E) {
  return go(new Y(void 0, E));
}
function nt(E) {
  return E instanceof Y;
}
class rt extends mi {
  $config() {
    return this.config("list", { $transform: (w) => {
      (function(k) {
        const T = k.getNextSibling();
        at(T) && k.getListType() === T.getListType() && z$1(k, T);
      })(w), H(w);
    }, extends: mi, importDOM: { ol: () => ({ conversion: ot$1, priority: 0 }), ul: () => ({ conversion: ot$1, priority: 0 }) } });
  }
  constructor(w = "number", k = 1, T) {
    super(T);
    const ge = lt$1[w] || w;
    this.__listType = ge, this.__tag = ge === "number" ? "ol" : "ul", this.__start = k;
  }
  afterCloneFrom(w) {
    super.afterCloneFrom(w), this.__listType = w.__listType, this.__tag = w.__tag, this.__start = w.__start;
  }
  getTag() {
    return this.getLatest().__tag;
  }
  setListType(w) {
    const k = this.getWritable();
    return k.__listType = w, k.__tag = w === "number" ? "ol" : "ul", k;
  }
  getListType() {
    return this.getLatest().__listType;
  }
  getStart() {
    return this.getLatest().__start;
  }
  setStart(w) {
    const k = this.getWritable();
    return k.__start = w, k;
  }
  createDOM(w, k) {
    const T = this.__tag, ge = document.createElement(T);
    return this.__start !== 1 && ge.setAttribute("start", String(this.__start)), ge.__lexicalListType = this.__listType, it$1(ge, w.theme, this), ge;
  }
  updateDOM(w, k, T) {
    return w.__tag !== this.__tag || (it$1(k, T.theme, this), !1);
  }
  updateFromJSON(w) {
    return super.updateFromJSON(w).setListType(w.listType).setStart(w.start);
  }
  exportDOM(w) {
    const k = this.createDOM(w._config, w);
    return To(k) && (this.__start !== 1 && k.setAttribute("start", String(this.__start)), this.__listType === "check" && k.setAttribute("__lexicalListType", "check")), { element: k };
  }
  exportJSON() {
    return { ...super.exportJSON(), listType: this.getListType(), start: this.getStart(), tag: this.getTag() };
  }
  canBeEmpty() {
    return !1;
  }
  canIndent() {
    return !1;
  }
  splice(w, k, T) {
    let ge = T;
    for (let Be = 0; Be < T.length; Be++) {
      const je = T[Be];
      nt(je) || (ge === T && (ge = [...T]), ge[Be] = et().append(!xi(je) || at(je) || je.isInline() ? je : ir(je.getTextContent())));
    }
    return super.splice(w, k, ge);
  }
  extractWithChild(w) {
    return nt(w);
  }
}
function it$1(E, w, k) {
  const T = [], ge = [], Be = w.list;
  if (Be !== void 0) {
    const je = Be[`${k.__tag}Depth`] || [], Qe = M$1(k) - 1, Je = Qe % je.length, Ze = je[Je], Xe = Be[k.__tag];
    let gt;
    const dt = Be.nested, fl = Be.checklist;
    if (dt !== void 0 && dt.list && (gt = dt.list), Xe !== void 0 && T.push(Xe), fl !== void 0 && k.__listType === "check" && T.push(fl), Ze !== void 0) {
      T.push(...Q$1(Ze));
      for (let Jr = 0; Jr < je.length; Jr++) Jr !== Je && ge.push(k.__tag + Jr);
    }
    if (gt !== void 0) {
      const Jr = Q$1(gt);
      Qe > 1 ? T.push(...Jr) : ge.push(...Jr);
    }
  }
  ge.length > 0 && it$2(E, ...ge), T.length > 0 && rt$1(E, ...T);
}
function st$1(E) {
  const w = [];
  for (let k = 0; k < E.length; k++) {
    const T = E[k];
    if (nt(T)) {
      w.push(T);
      const ge = T.getChildren();
      ge.length > 1 && ge.forEach((Be) => {
        at(Be) && w.push(W$1(Be));
      });
    } else w.push(W$1(T));
  }
  return w;
}
function ot$1(E) {
  const w = E.nodeName.toLowerCase();
  let k = null;
  return w === "ol" ? k = ct$1("number", E.start) : w === "ul" && (k = function(T) {
    if (T.getAttribute("__lexicallisttype") === "check" || T.classList.contains("contains-task-list")) return !0;
    for (const ge of T.childNodes) if (To(ge) && ge.hasAttribute("aria-checked")) return !0;
    return !1;
  }(E) ? ct$1("check") : ct$1("bullet")), { after: st$1, node: k };
}
const lt$1 = { ol: "number", ul: "bullet" };
function ct$1(E = "number", w = 1) {
  return go(new rt(E, w));
}
function at(E) {
  return E instanceof rt;
}
var commonjsGlobal = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, prism = { exports: {} };
(function(E) {
  var w = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */
  var k = function(T) {
    var ge = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, Be = 0, je = {}, Qe = {
      /**
       * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
       * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
       * additional languages or plugins yourself.
       *
       * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
       *
       * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.manual = true;
       * // add a new <script> to load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      manual: T.Prism && T.Prism.manual,
      /**
       * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
       * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
       * own worker, you don't want it to do this.
       *
       * By setting this value to `true`, Prism will not add its own listeners to the worker.
       *
       * You obviously have to change this value before Prism executes. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.disableWorkerMessageHandler = true;
       * // Load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      disableWorkerMessageHandler: T.Prism && T.Prism.disableWorkerMessageHandler,
      /**
       * A namespace for utility methods.
       *
       * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
       * change or disappear at any time.
       *
       * @namespace
       * @memberof Prism
       */
      util: {
        encode: function Wr(Bl) {
          return Bl instanceof Je ? new Je(Bl.type, Wr(Bl.content), Bl.alias) : Array.isArray(Bl) ? Bl.map(Wr) : Bl.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        },
        /**
         * Returns the name of the type of the given value.
         *
         * @param {any} o
         * @returns {string}
         * @example
         * type(null)      === 'Null'
         * type(undefined) === 'Undefined'
         * type(123)       === 'Number'
         * type('foo')     === 'String'
         * type(true)      === 'Boolean'
         * type([1, 2])    === 'Array'
         * type({})        === 'Object'
         * type(String)    === 'Function'
         * type(/abc+/)    === 'RegExp'
         */
        type: function(Wr) {
          return Object.prototype.toString.call(Wr).slice(8, -1);
        },
        /**
         * Returns a unique number for the given object. Later calls will still return the same number.
         *
         * @param {Object} obj
         * @returns {number}
         */
        objId: function(Wr) {
          return Wr.__id || Object.defineProperty(Wr, "__id", { value: ++Be }), Wr.__id;
        },
        /**
         * Creates a deep clone of the given object.
         *
         * The main intended use of this function is to clone language definitions.
         *
         * @param {T} o
         * @param {Record<number, any>} [visited]
         * @returns {T}
         * @template T
         */
        clone: function Wr(Bl, zl) {
          zl = zl || {};
          var Vl, Rl;
          switch (Qe.util.type(Bl)) {
            case "Object":
              if (Rl = Qe.util.objId(Bl), zl[Rl])
                return zl[Rl];
              Vl = /** @type {Record<string, any>} */
              {}, zl[Rl] = Vl;
              for (var Wl in Bl)
                Bl.hasOwnProperty(Wl) && (Vl[Wl] = Wr(Bl[Wl], zl));
              return (
                /** @type {any} */
                Vl
              );
            case "Array":
              return Rl = Qe.util.objId(Bl), zl[Rl] ? zl[Rl] : (Vl = [], zl[Rl] = Vl, /** @type {Array} */
              /** @type {any} */
              Bl.forEach(function(Hl, jl) {
                Vl[jl] = Wr(Hl, zl);
              }), /** @type {any} */
              Vl);
            default:
              return Bl;
          }
        },
        /**
         * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
         *
         * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
         *
         * @param {Element} element
         * @returns {string}
         */
        getLanguage: function(Wr) {
          for (; Wr; ) {
            var Bl = ge.exec(Wr.className);
            if (Bl)
              return Bl[1].toLowerCase();
            Wr = Wr.parentElement;
          }
          return "none";
        },
        /**
         * Sets the Prism `language-xxxx` class of the given element.
         *
         * @param {Element} element
         * @param {string} language
         * @returns {void}
         */
        setLanguage: function(Wr, Bl) {
          Wr.className = Wr.className.replace(RegExp(ge, "gi"), ""), Wr.classList.add("language-" + Bl);
        },
        /**
         * Returns the script element that is currently executing.
         *
         * This does __not__ work for line script element.
         *
         * @returns {HTMLScriptElement | null}
         */
        currentScript: function() {
          if (typeof document > "u")
            return null;
          if (document.currentScript && document.currentScript.tagName === "SCRIPT")
            return (
              /** @type {any} */
              document.currentScript
            );
          try {
            throw new Error();
          } catch (Vl) {
            var Wr = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(Vl.stack) || [])[1];
            if (Wr) {
              var Bl = document.getElementsByTagName("script");
              for (var zl in Bl)
                if (Bl[zl].src == Wr)
                  return Bl[zl];
            }
            return null;
          }
        },
        /**
         * Returns whether a given class is active for `element`.
         *
         * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
         * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
         * given class is just the given class with a `no-` prefix.
         *
         * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
         * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
         * ancestors have the given class or the negated version of it, then the default activation will be returned.
         *
         * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
         * version of it, the class is considered active.
         *
         * @param {Element} element
         * @param {string} className
         * @param {boolean} [defaultActivation=false]
         * @returns {boolean}
         */
        isActive: function(Wr, Bl, zl) {
          for (var Vl = "no-" + Bl; Wr; ) {
            var Rl = Wr.classList;
            if (Rl.contains(Bl))
              return !0;
            if (Rl.contains(Vl))
              return !1;
            Wr = Wr.parentElement;
          }
          return !!zl;
        }
      },
      /**
       * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
       *
       * @namespace
       * @memberof Prism
       * @public
       */
      languages: {
        /**
         * The grammar for plain, unformatted text.
         */
        plain: je,
        plaintext: je,
        text: je,
        txt: je,
        /**
         * Creates a deep copy of the language with the given id and appends the given tokens.
         *
         * If a token in `redef` also appears in the copied language, then the existing token in the copied language
         * will be overwritten at its original position.
         *
         * ## Best practices
         *
         * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
         * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
         * understand the language definition because, normally, the order of tokens matters in Prism grammars.
         *
         * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
         * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
         *
         * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
         * @param {Grammar} redef The new tokens to append.
         * @returns {Grammar} The new language created.
         * @public
         * @example
         * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
         *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
         *     // at its original position
         *     'comment': { ... },
         *     // CSS doesn't have a 'color' token, so this token will be appended
         *     'color': /\b(?:red|green|blue)\b/
         * });
         */
        extend: function(Wr, Bl) {
          var zl = Qe.util.clone(Qe.languages[Wr]);
          for (var Vl in Bl)
            zl[Vl] = Bl[Vl];
          return zl;
        },
        /**
         * Inserts tokens _before_ another token in a language definition or any other grammar.
         *
         * ## Usage
         *
         * This helper method makes it easy to modify existing languages. For example, the CSS language definition
         * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
         * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
         * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
         * this:
         *
         * ```js
         * Prism.languages.markup.style = {
         *     // token
         * };
         * ```
         *
         * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
         * before existing tokens. For the CSS example above, you would use it like this:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'cdata', {
         *     'style': {
         *         // token
         *     }
         * });
         * ```
         *
         * ## Special cases
         *
         * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
         * will be ignored.
         *
         * This behavior can be used to insert tokens after `before`:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'comment', {
         *     'comment': Prism.languages.markup.comment,
         *     // tokens after 'comment'
         * });
         * ```
         *
         * ## Limitations
         *
         * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
         * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
         * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
         * deleting properties which is necessary to insert at arbitrary positions.
         *
         * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
         * Instead, it will create a new object and replace all references to the target object with the new one. This
         * can be done without temporarily deleting properties, so the iteration order is well-defined.
         *
         * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
         * you hold the target object in a variable, then the value of the variable will not change.
         *
         * ```js
         * var oldMarkup = Prism.languages.markup;
         * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
         *
         * assert(oldMarkup !== Prism.languages.markup);
         * assert(newMarkup === Prism.languages.markup);
         * ```
         *
         * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
         * object to be modified.
         * @param {string} before The key to insert before.
         * @param {Grammar} insert An object containing the key-value pairs to be inserted.
         * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
         * object to be modified.
         *
         * Defaults to `Prism.languages`.
         * @returns {Grammar} The new grammar object.
         * @public
         */
        insertBefore: function(Wr, Bl, zl, Vl) {
          Vl = Vl || /** @type {any} */
          Qe.languages;
          var Rl = Vl[Wr], Wl = {};
          for (var Hl in Rl)
            if (Rl.hasOwnProperty(Hl)) {
              if (Hl == Bl)
                for (var jl in zl)
                  zl.hasOwnProperty(jl) && (Wl[jl] = zl[jl]);
              zl.hasOwnProperty(Hl) || (Wl[Hl] = Rl[Hl]);
            }
          var Ul = Vl[Wr];
          return Vl[Wr] = Wl, Qe.languages.DFS(Qe.languages, function(Ql, Xl) {
            Xl === Ul && Ql != Wr && (this[Ql] = Wl);
          }), Wl;
        },
        // Traverse a language definition with Depth First Search
        DFS: function Wr(Bl, zl, Vl, Rl) {
          Rl = Rl || {};
          var Wl = Qe.util.objId;
          for (var Hl in Bl)
            if (Bl.hasOwnProperty(Hl)) {
              zl.call(Bl, Hl, Bl[Hl], Vl || Hl);
              var jl = Bl[Hl], Ul = Qe.util.type(jl);
              Ul === "Object" && !Rl[Wl(jl)] ? (Rl[Wl(jl)] = !0, Wr(jl, zl, null, Rl)) : Ul === "Array" && !Rl[Wl(jl)] && (Rl[Wl(jl)] = !0, Wr(jl, zl, Hl, Rl));
            }
        }
      },
      plugins: {},
      /**
       * This is the most high-level function in Prism’s API.
       * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
       * each one of them.
       *
       * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
       *
       * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
       * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
       * @memberof Prism
       * @public
       */
      highlightAll: function(Wr, Bl) {
        Qe.highlightAllUnder(document, Wr, Bl);
      },
      /**
       * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
       * {@link Prism.highlightElement} on each one of them.
       *
       * The following hooks will be run:
       * 1. `before-highlightall`
       * 2. `before-all-elements-highlight`
       * 3. All hooks of {@link Prism.highlightElement} for each element.
       *
       * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
       * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
       * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
       * @memberof Prism
       * @public
       */
      highlightAllUnder: function(Wr, Bl, zl) {
        var Vl = {
          callback: zl,
          container: Wr,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        Qe.hooks.run("before-highlightall", Vl), Vl.elements = Array.prototype.slice.apply(Vl.container.querySelectorAll(Vl.selector)), Qe.hooks.run("before-all-elements-highlight", Vl);
        for (var Rl = 0, Wl; Wl = Vl.elements[Rl++]; )
          Qe.highlightElement(Wl, Bl === !0, Vl.callback);
      },
      /**
       * Highlights the code inside a single element.
       *
       * The following hooks will be run:
       * 1. `before-sanity-check`
       * 2. `before-highlight`
       * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
       * 4. `before-insert`
       * 5. `after-highlight`
       * 6. `complete`
       *
       * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
       * the element's language.
       *
       * @param {Element} element The element containing the code.
       * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
       * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
       * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
       * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
       *
       * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
       * asynchronous highlighting to work. You can build your own bundle on the
       * [Download page](https://prismjs.com/download.html).
       * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
       * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
       * @memberof Prism
       * @public
       */
      highlightElement: function(Wr, Bl, zl) {
        var Vl = Qe.util.getLanguage(Wr), Rl = Qe.languages[Vl];
        Qe.util.setLanguage(Wr, Vl);
        var Wl = Wr.parentElement;
        Wl && Wl.nodeName.toLowerCase() === "pre" && Qe.util.setLanguage(Wl, Vl);
        var Hl = Wr.textContent, jl = {
          element: Wr,
          language: Vl,
          grammar: Rl,
          code: Hl
        };
        function Ul(Xl) {
          jl.highlightedCode = Xl, Qe.hooks.run("before-insert", jl), jl.element.innerHTML = jl.highlightedCode, Qe.hooks.run("after-highlight", jl), Qe.hooks.run("complete", jl), zl && zl.call(jl.element);
        }
        if (Qe.hooks.run("before-sanity-check", jl), Wl = jl.element.parentElement, Wl && Wl.nodeName.toLowerCase() === "pre" && !Wl.hasAttribute("tabindex") && Wl.setAttribute("tabindex", "0"), !jl.code) {
          Qe.hooks.run("complete", jl), zl && zl.call(jl.element);
          return;
        }
        if (Qe.hooks.run("before-highlight", jl), !jl.grammar) {
          Ul(Qe.util.encode(jl.code));
          return;
        }
        if (Bl && T.Worker) {
          var Ql = new Worker(Qe.filename);
          Ql.onmessage = function(Xl) {
            Ul(Xl.data);
          }, Ql.postMessage(JSON.stringify({
            language: jl.language,
            code: jl.code,
            immediateClose: !0
          }));
        } else
          Ul(Qe.highlight(jl.code, jl.grammar, jl.language));
      },
      /**
       * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
       * and the language definitions to use, and returns a string with the HTML produced.
       *
       * The following hooks will be run:
       * 1. `before-tokenize`
       * 2. `after-tokenize`
       * 3. `wrap`: On each {@link Token}.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @param {string} language The name of the language definition passed to `grammar`.
       * @returns {string} The highlighted HTML.
       * @memberof Prism
       * @public
       * @example
       * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
       */
      highlight: function(Wr, Bl, zl) {
        var Vl = {
          code: Wr,
          grammar: Bl,
          language: zl
        };
        if (Qe.hooks.run("before-tokenize", Vl), !Vl.grammar)
          throw new Error('The language "' + Vl.language + '" has no grammar.');
        return Vl.tokens = Qe.tokenize(Vl.code, Vl.grammar), Qe.hooks.run("after-tokenize", Vl), Je.stringify(Qe.util.encode(Vl.tokens), Vl.language);
      },
      /**
       * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
       * and the language definitions to use, and returns an array with the tokenized code.
       *
       * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
       *
       * This method could be useful in other contexts as well, as a very crude parser.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @returns {TokenStream} An array of strings and tokens, a token stream.
       * @memberof Prism
       * @public
       * @example
       * let code = `var foo = 0;`;
       * let tokens = Prism.tokenize(code, Prism.languages.javascript);
       * tokens.forEach(token => {
       *     if (token instanceof Prism.Token && token.type === 'number') {
       *         console.log(`Found numeric literal: ${token.content}`);
       *     }
       * });
       */
      tokenize: function(Wr, Bl) {
        var zl = Bl.rest;
        if (zl) {
          for (var Vl in zl)
            Bl[Vl] = zl[Vl];
          delete Bl.rest;
        }
        var Rl = new gt();
        return dt(Rl, Rl.head, Wr), Xe(Wr, Rl, Bl, Rl.head, 0), Jr(Rl);
      },
      /**
       * @namespace
       * @memberof Prism
       * @public
       */
      hooks: {
        all: {},
        /**
         * Adds the given callback to the list of callbacks for the given hook.
         *
         * The callback will be invoked when the hook it is registered for is run.
         * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
         *
         * One callback function can be registered to multiple hooks and the same hook multiple times.
         *
         * @param {string} name The name of the hook.
         * @param {HookCallback} callback The callback function which is given environment variables.
         * @public
         */
        add: function(Wr, Bl) {
          var zl = Qe.hooks.all;
          zl[Wr] = zl[Wr] || [], zl[Wr].push(Bl);
        },
        /**
         * Runs a hook invoking all registered callbacks with the given environment variables.
         *
         * Callbacks will be invoked synchronously and in the order in which they were registered.
         *
         * @param {string} name The name of the hook.
         * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
         * @public
         */
        run: function(Wr, Bl) {
          var zl = Qe.hooks.all[Wr];
          if (!(!zl || !zl.length))
            for (var Vl = 0, Rl; Rl = zl[Vl++]; )
              Rl(Bl);
        }
      },
      Token: Je
    };
    T.Prism = Qe;
    function Je(Wr, Bl, zl, Vl) {
      this.type = Wr, this.content = Bl, this.alias = zl, this.length = (Vl || "").length | 0;
    }
    Je.stringify = function Wr(Bl, zl) {
      if (typeof Bl == "string")
        return Bl;
      if (Array.isArray(Bl)) {
        var Vl = "";
        return Bl.forEach(function(Ul) {
          Vl += Wr(Ul, zl);
        }), Vl;
      }
      var Rl = {
        type: Bl.type,
        content: Wr(Bl.content, zl),
        tag: "span",
        classes: ["token", Bl.type],
        attributes: {},
        language: zl
      }, Wl = Bl.alias;
      Wl && (Array.isArray(Wl) ? Array.prototype.push.apply(Rl.classes, Wl) : Rl.classes.push(Wl)), Qe.hooks.run("wrap", Rl);
      var Hl = "";
      for (var jl in Rl.attributes)
        Hl += " " + jl + '="' + (Rl.attributes[jl] || "").replace(/"/g, "&quot;") + '"';
      return "<" + Rl.tag + ' class="' + Rl.classes.join(" ") + '"' + Hl + ">" + Rl.content + "</" + Rl.tag + ">";
    };
    function Ze(Wr, Bl, zl, Vl) {
      Wr.lastIndex = Bl;
      var Rl = Wr.exec(zl);
      if (Rl && Vl && Rl[1]) {
        var Wl = Rl[1].length;
        Rl.index += Wl, Rl[0] = Rl[0].slice(Wl);
      }
      return Rl;
    }
    function Xe(Wr, Bl, zl, Vl, Rl, Wl) {
      for (var Hl in zl)
        if (!(!zl.hasOwnProperty(Hl) || !zl[Hl])) {
          var jl = zl[Hl];
          jl = Array.isArray(jl) ? jl : [jl];
          for (var Ul = 0; Ul < jl.length; ++Ul) {
            if (Wl && Wl.cause == Hl + "," + Ul)
              return;
            var Ql = jl[Ul], Xl = Ql.inside, Gl = !!Ql.lookbehind, tu = !!Ql.greedy, nu = Ql.alias;
            if (tu && !Ql.pattern.global) {
              var ql = Ql.pattern.toString().match(/[imsuy]*$/)[0];
              Ql.pattern = RegExp(Ql.pattern.source, ql + "g");
            }
            for (var Yl = Ql.pattern || Ql, eu = Vl.next, Jl = Rl; eu !== Bl.tail && !(Wl && Jl >= Wl.reach); Jl += eu.value.length, eu = eu.next) {
              var iu = eu.value;
              if (Bl.length > Wr.length)
                return;
              if (!(iu instanceof Je)) {
                var Kl = 1, Zl;
                if (tu) {
                  if (Zl = Ze(Yl, Jl, Wr, Gl), !Zl || Zl.index >= Wr.length)
                    break;
                  var au = Zl.index, ru = Zl.index + Zl[0].length, su = Jl;
                  for (su += eu.value.length; au >= su; )
                    eu = eu.next, su += eu.value.length;
                  if (su -= eu.value.length, Jl = su, eu.value instanceof Je)
                    continue;
                  for (var ou = eu; ou !== Bl.tail && (su < ru || typeof ou.value == "string"); ou = ou.next)
                    Kl++, su += ou.value.length;
                  Kl--, iu = Wr.slice(Jl, su), Zl.index -= Jl;
                } else if (Zl = Ze(Yl, 0, iu, Gl), !Zl)
                  continue;
                var au = Zl.index, lu = Zl[0], cu = iu.slice(0, au), uu = iu.slice(au + lu.length), du = Jl + iu.length;
                Wl && du > Wl.reach && (Wl.reach = du);
                var hu = eu.prev;
                cu && (hu = dt(Bl, hu, cu), Jl += cu.length), fl(Bl, hu, Kl);
                var gu = new Je(Hl, Xl ? Qe.tokenize(lu, Xl) : lu, nu, lu);
                if (eu = dt(Bl, hu, gu), uu && dt(Bl, eu, uu), Kl > 1) {
                  var mu = {
                    cause: Hl + "," + Ul,
                    reach: du
                  };
                  Xe(Wr, Bl, zl, eu.prev, Jl, mu), Wl && mu.reach > Wl.reach && (Wl.reach = mu.reach);
                }
              }
            }
          }
        }
    }
    function gt() {
      var Wr = { value: null, prev: null, next: null }, Bl = { value: null, prev: Wr, next: null };
      Wr.next = Bl, this.head = Wr, this.tail = Bl, this.length = 0;
    }
    function dt(Wr, Bl, zl) {
      var Vl = Bl.next, Rl = { value: zl, prev: Bl, next: Vl };
      return Bl.next = Rl, Vl.prev = Rl, Wr.length++, Rl;
    }
    function fl(Wr, Bl, zl) {
      for (var Vl = Bl.next, Rl = 0; Rl < zl && Vl !== Wr.tail; Rl++)
        Vl = Vl.next;
      Bl.next = Vl, Vl.prev = Bl, Wr.length -= Rl;
    }
    function Jr(Wr) {
      for (var Bl = [], zl = Wr.head.next; zl !== Wr.tail; )
        Bl.push(zl.value), zl = zl.next;
      return Bl;
    }
    if (!T.document)
      return T.addEventListener && (Qe.disableWorkerMessageHandler || T.addEventListener("message", function(Wr) {
        var Bl = JSON.parse(Wr.data), zl = Bl.language, Vl = Bl.code, Rl = Bl.immediateClose;
        T.postMessage(Qe.highlight(Vl, Qe.languages[zl], zl)), Rl && T.close();
      }, !1)), Qe;
    var Ll = Qe.util.currentScript();
    Ll && (Qe.filename = Ll.src, Ll.hasAttribute("data-manual") && (Qe.manual = !0));
    function $l() {
      Qe.manual || Qe.highlightAll();
    }
    if (!Qe.manual) {
      var Il = document.readyState;
      Il === "loading" || Il === "interactive" && Ll && Ll.defer ? document.addEventListener("DOMContentLoaded", $l) : window.requestAnimationFrame ? window.requestAnimationFrame($l) : window.setTimeout($l, 16);
    }
    return Qe;
  }(w);
  E.exports && (E.exports = k), typeof commonjsGlobal < "u" && (commonjsGlobal.Prism = k), k.languages.markup = {
    comment: {
      pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
      greedy: !0
    },
    prolog: {
      pattern: /<\?[\s\S]+?\?>/,
      greedy: !0
    },
    doctype: {
      // https://www.w3.org/TR/xml/#NT-doctypedecl
      pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: !0,
      inside: {
        "internal-subset": {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: !0,
          greedy: !0,
          inside: null
          // see below
        },
        string: {
          pattern: /"[^"]*"|'[^']*'/,
          greedy: !0
        },
        punctuation: /^<!|>$|[[\]]/,
        "doctype-tag": /^DOCTYPE/i,
        name: /[^\s<>'"]+/
      }
    },
    cdata: {
      pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
      greedy: !0
    },
    tag: {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        "special-attr": [],
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [
              {
                pattern: /^=/,
                alias: "attr-equals"
              },
              {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: !0
              }
            ]
          }
        },
        punctuation: /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    entity: [
      {
        pattern: /&[\da-z]{1,8};/i,
        alias: "named-entity"
      },
      /&#x?[\da-f]{1,8};/i
    ]
  }, k.languages.markup.tag.inside["attr-value"].inside.entity = k.languages.markup.entity, k.languages.markup.doctype.inside["internal-subset"].inside = k.languages.markup, k.hooks.add("wrap", function(T) {
    T.type === "entity" && (T.attributes.title = T.content.replace(/&amp;/, "&"));
  }), Object.defineProperty(k.languages.markup.tag, "addInlined", {
    /**
     * Adds an inlined language to markup.
     *
     * An example of an inlined language is CSS with `<style>` tags.
     *
     * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addInlined('style', 'css');
     */
    value: function(T, ge) {
      var Be = {};
      Be["language-" + ge] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: !0,
        inside: k.languages[ge]
      }, Be.cdata = /^<!\[CDATA\[|\]\]>$/i;
      var je = {
        "included-cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: Be
        }
      };
      je["language-" + ge] = {
        pattern: /[\s\S]+/,
        inside: k.languages[ge]
      };
      var Qe = {};
      Qe[T] = {
        pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
          return T;
        }), "i"),
        lookbehind: !0,
        greedy: !0,
        inside: je
      }, k.languages.insertBefore("markup", "cdata", Qe);
    }
  }), Object.defineProperty(k.languages.markup.tag, "addAttribute", {
    /**
     * Adds an pattern to highlight languages embedded in HTML attributes.
     *
     * An example of an inlined language is CSS with `style` attributes.
     *
     * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addAttribute('style', 'css');
     */
    value: function(T, ge) {
      k.languages.markup.tag.inside["special-attr"].push({
        pattern: RegExp(
          /(^|["'\s])/.source + "(?:" + T + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
          "i"
        ),
        lookbehind: !0,
        inside: {
          "attr-name": /^[^\s=]+/,
          "attr-value": {
            pattern: /=[\s\S]+/,
            inside: {
              value: {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: !0,
                alias: [ge, "language-" + ge],
                inside: k.languages[ge]
              },
              punctuation: [
                {
                  pattern: /^=/,
                  alias: "attr-equals"
                },
                /"|'/
              ]
            }
          }
        }
      });
    }
  }), k.languages.html = k.languages.markup, k.languages.mathml = k.languages.markup, k.languages.svg = k.languages.markup, k.languages.xml = k.languages.extend("markup", {}), k.languages.ssml = k.languages.xml, k.languages.atom = k.languages.xml, k.languages.rss = k.languages.xml, function(T) {
    var ge = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    T.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + ge.source + ")*?" + /(?:;|(?=\s*\{))/.source),
        inside: {
          rule: /^@[\w-]+/,
          "selector-function-argument": {
            pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: !0,
            alias: "selector"
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: !0
          }
          // See rest below
        }
      },
      url: {
        // https://drafts.csswg.org/css-values-3/#urls
        pattern: RegExp("\\burl\\((?:" + ge.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
        greedy: !0,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: {
            pattern: RegExp("^" + ge.source + "$"),
            alias: "url"
          }
        }
      },
      selector: {
        pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + ge.source + ")*(?=\\s*\\{)"),
        lookbehind: !0
      },
      string: {
        pattern: ge,
        greedy: !0
      },
      property: {
        pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: !0
      },
      important: /!important\b/i,
      function: {
        pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
        lookbehind: !0
      },
      punctuation: /[(){};:,]/
    }, T.languages.css.atrule.inside.rest = T.languages.css;
    var Be = T.languages.markup;
    Be && (Be.tag.addInlined("style", "css"), Be.tag.addAttribute("style", "css"));
  }(k), k.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0,
        greedy: !0
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
      }
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0
    },
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
  }, k.languages.javascript = k.languages.extend("clike", {
    "class-name": [
      k.languages.clike["class-name"],
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: !0
      }
    ],
    keyword: [
      {
        pattern: /((?:^|\})\s*)catch\b/,
        lookbehind: !0
      },
      {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0
      }
    ],
    // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(
        /(^|[^\w$])/.source + "(?:" + // constant
        (/NaN|Infinity/.source + "|" + // binary integer
        /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
        /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
        /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
        /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
        /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
      ),
      lookbehind: !0
    },
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  }), k.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, k.languages.insertBefore("javascript", "keyword", {
    regex: {
      pattern: RegExp(
        // lookbehind
        // eslint-disable-next-line regexp/no-dupe-characters-character-class
        /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
        // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
        // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
        // with the only syntax, so we have to define 2 different regex patterns.
        /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
        /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
        /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        "regex-source": {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: !0,
          alias: "language-regex",
          inside: k.languages.regex
        },
        "regex-delimiter": /^\/|\/$/,
        "regex-flags": /^[a-z]+$/
      }
    },
    // This must be declared before keyword because we use "function" inside the look-forward
    "function-variable": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: "function"
    },
    parameter: [
      {
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: !0,
        inside: k.languages.javascript
      },
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: !0,
        inside: k.languages.javascript
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: k.languages.javascript
      },
      {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: k.languages.javascript
      }
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  }), k.languages.insertBefore("javascript", "string", {
    hashbang: {
      pattern: /^#!.*/,
      greedy: !0,
      alias: "comment"
    },
    "template-string": {
      pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: !0,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: !0,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation"
            },
            rest: k.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    },
    "string-property": {
      pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
      lookbehind: !0,
      greedy: !0,
      alias: "property"
    }
  }), k.languages.insertBefore("javascript", "operator", {
    "literal-property": {
      pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: !0,
      alias: "property"
    }
  }), k.languages.markup && (k.languages.markup.tag.addInlined("script", "javascript"), k.languages.markup.tag.addAttribute(
    /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
    "javascript"
  )), k.languages.js = k.languages.javascript, function() {
    if (typeof k > "u" || typeof document > "u")
      return;
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
    var T = "Loading…", ge = function(Ll, $l) {
      return "✖ Error " + Ll + " while fetching file: " + $l;
    }, Be = "✖ Error: File does not exist or is empty", je = {
      js: "javascript",
      py: "python",
      rb: "ruby",
      ps1: "powershell",
      psm1: "powershell",
      sh: "bash",
      bat: "batch",
      h: "c",
      tex: "latex"
    }, Qe = "data-src-status", Je = "loading", Ze = "loaded", Xe = "failed", gt = "pre[data-src]:not([" + Qe + '="' + Ze + '"]):not([' + Qe + '="' + Je + '"])';
    function dt(Ll, $l, Il) {
      var Wr = new XMLHttpRequest();
      Wr.open("GET", Ll, !0), Wr.onreadystatechange = function() {
        Wr.readyState == 4 && (Wr.status < 400 && Wr.responseText ? $l(Wr.responseText) : Wr.status >= 400 ? Il(ge(Wr.status, Wr.statusText)) : Il(Be));
      }, Wr.send(null);
    }
    function fl(Ll) {
      var $l = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(Ll || "");
      if ($l) {
        var Il = Number($l[1]), Wr = $l[2], Bl = $l[3];
        return Wr ? Bl ? [Il, Number(Bl)] : [Il, void 0] : [Il, Il];
      }
    }
    k.hooks.add("before-highlightall", function(Ll) {
      Ll.selector += ", " + gt;
    }), k.hooks.add("before-sanity-check", function(Ll) {
      var $l = (
        /** @type {HTMLPreElement} */
        Ll.element
      );
      if ($l.matches(gt)) {
        Ll.code = "", $l.setAttribute(Qe, Je);
        var Il = $l.appendChild(document.createElement("CODE"));
        Il.textContent = T;
        var Wr = $l.getAttribute("data-src"), Bl = Ll.language;
        if (Bl === "none") {
          var zl = (/\.(\w+)$/.exec(Wr) || [, "none"])[1];
          Bl = je[zl] || zl;
        }
        k.util.setLanguage(Il, Bl), k.util.setLanguage($l, Bl);
        var Vl = k.plugins.autoloader;
        Vl && Vl.loadLanguages(Bl), dt(
          Wr,
          function(Rl) {
            $l.setAttribute(Qe, Ze);
            var Wl = fl($l.getAttribute("data-range"));
            if (Wl) {
              var Hl = Rl.split(/\r\n?|\n/g), jl = Wl[0], Ul = Wl[1] == null ? Hl.length : Wl[1];
              jl < 0 && (jl += Hl.length), jl = Math.max(0, Math.min(jl - 1, Hl.length)), Ul < 0 && (Ul += Hl.length), Ul = Math.max(0, Math.min(Ul, Hl.length)), Rl = Hl.slice(jl, Ul).join(`
`), $l.hasAttribute("data-start") || $l.setAttribute("data-start", String(jl + 1));
            }
            Il.textContent = Rl, k.highlightElement(Il);
          },
          function(Rl) {
            $l.setAttribute(Qe, Xe), Il.textContent = Rl;
          }
        );
      }
    }), k.plugins.fileHighlight = {
      /**
       * Executes the File Highlight plugin for all matching `pre` elements under the given container.
       *
       * Note: Elements which are already loaded or currently loading will not be touched by this method.
       *
       * @param {ParentNode} [container=document]
       */
      highlight: function(Ll) {
        for (var $l = (Ll || document).querySelectorAll(gt), Il = 0, Wr; Wr = $l[Il++]; )
          k.highlightElement(Wr);
      }
    };
    var Jr = !1;
    k.fileHighlight = function() {
      Jr || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), Jr = !0), k.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  }();
})(prism);
Prism.languages.clike = {
  comment: [
    {
      pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
      lookbehind: !0,
      greedy: !0
    },
    {
      pattern: /(^|[^\\:])\/\/.*/,
      lookbehind: !0,
      greedy: !0
    }
  ],
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0
  },
  "class-name": {
    pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: !0,
    inside: {
      punctuation: /[.\\]/
    }
  },
  keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
  boolean: /\b(?:false|true)\b/,
  function: /\b\w+(?=\()/,
  number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  punctuation: /[{}[\];(),.:]/
};
Prism.languages.javascript = Prism.languages.extend("clike", {
  "class-name": [
    Prism.languages.clike["class-name"],
    {
      pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
      lookbehind: !0
    }
  ],
  keyword: [
    {
      pattern: /((?:^|\})\s*)catch\b/,
      lookbehind: !0
    },
    {
      pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: !0
    }
  ],
  // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
  function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  number: {
    pattern: RegExp(
      /(^|[^\w$])/.source + "(?:" + // constant
      (/NaN|Infinity/.source + "|" + // binary integer
      /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
      /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
      /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
      /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
      /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
    ),
    lookbehind: !0
  },
  operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});
Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
Prism.languages.insertBefore("javascript", "keyword", {
  regex: {
    pattern: RegExp(
      // lookbehind
      // eslint-disable-next-line regexp/no-dupe-characters-character-class
      /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
      // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
      // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
      // with the only syntax, so we have to define 2 different regex patterns.
      /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
      /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
      /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
    ),
    lookbehind: !0,
    greedy: !0,
    inside: {
      "regex-source": {
        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
        lookbehind: !0,
        alias: "language-regex",
        inside: Prism.languages.regex
      },
      "regex-delimiter": /^\/|\/$/,
      "regex-flags": /^[a-z]+$/
    }
  },
  // This must be declared before keyword because we use "function" inside the look-forward
  "function-variable": {
    pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
    alias: "function"
  },
  parameter: [
    {
      pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
      lookbehind: !0,
      inside: Prism.languages.javascript
    },
    {
      pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
      lookbehind: !0,
      inside: Prism.languages.javascript
    },
    {
      pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
      lookbehind: !0,
      inside: Prism.languages.javascript
    },
    {
      pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
      lookbehind: !0,
      inside: Prism.languages.javascript
    }
  ],
  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});
Prism.languages.insertBefore("javascript", "string", {
  hashbang: {
    pattern: /^#!.*/,
    greedy: !0,
    alias: "comment"
  },
  "template-string": {
    pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
    greedy: !0,
    inside: {
      "template-punctuation": {
        pattern: /^`|`$/,
        alias: "string"
      },
      interpolation: {
        pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
        lookbehind: !0,
        inside: {
          "interpolation-punctuation": {
            pattern: /^\$\{|\}$/,
            alias: "punctuation"
          },
          rest: Prism.languages.javascript
        }
      },
      string: /[\s\S]+/
    }
  },
  "string-property": {
    pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
    lookbehind: !0,
    greedy: !0,
    alias: "property"
  }
});
Prism.languages.insertBefore("javascript", "operator", {
  "literal-property": {
    pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
    lookbehind: !0,
    alias: "property"
  }
});
Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.markup.tag.addAttribute(
  /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
  "javascript"
));
Prism.languages.js = Prism.languages.javascript;
Prism.languages.markup = {
  comment: {
    pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
    greedy: !0
  },
  prolog: {
    pattern: /<\?[\s\S]+?\?>/,
    greedy: !0
  },
  doctype: {
    // https://www.w3.org/TR/xml/#NT-doctypedecl
    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: !0,
    inside: {
      "internal-subset": {
        pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
        lookbehind: !0,
        greedy: !0,
        inside: null
        // see below
      },
      string: {
        pattern: /"[^"]*"|'[^']*'/,
        greedy: !0
      },
      punctuation: /^<!|>$|[[\]]/,
      "doctype-tag": /^DOCTYPE/i,
      name: /[^\s<>'"]+/
    }
  },
  cdata: {
    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
    greedy: !0
  },
  tag: {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: !0,
    inside: {
      tag: {
        pattern: /^<\/?[^\s>\/]+/,
        inside: {
          punctuation: /^<\/?/,
          namespace: /^[^\s>\/:]+:/
        }
      },
      "special-attr": [],
      "attr-value": {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          punctuation: [
            {
              pattern: /^=/,
              alias: "attr-equals"
            },
            {
              pattern: /^(\s*)["']|["']$/,
              lookbehind: !0
            }
          ]
        }
      },
      punctuation: /\/?>/,
      "attr-name": {
        pattern: /[^\s>\/]+/,
        inside: {
          namespace: /^[^\s>\/:]+:/
        }
      }
    }
  },
  entity: [
    {
      pattern: /&[\da-z]{1,8};/i,
      alias: "named-entity"
    },
    /&#x?[\da-f]{1,8};/i
  ]
};
Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity;
Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup;
Prism.hooks.add("wrap", function(E) {
  E.type === "entity" && (E.attributes.title = E.content.replace(/&amp;/, "&"));
});
Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
  /**
   * Adds an inlined language to markup.
   *
   * An example of an inlined language is CSS with `<style>` tags.
   *
   * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addInlined('style', 'css');
   */
  value: function(E, w) {
    var k = {};
    k["language-" + w] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: !0,
      inside: Prism.languages[w]
    }, k.cdata = /^<!\[CDATA\[|\]\]>$/i;
    var T = {
      "included-cdata": {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: k
      }
    };
    T["language-" + w] = {
      pattern: /[\s\S]+/,
      inside: Prism.languages[w]
    };
    var ge = {};
    ge[E] = {
      pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
        return E;
      }), "i"),
      lookbehind: !0,
      greedy: !0,
      inside: T
    }, Prism.languages.insertBefore("markup", "cdata", ge);
  }
});
Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
  /**
   * Adds an pattern to highlight languages embedded in HTML attributes.
   *
   * An example of an inlined language is CSS with `style` attributes.
   *
   * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addAttribute('style', 'css');
   */
  value: function(E, w) {
    Prism.languages.markup.tag.inside["special-attr"].push({
      pattern: RegExp(
        /(^|["'\s])/.source + "(?:" + E + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
        "i"
      ),
      lookbehind: !0,
      inside: {
        "attr-name": /^[^\s=]+/,
        "attr-value": {
          pattern: /=[\s\S]+/,
          inside: {
            value: {
              pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
              lookbehind: !0,
              alias: [w, "language-" + w],
              inside: Prism.languages[w]
            },
            punctuation: [
              {
                pattern: /^=/,
                alias: "attr-equals"
              },
              /"|'/
            ]
          }
        }
      }
    });
  }
});
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;
Prism.languages.xml = Prism.languages.extend("markup", {});
Prism.languages.ssml = Prism.languages.xml;
Prism.languages.atom = Prism.languages.xml;
Prism.languages.rss = Prism.languages.xml;
(function(E) {
  var w = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
  function k(Xe) {
    return Xe = Xe.replace(/<inner>/g, function() {
      return w;
    }), RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + Xe + ")");
  }
  var T = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source, ge = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function() {
    return T;
  }), Be = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
  E.languages.markdown = E.languages.extend("markup", {}), E.languages.insertBefore("markdown", "prolog", {
    "front-matter-block": {
      pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
      lookbehind: !0,
      greedy: !0,
      inside: {
        punctuation: /^---|---$/,
        "front-matter": {
          pattern: /\S+(?:\s+\S+)*/,
          alias: ["yaml", "language-yaml"],
          inside: E.languages.yaml
        }
      }
    },
    blockquote: {
      // > ...
      pattern: /^>(?:[\t ]*>)*/m,
      alias: "punctuation"
    },
    table: {
      pattern: RegExp("^" + ge + Be + "(?:" + ge + ")*", "m"),
      inside: {
        "table-data-rows": {
          pattern: RegExp("^(" + ge + Be + ")(?:" + ge + ")*$"),
          lookbehind: !0,
          inside: {
            "table-data": {
              pattern: RegExp(T),
              inside: E.languages.markdown
            },
            punctuation: /\|/
          }
        },
        "table-line": {
          pattern: RegExp("^(" + ge + ")" + Be + "$"),
          lookbehind: !0,
          inside: {
            punctuation: /\||:?-{3,}:?/
          }
        },
        "table-header-row": {
          pattern: RegExp("^" + ge + "$"),
          inside: {
            "table-header": {
              pattern: RegExp(T),
              alias: "important",
              inside: E.languages.markdown
            },
            punctuation: /\|/
          }
        }
      }
    },
    code: [
      {
        // Prefixed by 4 spaces or 1 tab and preceded by an empty line
        pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
        lookbehind: !0,
        alias: "keyword"
      },
      {
        // ```optional language
        // code block
        // ```
        pattern: /^```[\s\S]*?^```$/m,
        greedy: !0,
        inside: {
          "code-block": {
            pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
            lookbehind: !0
          },
          "code-language": {
            pattern: /^(```).+/,
            lookbehind: !0
          },
          punctuation: /```/
        }
      }
    ],
    title: [
      {
        // title 1
        // =======
        // title 2
        // -------
        pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
        alias: "important",
        inside: {
          punctuation: /==+$|--+$/
        }
      },
      {
        // # title 1
        // ###### title 6
        pattern: /(^\s*)#.+/m,
        lookbehind: !0,
        alias: "important",
        inside: {
          punctuation: /^#+|#+$/
        }
      }
    ],
    hr: {
      // ***
      // ---
      // * * *
      // -----------
      pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
      lookbehind: !0,
      alias: "punctuation"
    },
    list: {
      // * item
      // + item
      // - item
      // 1. item
      pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
      lookbehind: !0,
      alias: "punctuation"
    },
    "url-reference": {
      // [id]: http://example.com "Optional title"
      // [id]: http://example.com 'Optional title'
      // [id]: http://example.com (Optional title)
      // [id]: <http://example.com> "Optional title"
      pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
      inside: {
        variable: {
          pattern: /^(!?\[)[^\]]+/,
          lookbehind: !0
        },
        string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
        punctuation: /^[\[\]!:]|[<>]/
      },
      alias: "url"
    },
    bold: {
      // **strong**
      // __strong__
      // allow one nested instance of italic text using the same delimiter
      pattern: k(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),
      lookbehind: !0,
      greedy: !0,
      inside: {
        content: {
          pattern: /(^..)[\s\S]+(?=..$)/,
          lookbehind: !0,
          inside: {}
          // see below
        },
        punctuation: /\*\*|__/
      }
    },
    italic: {
      // *em*
      // _em_
      // allow one nested instance of bold text using the same delimiter
      pattern: k(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),
      lookbehind: !0,
      greedy: !0,
      inside: {
        content: {
          pattern: /(^.)[\s\S]+(?=.$)/,
          lookbehind: !0,
          inside: {}
          // see below
        },
        punctuation: /[*_]/
      }
    },
    strike: {
      // ~~strike through~~
      // ~strike~
      // eslint-disable-next-line regexp/strict
      pattern: k(/(~~?)(?:(?!~)<inner>)+\2/.source),
      lookbehind: !0,
      greedy: !0,
      inside: {
        content: {
          pattern: /(^~~?)[\s\S]+(?=\1$)/,
          lookbehind: !0,
          inside: {}
          // see below
        },
        punctuation: /~~?/
      }
    },
    "code-snippet": {
      // `code`
      // ``code``
      pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
      lookbehind: !0,
      greedy: !0,
      alias: ["code", "keyword"]
    },
    url: {
      // [example](http://example.com "Optional title")
      // [example][id]
      // [example] [id]
      pattern: k(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),
      lookbehind: !0,
      greedy: !0,
      inside: {
        operator: /^!/,
        content: {
          pattern: /(^\[)[^\]]+(?=\])/,
          lookbehind: !0,
          inside: {}
          // see below
        },
        variable: {
          pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
          lookbehind: !0
        },
        url: {
          pattern: /(^\]\()[^\s)]+/,
          lookbehind: !0
        },
        string: {
          pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
          lookbehind: !0
        }
      }
    }
  }), ["url", "bold", "italic", "strike"].forEach(function(Xe) {
    ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(gt) {
      Xe !== gt && (E.languages.markdown[Xe].inside.content.inside[gt] = E.languages.markdown[gt]);
    });
  }), E.hooks.add("after-tokenize", function(Xe) {
    if (Xe.language !== "markdown" && Xe.language !== "md")
      return;
    function gt(dt) {
      if (!(!dt || typeof dt == "string"))
        for (var fl = 0, Jr = dt.length; fl < Jr; fl++) {
          var Ll = dt[fl];
          if (Ll.type !== "code") {
            gt(Ll.content);
            continue;
          }
          var $l = Ll.content[1], Il = Ll.content[3];
          if ($l && Il && $l.type === "code-language" && Il.type === "code-block" && typeof $l.content == "string") {
            var Wr = $l.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp");
            Wr = (/[a-z][\w-]*/i.exec(Wr) || [""])[0].toLowerCase();
            var Bl = "language-" + Wr;
            Il.alias ? typeof Il.alias == "string" ? Il.alias = [Il.alias, Bl] : Il.alias.push(Bl) : Il.alias = [Bl];
          }
        }
    }
    gt(Xe.tokens);
  }), E.hooks.add("wrap", function(Xe) {
    if (Xe.type === "code-block") {
      for (var gt = "", dt = 0, fl = Xe.classes.length; dt < fl; dt++) {
        var Jr = Xe.classes[dt], Ll = /language-(.+)/.exec(Jr);
        if (Ll) {
          gt = Ll[1];
          break;
        }
      }
      var $l = E.languages[gt];
      if ($l)
        Xe.content = E.highlight(Ze(Xe.content), $l, gt);
      else if (gt && gt !== "none" && E.plugins.autoloader) {
        var Il = "md-" + (/* @__PURE__ */ new Date()).valueOf() + "-" + Math.floor(Math.random() * 1e16);
        Xe.attributes.id = Il, E.plugins.autoloader.loadLanguages(gt, function() {
          var Wr = document.getElementById(Il);
          Wr && (Wr.innerHTML = E.highlight(Wr.textContent, E.languages[gt], gt));
        });
      }
    }
  });
  var je = RegExp(E.languages.markup.tag.pattern.source, "gi"), Qe = {
    amp: "&",
    lt: "<",
    gt: ">",
    quot: '"'
  }, Je = String.fromCodePoint || String.fromCharCode;
  function Ze(Xe) {
    var gt = Xe.replace(je, "");
    return gt = gt.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(dt, fl) {
      if (fl = fl.toLowerCase(), fl[0] === "#") {
        var Jr;
        return fl[1] === "x" ? Jr = parseInt(fl.slice(2), 16) : Jr = Number(fl.slice(1)), Je(Jr);
      } else {
        var Ll = Qe[fl];
        return Ll || dt;
      }
    }), gt;
  }
  E.languages.md = E.languages.markdown;
})(Prism);
Prism.languages.c = Prism.languages.extend("clike", {
  comment: {
    pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: !0
  },
  string: {
    // https://en.cppreference.com/w/c/language/string_literal
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: !0
  },
  "class-name": {
    pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
    lookbehind: !0
  },
  keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
  function: /\b[a-z_]\w*(?=\s*\()/i,
  number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
  operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
});
Prism.languages.insertBefore("c", "string", {
  char: {
    // https://en.cppreference.com/w/c/language/character_constant
    pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
    greedy: !0
  }
});
Prism.languages.insertBefore("c", "string", {
  macro: {
    // allow for multiline macro definitions
    // spaces after the # character compile fine with gcc
    pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
    lookbehind: !0,
    greedy: !0,
    alias: "property",
    inside: {
      string: [
        {
          // highlight the path of the include statement as a string
          pattern: /^(#\s*include\s*)<[^>]+>/,
          lookbehind: !0
        },
        Prism.languages.c.string
      ],
      char: Prism.languages.c.char,
      comment: Prism.languages.c.comment,
      "macro-name": [
        {
          pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
          lookbehind: !0
        },
        {
          pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
          lookbehind: !0,
          alias: "function"
        }
      ],
      // highlight macro directives as keywords
      directive: {
        pattern: /^(#\s*)[a-z]+/,
        lookbehind: !0,
        alias: "keyword"
      },
      "directive-hash": /^#/,
      punctuation: /##|\\(?=[\r\n])/,
      expression: {
        pattern: /\S[\s\S]*/,
        inside: Prism.languages.c
      }
    }
  }
});
Prism.languages.insertBefore("c", "function", {
  // highlight predefined macros as constants
  constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
});
delete Prism.languages.c.boolean;
(function(E) {
  var w = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
  E.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
      pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + w.source + ")*?" + /(?:;|(?=\s*\{))/.source),
      inside: {
        rule: /^@[\w-]+/,
        "selector-function-argument": {
          pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
          lookbehind: !0,
          alias: "selector"
        },
        keyword: {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: !0
        }
        // See rest below
      }
    },
    url: {
      // https://drafts.csswg.org/css-values-3/#urls
      pattern: RegExp("\\burl\\((?:" + w.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
      greedy: !0,
      inside: {
        function: /^url/i,
        punctuation: /^\(|\)$/,
        string: {
          pattern: RegExp("^" + w.source + "$"),
          alias: "url"
        }
      }
    },
    selector: {
      pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + w.source + ")*(?=\\s*\\{)"),
      lookbehind: !0
    },
    string: {
      pattern: w,
      greedy: !0
    },
    property: {
      pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
      lookbehind: !0
    },
    important: /!important\b/i,
    function: {
      pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
      lookbehind: !0
    },
    punctuation: /[(){};:,]/
  }, E.languages.css.atrule.inside.rest = E.languages.css;
  var k = E.languages.markup;
  k && (k.tag.addInlined("style", "css"), k.tag.addAttribute("style", "css"));
})(Prism);
Prism.languages.objectivec = Prism.languages.extend("c", {
  string: {
    pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: !0
  },
  keyword: /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
  operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
});
delete Prism.languages.objectivec["class-name"];
Prism.languages.objc = Prism.languages.objectivec;
Prism.languages.sql = {
  comment: {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
    lookbehind: !0
  },
  variable: [
    {
      pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
      greedy: !0
    },
    /@[\w.$]+/
  ],
  string: {
    pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
    greedy: !0,
    lookbehind: !0
  },
  identifier: {
    pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
    greedy: !0,
    lookbehind: !0,
    inside: {
      punctuation: /^`|`$/
    }
  },
  function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
  // Should we highlight user defined functions too?
  keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
  boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
  number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
  operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
  punctuation: /[;[\]()`,.]/
};
(function(E) {
  var w = E.languages.powershell = {
    comment: [
      {
        pattern: /(^|[^`])<#[\s\S]*?#>/,
        lookbehind: !0
      },
      {
        pattern: /(^|[^`])#.*/,
        lookbehind: !0
      }
    ],
    string: [
      {
        pattern: /"(?:`[\s\S]|[^`"])*"/,
        greedy: !0,
        inside: null
        // see below
      },
      {
        pattern: /'(?:[^']|'')*'/,
        greedy: !0
      }
    ],
    // Matches name spaces as well as casts, attribute decorators. Force starting with letter to avoid matching array indices
    // Supports two levels of nested brackets (e.g. `[OutputType([System.Collections.Generic.List[int]])]`)
    namespace: /\[[a-z](?:\[(?:\[[^\]]*\]|[^\[\]])*\]|[^\[\]])*\]/i,
    boolean: /\$(?:false|true)\b/i,
    variable: /\$\w+\b/,
    // Cmdlets and aliases. Aliases should come last, otherwise "write" gets preferred over "write-host" for example
    // Get-Command | ?{ $_.ModuleName -match "Microsoft.PowerShell.(Util|Core|Management)" }
    // Get-Alias | ?{ $_.ReferencedCommand.Module.Name -match "Microsoft.PowerShell.(Util|Core|Management)" }
    function: [
      /\b(?:Add|Approve|Assert|Backup|Block|Checkpoint|Clear|Close|Compare|Complete|Compress|Confirm|Connect|Convert|ConvertFrom|ConvertTo|Copy|Debug|Deny|Disable|Disconnect|Dismount|Edit|Enable|Enter|Exit|Expand|Export|Find|ForEach|Format|Get|Grant|Group|Hide|Import|Initialize|Install|Invoke|Join|Limit|Lock|Measure|Merge|Move|New|Open|Optimize|Out|Ping|Pop|Protect|Publish|Push|Read|Receive|Redo|Register|Remove|Rename|Repair|Request|Reset|Resize|Resolve|Restart|Restore|Resume|Revoke|Save|Search|Select|Send|Set|Show|Skip|Sort|Split|Start|Step|Stop|Submit|Suspend|Switch|Sync|Tee|Test|Trace|Unblock|Undo|Uninstall|Unlock|Unprotect|Unpublish|Unregister|Update|Use|Wait|Watch|Where|Write)-[a-z]+\b/i,
      /\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i
    ],
    // per http://technet.microsoft.com/en-us/library/hh847744.aspx
    keyword: /\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,
    operator: {
      pattern: /(^|\W)(?:!|-(?:b?(?:and|x?or)|as|(?:Not)?(?:Contains|In|Like|Match)|eq|ge|gt|is(?:Not)?|Join|le|lt|ne|not|Replace|sh[lr])\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,
      lookbehind: !0
    },
    punctuation: /[|{}[\];(),.]/
  };
  w.string[0].inside = {
    function: {
      // Allow for one level of nesting
      pattern: /(^|[^`])\$\((?:\$\([^\r\n()]*\)|(?!\$\()[^\r\n)])*\)/,
      lookbehind: !0,
      inside: w
    },
    boolean: w.boolean,
    variable: w.variable
  };
})(Prism);
Prism.languages.python = {
  comment: {
    pattern: /(^|[^\\])#.*/,
    lookbehind: !0,
    greedy: !0
  },
  "string-interpolation": {
    pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: !0,
    inside: {
      interpolation: {
        // "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
        pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
        lookbehind: !0,
        inside: {
          "format-spec": {
            pattern: /(:)[^:(){}]+(?=\}$)/,
            lookbehind: !0
          },
          "conversion-option": {
            pattern: /![sra](?=[:}]$)/,
            alias: "punctuation"
          },
          rest: null
        }
      },
      string: /[\s\S]+/
    }
  },
  "triple-quoted-string": {
    pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
    greedy: !0,
    alias: "string"
  },
  string: {
    pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: !0
  },
  function: {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: !0
  },
  "class-name": {
    pattern: /(\bclass\s+)\w+/i,
    lookbehind: !0
  },
  decorator: {
    pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
    lookbehind: !0,
    alias: ["annotation", "punctuation"],
    inside: {
      punctuation: /\./
    }
  },
  keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  boolean: /\b(?:False|None|True)\b/,
  number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
  operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  punctuation: /[{}[\];(),.:]/
};
Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python;
Prism.languages.py = Prism.languages.python;
(function(E) {
  for (var w = /\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source, k = 0; k < 2; k++)
    w = w.replace(/<self>/g, function() {
      return w;
    });
  w = w.replace(/<self>/g, function() {
    return /[^\s\S]/.source;
  }), E.languages.rust = {
    comment: [
      {
        pattern: RegExp(/(^|[^\\])/.source + w),
        lookbehind: !0,
        greedy: !0
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
      }
    ],
    string: {
      pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,
      greedy: !0
    },
    char: {
      pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,
      greedy: !0
    },
    attribute: {
      pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,
      greedy: !0,
      alias: "attr-name",
      inside: {
        string: null
        // see below
      }
    },
    // Closure params should not be confused with bitwise OR |
    "closure-params": {
      pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,
      lookbehind: !0,
      greedy: !0,
      inside: {
        "closure-punctuation": {
          pattern: /^\||\|$/,
          alias: "punctuation"
        },
        rest: null
        // see below
      }
    },
    "lifetime-annotation": {
      pattern: /'\w+/,
      alias: "symbol"
    },
    "fragment-specifier": {
      pattern: /(\$\w+:)[a-z]+/,
      lookbehind: !0,
      alias: "punctuation"
    },
    variable: /\$\w+/,
    "function-definition": {
      pattern: /(\bfn\s+)\w+/,
      lookbehind: !0,
      alias: "function"
    },
    "type-definition": {
      pattern: /(\b(?:enum|struct|trait|type|union)\s+)\w+/,
      lookbehind: !0,
      alias: "class-name"
    },
    "module-declaration": [
      {
        pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,
        lookbehind: !0,
        alias: "namespace"
      },
      {
        pattern: /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,
        lookbehind: !0,
        alias: "namespace",
        inside: {
          punctuation: /::/
        }
      }
    ],
    keyword: [
      // https://github.com/rust-lang/reference/blob/master/src/keywords.md
      /\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,
      // primitives and str
      // https://doc.rust-lang.org/stable/rust-by-example/primitives.html
      /\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/
    ],
    // functions can technically start with an upper-case letter, but this will introduce a lot of false positives
    // and Rust's naming conventions recommend snake_case anyway.
    // https://doc.rust-lang.org/1.0.0/style/style/naming/README.html
    function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,
    macro: {
      pattern: /\b\w+!/,
      alias: "property"
    },
    constant: /\b[A-Z_][A-Z_\d]+\b/,
    "class-name": /\b[A-Z]\w*\b/,
    namespace: {
      pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,
      inside: {
        punctuation: /::/
      }
    },
    // Hex, oct, bin, dec numbers with visual separators and type suffix
    number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,
    boolean: /\b(?:false|true)\b/,
    punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
    operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/
  }, E.languages.rust["closure-params"].inside.rest = E.languages.rust, E.languages.rust.attribute.inside.string = E.languages.rust.string;
})(Prism);
Prism.languages.swift = {
  comment: {
    // Nested comments are supported up to 2 levels
    pattern: /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,
    lookbehind: !0,
    greedy: !0
  },
  "string-literal": [
    // https://docs.swift.org/swift-book/LanguageGuide/StringsAndCharacters.html
    {
      pattern: RegExp(
        /(^|[^"#])/.source + "(?:" + /"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source + "|" + /"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source + ")" + /(?!["#])/.source
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        interpolation: {
          pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/,
          lookbehind: !0,
          inside: null
          // see below
        },
        "interpolation-punctuation": {
          pattern: /^\)|\\\($/,
          alias: "punctuation"
        },
        punctuation: /\\(?=[\r\n])/,
        string: /[\s\S]+/
      }
    },
    {
      pattern: RegExp(
        /(^|[^"#])(#+)/.source + "(?:" + /"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source + "|" + /"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source + ")\\2"
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        interpolation: {
          pattern: /(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,
          lookbehind: !0,
          inside: null
          // see below
        },
        "interpolation-punctuation": {
          pattern: /^\)|\\#+\($/,
          alias: "punctuation"
        },
        string: /[\s\S]+/
      }
    }
  ],
  directive: {
    // directives with conditions
    pattern: RegExp(
      /#/.source + "(?:" + (/(?:elseif|if)\b/.source + "(?:[ 	]*" + /(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source + ")+") + "|" + /(?:else|endif)\b/.source + ")"
    ),
    alias: "property",
    inside: {
      "directive-name": /^#\w+/,
      boolean: /\b(?:false|true)\b/,
      number: /\b\d+(?:\.\d+)*\b/,
      operator: /!|&&|\|\||[<>]=?/,
      punctuation: /[(),]/
    }
  },
  literal: {
    pattern: /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,
    alias: "constant"
  },
  "other-directive": {
    pattern: /#\w+\b/,
    alias: "property"
  },
  attribute: {
    pattern: /@\w+/,
    alias: "atrule"
  },
  "function-definition": {
    pattern: /(\bfunc\s+)\w+/,
    lookbehind: !0,
    alias: "function"
  },
  label: {
    // https://docs.swift.org/swift-book/LanguageGuide/ControlFlow.html#ID141
    pattern: /\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,
    lookbehind: !0,
    alias: "important"
  },
  keyword: /\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,
  boolean: /\b(?:false|true)\b/,
  nil: {
    pattern: /\bnil\b/,
    alias: "constant"
  },
  "short-argument": /\$\d+\b/,
  omit: {
    pattern: /\b_\b/,
    alias: "keyword"
  },
  number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
  // A class name must start with an upper-case letter and be either 1 letter long or contain a lower-case letter.
  "class-name": /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,
  function: /\b[a-z_]\w*(?=\s*\()/i,
  constant: /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
  // Operators are generic in Swift. Developers can even create new operators (e.g. +++).
  // https://docs.swift.org/swift-book/ReferenceManual/zzSummaryOfTheGrammar.html#ID481
  // This regex only supports ASCII operators.
  operator: /[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,
  punctuation: /[{}[\]();,.:\\]/
};
Prism.languages.swift["string-literal"].forEach(function(E) {
  E.inside.interpolation.inside = Prism.languages.swift;
});
(function(E) {
  E.languages.typescript = E.languages.extend("javascript", {
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
      lookbehind: !0,
      greedy: !0,
      inside: null
      // see below
    },
    builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
  }), E.languages.typescript.keyword.push(
    /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
    // keywords that have to be followed by an identifier
    /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
    // This is for `import type *, {}`
    /\btype\b(?=\s*(?:[\{*]|$))/
  ), delete E.languages.typescript.parameter, delete E.languages.typescript["literal-property"];
  var w = E.languages.extend("typescript", {});
  delete w["class-name"], E.languages.typescript["class-name"].inside = w, E.languages.insertBefore("typescript", "function", {
    decorator: {
      pattern: /@[$\w\xA0-\uFFFF]+/,
      inside: {
        at: {
          pattern: /^@/,
          alias: "operator"
        },
        function: /^[\s\S]+/
      }
    },
    "generic-function": {
      // e.g. foo<T extends "bar" | "baz">( ...
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
      greedy: !0,
      inside: {
        function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
        generic: {
          pattern: /<[\s\S]+/,
          // everything after the first <
          alias: "class-name",
          inside: w
        }
      }
    }
  }), E.languages.ts = E.languages.typescript;
})(Prism);
(function(E) {
  var w = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/, k = /(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source, T = {
    pattern: RegExp(/(^|[^\w.])/.source + k + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
    lookbehind: !0,
    inside: {
      namespace: {
        pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
        inside: {
          punctuation: /\./
        }
      },
      punctuation: /\./
    }
  };
  E.languages.java = E.languages.extend("clike", {
    string: {
      pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
      lookbehind: !0,
      greedy: !0
    },
    "class-name": [
      T,
      {
        // variables, parameters, and constructor references
        // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
        pattern: RegExp(/(^|[^\w.])/.source + k + /[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),
        lookbehind: !0,
        inside: T.inside
      },
      {
        // class names based on keyword
        // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
        pattern: RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source + k + /[A-Z]\w*\b/.source),
        lookbehind: !0,
        inside: T.inside
      }
    ],
    keyword: w,
    function: [
      E.languages.clike.function,
      {
        pattern: /(::\s*)[a-z_]\w*/,
        lookbehind: !0
      }
    ],
    number: /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
    operator: {
      pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
      lookbehind: !0
    },
    constant: /\b[A-Z][A-Z_\d]+\b/
  }), E.languages.insertBefore("java", "string", {
    "triple-quoted-string": {
      // http://openjdk.java.net/jeps/355#Description
      pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
      greedy: !0,
      alias: "string"
    },
    char: {
      pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/,
      greedy: !0
    }
  }), E.languages.insertBefore("java", "class-name", {
    annotation: {
      pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
      lookbehind: !0,
      alias: "punctuation"
    },
    generics: {
      pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
      inside: {
        "class-name": T,
        keyword: w,
        punctuation: /[<>(),.:]/,
        operator: /[?&|]/
      }
    },
    import: [
      {
        pattern: RegExp(/(\bimport\s+)/.source + k + /(?:[A-Z]\w*|\*)(?=\s*;)/.source),
        lookbehind: !0,
        inside: {
          namespace: T.inside.namespace,
          punctuation: /\./,
          operator: /\*/,
          "class-name": /\w+/
        }
      },
      {
        pattern: RegExp(/(\bimport\s+static\s+)/.source + k + /(?:\w+|\*)(?=\s*;)/.source),
        lookbehind: !0,
        alias: "static",
        inside: {
          namespace: T.inside.namespace,
          static: /\b\w+$/,
          punctuation: /\./,
          operator: /\*/,
          "class-name": /\w+/
        }
      }
    ],
    namespace: {
      pattern: RegExp(
        /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g, function() {
          return w.source;
        })
      ),
      lookbehind: !0,
      inside: {
        punctuation: /\./
      }
    }
  });
})(Prism);
(function(E) {
  var w = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/, k = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function() {
    return w.source;
  });
  E.languages.cpp = E.languages.extend("c", {
    "class-name": [
      {
        pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function() {
          return w.source;
        })),
        lookbehind: !0
      },
      // This is intended to capture the class name of method implementations like:
      //   void foo::bar() const {}
      // However! The `foo` in the above example could also be a namespace, so we only capture the class name if
      // it starts with an uppercase letter. This approximation should give decent results.
      /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
      // This will capture the class name before destructors like:
      //   Foo::~Foo() {}
      /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
      // This also intends to capture the class name of method implementations but here the class has template
      // parameters, so it can't be a namespace (until C++ adds generic namespaces).
      /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/
    ],
    keyword: w,
    number: {
      pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
      greedy: !0
    },
    operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
    boolean: /\b(?:false|true)\b/
  }), E.languages.insertBefore("cpp", "string", {
    module: {
      // https://en.cppreference.com/w/cpp/language/modules
      pattern: RegExp(
        /(\b(?:import|module)\s+)/.source + "(?:" + // header-name
        /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + "|" + // module name or partition or both
        /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function() {
          return k;
        }) + ")"
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        string: /^[<"][\s\S]+/,
        operator: /:/,
        punctuation: /\./
      }
    },
    "raw-string": {
      pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
      alias: "string",
      greedy: !0
    }
  }), E.languages.insertBefore("cpp", "keyword", {
    "generic-function": {
      pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
      inside: {
        function: /^\w+/,
        generic: {
          pattern: /<[\s\S]+/,
          alias: "class-name",
          inside: E.languages.cpp
        }
      }
    }
  }), E.languages.insertBefore("cpp", "operator", {
    "double-colon": {
      pattern: /::/,
      alias: "punctuation"
    }
  }), E.languages.insertBefore("cpp", "class-name", {
    // the base clause is an optional list of parent classes
    // https://en.cppreference.com/w/cpp/language/class
    "base-clause": {
      pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
      lookbehind: !0,
      greedy: !0,
      inside: E.languages.extend("cpp", {})
    }
  }), E.languages.insertBefore("inside", "double-colon", {
    // All untokenized words that are not namespaces should be class names
    "class-name": /\b[a-z_]\w*\b(?!\s*::)/i
  }, E.languages.cpp["base-clause"]);
})(Prism);
(function(E) {
  E.languages.diff = { coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d.*$/m] };
  var w = { "deleted-sign": "-", "deleted-arrow": "<", "inserted-sign": "+", "inserted-arrow": ">", unchanged: " ", diff: "!" };
  Object.keys(w).forEach(function(k) {
    var T = w[k], ge = [];
    /^\w+$/.test(k) || ge.push(/\w+/.exec(k)[0]), k === "diff" && ge.push("bold"), E.languages.diff[k] = { pattern: RegExp("^(?:[" + T + `].*(?:\r
?|
|(?![\\s\\S])))+`, "m"), alias: ge, inside: { line: { pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/, lookbehind: !0 }, prefix: { pattern: /[\s\S]/, alias: /\w+/.exec(k)[0] } } };
  }), Object.defineProperty(E.languages.diff, "PREFIXES", { value: w });
})(Prism);
const z = globalThis.Prism || window.Prism, M = (E) => {
  const w = /^diff-([\w-]+)/i;
  try {
    if (!E) return !1;
    const k = w.exec(E);
    return k ? z.languages.hasOwnProperty("diff") && z.languages.hasOwnProperty(k[1]) : z.languages.hasOwnProperty(E);
  } catch {
    return !1;
  }
};
function J(E, w) {
  for (const k of E.childNodes) {
    if (To(k) && k.tagName === w) return !0;
    J(k, w);
  }
  return !1;
}
const F = "data-language", R = "data-highlight-language";
class I extends mi {
  static getType() {
    return "code";
  }
  static clone(w) {
    return new I(w.__language, w.__key);
  }
  constructor(w, k) {
    super(k), this.__language = w || void 0, this.__isSyntaxHighlightSupported = M(w);
  }
  createDOM(w) {
    const k = document.createElement("code");
    rt$1(k, w.theme.code), k.setAttribute("spellcheck", "false");
    const T = this.getLanguage();
    return T && (k.setAttribute(F, T), this.getIsSyntaxHighlightSupported() && k.setAttribute(R, T)), k;
  }
  updateDOM(w, k, T) {
    const ge = this.__language, Be = w.__language;
    return ge ? ge !== Be && (k.setAttribute(F, ge), this.__isSyntaxHighlightSupported && k.setAttribute(R, ge)) : Be && (k.removeAttribute(F), w.__isSyntaxHighlightSupported && k.removeAttribute(R)), !1;
  }
  exportDOM(w) {
    const k = document.createElement("pre");
    rt$1(k, w._config.theme.code), k.setAttribute("spellcheck", "false");
    const T = this.getLanguage();
    return T && (k.setAttribute(F, T), this.getIsSyntaxHighlightSupported() && k.setAttribute(R, T)), { element: k };
  }
  static importDOM() {
    return { code: (w) => w.textContent != null && (/\r?\n/.test(w.textContent) || J(w, "BR")) ? { conversion: q, priority: 1 } : null, div: () => ({ conversion: U, priority: 1 }), pre: () => ({ conversion: q, priority: 0 }), table: (w) => G(w) ? { conversion: W, priority: 3 } : null, td: (w) => {
      const k = w, T = k.closest("table");
      return k.classList.contains("js-file-line") || T && G(T) ? { conversion: X, priority: 3 } : null;
    }, tr: (w) => {
      const k = w.closest("table");
      return k && G(k) ? { conversion: X, priority: 3 } : null;
    } };
  }
  static importJSON(w) {
    return K().updateFromJSON(w);
  }
  updateFromJSON(w) {
    return super.updateFromJSON(w).setLanguage(w.language);
  }
  exportJSON() {
    return { ...super.exportJSON(), language: this.getLanguage() };
  }
  insertNewAfter(w, k = !0) {
    const T = this.getChildren(), ge = T.length;
    if (ge >= 2 && T[ge - 1].getTextContent() === `
` && T[ge - 2].getTextContent() === `
` && w.isCollapsed() && w.anchor.key === this.__key && w.anchor.offset === ge) {
      T[ge - 1].remove(), T[ge - 2].remove();
      const Je = Bi();
      return this.insertAfter(Je, k), Je;
    }
    const { anchor: Be, focus: je } = w, Qe = (Be.isBefore(je) ? Be : je).getNode();
    if (sr(Qe)) {
      let Je = ut(Qe);
      const Ze = [];
      for (; ; ) if (ar(Je)) Ze.push(cr()), Je = Je.getNextSibling();
      else {
        if (!lt(Je)) break;
        {
          let $l = 0;
          const Il = Je.getTextContent(), Wr = Je.getTextContentSize();
          for (; $l < Wr && Il[$l] === " "; ) $l++;
          if ($l !== 0 && Ze.push(st(" ".repeat($l))), $l !== Wr) break;
          Je = Je.getNextSibling();
        }
      }
      const Xe = Qe.splitText(Be.offset)[0], gt = Be.offset === 0 ? 0 : 1, dt = Xe.getIndexWithinParent() + gt, fl = Qe.getParentOrThrow(), Jr = [Bn(), ...Ze];
      fl.splice(dt, 0, Jr);
      const Ll = Ze[Ze.length - 1];
      Ll ? Ll.select() : Be.offset === 0 ? Xe.selectPrevious() : Xe.getNextSibling().selectNext(0, 0);
    }
    if ($(Qe)) {
      const { offset: Je } = w.anchor;
      Qe.splice(Je, 0, [Bn()]), Qe.select(Je + 1, Je + 1);
    }
    return null;
  }
  canIndent() {
    return !1;
  }
  collapseAtStart() {
    const w = Bi();
    return this.getChildren().forEach((k) => w.append(k)), this.replace(w), !0;
  }
  setLanguage(w) {
    const k = this.getWritable();
    return k.__language = w || void 0, k.__isSyntaxHighlightSupported = M(w), k;
  }
  getLanguage() {
    return this.getLatest().__language;
  }
  getIsSyntaxHighlightSupported() {
    return this.getLatest().__isSyntaxHighlightSupported;
  }
}
function K(E) {
  return go(new I(E));
}
function $(E) {
  return E instanceof I;
}
function q(E) {
  return { node: K(E.getAttribute(F)) };
}
function U(E) {
  const w = E, k = Q(w);
  return k || function(T) {
    let ge = T.parentElement;
    for (; ge !== null; ) {
      if (Q(ge)) return !0;
      ge = ge.parentElement;
    }
    return !1;
  }(w) ? { node: k ? K() : null } : { node: null };
}
function W() {
  return { node: K() };
}
function X() {
  return { node: null };
}
function Q(E) {
  return E.style.fontFamily.match("monospace") !== null;
}
function G(E) {
  return E.classList.contains("js-file-line-container");
}
class ot extends qn {
  constructor(w = "", k, T) {
    super(w, T), this.__highlightType = k;
  }
  static getType() {
    return "code-highlight";
  }
  static clone(w) {
    return new ot(w.__text, w.__highlightType || void 0, w.__key);
  }
  getHighlightType() {
    return this.getLatest().__highlightType;
  }
  setHighlightType(w) {
    const k = this.getWritable();
    return k.__highlightType = w || void 0, k;
  }
  canHaveFormat() {
    return !1;
  }
  createDOM(w) {
    const k = super.createDOM(w), T = it(w.theme, this.__highlightType);
    return rt$1(k, T), k;
  }
  updateDOM(w, k, T) {
    const ge = super.updateDOM(w, k, T), Be = it(T.theme, w.__highlightType), je = it(T.theme, this.__highlightType);
    return Be !== je && (Be && it$2(k, Be), je && rt$1(k, je)), ge;
  }
  static importJSON(w) {
    return st().updateFromJSON(w);
  }
  updateFromJSON(w) {
    return super.updateFromJSON(w).setHighlightType(w.highlightType);
  }
  exportJSON() {
    return { ...super.exportJSON(), highlightType: this.getHighlightType() };
  }
  setFormat(w) {
    return this;
  }
  isParentRequired() {
    return !0;
  }
  createParentElementNode() {
    return K();
  }
}
function it(E, w) {
  return w && E && E.codeHighlight && E.codeHighlight[w];
}
function st(E = "", w) {
  return go(new ot(E, w));
}
function lt(E) {
  return E instanceof ot;
}
function ct(E, w) {
  let k = E;
  for (let T = nl(E, w); T && (lt(T.origin) || ar(T.origin)); T = ct$2(T)) k = T.origin;
  return k;
}
function ut(E) {
  return ct(E, "previous");
}
const we = /^(\d+(?:\.\d+)?)px$/, be = { BOTH: 3, NO_STATUS: 0, ROW: 1 };
class ye extends mi {
  static getType() {
    return "tablecell";
  }
  static clone(w) {
    return new ye(w.__headerState, w.__colSpan, w.__width, w.__key);
  }
  afterCloneFrom(w) {
    super.afterCloneFrom(w), this.__rowSpan = w.__rowSpan, this.__backgroundColor = w.__backgroundColor, this.__verticalAlign = w.__verticalAlign;
  }
  static importDOM() {
    return { td: (w) => ({ conversion: xe, priority: 0 }), th: (w) => ({ conversion: xe, priority: 0 }) };
  }
  static importJSON(w) {
    return ve().updateFromJSON(w);
  }
  updateFromJSON(w) {
    return super.updateFromJSON(w).setHeaderStyles(w.headerState).setColSpan(w.colSpan || 1).setRowSpan(w.rowSpan || 1).setWidth(w.width || void 0).setBackgroundColor(w.backgroundColor || null).setVerticalAlign(w.verticalAlign || void 0);
  }
  constructor(w = be.NO_STATUS, k = 1, T, ge) {
    super(ge), this.__colSpan = k, this.__rowSpan = 1, this.__headerState = w, this.__width = T, this.__backgroundColor = null, this.__verticalAlign = void 0;
  }
  createDOM(w) {
    const k = document.createElement(this.getTag());
    return this.__width && (k.style.width = `${this.__width}px`), this.__colSpan > 1 && (k.colSpan = this.__colSpan), this.__rowSpan > 1 && (k.rowSpan = this.__rowSpan), this.__backgroundColor !== null && (k.style.backgroundColor = this.__backgroundColor), Ne(this.__verticalAlign) && (k.style.verticalAlign = this.__verticalAlign), rt$1(k, w.theme.tableCell, this.hasHeader() && w.theme.tableCellHeader), k;
  }
  exportDOM(w) {
    const k = super.exportDOM(w);
    if (To(k.element)) {
      const T = k.element;
      T.setAttribute("data-temporary-table-cell-lexical-key", this.getKey()), T.style.border = "1px solid black", this.__colSpan > 1 && (T.colSpan = this.__colSpan), this.__rowSpan > 1 && (T.rowSpan = this.__rowSpan), T.style.width = `${this.getWidth() || 75}px`, T.style.verticalAlign = this.getVerticalAlign() || "top", T.style.textAlign = "start", this.__backgroundColor === null && this.hasHeader() && (T.style.backgroundColor = "#f2f3f5");
    }
    return k;
  }
  exportJSON() {
    return { ...super.exportJSON(), ...Ne(this.__verticalAlign) && { verticalAlign: this.__verticalAlign }, backgroundColor: this.getBackgroundColor(), colSpan: this.__colSpan, headerState: this.__headerState, rowSpan: this.__rowSpan, width: this.getWidth() };
  }
  getColSpan() {
    return this.getLatest().__colSpan;
  }
  setColSpan(w) {
    const k = this.getWritable();
    return k.__colSpan = w, k;
  }
  getRowSpan() {
    return this.getLatest().__rowSpan;
  }
  setRowSpan(w) {
    const k = this.getWritable();
    return k.__rowSpan = w, k;
  }
  getTag() {
    return this.hasHeader() ? "th" : "td";
  }
  setHeaderStyles(w, k = be.BOTH) {
    const T = this.getWritable();
    return T.__headerState = w & k | T.__headerState & ~k, T;
  }
  getHeaderStyles() {
    return this.getLatest().__headerState;
  }
  setWidth(w) {
    const k = this.getWritable();
    return k.__width = w, k;
  }
  getWidth() {
    return this.getLatest().__width;
  }
  getBackgroundColor() {
    return this.getLatest().__backgroundColor;
  }
  setBackgroundColor(w) {
    const k = this.getWritable();
    return k.__backgroundColor = w, k;
  }
  getVerticalAlign() {
    return this.getLatest().__verticalAlign;
  }
  setVerticalAlign(w) {
    const k = this.getWritable();
    return k.__verticalAlign = w || void 0, k;
  }
  toggleHeaderStyle(w) {
    const k = this.getWritable();
    return (k.__headerState & w) === w ? k.__headerState -= w : k.__headerState += w, k;
  }
  hasHeaderState(w) {
    return (this.getHeaderStyles() & w) === w;
  }
  hasHeader() {
    return this.getLatest().__headerState !== be.NO_STATUS;
  }
  updateDOM(w) {
    return w.__headerState !== this.__headerState || w.__width !== this.__width || w.__colSpan !== this.__colSpan || w.__rowSpan !== this.__rowSpan || w.__backgroundColor !== this.__backgroundColor || w.__verticalAlign !== this.__verticalAlign;
  }
  isShadowRoot() {
    return !0;
  }
  collapseAtStart() {
    return !0;
  }
  canBeEmpty() {
    return !1;
  }
  canIndent() {
    return !1;
  }
}
function Ne(E) {
  return E === "middle" || E === "bottom";
}
function xe(E) {
  const w = E, k = E.nodeName.toLowerCase();
  let T;
  we.test(w.style.width) && (T = parseFloat(w.style.width));
  const ge = ve(k === "th" ? be.ROW : be.NO_STATUS, w.colSpan, T);
  ge.__rowSpan = w.rowSpan;
  const Be = w.style.backgroundColor;
  Be !== "" && (ge.__backgroundColor = Be);
  const je = w.style.verticalAlign;
  Ne(je) && (ge.__verticalAlign = je);
  const Qe = w.style, Je = (Qe && Qe.textDecoration || "").split(" "), Ze = Qe.fontWeight === "700" || Qe.fontWeight === "bold", Xe = Je.includes("line-through"), gt = Qe.fontStyle === "italic", dt = Je.includes("underline");
  return { after: (fl) => {
    const Jr = [];
    let Ll = null;
    const $l = () => {
      if (Ll) {
        const Il = Ll.getFirstChild();
        Wn(Il) && Ll.getChildrenSize() === 1 && Il.remove();
      }
    };
    for (const Il of fl) ao(Il) || sr(Il) || Wn(Il) ? (sr(Il) && (Ze && Il.toggleFormat("bold"), Xe && Il.toggleFormat("strikethrough"), gt && Il.toggleFormat("italic"), dt && Il.toggleFormat("underline")), Ll ? Ll.append(Il) : (Ll = Bi().append(Il), Jr.push(Ll))) : (Jr.push(Il), $l(), Ll = null);
    return $l(), Jr.length === 0 && Jr.push(Bi()), Jr;
  }, node: ge };
}
function ve(E = be.NO_STATUS, w = 1, k) {
  return go(new ye(E, w, k));
}
function Re(E) {
  return E instanceof ye;
}
function Fe(E, ...w) {
  const k = new URL("https://lexical.dev/docs/error"), T = new URLSearchParams();
  T.append("code", E);
  for (const ge of w) T.append("v", ge);
  throw k.search = T.toString(), Error(`Minified Lexical error #${E}; visit ${k.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
class Oe extends mi {
  static getType() {
    return "tablerow";
  }
  static clone(w) {
    return new Oe(w.__height, w.__key);
  }
  static importDOM() {
    return { tr: (w) => ({ conversion: Ae, priority: 0 }) };
  }
  static importJSON(w) {
    return Ke().updateFromJSON(w);
  }
  updateFromJSON(w) {
    return super.updateFromJSON(w).setHeight(w.height);
  }
  constructor(w, k) {
    super(k), this.__height = w;
  }
  exportJSON() {
    const w = this.getHeight();
    return { ...super.exportJSON(), ...w === void 0 ? void 0 : { height: w } };
  }
  createDOM(w) {
    const k = document.createElement("tr");
    return this.__height && (k.style.height = `${this.__height}px`), rt$1(k, w.theme.tableRow), k;
  }
  extractWithChild(w, k, T) {
    return T === "html";
  }
  isShadowRoot() {
    return !0;
  }
  setHeight(w) {
    const k = this.getWritable();
    return k.__height = w, k;
  }
  getHeight() {
    return this.getLatest().__height;
  }
  updateDOM(w) {
    return w.__height !== this.__height;
  }
  canBeEmpty() {
    return !1;
  }
  canIndent() {
    return !1;
  }
}
function Ae(E) {
  const w = E;
  let k;
  return we.test(w.style.height) && (k = parseFloat(w.style.height)), { after: (T) => _t$1(T, Re), node: Ke(k) };
}
function Ke(E) {
  return go(new Oe(E));
}
function Ee(E) {
  return E instanceof Oe;
}
const ke = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, Me = ke && "documentMode" in document ? document.documentMode : null;
ke && "InputEvent" in window && !Me && new window.InputEvent("input");
function ht(E, w, k) {
  const T = [];
  let ge = null, Be = null;
  function je(Je) {
    let Ze = T[Je];
    return Ze === void 0 && (T[Je] = Ze = []), Ze;
  }
  const Qe = E.getChildren();
  for (let Je = 0; Je < Qe.length; Je++) {
    const Ze = Qe[Je];
    Ee(Ze) || Fe(209);
    const Xe = je(Je);
    for (let gt = Ze.getFirstChild(), dt = 0; gt != null; gt = gt.getNextSibling()) {
      for (Re(gt) || Fe(147); Xe[dt] !== void 0; ) dt++;
      const fl = { cell: gt, startColumn: dt, startRow: Je }, { __rowSpan: Jr, __colSpan: Ll } = gt;
      for (let $l = 0; $l < Jr && !(Je + $l >= Qe.length); $l++) {
        const Il = je(Je + $l);
        for (let Wr = 0; Wr < Ll; Wr++) Il[dt + Wr] = fl;
      }
    }
  }
  return [T, ge, Be];
}
function vt(E) {
  return To(E) && E.nodeName === "TABLE";
}
function Ft(E, w) {
  for (let k = w, T = null; k !== null; k = k.getParent()) {
    if (E.is(k)) return T;
    Re(k) && (T = k);
  }
  return null;
}
function on(E, w, k) {
  return Ft(E, ks(w, k));
}
function rn(E, w, k) {
  if (!w.theme.tableAlignment) return;
  const T = [], ge = [];
  for (const Be of ["center", "right"]) {
    const je = w.theme.tableAlignment[Be];
    je && (Be === k ? ge : T).push(je);
  }
  it$2(E, ...T), rt$1(E, ...ge);
}
const ln = /* @__PURE__ */ new WeakSet();
function sn(E = Oo()) {
  return ln.has(E);
}
class an extends mi {
  static getType() {
    return "table";
  }
  getColWidths() {
    return this.getLatest().__colWidths;
  }
  setColWidths(w) {
    const k = this.getWritable();
    return k.__colWidths = w, k;
  }
  static clone(w) {
    return new an(w.__key);
  }
  afterCloneFrom(w) {
    super.afterCloneFrom(w), this.__colWidths = w.__colWidths, this.__rowStriping = w.__rowStriping, this.__frozenColumnCount = w.__frozenColumnCount, this.__frozenRowCount = w.__frozenRowCount;
  }
  static importDOM() {
    return { table: (w) => ({ conversion: hn, priority: 1 }) };
  }
  static importJSON(w) {
    return dn().updateFromJSON(w);
  }
  updateFromJSON(w) {
    return super.updateFromJSON(w).setRowStriping(w.rowStriping || !1).setFrozenColumns(w.frozenColumnCount || 0).setFrozenRows(w.frozenRowCount || 0).setColWidths(w.colWidths);
  }
  constructor(w) {
    super(w), this.__rowStriping = !1, this.__frozenColumnCount = 0, this.__frozenRowCount = 0;
  }
  exportJSON() {
    return { ...super.exportJSON(), colWidths: this.getColWidths(), frozenColumnCount: this.__frozenColumnCount ? this.__frozenColumnCount : void 0, frozenRowCount: this.__frozenRowCount ? this.__frozenRowCount : void 0, rowStriping: this.__rowStriping ? this.__rowStriping : void 0 };
  }
  extractWithChild(w, k, T) {
    return T === "html";
  }
  getDOMSlot(w) {
    const k = vt(w) ? w : w.querySelector("table");
    return vt(k) || Fe(229), super.getDOMSlot(w).withElement(k).withAfter(k.querySelector("colgroup"));
  }
  createDOM(w, k) {
    const T = document.createElement("table");
    this.__style && (T.style.cssText = this.__style);
    const ge = document.createElement("colgroup");
    if (T.appendChild(ge), Io(ge), rt$1(T, w.theme.table), this.updateTableElement(null, T, w), sn(k)) {
      const Be = document.createElement("div"), je = w.theme.tableScrollableWrapper;
      return je ? rt$1(Be, je) : Be.style.cssText = "overflow-x: auto;", Be.appendChild(T), this.updateTableWrapper(null, Be, T, w), Be;
    }
    return T;
  }
  updateTableWrapper(w, k, T, ge) {
    this.__frozenColumnCount !== (w ? w.__frozenColumnCount : 0) && function(Be, je, Qe, Je) {
      Je > 0 ? (rt$1(Be, Qe.theme.tableFrozenColumn), je.setAttribute("data-lexical-frozen-column", "true")) : (it$2(Be, Qe.theme.tableFrozenColumn), je.removeAttribute("data-lexical-frozen-column"));
    }(k, T, ge, this.__frozenColumnCount), this.__frozenRowCount !== (w ? w.__frozenRowCount : 0) && function(Be, je, Qe, Je) {
      Je > 0 ? (rt$1(Be, Qe.theme.tableFrozenRow), je.setAttribute("data-lexical-frozen-row", "true")) : (it$2(Be, Qe.theme.tableFrozenRow), je.removeAttribute("data-lexical-frozen-row"));
    }(k, T, ge, this.__frozenRowCount);
  }
  updateTableElement(w, k, T) {
    this.__style !== (w ? w.__style : "") && (k.style.cssText = this.__style), this.__rowStriping !== (!!w && w.__rowStriping) && function(ge, Be, je) {
      je ? (rt$1(ge, Be.theme.tableRowStriping), ge.setAttribute("data-lexical-row-striping", "true")) : (it$2(ge, Be.theme.tableRowStriping), ge.removeAttribute("data-lexical-row-striping"));
    }(k, T, this.__rowStriping), function(ge, Be, je, Qe) {
      const Je = ge.querySelector("colgroup");
      if (!Je) return;
      const Ze = [];
      for (let Xe = 0; Xe < je; Xe++) {
        const gt = document.createElement("col"), dt = Qe && Qe[Xe];
        dt && (gt.style.width = `${dt}px`), Ze.push(gt);
      }
      Je.replaceChildren(...Ze);
    }(k, 0, this.getColumnCount(), this.getColWidths()), rn(k, T, this.getFormatType());
  }
  updateDOM(w, k, T) {
    const ge = this.getDOMSlot(k).element;
    return k === ge === sn() || (To(Be = k) && Be.nodeName === "DIV" && this.updateTableWrapper(w, k, ge, T), this.updateTableElement(w, ge, T), !1);
    var Be;
  }
  exportDOM(w) {
    const k = super.exportDOM(w), { element: T } = k;
    return { after: (ge) => {
      if (k.after && (ge = k.after(ge)), !vt(ge) && To(ge) && (ge = ge.querySelector("table")), !vt(ge)) return null;
      rn(ge, w._config, this.getFormatType());
      const [Be] = ht(this), je = /* @__PURE__ */ new Map();
      for (const Xe of Be) for (const gt of Xe) {
        const dt = gt.cell.getKey();
        je.has(dt) || je.set(dt, { colSpan: gt.cell.getColSpan(), startColumn: gt.startColumn });
      }
      const Qe = /* @__PURE__ */ new Set();
      for (const Xe of ge.querySelectorAll(":scope > tr > [data-temporary-table-cell-lexical-key]")) {
        const gt = Xe.getAttribute("data-temporary-table-cell-lexical-key");
        if (gt) {
          const dt = je.get(gt);
          if (Xe.removeAttribute("data-temporary-table-cell-lexical-key"), dt) {
            je.delete(gt);
            for (let fl = 0; fl < dt.colSpan; fl++) Qe.add(fl + dt.startColumn);
          }
        }
      }
      const Je = ge.querySelector(":scope > colgroup");
      if (Je) {
        const Xe = Array.from(ge.querySelectorAll(":scope > colgroup > col")).filter((gt, dt) => Qe.has(dt));
        Je.replaceChildren(...Xe);
      }
      const Ze = ge.querySelectorAll(":scope > tr");
      if (Ze.length > 0) {
        const Xe = document.createElement("tbody");
        for (const gt of Ze) Xe.appendChild(gt);
        ge.append(Xe);
      }
      return ge;
    }, element: !vt(T) && To(T) ? T.querySelector("table") : T };
  }
  canBeEmpty() {
    return !1;
  }
  isShadowRoot() {
    return !0;
  }
  getCordsFromCellNode(w, k) {
    const { rows: T, domRows: ge } = k;
    for (let Be = 0; Be < T; Be++) {
      const je = ge[Be];
      if (je != null) for (let Qe = 0; Qe < je.length; Qe++) {
        const Je = je[Qe];
        if (Je == null) continue;
        const { elem: Ze } = Je, Xe = on(this, Ze);
        if (Xe !== null && w.is(Xe)) return { x: Qe, y: Be };
      }
    }
    throw new Error("Cell not found in table.");
  }
  getDOMCellFromCords(w, k, T) {
    const { domRows: ge } = T, Be = ge[k];
    return Be == null ? null : Be[w < Be.length ? w : Be.length - 1] ?? null;
  }
  getDOMCellFromCordsOrThrow(w, k, T) {
    const ge = this.getDOMCellFromCords(w, k, T);
    if (!ge) throw new Error("Cell not found at cords.");
    return ge;
  }
  getCellNodeFromCords(w, k, T) {
    const ge = this.getDOMCellFromCords(w, k, T);
    if (ge == null) return null;
    const Be = ks(ge.elem);
    return Re(Be) ? Be : null;
  }
  getCellNodeFromCordsOrThrow(w, k, T) {
    const ge = this.getCellNodeFromCords(w, k, T);
    if (!ge) throw new Error("Node at cords not TableCellNode.");
    return ge;
  }
  getRowStriping() {
    return !!this.getLatest().__rowStriping;
  }
  setRowStriping(w) {
    const k = this.getWritable();
    return k.__rowStriping = w, k;
  }
  setFrozenColumns(w) {
    const k = this.getWritable();
    return k.__frozenColumnCount = w, k;
  }
  getFrozenColumns() {
    return this.getLatest().__frozenColumnCount;
  }
  setFrozenRows(w) {
    const k = this.getWritable();
    return k.__frozenRowCount = w, k;
  }
  getFrozenRows() {
    return this.getLatest().__frozenRowCount;
  }
  canSelectBefore() {
    return !0;
  }
  canIndent() {
    return !1;
  }
  getColumnCount() {
    const w = this.getFirstChild();
    if (!w) return 0;
    let k = 0;
    return w.getChildren().forEach((T) => {
      Re(T) && (k += T.getColSpan());
    }), k;
  }
}
function hn(E) {
  const w = dn();
  E.hasAttribute("data-lexical-row-striping") && w.setRowStriping(!0), E.hasAttribute("data-lexical-frozen-column") && w.setFrozenColumns(1), E.hasAttribute("data-lexical-frozen-row") && w.setFrozenRows(1);
  const k = E.querySelector(":scope > colgroup");
  if (k) {
    let T = [];
    for (const ge of k.querySelectorAll(":scope > col")) {
      let Be = ge.style.width || "";
      if (!we.test(Be) && (Be = ge.getAttribute("width") || "", !/^\d+$/.test(Be))) {
        T = void 0;
        break;
      }
      T.push(parseFloat(Be));
    }
    T && w.setColWidths(T);
  }
  return { after: (T) => _t$1(T, Ee), node: w };
}
function dn() {
  return go(new an());
}
const h = /* @__PURE__ */ new Set(["http:", "https:", "mailto:", "sms:", "tel:"]);
class g extends mi {
  static getType() {
    return "link";
  }
  static clone(w) {
    return new g(w.__url, { rel: w.__rel, target: w.__target, title: w.__title }, w.__key);
  }
  constructor(w = "", k = {}, T) {
    super(T);
    const { target: ge = null, rel: Be = null, title: je = null } = k;
    this.__url = w, this.__target = ge, this.__rel = Be, this.__title = je;
  }
  createDOM(w) {
    const k = document.createElement("a");
    return this.updateLinkDOM(null, k, w), rt$1(k, w.theme.link), k;
  }
  updateLinkDOM(w, k, T) {
    if (vo(k)) {
      w && w.__url === this.__url || (k.href = this.sanitizeUrl(this.__url));
      for (const ge of ["target", "rel", "title"]) {
        const Be = `__${ge}`, je = this[Be];
        w && w[Be] === je || (je ? k[ge] = je : k.removeAttribute(ge));
      }
    }
  }
  updateDOM(w, k, T) {
    return this.updateLinkDOM(w, k, T), !1;
  }
  static importDOM() {
    return { a: (w) => ({ conversion: f, priority: 1 }) };
  }
  static importJSON(w) {
    return d().updateFromJSON(w);
  }
  updateFromJSON(w) {
    return super.updateFromJSON(w).setURL(w.url).setRel(w.rel || null).setTarget(w.target || null).setTitle(w.title || null);
  }
  sanitizeUrl(w) {
    w = S(w);
    try {
      const k = new URL(S(w));
      if (!h.has(k.protocol)) return "about:blank";
    } catch {
      return w;
    }
    return w;
  }
  exportJSON() {
    return { ...super.exportJSON(), rel: this.getRel(), target: this.getTarget(), title: this.getTitle(), url: this.getURL() };
  }
  getURL() {
    return this.getLatest().__url;
  }
  setURL(w) {
    const k = this.getWritable();
    return k.__url = w, k;
  }
  getTarget() {
    return this.getLatest().__target;
  }
  setTarget(w) {
    const k = this.getWritable();
    return k.__target = w, k;
  }
  getRel() {
    return this.getLatest().__rel;
  }
  setRel(w) {
    const k = this.getWritable();
    return k.__rel = w, k;
  }
  getTitle() {
    return this.getLatest().__title;
  }
  setTitle(w) {
    const k = this.getWritable();
    return k.__title = w, k;
  }
  insertNewAfter(w, k = !0) {
    const T = d(this.__url, { rel: this.__rel, target: this.__target, title: this.__title });
    return this.insertAfter(T, k), T;
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
  extractWithChild(w, k, T) {
    if (!_r(k)) return !1;
    const ge = k.anchor.getNode(), Be = k.focus.getNode();
    return this.isParentOf(ge) && this.isParentOf(Be) && k.getTextContent().length > 0;
  }
  isEmailURI() {
    return this.__url.startsWith("mailto:");
  }
  isWebSiteURI() {
    return this.__url.startsWith("https://") || this.__url.startsWith("http://");
  }
}
function f(E) {
  let w = null;
  if (vo(E)) {
    const k = E.textContent;
    (k !== null && k !== "" || E.children.length > 0) && (w = d(E.getAttribute("href") || "", { rel: E.getAttribute("rel"), target: E.getAttribute("target"), title: E.getAttribute("title") }));
  }
  return { node: w };
}
function d(E = "", w) {
  return go(new g(E, w));
}
const L = /^\+?[0-9\s()-]{5,}$/;
function S(E) {
  return E.match(/^[a-z][a-z0-9+.-]*:/i) || E.match(/^[/#.]/) ? E : E.includes("@") ? `mailto:${E}` : L.test(E) ? `tel:${E}` : `https://${E}`;
}
const l = {
  center: "[-94.5, 41.25]",
  zoom: "8.3",
  datasetId: "ct-ch4-monthgrid-v2023",
  layerId: "total-ch4",
  dateTime: "2020-12-31",
  compareDateTime: "2015-12-31",
  compareLabel: "2020 VS 2015",
  attrUrl: "",
  attrAuthor: "",
  caption: ""
}, DataContext = createContext({});
function updateMapLabels(data) {
  return data.map((dataset) => (dataset.metadata && dataset.metadata.layers && dataset.metadata.layers.forEach((layer) => {
    layer.mapLabel && (layer.mapLabel = eval(layer.mapLabel)), layer.compare && layer.compare.mapLabel && (layer.compare.mapLabel = eval(layer.compare.mapLabel));
  }), dataset));
}
function DataProvider({
  initialDatasets: E = void 0,
  children: w
}) {
  const [k, T] = useState(
    updateMapLabels(E)
  ), ge = {
    datasets: k,
    setDatasets: T
  };
  return /* @__PURE__ */ jsx(DataContext.Provider, { value: ge, children: /* @__PURE__ */ jsx(ReactQueryProvider, { children: w }) });
}
function VedaUIConfigProvider({ children: E }) {
  return /* @__PURE__ */ jsx(
    VedaUIProvider,
    {
      config: {
        envMapboxToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? "",
        envApiStacEndpoint: process.env.NEXT_PUBLIC_API_STAC_ENDPOINT ?? "",
        envApiRasterEndpoint: process.env.NEXT_PUBLIC_API_RASTER_ENDPOINT ?? "",
        navigation: {
          LinkComponent: Link,
          linkProps: {
            pathAttributeKeyName: "href"
          }
        }
      },
      children: E
    }
  );
}
const VEDA_OVERRIDE_THEME = {
  zIndices: {
    hide: -1,
    docked: 10,
    sticky: 900,
    dropdown: 1550,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800
  },
  color: {
    base: "#2c3e50",
    primary: "#d83933",
    link: "#6f3331",
    danger: "#FC3D21",
    infographicA: "#fcab10",
    infographicB: "#f4442e",
    infographicC: "#b62b6e",
    infographicD: "#2ca58d",
    infographicE: "#2276ac"
  },
  type: {
    base: {
      leadSize: "1.25rem",
      extrabold: "800",
      line: "inherit",
      // Increments to the type.base.size for each media breakpoint.
      sizeIncrement: {
        small: "0rem",
        medium: "0rem",
        large: "0.25rem",
        xlarge: "0.25rem"
      }
    },
    heading: {
      settings: '"wdth" 100, "wght" 700'
    }
  },
  layout: {
    min: "384px",
    max: "1440px",
    glspMultiplier: {
      xsmall: 1,
      small: 1,
      medium: 1.5,
      large: 2,
      xlarge: 2
    }
  }
};
function DevseedUIThemeProvider({
  children: E
}) {
  return /* @__PURE__ */ jsx(DevseedUiThemeProvider, { theme: createUITheme(VEDA_OVERRIDE_THEME), children: E });
}
const MapBlock = dynamic(() => import("./index-CQRLZB_T-CQRLZB_T.js").then((E) => E.MapBlock), {
  ssr: !1,
  loading: () => /* @__PURE__ */ jsx("div", { className: "h-[250px] flex items-center justify-center", children: "Loading map..." })
});
function ClientMapBlock(E) {
  const w = E.datasets || E.allAvailableDatasets || [], k = transformToVedaData(w);
  return /* @__PURE__ */ jsx(DevseedUIThemeProvider, { children: /* @__PURE__ */ jsx(VedaUIConfigProvider, { children: /* @__PURE__ */ jsx(DataProvider, { initialDatasets: [w], children: /* @__PURE__ */ jsx("div", { className: "relative w-full h-[250px]", children: /* @__PURE__ */ jsx(
    MapBlock,
    {
      ...E,
      datasets: k
    }
  ) }) }) }) });
}
const createPlaceholderNode = () => ({
  __type: "placeholder",
  __key: "placeholder",
  __parent: null,
  __prev: null,
  __next: null
}), MapEditorWithPreview = (E) => {
  useMapContext();
  const [w, k] = useState(!0), T = () => {
    try {
      const ql = E.mdastNode || E?.props?.mdastNode;
      if (!ql?.attributes)
        return console.warn("Missing mdastNode attributes, using default props"), { ...l };
      const Yl = ql.attributes.reduce(
        (eu, Jl) => (Jl && Jl.name && Jl.value !== void 0 && (eu[Jl.name] = Jl.value), eu),
        {}
      );
      return Yl.center && Yl.layerId && Yl.zoom && Yl.datasetId && Yl.dateTime ? { ...Yl } : { ...l };
    } catch (ql) {
      return console.error("Error in initialMapProps:", ql), { ...l };
    }
  }, [ge, Be] = useState(T()), [je, Qe] = useState({
    defaultDateFormat: "%Y-%m-%d",
    dateTime: ge.dateTime,
    compareDateTime: ge.compareDateTime,
    center: ge.center
  }), [Je, Ze] = useState({
    dateTime: !1,
    compareDateTime: !1,
    center: !1
  }), {
    center: Xe,
    layerId: gt,
    zoom: dt,
    datasetId: fl,
    dateTime: Jr,
    compareDateTime: Ll,
    compareLabel: $l,
    attrAuthor: Il,
    attrUrl: Wr,
    caption: Bl
  } = ge, zl = typeof Xe == "string" ? Xe.startsWith("[") ? JSON.parse(Xe) : [-94.5, 41.25] : Xe, Vl = typeof dt == "string" ? parseFloat(dt) || 8.3 : dt, Rl = useMdastNodeUpdater(), Wl = E.mdastNode || E?.props?.mdastNode, Hl = E.allAvailableDatasets, jl = t__default.useMemo(
    () => Hl?.map((ql) => ({
      value: ql.metadata.id,
      label: ql.metadata.name
    })) || [],
    [Hl]
  ), Ul = t__default.useMemo(
    () => Hl?.find((ql) => ql.metadata.id === fl),
    [Hl, fl]
  ), Ql = t__default.useMemo(
    () => Ul?.metadata.layers.map((ql) => ({
      value: ql.id,
      label: ql.name
    })) || [],
    [Ul]
  ), Xl = Object.entries(ge).map(([ql, Yl]) => ({
    type: "mdxJsxAttribute",
    name: ql,
    value: String(Yl)
  }));
  useEffect(() => {
    setTimeout(() => {
      Rl({ ...Wl, attributes: Xl });
    }, 0);
  }, [ge]), useEffect(() => {
    Ul && Ul.metadata.layers.length > 0 && (Ul.metadata.layers.some(
      (ql) => ql.id === gt
    ) || Be((ql) => ({
      ...ql,
      layerId: Ul.metadata.layers[0].id
    })));
  }, [fl, Ul, gt]);
  const Gl = [
    { fieldName: "*Dataset ID", propName: "datasetId", isRequired: !0 },
    { fieldName: "*Layer ID", propName: "layerId", isRequired: !0 },
    {
      fieldName: "*Center",
      propName: "center",
      isRequired: !0,
      validateAgainst: "centerFormat"
    },
    { fieldName: "*Zoom", propName: "zoom", isRequired: !0 },
    {
      fieldName: "*Date Time",
      propName: "dateTime",
      isRequired: !0,
      validateAgainst: "defaultDateFormat"
    }
  ], tu = [
    { fieldName: "Compare Label", propName: "compareLabel" },
    {
      fieldName: "Compare Date",
      propName: "compareDateTime",
      validateAgainst: "defaultDateFormat"
    }
  ], nu = [
    { fieldName: "Author Attribution", propName: "attrAuthor" },
    { fieldName: "Attribution Url", propName: "attrUrl" },
    {
      fieldName: "Caption",
      propName: "caption",
      type: "area",
      customClass: "flex flex-fill"
    }
  ];
  return /* @__PURE__ */ jsx("div", { className: " border-05 border-primary rounded-lg overflow-hidden shadow-sm bg-white", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxs("div", { className: "padding-2 grid-container w-full maxw-full margin-2 bg-gray-10 radius-lg", children: [
      w && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "h3",
          {
            className: `font-medium ${w ? "text-blue-700" : "text-gray-500"} text-sm`,
            children: "Map Properties"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid-row flex-align-end grid-gap-2", children: Gl.map((ql) => {
          const { propName: Yl } = ql, eu = {
            ...ql,
            value: ge[Yl],
            onChange: Be,
            componentProps: ge,
            draftInputs: je,
            inputErrors: Je,
            setInputErrors: Ze,
            setDraftInputs: Qe,
            options: Yl === "datasetId" ? jl : Yl === "layerId" ? Ql : void 0
          };
          return /* @__PURE__ */ jsx(InputField, { ...eu }, Yl);
        }) }),
        /* @__PURE__ */ jsx("h4", { children: "Map Comparison" }),
        /* @__PURE__ */ jsx("div", { className: "grid-row flex-align-end grid-gap-2", children: tu.map((ql) => {
          const Yl = {
            ...ql,
            value: ge[ql.propName],
            onChange: Be,
            componentProps: ge,
            draftInputs: je,
            setDraftInputs: Qe,
            inputErrors: Je,
            setInputErrors: Ze
          };
          return /* @__PURE__ */ jsx(InputField, { ...Yl }, ql.propName);
        }) }),
        /* @__PURE__ */ jsx("div", { className: "grid-row flex-align-start grid-gap-2", children: nu.map((ql) => {
          const Yl = {
            ...ql,
            value: ge[ql.propName],
            onChange: Be,
            componentProps: ge
          };
          return /* @__PURE__ */ jsx(InputField, { ...Yl }, ql.propName);
        }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: `${w && "padding-top-2"}`, children: /* @__PURE__ */ jsx(
        Se$1,
        {
          type: "button",
          onClick: () => k(!w),
          children: w ? "Collapse Map Editor" : "Open Map Editor"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx(
      ClientMapBlock,
      {
        ...ge,
        center: zl,
        zoom: Vl,
        allAvailableDatasets: Hl
      },
      `map-${fl}-${gt}-${JSON.stringify(zl)}-${Vl}-${Jr}`
    ) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("figcaption", { className: "text-gray-30 flex padding-top-2", children: /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("p", { className: "display-inline", children: ge.caption }) }) }) })
  ] }) });
}, MapEditorWrapper = (E) => {
  const w = E.parentEditor, k = {
    namespace: `MapEditor-${E.mdastNode.name}`,
    editable: !1,
    parentEditor: w,
    nodes: [
      Nt,
      Dt,
      rt,
      Y,
      I,
      an,
      Oe,
      ye,
      g
    ],
    onError: (T) => {
      console.error("Map Sandbox Editor Error:", T);
    }
  };
  return /* @__PURE__ */ jsx(f$1, { initialConfig: k, children: /* @__PURE__ */ jsx(
    MapContextProvider,
    {
      value: {
        parentEditor: w,
        lexicalNode: E.node || createPlaceholderNode()
      },
      children: /* @__PURE__ */ jsx(MapEditorWithPreview, { ...E })
    }
  ) });
}, n = [
  {
    metadata: {
      id: "ct-ch4-monthgrid-v2023",
      name: "CarbonTracker-CH₄ Isotopic Methane Inverse Fluxes",
      description: "Global, monthly 1 degree resolution methane emission estimates from microbial, fossil and pyrogenic sources derived using inverse modeling, version 2023",
      taxonomy: [
        {
          name: "Topics",
          values: [
            { id: "Anthropogenic Emissions", name: "Anthropogenic Emissions" },
            { id: "Natural Emissions and Sinks", name: "Natural Emissions and Sinks" },
            { id: "Methane", name: "Methane" }
          ]
        },
        {
          name: "Source",
          values: [
            { id: "NASA", name: "NASA" },
            { id: "NOAA", name: "NOAA" }
          ]
        },
        {
          name: "Gas",
          values: [{ id: "CH₄", name: "CH₄" }]
        },
        {
          name: "Product Type",
          values: [
            { id: "Ground Measurements", name: "Ground Measurements" },
            { id: "Model Output", name: "Model Output" }
          ]
        }
      ],
      layers: [
        {
          id: "total-ch4",
          stacCol: "ct-ch4-monthgrid-v2023",
          name: "Total CH₄ Emission",
          type: "raster",
          description: "Total methane emission from microbial, fossil and pyrogenic sources.",
          zoomExtent: [0, 0],
          legend: {
            unit: { label: "g CH₄/m²/year" },
            type: "gradient",
            min: "0",
            max: "50",
            stops: [
              "#F7F4F9",
              "#E9E3F0",
              "#D9C3DF",
              "#CDA0CD",
              "#D57ABA",
              "#E34A9F",
              "#DF2179",
              "#C10E51",
              "#92003F",
              "#67001F"
            ]
          },
          compare: {
            datasetId: "ct-ch4-monthgrid-v2023",
            layerId: "total-ch4",
            mapLabel: ({ dateFns: E, datetime: w, compareDatetime: k }) => E && w && k ? `${E.format(w, "LLL yyyy")} VS ${E.format(k, "LLL yyyy")}` : ""
          }
        },
        {
          id: "microbial-ch4",
          stacCol: "ct-ch4-monthgrid-v2023",
          name: "Microbial CH₄ Emission",
          type: "raster",
          description: "Emission of methane from all microbial sources, such as wetlands, ruminants, agriculture and termites.",
          zoomExtent: [0, 20],
          legend: {
            unit: { label: "g CH₄/m²/year" },
            type: "gradient",
            min: "0",
            max: "30",
            stops: [
              "#F7F4F9",
              "#E9E3F0",
              "#D9C3DF",
              "#CDA0CD",
              "#D57ABA",
              "#E34A9F",
              "#DF2179",
              "#C10E51",
              "#92003F",
              "#67001F"
            ]
          },
          compare: {
            datasetId: "ct-ch4-monthgrid-v2023",
            layerId: "microbial-ch4",
            mapLabel: ({ dateFns: E, datetime: w, compareDatetime: k }) => E && w && k ? `${E.format(w, "LLL yyyy")} VS ${E.format(k, "LLL yyyy")}` : ""
          }
        },
        {
          id: "fossil-ch4",
          stacCol: "ct-ch4-monthgrid-v2023",
          name: "Fossil CH₄ Emission",
          type: "raster",
          description: "Emission of methane from all fossil sources, such as oil and gas activities and coal mining.",
          zoomExtent: [0, 20],
          legend: {
            unit: { label: "g CH₄/m²/year" },
            type: "gradient",
            min: "0",
            max: "50",
            stops: [
              "#F7F4F9",
              "#E9E3F0",
              "#D9C3DF",
              "#CDA0CD",
              "#D57ABA",
              "#E34A9F",
              "#DF2179",
              "#C10E51",
              "#92003F",
              "#67001F"
            ]
          },
          compare: {
            datasetId: "ct-ch4-monthgrid-v2023",
            layerId: "fossil-ch4",
            mapLabel: ({ dateFns: E, datetime: w, compareDatetime: k }) => E && w && k ? `${E.format(w, "LLL yyyy")} VS ${E.format(k, "LLL yyyy")}` : ""
          }
        },
        {
          id: "pyrogenic-ch4",
          stacCol: "ct-ch4-monthgrid-v2023",
          name: "Pyrogenic CH₄ Emission",
          type: "raster",
          description: "Emission of methane from all sources of biomass burning, such as wildfires and crop residue burning.",
          zoomExtent: [0, 20],
          legend: {
            unit: { label: "g CH₄/m²/year" },
            type: "gradient",
            min: "0",
            max: "8",
            stops: [
              "#F7F4F9",
              "#E9E3F0",
              "#D9C3DF",
              "#CDA0CD",
              "#D57ABA",
              "#E34A9F",
              "#DF2179",
              "#C10E51",
              "#92003F",
              "#67001F"
            ]
          },
          compare: {
            datasetId: "ct-ch4-monthgrid-v2023",
            layerId: "pyrogenic-ch4",
            mapLabel: ({ dateFns: E, datetime: w, compareDatetime: k }) => E && w && k ? `${E.format(w, "LLL yyyy")} VS ${E.format(k, "LLL yyyy")}` : ""
          }
        }
      ]
    },
    slug: "ct-ch4-monthgrid-v2023",
    content: ""
    // If you want to include full markdown content, you can parse it in here
  },
  {
    metadata: {
      id: "eccodarwin-co2flux-monthgrid-v5",
      name: "Air-Sea CO₂ Flux, ECCO-Darwin Model v5",
      description: "Global, monthly average air-sea CO₂ flux at ~1/3° resolution from 2020 to 2022",
      taxonomy: [
        {
          name: "Topics",
          values: [{ id: "Natural Emissions and Sinks", name: "Natural Emissions and Sinks" }]
        },
        {
          name: "Source",
          values: [{ id: "NASA", name: "NASA" }]
        },
        {
          name: "Gas",
          values: [{ id: "CO₂", name: "CO₂" }]
        },
        {
          name: "Product Type",
          values: [{ id: "Model Output", name: "Model Output" }]
        }
      ],
      layers: [
        {
          id: "air-sea-co2",
          stacCol: "eccodarwin-co2flux-monthgrid-v5",
          name: "Air-Sea CO₂ Flux",
          type: "raster",
          description: "Monthly mean air-sea CO₂ Flux (negative into ocean)",
          zoomExtent: [0, 20],
          legend: {
            unit: { label: "mmol m²/s" },
            type: "gradient",
            min: "-0.0007",
            max: "0.0007",
            stops: [
              "#0000FF",
              "#3399FF",
              "#66CCFF",
              "#FFFFFF",
              "#FF66CC",
              "#FF3399",
              "#FF0000"
            ]
          },
          compare: {
            datasetId: "eccodarwin-co2flux-monthgrid-v5",
            layerId: "air-sea-co2",
            mapLabel: ({ dateFns: E, datetime: w, compareDatetime: k }) => E && w && k ? `${E.format(w, "LLL yyyy")} VS ${E.format(k, "LLL yyyy")}` : ""
          }
        }
      ]
    },
    slug: "eccodarwin-co2flux-monthgrid-v5",
    content: ""
    // optional: parsed MDX markdown content if needed
  },
  {
    metadata: {
      id: "vulcan-total-co2",
      name: "Vulcan Fossil Fuel CO₂ Emissions, Version 4",
      description: "Annual (2010 - 2021), 1 km resolution estimates of carbon dioxide emissions from fossil fuels and cement production over the contiguous United States, version 4.0",
      isHidden: !0,
      taxonomy: [
        {
          name: "Topics",
          values: [
            { id: "Anthropogenic Emissions", name: "Anthropogenic Emissions" }
          ]
        },
        {
          name: "Source",
          values: [
            { id: "NAU", name: "NAU" },
            { id: "NASA", name: "NASA" },
            { id: "NOAA", name: "NOAA" },
            { id: "NSF", name: "NSF" }
          ]
        },
        {
          name: "Gas",
          values: [
            { id: "CO₂", name: "CO₂" }
          ]
        },
        {
          name: "Product Type",
          values: [
            { id: "Model Output", name: "Model Output" }
          ]
        }
      ],
      layers: [
        {
          id: "vulcan-elc-res-co2",
          stacCol: "vulcan-ffco2-elc-res-yeargrid-v4",
          name: "Scope 2 Residential Fossil Fuel CO₂ Emissions",
          type: "raster",
          description: "Estimated total annual CO₂ emissions from fossil fuel combustion (ffCO₂) across all sectors.",
          zoomExtent: [0, 20],
          legend: {
            unit: { label: "tonne CO₂/km²/year" },
            type: "gradient",
            min: "0",
            max: "500",
            stops: [
              "#5e4fa2",
              "#388eba",
              "#75c8a5",
              "#bfe5a0",
              "#f1f9a9",
              "#feeea2",
              "#fdbf6f",
              "#f67b4a",
              "#d8434e",
              "#9e0142"
            ]
          },
          compare: {
            datasetId: "vulcan-ffco2-yeargrid-v4",
            layerId: "vulcan-total-co2",
            mapLabel: ({ dateFns: E, datetime: w, compareDatetime: k }) => E && w && k ? `${E.format(w, "LLL yyyy")} VS ${E.format(k, "LLL yyyy")}` : ""
          },
          info: {
            source: "NASA",
            spatialExtent: "Contiguous United States",
            temporalResolution: "Annual",
            unit: "tonne CO₂/km²/year"
          }
        }
      ]
    },
    slug: "vulcan-ffco2-elc-res-yeargrid-v4",
    content: ""
  },
  {
    metadata: {
      id: "vulcan-ffco2-yeargrid-v4",
      name: "Vulcan Fossil Fuel CO₂ Emissions",
      description: "Annual (2010 - 2021), 1 km resolution estimates of carbon dioxide emissions from fossil fuel combustion over the contiguous United States, version 4.0",
      taxonomy: [
        {
          name: "Topics",
          values: [
            { id: "Anthropogenic Emissions", name: "Anthropogenic Emissions" },
            { id: "Urban", name: "Urban" }
          ]
        },
        {
          name: "Source",
          values: [
            { id: "NAU", name: "NAU" },
            { id: "NASA", name: "NASA" },
            { id: "NOAA", name: "NOAA" },
            { id: "NSF", name: "NSF" }
          ]
        },
        {
          name: "Gas",
          values: [
            { id: "CO₂", name: "CO₂" }
          ]
        },
        {
          name: "Product Type",
          values: [
            { id: "Hybrid Product", name: "Hybrid Product" }
          ]
        }
      ],
      layers: [
        {
          id: "vulcan-total-co2",
          stacCol: "vulcan-ffco2-yeargrid-v4",
          name: "Total Fossil Fuel CO₂ Emissions",
          type: "raster",
          description: "Estimated total annual CO₂ emissions from fossil fuel combustion (ffCO₂) across all sectors.",
          zoomExtent: [0, 20],
          legend: {
            unit: { label: "tonne CO₂/km²/year" },
            type: "gradient",
            min: "0",
            max: "1400",
            stops: [
              "#5e4fa2",
              "#388eba",
              "#75c8a5",
              "#bfe5a0",
              "#f1f9a9",
              "#feeea2",
              "#fdbf6f",
              "#f67b4a",
              "#d8434e",
              "#9e0142"
            ]
          },
          compare: {
            datasetId: "vulcan-ffco2-yeargrid-v4",
            layerId: "vulcan-total-co2",
            mapLabel: ({ dateFns: E, datetime: w, compareDatetime: k }) => E && w && k ? `${E.format(w, "LLL yyyy")} VS ${E.format(k, "LLL yyyy")}` : ""
          },
          info: {
            source: "NASA",
            spatialExtent: "Contiguous United States",
            temporalResolution: "Annual",
            unit: "tonne CO₂/km²/year"
          }
        },
        {
          id: "vulcan-air-co2",
          stacCol: "vulcan-ffco2-yeargrid-v4",
          name: "Airport Fossil Fuel CO₂ Emissions",
          type: "raster",
          description: "Estimated total annual ffCO₂ emissions from taxi, take-off, and landing up to 3000 ft.",
          zoomExtent: [0, 20],
          legend: {
            unit: { label: "tonne CO₂/km²/year" },
            type: "gradient",
            min: "0",
            max: "1400",
            stops: [
              "#5e4fa2",
              "#388eba",
              "#75c8a5",
              "#bfe5a0",
              "#f1f9a9",
              "#feeea2",
              "#fdbf6f",
              "#f67b4a",
              "#d8434e",
              "#9e0142"
            ]
          },
          compare: {
            datasetId: "vulcan-ffco2-yeargrid-v4",
            layerId: "vulcan-air-co2",
            mapLabel: ({ dateFns: E, datetime: w, compareDatetime: k }) => E && w && k ? `${E.format(w, "LLL yyyy")} VS ${E.format(k, "LLL yyyy")}` : ""
          },
          info: {
            source: "NASA",
            spatialExtent: "Contiguous United States",
            temporalResolution: "Annual",
            unit: "tonne CO₂/km²/year"
          }
        },
        {
          id: "vulcan-res-co2",
          stacCol: "vulcan-ffco2-yeargrid-v4",
          name: "Residential Fossil Fuel CO₂ Emissions",
          type: "raster",
          description: "Estimated total annual ffCO₂ emissions from Residential buildings.",
          zoomExtent: [0, 20],
          legend: {
            unit: { label: "tonne CO₂/km²/year" },
            type: "gradient",
            min: "0",
            max: "1400",
            stops: [
              "#5e4fa2",
              "#388eba",
              "#75c8a5",
              "#bfe5a0",
              "#f1f9a9",
              "#feeea2",
              "#fdbf6f",
              "#f67b4a",
              "#d8434e",
              "#9e0142"
            ]
          },
          compare: {
            datasetId: "vulcan-ffco2-elc-res-yeargrid-v4",
            layerId: "vulcan-elc-res-co2",
            mapLabel: ({ dateFns: E, datetime: w, compareDatetime: k }) => E && w && k ? `${E.format(w, "LLL yyyy")} VS ${E.format(k, "LLL yyyy")}` : ""
          },
          info: {
            source: "NASA",
            spatialExtent: "Contiguous United States",
            temporalResolution: "Annual",
            unit: "tonne CO₂/km²/year"
          }
        }
        // Add other layers like vulcan-com-co2, vulcan-ind-co2, etc. if needed
      ]
    },
    slug: "vulcan-ffco2-yeargrid-v4",
    content: ""
  },
  {
    metadata: {
      id: "vulcan-ffco2-elc-res-yeargrid-v4",
      name: "Vulcan Fossil Fuel CO₂ Emissions, Version 4",
      description: "Annual (2010 - 2021), 1 km resolution estimates of carbon dioxide emissions from fossil fuels and cement production over the contiguous United States, version 4.0",
      isHidden: !0,
      taxonomy: [
        {
          name: "Topics",
          values: [
            { id: "Anthropogenic Emissions", name: "Anthropogenic Emissions" }
          ]
        },
        {
          name: "Source",
          values: [
            { id: "NAU", name: "NAU" },
            { id: "NASA", name: "NASA" },
            { id: "NOAA", name: "NOAA" },
            { id: "NSF", name: "NSF" }
          ]
        },
        {
          name: "Gas",
          values: [
            { id: "CO₂", name: "CO₂" }
          ]
        },
        {
          name: "Product Type",
          values: [
            { id: "Model Output", name: "Model Output" }
          ]
        }
      ],
      layers: [
        {
          id: "vulcan-elc-res-co2",
          stacCol: "vulcan-ffco2-elc-res-yeargrid-v4",
          name: "Scope 2 Residential Fossil Fuel CO₂ Emissions",
          type: "raster",
          description: "Estimated total annual CO₂ emissions from fossil fuel combustion (ffCO₂) across all sectors.",
          zoomExtent: [0, 20],
          legend: {
            unit: { label: "tonne CO₂/km²/year" },
            type: "gradient",
            min: "0",
            max: "500",
            stops: [
              "#5e4fa2",
              "#388eba",
              "#75c8a5",
              "#bfe5a0",
              "#f1f9a9",
              "#feeea2",
              "#fdbf6f",
              "#f67b4a",
              "#d8434e",
              "#9e0142"
            ]
          },
          compare: {
            datasetId: "vulcan-ffco2-yeargrid-v4",
            layerId: "vulcan-total-co2",
            mapLabel: ({ dateFns: E, datetime: w, compareDatetime: k }) => E && w && k ? `${E.format(w, "LLL yyyy")} VS ${E.format(k, "LLL yyyy")}` : ""
          },
          info: {
            source: "NASA",
            spatialExtent: "Contiguous United States",
            temporalResolution: "Annual",
            unit: "tonne CO₂/km²/year"
          }
        }
      ]
    },
    slug: "vulcan-ffco2-elc-res-yeargrid-v4",
    content: ""
  }
], a = [
  { path: "/charts/story/hurricane-maria-ida-chart1.csv" },
  { path: "/charts/story/hurricane-maria-ida-chart2.csv" },
  { path: "/charts/story/hurricane-maria-ida-chart3.csv" },
  { path: "/charts/story/hurricane-maria-ida-chart4.csv" }
], createJsxComponentDescriptors = (E = []) => {
  const w = () => typeof E == "function" ? E() || [] : E || [];
  return console.log("Creating JSX component descriptors"), [
    // Simple test component
    {
      name: "TestComponent",
      kind: "flow",
      source: "./components.jsx",
      hasChildren: !1,
      props: [
        { name: "text", type: "string" },
        { name: "title", type: "string" },
        { name: "color", type: "string" },
        { name: "showDetails", type: "boolean" },
        { name: "items", type: "expression" }
      ],
      Editor: (k) => {
        console.log("TestComponent Editor called with props:", k);
        const T = require("@sijanbhattarai/mdx-editor-core").TestComponent, ge = k.mdastNode, Be = (Qe, Je) => {
          if (!ge?.attributes) return Je;
          const Ze = ge.attributes.find((Xe) => Xe.name === Qe);
          return Ze ? Ze.value : Je;
        }, je = {
          text: Be("text", "Default text"),
          title: Be("title", "Test Component"),
          color: Be("color", "blue"),
          showDetails: Be("showDetails", "true") === "true",
          items: ["Item 1", "Item 2", "Item 3"]
          // Default for now
        };
        return /* @__PURE__ */ jsx(T, { ...je });
      }
    },
    // VedaMap test component
    {
      name: "VedaMap",
      kind: "flow",
      source: "",
      hasChildren: !1,
      props: [{ name: "datasetId", type: "string" }],
      Editor: (k) => (console.log("VedaMap Editor called!"), /* @__PURE__ */ jsx((ge) => /* @__PURE__ */ jsxs("div", { children: [
        "VedaMap: ",
        ge.datasetId
      ] }), { ...k }))
    },
    {
      name: "Map",
      kind: "flow",
      hasChildren: !1,
      props: [
        { name: "center", type: "string" },
        { name: "zoom", type: "string" },
        { name: "datasetId", type: "string" },
        { name: "layerId", type: "string" },
        { name: "dateTime", type: "string" },
        { name: "compareDateTime", type: "string" },
        { name: "compareLabel", type: "string" },
        { name: "attrUrl", type: "string" },
        { name: "attrAuthor", type: "string" },
        { name: "caption", type: "string" }
      ],
      Editor: (k) => {
        console.log("Map Editor called! Props:", k), console.log("Map Editor mdastNode:", k?.mdastNode);
        const T = k.mdastNode;
        if (!T)
          return console.log("No mdastNode provided to Map Editor"), /* @__PURE__ */ jsx("div", { style: { padding: "20px", border: "2px solid red", background: "#ffe0e0" }, children: /* @__PURE__ */ jsx("h3", { children: "Map Component - No mdastNode!" }) });
        const ge = (Qe, Je = "") => {
          if (!T.attributes || !Array.isArray(T.attributes))
            return Je;
          const Ze = T.attributes.find((Xe) => Xe.name === Qe);
          return Ze ? Ze.value : Je;
        }, Be = ge("datasetId", "none"), je = ge("layerId", "none");
        return console.log("Extracted from mdastNode - datasetId:", Be, "layerId:", je), MapEditorWrapper ? /* @__PURE__ */ jsx(
          MapEditorWrapper,
          {
            mdastNode: T,
            descriptor: k.descriptor,
            allAvailableDatasets: w()
          }
        ) : /* @__PURE__ */ jsx("div", { children: "Map Editor not available" });
      }
    },
    {
      name: "MapBlock",
      kind: "flow",
      source: "",
      hasChildren: !1,
      props: [
        { name: "datasetId", type: "string" },
        { name: "layerId", type: "string" },
        { name: "dateTime", type: "string" },
        { name: "compareDateTime", type: "string" },
        { name: "compareLabel", type: "string" },
        { name: "projectionId", type: "string" },
        { name: "projectionCenter", type: "expression" },
        { name: "projectionParallels", type: "expression" },
        { name: "allowProjectionChange", type: "boolean" }
      ],
      Editor: (k) => {
        console.log("Map Editor called! Props:", k), console.log("Map Editor mdastNode:", k?.mdastNode);
        const T = k.mdastNode;
        if (!T)
          return console.log("No mdastNode provided to Map Editor"), /* @__PURE__ */ jsx("div", { style: { padding: "20px", border: "2px solid red", background: "#ffe0e0" }, children: /* @__PURE__ */ jsx("h3", { children: "Map Component - No mdastNode!" }) });
        const ge = (Qe, Je = "") => {
          if (!T.attributes || !Array.isArray(T.attributes))
            return Je;
          const Ze = T.attributes.find((Xe) => Xe.name === Qe);
          return Ze ? Ze.value : Je;
        }, Be = ge("datasetId", "none"), je = ge("layerId", "none");
        return console.log("Extracted from mdastNode - datasetId:", Be, "layerId:", je), MapEditorWrapper ? /* @__PURE__ */ jsx(
          MapEditorWrapper,
          {
            mdastNode: T,
            descriptor: k.descriptor,
            allAvailableDatasets: w()
          }
        ) : /* @__PURE__ */ jsx("div", { children: "Map Editor not available" });
      }
    },
    // {
    //   name: 'TwoColumn',
    //   kind: 'flow',
    //   source: './components', // Adjust the path
    //   hasChildren: true,
    //   props: [{ name: 'children', type: 'object' }],
    //   Editor: (props) => {
    //     return <TwoColumnEditorWrapper props={{ ...props }} />;
    //   },
    // },
    {
      name: "Block",
      kind: "flow",
      source: "./components",
      // Adjust the path
      hasChildren: !0,
      props: [],
      Editor: GenericJsxEditor
    },
    {
      name: "Figure",
      kind: "flow",
      source: "./components",
      // Adjust the path
      hasChildren: !0,
      props: [],
      Editor: GenericJsxEditor
    },
    {
      name: "Widget",
      kind: "flow",
      source: "./components.jsx",
      // Adjust the path
      hasChildren: !0,
      props: [{ name: "heading", type: "string" }],
      Editor: GenericJsxEditor
    },
    {
      name: "Caption",
      kind: "flow",
      source: "./components.jsx",
      // Adjust the path
      hasChildren: !0,
      props: [
        { name: "attrAuthor", type: "string" },
        { name: "attrUrl", type: "string" }
      ],
      Editor: GenericJsxEditor
    },
    {
      name: "Break",
      kind: "flow",
      source: "",
      // Adjust the path
      hasChildren: !1,
      props: [],
      Editor: GenericJsxEditor
    },
    {
      name: "Prose",
      kind: "flow",
      source: "./components",
      // Adjust the path
      hasChildren: !0,
      props: [{ name: "children", type: "object" }],
      Editor: GenericJsxEditor
    },
    {
      name: "ScrollytellingBlock",
      kind: "flow",
      source: "./components.jsx",
      hasChildren: !0,
      props: [],
      Editor: GenericJsxEditor
    },
    {
      name: "Chapter",
      kind: "flow",
      source: "./components.jsx",
      hasChildren: !0,
      props: [
        { name: "id", type: "string" },
        { name: "title", type: "string" },
        { name: "center", type: "expression" },
        { name: "zoom", type: "number" },
        { name: "datasetId", type: "string" },
        { name: "layerId", type: "string" },
        { name: "dateTime", type: "string" }
      ],
      Editor: GenericJsxEditor
    },
    {
      name: "LeftColumn",
      kind: "flow",
      source: "./components",
      hasChildren: !0,
      props: [{ name: "children", type: "object" }]
    },
    {
      name: "RightColumn",
      kind: "flow",
      source: "./components",
      hasChildren: !0,
      props: [{ name: "children", type: "object" }]
    },
    {
      name: "Chart",
      kind: "text",
      source: "",
      props: [
        { name: "dataPath", type: "string" },
        { name: "dateFormat", type: "string" },
        { name: "idKey", type: "string" },
        { name: "xKey", type: "string" },
        { name: "yKey", type: "string" },
        { name: "yAxisLabel", type: "string" },
        { name: "xAxisLabel", type: "string" },
        { name: "highlightStart", type: "string" },
        { name: "highlightEnd", type: "string" },
        { name: "highlightLabel", type: "string" },
        { name: "availableDomain", type: "string" },
        { name: "altTitle", type: "string" },
        { name: "colorScheme", type: "string" },
        { name: "colors", type: "string" },
        { name: "altDesc", type: "string" }
      ],
      hasChildren: !1,
      Editor: (k) => /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
        ChartEditorWrapper,
        {
          ...k,
          allAvailableDatasets: w(),
          allAvailableCsvs: a
        }
      ) })
    },
    {
      name: "iframe",
      kind: "flow",
      hasChildren: !1,
      props: [
        { name: "src", type: "string" },
        { name: "width", type: "string" },
        { name: "height", type: "string" },
        { name: "frameBorder", type: "string" },
        { name: "title", type: "string" },
        { name: "allowFullScreen", type: "boolean" }
      ],
      Editor: (k) => {
        const { mdastNode: T } = k, ge = useMdastNodeUpdater(), Be = (Qe, Je) => {
          if (!T || !Array.isArray(T.attributes))
            return Je;
          const Ze = T.attributes.find((Xe) => Xe.name === Qe);
          return Ze ? Ze.value : Je;
        }, je = (Qe, Je) => {
          const Ze = [...T.attributes || []], Xe = Ze.findIndex((dt) => dt.name === Qe), gt = { type: "mdxJsxAttribute", name: Qe, value: String(Je) };
          Xe >= 0 ? Ze[Xe] = gt : Ze.push(gt), ge({ ...T, attributes: Ze });
        };
        return /* @__PURE__ */ jsxs("div", { style: {
          padding: "15px",
          backgroundColor: "#f5f5f5",
          borderRadius: "4px",
          margin: "10px 0",
          border: "1px solid #ddd"
        }, children: [
          /* @__PURE__ */ jsx("h4", { style: { marginTop: 0, marginBottom: "15px", fontSize: "16px" }, children: "Iframe Properties" }),
          /* @__PURE__ */ jsxs("div", { style: { marginBottom: "10px" }, children: [
            /* @__PURE__ */ jsx("label", { style: { display: "block", marginBottom: "5px", fontSize: "14px" }, children: "Source URL:" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                value: Be("src", "https://example.com"),
                onChange: (Qe) => je("src", Qe.target.value),
                style: {
                  width: "100%",
                  padding: "6px 10px",
                  border: "1px solid #ccc",
                  borderRadius: "3px",
                  fontSize: "14px"
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: "10px", marginBottom: "10px" }, children: [
            /* @__PURE__ */ jsxs("div", { style: { flex: 1 }, children: [
              /* @__PURE__ */ jsx("label", { style: { display: "block", marginBottom: "5px", fontSize: "14px" }, children: "Width:" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  value: Be("width", "100%"),
                  onChange: (Qe) => je("width", Qe.target.value),
                  placeholder: "e.g., 100% or 600px",
                  style: {
                    width: "100%",
                    padding: "6px 10px",
                    border: "1px solid #ccc",
                    borderRadius: "3px",
                    fontSize: "14px"
                  }
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { style: { flex: 1 }, children: [
              /* @__PURE__ */ jsx("label", { style: { display: "block", marginBottom: "5px", fontSize: "14px" }, children: "Height:" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  value: Be("height", "400"),
                  onChange: (Qe) => je("height", Qe.target.value),
                  placeholder: "e.g., 400 or 500px",
                  style: {
                    width: "100%",
                    padding: "6px 10px",
                    border: "1px solid #ccc",
                    borderRadius: "3px",
                    fontSize: "14px"
                  }
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { style: { marginBottom: "10px" }, children: [
            /* @__PURE__ */ jsx("label", { style: { display: "block", marginBottom: "5px", fontSize: "14px" }, children: "Title (for accessibility):" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                value: Be("title", "Embedded Content"),
                onChange: (Qe) => je("title", Qe.target.value),
                style: {
                  width: "100%",
                  padding: "6px 10px",
                  border: "1px solid #ccc",
                  borderRadius: "3px",
                  fontSize: "14px"
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { style: { marginBottom: "10px" }, children: /* @__PURE__ */ jsxs("label", { style: { fontSize: "14px" }, children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "checkbox",
                checked: Be("allowFullScreen", !1) === "true",
                onChange: (Qe) => je("allowFullScreen", Qe.target.checked),
                style: { marginRight: "5px" }
              }
            ),
            "Allow Fullscreen"
          ] }) }),
          /* @__PURE__ */ jsxs("div", { style: {
            padding: "15px",
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            borderRadius: "3px",
            marginTop: "15px"
          }, children: [
            /* @__PURE__ */ jsx("p", { style: { margin: 0, fontSize: "13px", color: "#666" }, children: "Preview:" }),
            /* @__PURE__ */ jsx(
              "iframe",
              {
                src: Be("src", "https://example.com"),
                width: Be("width", "100%"),
                height: Be("height", "400"),
                frameBorder: "0",
                title: Be("title", "Embedded Content"),
                allowFullScreen: Be("allowFullScreen", !1) === "true",
                style: {
                  marginTop: "10px",
                  border: "1px solid #e0e0e0",
                  borderRadius: "3px",
                  maxWidth: "100%"
                }
              }
            )
          ] })
        ] });
      }
    }
  ];
};
createJsxComponentDescriptors(n);
const CalloutDirectiveDescriptor = {
  name: "callout",
  testNode(E) {
    return E.name === "callout";
  },
  attributes: [],
  hasChildren: !0,
  Editor: GenericDirectiveEditor
};
function MDXEditorEnhanced({
  markdown: E,
  onChange: w,
  editorMounted: k,
  previewMDAST: T,
  allAvailableDatasets: ge
}) {
  const Be = useRef(null), [je, Qe] = useState(null), [Je, Ze] = useState(!1), [Xe, gt] = useState(E);
  useRef(!0);
  const dt = t__default.useRef(ge);
  dt.current = ge;
  const fl = t__default.useMemo(() => createJsxComponentDescriptors(() => dt.current), []), Jr = E || "";
  useEffect(() => {
    fl.length > 0 && console.log("Component descriptors ready:", fl.length);
  }, [fl]), useEffect(() => {
    Be.current && (Ze(!0), console.log("Editor ref is ready"));
  }, []), useEffect(() => {
    const Il = document.querySelector(".mdx-editor-field");
    if (Il && E) {
      Il.value = E, Il.setAttribute("data-mdx-updated", "true");
      const Wr = new Event("input", { bubbles: !0 });
      Il.dispatchEvent(Wr);
    }
  }, [E]), useEffect(() => {
    const Il = document.querySelector(".mdx-editor-field");
    if (Il && Xe) {
      Il.value = Xe, Il.setAttribute("data-mdx-updated", "true");
      const Wr = new Event("input", { bubbles: !0 });
      Il.dispatchEvent(Wr);
    }
  }, [Xe]), useEffect(() => {
    Be.current && Je && console.log("Editor is ready, checking for JSX components");
  }, [Je]);
  const Ll = () => {
    try {
      const Il = Be.current && Be.current.getMarkdown();
      if (Il) {
        const Wr = fromMarkdown(Il, {
          extensions: [mdxJsx()],
          mdastExtensions: [mdxJsxFromMarkdown()]
        });
        visit(Wr, "mdxJsxFlowElement", (Vl) => {
          if (["RightColumn", "LeftColumn"].includes(Vl.name) && Vl.children.length > 0) {
            const Rl = Vl.children[0]?.value;
            typeof Rl == "string" && (Vl.children = fromMarkdown(Rl, {
              extensions: [mdxJsx()],
              mdastExtensions: [mdxJsxFromMarkdown()]
            }).children);
          }
        });
        const Bl = [], zl = [];
        visit(Wr, "mdxJsxFlowElement", (Vl) => {
          zl.push({ name: Vl.name, type: Vl.type, attributes: Vl.attributes }), Vl.name === "Map" && (Bl.push(Vl), console.log("Map node attributes:", Vl.attributes));
        }), Qe(Wr), T(reserializedMdxContent(Wr));
      }
    } catch (Il) {
      console.error("Error analyzing MDAST:", Il), alert("Error analyzing MDAST: " + Il.message);
    }
  }, $l = "stable-editor";
  return fl.length === 0 ? (console.log("MDXEditor: Waiting for component descriptors..."), /* @__PURE__ */ jsx("div", { className: "h-[600px] border rounded-lg overflow-hidden flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { children: "Loading editor components..." }) })) : (console.log("MDXEditor: Rendering with descriptors:", fl.length), /* @__PURE__ */ jsx("div", { className: "h-[600px] border rounded-lg overflow-hidden", children: /* @__PURE__ */ jsx(
    MDXEditor,
    {
      ref: Be,
      markdown: Jr,
      onChange: (Il) => {
        gt(Il), console.log("this is the one", Il);
        const Wr = document.querySelector(".mdx-editor-field");
        if (Wr) {
          Wr.value = Il, Wr.setAttribute("data-mdx-updated", "true");
          const Bl = new Event("input", { bubbles: !0 });
          Wr.dispatchEvent(Bl);
        }
        return Ll(), w(Il);
      },
      contentEditableClassName: "prose prose-lg max-w-none min-h-[500px] outline-none px-4 py-2",
      plugins: [
        (() => {
          const Il = createJsxComponentDescriptors(() => dt.current);
          return Il.find((Wr) => Wr.name === "Map"), jsxPlugin({
            jsxComponentDescriptors: Il,
            onError: (Wr) => {
              console.error("JSX Plugin Error:", Wr);
            }
          });
        })(),
        realmPlugin({
          allowedImports: {
            "./components": customComponents,
            "./components.jsx": customComponents
          }
        }),
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        markdownShortcutPlugin(),
        codeBlockPlugin(),
        frontmatterPlugin(),
        imagePlugin(),
        linkPlugin(),
        linkDialogPlugin(),
        directivesPlugin({
          directiveDescriptors: [CalloutDirectiveDescriptor]
        }),
        diffSourcePlugin({
          viewMode: "rich-text"
        }),
        toolbarPlugin({
          toolbarContents: () => /* @__PURE__ */ jsxs("div", { className: "grid-column", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid-row border-bottom-1px padding-y-1", children: [
              /* @__PURE__ */ jsx(UndoRedo, {}),
              /* @__PURE__ */ jsx(BoldItalicUnderlineToggles, {}),
              /* @__PURE__ */ jsx(ListsToggle, {}),
              /* @__PURE__ */ jsx(BlockTypeSelect, {}),
              /* @__PURE__ */ jsx(CreateLink, {}),
              /* @__PURE__ */ jsx(CodeToggle, {}),
              /* @__PURE__ */ jsx(InsertImage, {}),
              /* @__PURE__ */ jsx(DiffSourceToggleWrapper, {})
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid-row padding-y-1", children: [
              /* @__PURE__ */ jsx(InsertMapButton, {}),
              /* @__PURE__ */ jsx(InsertSectionBreak, {}),
              /* @__PURE__ */ jsx(InsertIframe, {})
            ] })
          ] })
        })
      ],
      className: "w-full h-full"
    },
    $l
  ) }));
}
class ErrorBoundary extends t__default.Component {
  constructor(w) {
    super(w), this.state = { hasError: !1 };
  }
  static getDerivedStateFromError(w) {
    return console.error("Error in MDX Editor:", w), { hasError: !0 };
  }
  componentDidCatch(w, k) {
    console.error("MDX Editor Error:", w, k);
  }
  render() {
    return this.state.hasError ? /* @__PURE__ */ jsx("div", { children: "Something went wrong with the MDX Editor." }) : this.props.children;
  }
}
const EDITOR_KEY = "stable-mdx-editor-instance", initialContent = `# Welcome to the MDX Editor

This is a live editor where you can write and preview MDX content.

## Features

-   Live preview
-   Markdown formatting
-   Code blocks
-   Insert custom Map components

## Example Map

This is an example of how you can embed interactive maps in your content.

Try editing this content!
`;
function EditorPage({ allAvailableDatasets: E, textarea: w, initialContent: k }) {
  const [T, ge] = useState(k || initialContent), [Be, je] = useState(k || initialContent), [Qe, Je] = useState(!1), Ze = useCallback((Xe) => {
    console.log("Content changed:", Xe), ge(Xe), w && (w.value = Xe);
  }, [w]);
  return useEffect(() => {
    Je(!0);
  }, []), /* @__PURE__ */ jsxs("div", { className: "mdx-editor-wrapper", children: [
    /* @__PURE__ */ jsx(LegacyGlobalStyles, {}),
    /* @__PURE__ */ jsx("div", { className: "mdx-editor-container", children: /* @__PURE__ */ jsx(
      Suspense,
      {
        fallback: /* @__PURE__ */ jsx("div", { className: "mdx-editor-loading", children: "Loading editor..." }),
        children: /* @__PURE__ */ jsx(ErrorBoundary, { children: /* @__PURE__ */ jsx(
          MDXEditorEnhanced,
          {
            markdown: T,
            onChange: Ze,
            editorMounted: Qe,
            previewMDAST: je,
            allAvailableDatasets: E
          },
          EDITOR_KEY
        ) })
      }
    ) })
  ] });
}
export {
  EditorPage as default
};
//# sourceMappingURL=index.js.map
