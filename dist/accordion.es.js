import Sr, { createContext as ce, useRef as le, useContext as fe } from "react";
var Q = { exports: {} }, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xr;
function de() {
  if (xr)
    return $;
  xr = 1;
  var b = Sr, v = Symbol.for("react.element"), s = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, f = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, P = { key: !0, ref: !0, __self: !0, __source: !0 };
  function C(R, d, w) {
    var p, y = {}, _ = null, O = null;
    w !== void 0 && (_ = "" + w), d.key !== void 0 && (_ = "" + d.key), d.ref !== void 0 && (O = d.ref);
    for (p in d)
      m.call(d, p) && !P.hasOwnProperty(p) && (y[p] = d[p]);
    if (R && R.defaultProps)
      for (p in d = R.defaultProps, d)
        y[p] === void 0 && (y[p] = d[p]);
    return { $$typeof: v, type: R, key: _, ref: O, props: y, _owner: f.current };
  }
  return $.Fragment = s, $.jsx = C, $.jsxs = C, $;
}
var N = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tr;
function ve() {
  return Tr || (Tr = 1, process.env.NODE_ENV !== "production" && function() {
    var b = Sr, v = Symbol.for("react.element"), s = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), R = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), F = Symbol.iterator, L = "@@iterator";
    function Or(r) {
      if (r === null || typeof r != "object")
        return null;
      var e = F && r[F] || r[L];
      return typeof e == "function" ? e : null;
    }
    var k = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(r) {
      {
        for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
          t[n - 1] = arguments[n];
        jr("error", r, t);
      }
    }
    function jr(r, e, t) {
      {
        var n = k.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (e += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + e), Function.prototype.apply.call(console[r], console, u);
      }
    }
    var kr = !1, Ar = !1, Dr = !1, Fr = !1, Lr = !1, rr;
    rr = Symbol.for("react.module.reference");
    function Ir(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === m || r === P || Lr || r === f || r === w || r === p || Fr || r === O || kr || Ar || Dr || typeof r == "object" && r !== null && (r.$$typeof === _ || r.$$typeof === y || r.$$typeof === C || r.$$typeof === R || r.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === rr || r.getModuleId !== void 0));
    }
    function Wr(r, e, t) {
      var n = r.displayName;
      if (n)
        return n;
      var i = e.displayName || e.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function er(r) {
      return r.displayName || "Context";
    }
    function x(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case m:
          return "Fragment";
        case s:
          return "Portal";
        case P:
          return "Profiler";
        case f:
          return "StrictMode";
        case w:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case R:
            var e = r;
            return er(e) + ".Consumer";
          case C:
            var t = r;
            return er(t._context) + ".Provider";
          case d:
            return Wr(r, r.render, "ForwardRef");
          case y:
            var n = r.displayName || null;
            return n !== null ? n : x(r.type) || "Memo";
          case _: {
            var i = r, u = i._payload, o = i._init;
            try {
              return x(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, I = 0, tr, nr, ar, or, ir, ur, sr;
    function cr() {
    }
    cr.__reactDisabledLog = !0;
    function $r() {
      {
        if (I === 0) {
          tr = console.log, nr = console.info, ar = console.warn, or = console.error, ir = console.group, ur = console.groupCollapsed, sr = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: cr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        I++;
      }
    }
    function Nr() {
      {
        if (I--, I === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, r, {
              value: tr
            }),
            info: j({}, r, {
              value: nr
            }),
            warn: j({}, r, {
              value: ar
            }),
            error: j({}, r, {
              value: or
            }),
            group: j({}, r, {
              value: ir
            }),
            groupCollapsed: j({}, r, {
              value: ur
            }),
            groupEnd: j({}, r, {
              value: sr
            })
          });
        }
        I < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var B = k.ReactCurrentDispatcher, J;
    function Y(r, e, t) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            J = n && n[1] || "";
          }
        return `
` + J + r;
      }
    }
    var z = !1, M;
    {
      var Yr = typeof WeakMap == "function" ? WeakMap : Map;
      M = new Yr();
    }
    function lr(r, e) {
      if (!r || z)
        return "";
      {
        var t = M.get(r);
        if (t !== void 0)
          return t;
      }
      var n;
      z = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = B.current, B.current = null, $r();
      try {
        if (e) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (T) {
              n = T;
            }
            Reflect.construct(r, [], o);
          } else {
            try {
              o.call();
            } catch (T) {
              n = T;
            }
            r.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (T) {
            n = T;
          }
          r();
        }
      } catch (T) {
        if (T && n && typeof T.stack == "string") {
          for (var a = T.stack.split(`
`), g = n.stack.split(`
`), c = a.length - 1, l = g.length - 1; c >= 1 && l >= 0 && a[c] !== g[l]; )
            l--;
          for (; c >= 1 && l >= 0; c--, l--)
            if (a[c] !== g[l]) {
              if (c !== 1 || l !== 1)
                do
                  if (c--, l--, l < 0 || a[c] !== g[l]) {
                    var E = `
` + a[c].replace(" at new ", " at ");
                    return r.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", r.displayName)), typeof r == "function" && M.set(r, E), E;
                  }
                while (c >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        z = !1, B.current = u, Nr(), Error.prepareStackTrace = i;
      }
      var D = r ? r.displayName || r.name : "", wr = D ? Y(D) : "";
      return typeof r == "function" && M.set(r, wr), wr;
    }
    function Mr(r, e, t) {
      return lr(r, !1);
    }
    function Vr(r) {
      var e = r.prototype;
      return !!(e && e.isReactComponent);
    }
    function V(r, e, t) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return lr(r, Vr(r));
      if (typeof r == "string")
        return Y(r);
      switch (r) {
        case w:
          return Y("Suspense");
        case p:
          return Y("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case d:
            return Mr(r.render);
          case y:
            return V(r.type, e, t);
          case _: {
            var n = r, i = n._payload, u = n._init;
            try {
              return V(u(i), e, t);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, fr = {}, dr = k.ReactDebugCurrentFrame;
    function q(r) {
      if (r) {
        var e = r._owner, t = V(r.type, r._source, e ? e.type : null);
        dr.setExtraStackFrame(t);
      } else
        dr.setExtraStackFrame(null);
    }
    function Ur(r, e, t, n, i) {
      {
        var u = Function.call.bind(U);
        for (var o in r)
          if (u(r, o)) {
            var a = void 0;
            try {
              if (typeof r[o] != "function") {
                var g = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              a = r[o](e, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              a = c;
            }
            a && !(a instanceof Error) && (q(i), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), q(null)), a instanceof Error && !(a.message in fr) && (fr[a.message] = !0, q(i), h("Failed %s type: %s", t, a.message), q(null));
          }
      }
    }
    var qr = Array.isArray;
    function G(r) {
      return qr(r);
    }
    function Br(r) {
      {
        var e = typeof Symbol == "function" && Symbol.toStringTag, t = e && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return t;
      }
    }
    function Jr(r) {
      try {
        return vr(r), !1;
      } catch {
        return !0;
      }
    }
    function vr(r) {
      return "" + r;
    }
    function pr(r) {
      if (Jr(r))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Br(r)), vr(r);
    }
    var W = k.ReactCurrentOwner, zr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, hr, gr, K;
    K = {};
    function Gr(r) {
      if (U.call(r, "ref")) {
        var e = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (e && e.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function Kr(r) {
      if (U.call(r, "key")) {
        var e = Object.getOwnPropertyDescriptor(r, "key").get;
        if (e && e.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function Hr(r, e) {
      if (typeof r.ref == "string" && W.current && e && W.current.stateNode !== e) {
        var t = x(W.current.type);
        K[t] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', x(W.current.type), r.ref), K[t] = !0);
      }
    }
    function Xr(r, e) {
      {
        var t = function() {
          hr || (hr = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", e));
        };
        t.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Zr(r, e) {
      {
        var t = function() {
          gr || (gr = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", e));
        };
        t.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Qr = function(r, e, t, n, i, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: v,
        // Built-in properties that belong on the element
        type: r,
        key: e,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function re(r, e, t, n, i) {
      {
        var u, o = {}, a = null, g = null;
        t !== void 0 && (pr(t), a = "" + t), Kr(e) && (pr(e.key), a = "" + e.key), Gr(e) && (g = e.ref, Hr(e, i));
        for (u in e)
          U.call(e, u) && !zr.hasOwnProperty(u) && (o[u] = e[u]);
        if (r && r.defaultProps) {
          var c = r.defaultProps;
          for (u in c)
            o[u] === void 0 && (o[u] = c[u]);
        }
        if (a || g) {
          var l = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          a && Xr(o, l), g && Zr(o, l);
        }
        return Qr(r, a, g, i, n, W.current, o);
      }
    }
    var H = k.ReactCurrentOwner, br = k.ReactDebugCurrentFrame;
    function A(r) {
      if (r) {
        var e = r._owner, t = V(r.type, r._source, e ? e.type : null);
        br.setExtraStackFrame(t);
      } else
        br.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function Z(r) {
      return typeof r == "object" && r !== null && r.$$typeof === v;
    }
    function mr() {
      {
        if (H.current) {
          var r = x(H.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function ee(r) {
      {
        if (r !== void 0) {
          var e = r.fileName.replace(/^.*[\\\/]/, ""), t = r.lineNumber;
          return `

Check your code at ` + e + ":" + t + ".";
        }
        return "";
      }
    }
    var yr = {};
    function te(r) {
      {
        var e = mr();
        if (!e) {
          var t = typeof r == "string" ? r : r.displayName || r.name;
          t && (e = `

Check the top-level render call using <` + t + ">.");
        }
        return e;
      }
    }
    function Er(r, e) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var t = te(e);
        if (yr[t])
          return;
        yr[t] = !0;
        var n = "";
        r && r._owner && r._owner !== H.current && (n = " It was passed a child from " + x(r._owner.type) + "."), A(r), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), A(null);
      }
    }
    function Rr(r, e) {
      {
        if (typeof r != "object")
          return;
        if (G(r))
          for (var t = 0; t < r.length; t++) {
            var n = r[t];
            Z(n) && Er(n, e);
          }
        else if (Z(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var i = Or(r);
          if (typeof i == "function" && i !== r.entries)
            for (var u = i.call(r), o; !(o = u.next()).done; )
              Z(o.value) && Er(o.value, e);
        }
      }
    }
    function ne(r) {
      {
        var e = r.type;
        if (e == null || typeof e == "string")
          return;
        var t;
        if (typeof e == "function")
          t = e.propTypes;
        else if (typeof e == "object" && (e.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        e.$$typeof === y))
          t = e.propTypes;
        else
          return;
        if (t) {
          var n = x(e);
          Ur(t, r.props, "prop", n, r);
        } else if (e.PropTypes !== void 0 && !X) {
          X = !0;
          var i = x(e);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof e.getDefaultProps == "function" && !e.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ae(r) {
      {
        for (var e = Object.keys(r.props), t = 0; t < e.length; t++) {
          var n = e[t];
          if (n !== "children" && n !== "key") {
            A(r), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), A(null);
            break;
          }
        }
        r.ref !== null && (A(r), h("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    function _r(r, e, t, n, i, u) {
      {
        var o = Ir(r);
        if (!o) {
          var a = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var g = ee(i);
          g ? a += g : a += mr();
          var c;
          r === null ? c = "null" : G(r) ? c = "array" : r !== void 0 && r.$$typeof === v ? (c = "<" + (x(r.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : c = typeof r, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, a);
        }
        var l = re(r, e, t, i, u);
        if (l == null)
          return l;
        if (o) {
          var E = e.children;
          if (E !== void 0)
            if (n)
              if (G(E)) {
                for (var D = 0; D < E.length; D++)
                  Rr(E[D], r);
                Object.freeze && Object.freeze(E);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Rr(E, r);
        }
        return r === m ? ae(l) : ne(l), l;
      }
    }
    function oe(r, e, t) {
      return _r(r, e, t, !0);
    }
    function ie(r, e, t) {
      return _r(r, e, t, !1);
    }
    var ue = ie, se = oe;
    N.Fragment = m, N.jsx = ue, N.jsxs = se;
  }()), N;
}
process.env.NODE_ENV === "production" ? Q.exports = de() : Q.exports = ve();
var S = Q.exports;
const pe = `.hudoro-accordion {
  border-radius: 6px;
  border: 2px solid #d1d5db;
  border-bottom: 1px solid #d1d5db;
  background: #fff;
  box-shadow: 0px 8px 30px 0px rgba(112, 144, 176, 0.18);
  overflow: hidden;
}

.hudoro-accordion-button {
  all: unset;
  box-sizing: border-box;
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
}
.hudoro-accordion-button:hover {
  background: rgba(112, 144, 176, 0.18);
}
.hudoro-accordion-button,
.hudoro-accordion-panel {
  transition: 0.3s;
  overflow: hidden;
}
.hudoro-accordion-panel {
  padding-inline: 16px;
}
.hudoro-accordion-button {
  padding: 16px;
}

.hudoro-accordion-item {
  display: grid;
  grid-template-rows: 1fr 0fr;
  transition: 0.3s;
  border-bottom: 1px solid #d1d5db;
}
.hudoro-accordion-item.active {
  transition: 0.3s;
  grid-template-rows: 1fr 1fr;
}

.hudoro-accordion-item.active > .hudoro-accordion-panel {
  padding-top: 16px;
  padding-bottom: 16px;
}

.hudoro-accordion-arrow {
  transition: 0.3s;
}
.hudoro-accordion-arrow-active {
  transform: rotate(180deg);
}
`, Cr = "hudoro-accordion-styles", he = (b) => {
  if (!document.getElementById(Cr)) {
    const v = document.createElement("style");
    v.id = Cr, v.textContent = b, document.head.appendChild(v);
  }
};
he(pe);
const Pr = ce({ allowMultiple: !1 }), be = ({ children: b, allowMultiple: v = !1 }) => {
  const s = le([]), m = (f) => {
    var C, R, d, w, p, y, _, O, F;
    const P = (C = s.current) == null ? void 0 : C.find(
      (L) => L === f
    );
    v ? P ? P && ((w = f.querySelector(".hudoro-accordion-arrow")) == null || w.classList.remove("hudoro-accordion-arrow-active"), f.classList.remove("active"), s.current = s.current.filter(
      (L) => L !== f
    )) : (f.classList.add("active"), (R = f.querySelector(".hudoro-accordion-arrow")) == null || R.classList.add("hudoro-accordion-arrow-active"), (d = s.current) == null || d.push(f)) : (p = s.current) != null && p.length ? s.current[0] === f ? ((y = s.current[0].querySelector(".hudoro-accordion-arrow")) == null || y.classList.remove("hudoro-accordion-arrow-active"), s.current[0].classList.remove("active"), s.current = []) : ((_ = s.current[0].querySelector(".hudoro-accordion-arrow")) == null || _.classList.remove("hudoro-accordion-arrow-active"), s.current[0].classList.remove("active"), s.current = [], f.classList.add("active"), s.current[0] = f, (O = s.current[0].querySelector(".hudoro-accordion-arrow")) == null || O.classList.add("hudoro-accordion-arrow-active")) : (f.classList.add("active"), (F = f.querySelector(".hudoro-accordion-arrow")) == null || F.classList.add("hudoro-accordion-arrow-active"), s.current.push(f));
  };
  return /* @__PURE__ */ S.jsx(Pr.Provider, { value: { allowMultiple: v, handlePushRef: m }, children: /* @__PURE__ */ S.jsx("div", { className: "hudoro-accordion", children: b }) });
}, me = ({ children: b }) => /* @__PURE__ */ S.jsx("div", { className: "hudoro-accordion-item", children: b }), ye = ({ children: b }) => {
  const { handlePushRef: v } = fe(Pr), s = (m) => {
    m.currentTarget.parentElement && v && v(m.currentTarget.parentElement);
  };
  return /* @__PURE__ */ S.jsxs(
    "button",
    {
      className: "hudoro-accordion-button",
      onClick: (m) => s(m),
      children: [
        /* @__PURE__ */ S.jsx("div", { children: b }),
        /* @__PURE__ */ S.jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "25",
            viewBox: "0 0 24 25",
            fill: "none",
            className: "hudoro-accordion-arrow",
            children: /* @__PURE__ */ S.jsx(
              "path",
              {
                d: "M4 9.5L12 17.5L20 9.5",
                stroke: "#111827",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            )
          }
        )
      ]
    }
  );
}, Ee = ({ children: b }) => /* @__PURE__ */ S.jsx(
  "div",
  {
    className: "hudoro-accordion-panel",
    onClick: (v) => v.stopPropagation(),
    children: b
  }
);
export {
  be as Accordion,
  ye as AccordionButton,
  me as AccordionItem,
  Ee as AccordionPanel
};
