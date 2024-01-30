(function(R,x){typeof exports=="object"&&typeof module<"u"?x(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],x):(R=typeof globalThis<"u"?globalThis:R||self,x(R.Accordion={},R.React))})(this,function(R,x){"use strict";var z={exports:{}},I={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ne;function je(){if(ne)return I;ne=1;var g=x,v=Symbol.for("react.element"),c=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,f=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function O(_,d,T){var p,y={},w=null,k=null;T!==void 0&&(w=""+T),d.key!==void 0&&(w=""+d.key),d.ref!==void 0&&(k=d.ref);for(p in d)m.call(d,p)&&!j.hasOwnProperty(p)&&(y[p]=d[p]);if(_&&_.defaultProps)for(p in d=_.defaultProps,d)y[p]===void 0&&(y[p]=d[p]);return{$$typeof:v,type:_,key:w,ref:k,props:y,_owner:f.current}}return I.Fragment=c,I.jsx=O,I.jsxs=O,I}var W={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var te;function ke(){return te||(te=1,process.env.NODE_ENV!=="production"&&function(){var g=x,v=Symbol.for("react.element"),c=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),_=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),k=Symbol.for("react.offscreen"),N=Symbol.iterator,Y="@@iterator";function We(e){if(e===null||typeof e!="object")return null;var r=N&&e[N]||e[Y];return typeof r=="function"?r:null}var D=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function h(e){{for(var r=arguments.length,n=new Array(r>1?r-1:0),t=1;t<r;t++)n[t-1]=arguments[t];Ne("error",e,n)}}function Ne(e,r,n){{var t=D.ReactDebugCurrentFrame,i=t.getStackAddendum();i!==""&&(r+="%s",n=n.concat([i]));var u=n.map(function(o){return String(o)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var Ye=!1,Me=!1,Ve=!1,Ue=!1,$e=!1,ie;ie=Symbol.for("react.module.reference");function Be(e){return!!(typeof e=="string"||typeof e=="function"||e===m||e===j||$e||e===f||e===T||e===p||Ue||e===k||Ye||Me||Ve||typeof e=="object"&&e!==null&&(e.$$typeof===w||e.$$typeof===y||e.$$typeof===O||e.$$typeof===_||e.$$typeof===d||e.$$typeof===ie||e.getModuleId!==void 0))}function qe(e,r,n){var t=e.displayName;if(t)return t;var i=r.displayName||r.name||"";return i!==""?n+"("+i+")":n}function ue(e){return e.displayName||"Context"}function C(e){if(e==null)return null;if(typeof e.tag=="number"&&h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case m:return"Fragment";case c:return"Portal";case j:return"Profiler";case f:return"StrictMode";case T:return"Suspense";case p:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _:var r=e;return ue(r)+".Consumer";case O:var n=e;return ue(n._context)+".Provider";case d:return qe(e,e.render,"ForwardRef");case y:var t=e.displayName||null;return t!==null?t:C(e.type)||"Memo";case w:{var i=e,u=i._payload,o=i._init;try{return C(o(u))}catch{return null}}}return null}var A=Object.assign,M=0,ce,se,le,fe,de,ve,pe;function he(){}he.__reactDisabledLog=!0;function Je(){{if(M===0){ce=console.log,se=console.info,le=console.warn,fe=console.error,de=console.group,ve=console.groupCollapsed,pe=console.groupEnd;var e={configurable:!0,enumerable:!0,value:he,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}M++}}function ze(){{if(M--,M===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:A({},e,{value:ce}),info:A({},e,{value:se}),warn:A({},e,{value:le}),error:A({},e,{value:fe}),group:A({},e,{value:de}),groupCollapsed:A({},e,{value:ve}),groupEnd:A({},e,{value:pe})})}M<0&&h("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var G=D.ReactCurrentDispatcher,K;function U(e,r,n){{if(K===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);K=t&&t[1]||""}return`
`+K+e}}var H=!1,$;{var Ge=typeof WeakMap=="function"?WeakMap:Map;$=new Ge}function be(e,r){if(!e||H)return"";{var n=$.get(e);if(n!==void 0)return n}var t;H=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=G.current,G.current=null,Je();try{if(r){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(S){t=S}Reflect.construct(e,[],o)}else{try{o.call()}catch(S){t=S}e.call(o.prototype)}}else{try{throw Error()}catch(S){t=S}e()}}catch(S){if(S&&t&&typeof S.stack=="string"){for(var a=S.stack.split(`
`),b=t.stack.split(`
`),s=a.length-1,l=b.length-1;s>=1&&l>=0&&a[s]!==b[l];)l--;for(;s>=1&&l>=0;s--,l--)if(a[s]!==b[l]){if(s!==1||l!==1)do if(s--,l--,l<0||a[s]!==b[l]){var E=`
`+a[s].replace(" at new "," at ");return e.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",e.displayName)),typeof e=="function"&&$.set(e,E),E}while(s>=1&&l>=0);break}}}finally{H=!1,G.current=u,ze(),Error.prepareStackTrace=i}var L=e?e.displayName||e.name:"",Oe=L?U(L):"";return typeof e=="function"&&$.set(e,Oe),Oe}function Ke(e,r,n){return be(e,!1)}function He(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function B(e,r,n){if(e==null)return"";if(typeof e=="function")return be(e,He(e));if(typeof e=="string")return U(e);switch(e){case T:return U("Suspense");case p:return U("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case d:return Ke(e.render);case y:return B(e.type,r,n);case w:{var t=e,i=t._payload,u=t._init;try{return B(u(i),r,n)}catch{}}}return""}var q=Object.prototype.hasOwnProperty,ge={},me=D.ReactDebugCurrentFrame;function J(e){if(e){var r=e._owner,n=B(e.type,e._source,r?r.type:null);me.setExtraStackFrame(n)}else me.setExtraStackFrame(null)}function Xe(e,r,n,t,i){{var u=Function.call.bind(q);for(var o in e)if(u(e,o)){var a=void 0;try{if(typeof e[o]!="function"){var b=Error((t||"React class")+": "+n+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw b.name="Invariant Violation",b}a=e[o](r,o,t,n,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(s){a=s}a&&!(a instanceof Error)&&(J(i),h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",t||"React class",n,o,typeof a),J(null)),a instanceof Error&&!(a.message in ge)&&(ge[a.message]=!0,J(i),h("Failed %s type: %s",n,a.message),J(null))}}}var Ze=Array.isArray;function X(e){return Ze(e)}function Qe(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,n=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return n}}function er(e){try{return ye(e),!1}catch{return!0}}function ye(e){return""+e}function Ee(e){if(er(e))return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Qe(e)),ye(e)}var V=D.ReactCurrentOwner,rr={key:!0,ref:!0,__self:!0,__source:!0},Re,_e,Z;Z={};function nr(e){if(q.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function tr(e){if(q.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function ar(e,r){if(typeof e.ref=="string"&&V.current&&r&&V.current.stateNode!==r){var n=C(V.current.type);Z[n]||(h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',C(V.current.type),e.ref),Z[n]=!0)}}function or(e,r){{var n=function(){Re||(Re=!0,h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};n.isReactWarning=!0,Object.defineProperty(e,"key",{get:n,configurable:!0})}}function ir(e,r){{var n=function(){_e||(_e=!0,h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};n.isReactWarning=!0,Object.defineProperty(e,"ref",{get:n,configurable:!0})}}var ur=function(e,r,n,t,i,u,o){var a={$$typeof:v,type:e,key:r,ref:n,props:o,_owner:u};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:t}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function cr(e,r,n,t,i){{var u,o={},a=null,b=null;n!==void 0&&(Ee(n),a=""+n),tr(r)&&(Ee(r.key),a=""+r.key),nr(r)&&(b=r.ref,ar(r,i));for(u in r)q.call(r,u)&&!rr.hasOwnProperty(u)&&(o[u]=r[u]);if(e&&e.defaultProps){var s=e.defaultProps;for(u in s)o[u]===void 0&&(o[u]=s[u])}if(a||b){var l=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&or(o,l),b&&ir(o,l)}return ur(e,a,b,i,t,V.current,o)}}var Q=D.ReactCurrentOwner,we=D.ReactDebugCurrentFrame;function F(e){if(e){var r=e._owner,n=B(e.type,e._source,r?r.type:null);we.setExtraStackFrame(n)}else we.setExtraStackFrame(null)}var ee;ee=!1;function re(e){return typeof e=="object"&&e!==null&&e.$$typeof===v}function xe(){{if(Q.current){var e=C(Q.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function sr(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),n=e.lineNumber;return`

Check your code at `+r+":"+n+"."}return""}}var Te={};function lr(e){{var r=xe();if(!r){var n=typeof e=="string"?e:e.displayName||e.name;n&&(r=`

Check the top-level render call using <`+n+">.")}return r}}function Ce(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var n=lr(r);if(Te[n])return;Te[n]=!0;var t="";e&&e._owner&&e._owner!==Q.current&&(t=" It was passed a child from "+C(e._owner.type)+"."),F(e),h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',n,t),F(null)}}function Se(e,r){{if(typeof e!="object")return;if(X(e))for(var n=0;n<e.length;n++){var t=e[n];re(t)&&Ce(t,r)}else if(re(e))e._store&&(e._store.validated=!0);else if(e){var i=We(e);if(typeof i=="function"&&i!==e.entries)for(var u=i.call(e),o;!(o=u.next()).done;)re(o.value)&&Ce(o.value,r)}}}function fr(e){{var r=e.type;if(r==null||typeof r=="string")return;var n;if(typeof r=="function")n=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===d||r.$$typeof===y))n=r.propTypes;else return;if(n){var t=C(r);Xe(n,e.props,"prop",t,e)}else if(r.PropTypes!==void 0&&!ee){ee=!0;var i=C(r);h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function dr(e){{for(var r=Object.keys(e.props),n=0;n<r.length;n++){var t=r[n];if(t!=="children"&&t!=="key"){F(e),h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",t),F(null);break}}e.ref!==null&&(F(e),h("Invalid attribute `ref` supplied to `React.Fragment`."),F(null))}}function Pe(e,r,n,t,i,u){{var o=Be(e);if(!o){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var b=sr(i);b?a+=b:a+=xe();var s;e===null?s="null":X(e)?s="array":e!==void 0&&e.$$typeof===v?(s="<"+(C(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e,h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,a)}var l=cr(e,r,n,i,u);if(l==null)return l;if(o){var E=r.children;if(E!==void 0)if(t)if(X(E)){for(var L=0;L<E.length;L++)Se(E[L],e);Object.freeze&&Object.freeze(E)}else h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Se(E,e)}return e===m?dr(l):fr(l),l}}function vr(e,r,n){return Pe(e,r,n,!0)}function pr(e,r,n){return Pe(e,r,n,!1)}var hr=pr,br=vr;W.Fragment=m,W.jsx=hr,W.jsxs=br}()),W}process.env.NODE_ENV==="production"?z.exports=je():z.exports=ke();var P=z.exports;const Ae=`.hudoro-accordion {
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
`,ae="hudoro-accordion-styles";(g=>{if(!document.getElementById(ae)){const v=document.createElement("style");v.id=ae,v.textContent=g,document.head.appendChild(v)}})(Ae);const oe=x.createContext({allowMultiple:!1}),De=({children:g,allowMultiple:v=!1})=>{const c=x.useRef([]),m=f=>{var O,_,d,T,p,y,w,k,N;const j=(O=c.current)==null?void 0:O.find(Y=>Y===f);v?j?j&&((T=f.querySelector(".hudoro-accordion-arrow"))==null||T.classList.remove("hudoro-accordion-arrow-active"),f.classList.remove("active"),c.current=c.current.filter(Y=>Y!==f)):(f.classList.add("active"),(_=f.querySelector(".hudoro-accordion-arrow"))==null||_.classList.add("hudoro-accordion-arrow-active"),(d=c.current)==null||d.push(f)):(p=c.current)!=null&&p.length?c.current[0]===f?((y=c.current[0].querySelector(".hudoro-accordion-arrow"))==null||y.classList.remove("hudoro-accordion-arrow-active"),c.current[0].classList.remove("active"),c.current=[]):((w=c.current[0].querySelector(".hudoro-accordion-arrow"))==null||w.classList.remove("hudoro-accordion-arrow-active"),c.current[0].classList.remove("active"),c.current=[],f.classList.add("active"),c.current[0]=f,(k=c.current[0].querySelector(".hudoro-accordion-arrow"))==null||k.classList.add("hudoro-accordion-arrow-active")):(f.classList.add("active"),(N=f.querySelector(".hudoro-accordion-arrow"))==null||N.classList.add("hudoro-accordion-arrow-active"),c.current.push(f))};return P.jsx(oe.Provider,{value:{allowMultiple:v,handlePushRef:m},children:P.jsx("div",{className:"hudoro-accordion",children:g})})},Fe=({children:g})=>P.jsx("div",{className:"hudoro-accordion-item",children:g}),Le=({children:g})=>{const{handlePushRef:v}=x.useContext(oe),c=m=>{m.currentTarget.parentElement&&v&&v(m.currentTarget.parentElement)};return P.jsxs("button",{className:"hudoro-accordion-button",onClick:m=>c(m),children:[P.jsx("div",{children:g}),P.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"25",viewBox:"0 0 24 25",fill:"none",className:"hudoro-accordion-arrow",children:P.jsx("path",{d:"M4 9.5L12 17.5L20 9.5",stroke:"#111827",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})},Ie=({children:g})=>P.jsx("div",{className:"hudoro-accordion-panel",onClick:v=>v.stopPropagation(),children:g});R.Accordion=De,R.AccordionButton=Le,R.AccordionItem=Fe,R.AccordionPanel=Ie,Object.defineProperty(R,Symbol.toStringTag,{value:"Module"})});
