import { jsx as c } from "react/jsx-runtime";
import m from "react";
import y from "react-dom";
import { ErrorFrame as R } from "@vixen-front/ui";
var a = {}, n = y;
if (process.env.NODE_ENV === "production")
  a.createRoot = n.createRoot, a.hydrateRoot = n.hydrateRoot;
else {
  var i = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  a.createRoot = function(r, o) {
    i.usingClientEntryPoint = !0;
    try {
      return n.createRoot(r, o);
    } finally {
      i.usingClientEntryPoint = !1;
    }
  }, a.hydrateRoot = function(r, o, u) {
    i.usingClientEntryPoint = !0;
    try {
      return n.hydrateRoot(r, o, u);
    } finally {
      i.usingClientEntryPoint = !1;
    }
  };
}
function _(r) {
  function o() {
    return new URLSearchParams(window.location.search).get("feature");
  }
  async function u(t) {
    const e = o();
    try {
      return (await t(e)).default;
    } catch (s) {
      return console.error(s), /* @__PURE__ */ c(
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
      /* @__PURE__ */ c(m.StrictMode, { children: /* @__PURE__ */ c(e, {}) })
    );
  }
  function f(t) {
    "importCallback" in t && u(t.importCallback).then((e) => {
      l(e);
    }), "feature" in t && l(t.feature);
  }
  return { render: f };
}
const h = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  create: _
}, Symbol.toStringTag, { value: "Module" }));
export {
  h as R,
  _ as c
};
