import { jsx as f } from "react/jsx-runtime";
import m from "react";
import y from "react-dom";
import { ErrorFrame as R } from "@vixen-front/ui";
var a = {}, n = y;
if (process.env.NODE_ENV === "production")
  a.createRoot = n.createRoot, a.hydrateRoot = n.hydrateRoot;
else {
  var u = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  a.createRoot = function(r, o) {
    u.usingClientEntryPoint = !0;
    try {
      return n.createRoot(r, o);
    } finally {
      u.usingClientEntryPoint = !1;
    }
  }, a.hydrateRoot = function(r, o, c) {
    u.usingClientEntryPoint = !0;
    try {
      return n.hydrateRoot(r, o, c);
    } finally {
      u.usingClientEntryPoint = !1;
    }
  };
}
function d(r) {
  function o() {
    return new URLSearchParams(window.location.search).get("feature");
  }
  async function c(t) {
    const e = o();
    try {
      const i = (await t(e)).default;
      if (i)
        return i;
      throw new Error(
        `'${e}' does not export feature as default !`
      );
    } catch (i) {
      return console.error(i), /* @__PURE__ */ f(
        R,
        {
          message: e ? `Feature '${e}' not found !` : "Missing feature parameter !"
        }
      );
    }
  }
  function l(t) {
    const e = () => t;
    a.createRoot(r).render(
      /* @__PURE__ */ f(m.StrictMode, { children: /* @__PURE__ */ f(e, {}) })
    );
  }
  function s(t) {
    "importCallback" in t && c(t.importCallback).then((e) => {
      l(e);
    }), "feature" in t && l(t.feature);
  }
  return { render: s };
}
const h = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  create: d
}, Symbol.toStringTag, { value: "Module" }));
export {
  h as R,
  d as c
};
