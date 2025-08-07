import { gfmToMarkdown as me } from "mdast-util-gfm";
import { mdxJsxToMarkdown as J } from "mdast-util-mdx-jsx";
import { visit as ge, EXIT as xe } from "unist-util-visit";
import { jsx as p, jsxs as v, Fragment as y } from "react/jsx-runtime";
import { createContext as N, useContext as q, useState as ke, useRef as Ce, useEffect as be } from "react";
import { Label as A, Select as L, TextInput as we, Textarea as ve, Checkbox as ye, DatePicker as Ae } from "@trussworks/react-uswds";
import { Block as kn, Caption as Cn, CatalogContent as bn, Chapter as wn, Chart as vn, CompareImage as yn, DatasetSelectorModal as An, DevseedUiThemeProvider as Fn, ExplorationAndAnalysis as Sn, Figure as Tn, Image as En, LegacyGlobalStyles as Pn, MapBlock as _n, PageFooter as Bn, PageHeader as Mn, PageHero as Ln, Prose as Rn, ReactQueryProvider as Dn, ScrollytellingBlock as In, StoriesHubContent as jn, VedaUIProvider as Hn, externalDatasetsAtom as On, timelineDatasetsAtom as zn, useFiltersWithQS as $n, useTimelineDatasetAtom as Gn } from "@teamimpact/veda-ui";
const R = {}.hasOwnProperty;
function Fe(e, n) {
  const t = n || {};
  function r(i, ...c) {
    let o = r.invalid;
    const l = r.handlers;
    if (i && R.call(i, e)) {
      const a = String(i[e]);
      o = R.call(l, a) ? l[a] : r.unknown;
    }
    if (o)
      return o.call(this, i, ...c);
  }
  return r.handlers = t.handlers || {}, r.invalid = t.invalid, r.unknown = t.unknown, r;
}
const Se = {}.hasOwnProperty;
function V(e, n) {
  let t = -1, r;
  if (n.extensions)
    for (; ++t < n.extensions.length; )
      V(e, n.extensions[t]);
  for (r in n)
    if (Se.call(n, r))
      switch (r) {
        case "extensions":
          break;
        case "unsafe": {
          D(e[r], n[r]);
          break;
        }
        case "join": {
          D(e[r], n[r]);
          break;
        }
        case "handlers": {
          Te(e[r], n[r]);
          break;
        }
        default:
          e.options[r] = n[r];
      }
  return e;
}
function D(e, n) {
  n && e.push(...n);
}
function Te(e, n) {
  n && Object.assign(e, n);
}
function Ee(e, n, t, r) {
  const i = t.enter("blockquote"), c = t.createTracker(r);
  c.move("> "), c.shift(2);
  const o = t.indentLines(
    t.containerFlow(e, c.current()),
    Pe
  );
  return i(), o;
}
function Pe(e, n, t) {
  return ">" + (t ? "" : " ") + e;
}
function U(e, n) {
  return I(e, n.inConstruct, !0) && !I(e, n.notInConstruct, !1);
}
function I(e, n, t) {
  if (typeof n == "string" && (n = [n]), !n || n.length === 0)
    return t;
  let r = -1;
  for (; ++r < n.length; )
    if (e.includes(n[r]))
      return !0;
  return !1;
}
function j(e, n, t, r) {
  let i = -1;
  for (; ++i < t.unsafe.length; )
    if (t.unsafe[i].character === `
` && U(t.stack, t.unsafe[i]))
      return /[ \t]/.test(r.before) ? "" : " ";
  return `\\
`;
}
function _e(e, n) {
  const t = String(e);
  let r = t.indexOf(n), i = r, c = 0, o = 0;
  if (typeof n != "string")
    throw new TypeError("Expected substring");
  for (; r !== -1; )
    r === i ? ++c > o && (o = c) : c = 1, i = r + n.length, r = t.indexOf(n, i);
  return o;
}
function P(e, n) {
  return !!(n.options.fences === !1 && e.value && // If there’s no info…
  !e.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(e.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
function Be(e) {
  const n = e.options.fence || "`";
  if (n !== "`" && n !== "~")
    throw new Error(
      "Cannot serialize code with `" + n + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return n;
}
function Me(e, n, t, r) {
  const i = Be(t), c = e.value || "", o = i === "`" ? "GraveAccent" : "Tilde";
  if (P(e, t)) {
    const f = t.enter("codeIndented"), h = t.indentLines(c, Le);
    return f(), h;
  }
  const l = t.createTracker(r), a = i.repeat(Math.max(_e(c, i) + 1, 3)), s = t.enter("codeFenced");
  let u = l.move(a);
  if (e.lang) {
    const f = t.enter(`codeFencedLang${o}`);
    u += l.move(
      t.safe(e.lang, {
        before: u,
        after: " ",
        encode: ["`"],
        ...l.current()
      })
    ), f();
  }
  if (e.lang && e.meta) {
    const f = t.enter(`codeFencedMeta${o}`);
    u += l.move(" "), u += l.move(
      t.safe(e.meta, {
        before: u,
        after: `
`,
        encode: ["`"],
        ...l.current()
      })
    ), f();
  }
  return u += l.move(`
`), c && (u += l.move(c + `
`)), u += l.move(a), s(), u;
}
function Le(e, n, t) {
  return (t ? "" : "    ") + e;
}
function _(e) {
  const n = e.options.quote || '"';
  if (n !== '"' && n !== "'")
    throw new Error(
      "Cannot serialize title with `" + n + "` for `options.quote`, expected `\"`, or `'`"
    );
  return n;
}
function Re(e, n, t, r) {
  const i = _(t), c = i === '"' ? "Quote" : "Apostrophe", o = t.enter("definition");
  let l = t.enter("label");
  const a = t.createTracker(r);
  let s = a.move("[");
  return s += a.move(
    t.safe(t.associationId(e), {
      before: s,
      after: "]",
      ...a.current()
    })
  ), s += a.move("]: "), l(), // If there’s no url, or…
  !e.url || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (l = t.enter("destinationLiteral"), s += a.move("<"), s += a.move(
    t.safe(e.url, { before: s, after: ">", ...a.current() })
  ), s += a.move(">")) : (l = t.enter("destinationRaw"), s += a.move(
    t.safe(e.url, {
      before: s,
      after: e.title ? " " : `
`,
      ...a.current()
    })
  )), l(), e.title && (l = t.enter(`title${c}`), s += a.move(" " + i), s += a.move(
    t.safe(e.title, {
      before: s,
      after: i,
      ...a.current()
    })
  ), s += a.move(i), l()), o(), s;
}
function De(e) {
  const n = e.options.emphasis || "*";
  if (n !== "*" && n !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" + n + "` for `options.emphasis`, expected `*`, or `_`"
    );
  return n;
}
function b(e) {
  return "&#x" + e.toString(16).toUpperCase() + ";";
}
function Ie(e) {
  return e !== null && (e < 0 || e === 32);
}
const je = Q(/\p{P}|\p{S}/u), He = Q(/\s/);
function Q(e) {
  return n;
  function n(t) {
    return t !== null && t > -1 && e.test(String.fromCharCode(t));
  }
}
function H(e) {
  if (e === null || Ie(e) || He(e))
    return 1;
  if (je(e))
    return 2;
}
function S(e, n, t) {
  const r = H(e), i = H(n);
  return r === void 0 ? i === void 0 ? (
    // Letter inside:
    // we have to encode *both* letters for `_` as it is looser.
    // it already forms for `*` (and GFMs `~`).
    t === "_" ? { inside: !0, outside: !0 } : { inside: !1, outside: !1 }
  ) : i === 1 ? (
    // Whitespace inside: encode both (letter, whitespace).
    { inside: !0, outside: !0 }
  ) : (
    // Punctuation inside: encode outer (letter)
    { inside: !1, outside: !0 }
  ) : r === 1 ? i === void 0 ? (
    // Letter inside: already forms.
    { inside: !1, outside: !1 }
  ) : i === 1 ? (
    // Whitespace inside: encode both (whitespace).
    { inside: !0, outside: !0 }
  ) : (
    // Punctuation inside: already forms.
    { inside: !1, outside: !1 }
  ) : i === void 0 ? (
    // Letter inside: already forms.
    { inside: !1, outside: !1 }
  ) : i === 1 ? (
    // Whitespace inside: encode inner (whitespace).
    { inside: !0, outside: !1 }
  ) : (
    // Punctuation inside: already forms.
    { inside: !1, outside: !1 }
  );
}
W.peek = Oe;
function W(e, n, t, r) {
  const i = De(t), c = t.enter("emphasis"), o = t.createTracker(r), l = o.move(i);
  let a = o.move(
    t.containerPhrasing(e, {
      after: i,
      before: l,
      ...o.current()
    })
  );
  const s = a.charCodeAt(0), u = S(
    r.before.charCodeAt(r.before.length - 1),
    s,
    i
  );
  u.inside && (a = b(s) + a.slice(1));
  const f = a.charCodeAt(a.length - 1), h = S(r.after.charCodeAt(0), f, i);
  h.inside && (a = a.slice(0, -1) + b(f));
  const m = o.move(i);
  return c(), t.attentionEncodeSurroundingInfo = {
    after: h.outside,
    before: u.outside
  }, l + a + m;
}
function Oe(e, n, t) {
  return t.options.emphasis || "*";
}
const ze = {};
function Z(e, n) {
  const t = ze, r = typeof t.includeImageAlt == "boolean" ? t.includeImageAlt : !0, i = typeof t.includeHtml == "boolean" ? t.includeHtml : !0;
  return K(e, r, i);
}
function K(e, n, t) {
  if ($e(e)) {
    if ("value" in e)
      return e.type === "html" && !t ? "" : e.value;
    if (n && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return O(e.children, n, t);
  }
  return Array.isArray(e) ? O(e, n, t) : "";
}
function O(e, n, t) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = K(e[i], n, t);
  return r.join("");
}
function $e(e) {
  return !!(e && typeof e == "object");
}
function X(e, n) {
  let t = !1;
  return ge(e, function(r) {
    if ("value" in r && /\r?\n|\r/.test(r.value) || r.type === "break")
      return t = !0, xe;
  }), !!((!e.depth || e.depth < 3) && Z(e) && (n.options.setext || t));
}
function Ge(e, n, t, r) {
  const i = Math.max(Math.min(6, e.depth || 1), 1), c = t.createTracker(r);
  if (X(e, t)) {
    const u = t.enter("headingSetext"), f = t.enter("phrasing"), h = t.containerPhrasing(e, {
      ...c.current(),
      before: `
`,
      after: `
`
    });
    return f(), u(), h + `
` + (i === 1 ? "=" : "-").repeat(
      // The whole size…
      h.length - // Minus the position of the character after the last EOL (or
      // 0 if there is none)…
      (Math.max(h.lastIndexOf("\r"), h.lastIndexOf(`
`)) + 1)
    );
  }
  const o = "#".repeat(i), l = t.enter("headingAtx"), a = t.enter("phrasing");
  c.move(o + " ");
  let s = t.containerPhrasing(e, {
    before: "# ",
    after: `
`,
    ...c.current()
  });
  return /^[\t ]/.test(s) && (s = b(s.charCodeAt(0)) + s.slice(1)), s = s ? o + " " + s : o, t.options.closeAtx && (s += " " + o), a(), l(), s;
}
Y.peek = Je;
function Y(e) {
  return e.value || "";
}
function Je() {
  return "<";
}
ee.peek = Ne;
function ee(e, n, t, r) {
  const i = _(t), c = i === '"' ? "Quote" : "Apostrophe", o = t.enter("image");
  let l = t.enter("label");
  const a = t.createTracker(r);
  let s = a.move("![");
  return s += a.move(
    t.safe(e.alt, { before: s, after: "]", ...a.current() })
  ), s += a.move("]("), l(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (l = t.enter("destinationLiteral"), s += a.move("<"), s += a.move(
    t.safe(e.url, { before: s, after: ">", ...a.current() })
  ), s += a.move(">")) : (l = t.enter("destinationRaw"), s += a.move(
    t.safe(e.url, {
      before: s,
      after: e.title ? " " : ")",
      ...a.current()
    })
  )), l(), e.title && (l = t.enter(`title${c}`), s += a.move(" " + i), s += a.move(
    t.safe(e.title, {
      before: s,
      after: i,
      ...a.current()
    })
  ), s += a.move(i), l()), s += a.move(")"), o(), s;
}
function Ne() {
  return "!";
}
te.peek = qe;
function te(e, n, t, r) {
  const i = e.referenceType, c = t.enter("imageReference");
  let o = t.enter("label");
  const l = t.createTracker(r);
  let a = l.move("![");
  const s = t.safe(e.alt, {
    before: a,
    after: "]",
    ...l.current()
  });
  a += l.move(s + "]["), o();
  const u = t.stack;
  t.stack = [], o = t.enter("reference");
  const f = t.safe(t.associationId(e), {
    before: a,
    after: "]",
    ...l.current()
  });
  return o(), t.stack = u, c(), i === "full" || !s || s !== f ? a += l.move(f + "]") : i === "shortcut" ? a = a.slice(0, -1) : a += l.move("]"), a;
}
function qe() {
  return "!";
}
ne.peek = Ve;
function ne(e, n, t) {
  let r = e.value || "", i = "`", c = -1;
  for (; new RegExp("(^|[^`])" + i + "([^`]|$)").test(r); )
    i += "`";
  for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++c < t.unsafe.length; ) {
    const o = t.unsafe[c], l = t.compilePattern(o);
    let a;
    if (o.atBreak)
      for (; a = l.exec(r); ) {
        let s = a.index;
        r.charCodeAt(s) === 10 && r.charCodeAt(s - 1) === 13 && s--, r = r.slice(0, s) + " " + r.slice(a.index + 1);
      }
  }
  return i + r + i;
}
function Ve() {
  return "`";
}
function re(e, n) {
  const t = Z(e);
  return !!(!n.options.resourceLink && // If there’s a url…
  e.url && // And there’s a no title…
  !e.title && // And the content of `node` is a single text node…
  e.children && e.children.length === 1 && e.children[0].type === "text" && // And if the url is the same as the content…
  (t === e.url || "mailto:" + t === e.url) && // And that starts w/ a protocol…
  /^[a-z][a-z+.-]+:/i.test(e.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(e.url));
}
ie.peek = Ue;
function ie(e, n, t, r) {
  const i = _(t), c = i === '"' ? "Quote" : "Apostrophe", o = t.createTracker(r);
  let l, a;
  if (re(e, t)) {
    const u = t.stack;
    t.stack = [], l = t.enter("autolink");
    let f = o.move("<");
    return f += o.move(
      t.containerPhrasing(e, {
        before: f,
        after: ">",
        ...o.current()
      })
    ), f += o.move(">"), l(), t.stack = u, f;
  }
  l = t.enter("link"), a = t.enter("label");
  let s = o.move("[");
  return s += o.move(
    t.containerPhrasing(e, {
      before: s,
      after: "](",
      ...o.current()
    })
  ), s += o.move("]("), a(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (a = t.enter("destinationLiteral"), s += o.move("<"), s += o.move(
    t.safe(e.url, { before: s, after: ">", ...o.current() })
  ), s += o.move(">")) : (a = t.enter("destinationRaw"), s += o.move(
    t.safe(e.url, {
      before: s,
      after: e.title ? " " : ")",
      ...o.current()
    })
  )), a(), e.title && (a = t.enter(`title${c}`), s += o.move(" " + i), s += o.move(
    t.safe(e.title, {
      before: s,
      after: i,
      ...o.current()
    })
  ), s += o.move(i), a()), s += o.move(")"), l(), s;
}
function Ue(e, n, t) {
  return re(e, t) ? "<" : "[";
}
oe.peek = Qe;
function oe(e, n, t, r) {
  const i = e.referenceType, c = t.enter("linkReference");
  let o = t.enter("label");
  const l = t.createTracker(r);
  let a = l.move("[");
  const s = t.containerPhrasing(e, {
    before: a,
    after: "]",
    ...l.current()
  });
  a += l.move(s + "]["), o();
  const u = t.stack;
  t.stack = [], o = t.enter("reference");
  const f = t.safe(t.associationId(e), {
    before: a,
    after: "]",
    ...l.current()
  });
  return o(), t.stack = u, c(), i === "full" || !s || s !== f ? a += l.move(f + "]") : i === "shortcut" ? a = a.slice(0, -1) : a += l.move("]"), a;
}
function Qe() {
  return "[";
}
function B(e) {
  const n = e.options.bullet || "*";
  if (n !== "*" && n !== "+" && n !== "-")
    throw new Error(
      "Cannot serialize items with `" + n + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return n;
}
function We(e) {
  const n = B(e), t = e.options.bulletOther;
  if (!t)
    return n === "*" ? "-" : "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bulletOther`, expected `*`, `+`, or `-`"
    );
  if (t === n)
    throw new Error(
      "Expected `bullet` (`" + n + "`) and `bulletOther` (`" + t + "`) to be different"
    );
  return t;
}
function Ze(e) {
  const n = e.options.bulletOrdered || ".";
  if (n !== "." && n !== ")")
    throw new Error(
      "Cannot serialize items with `" + n + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return n;
}
function ce(e) {
  const n = e.options.rule || "*";
  if (n !== "*" && n !== "-" && n !== "_")
    throw new Error(
      "Cannot serialize rules with `" + n + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return n;
}
function Ke(e, n, t, r) {
  const i = t.enter("list"), c = t.bulletCurrent;
  let o = e.ordered ? Ze(t) : B(t);
  const l = e.ordered ? o === "." ? ")" : "." : We(t);
  let a = n && t.bulletLastUsed ? o === t.bulletLastUsed : !1;
  if (!e.ordered) {
    const u = e.children ? e.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (o === "*" || o === "-") && // Empty first list item:
      u && (!u.children || !u.children[0]) && // Directly in two other list items:
      t.stack[t.stack.length - 1] === "list" && t.stack[t.stack.length - 2] === "listItem" && t.stack[t.stack.length - 3] === "list" && t.stack[t.stack.length - 4] === "listItem" && // That are each the first child.
      t.indexStack[t.indexStack.length - 1] === 0 && t.indexStack[t.indexStack.length - 2] === 0 && t.indexStack[t.indexStack.length - 3] === 0 && (a = !0), ce(t) === o && u
    ) {
      let f = -1;
      for (; ++f < e.children.length; ) {
        const h = e.children[f];
        if (h && h.type === "listItem" && h.children && h.children[0] && h.children[0].type === "thematicBreak") {
          a = !0;
          break;
        }
      }
    }
  }
  a && (o = l), t.bulletCurrent = o;
  const s = t.containerFlow(e, r);
  return t.bulletLastUsed = o, t.bulletCurrent = c, i(), s;
}
function Xe(e) {
  const n = e.options.listItemIndent || "one";
  if (n !== "tab" && n !== "one" && n !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + n + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return n;
}
function Ye(e, n, t, r) {
  const i = Xe(t);
  let c = t.bulletCurrent || B(t);
  n && n.type === "list" && n.ordered && (c = (typeof n.start == "number" && n.start > -1 ? n.start : 1) + (t.options.incrementListMarker === !1 ? 0 : n.children.indexOf(e)) + c);
  let o = c.length + 1;
  (i === "tab" || i === "mixed" && (n && n.type === "list" && n.spread || e.spread)) && (o = Math.ceil(o / 4) * 4);
  const l = t.createTracker(r);
  l.move(c + " ".repeat(o - c.length)), l.shift(o);
  const a = t.enter("listItem"), s = t.indentLines(
    t.containerFlow(e, l.current()),
    u
  );
  return a(), s;
  function u(f, h, m) {
    return h ? (m ? "" : " ".repeat(o)) + f : (m ? c : c + " ".repeat(o - c.length)) + f;
  }
}
function et(e, n, t, r) {
  const i = t.enter("paragraph"), c = t.enter("phrasing"), o = t.containerPhrasing(e, r);
  return c(), i(), o;
}
const ae = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  function(e) {
    if (e == null)
      return it;
    if (typeof e == "function")
      return T(e);
    if (typeof e == "object")
      return Array.isArray(e) ? tt(e) : nt(e);
    if (typeof e == "string")
      return rt(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function tt(e) {
  const n = [];
  let t = -1;
  for (; ++t < e.length; )
    n[t] = ae(e[t]);
  return T(r);
  function r(...i) {
    let c = -1;
    for (; ++c < n.length; )
      if (n[c].apply(this, i)) return !0;
    return !1;
  }
}
function nt(e) {
  const n = (
    /** @type {Record<string, unknown>} */
    e
  );
  return T(t);
  function t(r) {
    const i = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      r
    );
    let c;
    for (c in e)
      if (i[c] !== n[c]) return !1;
    return !0;
  }
}
function rt(e) {
  return T(n);
  function n(t) {
    return t && t.type === e;
  }
}
function T(e) {
  return n;
  function n(t, r, i) {
    return !!(ot(t) && e.call(
      this,
      t,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function it() {
  return !0;
}
function ot(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const ct = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  ae([
    "break",
    "delete",
    "emphasis",
    // To do: next major: removed since footnotes were added to GFM.
    "footnote",
    "footnoteReference",
    "image",
    "imageReference",
    "inlineCode",
    // Enabled by `mdast-util-math`:
    "inlineMath",
    "link",
    "linkReference",
    // Enabled by `mdast-util-mdx`:
    "mdxJsxTextElement",
    // Enabled by `mdast-util-mdx`:
    "mdxTextExpression",
    "strong",
    "text",
    // Enabled by `mdast-util-directive`:
    "textDirective"
  ])
);
function at(e, n, t, r) {
  return (e.children.some(function(o) {
    return ct(o);
  }) ? t.containerPhrasing : t.containerFlow).call(t, e, r);
}
function lt(e) {
  const n = e.options.strong || "*";
  if (n !== "*" && n !== "_")
    throw new Error(
      "Cannot serialize strong with `" + n + "` for `options.strong`, expected `*`, or `_`"
    );
  return n;
}
le.peek = st;
function le(e, n, t, r) {
  const i = lt(t), c = t.enter("strong"), o = t.createTracker(r), l = o.move(i + i);
  let a = o.move(
    t.containerPhrasing(e, {
      after: i,
      before: l,
      ...o.current()
    })
  );
  const s = a.charCodeAt(0), u = S(
    r.before.charCodeAt(r.before.length - 1),
    s,
    i
  );
  u.inside && (a = b(s) + a.slice(1));
  const f = a.charCodeAt(a.length - 1), h = S(r.after.charCodeAt(0), f, i);
  h.inside && (a = a.slice(0, -1) + b(f));
  const m = o.move(i + i);
  return c(), t.attentionEncodeSurroundingInfo = {
    after: h.outside,
    before: u.outside
  }, l + a + m;
}
function st(e, n, t) {
  return t.options.strong || "*";
}
function ut(e, n, t, r) {
  return t.safe(e.value, r);
}
function ft(e) {
  const n = e.options.ruleRepetition || 3;
  if (n < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + n + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return n;
}
function ht(e, n, t) {
  const r = (ce(t) + (t.options.ruleSpaces ? " " : "")).repeat(ft(t));
  return t.options.ruleSpaces ? r.slice(0, -1) : r;
}
const dt = {
  blockquote: Ee,
  break: j,
  code: Me,
  definition: Re,
  emphasis: W,
  hardBreak: j,
  heading: Ge,
  html: Y,
  image: ee,
  imageReference: te,
  inlineCode: ne,
  link: ie,
  linkReference: oe,
  list: Ke,
  listItem: Ye,
  paragraph: et,
  root: at,
  strong: le,
  text: ut,
  thematicBreak: ht
}, pt = [mt];
function mt(e, n, t, r) {
  if (n.type === "code" && P(n, r) && (e.type === "list" || e.type === n.type && P(e, r)))
    return !1;
  if ("spread" in t && typeof t.spread == "boolean")
    return e.type === "paragraph" && // Two paragraphs.
    (e.type === n.type || n.type === "definition" || // Paragraph followed by a setext heading.
    n.type === "heading" && X(n, r)) ? void 0 : t.spread ? 1 : 0;
}
const w = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
], gt = [
  { character: "	", after: "[\\r\\n]", inConstruct: "phrasing" },
  { character: "	", before: "[\\r\\n]", inConstruct: "phrasing" },
  {
    character: "	",
    inConstruct: ["codeFencedLangGraveAccent", "codeFencedLangTilde"]
  },
  {
    character: "\r",
    inConstruct: [
      "codeFencedLangGraveAccent",
      "codeFencedLangTilde",
      "codeFencedMetaGraveAccent",
      "codeFencedMetaTilde",
      "destinationLiteral",
      "headingAtx"
    ]
  },
  {
    character: `
`,
    inConstruct: [
      "codeFencedLangGraveAccent",
      "codeFencedLangTilde",
      "codeFencedMetaGraveAccent",
      "codeFencedMetaTilde",
      "destinationLiteral",
      "headingAtx"
    ]
  },
  { character: " ", after: "[\\r\\n]", inConstruct: "phrasing" },
  { character: " ", before: "[\\r\\n]", inConstruct: "phrasing" },
  {
    character: " ",
    inConstruct: ["codeFencedLangGraveAccent", "codeFencedLangTilde"]
  },
  // An exclamation mark can start an image, if it is followed by a link or
  // a link reference.
  {
    character: "!",
    after: "\\[",
    inConstruct: "phrasing",
    notInConstruct: w
  },
  // A quote can break out of a title.
  { character: '"', inConstruct: "titleQuote" },
  // A number sign could start an ATX heading if it starts a line.
  { atBreak: !0, character: "#" },
  { character: "#", inConstruct: "headingAtx", after: `(?:[\r
]|$)` },
  // Dollar sign and percentage are not used in markdown.
  // An ampersand could start a character reference.
  { character: "&", after: "[#A-Za-z]", inConstruct: "phrasing" },
  // An apostrophe can break out of a title.
  { character: "'", inConstruct: "titleApostrophe" },
  // A left paren could break out of a destination raw.
  { character: "(", inConstruct: "destinationRaw" },
  // A left paren followed by `]` could make something into a link or image.
  {
    before: "\\]",
    character: "(",
    inConstruct: "phrasing",
    notInConstruct: w
  },
  // A right paren could start a list item or break out of a destination
  // raw.
  { atBreak: !0, before: "\\d+", character: ")" },
  { character: ")", inConstruct: "destinationRaw" },
  // An asterisk can start thematic breaks, list items, emphasis, strong.
  { atBreak: !0, character: "*", after: `(?:[ 	\r
*])` },
  { character: "*", inConstruct: "phrasing", notInConstruct: w },
  // A plus sign could start a list item.
  { atBreak: !0, character: "+", after: `(?:[ 	\r
])` },
  // A dash can start thematic breaks, list items, and setext heading
  // underlines.
  { atBreak: !0, character: "-", after: `(?:[ 	\r
-])` },
  // A dot could start a list item.
  { atBreak: !0, before: "\\d+", character: ".", after: `(?:[ 	\r
]|$)` },
  // Slash, colon, and semicolon are not used in markdown for constructs.
  // A less than can start html (flow or text) or an autolink.
  // HTML could start with an exclamation mark (declaration, cdata, comment),
  // slash (closing tag), question mark (instruction), or a letter (tag).
  // An autolink also starts with a letter.
  // Finally, it could break out of a destination literal.
  { atBreak: !0, character: "<", after: "[!/?A-Za-z]" },
  {
    character: "<",
    after: "[!/?A-Za-z]",
    inConstruct: "phrasing",
    notInConstruct: w
  },
  { character: "<", inConstruct: "destinationLiteral" },
  // An equals to can start setext heading underlines.
  { atBreak: !0, character: "=" },
  // A greater than can start block quotes and it can break out of a
  // destination literal.
  { atBreak: !0, character: ">" },
  { character: ">", inConstruct: "destinationLiteral" },
  // Question mark and at sign are not used in markdown for constructs.
  // A left bracket can start definitions, references, labels,
  { atBreak: !0, character: "[" },
  { character: "[", inConstruct: "phrasing", notInConstruct: w },
  { character: "[", inConstruct: ["label", "reference"] },
  // A backslash can start an escape (when followed by punctuation) or a
  // hard break (when followed by an eol).
  // Note: typical escapes are handled in `safe`!
  { character: "\\", after: "[\\r\\n]", inConstruct: "phrasing" },
  // A right bracket can exit labels.
  { character: "]", inConstruct: ["label", "reference"] },
  // Caret is not used in markdown for constructs.
  // An underscore can start emphasis, strong, or a thematic break.
  { atBreak: !0, character: "_" },
  { character: "_", inConstruct: "phrasing", notInConstruct: w },
  // A grave accent can start code (fenced or text), or it can break out of
  // a grave accent code fence.
  { atBreak: !0, character: "`" },
  {
    character: "`",
    inConstruct: ["codeFencedLangGraveAccent", "codeFencedMetaGraveAccent"]
  },
  { character: "`", inConstruct: "phrasing", notInConstruct: w },
  // Left brace, vertical bar, right brace are not used in markdown for
  // constructs.
  // A tilde can start code (fenced).
  { atBreak: !0, character: "~" }
], z = document.createElement("i");
function xt(e) {
  const n = "&" + e + ";";
  z.innerHTML = n;
  const t = z.textContent;
  return (
    // @ts-expect-error: TypeScript is wrong that `textContent` on elements can
    // yield `null`.
    t.charCodeAt(t.length - 1) === 59 && e !== "semi" || t === n ? !1 : t
  );
}
function kt(e, n) {
  const t = Number.parseInt(e, n);
  return (
    // C0 except for HT, LF, FF, CR, space.
    t < 9 || t === 11 || t > 13 && t < 32 || // Control character (DEL) of C0, and C1 controls.
    t > 126 && t < 160 || // Lone high surrogates and low surrogates.
    t > 55295 && t < 57344 || // Noncharacters.
    t > 64975 && t < 65008 || /* eslint-disable no-bitwise */
    (t & 65535) === 65535 || (t & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    t > 1114111 ? "�" : String.fromCodePoint(t)
  );
}
const Ct = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function bt(e) {
  return e.replace(Ct, wt);
}
function wt(e, n, t) {
  if (n)
    return n;
  if (t.charCodeAt(0) === 35) {
    const i = t.charCodeAt(1), c = i === 120 || i === 88;
    return kt(t.slice(c ? 2 : 1), c ? 16 : 10);
  }
  return xt(t) || e;
}
function vt(e) {
  return e.label || !e.identifier ? e.label || "" : bt(e.identifier);
}
function yt(e) {
  if (!e._compiled) {
    const n = (e.atBreak ? "[\\r\\n][\\t ]*" : "") + (e.before ? "(?:" + e.before + ")" : "");
    e._compiled = new RegExp(
      (n ? "(" + n + ")" : "") + (/[|\\{}()[\]^$+*?.-]/.test(e.character) ? "\\" : "") + e.character + (e.after ? "(?:" + e.after + ")" : ""),
      "g"
    );
  }
  return e._compiled;
}
function At(e, n, t) {
  const r = n.indexStack, i = e.children || [], c = [];
  let o = -1, l = t.before, a;
  r.push(-1);
  let s = n.createTracker(t);
  for (; ++o < i.length; ) {
    const u = i[o];
    let f;
    if (r[r.length - 1] = o, o + 1 < i.length) {
      let g = n.handle.handlers[i[o + 1].type];
      g && g.peek && (g = g.peek), f = g ? g(i[o + 1], e, n, {
        before: "",
        after: "",
        ...s.current()
      }).charAt(0) : "";
    } else
      f = t.after;
    c.length > 0 && (l === "\r" || l === `
`) && u.type === "html" && (c[c.length - 1] = c[c.length - 1].replace(
      /(\r?\n|\r)$/,
      " "
    ), l = " ", s = n.createTracker(t), s.move(c.join("")));
    let h = n.handle(u, e, n, {
      ...s.current(),
      after: f,
      before: l
    });
    a && a === h.slice(0, 1) && (h = b(a.charCodeAt(0)) + h.slice(1));
    const m = n.attentionEncodeSurroundingInfo;
    n.attentionEncodeSurroundingInfo = void 0, a = void 0, m && (c.length > 0 && m.before && l === c[c.length - 1].slice(-1) && (c[c.length - 1] = c[c.length - 1].slice(0, -1) + b(l.charCodeAt(0))), m.after && (a = f)), s.move(h), c.push(h), l = h.slice(-1);
  }
  return r.pop(), c.join("");
}
function Ft(e, n, t) {
  const r = n.indexStack, i = e.children || [], c = n.createTracker(t), o = [];
  let l = -1;
  for (r.push(-1); ++l < i.length; ) {
    const a = i[l];
    r[r.length - 1] = l, o.push(
      c.move(
        n.handle(a, e, n, {
          before: `
`,
          after: `
`,
          ...c.current()
        })
      )
    ), a.type !== "list" && (n.bulletLastUsed = void 0), l < i.length - 1 && o.push(
      c.move(St(a, i[l + 1], e, n))
    );
  }
  return r.pop(), o.join("");
}
function St(e, n, t, r) {
  let i = r.join.length;
  for (; i--; ) {
    const c = r.join[i](e, n, t, r);
    if (c === !0 || c === 1)
      break;
    if (typeof c == "number")
      return `
`.repeat(1 + c);
    if (c === !1)
      return `

<!---->

`;
  }
  return `

`;
}
const Tt = /\r?\n|\r/g;
function Et(e, n) {
  const t = [];
  let r = 0, i = 0, c;
  for (; c = Tt.exec(e); )
    o(e.slice(r, c.index)), t.push(c[0]), r = c.index + c[0].length, i++;
  return o(e.slice(r)), t.join("");
  function o(l) {
    t.push(n(l, i, !l));
  }
}
function Pt(e, n, t) {
  const r = (t.before || "") + (n || "") + (t.after || ""), i = [], c = [], o = {};
  let l = -1;
  for (; ++l < e.unsafe.length; ) {
    const u = e.unsafe[l];
    if (!U(e.stack, u))
      continue;
    const f = e.compilePattern(u);
    let h;
    for (; h = f.exec(r); ) {
      const m = "before" in u || !!u.atBreak, g = "after" in u, k = h.index + (m ? h[1].length : 0);
      i.includes(k) ? (o[k].before && !m && (o[k].before = !1), o[k].after && !g && (o[k].after = !1)) : (i.push(k), o[k] = { before: m, after: g });
    }
  }
  i.sort(_t);
  let a = t.before ? t.before.length : 0;
  const s = r.length - (t.after ? t.after.length : 0);
  for (l = -1; ++l < i.length; ) {
    const u = i[l];
    u < a || u >= s || u + 1 < s && i[l + 1] === u + 1 && o[u].after && !o[u + 1].before && !o[u + 1].after || i[l - 1] === u - 1 && o[u].before && !o[u - 1].before && !o[u - 1].after || (a !== u && c.push($(r.slice(a, u), "\\")), a = u, /[!-/:-@[-`{-~]/.test(r.charAt(u)) && (!t.encode || !t.encode.includes(r.charAt(u))) ? c.push("\\") : (c.push(b(r.charCodeAt(u))), a++));
  }
  return c.push($(r.slice(a, s), t.after)), c.join("");
}
function _t(e, n) {
  return e - n;
}
function $(e, n) {
  const t = /\\(?=[!-/:-@[-`{-~])/g, r = [], i = [], c = e + n;
  let o = -1, l = 0, a;
  for (; a = t.exec(c); )
    r.push(a.index);
  for (; ++o < r.length; )
    l !== r[o] && i.push(e.slice(l, r[o])), i.push("\\"), l = r[o];
  return i.push(e.slice(l)), i.join("");
}
function Bt(e) {
  const n = e || {}, t = n.now || {};
  let r = n.lineShift || 0, i = t.line || 1, c = t.column || 1;
  return { move: a, current: o, shift: l };
  function o() {
    return { now: { line: i, column: c }, lineShift: r };
  }
  function l(s) {
    r += s;
  }
  function a(s) {
    const u = s || "", f = u.split(/\r?\n|\r/g), h = f[f.length - 1];
    return i += f.length - 1, c = f.length === 1 ? c + h.length : 1 + h.length + r, u;
  }
}
function Mt(e, n) {
  const t = n || {}, r = {
    associationId: vt,
    containerPhrasing: It,
    containerFlow: jt,
    createTracker: Bt,
    compilePattern: yt,
    enter: c,
    // @ts-expect-error: GFM / frontmatter are typed in `mdast` but not defined
    // here.
    handlers: { ...dt },
    // @ts-expect-error: add `handle` in a second.
    handle: void 0,
    indentLines: Et,
    indexStack: [],
    join: [...pt],
    options: {},
    safe: Ht,
    stack: [],
    unsafe: [...gt]
  };
  V(r, t), r.options.tightDefinitions && r.join.push(Dt), r.handle = Fe("type", {
    invalid: Lt,
    unknown: Rt,
    handlers: r.handlers
  });
  let i = r.handle(e, void 0, r, {
    before: `
`,
    after: `
`,
    now: { line: 1, column: 1 },
    lineShift: 0
  });
  return i && i.charCodeAt(i.length - 1) !== 10 && i.charCodeAt(i.length - 1) !== 13 && (i += `
`), i;
  function c(o) {
    return r.stack.push(o), l;
    function l() {
      r.stack.pop();
    }
  }
}
function Lt(e) {
  throw new Error("Cannot handle value `" + e + "`, expected node");
}
function Rt(e) {
  const n = (
    /** @type {Nodes} */
    e
  );
  throw new Error("Cannot handle unknown node `" + n.type + "`");
}
function Dt(e, n) {
  if (e.type === "definition" && e.type === n.type)
    return 0;
}
function It(e, n) {
  return At(e, this, n);
}
function jt(e, n) {
  return Ft(e, this, n);
}
function Ht(e, n) {
  return Pt(this, e, n);
}
function Ot() {
  return {
    handlers: {
      mdxFlowExpression: G,
      mdxTextExpression: G
    },
    unsafe: [
      { character: "{", inConstruct: ["phrasing"] },
      { atBreak: !0, character: "{" }
    ]
  };
}
function G(e, n, t) {
  const r = e.value || "";
  return "{" + t.indentLines(r, function(c, o, l) {
    return (o === 0 || l ? "" : "  ") + c;
  }) + "}";
}
function zt() {
  return { handlers: { mdxjsEsm: $t } };
}
function $t(e) {
  return e.value || "";
}
function Gt(e) {
  return {
    extensions: [
      Ot(),
      J(e),
      zt()
    ]
  };
}
const Jt = (e) => {
  const n = [], t = (r, i, c) => {
    if (r.type === "text" && r.value && r.value.includes("import") && r.value.includes("from") && i && Array.isArray(i.children) && typeof c == "number") {
      i.children.splice(c, 1), n.push({
        type: "paragraph",
        children: [r]
      });
      return;
    }
    if (r.children && Array.isArray(r.children)) {
      const o = [...r.children];
      for (let l = 0; l < o.length; l++)
        t(o[l], r, l);
    }
  };
  return t(e, null, null), e.type === "root" && Array.isArray(e.children) && (e.children = [...n, ...e.children]), e;
}, se = (e) => {
  const n = e.attributes.reduce((r, i) => (r[i.name] = i.value, r), {});
  return {
    type: "mdxJsxFlowElement",
    name: "Figure",
    attributes: [],
    children: [
      { ...e },
      {
        type: "mdxJsxFlowElement",
        name: "Caption",
        attributes: [
          { name: "attrAuthor", value: n.attrAuthor },
          { name: "attrUrl", value: n.attrUrl }
        ],
        children: [{ type: "text", value: n.caption }]
      }
    ]
  };
}, Nt = (e) => {
  const n = [];
  for (const t of e.children)
    if (t.children.some(
      (r) => r.name === "Chart" || r.name === "Map"
    ))
      for (const r of t.children)
        (r.name === "Chart" || r.name === "Map") && n.push(se(r));
    else
      n.push({
        type: "mdxJsxFlowElement",
        name: "Prose",
        attributes: [],
        children: [...t.children]
      });
  return n;
}, qt = (e) => {
  const n = [], t = (i) => ({
    type: "mdxJsxFlowElement",
    name: "Prose",
    children: [...i]
  }), r = (i) => {
    const c = [];
    let o = [];
    for (const l of i)
      if (l.type === "mdxJsxTextElement" || l.type === "mdxJsxFlowElement") {
        if (l.name === "Break")
          o.length > 0 && (c.push([t(o)]), o = []);
        else if (l.name === "Block" || l.name === "Chart" || l.name === "Map" || l.name === "MapBlock" || l.name === "TwoColumn") {
          if (c.push([t(o)]), l.name === "Chart" || l.name === "Map")
            c.push([se(l)]);
          else if (l.name === "TwoColumn") {
            const a = Nt(l);
            c.push(a);
          }
          o = [];
        }
      } else
        o.push(l);
    return o.length > 0 && c.push([...o]), c;
  };
  if (e.type === "root" && Array.isArray(e.children)) {
    const i = r(e.children);
    for (const c of i)
      c.some((o) => o.name === "Prose") ? n.push({
        type: "mdxJsxFlowElement",
        name: "Block",
        children: [...c]
      }) : n.push({
        type: "mdxJsxFlowElement",
        name: "Block",
        children: [
          {
            type: "mdxJsxFlowElement",
            name: "Prose",
            children: [...c]
          }
        ]
      });
  }
  return n;
}, Vt = (e) => {
  if (!e || e.type !== "root" || !Array.isArray(e.children))
    return e;
  const n = [];
  for (const t of e.children)
    t.type === "paragraph" && t.children.length === 1 && t.children[0].type === "mdxJsxFlowElement" ? n.push(t.children[0]) : n.push(t);
  return { ...e, children: n };
}, cn = (e) => {
  const n = Vt(e), t = qt(n);
  Jt(n);
  const r = { ...n, children: t };
  return ((c) => Mt(c, {
    extensions: [Gt(), me(), J()]
  }))(r);
}, ue = N(null), an = ({
  children: e,
  value: n
}) => /* @__PURE__ */ p(ue.Provider, { value: n, children: e }), ln = () => {
  const e = q(ue);
  if (!e)
    throw new Error("useChartContext must be used within a ChartContextProvider");
  return e;
}, fe = N(null), sn = ({
  children: e,
  value: n
}) => /* @__PURE__ */ p(fe.Provider, { value: n, children: e }), un = () => {
  const e = q(fe);
  if (!e)
    throw new Error("useMapContext must be used within a MapContextProvider");
  return e;
}, fn = () => {
}, Ut = (e) => {
  const n = {
    "%d": "(0[1-9]|[12][0-9]|3[01])",
    "%m": "(0[1-9]|1[0-2])",
    "%Y": "\\d{4}",
    "%y": "\\d{2}",
    "%H": "([01][0-9]|2[0-3])",
    "%M": "([0-5][0-9])",
    "%S": "([0-5][0-9])"
  }, t = (i) => i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  let r = "";
  for (let i = 0; i < e.length; i++)
    if (e[i] === "%" && i < e.length - 1) {
      const c = e[i] + e[i + 1];
      r += n[c] || t(c), i++;
    } else
      r += t(e[i]);
  return new RegExp(`^${r}$`);
}, C = (e, n) => !Ut(e).test(n), Qt = (e, n, t, r, i, c, o) => {
  e === "highlightStart" || e === "highlightEnd" ? C(n.draftDateFormat, i) === !1 ? (t({
    highlightStart: C(
      n.draftDateFormat,
      n.draftHighlightStart
    ),
    highlightEnd: C(
      n.draftDateFormat,
      n.draftHighlightEnd
    )
  }), r.highlightStart == !1 && r.highlightEnd == !1 && c({
    ...o,
    dateFormat: n.draftDateFormat,
    highlightStart: n.draftHighlightStart,
    highlightEnd: n.draftHighlightEnd
  })) : t({
    highlightStart: C(
      n.draftDateFormat,
      n.draftHighlightStart
    ),
    highlightEnd: C(
      n.draftDateFormat,
      n.draftHighlightEnd
    )
  }) : e === "dateFormat" ? t({
    highlightStart: C(i, o.highlightStart),
    highlightEnd: C(i, o.highlightEnd)
  }) : r.highlightStart == !1 && r.highlightEnd == !1 && c({
    ...o,
    dateFormat: n.draftDateFormat,
    highlightStart: n.draftHighlightStart,
    highlightEnd: n.draftHighlightEnd
  });
}, Wt = (e, n, t, r, i, c, o) => {
  C(n.defaultDateFormat, i) === !1 || i === "" ? (r({ ...t, [e]: !1 }), c({ ...o, [e]: i })) : r({ ...t, [e]: !0 });
}, Zt = (e, n, t, r, i, c, o) => {
  const l = /^\[[+-]?(0|[1-9][0-9]*)(\.[0-9]+)?(?:,\s*[+-]?(0|[1-9][0-9]*)(\.[0-9]+)?)*\]$/, a = i.replace(/\s/g, "");
  if (l.test(a)) {
    const s = JSON.parse(a), u = (h) => h <= 180 && h >= -180, f = (h) => h <= 90 && h >= -90;
    u(s[0]) && f(s[1]) ? (r({ ...t, [e]: !1 }), c({ ...o, [e]: i })) : r({ ...t, [e]: !0 });
  } else
    r({ ...t, [e]: !0 });
}, F = (e, n) => e && !n ? { validationStatus: "error" } : "", Kt = [
  "Blues",
  "Greens",
  "Greys",
  "Oranges",
  "Purples",
  "Reds",
  "Turbo",
  "Viridis",
  "Inferno",
  "Magma",
  "Plasma",
  "Cividis",
  "Warm",
  "Cool",
  "CubehelixDefault"
], Xt = (e) => {
  const {
    value: n,
    isRequired: t,
    type: r,
    fieldName: i,
    hint: c,
    onChange: o,
    componentProps: l,
    propName: a,
    placeHolder: s,
    validateAgainst: u,
    draftInputs: f,
    setDraftInputs: h,
    inputErrors: m,
    setInputErrors: g,
    options: k
  } = e;
  if (k && Array.isArray(k))
    return /* @__PURE__ */ v(y, { children: [
      /* @__PURE__ */ p(A, { htmlFor: a, className: "margin-top-2", children: i }),
      /* @__PURE__ */ p("span", { className: "usa-hint", children: c }),
      /* @__PURE__ */ v(
        L,
        {
          id: a,
          name: a,
          value: n,
          onChange: (d) => o({ ...l, [a]: d.target.value }),
          ...F(t, n),
          children: [
            /* @__PURE__ */ p("option", { value: "", children: "- Select option -" }),
            k.map((d) => {
              const M = typeof d == "object" ? d.value : d, pe = typeof d == "object" ? d.label : d;
              return /* @__PURE__ */ p("option", { value: M, children: pe }, M);
            })
          ]
        }
      )
    ] });
  const he = r !== void 0 && r.toLowerCase(), [x, de] = ke(n), E = Ce(null);
  switch (be(() => (a === "dateFormat" && x != f.draftDateFormat && h({ ...f, draftDateFormat: x }), a === "highlightStart" && x != f.draftHighlightStart && h({ ...f, draftHighlightStart: x }), a === "highlightEnd" && x != f.draftHighlightEnd && h({ ...f, draftHighlightEnd: x }), clearTimeout(E.current), E.current = setTimeout(() => {
    u && (a === "dateFormat" || a === "highlightStart" || a === "highlightEnd" ? Qt(
      a,
      f,
      g,
      m,
      x,
      o,
      l
    ) : u === "defaultDateFormat" ? Wt(
      a,
      f,
      m,
      g,
      x,
      o,
      l
    ) : u === "centerFormat" ? Zt(
      a,
      f,
      m,
      g,
      x,
      o,
      l
    ) : o({ ...l, [a]: x }));
  }, 400), () => clearTimeout(E.current)), [x, f]), he) {
    case "date":
      return (
        //CHORE: Need to clean up or delete
        /* @__PURE__ */ v(y, { children: [
          /* @__PURE__ */ p(A, { htmlFor: "input-type-text", className: "margin-top-2", children: i }),
          /* @__PURE__ */ p("span", { className: "usa-hint", children: c }),
          /* @__PURE__ */ p(
            Ae,
            {
              defaultValue: n,
              onChange: (d) => console.log("DatePicker", d),
              ...F(t, n)
            }
          )
        ] })
      );
    case "checkbox":
      return /* @__PURE__ */ p(
        ye,
        {
          id: i,
          name: "checkbox",
          label: i,
          onChange: (d) => o({ ...l, [a]: d.target.value })
        }
      );
    case "select":
      return /* @__PURE__ */ v(y, { children: [
        /* @__PURE__ */ p(A, { htmlFor: "input-type-text", className: "margin-top-2", children: i }),
        /* @__PURE__ */ p("span", { className: "usa-hint", children: c }),
        /* @__PURE__ */ p(
          L,
          {
            id: i,
            name: i,
            onChange: (d) => o({ ...l, [a]: d.target.value }),
            children: Kt.map((d) => /* @__PURE__ */ p("option", { value: d, children: d }, d))
          }
        )
      ] });
    case "area":
      return /* @__PURE__ */ v(y, { children: [
        /* @__PURE__ */ p(A, { htmlFor: "input-type-text", className: "margin-top-2", children: i }),
        /* @__PURE__ */ p("span", { className: "usa-hint", children: c }),
        /* @__PURE__ */ p(
          ve,
          {
            id: "input-type-text",
            name: "input-type-text",
            value: n,
            onChange: (d) => {
              o({ ...l, [a]: d.target.value });
            },
            className: "",
            ...F(t, n)
          }
        )
      ] });
    default:
      return /* @__PURE__ */ v(y, { children: [
        /* @__PURE__ */ p(A, { htmlFor: "input-type-text", className: "margin-top-2", children: i }),
        /* @__PURE__ */ p("span", { className: "usa-hint", children: c }),
        /* @__PURE__ */ p(
          we,
          {
            id: "input-type-text",
            name: "input-type-text",
            type: "text",
            value: u ? x : n,
            onChange: (d) => {
              u ? de(d.target.value) : o({ ...l, [a]: d.target.value });
            },
            placeholder: s,
            ...F(t, n),
            validationStatus: u && (m[a] ? "error" : void 0)
          }
        )
      ] });
  }
}, hn = (e) => {
  const { propName: n, customClass: t } = e;
  return /* @__PURE__ */ p("div", { className: t, children: Xt(e) }, n);
};
function dn(e) {
  const n = e.taxonomy.map((t) => {
    const r = t.values.map((i) => ({
      id: i.replace(/ /g, "_").toLowerCase(),
      name: i
    }));
    return { ...t, values: r };
  });
  return { ...e, taxonomy: n };
}
const pn = (e) => e?.map((n) => ({
  ...n.metadata
})), mn = (e) => {
  const n = {};
  return e?.map((t) => {
    const r = t.metadata.id;
    n[r] = {
      data: t.metadata
    };
  }), n;
};
export {
  kn as Block,
  Cn as Caption,
  bn as CatalogContent,
  wn as Chapter,
  vn as Chart,
  an as ChartContextProvider,
  yn as CompareImage,
  An as DatasetSelectorModal,
  Fn as DevseedUiThemeProvider,
  Sn as ExplorationAndAnalysis,
  Tn as Figure,
  En as Image,
  hn as InputField,
  Pn as LegacyGlobalStyles,
  _n as MapBlock,
  sn as MapContextProvider,
  Bn as PageFooter,
  Mn as PageHeader,
  Ln as PageHero,
  Rn as Prose,
  Dn as ReactQueryProvider,
  In as ScrollytellingBlock,
  jn as StoriesHubContent,
  Hn as VedaUIProvider,
  C as dateFormatValidation,
  Ut as dateStringToregex,
  On as externalDatasetsAtom,
  Jt as extractImports,
  qt as groupByBreakIntoBlocks,
  Qt as handleChartDateValidation,
  Zt as handleMapArrayValidation,
  Wt as handleMapDateValidation,
  Nt as handleTwoColumn,
  fn as inputValidation,
  dn as processTaxonomies,
  cn as reserializedMdxContent,
  zn as timelineDatasetsAtom,
  pn as transformToDatasetsList,
  mn as transformToVedaData,
  ln as useChartContext,
  $n as useFiltersWithQS,
  un as useMapContext,
  Gn as useTimelineDatasetAtom,
  se as wrapComponent
};
//# sourceMappingURL=index.js.map
