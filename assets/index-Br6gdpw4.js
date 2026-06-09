(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))o(d);new MutationObserver(d=>{for(const g of d)if(g.type==="childList")for(const p of g.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function r(d){const g={};return d.integrity&&(g.integrity=d.integrity),d.referrerPolicy&&(g.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?g.credentials="include":d.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function o(d){if(d.ep)return;d.ep=!0;const g=r(d);fetch(d.href,g)}})();function sG(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var eu={exports:{}},mi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lh;function iG(){if(Lh)return mi;Lh=1;var a=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function r(o,d,g){var p=null;if(g!==void 0&&(p=""+g),d.key!==void 0&&(p=""+d.key),"key"in d){g={};for(var b in d)b!=="key"&&(g[b]=d[b])}else g=d;return d=g.ref,{$$typeof:a,type:o,key:p,ref:d!==void 0?d:null,props:g}}return mi.Fragment=s,mi.jsx=r,mi.jsxs=r,mi}var Hh;function oG(){return Hh||(Hh=1,eu.exports=iG()),eu.exports}var l=oG(),tu={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oh;function rG(){if(Oh)return re;Oh=1;var a=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),g=Symbol.for("react.consumer"),p=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),G=Symbol.for("react.activity"),k=Symbol.iterator;function y(T){return T===null||typeof T!="object"?null:(T=k&&T[k]||T["@@iterator"],typeof T=="function"?T:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,S={};function N(T,F,J){this.props=T,this.context=F,this.refs=S,this.updater=J||M}N.prototype.isReactComponent={},N.prototype.setState=function(T,F){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,F,"setState")},N.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function X(){}X.prototype=N.prototype;function z(T,F,J){this.props=T,this.context=F,this.refs=S,this.updater=J||M}var V=z.prototype=new X;V.constructor=z,I(V,N.prototype),V.isPureReactComponent=!0;var Z=Array.isArray;function H(){}var C={H:null,A:null,T:null,S:null},P=Object.prototype.hasOwnProperty;function K(T,F,J){var te=J.ref;return{$$typeof:a,type:T,key:F,ref:te!==void 0?te:null,props:J}}function Y(T,F){return K(T.type,F,T.props)}function ie(T){return typeof T=="object"&&T!==null&&T.$$typeof===a}function pe(T){var F={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(J){return F[J]})}var Ue=/\/+/g;function qe(T,F){return typeof T=="object"&&T!==null&&T.key!=null?pe(""+T.key):F.toString(36)}function Ne(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(H,H):(T.status="pending",T.then(function(F){T.status==="pending"&&(T.status="fulfilled",T.value=F)},function(F){T.status==="pending"&&(T.status="rejected",T.reason=F)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function R(T,F,J,te,le){var ge=typeof T;(ge==="undefined"||ge==="boolean")&&(T=null);var ve=!1;if(T===null)ve=!0;else switch(ge){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(T.$$typeof){case a:case s:ve=!0;break;case f:return ve=T._init,R(ve(T._payload),F,J,te,le)}}if(ve)return le=le(T),ve=te===""?"."+qe(T,0):te,Z(le)?(J="",ve!=null&&(J=ve.replace(Ue,"$&/")+"/"),R(le,F,J,"",function(ks){return ks})):le!=null&&(ie(le)&&(le=Y(le,J+(le.key==null||T&&T.key===le.key?"":(""+le.key).replace(Ue,"$&/")+"/")+ve)),F.push(le)),1;ve=0;var rt=te===""?".":te+":";if(Z(T))for(var He=0;He<T.length;He++)te=T[He],ge=rt+qe(te,He),ve+=R(te,F,J,ge,le);else if(He=y(T),typeof He=="function")for(T=He.call(T),He=0;!(te=T.next()).done;)te=te.value,ge=rt+qe(te,He++),ve+=R(te,F,J,ge,le);else if(ge==="object"){if(typeof T.then=="function")return R(Ne(T),F,J,te,le);throw F=String(T),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.")}return ve}function Q(T,F,J){if(T==null)return T;var te=[],le=0;return R(T,te,"","",function(ge){return F.call(J,ge,le++)}),te}function W(T){if(T._status===-1){var F=T._result;F=F(),F.then(function(J){(T._status===0||T._status===-1)&&(T._status=1,T._result=J)},function(J){(T._status===0||T._status===-1)&&(T._status=2,T._result=J)}),T._status===-1&&(T._status=0,T._result=F)}if(T._status===1)return T._result.default;throw T._result}var ue=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var F=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(F))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)},_e={map:Q,forEach:function(T,F,J){Q(T,function(){F.apply(this,arguments)},J)},count:function(T){var F=0;return Q(T,function(){F++}),F},toArray:function(T){return Q(T,function(F){return F})||[]},only:function(T){if(!ie(T))throw Error("React.Children.only expected to receive a single React element child.");return T}};return re.Activity=G,re.Children=_e,re.Component=N,re.Fragment=r,re.Profiler=d,re.PureComponent=z,re.StrictMode=o,re.Suspense=_,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,re.__COMPILER_RUNTIME={__proto__:null,c:function(T){return C.H.useMemoCache(T)}},re.cache=function(T){return function(){return T.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(T,F,J){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var te=I({},T.props),le=T.key;if(F!=null)for(ge in F.key!==void 0&&(le=""+F.key),F)!P.call(F,ge)||ge==="key"||ge==="__self"||ge==="__source"||ge==="ref"&&F.ref===void 0||(te[ge]=F[ge]);var ge=arguments.length-2;if(ge===1)te.children=J;else if(1<ge){for(var ve=Array(ge),rt=0;rt<ge;rt++)ve[rt]=arguments[rt+2];te.children=ve}return K(T.type,le,te)},re.createContext=function(T){return T={$$typeof:p,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:g,_context:T},T},re.createElement=function(T,F,J){var te,le={},ge=null;if(F!=null)for(te in F.key!==void 0&&(ge=""+F.key),F)P.call(F,te)&&te!=="key"&&te!=="__self"&&te!=="__source"&&(le[te]=F[te]);var ve=arguments.length-2;if(ve===1)le.children=J;else if(1<ve){for(var rt=Array(ve),He=0;He<ve;He++)rt[He]=arguments[He+2];le.children=rt}if(T&&T.defaultProps)for(te in ve=T.defaultProps,ve)le[te]===void 0&&(le[te]=ve[te]);return K(T,ge,le)},re.createRef=function(){return{current:null}},re.forwardRef=function(T){return{$$typeof:b,render:T}},re.isValidElement=ie,re.lazy=function(T){return{$$typeof:f,_payload:{_status:-1,_result:T},_init:W}},re.memo=function(T,F){return{$$typeof:h,type:T,compare:F===void 0?null:F}},re.startTransition=function(T){var F=C.T,J={};C.T=J;try{var te=T(),le=C.S;le!==null&&le(J,te),typeof te=="object"&&te!==null&&typeof te.then=="function"&&te.then(H,ue)}catch(ge){ue(ge)}finally{F!==null&&J.types!==null&&(F.types=J.types),C.T=F}},re.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},re.use=function(T){return C.H.use(T)},re.useActionState=function(T,F,J){return C.H.useActionState(T,F,J)},re.useCallback=function(T,F){return C.H.useCallback(T,F)},re.useContext=function(T){return C.H.useContext(T)},re.useDebugValue=function(){},re.useDeferredValue=function(T,F){return C.H.useDeferredValue(T,F)},re.useEffect=function(T,F){return C.H.useEffect(T,F)},re.useEffectEvent=function(T){return C.H.useEffectEvent(T)},re.useId=function(){return C.H.useId()},re.useImperativeHandle=function(T,F,J){return C.H.useImperativeHandle(T,F,J)},re.useInsertionEffect=function(T,F){return C.H.useInsertionEffect(T,F)},re.useLayoutEffect=function(T,F){return C.H.useLayoutEffect(T,F)},re.useMemo=function(T,F){return C.H.useMemo(T,F)},re.useOptimistic=function(T,F){return C.H.useOptimistic(T,F)},re.useReducer=function(T,F,J){return C.H.useReducer(T,F,J)},re.useRef=function(T){return C.H.useRef(T)},re.useState=function(T){return C.H.useState(T)},re.useSyncExternalStore=function(T,F,J){return C.H.useSyncExternalStore(T,F,J)},re.useTransition=function(){return C.H.useTransition()},re.version="19.2.7",re}var Bh;function id(){return Bh||(Bh=1,tu.exports=rG()),tu.exports}var O=id();const Jo=sG(O);var nu={exports:{}},hi={},au={exports:{}},su={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uh;function lG(){return Uh||(Uh=1,(function(a){function s(R,Q){var W=R.length;R.push(Q);e:for(;0<W;){var ue=W-1>>>1,_e=R[ue];if(0<d(_e,Q))R[ue]=Q,R[W]=_e,W=ue;else break e}}function r(R){return R.length===0?null:R[0]}function o(R){if(R.length===0)return null;var Q=R[0],W=R.pop();if(W!==Q){R[0]=W;e:for(var ue=0,_e=R.length,T=_e>>>1;ue<T;){var F=2*(ue+1)-1,J=R[F],te=F+1,le=R[te];if(0>d(J,W))te<_e&&0>d(le,J)?(R[ue]=le,R[te]=W,ue=te):(R[ue]=J,R[F]=W,ue=F);else if(te<_e&&0>d(le,W))R[ue]=le,R[te]=W,ue=te;else break e}}return Q}function d(R,Q){var W=R.sortIndex-Q.sortIndex;return W!==0?W:R.id-Q.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var g=performance;a.unstable_now=function(){return g.now()}}else{var p=Date,b=p.now();a.unstable_now=function(){return p.now()-b}}var _=[],h=[],f=1,G=null,k=3,y=!1,M=!1,I=!1,S=!1,N=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function V(R){for(var Q=r(h);Q!==null;){if(Q.callback===null)o(h);else if(Q.startTime<=R)o(h),Q.sortIndex=Q.expirationTime,s(_,Q);else break;Q=r(h)}}function Z(R){if(I=!1,V(R),!M)if(r(_)!==null)M=!0,H||(H=!0,pe());else{var Q=r(h);Q!==null&&Ne(Z,Q.startTime-R)}}var H=!1,C=-1,P=5,K=-1;function Y(){return S?!0:!(a.unstable_now()-K<P)}function ie(){if(S=!1,H){var R=a.unstable_now();K=R;var Q=!0;try{e:{M=!1,I&&(I=!1,X(C),C=-1),y=!0;var W=k;try{t:{for(V(R),G=r(_);G!==null&&!(G.expirationTime>R&&Y());){var ue=G.callback;if(typeof ue=="function"){G.callback=null,k=G.priorityLevel;var _e=ue(G.expirationTime<=R);if(R=a.unstable_now(),typeof _e=="function"){G.callback=_e,V(R),Q=!0;break t}G===r(_)&&o(_),V(R)}else o(_);G=r(_)}if(G!==null)Q=!0;else{var T=r(h);T!==null&&Ne(Z,T.startTime-R),Q=!1}}break e}finally{G=null,k=W,y=!1}Q=void 0}}finally{Q?pe():H=!1}}}var pe;if(typeof z=="function")pe=function(){z(ie)};else if(typeof MessageChannel<"u"){var Ue=new MessageChannel,qe=Ue.port2;Ue.port1.onmessage=ie,pe=function(){qe.postMessage(null)}}else pe=function(){N(ie,0)};function Ne(R,Q){C=N(function(){R(a.unstable_now())},Q)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(R){R.callback=null},a.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<R?Math.floor(1e3/R):5},a.unstable_getCurrentPriorityLevel=function(){return k},a.unstable_next=function(R){switch(k){case 1:case 2:case 3:var Q=3;break;default:Q=k}var W=k;k=Q;try{return R()}finally{k=W}},a.unstable_requestPaint=function(){S=!0},a.unstable_runWithPriority=function(R,Q){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var W=k;k=R;try{return Q()}finally{k=W}},a.unstable_scheduleCallback=function(R,Q,W){var ue=a.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ue+W:ue):W=ue,R){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=W+_e,R={id:f++,callback:Q,priorityLevel:R,startTime:W,expirationTime:_e,sortIndex:-1},W>ue?(R.sortIndex=W,s(h,R),r(_)===null&&R===r(h)&&(I?(X(C),C=-1):I=!0,Ne(Z,W-ue))):(R.sortIndex=_e,s(_,R),M||y||(M=!0,H||(H=!0,pe()))),R},a.unstable_shouldYield=Y,a.unstable_wrapCallback=function(R){var Q=k;return function(){var W=k;k=Q;try{return R.apply(this,arguments)}finally{k=W}}}})(su)),su}var Ph;function cG(){return Ph||(Ph=1,au.exports=lG()),au.exports}var iu={exports:{}},ot={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fh;function uG(){if(Fh)return ot;Fh=1;var a=id();function s(_){var h="https://react.dev/errors/"+_;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var f=2;f<arguments.length;f++)h+="&args[]="+encodeURIComponent(arguments[f])}return"Minified React error #"+_+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var o={d:{f:r,r:function(){throw Error(s(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},d=Symbol.for("react.portal");function g(_,h,f){var G=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:G==null?null:""+G,children:_,containerInfo:h,implementation:f}}var p=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(_,h){if(_==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return ot.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,ot.createPortal=function(_,h){var f=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(s(299));return g(_,h,null,f)},ot.flushSync=function(_){var h=p.T,f=o.p;try{if(p.T=null,o.p=2,_)return _()}finally{p.T=h,o.p=f,o.d.f()}},ot.preconnect=function(_,h){typeof _=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,o.d.C(_,h))},ot.prefetchDNS=function(_){typeof _=="string"&&o.d.D(_)},ot.preinit=function(_,h){if(typeof _=="string"&&h&&typeof h.as=="string"){var f=h.as,G=b(f,h.crossOrigin),k=typeof h.integrity=="string"?h.integrity:void 0,y=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;f==="style"?o.d.S(_,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:G,integrity:k,fetchPriority:y}):f==="script"&&o.d.X(_,{crossOrigin:G,integrity:k,fetchPriority:y,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},ot.preinitModule=function(_,h){if(typeof _=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var f=b(h.as,h.crossOrigin);o.d.M(_,{crossOrigin:f,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&o.d.M(_)},ot.preload=function(_,h){if(typeof _=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var f=h.as,G=b(f,h.crossOrigin);o.d.L(_,f,{crossOrigin:G,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},ot.preloadModule=function(_,h){if(typeof _=="string")if(h){var f=b(h.as,h.crossOrigin);o.d.m(_,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:f,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else o.d.m(_)},ot.requestFormReset=function(_){o.d.r(_)},ot.unstable_batchedUpdates=function(_,h){return _(h)},ot.useFormState=function(_,h,f){return p.H.useFormState(_,h,f)},ot.useFormStatus=function(){return p.H.useHostTransitionStatus()},ot.version="19.2.7",ot}var Kh;function dG(){if(Kh)return iu.exports;Kh=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(s){console.error(s)}}return a(),iu.exports=uG(),iu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xh;function pG(){if(Xh)return hi;Xh=1;var a=cG(),s=id(),r=dG();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function g(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _(e){if(g(e)!==e)throw Error(o(188))}function h(e){var t=e.alternate;if(!t){if(t=g(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,i=t;;){var c=n.return;if(c===null)break;var u=c.alternate;if(u===null){if(i=c.return,i!==null){n=i;continue}break}if(c.child===u.child){for(u=c.child;u;){if(u===n)return _(c),e;if(u===i)return _(c),t;u=u.sibling}throw Error(o(188))}if(n.return!==i.return)n=c,i=u;else{for(var m=!1,x=c.child;x;){if(x===n){m=!0,n=c,i=u;break}if(x===i){m=!0,i=c,n=u;break}x=x.sibling}if(!m){for(x=u.child;x;){if(x===n){m=!0,n=u,i=c;break}if(x===i){m=!0,i=u,n=c;break}x=x.sibling}if(!m)throw Error(o(189))}}if(n.alternate!==i)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var G=Object.assign,k=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),X=Symbol.for("react.consumer"),z=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),K=Symbol.for("react.activity"),Y=Symbol.for("react.memo_cache_sentinel"),ie=Symbol.iterator;function pe(e){return e===null||typeof e!="object"?null:(e=ie&&e[ie]||e["@@iterator"],typeof e=="function"?e:null)}var Ue=Symbol.for("react.client.reference");function qe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ue?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case I:return"Fragment";case N:return"Profiler";case S:return"StrictMode";case Z:return"Suspense";case H:return"SuspenseList";case K:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case z:return e.displayName||"Context";case X:return(e._context.displayName||"Context")+".Consumer";case V:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case C:return t=e.displayName||null,t!==null?t:qe(e.type)||"Memo";case P:t=e._payload,e=e._init;try{return qe(e(t))}catch{}}return null}var Ne=Array.isArray,R=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},ue=[],_e=-1;function T(e){return{current:e}}function F(e){0>_e||(e.current=ue[_e],ue[_e]=null,_e--)}function J(e,t){_e++,ue[_e]=e.current,e.current=t}var te=T(null),le=T(null),ge=T(null),ve=T(null);function rt(e,t){switch(J(ge,t),J(le,e),J(te,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?lh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=lh(t),e=ch(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}F(te),J(te,e)}function He(){F(te),F(le),F(ge)}function ks(e){e.memoizedState!==null&&J(ve,e);var t=te.current,n=ch(t,e.type);t!==n&&(J(le,e),J(te,n))}function wi(e){le.current===e&&(F(te),F(le)),ve.current===e&&(F(ve),ui._currentValue=W)}var qr,zd;function ta(e){if(qr===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);qr=t&&t[1]||"",zd=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qr+e+zd}var Rr=!1;function zr(e,t){if(!e||Rr)return"";Rr=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var U=function(){throw Error()};if(Object.defineProperty(U.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(U,[])}catch(q){var D=q}Reflect.construct(e,[],U)}else{try{U.call()}catch(q){D=q}e.call(U.prototype)}}else{try{throw Error()}catch(q){D=q}(U=e())&&typeof U.catch=="function"&&U.catch(function(){})}}catch(q){if(q&&D&&typeof q.stack=="string")return[q.stack,D.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=i.DetermineComponentFrameRoot(),m=u[0],x=u[1];if(m&&x){var v=m.split(`
`),w=x.split(`
`);for(c=i=0;i<v.length&&!v[i].includes("DetermineComponentFrameRoot");)i++;for(;c<w.length&&!w[c].includes("DetermineComponentFrameRoot");)c++;if(i===v.length||c===w.length)for(i=v.length-1,c=w.length-1;1<=i&&0<=c&&v[i]!==w[c];)c--;for(;1<=i&&0<=c;i--,c--)if(v[i]!==w[c]){if(i!==1||c!==1)do if(i--,c--,0>c||v[i]!==w[c]){var L=`
`+v[i].replace(" at new "," at ");return e.displayName&&L.includes("<anonymous>")&&(L=L.replace("<anonymous>",e.displayName)),L}while(1<=i&&0<=c);break}}}finally{Rr=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ta(n):""}function C_(e,t){switch(e.tag){case 26:case 27:case 5:return ta(e.type);case 16:return ta("Lazy");case 13:return e.child!==t&&t!==null?ta("Suspense Fallback"):ta("Suspense");case 19:return ta("SuspenseList");case 0:case 15:return zr(e.type,!1);case 11:return zr(e.type.render,!1);case 1:return zr(e.type,!0);case 31:return ta("Activity");default:return""}}function Ld(e){try{var t="",n=null;do t+=C_(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Lr=Object.prototype.hasOwnProperty,Hr=a.unstable_scheduleCallback,Or=a.unstable_cancelCallback,q_=a.unstable_shouldYield,R_=a.unstable_requestPaint,xt=a.unstable_now,z_=a.unstable_getCurrentPriorityLevel,Hd=a.unstable_ImmediatePriority,Od=a.unstable_UserBlockingPriority,Di=a.unstable_NormalPriority,L_=a.unstable_LowPriority,Bd=a.unstable_IdlePriority,H_=a.log,O_=a.unstable_setDisableYieldValue,ys=null,Gt=null;function vn(e){if(typeof H_=="function"&&O_(e),Gt&&typeof Gt.setStrictMode=="function")try{Gt.setStrictMode(ys,e)}catch{}}var kt=Math.clz32?Math.clz32:P_,B_=Math.log,U_=Math.LN2;function P_(e){return e>>>=0,e===0?32:31-(B_(e)/U_|0)|0}var Ni=256,Ci=262144,qi=4194304;function na(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ri(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var c=0,u=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var x=i&134217727;return x!==0?(i=x&~u,i!==0?c=na(i):(m&=x,m!==0?c=na(m):n||(n=x&~e,n!==0&&(c=na(n))))):(x=i&~u,x!==0?c=na(x):m!==0?c=na(m):n||(n=i&~e,n!==0&&(c=na(n)))),c===0?0:t!==0&&t!==c&&(t&u)===0&&(u=c&-c,n=t&-t,u>=n||u===32&&(n&4194048)!==0)?t:c}function vs(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function F_(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ud(){var e=qi;return qi<<=1,(qi&62914560)===0&&(qi=4194304),e}function Br(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ms(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function K_(e,t,n,i,c,u){var m=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var x=e.entanglements,v=e.expirationTimes,w=e.hiddenUpdates;for(n=m&~n;0<n;){var L=31-kt(n),U=1<<L;x[L]=0,v[L]=-1;var D=w[L];if(D!==null)for(w[L]=null,L=0;L<D.length;L++){var q=D[L];q!==null&&(q.lane&=-536870913)}n&=~U}i!==0&&Pd(e,i,0),u!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=u&~(m&~t))}function Pd(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-kt(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function Fd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-kt(n),c=1<<i;c&t|e[i]&t&&(e[i]|=t),n&=~c}}function Kd(e,t){var n=t&-t;return n=(n&42)!==0?1:Ur(n),(n&(e.suspendedLanes|t))!==0?0:n}function Ur(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Pr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Xd(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:wh(e.type))}function Zd(e,t){var n=Q.p;try{return Q.p=e,t()}finally{Q.p=n}}var Mn=Math.random().toString(36).slice(2),$e="__reactFiber$"+Mn,dt="__reactProps$"+Mn,Ta="__reactContainer$"+Mn,Fr="__reactEvents$"+Mn,X_="__reactListeners$"+Mn,Z_="__reactHandles$"+Mn,Yd="__reactResources$"+Mn,As="__reactMarker$"+Mn;function Kr(e){delete e[$e],delete e[dt],delete e[Fr],delete e[X_],delete e[Z_]}function Sa(e){var t=e[$e];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ta]||n[$e]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=bh(e);e!==null;){if(n=e[$e])return n;e=bh(e)}return t}e=n,n=e.parentNode}return null}function Ia(e){if(e=e[$e]||e[Ta]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ts(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function ja(e){var t=e[Yd];return t||(t=e[Yd]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Je(e){e[As]=!0}var Qd=new Set,Jd={};function aa(e,t){Va(e,t),Va(e+"Capture",t)}function Va(e,t){for(Jd[e]=t,e=0;e<t.length;e++)Qd.add(t[e])}var Y_=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Wd={},$d={};function Q_(e){return Lr.call($d,e)?!0:Lr.call(Wd,e)?!1:Y_.test(e)?$d[e]=!0:(Wd[e]=!0,!1)}function zi(e,t,n){if(Q_(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Li(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function an(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function Vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ep(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function J_(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var c=i.get,u=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(m){n=""+m,u.call(this,m)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(m){n=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xr(e){if(!e._valueTracker){var t=ep(e)?"checked":"value";e._valueTracker=J_(e,t,""+e[t])}}function tp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=ep(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Hi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var W_=/[\n"\\]/g;function Et(e){return e.replace(W_,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Zr(e,t,n,i,c,u,m,x){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Vt(t)):e.value!==""+Vt(t)&&(e.value=""+Vt(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?Yr(e,m,Vt(t)):n!=null?Yr(e,m,Vt(n)):i!=null&&e.removeAttribute("value"),c==null&&u!=null&&(e.defaultChecked=!!u),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.name=""+Vt(x):e.removeAttribute("name")}function np(e,t,n,i,c,u,m,x){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){Xr(e);return}n=n!=null?""+Vt(n):"",t=t!=null?""+Vt(t):n,x||t===e.value||(e.value=t),e.defaultValue=t}i=i??c,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=x?e.checked:!!i,e.defaultChecked=!!i,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m),Xr(e)}function Yr(e,t,n){t==="number"&&Hi(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Ea(e,t,n,i){if(e=e.options,t){t={};for(var c=0;c<n.length;c++)t["$"+n[c]]=!0;for(n=0;n<e.length;n++)c=t.hasOwnProperty("$"+e[n].value),e[n].selected!==c&&(e[n].selected=c),c&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Vt(n),t=null,c=0;c<e.length;c++){if(e[c].value===n){e[c].selected=!0,i&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function ap(e,t,n){if(t!=null&&(t=""+Vt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Vt(n):""}function sp(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(o(92));if(Ne(i)){if(1<i.length)throw Error(o(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Vt(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Xr(e)}function wa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $_=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ip(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||$_.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function op(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var c in t)i=t[c],t.hasOwnProperty(c)&&n[c]!==i&&ip(e,c,i)}else for(var u in t)t.hasOwnProperty(u)&&ip(e,u,t[u])}function Qr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var e1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),t1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Oi(e){return t1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function sn(){}var Jr=null;function Wr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Da=null,Na=null;function rp(e){var t=Ia(e);if(t&&(e=t.stateNode)){var n=e[dt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Zr(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Et(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var c=i[dt]||null;if(!c)throw Error(o(90));Zr(i,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&tp(i)}break e;case"textarea":ap(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Ea(e,!!n.multiple,t,!1)}}}var $r=!1;function lp(e,t,n){if($r)return e(t,n);$r=!0;try{var i=e(t);return i}finally{if($r=!1,(Da!==null||Na!==null)&&(jo(),Da&&(t=Da,e=Na,Na=Da=null,rp(t),e)))for(t=0;t<e.length;t++)rp(e[t])}}function Ss(e,t){var n=e.stateNode;if(n===null)return null;var i=n[dt]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var on=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),el=!1;if(on)try{var Is={};Object.defineProperty(Is,"passive",{get:function(){el=!0}}),window.addEventListener("test",Is,Is),window.removeEventListener("test",Is,Is)}catch{el=!1}var An=null,tl=null,Bi=null;function cp(){if(Bi)return Bi;var e,t=tl,n=t.length,i,c="value"in An?An.value:An.textContent,u=c.length;for(e=0;e<n&&t[e]===c[e];e++);var m=n-e;for(i=1;i<=m&&t[n-i]===c[u-i];i++);return Bi=c.slice(e,1<i?1-i:void 0)}function Ui(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Pi(){return!0}function up(){return!1}function pt(e){function t(n,i,c,u,m){this._reactName=n,this._targetInst=c,this.type=i,this.nativeEvent=u,this.target=m,this.currentTarget=null;for(var x in e)e.hasOwnProperty(x)&&(n=e[x],this[x]=n?n(u):u[x]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Pi:up,this.isPropagationStopped=up,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Pi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Pi)},persist:function(){},isPersistent:Pi}),t}var sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fi=pt(sa),js=G({},sa,{view:0,detail:0}),n1=pt(js),nl,al,Vs,Ki=G({},js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:il,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vs&&(Vs&&e.type==="mousemove"?(nl=e.screenX-Vs.screenX,al=e.screenY-Vs.screenY):al=nl=0,Vs=e),nl)},movementY:function(e){return"movementY"in e?e.movementY:al}}),dp=pt(Ki),a1=G({},Ki,{dataTransfer:0}),s1=pt(a1),i1=G({},js,{relatedTarget:0}),sl=pt(i1),o1=G({},sa,{animationName:0,elapsedTime:0,pseudoElement:0}),r1=pt(o1),l1=G({},sa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),c1=pt(l1),u1=G({},sa,{data:0}),pp=pt(u1),d1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},p1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},g1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function m1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=g1[e])?!!t[e]:!1}function il(){return m1}var h1=G({},js,{key:function(e){if(e.key){var t=d1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ui(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?p1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:il,charCode:function(e){return e.type==="keypress"?Ui(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ui(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),b1=pt(h1),f1=G({},Ki,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gp=pt(f1),_1=G({},js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:il}),x1=pt(_1),G1=G({},sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),k1=pt(G1),y1=G({},Ki,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),v1=pt(y1),M1=G({},sa,{newState:0,oldState:0}),A1=pt(M1),T1=[9,13,27,32],ol=on&&"CompositionEvent"in window,Es=null;on&&"documentMode"in document&&(Es=document.documentMode);var S1=on&&"TextEvent"in window&&!Es,mp=on&&(!ol||Es&&8<Es&&11>=Es),hp=" ",bp=!1;function fp(e,t){switch(e){case"keyup":return T1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _p(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ca=!1;function I1(e,t){switch(e){case"compositionend":return _p(t);case"keypress":return t.which!==32?null:(bp=!0,hp);case"textInput":return e=t.data,e===hp&&bp?null:e;default:return null}}function j1(e,t){if(Ca)return e==="compositionend"||!ol&&fp(e,t)?(e=cp(),Bi=tl=An=null,Ca=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return mp&&t.locale!=="ko"?null:t.data;default:return null}}var V1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!V1[e.type]:t==="textarea"}function Gp(e,t,n,i){Da?Na?Na.push(i):Na=[i]:Da=i,t=qo(t,"onChange"),0<t.length&&(n=new Fi("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var ws=null,Ds=null;function E1(e){nh(e,0)}function Xi(e){var t=Ts(e);if(tp(t))return e}function kp(e,t){if(e==="change")return t}var yp=!1;if(on){var rl;if(on){var ll="oninput"in document;if(!ll){var vp=document.createElement("div");vp.setAttribute("oninput","return;"),ll=typeof vp.oninput=="function"}rl=ll}else rl=!1;yp=rl&&(!document.documentMode||9<document.documentMode)}function Mp(){ws&&(ws.detachEvent("onpropertychange",Ap),Ds=ws=null)}function Ap(e){if(e.propertyName==="value"&&Xi(Ds)){var t=[];Gp(t,Ds,e,Wr(e)),lp(E1,t)}}function w1(e,t,n){e==="focusin"?(Mp(),ws=t,Ds=n,ws.attachEvent("onpropertychange",Ap)):e==="focusout"&&Mp()}function D1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xi(Ds)}function N1(e,t){if(e==="click")return Xi(t)}function C1(e,t){if(e==="input"||e==="change")return Xi(t)}function q1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yt=typeof Object.is=="function"?Object.is:q1;function Ns(e,t){if(yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var c=n[i];if(!Lr.call(t,c)||!yt(e[c],t[c]))return!1}return!0}function Tp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Sp(e,t){var n=Tp(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Tp(n)}}function Ip(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ip(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Hi(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Hi(e.document)}return t}function cl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var R1=on&&"documentMode"in document&&11>=document.documentMode,qa=null,ul=null,Cs=null,dl=!1;function Vp(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;dl||qa==null||qa!==Hi(i)||(i=qa,"selectionStart"in i&&cl(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Cs&&Ns(Cs,i)||(Cs=i,i=qo(ul,"onSelect"),0<i.length&&(t=new Fi("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=qa)))}function ia(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ra={animationend:ia("Animation","AnimationEnd"),animationiteration:ia("Animation","AnimationIteration"),animationstart:ia("Animation","AnimationStart"),transitionrun:ia("Transition","TransitionRun"),transitionstart:ia("Transition","TransitionStart"),transitioncancel:ia("Transition","TransitionCancel"),transitionend:ia("Transition","TransitionEnd")},pl={},Ep={};on&&(Ep=document.createElement("div").style,"AnimationEvent"in window||(delete Ra.animationend.animation,delete Ra.animationiteration.animation,delete Ra.animationstart.animation),"TransitionEvent"in window||delete Ra.transitionend.transition);function oa(e){if(pl[e])return pl[e];if(!Ra[e])return e;var t=Ra[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ep)return pl[e]=t[n];return e}var wp=oa("animationend"),Dp=oa("animationiteration"),Np=oa("animationstart"),z1=oa("transitionrun"),L1=oa("transitionstart"),H1=oa("transitioncancel"),Cp=oa("transitionend"),qp=new Map,gl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gl.push("scrollEnd");function Bt(e,t){qp.set(e,t),aa(t,[e])}var Zi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},wt=[],za=0,ml=0;function Yi(){for(var e=za,t=ml=za=0;t<e;){var n=wt[t];wt[t++]=null;var i=wt[t];wt[t++]=null;var c=wt[t];wt[t++]=null;var u=wt[t];if(wt[t++]=null,i!==null&&c!==null){var m=i.pending;m===null?c.next=c:(c.next=m.next,m.next=c),i.pending=c}u!==0&&Rp(n,c,u)}}function Qi(e,t,n,i){wt[za++]=e,wt[za++]=t,wt[za++]=n,wt[za++]=i,ml|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function hl(e,t,n,i){return Qi(e,t,n,i),Ji(e)}function ra(e,t){return Qi(e,null,null,t),Ji(e)}function Rp(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var c=!1,u=e.return;u!==null;)u.childLanes|=n,i=u.alternate,i!==null&&(i.childLanes|=n),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(c=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,c&&t!==null&&(c=31-kt(n),e=u.hiddenUpdates,i=e[c],i===null?e[c]=[t]:i.push(t),t.lane=n|536870912),u):null}function Ji(e){if(50<ai)throw ai=0,Mc=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var La={};function O1(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,n,i){return new O1(e,t,n,i)}function bl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rn(e,t){var n=e.alternate;return n===null?(n=vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function zp(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Wi(e,t,n,i,c,u){var m=0;if(i=e,typeof e=="function")bl(e)&&(m=1);else if(typeof e=="string")m=Kx(e,n,te.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case K:return e=vt(31,n,t,c),e.elementType=K,e.lanes=u,e;case I:return la(n.children,c,u,t);case S:m=8,c|=24;break;case N:return e=vt(12,n,t,c|2),e.elementType=N,e.lanes=u,e;case Z:return e=vt(13,n,t,c),e.elementType=Z,e.lanes=u,e;case H:return e=vt(19,n,t,c),e.elementType=H,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case z:m=10;break e;case X:m=9;break e;case V:m=11;break e;case C:m=14;break e;case P:m=16,i=null;break e}m=29,n=Error(o(130,e===null?"null":typeof e,"")),i=null}return t=vt(m,n,t,c),t.elementType=e,t.type=i,t.lanes=u,t}function la(e,t,n,i){return e=vt(7,e,i,t),e.lanes=n,e}function fl(e,t,n){return e=vt(6,e,null,t),e.lanes=n,e}function Lp(e){var t=vt(18,null,null,0);return t.stateNode=e,t}function _l(e,t,n){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Hp=new WeakMap;function Dt(e,t){if(typeof e=="object"&&e!==null){var n=Hp.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Ld(t)},Hp.set(e,t),t)}return{value:e,source:t,stack:Ld(t)}}var Ha=[],Oa=0,$i=null,qs=0,Nt=[],Ct=0,Tn=null,Zt=1,Yt="";function ln(e,t){Ha[Oa++]=qs,Ha[Oa++]=$i,$i=e,qs=t}function Op(e,t,n){Nt[Ct++]=Zt,Nt[Ct++]=Yt,Nt[Ct++]=Tn,Tn=e;var i=Zt;e=Yt;var c=32-kt(i)-1;i&=~(1<<c),n+=1;var u=32-kt(t)+c;if(30<u){var m=c-c%5;u=(i&(1<<m)-1).toString(32),i>>=m,c-=m,Zt=1<<32-kt(t)+c|n<<c|i,Yt=u+e}else Zt=1<<u|n<<c|i,Yt=e}function xl(e){e.return!==null&&(ln(e,1),Op(e,1,0))}function Gl(e){for(;e===$i;)$i=Ha[--Oa],Ha[Oa]=null,qs=Ha[--Oa],Ha[Oa]=null;for(;e===Tn;)Tn=Nt[--Ct],Nt[Ct]=null,Yt=Nt[--Ct],Nt[Ct]=null,Zt=Nt[--Ct],Nt[Ct]=null}function Bp(e,t){Nt[Ct++]=Zt,Nt[Ct++]=Yt,Nt[Ct++]=Tn,Zt=t.id,Yt=t.overflow,Tn=e}var et=null,we=null,xe=!1,Sn=null,qt=!1,kl=Error(o(519));function In(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Rs(Dt(t,e)),kl}function Up(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[$e]=e,t[dt]=i,n){case"dialog":he("cancel",t),he("close",t);break;case"iframe":case"object":case"embed":he("load",t);break;case"video":case"audio":for(n=0;n<ii.length;n++)he(ii[n],t);break;case"source":he("error",t);break;case"img":case"image":case"link":he("error",t),he("load",t);break;case"details":he("toggle",t);break;case"input":he("invalid",t),np(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":he("invalid",t);break;case"textarea":he("invalid",t),sp(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||oh(t.textContent,n)?(i.popover!=null&&(he("beforetoggle",t),he("toggle",t)),i.onScroll!=null&&he("scroll",t),i.onScrollEnd!=null&&he("scrollend",t),i.onClick!=null&&(t.onclick=sn),t=!0):t=!1,t||In(e,!0)}function Pp(e){for(et=e.return;et;)switch(et.tag){case 5:case 31:case 13:qt=!1;return;case 27:case 3:qt=!0;return;default:et=et.return}}function Ba(e){if(e!==et)return!1;if(!xe)return Pp(e),xe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Lc(e.type,e.memoizedProps)),n=!n),n&&we&&In(e),Pp(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));we=hh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));we=hh(e)}else t===27?(t=we,Bn(e.type)?(e=Pc,Pc=null,we=e):we=t):we=et?zt(e.stateNode.nextSibling):null;return!0}function ca(){we=et=null,xe=!1}function yl(){var e=Sn;return e!==null&&(bt===null?bt=e:bt.push.apply(bt,e),Sn=null),e}function Rs(e){Sn===null?Sn=[e]:Sn.push(e)}var vl=T(null),ua=null,cn=null;function jn(e,t,n){J(vl,t._currentValue),t._currentValue=n}function un(e){e._currentValue=vl.current,F(vl)}function Ml(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Al(e,t,n,i){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var u=c.dependencies;if(u!==null){var m=c.child;u=u.firstContext;e:for(;u!==null;){var x=u;u=c;for(var v=0;v<t.length;v++)if(x.context===t[v]){u.lanes|=n,x=u.alternate,x!==null&&(x.lanes|=n),Ml(u.return,n,e),i||(m=null);break e}u=x.next}}else if(c.tag===18){if(m=c.return,m===null)throw Error(o(341));m.lanes|=n,u=m.alternate,u!==null&&(u.lanes|=n),Ml(m,n,e),m=null}else m=c.child;if(m!==null)m.return=c;else for(m=c;m!==null;){if(m===e){m=null;break}if(c=m.sibling,c!==null){c.return=m.return,m=c;break}m=m.return}c=m}}function Ua(e,t,n,i){e=null;for(var c=t,u=!1;c!==null;){if(!u){if((c.flags&524288)!==0)u=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var m=c.alternate;if(m===null)throw Error(o(387));if(m=m.memoizedProps,m!==null){var x=c.type;yt(c.pendingProps.value,m.value)||(e!==null?e.push(x):e=[x])}}else if(c===ve.current){if(m=c.alternate,m===null)throw Error(o(387));m.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(ui):e=[ui])}c=c.return}e!==null&&Al(t,e,n,i),t.flags|=262144}function eo(e){for(e=e.firstContext;e!==null;){if(!yt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function da(e){ua=e,cn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function tt(e){return Fp(ua,e)}function to(e,t){return ua===null&&da(e),Fp(e,t)}function Fp(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},cn===null){if(e===null)throw Error(o(308));cn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else cn=cn.next=t;return n}var B1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},U1=a.unstable_scheduleCallback,P1=a.unstable_NormalPriority,Pe={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tl(){return{controller:new B1,data:new Map,refCount:0}}function zs(e){e.refCount--,e.refCount===0&&U1(P1,function(){e.controller.abort()})}var Ls=null,Sl=0,Pa=0,Fa=null;function F1(e,t){if(Ls===null){var n=Ls=[];Sl=0,Pa=Vc(),Fa={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Sl++,t.then(Kp,Kp),t}function Kp(){if(--Sl===0&&Ls!==null){Fa!==null&&(Fa.status="fulfilled");var e=Ls;Ls=null,Pa=0,Fa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function K1(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(c){n.push(c)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var c=0;c<n.length;c++)(0,n[c])(t)},function(c){for(i.status="rejected",i.reason=c,c=0;c<n.length;c++)(0,n[c])(void 0)}),i}var Xp=R.S;R.S=function(e,t){Vm=xt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&F1(e,t),Xp!==null&&Xp(e,t)};var pa=T(null);function Il(){var e=pa.current;return e!==null?e:je.pooledCache}function no(e,t){t===null?J(pa,pa.current):J(pa,t.pool)}function Zp(){var e=Il();return e===null?null:{parent:Pe._currentValue,pool:e}}var Ka=Error(o(460)),jl=Error(o(474)),ao=Error(o(542)),so={then:function(){}};function Yp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Qp(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(sn,sn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Wp(e),e;default:if(typeof t.status=="string")t.then(sn,sn);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var c=t;c.status="fulfilled",c.value=i}},function(i){if(t.status==="pending"){var c=t;c.status="rejected",c.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Wp(e),e}throw ma=t,Ka}}function ga(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ma=n,Ka):n}}var ma=null;function Jp(){if(ma===null)throw Error(o(459));var e=ma;return ma=null,e}function Wp(e){if(e===Ka||e===ao)throw Error(o(483))}var Xa=null,Hs=0;function io(e){var t=Hs;return Hs+=1,Xa===null&&(Xa=[]),Qp(Xa,e,t)}function Os(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function oo(e,t){throw t.$$typeof===k?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function $p(e){function t(j,A){if(e){var E=j.deletions;E===null?(j.deletions=[A],j.flags|=16):E.push(A)}}function n(j,A){if(!e)return null;for(;A!==null;)t(j,A),A=A.sibling;return null}function i(j){for(var A=new Map;j!==null;)j.key!==null?A.set(j.key,j):A.set(j.index,j),j=j.sibling;return A}function c(j,A){return j=rn(j,A),j.index=0,j.sibling=null,j}function u(j,A,E){return j.index=E,e?(E=j.alternate,E!==null?(E=E.index,E<A?(j.flags|=67108866,A):E):(j.flags|=67108866,A)):(j.flags|=1048576,A)}function m(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function x(j,A,E,B){return A===null||A.tag!==6?(A=fl(E,j.mode,B),A.return=j,A):(A=c(A,E),A.return=j,A)}function v(j,A,E,B){var ae=E.type;return ae===I?L(j,A,E.props.children,B,E.key):A!==null&&(A.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===P&&ga(ae)===A.type)?(A=c(A,E.props),Os(A,E),A.return=j,A):(A=Wi(E.type,E.key,E.props,null,j.mode,B),Os(A,E),A.return=j,A)}function w(j,A,E,B){return A===null||A.tag!==4||A.stateNode.containerInfo!==E.containerInfo||A.stateNode.implementation!==E.implementation?(A=_l(E,j.mode,B),A.return=j,A):(A=c(A,E.children||[]),A.return=j,A)}function L(j,A,E,B,ae){return A===null||A.tag!==7?(A=la(E,j.mode,B,ae),A.return=j,A):(A=c(A,E),A.return=j,A)}function U(j,A,E){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=fl(""+A,j.mode,E),A.return=j,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case y:return E=Wi(A.type,A.key,A.props,null,j.mode,E),Os(E,A),E.return=j,E;case M:return A=_l(A,j.mode,E),A.return=j,A;case P:return A=ga(A),U(j,A,E)}if(Ne(A)||pe(A))return A=la(A,j.mode,E,null),A.return=j,A;if(typeof A.then=="function")return U(j,io(A),E);if(A.$$typeof===z)return U(j,to(j,A),E);oo(j,A)}return null}function D(j,A,E,B){var ae=A!==null?A.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return ae!==null?null:x(j,A,""+E,B);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case y:return E.key===ae?v(j,A,E,B):null;case M:return E.key===ae?w(j,A,E,B):null;case P:return E=ga(E),D(j,A,E,B)}if(Ne(E)||pe(E))return ae!==null?null:L(j,A,E,B,null);if(typeof E.then=="function")return D(j,A,io(E),B);if(E.$$typeof===z)return D(j,A,to(j,E),B);oo(j,E)}return null}function q(j,A,E,B,ae){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return j=j.get(E)||null,x(A,j,""+B,ae);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case y:return j=j.get(B.key===null?E:B.key)||null,v(A,j,B,ae);case M:return j=j.get(B.key===null?E:B.key)||null,w(A,j,B,ae);case P:return B=ga(B),q(j,A,E,B,ae)}if(Ne(B)||pe(B))return j=j.get(E)||null,L(A,j,B,ae,null);if(typeof B.then=="function")return q(j,A,E,io(B),ae);if(B.$$typeof===z)return q(j,A,E,to(A,B),ae);oo(A,B)}return null}function $(j,A,E,B){for(var ae=null,Ge=null,ne=A,de=A=0,fe=null;ne!==null&&de<E.length;de++){ne.index>de?(fe=ne,ne=null):fe=ne.sibling;var ke=D(j,ne,E[de],B);if(ke===null){ne===null&&(ne=fe);break}e&&ne&&ke.alternate===null&&t(j,ne),A=u(ke,A,de),Ge===null?ae=ke:Ge.sibling=ke,Ge=ke,ne=fe}if(de===E.length)return n(j,ne),xe&&ln(j,de),ae;if(ne===null){for(;de<E.length;de++)ne=U(j,E[de],B),ne!==null&&(A=u(ne,A,de),Ge===null?ae=ne:Ge.sibling=ne,Ge=ne);return xe&&ln(j,de),ae}for(ne=i(ne);de<E.length;de++)fe=q(ne,j,de,E[de],B),fe!==null&&(e&&fe.alternate!==null&&ne.delete(fe.key===null?de:fe.key),A=u(fe,A,de),Ge===null?ae=fe:Ge.sibling=fe,Ge=fe);return e&&ne.forEach(function(Xn){return t(j,Xn)}),xe&&ln(j,de),ae}function se(j,A,E,B){if(E==null)throw Error(o(151));for(var ae=null,Ge=null,ne=A,de=A=0,fe=null,ke=E.next();ne!==null&&!ke.done;de++,ke=E.next()){ne.index>de?(fe=ne,ne=null):fe=ne.sibling;var Xn=D(j,ne,ke.value,B);if(Xn===null){ne===null&&(ne=fe);break}e&&ne&&Xn.alternate===null&&t(j,ne),A=u(Xn,A,de),Ge===null?ae=Xn:Ge.sibling=Xn,Ge=Xn,ne=fe}if(ke.done)return n(j,ne),xe&&ln(j,de),ae;if(ne===null){for(;!ke.done;de++,ke=E.next())ke=U(j,ke.value,B),ke!==null&&(A=u(ke,A,de),Ge===null?ae=ke:Ge.sibling=ke,Ge=ke);return xe&&ln(j,de),ae}for(ne=i(ne);!ke.done;de++,ke=E.next())ke=q(ne,j,de,ke.value,B),ke!==null&&(e&&ke.alternate!==null&&ne.delete(ke.key===null?de:ke.key),A=u(ke,A,de),Ge===null?ae=ke:Ge.sibling=ke,Ge=ke);return e&&ne.forEach(function(aG){return t(j,aG)}),xe&&ln(j,de),ae}function Ie(j,A,E,B){if(typeof E=="object"&&E!==null&&E.type===I&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case y:e:{for(var ae=E.key;A!==null;){if(A.key===ae){if(ae=E.type,ae===I){if(A.tag===7){n(j,A.sibling),B=c(A,E.props.children),B.return=j,j=B;break e}}else if(A.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===P&&ga(ae)===A.type){n(j,A.sibling),B=c(A,E.props),Os(B,E),B.return=j,j=B;break e}n(j,A);break}else t(j,A);A=A.sibling}E.type===I?(B=la(E.props.children,j.mode,B,E.key),B.return=j,j=B):(B=Wi(E.type,E.key,E.props,null,j.mode,B),Os(B,E),B.return=j,j=B)}return m(j);case M:e:{for(ae=E.key;A!==null;){if(A.key===ae)if(A.tag===4&&A.stateNode.containerInfo===E.containerInfo&&A.stateNode.implementation===E.implementation){n(j,A.sibling),B=c(A,E.children||[]),B.return=j,j=B;break e}else{n(j,A);break}else t(j,A);A=A.sibling}B=_l(E,j.mode,B),B.return=j,j=B}return m(j);case P:return E=ga(E),Ie(j,A,E,B)}if(Ne(E))return $(j,A,E,B);if(pe(E)){if(ae=pe(E),typeof ae!="function")throw Error(o(150));return E=ae.call(E),se(j,A,E,B)}if(typeof E.then=="function")return Ie(j,A,io(E),B);if(E.$$typeof===z)return Ie(j,A,to(j,E),B);oo(j,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,A!==null&&A.tag===6?(n(j,A.sibling),B=c(A,E),B.return=j,j=B):(n(j,A),B=fl(E,j.mode,B),B.return=j,j=B),m(j)):n(j,A)}return function(j,A,E,B){try{Hs=0;var ae=Ie(j,A,E,B);return Xa=null,ae}catch(ne){if(ne===Ka||ne===ao)throw ne;var Ge=vt(29,ne,null,j.mode);return Ge.lanes=B,Ge.return=j,Ge}finally{}}}var ha=$p(!0),eg=$p(!1),Vn=!1;function Vl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function El(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function En(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function wn(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ye&2)!==0){var c=i.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),i.pending=t,t=Ji(e),Rp(e,null,n),t}return Qi(e,i,t,n),Ji(e)}function Bs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Fd(e,n)}}function wl(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var c=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var m={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?c=u=m:u=u.next=m,n=n.next}while(n!==null);u===null?c=u=t:u=u.next=t}else c=u=t;n={baseState:i.baseState,firstBaseUpdate:c,lastBaseUpdate:u,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Dl=!1;function Us(){if(Dl){var e=Fa;if(e!==null)throw e}}function Ps(e,t,n,i){Dl=!1;var c=e.updateQueue;Vn=!1;var u=c.firstBaseUpdate,m=c.lastBaseUpdate,x=c.shared.pending;if(x!==null){c.shared.pending=null;var v=x,w=v.next;v.next=null,m===null?u=w:m.next=w,m=v;var L=e.alternate;L!==null&&(L=L.updateQueue,x=L.lastBaseUpdate,x!==m&&(x===null?L.firstBaseUpdate=w:x.next=w,L.lastBaseUpdate=v))}if(u!==null){var U=c.baseState;m=0,L=w=v=null,x=u;do{var D=x.lane&-536870913,q=D!==x.lane;if(q?(be&D)===D:(i&D)===D){D!==0&&D===Pa&&(Dl=!0),L!==null&&(L=L.next={lane:0,tag:x.tag,payload:x.payload,callback:null,next:null});e:{var $=e,se=x;D=t;var Ie=n;switch(se.tag){case 1:if($=se.payload,typeof $=="function"){U=$.call(Ie,U,D);break e}U=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=se.payload,D=typeof $=="function"?$.call(Ie,U,D):$,D==null)break e;U=G({},U,D);break e;case 2:Vn=!0}}D=x.callback,D!==null&&(e.flags|=64,q&&(e.flags|=8192),q=c.callbacks,q===null?c.callbacks=[D]:q.push(D))}else q={lane:D,tag:x.tag,payload:x.payload,callback:x.callback,next:null},L===null?(w=L=q,v=U):L=L.next=q,m|=D;if(x=x.next,x===null){if(x=c.shared.pending,x===null)break;q=x,x=q.next,q.next=null,c.lastBaseUpdate=q,c.shared.pending=null}}while(!0);L===null&&(v=U),c.baseState=v,c.firstBaseUpdate=w,c.lastBaseUpdate=L,u===null&&(c.shared.lanes=0),Rn|=m,e.lanes=m,e.memoizedState=U}}function tg(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function ng(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)tg(n[e],t)}var Za=T(null),ro=T(0);function ag(e,t){e=xn,J(ro,e),J(Za,t),xn=e|t.baseLanes}function Nl(){J(ro,xn),J(Za,Za.current)}function Cl(){xn=ro.current,F(Za),F(ro)}var Mt=T(null),Rt=null;function Dn(e){var t=e.alternate;J(Oe,Oe.current&1),J(Mt,e),Rt===null&&(t===null||Za.current!==null||t.memoizedState!==null)&&(Rt=e)}function ql(e){J(Oe,Oe.current),J(Mt,e),Rt===null&&(Rt=e)}function sg(e){e.tag===22?(J(Oe,Oe.current),J(Mt,e),Rt===null&&(Rt=e)):Nn()}function Nn(){J(Oe,Oe.current),J(Mt,Mt.current)}function At(e){F(Mt),Rt===e&&(Rt=null),F(Oe)}var Oe=T(0);function lo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Bc(n)||Uc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var dn=0,ce=null,Te=null,Fe=null,co=!1,Ya=!1,ba=!1,uo=0,Fs=0,Qa=null,X1=0;function Re(){throw Error(o(321))}function Rl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!yt(e[n],t[n]))return!1;return!0}function zl(e,t,n,i,c,u){return dn=u,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?Og:$l,ba=!1,u=n(i,c),ba=!1,Ya&&(u=og(t,n,i,c)),ig(e),u}function ig(e){R.H=Zs;var t=Te!==null&&Te.next!==null;if(dn=0,Fe=Te=ce=null,co=!1,Fs=0,Qa=null,t)throw Error(o(300));e===null||Ke||(e=e.dependencies,e!==null&&eo(e)&&(Ke=!0))}function og(e,t,n,i){ce=e;var c=0;do{if(Ya&&(Qa=null),Fs=0,Ya=!1,25<=c)throw Error(o(301));if(c+=1,Fe=Te=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}R.H=Bg,u=t(n,i)}while(Ya);return u}function Z1(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?Ks(t):t,e=e.useState()[0],(Te!==null?Te.memoizedState:null)!==e&&(ce.flags|=1024),t}function Ll(){var e=uo!==0;return uo=0,e}function Hl(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ol(e){if(co){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}co=!1}dn=0,Fe=Te=ce=null,Ya=!1,Fs=uo=0,Qa=null}function lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?ce.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function Be(){if(Te===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=Fe===null?ce.memoizedState:Fe.next;if(t!==null)Fe=t,Te=e;else{if(e===null)throw ce.alternate===null?Error(o(467)):Error(o(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Fe===null?ce.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function po(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ks(e){var t=Fs;return Fs+=1,Qa===null&&(Qa=[]),e=Qp(Qa,e,t),t=ce,(Fe===null?t.memoizedState:Fe.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?Og:$l),e}function go(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ks(e);if(e.$$typeof===z)return tt(e)}throw Error(o(438,String(e)))}function Bl(e){var t=null,n=ce.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=ce.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(c){return c.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=po(),ce.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=Y;return t.index++,n}function pn(e,t){return typeof t=="function"?t(e):t}function mo(e){var t=Be();return Ul(t,Te,e)}function Ul(e,t,n){var i=e.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=n;var c=e.baseQueue,u=i.pending;if(u!==null){if(c!==null){var m=c.next;c.next=u.next,u.next=m}t.baseQueue=c=u,i.pending=null}if(u=e.baseState,c===null)e.memoizedState=u;else{t=c.next;var x=m=null,v=null,w=t,L=!1;do{var U=w.lane&-536870913;if(U!==w.lane?(be&U)===U:(dn&U)===U){var D=w.revertLane;if(D===0)v!==null&&(v=v.next={lane:0,revertLane:0,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),U===Pa&&(L=!0);else if((dn&D)===D){w=w.next,D===Pa&&(L=!0);continue}else U={lane:0,revertLane:w.revertLane,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},v===null?(x=v=U,m=u):v=v.next=U,ce.lanes|=D,Rn|=D;U=w.action,ba&&n(u,U),u=w.hasEagerState?w.eagerState:n(u,U)}else D={lane:U,revertLane:w.revertLane,gesture:w.gesture,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},v===null?(x=v=D,m=u):v=v.next=D,ce.lanes|=U,Rn|=U;w=w.next}while(w!==null&&w!==t);if(v===null?m=u:v.next=x,!yt(u,e.memoizedState)&&(Ke=!0,L&&(n=Fa,n!==null)))throw n;e.memoizedState=u,e.baseState=m,e.baseQueue=v,i.lastRenderedState=u}return c===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Pl(e){var t=Be(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var i=n.dispatch,c=n.pending,u=t.memoizedState;if(c!==null){n.pending=null;var m=c=c.next;do u=e(u,m.action),m=m.next;while(m!==c);yt(u,t.memoizedState)||(Ke=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,i]}function rg(e,t,n){var i=ce,c=Be(),u=xe;if(u){if(n===void 0)throw Error(o(407));n=n()}else n=t();var m=!yt((Te||c).memoizedState,n);if(m&&(c.memoizedState=n,Ke=!0),c=c.queue,Xl(ug.bind(null,i,c,e),[e]),c.getSnapshot!==t||m||Fe!==null&&Fe.memoizedState.tag&1){if(i.flags|=2048,Ja(9,{destroy:void 0},cg.bind(null,i,c,n,t),null),je===null)throw Error(o(349));u||(dn&127)!==0||lg(i,t,n)}return n}function lg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ce.updateQueue,t===null?(t=po(),ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function cg(e,t,n,i){t.value=n,t.getSnapshot=i,dg(t)&&pg(e)}function ug(e,t,n){return n(function(){dg(t)&&pg(e)})}function dg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!yt(e,n)}catch{return!0}}function pg(e){var t=ra(e,2);t!==null&&ft(t,e,2)}function Fl(e){var t=lt();if(typeof e=="function"){var n=e;if(e=n(),ba){vn(!0);try{n()}finally{vn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pn,lastRenderedState:e},t}function gg(e,t,n,i){return e.baseState=n,Ul(e,Te,typeof i=="function"?i:pn)}function Y1(e,t,n,i,c){if(fo(e))throw Error(o(485));if(e=t.action,e!==null){var u={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){u.listeners.push(m)}};R.T!==null?n(!0):u.isTransition=!1,i(u),n=t.pending,n===null?(u.next=t.pending=u,mg(t,u)):(u.next=n.next,t.pending=n.next=u)}}function mg(e,t){var n=t.action,i=t.payload,c=e.state;if(t.isTransition){var u=R.T,m={};R.T=m;try{var x=n(c,i),v=R.S;v!==null&&v(m,x),hg(e,t,x)}catch(w){Kl(e,t,w)}finally{u!==null&&m.types!==null&&(u.types=m.types),R.T=u}}else try{u=n(c,i),hg(e,t,u)}catch(w){Kl(e,t,w)}}function hg(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){bg(e,t,i)},function(i){return Kl(e,t,i)}):bg(e,t,n)}function bg(e,t,n){t.status="fulfilled",t.value=n,fg(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,mg(e,n)))}function Kl(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,fg(t),t=t.next;while(t!==i)}e.action=null}function fg(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function _g(e,t){return t}function xg(e,t){if(xe){var n=je.formState;if(n!==null){e:{var i=ce;if(xe){if(we){t:{for(var c=we,u=qt;c.nodeType!==8;){if(!u){c=null;break t}if(c=zt(c.nextSibling),c===null){c=null;break t}}u=c.data,c=u==="F!"||u==="F"?c:null}if(c){we=zt(c.nextSibling),i=c.data==="F!";break e}}In(i)}i=!1}i&&(t=n[0])}}return n=lt(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_g,lastRenderedState:t},n.queue=i,n=zg.bind(null,ce,i),i.dispatch=n,i=Fl(!1),u=Wl.bind(null,ce,!1,i.queue),i=lt(),c={state:t,dispatch:null,action:e,pending:null},i.queue=c,n=Y1.bind(null,ce,c,u,n),c.dispatch=n,i.memoizedState=e,[t,n,!1]}function Gg(e){var t=Be();return kg(t,Te,e)}function kg(e,t,n){if(t=Ul(e,t,_g)[0],e=mo(pn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Ks(t)}catch(m){throw m===Ka?ao:m}else i=t;t=Be();var c=t.queue,u=c.dispatch;return n!==t.memoizedState&&(ce.flags|=2048,Ja(9,{destroy:void 0},Q1.bind(null,c,n),null)),[i,u,e]}function Q1(e,t){e.action=t}function yg(e){var t=Be(),n=Te;if(n!==null)return kg(t,n,e);Be(),t=t.memoizedState,n=Be();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Ja(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=ce.updateQueue,t===null&&(t=po(),ce.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function vg(){return Be().memoizedState}function ho(e,t,n,i){var c=lt();ce.flags|=e,c.memoizedState=Ja(1|t,{destroy:void 0},n,i===void 0?null:i)}function bo(e,t,n,i){var c=Be();i=i===void 0?null:i;var u=c.memoizedState.inst;Te!==null&&i!==null&&Rl(i,Te.memoizedState.deps)?c.memoizedState=Ja(t,u,n,i):(ce.flags|=e,c.memoizedState=Ja(1|t,u,n,i))}function Mg(e,t){ho(8390656,8,e,t)}function Xl(e,t){bo(2048,8,e,t)}function J1(e){ce.flags|=4;var t=ce.updateQueue;if(t===null)t=po(),ce.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Ag(e){var t=Be().memoizedState;return J1({ref:t,nextImpl:e}),function(){if((ye&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function Tg(e,t){return bo(4,2,e,t)}function Sg(e,t){return bo(4,4,e,t)}function Ig(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function jg(e,t,n){n=n!=null?n.concat([e]):null,bo(4,4,Ig.bind(null,t,e),n)}function Zl(){}function Vg(e,t){var n=Be();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Rl(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Eg(e,t){var n=Be();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Rl(t,i[1]))return i[0];if(i=e(),ba){vn(!0);try{e()}finally{vn(!1)}}return n.memoizedState=[i,t],i}function Yl(e,t,n){return n===void 0||(dn&1073741824)!==0&&(be&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=wm(),ce.lanes|=e,Rn|=e,n)}function wg(e,t,n,i){return yt(n,t)?n:Za.current!==null?(e=Yl(e,n,i),yt(e,t)||(Ke=!0),e):(dn&42)===0||(dn&1073741824)!==0&&(be&261930)===0?(Ke=!0,e.memoizedState=n):(e=wm(),ce.lanes|=e,Rn|=e,t)}function Dg(e,t,n,i,c){var u=Q.p;Q.p=u!==0&&8>u?u:8;var m=R.T,x={};R.T=x,Wl(e,!1,t,n);try{var v=c(),w=R.S;if(w!==null&&w(x,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var L=K1(v,i);Xs(e,t,L,It(e))}else Xs(e,t,i,It(e))}catch(U){Xs(e,t,{then:function(){},status:"rejected",reason:U},It())}finally{Q.p=u,m!==null&&x.types!==null&&(m.types=x.types),R.T=m}}function W1(){}function Ql(e,t,n,i){if(e.tag!==5)throw Error(o(476));var c=Ng(e).queue;Dg(e,c,t,W,n===null?W1:function(){return Cg(e),n(i)})}function Ng(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pn,lastRenderedState:W},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Cg(e){var t=Ng(e);t.next===null&&(t=e.alternate.memoizedState),Xs(e,t.next.queue,{},It())}function Jl(){return tt(ui)}function qg(){return Be().memoizedState}function Rg(){return Be().memoizedState}function $1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=It();e=En(n);var i=wn(t,e,n);i!==null&&(ft(i,t,n),Bs(i,t,n)),t={cache:Tl()},e.payload=t;return}t=t.return}}function ex(e,t,n){var i=It();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},fo(e)?Lg(t,n):(n=hl(e,t,n,i),n!==null&&(ft(n,e,i),Hg(n,t,i)))}function zg(e,t,n){var i=It();Xs(e,t,n,i)}function Xs(e,t,n,i){var c={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(fo(e))Lg(t,c);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var m=t.lastRenderedState,x=u(m,n);if(c.hasEagerState=!0,c.eagerState=x,yt(x,m))return Qi(e,t,c,0),je===null&&Yi(),!1}catch{}finally{}if(n=hl(e,t,c,i),n!==null)return ft(n,e,i),Hg(n,t,i),!0}return!1}function Wl(e,t,n,i){if(i={lane:2,revertLane:Vc(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},fo(e)){if(t)throw Error(o(479))}else t=hl(e,n,i,2),t!==null&&ft(t,e,2)}function fo(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function Lg(e,t){Ya=co=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hg(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Fd(e,n)}}var Zs={readContext:tt,use:go,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useLayoutEffect:Re,useInsertionEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useSyncExternalStore:Re,useId:Re,useHostTransitionStatus:Re,useFormState:Re,useActionState:Re,useOptimistic:Re,useMemoCache:Re,useCacheRefresh:Re};Zs.useEffectEvent=Re;var Og={readContext:tt,use:go,useCallback:function(e,t){return lt().memoizedState=[e,t===void 0?null:t],e},useContext:tt,useEffect:Mg,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,ho(4194308,4,Ig.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ho(4194308,4,e,t)},useInsertionEffect:function(e,t){ho(4,2,e,t)},useMemo:function(e,t){var n=lt();t=t===void 0?null:t;var i=e();if(ba){vn(!0);try{e()}finally{vn(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=lt();if(n!==void 0){var c=n(t);if(ba){vn(!0);try{n(t)}finally{vn(!1)}}}else c=t;return i.memoizedState=i.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},i.queue=e,e=e.dispatch=ex.bind(null,ce,e),[i.memoizedState,e]},useRef:function(e){var t=lt();return e={current:e},t.memoizedState=e},useState:function(e){e=Fl(e);var t=e.queue,n=zg.bind(null,ce,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Zl,useDeferredValue:function(e,t){var n=lt();return Yl(n,e,t)},useTransition:function(){var e=Fl(!1);return e=Dg.bind(null,ce,e.queue,!0,!1),lt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=ce,c=lt();if(xe){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),je===null)throw Error(o(349));(be&127)!==0||lg(i,t,n)}c.memoizedState=n;var u={value:n,getSnapshot:t};return c.queue=u,Mg(ug.bind(null,i,u,e),[e]),i.flags|=2048,Ja(9,{destroy:void 0},cg.bind(null,i,u,n,t),null),n},useId:function(){var e=lt(),t=je.identifierPrefix;if(xe){var n=Yt,i=Zt;n=(i&~(1<<32-kt(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=uo++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=X1++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Jl,useFormState:xg,useActionState:xg,useOptimistic:function(e){var t=lt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Wl.bind(null,ce,!0,n),n.dispatch=t,[e,t]},useMemoCache:Bl,useCacheRefresh:function(){return lt().memoizedState=$1.bind(null,ce)},useEffectEvent:function(e){var t=lt(),n={impl:e};return t.memoizedState=n,function(){if((ye&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}},$l={readContext:tt,use:go,useCallback:Vg,useContext:tt,useEffect:Xl,useImperativeHandle:jg,useInsertionEffect:Tg,useLayoutEffect:Sg,useMemo:Eg,useReducer:mo,useRef:vg,useState:function(){return mo(pn)},useDebugValue:Zl,useDeferredValue:function(e,t){var n=Be();return wg(n,Te.memoizedState,e,t)},useTransition:function(){var e=mo(pn)[0],t=Be().memoizedState;return[typeof e=="boolean"?e:Ks(e),t]},useSyncExternalStore:rg,useId:qg,useHostTransitionStatus:Jl,useFormState:Gg,useActionState:Gg,useOptimistic:function(e,t){var n=Be();return gg(n,Te,e,t)},useMemoCache:Bl,useCacheRefresh:Rg};$l.useEffectEvent=Ag;var Bg={readContext:tt,use:go,useCallback:Vg,useContext:tt,useEffect:Xl,useImperativeHandle:jg,useInsertionEffect:Tg,useLayoutEffect:Sg,useMemo:Eg,useReducer:Pl,useRef:vg,useState:function(){return Pl(pn)},useDebugValue:Zl,useDeferredValue:function(e,t){var n=Be();return Te===null?Yl(n,e,t):wg(n,Te.memoizedState,e,t)},useTransition:function(){var e=Pl(pn)[0],t=Be().memoizedState;return[typeof e=="boolean"?e:Ks(e),t]},useSyncExternalStore:rg,useId:qg,useHostTransitionStatus:Jl,useFormState:yg,useActionState:yg,useOptimistic:function(e,t){var n=Be();return Te!==null?gg(n,Te,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Bl,useCacheRefresh:Rg};Bg.useEffectEvent=Ag;function ec(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:G({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var tc={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=It(),c=En(i);c.payload=t,n!=null&&(c.callback=n),t=wn(e,c,i),t!==null&&(ft(t,e,i),Bs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=It(),c=En(i);c.tag=1,c.payload=t,n!=null&&(c.callback=n),t=wn(e,c,i),t!==null&&(ft(t,e,i),Bs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=It(),i=En(n);i.tag=2,t!=null&&(i.callback=t),t=wn(e,i,n),t!==null&&(ft(t,e,n),Bs(t,e,n))}};function Ug(e,t,n,i,c,u,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,u,m):t.prototype&&t.prototype.isPureReactComponent?!Ns(n,i)||!Ns(c,u):!0}function Pg(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&tc.enqueueReplaceState(t,t.state,null)}function fa(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=G({},n));for(var c in e)n[c]===void 0&&(n[c]=e[c])}return n}function Fg(e){Zi(e)}function Kg(e){console.error(e)}function Xg(e){Zi(e)}function _o(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Zg(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function nc(e,t,n){return n=En(n),n.tag=3,n.payload={element:null},n.callback=function(){_o(e,t)},n}function Yg(e){return e=En(e),e.tag=3,e}function Qg(e,t,n,i){var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var u=i.value;e.payload=function(){return c(u)},e.callback=function(){Zg(t,n,i)}}var m=n.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){Zg(t,n,i),typeof c!="function"&&(zn===null?zn=new Set([this]):zn.add(this));var x=i.stack;this.componentDidCatch(i.value,{componentStack:x!==null?x:""})})}function tx(e,t,n,i,c){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Ua(t,n,c,!0),n=Mt.current,n!==null){switch(n.tag){case 31:case 13:return Rt===null?Vo():n.alternate===null&&ze===0&&(ze=3),n.flags&=-257,n.flags|=65536,n.lanes=c,i===so?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Sc(e,i,c)),!1;case 22:return n.flags|=65536,i===so?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Sc(e,i,c)),!1}throw Error(o(435,n.tag))}return Sc(e,i,c),Vo(),!1}if(xe)return t=Mt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=c,i!==kl&&(e=Error(o(422),{cause:i}),Rs(Dt(e,n)))):(i!==kl&&(t=Error(o(423),{cause:i}),Rs(Dt(t,n))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,i=Dt(i,n),c=nc(e.stateNode,i,c),wl(e,c),ze!==4&&(ze=2)),!1;var u=Error(o(520),{cause:i});if(u=Dt(u,n),ni===null?ni=[u]:ni.push(u),ze!==4&&(ze=2),t===null)return!0;i=Dt(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=c&-c,n.lanes|=e,e=nc(n.stateNode,i,e),wl(n,e),!1;case 1:if(t=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(zn===null||!zn.has(u))))return n.flags|=65536,c&=-c,n.lanes|=c,c=Yg(c),Qg(c,e,n,i),wl(n,c),!1}n=n.return}while(n!==null);return!1}var ac=Error(o(461)),Ke=!1;function nt(e,t,n,i){t.child=e===null?eg(t,null,n,i):ha(t,e.child,n,i)}function Jg(e,t,n,i,c){n=n.render;var u=t.ref;if("ref"in i){var m={};for(var x in i)x!=="ref"&&(m[x]=i[x])}else m=i;return da(t),i=zl(e,t,n,m,u,c),x=Ll(),e!==null&&!Ke?(Hl(e,t,c),gn(e,t,c)):(xe&&x&&xl(t),t.flags|=1,nt(e,t,i,c),t.child)}function Wg(e,t,n,i,c){if(e===null){var u=n.type;return typeof u=="function"&&!bl(u)&&u.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=u,$g(e,t,u,i,c)):(e=Wi(n.type,null,i,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!dc(e,c)){var m=u.memoizedProps;if(n=n.compare,n=n!==null?n:Ns,n(m,i)&&e.ref===t.ref)return gn(e,t,c)}return t.flags|=1,e=rn(u,i),e.ref=t.ref,e.return=t,t.child=e}function $g(e,t,n,i,c){if(e!==null){var u=e.memoizedProps;if(Ns(u,i)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=i=u,dc(e,c))(e.flags&131072)!==0&&(Ke=!0);else return t.lanes=e.lanes,gn(e,t,c)}return sc(e,t,n,i,c)}function em(e,t,n,i){var c=i.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|n:n,e!==null){for(i=t.child=e.child,c=0;i!==null;)c=c|i.lanes|i.childLanes,i=i.sibling;i=c&~u}else i=0,t.child=null;return tm(e,t,u,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&no(t,u!==null?u.cachePool:null),u!==null?ag(t,u):Nl(),sg(t);else return i=t.lanes=536870912,tm(e,t,u!==null?u.baseLanes|n:n,n,i)}else u!==null?(no(t,u.cachePool),ag(t,u),Nn(),t.memoizedState=null):(e!==null&&no(t,null),Nl(),Nn());return nt(e,t,c,n),t.child}function Ys(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function tm(e,t,n,i,c){var u=Il();return u=u===null?null:{parent:Pe._currentValue,pool:u},t.memoizedState={baseLanes:n,cachePool:u},e!==null&&no(t,null),Nl(),sg(t),e!==null&&Ua(e,t,i,!0),t.childLanes=c,null}function xo(e,t){return t=ko({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function nm(e,t,n){return ha(t,e.child,null,n),e=xo(t,t.pendingProps),e.flags|=2,At(t),t.memoizedState=null,e}function nx(e,t,n){var i=t.pendingProps,c=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(xe){if(i.mode==="hidden")return e=xo(t,i),t.lanes=536870912,Ys(null,e);if(ql(t),(e=we)?(e=mh(e,qt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Tn!==null?{id:Zt,overflow:Yt}:null,retryLane:536870912,hydrationErrors:null},n=Lp(e),n.return=t,t.child=n,et=t,we=null)):e=null,e===null)throw In(t);return t.lanes=536870912,null}return xo(t,i)}var u=e.memoizedState;if(u!==null){var m=u.dehydrated;if(ql(t),c)if(t.flags&256)t.flags&=-257,t=nm(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(Ke||Ua(e,t,n,!1),c=(n&e.childLanes)!==0,Ke||c){if(i=je,i!==null&&(m=Kd(i,n),m!==0&&m!==u.retryLane))throw u.retryLane=m,ra(e,m),ft(i,e,m),ac;Vo(),t=nm(e,t,n)}else e=u.treeContext,we=zt(m.nextSibling),et=t,xe=!0,Sn=null,qt=!1,e!==null&&Bp(t,e),t=xo(t,i),t.flags|=4096;return t}return e=rn(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Go(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function sc(e,t,n,i,c){return da(t),n=zl(e,t,n,i,void 0,c),i=Ll(),e!==null&&!Ke?(Hl(e,t,c),gn(e,t,c)):(xe&&i&&xl(t),t.flags|=1,nt(e,t,n,c),t.child)}function am(e,t,n,i,c,u){return da(t),t.updateQueue=null,n=og(t,i,n,c),ig(e),i=Ll(),e!==null&&!Ke?(Hl(e,t,u),gn(e,t,u)):(xe&&i&&xl(t),t.flags|=1,nt(e,t,n,u),t.child)}function sm(e,t,n,i,c){if(da(t),t.stateNode===null){var u=La,m=n.contextType;typeof m=="object"&&m!==null&&(u=tt(m)),u=new n(i,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=tc,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=i,u.state=t.memoizedState,u.refs={},Vl(t),m=n.contextType,u.context=typeof m=="object"&&m!==null?tt(m):La,u.state=t.memoizedState,m=n.getDerivedStateFromProps,typeof m=="function"&&(ec(t,n,m,i),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(m=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),m!==u.state&&tc.enqueueReplaceState(u,u.state,null),Ps(t,i,u,c),Us(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){u=t.stateNode;var x=t.memoizedProps,v=fa(n,x);u.props=v;var w=u.context,L=n.contextType;m=La,typeof L=="object"&&L!==null&&(m=tt(L));var U=n.getDerivedStateFromProps;L=typeof U=="function"||typeof u.getSnapshotBeforeUpdate=="function",x=t.pendingProps!==x,L||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(x||w!==m)&&Pg(t,u,i,m),Vn=!1;var D=t.memoizedState;u.state=D,Ps(t,i,u,c),Us(),w=t.memoizedState,x||D!==w||Vn?(typeof U=="function"&&(ec(t,n,U,i),w=t.memoizedState),(v=Vn||Ug(t,n,v,i,D,w,m))?(L||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=w),u.props=i,u.state=w,u.context=m,i=v):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{u=t.stateNode,El(e,t),m=t.memoizedProps,L=fa(n,m),u.props=L,U=t.pendingProps,D=u.context,w=n.contextType,v=La,typeof w=="object"&&w!==null&&(v=tt(w)),x=n.getDerivedStateFromProps,(w=typeof x=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(m!==U||D!==v)&&Pg(t,u,i,v),Vn=!1,D=t.memoizedState,u.state=D,Ps(t,i,u,c),Us();var q=t.memoizedState;m!==U||D!==q||Vn||e!==null&&e.dependencies!==null&&eo(e.dependencies)?(typeof x=="function"&&(ec(t,n,x,i),q=t.memoizedState),(L=Vn||Ug(t,n,L,i,D,q,v)||e!==null&&e.dependencies!==null&&eo(e.dependencies))?(w||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(i,q,v),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(i,q,v)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||m===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=q),u.props=i,u.state=q,u.context=v,i=L):(typeof u.componentDidUpdate!="function"||m===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),i=!1)}return u=i,Go(e,t),i=(t.flags&128)!==0,u||i?(u=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&i?(t.child=ha(t,e.child,null,c),t.child=ha(t,null,n,c)):nt(e,t,n,c),t.memoizedState=u.state,e=t.child):e=gn(e,t,c),e}function im(e,t,n,i){return ca(),t.flags|=256,nt(e,t,n,i),t.child}var ic={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function oc(e){return{baseLanes:e,cachePool:Zp()}}function rc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=St),e}function om(e,t,n){var i=t.pendingProps,c=!1,u=(t.flags&128)!==0,m;if((m=u)||(m=e!==null&&e.memoizedState===null?!1:(Oe.current&2)!==0),m&&(c=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(xe){if(c?Dn(t):Nn(),(e=we)?(e=mh(e,qt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Tn!==null?{id:Zt,overflow:Yt}:null,retryLane:536870912,hydrationErrors:null},n=Lp(e),n.return=t,t.child=n,et=t,we=null)):e=null,e===null)throw In(t);return Uc(e)?t.lanes=32:t.lanes=536870912,null}var x=i.children;return i=i.fallback,c?(Nn(),c=t.mode,x=ko({mode:"hidden",children:x},c),i=la(i,c,n,null),x.return=t,i.return=t,x.sibling=i,t.child=x,i=t.child,i.memoizedState=oc(n),i.childLanes=rc(e,m,n),t.memoizedState=ic,Ys(null,i)):(Dn(t),lc(t,x))}var v=e.memoizedState;if(v!==null&&(x=v.dehydrated,x!==null)){if(u)t.flags&256?(Dn(t),t.flags&=-257,t=cc(e,t,n)):t.memoizedState!==null?(Nn(),t.child=e.child,t.flags|=128,t=null):(Nn(),x=i.fallback,c=t.mode,i=ko({mode:"visible",children:i.children},c),x=la(x,c,n,null),x.flags|=2,i.return=t,x.return=t,i.sibling=x,t.child=i,ha(t,e.child,null,n),i=t.child,i.memoizedState=oc(n),i.childLanes=rc(e,m,n),t.memoizedState=ic,t=Ys(null,i));else if(Dn(t),Uc(x)){if(m=x.nextSibling&&x.nextSibling.dataset,m)var w=m.dgst;m=w,i=Error(o(419)),i.stack="",i.digest=m,Rs({value:i,source:null,stack:null}),t=cc(e,t,n)}else if(Ke||Ua(e,t,n,!1),m=(n&e.childLanes)!==0,Ke||m){if(m=je,m!==null&&(i=Kd(m,n),i!==0&&i!==v.retryLane))throw v.retryLane=i,ra(e,i),ft(m,e,i),ac;Bc(x)||Vo(),t=cc(e,t,n)}else Bc(x)?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,we=zt(x.nextSibling),et=t,xe=!0,Sn=null,qt=!1,e!==null&&Bp(t,e),t=lc(t,i.children),t.flags|=4096);return t}return c?(Nn(),x=i.fallback,c=t.mode,v=e.child,w=v.sibling,i=rn(v,{mode:"hidden",children:i.children}),i.subtreeFlags=v.subtreeFlags&65011712,w!==null?x=rn(w,x):(x=la(x,c,n,null),x.flags|=2),x.return=t,i.return=t,i.sibling=x,t.child=i,Ys(null,i),i=t.child,x=e.child.memoizedState,x===null?x=oc(n):(c=x.cachePool,c!==null?(v=Pe._currentValue,c=c.parent!==v?{parent:v,pool:v}:c):c=Zp(),x={baseLanes:x.baseLanes|n,cachePool:c}),i.memoizedState=x,i.childLanes=rc(e,m,n),t.memoizedState=ic,Ys(e.child,i)):(Dn(t),n=e.child,e=n.sibling,n=rn(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=n,t.memoizedState=null,n)}function lc(e,t){return t=ko({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ko(e,t){return e=vt(22,e,null,t),e.lanes=0,e}function cc(e,t,n){return ha(t,e.child,null,n),e=lc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function rm(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Ml(e.return,t,n)}function uc(e,t,n,i,c,u){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:c,treeForkCount:u}:(m.isBackwards=t,m.rendering=null,m.renderingStartTime=0,m.last=i,m.tail=n,m.tailMode=c,m.treeForkCount=u)}function lm(e,t,n){var i=t.pendingProps,c=i.revealOrder,u=i.tail;i=i.children;var m=Oe.current,x=(m&2)!==0;if(x?(m=m&1|2,t.flags|=128):m&=1,J(Oe,m),nt(e,t,i,n),i=xe?qs:0,!x&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rm(e,n,t);else if(e.tag===19)rm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(n=t.child,c=null;n!==null;)e=n.alternate,e!==null&&lo(e)===null&&(c=n),n=n.sibling;n=c,n===null?(c=t.child,t.child=null):(c=n.sibling,n.sibling=null),uc(t,!1,c,n,u,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&lo(e)===null){t.child=c;break}e=c.sibling,c.sibling=n,n=c,c=e}uc(t,!0,n,null,u,i);break;case"together":uc(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function gn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ua(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function dc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&eo(e)))}function ax(e,t,n){switch(t.tag){case 3:rt(t,t.stateNode.containerInfo),jn(t,Pe,e.memoizedState.cache),ca();break;case 27:case 5:ks(t);break;case 4:rt(t,t.stateNode.containerInfo);break;case 10:jn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ql(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Dn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?om(e,t,n):(Dn(t),e=gn(e,t,n),e!==null?e.sibling:null);Dn(t);break;case 19:var c=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Ua(e,t,n,!1),i=(n&t.childLanes)!==0),c){if(i)return lm(e,t,n);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),J(Oe,Oe.current),i)break;return null;case 22:return t.lanes=0,em(e,t,n,t.pendingProps);case 24:jn(t,Pe,e.memoizedState.cache)}return gn(e,t,n)}function cm(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ke=!0;else{if(!dc(e,n)&&(t.flags&128)===0)return Ke=!1,ax(e,t,n);Ke=(e.flags&131072)!==0}else Ke=!1,xe&&(t.flags&1048576)!==0&&Op(t,qs,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=ga(t.elementType),t.type=e,typeof e=="function")bl(e)?(i=fa(e,i),t.tag=1,t=sm(null,t,e,i,n)):(t.tag=0,t=sc(null,t,e,i,n));else{if(e!=null){var c=e.$$typeof;if(c===V){t.tag=11,t=Jg(null,t,e,i,n);break e}else if(c===C){t.tag=14,t=Wg(null,t,e,i,n);break e}}throw t=qe(e)||e,Error(o(306,t,""))}}return t;case 0:return sc(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,c=fa(i,t.pendingProps),sm(e,t,i,c,n);case 3:e:{if(rt(t,t.stateNode.containerInfo),e===null)throw Error(o(387));i=t.pendingProps;var u=t.memoizedState;c=u.element,El(e,t),Ps(t,i,null,n);var m=t.memoizedState;if(i=m.cache,jn(t,Pe,i),i!==u.cache&&Al(t,[Pe],n,!0),Us(),i=m.element,u.isDehydrated)if(u={element:i,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=im(e,t,i,n);break e}else if(i!==c){c=Dt(Error(o(424)),t),Rs(c),t=im(e,t,i,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(we=zt(e.firstChild),et=t,xe=!0,Sn=null,qt=!0,n=eg(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ca(),i===c){t=gn(e,t,n);break e}nt(e,t,i,n)}t=t.child}return t;case 26:return Go(e,t),e===null?(n=Gh(t.type,null,t.pendingProps,null))?t.memoizedState=n:xe||(n=t.type,e=t.pendingProps,i=Ro(ge.current).createElement(n),i[$e]=t,i[dt]=e,at(i,n,e),Je(i),t.stateNode=i):t.memoizedState=Gh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ks(t),e===null&&xe&&(i=t.stateNode=fh(t.type,t.pendingProps,ge.current),et=t,qt=!0,c=we,Bn(t.type)?(Pc=c,we=zt(i.firstChild)):we=c),nt(e,t,t.pendingProps.children,n),Go(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&xe&&((c=i=we)&&(i=Dx(i,t.type,t.pendingProps,qt),i!==null?(t.stateNode=i,et=t,we=zt(i.firstChild),qt=!1,c=!0):c=!1),c||In(t)),ks(t),c=t.type,u=t.pendingProps,m=e!==null?e.memoizedProps:null,i=u.children,Lc(c,u)?i=null:m!==null&&Lc(c,m)&&(t.flags|=32),t.memoizedState!==null&&(c=zl(e,t,Z1,null,null,n),ui._currentValue=c),Go(e,t),nt(e,t,i,n),t.child;case 6:return e===null&&xe&&((e=n=we)&&(n=Nx(n,t.pendingProps,qt),n!==null?(t.stateNode=n,et=t,we=null,e=!0):e=!1),e||In(t)),null;case 13:return om(e,t,n);case 4:return rt(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ha(t,null,i,n):nt(e,t,i,n),t.child;case 11:return Jg(e,t,t.type,t.pendingProps,n);case 7:return nt(e,t,t.pendingProps,n),t.child;case 8:return nt(e,t,t.pendingProps.children,n),t.child;case 12:return nt(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,jn(t,t.type,i.value),nt(e,t,i.children,n),t.child;case 9:return c=t.type._context,i=t.pendingProps.children,da(t),c=tt(c),i=i(c),t.flags|=1,nt(e,t,i,n),t.child;case 14:return Wg(e,t,t.type,t.pendingProps,n);case 15:return $g(e,t,t.type,t.pendingProps,n);case 19:return lm(e,t,n);case 31:return nx(e,t,n);case 22:return em(e,t,n,t.pendingProps);case 24:return da(t),i=tt(Pe),e===null?(c=Il(),c===null&&(c=je,u=Tl(),c.pooledCache=u,u.refCount++,u!==null&&(c.pooledCacheLanes|=n),c=u),t.memoizedState={parent:i,cache:c},Vl(t),jn(t,Pe,c)):((e.lanes&n)!==0&&(El(e,t),Ps(t,null,null,n),Us()),c=e.memoizedState,u=t.memoizedState,c.parent!==i?(c={parent:i,cache:i},t.memoizedState=c,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=c),jn(t,Pe,i)):(i=u.cache,jn(t,Pe,i),i!==c.cache&&Al(t,[Pe],n,!0))),nt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function mn(e){e.flags|=4}function pc(e,t,n,i,c){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(qm())e.flags|=8192;else throw ma=so,jl}else e.flags&=-16777217}function um(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ah(t))if(qm())e.flags|=8192;else throw ma=so,jl}function yo(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ud():536870912,e.lanes|=t,ts|=t)}function Qs(e,t){if(!xe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function De(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var c=e.child;c!==null;)n|=c.lanes|c.childLanes,i|=c.subtreeFlags&65011712,i|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)n|=c.lanes|c.childLanes,i|=c.subtreeFlags,i|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function sx(e,t,n){var i=t.pendingProps;switch(Gl(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(t),null;case 1:return De(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),un(Pe),He(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ba(t)?mn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,yl())),De(t),null;case 26:var c=t.type,u=t.memoizedState;return e===null?(mn(t),u!==null?(De(t),um(t,u)):(De(t),pc(t,c,null,i,n))):u?u!==e.memoizedState?(mn(t),De(t),um(t,u)):(De(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&mn(t),De(t),pc(t,c,e,i,n)),null;case 27:if(wi(t),n=ge.current,c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&mn(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return De(t),null}e=te.current,Ba(t)?Up(t):(e=fh(c,i,n),t.stateNode=e,mn(t))}return De(t),null;case 5:if(wi(t),c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&mn(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return De(t),null}if(u=te.current,Ba(t))Up(t);else{var m=Ro(ge.current);switch(u){case 1:u=m.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:u=m.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":u=m.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":u=m.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":u=m.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof i.is=="string"?m.createElement("select",{is:i.is}):m.createElement("select"),i.multiple?u.multiple=!0:i.size&&(u.size=i.size);break;default:u=typeof i.is=="string"?m.createElement(c,{is:i.is}):m.createElement(c)}}u[$e]=t,u[dt]=i;e:for(m=t.child;m!==null;){if(m.tag===5||m.tag===6)u.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}t.stateNode=u;e:switch(at(u,c,i),c){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&mn(t)}}return De(t),pc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&mn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(o(166));if(e=ge.current,Ba(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,c=et,c!==null)switch(c.tag){case 27:case 5:i=c.memoizedProps}e[$e]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||oh(e.nodeValue,n)),e||In(t,!0)}else e=Ro(e).createTextNode(i),e[$e]=t,t.stateNode=e}return De(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Ba(t),n!==null){if(e===null){if(!i)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[$e]=t}else ca(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;De(t),e=!1}else n=yl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(At(t),t):(At(t),null);if((t.flags&128)!==0)throw Error(o(558))}return De(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Ba(t),i!==null&&i.dehydrated!==null){if(e===null){if(!c)throw Error(o(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(o(317));c[$e]=t}else ca(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;De(t),c=!1}else c=yl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return t.flags&256?(At(t),t):(At(t),null)}return At(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,c=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(c=i.alternate.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==c&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),yo(t,t.updateQueue),De(t),null);case 4:return He(),e===null&&Nc(t.stateNode.containerInfo),De(t),null;case 10:return un(t.type),De(t),null;case 19:if(F(Oe),i=t.memoizedState,i===null)return De(t),null;if(c=(t.flags&128)!==0,u=i.rendering,u===null)if(c)Qs(i,!1);else{if(ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=lo(e),u!==null){for(t.flags|=128,Qs(i,!1),e=u.updateQueue,t.updateQueue=e,yo(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)zp(n,e),n=n.sibling;return J(Oe,Oe.current&1|2),xe&&ln(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&xt()>So&&(t.flags|=128,c=!0,Qs(i,!1),t.lanes=4194304)}else{if(!c)if(e=lo(u),e!==null){if(t.flags|=128,c=!0,e=e.updateQueue,t.updateQueue=e,yo(t,e),Qs(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!xe)return De(t),null}else 2*xt()-i.renderingStartTime>So&&n!==536870912&&(t.flags|=128,c=!0,Qs(i,!1),t.lanes=4194304);i.isBackwards?(u.sibling=t.child,t.child=u):(e=i.last,e!==null?e.sibling=u:t.child=u,i.last=u)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=xt(),e.sibling=null,n=Oe.current,J(Oe,c?n&1|2:n&1),xe&&ln(t,i.treeForkCount),e):(De(t),null);case 22:case 23:return At(t),Cl(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(De(t),t.subtreeFlags&6&&(t.flags|=8192)):De(t),n=t.updateQueue,n!==null&&yo(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&F(pa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),un(Pe),De(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function ix(e,t){switch(Gl(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return un(Pe),He(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return wi(t),null;case 31:if(t.memoizedState!==null){if(At(t),t.alternate===null)throw Error(o(340));ca()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(At(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));ca()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F(Oe),null;case 4:return He(),null;case 10:return un(t.type),null;case 22:case 23:return At(t),Cl(),e!==null&&F(pa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return un(Pe),null;case 25:return null;default:return null}}function dm(e,t){switch(Gl(t),t.tag){case 3:un(Pe),He();break;case 26:case 27:case 5:wi(t);break;case 4:He();break;case 31:t.memoizedState!==null&&At(t);break;case 13:At(t);break;case 19:F(Oe);break;case 10:un(t.type);break;case 22:case 23:At(t),Cl(),e!==null&&F(pa);break;case 24:un(Pe)}}function Js(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var c=i.next;n=c;do{if((n.tag&e)===e){i=void 0;var u=n.create,m=n.inst;i=u(),m.destroy=i}n=n.next}while(n!==c)}}catch(x){Ae(t,t.return,x)}}function Cn(e,t,n){try{var i=t.updateQueue,c=i!==null?i.lastEffect:null;if(c!==null){var u=c.next;i=u;do{if((i.tag&e)===e){var m=i.inst,x=m.destroy;if(x!==void 0){m.destroy=void 0,c=t;var v=n,w=x;try{w()}catch(L){Ae(c,v,L)}}}i=i.next}while(i!==u)}}catch(L){Ae(t,t.return,L)}}function pm(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ng(t,n)}catch(i){Ae(e,e.return,i)}}}function gm(e,t,n){n.props=fa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Ae(e,t,i)}}function Ws(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(c){Ae(e,t,c)}}function Qt(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(c){Ae(e,t,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(c){Ae(e,t,c)}else n.current=null}function mm(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(c){Ae(e,e.return,c)}}function gc(e,t,n){try{var i=e.stateNode;Sx(i,e.type,n,t),i[dt]=t}catch(c){Ae(e,e.return,c)}}function hm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Bn(e.type)||e.tag===4}function mc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Bn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hc(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=sn));else if(i!==4&&(i===27&&Bn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(hc(e,t,n),e=e.sibling;e!==null;)hc(e,t,n),e=e.sibling}function vo(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Bn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(vo(e,t,n),e=e.sibling;e!==null;)vo(e,t,n),e=e.sibling}function bm(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,c=t.attributes;c.length;)t.removeAttributeNode(c[0]);at(t,i,n),t[$e]=e,t[dt]=n}catch(u){Ae(e,e.return,u)}}var hn=!1,Xe=!1,bc=!1,fm=typeof WeakSet=="function"?WeakSet:Set,We=null;function ox(e,t){if(e=e.containerInfo,Rc=Po,e=jp(e),cl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var c=i.anchorOffset,u=i.focusNode;i=i.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var m=0,x=-1,v=-1,w=0,L=0,U=e,D=null;t:for(;;){for(var q;U!==n||c!==0&&U.nodeType!==3||(x=m+c),U!==u||i!==0&&U.nodeType!==3||(v=m+i),U.nodeType===3&&(m+=U.nodeValue.length),(q=U.firstChild)!==null;)D=U,U=q;for(;;){if(U===e)break t;if(D===n&&++w===c&&(x=m),D===u&&++L===i&&(v=m),(q=U.nextSibling)!==null)break;U=D,D=U.parentNode}U=q}n=x===-1||v===-1?null:{start:x,end:v}}else n=null}n=n||{start:0,end:0}}else n=null;for(zc={focusedElem:e,selectionRange:n},Po=!1,We=t;We!==null;)if(t=We,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,We=e;else for(;We!==null;){switch(t=We,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)c=e[n],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,n=t,c=u.memoizedProps,u=u.memoizedState,i=n.stateNode;try{var $=fa(n.type,c);e=i.getSnapshotBeforeUpdate($,u),i.__reactInternalSnapshotBeforeUpdate=e}catch(se){Ae(n,n.return,se)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Oc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Oc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,We=e;break}We=t.return}}function _m(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:fn(e,n),i&4&&Js(5,n);break;case 1:if(fn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(m){Ae(n,n.return,m)}else{var c=fa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(c,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){Ae(n,n.return,m)}}i&64&&pm(n),i&512&&Ws(n,n.return);break;case 3:if(fn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ng(e,t)}catch(m){Ae(n,n.return,m)}}break;case 27:t===null&&i&4&&bm(n);case 26:case 5:fn(e,n),t===null&&i&4&&mm(n),i&512&&Ws(n,n.return);break;case 12:fn(e,n);break;case 31:fn(e,n),i&4&&km(e,n);break;case 13:fn(e,n),i&4&&ym(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=hx.bind(null,n),Cx(e,n))));break;case 22:if(i=n.memoizedState!==null||hn,!i){t=t!==null&&t.memoizedState!==null||Xe,c=hn;var u=Xe;hn=i,(Xe=t)&&!u?_n(e,n,(n.subtreeFlags&8772)!==0):fn(e,n),hn=c,Xe=u}break;case 30:break;default:fn(e,n)}}function xm(e){var t=e.alternate;t!==null&&(e.alternate=null,xm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Kr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ce=null,gt=!1;function bn(e,t,n){for(n=n.child;n!==null;)Gm(e,t,n),n=n.sibling}function Gm(e,t,n){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(ys,n)}catch{}switch(n.tag){case 26:Xe||Qt(n,t),bn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Xe||Qt(n,t);var i=Ce,c=gt;Bn(n.type)&&(Ce=n.stateNode,gt=!1),bn(e,t,n),ri(n.stateNode),Ce=i,gt=c;break;case 5:Xe||Qt(n,t);case 6:if(i=Ce,c=gt,Ce=null,bn(e,t,n),Ce=i,gt=c,Ce!==null)if(gt)try{(Ce.nodeType===9?Ce.body:Ce.nodeName==="HTML"?Ce.ownerDocument.body:Ce).removeChild(n.stateNode)}catch(u){Ae(n,t,u)}else try{Ce.removeChild(n.stateNode)}catch(u){Ae(n,t,u)}break;case 18:Ce!==null&&(gt?(e=Ce,ph(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),cs(e)):ph(Ce,n.stateNode));break;case 4:i=Ce,c=gt,Ce=n.stateNode.containerInfo,gt=!0,bn(e,t,n),Ce=i,gt=c;break;case 0:case 11:case 14:case 15:Cn(2,n,t),Xe||Cn(4,n,t),bn(e,t,n);break;case 1:Xe||(Qt(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&gm(n,t,i)),bn(e,t,n);break;case 21:bn(e,t,n);break;case 22:Xe=(i=Xe)||n.memoizedState!==null,bn(e,t,n),Xe=i;break;default:bn(e,t,n)}}function km(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{cs(e)}catch(n){Ae(t,t.return,n)}}}function ym(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{cs(e)}catch(n){Ae(t,t.return,n)}}function rx(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new fm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new fm),t;default:throw Error(o(435,e.tag))}}function Mo(e,t){var n=rx(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var c=bx.bind(null,e,i);i.then(c,c)}})}function mt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var c=n[i],u=e,m=t,x=m;e:for(;x!==null;){switch(x.tag){case 27:if(Bn(x.type)){Ce=x.stateNode,gt=!1;break e}break;case 5:Ce=x.stateNode,gt=!1;break e;case 3:case 4:Ce=x.stateNode.containerInfo,gt=!0;break e}x=x.return}if(Ce===null)throw Error(o(160));Gm(u,m,c),Ce=null,gt=!1,u=c.alternate,u!==null&&(u.return=null),c.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vm(t,e),t=t.sibling}var Ut=null;function vm(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:mt(t,e),ht(e),i&4&&(Cn(3,e,e.return),Js(3,e),Cn(5,e,e.return));break;case 1:mt(t,e),ht(e),i&512&&(Xe||n===null||Qt(n,n.return)),i&64&&hn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var c=Ut;if(mt(t,e),ht(e),i&512&&(Xe||n===null||Qt(n,n.return)),i&4){var u=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,c=c.ownerDocument||c;t:switch(i){case"title":u=c.getElementsByTagName("title")[0],(!u||u[As]||u[$e]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=c.createElement(i),c.head.insertBefore(u,c.querySelector("head > title"))),at(u,i,n),u[$e]=e,Je(u),i=u;break e;case"link":var m=vh("link","href",c).get(i+(n.href||""));if(m){for(var x=0;x<m.length;x++)if(u=m[x],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){m.splice(x,1);break t}}u=c.createElement(i),at(u,i,n),c.head.appendChild(u);break;case"meta":if(m=vh("meta","content",c).get(i+(n.content||""))){for(x=0;x<m.length;x++)if(u=m[x],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){m.splice(x,1);break t}}u=c.createElement(i),at(u,i,n),c.head.appendChild(u);break;default:throw Error(o(468,i))}u[$e]=e,Je(u),i=u}e.stateNode=i}else Mh(c,e.type,e.stateNode);else e.stateNode=yh(c,i,e.memoizedProps);else u!==i?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,i===null?Mh(c,e.type,e.stateNode):yh(c,i,e.memoizedProps)):i===null&&e.stateNode!==null&&gc(e,e.memoizedProps,n.memoizedProps)}break;case 27:mt(t,e),ht(e),i&512&&(Xe||n===null||Qt(n,n.return)),n!==null&&i&4&&gc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(mt(t,e),ht(e),i&512&&(Xe||n===null||Qt(n,n.return)),e.flags&32){c=e.stateNode;try{wa(c,"")}catch($){Ae(e,e.return,$)}}i&4&&e.stateNode!=null&&(c=e.memoizedProps,gc(e,c,n!==null?n.memoizedProps:c)),i&1024&&(bc=!0);break;case 6:if(mt(t,e),ht(e),i&4){if(e.stateNode===null)throw Error(o(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch($){Ae(e,e.return,$)}}break;case 3:if(Ho=null,c=Ut,Ut=zo(t.containerInfo),mt(t,e),Ut=c,ht(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{cs(t.containerInfo)}catch($){Ae(e,e.return,$)}bc&&(bc=!1,Mm(e));break;case 4:i=Ut,Ut=zo(e.stateNode.containerInfo),mt(t,e),ht(e),Ut=i;break;case 12:mt(t,e),ht(e);break;case 31:mt(t,e),ht(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Mo(e,i)));break;case 13:mt(t,e),ht(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(To=xt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Mo(e,i)));break;case 22:c=e.memoizedState!==null;var v=n!==null&&n.memoizedState!==null,w=hn,L=Xe;if(hn=w||c,Xe=L||v,mt(t,e),Xe=L,hn=w,ht(e),i&8192)e:for(t=e.stateNode,t._visibility=c?t._visibility&-2:t._visibility|1,c&&(n===null||v||hn||Xe||_a(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){v=n=t;try{if(u=v.stateNode,c)m=u.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{x=v.stateNode;var U=v.memoizedProps.style,D=U!=null&&U.hasOwnProperty("display")?U.display:null;x.style.display=D==null||typeof D=="boolean"?"":(""+D).trim()}}catch($){Ae(v,v.return,$)}}}else if(t.tag===6){if(n===null){v=t;try{v.stateNode.nodeValue=c?"":v.memoizedProps}catch($){Ae(v,v.return,$)}}}else if(t.tag===18){if(n===null){v=t;try{var q=v.stateNode;c?gh(q,!0):gh(v.stateNode,!1)}catch($){Ae(v,v.return,$)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Mo(e,n))));break;case 19:mt(t,e),ht(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Mo(e,i)));break;case 30:break;case 21:break;default:mt(t,e),ht(e)}}function ht(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(hm(i)){n=i;break}i=i.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var c=n.stateNode,u=mc(e);vo(e,u,c);break;case 5:var m=n.stateNode;n.flags&32&&(wa(m,""),n.flags&=-33);var x=mc(e);vo(e,x,m);break;case 3:case 4:var v=n.stateNode.containerInfo,w=mc(e);hc(e,w,v);break;default:throw Error(o(161))}}catch(L){Ae(e,e.return,L)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Mm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function fn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)_m(e,t.alternate,t),t=t.sibling}function _a(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Cn(4,t,t.return),_a(t);break;case 1:Qt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&gm(t,t.return,n),_a(t);break;case 27:ri(t.stateNode);case 26:case 5:Qt(t,t.return),_a(t);break;case 22:t.memoizedState===null&&_a(t);break;case 30:_a(t);break;default:_a(t)}e=e.sibling}}function _n(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,c=e,u=t,m=u.flags;switch(u.tag){case 0:case 11:case 15:_n(c,u,n),Js(4,u);break;case 1:if(_n(c,u,n),i=u,c=i.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(w){Ae(i,i.return,w)}if(i=u,c=i.updateQueue,c!==null){var x=i.stateNode;try{var v=c.shared.hiddenCallbacks;if(v!==null)for(c.shared.hiddenCallbacks=null,c=0;c<v.length;c++)tg(v[c],x)}catch(w){Ae(i,i.return,w)}}n&&m&64&&pm(u),Ws(u,u.return);break;case 27:bm(u);case 26:case 5:_n(c,u,n),n&&i===null&&m&4&&mm(u),Ws(u,u.return);break;case 12:_n(c,u,n);break;case 31:_n(c,u,n),n&&m&4&&km(c,u);break;case 13:_n(c,u,n),n&&m&4&&ym(c,u);break;case 22:u.memoizedState===null&&_n(c,u,n),Ws(u,u.return);break;case 30:break;default:_n(c,u,n)}t=t.sibling}}function fc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&zs(n))}function _c(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&zs(e))}function Pt(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Am(e,t,n,i),t=t.sibling}function Am(e,t,n,i){var c=t.flags;switch(t.tag){case 0:case 11:case 15:Pt(e,t,n,i),c&2048&&Js(9,t);break;case 1:Pt(e,t,n,i);break;case 3:Pt(e,t,n,i),c&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&zs(e)));break;case 12:if(c&2048){Pt(e,t,n,i),e=t.stateNode;try{var u=t.memoizedProps,m=u.id,x=u.onPostCommit;typeof x=="function"&&x(m,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){Ae(t,t.return,v)}}else Pt(e,t,n,i);break;case 31:Pt(e,t,n,i);break;case 13:Pt(e,t,n,i);break;case 23:break;case 22:u=t.stateNode,m=t.alternate,t.memoizedState!==null?u._visibility&2?Pt(e,t,n,i):$s(e,t):u._visibility&2?Pt(e,t,n,i):(u._visibility|=2,Wa(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),c&2048&&fc(m,t);break;case 24:Pt(e,t,n,i),c&2048&&_c(t.alternate,t);break;default:Pt(e,t,n,i)}}function Wa(e,t,n,i,c){for(c=c&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,m=t,x=n,v=i,w=m.flags;switch(m.tag){case 0:case 11:case 15:Wa(u,m,x,v,c),Js(8,m);break;case 23:break;case 22:var L=m.stateNode;m.memoizedState!==null?L._visibility&2?Wa(u,m,x,v,c):$s(u,m):(L._visibility|=2,Wa(u,m,x,v,c)),c&&w&2048&&fc(m.alternate,m);break;case 24:Wa(u,m,x,v,c),c&&w&2048&&_c(m.alternate,m);break;default:Wa(u,m,x,v,c)}t=t.sibling}}function $s(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,c=i.flags;switch(i.tag){case 22:$s(n,i),c&2048&&fc(i.alternate,i);break;case 24:$s(n,i),c&2048&&_c(i.alternate,i);break;default:$s(n,i)}t=t.sibling}}var ei=8192;function $a(e,t,n){if(e.subtreeFlags&ei)for(e=e.child;e!==null;)Tm(e,t,n),e=e.sibling}function Tm(e,t,n){switch(e.tag){case 26:$a(e,t,n),e.flags&ei&&e.memoizedState!==null&&Xx(n,Ut,e.memoizedState,e.memoizedProps);break;case 5:$a(e,t,n);break;case 3:case 4:var i=Ut;Ut=zo(e.stateNode.containerInfo),$a(e,t,n),Ut=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=ei,ei=16777216,$a(e,t,n),ei=i):$a(e,t,n));break;default:$a(e,t,n)}}function Sm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ti(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];We=i,jm(i,e)}Sm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Im(e),e=e.sibling}function Im(e){switch(e.tag){case 0:case 11:case 15:ti(e),e.flags&2048&&Cn(9,e,e.return);break;case 3:ti(e);break;case 12:ti(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ao(e)):ti(e);break;default:ti(e)}}function Ao(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];We=i,jm(i,e)}Sm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Cn(8,t,t.return),Ao(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ao(t));break;default:Ao(t)}e=e.sibling}}function jm(e,t){for(;We!==null;){var n=We;switch(n.tag){case 0:case 11:case 15:Cn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:zs(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,We=i;else e:for(n=e;We!==null;){i=We;var c=i.sibling,u=i.return;if(xm(i),i===n){We=null;break e}if(c!==null){c.return=u,We=c;break e}We=u}}}var lx={getCacheForType:function(e){var t=tt(Pe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return tt(Pe).controller.signal}},cx=typeof WeakMap=="function"?WeakMap:Map,ye=0,je=null,me=null,be=0,Me=0,Tt=null,qn=!1,es=!1,xc=!1,xn=0,ze=0,Rn=0,xa=0,Gc=0,St=0,ts=0,ni=null,bt=null,kc=!1,To=0,Vm=0,So=1/0,Io=null,zn=null,Ye=0,Ln=null,ns=null,Gn=0,yc=0,vc=null,Em=null,ai=0,Mc=null;function It(){return(ye&2)!==0&&be!==0?be&-be:R.T!==null?Vc():Xd()}function wm(){if(St===0)if((be&536870912)===0||xe){var e=Ci;Ci<<=1,(Ci&3932160)===0&&(Ci=262144),St=e}else St=536870912;return e=Mt.current,e!==null&&(e.flags|=32),St}function ft(e,t,n){(e===je&&(Me===2||Me===9)||e.cancelPendingCommit!==null)&&(as(e,0),Hn(e,be,St,!1)),Ms(e,n),((ye&2)===0||e!==je)&&(e===je&&((ye&2)===0&&(xa|=n),ze===4&&Hn(e,be,St,!1)),Jt(e))}function Dm(e,t,n){if((ye&6)!==0)throw Error(o(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||vs(e,t),c=i?px(e,t):Tc(e,t,!0),u=i;do{if(c===0){es&&!i&&Hn(e,t,0,!1);break}else{if(n=e.current.alternate,u&&!ux(n)){c=Tc(e,t,!1),u=!1;continue}if(c===2){if(u=t,e.errorRecoveryDisabledLanes&u)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var x=e;c=ni;var v=x.current.memoizedState.isDehydrated;if(v&&(as(x,m).flags|=256),m=Tc(x,m,!1),m!==2){if(xc&&!v){x.errorRecoveryDisabledLanes|=u,xa|=u,c=4;break e}u=bt,bt=c,u!==null&&(bt===null?bt=u:bt.push.apply(bt,u))}c=m}if(u=!1,c!==2)continue}}if(c===1){as(e,0),Hn(e,t,0,!0);break}e:{switch(i=e,u=c,u){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:Hn(i,t,St,!qn);break e;case 2:bt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(c=To+300-xt(),10<c)){if(Hn(i,t,St,!qn),Ri(i,0,!0)!==0)break e;Gn=t,i.timeoutHandle=uh(Nm.bind(null,i,n,bt,Io,kc,t,St,xa,ts,qn,u,"Throttled",-0,0),c);break e}Nm(i,n,bt,Io,kc,t,St,xa,ts,qn,u,null,-0,0)}}break}while(!0);Jt(e)}function Nm(e,t,n,i,c,u,m,x,v,w,L,U,D,q){if(e.timeoutHandle=-1,U=t.subtreeFlags,U&8192||(U&16785408)===16785408){U={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sn},Tm(t,u,U);var $=(u&62914560)===u?To-xt():(u&4194048)===u?Vm-xt():0;if($=Zx(U,$),$!==null){Gn=u,e.cancelPendingCommit=$(Bm.bind(null,e,t,u,n,i,c,m,x,v,L,U,null,D,q)),Hn(e,u,m,!w);return}}Bm(e,t,u,n,i,c,m,x,v)}function ux(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var c=n[i],u=c.getSnapshot;c=c.value;try{if(!yt(u(),c))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Hn(e,t,n,i){t&=~Gc,t&=~xa,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var c=t;0<c;){var u=31-kt(c),m=1<<u;i[u]=-1,c&=~m}n!==0&&Pd(e,n,t)}function jo(){return(ye&6)===0?(si(0),!1):!0}function Ac(){if(me!==null){if(Me===0)var e=me.return;else e=me,cn=ua=null,Ol(e),Xa=null,Hs=0,e=me;for(;e!==null;)dm(e.alternate,e),e=e.return;me=null}}function as(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Vx(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Gn=0,Ac(),je=e,me=n=rn(e.current,null),be=t,Me=0,Tt=null,qn=!1,es=vs(e,t),xc=!1,ts=St=Gc=xa=Rn=ze=0,bt=ni=null,kc=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var c=31-kt(i),u=1<<c;t|=e[c],i&=~u}return xn=t,Yi(),n}function Cm(e,t){ce=null,R.H=Zs,t===Ka||t===ao?(t=Jp(),Me=3):t===jl?(t=Jp(),Me=4):Me=t===ac?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Tt=t,me===null&&(ze=1,_o(e,Dt(t,e.current)))}function qm(){var e=Mt.current;return e===null?!0:(be&4194048)===be?Rt===null:(be&62914560)===be||(be&536870912)!==0?e===Rt:!1}function Rm(){var e=R.H;return R.H=Zs,e===null?Zs:e}function zm(){var e=R.A;return R.A=lx,e}function Vo(){ze=4,qn||(be&4194048)!==be&&Mt.current!==null||(es=!0),(Rn&134217727)===0&&(xa&134217727)===0||je===null||Hn(je,be,St,!1)}function Tc(e,t,n){var i=ye;ye|=2;var c=Rm(),u=zm();(je!==e||be!==t)&&(Io=null,as(e,t)),t=!1;var m=ze;e:do try{if(Me!==0&&me!==null){var x=me,v=Tt;switch(Me){case 8:Ac(),m=6;break e;case 3:case 2:case 9:case 6:Mt.current===null&&(t=!0);var w=Me;if(Me=0,Tt=null,ss(e,x,v,w),n&&es){m=0;break e}break;default:w=Me,Me=0,Tt=null,ss(e,x,v,w)}}dx(),m=ze;break}catch(L){Cm(e,L)}while(!0);return t&&e.shellSuspendCounter++,cn=ua=null,ye=i,R.H=c,R.A=u,me===null&&(je=null,be=0,Yi()),m}function dx(){for(;me!==null;)Lm(me)}function px(e,t){var n=ye;ye|=2;var i=Rm(),c=zm();je!==e||be!==t?(Io=null,So=xt()+500,as(e,t)):es=vs(e,t);e:do try{if(Me!==0&&me!==null){t=me;var u=Tt;t:switch(Me){case 1:Me=0,Tt=null,ss(e,t,u,1);break;case 2:case 9:if(Yp(u)){Me=0,Tt=null,Hm(t);break}t=function(){Me!==2&&Me!==9||je!==e||(Me=7),Jt(e)},u.then(t,t);break e;case 3:Me=7;break e;case 4:Me=5;break e;case 7:Yp(u)?(Me=0,Tt=null,Hm(t)):(Me=0,Tt=null,ss(e,t,u,7));break;case 5:var m=null;switch(me.tag){case 26:m=me.memoizedState;case 5:case 27:var x=me;if(m?Ah(m):x.stateNode.complete){Me=0,Tt=null;var v=x.sibling;if(v!==null)me=v;else{var w=x.return;w!==null?(me=w,Eo(w)):me=null}break t}}Me=0,Tt=null,ss(e,t,u,5);break;case 6:Me=0,Tt=null,ss(e,t,u,6);break;case 8:Ac(),ze=6;break e;default:throw Error(o(462))}}gx();break}catch(L){Cm(e,L)}while(!0);return cn=ua=null,R.H=i,R.A=c,ye=n,me!==null?0:(je=null,be=0,Yi(),ze)}function gx(){for(;me!==null&&!q_();)Lm(me)}function Lm(e){var t=cm(e.alternate,e,xn);e.memoizedProps=e.pendingProps,t===null?Eo(e):me=t}function Hm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=am(n,t,t.pendingProps,t.type,void 0,be);break;case 11:t=am(n,t,t.pendingProps,t.type.render,t.ref,be);break;case 5:Ol(t);default:dm(n,t),t=me=zp(t,xn),t=cm(n,t,xn)}e.memoizedProps=e.pendingProps,t===null?Eo(e):me=t}function ss(e,t,n,i){cn=ua=null,Ol(t),Xa=null,Hs=0;var c=t.return;try{if(tx(e,c,t,n,be)){ze=1,_o(e,Dt(n,e.current)),me=null;return}}catch(u){if(c!==null)throw me=c,u;ze=1,_o(e,Dt(n,e.current)),me=null;return}t.flags&32768?(xe||i===1?e=!0:es||(be&536870912)!==0?e=!1:(qn=e=!0,(i===2||i===9||i===3||i===6)&&(i=Mt.current,i!==null&&i.tag===13&&(i.flags|=16384))),Om(t,e)):Eo(t)}function Eo(e){var t=e;do{if((t.flags&32768)!==0){Om(t,qn);return}e=t.return;var n=sx(t.alternate,t,xn);if(n!==null){me=n;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);ze===0&&(ze=5)}function Om(e,t){do{var n=ix(e.alternate,e);if(n!==null){n.flags&=32767,me=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){me=e;return}me=e=n}while(e!==null);ze=6,me=null}function Bm(e,t,n,i,c,u,m,x,v){e.cancelPendingCommit=null;do wo();while(Ye!==0);if((ye&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(u=t.lanes|t.childLanes,u|=ml,K_(e,n,u,m,x,v),e===je&&(me=je=null,be=0),ns=t,Ln=e,Gn=n,yc=u,vc=c,Em=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,fx(Di,function(){return Xm(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=R.T,R.T=null,c=Q.p,Q.p=2,m=ye,ye|=4;try{ox(e,t,n)}finally{ye=m,Q.p=c,R.T=i}}Ye=1,Um(),Pm(),Fm()}}function Um(){if(Ye===1){Ye=0;var e=Ln,t=ns,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=R.T,R.T=null;var i=Q.p;Q.p=2;var c=ye;ye|=4;try{vm(t,e);var u=zc,m=jp(e.containerInfo),x=u.focusedElem,v=u.selectionRange;if(m!==x&&x&&x.ownerDocument&&Ip(x.ownerDocument.documentElement,x)){if(v!==null&&cl(x)){var w=v.start,L=v.end;if(L===void 0&&(L=w),"selectionStart"in x)x.selectionStart=w,x.selectionEnd=Math.min(L,x.value.length);else{var U=x.ownerDocument||document,D=U&&U.defaultView||window;if(D.getSelection){var q=D.getSelection(),$=x.textContent.length,se=Math.min(v.start,$),Ie=v.end===void 0?se:Math.min(v.end,$);!q.extend&&se>Ie&&(m=Ie,Ie=se,se=m);var j=Sp(x,se),A=Sp(x,Ie);if(j&&A&&(q.rangeCount!==1||q.anchorNode!==j.node||q.anchorOffset!==j.offset||q.focusNode!==A.node||q.focusOffset!==A.offset)){var E=U.createRange();E.setStart(j.node,j.offset),q.removeAllRanges(),se>Ie?(q.addRange(E),q.extend(A.node,A.offset)):(E.setEnd(A.node,A.offset),q.addRange(E))}}}}for(U=[],q=x;q=q.parentNode;)q.nodeType===1&&U.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof x.focus=="function"&&x.focus(),x=0;x<U.length;x++){var B=U[x];B.element.scrollLeft=B.left,B.element.scrollTop=B.top}}Po=!!Rc,zc=Rc=null}finally{ye=c,Q.p=i,R.T=n}}e.current=t,Ye=2}}function Pm(){if(Ye===2){Ye=0;var e=Ln,t=ns,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=R.T,R.T=null;var i=Q.p;Q.p=2;var c=ye;ye|=4;try{_m(e,t.alternate,t)}finally{ye=c,Q.p=i,R.T=n}}Ye=3}}function Fm(){if(Ye===4||Ye===3){Ye=0,R_();var e=Ln,t=ns,n=Gn,i=Em;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ye=5:(Ye=0,ns=Ln=null,Km(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(zn=null),Pr(n),t=t.stateNode,Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(ys,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=R.T,c=Q.p,Q.p=2,R.T=null;try{for(var u=e.onRecoverableError,m=0;m<i.length;m++){var x=i[m];u(x.value,{componentStack:x.stack})}}finally{R.T=t,Q.p=c}}(Gn&3)!==0&&wo(),Jt(e),c=e.pendingLanes,(n&261930)!==0&&(c&42)!==0?e===Mc?ai++:(ai=0,Mc=e):ai=0,si(0)}}function Km(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,zs(t)))}function wo(){return Um(),Pm(),Fm(),Xm()}function Xm(){if(Ye!==5)return!1;var e=Ln,t=yc;yc=0;var n=Pr(Gn),i=R.T,c=Q.p;try{Q.p=32>n?32:n,R.T=null,n=vc,vc=null;var u=Ln,m=Gn;if(Ye=0,ns=Ln=null,Gn=0,(ye&6)!==0)throw Error(o(331));var x=ye;if(ye|=4,Im(u.current),Am(u,u.current,m,n),ye=x,si(0,!1),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(ys,u)}catch{}return!0}finally{Q.p=c,R.T=i,Km(e,t)}}function Zm(e,t,n){t=Dt(n,t),t=nc(e.stateNode,t,2),e=wn(e,t,2),e!==null&&(Ms(e,2),Jt(e))}function Ae(e,t,n){if(e.tag===3)Zm(e,e,n);else for(;t!==null;){if(t.tag===3){Zm(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(zn===null||!zn.has(i))){e=Dt(n,e),n=Yg(2),i=wn(t,n,2),i!==null&&(Qg(n,i,t,e),Ms(i,2),Jt(i));break}}t=t.return}}function Sc(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new cx;var c=new Set;i.set(t,c)}else c=i.get(t),c===void 0&&(c=new Set,i.set(t,c));c.has(n)||(xc=!0,c.add(n),e=mx.bind(null,e,t,n),t.then(e,e))}function mx(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,je===e&&(be&n)===n&&(ze===4||ze===3&&(be&62914560)===be&&300>xt()-To?(ye&2)===0&&as(e,0):Gc|=n,ts===be&&(ts=0)),Jt(e)}function Ym(e,t){t===0&&(t=Ud()),e=ra(e,t),e!==null&&(Ms(e,t),Jt(e))}function hx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ym(e,n)}function bx(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,c=e.memoizedState;c!==null&&(n=c.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(o(314))}i!==null&&i.delete(t),Ym(e,n)}function fx(e,t){return Hr(e,t)}var Do=null,is=null,Ic=!1,No=!1,jc=!1,On=0;function Jt(e){e!==is&&e.next===null&&(is===null?Do=is=e:is=is.next=e),No=!0,Ic||(Ic=!0,xx())}function si(e,t){if(!jc&&No){jc=!0;do for(var n=!1,i=Do;i!==null;){if(e!==0){var c=i.pendingLanes;if(c===0)var u=0;else{var m=i.suspendedLanes,x=i.pingedLanes;u=(1<<31-kt(42|e)+1)-1,u&=c&~(m&~x),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,$m(i,u))}else u=be,u=Ri(i,i===je?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(u&3)===0||vs(i,u)||(n=!0,$m(i,u));i=i.next}while(n);jc=!1}}function _x(){Qm()}function Qm(){No=Ic=!1;var e=0;On!==0&&jx()&&(e=On);for(var t=xt(),n=null,i=Do;i!==null;){var c=i.next,u=Jm(i,t);u===0?(i.next=null,n===null?Do=c:n.next=c,c===null&&(is=n)):(n=i,(e!==0||(u&3)!==0)&&(No=!0)),i=c}Ye!==0&&Ye!==5||si(e),On!==0&&(On=0)}function Jm(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,c=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var m=31-kt(u),x=1<<m,v=c[m];v===-1?((x&n)===0||(x&i)!==0)&&(c[m]=F_(x,t)):v<=t&&(e.expiredLanes|=x),u&=~x}if(t=je,n=be,n=Ri(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Me===2||Me===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Or(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||vs(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Or(i),Pr(n)){case 2:case 8:n=Od;break;case 32:n=Di;break;case 268435456:n=Bd;break;default:n=Di}return i=Wm.bind(null,e),n=Hr(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Or(i),e.callbackPriority=2,e.callbackNode=null,2}function Wm(e,t){if(Ye!==0&&Ye!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(wo()&&e.callbackNode!==n)return null;var i=be;return i=Ri(e,e===je?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Dm(e,i,t),Jm(e,xt()),e.callbackNode!=null&&e.callbackNode===n?Wm.bind(null,e):null)}function $m(e,t){if(wo())return null;Dm(e,t,!0)}function xx(){Ex(function(){(ye&6)!==0?Hr(Hd,_x):Qm()})}function Vc(){if(On===0){var e=Pa;e===0&&(e=Ni,Ni<<=1,(Ni&261888)===0&&(Ni=256)),On=e}return On}function eh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Oi(""+e)}function th(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Gx(e,t,n,i,c){if(t==="submit"&&n&&n.stateNode===c){var u=eh((c[dt]||null).action),m=i.submitter;m&&(t=(t=m[dt]||null)?eh(t.formAction):m.getAttribute("formAction"),t!==null&&(u=t,m=null));var x=new Fi("action","action",null,i,c);e.push({event:x,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(On!==0){var v=m?th(c,m):new FormData(c);Ql(n,{pending:!0,data:v,method:c.method,action:u},null,v)}}else typeof u=="function"&&(x.preventDefault(),v=m?th(c,m):new FormData(c),Ql(n,{pending:!0,data:v,method:c.method,action:u},u,v))},currentTarget:c}]})}}for(var Ec=0;Ec<gl.length;Ec++){var wc=gl[Ec],kx=wc.toLowerCase(),yx=wc[0].toUpperCase()+wc.slice(1);Bt(kx,"on"+yx)}Bt(wp,"onAnimationEnd"),Bt(Dp,"onAnimationIteration"),Bt(Np,"onAnimationStart"),Bt("dblclick","onDoubleClick"),Bt("focusin","onFocus"),Bt("focusout","onBlur"),Bt(z1,"onTransitionRun"),Bt(L1,"onTransitionStart"),Bt(H1,"onTransitionCancel"),Bt(Cp,"onTransitionEnd"),Va("onMouseEnter",["mouseout","mouseover"]),Va("onMouseLeave",["mouseout","mouseover"]),Va("onPointerEnter",["pointerout","pointerover"]),Va("onPointerLeave",["pointerout","pointerover"]),aa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),aa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),aa("onBeforeInput",["compositionend","keypress","textInput","paste"]),aa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),aa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),aa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ii));function nh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],c=i.event;i=i.listeners;e:{var u=void 0;if(t)for(var m=i.length-1;0<=m;m--){var x=i[m],v=x.instance,w=x.currentTarget;if(x=x.listener,v!==u&&c.isPropagationStopped())break e;u=x,c.currentTarget=w;try{u(c)}catch(L){Zi(L)}c.currentTarget=null,u=v}else for(m=0;m<i.length;m++){if(x=i[m],v=x.instance,w=x.currentTarget,x=x.listener,v!==u&&c.isPropagationStopped())break e;u=x,c.currentTarget=w;try{u(c)}catch(L){Zi(L)}c.currentTarget=null,u=v}}}}function he(e,t){var n=t[Fr];n===void 0&&(n=t[Fr]=new Set);var i=e+"__bubble";n.has(i)||(ah(t,e,2,!1),n.add(i))}function Dc(e,t,n){var i=0;t&&(i|=4),ah(n,e,i,t)}var Co="_reactListening"+Math.random().toString(36).slice(2);function Nc(e){if(!e[Co]){e[Co]=!0,Qd.forEach(function(n){n!=="selectionchange"&&(vx.has(n)||Dc(n,!1,e),Dc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Co]||(t[Co]=!0,Dc("selectionchange",!1,t))}}function ah(e,t,n,i){switch(wh(t)){case 2:var c=Jx;break;case 8:c=Wx;break;default:c=Yc}n=c.bind(null,t,n,e),c=void 0,!el||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),i?c!==void 0?e.addEventListener(t,n,{capture:!0,passive:c}):e.addEventListener(t,n,!0):c!==void 0?e.addEventListener(t,n,{passive:c}):e.addEventListener(t,n,!1)}function Cc(e,t,n,i,c){var u=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var m=i.tag;if(m===3||m===4){var x=i.stateNode.containerInfo;if(x===c)break;if(m===4)for(m=i.return;m!==null;){var v=m.tag;if((v===3||v===4)&&m.stateNode.containerInfo===c)return;m=m.return}for(;x!==null;){if(m=Sa(x),m===null)return;if(v=m.tag,v===5||v===6||v===26||v===27){i=u=m;continue e}x=x.parentNode}}i=i.return}lp(function(){var w=u,L=Wr(n),U=[];e:{var D=qp.get(e);if(D!==void 0){var q=Fi,$=e;switch(e){case"keypress":if(Ui(n)===0)break e;case"keydown":case"keyup":q=b1;break;case"focusin":$="focus",q=sl;break;case"focusout":$="blur",q=sl;break;case"beforeblur":case"afterblur":q=sl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=s1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=x1;break;case wp:case Dp:case Np:q=r1;break;case Cp:q=k1;break;case"scroll":case"scrollend":q=n1;break;case"wheel":q=v1;break;case"copy":case"cut":case"paste":q=c1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=gp;break;case"toggle":case"beforetoggle":q=A1}var se=(t&4)!==0,Ie=!se&&(e==="scroll"||e==="scrollend"),j=se?D!==null?D+"Capture":null:D;se=[];for(var A=w,E;A!==null;){var B=A;if(E=B.stateNode,B=B.tag,B!==5&&B!==26&&B!==27||E===null||j===null||(B=Ss(A,j),B!=null&&se.push(oi(A,B,E))),Ie)break;A=A.return}0<se.length&&(D=new q(D,$,null,n,L),U.push({event:D,listeners:se}))}}if((t&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",q=e==="mouseout"||e==="pointerout",D&&n!==Jr&&($=n.relatedTarget||n.fromElement)&&(Sa($)||$[Ta]))break e;if((q||D)&&(D=L.window===L?L:(D=L.ownerDocument)?D.defaultView||D.parentWindow:window,q?($=n.relatedTarget||n.toElement,q=w,$=$?Sa($):null,$!==null&&(Ie=g($),se=$.tag,$!==Ie||se!==5&&se!==27&&se!==6)&&($=null)):(q=null,$=w),q!==$)){if(se=dp,B="onMouseLeave",j="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(se=gp,B="onPointerLeave",j="onPointerEnter",A="pointer"),Ie=q==null?D:Ts(q),E=$==null?D:Ts($),D=new se(B,A+"leave",q,n,L),D.target=Ie,D.relatedTarget=E,B=null,Sa(L)===w&&(se=new se(j,A+"enter",$,n,L),se.target=E,se.relatedTarget=Ie,B=se),Ie=B,q&&$)t:{for(se=Mx,j=q,A=$,E=0,B=j;B;B=se(B))E++;B=0;for(var ae=A;ae;ae=se(ae))B++;for(;0<E-B;)j=se(j),E--;for(;0<B-E;)A=se(A),B--;for(;E--;){if(j===A||A!==null&&j===A.alternate){se=j;break t}j=se(j),A=se(A)}se=null}else se=null;q!==null&&sh(U,D,q,se,!1),$!==null&&Ie!==null&&sh(U,Ie,$,se,!0)}}e:{if(D=w?Ts(w):window,q=D.nodeName&&D.nodeName.toLowerCase(),q==="select"||q==="input"&&D.type==="file")var Ge=kp;else if(xp(D))if(yp)Ge=C1;else{Ge=D1;var ne=w1}else q=D.nodeName,!q||q.toLowerCase()!=="input"||D.type!=="checkbox"&&D.type!=="radio"?w&&Qr(w.elementType)&&(Ge=kp):Ge=N1;if(Ge&&(Ge=Ge(e,w))){Gp(U,Ge,n,L);break e}ne&&ne(e,D,w),e==="focusout"&&w&&D.type==="number"&&w.memoizedProps.value!=null&&Yr(D,"number",D.value)}switch(ne=w?Ts(w):window,e){case"focusin":(xp(ne)||ne.contentEditable==="true")&&(qa=ne,ul=w,Cs=null);break;case"focusout":Cs=ul=qa=null;break;case"mousedown":dl=!0;break;case"contextmenu":case"mouseup":case"dragend":dl=!1,Vp(U,n,L);break;case"selectionchange":if(R1)break;case"keydown":case"keyup":Vp(U,n,L)}var de;if(ol)e:{switch(e){case"compositionstart":var fe="onCompositionStart";break e;case"compositionend":fe="onCompositionEnd";break e;case"compositionupdate":fe="onCompositionUpdate";break e}fe=void 0}else Ca?fp(e,n)&&(fe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(fe="onCompositionStart");fe&&(mp&&n.locale!=="ko"&&(Ca||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&Ca&&(de=cp()):(An=L,tl="value"in An?An.value:An.textContent,Ca=!0)),ne=qo(w,fe),0<ne.length&&(fe=new pp(fe,e,null,n,L),U.push({event:fe,listeners:ne}),de?fe.data=de:(de=_p(n),de!==null&&(fe.data=de)))),(de=S1?I1(e,n):j1(e,n))&&(fe=qo(w,"onBeforeInput"),0<fe.length&&(ne=new pp("onBeforeInput","beforeinput",null,n,L),U.push({event:ne,listeners:fe}),ne.data=de)),Gx(U,e,w,n,L)}nh(U,t)})}function oi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qo(e,t){for(var n=t+"Capture",i=[];e!==null;){var c=e,u=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||u===null||(c=Ss(e,n),c!=null&&i.unshift(oi(e,c,u)),c=Ss(e,t),c!=null&&i.push(oi(e,c,u))),e.tag===3)return i;e=e.return}return[]}function Mx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function sh(e,t,n,i,c){for(var u=t._reactName,m=[];n!==null&&n!==i;){var x=n,v=x.alternate,w=x.stateNode;if(x=x.tag,v!==null&&v===i)break;x!==5&&x!==26&&x!==27||w===null||(v=w,c?(w=Ss(n,u),w!=null&&m.unshift(oi(n,w,v))):c||(w=Ss(n,u),w!=null&&m.push(oi(n,w,v)))),n=n.return}m.length!==0&&e.push({event:t,listeners:m})}var Ax=/\r\n?/g,Tx=/\u0000|\uFFFD/g;function ih(e){return(typeof e=="string"?e:""+e).replace(Ax,`
`).replace(Tx,"")}function oh(e,t){return t=ih(t),ih(e)===t}function Se(e,t,n,i,c,u){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||wa(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&wa(e,""+i);break;case"className":Li(e,"class",i);break;case"tabIndex":Li(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Li(e,n,i);break;case"style":op(e,i,u);break;case"data":if(t!=="object"){Li(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Oi(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(t!=="input"&&Se(e,t,"name",c.name,c,null),Se(e,t,"formEncType",c.formEncType,c,null),Se(e,t,"formMethod",c.formMethod,c,null),Se(e,t,"formTarget",c.formTarget,c,null)):(Se(e,t,"encType",c.encType,c,null),Se(e,t,"method",c.method,c,null),Se(e,t,"target",c.target,c,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Oi(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=sn);break;case"onScroll":i!=null&&he("scroll",e);break;case"onScrollEnd":i!=null&&he("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(c.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Oi(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":he("beforetoggle",e),he("toggle",e),zi(e,"popover",i);break;case"xlinkActuate":an(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":an(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":an(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":an(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":an(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":an(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":an(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":an(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":an(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":zi(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=e1.get(n)||n,zi(e,n,i))}}function qc(e,t,n,i,c,u){switch(n){case"style":op(e,i,u);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(c.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof i=="string"?wa(e,i):(typeof i=="number"||typeof i=="bigint")&&wa(e,""+i);break;case"onScroll":i!=null&&he("scroll",e);break;case"onScrollEnd":i!=null&&he("scrollend",e);break;case"onClick":i!=null&&(e.onclick=sn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Jd.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(c=n.endsWith("Capture"),t=n.slice(2,c?n.length-7:void 0),u=e[dt]||null,u=u!=null?u[n]:null,typeof u=="function"&&e.removeEventListener(t,u,c),typeof i=="function")){typeof u!="function"&&u!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,c);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):zi(e,n,i)}}}function at(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":he("error",e),he("load",e);var i=!1,c=!1,u;for(u in n)if(n.hasOwnProperty(u)){var m=n[u];if(m!=null)switch(u){case"src":i=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Se(e,t,u,m,n,null)}}c&&Se(e,t,"srcSet",n.srcSet,n,null),i&&Se(e,t,"src",n.src,n,null);return;case"input":he("invalid",e);var x=u=m=c=null,v=null,w=null;for(i in n)if(n.hasOwnProperty(i)){var L=n[i];if(L!=null)switch(i){case"name":c=L;break;case"type":m=L;break;case"checked":v=L;break;case"defaultChecked":w=L;break;case"value":u=L;break;case"defaultValue":x=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(o(137,t));break;default:Se(e,t,i,L,n,null)}}np(e,u,x,v,w,m,c,!1);return;case"select":he("invalid",e),i=m=u=null;for(c in n)if(n.hasOwnProperty(c)&&(x=n[c],x!=null))switch(c){case"value":u=x;break;case"defaultValue":m=x;break;case"multiple":i=x;default:Se(e,t,c,x,n,null)}t=u,n=m,e.multiple=!!i,t!=null?Ea(e,!!i,t,!1):n!=null&&Ea(e,!!i,n,!0);return;case"textarea":he("invalid",e),u=c=i=null;for(m in n)if(n.hasOwnProperty(m)&&(x=n[m],x!=null))switch(m){case"value":i=x;break;case"defaultValue":c=x;break;case"children":u=x;break;case"dangerouslySetInnerHTML":if(x!=null)throw Error(o(91));break;default:Se(e,t,m,x,n,null)}sp(e,i,c,u);return;case"option":for(v in n)if(n.hasOwnProperty(v)&&(i=n[v],i!=null))switch(v){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Se(e,t,v,i,n,null)}return;case"dialog":he("beforetoggle",e),he("toggle",e),he("cancel",e),he("close",e);break;case"iframe":case"object":he("load",e);break;case"video":case"audio":for(i=0;i<ii.length;i++)he(ii[i],e);break;case"image":he("error",e),he("load",e);break;case"details":he("toggle",e);break;case"embed":case"source":case"link":he("error",e),he("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in n)if(n.hasOwnProperty(w)&&(i=n[w],i!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Se(e,t,w,i,n,null)}return;default:if(Qr(t)){for(L in n)n.hasOwnProperty(L)&&(i=n[L],i!==void 0&&qc(e,t,L,i,n,void 0));return}}for(x in n)n.hasOwnProperty(x)&&(i=n[x],i!=null&&Se(e,t,x,i,n,null))}function Sx(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,u=null,m=null,x=null,v=null,w=null,L=null;for(q in n){var U=n[q];if(n.hasOwnProperty(q)&&U!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":v=U;default:i.hasOwnProperty(q)||Se(e,t,q,null,i,U)}}for(var D in i){var q=i[D];if(U=n[D],i.hasOwnProperty(D)&&(q!=null||U!=null))switch(D){case"type":u=q;break;case"name":c=q;break;case"checked":w=q;break;case"defaultChecked":L=q;break;case"value":m=q;break;case"defaultValue":x=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(o(137,t));break;default:q!==U&&Se(e,t,D,q,i,U)}}Zr(e,m,x,v,w,L,u,c);return;case"select":q=m=x=D=null;for(u in n)if(v=n[u],n.hasOwnProperty(u)&&v!=null)switch(u){case"value":break;case"multiple":q=v;default:i.hasOwnProperty(u)||Se(e,t,u,null,i,v)}for(c in i)if(u=i[c],v=n[c],i.hasOwnProperty(c)&&(u!=null||v!=null))switch(c){case"value":D=u;break;case"defaultValue":x=u;break;case"multiple":m=u;default:u!==v&&Se(e,t,c,u,i,v)}t=x,n=m,i=q,D!=null?Ea(e,!!n,D,!1):!!i!=!!n&&(t!=null?Ea(e,!!n,t,!0):Ea(e,!!n,n?[]:"",!1));return;case"textarea":q=D=null;for(x in n)if(c=n[x],n.hasOwnProperty(x)&&c!=null&&!i.hasOwnProperty(x))switch(x){case"value":break;case"children":break;default:Se(e,t,x,null,i,c)}for(m in i)if(c=i[m],u=n[m],i.hasOwnProperty(m)&&(c!=null||u!=null))switch(m){case"value":D=c;break;case"defaultValue":q=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(o(91));break;default:c!==u&&Se(e,t,m,c,i,u)}ap(e,D,q);return;case"option":for(var $ in n)if(D=n[$],n.hasOwnProperty($)&&D!=null&&!i.hasOwnProperty($))switch($){case"selected":e.selected=!1;break;default:Se(e,t,$,null,i,D)}for(v in i)if(D=i[v],q=n[v],i.hasOwnProperty(v)&&D!==q&&(D!=null||q!=null))switch(v){case"selected":e.selected=D&&typeof D!="function"&&typeof D!="symbol";break;default:Se(e,t,v,D,i,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in n)D=n[se],n.hasOwnProperty(se)&&D!=null&&!i.hasOwnProperty(se)&&Se(e,t,se,null,i,D);for(w in i)if(D=i[w],q=n[w],i.hasOwnProperty(w)&&D!==q&&(D!=null||q!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(o(137,t));break;default:Se(e,t,w,D,i,q)}return;default:if(Qr(t)){for(var Ie in n)D=n[Ie],n.hasOwnProperty(Ie)&&D!==void 0&&!i.hasOwnProperty(Ie)&&qc(e,t,Ie,void 0,i,D);for(L in i)D=i[L],q=n[L],!i.hasOwnProperty(L)||D===q||D===void 0&&q===void 0||qc(e,t,L,D,i,q);return}}for(var j in n)D=n[j],n.hasOwnProperty(j)&&D!=null&&!i.hasOwnProperty(j)&&Se(e,t,j,null,i,D);for(U in i)D=i[U],q=n[U],!i.hasOwnProperty(U)||D===q||D==null&&q==null||Se(e,t,U,D,i,q)}function rh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ix(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var c=n[i],u=c.transferSize,m=c.initiatorType,x=c.duration;if(u&&x&&rh(m)){for(m=0,x=c.responseEnd,i+=1;i<n.length;i++){var v=n[i],w=v.startTime;if(w>x)break;var L=v.transferSize,U=v.initiatorType;L&&rh(U)&&(v=v.responseEnd,m+=L*(v<x?1:(x-w)/(v-w)))}if(--i,t+=8*(u+m)/(c.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Rc=null,zc=null;function Ro(e){return e.nodeType===9?e:e.ownerDocument}function lh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ch(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Lc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hc=null;function jx(){var e=window.event;return e&&e.type==="popstate"?e===Hc?!1:(Hc=e,!0):(Hc=null,!1)}var uh=typeof setTimeout=="function"?setTimeout:void 0,Vx=typeof clearTimeout=="function"?clearTimeout:void 0,dh=typeof Promise=="function"?Promise:void 0,Ex=typeof queueMicrotask=="function"?queueMicrotask:typeof dh<"u"?function(e){return dh.resolve(null).then(e).catch(wx)}:uh;function wx(e){setTimeout(function(){throw e})}function Bn(e){return e==="head"}function ph(e,t){var n=t,i=0;do{var c=n.nextSibling;if(e.removeChild(n),c&&c.nodeType===8)if(n=c.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(c),cs(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")ri(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,ri(n);for(var u=n.firstChild;u;){var m=u.nextSibling,x=u.nodeName;u[As]||x==="SCRIPT"||x==="STYLE"||x==="LINK"&&u.rel.toLowerCase()==="stylesheet"||n.removeChild(u),u=m}}else n==="body"&&ri(e.ownerDocument.body);n=c}while(n);cs(t)}function gh(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Oc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Oc(n),Kr(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Dx(e,t,n,i){for(;e.nodeType===1;){var c=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[As])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=zt(e.nextSibling),e===null)break}return null}function Nx(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=zt(e.nextSibling),e===null))return null;return e}function mh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=zt(e.nextSibling),e===null))return null;return e}function Bc(e){return e.data==="$?"||e.data==="$~"}function Uc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Cx(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Pc=null;function hh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return zt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function bh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function fh(e,t,n){switch(t=Ro(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function ri(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Kr(e)}var Lt=new Map,_h=new Set;function zo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var kn=Q.d;Q.d={f:qx,r:Rx,D:zx,C:Lx,L:Hx,m:Ox,X:Ux,S:Bx,M:Px};function qx(){var e=kn.f(),t=jo();return e||t}function Rx(e){var t=Ia(e);t!==null&&t.tag===5&&t.type==="form"?Cg(t):kn.r(e)}var os=typeof document>"u"?null:document;function xh(e,t,n){var i=os;if(i&&typeof t=="string"&&t){var c=Et(t);c='link[rel="'+e+'"][href="'+c+'"]',typeof n=="string"&&(c+='[crossorigin="'+n+'"]'),_h.has(c)||(_h.add(c),e={rel:e,crossOrigin:n,href:t},i.querySelector(c)===null&&(t=i.createElement("link"),at(t,"link",e),Je(t),i.head.appendChild(t)))}}function zx(e){kn.D(e),xh("dns-prefetch",e,null)}function Lx(e,t){kn.C(e,t),xh("preconnect",e,t)}function Hx(e,t,n){kn.L(e,t,n);var i=os;if(i&&e&&t){var c='link[rel="preload"][as="'+Et(t)+'"]';t==="image"&&n&&n.imageSrcSet?(c+='[imagesrcset="'+Et(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(c+='[imagesizes="'+Et(n.imageSizes)+'"]')):c+='[href="'+Et(e)+'"]';var u=c;switch(t){case"style":u=rs(e);break;case"script":u=ls(e)}Lt.has(u)||(e=G({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Lt.set(u,e),i.querySelector(c)!==null||t==="style"&&i.querySelector(li(u))||t==="script"&&i.querySelector(ci(u))||(t=i.createElement("link"),at(t,"link",e),Je(t),i.head.appendChild(t)))}}function Ox(e,t){kn.m(e,t);var n=os;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",c='link[rel="modulepreload"][as="'+Et(i)+'"][href="'+Et(e)+'"]',u=c;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=ls(e)}if(!Lt.has(u)&&(e=G({rel:"modulepreload",href:e},t),Lt.set(u,e),n.querySelector(c)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ci(u)))return}i=n.createElement("link"),at(i,"link",e),Je(i),n.head.appendChild(i)}}}function Bx(e,t,n){kn.S(e,t,n);var i=os;if(i&&e){var c=ja(i).hoistableStyles,u=rs(e);t=t||"default";var m=c.get(u);if(!m){var x={loading:0,preload:null};if(m=i.querySelector(li(u)))x.loading=5;else{e=G({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Lt.get(u))&&Fc(e,n);var v=m=i.createElement("link");Je(v),at(v,"link",e),v._p=new Promise(function(w,L){v.onload=w,v.onerror=L}),v.addEventListener("load",function(){x.loading|=1}),v.addEventListener("error",function(){x.loading|=2}),x.loading|=4,Lo(m,t,i)}m={type:"stylesheet",instance:m,count:1,state:x},c.set(u,m)}}}function Ux(e,t){kn.X(e,t);var n=os;if(n&&e){var i=ja(n).hoistableScripts,c=ls(e),u=i.get(c);u||(u=n.querySelector(ci(c)),u||(e=G({src:e,async:!0},t),(t=Lt.get(c))&&Kc(e,t),u=n.createElement("script"),Je(u),at(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(c,u))}}function Px(e,t){kn.M(e,t);var n=os;if(n&&e){var i=ja(n).hoistableScripts,c=ls(e),u=i.get(c);u||(u=n.querySelector(ci(c)),u||(e=G({src:e,async:!0,type:"module"},t),(t=Lt.get(c))&&Kc(e,t),u=n.createElement("script"),Je(u),at(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(c,u))}}function Gh(e,t,n,i){var c=(c=ge.current)?zo(c):null;if(!c)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=rs(n.href),n=ja(c).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=rs(n.href);var u=ja(c).hoistableStyles,m=u.get(e);if(m||(c=c.ownerDocument||c,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,m),(u=c.querySelector(li(e)))&&!u._p&&(m.instance=u,m.state.loading=5),Lt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Lt.set(e,n),u||Fx(c,e,n,m.state))),t&&i===null)throw Error(o(528,""));return m}if(t&&i!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ls(n),n=ja(c).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function rs(e){return'href="'+Et(e)+'"'}function li(e){return'link[rel="stylesheet"]['+e+"]"}function kh(e){return G({},e,{"data-precedence":e.precedence,precedence:null})}function Fx(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),at(t,"link",n),Je(t),e.head.appendChild(t))}function ls(e){return'[src="'+Et(e)+'"]'}function ci(e){return"script[async]"+e}function yh(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Et(n.href)+'"]');if(i)return t.instance=i,Je(i),i;var c=G({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Je(i),at(i,"style",c),Lo(i,n.precedence,e),t.instance=i;case"stylesheet":c=rs(n.href);var u=e.querySelector(li(c));if(u)return t.state.loading|=4,t.instance=u,Je(u),u;i=kh(n),(c=Lt.get(c))&&Fc(i,c),u=(e.ownerDocument||e).createElement("link"),Je(u);var m=u;return m._p=new Promise(function(x,v){m.onload=x,m.onerror=v}),at(u,"link",i),t.state.loading|=4,Lo(u,n.precedence,e),t.instance=u;case"script":return u=ls(n.src),(c=e.querySelector(ci(u)))?(t.instance=c,Je(c),c):(i=n,(c=Lt.get(u))&&(i=G({},n),Kc(i,c)),e=e.ownerDocument||e,c=e.createElement("script"),Je(c),at(c,"link",i),e.head.appendChild(c),t.instance=c);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Lo(i,n.precedence,e));return t.instance}function Lo(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=i.length?i[i.length-1]:null,u=c,m=0;m<i.length;m++){var x=i[m];if(x.dataset.precedence===t)u=x;else if(u!==c)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Fc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Kc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ho=null;function vh(e,t,n){if(Ho===null){var i=new Map,c=Ho=new Map;c.set(n,i)}else c=Ho,i=c.get(n),i||(i=new Map,c.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),c=0;c<n.length;c++){var u=n[c];if(!(u[As]||u[$e]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var m=u.getAttribute(t)||"";m=e+m;var x=i.get(m);x?x.push(u):i.set(m,[u])}}return i}function Mh(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Kx(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Ah(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Xx(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=rs(i.href),u=t.querySelector(li(c));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Oo.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=u,Je(u);return}u=t.ownerDocument||t,i=kh(i),(c=Lt.get(c))&&Fc(i,c),u=u.createElement("link"),Je(u);var m=u;m._p=new Promise(function(x,v){m.onload=x,m.onerror=v}),at(u,"link",i),n.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Oo.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Xc=0;function Zx(e,t){return e.stylesheets&&e.count===0&&Uo(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Uo(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&Xc===0&&(Xc=62500*Ix());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Uo(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Xc?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(c)}}:null}function Oo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Uo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Bo=null;function Uo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Bo=new Map,t.forEach(Yx,e),Bo=null,Oo.call(e))}function Yx(e,t){if(!(t.state.loading&4)){var n=Bo.get(e);if(n)var i=n.get(null);else{n=new Map,Bo.set(e,n);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<c.length;u++){var m=c[u];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(n.set(m.dataset.precedence,m),i=m)}i&&n.set(null,i)}c=t.instance,m=c.getAttribute("data-precedence"),u=n.get(m)||i,u===i&&n.set(null,c),n.set(m,c),this.count++,i=Oo.bind(this),c.addEventListener("load",i),c.addEventListener("error",i),u?u.parentNode.insertBefore(c,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),t.state.loading|=4}}var ui={$$typeof:z,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function Qx(e,t,n,i,c,u,m,x,v){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Br(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Br(0),this.hiddenUpdates=Br(null),this.identifierPrefix=i,this.onUncaughtError=c,this.onCaughtError=u,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function Th(e,t,n,i,c,u,m,x,v,w,L,U){return e=new Qx(e,t,n,m,v,w,L,U,x),t=1,u===!0&&(t|=24),u=vt(3,null,null,t),e.current=u,u.stateNode=e,t=Tl(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:i,isDehydrated:n,cache:t},Vl(u),e}function Sh(e){return e?(e=La,e):La}function Ih(e,t,n,i,c,u){c=Sh(c),i.context===null?i.context=c:i.pendingContext=c,i=En(t),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=wn(e,i,t),n!==null&&(ft(n,e,t),Bs(n,e,t))}function jh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Zc(e,t){jh(e,t),(e=e.alternate)&&jh(e,t)}function Vh(e){if(e.tag===13||e.tag===31){var t=ra(e,67108864);t!==null&&ft(t,e,67108864),Zc(e,67108864)}}function Eh(e){if(e.tag===13||e.tag===31){var t=It();t=Ur(t);var n=ra(e,t);n!==null&&ft(n,e,t),Zc(e,t)}}var Po=!0;function Jx(e,t,n,i){var c=R.T;R.T=null;var u=Q.p;try{Q.p=2,Yc(e,t,n,i)}finally{Q.p=u,R.T=c}}function Wx(e,t,n,i){var c=R.T;R.T=null;var u=Q.p;try{Q.p=8,Yc(e,t,n,i)}finally{Q.p=u,R.T=c}}function Yc(e,t,n,i){if(Po){var c=Qc(i);if(c===null)Cc(e,t,i,Fo,n),Dh(e,i);else if(eG(c,e,t,n,i))i.stopPropagation();else if(Dh(e,i),t&4&&-1<$x.indexOf(e)){for(;c!==null;){var u=Ia(c);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var m=na(u.pendingLanes);if(m!==0){var x=u;for(x.pendingLanes|=2,x.entangledLanes|=2;m;){var v=1<<31-kt(m);x.entanglements[1]|=v,m&=~v}Jt(u),(ye&6)===0&&(So=xt()+500,si(0))}}break;case 31:case 13:x=ra(u,2),x!==null&&ft(x,u,2),jo(),Zc(u,2)}if(u=Qc(i),u===null&&Cc(e,t,i,Fo,n),u===c)break;c=u}c!==null&&i.stopPropagation()}else Cc(e,t,i,null,n)}}function Qc(e){return e=Wr(e),Jc(e)}var Fo=null;function Jc(e){if(Fo=null,e=Sa(e),e!==null){var t=g(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===31){if(e=b(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Fo=e,null}function wh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(z_()){case Hd:return 2;case Od:return 8;case Di:case L_:return 32;case Bd:return 268435456;default:return 32}default:return 32}}var Wc=!1,Un=null,Pn=null,Fn=null,di=new Map,pi=new Map,Kn=[],$x="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Dh(e,t){switch(e){case"focusin":case"focusout":Un=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":Fn=null;break;case"pointerover":case"pointerout":di.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":pi.delete(t.pointerId)}}function gi(e,t,n,i,c,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:u,targetContainers:[c]},t!==null&&(t=Ia(t),t!==null&&Vh(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function eG(e,t,n,i,c){switch(t){case"focusin":return Un=gi(Un,e,t,n,i,c),!0;case"dragenter":return Pn=gi(Pn,e,t,n,i,c),!0;case"mouseover":return Fn=gi(Fn,e,t,n,i,c),!0;case"pointerover":var u=c.pointerId;return di.set(u,gi(di.get(u)||null,e,t,n,i,c)),!0;case"gotpointercapture":return u=c.pointerId,pi.set(u,gi(pi.get(u)||null,e,t,n,i,c)),!0}return!1}function Nh(e){var t=Sa(e.target);if(t!==null){var n=g(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,Zd(e.priority,function(){Eh(n)});return}}else if(t===31){if(t=b(n),t!==null){e.blockedOn=t,Zd(e.priority,function(){Eh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ko(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qc(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Jr=i,n.target.dispatchEvent(i),Jr=null}else return t=Ia(n),t!==null&&Vh(t),e.blockedOn=n,!1;t.shift()}return!0}function Ch(e,t,n){Ko(e)&&n.delete(t)}function tG(){Wc=!1,Un!==null&&Ko(Un)&&(Un=null),Pn!==null&&Ko(Pn)&&(Pn=null),Fn!==null&&Ko(Fn)&&(Fn=null),di.forEach(Ch),pi.forEach(Ch)}function Xo(e,t){e.blockedOn===t&&(e.blockedOn=null,Wc||(Wc=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,tG)))}var Zo=null;function qh(e){Zo!==e&&(Zo=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Zo===e&&(Zo=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],c=e[t+2];if(typeof i!="function"){if(Jc(i||n)===null)continue;break}var u=Ia(n);u!==null&&(e.splice(t,3),t-=3,Ql(u,{pending:!0,data:c,method:n.method,action:i},i,c))}}))}function cs(e){function t(v){return Xo(v,e)}Un!==null&&Xo(Un,e),Pn!==null&&Xo(Pn,e),Fn!==null&&Xo(Fn,e),di.forEach(t),pi.forEach(t);for(var n=0;n<Kn.length;n++){var i=Kn[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Kn.length&&(n=Kn[0],n.blockedOn===null);)Nh(n),n.blockedOn===null&&Kn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var c=n[i],u=n[i+1],m=c[dt]||null;if(typeof u=="function")m||qh(n);else if(m){var x=null;if(u&&u.hasAttribute("formAction")){if(c=u,m=u[dt]||null)x=m.formAction;else if(Jc(c)!==null)continue}else x=m.action;typeof x=="function"?n[i+1]=x:(n.splice(i,3),i-=3),qh(n)}}}function Rh(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(m){return c=m})},focusReset:"manual",scroll:"manual"})}function t(){c!==null&&(c(),c=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),c!==null&&(c(),c=null)}}}function $c(e){this._internalRoot=e}Yo.prototype.render=$c.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,i=It();Ih(n,i,e,t,null,null)},Yo.prototype.unmount=$c.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ih(e.current,2,null,e,null,null),jo(),t[Ta]=null}};function Yo(e){this._internalRoot=e}Yo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Xd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Kn.length&&t!==0&&t<Kn[n].priority;n++);Kn.splice(n,0,e),n===0&&Nh(e)}};var zh=s.version;if(zh!=="19.2.7")throw Error(o(527,zh,"19.2.7"));Q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=h(t),e=e!==null?f(e):null,e=e===null?null:e.stateNode,e};var nG={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qo.isDisabled&&Qo.supportsFiber)try{ys=Qo.inject(nG),Gt=Qo}catch{}}return hi.createRoot=function(e,t){if(!d(e))throw Error(o(299));var n=!1,i="",c=Fg,u=Kg,m=Xg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(c=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError)),t=Th(e,1,!1,null,null,n,i,null,c,u,m,Rh),e[Ta]=t.current,Nc(e),new $c(t)},hi.hydrateRoot=function(e,t,n){if(!d(e))throw Error(o(299));var i=!1,c="",u=Fg,m=Kg,x=Xg,v=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(c=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(m=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError),n.formState!==void 0&&(v=n.formState)),t=Th(e,1,!0,t,n??null,i,c,v,u,m,x,Rh),t.context=Sh(null),n=t.current,i=It(),i=Ur(i),c=En(i),c.callback=null,wn(n,c,i),n=i,t.current.lanes=n,Ms(t,n),Jt(t),e[Ta]=t.current,Nc(e),new Yo(t)},hi.version="19.2.7",hi}var Zh;function gG(){if(Zh)return nu.exports;Zh=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(s){console.error(s)}}return a(),nu.exports=pG(),nu.exports}var mG=gG();/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hG=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),bG=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,r,o)=>o?o.toUpperCase():r.toLowerCase()),Yh=a=>{const s=bG(a);return s.charAt(0).toUpperCase()+s.slice(1)},qf=(...a)=>a.filter((s,r,o)=>!!s&&s.trim()!==""&&o.indexOf(s)===r).join(" ").trim(),fG=a=>{for(const s in a)if(s.startsWith("aria-")||s==="role"||s==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _G={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xG=O.forwardRef(({color:a="currentColor",size:s=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:d="",children:g,iconNode:p,...b},_)=>O.createElement("svg",{ref:_,..._G,width:s,height:s,stroke:a,strokeWidth:o?Number(r)*24/Number(s):r,className:qf("lucide",d),...!g&&!fG(b)&&{"aria-hidden":"true"},...b},[...p.map(([h,f])=>O.createElement(h,f)),...Array.isArray(g)?g:[g]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=(a,s)=>{const r=O.forwardRef(({className:o,...d},g)=>O.createElement(xG,{ref:g,iconNode:s,className:qf(`lucide-${hG(Yh(a))}`,`lucide-${a}`,o),...d}));return r.displayName=Yh(a),r};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GG=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],ju=oe("archive",GG);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kG=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],ou=oe("arrow-left",kG);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yG=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],br=oe("book-open",yG);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vG=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],ir=oe("calculator",vG);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MG=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],AG=oe("calendar",MG);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TG=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Vu=oe("chevron-down",TG);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SG=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Eu=oe("chevron-right",SG);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IG=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],vi=oe("circle-check",IG);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jG=[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],VG=oe("circle-play",jG);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EG=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],wG=oe("code-xml",EG);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DG=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],NG=oe("code",DG);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CG=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],wu=oe("copy",CG);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qG=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],Rf=oe("cpu",qG);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RG=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],zG=oe("credit-card",RG);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LG=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],od=oe("download",LG);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HG=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Yn=oe("external-link",HG);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OG=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],BG=oe("eye",OG);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UG=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],PG=oe("file-text",UG);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FG=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],Qh=oe("flask-conical",FG);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KG=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],Jh=oe("funnel",KG);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XG=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],ZG=oe("globe",XG);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YG=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Du=oe("house",YG);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QG=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],zf=oe("info",QG);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JG=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],WG=oe("lightbulb",JG);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $G=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],e2=oe("link",$G);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Lf=oe("lock",t2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],a2=oe("message-circle",n2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],Hf=oe("monitor",s2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=[["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",key:"39pd36"}],["rect",{width:"8",height:"4",x:"10",y:"6",rx:"1",key:"aywv1n"}]],rd=oe("newspaper",i2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],Of=oe("palette",o2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],l2=oe("play",r2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]],u2=oe("scale",c2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],fr=oe("search",d2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],Wh=oe("settings-2",p2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],Bf=oe("shield-alert",g2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Uf=oe("shield-check",m2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],_i=oe("shopping-bag",h2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],ld=oe("smartphone",b2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Pf=oe("sparkles",f2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]],x2=oe("table",_2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],$h=oe("terminal",G2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Ff=oe("triangle-alert",k2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],_r=oe("users",y2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],eb=oe("x",v2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],or=oe("youtube",M2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],T2=oe("zap",A2);/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const ru=[{name:"Inicio",path:"/",key:"nav.inicio"},{name:"Novedades",path:"/novedades",key:"nav.novedades"},{name:"Servicios",path:"/servicios",key:"nav.servicios"},{name:"Evo",path:"/evo",key:"nav.evo"},{name:"Otros códigos",path:"/otros",key:"nav.otros"},{name:"Guía",path:"/guia",key:"nav.guia"},{name:"Tutoriales",path:"/tutoriales",key:"nav.tutoriales"},{name:"Descargas",path:"/descargas",key:"nav.descargas"}],xr=[{id:"a",name:"Cibernético",shortName:"CYBER",icon:"Cpu",image:"https://github.com/luqueSmith/MGG/blob/main/img/cyber.png?raw=true"},{id:"b",name:"Zombi",shortName:"ZOMBI",icon:"Skull",image:"https://github.com/luqueSmith/MGG/blob/main/img/necro.png?raw=true"},{id:"c",name:"Guerrero",shortName:"Sword",icon:"Sword",image:"https://github.com/luqueSmith/MGG/blob/main/img/sable.png?raw=true"},{id:"d",name:"Bestia",shortName:"ZOOMORFO",icon:"PawPrint",image:"https://github.com/luqueSmith/MGG/blob/main/img/zomorfo.png?raw=true"},{id:"e",name:"Galáctico",shortName:"GALAXY",icon:"Star",image:"https://github.com/luqueSmith/MGG/blob/main/img/galactico.png?raw=true"},{id:"f",name:"Mítico",shortName:"MYTHIC",icon:"FlaskConical",image:"https://github.com/luqueSmith/MGG/blob/main/img/mitico.png?raw=true"}],ds={a:["#38bdf8","#2563eb"],b:["#a855f7","#6d28d9"],c:["#f59e0b","#d97706"],d:["#22c55e","#15803d"],e:["#06b6d4","#0f766e"],f:["#ec4899","#be185d"],n:["#64748b","#334155"]},lu=[{id:"offer_1",nombre:"54 Hornos 1M de Oro",nombreEn:"54 Furnaces 1M Gold",precio:37,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/1MdeOro.png?raw=true",descripcion:"Oferta relámpago: pack de 54 hornos con 1 millón de oro directo.",descripcionEn:"Flash offer: pack of 54 furnaces with 1 million gold direct.",features:["Entrega prioritaria","Ahorro del 20%","Soporte exclusivo"],featuresEn:["Priority delivery","20% Savings","Exclusive support"],categoria:"OFFER"},{id:"offer_2",nombre:"54 Hornos 2M de Oro",nombreEn:"54 Furnaces 2M Gold",precio:48,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/2MdeOro.png?raw=true",descripcion:"Pack industrial para jugadores de alto nivel con 2 millones de oro.",descripcionEn:"Industrial pack for high-level players with 2 million gold.",features:["Capacidad máxima","Optimización de recursos","Bonus de velocidad"],featuresEn:["Maximum capacity","Resource optimization","Speed bonus"],categoria:"OFFER"},{id:"offer_3",nombre:"54 Hornos 3M de Oro",nombreEn:"54 Furnaces 3M Gold",precio:59,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/3MdeOro.png?raw=true",descripcion:"La máxima potencia disponible en el mercado actual.",descripcionEn:"The maximum power available in the current market.",features:["Máximo beneficio","Inyección instantánea","Certificado Elite"],featuresEn:["Maximum benefit","Instant injection","Elite certificate"],categoria:"OFFER"},{id:"main_1",nombre:"Horno de Oro",nombreEn:"Gold Furnace",precio:7,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/Hornos%20de%20oro.png?raw=true",descripcion:"Aceleración masiva de producción de oro.",descripcionEn:"Massive acceleration of gold production.",features:["Entrega en menos de 10 min","Soporte 24/7","Proceso guiado"],featuresEn:["Delivery in < 10 min","24/7 Support","Guided process"],categoria:"MAIN"},{id:"main_2",nombre:"Mutante",nombreEn:"Mutant",precio:2,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/mutante.png?raw=true",descripcion:"Obtención de mutantes raros según disponibilidad.",descripcionEn:"Get rare mutants depending on availability.",features:["Selección a elegir","Stats máximos","Entrega rápida"],featuresEn:["Custom selection","Max stats","Fast delivery"],categoria:"MAIN"},{id:"main_3",nombre:"Orbes Basic 6 x 10",nombreEn:"Basic Orbs 6 x 10",precio:1,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/bsic-orb6.png?raw=true",descripcion:"Pack de orbes básicos para fortalecer a tu equipo.",descripcionEn:"Basic orb pack to strengthen your team.",features:["Stock ilimitado","Precio promocional","Ideal para nuevos"],featuresEn:["Unlimited stock","Promotional price","Ideal for beginners"],categoria:"MAIN"},{id:"main_4",nombre:"1M de Oro Directo",nombreEn:"1M Direct Gold",precio:35,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/1MOro.png?raw=true",descripcion:"Paquete de moneda premium gestionado con verificación.",descripcionEn:"Premium currency package managed with verification.",features:["Proceso guiado","Entrega coordinada","Soporte manual"],featuresEn:["Guided process","Coordinated delivery","Manual support"],categoria:"MAIN"},{id:"main_5",nombre:"ORB Nivel 7 Elite",nombreEn:"ORB Level 7 Elite",precio:6,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/obrNVL7.png?raw=true",descripcion:"Orbes de alto nivel para máximo rendimiento.",descripcionEn:"High-level orbs for maximum performance.",features:["Efectos críticos","Rareza extrema","Compatibilidad total"],featuresEn:["Critical effects","Extreme rarity","Total compatibility"],categoria:"MAIN"},{id:"main_6",nombre:"Mutante Bug Platino",nombreEn:"Platinum Bug Mutant",precio:6,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/bf8515d2-211a-411c-a1d9-da10c59ff4dd.png?raw=true",descripcion:"Mutante con estética platino y habilidades especiales.",descripcionEn:"Mutant with platinum aesthetics and special abilities.",features:["Visual único","Habilidades especiales","Edición 2026"],featuresEn:["Unique visual","Special skills","2026 Edition"],categoria:"MAIN"},{id:"main_7",nombre:"100k Tarros XP",nombreEn:"100k XP Jars",precio:15,imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRWQsH6i8OPIj8DtvkxDggsiG4FfvRNj4zkA&s",descripcion:"Nivelación rápida para tu ejército de gladiadores.",descripcionEn:"Fast leveling for your gladiator army.",features:["Sube a nivel alto","Ahorro de tiempo","Fácil aplicación"],featuresEn:["Level up high","Time saving","Easy application"],categoria:"MAIN"},{id:"main_8",nombre:"100k Fichas JackPot",nombreEn:"100k Jackpot Tokens",precio:15,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/fichasjacpot.png?raw=true",descripcion:"Pack masivo de fichas para eventos y ruletas.",descripcionEn:"Massive token pack for events and roulettes.",features:["Alta recompensa","Giro automático","Uso flexible"],featuresEn:["High reward","Auto spin","Flexible use"],categoria:"MAIN"},{id:"main_9",nombre:"Expansión Laboratorio",nombreEn:"Laboratory Expansion",precio:4,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/laboratorio.png?raw=true",descripcion:"Desbloquea slots y mejoras del laboratorio.",descripcionEn:"Unlock laboratory slots and improvements.",features:["Más slots","Mejora visual","Multi-breeding"],featuresEn:["More slots","Visual improvement","Multi-breeding"],categoria:"MAIN"},{id:"main_10",nombre:"Orbe Velocidad Nivel 5",nombreEn:"Level 5 Speed Orb",precio:2,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/orbelvl5.png?raw=true",descripcion:"Potenciador de velocidad para mejorar turnos.",descripcionEn:"Speed booster to improve turns.",features:["Primer golpe","Agilidad +50%","Recarga rápida"],featuresEn:["First strike","Agility +50%","Fast recharge"],categoria:"MAIN"},{id:"main_11",nombre:"ORB Nivel ATK 6 x 10",nombreEn:"ORB ATK Level 6 x 10",precio:6,imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkvqT-WxlpjpLTxcrwKAUQmGTTv6vtrVHxkA&s",descripcion:"Pack ofensivo para maximizar DPS, Te entrego 10 orbes del paquete.",descripcionEn:"Offensive pack to maximize DPS, I deliver 10 orbs from the package.",features:["Daño puro","Críticos frecuentes","Efecto sangrado"],featuresEn:["Pure damage","Frequent crits","Bleeding effect"],categoria:"MAIN"},{id:"main_12",nombre:"BIG BOSS",nombreEn:"BIG BOSS",precio:10,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/bigboss.png?raw=true",descripcion:"Te consigo a BigBoss en tu cuenta.",descripcionEn:"I get BigBoss in your account.",features:["Resistencia temporal","Fuerza X2","Drop mejorado"],featuresEn:["Temporary resistance","2X Strength","Improved drop"],categoria:"MAIN"},{id:"other_1",nombre:"Doxeo para +51",nombreEn:"Doxxing for +51",precio:5,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/doxeo.png?raw=true",descripcion:"Saco informacion como DNI, Arbol Familiar antencedentes y etc con el numero o nombre para Peru.",descripcionEn:"I extract information like ID, Family Tree, records, etc. with number or name for Peru.",features:["Fuentes públicas","Reporte PDF","Enfoque de privacidad"],featuresEn:["Public sources","PDF Report","Privacy focused"],categoria:"OTHER"},{id:"other_2",nombre:"Desarrollo Web Next-Gen",nombreEn:"Next-Gen Web Development",precio:40,imagen:"https://www.freecodecamp.org/news/content/images/2019/09/lua_script.jpg",descripcion:"Creación de portafolios, tiendas o landing pages y etc, solo 40 soles por una web alojada en GitHub, Si te interesa una web con dominio .com dale en ver mas..",descripcionEn:"Creation of portfolios, stores or landing pages etc, only 40 soles for a website hosted on GitHub. If you are interested in a website with a .com domain click see more..",features:["UI/UX único","Optimización SEO","Host incluido","Entrega profesional"],featuresEn:["Unique UI/UX","SEO Optimization","Host included","Professional delivery"],categoria:"OTHER",saberMas:"https://webcraft-ux.github.io/webcraft/"},{id:"other_3",nombre:"Scripts Custom MGG",nombreEn:"Custom MGG Scripts",precio:15,imagen:"https://callcenters.by/images/asterisk/lua%20plugin.jpg",descripcion:"Automatizaciones personalizadas para productividad.",descripcionEn:"Custom automations for productivity.",features:["Auto-farm","Logs de actividades","Configuración guiada","Soporte"],featuresEn:["Auto-farm","Activity logs","Guided configuration","Support"],categoria:"OTHER"},{id:"other_4",nombre:"ChatGPT Premium",nombreEn:"ChatGPT Premium",precio:8,imagen:"https://spanish.entrepreneur.com/wp-content/uploads/sites/3/2024/12/1733494589-openai-chatgpt-premium-subscription-1224-g2186754261.jpg",descripcion:"Acceso premium para chatGPT barato y con descuento por cantidad.",descripcionEn:"Premium access for cheap ChatGPT with quantity discount.",features:["Asistencia rápida","Uso personal","Configuración guiada","Soporte base"],featuresEn:["Fast assistance","Personal use","Guided configuration","Basic support"],categoria:"OTHER"}],tb={Cajas:`Box Cyber	mystery_cyber	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_cyber.png
Box Necro / Undead	mystery_undead	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_undead.png
Box Saber	mystery_saber	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_saber.png
Box Zoo	mystery_zoo	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_zoo.png
Box Galactic	mystery_galactic	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_galactic.png
Box Mystic	mystery_mystic	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_mystic.png
Box Elite Cyber	mystery_elite_cyber	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_elite_cyber.png
Box Elite Saber	mystery_elite_saber	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_elite_saber.png
Box Elite Necro	mystery_elite_necro	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_elite_necro.png
Box Elite Galactic	mystery_elite_galactic	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_elite_galactic.png
Box Elite Zoo	mystery_elite_zoo	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_elite_zoo.png
Box Elite Mystic	mystery_elite_mystic	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_elite_mystic.png
Box Research 5	mystery_research_5	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_research_5.png
Box Research 6	mystery_research_6	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_research_6.png
Box Research 7	mystery_research_7	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_research_7.png
Box Research IX	mystery_research_ix	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_research_ix.png
Box Retaliate	shop_mystery_retaliate	https://s-ak.kobojo.com/mutants/assets/thumbnails/shop_mystery_retaliate.png
Box Shield	shop_mystery_shield	https://s-ak.kobojo.com/mutants/assets/thumbnails/shop_mystery_shield.png
Box Regenerate	shop_mystery_regenerate	https://s-ak.kobojo.com/mutants/assets/thumbnails/shop_mystery_regenerate.png
Box Slash	shop_mystery_slash	https://s-ak.kobojo.com/mutants/assets/thumbnails/shop_mystery_slash.png
Box Strengthen	shop_mystery_strengthen	https://s-ak.kobojo.com/mutants/assets/thumbnails/shop_mystery_strengthen.png`,Recursos:`Triple Experiencia	Charm_Xpx3_7	https://s-ak.kobojo.com/mutants/assets/thumbnails/charm_xpx3_7.png
Tickets x25	Material_Energy25	https://s-ak.kobojo.com/mutants/assets/thumbnails/material_energy25.png
Cuádruple Regeneración	Charm_Regenx4_3	https://s-ak.kobojo.com/mutants/assets/thumbnails/charm_regenx4_3.png
Ficha Reto	Material_Event_Token	https://s-ak.kobojo.com/mutants/assets/thumbnails/material_event_token.png
Tickets x5	Material_Energy5	https://s-ak.kobojo.com/mutants/assets/thumbnails/material_energy5.png
Doble Experiencia	Charm_Xpx2_3	https://s-ak.kobojo.com/mutants/assets/thumbnails/charm_xpx2_3.png
Ataques Críticos	Charm_Critical_3	https://s-ak.kobojo.com/mutants/assets/thumbnails/charm_critical_3.png
Ficha Jackpot	Material_Jackpot_Token	https://s-ak.kobojo.com/mutants/assets/thumbnails/material_jackpot_token.png
Escudo Anticrítico	Charm_Anticritical_1	https://s-ak.kobojo.com/mutants/assets/thumbnails/charm_anticritical_1.png
Ficha Reactor	Material_Gacha_Token	https://s-ak.kobojo.com/mutants/assets/thumbnails/material_gacha_token.png
Triple Experiencia	Charm_Xpx3_3	https://s-ak.kobojo.com/mutants/assets/thumbnails/charm_xpx3_3.png
Doble Regeneración	Charm_Regenx2_7	https://s-ak.kobojo.com/mutants/assets/thumbnails/charm_regenx2_7.png
Ataques Críticos	Charm_Critical_7	https://s-ak.kobojo.com/mutants/assets/thumbnails/charm_critical_7.png
Escudo Anticrítico	Charm_Anticritical_3	https://s-ak.kobojo.com/mutants/assets/thumbnails/charm_anticritical_3.png
Doble Regeneración	Charm_Regenx2_3	https://s-ak.kobojo.com/mutants/assets/thumbnails/charm_regenx2_3.png`,Orbes:`Orbe Ataque +2%	orb_basic_attack	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_attack.png
Orbe Ataque +5%	orb_basic_attack_01	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_attack_01.png
Orbe Ataque +10%	orb_basic_attack_02	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_attack_02.png
Orbe Ataque +12%	orb_basic_attack_03	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_attack_03.png
Orbe Ataque +14%	orb_basic_attack_04	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_attack_04.png
Orbe Ataque +16%	orb_basic_attack_05	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_attack_05.png
Orbe Ataque +17%	orb_basic_attack_06	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_attack_06.png
Orbe Ataque +18%	orb_basic_attack_07	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_attack_07.png
Orbe Vida +5%	orb_basic_life	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_life.png
Orbe Vida +10%	orb_basic_life_01	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_life_01.png
Orbe Vida +15%	orb_basic_life_02	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_life_02.png
Orbe Vida +20%	orb_basic_life_03	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_life_03.png
Orbe Vida +25%	orb_basic_life_04	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_life_04.png
Orbe Vida +28%	orb_basic_life_05	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_life_05.png
Orbe Vida +30%	orb_basic_life_06	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_life_06.png
Orbe Vida +35%	orb_basic_life_07	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_life_07.png
Orbe Críticos +2%	orb_basic_critical	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_critical.png
Orbe Críticos +5%	orb_basic_critical_01	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_critical_01.png
Orbe Críticos +11%	orb_basic_critical_02	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_critical_02.png
Orbe Críticos +13%	orb_basic_critical_03	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_critical_03.png
Orbe Críticos +15%	orb_basic_critical_04	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_critical_04.png
Orbe Críticos +17%	orb_basic_critical_05	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_critical_05.png
Orbe Críticos +18%	orb_basic_critical_06	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_critical_06.png
Orbe Críticos +19%	orb_basic_critical_07	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_critical_07.png
Orbe Experiencia +10%	orb_basic_xp	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_xp.png
Orbe Experiencia +40%	orb_basic_xp_01	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_xp_01.png
Orbe Experiencia +80%	orb_basic_xp_02	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_xp_02.png
Orbe Experiencia +120%	orb_basic_xp_03	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_xp_03.png
Orbe Experiencia +150%	orb_basic_xp_04	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_xp_04.png
Orbe Experiencia +200%	orb_basic_xp_05	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_xp_05.png
Orbe Experiencia +300%	orb_basic_xp_06	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_xp_06.png
Orbe Regeneración +3%	orb_basic_regenerate	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_regenerate.png
Orbe Regeneración +7%	orb_basic_regenerate_01	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_regenerate_01.png
Orbe Regeneración +15%	orb_basic_regenerate_02	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_regenerate_02.png
Orbe Regeneración +20%	orb_basic_regenerate_03	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_regenerate_03.png
Orbe Regeneración +25%	orb_basic_regenerate_04	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_regenerate_04.png
Orbe Regeneración +28%	orb_basic_regenerate_05	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_regenerate_05.png
Orbe Regeneración +30%	orb_basic_regenerate_06	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_regenerate_06.png
Orbe Respuesta +3%	orb_basic_retaliate	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_retaliate.png
Orbe Respuesta +7%	orb_basic_retaliate_01	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_retaliate_01.png
Orbe Respuesta +15%	orb_basic_retaliate_02	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_retaliate_02.png
Orbe Respuesta +17%	orb_basic_retaliate_03	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_retaliate_03.png
Orbe Respuesta +18%	orb_basic_retaliate_04	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_retaliate_04.png
Orbe Respuesta +19%	orb_basic_retaliate_05	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_retaliate_05.png
Orbe Respuesta +20%	orb_basic_retaliate_06	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_retaliate_06.png`},Kf="51906328464",cd="https://chat.whatsapp.com/DALbalnNe9N6bD4W1Wp0HM?mode=gi_t",S2=[0,50,60,65,70,75,80,85,90],Xf=[{id:"pe",name:"Perú",currency:"PEN",symbol:"S/",rate:1,exchangeRate:1,flag:"🇵🇪"},{id:"mx",name:"México",currency:"MXN",symbol:"$",rate:1,exchangeRate:5.07,flag:"🇲🇽"},{id:"es",name:"España",currency:"EUR",symbol:"€",rate:1,exchangeRate:.25,flag:"🇪🇸"},{id:"cl",name:"Chile",currency:"CLP",symbol:"$",rate:1,exchangeRate:262.23,flag:"🇨🇱"},{id:"ar",name:"Argentina",currency:"ARS",symbol:"$",rate:1,exchangeRate:408.14,flag:"🇦🇷"},{id:"ve",name:"Venezuela",currency:"VES",symbol:"Bs",rate:1,exchangeRate:150.82,flag:"🇻🇪"},{id:"co",name:"Colombia",currency:"COP",symbol:"$",rate:1,exchangeRate:1110.59,flag:"🇨🇴"},{id:"bo",name:"Bolivia",currency:"BOB",symbol:"Bs",rate:1,exchangeRate:2.02,flag:"🇧🇴"}],I2=[{name:"Western Union",logo:"https://play-lh.googleusercontent.com/2O6TfOnCMQ8aWdhcME3CwHK_od33WPBw02ZpG_lpvnwRPHfCKBlmCeaLJ_tL8oqchBg",info:"Global money transfer. Available at physical agents worldwide.",infoEs:"Envío de dinero global. Disponible en agentes físicos."},{name:"Binance",logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe9rjRtIJJM5o6xP2LqfQFFcWejwFgRA1rag&s",info:"Direct deposits via USDT (Tron Network TRC20). Fast & Secure.",infoEs:"Depósitos directos vía USDT (Red Tron TRC20)."},{name:"PayPal",logo:"https://play-lh.googleusercontent.com/iQ8f5plIFy9rrY46Q2TNRwq_8nCvh9LZVwytqMBpOEcfnIU3vTkICQ6L1-RInWS93oQg",info:"Secure international payment with card or balance.",infoEs:"Pago internacional seguro con tarjeta o saldo."},{name:"Yape",logo:"https://play-lh.googleusercontent.com/y5S3ZIz-ohg3FirlISnk3ca2yQ6cd825OpA0YK9qklc5W8MLSe0NEIEqoV-pZDvO0A8",info:"Exclusive for PERU (PEN). Immediate transfer.",infoEs:"Exclusivo para PERÚ (Soles). Transferencia inmediata."},{name:"Airtm",logo:"https://s3-eu-west-1.amazonaws.com/tpd/logos/5d6d32510d8627000132ad10/0x0.png",info:"Digital wallet recommended for Latin America.",infoEs:"Billetera digital recomendada para Latinoamérica."}],nb=["CH","LU","DK","NO","IS","US","DE","SG","IE","AU","CA","GB","ES","IT","KR","IL","CL","UY"],j2={"4.0":["CH","LU","DK","NO","IS"],"3.0":["US","DE","SG","IE","AU","CA","GB"],"2.0":["IT","KR","IL","UY"],"1.5":["BR","FR","JP"]},V2=`A00-C0R3-C0NTR0L aa_99
A027441 af_99
Abraham Lincoln af_05
Absolem df_03
Acarius ed_05
Achernar ef_13
Akai-Bot ae_10
Alfie ae_07
Altaris ca_10
Altísimo Candelabro fb_13
Amalgalmas bf_13
Amarok fc_07
Amistad Sin Limites cc_13
Ammonia Atlantica ed_12
Amo de las Llaves cf_09
An0malie da_11
Androide aa_01
Andromeda ae_08
Angry Pork ed_10
Animus de Irrealidad ee_99
Aniquilador ea_01
Anteros ca_13
Antropobot Soñador da_13
Anubis fb_03
Aplastador ab_07
Apofis be_06
Aquapunzel ef_03_silver
Aqueronte bf_11
Aracno da_02
Aran ce_07
Arcangel fa_99
Archivista Eterno ff_12
Arelvam cf_10
Armadizo de_03
Artemisa cb_06
Artista Siniestro fd_05
Asaylan da_08
Asimov a_13
Asteroide Gestalt ee_11
Astro Gummy ee_07
Astrobservador e_13
Astromago fe_03
Astrosurfista ee_01
Atlas ce_13
Aubraea Mutantula eb_11
Aullosaurio d_12
Automata a_14
Autonoraptor af_04
Avispa Diesel ad_07
Azaronimo ae_99
Azog cf_04
Azuria fe_02
B.U.N. Genio da_14
Bahamut fe_10
Ballesto cb_12
Banker fa_04
Banshee Guerrera cb_01
Barbaro c_05
Barbaroca af_03
Baron Lundi bf_01
Basilisco y Esdragon df_12_vegetal
Battle Toad cd_04
Bazzinger fa_03
Bearsikk Sikleast cd_13
Behemoth ec_02
Bestia d_01
Big Bo$$ ca_09
Bioerizo ad_06
Black I.C.E. af_14
Blender ac_08
Borrasca fc_06
Bounda af_07
Brawler db_05
Breakmaster ca_14_olympics
Bregbeam ff_10
Brick McGole ea_04
Bricodron LLK-215 ea_12
Britany bf_05
Bruja de la Peste bb_08
Bruja Malvada fb_04
Buck Maurice cc_02
Buffalor db_10
Bulldozer bd_05
Buranka fd_04
Bushi cb_02
C'thlig fe_01
Caballero Nordico cc_01
Cabloide aa_12
Calaca bf_09
Caliburn EX cf_11
Cancernia bd_02_silver
Capitan Achabe ce_10
Capitan aguila cd_12
Capitan Barbanegra cb_14
Capitan Gluglu de_07
Capitan Gorn ea_09
Capitan Mecano ac_02
Capitan Osamenta bc_02
Capitan Patriota ea_07
Capitan Paz fc_02
Capitan Perla Negra be_04
Caprika be_02_silver
Capsuladora MTZ-004 ac_13
Carcinus Gigas ad_09
Carlingger da_07
Carnero Vengador bf_03_silver
Caronte bb_05
Caronte (Halloween) bc_12
Castigo ff_02
Casto db_06
Caudillo Steam af_09
Cazador Espacial ec_05
Cazarrecompensas a_05
Centaurus ae_09
Centinela R0B-H4N aa_08
Cerbero db_01
Ceres e_03
Cernunnos dd_04
Cezanne dc_04
Challengeer ca_05
Chaman Sombra fa_05
Champicorteza bf_07
Chantecler df_08
Chocolem df_11
Chun-Lei ce_11
Ciberbabosa ae_05
Cibercroc ad_05
Cibermantico Etereo fa_12
Ciberpunk ac_05
Clerigo Oscuro bf_12
Cobrakai db_03
Colmillo Rabioso bc_11
Coloso ae_01
Comeabuelas dc_06
Commander Ender ab_04
Cooktouille bd_11
Cosmo Kong de_02
Cosmopandas de_08
Cr€$u$ ba_12
Cuervo b_04
Cupido cb_05
D'Arathomis c_13
D.A.B. ea_14
Dama del Crepusculo fb_12
Dama Harpia bd_04
Dandi oscar bc_06
Darwin de_06
Despota Negro bc_01
Deus Machina af_01
Devorador eb_03
Dezinger ac_03
Diablesa f_01
Diablo eb_99
Dimentio ef_11
Disension cb_11
Disfuncidroide ab_12
Divastator ef_10
Doctor Blaw ba_05
Doctor del Farol bb_12
Doctor Desollador bc_13
Dollbyte fe_06
Don Gamberetti cd_14
Dr. Frost fa_07
Dr. Nucleus eb_08
Dracomago fd_09
Dracus Nobilis df_01
Drall cd_08
Dreadnought ea_11
Drei, Space Corgi de_11
Drudge Zombie b_05
Drusella ab_06
Dug Dario be_08
Duplicado de Eva af_06
E.T.-Liot ee_10
ED-404 aa_10
Ejecutor ca_01
El Arquitecto ab_13
El Coleccionista bc_09
El Descolorido db_13
El Enterrador bf_10_western
El Experimento ba_04
El Fontanero ac_04
El Fosforescente bb_13
El Gringo cc_06
El Motin cb_13
El Original bd_07_soldiers
El Presentador ab_14
El Rey de Mimphys bf_06
El Rey sin Nombre ce_08
El Veneno af_10
Emperador Galactico bf_04_starwars
Emperador Helado df_13
Enano y Cerebro bd_08
Enviro 3.0 ab_11
ERR-ADI-K-Bot ca_06
Escarabot ad_01
Escuadron Rhino da_04
Espectra ec_08
Espectro de la Cripta bb_02
Espectroplasma b_14
Excaliduro ec_09
Excavalipsis ba_09
Exo Cookie de_05
Exoceleste algido fe_12
Exopez ea_03_silver
Explorador Sideral e_12
Extraterrestre e_01
Falcon ec_07
Fantasmonauta be_01
Faucesnegras bd_09
Fenec Plus Ultra da_05
Fenix fd_07
Flying Jordson ee_04
FootBot fa_08
Frankendwarf cb_10
Frankenhuahua bb_09
Freyja, Reina de los Vanir fd_14
Frostmass c_03
Gakarian eb_10
Gamallia ec_10
Gandolphus fc_01
GAR, Zombi Soberano b_13
Gargantus dc_03_gothic
Garlog eb_06_elements
Garuda a_03
Gelatina Purulenta be_12
Geminium ce_02_silver
General Caos ca_03
General Terracota ca_12
Generalisimo Chocoleon IV fc_12
Genimal df_99
Genshiryoku de_04
Geomega ff_07
George Washington bc_04
Gerard Steelgarden ff_11
Giganto-Moai ae_14
Gladiadog cd_06
Gladiador c_14
Globomono dd_07
Gloton bb_06
Glubber ff_05
Golem de Epocas af_13
Golemagnus ee_08
Goliat aa_02
Gorthaur el Cruel fc_09_fantasy
Gozer fb_08
Gran Gusano de los Tuneles db_12
Gran Señor de las Tumbas ab_08
Grumpy Claus ab_09
Guardia Men'ki cd_10
Guardian Galactico ce_03
Guerrero c_01
Guerrero Debil c_02
Gwenn df_10
H.U.M.A.N. aa_03
H.U.N.T.3.R aa_09
H0ud1n1 af_08
Hada Machete cf_03
Hadeath fb_09
Haggis cd_03
Hardcorius fb_05
Hawkeye da_10
Hechicera fb_06
Hefesto fc_10
Heimdall af_11
Hekantocheiros ec_13
Helicoide Boreal fa_13
Helidron KxT-271 ae_13
Hellsaw ba_10
Hercules aa_06
Heredero de los 5 anillos cf_12
Hidrira ed_14
Hielo Patinadora Yria cf_14
Hijo de la Tormenta cf_13
Hipopotanque ad_10
Hog the Ripper cd_05
Honey Bunny cd_01
Horax db_09
Horus fd_02
Huesamblaje b_12
Humanoide Perfido ac_01
Hypnos ab_02
Infinito Supermasivo de_14
Ingeniero fe_99
Interceptrix ca_02
Invadron ae_03
Invocador f_12
Ishi no Ōkami fd_11
Ivory Hanzo fd_03_japan
Jack O'Lantern b_03
Jane Saw cb_09
Jhingal ee_05
Juan Hielo cd_07
K'yu T'ypaï ef_14
Kaiju Kitty dd_01
Kal Wayne ef_07
Kameo dd_10
King Lulu bc_10
Kitty Ranger ad_08
Kolossus ce_99
Kraken ef_05
Krampus dc_10
Krunk ea_06
Kudamono fc_08
Kung Chow fd_06
La Anárquica ba_13
La Locura Reptante db_14
La Olvidada bb_11
La Parca fb_01
Lady Libertad ea_08
Lampyrion Solar dd_12
Lancelot cc_09
Lapin Zombie bd_14
Lara cc_04
Las Moiras fb_07
Leohart dc_02_silver
Leonidas cb_04
Lepidoptech ad_12
Leprechaun f_04
Leviatan de_12
Libraro ae_02_silver
Lily fa_06_movies
Liquidador ff_09
Litominero Stellariano ec_12
Llama Sensei dd_13
Loco de la Motosierra bc_05
Lord Blood bb_01
Louis XVI db_04
Mad Mike de_10
Madre de los Dragones df_05
Maestro Oida ee_03
Maestro Shinzo dc_09
Maestro Splitter dd_02
Mago f_14
Mago de la Singularidad ef_99
Mago de las Nieves f_03
Mago Ryzafredd ef_09
Mago Tetrico bf_02
Majin Zam fe_08
Makino ca_08
Malvatron ad_04
Mama Kangu dd_06
Mandor ef_06
Mandragora ff_03
Mantidroide da_03
Mapach Wik ed_04
Marciano Errante ce_01
Marine Muerto eb_05
Marv ae_06
Mascarada Emocional ff_99
Master Paw fd_10
Matafantasmas eb_04
Mau-Jack ed_06
Mecaovoide Aracneo ad_11
Mecargola ba_14
Medico Astral eb_12
Medinosaurio ed_13
Medusa fd_01
Mega Claus cf_07
Megastral ee_09
Mekali fa_02
Mephisto ef_04
Mexihcatl fc_04
Micky Krueger bc_03
Midas fc_11
Mimi Cronocurva fa_10
Miroku df_04
Missy Despierta ca_99
Mister T-Ger dd_09
Mix0-Logo ae_11
Mon-Key Crew cd_09
Monje Akuso cf_05
Monocerus ad_02
Monolith ff_04
Motero Maldito bb_03
Mr Marvelous ef_02_heroes
Muñeca Diabolica ba_02
Myrmidus.exe ad_13
Namaste ff_06
Naraxis ba_08
Nebulon ef_01
Nebulus fe_05_silver
Necrobot ab_01
Necrodragon bd_01
Necroparasito bb_07
Neo Urban XIII ab_05_gachaboss
Nexo Orbital ee_13
Nezarim be_07
Nimrod fc_99
Noren dc_07
Nyrlatoth be_05
Núcleo seráfico fe_14
Octopia ed_99
Oculus aa_04
Oculys be_11
Omikami fd_08
Optimus Zord ac_09
Oriax fc_03
Orion fa_11
Oryctolagus Exobioicus de_13
Oso Espantoso bd_03
Overkill be_10
Owlock ed_11
Paramic ed_07
Pejelagarto dd_05
Peregrino Espacial ea_13
Pesadilla Viviente fb_11
Phileas Derocas ac_12
Pierrot fe_11
Pikabu ba_07
Pirotropo be_09
Piwisher db_11
Polaris ee_12
Principe Escorpion fb_02_silver
Professor Cronomantico ac_14
Profeta del Crepúsculo ff_14
Project X27 ca_04
Protector de los Sueños af_12
Proyecto 3V3 aa_07
Psicojabali dd_03
Quebrantacuellos be_03
Quetzalcoatl df_09
Quimera df_07
Ragnar cb_03
Rakshasa dc_01
Rambit d_03
Reed, El Verdadero Heroe cf_99
Regulo&Juzya ce_12
Reina Parasita de_01
Reina Rakkti ee_06
Reina Sylvidra eb_09
Reptoide da_01
Rey Azul cc_14_chess
Rey De Avalon fc_13
Rey de los Insectos fe_07
Rey Esqueleto cb_07
Rey Mono dc_05
Rey Steven ea_05
Rinotauro dd_08
Roadmaster ba_11
Robofuerte ac_07_lucha
Robot a_01
Robot Debil a_02
Rocageno ed_02
Rocky Botboa ca_07
Rox McRain ed_09
S-K-Venger ab_10
Sable df_06
Sacamantecas bb_04
Sagitauro cd_02_silver
Sakuraboshi ff_13
Sangresquito bd_13
Sanik dc_08
Santactopus ec_04
Santagonista cc_11
Sargento Dusk ac_10
Sasquatch d_13
Satiro Hechicero df_02
Scaramouche cc_12
Seiyatsu ef_08
Sentry ea_02
Señor Bestial dd_14
Señor del Abismo ff_01
Señor Dragon db_07
Sgt. Pandamonium ed_08
Shin Hakuho cc_05
Sierrametrodon dc_13
Simulacro de Combate ab_99
Simurgh fd_12
Sir Bannog cd_11
Sirenia eb_02
Sound Killah da_09_music
Space Princess fe_04
Spada dc_11
Spartac cc_07
Spin Fury ac_11
Star Trooper ec_03
Starminator eb_07
Sun-Duke ce_05_villains
Sundance Bug ec_01
Supernovus ee_02
Supraman X ae_04
Surfista del Espacio ea_10
T-3rr0r bb_10
Tauridus ad_03_silver
TCB-8566 Trafficroid aa_13
Tecno Tao fa_01
Tecnocaracol da_12
Tecnoforzer aa_05
Tenacity ae_12
Tengu bd_99
Termodroide Celsius ea_99
Terror Abisal dd_11
Terror Jurasico dc_14
Tezcatlipoca fd_13
Thanaconda bd_12
The Reef ca_11_beach
Thor cf_02
Thran bc_08
Tio Sam cf_06
Tiranozomb db_08
Tomahawk ce_06
Tormenta de Fuego ff_08
Traiciobaza bc_14
TriAD aa_11
Triceratanque da_06
Triple-B ba_03
Turbacieno bc_07
Tutti Viscosi eb_01
Tyrtiduron bd_06
Urgan cc_10
Valkiria cf_01
Van Helsing bf_08
Veren Kaeesu ec_11
Viajero de Vortice be_13
Viper ac_06
Virgon af_02_silver
Vivaldi fe_13
Väinämöinen f_13
Wampara ed_03
Waryena bd_10
Wrath cb_08
Wynn cf_08
X'astuth ef_12
Xeleroth fe_09
Xenarach ab_03
Xenos ed_01
Xinomas eb_13
Yelda fc_05
Yggdrasil fb_10
Yokozuna cc_08
Z-0 ba_06
Zagam, Gran Rey De La Avaricia fb_14
Zapador de Madrigueras dc_12
Zar Bomba ce_09
Zena cc_03
Zenguru fa_09
Zeus ec_06_olympians
Zigmo de_09
Zombat db_02
Zombi b_01
Zombi Debil b_02
Zomborg ba_01
Zortrex ce_04
El Glitchy Corazon	ab_15
Spiraxia	e_14
Irradiancia	bf_14
El Hambre	be_15
Dandy Cosmico	ce_14
Kereon del Abismo	ea_15
Apiarca	d_14_platinum
Ornitorrinco	dd_15
`,ud=O.createContext({});function dd(a){const s=O.useRef(null);return s.current===null&&(s.current=a()),s.current}const E2=typeof window<"u",Zf=E2?O.useLayoutEffect:O.useEffect,Er=O.createContext(null);function pd(a,s){a.indexOf(s)===-1&&a.push(s)}function Gr(a,s){const r=a.indexOf(s);r>-1&&a.splice(r,1)}const nn=(a,s,r)=>r>s?s:r<a?a:r;let gd=()=>{};const Jn={},Yf=a=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a),Qf=a=>typeof a=="object"&&a!==null,Jf=a=>/^0[^.\s]+$/u.test(a);function Wf(a){let s;return()=>(s===void 0&&(s=a()),s)}const Ot=a=>a,Ii=(...a)=>a.reduce((s,r)=>o=>r(s(o))),Mi=(a,s,r)=>{const o=s-a;return o?(r-a)/o:1};class md{constructor(){this.subscriptions=[]}add(s){return pd(this.subscriptions,s),()=>Gr(this.subscriptions,s)}notify(s,r,o){const d=this.subscriptions.length;if(d)if(d===1)this.subscriptions[0](s,r,o);else for(let g=0;g<d;g++){const p=this.subscriptions[g];p&&p(s,r,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const jt=a=>a*1e3,Ht=a=>a/1e3,$f=(a,s)=>s?a*(1e3/s):0,e0=(a,s,r)=>(((1-3*r+3*s)*a+(3*r-6*s))*a+3*s)*a,w2=1e-7,D2=12;function N2(a,s,r,o,d){let g,p,b=0;do p=s+(r-s)/2,g=e0(p,o,d)-a,g>0?r=p:s=p;while(Math.abs(g)>w2&&++b<D2);return p}function ji(a,s,r,o){if(a===s&&r===o)return Ot;const d=g=>N2(g,0,1,a,r);return g=>g===0||g===1?g:e0(d(g),s,o)}const t0=a=>s=>s<=.5?a(2*s)/2:(2-a(2*(1-s)))/2,n0=a=>s=>1-a(1-s),a0=ji(.33,1.53,.69,.99),hd=n0(a0),s0=t0(hd),i0=a=>a>=1?1:(a*=2)<1?.5*hd(a):.5*(2-Math.pow(2,-10*(a-1))),bd=a=>1-Math.sin(Math.acos(a)),o0=n0(bd),r0=t0(bd),C2=ji(.42,0,1,1),q2=ji(0,0,.58,1),l0=ji(.42,0,.58,1),R2=a=>Array.isArray(a)&&typeof a[0]!="number",c0=a=>Array.isArray(a)&&typeof a[0]=="number",z2={linear:Ot,easeIn:C2,easeInOut:l0,easeOut:q2,circIn:bd,circInOut:r0,circOut:o0,backIn:hd,backInOut:s0,backOut:a0,anticipate:i0},L2=a=>typeof a=="string",ab=a=>{if(c0(a)){gd(a.length===4);const[s,r,o,d]=a;return ji(s,r,o,d)}else if(L2(a))return z2[a];return a},Wo=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function H2(a,s){let r=new Set,o=new Set,d=!1,g=!1;const p=new WeakSet;let b={delta:0,timestamp:0,isProcessing:!1};function _(f){p.has(f)&&(h.schedule(f),a()),f(b)}const h={schedule:(f,G=!1,k=!1)=>{const M=k&&d?r:o;return G&&p.add(f),M.add(f),f},cancel:f=>{o.delete(f),p.delete(f)},process:f=>{if(b=f,d){g=!0;return}d=!0;const G=r;r=o,o=G,r.forEach(_),r.clear(),d=!1,g&&(g=!1,h.process(f))}};return h}const O2=40;function u0(a,s){let r=!1,o=!0;const d={delta:0,timestamp:0,isProcessing:!1},g=()=>r=!0,p=Wo.reduce((z,V)=>(z[V]=H2(g),z),{}),{setup:b,read:_,resolveKeyframes:h,preUpdate:f,update:G,preRender:k,render:y,postRender:M}=p,I=()=>{const z=Jn.useManualTiming,V=z?d.timestamp:performance.now();r=!1,z||(d.delta=o?1e3/60:Math.max(Math.min(V-d.timestamp,O2),1)),d.timestamp=V,d.isProcessing=!0,b.process(d),_.process(d),h.process(d),f.process(d),G.process(d),k.process(d),y.process(d),M.process(d),d.isProcessing=!1,r&&s&&(o=!1,a(I))},S=()=>{r=!0,o=!0,d.isProcessing||a(I)};return{schedule:Wo.reduce((z,V)=>{const Z=p[V];return z[V]=(H,C=!1,P=!1)=>(r||S(),Z.schedule(H,C,P)),z},{}),cancel:z=>{for(let V=0;V<Wo.length;V++)p[Wo[V]].cancel(z)},state:d,steps:p}}const{schedule:Ee,cancel:Wn,state:st,steps:cu}=u0(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ot,!0);let rr;function B2(){rr=void 0}const ct={now:()=>(rr===void 0&&ct.set(st.isProcessing||Jn.useManualTiming?st.timestamp:performance.now()),rr),set:a=>{rr=a,queueMicrotask(B2)}},d0=a=>s=>typeof s=="string"&&s.startsWith(a),p0=d0("--"),U2=d0("var(--"),fd=a=>U2(a)?P2.test(a.split("/*")[0].trim()):!1,P2=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function sb(a){return typeof a!="string"?!1:a.split("/*")[0].includes("var(--")}const _s={test:a=>typeof a=="number",parse:parseFloat,transform:a=>a},Ai={..._s,transform:a=>nn(0,1,a)},$o={..._s,default:1},xi=a=>Math.round(a*1e5)/1e5,_d=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function F2(a){return a==null}const K2=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,xd=(a,s)=>r=>!!(typeof r=="string"&&K2.test(r)&&r.startsWith(a)||s&&!F2(r)&&Object.prototype.hasOwnProperty.call(r,s)),g0=(a,s,r)=>o=>{if(typeof o!="string")return o;const[d,g,p,b]=o.match(_d);return{[a]:parseFloat(d),[s]:parseFloat(g),[r]:parseFloat(p),alpha:b!==void 0?parseFloat(b):1}},X2=a=>nn(0,255,a),uu={..._s,transform:a=>Math.round(X2(a))},ya={test:xd("rgb","red"),parse:g0("red","green","blue"),transform:({red:a,green:s,blue:r,alpha:o=1})=>"rgba("+uu.transform(a)+", "+uu.transform(s)+", "+uu.transform(r)+", "+xi(Ai.transform(o))+")"};function Z2(a){let s="",r="",o="",d="";return a.length>5?(s=a.substring(1,3),r=a.substring(3,5),o=a.substring(5,7),d=a.substring(7,9)):(s=a.substring(1,2),r=a.substring(2,3),o=a.substring(3,4),d=a.substring(4,5),s+=s,r+=r,o+=o,d+=d),{red:parseInt(s,16),green:parseInt(r,16),blue:parseInt(o,16),alpha:d?parseInt(d,16)/255:1}}const Nu={test:xd("#"),parse:Z2,transform:ya.transform},Vi=a=>({test:s=>typeof s=="string"&&s.endsWith(a)&&s.split(" ").length===1,parse:parseFloat,transform:s=>`${s}${a}`}),yn=Vi("deg"),tn=Vi("%"),ee=Vi("px"),Y2=Vi("vh"),Q2=Vi("vw"),ib={...tn,parse:a=>tn.parse(a)/100,transform:a=>tn.transform(a*100)},gs={test:xd("hsl","hue"),parse:g0("hue","saturation","lightness"),transform:({hue:a,saturation:s,lightness:r,alpha:o=1})=>"hsla("+Math.round(a)+", "+tn.transform(xi(s))+", "+tn.transform(xi(r))+", "+xi(Ai.transform(o))+")"},Ze={test:a=>ya.test(a)||Nu.test(a)||gs.test(a),parse:a=>ya.test(a)?ya.parse(a):gs.test(a)?gs.parse(a):Nu.parse(a),transform:a=>typeof a=="string"?a:a.hasOwnProperty("red")?ya.transform(a):gs.transform(a),getAnimatableNone:a=>{const s=Ze.parse(a);return s.alpha=0,Ze.transform(s)}},J2=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function W2(a){var s,r;return isNaN(a)&&typeof a=="string"&&(((s=a.match(_d))==null?void 0:s.length)||0)+(((r=a.match(J2))==null?void 0:r.length)||0)>0}const m0="number",h0="color",$2="var",ek="var(",ob="${}",tk=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function bs(a){const s=a.toString(),r=[],o={color:[],number:[],var:[]},d=[];let g=0;const b=s.replace(tk,_=>(Ze.test(_)?(o.color.push(g),d.push(h0),r.push(Ze.parse(_))):_.startsWith(ek)?(o.var.push(g),d.push($2),r.push(_)):(o.number.push(g),d.push(m0),r.push(parseFloat(_))),++g,ob)).split(ob);return{values:r,split:b,indexes:o,types:d}}function nk(a){return bs(a).values}function b0({split:a,types:s}){const r=a.length;return o=>{let d="";for(let g=0;g<r;g++)if(d+=a[g],o[g]!==void 0){const p=s[g];p===m0?d+=xi(o[g]):p===h0?d+=Ze.transform(o[g]):d+=o[g]}return d}}function ak(a){return b0(bs(a))}const sk=a=>typeof a=="number"?0:Ze.test(a)?Ze.getAnimatableNone(a):a,ik=(a,s)=>typeof a=="number"?s!=null&&s.trim().endsWith("/")?a:0:sk(a);function ok(a){const s=bs(a);return b0(s)(s.values.map((o,d)=>ik(o,s.split[d])))}const Xt={test:W2,parse:nk,createTransformer:ak,getAnimatableNone:ok};function du(a,s,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?a+(s-a)*6*r:r<1/2?s:r<2/3?a+(s-a)*(2/3-r)*6:a}function rk({hue:a,saturation:s,lightness:r,alpha:o}){a/=360,s/=100,r/=100;let d=0,g=0,p=0;if(!s)d=g=p=r;else{const b=r<.5?r*(1+s):r+s-r*s,_=2*r-b;d=du(_,b,a+1/3),g=du(_,b,a),p=du(_,b,a-1/3)}return{red:Math.round(d*255),green:Math.round(g*255),blue:Math.round(p*255),alpha:o}}function kr(a,s){return r=>r>0?s:a}const Ve=(a,s,r)=>a+(s-a)*r,pu=(a,s,r)=>{const o=a*a,d=r*(s*s-o)+o;return d<0?0:Math.sqrt(d)},lk=[Nu,ya,gs],ck=a=>lk.find(s=>s.test(a));function rb(a){const s=ck(a);if(!s)return!1;let r=s.parse(a);return s===gs&&(r=rk(r)),r}const lb=(a,s)=>{const r=rb(a),o=rb(s);if(!r||!o)return kr(a,s);const d={...r};return g=>(d.red=pu(r.red,o.red,g),d.green=pu(r.green,o.green,g),d.blue=pu(r.blue,o.blue,g),d.alpha=Ve(r.alpha,o.alpha,g),ya.transform(d))},Cu=new Set(["none","hidden"]);function uk(a,s){return Cu.has(a)?r=>r<=0?a:s:r=>r>=1?s:a}function dk(a,s){return r=>Ve(a,s,r)}function Gd(a){return typeof a=="number"?dk:typeof a=="string"?fd(a)?kr:Ze.test(a)?lb:mk:Array.isArray(a)?f0:typeof a=="object"?Ze.test(a)?lb:pk:kr}function f0(a,s){const r=[...a],o=r.length,d=a.map((g,p)=>Gd(g)(g,s[p]));return g=>{for(let p=0;p<o;p++)r[p]=d[p](g);return r}}function pk(a,s){const r={...a,...s},o={};for(const d in r)a[d]!==void 0&&s[d]!==void 0&&(o[d]=Gd(a[d])(a[d],s[d]));return d=>{for(const g in o)r[g]=o[g](d);return r}}function gk(a,s){const r=[],o={color:0,var:0,number:0};for(let d=0;d<s.values.length;d++){const g=s.types[d],p=a.indexes[g][o[g]],b=a.values[p]??0;r[d]=b,o[g]++}return r}const mk=(a,s)=>{const r=Xt.createTransformer(s),o=bs(a),d=bs(s);return o.indexes.var.length===d.indexes.var.length&&o.indexes.color.length===d.indexes.color.length&&o.indexes.number.length>=d.indexes.number.length?Cu.has(a)&&!d.values.length||Cu.has(s)&&!o.values.length?uk(a,s):Ii(f0(gk(o,d),d.values),r):kr(a,s)};function _0(a,s,r){return typeof a=="number"&&typeof s=="number"&&typeof r=="number"?Ve(a,s,r):Gd(a)(a,s)}const hk=a=>{const s=({timestamp:r})=>a(r);return{start:(r=!0)=>Ee.update(s,r),stop:()=>Wn(s),now:()=>st.isProcessing?st.timestamp:ct.now()}},x0=(a,s,r=10)=>{let o="";const d=Math.max(Math.round(s/r),2);for(let g=0;g<d;g++)o+=Math.round(a(g/(d-1))*1e4)/1e4+", ";return`linear(${o.substring(0,o.length-2)})`},yr=2e4;function kd(a){let s=0;const r=50;let o=a.next(s);for(;!o.done&&s<yr;)s+=r,o=a.next(s);return s>=yr?1/0:s}function bk(a,s=100,r){const o=r({...a,keyframes:[0,s]}),d=Math.min(kd(o),yr);return{type:"keyframes",ease:g=>o.next(d*g).value/s,duration:Ht(d)}}const Le={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function qu(a,s){return a*Math.sqrt(1-s*s)}const fk=12;function _k(a,s,r){let o=r;for(let d=1;d<fk;d++)o=o-a(o)/s(o);return o}const gu=.001;function xk({duration:a=Le.duration,bounce:s=Le.bounce,velocity:r=Le.velocity,mass:o=Le.mass}){let d,g,p=1-s;p=nn(Le.minDamping,Le.maxDamping,p),a=nn(Le.minDuration,Le.maxDuration,Ht(a)),p<1?(d=h=>{const f=h*p,G=f*a,k=f-r,y=qu(h,p),M=Math.exp(-G);return gu-k/y*M},g=h=>{const G=h*p*a,k=G*r+r,y=Math.pow(p,2)*Math.pow(h,2)*a,M=Math.exp(-G),I=qu(Math.pow(h,2),p);return(-d(h)+gu>0?-1:1)*((k-y)*M)/I}):(d=h=>{const f=Math.exp(-h*a),G=(h-r)*a+1;return-gu+f*G},g=h=>{const f=Math.exp(-h*a),G=(r-h)*(a*a);return f*G});const b=5/a,_=_k(d,g,b);if(a=jt(a),isNaN(_))return{stiffness:Le.stiffness,damping:Le.damping,duration:a};{const h=Math.pow(_,2)*o;return{stiffness:h,damping:p*2*Math.sqrt(o*h),duration:a}}}const Gk=["duration","bounce"],kk=["stiffness","damping","mass"];function cb(a,s){return s.some(r=>a[r]!==void 0)}function yk(a){let s={velocity:Le.velocity,stiffness:Le.stiffness,damping:Le.damping,mass:Le.mass,isResolvedFromDuration:!1,...a};if(!cb(a,kk)&&cb(a,Gk))if(s.velocity=0,a.visualDuration){const r=a.visualDuration,o=2*Math.PI/(r*1.2),d=o*o,g=2*nn(.05,1,1-(a.bounce||0))*Math.sqrt(d);s={...s,mass:Le.mass,stiffness:d,damping:g}}else{const r=xk({...a,velocity:0});s={...s,...r,mass:Le.mass},s.isResolvedFromDuration=!0}return s}function vr(a=Le.visualDuration,s=Le.bounce){const r=typeof a!="object"?{visualDuration:a,keyframes:[0,1],bounce:s}:a;let{restSpeed:o,restDelta:d}=r;const g=r.keyframes[0],p=r.keyframes[r.keyframes.length-1],b={done:!1,value:g},{stiffness:_,damping:h,mass:f,duration:G,velocity:k,isResolvedFromDuration:y}=yk({...r,velocity:-Ht(r.velocity||0)}),M=k||0,I=h/(2*Math.sqrt(_*f)),S=p-g,N=Ht(Math.sqrt(_/f)),X=Math.abs(S)<5;o||(o=X?Le.restSpeed.granular:Le.restSpeed.default),d||(d=X?Le.restDelta.granular:Le.restDelta.default);let z,V,Z,H,C,P;if(I<1)Z=qu(N,I),H=(M+I*N*S)/Z,z=Y=>{const ie=Math.exp(-I*N*Y);return p-ie*(H*Math.sin(Z*Y)+S*Math.cos(Z*Y))},C=I*N*H+S*Z,P=I*N*S-H*Z,V=Y=>Math.exp(-I*N*Y)*(C*Math.sin(Z*Y)+P*Math.cos(Z*Y));else if(I===1){z=ie=>p-Math.exp(-N*ie)*(S+(M+N*S)*ie);const Y=M+N*S;V=ie=>Math.exp(-N*ie)*(N*Y*ie-M)}else{const Y=N*Math.sqrt(I*I-1);z=qe=>{const Ne=Math.exp(-I*N*qe),R=Math.min(Y*qe,300);return p-Ne*((M+I*N*S)*Math.sinh(R)+Y*S*Math.cosh(R))/Y};const ie=(M+I*N*S)/Y,pe=I*N*ie-S*Y,Ue=I*N*S-ie*Y;V=qe=>{const Ne=Math.exp(-I*N*qe),R=Math.min(Y*qe,300);return Ne*(pe*Math.sinh(R)+Ue*Math.cosh(R))}}const K={calculatedDuration:y&&G||null,velocity:Y=>jt(V(Y)),next:Y=>{if(!y&&I<1){const pe=Math.exp(-I*N*Y),Ue=Math.sin(Z*Y),qe=Math.cos(Z*Y),Ne=p-pe*(H*Ue+S*qe),R=jt(pe*(C*Ue+P*qe));return b.done=Math.abs(R)<=o&&Math.abs(p-Ne)<=d,b.value=b.done?p:Ne,b}const ie=z(Y);if(y)b.done=Y>=G;else{const pe=jt(V(Y));b.done=Math.abs(pe)<=o&&Math.abs(p-ie)<=d}return b.value=b.done?p:ie,b},toString:()=>{const Y=Math.min(kd(K),yr),ie=x0(pe=>K.next(Y*pe).value,Y,30);return Y+"ms "+ie},toTransition:()=>{}};return K}vr.applyToOptions=a=>{const s=bk(a,100,vr);return a.ease=s.ease,a.duration=jt(s.duration),a.type="keyframes",a};const vk=5;function G0(a,s,r){const o=Math.max(s-vk,0);return $f(r-a(o),s-o)}function Ru({keyframes:a,velocity:s=0,power:r=.8,timeConstant:o=325,bounceDamping:d=10,bounceStiffness:g=500,modifyTarget:p,min:b,max:_,restDelta:h=.5,restSpeed:f}){const G=a[0],k={done:!1,value:G},y=P=>b!==void 0&&P<b||_!==void 0&&P>_,M=P=>b===void 0?_:_===void 0||Math.abs(b-P)<Math.abs(_-P)?b:_;let I=r*s;const S=G+I,N=p===void 0?S:p(S);N!==S&&(I=N-G);const X=P=>-I*Math.exp(-P/o),z=P=>N+X(P),V=P=>{const K=X(P),Y=z(P);k.done=Math.abs(K)<=h,k.value=k.done?N:Y};let Z,H;const C=P=>{y(k.value)&&(Z=P,H=vr({keyframes:[k.value,M(k.value)],velocity:G0(z,P,k.value),damping:d,stiffness:g,restDelta:h,restSpeed:f}))};return C(0),{calculatedDuration:null,next:P=>{let K=!1;return!H&&Z===void 0&&(K=!0,V(P),C(P)),Z!==void 0&&P>=Z?H.next(P-Z):(!K&&V(P),k)}}}function Mk(a,s,r){const o=[],d=r||Jn.mix||_0,g=a.length-1;for(let p=0;p<g;p++){let b=d(a[p],a[p+1]);if(s){const _=Array.isArray(s)?s[p]||Ot:s;b=Ii(_,b)}o.push(b)}return o}function Ak(a,s,{clamp:r=!0,ease:o,mixer:d}={}){const g=a.length;if(gd(g===s.length),g===1)return()=>s[0];if(g===2&&s[0]===s[1])return()=>s[1];const p=a[0]===a[1];a[0]>a[g-1]&&(a=[...a].reverse(),s=[...s].reverse());const b=Mk(s,o,d),_=b.length,h=f=>{if(p&&f<a[0])return s[0];let G=0;if(_>1)for(;G<a.length-2&&!(f<a[G+1]);G++);const k=Mi(a[G],a[G+1],f);return b[G](k)};return r?f=>h(nn(a[0],a[g-1],f)):h}function Tk(a,s){const r=a[a.length-1];for(let o=1;o<=s;o++){const d=Mi(0,s,o);a.push(Ve(r,1,d))}}function Sk(a){const s=[0];return Tk(s,a.length-1),s}function Ik(a,s){return a.map(r=>r*s)}function jk(a,s){return a.map(()=>s||l0).splice(0,a.length-1)}function Gi({duration:a=300,keyframes:s,times:r,ease:o="easeInOut"}){const d=R2(o)?o.map(ab):ab(o),g={done:!1,value:s[0]},p=Ik(r&&r.length===s.length?r:Sk(s),a),b=Ak(p,s,{ease:Array.isArray(d)?d:jk(s,d)});return{calculatedDuration:a,next:_=>(g.value=b(_),g.done=_>=a,g)}}const Vk=a=>a!==null;function wr(a,{repeat:s,repeatType:r="loop"},o,d=1){const g=a.filter(Vk),b=d<0||s&&r!=="loop"&&s%2===1?0:g.length-1;return!b||o===void 0?g[b]:o}const Ek={decay:Ru,inertia:Ru,tween:Gi,keyframes:Gi,spring:vr};function k0(a){typeof a.type=="string"&&(a.type=Ek[a.type])}class yd{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(s=>{this.resolve=s})}notifyFinished(){this.resolve()}then(s,r){return this.finished.then(s,r)}}const wk=a=>a/100;class Mr extends yd{constructor(s){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var o,d;const{motionValue:r}=this.options;r&&r.updatedAt!==ct.now()&&this.tick(ct.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(d=(o=this.options).onStop)==null||d.call(o))},this.options=s,this.initAnimation(),this.play(),s.autoplay===!1&&this.pause()}initAnimation(){const{options:s}=this;k0(s);const{type:r=Gi,repeat:o=0,repeatDelay:d=0,repeatType:g,velocity:p=0}=s;let{keyframes:b}=s;const _=r||Gi;_!==Gi&&typeof b[0]!="number"&&(this.mixKeyframes=Ii(wk,_0(b[0],b[1])),b=[0,100]);const h=_({...s,keyframes:b});g==="mirror"&&(this.mirroredGenerator=_({...s,keyframes:[...b].reverse(),velocity:-p})),h.calculatedDuration===null&&(h.calculatedDuration=kd(h));const{calculatedDuration:f}=h;this.calculatedDuration=f,this.resolvedDuration=f+d,this.totalDuration=this.resolvedDuration*(o+1)-d,this.generator=h}updateTime(s){const r=Math.round(s-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=r}tick(s,r=!1){const{generator:o,totalDuration:d,mixKeyframes:g,mirroredGenerator:p,resolvedDuration:b,calculatedDuration:_}=this;if(this.startTime===null)return o.next(0);const{delay:h=0,keyframes:f,repeat:G,repeatType:k,repeatDelay:y,type:M,onUpdate:I,finalKeyframe:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,s):this.speed<0&&(this.startTime=Math.min(s-d/this.speed,this.startTime)),r?this.currentTime=s:this.updateTime(s);const N=this.currentTime-h*(this.playbackSpeed>=0?1:-1),X=this.playbackSpeed>=0?N<0:N>d;this.currentTime=Math.max(N,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let z=this.currentTime,V=o;if(G){const P=Math.min(this.currentTime,d)/b;let K=Math.floor(P),Y=P%1;!Y&&P>=1&&(Y=1),Y===1&&K--,K=Math.min(K,G+1),!!(K%2)&&(k==="reverse"?(Y=1-Y,y&&(Y-=y/b)):k==="mirror"&&(V=p)),z=nn(0,1,Y)*b}let Z;X?(this.delayState.value=f[0],Z=this.delayState):Z=V.next(z),g&&!X&&(Z.value=g(Z.value));let{done:H}=Z;!X&&_!==null&&(H=this.playbackSpeed>=0?this.currentTime>=d:this.currentTime<=0);const C=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&H);return C&&M!==Ru&&(Z.value=wr(f,this.options,S,this.speed)),I&&I(Z.value),C&&this.finish(),Z}then(s,r){return this.finished.then(s,r)}get duration(){return Ht(this.calculatedDuration)}get iterationDuration(){const{delay:s=0}=this.options||{};return this.duration+Ht(s)}get time(){return Ht(this.currentTime)}set time(s){s=jt(s),this.currentTime=s,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=s:this.driver&&(this.startTime=this.driver.now()-s/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=s,this.tick(s))}getGeneratorVelocity(){const s=this.currentTime;if(s<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(s);const r=this.generator.next(s).value;return G0(o=>this.generator.next(o).value,s,r)}get speed(){return this.playbackSpeed}set speed(s){const r=this.playbackSpeed!==s;r&&this.driver&&this.updateTime(ct.now()),this.playbackSpeed=s,r&&this.driver&&(this.time=Ht(this.currentTime))}play(){var d,g;if(this.isStopped)return;const{driver:s=hk,startTime:r}=this.options;this.driver||(this.driver=s(p=>this.tick(p))),(g=(d=this.options).onPlay)==null||g.call(d);const o=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=o):this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime||(this.startTime=r??o),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ct.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var s,r;this.notifyFinished(),this.teardown(),this.state="finished",(r=(s=this.options).onComplete)==null||r.call(s)}cancel(){var s,r;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(r=(s=this.options).onCancel)==null||r.call(s)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(s){return this.startTime=0,this.tick(s,!0)}attachTimeline(s){var r;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(r=this.driver)==null||r.stop(),s.observe(this)}}function Dk(a){for(let s=1;s<a.length;s++)a[s]??(a[s]=a[s-1])}const va=a=>a*180/Math.PI,zu=a=>{const s=va(Math.atan2(a[1],a[0]));return Lu(s)},Nk={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:a=>(Math.abs(a[0])+Math.abs(a[3]))/2,rotate:zu,rotateZ:zu,skewX:a=>va(Math.atan(a[1])),skewY:a=>va(Math.atan(a[2])),skew:a=>(Math.abs(a[1])+Math.abs(a[2]))/2},Lu=a=>(a=a%360,a<0&&(a+=360),a),ub=zu,db=a=>Math.sqrt(a[0]*a[0]+a[1]*a[1]),pb=a=>Math.sqrt(a[4]*a[4]+a[5]*a[5]),Ck={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:db,scaleY:pb,scale:a=>(db(a)+pb(a))/2,rotateX:a=>Lu(va(Math.atan2(a[6],a[5]))),rotateY:a=>Lu(va(Math.atan2(-a[2],a[0]))),rotateZ:ub,rotate:ub,skewX:a=>va(Math.atan(a[4])),skewY:a=>va(Math.atan(a[1])),skew:a=>(Math.abs(a[1])+Math.abs(a[4]))/2};function Hu(a){return a.includes("scale")?1:0}function Ou(a,s){if(!a||a==="none")return Hu(s);const r=a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let o,d;if(r)o=Ck,d=r;else{const b=a.match(/^matrix\(([-\d.e\s,]+)\)$/u);o=Nk,d=b}if(!d)return Hu(s);const g=o[s],p=d[1].split(",").map(Rk);return typeof g=="function"?g(p):p[g]}const qk=(a,s)=>{const{transform:r="none"}=getComputedStyle(a);return Ou(r,s)};function Rk(a){return parseFloat(a.trim())}const xs=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Gs=new Set([...xs,"pathRotation"]),gb=a=>a===_s||a===ee,zk=new Set(["x","y","z"]),Lk=xs.filter(a=>!zk.has(a));function Hk(a){const s=[];return Lk.forEach(r=>{const o=a.getValue(r);o!==void 0&&(s.push([r,o.get()]),o.set(r.startsWith("scale")?1:0))}),s}const Qn={width:({x:a},{paddingLeft:s="0",paddingRight:r="0",boxSizing:o})=>{const d=a.max-a.min;return o==="border-box"?d:d-parseFloat(s)-parseFloat(r)},height:({y:a},{paddingTop:s="0",paddingBottom:r="0",boxSizing:o})=>{const d=a.max-a.min;return o==="border-box"?d:d-parseFloat(s)-parseFloat(r)},top:(a,{top:s})=>parseFloat(s),left:(a,{left:s})=>parseFloat(s),bottom:({y:a},{top:s})=>parseFloat(s)+(a.max-a.min),right:({x:a},{left:s})=>parseFloat(s)+(a.max-a.min),x:(a,{transform:s})=>Ou(s,"x"),y:(a,{transform:s})=>Ou(s,"y")};Qn.translateX=Qn.x;Qn.translateY=Qn.y;const Ma=new Set;let Bu=!1,Uu=!1,Pu=!1;function y0(){if(Uu){const a=Array.from(Ma).filter(o=>o.needsMeasurement),s=new Set(a.map(o=>o.element)),r=new Map;s.forEach(o=>{const d=Hk(o);d.length&&(r.set(o,d),o.render())}),a.forEach(o=>o.measureInitialState()),s.forEach(o=>{o.render();const d=r.get(o);d&&d.forEach(([g,p])=>{var b;(b=o.getValue(g))==null||b.set(p)})}),a.forEach(o=>o.measureEndState()),a.forEach(o=>{o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)})}Uu=!1,Bu=!1,Ma.forEach(a=>a.complete(Pu)),Ma.clear()}function v0(){Ma.forEach(a=>{a.readKeyframes(),a.needsMeasurement&&(Uu=!0)})}function Ok(){Pu=!0,v0(),y0(),Pu=!1}class vd{constructor(s,r,o,d,g,p=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...s],this.onComplete=r,this.name=o,this.motionValue=d,this.element=g,this.isAsync=p}scheduleResolve(){this.state="scheduled",this.isAsync?(Ma.add(this),Bu||(Bu=!0,Ee.read(v0),Ee.resolveKeyframes(y0))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:s,name:r,element:o,motionValue:d}=this;if(s[0]===null){const g=d==null?void 0:d.get(),p=s[s.length-1];if(g!==void 0)s[0]=g;else if(o&&r){const b=o.readValue(r,p);b!=null&&(s[0]=b)}s[0]===void 0&&(s[0]=p),d&&g===void 0&&d.set(s[0])}Dk(s)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(s=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,s),Ma.delete(this)}cancel(){this.state==="scheduled"&&(Ma.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const Bk=a=>a.startsWith("--");function M0(a,s,r){Bk(s)?a.style.setProperty(s,r):a.style[s]=r}const Uk={};function A0(a,s){const r=Wf(a);return()=>Uk[s]??r()}const Pk=A0(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),T0=A0(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),fi=([a,s,r,o])=>`cubic-bezier(${a}, ${s}, ${r}, ${o})`,mb={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:fi([0,.65,.55,1]),circOut:fi([.55,0,1,.45]),backIn:fi([.31,.01,.66,-.59]),backOut:fi([.33,1.53,.69,.99])};function S0(a,s){if(a)return typeof a=="function"?T0()?x0(a,s):"ease-out":c0(a)?fi(a):Array.isArray(a)?a.map(r=>S0(r,s)||mb.easeOut):mb[a]}function Fk(a,s,r,{delay:o=0,duration:d=300,repeat:g=0,repeatType:p="loop",ease:b="easeOut",times:_}={},h=void 0){const f={[s]:r};_&&(f.offset=_);const G=S0(b,d);Array.isArray(G)&&(f.easing=G);const k={delay:o,duration:d,easing:Array.isArray(G)?"linear":G,fill:"both",iterations:g+1,direction:p==="reverse"?"alternate":"normal"};return h&&(k.pseudoElement=h),a.animate(f,k)}function I0(a){return typeof a=="function"&&"applyToOptions"in a}function Kk({type:a,...s}){return I0(a)&&T0()?a.applyToOptions(s):(s.duration??(s.duration=300),s.ease??(s.ease="easeOut"),s)}class j0 extends yd{constructor(s){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!s)return;const{element:r,name:o,keyframes:d,pseudoElement:g,allowFlatten:p=!1,finalKeyframe:b,onComplete:_}=s;this.isPseudoElement=!!g,this.allowFlatten=p,this.options=s,gd(typeof s.type!="string");const h=Kk(s);this.animation=Fk(r,o,d,h,g),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!g){const f=wr(d,this.options,b,this.speed);this.updateMotionValue&&this.updateMotionValue(f),M0(r,o,f),this.animation.cancel()}_==null||_(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var s,r;(r=(s=this.animation).finish)==null||r.call(s)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:s}=this;s==="idle"||s==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var r,o,d;const s=(r=this.options)==null?void 0:r.element;!this.isPseudoElement&&(s!=null&&s.isConnected)&&((d=(o=this.animation).commitStyles)==null||d.call(o))}get duration(){var r,o;const s=((o=(r=this.animation.effect)==null?void 0:r.getComputedTiming)==null?void 0:o.call(r).duration)||0;return Ht(Number(s))}get iterationDuration(){const{delay:s=0}=this.options||{};return this.duration+Ht(s)}get time(){return Ht(Number(this.animation.currentTime)||0)}set time(s){const r=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=jt(s),r&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(s){s<0&&(this.finishedTime=null),this.animation.playbackRate=s}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(s){this.manualStartTime=this.animation.startTime=s}attachTimeline({timeline:s,rangeStart:r,rangeEnd:o,observe:d}){var g;return this.allowFlatten&&((g=this.animation.effect)==null||g.updateTiming({easing:"linear"})),this.animation.onfinish=null,s&&Pk()?(this.animation.timeline=s,r&&(this.animation.rangeStart=r),o&&(this.animation.rangeEnd=o),Ot):d(this)}}const V0={anticipate:i0,backInOut:s0,circInOut:r0};function Xk(a){return a in V0}function Zk(a){typeof a.ease=="string"&&Xk(a.ease)&&(a.ease=V0[a.ease])}const mu=10;class Yk extends j0{constructor(s){Zk(s),k0(s),super(s),s.startTime!==void 0&&s.autoplay!==!1&&(this.startTime=s.startTime),this.options=s}updateMotionValue(s){const{motionValue:r,onUpdate:o,onComplete:d,element:g,...p}=this.options;if(!r)return;if(s!==void 0){r.set(s);return}const b=new Mr({...p,autoplay:!1}),_=Math.max(mu,ct.now()-this.startTime),h=nn(0,mu,_-mu),f=b.sample(_).value,{name:G}=this.options;g&&G&&M0(g,G,f),r.setWithVelocity(b.sample(Math.max(0,_-h)).value,f,h),b.stop()}}const hb=(a,s)=>s==="zIndex"?!1:!!(typeof a=="number"||Array.isArray(a)||typeof a=="string"&&(Xt.test(a)||a==="0")&&!a.startsWith("url("));function Qk(a){const s=a[0];if(a.length===1)return!0;for(let r=0;r<a.length;r++)if(a[r]!==s)return!0}function Jk(a,s,r,o){const d=a[0];if(d===null)return!1;if(s==="display"||s==="visibility")return!0;const g=a[a.length-1],p=hb(d,s),b=hb(g,s);return!p||!b?!1:Qk(a)||(r==="spring"||I0(r))&&o}function Fu(a){a.duration=0,a.type="keyframes"}const E0=new Set(["opacity","clipPath","filter","transform"]),Wk=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function $k(a){for(let s=0;s<a.length;s++)if(typeof a[s]=="string"&&Wk.test(a[s]))return!0;return!1}const ey=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),ty=Wf(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function ny(a){var G;const{motionValue:s,name:r,repeatDelay:o,repeatType:d,damping:g,type:p,keyframes:b}=a;if(!(((G=s==null?void 0:s.owner)==null?void 0:G.current)instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:f}=s.owner.getProps();return ty()&&r&&(E0.has(r)||ey.has(r)&&$k(b))&&(r!=="transform"||!f)&&!h&&!o&&d!=="mirror"&&g!==0&&p!=="inertia"}const ay=40;class sy extends yd{constructor({autoplay:s=!0,delay:r=0,type:o="keyframes",repeat:d=0,repeatDelay:g=0,repeatType:p="loop",keyframes:b,name:_,motionValue:h,element:f,...G}){var M;super(),this.stop=()=>{var I,S;this._animation&&(this._animation.stop(),(I=this.stopTimeline)==null||I.call(this)),(S=this.keyframeResolver)==null||S.cancel()},this.createdAt=ct.now();const k={autoplay:s,delay:r,type:o,repeat:d,repeatDelay:g,repeatType:p,name:_,motionValue:h,element:f,...G},y=(f==null?void 0:f.KeyframeResolver)||vd;this.keyframeResolver=new y(b,(I,S,N)=>this.onKeyframesResolved(I,S,k,!N),_,h,f),(M=this.keyframeResolver)==null||M.scheduleResolve()}onKeyframesResolved(s,r,o,d){var N,X;this.keyframeResolver=void 0;const{name:g,type:p,velocity:b,delay:_,isHandoff:h,onUpdate:f}=o;this.resolvedAt=ct.now();let G=!0;Jk(s,g,p,b)||(G=!1,(Jn.instantAnimations||!_)&&(f==null||f(wr(s,o,r))),s[0]=s[s.length-1],Fu(o),o.repeat=0);const y={startTime:d?this.resolvedAt?this.resolvedAt-this.createdAt>ay?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:r,...o,keyframes:s},M=G&&!h&&ny(y),I=(X=(N=y.motionValue)==null?void 0:N.owner)==null?void 0:X.current;let S;if(M)try{S=new Yk({...y,element:I})}catch{S=new Mr(y)}else S=new Mr(y);S.finished.then(()=>{this.notifyFinished()}).catch(Ot),this.pendingTimeline&&(this.stopTimeline=S.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=S}get finished(){return this._animation?this.animation.finished:this._finished}then(s,r){return this.finished.finally(s).then(()=>{})}get animation(){var s;return this._animation||((s=this.keyframeResolver)==null||s.resume(),Ok()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(s){this.animation.time=s}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(s){this.animation.speed=s}get startTime(){return this.animation.startTime}attachTimeline(s){return this._animation?this.stopTimeline=this.animation.attachTimeline(s):this.pendingTimeline=s,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var s;this._animation&&this.animation.cancel(),(s=this.keyframeResolver)==null||s.cancel()}}function w0(a,s,r,o=0,d=1){const g=Array.from(a).sort((h,f)=>h.sortNodePosition(f)).indexOf(s),p=a.size,b=(p-1)*o;return typeof r=="function"?r(g,p):d===1?g*o:b-g*o}const bb=30,iy=a=>!isNaN(parseFloat(a));class oy{constructor(s,r={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=o=>{var g;const d=ct.now();if(this.updatedAt!==d&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&((g=this.events.change)==null||g.notify(this.current),this.dependents))for(const p of this.dependents)p.dirty()},this.hasAnimated=!1,this.setCurrent(s),this.owner=r.owner}setCurrent(s){this.current=s,this.updatedAt=ct.now(),this.canTrackVelocity===null&&s!==void 0&&(this.canTrackVelocity=iy(this.current))}setPrevFrameValue(s=this.current){this.prevFrameValue=s,this.prevUpdatedAt=this.updatedAt}onChange(s){return this.on("change",s)}on(s,r){this.events[s]||(this.events[s]=new md);const o=this.events[s].add(r);return s==="change"?()=>{o(),Ee.read(()=>{this.events.change.getSize()||this.stop()})}:o}clearListeners(){for(const s in this.events)this.events[s].clear()}attach(s,r){this.passiveEffect=s,this.stopPassiveEffect=r}set(s){this.passiveEffect?this.passiveEffect(s,this.updateAndNotify):this.updateAndNotify(s)}setWithVelocity(s,r,o){this.set(r),this.prev=void 0,this.prevFrameValue=s,this.prevUpdatedAt=this.updatedAt-o}jump(s,r=!0){this.updateAndNotify(s),this.prev=s,this.prevUpdatedAt=this.prevFrameValue=void 0,r&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var s;(s=this.events.change)==null||s.notify(this.current)}addDependent(s){this.dependents||(this.dependents=new Set),this.dependents.add(s)}removeDependent(s){this.dependents&&this.dependents.delete(s)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const s=ct.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||s-this.updatedAt>bb)return 0;const r=Math.min(this.updatedAt-this.prevUpdatedAt,bb);return $f(parseFloat(this.current)-parseFloat(this.prevFrameValue),r)}start(s){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=s(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var s,r;(s=this.dependents)==null||s.clear(),(r=this.events.destroy)==null||r.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function fs(a,s){return new oy(a,s)}function D0(a,s){if(a!=null&&a.inherit&&s){const{inherit:r,...o}=a;return{...s,...o}}return a}function Md(a,s){const r=(a==null?void 0:a[s])??(a==null?void 0:a.default)??a;return r!==a?D0(r,a):r}const ry={type:"spring",stiffness:500,damping:25,restSpeed:10},ly=a=>({type:"spring",stiffness:550,damping:a===0?2*Math.sqrt(550):30,restSpeed:10}),cy={type:"keyframes",duration:.8},uy={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},dy=(a,{keyframes:s})=>s.length>2?cy:Gs.has(a)?a.startsWith("scale")?ly(s[1]):ry:uy,py=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function gy(a){for(const s in a)if(!py.has(s))return!0;return!1}const Ad=(a,s,r,o={},d,g)=>p=>{const b=Md(o,a)||{},_=b.delay||o.delay||0;let{elapsed:h=0}=o;h=h-jt(_);const f={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:s.getVelocity(),...b,delay:-h,onUpdate:k=>{s.set(k),b.onUpdate&&b.onUpdate(k)},onComplete:()=>{p(),b.onComplete&&b.onComplete()},name:a,motionValue:s,element:g?void 0:d};gy(b)||Object.assign(f,dy(a,f)),f.duration&&(f.duration=jt(f.duration)),f.repeatDelay&&(f.repeatDelay=jt(f.repeatDelay)),f.from!==void 0&&(f.keyframes[0]=f.from);let G=!1;if((f.type===!1||f.duration===0&&!f.repeatDelay)&&(Fu(f),f.delay===0&&(G=!0)),(Jn.instantAnimations||Jn.skipAnimations||d!=null&&d.shouldSkipAnimations||b.skipAnimations)&&(G=!0,Fu(f),f.delay=0),f.allowFlatten=!b.type&&!b.ease,G&&!g&&s.get()!==void 0){const k=wr(f.keyframes,b);if(k!==void 0){Ee.update(()=>{f.onUpdate(k),f.onComplete()});return}}return b.isSync?new Mr(f):new sy(f)},my=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function hy(a){const s=my.exec(a);if(!s)return[,];const[,r,o,d]=s;return[`--${r??o}`,d]}function N0(a,s,r=1){const[o,d]=hy(a);if(!o)return;const g=window.getComputedStyle(s).getPropertyValue(o);if(g){const p=g.trim();return Yf(p)?parseFloat(p):p}return fd(d)?N0(d,s,r+1):d}function fb(a){const s=[{},{}];return a==null||a.values.forEach((r,o)=>{s[0][o]=r.get(),s[1][o]=r.getVelocity()}),s}function Td(a,s,r,o){if(typeof s=="function"){const[d,g]=fb(o);s=s(r!==void 0?r:a.custom,d,g)}if(typeof s=="string"&&(s=a.variants&&a.variants[s]),typeof s=="function"){const[d,g]=fb(o);s=s(r!==void 0?r:a.custom,d,g)}return s}function Aa(a,s,r){const o=a.getProps();return Td(o,s,r!==void 0?r:o.custom,a)}const C0=new Set(["width","height","top","left","right","bottom",...xs]),Ku=a=>Array.isArray(a);function by(a,s,r){a.hasValue(s)?a.getValue(s).set(r):a.addValue(s,fs(r))}function fy(a){return Ku(a)?a[a.length-1]||0:a}function _y(a,s){const r=Aa(a,s);let{transitionEnd:o={},transition:d={},...g}=r||{};g={...g,...o};for(const p in g){const b=fy(g[p]);by(a,p,b)}}const it=a=>!!(a&&a.getVelocity);function xy(a){return!!(it(a)&&a.add)}function Xu(a,s){const r=a.getValue("willChange");if(xy(r))return r.add(s);if(!r&&Jn.WillChange){const o=new Jn.WillChange("auto");a.addValue("willChange",o),o.add(s)}}function Sd(a){return a.replace(/([A-Z])/g,s=>`-${s.toLowerCase()}`)}const Gy="framerAppearId",q0="data-"+Sd(Gy);function R0(a){return a.props[q0]}function ky({protectedKeys:a,needsAnimating:s},r){const o=a.hasOwnProperty(r)&&s[r]!==!0;return s[r]=!1,o}function z0(a,s,{delay:r=0,transitionOverride:o,type:d}={}){let{transition:g,transitionEnd:p,...b}=s;const _=a.getDefaultTransition();g=g?D0(g,_):_;const h=g==null?void 0:g.reduceMotion,f=g==null?void 0:g.skipAnimations;o&&(g=o);const G=[],k=d&&a.animationState&&a.animationState.getState()[d],y=g==null?void 0:g.path;y&&y.animateVisualElement(a,b,g,r,G);for(const M in b){const I=a.getValue(M,a.latestValues[M]??null),S=b[M];if(S===void 0||k&&ky(k,M))continue;const N={delay:r,...Md(g||{},M)};f&&(N.skipAnimations=!0);const X=I.get();if(X!==void 0&&!I.isAnimating()&&!Array.isArray(S)&&S===X&&!N.velocity){Ee.update(()=>I.set(S));continue}let z=!1;if(window.MotionHandoffAnimation){const H=R0(a);if(H){const C=window.MotionHandoffAnimation(H,M,Ee);C!==null&&(N.startTime=C,z=!0)}}Xu(a,M);const V=h??a.shouldReduceMotion;I.start(Ad(M,I,S,V&&C0.has(M)?{type:!1}:N,a,z));const Z=I.animation;Z&&G.push(Z)}if(p){const M=()=>Ee.update(()=>{p&&_y(a,p)});G.length?Promise.all(G).then(M):M()}return G}function Zu(a,s,r={}){var _;const o=Aa(a,s,r.type==="exit"?(_=a.presenceContext)==null?void 0:_.custom:void 0);let{transition:d=a.getDefaultTransition()||{}}=o||{};r.transitionOverride&&(d=r.transitionOverride);const g=o?()=>Promise.all(z0(a,o,r)):()=>Promise.resolve(),p=a.variantChildren&&a.variantChildren.size?(h=0)=>{const{delayChildren:f=0,staggerChildren:G,staggerDirection:k}=d;return yy(a,s,h,f,G,k,r)}:()=>Promise.resolve(),{when:b}=d;if(b){const[h,f]=b==="beforeChildren"?[g,p]:[p,g];return h().then(()=>f())}else return Promise.all([g(),p(r.delay)])}function yy(a,s,r=0,o=0,d=0,g=1,p){const b=[];for(const _ of a.variantChildren)_.notify("AnimationStart",s),b.push(Zu(_,s,{...p,delay:r+(typeof o=="function"?0:o)+w0(a.variantChildren,_,o,d,g)}).then(()=>_.notify("AnimationComplete",s)));return Promise.all(b)}function vy(a,s,r={}){a.notify("AnimationStart",s);let o;if(Array.isArray(s)){const d=s.map(g=>Zu(a,g,r));o=Promise.all(d)}else if(typeof s=="string")o=Zu(a,s,r);else{const d=typeof s=="function"?Aa(a,s,r.custom):s;o=Promise.all(z0(a,d,r))}return o.then(()=>{a.notify("AnimationComplete",s)})}const My={test:a=>a==="auto",parse:a=>a},L0=a=>s=>s.test(a),H0=[_s,ee,tn,yn,Q2,Y2,My],_b=a=>H0.find(L0(a));function Ay(a){return typeof a=="number"?a===0:a!==null?a==="none"||a==="0"||Jf(a):!0}const Ty=new Set(["brightness","contrast","saturate","opacity"]);function Sy(a){const[s,r]=a.slice(0,-1).split("(");if(s==="drop-shadow")return a;const[o]=r.match(_d)||[];if(!o)return a;const d=r.replace(o,"");let g=Ty.has(s)?1:0;return o!==r&&(g*=100),s+"("+g+d+")"}const Iy=/\b([a-z-]*)\(.*?\)/gu,Yu={...Xt,getAnimatableNone:a=>{const s=a.match(Iy);return s?s.map(Sy).join(" "):a}},Qu={...Xt,getAnimatableNone:a=>{const s=Xt.parse(a);return Xt.createTransformer(a)(s.map(o=>typeof o=="number"?0:typeof o=="object"?{...o,alpha:1}:o))}},xb={..._s,transform:Math.round},jy={rotate:yn,pathRotation:yn,rotateX:yn,rotateY:yn,rotateZ:yn,scale:$o,scaleX:$o,scaleY:$o,scaleZ:$o,skew:yn,skewX:yn,skewY:yn,distance:ee,translateX:ee,translateY:ee,translateZ:ee,x:ee,y:ee,z:ee,perspective:ee,transformPerspective:ee,opacity:Ai,originX:ib,originY:ib,originZ:ee},Ar={borderWidth:ee,borderTopWidth:ee,borderRightWidth:ee,borderBottomWidth:ee,borderLeftWidth:ee,borderRadius:ee,borderTopLeftRadius:ee,borderTopRightRadius:ee,borderBottomRightRadius:ee,borderBottomLeftRadius:ee,width:ee,maxWidth:ee,height:ee,maxHeight:ee,top:ee,right:ee,bottom:ee,left:ee,inset:ee,insetBlock:ee,insetBlockStart:ee,insetBlockEnd:ee,insetInline:ee,insetInlineStart:ee,insetInlineEnd:ee,padding:ee,paddingTop:ee,paddingRight:ee,paddingBottom:ee,paddingLeft:ee,paddingBlock:ee,paddingBlockStart:ee,paddingBlockEnd:ee,paddingInline:ee,paddingInlineStart:ee,paddingInlineEnd:ee,margin:ee,marginTop:ee,marginRight:ee,marginBottom:ee,marginLeft:ee,marginBlock:ee,marginBlockStart:ee,marginBlockEnd:ee,marginInline:ee,marginInlineStart:ee,marginInlineEnd:ee,fontSize:ee,backgroundPositionX:ee,backgroundPositionY:ee,...jy,zIndex:xb,fillOpacity:Ai,strokeOpacity:Ai,numOctaves:xb},Vy={...Ar,color:Ze,backgroundColor:Ze,outlineColor:Ze,fill:Ze,stroke:Ze,borderColor:Ze,borderTopColor:Ze,borderRightColor:Ze,borderBottomColor:Ze,borderLeftColor:Ze,filter:Yu,WebkitFilter:Yu,mask:Qu,WebkitMask:Qu},O0=a=>Vy[a],Ey=new Set([Yu,Qu]);function B0(a,s){let r=O0(a);return Ey.has(r)||(r=Xt),r.getAnimatableNone?r.getAnimatableNone(s):void 0}const wy=new Set(["auto","none","0"]);function Dy(a,s,r){let o=0,d;for(;o<a.length&&!d;){const g=a[o];typeof g=="string"&&!wy.has(g)&&bs(g).values.length&&(d=a[o]),o++}if(d&&r)for(const g of s)a[g]=B0(r,d)}class Ny extends vd{constructor(s,r,o,d,g){super(s,r,o,d,g,!0)}readKeyframes(){const{unresolvedKeyframes:s,element:r,name:o}=this;if(!r||!r.current)return;super.readKeyframes();for(let f=0;f<s.length;f++){let G=s[f];if(typeof G=="string"&&(G=G.trim(),fd(G))){const k=N0(G,r.current);k!==void 0&&(s[f]=k),f===s.length-1&&(this.finalKeyframe=G)}}if(this.resolveNoneKeyframes(),!C0.has(o)||s.length!==2)return;const[d,g]=s,p=_b(d),b=_b(g),_=sb(d),h=sb(g);if(_!==h&&Qn[o]){this.needsMeasurement=!0;return}if(p!==b)if(gb(p)&&gb(b))for(let f=0;f<s.length;f++){const G=s[f];typeof G=="string"&&(s[f]=parseFloat(G))}else Qn[o]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:s,name:r}=this,o=[];for(let d=0;d<s.length;d++)(s[d]===null||Ay(s[d]))&&o.push(d);o.length&&Dy(s,o,r)}measureInitialState(){const{element:s,unresolvedKeyframes:r,name:o}=this;if(!s||!s.current)return;o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Qn[o](s.measureViewportBox(),window.getComputedStyle(s.current)),r[0]=this.measuredOrigin;const d=r[r.length-1];d!==void 0&&s.getValue(o,d).jump(d,!1)}measureEndState(){var b;const{element:s,name:r,unresolvedKeyframes:o}=this;if(!s||!s.current)return;const d=s.getValue(r);d&&d.jump(this.measuredOrigin,!1);const g=o.length-1,p=o[g];o[g]=Qn[r](s.measureViewportBox(),window.getComputedStyle(s.current)),p!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=p),(b=this.removedTransforms)!=null&&b.length&&this.removedTransforms.forEach(([_,h])=>{s.getValue(_).set(h)}),this.resolveNoneKeyframes()}}function U0(a,s,r){if(a==null)return[];if(a instanceof EventTarget)return[a];if(typeof a=="string"){let o=document;const d=(r==null?void 0:r[a])??o.querySelectorAll(a);return d?Array.from(d):[]}return Array.from(a).filter(o=>o!=null)}const Ju=(a,s)=>s&&typeof a=="number"?s.transform(a):a;function lr(a){return Qf(a)&&"offsetHeight"in a&&!("ownerSVGElement"in a)}const{schedule:Id}=u0(queueMicrotask,!1),Kt={x:!1,y:!1};function P0(){return Kt.x||Kt.y}function Cy(a){return a==="x"||a==="y"?Kt[a]?null:(Kt[a]=!0,()=>{Kt[a]=!1}):Kt.x||Kt.y?null:(Kt.x=Kt.y=!0,()=>{Kt.x=Kt.y=!1})}function F0(a,s){const r=U0(a),o=new AbortController,d={passive:!0,...s,signal:o.signal};return[r,d,()=>o.abort()]}function qy(a){return!(a.pointerType==="touch"||P0())}function Ry(a,s,r={}){const[o,d,g]=F0(a,r);return o.forEach(p=>{let b=!1,_=!1,h;const f=()=>{p.removeEventListener("pointerleave",M)},G=S=>{h&&(h(S),h=void 0),f()},k=S=>{b=!1,window.removeEventListener("pointerup",k),window.removeEventListener("pointercancel",k),_&&(_=!1,G(S))},y=()=>{b=!0,window.addEventListener("pointerup",k,d),window.addEventListener("pointercancel",k,d)},M=S=>{if(S.pointerType!=="touch"){if(b){_=!0;return}G(S)}},I=S=>{if(!qy(S))return;_=!1;const N=s(p,S);typeof N=="function"&&(h=N,p.addEventListener("pointerleave",M,d))};p.addEventListener("pointerenter",I,d),p.addEventListener("pointerdown",y,d)}),g}const K0=(a,s)=>s?a===s?!0:K0(a,s.parentElement):!1,jd=a=>a.pointerType==="mouse"?typeof a.button!="number"||a.button<=0:a.isPrimary!==!1,zy=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Ly(a){return zy.has(a.tagName)||a.isContentEditable===!0}const Hy=new Set(["INPUT","SELECT","TEXTAREA"]);function Oy(a){return Hy.has(a.tagName)||a.isContentEditable===!0}const cr=new WeakSet;function Gb(a){return s=>{s.key==="Enter"&&a(s)}}function hu(a,s){a.dispatchEvent(new PointerEvent("pointer"+s,{isPrimary:!0,bubbles:!0}))}const By=(a,s)=>{const r=a.currentTarget;if(!r)return;const o=Gb(()=>{if(cr.has(r))return;hu(r,"down");const d=Gb(()=>{hu(r,"up")}),g=()=>hu(r,"cancel");r.addEventListener("keyup",d,s),r.addEventListener("blur",g,s)});r.addEventListener("keydown",o,s),r.addEventListener("blur",()=>r.removeEventListener("keydown",o),s)};function kb(a){return jd(a)&&!P0()}const yb=new WeakSet;function Uy(a,s,r={}){const[o,d,g]=F0(a,r),p=b=>{const _=b.currentTarget;if(!kb(b)||yb.has(b))return;cr.add(_),r.stopPropagation&&yb.add(b);const h=s(_,b),f=(y,M)=>{window.removeEventListener("pointerup",G),window.removeEventListener("pointercancel",k),cr.has(_)&&cr.delete(_),kb(y)&&typeof h=="function"&&h(y,{success:M})},G=y=>{f(y,_===window||_===document||r.useGlobalTarget||K0(_,y.target))},k=y=>{f(y,!1)};window.addEventListener("pointerup",G,d),window.addEventListener("pointercancel",k,d)};return o.forEach(b=>{(r.useGlobalTarget?window:b).addEventListener("pointerdown",p,d),lr(b)&&(b.addEventListener("focus",h=>By(h,d)),!Ly(b)&&!b.hasAttribute("tabindex")&&(b.tabIndex=0))}),g}function Vd(a){return Qf(a)&&"ownerSVGElement"in a}const ur=new WeakMap;let Zn;const X0=(a,s,r)=>(o,d)=>d&&d[0]?d[0][a+"Size"]:Vd(o)&&"getBBox"in o?o.getBBox()[s]:o[r],Py=X0("inline","width","offsetWidth"),Fy=X0("block","height","offsetHeight");function Ky({target:a,borderBoxSize:s}){var r;(r=ur.get(a))==null||r.forEach(o=>{o(a,{get width(){return Py(a,s)},get height(){return Fy(a,s)}})})}function Xy(a){a.forEach(Ky)}function Zy(){typeof ResizeObserver>"u"||(Zn=new ResizeObserver(Xy))}function Yy(a,s){Zn||Zy();const r=U0(a);return r.forEach(o=>{let d=ur.get(o);d||(d=new Set,ur.set(o,d)),d.add(s),Zn==null||Zn.observe(o)}),()=>{r.forEach(o=>{const d=ur.get(o);d==null||d.delete(s),d!=null&&d.size||Zn==null||Zn.unobserve(o)})}}const dr=new Set;let ms;function Qy(){ms=()=>{const a={get width(){return window.innerWidth},get height(){return window.innerHeight}};dr.forEach(s=>s(a))},window.addEventListener("resize",ms)}function Jy(a){return dr.add(a),ms||Qy(),()=>{dr.delete(a),!dr.size&&typeof ms=="function"&&(window.removeEventListener("resize",ms),ms=void 0)}}function vb(a,s){return typeof a=="function"?Jy(a):Yy(a,s)}function Wy(a){return Vd(a)&&a.tagName==="svg"}const $y=[...H0,Ze,Xt],ev=a=>$y.find(L0(a)),Mb=()=>({translate:0,scale:1,origin:0,originPoint:0}),hs=()=>({x:Mb(),y:Mb()}),Ab=()=>({min:0,max:0}),Qe=()=>({x:Ab(),y:Ab()}),tv=new WeakMap;function Dr(a){return a!==null&&typeof a=="object"&&typeof a.start=="function"}function Ti(a){return typeof a=="string"||Array.isArray(a)}const Ed=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],wd=["initial",...Ed];function Nr(a){return Dr(a.animate)||wd.some(s=>Ti(a[s]))}function Z0(a){return!!(Nr(a)||a.variants)}function nv(a,s,r){for(const o in s){const d=s[o],g=r[o];if(it(d))a.addValue(o,d);else if(it(g))a.addValue(o,fs(d,{owner:a}));else if(g!==d)if(a.hasValue(o)){const p=a.getValue(o);p.liveStyle===!0?p.jump(d):p.hasAnimated||p.set(d)}else{const p=a.getStaticValue(o);a.addValue(o,fs(p!==void 0?p:d,{owner:a}))}}for(const o in r)s[o]===void 0&&a.removeValue(o);return s}const Wu={current:null},Y0={current:!1},av=typeof window<"u";function sv(){if(Y0.current=!0,!!av)if(window.matchMedia){const a=window.matchMedia("(prefers-reduced-motion)"),s=()=>Wu.current=a.matches;a.addEventListener("change",s),s()}else Wu.current=!1}const Tb=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Tr={};function Q0(a){Tr=a}function iv(){return Tr}class ov{scrapeMotionValuesFromProps(s,r,o){return{}}constructor({parent:s,props:r,presenceContext:o,reducedMotionConfig:d,skipAnimations:g,blockInitialAnimation:p,visualState:b},_={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=vd,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const y=ct.now();this.renderScheduledAt<y&&(this.renderScheduledAt=y,Ee.render(this.render,!1,!0))};const{latestValues:h,renderState:f}=b;this.latestValues=h,this.baseTarget={...h},this.initialValues=r.initial?{...h}:{},this.renderState=f,this.parent=s,this.props=r,this.presenceContext=o,this.depth=s?s.depth+1:0,this.reducedMotionConfig=d,this.skipAnimationsConfig=g,this.options=_,this.blockInitialAnimation=!!p,this.isControllingVariants=Nr(r),this.isVariantNode=Z0(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(s&&s.current);const{willChange:G,...k}=this.scrapeMotionValuesFromProps(r,{},this);for(const y in k){const M=k[y];h[y]!==void 0&&it(M)&&M.set(h[y])}}mount(s){var r,o;if(this.hasBeenMounted)for(const d in this.initialValues)(r=this.values.get(d))==null||r.jump(this.initialValues[d]),this.latestValues[d]=this.initialValues[d];this.current=s,tv.set(s,this),this.projection&&!this.projection.instance&&this.projection.mount(s),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((d,g)=>this.bindToMotionValue(g,d)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Y0.current||sv(),this.shouldReduceMotion=Wu.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(o=this.parent)==null||o.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var s;this.projection&&this.projection.unmount(),Wn(this.notifyUpdate),Wn(this.render),this.valueSubscriptions.forEach(r=>r()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(s=this.parent)==null||s.removeChild(this);for(const r in this.events)this.events[r].clear();for(const r in this.features){const o=this.features[r];o&&(o.unmount(),o.isMounted=!1)}this.current=null}addChild(s){this.children.add(s),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(s)}removeChild(s){this.children.delete(s),this.enteringChildren&&this.enteringChildren.delete(s)}bindToMotionValue(s,r){if(this.valueSubscriptions.has(s)&&this.valueSubscriptions.get(s)(),r.accelerate&&E0.has(s)&&this.current instanceof HTMLElement){const{factory:p,keyframes:b,times:_,ease:h,duration:f}=r.accelerate,G=new j0({element:this.current,name:s,keyframes:b,times:_,ease:h,duration:jt(f)}),k=p(G);this.valueSubscriptions.set(s,()=>{k(),G.cancel()});return}const o=Gs.has(s);o&&this.onBindTransform&&this.onBindTransform();const d=r.on("change",p=>{this.latestValues[s]=p,this.props.onUpdate&&Ee.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let g;typeof window<"u"&&window.MotionCheckAppearSync&&(g=window.MotionCheckAppearSync(this,s,r)),this.valueSubscriptions.set(s,()=>{d(),g&&g()})}sortNodePosition(s){return!this.current||!this.sortInstanceNodePosition||this.type!==s.type?0:this.sortInstanceNodePosition(this.current,s.current)}updateFeatures(){let s="animation";for(s in Tr){const r=Tr[s];if(!r)continue;const{isEnabled:o,Feature:d}=r;if(!this.features[s]&&d&&o(this.props)&&(this.features[s]=new d(this)),this.features[s]){const g=this.features[s];g.isMounted?g.update():(g.mount(),g.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Qe()}getStaticValue(s){return this.latestValues[s]}setStaticValue(s,r){this.latestValues[s]=r}update(s,r){(s.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=s,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let o=0;o<Tb.length;o++){const d=Tb[o];this.propEventSubscriptions[d]&&(this.propEventSubscriptions[d](),delete this.propEventSubscriptions[d]);const g="on"+d,p=s[g];p&&(this.propEventSubscriptions[d]=this.on(d,p))}this.prevMotionValues=nv(this,this.scrapeMotionValuesFromProps(s,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(s){return this.props.variants?this.props.variants[s]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(s){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(s),()=>r.variantChildren.delete(s)}addValue(s,r){const o=this.values.get(s);r!==o&&(o&&this.removeValue(s),this.bindToMotionValue(s,r),this.values.set(s,r),this.latestValues[s]=r.get())}removeValue(s){this.values.delete(s);const r=this.valueSubscriptions.get(s);r&&(r(),this.valueSubscriptions.delete(s)),delete this.latestValues[s],this.removeValueFromRenderState(s,this.renderState)}hasValue(s){return this.values.has(s)}getValue(s,r){if(this.props.values&&this.props.values[s])return this.props.values[s];let o=this.values.get(s);return o===void 0&&r!==void 0&&(o=fs(r===null?void 0:r,{owner:this}),this.addValue(s,o)),o}readValue(s,r){let o=this.latestValues[s]!==void 0||!this.current?this.latestValues[s]:this.getBaseTargetFromProps(this.props,s)??this.readValueFromInstance(this.current,s,this.options);return o!=null&&(typeof o=="string"&&(Yf(o)||Jf(o))?o=parseFloat(o):!ev(o)&&Xt.test(r)&&(o=B0(s,r)),this.setBaseTarget(s,it(o)?o.get():o)),it(o)?o.get():o}setBaseTarget(s,r){this.baseTarget[s]=r}getBaseTarget(s){var g;const{initial:r}=this.props;let o;if(typeof r=="string"||typeof r=="object"){const p=Td(this.props,r,(g=this.presenceContext)==null?void 0:g.custom);p&&(o=p[s])}if(r&&o!==void 0)return o;const d=this.getBaseTargetFromProps(this.props,s);return d!==void 0&&!it(d)?d:this.initialValues[s]!==void 0&&o===void 0?void 0:this.baseTarget[s]}on(s,r){return this.events[s]||(this.events[s]=new md),this.events[s].add(r)}notify(s,...r){this.events[s]&&this.events[s].notify(...r)}scheduleRenderMicrotask(){Id.render(this.render)}}class J0 extends ov{constructor(){super(...arguments),this.KeyframeResolver=Ny}sortInstanceNodePosition(s,r){return s.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(s,r){const o=s.style;return o?o[r]:void 0}removeValueFromRenderState(s,{vars:r,style:o}){delete r[s],delete o[s]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:s}=this.props;it(s)&&(this.childSubscription=s.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}}class $n{constructor(s){this.isMounted=!1,this.node=s}update(){}}function W0({top:a,left:s,right:r,bottom:o}){return{x:{min:s,max:r},y:{min:a,max:o}}}function rv({x:a,y:s}){return{top:s.min,right:a.max,bottom:s.max,left:a.min}}function lv(a,s){if(!s)return a;const r=s({x:a.left,y:a.top}),o=s({x:a.right,y:a.bottom});return{top:r.y,left:r.x,bottom:o.y,right:o.x}}function bu(a){return a===void 0||a===1}function $u({scale:a,scaleX:s,scaleY:r}){return!bu(a)||!bu(s)||!bu(r)}function ka(a){return $u(a)||$0(a)||a.z||a.rotate||a.rotateX||a.rotateY||a.skewX||a.skewY}function $0(a){return Sb(a.x)||Sb(a.y)}function Sb(a){return a&&a!=="0%"}function Sr(a,s,r){const o=a-r,d=s*o;return r+d}function Ib(a,s,r,o,d){return d!==void 0&&(a=Sr(a,d,o)),Sr(a,r,o)+s}function ed(a,s=0,r=1,o,d){a.min=Ib(a.min,s,r,o,d),a.max=Ib(a.max,s,r,o,d)}function e_(a,{x:s,y:r}){ed(a.x,s.translate,s.scale,s.originPoint),ed(a.y,r.translate,r.scale,r.originPoint)}const jb=.999999999999,Vb=1.0000000000001;function cv(a,s,r,o=!1){var b;const d=r.length;if(!d)return;s.x=s.y=1;let g,p;for(let _=0;_<d;_++){g=r[_],p=g.projectionDelta;const{visualElement:h}=g.options;h&&h.props.style&&h.props.style.display==="contents"||(o&&g.options.layoutScroll&&g.scroll&&g!==g.root&&(en(a.x,-g.scroll.offset.x),en(a.y,-g.scroll.offset.y)),p&&(s.x*=p.x.scale,s.y*=p.y.scale,e_(a,p)),o&&ka(g.latestValues)&&pr(a,g.latestValues,(b=g.layout)==null?void 0:b.layoutBox))}s.x<Vb&&s.x>jb&&(s.x=1),s.y<Vb&&s.y>jb&&(s.y=1)}function en(a,s){a.min+=s,a.max+=s}function Eb(a,s,r,o,d=.5){const g=Ve(a.min,a.max,d);ed(a,s,r,g,o)}function wb(a,s){return typeof a=="string"?parseFloat(a)/100*(s.max-s.min):a}function pr(a,s,r){const o=r??a;Eb(a.x,wb(s.x,o.x),s.scaleX,s.scale,s.originX),Eb(a.y,wb(s.y,o.y),s.scaleY,s.scale,s.originY)}function t_(a,s){return W0(lv(a.getBoundingClientRect(),s))}function uv(a,s,r){const o=t_(a,r),{scroll:d}=s;return d&&(en(o.x,d.offset.x),en(o.y,d.offset.y)),o}const dv={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},pv=xs.length;function gv(a,s,r){let o="",d=!0;for(let p=0;p<pv;p++){const b=xs[p],_=a[b];if(_===void 0)continue;let h=!0;if(typeof _=="number")h=_===(b.startsWith("scale")?1:0);else{const f=parseFloat(_);h=b.startsWith("scale")?f===1:f===0}if(!h||r){const f=Ju(_,Ar[b]);if(!h){d=!1;const G=dv[b]||b;o+=`${G}(${f}) `}r&&(s[b]=f)}}const g=a.pathRotation;return g&&(d=!1,o+=`rotate(${Ju(g,Ar.pathRotation)}) `),o=o.trim(),r?o=r(s,d?"":o):d&&(o="none"),o}function Dd(a,s,r){const{style:o,vars:d,transformOrigin:g}=a;let p=!1,b=!1;for(const _ in s){const h=s[_];if(Gs.has(_)){p=!0;continue}else if(p0(_)){d[_]=h;continue}else{const f=Ju(h,Ar[_]);_.startsWith("origin")?(b=!0,g[_]=f):o[_]=f}}if(s.transform||(p||r?o.transform=gv(s,a.transform,r):o.transform&&(o.transform="none")),b){const{originX:_="50%",originY:h="50%",originZ:f=0}=g;o.transformOrigin=`${_} ${h} ${f}`}}function n_(a,{style:s,vars:r},o,d){const g=a.style;let p;for(p in s)g[p]=s[p];d==null||d.applyProjectionStyles(g,o);for(p in r)g.setProperty(p,r[p])}function Db(a,s){return s.max===s.min?0:a/(s.max-s.min)*100}const bi={correct:(a,s)=>{if(!s.target)return a;if(typeof a=="string")if(ee.test(a))a=parseFloat(a);else return a;const r=Db(a,s.target.x),o=Db(a,s.target.y);return`${r}% ${o}%`}},mv={correct:(a,{treeScale:s,projectionDelta:r})=>{const o=a,d=Xt.parse(a);if(d.length>5)return o;const g=Xt.createTransformer(a),p=typeof d[0]!="number"?1:0,b=r.x.scale*s.x,_=r.y.scale*s.y;d[0+p]/=b,d[1+p]/=_;const h=Ve(b,_,.5);return typeof d[2+p]=="number"&&(d[2+p]/=h),typeof d[3+p]=="number"&&(d[3+p]/=h),g(d)}},td={borderRadius:{...bi,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:bi,borderTopRightRadius:bi,borderBottomLeftRadius:bi,borderBottomRightRadius:bi,boxShadow:mv};function a_(a,{layout:s,layoutId:r}){return Gs.has(a)||a.startsWith("origin")||(s||r!==void 0)&&(!!td[a]||a==="opacity")}function Nd(a,s,r){var p;const o=a.style,d=s==null?void 0:s.style,g={};if(!o)return g;for(const b in o)(it(o[b])||d&&it(d[b])||a_(b,a)||((p=r==null?void 0:r.getValue(b))==null?void 0:p.liveStyle)!==void 0)&&(g[b]=o[b]);return g}function hv(a){return window.getComputedStyle(a)}class bv extends J0{constructor(){super(...arguments),this.type="html",this.renderInstance=n_}readValueFromInstance(s,r){var o;if(Gs.has(r))return(o=this.projection)!=null&&o.isProjecting?Hu(r):qk(s,r);{const d=hv(s),g=(p0(r)?d.getPropertyValue(r):d[r])||0;return typeof g=="string"?g.trim():g}}measureInstanceViewportBox(s,{transformPagePoint:r}){return t_(s,r)}build(s,r,o){Dd(s,r,o.transformTemplate)}scrapeMotionValuesFromProps(s,r,o){return Nd(s,r,o)}}const fv={offset:"stroke-dashoffset",array:"stroke-dasharray"},_v={offset:"strokeDashoffset",array:"strokeDasharray"};function xv(a,s,r=1,o=0,d=!0){a.pathLength=1;const g=d?fv:_v;a[g.offset]=`${-o}`,a[g.array]=`${s} ${r}`}const Gv=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function s_(a,{attrX:s,attrY:r,attrScale:o,pathLength:d,pathSpacing:g=1,pathOffset:p=0,...b},_,h,f){if(Dd(a,b,h),_){a.style.viewBox&&(a.attrs.viewBox=a.style.viewBox);return}a.attrs=a.style,a.style={};const{attrs:G,style:k}=a;G.transform&&(k.transform=G.transform,delete G.transform),(k.transform||G.transformOrigin)&&(k.transformOrigin=G.transformOrigin??"50% 50%",delete G.transformOrigin),k.transform&&(k.transformBox=(f==null?void 0:f.transformBox)??"fill-box",delete G.transformBox);for(const y of Gv)G[y]!==void 0&&(k[y]=G[y],delete G[y]);s!==void 0&&(G.x=s),r!==void 0&&(G.y=r),o!==void 0&&(G.scale=o),d!==void 0&&xv(G,d,g,p,!1)}const i_=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),o_=a=>typeof a=="string"&&a.toLowerCase()==="svg";function kv(a,s,r,o){n_(a,s,void 0,o);for(const d in s.attrs)a.setAttribute(i_.has(d)?d:Sd(d),s.attrs[d])}function r_(a,s,r){const o=Nd(a,s,r);for(const d in a)if(it(a[d])||it(s[d])){const g=xs.indexOf(d)!==-1?"attr"+d.charAt(0).toUpperCase()+d.substring(1):d;o[g]=a[d]}return o}class yv extends J0{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Qe}getBaseTargetFromProps(s,r){return s[r]}readValueFromInstance(s,r){if(Gs.has(r)){const o=O0(r);return o&&o.default||0}return r=i_.has(r)?r:Sd(r),s.getAttribute(r)}scrapeMotionValuesFromProps(s,r,o){return r_(s,r,o)}build(s,r,o){s_(s,r,this.isSVGTag,o.transformTemplate,o.style)}renderInstance(s,r,o,d){kv(s,r,o,d)}mount(s){this.isSVGTag=o_(s.tagName),super.mount(s)}}const vv=wd.length;function l_(a){if(!a)return;if(!a.isControllingVariants){const r=a.parent?l_(a.parent)||{}:{};return a.props.initial!==void 0&&(r.initial=a.props.initial),r}const s={};for(let r=0;r<vv;r++){const o=wd[r],d=a.props[o];(Ti(d)||d===!1)&&(s[o]=d)}return s}function c_(a,s){if(!Array.isArray(s))return!1;const r=s.length;if(r!==a.length)return!1;for(let o=0;o<r;o++)if(s[o]!==a[o])return!1;return!0}const Mv=[...Ed].reverse(),Av=Ed.length;function Tv(a){return s=>Promise.all(s.map(({animation:r,options:o})=>vy(a,r,o)))}function Sv(a){let s=Tv(a),r=Nb(),o=!0,d=!1;const g=h=>(f,G)=>{var y;const k=Aa(a,G,h==="exit"?(y=a.presenceContext)==null?void 0:y.custom:void 0);if(k){const{transition:M,transitionEnd:I,...S}=k;f={...f,...S,...I}}return f};function p(h){s=h(a)}function b(h){const{props:f}=a,G=l_(a.parent)||{},k=[],y=new Set;let M={},I=1/0;for(let N=0;N<Av;N++){const X=Mv[N],z=r[X],V=f[X]!==void 0?f[X]:G[X],Z=Ti(V),H=X===h?z.isActive:null;H===!1&&(I=N);let C=V===G[X]&&V!==f[X]&&Z;if(C&&(o||d)&&a.manuallyAnimateOnMount&&(C=!1),z.protectedKeys={...M},!z.isActive&&H===null||!V&&!z.prevProp||Dr(V)||typeof V=="boolean")continue;if(X==="exit"&&z.isActive&&H!==!0){z.prevResolvedValues&&(M={...M,...z.prevResolvedValues});continue}const P=Iv(z.prevProp,V);let K=P||X===h&&z.isActive&&!C&&Z||N>I&&Z,Y=!1;const ie=Array.isArray(V)?V:[V];let pe=ie.reduce(g(X),{});H===!1&&(pe={});const{prevResolvedValues:Ue={}}=z,qe={...Ue,...pe},Ne=W=>{K=!0,y.has(W)&&(Y=!0,y.delete(W)),z.needsAnimating[W]=!0;const ue=a.getValue(W);ue&&(ue.liveStyle=!1)};for(const W in qe){const ue=pe[W],_e=Ue[W];if(M.hasOwnProperty(W))continue;let T=!1;Ku(ue)&&Ku(_e)?T=!c_(ue,_e)||P:T=ue!==_e,T?ue!=null?Ne(W):y.add(W):ue!==void 0&&y.has(W)?Ne(W):z.protectedKeys[W]=!0}z.prevProp=V,z.prevResolvedValues=pe,z.isActive&&(M={...M,...pe}),(o||d)&&a.blockInitialAnimation&&(K=!1);const R=C&&P;K&&(!R||Y)&&k.push(...ie.map(W=>{const ue={type:X};if(typeof W=="string"&&(o||d)&&!R&&a.manuallyAnimateOnMount&&a.parent){const{parent:_e}=a,T=Aa(_e,W);if(_e.enteringChildren&&T){const{delayChildren:F}=T.transition||{};ue.delay=w0(_e.enteringChildren,a,F)}}return{animation:W,options:ue}}))}if(y.size){const N={};if(typeof f.initial!="boolean"){const X=Aa(a,Array.isArray(f.initial)?f.initial[0]:f.initial);X&&X.transition&&(N.transition=X.transition)}y.forEach(X=>{const z=a.getBaseTarget(X),V=a.getValue(X);V&&(V.liveStyle=!0),N[X]=z??null}),k.push({animation:N})}let S=!!k.length;return o&&(f.initial===!1||f.initial===f.animate)&&!a.manuallyAnimateOnMount&&(S=!1),o=!1,d=!1,S?s(k):Promise.resolve()}function _(h,f){var k;if(r[h].isActive===f)return Promise.resolve();(k=a.variantChildren)==null||k.forEach(y=>{var M;return(M=y.animationState)==null?void 0:M.setActive(h,f)}),r[h].isActive=f;const G=b(h);for(const y in r)r[y].protectedKeys={};return G}return{animateChanges:b,setActive:_,setAnimateFunction:p,getState:()=>r,reset:()=>{r=Nb(),d=!0}}}function Iv(a,s){return typeof s=="string"?s!==a:Array.isArray(s)?!c_(s,a):!1}function Ga(a=!1){return{isActive:a,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Nb(){return{animate:Ga(!0),whileInView:Ga(),whileHover:Ga(),whileTap:Ga(),whileDrag:Ga(),whileFocus:Ga(),exit:Ga()}}function nd(a,s){a.min=s.min,a.max=s.max}function Ft(a,s){nd(a.x,s.x),nd(a.y,s.y)}function Cb(a,s){a.translate=s.translate,a.scale=s.scale,a.originPoint=s.originPoint,a.origin=s.origin}const u_=1e-4,jv=1-u_,Vv=1+u_,d_=.01,Ev=0-d_,wv=0+d_;function ut(a){return a.max-a.min}function Dv(a,s,r){return Math.abs(a-s)<=r}function qb(a,s,r,o=.5){a.origin=o,a.originPoint=Ve(s.min,s.max,a.origin),a.scale=ut(r)/ut(s),a.translate=Ve(r.min,r.max,a.origin)-a.originPoint,(a.scale>=jv&&a.scale<=Vv||isNaN(a.scale))&&(a.scale=1),(a.translate>=Ev&&a.translate<=wv||isNaN(a.translate))&&(a.translate=0)}function ki(a,s,r,o){qb(a.x,s.x,r.x,o?o.originX:void 0),qb(a.y,s.y,r.y,o?o.originY:void 0)}function Rb(a,s,r,o=0){const d=o?Ve(r.min,r.max,o):r.min;a.min=d+s.min,a.max=a.min+ut(s)}function Nv(a,s,r,o){Rb(a.x,s.x,r.x,o==null?void 0:o.x),Rb(a.y,s.y,r.y,o==null?void 0:o.y)}function zb(a,s,r,o=0){const d=o?Ve(r.min,r.max,o):r.min;a.min=s.min-d,a.max=a.min+ut(s)}function Ir(a,s,r,o){zb(a.x,s.x,r.x,o==null?void 0:o.x),zb(a.y,s.y,r.y,o==null?void 0:o.y)}function Lb(a,s,r,o,d){return a-=s,a=Sr(a,1/r,o),d!==void 0&&(a=Sr(a,1/d,o)),a}function Cv(a,s=0,r=1,o=.5,d,g=a,p=a){if(tn.test(s)&&(s=parseFloat(s),s=Ve(p.min,p.max,s/100)-p.min),typeof s!="number")return;let b=Ve(g.min,g.max,o);a===g&&(b-=s),a.min=Lb(a.min,s,r,b,d),a.max=Lb(a.max,s,r,b,d)}function Hb(a,s,[r,o,d],g,p){Cv(a,s[r],s[o],s[d],s.scale,g,p)}const qv=["x","scaleX","originX"],Rv=["y","scaleY","originY"];function Ob(a,s,r,o){Hb(a.x,s,qv,r?r.x:void 0,o?o.x:void 0),Hb(a.y,s,Rv,r?r.y:void 0,o?o.y:void 0)}function Bb(a){return a.translate===0&&a.scale===1}function p_(a){return Bb(a.x)&&Bb(a.y)}function Ub(a,s){return a.min===s.min&&a.max===s.max}function zv(a,s){return Ub(a.x,s.x)&&Ub(a.y,s.y)}function Pb(a,s){return Math.round(a.min)===Math.round(s.min)&&Math.round(a.max)===Math.round(s.max)}function g_(a,s){return Pb(a.x,s.x)&&Pb(a.y,s.y)}function Fb(a){return ut(a.x)/ut(a.y)}function Kb(a,s){return a.translate===s.translate&&a.scale===s.scale&&a.originPoint===s.originPoint}function Wt(a){return[a("x"),a("y")]}function Lv(a,s,r){let o="";const d=a.x.translate/s.x,g=a.y.translate/s.y,p=(r==null?void 0:r.z)||0;if((d||g||p)&&(o=`translate3d(${d}px, ${g}px, ${p}px) `),(s.x!==1||s.y!==1)&&(o+=`scale(${1/s.x}, ${1/s.y}) `),r){const{transformPerspective:h,rotate:f,pathRotation:G,rotateX:k,rotateY:y,skewX:M,skewY:I}=r;h&&(o=`perspective(${h}px) ${o}`),f&&(o+=`rotate(${f}deg) `),G&&(o+=`rotate(${G}deg) `),k&&(o+=`rotateX(${k}deg) `),y&&(o+=`rotateY(${y}deg) `),M&&(o+=`skewX(${M}deg) `),I&&(o+=`skewY(${I}deg) `)}const b=a.x.scale*s.x,_=a.y.scale*s.y;return(b!==1||_!==1)&&(o+=`scale(${b}, ${_})`),o||"none"}const m_=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],Hv=m_.length,Xb=a=>typeof a=="string"?parseFloat(a):a,Zb=a=>typeof a=="number"||ee.test(a);function Ov(a,s,r,o,d,g){d?(a.opacity=Ve(0,r.opacity??1,Bv(o)),a.opacityExit=Ve(s.opacity??1,0,Uv(o))):g&&(a.opacity=Ve(s.opacity??1,r.opacity??1,o));for(let p=0;p<Hv;p++){const b=m_[p];let _=Yb(s,b),h=Yb(r,b);if(_===void 0&&h===void 0)continue;_||(_=0),h||(h=0),_===0||h===0||Zb(_)===Zb(h)?(a[b]=Math.max(Ve(Xb(_),Xb(h),o),0),(tn.test(h)||tn.test(_))&&(a[b]+="%")):a[b]=h}(s.rotate||r.rotate)&&(a.rotate=Ve(s.rotate||0,r.rotate||0,o))}function Yb(a,s){return a[s]!==void 0?a[s]:a.borderRadius}const Bv=h_(0,.5,o0),Uv=h_(.5,.95,Ot);function h_(a,s,r){return o=>o<a?0:o>s?1:r(Mi(a,s,o))}function Pv(a,s,r){const o=it(a)?a:fs(a);return o.start(Ad("",o,s,r)),o.animation}function Si(a,s,r,o={passive:!0}){return a.addEventListener(s,r,o),()=>a.removeEventListener(s,r)}const Fv=(a,s)=>a.depth-s.depth;class Kv{constructor(){this.children=[],this.isDirty=!1}add(s){pd(this.children,s),this.isDirty=!0}remove(s){Gr(this.children,s),this.isDirty=!0}forEach(s){this.isDirty&&this.children.sort(Fv),this.isDirty=!1,this.children.forEach(s)}}function Xv(a,s){const r=ct.now(),o=({timestamp:d})=>{const g=d-r;g>=s&&(Wn(o),a(g-s))};return Ee.setup(o,!0),()=>Wn(o)}function gr(a){return it(a)?a.get():a}class Zv{constructor(){this.members=[]}add(s){pd(this.members,s);for(let r=this.members.length-1;r>=0;r--){const o=this.members[r];if(o===s||o===this.lead||o===this.prevLead)continue;const d=o.instance;(!d||d.isConnected===!1)&&!o.snapshot&&(Gr(this.members,o),o.unmount())}s.scheduleRender()}remove(s){if(Gr(this.members,s),s===this.prevLead&&(this.prevLead=void 0),s===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(s){var r;for(let o=this.members.indexOf(s)-1;o>=0;o--){const d=this.members[o];if(d.isPresent!==!1&&((r=d.instance)==null?void 0:r.isConnected)!==!1)return this.promote(d),!0}return!1}promote(s,r){var d;const o=this.lead;if(s!==o&&(this.prevLead=o,this.lead=s,s.show(),o)){o.updateSnapshot(),s.scheduleRender();const{layoutDependency:g}=o.options,{layoutDependency:p}=s.options;(g===void 0||g!==p)&&(s.resumeFrom=o,r&&(o.preserveOpacity=!0),o.snapshot&&(s.snapshot=o.snapshot,s.snapshot.latestValues=o.animationValues||o.latestValues),(d=s.root)!=null&&d.isUpdating&&(s.isLayoutDirty=!0)),s.options.crossfade===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(s=>{var r,o,d,g,p;(o=(r=s.options).onExitComplete)==null||o.call(r),(p=(d=s.resumingFrom)==null?void 0:(g=d.options).onExitComplete)==null||p.call(g)})}scheduleRender(){this.members.forEach(s=>s.instance&&s.scheduleRender(!1))}removeLeadSnapshot(){var s;(s=this.lead)!=null&&s.snapshot&&(this.lead.snapshot=void 0)}}const mr={hasAnimatedSinceResize:!0,hasEverUpdated:!1},fu=["","X","Y","Z"],Yv=1e3;let Qv=0;function _u(a,s,r,o){const{latestValues:d}=s;d[a]&&(r[a]=d[a],s.setStaticValue(a,0),o&&(o[a]=0))}function b_(a){if(a.hasCheckedOptimisedAppear=!0,a.root===a)return;const{visualElement:s}=a.options;if(!s)return;const r=R0(s);if(window.MotionHasOptimisedAnimation(r,"transform")){const{layout:d,layoutId:g}=a.options;window.MotionCancelOptimisedAnimation(r,"transform",Ee,!(d||g))}const{parent:o}=a;o&&!o.hasCheckedOptimisedAppear&&b_(o)}function f_({attachResizeListener:a,defaultParent:s,measureScroll:r,checkIsScrollRoot:o,resetTransform:d}){return class{constructor(p={},b=s==null?void 0:s()){this.id=Qv++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach($v),this.nodes.forEach(iM),this.nodes.forEach(oM),this.nodes.forEach(eM)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=p,this.root=b?b.root||b:this,this.path=b?[...b.path,b]:[],this.parent=b,this.depth=b?b.depth+1:0;for(let _=0;_<this.path.length;_++)this.path[_].shouldResetTransform=!0;this.root===this&&(this.nodes=new Kv)}addEventListener(p,b){return this.eventHandlers.has(p)||this.eventHandlers.set(p,new md),this.eventHandlers.get(p).add(b)}notifyListeners(p,...b){const _=this.eventHandlers.get(p);_&&_.notify(...b)}hasListeners(p){return this.eventHandlers.has(p)}mount(p){if(this.instance)return;this.isSVG=Vd(p)&&!Wy(p),this.instance=p;const{layoutId:b,layout:_,visualElement:h}=this.options;if(h&&!h.current&&h.mount(p),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(_||b)&&(this.isLayoutDirty=!0),a){let f,G=0;const k=()=>this.root.updateBlockedByResize=!1;Ee.read(()=>{G=window.innerWidth}),a(p,()=>{const y=window.innerWidth;y!==G&&(G=y,this.root.updateBlockedByResize=!0,f&&f(),f=Xv(k,250),mr.hasAnimatedSinceResize&&(mr.hasAnimatedSinceResize=!1,this.nodes.forEach(Wb)))})}b&&this.root.registerSharedNode(b,this),this.options.animate!==!1&&h&&(b||_)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:G,hasRelativeLayoutChanged:k,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const M=this.options.transition||h.getDefaultTransition()||dM,{onLayoutAnimationStart:I,onLayoutAnimationComplete:S}=h.getProps(),N=!this.targetLayout||!g_(this.targetLayout,y),X=!G&&k;if(this.options.layoutRoot||this.resumeFrom||X||G&&(N||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const z={...Md(M,"layout"),onPlay:I,onComplete:S};(h.shouldReduceMotion||this.options.layoutRoot)&&(z.delay=0,z.type=!1),this.startAnimation(z),this.setAnimationOrigin(f,X,z.path)}else G||Wb(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const p=this.getStack();p&&p.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Wn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(rM),this.animationId++)}getTransformTemplate(){const{visualElement:p}=this.options;return p&&p.getProps().transformTemplate}willUpdate(p=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&b_(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let f=0;f<this.path.length;f++){const G=this.path[f];G.shouldResetTransform=!0,(typeof G.latestValues.x=="string"||typeof G.latestValues.y=="string")&&(G.isLayoutDirty=!0),G.updateScroll("snapshot"),G.options.layoutRoot&&G.willUpdate(!1)}const{layoutId:b,layout:_}=this.options;if(b===void 0&&!_)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),p&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const _=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),_&&this.nodes.forEach(nM),this.nodes.forEach(Qb);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Jb);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(aM),this.nodes.forEach(sM),this.nodes.forEach(Jv),this.nodes.forEach(Wv)):this.nodes.forEach(Jb),this.clearAllSnapshots();const b=ct.now();st.delta=nn(0,1e3/60,b-st.timestamp),st.timestamp=b,st.isProcessing=!0,cu.update.process(st),cu.preRender.process(st),cu.render.process(st),st.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Id.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(tM),this.sharedNodes.forEach(lM)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ee.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ee.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ut(this.snapshot.measuredBox.x)&&!ut(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let _=0;_<this.path.length;_++)this.path[_].updateScroll();const p=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=Qe()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:b}=this.options;b&&b.notify("LayoutMeasure",this.layout.layoutBox,p?p.layoutBox:void 0)}updateScroll(p="measure"){let b=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===p&&(b=!1),b&&this.instance){const _=o(this.instance);this.scroll={animationId:this.root.animationId,phase:p,isRoot:_,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:_}}}resetTransform(){if(!d)return;const p=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,b=this.projectionDelta&&!p_(this.projectionDelta),_=this.getTransformTemplate(),h=_?_(this.latestValues,""):void 0,f=h!==this.prevTransformTemplateValue;p&&this.instance&&(b||ka(this.latestValues)||f)&&(d(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(p=!0){const b=this.measurePageBox();let _=this.removeElementScroll(b);return p&&(_=this.removeTransform(_)),pM(_),{animationId:this.root.animationId,measuredBox:b,layoutBox:_,latestValues:{},source:this.id}}measurePageBox(){var h;const{visualElement:p}=this.options;if(!p)return Qe();const b=p.measureViewportBox();if(!(((h=this.scroll)==null?void 0:h.wasRoot)||this.path.some(gM))){const{scroll:f}=this.root;f&&(en(b.x,f.offset.x),en(b.y,f.offset.y))}return b}removeElementScroll(p){var _;const b=Qe();if(Ft(b,p),(_=this.scroll)!=null&&_.wasRoot)return b;for(let h=0;h<this.path.length;h++){const f=this.path[h],{scroll:G,options:k}=f;f!==this.root&&G&&k.layoutScroll&&(G.wasRoot&&Ft(b,p),en(b.x,G.offset.x),en(b.y,G.offset.y))}return b}applyTransform(p,b=!1,_){var f,G;const h=_||Qe();Ft(h,p);for(let k=0;k<this.path.length;k++){const y=this.path[k];!b&&y.options.layoutScroll&&y.scroll&&y!==y.root&&(en(h.x,-y.scroll.offset.x),en(h.y,-y.scroll.offset.y)),ka(y.latestValues)&&pr(h,y.latestValues,(f=y.layout)==null?void 0:f.layoutBox)}return ka(this.latestValues)&&pr(h,this.latestValues,(G=this.layout)==null?void 0:G.layoutBox),h}removeTransform(p){var _;const b=Qe();Ft(b,p);for(let h=0;h<this.path.length;h++){const f=this.path[h];if(!ka(f.latestValues))continue;let G;f.instance&&($u(f.latestValues)&&f.updateSnapshot(),G=Qe(),Ft(G,f.measurePageBox())),Ob(b,f.latestValues,(_=f.snapshot)==null?void 0:_.layoutBox,G)}return ka(this.latestValues)&&Ob(b,this.latestValues),b}setTargetDelta(p){this.targetDelta=p,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(p){this.options={...this.options,...p,crossfade:p.crossfade!==void 0?p.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==st.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(p=!1){var y;const b=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=b.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=b.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=b.isSharedProjectionDirty);const _=!!this.resumingFrom||this!==b;if(!(p||_&&this.isSharedProjectionDirty||this.isProjectionDirty||(y=this.parent)!=null&&y.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:G}=this.options;if(!this.layout||!(f||G))return;this.resolvedRelativeTargetAt=st.timestamp;const k=this.getClosestProjectingParent();k&&this.linkedParentVersion!==k.layoutVersion&&!k.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&k&&k.layout?this.createRelativeTarget(k,this.layout.layoutBox,k.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Qe(),this.targetWithTransforms=Qe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Nv(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Ft(this.target,this.layout.layoutBox),e_(this.target,this.targetDelta)):Ft(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&k&&!!k.resumingFrom==!!this.resumingFrom&&!k.options.layoutScroll&&k.target&&this.animationProgress!==1?this.createRelativeTarget(k,this.target,k.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||$u(this.parent.latestValues)||$0(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(p,b,_){this.relativeParent=p,this.linkedParentVersion=p.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Qe(),this.relativeTargetOrigin=Qe(),Ir(this.relativeTargetOrigin,b,_,this.options.layoutAnchor||void 0),Ft(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var M;const p=this.getLead(),b=!!this.resumingFrom||this!==p;let _=!0;if((this.isProjectionDirty||(M=this.parent)!=null&&M.isProjectionDirty)&&(_=!1),b&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(_=!1),this.resolvedRelativeTargetAt===st.timestamp&&(_=!1),_)return;const{layout:h,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||f))return;Ft(this.layoutCorrected,this.layout.layoutBox);const G=this.treeScale.x,k=this.treeScale.y;cv(this.layoutCorrected,this.treeScale,this.path,b),p.layout&&!p.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(p.target=p.layout.layoutBox,p.targetWithTransforms=Qe());const{target:y}=p;if(!y){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Cb(this.prevProjectionDelta.x,this.projectionDelta.x),Cb(this.prevProjectionDelta.y,this.projectionDelta.y)),ki(this.projectionDelta,this.layoutCorrected,y,this.latestValues),(this.treeScale.x!==G||this.treeScale.y!==k||!Kb(this.projectionDelta.x,this.prevProjectionDelta.x)||!Kb(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(p=!0){var b;if((b=this.options.visualElement)==null||b.scheduleRender(),p){const _=this.getStack();_&&_.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=hs(),this.projectionDelta=hs(),this.projectionDeltaWithTransform=hs()}setAnimationOrigin(p,b=!1,_){const h=this.snapshot,f=h?h.latestValues:{},G={...this.latestValues},k=hs();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!b;const y=Qe(),M=h?h.source:void 0,I=this.layout?this.layout.source:void 0,S=M!==I,N=this.getStack(),X=!N||N.members.length<=1,z=!!(S&&!X&&this.options.crossfade===!0&&!this.path.some(uM));this.animationProgress=0;let V;const Z=_==null?void 0:_.interpolateProjection(p);this.mixTargetDelta=H=>{const C=H/1e3,P=Z==null?void 0:Z(C);P?(k.x.translate=P.x,k.x.scale=Ve(p.x.scale,1,C),k.x.origin=p.x.origin,k.x.originPoint=p.x.originPoint,k.y.translate=P.y,k.y.scale=Ve(p.y.scale,1,C),k.y.origin=p.y.origin,k.y.originPoint=p.y.originPoint):($b(k.x,p.x,C),$b(k.y,p.y,C)),this.setTargetDelta(k),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ir(y,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),cM(this.relativeTarget,this.relativeTargetOrigin,y,C),V&&zv(this.relativeTarget,V)&&(this.isProjectionDirty=!1),V||(V=Qe()),Ft(V,this.relativeTarget)),S&&(this.animationValues=G,Ov(G,f,this.latestValues,C,z,X)),P&&P.rotate!==void 0&&(this.animationValues||(this.animationValues=G),this.animationValues.pathRotation=P.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=C},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(p){var b,_,h;this.notifyListeners("animationStart"),(b=this.currentAnimation)==null||b.stop(),(h=(_=this.resumingFrom)==null?void 0:_.currentAnimation)==null||h.stop(),this.pendingAnimation&&(Wn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ee.update(()=>{mr.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=fs(0)),this.motionValue.jump(0,!1),this.currentAnimation=Pv(this.motionValue,[0,1e3],{...p,velocity:0,isSync:!0,onUpdate:f=>{this.mixTargetDelta(f),p.onUpdate&&p.onUpdate(f)},onStop:()=>{},onComplete:()=>{p.onComplete&&p.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const p=this.getStack();p&&p.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Yv),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const p=this.getLead();let{targetWithTransforms:b,target:_,layout:h,latestValues:f}=p;if(!(!b||!_||!h)){if(this!==p&&this.layout&&h&&__(this.options.animationType,this.layout.layoutBox,h.layoutBox)){_=this.target||Qe();const G=ut(this.layout.layoutBox.x);_.x.min=p.target.x.min,_.x.max=_.x.min+G;const k=ut(this.layout.layoutBox.y);_.y.min=p.target.y.min,_.y.max=_.y.min+k}Ft(b,_),pr(b,f),ki(this.projectionDeltaWithTransform,this.layoutCorrected,b,f)}}registerSharedNode(p,b){this.sharedNodes.has(p)||this.sharedNodes.set(p,new Zv),this.sharedNodes.get(p).add(b);const h=b.options.initialPromotionConfig;b.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(b):void 0})}isLead(){const p=this.getStack();return p?p.lead===this:!0}getLead(){var b;const{layoutId:p}=this.options;return p?((b=this.getStack())==null?void 0:b.lead)||this:this}getPrevLead(){var b;const{layoutId:p}=this.options;return p?(b=this.getStack())==null?void 0:b.prevLead:void 0}getStack(){const{layoutId:p}=this.options;if(p)return this.root.sharedNodes.get(p)}promote({needsReset:p,transition:b,preserveFollowOpacity:_}={}){const h=this.getStack();h&&h.promote(this,_),p&&(this.projectionDelta=void 0,this.needsReset=!0),b&&this.setOptions({transition:b})}relegate(){const p=this.getStack();return p?p.relegate(this):!1}resetSkewAndRotation(){const{visualElement:p}=this.options;if(!p)return;let b=!1;const{latestValues:_}=p;if((_.z||_.rotate||_.rotateX||_.rotateY||_.rotateZ||_.skewX||_.skewY)&&(b=!0),!b)return;const h={};_.z&&_u("z",p,h,this.animationValues);for(let f=0;f<fu.length;f++)_u(`rotate${fu[f]}`,p,h,this.animationValues),_u(`skew${fu[f]}`,p,h,this.animationValues);p.render();for(const f in h)p.setStaticValue(f,h[f]),this.animationValues&&(this.animationValues[f]=h[f]);p.scheduleRender()}applyProjectionStyles(p,b){if(!this.instance||this.isSVG)return;if(!this.isVisible){p.visibility="hidden";return}const _=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,p.visibility="",p.opacity="",p.pointerEvents=gr(b==null?void 0:b.pointerEvents)||"",p.transform=_?_(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(p.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,p.pointerEvents=gr(b==null?void 0:b.pointerEvents)||""),this.hasProjected&&!ka(this.latestValues)&&(p.transform=_?_({},""):"none",this.hasProjected=!1);return}p.visibility="";const f=h.animationValues||h.latestValues;this.applyTransformsToTarget();let G=Lv(this.projectionDeltaWithTransform,this.treeScale,f);_&&(G=_(f,G)),p.transform=G;const{x:k,y}=this.projectionDelta;p.transformOrigin=`${k.origin*100}% ${y.origin*100}% 0`,h.animationValues?p.opacity=h===this?f.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:p.opacity=h===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const M in td){if(f[M]===void 0)continue;const{correct:I,applyTo:S,isCSSVariable:N}=td[M],X=G==="none"?f[M]:I(f[M],h);if(S){const z=S.length;for(let V=0;V<z;V++)p[S[V]]=X}else N?this.options.visualElement.renderState.vars[M]=X:p[M]=X}this.options.layoutId&&(p.pointerEvents=h===this?gr(b==null?void 0:b.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(p=>{var b;return(b=p.currentAnimation)==null?void 0:b.stop()}),this.root.nodes.forEach(Qb),this.root.sharedNodes.clear()}}}function Jv(a){a.updateLayout()}function Wv(a){var r;const s=((r=a.resumeFrom)==null?void 0:r.snapshot)||a.snapshot;if(a.isLead()&&a.layout&&s&&a.hasListeners("didUpdate")){const{layoutBox:o,measuredBox:d}=a.layout,{animationType:g}=a.options,p=s.source!==a.layout.source;if(g==="size")Wt(G=>{const k=p?s.measuredBox[G]:s.layoutBox[G],y=ut(k);k.min=o[G].min,k.max=k.min+y});else if(g==="x"||g==="y"){const G=g==="x"?"y":"x";nd(p?s.measuredBox[G]:s.layoutBox[G],o[G])}else __(g,s.layoutBox,o)&&Wt(G=>{const k=p?s.measuredBox[G]:s.layoutBox[G],y=ut(o[G]);k.max=k.min+y,a.relativeTarget&&!a.currentAnimation&&(a.isProjectionDirty=!0,a.relativeTarget[G].max=a.relativeTarget[G].min+y)});const b=hs();ki(b,o,s.layoutBox);const _=hs();p?ki(_,a.applyTransform(d,!0),s.measuredBox):ki(_,o,s.layoutBox);const h=!p_(b);let f=!1;if(!a.resumeFrom){const G=a.getClosestProjectingParent();if(G&&!G.resumeFrom){const{snapshot:k,layout:y}=G;if(k&&y){const M=a.options.layoutAnchor||void 0,I=Qe();Ir(I,s.layoutBox,k.layoutBox,M);const S=Qe();Ir(S,o,y.layoutBox,M),g_(I,S)||(f=!0),G.options.layoutRoot&&(a.relativeTarget=S,a.relativeTargetOrigin=I,a.relativeParent=G)}}}a.notifyListeners("didUpdate",{layout:o,snapshot:s,delta:_,layoutDelta:b,hasLayoutChanged:h,hasRelativeLayoutChanged:f})}else if(a.isLead()){const{onExitComplete:o}=a.options;o&&o()}a.options.transition=void 0}function $v(a){a.parent&&(a.isProjecting()||(a.isProjectionDirty=a.parent.isProjectionDirty),a.isSharedProjectionDirty||(a.isSharedProjectionDirty=!!(a.isProjectionDirty||a.parent.isProjectionDirty||a.parent.isSharedProjectionDirty)),a.isTransformDirty||(a.isTransformDirty=a.parent.isTransformDirty))}function eM(a){a.isProjectionDirty=a.isSharedProjectionDirty=a.isTransformDirty=!1}function tM(a){a.clearSnapshot()}function Qb(a){a.clearMeasurements()}function nM(a){a.isLayoutDirty=!0,a.updateLayout()}function Jb(a){a.isLayoutDirty=!1}function aM(a){a.isAnimationBlocked&&a.layout&&!a.isLayoutDirty&&(a.snapshot=a.layout,a.isLayoutDirty=!0)}function sM(a){const{visualElement:s}=a.options;s&&s.getProps().onBeforeLayoutMeasure&&s.notify("BeforeLayoutMeasure"),a.resetTransform()}function Wb(a){a.finishAnimation(),a.targetDelta=a.relativeTarget=a.target=void 0,a.isProjectionDirty=!0}function iM(a){a.resolveTargetDelta()}function oM(a){a.calcProjection()}function rM(a){a.resetSkewAndRotation()}function lM(a){a.removeLeadSnapshot()}function $b(a,s,r){a.translate=Ve(s.translate,0,r),a.scale=Ve(s.scale,1,r),a.origin=s.origin,a.originPoint=s.originPoint}function ef(a,s,r,o){a.min=Ve(s.min,r.min,o),a.max=Ve(s.max,r.max,o)}function cM(a,s,r,o){ef(a.x,s.x,r.x,o),ef(a.y,s.y,r.y,o)}function uM(a){return a.animationValues&&a.animationValues.opacityExit!==void 0}const dM={duration:.45,ease:[.4,0,.1,1]},tf=a=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(a),nf=tf("applewebkit/")&&!tf("chrome/")?Math.round:Ot;function af(a){a.min=nf(a.min),a.max=nf(a.max)}function pM(a){af(a.x),af(a.y)}function __(a,s,r){return a==="position"||a==="preserve-aspect"&&!Dv(Fb(s),Fb(r),.2)}function gM(a){var s;return a!==a.root&&((s=a.scroll)==null?void 0:s.wasRoot)}const mM=f_({attachResizeListener:(a,s)=>Si(a,"resize",s),measureScroll:()=>{var a,s;return{x:document.documentElement.scrollLeft||((a=document.body)==null?void 0:a.scrollLeft)||0,y:document.documentElement.scrollTop||((s=document.body)==null?void 0:s.scrollTop)||0}},checkIsScrollRoot:()=>!0}),xu={current:void 0},x_=f_({measureScroll:a=>({x:a.scrollLeft,y:a.scrollTop}),defaultParent:()=>{if(!xu.current){const a=new mM({});a.mount(window),a.setOptions({layoutScroll:!0}),xu.current=a}return xu.current},resetTransform:(a,s)=>{a.style.transform=s!==void 0?s:"none"},checkIsScrollRoot:a=>window.getComputedStyle(a).position==="fixed"}),Cd=O.createContext({transformPagePoint:a=>a,isStatic:!1,reducedMotion:"never"});function sf(a,s){if(typeof a=="function")return a(s);a!=null&&(a.current=s)}function hM(...a){return s=>{let r=!1;const o=a.map(d=>{const g=sf(d,s);return!r&&typeof g=="function"&&(r=!0),g});if(r)return()=>{for(let d=0;d<o.length;d++){const g=o[d];typeof g=="function"?g():sf(a[d],null)}}}}function bM(...a){return O.useCallback(hM(...a),a)}class fM extends O.Component{getSnapshotBeforeUpdate(s){const r=this.props.childRef.current;if(lr(r)&&s.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const o=r.offsetParent,d=lr(o)&&o.offsetWidth||0,g=lr(o)&&o.offsetHeight||0,p=getComputedStyle(r),b=this.props.sizeRef.current;b.height=parseFloat(p.height),b.width=parseFloat(p.width),b.top=r.offsetTop,b.left=r.offsetLeft,b.right=d-b.width-b.left,b.bottom=g-b.height-b.top,b.direction=p.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function _M({children:a,isPresent:s,anchorX:r,anchorY:o,root:d,pop:g}){var k;const p=O.useId(),b=O.useRef(null),_=O.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:h}=O.useContext(Cd),f=((k=a.props)==null?void 0:k.ref)??(a==null?void 0:a.ref),G=bM(b,f);return O.useInsertionEffect(()=>{const{width:y,height:M,top:I,left:S,right:N,bottom:X,direction:z}=_.current;if(s||g===!1||!b.current||!y||!M)return;const V=z==="rtl",Z=r==="left"?V?`right: ${N}`:`left: ${S}`:V?`left: ${S}`:`right: ${N}`,H=o==="bottom"?`bottom: ${X}`:`top: ${I}`;b.current.dataset.motionPopId=p;const C=document.createElement("style");h&&(C.nonce=h);const P=d??document.head;return P.appendChild(C),C.sheet&&C.sheet.insertRule(`
          [data-motion-pop-id="${p}"] {
            position: absolute !important;
            width: ${y}px !important;
            height: ${M}px !important;
            ${Z}px !important;
            ${H}px !important;
          }
        `),()=>{var K;(K=b.current)==null||K.removeAttribute("data-motion-pop-id"),P.contains(C)&&P.removeChild(C)}},[s]),l.jsx(fM,{isPresent:s,childRef:b,sizeRef:_,pop:g,children:g===!1?a:O.cloneElement(a,{ref:G})})}const xM=({children:a,initial:s,isPresent:r,onExitComplete:o,custom:d,presenceAffectsLayout:g,mode:p,anchorX:b,anchorY:_,root:h})=>{const f=dd(GM),G=O.useId();let k=!0,y=O.useMemo(()=>(k=!1,{id:G,initial:s,isPresent:r,custom:d,onExitComplete:M=>{f.set(M,!0);for(const I of f.values())if(!I)return;o&&o()},register:M=>(f.set(M,!1),()=>f.delete(M))}),[r,f,o]);return g&&k&&(y={...y}),O.useMemo(()=>{f.forEach((M,I)=>f.set(I,!1))},[r]),O.useEffect(()=>{!r&&!f.size&&o&&o()},[r]),a=l.jsx(_M,{pop:p==="popLayout",isPresent:r,anchorX:b,anchorY:_,root:h,children:a}),l.jsx(Er.Provider,{value:y,children:a})};function GM(){return new Map}function G_(a=!0){const s=O.useContext(Er);if(s===null)return[!0,null];const{isPresent:r,onExitComplete:o,register:d}=s,g=O.useId();O.useEffect(()=>{if(a)return d(g)},[a]);const p=O.useCallback(()=>a&&o&&o(g),[g,o,a]);return!r&&o?[!1,p]:[!0]}const er=a=>a.key||"";function of(a){const s=[];return O.Children.forEach(a,r=>{O.isValidElement(r)&&s.push(r)}),s}const hr=({children:a,custom:s,initial:r=!0,onExitComplete:o,presenceAffectsLayout:d=!0,mode:g="sync",propagate:p=!1,anchorX:b="left",anchorY:_="top",root:h})=>{const[f,G]=G_(p),k=O.useMemo(()=>of(a),[a]),y=p&&!f?[]:k.map(er),M=O.useRef(!0),I=O.useRef(k),S=dd(()=>new Map),N=O.useRef(new Set),[X,z]=O.useState(k),[V,Z]=O.useState(k);Zf(()=>{M.current=!1,I.current=k;for(let P=0;P<V.length;P++){const K=er(V[P]);y.includes(K)?(S.delete(K),N.current.delete(K)):S.get(K)!==!0&&S.set(K,!1)}},[V,y.length,y.join("-")]);const H=[];if(k!==X){let P=[...k];for(let K=0;K<V.length;K++){const Y=V[K],ie=er(Y);y.includes(ie)||(P.splice(K,0,Y),H.push(Y))}return g==="wait"&&H.length&&(P=H),Z(of(P)),z(k),null}const{forceRender:C}=O.useContext(ud);return l.jsx(l.Fragment,{children:V.map(P=>{const K=er(P),Y=p&&!f?!1:k===V||y.includes(K),ie=()=>{if(N.current.has(K))return;if(S.has(K))N.current.add(K),S.set(K,!0);else return;let pe=!0;S.forEach(Ue=>{Ue||(pe=!1)}),pe&&(C==null||C(),Z(I.current),p&&(G==null||G()),o&&o())};return l.jsx(xM,{isPresent:Y,initial:!M.current||r?void 0:!1,custom:s,presenceAffectsLayout:d,mode:g,root:h,onExitComplete:Y?void 0:ie,anchorX:b,anchorY:_,children:P},K)})})},k_=O.createContext({strict:!1}),rf={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let lf=!1;function kM(){if(lf)return;const a={};for(const s in rf)a[s]={isEnabled:r=>rf[s].some(o=>!!r[o])};Q0(a),lf=!0}function y_(){return kM(),iv()}function yM(a){const s=y_();for(const r in a)s[r]={...s[r],...a[r]};Q0(s)}const vM=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function jr(a){return a.startsWith("while")||a.startsWith("drag")&&a!=="draggable"||a.startsWith("layout")||a.startsWith("onTap")||a.startsWith("onPan")||a.startsWith("onLayout")||vM.has(a)}let v_=a=>!jr(a);function MM(a){typeof a=="function"&&(v_=s=>s.startsWith("on")?!jr(s):a(s))}try{MM(require("@emotion/is-prop-valid").default)}catch{}function AM(a,s,r){const o={};for(const d in a)d==="values"&&typeof a.values=="object"||it(a[d])||(v_(d)||r===!0&&jr(d)||!s&&!jr(d)||a.draggable&&d.startsWith("onDrag"))&&(o[d]=a[d]);return o}const Cr=O.createContext({});function TM(a,s){if(Nr(a)){const{initial:r,animate:o}=a;return{initial:r===!1||Ti(r)?r:void 0,animate:Ti(o)?o:void 0}}return a.inherit!==!1?s:{}}function SM(a){const{initial:s,animate:r}=TM(a,O.useContext(Cr));return O.useMemo(()=>({initial:s,animate:r}),[cf(s),cf(r)])}function cf(a){return Array.isArray(a)?a.join(" "):a}const qd=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function M_(a,s,r){for(const o in s)!it(s[o])&&!a_(o,r)&&(a[o]=s[o])}function IM({transformTemplate:a},s){return O.useMemo(()=>{const r=qd();return Dd(r,s,a),Object.assign({},r.vars,r.style)},[s])}function jM(a,s){const r=a.style||{},o={};return M_(o,r,a),Object.assign(o,IM(a,s)),o}function VM(a,s){const r={},o=jM(a,s);return a.drag&&a.dragListener!==!1&&(r.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=a.drag===!0?"none":`pan-${a.drag==="x"?"y":"x"}`),a.tabIndex===void 0&&(a.onTap||a.onTapStart||a.whileTap)&&(r.tabIndex=0),r.style=o,r}const A_=()=>({...qd(),attrs:{}});function EM(a,s,r,o){const d=O.useMemo(()=>{const g=A_();return s_(g,s,o_(o),a.transformTemplate,a.style),{...g.attrs,style:{...g.style}}},[s]);if(a.style){const g={};M_(g,a.style,a),d.style={...g,...d.style}}return d}const wM=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Rd(a){return typeof a!="string"||a.includes("-")?!1:!!(wM.indexOf(a)>-1||/[A-Z]/u.test(a))}function DM(a,s,r,{latestValues:o},d,g=!1,p){const _=(p??Rd(a)?EM:VM)(s,o,d,a),h=AM(s,typeof a=="string",g),f=a!==O.Fragment?{...h,..._,ref:r}:{},{children:G}=s,k=O.useMemo(()=>it(G)?G.get():G,[G]);return O.createElement(a,{...f,children:k})}function NM({scrapeMotionValuesFromProps:a,createRenderState:s},r,o,d){return{latestValues:CM(r,o,d,a),renderState:s()}}function CM(a,s,r,o){const d={},g=o(a,{});for(const k in g)d[k]=gr(g[k]);let{initial:p,animate:b}=a;const _=Nr(a),h=Z0(a);s&&h&&!_&&a.inherit!==!1&&(p===void 0&&(p=s.initial),b===void 0&&(b=s.animate));let f=r?r.initial===!1:!1;f=f||p===!1;const G=f?b:p;if(G&&typeof G!="boolean"&&!Dr(G)){const k=Array.isArray(G)?G:[G];for(let y=0;y<k.length;y++){const M=Td(a,k[y]);if(M){const{transitionEnd:I,transition:S,...N}=M;for(const X in N){let z=N[X];if(Array.isArray(z)){const V=f?z.length-1:0;z=z[V]}z!==null&&(d[X]=z)}for(const X in I)d[X]=I[X]}}}return d}const T_=a=>(s,r)=>{const o=O.useContext(Cr),d=O.useContext(Er),g=()=>NM(a,s,o,d);return r?g():dd(g)},qM=T_({scrapeMotionValuesFromProps:Nd,createRenderState:qd}),RM=T_({scrapeMotionValuesFromProps:r_,createRenderState:A_}),zM=Symbol.for("motionComponentSymbol");function LM(a,s,r){const o=O.useRef(r);O.useInsertionEffect(()=>{o.current=r});const d=O.useRef(null);return O.useCallback(g=>{var b;g&&((b=a.onMount)==null||b.call(a,g)),s&&(g?s.mount(g):s.unmount());const p=o.current;if(typeof p=="function")if(g){const _=p(g);typeof _=="function"&&(d.current=_)}else d.current?(d.current(),d.current=null):p(g);else p&&(p.current=g)},[s])}const S_=O.createContext({});function ps(a){return a&&typeof a=="object"&&Object.prototype.hasOwnProperty.call(a,"current")}function HM(a,s,r,o,d,g){var z,V;const{visualElement:p}=O.useContext(Cr),b=O.useContext(k_),_=O.useContext(Er),h=O.useContext(Cd),f=h.reducedMotion,G=h.skipAnimations,k=O.useRef(null),y=O.useRef(!1);o=o||b.renderer,!k.current&&o&&(k.current=o(a,{visualState:s,parent:p,props:r,presenceContext:_,blockInitialAnimation:_?_.initial===!1:!1,reducedMotionConfig:f,skipAnimations:G,isSVG:g}),y.current&&k.current&&(k.current.manuallyAnimateOnMount=!0));const M=k.current,I=O.useContext(S_);M&&!M.projection&&d&&(M.type==="html"||M.type==="svg")&&OM(k.current,r,d,I);const S=O.useRef(!1);O.useInsertionEffect(()=>{M&&S.current&&M.update(r,_)});const N=r[q0],X=O.useRef(!!N&&typeof window<"u"&&!((z=window.MotionHandoffIsComplete)!=null&&z.call(window,N))&&((V=window.MotionHasOptimisedAnimation)==null?void 0:V.call(window,N)));return Zf(()=>{y.current=!0,M&&(S.current=!0,window.MotionIsMounted=!0,M.updateFeatures(),M.scheduleRenderMicrotask(),X.current&&M.animationState&&M.animationState.animateChanges())}),O.useEffect(()=>{M&&(!X.current&&M.animationState&&M.animationState.animateChanges(),X.current&&(queueMicrotask(()=>{var Z;(Z=window.MotionHandoffMarkAsComplete)==null||Z.call(window,N)}),X.current=!1),M.enteringChildren=void 0)}),M}function OM(a,s,r,o){const{layoutId:d,layout:g,drag:p,dragConstraints:b,layoutScroll:_,layoutRoot:h,layoutAnchor:f,layoutCrossfade:G}=s;a.projection=new r(a.latestValues,s["data-framer-portal-id"]?void 0:I_(a.parent)),a.projection.setOptions({layoutId:d,layout:g,alwaysMeasureLayout:!!p||b&&ps(b),visualElement:a,animationType:typeof g=="string"?g:"both",initialPromotionConfig:o,crossfade:G,layoutScroll:_,layoutRoot:h,layoutAnchor:f})}function I_(a){if(a)return a.options.allowProjection!==!1?a.projection:I_(a.parent)}function Gu(a,{forwardMotionProps:s=!1,type:r}={},o,d){o&&yM(o);const g=r?r==="svg":Rd(a),p=g?RM:qM;function b(h,f){let G;const k={...O.useContext(Cd),...h,layoutId:BM(h)},{isStatic:y}=k,M=SM(h),I=p(h,y);if(!y&&typeof window<"u"){UM();const S=PM(k);G=S.MeasureLayout,M.visualElement=HM(a,I,k,d,S.ProjectionNode,g)}return l.jsxs(Cr.Provider,{value:M,children:[G&&M.visualElement?l.jsx(G,{visualElement:M.visualElement,...k}):null,DM(a,h,LM(I,M.visualElement,f),I,y,s,g)]})}b.displayName=`motion.${typeof a=="string"?a:`create(${a.displayName??a.name??""})`}`;const _=O.forwardRef(b);return _[zM]=a,_}function BM({layoutId:a}){const s=O.useContext(ud).id;return s&&a!==void 0?s+"-"+a:a}function UM(a,s){O.useContext(k_).strict}function PM(a){const s=y_(),{drag:r,layout:o}=s;if(!r&&!o)return{};const d={...r,...o};return{MeasureLayout:r!=null&&r.isEnabled(a)||o!=null&&o.isEnabled(a)?d.MeasureLayout:void 0,ProjectionNode:d.ProjectionNode}}function FM(a,s){if(typeof Proxy>"u")return Gu;const r=new Map,o=(g,p)=>Gu(g,p,a,s),d=(g,p)=>o(g,p);return new Proxy(d,{get:(g,p)=>p==="create"?o:(r.has(p)||r.set(p,Gu(p,void 0,a,s)),r.get(p))})}const KM=(a,s)=>s.isSVG??Rd(a)?new yv(s):new bv(s,{allowProjection:a!==O.Fragment});class XM extends $n{constructor(s){super(s),s.animationState||(s.animationState=Sv(s))}updateAnimationControlsSubscription(){const{animate:s}=this.node.getProps();Dr(s)&&(this.unmountControls=s.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:s}=this.node.getProps(),{animate:r}=this.node.prevProps||{};s!==r&&this.updateAnimationControlsSubscription()}unmount(){var s;this.node.animationState.reset(),(s=this.unmountControls)==null||s.call(this)}}let ZM=0;class YM extends $n{constructor(){super(...arguments),this.id=ZM++,this.isExitComplete=!1}update(){var g;if(!this.node.presenceContext)return;const{isPresent:s,onExitComplete:r}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||s===o)return;if(s&&o===!1){if(this.isExitComplete){const{initial:p,custom:b}=this.node.getProps();if(typeof p=="string"||typeof p=="object"&&p!==null&&!Array.isArray(p)){const _=Aa(this.node,p,b);if(_){const{transition:h,transitionEnd:f,...G}=_;for(const k in G)(g=this.node.getValue(k))==null||g.jump(G[k])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const d=this.node.animationState.setActive("exit",!s);r&&!s&&d.then(()=>{this.isExitComplete=!0,r(this.id)})}mount(){const{register:s,onExitComplete:r}=this.node.presenceContext||{};r&&r(this.id),s&&(this.unmount=s(this.id))}unmount(){}}const QM={animation:{Feature:XM},exit:{Feature:YM}};function Ei(a){return{point:{x:a.pageX,y:a.pageY}}}const JM=a=>s=>jd(s)&&a(s,Ei(s));function yi(a,s,r,o){return Si(a,s,JM(r),o)}const j_=({current:a})=>a?a.ownerDocument.defaultView:null,uf=(a,s)=>Math.abs(a-s);function WM(a,s){const r=uf(a.x,s.x),o=uf(a.y,s.y);return Math.sqrt(r**2+o**2)}const df=new Set(["auto","scroll"]);class V_{constructor(s,r,{transformPagePoint:o,contextWindow:d=window,dragSnapToOrigin:g=!1,distanceThreshold:p=3,element:b}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=y=>{this.handleScroll(y.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=tr(this.lastRawMoveEventInfo,this.transformPagePoint));const y=ku(this.lastMoveEventInfo,this.history),M=this.startEvent!==null,I=WM(y.offset,{x:0,y:0})>=this.distanceThreshold;if(!M&&!I)return;const{point:S}=y,{timestamp:N}=st;this.history.push({...S,timestamp:N});const{onStart:X,onMove:z}=this.handlers;M||(X&&X(this.lastMoveEvent,y),this.startEvent=this.lastMoveEvent),z&&z(this.lastMoveEvent,y)},this.handlePointerMove=(y,M)=>{this.lastMoveEvent=y,this.lastRawMoveEventInfo=M,this.lastMoveEventInfo=tr(M,this.transformPagePoint),Ee.update(this.updatePoint,!0)},this.handlePointerUp=(y,M)=>{this.end();const{onEnd:I,onSessionEnd:S,resumeAnimation:N}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&N&&N(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const X=ku(y.type==="pointercancel"?this.lastMoveEventInfo:tr(M,this.transformPagePoint),this.history);this.startEvent&&I&&I(y,X),S&&S(y,X)},!jd(s))return;this.dragSnapToOrigin=g,this.handlers=r,this.transformPagePoint=o,this.distanceThreshold=p,this.contextWindow=d||window;const _=Ei(s),h=tr(_,this.transformPagePoint),{point:f}=h,{timestamp:G}=st;this.history=[{...f,timestamp:G}];const{onSessionStart:k}=r;k&&k(s,ku(h,this.history)),this.removeListeners=Ii(yi(this.contextWindow,"pointermove",this.handlePointerMove),yi(this.contextWindow,"pointerup",this.handlePointerUp),yi(this.contextWindow,"pointercancel",this.handlePointerUp)),b&&this.startScrollTracking(b)}startScrollTracking(s){let r=s.parentElement;for(;r;){const o=getComputedStyle(r);(df.has(o.overflowX)||df.has(o.overflowY))&&this.scrollPositions.set(r,{x:r.scrollLeft,y:r.scrollTop}),r=r.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(s){const r=this.scrollPositions.get(s);if(!r)return;const o=s===window,d=o?{x:window.scrollX,y:window.scrollY}:{x:s.scrollLeft,y:s.scrollTop},g={x:d.x-r.x,y:d.y-r.y};g.x===0&&g.y===0||(o?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=g.x,this.lastMoveEventInfo.point.y+=g.y):this.history.length>0&&(this.history[0].x-=g.x,this.history[0].y-=g.y),this.scrollPositions.set(s,d),Ee.update(this.updatePoint,!0))}updateHandlers(s){this.handlers=s}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Wn(this.updatePoint)}}function tr(a,s){return s?{point:s(a.point)}:a}function pf(a,s){return{x:a.x-s.x,y:a.y-s.y}}function ku({point:a},s){return{point:a,delta:pf(a,E_(s)),offset:pf(a,$M(s)),velocity:eA(s,.1)}}function $M(a){return a[0]}function E_(a){return a[a.length-1]}function eA(a,s){if(a.length<2)return{x:0,y:0};let r=a.length-1,o=null;const d=E_(a);for(;r>=0&&(o=a[r],!(d.timestamp-o.timestamp>jt(s)));)r--;if(!o)return{x:0,y:0};o===a[0]&&a.length>2&&d.timestamp-o.timestamp>jt(s)*2&&(o=a[1]);const g=Ht(d.timestamp-o.timestamp);if(g===0)return{x:0,y:0};const p={x:(d.x-o.x)/g,y:(d.y-o.y)/g};return p.x===1/0&&(p.x=0),p.y===1/0&&(p.y=0),p}function tA(a,{min:s,max:r},o){return s!==void 0&&a<s?a=o?Ve(s,a,o.min):Math.max(a,s):r!==void 0&&a>r&&(a=o?Ve(r,a,o.max):Math.min(a,r)),a}function gf(a,s,r){return{min:s!==void 0?a.min+s:void 0,max:r!==void 0?a.max+r-(a.max-a.min):void 0}}function nA(a,{top:s,left:r,bottom:o,right:d}){return{x:gf(a.x,r,d),y:gf(a.y,s,o)}}function mf(a,s){let r=s.min-a.min,o=s.max-a.max;return s.max-s.min<a.max-a.min&&([r,o]=[o,r]),{min:r,max:o}}function aA(a,s){return{x:mf(a.x,s.x),y:mf(a.y,s.y)}}function sA(a,s){let r=.5;const o=ut(a),d=ut(s);return d>o?r=Mi(s.min,s.max-o,a.min):o>d&&(r=Mi(a.min,a.max-d,s.min)),nn(0,1,r)}function iA(a,s){const r={};return s.min!==void 0&&(r.min=s.min-a.min),s.max!==void 0&&(r.max=s.max-a.min),r}const ad=.35;function oA(a=ad){return a===!1?a=0:a===!0&&(a=ad),{x:hf(a,"left","right"),y:hf(a,"top","bottom")}}function hf(a,s,r){return{min:bf(a,s),max:bf(a,r)}}function bf(a,s){return typeof a=="number"?a:a[s]||0}const rA=new WeakMap;class lA{constructor(s){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Qe(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=s}start(s,{snapToCursor:r=!1,distanceThreshold:o}={}){const{presenceContext:d}=this.visualElement;if(d&&d.isPresent===!1)return;const g=G=>{r&&this.snapToCursor(Ei(G).point),this.stopAnimation()},p=(G,k)=>{const{drag:y,dragPropagation:M,onDragStart:I}=this.getProps();if(y&&!M&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Cy(y),!this.openDragLock))return;this.latestPointerEvent=G,this.latestPanInfo=k,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Wt(N=>{let X=this.getAxisMotionValue(N).get()||0;if(tn.test(X)){const{projection:z}=this.visualElement;if(z&&z.layout){const V=z.layout.layoutBox[N];V&&(X=ut(V)*(parseFloat(X)/100))}}this.originPoint[N]=X}),I&&Ee.update(()=>I(G,k),!1,!0),Xu(this.visualElement,"transform");const{animationState:S}=this.visualElement;S&&S.setActive("whileDrag",!0)},b=(G,k)=>{this.latestPointerEvent=G,this.latestPanInfo=k;const{dragPropagation:y,dragDirectionLock:M,onDirectionLock:I,onDrag:S}=this.getProps();if(!y&&!this.openDragLock)return;const{offset:N}=k;if(M&&this.currentDirection===null){this.currentDirection=uA(N),this.currentDirection!==null&&I&&I(this.currentDirection);return}this.updateAxis("x",k.point,N),this.updateAxis("y",k.point,N),this.visualElement.render(),S&&Ee.update(()=>S(G,k),!1,!0)},_=(G,k)=>{this.latestPointerEvent=G,this.latestPanInfo=k,this.stop(G,k),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>{const{dragSnapToOrigin:G}=this.getProps();(G||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:f}=this.getProps();this.panSession=new V_(s,{onSessionStart:g,onStart:p,onMove:b,onSessionEnd:_,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:f,distanceThreshold:o,contextWindow:j_(this.visualElement),element:this.visualElement.current})}stop(s,r){const o=s||this.latestPointerEvent,d=r||this.latestPanInfo,g=this.isDragging;if(this.cancel(),!g||!d||!o)return;const{velocity:p}=d;this.startAnimation(p);const{onDragEnd:b}=this.getProps();b&&Ee.postRender(()=>b(o,d))}cancel(){this.isDragging=!1;const{projection:s,animationState:r}=this.visualElement;s&&(s.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:o}=this.getProps();!o&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),r&&r.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(s,r,o){const{drag:d}=this.getProps();if(!o||!nr(s,d,this.currentDirection))return;const g=this.getAxisMotionValue(s);let p=this.originPoint[s]+o[s];this.constraints&&this.constraints[s]&&(p=tA(p,this.constraints[s],this.elastic[s])),g.set(p)}resolveConstraints(){var g;const{dragConstraints:s,dragElastic:r}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(g=this.visualElement.projection)==null?void 0:g.layout,d=this.constraints;s&&ps(s)?this.constraints||(this.constraints=this.resolveRefConstraints()):s&&o?this.constraints=nA(o.layoutBox,s):this.constraints=!1,this.elastic=oA(r),d!==this.constraints&&!ps(s)&&o&&this.constraints&&!this.hasMutatedConstraints&&Wt(p=>{this.constraints!==!1&&this.getAxisMotionValue(p)&&(this.constraints[p]=iA(o.layoutBox[p],this.constraints[p]))})}resolveRefConstraints(){const{dragConstraints:s,onMeasureDragConstraints:r}=this.getProps();if(!s||!ps(s))return!1;const o=s.current,{projection:d}=this.visualElement;if(!d||!d.layout)return!1;d.root&&(d.root.scroll=void 0,d.root.updateScroll());const g=uv(o,d.root,this.visualElement.getTransformPagePoint());let p=aA(d.layout.layoutBox,g);if(r){const b=r(rv(p));this.hasMutatedConstraints=!!b,b&&(p=W0(b))}return p}startAnimation(s){const{drag:r,dragMomentum:o,dragElastic:d,dragTransition:g,dragSnapToOrigin:p,onDragTransitionEnd:b}=this.getProps(),_=this.constraints||{},h=Wt(f=>{if(!nr(f,r,this.currentDirection))return;let G=_&&_[f]||{};(p===!0||p===f)&&(G={min:0,max:0});const k=d?200:1e6,y=d?40:1e7,M={type:"inertia",velocity:o?s[f]:0,bounceStiffness:k,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...g,...G};return this.startAxisValueAnimation(f,M)});return Promise.all(h).then(b)}startAxisValueAnimation(s,r){const o=this.getAxisMotionValue(s);return Xu(this.visualElement,s),o.start(Ad(s,o,0,r,this.visualElement,!1))}stopAnimation(){Wt(s=>this.getAxisMotionValue(s).stop())}getAxisMotionValue(s){const r=`_drag${s.toUpperCase()}`,d=this.visualElement.getProps()[r];return d||this.visualElement.getValue(s,this.visualElement.latestValues[s]??0)}snapToCursor(s){Wt(r=>{const{drag:o}=this.getProps();if(!nr(r,o,this.currentDirection))return;const{projection:d}=this.visualElement,g=this.getAxisMotionValue(r);if(d&&d.layout){const{min:p,max:b}=d.layout.layoutBox[r],_=g.get()||0;g.set(s[r]-Ve(p,b,.5)+_)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:s,dragConstraints:r}=this.getProps(),{projection:o}=this.visualElement;if(!ps(r)||!o||!this.constraints)return;this.stopAnimation();const d={x:0,y:0};Wt(p=>{const b=this.getAxisMotionValue(p);if(b&&this.constraints!==!1){const _=b.get();d[p]=sA({min:_,max:_},this.constraints[p])}});const{transformTemplate:g}=this.visualElement.getProps();this.visualElement.current.style.transform=g?g({},""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.constraints=!1,this.resolveConstraints(),Wt(p=>{if(!nr(p,s,null))return;const b=this.getAxisMotionValue(p),{min:_,max:h}=this.constraints[p];b.set(Ve(_,h,d[p]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;rA.set(this.visualElement,this);const s=this.visualElement.current,r=yi(s,"pointerdown",h=>{const{drag:f,dragListener:G=!0}=this.getProps(),k=h.target,y=k!==s&&Oy(k);f&&G&&!y&&this.start(h)});let o;const d=()=>{const{dragConstraints:h}=this.getProps();ps(h)&&h.current&&(this.constraints=this.resolveRefConstraints(),o||(o=cA(s,h.current,()=>this.scalePositionWithinConstraints())))},{projection:g}=this.visualElement,p=g.addEventListener("measure",d);g&&!g.layout&&(g.root&&g.root.updateScroll(),g.updateLayout()),Ee.read(d);const b=Si(window,"resize",()=>this.scalePositionWithinConstraints()),_=g.addEventListener("didUpdate",(({delta:h,hasLayoutChanged:f})=>{this.isDragging&&f&&(Wt(G=>{const k=this.getAxisMotionValue(G);k&&(this.originPoint[G]+=h[G].translate,k.set(k.get()+h[G].translate))}),this.visualElement.render())}));return()=>{b(),r(),p(),_&&_(),o&&o()}}getProps(){const s=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:o=!1,dragPropagation:d=!1,dragConstraints:g=!1,dragElastic:p=ad,dragMomentum:b=!0}=s;return{...s,drag:r,dragDirectionLock:o,dragPropagation:d,dragConstraints:g,dragElastic:p,dragMomentum:b}}}function ff(a){let s=!0;return()=>{if(s){s=!1;return}a()}}function cA(a,s,r){const o=vb(a,ff(r)),d=vb(s,ff(r));return()=>{o(),d()}}function nr(a,s,r){return(s===!0||s===a)&&(r===null||r===a)}function uA(a,s=10){let r=null;return Math.abs(a.y)>s?r="y":Math.abs(a.x)>s&&(r="x"),r}class dA extends $n{constructor(s){super(s),this.removeGroupControls=Ot,this.removeListeners=Ot,this.controls=new lA(s)}mount(){const{dragControls:s}=this.node.getProps();s&&(this.removeGroupControls=s.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ot}update(){const{dragControls:s}=this.node.getProps(),{dragControls:r}=this.node.prevProps||{};s!==r&&(this.removeGroupControls(),s&&(this.removeGroupControls=s.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const yu=a=>(s,r)=>{a&&Ee.update(()=>a(s,r),!1,!0)};class pA extends $n{constructor(){super(...arguments),this.removePointerDownListener=Ot}onPointerDown(s){this.session=new V_(s,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:j_(this.node)})}createPanHandlers(){const{onPanSessionStart:s,onPanStart:r,onPan:o,onPanEnd:d}=this.node.getProps();return{onSessionStart:yu(s),onStart:yu(r),onMove:yu(o),onEnd:(g,p)=>{delete this.session,d&&Ee.postRender(()=>d(g,p))}}}mount(){this.removePointerDownListener=yi(this.node.current,"pointerdown",s=>this.onPointerDown(s))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let vu=!1;class gA extends O.Component{componentDidMount(){const{visualElement:s,layoutGroup:r,switchLayoutGroup:o,layoutId:d}=this.props,{projection:g}=s;g&&(r.group&&r.group.add(g),o&&o.register&&d&&o.register(g),vu&&g.root.didUpdate(),g.addEventListener("animationComplete",()=>{this.safeToRemove()}),g.setOptions({...g.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),mr.hasEverUpdated=!0}getSnapshotBeforeUpdate(s){const{layoutDependency:r,visualElement:o,drag:d,isPresent:g}=this.props,{projection:p}=o;return p&&(p.isPresent=g,s.layoutDependency!==r&&p.setOptions({...p.options,layoutDependency:r}),vu=!0,d||s.layoutDependency!==r||r===void 0||s.isPresent!==g?p.willUpdate():this.safeToRemove(),s.isPresent!==g&&(g?p.promote():p.relegate()||Ee.postRender(()=>{const b=p.getStack();(!b||!b.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:s,layoutAnchor:r}=this.props,{projection:o}=s;o&&(o.options.layoutAnchor=r,o.root.didUpdate(),Id.postRender(()=>{!o.currentAnimation&&o.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:s,layoutGroup:r,switchLayoutGroup:o}=this.props,{projection:d}=s;vu=!0,d&&(d.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(d),o&&o.deregister&&o.deregister(d))}safeToRemove(){const{safeToRemove:s}=this.props;s&&s()}render(){return null}}function w_(a){const[s,r]=G_(),o=O.useContext(ud);return l.jsx(gA,{...a,layoutGroup:o,switchLayoutGroup:O.useContext(S_),isPresent:s,safeToRemove:r})}const mA={pan:{Feature:pA},drag:{Feature:dA,ProjectionNode:x_,MeasureLayout:w_}};function _f(a,s,r){const{props:o}=a;a.animationState&&o.whileHover&&a.animationState.setActive("whileHover",r==="Start");const d="onHover"+r,g=o[d];g&&Ee.postRender(()=>g(s,Ei(s)))}class hA extends $n{mount(){const{current:s}=this.node;s&&(this.unmount=Ry(s,(r,o)=>(_f(this.node,o,"Start"),d=>_f(this.node,d,"End"))))}unmount(){}}class bA extends $n{constructor(){super(...arguments),this.isActive=!1}onFocus(){let s=!1;try{s=this.node.current.matches(":focus-visible")}catch{s=!0}!s||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ii(Si(this.node.current,"focus",()=>this.onFocus()),Si(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function xf(a,s,r){const{props:o}=a;if(a.current instanceof HTMLButtonElement&&a.current.disabled)return;a.animationState&&o.whileTap&&a.animationState.setActive("whileTap",r==="Start");const d="onTap"+(r==="End"?"":r),g=o[d];g&&Ee.postRender(()=>g(s,Ei(s)))}class fA extends $n{mount(){const{current:s}=this.node;if(!s)return;const{globalTapTarget:r,propagate:o}=this.node.props;this.unmount=Uy(s,(d,g)=>(xf(this.node,g,"Start"),(p,{success:b})=>xf(this.node,p,b?"End":"Cancel")),{useGlobalTarget:r,stopPropagation:(o==null?void 0:o.tap)===!1})}unmount(){}}const sd=new WeakMap,Mu=new WeakMap,_A=a=>{const s=sd.get(a.target);s&&s(a)},xA=a=>{a.forEach(_A)};function GA({root:a,...s}){const r=a||document;Mu.has(r)||Mu.set(r,{});const o=Mu.get(r),d=JSON.stringify(s);return o[d]||(o[d]=new IntersectionObserver(xA,{root:a,...s})),o[d]}function kA(a,s,r){const o=GA(s);return sd.set(a,r),o.observe(a),()=>{sd.delete(a),o.unobserve(a)}}const yA={some:0,all:1};class vA extends $n{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var _;(_=this.stopObserver)==null||_.call(this);const{viewport:s={}}=this.node.getProps(),{root:r,margin:o,amount:d="some",once:g}=s,p={root:r?r.current:void 0,rootMargin:o,threshold:typeof d=="number"?d:yA[d]},b=h=>{const{isIntersecting:f}=h;if(this.isInView===f||(this.isInView=f,g&&!f&&this.hasEnteredView))return;f&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",f);const{onViewportEnter:G,onViewportLeave:k}=this.node.getProps(),y=f?G:k;y&&y(h)};this.stopObserver=kA(this.node.current,p,b)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:s,prevProps:r}=this.node;["amount","margin","root"].some(MA(s,r))&&this.startObserver()}unmount(){var s;(s=this.stopObserver)==null||s.call(this),this.hasEnteredView=!1,this.isInView=!1}}function MA({viewport:a={}},{viewport:s={}}={}){return r=>a[r]!==s[r]}const AA={inView:{Feature:vA},tap:{Feature:fA},focus:{Feature:bA},hover:{Feature:hA}},TA={layout:{ProjectionNode:x_,MeasureLayout:w_}},SA={...QM,...AA,...mA,...TA},$t=FM(SA,KM),D_=O.createContext(void 0),IA={LATAM:{"nav.inicio":"Inicio","nav.novedades":"Novedades","nav.servicios":"Servicios","nav.evo":"Evo","nav.otros":"Otros códigos","nav.guia":"Guía","nav.tutoriales":"Tutoriales","nav.descargas":"Descargas","nav.guia_script":"Guía Script MGG","home.search_placeholder":"Nombre o código...","home.sort_az":"Nombre A-Z","home.sort_za":"Nombre Z-A","home.sort_code_asc":"Código Asc.","home.sort_code_desc":"Código Desc.","home.sort_hp_desc":"M. Mayor Vida","home.sort_atk_desc":"M. Mayor Ataque","home.sort_spd_desc":"M. Mayor Velocidad","home.show":"Mostrar","home.hide":"Ocultar","home.filtered":"Filtrados","home.total_base":"Base Total","services.title":"Servicios Exclusivos","services.subtitle":"Potencia tu cuenta con nuestros servicios especializados de Mutants: Genetic Gladiators.","services.buy":"Adquirir","services.payment_methods":"Métodos de Pago","services.contact_us":"Contáctanos","region.latam":"LATAM","region.usd":"USD","tip.label":"Tip:","tip.text":"Para asegurar la sincronización de datos, se recomienda acceder vía Facebook o limpiar cookies/caché del navegador (Modo Incógnito).","footer.renovated":"Versión renovada","footer.nav":"Navegación","footer.legal":"Información Legal","footer.terms":"Términos y Condiciones","footer.rights":"© 2026 Smith Luque. Todos los derechos reservados.","footer.desc":"Base de datos de códigos de Mutantes de MGG para Game Guardian. Aquí hay contenido para aprender y recursos para usar.","whatsapp.title":"Grupo de WhatsApp","whatsapp.desc":"Únete para ayuda, consejos y enseñanza dentro de la comunidad.","whatsapp.btn":"Unirme al grupo","stats.mutants":"Mutantes","stats.version":"Versión","home.main_database":"Base principal","home.main_desc":"Lista completa de mutantes con búsqueda rápida, filtros por genes y carga automática desde tu archivo de códigos.","home.featured_mutants":"Novedades Destacadas","home.explore_catalog":"Explorar Lista de Mutantes","home.reset_engine":"Reiniciar Motor","home.genetic_config":"Configuración Genética","home.search_engine":"Motor de Búsqueda","home.sort_filters":"Filtros de Orden","home.no_results":"No se encontraron mutantes con esos filtros.","home.hidden_results":"Resultados ocultos.","home.active":"Activos","home.total":"Total","gene.dominant":"Dominante","gene.active":"Activo","gene.inactive":"Inactivo","layout.by_author":"Por Smith Luque","layout.select_language":"SELECCIONAR IDIOMA","layout.active_support":"Grupo Activo","mutant.verified":"Verificado","mutant.extract_code":"Extraer Código","home.load_more_rem":"Cargar más ({rem} restantes)","layout.color_theme":"Color de Diseño","home.single_gene_only":"Solo 1 Gen (Monogénicos)","home.all_genes":"Todos los genes","home.announcement_title":"Anuncio Importante","home.announcement_desc":"Me disculpo sinceramente por haber publicado previamente algunas estadísticas con errores. El problema ya ha sido completamente solucionado con los datos correctos. Si detectas cualquier otro inconveniente o error, por favor no dudes en contactarme.","home.names_language":"Idioma de Nombres","profile.developer":"Desarrollador Full Stack","profile.founder":"Fundador de Sistema Mutodex"},USD:{"nav.inicio":"Home","nav.novedades":"News","nav.servicios":"Services","nav.evo":"Evo Calc","nav.otros":"Other Codes","nav.guia":"Guide","nav.tutoriales":"Tutorials","nav.descargas":"Downloads","nav.guia_script":"MGG Script Guide","home.search_placeholder":"Name or code...","home.sort_az":"Name A-Z","home.sort_za":"Name Z-A","home.sort_code_asc":"Code Asc.","home.sort_code_desc":"Code Desc.","home.sort_hp_desc":"M. Highest HP","home.sort_atk_desc":"M. Highest ATK","home.sort_spd_desc":"M. Highest Speed","home.show":"Show","home.hide":"Hide","home.filtered":"Filtered","home.total_base":"Total Base","services.title":"Exclusive Services","services.subtitle":"Boost your account with our specialized Mutants: Genetic Gladiators services.","services.buy":"Purchase","services.payment_methods":"Payment Methods","services.contact_us":"Contact Us","region.latam":"LATAM","region.usd":"USD","tip.label":"Tip:","tip.text":"To ensure data synchronization, it is recommended to access via Facebook or clear browser cookies/cache (Incognito Mode).","footer.renovated":"Renewed Version","footer.nav":"Navigation","footer.legal":"Legal Information","footer.terms":"Terms & Conditions","footer.rights":"© 2026 Smith Luque. All rights reserved.","footer.desc":"MGG Mutant code database for Game Guardian. Here is content to learn and resources to use.","whatsapp.title":"WhatsApp Group","whatsapp.desc":"Join for help, tips, and teaching within the community.","whatsapp.btn":"Join the group","stats.mutants":"Mutants","stats.version":"Version","home.main_database":"Main Database","home.main_desc":"Full mutant list with fast search, gene filters, and automatic code loading.","home.featured_mutants":"Featured New Mutants","home.explore_catalog":"Explore Mutant List","home.reset_engine":"Reset Engine","home.genetic_config":"Genetic Configuration","home.search_engine":"Search Engine","home.sort_filters":"Sort Filters","home.no_results":"No mutants found with those filters.","home.hidden_results":"Results hidden.","home.active":"Active","home.total":"Total","gene.dominant":"Dominant","gene.active":"Active","gene.inactive":"Inactive","layout.by_author":"By Smith Luque","layout.select_language":"SELECT LANGUAGE","layout.active_support":"Active Support","mutant.verified":"Verified","mutant.extract_code":"Extract Code","home.load_more_rem":"Load More ({rem} remaining)","layout.color_theme":"Design Color","home.single_gene_only":"Single Gene Only (Pure)","home.all_genes":"All Genes","home.announcement_title":"Important Announcement","home.announcement_desc":"I sincerely apologize for previously publishing some incorrect stats. The issue has now been fully resolved with correct data. If you notice any other issues, please feel free to contact me.","home.names_language":"Names Language","profile.developer":"Full Stack Developer","profile.founder":"Founder of Sistema Mutodex"},PT:{"nav.inicio":"Início","nav.novedades":"Novidades","nav.servicios":"Serviços","nav.evo":"Evo","nav.otros":"Outros códigos","nav.guia":"Guia","nav.tutoriales":"Tutoriais","nav.descargas":"Downloads","nav.guia_script":"Guia Script MGG","home.search_placeholder":"Nome ou código...","home.sort_az":"Nome A-Z","home.sort_za":"Nome Z-A","home.sort_code_asc":"Código Cresc.","home.sort_code_desc":"Código Decresc.","home.sort_hp_desc":"M. Maior Vida","home.sort_atk_desc":"M. Maior Ataque","home.sort_spd_desc":"M. Maior Velocidade","home.show":"Mostrar","home.hide":"Ocultar","home.filtered":"Filtrados","home.total_base":"Total Base","services.title":"Serviços Exclusivos","services.subtitle":"Melhore sua conta com nossos serviços especializados de Mutants: Genetic Gladiators.","services.buy":"Adquirir","services.payment_methods":"Métodos de Pagamento","services.contact_us":"Contate-nos","region.latam":"LATAM","region.usd":"USD","tip.label":"Dica:","tip.text":"Para garantir a sincronização de dados, recomenda-se acessar via Facebook ou limpar os cookies/cache do navegador (Modo Incógnito).","footer.renovated":"Versão Renovada","footer.nav":"Navegação","footer.legal":"Informação Legal","footer.terms":"Termos e Condições","footer.rights":"© 2026 Smith Luque. Todos os direitos reservados.","footer.desc":"Banco de dados de códigos de Mutants MGG para Game Guardian. Conteúdos para aprendizagem e recursos.","whatsapp.title":"Grupo de WhatsApp","whatsapp.desc":"Entre para obter ajuda, dicas e suporte na comunidade.","whatsapp.btn":"Entrar no grupo","stats.mutants":"Mutantes","stats.version":"Versão","home.main_database":"Base Principal","home.main_desc":"Lista completa de mutantes com busca rápida, filtros de genes e carregamento automático a partir do seu arquivo de códigos.","home.featured_mutants":"Novidades em Destaque","home.explore_catalog":"Explorar Lista de Mutantes","home.reset_engine":"Reiniciar Mecanismo","home.genetic_config":"Configuração Genética","home.search_engine":"Mecanismo de Busca","home.sort_filters":"Filtros de Ordenação","home.no_results":"Nenhum mutante encontrado com esses filtros.","home.hidden_results":"Resultados ocultos.","home.active":"Ativos","home.total":"Total","gene.dominant":"Dominante","gene.active":"Ativo","gene.inactive":"Inativo","layout.by_author":"Por Smith Luque","layout.select_language":"SELECIONAR IDIOMA","layout.active_support":"Grupo Ativo","mutant.verified":"Verificado","mutant.extract_code":"Extrair Código","home.load_more_rem":"Carregar mais ({rem} restantes)","layout.color_theme":"Cor do Design","home.single_gene_only":"Apenas 1 Gene (Monogênicos)","home.all_genes":"Todos os genes","home.announcement_title":"Anúncio Importante","home.announcement_desc":"Peço desculpas sinceras por postar anteriormente algumas estatísticas com erros. O problema já foi totalmente resolvido com os dados corretos. Se notar qualquer outro problema, entre em contato comigo.","home.names_language":"Idioma dos Nomes","profile.developer":"Desenvolvedor Full Stack","profile.founder":"Fundador do Sistema Mutodex"},FR:{"nav.inicio":"Accueil","nav.novedades":"Actualités","nav.servicios":"Services","nav.evo":"Evos","nav.otros":"Autres codes","nav.guia":"Guide","nav.tutoriales":"Tutoriels","nav.descargas":"Téléchargements","nav.guia_script":"Guide Script MGG","home.search_placeholder":"Nom ou code...","home.sort_az":"Nom A-Z","home.sort_za":"Nom Z-A","home.sort_code_asc":"Code Asc.","home.sort_code_desc":"Code Desc.","home.sort_hp_desc":"M. Plus de vie","home.sort_atk_desc":"M. Plus d'attaque","home.sort_spd_desc":"M. Plus de vitesse","home.show":"Afficher","home.hide":"Masquer","home.filtered":"Filtrés","home.total_base":"Base totale","services.title":"Services exclusifs","services.subtitle":"Améliorez votre compte avec nos services spécialisés Mutants: Genetic Gladiators.","services.buy":"Acheter","services.payment_methods":"Modes de paiement","services.contact_us":"Contactez-nous","region.latam":"LATAM","region.usd":"USD","tip.label":"Conseil:","tip.text":"Pour garantir la synchronisation des données, il est recommandé de se connecter via Facebook ou d'effacer les cookies/cache du navigateur (Mode Incognito).","footer.renovated":"Version rénovée","footer.nav":"Navigation","footer.legal":"Informations légales","footer.terms":"Conditions générales","footer.rights":"© 2026 Smith Luque. Tous droits réservés.","footer.desc":"Base de données des codes Mutants MGG pour Game Guardian. Tutoriels d'apprentissage et ressources à utiliser.","whatsapp.title":"Groupe WhatsApp","whatsapp.desc":"Rejoignez-nous pour obtenir de l'aide, des conseils et échanger avec la communauté.","whatsapp.btn":"Rejoindre le groupe","stats.mutants":"Mutants","stats.version":"Version","home.main_database":"Base principale","home.main_desc":"Liste complète des mutants avec recherche rapide, filtres de gènes et chargement automatique depuis votre fichier de codes.","home.featured_mutants":"Nouveautés en Vedette","home.explore_catalog":"Explorer la Liste des Mutants","home.reset_engine":"Réinitialiser le moteur","home.genetic_config":"Configuration Génétique","home.search_engine":"Moteur de Recherche","home.sort_filters":"Filtres de Tri","home.no_results":"Aucun mutant trouvé avec ces filtres.","home.hidden_results":"Résultats masqués.","home.active":"Actifs","home.total":"Total","gene.dominant":"Dominant","gene.active":"Actif","gene.inactive":"Inactif","layout.by_author":"Par Smith Luque","layout.select_language":"SÉLECTIONNER LA LANGUE","layout.active_support":"Groupe Actif","mutant.verified":"Vérifié","mutant.extract_code":"Extraire le Code","home.load_more_rem":"Charger plus ({rem} restants)","layout.color_theme":"Couleur du Design","home.single_gene_only":"Un seul gène (Monogénique)","home.all_genes":"Tous les gènes","home.announcement_title":"Annonce Importante","home.announcement_desc":"Je m'excuse sincèrement pour avoir publié précédemment des statistiques erronées. Le problème a été entièrement résolu avec les données correctes. Si vous remarquez un autre problème, n'hésitez pas à me contacter.","home.names_language":"Langue de Noms","profile.developer":"Développeur Full Stack","profile.founder":"Fondateur de Système Mutodex"},DE:{"nav.inicio":"Startseite","nav.novedades":"Neuigkeiten","nav.servicios":"Dienste","nav.evo":"Evo","nav.otros":"Andere Codes","nav.guia":"Leitfaden","nav.tutoriales":"Tutorials","nav.descargas":"Downloads","nav.guia_script":"MGG Script-Guide","home.search_placeholder":"Name oder Code...","home.sort_az":"Name A-Z","home.sort_za":"Name Z-A","home.sort_code_asc":"Code Aufst.","home.sort_code_desc":"Code Abst.","home.sort_hp_desc":"M. Höchste LP","home.sort_atk_desc":"M. Höchster Angriff","home.sort_spd_desc":"M. Höchste Geschwindigkeit","home.show":"Anzeigen","home.hide":"Ausblenden","home.filtered":"Gefiltert","home.total_base":"Gesamtbasis","services.title":"Exklusive Dienste","services.subtitle":"Verbessern Sie Ihr Konto mit unseren spezialisierten Mutants: Genetic Gladiators-Diensten.","services.buy":"Erwerben","services.payment_methods":"Zahlungsarten","services.contact_us":"Kontakt","region.latam":"LATAM","region.usd":"USD","tip.label":"Tipp:","tip.text":"Um die Datensynchronisation sicherzustellen, wird empfohlen, sich über Facebook anzumelden oder Browser-Cookies/-Cache zu löschen (Inkognito-Modus).","footer.renovated":"Renovierte Version","footer.nav":"Navigation","footer.legal":"Rechtliche Hinweise","footer.terms":"AGB","footer.rights":"© 2026 Smith Luque. Alle Rechte vorbehalten.","footer.desc":"MGG Mutanten-Code-Datenbank für Game Guardian. Tutorials zum Lernen und Ressourcen zur Nutzung.","whatsapp.title":"WhatsApp-Gruppe","whatsapp.desc":"Treten Sie bei für Hilfe, Tipps und Austausch in der Gesellschaft.","whatsapp.btn":"Gruppe beitreten","stats.mutants":"Mutanten","stats.version":"Version","home.main_database":"Haupt-Datenbank","home.main_desc":"Vollständige Mutantenliste mit Schnellsuche, Genfiltern und automatischem Laden von Codes.","home.featured_mutants":"Hervorgehobene Neuigkeiten","home.explore_catalog":"Mutantenliste erkunden","home.reset_engine":"Zuchtrechner zurücksetzen","home.genetic_config":"Genetische Konfiguration","home.search_engine":"Suchmaschine","home.sort_filters":"Sortierfilter","home.no_results":"Keine Mutanten mit diesen Filtern gefunden.","home.hidden_results":"Ergebnisse ausgeblendet.","home.active":"Aktiv","home.total":"Gesamt","gene.dominant":"Dominant","gene.active":"Aktiv","gene.inactive":"Inaktiv","layout.by_author":"Von Smith Luque","layout.select_language":"SPRACHE AUSWÄHLEN","layout.active_support":"Aktive Gruppe","mutant.verified":"Verifiziert","mutant.extract_code":"Code Extrahieren","home.load_more_rem":"Mehr laden ({rem} verbleibend)","layout.color_theme":"Design Farbe","home.single_gene_only":"Nur 1 Gen (Monogenisch)","home.all_genes":"Alle Gene","home.announcement_title":"Wichtige Ankündigung","home.announcement_desc":"Ich entschuldige mich aufrichtig dafür, dass ich zuvor fehlerhafte Statistiken veröffentlicht habe. Das Problem wurde mit den korrekten Daten vollständig behoben. Wenn Sie weitere Fehler bemerken, kontaktieren Sie mich bitte.","home.names_language":"Sprache der Namen","profile.developer":"Full Stack Entwickler","profile.founder":"Gründer von Sistema Mutodex"}},jA={blue:{brand:"#2563eb",brand2:"#3b82f6"},green:{brand:"#14532d",brand2:"#15803d"},red:{brand:"#dc2626",brand2:"#ef4444"},pink:{brand:"#db2777",brand2:"#ec4899"},purple:{brand:"#7c3aed",brand2:"#8b5cf6"},white:{brand:"#d1d5db",brand2:"#ffffff"}},VA=({children:a})=>{const[s,r]=O.useState(()=>localStorage.getItem("user-color-theme")||"blue"),o=k=>{localStorage.setItem("user-color-theme",k),r(k)};O.useEffect(()=>{const k=jA[s];k&&(document.documentElement.style.setProperty("--blue-brand",k.brand),document.documentElement.style.setProperty("--blue-brand-2",k.brand2))},[s]);const[d,g]=O.useState(()=>{const k=localStorage.getItem("user-region"),y=localStorage.getItem("user-country-code"),M=!!localStorage.getItem("user-manual-force");let I=k||"LATAM";y==="PE"&&(I="LATAM");const S=y?p(y):1;return{region:I,countryCode:y||null,multiplier:S,isManual:M,detectedCountry:null}});O.useEffect(()=>{const k=localStorage.getItem("user-region"),y=localStorage.getItem("user-country-code"),M=!!localStorage.getItem("user-manual-force");y==="PE"&&k==="USD"&&!M&&(localStorage.setItem("user-region","LATAM"),g(I=>({...I,region:"LATAM"})))},[]);function p(k){const y=k.toUpperCase(),M=Xf.find(I=>I.id.toUpperCase()===y);if(M)return M.rate;for(const[I,S]of Object.entries(j2))if(S.includes(y))return parseFloat(I);return nb.includes(y)?1.5:1}const b=async()=>{var k;try{const I=(k=(await(await fetch("https://ipapi.co/json/")).json()).country_code)==null?void 0:k.toUpperCase();if(!I)return;const S=nb.includes(I),N=I==="PE",X=p(I),z=localStorage.getItem("user-region");let V=S?"USD":"LATAM";z&&(N&&z==="USD"&&!localStorage.getItem("user-manual-force")?V="LATAM":V=z),g(Z=>({...Z,region:V,countryCode:Z.isManual?Z.countryCode:I,detectedCountry:I,multiplier:Z.isManual?Z.multiplier:X}))}catch(y){console.error("IP Detection failed:",y)}};O.useEffect(()=>{b()},[]);const _=k=>{localStorage.setItem("user-region",k),localStorage.setItem("user-manual-force","true"),g(y=>({...y,region:k,isManual:!0}))},h=k=>{const y=k.toUpperCase(),M=p(y),S=["PE","MX","AR","CL","CO","BO","VE","EC","UY","PY","PA","PR","CR","HN","SV","NI","GT","DO","ES"].includes(y)?"LATAM":"USD";localStorage.setItem("user-region",S),localStorage.setItem("user-country-code",y),localStorage.setItem("user-manual-force","true"),g(N=>({...N,region:S,countryCode:y,multiplier:M,isManual:!0}))},f=()=>{localStorage.removeItem("user-region"),localStorage.removeItem("user-country-code"),localStorage.removeItem("user-manual-force"),g(k=>({...k,isManual:!1})),b()},G=(k,y)=>{let M=IA[d.region][k]||k;return y&&Object.entries(y).forEach(([I,S])=>{M=M.replace(`{${I}}`,String(S))}),M};return l.jsx(D_.Provider,{value:{...d,colorTheme:s,setColorTheme:o,setRegion:_,setCountry:h,resetSelection:f,translate:G},children:a})},_t=()=>{const a=O.useContext(D_);if(a===void 0)throw new Error("useRegion must be used within a RegionProvider");return a},Gf={"/":Du,"/novedades":rd,"/servicios":_i,"/evo":T2,"/otros":ju,"/guia":br,"/tutoriales":or,"/descargas":od},ar={LATAM:{flag:"🇪🇸",label:"Español"},USD:{flag:"🇺🇸",label:"English"},PT:{flag:"🇵🇹",label:"Português"},FR:{flag:"🇫🇷",label:"Français"},DE:{flag:"🇩🇪",label:"Deutsch"}};function EA({children:a,currentPath:s,onNavigate:r,isOnline:o}){var V,Z;const[d,g]=O.useState(!1),[p,b]=O.useState(!1),{region:_,setRegion:h,countryCode:f,setCountry:G,translate:k,colorTheme:y,setColorTheme:M}=_t(),I=_!=="LATAM"&&_!=="PT"?"https://chat.whatsapp.com/IdBIvXWUPNjDLcPmBvkp1B":cd,S=H=>{r(H),g(!1),window.scrollTo({top:0,behavior:"smooth"})},N="text-blue-brand-2",X="from-blue-brand to-blue-brand-2";return l.jsxs("div",{className:"min-h-screen",children:[l.jsx("div",{className:"grid-overlay"}),l.jsxs("header",{className:"site-header sticky top-0 z-50 transition-all duration-300",children:[l.jsx("div",{className:"absolute inset-0 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.4)] bg-[#050a14]/60"}),l.jsxs("div",{className:"mx-auto px-4 lg:px-8 header-inner relative flex items-center justify-between min-h-[64px] max-w-[1400px]",children:[l.jsxs("div",{className:"brand flex items-center gap-3 cursor-pointer group",onClick:()=>S("/"),children:[l.jsxs("div",{className:"relative",children:[l.jsx("div",{className:"absolute inset-0 blur-md opacity-0 group-hover:opacity-40 transition-opacity bg-blue-brand"}),l.jsx("div",{className:`brand-logo w-9 h-9 md:w-10 md:h-10 relative flex items-center justify-center rounded-lg md:rounded-xl bg-gradient-to-br ${X} overflow-hidden shadow-lg group-hover:scale-105 transition-transform shrink-0 border border-white/20`,children:l.jsx("img",{src:"https://github.com/luqueSmith/MGG/blob/main/img/Logo_mgg.png?raw=true",alt:"Logo MGG",className:"w-full h-full object-cover"})})]}),l.jsxs("div",{className:"flex flex-col text-left",children:[l.jsx("strong",{className:`block text-white text-[13px] md:text-[15px] font-black tracking-tight uppercase leading-none mb-0.5 group-hover:${N} transition-colors`,children:"Mutodex MGG"}),l.jsx("span",{className:`block text-[7px] md:text-[9px] ${N} uppercase tracking-[0.25em] font-black opacity-80`,children:k("layout.by_author")})]})]}),l.jsx("nav",{className:"hidden",children:ru.map(H=>{const C=Gf[H.path]||Du,P=s===H.path,K=H.key;return l.jsxs("button",{onClick:()=>S(H.path),className:`flex items-center gap-2 px-3 py-2 rounded-xl text-[11px] font-black uppercase tracking-wider border transition-all duration-300 relative group/btn ${P?"bg-blue-brand/20 border-blue-brand text-white shadow-[0_2px_15px_rgba(37,99,235,0.25)]":"text-slate-400 border-transparent hover:bg-white/5 hover:text-white"}`,children:[l.jsx(C,{size:14,className:`${P?"text-blue-brand-2 animate-pulse":"text-slate-400 group-hover/btn:scale-110 transition-transform"}`}),l.jsx("span",{children:k(K)})]},H.path)})}),l.jsxs("div",{className:"flex items-center gap-2 md:gap-3",children:[l.jsxs("div",{className:"hidden",children:[l.jsxs("span",{className:"text-[10px] text-slate-400 font-black uppercase tracking-wider mr-1",children:[k("layout.color_theme"),":"]}),["blue","green","red","pink","purple","white"].map(H=>{const C=y===H,P={blue:"bg-[#2563eb]",green:"bg-[#14532d]",red:"bg-[#dc2626]",pink:"bg-[#db2777]",purple:"bg-[#7c3aed]",white:"bg-white"};return l.jsx("button",{onClick:()=>M(H),title:H.toUpperCase(),className:`w-4.5 h-4.5 rounded-full ${P[H]} transition-all duration-300 relative shrink-0 cursor-pointer ${C?"scale-115 ring-2 ring-offset-2 ring-offset-[#050a14] ring-white shadow-lg":"opacity-60 hover:opacity-100 hover:scale-105"}`,children:C&&l.jsx("span",{className:"absolute inset-0 m-auto w-1 h-1 rounded-full bg-[#050a14]"})},H)})]}),l.jsxs("div",{className:"relative",children:[l.jsxs("button",{onClick:()=>b(!p),className:"flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-[10px] md:text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer",children:[l.jsx("span",{className:"text-sm md:text-base",children:((V=ar[_])==null?void 0:V.flag)||"🇪🇸"}),l.jsx("span",{className:"hidden sm:inline",children:((Z=ar[_])==null?void 0:Z.label)||"Español"}),l.jsx("span",{className:"text-slate-500 text-[8px] opacity-60",children:"▼"})]}),l.jsx(hr,{children:p&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>b(!1)}),l.jsxs($t.div,{initial:{opacity:0,y:10,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.95},transition:{duration:.15},className:"absolute right-0 mt-2 w-48 rounded-2xl bg-[#091224] border border-white/10 shadow-2xl p-2 z-50 flex flex-col gap-1",children:[l.jsx("span",{className:"text-[8px] text-slate-500 uppercase font-black tracking-widest block px-3 py-1.5 border-b border-white/5 mb-1",children:k("layout.select_language")}),Object.keys(ar).map(H=>{const C=ar[H],P=_===H;return l.jsxs("button",{onClick:()=>{h(H),b(!1)},className:`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-left text-[11px] font-black uppercase transition-all cursor-pointer ${P?"bg-blue-brand/20 text-white border border-blue-brand/35 shadow-[0_2px_10px_rgba(37,99,235,0.2)]":"text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"}`,children:[l.jsx("span",{className:"text-sm leading-none",children:C.flag}),l.jsx("span",{children:C.label})]},H)})]})]})})]}),l.jsxs("button",{className:"w-11 h-11 flex flex-col items-center justify-center gap-1.5 border border-white/10 rounded-xl text-white bg-white/5 active:scale-95 transition-all relative overflow-hidden group",onClick:()=>g(!d),children:[l.jsx("div",{className:"absolute inset-0 bg-blue-brand opacity-0 group-active:opacity-10 transition-opacity"}),l.jsx(hr,{mode:"wait",children:d?l.jsx($t.div,{initial:{rotate:-90,opacity:0,scale:.5},animate:{rotate:0,opacity:1,scale:1},exit:{rotate:90,opacity:0,scale:.5},children:l.jsx(eb,{size:22,className:"text-blue-brand-2"})},"x"):l.jsxs($t.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"flex flex-col gap-1.25 items-center justify-center",children:[l.jsx("span",{className:"w-5 h-0.5 bg-white rounded-full block"}),l.jsx("span",{className:"w-5 h-0.5 bg-blue-brand-2 rounded-full block"}),l.jsx("span",{className:"w-3 h-0.5 bg-white rounded-full block self-end"})]},"menu")})]})]})]})]}),l.jsx(hr,{children:d&&l.jsxs(l.Fragment,{children:[l.jsx($t.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>g(!1),className:"fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm"}),l.jsxs($t.nav,{initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{type:"spring",damping:25,stiffness:200},className:"fixed top-0 right-0 bottom-0 w-[280px] md:w-[340px] z-[60] bg-[#050a14] border-l border-white/10 flex flex-col shadow-2xl shadow-blue-brand/20",children:[l.jsx("div",{className:"absolute inset-0 opacity-5 pointer-events-none bg-grid-slate-900/[0.1] bg-[bottom_1px_center] [mask-image:linear-gradient(to_bottom,white,transparent)]"}),l.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-brand to-transparent opacity-50"}),l.jsxs("header",{className:"flex items-center justify-between p-4 border-b border-white/10 relative z-10 bg-black/40",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"w-12 h-12 rounded-xl overflow-hidden border border-white/10 shadow-lg shadow-blue-brand/20 bg-[#0a1224] flex items-center justify-center shrink-0",children:l.jsx("img",{src:"https://github.com/luqueSmith/MGG/blob/main/img/Logo_mgg.png?raw=true",alt:"",className:"w-10 h-10 object-contain"})}),l.jsxs("div",{className:"flex flex-col gap-0.5",children:[l.jsx("strong",{className:"text-[13px] font-black uppercase text-white tracking-tight leading-none",children:"Sistema Mutodex"}),l.jsx("span",{className:"text-[8px] text-blue-brand-2 font-black uppercase tracking-[0.2em] opacity-80 leading-none mt-0.5",children:"v2.1.2 Build 550"})]})]}),l.jsx("button",{onClick:()=>g(!1),className:"w-10 h-10 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 text-white/50 hover:text-white transition-colors active:scale-90",children:l.jsx(eb,{size:18})})]}),l.jsxs("div",{className:"flex-1 overflow-y-auto p-5 flex flex-col gap-3.5 relative z-10 scrollbar-none",children:[l.jsx("div",{className:"space-y-2.5 pb-2",children:ru.map((H,C)=>{const P=Gf[H.path]||Du,K=s===H.path,Y=H.key;return l.jsxs($t.button,{initial:{opacity:0,x:25},animate:{opacity:1,x:0},transition:{delay:C*.04,type:"spring",stiffness:150},onClick:()=>S(H.path),className:`flex items-center gap-4 w-full p-3.5 rounded-2xl text-[13px] md:text-sm font-black uppercase tracking-wider transition-all relative group border ${K?"bg-blue-brand/20 text-white border-blue-brand shadow-[0_4px_25px_rgba(37,99,235,0.25)] scale-[1.02]":"bg-white/[0.03] text-slate-300 border-white/5 hover:bg-white/8 hover:text-white hover:scale-[1.01]"}`,children:[l.jsx("div",{className:`p-2 rounded-xl transition-all ${K?"bg-blue-brand text-white shadow-md":"bg-white/5 group-hover:bg-white/10 group-hover:scale-105"}`,children:l.jsx(P,{size:18})}),l.jsx("span",{className:"relative z-10 font-extrabold tracking-wide",children:k(Y)}),K&&l.jsx("div",{className:"ml-auto w-1.5 h-4 bg-blue-brand-2 rounded-full shadow-[0_0_12px_#3b82f6]"})]},H.path)})}),l.jsxs("div",{className:"border-t border-white/10 pt-5 mt-3",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-3.5 px-2",children:[l.jsx(Of,{size:13,className:"text-blue-brand-2 animate-pulse"}),l.jsx("span",{className:"text-[10px] text-slate-400 font-black uppercase tracking-[0.15em] leading-none",children:k("layout.color_theme")})]}),l.jsx("div",{className:"bg-white/[0.02] border border-white/5 rounded-2xl p-2 grid grid-cols-2 gap-2",children:["blue","green","red","pink","purple","white"].map(H=>{const C=y===H,K={blue:{label:"BLUE",dotBg:"bg-[#2563eb]",activeStyle:"border-[#2563eb]/50 text-blue-400 bg-[#2563eb]/10 shadow-[0_0_12px_rgba(37,99,235,0.35)] scale-[1.02]",inactiveStyle:"border-white/5 bg-white/[0.02] text-slate-400 hover:text-white",glowBg:"bg-[#2563eb]"},green:{label:"GREEN",dotBg:"bg-[#15803d]",activeStyle:"border-[#15803d]/60 text-green-400 bg-[#15803d]/15 shadow-[0_0_12px_rgba(21,128,61,0.4)] scale-[1.02]",inactiveStyle:"border-white/5 bg-white/[0.02] text-slate-400 hover:text-white",glowBg:"bg-[#15803d]"},red:{label:"RED",dotBg:"bg-[#dc2626]",activeStyle:"border-[#dc2626]/50 text-red-400 bg-[#dc2626]/10 shadow-[0_0_12px_rgba(220,38,38,0.4)] scale-[1.02]",inactiveStyle:"border-white/5 bg-white/[0.02] text-slate-400 hover:text-white",glowBg:"bg-[#dc2626]"},pink:{label:"PINK",dotBg:"bg-[#db2777]",activeStyle:"border-[#db2777]/50 text-pink-400 bg-[#db2777]/10 shadow-[0_0_12px_rgba(219,39,119,0.35)] scale-[1.02]",inactiveStyle:"border-white/5 bg-white/[0.02] text-slate-400 hover:text-white",glowBg:"bg-[#db2777]"},purple:{label:"PURPLE",dotBg:"bg-[#7c3aed]",activeStyle:"border-[#7c3aed]/50 text-purple-400 bg-[#7c3aed]/10 shadow-[0_0_12px_rgba(124,58,237,0.35)] scale-[1.02]",inactiveStyle:"border-white/5 bg-white/[0.02] text-slate-400 hover:text-white",glowBg:"bg-[#7c3aed]"},white:{label:"WHITE",dotBg:"bg-white",activeStyle:"border-white/30 text-white bg-white/10 shadow-[0_0_12px_rgba(255,255,255,0.25)] scale-[1.02]",inactiveStyle:"border-white/5 bg-white/[0.02] text-slate-400 hover:text-white",glowBg:"bg-white"}}[H];return l.jsxs("button",{onClick:()=>M(H),className:`flex items-center gap-2.5 w-full py-3 px-3 rounded-[14px] text-[10px] font-black uppercase tracking-wider transition-all duration-300 border active:scale-95 cursor-pointer relative group ${C?K.activeStyle:K.inactiveStyle}`,children:[l.jsxs("div",{className:"relative flex items-center justify-center shrink-0 w-4 h-4",children:[C&&l.jsx($t.div,{layoutId:`dot-glow-${H}`,className:`absolute -inset-0.5 rounded-full blur-sm opacity-50 ${K.glowBg}`}),l.jsx("div",{className:`w-3.5 h-3.5 rounded-full ${K.dotBg} border border-white/15 relative z-10 transition-transform group-hover:scale-110 shadow-inner`})]}),l.jsx("span",{className:`font-black relative z-10 transition-colors ${C?"text-white":"text-slate-400 group-hover:text-white"}`,children:K.label}),C&&l.jsx("div",{className:"ml-auto flex items-center shrink-0",children:l.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${K.glowBg} animate-pulse relative`})})]},H)})})]}),l.jsx("div",{className:"border-t border-white/10 pt-5 mt-3",children:l.jsxs("a",{href:I,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-between p-4 rounded-2xl bg-[#25d366]/10 border border-[#25d366]/30 text-white hover:bg-[#25d366]/15 transition-all group scale-[1] active:scale-95",children:[l.jsxs("div",{className:"flex items-center gap-3.5",children:[l.jsx("div",{className:"p-2.5 rounded-xl bg-[#25d366] text-white shadow-[0_0_12px_rgba(37,211,102,0.35)] shrink-0",children:l.jsx(_r,{size:16})}),l.jsxs("div",{className:"flex flex-col text-left",children:[l.jsx("span",{className:"text-[11px] font-black uppercase text-[#25d366] tracking-wider leading-none mb-1",children:k("layout.active_support")}),l.jsx("span",{className:"text-[10px] text-slate-300 font-bold leading-tight",children:k("whatsapp.title")})]})]}),l.jsx("div",{className:"flex items-center justify-center w-6 h-6 rounded-full bg-[#25d366]/15 group-hover:translate-x-0.5 transition-transform shrink-0",children:l.jsx("span",{className:"text-[#25d366] text-xs font-black",children:"→"})})]})})]}),l.jsx("div",{className:"p-4 border-t border-white/10 relative z-10 bg-black/50",children:l.jsxs("div",{className:"flex flex-col gap-2",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx("span",{className:"text-[7px] text-slate-600 uppercase font-black tracking-widest leading-none",children:"Powered by"}),l.jsx("strong",{className:"text-blue-brand-2 text-[9px] uppercase font-black tracking-wider leading-none",children:"Smith Luque"})]}),l.jsx("div",{className:"w-full h-0.5 bg-white/5 rounded-full overflow-hidden",children:l.jsx($t.div,{initial:{width:0},animate:{width:"100%"},transition:{duration:1.5,ease:"easeInOut"},className:"h-full bg-blue-brand"})})]})})]})]})}),l.jsx("main",{className:"app-shell pb-20 pt-4 lg:pt-6",children:l.jsxs("div",{className:"container mx-auto px-4 max-w-[1180px]",children:[l.jsxs("section",{className:"panel mb-6 !p-0 overflow-hidden flex flex-col lg:flex-row items-stretch border transition-all duration-500 bg-blue-brand/5 border-blue-brand/20",children:[l.jsxs("div",{className:"flex items-center gap-6 px-5 py-3 border-b lg:border-b-0 lg:border-r border-white/5 bg-black/20 shrink-0",children:[l.jsxs("div",{className:"flex flex-col",children:[l.jsx("span",{className:`text-[10px] font-black uppercase tracking-widest leading-none mb-1 ${N}`,children:k("stats.mutants")}),l.jsx("strong",{className:"text-white text-sm font-black",children:"550+"})]}),l.jsxs("div",{className:"flex flex-col border-l border-white/10 pl-4",children:[l.jsx("span",{className:`text-[10px] font-black uppercase tracking-widest leading-none mb-1 ${N}`,children:k("stats.version")}),l.jsx("strong",{className:"text-white/80 text-sm font-black",children:"2.1.2"})]})]}),l.jsxs("div",{className:"flex-1 flex items-center gap-3 px-5 py-3 min-h-[50px]",children:[l.jsx("div",{className:"w-2 h-2 rounded-full animate-pulse shrink-0 bg-blue-brand mt-0.5 self-start md:self-center"}),l.jsxs("p",{className:"text-[10px] md:text-xs text-slate-300 font-bold m-0 italic leading-relaxed",children:[l.jsx("span",{className:`${N} uppercase mr-2 opacity-70 whitespace-nowrap`,children:k("tip.label")}),k("tip.text")]})]}),l.jsx("div",{className:"hidden xl:flex items-center gap-2 px-5 py-3 bg-black/10 shrink-0",children:l.jsxs("a",{href:I,target:"_blank",rel:"noopener noreferrer",className:"text-[10px] font-black uppercase flex items-center gap-2 hover:brightness-125 transition-all text-green-brand",children:[l.jsx("div",{className:"w-1.5 h-1.5 rounded-full animate-ping bg-green-brand"}),k("layout.active_support")]})})]}),a,l.jsx("section",{className:"panel mt-[18px] transition-all duration-500",children:l.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3.5",children:[l.jsxs("div",{children:[l.jsx("h3",{className:"m-0 mb-1.5 text-lg font-bold",children:k("whatsapp.title")}),l.jsx("p",{className:"text-muted m-0 text-sm",children:k("whatsapp.desc")})]}),l.jsxs("a",{className:"btn px-6 btn-primary",target:"_blank",rel:"noopener noreferrer",href:I,children:[l.jsx(_r,{size:18}),l.jsx("span",{children:k("whatsapp.btn")})]})]})})]})}),l.jsx("footer",{className:"site-footer border-t border-line bg-black/35 py-11",children:l.jsxs("div",{className:"container mx-auto px-4 max-w-[1180px] grid lg:grid-cols-[1.2fr_1fr_0.8fr] gap-6",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"brand flex items-center gap-3.5 mb-3",children:[l.jsx("div",{className:`brand-logo w-11 h-11 flex items-center justify-center rounded-[14px] bg-gradient-to-br ${X} overflow-hidden shadow-lg`,children:l.jsx("img",{src:"https://github.com/luqueSmith/MGG/blob/main/img/Logo_mgg.png?raw=true",alt:"Logo MGG",className:"w-full h-full object-cover"})}),l.jsxs("div",{children:[l.jsx("strong",{className:"block text-white uppercase tracking-tight",children:"Mutodex MGG"}),l.jsx("span",{className:`block text-[11px] ${N} uppercase tracking-[0.22em] font-bold`,children:k("footer.renovated")})]})]}),l.jsx("p",{className:"text-muted text-sm",children:k("footer.desc")})]}),l.jsxs("div",{children:[l.jsx("div",{className:"kv-label mb-3",children:k("footer.nav")}),l.jsx("div",{className:"grid gap-2",children:ru.map(H=>l.jsx("button",{onClick:()=>S(H.path),className:`text-slate-300 hover:text-white text-sm text-left flex items-center gap-2 transition-colors ${s===H.path?N:""}`,children:k(H.key)},H.path))})]}),l.jsxs("div",{children:[l.jsx("div",{className:"kv-label mb-1.5",children:k("footer.legal")}),l.jsxs("div",{className:"flex flex-col gap-2",children:[l.jsx("button",{onClick:()=>S("/terminos"),className:"text-slate-400 hover:text-white text-xs text-left transition-colors",children:k("footer.terms")}),l.jsx("p",{className:"text-muted text-[11px] m-0 leading-relaxed mt-2",children:k("footer.rights")})]})]})]})})]})}const wA=`1. Robot
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_a_01_platinum.png
   Vida: 12,369
   Velocidad: 4.00
   Ataque 1: 2808 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 5610 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: 843 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

2. Robot Débil
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_a_02_platinum.png
   Vida: 3,400
   Velocidad: 2.83
   Ataque 1: 938 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 3570 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: 282 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

3. Androide
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_01_platinum.png
   Vida: 10,540
   Velocidad: 6.67
   Ataque 1: 3529 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 2026 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,059 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

4. Goliat
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_02.png
   Vida: 12,498
   Velocidad: 3.85
   Ataque 1: 6797 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 4536 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,719 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

5. Necrobot
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_01_platinum.png
   Vida: 8,140
   Velocidad: 7.14
   Ataque 1: 2598 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 2598 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 779 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

6. Hypnos
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_02_platinum.png
   Vida: 10,567
   Velocidad: 4.17
   Ataque 1: 4998 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 4998 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,499 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

7. Xenarach
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_03_platinum.png
   Vida: 9,955
   Velocidad: 5.26
   Ataque 1: 3985 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 3985 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 1,594 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

8. Humanoide Pérfido
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_01_platinum.png
   Vida: 9,731
   Velocidad: 5.00
   Ataque 1: 3992 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 3992 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 1,796 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

9. Capitán Mecano
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_02_platinum.png
   Vida: 15,926
   Velocidad: 4.76
   Ataque 1: 5515 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 5515 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 3,309 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

10. Dezinger
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_03_platinum.png
   Vida: 16,279
   Velocidad: 3.45
   Ataque 1: 6963 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 6963 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 2,785 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

11. Escarabot
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_01_platinum.png
   Vida: 12,498
   Velocidad: 3.45
   Ataque 1: 6712 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 6712 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 2,013 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

12. Monocerus
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_02_platinum.png
   Vida: 10,724
   Velocidad: 5.26
   Ataque 1: 4291 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 4291 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 1,888 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

13. Coloso
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_01_platinum.png
   Vida: 11,261
   Velocidad: 4.35
   Ataque 1: 5059 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 5059 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 2,024 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

14. Líbraro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_02_silver.png
   Vida: 11,253
   Velocidad: 9.09
   Ataque 1: 2714 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 2714 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 1,086 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

15. Deus Machina
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_01_platinum.png
   Vida: 9,486
   Velocidad: 5.26
   Ataque 1: 3754 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 3754 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 1,877 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

16. Virgon
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_02_silver.png
   Vida: 8,535
   Velocidad: 10.53
   Ataque 1: 2577 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 2577 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 1,804 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

17. Zombi
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_b_01_platinum.png
   Vida: 9,690
   Velocidad: 6.25
   Ataque 1: 3373 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 3373 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: 1,180 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

18. Zombi Débil
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_b_02_platinum.png
   Vida: 2,720
   Velocidad: 3.73
   Ataque 1: 2142 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 2224 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: 750 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

19. Jack O'Lantern
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_b_03.png
   Vida: 9,693
   Velocidad: 7.14
   Ataque 1: 2655 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 1530 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: 1,328 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

20. Zomborg
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_01_platinum.png
   Vida: 12,553
   Velocidad: 4.55
   Ataque 1: 4481 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 4481 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,465 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

21. Muñeca Diabólica
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_02_platinum.png
   Vida: 11,825
   Velocidad: 7.69
   Ataque 1: 2543 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 2543 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -712 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

22. Lord Blood
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_01_platinum.png
   Vida: 14,627
   Velocidad: 4.17
   Ataque 1: 6215 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 3570 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 3,418 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

23. Espectro de la Cripta
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_02_platinum.png
   Vida: 11,954
   Velocidad: 7.14
   Ataque 1: 3461 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 1979 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 1,731 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

24. Déspota Negro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_01_platinum.png
   Vida: 13,049
   Velocidad: 3.70
   Ataque 1: 5712 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 5712 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 2,742 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

25. Capitán Osamenta
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_02_platinum.png
   Vida: 9,187
   Velocidad: 5.56
   Ataque 1: 3536 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 3536 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 1,238 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

26. Necrodragón
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_01_platinum.png
   Vida: 13,260
   Velocidad: 3.57
   Ataque 1: 5964 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 5964 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 2,863 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

27. Cancernia
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_02_silver.png
   Vida: 10,825
   Velocidad: 4.76
   Ataque 1: 5233 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 5233 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 3,402 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

28. Fantasmonauta
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_01_platinum.png
   Vida: 13,471
   Velocidad: 3.85
   Ataque 1: 5875 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 5875 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 2,820 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

29. Cáprika
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_02_silver.png
   Vida: 8,120
   Velocidad: 6.67
   Ataque 1: 4663 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 4663 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 2,798 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

30. Quebrantacuellos
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_03_platinum.png
   Vida: 12,498
   Velocidad: 4.76
   Ataque 1: 4828 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 4828 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 2,655 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

31. Barón Lundi
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_01_platinum.png
   Vida: 11,900
   Velocidad: 5.00
   Ataque 1: 4277 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 4277 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 2,352 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

32. Mago Tétrico
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_02_platinum.png
   Vida: 14,355
   Velocidad: 9.09
   Ataque 1: 2251 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 2251 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 1,215 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

33. Guerrero
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_c_01_platinum.png
   Vida: 10,309
   Velocidad: 5.56
   Ataque 1: 3883 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 3883 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: -971 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

34. Guerrero Débil
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_c_02_platinum.png
   Vida: 2,040
   Velocidad: 3.64
   Ataque 1: 2550 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 2530 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: -638 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

35. Ejecutor
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_01_platinum.png
   Vida: 10,656
   Velocidad: 4.17
   Ataque 1: 4950 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 4950 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,238 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

36. Intercéptrix
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_02_platinum.png
   Vida: 8,085
   Velocidad: 7.14
   Ataque 1: 2618 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 2618 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -785 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

37. General Caos
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_03_platinum.png
   Vida: 9,955
   Velocidad: 5.26
   Ataque 1: 3985 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 3985 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,594 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

38. Banshee Guerrera
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_01_platinum.png
   Vida: 8,704
   Velocidad: 6.25
   Ataque 1: 3060 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 3060 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -765 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

39. Bushi
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_02_platinum.png
   Vida: 12,036
   Velocidad: 3.85
   Ataque 1: 5515 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5515 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -2,206 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

40. Caballero Nórdico
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_01_platinum.png
   Vida: 12,532
   Velocidad: 4.76
   Ataque 1: 5263 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 3019 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -2,105 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

41. Buck Maurice
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_02_platinum.png
   Vida: 19,856
   Velocidad: 3.33
   Ataque 1: 10254 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 6045 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -2,256 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

42. Honey Bunny
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_01_platinum.png
   Vida: 7,378
   Velocidad: 11.11
   Ataque 1: 1843 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 1843 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -369 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

43. Sagitauro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_02_silver.png
   Vida: 8,199
   Velocidad: 5.00
   Ataque 1: 5879 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5879 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,764 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

44. Haggis
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_03_platinum.png
   Vida: 12,648
   Velocidad: 3.70
   Ataque 1: 6535 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 6535 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,634 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

45. Marciano Errante
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_01_platinum.png
   Vida: 7,541
   Velocidad: 8.70
   Ataque 1: 2346 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 2346 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -587 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

46. Guardián Galáctico
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_03_platinum.png
   Vida: 12,104
   Velocidad: 3.45
   Ataque 1: 6630 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 6630 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -1,658 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

47. Valkiria
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_01_platinum.png
   Vida: 10,581
   Velocidad: 5.00
   Ataque 1: 4250 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 4250 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,870 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

48. Thor
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_02_platinum.png
   Vida: 13,036
   Velocidad: 3.45
   Ataque 1: 7140 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 7140 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,785 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

49. Bestia
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_d_01_platinum.png
   Vida: 10,968
   Velocidad: 5.00
   Ataque 1: 4352 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 4352 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: -1,306 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

50. Reptoide
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_01_platinum.png
   Vida: 10,146
   Velocidad: 6.67
   Ataque 1: 3298 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 3298 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,319 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

51. Aracno
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_02_platinum.png
   Vida: 15,014
   Velocidad: 3.70
   Ataque 1: 5494 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5494 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -4,396 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

52. Cerbero
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_01_platinum.png
   Vida: 10,098
   Velocidad: 5.88
   Ataque 1: 3271 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 3271 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,799 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

53. Zombat
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_02_platinum.png
   Vida: 7,786
   Velocidad: 11.76
   Ataque 1: 1652 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 1652 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,322 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

54. Cobrakái
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_03_platinum.png
   Vida: 12,621
   Velocidad: 3.85
   Ataque 1: 5807 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5807 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -2,323 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

55. Rakshasa
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_01_platinum.png
   Vida: 9,819
   Velocidad: 7.14
   Ataque 1: 2815 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 2815 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,408 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

56. Leohart
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_02_silver.png
   Vida: 9,525
   Velocidad: 4.17
   Ataque 1: 5808 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5808 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -2,614 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

57. Gargantus
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_03_gothic.png
   Vida: 10,738
   Velocidad: 4.76
   Ataque 1: 5249 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5249 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -3,937 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

58. Kaiju Kitty
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_01_platinum.png
   Vida: 12,641
   Velocidad: 5.56
   Ataque 1: 4393 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 2536 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -2,196 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

59. Maestro Splitter
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_02_platinum.png
   Vida: 14,416
   Velocidad: 3.85
   Ataque 1: 7262 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 4175 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -2,905 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

60. Reina Parásita
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_01_platinum.png
   Vida: 8,949
   Velocidad: 7.69
   Ataque 1: 2360 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 2360 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -1,652 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

61. Cosmo Kong
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_02_platinum.png
   Vida: 11,982
   Velocidad: 4.35
   Ataque 1: 5012 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5012 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -2,506 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

62. Dracus Nobilis
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_01_platinum.png
   Vida: 12,798
   Velocidad: 3.33
   Ataque 1: 6528 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 6528 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -2,611 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

63. Sátiro Hechicero
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_02_platinum.png
   Vida: 9,908
   Velocidad: 6.67
   Ataque 1: 3019 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 3019 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,510 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

64. Extraterrestre
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_e_01_platinum.png
   Vida: 7,133
   Velocidad: 11.11
   Ataque 1: 1700 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 1700 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: 510 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

65. Aniquilador
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_01_platinum.png
   Vida: 12,254
   Velocidad: 3.57
   Ataque 1: 6460 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 6460 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,938 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

66. Sentry
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_02_platinum.png
   Vida: 9,826
   Velocidad: 6.25
   Ataque 1: 3502 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 3502 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,051 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

67. Exopez
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_03_silver.png
   Vida: 7,359
   Velocidad: 8.70
   Ataque 1: 3231 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 3231 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,292 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

68. Tutti Viscosi
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_01_platinum.png
   Vida: 11,206
   Velocidad: 4.35
   Ataque 1: 5093 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 5093 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 1,783 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

69. Sirenia
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_02_platinum.png
   Vida: 8,806
   Velocidad: 7.69
   Ataque 1: 3216 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 3216 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 1,287 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

70. Devorador
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_03_platinum.png
   Vida: 14,096
   Velocidad: 3.45
   Ataque 1: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 2,211 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

71. Sundance Bug
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_01_platinum.png
   Vida: 9,540
   Velocidad: 5.26
   Ataque 1: 3733 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 3733 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 1,307 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

72. Behemoth
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_02_platinum.png
   Vida: 11,920
   Velocidad: 3.57
   Ataque 1: 6351 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 6351 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 1,905 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

73. Xenos
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_01_platinum.png
   Vida: 7,827
   Velocidad: 8.33
   Ataque 1: 2380 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 2380 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 714 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

74. Rocágeno
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_02_platinum.png
   Vida: 10,676
   Velocidad: 4.55
   Ataque 1: 4753 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 4753 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 1,664 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

75. Astrosurfista
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_01_platinum.png
   Vida: 13,770
   Velocidad: 3.85
   Ataque 1: 6841 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 3937 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 2,052 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

76. Supernovus
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_02_platinum.png
   Vida: 12,444
   Velocidad: 5.26
   Ataque 1: 4984 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 2856 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 1,745 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

77. Maestro Oida
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_03_platinum.png
   Vida: 10,662
   Velocidad: 7.14
   Ataque 1: 3461 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 1979 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 1,038 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

78. Nébulon
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_01_platinum.png
   Vida: 8,962
   Velocidad: 5.88
   Ataque 1: 3291 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 3291 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 1,152 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

79. Mr Marvelous
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_02_heroes.png
   Vida: 16,751
   Velocidad: 5.00
   Ataque 1: 4032 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 4032 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 2,419 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

80. Aquapunzel
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_03_silver.png
   Vida: 13,653
   Velocidad: 3.64
   Ataque 1: 5693 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 5693 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 1,993 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

81. Diablesa
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_f_01_platinum.png
   Vida: 11,064
   Velocidad: 4.76
   Ataque 1: 4692 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 4692 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: -1,408 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

82. Mago de las Nieves
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_f_03.png
   Vida: 8,809
   Velocidad: 6.25
   Ataque 1: 3135 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 1799 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: -784 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

83. Tecno Tao
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_01_platinum.png
   Vida: 10,812
   Velocidad: 4.00
   Ataque 1: 5229 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5229 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,307 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

84. Mekali
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_02_platinum.png
   Vida: 9,568
   Velocidad: 6.67
   Ataque 1: 3271 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3271 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -818 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

85. La Parca
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_01_platinum.png
   Vida: 12,437
   Velocidad: 3.45
   Ataque 1: 6746 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 6746 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,686 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

86. Príncipe Escorpión
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_02_silver.png
   Vida: 11,351
   Velocidad: 5.71
   Ataque 1: 4111 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 4111 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,028 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

87. Anubis
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_03_platinum.png
   Vida: 11,730
   Velocidad: 4.35
   Ataque 1: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png
   Ataque 2: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,350 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

88. Gandolphus
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_01_platinum.png
   Vida: 7,732
   Velocidad: 9.09
   Ataque 1: 2564 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 2564 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,025 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

89. Capitán Paz
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_02.png
   Vida: 11,186
   Velocidad: 4.00
   Ataque 1: 5471 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5471 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,368 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

90. Medusa
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_01_platinum.png
   Vida: 10,248
   Velocidad: 4.55
   Ataque 1: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,112 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

91. Horus
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_02_platinum.png
   Vida: 8,548
   Velocidad: 8.70
   Ataque 1: 3835 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3835 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 1,151 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

92. Ivory Hanzo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_03_japan.png
   Vida: 10,794
   Velocidad: 3.70
   Ataque 1: 10112 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 10112 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -3,034 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

93. C'thlig
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_01_platinum.png
   Vida: 11,186
   Velocidad: 3.70
   Ataque 1: 5739 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5739 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -1,435 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

94. Azuria
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_02_platinum.png
   Vida: 9,425
   Velocidad: 5.88
   Ataque 1: 3488 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3488 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -872 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

95. Señor del Abismo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_01_platinum.png
   Vida: 17,564
   Velocidad: 3.33
   Ataque 1: 9683 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5576 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -2,421 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

96. Castigo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_02_platinum.png
   Vida: 12,111
   Velocidad: 5.56
   Ataque 1: 4665 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 2679 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,166 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

97. Oriax
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_03.png
   Vida: 13,410
   Velocidad: 3.57
   Ataque 1: 6052 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 6052 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,816 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

98. Ragnar
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_03_platinum.png
   Vida: 10,724
   Velocidad: 4.76
   Ataque 1: 4644 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 4644 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,858 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

99. Triple-B
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_03_platinum.png
   Vida: 13,478
   Velocidad: 3.57
   Ataque 1: 6528 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 6528 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 3,133 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

100. Mandrágora
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_03_platinum.png
   Vida: 13,070
   Velocidad: 7.69
   Ataque 1: 3189 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 1836 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -797 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

101. Motero Maldito
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_03_platinum.png
   Vida: 14,144
   Velocidad: 10.00
   Ataque 1: 2169 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 1346 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 976 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

102. Armadizo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_03_platinum.png
   Vida: 8,187
   Velocidad: 10.00
   Ataque 1: 1870 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 1870 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -1,309 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

103. Mantidroide
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_03_platinum.png
   Vida: 11,934
   Velocidad: 4.55
   Ataque 1: 6671 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 6671 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,802 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

104. Carnero Vengador
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_03_silver.png
   Vida: 13,203
   Velocidad: 3.70
   Ataque 1: 6855 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 6855 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 3,085 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

105. Battle Toad
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_04_platinum.png
   Vida: 11,648
   Velocidad: 11.11
   Ataque 1: 1822 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 1822 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -456 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

106. Cézanne
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_04_platinum.png
   Vida: 13,036
   Velocidad: 3.45
   Ataque 1: 8500 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 8500 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -3,145 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

107. H.U.M.A.N.
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_03_platinum.png
   Vida: 12,770
   Velocidad: 5.00
   Ataque 1: 5290 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 3046 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,116 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

108. Rambit
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_d_03.png
   Vida: 14,341
   Velocidad: 4.17
   Ataque 1: 7218 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 3607 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: -2,165 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

109. Star Trooper
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_03_platinum.png
   Vida: 8,051
   Velocidad: 11.11
   Ataque 1: 2496 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 2496 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 599 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

110. Micky Krueger
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_03_platinum.png
   Vida: 9,615
   Velocidad: 7.69
   Ataque 1: 3380 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 3380 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 1,690 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

111. Táuridus
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_03_silver.png
   Vida: 7,567
   Velocidad: 10.00
   Ataque 1: 3602 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 3602 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 1,261 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

112. Autonoraptor
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_04_platinum.png
   Vida: 11,254
   Velocidad: 11.11
   Ataque 1: 1802 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 1802 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 721 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

113. Invadron
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_03_platinum.png
   Vida: 12,838
   Velocidad: 3.57
   Ataque 1: 6841 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 6841 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 2,052 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

114. Bruja Malvada
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_04_platinum.png
   Vida: 11,988
   Velocidad: 4.17
   Ataque 1: 8391 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 8391 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,846 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

115. Oso Espantoso
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_03_platinum.png
   Vida: 10,207
   Velocidad: 6.25
   Ataque 1: 3359 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 3359 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 1,680 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

116. Azog
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_04_platinum.png
   Vida: 13,437
   Velocidad: 4.00
   Ataque 1: 9982 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 9982 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,996 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

117. Geminium
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_02_silver.png
   Vida: 11,063
   Velocidad: 4.35
   Ataque 1: 4685 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 4685 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -1,874 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

118. Psicojabalí
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_03_platinum.png
   Vida: 12,260
   Velocidad: 8.33
   Ataque 1: 2890 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 1666 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,156 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

119. Zena
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_03_platinum.png
   Vida: 5,753
   Velocidad: 11.11
   Ataque 1: 3407 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 2380 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -681 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

120. Absolem
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_03_platinum.png
   Vida: 12,050
   Velocidad: 4.55
   Ataque 1: 4903 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 4903 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -2,451 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

121. Wampara
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_03_platinum.png
   Vida: 11,655
   Velocidad: 4.00
   Ataque 1: 5685 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 5685 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 1,705 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

122. Barbaroca
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_03_platinum.png
   Vida: 13,369
   Velocidad: 4.17
   Ataque 1: 7936 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 7936 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 1,984 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

123. George Washington
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_04.png
   Vida: 13,348
   Velocidad: 3.33
   Ataque 1: 6552 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 6552 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 3,145 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

124. Louis XVI
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_04.png
   Vida: 10,914
   Velocidad: 4.55
   Ataque 1: 5345 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5345 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -2,138 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

125. Bazzinger
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_03_platinum.png
   Vida: 10,214
   Velocidad: 5.00
   Ataque 1: 4230 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 4230 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,057 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

126. Space Princess
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_04_platinum.png
   Vida: 8,527
   Velocidad: 7.14
   Ataque 1: 2768 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 2768 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -692 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

127. Astromago
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_03_platinum.png
   Vida: 10,894
   Velocidad: 4.35
   Ataque 1: 5012 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5012 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -1,253 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

128. Garuda
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_a_03.png
   Vida: 10,866
   Velocidad: 8.33
   Ataque 1: 2978 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 1863 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: 1,340 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

129. Hada Machete
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_03_platinum.png
   Vida: 5,073
   Velocidad: 9.09
   Ataque 1: 5073 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5073 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,268 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

130. Genshiryoku
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_04_platinum.png
   Vida: 10,968
   Velocidad: 3.57
   Ataque 1: 10431 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 10431 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -3,651 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

131. El Experimento
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_04_platinum.png
   Vida: 10,846
   Velocidad: 5.56
   Ataque 1: 3733 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 3733 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,053 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

132. Leonidas
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_04_platinum.png
   Vida: 12,084
   Velocidad: 4.17
   Ataque 1: 5263 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5263 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,316 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

133. Buranka
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_04_platinum.png
   Vida: 10,091
   Velocidad: 5.00
   Ataque 1: 3910 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3910 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -978 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

134. Mexihcatl
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_04.png
   Vida: 8,313
   Velocidad: 4.76
   Ataque 1: 3563 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3563 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -891 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

135. Banker
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_04.png
   Vida: 8,959
   Velocidad: 5.00
   Ataque 1: 3713 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3713 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -928 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

136. Emperador Galáctico
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_04_starwars.png
   Vida: 11,747
   Velocidad: 6.25
   Ataque 1: 3554 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 3554 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 2,843 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

137. Nebulus
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_05_silver.png
   Vida: 14,825
   Velocidad: 5.56
   Ataque 1: 5547 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5547 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -1,387 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

138. Project X27
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_04_platinum.png
   Vida: 6,528
   Velocidad: 12.50
   Ataque 1: 2217 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 2217 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -554 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

139. Miroku
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_04_platinum.png
   Vida: 15,552
   Velocidad: 3.70
   Ataque 1: 6066 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 6066 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -5,459 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

140. Mapach Wik
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_04.png
   Vida: 5,675
   Velocidad: 12.50
   Ataque 1: 1751 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 1751 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 700 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png
`,DA=`141. El Fontanero
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_04.png
   Vida: 8,225
   Velocidad: 5.88
   Ataque 1: 3036 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 3036 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 1,214 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

142. Matafantasmas
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_04_platinum.png
   Vida: 11,206
   Velocidad: 6.67
   Ataque 1: 3828 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 3828 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 1,149 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

143. Exo Cookie
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_05_platinum.png
   Vida: 15,164
   Velocidad: 3.33
   Ataque 1: 7113 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 7113 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -3,556 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

144. Britany
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_05_platinum.png
   Vida: 13,274
   Velocidad: 3.33
   Ataque 1: 5964 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 5964 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 2,863 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

145. Frostmass
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_c_03.png
   Vida: 11,101
   Velocidad: 4.00
   Ataque 1: 5430 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 3121 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: -1,357 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

146. Santactopus
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_04.png
   Vida: 8,823
   Velocidad: 5.88
   Ataque 1: 3261 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 3261 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 978 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

147. Mephisto
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_04_platinum.png
   Vida: 9,037
   Velocidad: 7.41
   Ataque 1: 4529 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 4529 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 1,359 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

148. Monolith
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_04_platinum.png
   Vida: 14,457
   Velocidad: 4.55
   Ataque 1: 5474 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3522 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,369 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

149. Malvatron
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_04_platinum.png
   Vida: 10,560
   Velocidad: 7.14
   Ataque 1: 3427 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 3427 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 1,028 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

150. Lara
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_04.png
   Vida: 9,693
   Velocidad: 9.09
   Ataque 1: 2224 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 1275 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -556 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

151. Commander Ender
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_04_platinum.png
   Vida: 12,553
   Velocidad: 3.85
   Ataque 1: 8527 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 8527 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 3,240 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

152. Zortrex
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_04_platinum.png
   Vida: 10,948
   Velocidad: 5.56
   Ataque 1: 2142 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 2142 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 2,785 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

153. Tengu
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_99_platinum.png
   Vida: 13,444
   Velocidad: 4.35
   Ataque 1: 5012 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 5012 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -3,007 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

154. Sacamantecas
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_04_platinum.png
   Vida: 10,458
   Velocidad: 10.00
   Ataque 1: 2611 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 1496 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,044 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

155. Oculus
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_04_platinum.png
   Vida: 10,492
   Velocidad: 8.33
   Ataque 1: 2890 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 1666 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,012 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

156. Supraman X
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_04.png
   Vida: 8,238
   Velocidad: 6.67
   Ataque 1: 2812 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 2812 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -844 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

157. Cupido
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_05.png
   Vida: 11,805
   Velocidad: 5.00
   Ataque 1: 4869 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 4869 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,461 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

158. Abraham Lincoln
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_05.png
   Vida: 12,692
   Velocidad: 3.33
   Ataque 1: 7572 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 7572 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -2,044 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

159. Escuadrón Rhino
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_04_platinum.png
   Vida: 13,280
   Velocidad: 4.00
   Ataque 1: 5970 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5970 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -2,388 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

160. Dama Harpía
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_04_platinum.png
   Vida: 7,847
   Velocidad: 10.00
   Ataque 1: 2312 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 2312 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -694 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

161. Yelda
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_05.png
   Vida: 8,857
   Velocidad: 5.88
   Ataque 1: 3271 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3271 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -818 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

162. Flying Jordson
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_04_platinum.png
   Vida: 13,348
   Velocidad: 4.55
   Ataque 1: 5943 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 3407 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 2,080 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

163. Cernunnos
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_04_platinum.png
   Vida: 13,083
   Velocidad: 4.76
   Ataque 1: 5603 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 3230 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -2,802 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

164. Capitán Perla Negra
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_04_platinum.png
   Vida: 16,966
   Velocidad: 3.45
   Ataque 1: 9880 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 9880 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 2,964 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

165. Brick McGole
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_04_platinum.png
   Vida: 9,500
   Velocidad: 6.67
   Ataque 1: 3250 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 3250 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 975 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

166. Kraken
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_05_platinum.png
   Vida: 9,554
   Velocidad: 3.85
   Ataque 1: 14151 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 14151 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 4,245 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

167. Genimal
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_99.png
   Vida: 8,643
   Velocidad: 10.00
   Ataque 1: 2145 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 2145 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -751 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

168. Hardcorius
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_05_platinum.png
   Vida: 12,539
   Velocidad: 5.26
   Ataque 1: 4726 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 4726 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -945 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

169. Marine Muerto
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_05_platinum.png
   Vida: 12,648
   Velocidad: 3.70
   Ataque 1: 8473 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 8473 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 2,542 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

170. Challengeer
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_05_platinum.png
   Vida: 8,820
   Velocidad: 6.67
   Ataque 1: 5739 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5739 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -2,296 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

171. Ciberpunk
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_05_platinum.png
   Vida: 9,262
   Velocidad: 7.69
   Ataque 1: 2550 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 2550 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,530 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

172. Neo Urban XIII
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_05_gachaboss.png
   Vida: 14,317
   Velocidad: 3.33
   Ataque 1: 9058 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 9058 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 2,989 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

173. Tecnoforzer
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_05_platinum.png
   Vida: 12,750
   Velocidad: 5.88
   Ataque 1: 7589 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 4359 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 3,794 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

174. Chamán Sombra
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_05_platinum.png
   Vida: 9,955
   Velocidad: 5.26
   Ataque 1: 6011 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 6011 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -2,404 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

175. Ingeniero
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_99_platinum.png
   Vida: 13,682
   Velocidad: 3.85
   Ataque 1: 9840 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 9840 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -2,755 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

176. Sun-Duke
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_05_villains.png
   Vida: 7,882
   Velocidad: 6.33
   Ataque 1: 6519 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 6519 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -1,956 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

177. Ceres
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_e_03_platinum.png
   Vida: 9,894
   Velocidad: 12.66
   Ataque 1: 1734 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 911 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: 434 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

178. Shin Hakuho
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_05_platinum.png
   Vida: 15,701
   Velocidad: 3.70
   Ataque 1: 7582 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 4372 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 2,881 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

179. Fenec Plus Ultra
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_05_platinum.png
   Vida: 12,084
   Velocidad: 5.88
   Ataque 1: 3760 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 3760 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,692 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

180. Madre de los Dragones
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_05_platinum.png
   Vida: 7,140
   Velocidad: 8.00
   Ataque 1: 5957 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5957 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -894 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

181. Brawler
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_05.png
   Vida: 10,717
   Velocidad: 3.45
   Ataque 1: 5872 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5872 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 1,762 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

182. Loco de la Motosierra
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_05_platinum.png
   Vida: 11,744
   Velocidad: 4.55
   Ataque 1: 4753 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 4753 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 2,614 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

183. Rey Mono
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_05_platinum.png
   Vida: 10,914
   Velocidad: 6.25
   Ataque 1: 3502 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 3502 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,401 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

184. Acarius
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_05_platinum.png
   Vida: 12,328
   Velocidad: 3.57
   Ataque 1: 9377 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 9377 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 2,813 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

185. Cazador Espacial
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_05_platinum.png
   Vida: 12,254
   Velocidad: 4.35
   Ataque 1: 7052 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 7052 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 1,904 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

186. Artista Siniestro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_05_platinum.png
   Vida: 8,820
   Velocidad: 6.67
   Ataque 1: 3019 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3019 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -755 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

187. Zeus
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_06_olympians.png
   Vida: 5,273
   Velocidad: 11.11
   Ataque 1: 4182 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 4182 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 1,673 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

188. Glubber
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_05_platinum.png
   Vida: 12,451
   Velocidad: 7.14
   Ataque 1: 5848 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 4080 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,345 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

189. Nyrlatoth
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_05_platinum.png
   Vida: 12,308
   Velocidad: 5.26
   Ataque 1: 4291 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 4291 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 2,360 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

190. Cibercroc
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_05_platinum.png
   Vida: 13,138
   Velocidad: 4.35
   Ataque 1: 5583 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 5583 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -2,791 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

191. Bulldozer
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_05_platinum.png
   Vida: 12,240
   Velocidad: 4.17
   Ataque 1: 5263 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 5263 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 2,895 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

192. Pejelagarto
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_05_platinum.png
   Vida: 6,820
   Velocidad: 8.70
   Ataque 1: 4379 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 2190 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,752 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

193. Triceratanque
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_06_platinum.png
   Vida: 13,416
   Velocidad: 3.23
   Ataque 1: 8412 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 8412 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 3,365 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

194. Monje Akuso
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_05_platinum.png
   Vida: 10,275
   Velocidad: 7.14
   Ataque 1: 2978 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 2978 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,191 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

195. Caronte
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_05_platinum.png
   Vida: 16,150
   Velocidad: 3.45
   Ataque 1: 8289 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 4767 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 3,979 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

196. Tío Sam
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_06.png
   Vida: 11,795
   Velocidad: 3.70
   Ataque 1: 6310 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 6310 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,578 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

197. Hog the Ripper
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_05.png
   Vida: 15,572
   Velocidad: 3.23
   Ataque 1: 8667 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 8667 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,733 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

198. Rey Steven
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_05_platinum.png
   Vida: 11,526
   Velocidad: 5.56
   Ataque 1: 4651 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 4651 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,860 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

199. Duplicado de Eva
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_06.png
   Vida: 8,952
   Velocidad: 9.09
   Ataque 1: 2509 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 2509 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -878 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

200. Ciberbabosa
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_05_platinum.png
   Vida: 12,764
   Velocidad: 5.00
   Ataque 1: 4638 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 4638 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -2,319 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

201. Jhingal
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_05_platinum.png
   Vida: 9,819
   Velocidad: 8.33
   Ataque 1: 3747 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 1870 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 1,124 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

202. Doctor Blaw
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_05_platinum.png
   Vida: 12,471
   Velocidad: 4.00
   Ataque 1: 5528 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 5528 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 2,654 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

203. Tomahawk
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_06_platinum.png
   Vida: 9,092
   Velocidad: 6.25
   Ataque 1: 3352 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 2162 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -838 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

204. Hechicera
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_06_platinum.png
   Vida: 7,786
   Velocidad: 10.00
   Ataque 1: 3550 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3550 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -710 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

205. Dandi Óscar
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_06_platinum.png
   Vida: 12,451
   Velocidad: 4.00
   Ataque 1: 5542 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 5542 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 2,660 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

206. Kung Chow
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_06_platinum.png
   Vida: 18,401
   Velocidad: 4.17
   Ataque 1: 5909 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5909 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,418 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

207. Comeabuelas
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_06_platinum.png
   Vida: 15,844
   Velocidad: 3.70
   Ataque 1: 7827 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 7827 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 2,974 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

208. Mau-Jack
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_06_platinum.png
   Vida: 8,344
   Velocidad: 6.67
   Ataque 1: 3169 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 3169 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 951 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

209. Lily
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_06_movies.png
   Vida: 14,516
   Velocidad: 5.88
   Ataque 1: 6014 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 6014 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -2,706 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

210. El Rey de Mimphys
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_06_platinum.png
   Vida: 11,424
   Velocidad: 4.55
   Ataque 1: 5209 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 5209 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 2,500 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

211. Bioerizo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_06_platinum.png
   Vida: 17,993
   Velocidad: 3.57
   Ataque 1: 8078 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 8078 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 3,554 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

212. Gladiadog
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_06_platinum.png
   Vida: 22,222
   Velocidad: 3.45
   Ataque 1: 7133 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 7133 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 2,497 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

213. Casto
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_06_platinum.png
   Vida: 8,520
   Velocidad: 7.14
   Ataque 1: 2768 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 2768 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -692 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

214. Viper
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_06_platinum.png
   Vida: 12,158
   Velocidad: 5.88
   Ataque 1: 6433 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 6433 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 3,345 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

215. Dollbyte
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_06_platinum.png
   Vida: 11,458
   Velocidad: 4.76
   Ataque 1: 7670 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 7670 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -1,534 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

216. Garlog
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_06_elements.png
   Vida: 12,681
   Velocidad: 4.44
   Ataque 1: 9844 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 9844 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 4,430 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

217. Krunk
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_06_platinum.png
   Vida: 12,260
   Velocidad: 4.17
   Ataque 1: 5800 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 5800 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,740 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

218. Apofis
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_06_platinum.png
   Vida: 10,479
   Velocidad: 7.69
   Ataque 1: 2686 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 2686 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -1,074 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

219. Cuervo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_b_04.png
   Vida: 12,005
   Velocidad: 5.00
   Ataque 1: 4417 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 2536 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: 2,208 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

220. Drusella
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_06_platinum.png
   Vida: 9,670
   Velocidad: 9.09
   Ataque 1: 3638 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 3638 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 1,091 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

221. Mandor
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_06_platinum.png
   Vida: 9,636
   Velocidad: 5.88
   Ataque 1: 4991 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 4991 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 1,996 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

222. Borrasca
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_06_platinum.png
   Vida: 4,454
   Velocidad: 12.50
   Ataque 1: 1788 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 1788 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -894 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

223. Sable
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_06.png
   Vida: 10,836
   Velocidad: 5.26
   Ataque 1: 4325 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 4325 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,730 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

224. Artemisa
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_06.png
   Vida: 9,564
   Velocidad: 5.56
   Ataque 1: 4869 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 4869 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -2,191 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

225. Mamá Kangú
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_06_platinum.png
   Vida: 10,649
   Velocidad: 7.14
   Ataque 1: 3461 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 2278 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,038 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

226. Darwin
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_06.png
   Vida: 11,271
   Velocidad: 5.88
   Ataque 1: 3699 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 3699 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 1,406 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

227. ERR-ADI-K-Bot
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_06_platinum.png
   Vida: 15,783
   Velocidad: 3.57
   Ataque 1: 9357 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 9357 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -2,339 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

228. Námaste
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_06_platinum.png
   Vida: 11,669
   Velocidad: 5.99
   Ataque 1: 4270 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3366 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,281 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

229. Tyrtiduron
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_06_platinum.png
   Vida: 13,002
   Velocidad: 5.26
   Ataque 1: 4379 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 4379 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 2,409 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

230. Bounda
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_07_platinum.png
   Vida: 14,654
   Velocidad: 3.33
   Ataque 1: 8412 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 8412 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -2,944 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

231. Mega Claus
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_07.png
   Vida: 11,240
   Velocidad: 4.76
   Ataque 1: 4821 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 4821 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,687 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

232. Marv
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_06_platinum.png
   Vida: 9,676
   Velocidad: 7.14
   Ataque 1: 3182 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 3182 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 955 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

233. Z-0
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_06_platinum.png
   Vida: 13,879
   Velocidad: 3.85
   Ataque 1: 8990 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 8990 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -2,427 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

234. Falcon
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_07_platinum.png
   Vida: 11,030
   Velocidad: 4.00
   Ataque 1: 9343 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 9343 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -2,803 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

235. Paramic
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_07_platinum.png
   Vida: 11,111
   Velocidad: 8.33
   Ataque 1: 2258 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 2258 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 1,129 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

236. El Original
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_07_soldiers.png
   Vida: 16,938
   Velocidad: 5.56
   Ataque 1: 7286 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 7286 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 4,007 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

237. Señor Dragón
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_07_platinum.png
   Vida: 6,766
   Velocidad: 10.53
   Ataque 1: 2060 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 2060 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,751 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

238. Carlingger
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_07_platinum.png
   Vida: 9,411
   Velocidad: 12.66
   Ataque 1: 1890 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 1890 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 756 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

239. Rey de los Insectos
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_07_platinum.png
   Vida: 12,254
   Velocidad: 5.00
   Ataque 1: 5073 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5073 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -1,420 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

240. Aplastador
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_07.png
   Vida: 10,914
   Velocidad: 4.00
   Ataque 1: 6365 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 6365 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 2,864 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

241. Quimera
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_07_platinum.png
   Vida: 12,458
   Velocidad: 3.70
   Ataque 1: 11057 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 11057 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -2,764 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

242. Champicorteza
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_07_platinum.png
   Vida: 11,818
   Velocidad: 4.17
   Ataque 1: 6494 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 6494 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,948 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

243. Reina Rakkti
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_06_platinum.png
   Vida: 13,824
   Velocidad: 5.00
   Ataque 1: 5202 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 2992 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 1,821 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

244. Hércules
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_06_platinum.png
   Vida: 15,354
   Velocidad: 3.33
   Ataque 1: 10669 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 6317 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 3,521 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

245. Aran
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_07_platinum.png
   Vida: 9,676
   Velocidad: 4.35
   Ataque 1: 10159 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 10159 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -3,048 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

246. El Gringo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_06_platinum.png
   Vida: 9,486
   Velocidad: 10.00
   Ataque 1: 3087 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 1380 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -772 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

247. Spartac
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_07.png
   Vida: 15,742
   Velocidad: 3.33
   Ataque 1: 9180 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 4287 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -3,213 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

248. Amarok
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_07_platinum.png
   Vida: 9,445
   Velocidad: 7.14
   Ataque 1: 3060 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3060 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -765 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

249. Pikabú
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_07_platinum.png
   Vida: 13,886
   Velocidad: 6.06
   Ataque 1: 4502 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 4502 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,476 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

250. Leprechaun
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_f_04.png
   Vida: 11,941
   Velocidad: 5.26
   Ataque 1: 2982 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3281 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: -745 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

251. Fénix
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_07_platinum.png
   Vida: 13,709
   Velocidad: 4.00
   Ataque 1: 9214 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 9214 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 4,146 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

252. Kal Wayne
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_07_platinum.png
   Vida: 12,832
   Velocidad: 4.55
   Ataque 1: 5073 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 5073 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 1,623 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

53. Avispa Diésel
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_07_platinum.png
   Vida: 15,035
   Velocidad: 7.69
   Ataque 1: 2720 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 2720 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 1,088 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

254. Robofuerte
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_07_lucha.png
   Vida: 14,089
   Velocidad: 4.00
   Ataque 1: 9604 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 9604 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -4,802 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

255. Rocky Botboa
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_07_platinum.png
   Vida: 19,931
   Velocidad: 3.23
   Ataque 1: 7752 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 7752 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 4,264 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

256. Las Moiras
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_07_platinum.png
   Vida: 12,328
   Velocidad: 5.88
   Ataque 1: 3856 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3856 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,080 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

257. Dr. Frost
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_07_platinum.png
   Vida: 14,396
   Velocidad: 4.44
   Ataque 1: 5848 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5848 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,632 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

258. Capitán Gluglú
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_07_platinum.png
   Vida: 13,097
   Velocidad: 5.41
   Ataque 1: 4651 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 4651 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -1,535 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

259. Rey Esqueleto
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_07_platinum.png
   Vida: 11,356
   Velocidad: 6.25
   Ataque 1: 7154 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 7154 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 3,577 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

260. Turbacieno
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_07_platinum.png
   Vida: 11,914
   Velocidad: 4.55
   Ataque 1: 6888 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 6888 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -2,273 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

261. Juan Hielo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_07.png
   Vida: 14,124
   Velocidad: 3.45
   Ataque 1: 6059 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 6059 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -2,424 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

262. Capitán Patriota
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_07_platinum.png
   Vida: 18,537
   Velocidad: 4.76
   Ataque 1: 5284 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 4889 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,008 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

263. Astro Gummy
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_07_platinum.png
   Vida: 11,941
   Velocidad: 6.67
   Ataque 1: 3692 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 2108 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 1,108 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

264. Nezarim
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_07_platinum.png
   Vida: 11,873
   Velocidad: 4.17
   Ataque 1: 6453 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 6453 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 3,227 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

265. Globomono
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_07_platinum.png
   Vida: 11,995
   Velocidad: 6.25
   Ataque 1: 4651 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 2659 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,860 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

266. Starminator
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_07_platinum.png
   Vida: 12,199
   Velocidad: 5.71
   Ataque 1: 4304 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 4304 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 1,507 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

267. Espectra
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_08_platinum.png
   Vida: 4,672
   Velocidad: 8.33
   Ataque 1: 5794 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 5794 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 1,912 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

268. Wynn
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_08_platinum.png
   Vida: 14,246
   Velocidad: 3.33
   Ataque 1: 8738 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 8738 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 3,583 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

269. Thrann
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_08_platinum.png
   Vida: 10,078
   Velocidad: 4.00
   Ataque 1: 10078 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 10078 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -2,519 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

270. Blender
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_08_platinum.png
   Vida: 8,330
   Velocidad: 7.14
   Ataque 1: 2972 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 2972 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -891 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

271. Rinotauro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_08_platinum.png
   Vida: 21,311
   Velocidad: 4.00
   Ataque 1: 7160 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 4420 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,790 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

272. Cosmopandas
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_08_platinum.png
   Vida: 6,956
   Velocidad: 9.09
   Ataque 1: 3978 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 3978 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 1,193 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

273. Kudamono
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_08_platinum.png
   Vida: 11,710
   Velocidad: 5.00
   Ataque 1: 5175 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5175 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,294 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

274. Alfie
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_07_platinum.png
   Vida: 11,710
   Velocidad: 3.33
   Ataque 1: 10084 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 10084 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 4,034 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

275. Tiranozomb
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_08_platinum.png
   Vida: 13,818
   Velocidad: 3.57
   Ataque 1: 9676 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 9676 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -3,871 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

276. H0ud1n1
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_08_platinum.png
   Vida: 11,512
   Velocidad: 7.69
   Ataque 1: 4100 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 4100 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 820 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

277. FootBot
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_08_platinum.png
   Vida: 9,880
   Velocidad: 6.25
   Ataque 1: 3189 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3189 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -797 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

278. Geomega
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_07.png
   Vida: 13,916
   Velocidad: 3.45
   Ataque 1: 8293 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5845 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,824 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

279. Glotón
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_06_platinum.png
   Vida: 14,715
   Velocidad: 4.35
   Ataque 1: 6256 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 3597 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 3,441 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

280. Seiyatsu
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_08.png
   Vida: 7,422
   Velocidad: 10.00
   Ataque 1: 2965 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 2965 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -741 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png
`,NA=`281. Asaylan
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_08_platinum.png
   Vida: 8,609
   Velocidad: 5.00
   Ataque 1: 8201 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 8201 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -8,201 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

282. Wrath
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_08_platinum.png
   Vida: 9,948
   Velocidad: 3.70
   Ataque 1: 11492 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 11492 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 4,022 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

283. Lady Libertad
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_08.png
   Vida: 12,461
   Velocidad: 3.85
   Ataque 1: 6263 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 6263 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,879 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

284. Gozer
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_08_platinum.png
   Vida: 12,777
   Velocidad: 5.00
   Ataque 1: 4923 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 4923 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 2,708 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

285. Van Helsing
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_08_platinum.png
   Vida: 13,008
   Velocidad: 4.76
   Ataque 1: 5508 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 5508 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,652 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

286. Kitty Ranger
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_08_platinum.png
   Vida: 10,989
   Velocidad: 6.67
   Ataque 1: 3210 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 3210 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,284 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

287. Gorthaur el Cruel
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_09_fantasy.png
   Vida: 12,513
   Velocidad: 3.33
   Ataque 1: 14489 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 14489 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -3,622 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

288. El Rey sin Nombre
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_08_platinum.png
   Vida: 10,547
   Velocidad: 4.65
   Ataque 1: 6344 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 6344 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 2,347 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

289. Naraxis
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_08_platinum.png
   Vida: 12,566
   Velocidad: 5.88
   Ataque 1: 3692 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 3692 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,215 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

290. Andrómeda
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_08_platinum.png
   Vida: 7,242
   Velocidad: 7.14
   Ataque 1: 4495 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 4495 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 3,596 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

291. Enano y Cerebro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_08_platinum.png
   Vida: 11,268
   Velocidad: 4.76
   Ataque 1: 4808 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 4808 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -2,404 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

292. Arcángel
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_99.png
   Vida: 13,858
   Velocidad: 3.85
   Ataque 1: 6331 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 6331 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,899 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

293. Diablo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_99.png
   Vida: 13,172
   Velocidad: 3.33
   Ataque 1: 8140 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 8140 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 2,442 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

294. Drall
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_08_platinum.png
   Vida: 18,714
   Velocidad: 4.00
   Ataque 1: 6814 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 6814 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,703 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

295. Noren
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_07.png
   Vida: 14,749
   Velocidad: 3.85
   Ataque 1: 7460 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 7460 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -2,238 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

296. Sgt. Pandamonium
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_08_platinum.png
   Vida: 10,377
   Velocidad: 7.14
   Ataque 1: 4332 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 4332 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,733 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

297. Omikami
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_08_platinum.png
   Vida: 13,308
   Velocidad: 3.85
   Ataque 1: 7154 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 7154 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -3,577 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

298. Makino
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_08_platinum.png
   Vida: 6,331
   Velocidad: 8.33
   Ataque 1: 5345 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5345 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,336 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

299. Chantecler
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_08_platinum.png
   Vida: 13,478
   Velocidad: 3.57
   Ataque 1: 9391 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 9391 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -3,756 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

300. Dr. Nucleus
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_08.png
   Vida: 14,396
   Velocidad: 3.85
   Ataque 1: 7572 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 7572 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 2,272 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

301. Amo de las Llaves
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_09_platinum.png
   Vida: 12,648
   Velocidad: 3.57
   Ataque 1: 9792 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 9792 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -4,896 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

302. Carcinus Gigas
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_09_platinum.png
   Vida: 17,469
   Velocidad: 5.26
   Ataque 1: 5936 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 5936 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 2,078 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

303. Sanik
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_08_platinum.png
   Vida: 16,109
   Velocidad: 5.88
   Ataque 1: 3747 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 3747 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -2,248 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

304. Necroparásito
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_07_platinum.png
   Vida: 15,089
   Velocidad: 6.67
   Ataque 1: 3135 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 1802 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 1,724 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

305. Proyecto 3V3
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_07_platinum.png
   Vida: 8,398
   Velocidad: 9.09
   Ataque 1: 4862 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 2795 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,431 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

306. Optimus Zord
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_09_platinum.png
   Vida: 11,975
   Velocidad: 6.25
   Ataque 1: 3856 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 3856 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -964 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

307. Faucesnegras
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_09_platinum.png
   Vida: 10,193
   Velocidad: 7.14
   Ataque 1: 3080 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 3080 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,540 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

308. Tormenta de Fuego
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_08_platinum.png
   Vida: 11,152
   Velocidad: 6.25
   Ataque 1: 4352 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 2502 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,306 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

309. Golemagnus
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_08_platinum.png
   Vida: 16,422
   Velocidad: 3.45
   Ataque 1: 8167 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 4692 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 2,450 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

310. Dug Dario
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_08_platinum.png
   Vida: 13,117
   Velocidad: 4.55
   Ataque 1: 5107 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 5107 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 2,809 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

311. Centinela R0B-H4N
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_08_platinum.png
   Vida: 12,981
   Velocidad: 5.56
   Ataque 1: 8214 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 4223 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 3,696 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

312. Big Bo$$
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_09.png
   Vida: 14,134
   Velocidad: 3.45
   Ataque 1: 7728 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 7728 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,318 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

313. Reina Sylvidra
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_09_platinum.png
   Vida: 15,654
   Velocidad: 3.57
   Ataque 1: 7806 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 7806 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 4,684 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

314. Quetzalcóatl
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_09_platinum.png
   Vida: 11,873
   Velocidad: 5.00
   Ataque 1: 4468 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 4468 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -2,234 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

315. Majin Zam
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_08_platinum.png
   Vida: 13,478
   Velocidad: 3.45
   Ataque 1: 10615 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 10615 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -2,654 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

316. Bruja de la Peste
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_08_platinum.png
   Vida: 12,226
   Velocidad: 4.76
   Ataque 1: 5406 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 3291 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 2,973 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

317. Excaliduro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_09_platinum.png
   Vida: 13,675
   Velocidad: 4.76
   Ataque 1: 5304 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 5304 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -2,122 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

318. Zigmo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_09_platinum.png
   Vida: 9,976
   Velocidad: 8.33
   Ataque 1: 2237 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 2237 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -1,230 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

319. Gran Señor de las Tumbas
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_08_platinum.png
   Vida: 10,424
   Velocidad: 6.25
   Ataque 1: 5379 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 5379 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,775 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

320. Pirótropo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_09_platinum.png
   Vida: 13,083
   Velocidad: 4.55
   Ataque 1: 5868 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 5868 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -1,467 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

321. Altaris
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_10_platinum.png
   Vida: 15,742
   Velocidad: 3.33
   Ataque 1: 12968 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 12968 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 4,539 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

322. Capitán Gorn
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_09_platinum.png
   Vida: 12,485
   Velocidad: 5.88
   Ataque 1: 4080 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 4080 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -2,040 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

323. Yokozuna
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_08_platinum.png
   Vida: 10,839
   Velocidad: 7.69
   Ataque 1: 3352 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 1911 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 1,006 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

324. Calaca
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_09.png
   Vida: 14,783
   Velocidad: 3.70
   Ataque 1: 7494 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 7494 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 3,747 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

325. Lancelot
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_09_platinum.png
   Vida: 11,220
   Velocidad: 5.56
   Ataque 1: 9731 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 4862 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -3,406 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

326. Centaurus
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_09_platinum.png
   Vida: 16,204
   Velocidad: 5.26
   Ataque 1: 5039 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 5039 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 2,016 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

327. Mon-Key Crew
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_09_platinum.png
   Vida: 10,003
   Velocidad: 6.67
   Ataque 1: 6100 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 6100 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,403 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

328. Sound Killah
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_09_music.png
   Vida: 13,799
   Velocidad: 3.45
   Ataque 1: 15027 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 15027 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 4,508 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

329. Dracomago
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_09_platinum.png
   Vida: 11,914
   Velocidad: 4.00
   Ataque 1: 6644 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 6644 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,462 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

330. Caudillo Steam
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_09_platinum.png
   Vida: 16,422
   Velocidad: 4.44
   Ataque 1: 6161 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 6161 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -2,772 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

331. Cazarrecompensas
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_a_05_platinum.png
   Vida: 13,070
   Velocidad: 4.76
   Ataque 1: 5263 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 3087 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: 2,105 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

332. Surfista del Espacio
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_10.png
   Vida: 15,147
   Velocidad: 3.85
   Ataque 1: 8184 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 8184 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,637 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

333. Mister T-Ger
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_09_platinum.png
   Vida: 11,927
   Velocidad: 7.69
   Ataque 1: 3352 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 2013 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,341 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

334. Master Paw
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_10.png
   Vida: 12,522
   Velocidad: 3.45
   Ataque 1: 6854 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 6854 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,714 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

335. Grumpy Claus
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_09.png
   Vida: 12,784
   Velocidad: 4.35
   Ataque 1: 5709 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 5709 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 1,713 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

336. Sargento Dusk
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_10_platinum.png
   Vida: 12,335
   Velocidad: 5.00
   Ataque 1: 8752 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 8752 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -3,501 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

337. Gwenn
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_10_platinum.png
   Vida: 12,560
   Velocidad: 6.67
   Ataque 1: 3618 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 3618 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 1,158 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

338. El Coleccionista
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_09_platinum.png
   Vida: 14,538
   Velocidad: 3.85
   Ataque 1: 6882 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 6882 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 3,303 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

339. El Veneno
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_10_platinum.png
   Vida: 11,784
   Velocidad: 5.56
   Ataque 1: 4230 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 4230 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 1,480 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

340. Frankenhuahua
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_09_platinum.png
   Vida: 10,683
   Velocidad: 9.09
   Ataque 1: 3502 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 2013 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 2,101 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

341. Mad Mike
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_10_platinum.png
   Vida: 10,819
   Velocidad: 6.25
   Ataque 1: 6236 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 6236 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -2,806 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

342. Jane Saw
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_09_platinum.png
   Vida: 14,783
   Velocidad: 4.17
   Ataque 1: 6297 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 6297 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 2,834 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

343. Horax
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_09_platinum.png
   Vida: 13,790
   Velocidad: 3.85
   Ataque 1: 6868 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 6868 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -2,747 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

344. Maestro Shinzo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_09_platinum.png
   Vida: 10,628
   Velocidad: 8.33
   Ataque 1: 2761 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 2761 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,104 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

345. Xeleroth
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_09_platinum.png
   Vida: 15,946
   Velocidad: 3.45
   Ataque 1: 9642 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 9642 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -1,928 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

346. Excavalipsis
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_09_platinum.png
   Vida: 15,722
   Velocidad: 3.33
   Ataque 1: 8303 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 8303 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 3,985 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

347. El Enterrador
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_10_western.png
   Vida: 18,971
   Velocidad: 3.33
   Ataque 1: 8727 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 8727 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -3,491 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

348. Zenguru
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_09_platinum.png
   Vida: 12,138
   Velocidad: 5.00
   Ataque 1: 4944 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 4944 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,236 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

349. H.U.N.T.3.R
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_09_platinum.png
   Vida: 13,178
   Velocidad: 7.69
   Ataque 1: 4617 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 2659 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 693 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

350. Arelvam
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_10_platinum.png
   Vida: 13,444
   Velocidad: 8.33
   Ataque 1: 3101 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 3101 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -930 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

351. Zar Bomba
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_09_platinum.png
   Vida: 12,696
   Velocidad: 4.35
   Ataque 1: 6195 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 6195 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -2,478 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

352. Mago Ryzafredd
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_09_platinum.png
   Vida: 12,675
   Velocidad: 4.17
   Ataque 1: 6011 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 6011 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 1,803 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

353. Hawkeye
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_10_platinum.png
   Vida: 9,574
   Velocidad: 7.14
   Ataque 1: 4372 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 4372 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,968 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

354. Megastral
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_09_platinum.png
   Vida: 17,265
   Velocidad: 3.57
   Ataque 1: 9187 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 4590 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 2,756 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

355. Liquidador
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_09_platinum.png
   Vida: 15,497
   Velocidad: 4.65
   Ataque 1: 7636 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3910 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,909 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

356. Yggdrasil
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_10_platinum.png
   Vida: 17,796
   Velocidad: 3.85
   Ataque 1: 7854 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 7854 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,964 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

357. Rox McRain
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_09_platinum.png
   Vida: 9,500
   Velocidad: 8.33
   Ataque 1: 2693 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 2693 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 808 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

358. Hadeath
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_09_platinum.png
   Vida: 15,620
   Velocidad: 4.17
   Ataque 1: 7038 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 7038 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -2,815 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

359. Divastator
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_10_platinum.png
   Vida: 10,574
   Velocidad: 6.67
   Ataque 1: 3536 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 3536 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,768 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

360. Angry Pork
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_10_platinum.png
   Vida: 13,444
   Velocidad: 4.35
   Ataque 1: 6487 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 6487 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 2,595 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

361. Frankendwarf
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_10_platinum.png
   Vida: 14,749
   Velocidad: 3.85
   Ataque 1: 7344 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 7344 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -2,938 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

362. Akai-Bot
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_10.png
   Vida: 14,280
   Velocidad: 5.00
   Ataque 1: 5311 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 5311 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 2,390 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

363. Krampus
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_10_platinum.png
   Vida: 14,355
   Velocidad: 4.55
   Ataque 1: 6358 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 6358 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -2,543 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

364. Waryena
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_10_platinum.png
   Vida: 15,110
   Velocidad: 3.45
   Ataque 1: 8228 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 8228 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -3,291 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

365. Bahamut
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_10_platinum.png
   Vida: 11,608
   Velocidad: 6.67
   Ataque 1: 3692 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3692 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 1,662 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

366. Mimi Cronocurva
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_10_platinum.png
   Vida: 6,684
   Velocidad: 11.11
   Ataque 1: 3720 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3720 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -744 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

367. Guardia Men'ki
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_10_platinum.png
   Vida: 9,180
   Velocidad: 9.09
   Ataque 1: 4128 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 4128 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -2,477 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

368. Hipopotanque
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_10_platinum.png
   Vida: 16,844
   Velocidad: 3.45
   Ataque 1: 10533 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 10533 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 2,317 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

369. Hefesto
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_10_platinum.png
   Vida: 17,095
   Velocidad: 3.85
   Ataque 1: 8493 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 8493 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -2,123 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

370. T-3rr0r
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_10_platinum.png
   Vida: 19,312
   Velocidad: 5.88
   Ataque 1: 4699 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 2747 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,410 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

371. A027441
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_99_platinum.png
   Vida: 20,060
   Velocidad: 3.23
   Ataque 1: 9316 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 9316 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 3,726 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

372. Rey Lulu
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_10_platinum.png
   Vida: 13,471
   Velocidad: 3.45
   Ataque 1: 11179 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 11179 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 4,472 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

373. Kolossus
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_99.png
   Vida: 19,652
   Velocidad: 3.51
   Ataque 1: 8527 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 8527 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -1,023 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

374. Kameo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_10_platinum.png
   Vida: 11,628
   Velocidad: 8.33
   Ataque 1: 4270 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 2543 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,922 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

375. ED-404
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_10_platinum.png
   Vida: 19,638
   Velocidad: 4.00
   Ataque 1: 9690 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 5719 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,907 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

376. Hellsaw
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_10_platinum.png
   Vida: 17,578
   Velocidad: 4.08
   Ataque 1: 7466 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 7466 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 4,107 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

377. Urgan
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_10_platinum.png
   Vida: 16,361
   Velocidad: 3.85
   Ataque 1: 10873 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5800 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -2,175 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

378. Buffalor
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_10_platinum.png
   Vida: 13,804
   Velocidad: 3.57
   Ataque 1: 9636 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 9636 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -3,854 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

379. Gamallia
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_10_platinum.png
   Vida: 9,418
   Velocidad: 5.00
   Ataque 1: 6834 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 6834 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 2,187 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

380. Gakarian
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_10_platinum.png
   Vida: 13,185
   Velocidad: 6.45
   Ataque 1: 4876 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 4876 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 1,463 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

381. S-K-Venger
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_10_platinum.png
   Vida: 13,090
   Velocidad: 3.45
   Ataque 1: 12206 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 12206 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 4,272 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

382. Overkill
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_10_platinum.png
   Vida: 15,014
   Velocidad: 3.45
   Ataque 1: 9425 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 9425 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 3,487 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

383. Capitán Achabe
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_10.png
   Vida: 12,070
   Velocidad: 7.69
   Ataque 1: 3842 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 3842 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -768 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

384. Aubraea Mutantula
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_11_platinum.png
   Vida: 13,498
   Velocidad: 5.56
   Ataque 1: 6066 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 6066 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 2,730 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

385. Bregbeam
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_10_platinum.png
   Vida: 22,100
   Velocidad: 3.33
   Ataque 1: 11614 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5868 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -2,904 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

386. Piwisher
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_11.png
   Vida: 13,845
   Velocidad: 3.33
   Ataque 1: 7395 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 7395 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,997 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

387. Nimrod
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_99_platinum.png
   Vida: 20,400
   Velocidad: 4.00
   Ataque 1: 8813 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 8813 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -3,084 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

388. E.T.-Liot
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_10_platinum.png
   Vida: 14,450
   Velocidad: 7.14
   Ataque 1: 4780 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 2747 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -2,008 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

389. Spin Fury
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_11_platinum.png
   Vida: 5,814
   Velocidad: 10.53
   Ataque 1: 3971 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 3971 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 794 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

390. Cooktouille
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_11_platinum.png
   Vida: 13,056
   Velocidad: 4.00
   Ataque 1: 7344 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 7344 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -3,011 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

391. Orión
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_11_platinum.png
   Vida: 2,870
   Velocidad: 8.33
   Ataque 1: 6793 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 6793 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -679 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

392. Heimdall
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_11.png
   Vida: 11,291
   Velocidad: 7.69
   Ataque 1: 4692 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 4692 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 1,314 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

393. Chun-Lei
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_11_platinum.png
   Vida: 5,950
   Velocidad: 10.00
   Ataque 1: 3638 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 3638 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 982 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

394. The Reef
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_11_beach.png
   Vida: 8,684
   Velocidad: 7.14
   Ataque 1: 5889 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5889 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 766 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

395. Sir Bannog
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_11_platinum.png
   Vida: 14,464
   Velocidad: 5.56
   Ataque 1: 6922 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 6922 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -3,461 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

396. Pesadilla Viviente
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_11_platinum.png
   Vida: 10,078
   Velocidad: 11.76
   Ataque 1: 1714 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3210 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -428 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

397. An0malie
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_11_platinum.png
   Vida: 11,370
   Velocidad: 8.33
   Ataque 1: 4570 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 4862 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,645 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

398. Owlock
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_11_platinum.png
   Vida: 13,593
   Velocidad: 4.17
   Ataque 1: 9506 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 9506 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -2,852 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

399. TriAD
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_11_platinum.png
   Vida: 8,099
   Velocidad: 10.00
   Ataque 1: 2706 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 2414 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,571 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

400. La Olvidada
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_11.png
   Vida: 18,632
   Velocidad: 4.55
   Ataque 1: 5250 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 3261 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 2,887 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

401. Mago de la Singularidad
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_99.png
   Vida: 13,943
   Velocidad: 4.00
   Ataque 1: 3835 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 6800 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 1,266 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

402. Ishi no Ōkami
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_11_platinum.png
   Vida: 11,859
   Velocidad: 6.25
   Ataque 1: 5318 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5318 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -2,127 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

403. Disensión
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_11_platinum.png
   Vida: 14,151
   Velocidad: 3.77
   Ataque 1: 8323 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5943 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 3,246 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

404. Aqueronte
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_11.png
   Vida: 9,948
   Velocidad: 5.56
   Ataque 1: 7001 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 4522 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 2,870 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

405. Drei, Space Corgi
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_11_platinum.png
   Vida: 14,443
   Velocidad: 5.56
   Ataque 1: 7290 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 7290 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -2,916 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

406. Mix0-Logo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_11_platinum.png
   Vida: 14,770
   Velocidad: 5.26
   Ataque 1: 10064 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 4998 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 3,321 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

407. Veren Kaeesu
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_11.png
   Vida: 9,285
   Velocidad: 5.88
   Ataque 1: 6429 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 6429 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 2,057 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

408. Spada
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_11_platinum.png
   Vida: 11,492
   Velocidad: 7.14
   Ataque 1: 4304 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 4304 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,722 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

409. Roadmaster
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_11_platinum.png
   Vida: 18,285
   Velocidad: 6.06
   Ataque 1: 3114 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 5358 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -685 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

410. Gerard Steelgarden
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_11_platinum.png
   Vida: 19,727
   Velocidad: 4.17
   Ataque 1: 9948 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 4971 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 4,178 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

411. Chocolem
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_11.png
   Vida: 11,856
   Velocidad: 4.00
   Ataque 1: 6678 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 6678 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 2,003 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

412. Drudge Zombie
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_b_05_platinum.png
   Vida: 15,164
   Velocidad: 6.67
   Ataque 1: 6222 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 6222 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: 3,733 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

413. Animus de Irrealidad
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_99.png
   Vida: 15,565
   Velocidad: 6.67
   Ataque 1: 5654 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 2825 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 1,696 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

414. Midas
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_11_platinum.png
   Vida: 16,626
   Velocidad: 3.85
   Ataque 1: 8425 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 8425 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 4,213 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

415. Caliburn EX
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_11.png
   Vida: 16,062
   Velocidad: 4.26
   Ataque 1: 8044 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 8044 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,207 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

416. Santagonista
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_11.png
   Vida: 15,895
   Velocidad: 5.00
   Ataque 1: 6599 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 3570 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -2,640 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

417. Barbaro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_c_05_platinum.png
   Vida: 16,198
   Velocidad: 4.26
   Ataque 1: 9554 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 9554 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: -3,822 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

418. Dama del Crepúsculo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_12_platinum.png
   Vida: 24,344
   Velocidad: 3.13
   Ataque 1: 9772 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 9772 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 3,909 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

419. Mecaovoide Arácneo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_11.png
   Vida: 10,033
   Velocidad: 8.00
   Ataque 1: 2057 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 3577 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -823 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

420. Terror Abisal
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_11_platinum.png
   Vida: 13,416
   Velocidad: 6.67
   Ataque 1: 7079 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5324 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -3,539 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png
`,CA=`421. Oculys
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_11_platinum.png
   Vida: 14,763
   Velocidad: 4.00
   Ataque 1: 11349 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 11349 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -3,972 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

422. Pierrot
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_11_platinum.png
   Vida: 13,580
   Velocidad: 4.76
   Ataque 1: 8459 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 4230 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 4,060 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

423. Phileas Derocas
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_12_platinum.png
   Vida: 16,334
   Velocidad: 4.35
   Ataque 1: 8983 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 8983 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -3,144 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

424. Dreadnought
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_11.png
   Vida: 15,259
   Velocidad: 3.64
   Ataque 1: 7704 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 7704 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 3,852 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

425. Missy Despierta
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_99.png
   Vida: 8,541
   Velocidad: 5.13
   Ataque 1: 8231 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 8231 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,235 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

426. Enviro 3.0
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_11_platinum.png
   Vida: 13,777
   Velocidad: 5.88
   Ataque 1: 5263 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 3386 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,316 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

427. Asteroide Gestalt
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_11_platinum.png
   Vida: 16,449
   Velocidad: 6.25
   Ataque 1: 9812 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 4903 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 3,925 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

428. X'astuth
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_12_platinum.png
   Vida: 15,246
   Velocidad: 3.70
   Ataque 1: 8561 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 8561 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -5,993 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

429. Colmillo Rabioso
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_11_platinum.png
   Vida: 16,096
   Velocidad: 12.50
   Ataque 1: 2060 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 2060 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -206 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

430. Doctor del Farol
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_12.png
   Vida: 14,005
   Velocidad: 4.76
   Ataque 1: 6854 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 4869 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -3,290 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

431. Leviatán
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_12_platinum.png
   Vida: 16,028
   Velocidad: 4.17
   Ataque 1: 9744 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5596 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -2,436 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

432. Explorador Sideral
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_e_12_platinum.png
   Vida: 11,920
   Velocidad: 4.55
   Ataque 1: 6059 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 6195 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: 1,818 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

433. Aullosaurio
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_d_12_platinum.png
   Vida: 14,674
   Velocidad: 3.33
   Ataque 1: 6310 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 9996 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: -2,524 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

434. Protector de los Sueños
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_12.png
   Vida: 9,336
   Velocidad: 6.06
   Ataque 1: 6684 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 6684 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,337 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

435. Basilisco y Esdragón
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_12_vegetal.png
   Vida: 22,664
   Velocidad: 3.23
   Ataque 1: 9391 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 9391 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 3,569 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

436. Heredero de los 5 anillos
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_12_platinum.png
   Vida: 20,373
   Velocidad: 4.08
   Ataque 1: 10084 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 10084 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 1,513 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

437. Ballesto
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_12_platinum.png
   Vida: 11,832
   Velocidad: 3.85
   Ataque 1: 9785 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 8425 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -3,229 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

438. Cibermántico Etéreo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_12_platinum.png
   Vida: 14,124
   Velocidad: 5.26
   Ataque 1: 8745 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 8745 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 4,810 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

439. Lampyrion Solar
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_12.png
   Vida: 16,048
   Velocidad: 6.25
   Ataque 1: 5586 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 2791 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 2,234 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

440. Dimentio
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_11_platinum.png
   Vida: 9,704
   Velocidad: 8.85
   Ataque 1: 7555 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 7555 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,738 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

441. Generalísimo Chocoleón IV
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_12.png
   Vida: 17,337
   Velocidad: 4.26
   Ataque 1: 5151 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5151 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -2,060 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

442. Archivista Eterno
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_12_platinum.png
   Vida: 20,713
   Velocidad: 5.26
   Ataque 1: 8214 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5270 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 3,779 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

443. Ammonia Atlantica
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_12_platinum.png
   Vida: 14,314
   Velocidad: 4.55
   Ataque 1: 9432 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 9432 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 3,584 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

444. General de Terracota
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_12_platinum.png
   Vida: 15,191
   Velocidad: 3.70
   Ataque 1: 9976 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5420 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,494 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

445. Gran Gusano de los Túneles
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_12.png
   Vida: 13,671
   Velocidad: 3.45
   Ataque 1: 6028 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 6028 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 3,014 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

446. Litominero Stellariano
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_12_platinum.png
   Vida: 14,511
   Velocidad: 5.00
   Ataque 1: 10458 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 10458 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,569 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

447. Capitán Águila
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_12.png
   Vida: 11,880
   Velocidad: 6.90
   Ataque 1: 5168 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5168 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,550 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

448. Octopía
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_99.png
   Vida: 15,290
   Velocidad: 3.57
   Ataque 1: 5362 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 2679 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 2,413 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

449. Médico Astral
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_12_platinum.png
   Vida: 12,859
   Velocidad: 6.67
   Ataque 1: 6902 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 6902 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 2,623 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

450. Simurgh
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_12_platinum.png
   Vida: 9,513
   Velocidad: 8.33
   Ataque 1: 7004 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3502 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,401 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

451. Väinämöinen
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_f_13_platinum.png
   Vida: 11,648
   Velocidad: 6.67
   Ataque 1: 5433 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 2713 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: -3,260 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

452. Disfuncidroide
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_12_platinum.png
   Vida: 15,987
   Velocidad: 4.08
   Ataque 1: 8609 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 4304 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -2,152 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

453. Caronte (Halloween)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_12.png
   Vida: 16,493
   Velocidad: 3.64
   Ataque 1: 7983 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 7983 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -2,794 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

454. Cabloide
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_12_platinum.png
   Vida: 23,120
   Velocidad: 4.55
   Ataque 1: 8303 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 4440 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -2,076 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

455. Exoceleste Álgido
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_12.png
   Vida: 10,642
   Velocidad: 4.17
   Ataque 1: 5052 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 7385 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -1,112 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

456. Clérigo Oscuro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_12_platinum.png
   Vida: 20,067
   Velocidad: 4.65
   Ataque 1: 6984 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 3917 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -3,492 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

457. D'Arathomis
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_c_13_platinum.png
   Vida: 12,199
   Velocidad: 6.25
   Ataque 1: 8527 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5685 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: -1,705 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

458. Tenacity
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_12_platinum.png
   Vida: 15,919
   Velocidad: 3.92
   Ataque 1: 9683 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 9683 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 4,357 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

459. Regulo&Juzya
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_12.png
   Vida: 8,704
   Velocidad: 5.88
   Ataque 1: 8432 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 8432 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -1,686 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

460. Gelatina Purulenta
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_12_platinum.png
   Vida: 22,073
   Velocidad: 3.45
   Ataque 1: 7562 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 7562 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 3,025 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

461. Vivaldi
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_13.png
   Vida: 10,047
   Velocidad: 6.25
   Ataque 1: 3553 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3553 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 1,066 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

462. Tecnocaracol
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_12_platinum.png
   Vida: 20,366
   Velocidad: 3.64
   Ataque 1: 11077 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 11077 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 5,539 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

463. Zapador de Madrigueras
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_12.png
   Vida: 8,340
   Velocidad: 6.25
   Ataque 1: 7874 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 7874 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -3,150 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

464. Invocador
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_f_12_platinum.png
   Vida: 10,812
   Velocidad: 8.33
   Ataque 1: 5182 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5426 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: -1,554 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

465. Lepidoptech
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_12_platinum.png
   Vida: 11,363
   Velocidad: 7.41
   Ataque 1: 6841 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 6841 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,026 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

466. Huesamblaje
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_b_12_platinum.png
   Vida: 11,424
   Velocidad: 6.25
   Ataque 1: 7691 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 7691 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: 5,768 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

467. Sasquatch
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_d_13_platinum.png
   Vida: 13,518
   Velocidad: 3.85
   Ataque 1: 10152 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 6093 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: -5,076 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

468. Thanaconda
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_12_platinum.png
   Vida: 14,232
   Velocidad: 4.35
   Ataque 1: 9255 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 9255 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -3,702 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

469. A00-C0R3-C0NTR0L
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_99.png
   Vida: 15,711
   Velocidad: 5.00
   Ataque 1: 6327 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 3475 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 3,480 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

470. Hijo de la Tormenta
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_13_platinum.png
   Vida: 13,818
   Velocidad: 6.45
   Ataque 1: 8405 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 8650 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -2,101 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

471. Bricodrón LLK-215
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_12_platinum.png
   Vida: 13,505
   Velocidad: 5.26
   Ataque 1: 7718 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 7718 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -2,701 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

472. GAR, Zombi Soberano
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_b_13_platinum.png
   Vida: 24,650
   Velocidad: 3.70
   Ataque 1: 8915 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 6025 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: 4,457 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

473. Amalgalmas
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_13.png
   Vida: 15,460
   Velocidad: 4.35
   Ataque 1: 6021 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 6021 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -2,107 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

474. Llama Sensei
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_13_platinum.png
   Vida: 12,641
   Velocidad: 6.67
   Ataque 1: 5590 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 9058 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 1,956 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

475. Polaris
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_12.png
   Vida: 13,379
   Velocidad: 5.26
   Ataque 1: 7585 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 5607 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 3,641 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

476. Myrmidus.exe
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_13_platinum.png
   Vida: 15,796
   Velocidad: 4.76
   Ataque 1: 8303 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 8303 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 3,736 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

477. Helicoide Boreal
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_13.png
   Vida: 9,700
   Velocidad: 5.71
   Ataque 1: 3869 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 2870 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -2,322 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

478. Antropobot Soñador
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_13_platinum.png
   Vida: 17,966
   Velocidad: 3.92
   Ataque 1: 6603 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 6603 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,971 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

479. Anteros
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_13.png
   Vida: 11,676
   Velocidad: 4.26
   Ataque 1: 5675 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5675 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,816 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

480. Doctor Desollador
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_13_platinum.png
   Vida: 13,736
   Velocidad: 5.00
   Ataque 1: 11138 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 11614 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -5,458 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

481. Oryctolagus Exobioicus
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_13.png
   Vida: 8,367
   Velocidad: 8.00
   Ataque 1: 5603 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5603 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -1,121 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

482. Cr€$u$
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_12_platinum.png
   Vida: 16,993
   Velocidad: 3.45
   Ataque 1: 8915 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 12118 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -3,566 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

483. Asimov
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_a_13_platinum.png
   Vida: 6,576
   Velocidad: 8.33
   Ataque 1: 5202 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 4522 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: 1,821 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

484. Achernar
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_13_platinum.png
   Vida: 12,736
   Velocidad: 6.06
   Ataque 1: 5209 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 9459 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 1,563 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

485. El Motín
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_13_platinum.png
   Vida: 17,592
   Velocidad: 4.00
   Ataque 1: 8534 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5542 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 3,414 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

486. Xinomas
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_13.png
   Vida: 12,849
   Velocidad: 5.26
   Ataque 1: 6229 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 6229 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 1,869 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

487. Simulacro de Combate
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_99.png
   Vida: 19,938
   Velocidad: 3.51
   Ataque 1: 4831 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 4831 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 2,174 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

488. Helidrón KxT-271
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_13_platinum.png
   Vida: 4,631
   Velocidad: 9.52
   Ataque 1: 4950 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 3475 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -990 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

489. Reed, el Verdadero Héroe
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_99.png
   Vida: 12,230
   Velocidad: 4.08
   Ataque 1: 4587 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 4587 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,605 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

490. El Fosforescente
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_13_platinum.png
   Vida: 19,264
   Velocidad: 4.17
   Ataque 1: 10560 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 7324 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -4,224 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

491. Tezcatlipoca
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_13.png
   Vida: 8,837
   Velocidad: 4.44
   Ataque 1: 5012 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 8660 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -3,007 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

492. Scaramouche
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_12_platinum.png
   Vida: 6,222
   Velocidad: 8.33
   Ataque 1: 6358 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 4848 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 1,590 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

493. Traiciobaza
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_14.png
   Vida: 4,869
   Velocidad: 9.09
   Ataque 1: 5161 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 1,806 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

494. Astrobservador
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_e_13_platinum.png
   Vida: 10,778
   Velocidad: 5.56
   Ataque 1: 9887 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 5664 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: -2,966 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

495. Sierrametrodon
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_13_platinum.png
   Vida: 16,748
   Velocidad: 3.51
   Ataque 1: 12539 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 12539 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -5,266 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

496. Capsuladora MTZ-004
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_13.png
   Vida: 14,810
   Velocidad: 3.70
   Ataque 1: 6882 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 6882 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -2,409 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

497. Núcleo seráfico
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_14_platinum.png
   Vida: 14,103
   Velocidad: 4.26
   Ataque 1: 6419 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 9928 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 3,210 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

498. Rey De Avalon
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_13_platinum.png
   Vida: 14,171
   Velocidad: 3.57
   Ataque 1: 12539 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 12539 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 4,389 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

499. K'yu T'ypaï
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_14.png
   Vida: 7,188
   Velocidad: 9.09
   Ataque 1: 3699 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 2604 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,110 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

500. Amistad Sin Limites
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_13_platinum.png
   Vida: 13,484
   Velocidad: 5.13
   Ataque 1: 10771 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 8160 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 3,231 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

501. Sakuraboshi
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_13_platinum.png
   Vida: 13,246
   Velocidad: 4.55
   Ataque 1: 9663 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 7711 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -3,865 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

502. Giganto-Moai
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_14.png
   Vida: 14,321
   Velocidad: 5.00
   Ataque 1: 5549 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 3437 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 2,220 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

503. TCB-8566 Trafficroid
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_13_platinum.png
   Vida: 13,967
   Velocidad: 5.88
   Ataque 1: 7630 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 5746 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -2,289 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

504. Bearsikk Sikleast
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_13_platinum.png
   Vida: 17,299
   Velocidad: 3.70
   Ataque 1: 10873 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 10873 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 3,588 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

505. Capitan Barbanegra
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_14_platinum.png
   Vida: 17,075
   Velocidad: 3.45
   Ataque 1: 11771 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 8602 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -4,708 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

506. La Anárquica
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_13_platinum.png
   Vida: 10,118
   Velocidad: 5.71
   Ataque 1: 5746 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 8323 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,873 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

507. Terror Jurasico
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_14.png
   Vida: 13,182
   Velocidad: 3.45
   Ataque 1: 6960 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 6960 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -4,176 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

508. Emperador Helado
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_13_platinum.png
   Vida: 13,423
   Velocidad: 4.55
   Ataque 1: 10173 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 7854 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 4,578 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

509. Breakmaster
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_14_olympics.png
   Vida: 14,729
   Velocidad: 4.55
   Ataque 1: 13763 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 10044 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -2,753 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

510. El Descolorido
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_13_platinum.png
   Vida: 16,408
   Velocidad: 4.26
   Ataque 1: 10547 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 10547 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -3,691 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

511. Azaronimo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_99.png
   Vida: 12,124
   Velocidad: 5.88
   Ataque 1: 7902 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 5063 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 2,529 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

512. Professor Cronomantico
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_14_platinum.png
   Vida: 17,279
   Velocidad: 3.57
   Ataque 1: 11213 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 11213 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -2,243 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

513. Golem de Epocas
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_13_platinum.png
   Vida: 23,664
   Velocidad: 3.45
   Ataque 1: 7568 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 7568 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -2,649 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

514. La locura reptante
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_14.png
   Vida: 13,556
   Velocidad: 3.57
   Ataque 1: 6045 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 3352 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -2,418 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

515. Hekatoncheiros
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_13_platinum.png
   Vida: 16,490
   Velocidad: 3.39
   Ataque 1: 12526 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 12526 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -4,384 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

516. Atlas
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_13_platinum.png
   Vida: 15,851
   Velocidad: 4.26
   Ataque 1: 10486 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 10486 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 3,670 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

517. Peregrino Espacial
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_13_platinum.png
   Vida: 12,730
   Velocidad: 5.88
   Ataque 1: 8459 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 6691 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,707 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

518. Termodroide Celsius
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_99.png
   Vida: 16,167
   Velocidad: 4.26
   Ataque 1: 6814 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 6814 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 3,066 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

519. Black I.C.E.
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_14_platinum.png
   Vida: 9,187
   Velocidad: 10.00
   Ataque 1: 5950 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 5950 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -3,868 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

520. Profeta del Crepúsculo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_14.png
   Vida: 3,842
   Velocidad: 3.57
   Ataque 1: 10258 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 6882 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 4,103 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

521. Señor Bestial
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_14_platinum.png
   Vida: 16,599
   Velocidad: 3.57
   Ataque 1: 10118 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 8038 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -4,047 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

522. Freyja, Reina de los Vanir
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_14.png
   Vida: 13,899
   Velocidad: 4.08
   Ataque 1: 8320 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 8320 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 4,160 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

523. Altísimo Candelabro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_13_platinum.png
   Vida: 13,892
   Velocidad: 4.00
   Ataque 1: 7786 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 7786 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 3,114 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

524. El Arquitecto
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_13_platinum.png
   Vida: 12,995
   Velocidad: 4.44
   Ataque 1: 12995 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 12995 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -4,548 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

525. Medinosaurio
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_13_platinum.png
   Vida: 11,390
   Velocidad: 6.25
   Ataque 1: 10275 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 10275 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -3,082 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

526. Fiera del Campo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_14_platinum.png
   Vida: 16,225
   Velocidad: 4.65
   Ataque 1: 7385 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 7385 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -3,692 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

527. B.U.N. Genio
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_14.png
   Vida: 10,197
   Velocidad: 7.41
   Ataque 1: 5967 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5967 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,492 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

528. Gladiador
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_c_14_platinum.png
   Vida: 15,259
   Velocidad: 4.35
   Ataque 1: 9812 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 7643 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: 4,416 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

529. Hidrira
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_14_platinum.png
   Vida: 19,414
   Velocidad: 3.45
   Ataque 1: 13144 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 10044 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 3,943 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

530. Infinito Supermasivo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_14.png
   Vida: 15,864
   Velocidad: 3.77
   Ataque 1: 6780 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 6780 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 4,068 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

531. Automata
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_a_14_platinum.png
   Vida: 11,478
   Velocidad: 6.06
   Ataque 1: 7555 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 5583 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: -3,022 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

532. Nexo Orbital
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_13_platinum.png
   Vida: 17,449
   Velocidad: 3.92
   Ataque 1: 11295 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 8391 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 5,422 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

533. Mascarada Emocional
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_99.png
   Vida: 18,122
   Velocidad: 3.39
   Ataque 1: 8945 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 6157 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -3,310 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

534. Mago
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_f_14_platinum.png
   Vida: 11,499
   Velocidad: 5.88
   Ataque 1: 7711 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5331 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: 2,699 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

535. Zagam, Rey De La Avaricia
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_14.png
   Vida: 22,664
   Velocidad: 4.08
   Ataque 1: 7993 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 7993 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,998 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

536. Sangresquito
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_13_platinum.png
   Vida: 5,848
   Velocidad: 7.69
   Ataque 1: 6018 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 6018 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -6,018 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

537. Don Gamberetti
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_14_platinum.png
   Vida: 13,410
   Velocidad: 3.85
   Ataque 1: 13410 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 13410 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 6,034 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

538. Rey Azul
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_14_chess.png
   Vida: 19,598
   Velocidad: 3.13
   Ataque 1: 9799 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 6895 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 7,839 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

539. Espectroplasma
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_b_14_platinum.png
   Vida: 13,267
   Velocidad: 5.41
   Ataque 1: 6997 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 4903 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: -2,799 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

540. El Presentador
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_14.png
   Vida: 15,494
   Velocidad: 5.56
   Ataque 1: 5250 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 5250 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -2,100 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

541. Viajero de Vortice
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_13_platinum.png
   Vida: 10,220
   Velocidad: 3.64
   Ataque 1: 17598 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 17598 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -3,520 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

542. D.A.B.
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_14_platinum.png
   Vida: 21,406
   Velocidad: 3.70
   Ataque 1: 8459 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 8459 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -2,961 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

543. Mecargola
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_14.png
   Vida: 7,551
   Velocidad: 5.88
   Ataque 1: 6229 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 6229 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -5,606 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

544. Hielo Patinadora Yria
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_14_platinum.png
   Vida: 5,168
   Velocidad: 10.53
   Ataque 1: 6229 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 6229 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -4,360 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

545. Estrellador Telurico
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_15.png
   Vida: 17,037
   Velocidad: 3.57
   Ataque 1: 8911 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 8911 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 5,347 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

546. Origamix
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_14_platinum.png
   Vida: 2,407
   Velocidad: 11.11
   Ataque 1: 5916 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 5916 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 2,071 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

547. El Glitchy Corazon
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_15.png
   Vida: 13,141
   Velocidad: 5.41
   Ataque 1: 7232 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 7232 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -3,616 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

548. Spiraxia
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_e_14_platinum.png
   Vida: 13,974
   Velocidad: 4.08
   Ataque 1: 9296 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 6637 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: 4,648 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

549. Irradiancia
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_14_platinum.png
   Vida: 12,655
   Velocidad: 3.45
   Ataque 1: 14851 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 14851 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -14,851 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

550. El Hambre
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_15.png
   Vida: 10,608
   Velocidad: 3.85
   Ataque 1: 13399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 13399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 4,690 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

551. Dandy Cosmico
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_14_platinum.png
   Vida: 7,779
   Velocidad: 5.88
   Ataque 1: 8378 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 8378 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 2,094 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

552. Kereon del Abismo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_15_platinum.png
   Vida: 17,755
   Velocidad: 3.77
   Ataque 1: 12131 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 12131 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 7,643 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

553. Apiarca
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_d_14_platinum.png
   Vida: 2,890
   Velocidad: 11.11
   Ataque 1: 6263 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5664 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: -6,889 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

554. Ornitorrinco
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_15.png
   Vida: 12,685
   Velocidad: 5.88
   Ataque 1: 6117 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 4525 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -2,447 | Icono: https://pokradex.org/MutantsGG/assets/ability_weaken_big.png
`;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const sr={vida:"https://pokradex.org/MutantsGG/assets/icon_hp.png",velocidad:"https://pokradex.org/MutantsGG/assets/icon_speed.png"};function kf(a){const s=a.split("|").map(b=>b.trim()),r=s[0]||"",o=s.find(b=>b.toLowerCase().includes("triple:")),d=o?o.toLowerCase().includes("sí"):r.toLowerCase().includes("x3"),g=s.find(b=>b.toLowerCase().includes("icono:")),p=g?g.replace(/icono:/i,"").trim():"";return{valor:r,es_triple:d,icono:p}}function qA(a){const s=a.split("|").map(g=>g.trim()),r=s[0]||"",o=s.find(g=>g.toLowerCase().includes("icono:")),d=o?o.replace(/icono:/i,"").trim():"";return{valor:r,icono:d}}const RA=["a_01","a_02","aa_01","aa_02","ab_01","ab_02","ab_03","ac_01","ac_02","ac_03","ad_01","ad_02","ae_01","ae_02","af_01","af_02","b_01","b_02","b_03","ba_01","ba_02","bb_01","bb_02","bc_01","bc_02","bd_01","bd_02","be_01","be_02","be_03","bf_01","bf_02","c_01","c_02","ca_01","ca_02","ca_03","cb_01","cb_02","cc_01","cc_02","cd_01","cd_02","cd_03","ce_01","ce_03","cf_01","cf_02","d_01","da_01","da_02","db_01","db_02","db_03","dc_01","dc_02","dc_03","dd_01","dd_02","de_01","de_02","df_01","df_02","e_01","ea_01","ea_02","ea_03","eb_01","eb_02","eb_03","ec_01","ec_02","ed_01","ed_02","ee_01","ee_02","ee_03","ef_01","ef_02","ef_03","f_01","f_03","fa_01","fa_02","fb_01","fb_02","fb_03","fc_01","fc_02","fd_01","fd_02","fd_03","fe_01","fe_02","ff_01","ff_02","fc_03","cb_03","ba_03","ff_03","bb_03","de_03","da_03","bf_03","cd_04","dc_04","aa_03","d_03","ec_03","bc_03","ad_03","af_04","ae_03","fb_04","bd_03","cf_04","ce_02","dd_03","cc_03","df_03","ed_03","af_03","bc_04","db_04","fa_03","fe_04","fe_03","a_03","cf_03","de_04","ba_04","cb_04","fd_04","fc_04","fa_04","bf_04","fe_05","ca_04","df_04","ed_04","ac_04","eb_04","de_05","bf_05","c_03","ec_04","ef_04","ff_04","ad_04","cc_04","ab_04","ce_04","bd_99","bb_04","aa_04","ae_04","cb_05","af_05","da_04","bd_04","fc_05","ee_04","dd_04","be_04","ea_04","ef_05","df_99","fb_05","eb_05","ca_05","ac_05","ab_05","aa_05","fa_05","fe_99","ce_05","e_03","cc_05","da_05","df_05","db_05","bc_05","dc_05","ed_05","ec_05","fd_05","ec_06","ff_05","be_05","ad_05","bd_05","dd_05","da_06","cf_05","bb_05","cf_06","cd_05","ea_05","af_06","ae_05","ee_05","ba_05","ce_06","fb_06","bc_06","fd_06","dc_06","ed_06","fa_06","bf_06","ad_06","cd_06","db_06","ac_06","fe_06","eb_06","ea_06","be_06","b_04","ab_06","ef_06","fc_06","df_06","cb_06","dd_06","de_06","ca_06","ff_06","bd_06","af_07","cf_07","ae_06","ba_06","ec_07","ed_07","bd_07","db_07","da_07","fe_07","ab_07","df_07","bf_07","ee_06","aa_06","ce_07","cc_06","cc_07","fc_07","ba_07","f_04","fd_07","ef_07","ad_07","ac_07","ca_07","fb_07","fa_07","de_07","cb_07","bc_07","cd_07","ea_07","ee_07","be_07","dd_07","eb_07","ec_08","cf_08","bc_08","ac_08","dd_08","de_08","fc_08","ae_07","db_08","af_08","fa_08","ff_07","bb_06","ef_08","da_08","cb_08","ea_08","fb_08","bf_08","ad_08","fc_09","ce_08","ba_08","ae_08","bd_08","fa_99","eb_99","cd_08","dc_07","ed_08","fd_08","ca_08","df_08","eb_08","cf_09","ad_09","dc_08","bb_07","aa_07","ac_09","bd_09","ff_08","ee_08","be_08","aa_08","ca_09","eb_09","df_09","fe_08","bb_08","ec_09","de_09","ab_08","be_09","ca_10","ea_09","cc_08","bf_09","cc_09","ae_09","cd_09","da_09","fd_09","af_09","a_05","ea_10","dd_09","fd_10","ab_09","ac_10","df_10","bc_09","af_10","bb_09","de_10","cb_09","db_09","dc_09","fe_09","ba_09","bf_10","fa_09","aa_09","cf_10","ce_09","ef_09","da_10","ee_09","ff_09","fb_10","ed_09","fb_09","ef_10","ed_10","cb_10","ae_10","dc_10","bd_10","fe_10","fa_10","cd_10","ad_10","fc_10","bb_10","af_99","bc_10","ce_99","dd_10","aa_10","ba_10","cc_10","db_10","ec_10","eb_10","ab_10","be_10","ce_10","eb_11","ff_10","db_11","fc_99","ee_10","ac_11","bd_11","fa_11","af_11","ce_11","ca_11","cd_11","fb_11","da_11","ed_11","aa_11","bb_11","ef_99","fd_11","cb_11","bf_11","de_11","ae_11","ec_11","dc_11","ba_11","ff_11","df_11","b_05","ee_99","fc_11","cf_11","cc_11","c_05","fb_12","ad_11","dd_11","be_11","fe_11","ac_12","ea_11","ca_99","ab_11","ee_11","ef_12","bc_11","bb_12","de_12","e_12","d_12","af_12","df_12","cf_12","cb_12","fa_12","dd_12","ef_11","fc_12","ff_12","ed_12","ca_12","db_12","ec_12","cd_12","ed_99","eb_12","fd_12","f_13","ab_12","bc_12","aa_12","fe_12","bf_12","c_13","ae_12","ce_12","be_12","fe_13","da_12","dc_12","f_12","ad_12","b_12","d_13","bd_12","aa_99","cf_13","ea_12","b_13","bf_13","dd_13","ee_12","ad_13","fa_13","da_13","ca_13","bc_13","de_13","ba_12","a_13","ef_13","cb_13","eb_13","ab_99","ae_13","cf_99","bb_13","fd_13","cc_12","bc_14","e_13","dc_13","ac_13","fe_14","fc_13","ef_14","cc_13","ff_13","ae_14","aa_13","cd_13","cb_14","ba_13","dc_14","df_13","ca_14","db_13","ae_99","ac_14","af_13","db_14","ec_13","ce_13","ea_13","ea_99","af_14","ff_14","dd_14","fd_14","fb_13","ab_13","ed_13","bd_14","da_14","c_14","ed_14","de_14","a_14","ee_13","ff_99","f_14","fb_14","bd_13","cd_14","cc_14","b_14","ab_14","be_13","ea_14","ba_14","cf_14","de_15","ad_14","ab_15","e_14","bf_14","be_15","ce_14","ea_15","d_14","dd_15"],zA={};RA.forEach((a,s)=>{zA[a.toLowerCase()]=s+1});const Vr=[];function LA(a){const s=a.match(/specimen_([a-zA-Z0-9_]+)/);if(!s)return"";const r=s[1].toLowerCase().split("_");return r.length>=2?`${r[0]}_${r[1]}`:r[0]||""}function HA(){if(Vr.length>0)return;[wA,DA,NA,CA].forEach(s=>{const r=s.split(/\r?\n/);let o=null;for(const d of r){const g=d.trim();if(!g)continue;const p=g.match(/^(\d+)\.\s*(.+)$/);if(p){o&&yf(o),o={id:p[1],nombre:p[2],imagen:"",vida:"",velocidad:"",ataque1:"",ataque2:"",habilidad:""};continue}o&&(g.startsWith("Imagen mutante:")?o.imagen=g.replace("Imagen mutante:","").trim():g.startsWith("Vida:")?o.vida=g.replace("Vida:","").trim():g.startsWith("Velocidad:")?o.velocidad=g.replace("Velocidad:","").trim():g.startsWith("Ataque 1:")?o.ataque1=g.replace("Ataque 1:","").trim():g.startsWith("Ataque 2:")?o.ataque2=g.replace("Ataque 2:","").trim():g.startsWith("Habilidad:")&&(o.habilidad=g.replace("Habilidad:","").trim()))}o&&yf(o)}),Vr.sort((s,r)=>parseInt(s.id,10)-parseInt(r.id,10))}function yf(a){const s=LA(a.imagen);let r=s.split("_")[0].split("");(r.length===0||!r[0])&&(r=["n"]);const o=[...r].sort().join(""),d=xr.find(N=>N.id===r[0]),g=xr.find(N=>N.id===r[1])||d,p=(d==null?void 0:d.image)||"",b=(g==null?void 0:g.image)||p,_=kf(a.ataque1||""),h=kf(a.ataque2||""),f=qA(a.habilidad||""),G=parseFloat(a.vida.replace(/,/g,""))||0,k=parseFloat(a.velocidad)||0,y=_.valor.toLowerCase().replace(/x\s*3/g,"").replace(/,/g,"").trim(),M=parseFloat(y)||0,I=f.valor.toLowerCase().replace(/,/g,"").trim(),S=parseFloat(I)||0;Vr.push({id:a.id,nombre:a.nombre,imagen:a.imagen,vida:a.vida,velocidad:a.velocidad,ataques:[_,h],habilidad:f,tipoIcono:p,skinIcono:b,codigo:s.toUpperCase(),genes:r,sortedGenes:o,stats:{hp:G,atk:M,spd:k,def:S,hab:S}})}HA();/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function OA(a){const s=String(a||"").split("_")[0].toLowerCase().split(""),r=ds[s[0]]||ds.n,o=ds[s[1]]||ds[s[0]]||ds.n;return[r[0],o[1]||o[0]]}function BA(a,s){const[r,o]=OA(s),d=String(a||s||"?").replace(/[^A-Za-zÁÉÍÓÚÜÑ0-9 ]/g," ").split(/\s+/).filter(Boolean).slice(0,2).map(b=>b[0]).join("").toUpperCase()||"MG",g=String(a||"").replace(/&/g,"&amp;").replace(/</g,"&lt;"),p=`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${r}"/>
        <stop offset="100%" stop-color="${o}"/>
      </linearGradient>
      <radialGradient id="glow" cx="50%" cy="35%" r="55%">
        <stop offset="0%" stop-color="rgba(255,255,255,.65)"/>
        <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
      </radialGradient>
    </defs>
    <rect width="600" height="600" rx="42" fill="#020617"/>
    <rect x="18" y="18" width="564" height="564" rx="34" fill="url(#g)" opacity="0.88"/>
    <circle cx="300" cy="190" r="210" fill="url(#glow)" opacity="0.25"/>
    <rect x="50" y="438" width="500" height="96" rx="24" fill="rgba(2,6,23,.44)" stroke="rgba(255,255,255,.18)"/>
    <text x="300" y="305" text-anchor="middle" fill="white" font-family="Inter, Arial, sans-serif" font-weight="900" font-size="170">${d}</text>
    <text x="300" y="495" text-anchor="middle" fill="white" font-family="Inter, Arial, sans-serif" font-weight="700" font-size="28" opacity="0.92">${g.slice(0,24)}</text>
  </svg>`;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(p)}`}function us(a){return Number(a).toLocaleString("es-PE",{minimumFractionDigits:0,maximumFractionDigits:2})}const UA=({mutant:a})=>{var S,N,X,z;const{translate:s}=_t(),[r,o]=O.useState(!1),d=a.codigo.split("_")[0].toLowerCase().split(""),g=d.map(V=>xr.find(Z=>Z.id===V)).filter(Boolean),p=()=>{navigator.clipboard.writeText(a.codigo.toUpperCase()).catch(()=>{}),o(!0),setTimeout(()=>o(!1),2e3)},b=a.ataques[0],_=a.ataques[1]||a.ataques[0],h=(b==null?void 0:b.es_triple)||(b==null?void 0:b.valor.toLowerCase().includes("x3")),f=(_==null?void 0:_.es_triple)||(_==null?void 0:_.valor.toLowerCase().includes("x3")),G=V=>V?V.toLowerCase().replace(/\s*x3/g,"").toUpperCase():"1,500",k=a.fallbackImagen||BA(a.nombre,a.codigo),y=a.nombre.replace(/^#\d+\s*/i,"").replace(/^\d+\.\s*/i,""),M=d[0]||"n",I=ds[M]||["#64748b","#334155"];return l.jsxs(l.Fragment,{children:[l.jsxs("article",{className:"group relative flex sm:hidden w-full items-stretch bg-[#080f1d] border border-white/[0.06] hover:border-blue-500/30 rounded-[22px] overflow-hidden shadow-2xl transition-all duration-300",children:[l.jsx("div",{className:"absolute inset-0 opacity-[0.02] pointer-events-none transition-opacity duration-300 group-hover:opacity-[0.05]",style:{background:`radial-gradient(circle at center, ${I[0]}, transparent 70%)`}}),l.jsxs("div",{className:"relative w-[120px] xs:w-[135px] shrink-0 flex items-center justify-center p-3 overflow-hidden bg-gradient-to-b from-[#111d35] to-[#080f1d] border-r border-white/[0.04]",children:[l.jsx("div",{className:"absolute inset-0 opacity-25 pointer-events-none",style:{background:`radial-gradient(ellipse at 50% 0%, ${I[0]}50, transparent 75%)`}}),l.jsx("img",{className:"mutant-thumb max-w-[85%] max-h-[85%] object-contain transition-transform duration-300 group-hover:scale-105",src:a.imagen,alt:y,loading:"lazy",onError:V=>{const Z=V.currentTarget;Z.src=k,Z.onerror=null}}),l.jsx("div",{className:"absolute top-2.5 left-2.5 flex flex-row gap-2 z-20",children:g.map((V,Z)=>l.jsx("div",{className:"w-[30px] h-[30px] xs:w-[34px] xs:h-[34px] rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center",children:l.jsx("img",{src:V==null?void 0:V.image,alt:V==null?void 0:V.name,className:"w-[82%] h-[82%] object-contain text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"})},Z))})]}),l.jsxs("div",{className:"flex-1 p-3 flex flex-col justify-between gap-1.5 text-left min-w-0",children:[l.jsxs("div",{children:[l.jsx("h3",{className:"m-0 text-[13px] font-black text-white uppercase tracking-tight leading-none truncate pr-1",children:y}),l.jsxs("div",{className:"flex items-center gap-1.5 mt-1",children:[l.jsx("span",{className:"w-1.5 h-1.5 rounded-full",style:{backgroundColor:I[0],boxShadow:`0 0 6px ${I[0]}a0`}}),l.jsx("span",{className:"font-mono font-bold text-[9px] uppercase text-slate-400 tracking-wider",children:a.codigo})]})]}),l.jsxs("div",{className:"grid grid-cols-2 gap-1 px-0.5",children:[l.jsxs("div",{className:"bg-[#0b1325]/90 border border-white/[0.03] rounded-lg py-1 px-1.5 flex items-center gap-1.5",children:[l.jsx("img",{src:sr.vida,alt:"HP",className:"w-[13px] h-[13px] object-contain shrink-0"}),l.jsxs("div",{className:"min-w-0",children:[l.jsx("span",{className:"block text-[7px] font-black uppercase tracking-wider text-slate-500 leading-none",children:"HP"}),l.jsx("span",{className:"text-white font-mono font-black text-[9.5px] leading-tight block select-all truncate",children:a.vida})]})]}),l.jsxs("div",{className:"bg-[#0b1325]/90 border border-white/[0.03] rounded-lg py-1 px-1.5 flex items-center gap-1.5",children:[l.jsx("img",{src:sr.velocidad,alt:"SPD",className:"w-[13px] h-[13px] object-contain shrink-0"}),l.jsxs("div",{className:"min-w-0",children:[l.jsx("span",{className:"block text-[7px] font-black uppercase tracking-wider text-slate-500 leading-none",children:"SPD"}),l.jsx("span",{className:"text-white font-mono font-black text-[9.5px] leading-tight block select-all truncate",children:a.velocidad})]})]}),l.jsxs("div",{className:"bg-[#0b1325]/90 border border-white/[0.03] rounded-lg py-1 px-1.5 flex items-center gap-1.5",children:[l.jsx("img",{src:(b==null?void 0:b.icono)||a.tipoIcono,alt:"AT",className:"w-[13px] h-[13px] object-contain shrink-0"}),l.jsxs("div",{className:"min-w-0 flex-1",children:[l.jsxs("span",{className:"block text-[7px] font-black uppercase tracking-wider text-slate-500 leading-none",children:["AT1",h&&l.jsx("span",{className:"text-amber-500 font-extrabold ml-0.5 text-[6px]",children:"x3"})]}),l.jsx("span",{className:`font-mono font-black text-[9.5px] leading-tight block select-all truncate ${h?"text-amber-400":"text-white"}`,children:G(b==null?void 0:b.valor)})]})]}),l.jsxs("div",{className:"bg-[#0b1325]/90 border border-white/[0.03] rounded-lg py-1 px-1.5 flex items-center gap-1.5",children:[l.jsx("img",{src:(_==null?void 0:_.icono)||a.skinIcono,alt:"AT",className:"w-[13px] h-[13px] object-contain shrink-0"}),l.jsxs("div",{className:"min-w-0 flex-1",children:[l.jsxs("span",{className:"block text-[7px] font-black uppercase tracking-wider text-slate-500 leading-none",children:["AT2",f&&l.jsx("span",{className:"text-amber-500 font-extrabold ml-0.5 text-[6px]",children:"x3"})]}),l.jsx("span",{className:`font-mono font-black text-[9.5px] leading-tight block select-all truncate ${f?"text-amber-400":"text-white"}`,children:G(_==null?void 0:_.valor)})]})]}),l.jsxs("div",{className:"col-span-2 bg-[#0b1325]/90 border border-white/[0.03] rounded-lg py-1 px-1.5 flex items-center justify-between gap-1.5",children:[l.jsxs("div",{className:"flex items-center gap-1 min-w-0",children:[l.jsx("img",{src:((S=a.habilidad)==null?void 0:S.icono)||"https://pokradex.org/MutantsGG/assets/ability_shield_big.png",alt:"DEF",className:"w-[13px] h-[13px] object-contain shrink-0"}),l.jsx("span",{className:"text-[7px] font-black uppercase tracking-wider text-slate-500 leading-none",children:"DEF / HAB"})]}),l.jsx("span",{className:"text-white font-mono font-black text-[9.5px] leading-none select-all truncate pr-1",children:((N=a.habilidad)==null?void 0:N.valor)||"1,000"})]})]}),l.jsx("button",{onClick:p,className:`w-full py-1.5 text-[8px] font-black uppercase tracking-[0.14em] transition-all flex items-center justify-center gap-1.5 border leading-none ${r?"bg-green-500/10 border-green-500/20 text-green-400":"bg-transparent border-white/[0.08] text-white active:scale-[0.97]"}`,style:{borderRadius:"100px"},children:r?l.jsxs(l.Fragment,{children:[l.jsx(vi,{size:10,className:"shrink-0 text-green-400 animate-bounce"}),l.jsx("span",{children:s("mutant.verified")})]}):l.jsxs(l.Fragment,{children:[l.jsx(wu,{size:9,className:"shrink-0 opacity-85"}),l.jsx("span",{children:s("mutant.extract_code")})]})})]})]}),l.jsxs("article",{className:"group relative hidden sm:flex flex-col w-full h-full max-w-[340px] sm:max-w-none mx-auto bg-[#080f1d] border border-white/[0.06] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-1",style:{"--dynamic-glow":I[0]},children:[l.jsx("div",{className:"absolute inset-0 rounded-[24px] sm:rounded-[28px] border border-transparent transition-colors duration-300 group-hover:border-[var(--dynamic-glow)]/40 pointer-events-none z-30",style:{content:'""'}}),l.jsx("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0",style:{background:`radial-gradient(circle at center, ${I[0]}15, transparent 75%)`}}),l.jsxs("div",{className:"relative h-32 sm:h-36 w-full flex items-center justify-center p-2 sm:p-3 overflow-hidden bg-gradient-to-b from-[#111d35] to-[#080f1d] border-b border-white/[0.04] z-10 shrink-0",children:[l.jsx("div",{className:"absolute inset-0 opacity-25 pointer-events-none transition-opacity duration-300 group-hover:opacity-40",style:{background:`radial-gradient(ellipse at 50% 0%, ${I[0]}60, transparent 75%)`}}),l.jsx("img",{className:"mutant-thumb max-w-[80%] max-h-[80%] object-contain transition-transform duration-500 group-hover:scale-105",src:a.imagen,alt:y,loading:"lazy",onError:V=>{const Z=V.currentTarget;Z.src=k,Z.onerror=null}}),l.jsx("div",{className:"absolute top-3 left-3 flex flex-row gap-2.5 z-20",children:g.map((V,Z)=>l.jsxs("div",{className:"relative group/badge",children:[l.jsx("div",{className:"w-[34px] h-[34px] sm:w-[42px] sm:h-[42px] rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg",children:l.jsx("img",{src:V==null?void 0:V.image,alt:V==null?void 0:V.name,className:"w-[84%] h-[84%] object-contain text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"})}),l.jsx("div",{className:"absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-black text-[8px] font-black uppercase tracking-widest text-white rounded-md opacity-0 group-hover/badge:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none shadow-xl z-30",children:V==null?void 0:V.name})]},Z))})]}),l.jsxs("div",{className:"p-3 sm:p-3.5 flex flex-col flex-grow gap-2.5 text-left z-10",children:[l.jsxs("div",{children:[l.jsx("h3",{className:"m-0 text-xs sm:text-xs md:text-sm font-black text-white uppercase tracking-tight leading-snug group-hover:text-amber-400 transition-colors break-words line-clamp-1 pr-1",children:y}),l.jsxs("div",{className:"flex items-center gap-1.5 mt-1.5",children:[l.jsx("span",{className:"w-2 h-2 rounded-full shadow-lg",style:{backgroundColor:I[0],boxShadow:`0 0 8px ${I[0]}`}}),l.jsx("span",{className:"font-mono font-bold text-[9px] uppercase text-slate-400 tracking-wider",children:a.codigo})]})]}),l.jsxs("div",{className:"grid grid-cols-2 gap-1.5",children:[l.jsxs("div",{className:"bg-[#0b1325]/80 border border-white/[0.04] rounded-xl py-1 px-2 flex flex-col items-center justify-center hover:border-red-500/30 hover:bg-[#0b1325] transition-all",children:[l.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-slate-400",children:[l.jsx("img",{src:sr.vida,alt:"HP",className:"w-[14px] h-[14px] object-contain shrink-0"}),l.jsx("span",{className:"text-[8px] font-black uppercase tracking-wider leading-none",children:"HP"})]}),l.jsx("span",{className:"text-white font-mono font-black text-xs mt-1 tracking-tight leading-none truncate block select-all",children:a.vida})]}),l.jsxs("div",{className:"bg-[#0b1325]/80 border border-white/[0.04] rounded-xl py-1 px-2 flex flex-col items-center justify-center hover:border-sky-500/30 hover:bg-[#0b1325] transition-all",children:[l.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-slate-400",children:[l.jsx("img",{src:sr.velocidad,alt:"SPD",className:"w-[14px] h-[14px] object-contain shrink-0"}),l.jsx("span",{className:"text-[8px] font-black uppercase tracking-wider leading-none",children:"SPD"})]}),l.jsx("span",{className:"text-white font-mono font-black text-xs mt-1 tracking-tight leading-none truncate block select-all",children:a.velocidad})]}),l.jsxs("div",{className:"bg-[#0b1325]/80 border border-white/[0.04] rounded-xl py-1 px-2 flex flex-col items-center justify-center hover:border-amber-500/30 hover:bg-[#0b1325] transition-all relative",children:[l.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-slate-400",children:[l.jsx("img",{src:(b==null?void 0:b.icono)||a.tipoIcono,alt:"ATK 1",className:"w-[14px] h-[14px] object-contain shrink-0"}),l.jsx("span",{className:"text-[8px] font-black uppercase tracking-wider leading-none",children:"ATK 1"}),h&&l.jsx("span",{className:"text-[6px] text-amber-500 font-extrabold px-0.5 rounded bg-amber-500/10 border border-amber-500/20 leading-none",children:"x3"})]}),l.jsx("span",{className:`font-mono font-black text-xs mt-1 tracking-tight leading-none truncate block select-all ${h?"text-amber-400":"text-white"}`,children:G(b==null?void 0:b.valor)})]}),l.jsxs("div",{className:"bg-[#0b1325]/80 border border-white/[0.04] rounded-xl py-1 px-2 flex flex-col items-center justify-center hover:border-amber-500/30 hover:bg-[#0b1325] transition-all relative",children:[l.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-slate-400",children:[l.jsx("img",{src:(_==null?void 0:_.icono)||a.skinIcono,alt:"ATK 2",className:"w-[14px] h-[14px] object-contain shrink-0"}),l.jsx("span",{className:"text-[8px] font-black uppercase tracking-wider leading-none",children:"ATK 2"}),f&&l.jsx("span",{className:"text-[6px] text-amber-500 font-extrabold px-0.5 rounded bg-amber-500/10 border border-amber-500/20 leading-none",children:"x3"})]}),l.jsx("span",{className:`font-mono font-black text-xs mt-1 tracking-tight leading-none truncate block select-all ${f?"text-amber-400":"text-white"}`,children:G(_==null?void 0:_.valor)})]}),l.jsxs("div",{className:"col-span-2 bg-[#0b1325]/80 border border-white/[0.04] rounded-xl py-1 px-3 flex flex-col items-center justify-center hover:border-emerald-500/30 hover:bg-[#0b1325] transition-all",children:[l.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-slate-400",children:[l.jsx("img",{src:((X=a.habilidad)==null?void 0:X.icono)||"https://pokradex.org/MutantsGG/assets/ability_shield_big.png",alt:"DEF",className:"w-[14px] h-[14px] object-contain shrink-0"}),l.jsx("span",{className:"text-[8px] font-black uppercase tracking-wider leading-none",children:"DEF / HABILIDAD"})]}),l.jsx("span",{className:"text-white font-mono font-black text-xs mt-1 tracking-tight leading-none truncate block select-all",children:((z=a.habilidad)==null?void 0:z.valor)||"1,000"})]})]}),l.jsx("div",{className:"mt-auto pt-1",children:l.jsx("button",{onClick:p,className:`group/btn relative overflow-hidden w-full py-2.5 text-[10px] font-black uppercase tracking-[0.16em] transition-all flex items-center justify-center gap-2 border leading-none ${r?"bg-green-500/10 border-green-500/30 text-green-400":"bg-transparent border-white/[0.08] text-white hover:border-[var(--hover-color)] hover:bg-[var(--hover-bg)] active:scale-[0.98]"}`,style:{borderRadius:"100px","--hover-color":`${I[0]}50`,"--hover-bg":`${I[0]}12`},children:r?l.jsxs(l.Fragment,{children:[l.jsx(vi,{size:12,className:"shrink-0 text-green-400 animate-bounce"}),l.jsx("span",{children:s("mutant.verified")})]}):l.jsxs(l.Fragment,{children:[l.jsx(wu,{size:11,className:"group-hover/btn:scale-110 transition-transform shrink-0 opacity-80"}),l.jsx("span",{children:s("mutant.extract_code")})]})})})]})]})]})},ea=()=>{const{region:a,translate:s}=_t(),r=a!=="LATAM"&&a!=="PT"?"https://chat.whatsapp.com/IdBIvXWUPNjDLcPmBvkp1B":cd;return l.jsxs($t.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{duration:.4},className:"panel p-6 md:p-8 rounded-3xl bg-[#0c1222]/95 border border-white/10 shadow-2xl relative overflow-hidden group max-w-4xl mx-auto w-full my-6 flex flex-col md:flex-row md:items-center justify-between gap-6 text-left",children:[l.jsx("div",{className:"absolute inset-0 bg-[#25D366]/[0.02] pointer-events-none"}),l.jsxs("div",{className:"relative z-10 flex-1",children:[l.jsx("h3",{className:"text-xl md:text-2xl font-black text-white tracking-tight leading-tight m-0 mb-2",children:s("whatsapp.title")}),l.jsx("p",{className:"text-muted text-sm md:text-base leading-relaxed opacity-80 m-0 max-w-2xl",children:s("whatsapp.desc")})]}),l.jsx("div",{className:"relative z-10 shrink-0 w-full md:w-auto flex justify-start md:justify-end",children:l.jsxs("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-blue-brand hover:brightness-110 active:scale-[0.98] transition-all text-white font-black text-sm md:text-base shadow-lg shadow-blue-brand/20 hover:shadow-blue-brand/40 select-none w-full md:w-auto",children:[l.jsx(_r,{size:18,className:"shrink-0"}),l.jsx("span",{children:s("whatsapp.btn")})]})})]})},PA=`Robot
Weak Robot
Android
Goliath
Necrobot
Hypnos
Xenarach
Treacherous Humanoid
Mechanical Captain
Dezinger
Beetle Bot
Monocerus
Colossus
Libraro
Deus Machina
Virgon
Zombie
Weak Zombie
Jack O'Lantern
Zomborg
Devilish Doll
Lord Blood
Crypt Specter
Black Despot
Bone Captain
Necrodragon
Cancernia
Ghostnaut
Caprika
Neckbreaker
Baron Lundi
Gloomy Wizard
Warrior
Weak Warrior
Enforcer
Interceptrix
General Chaos
Warrior Banshee
Bushi
Nordic Knight
Buck Maurice
Honey Bunny
Sagitauro
Haggis
Wandering Martian
Galactic Guardian
Valkyrie
Thor
Beast
Reptoid
Arachno
Cerberus
Zombat
Cobrakai
Rakshasa
Leohart
Gargantus
Kaiju Kitty
Master Splitter
Parasite Queen
Cosmo Kong
Dracus Nobilis
Sorcerer Satyr
Alien
Annihilator
Sentry
Exofish
Tutti Gooey
Sirenia
Devourer
Sundance Bug
Behemoth
Xenos
Rockagen
Astro Surfer
Supernovus
Master Oida
Nebulon
Mr Marvelous
Aquapunzel
She-Devil
Snow Wizard
Techno Tao
Mekali
The Grim Reaper
Scorpion Prince
Anubis
Gandolphus
Captain Peace
Medusa
Horus
Ivory Hanzo
C'thlig
Azuria
Lord of the Abyss
Punishment
Oriax
Ragnar
Triple-B
Mandrake
Cursed Biker
Armadillo
Mantis Droid
Avenging Ram
Battle Toad
Cézanne
H.U.M.A.N.
Rambit
Star Trooper
Micky Krueger
Tauridus
Autonoraptor
Invadron
Evil Witch
Scary Bear
Azog
Geminium
Psycho Boar
Zena
Absolem
Wampara
Rockbeard
George Washington
Louis XVI
Bazzinger
Space Princess
Astro Wizard
Garuda
Machete Fairy
Genshiryoku
The Experiment
Leonidas
Buranka
Mexihcatl
Banker
Galactic Emperor
Nebulus
Project X27
Miroku
Mapach Wik
The Plumber
Ghost Hunter
Exo Cookie
Britany
Frostmass
Santactopus
Mephisto
Monolith
Malvatron
Lara
Commander Ender
Zortrex
Tengu
Bogeyman
Oculus
Supraman X
Cupid
Abraham Lincoln
Rhino Squad
Harpy Lady
Yelda
Flying Jordson
Cernunnos
Captain Black Pearl
Brick McGole
Kraken
Genimal
Hardcorius
Dead Marine
Challengeer
Cyberpunk
Neo Urban XIII
Technoforcer
Shadow Shaman
Engineer
Sun-Duke
Ceres
Shin Hakuho
Fenec Plus Ultra
Mother of Dragons
Brawler
Chainsaw Maniac
Monkey King
Acarius
Space Hunter
Sinister Artist
Zeus
Glubber
Nyrlatoth
Cybercroc
Bulldozer
Alligator Gar
Triceratank
Monk Akuso
Charon
Uncle Sam
Hog the Ripper
King Steven
Eva's Duplicate
Cyberslug
Jhingal
Doctor Blaw
Tomahawk
Sorceress
Dandy Oscar
Kung Chow
Grandma Eater
Mau-Jack
Lily
The King of Mimphys
Bio-Hedgehog
Gladiadog
Chaste
Viper
Dollbyte
Garlog
Krunk
Apofis
Raven
Drusella
Mandor
Squall
Saber
Artemis
Mama Kangoo
Darwin
ERR-ADI-K-Bot
Namaste
Tyrtiduron
Bounda
Mega Claus
Marv
Z-0
Falcon
Paramic
The Original
Dragon Lord
Carlingger
King of Insects
Crusher
Chimera
Barkshroom
Queen Rakkti
Hercules
Aran
El Gringo
Spartac
Amarok
Pikabú
Leprechaun
Phoenix
Kal Wayne
Diesel Wasp
Robo Fuerte
Rocky Botboa
The Fates
Dr. Frost
Captain Gluglu
Skeleton King
Mud Turbine
Ice John
Captain Patriot
Astro Gummy
Nezarim
Balloon Monkey
Starminator
Spectra
Wynn
Thrann
Blender
Rhinotaur
Cosmopandas
Kudamono
Alfie
Tyranozomb
H0ud1n1
FootBot
Geomega
Glutton
Seiyatsu
Asaylan
Wrath
Lady Liberty
Gozer
Van Helsing
Kitty Ranger
Gorthaur the Cruel
The Nameless King
Naraxis
Andromeda
Dwarf and Brain
Archangel
Devil
Drall
Noren
Sgt. Pandamonium
Omikami
Makino
Chantecler
Dr. Nucleus
Keymaster
Carcinus Gigas
Sanik
Necroparasite
Project 3V3
Optimus Zord
Black Jaws
Firestorm
Golemagnus
Dug Dario
Sentinel R0B-H4N
Big Bo$$
Queen Sylvidra
Quetzalcoatl
Majin Zam
Plague Witch
Excaliduro
Zigmo
Great Lord of the Tombs
Pyrotrope
Altaris
Captain Gorn
Yokozuna
Calaca
Lancelot
Centaurus
Mon-Key Crew
Sound Killah
Dracomago
Warlord Steam
Bounty Hunter
Space Surfer
Mister T-Ger
Master Paw
Grumpy Claus
Sergeant Dusk
Gwenn
The Collector
The Venom
Frankenhuahua
Mad Mike
Jane Saw
Horax
Master Shinzo
Xeleroth
Excavalipsis
The Undertaker
Zenguru
H.U.N.T.3.R
Arelvam
Tsar Bomb
Wizard Ryzafredd
Hawkeye
Megastral
Liquidator
Yggdrasil
Rox McRain
Hadeath
Divastator
Angry Pork
Frankendwarf
Akai-Bot
Krampus
Waryena
Bahamut
Mimi Timecurve
Men'ki Guard
Hippotank
Hephaestus
T-3rr0r
A027441
King Lulu
Kolossus
Kameo
ED-404
Hellsaw
Urgan
Buffalor
Gamallia
Gakarian
S-K-Venger
Overkill
Captain Ahab
Aubraea Mutantula
Bregbeam
Piwisher
Nimrod
E.T.-Liot
Spin Fury
Cooktouille
Orion
Heimdall
Chun-Lei
The Reef
Sir Bannog
Living Nightmare
An0malie
Owlock
TriAD
The Forgotten One
Singularity Wizard
Ishi no Ōkami
Dissent
Acheron
Drei, Space Corgi
Mix0-Logo
Veren Kaeesu
Spada
Roadmaster
Gerard Steelgarden
Chocolem
Drudge Zombie
Animus of Unreality
Midas
Caliburn EX
Santagonista
Barbarian
Lady of Twilight
Arachnid Mecha-Ovoid
Abyssal Terror
Oculys
Pierrot
Phileas Derocas
Dreadnought
Awakened Missy
Enviro 3.0
Gestalt Asteroid
X'astuth
Rabid Fang
Lantern Doctor
Leviathan
Sidereal Explorer
Howlsaur
Dream Protector
Basilisk and Snapdragon
Heir of the 5 Rings
Crossbowman
Ethereal Cybermancer
Lampyrion Solar
Dimentio
Generalissimo Chocoleon IV
Eternal Archivist
Ammonia Atlantica
Terracotta General
Great Tunnel Worm
Stellarian Lithominer
Captain Eagle
Octopia
Astral Doctor
Simurgh
Väinämöinen
Dysfunction Droid
Charon (Halloween)
Cabloid
Icy Exocelestial
Dark Cleric
D'Arathomis
Tenacity
Regulo&Juzya
Purulent Jelly
Vivaldi
Techno Snail
Burrow Sapper
Summoner
Lepidoptech
Bone Assembly
Sasquatch
Thanaconda
A00-C0R3-C0NTR0L
Son of the Storm
Craftdrone LLK-215
GAR, Sovereign Zombie
Soulgamas
Llama Sensei
Polaris
Myrmidus.exe
Boreal Helicoid
Dreaming Anthropobot
Anteros
Flayer Doctor
Oryctolagus Exobioicus
Cr€$u$
Asimov
Achernar
The Riot
Xinomas
Combat Simulacrum
Helidrone KxT-271
Reed, the True Hero
The Phosphorescent One
Tezcatlipoca
Scaramouche
Trickbetrayal
Astro Observer
Sawmetrodon
Capsulator MTZ-004
Seraphic Core
King of Avalon
K'yu T'ypaï
Friendship Without Limits
Sakuraboshi
Giganto-Moai
TCB-8566 Trafficroid
Bearsikk Sikleast
Captain Blackbeard
The Anarchist
Jurassic Terror
Frozen Emperor
Breakmaster
The Faded One
Azaronimo
Chronomancer Professor
Golem of Ages
The Crawling Madness
Hekatoncheiros
Atlas
Space Pilgrim
Celsius Thermodroid
Black I.C.E.
Prophet of Twilight
Beast Lord
Freyja, Queen of the Vanir
Most High Candelabrum
The Architect
Medinosaur
Beast of the Field
B.U.N. Genius
Gladiator
Hidrira
Supermassive Infinity
Automaton
Orbital Nexus
Emotional Masquerade
Wizard
Zagam, King of Greed
Bloodsquito
Don Gamberetti
Blue King
Plasma Specter
The Host
Vortex Traveler
D.A.B.
Mechargoyle
Ice Skater Yria
Telluric Smasher
Origamix
The Glitchy Heart
Spiraxia
Irradiance
The Hunger
Cosmic Dandy
Kereon of the Abyss
Apiarca
Platypus
`,FA=`Robot
Robot Faible
Androïde
Goliath
Necrobot
Hypnos
Xenarach
Humanoïde Perfide
Capitaine Mécano
Dezinger
Scarabobot
Monocerus
Colosse
Libraro
Deus Machina
Virgon
Zombie
Zombie Faible
Jack O'Lantern
Zomborg
Poupée Diabolique
Lord Blood
Spectre de la Crypte
Despote Noir
Capitaine Squelette
Nécrodragon
Cancernia
Fantômenaute
Cáprika
Brise-Nuque
Baron Lundi
Mage Lugubre
Guerrier
Guerrier Faible
Exécuteur
Interceptrix
Général Chaos
Banshee Guerrière
Bushi
Chevalier Nordique
Buck Maurice
Honey Bunny
Sagitauro
Haggis
Martien Errant
Gardien Galactique
Valkyrie
Thor
Bête
Reptoïde
Arachno
Cerbère
Zombat
Cobrakai
Rakshasa
Leohart
Gargantus
Kaiju Kitty
Maître Splitter
Reine Parasite
Cosmo Kong
Dracus Nobilis
Satyre Sorcier
Extraterrestre
Annihilateur
Sentry
Exopoisson
Tutti Visqueux
Sirenia
Dévoreur
Sundance Bug
Behemoth
Xenos
Rocagène
Astrosurfeur
Supernovus
Maître Oida
Nébulon
Mr Marvelous
Aquapunzel
Diablesse
Mage des Neiges
Techno Tao
Mekali
La Faucheuse
Prince Scorpion
Anubis
Gandolphus
Capitaine Paix
Medusa
Horus
Ivory Hanzo
C'thlig
Azuria
Seigneur des Abysses
Châtiment
Oriax
Ragnar
Triple-B
Mandragore
Motard Maudit
Tatou
Mantidroïde
Bélier Vengeur
Battle Toad
Cézanne
H.U.M.A.N.
Rambit
Star Trooper
Micky Krueger
Tauridus
Autonoraptor
Invadron
Sorcière Maléfique
Ours Effrayant
Azog
Geminium
Sanglier Psycho
Zena
Absolem
Wampara
Barberoche
George Washington
Louis XVI
Bazzinger
Space Princess
Astromage
Garuda
Fée Machette
Genshiryoku
L'Expérience
Leonidas
Buranka
Mexihcatl
Banker
Empereur Galactique
Nebulus
Project X27
Miroku
Mapach Wik
Le Plombier
Chasseur de Fantômes
Exo Cookie
Britany
Frostmass
Santactopus
Mephisto
Monolith
Malvatron
Lara
Commander Ender
Zortrex
Tengu
Croquemitaine
Oculus
Supraman X
Cupidon
Abraham Lincoln
Escouade Rhino
Dame Harpie
Yelda
Flying Jordson
Cernunnos
Capitaine Perle Noire
Brick McGole
Kraken
Genimal
Hardcorius
Marine Mort
Challengeer
Cyberpunk
Neo Urban XIII
Technoforcer
Chaman de l'Ombre
Ingénieur
Sun-Duke
Ceres
Shin Hakuho
Fenec Plus Ultra
Mère des Dragons
Brawler
Fou à la Tronçonneuse
Roi Singe
Acarius
Chasseur Spatial
Artiste Sinistre
Zeus
Glubber
Nyrlatoth
Cybercroc
Bulldozer
Poisson-Alligator
Tricératank
Moine Akuso
Charon
Oncle Sam
Hog the Ripper
Roi Steven
Double d'Eva
Cyberlimace
Jhingal
Doctor Blaw
Tomahawk
Sorcière
Dandy Oscar
Kung Chow
Mange-Grand-Mères
Mau-Jack
Lily
Le Roi de Mimphys
Bio-Hérisson
Gladiadog
Chaste
Viper
Dollbyte
Garlog
Krunk
Apofis
Corbeau
Drusella
Mandor
Bourrasque
Sabre
Artémis
Maman Kangou
Darwin
ERR-ADI-K-Bot
Namasté
Tyrtiduron
Bounda
Mega Claus
Marv
Z-0
Falcon
Paramic
L'Original
Seigneur Dragon
Carlingger
Roi des Insetges
Écraseur
Chimère
Champi-Écorce
Reine Rakkti
Hercule
Aran
El Gringo
Spartac
Amarok
Pikabú
Leprechaun
Phénix
Kal Wayne
Guêpe Diesel
Robo Fuerte
Rocky Botboa
Les Moires
Dr. Frost
Capitaine Glouglou
Roi Squelette
Turbeboue
Jean Glace
Capitaine Patriote
Astro Gummy
Nezarim
Singe-Ballon
Starminator
Spectra
Wynn
Thrann
Blender
Rhinotaure
Cosmopandas
Kudamono
Alfie
Tyranozomb
H0ud1n1
FootBot
Geomega
Glouton
Seiyatsu
Asaylan
Wrath
Lady Liberté
Gozer
Van Helsing
Kitty Ranger
Gorthaur le Cruel
Le Roi sans Nom
Naraxis
Andromède
Nain et Cerveau
Archange
Diable
Drall
Noren
Sgt. Pandamonium
Omikami
Makino
Chantecler
Dr. Nucleus
Maître des Clés
Carcinus Gigas
Sanik
Nécroparasite
Projet 3V3
Optimus Zord
Mâchoires Noires
Tempête de Feu
Golemagnus
Dug Dario
Sentinelle R0B-H4N
Big Bo$$
Reine Sylvidra
Quetzalcoatl
Majin Zam
Sorcière de la Peste
Excaliduro
Zigmo
Grand Seigneur des Tombes
Pyrotrope
Altaris
Capitaine Gorn
Yokozuna
Calaca
Lancelot
Centaurus
Mon-Key Crew
Sound Killah
Dracomago
Caudillo Steam
Chasseur de Primes
Surfeur de l'Espace
Mister T-Ger
Master Paw
Grumpy Claus
Sergent Dusk
Gwenn
Le Collectionneur
Le Venin
Frankenhuahua
Mad Mike
Jane Saw
Horax
Maître Shinzo
Xeleroth
Excavalipsis
Le Fossoyeur
Zenguru
H.U.N.T.3.R
Arelvam
Tsar Bomba
Mage Ryzafredd
Hawkeye
Megastral
Liquidateur
Yggdrasil
Rox McRain
Hadeath
Divastator
Angry Pork
Frankendwarf
Akai-Bot
Krampus
Waryena
Bahamut
Mimi Chronocourbe
Garde Men'ki
Hippotank
Héphaïstos
T-3rr0r
A027441
Roi Lulu
Kolossus
Kameo
ED-404
Hellsaw
Urgan
Buffalor
Gamallia
Gakarian
S-K-Venger
Overkill
Capitaine Achab
Aubraea Mutantula
Bregbeam
Piwisher
Nimrod
E.T.-Liot
Spin Fury
Cooktouille
Orion
Heimdall
Chun-Lei
The Reef
Sir Bannog
Cauchemar Vivant
An0malie
Owlock
TriAD
L'Oubliée
Mage de la Singularité
Ishi no Ōkami
Dissension
Achéron
Drei, Space Corgi
Mix0-Logo
Veren Kaeesu
Spada
Roadmaster
Gerard Steelgarden
Chocolem
Drudge Zombie
Animus d'Irréalité
Midas
Caliburn EX
Santagonista
Barbare
Dame du Crépuscule
Mécaovoïde Arachnéen
Terreur Abyssale
Oculys
Pierrot
Phileas Derocas
Dreadnought
Missy Éveillée
Enviro 3.0
Astéroïde Gestalt
X'astuth
Croc Enragé
Docteur de la Lanterne
Léviathan
Explorateur Sidéral
Hurlosaure
Protecteur des Rêves
Basilic et Muflier
Héritier des 5 Anneaux
Arbalétrier
Cybermancien Éthéré
Lampyrion Solar
Dimentio
Généralissime Chocoleon IV
Archiviste Éternel
Ammonia Atlantica
Général de Terre Cuite
Grand Ver des Tunnels
Lithomineur Stellarien
Capitaine Aigle
Octopie
Médecin Astral
Simurgh
Väinämöinen
Dysfonctiondroïde
Charon (Halloween)
Cabloïde
Exocéleste Glacial
Clerc Sombre
D'Arathomis
Tenacity
Regulo&Juzya
Gelée Purulente
Vivaldi
Techno-Escargot
Sapeur de Terriers
Invocateur
Lepidoptech
Ossassemblage
Sasquatch
Thanaconda
A00-C0R3-C0NTR0L
Fils de la Tempête
Bricodrone LLK-215
GAR, Zombie Souverain
Amalgalmes
Llama Sensei
Polaris
Myrmidus.exe
Hélicoïde Boréal
Antropobot Rêveur
Anteros
Docteur Écorcheur
Oryctolagus Exobioicus
Cr€$u$
Asimov
Achernar
L'Émeute
Xinomas
Simulacre de Combat
Hélidrone KxT-271
Reed, le Véritable Héros
Le Phosphorescent
Tezcatlipoca
Scaramouche
Trahison-Atout
Astro-Observateur
Sciemétrodon
Capsulateur MTZ-004
Noyau Séraphique
Roi d'Avalon
K'yu T'ypaï
Amitié Sans Limites
Sakuraboshi
Giganto-Moai
TCB-8566 Trafficroid
Bearsikk Sikleast
Capitaine Barbe-Noire
L'Anarchiste
Terreur Jurassique
Empereur Glacé
Breakmaster
Le Décoloré
Azaronimo
Professeur Chronomancien
Golem des Époques
La Folie Rampante
Hekatoncheiros
Atlas
Pèlerin Spatial
Thermodroïde Celsius
Black I.C.E.
Prophète du Crépuscule
Seigneur Bestial
Freyja, Reine des Vanir
Très-Haut Candélabre
L'Architecte
Médinosaure
Bête des Champs
B.U.N. Génie
Gladiateur
Hidrira
Infini Supermassif
Automate
Nexus Orbital
Mascarade Émotionnelle
Mage
Zagam, Roi de l'Avarice
Sangoustique
Don Gamberetti
Roi Bleu
Spectroplasma
Le Présentateur
Voyageur du Vortex
D.A.B.
Mécargouille
Patineuse sur Glace Yria
Fracasseur Tellurique
Origamix
Le Cœur Glitchy
Spiraxia
Irradiance
La Faim
Dandy Cosmique
Kereon des Abysses
Apiarca
Ornithorynque
`,KA=`Robot
Robô Fraco
Androide
Golias
Necrobot
Hypnos
Xenarach
Humanoide Pérfido
Capitão Mecânico
Dezinger
Escarabot
Monocerus
Colosso
Líbraro
Deus Machina
Virgon
Zumbi
Zumbi Fraco
Jack O'Lantern
Zomborg
Boneca Diabólica
Lord Blood
Espectro da Cripta
Déspota Negro
Capitão Ossada
Necrodragão
Cancernia
Fantasmonauta
Cáprika
Quebra-Pescoços
Barão Lundi
Mago Sombrio
Guerreiro
Guerreiro Fraco
Executor
Intercéptrix
General Caos
Banshee Guerreira
Bushi
Cavaleiro Nórdico
Buck Maurice
Honey Bunny
Sagitauro
Haggis
Marciano Errante
Guardião Galáctico
Valquíria
Thor
Besta
Reptoide
Aracno
Cérbero
Zombat
Cobrakái
Rakshasa
Leohart
Gargantus
Kaiju Kitty
Mestre Splitter
Rainha Parasita
Cosmo Kong
Dracus Nobilis
Sátiro Feiticeiro
Extraterrestre
Aniquilador
Sentry
Exopeixe
Tutti Viscosi
Sirenia
Devorador
Sundance Bug
Behemoth
Xenos
Rocágeno
Astrossurfista
Supernovus
Mestre Oida
Nébulon
Mr Marvelous
Aquapunzel
Diaba
Mago das Neves
Tecno Tao
Mekali
A Ceifadora
Príncipe Escorpião
Anubis
Gandolphus
Capitão Paz
Medusa
Horus
Ivory Hanzo
C'thlig
Azuria
Senhor do Abismo
Castigo
Oriax
Ragnar
Triple-B
Mandrágora
Motociclista Amaldiçoado
Armadilho
Mantidroide
Carneiro Vingador
Battle Toad
Cézanne
H.U.M.A.N.
Rambit
Star Trooper
Micky Krueger
Táuridus
Autonoraptor
Invadron
Bruxa Má
Urso Assustador
Azog
Geminium
Psicojavali
Zena
Absolem
Wampara
Barbarrocha
George Washington
Louis XVI
Bazzinger
Space Princess
Astromago
Garuda
Fada Machete
Genshiryoku
O Experimento
Leonidas
Buranka
Mexihcatl
Banker
Imperador Galáctico
Nebulus
Project X27
Miroku
Mapach Wik
O Encanador
Caça-Fantasmas
Exo Cookie
Britany
Frostmass
Santactopus
Mephisto
Monolith
Malvatron
Lara
Commander Ender
Zortrex
Tengu
Sacamantecas
Oculus
Supraman X
Cupido
Abraham Lincoln
Esquadrão Rhino
Dama Harpia
Yelda
Flying Jordson
Cernunnos
Capitão Pérola Negra
Brick McGole
Kraken
Genimal
Hardcorius
Fuzileiro Morto
Challengeer
Cyberpunk
Neo Urban XIII
Tecnoforzer
Xamã das Sombras
Engenheiro
Sun-Duke
Ceres
Shin Hakuho
Fenec Plus Ultra
Mãe dos Dragões
Brawler
Louco da Motosserra
Rei Macaco
Acarius
Caçador Espacial
Artista Sinistro
Zeus
Glubber
Nyrlatoth
Cybercroc
Bulldozer
Peixe-Jacaré
Triceratanque
Monge Akuso
Caronte
Tio Sam
Hog the Ripper
Rei Steven
Duplicata de Eva
Ciberlesma
Jhingal
Doctor Blaw
Tomahawk
Feiticeira
Dândi Óscar
Kung Chow
Come-Avós
Mau-Jack
Lily
O Rei de Mimphys
Bio-Ouriço
Gladiadog
Casto
Viper
Dollbyte
Garlog
Krunk
Apofis
Corvo
Drusella
Mandor
Borrasca
Sabre
Ártemis
Mamãe Kangú
Darwin
ERR-ADI-K-Bot
Namastê
Tyrtiduron
Bounda
Mega Claus
Marv
Z-0
Falcon
Paramic
O Original
Senhor Dragão
Carlingger
Rei dos Insetos
Esmagador
Quimera
 Cogumelo-Casca
Rainha Rakkti
Hércules
Aran
El Gringo
Spartac
Amarok
Pikabú
Leprechaun
Fênix
Kal Wayne
Vespa Diesel
Roboforte
Rocky Botboa
As Moiras
Dr. Frost
Capitão Gluglú
Rei Esqueleto
Turbalama
João Gelo
Capitão Patriota
Astro Gummy
Nezarim
Macaco-Balão
Starminator
Espectra
Wynn
Thrann
Blender
Rinotauro
Cosmopandas
Kudamono
Alfie
Tiranozomb
H0ud1n1
FootBot
Geomega
Glutão
Seiyatsu
Asaylan
Wrath
Lady Liberdade
Gozer
Van Helsing
Kitty Ranger
Gorthaur, o Cruel
O Rei sem Nome
Naraxis
Andrômeda
Anão e Cérebro
Arcanjo
Diabo
Drall
Noren
Sgt. Pandamonium
Omikami
Makino
Chantecler
Dr. Nucleus
Mestre das Chaves
Carcinus Gigas
Sanik
Necroparasita
Projeto 3V3
Optimus Zord
Mandíbulas Negras
Tempestade de Fogo
Golemagnus
Dug Dario
Sentinela R0B-H4N
Big Bo$$
Rainha Sylvidra
Quetzalcóatl
Majin Zam
Bruxa da Peste
Excaliduro
Zigmo
Grande Senhor das Tumbas
Pirótropo
Altaris
Capitão Gorn
Yokozuna
Calaca
Lancelot
Centaurus
Mon-Key Crew
Sound Killah
Dracomago
Caudilho Steam
Caçador de Recompensas
Surfista do Espaço
Mister T-Ger
Master Paw
Grumpy Claus
Sargento Dusk
Gwenn
O Colecionador
O Veneno
Frankenhuahua
Mad Mike
Jane Saw
Horax
Mestre Shinzo
Xeleroth
Excavalipsis
O Coveiro
Zenguru
H.U.N.T.3.R
Arelvam
Tsar Bomba
Mago Ryzafredd
Hawkeye
Megastral
Liquidificador
Yggdrasil
Rox McRain
Hadeath
Divastator
Angry Pork
Frankendwarf
Akai-Bot
Krampus
Waryena
Bahamut
Mimi Cronocurva
Guarda Men'ki
Hipotanque
Hefesto
T-3rr0r
A027441
Rei Lulu
Kolossus
Kameo
ED-404
Hellsaw
Urgan
Buffalor
Gamallia
Gakarian
S-K-Venger
Overkill
Capitão Ahab
Aubraea Mutantula
Bregbeam
Piwisher
Nimrod
E.T.-Liot
Spin Fury
Cooktouille
Órion
Heimdall
Chun-Lei
The Reef
Sir Bannog
Pesadelo Vivo
An0malie
Owlock
TriAD
A Esquecida
Mago da Singularidade
Ishi no Ōkami
Dissensão
Aqueronte
Drei, Space Corgi
Mix0-Logo
Veren Kaeesu
Spada
Roadmaster
Gerard Steelgarden
Chocolem
Drudge Zombie
Animus da Irrealidade
Midas
Caliburn EX
Santagonista
Bárbaro
Dama do Crepúsculo
Mecaovoide Aracnídeo
Terror Abissal
Oculys
Pierrot
Phileas Derocas
Dreadnought
Missy Desperta
Enviro 3.0
Asteroide Gestalt
X'astuth
Presa Raivosa
Doutor da Lanterna
Leviatã
Explorador Sideral
Uivossauro
Protetor dos Sonhos
Basilisco e Boca-de-Dragão
Herdeiro dos 5 Anéis
Besteiro
Cibermante Etéreo
Lampyrion Solar
Dimentio
Generalíssimo Chocoleão IV
Arquivista Eterno
Ammonia Atlantica
General de Terracota
Grande Verme dos Túneis
Litomineur Stellariano
Capitão Águia
Octópia
Médico Astral
Simurgh
Väinämöinen
Disfuncidroide
Caronte (Halloween)
Cabloide
Exoceleste Gélido
Clérigo Sombrio
D'Arathomis
Tenacity
Regulo&Juzya
Gelatina Purulente
Vivaldi
Tecnocaracol
Sapador de Tocas
Invocador
Lepidoptech
Ossomontagem
Sasquatch
Thanaconda
A00-C0R3-C0NTR0L
Filho da Tempestade
Bricodrone LLK-215
GAR, Zumbi Soberano
Amalgalmes
Llama Sensei
Polaris
Myrmidus.exe
Helicoide Boreal
Antropobot Sonhador
Anteros
Doutor Esfolador
Oryctolagus Exobioicus
Cr€$u$
Asimov
Achernar
O Motim
Xinomas
Simulacro de Combate
Helidrone KxT-271
Reed, o Verdadeiro Herói
O Fosforescente
Tezcatlipoca
Scaramouche
Traiciobaza
Astro-Observador
Serrametrodon
Capsuladora MTZ-004
Núcleo Seráfico
Rei de Avalon
K'yu T'ypaï
Amizade Sem Limites
Sakuraboshi
Giganto-Moai
TCB-8566 Trafficroid
Bearsikk Sikleast
Capitão Barba-Negra
A Anarquista
Terror Jurássico
Imperador Gelado
Breakmaster
O Desbotado
Azaronimo
Professor Cronomântico
Golem das Eras
A Loucura Rastejante
Hekatoncheiros
Atlas
Peregrino Espacial
Termodroide Celsius
Black I.C.E.
Profeta do Crepúsculo
Senhor Bestial
Freyja, Rainha dos Vanir
Altíssimo Candelabro
O Arquiteto
Medinossauro
Fera do Campo
B.U.N. Gênio
Gladiador
Hidrira
Infinito Supermassivo
Autômato
Nexo Orbital
Mascarada Emocional
Mago
Zagam, Rei da Ganância
Sanguesquito
Don Gamberetti
Rei Azul
Espectroplasma
O Apresentador
Viajante do Vórtice
D.A.B.
Mecárgula
Patinadora de Gelo Yria
Esmagador Telúrico
Origamix
O Coração Glitchy
Spiraxia
Irradiância
A Fome
Dândi Cósmico
Kereon do Abismo
Apiarca
Ornitorrinco
`,XA=`Robot
Schwacher Roboter
Android
Goliath
Necrobot
Hypnos
Xenarach
Heimtückischer Humanoid
Mechanischer Kapitän
Dezinger
Käferbot
Monocerus
Koloss
Libraro
Deus Machina
Virgon
Zombie
Schwacher Zombie
Jack O'Lantern
Zomborg
Teufelspuppe
Lord Blood
Krypta-Gespenst
Schwarzer Despot
Knochenkapitän
Nekrodrache
Cancernia
Geisterfahrer
Caprika
Genickbrecher
Baron Lundi
Düsterer Magier
Krieger
Schwacher Krieger
Vollstrecker
Interceptrix
General Chaos
Krieger-Banshee
Bushi
Nordischer Ritter
Buck Maurice
Honey Bunny
Sagitauro
Haggis
Wandernder Marsianer
Galaktischer Wächter
Walküre
Thor
Bestie
Reptoid
Arachno
Zerberus
Zombat
Cobrakai
Rakshasa
Leohart
Gargantus
Kaiju Kitty
Meister Splitter
Parasitenkönigin
Cosmo Kong
Dracus Nobilis
Zauberer-Satyr
Außerirdischer
Vernichter
Sentry
Exofisch
Tutti Klebrig
Sirenia
Verschlinger
Sundance Bug
Behemoth
Xenos
Felsagen
Astrosurfer
Supernovus
Meister Oida
Nebulon
Mr Marvelous
Aquapunzel
Teufelin
Schneemagier
Techno Tao
Mekali
Der Sensenmann
Skorpionprinz
Anubis
Gandolphus
Kapitän Frieden
Medusa
Horus
Ivory Hanzo
C'thlig
Azuria
Herr des Abgrunds
Strafe
Oriax
Ragnar
Triple-B
Alraune
Verfluchter Biker
Gürteltier
Mantidroide
Rächender Widder
Battle Toad
Cézanne
H.U.M.A.N.
Rambit
Star Trooper
Micky Krueger
Tauridus
Autonoraptor
Invadron
Böse Hexe
Schreckbär
Azog
Geminium
Psycho-Eber
Zena
Absolem
Wampara
Felsbart
George Washington
Louis XVI
Bazzinger
Space Princess
Astromagier
Garuda
Machetenfee
Genshiryoku
Das Experiment
Leonidas
Buranka
Mexihcatl
Banker
Galaktischer Kaiser
Nebulus
Project X27
Miroku
Mapach Wik
Der Klempner
Geisterjäger
Exo Cookie
Britany
Frostmass
Santactopus
Mephisto
Monolith
Malvatron
Lara
Commander Ender
Zortrex
Tengu
Butzemann
Oculus
Supraman X
Amor
Abraham Lincoln
Rhino-Trupp
Harpyien-Dame
Yelda
Flying Jordson
Cernunnos
Kapitän Schwarze Perle
Brick McGole
Kraken
Genimal
Hardcorius
Toter Marine
Challengeer
Cyberpunk
Neo Urban XIII
Technoforcer
Schatten-Schamane
Ingenieur
Sun-Duke
Ceres
Shin Hakuho
Fenec Plus Ultra
Mutter der Drachen
Brawler
Kettensägen-Verrückter
Affenkönig
Acarius
Weltraumjäger
Unheimlicher Künstler
Zeus
Glubber
Nyrlatoth
Cyberkrok
Bulldozer
Alligatorhecht
Triceratank
Mönch Akuso
Charon
Onkel Sam
Hog the Ripper
König Steven
Evas Duplikat
Cyberschnecke
Jhingal
Doctor Blaw
Tomahawk
Zauberin
Dandy Oscar
Kung Chow
Omafresser
Mau-Jack
Lily
Der König von Mimphys
Bio-Igel
Gladiadog
Keusch
Viper
Dollbyte
Garlog
Krunk
Apofis
Rabe
Drusella
Mandor
Sturmböe
Säbel
Artemis
Mama Kängu
Darwin
ERR-ADI-K-Bot
Namaste
Tyrtiduron
Bounda
Mega Claus
Marv
Z-0
Falcon
Paramic
Das Original
Drachenlord
Carlingger
König der Insekten
Zermalmer
Chimäre
Rindenpilz
Königin Rakkti
Herkules
Aran
El Gringo
Spartac
Amarok
Pikabú
Leprechaun
Phönix
Kal Wayne
Dieselwespe
Robo Fuerte
Rocky Botboa
Die Moiren
Dr. Frost
Kapitän Gluckgluck
Skelettkönig
Schlammturbine
Eis-Johann
Kapitän Patriot
Astro Gummy
Nezarim
Ballonaffe
Starminator
Spectra
Wynn
Thrann
Blender
Rhinotaurus
Cosmopandas
Kudamono
Alfie
Tyranozomb
H0ud1n1
FootBot
Geomega
Vielfraß
Seiyatsu
Asaylan
Wrath
Lady Freiheit
Gozer
Van Helsing
Kitty Ranger
Gorthaur der Grausame
Der Namenlose König
Naraxis
Andromeda
Zwerg und Gehirn
Erzengel
Teufel
Drall
Noren
Sgt. Pandamonium
Omikami
Makino
Chantecler
Dr. Nucleus
Schlüsselmeister
Carcinus Gigas
Sanik
Nekroparasit
Projekt 3V3
Optimus Zord
Schwarzmaul
Feuersturm
Golemagnus
Dug Dario
Wächter R0B-H4N
Big Bo$$
Königin Sylvidra
Quetzalcoatl
Majin Zam
Pesthexe
Excaliduro
Zigmo
Großer Herr der Gräber
Pyrotrop
Altaris
Kapitän Gorn
Yokozuna
Calaca
Lancelot
Centaurus
Mon-Key Crew
Sound Killah
Dracomago
Kriegsherr Steam
Kopfgeldjäger
Weltraumsurfer
Mister T-Ger
Master Paw
Grumpy Claus
Feldwebel Dusk
Gwenn
Der Sammler
Das Gift
Frankenhuahua
Mad Mike
Jane Saw
Horax
Meister Shinzo
Xeleroth
Excavalipsis
Der Totengräber
Zenguru
H.U.N.T.3.R
Arelvam
Zar-Bombe
Magier Ryzafredd
Hawkeye
Megastral
Liquidator
Yggdrasil
Rox McRain
Hadeath
Divastator
Angry Pork
Frankendwarf
Akai-Bot
Krampus
Waryena
Bahamut
Mimi Zeitkurve
Men'ki-Wache
Nilpferdpanzer
Hephaistos
T-3rr0r
A027441
König Lulu
Kolossus
Kameo
ED-404
Hellsaw
Urgan
Buffalor
Gamallia
Gakarian
S-K-Venger
Overkill
Kapitän Ahab
Aubraea Mutantula
Bregbeam
Piwisher
Nimrod
E.T.-Liot
Spin Fury
Cooktouille
Orion
Heimdall
Chun-Lei
The Reef
Sir Bannog
Lebender Albtraum
An0malie
Owlock
TriAD
Die Vergessene
Singularitätsmagier
Ishi no Ōkami
Zwietracht
Acheron
Drei, Space Corgi
Mix0-Logo
Veren Kaeesu
Spada
Roadmaster
Gerard Steelgarden
Chocolem
Drudge Zombie
Animus der Unwirklichkeit
Midas
Caliburn EX
Santagonista
Barbar
Dame der Dämmerung
Arachniden-Mechaovoid
Abgrundschrecken
Oculys
Pierrot
Phileas Derocas
Dreadnought
Erwachte Missy
Enviro 3.0
Gestalt-Asteroid
X'astuth
Tobender Fangzahn
Laternen-Doktor
Leviathan
Sternenforscher
Heulsaurier
Traumbeschützer
Basilisk und Löwenmäulchen
Erbe der 5 Ringe
Armbrustschütze
Ätherischer Cybermant
Lampyrion Solar
Dimentio
Generalissimus Chocoleon IV
Ewiger Archivar
Ammonia Atlantica
Terrakotta-General
Großer Tunnelwurm
Stellarischer Lithominer
Kapitän Adler
Oktopia
Astralarzt
Simurgh
Väinämöinen
Dysfunktionsdroide
Charon (Halloween)
Kabloid
Eisiger Exohimmlischer
Dunkler Kleriker
D'Arathomis
Tenacity
Regulo&Juzya
Eitriges Gelee
Vivaldi
Technoschnecke
Bautenpionier
Beschwörer
Lepidoptech
Knochenmontage
Sasquatch
Thanaconda
A00-C0R3-C0NTR0L
Sohn des Sturms
Basteldrohne LLK-215
GAR, Zombie-Herrscher
Seelenamalgam
Llama Sensei
Polaris
Myrmidus.exe
Boreales Helikoid
Träumender Anthropobot
Anteros
Schinder-Doktor
Oryctolagus Exobioicus
Cr€$u$
Asimov
Achernar
Der Aufstand
Xinomas
Kampfsimulakrum
Helidrohne KxT-271
Reed, der Wahre Held
Der Phosphoreszierende
Tezcatlipoca
Scaramouche
Verratsstich
Astrobeobachter
Sägemetrodon
Kapsulator MTZ-004
Seraphischer Kern
König von Avalon
K'yu T'ypaï
Freundschaft Ohne Grenzen
Sakuraboshi
Giganto-Moai
TCB-8566 Trafficroid
Bearsikk Sikleast
Kapitän Schwarzbart
Die Anarchistin
Jurassischer Schrecken
Eiskalter Kaiser
Breakmaster
Der Farblose
Azaronimo
Professor Chronomant
Golem der Zeitalter
Der Kriechende Wahnsinn
Hekatoncheiros
Atlas
Weltraumpilger
Celsius-Thermodroide
Black I.C.E.
Prophet der Dämmerung
Bestienlord
Freyja, Königin der Vanir
Höchster Kandelaber
Der Architekt
Medinosaurier
Feldbestie
B.U.N. Genie
Gladiator
Hidrira
Supermassive Unendlichkeit
Automat
Orbitaler Nexus
Emotionale Maskerade
Magier
Zagam, König der Gier
Blutmücke
Don Gamberetti
Blauer König
Plasmagespenst
Der Moderator
Vortexreisender
D.A.B.
Mecha-Gargoyle
Eisläuferin Yria
Tellurischer Zerschmetterer
Origamix
Das Glitchy-Herz
Spiraxia
Strahlkraft
Der Hunger
Kosmischer Dandy
Kereon des Abgrunds
Apiarca
Schnabeltier
`,vf={USD:PA.split(/\r?\n/).map(a=>a.trim()).filter(Boolean),FR:FA.split(/\r?\n/).map(a=>a.trim()).filter(Boolean),PT:KA.split(/\r?\n/).map(a=>a.trim()).filter(Boolean),DE:XA.split(/\r?\n/).map(a=>a.trim()).filter(Boolean)};function ZA(a,s,r){if(r==="LATAM"||!vf[r])return s;const o=parseInt(a,10)-1,d=vf[r];return d&&o>=0&&o<d.length?d[o]:s}const Mf={downloadable_instances:{LATAM:{title:"Instancias Virtuales",desc:"Se añadieron instancias virtuales optimizadas para descargar directa, completamente listas con Root y GameGuardian listos.",btn:"Ir a Descargas",badge:"NUEVO"},USD:{title:"Virtual Instances",desc:"Added pre-configured virtual game instances with Active Root and GameGuardian setup for direct download.",btn:"Go to Downloads",badge:"NEW"},PT:{title:"Instâncias Virtuais",desc:"Adicionadas instâncias virtuais pré-configuradas com Root e GameGuardian prontos para download direto.",btn:"Ir para Downloads",badge:"NOVO"},FR:{title:"Instances Virtuelles",desc:"Ajout d'instances virtuelles préconfigurées avec Root et GameGuardian pour téléchargement direct.",btn:"Téléchargements",badge:"NOUVEAU"},DE:{title:"Virtuelle Instanzen",desc:"Vorkonfigurierte virtuelle Instanzen mit Root und GameGuardian wurden zum direkten Download hinzugefügt.",btn:"Downloads",badge:"NEU"}},fixes_and_updates:{LATAM:{title:"Mejoras y Correcciones",desc:"Se actualizó la Guía, se arregló la visualización de la pestaña de novedades, y se solucionó el problema con el número '0' en la calculadora de EVO.",btn:"Explorar Guía",badge:"RESUELTO"},USD:{title:"Fixes & Updates",desc:"Updated the Guide, resolved the News page render issue, and fixed the persistent zero '0' input error inside the EVO calculator.",btn:"Explore Guide",badge:"FIXED"},PT:{title:"Melhorias e Correções",desc:"Guia de uso atualizado, corrigido o bug da aba de novidades e corrigido o problema do número zero na calculadora EVO.",btn:"Explorar Guia",badge:"RESOLVIDO"},FR:{title:"Corrections de Bug",desc:"Mise à jour du Guide de jeu, correction de l'onglet de nouveautés et résolution du bug du chiffre zéro sur le calculateur d'EVO.",btn:"Ouvrir le guide",badge:"CORRIGÉ"},DE:{title:"Korrekturen & Updates",desc:"Anleitung aktualisiert, News-Tab-Fehler behoben und das Problem mit der Zahl Null im EVO-Rechner beseitigt.",btn:"Anleitung ansehen",badge:"BEHOBEN"}}};function Af(){const{region:a,translate:s}=_t(),r=(C,P)=>{const K=a in Mf[C]?a:"USD";return Mf[C][K][P]},[o,d]=O.useState(""),[g,p]=O.useState([]),[b,_]=O.useState(!1),[h,f]=O.useState("code-az"),[G,k]=O.useState(!0),[y,M]=O.useState(30),[I,S]=O.useState(a);O.useEffect(()=>{S(a)},[a]);const N=O.useMemo(()=>Vr,[]),X=O.useMemo(()=>V2.split(/\r?\n/).map(C=>C.trim()).filter(Boolean).length,[]),z="text-blue-brand-2",V=O.useMemo(()=>{const C=o.toLowerCase(),P=N.map(K=>{const Y=ZA(K.id,K.nombre,I);return{...K,nombre:Y}}).filter(K=>{const Y=C===""||K.nombre.toLowerCase().includes(C)||K.codigo.toLowerCase().includes(C),ie=g.length===0||(g.length===1?K.genes.includes(g[0]):K.genes[0]===g[0]&&K.genes[1]===g[1]),pe=!b||K.genes.length===1||K.genes.length===2&&K.genes[0]===K.genes[1];return Y&&ie&&pe});return P.sort((K,Y)=>{var ie,pe,Ue,qe,Ne,R;return h==="name-az"?K.nombre.localeCompare(Y.nombre):h==="name-za"?Y.nombre.localeCompare(K.nombre):h==="code-az"?K.codigo.localeCompare(Y.codigo,void 0,{numeric:!0,sensitivity:"base"}):h==="code-za"?Y.codigo.localeCompare(K.codigo,void 0,{numeric:!0,sensitivity:"base"}):h==="hp-desc"?(((ie=Y.stats)==null?void 0:ie.hp)||0)-(((pe=K.stats)==null?void 0:pe.hp)||0):h==="atk-desc"?(((Ue=Y.stats)==null?void 0:Ue.atk)||0)-(((qe=K.stats)==null?void 0:qe.atk)||0):h==="spd-desc"?(((Ne=Y.stats)==null?void 0:Ne.spd)||0)-(((R=K.stats)==null?void 0:R.spd)||0):Y.codigo.localeCompare(K.codigo,void 0,{numeric:!0,sensitivity:"base"})}),P},[N,o,g,h,b,I]),Z=O.useMemo(()=>V.slice(0,y),[V,y]),H=C=>{M(30),p(P=>{const K=P.filter(Y=>Y===C).length;return K>0?K===2?P.filter(Y=>Y!==C):P.length===1?[C,C]:P.filter(Y=>Y!==C):P.length<2?[...P,C]:[P[1],C]})};return l.jsxs("div",{className:"flex flex-col gap-8 pb-20",children:[l.jsxs("section",{className:"relative hero !p-8 md:!p-20 overflow-hidden rounded-3xl",children:[l.jsx("div",{className:"absolute inset-0 opacity-10 bg-grid-slate-900/[0.1] pointer-events-none"}),l.jsx("div",{className:"absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-brand/20 to-transparent -rotate-12 transform translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none"}),l.jsxs("div",{className:"relative z-10",children:[l.jsxs("div",{className:"eyebrow bg-white/5 border-white/10 px-4 py-1 rounded-full inline-flex items-center gap-2 mb-6 backdrop-blur-md",children:[l.jsx(Qh,{size:14,className:"text-blue-brand-2"}),l.jsx("span",{className:"text-[10px] font-black uppercase tracking-[0.2em]",children:s("home.main_database")})]}),l.jsxs("h1",{className:"text-4xl md:text-8xl lg:text-9xl font-black mt-4 mb-6 uppercase tracking-tighter leading-[0.8] md:leading-[0.85] text-white",children:["MUTANTS ",l.jsx("br",{}),l.jsxs("span",{className:"text-blue-brand relative",children:["GLADIATORS",l.jsx("span",{className:"absolute -bottom-2 left-0 w-full h-1 bg-white/10 rounded-full"})]})]}),l.jsx("p",{className:"text-slate-400 text-sm md:text-lg max-w-2xl mx-auto md:mx-0 opacity-90 leading-relaxed font-medium",children:s("home.main_desc")})]})]}),l.jsx(ea,{}),l.jsxs("section",{className:"panel flex flex-col gap-8 !p-6 md:!p-8 border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent rounded-3xl relative overflow-hidden group",children:[l.jsx("div",{className:"absolute top-0 left-0 w-1 h-full bg-blue-brand"}),l.jsx("div",{className:"flex items-center justify-between relative z-10 text-left",children:l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx(Pf,{size:20,className:"text-blue-brand-2"}),l.jsx("h2",{className:"text-xl md:text-2xl font-black uppercase tracking-tighter m-0 text-white",children:s("home.featured_mutants")})]})}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 text-left",children:[l.jsxs("div",{className:"flex flex-col justify-between p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 relative group/card",children:[l.jsx("div",{className:"absolute top-3 right-3 bg-blue-brand/20 text-blue-brand-2 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider animate-pulse",children:r("downloadable_instances","badge")}),l.jsxs("div",{children:[l.jsx("div",{className:"w-10 h-10 rounded-xl bg-blue-brand/10 flex items-center justify-center text-blue-brand-2 border border-blue-brand/20 mb-4 group-hover/card:scale-110 transition-transform",children:l.jsx(ld,{size:20})}),l.jsx("h3",{className:"text-base font-black uppercase tracking-tight text-white mb-2",children:r("downloadable_instances","title")}),l.jsx("p",{className:"text-slate-400 text-xs font-semibold leading-relaxed m-0 mb-6",children:r("downloadable_instances","desc")})]}),l.jsxs("button",{onClick:()=>{window.location.hash="/descargas",window.scrollTo({top:0,behavior:"smooth"})},className:"w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-blue-brand hover:bg-blue-brand-2 text-white text-xs font-black uppercase tracking-wider transition-all cursor-pointer active:scale-95 text-center font-bold",children:[l.jsx("span",{children:r("downloadable_instances","btn")}),l.jsx(Eu,{size:14})]})]}),l.jsxs("div",{className:"flex flex-col justify-between p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 relative group/card",children:[l.jsx("div",{className:"absolute top-3 right-3 bg-emerald-500/20 text-emerald-400 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider",children:r("fixes_and_updates","badge")}),l.jsxs("div",{children:[l.jsx("div",{className:"w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 mb-4 group-hover/card:scale-110 transition-transform",children:l.jsx(Wh,{size:20})}),l.jsx("h3",{className:"text-base font-black uppercase tracking-tight text-white mb-2",children:r("fixes_and_updates","title")}),l.jsx("p",{className:"text-slate-400 text-xs font-semibold leading-relaxed m-0 mb-6 font-medium",children:r("fixes_and_updates","desc")})]}),l.jsxs("button",{onClick:()=>{window.location.hash="/guia",window.scrollTo({top:0,behavior:"smooth"})},className:"w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-black uppercase tracking-wider transition-all cursor-pointer active:scale-95 text-center font-bold border border-emerald-500/10",children:[l.jsx("span",{children:r("fixes_and_updates","btn")}),l.jsx(Eu,{size:14})]})]})]})]}),l.jsxs("section",{className:"flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-[2.5rem] border border-white/10 bg-[#0a1224]/50 backdrop-blur-2xl relative overflow-hidden",children:[l.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-grid-slate-900/[0.05] pointer-events-none"}),l.jsx("div",{className:"flex flex-col gap-4 relative z-10 w-full md:max-w-[60%]",children:l.jsxs("div",{className:"flex items-center gap-6",children:[l.jsxs("div",{className:"relative group/avatar",children:[l.jsx("div",{className:"absolute inset-0 bg-blue-brand blur-xl opacity-20 group-hover:opacity-40 transition-opacity"}),l.jsx("img",{src:"https://github.com/luqueSmith/MGG/blob/main/img/perfil.png?raw=true",alt:"Smith Luque",className:"w-20 h-20 md:w-24 md:h-24 rounded-[2rem] border-4 border-white/10 shadow-2xl relative z-10 object-cover group-hover:rotate-3 transition-transform"}),l.jsx("div",{className:"absolute -bottom-1 -right-1 w-6 h-6 bg-green-brand border-4 border-[#050a14] rounded-full z-20"})]}),l.jsxs("div",{className:"text-left",children:[l.jsx("h3",{className:"m-0 text-2xl font-black text-white uppercase tracking-tighter",children:"Smith Luque"}),l.jsxs("div",{className:"flex flex-col gap-1",children:[l.jsx("p",{className:"text-blue-brand-2 text-xs m-0 font-black uppercase tracking-widest leading-none",children:s("profile.developer")}),l.jsx("div",{className:"px-2 py-0.5 rounded bg-white/5 border border-white/5 inline-flex self-start",children:l.jsx("span",{className:"text-[8px] font-bold text-muted uppercase tracking-[0.2em]",children:s("profile.founder")})})]})]})]})}),l.jsxs("div",{className:"flex gap-8 items-center px-8 w-full md:w-auto border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 relative z-10",children:[l.jsxs("div",{className:"flex-1 md:flex-none",children:[l.jsx("span",{className:"block text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-2",children:s("home.filtered")}),l.jsxs("div",{className:"flex items-baseline gap-1",children:[l.jsx("strong",{className:"text-4xl font-black text-blue-brand-2 leading-none",children:V.length}),l.jsx("span",{className:"text-xs font-bold text-white/20 uppercase tracking-widest",children:s("home.active")})]})]}),l.jsxs("div",{className:"flex-1 md:flex-none",children:[l.jsx("span",{className:"block text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-2",children:s("home.total_base")}),l.jsxs("div",{className:"flex items-baseline gap-1",children:[l.jsx("strong",{className:"text-4xl font-black text-white/50 leading-none",children:X}),l.jsx("span",{className:"text-xs font-bold text-muted/20 uppercase tracking-widest",children:s("home.total")})]})]})]})]}),l.jsxs("section",{id:"explore-catalog",className:"panel flex flex-col gap-6 !p-6 md:!p-8 border border-white/10 relative overflow-hidden group",children:[l.jsx("div",{className:"absolute inset-0 opacity-5 pointer-events-none bg-grid-slate-900/[0.1] bg-[bottom_1px_center] [mask-image:linear-gradient(to_bottom,white,transparent)]"}),l.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"w-1.5 h-6 bg-blue-brand rounded-full"}),l.jsx("h2",{className:"text-xl md:text-2xl font-black uppercase tracking-tighter m-0",children:s("home.explore_catalog")})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("div",{className:"px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-bold text-muted uppercase tracking-widest leading-none",children:"Control Panel v2.0"}),(g.length>0||b)&&l.jsx("button",{onClick:()=>{p([]),_(!1)},className:"text-[10px] uppercase font-black text-white bg-red-brand/40 px-3 py-1 rounded-full hover:bg-red-brand transition-all active:scale-95 shadow-lg shadow-red-brand/20",children:s("home.reset_engine")})]})]}),l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10",children:[l.jsx("div",{className:"lg:col-span-8 flex flex-col gap-6",children:l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Jh,{size:14,className:z}),l.jsx("span",{className:"text-[11px] uppercase font-black tracking-[0.2em] opacity-60",children:s("home.genetic_config")})]}),l.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3",children:xr.map(C=>{const P=g.filter(Y=>Y===C.id).length,K=P>0;return g.indexOf(C.id),l.jsxs("button",{onClick:()=>H(C.id),className:`flex items-center gap-3 p-3 rounded-xl border-2 transition-all relative group/gene overflow-hidden ${K?"bg-blue-brand/20 border-blue-brand text-white shadow-[0_0_20px_rgba(37,99,235,0.2)]":"bg-white/[0.02] border-white/10 text-slate-400 hover:border-white/30 hover:bg-white/[0.05]"}`,children:[l.jsx("div",{className:`p-1.5 rounded-lg transition-all ${K?"bg-blue-brand shadow-lg":"bg-white/5 group-hover/gene:scale-110"}`,children:l.jsx("img",{src:C.image,alt:"",className:`w-6 h-6 object-contain ${K?"brightness-125":"grayscale opacity-50"}`})}),l.jsxs("div",{className:"flex flex-col items-start",children:[l.jsx("span",{className:"text-[11px] font-black uppercase tracking-tight line-clamp-1",children:C.name}),l.jsx("span",{className:"text-[8px] font-bold opacity-40 uppercase tracking-widest",children:s(K?P===2?"gene.dominant":"gene.active":"gene.inactive")})]}),K&&l.jsx("div",{className:"absolute top-1 right-1 flex gap-0.5",children:[...Array(P)].map((Y,ie)=>l.jsx("div",{className:"w-1 h-3 bg-blue-brand-2 rounded-full"},ie))})]},C.id)})})]})}),l.jsxs("div",{className:"lg:col-span-4 flex flex-col gap-6 lg:border-l lg:border-white/10 lg:pl-8",children:[l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(fr,{size:14,className:z}),l.jsx("span",{className:"text-[11px] uppercase font-black tracking-[0.2em] opacity-60",children:s("home.search_engine")})]}),l.jsxs("div",{className:"relative group/search",children:[l.jsx("input",{value:o,onChange:C=>{d(C.target.value),M(30)},placeholder:s("home.search_placeholder"),className:"w-full bg-white/[0.04] border-2 border-white/10 rounded-2xl pl-4 pr-12 py-4 text-sm font-bold placeholder:text-white/20 outline-none focus:border-blue-brand/50 transition-all focus:bg-white/[0.06] focus:shadow-2xl focus:shadow-blue-brand/5"}),l.jsx("div",{className:"absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-white/5 text-white/40",children:l.jsx(fr,{size:16})})]})]}),l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Wh,{size:14,className:z}),l.jsx("span",{className:"text-[11px] uppercase font-black tracking-[0.2em] opacity-60",children:s("home.sort_filters")})]}),l.jsxs("div",{className:"flex flex-col gap-3",children:[l.jsxs("div",{className:"relative group/sort",children:[l.jsxs("select",{value:h,onChange:C=>{f(C.target.value),M(30)},className:"w-full bg-white/[0.04] border-2 border-white/10 rounded-2xl px-5 py-4 text-xs font-black uppercase tracking-widest outline-none text-white focus:border-blue-brand/50 cursor-pointer appearance-none focus:bg-white/[0.06]",children:[l.jsx("option",{value:"name-az",className:"bg-[#0a1224]",children:s("home.sort_az")}),l.jsx("option",{value:"name-za",className:"bg-[#0a1224]",children:s("home.sort_za")}),l.jsx("option",{value:"code-az",className:"bg-[#0a1224]",children:s("home.sort_code_asc")}),l.jsx("option",{value:"code-za",className:"bg-[#0a1224]",children:s("home.sort_code_desc")}),l.jsx("option",{value:"hp-desc",className:"bg-[#0a1224]",children:s("home.sort_hp_desc")}),l.jsx("option",{value:"atk-desc",className:"bg-[#0a1224]",children:s("home.sort_atk_desc")}),l.jsx("option",{value:"spd-desc",className:"bg-[#0a1224]",children:s("home.sort_spd_desc")})]}),l.jsx(Vu,{size:16,className:"absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-40"})]}),l.jsxs("div",{id:"names-language-selector",className:"space-y-1.5 text-left mt-1 scroll-mt-24",children:[l.jsxs("div",{className:"flex items-center gap-2 opacity-60 pl-1",children:[l.jsx(ZG,{size:11,className:z}),l.jsx("span",{className:"text-[9px] uppercase font-black tracking-widest",children:s("home.names_language")})]}),l.jsxs("div",{className:"relative group/names-lang",children:[l.jsxs("select",{value:I,onChange:C=>{S(C.target.value),M(30)},className:"w-full bg-white/[0.04] border-2 border-white/10 rounded-2xl px-5 py-3.5 text-xs font-black uppercase tracking-widest outline-none text-white focus:border-blue-brand/50 cursor-pointer appearance-none focus:bg-white/[0.06]",children:[l.jsx("option",{value:"LATAM",className:"bg-[#0a1224]",children:"Español (LATAM)"}),l.jsx("option",{value:"USD",className:"bg-[#0a1224]",children:"English (USD)"}),l.jsx("option",{value:"PT",className:"bg-[#0a1224]",children:"Português (PT)"}),l.jsx("option",{value:"FR",className:"bg-[#0a1224]",children:"Français (FR)"}),l.jsx("option",{value:"DE",className:"bg-[#0a1224]",children:"Deutsch (DE)"})]}),l.jsx(Vu,{size:16,className:"absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-40"})]})]}),l.jsxs("button",{className:`group relative overflow-hidden w-full py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 border-2 ${b?"bg-blue-brand/20 border-blue-brand text-blue-brand-2":"bg-white/5 border-white/10 text-white/40 hover:border-white/20"}`,onClick:()=>_(!b),children:[l.jsx(Qh,{size:14,className:`${b?"animate-pulse":""}`}),s("home.single_gene_only")]}),l.jsxs("button",{className:`group relative overflow-hidden w-full py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 border-2 ${G?"bg-blue-brand/10 border-blue-brand/30 text-blue-brand-2":"bg-white/5 border-white/10 text-white/40 hover:border-white/20"}`,onClick:()=>k(!G),children:[l.jsx(Jh,{size:14,className:`${G?"animate-pulse":""}`}),s(G?"home.hide":"home.show")]})]})]})]})]})]}),l.jsx("section",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4",children:G?V.length>0?l.jsxs(l.Fragment,{children:[Z.map((C,P)=>l.jsx(UA,{mutant:C},P)),y<V.length&&l.jsx("div",{className:"col-span-full py-8 flex justify-center",children:l.jsx("button",{onClick:()=>M(C=>C+30),className:"px-8 py-3 bg-blue-brand/10 border-2 border-blue-brand/30 rounded-2xl text-blue-brand-2 font-black uppercase tracking-widest hover:bg-blue-brand/20 transition-all active:scale-95",children:s("home.load_more_rem",{rem:V.length-y})})})]}):l.jsx("div",{className:"col-span-full py-12 text-center text-muted border border-line rounded-2xl bg-panel",children:s("home.no_results")}):l.jsx("div",{className:"col-span-full py-12 text-center text-muted border border-line rounded-2xl bg-panel",children:s("home.hidden_results")})})]})}const YA="https://www.pokradex.org/feeds/posts/default?alt=json-in-script&max-results=8";function QA(a){if(!a)return"Reciente";const s=new Date(a);return Number.isNaN(s.getTime())?a:s.toLocaleDateString("es-PE",{year:"numeric",month:"short",day:"numeric"})}function JA(a){return String(a||"").replace(/<script[\s\S]*?<\/script>/gi,"").replace(/<style[\s\S]*?<\/style>/gi,"").replace(/<[^>]+>/g," ").replace(/&nbsp;/gi," ").replace(/&amp;/gi,"&").replace(/\s+/g," ").trim()}function WA(a){const s=String(a||"").match(/<img[^>]+src="([^"]+)"/i);return s?s[1]:""}function $A(a){var b,_,h,f,G,k;const s=((b=a.title)==null?void 0:b.$t)||a.title||"Sin título",r=((_=a.published)==null?void 0:_.$t)||a.published||"",o=((h=a.content)==null?void 0:h.$t)||a.content||((f=a.summary)==null?void 0:f.$t)||a.summary||"",d=Array.isArray(a.link)?((G=a.link.find(y=>y.rel==="alternate"))==null?void 0:G.href)||((k=a.link[0])==null?void 0:k.href)||"#":a.url||a.href||"#",g=WA(o)||a.image||"",p=JA(o);return{title:s,published:r,dateLabel:QA(r),excerpt:p.slice(0,220)+(p.length>220?"…":""),excerptFull:p,rawText:p,link:d,image:g}}function eT(a){const s=String(a||"").replace(/\s+/g," ").trim();if(!s)return[];const r=["ANUNCIOS:","OFERTAS:","MINI EVENTO:","CRONOLOGIA:"],o=[];for(let d=0;d<r.length;d++){const g=r[d],p=s.indexOf(g);if(p===-1)continue;let b=s.length;for(let h=d+1;h<r.length;h++){const f=s.indexOf(r[h],p+g.length);if(f!==-1){b=f;break}}const _=s.slice(p+g.length,b).trim();_&&o.push({title:g.replace(":",""),body:_.length>320?_.slice(0,320)+"…":_})}return o.length||o.push({title:"Resumen",body:s.length>420?s.slice(0,420)+"…":s}),o.slice(0,4)}function tT(){const{region:a,translate:s}=_t(),r=a==="USD",[o,d]=O.useState([]),[g,p]=O.useState(!0),[b,_]=O.useState(!1);return O.useEffect(()=>{let h=null;const f=`mggFeedCallback_${Date.now()}`,G=()=>{h&&h.parentNode&&h.parentNode.removeChild(h);try{window[f]=void 0}catch{}};return window[f]=k=>{var y;G();try{const I=(((y=k==null?void 0:k.feed)==null?void 0:y.entry)||[]).map($A);d(I),p(!1)}catch{_(!0),p(!1)}},h=document.createElement("script"),h.src=`${YA}&callback=${f}`,h.onerror=()=>{G(),_(!0),p(!1)},document.body.appendChild(h),G},[]),l.jsxs("div",{className:"flex flex-col gap-6",children:[l.jsxs("section",{className:"hero transition-all duration-700 !p-6 md:!p-12 relative overflow-hidden bg-gradient-to-br from-blue-brand/10 via-blue-brand-2/5 to-transparent border-blue-brand-2/20 shadow-blue-brand-2/5",children:[l.jsxs("div",{className:"eyebrow scale-90 md:scale-100",children:[l.jsx(rd,{size:14,className:"text-blue-brand-2"}),l.jsx("span",{children:r?"News Feed":"Portal informativo"})]}),l.jsxs("h1",{className:"text-3xl md:text-6xl font-black mt-4 mb-4 uppercase tracking-tighter leading-[0.9] md:leading-[0.95] text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-brand-2/80 to-blue-brand-2",children:[r?"NEWS":"NOVEDADES"," ",l.jsx("span",{className:"text-blue-brand-2 block",children:"MUTODEX"})]}),l.jsx("p",{className:"text-muted text-sm md:text-base max-w-2xl mx-auto px-4 opacity-80",children:r?"Latest news delivered directly from the official Mutodex blog.":"Noticias actualizadas directamente desde el blog oficial de Mutodex."})]}),l.jsx(ea,{}),l.jsxs("div",{className:"grid lg:grid-cols-[1fr_350px] gap-6 items-start",children:[l.jsx("section",{className:"flex flex-col gap-5 order-2 lg:order-1",children:g?l.jsx("div",{className:"panel text-center py-12 text-muted bg-blue-brand/5 border-blue-brand/20",children:r?"Loading posts...":"Cargando publicaciones…"}):b?l.jsx("div",{className:"panel text-center py-12 text-muted bg-blue-brand/5 border-blue-brand/20",children:r?"Could not load posts at this moment.":"No se pudieron cargar las publicaciones en este momento."}):o.length===0?l.jsx("div",{className:"panel text-center py-12 text-muted bg-blue-brand/5 border-blue-brand/20",children:r?"No posts found.":"No se encontraron publicaciones."}):o.map((h,f)=>{const G=eT(h.excerptFull||h.rawText||h.excerpt||"");return l.jsxs("article",{className:"panel p-0 overflow-hidden flex flex-col group transition-all duration-300 border-white/10 hover:border-blue-brand-2/30 shadow-lg hover:shadow-blue-brand-2/[0.04]",children:[l.jsxs("div",{className:"p-5 md:p-7 pb-0",children:[l.jsxs("div",{className:"flex items-center gap-2 font-mono font-bold text-[10px] uppercase tracking-widest mb-3 text-blue-brand-2",children:[l.jsx(AG,{size:12}),h.dateLabel]}),l.jsx("h2",{className:"m-0 text-xl md:text-3xl font-bold leading-tight tracking-tight",children:l.jsx("a",{href:h.link,target:"_blank",rel:"noopener noreferrer",className:"transition-colors hover:text-blue-brand-2",children:h.title})})]}),h.image&&l.jsx("div",{className:"px-5 md:px-7 mt-5",children:l.jsx("div",{className:"relative aspect-[16/8] overflow-hidden rounded-xl border border-white/10",children:l.jsx("img",{className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",src:h.image,alt:h.title,loading:"lazy",referrerPolicy:"no-referrer"})})}),l.jsx("div",{className:"p-5 md:p-7 pt-5 grid gap-4",children:G.map((k,y)=>l.jsxs("div",{className:"border-l-2 pl-4 py-1 border-blue-brand/30",children:[l.jsx("h3",{className:"m-0 mb-1.5 text-[11px] md:text-xs uppercase tracking-widest font-black text-white/90",children:k.title}),l.jsx("p",{className:"m-0 text-muted text-sm md:text-base leading-relaxed opacity-90",children:k.body})]},y))}),l.jsx("div",{className:"p-5 md:p-7 pt-0 mt-auto",children:l.jsxs("a",{className:"btn btn-primary w-full md:w-auto transition-all",target:"_blank",rel:"noopener noreferrer",href:h.link,children:[l.jsx(Yn,{size:16}),l.jsx("span",{children:r?"Read on Mutodex":"Leer en Mutodex"})]})})]},f)})}),l.jsxs("aside",{className:"flex flex-col gap-6 order-1 lg:order-2",children:[l.jsxs("section",{className:"panel !p-5 flex flex-col gap-4 border border-white/5 bg-blue-brand/2",children:[l.jsxs("div",{className:"kv-label text-[10px] opacity-60 flex items-center gap-2",children:[l.jsx(e2,{size:12}),r?"Quick Access":"Acceso Rápido"]}),l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2",children:[{name:r?"Official Mutant List":"Lista oficial: mutantes",url:"https://mutodex.blogspot.com/p/lista-oficial-mutantes.html"},{name:r?"Secret Breeding":"Hibridaciones secretas",url:"https://mutodex.blogspot.com/p/hibridaciones-secretas.html"},{name:r?"Attack/HP Orbs":"Orbes de ataque/hp",url:"https://mutodex.blogspot.com/p/orbes.html"},{name:r?"EVO Discount":"Descuento de EVO",url:"https://mutodex.blogspot.com/p/descuento-de-evo.html"},{name:r?"Stats Calculator":"Calculadora stats",url:"https://mutodex.blogspot.com/p/calculadora-de-stats.html"}].map((h,f)=>l.jsxs("a",{className:"flex items-center justify-between p-3 rounded-xl bg-white/3 border border-line text-xs font-medium hover:border-blue-brand-2/50 hover:bg-blue-brand-2/10 transition-all duration-300",target:"_blank",rel:"noopener noreferrer",href:h.url,children:[h.name,l.jsx(Yn,{size:12,className:"opacity-40"})]},f))})]}),l.jsxs("section",{className:"panel !p-5 flex flex-col gap-4 border border-white/5 bg-blue-brand/2",children:[l.jsx("div",{className:"kv-label text-[10px] opacity-60",children:r?"Blog Entries":"Entradas de Blog"}),l.jsx("div",{className:"flex flex-col gap-2",children:g?l.jsx("div",{className:"text-muted text-xs animate-pulse",children:r?"Synchronizing...":"Sincronizando..."}):o.slice(0,6).map((h,f)=>l.jsxs("a",{className:"block p-3 rounded-xl bg-white/3 border border-line transition-all duration-300 hover:border-blue-brand-2/40 group",target:"_blank",rel:"noopener noreferrer",href:h.link,children:[l.jsx("div",{className:"text-[9px] font-bold mb-1 opacity-70 text-blue-brand-2",children:h.dateLabel}),l.jsx("div",{className:"text-xs font-bold text-white/90 line-clamp-1 group-hover:text-blue-brand-2",children:h.title})]},f))})]}),l.jsx("div",{className:"panel !p-4 border border-blue-brand/20 bg-blue-brand/5 shadow-inner",children:l.jsx("p",{className:"text-muted text-[10px] m-0 leading-relaxed",children:r?"Data is loaded via JSONP from Blogger to avoid CORS. If news is not visible, check your connection.":"Los datos se cargan vía JSONP desde Blogger para evitar problemas de CORS. Si no ves las noticias, revisa tu conexión."})})]})]})]})}const Au=({service:a,isOffer:s,isOther:r,variant:o="default"})=>{const{region:d,multiplier:g,translate:p,countryCode:b}=_t(),_=d!=="LATAM",h=_&&a.nombreEn?a.nombreEn:a.nombre,f=_&&a.descripcionEn?a.descripcionEn:a.descripcion,G=_&&a.featuresEn?a.featuresEn:a.features,k=b?Xf.find(z=>z.id.toUpperCase()===b.toUpperCase()):null,y="$";let M="";const I=a.precio;I>0?M=(I/3.7*1.15*1.1*.9).toFixed(2):M="0.00",(()=>{const z=b==null?void 0:b.toUpperCase();return z==="PE"?"🇵🇪":z==="US"?"🇺🇸":k?k.flag:z?"🌎":"🇵🇪"})();const N=()=>{const z=a.precio===0;let V="";z?d==="LATAM"?V="GRATIS":d==="PT"?V="GRÁTIS":d==="FR"?V="GRATUIT":d==="DE"?V="KOSTENLOS":V="FREE":V=`${y}${M}`;let Z="";d==="LATAM"?Z=`¡Hola! Me interesa el servicio: ${h} (ID: ${a.id}) - Precio: ${V}`:d==="PT"?Z=`Olá! Estou interessado no serviço: ${h} (ID: ${a.id}) - Preço: ${V}`:d==="FR"?Z=`Bonjour! Je suis intéressé par le service: ${h} (ID: ${a.id}) - Prix: ${V}`:d==="DE"?Z=`Hallo! Ich habe Interesse an dem Service: ${h} (ID: ${a.id}) - Preis: ${V}`:Z=`Hello! I'm interested in: ${h} (ID: ${a.id}) - Price: ${V}`,window.open(`https://wa.me/${Kf}?text=${encodeURIComponent(Z)}`,"_blank")},X=p("services.buy");return o==="compact"?l.jsxs("article",{className:"panel !p-3 flex items-center justify-between gap-4 group transition-all duration-300 bg-white/[0.02] border hover:border-blue-brand/50",children:[l.jsxs("div",{className:"flex items-center gap-3 flex-1 min-w-0",children:[l.jsx("div",{className:"w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden shrink-0 bg-white/5 border border-white/10 group-hover:border-blue-brand/30 transition-colors",children:a.imagen?l.jsx("img",{src:a.imagen,alt:"",className:"w-full h-full object-cover"}):l.jsx("div",{className:"w-full h-full flex items-center justify-center text-blue-brand-2",children:l.jsx(_i,{size:20})})}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("h4",{className:"m-0 text-xs md:text-sm font-black uppercase text-white truncate group-hover:text-blue-brand-2 transition-colors",children:h}),l.jsx("div",{className:"text-[10px] md:text-[11px] font-black text-blue-brand-2 mt-0.5",children:a.precio===0?"GRATIS":`${y} ${M}`})]})]}),l.jsxs("button",{onClick:N,className:"btn btn-sm !px-3 h-8 md:h-9 border-transparent shrink-0 bg-blue-brand/10 text-blue-brand-2 hover:bg-blue-brand hover:text-white",children:[l.jsx(_i,{size:14,className:"md:size-4"}),l.jsx("span",{className:"hidden sm:inline text-[10px] font-black uppercase",children:X})]})]}):l.jsxs("article",{className:`card flex flex-col group transition-all duration-300 hover:border-blue-brand/50 ${s?"outline-1 outline-blue-brand/35 border-blue-brand/30 bg-blue-brand/5":""}`,children:[a.imagen&&l.jsxs("div",{className:"relative overflow-hidden aspect-[16/10]",children:[l.jsx("img",{src:a.imagen,alt:h,className:"w-full h-full object-cover block transition-transform duration-500 group-hover:scale-110"}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"})]}),l.jsxs("div",{className:"card-body p-4 md:p-5 flex flex-col flex-1",children:[l.jsx("h3",{className:"m-0 mb-2 text-base md:text-lg font-black uppercase tracking-tight text-white line-clamp-1 group-hover:text-blue-brand-2 transition-colors",children:h}),l.jsx("p",{className:"text-muted text-sm mb-4 leading-relaxed line-clamp-2 md:line-clamp-none",children:f}),l.jsx("div",{className:"flex flex-wrap gap-2 mb-5",children:G==null?void 0:G.map((z,V)=>l.jsx("span",{className:"px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-slate-400 text-[10px] md:text-[11px] font-bold uppercase",children:z},V))}),l.jsxs("div",{className:"flex items-end justify-between mt-auto pt-4 border-t border-white/5",children:[l.jsx("div",{className:"text-xl md:text-2xl font-black tracking-tighter text-white",children:a.precio===0?l.jsx("span",{className:"text-green-brand",children:"GRATIS"}):`${y} ${M}`}),l.jsxs("div",{className:"flex gap-2",children:[a.saberMas&&l.jsx("a",{href:a.saberMas,target:"_blank",rel:"noopener noreferrer",className:"btn btn-sm px-3 bg-white/5 border-white/5 text-slate-400 hover:text-white",title:"Saber más",children:l.jsx(Yn,{size:16})}),l.jsxs("button",{className:`btn btn-sm px-4 ${s?"btn-primary":r?"bg-green-brand text-white":"bg-blue-brand/20 text-blue-brand-2 hover:bg-blue-brand hover:text-white"}`,onClick:N,children:[a.precio===0?l.jsx(BG,{size:16}):l.jsx(_i,{size:16}),l.jsx("span",{className:"text-[11px] font-black uppercase",children:a.precio===0?"Ver":X})]})]})]})]})]})};function nT(){const{region:a,countryCode:s,setCountry:r,translate:o}=_t(),d=a==="USD",g=a!=="LATAM"&&a!=="PT"?"https://chat.whatsapp.com/IdBIvXWUPNjDLcPmBvkp1B":cd,p=lu.filter(h=>h.categoria==="OFFER"),b=lu.filter(h=>h.categoria==="MAIN"),_=lu.filter(h=>h.categoria==="OTHER");return l.jsxs("div",{className:"flex flex-col gap-8 pb-20",children:[l.jsxs("section",{className:"relative hero !p-10 md:!p-24 overflow-hidden rounded-[3rem]",children:[l.jsx("div",{className:"absolute inset-0 opacity-10 bg-grid-slate-900/[0.1] pointer-events-none"}),l.jsx("div",{className:"absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-brand/20 to-transparent -rotate-12 transform translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none"}),l.jsxs("div",{className:"relative z-10",children:[l.jsxs("div",{className:"eyebrow bg-white/5 border-white/10 px-4 py-1 rounded-full inline-flex items-center gap-2 mb-6 backdrop-blur-md",children:[l.jsx(_i,{size:14,className:"text-blue-brand-2"}),l.jsx("span",{className:"text-[10px] font-black uppercase tracking-[0.2em]",children:d?"Premium Hub":"Centro de Servicios"})]}),l.jsxs("h1",{className:"text-4xl md:text-8xl lg:text-9xl font-black mt-4 mb-6 uppercase tracking-tighter leading-[0.8] md:leading-[0.85] text-white",children:[o("nav.servicios").split(" ")[0]," ",l.jsx("br",{}),l.jsxs("span",{className:"text-blue-brand relative",children:[o("nav.servicios").split(" ")[1]||"PREMIUM",l.jsx("span",{className:"absolute -bottom-2 left-0 w-full h-1 bg-white/10 rounded-full"})]})]}),l.jsx("p",{className:"text-slate-400 text-sm md:text-lg max-w-2xl mx-auto md:mx-0 opacity-90 leading-relaxed font-medium",children:o("services.subtitle")})]})]}),l.jsxs("section",{className:"panel !p-8 md:!p-12 relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-brand/10 to-transparent border-blue-brand/20",children:[l.jsx("div",{className:"absolute inset-0 opacity-5 bg-grid-tech pointer-events-none"}),l.jsxs("div",{className:"flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10",children:[l.jsxs("div",{className:"text-center lg:text-left space-y-3",children:[l.jsx("h3",{className:"m-0 text-3xl font-black uppercase tracking-tighter text-white",children:d?"Need Expert Assistance?":"¿Tienes dudas?"}),l.jsx("p",{className:"text-slate-400 m-0 text-sm md:text-base font-medium max-w-xl",children:d?"Chat with our command center directly via WhatsApp for instant support.":"Escríbeme directamente por WhatsApp o entra al grupo de ayuda para soporte inmediato."})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto min-w-[min(400px,100%)]",children:[l.jsxs("a",{className:"group/btn relative overflow-hidden py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 bg-blue-brand text-white shadow-xl shadow-blue-brand/40 hover:scale-105 active:scale-95",target:"_blank",rel:"noopener noreferrer",href:`https://wa.me/${Kf}`,children:[l.jsx(a2,{size:20,className:"group-hover/btn:-translate-y-1 transition-transform"}),l.jsx("span",{children:d?"Direct Command":"WhatsApp Directo"})]}),l.jsxs("a",{className:"group/btn relative overflow-hidden py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 bg-white/5 border-2 border-white/10 text-white hover:bg-white/10 active:scale-95",target:"_blank",rel:"noopener noreferrer",href:g,children:[l.jsx(_r,{size:20,className:"group-hover/btn:scale-110 transition-transform"}),l.jsx("span",{children:o("whatsapp.btn")})]})]})]})]}),l.jsxs("div",{className:"space-y-12",children:[l.jsxs("section",{className:"flex flex-col gap-6",children:[l.jsxs("div",{className:"flex items-center gap-4",children:[l.jsx("div",{className:"w-2 h-8 bg-blue-brand rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]"}),l.jsx("h2",{className:"text-2xl font-black uppercase tracking-tighter m-0 text-white",children:d?"Limited Time Offers":"Ofertas Especiales"}),l.jsx("div",{className:"h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"})]}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:p.map(h=>l.jsx(Au,{service:h,isOffer:!0},h.id))})]}),l.jsxs("section",{className:"flex flex-col gap-6",children:[l.jsxs("div",{className:"flex items-center gap-4",children:[l.jsx("div",{className:"w-2 h-8 bg-blue-brand-2 rounded-full opacity-50"}),l.jsx("h2",{className:"text-2xl font-black uppercase tracking-tighter m-0 text-white",children:d?"Core Protocols":"Servicios Principales"}),l.jsx("div",{className:"h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"})]}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:b.map(h=>l.jsx(Au,{service:h,variant:"compact"},h.id))})]}),l.jsxs("section",{className:"flex flex-col gap-6",children:[l.jsxs("div",{className:"flex items-center gap-4",children:[l.jsx("div",{className:"w-2 h-8 bg-slate-700 rounded-full"}),l.jsx("h2",{className:"text-2xl font-black uppercase tracking-tighter m-0 text-white",children:d?"Expansion Packs":"Otros Servicios"}),l.jsx("div",{className:"h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"})]}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:_.map(h=>l.jsx(Au,{service:h,isOther:!0},h.id))})]})]}),l.jsxs("section",{className:"flex flex-col gap-8 mt-12 pb-12",children:[l.jsxs("div",{className:"flex items-center gap-4 justify-center",children:[l.jsx("div",{className:"h-px w-10 md:w-20 bg-gradient-to-r from-transparent to-blue-brand"}),l.jsx("h2",{className:"text-xl md:text-3xl font-black uppercase tracking-tighter m-0 text-white text-center",children:o("services.payment_methods")}),l.jsx("div",{className:"h-px w-10 md:w-20 bg-gradient-to-l from-transparent to-blue-brand"})]}),l.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-5 gap-6",children:I2.map((h,f)=>l.jsxs("article",{className:"group relative flex flex-col p-6 bg-[#0a1224] border-2 border-white/5 rounded-[2rem] transition-all hover:border-blue-brand/50 hover:-translate-y-2",children:[l.jsx("div",{className:"absolute inset-0 bg-blue-brand/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]"}),l.jsx("div",{className:"w-full aspect-video flex items-center justify-center p-3 relative z-10",children:l.jsx("img",{src:h.logo,alt:h.name,className:"max-w-[80%] max-h-[80%] object-contain group-hover:scale-110 transition-transform duration-500"})}),l.jsxs("div",{className:"mt-4 text-center relative z-10 w-full overflow-hidden",children:[l.jsx("span",{className:"text-[11px] block font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-blue-brand-2 transition-colors mb-2",children:h.name}),l.jsx("p",{className:"text-[9px] text-slate-500 font-bold m-0 leading-relaxed italic opacity-80 line-clamp-2",children:(d?h.info:h.infoEs)||h.info})]})]},f))}),l.jsxs("div",{className:"panel !p-6 flex flex-col md:flex-row items-center gap-6 bg-blue-brand/5 border-blue-brand/20 relative overflow-hidden",children:[l.jsx("div",{className:"absolute inset-0 bg-grid-tech opacity-5 pointer-events-none"}),l.jsx("div",{className:"w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 bg-blue-brand/20 text-blue-brand border border-blue-brand/30 shadow-xl relative z-10",children:l.jsx(zG,{size:28})}),l.jsxs("p",{className:"m-0 text-xs md:text-sm text-slate-400 font-medium leading-relaxed relative z-10",children:[l.jsx("strong",{className:"text-white uppercase tracking-widest mr-2",children:d?"Secure Transmission:":"Información de Pago:"})," ",d?"Payments are coordinated directly via WhatsApp to ensure security. We will provide payment details after selection.":"Los pagos son coordinados directamente vía WhatsApp para garantizar la seguridad de la transacción. Al elegir un método, te proporcionaremos los datos necesarios."]})]})]})]})}const aT=[0,0,0,0,0,2e4,3e4,38700,49e3,1e5,15e4,174e3,204e3,237e3,76e4,11e5,157e4,235e4,262e4,403e4,445e4,488e4,533e4,581e4,882e4,954e4,103e5,111e5,119e5,181e5,194e5,206e5,22e6,233e5,37e6,392e5,414e5,437e5,46e6,484e5,508e5,533e5,559e5,585e5,612e5,64e6,668e5,697e5,726e5,756e5,787e5,818e5,849e5,882e5,915e5,948e5,982e5,102e6,105e6,109e6,113e6,116e6,12e7,124e6,128e6,132e6,136e6,14e7,144e6,148e6,152e6,157e6,161e6,166e6,17e7,175e6,179e6,184e6,189e6,194e6,198e6,203e6,208e6,213e6,218e6,224e6,229e6,234e6,24e7,245e6,25e7,256e6,262e6,267e6,273e6,279e6,285e6,29e7,296e6,302e6,308e6,315e6,321e6,327e6,333e6,34e7,346e6,353e6,359e6,366e6,373e6,379e6,386e6,393e6,4e8,407e6,414e6,421e6,428e6,435e6,443e6,45e7,458e6,465e6,473e6,48e7,488e6,495e6,503e6,511e6,519e6,527e6,535e6,543e6,551e6,559e6,568e6,576e6,584e6,593e6,601e6,61e7,618e6,627e6,636e6,645e6,653e6,662e6,671e6,68e7,69e7,699e6,708e6,717e6,727e6,736e6,745e6,755e6,764e6,774e6,779e6,784e6,789e6,793e6,798e6,803e6,808e6,813e6,818e6,813e6,818e6,823e6,827e6,832e6,837e6,842e6,847e6,852e6,856e6,861e6,866e6,871e6,876e6,881e6,885e6,89e7,895e6,9e8,905e6,91e7,914e6,919e6,924e6,929e6,934e6,939e6,943e6,948e6,953e6,958e6,963e6,968e6,973e6,977e6,982e6,987e6,992e6,997e6,1e9,101e7,101e7,102e7,102e7,103e7,103e7,104e7,104e7,105e7,105e7,105e7,106e7,106e7,107e7,107e7,108e7,108e7,109e7,109e7,11e8,11e8,111e7,111e7,112e7,112e7,113e7,113e7,114e7,114e7,115e7,115e7,116e7,116e7,117e7,117e7,118e7,118e7,119e7,119e7,12e8,12e8,12e8,121e7,121e7,122e7,122e7,123e7,123e7,124e7,124e7,125e7,125e7,126e7,126e7,127e7,127e7,128e7,128e7,129e7,129e7,13e8,13e8,131e7,131e7,132e7,132e7,133e7,133e7,134e7,134e7,135e7,135e7,135e7,136e7,136e7,137e7,137e7,138e7,138e7,139e7,139e7,14e8,14e8,141e7,141e7,142e7,142e7,143e7,143e7,144e7,144e7,145e7,145e7,146e7,146e7,147e7,147e7,148e7,148e7,149e7,149e7,15e8,15e8,15e8,151e7,151e7,152e7,152e7,153e7,153e7,154e7,154e7,155e7,155e7,156e7,156e7,157e7,157e7,158e7,158e7,159e6],sT=[0,0,0,0,0,5,8,10,12,25,38,44,51,59,190,275,393,588,655,1008,1113,1220,1333,1453,2205,2385,2575,2775,2975,3e3],Tf=328,Tu=159e7,Sf=30,Su=3e3,If={math_tool:{LATAM:"Herramienta de cálculo",USD:"Math Tool",PT:"Ferramenta de cálculo",FR:"Outil de calcul",DE:"Berechnungstool"},calculator:{LATAM:"CALCULADORA",USD:"CALCULATOR",PT:"CALCULADORA",FR:"CALCULATEUR",DE:"RECHNER"},hero_desc:{LATAM:"Calcula hasta qué EVO puedes subir según tus recursos y el descuento.",USD:"Calculate your maximum EVO based on your resources and active discounts.",PT:"Calcule o EVO máximo que você pode atingir com base em seus recursos e descontos.",FR:"Calculez votre EVO maximum en fonction de vos ressources et des réductions.",DE:"Berechnen Sie Ihr maximales EVO basierend auf Ihren Ressourcen und Rabatten."},current_evo:{LATAM:"EVO actual",USD:"Current EVO",PT:"EVO atual",FR:"EVO actuel",DE:"Aktuelles EVO"},available_credits:{LATAM:"Créditos disponibles",USD:"Available Credits",PT:"Créditos disponíveis",FR:"Crédits disponibles",DE:"Verfügbare Credits"},available_gold:{LATAM:"Oro disponible",USD:"Available Gold",PT:"Ouro disponível",FR:"Or disponible",DE:"Verfügbares Gold"},applied_discount:{LATAM:"Descuento aplicado",USD:"Applied Discount",PT:"Desconto aplicado",FR:"Réduction appliquée",DE:"Angewandter Rabatt"},calculate_evo:{LATAM:"Calcular EVO",USD:"Calculate EVO",PT:"Calcular EVO",FR:"Calculer l'EVO",DE:"EVO berechnen"},reset:{LATAM:"Reiniciar",USD:"Reset",PT:"Reiniciar",FR:"Réinitialiser",DE:"Zurücksetzen"},you_will_reach:{LATAM:"Llegarás a",USD:"YOU WILL REACH",PT:"VOCÊ VAI ALCANÇAR",FR:"VOUS ATTEINDREZ",DE:"SIE WERDEN ERREICHEN"},levels:{LATAM:"niveles",USD:"levels",PT:"níveis",FR:"niveaux",DE:"Ebenen"},discount:{LATAM:"Descuento",USD:"Discount",PT:"Desconto",FR:"Réduction",DE:"Rabatt"},credits_spent:{LATAM:"Gasto Créditos",USD:"Credits Spent",PT:"Créditos Gastos",FR:"Crédits dépensés",DE:"Verwendete Credits"},gold_spent:{LATAM:"Gasto Oro",USD:"Gold Spent",PT:"Ouro Gasto",FR:"Or dépensé",DE:"Verwendetes Gold"},credits_left:{LATAM:"Sobran Créditos",USD:"Credits Left",PT:"Créditos Restantes",FR:"Crédits restants",DE:"Verbleibende Credits"},gold_left:{LATAM:"Sobra Oro",USD:"Gold Left",PT:"Ouro Restante",FR:"Or restant",DE:"Verbleibendes Gold"},enter_resources:{LATAM:"Ingresa tus recursos y presiona Calcular para ver el resultado.",USD:"Enter your resources and press Calculate to see the result.",PT:"Insira seus recursos e pressione Calcular para ver o resultado.",FR:"Saisissez vos ressources et cliquez sur Calculer pour voir le résultat.",DE:"Geben Sie Ihre Ressourcen ein und drücken Sie Berechnen, um das Ergebnis zu sehen."},note:{LATAM:"Nota:",USD:"Note:",PT:"Nota:",FR:"Remarque :",DE:"Hinweis:"},note_desc:{LATAM:"Cálculo basado en reglas de MGG: cap de oro (30) y cap de créditos (328).",USD:"Calculation based on MGG rules: gold cap (30) and credit cap (328).",PT:"Cálculo baseado nas regras do MGG: limite de ouro (30) e limite de créditos (328).",FR:"Calcul basé sur les règles du MGG : limite d'or (30) et limite de crédits (328).",DE:"Berechnung basierend auf MGG-Regeln: Goldgrenze (30) und Creditgrenze (328)."}};function iT(){const{region:a}=_t(),[s,r]=O.useState(1),[o,d]=O.useState(""),[g,p]=O.useState(""),[b,_]=O.useState(0),[h,f]=O.useState(null),G=M=>{var I,S;return((I=If[M])==null?void 0:I[a])||((S=If[M])==null?void 0:S.USD)||""},k=()=>{let M=o===""?0:o,I=g===""?0:g,S=s===""?1:s;const N=b,X=S,z=(100-N)*.01,V=M,Z=I;let H=0;if(S>=Tf){const K=Tu*z,Y=Math.floor(M/K);M-=Y*K,H=S+Y}else for(;;){if(S>=Tf){const Y=Tu*z,ie=Math.floor(M/Y);M-=ie*Y,H=S+ie;break}const K=Math.floor((aT[S]??Tu)*z);if(M-K>=0)M-=K,S+=1;else{H=S;break}}let C=0;if(H>=Sf){const K=Su*z,Y=Math.floor(I/K);I-=Y*K,C=Y}else for(;;){if(C+H>=Sf){const ie=Su*z,pe=Math.floor(I/ie);I-=pe*ie,C=pe;break}const K=sT[H+C]??Su,Y=Math.round(K*z);if(I-Y>=0)I-=Y,C+=1;else break}const P=H+C;f({nuevoEvo:P,incremento:P-X,gastoCreditos:Math.max(0,V-M),gastoOro:Math.max(0,Z-I),sobraCreditos:M,sobraOro:I,descuentoAplicado:N})},y=()=>{r(1),d(""),p(""),_(0),f(null)};return l.jsxs("div",{className:"flex flex-col gap-6",children:[l.jsxs("section",{className:"hero transition-all duration-700 !p-6 md:!p-12 relative overflow-hidden bg-gradient-to-br from-blue-brand/10 via-blue-brand-2/5 to-transparent border-blue-brand-2/20 shadow-blue-brand-2/5",children:[l.jsx("div",{className:"absolute top-0 right-0 p-8 opacity-20",children:l.jsx(ir,{size:120,className:"text-blue-brand-2"})}),l.jsxs("div",{className:"eyebrow scale-90 md:scale-100",children:[l.jsx(ir,{size:14,className:"mr-1 text-blue-brand-2"}),l.jsx("span",{children:G("math_tool")})]}),l.jsxs("h1",{className:"text-3xl md:text-6xl font-black mt-4 mb-4 uppercase tracking-tighter leading-[0.9] md:leading-[0.95] text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-brand-2/80 to-blue-brand-2",children:["EVO ",l.jsx("span",{className:"text-blue-brand-2",children:G("calculator")})]}),l.jsx("p",{className:"text-muted text-sm md:text-base max-w-2xl mx-auto px-4 opacity-80",children:G("hero_desc")})]}),l.jsx(ea,{}),l.jsxs("div",{className:"grid md:grid-cols-[1fr_1.2fr] gap-4 md:gap-6 items-start",children:[l.jsx("section",{className:"panel flex flex-col gap-5 !p-4 md:!p-6 border border-white/10 bg-white/[0.01] hover:border-blue-brand/20 transition-all",children:l.jsxs("div",{className:"grid gap-3.5",children:[l.jsxs("label",{className:"kv",children:[l.jsx("span",{className:"kv-label text-[10px]",children:G("current_evo")}),l.jsx("input",{value:s,onChange:M=>r(M.target.value===""?"":Number(M.target.value)),placeholder:"1",className:"input py-2.5 text-sm focus:border-blue-brand-2/60 bg-white/[0.02] text-white transition-all",type:"number"})]}),l.jsxs("label",{className:"kv",children:[l.jsx("span",{className:"kv-label text-[10px]",children:G("available_credits")}),l.jsx("input",{value:o,onChange:M=>d(M.target.value===""?"":Number(M.target.value)),placeholder:"0",className:"input py-2.5 text-sm focus:border-blue-brand-2/60 bg-white/[0.02] text-white transition-all",type:"number"})]}),l.jsxs("label",{className:"kv",children:[l.jsx("span",{className:"kv-label text-[10px]",children:G("available_gold")}),l.jsx("input",{value:g,onChange:M=>p(M.target.value===""?"":Number(M.target.value)),placeholder:"0",className:"input py-2.5 text-sm focus:border-blue-brand-2/60 bg-white/[0.02] text-white transition-all",type:"number"})]}),l.jsxs("div",{children:[l.jsx("div",{className:"kv-label text-[10px] mb-2",children:G("applied_discount")}),l.jsx("div",{className:"grid grid-cols-3 gap-2",children:S2.map(M=>l.jsxs("button",{onClick:()=>_(M),className:`btn py-2 text-xs rounded-xl transition-all duration-200 ${b===M?"btn-primary":"bg-white/5 opacity-60 hover:bg-white/10 hover:border-white/15"}`,children:[M,"%"]},M))})]}),l.jsxs("div",{className:"flex gap-2 mt-2",children:[l.jsx("button",{onClick:k,className:"btn btn-primary flex-[2] py-3 text-sm transition-all duration-200",children:G("calculate_evo")}),l.jsx("button",{onClick:y,className:"btn flex-1 py-3 text-sm border border-white/5 bg-white/[0.03] text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200",children:G("reset")})]})]})}),l.jsx("section",{className:"h-full min-h-[360px]",children:h?l.jsxs("div",{className:"panel h-full flex flex-col items-center justify-center text-center p-6 md:p-8 relative overflow-hidden transition-all duration-700 border-none bg-gradient-to-br from-blue-brand/35 via-blue-brand-2/15 to-[#0b0f19] shadow-2xl shadow-blue-brand-2/10",children:[l.jsx("div",{className:"absolute inset-0 bg-[url('https://github.com/luqueSmith/MGG/blob/main/img/Logo_mgg.png?raw=true')] bg-no-repeat bg-center opacity-[0.03] scale-150 pointer-events-none"}),l.jsx("div",{className:"kv-label uppercase tracking-widest text-[10px] opacity-70 mb-2 z-10 text-blue-200",children:G("you_will_reach")}),l.jsx("div",{className:"text-[5rem] md:text-[6rem] font-black tracking-tighter leading-none mb-2 z-10 drop-shadow-xl text-white",children:us(h.nuevoEvo)}),l.jsxs("p",{className:"text-xs md:text-sm mb-6 z-10 font-bold opacity-80 text-blue-200",children:["+",us(h.incremento)," ",G("levels")," · ",h.descuentoAplicado,"% ",G("discount")]}),l.jsxs("div",{className:"grid grid-cols-2 gap-2 md:gap-3 w-full z-10",children:[l.jsxs("div",{className:"border border-white/5 bg-black/40 p-3 rounded-xl flex flex-col items-center shadow-inner",children:[l.jsx("span",{className:"text-[8px] md:text-[9px] uppercase font-bold mb-1 text-blue-200/50",children:G("credits_spent")}),l.jsx("strong",{className:"text-sm md:text-base text-white",children:us(h.gastoCreditos)})]}),l.jsxs("div",{className:"border border-white/5 bg-black/40 p-3 rounded-xl flex flex-col items-center shadow-inner",children:[l.jsx("span",{className:"text-[8px] md:text-[9px] uppercase font-bold mb-1 text-blue-200/50",children:G("gold_spent")}),l.jsx("strong",{className:"text-sm md:text-base text-white",children:us(h.gastoOro)})]}),l.jsxs("div",{className:"border border-white/5 bg-black/20 p-3 rounded-xl flex flex-col items-center shadow-inner",children:[l.jsx("span",{className:"text-[8px] md:text-[9px] uppercase font-bold mb-1 text-white/30",children:G("credits_left")}),l.jsx("strong",{className:"text-sm md:text-base text-white/80",children:us(h.sobraCreditos)})]}),l.jsxs("div",{className:"border border-white/5 bg-black/20 p-3 rounded-xl flex flex-col items-center shadow-inner",children:[l.jsx("span",{className:"text-[8px] md:text-[9px] uppercase font-bold mb-1 text-white/30",children:G("gold_left")}),l.jsx("strong",{className:"text-sm md:text-base text-white/80",children:us(h.sobraOro)})]})]})]}):l.jsxs("div",{className:"panel h-full flex flex-col items-center justify-center text-muted gap-4 border-dashed border-white/10 hover:border-blue-brand/20 transition-all bg-white/[0.01] hover:bg-white/[0.02]",children:[l.jsx(ir,{size:48,className:"opacity-10"}),l.jsx("p",{className:"text-sm max-w-[200px] text-center",children:G("enter_resources")})]})})]}),l.jsxs("section",{className:"panel flex gap-4 items-center transition-all border border-blue-brand/20 bg-blue-brand/5 shadow-inner !p-4",children:[l.jsx(zf,{size:20,className:"text-blue-brand-2 shrink-0"}),l.jsxs("div",{className:"text-[11px] md:text-xs leading-relaxed",children:[l.jsx("strong",{className:"text-white",children:G("note")})," ",G("note_desc")]})]})]})}const oT={"Ficha Reactor":"Reactor Token","Ficha Jackpot":"Jackpot Token","Tickets x25":"Energy Tickets x25","Tickets x5":"Energy Tickets x5","Triple Experiencia":"Triple Experience","Cuádruple Regeneración":"Quadruple Regeneration","Ficha Reto":"Challenge Token","Doble Experiencia":"Double Experience","Ataques Críticos":"Critical Attacks","Escudo Anticrítico":"Anticritical Shield","Doble Regeneración":"Double Regeneration"};function rT(){const{region:a,translate:s}=_t(),r=a==="USD",o=Object.keys(tb),[d,g]=O.useState(""),[p,b]=O.useState(o[0]),[_,h]=O.useState(12),f=S=>r?S.startsWith("Orbe ")?S.replace("Orbe Ataque","Attack Orb").replace("Orbe Vida","Life Orb").replace("Orbe Críticos","Critical Orb").replace("Orbe Experiencia","Experience Orb").replace("Orbe Regeneración","Regeneration Orb").replace("Orbe Respuesta","Retaliate Orb"):oT[S]||S:S,G=O.useMemo(()=>{const S=[];return Object.entries(tb).forEach(([N,X])=>{String(X||"").split(/\r?\n/).map(z=>z.trim()).filter(Boolean).forEach(z=>{const V=z.split("	");S.push({nombre:(V[0]||"").trim(),codigo:(V[1]||"").trim(),categoria:N,imagen:(V[2]||"").trim()||void 0})})}),S},[]),k=O.useMemo(()=>{const S=d.toLowerCase();return G.filter(N=>N.categoria===p&&(N.nombre.toLowerCase().includes(S)||N.codigo.toLowerCase().includes(S)))},[G,d,p]),[y,M]=O.useState(null),I=S=>{navigator.clipboard.writeText(S.toLowerCase()).catch(()=>{}),M(S),setTimeout(()=>M(null),2e3)};return l.jsxs("div",{className:"flex flex-col gap-6",children:[l.jsxs("section",{className:"hero !p-6 md:!p-12 relative overflow-hidden",children:[l.jsxs("div",{className:"eyebrow scale-90 md:scale-100",children:[l.jsx(ju,{size:14}),l.jsx("span",{children:r?"Secondary Catalog":"Catálogo secundario"})]}),l.jsxs("h1",{className:"text-3xl md:text-6xl font-black mt-4 mb-4 uppercase tracking-tighter leading-[0.9] md:leading-[0.95]",children:[r?"EXTRA":"OTROS"," ",l.jsx("span",{className:"text-blue-brand-2",children:r?"CODES":"CÓDIGOS"})]}),l.jsx("p",{className:"text-muted text-sm md:text-base max-w-2xl mx-auto px-4 opacity-80",children:r?"Orbs, consumables, structures, boxes, and offers filtered by category.":"Orbes, consumibles, estructuras, cajas y ofertas filtradas por categoría."})]}),l.jsx(ea,{}),l.jsxs("section",{className:"panel flex flex-col gap-4 !p-4 md:!p-6 transition-all border",children:[l.jsx("div",{className:"flex flex-wrap gap-2 text-center",children:o.map(S=>l.jsx("button",{onClick:()=>{b(S),h(12)},className:`flex-1 min-w-[120px] px-4 py-3 rounded-xl border text-[10px] font-black uppercase tracking-widest transition-all ${p===S?"bg-blue-brand border-blue-brand-2 text-white shadow-lg":"bg-white/5 border-transparent text-slate-400 hover:bg-white/10"}`,children:r?S==="Cajas"?"Boxes":S==="Recursos"?"Resources":S==="Orbes"?"Orbs":S:S},S))}),l.jsxs("div",{className:"relative",children:[l.jsx(fr,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-white/40"}),l.jsx("input",{value:d,onChange:S=>g(S.target.value),placeholder:r?`Search in ${p}...`:`Buscar en ${p}...`,className:"input pl-11 py-3.5 text-sm"})]})]}),l.jsx("section",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-4",children:k.length>0?k.slice(0,_).map((S,N)=>l.jsxs("article",{className:"card p-4 flex flex-col gap-3 group transition-all border hover:border-blue-brand/40",children:[S.imagen?l.jsx("div",{className:"flex items-center justify-center p-3 rounded-xl aspect-square overflow-hidden transition-colors bg-white/5",children:l.jsx("img",{src:S.imagen,alt:f(S.nombre),className:"w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"})}):l.jsx("div",{className:"flex items-center justify-center p-3 rounded-xl aspect-square overflow-hidden opacity-30 bg-blue-brand/10 text-blue-brand-2",children:l.jsx(ju,{size:32})}),l.jsxs("div",{className:"flex-1 flex flex-col pt-1",children:[l.jsx("h3",{className:"text-xs md:text-sm font-black uppercase tracking-tight mb-1 line-clamp-1 transition-colors",children:f(S.nombre)}),l.jsx("div",{className:"font-mono font-bold text-[9px] md:text-[10px] tracking-widest uppercase mb-4 opacity-80 text-blue-brand-2",children:S.codigo}),l.jsxs("button",{onClick:()=>I(S.codigo),className:`btn w-full text-[10px] font-black uppercase tracking-widest py-2.5 rounded-xl mt-auto transition-all ${y===S.codigo?"bg-green-brand/20 border-green-brand/30 text-green-brand":"hover:bg-blue-brand/15"}`,children:[y===S.codigo?l.jsx(vi,{size:12}):l.jsx(wu,{size:12}),l.jsx("span",{children:y===S.codigo?r?"DONE":"LISTO":r?"COPY":"COPIAR"})]})]})]},N)):l.jsx("div",{className:"col-span-full py-16 text-center border font-bold uppercase tracking-widest text-[10px] rounded-2xl bg-[#0d1421] border-line text-muted",children:r?"No codes found in this section.":"No se encontraron códigos en esta sección."})}),k.length>_&&l.jsx("div",{className:"flex justify-center mt-6",children:l.jsx("button",{onClick:()=>h(S=>S+12),className:"btn px-12 py-3.5 rounded-xl font-black uppercase tracking-widest text-xs transition-all bg-blue-brand/10 border-blue-brand/20 hover:bg-blue-brand/20",children:r?"Load More":"Cargar más"})})]})}const jf={quick_manual:{LATAM:"Manual de Uso Detallado",USD:"Detailed User Manual",PT:"Manual de Uso Detalhado",FR:"Manuel d'Utilisation Détaillé",DE:"Detailliertes Benutzerhandbuch"},title1:{LATAM:"GUÍA",USD:"WEBSITE",PT:"GUIA",FR:"GUIDE",DE:"PLATTFORM"},title2:{LATAM:"COMPLETA",USD:"GUIDE",PT:"COMPLETO",FR:"COMPLET",DE:"HANDBUCH"},subtitle:{LATAM:"Descubre paso a paso cómo utilizar cada herramienta de nuestra plataforma para potenciar tu experiencia en Mutants: Genetic Gladiators.",USD:"Discover step-by-step how to utilize every single tool on our platform to enhance your gameplay in Mutants: Genetic Gladiators.",PT:"Descubra passo a passo como utilizar cada ferramenta da nossa plataforma para maximizar sua experiência no Mutants: Genetic Gladiators.",FR:"Découvrez étape par étape comment utiliser chaque outil de notre plateforme pour enrichir votre expérience sur Mutants: Genetic Gladiators.",DE:"Erfahren Sie Schritt für Schritt, wie Sie jedes Tool auf unserer Plattform nutzen, um Ihr Spielerlebnis in Mutants: Genetic Gladiators zu verbessern."},sec1_title:{LATAM:"1. Lista de Mutantes y Filtros (Inicio)",USD:"1. Mutant List & Filters (Home)",PT:"1. Lista de Mutantes e Filtros (Início)",FR:"1. Liste des Mutants et Filtres (Accueil)",DE:"1. Mutantenliste und Filter (Start)"},sec1_desc:{LATAM:"Domina el buscador de la base principal para encontrar mutantes al instante.",USD:"Master the main database search engine to find mutants instantly.",PT:"Domine a barra de pesquisa do banco de dados principal para encontrar mutantes instantaneamente.",FR:"Maîtrisez le moteur de recherche de la base principale pour trouver les mutants à l'instant.",DE:"Meistern Sie die Haupt-Suchmaschine, um jeden Mutanten sofort zu finden."},sec1_items:{LATAM:["Búsqueda Rápida: Filtra al escribir el nombre o el ID numérico en tiempo real sin recargar la página.","Filtro de Genes Dual: Selecciona hasta 2 genes. La lista mostrará únicamente mutantes que coincidan con ambos genes elegidos.","Traductor Regional: Traduce automáticamente nombres entre Español, Inglés, Português, Francés y Alemán.","Copiar Códigos: Haz clic en el recuadro del código numérico ID de un mutante para copiarlo de forma rápida."],USD:["Fast Search: Filter in real-time as you type any part of the mutant name or numerical ID code instantly.","Dual Gene Filters: Select up to 2 genes. The view updates to show only mutants carrying both selected genes.","Regional Translation: Switch mutant display names dynamically between Latin Spanish, English, Portuguese, French, and German.","Clipboard Copy: Tap the numerical ID button of any mutant to copy its gene code directly, ready for script injection."],PT:["Busca Rápida: Filtre em tempo real ao digitar qualquer parte do nome do mutante ou código de ID sem recarregar.","Filtros de Genes Duplos: Selecione até 2 genes para exibir apenas os mutantes que possuem ambos.","Tradução de Nomes: Mude o idioma dos nomes no seletor integrado para Espanhol, Inglês, Português, Francês ou Alemão.","Copiar Códigos: Clique sobre o ID de qualquer mutante para copiar o código diretamente para sua área de transferência."],FR:["Recherche Rapide: Filtrez en temps réel en saisissant le nom d'un mutant ou son identifiant numérique ID.","Filtre double de gènes: Sélectionnez jusqu'à 2 gènes. La liste affichera uniquement les mutants possédant ces deux gènes.","Traducteur intégré: Traduisez instantanément les noms de mutants entre l'espagnol, l'anglais, le portugais, le français et l'allemand.","Copier les options: Cliquez sur l'identifiant ID pour copier le code de gène instantanément dans votre presse-papiers."],DE:["Schnellsuche: Filtern Sie in Echtzeit, während Sie den Namen oder den numerischen ID-Code eines Mutanten eingeben.","Duale Genfilter: Wählen Sie bis zu 2 Gene aus. Es werden nur Mutanten angezeigt, die beide Gene besitzen.","Name übersetzen: Wechseln Sie im integrierten Wähler zwischen Spanisch, Englisch, Portugiesisch, Französisch und Deutsch.","Codes kopieren: Klicken Sie auf die numerische ID eines Mutanten, um den Code direkt in Ihre Zwischenablage zu kopieren."]},sec2_title:{LATAM:"2. Simulador de Script (Inicio)",USD:"2. Script Simulator (Home)",PT:"2. Simulador de Script (Início)",FR:"2. Simulateur de Script (Accueil)",DE:"2. Skript-Simulator (Start)"},sec2_desc:{LATAM:"Comprende el funcionamiento del menú de GameGuardian antes de ejecutarlo.",USD:"Understand how GameGuardian's menus and script choices work before executing.",PT:"Entenda como funciona o menu do GameGuardian antes de executar o script em jogo.",FR:"Comprenez comment fonctionne le menu GameGuardian avant de charger le script.",DE:"Verstehen Sie die Funktionsweise des GameGuardian-Menüs vor der Ausführung."},sec2_items:{LATAM:["Vista Previa: El panel interactivo sirve exclusivamente para probar visualmente cómo se estructuran las opciones de LUA.","Inyección de Genes: Permite simular los campos del script ingresando genes y códigos de mutantes, recreando los diálogos reales.","Familiarización Segura: Ideal para nuevos usuarios que quieran ver qué opciones presionar en la app móvil sin alterar el juego."],USD:["Visual Preview: The simulator is dedicated to showing you exactly how the GameGuardian options are laid out on screen.","Gene Injection Flow: Input genes and test custom parameters to recreate real script popups on-screen.","Risk-free Exploration: Perfect for beginners to practice script flows before launching the real tooling in-game."],PT:["Visualização Prévia: O simulador serve apenas para ver como são organizadas as opções do script no GameGuardian.","Injeção de Genes: Simule os inputs digitando mutantes e genes para obter feedbacks visuais idênticos aos do jogo.","Exploração Sem Riscos: Ideal para iniciantes se familiarizarem com os botões e recursos antes de rodar no celular."],FR:["Aperçu Visuel: Le simulateur sert uniquement à tester l'organisation visuelle des options du script LUA.","Injections Simulées: Entrez des combinaisons de gènes et de codes pour voir comment réagit l'interface en temps réel.","Sécurisé et Éducatif: Pratiquez l'enchaînement des menus sans connecter de compte ou modifier vos fichiers de jeu."],DE:["Visuelle Vorschau: Der Simulator zeigt Ihnen genau, wie die verschiedenen Menüs des LUA-Skripts aufgebaut sind.","Gen-Injektion testen: Geben Sie fiktive Mutanten-IDs und Gene ein, um zu sehen, wie die Dialoge im Spiel reagieren.","Sicheres Ausprobieren: Perfekt geeignet, um die Ausführung zu verstehen, ohne das echte Spiel zu verändern."]},sec3_title:{LATAM:"3. Descargas (Script e Instancias)",USD:"3. Downloads (Script & VMs)",PT:"3. Downloads (Script e VMs)",FR:"3. Téléchargements (Script & VMs)",DE:"3. Downloads (Skript & VMs)"},sec3_desc:{LATAM:"Descarga scripts actualizados y sistemas virtuales pre-configurados listos.",USD:"Download up-to-date scripts and pre-configured virtual environments ready to boot.",PT:"Baixe scripts atualizados e sistemas virtuais prontos para processar seu jogo.",FR:"Téléchargez les scripts mis à jour et les instances virtuelles pré-configurées.",DE:"Laden Sie aktuelle Skripte und vorkonfigurierte virtuelle Umgebungen direkt herunter."},sec3_items:{LATAM:["Últimas Versiones: Consigue de forma directa el Script LUA Definitivo en tu idioma (Español, Inglés, Portugués, etc.) listo para GameGuardian.","Instancias Virtuales Listas: Descarga las imágenes modificadas para PC (LDPlayer) y móvil (VPhone) con enlaces rápidos de Google Drive.","Todo Preparado: Estas instancias virtuales ya vienen con Root activo, GameGuardian de fábrica y el instalador de MGG listo.",'Guía Paso a Paso: Usa el botón verde "Ver Guía de Uso" en descargas para aprender a importar tu respaldo `.ldplayer` o configurar tu VM.'],USD:["Latest Releases: Grab the updated Ultimate LUA script files directly in multiple formats tailored for GameGuardian.","Pre-made VM Backups: Download ready-to-run images of LDPlayer (PC) and VPhone (Mobile) hosted on high-speed Google Drive.","Zero Complex Setup: These systems are packaged with Superuser (Root) enabled and GameGuardian pre-installed.","Import Guides: View dedicated setup guidelines on how to restore backup files and manage emulated environments."],PT:["Últimas Versões: Baixe o Script LUA oficial em seu formato compactado ou bruto, traduzido no seu idioma de preferência.","Máquinas Virtuais Prontas: Links diretos do Drive para baixar instâncias de LDPlayer (PC) e VPhone (Celular) otimizadas.","Configuração Zero: As instâncias já contam com Root, GameGuardian e MGG configurados e prontos para uso imediato.","Manual Integrado: Acessível através do botão de guia para saber como importar backups sem erros ou dependências."],FR:["Scripts à Jour: Récupérez les versions compressées ou décompressées du Script LUA traduits dans votre langue.","Systèmes Virtuels: Téléchargez les fichiers de sauvegarde LDPlayer (PC) ou VPhone (Mobile) depuis Google Drive.","Prêt à l'Emploi: Les fichiers intègrent déjà l'accès Root déverrouillé, GameGuardian et MGG réglés d'usine.","Tutoriel de Restauration: Cliquez sur le bouton d'assistance para restaurer facilement votre fichier `.ldplayer`."],DE:["Aktuelle Skripte: Laden Sie die neuesten Script-Dateien in verschiedenen Sprachen direkt und sicher herunter.","Virtuelle Maschinen (VMs): Nutzen Sie fertige Backup-Pakete für LDPlayer (PC) und FPhone (Mobiltelefon).","Sofort startklar: Diese Systeme verfügen über einen integrierten Root-Zugriff und vorinstallierte Tools.","Schritt-für-Schritt-Anleitung: Öffnen Sie das Green-Book-Menü, um zu sehen, wie man die Backups importiert."]},sec4_title:{LATAM:"4. Calculadora de Evolución (Evo)",USD:"4. Evolution Calculator (Evo)",PT:"4. Calculadora de Evolução (Evo)",FR:"4. Calculateur d'Évolution (Evo)",DE:"4. Evolutionsrechner (Evo)"},sec4_desc:{LATAM:"Prevea costos exactos de oro y créditos para subir niveles en MGG.",USD:"Forecast exact gold and credit costs to reach high levels in MGG.",PT:"Calcule custos exatos de ouro e créditos para subir níveis no MGG.",FR:"Calculez le coût exact en or et crédits pour monter de niveau.",DE:"Berechnen Sie die genauen Gold- und Creditkosten für Levelaufstiege."},sec4_items:{LATAM:["Descuentos Aplicados: Selecciona botones de 20%, 30%, 40% o 50% según el evento activo en el juego para ajustar multiplicadores.","Entrada Limpia: Diseñada para ingresar tus recursos sin molestos ceros residuales a la izquierda. Al borrar, el campo queda vacío listo para ti.","Reiniciar Atajos: Haz clic en el botón de Reiniciar para limpiar los valores activos y realizar un nuevo cálculo limpio instantáneamente.","Reglas del MGG: Cálculos basados en caps de oro (30) y créditos (328) nativos del juego original."],USD:["Active Discounts: Select discount rate buttons (20%, 30%, 40%, or 50%) based on active MGG events to balance results.","Clean Input: No sticky leading zeros. Deleting values clears the field entirely with a light gray placeholder of zero.","Instant Reset: Click the Reset button to wipe parameters and launch new calculations instantly.","MGG Cap Rules: Fully integrated parameters honoring the default gold cap (30) and credit cap (328) of the game."],PT:["Descontos Ativos: Escolha 20%, 30%, 40% ou 50% para sincronizar o cálculo com o evento semanal do game.","Input Otimizado: Exclui o antigo bug do zero teimoso na tela. Se deletado, limpa por completo deixando o placeholder de zero.","Limpeza Rápida: O botão Reiniciar redefine os campos simulados instantaneamente para novas contas.","Dados Certificados: Cálculos precisos ajustados aos limites de ouro (30) e consumo (328) de créditos."],FR:["Réductions ajustables: Choisissez un bouton de promotion (20%, 30%, etc.) pour appliquer les pourcentages réels.","Saisie Intuitive: Plus de zéro indésirable lors de l'édition. En effaçant tout, la zone de texte devient vierge.","Bouton Réinitialiser: Effacez tous les critères d'un coup de pouce pour démarrer une nouvelle opération.","Limites du MGG: Intègre le plafond d'or (30) et la barrière de réduction de crédits (328) de l'application originale."],DE:["Rabatt-Optionen: Wählen Sie Rabattraten (20%, 30%, etc.) aus, um den Ersparnis-Multiplikator anzupassen.","Saubere Eingabe: Keine lästigen führenden Nullen. Das Feld wird beim Löschen komplett geleert.","Zurücksetzen-Button: Löschen Sie alle aktuellen Angaben, um direkt ein neues Setup durchzurechnen.","MGG-Regeln: Präzise Berechnungen unter Berücksichtigung des Gold-Caps (30) und Credit-Caps (328)."]},sec5_title:{LATAM:"5. Catálogo de Códigos (Otros)",USD:"5. Code Catalog (Otros)",PT:"5. Catálogo de Códigos (Outros)",FR:"5. Catalogue de Codes (Autres)",DE:"5. Code-Katalog (Andere)"},sec5_desc:{LATAM:"Usa la base de códigos para orbes y fichas listos para inyección.",USD:"Leverage auxiliary codes for attack orbs, passes, and shield tickets.",PT:"Use a base de chaves para obter orbes e insígnias para seu script.",FR:"Découvrez des codes secondaires configurés pour booster votre inventaire.",DE:"Nutzen Sie alternative Codes für Orbs, Kampagnen und Tickets."},sec5_items:{LATAM:["Categorías Claras: Códigos organizados por Orbes de Ataque, Orbes de Vida, Autoinyección, Fichas de Campaña, etc.","Copiar en 1 clic: Simplemente haz clic en el código de respuesta para guardarlo en la papelera de reciclaje / portapapeles.","Aplicación en Juego: Copia estos códigos y pégalos en las opciones de inyección de GameGuardian en tu instancia virtual para reclamar las recompensas."],USD:["Structured Sections: Codes filtered neatly by Attack Orbs, Health Orbs, Campaign coins, Speed boosters, and more.","One-tap Copy: Click directly on any code box to copy the string to your device clipboard instantly.","In-Game Deploy: Inject these custom strings through GameGuardian options on your virtual environment to secure rewards."],PT:["Filtros por Orbes: Chaves e hashes categorizados por Orbe de Força, Vida, Velocidade e moedas especiais.","Área de Transferência: Toque nos códigos do menu para salvá-los rapidamente em seu celular.","Execução Prática: Cole esses códigos na aba de customização de GG dentro do LDPlayer/VPhone para evoluir."],FR:["Catégories d'Orbes: Codes triés par Orbes d'Attaque, de Vie, de Vitesse, Cartes de combat et jetons.","Aide Directe: Copiez n'importe quel code listé en un seul clic.","Incrémentation: Injectez ces scripts à l'aide de votre outil GameGuardian pour booster vos statistiques."],DE:["Optimierte Kategorien: Codes sortiert nach Angriffs-Orbs, Lebens-Orbs, Kampagnen-Tickets und mehr.","Clipboard-Kopie: Ein Klick auf den Code genügt, um ihn direkt im Zwischenspeicher abzuspeichern.","Lua-Verwendung: Fügen Sie diese Parameter in die Injektionsmaske Ihres GameGuardian-Skripts ein."]},sec6_title:{LATAM:"6. Novedades y Sincronización",USD:"6. News Feed & Sinc",PT:"6. Novidades e Sincronização",FR:"6. Actualités et Flux",DE:"6. News und Synchronisation"},sec6_desc:{LATAM:"Mantente al día con los eventos semanales integrados de forma activa.",USD:"Stay updated with weekly game events loaded dynamically.",PT:"Fique por dentro de eventos e ofertas semanais integrados de forma ativa.",FR:"Restez informé des tournois et offres d'actualités de l'application.",DE:"Bleiben Sie informiert über aktuelle Shop-Events und Ankündigungen."},sec6_items:{LATAM:["Feeds de Blogger: Noticias semanales extraídas directamente vía JSONP para garantizar velocidad y compatibilidad CORS.","Advertencia de Canales: Recuerda que la antigua web pokradex.org está inactiva y no se actualiza. Todo el contenido actual se mantiene únicamente aquí.","Enlaces Rápidos: El panel lateral contiene accesos rápidos a hibridaciones clásicas y tablas de atributos del blog oficial."],USD:["Blogger Synchronization: Weekly posts loaded safely directly via internal JSONP clients bypassing CORS constraints.","Website Advisory: Important warning detailing that pokradex.org is no longer maintained. Always rely exclusively on our app pages.","Reference Links: Utilize the sidebar widget to quickly consult historical breeding list pages or orb rules."],PT:["Sincronização de Blog: Posts de notícias carregados de forma ágil via canal XML/JSONP para contornar bloqueios.","Nota Importante: O portal pokradex.org está fora de serviço definitivo. Todas as tabelas ativas encontram-se somente aqui.","Menção Lateral: Atalhos na barra direita para cruzamentos históricos, calculadoras auxiliares e guias."],FR:["Flux RSS Automatisé: Actualités synchronisées via JSONP pour une réactivité optimale et sans erreurs CORS.","Ancienne URL: Attention, la plateforme pokradex.org est abandonnée. Venez consulter nos pages exclusives pour le contenu récent.","Ressources Utiles: Module latéral avec accès aux combinaisons secrètes et tableaux d'aptitudes."],DE:["Blogger-Anbindung: Wöchentliche News fließen direkt über JSONP-Requests fehlerfrei in das Portal ein.","Wichtiger Hinweis: pokradex.org ist veraltet und inaktiv. Alle aktuellen Inhalte werden exklusiv hier bereitgestellt.","Seitenleisten-Links: Schneller Zugriff auf Zucht-Tabellen und Spezial-Statistiken."]},disclaimer_title:{LATAM:"Advertencia de Seguridad y Descargo de Responsabilidad",USD:"Security Warning & Disclaimer of Liability",PT:"Aviso de Segurança e Isenção de Responsabilidade",FR:"Avertissement de Sécurité et Limitation de Responsabilité",DE:"Sicherheitshinweis und Haftungsausschluss"},disclaimer_desc_1:{LATAM:"Úsalo bajo tu propio riesgo:",USD:"Use at your own risk:",PT:"Use por sua conta e risco:",FR:"Le jeu à vos risques et périls :",DE:"Nutzung auf eigene Gefahr:"},disclaimer_desc_2:{LATAM:"Esta plataforma es un recurso puramente informativo, visual de simulación y auxiliar para el juego Mutants: Genetic Gladiators. El uso de scripts de automatización, trucos externos o inyecciones mediante GameGuardian e instancias virtuales corre bajo la absoluta responsabilidad de cada jugador.",USD:"This platform serves purely as an informational resource, visual simulator, and helper toolbox for Mutants: Genetic Gladiators. Integrating automated scripts, codes, or utilizing software patches via GameGuardian and VM software remains entirely at the discrete choice of the user.",PT:"Esta plataforma é uma ferramenta puramente informativa, simulação visual e de auxílio de jogo. A utilização de scripts automáticos, injeções externas ou o uso do GameGuardian com instâncias virtuais é de exclusiva responsabilidade do usuário.",FR:"Ce site est un outil informatif, d'aide de jeu et de simulation visuelle. L'emploi de scripts, d'éditeurs tiers (comme GameGuardian) ou d'environnements virtualisés relève de la seule responsabilité de l'utilisateur final.",DE:"Diese Plattform ist eine rein informative Ressource, ein Zusammentreffen von Emulations-Simulationen und Spielhilfen. Die Verwendung von Automatisierungsskripten, Spielmanipulationssoftware oder Instanz-Backups liegt in der alleinigen Verantwortung des Nutzers."},disclaimer_desc_3:{LATAM:"No nos hacemos responsables de suspensiones de cuenta (baneos), pérdidas de progreso, caídas de nivel o sanciones aplicadas por Kobojo / Celador / desarrolladores del MGG causadas por un uso inapropiado del script o abusos de códigos. Se recomienda usar las utilidades con moderación y fines educativos.",USD:"We hold no liability for in-game bans, suspension penalties, rollbacks, progress loss, or database wipeouts enforced by Kobojo / Celador / Game developers due to excessive script triggers or coordinate exploits. Educate yourself first and play responsibly.",PT:"Não nos responsabilizamos por bans permanentes ou temporários, perdas de progresso, perdas de nível ou quaisquer punições aplicadas pela Kobojo / Celador / detentores do jogo devido ao abuso das ferramentas ou injeções massivas. Recomendamos discrição em sua conta.",FR:"Nous déclinons toute responsabilité en cas de bannissement (ban), perte de progression ou pénalités administrées par Kobojo / Celador / les éditeurs du jeu en cas d'abus du script Lua. Jouez calmement et raisonnablement.",DE:"Wir übernehmen keinerlei Haftung für Spielsperren, Zurücksetzungen (Bans), Levelverluste oder sonstige Sanktionen des Entwicklers (Kobojo / Celador) durch missbräuchliche Nutzung der Skripte. Verwenden Sie die Tools bedacht und zu Schulungszwecken."},vm_tabs_title:{LATAM:"Guías de Configuración de Instancias",USD:"Instances Configuration Guides",PT:"Guias de Configuração de Instâncias",FR:"Guides de Configuration d'Instances",DE:"Instanz-Konfigurationsanleitungen"},vm_what_is:{LATAM:"¿Qué es una Instancia Virtual y para qué sirve?",USD:"What is a Virtual Instance and what is it used for?",PT:"O que é uma Instância Virtual e para que serve?",FR:"Qu'est-ce qu'une instance virtuelle et à quoi sert-elle ?",DE:"Was ist eine virtuelle Instanz und wofür wird sie verwendet?"},vm_why_use:{LATAM:"Una instancia virtual es una copia de seguridad o sistema de juego aislado que sirve para ahorrar al usuario todo el proceso manual de rootear su teléfono, configurar emuladores desde cero e instalar y calibrar GameGuardian con las carpetas internas correctas. Al importar este archivo preconfigurado, el sistema ya cuenta con los permisos Root necesarios y las utilidades integradas listas para ejecutar archivos del tipo LUA de manera directa.",USD:"A virtual instance is a pre-configured backup or isolated simulation system used to save the user from the manual process of rooting their device, configuring emulators from scratch, and installing or calibrating GameGuardian. By importing this file, the virtual environment already includes the mandatory Root permissions and tools in place to run LUA files directly.",PT:"Uma instância virtual é uma cópia de segurança ou sistema simulado pré-configurado que serve para poupar o usuário do processo manual de fazer root no dispositivo, configurar emuladores do zero e instalar o GameGuardian. Ao importar este arquivo preparado, o ambiente virtual já possui acesso Root ativo e ferramentas prontas para executar scripts LUA de forma direta.",FR:"Une instance virtuelle est une sauvegarde ou un système de simulation pré-assemblé qui évite à l'utilisateur de rooter manuellement son appareil, configurer un émulateur de zéro ou paramétrer GameGuardian. En important ce fichier, l'environnement dispose déjà des droits Root requis et des composants prêts à l'emploi pour charger directement les scripts LUA.",DE:"Eine virtuelle Instanz ist ein vorkonfiguriertes Backup oder eine isolierte Simulationsumgebung, die dem Benutzer das manuelle Rooten seines Smartphones, das Einrichten von Emulatoren von Grund auf sowie das Installieren von GameGuardian erspart. Nach dem Importieren dieser Datei verfügt das System bereits über die erforderlichen Root-Rechte und integrierte Dienstprogramme zur direkten Ausführung von LUA-Skripten."},vm_tabs_desc:{LATAM:"Aprende los pasos esenciales para importar y configurar tu emulador virtual o app de virtualización sin errores.",USD:"Learn the essential steps to import and set up your virtual emulator or sandbox application correctly.",PT:"Aprenda as etapas cruciais para importar e iniciar seu emulador ou espaço virtual hoje mesmo.",FR:"Découvrez les étapes indispensables pour charger ou configurer votre émulateur virtuel en toute sérénité.",DE:"Erfahren Sie alles Notwendige, um Ihr virtuelles System oder Ihren Emulator mühelos zu starten."},pc_guide_title:{LATAM:"Instancia PC (LDPlayer 9)",USD:"PC Instance (LDPlayer 9)",PT:"Instância PC (LDPlayer 9)",FR:"Instance PC (LDPlayer 9)",DE:"PC-Instanz (LDPlayer 9)"},mobile_guide_title:{LATAM:"Instancia Móvil (VPhoneGaga)",USD:"Mobile Instance (VPhoneGaga)",PT:"Instância Móvel (VPhoneGaga)",FR:"Instance Mobile (VPhoneGaga)",DE:"Mobil-Instanz (VPhoneGaga)"},pc_steps:{LATAM:["Descargar LDPlayer 9: Descarga e instala la última versión oficial desde su emulador de cabecera.",'Abrir Administrador: Abre la utilidad de escritorio "LDMultiPlayer" (Gestor multiinstancias) integrada en tu PC.','Importar Archivo: Presiona "Añadir Instancia", elige "Restaurar/Importar" y selecciona el archivo de respaldo `.ldplayer` descargado de Google Drive.',"Arrancar Entorno: Inicia la máquina virtual importada. Iniciará con Root activo, GameGuardian y MGG listos para jugar.","Activar Script: Ejecuta GameGuardian en el emulador, selecciona la app MGG, presiona Play y escoge el script LUA para inyectar recursos."],USD:["Download LDPlayer 9: Install the official version of LDPlayer 9 on your desktop computer.",'Launch Multi-Player: Open the software tool named "LDMultiPlayer" installed beside LDPlayer.','Load Configuration: Select "Add Instance" -> "Restore/Import" and choose the `.ldplayer` block you saved from Google Drive.',"Boot Emu Mode: Start the finished virtual environment. It is preloaded with active Root, GameGuardian app, and MGG.","Inject Controls: Run GameGuardian, bind it to MGG process, select your downloaded LUA script, and execute."],PT:["Baixar LDPlayer 9: Instale o emulador padrão direto do site oficial.",'Abrir Multi-Instâncias: Execute a ferramenta administrativa "LDMultiPlayer" do seu computador.','Importar Backups: Clique em "Adicionar Instância", e opte por "Restaurar/Importar" indicando o arquivo `.ldplayer`.',"Iniciar Máquina: Ligue o simulador do jogo; ele já vem empacotado com Root ativo e GameGuardian configurado.","Ativar LUA: Inicie a ferramenta de script do game, escolha o arquivo LUA baixado e execute os cheats calculados."],FR:["Avoir LDPlayer 9: Installez l'outil classique sur votre ordinateur de bureau.","Ouvrir LDMultiPlayer: Double-cliquez sur le module de gestion multi-fenêtres sur votre écran.",'Restaurer la Sauvegarde: Cliquez sur "Ajouter une instance" puis sur "Restaurer/Importer" pour choisir le fichier `.ldplayer`.',"Allumer l'Émulateur: Démarrez le système. L'accès Root ainsi que les applications sont déjà opérationnels en un clin d'œil.","Charger le LUA: Lancez l'intermédiaire des triches, rattachez-le à MGG et profitez de l'ensemble des scripts."],DE:["LDPlayer 9 holen: Holen Sie sich das offizielle Setup für Ihren Desktop-Rechner.",'Manager starten: Öffnen Sie die installierte Verwaltung namens "LDMultiPlayer".','Backup importieren: Klicken Sie auf "Instanz hinzufügen", wählen Sie "Wiederherstellen/Importieren" und laden Sie das Paket.',"System hochfahren: Booten Sie die eingepflegte Instanz; Root und alle Apps sind gebrauchsfertig konfiguriert.","Lua-Modul laden: Starten Sie das GameGuardian-Menü, docken Sie an MGG an und führen Sie das LUA-Skript aus."]},mobile_steps:{LATAM:["Instalar VPhoneGaga: Instala el archivo de extensión `.apk` de VPhoneGaga en tu smartphone Android real.","Acceso Supervisor (Root): Abre VPhoneGaga, ve a la configuración interna del emulador y activa Root.","Enviar Archivos: Usa el asistente de importación nativa de VPhone para copiar la app de MGG y tu script LUA desde tu almacenamiento real.","Permitir Privilegios: Abre GameGuardian dentro del entorno virtual de VPhoneGaga y concédele permisos Root.","Ejecución del Juego: Inicia Mutants Genetic Gladiators, vincula GameGuardian al proceso activo del juego y usa tus LUA preferidos."],USD:["Install VPhoneGaga: Put the `.apk` package file of VPhoneGaga directly on your Android mobile device.","Enable Superuser: Launch VPhone, access the internal system settings panel, and toggle the switch to activate Root.","Transfer Data: Import MGG app files and your downloaded LUA script into VPhone from your real cell storage.","Grant Privileges: Open GameGuardian within the emulated virtual space and allow permanent root capabilities.","Game Insertion: Run MGG, click GameGuardian floating bubble, link to the game, and inject script options."],PT:["Instalar VPhoneGaga: Baixe e instale o aplicativo sandbox de simulação no seu telefone real.","Habilitar Privilégios: Abra o menu de ajuste virtual e marque a caixa de seleção de acesso Root.","Importar Arquivos: Mova o MGG instalado e o arquivo de script LUA para o ambiente fechado do software.","Permissões Root: Conceda autorização de root ao GameGuardian quando solicitado na tela inicial.","Iniciar o Jogo: Roda o game normalmente, selecione o processo do MGG no GG e injete as otimizações."],FR:["Avoir VPhoneGaga: Téléchargez l'archive d'espace virtuel directement dans votre appareil personnel.","Options Concessionnaire (Root): Ouvrez les paramètres internes de la bulle virtuelle et activez le mode Root.","Copier les Logiciels: Importez les ressources installées (l'application MGG et votre script) dans l'arborescence de VPhone.","Droits d'Accès: Lancez la console externe de triche et cochez la case d'accès illimité.","Lancer MGG: Connectez-vous sur votre compte de jeu, arrimez la bulle externe au processus et chargez le Lua."],DE:["VPhoneGaga installieren: Installieren Sie das Emulator-Installationspaket auf Ihrem Android-Handy.","Root-Rechte freischalten: Öffnen Sie das VPhone-Setup und schalten Sie den standardmäßigen Root-Modus scharf.","Inhalte einspeisen: Ziehen Sie das Spiel MGG und das heruntergeladene LUA-Skript in das geschlossene VPhone-System.","Zugriff gestatten: Gewähren Sie dem GameGuardian-Tool vollen Zugriff auf die Root-Rechte des Systems.","Ausführung starten: Öffnen Sie Mutants, verknüpfen Sie das Tool und laden Sie Ihr LUA-Skript für Ihr Spiel."]}};function lT(){const{region:a}=_t(),[s,r]=O.useState("pc");O.useEffect(()=>{if(window.location.hash.includes("instancias")||window.location.hash.includes("instancias-guide")){const g=document.getElementById("instancias-guide");g&&setTimeout(()=>{g.scrollIntoView({behavior:"smooth",block:"start"})},300)}},[]);const o=g=>{var p,b;return((p=jf[g])==null?void 0:p[a])||((b=jf[g])==null?void 0:b.USD)||""},d=[{title:o("sec1_title"),desc:o("sec1_desc"),items:o("sec1_items"),icon:fr,color:"text-blue-400 bg-blue-500/10 border-blue-500/20"},{title:o("sec2_title"),desc:o("sec2_desc"),items:o("sec2_items"),icon:Rf,color:"text-emerald-400 bg-emerald-500/10 border-emerald-500/20"},{title:o("sec3_title"),desc:o("sec3_desc"),items:o("sec3_items"),icon:od,color:"text-purple-400 bg-purple-500/10 border-purple-500/20"},{title:o("sec4_title"),desc:o("sec4_desc"),items:o("sec4_items"),icon:ir,color:"text-cyan-400 bg-cyan-500/10 border-cyan-500/20"},{title:o("sec5_title"),desc:o("sec5_desc"),items:o("sec5_items"),icon:wG,color:"text-rose-400 bg-rose-500/10 border-rose-500/20"},{title:o("sec6_title"),desc:o("sec6_desc"),items:o("sec6_items"),icon:rd,color:"text-amber-400 bg-amber-500/10 border-amber-500/20"}];return l.jsxs("div",{className:"flex flex-col gap-8 text-left",children:[l.jsxs("section",{className:"hero transition-all duration-700 !p-6 md:!p-12 relative overflow-hidden bg-gradient-to-br from-blue-brand/10 via-blue-brand-2/5 to-transparent border-blue-brand-2/20 shadow-blue-brand-2/5",children:[l.jsx("div",{className:"absolute top-0 right-0 p-8 opacity-20",children:l.jsx(br,{size:120,className:"text-blue-brand-2 animate-pulse"})}),l.jsxs("div",{className:"eyebrow scale-90 md:scale-100",children:[l.jsx(br,{size:16,className:"text-blue-brand-2"}),l.jsx("span",{children:o("quick_manual")})]}),l.jsxs("h1",{className:"text-4xl md:text-6xl font-black mt-2.5 mb-2.5 uppercase tracking-tighter leading-[0.95] text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-brand-2/80 to-blue-brand-2",children:[o("title1")," ",l.jsx("span",{className:"text-blue-brand-2",children:o("title2")})]}),l.jsx("p",{className:"text-muted max-w-2xl px-4 opacity-80 text-sm md:text-base leading-relaxed pl-1",children:o("subtitle")})]}),l.jsx(ea,{}),l.jsx("section",{className:"grid lg:grid-cols-2 gap-6",children:d.map((g,p)=>{const b=g.icon;return l.jsxs("article",{className:"panel flex flex-col gap-5 border border-white/10 bg-gradient-to-b from-white/[0.01] to-transparent rounded-[2rem] p-6 md:p-8 hover:border-white/20 transition-all duration-300",children:[l.jsxs("div",{className:"flex items-center gap-4",children:[l.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${g.color}`,children:l.jsx(b,{size:24})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-xl font-bold tracking-tight text-white m-0 uppercase",children:g.title}),l.jsx("p",{className:"text-slate-400 text-xs font-semibold m-0 mt-0.5",children:g.desc})]})]}),l.jsx("div",{className:"flex flex-col gap-3.5 mt-2 bg-white/[0.01] p-5 rounded-2xl border border-white/5",children:g.items.map((_,h)=>{const[f,G]=_.split(": ");return l.jsxs("div",{className:"flex gap-3 items-start",children:[l.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-blue-brand shrink-0 mt-2"}),l.jsx("p",{className:"text-slate-300 text-sm m-0 leading-relaxed font-semibold",children:f&&G?l.jsxs(l.Fragment,{children:[l.jsxs("strong",{className:"text-white font-black uppercase text-xs tracking-wide",children:[f,": "]}),l.jsx("span",{className:"font-medium text-slate-300",children:G})]}):l.jsx("span",{className:"font-medium text-slate-300",children:_})})]},h)})})]},p)})}),l.jsxs("section",{id:"instancias-guide",className:"panel border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent rounded-[2rem] p-6 md:p-8 flex flex-col gap-6",children:[l.jsxs("div",{children:[l.jsx("h2",{className:"text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-2",children:o("vm_tabs_title")}),l.jsx("p",{className:"text-slate-400 text-sm font-medium m-0 leading-relaxed max-w-3xl",children:o("vm_tabs_desc")})]}),l.jsxs("div",{className:"bg-gradient-to-r from-blue-500/5 to-emerald-500/5 border border-blue-500/10 rounded-2xl p-5 md:p-6 flex flex-col gap-2.5",children:[l.jsxs("h3",{className:"text-sm font-black uppercase text-blue-400 tracking-wider m-0 flex items-center gap-2",children:[l.jsx(Uf,{size:16,className:"text-emerald-400"}),l.jsx("span",{children:o("vm_what_is")})]}),l.jsx("p",{className:"text-slate-300 text-xs md:text-sm leading-relaxed m-0 font-medium font-sans",children:o("vm_why_use")})]}),l.jsxs("div",{className:"flex border-b border-white/10 gap-4",children:[l.jsxs("button",{onClick:()=>r("pc"),className:`pb-3 font-bold uppercase tracking-wider text-xs border-b-2 transition-all flex items-center gap-2 cursor-pointer ${s==="pc"?"border-blue-brand text-white border-blue-500":"border-transparent text-slate-400 hover:text-slate-200"}`,children:[l.jsx(Hf,{size:14}),l.jsx("span",{children:o("pc_guide_title")})]}),l.jsxs("button",{onClick:()=>r("mobile"),className:`pb-3 font-bold uppercase tracking-wider text-xs border-b-2 transition-all flex items-center gap-2 cursor-pointer ${s==="mobile"?"border-blue-brand text-white border-blue-500":"border-transparent text-slate-400 hover:text-slate-200"}`,children:[l.jsx(ld,{size:14}),l.jsx("span",{children:o("mobile_guide_title")})]})]}),l.jsx("div",{className:"flex flex-col gap-4 bg-white/[0.01] p-5 rounded-2xl border border-white/5",children:(o(s==="pc"?"pc_steps":"mobile_steps")||[]).map((g,p)=>{const[b,_]=g.split(": ");return l.jsxs("div",{className:"flex gap-4 items-start",children:[l.jsx("div",{className:"w-6 h-6 rounded-full bg-blue-brand/10 border border-blue-brand/20 text-blue-brand-2 flex items-center justify-center font-mono text-xs font-black shrink-0 mt-0.5",children:p+1}),l.jsx("p",{className:"text-slate-300 text-sm m-0 leading-relaxed font-semibold",children:b&&_?l.jsxs(l.Fragment,{children:[l.jsxs("strong",{className:"text-white font-black uppercase text-xs tracking-wide",children:[b,": "]}),l.jsx("span",{className:"font-medium text-slate-300",children:_})]}):l.jsx("span",{className:"font-medium text-slate-300",children:g})})]},p)})})]}),l.jsxs("article",{className:"panel border border-red-500/20 bg-red-500/5 hover:bg-red-500/[0.07] flex flex-col md:flex-row gap-5 items-start rounded-[2rem] p-6 md:p-8 transition-all",children:[l.jsx("div",{className:"w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 bg-red-500/10 text-red-500 shadow-lg shadow-red-500/10 mt-1 mx-auto md:mx-0",children:l.jsx(Bf,{size:32,className:"animate-pulse"})}),l.jsxs("div",{className:"flex-1 flex flex-col gap-4",children:[l.jsxs("div",{className:"text-center md:text-left",children:[l.jsx("h4",{className:"text-lg font-black text-white tracking-wide uppercase m-0 leading-tight",children:o("disclaimer_title")}),l.jsx("span",{className:"text-red-400 text-xs font-black uppercase tracking-widest mt-1 block",children:o("disclaimer_desc_1")})]}),l.jsxs("div",{className:"text-slate-300 text-sm leading-relaxed space-y-3 font-medium",children:[l.jsx("p",{className:"m-0",children:o("disclaimer_desc_2")}),l.jsx("p",{className:"m-0 text-red-100/90 font-semibold border-l-2 border-red-500/40 pl-3",children:o("disclaimer_desc_3")})]})]})]})]})}const Vf={multimedia:{LATAM:"Contenido multimedia",USD:"Multimedia",PT:"Conteúdo multimídia",FR:"Contenu multimédia",DE:"Multimedia-Inhalte"},tutoriales_title1:{LATAM:"TUTORIALES",USD:"YOUTUBE",PT:"TUTORIAIS",FR:"TUTORIELS",DE:"TUTORIALS"},tutoriales_title2:{LATAM:"YOUTUBE",USD:"GUIDES",PT:"YOUTUBE",FR:"YOUTUBE",DE:"YOUTUBE"},tutoriales_desc:{LATAM:"Aquí subo guías rápidas y tips sobre el catálogo y Mutants: Genetic Gladiators.",USD:"Quick guides and tips about the catalog and Mutants: Genetic Gladiators.",PT:"Aqui eu posto guias rápidos e dicas sobre o catálogo e Mutants: Genetic Gladiators.",FR:"Ici, je publie des guides rapides et des conseils sur le catalogue et Mutants: Genetic Gladiators.",DE:"Hier lade ich Kurzanleitungen und Tipps zum Katalog und Mutants: Genetic Gladiators hoch."},youtube_channel:{LATAM:"Canal de YouTube",USD:"YouTube Channel",PT:"Canal do YouTube",FR:"Chaîne YouTube",DE:"YouTube-Kanal"},youtube_channel_desc:{LATAM:"Si estás en móvil, puede abrir la app de YouTube si la tienes instalada.",USD:"If you are on mobile, it might open the YouTube app directly.",PT:"Se estiver no celular, pode abrir o aplicativo do YouTube diretamente.",FR:"Si vous êtes sur mobile, cela peut ouvrir directement l'application YouTube.",DE:"Wenn Sie mobil unterwegs sind, wird möglicherweise direkt die YouTube-App geöffnet."},go_to:{LATAM:"Ir a @spieler_Lc",USD:"Go to @spieler_Lc",PT:"Ir para @spieler_Lc",FR:"Aller sur @spieler_Lc",DE:"Gehe zu @spieler_Lc"},view_videos:{LATAM:"Ver videos",USD:"View videos",PT:"Ver vídeos",FR:"Voir les vidéos",DE:"Videos anzeigen"},want_to_find:{LATAM:"¿Qué vas a encontrar?",USD:"What will you find?",PT:"O que você vai encontrar?",FR:"Que trouverez-vous ?",DE:"Was werden Sie finden?"},bullet1:{LATAM:"Cómo buscar mutantes y copiar códigos sin errores.",USD:"How to search for mutants and copy codes without errors.",PT:"Como procurar mutantes e copiar códigos sem erros.",FR:"Comment rechercher des mutants et copier des codes sans erreur.",DE:"So suchen Sie nach Mutanten und kopieren Codes fehlerfrei."},bullet2:{LATAM:"Cómo usar filtros por genes.",USD:"How to use gene filters.",PT:"Como usar filtros por genes.",FR:"Comment utiliser les filtres par gènes.",DE:"So verwenden Sie Genfilter."},bullet3:{LATAM:"Consejos para usar emuladores y reducir el lag.",USD:"Tips for using emulators and reducing lag.",PT:"Dicas para usar emuladores e reduzir o lag.",FR:"Conseils pour utiliser des émulateurs et réduire le décalage (lag).",DE:"Tipps zur Verwendung von Emulatoren und zur Reduzierung von Lag."}};function cT(){const{region:a}=_t(),s=r=>{var o,d;return((o=Vf[r])==null?void 0:o[a])||((d=Vf[r])==null?void 0:d.USD)||""};return l.jsxs("div",{className:"flex flex-col gap-6",children:[l.jsxs("section",{className:"hero transition-all duration-700 !p-6 md:!p-12 relative overflow-hidden bg-gradient-to-br from-blue-brand/10 via-blue-brand-2/5 to-transparent border-blue-brand-2/20 shadow-blue-brand-2/5",children:[l.jsx("div",{className:"absolute top-0 right-0 p-8 opacity-20",children:l.jsx(or,{size:120,className:"text-blue-brand-2"})}),l.jsxs("div",{className:"eyebrow scale-90 md:scale-100",children:[l.jsx(or,{size:16,className:"text-blue-brand-2"}),l.jsx("span",{children:s("multimedia")})]}),l.jsxs("h1",{className:"text-4xl md:text-6xl font-black mt-2.5 mb-2.5 uppercase tracking-tighter leading-[0.95] text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-brand-2/80 to-blue-brand-2",children:[s("tutoriales_title1")," ",l.jsx("span",{className:"text-blue-brand-2",children:s("tutoriales_title2")})]}),l.jsx("p",{className:"text-muted max-w-2xl mx-auto px-4 opacity-80",children:s("tutoriales_desc")})]}),l.jsx(ea,{}),l.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[l.jsxs("section",{className:"panel flex flex-col gap-5 transition-all duration-300 border border-white/10 bg-white/[0.01] hover:border-blue-brand-2/30 hover:bg-white/[0.02]",children:[l.jsx("div",{className:"w-12 h-12 rounded-2xl flex items-center justify-center bg-white/8 text-red-500 shadow-lg shadow-red-500/10",children:l.jsx(or,{size:24})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-xl font-bold tracking-tight mb-2 text-white",children:s("youtube_channel")}),l.jsx("p",{className:"text-muted text-sm m-0 leading-relaxed opacity-90",children:s("youtube_channel_desc")})]}),l.jsxs("div",{className:"flex flex-wrap gap-3 mt-auto",children:[l.jsxs("a",{className:"btn btn-primary px-6 transition-all duration-200",target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/@spieler_Lc",children:[l.jsx(Yn,{size:18}),l.jsx("span",{children:s("go_to")})]}),l.jsxs("a",{className:"btn px-6 border-white/10 hover:border-blue-brand-2 hover:bg-blue-brand-2/10 transition-all duration-200",target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/@spieler_Lc/videos",children:[l.jsx(VG,{size:18}),l.jsx("span",{children:s("view_videos")})]})]})]}),l.jsxs("section",{className:"panel flex flex-col gap-5 transition-all duration-300 border border-white/10 bg-white/[0.01] hover:border-blue-brand-2/30 hover:bg-white/[0.02]",children:[l.jsx("div",{className:"w-12 h-12 rounded-2xl flex items-center justify-center bg-white/8 text-yellow-brand shadow-lg shadow-yellow-brand/10",children:l.jsx(WG,{size:24})}),l.jsx("h3",{className:"text-xl font-bold tracking-tight m-0 text-white",children:s("want_to_find")}),l.jsxs("ul",{className:"text-muted text-sm space-y-3 pl-5 list-disc marker:text-blue-brand-2/50",children:[l.jsx("li",{children:s("bullet1")}),l.jsx("li",{children:s("bullet2")}),l.jsx("li",{children:s("bullet3")})]})]})]})]})}const uT=[{id:"mutantes",num:"[1]",title:"Mutantes",desc:"Permite buscar mutantes, reemplazarlos por nombre o código y consultar categorías especiales.",children:[{id:"mutantes-hibridadora",num:"[1]",title:"Reemplazar Mutantes en Hibridadora",desc:"Accede a las opciones de reemplazo de especímenes en la estación de hibridación.",children:[{id:"op-hibridadora-nombre",num:"[1]",title:"Reemplazar (Buscar por Nombre)",desc:"Busca un mutante por su nombre e inyéctalo directamente en la ranura activa."},{id:"op-hibridadora-codigo",num:"[2]",title:"Reemplazar (Buscar por Codigo)",desc:"Especifica la clave o código identificador hexadecimal del mutante para inyectarlo."},{id:"op-hibridadora-lista",num:"[3]",title:"Lista de Mutantes (Solo Lista)",desc:"Muestra el listado de todos los especímenes registrados en el archivo de datos."}]},{id:"mutantes-tienda",num:"[2]",title:"Tienda de Mutantes",desc:"Visualiza la simulación de ofertas y paquetes completos disponibles para mutantes.",children:[{id:"op-tienda-paquetes",num:"[1]",title:"Todos los Paquetes de Mutantes"},{id:"op-tienda-todos",num:"[2]",title:"Todos los Mutantes"},{id:"op-tienda-platino",num:"[3]",title:"Paquete Platino"},{id:"op-tienda-creditos",num:"[4]",title:"Mutantes a Creditos - Seccion 1"},{id:"op-tienda-oro",num:"[5]",title:"Mutantes Meta y Comunes a Oro - Seccion 1"},{id:"op-tienda-monogen",num:"[6]",title:"Paquete Monogen Platino"}]},{id:"mutantes-especiales",num:"[3]",title:"Mutantes Especiales",desc:"Explora mutantes exclusivos, de eventos mensuales, neo monogenes e híbridos de élite.",children:[{id:"mutantes-especiales-exclusivos",num:"[1]",title:"Mutantes Exclusivos",desc:"Consola para activar mutantes legendarios y de colección ultra rara.",children:[{id:"op-exc-goliath",num:"[>]",title:"Goliath R Marciano Errante"},{id:"op-exc-juan",num:"[>]",title:"Juan Hielo R Deus Machina"},{id:"op-exc-paz",num:"[>]",title:"Capitan Paz R Nebulon"},{id:"op-exc-george",num:"[>]",title:"George Washington R Senor del Abismo"},{id:"op-exc-louis",num:"[>]",title:"Louis XVI R Senor del Abismo"},{id:"op-exc-mapach",num:"[>]",title:"Mapach Wik R Nebulon"},{id:"op-exc-santoctopus",num:"[>]",title:"Santoctopus R Deus Machina"},{id:"op-exc-genimal",num:"[>]",title:"Genimal R Senor del Abismo"},{id:"op-exc-hog",num:"[>]",title:"Hog the Ripper R Marciano Errante"},{id:"op-exc-tio",num:"[>]",title:"El Tio Sam R Marciano Errante"},{id:"op-exc-eva",num:"[>]",title:"Duplicado de Eva R Nebulon"},{id:"op-exc-sable",num:"[>]",title:"Sable R Deus Machina"},{id:"op-exc-artemisa",num:"[>]",title:"Artemisa R Deus Machina"},{id:"op-exc-claus",num:"[>]",title:"Mega Claus R Marciano Errante"},{id:"op-exc-aplastador",num:"[>]",title:"Aplastador R Senor del Abismo"},{id:"op-exc-spartac",num:"[>]",title:"Spartac R Senor del Abismo"},{id:"op-exc-geomega",num:"[>]",title:"Geomega R Nebulon"},{id:"op-exc-arcangel",num:"[>]",title:"Arcangel R Nebulon"},{id:"op-exc-diablo",num:"[>]",title:"Diablo R Deus Machina"},{id:"op-exc-norem",num:"[>]",title:"Norem R Deus Machina"},{id:"op-exc-surfista",num:"[>]",title:"Surfista del Espacio R Senor del Abismo"},{id:"op-exc-master",num:"[>]",title:"Master Paw R Marciano Errante"},{id:"op-exc-akai",num:"[>]",title:"Akai Bot R Deus Machina"},{id:"op-exc-kolossus",num:"[>]",title:"Kolossus R Nebulon"},{id:"op-exc-achabe",num:"[>]",title:"Capitan Achabe R Senor del Abismo"},{id:"op-exc-heimdall",num:"[>]",title:"Heimdall R Marciano Errante"},{id:"op-exc-oriax",num:"[>]",title:"Oriax R Deus Machina"},{id:"op-exc-caliburn",num:"[>]",title:"Caliburn Ex R Nebulon"},{id:"op-exc-chocoleon",num:"[>]",title:"Generalisimo Chocoleon R Senor del Abismo"}]},{id:"mutantes-especiales-mensuales",num:"[2]",title:"Mutantes Mensuales 2024 - 2025",desc:"Elige entre los mutantes liberados mensualmente como recompensa de temporada.",children:[{id:"op-men-amistad",num:"[>]",title:"Amistad Sin Limites R Mutante Mensual"},{id:"op-men-black",num:"[>]",title:"Black Ice R Mutante Mensual"},{id:"op-men-hidrira",num:"[>]",title:"Hidrira R Mutante Mensual"},{id:"op-men-nexo",num:"[>]",title:"Nexo Orbital R Mutante Mensual"},{id:"op-men-fiera",num:"[>]",title:"Fiera del Campo R Mutante Mensual"},{id:"op-men-bestial",num:"[>]",title:"Senor Bestial R Mutante Mensual"},{id:"op-men-emperador",num:"[>]",title:"Emperador Helado R Mutante Mensual"},{id:"op-men-profesor",num:"[>]",title:"Profesor Cronomantico R Mutante Mensual"},{id:"op-men-bearsikk",num:"[>]",title:"Bearsikk Sikleast R Mutante Mensual"},{id:"op-men-sakuraboshi",num:"[>]",title:"Sakuraboshi R Mutante Mensual"},{id:"op-men-nucleo",num:"[>]",title:"Nucleo Serafico R Mutante Mensual"},{id:"op-men-helidron",num:"[>]",title:"Helidron R Mutante Mensual"}]},{id:"op-neo-monogenes",num:"[3]",title:"Neo Monogenes",desc:"Accede a la sección de reactivos monogenéticos avanzados."},{id:"op-buranka-britany",num:"[4]",title:"Buranka y Britany",desc:"Inyectar el paquete especial de gemelas Buranka & Britany."}]}]},{id:"reactor",num:"[2]",title:"Reactor",desc:"Agrupa las herramientas relacionadas con la preparación, modificación y uso del reactor.",children:[{id:"op-reactor-cambiar",num:"[1]",title:"Cambiar Reactor (Preparar)",desc:"Prepara los archivos internos para cambiar el reactor."},{id:"op-reactor-hackear",num:"[2]",title:"Hackear Reactor (Aplicar el Cambio)",desc:"Aplica de inmediato los cambios y actualiza el estado del reactor."},{id:"op-reactor-fichas",num:"[3]",title:"Fichas Reactor",desc:"Desbloquea o simula la obtención de fichas especiales para el reactor."},{id:"op-reactor-preparar",num:"[4]",title:"Preparar y Pelear",desc:"Secuencia automatizada para listar especímenes y entrar en batalla directa."},{id:"op-reactor-salas",num:"[5]",title:"Salas Reactor",desc:"Configura o cambia la sala activa para torneos de reactor."}]},{id:"cajas",num:"[3]",title:"Cajas y Paquetes",desc:"Incluye cajas especiales, paquetes generales y opciones adicionales de la tienda.",children:[{id:"cajas-desbloquear",num:"[1]",title:"Desbloquear Cajas",desc:"Consola para desbloquear todos los tipos de cajas especiales disponibles.",children:[{id:"op-cajas-desb-todas",num:"[1]",title:"Activar Todas las Cajas"},{id:"op-cajas-desb-g1",num:"[2]",title:"Grupo 1: Cajas de Aniversario y Navidad"},{id:"op-cajas-desb-g2",num:"[3]",title:"Grupo 2: Cajas Especiales y Elite"}]},{id:"cajas-generales",num:"[2]",title:"Paquetes Generales",desc:"Explora ofertas para potenciar velocidad, obtención de cajas navideñas, escudos y experiencia.",children:[{id:"op-cajas-gen-aniv",num:"[1]",title:"Cajas de Aniversario y Navidad"},{id:"op-cajas-gen-rapidez",num:"[2]",title:"Paquete Rapidez Nivel 5"},{id:"op-cajas-gen-escudo",num:"[3]",title:"Paquete Escudo Especial Nivel 5"},{id:"op-cajas-gen-exp",num:"[4]",title:"Paquetes de EXP y Creditos"},{id:"op-cajas-gen-misteriosas",num:"[5]",title:"Cajas Misteriosas"},{id:"op-cajas-gen-ofertas",num:"[6]",title:"Ofertas y Paquetes"},{id:"op-cajas-gen-fortalecer",num:"[7]",title:"Paquete Fortalecimiento Nivel 5"}]},{id:"cajas-especiales",num:"[3]",title:"Paquetes Especiales",desc:"Accede a ofertas secretas y paquetes de cajas misteriosas secundarias.",children:[{id:"op-cajas-esp-mas-misterio",num:"[1]",title:"Mas Cajas Misteriosas"}]}]},{id:"recursos",num:"[4]",title:"Recursos, Fichas y Mejoras",desc:"Reune recursos, fichas, mejoras y elementos especiales.",children:[{id:"op-rec-laboratorio",num:"[1]",title:"Laboratorio Medico",desc:"Desbloquea mejoras completas para el hospital de regeneración instantánea."},{id:"op-rec-horno",num:"[2]",title:"Horno de Oro",desc:"Simula el incremento o el funcionamiento acelerado del horno de oro."},{id:"op-rec-velocidad",num:"[3]",title:"Velocidad x5",desc:"Modifica la velocidad de reproducción y actividades por cinco veces."},{id:"op-rec-compras",num:"[4]",title:"Compras Ilimitadas",desc:"Simula la obtención de bonificaciones ilimitadas en la tienda de juego."},{id:"op-rec-mutosterona",num:"[5]",title:"Mutosterona",desc:"Añade mutosterona simulada para procesos de evolución veloz."},{id:"op-rec-estrellas",num:"[6]",title:"Elstrellas",desc:"Aumenta el medidor de estrellas para canjes de premios raros."},{id:"op-rec-caja-creditos",num:"[7]",title:"Caja Creditos",desc:"Obtén cajas de créditos masivos para tu cuenta de mutantes."},{id:"op-[#a1b3cb]",num:"[8]",title:"Zona Deluxe",desc:"Inyectar el pase exclusivo simulado de zona VIP de mutantes."},{id:"op-rec-jackpot",num:"[9]",title:"Fichas Jackpot (Recurso)",desc:"Genera fichas ilimitadas para la ruleta del Jackpot."},{id:"op-rec-xp",num:"[10]",title:"Frascos XP (Recurso)",desc:"Añade cargamentos de frascos de experiencia máxima."},{id:"op-rec-reto",num:"[11]",title:"Fichas Reto",desc:"Desbloquea tiquets y fichas ilimitadas para la arena del reto."},{id:"op-reactor-fichas",num:"[12]",title:"Fichas Reactor",desc:"Desbloquea o simula la obtención de fichas especiales para el reactor."}]},{id:"orbes",num:"[5]",title:"Orbes",desc:"Permite conocer las opciones relacionadas con orbes básicos, avanzados y paquetes.",children:[{id:"op-orbes-xp4",num:"[1]",title:"Orbe XP Nivel 4",desc:"Obtén orbes premium de experiencia multiplicada de nivel 4."},{id:"op-orbes-b6",num:"[2]",title:"Orbes Basicos Nivel 6",desc:"Introduce un lote de orbes básicos de grado 6."},{id:"op-orbes-atk-vd-crit",num:"[3]",title:"Orbes ATK / VD / CRIT",desc:"Inyectar orbes de bonificación estadística mixta."},{id:"orbes-paquetes",num:"[4]",title:"Paquetes de Orbes",desc:"Elige un pack concentrado de gemas de nivel 6 o 7.",children:[{id:"op-orb-p-b6",num:"[1]",title:"Paquete de Orbes Basicos Nivel 6"},{id:"op-orb-p-poder6",num:"[2]",title:"Paquete de Orbes de Poder Nivel 6"},{id:"op-orb-p-xp4",num:"[3]",title:"Paquete de Orbes de EXP Nivel 4"},{id:"op-orb-p-b7",num:"[4]",title:"Paquete de Orbes Basicos Nivel 7"}]},{id:"orbes-n7",num:"[5]",title:"Orbes Nivel 7",desc:"Introduce los orbes individuales más potentes del juego.",children:[{id:"op-orb-n7-atk",num:"[1]",title:"Ataque Nivel 7"},{id:"op-orb-n7-vida",num:"[2]",title:"Vida Nivel 7"},{id:"op-orb-n7-crit",num:"[3]",title:"Critico Nivel 7"},{id:"op-orb-n7-xp6",num:"[4]",title:"XP Nivel 6"}]}]},{id:"acerca",num:"[6]",title:"Acerca de",desc:"Muestra detalles internos del simulador, su versión educativa actual y créditos de Smith Luque.",children:[{id:"op-acerca-info",num:"[1]",title:"Informacion del Script",desc:"Consulta la nota aclaratoria, créditos del desarrollador y estado de prueba."}]}],Ef={mutantes:{title:{LATAM:"Mutantes",USD:"Mutants",PT:"Mutantes",FR:"Mutants",DE:"Mutanten"},desc:{LATAM:"Permite buscar mutantes, reemplazarlos por nombre o código y consultar categorías especiales.",USD:"Allows you to search for mutants, replace them by name or code and consult special categories.",PT:"Permite buscar mutantes, substituí-los por nome ou código e consultar categorias especiais.",FR:"Permet de rechercher des mutants, de les remplacer par nom ou par code et de consulter des catégories spéciales.",DE:"Ermöglicht die Suche nach Mutanten, deren Ersetzung nach Name oder Code und die Einsicht in spezielle Kategorien."}},"mutantes-hibridadora":{title:{LATAM:"Reemplazar Mutantes en Hibridadora",USD:"Replace Mutants in Breeding Center",PT:"Substituir Mutantes na Hibridadora",FR:"Remplacer les Mutants dans la Couveuse",DE:"Mutanten im Brutzentrum ersetzen"},desc:{LATAM:"Accede a las opciones de reemplazo de especímenes en la estación de hibridación.",USD:"Access specimen replacement options in the breeding station.",PT:"Acesse as opções de substituição de espécimes na estação de hibridização.",FR:"Accédez aux options de remplacement de spécimens dans la station de croisement.",DE:"Greifen Sie auf Optionen zum Austausch von Proben im Brutzentrum zu."}},"op-hibridadora-nombre":{title:{LATAM:"Reemplazar (Buscar por Nombre)",USD:"Replace (Search by Name)",PT:"Substituir (Buscar por Nome)",FR:"Remplacer (Rechercher par Nom)",DE:"Ersetzen (Suche nach Name)"},desc:{LATAM:"Busca un mutante por su nombre e inyéctalo directamente en la ranura activa.",USD:"Search for a mutant by name and inject it directly into the active slot.",PT:"Busque um mutante pelo nome e injete-o diretamente no espaço activo.",FR:"Recherchez un mutant par nom et injectez-le directement dans l'emplacement actif.",DE:"Suchen Sie eine Mutante nach Name und fügen Sie sie direkt in den aktiven Slot ein."}},"op-hibridadora-codigo":{title:{LATAM:"Reemplazar (Buscar por Codigo)",USD:"Replace (Search by Code)",PT:"Substituir (Buscar por Código)",FR:"Remplacer (Rechercher par Code)",DE:"Ersetzen (Suche nach Code)"},desc:{LATAM:"Especifica la clave o código identificador hexadecimal del mutante para inyectarlo.",USD:"Specify the mutant's hexadecimal key or ID code to inject it.",PT:"Especifique a chave ou código ID hexadecimal do mutante para injetá-lo.",FR:"Spécifiez la clé ou le code d'identification hexadécimal du mutant pour l'injecter.",DE:"Geben Sie den Hex-Schlüssel oder ID-Code der Mutante ein, um sie zu injizieren."}},"op-hibridadora-lista":{title:{LATAM:"Lista de Mutantes (Solo Lista)",USD:"Mutant List (List Only)",PT:"Lista de Mutantes (Apenas Lista)",FR:"Liste des Mutants (Liste seule)",DE:"Mutantenliste (Nur Liste)"},desc:{LATAM:"Muestra el listado de todos los especímenes registrados en el archivo de datos.",USD:"Shows the list of all registered specimens in the data file.",PT:"Mostra a lista de todos os espécimes registrados no arquivo de dados.",FR:"Affiche la liste de tous les spécimens enregistrés dans le fichier de données.",DE:"Zeigt die Liste aller registrierten Proben in der Datendatei."}},"mutantes-tienda":{title:{LATAM:"Tienda de Mutantes",USD:"Mutants Shop",PT:"Loja de Mutantes",FR:"Boutique de Mutants",DE:"Mutantenshop"},desc:{LATAM:"Visualiza la simulación de ofertas y paquetes completos disponibles para mutantes.",USD:"Visualize simulation grids of offers and complete packages available for mutants.",PT:"Visualiza o grid de simulação de ofertas e pacotes completos disponíveis para mutantes.",FR:"Visualisez la simulation d'offres et de packs complets disponibles pour les mutants.",DE:"Visualisieren Sie die Simulation von Angeboten und Komplettpaketen für Mutanten."}},"op-tienda-paquetes":{title:{LATAM:"Todos los Paquetes de Mutantes",USD:"All Mutant Packages",PT:"Todos os Pacotes de Mutantes",FR:"Tous les Packs de Mutants",DE:"Alle Mutantenpakete"}},"op-tienda-todos":{title:{LATAM:"Todos los Mutantes",USD:"All Mutants",PT:"Todos os Mutantes",FR:"Tous os Mutantes",DE:"Alle Mutanten"}},"op-tienda-platino":{title:{LATAM:"Paquete Platino",USD:"Platinum Pack",PT:"Pacote Platina",FR:"Pack Platine",DE:"Platin-Paket"}},"op-tienda-creditos":{title:{LATAM:"Mutantes a Creditos - Seccion 1",USD:"Mutants for Credits - Section 1",PT:"Mutantes por Créditos - Seção 1",FR:"Mutants pour Crédits - Section 1",DE:"Mutanten für Kredite - Sektion 1"}},"op-tienda-oro":{title:{LATAM:"Mutantes Meta y Comunes a Oro - Seccion 1",USD:"Meta & Common Mutants to Gold - Section 1",PT:"Mutantes Meta e Comuns para Ouro - Seção 1",FR:"Mutants Méta & Communs en Or - Section 1",DE:"Meta & Gewöhnliche Mutanten zu Gold - Sektion 1"}},"op-tienda-monogen":{title:{LATAM:"Paquete Monogen Platino",USD:"Platinum Monogen Pack",PT:"Pacote Monogen Platina",FR:"Pack Monogen Platine",DE:"Platin-Monogen-Paket"}},"mutantes-especiales":{title:{LATAM:"Mutantes Especiales",USD:"Special Mutants",PT:"Mutantes Especiais",FR:"Mutants Spéciaux",DE:"Spezielle Mutanten"},desc:{LATAM:"Explora mutantes exclusivos, de eventos mensuales, neo monogenes e híbridos de élite.",USD:"Explore exclusive mutants, monthly event rewards, neo monogens, and elite hybrids.",PT:"Explore mutantes exclusivos, prêmios mensais, neo monogens e híbridos de elite.",FR:"Explorez des mutants exclusifs, des récompenses mensuelles, des néo monogènes et des hybrides d'élite.",DE:"Entdecken Sie exklusive Mutanten, monatliche Belohnungen, Neo-Monogene und Elite-Hybride."}},"mutantes-especiales-exclusivos":{title:{LATAM:"Mutantes Exclusivos",USD:"Exclusive Mutants",PT:"Mutantes Exclusivos",FR:"Mutants Exclusifs",DE:"Exklusive Mutanten"},desc:{LATAM:"Consola para activar mutantes legendarios y de colección ultra rara.",USD:"Console to activate legendary and ultra-rare collectible mutants.",PT:"Console para ativar mutantes lendários e de coleção ultra rara.",FR:"Console pour activer des mutants légendaires et de collection ultra-rare.",DE:"Konsole zur Aktivierung legendärer und extrem seltener Sammlermutanten."}},"mutantes-especiales-mensuales":{title:{LATAM:"Mutantes Mensuales 2024 - 2025",USD:"Monthly Mutants 2024 - 2025",PT:"Mutantes Mensais 2024 - 2025",FR:"Mutants Mensuels 2024 - 2025",DE:"Monatliche Mutanten 2024 - 2025"},desc:{LATAM:"Elige entre los mutantes liberados mensualmente como recompensa de temporada.",USD:"Choose among mutants released monthly as seasonal rewards.",PT:"Escolha entre os mutantes liberados mensalmente como recompensa de temporada.",FR:"Choisissez parmi les mutants libérés chaque mois en récompense de saison.",DE:"Wählen Sie aus den monatlich als Saisonbelohnung freigegebenen Mutanten."}},"op-neo-monogenes":{title:{LATAM:"Neo Monogenes",USD:"Neo Monogens",PT:"Neo Monogens",FR:"Néo Monogènes",DE:"Neo-Monogene"},desc:{LATAM:"Accede a la sección de reactivos monogenéticos avanzados.",USD:"Access the advanced monogenetic reagents section.",PT:"Acesse a seção de reagentes monogenéticos avançados.",FR:"Accédez à la section des réactifs monogénétiques avancés.",DE:"Greifen Sie auf den Abschnitt für fortgeschrittene monogenetische Reagenzien zu."}},"op-buranka-britany":{title:{LATAM:"Buranka y Britany",USD:"Buranka and Britany",PT:"Buranka e Britany",FR:"Buranka et Britany",DE:"Buranka und Britany"},desc:{LATAM:"Inyectar el paquete especial de gemelas Buranka & Britany.",USD:"Inject the special Buranka & Britany twins package.",PT:"Injetar o pacote especial das gêmeas Buranka & Britany.",FR:"Injectez le pack spécial des jumelles Buranka & Britany.",DE:"Injizieren Sie das spezielle Buranka & Britany Zwillinge-Paket."}},reactor:{title:{LATAM:"Reactor",USD:"Reactor",PT:"Reator",FR:"Réacteur",DE:"Reaktor"},desc:{LATAM:"Agrupa las herramientas relacionadas con la preparación, modificación y uso del reactor.",USD:"Groups simulator tools related to the preparation, modification, and use of the reactor.",PT:"Agrupa ferramentas relacionadas à preparação, modificação e uso do reator.",FR:"Regroupe les outils liés à la préparation, modification et utilisation du réacteur.",DE:"Gruppiert Werkzeuge zur Vorbereitung, Modifikation und Nutzung des Reaktors."}},"op-reactor-cambiar":{title:{LATAM:"Cambiar Reactor (Preparar)",USD:"Change Reactor (Prepare)",PT:"Alterar Reator (Preparar)",FR:"Changer de réacteur (Préparer)",DE:"Reaktor wechseln (Vorbereiten)"},desc:{LATAM:"Prepara los archivos internos para cambiar el reactor.",USD:"Prepare internal files to change the active reactor.",PT:"Prepara os arquivos internos para alterar o reator ativo.",FR:"Prépare les fichiers internes pour changer le réacteur actif.",DE:"Bereitet die internen Dateien vor, um den aktiven Reaktor zu wechseln."}},"op-reactor-hackear":{title:{LATAM:"Hackear Reactor (Aplicar el Cambio)",USD:"Hack Reactor (Apply Change)",PT:"Hackear Reator (Aplicar Mudança)",FR:"Pirater le réacteur (Appliquer)",DE:"Reaktor hacken (Wechsel anwenden)"},desc:{LATAM:"Aplica de inmediato los cambios y actualiza el estado del reactor.",USD:"Immediately apply the changes and update the reactor status.",PT:"Aplica imediatamente as mudanças e atualiza o estado do reator.",FR:"Applique immédiatement les changements et met à jour l'état du réacteur.",DE:"Wendet die Änderungen sofort an und aktualisiert den Reaktorstatus."}},"op-reactor-fichas":{title:{LATAM:"Fichas Reactor",USD:"Reactor Tokens",PT:"Fichas do Reator",FR:"Jetons de Réacteur",DE:"Reaktor-Token"},desc:{LATAM:"Desbloquea o simula la obtención de fichas especiales para el reactor.",USD:"Unlock or simulate obtaining special tokens for the reactor.",PT:"Desbloqueie ou simule a obtenção de fichas especiais para o reator.",FR:"Débloquez ou simulez l'obtention de jetons spéciaux pour le réacteur.",DE:"Schalten Sie spezielle Token für den Reaktor frei oder simulieren Sie deren Erhalt."}},"op-reactor-preparar":{title:{LATAM:"Preparar y Pelear",USD:"Prepare and Fight",PT:"Preparar e Lutar",FR:"Préparer et Combattre",DE:"Vorbereiten und Kämpfen"},desc:{LATAM:"Secuencia automatizada para listar especímenes y entrar en batalla directa.",USD:"Automated sequence to list specimens and enter straight into battle.",PT:"Sequência automatizada para listar espécimes e entrar em batalha direta.",FR:"Séquence automatisée pour lister les spécimens et entrer directement en combat.",DE:"Automatisierte Sequenz zur Auflistung von Proben und Einstieg in den Direktkampf."}},"op-reactor-salas":{title:{LATAM:"Salas Reactor",USD:"Reactor Rooms",PT:"Salas do Reator",FR:"Salles de Réacteur",DE:"Reaktorräume"},desc:{LATAM:"Configura o cambia la sala activa para torneos de reactor.",USD:"Configure or change the active room for reactor tournaments.",PT:"Configure ou altere a sala ativa para torneios de reator.",FR:"Configurez ou changez la salle active pour les tournois de réacteur.",DE:"Konfigurieren oder ändern Sie den aktiven Raum für Reaktorturniere."}},cajas:{title:{LATAM:"Cajas y Paquetes",USD:"Boxes & Bundles",PT:"Caixas & Pacotes",FR:"Boîtes & Packs",DE:"Kisten & Pakete"},desc:{LATAM:"Incluye cajas especiales, paquetes generales y opciones adicionales de la tienda.",USD:"Includes special boxes, general bundle options, and additional shop choices.",PT:"Inclui caixas especiais, pacotes gerais e opções adicionais de loja.",FR:"Comprend des boîtes spéciales, des packs généraux et des options de boutique.",DE:"Beinhaltet spezielle Kisten, allgemeine Pakete und zusätzliche Shop-Optionen."}},"cajas-desbloquear":{title:{LATAM:"Desbloquear Cajas",USD:"Unlock Boxes",PT:"Desbloquear Caixas",FR:"Débloquer des Boîtes",DE:"Kisten freischalten"},desc:{LATAM:"Consola para desbloquear todos los tipos de cajas especiales disponibles.",USD:"Console to unlock all types of special chests and boxes available.",PT:"Console para desbloquear todos os tipos de caixas especiais disponíveis.",FR:"Console pour débloquer tous les types de coffres et boîtes disponibles.",DE:"Konsole zum Freischalten aller verfügbaren Arten von Spezialkisten."}},"op-cajas-desb-todas":{title:{LATAM:"Activar Todas las Cajas",USD:"Activate All Boxes",PT:"Ativar Todas as Caixas",FR:"Activer Toutes les Boîtes",DE:"Alle Kisten aktivieren"}},"op-cajas-desb-g1":{title:{LATAM:"Grupo 1: Cajas de Aniversario y Navidad",USD:"Group 1: Anniversary & Christmas Boxes",PT:"Grupo 1: Caixas de Aniversário e Natal",FR:"Groupe 1 : Boîtes d'Anniversaire & Noël",DE:"Gruppe 1: Jubiläums- & Weihnachtskisten"}},"op-cajas-desb-g2":{title:{LATAM:"Grupo 2: Cajas Especiales y Elite",USD:"Group 2: Special & Elite Boxes",PT:"Grupo 2: Caixas Especiais e Elite",FR:"Groupe 2 : Boîtes Spéciales & Élite",DE:"Gruppe 2: Spezial- & Elitekisten"}},"cajas-generales":{title:{LATAM:"Paquetes Generales",USD:"General Bundles",PT:"Pacotes Gerais",FR:"Packs Généraux",DE:"Allgemeine Pakete"},desc:{LATAM:"Explora ofertas para potenciar velocidad, obtención de cajas navideñas, escudos y experiencia.",USD:"Explore offers to boost speed, obtain Christmas boxes, shields, and experience points.",PT:"Explore ofertas para aumentar velocidade, obter caixas de Natal, escudos e experiência.",FR:"Découvrez les offres pour booster la vitesse, obtenir des boîtes de Noël, des boucliers et de l'XP.",DE:"Entdecken Sie Angebote zur Erhöhung der Geschwindigkeit, Weihnachtskisten, Schilde und XP."}},"op-cajas-gen-aniv":{title:{LATAM:"Cajas de Aniversario y Navidad",USD:"Anniversary & Christmas Boxes",PT:"Caixas de Aniversário e Natal",FR:"Boîtes d'Anniversaire et de Noël",DE:"Jubiläums- & Weihnachtskisten"}},"op-cajas-gen-rapidez":{title:{LATAM:"Paquete Rapidez Nivel 5",USD:"Level 5 Speed Bundle",PT:"Pacote Velocidade Nível 5",FR:"Pack de Vitesse Niveau 5",DE:"Geschwindigkeitspaket Stufe 5"}},"op-cajas-gen-escudo":{title:{LATAM:"Paquete Escudo Especial Nivel 5",USD:"Level 5 Special Shield Bundle",PT:"Pacote de Escudo Especial Nível 5",FR:"Pack Bouclier Spécial Niveau 5",DE:"Spezialschild-Paket Stufe 5"}},"op-cajas-gen-exp":{title:{LATAM:"Paquetes de EXP y Creditos",USD:"EXP & Credits Bundles",PT:"Pacotes de EXP e Créditos",FR:"Packs d'XP & Crédits",DE:"EXP- & Kreditpakete"}},"op-cajas-gen-misteriosas":{title:{LATAM:"Cajas Misteriosas",USD:"Mystery Chests",PT:"Caixas Misteriosas",FR:"Boîtes Mystérieuses",DE:"Geheimnisvolle Kisten"}},"op-cajas-gen-ofertas":{title:{LATAM:"Ofertas y Paquetes",USD:"Offers & Special Packages",PT:"Ofertas e Pacotes",FR:"Offres & Packs",DE:"Angebote & Pakete"}},"op-cajas-gen-fortalecer":{title:{LATAM:"Paquete Fortalecimiento Nivel 5",USD:"Level 5 Strength Bundle",PT:"Pacote Fortalecimento Nível 5",FR:"Pack Renforcement Niveau 5",DE:"Stärkungspaket Stufe 5"}},"cajas-especiales":{title:{LATAM:"Paquetes Especiales",USD:"Special Bundles",PT:"Pacotes Especiais",FR:"Packs Spéciaux",DE:"Spezielle Pakete"},desc:{LATAM:"Accede a ofertas secretas y paquetes de cajas misteriosas secundarias.",USD:"Access secret offers and secondary mystery chest bundles.",PT:"Acesse ofertas secretas e pacotes de caixas misteriosas secundárias.",FR:"Accédez à des offres secrètes et à des packs de boîtes mystères secondaires.",DE:"Greifen Sie auf geheime Angebote und sekundäre geheimnisvolle Kistenpakete zu."}},"op-cajas-esp-mas-misterio":{title:{LATAM:"Mas Cajas Misteriosas",USD:"More Mystery Chests",PT:"Mais Caixas Misteriosas",FR:"Plus de Boîtes Mystérieuses",DE:"Mehr geheimnisvolle Kisten"}},recursos:{title:{LATAM:"Recursos, Fichas y Mejoras",USD:"Resources, Tokens & Upgrades",PT:"Recursos, Fichas & Melhorias",FR:"Ressources, Jetons & Améliorations",DE:"Ressourcen, Token & Upgrades"},desc:{LATAM:"Reune recursos, fichas, mejoras y elementos especiales.",USD:"Gathers resources, gold ovens, tokens, and medical upgrades.",PT:"Reúne recursos, fornos de ouro, fichas e melhorias médicas.",FR:"Rassemble les ressources, fours d'or, jetons et améliorations médicales.",DE:"Sammelt Ressourcen, Goldöfen, Token und medizinische Upgrades."}},"op-rec-laboratorio":{title:{LATAM:"Laboratorio Medico",USD:"Medical Lab",PT:"Laboratório Médico",FR:"Laboratoire Médical",DE:"Medizinisches Labor"},desc:{LATAM:"Desbloquea mejoras completas para el hospital de regeneración instantánea.",USD:"Unlock full upgrades for the instant regeneration hospital slot.",PT:"Desbloqueie melhorias completas para o hospital de regeneração instantânea.",FR:"Débloquez des améliorations complètes pour l'hôpital de régénération instantanée.",DE:"Schalten Sie vollständige Upgrades für das sofortige Regenerationskrankenhaus frei."}},"op-rec-horno":{title:{LATAM:"Horno de Oro",USD:"Gold Oven",PT:"Forno de Ouro",FR:"Four de l'Or",DE:"Goldofen"},desc:{LATAM:"Simula el incremento o el funcionamiento acelerado del horno de oro.",USD:"Simulates the increment or accelerated production of the gold oven.",PT:"Simula o aumento ou funcionamento acelerado do forno de ouro.",FR:"Simule l'augmentation ou le fonctionnement accéléré du four de l'or.",DE:"Simuliert die Erhöhung oder beschleunigte Produktion des Goldofens."}},"op-rec-velocidad":{title:{LATAM:"Velocidad x5",USD:"Speed 5x",PT:"Velocidade x5",FR:"Vitesse x5",DE:"Geschwindigkeit 5x"},desc:{LATAM:"Modifica la velocidad de reproducción y actividades por cinco veces.",USD:"Modify reproduction speed and in-game activities by five times.",PT:"Modifique a velocidade de reprodução e atividades por cinco vezes.",FR:"Modifiez la vitesse de reproduction et les activités en jeu par cinq.",DE:"Ändern Sie die Fortpflanzungsgeschwindigkeit und In-Game-Aktivitäten um das Fünffache."}},"op-rec-compras":{title:{LATAM:"Compras Ilimitadas",USD:"Unlimited Purchases",PT:"Compras Ilimitadas",FR:"Achats Illimités",DE:"Unbegrenzte Käufe"},desc:{LATAM:"Simula la obtención de bonificaciones ilimitadas en la tienda de juego.",USD:"Simulate getting unlimited token points rewards in the virtual shop.",PT:"Simule a obtenção de recompensas ilimitadas na loja de jogos.",FR:"Simulez l'obtention de récompenses illimitées dans la boutique virtuelle.",DE:"Simulieren Sie den Erhalt unbegrenzter Belohnungen im virtuellen Shop."}},"op-rec-mutosterona":{title:{LATAM:"Mutosterona",USD:"Mutosterona Upgrade",PT:"Mutosterona",FR:"Mutostérone",DE:"Mutosteron-Upgrade"},desc:{LATAM:"Añade mutosterona simulada para procesos de evolución veloz.",USD:"Add simulated mutosterona packs for instant evolution processes.",PT:"Adicione pacotes de mutosterona simulados para processos rápidos de evolução.",FR:"Ajoutez des packs de mutostérone simulés pour les processus d'évolution rapide.",DE:"Fügen Sie simulierte Mutosteron-Pakete für sofortige Evolutionsprozesse hinzu."}},"op-rec-estrellas":{title:{LATAM:"Estrellas",USD:"Stars Oven Meter",PT:"Estrelas",FR:"Étoiles",DE:"Sterne-Meter"},desc:{LATAM:"Aumenta el medidor de estrellas para canjes de premios raros.",USD:"Boost the star level meter to exchange for rare mutant items.",PT:"Aumente o medidor de estrelas para trocar por itens mutantes raros.",FR:"Augmentez le compteur d'étoiles pour échanger contre des objets rares.",DE:"Erhöhen Sie den Sternenanzeiger, um gegen seltene Mutantenobjekte einzutauschen."}},"op-rec-caja-creditos":{title:{LATAM:"Caja Creditos",USD:"Credits Box Pack",PT:"Caixa de Créditos",FR:"Boîte de Crédits",DE:"Kredite-Kiste"},desc:{LATAM:"Obtén cajas de créditos masivos para tu cuenta de mutantes.",USD:"Obtain massive simulated credit chests for the mutant roster.",PT:"Obtenha caixas de créditos massivos para sua conta de mutantes.",FR:"Obtenez des coffres de crédits massifs pour votre compte de mutants.",DE:"Erhalten Sie massive Kreditkisten für Ihr Mutantenkonto."}},"op-[#a1b3cb]":{title:{LATAM:"Zona Deluxe",USD:"Deluxe VIP Zone",PT:"Zona VIP Deluxe",FR:"Zone VIP Deluxe",DE:"Deluxe-VIP-Zone"},desc:{LATAM:"Inyectar el pase exclusivo simulado de zona VIP de mutantes.",USD:"Inject the simulated VIP zone exclusive pass for elite research.",PT:"Injetar o passe exclusivo simulado da zona VIP de mutantes.",FR:"Injectez le pass exclusif simulé de la zone VIP pour mutants élites.",DE:"Injizieren Sie den exklusiven Simulator-VIP-Zonen-Pass für Elite-Forschung."}},"op-rec-jackpot":{title:{LATAM:"Fichas Jackpot (Recurso)",USD:"Jackpot Tokens (Resource)",PT:"Fichas Jackpot (Recurso)",FR:"Jetons de Jackpot (Ressource)",DE:"Jackpot-Token (Ressource)"},desc:{LATAM:"Genera fichas ilimitadas para la ruleta del Jackpot.",USD:"Generate infinite credits and tokens for the Jackpot spin-wheel.",PT:"Gere fichas ilimitadas para a roleta do Jackpot.",FR:"Générez des jetons infinis pour la roulette de Jackpot.",DE:"Generieren Sie unbegrenzte Token für das Jackpot-Glücksrad."}},"op-rec-xp":{title:{LATAM:"Frascos XP (Recurso)",USD:"XP Flasks (Resource)",PT:"Frascos XP (Recurso)",FR:"Flacons d'XP (Ressource)",DE:"XP-Fläschchen (Ressource)"},desc:{LATAM:"Añade cargamentos de frascos de experiencia máxima.",USD:"Adds shipments of maximum experience multiplier potions.",PT:"Adiciona carregamentos de frascos de experiência máxima.",FR:"Ajoute des cargaisons de potions d'expérience maximale.",DE:"Fügt Lieferungen von Tränken mit maximalem Erfahrungsmultiplikator hinzu."}},"op-rec-reto":{title:{LATAM:"Fichas Reto",USD:"Challenge Tokens",PT:"Fichas Desafio",FR:"Jetons Défi",DE:"Herausforderung-Token"},desc:{LATAM:"Desbloquea tiquets y fichas ilimitadas para la arena del reto.",USD:"Unlocks unlimited passes and action marks for the challenge arena.",PT:"Desbloqueie passes ilimitados e fichas de ação para a arena de desafio.",FR:"Débloque des passes illimités et jetons pour l'arène de défi.",DE:"Schaltet unbegrenzte Pässe und Token für die Herausforderungsarena frei."}},orbes:{title:{LATAM:"Orbes",USD:"Orbs Inventory",PT:"Orbes",FR:"Graines d'Orbes",DE:"Runeorbs-Inventar"},desc:{LATAM:"Permite conocer las opciones relacionadas con orbes básicos, avanzados y paquetes.",USD:"Provides choices about basic, advanced power orbs, and packages.",PT:"Oferece escolhas sobre orbes básicos, avançados e pacotes.",FR:"Propose des choix sur les orbes basiques, avancés et les paquets.",DE:"Bietet Optionen zu einfachen, fortgeschrittenen Orbs und Paketen."}},"op-orbes-xp4":{title:{LATAM:"Orbe XP Nivel 4",USD:"Level 4 XP Orb",PT:"Orbe de EXP Nível 4",FR:"Orbe d'XP Niveau 4",DE:"EP-Orb Stufe 4"},desc:{LATAM:"Obtén orbes premium de experiencia multiplicada de nivel 4.",USD:"Obtain premium high-tier level 4 EXP multiplying spheres.",PT:"Obtenha esferas premium de EXP de nível 4.",FR:"Obtenez des sphères premium d'XP de niveau 4.",DE:"Erhalten Sie premium EP-Kugeln der Stufe 4."}},"op-orbes-b6":{title:{LATAM:"Orbes Basicos Nivel 6",USD:"Level 6 Basic Orbs Pack",PT:"Orbes Básicos Nível 6",FR:"Orbes Basiques Niveau 6",DE:"Basische Orbs Stufe 6"},desc:{LATAM:"Introduce un lote de orbes básicos de grado 6.",USD:"Introduces a container of standard grade-6 stat boost orbs.",PT:"Introduz um lote de orbes básicos de grau 6.",FR:"Introduit un lot d'orbes basiques de degré 6.",DE:"Führt eine Ladung von Orbs der Stufe 6 ein."}},"op-orbes-atk-vd-crit":{title:{LATAM:"Orbes ATK / VD / CRIT",USD:"Mix ATK / LIFE / CRIT Orbs",PT:"Orbes ATK / VID / CRIT",FR:"Orbes ATK / VIE / CRIT",DE:"ATK / LEBEN / CRIT Orbs-Mix"},desc:{LATAM:"Inyectar orbes de bonificación estadística mixta.",USD:"Inject premium spheres focused on mixed stats boosting.",PT:"Injete esferas premium focadas em atributos mistos.",FR:"Injectez des sphères de boost statistique mixte.",DE:"Injizieren Sie gemischte Statistik-Boost-Orbs."}},"orbes-paquetes":{title:{LATAM:"Paquetes de Orbes",USD:"Gems & Orbs Bundles",PT:"Pacotes de Orbes",FR:"Packs d'Orbes Raffinés",DE:"Edelstein- & Orb-Pakete"},desc:{LATAM:"Elige un pack concentrado de gemas de nivel 6 o 7.",USD:"Choose a compact package of high-grade tier-6 or 7 gems.",PT:"Escolha um pacote compacto de gemas de nível 6 ou 7.",FR:"Choisissez un pack compact de gemmes de niveau 6 ou 7.",DE:"Wählen Sie ein kompaktes Paket von Edelsteinen der Stufe 6 oder 7."}},"op-orb-p-b6":{title:{LATAM:"Paquete de Orbes Basicos Nivel 6",USD:"Tier 6 Basic Orbs Package",PT:"Pacote de Orbes Básicos Nível 6",FR:"Pack d'Orbes Basiques Niveau 6",DE:"Basispaket Orbs Stufe 6"}},"op-orb-p-poder6":{title:{LATAM:"Paquete de Orbes de Poder Nivel 6",USD:"Tier 6 Power Orbs Package",PT:"Pacote de Orbes de Poder Nível 6",FR:"Pack d'Orbes de Pouvoir Niveau 6",DE:"Kraftpaket Orbs Stufe 6"}},"op-orb-p-xp4":{title:{LATAM:"Paquete de Orbes de EXP Nivel 4",USD:"Tier 4 Experience Orbs Package",PT:"Pacote de Orbes de EXP Nível 4",FR:"Pack d'Orbes de d'XP Niveau 4",DE:"EP-Paket Orbs Stufe 4"}},"op-orb-p-b7":{title:{LATAM:"Paquete de Orbes Basicos Nivel 7",USD:"Tier 7 Basic Orbs Package",PT:"Pacote de Orbes Básicos Nível 7",FR:"Pack d'Orbes Basiques Niveau 7",DE:"Basispaket Orbs Stufe 7"}},"orbes-n7":{title:{LATAM:"Orbes Nivel 7",USD:"Elite Level 7 Orbs",PT:"Orbes de Elite Nível 7",FR:"Orbes Élite Niveau 7",DE:"Elite-Orbs Stufe 7"},desc:{LATAM:"Introduce los orbes individuales más potentes del juego.",USD:"Introduces the record most powerful individual upgrade spheres.",PT:"Introduz as esferas de melhoria individuais mais potentes do jogo.",FR:"Introduit les sphères d'amélioration les plus puissantes du jeu.",DE:"Führt die stärksten individuellen Upgrade-Sphären des Spiels ein."}},"op-orb-n7-atk":{title:{LATAM:"Ataque Nivel 7",USD:"Attack Tier 7",PT:"Ataque Nível 7",FR:"Attaque Niveau 7",DE:"Angriff Stufe 7"}},"op-orb-n7-vida":{title:{LATAM:"Vida Nivel 7",USD:"Life Tier 7",PT:"Vida Nível 7",FR:"Vie Niveau 7",DE:"Leben Stufe 7"}},"op-orb-n7-crit":{title:{LATAM:"Critico Nivel 7",USD:"Critical Tier 7",PT:"Crítico Nível 7",FR:"Critique Niveau 7",DE:"Kritisch Stufe 7"}},"op-orb-n7-xp6":{title:{LATAM:"XP Nivel 6",USD:"EXP Tier 6",PT:"EXP Nível 6",FR:"XP Niveau 6",DE:"EP Stufe 6"}},acerca:{title:{LATAM:"Acerca de",USD:"About",PT:"Sobre",FR:"À Propos",DE:"Über"},desc:{LATAM:"Muestra detalles internos del simulador, su versión educativa actual y créditos de Smith Luque.",USD:"Shows simulator details, its active version, and credits to Smith Luque.",PT:"Mostra detalhes do simulador, sua versão ativa e créditos de Smith Luque.",FR:"Affiche les détails du simulateur, sa version active et les crédits à Smith Luque.",DE:"Zeigt Simulator-Details, die aktive Version und Credits an Smith Luque."}},"op-acerca-info":{title:{LATAM:"Informacion del Script",USD:"Script Information",PT:"Informação do Script",FR:"Informations du Script",DE:"Skript-Informationen"},desc:{LATAM:"Consulta la nota aclaratoria, créditos del desarrollador y estado de prueba.",USD:"Read the developer disclaimer, active trial credits, and test status.",PT:"Leia o aviso legal do desenvolvedor, créditos e status de teste.",FR:"Lisez les mentions légales du développeur, les crédits et l'état du test.",DE:"Lesen Sie den Entwickler-Haftungsausschluss, Credits und den Teststatus."}},"volver-main":{title:{LATAM:"Volver al Menu Principal",USD:"Back to Main Menu",PT:"Voltar ao Menu Principal",FR:"Retour au Menu Principal",DE:"Zurück zum Hauptmenü"}},volver:{title:{LATAM:"Volver",USD:"Back",PT:"Voltar",FR:"Retour",DE:"Zurück"}},atras:{title:{LATAM:"Atrás",USD:"Back",PT:"Atrás",FR:"Retour",DE:"Zurück"}},"opcion-activada":{title:{LATAM:"OPCIÓN ACTIVADA!",USD:"OPTION ACTIVATED!",PT:"OPÇÃO ATIVADA!",FR:"OPTION ACTIVÉE !",DE:"OPTION AKTIVIERT!"}},"sim-exito":{title:{LATAM:"Activación simulada completada con éxito.",USD:"Simulated activation completed successfully.",PT:"Ativação simulada concluída com sucesso.",FR:"Activation simulée complétée avec succès.",DE:"Simulierte Aktivierung erfolgreich abgeschlossen."}},"volver-menu":{title:{LATAM:"Volver al Menú",USD:"Back to Menu",PT:"Voltar ao Menu",FR:"Retour au Menu",DE:"Zurück zum Menü"}},"menu-principal-label":{title:{LATAM:"MENU PRINCIPAL",USD:"MAIN MENU",PT:"MENU PRINCIPAL",FR:"MENU PRINCIPAL",DE:"HAUPTMENÜ"}}},wf={enter_title:{LATAM:"CONSOLA SCRIPT MGG",USD:"MGG SCRIPT CONSOLE",PT:"CONSOLE SCRIPT MGG",FR:"CONSOLE SCRIPT MGG",DE:"MGG SCRIPT KONSOLE"},enter_desc:{LATAM:"Ingresa la contraseña técnica para interactuar con la consola de manera segura.",USD:"Enter the password to interact with the simulated console environment.",PT:"Insira a senha técnica para poder interagir com o console.",FR:"Entrez le mot de passe technique pour interagir avec le console.",DE:"Geben Sie das Passwort ein, um die interaktive Konsole zu betreten."},suggested_pass:{LATAM:"Contraseña sugerida: SMITH-NEXUS-2026",USD:"Suggested password: SMITH-NEXUS-2026",PT:"Senha recomendada: SMITH-NEXUS-2026",FR:"Mot de passe suggéré : SMITH-NEXUS-2026",DE:"Empfohlenes Passwort: SMITH-NEXUS-2026"},placeholder_pass:{LATAM:"Escribe SMITH-NEXUS-2026",USD:"Type SMITH-NEXUS-2026",PT:"Digite SMITH-NEXUS-2026",FR:"Saisissez SMITH-NEXUS-2026",DE:"SMITH-NEXUS-2026 eingeben"},btn_validate:{LATAM:"Acceder a la Consola",USD:"Access Console",PT:"Acessar Console",FR:"Accéder à la console",DE:"Auf Konsole zugreifen"},incorrect_pass:{LATAM:"Contraseña incorrecta. Copia SMITH-NEXUS-2026",USD:"Incorrect password. Copy SMITH-NEXUS-2026",PT:"Senha incorreta. Verifique SMITH-NEXUS-2026",FR:"Mot de passe incorrect. Vérifiez SMITH-NEXUS-2026",DE:"Ungültiges Passwort. Verwenden Sie SMITH-NEXUS-2026"},btn_exit:{LATAM:"Regresar",USD:"Return",PT:"Regresar",FR:"Retour",DE:"Zurück"},header_title:{LATAM:"CONSOLA INTERACTIVA DE PRUEBA",USD:"INTERACTIVE TEST CONSOLE",PT:"CONSOLE DE TESTE INTERATIVO",FR:"CONSOLE DE TEST INTERACTIVE",DE:"INTERAKTIVE TESTKONSOLE"},header_subtitle:{LATAM:"Entorno de Demostración Rápida • Smith Luque",USD:"Quick Demonstration Environment • Smith Luque",PT:"Ambiente de Demonstração Rápida • Smith Luque",FR:"Environnement de Démo Rapide • Smith Luque",DE:"Schnelle Demoumgebung • Smith Luque"},disclaimer:{LATAM:"Aviso: Esta simulación sirve exclusivamente para practicar visualmente de manera segura e intuitiva.",USD:"Notice: This simulation serves exclusively to practice visually in a safe and intuitive manner.",PT:"Aviso: Esta simulação serve exclusivamente para praticar visualmente de forma segura e intuitiva.",FR:"Avis : Cette simulation sert uniquement à s'entraîne visuellement de manière sûre et intuitive.",DE:"Hinweis: Diese Simulation dient ausschließlich dem sicheren und intuitiven visuellen Training."}};function N_({isEmbedded:a=!1,onClose:s}){const{region:r}=_t(),o=H=>{var C,P;return((C=wf[H])==null?void 0:C[r])||((P=wf[H])==null?void 0:P.LATAM)||H},d=H=>{var P;const C=Ef[H.id];return C&&((P=C.title)!=null&&P[r])?C.title[r]:H.title},g=H=>{var P;const C=Ef[H.id];return C&&((P=C.desc)!=null&&P[r])?C.desc[r]:H.desc||""},[p,b]=O.useState(""),[_,h]=O.useState(""),[f,G]=O.useState("password"),[k,y]=O.useState([]),[M,I]=O.useState(null),S=()=>{p.trim()==="SMITH-NEXUS-2026"?(h(""),G("menu"),y([])):h(o("incorrect_pass"))},N=()=>{b("SMITH-NEXUS-2026"),h(""),G("menu"),y([])},X=H=>{H.children&&H.children.length>0?y(C=>[...C,H]):(I(H),G("success"))},z=()=>{k.length>0&&y(H=>H.slice(0,-1))},V=k.length>0?k[k.length-1]:null,Z=V?V.children||[]:uT;return l.jsx("div",{className:`w-full ${a?"p-1":"py-8 px-4"} max-w-4xl mx-auto select-none text-left`,children:l.jsxs("div",{className:"bg-[#090f1c] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col relative transition-all min-h-[500px]",children:[l.jsxs("header",{className:"bg-[#0d1527] border-b border-white/10 px-5 py-4 flex items-center justify-between gap-3 shrink-0",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"w-3 h-3 rounded-full bg-emerald-500 animate-pulse border border-emerald-400/40 shrink-0"}),l.jsxs("div",{className:"flex flex-col",children:[l.jsx("span",{className:"text-[10px] text-slate-400 font-black uppercase tracking-wider leading-none",children:o("header_title")}),l.jsx("span",{className:"text-[8px] text-emerald-400 font-bold uppercase tracking-widest mt-1",children:o("header_subtitle")})]})]}),s&&l.jsx("button",{onClick:s,className:"py-1 px-3 rounded-lg text-xs font-black uppercase bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 active:scale-95 transition-all cursor-pointer",children:o("btn_exit")})]}),l.jsxs("div",{className:"flex-1 p-5 md:p-8 flex flex-col justify-start",children:[f==="password"&&l.jsxs("div",{className:"max-w-md w-full mx-auto text-center space-y-6 py-6 self-center my-auto",children:[l.jsx("div",{className:"w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-emerald-400 mx-auto shadow-inner",children:l.jsx(Lf,{size:24})}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("h3",{className:"text-white text-lg font-black uppercase tracking-normal",children:o("enter_title")}),l.jsx("p",{className:"text-xs text-slate-400 leading-relaxed max-w-sm mx-auto",children:o("enter_desc")})]}),l.jsx("button",{onClick:N,className:"w-full bg-emerald-950/40 border border-emerald-500/20 hover:border-emerald-500/40 text-emerald-300 font-mono text-[11px] p-3 rounded-xl block transition-all active:scale-99",children:l.jsxs("div",{className:"flex items-center justify-center gap-2",children:[l.jsx(Pf,{size:11,className:"text-emerald-400 animate-pulse"}),l.jsx("span",{children:o("suggested_pass")})]})}),l.jsxs("div",{className:"space-y-3",children:[l.jsx("input",{type:"text",value:p,onChange:H=>{b(H.target.value),h("")},onKeyDown:H=>H.key==="Enter"&&S(),placeholder:o("placeholder_pass"),className:"w-full text-center bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white font-mono tracking-wider outline-none focus:border-emerald-500 transition-all uppercase placeholder:normal-case placeholder:font-sans placeholder:tracking-normal"}),_&&l.jsx("p",{className:"text-red-400 text-xs font-bold leading-none",children:_}),l.jsxs("button",{onClick:S,className:"w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black uppercase text-xs py-3.5 rounded-xl flex items-center justify-center gap-1 transition-all active:scale-95 shadow-lg shadow-emerald-500/10 cursor-pointer",children:[l.jsx($h,{size:14}),l.jsx("span",{children:o("btn_validate")})]})]})]}),f==="menu"&&l.jsxs("div",{className:"w-full space-y-4",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-white/5 pb-3",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-xs uppercase font-bold tracking-widest text-slate-400 font-mono",children:V?V.num:">>>"}),l.jsx("h3",{className:"text-white text-xs sm:text-sm font-black uppercase tracking-widest",children:V?d(V):o("menu-principal-label")})]}),k.length>0&&l.jsxs("button",{onClick:z,className:"py-1 px-2.5 rounded-lg text-[9px] font-black uppercase text-slate-400 hover:text-emerald-400 bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 transition-all cursor-pointer flex items-center gap-1 active:scale-95",children:[l.jsx(ou,{size:10,strokeWidth:2.5}),l.jsx("span",{children:o("atras")})]})]}),l.jsxs("div",{className:"space-y-2.5",children:[Z.map(H=>{const C=!H.children||H.children.length===0;return l.jsx("button",{onClick:()=>X(H),className:`w-full text-left bg-[#0c1322]/60 hover:bg-[#0c1322] border border-white/5 hover:border-emerald-500/20 rounded-xl sm:rounded-2xl transition-all flex items-center justify-between gap-4 group cursor-pointer active:scale-[0.99] ${C?"p-3":"p-4"}`,children:C?l.jsxs("div",{className:"flex items-center gap-3.5 w-full",children:[l.jsx("div",{className:"w-10 h-10 rounded-xl border border-emerald-500/20 bg-emerald-500/5 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(16,185,129,0.03)] group-hover:border-emerald-500/40 group-hover:bg-emerald-500/10 transition-all",children:l.jsx($h,{size:16,className:"text-emerald-400 group-hover:scale-110 transition-transform"})}),l.jsxs("div",{className:"space-y-0.5 flex-1 min-w-0",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-emerald-400 font-mono text-xs sm:text-sm font-black tracking-normal shrink-0",children:H.num}),l.jsx("span",{className:"text-white text-xs sm:text-sm font-black uppercase tracking-wider group-hover:text-emerald-300 transition-colors truncate",children:d(H)})]}),H.desc&&l.jsx("p",{className:"text-[10px] sm:text-xs text-slate-400 font-medium leading-relaxed tracking-wide truncate sm:whitespace-normal",children:g(H)})]}),l.jsxs("div",{className:"flex items-center gap-1.5 shrink-0 pl-1",children:[l.jsx("span",{className:"text-[9px] font-black uppercase text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity tracking-wider hidden sm:inline leading-none",children:"EJECUTAR"}),l.jsx("div",{className:"w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all shrink-0",children:l.jsx(l2,{size:10,fill:"currentColor",className:"ml-0.5",strokeWidth:2.5})})]})]}):l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"space-y-1",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-emerald-400 font-mono text-xs sm:text-sm font-black tracking-normal",children:H.num}),l.jsx("span",{className:"text-white text-xs sm:text-sm font-black uppercase tracking-wider group-hover:text-emerald-300 transition-colors",children:d(H)})]}),H.desc&&l.jsx("p",{className:"text-[10px] sm:text-xs text-slate-400 font-medium leading-relaxed tracking-wide",children:g(H)})]}),l.jsx(Eu,{size:14,className:"text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all shrink-0"})]})},H.id)}),k.length>0&&l.jsxs("button",{onClick:z,className:"w-full text-left bg-red-950/5 hover:bg-red-500/[0.04] border border-red-500/10 hover:border-red-500/30 p-4 rounded-xl sm:rounded-2xl transition-all flex items-center justify-between gap-4 group cursor-pointer active:scale-[0.99]",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-red-400 font-mono text-xs sm:text-sm font-black",children:"[<]"}),l.jsx("span",{className:"text-red-300 text-xs sm:text-sm font-black uppercase tracking-wider group-hover:text-red-400 transition-colors",children:k.length===1?o("volver-main"):o("volver")})]}),l.jsx(ou,{size:14,className:"text-red-400/50 group-hover:text-red-400 group-hover:-translate-x-0.5 transition-all shrink-0"})]})]})]}),f==="success"&&M&&l.jsxs("div",{className:"max-w-md w-full mx-auto text-center space-y-6 py-6 self-center my-auto animate-fade-in",children:[l.jsx("div",{className:"w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto shadow-lg shadow-emerald-500/10",children:l.jsx(vi,{size:32,className:"animate-pulse"})}),l.jsxs("div",{className:"space-y-3",children:[l.jsx("h3",{className:"text-emerald-400 text-lg font-black uppercase tracking-wider leading-none",children:o("opcion-activada")}),l.jsx("div",{className:"bg-white/[0.02] border border-white/5 py-4 px-5 rounded-2xl inline-block w-full",children:l.jsx("span",{className:"text-white text-xs sm:text-sm font-black uppercase tracking-wider block leading-relaxed select-all",children:d(M)})})]}),l.jsx("p",{className:"text-[11px] text-slate-400 leading-normal max-w-xs mx-auto font-bold uppercase tracking-wide",children:o("sim-exito")}),l.jsxs("button",{onClick:()=>{I(null),G("menu")},className:"w-full bg-[#0d1527] hover:bg-[#121c33] text-emerald-400 border border-emerald-500/20 hover:border-emerald-500/40 font-black uppercase text-xs py-4 rounded-xl cursor-pointer transition-all active:scale-95 shadow-lg flex items-center justify-center gap-2",children:[l.jsx(ou,{size:13,strokeWidth:3}),l.jsx("span",{children:o("volver-menu")})]})]})]}),l.jsxs("footer",{className:"bg-[#070b13] border-t border-white/5 px-6 py-4 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-[9px] text-slate-400 uppercase font-black tracking-wider leading-relaxed",children:[l.jsxs("div",{className:"flex items-center gap-1.5 opacity-65 text-center sm:text-left",children:[l.jsx(Ff,{size:11,className:"text-yellow-500 shrink-0"}),l.jsx("span",{children:o("disclaimer")})]}),l.jsx("span",{className:"opacity-40 shrink-0",children:"SMITH • NEXUS_CONSOLE 2026"})]})]})})}const Df={download_center:{LATAM:"Centro de descargas",USD:"Download Center",PT:"Centro de Downloads",FR:"Centre de téléchargement",DE:"Download-Center"},downloads:{LATAM:"DESCARGAS",USD:"DOWNLOADS",PT:"DOWNLOADS",FR:"TÉLÉCHARGEMENTS",DE:"DOWNLOADS"},tools_desc:{LATAM:"Herramientas y recomendaciones según tu caso.",USD:"Tools and recommendations tailored to your setup.",PT:"Ferramentas e recomendações adaptadas ao seu caso.",FR:"Outils et recommandations adaptés à votre cas.",DE:"Werkzeuge und Empfehlungen für Ihren Fall."},essential_resources:{LATAM:"Recursos esenciales",USD:"Essential Resources",PT:"Recursos Essenciais",FR:"Ressources essentielles",DE:"Grundlegende Ressourcen"},download_btn:{LATAM:"Descargar",USD:"Download",PT:"Descarregar",FR:"Télécharger",DE:"Herunterladen"},gg_official:{LATAM:"GameGuardian (fuente oficial)",USD:"GameGuardian (Official Source)",PT:"GameGuardian (Fonte Oficial)",FR:"GameGuardian (Source officielle)",DE:"GameGuardian (Offizielle Quelle)"},gg_desc:{LATAM:"Evita APKs modificados. Descarga siempre desde el foro oficial. Normalmente requiere root real o virtual.",USD:"Avoid modified APKs. Always download from the official forum. Usually requires real or virtual root.",PT:"Evite APKs modificados. Sempre baixe do fórum oficial. Geralmente requer root real ou virtual.",FR:"Évitez les APK modifiés. Téléchargez toujours depuis le forum officiel. Nécessite généralement un accès root réel ou virtuel.",DE:"Vermeiden Sie modifizierte APKs. Laden Sie immer aus dem offiziellen Forum herunter. Erfordert normalerweise echten oder virtuellen Root."},mobile_vms:{LATAM:"Móvil: máquinas virtuales",USD:"Mobile: Virtual Machines",PT:"Celular: Máquinas Virtuais",FR:"Mobile : Machines virtuelles",DE:"Mobil: Virtuelle Maschinen"},pc_emulators:{LATAM:"PC: emuladores Android",USD:"PC: Android Emulators",PT:"PC: Emuladores Android",FR:"PC : Émulateurs Android",DE:"PC: Android-Emulatoren"},official_site:{LATAM:"Sitio oficial",USD:"Official Site",PT:"Site Oficial",FR:"Site officiel",DE:"Offizielle Website"},warn_title:{LATAM:"Usa bajo tu responsabilidad",USD:"Use at your own risk",PT:"Use por sua conta e risco",FR:"Utilisez à vos risques et périls",DE:"Nutzung auf eigene Gefahr"},warn_desc:{LATAM:"Esta conversión conserva la sección informativa del proyecto original.",USD:"This content is for information purposes only within this project.",PT:"Esta conversão mantém a seção informativa do projeto original.",FR:"Cette conversion conserve la section informative du projet d'origine.",DE:"Diese Konvertierung behält den informativen Teil des Originalprojekts bei."},lua_title:{LATAM:"Script LUA",USD:"Script LUA",PT:"Script LUA",FR:"Script LUA",DE:"Script LUA"},lua_desc:{LATAM:"Script definitivo para GameGuardian. Compatible con TodoCS.",USD:"Ultimate GameGuardian script. Compatible with TodoCS.",PT:"Script definitivo para GameGuardian. Compatível com TodoCS.",FR:"Script définitif pour GameGuardian. Compatible avec TodoCS.",DE:"Ultimatives Script für GameGuardian. Kompatibel mit TodoCS."},script_password:{LATAM:"Contraseña Script:",USD:"Script Password:",PT:"Senha do Script:",FR:"Mot de passe du script :",DE:"Script-Passwort:"},copy_success:{LATAM:"¡Copia Exitosa!",USD:"Copied!",PT:"Copiado!",FR:"Copié !",DE:"Kopiert!"},done:{LATAM:"Listo",USD:"Done",PT:"Pronto",FR:"Prêt",DE:"Fertig"},copy:{LATAM:"Copiar",USD:"Copy",PT:"Copiar",FR:"Copier",DE:"Kopieren"},interactive_guide_btn:{LATAM:"Ver Guía Interactiva",USD:"View Interactive Guide",PT:"Ver Guia Interativo",FR:"Voir le guide interactif",DE:"Interaktiven Guide ansehen"},close_console:{LATAM:"Cerrar Consola ✕",USD:"Close Console ✕",PT:"Fechar Console ✕",FR:"Fermer la console ✕",DE:"Konsole schließen ✕"},demo_mode:{LATAM:"Modo Demostración Académica",USD:"Academic Demonstration Mode",PT:"Modo de Demonstração Acadêmica",FR:"Mode de démonstration académique",DE:"Akademischer Demomodus"},txt_title:{LATAM:"Lista TXT",USD:"TXT List",PT:"Lista TXT",FR:"Liste TXT",DE:"TXT-Liste"},txt_desc:{LATAM:"Todos los códigos en formato de texto plano.",USD:"All codes in plain text format.",PT:"Todos os códigos em formato de texto simples.",FR:"Tous les codes au format texte brut.",DE:"Alle Codes im Klartextformat."},xlsx_title:{LATAM:"Lista Excel",USD:"Excel List",PT:"Lista Excel",FR:"Liste Excel",DE:"Excel-Liste"},xlsx_desc:{LATAM:"Base de datos completa en .xlsx para filtrado avanzado.",USD:"Complete database in .xlsx for advanced filtering.",PT:"Banco de dados completo em .xlsx para filtragem avançada.",FR:"Base de données complète en .xlsx pour un filtrage avancé.",DE:"Vollständige Datenbank im .xlsx-Format für erweitertes Filtern."},texture_title:{LATAM:"Textura MGG",USD:"MGG Texture",PT:"Textura MGG",FR:"Texture MGG",DE:"MGG-Textur"},texture_desc:{LATAM:"Nuevas texturas para la terraza, arenas e iconos.",USD:"Visual overhaul for hall, arenas, and icons.",PT:"Novas texturas para o terraço, arenas e ícones.",FR:"Nouvelles textures pour le hall, les arènes et les icônes.",DE:"Neue Texturen für die Terrasse, Arenen und Symbole."},vphone_desc:{LATAM:"Mejor opción para root virtual y compatibilidad con GG.",USD:"Best option for virtual root and GG compatibility.",PT:"Melhor opção para root virtual e compatibilidade com GG.",FR:"Option idéale pour le root virtuel et la compatibilité avec GG.",DE:"Beste Option für virtuellen Root und GG-Kompatibilität."},vmos_desc:{LATAM:"Mucha comunidad. El root y la compatibilidad cambian por versión.",USD:"Large community. Root and compatibility vary by version.",PT:"Grande comunidade. O root e a compatibilidade variam de acordo com a versão.",FR:"Grande communauté. Le root et la compatibilité varient selon la version.",DE:"Große Community. Root und Kompatibilität variieren je nach Version."},vmaster_desc:{LATAM:"Muy buena para separar apps, con root limitado.",USD:"Great for separating apps, limited root.",PT:"Muito boa para separar apps, com root limitado.",FR:"Très utile pour isoler les applications, avec root limité.",DE:"Sehr gut zum Trennen von Apps, mit eingeschränktem Root."},ldplayer_desc:{LATAM:"Equilibrio entre rendimiento y estabilidad.",USD:"Balance between performance and stability.",PT:"Equilíbrio entre desempenho e estabilidade.",FR:"Excellent équilibre entre performances et stabilité.",DE:"Gleichgewicht zwischen Leistung und Stabilität."},bluestacks_desc:{LATAM:"Alta compatibilidad para juegos.",USD:"High compatibility for games.",PT:"Alta compatibilidade para jogos.",FR:"Grande compatibilité avec les jeux.",DE:"Hohe Spielekompatibilität."},nox_desc:{LATAM:"Ideal para multi-instancia y control avanzado.",USD:"Ideal for multi-instance and advanced control.",PT:"Ideal para multi-instâncias e controle avançado.",FR:"Idéal pour le multi-instance et le contrôle avancé.",DE:"Ideal für Multi-Instanz und erweiterte Steuerung."},select_script_lang:{LATAM:"Idioma de la Script:",USD:"Script Language:",PT:"Idioma do Script:",FR:"Langue du Script :",DE:"Skript-Sprache:"},choose_lang:{LATAM:"Elegir Idioma...",USD:"Choose Language...",PT:"Escolher Idioma...",FR:"Choisir la langue...",DE:"Sprache wählen..."},download_locked:{LATAM:"BLOQUEADO",USD:"LOCKED",PT:"BLOQUEADO",FR:"BLOQUÉ",DE:"GESPERRT"},pls_select_lang:{LATAM:"⚠️ Elige un idioma arriba para descargar",USD:"⚠️ Choose a language above to download",PT:"⚠️ Escolha um idioma acima para baixar",FR:"⚠️ Choisissez une langue ci-dessus pour télécharger",DE:"⚠️ Wählen Sie oben eine Sprache zum Herunterladen"},virtual_instances_title:{LATAM:"Instancias Virtuales Optimadas",USD:"Optimized Virtual Instances",PT:"Instâncias Virtuais Otimizadas",FR:"Instances Virtuelles Optimisées",DE:"Optimierte Virtuelle Instanzen"},virtual_instances_desc:{LATAM:"Instancias preparadas y listas para usar. Haz clic en el botón de guía para ver qué son y cómo se usan paso a paso.",USD:"Pre-made instances ready to use. Click the user guide button to see what they are and how to use them step-by-step.",PT:"Instâncias preparadas e prontas para usar. Clique no botão de guia para ver o que são e como usá-las passo a passo.",FR:"Instances configurées et prêtes à l'emploi. Cliquez sur le bouton guide pour voir ce que c'est et comment les utiliser étape par étape.",DE:"Fertige Instanzen, sofort startklar. Klicken Sie auf die Anleitungsschaltfläche, um zu sehen, was sie sind und wie sie verwendet werden."},download_pc_instance:{LATAM:"Instancia PC (LDPlayer)",USD:"PC Instance (LDPlayer)",PT:"Instância PC (LDPlayer)",FR:"Instance PC (LDPlayer)",DE:"PC-Instanz (LDPlayer)"},download_mobile_instance:{LATAM:"Instancia Móvil (VPhone)",USD:"Mobile Instance (VPhone)",PT:"Instância Móvel (VPhone)",FR:"Instance Mobile (VPhone)",DE:"Mobil-Instanz (VPhone)"},view_vm_guide:{LATAM:"Ver Guía de Uso",USD:"View User Guide",PT:"Ver Guia de Uso",FR:"Voir la Guide d'Utilisation",DE:"Bedienungsanleitung ansehen"}},Nf={LATAM:"https://www.mediafire.com/file/0n3xl8662tu01jw/LC_NEXUS_EDGE_ES.lua/file",USD:"https://www.mediafire.com/file/8ess1u8oljdcojj/LC_NEXUS_EDGE_EN.lua/file",PT:"https://www.mediafire.com/file/8mauh3acrehb00k/LC_NEXUS_EDGE_PT.lua/file",FR:"https://www.mediafire.com/file/8cr2r6k0e5hw6f1/LC_NEXUS_EDGE_FR.lua/file",DE:"https://www.mediafire.com/file/p64ke0qu7qyybnz/LC_NEXUS_EDGE_DE.lua/file"},Iu=[{code:"LATAM",label:"Español",flag:"🇪🇸"},{code:"USD",label:"English",flag:"🇺🇸"},{code:"PT",label:"Português",flag:"🇵🇹"},{code:"FR",label:"Français",flag:"🇫🇷"},{code:"DE",label:"Deutsch",flag:"🇩🇪"}];function dT(){const{region:a,setRegion:s}=_t(),[r,o]=Jo.useState(!1),[d,g]=Jo.useState(!1),[p,b]=Jo.useState(null),[_,h]=Jo.useState(!1),f=M=>{var I,S;return((I=Df[M])==null?void 0:I[a])||((S=Df[M])==null?void 0:S.USD)||""},G=[{title:f("lua_title"),desc:f("lua_desc"),iconName:NG,href:p?Nf[p]:"",download:"SCIRPT-NUEVA.V2.lua"},{title:f("txt_title"),desc:f("txt_desc"),iconName:PG,href:"https://www.mediafire.com/file/2fg3dtp4nhay3jw/lista-codigos.txt/file",download:"lista-codigos.txt"},{title:f("xlsx_title"),desc:f("xlsx_desc"),iconName:x2,href:"https://www.mediafire.com/file/n9l7kylzrpgiplq/lista-codigos.xlsx/file",download:"lista-codigos.xlsx"},{title:f("texture_title"),desc:f("texture_desc"),iconName:Of,href:"https://www.mediafire.com/file/gllbbith3a6i56a/Mutants_Genetic_Gladiators_Mod.apk/file",download:"Mutants_Genetic_Gladiators_Mod.apk"}],k=[["VPhoneOS",f("vphone_desc"),"https://vphoneos.com/"],["VMOS",f("vmos_desc"),""],["Virtual Master",f("vmaster_desc"),""]],y=[["LDPlayer",f("ldplayer_desc"),"https://www.ldplayer.net/"],["BlueStacks",f("bluestacks_desc"),""],["NoxPlayer",f("nox_desc"),""]];return l.jsxs("div",{className:"flex flex-col gap-6 pb-20",children:[l.jsxs("section",{className:"relative hero !p-10 md:!p-24 overflow-hidden rounded-[3rem]",children:[l.jsx("div",{className:"absolute inset-0 opacity-10 bg-grid-slate-900/[0.1] pointer-events-none"}),l.jsx("div",{className:"absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-brand/20 to-transparent -rotate-12 transform translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none"}),l.jsxs("div",{className:"relative z-10",children:[l.jsxs("div",{className:"eyebrow bg-white/5 border-white/10 px-4 py-1 rounded-full inline-flex items-center gap-2 mb-6 backdrop-blur-md",children:[l.jsx(od,{size:14,className:"text-blue-brand-2"}),l.jsx("span",{className:"text-[10px] font-black uppercase tracking-[0.2em]",children:f("download_center")})]}),l.jsxs("h1",{className:"text-4xl md:text-8xl lg:text-9xl font-black mt-4 mb-6 uppercase tracking-tighter leading-[0.8] md:leading-[0.85] text-white",children:[f("downloads")," ",l.jsx("br",{}),l.jsxs("span",{className:"text-blue-brand relative",children:["MÓVIL / PC",l.jsx("span",{className:"absolute -bottom-2 left-0 w-full h-1 bg-white/10 rounded-full"})]})]}),l.jsx("p",{className:"text-slate-400 text-sm md:text-lg max-w-2xl mx-auto md:mx-0 opacity-90 leading-relaxed font-medium",children:f("tools_desc")})]})]}),l.jsx(ea,{}),l.jsxs("section",{className:"flex flex-col gap-4",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"h-px flex-1 bg-white/5"}),l.jsx("h2",{className:"text-lg font-bold uppercase tracking-tight m-0 text-white",children:f("essential_resources")}),l.jsx("div",{className:"h-px flex-1 bg-white/5"})]}),l.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-4 gap-6",children:G.map((M,I)=>{var X,z;const S=M.iconName,N=M.title==="Textura MGG"||M.title==="MGG Texture";return l.jsxs("article",{className:`panel flex flex-col gap-4 relative transition-all duration-300 border ${N?"glow-card border-blue-brand/40 bg-blue-brand/5":"hover:border-white/10"}`,children:[N&&l.jsx("span",{className:"badge-new uppercase",children:"New"}),l.jsx("div",{className:`w-12 h-12 rounded-2xl flex items-center justify-center ${N?"bg-blue-brand text-white":"bg-white/8 text-blue-brand-2"}`,children:l.jsx(S,{size:24})}),l.jsxs("div",{children:[l.jsx("h3",{className:`text-xl font-bold tracking-tight mb-2 ${N?"text-blue-brand-2":""}`,children:M.title}),l.jsx("p",{className:"text-muted text-sm m-0 min-h-[40px] leading-relaxed",children:M.desc})]}),I===0&&l.jsxs("div",{className:"mt-1 flex flex-col gap-2.5",children:[l.jsxs("div",{className:"p-3 rounded-xl bg-black/40 border border-white/5 flex flex-col gap-1.5 relative",children:[l.jsx("span",{className:"text-[10px] text-slate-400 font-bold uppercase tracking-wider",children:f("select_script_lang")}),l.jsxs("div",{className:"relative",children:[l.jsxs("button",{type:"button",onClick:()=>h(!_),className:"w-full flex items-center justify-between gap-1.5 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-blue-brand/50 text-white text-xs font-black uppercase tracking-wider transition-all cursor-pointer relative z-20 active:scale-[0.98]",children:[l.jsxs("span",{className:"flex items-center gap-1.5",children:[l.jsx("span",{className:"text-sm leading-none",children:p?(X=Iu.find(V=>V.code===p))==null?void 0:X.flag:"🌐"}),l.jsx("span",{children:p?(z=Iu.find(V=>V.code===p))==null?void 0:z.label:f("choose_lang")})]}),l.jsx(Vu,{size:12,className:`text-slate-400 transition-transform ${_?"rotate-180":""}`})]}),l.jsx(hr,{children:_&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"fixed inset-0 z-30",onClick:()=>h(!1)}),l.jsx($t.div,{initial:{opacity:0,scale:.95,y:-5},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:-5},transition:{duration:.15},className:"absolute left-0 right-0 top-full mt-1.5 rounded-xl bg-[#091224] border border-white/15 shadow-2xl p-1.5 z-40 flex flex-col gap-1 select-none",children:Iu.map(V=>{const Z=p===V.code;return l.jsxs("button",{type:"button",onClick:()=>{b(V.code),h(!1)},className:`flex items-center gap-2.5 w-full px-2.5 py-2.5 rounded-lg text-left text-[11px] font-black uppercase transition-all cursor-pointer ${Z?"bg-blue-brand/20 text-white border border-blue-brand/35 shadow-[0_2px_10px_rgba(37,99,235,0.2)]":"text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"}`,children:[l.jsx("span",{className:"text-sm leading-none",children:V.flag}),l.jsx("span",{children:V.label})]},V.code)})})]})})]}),p===null&&l.jsx("p",{className:"text-[9px] text-yellow-500 font-bold uppercase tracking-wider text-center m-0 mt-1 animate-pulse",children:f("pls_select_lang")})]}),l.jsxs("div",{className:"p-3 rounded-xl bg-black/40 border border-white/5 flex flex-col gap-2 text-[11px]",children:[l.jsxs("div",{className:"flex justify-between items-center text-[10px] text-slate-400 font-bold uppercase tracking-wider",children:[l.jsx("span",{children:f("script_password")}),r&&l.jsx("span",{className:"text-[#14a44d] font-black animate-pulse",children:f("copy_success")})]}),l.jsxs("div",{className:"flex items-center justify-between gap-1.5 bg-white/5 p-1 rounded-lg",children:[l.jsx("code",{className:"text-blue-brand-2 px-1.5 py-0.5 rounded font-mono font-black text-xs select-all",children:"SMITH-NEXUS-2026"}),l.jsx("button",{type:"button",onClick:V=>{V.preventDefault(),navigator.clipboard.writeText("SMITH-NEXUS-2026"),o(!0),setTimeout(()=>o(!1),2e3)},className:"py-1 px-2 rounded-md text-[9px] uppercase font-black bg-blue-brand text-white hover:brightness-110 active:scale-95 transition-all cursor-pointer shrink-0",children:f(r?"done":"copy")})]})]}),l.jsxs("button",{type:"button",onClick:()=>g(!0),className:"w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-black uppercase transition-all duration-200 active:scale-95 cursor-pointer shadow-lg",children:[l.jsxs("span",{className:"flex h-2 w-2 relative shrink-0",children:[l.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),l.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-emerald-500"})]}),l.jsx("span",{children:f("interactive_guide_btn")})]})]}),I!==0&&M.href&&M.href.includes(".lua")&&l.jsxs("div",{className:"mt-1 flex flex-col gap-2.5",children:[l.jsxs("div",{className:"p-3 rounded-xl bg-black/40 border border-white/5 flex flex-col gap-2 text-[11px]",children:[l.jsxs("div",{className:"flex justify-between items-center text-[10px] text-slate-400 font-bold uppercase tracking-wider",children:[l.jsx("span",{children:f("script_password")}),r&&l.jsx("span",{className:"text-[#14a44d] font-black animate-pulse",children:f("copy_success")})]}),l.jsxs("div",{className:"flex items-center justify-between gap-1.5 bg-white/5 p-1 rounded-lg",children:[l.jsx("code",{className:"text-blue-brand-2 px-1.5 py-0.5 rounded font-mono font-black text-xs select-all",children:"SMITH-NEXUS-2026"}),l.jsx("button",{type:"button",onClick:V=>{V.preventDefault(),navigator.clipboard.writeText("SMITH-NEXUS-2026"),o(!0),setTimeout(()=>o(!1),2e3)},className:"py-1 px-2 rounded-md text-[9px] uppercase font-black bg-blue-brand text-white hover:brightness-110 active:scale-95 transition-all cursor-pointer shrink-0",children:f(r?"done":"copy")})]})]}),l.jsxs("button",{type:"button",onClick:()=>g(!0),className:"w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-black uppercase transition-all duration-200 active:scale-95 cursor-pointer shadow-lg",children:[l.jsxs("span",{className:"flex h-2 w-2 relative shrink-0",children:[l.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),l.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-emerald-500"})]}),l.jsx("span",{children:f("interactive_guide_btn")})]})]}),I===0?p?l.jsxs("a",{className:"btn w-full relative overflow-hidden group transition-all btn-primary shadow-lg shadow-blue-brand/20 active:scale-95 duration-200 text-center flex items-center justify-center gap-2",href:Nf[p],target:"_blank",rel:"noopener noreferrer",children:[l.jsx("span",{className:"font-black uppercase",children:f("download_btn")}),l.jsx("span",{className:"download-shine","aria-hidden":"true"})]}):l.jsxs("button",{type:"button",onClick:()=>h(!0),className:"btn w-full relative overflow-hidden transition-all bg-slate-900 border border-white/5 text-slate-500 opacity-50 cursor-pointer flex items-center justify-center gap-2 active:scale-98",children:[l.jsx(Lf,{size:13}),l.jsx("span",{className:"font-black uppercase",children:f("download_locked")})]}):l.jsxs("a",{className:`btn w-full relative overflow-hidden group transition-all ${N?"bg-white text-black hover:bg-blue-brand-2 hover:text-white border-transparent":"btn-primary"}`,href:M.href,target:"_blank",rel:"noopener noreferrer",children:[l.jsx("span",{className:"font-black uppercase",children:f("download_btn")}),l.jsx("span",{className:"download-shine","aria-hidden":"true"})]})]},I)})})]}),l.jsxs("section",{className:"flex flex-col gap-4",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"h-px flex-1 bg-white/5"}),l.jsx("h2",{className:"text-lg font-bold uppercase tracking-tight m-0 text-white",children:f("virtual_instances_title")}),l.jsx("div",{className:"h-px flex-1 bg-white/5"})]}),l.jsxs("article",{className:"panel flex flex-col lg:flex-row gap-6 items-center justify-between transition-all border border-blue-brand/30 bg-blue-brand/5 relative overflow-hidden rounded-[2rem] p-6 md:p-8",children:[l.jsx("div",{className:"absolute top-0 right-0 w-48 h-48 bg-blue-brand/10 rounded-full blur-3xl pointer-events-none"}),l.jsxs("div",{className:"flex gap-4 items-start text-left",children:[l.jsx("div",{className:"w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-blue-brand text-white shadow-lg shadow-blue-brand/30 mt-1",children:l.jsx(Rf,{size:24,className:"animate-pulse text-white"})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-xl font-black uppercase tracking-tight text-white mb-2",children:f("virtual_instances_title")}),l.jsx("p",{className:"text-slate-300 text-sm m-0 leading-relaxed max-w-2xl font-semibold",children:f("virtual_instances_desc")})]})]}),l.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0 relative z-10",children:[l.jsxs("a",{href:"https://drive.google.com/file/d/1eUurSrMLYDrsCO4pL_6cQYSrHtkF1yYP/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",className:"btn flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-brand hover:bg-blue-brand-2 text-white text-xs font-black uppercase tracking-wide transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto text-center",children:[l.jsx(Hf,{size:15}),l.jsx("span",{children:f("download_pc_instance")})]}),l.jsxs("a",{href:"https://drive.google.com/file/d/1E6wB3fZbFUibi29C6djOULMc8HcrB_3d/view?usp=drive_link",target:"_blank",rel:"noopener noreferrer",className:"btn flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 text-xs font-black uppercase tracking-wide transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto text-center font-bold",children:[l.jsx(ld,{size:15}),l.jsx("span",{children:f("download_mobile_instance")})]}),l.jsxs("a",{href:"#/guia#instancias-guide",className:"btn flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-black uppercase tracking-wide transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto text-center font-bold",children:[l.jsx(br,{size:15}),l.jsx("span",{children:f("view_vm_guide")})]})]})]})]}),l.jsxs("section",{className:"panel flex gap-4 items-center transition-all border border-white/10 bg-white/[0.02]",children:[l.jsx("div",{className:"w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-white/8 text-green-brand",children:l.jsx(Uf,{size:24})}),l.jsxs("div",{className:"flex-1",children:[l.jsx("h3",{className:"text-lg font-bold tracking-tight mb-1 text-white font-black",children:f("gg_official")}),l.jsx("p",{className:"text-muted text-sm m-0",children:f("gg_desc")})]}),l.jsxs("div",{className:"hidden lg:flex gap-2",children:[l.jsx("span",{className:"px-3 py-1.5 rounded-full text-[12px] font-bold bg-white/8 text-blue-100",children:"Root real"}),l.jsx("span",{className:"px-3 py-1.5 rounded-full text-[12px] font-bold bg-white/8 text-blue-100",children:"Root virtual"})]})]}),l.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[l.jsxs("section",{className:"panel flex flex-col gap-5 border border-white/10 bg-gradient-to-br from-white/[0.01] to-transparent",children:[l.jsx("h3",{className:"text-xl font-bold tracking-tight m-0 text-white uppercase tracking-tighter",children:f("mobile_vms")}),l.jsx("div",{className:"grid gap-4",children:k.map(([M,I,S],N)=>l.jsxs("div",{className:"p-4 rounded-xl border border-white/5 bg-white/2 hover:border-white/10 transition-colors",children:[l.jsx("h4",{className:"font-bold mb-1 text-white",children:M}),l.jsx("p",{className:"text-muted text-sm mb-3 leading-relaxed",children:I}),S?l.jsxs("a",{href:S,target:"_blank",rel:"noopener noreferrer",className:"btn btn-sm text-xs py-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black",children:[l.jsx(Yn,{size:14}),l.jsx("span",{children:f("official_site")})]}):l.jsxs("button",{disabled:!0,className:"btn btn-sm text-xs py-2 opacity-50 cursor-not-allowed",children:[l.jsx(Yn,{size:14}),l.jsx("span",{children:f("official_site")})]})]},N))})]}),l.jsxs("section",{className:"panel flex flex-col gap-5 border border-white/10 bg-gradient-to-br from-white/[0.01] to-transparent",children:[l.jsx("h3",{className:"text-xl font-bold tracking-tight m-0 text-white uppercase tracking-tighter",children:f("pc_emulators")}),l.jsx("div",{className:"grid gap-4",children:y.map(([M,I,S],N)=>l.jsxs("div",{className:"p-4 rounded-xl border border-white/5 bg-white/2 hover:border-white/10 transition-colors",children:[l.jsx("h4",{className:"font-bold mb-1 text-white",children:M}),l.jsx("p",{className:"text-muted text-sm mb-3 leading-relaxed",children:I}),S?l.jsxs("a",{href:S,target:"_blank",rel:"noopener noreferrer",className:"btn btn-sm text-xs py-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black",children:[l.jsx(Yn,{size:14}),l.jsx("span",{children:f("official_site")})]}):l.jsxs("button",{disabled:!0,className:"btn btn-sm text-xs py-2 opacity-50 cursor-not-allowed",children:[l.jsx(Yn,{size:14}),l.jsx("span",{children:f("official_site")})]})]},N))})]})]}),l.jsxs("section",{className:"panel flex gap-4 items-start border-l-4 bg-yellow-brand/5 border-yellow-brand",children:[l.jsx(Ff,{size:24,className:"text-yellow-brand shrink-0 mt-1"}),l.jsxs("div",{children:[l.jsx("strong",{className:"block text-white mb-1",children:f("warn_title")}),l.jsx("p",{className:"text-muted text-sm m-0",children:f("warn_desc")})]})]}),d&&l.jsx("div",{className:"fixed inset-0 z-[110] flex items-center justify-center p-0 sm:p-4 md:p-6 bg-slate-950/95 backdrop-blur-md overflow-hidden animate-fade-in text-left text-slate-300",children:l.jsxs("div",{className:"relative w-full h-full sm:h-full max-w-6xl bg-[#070b14] border-0 sm:border-2 border-white/10 rounded-none sm:rounded-[2.5rem] shadow-[0_0_50px_rgba(16,185,129,0.15)] flex flex-col sm:max-h-[92vh] overflow-hidden select-none",children:[l.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/20 via-emerald-500 to-emerald-500/20 opacity-60"}),l.jsxs("header",{className:"flex items-center justify-between px-4 py-3.5 sm:px-6 sm:py-4.5 bg-[#0b1220] border-b border-white/5 shrink-0 relative z-20",children:[l.jsxs("div",{className:"flex items-center gap-2.5",children:[l.jsx("div",{className:"w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500 animate-pulse border border-emerald-400/40"}),l.jsxs("div",{className:"flex flex-col text-left",children:[l.jsx("span",{className:"text-[10px] sm:text-xs font-black text-white uppercase tracking-wider leading-none",children:"NEXUS INTERFACE SIMULATOR"}),l.jsx("span",{className:"text-[8px] sm:text-[10px] text-slate-400 uppercase tracking-widest mt-1 font-bold",children:"Consola Educativa de Smith Luque"})]})]}),l.jsxs("button",{type:"button",onClick:()=>g(!1),className:"py-1.5 px-3 sm:py-2.5 sm:px-5 rounded-xl sm:rounded-2xl text-[10px] sm:text-xs font-black uppercase text-red-500 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 hover:border-red-500/40 transition-all duration-200 cursor-pointer active:scale-95 flex items-center gap-1 shrink-0",children:[l.jsx("span",{className:"sm:hidden",children:"✕"}),l.jsx("span",{className:"hidden sm:inline",children:f("close_console")})]})]}),l.jsx("div",{className:"flex-1 overflow-y-auto p-3 sm:p-6 md:p-8 scrollbar-none relative z-10 bg-slate-950/40",children:l.jsx(N_,{isEmbedded:!0,onClose:()=>g(!1)})}),l.jsxs("footer",{className:"px-4 py-2.5 sm:px-6 sm:py-3 bg-[#050a14] border-t border-white/5 shrink-0 flex items-center justify-between text-[8px] sm:text-[10px] text-slate-500 font-bold uppercase tracking-wider",children:[l.jsx("span",{children:f("demo_mode")}),l.jsx("span",{children:"SMITH-NEXUS-2026"})]})]})})]})}const Cf={legal_info:{LATAM:"Información Legal",USD:"Legal Information",PT:"Informação Legal",FR:"Informations légales",DE:"Rechtliche Informationen"},terms_conditions1:{LATAM:"TÉRMINOS Y ",USD:"TERMS & ",PT:"TERMOS E ",FR:"CONDITIONS & ",DE:"ALLGEMEINE "},terms_conditions2:{LATAM:"CONDICIONES",USD:"CONDITIONS",PT:"CONDIÇÕES",FR:"TERMES",DE:"GESCHÄFTSBEDINGUNGEN"},read_carefully:{LATAM:"Por favor lee atentamente las normas y condiciones de uso de Mutodex MGG.",USD:"Please read the rules and conditions of use for Mutodex MGG carefully.",PT:"Por favor, leia atentamente as regras e condições de uso do Mutodex MGG.",FR:"Veuillez lire attentivement les règles et conditions d'utilisation de Mutodex MGG.",DE:"Bitte lesen Sie die Regeln und Nutzungsbedingungen für Mutodex MGG sorgfältig durch."},rights_reserved:{LATAM:"Derechos Reservados",USD:"Rights Reserved",PT:"Direitos Reservados",FR:"Droits réserves",DE:"Rechte vorbehalten"},rights_desc:{LATAM:"Todos los derechos de diseño, desarrollo y marca personal relacionada con Mutodex MGG están reservados a Smith Luque. Cualquier reproducción parcial o total del contenido multimedia o código fuente sin autorización previa está prohibida.",USD:"All rights of design, development, and personal brand related to Mutodex MGG are reserved by Smith Luque. Any partial or total reproduction of multimedia content or source code without prior authorization is prohibited.",PT:"Todos os direitos de design, desenvolvimento e marca pessoal relacionados ao Mutodex MGG são reservados por Smith Luque. Qualquer reprodução parcial ou total do conteúdo multimídia ou código-fonte sem autorização prévia é proibida.",FR:"Tous les droits de conception, de développement et de marque personnelle liés à Mutodex MGG sont réservés par Smith Luque. Toute reproduction partielle ou totale du contenu multimédia ou du code source sans autorisation préalable est interdite.",DE:"Alle Design-, Entwicklungs- und Markenrechte im Zusammenhang mit Mutodex MGG sind Smith Luque vorbehalten. Jegliche teilweise oder vollständige Vervielfältigung von Multimedia-Inhalten oder Quellcode ohne vorherige Genehmigung ist untersagt."},risks_liability:{LATAM:"Riesgos y Responsabilidad",USD:"Risks & Liability",PT:"Riscos e Responsabilidade",FR:"Risques et responsabilité",DE:"Risiken & Haftung"},risks_desc:{LATAM:"El uso de scripts, hacks o herramientas de terceros (como Game Guardian) en Mutants Genetic Gladiators conlleva un RIESGO CRÍTICO DE BANEO de tu cuenta por parte de los desarrolladores oficiales del juego (Kobojo/Syntamon).",USD:"The use of scripts, hacks, or third-party tools (such as Game Guardian) in Mutants Genetic Gladiators carries a CRITICAL RISK OF BANNING of your account by the official game developers (Kobojo/Syntamon).",PT:"O uso de scripts, hacks ou ferramentas de terceiros (como Game Guardian) em Mutants Genetic Gladiators acarreta um RISCO CRÍTICO DE BANIMENTO de sua conta pelos desenvolvedores oficiais do jogo (Kobojo/Syntamon).",FR:"L'utilisation de scripts, de hacks ou d'outils tiers (tels que Game Guardian) dans Mutants Genetic Gladiators comporte un RISQUE CRITIQUE DE BANNISSEMENT de votre compte par les développeurs officiels du jeu (Kobojo/Syntamon).",DE:"Die Verwendung von Skripten, Hacks oder Tools von Drittanbietern (wie Game Guardian) in Mutants Genetic Gladiators birgt ein KRITISCHES BAN-RISIKO Ihres Kontos durch die offiziellen Spielentwickler (Kobojo/Syntamon)."},risk_bullet1:{LATAM:"Smith Luque no se hace responsable por pérdidas de cuentas.",USD:"Smith Luque is not responsible for any banned or lost accounts.",PT:"Smith Luque não é responsável por contas perdidas ou banidas.",FR:"Smith Luque n'est pas responsable des comptes bannis ou perdus.",DE:"Smith Luque ist nicht verantwortlich für gesperrte oder verlorene Konten."},risk_bullet2:{LATAM:"El uso del contenido de esta web es bajo tu propio riesgo.",USD:"Sourcing and testing scripts or utilizing codes is fully at your own risk.",PT:"O uso do conteúdo deste site é de sua total conta e risco.",FR:"L'utilisation du contenu de ce site se fait entièrement à vos risques et périls.",DE:"Die Verwendung der Inhalte dieser Website erfolgt auf eigene Gefahr."},risk_bullet3:{LATAM:"Recomendamos siempre probar en cuentas secundarias.",USD:"We highly recommend testing any external tools on secondary accounts first.",PT:"Recomendamos sempre testar ferramentas externas em contas secundárias primeiro.",FR:"Nous vous recommandons fortement de tester d'abord les outils externes sur des comptes secondaires.",DE:"Wir empfehlen dringend, externe Tools zuerst auf Zweitkonten zu testen."},purpose_title:{LATAM:"Propósito de la Web",USD:"Purpose of the Website",PT:"Propósito do Website",FR:"But du site internet",DE:"Zweck der Website"},purpose_desc:{LATAM:"Esta plataforma ha sido creada exclusivamente con fines de aprendizaje, investigación y entretenimiento. Nuestra misión es proporcionar una base de datos organizada para la comunidad de MGG y facilitar el acceso a la información técnica del juego.",USD:"This platform has been created exclusively for learning, research, and entertainment purposes. Our mission is to provide an organized, fast database for the MGG community and simplify secure access to the technical parameters of the game.",PT:"Esta plataforma foi criada exclusivamente para fins de aprendizagem, pesquisa e entretenimento. Nossa missão é fornecer um banco de dados organizado para a comunidade MGG e facilitar o acesso seguro aos parâmetros técnicos do jogo.",FR:"Cette plateforme a été créée exclusivement à des fins d'apprentissage, de recherche et de divertissement. Notre mission est de fournir une base de données organisée et rapide pour la communauté MGG et de simplifier l'accès sécurisé aux paramètres techniques du jeu.",DE:"Diese Plattform wurde ausschließlich zu Lern-, Forschungs- und Unterhaltungszwecken erstellt. Unsere Mission ist es, eine organisierte, schnelle Datenbank für die MGG-Community bereitzustellen und den sicheren Zugriff auf die technischen Parameter des Spiels zu vereinfachen."},benefits_title:{LATAM:"Beneficios y Utilidades",USD:"Utility & Benefits",PT:"Utilidade e Benefícios",FR:"Avantages et utilités",DE:"Nutzen & Vorteile"},benefit_bullet1:{LATAM:"Acceso instantáneo a IDs de mutantes actualizados.",USD:"Instant, secure access to updated mutant identifiers.",PT:"Acesso instantâneo e seguro aos identificadores de mutantes atualizados.",FR:"Accès instantané et sécurisé aux identifiants mis à jour des mutants.",DE:"Sofortiger, sicherer Zugriff auf aktualisierte Mutantenkennungen."},benefit_bullet2:{LATAM:"Cálculo preciso de recursos para la calculadora EVO.",USD:"Precise calculation of upgrade resources in EVO calculator.",PT:"Cálculo preciso de recursos na calculadora de EVO.",FR:"Calcul précis des ressources d'amélioration dans le calculateur EVO.",DE:"Präzise Berechnung von Upgrade-Ressourcen im EVO-Rechner."},benefit_bullet3:{LATAM:"Sincronización con el blog oficial de Mutodex.",USD:"Real-time linkups with the official Mutodex blog system.",PT:"Links em tempo real com o sistema de blog oficial do Mutodex.",FR:"Liaisons en temps réel avec le système de blog officiel de Mutodex.",DE:"Echtzeit-Verknüpfungen mit dem offiziellen Mutodex-Blog-System."},benefit_bullet4:{LATAM:"Servicios de ayuda y soporte comunitario.",USD:"Group discussion links and active community assistance.",PT:"Links de discussões de grupo e assistência ativa da comunidade.",FR:"Liens de discussion de groupe et assistance communautaire active.",DE:"Gruppen-Diskussionslinks und aktive Unterstützung der Community."},inquiries:{LATAM:"Contacto",USD:"Inquiries",PT:"Dúvidas",FR:"Demandes",DE:"Anfragen"},inquiries_desc:{LATAM:"Si tienes dudas sobre estos términos, puedes contactarme vía WhatsApp.",USD:"If you have any questions or concern regarding these policies, feel free to send a message on WhatsApp.",PT:"Se você tiver alguma dúvida ou preocupação sobre estas políticas, sinta-se à vontade para enviar uma mensagem no WhatsApp.",FR:"Si vous avez des questions ou des préoccupations concernant ces politiques, n'hésitez pas à envoyer un message sur WhatsApp.",DE:"Wenn Sie Fragen oder Bedenken bezüglich dieser Richtlinien haben, können Sie uns gerne eine Nachricht über WhatsApp senden."},get_support:{LATAM:"Consultar ayuda",USD:"Get Support",PT:"Obter Suporte",FR:"Obtenir de l'aide",DE:"Support anfordern"},last_updated:{LATAM:"Última actualización: 12 de Mayo, 2026. Al navegar por este sitio, aceptas estos términos automáticamente.",USD:"Last updated: May 12, 2026. By navigating this site, you automatically accept these terms.",PT:"Última atualização: 12 de maio de 2026. Ao navegar neste site, você aceita automaticamente estes termos.",FR:"Dernière mise à jour : 12 mai 2026. En naviguant sur ce site, vous acceptez automatiquement ces conditions.",DE:"Zuletzt aktualisiert: 12. Mai 2026. Durch das Navigieren auf dieser Website akzeptieren Sie diese Bedingungen automatisch."}};function pT(){const{region:a}=_t(),s=r=>{var o,d;return((o=Cf[r])==null?void 0:o[a])||((d=Cf[r])==null?void 0:d.USD)||""};return l.jsxs("div",{className:"flex flex-col gap-6",children:[l.jsxs("section",{className:"hero !p-6 md:!p-12",children:[l.jsxs("div",{className:"eyebrow scale-90 md:scale-100",children:[l.jsx(u2,{size:14}),l.jsx("span",{children:s("legal_info")})]}),l.jsxs("h1",{className:"text-3xl md:text-5xl font-black mt-4 mb-4 uppercase tracking-tighter leading-[0.9] md:leading-[1]",children:[s("terms_conditions1"),l.jsx("span",{className:"text-blue-brand-2",children:s("terms_conditions2")})]}),l.jsx("p",{className:"text-muted text-sm md:text-base max-w-2xl mx-auto px-4 opacity-80",children:s("read_carefully")})]}),l.jsx(ea,{}),l.jsxs("div",{className:"grid md:grid-cols-[1fr_0.4fr] gap-6 items-start",children:[l.jsxs("div",{className:"flex flex-col gap-6",children:[l.jsxs("section",{className:"panel flex flex-col gap-5 p-6 md:p-8",children:[l.jsxs("div",{className:"flex items-center gap-3 border-b border-line pb-4 mb-2",children:[l.jsx(vi,{className:"text-blue-brand-2",size:24}),l.jsx("h2",{className:"m-0 text-xl font-bold uppercase tracking-tight",children:s("rights_reserved")})]}),l.jsx("p",{className:"text-slate-300 leading-relaxed",children:s("rights_desc")})]}),l.jsxs("section",{className:"panel flex flex-col gap-5 p-6 md:p-8 border-l-4 border-red-brand bg-red-brand/5",children:[l.jsxs("div",{className:"flex items-center gap-3 border-b border-white/5 pb-4 mb-2",children:[l.jsx(Bf,{className:"text-red-brand",size:24}),l.jsx("h2",{className:"m-0 text-xl font-bold uppercase tracking-tight text-white",children:s("risks_liability")})]}),l.jsxs("div",{className:"space-y-4",children:[l.jsx("p",{className:"text-slate-300 leading-relaxed m-0",children:s("risks_desc")}),l.jsxs("ul",{className:"grid gap-2 text-sm text-slate-400 list-disc pl-5",children:[l.jsx("li",{children:s("risk_bullet1")}),l.jsx("li",{children:s("risk_bullet2")}),l.jsx("li",{children:s("risk_bullet3")})]})]})]}),l.jsxs("section",{className:"panel flex flex-col gap-5 p-6 md:p-8",children:[l.jsxs("div",{className:"flex items-center gap-3 border-b border-line pb-4 mb-2",children:[l.jsx(zf,{className:"text-blue-brand-2",size:24}),l.jsx("h2",{className:"m-0 text-xl font-bold uppercase tracking-tight",children:s("purpose_title")})]}),l.jsxs("div",{className:"space-y-4",children:[l.jsx("p",{className:"text-slate-300 leading-relaxed",children:s("purpose_desc")}),l.jsxs("div",{className:"bg-white/5 p-4 rounded-xl",children:[l.jsx("h3",{className:"text-sm font-bold text-blue-brand-2 mb-2 uppercase",children:s("benefits_title")}),l.jsxs("ul",{className:"grid gap-2 text-xs md:text-sm text-slate-400",children:[l.jsxs("li",{className:"flex gap-2",children:[l.jsx("span",{children:"•"})," ",l.jsx("span",{children:s("benefit_bullet1")})]}),l.jsxs("li",{className:"flex gap-2",children:[l.jsx("span",{children:"•"})," ",l.jsx("span",{children:s("benefit_bullet2")})]}),l.jsxs("li",{className:"flex gap-2",children:[l.jsx("span",{children:"•"})," ",l.jsx("span",{children:s("benefit_bullet3")})]}),l.jsxs("li",{className:"flex gap-2",children:[l.jsx("span",{children:"•"})," ",l.jsx("span",{children:s("benefit_bullet4")})]})]})]})]})]})]}),l.jsxs("aside",{className:"flex flex-col gap-4",children:[l.jsxs("div",{className:"panel p-5 bg-blue-brand/5 border-blue-brand/20",children:[l.jsx("h3",{className:"text-xs font-bold text-blue-brand-2 uppercase mb-3",children:s("inquiries")}),l.jsx("p",{className:"text-[11px] text-muted leading-relaxed mb-4",children:s("inquiries_desc")}),l.jsx("a",{href:"https://wa.me/51906328464",target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary w-full text-xs py-2.5",children:s("get_support")})]}),l.jsx("p",{className:"text-[10px] text-center text-muted px-2",children:s("last_updated")})]})]})]})}function gT(){const[a,s]=O.useState(window.location.hash.replace(/^#/,"")||"/"),[r,o]=O.useState(navigator.onLine);O.useEffect(()=>{const p=()=>{s(window.location.hash.replace(/^#/,"")||"/")},b=()=>o(!0),_=()=>o(!1);return window.addEventListener("hashchange",p),window.addEventListener("online",b),window.addEventListener("offline",_),()=>{window.removeEventListener("hashchange",p),window.removeEventListener("online",b),window.removeEventListener("offline",_)}},[]);const d=p=>{window.location.hash=p},g=()=>{switch(a.split("#")[0].split("?")[0]){case"/":return l.jsx(Af,{});case"/novedades":return l.jsx(tT,{});case"/servicios":return l.jsx(nT,{});case"/evo":return l.jsx(iT,{});case"/otros":return l.jsx(rT,{});case"/guia":return l.jsx(lT,{});case"/tutoriales":return l.jsx(cT,{});case"/descargas":return l.jsx(dT,{});case"/terminos":return l.jsx(pT,{});case"/guia-script":return l.jsx(N_,{});default:return l.jsx(Af,{})}};return l.jsx(EA,{currentPath:a,onNavigate:d,isOnline:r,children:g()})}mG.createRoot(document.getElementById("root")).render(l.jsx(O.StrictMode,{children:l.jsx(VA,{children:l.jsx(gT,{})})}));
