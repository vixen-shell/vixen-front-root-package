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
function _(r) {
  function o() {
    return new URLSearchParams(window.location.search).get("feature");
  }
  async function c(e) {
    const t = o();
    try {
      const i = (await e(t)).feature;
      if (i)
        return i;
      throw new Error(`'${t}' does not export feature !`);
    } catch (i) {
      return console.error(i), /* @__PURE__ */ f(
        R,
        {
          message: t ? `Feature '${t}' not found !` : "Missing feature parameter !"
        }
      );
    }
  }
  function l(e) {
    const t = () => e;
    a.createRoot(r).render(
      /* @__PURE__ */ f(m.StrictMode, { children: /* @__PURE__ */ f(t, {}) })
    );
  }
  function s(e) {
    "importCallback" in e && c(e.importCallback).then((t) => {
      l(t);
    }), "feature" in e && l(e.feature);
  }
  return { render: s };
}
const h = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  create: _
}, Symbol.toStringTag, { value: "Module" }));
export {
  h as R,
  _ as c
};
