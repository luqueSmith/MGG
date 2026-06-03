(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))r(d);new MutationObserver(d=>{for(const g of d)if(g.type==="childList")for(const p of g.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function o(d){const g={};return d.integrity&&(g.integrity=d.integrity),d.referrerPolicy&&(g.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?g.credentials="include":d.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function r(d){if(d.ep)return;d.ep=!0;const g=o(d);fetch(d.href,g)}})();function a2(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var eu={exports:{}},mi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lh;function s2(){if(Lh)return mi;Lh=1;var a=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function o(r,d,g){var p=null;if(g!==void 0&&(p=""+g),d.key!==void 0&&(p=""+d.key),"key"in d){g={};for(var b in d)b!=="key"&&(g[b]=d[b])}else g=d;return d=g.ref,{$$typeof:a,type:r,key:p,ref:d!==void 0?d:null,props:g}}return mi.Fragment=s,mi.jsx=o,mi.jsxs=o,mi}var zh;function i2(){return zh||(zh=1,eu.exports=s2()),eu.exports}var c=i2(),tu={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oh;function o2(){if(Oh)return oe;Oh=1;var a=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),g=Symbol.for("react.consumer"),p=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),k=Symbol.for("react.activity"),G=Symbol.iterator;function y(T){return T===null||typeof T!="object"?null:(T=G&&T[G]||T["@@iterator"],typeof T=="function"?T:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,S={};function w(T,F,J){this.props=T,this.context=F,this.refs=S,this.updater=J||v}w.prototype.isReactComponent={},w.prototype.setState=function(T,F){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,F,"setState")},w.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function X(){}X.prototype=w.prototype;function H(T,F,J){this.props=T,this.context=F,this.refs=S,this.updater=J||v}var V=H.prototype=new X;V.constructor=H,I(V,w.prototype),V.isPureReactComponent=!0;var Y=Array.isArray;function z(){}var U={H:null,A:null,T:null,S:null},q=Object.prototype.hasOwnProperty;function Z(T,F,J){var ne=J.ref;return{$$typeof:a,type:T,key:F,ref:ne!==void 0?ne:null,props:J}}function K(T,F){return Z(T.type,F,T.props)}function te(T){return typeof T=="object"&&T!==null&&T.$$typeof===a}function le(T){var F={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(J){return F[J]})}var Re=/\/+/g;function Ce(T,F){return typeof T=="object"&&T!==null&&T.key!=null?le(""+T.key):F.toString(36)}function we(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(z,z):(T.status="pending",T.then(function(F){T.status==="pending"&&(T.status="fulfilled",T.value=F)},function(F){T.status==="pending"&&(T.status="rejected",T.reason=F)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function R(T,F,J,ne,ce){var ge=typeof T;(ge==="undefined"||ge==="boolean")&&(T=null);var Me=!1;if(T===null)Me=!0;else switch(ge){case"bigint":case"string":case"number":Me=!0;break;case"object":switch(T.$$typeof){case a:case s:Me=!0;break;case f:return Me=T._init,R(Me(T._payload),F,J,ne,ce)}}if(Me)return ce=ce(T),Me=ne===""?"."+Ce(T,0):ne,Y(ce)?(J="",Me!=null&&(J=Me.replace(Re,"$&/")+"/"),R(ce,F,J,"",function(Gs){return Gs})):ce!=null&&(te(ce)&&(ce=K(ce,J+(ce.key==null||T&&T.key===ce.key?"":(""+ce.key).replace(Re,"$&/")+"/")+Me)),F.push(ce)),1;Me=0;var rt=ne===""?".":ne+":";if(Y(T))for(var Oe=0;Oe<T.length;Oe++)ne=T[Oe],ge=rt+Ce(ne,Oe),Me+=R(ne,F,J,ge,ce);else if(Oe=y(T),typeof Oe=="function")for(T=Oe.call(T),Oe=0;!(ne=T.next()).done;)ne=ne.value,ge=rt+Ce(ne,Oe++),Me+=R(ne,F,J,ge,ce);else if(ge==="object"){if(typeof T.then=="function")return R(we(T),F,J,ne,ce);throw F=String(T),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.")}return Me}function Q(T,F,J){if(T==null)return T;var ne=[],ce=0;return R(T,ne,"","",function(ge){return F.call(J,ge,ce++)}),ne}function W(T){if(T._status===-1){var F=T._result;F=F(),F.then(function(J){(T._status===0||T._status===-1)&&(T._status=1,T._result=J)},function(J){(T._status===0||T._status===-1)&&(T._status=2,T._result=J)}),T._status===-1&&(T._status=0,T._result=F)}if(T._status===1)return T._result.default;throw T._result}var de=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var F=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(F))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)},_e={map:Q,forEach:function(T,F,J){Q(T,function(){F.apply(this,arguments)},J)},count:function(T){var F=0;return Q(T,function(){F++}),F},toArray:function(T){return Q(T,function(F){return F})||[]},only:function(T){if(!te(T))throw Error("React.Children.only expected to receive a single React element child.");return T}};return oe.Activity=k,oe.Children=_e,oe.Component=w,oe.Fragment=o,oe.Profiler=d,oe.PureComponent=H,oe.StrictMode=r,oe.Suspense=_,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=U,oe.__COMPILER_RUNTIME={__proto__:null,c:function(T){return U.H.useMemoCache(T)}},oe.cache=function(T){return function(){return T.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(T,F,J){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var ne=I({},T.props),ce=T.key;if(F!=null)for(ge in F.key!==void 0&&(ce=""+F.key),F)!q.call(F,ge)||ge==="key"||ge==="__self"||ge==="__source"||ge==="ref"&&F.ref===void 0||(ne[ge]=F[ge]);var ge=arguments.length-2;if(ge===1)ne.children=J;else if(1<ge){for(var Me=Array(ge),rt=0;rt<ge;rt++)Me[rt]=arguments[rt+2];ne.children=Me}return Z(T.type,ce,ne)},oe.createContext=function(T){return T={$$typeof:p,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:g,_context:T},T},oe.createElement=function(T,F,J){var ne,ce={},ge=null;if(F!=null)for(ne in F.key!==void 0&&(ge=""+F.key),F)q.call(F,ne)&&ne!=="key"&&ne!=="__self"&&ne!=="__source"&&(ce[ne]=F[ne]);var Me=arguments.length-2;if(Me===1)ce.children=J;else if(1<Me){for(var rt=Array(Me),Oe=0;Oe<Me;Oe++)rt[Oe]=arguments[Oe+2];ce.children=rt}if(T&&T.defaultProps)for(ne in Me=T.defaultProps,Me)ce[ne]===void 0&&(ce[ne]=Me[ne]);return Z(T,ge,ce)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(T){return{$$typeof:b,render:T}},oe.isValidElement=te,oe.lazy=function(T){return{$$typeof:f,_payload:{_status:-1,_result:T},_init:W}},oe.memo=function(T,F){return{$$typeof:h,type:T,compare:F===void 0?null:F}},oe.startTransition=function(T){var F=U.T,J={};U.T=J;try{var ne=T(),ce=U.S;ce!==null&&ce(J,ne),typeof ne=="object"&&ne!==null&&typeof ne.then=="function"&&ne.then(z,de)}catch(ge){de(ge)}finally{F!==null&&J.types!==null&&(F.types=J.types),U.T=F}},oe.unstable_useCacheRefresh=function(){return U.H.useCacheRefresh()},oe.use=function(T){return U.H.use(T)},oe.useActionState=function(T,F,J){return U.H.useActionState(T,F,J)},oe.useCallback=function(T,F){return U.H.useCallback(T,F)},oe.useContext=function(T){return U.H.useContext(T)},oe.useDebugValue=function(){},oe.useDeferredValue=function(T,F){return U.H.useDeferredValue(T,F)},oe.useEffect=function(T,F){return U.H.useEffect(T,F)},oe.useEffectEvent=function(T){return U.H.useEffectEvent(T)},oe.useId=function(){return U.H.useId()},oe.useImperativeHandle=function(T,F,J){return U.H.useImperativeHandle(T,F,J)},oe.useInsertionEffect=function(T,F){return U.H.useInsertionEffect(T,F)},oe.useLayoutEffect=function(T,F){return U.H.useLayoutEffect(T,F)},oe.useMemo=function(T,F){return U.H.useMemo(T,F)},oe.useOptimistic=function(T,F){return U.H.useOptimistic(T,F)},oe.useReducer=function(T,F,J){return U.H.useReducer(T,F,J)},oe.useRef=function(T){return U.H.useRef(T)},oe.useState=function(T){return U.H.useState(T)},oe.useSyncExternalStore=function(T,F,J){return U.H.useSyncExternalStore(T,F,J)},oe.useTransition=function(){return U.H.useTransition()},oe.version="19.2.7",oe}var Bh;function ld(){return Bh||(Bh=1,tu.exports=o2()),tu.exports}var B=ld();const Wo=a2(B);var nu={exports:{}},hi={},au={exports:{}},su={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uh;function r2(){return Uh||(Uh=1,(function(a){function s(R,Q){var W=R.length;R.push(Q);e:for(;0<W;){var de=W-1>>>1,_e=R[de];if(0<d(_e,Q))R[de]=Q,R[W]=_e,W=de;else break e}}function o(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var Q=R[0],W=R.pop();if(W!==Q){R[0]=W;e:for(var de=0,_e=R.length,T=_e>>>1;de<T;){var F=2*(de+1)-1,J=R[F],ne=F+1,ce=R[ne];if(0>d(J,W))ne<_e&&0>d(ce,J)?(R[de]=ce,R[ne]=W,de=ne):(R[de]=J,R[F]=W,de=F);else if(ne<_e&&0>d(ce,W))R[de]=ce,R[ne]=W,de=ne;else break e}}return Q}function d(R,Q){var W=R.sortIndex-Q.sortIndex;return W!==0?W:R.id-Q.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var g=performance;a.unstable_now=function(){return g.now()}}else{var p=Date,b=p.now();a.unstable_now=function(){return p.now()-b}}var _=[],h=[],f=1,k=null,G=3,y=!1,v=!1,I=!1,S=!1,w=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function V(R){for(var Q=o(h);Q!==null;){if(Q.callback===null)r(h);else if(Q.startTime<=R)r(h),Q.sortIndex=Q.expirationTime,s(_,Q);else break;Q=o(h)}}function Y(R){if(I=!1,V(R),!v)if(o(_)!==null)v=!0,z||(z=!0,le());else{var Q=o(h);Q!==null&&we(Y,Q.startTime-R)}}var z=!1,U=-1,q=5,Z=-1;function K(){return S?!0:!(a.unstable_now()-Z<q)}function te(){if(S=!1,z){var R=a.unstable_now();Z=R;var Q=!0;try{e:{v=!1,I&&(I=!1,X(U),U=-1),y=!0;var W=G;try{t:{for(V(R),k=o(_);k!==null&&!(k.expirationTime>R&&K());){var de=k.callback;if(typeof de=="function"){k.callback=null,G=k.priorityLevel;var _e=de(k.expirationTime<=R);if(R=a.unstable_now(),typeof _e=="function"){k.callback=_e,V(R),Q=!0;break t}k===o(_)&&r(_),V(R)}else r(_);k=o(_)}if(k!==null)Q=!0;else{var T=o(h);T!==null&&we(Y,T.startTime-R),Q=!1}}break e}finally{k=null,G=W,y=!1}Q=void 0}}finally{Q?le():z=!1}}}var le;if(typeof H=="function")le=function(){H(te)};else if(typeof MessageChannel<"u"){var Re=new MessageChannel,Ce=Re.port2;Re.port1.onmessage=te,le=function(){Ce.postMessage(null)}}else le=function(){w(te,0)};function we(R,Q){U=w(function(){R(a.unstable_now())},Q)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(R){R.callback=null},a.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<R?Math.floor(1e3/R):5},a.unstable_getCurrentPriorityLevel=function(){return G},a.unstable_next=function(R){switch(G){case 1:case 2:case 3:var Q=3;break;default:Q=G}var W=G;G=Q;try{return R()}finally{G=W}},a.unstable_requestPaint=function(){S=!0},a.unstable_runWithPriority=function(R,Q){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var W=G;G=R;try{return Q()}finally{G=W}},a.unstable_scheduleCallback=function(R,Q,W){var de=a.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?de+W:de):W=de,R){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=W+_e,R={id:f++,callback:Q,priorityLevel:R,startTime:W,expirationTime:_e,sortIndex:-1},W>de?(R.sortIndex=W,s(h,R),o(_)===null&&R===o(h)&&(I?(X(U),U=-1):I=!0,we(Y,W-de))):(R.sortIndex=_e,s(_,R),v||y||(v=!0,z||(z=!0,le()))),R},a.unstable_shouldYield=K,a.unstable_wrapCallback=function(R){var Q=G;return function(){var W=G;G=Q;try{return R.apply(this,arguments)}finally{G=W}}}})(su)),su}var Ph;function l2(){return Ph||(Ph=1,au.exports=r2()),au.exports}var iu={exports:{}},ot={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fh;function c2(){if(Fh)return ot;Fh=1;var a=ld();function s(_){var h="https://react.dev/errors/"+_;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var f=2;f<arguments.length;f++)h+="&args[]="+encodeURIComponent(arguments[f])}return"Minified React error #"+_+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var r={d:{f:o,r:function(){throw Error(s(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},d=Symbol.for("react.portal");function g(_,h,f){var k=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:k==null?null:""+k,children:_,containerInfo:h,implementation:f}}var p=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(_,h){if(_==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return ot.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,ot.createPortal=function(_,h){var f=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(s(299));return g(_,h,null,f)},ot.flushSync=function(_){var h=p.T,f=r.p;try{if(p.T=null,r.p=2,_)return _()}finally{p.T=h,r.p=f,r.d.f()}},ot.preconnect=function(_,h){typeof _=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(_,h))},ot.prefetchDNS=function(_){typeof _=="string"&&r.d.D(_)},ot.preinit=function(_,h){if(typeof _=="string"&&h&&typeof h.as=="string"){var f=h.as,k=b(f,h.crossOrigin),G=typeof h.integrity=="string"?h.integrity:void 0,y=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;f==="style"?r.d.S(_,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:k,integrity:G,fetchPriority:y}):f==="script"&&r.d.X(_,{crossOrigin:k,integrity:G,fetchPriority:y,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},ot.preinitModule=function(_,h){if(typeof _=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var f=b(h.as,h.crossOrigin);r.d.M(_,{crossOrigin:f,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(_)},ot.preload=function(_,h){if(typeof _=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var f=h.as,k=b(f,h.crossOrigin);r.d.L(_,f,{crossOrigin:k,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},ot.preloadModule=function(_,h){if(typeof _=="string")if(h){var f=b(h.as,h.crossOrigin);r.d.m(_,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:f,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(_)},ot.requestFormReset=function(_){r.d.r(_)},ot.unstable_batchedUpdates=function(_,h){return _(h)},ot.useFormState=function(_,h,f){return p.H.useFormState(_,h,f)},ot.useFormStatus=function(){return p.H.useHostTransitionStatus()},ot.version="19.2.7",ot}var Kh;function u2(){if(Kh)return iu.exports;Kh=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(s){console.error(s)}}return a(),iu.exports=c2(),iu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xh;function d2(){if(Xh)return hi;Xh=1;var a=l2(),s=ld(),o=u2();function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function g(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _(e){if(g(e)!==e)throw Error(r(188))}function h(e){var t=e.alternate;if(!t){if(t=g(e),t===null)throw Error(r(188));return t!==e?null:e}for(var n=e,i=t;;){var l=n.return;if(l===null)break;var u=l.alternate;if(u===null){if(i=l.return,i!==null){n=i;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===n)return _(l),e;if(u===i)return _(l),t;u=u.sibling}throw Error(r(188))}if(n.return!==i.return)n=l,i=u;else{for(var m=!1,x=l.child;x;){if(x===n){m=!0,n=l,i=u;break}if(x===i){m=!0,i=l,n=u;break}x=x.sibling}if(!m){for(x=u.child;x;){if(x===n){m=!0,n=u,i=l;break}if(x===i){m=!0,i=u,n=l;break}x=x.sibling}if(!m)throw Error(r(189))}}if(n.alternate!==i)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var k=Object.assign,G=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),v=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),X=Symbol.for("react.consumer"),H=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),Z=Symbol.for("react.activity"),K=Symbol.for("react.memo_cache_sentinel"),te=Symbol.iterator;function le(e){return e===null||typeof e!="object"?null:(e=te&&e[te]||e["@@iterator"],typeof e=="function"?e:null)}var Re=Symbol.for("react.client.reference");function Ce(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Re?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case I:return"Fragment";case w:return"Profiler";case S:return"StrictMode";case Y:return"Suspense";case z:return"SuspenseList";case Z:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case v:return"Portal";case H:return e.displayName||"Context";case X:return(e._context.displayName||"Context")+".Consumer";case V:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case U:return t=e.displayName||null,t!==null?t:Ce(e.type)||"Memo";case q:t=e._payload,e=e._init;try{return Ce(e(t))}catch{}}return null}var we=Array.isArray,R=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},de=[],_e=-1;function T(e){return{current:e}}function F(e){0>_e||(e.current=de[_e],de[_e]=null,_e--)}function J(e,t){_e++,de[_e]=e.current,e.current=t}var ne=T(null),ce=T(null),ge=T(null),Me=T(null);function rt(e,t){switch(J(ge,t),J(ce,e),J(ne,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?lh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=lh(t),e=ch(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}F(ne),J(ne,e)}function Oe(){F(ne),F(ce),F(ge)}function Gs(e){e.memoizedState!==null&&J(Me,e);var t=ne.current,n=ch(t,e.type);t!==n&&(J(ce,e),J(ne,n))}function Di(e){ce.current===e&&(F(ne),F(ce)),Me.current===e&&(F(Me),ui._currentValue=W)}var Cr,Hd;function ta(e){if(Cr===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Cr=t&&t[1]||"",Hd=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Cr+e+Hd}var Rr=!1;function Hr(e,t){if(!e||Rr)return"";Rr=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var P=function(){throw Error()};if(Object.defineProperty(P.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(P,[])}catch(C){var D=C}Reflect.construct(e,[],P)}else{try{P.call()}catch(C){D=C}e.call(P.prototype)}}else{try{throw Error()}catch(C){D=C}(P=e())&&typeof P.catch=="function"&&P.catch(function(){})}}catch(C){if(C&&D&&typeof C.stack=="string")return[C.stack,D.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=i.DetermineComponentFrameRoot(),m=u[0],x=u[1];if(m&&x){var M=m.split(`
`),N=x.split(`
`);for(l=i=0;i<M.length&&!M[i].includes("DetermineComponentFrameRoot");)i++;for(;l<N.length&&!N[l].includes("DetermineComponentFrameRoot");)l++;if(i===M.length||l===N.length)for(i=M.length-1,l=N.length-1;1<=i&&0<=l&&M[i]!==N[l];)l--;for(;1<=i&&0<=l;i--,l--)if(M[i]!==N[l]){if(i!==1||l!==1)do if(i--,l--,0>l||M[i]!==N[l]){var L=`
`+M[i].replace(" at new "," at ");return e.displayName&&L.includes("<anonymous>")&&(L=L.replace("<anonymous>",e.displayName)),L}while(1<=i&&0<=l);break}}}finally{Rr=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ta(n):""}function w_(e,t){switch(e.tag){case 26:case 27:case 5:return ta(e.type);case 16:return ta("Lazy");case 13:return e.child!==t&&t!==null?ta("Suspense Fallback"):ta("Suspense");case 19:return ta("SuspenseList");case 0:case 15:return Hr(e.type,!1);case 11:return Hr(e.type.render,!1);case 1:return Hr(e.type,!0);case 31:return ta("Activity");default:return""}}function Ld(e){try{var t="",n=null;do t+=w_(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Lr=Object.prototype.hasOwnProperty,zr=a.unstable_scheduleCallback,Or=a.unstable_cancelCallback,q_=a.unstable_shouldYield,C_=a.unstable_requestPaint,xt=a.unstable_now,R_=a.unstable_getCurrentPriorityLevel,zd=a.unstable_ImmediatePriority,Od=a.unstable_UserBlockingPriority,wi=a.unstable_NormalPriority,H_=a.unstable_LowPriority,Bd=a.unstable_IdlePriority,L_=a.log,z_=a.unstable_setDisableYieldValue,ys=null,kt=null;function Mn(e){if(typeof L_=="function"&&z_(e),kt&&typeof kt.setStrictMode=="function")try{kt.setStrictMode(ys,e)}catch{}}var Gt=Math.clz32?Math.clz32:U_,O_=Math.log,B_=Math.LN2;function U_(e){return e>>>=0,e===0?32:31-(O_(e)/B_|0)|0}var qi=256,Ci=262144,Ri=4194304;function na(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Hi(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var l=0,u=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var x=i&134217727;return x!==0?(i=x&~u,i!==0?l=na(i):(m&=x,m!==0?l=na(m):n||(n=x&~e,n!==0&&(l=na(n))))):(x=i&~u,x!==0?l=na(x):m!==0?l=na(m):n||(n=i&~e,n!==0&&(l=na(n)))),l===0?0:t!==0&&t!==l&&(t&u)===0&&(u=l&-l,n=t&-t,u>=n||u===32&&(n&4194048)!==0)?t:l}function Ms(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function P_(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ud(){var e=Ri;return Ri<<=1,(Ri&62914560)===0&&(Ri=4194304),e}function Br(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vs(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function F_(e,t,n,i,l,u){var m=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var x=e.entanglements,M=e.expirationTimes,N=e.hiddenUpdates;for(n=m&~n;0<n;){var L=31-Gt(n),P=1<<L;x[L]=0,M[L]=-1;var D=N[L];if(D!==null)for(N[L]=null,L=0;L<D.length;L++){var C=D[L];C!==null&&(C.lane&=-536870913)}n&=~P}i!==0&&Pd(e,i,0),u!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=u&~(m&~t))}function Pd(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Gt(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function Fd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Gt(n),l=1<<i;l&t|e[i]&t&&(e[i]|=t),n&=~l}}function Kd(e,t){var n=t&-t;return n=(n&42)!==0?1:Ur(n),(n&(e.suspendedLanes|t))!==0?0:n}function Ur(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Pr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Xd(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:Nh(e.type))}function Zd(e,t){var n=Q.p;try{return Q.p=e,t()}finally{Q.p=n}}var vn=Math.random().toString(36).slice(2),$e="__reactFiber$"+vn,dt="__reactProps$"+vn,Ta="__reactContainer$"+vn,Fr="__reactEvents$"+vn,K_="__reactListeners$"+vn,X_="__reactHandles$"+vn,Yd="__reactResources$"+vn,As="__reactMarker$"+vn;function Kr(e){delete e[$e],delete e[dt],delete e[Fr],delete e[K_],delete e[X_]}function Sa(e){var t=e[$e];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ta]||n[$e]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=bh(e);e!==null;){if(n=e[$e])return n;e=bh(e)}return t}e=n,n=e.parentNode}return null}function Ia(e){if(e=e[$e]||e[Ta]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ts(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(r(33))}function ja(e){var t=e[Yd];return t||(t=e[Yd]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Je(e){e[As]=!0}var Qd=new Set,Jd={};function aa(e,t){Va(e,t),Va(e+"Capture",t)}function Va(e,t){for(Jd[e]=t,e=0;e<t.length;e++)Qd.add(t[e])}var Z_=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Wd={},$d={};function Y_(e){return Lr.call($d,e)?!0:Lr.call(Wd,e)?!1:Z_.test(e)?$d[e]=!0:(Wd[e]=!0,!1)}function Li(e,t,n){if(Y_(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function zi(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function an(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function Vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ep(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Q_(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var l=i.get,u=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(m){n=""+m,u.call(this,m)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(m){n=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xr(e){if(!e._valueTracker){var t=ep(e)?"checked":"value";e._valueTracker=Q_(e,t,""+e[t])}}function tp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=ep(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Oi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var J_=/[\n"\\]/g;function Et(e){return e.replace(J_,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Zr(e,t,n,i,l,u,m,x){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Vt(t)):e.value!==""+Vt(t)&&(e.value=""+Vt(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?Yr(e,m,Vt(t)):n!=null?Yr(e,m,Vt(n)):i!=null&&e.removeAttribute("value"),l==null&&u!=null&&(e.defaultChecked=!!u),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.name=""+Vt(x):e.removeAttribute("name")}function np(e,t,n,i,l,u,m,x){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){Xr(e);return}n=n!=null?""+Vt(n):"",t=t!=null?""+Vt(t):n,x||t===e.value||(e.value=t),e.defaultValue=t}i=i??l,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=x?e.checked:!!i,e.defaultChecked=!!i,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m),Xr(e)}function Yr(e,t,n){t==="number"&&Oi(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Ea(e,t,n,i){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Vt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,i&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ap(e,t,n){if(t!=null&&(t=""+Vt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Vt(n):""}function sp(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(r(92));if(we(i)){if(1<i.length)throw Error(r(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Vt(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Xr(e)}function Na(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var W_=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ip(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||W_.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function op(e,t,n){if(t!=null&&typeof t!="object")throw Error(r(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var l in t)i=t[l],t.hasOwnProperty(l)&&n[l]!==i&&ip(e,l,i)}else for(var u in t)t.hasOwnProperty(u)&&ip(e,u,t[u])}function Qr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),e1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Bi(e){return e1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function sn(){}var Jr=null;function Wr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Da=null,wa=null;function rp(e){var t=Ia(e);if(t&&(e=t.stateNode)){var n=e[dt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Zr(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Et(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var l=i[dt]||null;if(!l)throw Error(r(90));Zr(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&tp(i)}break e;case"textarea":ap(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Ea(e,!!n.multiple,t,!1)}}}var $r=!1;function lp(e,t,n){if($r)return e(t,n);$r=!0;try{var i=e(t);return i}finally{if($r=!1,(Da!==null||wa!==null)&&(Vo(),Da&&(t=Da,e=wa,wa=Da=null,rp(t),e)))for(t=0;t<e.length;t++)rp(e[t])}}function Ss(e,t){var n=e.stateNode;if(n===null)return null;var i=n[dt]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(r(231,t,typeof n));return n}var on=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),el=!1;if(on)try{var Is={};Object.defineProperty(Is,"passive",{get:function(){el=!0}}),window.addEventListener("test",Is,Is),window.removeEventListener("test",Is,Is)}catch{el=!1}var An=null,tl=null,Ui=null;function cp(){if(Ui)return Ui;var e,t=tl,n=t.length,i,l="value"in An?An.value:An.textContent,u=l.length;for(e=0;e<n&&t[e]===l[e];e++);var m=n-e;for(i=1;i<=m&&t[n-i]===l[u-i];i++);return Ui=l.slice(e,1<i?1-i:void 0)}function Pi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fi(){return!0}function up(){return!1}function pt(e){function t(n,i,l,u,m){this._reactName=n,this._targetInst=l,this.type=i,this.nativeEvent=u,this.target=m,this.currentTarget=null;for(var x in e)e.hasOwnProperty(x)&&(n=e[x],this[x]=n?n(u):u[x]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Fi:up,this.isPropagationStopped=up,this}return k(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fi)},persist:function(){},isPersistent:Fi}),t}var sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ki=pt(sa),js=k({},sa,{view:0,detail:0}),t1=pt(js),nl,al,Vs,Xi=k({},js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:il,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vs&&(Vs&&e.type==="mousemove"?(nl=e.screenX-Vs.screenX,al=e.screenY-Vs.screenY):al=nl=0,Vs=e),nl)},movementY:function(e){return"movementY"in e?e.movementY:al}}),dp=pt(Xi),n1=k({},Xi,{dataTransfer:0}),a1=pt(n1),s1=k({},js,{relatedTarget:0}),sl=pt(s1),i1=k({},sa,{animationName:0,elapsedTime:0,pseudoElement:0}),o1=pt(i1),r1=k({},sa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),l1=pt(r1),c1=k({},sa,{data:0}),pp=pt(c1),u1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},d1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},p1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function g1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=p1[e])?!!t[e]:!1}function il(){return g1}var m1=k({},js,{key:function(e){if(e.key){var t=u1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?d1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:il,charCode:function(e){return e.type==="keypress"?Pi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),h1=pt(m1),b1=k({},Xi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gp=pt(b1),f1=k({},js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:il}),_1=pt(f1),x1=k({},sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),k1=pt(x1),G1=k({},Xi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),y1=pt(G1),M1=k({},sa,{newState:0,oldState:0}),v1=pt(M1),A1=[9,13,27,32],ol=on&&"CompositionEvent"in window,Es=null;on&&"documentMode"in document&&(Es=document.documentMode);var T1=on&&"TextEvent"in window&&!Es,mp=on&&(!ol||Es&&8<Es&&11>=Es),hp=" ",bp=!1;function fp(e,t){switch(e){case"keyup":return A1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _p(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qa=!1;function S1(e,t){switch(e){case"compositionend":return _p(t);case"keypress":return t.which!==32?null:(bp=!0,hp);case"textInput":return e=t.data,e===hp&&bp?null:e;default:return null}}function I1(e,t){if(qa)return e==="compositionend"||!ol&&fp(e,t)?(e=cp(),Ui=tl=An=null,qa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return mp&&t.locale!=="ko"?null:t.data;default:return null}}var j1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!j1[e.type]:t==="textarea"}function kp(e,t,n,i){Da?wa?wa.push(i):wa=[i]:Da=i,t=Ro(t,"onChange"),0<t.length&&(n=new Ki("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Ns=null,Ds=null;function V1(e){nh(e,0)}function Zi(e){var t=Ts(e);if(tp(t))return e}function Gp(e,t){if(e==="change")return t}var yp=!1;if(on){var rl;if(on){var ll="oninput"in document;if(!ll){var Mp=document.createElement("div");Mp.setAttribute("oninput","return;"),ll=typeof Mp.oninput=="function"}rl=ll}else rl=!1;yp=rl&&(!document.documentMode||9<document.documentMode)}function vp(){Ns&&(Ns.detachEvent("onpropertychange",Ap),Ds=Ns=null)}function Ap(e){if(e.propertyName==="value"&&Zi(Ds)){var t=[];kp(t,Ds,e,Wr(e)),lp(V1,t)}}function E1(e,t,n){e==="focusin"?(vp(),Ns=t,Ds=n,Ns.attachEvent("onpropertychange",Ap)):e==="focusout"&&vp()}function N1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zi(Ds)}function D1(e,t){if(e==="click")return Zi(t)}function w1(e,t){if(e==="input"||e==="change")return Zi(t)}function q1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yt=typeof Object.is=="function"?Object.is:q1;function ws(e,t){if(yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var l=n[i];if(!Lr.call(t,l)||!yt(e[l],t[l]))return!1}return!0}function Tp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Sp(e,t){var n=Tp(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Tp(n)}}function Ip(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ip(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Oi(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Oi(e.document)}return t}function cl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var C1=on&&"documentMode"in document&&11>=document.documentMode,Ca=null,ul=null,qs=null,dl=!1;function Vp(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;dl||Ca==null||Ca!==Oi(i)||(i=Ca,"selectionStart"in i&&cl(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),qs&&ws(qs,i)||(qs=i,i=Ro(ul,"onSelect"),0<i.length&&(t=new Ki("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Ca)))}function ia(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ra={animationend:ia("Animation","AnimationEnd"),animationiteration:ia("Animation","AnimationIteration"),animationstart:ia("Animation","AnimationStart"),transitionrun:ia("Transition","TransitionRun"),transitionstart:ia("Transition","TransitionStart"),transitioncancel:ia("Transition","TransitionCancel"),transitionend:ia("Transition","TransitionEnd")},pl={},Ep={};on&&(Ep=document.createElement("div").style,"AnimationEvent"in window||(delete Ra.animationend.animation,delete Ra.animationiteration.animation,delete Ra.animationstart.animation),"TransitionEvent"in window||delete Ra.transitionend.transition);function oa(e){if(pl[e])return pl[e];if(!Ra[e])return e;var t=Ra[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ep)return pl[e]=t[n];return e}var Np=oa("animationend"),Dp=oa("animationiteration"),wp=oa("animationstart"),R1=oa("transitionrun"),H1=oa("transitionstart"),L1=oa("transitioncancel"),qp=oa("transitionend"),Cp=new Map,gl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gl.push("scrollEnd");function Bt(e,t){Cp.set(e,t),aa(t,[e])}var Yi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Nt=[],Ha=0,ml=0;function Qi(){for(var e=Ha,t=ml=Ha=0;t<e;){var n=Nt[t];Nt[t++]=null;var i=Nt[t];Nt[t++]=null;var l=Nt[t];Nt[t++]=null;var u=Nt[t];if(Nt[t++]=null,i!==null&&l!==null){var m=i.pending;m===null?l.next=l:(l.next=m.next,m.next=l),i.pending=l}u!==0&&Rp(n,l,u)}}function Ji(e,t,n,i){Nt[Ha++]=e,Nt[Ha++]=t,Nt[Ha++]=n,Nt[Ha++]=i,ml|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function hl(e,t,n,i){return Ji(e,t,n,i),Wi(e)}function ra(e,t){return Ji(e,null,null,t),Wi(e)}function Rp(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var l=!1,u=e.return;u!==null;)u.childLanes|=n,i=u.alternate,i!==null&&(i.childLanes|=n),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(l=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,l&&t!==null&&(l=31-Gt(n),e=u.hiddenUpdates,i=e[l],i===null?e[l]=[t]:i.push(t),t.lane=n|536870912),u):null}function Wi(e){if(50<ai)throw ai=0,vc=null,Error(r(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var La={};function z1(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(e,t,n,i){return new z1(e,t,n,i)}function bl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rn(e,t){var n=e.alternate;return n===null?(n=Mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Hp(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function $i(e,t,n,i,l,u){var m=0;if(i=e,typeof e=="function")bl(e)&&(m=1);else if(typeof e=="string")m=Fx(e,n,ne.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Z:return e=Mt(31,n,t,l),e.elementType=Z,e.lanes=u,e;case I:return la(n.children,l,u,t);case S:m=8,l|=24;break;case w:return e=Mt(12,n,t,l|2),e.elementType=w,e.lanes=u,e;case Y:return e=Mt(13,n,t,l),e.elementType=Y,e.lanes=u,e;case z:return e=Mt(19,n,t,l),e.elementType=z,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case H:m=10;break e;case X:m=9;break e;case V:m=11;break e;case U:m=14;break e;case q:m=16,i=null;break e}m=29,n=Error(r(130,e===null?"null":typeof e,"")),i=null}return t=Mt(m,n,t,l),t.elementType=e,t.type=i,t.lanes=u,t}function la(e,t,n,i){return e=Mt(7,e,i,t),e.lanes=n,e}function fl(e,t,n){return e=Mt(6,e,null,t),e.lanes=n,e}function Lp(e){var t=Mt(18,null,null,0);return t.stateNode=e,t}function _l(e,t,n){return t=Mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var zp=new WeakMap;function Dt(e,t){if(typeof e=="object"&&e!==null){var n=zp.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Ld(t)},zp.set(e,t),t)}return{value:e,source:t,stack:Ld(t)}}var za=[],Oa=0,eo=null,Cs=0,wt=[],qt=0,Tn=null,Zt=1,Yt="";function ln(e,t){za[Oa++]=Cs,za[Oa++]=eo,eo=e,Cs=t}function Op(e,t,n){wt[qt++]=Zt,wt[qt++]=Yt,wt[qt++]=Tn,Tn=e;var i=Zt;e=Yt;var l=32-Gt(i)-1;i&=~(1<<l),n+=1;var u=32-Gt(t)+l;if(30<u){var m=l-l%5;u=(i&(1<<m)-1).toString(32),i>>=m,l-=m,Zt=1<<32-Gt(t)+l|n<<l|i,Yt=u+e}else Zt=1<<u|n<<l|i,Yt=e}function xl(e){e.return!==null&&(ln(e,1),Op(e,1,0))}function kl(e){for(;e===eo;)eo=za[--Oa],za[Oa]=null,Cs=za[--Oa],za[Oa]=null;for(;e===Tn;)Tn=wt[--qt],wt[qt]=null,Yt=wt[--qt],wt[qt]=null,Zt=wt[--qt],wt[qt]=null}function Bp(e,t){wt[qt++]=Zt,wt[qt++]=Yt,wt[qt++]=Tn,Zt=t.id,Yt=t.overflow,Tn=e}var et=null,Ne=null,xe=!1,Sn=null,Ct=!1,Gl=Error(r(519));function In(e){var t=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Rs(Dt(t,e)),Gl}function Up(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[$e]=e,t[dt]=i,n){case"dialog":he("cancel",t),he("close",t);break;case"iframe":case"object":case"embed":he("load",t);break;case"video":case"audio":for(n=0;n<ii.length;n++)he(ii[n],t);break;case"source":he("error",t);break;case"img":case"image":case"link":he("error",t),he("load",t);break;case"details":he("toggle",t);break;case"input":he("invalid",t),np(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":he("invalid",t);break;case"textarea":he("invalid",t),sp(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||oh(t.textContent,n)?(i.popover!=null&&(he("beforetoggle",t),he("toggle",t)),i.onScroll!=null&&he("scroll",t),i.onScrollEnd!=null&&he("scrollend",t),i.onClick!=null&&(t.onclick=sn),t=!0):t=!1,t||In(e,!0)}function Pp(e){for(et=e.return;et;)switch(et.tag){case 5:case 31:case 13:Ct=!1;return;case 27:case 3:Ct=!0;return;default:et=et.return}}function Ba(e){if(e!==et)return!1;if(!xe)return Pp(e),xe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Lc(e.type,e.memoizedProps)),n=!n),n&&Ne&&In(e),Pp(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Ne=hh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Ne=hh(e)}else t===27?(t=Ne,Bn(e.type)?(e=Pc,Pc=null,Ne=e):Ne=t):Ne=et?Ht(e.stateNode.nextSibling):null;return!0}function ca(){Ne=et=null,xe=!1}function yl(){var e=Sn;return e!==null&&(bt===null?bt=e:bt.push.apply(bt,e),Sn=null),e}function Rs(e){Sn===null?Sn=[e]:Sn.push(e)}var Ml=T(null),ua=null,cn=null;function jn(e,t,n){J(Ml,t._currentValue),t._currentValue=n}function un(e){e._currentValue=Ml.current,F(Ml)}function vl(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Al(e,t,n,i){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var u=l.dependencies;if(u!==null){var m=l.child;u=u.firstContext;e:for(;u!==null;){var x=u;u=l;for(var M=0;M<t.length;M++)if(x.context===t[M]){u.lanes|=n,x=u.alternate,x!==null&&(x.lanes|=n),vl(u.return,n,e),i||(m=null);break e}u=x.next}}else if(l.tag===18){if(m=l.return,m===null)throw Error(r(341));m.lanes|=n,u=m.alternate,u!==null&&(u.lanes|=n),vl(m,n,e),m=null}else m=l.child;if(m!==null)m.return=l;else for(m=l;m!==null;){if(m===e){m=null;break}if(l=m.sibling,l!==null){l.return=m.return,m=l;break}m=m.return}l=m}}function Ua(e,t,n,i){e=null;for(var l=t,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var m=l.alternate;if(m===null)throw Error(r(387));if(m=m.memoizedProps,m!==null){var x=l.type;yt(l.pendingProps.value,m.value)||(e!==null?e.push(x):e=[x])}}else if(l===Me.current){if(m=l.alternate,m===null)throw Error(r(387));m.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(ui):e=[ui])}l=l.return}e!==null&&Al(t,e,n,i),t.flags|=262144}function to(e){for(e=e.firstContext;e!==null;){if(!yt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function da(e){ua=e,cn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function tt(e){return Fp(ua,e)}function no(e,t){return ua===null&&da(e),Fp(e,t)}function Fp(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},cn===null){if(e===null)throw Error(r(308));cn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else cn=cn.next=t;return n}var O1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},B1=a.unstable_scheduleCallback,U1=a.unstable_NormalPriority,Pe={$$typeof:H,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tl(){return{controller:new O1,data:new Map,refCount:0}}function Hs(e){e.refCount--,e.refCount===0&&B1(U1,function(){e.controller.abort()})}var Ls=null,Sl=0,Pa=0,Fa=null;function P1(e,t){if(Ls===null){var n=Ls=[];Sl=0,Pa=Vc(),Fa={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Sl++,t.then(Kp,Kp),t}function Kp(){if(--Sl===0&&Ls!==null){Fa!==null&&(Fa.status="fulfilled");var e=Ls;Ls=null,Pa=0,Fa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function F1(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(i.status="rejected",i.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),i}var Xp=R.S;R.S=function(e,t){Vm=xt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&P1(e,t),Xp!==null&&Xp(e,t)};var pa=T(null);function Il(){var e=pa.current;return e!==null?e:je.pooledCache}function ao(e,t){t===null?J(pa,pa.current):J(pa,t.pool)}function Zp(){var e=Il();return e===null?null:{parent:Pe._currentValue,pool:e}}var Ka=Error(r(460)),jl=Error(r(474)),so=Error(r(542)),io={then:function(){}};function Yp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Qp(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(sn,sn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Wp(e),e;default:if(typeof t.status=="string")t.then(sn,sn);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=i}},function(i){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Wp(e),e}throw ma=t,Ka}}function ga(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ma=n,Ka):n}}var ma=null;function Jp(){if(ma===null)throw Error(r(459));var e=ma;return ma=null,e}function Wp(e){if(e===Ka||e===so)throw Error(r(483))}var Xa=null,zs=0;function oo(e){var t=zs;return zs+=1,Xa===null&&(Xa=[]),Qp(Xa,e,t)}function Os(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ro(e,t){throw t.$$typeof===G?Error(r(525)):(e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function $p(e){function t(j,A){if(e){var E=j.deletions;E===null?(j.deletions=[A],j.flags|=16):E.push(A)}}function n(j,A){if(!e)return null;for(;A!==null;)t(j,A),A=A.sibling;return null}function i(j){for(var A=new Map;j!==null;)j.key!==null?A.set(j.key,j):A.set(j.index,j),j=j.sibling;return A}function l(j,A){return j=rn(j,A),j.index=0,j.sibling=null,j}function u(j,A,E){return j.index=E,e?(E=j.alternate,E!==null?(E=E.index,E<A?(j.flags|=67108866,A):E):(j.flags|=67108866,A)):(j.flags|=1048576,A)}function m(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function x(j,A,E,O){return A===null||A.tag!==6?(A=fl(E,j.mode,O),A.return=j,A):(A=l(A,E),A.return=j,A)}function M(j,A,E,O){var se=E.type;return se===I?L(j,A,E.props.children,O,E.key):A!==null&&(A.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===q&&ga(se)===A.type)?(A=l(A,E.props),Os(A,E),A.return=j,A):(A=$i(E.type,E.key,E.props,null,j.mode,O),Os(A,E),A.return=j,A)}function N(j,A,E,O){return A===null||A.tag!==4||A.stateNode.containerInfo!==E.containerInfo||A.stateNode.implementation!==E.implementation?(A=_l(E,j.mode,O),A.return=j,A):(A=l(A,E.children||[]),A.return=j,A)}function L(j,A,E,O,se){return A===null||A.tag!==7?(A=la(E,j.mode,O,se),A.return=j,A):(A=l(A,E),A.return=j,A)}function P(j,A,E){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=fl(""+A,j.mode,E),A.return=j,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case y:return E=$i(A.type,A.key,A.props,null,j.mode,E),Os(E,A),E.return=j,E;case v:return A=_l(A,j.mode,E),A.return=j,A;case q:return A=ga(A),P(j,A,E)}if(we(A)||le(A))return A=la(A,j.mode,E,null),A.return=j,A;if(typeof A.then=="function")return P(j,oo(A),E);if(A.$$typeof===H)return P(j,no(j,A),E);ro(j,A)}return null}function D(j,A,E,O){var se=A!==null?A.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return se!==null?null:x(j,A,""+E,O);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case y:return E.key===se?M(j,A,E,O):null;case v:return E.key===se?N(j,A,E,O):null;case q:return E=ga(E),D(j,A,E,O)}if(we(E)||le(E))return se!==null?null:L(j,A,E,O,null);if(typeof E.then=="function")return D(j,A,oo(E),O);if(E.$$typeof===H)return D(j,A,no(j,E),O);ro(j,E)}return null}function C(j,A,E,O,se){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return j=j.get(E)||null,x(A,j,""+O,se);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case y:return j=j.get(O.key===null?E:O.key)||null,M(A,j,O,se);case v:return j=j.get(O.key===null?E:O.key)||null,N(A,j,O,se);case q:return O=ga(O),C(j,A,E,O,se)}if(we(O)||le(O))return j=j.get(E)||null,L(A,j,O,se,null);if(typeof O.then=="function")return C(j,A,E,oo(O),se);if(O.$$typeof===H)return C(j,A,E,no(A,O),se);ro(A,O)}return null}function $(j,A,E,O){for(var se=null,ke=null,ae=A,pe=A=0,fe=null;ae!==null&&pe<E.length;pe++){ae.index>pe?(fe=ae,ae=null):fe=ae.sibling;var Ge=D(j,ae,E[pe],O);if(Ge===null){ae===null&&(ae=fe);break}e&&ae&&Ge.alternate===null&&t(j,ae),A=u(Ge,A,pe),ke===null?se=Ge:ke.sibling=Ge,ke=Ge,ae=fe}if(pe===E.length)return n(j,ae),xe&&ln(j,pe),se;if(ae===null){for(;pe<E.length;pe++)ae=P(j,E[pe],O),ae!==null&&(A=u(ae,A,pe),ke===null?se=ae:ke.sibling=ae,ke=ae);return xe&&ln(j,pe),se}for(ae=i(ae);pe<E.length;pe++)fe=C(ae,j,pe,E[pe],O),fe!==null&&(e&&fe.alternate!==null&&ae.delete(fe.key===null?pe:fe.key),A=u(fe,A,pe),ke===null?se=fe:ke.sibling=fe,ke=fe);return e&&ae.forEach(function(Xn){return t(j,Xn)}),xe&&ln(j,pe),se}function ie(j,A,E,O){if(E==null)throw Error(r(151));for(var se=null,ke=null,ae=A,pe=A=0,fe=null,Ge=E.next();ae!==null&&!Ge.done;pe++,Ge=E.next()){ae.index>pe?(fe=ae,ae=null):fe=ae.sibling;var Xn=D(j,ae,Ge.value,O);if(Xn===null){ae===null&&(ae=fe);break}e&&ae&&Xn.alternate===null&&t(j,ae),A=u(Xn,A,pe),ke===null?se=Xn:ke.sibling=Xn,ke=Xn,ae=fe}if(Ge.done)return n(j,ae),xe&&ln(j,pe),se;if(ae===null){for(;!Ge.done;pe++,Ge=E.next())Ge=P(j,Ge.value,O),Ge!==null&&(A=u(Ge,A,pe),ke===null?se=Ge:ke.sibling=Ge,ke=Ge);return xe&&ln(j,pe),se}for(ae=i(ae);!Ge.done;pe++,Ge=E.next())Ge=C(ae,j,pe,Ge.value,O),Ge!==null&&(e&&Ge.alternate!==null&&ae.delete(Ge.key===null?pe:Ge.key),A=u(Ge,A,pe),ke===null?se=Ge:ke.sibling=Ge,ke=Ge);return e&&ae.forEach(function(n2){return t(j,n2)}),xe&&ln(j,pe),se}function Ie(j,A,E,O){if(typeof E=="object"&&E!==null&&E.type===I&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case y:e:{for(var se=E.key;A!==null;){if(A.key===se){if(se=E.type,se===I){if(A.tag===7){n(j,A.sibling),O=l(A,E.props.children),O.return=j,j=O;break e}}else if(A.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===q&&ga(se)===A.type){n(j,A.sibling),O=l(A,E.props),Os(O,E),O.return=j,j=O;break e}n(j,A);break}else t(j,A);A=A.sibling}E.type===I?(O=la(E.props.children,j.mode,O,E.key),O.return=j,j=O):(O=$i(E.type,E.key,E.props,null,j.mode,O),Os(O,E),O.return=j,j=O)}return m(j);case v:e:{for(se=E.key;A!==null;){if(A.key===se)if(A.tag===4&&A.stateNode.containerInfo===E.containerInfo&&A.stateNode.implementation===E.implementation){n(j,A.sibling),O=l(A,E.children||[]),O.return=j,j=O;break e}else{n(j,A);break}else t(j,A);A=A.sibling}O=_l(E,j.mode,O),O.return=j,j=O}return m(j);case q:return E=ga(E),Ie(j,A,E,O)}if(we(E))return $(j,A,E,O);if(le(E)){if(se=le(E),typeof se!="function")throw Error(r(150));return E=se.call(E),ie(j,A,E,O)}if(typeof E.then=="function")return Ie(j,A,oo(E),O);if(E.$$typeof===H)return Ie(j,A,no(j,E),O);ro(j,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,A!==null&&A.tag===6?(n(j,A.sibling),O=l(A,E),O.return=j,j=O):(n(j,A),O=fl(E,j.mode,O),O.return=j,j=O),m(j)):n(j,A)}return function(j,A,E,O){try{zs=0;var se=Ie(j,A,E,O);return Xa=null,se}catch(ae){if(ae===Ka||ae===so)throw ae;var ke=Mt(29,ae,null,j.mode);return ke.lanes=O,ke.return=j,ke}finally{}}}var ha=$p(!0),eg=$p(!1),Vn=!1;function Vl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function El(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function En(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Nn(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ye&2)!==0){var l=i.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),i.pending=t,t=Wi(e),Rp(e,null,n),t}return Ji(e,i,t,n),Wi(e)}function Bs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Fd(e,n)}}function Nl(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var l=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var m={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?l=u=m:u=u.next=m,n=n.next}while(n!==null);u===null?l=u=t:u=u.next=t}else l=u=t;n={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Dl=!1;function Us(){if(Dl){var e=Fa;if(e!==null)throw e}}function Ps(e,t,n,i){Dl=!1;var l=e.updateQueue;Vn=!1;var u=l.firstBaseUpdate,m=l.lastBaseUpdate,x=l.shared.pending;if(x!==null){l.shared.pending=null;var M=x,N=M.next;M.next=null,m===null?u=N:m.next=N,m=M;var L=e.alternate;L!==null&&(L=L.updateQueue,x=L.lastBaseUpdate,x!==m&&(x===null?L.firstBaseUpdate=N:x.next=N,L.lastBaseUpdate=M))}if(u!==null){var P=l.baseState;m=0,L=N=M=null,x=u;do{var D=x.lane&-536870913,C=D!==x.lane;if(C?(be&D)===D:(i&D)===D){D!==0&&D===Pa&&(Dl=!0),L!==null&&(L=L.next={lane:0,tag:x.tag,payload:x.payload,callback:null,next:null});e:{var $=e,ie=x;D=t;var Ie=n;switch(ie.tag){case 1:if($=ie.payload,typeof $=="function"){P=$.call(Ie,P,D);break e}P=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=ie.payload,D=typeof $=="function"?$.call(Ie,P,D):$,D==null)break e;P=k({},P,D);break e;case 2:Vn=!0}}D=x.callback,D!==null&&(e.flags|=64,C&&(e.flags|=8192),C=l.callbacks,C===null?l.callbacks=[D]:C.push(D))}else C={lane:D,tag:x.tag,payload:x.payload,callback:x.callback,next:null},L===null?(N=L=C,M=P):L=L.next=C,m|=D;if(x=x.next,x===null){if(x=l.shared.pending,x===null)break;C=x,x=C.next,C.next=null,l.lastBaseUpdate=C,l.shared.pending=null}}while(!0);L===null&&(M=P),l.baseState=M,l.firstBaseUpdate=N,l.lastBaseUpdate=L,u===null&&(l.shared.lanes=0),Rn|=m,e.lanes=m,e.memoizedState=P}}function tg(e,t){if(typeof e!="function")throw Error(r(191,e));e.call(t)}function ng(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)tg(n[e],t)}var Za=T(null),lo=T(0);function ag(e,t){e=xn,J(lo,e),J(Za,t),xn=e|t.baseLanes}function wl(){J(lo,xn),J(Za,Za.current)}function ql(){xn=lo.current,F(Za),F(lo)}var vt=T(null),Rt=null;function Dn(e){var t=e.alternate;J(Be,Be.current&1),J(vt,e),Rt===null&&(t===null||Za.current!==null||t.memoizedState!==null)&&(Rt=e)}function Cl(e){J(Be,Be.current),J(vt,e),Rt===null&&(Rt=e)}function sg(e){e.tag===22?(J(Be,Be.current),J(vt,e),Rt===null&&(Rt=e)):wn()}function wn(){J(Be,Be.current),J(vt,vt.current)}function At(e){F(vt),Rt===e&&(Rt=null),F(Be)}var Be=T(0);function co(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Bc(n)||Uc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var dn=0,ue=null,Te=null,Fe=null,uo=!1,Ya=!1,ba=!1,po=0,Fs=0,Qa=null,K1=0;function He(){throw Error(r(321))}function Rl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!yt(e[n],t[n]))return!1;return!0}function Hl(e,t,n,i,l,u){return dn=u,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?Og:$l,ba=!1,u=n(i,l),ba=!1,Ya&&(u=og(t,n,i,l)),ig(e),u}function ig(e){R.H=Zs;var t=Te!==null&&Te.next!==null;if(dn=0,Fe=Te=ue=null,uo=!1,Fs=0,Qa=null,t)throw Error(r(300));e===null||Ke||(e=e.dependencies,e!==null&&to(e)&&(Ke=!0))}function og(e,t,n,i){ue=e;var l=0;do{if(Ya&&(Qa=null),Fs=0,Ya=!1,25<=l)throw Error(r(301));if(l+=1,Fe=Te=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}R.H=Bg,u=t(n,i)}while(Ya);return u}function X1(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?Ks(t):t,e=e.useState()[0],(Te!==null?Te.memoizedState:null)!==e&&(ue.flags|=1024),t}function Ll(){var e=po!==0;return po=0,e}function zl(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ol(e){if(uo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}uo=!1}dn=0,Fe=Te=ue=null,Ya=!1,Fs=po=0,Qa=null}function lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?ue.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function Ue(){if(Te===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=Fe===null?ue.memoizedState:Fe.next;if(t!==null)Fe=t,Te=e;else{if(e===null)throw ue.alternate===null?Error(r(467)):Error(r(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Fe===null?ue.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function go(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ks(e){var t=Fs;return Fs+=1,Qa===null&&(Qa=[]),e=Qp(Qa,e,t),t=ue,(Fe===null?t.memoizedState:Fe.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?Og:$l),e}function mo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ks(e);if(e.$$typeof===H)return tt(e)}throw Error(r(438,String(e)))}function Bl(e){var t=null,n=ue.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=ue.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=go(),ue.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=K;return t.index++,n}function pn(e,t){return typeof t=="function"?t(e):t}function ho(e){var t=Ue();return Ul(t,Te,e)}function Ul(e,t,n){var i=e.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=n;var l=e.baseQueue,u=i.pending;if(u!==null){if(l!==null){var m=l.next;l.next=u.next,u.next=m}t.baseQueue=l=u,i.pending=null}if(u=e.baseState,l===null)e.memoizedState=u;else{t=l.next;var x=m=null,M=null,N=t,L=!1;do{var P=N.lane&-536870913;if(P!==N.lane?(be&P)===P:(dn&P)===P){var D=N.revertLane;if(D===0)M!==null&&(M=M.next={lane:0,revertLane:0,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),P===Pa&&(L=!0);else if((dn&D)===D){N=N.next,D===Pa&&(L=!0);continue}else P={lane:0,revertLane:N.revertLane,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},M===null?(x=M=P,m=u):M=M.next=P,ue.lanes|=D,Rn|=D;P=N.action,ba&&n(u,P),u=N.hasEagerState?N.eagerState:n(u,P)}else D={lane:P,revertLane:N.revertLane,gesture:N.gesture,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},M===null?(x=M=D,m=u):M=M.next=D,ue.lanes|=P,Rn|=P;N=N.next}while(N!==null&&N!==t);if(M===null?m=u:M.next=x,!yt(u,e.memoizedState)&&(Ke=!0,L&&(n=Fa,n!==null)))throw n;e.memoizedState=u,e.baseState=m,e.baseQueue=M,i.lastRenderedState=u}return l===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Pl(e){var t=Ue(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=n.dispatch,l=n.pending,u=t.memoizedState;if(l!==null){n.pending=null;var m=l=l.next;do u=e(u,m.action),m=m.next;while(m!==l);yt(u,t.memoizedState)||(Ke=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,i]}function rg(e,t,n){var i=ue,l=Ue(),u=xe;if(u){if(n===void 0)throw Error(r(407));n=n()}else n=t();var m=!yt((Te||l).memoizedState,n);if(m&&(l.memoizedState=n,Ke=!0),l=l.queue,Xl(ug.bind(null,i,l,e),[e]),l.getSnapshot!==t||m||Fe!==null&&Fe.memoizedState.tag&1){if(i.flags|=2048,Ja(9,{destroy:void 0},cg.bind(null,i,l,n,t),null),je===null)throw Error(r(349));u||(dn&127)!==0||lg(i,t,n)}return n}function lg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ue.updateQueue,t===null?(t=go(),ue.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function cg(e,t,n,i){t.value=n,t.getSnapshot=i,dg(t)&&pg(e)}function ug(e,t,n){return n(function(){dg(t)&&pg(e)})}function dg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!yt(e,n)}catch{return!0}}function pg(e){var t=ra(e,2);t!==null&&ft(t,e,2)}function Fl(e){var t=lt();if(typeof e=="function"){var n=e;if(e=n(),ba){Mn(!0);try{n()}finally{Mn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pn,lastRenderedState:e},t}function gg(e,t,n,i){return e.baseState=n,Ul(e,Te,typeof i=="function"?i:pn)}function Z1(e,t,n,i,l){if(_o(e))throw Error(r(485));if(e=t.action,e!==null){var u={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){u.listeners.push(m)}};R.T!==null?n(!0):u.isTransition=!1,i(u),n=t.pending,n===null?(u.next=t.pending=u,mg(t,u)):(u.next=n.next,t.pending=n.next=u)}}function mg(e,t){var n=t.action,i=t.payload,l=e.state;if(t.isTransition){var u=R.T,m={};R.T=m;try{var x=n(l,i),M=R.S;M!==null&&M(m,x),hg(e,t,x)}catch(N){Kl(e,t,N)}finally{u!==null&&m.types!==null&&(u.types=m.types),R.T=u}}else try{u=n(l,i),hg(e,t,u)}catch(N){Kl(e,t,N)}}function hg(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){bg(e,t,i)},function(i){return Kl(e,t,i)}):bg(e,t,n)}function bg(e,t,n){t.status="fulfilled",t.value=n,fg(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,mg(e,n)))}function Kl(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,fg(t),t=t.next;while(t!==i)}e.action=null}function fg(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function _g(e,t){return t}function xg(e,t){if(xe){var n=je.formState;if(n!==null){e:{var i=ue;if(xe){if(Ne){t:{for(var l=Ne,u=Ct;l.nodeType!==8;){if(!u){l=null;break t}if(l=Ht(l.nextSibling),l===null){l=null;break t}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){Ne=Ht(l.nextSibling),i=l.data==="F!";break e}}In(i)}i=!1}i&&(t=n[0])}}return n=lt(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_g,lastRenderedState:t},n.queue=i,n=Hg.bind(null,ue,i),i.dispatch=n,i=Fl(!1),u=Wl.bind(null,ue,!1,i.queue),i=lt(),l={state:t,dispatch:null,action:e,pending:null},i.queue=l,n=Z1.bind(null,ue,l,u,n),l.dispatch=n,i.memoizedState=e,[t,n,!1]}function kg(e){var t=Ue();return Gg(t,Te,e)}function Gg(e,t,n){if(t=Ul(e,t,_g)[0],e=ho(pn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Ks(t)}catch(m){throw m===Ka?so:m}else i=t;t=Ue();var l=t.queue,u=l.dispatch;return n!==t.memoizedState&&(ue.flags|=2048,Ja(9,{destroy:void 0},Y1.bind(null,l,n),null)),[i,u,e]}function Y1(e,t){e.action=t}function yg(e){var t=Ue(),n=Te;if(n!==null)return Gg(t,n,e);Ue(),t=t.memoizedState,n=Ue();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Ja(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=ue.updateQueue,t===null&&(t=go(),ue.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Mg(){return Ue().memoizedState}function bo(e,t,n,i){var l=lt();ue.flags|=e,l.memoizedState=Ja(1|t,{destroy:void 0},n,i===void 0?null:i)}function fo(e,t,n,i){var l=Ue();i=i===void 0?null:i;var u=l.memoizedState.inst;Te!==null&&i!==null&&Rl(i,Te.memoizedState.deps)?l.memoizedState=Ja(t,u,n,i):(ue.flags|=e,l.memoizedState=Ja(1|t,u,n,i))}function vg(e,t){bo(8390656,8,e,t)}function Xl(e,t){fo(2048,8,e,t)}function Q1(e){ue.flags|=4;var t=ue.updateQueue;if(t===null)t=go(),ue.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Ag(e){var t=Ue().memoizedState;return Q1({ref:t,nextImpl:e}),function(){if((ye&2)!==0)throw Error(r(440));return t.impl.apply(void 0,arguments)}}function Tg(e,t){return fo(4,2,e,t)}function Sg(e,t){return fo(4,4,e,t)}function Ig(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function jg(e,t,n){n=n!=null?n.concat([e]):null,fo(4,4,Ig.bind(null,t,e),n)}function Zl(){}function Vg(e,t){var n=Ue();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Rl(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Eg(e,t){var n=Ue();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Rl(t,i[1]))return i[0];if(i=e(),ba){Mn(!0);try{e()}finally{Mn(!1)}}return n.memoizedState=[i,t],i}function Yl(e,t,n){return n===void 0||(dn&1073741824)!==0&&(be&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Nm(),ue.lanes|=e,Rn|=e,n)}function Ng(e,t,n,i){return yt(n,t)?n:Za.current!==null?(e=Yl(e,n,i),yt(e,t)||(Ke=!0),e):(dn&42)===0||(dn&1073741824)!==0&&(be&261930)===0?(Ke=!0,e.memoizedState=n):(e=Nm(),ue.lanes|=e,Rn|=e,t)}function Dg(e,t,n,i,l){var u=Q.p;Q.p=u!==0&&8>u?u:8;var m=R.T,x={};R.T=x,Wl(e,!1,t,n);try{var M=l(),N=R.S;if(N!==null&&N(x,M),M!==null&&typeof M=="object"&&typeof M.then=="function"){var L=F1(M,i);Xs(e,t,L,It(e))}else Xs(e,t,i,It(e))}catch(P){Xs(e,t,{then:function(){},status:"rejected",reason:P},It())}finally{Q.p=u,m!==null&&x.types!==null&&(m.types=x.types),R.T=m}}function J1(){}function Ql(e,t,n,i){if(e.tag!==5)throw Error(r(476));var l=wg(e).queue;Dg(e,l,t,W,n===null?J1:function(){return qg(e),n(i)})}function wg(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pn,lastRenderedState:W},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function qg(e){var t=wg(e);t.next===null&&(t=e.alternate.memoizedState),Xs(e,t.next.queue,{},It())}function Jl(){return tt(ui)}function Cg(){return Ue().memoizedState}function Rg(){return Ue().memoizedState}function W1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=It();e=En(n);var i=Nn(t,e,n);i!==null&&(ft(i,t,n),Bs(i,t,n)),t={cache:Tl()},e.payload=t;return}t=t.return}}function $1(e,t,n){var i=It();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},_o(e)?Lg(t,n):(n=hl(e,t,n,i),n!==null&&(ft(n,e,i),zg(n,t,i)))}function Hg(e,t,n){var i=It();Xs(e,t,n,i)}function Xs(e,t,n,i){var l={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(_o(e))Lg(t,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var m=t.lastRenderedState,x=u(m,n);if(l.hasEagerState=!0,l.eagerState=x,yt(x,m))return Ji(e,t,l,0),je===null&&Qi(),!1}catch{}finally{}if(n=hl(e,t,l,i),n!==null)return ft(n,e,i),zg(n,t,i),!0}return!1}function Wl(e,t,n,i){if(i={lane:2,revertLane:Vc(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},_o(e)){if(t)throw Error(r(479))}else t=hl(e,n,i,2),t!==null&&ft(t,e,2)}function _o(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function Lg(e,t){Ya=uo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zg(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Fd(e,n)}}var Zs={readContext:tt,use:mo,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useLayoutEffect:He,useInsertionEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useSyncExternalStore:He,useId:He,useHostTransitionStatus:He,useFormState:He,useActionState:He,useOptimistic:He,useMemoCache:He,useCacheRefresh:He};Zs.useEffectEvent=He;var Og={readContext:tt,use:mo,useCallback:function(e,t){return lt().memoizedState=[e,t===void 0?null:t],e},useContext:tt,useEffect:vg,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,bo(4194308,4,Ig.bind(null,t,e),n)},useLayoutEffect:function(e,t){return bo(4194308,4,e,t)},useInsertionEffect:function(e,t){bo(4,2,e,t)},useMemo:function(e,t){var n=lt();t=t===void 0?null:t;var i=e();if(ba){Mn(!0);try{e()}finally{Mn(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=lt();if(n!==void 0){var l=n(t);if(ba){Mn(!0);try{n(t)}finally{Mn(!1)}}}else l=t;return i.memoizedState=i.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},i.queue=e,e=e.dispatch=$1.bind(null,ue,e),[i.memoizedState,e]},useRef:function(e){var t=lt();return e={current:e},t.memoizedState=e},useState:function(e){e=Fl(e);var t=e.queue,n=Hg.bind(null,ue,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Zl,useDeferredValue:function(e,t){var n=lt();return Yl(n,e,t)},useTransition:function(){var e=Fl(!1);return e=Dg.bind(null,ue,e.queue,!0,!1),lt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=ue,l=lt();if(xe){if(n===void 0)throw Error(r(407));n=n()}else{if(n=t(),je===null)throw Error(r(349));(be&127)!==0||lg(i,t,n)}l.memoizedState=n;var u={value:n,getSnapshot:t};return l.queue=u,vg(ug.bind(null,i,u,e),[e]),i.flags|=2048,Ja(9,{destroy:void 0},cg.bind(null,i,u,n,t),null),n},useId:function(){var e=lt(),t=je.identifierPrefix;if(xe){var n=Yt,i=Zt;n=(i&~(1<<32-Gt(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=po++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=K1++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Jl,useFormState:xg,useActionState:xg,useOptimistic:function(e){var t=lt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Wl.bind(null,ue,!0,n),n.dispatch=t,[e,t]},useMemoCache:Bl,useCacheRefresh:function(){return lt().memoizedState=W1.bind(null,ue)},useEffectEvent:function(e){var t=lt(),n={impl:e};return t.memoizedState=n,function(){if((ye&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}},$l={readContext:tt,use:mo,useCallback:Vg,useContext:tt,useEffect:Xl,useImperativeHandle:jg,useInsertionEffect:Tg,useLayoutEffect:Sg,useMemo:Eg,useReducer:ho,useRef:Mg,useState:function(){return ho(pn)},useDebugValue:Zl,useDeferredValue:function(e,t){var n=Ue();return Ng(n,Te.memoizedState,e,t)},useTransition:function(){var e=ho(pn)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:Ks(e),t]},useSyncExternalStore:rg,useId:Cg,useHostTransitionStatus:Jl,useFormState:kg,useActionState:kg,useOptimistic:function(e,t){var n=Ue();return gg(n,Te,e,t)},useMemoCache:Bl,useCacheRefresh:Rg};$l.useEffectEvent=Ag;var Bg={readContext:tt,use:mo,useCallback:Vg,useContext:tt,useEffect:Xl,useImperativeHandle:jg,useInsertionEffect:Tg,useLayoutEffect:Sg,useMemo:Eg,useReducer:Pl,useRef:Mg,useState:function(){return Pl(pn)},useDebugValue:Zl,useDeferredValue:function(e,t){var n=Ue();return Te===null?Yl(n,e,t):Ng(n,Te.memoizedState,e,t)},useTransition:function(){var e=Pl(pn)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:Ks(e),t]},useSyncExternalStore:rg,useId:Cg,useHostTransitionStatus:Jl,useFormState:yg,useActionState:yg,useOptimistic:function(e,t){var n=Ue();return Te!==null?gg(n,Te,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Bl,useCacheRefresh:Rg};Bg.useEffectEvent=Ag;function ec(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:k({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var tc={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=It(),l=En(i);l.payload=t,n!=null&&(l.callback=n),t=Nn(e,l,i),t!==null&&(ft(t,e,i),Bs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=It(),l=En(i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Nn(e,l,i),t!==null&&(ft(t,e,i),Bs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=It(),i=En(n);i.tag=2,t!=null&&(i.callback=t),t=Nn(e,i,n),t!==null&&(ft(t,e,n),Bs(t,e,n))}};function Ug(e,t,n,i,l,u,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,u,m):t.prototype&&t.prototype.isPureReactComponent?!ws(n,i)||!ws(l,u):!0}function Pg(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&tc.enqueueReplaceState(t,t.state,null)}function fa(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=k({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}function Fg(e){Yi(e)}function Kg(e){console.error(e)}function Xg(e){Yi(e)}function xo(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Zg(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function nc(e,t,n){return n=En(n),n.tag=3,n.payload={element:null},n.callback=function(){xo(e,t)},n}function Yg(e){return e=En(e),e.tag=3,e}function Qg(e,t,n,i){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var u=i.value;e.payload=function(){return l(u)},e.callback=function(){Zg(t,n,i)}}var m=n.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){Zg(t,n,i),typeof l!="function"&&(Hn===null?Hn=new Set([this]):Hn.add(this));var x=i.stack;this.componentDidCatch(i.value,{componentStack:x!==null?x:""})})}function ex(e,t,n,i,l){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Ua(t,n,l,!0),n=vt.current,n!==null){switch(n.tag){case 31:case 13:return Rt===null?Eo():n.alternate===null&&Le===0&&(Le=3),n.flags&=-257,n.flags|=65536,n.lanes=l,i===io?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Sc(e,i,l)),!1;case 22:return n.flags|=65536,i===io?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Sc(e,i,l)),!1}throw Error(r(435,n.tag))}return Sc(e,i,l),Eo(),!1}if(xe)return t=vt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,i!==Gl&&(e=Error(r(422),{cause:i}),Rs(Dt(e,n)))):(i!==Gl&&(t=Error(r(423),{cause:i}),Rs(Dt(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,i=Dt(i,n),l=nc(e.stateNode,i,l),Nl(e,l),Le!==4&&(Le=2)),!1;var u=Error(r(520),{cause:i});if(u=Dt(u,n),ni===null?ni=[u]:ni.push(u),Le!==4&&(Le=2),t===null)return!0;i=Dt(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=nc(n.stateNode,i,e),Nl(n,e),!1;case 1:if(t=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Hn===null||!Hn.has(u))))return n.flags|=65536,l&=-l,n.lanes|=l,l=Yg(l),Qg(l,e,n,i),Nl(n,l),!1}n=n.return}while(n!==null);return!1}var ac=Error(r(461)),Ke=!1;function nt(e,t,n,i){t.child=e===null?eg(t,null,n,i):ha(t,e.child,n,i)}function Jg(e,t,n,i,l){n=n.render;var u=t.ref;if("ref"in i){var m={};for(var x in i)x!=="ref"&&(m[x]=i[x])}else m=i;return da(t),i=Hl(e,t,n,m,u,l),x=Ll(),e!==null&&!Ke?(zl(e,t,l),gn(e,t,l)):(xe&&x&&xl(t),t.flags|=1,nt(e,t,i,l),t.child)}function Wg(e,t,n,i,l){if(e===null){var u=n.type;return typeof u=="function"&&!bl(u)&&u.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=u,$g(e,t,u,i,l)):(e=$i(n.type,null,i,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!dc(e,l)){var m=u.memoizedProps;if(n=n.compare,n=n!==null?n:ws,n(m,i)&&e.ref===t.ref)return gn(e,t,l)}return t.flags|=1,e=rn(u,i),e.ref=t.ref,e.return=t,t.child=e}function $g(e,t,n,i,l){if(e!==null){var u=e.memoizedProps;if(ws(u,i)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=i=u,dc(e,l))(e.flags&131072)!==0&&(Ke=!0);else return t.lanes=e.lanes,gn(e,t,l)}return sc(e,t,n,i,l)}function em(e,t,n,i){var l=i.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|n:n,e!==null){for(i=t.child=e.child,l=0;i!==null;)l=l|i.lanes|i.childLanes,i=i.sibling;i=l&~u}else i=0,t.child=null;return tm(e,t,u,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ao(t,u!==null?u.cachePool:null),u!==null?ag(t,u):wl(),sg(t);else return i=t.lanes=536870912,tm(e,t,u!==null?u.baseLanes|n:n,n,i)}else u!==null?(ao(t,u.cachePool),ag(t,u),wn(),t.memoizedState=null):(e!==null&&ao(t,null),wl(),wn());return nt(e,t,l,n),t.child}function Ys(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function tm(e,t,n,i,l){var u=Il();return u=u===null?null:{parent:Pe._currentValue,pool:u},t.memoizedState={baseLanes:n,cachePool:u},e!==null&&ao(t,null),wl(),sg(t),e!==null&&Ua(e,t,i,!0),t.childLanes=l,null}function ko(e,t){return t=yo({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function nm(e,t,n){return ha(t,e.child,null,n),e=ko(t,t.pendingProps),e.flags|=2,At(t),t.memoizedState=null,e}function tx(e,t,n){var i=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(xe){if(i.mode==="hidden")return e=ko(t,i),t.lanes=536870912,Ys(null,e);if(Cl(t),(e=Ne)?(e=mh(e,Ct),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Tn!==null?{id:Zt,overflow:Yt}:null,retryLane:536870912,hydrationErrors:null},n=Lp(e),n.return=t,t.child=n,et=t,Ne=null)):e=null,e===null)throw In(t);return t.lanes=536870912,null}return ko(t,i)}var u=e.memoizedState;if(u!==null){var m=u.dehydrated;if(Cl(t),l)if(t.flags&256)t.flags&=-257,t=nm(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(r(558));else if(Ke||Ua(e,t,n,!1),l=(n&e.childLanes)!==0,Ke||l){if(i=je,i!==null&&(m=Kd(i,n),m!==0&&m!==u.retryLane))throw u.retryLane=m,ra(e,m),ft(i,e,m),ac;Eo(),t=nm(e,t,n)}else e=u.treeContext,Ne=Ht(m.nextSibling),et=t,xe=!0,Sn=null,Ct=!1,e!==null&&Bp(t,e),t=ko(t,i),t.flags|=4096;return t}return e=rn(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Go(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(r(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function sc(e,t,n,i,l){return da(t),n=Hl(e,t,n,i,void 0,l),i=Ll(),e!==null&&!Ke?(zl(e,t,l),gn(e,t,l)):(xe&&i&&xl(t),t.flags|=1,nt(e,t,n,l),t.child)}function am(e,t,n,i,l,u){return da(t),t.updateQueue=null,n=og(t,i,n,l),ig(e),i=Ll(),e!==null&&!Ke?(zl(e,t,u),gn(e,t,u)):(xe&&i&&xl(t),t.flags|=1,nt(e,t,n,u),t.child)}function sm(e,t,n,i,l){if(da(t),t.stateNode===null){var u=La,m=n.contextType;typeof m=="object"&&m!==null&&(u=tt(m)),u=new n(i,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=tc,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=i,u.state=t.memoizedState,u.refs={},Vl(t),m=n.contextType,u.context=typeof m=="object"&&m!==null?tt(m):La,u.state=t.memoizedState,m=n.getDerivedStateFromProps,typeof m=="function"&&(ec(t,n,m,i),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(m=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),m!==u.state&&tc.enqueueReplaceState(u,u.state,null),Ps(t,i,u,l),Us(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){u=t.stateNode;var x=t.memoizedProps,M=fa(n,x);u.props=M;var N=u.context,L=n.contextType;m=La,typeof L=="object"&&L!==null&&(m=tt(L));var P=n.getDerivedStateFromProps;L=typeof P=="function"||typeof u.getSnapshotBeforeUpdate=="function",x=t.pendingProps!==x,L||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(x||N!==m)&&Pg(t,u,i,m),Vn=!1;var D=t.memoizedState;u.state=D,Ps(t,i,u,l),Us(),N=t.memoizedState,x||D!==N||Vn?(typeof P=="function"&&(ec(t,n,P,i),N=t.memoizedState),(M=Vn||Ug(t,n,M,i,D,N,m))?(L||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=N),u.props=i,u.state=N,u.context=m,i=M):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{u=t.stateNode,El(e,t),m=t.memoizedProps,L=fa(n,m),u.props=L,P=t.pendingProps,D=u.context,N=n.contextType,M=La,typeof N=="object"&&N!==null&&(M=tt(N)),x=n.getDerivedStateFromProps,(N=typeof x=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(m!==P||D!==M)&&Pg(t,u,i,M),Vn=!1,D=t.memoizedState,u.state=D,Ps(t,i,u,l),Us();var C=t.memoizedState;m!==P||D!==C||Vn||e!==null&&e.dependencies!==null&&to(e.dependencies)?(typeof x=="function"&&(ec(t,n,x,i),C=t.memoizedState),(L=Vn||Ug(t,n,L,i,D,C,M)||e!==null&&e.dependencies!==null&&to(e.dependencies))?(N||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(i,C,M),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(i,C,M)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||m===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=C),u.props=i,u.state=C,u.context=M,i=L):(typeof u.componentDidUpdate!="function"||m===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),i=!1)}return u=i,Go(e,t),i=(t.flags&128)!==0,u||i?(u=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&i?(t.child=ha(t,e.child,null,l),t.child=ha(t,null,n,l)):nt(e,t,n,l),t.memoizedState=u.state,e=t.child):e=gn(e,t,l),e}function im(e,t,n,i){return ca(),t.flags|=256,nt(e,t,n,i),t.child}var ic={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function oc(e){return{baseLanes:e,cachePool:Zp()}}function rc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=St),e}function om(e,t,n){var i=t.pendingProps,l=!1,u=(t.flags&128)!==0,m;if((m=u)||(m=e!==null&&e.memoizedState===null?!1:(Be.current&2)!==0),m&&(l=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(xe){if(l?Dn(t):wn(),(e=Ne)?(e=mh(e,Ct),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Tn!==null?{id:Zt,overflow:Yt}:null,retryLane:536870912,hydrationErrors:null},n=Lp(e),n.return=t,t.child=n,et=t,Ne=null)):e=null,e===null)throw In(t);return Uc(e)?t.lanes=32:t.lanes=536870912,null}var x=i.children;return i=i.fallback,l?(wn(),l=t.mode,x=yo({mode:"hidden",children:x},l),i=la(i,l,n,null),x.return=t,i.return=t,x.sibling=i,t.child=x,i=t.child,i.memoizedState=oc(n),i.childLanes=rc(e,m,n),t.memoizedState=ic,Ys(null,i)):(Dn(t),lc(t,x))}var M=e.memoizedState;if(M!==null&&(x=M.dehydrated,x!==null)){if(u)t.flags&256?(Dn(t),t.flags&=-257,t=cc(e,t,n)):t.memoizedState!==null?(wn(),t.child=e.child,t.flags|=128,t=null):(wn(),x=i.fallback,l=t.mode,i=yo({mode:"visible",children:i.children},l),x=la(x,l,n,null),x.flags|=2,i.return=t,x.return=t,i.sibling=x,t.child=i,ha(t,e.child,null,n),i=t.child,i.memoizedState=oc(n),i.childLanes=rc(e,m,n),t.memoizedState=ic,t=Ys(null,i));else if(Dn(t),Uc(x)){if(m=x.nextSibling&&x.nextSibling.dataset,m)var N=m.dgst;m=N,i=Error(r(419)),i.stack="",i.digest=m,Rs({value:i,source:null,stack:null}),t=cc(e,t,n)}else if(Ke||Ua(e,t,n,!1),m=(n&e.childLanes)!==0,Ke||m){if(m=je,m!==null&&(i=Kd(m,n),i!==0&&i!==M.retryLane))throw M.retryLane=i,ra(e,i),ft(m,e,i),ac;Bc(x)||Eo(),t=cc(e,t,n)}else Bc(x)?(t.flags|=192,t.child=e.child,t=null):(e=M.treeContext,Ne=Ht(x.nextSibling),et=t,xe=!0,Sn=null,Ct=!1,e!==null&&Bp(t,e),t=lc(t,i.children),t.flags|=4096);return t}return l?(wn(),x=i.fallback,l=t.mode,M=e.child,N=M.sibling,i=rn(M,{mode:"hidden",children:i.children}),i.subtreeFlags=M.subtreeFlags&65011712,N!==null?x=rn(N,x):(x=la(x,l,n,null),x.flags|=2),x.return=t,i.return=t,i.sibling=x,t.child=i,Ys(null,i),i=t.child,x=e.child.memoizedState,x===null?x=oc(n):(l=x.cachePool,l!==null?(M=Pe._currentValue,l=l.parent!==M?{parent:M,pool:M}:l):l=Zp(),x={baseLanes:x.baseLanes|n,cachePool:l}),i.memoizedState=x,i.childLanes=rc(e,m,n),t.memoizedState=ic,Ys(e.child,i)):(Dn(t),n=e.child,e=n.sibling,n=rn(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=n,t.memoizedState=null,n)}function lc(e,t){return t=yo({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function yo(e,t){return e=Mt(22,e,null,t),e.lanes=0,e}function cc(e,t,n){return ha(t,e.child,null,n),e=lc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function rm(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),vl(e.return,t,n)}function uc(e,t,n,i,l,u){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:l,treeForkCount:u}:(m.isBackwards=t,m.rendering=null,m.renderingStartTime=0,m.last=i,m.tail=n,m.tailMode=l,m.treeForkCount=u)}function lm(e,t,n){var i=t.pendingProps,l=i.revealOrder,u=i.tail;i=i.children;var m=Be.current,x=(m&2)!==0;if(x?(m=m&1|2,t.flags|=128):m&=1,J(Be,m),nt(e,t,i,n),i=xe?Cs:0,!x&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rm(e,n,t);else if(e.tag===19)rm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&co(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),uc(t,!1,l,n,u,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&co(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}uc(t,!0,n,null,u,i);break;case"together":uc(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function gn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ua(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,n=rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function dc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&to(e)))}function nx(e,t,n){switch(t.tag){case 3:rt(t,t.stateNode.containerInfo),jn(t,Pe,e.memoizedState.cache),ca();break;case 27:case 5:Gs(t);break;case 4:rt(t,t.stateNode.containerInfo);break;case 10:jn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Cl(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Dn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?om(e,t,n):(Dn(t),e=gn(e,t,n),e!==null?e.sibling:null);Dn(t);break;case 19:var l=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Ua(e,t,n,!1),i=(n&t.childLanes)!==0),l){if(i)return lm(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),J(Be,Be.current),i)break;return null;case 22:return t.lanes=0,em(e,t,n,t.pendingProps);case 24:jn(t,Pe,e.memoizedState.cache)}return gn(e,t,n)}function cm(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ke=!0;else{if(!dc(e,n)&&(t.flags&128)===0)return Ke=!1,nx(e,t,n);Ke=(e.flags&131072)!==0}else Ke=!1,xe&&(t.flags&1048576)!==0&&Op(t,Cs,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=ga(t.elementType),t.type=e,typeof e=="function")bl(e)?(i=fa(e,i),t.tag=1,t=sm(null,t,e,i,n)):(t.tag=0,t=sc(null,t,e,i,n));else{if(e!=null){var l=e.$$typeof;if(l===V){t.tag=11,t=Jg(null,t,e,i,n);break e}else if(l===U){t.tag=14,t=Wg(null,t,e,i,n);break e}}throw t=Ce(e)||e,Error(r(306,t,""))}}return t;case 0:return sc(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,l=fa(i,t.pendingProps),sm(e,t,i,l,n);case 3:e:{if(rt(t,t.stateNode.containerInfo),e===null)throw Error(r(387));i=t.pendingProps;var u=t.memoizedState;l=u.element,El(e,t),Ps(t,i,null,n);var m=t.memoizedState;if(i=m.cache,jn(t,Pe,i),i!==u.cache&&Al(t,[Pe],n,!0),Us(),i=m.element,u.isDehydrated)if(u={element:i,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=im(e,t,i,n);break e}else if(i!==l){l=Dt(Error(r(424)),t),Rs(l),t=im(e,t,i,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ne=Ht(e.firstChild),et=t,xe=!0,Sn=null,Ct=!0,n=eg(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ca(),i===l){t=gn(e,t,n);break e}nt(e,t,i,n)}t=t.child}return t;case 26:return Go(e,t),e===null?(n=kh(t.type,null,t.pendingProps,null))?t.memoizedState=n:xe||(n=t.type,e=t.pendingProps,i=Ho(ge.current).createElement(n),i[$e]=t,i[dt]=e,at(i,n,e),Je(i),t.stateNode=i):t.memoizedState=kh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Gs(t),e===null&&xe&&(i=t.stateNode=fh(t.type,t.pendingProps,ge.current),et=t,Ct=!0,l=Ne,Bn(t.type)?(Pc=l,Ne=Ht(i.firstChild)):Ne=l),nt(e,t,t.pendingProps.children,n),Go(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&xe&&((l=i=Ne)&&(i=Nx(i,t.type,t.pendingProps,Ct),i!==null?(t.stateNode=i,et=t,Ne=Ht(i.firstChild),Ct=!1,l=!0):l=!1),l||In(t)),Gs(t),l=t.type,u=t.pendingProps,m=e!==null?e.memoizedProps:null,i=u.children,Lc(l,u)?i=null:m!==null&&Lc(l,m)&&(t.flags|=32),t.memoizedState!==null&&(l=Hl(e,t,X1,null,null,n),ui._currentValue=l),Go(e,t),nt(e,t,i,n),t.child;case 6:return e===null&&xe&&((e=n=Ne)&&(n=Dx(n,t.pendingProps,Ct),n!==null?(t.stateNode=n,et=t,Ne=null,e=!0):e=!1),e||In(t)),null;case 13:return om(e,t,n);case 4:return rt(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ha(t,null,i,n):nt(e,t,i,n),t.child;case 11:return Jg(e,t,t.type,t.pendingProps,n);case 7:return nt(e,t,t.pendingProps,n),t.child;case 8:return nt(e,t,t.pendingProps.children,n),t.child;case 12:return nt(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,jn(t,t.type,i.value),nt(e,t,i.children,n),t.child;case 9:return l=t.type._context,i=t.pendingProps.children,da(t),l=tt(l),i=i(l),t.flags|=1,nt(e,t,i,n),t.child;case 14:return Wg(e,t,t.type,t.pendingProps,n);case 15:return $g(e,t,t.type,t.pendingProps,n);case 19:return lm(e,t,n);case 31:return tx(e,t,n);case 22:return em(e,t,n,t.pendingProps);case 24:return da(t),i=tt(Pe),e===null?(l=Il(),l===null&&(l=je,u=Tl(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=n),l=u),t.memoizedState={parent:i,cache:l},Vl(t),jn(t,Pe,l)):((e.lanes&n)!==0&&(El(e,t),Ps(t,null,null,n),Us()),l=e.memoizedState,u=t.memoizedState,l.parent!==i?(l={parent:i,cache:i},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),jn(t,Pe,i)):(i=u.cache,jn(t,Pe,i),i!==l.cache&&Al(t,[Pe],n,!0))),nt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(r(156,t.tag))}function mn(e){e.flags|=4}function pc(e,t,n,i,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Cm())e.flags|=8192;else throw ma=io,jl}else e.flags&=-16777217}function um(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ah(t))if(Cm())e.flags|=8192;else throw ma=io,jl}function Mo(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ud():536870912,e.lanes|=t,ts|=t)}function Qs(e,t){if(!xe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function De(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags&65011712,i|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function ax(e,t,n){var i=t.pendingProps;switch(kl(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(t),null;case 1:return De(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),un(Pe),Oe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ba(t)?mn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,yl())),De(t),null;case 26:var l=t.type,u=t.memoizedState;return e===null?(mn(t),u!==null?(De(t),um(t,u)):(De(t),pc(t,l,null,i,n))):u?u!==e.memoizedState?(mn(t),De(t),um(t,u)):(De(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&mn(t),De(t),pc(t,l,e,i,n)),null;case 27:if(Di(t),n=ge.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&mn(t);else{if(!i){if(t.stateNode===null)throw Error(r(166));return De(t),null}e=ne.current,Ba(t)?Up(t):(e=fh(l,i,n),t.stateNode=e,mn(t))}return De(t),null;case 5:if(Di(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&mn(t);else{if(!i){if(t.stateNode===null)throw Error(r(166));return De(t),null}if(u=ne.current,Ba(t))Up(t);else{var m=Ho(ge.current);switch(u){case 1:u=m.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:u=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":u=m.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":u=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":u=m.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof i.is=="string"?m.createElement("select",{is:i.is}):m.createElement("select"),i.multiple?u.multiple=!0:i.size&&(u.size=i.size);break;default:u=typeof i.is=="string"?m.createElement(l,{is:i.is}):m.createElement(l)}}u[$e]=t,u[dt]=i;e:for(m=t.child;m!==null;){if(m.tag===5||m.tag===6)u.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}t.stateNode=u;e:switch(at(u,l,i),l){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&mn(t)}}return De(t),pc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&mn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(r(166));if(e=ge.current,Ba(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,l=et,l!==null)switch(l.tag){case 27:case 5:i=l.memoizedProps}e[$e]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||oh(e.nodeValue,n)),e||In(t,!0)}else e=Ho(e).createTextNode(i),e[$e]=t,t.stateNode=e}return De(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Ba(t),n!==null){if(e===null){if(!i)throw Error(r(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[$e]=t}else ca(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;De(t),e=!1}else n=yl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(At(t),t):(At(t),null);if((t.flags&128)!==0)throw Error(r(558))}return De(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Ba(t),i!==null&&i.dehydrated!==null){if(e===null){if(!l)throw Error(r(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(r(317));l[$e]=t}else ca(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;De(t),l=!1}else l=yl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(At(t),t):(At(t),null)}return At(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,l=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(l=i.alternate.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==l&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Mo(t,t.updateQueue),De(t),null);case 4:return Oe(),e===null&&wc(t.stateNode.containerInfo),De(t),null;case 10:return un(t.type),De(t),null;case 19:if(F(Be),i=t.memoizedState,i===null)return De(t),null;if(l=(t.flags&128)!==0,u=i.rendering,u===null)if(l)Qs(i,!1);else{if(Le!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=co(e),u!==null){for(t.flags|=128,Qs(i,!1),e=u.updateQueue,t.updateQueue=e,Mo(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Hp(n,e),n=n.sibling;return J(Be,Be.current&1|2),xe&&ln(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&xt()>Io&&(t.flags|=128,l=!0,Qs(i,!1),t.lanes=4194304)}else{if(!l)if(e=co(u),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Mo(t,e),Qs(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!xe)return De(t),null}else 2*xt()-i.renderingStartTime>Io&&n!==536870912&&(t.flags|=128,l=!0,Qs(i,!1),t.lanes=4194304);i.isBackwards?(u.sibling=t.child,t.child=u):(e=i.last,e!==null?e.sibling=u:t.child=u,i.last=u)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=xt(),e.sibling=null,n=Be.current,J(Be,l?n&1|2:n&1),xe&&ln(t,i.treeForkCount),e):(De(t),null);case 22:case 23:return At(t),ql(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(De(t),t.subtreeFlags&6&&(t.flags|=8192)):De(t),n=t.updateQueue,n!==null&&Mo(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&F(pa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),un(Pe),De(t),null;case 25:return null;case 30:return null}throw Error(r(156,t.tag))}function sx(e,t){switch(kl(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return un(Pe),Oe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Di(t),null;case 31:if(t.memoizedState!==null){if(At(t),t.alternate===null)throw Error(r(340));ca()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(At(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));ca()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F(Be),null;case 4:return Oe(),null;case 10:return un(t.type),null;case 22:case 23:return At(t),ql(),e!==null&&F(pa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return un(Pe),null;case 25:return null;default:return null}}function dm(e,t){switch(kl(t),t.tag){case 3:un(Pe),Oe();break;case 26:case 27:case 5:Di(t);break;case 4:Oe();break;case 31:t.memoizedState!==null&&At(t);break;case 13:At(t);break;case 19:F(Be);break;case 10:un(t.type);break;case 22:case 23:At(t),ql(),e!==null&&F(pa);break;case 24:un(Pe)}}function Js(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var l=i.next;n=l;do{if((n.tag&e)===e){i=void 0;var u=n.create,m=n.inst;i=u(),m.destroy=i}n=n.next}while(n!==l)}}catch(x){Ae(t,t.return,x)}}function qn(e,t,n){try{var i=t.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var u=l.next;i=u;do{if((i.tag&e)===e){var m=i.inst,x=m.destroy;if(x!==void 0){m.destroy=void 0,l=t;var M=n,N=x;try{N()}catch(L){Ae(l,M,L)}}}i=i.next}while(i!==u)}}catch(L){Ae(t,t.return,L)}}function pm(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ng(t,n)}catch(i){Ae(e,e.return,i)}}}function gm(e,t,n){n.props=fa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Ae(e,t,i)}}function Ws(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(l){Ae(e,t,l)}}function Qt(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(l){Ae(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){Ae(e,t,l)}else n.current=null}function mm(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(l){Ae(e,e.return,l)}}function gc(e,t,n){try{var i=e.stateNode;Tx(i,e.type,n,t),i[dt]=t}catch(l){Ae(e,e.return,l)}}function hm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Bn(e.type)||e.tag===4}function mc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Bn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hc(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=sn));else if(i!==4&&(i===27&&Bn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(hc(e,t,n),e=e.sibling;e!==null;)hc(e,t,n),e=e.sibling}function vo(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Bn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(vo(e,t,n),e=e.sibling;e!==null;)vo(e,t,n),e=e.sibling}function bm(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);at(t,i,n),t[$e]=e,t[dt]=n}catch(u){Ae(e,e.return,u)}}var hn=!1,Xe=!1,bc=!1,fm=typeof WeakSet=="function"?WeakSet:Set,We=null;function ix(e,t){if(e=e.containerInfo,Rc=Fo,e=jp(e),cl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var l=i.anchorOffset,u=i.focusNode;i=i.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var m=0,x=-1,M=-1,N=0,L=0,P=e,D=null;t:for(;;){for(var C;P!==n||l!==0&&P.nodeType!==3||(x=m+l),P!==u||i!==0&&P.nodeType!==3||(M=m+i),P.nodeType===3&&(m+=P.nodeValue.length),(C=P.firstChild)!==null;)D=P,P=C;for(;;){if(P===e)break t;if(D===n&&++N===l&&(x=m),D===u&&++L===i&&(M=m),(C=P.nextSibling)!==null)break;P=D,D=P.parentNode}P=C}n=x===-1||M===-1?null:{start:x,end:M}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hc={focusedElem:e,selectionRange:n},Fo=!1,We=t;We!==null;)if(t=We,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,We=e;else for(;We!==null;){switch(t=We,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)l=e[n],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,n=t,l=u.memoizedProps,u=u.memoizedState,i=n.stateNode;try{var $=fa(n.type,l);e=i.getSnapshotBeforeUpdate($,u),i.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Ae(n,n.return,ie)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Oc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Oc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=t.sibling,e!==null){e.return=t.return,We=e;break}We=t.return}}function _m(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:fn(e,n),i&4&&Js(5,n);break;case 1:if(fn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(m){Ae(n,n.return,m)}else{var l=fa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){Ae(n,n.return,m)}}i&64&&pm(n),i&512&&Ws(n,n.return);break;case 3:if(fn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ng(e,t)}catch(m){Ae(n,n.return,m)}}break;case 27:t===null&&i&4&&bm(n);case 26:case 5:fn(e,n),t===null&&i&4&&mm(n),i&512&&Ws(n,n.return);break;case 12:fn(e,n);break;case 31:fn(e,n),i&4&&Gm(e,n);break;case 13:fn(e,n),i&4&&ym(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=mx.bind(null,n),wx(e,n))));break;case 22:if(i=n.memoizedState!==null||hn,!i){t=t!==null&&t.memoizedState!==null||Xe,l=hn;var u=Xe;hn=i,(Xe=t)&&!u?_n(e,n,(n.subtreeFlags&8772)!==0):fn(e,n),hn=l,Xe=u}break;case 30:break;default:fn(e,n)}}function xm(e){var t=e.alternate;t!==null&&(e.alternate=null,xm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Kr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var qe=null,gt=!1;function bn(e,t,n){for(n=n.child;n!==null;)km(e,t,n),n=n.sibling}function km(e,t,n){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(ys,n)}catch{}switch(n.tag){case 26:Xe||Qt(n,t),bn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Xe||Qt(n,t);var i=qe,l=gt;Bn(n.type)&&(qe=n.stateNode,gt=!1),bn(e,t,n),ri(n.stateNode),qe=i,gt=l;break;case 5:Xe||Qt(n,t);case 6:if(i=qe,l=gt,qe=null,bn(e,t,n),qe=i,gt=l,qe!==null)if(gt)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(n.stateNode)}catch(u){Ae(n,t,u)}else try{qe.removeChild(n.stateNode)}catch(u){Ae(n,t,u)}break;case 18:qe!==null&&(gt?(e=qe,ph(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),cs(e)):ph(qe,n.stateNode));break;case 4:i=qe,l=gt,qe=n.stateNode.containerInfo,gt=!0,bn(e,t,n),qe=i,gt=l;break;case 0:case 11:case 14:case 15:qn(2,n,t),Xe||qn(4,n,t),bn(e,t,n);break;case 1:Xe||(Qt(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&gm(n,t,i)),bn(e,t,n);break;case 21:bn(e,t,n);break;case 22:Xe=(i=Xe)||n.memoizedState!==null,bn(e,t,n),Xe=i;break;default:bn(e,t,n)}}function Gm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{cs(e)}catch(n){Ae(t,t.return,n)}}}function ym(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{cs(e)}catch(n){Ae(t,t.return,n)}}function ox(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new fm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new fm),t;default:throw Error(r(435,e.tag))}}function Ao(e,t){var n=ox(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var l=hx.bind(null,e,i);i.then(l,l)}})}function mt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var l=n[i],u=e,m=t,x=m;e:for(;x!==null;){switch(x.tag){case 27:if(Bn(x.type)){qe=x.stateNode,gt=!1;break e}break;case 5:qe=x.stateNode,gt=!1;break e;case 3:case 4:qe=x.stateNode.containerInfo,gt=!0;break e}x=x.return}if(qe===null)throw Error(r(160));km(u,m,l),qe=null,gt=!1,u=l.alternate,u!==null&&(u.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Mm(t,e),t=t.sibling}var Ut=null;function Mm(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:mt(t,e),ht(e),i&4&&(qn(3,e,e.return),Js(3,e),qn(5,e,e.return));break;case 1:mt(t,e),ht(e),i&512&&(Xe||n===null||Qt(n,n.return)),i&64&&hn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var l=Ut;if(mt(t,e),ht(e),i&512&&(Xe||n===null||Qt(n,n.return)),i&4){var u=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(i){case"title":u=l.getElementsByTagName("title")[0],(!u||u[As]||u[$e]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=l.createElement(i),l.head.insertBefore(u,l.querySelector("head > title"))),at(u,i,n),u[$e]=e,Je(u),i=u;break e;case"link":var m=Mh("link","href",l).get(i+(n.href||""));if(m){for(var x=0;x<m.length;x++)if(u=m[x],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){m.splice(x,1);break t}}u=l.createElement(i),at(u,i,n),l.head.appendChild(u);break;case"meta":if(m=Mh("meta","content",l).get(i+(n.content||""))){for(x=0;x<m.length;x++)if(u=m[x],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){m.splice(x,1);break t}}u=l.createElement(i),at(u,i,n),l.head.appendChild(u);break;default:throw Error(r(468,i))}u[$e]=e,Je(u),i=u}e.stateNode=i}else vh(l,e.type,e.stateNode);else e.stateNode=yh(l,i,e.memoizedProps);else u!==i?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,i===null?vh(l,e.type,e.stateNode):yh(l,i,e.memoizedProps)):i===null&&e.stateNode!==null&&gc(e,e.memoizedProps,n.memoizedProps)}break;case 27:mt(t,e),ht(e),i&512&&(Xe||n===null||Qt(n,n.return)),n!==null&&i&4&&gc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(mt(t,e),ht(e),i&512&&(Xe||n===null||Qt(n,n.return)),e.flags&32){l=e.stateNode;try{Na(l,"")}catch($){Ae(e,e.return,$)}}i&4&&e.stateNode!=null&&(l=e.memoizedProps,gc(e,l,n!==null?n.memoizedProps:l)),i&1024&&(bc=!0);break;case 6:if(mt(t,e),ht(e),i&4){if(e.stateNode===null)throw Error(r(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch($){Ae(e,e.return,$)}}break;case 3:if(Oo=null,l=Ut,Ut=Lo(t.containerInfo),mt(t,e),Ut=l,ht(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{cs(t.containerInfo)}catch($){Ae(e,e.return,$)}bc&&(bc=!1,vm(e));break;case 4:i=Ut,Ut=Lo(e.stateNode.containerInfo),mt(t,e),ht(e),Ut=i;break;case 12:mt(t,e),ht(e);break;case 31:mt(t,e),ht(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ao(e,i)));break;case 13:mt(t,e),ht(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(So=xt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ao(e,i)));break;case 22:l=e.memoizedState!==null;var M=n!==null&&n.memoizedState!==null,N=hn,L=Xe;if(hn=N||l,Xe=L||M,mt(t,e),Xe=L,hn=N,ht(e),i&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||M||hn||Xe||_a(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){M=n=t;try{if(u=M.stateNode,l)m=u.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{x=M.stateNode;var P=M.memoizedProps.style,D=P!=null&&P.hasOwnProperty("display")?P.display:null;x.style.display=D==null||typeof D=="boolean"?"":(""+D).trim()}}catch($){Ae(M,M.return,$)}}}else if(t.tag===6){if(n===null){M=t;try{M.stateNode.nodeValue=l?"":M.memoizedProps}catch($){Ae(M,M.return,$)}}}else if(t.tag===18){if(n===null){M=t;try{var C=M.stateNode;l?gh(C,!0):gh(M.stateNode,!1)}catch($){Ae(M,M.return,$)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Ao(e,n))));break;case 19:mt(t,e),ht(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ao(e,i)));break;case 30:break;case 21:break;default:mt(t,e),ht(e)}}function ht(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(hm(i)){n=i;break}i=i.return}if(n==null)throw Error(r(160));switch(n.tag){case 27:var l=n.stateNode,u=mc(e);vo(e,u,l);break;case 5:var m=n.stateNode;n.flags&32&&(Na(m,""),n.flags&=-33);var x=mc(e);vo(e,x,m);break;case 3:case 4:var M=n.stateNode.containerInfo,N=mc(e);hc(e,N,M);break;default:throw Error(r(161))}}catch(L){Ae(e,e.return,L)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;vm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function fn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)_m(e,t.alternate,t),t=t.sibling}function _a(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:qn(4,t,t.return),_a(t);break;case 1:Qt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&gm(t,t.return,n),_a(t);break;case 27:ri(t.stateNode);case 26:case 5:Qt(t,t.return),_a(t);break;case 22:t.memoizedState===null&&_a(t);break;case 30:_a(t);break;default:_a(t)}e=e.sibling}}function _n(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,l=e,u=t,m=u.flags;switch(u.tag){case 0:case 11:case 15:_n(l,u,n),Js(4,u);break;case 1:if(_n(l,u,n),i=u,l=i.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(N){Ae(i,i.return,N)}if(i=u,l=i.updateQueue,l!==null){var x=i.stateNode;try{var M=l.shared.hiddenCallbacks;if(M!==null)for(l.shared.hiddenCallbacks=null,l=0;l<M.length;l++)tg(M[l],x)}catch(N){Ae(i,i.return,N)}}n&&m&64&&pm(u),Ws(u,u.return);break;case 27:bm(u);case 26:case 5:_n(l,u,n),n&&i===null&&m&4&&mm(u),Ws(u,u.return);break;case 12:_n(l,u,n);break;case 31:_n(l,u,n),n&&m&4&&Gm(l,u);break;case 13:_n(l,u,n),n&&m&4&&ym(l,u);break;case 22:u.memoizedState===null&&_n(l,u,n),Ws(u,u.return);break;case 30:break;default:_n(l,u,n)}t=t.sibling}}function fc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Hs(n))}function _c(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Hs(e))}function Pt(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Am(e,t,n,i),t=t.sibling}function Am(e,t,n,i){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Pt(e,t,n,i),l&2048&&Js(9,t);break;case 1:Pt(e,t,n,i);break;case 3:Pt(e,t,n,i),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Hs(e)));break;case 12:if(l&2048){Pt(e,t,n,i),e=t.stateNode;try{var u=t.memoizedProps,m=u.id,x=u.onPostCommit;typeof x=="function"&&x(m,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(M){Ae(t,t.return,M)}}else Pt(e,t,n,i);break;case 31:Pt(e,t,n,i);break;case 13:Pt(e,t,n,i);break;case 23:break;case 22:u=t.stateNode,m=t.alternate,t.memoizedState!==null?u._visibility&2?Pt(e,t,n,i):$s(e,t):u._visibility&2?Pt(e,t,n,i):(u._visibility|=2,Wa(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),l&2048&&fc(m,t);break;case 24:Pt(e,t,n,i),l&2048&&_c(t.alternate,t);break;default:Pt(e,t,n,i)}}function Wa(e,t,n,i,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,m=t,x=n,M=i,N=m.flags;switch(m.tag){case 0:case 11:case 15:Wa(u,m,x,M,l),Js(8,m);break;case 23:break;case 22:var L=m.stateNode;m.memoizedState!==null?L._visibility&2?Wa(u,m,x,M,l):$s(u,m):(L._visibility|=2,Wa(u,m,x,M,l)),l&&N&2048&&fc(m.alternate,m);break;case 24:Wa(u,m,x,M,l),l&&N&2048&&_c(m.alternate,m);break;default:Wa(u,m,x,M,l)}t=t.sibling}}function $s(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,l=i.flags;switch(i.tag){case 22:$s(n,i),l&2048&&fc(i.alternate,i);break;case 24:$s(n,i),l&2048&&_c(i.alternate,i);break;default:$s(n,i)}t=t.sibling}}var ei=8192;function $a(e,t,n){if(e.subtreeFlags&ei)for(e=e.child;e!==null;)Tm(e,t,n),e=e.sibling}function Tm(e,t,n){switch(e.tag){case 26:$a(e,t,n),e.flags&ei&&e.memoizedState!==null&&Kx(n,Ut,e.memoizedState,e.memoizedProps);break;case 5:$a(e,t,n);break;case 3:case 4:var i=Ut;Ut=Lo(e.stateNode.containerInfo),$a(e,t,n),Ut=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=ei,ei=16777216,$a(e,t,n),ei=i):$a(e,t,n));break;default:$a(e,t,n)}}function Sm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ti(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];We=i,jm(i,e)}Sm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Im(e),e=e.sibling}function Im(e){switch(e.tag){case 0:case 11:case 15:ti(e),e.flags&2048&&qn(9,e,e.return);break;case 3:ti(e);break;case 12:ti(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,To(e)):ti(e);break;default:ti(e)}}function To(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];We=i,jm(i,e)}Sm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:qn(8,t,t.return),To(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,To(t));break;default:To(t)}e=e.sibling}}function jm(e,t){for(;We!==null;){var n=We;switch(n.tag){case 0:case 11:case 15:qn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Hs(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,We=i;else e:for(n=e;We!==null;){i=We;var l=i.sibling,u=i.return;if(xm(i),i===n){We=null;break e}if(l!==null){l.return=u,We=l;break e}We=u}}}var rx={getCacheForType:function(e){var t=tt(Pe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return tt(Pe).controller.signal}},lx=typeof WeakMap=="function"?WeakMap:Map,ye=0,je=null,me=null,be=0,ve=0,Tt=null,Cn=!1,es=!1,xc=!1,xn=0,Le=0,Rn=0,xa=0,kc=0,St=0,ts=0,ni=null,bt=null,Gc=!1,So=0,Vm=0,Io=1/0,jo=null,Hn=null,Ye=0,Ln=null,ns=null,kn=0,yc=0,Mc=null,Em=null,ai=0,vc=null;function It(){return(ye&2)!==0&&be!==0?be&-be:R.T!==null?Vc():Xd()}function Nm(){if(St===0)if((be&536870912)===0||xe){var e=Ci;Ci<<=1,(Ci&3932160)===0&&(Ci=262144),St=e}else St=536870912;return e=vt.current,e!==null&&(e.flags|=32),St}function ft(e,t,n){(e===je&&(ve===2||ve===9)||e.cancelPendingCommit!==null)&&(as(e,0),zn(e,be,St,!1)),vs(e,n),((ye&2)===0||e!==je)&&(e===je&&((ye&2)===0&&(xa|=n),Le===4&&zn(e,be,St,!1)),Jt(e))}function Dm(e,t,n){if((ye&6)!==0)throw Error(r(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Ms(e,t),l=i?dx(e,t):Tc(e,t,!0),u=i;do{if(l===0){es&&!i&&zn(e,t,0,!1);break}else{if(n=e.current.alternate,u&&!cx(n)){l=Tc(e,t,!1),u=!1;continue}if(l===2){if(u=t,e.errorRecoveryDisabledLanes&u)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var x=e;l=ni;var M=x.current.memoizedState.isDehydrated;if(M&&(as(x,m).flags|=256),m=Tc(x,m,!1),m!==2){if(xc&&!M){x.errorRecoveryDisabledLanes|=u,xa|=u,l=4;break e}u=bt,bt=l,u!==null&&(bt===null?bt=u:bt.push.apply(bt,u))}l=m}if(u=!1,l!==2)continue}}if(l===1){as(e,0),zn(e,t,0,!0);break}e:{switch(i=e,u=l,u){case 0:case 1:throw Error(r(345));case 4:if((t&4194048)!==t)break;case 6:zn(i,t,St,!Cn);break e;case 2:bt=null;break;case 3:case 5:break;default:throw Error(r(329))}if((t&62914560)===t&&(l=So+300-xt(),10<l)){if(zn(i,t,St,!Cn),Hi(i,0,!0)!==0)break e;kn=t,i.timeoutHandle=uh(wm.bind(null,i,n,bt,jo,Gc,t,St,xa,ts,Cn,u,"Throttled",-0,0),l);break e}wm(i,n,bt,jo,Gc,t,St,xa,ts,Cn,u,null,-0,0)}}break}while(!0);Jt(e)}function wm(e,t,n,i,l,u,m,x,M,N,L,P,D,C){if(e.timeoutHandle=-1,P=t.subtreeFlags,P&8192||(P&16785408)===16785408){P={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sn},Tm(t,u,P);var $=(u&62914560)===u?So-xt():(u&4194048)===u?Vm-xt():0;if($=Xx(P,$),$!==null){kn=u,e.cancelPendingCommit=$(Bm.bind(null,e,t,u,n,i,l,m,x,M,L,P,null,D,C)),zn(e,u,m,!N);return}}Bm(e,t,u,n,i,l,m,x,M)}function cx(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var l=n[i],u=l.getSnapshot;l=l.value;try{if(!yt(u(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function zn(e,t,n,i){t&=~kc,t&=~xa,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var l=t;0<l;){var u=31-Gt(l),m=1<<u;i[u]=-1,l&=~m}n!==0&&Pd(e,n,t)}function Vo(){return(ye&6)===0?(si(0),!1):!0}function Ac(){if(me!==null){if(ve===0)var e=me.return;else e=me,cn=ua=null,Ol(e),Xa=null,zs=0,e=me;for(;e!==null;)dm(e.alternate,e),e=e.return;me=null}}function as(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,jx(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),kn=0,Ac(),je=e,me=n=rn(e.current,null),be=t,ve=0,Tt=null,Cn=!1,es=Ms(e,t),xc=!1,ts=St=kc=xa=Rn=Le=0,bt=ni=null,Gc=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var l=31-Gt(i),u=1<<l;t|=e[l],i&=~u}return xn=t,Qi(),n}function qm(e,t){ue=null,R.H=Zs,t===Ka||t===so?(t=Jp(),ve=3):t===jl?(t=Jp(),ve=4):ve=t===ac?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Tt=t,me===null&&(Le=1,xo(e,Dt(t,e.current)))}function Cm(){var e=vt.current;return e===null?!0:(be&4194048)===be?Rt===null:(be&62914560)===be||(be&536870912)!==0?e===Rt:!1}function Rm(){var e=R.H;return R.H=Zs,e===null?Zs:e}function Hm(){var e=R.A;return R.A=rx,e}function Eo(){Le=4,Cn||(be&4194048)!==be&&vt.current!==null||(es=!0),(Rn&134217727)===0&&(xa&134217727)===0||je===null||zn(je,be,St,!1)}function Tc(e,t,n){var i=ye;ye|=2;var l=Rm(),u=Hm();(je!==e||be!==t)&&(jo=null,as(e,t)),t=!1;var m=Le;e:do try{if(ve!==0&&me!==null){var x=me,M=Tt;switch(ve){case 8:Ac(),m=6;break e;case 3:case 2:case 9:case 6:vt.current===null&&(t=!0);var N=ve;if(ve=0,Tt=null,ss(e,x,M,N),n&&es){m=0;break e}break;default:N=ve,ve=0,Tt=null,ss(e,x,M,N)}}ux(),m=Le;break}catch(L){qm(e,L)}while(!0);return t&&e.shellSuspendCounter++,cn=ua=null,ye=i,R.H=l,R.A=u,me===null&&(je=null,be=0,Qi()),m}function ux(){for(;me!==null;)Lm(me)}function dx(e,t){var n=ye;ye|=2;var i=Rm(),l=Hm();je!==e||be!==t?(jo=null,Io=xt()+500,as(e,t)):es=Ms(e,t);e:do try{if(ve!==0&&me!==null){t=me;var u=Tt;t:switch(ve){case 1:ve=0,Tt=null,ss(e,t,u,1);break;case 2:case 9:if(Yp(u)){ve=0,Tt=null,zm(t);break}t=function(){ve!==2&&ve!==9||je!==e||(ve=7),Jt(e)},u.then(t,t);break e;case 3:ve=7;break e;case 4:ve=5;break e;case 7:Yp(u)?(ve=0,Tt=null,zm(t)):(ve=0,Tt=null,ss(e,t,u,7));break;case 5:var m=null;switch(me.tag){case 26:m=me.memoizedState;case 5:case 27:var x=me;if(m?Ah(m):x.stateNode.complete){ve=0,Tt=null;var M=x.sibling;if(M!==null)me=M;else{var N=x.return;N!==null?(me=N,No(N)):me=null}break t}}ve=0,Tt=null,ss(e,t,u,5);break;case 6:ve=0,Tt=null,ss(e,t,u,6);break;case 8:Ac(),Le=6;break e;default:throw Error(r(462))}}px();break}catch(L){qm(e,L)}while(!0);return cn=ua=null,R.H=i,R.A=l,ye=n,me!==null?0:(je=null,be=0,Qi(),Le)}function px(){for(;me!==null&&!q_();)Lm(me)}function Lm(e){var t=cm(e.alternate,e,xn);e.memoizedProps=e.pendingProps,t===null?No(e):me=t}function zm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=am(n,t,t.pendingProps,t.type,void 0,be);break;case 11:t=am(n,t,t.pendingProps,t.type.render,t.ref,be);break;case 5:Ol(t);default:dm(n,t),t=me=Hp(t,xn),t=cm(n,t,xn)}e.memoizedProps=e.pendingProps,t===null?No(e):me=t}function ss(e,t,n,i){cn=ua=null,Ol(t),Xa=null,zs=0;var l=t.return;try{if(ex(e,l,t,n,be)){Le=1,xo(e,Dt(n,e.current)),me=null;return}}catch(u){if(l!==null)throw me=l,u;Le=1,xo(e,Dt(n,e.current)),me=null;return}t.flags&32768?(xe||i===1?e=!0:es||(be&536870912)!==0?e=!1:(Cn=e=!0,(i===2||i===9||i===3||i===6)&&(i=vt.current,i!==null&&i.tag===13&&(i.flags|=16384))),Om(t,e)):No(t)}function No(e){var t=e;do{if((t.flags&32768)!==0){Om(t,Cn);return}e=t.return;var n=ax(t.alternate,t,xn);if(n!==null){me=n;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);Le===0&&(Le=5)}function Om(e,t){do{var n=sx(e.alternate,e);if(n!==null){n.flags&=32767,me=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){me=e;return}me=e=n}while(e!==null);Le=6,me=null}function Bm(e,t,n,i,l,u,m,x,M){e.cancelPendingCommit=null;do Do();while(Ye!==0);if((ye&6)!==0)throw Error(r(327));if(t!==null){if(t===e.current)throw Error(r(177));if(u=t.lanes|t.childLanes,u|=ml,F_(e,n,u,m,x,M),e===je&&(me=je=null,be=0),ns=t,Ln=e,kn=n,yc=u,Mc=l,Em=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,bx(wi,function(){return Xm(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=R.T,R.T=null,l=Q.p,Q.p=2,m=ye,ye|=4;try{ix(e,t,n)}finally{ye=m,Q.p=l,R.T=i}}Ye=1,Um(),Pm(),Fm()}}function Um(){if(Ye===1){Ye=0;var e=Ln,t=ns,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=R.T,R.T=null;var i=Q.p;Q.p=2;var l=ye;ye|=4;try{Mm(t,e);var u=Hc,m=jp(e.containerInfo),x=u.focusedElem,M=u.selectionRange;if(m!==x&&x&&x.ownerDocument&&Ip(x.ownerDocument.documentElement,x)){if(M!==null&&cl(x)){var N=M.start,L=M.end;if(L===void 0&&(L=N),"selectionStart"in x)x.selectionStart=N,x.selectionEnd=Math.min(L,x.value.length);else{var P=x.ownerDocument||document,D=P&&P.defaultView||window;if(D.getSelection){var C=D.getSelection(),$=x.textContent.length,ie=Math.min(M.start,$),Ie=M.end===void 0?ie:Math.min(M.end,$);!C.extend&&ie>Ie&&(m=Ie,Ie=ie,ie=m);var j=Sp(x,ie),A=Sp(x,Ie);if(j&&A&&(C.rangeCount!==1||C.anchorNode!==j.node||C.anchorOffset!==j.offset||C.focusNode!==A.node||C.focusOffset!==A.offset)){var E=P.createRange();E.setStart(j.node,j.offset),C.removeAllRanges(),ie>Ie?(C.addRange(E),C.extend(A.node,A.offset)):(E.setEnd(A.node,A.offset),C.addRange(E))}}}}for(P=[],C=x;C=C.parentNode;)C.nodeType===1&&P.push({element:C,left:C.scrollLeft,top:C.scrollTop});for(typeof x.focus=="function"&&x.focus(),x=0;x<P.length;x++){var O=P[x];O.element.scrollLeft=O.left,O.element.scrollTop=O.top}}Fo=!!Rc,Hc=Rc=null}finally{ye=l,Q.p=i,R.T=n}}e.current=t,Ye=2}}function Pm(){if(Ye===2){Ye=0;var e=Ln,t=ns,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=R.T,R.T=null;var i=Q.p;Q.p=2;var l=ye;ye|=4;try{_m(e,t.alternate,t)}finally{ye=l,Q.p=i,R.T=n}}Ye=3}}function Fm(){if(Ye===4||Ye===3){Ye=0,C_();var e=Ln,t=ns,n=kn,i=Em;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ye=5:(Ye=0,ns=Ln=null,Km(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Hn=null),Pr(n),t=t.stateNode,kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(ys,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=R.T,l=Q.p,Q.p=2,R.T=null;try{for(var u=e.onRecoverableError,m=0;m<i.length;m++){var x=i[m];u(x.value,{componentStack:x.stack})}}finally{R.T=t,Q.p=l}}(kn&3)!==0&&Do(),Jt(e),l=e.pendingLanes,(n&261930)!==0&&(l&42)!==0?e===vc?ai++:(ai=0,vc=e):ai=0,si(0)}}function Km(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Hs(t)))}function Do(){return Um(),Pm(),Fm(),Xm()}function Xm(){if(Ye!==5)return!1;var e=Ln,t=yc;yc=0;var n=Pr(kn),i=R.T,l=Q.p;try{Q.p=32>n?32:n,R.T=null,n=Mc,Mc=null;var u=Ln,m=kn;if(Ye=0,ns=Ln=null,kn=0,(ye&6)!==0)throw Error(r(331));var x=ye;if(ye|=4,Im(u.current),Am(u,u.current,m,n),ye=x,si(0,!1),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(ys,u)}catch{}return!0}finally{Q.p=l,R.T=i,Km(e,t)}}function Zm(e,t,n){t=Dt(n,t),t=nc(e.stateNode,t,2),e=Nn(e,t,2),e!==null&&(vs(e,2),Jt(e))}function Ae(e,t,n){if(e.tag===3)Zm(e,e,n);else for(;t!==null;){if(t.tag===3){Zm(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Hn===null||!Hn.has(i))){e=Dt(n,e),n=Yg(2),i=Nn(t,n,2),i!==null&&(Qg(n,i,t,e),vs(i,2),Jt(i));break}}t=t.return}}function Sc(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new lx;var l=new Set;i.set(t,l)}else l=i.get(t),l===void 0&&(l=new Set,i.set(t,l));l.has(n)||(xc=!0,l.add(n),e=gx.bind(null,e,t,n),t.then(e,e))}function gx(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,je===e&&(be&n)===n&&(Le===4||Le===3&&(be&62914560)===be&&300>xt()-So?(ye&2)===0&&as(e,0):kc|=n,ts===be&&(ts=0)),Jt(e)}function Ym(e,t){t===0&&(t=Ud()),e=ra(e,t),e!==null&&(vs(e,t),Jt(e))}function mx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ym(e,n)}function hx(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(r(314))}i!==null&&i.delete(t),Ym(e,n)}function bx(e,t){return zr(e,t)}var wo=null,is=null,Ic=!1,qo=!1,jc=!1,On=0;function Jt(e){e!==is&&e.next===null&&(is===null?wo=is=e:is=is.next=e),qo=!0,Ic||(Ic=!0,_x())}function si(e,t){if(!jc&&qo){jc=!0;do for(var n=!1,i=wo;i!==null;){if(e!==0){var l=i.pendingLanes;if(l===0)var u=0;else{var m=i.suspendedLanes,x=i.pingedLanes;u=(1<<31-Gt(42|e)+1)-1,u&=l&~(m&~x),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,$m(i,u))}else u=be,u=Hi(i,i===je?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(u&3)===0||Ms(i,u)||(n=!0,$m(i,u));i=i.next}while(n);jc=!1}}function fx(){Qm()}function Qm(){qo=Ic=!1;var e=0;On!==0&&Ix()&&(e=On);for(var t=xt(),n=null,i=wo;i!==null;){var l=i.next,u=Jm(i,t);u===0?(i.next=null,n===null?wo=l:n.next=l,l===null&&(is=n)):(n=i,(e!==0||(u&3)!==0)&&(qo=!0)),i=l}Ye!==0&&Ye!==5||si(e),On!==0&&(On=0)}function Jm(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var m=31-Gt(u),x=1<<m,M=l[m];M===-1?((x&n)===0||(x&i)!==0)&&(l[m]=P_(x,t)):M<=t&&(e.expiredLanes|=x),u&=~x}if(t=je,n=be,n=Hi(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ve===2||ve===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Or(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ms(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Or(i),Pr(n)){case 2:case 8:n=Od;break;case 32:n=wi;break;case 268435456:n=Bd;break;default:n=wi}return i=Wm.bind(null,e),n=zr(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Or(i),e.callbackPriority=2,e.callbackNode=null,2}function Wm(e,t){if(Ye!==0&&Ye!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Do()&&e.callbackNode!==n)return null;var i=be;return i=Hi(e,e===je?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Dm(e,i,t),Jm(e,xt()),e.callbackNode!=null&&e.callbackNode===n?Wm.bind(null,e):null)}function $m(e,t){if(Do())return null;Dm(e,t,!0)}function _x(){Vx(function(){(ye&6)!==0?zr(zd,fx):Qm()})}function Vc(){if(On===0){var e=Pa;e===0&&(e=qi,qi<<=1,(qi&261888)===0&&(qi=256)),On=e}return On}function eh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Bi(""+e)}function th(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function xx(e,t,n,i,l){if(t==="submit"&&n&&n.stateNode===l){var u=eh((l[dt]||null).action),m=i.submitter;m&&(t=(t=m[dt]||null)?eh(t.formAction):m.getAttribute("formAction"),t!==null&&(u=t,m=null));var x=new Ki("action","action",null,i,l);e.push({event:x,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(On!==0){var M=m?th(l,m):new FormData(l);Ql(n,{pending:!0,data:M,method:l.method,action:u},null,M)}}else typeof u=="function"&&(x.preventDefault(),M=m?th(l,m):new FormData(l),Ql(n,{pending:!0,data:M,method:l.method,action:u},u,M))},currentTarget:l}]})}}for(var Ec=0;Ec<gl.length;Ec++){var Nc=gl[Ec],kx=Nc.toLowerCase(),Gx=Nc[0].toUpperCase()+Nc.slice(1);Bt(kx,"on"+Gx)}Bt(Np,"onAnimationEnd"),Bt(Dp,"onAnimationIteration"),Bt(wp,"onAnimationStart"),Bt("dblclick","onDoubleClick"),Bt("focusin","onFocus"),Bt("focusout","onBlur"),Bt(R1,"onTransitionRun"),Bt(H1,"onTransitionStart"),Bt(L1,"onTransitionCancel"),Bt(qp,"onTransitionEnd"),Va("onMouseEnter",["mouseout","mouseover"]),Va("onMouseLeave",["mouseout","mouseover"]),Va("onPointerEnter",["pointerout","pointerover"]),Va("onPointerLeave",["pointerout","pointerover"]),aa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),aa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),aa("onBeforeInput",["compositionend","keypress","textInput","paste"]),aa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),aa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),aa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ii));function nh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],l=i.event;i=i.listeners;e:{var u=void 0;if(t)for(var m=i.length-1;0<=m;m--){var x=i[m],M=x.instance,N=x.currentTarget;if(x=x.listener,M!==u&&l.isPropagationStopped())break e;u=x,l.currentTarget=N;try{u(l)}catch(L){Yi(L)}l.currentTarget=null,u=M}else for(m=0;m<i.length;m++){if(x=i[m],M=x.instance,N=x.currentTarget,x=x.listener,M!==u&&l.isPropagationStopped())break e;u=x,l.currentTarget=N;try{u(l)}catch(L){Yi(L)}l.currentTarget=null,u=M}}}}function he(e,t){var n=t[Fr];n===void 0&&(n=t[Fr]=new Set);var i=e+"__bubble";n.has(i)||(ah(t,e,2,!1),n.add(i))}function Dc(e,t,n){var i=0;t&&(i|=4),ah(n,e,i,t)}var Co="_reactListening"+Math.random().toString(36).slice(2);function wc(e){if(!e[Co]){e[Co]=!0,Qd.forEach(function(n){n!=="selectionchange"&&(yx.has(n)||Dc(n,!1,e),Dc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Co]||(t[Co]=!0,Dc("selectionchange",!1,t))}}function ah(e,t,n,i){switch(Nh(t)){case 2:var l=Qx;break;case 8:l=Jx;break;default:l=Yc}n=l.bind(null,t,n,e),l=void 0,!el||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),i?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function qc(e,t,n,i,l){var u=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var m=i.tag;if(m===3||m===4){var x=i.stateNode.containerInfo;if(x===l)break;if(m===4)for(m=i.return;m!==null;){var M=m.tag;if((M===3||M===4)&&m.stateNode.containerInfo===l)return;m=m.return}for(;x!==null;){if(m=Sa(x),m===null)return;if(M=m.tag,M===5||M===6||M===26||M===27){i=u=m;continue e}x=x.parentNode}}i=i.return}lp(function(){var N=u,L=Wr(n),P=[];e:{var D=Cp.get(e);if(D!==void 0){var C=Ki,$=e;switch(e){case"keypress":if(Pi(n)===0)break e;case"keydown":case"keyup":C=h1;break;case"focusin":$="focus",C=sl;break;case"focusout":$="blur",C=sl;break;case"beforeblur":case"afterblur":C=sl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=a1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=_1;break;case Np:case Dp:case wp:C=o1;break;case qp:C=k1;break;case"scroll":case"scrollend":C=t1;break;case"wheel":C=y1;break;case"copy":case"cut":case"paste":C=l1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=gp;break;case"toggle":case"beforetoggle":C=v1}var ie=(t&4)!==0,Ie=!ie&&(e==="scroll"||e==="scrollend"),j=ie?D!==null?D+"Capture":null:D;ie=[];for(var A=N,E;A!==null;){var O=A;if(E=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||E===null||j===null||(O=Ss(A,j),O!=null&&ie.push(oi(A,O,E))),Ie)break;A=A.return}0<ie.length&&(D=new C(D,$,null,n,L),P.push({event:D,listeners:ie}))}}if((t&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",D&&n!==Jr&&($=n.relatedTarget||n.fromElement)&&(Sa($)||$[Ta]))break e;if((C||D)&&(D=L.window===L?L:(D=L.ownerDocument)?D.defaultView||D.parentWindow:window,C?($=n.relatedTarget||n.toElement,C=N,$=$?Sa($):null,$!==null&&(Ie=g($),ie=$.tag,$!==Ie||ie!==5&&ie!==27&&ie!==6)&&($=null)):(C=null,$=N),C!==$)){if(ie=dp,O="onMouseLeave",j="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(ie=gp,O="onPointerLeave",j="onPointerEnter",A="pointer"),Ie=C==null?D:Ts(C),E=$==null?D:Ts($),D=new ie(O,A+"leave",C,n,L),D.target=Ie,D.relatedTarget=E,O=null,Sa(L)===N&&(ie=new ie(j,A+"enter",$,n,L),ie.target=E,ie.relatedTarget=Ie,O=ie),Ie=O,C&&$)t:{for(ie=Mx,j=C,A=$,E=0,O=j;O;O=ie(O))E++;O=0;for(var se=A;se;se=ie(se))O++;for(;0<E-O;)j=ie(j),E--;for(;0<O-E;)A=ie(A),O--;for(;E--;){if(j===A||A!==null&&j===A.alternate){ie=j;break t}j=ie(j),A=ie(A)}ie=null}else ie=null;C!==null&&sh(P,D,C,ie,!1),$!==null&&Ie!==null&&sh(P,Ie,$,ie,!0)}}e:{if(D=N?Ts(N):window,C=D.nodeName&&D.nodeName.toLowerCase(),C==="select"||C==="input"&&D.type==="file")var ke=Gp;else if(xp(D))if(yp)ke=w1;else{ke=N1;var ae=E1}else C=D.nodeName,!C||C.toLowerCase()!=="input"||D.type!=="checkbox"&&D.type!=="radio"?N&&Qr(N.elementType)&&(ke=Gp):ke=D1;if(ke&&(ke=ke(e,N))){kp(P,ke,n,L);break e}ae&&ae(e,D,N),e==="focusout"&&N&&D.type==="number"&&N.memoizedProps.value!=null&&Yr(D,"number",D.value)}switch(ae=N?Ts(N):window,e){case"focusin":(xp(ae)||ae.contentEditable==="true")&&(Ca=ae,ul=N,qs=null);break;case"focusout":qs=ul=Ca=null;break;case"mousedown":dl=!0;break;case"contextmenu":case"mouseup":case"dragend":dl=!1,Vp(P,n,L);break;case"selectionchange":if(C1)break;case"keydown":case"keyup":Vp(P,n,L)}var pe;if(ol)e:{switch(e){case"compositionstart":var fe="onCompositionStart";break e;case"compositionend":fe="onCompositionEnd";break e;case"compositionupdate":fe="onCompositionUpdate";break e}fe=void 0}else qa?fp(e,n)&&(fe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(fe="onCompositionStart");fe&&(mp&&n.locale!=="ko"&&(qa||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&qa&&(pe=cp()):(An=L,tl="value"in An?An.value:An.textContent,qa=!0)),ae=Ro(N,fe),0<ae.length&&(fe=new pp(fe,e,null,n,L),P.push({event:fe,listeners:ae}),pe?fe.data=pe:(pe=_p(n),pe!==null&&(fe.data=pe)))),(pe=T1?S1(e,n):I1(e,n))&&(fe=Ro(N,"onBeforeInput"),0<fe.length&&(ae=new pp("onBeforeInput","beforeinput",null,n,L),P.push({event:ae,listeners:fe}),ae.data=pe)),xx(P,e,N,n,L)}nh(P,t)})}function oi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ro(e,t){for(var n=t+"Capture",i=[];e!==null;){var l=e,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=Ss(e,n),l!=null&&i.unshift(oi(e,l,u)),l=Ss(e,t),l!=null&&i.push(oi(e,l,u))),e.tag===3)return i;e=e.return}return[]}function Mx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function sh(e,t,n,i,l){for(var u=t._reactName,m=[];n!==null&&n!==i;){var x=n,M=x.alternate,N=x.stateNode;if(x=x.tag,M!==null&&M===i)break;x!==5&&x!==26&&x!==27||N===null||(M=N,l?(N=Ss(n,u),N!=null&&m.unshift(oi(n,N,M))):l||(N=Ss(n,u),N!=null&&m.push(oi(n,N,M)))),n=n.return}m.length!==0&&e.push({event:t,listeners:m})}var vx=/\r\n?/g,Ax=/\u0000|\uFFFD/g;function ih(e){return(typeof e=="string"?e:""+e).replace(vx,`
`).replace(Ax,"")}function oh(e,t){return t=ih(t),ih(e)===t}function Se(e,t,n,i,l,u){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Na(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Na(e,""+i);break;case"className":zi(e,"class",i);break;case"tabIndex":zi(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":zi(e,n,i);break;case"style":op(e,i,u);break;case"data":if(t!=="object"){zi(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Bi(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(t!=="input"&&Se(e,t,"name",l.name,l,null),Se(e,t,"formEncType",l.formEncType,l,null),Se(e,t,"formMethod",l.formMethod,l,null),Se(e,t,"formTarget",l.formTarget,l,null)):(Se(e,t,"encType",l.encType,l,null),Se(e,t,"method",l.method,l,null),Se(e,t,"target",l.target,l,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Bi(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=sn);break;case"onScroll":i!=null&&he("scroll",e);break;case"onScrollEnd":i!=null&&he("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(r(61));if(n=i.__html,n!=null){if(l.children!=null)throw Error(r(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Bi(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":he("beforetoggle",e),he("toggle",e),Li(e,"popover",i);break;case"xlinkActuate":an(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":an(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":an(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":an(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":an(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":an(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":an(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":an(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":an(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Li(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=$_.get(n)||n,Li(e,n,i))}}function Cc(e,t,n,i,l,u){switch(n){case"style":op(e,i,u);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(r(61));if(n=i.__html,n!=null){if(l.children!=null)throw Error(r(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Na(e,i):(typeof i=="number"||typeof i=="bigint")&&Na(e,""+i);break;case"onScroll":i!=null&&he("scroll",e);break;case"onScrollEnd":i!=null&&he("scrollend",e);break;case"onClick":i!=null&&(e.onclick=sn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Jd.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),u=e[dt]||null,u=u!=null?u[n]:null,typeof u=="function"&&e.removeEventListener(t,u,l),typeof i=="function")){typeof u!="function"&&u!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,l);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Li(e,n,i)}}}function at(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":he("error",e),he("load",e);var i=!1,l=!1,u;for(u in n)if(n.hasOwnProperty(u)){var m=n[u];if(m!=null)switch(u){case"src":i=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:Se(e,t,u,m,n,null)}}l&&Se(e,t,"srcSet",n.srcSet,n,null),i&&Se(e,t,"src",n.src,n,null);return;case"input":he("invalid",e);var x=u=m=l=null,M=null,N=null;for(i in n)if(n.hasOwnProperty(i)){var L=n[i];if(L!=null)switch(i){case"name":l=L;break;case"type":m=L;break;case"checked":M=L;break;case"defaultChecked":N=L;break;case"value":u=L;break;case"defaultValue":x=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(r(137,t));break;default:Se(e,t,i,L,n,null)}}np(e,u,x,M,N,m,l,!1);return;case"select":he("invalid",e),i=m=u=null;for(l in n)if(n.hasOwnProperty(l)&&(x=n[l],x!=null))switch(l){case"value":u=x;break;case"defaultValue":m=x;break;case"multiple":i=x;default:Se(e,t,l,x,n,null)}t=u,n=m,e.multiple=!!i,t!=null?Ea(e,!!i,t,!1):n!=null&&Ea(e,!!i,n,!0);return;case"textarea":he("invalid",e),u=l=i=null;for(m in n)if(n.hasOwnProperty(m)&&(x=n[m],x!=null))switch(m){case"value":i=x;break;case"defaultValue":l=x;break;case"children":u=x;break;case"dangerouslySetInnerHTML":if(x!=null)throw Error(r(91));break;default:Se(e,t,m,x,n,null)}sp(e,i,l,u);return;case"option":for(M in n)if(n.hasOwnProperty(M)&&(i=n[M],i!=null))switch(M){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Se(e,t,M,i,n,null)}return;case"dialog":he("beforetoggle",e),he("toggle",e),he("cancel",e),he("close",e);break;case"iframe":case"object":he("load",e);break;case"video":case"audio":for(i=0;i<ii.length;i++)he(ii[i],e);break;case"image":he("error",e),he("load",e);break;case"details":he("toggle",e);break;case"embed":case"source":case"link":he("error",e),he("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in n)if(n.hasOwnProperty(N)&&(i=n[N],i!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:Se(e,t,N,i,n,null)}return;default:if(Qr(t)){for(L in n)n.hasOwnProperty(L)&&(i=n[L],i!==void 0&&Cc(e,t,L,i,n,void 0));return}}for(x in n)n.hasOwnProperty(x)&&(i=n[x],i!=null&&Se(e,t,x,i,n,null))}function Tx(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,m=null,x=null,M=null,N=null,L=null;for(C in n){var P=n[C];if(n.hasOwnProperty(C)&&P!=null)switch(C){case"checked":break;case"value":break;case"defaultValue":M=P;default:i.hasOwnProperty(C)||Se(e,t,C,null,i,P)}}for(var D in i){var C=i[D];if(P=n[D],i.hasOwnProperty(D)&&(C!=null||P!=null))switch(D){case"type":u=C;break;case"name":l=C;break;case"checked":N=C;break;case"defaultChecked":L=C;break;case"value":m=C;break;case"defaultValue":x=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(r(137,t));break;default:C!==P&&Se(e,t,D,C,i,P)}}Zr(e,m,x,M,N,L,u,l);return;case"select":C=m=x=D=null;for(u in n)if(M=n[u],n.hasOwnProperty(u)&&M!=null)switch(u){case"value":break;case"multiple":C=M;default:i.hasOwnProperty(u)||Se(e,t,u,null,i,M)}for(l in i)if(u=i[l],M=n[l],i.hasOwnProperty(l)&&(u!=null||M!=null))switch(l){case"value":D=u;break;case"defaultValue":x=u;break;case"multiple":m=u;default:u!==M&&Se(e,t,l,u,i,M)}t=x,n=m,i=C,D!=null?Ea(e,!!n,D,!1):!!i!=!!n&&(t!=null?Ea(e,!!n,t,!0):Ea(e,!!n,n?[]:"",!1));return;case"textarea":C=D=null;for(x in n)if(l=n[x],n.hasOwnProperty(x)&&l!=null&&!i.hasOwnProperty(x))switch(x){case"value":break;case"children":break;default:Se(e,t,x,null,i,l)}for(m in i)if(l=i[m],u=n[m],i.hasOwnProperty(m)&&(l!=null||u!=null))switch(m){case"value":D=l;break;case"defaultValue":C=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(r(91));break;default:l!==u&&Se(e,t,m,l,i,u)}ap(e,D,C);return;case"option":for(var $ in n)if(D=n[$],n.hasOwnProperty($)&&D!=null&&!i.hasOwnProperty($))switch($){case"selected":e.selected=!1;break;default:Se(e,t,$,null,i,D)}for(M in i)if(D=i[M],C=n[M],i.hasOwnProperty(M)&&D!==C&&(D!=null||C!=null))switch(M){case"selected":e.selected=D&&typeof D!="function"&&typeof D!="symbol";break;default:Se(e,t,M,D,i,C)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in n)D=n[ie],n.hasOwnProperty(ie)&&D!=null&&!i.hasOwnProperty(ie)&&Se(e,t,ie,null,i,D);for(N in i)if(D=i[N],C=n[N],i.hasOwnProperty(N)&&D!==C&&(D!=null||C!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(r(137,t));break;default:Se(e,t,N,D,i,C)}return;default:if(Qr(t)){for(var Ie in n)D=n[Ie],n.hasOwnProperty(Ie)&&D!==void 0&&!i.hasOwnProperty(Ie)&&Cc(e,t,Ie,void 0,i,D);for(L in i)D=i[L],C=n[L],!i.hasOwnProperty(L)||D===C||D===void 0&&C===void 0||Cc(e,t,L,D,i,C);return}}for(var j in n)D=n[j],n.hasOwnProperty(j)&&D!=null&&!i.hasOwnProperty(j)&&Se(e,t,j,null,i,D);for(P in i)D=i[P],C=n[P],!i.hasOwnProperty(P)||D===C||D==null&&C==null||Se(e,t,P,D,i,C)}function rh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Sx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var l=n[i],u=l.transferSize,m=l.initiatorType,x=l.duration;if(u&&x&&rh(m)){for(m=0,x=l.responseEnd,i+=1;i<n.length;i++){var M=n[i],N=M.startTime;if(N>x)break;var L=M.transferSize,P=M.initiatorType;L&&rh(P)&&(M=M.responseEnd,m+=L*(M<x?1:(x-N)/(M-N)))}if(--i,t+=8*(u+m)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Rc=null,Hc=null;function Ho(e){return e.nodeType===9?e:e.ownerDocument}function lh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ch(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Lc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zc=null;function Ix(){var e=window.event;return e&&e.type==="popstate"?e===zc?!1:(zc=e,!0):(zc=null,!1)}var uh=typeof setTimeout=="function"?setTimeout:void 0,jx=typeof clearTimeout=="function"?clearTimeout:void 0,dh=typeof Promise=="function"?Promise:void 0,Vx=typeof queueMicrotask=="function"?queueMicrotask:typeof dh<"u"?function(e){return dh.resolve(null).then(e).catch(Ex)}:uh;function Ex(e){setTimeout(function(){throw e})}function Bn(e){return e==="head"}function ph(e,t){var n=t,i=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(l),cs(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")ri(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,ri(n);for(var u=n.firstChild;u;){var m=u.nextSibling,x=u.nodeName;u[As]||x==="SCRIPT"||x==="STYLE"||x==="LINK"&&u.rel.toLowerCase()==="stylesheet"||n.removeChild(u),u=m}}else n==="body"&&ri(e.ownerDocument.body);n=l}while(n);cs(t)}function gh(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Oc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Oc(n),Kr(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Nx(e,t,n,i){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[As])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Ht(e.nextSibling),e===null)break}return null}function Dx(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ht(e.nextSibling),e===null))return null;return e}function mh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ht(e.nextSibling),e===null))return null;return e}function Bc(e){return e.data==="$?"||e.data==="$~"}function Uc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function wx(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Pc=null;function hh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Ht(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function bh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function fh(e,t,n){switch(t=Ho(n),e){case"html":if(e=t.documentElement,!e)throw Error(r(452));return e;case"head":if(e=t.head,!e)throw Error(r(453));return e;case"body":if(e=t.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function ri(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Kr(e)}var Lt=new Map,_h=new Set;function Lo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Gn=Q.d;Q.d={f:qx,r:Cx,D:Rx,C:Hx,L:Lx,m:zx,X:Bx,S:Ox,M:Ux};function qx(){var e=Gn.f(),t=Vo();return e||t}function Cx(e){var t=Ia(e);t!==null&&t.tag===5&&t.type==="form"?qg(t):Gn.r(e)}var os=typeof document>"u"?null:document;function xh(e,t,n){var i=os;if(i&&typeof t=="string"&&t){var l=Et(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),_h.has(l)||(_h.add(l),e={rel:e,crossOrigin:n,href:t},i.querySelector(l)===null&&(t=i.createElement("link"),at(t,"link",e),Je(t),i.head.appendChild(t)))}}function Rx(e){Gn.D(e),xh("dns-prefetch",e,null)}function Hx(e,t){Gn.C(e,t),xh("preconnect",e,t)}function Lx(e,t,n){Gn.L(e,t,n);var i=os;if(i&&e&&t){var l='link[rel="preload"][as="'+Et(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+Et(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+Et(n.imageSizes)+'"]')):l+='[href="'+Et(e)+'"]';var u=l;switch(t){case"style":u=rs(e);break;case"script":u=ls(e)}Lt.has(u)||(e=k({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Lt.set(u,e),i.querySelector(l)!==null||t==="style"&&i.querySelector(li(u))||t==="script"&&i.querySelector(ci(u))||(t=i.createElement("link"),at(t,"link",e),Je(t),i.head.appendChild(t)))}}function zx(e,t){Gn.m(e,t);var n=os;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Et(i)+'"][href="'+Et(e)+'"]',u=l;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=ls(e)}if(!Lt.has(u)&&(e=k({rel:"modulepreload",href:e},t),Lt.set(u,e),n.querySelector(l)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ci(u)))return}i=n.createElement("link"),at(i,"link",e),Je(i),n.head.appendChild(i)}}}function Ox(e,t,n){Gn.S(e,t,n);var i=os;if(i&&e){var l=ja(i).hoistableStyles,u=rs(e);t=t||"default";var m=l.get(u);if(!m){var x={loading:0,preload:null};if(m=i.querySelector(li(u)))x.loading=5;else{e=k({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Lt.get(u))&&Fc(e,n);var M=m=i.createElement("link");Je(M),at(M,"link",e),M._p=new Promise(function(N,L){M.onload=N,M.onerror=L}),M.addEventListener("load",function(){x.loading|=1}),M.addEventListener("error",function(){x.loading|=2}),x.loading|=4,zo(m,t,i)}m={type:"stylesheet",instance:m,count:1,state:x},l.set(u,m)}}}function Bx(e,t){Gn.X(e,t);var n=os;if(n&&e){var i=ja(n).hoistableScripts,l=ls(e),u=i.get(l);u||(u=n.querySelector(ci(l)),u||(e=k({src:e,async:!0},t),(t=Lt.get(l))&&Kc(e,t),u=n.createElement("script"),Je(u),at(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(l,u))}}function Ux(e,t){Gn.M(e,t);var n=os;if(n&&e){var i=ja(n).hoistableScripts,l=ls(e),u=i.get(l);u||(u=n.querySelector(ci(l)),u||(e=k({src:e,async:!0,type:"module"},t),(t=Lt.get(l))&&Kc(e,t),u=n.createElement("script"),Je(u),at(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(l,u))}}function kh(e,t,n,i){var l=(l=ge.current)?Lo(l):null;if(!l)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=rs(n.href),n=ja(l).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=rs(n.href);var u=ja(l).hoistableStyles,m=u.get(e);if(m||(l=l.ownerDocument||l,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,m),(u=l.querySelector(li(e)))&&!u._p&&(m.instance=u,m.state.loading=5),Lt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Lt.set(e,n),u||Px(l,e,n,m.state))),t&&i===null)throw Error(r(528,""));return m}if(t&&i!==null)throw Error(r(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ls(n),n=ja(l).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function rs(e){return'href="'+Et(e)+'"'}function li(e){return'link[rel="stylesheet"]['+e+"]"}function Gh(e){return k({},e,{"data-precedence":e.precedence,precedence:null})}function Px(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),at(t,"link",n),Je(t),e.head.appendChild(t))}function ls(e){return'[src="'+Et(e)+'"]'}function ci(e){return"script[async]"+e}function yh(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Et(n.href)+'"]');if(i)return t.instance=i,Je(i),i;var l=k({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Je(i),at(i,"style",l),zo(i,n.precedence,e),t.instance=i;case"stylesheet":l=rs(n.href);var u=e.querySelector(li(l));if(u)return t.state.loading|=4,t.instance=u,Je(u),u;i=Gh(n),(l=Lt.get(l))&&Fc(i,l),u=(e.ownerDocument||e).createElement("link"),Je(u);var m=u;return m._p=new Promise(function(x,M){m.onload=x,m.onerror=M}),at(u,"link",i),t.state.loading|=4,zo(u,n.precedence,e),t.instance=u;case"script":return u=ls(n.src),(l=e.querySelector(ci(u)))?(t.instance=l,Je(l),l):(i=n,(l=Lt.get(u))&&(i=k({},n),Kc(i,l)),e=e.ownerDocument||e,l=e.createElement("script"),Je(l),at(l,"link",i),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(r(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,zo(i,n.precedence,e));return t.instance}function zo(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=i.length?i[i.length-1]:null,u=l,m=0;m<i.length;m++){var x=i[m];if(x.dataset.precedence===t)u=x;else if(u!==l)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Fc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Kc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Oo=null;function Mh(e,t,n){if(Oo===null){var i=new Map,l=Oo=new Map;l.set(n,i)}else l=Oo,i=l.get(n),i||(i=new Map,l.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var u=n[l];if(!(u[As]||u[$e]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var m=u.getAttribute(t)||"";m=e+m;var x=i.get(m);x?x.push(u):i.set(m,[u])}}return i}function vh(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Fx(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Ah(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Kx(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=rs(i.href),u=t.querySelector(li(l));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Bo.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=u,Je(u);return}u=t.ownerDocument||t,i=Gh(i),(l=Lt.get(l))&&Fc(i,l),u=u.createElement("link"),Je(u);var m=u;m._p=new Promise(function(x,M){m.onload=x,m.onerror=M}),at(u,"link",i),n.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Bo.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Xc=0;function Xx(e,t){return e.stylesheets&&e.count===0&&Po(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Po(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&Xc===0&&(Xc=62500*Sx());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Po(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Xc?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(l)}}:null}function Bo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Po(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Uo=null;function Po(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Uo=new Map,t.forEach(Zx,e),Uo=null,Bo.call(e))}function Zx(e,t){if(!(t.state.loading&4)){var n=Uo.get(e);if(n)var i=n.get(null);else{n=new Map,Uo.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var m=l[u];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(n.set(m.dataset.precedence,m),i=m)}i&&n.set(null,i)}l=t.instance,m=l.getAttribute("data-precedence"),u=n.get(m)||i,u===i&&n.set(null,l),n.set(m,l),this.count++,i=Bo.bind(this),l.addEventListener("load",i),l.addEventListener("error",i),u?u.parentNode.insertBefore(l,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var ui={$$typeof:H,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function Yx(e,t,n,i,l,u,m,x,M){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Br(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Br(0),this.hiddenUpdates=Br(null),this.identifierPrefix=i,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=M,this.incompleteTransitions=new Map}function Th(e,t,n,i,l,u,m,x,M,N,L,P){return e=new Yx(e,t,n,m,M,N,L,P,x),t=1,u===!0&&(t|=24),u=Mt(3,null,null,t),e.current=u,u.stateNode=e,t=Tl(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:i,isDehydrated:n,cache:t},Vl(u),e}function Sh(e){return e?(e=La,e):La}function Ih(e,t,n,i,l,u){l=Sh(l),i.context===null?i.context=l:i.pendingContext=l,i=En(t),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=Nn(e,i,t),n!==null&&(ft(n,e,t),Bs(n,e,t))}function jh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Zc(e,t){jh(e,t),(e=e.alternate)&&jh(e,t)}function Vh(e){if(e.tag===13||e.tag===31){var t=ra(e,67108864);t!==null&&ft(t,e,67108864),Zc(e,67108864)}}function Eh(e){if(e.tag===13||e.tag===31){var t=It();t=Ur(t);var n=ra(e,t);n!==null&&ft(n,e,t),Zc(e,t)}}var Fo=!0;function Qx(e,t,n,i){var l=R.T;R.T=null;var u=Q.p;try{Q.p=2,Yc(e,t,n,i)}finally{Q.p=u,R.T=l}}function Jx(e,t,n,i){var l=R.T;R.T=null;var u=Q.p;try{Q.p=8,Yc(e,t,n,i)}finally{Q.p=u,R.T=l}}function Yc(e,t,n,i){if(Fo){var l=Qc(i);if(l===null)qc(e,t,i,Ko,n),Dh(e,i);else if($x(l,e,t,n,i))i.stopPropagation();else if(Dh(e,i),t&4&&-1<Wx.indexOf(e)){for(;l!==null;){var u=Ia(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var m=na(u.pendingLanes);if(m!==0){var x=u;for(x.pendingLanes|=2,x.entangledLanes|=2;m;){var M=1<<31-Gt(m);x.entanglements[1]|=M,m&=~M}Jt(u),(ye&6)===0&&(Io=xt()+500,si(0))}}break;case 31:case 13:x=ra(u,2),x!==null&&ft(x,u,2),Vo(),Zc(u,2)}if(u=Qc(i),u===null&&qc(e,t,i,Ko,n),u===l)break;l=u}l!==null&&i.stopPropagation()}else qc(e,t,i,null,n)}}function Qc(e){return e=Wr(e),Jc(e)}var Ko=null;function Jc(e){if(Ko=null,e=Sa(e),e!==null){var t=g(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===31){if(e=b(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ko=e,null}function Nh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(R_()){case zd:return 2;case Od:return 8;case wi:case H_:return 32;case Bd:return 268435456;default:return 32}default:return 32}}var Wc=!1,Un=null,Pn=null,Fn=null,di=new Map,pi=new Map,Kn=[],Wx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Dh(e,t){switch(e){case"focusin":case"focusout":Un=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":Fn=null;break;case"pointerover":case"pointerout":di.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":pi.delete(t.pointerId)}}function gi(e,t,n,i,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:u,targetContainers:[l]},t!==null&&(t=Ia(t),t!==null&&Vh(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function $x(e,t,n,i,l){switch(t){case"focusin":return Un=gi(Un,e,t,n,i,l),!0;case"dragenter":return Pn=gi(Pn,e,t,n,i,l),!0;case"mouseover":return Fn=gi(Fn,e,t,n,i,l),!0;case"pointerover":var u=l.pointerId;return di.set(u,gi(di.get(u)||null,e,t,n,i,l)),!0;case"gotpointercapture":return u=l.pointerId,pi.set(u,gi(pi.get(u)||null,e,t,n,i,l)),!0}return!1}function wh(e){var t=Sa(e.target);if(t!==null){var n=g(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,Zd(e.priority,function(){Eh(n)});return}}else if(t===31){if(t=b(n),t!==null){e.blockedOn=t,Zd(e.priority,function(){Eh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qc(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Jr=i,n.target.dispatchEvent(i),Jr=null}else return t=Ia(n),t!==null&&Vh(t),e.blockedOn=n,!1;t.shift()}return!0}function qh(e,t,n){Xo(e)&&n.delete(t)}function e2(){Wc=!1,Un!==null&&Xo(Un)&&(Un=null),Pn!==null&&Xo(Pn)&&(Pn=null),Fn!==null&&Xo(Fn)&&(Fn=null),di.forEach(qh),pi.forEach(qh)}function Zo(e,t){e.blockedOn===t&&(e.blockedOn=null,Wc||(Wc=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,e2)))}var Yo=null;function Ch(e){Yo!==e&&(Yo=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Yo===e&&(Yo=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],l=e[t+2];if(typeof i!="function"){if(Jc(i||n)===null)continue;break}var u=Ia(n);u!==null&&(e.splice(t,3),t-=3,Ql(u,{pending:!0,data:l,method:n.method,action:i},i,l))}}))}function cs(e){function t(M){return Zo(M,e)}Un!==null&&Zo(Un,e),Pn!==null&&Zo(Pn,e),Fn!==null&&Zo(Fn,e),di.forEach(t),pi.forEach(t);for(var n=0;n<Kn.length;n++){var i=Kn[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Kn.length&&(n=Kn[0],n.blockedOn===null);)wh(n),n.blockedOn===null&&Kn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var l=n[i],u=n[i+1],m=l[dt]||null;if(typeof u=="function")m||Ch(n);else if(m){var x=null;if(u&&u.hasAttribute("formAction")){if(l=u,m=u[dt]||null)x=m.formAction;else if(Jc(l)!==null)continue}else x=m.action;typeof x=="function"?n[i+1]=x:(n.splice(i,3),i-=3),Ch(n)}}}function Rh(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(m){return l=m})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function $c(e){this._internalRoot=e}Qo.prototype.render=$c.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));var n=t.current,i=It();Ih(n,i,e,t,null,null)},Qo.prototype.unmount=$c.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ih(e.current,2,null,e,null,null),Vo(),t[Ta]=null}};function Qo(e){this._internalRoot=e}Qo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Xd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Kn.length&&t!==0&&t<Kn[n].priority;n++);Kn.splice(n,0,e),n===0&&wh(e)}};var Hh=s.version;if(Hh!=="19.2.7")throw Error(r(527,Hh,"19.2.7"));Q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=h(t),e=e!==null?f(e):null,e=e===null?null:e.stateNode,e};var t2={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jo.isDisabled&&Jo.supportsFiber)try{ys=Jo.inject(t2),kt=Jo}catch{}}return hi.createRoot=function(e,t){if(!d(e))throw Error(r(299));var n=!1,i="",l=Fg,u=Kg,m=Xg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError)),t=Th(e,1,!1,null,null,n,i,null,l,u,m,Rh),e[Ta]=t.current,wc(e),new $c(t)},hi.hydrateRoot=function(e,t,n){if(!d(e))throw Error(r(299));var i=!1,l="",u=Fg,m=Kg,x=Xg,M=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(m=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError),n.formState!==void 0&&(M=n.formState)),t=Th(e,1,!0,t,n??null,i,l,M,u,m,x,Rh),t.context=Sh(null),n=t.current,i=It(),i=Ur(i),l=En(i),l.callback=null,Nn(n,l,i),n=i,t.current.lanes=n,vs(t,n),Jt(t),e[Ta]=t.current,wc(e),new Qo(t)},hi.version="19.2.7",hi}var Zh;function p2(){if(Zh)return nu.exports;Zh=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(s){console.error(s)}}return a(),nu.exports=d2(),nu.exports}var g2=p2();/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),h2=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,o,r)=>r?r.toUpperCase():o.toLowerCase()),Yh=a=>{const s=h2(a);return s.charAt(0).toUpperCase()+s.slice(1)},Cf=(...a)=>a.filter((s,o,r)=>!!s&&s.trim()!==""&&r.indexOf(s)===o).join(" ").trim(),b2=a=>{for(const s in a)if(s.startsWith("aria-")||s==="role"||s==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var f2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=B.forwardRef(({color:a="currentColor",size:s=24,strokeWidth:o=2,absoluteStrokeWidth:r,className:d="",children:g,iconNode:p,...b},_)=>B.createElement("svg",{ref:_,...f2,width:s,height:s,stroke:a,strokeWidth:r?Number(o)*24/Number(s):o,className:Cf("lucide",d),...!g&&!b2(b)&&{"aria-hidden":"true"},...b},[...p.map(([h,f])=>B.createElement(h,f)),...Array.isArray(g)?g:[g]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=(a,s)=>{const o=B.forwardRef(({className:r,...d},g)=>B.createElement(_2,{ref:g,iconNode:s,className:Cf(`lucide-${m2(Yh(a))}`,`lucide-${a}`,r),...d}));return o.displayName=Yh(a),o};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],Vu=re("archive",x2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],ou=re("arrow-left",k2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Eu=re("book-open",G2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],ru=re("calculator",y2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],v2=re("calendar",M2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Nu=re("chevron-down",A2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T2=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],rr=re("chevron-right",T2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],vi=re("circle-check",S2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],j2=re("circle-play",I2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],Rf=re("code",V2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Du=re("copy",E2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],D2=re("credit-card",N2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Hf=re("download",w2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Yn=re("external-link",q2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],R2=re("eye",C2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],L2=re("file-text",H2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],Qh=re("flask-conical",z2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],Jh=re("funnel",O2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Wh=re("globe",B2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],wu=re("house",U2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Lf=re("info",P2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],K2=re("lightbulb",F2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],Z2=re("link",X2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],zf=re("lock",Y2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],J2=re("message-circle",Q2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=[["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",key:"39pd36"}],["rect",{width:"8",height:"4",x:"10",y:"6",rx:"1",key:"aywv1n"}]],Of=re("newspaper",W2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],Bf=re("palette",$2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ek=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]],bi=re("pin",ek);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tk=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],nk=re("play",tk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ak=[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]],sk=re("scale",ak);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ik=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],qu=re("search",ik);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ok=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],rk=re("settings-2",ok);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lk=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],ck=re("shield-alert",lk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uk=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],dk=re("shield-check",uk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pk=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],xi=re("shopping-bag",pk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gk=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Uf=re("sparkles",gk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mk=[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]],hk=re("table",mk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bk=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],Cu=re("terminal",bk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fk=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Pf=re("triangle-alert",fk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _k=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],_r=re("users",_k);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xk=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],$h=re("x",xk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kk=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],lr=re("youtube",kk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gk=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],yk=re("zap",Gk);/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const lu=[{name:"Inicio",path:"/",key:"nav.inicio"},{name:"Novedades",path:"/novedades",key:"nav.novedades"},{name:"Servicios",path:"/servicios",key:"nav.servicios"},{name:"Evo",path:"/evo",key:"nav.evo"},{name:"Otros códigos",path:"/otros",key:"nav.otros"},{name:"Guía",path:"/guia",key:"nav.guia"},{name:"Tutoriales",path:"/tutoriales",key:"nav.tutoriales"},{name:"Descargas",path:"/descargas",key:"nav.descargas"}],xr=[{id:"a",name:"Cibernético",shortName:"CYBER",icon:"Cpu",image:"https://github.com/luqueSmith/MGG/blob/main/img/cyber.png?raw=true"},{id:"b",name:"Zombi",shortName:"ZOMBI",icon:"Skull",image:"https://github.com/luqueSmith/MGG/blob/main/img/necro.png?raw=true"},{id:"c",name:"Guerrero",shortName:"Sword",icon:"Sword",image:"https://github.com/luqueSmith/MGG/blob/main/img/sable.png?raw=true"},{id:"d",name:"Bestia",shortName:"ZOOMORFO",icon:"PawPrint",image:"https://github.com/luqueSmith/MGG/blob/main/img/zomorfo.png?raw=true"},{id:"e",name:"Galáctico",shortName:"GALAXY",icon:"Star",image:"https://github.com/luqueSmith/MGG/blob/main/img/galactico.png?raw=true"},{id:"f",name:"Mítico",shortName:"MYTHIC",icon:"FlaskConical",image:"https://github.com/luqueSmith/MGG/blob/main/img/mitico.png?raw=true"}],ds={a:["#38bdf8","#2563eb"],b:["#a855f7","#6d28d9"],c:["#f59e0b","#d97706"],d:["#22c55e","#15803d"],e:["#06b6d4","#0f766e"],f:["#ec4899","#be185d"],n:["#64748b","#334155"]},cu=[{id:"offer_1",nombre:"54 Hornos 1M de Oro",nombreEn:"54 Furnaces 1M Gold",precio:37,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/1MdeOro.png?raw=true",descripcion:"Oferta relámpago: pack de 54 hornos con 1 millón de oro directo.",descripcionEn:"Flash offer: pack of 54 furnaces with 1 million gold direct.",features:["Entrega prioritaria","Ahorro del 20%","Soporte exclusivo"],featuresEn:["Priority delivery","20% Savings","Exclusive support"],categoria:"OFFER"},{id:"offer_2",nombre:"54 Hornos 2M de Oro",nombreEn:"54 Furnaces 2M Gold",precio:48,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/2MdeOro.png?raw=true",descripcion:"Pack industrial para jugadores de alto nivel con 2 millones de oro.",descripcionEn:"Industrial pack for high-level players with 2 million gold.",features:["Capacidad máxima","Optimización de recursos","Bonus de velocidad"],featuresEn:["Maximum capacity","Resource optimization","Speed bonus"],categoria:"OFFER"},{id:"offer_3",nombre:"54 Hornos 3M de Oro",nombreEn:"54 Furnaces 3M Gold",precio:59,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/3MdeOro.png?raw=true",descripcion:"La máxima potencia disponible en el mercado actual.",descripcionEn:"The maximum power available in the current market.",features:["Máximo beneficio","Inyección instantánea","Certificado Elite"],featuresEn:["Maximum benefit","Instant injection","Elite certificate"],categoria:"OFFER"},{id:"main_1",nombre:"Horno de Oro",nombreEn:"Gold Furnace",precio:7,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/Hornos%20de%20oro.png?raw=true",descripcion:"Aceleración masiva de producción de oro.",descripcionEn:"Massive acceleration of gold production.",features:["Entrega en menos de 10 min","Soporte 24/7","Proceso guiado"],featuresEn:["Delivery in < 10 min","24/7 Support","Guided process"],categoria:"MAIN"},{id:"main_2",nombre:"Mutante",nombreEn:"Mutant",precio:2,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/mutante.png?raw=true",descripcion:"Obtención de mutantes raros según disponibilidad.",descripcionEn:"Get rare mutants depending on availability.",features:["Selección a elegir","Stats máximos","Entrega rápida"],featuresEn:["Custom selection","Max stats","Fast delivery"],categoria:"MAIN"},{id:"main_3",nombre:"Orbes Basic 6 x 10",nombreEn:"Basic Orbs 6 x 10",precio:1,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/bsic-orb6.png?raw=true",descripcion:"Pack de orbes básicos para fortalecer a tu equipo.",descripcionEn:"Basic orb pack to strengthen your team.",features:["Stock ilimitado","Precio promocional","Ideal para nuevos"],featuresEn:["Unlimited stock","Promotional price","Ideal for beginners"],categoria:"MAIN"},{id:"main_4",nombre:"1M de Oro Directo",nombreEn:"1M Direct Gold",precio:35,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/1MOro.png?raw=true",descripcion:"Paquete de moneda premium gestionado con verificación.",descripcionEn:"Premium currency package managed with verification.",features:["Proceso guiado","Entrega coordinada","Soporte manual"],featuresEn:["Guided process","Coordinated delivery","Manual support"],categoria:"MAIN"},{id:"main_5",nombre:"ORB Nivel 7 Elite",nombreEn:"ORB Level 7 Elite",precio:6,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/obrNVL7.png?raw=true",descripcion:"Orbes de alto nivel para máximo rendimiento.",descripcionEn:"High-level orbs for maximum performance.",features:["Efectos críticos","Rareza extrema","Compatibilidad total"],featuresEn:["Critical effects","Extreme rarity","Total compatibility"],categoria:"MAIN"},{id:"main_6",nombre:"Mutante Bug Platino",nombreEn:"Platinum Bug Mutant",precio:6,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/bf8515d2-211a-411c-a1d9-da10c59ff4dd.png?raw=true",descripcion:"Mutante con estética platino y habilidades especiales.",descripcionEn:"Mutant with platinum aesthetics and special abilities.",features:["Visual único","Habilidades especiales","Edición 2026"],featuresEn:["Unique visual","Special skills","2026 Edition"],categoria:"MAIN"},{id:"main_7",nombre:"100k Tarros XP",nombreEn:"100k XP Jars",precio:15,imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRWQsH6i8OPIj8DtvkxDggsiG4FfvRNj4zkA&s",descripcion:"Nivelación rápida para tu ejército de gladiadores.",descripcionEn:"Fast leveling for your gladiator army.",features:["Sube a nivel alto","Ahorro de tiempo","Fácil aplicación"],featuresEn:["Level up high","Time saving","Easy application"],categoria:"MAIN"},{id:"main_8",nombre:"100k Fichas JackPot",nombreEn:"100k Jackpot Tokens",precio:15,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/fichasjacpot.png?raw=true",descripcion:"Pack masivo de fichas para eventos y ruletas.",descripcionEn:"Massive token pack for events and roulettes.",features:["Alta recompensa","Giro automático","Uso flexible"],featuresEn:["High reward","Auto spin","Flexible use"],categoria:"MAIN"},{id:"main_9",nombre:"Expansión Laboratorio",nombreEn:"Laboratory Expansion",precio:4,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/laboratorio.png?raw=true",descripcion:"Desbloquea slots y mejoras del laboratorio.",descripcionEn:"Unlock laboratory slots and improvements.",features:["Más slots","Mejora visual","Multi-breeding"],featuresEn:["More slots","Visual improvement","Multi-breeding"],categoria:"MAIN"},{id:"main_10",nombre:"Orbe Velocidad Nivel 5",nombreEn:"Level 5 Speed Orb",precio:2,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/orbelvl5.png?raw=true",descripcion:"Potenciador de velocidad para mejorar turnos.",descripcionEn:"Speed booster to improve turns.",features:["Primer golpe","Agilidad +50%","Recarga rápida"],featuresEn:["First strike","Agility +50%","Fast recharge"],categoria:"MAIN"},{id:"main_11",nombre:"ORB Nivel ATK 6 x 10",nombreEn:"ORB ATK Level 6 x 10",precio:6,imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkvqT-WxlpjpLTxcrwKAUQmGTTv6vtrVHxkA&s",descripcion:"Pack ofensivo para maximizar DPS, Te entrego 10 orbes del paquete.",descripcionEn:"Offensive pack to maximize DPS, I deliver 10 orbs from the package.",features:["Daño puro","Críticos frecuentes","Efecto sangrado"],featuresEn:["Pure damage","Frequent crits","Bleeding effect"],categoria:"MAIN"},{id:"main_12",nombre:"BIG BOSS",nombreEn:"BIG BOSS",precio:10,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/bigboss.png?raw=true",descripcion:"Te consigo a BigBoss en tu cuenta.",descripcionEn:"I get BigBoss in your account.",features:["Resistencia temporal","Fuerza X2","Drop mejorado"],featuresEn:["Temporary resistance","2X Strength","Improved drop"],categoria:"MAIN"},{id:"other_1",nombre:"Doxeo para +51",nombreEn:"Doxxing for +51",precio:5,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/doxeo.png?raw=true",descripcion:"Saco informacion como DNI, Arbol Familiar antencedentes y etc con el numero o nombre para Peru.",descripcionEn:"I extract information like ID, Family Tree, records, etc. with number or name for Peru.",features:["Fuentes públicas","Reporte PDF","Enfoque de privacidad"],featuresEn:["Public sources","PDF Report","Privacy focused"],categoria:"OTHER"},{id:"other_2",nombre:"Desarrollo Web Next-Gen",nombreEn:"Next-Gen Web Development",precio:40,imagen:"https://www.freecodecamp.org/news/content/images/2019/09/lua_script.jpg",descripcion:"Creación de portafolios, tiendas o landing pages y etc, solo 40 soles por una web alojada en GitHub, Si te interesa una web con dominio .com dale en ver mas..",descripcionEn:"Creation of portfolios, stores or landing pages etc, only 40 soles for a website hosted on GitHub. If you are interested in a website with a .com domain click see more..",features:["UI/UX único","Optimización SEO","Host incluido","Entrega profesional"],featuresEn:["Unique UI/UX","SEO Optimization","Host included","Professional delivery"],categoria:"OTHER",saberMas:"https://webcraft-ux.github.io/webcraft/"},{id:"other_3",nombre:"Scripts Custom MGG",nombreEn:"Custom MGG Scripts",precio:15,imagen:"https://callcenters.by/images/asterisk/lua%20plugin.jpg",descripcion:"Automatizaciones personalizadas para productividad.",descripcionEn:"Custom automations for productivity.",features:["Auto-farm","Logs de actividades","Configuración guiada","Soporte"],featuresEn:["Auto-farm","Activity logs","Guided configuration","Support"],categoria:"OTHER"},{id:"other_4",nombre:"ChatGPT Premium",nombreEn:"ChatGPT Premium",precio:8,imagen:"https://spanish.entrepreneur.com/wp-content/uploads/sites/3/2024/12/1733494589-openai-chatgpt-premium-subscription-1224-g2186754261.jpg",descripcion:"Acceso premium para chatGPT barato y con descuento por cantidad.",descripcionEn:"Premium access for cheap ChatGPT with quantity discount.",features:["Asistencia rápida","Uso personal","Configuración guiada","Soporte base"],featuresEn:["Fast assistance","Personal use","Guided configuration","Basic support"],categoria:"OTHER"}],eb={Cajas:`Box Cyber	mystery_cyber	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_cyber.png
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
Orbe Respuesta +20%	orb_basic_retaliate_06	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_retaliate_06.png`},Ff="51906328464",cd="https://chat.whatsapp.com/DALbalnNe9N6bD4W1Wp0HM?mode=gi_t",Mk=[0,50,60,65,70,75,80,85,90],Kf=[{id:"pe",name:"Perú",currency:"PEN",symbol:"S/",rate:1,exchangeRate:1,flag:"🇵🇪"},{id:"mx",name:"México",currency:"MXN",symbol:"$",rate:1,exchangeRate:5.07,flag:"🇲🇽"},{id:"es",name:"España",currency:"EUR",symbol:"€",rate:1,exchangeRate:.25,flag:"🇪🇸"},{id:"cl",name:"Chile",currency:"CLP",symbol:"$",rate:1,exchangeRate:262.23,flag:"🇨🇱"},{id:"ar",name:"Argentina",currency:"ARS",symbol:"$",rate:1,exchangeRate:408.14,flag:"🇦🇷"},{id:"ve",name:"Venezuela",currency:"VES",symbol:"Bs",rate:1,exchangeRate:150.82,flag:"🇻🇪"},{id:"co",name:"Colombia",currency:"COP",symbol:"$",rate:1,exchangeRate:1110.59,flag:"🇨🇴"},{id:"bo",name:"Bolivia",currency:"BOB",symbol:"Bs",rate:1,exchangeRate:2.02,flag:"🇧🇴"}],vk=[{name:"Western Union",logo:"https://play-lh.googleusercontent.com/2O6TfOnCMQ8aWdhcME3CwHK_od33WPBw02ZpG_lpvnwRPHfCKBlmCeaLJ_tL8oqchBg",info:"Global money transfer. Available at physical agents worldwide.",infoEs:"Envío de dinero global. Disponible en agentes físicos."},{name:"Binance",logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe9rjRtIJJM5o6xP2LqfQFFcWejwFgRA1rag&s",info:"Direct deposits via USDT (Tron Network TRC20). Fast & Secure.",infoEs:"Depósitos directos vía USDT (Red Tron TRC20)."},{name:"PayPal",logo:"https://play-lh.googleusercontent.com/iQ8f5plIFy9rrY46Q2TNRwq_8nCvh9LZVwytqMBpOEcfnIU3vTkICQ6L1-RInWS93oQg",info:"Secure international payment with card or balance.",infoEs:"Pago internacional seguro con tarjeta o saldo."},{name:"Yape",logo:"https://play-lh.googleusercontent.com/y5S3ZIz-ohg3FirlISnk3ca2yQ6cd825OpA0YK9qklc5W8MLSe0NEIEqoV-pZDvO0A8",info:"Exclusive for PERU (PEN). Immediate transfer.",infoEs:"Exclusivo para PERÚ (Soles). Transferencia inmediata."},{name:"Airtm",logo:"https://s3-eu-west-1.amazonaws.com/tpd/logos/5d6d32510d8627000132ad10/0x0.png",info:"Digital wallet recommended for Latin America.",infoEs:"Billetera digital recomendada para Latinoamérica."}],tb=["CH","LU","DK","NO","IS","US","DE","SG","IE","AU","CA","GB","ES","IT","KR","IL","CL","UY"],Ak={"4.0":["CH","LU","DK","NO","IS"],"3.0":["US","DE","SG","IE","AU","CA","GB"],"2.0":["IT","KR","IL","UY"],"1.5":["BR","FR","JP"]},Tk=`A00-C0R3-C0NTR0L aa_99
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
`,ud=B.createContext({});function dd(a){const s=B.useRef(null);return s.current===null&&(s.current=a()),s.current}const Sk=typeof window<"u",Xf=Sk?B.useLayoutEffect:B.useEffect,Er=B.createContext(null);function pd(a,s){a.indexOf(s)===-1&&a.push(s)}function kr(a,s){const o=a.indexOf(s);o>-1&&a.splice(o,1)}const nn=(a,s,o)=>o>s?s:o<a?a:o;let gd=()=>{};const Jn={},Zf=a=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a),Yf=a=>typeof a=="object"&&a!==null,Qf=a=>/^0[^.\s]+$/u.test(a);function Jf(a){let s;return()=>(s===void 0&&(s=a()),s)}const Ot=a=>a,ji=(...a)=>a.reduce((s,o)=>r=>o(s(r))),Ai=(a,s,o)=>{const r=s-a;return r?(o-a)/r:1};class md{constructor(){this.subscriptions=[]}add(s){return pd(this.subscriptions,s),()=>kr(this.subscriptions,s)}notify(s,o,r){const d=this.subscriptions.length;if(d)if(d===1)this.subscriptions[0](s,o,r);else for(let g=0;g<d;g++){const p=this.subscriptions[g];p&&p(s,o,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const jt=a=>a*1e3,zt=a=>a/1e3,Wf=(a,s)=>s?a*(1e3/s):0,$f=(a,s,o)=>(((1-3*o+3*s)*a+(3*o-6*s))*a+3*s)*a,Ik=1e-7,jk=12;function Vk(a,s,o,r,d){let g,p,b=0;do p=s+(o-s)/2,g=$f(p,r,d)-a,g>0?o=p:s=p;while(Math.abs(g)>Ik&&++b<jk);return p}function Vi(a,s,o,r){if(a===s&&o===r)return Ot;const d=g=>Vk(g,0,1,a,o);return g=>g===0||g===1?g:$f(d(g),s,r)}const e0=a=>s=>s<=.5?a(2*s)/2:(2-a(2*(1-s)))/2,t0=a=>s=>1-a(1-s),n0=Vi(.33,1.53,.69,.99),hd=t0(n0),a0=e0(hd),s0=a=>a>=1?1:(a*=2)<1?.5*hd(a):.5*(2-Math.pow(2,-10*(a-1))),bd=a=>1-Math.sin(Math.acos(a)),i0=t0(bd),o0=e0(bd),Ek=Vi(.42,0,1,1),Nk=Vi(0,0,.58,1),r0=Vi(.42,0,.58,1),Dk=a=>Array.isArray(a)&&typeof a[0]!="number",l0=a=>Array.isArray(a)&&typeof a[0]=="number",wk={linear:Ot,easeIn:Ek,easeInOut:r0,easeOut:Nk,circIn:bd,circInOut:o0,circOut:i0,backIn:hd,backInOut:a0,backOut:n0,anticipate:s0},qk=a=>typeof a=="string",nb=a=>{if(l0(a)){gd(a.length===4);const[s,o,r,d]=a;return Vi(s,o,r,d)}else if(qk(a))return wk[a];return a},$o=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function Ck(a,s){let o=new Set,r=new Set,d=!1,g=!1;const p=new WeakSet;let b={delta:0,timestamp:0,isProcessing:!1};function _(f){p.has(f)&&(h.schedule(f),a()),f(b)}const h={schedule:(f,k=!1,G=!1)=>{const v=G&&d?o:r;return k&&p.add(f),v.add(f),f},cancel:f=>{r.delete(f),p.delete(f)},process:f=>{if(b=f,d){g=!0;return}d=!0;const k=o;o=r,r=k,o.forEach(_),o.clear(),d=!1,g&&(g=!1,h.process(f))}};return h}const Rk=40;function c0(a,s){let o=!1,r=!0;const d={delta:0,timestamp:0,isProcessing:!1},g=()=>o=!0,p=$o.reduce((H,V)=>(H[V]=Ck(g),H),{}),{setup:b,read:_,resolveKeyframes:h,preUpdate:f,update:k,preRender:G,render:y,postRender:v}=p,I=()=>{const H=Jn.useManualTiming,V=H?d.timestamp:performance.now();o=!1,H||(d.delta=r?1e3/60:Math.max(Math.min(V-d.timestamp,Rk),1)),d.timestamp=V,d.isProcessing=!0,b.process(d),_.process(d),h.process(d),f.process(d),k.process(d),G.process(d),y.process(d),v.process(d),d.isProcessing=!1,o&&s&&(r=!1,a(I))},S=()=>{o=!0,r=!0,d.isProcessing||a(I)};return{schedule:$o.reduce((H,V)=>{const Y=p[V];return H[V]=(z,U=!1,q=!1)=>(o||S(),Y.schedule(z,U,q)),H},{}),cancel:H=>{for(let V=0;V<$o.length;V++)p[$o[V]].cancel(H)},state:d,steps:p}}const{schedule:Ee,cancel:Wn,state:st,steps:uu}=c0(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ot,!0);let cr;function Hk(){cr=void 0}const ct={now:()=>(cr===void 0&&ct.set(st.isProcessing||Jn.useManualTiming?st.timestamp:performance.now()),cr),set:a=>{cr=a,queueMicrotask(Hk)}},u0=a=>s=>typeof s=="string"&&s.startsWith(a),d0=u0("--"),Lk=u0("var(--"),fd=a=>Lk(a)?zk.test(a.split("/*")[0].trim()):!1,zk=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function ab(a){return typeof a!="string"?!1:a.split("/*")[0].includes("var(--")}const _s={test:a=>typeof a=="number",parse:parseFloat,transform:a=>a},Ti={..._s,transform:a=>nn(0,1,a)},er={..._s,default:1},ki=a=>Math.round(a*1e5)/1e5,_d=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Ok(a){return a==null}const Bk=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,xd=(a,s)=>o=>!!(typeof o=="string"&&Bk.test(o)&&o.startsWith(a)||s&&!Ok(o)&&Object.prototype.hasOwnProperty.call(o,s)),p0=(a,s,o)=>r=>{if(typeof r!="string")return r;const[d,g,p,b]=r.match(_d);return{[a]:parseFloat(d),[s]:parseFloat(g),[o]:parseFloat(p),alpha:b!==void 0?parseFloat(b):1}},Uk=a=>nn(0,255,a),du={..._s,transform:a=>Math.round(Uk(a))},ya={test:xd("rgb","red"),parse:p0("red","green","blue"),transform:({red:a,green:s,blue:o,alpha:r=1})=>"rgba("+du.transform(a)+", "+du.transform(s)+", "+du.transform(o)+", "+ki(Ti.transform(r))+")"};function Pk(a){let s="",o="",r="",d="";return a.length>5?(s=a.substring(1,3),o=a.substring(3,5),r=a.substring(5,7),d=a.substring(7,9)):(s=a.substring(1,2),o=a.substring(2,3),r=a.substring(3,4),d=a.substring(4,5),s+=s,o+=o,r+=r,d+=d),{red:parseInt(s,16),green:parseInt(o,16),blue:parseInt(r,16),alpha:d?parseInt(d,16)/255:1}}const Ru={test:xd("#"),parse:Pk,transform:ya.transform},Ei=a=>({test:s=>typeof s=="string"&&s.endsWith(a)&&s.split(" ").length===1,parse:parseFloat,transform:s=>`${s}${a}`}),yn=Ei("deg"),tn=Ei("%"),ee=Ei("px"),Fk=Ei("vh"),Kk=Ei("vw"),sb={...tn,parse:a=>tn.parse(a)/100,transform:a=>tn.transform(a*100)},gs={test:xd("hsl","hue"),parse:p0("hue","saturation","lightness"),transform:({hue:a,saturation:s,lightness:o,alpha:r=1})=>"hsla("+Math.round(a)+", "+tn.transform(ki(s))+", "+tn.transform(ki(o))+", "+ki(Ti.transform(r))+")"},Ze={test:a=>ya.test(a)||Ru.test(a)||gs.test(a),parse:a=>ya.test(a)?ya.parse(a):gs.test(a)?gs.parse(a):Ru.parse(a),transform:a=>typeof a=="string"?a:a.hasOwnProperty("red")?ya.transform(a):gs.transform(a),getAnimatableNone:a=>{const s=Ze.parse(a);return s.alpha=0,Ze.transform(s)}},Xk=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Zk(a){var s,o;return isNaN(a)&&typeof a=="string"&&(((s=a.match(_d))==null?void 0:s.length)||0)+(((o=a.match(Xk))==null?void 0:o.length)||0)>0}const g0="number",m0="color",Yk="var",Qk="var(",ib="${}",Jk=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function bs(a){const s=a.toString(),o=[],r={color:[],number:[],var:[]},d=[];let g=0;const b=s.replace(Jk,_=>(Ze.test(_)?(r.color.push(g),d.push(m0),o.push(Ze.parse(_))):_.startsWith(Qk)?(r.var.push(g),d.push(Yk),o.push(_)):(r.number.push(g),d.push(g0),o.push(parseFloat(_))),++g,ib)).split(ib);return{values:o,split:b,indexes:r,types:d}}function Wk(a){return bs(a).values}function h0({split:a,types:s}){const o=a.length;return r=>{let d="";for(let g=0;g<o;g++)if(d+=a[g],r[g]!==void 0){const p=s[g];p===g0?d+=ki(r[g]):p===m0?d+=Ze.transform(r[g]):d+=r[g]}return d}}function $k(a){return h0(bs(a))}const eG=a=>typeof a=="number"?0:Ze.test(a)?Ze.getAnimatableNone(a):a,tG=(a,s)=>typeof a=="number"?s!=null&&s.trim().endsWith("/")?a:0:eG(a);function nG(a){const s=bs(a);return h0(s)(s.values.map((r,d)=>tG(r,s.split[d])))}const Xt={test:Zk,parse:Wk,createTransformer:$k,getAnimatableNone:nG};function pu(a,s,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?a+(s-a)*6*o:o<1/2?s:o<2/3?a+(s-a)*(2/3-o)*6:a}function aG({hue:a,saturation:s,lightness:o,alpha:r}){a/=360,s/=100,o/=100;let d=0,g=0,p=0;if(!s)d=g=p=o;else{const b=o<.5?o*(1+s):o+s-o*s,_=2*o-b;d=pu(_,b,a+1/3),g=pu(_,b,a),p=pu(_,b,a-1/3)}return{red:Math.round(d*255),green:Math.round(g*255),blue:Math.round(p*255),alpha:r}}function Gr(a,s){return o=>o>0?s:a}const Ve=(a,s,o)=>a+(s-a)*o,gu=(a,s,o)=>{const r=a*a,d=o*(s*s-r)+r;return d<0?0:Math.sqrt(d)},sG=[Ru,ya,gs],iG=a=>sG.find(s=>s.test(a));function ob(a){const s=iG(a);if(!s)return!1;let o=s.parse(a);return s===gs&&(o=aG(o)),o}const rb=(a,s)=>{const o=ob(a),r=ob(s);if(!o||!r)return Gr(a,s);const d={...o};return g=>(d.red=gu(o.red,r.red,g),d.green=gu(o.green,r.green,g),d.blue=gu(o.blue,r.blue,g),d.alpha=Ve(o.alpha,r.alpha,g),ya.transform(d))},Hu=new Set(["none","hidden"]);function oG(a,s){return Hu.has(a)?o=>o<=0?a:s:o=>o>=1?s:a}function rG(a,s){return o=>Ve(a,s,o)}function kd(a){return typeof a=="number"?rG:typeof a=="string"?fd(a)?Gr:Ze.test(a)?rb:uG:Array.isArray(a)?b0:typeof a=="object"?Ze.test(a)?rb:lG:Gr}function b0(a,s){const o=[...a],r=o.length,d=a.map((g,p)=>kd(g)(g,s[p]));return g=>{for(let p=0;p<r;p++)o[p]=d[p](g);return o}}function lG(a,s){const o={...a,...s},r={};for(const d in o)a[d]!==void 0&&s[d]!==void 0&&(r[d]=kd(a[d])(a[d],s[d]));return d=>{for(const g in r)o[g]=r[g](d);return o}}function cG(a,s){const o=[],r={color:0,var:0,number:0};for(let d=0;d<s.values.length;d++){const g=s.types[d],p=a.indexes[g][r[g]],b=a.values[p]??0;o[d]=b,r[g]++}return o}const uG=(a,s)=>{const o=Xt.createTransformer(s),r=bs(a),d=bs(s);return r.indexes.var.length===d.indexes.var.length&&r.indexes.color.length===d.indexes.color.length&&r.indexes.number.length>=d.indexes.number.length?Hu.has(a)&&!d.values.length||Hu.has(s)&&!r.values.length?oG(a,s):ji(b0(cG(r,d),d.values),o):Gr(a,s)};function f0(a,s,o){return typeof a=="number"&&typeof s=="number"&&typeof o=="number"?Ve(a,s,o):kd(a)(a,s)}const dG=a=>{const s=({timestamp:o})=>a(o);return{start:(o=!0)=>Ee.update(s,o),stop:()=>Wn(s),now:()=>st.isProcessing?st.timestamp:ct.now()}},_0=(a,s,o=10)=>{let r="";const d=Math.max(Math.round(s/o),2);for(let g=0;g<d;g++)r+=Math.round(a(g/(d-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},yr=2e4;function Gd(a){let s=0;const o=50;let r=a.next(s);for(;!r.done&&s<yr;)s+=o,r=a.next(s);return s>=yr?1/0:s}function pG(a,s=100,o){const r=o({...a,keyframes:[0,s]}),d=Math.min(Gd(r),yr);return{type:"keyframes",ease:g=>r.next(d*g).value/s,duration:zt(d)}}const ze={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Lu(a,s){return a*Math.sqrt(1-s*s)}const gG=12;function mG(a,s,o){let r=o;for(let d=1;d<gG;d++)r=r-a(r)/s(r);return r}const mu=.001;function hG({duration:a=ze.duration,bounce:s=ze.bounce,velocity:o=ze.velocity,mass:r=ze.mass}){let d,g,p=1-s;p=nn(ze.minDamping,ze.maxDamping,p),a=nn(ze.minDuration,ze.maxDuration,zt(a)),p<1?(d=h=>{const f=h*p,k=f*a,G=f-o,y=Lu(h,p),v=Math.exp(-k);return mu-G/y*v},g=h=>{const k=h*p*a,G=k*o+o,y=Math.pow(p,2)*Math.pow(h,2)*a,v=Math.exp(-k),I=Lu(Math.pow(h,2),p);return(-d(h)+mu>0?-1:1)*((G-y)*v)/I}):(d=h=>{const f=Math.exp(-h*a),k=(h-o)*a+1;return-mu+f*k},g=h=>{const f=Math.exp(-h*a),k=(o-h)*(a*a);return f*k});const b=5/a,_=mG(d,g,b);if(a=jt(a),isNaN(_))return{stiffness:ze.stiffness,damping:ze.damping,duration:a};{const h=Math.pow(_,2)*r;return{stiffness:h,damping:p*2*Math.sqrt(r*h),duration:a}}}const bG=["duration","bounce"],fG=["stiffness","damping","mass"];function lb(a,s){return s.some(o=>a[o]!==void 0)}function _G(a){let s={velocity:ze.velocity,stiffness:ze.stiffness,damping:ze.damping,mass:ze.mass,isResolvedFromDuration:!1,...a};if(!lb(a,fG)&&lb(a,bG))if(s.velocity=0,a.visualDuration){const o=a.visualDuration,r=2*Math.PI/(o*1.2),d=r*r,g=2*nn(.05,1,1-(a.bounce||0))*Math.sqrt(d);s={...s,mass:ze.mass,stiffness:d,damping:g}}else{const o=hG({...a,velocity:0});s={...s,...o,mass:ze.mass},s.isResolvedFromDuration=!0}return s}function Mr(a=ze.visualDuration,s=ze.bounce){const o=typeof a!="object"?{visualDuration:a,keyframes:[0,1],bounce:s}:a;let{restSpeed:r,restDelta:d}=o;const g=o.keyframes[0],p=o.keyframes[o.keyframes.length-1],b={done:!1,value:g},{stiffness:_,damping:h,mass:f,duration:k,velocity:G,isResolvedFromDuration:y}=_G({...o,velocity:-zt(o.velocity||0)}),v=G||0,I=h/(2*Math.sqrt(_*f)),S=p-g,w=zt(Math.sqrt(_/f)),X=Math.abs(S)<5;r||(r=X?ze.restSpeed.granular:ze.restSpeed.default),d||(d=X?ze.restDelta.granular:ze.restDelta.default);let H,V,Y,z,U,q;if(I<1)Y=Lu(w,I),z=(v+I*w*S)/Y,H=K=>{const te=Math.exp(-I*w*K);return p-te*(z*Math.sin(Y*K)+S*Math.cos(Y*K))},U=I*w*z+S*Y,q=I*w*S-z*Y,V=K=>Math.exp(-I*w*K)*(U*Math.sin(Y*K)+q*Math.cos(Y*K));else if(I===1){H=te=>p-Math.exp(-w*te)*(S+(v+w*S)*te);const K=v+w*S;V=te=>Math.exp(-w*te)*(w*K*te-v)}else{const K=w*Math.sqrt(I*I-1);H=Ce=>{const we=Math.exp(-I*w*Ce),R=Math.min(K*Ce,300);return p-we*((v+I*w*S)*Math.sinh(R)+K*S*Math.cosh(R))/K};const te=(v+I*w*S)/K,le=I*w*te-S*K,Re=I*w*S-te*K;V=Ce=>{const we=Math.exp(-I*w*Ce),R=Math.min(K*Ce,300);return we*(le*Math.sinh(R)+Re*Math.cosh(R))}}const Z={calculatedDuration:y&&k||null,velocity:K=>jt(V(K)),next:K=>{if(!y&&I<1){const le=Math.exp(-I*w*K),Re=Math.sin(Y*K),Ce=Math.cos(Y*K),we=p-le*(z*Re+S*Ce),R=jt(le*(U*Re+q*Ce));return b.done=Math.abs(R)<=r&&Math.abs(p-we)<=d,b.value=b.done?p:we,b}const te=H(K);if(y)b.done=K>=k;else{const le=jt(V(K));b.done=Math.abs(le)<=r&&Math.abs(p-te)<=d}return b.value=b.done?p:te,b},toString:()=>{const K=Math.min(Gd(Z),yr),te=_0(le=>Z.next(K*le).value,K,30);return K+"ms "+te},toTransition:()=>{}};return Z}Mr.applyToOptions=a=>{const s=pG(a,100,Mr);return a.ease=s.ease,a.duration=jt(s.duration),a.type="keyframes",a};const xG=5;function x0(a,s,o){const r=Math.max(s-xG,0);return Wf(o-a(r),s-r)}function zu({keyframes:a,velocity:s=0,power:o=.8,timeConstant:r=325,bounceDamping:d=10,bounceStiffness:g=500,modifyTarget:p,min:b,max:_,restDelta:h=.5,restSpeed:f}){const k=a[0],G={done:!1,value:k},y=q=>b!==void 0&&q<b||_!==void 0&&q>_,v=q=>b===void 0?_:_===void 0||Math.abs(b-q)<Math.abs(_-q)?b:_;let I=o*s;const S=k+I,w=p===void 0?S:p(S);w!==S&&(I=w-k);const X=q=>-I*Math.exp(-q/r),H=q=>w+X(q),V=q=>{const Z=X(q),K=H(q);G.done=Math.abs(Z)<=h,G.value=G.done?w:K};let Y,z;const U=q=>{y(G.value)&&(Y=q,z=Mr({keyframes:[G.value,v(G.value)],velocity:x0(H,q,G.value),damping:d,stiffness:g,restDelta:h,restSpeed:f}))};return U(0),{calculatedDuration:null,next:q=>{let Z=!1;return!z&&Y===void 0&&(Z=!0,V(q),U(q)),Y!==void 0&&q>=Y?z.next(q-Y):(!Z&&V(q),G)}}}function kG(a,s,o){const r=[],d=o||Jn.mix||f0,g=a.length-1;for(let p=0;p<g;p++){let b=d(a[p],a[p+1]);if(s){const _=Array.isArray(s)?s[p]||Ot:s;b=ji(_,b)}r.push(b)}return r}function GG(a,s,{clamp:o=!0,ease:r,mixer:d}={}){const g=a.length;if(gd(g===s.length),g===1)return()=>s[0];if(g===2&&s[0]===s[1])return()=>s[1];const p=a[0]===a[1];a[0]>a[g-1]&&(a=[...a].reverse(),s=[...s].reverse());const b=kG(s,r,d),_=b.length,h=f=>{if(p&&f<a[0])return s[0];let k=0;if(_>1)for(;k<a.length-2&&!(f<a[k+1]);k++);const G=Ai(a[k],a[k+1],f);return b[k](G)};return o?f=>h(nn(a[0],a[g-1],f)):h}function yG(a,s){const o=a[a.length-1];for(let r=1;r<=s;r++){const d=Ai(0,s,r);a.push(Ve(o,1,d))}}function MG(a){const s=[0];return yG(s,a.length-1),s}function vG(a,s){return a.map(o=>o*s)}function AG(a,s){return a.map(()=>s||r0).splice(0,a.length-1)}function Gi({duration:a=300,keyframes:s,times:o,ease:r="easeInOut"}){const d=Dk(r)?r.map(nb):nb(r),g={done:!1,value:s[0]},p=vG(o&&o.length===s.length?o:MG(s),a),b=GG(p,s,{ease:Array.isArray(d)?d:AG(s,d)});return{calculatedDuration:a,next:_=>(g.value=b(_),g.done=_>=a,g)}}const TG=a=>a!==null;function Nr(a,{repeat:s,repeatType:o="loop"},r,d=1){const g=a.filter(TG),b=d<0||s&&o!=="loop"&&s%2===1?0:g.length-1;return!b||r===void 0?g[b]:r}const SG={decay:zu,inertia:zu,tween:Gi,keyframes:Gi,spring:Mr};function k0(a){typeof a.type=="string"&&(a.type=SG[a.type])}class yd{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(s=>{this.resolve=s})}notifyFinished(){this.resolve()}then(s,o){return this.finished.then(s,o)}}const IG=a=>a/100;class vr extends yd{constructor(s){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var r,d;const{motionValue:o}=this.options;o&&o.updatedAt!==ct.now()&&this.tick(ct.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(d=(r=this.options).onStop)==null||d.call(r))},this.options=s,this.initAnimation(),this.play(),s.autoplay===!1&&this.pause()}initAnimation(){const{options:s}=this;k0(s);const{type:o=Gi,repeat:r=0,repeatDelay:d=0,repeatType:g,velocity:p=0}=s;let{keyframes:b}=s;const _=o||Gi;_!==Gi&&typeof b[0]!="number"&&(this.mixKeyframes=ji(IG,f0(b[0],b[1])),b=[0,100]);const h=_({...s,keyframes:b});g==="mirror"&&(this.mirroredGenerator=_({...s,keyframes:[...b].reverse(),velocity:-p})),h.calculatedDuration===null&&(h.calculatedDuration=Gd(h));const{calculatedDuration:f}=h;this.calculatedDuration=f,this.resolvedDuration=f+d,this.totalDuration=this.resolvedDuration*(r+1)-d,this.generator=h}updateTime(s){const o=Math.round(s-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=o}tick(s,o=!1){const{generator:r,totalDuration:d,mixKeyframes:g,mirroredGenerator:p,resolvedDuration:b,calculatedDuration:_}=this;if(this.startTime===null)return r.next(0);const{delay:h=0,keyframes:f,repeat:k,repeatType:G,repeatDelay:y,type:v,onUpdate:I,finalKeyframe:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,s):this.speed<0&&(this.startTime=Math.min(s-d/this.speed,this.startTime)),o?this.currentTime=s:this.updateTime(s);const w=this.currentTime-h*(this.playbackSpeed>=0?1:-1),X=this.playbackSpeed>=0?w<0:w>d;this.currentTime=Math.max(w,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let H=this.currentTime,V=r;if(k){const q=Math.min(this.currentTime,d)/b;let Z=Math.floor(q),K=q%1;!K&&q>=1&&(K=1),K===1&&Z--,Z=Math.min(Z,k+1),!!(Z%2)&&(G==="reverse"?(K=1-K,y&&(K-=y/b)):G==="mirror"&&(V=p)),H=nn(0,1,K)*b}let Y;X?(this.delayState.value=f[0],Y=this.delayState):Y=V.next(H),g&&!X&&(Y.value=g(Y.value));let{done:z}=Y;!X&&_!==null&&(z=this.playbackSpeed>=0?this.currentTime>=d:this.currentTime<=0);const U=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&z);return U&&v!==zu&&(Y.value=Nr(f,this.options,S,this.speed)),I&&I(Y.value),U&&this.finish(),Y}then(s,o){return this.finished.then(s,o)}get duration(){return zt(this.calculatedDuration)}get iterationDuration(){const{delay:s=0}=this.options||{};return this.duration+zt(s)}get time(){return zt(this.currentTime)}set time(s){s=jt(s),this.currentTime=s,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=s:this.driver&&(this.startTime=this.driver.now()-s/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=s,this.tick(s))}getGeneratorVelocity(){const s=this.currentTime;if(s<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(s);const o=this.generator.next(s).value;return x0(r=>this.generator.next(r).value,s,o)}get speed(){return this.playbackSpeed}set speed(s){const o=this.playbackSpeed!==s;o&&this.driver&&this.updateTime(ct.now()),this.playbackSpeed=s,o&&this.driver&&(this.time=zt(this.currentTime))}play(){var d,g;if(this.isStopped)return;const{driver:s=dG,startTime:o}=this.options;this.driver||(this.driver=s(p=>this.tick(p))),(g=(d=this.options).onPlay)==null||g.call(d);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=o??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ct.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var s,o;this.notifyFinished(),this.teardown(),this.state="finished",(o=(s=this.options).onComplete)==null||o.call(s)}cancel(){var s,o;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(o=(s=this.options).onCancel)==null||o.call(s)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(s){return this.startTime=0,this.tick(s,!0)}attachTimeline(s){var o;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(o=this.driver)==null||o.stop(),s.observe(this)}}function jG(a){for(let s=1;s<a.length;s++)a[s]??(a[s]=a[s-1])}const Ma=a=>a*180/Math.PI,Ou=a=>{const s=Ma(Math.atan2(a[1],a[0]));return Bu(s)},VG={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:a=>(Math.abs(a[0])+Math.abs(a[3]))/2,rotate:Ou,rotateZ:Ou,skewX:a=>Ma(Math.atan(a[1])),skewY:a=>Ma(Math.atan(a[2])),skew:a=>(Math.abs(a[1])+Math.abs(a[2]))/2},Bu=a=>(a=a%360,a<0&&(a+=360),a),cb=Ou,ub=a=>Math.sqrt(a[0]*a[0]+a[1]*a[1]),db=a=>Math.sqrt(a[4]*a[4]+a[5]*a[5]),EG={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:ub,scaleY:db,scale:a=>(ub(a)+db(a))/2,rotateX:a=>Bu(Ma(Math.atan2(a[6],a[5]))),rotateY:a=>Bu(Ma(Math.atan2(-a[2],a[0]))),rotateZ:cb,rotate:cb,skewX:a=>Ma(Math.atan(a[4])),skewY:a=>Ma(Math.atan(a[1])),skew:a=>(Math.abs(a[1])+Math.abs(a[4]))/2};function Uu(a){return a.includes("scale")?1:0}function Pu(a,s){if(!a||a==="none")return Uu(s);const o=a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,d;if(o)r=EG,d=o;else{const b=a.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=VG,d=b}if(!d)return Uu(s);const g=r[s],p=d[1].split(",").map(DG);return typeof g=="function"?g(p):p[g]}const NG=(a,s)=>{const{transform:o="none"}=getComputedStyle(a);return Pu(o,s)};function DG(a){return parseFloat(a.trim())}const xs=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ks=new Set([...xs,"pathRotation"]),pb=a=>a===_s||a===ee,wG=new Set(["x","y","z"]),qG=xs.filter(a=>!wG.has(a));function CG(a){const s=[];return qG.forEach(o=>{const r=a.getValue(o);r!==void 0&&(s.push([o,r.get()]),r.set(o.startsWith("scale")?1:0))}),s}const Qn={width:({x:a},{paddingLeft:s="0",paddingRight:o="0",boxSizing:r})=>{const d=a.max-a.min;return r==="border-box"?d:d-parseFloat(s)-parseFloat(o)},height:({y:a},{paddingTop:s="0",paddingBottom:o="0",boxSizing:r})=>{const d=a.max-a.min;return r==="border-box"?d:d-parseFloat(s)-parseFloat(o)},top:(a,{top:s})=>parseFloat(s),left:(a,{left:s})=>parseFloat(s),bottom:({y:a},{top:s})=>parseFloat(s)+(a.max-a.min),right:({x:a},{left:s})=>parseFloat(s)+(a.max-a.min),x:(a,{transform:s})=>Pu(s,"x"),y:(a,{transform:s})=>Pu(s,"y")};Qn.translateX=Qn.x;Qn.translateY=Qn.y;const va=new Set;let Fu=!1,Ku=!1,Xu=!1;function G0(){if(Ku){const a=Array.from(va).filter(r=>r.needsMeasurement),s=new Set(a.map(r=>r.element)),o=new Map;s.forEach(r=>{const d=CG(r);d.length&&(o.set(r,d),r.render())}),a.forEach(r=>r.measureInitialState()),s.forEach(r=>{r.render();const d=o.get(r);d&&d.forEach(([g,p])=>{var b;(b=r.getValue(g))==null||b.set(p)})}),a.forEach(r=>r.measureEndState()),a.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Ku=!1,Fu=!1,va.forEach(a=>a.complete(Xu)),va.clear()}function y0(){va.forEach(a=>{a.readKeyframes(),a.needsMeasurement&&(Ku=!0)})}function RG(){Xu=!0,y0(),G0(),Xu=!1}class Md{constructor(s,o,r,d,g,p=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...s],this.onComplete=o,this.name=r,this.motionValue=d,this.element=g,this.isAsync=p}scheduleResolve(){this.state="scheduled",this.isAsync?(va.add(this),Fu||(Fu=!0,Ee.read(y0),Ee.resolveKeyframes(G0))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:s,name:o,element:r,motionValue:d}=this;if(s[0]===null){const g=d==null?void 0:d.get(),p=s[s.length-1];if(g!==void 0)s[0]=g;else if(r&&o){const b=r.readValue(o,p);b!=null&&(s[0]=b)}s[0]===void 0&&(s[0]=p),d&&g===void 0&&d.set(s[0])}jG(s)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(s=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,s),va.delete(this)}cancel(){this.state==="scheduled"&&(va.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const HG=a=>a.startsWith("--");function M0(a,s,o){HG(s)?a.style.setProperty(s,o):a.style[s]=o}const LG={};function v0(a,s){const o=Jf(a);return()=>LG[s]??o()}const zG=v0(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),A0=v0(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),_i=([a,s,o,r])=>`cubic-bezier(${a}, ${s}, ${o}, ${r})`,gb={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:_i([0,.65,.55,1]),circOut:_i([.55,0,1,.45]),backIn:_i([.31,.01,.66,-.59]),backOut:_i([.33,1.53,.69,.99])};function T0(a,s){if(a)return typeof a=="function"?A0()?_0(a,s):"ease-out":l0(a)?_i(a):Array.isArray(a)?a.map(o=>T0(o,s)||gb.easeOut):gb[a]}function OG(a,s,o,{delay:r=0,duration:d=300,repeat:g=0,repeatType:p="loop",ease:b="easeOut",times:_}={},h=void 0){const f={[s]:o};_&&(f.offset=_);const k=T0(b,d);Array.isArray(k)&&(f.easing=k);const G={delay:r,duration:d,easing:Array.isArray(k)?"linear":k,fill:"both",iterations:g+1,direction:p==="reverse"?"alternate":"normal"};return h&&(G.pseudoElement=h),a.animate(f,G)}function S0(a){return typeof a=="function"&&"applyToOptions"in a}function BG({type:a,...s}){return S0(a)&&A0()?a.applyToOptions(s):(s.duration??(s.duration=300),s.ease??(s.ease="easeOut"),s)}class I0 extends yd{constructor(s){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!s)return;const{element:o,name:r,keyframes:d,pseudoElement:g,allowFlatten:p=!1,finalKeyframe:b,onComplete:_}=s;this.isPseudoElement=!!g,this.allowFlatten=p,this.options=s,gd(typeof s.type!="string");const h=BG(s);this.animation=OG(o,r,d,h,g),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!g){const f=Nr(d,this.options,b,this.speed);this.updateMotionValue&&this.updateMotionValue(f),M0(o,r,f),this.animation.cancel()}_==null||_(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var s,o;(o=(s=this.animation).finish)==null||o.call(s)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:s}=this;s==="idle"||s==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var o,r,d;const s=(o=this.options)==null?void 0:o.element;!this.isPseudoElement&&(s!=null&&s.isConnected)&&((d=(r=this.animation).commitStyles)==null||d.call(r))}get duration(){var o,r;const s=((r=(o=this.animation.effect)==null?void 0:o.getComputedTiming)==null?void 0:r.call(o).duration)||0;return zt(Number(s))}get iterationDuration(){const{delay:s=0}=this.options||{};return this.duration+zt(s)}get time(){return zt(Number(this.animation.currentTime)||0)}set time(s){const o=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=jt(s),o&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(s){s<0&&(this.finishedTime=null),this.animation.playbackRate=s}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(s){this.manualStartTime=this.animation.startTime=s}attachTimeline({timeline:s,rangeStart:o,rangeEnd:r,observe:d}){var g;return this.allowFlatten&&((g=this.animation.effect)==null||g.updateTiming({easing:"linear"})),this.animation.onfinish=null,s&&zG()?(this.animation.timeline=s,o&&(this.animation.rangeStart=o),r&&(this.animation.rangeEnd=r),Ot):d(this)}}const j0={anticipate:s0,backInOut:a0,circInOut:o0};function UG(a){return a in j0}function PG(a){typeof a.ease=="string"&&UG(a.ease)&&(a.ease=j0[a.ease])}const hu=10;class FG extends I0{constructor(s){PG(s),k0(s),super(s),s.startTime!==void 0&&s.autoplay!==!1&&(this.startTime=s.startTime),this.options=s}updateMotionValue(s){const{motionValue:o,onUpdate:r,onComplete:d,element:g,...p}=this.options;if(!o)return;if(s!==void 0){o.set(s);return}const b=new vr({...p,autoplay:!1}),_=Math.max(hu,ct.now()-this.startTime),h=nn(0,hu,_-hu),f=b.sample(_).value,{name:k}=this.options;g&&k&&M0(g,k,f),o.setWithVelocity(b.sample(Math.max(0,_-h)).value,f,h),b.stop()}}const mb=(a,s)=>s==="zIndex"?!1:!!(typeof a=="number"||Array.isArray(a)||typeof a=="string"&&(Xt.test(a)||a==="0")&&!a.startsWith("url("));function KG(a){const s=a[0];if(a.length===1)return!0;for(let o=0;o<a.length;o++)if(a[o]!==s)return!0}function XG(a,s,o,r){const d=a[0];if(d===null)return!1;if(s==="display"||s==="visibility")return!0;const g=a[a.length-1],p=mb(d,s),b=mb(g,s);return!p||!b?!1:KG(a)||(o==="spring"||S0(o))&&r}function Zu(a){a.duration=0,a.type="keyframes"}const V0=new Set(["opacity","clipPath","filter","transform"]),ZG=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function YG(a){for(let s=0;s<a.length;s++)if(typeof a[s]=="string"&&ZG.test(a[s]))return!0;return!1}const QG=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),JG=Jf(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function WG(a){var k;const{motionValue:s,name:o,repeatDelay:r,repeatType:d,damping:g,type:p,keyframes:b}=a;if(!(((k=s==null?void 0:s.owner)==null?void 0:k.current)instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:f}=s.owner.getProps();return JG()&&o&&(V0.has(o)||QG.has(o)&&YG(b))&&(o!=="transform"||!f)&&!h&&!r&&d!=="mirror"&&g!==0&&p!=="inertia"}const $G=40;class ey extends yd{constructor({autoplay:s=!0,delay:o=0,type:r="keyframes",repeat:d=0,repeatDelay:g=0,repeatType:p="loop",keyframes:b,name:_,motionValue:h,element:f,...k}){var v;super(),this.stop=()=>{var I,S;this._animation&&(this._animation.stop(),(I=this.stopTimeline)==null||I.call(this)),(S=this.keyframeResolver)==null||S.cancel()},this.createdAt=ct.now();const G={autoplay:s,delay:o,type:r,repeat:d,repeatDelay:g,repeatType:p,name:_,motionValue:h,element:f,...k},y=(f==null?void 0:f.KeyframeResolver)||Md;this.keyframeResolver=new y(b,(I,S,w)=>this.onKeyframesResolved(I,S,G,!w),_,h,f),(v=this.keyframeResolver)==null||v.scheduleResolve()}onKeyframesResolved(s,o,r,d){var w,X;this.keyframeResolver=void 0;const{name:g,type:p,velocity:b,delay:_,isHandoff:h,onUpdate:f}=r;this.resolvedAt=ct.now();let k=!0;XG(s,g,p,b)||(k=!1,(Jn.instantAnimations||!_)&&(f==null||f(Nr(s,r,o))),s[0]=s[s.length-1],Zu(r),r.repeat=0);const y={startTime:d?this.resolvedAt?this.resolvedAt-this.createdAt>$G?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:o,...r,keyframes:s},v=k&&!h&&WG(y),I=(X=(w=y.motionValue)==null?void 0:w.owner)==null?void 0:X.current;let S;if(v)try{S=new FG({...y,element:I})}catch{S=new vr(y)}else S=new vr(y);S.finished.then(()=>{this.notifyFinished()}).catch(Ot),this.pendingTimeline&&(this.stopTimeline=S.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=S}get finished(){return this._animation?this.animation.finished:this._finished}then(s,o){return this.finished.finally(s).then(()=>{})}get animation(){var s;return this._animation||((s=this.keyframeResolver)==null||s.resume(),RG()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(s){this.animation.time=s}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(s){this.animation.speed=s}get startTime(){return this.animation.startTime}attachTimeline(s){return this._animation?this.stopTimeline=this.animation.attachTimeline(s):this.pendingTimeline=s,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var s;this._animation&&this.animation.cancel(),(s=this.keyframeResolver)==null||s.cancel()}}function E0(a,s,o,r=0,d=1){const g=Array.from(a).sort((h,f)=>h.sortNodePosition(f)).indexOf(s),p=a.size,b=(p-1)*r;return typeof o=="function"?o(g,p):d===1?g*r:b-g*r}const hb=30,ty=a=>!isNaN(parseFloat(a));class ny{constructor(s,o={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var g;const d=ct.now();if(this.updatedAt!==d&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((g=this.events.change)==null||g.notify(this.current),this.dependents))for(const p of this.dependents)p.dirty()},this.hasAnimated=!1,this.setCurrent(s),this.owner=o.owner}setCurrent(s){this.current=s,this.updatedAt=ct.now(),this.canTrackVelocity===null&&s!==void 0&&(this.canTrackVelocity=ty(this.current))}setPrevFrameValue(s=this.current){this.prevFrameValue=s,this.prevUpdatedAt=this.updatedAt}onChange(s){return this.on("change",s)}on(s,o){this.events[s]||(this.events[s]=new md);const r=this.events[s].add(o);return s==="change"?()=>{r(),Ee.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const s in this.events)this.events[s].clear()}attach(s,o){this.passiveEffect=s,this.stopPassiveEffect=o}set(s){this.passiveEffect?this.passiveEffect(s,this.updateAndNotify):this.updateAndNotify(s)}setWithVelocity(s,o,r){this.set(o),this.prev=void 0,this.prevFrameValue=s,this.prevUpdatedAt=this.updatedAt-r}jump(s,o=!0){this.updateAndNotify(s),this.prev=s,this.prevUpdatedAt=this.prevFrameValue=void 0,o&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var s;(s=this.events.change)==null||s.notify(this.current)}addDependent(s){this.dependents||(this.dependents=new Set),this.dependents.add(s)}removeDependent(s){this.dependents&&this.dependents.delete(s)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const s=ct.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||s-this.updatedAt>hb)return 0;const o=Math.min(this.updatedAt-this.prevUpdatedAt,hb);return Wf(parseFloat(this.current)-parseFloat(this.prevFrameValue),o)}start(s){return this.stop(),new Promise(o=>{this.hasAnimated=!0,this.animation=s(o),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var s,o;(s=this.dependents)==null||s.clear(),(o=this.events.destroy)==null||o.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function fs(a,s){return new ny(a,s)}function N0(a,s){if(a!=null&&a.inherit&&s){const{inherit:o,...r}=a;return{...s,...r}}return a}function vd(a,s){const o=(a==null?void 0:a[s])??(a==null?void 0:a.default)??a;return o!==a?N0(o,a):o}const ay={type:"spring",stiffness:500,damping:25,restSpeed:10},sy=a=>({type:"spring",stiffness:550,damping:a===0?2*Math.sqrt(550):30,restSpeed:10}),iy={type:"keyframes",duration:.8},oy={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},ry=(a,{keyframes:s})=>s.length>2?iy:ks.has(a)?a.startsWith("scale")?sy(s[1]):ay:oy,ly=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function cy(a){for(const s in a)if(!ly.has(s))return!0;return!1}const Ad=(a,s,o,r={},d,g)=>p=>{const b=vd(r,a)||{},_=b.delay||r.delay||0;let{elapsed:h=0}=r;h=h-jt(_);const f={keyframes:Array.isArray(o)?o:[null,o],ease:"easeOut",velocity:s.getVelocity(),...b,delay:-h,onUpdate:G=>{s.set(G),b.onUpdate&&b.onUpdate(G)},onComplete:()=>{p(),b.onComplete&&b.onComplete()},name:a,motionValue:s,element:g?void 0:d};cy(b)||Object.assign(f,ry(a,f)),f.duration&&(f.duration=jt(f.duration)),f.repeatDelay&&(f.repeatDelay=jt(f.repeatDelay)),f.from!==void 0&&(f.keyframes[0]=f.from);let k=!1;if((f.type===!1||f.duration===0&&!f.repeatDelay)&&(Zu(f),f.delay===0&&(k=!0)),(Jn.instantAnimations||Jn.skipAnimations||d!=null&&d.shouldSkipAnimations||b.skipAnimations)&&(k=!0,Zu(f),f.delay=0),f.allowFlatten=!b.type&&!b.ease,k&&!g&&s.get()!==void 0){const G=Nr(f.keyframes,b);if(G!==void 0){Ee.update(()=>{f.onUpdate(G),f.onComplete()});return}}return b.isSync?new vr(f):new ey(f)},uy=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function dy(a){const s=uy.exec(a);if(!s)return[,];const[,o,r,d]=s;return[`--${o??r}`,d]}function D0(a,s,o=1){const[r,d]=dy(a);if(!r)return;const g=window.getComputedStyle(s).getPropertyValue(r);if(g){const p=g.trim();return Zf(p)?parseFloat(p):p}return fd(d)?D0(d,s,o+1):d}function bb(a){const s=[{},{}];return a==null||a.values.forEach((o,r)=>{s[0][r]=o.get(),s[1][r]=o.getVelocity()}),s}function Td(a,s,o,r){if(typeof s=="function"){const[d,g]=bb(r);s=s(o!==void 0?o:a.custom,d,g)}if(typeof s=="string"&&(s=a.variants&&a.variants[s]),typeof s=="function"){const[d,g]=bb(r);s=s(o!==void 0?o:a.custom,d,g)}return s}function Aa(a,s,o){const r=a.getProps();return Td(r,s,o!==void 0?o:r.custom,a)}const w0=new Set(["width","height","top","left","right","bottom",...xs]),Yu=a=>Array.isArray(a);function py(a,s,o){a.hasValue(s)?a.getValue(s).set(o):a.addValue(s,fs(o))}function gy(a){return Yu(a)?a[a.length-1]||0:a}function my(a,s){const o=Aa(a,s);let{transitionEnd:r={},transition:d={},...g}=o||{};g={...g,...r};for(const p in g){const b=gy(g[p]);py(a,p,b)}}const it=a=>!!(a&&a.getVelocity);function hy(a){return!!(it(a)&&a.add)}function Qu(a,s){const o=a.getValue("willChange");if(hy(o))return o.add(s);if(!o&&Jn.WillChange){const r=new Jn.WillChange("auto");a.addValue("willChange",r),r.add(s)}}function Sd(a){return a.replace(/([A-Z])/g,s=>`-${s.toLowerCase()}`)}const by="framerAppearId",q0="data-"+Sd(by);function C0(a){return a.props[q0]}function fy({protectedKeys:a,needsAnimating:s},o){const r=a.hasOwnProperty(o)&&s[o]!==!0;return s[o]=!1,r}function R0(a,s,{delay:o=0,transitionOverride:r,type:d}={}){let{transition:g,transitionEnd:p,...b}=s;const _=a.getDefaultTransition();g=g?N0(g,_):_;const h=g==null?void 0:g.reduceMotion,f=g==null?void 0:g.skipAnimations;r&&(g=r);const k=[],G=d&&a.animationState&&a.animationState.getState()[d],y=g==null?void 0:g.path;y&&y.animateVisualElement(a,b,g,o,k);for(const v in b){const I=a.getValue(v,a.latestValues[v]??null),S=b[v];if(S===void 0||G&&fy(G,v))continue;const w={delay:o,...vd(g||{},v)};f&&(w.skipAnimations=!0);const X=I.get();if(X!==void 0&&!I.isAnimating()&&!Array.isArray(S)&&S===X&&!w.velocity){Ee.update(()=>I.set(S));continue}let H=!1;if(window.MotionHandoffAnimation){const z=C0(a);if(z){const U=window.MotionHandoffAnimation(z,v,Ee);U!==null&&(w.startTime=U,H=!0)}}Qu(a,v);const V=h??a.shouldReduceMotion;I.start(Ad(v,I,S,V&&w0.has(v)?{type:!1}:w,a,H));const Y=I.animation;Y&&k.push(Y)}if(p){const v=()=>Ee.update(()=>{p&&my(a,p)});k.length?Promise.all(k).then(v):v()}return k}function Ju(a,s,o={}){var _;const r=Aa(a,s,o.type==="exit"?(_=a.presenceContext)==null?void 0:_.custom:void 0);let{transition:d=a.getDefaultTransition()||{}}=r||{};o.transitionOverride&&(d=o.transitionOverride);const g=r?()=>Promise.all(R0(a,r,o)):()=>Promise.resolve(),p=a.variantChildren&&a.variantChildren.size?(h=0)=>{const{delayChildren:f=0,staggerChildren:k,staggerDirection:G}=d;return _y(a,s,h,f,k,G,o)}:()=>Promise.resolve(),{when:b}=d;if(b){const[h,f]=b==="beforeChildren"?[g,p]:[p,g];return h().then(()=>f())}else return Promise.all([g(),p(o.delay)])}function _y(a,s,o=0,r=0,d=0,g=1,p){const b=[];for(const _ of a.variantChildren)_.notify("AnimationStart",s),b.push(Ju(_,s,{...p,delay:o+(typeof r=="function"?0:r)+E0(a.variantChildren,_,r,d,g)}).then(()=>_.notify("AnimationComplete",s)));return Promise.all(b)}function xy(a,s,o={}){a.notify("AnimationStart",s);let r;if(Array.isArray(s)){const d=s.map(g=>Ju(a,g,o));r=Promise.all(d)}else if(typeof s=="string")r=Ju(a,s,o);else{const d=typeof s=="function"?Aa(a,s,o.custom):s;r=Promise.all(R0(a,d,o))}return r.then(()=>{a.notify("AnimationComplete",s)})}const ky={test:a=>a==="auto",parse:a=>a},H0=a=>s=>s.test(a),L0=[_s,ee,tn,yn,Kk,Fk,ky],fb=a=>L0.find(H0(a));function Gy(a){return typeof a=="number"?a===0:a!==null?a==="none"||a==="0"||Qf(a):!0}const yy=new Set(["brightness","contrast","saturate","opacity"]);function My(a){const[s,o]=a.slice(0,-1).split("(");if(s==="drop-shadow")return a;const[r]=o.match(_d)||[];if(!r)return a;const d=o.replace(r,"");let g=yy.has(s)?1:0;return r!==o&&(g*=100),s+"("+g+d+")"}const vy=/\b([a-z-]*)\(.*?\)/gu,Wu={...Xt,getAnimatableNone:a=>{const s=a.match(vy);return s?s.map(My).join(" "):a}},$u={...Xt,getAnimatableNone:a=>{const s=Xt.parse(a);return Xt.createTransformer(a)(s.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},_b={..._s,transform:Math.round},Ay={rotate:yn,pathRotation:yn,rotateX:yn,rotateY:yn,rotateZ:yn,scale:er,scaleX:er,scaleY:er,scaleZ:er,skew:yn,skewX:yn,skewY:yn,distance:ee,translateX:ee,translateY:ee,translateZ:ee,x:ee,y:ee,z:ee,perspective:ee,transformPerspective:ee,opacity:Ti,originX:sb,originY:sb,originZ:ee},Ar={borderWidth:ee,borderTopWidth:ee,borderRightWidth:ee,borderBottomWidth:ee,borderLeftWidth:ee,borderRadius:ee,borderTopLeftRadius:ee,borderTopRightRadius:ee,borderBottomRightRadius:ee,borderBottomLeftRadius:ee,width:ee,maxWidth:ee,height:ee,maxHeight:ee,top:ee,right:ee,bottom:ee,left:ee,inset:ee,insetBlock:ee,insetBlockStart:ee,insetBlockEnd:ee,insetInline:ee,insetInlineStart:ee,insetInlineEnd:ee,padding:ee,paddingTop:ee,paddingRight:ee,paddingBottom:ee,paddingLeft:ee,paddingBlock:ee,paddingBlockStart:ee,paddingBlockEnd:ee,paddingInline:ee,paddingInlineStart:ee,paddingInlineEnd:ee,margin:ee,marginTop:ee,marginRight:ee,marginBottom:ee,marginLeft:ee,marginBlock:ee,marginBlockStart:ee,marginBlockEnd:ee,marginInline:ee,marginInlineStart:ee,marginInlineEnd:ee,fontSize:ee,backgroundPositionX:ee,backgroundPositionY:ee,...Ay,zIndex:_b,fillOpacity:Ti,strokeOpacity:Ti,numOctaves:_b},Ty={...Ar,color:Ze,backgroundColor:Ze,outlineColor:Ze,fill:Ze,stroke:Ze,borderColor:Ze,borderTopColor:Ze,borderRightColor:Ze,borderBottomColor:Ze,borderLeftColor:Ze,filter:Wu,WebkitFilter:Wu,mask:$u,WebkitMask:$u},z0=a=>Ty[a],Sy=new Set([Wu,$u]);function O0(a,s){let o=z0(a);return Sy.has(o)||(o=Xt),o.getAnimatableNone?o.getAnimatableNone(s):void 0}const Iy=new Set(["auto","none","0"]);function jy(a,s,o){let r=0,d;for(;r<a.length&&!d;){const g=a[r];typeof g=="string"&&!Iy.has(g)&&bs(g).values.length&&(d=a[r]),r++}if(d&&o)for(const g of s)a[g]=O0(o,d)}class Vy extends Md{constructor(s,o,r,d,g){super(s,o,r,d,g,!0)}readKeyframes(){const{unresolvedKeyframes:s,element:o,name:r}=this;if(!o||!o.current)return;super.readKeyframes();for(let f=0;f<s.length;f++){let k=s[f];if(typeof k=="string"&&(k=k.trim(),fd(k))){const G=D0(k,o.current);G!==void 0&&(s[f]=G),f===s.length-1&&(this.finalKeyframe=k)}}if(this.resolveNoneKeyframes(),!w0.has(r)||s.length!==2)return;const[d,g]=s,p=fb(d),b=fb(g),_=ab(d),h=ab(g);if(_!==h&&Qn[r]){this.needsMeasurement=!0;return}if(p!==b)if(pb(p)&&pb(b))for(let f=0;f<s.length;f++){const k=s[f];typeof k=="string"&&(s[f]=parseFloat(k))}else Qn[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:s,name:o}=this,r=[];for(let d=0;d<s.length;d++)(s[d]===null||Gy(s[d]))&&r.push(d);r.length&&jy(s,r,o)}measureInitialState(){const{element:s,unresolvedKeyframes:o,name:r}=this;if(!s||!s.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Qn[r](s.measureViewportBox(),window.getComputedStyle(s.current)),o[0]=this.measuredOrigin;const d=o[o.length-1];d!==void 0&&s.getValue(r,d).jump(d,!1)}measureEndState(){var b;const{element:s,name:o,unresolvedKeyframes:r}=this;if(!s||!s.current)return;const d=s.getValue(o);d&&d.jump(this.measuredOrigin,!1);const g=r.length-1,p=r[g];r[g]=Qn[o](s.measureViewportBox(),window.getComputedStyle(s.current)),p!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=p),(b=this.removedTransforms)!=null&&b.length&&this.removedTransforms.forEach(([_,h])=>{s.getValue(_).set(h)}),this.resolveNoneKeyframes()}}function B0(a,s,o){if(a==null)return[];if(a instanceof EventTarget)return[a];if(typeof a=="string"){let r=document;const d=(o==null?void 0:o[a])??r.querySelectorAll(a);return d?Array.from(d):[]}return Array.from(a).filter(r=>r!=null)}const ed=(a,s)=>s&&typeof a=="number"?s.transform(a):a;function ur(a){return Yf(a)&&"offsetHeight"in a&&!("ownerSVGElement"in a)}const{schedule:Id}=c0(queueMicrotask,!1),Kt={x:!1,y:!1};function U0(){return Kt.x||Kt.y}function Ey(a){return a==="x"||a==="y"?Kt[a]?null:(Kt[a]=!0,()=>{Kt[a]=!1}):Kt.x||Kt.y?null:(Kt.x=Kt.y=!0,()=>{Kt.x=Kt.y=!1})}function P0(a,s){const o=B0(a),r=new AbortController,d={passive:!0,...s,signal:r.signal};return[o,d,()=>r.abort()]}function Ny(a){return!(a.pointerType==="touch"||U0())}function Dy(a,s,o={}){const[r,d,g]=P0(a,o);return r.forEach(p=>{let b=!1,_=!1,h;const f=()=>{p.removeEventListener("pointerleave",v)},k=S=>{h&&(h(S),h=void 0),f()},G=S=>{b=!1,window.removeEventListener("pointerup",G),window.removeEventListener("pointercancel",G),_&&(_=!1,k(S))},y=()=>{b=!0,window.addEventListener("pointerup",G,d),window.addEventListener("pointercancel",G,d)},v=S=>{if(S.pointerType!=="touch"){if(b){_=!0;return}k(S)}},I=S=>{if(!Ny(S))return;_=!1;const w=s(p,S);typeof w=="function"&&(h=w,p.addEventListener("pointerleave",v,d))};p.addEventListener("pointerenter",I,d),p.addEventListener("pointerdown",y,d)}),g}const F0=(a,s)=>s?a===s?!0:F0(a,s.parentElement):!1,jd=a=>a.pointerType==="mouse"?typeof a.button!="number"||a.button<=0:a.isPrimary!==!1,wy=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function qy(a){return wy.has(a.tagName)||a.isContentEditable===!0}const Cy=new Set(["INPUT","SELECT","TEXTAREA"]);function Ry(a){return Cy.has(a.tagName)||a.isContentEditable===!0}const dr=new WeakSet;function xb(a){return s=>{s.key==="Enter"&&a(s)}}function bu(a,s){a.dispatchEvent(new PointerEvent("pointer"+s,{isPrimary:!0,bubbles:!0}))}const Hy=(a,s)=>{const o=a.currentTarget;if(!o)return;const r=xb(()=>{if(dr.has(o))return;bu(o,"down");const d=xb(()=>{bu(o,"up")}),g=()=>bu(o,"cancel");o.addEventListener("keyup",d,s),o.addEventListener("blur",g,s)});o.addEventListener("keydown",r,s),o.addEventListener("blur",()=>o.removeEventListener("keydown",r),s)};function kb(a){return jd(a)&&!U0()}const Gb=new WeakSet;function Ly(a,s,o={}){const[r,d,g]=P0(a,o),p=b=>{const _=b.currentTarget;if(!kb(b)||Gb.has(b))return;dr.add(_),o.stopPropagation&&Gb.add(b);const h=s(_,b),f=(y,v)=>{window.removeEventListener("pointerup",k),window.removeEventListener("pointercancel",G),dr.has(_)&&dr.delete(_),kb(y)&&typeof h=="function"&&h(y,{success:v})},k=y=>{f(y,_===window||_===document||o.useGlobalTarget||F0(_,y.target))},G=y=>{f(y,!1)};window.addEventListener("pointerup",k,d),window.addEventListener("pointercancel",G,d)};return r.forEach(b=>{(o.useGlobalTarget?window:b).addEventListener("pointerdown",p,d),ur(b)&&(b.addEventListener("focus",h=>Hy(h,d)),!qy(b)&&!b.hasAttribute("tabindex")&&(b.tabIndex=0))}),g}function Vd(a){return Yf(a)&&"ownerSVGElement"in a}const pr=new WeakMap;let Zn;const K0=(a,s,o)=>(r,d)=>d&&d[0]?d[0][a+"Size"]:Vd(r)&&"getBBox"in r?r.getBBox()[s]:r[o],zy=K0("inline","width","offsetWidth"),Oy=K0("block","height","offsetHeight");function By({target:a,borderBoxSize:s}){var o;(o=pr.get(a))==null||o.forEach(r=>{r(a,{get width(){return zy(a,s)},get height(){return Oy(a,s)}})})}function Uy(a){a.forEach(By)}function Py(){typeof ResizeObserver>"u"||(Zn=new ResizeObserver(Uy))}function Fy(a,s){Zn||Py();const o=B0(a);return o.forEach(r=>{let d=pr.get(r);d||(d=new Set,pr.set(r,d)),d.add(s),Zn==null||Zn.observe(r)}),()=>{o.forEach(r=>{const d=pr.get(r);d==null||d.delete(s),d!=null&&d.size||Zn==null||Zn.unobserve(r)})}}const gr=new Set;let ms;function Ky(){ms=()=>{const a={get width(){return window.innerWidth},get height(){return window.innerHeight}};gr.forEach(s=>s(a))},window.addEventListener("resize",ms)}function Xy(a){return gr.add(a),ms||Ky(),()=>{gr.delete(a),!gr.size&&typeof ms=="function"&&(window.removeEventListener("resize",ms),ms=void 0)}}function yb(a,s){return typeof a=="function"?Xy(a):Fy(a,s)}function Zy(a){return Vd(a)&&a.tagName==="svg"}const Yy=[...L0,Ze,Xt],Qy=a=>Yy.find(H0(a)),Mb=()=>({translate:0,scale:1,origin:0,originPoint:0}),hs=()=>({x:Mb(),y:Mb()}),vb=()=>({min:0,max:0}),Qe=()=>({x:vb(),y:vb()}),Jy=new WeakMap;function Dr(a){return a!==null&&typeof a=="object"&&typeof a.start=="function"}function Si(a){return typeof a=="string"||Array.isArray(a)}const Ed=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Nd=["initial",...Ed];function wr(a){return Dr(a.animate)||Nd.some(s=>Si(a[s]))}function X0(a){return!!(wr(a)||a.variants)}function Wy(a,s,o){for(const r in s){const d=s[r],g=o[r];if(it(d))a.addValue(r,d);else if(it(g))a.addValue(r,fs(d,{owner:a}));else if(g!==d)if(a.hasValue(r)){const p=a.getValue(r);p.liveStyle===!0?p.jump(d):p.hasAnimated||p.set(d)}else{const p=a.getStaticValue(r);a.addValue(r,fs(p!==void 0?p:d,{owner:a}))}}for(const r in o)s[r]===void 0&&a.removeValue(r);return s}const td={current:null},Z0={current:!1},$y=typeof window<"u";function eM(){if(Z0.current=!0,!!$y)if(window.matchMedia){const a=window.matchMedia("(prefers-reduced-motion)"),s=()=>td.current=a.matches;a.addEventListener("change",s),s()}else td.current=!1}const Ab=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Tr={};function Y0(a){Tr=a}function tM(){return Tr}class nM{scrapeMotionValuesFromProps(s,o,r){return{}}constructor({parent:s,props:o,presenceContext:r,reducedMotionConfig:d,skipAnimations:g,blockInitialAnimation:p,visualState:b},_={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Md,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const y=ct.now();this.renderScheduledAt<y&&(this.renderScheduledAt=y,Ee.render(this.render,!1,!0))};const{latestValues:h,renderState:f}=b;this.latestValues=h,this.baseTarget={...h},this.initialValues=o.initial?{...h}:{},this.renderState=f,this.parent=s,this.props=o,this.presenceContext=r,this.depth=s?s.depth+1:0,this.reducedMotionConfig=d,this.skipAnimationsConfig=g,this.options=_,this.blockInitialAnimation=!!p,this.isControllingVariants=wr(o),this.isVariantNode=X0(o),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(s&&s.current);const{willChange:k,...G}=this.scrapeMotionValuesFromProps(o,{},this);for(const y in G){const v=G[y];h[y]!==void 0&&it(v)&&v.set(h[y])}}mount(s){var o,r;if(this.hasBeenMounted)for(const d in this.initialValues)(o=this.values.get(d))==null||o.jump(this.initialValues[d]),this.latestValues[d]=this.initialValues[d];this.current=s,Jy.set(s,this),this.projection&&!this.projection.instance&&this.projection.mount(s),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((d,g)=>this.bindToMotionValue(g,d)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Z0.current||eM(),this.shouldReduceMotion=td.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(r=this.parent)==null||r.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var s;this.projection&&this.projection.unmount(),Wn(this.notifyUpdate),Wn(this.render),this.valueSubscriptions.forEach(o=>o()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(s=this.parent)==null||s.removeChild(this);for(const o in this.events)this.events[o].clear();for(const o in this.features){const r=this.features[o];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(s){this.children.add(s),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(s)}removeChild(s){this.children.delete(s),this.enteringChildren&&this.enteringChildren.delete(s)}bindToMotionValue(s,o){if(this.valueSubscriptions.has(s)&&this.valueSubscriptions.get(s)(),o.accelerate&&V0.has(s)&&this.current instanceof HTMLElement){const{factory:p,keyframes:b,times:_,ease:h,duration:f}=o.accelerate,k=new I0({element:this.current,name:s,keyframes:b,times:_,ease:h,duration:jt(f)}),G=p(k);this.valueSubscriptions.set(s,()=>{G(),k.cancel()});return}const r=ks.has(s);r&&this.onBindTransform&&this.onBindTransform();const d=o.on("change",p=>{this.latestValues[s]=p,this.props.onUpdate&&Ee.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let g;typeof window<"u"&&window.MotionCheckAppearSync&&(g=window.MotionCheckAppearSync(this,s,o)),this.valueSubscriptions.set(s,()=>{d(),g&&g()})}sortNodePosition(s){return!this.current||!this.sortInstanceNodePosition||this.type!==s.type?0:this.sortInstanceNodePosition(this.current,s.current)}updateFeatures(){let s="animation";for(s in Tr){const o=Tr[s];if(!o)continue;const{isEnabled:r,Feature:d}=o;if(!this.features[s]&&d&&r(this.props)&&(this.features[s]=new d(this)),this.features[s]){const g=this.features[s];g.isMounted?g.update():(g.mount(),g.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Qe()}getStaticValue(s){return this.latestValues[s]}setStaticValue(s,o){this.latestValues[s]=o}update(s,o){(s.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=s,this.prevPresenceContext=this.presenceContext,this.presenceContext=o;for(let r=0;r<Ab.length;r++){const d=Ab[r];this.propEventSubscriptions[d]&&(this.propEventSubscriptions[d](),delete this.propEventSubscriptions[d]);const g="on"+d,p=s[g];p&&(this.propEventSubscriptions[d]=this.on(d,p))}this.prevMotionValues=Wy(this,this.scrapeMotionValuesFromProps(s,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(s){return this.props.variants?this.props.variants[s]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(s){const o=this.getClosestVariantNode();if(o)return o.variantChildren&&o.variantChildren.add(s),()=>o.variantChildren.delete(s)}addValue(s,o){const r=this.values.get(s);o!==r&&(r&&this.removeValue(s),this.bindToMotionValue(s,o),this.values.set(s,o),this.latestValues[s]=o.get())}removeValue(s){this.values.delete(s);const o=this.valueSubscriptions.get(s);o&&(o(),this.valueSubscriptions.delete(s)),delete this.latestValues[s],this.removeValueFromRenderState(s,this.renderState)}hasValue(s){return this.values.has(s)}getValue(s,o){if(this.props.values&&this.props.values[s])return this.props.values[s];let r=this.values.get(s);return r===void 0&&o!==void 0&&(r=fs(o===null?void 0:o,{owner:this}),this.addValue(s,r)),r}readValue(s,o){let r=this.latestValues[s]!==void 0||!this.current?this.latestValues[s]:this.getBaseTargetFromProps(this.props,s)??this.readValueFromInstance(this.current,s,this.options);return r!=null&&(typeof r=="string"&&(Zf(r)||Qf(r))?r=parseFloat(r):!Qy(r)&&Xt.test(o)&&(r=O0(s,o)),this.setBaseTarget(s,it(r)?r.get():r)),it(r)?r.get():r}setBaseTarget(s,o){this.baseTarget[s]=o}getBaseTarget(s){var g;const{initial:o}=this.props;let r;if(typeof o=="string"||typeof o=="object"){const p=Td(this.props,o,(g=this.presenceContext)==null?void 0:g.custom);p&&(r=p[s])}if(o&&r!==void 0)return r;const d=this.getBaseTargetFromProps(this.props,s);return d!==void 0&&!it(d)?d:this.initialValues[s]!==void 0&&r===void 0?void 0:this.baseTarget[s]}on(s,o){return this.events[s]||(this.events[s]=new md),this.events[s].add(o)}notify(s,...o){this.events[s]&&this.events[s].notify(...o)}scheduleRenderMicrotask(){Id.render(this.render)}}class Q0 extends nM{constructor(){super(...arguments),this.KeyframeResolver=Vy}sortInstanceNodePosition(s,o){return s.compareDocumentPosition(o)&2?1:-1}getBaseTargetFromProps(s,o){const r=s.style;return r?r[o]:void 0}removeValueFromRenderState(s,{vars:o,style:r}){delete o[s],delete r[s]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:s}=this.props;it(s)&&(this.childSubscription=s.on("change",o=>{this.current&&(this.current.textContent=`${o}`)}))}}class $n{constructor(s){this.isMounted=!1,this.node=s}update(){}}function J0({top:a,left:s,right:o,bottom:r}){return{x:{min:s,max:o},y:{min:a,max:r}}}function aM({x:a,y:s}){return{top:s.min,right:a.max,bottom:s.max,left:a.min}}function sM(a,s){if(!s)return a;const o=s({x:a.left,y:a.top}),r=s({x:a.right,y:a.bottom});return{top:o.y,left:o.x,bottom:r.y,right:r.x}}function fu(a){return a===void 0||a===1}function nd({scale:a,scaleX:s,scaleY:o}){return!fu(a)||!fu(s)||!fu(o)}function Ga(a){return nd(a)||W0(a)||a.z||a.rotate||a.rotateX||a.rotateY||a.skewX||a.skewY}function W0(a){return Tb(a.x)||Tb(a.y)}function Tb(a){return a&&a!=="0%"}function Sr(a,s,o){const r=a-o,d=s*r;return o+d}function Sb(a,s,o,r,d){return d!==void 0&&(a=Sr(a,d,r)),Sr(a,o,r)+s}function ad(a,s=0,o=1,r,d){a.min=Sb(a.min,s,o,r,d),a.max=Sb(a.max,s,o,r,d)}function $0(a,{x:s,y:o}){ad(a.x,s.translate,s.scale,s.originPoint),ad(a.y,o.translate,o.scale,o.originPoint)}const Ib=.999999999999,jb=1.0000000000001;function iM(a,s,o,r=!1){var b;const d=o.length;if(!d)return;s.x=s.y=1;let g,p;for(let _=0;_<d;_++){g=o[_],p=g.projectionDelta;const{visualElement:h}=g.options;h&&h.props.style&&h.props.style.display==="contents"||(r&&g.options.layoutScroll&&g.scroll&&g!==g.root&&(en(a.x,-g.scroll.offset.x),en(a.y,-g.scroll.offset.y)),p&&(s.x*=p.x.scale,s.y*=p.y.scale,$0(a,p)),r&&Ga(g.latestValues)&&mr(a,g.latestValues,(b=g.layout)==null?void 0:b.layoutBox))}s.x<jb&&s.x>Ib&&(s.x=1),s.y<jb&&s.y>Ib&&(s.y=1)}function en(a,s){a.min+=s,a.max+=s}function Vb(a,s,o,r,d=.5){const g=Ve(a.min,a.max,d);ad(a,s,o,g,r)}function Eb(a,s){return typeof a=="string"?parseFloat(a)/100*(s.max-s.min):a}function mr(a,s,o){const r=o??a;Vb(a.x,Eb(s.x,r.x),s.scaleX,s.scale,s.originX),Vb(a.y,Eb(s.y,r.y),s.scaleY,s.scale,s.originY)}function e_(a,s){return J0(sM(a.getBoundingClientRect(),s))}function oM(a,s,o){const r=e_(a,o),{scroll:d}=s;return d&&(en(r.x,d.offset.x),en(r.y,d.offset.y)),r}const rM={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},lM=xs.length;function cM(a,s,o){let r="",d=!0;for(let p=0;p<lM;p++){const b=xs[p],_=a[b];if(_===void 0)continue;let h=!0;if(typeof _=="number")h=_===(b.startsWith("scale")?1:0);else{const f=parseFloat(_);h=b.startsWith("scale")?f===1:f===0}if(!h||o){const f=ed(_,Ar[b]);if(!h){d=!1;const k=rM[b]||b;r+=`${k}(${f}) `}o&&(s[b]=f)}}const g=a.pathRotation;return g&&(d=!1,r+=`rotate(${ed(g,Ar.pathRotation)}) `),r=r.trim(),o?r=o(s,d?"":r):d&&(r="none"),r}function Dd(a,s,o){const{style:r,vars:d,transformOrigin:g}=a;let p=!1,b=!1;for(const _ in s){const h=s[_];if(ks.has(_)){p=!0;continue}else if(d0(_)){d[_]=h;continue}else{const f=ed(h,Ar[_]);_.startsWith("origin")?(b=!0,g[_]=f):r[_]=f}}if(s.transform||(p||o?r.transform=cM(s,a.transform,o):r.transform&&(r.transform="none")),b){const{originX:_="50%",originY:h="50%",originZ:f=0}=g;r.transformOrigin=`${_} ${h} ${f}`}}function t_(a,{style:s,vars:o},r,d){const g=a.style;let p;for(p in s)g[p]=s[p];d==null||d.applyProjectionStyles(g,r);for(p in o)g.setProperty(p,o[p])}function Nb(a,s){return s.max===s.min?0:a/(s.max-s.min)*100}const fi={correct:(a,s)=>{if(!s.target)return a;if(typeof a=="string")if(ee.test(a))a=parseFloat(a);else return a;const o=Nb(a,s.target.x),r=Nb(a,s.target.y);return`${o}% ${r}%`}},uM={correct:(a,{treeScale:s,projectionDelta:o})=>{const r=a,d=Xt.parse(a);if(d.length>5)return r;const g=Xt.createTransformer(a),p=typeof d[0]!="number"?1:0,b=o.x.scale*s.x,_=o.y.scale*s.y;d[0+p]/=b,d[1+p]/=_;const h=Ve(b,_,.5);return typeof d[2+p]=="number"&&(d[2+p]/=h),typeof d[3+p]=="number"&&(d[3+p]/=h),g(d)}},sd={borderRadius:{...fi,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:fi,borderTopRightRadius:fi,borderBottomLeftRadius:fi,borderBottomRightRadius:fi,boxShadow:uM};function n_(a,{layout:s,layoutId:o}){return ks.has(a)||a.startsWith("origin")||(s||o!==void 0)&&(!!sd[a]||a==="opacity")}function wd(a,s,o){var p;const r=a.style,d=s==null?void 0:s.style,g={};if(!r)return g;for(const b in r)(it(r[b])||d&&it(d[b])||n_(b,a)||((p=o==null?void 0:o.getValue(b))==null?void 0:p.liveStyle)!==void 0)&&(g[b]=r[b]);return g}function dM(a){return window.getComputedStyle(a)}class pM extends Q0{constructor(){super(...arguments),this.type="html",this.renderInstance=t_}readValueFromInstance(s,o){var r;if(ks.has(o))return(r=this.projection)!=null&&r.isProjecting?Uu(o):NG(s,o);{const d=dM(s),g=(d0(o)?d.getPropertyValue(o):d[o])||0;return typeof g=="string"?g.trim():g}}measureInstanceViewportBox(s,{transformPagePoint:o}){return e_(s,o)}build(s,o,r){Dd(s,o,r.transformTemplate)}scrapeMotionValuesFromProps(s,o,r){return wd(s,o,r)}}const gM={offset:"stroke-dashoffset",array:"stroke-dasharray"},mM={offset:"strokeDashoffset",array:"strokeDasharray"};function hM(a,s,o=1,r=0,d=!0){a.pathLength=1;const g=d?gM:mM;a[g.offset]=`${-r}`,a[g.array]=`${s} ${o}`}const bM=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function a_(a,{attrX:s,attrY:o,attrScale:r,pathLength:d,pathSpacing:g=1,pathOffset:p=0,...b},_,h,f){if(Dd(a,b,h),_){a.style.viewBox&&(a.attrs.viewBox=a.style.viewBox);return}a.attrs=a.style,a.style={};const{attrs:k,style:G}=a;k.transform&&(G.transform=k.transform,delete k.transform),(G.transform||k.transformOrigin)&&(G.transformOrigin=k.transformOrigin??"50% 50%",delete k.transformOrigin),G.transform&&(G.transformBox=(f==null?void 0:f.transformBox)??"fill-box",delete k.transformBox);for(const y of bM)k[y]!==void 0&&(G[y]=k[y],delete k[y]);s!==void 0&&(k.x=s),o!==void 0&&(k.y=o),r!==void 0&&(k.scale=r),d!==void 0&&hM(k,d,g,p,!1)}const s_=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),i_=a=>typeof a=="string"&&a.toLowerCase()==="svg";function fM(a,s,o,r){t_(a,s,void 0,r);for(const d in s.attrs)a.setAttribute(s_.has(d)?d:Sd(d),s.attrs[d])}function o_(a,s,o){const r=wd(a,s,o);for(const d in a)if(it(a[d])||it(s[d])){const g=xs.indexOf(d)!==-1?"attr"+d.charAt(0).toUpperCase()+d.substring(1):d;r[g]=a[d]}return r}class _M extends Q0{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Qe}getBaseTargetFromProps(s,o){return s[o]}readValueFromInstance(s,o){if(ks.has(o)){const r=z0(o);return r&&r.default||0}return o=s_.has(o)?o:Sd(o),s.getAttribute(o)}scrapeMotionValuesFromProps(s,o,r){return o_(s,o,r)}build(s,o,r){a_(s,o,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(s,o,r,d){fM(s,o,r,d)}mount(s){this.isSVGTag=i_(s.tagName),super.mount(s)}}const xM=Nd.length;function r_(a){if(!a)return;if(!a.isControllingVariants){const o=a.parent?r_(a.parent)||{}:{};return a.props.initial!==void 0&&(o.initial=a.props.initial),o}const s={};for(let o=0;o<xM;o++){const r=Nd[o],d=a.props[r];(Si(d)||d===!1)&&(s[r]=d)}return s}function l_(a,s){if(!Array.isArray(s))return!1;const o=s.length;if(o!==a.length)return!1;for(let r=0;r<o;r++)if(s[r]!==a[r])return!1;return!0}const kM=[...Ed].reverse(),GM=Ed.length;function yM(a){return s=>Promise.all(s.map(({animation:o,options:r})=>xy(a,o,r)))}function MM(a){let s=yM(a),o=Db(),r=!0,d=!1;const g=h=>(f,k)=>{var y;const G=Aa(a,k,h==="exit"?(y=a.presenceContext)==null?void 0:y.custom:void 0);if(G){const{transition:v,transitionEnd:I,...S}=G;f={...f,...S,...I}}return f};function p(h){s=h(a)}function b(h){const{props:f}=a,k=r_(a.parent)||{},G=[],y=new Set;let v={},I=1/0;for(let w=0;w<GM;w++){const X=kM[w],H=o[X],V=f[X]!==void 0?f[X]:k[X],Y=Si(V),z=X===h?H.isActive:null;z===!1&&(I=w);let U=V===k[X]&&V!==f[X]&&Y;if(U&&(r||d)&&a.manuallyAnimateOnMount&&(U=!1),H.protectedKeys={...v},!H.isActive&&z===null||!V&&!H.prevProp||Dr(V)||typeof V=="boolean")continue;if(X==="exit"&&H.isActive&&z!==!0){H.prevResolvedValues&&(v={...v,...H.prevResolvedValues});continue}const q=vM(H.prevProp,V);let Z=q||X===h&&H.isActive&&!U&&Y||w>I&&Y,K=!1;const te=Array.isArray(V)?V:[V];let le=te.reduce(g(X),{});z===!1&&(le={});const{prevResolvedValues:Re={}}=H,Ce={...Re,...le},we=W=>{Z=!0,y.has(W)&&(K=!0,y.delete(W)),H.needsAnimating[W]=!0;const de=a.getValue(W);de&&(de.liveStyle=!1)};for(const W in Ce){const de=le[W],_e=Re[W];if(v.hasOwnProperty(W))continue;let T=!1;Yu(de)&&Yu(_e)?T=!l_(de,_e)||q:T=de!==_e,T?de!=null?we(W):y.add(W):de!==void 0&&y.has(W)?we(W):H.protectedKeys[W]=!0}H.prevProp=V,H.prevResolvedValues=le,H.isActive&&(v={...v,...le}),(r||d)&&a.blockInitialAnimation&&(Z=!1);const R=U&&q;Z&&(!R||K)&&G.push(...te.map(W=>{const de={type:X};if(typeof W=="string"&&(r||d)&&!R&&a.manuallyAnimateOnMount&&a.parent){const{parent:_e}=a,T=Aa(_e,W);if(_e.enteringChildren&&T){const{delayChildren:F}=T.transition||{};de.delay=E0(_e.enteringChildren,a,F)}}return{animation:W,options:de}}))}if(y.size){const w={};if(typeof f.initial!="boolean"){const X=Aa(a,Array.isArray(f.initial)?f.initial[0]:f.initial);X&&X.transition&&(w.transition=X.transition)}y.forEach(X=>{const H=a.getBaseTarget(X),V=a.getValue(X);V&&(V.liveStyle=!0),w[X]=H??null}),G.push({animation:w})}let S=!!G.length;return r&&(f.initial===!1||f.initial===f.animate)&&!a.manuallyAnimateOnMount&&(S=!1),r=!1,d=!1,S?s(G):Promise.resolve()}function _(h,f){var G;if(o[h].isActive===f)return Promise.resolve();(G=a.variantChildren)==null||G.forEach(y=>{var v;return(v=y.animationState)==null?void 0:v.setActive(h,f)}),o[h].isActive=f;const k=b(h);for(const y in o)o[y].protectedKeys={};return k}return{animateChanges:b,setActive:_,setAnimateFunction:p,getState:()=>o,reset:()=>{o=Db(),d=!0}}}function vM(a,s){return typeof s=="string"?s!==a:Array.isArray(s)?!l_(s,a):!1}function ka(a=!1){return{isActive:a,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Db(){return{animate:ka(!0),whileInView:ka(),whileHover:ka(),whileTap:ka(),whileDrag:ka(),whileFocus:ka(),exit:ka()}}function id(a,s){a.min=s.min,a.max=s.max}function Ft(a,s){id(a.x,s.x),id(a.y,s.y)}function wb(a,s){a.translate=s.translate,a.scale=s.scale,a.originPoint=s.originPoint,a.origin=s.origin}const c_=1e-4,AM=1-c_,TM=1+c_,u_=.01,SM=0-u_,IM=0+u_;function ut(a){return a.max-a.min}function jM(a,s,o){return Math.abs(a-s)<=o}function qb(a,s,o,r=.5){a.origin=r,a.originPoint=Ve(s.min,s.max,a.origin),a.scale=ut(o)/ut(s),a.translate=Ve(o.min,o.max,a.origin)-a.originPoint,(a.scale>=AM&&a.scale<=TM||isNaN(a.scale))&&(a.scale=1),(a.translate>=SM&&a.translate<=IM||isNaN(a.translate))&&(a.translate=0)}function yi(a,s,o,r){qb(a.x,s.x,o.x,r?r.originX:void 0),qb(a.y,s.y,o.y,r?r.originY:void 0)}function Cb(a,s,o,r=0){const d=r?Ve(o.min,o.max,r):o.min;a.min=d+s.min,a.max=a.min+ut(s)}function VM(a,s,o,r){Cb(a.x,s.x,o.x,r==null?void 0:r.x),Cb(a.y,s.y,o.y,r==null?void 0:r.y)}function Rb(a,s,o,r=0){const d=r?Ve(o.min,o.max,r):o.min;a.min=s.min-d,a.max=a.min+ut(s)}function Ir(a,s,o,r){Rb(a.x,s.x,o.x,r==null?void 0:r.x),Rb(a.y,s.y,o.y,r==null?void 0:r.y)}function Hb(a,s,o,r,d){return a-=s,a=Sr(a,1/o,r),d!==void 0&&(a=Sr(a,1/d,r)),a}function EM(a,s=0,o=1,r=.5,d,g=a,p=a){if(tn.test(s)&&(s=parseFloat(s),s=Ve(p.min,p.max,s/100)-p.min),typeof s!="number")return;let b=Ve(g.min,g.max,r);a===g&&(b-=s),a.min=Hb(a.min,s,o,b,d),a.max=Hb(a.max,s,o,b,d)}function Lb(a,s,[o,r,d],g,p){EM(a,s[o],s[r],s[d],s.scale,g,p)}const NM=["x","scaleX","originX"],DM=["y","scaleY","originY"];function zb(a,s,o,r){Lb(a.x,s,NM,o?o.x:void 0,r?r.x:void 0),Lb(a.y,s,DM,o?o.y:void 0,r?r.y:void 0)}function Ob(a){return a.translate===0&&a.scale===1}function d_(a){return Ob(a.x)&&Ob(a.y)}function Bb(a,s){return a.min===s.min&&a.max===s.max}function wM(a,s){return Bb(a.x,s.x)&&Bb(a.y,s.y)}function Ub(a,s){return Math.round(a.min)===Math.round(s.min)&&Math.round(a.max)===Math.round(s.max)}function p_(a,s){return Ub(a.x,s.x)&&Ub(a.y,s.y)}function Pb(a){return ut(a.x)/ut(a.y)}function Fb(a,s){return a.translate===s.translate&&a.scale===s.scale&&a.originPoint===s.originPoint}function Wt(a){return[a("x"),a("y")]}function qM(a,s,o){let r="";const d=a.x.translate/s.x,g=a.y.translate/s.y,p=(o==null?void 0:o.z)||0;if((d||g||p)&&(r=`translate3d(${d}px, ${g}px, ${p}px) `),(s.x!==1||s.y!==1)&&(r+=`scale(${1/s.x}, ${1/s.y}) `),o){const{transformPerspective:h,rotate:f,pathRotation:k,rotateX:G,rotateY:y,skewX:v,skewY:I}=o;h&&(r=`perspective(${h}px) ${r}`),f&&(r+=`rotate(${f}deg) `),k&&(r+=`rotate(${k}deg) `),G&&(r+=`rotateX(${G}deg) `),y&&(r+=`rotateY(${y}deg) `),v&&(r+=`skewX(${v}deg) `),I&&(r+=`skewY(${I}deg) `)}const b=a.x.scale*s.x,_=a.y.scale*s.y;return(b!==1||_!==1)&&(r+=`scale(${b}, ${_})`),r||"none"}const g_=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],CM=g_.length,Kb=a=>typeof a=="string"?parseFloat(a):a,Xb=a=>typeof a=="number"||ee.test(a);function RM(a,s,o,r,d,g){d?(a.opacity=Ve(0,o.opacity??1,HM(r)),a.opacityExit=Ve(s.opacity??1,0,LM(r))):g&&(a.opacity=Ve(s.opacity??1,o.opacity??1,r));for(let p=0;p<CM;p++){const b=g_[p];let _=Zb(s,b),h=Zb(o,b);if(_===void 0&&h===void 0)continue;_||(_=0),h||(h=0),_===0||h===0||Xb(_)===Xb(h)?(a[b]=Math.max(Ve(Kb(_),Kb(h),r),0),(tn.test(h)||tn.test(_))&&(a[b]+="%")):a[b]=h}(s.rotate||o.rotate)&&(a.rotate=Ve(s.rotate||0,o.rotate||0,r))}function Zb(a,s){return a[s]!==void 0?a[s]:a.borderRadius}const HM=m_(0,.5,i0),LM=m_(.5,.95,Ot);function m_(a,s,o){return r=>r<a?0:r>s?1:o(Ai(a,s,r))}function zM(a,s,o){const r=it(a)?a:fs(a);return r.start(Ad("",r,s,o)),r.animation}function Ii(a,s,o,r={passive:!0}){return a.addEventListener(s,o,r),()=>a.removeEventListener(s,o)}const OM=(a,s)=>a.depth-s.depth;class BM{constructor(){this.children=[],this.isDirty=!1}add(s){pd(this.children,s),this.isDirty=!0}remove(s){kr(this.children,s),this.isDirty=!0}forEach(s){this.isDirty&&this.children.sort(OM),this.isDirty=!1,this.children.forEach(s)}}function UM(a,s){const o=ct.now(),r=({timestamp:d})=>{const g=d-o;g>=s&&(Wn(r),a(g-s))};return Ee.setup(r,!0),()=>Wn(r)}function hr(a){return it(a)?a.get():a}class PM{constructor(){this.members=[]}add(s){pd(this.members,s);for(let o=this.members.length-1;o>=0;o--){const r=this.members[o];if(r===s||r===this.lead||r===this.prevLead)continue;const d=r.instance;(!d||d.isConnected===!1)&&!r.snapshot&&(kr(this.members,r),r.unmount())}s.scheduleRender()}remove(s){if(kr(this.members,s),s===this.prevLead&&(this.prevLead=void 0),s===this.lead){const o=this.members[this.members.length-1];o&&this.promote(o)}}relegate(s){var o;for(let r=this.members.indexOf(s)-1;r>=0;r--){const d=this.members[r];if(d.isPresent!==!1&&((o=d.instance)==null?void 0:o.isConnected)!==!1)return this.promote(d),!0}return!1}promote(s,o){var d;const r=this.lead;if(s!==r&&(this.prevLead=r,this.lead=s,s.show(),r)){r.updateSnapshot(),s.scheduleRender();const{layoutDependency:g}=r.options,{layoutDependency:p}=s.options;(g===void 0||g!==p)&&(s.resumeFrom=r,o&&(r.preserveOpacity=!0),r.snapshot&&(s.snapshot=r.snapshot,s.snapshot.latestValues=r.animationValues||r.latestValues),(d=s.root)!=null&&d.isUpdating&&(s.isLayoutDirty=!0)),s.options.crossfade===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(s=>{var o,r,d,g,p;(r=(o=s.options).onExitComplete)==null||r.call(o),(p=(d=s.resumingFrom)==null?void 0:(g=d.options).onExitComplete)==null||p.call(g)})}scheduleRender(){this.members.forEach(s=>s.instance&&s.scheduleRender(!1))}removeLeadSnapshot(){var s;(s=this.lead)!=null&&s.snapshot&&(this.lead.snapshot=void 0)}}const br={hasAnimatedSinceResize:!0,hasEverUpdated:!1},_u=["","X","Y","Z"],FM=1e3;let KM=0;function xu(a,s,o,r){const{latestValues:d}=s;d[a]&&(o[a]=d[a],s.setStaticValue(a,0),r&&(r[a]=0))}function h_(a){if(a.hasCheckedOptimisedAppear=!0,a.root===a)return;const{visualElement:s}=a.options;if(!s)return;const o=C0(s);if(window.MotionHasOptimisedAnimation(o,"transform")){const{layout:d,layoutId:g}=a.options;window.MotionCancelOptimisedAnimation(o,"transform",Ee,!(d||g))}const{parent:r}=a;r&&!r.hasCheckedOptimisedAppear&&h_(r)}function b_({attachResizeListener:a,defaultParent:s,measureScroll:o,checkIsScrollRoot:r,resetTransform:d}){return class{constructor(p={},b=s==null?void 0:s()){this.id=KM++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(YM),this.nodes.forEach(tv),this.nodes.forEach(nv),this.nodes.forEach(QM)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=p,this.root=b?b.root||b:this,this.path=b?[...b.path,b]:[],this.parent=b,this.depth=b?b.depth+1:0;for(let _=0;_<this.path.length;_++)this.path[_].shouldResetTransform=!0;this.root===this&&(this.nodes=new BM)}addEventListener(p,b){return this.eventHandlers.has(p)||this.eventHandlers.set(p,new md),this.eventHandlers.get(p).add(b)}notifyListeners(p,...b){const _=this.eventHandlers.get(p);_&&_.notify(...b)}hasListeners(p){return this.eventHandlers.has(p)}mount(p){if(this.instance)return;this.isSVG=Vd(p)&&!Zy(p),this.instance=p;const{layoutId:b,layout:_,visualElement:h}=this.options;if(h&&!h.current&&h.mount(p),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(_||b)&&(this.isLayoutDirty=!0),a){let f,k=0;const G=()=>this.root.updateBlockedByResize=!1;Ee.read(()=>{k=window.innerWidth}),a(p,()=>{const y=window.innerWidth;y!==k&&(k=y,this.root.updateBlockedByResize=!0,f&&f(),f=UM(G,250),br.hasAnimatedSinceResize&&(br.hasAnimatedSinceResize=!1,this.nodes.forEach(Jb)))})}b&&this.root.registerSharedNode(b,this),this.options.animate!==!1&&h&&(b||_)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:k,hasRelativeLayoutChanged:G,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const v=this.options.transition||h.getDefaultTransition()||rv,{onLayoutAnimationStart:I,onLayoutAnimationComplete:S}=h.getProps(),w=!this.targetLayout||!p_(this.targetLayout,y),X=!k&&G;if(this.options.layoutRoot||this.resumeFrom||X||k&&(w||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const H={...vd(v,"layout"),onPlay:I,onComplete:S};(h.shouldReduceMotion||this.options.layoutRoot)&&(H.delay=0,H.type=!1),this.startAnimation(H),this.setAnimationOrigin(f,X,H.path)}else k||Jb(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const p=this.getStack();p&&p.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Wn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(av),this.animationId++)}getTransformTemplate(){const{visualElement:p}=this.options;return p&&p.getProps().transformTemplate}willUpdate(p=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&h_(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let f=0;f<this.path.length;f++){const k=this.path[f];k.shouldResetTransform=!0,(typeof k.latestValues.x=="string"||typeof k.latestValues.y=="string")&&(k.isLayoutDirty=!0),k.updateScroll("snapshot"),k.options.layoutRoot&&k.willUpdate(!1)}const{layoutId:b,layout:_}=this.options;if(b===void 0&&!_)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),p&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const _=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),_&&this.nodes.forEach(WM),this.nodes.forEach(Yb);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Qb);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach($M),this.nodes.forEach(ev),this.nodes.forEach(XM),this.nodes.forEach(ZM)):this.nodes.forEach(Qb),this.clearAllSnapshots();const b=ct.now();st.delta=nn(0,1e3/60,b-st.timestamp),st.timestamp=b,st.isProcessing=!0,uu.update.process(st),uu.preRender.process(st),uu.render.process(st),st.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Id.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(JM),this.sharedNodes.forEach(sv)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ee.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ee.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ut(this.snapshot.measuredBox.x)&&!ut(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let _=0;_<this.path.length;_++)this.path[_].updateScroll();const p=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=Qe()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:b}=this.options;b&&b.notify("LayoutMeasure",this.layout.layoutBox,p?p.layoutBox:void 0)}updateScroll(p="measure"){let b=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===p&&(b=!1),b&&this.instance){const _=r(this.instance);this.scroll={animationId:this.root.animationId,phase:p,isRoot:_,offset:o(this.instance),wasRoot:this.scroll?this.scroll.isRoot:_}}}resetTransform(){if(!d)return;const p=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,b=this.projectionDelta&&!d_(this.projectionDelta),_=this.getTransformTemplate(),h=_?_(this.latestValues,""):void 0,f=h!==this.prevTransformTemplateValue;p&&this.instance&&(b||Ga(this.latestValues)||f)&&(d(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(p=!0){const b=this.measurePageBox();let _=this.removeElementScroll(b);return p&&(_=this.removeTransform(_)),lv(_),{animationId:this.root.animationId,measuredBox:b,layoutBox:_,latestValues:{},source:this.id}}measurePageBox(){var h;const{visualElement:p}=this.options;if(!p)return Qe();const b=p.measureViewportBox();if(!(((h=this.scroll)==null?void 0:h.wasRoot)||this.path.some(cv))){const{scroll:f}=this.root;f&&(en(b.x,f.offset.x),en(b.y,f.offset.y))}return b}removeElementScroll(p){var _;const b=Qe();if(Ft(b,p),(_=this.scroll)!=null&&_.wasRoot)return b;for(let h=0;h<this.path.length;h++){const f=this.path[h],{scroll:k,options:G}=f;f!==this.root&&k&&G.layoutScroll&&(k.wasRoot&&Ft(b,p),en(b.x,k.offset.x),en(b.y,k.offset.y))}return b}applyTransform(p,b=!1,_){var f,k;const h=_||Qe();Ft(h,p);for(let G=0;G<this.path.length;G++){const y=this.path[G];!b&&y.options.layoutScroll&&y.scroll&&y!==y.root&&(en(h.x,-y.scroll.offset.x),en(h.y,-y.scroll.offset.y)),Ga(y.latestValues)&&mr(h,y.latestValues,(f=y.layout)==null?void 0:f.layoutBox)}return Ga(this.latestValues)&&mr(h,this.latestValues,(k=this.layout)==null?void 0:k.layoutBox),h}removeTransform(p){var _;const b=Qe();Ft(b,p);for(let h=0;h<this.path.length;h++){const f=this.path[h];if(!Ga(f.latestValues))continue;let k;f.instance&&(nd(f.latestValues)&&f.updateSnapshot(),k=Qe(),Ft(k,f.measurePageBox())),zb(b,f.latestValues,(_=f.snapshot)==null?void 0:_.layoutBox,k)}return Ga(this.latestValues)&&zb(b,this.latestValues),b}setTargetDelta(p){this.targetDelta=p,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(p){this.options={...this.options,...p,crossfade:p.crossfade!==void 0?p.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==st.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(p=!1){var y;const b=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=b.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=b.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=b.isSharedProjectionDirty);const _=!!this.resumingFrom||this!==b;if(!(p||_&&this.isSharedProjectionDirty||this.isProjectionDirty||(y=this.parent)!=null&&y.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:k}=this.options;if(!this.layout||!(f||k))return;this.resolvedRelativeTargetAt=st.timestamp;const G=this.getClosestProjectingParent();G&&this.linkedParentVersion!==G.layoutVersion&&!G.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&G&&G.layout?this.createRelativeTarget(G,this.layout.layoutBox,G.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Qe(),this.targetWithTransforms=Qe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),VM(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Ft(this.target,this.layout.layoutBox),$0(this.target,this.targetDelta)):Ft(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&G&&!!G.resumingFrom==!!this.resumingFrom&&!G.options.layoutScroll&&G.target&&this.animationProgress!==1?this.createRelativeTarget(G,this.target,G.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||nd(this.parent.latestValues)||W0(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(p,b,_){this.relativeParent=p,this.linkedParentVersion=p.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Qe(),this.relativeTargetOrigin=Qe(),Ir(this.relativeTargetOrigin,b,_,this.options.layoutAnchor||void 0),Ft(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var v;const p=this.getLead(),b=!!this.resumingFrom||this!==p;let _=!0;if((this.isProjectionDirty||(v=this.parent)!=null&&v.isProjectionDirty)&&(_=!1),b&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(_=!1),this.resolvedRelativeTargetAt===st.timestamp&&(_=!1),_)return;const{layout:h,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||f))return;Ft(this.layoutCorrected,this.layout.layoutBox);const k=this.treeScale.x,G=this.treeScale.y;iM(this.layoutCorrected,this.treeScale,this.path,b),p.layout&&!p.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(p.target=p.layout.layoutBox,p.targetWithTransforms=Qe());const{target:y}=p;if(!y){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(wb(this.prevProjectionDelta.x,this.projectionDelta.x),wb(this.prevProjectionDelta.y,this.projectionDelta.y)),yi(this.projectionDelta,this.layoutCorrected,y,this.latestValues),(this.treeScale.x!==k||this.treeScale.y!==G||!Fb(this.projectionDelta.x,this.prevProjectionDelta.x)||!Fb(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(p=!0){var b;if((b=this.options.visualElement)==null||b.scheduleRender(),p){const _=this.getStack();_&&_.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=hs(),this.projectionDelta=hs(),this.projectionDeltaWithTransform=hs()}setAnimationOrigin(p,b=!1,_){const h=this.snapshot,f=h?h.latestValues:{},k={...this.latestValues},G=hs();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!b;const y=Qe(),v=h?h.source:void 0,I=this.layout?this.layout.source:void 0,S=v!==I,w=this.getStack(),X=!w||w.members.length<=1,H=!!(S&&!X&&this.options.crossfade===!0&&!this.path.some(ov));this.animationProgress=0;let V;const Y=_==null?void 0:_.interpolateProjection(p);this.mixTargetDelta=z=>{const U=z/1e3,q=Y==null?void 0:Y(U);q?(G.x.translate=q.x,G.x.scale=Ve(p.x.scale,1,U),G.x.origin=p.x.origin,G.x.originPoint=p.x.originPoint,G.y.translate=q.y,G.y.scale=Ve(p.y.scale,1,U),G.y.origin=p.y.origin,G.y.originPoint=p.y.originPoint):(Wb(G.x,p.x,U),Wb(G.y,p.y,U)),this.setTargetDelta(G),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ir(y,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),iv(this.relativeTarget,this.relativeTargetOrigin,y,U),V&&wM(this.relativeTarget,V)&&(this.isProjectionDirty=!1),V||(V=Qe()),Ft(V,this.relativeTarget)),S&&(this.animationValues=k,RM(k,f,this.latestValues,U,H,X)),q&&q.rotate!==void 0&&(this.animationValues||(this.animationValues=k),this.animationValues.pathRotation=q.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=U},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(p){var b,_,h;this.notifyListeners("animationStart"),(b=this.currentAnimation)==null||b.stop(),(h=(_=this.resumingFrom)==null?void 0:_.currentAnimation)==null||h.stop(),this.pendingAnimation&&(Wn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ee.update(()=>{br.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=fs(0)),this.motionValue.jump(0,!1),this.currentAnimation=zM(this.motionValue,[0,1e3],{...p,velocity:0,isSync:!0,onUpdate:f=>{this.mixTargetDelta(f),p.onUpdate&&p.onUpdate(f)},onStop:()=>{},onComplete:()=>{p.onComplete&&p.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const p=this.getStack();p&&p.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(FM),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const p=this.getLead();let{targetWithTransforms:b,target:_,layout:h,latestValues:f}=p;if(!(!b||!_||!h)){if(this!==p&&this.layout&&h&&f_(this.options.animationType,this.layout.layoutBox,h.layoutBox)){_=this.target||Qe();const k=ut(this.layout.layoutBox.x);_.x.min=p.target.x.min,_.x.max=_.x.min+k;const G=ut(this.layout.layoutBox.y);_.y.min=p.target.y.min,_.y.max=_.y.min+G}Ft(b,_),mr(b,f),yi(this.projectionDeltaWithTransform,this.layoutCorrected,b,f)}}registerSharedNode(p,b){this.sharedNodes.has(p)||this.sharedNodes.set(p,new PM),this.sharedNodes.get(p).add(b);const h=b.options.initialPromotionConfig;b.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(b):void 0})}isLead(){const p=this.getStack();return p?p.lead===this:!0}getLead(){var b;const{layoutId:p}=this.options;return p?((b=this.getStack())==null?void 0:b.lead)||this:this}getPrevLead(){var b;const{layoutId:p}=this.options;return p?(b=this.getStack())==null?void 0:b.prevLead:void 0}getStack(){const{layoutId:p}=this.options;if(p)return this.root.sharedNodes.get(p)}promote({needsReset:p,transition:b,preserveFollowOpacity:_}={}){const h=this.getStack();h&&h.promote(this,_),p&&(this.projectionDelta=void 0,this.needsReset=!0),b&&this.setOptions({transition:b})}relegate(){const p=this.getStack();return p?p.relegate(this):!1}resetSkewAndRotation(){const{visualElement:p}=this.options;if(!p)return;let b=!1;const{latestValues:_}=p;if((_.z||_.rotate||_.rotateX||_.rotateY||_.rotateZ||_.skewX||_.skewY)&&(b=!0),!b)return;const h={};_.z&&xu("z",p,h,this.animationValues);for(let f=0;f<_u.length;f++)xu(`rotate${_u[f]}`,p,h,this.animationValues),xu(`skew${_u[f]}`,p,h,this.animationValues);p.render();for(const f in h)p.setStaticValue(f,h[f]),this.animationValues&&(this.animationValues[f]=h[f]);p.scheduleRender()}applyProjectionStyles(p,b){if(!this.instance||this.isSVG)return;if(!this.isVisible){p.visibility="hidden";return}const _=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,p.visibility="",p.opacity="",p.pointerEvents=hr(b==null?void 0:b.pointerEvents)||"",p.transform=_?_(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(p.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,p.pointerEvents=hr(b==null?void 0:b.pointerEvents)||""),this.hasProjected&&!Ga(this.latestValues)&&(p.transform=_?_({},""):"none",this.hasProjected=!1);return}p.visibility="";const f=h.animationValues||h.latestValues;this.applyTransformsToTarget();let k=qM(this.projectionDeltaWithTransform,this.treeScale,f);_&&(k=_(f,k)),p.transform=k;const{x:G,y}=this.projectionDelta;p.transformOrigin=`${G.origin*100}% ${y.origin*100}% 0`,h.animationValues?p.opacity=h===this?f.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:p.opacity=h===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const v in sd){if(f[v]===void 0)continue;const{correct:I,applyTo:S,isCSSVariable:w}=sd[v],X=k==="none"?f[v]:I(f[v],h);if(S){const H=S.length;for(let V=0;V<H;V++)p[S[V]]=X}else w?this.options.visualElement.renderState.vars[v]=X:p[v]=X}this.options.layoutId&&(p.pointerEvents=h===this?hr(b==null?void 0:b.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(p=>{var b;return(b=p.currentAnimation)==null?void 0:b.stop()}),this.root.nodes.forEach(Yb),this.root.sharedNodes.clear()}}}function XM(a){a.updateLayout()}function ZM(a){var o;const s=((o=a.resumeFrom)==null?void 0:o.snapshot)||a.snapshot;if(a.isLead()&&a.layout&&s&&a.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:d}=a.layout,{animationType:g}=a.options,p=s.source!==a.layout.source;if(g==="size")Wt(k=>{const G=p?s.measuredBox[k]:s.layoutBox[k],y=ut(G);G.min=r[k].min,G.max=G.min+y});else if(g==="x"||g==="y"){const k=g==="x"?"y":"x";id(p?s.measuredBox[k]:s.layoutBox[k],r[k])}else f_(g,s.layoutBox,r)&&Wt(k=>{const G=p?s.measuredBox[k]:s.layoutBox[k],y=ut(r[k]);G.max=G.min+y,a.relativeTarget&&!a.currentAnimation&&(a.isProjectionDirty=!0,a.relativeTarget[k].max=a.relativeTarget[k].min+y)});const b=hs();yi(b,r,s.layoutBox);const _=hs();p?yi(_,a.applyTransform(d,!0),s.measuredBox):yi(_,r,s.layoutBox);const h=!d_(b);let f=!1;if(!a.resumeFrom){const k=a.getClosestProjectingParent();if(k&&!k.resumeFrom){const{snapshot:G,layout:y}=k;if(G&&y){const v=a.options.layoutAnchor||void 0,I=Qe();Ir(I,s.layoutBox,G.layoutBox,v);const S=Qe();Ir(S,r,y.layoutBox,v),p_(I,S)||(f=!0),k.options.layoutRoot&&(a.relativeTarget=S,a.relativeTargetOrigin=I,a.relativeParent=k)}}}a.notifyListeners("didUpdate",{layout:r,snapshot:s,delta:_,layoutDelta:b,hasLayoutChanged:h,hasRelativeLayoutChanged:f})}else if(a.isLead()){const{onExitComplete:r}=a.options;r&&r()}a.options.transition=void 0}function YM(a){a.parent&&(a.isProjecting()||(a.isProjectionDirty=a.parent.isProjectionDirty),a.isSharedProjectionDirty||(a.isSharedProjectionDirty=!!(a.isProjectionDirty||a.parent.isProjectionDirty||a.parent.isSharedProjectionDirty)),a.isTransformDirty||(a.isTransformDirty=a.parent.isTransformDirty))}function QM(a){a.isProjectionDirty=a.isSharedProjectionDirty=a.isTransformDirty=!1}function JM(a){a.clearSnapshot()}function Yb(a){a.clearMeasurements()}function WM(a){a.isLayoutDirty=!0,a.updateLayout()}function Qb(a){a.isLayoutDirty=!1}function $M(a){a.isAnimationBlocked&&a.layout&&!a.isLayoutDirty&&(a.snapshot=a.layout,a.isLayoutDirty=!0)}function ev(a){const{visualElement:s}=a.options;s&&s.getProps().onBeforeLayoutMeasure&&s.notify("BeforeLayoutMeasure"),a.resetTransform()}function Jb(a){a.finishAnimation(),a.targetDelta=a.relativeTarget=a.target=void 0,a.isProjectionDirty=!0}function tv(a){a.resolveTargetDelta()}function nv(a){a.calcProjection()}function av(a){a.resetSkewAndRotation()}function sv(a){a.removeLeadSnapshot()}function Wb(a,s,o){a.translate=Ve(s.translate,0,o),a.scale=Ve(s.scale,1,o),a.origin=s.origin,a.originPoint=s.originPoint}function $b(a,s,o,r){a.min=Ve(s.min,o.min,r),a.max=Ve(s.max,o.max,r)}function iv(a,s,o,r){$b(a.x,s.x,o.x,r),$b(a.y,s.y,o.y,r)}function ov(a){return a.animationValues&&a.animationValues.opacityExit!==void 0}const rv={duration:.45,ease:[.4,0,.1,1]},ef=a=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(a),tf=ef("applewebkit/")&&!ef("chrome/")?Math.round:Ot;function nf(a){a.min=tf(a.min),a.max=tf(a.max)}function lv(a){nf(a.x),nf(a.y)}function f_(a,s,o){return a==="position"||a==="preserve-aspect"&&!jM(Pb(s),Pb(o),.2)}function cv(a){var s;return a!==a.root&&((s=a.scroll)==null?void 0:s.wasRoot)}const uv=b_({attachResizeListener:(a,s)=>Ii(a,"resize",s),measureScroll:()=>{var a,s;return{x:document.documentElement.scrollLeft||((a=document.body)==null?void 0:a.scrollLeft)||0,y:document.documentElement.scrollTop||((s=document.body)==null?void 0:s.scrollTop)||0}},checkIsScrollRoot:()=>!0}),ku={current:void 0},__=b_({measureScroll:a=>({x:a.scrollLeft,y:a.scrollTop}),defaultParent:()=>{if(!ku.current){const a=new uv({});a.mount(window),a.setOptions({layoutScroll:!0}),ku.current=a}return ku.current},resetTransform:(a,s)=>{a.style.transform=s!==void 0?s:"none"},checkIsScrollRoot:a=>window.getComputedStyle(a).position==="fixed"}),qd=B.createContext({transformPagePoint:a=>a,isStatic:!1,reducedMotion:"never"});function af(a,s){if(typeof a=="function")return a(s);a!=null&&(a.current=s)}function dv(...a){return s=>{let o=!1;const r=a.map(d=>{const g=af(d,s);return!o&&typeof g=="function"&&(o=!0),g});if(o)return()=>{for(let d=0;d<r.length;d++){const g=r[d];typeof g=="function"?g():af(a[d],null)}}}}function pv(...a){return B.useCallback(dv(...a),a)}class gv extends B.Component{getSnapshotBeforeUpdate(s){const o=this.props.childRef.current;if(ur(o)&&s.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const r=o.offsetParent,d=ur(r)&&r.offsetWidth||0,g=ur(r)&&r.offsetHeight||0,p=getComputedStyle(o),b=this.props.sizeRef.current;b.height=parseFloat(p.height),b.width=parseFloat(p.width),b.top=o.offsetTop,b.left=o.offsetLeft,b.right=d-b.width-b.left,b.bottom=g-b.height-b.top,b.direction=p.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function mv({children:a,isPresent:s,anchorX:o,anchorY:r,root:d,pop:g}){var G;const p=B.useId(),b=B.useRef(null),_=B.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:h}=B.useContext(qd),f=((G=a.props)==null?void 0:G.ref)??(a==null?void 0:a.ref),k=pv(b,f);return B.useInsertionEffect(()=>{const{width:y,height:v,top:I,left:S,right:w,bottom:X,direction:H}=_.current;if(s||g===!1||!b.current||!y||!v)return;const V=H==="rtl",Y=o==="left"?V?`right: ${w}`:`left: ${S}`:V?`left: ${S}`:`right: ${w}`,z=r==="bottom"?`bottom: ${X}`:`top: ${I}`;b.current.dataset.motionPopId=p;const U=document.createElement("style");h&&(U.nonce=h);const q=d??document.head;return q.appendChild(U),U.sheet&&U.sheet.insertRule(`
          [data-motion-pop-id="${p}"] {
            position: absolute !important;
            width: ${y}px !important;
            height: ${v}px !important;
            ${Y}px !important;
            ${z}px !important;
          }
        `),()=>{var Z;(Z=b.current)==null||Z.removeAttribute("data-motion-pop-id"),q.contains(U)&&q.removeChild(U)}},[s]),c.jsx(gv,{isPresent:s,childRef:b,sizeRef:_,pop:g,children:g===!1?a:B.cloneElement(a,{ref:k})})}const hv=({children:a,initial:s,isPresent:o,onExitComplete:r,custom:d,presenceAffectsLayout:g,mode:p,anchorX:b,anchorY:_,root:h})=>{const f=dd(bv),k=B.useId();let G=!0,y=B.useMemo(()=>(G=!1,{id:k,initial:s,isPresent:o,custom:d,onExitComplete:v=>{f.set(v,!0);for(const I of f.values())if(!I)return;r&&r()},register:v=>(f.set(v,!1),()=>f.delete(v))}),[o,f,r]);return g&&G&&(y={...y}),B.useMemo(()=>{f.forEach((v,I)=>f.set(I,!1))},[o]),B.useEffect(()=>{!o&&!f.size&&r&&r()},[o]),a=c.jsx(mv,{pop:p==="popLayout",isPresent:o,anchorX:b,anchorY:_,root:h,children:a}),c.jsx(Er.Provider,{value:y,children:a})};function bv(){return new Map}function x_(a=!0){const s=B.useContext(Er);if(s===null)return[!0,null];const{isPresent:o,onExitComplete:r,register:d}=s,g=B.useId();B.useEffect(()=>{if(a)return d(g)},[a]);const p=B.useCallback(()=>a&&r&&r(g),[g,r,a]);return!o&&r?[!1,p]:[!0]}const tr=a=>a.key||"";function sf(a){const s=[];return B.Children.forEach(a,o=>{B.isValidElement(o)&&s.push(o)}),s}const fr=({children:a,custom:s,initial:o=!0,onExitComplete:r,presenceAffectsLayout:d=!0,mode:g="sync",propagate:p=!1,anchorX:b="left",anchorY:_="top",root:h})=>{const[f,k]=x_(p),G=B.useMemo(()=>sf(a),[a]),y=p&&!f?[]:G.map(tr),v=B.useRef(!0),I=B.useRef(G),S=dd(()=>new Map),w=B.useRef(new Set),[X,H]=B.useState(G),[V,Y]=B.useState(G);Xf(()=>{v.current=!1,I.current=G;for(let q=0;q<V.length;q++){const Z=tr(V[q]);y.includes(Z)?(S.delete(Z),w.current.delete(Z)):S.get(Z)!==!0&&S.set(Z,!1)}},[V,y.length,y.join("-")]);const z=[];if(G!==X){let q=[...G];for(let Z=0;Z<V.length;Z++){const K=V[Z],te=tr(K);y.includes(te)||(q.splice(Z,0,K),z.push(K))}return g==="wait"&&z.length&&(q=z),Y(sf(q)),H(G),null}const{forceRender:U}=B.useContext(ud);return c.jsx(c.Fragment,{children:V.map(q=>{const Z=tr(q),K=p&&!f?!1:G===V||y.includes(Z),te=()=>{if(w.current.has(Z))return;if(S.has(Z))w.current.add(Z),S.set(Z,!0);else return;let le=!0;S.forEach(Re=>{Re||(le=!1)}),le&&(U==null||U(),Y(I.current),p&&(k==null||k()),r&&r())};return c.jsx(hv,{isPresent:K,initial:!v.current||o?void 0:!1,custom:s,presenceAffectsLayout:d,mode:g,root:h,onExitComplete:K?void 0:te,anchorX:b,anchorY:_,children:q},Z)})})},k_=B.createContext({strict:!1}),of={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let rf=!1;function fv(){if(rf)return;const a={};for(const s in of)a[s]={isEnabled:o=>of[s].some(r=>!!o[r])};Y0(a),rf=!0}function G_(){return fv(),tM()}function _v(a){const s=G_();for(const o in a)s[o]={...s[o],...a[o]};Y0(s)}const xv=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function jr(a){return a.startsWith("while")||a.startsWith("drag")&&a!=="draggable"||a.startsWith("layout")||a.startsWith("onTap")||a.startsWith("onPan")||a.startsWith("onLayout")||xv.has(a)}let y_=a=>!jr(a);function kv(a){typeof a=="function"&&(y_=s=>s.startsWith("on")?!jr(s):a(s))}try{kv(require("@emotion/is-prop-valid").default)}catch{}function Gv(a,s,o){const r={};for(const d in a)d==="values"&&typeof a.values=="object"||it(a[d])||(y_(d)||o===!0&&jr(d)||!s&&!jr(d)||a.draggable&&d.startsWith("onDrag"))&&(r[d]=a[d]);return r}const qr=B.createContext({});function yv(a,s){if(wr(a)){const{initial:o,animate:r}=a;return{initial:o===!1||Si(o)?o:void 0,animate:Si(r)?r:void 0}}return a.inherit!==!1?s:{}}function Mv(a){const{initial:s,animate:o}=yv(a,B.useContext(qr));return B.useMemo(()=>({initial:s,animate:o}),[lf(s),lf(o)])}function lf(a){return Array.isArray(a)?a.join(" "):a}const Cd=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function M_(a,s,o){for(const r in s)!it(s[r])&&!n_(r,o)&&(a[r]=s[r])}function vv({transformTemplate:a},s){return B.useMemo(()=>{const o=Cd();return Dd(o,s,a),Object.assign({},o.vars,o.style)},[s])}function Av(a,s){const o=a.style||{},r={};return M_(r,o,a),Object.assign(r,vv(a,s)),r}function Tv(a,s){const o={},r=Av(a,s);return a.drag&&a.dragListener!==!1&&(o.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=a.drag===!0?"none":`pan-${a.drag==="x"?"y":"x"}`),a.tabIndex===void 0&&(a.onTap||a.onTapStart||a.whileTap)&&(o.tabIndex=0),o.style=r,o}const v_=()=>({...Cd(),attrs:{}});function Sv(a,s,o,r){const d=B.useMemo(()=>{const g=v_();return a_(g,s,i_(r),a.transformTemplate,a.style),{...g.attrs,style:{...g.style}}},[s]);if(a.style){const g={};M_(g,a.style,a),d.style={...g,...d.style}}return d}const Iv=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Rd(a){return typeof a!="string"||a.includes("-")?!1:!!(Iv.indexOf(a)>-1||/[A-Z]/u.test(a))}function jv(a,s,o,{latestValues:r},d,g=!1,p){const _=(p??Rd(a)?Sv:Tv)(s,r,d,a),h=Gv(s,typeof a=="string",g),f=a!==B.Fragment?{...h,..._,ref:o}:{},{children:k}=s,G=B.useMemo(()=>it(k)?k.get():k,[k]);return B.createElement(a,{...f,children:G})}function Vv({scrapeMotionValuesFromProps:a,createRenderState:s},o,r,d){return{latestValues:Ev(o,r,d,a),renderState:s()}}function Ev(a,s,o,r){const d={},g=r(a,{});for(const G in g)d[G]=hr(g[G]);let{initial:p,animate:b}=a;const _=wr(a),h=X0(a);s&&h&&!_&&a.inherit!==!1&&(p===void 0&&(p=s.initial),b===void 0&&(b=s.animate));let f=o?o.initial===!1:!1;f=f||p===!1;const k=f?b:p;if(k&&typeof k!="boolean"&&!Dr(k)){const G=Array.isArray(k)?k:[k];for(let y=0;y<G.length;y++){const v=Td(a,G[y]);if(v){const{transitionEnd:I,transition:S,...w}=v;for(const X in w){let H=w[X];if(Array.isArray(H)){const V=f?H.length-1:0;H=H[V]}H!==null&&(d[X]=H)}for(const X in I)d[X]=I[X]}}}return d}const A_=a=>(s,o)=>{const r=B.useContext(qr),d=B.useContext(Er),g=()=>Vv(a,s,r,d);return o?g():dd(g)},Nv=A_({scrapeMotionValuesFromProps:wd,createRenderState:Cd}),Dv=A_({scrapeMotionValuesFromProps:o_,createRenderState:v_}),wv=Symbol.for("motionComponentSymbol");function qv(a,s,o){const r=B.useRef(o);B.useInsertionEffect(()=>{r.current=o});const d=B.useRef(null);return B.useCallback(g=>{var b;g&&((b=a.onMount)==null||b.call(a,g)),s&&(g?s.mount(g):s.unmount());const p=r.current;if(typeof p=="function")if(g){const _=p(g);typeof _=="function"&&(d.current=_)}else d.current?(d.current(),d.current=null):p(g);else p&&(p.current=g)},[s])}const T_=B.createContext({});function ps(a){return a&&typeof a=="object"&&Object.prototype.hasOwnProperty.call(a,"current")}function Cv(a,s,o,r,d,g){var H,V;const{visualElement:p}=B.useContext(qr),b=B.useContext(k_),_=B.useContext(Er),h=B.useContext(qd),f=h.reducedMotion,k=h.skipAnimations,G=B.useRef(null),y=B.useRef(!1);r=r||b.renderer,!G.current&&r&&(G.current=r(a,{visualState:s,parent:p,props:o,presenceContext:_,blockInitialAnimation:_?_.initial===!1:!1,reducedMotionConfig:f,skipAnimations:k,isSVG:g}),y.current&&G.current&&(G.current.manuallyAnimateOnMount=!0));const v=G.current,I=B.useContext(T_);v&&!v.projection&&d&&(v.type==="html"||v.type==="svg")&&Rv(G.current,o,d,I);const S=B.useRef(!1);B.useInsertionEffect(()=>{v&&S.current&&v.update(o,_)});const w=o[q0],X=B.useRef(!!w&&typeof window<"u"&&!((H=window.MotionHandoffIsComplete)!=null&&H.call(window,w))&&((V=window.MotionHasOptimisedAnimation)==null?void 0:V.call(window,w)));return Xf(()=>{y.current=!0,v&&(S.current=!0,window.MotionIsMounted=!0,v.updateFeatures(),v.scheduleRenderMicrotask(),X.current&&v.animationState&&v.animationState.animateChanges())}),B.useEffect(()=>{v&&(!X.current&&v.animationState&&v.animationState.animateChanges(),X.current&&(queueMicrotask(()=>{var Y;(Y=window.MotionHandoffMarkAsComplete)==null||Y.call(window,w)}),X.current=!1),v.enteringChildren=void 0)}),v}function Rv(a,s,o,r){const{layoutId:d,layout:g,drag:p,dragConstraints:b,layoutScroll:_,layoutRoot:h,layoutAnchor:f,layoutCrossfade:k}=s;a.projection=new o(a.latestValues,s["data-framer-portal-id"]?void 0:S_(a.parent)),a.projection.setOptions({layoutId:d,layout:g,alwaysMeasureLayout:!!p||b&&ps(b),visualElement:a,animationType:typeof g=="string"?g:"both",initialPromotionConfig:r,crossfade:k,layoutScroll:_,layoutRoot:h,layoutAnchor:f})}function S_(a){if(a)return a.options.allowProjection!==!1?a.projection:S_(a.parent)}function Gu(a,{forwardMotionProps:s=!1,type:o}={},r,d){r&&_v(r);const g=o?o==="svg":Rd(a),p=g?Dv:Nv;function b(h,f){let k;const G={...B.useContext(qd),...h,layoutId:Hv(h)},{isStatic:y}=G,v=Mv(h),I=p(h,y);if(!y&&typeof window<"u"){Lv();const S=zv(G);k=S.MeasureLayout,v.visualElement=Cv(a,I,G,d,S.ProjectionNode,g)}return c.jsxs(qr.Provider,{value:v,children:[k&&v.visualElement?c.jsx(k,{visualElement:v.visualElement,...G}):null,jv(a,h,qv(I,v.visualElement,f),I,y,s,g)]})}b.displayName=`motion.${typeof a=="string"?a:`create(${a.displayName??a.name??""})`}`;const _=B.forwardRef(b);return _[wv]=a,_}function Hv({layoutId:a}){const s=B.useContext(ud).id;return s&&a!==void 0?s+"-"+a:a}function Lv(a,s){B.useContext(k_).strict}function zv(a){const s=G_(),{drag:o,layout:r}=s;if(!o&&!r)return{};const d={...o,...r};return{MeasureLayout:o!=null&&o.isEnabled(a)||r!=null&&r.isEnabled(a)?d.MeasureLayout:void 0,ProjectionNode:d.ProjectionNode}}function Ov(a,s){if(typeof Proxy>"u")return Gu;const o=new Map,r=(g,p)=>Gu(g,p,a,s),d=(g,p)=>r(g,p);return new Proxy(d,{get:(g,p)=>p==="create"?r:(o.has(p)||o.set(p,Gu(p,void 0,a,s)),o.get(p))})}const Bv=(a,s)=>s.isSVG??Rd(a)?new _M(s):new pM(s,{allowProjection:a!==B.Fragment});class Uv extends $n{constructor(s){super(s),s.animationState||(s.animationState=MM(s))}updateAnimationControlsSubscription(){const{animate:s}=this.node.getProps();Dr(s)&&(this.unmountControls=s.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:s}=this.node.getProps(),{animate:o}=this.node.prevProps||{};s!==o&&this.updateAnimationControlsSubscription()}unmount(){var s;this.node.animationState.reset(),(s=this.unmountControls)==null||s.call(this)}}let Pv=0;class Fv extends $n{constructor(){super(...arguments),this.id=Pv++,this.isExitComplete=!1}update(){var g;if(!this.node.presenceContext)return;const{isPresent:s,onExitComplete:o}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||s===r)return;if(s&&r===!1){if(this.isExitComplete){const{initial:p,custom:b}=this.node.getProps();if(typeof p=="string"||typeof p=="object"&&p!==null&&!Array.isArray(p)){const _=Aa(this.node,p,b);if(_){const{transition:h,transitionEnd:f,...k}=_;for(const G in k)(g=this.node.getValue(G))==null||g.jump(k[G])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const d=this.node.animationState.setActive("exit",!s);o&&!s&&d.then(()=>{this.isExitComplete=!0,o(this.id)})}mount(){const{register:s,onExitComplete:o}=this.node.presenceContext||{};o&&o(this.id),s&&(this.unmount=s(this.id))}unmount(){}}const Kv={animation:{Feature:Uv},exit:{Feature:Fv}};function Ni(a){return{point:{x:a.pageX,y:a.pageY}}}const Xv=a=>s=>jd(s)&&a(s,Ni(s));function Mi(a,s,o,r){return Ii(a,s,Xv(o),r)}const I_=({current:a})=>a?a.ownerDocument.defaultView:null,cf=(a,s)=>Math.abs(a-s);function Zv(a,s){const o=cf(a.x,s.x),r=cf(a.y,s.y);return Math.sqrt(o**2+r**2)}const uf=new Set(["auto","scroll"]);class j_{constructor(s,o,{transformPagePoint:r,contextWindow:d=window,dragSnapToOrigin:g=!1,distanceThreshold:p=3,element:b}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=y=>{this.handleScroll(y.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=nr(this.lastRawMoveEventInfo,this.transformPagePoint));const y=yu(this.lastMoveEventInfo,this.history),v=this.startEvent!==null,I=Zv(y.offset,{x:0,y:0})>=this.distanceThreshold;if(!v&&!I)return;const{point:S}=y,{timestamp:w}=st;this.history.push({...S,timestamp:w});const{onStart:X,onMove:H}=this.handlers;v||(X&&X(this.lastMoveEvent,y),this.startEvent=this.lastMoveEvent),H&&H(this.lastMoveEvent,y)},this.handlePointerMove=(y,v)=>{this.lastMoveEvent=y,this.lastRawMoveEventInfo=v,this.lastMoveEventInfo=nr(v,this.transformPagePoint),Ee.update(this.updatePoint,!0)},this.handlePointerUp=(y,v)=>{this.end();const{onEnd:I,onSessionEnd:S,resumeAnimation:w}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&w&&w(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const X=yu(y.type==="pointercancel"?this.lastMoveEventInfo:nr(v,this.transformPagePoint),this.history);this.startEvent&&I&&I(y,X),S&&S(y,X)},!jd(s))return;this.dragSnapToOrigin=g,this.handlers=o,this.transformPagePoint=r,this.distanceThreshold=p,this.contextWindow=d||window;const _=Ni(s),h=nr(_,this.transformPagePoint),{point:f}=h,{timestamp:k}=st;this.history=[{...f,timestamp:k}];const{onSessionStart:G}=o;G&&G(s,yu(h,this.history)),this.removeListeners=ji(Mi(this.contextWindow,"pointermove",this.handlePointerMove),Mi(this.contextWindow,"pointerup",this.handlePointerUp),Mi(this.contextWindow,"pointercancel",this.handlePointerUp)),b&&this.startScrollTracking(b)}startScrollTracking(s){let o=s.parentElement;for(;o;){const r=getComputedStyle(o);(uf.has(r.overflowX)||uf.has(r.overflowY))&&this.scrollPositions.set(o,{x:o.scrollLeft,y:o.scrollTop}),o=o.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(s){const o=this.scrollPositions.get(s);if(!o)return;const r=s===window,d=r?{x:window.scrollX,y:window.scrollY}:{x:s.scrollLeft,y:s.scrollTop},g={x:d.x-o.x,y:d.y-o.y};g.x===0&&g.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=g.x,this.lastMoveEventInfo.point.y+=g.y):this.history.length>0&&(this.history[0].x-=g.x,this.history[0].y-=g.y),this.scrollPositions.set(s,d),Ee.update(this.updatePoint,!0))}updateHandlers(s){this.handlers=s}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Wn(this.updatePoint)}}function nr(a,s){return s?{point:s(a.point)}:a}function df(a,s){return{x:a.x-s.x,y:a.y-s.y}}function yu({point:a},s){return{point:a,delta:df(a,V_(s)),offset:df(a,Yv(s)),velocity:Qv(s,.1)}}function Yv(a){return a[0]}function V_(a){return a[a.length-1]}function Qv(a,s){if(a.length<2)return{x:0,y:0};let o=a.length-1,r=null;const d=V_(a);for(;o>=0&&(r=a[o],!(d.timestamp-r.timestamp>jt(s)));)o--;if(!r)return{x:0,y:0};r===a[0]&&a.length>2&&d.timestamp-r.timestamp>jt(s)*2&&(r=a[1]);const g=zt(d.timestamp-r.timestamp);if(g===0)return{x:0,y:0};const p={x:(d.x-r.x)/g,y:(d.y-r.y)/g};return p.x===1/0&&(p.x=0),p.y===1/0&&(p.y=0),p}function Jv(a,{min:s,max:o},r){return s!==void 0&&a<s?a=r?Ve(s,a,r.min):Math.max(a,s):o!==void 0&&a>o&&(a=r?Ve(o,a,r.max):Math.min(a,o)),a}function pf(a,s,o){return{min:s!==void 0?a.min+s:void 0,max:o!==void 0?a.max+o-(a.max-a.min):void 0}}function Wv(a,{top:s,left:o,bottom:r,right:d}){return{x:pf(a.x,o,d),y:pf(a.y,s,r)}}function gf(a,s){let o=s.min-a.min,r=s.max-a.max;return s.max-s.min<a.max-a.min&&([o,r]=[r,o]),{min:o,max:r}}function $v(a,s){return{x:gf(a.x,s.x),y:gf(a.y,s.y)}}function eA(a,s){let o=.5;const r=ut(a),d=ut(s);return d>r?o=Ai(s.min,s.max-r,a.min):r>d&&(o=Ai(a.min,a.max-d,s.min)),nn(0,1,o)}function tA(a,s){const o={};return s.min!==void 0&&(o.min=s.min-a.min),s.max!==void 0&&(o.max=s.max-a.min),o}const od=.35;function nA(a=od){return a===!1?a=0:a===!0&&(a=od),{x:mf(a,"left","right"),y:mf(a,"top","bottom")}}function mf(a,s,o){return{min:hf(a,s),max:hf(a,o)}}function hf(a,s){return typeof a=="number"?a:a[s]||0}const aA=new WeakMap;class sA{constructor(s){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Qe(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=s}start(s,{snapToCursor:o=!1,distanceThreshold:r}={}){const{presenceContext:d}=this.visualElement;if(d&&d.isPresent===!1)return;const g=k=>{o&&this.snapToCursor(Ni(k).point),this.stopAnimation()},p=(k,G)=>{const{drag:y,dragPropagation:v,onDragStart:I}=this.getProps();if(y&&!v&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Ey(y),!this.openDragLock))return;this.latestPointerEvent=k,this.latestPanInfo=G,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Wt(w=>{let X=this.getAxisMotionValue(w).get()||0;if(tn.test(X)){const{projection:H}=this.visualElement;if(H&&H.layout){const V=H.layout.layoutBox[w];V&&(X=ut(V)*(parseFloat(X)/100))}}this.originPoint[w]=X}),I&&Ee.update(()=>I(k,G),!1,!0),Qu(this.visualElement,"transform");const{animationState:S}=this.visualElement;S&&S.setActive("whileDrag",!0)},b=(k,G)=>{this.latestPointerEvent=k,this.latestPanInfo=G;const{dragPropagation:y,dragDirectionLock:v,onDirectionLock:I,onDrag:S}=this.getProps();if(!y&&!this.openDragLock)return;const{offset:w}=G;if(v&&this.currentDirection===null){this.currentDirection=oA(w),this.currentDirection!==null&&I&&I(this.currentDirection);return}this.updateAxis("x",G.point,w),this.updateAxis("y",G.point,w),this.visualElement.render(),S&&Ee.update(()=>S(k,G),!1,!0)},_=(k,G)=>{this.latestPointerEvent=k,this.latestPanInfo=G,this.stop(k,G),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>{const{dragSnapToOrigin:k}=this.getProps();(k||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:f}=this.getProps();this.panSession=new j_(s,{onSessionStart:g,onStart:p,onMove:b,onSessionEnd:_,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:f,distanceThreshold:r,contextWindow:I_(this.visualElement),element:this.visualElement.current})}stop(s,o){const r=s||this.latestPointerEvent,d=o||this.latestPanInfo,g=this.isDragging;if(this.cancel(),!g||!d||!r)return;const{velocity:p}=d;this.startAnimation(p);const{onDragEnd:b}=this.getProps();b&&Ee.postRender(()=>b(r,d))}cancel(){this.isDragging=!1;const{projection:s,animationState:o}=this.visualElement;s&&(s.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),o&&o.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(s,o,r){const{drag:d}=this.getProps();if(!r||!ar(s,d,this.currentDirection))return;const g=this.getAxisMotionValue(s);let p=this.originPoint[s]+r[s];this.constraints&&this.constraints[s]&&(p=Jv(p,this.constraints[s],this.elastic[s])),g.set(p)}resolveConstraints(){var g;const{dragConstraints:s,dragElastic:o}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(g=this.visualElement.projection)==null?void 0:g.layout,d=this.constraints;s&&ps(s)?this.constraints||(this.constraints=this.resolveRefConstraints()):s&&r?this.constraints=Wv(r.layoutBox,s):this.constraints=!1,this.elastic=nA(o),d!==this.constraints&&!ps(s)&&r&&this.constraints&&!this.hasMutatedConstraints&&Wt(p=>{this.constraints!==!1&&this.getAxisMotionValue(p)&&(this.constraints[p]=tA(r.layoutBox[p],this.constraints[p]))})}resolveRefConstraints(){const{dragConstraints:s,onMeasureDragConstraints:o}=this.getProps();if(!s||!ps(s))return!1;const r=s.current,{projection:d}=this.visualElement;if(!d||!d.layout)return!1;d.root&&(d.root.scroll=void 0,d.root.updateScroll());const g=oM(r,d.root,this.visualElement.getTransformPagePoint());let p=$v(d.layout.layoutBox,g);if(o){const b=o(aM(p));this.hasMutatedConstraints=!!b,b&&(p=J0(b))}return p}startAnimation(s){const{drag:o,dragMomentum:r,dragElastic:d,dragTransition:g,dragSnapToOrigin:p,onDragTransitionEnd:b}=this.getProps(),_=this.constraints||{},h=Wt(f=>{if(!ar(f,o,this.currentDirection))return;let k=_&&_[f]||{};(p===!0||p===f)&&(k={min:0,max:0});const G=d?200:1e6,y=d?40:1e7,v={type:"inertia",velocity:r?s[f]:0,bounceStiffness:G,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...g,...k};return this.startAxisValueAnimation(f,v)});return Promise.all(h).then(b)}startAxisValueAnimation(s,o){const r=this.getAxisMotionValue(s);return Qu(this.visualElement,s),r.start(Ad(s,r,0,o,this.visualElement,!1))}stopAnimation(){Wt(s=>this.getAxisMotionValue(s).stop())}getAxisMotionValue(s){const o=`_drag${s.toUpperCase()}`,d=this.visualElement.getProps()[o];return d||this.visualElement.getValue(s,this.visualElement.latestValues[s]??0)}snapToCursor(s){Wt(o=>{const{drag:r}=this.getProps();if(!ar(o,r,this.currentDirection))return;const{projection:d}=this.visualElement,g=this.getAxisMotionValue(o);if(d&&d.layout){const{min:p,max:b}=d.layout.layoutBox[o],_=g.get()||0;g.set(s[o]-Ve(p,b,.5)+_)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:s,dragConstraints:o}=this.getProps(),{projection:r}=this.visualElement;if(!ps(o)||!r||!this.constraints)return;this.stopAnimation();const d={x:0,y:0};Wt(p=>{const b=this.getAxisMotionValue(p);if(b&&this.constraints!==!1){const _=b.get();d[p]=eA({min:_,max:_},this.constraints[p])}});const{transformTemplate:g}=this.visualElement.getProps();this.visualElement.current.style.transform=g?g({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),Wt(p=>{if(!ar(p,s,null))return;const b=this.getAxisMotionValue(p),{min:_,max:h}=this.constraints[p];b.set(Ve(_,h,d[p]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;aA.set(this.visualElement,this);const s=this.visualElement.current,o=Mi(s,"pointerdown",h=>{const{drag:f,dragListener:k=!0}=this.getProps(),G=h.target,y=G!==s&&Ry(G);f&&k&&!y&&this.start(h)});let r;const d=()=>{const{dragConstraints:h}=this.getProps();ps(h)&&h.current&&(this.constraints=this.resolveRefConstraints(),r||(r=iA(s,h.current,()=>this.scalePositionWithinConstraints())))},{projection:g}=this.visualElement,p=g.addEventListener("measure",d);g&&!g.layout&&(g.root&&g.root.updateScroll(),g.updateLayout()),Ee.read(d);const b=Ii(window,"resize",()=>this.scalePositionWithinConstraints()),_=g.addEventListener("didUpdate",(({delta:h,hasLayoutChanged:f})=>{this.isDragging&&f&&(Wt(k=>{const G=this.getAxisMotionValue(k);G&&(this.originPoint[k]+=h[k].translate,G.set(G.get()+h[k].translate))}),this.visualElement.render())}));return()=>{b(),o(),p(),_&&_(),r&&r()}}getProps(){const s=this.visualElement.getProps(),{drag:o=!1,dragDirectionLock:r=!1,dragPropagation:d=!1,dragConstraints:g=!1,dragElastic:p=od,dragMomentum:b=!0}=s;return{...s,drag:o,dragDirectionLock:r,dragPropagation:d,dragConstraints:g,dragElastic:p,dragMomentum:b}}}function bf(a){let s=!0;return()=>{if(s){s=!1;return}a()}}function iA(a,s,o){const r=yb(a,bf(o)),d=yb(s,bf(o));return()=>{r(),d()}}function ar(a,s,o){return(s===!0||s===a)&&(o===null||o===a)}function oA(a,s=10){let o=null;return Math.abs(a.y)>s?o="y":Math.abs(a.x)>s&&(o="x"),o}class rA extends $n{constructor(s){super(s),this.removeGroupControls=Ot,this.removeListeners=Ot,this.controls=new sA(s)}mount(){const{dragControls:s}=this.node.getProps();s&&(this.removeGroupControls=s.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ot}update(){const{dragControls:s}=this.node.getProps(),{dragControls:o}=this.node.prevProps||{};s!==o&&(this.removeGroupControls(),s&&(this.removeGroupControls=s.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Mu=a=>(s,o)=>{a&&Ee.update(()=>a(s,o),!1,!0)};class lA extends $n{constructor(){super(...arguments),this.removePointerDownListener=Ot}onPointerDown(s){this.session=new j_(s,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:I_(this.node)})}createPanHandlers(){const{onPanSessionStart:s,onPanStart:o,onPan:r,onPanEnd:d}=this.node.getProps();return{onSessionStart:Mu(s),onStart:Mu(o),onMove:Mu(r),onEnd:(g,p)=>{delete this.session,d&&Ee.postRender(()=>d(g,p))}}}mount(){this.removePointerDownListener=Mi(this.node.current,"pointerdown",s=>this.onPointerDown(s))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let vu=!1;class cA extends B.Component{componentDidMount(){const{visualElement:s,layoutGroup:o,switchLayoutGroup:r,layoutId:d}=this.props,{projection:g}=s;g&&(o.group&&o.group.add(g),r&&r.register&&d&&r.register(g),vu&&g.root.didUpdate(),g.addEventListener("animationComplete",()=>{this.safeToRemove()}),g.setOptions({...g.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),br.hasEverUpdated=!0}getSnapshotBeforeUpdate(s){const{layoutDependency:o,visualElement:r,drag:d,isPresent:g}=this.props,{projection:p}=r;return p&&(p.isPresent=g,s.layoutDependency!==o&&p.setOptions({...p.options,layoutDependency:o}),vu=!0,d||s.layoutDependency!==o||o===void 0||s.isPresent!==g?p.willUpdate():this.safeToRemove(),s.isPresent!==g&&(g?p.promote():p.relegate()||Ee.postRender(()=>{const b=p.getStack();(!b||!b.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:s,layoutAnchor:o}=this.props,{projection:r}=s;r&&(r.options.layoutAnchor=o,r.root.didUpdate(),Id.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:s,layoutGroup:o,switchLayoutGroup:r}=this.props,{projection:d}=s;vu=!0,d&&(d.scheduleCheckAfterUnmount(),o&&o.group&&o.group.remove(d),r&&r.deregister&&r.deregister(d))}safeToRemove(){const{safeToRemove:s}=this.props;s&&s()}render(){return null}}function E_(a){const[s,o]=x_(),r=B.useContext(ud);return c.jsx(cA,{...a,layoutGroup:r,switchLayoutGroup:B.useContext(T_),isPresent:s,safeToRemove:o})}const uA={pan:{Feature:lA},drag:{Feature:rA,ProjectionNode:__,MeasureLayout:E_}};function ff(a,s,o){const{props:r}=a;a.animationState&&r.whileHover&&a.animationState.setActive("whileHover",o==="Start");const d="onHover"+o,g=r[d];g&&Ee.postRender(()=>g(s,Ni(s)))}class dA extends $n{mount(){const{current:s}=this.node;s&&(this.unmount=Dy(s,(o,r)=>(ff(this.node,r,"Start"),d=>ff(this.node,d,"End"))))}unmount(){}}class pA extends $n{constructor(){super(...arguments),this.isActive=!1}onFocus(){let s=!1;try{s=this.node.current.matches(":focus-visible")}catch{s=!0}!s||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ji(Ii(this.node.current,"focus",()=>this.onFocus()),Ii(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function _f(a,s,o){const{props:r}=a;if(a.current instanceof HTMLButtonElement&&a.current.disabled)return;a.animationState&&r.whileTap&&a.animationState.setActive("whileTap",o==="Start");const d="onTap"+(o==="End"?"":o),g=r[d];g&&Ee.postRender(()=>g(s,Ni(s)))}class gA extends $n{mount(){const{current:s}=this.node;if(!s)return;const{globalTapTarget:o,propagate:r}=this.node.props;this.unmount=Ly(s,(d,g)=>(_f(this.node,g,"Start"),(p,{success:b})=>_f(this.node,p,b?"End":"Cancel")),{useGlobalTarget:o,stopPropagation:(r==null?void 0:r.tap)===!1})}unmount(){}}const rd=new WeakMap,Au=new WeakMap,mA=a=>{const s=rd.get(a.target);s&&s(a)},hA=a=>{a.forEach(mA)};function bA({root:a,...s}){const o=a||document;Au.has(o)||Au.set(o,{});const r=Au.get(o),d=JSON.stringify(s);return r[d]||(r[d]=new IntersectionObserver(hA,{root:a,...s})),r[d]}function fA(a,s,o){const r=bA(s);return rd.set(a,o),r.observe(a),()=>{rd.delete(a),r.unobserve(a)}}const _A={some:0,all:1};class xA extends $n{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var _;(_=this.stopObserver)==null||_.call(this);const{viewport:s={}}=this.node.getProps(),{root:o,margin:r,amount:d="some",once:g}=s,p={root:o?o.current:void 0,rootMargin:r,threshold:typeof d=="number"?d:_A[d]},b=h=>{const{isIntersecting:f}=h;if(this.isInView===f||(this.isInView=f,g&&!f&&this.hasEnteredView))return;f&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",f);const{onViewportEnter:k,onViewportLeave:G}=this.node.getProps(),y=f?k:G;y&&y(h)};this.stopObserver=fA(this.node.current,p,b)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:s,prevProps:o}=this.node;["amount","margin","root"].some(kA(s,o))&&this.startObserver()}unmount(){var s;(s=this.stopObserver)==null||s.call(this),this.hasEnteredView=!1,this.isInView=!1}}function kA({viewport:a={}},{viewport:s={}}={}){return o=>a[o]!==s[o]}const GA={inView:{Feature:xA},tap:{Feature:gA},focus:{Feature:pA},hover:{Feature:dA}},yA={layout:{ProjectionNode:__,MeasureLayout:E_}},MA={...Kv,...GA,...uA,...yA},$t=Ov(MA,Bv),N_=B.createContext(void 0),vA={LATAM:{"nav.inicio":"Inicio","nav.novedades":"Novedades","nav.servicios":"Servicios","nav.evo":"Evo","nav.otros":"Otros códigos","nav.guia":"Guía","nav.tutoriales":"Tutoriales","nav.descargas":"Descargas","nav.guia_script":"Guía Script MGG","home.search_placeholder":"Nombre o código...","home.sort_az":"Nombre A-Z","home.sort_za":"Nombre Z-A","home.sort_code_asc":"Código Asc.","home.sort_code_desc":"Código Desc.","home.sort_hp_desc":"M. Mayor Vida","home.sort_atk_desc":"M. Mayor Ataque","home.sort_spd_desc":"M. Mayor Velocidad","home.show":"Mostrar","home.hide":"Ocultar","home.filtered":"Filtrados","home.total_base":"Base Total","services.title":"Servicios Exclusivos","services.subtitle":"Potencia tu cuenta con nuestros servicios especializados de Mutants: Genetic Gladiators.","services.buy":"Adquirir","services.payment_methods":"Métodos de Pago","services.contact_us":"Contáctanos","region.latam":"LATAM","region.usd":"USD","tip.label":"Tip:","tip.text":"Para asegurar la sincronización de datos, se recomienda acceder vía Facebook o limpiar cookies/caché del navegador (Modo Incógnito).","footer.renovated":"Versión renovada","footer.nav":"Navegación","footer.legal":"Información Legal","footer.terms":"Términos y Condiciones","footer.rights":"© 2026 Smith Luque. Todos los derechos reservados.","footer.desc":"Base de datos de códigos de Mutantes de MGG para Game Guardian. Aquí hay contenido para aprender y recursos para usar.","whatsapp.title":"Grupo de WhatsApp","whatsapp.desc":"Únete para ayuda, consejos y enseñanza dentro de la comunidad.","whatsapp.btn":"Unirme al grupo","stats.mutants":"Mutantes","stats.version":"Versión","home.main_database":"Base principal","home.main_desc":"Lista completa de mutantes con búsqueda rápida, filtros por genes y carga automática desde tu archivo de códigos.","home.featured_mutants":"Novedades Destacadas","home.explore_catalog":"Explorar Lista de Mutantes","home.reset_engine":"Reiniciar Motor","home.genetic_config":"Configuración Genética","home.search_engine":"Motor de Búsqueda","home.sort_filters":"Filtros de Orden","home.no_results":"No se encontraron mutantes con esos filtros.","home.hidden_results":"Resultados ocultos.","home.active":"Activos","home.total":"Total","gene.dominant":"Dominante","gene.active":"Activo","gene.inactive":"Inactivo","layout.by_author":"Por Smith Luque","layout.select_language":"SELECCIONAR IDIOMA","layout.active_support":"Grupo Activo","mutant.verified":"Verificado","mutant.extract_code":"Extraer Código","home.load_more_rem":"Cargar más ({rem} restantes)","layout.color_theme":"Color de Diseño","home.single_gene_only":"Solo 1 Gen (Monogénicos)","home.all_genes":"Todos los genes","home.announcement_title":"Anuncio Importante","home.announcement_desc":"Me disculpo sinceramente por haber publicado previamente algunas estadísticas con errores. El problema ya ha sido completamente solucionado con los datos correctos. Si detectas cualquier otro inconveniente o error, por favor no dudes en contactarme.","home.names_language":"Idioma de Nombres","profile.developer":"Desarrollador Full Stack","profile.founder":"Fundador de Sistema Mutodex"},USD:{"nav.inicio":"Home","nav.novedades":"News","nav.servicios":"Services","nav.evo":"Evo Calc","nav.otros":"Other Codes","nav.guia":"Guide","nav.tutoriales":"Tutorials","nav.descargas":"Downloads","nav.guia_script":"MGG Script Guide","home.search_placeholder":"Name or code...","home.sort_az":"Name A-Z","home.sort_za":"Name Z-A","home.sort_code_asc":"Code Asc.","home.sort_code_desc":"Code Desc.","home.sort_hp_desc":"M. Highest HP","home.sort_atk_desc":"M. Highest ATK","home.sort_spd_desc":"M. Highest Speed","home.show":"Show","home.hide":"Hide","home.filtered":"Filtered","home.total_base":"Total Base","services.title":"Exclusive Services","services.subtitle":"Boost your account with our specialized Mutants: Genetic Gladiators services.","services.buy":"Purchase","services.payment_methods":"Payment Methods","services.contact_us":"Contact Us","region.latam":"LATAM","region.usd":"USD","tip.label":"Tip:","tip.text":"To ensure data synchronization, it is recommended to access via Facebook or clear browser cookies/cache (Incognito Mode).","footer.renovated":"Renewed Version","footer.nav":"Navigation","footer.legal":"Legal Information","footer.terms":"Terms & Conditions","footer.rights":"© 2026 Smith Luque. All rights reserved.","footer.desc":"MGG Mutant code database for Game Guardian. Here is content to learn and resources to use.","whatsapp.title":"WhatsApp Group","whatsapp.desc":"Join for help, tips, and teaching within the community.","whatsapp.btn":"Join the group","stats.mutants":"Mutants","stats.version":"Version","home.main_database":"Main Database","home.main_desc":"Full mutant list with fast search, gene filters, and automatic code loading.","home.featured_mutants":"Featured New Mutants","home.explore_catalog":"Explore Mutant List","home.reset_engine":"Reset Engine","home.genetic_config":"Genetic Configuration","home.search_engine":"Search Engine","home.sort_filters":"Sort Filters","home.no_results":"No mutants found with those filters.","home.hidden_results":"Results hidden.","home.active":"Active","home.total":"Total","gene.dominant":"Dominant","gene.active":"Active","gene.inactive":"Inactive","layout.by_author":"By Smith Luque","layout.select_language":"SELECT LANGUAGE","layout.active_support":"Active Support","mutant.verified":"Verified","mutant.extract_code":"Extract Code","home.load_more_rem":"Load More ({rem} remaining)","layout.color_theme":"Design Color","home.single_gene_only":"Single Gene Only (Pure)","home.all_genes":"All Genes","home.announcement_title":"Important Announcement","home.announcement_desc":"I sincerely apologize for previously publishing some incorrect stats. The issue has now been fully resolved with correct data. If you notice any other issues, please feel free to contact me.","home.names_language":"Names Language","profile.developer":"Full Stack Developer","profile.founder":"Founder of Sistema Mutodex"},PT:{"nav.inicio":"Início","nav.novedades":"Novidades","nav.servicios":"Serviços","nav.evo":"Evo","nav.otros":"Outros códigos","nav.guia":"Guia","nav.tutoriales":"Tutoriais","nav.descargas":"Downloads","nav.guia_script":"Guia Script MGG","home.search_placeholder":"Nome ou código...","home.sort_az":"Nome A-Z","home.sort_za":"Nome Z-A","home.sort_code_asc":"Código Cresc.","home.sort_code_desc":"Código Decresc.","home.sort_hp_desc":"M. Maior Vida","home.sort_atk_desc":"M. Maior Ataque","home.sort_spd_desc":"M. Maior Velocidade","home.show":"Mostrar","home.hide":"Ocultar","home.filtered":"Filtrados","home.total_base":"Total Base","services.title":"Serviços Exclusivos","services.subtitle":"Melhore sua conta com nossos serviços especializados de Mutants: Genetic Gladiators.","services.buy":"Adquirir","services.payment_methods":"Métodos de Pagamento","services.contact_us":"Contate-nos","region.latam":"LATAM","region.usd":"USD","tip.label":"Dica:","tip.text":"Para garantir a sincronização de dados, recomenda-se acessar via Facebook ou limpar os cookies/cache do navegador (Modo Incógnito).","footer.renovated":"Versão Renovada","footer.nav":"Navegação","footer.legal":"Informação Legal","footer.terms":"Termos e Condições","footer.rights":"© 2026 Smith Luque. Todos os direitos reservados.","footer.desc":"Banco de dados de códigos de Mutants MGG para Game Guardian. Conteúdos para aprendizagem e recursos.","whatsapp.title":"Grupo de WhatsApp","whatsapp.desc":"Entre para obter ajuda, dicas e suporte na comunidade.","whatsapp.btn":"Entrar no grupo","stats.mutants":"Mutantes","stats.version":"Versão","home.main_database":"Base Principal","home.main_desc":"Lista completa de mutantes com busca rápida, filtros de genes e carregamento automático a partir do seu arquivo de códigos.","home.featured_mutants":"Novidades em Destaque","home.explore_catalog":"Explorar Lista de Mutantes","home.reset_engine":"Reiniciar Mecanismo","home.genetic_config":"Configuração Genética","home.search_engine":"Mecanismo de Busca","home.sort_filters":"Filtros de Ordenação","home.no_results":"Nenhum mutante encontrado com esses filtros.","home.hidden_results":"Resultados ocultos.","home.active":"Ativos","home.total":"Total","gene.dominant":"Dominante","gene.active":"Ativo","gene.inactive":"Inativo","layout.by_author":"Por Smith Luque","layout.select_language":"SELECIONAR IDIOMA","layout.active_support":"Grupo Ativo","mutant.verified":"Verificado","mutant.extract_code":"Extrair Código","home.load_more_rem":"Carregar mais ({rem} restantes)","layout.color_theme":"Cor do Design","home.single_gene_only":"Apenas 1 Gene (Monogênicos)","home.all_genes":"Todos os genes","home.announcement_title":"Anúncio Importante","home.announcement_desc":"Peço desculpas sinceras por postar anteriormente algumas estatísticas com erros. O problema já foi totalmente resolvido com os dados corretos. Se notar qualquer outro problema, entre em contato comigo.","home.names_language":"Idioma dos Nomes","profile.developer":"Desenvolvedor Full Stack","profile.founder":"Fundador do Sistema Mutodex"},FR:{"nav.inicio":"Accueil","nav.novedades":"Actualités","nav.servicios":"Services","nav.evo":"Evos","nav.otros":"Autres codes","nav.guia":"Guide","nav.tutoriales":"Tutoriels","nav.descargas":"Téléchargements","nav.guia_script":"Guide Script MGG","home.search_placeholder":"Nom ou code...","home.sort_az":"Nom A-Z","home.sort_za":"Nom Z-A","home.sort_code_asc":"Code Asc.","home.sort_code_desc":"Code Desc.","home.sort_hp_desc":"M. Plus de vie","home.sort_atk_desc":"M. Plus d'attaque","home.sort_spd_desc":"M. Plus de vitesse","home.show":"Afficher","home.hide":"Masquer","home.filtered":"Filtrés","home.total_base":"Base totale","services.title":"Services exclusifs","services.subtitle":"Améliorez votre compte avec nos services spécialisés Mutants: Genetic Gladiators.","services.buy":"Acheter","services.payment_methods":"Modes de paiement","services.contact_us":"Contactez-nous","region.latam":"LATAM","region.usd":"USD","tip.label":"Conseil:","tip.text":"Pour garantir la synchronisation des données, il est recommandé de se connecter via Facebook ou d'effacer les cookies/cache du navigateur (Mode Incognito).","footer.renovated":"Version rénovée","footer.nav":"Navigation","footer.legal":"Informations légales","footer.terms":"Conditions générales","footer.rights":"© 2026 Smith Luque. Tous droits réservés.","footer.desc":"Base de données des codes Mutants MGG pour Game Guardian. Tutoriels d'apprentissage et ressources à utiliser.","whatsapp.title":"Groupe WhatsApp","whatsapp.desc":"Rejoignez-nous pour obtenir de l'aide, des conseils et échanger avec la communauté.","whatsapp.btn":"Rejoindre le groupe","stats.mutants":"Mutants","stats.version":"Version","home.main_database":"Base principale","home.main_desc":"Liste complète des mutants avec recherche rapide, filtres de gènes et chargement automatique depuis votre fichier de codes.","home.featured_mutants":"Nouveautés en Vedette","home.explore_catalog":"Explorer la Liste des Mutants","home.reset_engine":"Réinitialiser le moteur","home.genetic_config":"Configuration Génétique","home.search_engine":"Moteur de Recherche","home.sort_filters":"Filtres de Tri","home.no_results":"Aucun mutant trouvé avec ces filtres.","home.hidden_results":"Résultats masqués.","home.active":"Actifs","home.total":"Total","gene.dominant":"Dominant","gene.active":"Actif","gene.inactive":"Inactif","layout.by_author":"Par Smith Luque","layout.select_language":"SÉLECTIONNER LA LANGUE","layout.active_support":"Groupe Actif","mutant.verified":"Vérifié","mutant.extract_code":"Extraire le Code","home.load_more_rem":"Charger plus ({rem} restants)","layout.color_theme":"Couleur du Design","home.single_gene_only":"Un seul gène (Monogénique)","home.all_genes":"Tous les gènes","home.announcement_title":"Annonce Importante","home.announcement_desc":"Je m'excuse sincèrement pour avoir publié précédemment des statistiques erronées. Le problème a été entièrement résolu avec les données correctes. Si vous remarquez un autre problème, n'hésitez pas à me contacter.","home.names_language":"Langue de Noms","profile.developer":"Développeur Full Stack","profile.founder":"Fondateur de Système Mutodex"},DE:{"nav.inicio":"Startseite","nav.novedades":"Neuigkeiten","nav.servicios":"Dienste","nav.evo":"Evo","nav.otros":"Andere Codes","nav.guia":"Leitfaden","nav.tutoriales":"Tutorials","nav.descargas":"Downloads","nav.guia_script":"MGG Script-Guide","home.search_placeholder":"Name oder Code...","home.sort_az":"Name A-Z","home.sort_za":"Name Z-A","home.sort_code_asc":"Code Aufst.","home.sort_code_desc":"Code Abst.","home.sort_hp_desc":"M. Höchste LP","home.sort_atk_desc":"M. Höchster Angriff","home.sort_spd_desc":"M. Höchste Geschwindigkeit","home.show":"Anzeigen","home.hide":"Ausblenden","home.filtered":"Gefiltert","home.total_base":"Gesamtbasis","services.title":"Exklusive Dienste","services.subtitle":"Verbessern Sie Ihr Konto mit unseren spezialisierten Mutants: Genetic Gladiators-Diensten.","services.buy":"Erwerben","services.payment_methods":"Zahlungsarten","services.contact_us":"Kontakt","region.latam":"LATAM","region.usd":"USD","tip.label":"Tipp:","tip.text":"Um die Datensynchronisation sicherzustellen, wird empfohlen, sich über Facebook anzumelden oder Browser-Cookies/-Cache zu löschen (Inkognito-Modus).","footer.renovated":"Renovierte Version","footer.nav":"Navigation","footer.legal":"Rechtliche Hinweise","footer.terms":"AGB","footer.rights":"© 2026 Smith Luque. Alle Rechte vorbehalten.","footer.desc":"MGG Mutanten-Code-Datenbank für Game Guardian. Tutorials zum Lernen und Ressourcen zur Nutzung.","whatsapp.title":"WhatsApp-Gruppe","whatsapp.desc":"Treten Sie bei für Hilfe, Tipps und Austausch in der Gesellschaft.","whatsapp.btn":"Gruppe beitreten","stats.mutants":"Mutanten","stats.version":"Version","home.main_database":"Haupt-Datenbank","home.main_desc":"Vollständige Mutantenliste mit Schnellsuche, Genfiltern und automatischem Laden von Codes.","home.featured_mutants":"Hervorgehobene Neuigkeiten","home.explore_catalog":"Mutantenliste erkunden","home.reset_engine":"Zuchtrechner zurücksetzen","home.genetic_config":"Genetische Konfiguration","home.search_engine":"Suchmaschine","home.sort_filters":"Sortierfilter","home.no_results":"Keine Mutanten mit diesen Filtern gefunden.","home.hidden_results":"Ergebnisse ausgeblendet.","home.active":"Aktiv","home.total":"Gesamt","gene.dominant":"Dominant","gene.active":"Aktiv","gene.inactive":"Inaktiv","layout.by_author":"Von Smith Luque","layout.select_language":"SPRACHE AUSWÄHLEN","layout.active_support":"Aktive Gruppe","mutant.verified":"Verifiziert","mutant.extract_code":"Code Extrahieren","home.load_more_rem":"Mehr laden ({rem} verbleibend)","layout.color_theme":"Design Farbe","home.single_gene_only":"Nur 1 Gen (Monogenisch)","home.all_genes":"Alle Gene","home.announcement_title":"Wichtige Ankündigung","home.announcement_desc":"Ich entschuldige mich aufrichtig dafür, dass ich zuvor fehlerhafte Statistiken veröffentlicht habe. Das Problem wurde mit den korrekten Daten vollständig behoben. Wenn Sie weitere Fehler bemerken, kontaktieren Sie mich bitte.","home.names_language":"Sprache der Namen","profile.developer":"Full Stack Entwickler","profile.founder":"Gründer von Sistema Mutodex"}},AA={blue:{brand:"#2563eb",brand2:"#3b82f6"},green:{brand:"#14532d",brand2:"#15803d"},red:{brand:"#dc2626",brand2:"#ef4444"},pink:{brand:"#db2777",brand2:"#ec4899"},purple:{brand:"#7c3aed",brand2:"#8b5cf6"},white:{brand:"#d1d5db",brand2:"#ffffff"}},TA=({children:a})=>{const[s,o]=B.useState(()=>localStorage.getItem("user-color-theme")||"blue"),r=G=>{localStorage.setItem("user-color-theme",G),o(G)};B.useEffect(()=>{const G=AA[s];G&&(document.documentElement.style.setProperty("--blue-brand",G.brand),document.documentElement.style.setProperty("--blue-brand-2",G.brand2))},[s]);const[d,g]=B.useState(()=>{const G=localStorage.getItem("user-region"),y=localStorage.getItem("user-country-code"),v=!!localStorage.getItem("user-manual-force");let I=G||"LATAM";y==="PE"&&(I="LATAM");const S=y?p(y):1;return{region:I,countryCode:y||null,multiplier:S,isManual:v,detectedCountry:null}});B.useEffect(()=>{const G=localStorage.getItem("user-region"),y=localStorage.getItem("user-country-code"),v=!!localStorage.getItem("user-manual-force");y==="PE"&&G==="USD"&&!v&&(localStorage.setItem("user-region","LATAM"),g(I=>({...I,region:"LATAM"})))},[]);function p(G){const y=G.toUpperCase(),v=Kf.find(I=>I.id.toUpperCase()===y);if(v)return v.rate;for(const[I,S]of Object.entries(Ak))if(S.includes(y))return parseFloat(I);return tb.includes(y)?1.5:1}const b=async()=>{var G;try{const I=(G=(await(await fetch("https://ipapi.co/json/")).json()).country_code)==null?void 0:G.toUpperCase();if(!I)return;const S=tb.includes(I),w=I==="PE",X=p(I),H=localStorage.getItem("user-region");let V=S?"USD":"LATAM";H&&(w&&H==="USD"&&!localStorage.getItem("user-manual-force")?V="LATAM":V=H),g(Y=>({...Y,region:V,countryCode:Y.isManual?Y.countryCode:I,detectedCountry:I,multiplier:Y.isManual?Y.multiplier:X}))}catch(y){console.error("IP Detection failed:",y)}};B.useEffect(()=>{b()},[]);const _=G=>{localStorage.setItem("user-region",G),localStorage.setItem("user-manual-force","true"),g(y=>({...y,region:G,isManual:!0}))},h=G=>{const y=G.toUpperCase(),v=p(y),S=["PE","MX","AR","CL","CO","BO","VE","EC","UY","PY","PA","PR","CR","HN","SV","NI","GT","DO","ES"].includes(y)?"LATAM":"USD";localStorage.setItem("user-region",S),localStorage.setItem("user-country-code",y),localStorage.setItem("user-manual-force","true"),g(w=>({...w,region:S,countryCode:y,multiplier:v,isManual:!0}))},f=()=>{localStorage.removeItem("user-region"),localStorage.removeItem("user-country-code"),localStorage.removeItem("user-manual-force"),g(G=>({...G,isManual:!1})),b()},k=(G,y)=>{let v=vA[d.region][G]||G;return y&&Object.entries(y).forEach(([I,S])=>{v=v.replace(`{${I}}`,String(S))}),v};return c.jsx(N_.Provider,{value:{...d,colorTheme:s,setColorTheme:r,setRegion:_,setCountry:h,resetSelection:f,translate:k},children:a})},_t=()=>{const a=B.useContext(N_);if(a===void 0)throw new Error("useRegion must be used within a RegionProvider");return a},xf={"/":wu,"/novedades":Of,"/servicios":xi,"/evo":yk,"/otros":Vu,"/guia":Eu,"/tutoriales":lr,"/descargas":Hf},sr={LATAM:{flag:"🇪🇸",label:"Español"},USD:{flag:"🇺🇸",label:"English"},PT:{flag:"🇵🇹",label:"Português"},FR:{flag:"🇫🇷",label:"Français"},DE:{flag:"🇩🇪",label:"Deutsch"}};function SA({children:a,currentPath:s,onNavigate:o,isOnline:r}){var V,Y;const[d,g]=B.useState(!1),[p,b]=B.useState(!1),{region:_,setRegion:h,countryCode:f,setCountry:k,translate:G,colorTheme:y,setColorTheme:v}=_t(),I=_!=="LATAM"&&_!=="PT"?"https://chat.whatsapp.com/IdBIvXWUPNjDLcPmBvkp1B":cd,S=z=>{o(z),g(!1),window.scrollTo({top:0,behavior:"smooth"})},w="text-blue-brand-2",X="from-blue-brand to-blue-brand-2";return c.jsxs("div",{className:"min-h-screen",children:[c.jsx("div",{className:"grid-overlay"}),c.jsxs("header",{className:"site-header sticky top-0 z-50 transition-all duration-300",children:[c.jsx("div",{className:"absolute inset-0 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.4)] bg-[#050a14]/60"}),c.jsxs("div",{className:"mx-auto px-4 lg:px-8 header-inner relative flex items-center justify-between min-h-[64px] max-w-[1400px]",children:[c.jsxs("div",{className:"brand flex items-center gap-3 cursor-pointer group",onClick:()=>S("/"),children:[c.jsxs("div",{className:"relative",children:[c.jsx("div",{className:"absolute inset-0 blur-md opacity-0 group-hover:opacity-40 transition-opacity bg-blue-brand"}),c.jsx("div",{className:`brand-logo w-9 h-9 md:w-10 md:h-10 relative flex items-center justify-center rounded-lg md:rounded-xl bg-gradient-to-br ${X} overflow-hidden shadow-lg group-hover:scale-105 transition-transform shrink-0 border border-white/20`,children:c.jsx("img",{src:"https://github.com/luqueSmith/MGG/blob/main/img/Logo_mgg.png?raw=true",alt:"Logo MGG",className:"w-full h-full object-cover"})})]}),c.jsxs("div",{className:"flex flex-col text-left",children:[c.jsx("strong",{className:`block text-white text-[13px] md:text-[15px] font-black tracking-tight uppercase leading-none mb-0.5 group-hover:${w} transition-colors`,children:"Mutodex MGG"}),c.jsx("span",{className:`block text-[7px] md:text-[9px] ${w} uppercase tracking-[0.25em] font-black opacity-80`,children:G("layout.by_author")})]})]}),c.jsx("nav",{className:"hidden",children:lu.map(z=>{const U=xf[z.path]||wu,q=s===z.path,Z=z.key;return c.jsxs("button",{onClick:()=>S(z.path),className:`flex items-center gap-2 px-3 py-2 rounded-xl text-[11px] font-black uppercase tracking-wider border transition-all duration-300 relative group/btn ${q?"bg-blue-brand/20 border-blue-brand text-white shadow-[0_2px_15px_rgba(37,99,235,0.25)]":"text-slate-400 border-transparent hover:bg-white/5 hover:text-white"}`,children:[c.jsx(U,{size:14,className:`${q?"text-blue-brand-2 animate-pulse":"text-slate-400 group-hover/btn:scale-110 transition-transform"}`}),c.jsx("span",{children:G(Z)})]},z.path)})}),c.jsxs("div",{className:"flex items-center gap-2 md:gap-3",children:[c.jsxs("div",{className:"hidden",children:[c.jsxs("span",{className:"text-[10px] text-slate-400 font-black uppercase tracking-wider mr-1",children:[G("layout.color_theme"),":"]}),["blue","green","red","pink","purple","white"].map(z=>{const U=y===z,q={blue:"bg-[#2563eb]",green:"bg-[#14532d]",red:"bg-[#dc2626]",pink:"bg-[#db2777]",purple:"bg-[#7c3aed]",white:"bg-white"};return c.jsx("button",{onClick:()=>v(z),title:z.toUpperCase(),className:`w-4.5 h-4.5 rounded-full ${q[z]} transition-all duration-300 relative shrink-0 cursor-pointer ${U?"scale-115 ring-2 ring-offset-2 ring-offset-[#050a14] ring-white shadow-lg":"opacity-60 hover:opacity-100 hover:scale-105"}`,children:U&&c.jsx("span",{className:"absolute inset-0 m-auto w-1 h-1 rounded-full bg-[#050a14]"})},z)})]}),c.jsxs("div",{className:"relative",children:[c.jsxs("button",{onClick:()=>b(!p),className:"flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-[10px] md:text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer",children:[c.jsx("span",{className:"text-sm md:text-base",children:((V=sr[_])==null?void 0:V.flag)||"🇪🇸"}),c.jsx("span",{className:"hidden sm:inline",children:((Y=sr[_])==null?void 0:Y.label)||"Español"}),c.jsx("span",{className:"text-slate-500 text-[8px] opacity-60",children:"▼"})]}),c.jsx(fr,{children:p&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>b(!1)}),c.jsxs($t.div,{initial:{opacity:0,y:10,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.95},transition:{duration:.15},className:"absolute right-0 mt-2 w-48 rounded-2xl bg-[#091224] border border-white/10 shadow-2xl p-2 z-50 flex flex-col gap-1",children:[c.jsx("span",{className:"text-[8px] text-slate-500 uppercase font-black tracking-widest block px-3 py-1.5 border-b border-white/5 mb-1",children:G("layout.select_language")}),Object.keys(sr).map(z=>{const U=sr[z],q=_===z;return c.jsxs("button",{onClick:()=>{h(z),b(!1)},className:`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-left text-[11px] font-black uppercase transition-all cursor-pointer ${q?"bg-blue-brand/20 text-white border border-blue-brand/35 shadow-[0_2px_10px_rgba(37,99,235,0.2)]":"text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"}`,children:[c.jsx("span",{className:"text-sm leading-none",children:U.flag}),c.jsx("span",{children:U.label})]},z)})]})]})})]}),c.jsxs("button",{className:"w-11 h-11 flex flex-col items-center justify-center gap-1.5 border border-white/10 rounded-xl text-white bg-white/5 active:scale-95 transition-all relative overflow-hidden group",onClick:()=>g(!d),children:[c.jsx("div",{className:"absolute inset-0 bg-blue-brand opacity-0 group-active:opacity-10 transition-opacity"}),c.jsx(fr,{mode:"wait",children:d?c.jsx($t.div,{initial:{rotate:-90,opacity:0,scale:.5},animate:{rotate:0,opacity:1,scale:1},exit:{rotate:90,opacity:0,scale:.5},children:c.jsx($h,{size:22,className:"text-blue-brand-2"})},"x"):c.jsxs($t.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"flex flex-col gap-1.25 items-center justify-center",children:[c.jsx("span",{className:"w-5 h-0.5 bg-white rounded-full block"}),c.jsx("span",{className:"w-5 h-0.5 bg-blue-brand-2 rounded-full block"}),c.jsx("span",{className:"w-3 h-0.5 bg-white rounded-full block self-end"})]},"menu")})]})]})]})]}),c.jsx(fr,{children:d&&c.jsxs(c.Fragment,{children:[c.jsx($t.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>g(!1),className:"fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm"}),c.jsxs($t.nav,{initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{type:"spring",damping:25,stiffness:200},className:"fixed top-0 right-0 bottom-0 w-[280px] md:w-[340px] z-[60] bg-[#050a14] border-l border-white/10 flex flex-col shadow-2xl shadow-blue-brand/20",children:[c.jsx("div",{className:"absolute inset-0 opacity-5 pointer-events-none bg-grid-slate-900/[0.1] bg-[bottom_1px_center] [mask-image:linear-gradient(to_bottom,white,transparent)]"}),c.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-brand to-transparent opacity-50"}),c.jsxs("header",{className:"flex items-center justify-between p-4 border-b border-white/10 relative z-10 bg-black/40",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("div",{className:"w-12 h-12 rounded-xl overflow-hidden border border-white/10 shadow-lg shadow-blue-brand/20 bg-[#0a1224] flex items-center justify-center shrink-0",children:c.jsx("img",{src:"https://github.com/luqueSmith/MGG/blob/main/img/Logo_mgg.png?raw=true",alt:"",className:"w-10 h-10 object-contain"})}),c.jsxs("div",{className:"flex flex-col gap-0.5",children:[c.jsx("strong",{className:"text-[13px] font-black uppercase text-white tracking-tight leading-none",children:"Sistema Mutodex"}),c.jsx("span",{className:"text-[8px] text-blue-brand-2 font-black uppercase tracking-[0.2em] opacity-80 leading-none mt-0.5",children:"v2.1.2 Build 550"})]})]}),c.jsx("button",{onClick:()=>g(!1),className:"w-10 h-10 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 text-white/50 hover:text-white transition-colors active:scale-90",children:c.jsx($h,{size:18})})]}),c.jsxs("div",{className:"flex-1 overflow-y-auto p-5 flex flex-col gap-3.5 relative z-10 scrollbar-none",children:[c.jsx("div",{className:"space-y-2.5 pb-2",children:lu.map((z,U)=>{const q=xf[z.path]||wu,Z=s===z.path,K=z.key;return c.jsxs($t.button,{initial:{opacity:0,x:25},animate:{opacity:1,x:0},transition:{delay:U*.04,type:"spring",stiffness:150},onClick:()=>S(z.path),className:`flex items-center gap-4 w-full p-3.5 rounded-2xl text-[13px] md:text-sm font-black uppercase tracking-wider transition-all relative group border ${Z?"bg-blue-brand/20 text-white border-blue-brand shadow-[0_4px_25px_rgba(37,99,235,0.25)] scale-[1.02]":"bg-white/[0.03] text-slate-300 border-white/5 hover:bg-white/8 hover:text-white hover:scale-[1.01]"}`,children:[c.jsx("div",{className:`p-2 rounded-xl transition-all ${Z?"bg-blue-brand text-white shadow-md":"bg-white/5 group-hover:bg-white/10 group-hover:scale-105"}`,children:c.jsx(q,{size:18})}),c.jsx("span",{className:"relative z-10 font-extrabold tracking-wide",children:G(K)}),Z&&c.jsx("div",{className:"ml-auto w-1.5 h-4 bg-blue-brand-2 rounded-full shadow-[0_0_12px_#3b82f6]"})]},z.path)})}),c.jsxs("div",{className:"border-t border-white/10 pt-5 mt-3",children:[c.jsxs("div",{className:"flex items-center gap-2 mb-3.5 px-2",children:[c.jsx(Bf,{size:13,className:"text-blue-brand-2 animate-pulse"}),c.jsx("span",{className:"text-[10px] text-slate-400 font-black uppercase tracking-[0.15em] leading-none",children:G("layout.color_theme")})]}),c.jsx("div",{className:"bg-white/[0.02] border border-white/5 rounded-2xl p-2 grid grid-cols-2 gap-2",children:["blue","green","red","pink","purple","white"].map(z=>{const U=y===z,Z={blue:{label:"BLUE",dotBg:"bg-[#2563eb]",activeStyle:"border-[#2563eb]/50 text-blue-400 bg-[#2563eb]/10 shadow-[0_0_12px_rgba(37,99,235,0.35)] scale-[1.02]",inactiveStyle:"border-white/5 bg-white/[0.02] text-slate-400 hover:text-white",glowBg:"bg-[#2563eb]"},green:{label:"GREEN",dotBg:"bg-[#15803d]",activeStyle:"border-[#15803d]/60 text-green-400 bg-[#15803d]/15 shadow-[0_0_12px_rgba(21,128,61,0.4)] scale-[1.02]",inactiveStyle:"border-white/5 bg-white/[0.02] text-slate-400 hover:text-white",glowBg:"bg-[#15803d]"},red:{label:"RED",dotBg:"bg-[#dc2626]",activeStyle:"border-[#dc2626]/50 text-red-400 bg-[#dc2626]/10 shadow-[0_0_12px_rgba(220,38,38,0.4)] scale-[1.02]",inactiveStyle:"border-white/5 bg-white/[0.02] text-slate-400 hover:text-white",glowBg:"bg-[#dc2626]"},pink:{label:"PINK",dotBg:"bg-[#db2777]",activeStyle:"border-[#db2777]/50 text-pink-400 bg-[#db2777]/10 shadow-[0_0_12px_rgba(219,39,119,0.35)] scale-[1.02]",inactiveStyle:"border-white/5 bg-white/[0.02] text-slate-400 hover:text-white",glowBg:"bg-[#db2777]"},purple:{label:"PURPLE",dotBg:"bg-[#7c3aed]",activeStyle:"border-[#7c3aed]/50 text-purple-400 bg-[#7c3aed]/10 shadow-[0_0_12px_rgba(124,58,237,0.35)] scale-[1.02]",inactiveStyle:"border-white/5 bg-white/[0.02] text-slate-400 hover:text-white",glowBg:"bg-[#7c3aed]"},white:{label:"WHITE",dotBg:"bg-white",activeStyle:"border-white/30 text-white bg-white/10 shadow-[0_0_12px_rgba(255,255,255,0.25)] scale-[1.02]",inactiveStyle:"border-white/5 bg-white/[0.02] text-slate-400 hover:text-white",glowBg:"bg-white"}}[z];return c.jsxs("button",{onClick:()=>v(z),className:`flex items-center gap-2.5 w-full py-3 px-3 rounded-[14px] text-[10px] font-black uppercase tracking-wider transition-all duration-300 border active:scale-95 cursor-pointer relative group ${U?Z.activeStyle:Z.inactiveStyle}`,children:[c.jsxs("div",{className:"relative flex items-center justify-center shrink-0 w-4 h-4",children:[U&&c.jsx($t.div,{layoutId:`dot-glow-${z}`,className:`absolute -inset-0.5 rounded-full blur-sm opacity-50 ${Z.glowBg}`}),c.jsx("div",{className:`w-3.5 h-3.5 rounded-full ${Z.dotBg} border border-white/15 relative z-10 transition-transform group-hover:scale-110 shadow-inner`})]}),c.jsx("span",{className:`font-black relative z-10 transition-colors ${U?"text-white":"text-slate-400 group-hover:text-white"}`,children:Z.label}),U&&c.jsx("div",{className:"ml-auto flex items-center shrink-0",children:c.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${Z.glowBg} animate-pulse relative`})})]},z)})})]}),c.jsx("div",{className:"border-t border-white/10 pt-5 mt-3",children:c.jsxs("a",{href:I,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-between p-4 rounded-2xl bg-[#25d366]/10 border border-[#25d366]/30 text-white hover:bg-[#25d366]/15 transition-all group scale-[1] active:scale-95",children:[c.jsxs("div",{className:"flex items-center gap-3.5",children:[c.jsx("div",{className:"p-2.5 rounded-xl bg-[#25d366] text-white shadow-[0_0_12px_rgba(37,211,102,0.35)] shrink-0",children:c.jsx(_r,{size:16})}),c.jsxs("div",{className:"flex flex-col text-left",children:[c.jsx("span",{className:"text-[11px] font-black uppercase text-[#25d366] tracking-wider leading-none mb-1",children:G("layout.active_support")}),c.jsx("span",{className:"text-[10px] text-slate-300 font-bold leading-tight",children:G("whatsapp.title")})]})]}),c.jsx("div",{className:"flex items-center justify-center w-6 h-6 rounded-full bg-[#25d366]/15 group-hover:translate-x-0.5 transition-transform shrink-0",children:c.jsx("span",{className:"text-[#25d366] text-xs font-black",children:"→"})})]})})]}),c.jsx("div",{className:"p-4 border-t border-white/10 relative z-10 bg-black/50",children:c.jsxs("div",{className:"flex flex-col gap-2",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("span",{className:"text-[7px] text-slate-600 uppercase font-black tracking-widest leading-none",children:"Powered by"}),c.jsx("strong",{className:"text-blue-brand-2 text-[9px] uppercase font-black tracking-wider leading-none",children:"Smith Luque"})]}),c.jsx("div",{className:"w-full h-0.5 bg-white/5 rounded-full overflow-hidden",children:c.jsx($t.div,{initial:{width:0},animate:{width:"100%"},transition:{duration:1.5,ease:"easeInOut"},className:"h-full bg-blue-brand"})})]})})]})]})}),c.jsx("main",{className:"app-shell pb-20 pt-4 lg:pt-6",children:c.jsxs("div",{className:"container mx-auto px-4 max-w-[1180px]",children:[c.jsxs("section",{className:"panel mb-6 !p-0 overflow-hidden flex flex-col lg:flex-row items-stretch border transition-all duration-500 bg-blue-brand/5 border-blue-brand/20",children:[c.jsxs("div",{className:"flex items-center gap-6 px-5 py-3 border-b lg:border-b-0 lg:border-r border-white/5 bg-black/20 shrink-0",children:[c.jsxs("div",{className:"flex flex-col",children:[c.jsx("span",{className:`text-[10px] font-black uppercase tracking-widest leading-none mb-1 ${w}`,children:G("stats.mutants")}),c.jsx("strong",{className:"text-white text-sm font-black",children:"550+"})]}),c.jsxs("div",{className:"flex flex-col border-l border-white/10 pl-4",children:[c.jsx("span",{className:`text-[10px] font-black uppercase tracking-widest leading-none mb-1 ${w}`,children:G("stats.version")}),c.jsx("strong",{className:"text-white/80 text-sm font-black",children:"2.1.2"})]})]}),c.jsxs("div",{className:"flex-1 flex items-center gap-3 px-5 py-3 min-h-[50px]",children:[c.jsx("div",{className:"w-2 h-2 rounded-full animate-pulse shrink-0 bg-blue-brand mt-0.5 self-start md:self-center"}),c.jsxs("p",{className:"text-[10px] md:text-xs text-slate-300 font-bold m-0 italic leading-relaxed",children:[c.jsx("span",{className:`${w} uppercase mr-2 opacity-70 whitespace-nowrap`,children:G("tip.label")}),G("tip.text")]})]}),c.jsx("div",{className:"hidden xl:flex items-center gap-2 px-5 py-3 bg-black/10 shrink-0",children:c.jsxs("a",{href:I,target:"_blank",rel:"noopener noreferrer",className:"text-[10px] font-black uppercase flex items-center gap-2 hover:brightness-125 transition-all text-green-brand",children:[c.jsx("div",{className:"w-1.5 h-1.5 rounded-full animate-ping bg-green-brand"}),G("layout.active_support")]})})]}),a,c.jsx("section",{className:"panel mt-[18px] transition-all duration-500",children:c.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3.5",children:[c.jsxs("div",{children:[c.jsx("h3",{className:"m-0 mb-1.5 text-lg font-bold",children:G("whatsapp.title")}),c.jsx("p",{className:"text-muted m-0 text-sm",children:G("whatsapp.desc")})]}),c.jsxs("a",{className:"btn px-6 btn-primary",target:"_blank",rel:"noopener noreferrer",href:I,children:[c.jsx(_r,{size:18}),c.jsx("span",{children:G("whatsapp.btn")})]})]})})]})}),c.jsx("footer",{className:"site-footer border-t border-line bg-black/35 py-11",children:c.jsxs("div",{className:"container mx-auto px-4 max-w-[1180px] grid lg:grid-cols-[1.2fr_1fr_0.8fr] gap-6",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"brand flex items-center gap-3.5 mb-3",children:[c.jsx("div",{className:`brand-logo w-11 h-11 flex items-center justify-center rounded-[14px] bg-gradient-to-br ${X} overflow-hidden shadow-lg`,children:c.jsx("img",{src:"https://github.com/luqueSmith/MGG/blob/main/img/Logo_mgg.png?raw=true",alt:"Logo MGG",className:"w-full h-full object-cover"})}),c.jsxs("div",{children:[c.jsx("strong",{className:"block text-white uppercase tracking-tight",children:"Mutodex MGG"}),c.jsx("span",{className:`block text-[11px] ${w} uppercase tracking-[0.22em] font-bold`,children:G("footer.renovated")})]})]}),c.jsx("p",{className:"text-muted text-sm",children:G("footer.desc")})]}),c.jsxs("div",{children:[c.jsx("div",{className:"kv-label mb-3",children:G("footer.nav")}),c.jsx("div",{className:"grid gap-2",children:lu.map(z=>c.jsx("button",{onClick:()=>S(z.path),className:`text-slate-300 hover:text-white text-sm text-left flex items-center gap-2 transition-colors ${s===z.path?w:""}`,children:G(z.key)},z.path))})]}),c.jsxs("div",{children:[c.jsx("div",{className:"kv-label mb-1.5",children:G("footer.legal")}),c.jsxs("div",{className:"flex flex-col gap-2",children:[c.jsx("button",{onClick:()=>S("/terminos"),className:"text-slate-400 hover:text-white text-xs text-left transition-colors",children:G("footer.terms")}),c.jsx("p",{className:"text-muted text-[11px] m-0 leading-relaxed mt-2",children:G("footer.rights")})]})]})]})})]})}const IA=`1. Robot
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
`,jA=`141. El Fontanero
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
`,VA=`281. Asaylan
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
`,EA=`421. Oculys
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
 */const ir={vida:"https://pokradex.org/MutantsGG/assets/icon_hp.png",velocidad:"https://pokradex.org/MutantsGG/assets/icon_speed.png"};function kf(a){const s=a.split("|").map(b=>b.trim()),o=s[0]||"",r=s.find(b=>b.toLowerCase().includes("triple:")),d=r?r.toLowerCase().includes("sí"):o.toLowerCase().includes("x3"),g=s.find(b=>b.toLowerCase().includes("icono:")),p=g?g.replace(/icono:/i,"").trim():"";return{valor:o,es_triple:d,icono:p}}function NA(a){const s=a.split("|").map(g=>g.trim()),o=s[0]||"",r=s.find(g=>g.toLowerCase().includes("icono:")),d=r?r.replace(/icono:/i,"").trim():"";return{valor:o,icono:d}}const DA=["a_01","a_02","aa_01","aa_02","ab_01","ab_02","ab_03","ac_01","ac_02","ac_03","ad_01","ad_02","ae_01","ae_02","af_01","af_02","b_01","b_02","b_03","ba_01","ba_02","bb_01","bb_02","bc_01","bc_02","bd_01","bd_02","be_01","be_02","be_03","bf_01","bf_02","c_01","c_02","ca_01","ca_02","ca_03","cb_01","cb_02","cc_01","cc_02","cd_01","cd_02","cd_03","ce_01","ce_03","cf_01","cf_02","d_01","da_01","da_02","db_01","db_02","db_03","dc_01","dc_02","dc_03","dd_01","dd_02","de_01","de_02","df_01","df_02","e_01","ea_01","ea_02","ea_03","eb_01","eb_02","eb_03","ec_01","ec_02","ed_01","ed_02","ee_01","ee_02","ee_03","ef_01","ef_02","ef_03","f_01","f_03","fa_01","fa_02","fb_01","fb_02","fb_03","fc_01","fc_02","fd_01","fd_02","fd_03","fe_01","fe_02","ff_01","ff_02","fc_03","cb_03","ba_03","ff_03","bb_03","de_03","da_03","bf_03","cd_04","dc_04","aa_03","d_03","ec_03","bc_03","ad_03","af_04","ae_03","fb_04","bd_03","cf_04","ce_02","dd_03","cc_03","df_03","ed_03","af_03","bc_04","db_04","fa_03","fe_04","fe_03","a_03","cf_03","de_04","ba_04","cb_04","fd_04","fc_04","fa_04","bf_04","fe_05","ca_04","df_04","ed_04","ac_04","eb_04","de_05","bf_05","c_03","ec_04","ef_04","ff_04","ad_04","cc_04","ab_04","ce_04","bd_99","bb_04","aa_04","ae_04","cb_05","af_05","da_04","bd_04","fc_05","ee_04","dd_04","be_04","ea_04","ef_05","df_99","fb_05","eb_05","ca_05","ac_05","ab_05","aa_05","fa_05","fe_99","ce_05","e_03","cc_05","da_05","df_05","db_05","bc_05","dc_05","ed_05","ec_05","fd_05","ec_06","ff_05","be_05","ad_05","bd_05","dd_05","da_06","cf_05","bb_05","cf_06","cd_05","ea_05","af_06","ae_05","ee_05","ba_05","ce_06","fb_06","bc_06","fd_06","dc_06","ed_06","fa_06","bf_06","ad_06","cd_06","db_06","ac_06","fe_06","eb_06","ea_06","be_06","b_04","ab_06","ef_06","fc_06","df_06","cb_06","dd_06","de_06","ca_06","ff_06","bd_06","af_07","cf_07","ae_06","ba_06","ec_07","ed_07","bd_07","db_07","da_07","fe_07","ab_07","df_07","bf_07","ee_06","aa_06","ce_07","cc_06","cc_07","fc_07","ba_07","f_04","fd_07","ef_07","ad_07","ac_07","ca_07","fb_07","fa_07","de_07","cb_07","bc_07","cd_07","ea_07","ee_07","be_07","dd_07","eb_07","ec_08","cf_08","bc_08","ac_08","dd_08","de_08","fc_08","ae_07","db_08","af_08","fa_08","ff_07","bb_06","ef_08","da_08","cb_08","ea_08","fb_08","bf_08","ad_08","fc_09","ce_08","ba_08","ae_08","bd_08","fa_99","eb_99","cd_08","dc_07","ed_08","fd_08","ca_08","df_08","eb_08","cf_09","ad_09","dc_08","bb_07","aa_07","ac_09","bd_09","ff_08","ee_08","be_08","aa_08","ca_09","eb_09","df_09","fe_08","bb_08","ec_09","de_09","ab_08","be_09","ca_10","ea_09","cc_08","bf_09","cc_09","ae_09","cd_09","da_09","fd_09","af_09","a_05","ea_10","dd_09","fd_10","ab_09","ac_10","df_10","bc_09","af_10","bb_09","de_10","cb_09","db_09","dc_09","fe_09","ba_09","bf_10","fa_09","aa_09","cf_10","ce_09","ef_09","da_10","ee_09","ff_09","fb_10","ed_09","fb_09","ef_10","ed_10","cb_10","ae_10","dc_10","bd_10","fe_10","fa_10","cd_10","ad_10","fc_10","bb_10","af_99","bc_10","ce_99","dd_10","aa_10","ba_10","cc_10","db_10","ec_10","eb_10","ab_10","be_10","ce_10","eb_11","ff_10","db_11","fc_99","ee_10","ac_11","bd_11","fa_11","af_11","ce_11","ca_11","cd_11","fb_11","da_11","ed_11","aa_11","bb_11","ef_99","fd_11","cb_11","bf_11","de_11","ae_11","ec_11","dc_11","ba_11","ff_11","df_11","b_05","ee_99","fc_11","cf_11","cc_11","c_05","fb_12","ad_11","dd_11","be_11","fe_11","ac_12","ea_11","ca_99","ab_11","ee_11","ef_12","bc_11","bb_12","de_12","e_12","d_12","af_12","df_12","cf_12","cb_12","fa_12","dd_12","ef_11","fc_12","ff_12","ed_12","ca_12","db_12","ec_12","cd_12","ed_99","eb_12","fd_12","f_13","ab_12","bc_12","aa_12","fe_12","bf_12","c_13","ae_12","ce_12","be_12","fe_13","da_12","dc_12","f_12","ad_12","b_12","d_13","bd_12","aa_99","cf_13","ea_12","b_13","bf_13","dd_13","ee_12","ad_13","fa_13","da_13","ca_13","bc_13","de_13","ba_12","a_13","ef_13","cb_13","eb_13","ab_99","ae_13","cf_99","bb_13","fd_13","cc_12","bc_14","e_13","dc_13","ac_13","fe_14","fc_13","ef_14","cc_13","ff_13","ae_14","aa_13","cd_13","cb_14","ba_13","dc_14","df_13","ca_14","db_13","ae_99","ac_14","af_13","db_14","ec_13","ce_13","ea_13","ea_99","af_14","ff_14","dd_14","fd_14","fb_13","ab_13","ed_13","bd_14","da_14","c_14","ed_14","de_14","a_14","ee_13","ff_99","f_14","fb_14","bd_13","cd_14","cc_14","b_14","ab_14","be_13","ea_14","ba_14","cf_14","de_15","ad_14","ab_15","e_14","bf_14","be_15","ce_14","ea_15","d_14","dd_15"],wA={};DA.forEach((a,s)=>{wA[a.toLowerCase()]=s+1});const Vr=[];function qA(a){const s=a.match(/specimen_([a-zA-Z0-9_]+)/);if(!s)return"";const o=s[1].toLowerCase().split("_");return o.length>=2?`${o[0]}_${o[1]}`:o[0]||""}function CA(){if(Vr.length>0)return;[IA,jA,VA,EA].forEach(s=>{const o=s.split(/\r?\n/);let r=null;for(const d of o){const g=d.trim();if(!g)continue;const p=g.match(/^(\d+)\.\s*(.+)$/);if(p){r&&Gf(r),r={id:p[1],nombre:p[2],imagen:"",vida:"",velocidad:"",ataque1:"",ataque2:"",habilidad:""};continue}r&&(g.startsWith("Imagen mutante:")?r.imagen=g.replace("Imagen mutante:","").trim():g.startsWith("Vida:")?r.vida=g.replace("Vida:","").trim():g.startsWith("Velocidad:")?r.velocidad=g.replace("Velocidad:","").trim():g.startsWith("Ataque 1:")?r.ataque1=g.replace("Ataque 1:","").trim():g.startsWith("Ataque 2:")?r.ataque2=g.replace("Ataque 2:","").trim():g.startsWith("Habilidad:")&&(r.habilidad=g.replace("Habilidad:","").trim()))}r&&Gf(r)}),Vr.sort((s,o)=>parseInt(s.id,10)-parseInt(o.id,10))}function Gf(a){const s=qA(a.imagen);let o=s.split("_")[0].split("");(o.length===0||!o[0])&&(o=["n"]);const r=[...o].sort().join(""),d=xr.find(w=>w.id===o[0]),g=xr.find(w=>w.id===o[1])||d,p=(d==null?void 0:d.image)||"",b=(g==null?void 0:g.image)||p,_=kf(a.ataque1||""),h=kf(a.ataque2||""),f=NA(a.habilidad||""),k=parseFloat(a.vida.replace(/,/g,""))||0,G=parseFloat(a.velocidad)||0,y=_.valor.toLowerCase().replace(/x\s*3/g,"").replace(/,/g,"").trim(),v=parseFloat(y)||0,I=f.valor.toLowerCase().replace(/,/g,"").trim(),S=parseFloat(I)||0;Vr.push({id:a.id,nombre:a.nombre,imagen:a.imagen,vida:a.vida,velocidad:a.velocidad,ataques:[_,h],habilidad:f,tipoIcono:p,skinIcono:b,codigo:s.toUpperCase(),genes:o,sortedGenes:r,stats:{hp:k,atk:v,spd:G,def:S,hab:S}})}CA();/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function RA(a){const s=String(a||"").split("_")[0].toLowerCase().split(""),o=ds[s[0]]||ds.n,r=ds[s[1]]||ds[s[0]]||ds.n;return[o[0],r[1]||r[0]]}function HA(a,s){const[o,r]=RA(s),d=String(a||s||"?").replace(/[^A-Za-zÁÉÍÓÚÜÑ0-9 ]/g," ").split(/\s+/).filter(Boolean).slice(0,2).map(b=>b[0]).join("").toUpperCase()||"MG",g=String(a||"").replace(/&/g,"&amp;").replace(/</g,"&lt;"),p=`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${o}"/>
        <stop offset="100%" stop-color="${r}"/>
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
  </svg>`;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(p)}`}function us(a){return Number(a).toLocaleString("es-PE",{minimumFractionDigits:0,maximumFractionDigits:2})}const yf=({mutant:a})=>{var S,w,X,H;const{translate:s}=_t(),[o,r]=B.useState(!1),d=a.codigo.split("_")[0].toLowerCase().split(""),g=d.map(V=>xr.find(Y=>Y.id===V)).filter(Boolean),p=()=>{navigator.clipboard.writeText(a.codigo.toUpperCase()).catch(()=>{}),r(!0),setTimeout(()=>r(!1),2e3)},b=a.ataques[0],_=a.ataques[1]||a.ataques[0],h=(b==null?void 0:b.es_triple)||(b==null?void 0:b.valor.toLowerCase().includes("x3")),f=(_==null?void 0:_.es_triple)||(_==null?void 0:_.valor.toLowerCase().includes("x3")),k=V=>V?V.toLowerCase().replace(/\s*x3/g,"").toUpperCase():"1,500",G=a.fallbackImagen||HA(a.nombre,a.codigo),y=a.nombre.replace(/^#\d+\s*/i,"").replace(/^\d+\.\s*/i,""),v=d[0]||"n",I=ds[v]||["#64748b","#334155"];return c.jsxs(c.Fragment,{children:[c.jsxs("article",{className:"group relative flex sm:hidden w-full items-stretch bg-[#080f1d] border border-white/[0.06] hover:border-blue-500/30 rounded-[22px] overflow-hidden shadow-2xl transition-all duration-300",children:[c.jsx("div",{className:"absolute inset-0 opacity-[0.02] pointer-events-none transition-opacity duration-300 group-hover:opacity-[0.05]",style:{background:`radial-gradient(circle at center, ${I[0]}, transparent 70%)`}}),c.jsxs("div",{className:"relative w-[120px] xs:w-[135px] shrink-0 flex items-center justify-center p-3 overflow-hidden bg-gradient-to-b from-[#111d35] to-[#080f1d] border-r border-white/[0.04]",children:[c.jsx("div",{className:"absolute inset-0 opacity-25 pointer-events-none",style:{background:`radial-gradient(ellipse at 50% 0%, ${I[0]}50, transparent 75%)`}}),c.jsx("img",{className:"mutant-thumb max-w-[85%] max-h-[85%] object-contain transition-transform duration-300 group-hover:scale-105",src:a.imagen,alt:y,loading:"lazy",onError:V=>{const Y=V.currentTarget;Y.src=G,Y.onerror=null}}),c.jsx("div",{className:"absolute top-2.5 left-2.5 flex flex-row gap-2 z-20",children:g.map((V,Y)=>c.jsx("div",{className:"w-[30px] h-[30px] xs:w-[34px] xs:h-[34px] rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center",children:c.jsx("img",{src:V==null?void 0:V.image,alt:V==null?void 0:V.name,className:"w-[82%] h-[82%] object-contain text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"})},Y))})]}),c.jsxs("div",{className:"flex-1 p-3 flex flex-col justify-between gap-1.5 text-left min-w-0",children:[c.jsxs("div",{children:[c.jsx("h3",{className:"m-0 text-[13px] font-black text-white uppercase tracking-tight leading-none truncate pr-1",children:y}),c.jsxs("div",{className:"flex items-center gap-1.5 mt-1",children:[c.jsx("span",{className:"w-1.5 h-1.5 rounded-full",style:{backgroundColor:I[0],boxShadow:`0 0 6px ${I[0]}a0`}}),c.jsx("span",{className:"font-mono font-bold text-[9px] uppercase text-slate-400 tracking-wider",children:a.codigo})]})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-1 px-0.5",children:[c.jsxs("div",{className:"bg-[#0b1325]/90 border border-white/[0.03] rounded-lg py-1 px-1.5 flex items-center gap-1.5",children:[c.jsx("img",{src:ir.vida,alt:"HP",className:"w-[13px] h-[13px] object-contain shrink-0"}),c.jsxs("div",{className:"min-w-0",children:[c.jsx("span",{className:"block text-[7px] font-black uppercase tracking-wider text-slate-500 leading-none",children:"HP"}),c.jsx("span",{className:"text-white font-mono font-black text-[9.5px] leading-tight block select-all truncate",children:a.vida})]})]}),c.jsxs("div",{className:"bg-[#0b1325]/90 border border-white/[0.03] rounded-lg py-1 px-1.5 flex items-center gap-1.5",children:[c.jsx("img",{src:ir.velocidad,alt:"SPD",className:"w-[13px] h-[13px] object-contain shrink-0"}),c.jsxs("div",{className:"min-w-0",children:[c.jsx("span",{className:"block text-[7px] font-black uppercase tracking-wider text-slate-500 leading-none",children:"SPD"}),c.jsx("span",{className:"text-white font-mono font-black text-[9.5px] leading-tight block select-all truncate",children:a.velocidad})]})]}),c.jsxs("div",{className:"bg-[#0b1325]/90 border border-white/[0.03] rounded-lg py-1 px-1.5 flex items-center gap-1.5",children:[c.jsx("img",{src:(b==null?void 0:b.icono)||a.tipoIcono,alt:"AT",className:"w-[13px] h-[13px] object-contain shrink-0"}),c.jsxs("div",{className:"min-w-0 flex-1",children:[c.jsxs("span",{className:"block text-[7px] font-black uppercase tracking-wider text-slate-500 leading-none",children:["AT1",h&&c.jsx("span",{className:"text-amber-500 font-extrabold ml-0.5 text-[6px]",children:"x3"})]}),c.jsx("span",{className:`font-mono font-black text-[9.5px] leading-tight block select-all truncate ${h?"text-amber-400":"text-white"}`,children:k(b==null?void 0:b.valor)})]})]}),c.jsxs("div",{className:"bg-[#0b1325]/90 border border-white/[0.03] rounded-lg py-1 px-1.5 flex items-center gap-1.5",children:[c.jsx("img",{src:(_==null?void 0:_.icono)||a.skinIcono,alt:"AT",className:"w-[13px] h-[13px] object-contain shrink-0"}),c.jsxs("div",{className:"min-w-0 flex-1",children:[c.jsxs("span",{className:"block text-[7px] font-black uppercase tracking-wider text-slate-500 leading-none",children:["AT2",f&&c.jsx("span",{className:"text-amber-500 font-extrabold ml-0.5 text-[6px]",children:"x3"})]}),c.jsx("span",{className:`font-mono font-black text-[9.5px] leading-tight block select-all truncate ${f?"text-amber-400":"text-white"}`,children:k(_==null?void 0:_.valor)})]})]}),c.jsxs("div",{className:"col-span-2 bg-[#0b1325]/90 border border-white/[0.03] rounded-lg py-1 px-1.5 flex items-center justify-between gap-1.5",children:[c.jsxs("div",{className:"flex items-center gap-1 min-w-0",children:[c.jsx("img",{src:((S=a.habilidad)==null?void 0:S.icono)||"https://pokradex.org/MutantsGG/assets/ability_shield_big.png",alt:"DEF",className:"w-[13px] h-[13px] object-contain shrink-0"}),c.jsx("span",{className:"text-[7px] font-black uppercase tracking-wider text-slate-500 leading-none",children:"DEF / HAB"})]}),c.jsx("span",{className:"text-white font-mono font-black text-[9.5px] leading-none select-all truncate pr-1",children:((w=a.habilidad)==null?void 0:w.valor)||"1,000"})]})]}),c.jsx("button",{onClick:p,className:`w-full py-1.5 text-[8px] font-black uppercase tracking-[0.14em] transition-all flex items-center justify-center gap-1.5 border leading-none ${o?"bg-green-500/10 border-green-500/20 text-green-400":"bg-transparent border-white/[0.08] text-white active:scale-[0.97]"}`,style:{borderRadius:"100px"},children:o?c.jsxs(c.Fragment,{children:[c.jsx(vi,{size:10,className:"shrink-0 text-green-400 animate-bounce"}),c.jsx("span",{children:s("mutant.verified")})]}):c.jsxs(c.Fragment,{children:[c.jsx(Du,{size:9,className:"shrink-0 opacity-85"}),c.jsx("span",{children:s("mutant.extract_code")})]})})]})]}),c.jsxs("article",{className:"group relative hidden sm:flex flex-col w-full h-full max-w-[340px] sm:max-w-none mx-auto bg-[#080f1d] border border-white/[0.06] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-1",style:{"--dynamic-glow":I[0]},children:[c.jsx("div",{className:"absolute inset-0 rounded-[24px] sm:rounded-[28px] border border-transparent transition-colors duration-300 group-hover:border-[var(--dynamic-glow)]/40 pointer-events-none z-30",style:{content:'""'}}),c.jsx("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0",style:{background:`radial-gradient(circle at center, ${I[0]}15, transparent 75%)`}}),c.jsxs("div",{className:"relative h-32 sm:h-36 w-full flex items-center justify-center p-2 sm:p-3 overflow-hidden bg-gradient-to-b from-[#111d35] to-[#080f1d] border-b border-white/[0.04] z-10 shrink-0",children:[c.jsx("div",{className:"absolute inset-0 opacity-25 pointer-events-none transition-opacity duration-300 group-hover:opacity-40",style:{background:`radial-gradient(ellipse at 50% 0%, ${I[0]}60, transparent 75%)`}}),c.jsx("img",{className:"mutant-thumb max-w-[80%] max-h-[80%] object-contain transition-transform duration-500 group-hover:scale-105",src:a.imagen,alt:y,loading:"lazy",onError:V=>{const Y=V.currentTarget;Y.src=G,Y.onerror=null}}),c.jsx("div",{className:"absolute top-3 left-3 flex flex-row gap-2.5 z-20",children:g.map((V,Y)=>c.jsxs("div",{className:"relative group/badge",children:[c.jsx("div",{className:"w-[34px] h-[34px] sm:w-[42px] sm:h-[42px] rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg",children:c.jsx("img",{src:V==null?void 0:V.image,alt:V==null?void 0:V.name,className:"w-[84%] h-[84%] object-contain text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"})}),c.jsx("div",{className:"absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-black text-[8px] font-black uppercase tracking-widest text-white rounded-md opacity-0 group-hover/badge:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none shadow-xl z-30",children:V==null?void 0:V.name})]},Y))})]}),c.jsxs("div",{className:"p-3 sm:p-3.5 flex flex-col flex-grow gap-2.5 text-left z-10",children:[c.jsxs("div",{children:[c.jsx("h3",{className:"m-0 text-xs sm:text-xs md:text-sm font-black text-white uppercase tracking-tight leading-snug group-hover:text-amber-400 transition-colors break-words line-clamp-1 pr-1",children:y}),c.jsxs("div",{className:"flex items-center gap-1.5 mt-1.5",children:[c.jsx("span",{className:"w-2 h-2 rounded-full shadow-lg",style:{backgroundColor:I[0],boxShadow:`0 0 8px ${I[0]}`}}),c.jsx("span",{className:"font-mono font-bold text-[9px] uppercase text-slate-400 tracking-wider",children:a.codigo})]})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-1.5",children:[c.jsxs("div",{className:"bg-[#0b1325]/80 border border-white/[0.04] rounded-xl py-1 px-2 flex flex-col items-center justify-center hover:border-red-500/30 hover:bg-[#0b1325] transition-all",children:[c.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-slate-400",children:[c.jsx("img",{src:ir.vida,alt:"HP",className:"w-[14px] h-[14px] object-contain shrink-0"}),c.jsx("span",{className:"text-[8px] font-black uppercase tracking-wider leading-none",children:"HP"})]}),c.jsx("span",{className:"text-white font-mono font-black text-xs mt-1 tracking-tight leading-none truncate block select-all",children:a.vida})]}),c.jsxs("div",{className:"bg-[#0b1325]/80 border border-white/[0.04] rounded-xl py-1 px-2 flex flex-col items-center justify-center hover:border-sky-500/30 hover:bg-[#0b1325] transition-all",children:[c.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-slate-400",children:[c.jsx("img",{src:ir.velocidad,alt:"SPD",className:"w-[14px] h-[14px] object-contain shrink-0"}),c.jsx("span",{className:"text-[8px] font-black uppercase tracking-wider leading-none",children:"SPD"})]}),c.jsx("span",{className:"text-white font-mono font-black text-xs mt-1 tracking-tight leading-none truncate block select-all",children:a.velocidad})]}),c.jsxs("div",{className:"bg-[#0b1325]/80 border border-white/[0.04] rounded-xl py-1 px-2 flex flex-col items-center justify-center hover:border-amber-500/30 hover:bg-[#0b1325] transition-all relative",children:[c.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-slate-400",children:[c.jsx("img",{src:(b==null?void 0:b.icono)||a.tipoIcono,alt:"ATK 1",className:"w-[14px] h-[14px] object-contain shrink-0"}),c.jsx("span",{className:"text-[8px] font-black uppercase tracking-wider leading-none",children:"ATK 1"}),h&&c.jsx("span",{className:"text-[6px] text-amber-500 font-extrabold px-0.5 rounded bg-amber-500/10 border border-amber-500/20 leading-none",children:"x3"})]}),c.jsx("span",{className:`font-mono font-black text-xs mt-1 tracking-tight leading-none truncate block select-all ${h?"text-amber-400":"text-white"}`,children:k(b==null?void 0:b.valor)})]}),c.jsxs("div",{className:"bg-[#0b1325]/80 border border-white/[0.04] rounded-xl py-1 px-2 flex flex-col items-center justify-center hover:border-amber-500/30 hover:bg-[#0b1325] transition-all relative",children:[c.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-slate-400",children:[c.jsx("img",{src:(_==null?void 0:_.icono)||a.skinIcono,alt:"ATK 2",className:"w-[14px] h-[14px] object-contain shrink-0"}),c.jsx("span",{className:"text-[8px] font-black uppercase tracking-wider leading-none",children:"ATK 2"}),f&&c.jsx("span",{className:"text-[6px] text-amber-500 font-extrabold px-0.5 rounded bg-amber-500/10 border border-amber-500/20 leading-none",children:"x3"})]}),c.jsx("span",{className:`font-mono font-black text-xs mt-1 tracking-tight leading-none truncate block select-all ${f?"text-amber-400":"text-white"}`,children:k(_==null?void 0:_.valor)})]}),c.jsxs("div",{className:"col-span-2 bg-[#0b1325]/80 border border-white/[0.04] rounded-xl py-1 px-3 flex flex-col items-center justify-center hover:border-emerald-500/30 hover:bg-[#0b1325] transition-all",children:[c.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-slate-400",children:[c.jsx("img",{src:((X=a.habilidad)==null?void 0:X.icono)||"https://pokradex.org/MutantsGG/assets/ability_shield_big.png",alt:"DEF",className:"w-[14px] h-[14px] object-contain shrink-0"}),c.jsx("span",{className:"text-[8px] font-black uppercase tracking-wider leading-none",children:"DEF / HABILIDAD"})]}),c.jsx("span",{className:"text-white font-mono font-black text-xs mt-1 tracking-tight leading-none truncate block select-all",children:((H=a.habilidad)==null?void 0:H.valor)||"1,000"})]})]}),c.jsx("div",{className:"mt-auto pt-1",children:c.jsx("button",{onClick:p,className:`group/btn relative overflow-hidden w-full py-2.5 text-[10px] font-black uppercase tracking-[0.16em] transition-all flex items-center justify-center gap-2 border leading-none ${o?"bg-green-500/10 border-green-500/30 text-green-400":"bg-transparent border-white/[0.08] text-white hover:border-[var(--hover-color)] hover:bg-[var(--hover-bg)] active:scale-[0.98]"}`,style:{borderRadius:"100px","--hover-color":`${I[0]}50`,"--hover-bg":`${I[0]}12`},children:o?c.jsxs(c.Fragment,{children:[c.jsx(vi,{size:12,className:"shrink-0 text-green-400 animate-bounce"}),c.jsx("span",{children:s("mutant.verified")})]}):c.jsxs(c.Fragment,{children:[c.jsx(Du,{size:11,className:"group-hover/btn:scale-110 transition-transform shrink-0 opacity-80"}),c.jsx("span",{children:s("mutant.extract_code")})]})})})]})]})]})},ea=()=>{const{region:a,translate:s}=_t(),o=a!=="LATAM"&&a!=="PT"?"https://chat.whatsapp.com/IdBIvXWUPNjDLcPmBvkp1B":cd;return c.jsxs($t.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{duration:.4},className:"panel p-6 md:p-8 rounded-3xl bg-[#0c1222]/95 border border-white/10 shadow-2xl relative overflow-hidden group max-w-4xl mx-auto w-full my-6 flex flex-col md:flex-row md:items-center justify-between gap-6 text-left",children:[c.jsx("div",{className:"absolute inset-0 bg-[#25D366]/[0.02] pointer-events-none"}),c.jsxs("div",{className:"relative z-10 flex-1",children:[c.jsx("h3",{className:"text-xl md:text-2xl font-black text-white tracking-tight leading-tight m-0 mb-2",children:s("whatsapp.title")}),c.jsx("p",{className:"text-muted text-sm md:text-base leading-relaxed opacity-80 m-0 max-w-2xl",children:s("whatsapp.desc")})]}),c.jsx("div",{className:"relative z-10 shrink-0 w-full md:w-auto flex justify-start md:justify-end",children:c.jsxs("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-blue-brand hover:brightness-110 active:scale-[0.98] transition-all text-white font-black text-sm md:text-base shadow-lg shadow-blue-brand/20 hover:shadow-blue-brand/40 select-none w-full md:w-auto",children:[c.jsx(_r,{size:18,className:"shrink-0"}),c.jsx("span",{children:s("whatsapp.btn")})]})})]})},LA=`Robot
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
`,zA=`Robot
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
`,OA=`Robot
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
`,BA=`Robot
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
`,Mf={USD:LA.split(/\r?\n/).map(a=>a.trim()).filter(Boolean),FR:zA.split(/\r?\n/).map(a=>a.trim()).filter(Boolean),PT:OA.split(/\r?\n/).map(a=>a.trim()).filter(Boolean),DE:BA.split(/\r?\n/).map(a=>a.trim()).filter(Boolean)};function vf(a,s,o){if(o==="LATAM"||!Mf[o])return s;const r=parseInt(a,10)-1,d=Mf[o];return d&&r>=0&&r<d.length?d[r]:s}const or={script_updated:{LATAM:{title:"Script LUA Actualizada",desc:"¡Script definitivo v2! Se agregaron más opciones de menú, soporte de nuevos mutantes (2024-2025) y corregido el autocompletado de códigos. Elige tu idioma en descargas.",btn:"Ir a Descargas",badge:"NUEVO"},USD:{title:"LUA Script Updated",desc:"Ultimate LUA Script v2! Added more menu options, support for new mutants (2024-2025), and fixed auto-code population. Choose your language in downloads.",btn:"Go to Downloads",badge:"NEW"},PT:{title:"Script LUA Atualizado",desc:"Script v2 definitivo! Mais opções de menu adicionadas, suporte de novos mutantes (2024-2025) e correções no auto-copiar. Escolha seu idioma na aba Downloads.",btn:"Ir para Downloads",badge:"NOVO"},FR:{title:"Script LUA Mis à Jour",desc:"Script LUA v2 ultime ! Plus d'options de menu ajoutées, mutants (2024-2025) et corrections de bug. Téléchargez dans votre langue.",btn:"Aller aux téléchargements",badge:"NOUVEAU"},DE:{title:"LUA-Skript Aktualisiert",desc:"Ultimatives LUA-Skript v2! Weitere Menüoptionen hinzugefügt, alle neuen Mutanten (2024-2025) und automatische Fehler behoben.",btn:"Zu den Downloads",badge:"NEU"}},simulator_added:{LATAM:{title:"Simulador de Script LUA",desc:"¡Nuevo en la web! Un simulador interactivo que sirve para ver cómo son las opciones de la script antes de ejecutarla en GameGuardian.",btn:"Probar Simulador",badge:"INTERACTIVO"},USD:{title:"LUA Script Simulator",desc:"New on the system! Live interactive simulator that allows you to see what the script's options look like before executing it.",btn:"Try Simulator",badge:"INTERACTIVE"},PT:{title:"Simulador de Script LUA",desc:"Novo no sistema! Um simulador interativo que serve para ver como são as opções do script antes de executá-lo no GameGuardian.",btn:"Testar Simulador",badge:"INTERATIVO"},FR:{title:"Simulateur de Script",desc:"Nouveau sur le site ! Un simulateur interactif qui permet de voir à quoi ressemblent les options du script avant de l'exécuter dans GameGuardian.",btn:"Essayer le simulateur",badge:"INTERACTIF"},DE:{title:"LUA-Skript-Simulator",desc:"Neu im System! Ein Live-Simulator zum Testen und Sehen der Menüoptionen vor der Ausführung in GameGuardian.",btn:"Simulator testen",badge:"INTERAKTIV"}},lang_filter:{LATAM:{title:"Traducción de Nombres",desc:"Agregamos selector de idiomas (Español, Inglés, Portugués, etc.) en los filtros de la lista de mutantes. Traduce los nombres al instante.",btn:"Ver Filtros",badge:"LISTA"},USD:{title:"Translation in Filters",desc:"Added mutant names language selector to Mutant list filter settings. Check names translated to Latin Spanish, English, Portuguese and more.",btn:"View Filters",badge:"LIST"},PT:{title:"Tradução de Nomes",desc:"Seletor de idioma de exibição para os nomes dos mutantes inserido nos filtros da lista de mutantes. Altere e encontre mutantes facilmente.",btn:"Ver Filtros",badge:"LISTA"},FR:{title:"Traduction dans les Filtres",desc:"Sélecteur de langue des noms de mutants ajouté aux options de tri de la liste de mutants. Affichez les noms de mutants dans votre langue préférée.",btn:"Voir les filtres",badge:"LISTE"},DE:{title:"Namenübersetzung",desc:"Mutantennamen-Sprachauswahl im Filter-Bedienfeld hinzugefügt. Übersetzen Sie Mutantennamen direkt beim Suchen.",btn:"Filter anzeigen",badge:"LISTE"}},featured_mutants_subtitle:{LATAM:"Nuevos Mutantes Destacados",USD:"New Featured Mutants",PT:"Novos Mutantes em Destaque",FR:"Nouveaux mutants en vedette",DE:"Neue vorgestellte Mutanten"}};function Af(){const{region:a,translate:s}=_t(),o=(q,Z)=>{const K=a in or[q]?a:"USD";return or[q][K][Z]},[r,d]=B.useState(""),[g,p]=B.useState([]),[b,_]=B.useState(!1),[h,f]=B.useState("code-az"),[k,G]=B.useState(!0),[y,v]=B.useState(30),[I,S]=B.useState(a);B.useEffect(()=>{S(a)},[a]);const w=B.useMemo(()=>Vr,[]),X=B.useMemo(()=>Tk.split(/\r?\n/).map(q=>q.trim()).filter(Boolean).length,[]),H="text-blue-brand-2",V=B.useMemo(()=>{const q=r.toLowerCase(),Z=w.map(K=>{const te=vf(K.id,K.nombre,I);return{...K,nombre:te}}).filter(K=>{const te=q===""||K.nombre.toLowerCase().includes(q)||K.codigo.toLowerCase().includes(q),le=g.length===0||(g.length===1?K.genes.includes(g[0]):K.genes[0]===g[0]&&K.genes[1]===g[1]),Re=!b||K.genes.length===1||K.genes.length===2&&K.genes[0]===K.genes[1];return te&&le&&Re});return Z.sort((K,te)=>{var le,Re,Ce,we,R,Q;return h==="name-az"?K.nombre.localeCompare(te.nombre):h==="name-za"?te.nombre.localeCompare(K.nombre):h==="code-az"?K.codigo.localeCompare(te.codigo,void 0,{numeric:!0,sensitivity:"base"}):h==="code-za"?te.codigo.localeCompare(K.codigo,void 0,{numeric:!0,sensitivity:"base"}):h==="hp-desc"?(((le=te.stats)==null?void 0:le.hp)||0)-(((Re=K.stats)==null?void 0:Re.hp)||0):h==="atk-desc"?(((Ce=te.stats)==null?void 0:Ce.atk)||0)-(((we=K.stats)==null?void 0:we.atk)||0):h==="spd-desc"?(((R=te.stats)==null?void 0:R.spd)||0)-(((Q=K.stats)==null?void 0:Q.spd)||0):te.codigo.localeCompare(K.codigo,void 0,{numeric:!0,sensitivity:"base"})}),Z},[w,r,g,h,b,I]),Y=B.useMemo(()=>w.filter(q=>{const Z=q.id==="553",K=q.id==="554";return Z||K}).map(q=>{const Z=vf(q.id,q.nombre,I);return{...q,nombre:Z}}),[w,I]),z=B.useMemo(()=>V.slice(0,y),[V,y]),U=q=>{v(30),p(Z=>{const K=Z.filter(te=>te===q).length;return K>0?K===2?Z.filter(te=>te!==q):Z.length===1?[q,q]:Z.filter(te=>te!==q):Z.length<2?[...Z,q]:[Z[1],q]})};return c.jsxs("div",{className:"flex flex-col gap-8 pb-20",children:[c.jsxs("section",{className:"relative hero !p-8 md:!p-20 overflow-hidden rounded-3xl",children:[c.jsx("div",{className:"absolute inset-0 opacity-10 bg-grid-slate-900/[0.1] pointer-events-none"}),c.jsx("div",{className:"absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-brand/20 to-transparent -rotate-12 transform translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none"}),c.jsxs("div",{className:"relative z-10",children:[c.jsxs("div",{className:"eyebrow bg-white/5 border-white/10 px-4 py-1 rounded-full inline-flex items-center gap-2 mb-6 backdrop-blur-md",children:[c.jsx(Qh,{size:14,className:"text-blue-brand-2"}),c.jsx("span",{className:"text-[10px] font-black uppercase tracking-[0.2em]",children:s("home.main_database")})]}),c.jsxs("h1",{className:"text-4xl md:text-8xl lg:text-9xl font-black mt-4 mb-6 uppercase tracking-tighter leading-[0.8] md:leading-[0.85] text-white",children:["MUTANTS ",c.jsx("br",{}),c.jsxs("span",{className:"text-blue-brand relative",children:["GLADIATORS",c.jsx("span",{className:"absolute -bottom-2 left-0 w-full h-1 bg-white/10 rounded-full"})]})]}),c.jsx("p",{className:"text-slate-400 text-sm md:text-lg max-w-2xl mx-auto md:mx-0 opacity-90 leading-relaxed font-medium",children:s("home.main_desc")})]})]}),c.jsx(ea,{}),c.jsxs("section",{className:"panel flex flex-col gap-8 !p-6 md:!p-8 border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent rounded-3xl relative overflow-hidden group",children:[c.jsx("div",{className:"absolute top-0 left-0 w-1 h-full bg-blue-brand"}),c.jsx("div",{className:"flex items-center justify-between relative z-10 text-left",children:c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx(Uf,{size:20,className:"text-blue-brand-2"}),c.jsx("h2",{className:"text-xl md:text-2xl font-black uppercase tracking-tighter m-0 text-white",children:s("home.featured_mutants")})]})}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 text-left",children:[c.jsxs("div",{className:"flex flex-col justify-between p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 relative group/card",children:[c.jsx("div",{className:"absolute top-3 right-3 bg-blue-brand/20 text-blue-brand-2 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider animate-pulse",children:o("script_updated","badge")}),c.jsxs("div",{children:[c.jsx("div",{className:"w-10 h-10 rounded-xl bg-blue-brand/10 flex items-center justify-center text-blue-brand-2 border border-blue-brand/20 mb-4 group-hover/card:scale-110 transition-transform",children:c.jsx(Rf,{size:20})}),c.jsx("h3",{className:"text-base font-black uppercase tracking-tight text-white mb-2",children:o("script_updated","title")}),c.jsx("p",{className:"text-slate-400 text-xs font-semibold leading-relaxed m-0 mb-6",children:o("script_updated","desc")})]}),c.jsxs("button",{onClick:()=>{window.location.hash="/descargas",window.scrollTo({top:0,behavior:"smooth"})},className:"w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-blue-brand hover:bg-blue-brand-2 text-white text-xs font-black uppercase tracking-wider transition-all cursor-pointer active:scale-95 text-center font-bold",children:[c.jsx("span",{children:o("script_updated","btn")}),c.jsx(rr,{size:14})]})]}),c.jsxs("div",{className:"flex flex-col justify-between p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 relative group/card",children:[c.jsx("div",{className:"absolute top-3 right-3 bg-emerald-500/20 text-emerald-400 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider",children:o("simulator_added","badge")}),c.jsxs("div",{children:[c.jsx("div",{className:"w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 mb-4 group-hover/card:scale-110 transition-transform",children:c.jsx(Cu,{size:20})}),c.jsx("h3",{className:"text-base font-black uppercase tracking-tight text-white mb-2",children:o("simulator_added","title")}),c.jsx("p",{className:"text-slate-400 text-xs font-semibold leading-relaxed m-0 mb-6",children:o("simulator_added","desc")})]}),c.jsxs("button",{onClick:()=>{window.location.hash="/guia-script",window.scrollTo({top:0,behavior:"smooth"})},className:"w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-black uppercase tracking-wider transition-all cursor-pointer active:scale-95 text-center font-bold border border-emerald-500/10",children:[c.jsx("span",{children:o("simulator_added","btn")}),c.jsx(rr,{size:14})]})]}),c.jsxs("div",{className:"flex flex-col justify-between p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 relative group/card",children:[c.jsx("div",{className:"absolute top-3 right-3 bg-purple-500/20 text-purple-400 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider",children:o("lang_filter","badge")}),c.jsxs("div",{children:[c.jsx("div",{className:"w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20 mb-4 group-hover/card:scale-110 transition-transform",children:c.jsx(Wh,{size:20})}),c.jsx("h3",{className:"text-base font-black uppercase tracking-tight text-white mb-2",children:o("lang_filter","title")}),c.jsx("p",{className:"text-slate-400 text-xs font-semibold leading-relaxed m-0 mb-6",children:o("lang_filter","desc")})]}),c.jsxs("button",{onClick:()=>{const q=document.getElementById("names-language-selector");q?q.scrollIntoView({behavior:"smooth",block:"center"}):window.scrollTo({top:document.body.scrollHeight/2,behavior:"smooth"})},className:"w-full flex items-center justify-center gap-1.5 py-2.5 px-2.5 rounded-xl bg-purple-650 hover:bg-purple-700 text-white text-xs font-black uppercase tracking-wider transition-all cursor-pointer active:scale-95 text-center font-bold",children:[c.jsx("span",{children:o("lang_filter","btn")}),c.jsx(rr,{size:14})]})]})]}),c.jsx("div",{className:"h-px bg-white/10 my-2 relative z-10"}),c.jsxs("div",{className:"flex flex-col gap-4 relative z-10 text-left",children:[c.jsxs("span",{className:"text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1",children:["🔥 ",or.featured_mutants_subtitle[a]||or.featured_mutants_subtitle.USD]}),c.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4",children:Y.map((q,Z)=>c.jsx(yf,{mutant:q},Z))})]})]}),c.jsxs("section",{className:"flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-[2.5rem] border border-white/10 bg-[#0a1224]/50 backdrop-blur-2xl relative overflow-hidden",children:[c.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-grid-slate-900/[0.05] pointer-events-none"}),c.jsxs("div",{className:"flex flex-col gap-4 relative z-10 w-full md:max-w-[60%]",children:[c.jsxs("div",{className:"flex items-center gap-6",children:[c.jsxs("div",{className:"relative group/avatar",children:[c.jsx("div",{className:"absolute inset-0 bg-blue-brand blur-xl opacity-20 group-hover:opacity-40 transition-opacity"}),c.jsx("img",{src:"https://github.com/luqueSmith/MGG/blob/main/img/perfil.png?raw=true",alt:"Smith Luque",className:"w-20 h-20 md:w-24 md:h-24 rounded-[2rem] border-4 border-white/10 shadow-2xl relative z-10 object-cover group-hover:rotate-3 transition-transform"}),c.jsx("div",{className:"absolute -bottom-1 -right-1 w-6 h-6 bg-green-brand border-4 border-[#050a14] rounded-full z-20"})]}),c.jsxs("div",{className:"text-left",children:[c.jsx("h3",{className:"m-0 text-2xl font-black text-white uppercase tracking-tighter",children:"Smith Luque"}),c.jsxs("div",{className:"flex flex-col gap-1",children:[c.jsx("p",{className:"text-blue-brand-2 text-xs m-0 font-black uppercase tracking-widest leading-none",children:s("profile.developer")}),c.jsx("div",{className:"px-2 py-0.5 rounded bg-white/5 border border-white/5 inline-flex self-start",children:c.jsx("span",{className:"text-[8px] font-bold text-muted uppercase tracking-[0.2em]",children:s("profile.founder")})})]})]})]}),c.jsxs("div",{className:"p-4 rounded-2xl border border-blue-brand/20 bg-blue-brand/5 backdrop-blur-md",children:[c.jsxs("span",{className:"block text-[10px] font-black text-blue-brand-2 uppercase tracking-[0.2em] mb-1",children:["📢 ",s("home.announcement_title")]}),c.jsx("p",{className:"text-xs text-slate-300 font-semibold leading-relaxed m-0",children:s("home.announcement_desc")})]})]}),c.jsxs("div",{className:"flex gap-8 items-center px-8 w-full md:w-auto border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 relative z-10",children:[c.jsxs("div",{className:"flex-1 md:flex-none",children:[c.jsx("span",{className:"block text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-2",children:s("home.filtered")}),c.jsxs("div",{className:"flex items-baseline gap-1",children:[c.jsx("strong",{className:"text-4xl font-black text-blue-brand-2 leading-none",children:V.length}),c.jsx("span",{className:"text-xs font-bold text-white/20 uppercase tracking-widest",children:s("home.active")})]})]}),c.jsxs("div",{className:"flex-1 md:flex-none",children:[c.jsx("span",{className:"block text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-2",children:s("home.total_base")}),c.jsxs("div",{className:"flex items-baseline gap-1",children:[c.jsx("strong",{className:"text-4xl font-black text-white/50 leading-none",children:X}),c.jsx("span",{className:"text-xs font-bold text-muted/20 uppercase tracking-widest",children:s("home.total")})]})]})]})]}),c.jsxs("section",{className:"panel flex flex-col gap-6 !p-6 md:!p-8 border border-white/10 relative overflow-hidden group",children:[c.jsx("div",{className:"absolute inset-0 opacity-5 pointer-events-none bg-grid-slate-900/[0.1] bg-[bottom_1px_center] [mask-image:linear-gradient(to_bottom,white,transparent)]"}),c.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("div",{className:"w-1.5 h-6 bg-blue-brand rounded-full"}),c.jsx("h2",{className:"text-xl md:text-2xl font-black uppercase tracking-tighter m-0",children:s("home.explore_catalog")})]}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("div",{className:"px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-bold text-muted uppercase tracking-widest leading-none",children:"Control Panel v2.0"}),(g.length>0||b)&&c.jsx("button",{onClick:()=>{p([]),_(!1)},className:"text-[10px] uppercase font-black text-white bg-red-brand/40 px-3 py-1 rounded-full hover:bg-red-brand transition-all active:scale-95 shadow-lg shadow-red-brand/20",children:s("home.reset_engine")})]})]}),c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10",children:[c.jsx("div",{className:"lg:col-span-8 flex flex-col gap-6",children:c.jsxs("div",{className:"space-y-4",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx(Jh,{size:14,className:H}),c.jsx("span",{className:"text-[11px] uppercase font-black tracking-[0.2em] opacity-60",children:s("home.genetic_config")})]}),c.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3",children:xr.map(q=>{const Z=g.filter(te=>te===q.id).length,K=Z>0;return g.indexOf(q.id),c.jsxs("button",{onClick:()=>U(q.id),className:`flex items-center gap-3 p-3 rounded-xl border-2 transition-all relative group/gene overflow-hidden ${K?"bg-blue-brand/20 border-blue-brand text-white shadow-[0_0_20px_rgba(37,99,235,0.2)]":"bg-white/[0.02] border-white/10 text-slate-400 hover:border-white/30 hover:bg-white/[0.05]"}`,children:[c.jsx("div",{className:`p-1.5 rounded-lg transition-all ${K?"bg-blue-brand shadow-lg":"bg-white/5 group-hover/gene:scale-110"}`,children:c.jsx("img",{src:q.image,alt:"",className:`w-6 h-6 object-contain ${K?"brightness-125":"grayscale opacity-50"}`})}),c.jsxs("div",{className:"flex flex-col items-start",children:[c.jsx("span",{className:"text-[11px] font-black uppercase tracking-tight line-clamp-1",children:q.name}),c.jsx("span",{className:"text-[8px] font-bold opacity-40 uppercase tracking-widest",children:s(K?Z===2?"gene.dominant":"gene.active":"gene.inactive")})]}),K&&c.jsx("div",{className:"absolute top-1 right-1 flex gap-0.5",children:[...Array(Z)].map((te,le)=>c.jsx("div",{className:"w-1 h-3 bg-blue-brand-2 rounded-full"},le))})]},q.id)})})]})}),c.jsxs("div",{className:"lg:col-span-4 flex flex-col gap-6 lg:border-l lg:border-white/10 lg:pl-8",children:[c.jsxs("div",{className:"space-y-4",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx(qu,{size:14,className:H}),c.jsx("span",{className:"text-[11px] uppercase font-black tracking-[0.2em] opacity-60",children:s("home.search_engine")})]}),c.jsxs("div",{className:"relative group/search",children:[c.jsx("input",{value:r,onChange:q=>{d(q.target.value),v(30)},placeholder:s("home.search_placeholder"),className:"w-full bg-white/[0.04] border-2 border-white/10 rounded-2xl pl-4 pr-12 py-4 text-sm font-bold placeholder:text-white/20 outline-none focus:border-blue-brand/50 transition-all focus:bg-white/[0.06] focus:shadow-2xl focus:shadow-blue-brand/5"}),c.jsx("div",{className:"absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-white/5 text-white/40",children:c.jsx(qu,{size:16})})]})]}),c.jsxs("div",{className:"space-y-4",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx(rk,{size:14,className:H}),c.jsx("span",{className:"text-[11px] uppercase font-black tracking-[0.2em] opacity-60",children:s("home.sort_filters")})]}),c.jsxs("div",{className:"flex flex-col gap-3",children:[c.jsxs("div",{className:"relative group/sort",children:[c.jsxs("select",{value:h,onChange:q=>{f(q.target.value),v(30)},className:"w-full bg-white/[0.04] border-2 border-white/10 rounded-2xl px-5 py-4 text-xs font-black uppercase tracking-widest outline-none text-white focus:border-blue-brand/50 cursor-pointer appearance-none focus:bg-white/[0.06]",children:[c.jsx("option",{value:"name-az",className:"bg-[#0a1224]",children:s("home.sort_az")}),c.jsx("option",{value:"name-za",className:"bg-[#0a1224]",children:s("home.sort_za")}),c.jsx("option",{value:"code-az",className:"bg-[#0a1224]",children:s("home.sort_code_asc")}),c.jsx("option",{value:"code-za",className:"bg-[#0a1224]",children:s("home.sort_code_desc")}),c.jsx("option",{value:"hp-desc",className:"bg-[#0a1224]",children:s("home.sort_hp_desc")}),c.jsx("option",{value:"atk-desc",className:"bg-[#0a1224]",children:s("home.sort_atk_desc")}),c.jsx("option",{value:"spd-desc",className:"bg-[#0a1224]",children:s("home.sort_spd_desc")})]}),c.jsx(Nu,{size:16,className:"absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-40"})]}),c.jsxs("div",{id:"names-language-selector",className:"space-y-1.5 text-left mt-1 scroll-mt-24",children:[c.jsxs("div",{className:"flex items-center gap-2 opacity-60 pl-1",children:[c.jsx(Wh,{size:11,className:H}),c.jsx("span",{className:"text-[9px] uppercase font-black tracking-widest",children:s("home.names_language")})]}),c.jsxs("div",{className:"relative group/names-lang",children:[c.jsxs("select",{value:I,onChange:q=>{S(q.target.value),v(30)},className:"w-full bg-white/[0.04] border-2 border-white/10 rounded-2xl px-5 py-3.5 text-xs font-black uppercase tracking-widest outline-none text-white focus:border-blue-brand/50 cursor-pointer appearance-none focus:bg-white/[0.06]",children:[c.jsx("option",{value:"LATAM",className:"bg-[#0a1224]",children:"Español (LATAM)"}),c.jsx("option",{value:"USD",className:"bg-[#0a1224]",children:"English (USD)"}),c.jsx("option",{value:"PT",className:"bg-[#0a1224]",children:"Português (PT)"}),c.jsx("option",{value:"FR",className:"bg-[#0a1224]",children:"Français (FR)"}),c.jsx("option",{value:"DE",className:"bg-[#0a1224]",children:"Deutsch (DE)"})]}),c.jsx(Nu,{size:16,className:"absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-40"})]})]}),c.jsxs("button",{className:`group relative overflow-hidden w-full py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 border-2 ${b?"bg-blue-brand/20 border-blue-brand text-blue-brand-2":"bg-white/5 border-white/10 text-white/40 hover:border-white/20"}`,onClick:()=>_(!b),children:[c.jsx(Qh,{size:14,className:`${b?"animate-pulse":""}`}),s("home.single_gene_only")]}),c.jsxs("button",{className:`group relative overflow-hidden w-full py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 border-2 ${k?"bg-blue-brand/10 border-blue-brand/30 text-blue-brand-2":"bg-white/5 border-white/10 text-white/40 hover:border-white/20"}`,onClick:()=>G(!k),children:[c.jsx(Jh,{size:14,className:`${k?"animate-pulse":""}`}),s(k?"home.hide":"home.show")]})]})]})]})]})]}),c.jsx("section",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4",children:k?V.length>0?c.jsxs(c.Fragment,{children:[z.map((q,Z)=>c.jsx(yf,{mutant:q},Z)),y<V.length&&c.jsx("div",{className:"col-span-full py-8 flex justify-center",children:c.jsx("button",{onClick:()=>v(q=>q+30),className:"px-8 py-3 bg-blue-brand/10 border-2 border-blue-brand/30 rounded-2xl text-blue-brand-2 font-black uppercase tracking-widest hover:bg-blue-brand/20 transition-all active:scale-95",children:s("home.load_more_rem",{rem:V.length-y})})})]}):c.jsx("div",{className:"col-span-full py-12 text-center text-muted border border-line rounded-2xl bg-panel",children:s("home.no_results")}):c.jsx("div",{className:"col-span-full py-12 text-center text-muted border border-line rounded-2xl bg-panel",children:s("home.hidden_results")})})]})}const UA="https://mutodex.blogspot.com/feeds/posts/default?alt=json-in-script&max-results=8";function PA(a){if(!a)return"Reciente";const s=new Date(a);return Number.isNaN(s.getTime())?a:s.toLocaleDateString("es-PE",{year:"numeric",month:"short",day:"numeric"})}function FA(a){return String(a||"").replace(/<script[\s\S]*?<\/script>/gi,"").replace(/<style[\s\S]*?<\/style>/gi,"").replace(/<[^>]+>/g," ").replace(/&nbsp;/gi," ").replace(/&amp;/gi,"&").replace(/\s+/g," ").trim()}function KA(a){const s=String(a||"").match(/<img[^>]+src="([^"]+)"/i);return s?s[1]:""}function XA(a){var b,_,h,f,k,G;const s=((b=a.title)==null?void 0:b.$t)||a.title||"Sin título",o=((_=a.published)==null?void 0:_.$t)||a.published||"",r=((h=a.content)==null?void 0:h.$t)||a.content||((f=a.summary)==null?void 0:f.$t)||a.summary||"",d=Array.isArray(a.link)?((k=a.link.find(y=>y.rel==="alternate"))==null?void 0:k.href)||((G=a.link[0])==null?void 0:G.href)||"#":a.url||a.href||"#",g=KA(r)||a.image||"",p=FA(r);return{title:s,published:o,dateLabel:PA(o),excerpt:p.slice(0,220)+(p.length>220?"…":""),excerptFull:p,rawText:p,link:d,image:g}}function ZA(a){const s=String(a||"").replace(/\s+/g," ").trim();if(!s)return[];const o=["ANUNCIOS:","OFERTAS:","MINI EVENTO:","CRONOLOGIA:"],r=[];for(let d=0;d<o.length;d++){const g=o[d],p=s.indexOf(g);if(p===-1)continue;let b=s.length;for(let h=d+1;h<o.length;h++){const f=s.indexOf(o[h],p+g.length);if(f!==-1){b=f;break}}const _=s.slice(p+g.length,b).trim();_&&r.push({title:g.replace(":",""),body:_.length>320?_.slice(0,320)+"…":_})}return r.length||r.push({title:"Resumen",body:s.length>420?s.slice(0,420)+"…":s}),r.slice(0,4)}function YA(){const{region:a,translate:s}=_t(),o=a==="USD",[r,d]=B.useState([]),[g,p]=B.useState(!0),[b,_]=B.useState(!1);return B.useEffect(()=>{let h=null;const f=`mggFeedCallback_${Date.now()}`,k=()=>{h&&h.parentNode&&h.parentNode.removeChild(h);try{window[f]=void 0}catch{}};return window[f]=G=>{var y;k();try{const I=(((y=G==null?void 0:G.feed)==null?void 0:y.entry)||[]).map(XA);d(I),p(!1)}catch{_(!0),p(!1)}},h=document.createElement("script"),h.src=`${UA}&callback=${f}`,h.onerror=()=>{k(),_(!0),p(!1)},document.body.appendChild(h),k},[]),c.jsxs("div",{className:"flex flex-col gap-6",children:[c.jsxs("section",{className:"hero transition-all duration-700 !p-6 md:!p-12 relative overflow-hidden bg-gradient-to-br from-blue-brand/10 via-blue-brand-2/5 to-transparent border-blue-brand-2/20 shadow-blue-brand-2/5",children:[c.jsxs("div",{className:"eyebrow scale-90 md:scale-100",children:[c.jsx(Of,{size:14,className:"text-blue-brand-2"}),c.jsx("span",{children:o?"News Feed":"Portal informativo"})]}),c.jsxs("h1",{className:"text-3xl md:text-6xl font-black mt-4 mb-4 uppercase tracking-tighter leading-[0.9] md:leading-[0.95] text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-brand-2/80 to-blue-brand-2",children:[o?"NEWS":"NOVEDADES"," ",c.jsx("span",{className:"text-blue-brand-2 block",children:"MUTODEX"})]}),c.jsx("p",{className:"text-muted text-sm md:text-base max-w-2xl mx-auto px-4 opacity-80",children:o?"Latest news delivered directly from the official Mutodex blog.":"Noticias actualizadas directamente desde el blog oficial de Mutodex."})]}),c.jsx(ea,{}),c.jsxs("div",{className:"grid lg:grid-cols-[1fr_350px] gap-6 items-start",children:[c.jsx("section",{className:"flex flex-col gap-5 order-2 lg:order-1",children:g?c.jsx("div",{className:"panel text-center py-12 text-muted bg-blue-brand/5 border-blue-brand/20",children:o?"Loading posts...":"Cargando publicaciones…"}):b?c.jsx("div",{className:"panel text-center py-12 text-muted bg-blue-brand/5 border-blue-brand/20",children:o?"Could not load posts at this moment.":"No se pudieron cargar las publicaciones en este momento."}):r.length===0?c.jsx("div",{className:"panel text-center py-12 text-muted bg-blue-brand/5 border-blue-brand/20",children:o?"No posts found.":"No se encontraron publicaciones."}):r.map((h,f)=>{const k=ZA(h.excerptFull||h.rawText||h.excerpt||"");return c.jsxs("article",{className:"panel p-0 overflow-hidden flex flex-col group transition-all duration-300 border-white/10 hover:border-blue-brand-2/30 shadow-lg hover:shadow-blue-brand-2/[0.04]",children:[c.jsxs("div",{className:"p-5 md:p-7 pb-0",children:[c.jsxs("div",{className:"flex items-center gap-2 font-mono font-bold text-[10px] uppercase tracking-widest mb-3 text-blue-brand-2",children:[c.jsx(v2,{size:12}),h.dateLabel]}),c.jsx("h2",{className:"m-0 text-xl md:text-3xl font-bold leading-tight tracking-tight",children:c.jsx("a",{href:h.link,target:"_blank",rel:"noopener noreferrer",className:"transition-colors hover:text-blue-brand-2",children:h.title})})]}),h.image&&c.jsx("div",{className:"px-5 md:px-7 mt-5",children:c.jsx("div",{className:"relative aspect-[16/8] overflow-hidden rounded-xl border border-white/10",children:c.jsx("img",{className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",src:h.image,alt:h.title,loading:"lazy",referrerPolicy:"no-referrer"})})}),c.jsx("div",{className:"p-5 md:p-7 pt-5 grid gap-4",children:k.map((G,y)=>c.jsxs("div",{className:"border-l-2 pl-4 py-1 border-blue-brand/30",children:[c.jsx("h3",{className:"m-0 mb-1.5 text-[11px] md:text-xs uppercase tracking-widest font-black text-white/90",children:G.title}),c.jsx("p",{className:"m-0 text-muted text-sm md:text-base leading-relaxed opacity-90",children:G.body})]},y))}),c.jsx("div",{className:"p-5 md:p-7 pt-0 mt-auto",children:c.jsxs("a",{className:"btn btn-primary w-full md:w-auto transition-all",target:"_blank",rel:"noopener noreferrer",href:h.link,children:[c.jsx(Yn,{size:16}),c.jsx("span",{children:o?"Read on Mutodex":"Leer en Mutodex"})]})})]},f)})}),c.jsxs("aside",{className:"flex flex-col gap-6 order-1 lg:order-2",children:[c.jsxs("section",{className:"panel !p-5 flex flex-col gap-4 border border-white/5 bg-blue-brand/2",children:[c.jsxs("div",{className:"kv-label text-[10px] opacity-60 flex items-center gap-2",children:[c.jsx(Z2,{size:12}),o?"Quick Access":"Acceso Rápido"]}),c.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2",children:[{name:o?"Official Mutant List":"Lista oficial: mutantes",url:"https://mutodex.blogspot.com/p/lista-oficial-mutantes.html"},{name:o?"Secret Breeding":"Hibridaciones secretas",url:"https://mutodex.blogspot.com/p/hibridaciones-secretas.html"},{name:o?"Attack/HP Orbs":"Orbes de ataque/hp",url:"https://mutodex.blogspot.com/p/orbes.html"},{name:o?"EVO Discount":"Descuento de EVO",url:"https://mutodex.blogspot.com/p/descuento-de-evo.html"},{name:o?"Stats Calculator":"Calculadora stats",url:"https://mutodex.blogspot.com/p/calculadora-de-stats.html"}].map((h,f)=>c.jsxs("a",{className:"flex items-center justify-between p-3 rounded-xl bg-white/3 border border-line text-xs font-medium hover:border-blue-brand-2/50 hover:bg-blue-brand-2/10 transition-all duration-300",target:"_blank",rel:"noopener noreferrer",href:h.url,children:[h.name,c.jsx(Yn,{size:12,className:"opacity-40"})]},f))})]}),c.jsxs("section",{className:"panel !p-5 flex flex-col gap-4 border border-white/5 bg-blue-brand/2",children:[c.jsx("div",{className:"kv-label text-[10px] opacity-60",children:o?"Blog Entries":"Entradas de Blog"}),c.jsx("div",{className:"flex flex-col gap-2",children:g?c.jsx("div",{className:"text-muted text-xs animate-pulse",children:o?"Synchronizing...":"Sincronizando..."}):r.slice(0,6).map((h,f)=>c.jsxs("a",{className:"block p-3 rounded-xl bg-white/3 border border-line transition-all duration-300 hover:border-blue-brand-2/40 group",target:"_blank",rel:"noopener noreferrer",href:h.link,children:[c.jsx("div",{className:"text-[9px] font-bold mb-1 opacity-70 text-blue-brand-2",children:h.dateLabel}),c.jsx("div",{className:"text-xs font-bold text-white/90 line-clamp-1 group-hover:text-blue-brand-2",children:h.title})]},f))})]}),c.jsx("div",{className:"panel !p-4 border border-blue-brand/20 bg-blue-brand/5 shadow-inner",children:c.jsx("p",{className:"text-muted text-[10px] m-0 leading-relaxed",children:o?"Data is loaded via JSONP from Blogger to avoid CORS. If news is not visible, check your connection.":"Los datos se cargan vía JSONP desde Blogger para evitar problemas de CORS. Si no ves las noticias, revisa tu conexión."})})]})]})]})}const Tu=({service:a,isOffer:s,isOther:o,variant:r="default"})=>{const{region:d,multiplier:g,translate:p,countryCode:b}=_t(),_=d!=="LATAM",h=_&&a.nombreEn?a.nombreEn:a.nombre,f=_&&a.descripcionEn?a.descripcionEn:a.descripcion,k=_&&a.featuresEn?a.featuresEn:a.features,G=b?Kf.find(H=>H.id.toUpperCase()===b.toUpperCase()):null,y="$";let v="";const I=a.precio;I>0?v=(I/3.7*1.15*1.1*.9).toFixed(2):v="0.00",(()=>{const H=b==null?void 0:b.toUpperCase();return H==="PE"?"🇵🇪":H==="US"?"🇺🇸":G?G.flag:H?"🌎":"🇵🇪"})();const w=()=>{const H=a.precio===0;let V="";H?d==="LATAM"?V="GRATIS":d==="PT"?V="GRÁTIS":d==="FR"?V="GRATUIT":d==="DE"?V="KOSTENLOS":V="FREE":V=`${y}${v}`;let Y="";d==="LATAM"?Y=`¡Hola! Me interesa el servicio: ${h} (ID: ${a.id}) - Precio: ${V}`:d==="PT"?Y=`Olá! Estou interessado no serviço: ${h} (ID: ${a.id}) - Preço: ${V}`:d==="FR"?Y=`Bonjour! Je suis intéressé par le service: ${h} (ID: ${a.id}) - Prix: ${V}`:d==="DE"?Y=`Hallo! Ich habe Interesse an dem Service: ${h} (ID: ${a.id}) - Preis: ${V}`:Y=`Hello! I'm interested in: ${h} (ID: ${a.id}) - Price: ${V}`,window.open(`https://wa.me/${Ff}?text=${encodeURIComponent(Y)}`,"_blank")},X=p("services.buy");return r==="compact"?c.jsxs("article",{className:"panel !p-3 flex items-center justify-between gap-4 group transition-all duration-300 bg-white/[0.02] border hover:border-blue-brand/50",children:[c.jsxs("div",{className:"flex items-center gap-3 flex-1 min-w-0",children:[c.jsx("div",{className:"w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden shrink-0 bg-white/5 border border-white/10 group-hover:border-blue-brand/30 transition-colors",children:a.imagen?c.jsx("img",{src:a.imagen,alt:"",className:"w-full h-full object-cover"}):c.jsx("div",{className:"w-full h-full flex items-center justify-center text-blue-brand-2",children:c.jsx(xi,{size:20})})}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsx("h4",{className:"m-0 text-xs md:text-sm font-black uppercase text-white truncate group-hover:text-blue-brand-2 transition-colors",children:h}),c.jsx("div",{className:"text-[10px] md:text-[11px] font-black text-blue-brand-2 mt-0.5",children:a.precio===0?"GRATIS":`${y} ${v}`})]})]}),c.jsxs("button",{onClick:w,className:"btn btn-sm !px-3 h-8 md:h-9 border-transparent shrink-0 bg-blue-brand/10 text-blue-brand-2 hover:bg-blue-brand hover:text-white",children:[c.jsx(xi,{size:14,className:"md:size-4"}),c.jsx("span",{className:"hidden sm:inline text-[10px] font-black uppercase",children:X})]})]}):c.jsxs("article",{className:`card flex flex-col group transition-all duration-300 hover:border-blue-brand/50 ${s?"outline-1 outline-blue-brand/35 border-blue-brand/30 bg-blue-brand/5":""}`,children:[a.imagen&&c.jsxs("div",{className:"relative overflow-hidden aspect-[16/10]",children:[c.jsx("img",{src:a.imagen,alt:h,className:"w-full h-full object-cover block transition-transform duration-500 group-hover:scale-110"}),c.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"})]}),c.jsxs("div",{className:"card-body p-4 md:p-5 flex flex-col flex-1",children:[c.jsx("h3",{className:"m-0 mb-2 text-base md:text-lg font-black uppercase tracking-tight text-white line-clamp-1 group-hover:text-blue-brand-2 transition-colors",children:h}),c.jsx("p",{className:"text-muted text-sm mb-4 leading-relaxed line-clamp-2 md:line-clamp-none",children:f}),c.jsx("div",{className:"flex flex-wrap gap-2 mb-5",children:k==null?void 0:k.map((H,V)=>c.jsx("span",{className:"px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-slate-400 text-[10px] md:text-[11px] font-bold uppercase",children:H},V))}),c.jsxs("div",{className:"flex items-end justify-between mt-auto pt-4 border-t border-white/5",children:[c.jsx("div",{className:"text-xl md:text-2xl font-black tracking-tighter text-white",children:a.precio===0?c.jsx("span",{className:"text-green-brand",children:"GRATIS"}):`${y} ${v}`}),c.jsxs("div",{className:"flex gap-2",children:[a.saberMas&&c.jsx("a",{href:a.saberMas,target:"_blank",rel:"noopener noreferrer",className:"btn btn-sm px-3 bg-white/5 border-white/5 text-slate-400 hover:text-white",title:"Saber más",children:c.jsx(Yn,{size:16})}),c.jsxs("button",{className:`btn btn-sm px-4 ${s?"btn-primary":o?"bg-green-brand text-white":"bg-blue-brand/20 text-blue-brand-2 hover:bg-blue-brand hover:text-white"}`,onClick:w,children:[a.precio===0?c.jsx(R2,{size:16}):c.jsx(xi,{size:16}),c.jsx("span",{className:"text-[11px] font-black uppercase",children:a.precio===0?"Ver":X})]})]})]})]})]})};function QA(){const{region:a,countryCode:s,setCountry:o,translate:r}=_t(),d=a==="USD",g=a!=="LATAM"&&a!=="PT"?"https://chat.whatsapp.com/IdBIvXWUPNjDLcPmBvkp1B":cd,p=cu.filter(h=>h.categoria==="OFFER"),b=cu.filter(h=>h.categoria==="MAIN"),_=cu.filter(h=>h.categoria==="OTHER");return c.jsxs("div",{className:"flex flex-col gap-8 pb-20",children:[c.jsxs("section",{className:"relative hero !p-10 md:!p-24 overflow-hidden rounded-[3rem]",children:[c.jsx("div",{className:"absolute inset-0 opacity-10 bg-grid-slate-900/[0.1] pointer-events-none"}),c.jsx("div",{className:"absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-brand/20 to-transparent -rotate-12 transform translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none"}),c.jsxs("div",{className:"relative z-10",children:[c.jsxs("div",{className:"eyebrow bg-white/5 border-white/10 px-4 py-1 rounded-full inline-flex items-center gap-2 mb-6 backdrop-blur-md",children:[c.jsx(xi,{size:14,className:"text-blue-brand-2"}),c.jsx("span",{className:"text-[10px] font-black uppercase tracking-[0.2em]",children:d?"Premium Hub":"Centro de Servicios"})]}),c.jsxs("h1",{className:"text-4xl md:text-8xl lg:text-9xl font-black mt-4 mb-6 uppercase tracking-tighter leading-[0.8] md:leading-[0.85] text-white",children:[r("nav.servicios").split(" ")[0]," ",c.jsx("br",{}),c.jsxs("span",{className:"text-blue-brand relative",children:[r("nav.servicios").split(" ")[1]||"PREMIUM",c.jsx("span",{className:"absolute -bottom-2 left-0 w-full h-1 bg-white/10 rounded-full"})]})]}),c.jsx("p",{className:"text-slate-400 text-sm md:text-lg max-w-2xl mx-auto md:mx-0 opacity-90 leading-relaxed font-medium",children:r("services.subtitle")})]})]}),c.jsxs("section",{className:"panel !p-8 md:!p-12 relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-brand/10 to-transparent border-blue-brand/20",children:[c.jsx("div",{className:"absolute inset-0 opacity-5 bg-grid-tech pointer-events-none"}),c.jsxs("div",{className:"flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10",children:[c.jsxs("div",{className:"text-center lg:text-left space-y-3",children:[c.jsx("h3",{className:"m-0 text-3xl font-black uppercase tracking-tighter text-white",children:d?"Need Expert Assistance?":"¿Tienes dudas?"}),c.jsx("p",{className:"text-slate-400 m-0 text-sm md:text-base font-medium max-w-xl",children:d?"Chat with our command center directly via WhatsApp for instant support.":"Escríbeme directamente por WhatsApp o entra al grupo de ayuda para soporte inmediato."})]}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto min-w-[min(400px,100%)]",children:[c.jsxs("a",{className:"group/btn relative overflow-hidden py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 bg-blue-brand text-white shadow-xl shadow-blue-brand/40 hover:scale-105 active:scale-95",target:"_blank",rel:"noopener noreferrer",href:`https://wa.me/${Ff}`,children:[c.jsx(J2,{size:20,className:"group-hover/btn:-translate-y-1 transition-transform"}),c.jsx("span",{children:d?"Direct Command":"WhatsApp Directo"})]}),c.jsxs("a",{className:"group/btn relative overflow-hidden py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 bg-white/5 border-2 border-white/10 text-white hover:bg-white/10 active:scale-95",target:"_blank",rel:"noopener noreferrer",href:g,children:[c.jsx(_r,{size:20,className:"group-hover/btn:scale-110 transition-transform"}),c.jsx("span",{children:r("whatsapp.btn")})]})]})]})]}),c.jsxs("div",{className:"space-y-12",children:[c.jsxs("section",{className:"flex flex-col gap-6",children:[c.jsxs("div",{className:"flex items-center gap-4",children:[c.jsx("div",{className:"w-2 h-8 bg-blue-brand rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]"}),c.jsx("h2",{className:"text-2xl font-black uppercase tracking-tighter m-0 text-white",children:d?"Limited Time Offers":"Ofertas Especiales"}),c.jsx("div",{className:"h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:p.map(h=>c.jsx(Tu,{service:h,isOffer:!0},h.id))})]}),c.jsxs("section",{className:"flex flex-col gap-6",children:[c.jsxs("div",{className:"flex items-center gap-4",children:[c.jsx("div",{className:"w-2 h-8 bg-blue-brand-2 rounded-full opacity-50"}),c.jsx("h2",{className:"text-2xl font-black uppercase tracking-tighter m-0 text-white",children:d?"Core Protocols":"Servicios Principales"}),c.jsx("div",{className:"h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:b.map(h=>c.jsx(Tu,{service:h,variant:"compact"},h.id))})]}),c.jsxs("section",{className:"flex flex-col gap-6",children:[c.jsxs("div",{className:"flex items-center gap-4",children:[c.jsx("div",{className:"w-2 h-8 bg-slate-700 rounded-full"}),c.jsx("h2",{className:"text-2xl font-black uppercase tracking-tighter m-0 text-white",children:d?"Expansion Packs":"Otros Servicios"}),c.jsx("div",{className:"h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:_.map(h=>c.jsx(Tu,{service:h,isOther:!0},h.id))})]})]}),c.jsxs("section",{className:"flex flex-col gap-8 mt-12 pb-12",children:[c.jsxs("div",{className:"flex items-center gap-4 justify-center",children:[c.jsx("div",{className:"h-px w-10 md:w-20 bg-gradient-to-r from-transparent to-blue-brand"}),c.jsx("h2",{className:"text-xl md:text-3xl font-black uppercase tracking-tighter m-0 text-white text-center",children:r("services.payment_methods")}),c.jsx("div",{className:"h-px w-10 md:w-20 bg-gradient-to-l from-transparent to-blue-brand"})]}),c.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-5 gap-6",children:vk.map((h,f)=>c.jsxs("article",{className:"group relative flex flex-col p-6 bg-[#0a1224] border-2 border-white/5 rounded-[2rem] transition-all hover:border-blue-brand/50 hover:-translate-y-2",children:[c.jsx("div",{className:"absolute inset-0 bg-blue-brand/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]"}),c.jsx("div",{className:"w-full aspect-video flex items-center justify-center p-3 relative z-10",children:c.jsx("img",{src:h.logo,alt:h.name,className:"max-w-[80%] max-h-[80%] object-contain group-hover:scale-110 transition-transform duration-500"})}),c.jsxs("div",{className:"mt-4 text-center relative z-10 w-full overflow-hidden",children:[c.jsx("span",{className:"text-[11px] block font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-blue-brand-2 transition-colors mb-2",children:h.name}),c.jsx("p",{className:"text-[9px] text-slate-500 font-bold m-0 leading-relaxed italic opacity-80 line-clamp-2",children:(d?h.info:h.infoEs)||h.info})]})]},f))}),c.jsxs("div",{className:"panel !p-6 flex flex-col md:flex-row items-center gap-6 bg-blue-brand/5 border-blue-brand/20 relative overflow-hidden",children:[c.jsx("div",{className:"absolute inset-0 bg-grid-tech opacity-5 pointer-events-none"}),c.jsx("div",{className:"w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 bg-blue-brand/20 text-blue-brand border border-blue-brand/30 shadow-xl relative z-10",children:c.jsx(D2,{size:28})}),c.jsxs("p",{className:"m-0 text-xs md:text-sm text-slate-400 font-medium leading-relaxed relative z-10",children:[c.jsx("strong",{className:"text-white uppercase tracking-widest mr-2",children:d?"Secure Transmission:":"Información de Pago:"})," ",d?"Payments are coordinated directly via WhatsApp to ensure security. We will provide payment details after selection.":"Los pagos son coordinados directamente vía WhatsApp para garantizar la seguridad de la transacción. Al elegir un método, te proporcionaremos los datos necesarios."]})]})]})]})}const JA=[0,0,0,0,0,2e4,3e4,38700,49e3,1e5,15e4,174e3,204e3,237e3,76e4,11e5,157e4,235e4,262e4,403e4,445e4,488e4,533e4,581e4,882e4,954e4,103e5,111e5,119e5,181e5,194e5,206e5,22e6,233e5,37e6,392e5,414e5,437e5,46e6,484e5,508e5,533e5,559e5,585e5,612e5,64e6,668e5,697e5,726e5,756e5,787e5,818e5,849e5,882e5,915e5,948e5,982e5,102e6,105e6,109e6,113e6,116e6,12e7,124e6,128e6,132e6,136e6,14e7,144e6,148e6,152e6,157e6,161e6,166e6,17e7,175e6,179e6,184e6,189e6,194e6,198e6,203e6,208e6,213e6,218e6,224e6,229e6,234e6,24e7,245e6,25e7,256e6,262e6,267e6,273e6,279e6,285e6,29e7,296e6,302e6,308e6,315e6,321e6,327e6,333e6,34e7,346e6,353e6,359e6,366e6,373e6,379e6,386e6,393e6,4e8,407e6,414e6,421e6,428e6,435e6,443e6,45e7,458e6,465e6,473e6,48e7,488e6,495e6,503e6,511e6,519e6,527e6,535e6,543e6,551e6,559e6,568e6,576e6,584e6,593e6,601e6,61e7,618e6,627e6,636e6,645e6,653e6,662e6,671e6,68e7,69e7,699e6,708e6,717e6,727e6,736e6,745e6,755e6,764e6,774e6,779e6,784e6,789e6,793e6,798e6,803e6,808e6,813e6,818e6,813e6,818e6,823e6,827e6,832e6,837e6,842e6,847e6,852e6,856e6,861e6,866e6,871e6,876e6,881e6,885e6,89e7,895e6,9e8,905e6,91e7,914e6,919e6,924e6,929e6,934e6,939e6,943e6,948e6,953e6,958e6,963e6,968e6,973e6,977e6,982e6,987e6,992e6,997e6,1e9,101e7,101e7,102e7,102e7,103e7,103e7,104e7,104e7,105e7,105e7,105e7,106e7,106e7,107e7,107e7,108e7,108e7,109e7,109e7,11e8,11e8,111e7,111e7,112e7,112e7,113e7,113e7,114e7,114e7,115e7,115e7,116e7,116e7,117e7,117e7,118e7,118e7,119e7,119e7,12e8,12e8,12e8,121e7,121e7,122e7,122e7,123e7,123e7,124e7,124e7,125e7,125e7,126e7,126e7,127e7,127e7,128e7,128e7,129e7,129e7,13e8,13e8,131e7,131e7,132e7,132e7,133e7,133e7,134e7,134e7,135e7,135e7,135e7,136e7,136e7,137e7,137e7,138e7,138e7,139e7,139e7,14e8,14e8,141e7,141e7,142e7,142e7,143e7,143e7,144e7,144e7,145e7,145e7,146e7,146e7,147e7,147e7,148e7,148e7,149e7,149e7,15e8,15e8,15e8,151e7,151e7,152e7,152e7,153e7,153e7,154e7,154e7,155e7,155e7,156e7,156e7,157e7,157e7,158e7,158e7,159e6],WA=[0,0,0,0,0,5,8,10,12,25,38,44,51,59,190,275,393,588,655,1008,1113,1220,1333,1453,2205,2385,2575,2775,2975,3e3],Tf=328,Su=159e7,Sf=30,Iu=3e3,If={math_tool:{LATAM:"Herramienta de cálculo",USD:"Math Tool",PT:"Ferramenta de cálculo",FR:"Outil de calcul",DE:"Berechnungstool"},calculator:{LATAM:"CALCULADORA",USD:"CALCULATOR",PT:"CALCULADORA",FR:"CALCULATEUR",DE:"RECHNER"},hero_desc:{LATAM:"Calcula hasta qué EVO puedes subir según tus recursos y el descuento.",USD:"Calculate your maximum EVO based on your resources and active discounts.",PT:"Calcule o EVO máximo que você pode atingir com base em seus recursos e descontos.",FR:"Calculez votre EVO maximum en fonction de vos ressources et des réductions.",DE:"Berechnen Sie Ihr maximales EVO basierend auf Ihren Ressourcen und Rabatten."},current_evo:{LATAM:"EVO actual",USD:"Current EVO",PT:"EVO atual",FR:"EVO actuel",DE:"Aktuelles EVO"},available_credits:{LATAM:"Créditos disponibles",USD:"Available Credits",PT:"Créditos disponíveis",FR:"Crédits disponibles",DE:"Verfügbare Credits"},available_gold:{LATAM:"Oro disponible",USD:"Available Gold",PT:"Ouro disponível",FR:"Or disponible",DE:"Verfügbares Gold"},applied_discount:{LATAM:"Descuento aplicado",USD:"Applied Discount",PT:"Desconto aplicado",FR:"Réduction appliquée",DE:"Angewandter Rabatt"},calculate_evo:{LATAM:"Calcular EVO",USD:"Calculate EVO",PT:"Calcular EVO",FR:"Calculer l'EVO",DE:"EVO berechnen"},reset:{LATAM:"Reiniciar",USD:"Reset",PT:"Reiniciar",FR:"Réinitialiser",DE:"Zurücksetzen"},you_will_reach:{LATAM:"Llegarás a",USD:"YOU WILL REACH",PT:"VOCÊ VAI ALCANÇAR",FR:"VOUS ATTEINDREZ",DE:"SIE WERDEN ERREICHEN"},levels:{LATAM:"niveles",USD:"levels",PT:"níveis",FR:"niveaux",DE:"Ebenen"},discount:{LATAM:"Descuento",USD:"Discount",PT:"Desconto",FR:"Réduction",DE:"Rabatt"},credits_spent:{LATAM:"Gasto Créditos",USD:"Credits Spent",PT:"Créditos Gastos",FR:"Crédits dépensés",DE:"Verwendete Credits"},gold_spent:{LATAM:"Gasto Oro",USD:"Gold Spent",PT:"Ouro Gasto",FR:"Or dépensé",DE:"Verwendetes Gold"},credits_left:{LATAM:"Sobran Créditos",USD:"Credits Left",PT:"Créditos Restantes",FR:"Crédits restants",DE:"Verbleibende Credits"},gold_left:{LATAM:"Sobra Oro",USD:"Gold Left",PT:"Ouro Restante",FR:"Or restant",DE:"Verbleibendes Gold"},enter_resources:{LATAM:"Ingresa tus recursos y presiona Calcular para ver el resultado.",USD:"Enter your resources and press Calculate to see the result.",PT:"Insira seus recursos e pressione Calcular para ver o resultado.",FR:"Saisissez vos ressources et cliquez sur Calculer pour voir le résultat.",DE:"Geben Sie Ihre Ressourcen ein und drücken Sie Berechnen, um das Ergebnis zu sehen."},note:{LATAM:"Nota:",USD:"Note:",PT:"Nota:",FR:"Remarque :",DE:"Hinweis:"},note_desc:{LATAM:"Cálculo basado en reglas de MGG: cap de oro (30) y cap de créditos (328).",USD:"Calculation based on MGG rules: gold cap (30) and credit cap (328).",PT:"Cálculo baseado nas regras do MGG: limite de ouro (30) e limite de créditos (328).",FR:"Calcul basé sur les règles du MGG : limite d'or (30) et limite de crédits (328).",DE:"Berechnung basierend auf MGG-Regeln: Goldgrenze (30) und Creditgrenze (328)."}};function $A(){const{region:a}=_t(),[s,o]=B.useState(1),[r,d]=B.useState(0),[g,p]=B.useState(0),[b,_]=B.useState(0),[h,f]=B.useState(null),k=v=>{var I,S;return((I=If[v])==null?void 0:I[a])||((S=If[v])==null?void 0:S.USD)||""},G=()=>{let v=r,I=g,S=s;const w=b,X=S,H=(100-w)*.01,V=v,Y=I;let z=0;if(S>=Tf){const Z=Su*H,K=Math.floor(v/Z);v-=K*Z,z=S+K}else for(;;){if(S>=Tf){const K=Su*H,te=Math.floor(v/K);v-=te*K,z=S+te;break}const Z=Math.floor((JA[S]??Su)*H);if(v-Z>=0)v-=Z,S+=1;else{z=S;break}}let U=0;if(z>=Sf){const Z=Iu*H,K=Math.floor(I/Z);I-=K*Z,U=K}else for(;;){if(U+z>=Sf){const te=Iu*H,le=Math.floor(I/te);I-=le*te,U=le;break}const Z=WA[z+U]??Iu,K=Math.round(Z*H);if(I-K>=0)I-=K,U+=1;else break}const q=z+U;f({nuevoEvo:q,incremento:q-X,gastoCreditos:Math.max(0,V-v),gastoOro:Math.max(0,Y-I),sobraCreditos:v,sobraOro:I,descuentoAplicado:w})},y=()=>{o(1),d(0),p(0),_(0),f(null)};return c.jsxs("div",{className:"flex flex-col gap-6",children:[c.jsxs("section",{className:"hero transition-all duration-700 !p-6 md:!p-12 relative overflow-hidden bg-gradient-to-br from-blue-brand/10 via-blue-brand-2/5 to-transparent border-blue-brand-2/20 shadow-blue-brand-2/5",children:[c.jsx("div",{className:"absolute top-0 right-0 p-8 opacity-20",children:c.jsx(ru,{size:120,className:"text-blue-brand-2"})}),c.jsxs("div",{className:"eyebrow scale-90 md:scale-100",children:[c.jsx(ru,{size:14,className:"mr-1 text-blue-brand-2"}),c.jsx("span",{children:k("math_tool")})]}),c.jsxs("h1",{className:"text-3xl md:text-6xl font-black mt-4 mb-4 uppercase tracking-tighter leading-[0.9] md:leading-[0.95] text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-brand-2/80 to-blue-brand-2",children:["EVO ",c.jsx("span",{className:"text-blue-brand-2",children:k("calculator")})]}),c.jsx("p",{className:"text-muted text-sm md:text-base max-w-2xl mx-auto px-4 opacity-80",children:k("hero_desc")})]}),c.jsx(ea,{}),c.jsxs("div",{className:"grid md:grid-cols-[1fr_1.2fr] gap-4 md:gap-6 items-start",children:[c.jsx("section",{className:"panel flex flex-col gap-5 !p-4 md:!p-6 border border-white/10 bg-white/[0.01] hover:border-blue-brand/20 transition-all",children:c.jsxs("div",{className:"grid gap-3.5",children:[c.jsxs("label",{className:"kv",children:[c.jsx("span",{className:"kv-label text-[10px]",children:k("current_evo")}),c.jsx("input",{value:s,onChange:v=>o(Number(v.target.value)),className:"input py-2.5 text-sm focus:border-blue-brand-2/60 bg-white/[0.02] text-white transition-all",type:"number"})]}),c.jsxs("label",{className:"kv",children:[c.jsx("span",{className:"kv-label text-[10px]",children:k("available_credits")}),c.jsx("input",{value:r,onChange:v=>d(Number(v.target.value)),className:"input py-2.5 text-sm focus:border-blue-brand-2/60 bg-white/[0.02] text-white transition-all",type:"number"})]}),c.jsxs("label",{className:"kv",children:[c.jsx("span",{className:"kv-label text-[10px]",children:k("available_gold")}),c.jsx("input",{value:g,onChange:v=>p(Number(v.target.value)),className:"input py-2.5 text-sm focus:border-blue-brand-2/60 bg-white/[0.02] text-white transition-all",type:"number"})]}),c.jsxs("div",{children:[c.jsx("div",{className:"kv-label text-[10px] mb-2",children:k("applied_discount")}),c.jsx("div",{className:"grid grid-cols-3 gap-2",children:Mk.map(v=>c.jsxs("button",{onClick:()=>_(v),className:`btn py-2 text-xs rounded-xl transition-all duration-200 ${b===v?"btn-primary":"bg-white/5 opacity-60 hover:bg-white/10 hover:border-white/15"}`,children:[v,"%"]},v))})]}),c.jsxs("div",{className:"flex gap-2 mt-2",children:[c.jsx("button",{onClick:G,className:"btn btn-primary flex-[2] py-3 text-sm transition-all duration-200",children:k("calculate_evo")}),c.jsx("button",{onClick:y,className:"btn flex-1 py-3 text-sm border border-white/5 bg-white/[0.03] text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200",children:k("reset")})]})]})}),c.jsx("section",{className:"h-full min-h-[360px]",children:h?c.jsxs("div",{className:"panel h-full flex flex-col items-center justify-center text-center p-6 md:p-8 relative overflow-hidden transition-all duration-700 border-none bg-gradient-to-br from-blue-brand/35 via-blue-brand-2/15 to-[#0b0f19] shadow-2xl shadow-blue-brand-2/10",children:[c.jsx("div",{className:"absolute inset-0 bg-[url('https://github.com/luqueSmith/MGG/blob/main/img/Logo_mgg.png?raw=true')] bg-no-repeat bg-center opacity-[0.03] scale-150 pointer-events-none"}),c.jsx("div",{className:"kv-label uppercase tracking-widest text-[10px] opacity-70 mb-2 z-10 text-blue-200",children:k("you_will_reach")}),c.jsx("div",{className:"text-[5rem] md:text-[6rem] font-black tracking-tighter leading-none mb-2 z-10 drop-shadow-xl text-white",children:us(h.nuevoEvo)}),c.jsxs("p",{className:"text-xs md:text-sm mb-6 z-10 font-bold opacity-80 text-blue-200",children:["+",us(h.incremento)," ",k("levels")," · ",h.descuentoAplicado,"% ",k("discount")]}),c.jsxs("div",{className:"grid grid-cols-2 gap-2 md:gap-3 w-full z-10",children:[c.jsxs("div",{className:"border border-white/5 bg-black/40 p-3 rounded-xl flex flex-col items-center shadow-inner",children:[c.jsx("span",{className:"text-[8px] md:text-[9px] uppercase font-bold mb-1 text-blue-200/50",children:k("credits_spent")}),c.jsx("strong",{className:"text-sm md:text-base text-white",children:us(h.gastoCreditos)})]}),c.jsxs("div",{className:"border border-white/5 bg-black/40 p-3 rounded-xl flex flex-col items-center shadow-inner",children:[c.jsx("span",{className:"text-[8px] md:text-[9px] uppercase font-bold mb-1 text-blue-200/50",children:k("gold_spent")}),c.jsx("strong",{className:"text-sm md:text-base text-white",children:us(h.gastoOro)})]}),c.jsxs("div",{className:"border border-white/5 bg-black/20 p-3 rounded-xl flex flex-col items-center shadow-inner",children:[c.jsx("span",{className:"text-[8px] md:text-[9px] uppercase font-bold mb-1 text-white/30",children:k("credits_left")}),c.jsx("strong",{className:"text-sm md:text-base text-white/80",children:us(h.sobraCreditos)})]}),c.jsxs("div",{className:"border border-white/5 bg-black/20 p-3 rounded-xl flex flex-col items-center shadow-inner",children:[c.jsx("span",{className:"text-[8px] md:text-[9px] uppercase font-bold mb-1 text-white/30",children:k("gold_left")}),c.jsx("strong",{className:"text-sm md:text-base text-white/80",children:us(h.sobraOro)})]})]})]}):c.jsxs("div",{className:"panel h-full flex flex-col items-center justify-center text-muted gap-4 border-dashed border-white/10 hover:border-blue-brand/20 transition-all bg-white/[0.01] hover:bg-white/[0.02]",children:[c.jsx(ru,{size:48,className:"opacity-10"}),c.jsx("p",{className:"text-sm max-w-[200px] text-center",children:k("enter_resources")})]})})]}),c.jsxs("section",{className:"panel flex gap-4 items-center transition-all border border-blue-brand/20 bg-blue-brand/5 shadow-inner !p-4",children:[c.jsx(Lf,{size:20,className:"text-blue-brand-2 shrink-0"}),c.jsxs("div",{className:"text-[11px] md:text-xs leading-relaxed",children:[c.jsx("strong",{className:"text-white",children:k("note")})," ",k("note_desc")]})]})]})}const eT={"Ficha Reactor":"Reactor Token","Ficha Jackpot":"Jackpot Token","Tickets x25":"Energy Tickets x25","Tickets x5":"Energy Tickets x5","Triple Experiencia":"Triple Experience","Cuádruple Regeneración":"Quadruple Regeneration","Ficha Reto":"Challenge Token","Doble Experiencia":"Double Experience","Ataques Críticos":"Critical Attacks","Escudo Anticrítico":"Anticritical Shield","Doble Regeneración":"Double Regeneration"};function tT(){const{region:a,translate:s}=_t(),o=a==="USD",r=Object.keys(eb),[d,g]=B.useState(""),[p,b]=B.useState(r[0]),[_,h]=B.useState(12),f=S=>o?S.startsWith("Orbe ")?S.replace("Orbe Ataque","Attack Orb").replace("Orbe Vida","Life Orb").replace("Orbe Críticos","Critical Orb").replace("Orbe Experiencia","Experience Orb").replace("Orbe Regeneración","Regeneration Orb").replace("Orbe Respuesta","Retaliate Orb"):eT[S]||S:S,k=B.useMemo(()=>{const S=[];return Object.entries(eb).forEach(([w,X])=>{String(X||"").split(/\r?\n/).map(H=>H.trim()).filter(Boolean).forEach(H=>{const V=H.split("	");S.push({nombre:(V[0]||"").trim(),codigo:(V[1]||"").trim(),categoria:w,imagen:(V[2]||"").trim()||void 0})})}),S},[]),G=B.useMemo(()=>{const S=d.toLowerCase();return k.filter(w=>w.categoria===p&&(w.nombre.toLowerCase().includes(S)||w.codigo.toLowerCase().includes(S)))},[k,d,p]),[y,v]=B.useState(null),I=S=>{navigator.clipboard.writeText(S.toLowerCase()).catch(()=>{}),v(S),setTimeout(()=>v(null),2e3)};return c.jsxs("div",{className:"flex flex-col gap-6",children:[c.jsxs("section",{className:"hero !p-6 md:!p-12 relative overflow-hidden",children:[c.jsxs("div",{className:"eyebrow scale-90 md:scale-100",children:[c.jsx(Vu,{size:14}),c.jsx("span",{children:o?"Secondary Catalog":"Catálogo secundario"})]}),c.jsxs("h1",{className:"text-3xl md:text-6xl font-black mt-4 mb-4 uppercase tracking-tighter leading-[0.9] md:leading-[0.95]",children:[o?"EXTRA":"OTROS"," ",c.jsx("span",{className:"text-blue-brand-2",children:o?"CODES":"CÓDIGOS"})]}),c.jsx("p",{className:"text-muted text-sm md:text-base max-w-2xl mx-auto px-4 opacity-80",children:o?"Orbs, consumables, structures, boxes, and offers filtered by category.":"Orbes, consumibles, estructuras, cajas y ofertas filtradas por categoría."})]}),c.jsx(ea,{}),c.jsxs("section",{className:"panel flex flex-col gap-4 !p-4 md:!p-6 transition-all border",children:[c.jsx("div",{className:"flex flex-wrap gap-2 text-center",children:r.map(S=>c.jsx("button",{onClick:()=>{b(S),h(12)},className:`flex-1 min-w-[120px] px-4 py-3 rounded-xl border text-[10px] font-black uppercase tracking-widest transition-all ${p===S?"bg-blue-brand border-blue-brand-2 text-white shadow-lg":"bg-white/5 border-transparent text-slate-400 hover:bg-white/10"}`,children:o?S==="Cajas"?"Boxes":S==="Recursos"?"Resources":S==="Orbes"?"Orbs":S:S},S))}),c.jsxs("div",{className:"relative",children:[c.jsx(qu,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-white/40"}),c.jsx("input",{value:d,onChange:S=>g(S.target.value),placeholder:o?`Search in ${p}...`:`Buscar en ${p}...`,className:"input pl-11 py-3.5 text-sm"})]})]}),c.jsx("section",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-4",children:G.length>0?G.slice(0,_).map((S,w)=>c.jsxs("article",{className:"card p-4 flex flex-col gap-3 group transition-all border hover:border-blue-brand/40",children:[S.imagen?c.jsx("div",{className:"flex items-center justify-center p-3 rounded-xl aspect-square overflow-hidden transition-colors bg-white/5",children:c.jsx("img",{src:S.imagen,alt:f(S.nombre),className:"w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"})}):c.jsx("div",{className:"flex items-center justify-center p-3 rounded-xl aspect-square overflow-hidden opacity-30 bg-blue-brand/10 text-blue-brand-2",children:c.jsx(Vu,{size:32})}),c.jsxs("div",{className:"flex-1 flex flex-col pt-1",children:[c.jsx("h3",{className:"text-xs md:text-sm font-black uppercase tracking-tight mb-1 line-clamp-1 transition-colors",children:f(S.nombre)}),c.jsx("div",{className:"font-mono font-bold text-[9px] md:text-[10px] tracking-widest uppercase mb-4 opacity-80 text-blue-brand-2",children:S.codigo}),c.jsxs("button",{onClick:()=>I(S.codigo),className:`btn w-full text-[10px] font-black uppercase tracking-widest py-2.5 rounded-xl mt-auto transition-all ${y===S.codigo?"bg-green-brand/20 border-green-brand/30 text-green-brand":"hover:bg-blue-brand/15"}`,children:[y===S.codigo?c.jsx(vi,{size:12}):c.jsx(Du,{size:12}),c.jsx("span",{children:y===S.codigo?o?"DONE":"LISTO":o?"COPY":"COPIAR"})]})]})]},w)):c.jsx("div",{className:"col-span-full py-16 text-center border font-bold uppercase tracking-widest text-[10px] rounded-2xl bg-[#0d1421] border-line text-muted",children:o?"No codes found in this section.":"No se encontraron códigos en esta sección."})}),G.length>_&&c.jsx("div",{className:"flex justify-center mt-6",children:c.jsx("button",{onClick:()=>h(S=>S+12),className:"btn px-12 py-3.5 rounded-xl font-black uppercase tracking-widest text-xs transition-all bg-blue-brand/10 border-blue-brand/20 hover:bg-blue-brand/20",children:o?"Load More":"Cargar más"})})]})}const jf={quick_manual:{LATAM:"Manual rápido",USD:"Quick Manual",PT:"Manual Rápido",FR:"Manuel Rapide",DE:"Schnellstart-Anleitung"},title1:{LATAM:"GUÍA",USD:"USER",PT:"GUIA",FR:"GUIDE",DE:"BENUTZER"},title2:{LATAM:"DE USO",USD:"GUIDE",PT:"DO USUÁRIO",FR:"D'UTILISATION",DE:"HANDBUCH"},subtitle:{LATAM:"Todo lo básico para usar el catálogo sin perderte.",USD:"Everything you need to know to use the catalog without getting lost.",PT:"Tudo o que você precisa saber para usar o catálogo sem se perder.",FR:"Tout ce que vous devez savoir pour utiliser le catalogue sans vous perdre.",DE:"Alles, was Sie wissen müssen, um den Katalog zu nutzen, ohne sich zu verlaufen."},sec1_title:{LATAM:"1) Buscar por nombre o por código",USD:"1) Search by name or code",PT:"1) Buscar por nome ou por código",FR:"1) Recherche par nom ou code",DE:"1) Suche nach Name oder Code"},sec1_items:{LATAM:["Escribe parte del nombre o el código en el buscador.","El listado se filtra en tiempo real."],USD:["Type part of the name or code in the search box.","The list filters in real time."],PT:["Digite parte do nome ou código na caixa de busca.","A lista é filtrada em tempo real."],FR:["Saisissez une partie du nom ou du code dans la barre de recherche.","La liste est filtrée en temps réel."],DE:["Geben Sie einen Teil des Namens oder Codes im Suchfeld ein.","Die Liste filtert in Echtzeit."]},sec2_title:{LATAM:"2) Filtros por genes (máximo 2)",USD:"2) Gene filters (max 2)",PT:"2) Filtros de genes (máximo 2)",FR:"2) Filtres de gènes (max 2)",DE:"2) Genfilter (max. 2)"},sec2_items:{LATAM:["Puedes activar hasta 2 genes a la vez.","El filtro exige que el mutante tenga ambos genes seleccionados."],USD:["You can activate up to 2 genes at once.","The filter requires the mutant to have both selected genes."],PT:["Você pode ativar até 2 genes ao mesmo tempo.","O filtro exige que o mutante tenha ambos os genes selecionados."],FR:["Vous pouvez activer jusqu'à 2 gènes à la fois.","Le filtre exige que le mutant possède les deux gènes sélectionnés."],DE:["Sie können bis zu 2 Gene gleichzeitig aktivieren.","Der Filter erfordert, dass der Mutant beide ausgewählten Gene besitzt."]},sec3_title:{LATAM:"3) Copiar códigos sin errores",USD:"3) Copy codes without errors",PT:"3) Copiar códigos sem erros",FR:"3) Copier les codes sans erreur",DE:"3) Codes fehlerfrei kopieren"},sec3_items:{LATAM:["Pulsa el botón “Copiar código”.","El texto se envía al portapapeles automáticamente."],USD:['Click the "Copy Code" button.',"The text is automatically sent to the clipboard."],PT:['Clique no botão "Copiar código".',"O texto é enviado automaticamente para a área de transferência."],FR:['Cliquez sur le bouton "Copier le code".',"Le texte est automatiquement envoyé dans le presse-papiers."],DE:['Klicken Sie auf die Schaltfläche "Code kopieren".',"Der Text wird automatisch in die Zwischenablage kopiert."]},sec4_title:{LATAM:"4) Qué hay en cada página",USD:"4) What is on each page",PT:"4) O que há em cada página",FR:"4) Contenu de chaque page",DE:"4) Was ist auf jeder Seite"},sec4_items:{LATAM:["Inicio: base de mutantes.","Servicios: packs y pedidos.","Evo: calculadora.","Otros códigos: orbes y extras.","Descargas y tutoriales: recursos y videos."],USD:["Home: mutant database.","Services: packs and orders.","Evo: calculator.","Other codes: orbs and extras.","Downloads and tutorials: resources and videos."],PT:["Início: banco de dados de mutantes.","Serviços: pacotes e pedidos.","Evo: calculadora.","Outros códigos: orbes e extras.","Downloads e tutoriais: recursos e vídeos."],FR:["Accueil: base de données de mutants.","Services: packs et commandes.","Evo: calculateur.","Autres codes: orbes et suppléments.","Téléchargements et tutoriels: ressources et vidéos."],DE:["Startseite: Mutanten-Datenbank.","Dienste: Pakete und Bestellungen.","Evo: Rechner.","Andere Codes: Orbs und Extras.","Downloads und Tutorials: Ressourcen und Videos."]},sec5_title:{LATAM:"5) Rendimiento (menos lag)",USD:"5) Performance (less lag)",PT:"5) Desempenho (menos lag)",FR:"5) Performance (moins de décalage)",DE:"5) Leistung (weniger Lag)"},sec5_items:{LATAM:["La versión React utiliza componentes dinámicos para mayor fluidez.","Si algo se ve raro, recarga la aplicación."],USD:["The React version uses dynamic components for better fluidity.","If something looks weird, reload the application."],PT:["A versão React usa componentes dinâmicos para melhor fluidez.","Se algo parecer estranho, recarregue o aplicativo."],FR:["La version React utilise des composants dynamiques pour une meilleure fluidité.","Si quelque chose semble anormal, rechargez l'application."],DE:["Die React-Version verwendet dynamische Komponenten für mehr Flüssigkeit.","Wenn etwas seltsam aussieht, laden Sie die Anwendung neu."]}};function nT(){const{region:a}=_t(),s=r=>{var d,g;return((d=jf[r])==null?void 0:d[a])||((g=jf[r])==null?void 0:g.USD)||""},o=[{title:s("sec1_title"),items:s("sec1_items"),icon:bi},{title:s("sec2_title"),items:s("sec2_items"),icon:bi},{title:s("sec3_title"),items:s("sec3_items"),icon:bi},{title:s("sec4_title"),items:s("sec4_items"),icon:bi},{title:s("sec5_title"),items:s("sec5_items"),icon:bi}];return c.jsxs("div",{className:"flex flex-col gap-6",children:[c.jsxs("section",{className:"hero transition-all duration-700 !p-6 md:!p-12 relative overflow-hidden bg-gradient-to-br from-blue-brand/10 via-blue-brand-2/5 to-transparent border-blue-brand-2/20 shadow-blue-brand-2/5",children:[c.jsx("div",{className:"absolute top-0 right-0 p-8 opacity-20",children:c.jsx(Eu,{size:120,className:"text-blue-brand-2"})}),c.jsxs("div",{className:"eyebrow scale-90 md:scale-100",children:[c.jsx(Eu,{size:16,className:"text-blue-brand-2"}),c.jsx("span",{children:s("quick_manual")})]}),c.jsxs("h1",{className:"text-4xl md:text-6xl font-black mt-2.5 mb-2.5 uppercase tracking-tighter leading-[0.95] text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-brand-2/80 to-blue-brand-2",children:[s("title1")," ",c.jsx("span",{className:"text-blue-brand-2",children:s("title2")})]}),c.jsx("p",{className:"text-muted max-w-2xl mx-auto px-4 opacity-80",children:s("subtitle")})]}),c.jsx(ea,{}),c.jsx("section",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:o.map((r,d)=>{const g=r.icon;return c.jsxs("article",{className:"panel flex flex-col gap-4 border border-white/10 bg-white/[0.01] hover:border-blue-brand-2/30 hover:bg-white/[0.02] shadow-lg transition-all duration-300",children:[c.jsx("div",{className:"w-12 h-12 rounded-2xl flex items-center justify-center transition-colors bg-white/8 text-blue-brand-2",children:c.jsx(g,{size:24})}),c.jsx("h3",{className:"text-xl font-bold tracking-tight m-0 text-white",children:r.title}),c.jsx("div",{className:"flex flex-col gap-2",children:r.items.map((p,b)=>c.jsx("p",{className:"text-muted m-0 text-sm leading-relaxed opacity-90",children:p},b))})]},d)})})]})}const Vf={multimedia:{LATAM:"Contenido multimedia",USD:"Multimedia",PT:"Conteúdo multimídia",FR:"Contenu multimédia",DE:"Multimedia-Inhalte"},tutoriales_title1:{LATAM:"TUTORIALES",USD:"YOUTUBE",PT:"TUTORIAIS",FR:"TUTORIELS",DE:"TUTORIALS"},tutoriales_title2:{LATAM:"YOUTUBE",USD:"GUIDES",PT:"YOUTUBE",FR:"YOUTUBE",DE:"YOUTUBE"},tutoriales_desc:{LATAM:"Aquí subo guías rápidas y tips sobre el catálogo y Mutants: Genetic Gladiators.",USD:"Quick guides and tips about the catalog and Mutants: Genetic Gladiators.",PT:"Aqui eu posto guias rápidos e dicas sobre o catálogo e Mutants: Genetic Gladiators.",FR:"Ici, je publie des guides rapides et des conseils sur le catalogue et Mutants: Genetic Gladiators.",DE:"Hier lade ich Kurzanleitungen und Tipps zum Katalog und Mutants: Genetic Gladiators hoch."},youtube_channel:{LATAM:"Canal de YouTube",USD:"YouTube Channel",PT:"Canal do YouTube",FR:"Chaîne YouTube",DE:"YouTube-Kanal"},youtube_channel_desc:{LATAM:"Si estás en móvil, puede abrir la app de YouTube si la tienes instalada.",USD:"If you are on mobile, it might open the YouTube app directly.",PT:"Se estiver no celular, pode abrir o aplicativo do YouTube diretamente.",FR:"Si vous êtes sur mobile, cela peut ouvrir directement l'application YouTube.",DE:"Wenn Sie mobil unterwegs sind, wird möglicherweise direkt die YouTube-App geöffnet."},go_to:{LATAM:"Ir a @spieler_Lc",USD:"Go to @spieler_Lc",PT:"Ir para @spieler_Lc",FR:"Aller sur @spieler_Lc",DE:"Gehe zu @spieler_Lc"},view_videos:{LATAM:"Ver videos",USD:"View videos",PT:"Ver vídeos",FR:"Voir les vidéos",DE:"Videos anzeigen"},want_to_find:{LATAM:"¿Qué vas a encontrar?",USD:"What will you find?",PT:"O que você vai encontrar?",FR:"Que trouverez-vous ?",DE:"Was werden Sie finden?"},bullet1:{LATAM:"Cómo buscar mutantes y copiar códigos sin errores.",USD:"How to search for mutants and copy codes without errors.",PT:"Como procurar mutantes e copiar códigos sem erros.",FR:"Comment rechercher des mutants et copier des codes sans erreur.",DE:"So suchen Sie nach Mutanten und kopieren Codes fehlerfrei."},bullet2:{LATAM:"Cómo usar filtros por genes.",USD:"How to use gene filters.",PT:"Como usar filtros por genes.",FR:"Comment utiliser les filtres par gènes.",DE:"So verwenden Sie Genfilter."},bullet3:{LATAM:"Consejos para usar emuladores y reducir el lag.",USD:"Tips for using emulators and reducing lag.",PT:"Dicas para usar emuladores e reduzir o lag.",FR:"Conseils pour utiliser des émulateurs et réduire le décalage (lag).",DE:"Tipps zur Verwendung von Emulatoren und zur Reduzierung von Lag."}};function aT(){const{region:a}=_t(),s=o=>{var r,d;return((r=Vf[o])==null?void 0:r[a])||((d=Vf[o])==null?void 0:d.USD)||""};return c.jsxs("div",{className:"flex flex-col gap-6",children:[c.jsxs("section",{className:"hero transition-all duration-700 !p-6 md:!p-12 relative overflow-hidden bg-gradient-to-br from-blue-brand/10 via-blue-brand-2/5 to-transparent border-blue-brand-2/20 shadow-blue-brand-2/5",children:[c.jsx("div",{className:"absolute top-0 right-0 p-8 opacity-20",children:c.jsx(lr,{size:120,className:"text-blue-brand-2"})}),c.jsxs("div",{className:"eyebrow scale-90 md:scale-100",children:[c.jsx(lr,{size:16,className:"text-blue-brand-2"}),c.jsx("span",{children:s("multimedia")})]}),c.jsxs("h1",{className:"text-4xl md:text-6xl font-black mt-2.5 mb-2.5 uppercase tracking-tighter leading-[0.95] text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-brand-2/80 to-blue-brand-2",children:[s("tutoriales_title1")," ",c.jsx("span",{className:"text-blue-brand-2",children:s("tutoriales_title2")})]}),c.jsx("p",{className:"text-muted max-w-2xl mx-auto px-4 opacity-80",children:s("tutoriales_desc")})]}),c.jsx(ea,{}),c.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[c.jsxs("section",{className:"panel flex flex-col gap-5 transition-all duration-300 border border-white/10 bg-white/[0.01] hover:border-blue-brand-2/30 hover:bg-white/[0.02]",children:[c.jsx("div",{className:"w-12 h-12 rounded-2xl flex items-center justify-center bg-white/8 text-red-500 shadow-lg shadow-red-500/10",children:c.jsx(lr,{size:24})}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-xl font-bold tracking-tight mb-2 text-white",children:s("youtube_channel")}),c.jsx("p",{className:"text-muted text-sm m-0 leading-relaxed opacity-90",children:s("youtube_channel_desc")})]}),c.jsxs("div",{className:"flex flex-wrap gap-3 mt-auto",children:[c.jsxs("a",{className:"btn btn-primary px-6 transition-all duration-200",target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/@spieler_Lc",children:[c.jsx(Yn,{size:18}),c.jsx("span",{children:s("go_to")})]}),c.jsxs("a",{className:"btn px-6 border-white/10 hover:border-blue-brand-2 hover:bg-blue-brand-2/10 transition-all duration-200",target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/@spieler_Lc/videos",children:[c.jsx(j2,{size:18}),c.jsx("span",{children:s("view_videos")})]})]})]}),c.jsxs("section",{className:"panel flex flex-col gap-5 transition-all duration-300 border border-white/10 bg-white/[0.01] hover:border-blue-brand-2/30 hover:bg-white/[0.02]",children:[c.jsx("div",{className:"w-12 h-12 rounded-2xl flex items-center justify-center bg-white/8 text-yellow-brand shadow-lg shadow-yellow-brand/10",children:c.jsx(K2,{size:24})}),c.jsx("h3",{className:"text-xl font-bold tracking-tight m-0 text-white",children:s("want_to_find")}),c.jsxs("ul",{className:"text-muted text-sm space-y-3 pl-5 list-disc marker:text-blue-brand-2/50",children:[c.jsx("li",{children:s("bullet1")}),c.jsx("li",{children:s("bullet2")}),c.jsx("li",{children:s("bullet3")})]})]})]})]})}const sT=[{id:"mutantes",num:"[1]",title:"Mutantes",desc:"Permite buscar mutantes, reemplazarlos por nombre o código y consultar categorías especiales.",children:[{id:"mutantes-hibridadora",num:"[1]",title:"Reemplazar Mutantes en Hibridadora",desc:"Accede a las opciones de reemplazo de especímenes en la estación de hibridación.",children:[{id:"op-hibridadora-nombre",num:"[1]",title:"Reemplazar (Buscar por Nombre)",desc:"Busca un mutante por su nombre e inyéctalo directamente en la ranura activa."},{id:"op-hibridadora-codigo",num:"[2]",title:"Reemplazar (Buscar por Codigo)",desc:"Especifica la clave o código identificador hexadecimal del mutante para inyectarlo."},{id:"op-hibridadora-lista",num:"[3]",title:"Lista de Mutantes (Solo Lista)",desc:"Muestra el listado de todos los especímenes registrados en el archivo de datos."}]},{id:"mutantes-tienda",num:"[2]",title:"Tienda de Mutantes",desc:"Visualiza la simulación de ofertas y paquetes completos disponibles para mutantes.",children:[{id:"op-tienda-paquetes",num:"[1]",title:"Todos los Paquetes de Mutantes"},{id:"op-tienda-todos",num:"[2]",title:"Todos los Mutantes"},{id:"op-tienda-platino",num:"[3]",title:"Paquete Platino"},{id:"op-tienda-creditos",num:"[4]",title:"Mutantes a Creditos - Seccion 1"},{id:"op-tienda-oro",num:"[5]",title:"Mutantes Meta y Comunes a Oro - Seccion 1"},{id:"op-tienda-monogen",num:"[6]",title:"Paquete Monogen Platino"}]},{id:"mutantes-especiales",num:"[3]",title:"Mutantes Especiales",desc:"Explora mutantes exclusivos, de eventos mensuales, neo monogenes e híbridos de élite.",children:[{id:"mutantes-especiales-exclusivos",num:"[1]",title:"Mutantes Exclusivos",desc:"Consola para activar mutantes legendarios y de colección ultra rara.",children:[{id:"op-exc-goliath",num:"[>]",title:"Goliath R Marciano Errante"},{id:"op-exc-juan",num:"[>]",title:"Juan Hielo R Deus Machina"},{id:"op-exc-paz",num:"[>]",title:"Capitan Paz R Nebulon"},{id:"op-exc-george",num:"[>]",title:"George Washington R Senor del Abismo"},{id:"op-exc-louis",num:"[>]",title:"Louis XVI R Senor del Abismo"},{id:"op-exc-mapach",num:"[>]",title:"Mapach Wik R Nebulon"},{id:"op-exc-santoctopus",num:"[>]",title:"Santoctopus R Deus Machina"},{id:"op-exc-genimal",num:"[>]",title:"Genimal R Senor del Abismo"},{id:"op-exc-hog",num:"[>]",title:"Hog the Ripper R Marciano Errante"},{id:"op-exc-tio",num:"[>]",title:"El Tio Sam R Marciano Errante"},{id:"op-exc-eva",num:"[>]",title:"Duplicado de Eva R Nebulon"},{id:"op-exc-sable",num:"[>]",title:"Sable R Deus Machina"},{id:"op-exc-artemisa",num:"[>]",title:"Artemisa R Deus Machina"},{id:"op-exc-claus",num:"[>]",title:"Mega Claus R Marciano Errante"},{id:"op-exc-aplastador",num:"[>]",title:"Aplastador R Senor del Abismo"},{id:"op-exc-spartac",num:"[>]",title:"Spartac R Senor del Abismo"},{id:"op-exc-geomega",num:"[>]",title:"Geomega R Nebulon"},{id:"op-exc-arcangel",num:"[>]",title:"Arcangel R Nebulon"},{id:"op-exc-diablo",num:"[>]",title:"Diablo R Deus Machina"},{id:"op-exc-norem",num:"[>]",title:"Norem R Deus Machina"},{id:"op-exc-surfista",num:"[>]",title:"Surfista del Espacio R Senor del Abismo"},{id:"op-exc-master",num:"[>]",title:"Master Paw R Marciano Errante"},{id:"op-exc-akai",num:"[>]",title:"Akai Bot R Deus Machina"},{id:"op-exc-kolossus",num:"[>]",title:"Kolossus R Nebulon"},{id:"op-exc-achabe",num:"[>]",title:"Capitan Achabe R Senor del Abismo"},{id:"op-exc-heimdall",num:"[>]",title:"Heimdall R Marciano Errante"},{id:"op-exc-oriax",num:"[>]",title:"Oriax R Deus Machina"},{id:"op-exc-caliburn",num:"[>]",title:"Caliburn Ex R Nebulon"},{id:"op-exc-chocoleon",num:"[>]",title:"Generalisimo Chocoleon R Senor del Abismo"}]},{id:"mutantes-especiales-mensuales",num:"[2]",title:"Mutantes Mensuales 2024 - 2025",desc:"Elige entre los mutantes liberados mensualmente como recompensa de temporada.",children:[{id:"op-men-amistad",num:"[>]",title:"Amistad Sin Limites R Mutante Mensual"},{id:"op-men-black",num:"[>]",title:"Black Ice R Mutante Mensual"},{id:"op-men-hidrira",num:"[>]",title:"Hidrira R Mutante Mensual"},{id:"op-men-nexo",num:"[>]",title:"Nexo Orbital R Mutante Mensual"},{id:"op-men-fiera",num:"[>]",title:"Fiera del Campo R Mutante Mensual"},{id:"op-men-bestial",num:"[>]",title:"Senor Bestial R Mutante Mensual"},{id:"op-men-emperador",num:"[>]",title:"Emperador Helado R Mutante Mensual"},{id:"op-men-profesor",num:"[>]",title:"Profesor Cronomantico R Mutante Mensual"},{id:"op-men-bearsikk",num:"[>]",title:"Bearsikk Sikleast R Mutante Mensual"},{id:"op-men-sakuraboshi",num:"[>]",title:"Sakuraboshi R Mutante Mensual"},{id:"op-men-nucleo",num:"[>]",title:"Nucleo Serafico R Mutante Mensual"},{id:"op-men-helidron",num:"[>]",title:"Helidron R Mutante Mensual"}]},{id:"op-neo-monogenes",num:"[3]",title:"Neo Monogenes",desc:"Accede a la sección de reactivos monogenéticos avanzados."},{id:"op-buranka-britany",num:"[4]",title:"Buranka y Britany",desc:"Inyectar el paquete especial de gemelas Buranka & Britany."}]}]},{id:"reactor",num:"[2]",title:"Reactor",desc:"Agrupa las herramientas relacionadas con la preparación, modificación y uso del reactor.",children:[{id:"op-reactor-cambiar",num:"[1]",title:"Cambiar Reactor (Preparar)",desc:"Prepara los archivos internos para cambiar el reactor."},{id:"op-reactor-hackear",num:"[2]",title:"Hackear Reactor (Aplicar el Cambio)",desc:"Aplica de inmediato los cambios y actualiza el estado del reactor."},{id:"op-reactor-fichas",num:"[3]",title:"Fichas Reactor",desc:"Desbloquea o simula la obtención de fichas especiales para el reactor."},{id:"op-reactor-preparar",num:"[4]",title:"Preparar y Pelear",desc:"Secuencia automatizada para listar especímenes y entrar en batalla directa."},{id:"op-reactor-salas",num:"[5]",title:"Salas Reactor",desc:"Configura o cambia la sala activa para torneos de reactor."}]},{id:"cajas",num:"[3]",title:"Cajas y Paquetes",desc:"Incluye cajas especiales, paquetes generales y opciones adicionales de la tienda.",children:[{id:"cajas-desbloquear",num:"[1]",title:"Desbloquear Cajas",desc:"Consola para desbloquear todos los tipos de cajas especiales disponibles.",children:[{id:"op-cajas-desb-todas",num:"[1]",title:"Activar Todas las Cajas"},{id:"op-cajas-desb-g1",num:"[2]",title:"Grupo 1: Cajas de Aniversario y Navidad"},{id:"op-cajas-desb-g2",num:"[3]",title:"Grupo 2: Cajas Especiales y Elite"}]},{id:"cajas-generales",num:"[2]",title:"Paquetes Generales",desc:"Explora ofertas para potenciar velocidad, obtención de cajas navideñas, escudos y experiencia.",children:[{id:"op-cajas-gen-aniv",num:"[1]",title:"Cajas de Aniversario y Navidad"},{id:"op-cajas-gen-rapidez",num:"[2]",title:"Paquete Rapidez Nivel 5"},{id:"op-cajas-gen-escudo",num:"[3]",title:"Paquete Escudo Especial Nivel 5"},{id:"op-cajas-gen-exp",num:"[4]",title:"Paquetes de EXP y Creditos"},{id:"op-cajas-gen-misteriosas",num:"[5]",title:"Cajas Misteriosas"},{id:"op-cajas-gen-ofertas",num:"[6]",title:"Ofertas y Paquetes"},{id:"op-cajas-gen-fortalecer",num:"[7]",title:"Paquete Fortalecimiento Nivel 5"}]},{id:"cajas-especiales",num:"[3]",title:"Paquetes Especiales",desc:"Accede a ofertas secretas y paquetes de cajas misteriosas secundarias.",children:[{id:"op-cajas-esp-mas-misterio",num:"[1]",title:"Mas Cajas Misteriosas"}]}]},{id:"recursos",num:"[4]",title:"Recursos, Fichas y Mejoras",desc:"Reune recursos, fichas, mejoras y elementos especiales.",children:[{id:"op-rec-laboratorio",num:"[1]",title:"Laboratorio Medico",desc:"Desbloquea mejoras completas para el hospital de regeneración instantánea."},{id:"op-rec-horno",num:"[2]",title:"Horno de Oro",desc:"Simula el incremento o el funcionamiento acelerado del horno de oro."},{id:"op-rec-velocidad",num:"[3]",title:"Velocidad x5",desc:"Modifica la velocidad de reproducción y actividades por cinco veces."},{id:"op-rec-compras",num:"[4]",title:"Compras Ilimitadas",desc:"Simula la obtención de bonificaciones ilimitadas en la tienda de juego."},{id:"op-rec-mutosterona",num:"[5]",title:"Mutosterona",desc:"Añade mutosterona simulada para procesos de evolución veloz."},{id:"op-rec-estrellas",num:"[6]",title:"Elstrellas",desc:"Aumenta el medidor de estrellas para canjes de premios raros."},{id:"op-rec-caja-creditos",num:"[7]",title:"Caja Creditos",desc:"Obtén cajas de créditos masivos para tu cuenta de mutantes."},{id:"op-[#a1b3cb]",num:"[8]",title:"Zona Deluxe",desc:"Inyectar el pase exclusivo simulado de zona VIP de mutantes."},{id:"op-rec-jackpot",num:"[9]",title:"Fichas Jackpot (Recurso)",desc:"Genera fichas ilimitadas para la ruleta del Jackpot."},{id:"op-rec-xp",num:"[10]",title:"Frascos XP (Recurso)",desc:"Añade cargamentos de frascos de experiencia máxima."},{id:"op-rec-reto",num:"[11]",title:"Fichas Reto",desc:"Desbloquea tiquets y fichas ilimitadas para la arena del reto."},{id:"op-reactor-fichas",num:"[12]",title:"Fichas Reactor",desc:"Desbloquea o simula la obtención de fichas especiales para el reactor."}]},{id:"orbes",num:"[5]",title:"Orbes",desc:"Permite conocer las opciones relacionadas con orbes básicos, avanzados y paquetes.",children:[{id:"op-orbes-xp4",num:"[1]",title:"Orbe XP Nivel 4",desc:"Obtén orbes premium de experiencia multiplicada de nivel 4."},{id:"op-orbes-b6",num:"[2]",title:"Orbes Basicos Nivel 6",desc:"Introduce un lote de orbes básicos de grado 6."},{id:"op-orbes-atk-vd-crit",num:"[3]",title:"Orbes ATK / VD / CRIT",desc:"Inyectar orbes de bonificación estadística mixta."},{id:"orbes-paquetes",num:"[4]",title:"Paquetes de Orbes",desc:"Elige un pack concentrado de gemas de nivel 6 o 7.",children:[{id:"op-orb-p-b6",num:"[1]",title:"Paquete de Orbes Basicos Nivel 6"},{id:"op-orb-p-poder6",num:"[2]",title:"Paquete de Orbes de Poder Nivel 6"},{id:"op-orb-p-xp4",num:"[3]",title:"Paquete de Orbes de EXP Nivel 4"},{id:"op-orb-p-b7",num:"[4]",title:"Paquete de Orbes Basicos Nivel 7"}]},{id:"orbes-n7",num:"[5]",title:"Orbes Nivel 7",desc:"Introduce los orbes individuales más potentes del juego.",children:[{id:"op-orb-n7-atk",num:"[1]",title:"Ataque Nivel 7"},{id:"op-orb-n7-vida",num:"[2]",title:"Vida Nivel 7"},{id:"op-orb-n7-crit",num:"[3]",title:"Critico Nivel 7"},{id:"op-orb-n7-xp6",num:"[4]",title:"XP Nivel 6"}]}]},{id:"acerca",num:"[6]",title:"Acerca de",desc:"Muestra detalles internos del simulador, su versión educativa actual y créditos de Smith Luque.",children:[{id:"op-acerca-info",num:"[1]",title:"Informacion del Script",desc:"Consulta la nota aclaratoria, créditos del desarrollador y estado de prueba."}]}],Ef={mutantes:{title:{LATAM:"Mutantes",USD:"Mutants",PT:"Mutantes",FR:"Mutants",DE:"Mutanten"},desc:{LATAM:"Permite buscar mutantes, reemplazarlos por nombre o código y consultar categorías especiales.",USD:"Allows you to search for mutants, replace them by name or code and consult special categories.",PT:"Permite buscar mutantes, substituí-los por nome ou código e consultar categorias especiais.",FR:"Permet de rechercher des mutants, de les remplacer par nom ou par code et de consulter des catégories spéciales.",DE:"Ermöglicht die Suche nach Mutanten, deren Ersetzung nach Name oder Code und die Einsicht in spezielle Kategorien."}},"mutantes-hibridadora":{title:{LATAM:"Reemplazar Mutantes en Hibridadora",USD:"Replace Mutants in Breeding Center",PT:"Substituir Mutantes na Hibridadora",FR:"Remplacer les Mutants dans la Couveuse",DE:"Mutanten im Brutzentrum ersetzen"},desc:{LATAM:"Accede a las opciones de reemplazo de especímenes en la estación de hibridación.",USD:"Access specimen replacement options in the breeding station.",PT:"Acesse as opções de substituição de espécimes na estação de hibridização.",FR:"Accédez aux options de remplacement de spécimens dans la station de croisement.",DE:"Greifen Sie auf Optionen zum Austausch von Proben im Brutzentrum zu."}},"op-hibridadora-nombre":{title:{LATAM:"Reemplazar (Buscar por Nombre)",USD:"Replace (Search by Name)",PT:"Substituir (Buscar por Nome)",FR:"Remplacer (Rechercher par Nom)",DE:"Ersetzen (Suche nach Name)"},desc:{LATAM:"Busca un mutante por su nombre e inyéctalo directamente en la ranura activa.",USD:"Search for a mutant by name and inject it directly into the active slot.",PT:"Busque um mutante pelo nome e injete-o diretamente no espaço activo.",FR:"Recherchez un mutant par nom et injectez-le directement dans l'emplacement actif.",DE:"Suchen Sie eine Mutante nach Name und fügen Sie sie direkt in den aktiven Slot ein."}},"op-hibridadora-codigo":{title:{LATAM:"Reemplazar (Buscar por Codigo)",USD:"Replace (Search by Code)",PT:"Substituir (Buscar por Código)",FR:"Remplacer (Rechercher par Code)",DE:"Ersetzen (Suche nach Code)"},desc:{LATAM:"Especifica la clave o código identificador hexadecimal del mutante para inyectarlo.",USD:"Specify the mutant's hexadecimal key or ID code to inject it.",PT:"Especifique a chave ou código ID hexadecimal do mutante para injetá-lo.",FR:"Spécifiez la clé ou le code d'identification hexadécimal du mutant pour l'injecter.",DE:"Geben Sie den Hex-Schlüssel oder ID-Code der Mutante ein, um sie zu injizieren."}},"op-hibridadora-lista":{title:{LATAM:"Lista de Mutantes (Solo Lista)",USD:"Mutant List (List Only)",PT:"Lista de Mutantes (Apenas Lista)",FR:"Liste des Mutants (Liste seule)",DE:"Mutantenliste (Nur Liste)"},desc:{LATAM:"Muestra el listado de todos los especímenes registrados en el archivo de datos.",USD:"Shows the list of all registered specimens in the data file.",PT:"Mostra a lista de todos os espécimes registrados no arquivo de dados.",FR:"Affiche la liste de tous les spécimens enregistrés dans le fichier de données.",DE:"Zeigt die Liste aller registrierten Proben in der Datendatei."}},"mutantes-tienda":{title:{LATAM:"Tienda de Mutantes",USD:"Mutants Shop",PT:"Loja de Mutantes",FR:"Boutique de Mutants",DE:"Mutantenshop"},desc:{LATAM:"Visualiza la simulación de ofertas y paquetes completos disponibles para mutantes.",USD:"Visualize simulation grids of offers and complete packages available for mutants.",PT:"Visualiza o grid de simulação de ofertas e pacotes completos disponíveis para mutantes.",FR:"Visualisez la simulation d'offres et de packs complets disponibles pour les mutants.",DE:"Visualisieren Sie die Simulation von Angeboten und Komplettpaketen für Mutanten."}},"op-tienda-paquetes":{title:{LATAM:"Todos los Paquetes de Mutantes",USD:"All Mutant Packages",PT:"Todos os Pacotes de Mutantes",FR:"Tous les Packs de Mutants",DE:"Alle Mutantenpakete"}},"op-tienda-todos":{title:{LATAM:"Todos los Mutantes",USD:"All Mutants",PT:"Todos os Mutantes",FR:"Tous os Mutantes",DE:"Alle Mutanten"}},"op-tienda-platino":{title:{LATAM:"Paquete Platino",USD:"Platinum Pack",PT:"Pacote Platina",FR:"Pack Platine",DE:"Platin-Paket"}},"op-tienda-creditos":{title:{LATAM:"Mutantes a Creditos - Seccion 1",USD:"Mutants for Credits - Section 1",PT:"Mutantes por Créditos - Seção 1",FR:"Mutants pour Crédits - Section 1",DE:"Mutanten für Kredite - Sektion 1"}},"op-tienda-oro":{title:{LATAM:"Mutantes Meta y Comunes a Oro - Seccion 1",USD:"Meta & Common Mutants to Gold - Section 1",PT:"Mutantes Meta e Comuns para Ouro - Seção 1",FR:"Mutants Méta & Communs en Or - Section 1",DE:"Meta & Gewöhnliche Mutanten zu Gold - Sektion 1"}},"op-tienda-monogen":{title:{LATAM:"Paquete Monogen Platino",USD:"Platinum Monogen Pack",PT:"Pacote Monogen Platina",FR:"Pack Monogen Platine",DE:"Platin-Monogen-Paket"}},"mutantes-especiales":{title:{LATAM:"Mutantes Especiales",USD:"Special Mutants",PT:"Mutantes Especiais",FR:"Mutants Spéciaux",DE:"Spezielle Mutanten"},desc:{LATAM:"Explora mutantes exclusivos, de eventos mensuales, neo monogenes e híbridos de élite.",USD:"Explore exclusive mutants, monthly event rewards, neo monogens, and elite hybrids.",PT:"Explore mutantes exclusivos, prêmios mensais, neo monogens e híbridos de elite.",FR:"Explorez des mutants exclusifs, des récompenses mensuelles, des néo monogènes et des hybrides d'élite.",DE:"Entdecken Sie exklusive Mutanten, monatliche Belohnungen, Neo-Monogene und Elite-Hybride."}},"mutantes-especiales-exclusivos":{title:{LATAM:"Mutantes Exclusivos",USD:"Exclusive Mutants",PT:"Mutantes Exclusivos",FR:"Mutants Exclusifs",DE:"Exklusive Mutanten"},desc:{LATAM:"Consola para activar mutantes legendarios y de colección ultra rara.",USD:"Console to activate legendary and ultra-rare collectible mutants.",PT:"Console para ativar mutantes lendários e de coleção ultra rara.",FR:"Console pour activer des mutants légendaires et de collection ultra-rare.",DE:"Konsole zur Aktivierung legendärer und extrem seltener Sammlermutanten."}},"mutantes-especiales-mensuales":{title:{LATAM:"Mutantes Mensuales 2024 - 2025",USD:"Monthly Mutants 2024 - 2025",PT:"Mutantes Mensais 2024 - 2025",FR:"Mutants Mensuels 2024 - 2025",DE:"Monatliche Mutanten 2024 - 2025"},desc:{LATAM:"Elige entre los mutantes liberados mensualmente como recompensa de temporada.",USD:"Choose among mutants released monthly as seasonal rewards.",PT:"Escolha entre os mutantes liberados mensalmente como recompensa de temporada.",FR:"Choisissez parmi les mutants libérés chaque mois en récompense de saison.",DE:"Wählen Sie aus den monatlich als Saisonbelohnung freigegebenen Mutanten."}},"op-neo-monogenes":{title:{LATAM:"Neo Monogenes",USD:"Neo Monogens",PT:"Neo Monogens",FR:"Néo Monogènes",DE:"Neo-Monogene"},desc:{LATAM:"Accede a la sección de reactivos monogenéticos avanzados.",USD:"Access the advanced monogenetic reagents section.",PT:"Acesse a seção de reagentes monogenéticos avançados.",FR:"Accédez à la section des réactifs monogénétiques avancés.",DE:"Greifen Sie auf den Abschnitt für fortgeschrittene monogenetische Reagenzien zu."}},"op-buranka-britany":{title:{LATAM:"Buranka y Britany",USD:"Buranka and Britany",PT:"Buranka e Britany",FR:"Buranka et Britany",DE:"Buranka und Britany"},desc:{LATAM:"Inyectar el paquete especial de gemelas Buranka & Britany.",USD:"Inject the special Buranka & Britany twins package.",PT:"Injetar o pacote especial das gêmeas Buranka & Britany.",FR:"Injectez le pack spécial des jumelles Buranka & Britany.",DE:"Injizieren Sie das spezielle Buranka & Britany Zwillinge-Paket."}},reactor:{title:{LATAM:"Reactor",USD:"Reactor",PT:"Reator",FR:"Réacteur",DE:"Reaktor"},desc:{LATAM:"Agrupa las herramientas relacionadas con la preparación, modificación y uso del reactor.",USD:"Groups simulator tools related to the preparation, modification, and use of the reactor.",PT:"Agrupa ferramentas relacionadas à preparação, modificação e uso do reator.",FR:"Regroupe les outils liés à la préparation, modification et utilisation du réacteur.",DE:"Gruppiert Werkzeuge zur Vorbereitung, Modifikation und Nutzung des Reaktors."}},"op-reactor-cambiar":{title:{LATAM:"Cambiar Reactor (Preparar)",USD:"Change Reactor (Prepare)",PT:"Alterar Reator (Preparar)",FR:"Changer de réacteur (Préparer)",DE:"Reaktor wechseln (Vorbereiten)"},desc:{LATAM:"Prepara los archivos internos para cambiar el reactor.",USD:"Prepare internal files to change the active reactor.",PT:"Prepara os arquivos internos para alterar o reator ativo.",FR:"Prépare les fichiers internes pour changer le réacteur actif.",DE:"Bereitet die internen Dateien vor, um den aktiven Reaktor zu wechseln."}},"op-reactor-hackear":{title:{LATAM:"Hackear Reactor (Aplicar el Cambio)",USD:"Hack Reactor (Apply Change)",PT:"Hackear Reator (Aplicar Mudança)",FR:"Pirater le réacteur (Appliquer)",DE:"Reaktor hacken (Wechsel anwenden)"},desc:{LATAM:"Aplica de inmediato los cambios y actualiza el estado del reactor.",USD:"Immediately apply the changes and update the reactor status.",PT:"Aplica imediatamente as mudanças e atualiza o estado do reator.",FR:"Applique immédiatement les changements et met à jour l'état du réacteur.",DE:"Wendet die Änderungen sofort an und aktualisiert den Reaktorstatus."}},"op-reactor-fichas":{title:{LATAM:"Fichas Reactor",USD:"Reactor Tokens",PT:"Fichas do Reator",FR:"Jetons de Réacteur",DE:"Reaktor-Token"},desc:{LATAM:"Desbloquea o simula la obtención de fichas especiales para el reactor.",USD:"Unlock or simulate obtaining special tokens for the reactor.",PT:"Desbloqueie ou simule a obtenção de fichas especiais para o reator.",FR:"Débloquez ou simulez l'obtention de jetons spéciaux pour le réacteur.",DE:"Schalten Sie spezielle Token für den Reaktor frei oder simulieren Sie deren Erhalt."}},"op-reactor-preparar":{title:{LATAM:"Preparar y Pelear",USD:"Prepare and Fight",PT:"Preparar e Lutar",FR:"Préparer et Combattre",DE:"Vorbereiten und Kämpfen"},desc:{LATAM:"Secuencia automatizada para listar especímenes y entrar en batalla directa.",USD:"Automated sequence to list specimens and enter straight into battle.",PT:"Sequência automatizada para listar espécimes e entrar em batalha direta.",FR:"Séquence automatisée pour lister les spécimens et entrer directement en combat.",DE:"Automatisierte Sequenz zur Auflistung von Proben und Einstieg in den Direktkampf."}},"op-reactor-salas":{title:{LATAM:"Salas Reactor",USD:"Reactor Rooms",PT:"Salas do Reator",FR:"Salles de Réacteur",DE:"Reaktorräume"},desc:{LATAM:"Configura o cambia la sala activa para torneos de reactor.",USD:"Configure or change the active room for reactor tournaments.",PT:"Configure ou altere a sala ativa para torneios de reator.",FR:"Configurez ou changez la salle active pour les tournois de réacteur.",DE:"Konfigurieren oder ändern Sie den aktiven Raum für Reaktorturniere."}},cajas:{title:{LATAM:"Cajas y Paquetes",USD:"Boxes & Bundles",PT:"Caixas & Pacotes",FR:"Boîtes & Packs",DE:"Kisten & Pakete"},desc:{LATAM:"Incluye cajas especiales, paquetes generales y opciones adicionales de la tienda.",USD:"Includes special boxes, general bundle options, and additional shop choices.",PT:"Inclui caixas especiais, pacotes gerais e opções adicionais de loja.",FR:"Comprend des boîtes spéciales, des packs généraux et des options de boutique.",DE:"Beinhaltet spezielle Kisten, allgemeine Pakete und zusätzliche Shop-Optionen."}},"cajas-desbloquear":{title:{LATAM:"Desbloquear Cajas",USD:"Unlock Boxes",PT:"Desbloquear Caixas",FR:"Débloquer des Boîtes",DE:"Kisten freischalten"},desc:{LATAM:"Consola para desbloquear todos los tipos de cajas especiales disponibles.",USD:"Console to unlock all types of special chests and boxes available.",PT:"Console para desbloquear todos os tipos de caixas especiais disponíveis.",FR:"Console pour débloquer tous les types de coffres et boîtes disponibles.",DE:"Konsole zum Freischalten aller verfügbaren Arten von Spezialkisten."}},"op-cajas-desb-todas":{title:{LATAM:"Activar Todas las Cajas",USD:"Activate All Boxes",PT:"Ativar Todas as Caixas",FR:"Activer Toutes les Boîtes",DE:"Alle Kisten aktivieren"}},"op-cajas-desb-g1":{title:{LATAM:"Grupo 1: Cajas de Aniversario y Navidad",USD:"Group 1: Anniversary & Christmas Boxes",PT:"Grupo 1: Caixas de Aniversário e Natal",FR:"Groupe 1 : Boîtes d'Anniversaire & Noël",DE:"Gruppe 1: Jubiläums- & Weihnachtskisten"}},"op-cajas-desb-g2":{title:{LATAM:"Grupo 2: Cajas Especiales y Elite",USD:"Group 2: Special & Elite Boxes",PT:"Grupo 2: Caixas Especiais e Elite",FR:"Groupe 2 : Boîtes Spéciales & Élite",DE:"Gruppe 2: Spezial- & Elitekisten"}},"cajas-generales":{title:{LATAM:"Paquetes Generales",USD:"General Bundles",PT:"Pacotes Gerais",FR:"Packs Généraux",DE:"Allgemeine Pakete"},desc:{LATAM:"Explora ofertas para potenciar velocidad, obtención de cajas navideñas, escudos y experiencia.",USD:"Explore offers to boost speed, obtain Christmas boxes, shields, and experience points.",PT:"Explore ofertas para aumentar velocidade, obter caixas de Natal, escudos e experiência.",FR:"Découvrez les offres pour booster la vitesse, obtenir des boîtes de Noël, des boucliers et de l'XP.",DE:"Entdecken Sie Angebote zur Erhöhung der Geschwindigkeit, Weihnachtskisten, Schilde und XP."}},"op-cajas-gen-aniv":{title:{LATAM:"Cajas de Aniversario y Navidad",USD:"Anniversary & Christmas Boxes",PT:"Caixas de Aniversário e Natal",FR:"Boîtes d'Anniversaire et de Noël",DE:"Jubiläums- & Weihnachtskisten"}},"op-cajas-gen-rapidez":{title:{LATAM:"Paquete Rapidez Nivel 5",USD:"Level 5 Speed Bundle",PT:"Pacote Velocidade Nível 5",FR:"Pack de Vitesse Niveau 5",DE:"Geschwindigkeitspaket Stufe 5"}},"op-cajas-gen-escudo":{title:{LATAM:"Paquete Escudo Especial Nivel 5",USD:"Level 5 Special Shield Bundle",PT:"Pacote de Escudo Especial Nível 5",FR:"Pack Bouclier Spécial Niveau 5",DE:"Spezialschild-Paket Stufe 5"}},"op-cajas-gen-exp":{title:{LATAM:"Paquetes de EXP y Creditos",USD:"EXP & Credits Bundles",PT:"Pacotes de EXP e Créditos",FR:"Packs d'XP & Crédits",DE:"EXP- & Kreditpakete"}},"op-cajas-gen-misteriosas":{title:{LATAM:"Cajas Misteriosas",USD:"Mystery Chests",PT:"Caixas Misteriosas",FR:"Boîtes Mystérieuses",DE:"Geheimnisvolle Kisten"}},"op-cajas-gen-ofertas":{title:{LATAM:"Ofertas y Paquetes",USD:"Offers & Special Packages",PT:"Ofertas e Pacotes",FR:"Offres & Packs",DE:"Angebote & Pakete"}},"op-cajas-gen-fortalecer":{title:{LATAM:"Paquete Fortalecimiento Nivel 5",USD:"Level 5 Strength Bundle",PT:"Pacote Fortalecimento Nível 5",FR:"Pack Renforcement Niveau 5",DE:"Stärkungspaket Stufe 5"}},"cajas-especiales":{title:{LATAM:"Paquetes Especiales",USD:"Special Bundles",PT:"Pacotes Especiais",FR:"Packs Spéciaux",DE:"Spezielle Pakete"},desc:{LATAM:"Accede a ofertas secretas y paquetes de cajas misteriosas secundarias.",USD:"Access secret offers and secondary mystery chest bundles.",PT:"Acesse ofertas secretas e pacotes de caixas misteriosas secundárias.",FR:"Accédez à des offres secrètes et à des packs de boîtes mystères secondaires.",DE:"Greifen Sie auf geheime Angebote und sekundäre geheimnisvolle Kistenpakete zu."}},"op-cajas-esp-mas-misterio":{title:{LATAM:"Mas Cajas Misteriosas",USD:"More Mystery Chests",PT:"Mais Caixas Misteriosas",FR:"Plus de Boîtes Mystérieuses",DE:"Mehr geheimnisvolle Kisten"}},recursos:{title:{LATAM:"Recursos, Fichas y Mejoras",USD:"Resources, Tokens & Upgrades",PT:"Recursos, Fichas & Melhorias",FR:"Ressources, Jetons & Améliorations",DE:"Ressourcen, Token & Upgrades"},desc:{LATAM:"Reune recursos, fichas, mejoras y elementos especiales.",USD:"Gathers resources, gold ovens, tokens, and medical upgrades.",PT:"Reúne recursos, fornos de ouro, fichas e melhorias médicas.",FR:"Rassemble les ressources, fours d'or, jetons et améliorations médicales.",DE:"Sammelt Ressourcen, Goldöfen, Token und medizinische Upgrades."}},"op-rec-laboratorio":{title:{LATAM:"Laboratorio Medico",USD:"Medical Lab",PT:"Laboratório Médico",FR:"Laboratoire Médical",DE:"Medizinisches Labor"},desc:{LATAM:"Desbloquea mejoras completas para el hospital de regeneración instantánea.",USD:"Unlock full upgrades for the instant regeneration hospital slot.",PT:"Desbloqueie melhorias completas para o hospital de regeneração instantânea.",FR:"Débloquez des améliorations complètes pour l'hôpital de régénération instantanée.",DE:"Schalten Sie vollständige Upgrades für das sofortige Regenerationskrankenhaus frei."}},"op-rec-horno":{title:{LATAM:"Horno de Oro",USD:"Gold Oven",PT:"Forno de Ouro",FR:"Four de l'Or",DE:"Goldofen"},desc:{LATAM:"Simula el incremento o el funcionamiento acelerado del horno de oro.",USD:"Simulates the increment or accelerated production of the gold oven.",PT:"Simula o aumento ou funcionamento acelerado do forno de ouro.",FR:"Simule l'augmentation ou le fonctionnement accéléré du four de l'or.",DE:"Simuliert die Erhöhung oder beschleunigte Produktion des Goldofens."}},"op-rec-velocidad":{title:{LATAM:"Velocidad x5",USD:"Speed 5x",PT:"Velocidade x5",FR:"Vitesse x5",DE:"Geschwindigkeit 5x"},desc:{LATAM:"Modifica la velocidad de reproducción y actividades por cinco veces.",USD:"Modify reproduction speed and in-game activities by five times.",PT:"Modifique a velocidade de reprodução e atividades por cinco vezes.",FR:"Modifiez la vitesse de reproduction et les activités en jeu par cinq.",DE:"Ändern Sie die Fortpflanzungsgeschwindigkeit und In-Game-Aktivitäten um das Fünffache."}},"op-rec-compras":{title:{LATAM:"Compras Ilimitadas",USD:"Unlimited Purchases",PT:"Compras Ilimitadas",FR:"Achats Illimités",DE:"Unbegrenzte Käufe"},desc:{LATAM:"Simula la obtención de bonificaciones ilimitadas en la tienda de juego.",USD:"Simulate getting unlimited token points rewards in the virtual shop.",PT:"Simule a obtenção de recompensas ilimitadas na loja de jogos.",FR:"Simulez l'obtention de récompenses illimitées dans la boutique virtuelle.",DE:"Simulieren Sie den Erhalt unbegrenzter Belohnungen im virtuellen Shop."}},"op-rec-mutosterona":{title:{LATAM:"Mutosterona",USD:"Mutosterona Upgrade",PT:"Mutosterona",FR:"Mutostérone",DE:"Mutosteron-Upgrade"},desc:{LATAM:"Añade mutosterona simulada para procesos de evolución veloz.",USD:"Add simulated mutosterona packs for instant evolution processes.",PT:"Adicione pacotes de mutosterona simulados para processos rápidos de evolução.",FR:"Ajoutez des packs de mutostérone simulés pour les processus d'évolution rapide.",DE:"Fügen Sie simulierte Mutosteron-Pakete für sofortige Evolutionsprozesse hinzu."}},"op-rec-estrellas":{title:{LATAM:"Estrellas",USD:"Stars Oven Meter",PT:"Estrelas",FR:"Étoiles",DE:"Sterne-Meter"},desc:{LATAM:"Aumenta el medidor de estrellas para canjes de premios raros.",USD:"Boost the star level meter to exchange for rare mutant items.",PT:"Aumente o medidor de estrelas para trocar por itens mutantes raros.",FR:"Augmentez le compteur d'étoiles pour échanger contre des objets rares.",DE:"Erhöhen Sie den Sternenanzeiger, um gegen seltene Mutantenobjekte einzutauschen."}},"op-rec-caja-creditos":{title:{LATAM:"Caja Creditos",USD:"Credits Box Pack",PT:"Caixa de Créditos",FR:"Boîte de Crédits",DE:"Kredite-Kiste"},desc:{LATAM:"Obtén cajas de créditos masivos para tu cuenta de mutantes.",USD:"Obtain massive simulated credit chests for the mutant roster.",PT:"Obtenha caixas de créditos massivos para sua conta de mutantes.",FR:"Obtenez des coffres de crédits massifs pour votre compte de mutants.",DE:"Erhalten Sie massive Kreditkisten für Ihr Mutantenkonto."}},"op-[#a1b3cb]":{title:{LATAM:"Zona Deluxe",USD:"Deluxe VIP Zone",PT:"Zona VIP Deluxe",FR:"Zone VIP Deluxe",DE:"Deluxe-VIP-Zone"},desc:{LATAM:"Inyectar el pase exclusivo simulado de zona VIP de mutantes.",USD:"Inject the simulated VIP zone exclusive pass for elite research.",PT:"Injetar o passe exclusivo simulado da zona VIP de mutantes.",FR:"Injectez le pass exclusif simulé de la zone VIP pour mutants élites.",DE:"Injizieren Sie den exklusiven Simulator-VIP-Zonen-Pass für Elite-Forschung."}},"op-rec-jackpot":{title:{LATAM:"Fichas Jackpot (Recurso)",USD:"Jackpot Tokens (Resource)",PT:"Fichas Jackpot (Recurso)",FR:"Jetons de Jackpot (Ressource)",DE:"Jackpot-Token (Ressource)"},desc:{LATAM:"Genera fichas ilimitadas para la ruleta del Jackpot.",USD:"Generate infinite credits and tokens for the Jackpot spin-wheel.",PT:"Gere fichas ilimitadas para a roleta do Jackpot.",FR:"Générez des jetons infinis pour la roulette de Jackpot.",DE:"Generieren Sie unbegrenzte Token für das Jackpot-Glücksrad."}},"op-rec-xp":{title:{LATAM:"Frascos XP (Recurso)",USD:"XP Flasks (Resource)",PT:"Frascos XP (Recurso)",FR:"Flacons d'XP (Ressource)",DE:"XP-Fläschchen (Ressource)"},desc:{LATAM:"Añade cargamentos de frascos de experiencia máxima.",USD:"Adds shipments of maximum experience multiplier potions.",PT:"Adiciona carregamentos de frascos de experiência máxima.",FR:"Ajoute des cargaisons de potions d'expérience maximale.",DE:"Fügt Lieferungen von Tränken mit maximalem Erfahrungsmultiplikator hinzu."}},"op-rec-reto":{title:{LATAM:"Fichas Reto",USD:"Challenge Tokens",PT:"Fichas Desafio",FR:"Jetons Défi",DE:"Herausforderung-Token"},desc:{LATAM:"Desbloquea tiquets y fichas ilimitadas para la arena del reto.",USD:"Unlocks unlimited passes and action marks for the challenge arena.",PT:"Desbloqueie passes ilimitados e fichas de ação para a arena de desafio.",FR:"Débloque des passes illimités et jetons pour l'arène de défi.",DE:"Schaltet unbegrenzte Pässe und Token für die Herausforderungsarena frei."}},orbes:{title:{LATAM:"Orbes",USD:"Orbs Inventory",PT:"Orbes",FR:"Graines d'Orbes",DE:"Runeorbs-Inventar"},desc:{LATAM:"Permite conocer las opciones relacionadas con orbes básicos, avanzados y paquetes.",USD:"Provides choices about basic, advanced power orbs, and packages.",PT:"Oferece escolhas sobre orbes básicos, avançados e pacotes.",FR:"Propose des choix sur les orbes basiques, avancés et les paquets.",DE:"Bietet Optionen zu einfachen, fortgeschrittenen Orbs und Paketen."}},"op-orbes-xp4":{title:{LATAM:"Orbe XP Nivel 4",USD:"Level 4 XP Orb",PT:"Orbe de EXP Nível 4",FR:"Orbe d'XP Niveau 4",DE:"EP-Orb Stufe 4"},desc:{LATAM:"Obtén orbes premium de experiencia multiplicada de nivel 4.",USD:"Obtain premium high-tier level 4 EXP multiplying spheres.",PT:"Obtenha esferas premium de EXP de nível 4.",FR:"Obtenez des sphères premium d'XP de niveau 4.",DE:"Erhalten Sie premium EP-Kugeln der Stufe 4."}},"op-orbes-b6":{title:{LATAM:"Orbes Basicos Nivel 6",USD:"Level 6 Basic Orbs Pack",PT:"Orbes Básicos Nível 6",FR:"Orbes Basiques Niveau 6",DE:"Basische Orbs Stufe 6"},desc:{LATAM:"Introduce un lote de orbes básicos de grado 6.",USD:"Introduces a container of standard grade-6 stat boost orbs.",PT:"Introduz um lote de orbes básicos de grau 6.",FR:"Introduit un lot d'orbes basiques de degré 6.",DE:"Führt eine Ladung von Orbs der Stufe 6 ein."}},"op-orbes-atk-vd-crit":{title:{LATAM:"Orbes ATK / VD / CRIT",USD:"Mix ATK / LIFE / CRIT Orbs",PT:"Orbes ATK / VID / CRIT",FR:"Orbes ATK / VIE / CRIT",DE:"ATK / LEBEN / CRIT Orbs-Mix"},desc:{LATAM:"Inyectar orbes de bonificación estadística mixta.",USD:"Inject premium spheres focused on mixed stats boosting.",PT:"Injete esferas premium focadas em atributos mistos.",FR:"Injectez des sphères de boost statistique mixte.",DE:"Injizieren Sie gemischte Statistik-Boost-Orbs."}},"orbes-paquetes":{title:{LATAM:"Paquetes de Orbes",USD:"Gems & Orbs Bundles",PT:"Pacotes de Orbes",FR:"Packs d'Orbes Raffinés",DE:"Edelstein- & Orb-Pakete"},desc:{LATAM:"Elige un pack concentrado de gemas de nivel 6 o 7.",USD:"Choose a compact package of high-grade tier-6 or 7 gems.",PT:"Escolha um pacote compacto de gemas de nível 6 ou 7.",FR:"Choisissez un pack compact de gemmes de niveau 6 ou 7.",DE:"Wählen Sie ein kompaktes Paket von Edelsteinen der Stufe 6 oder 7."}},"op-orb-p-b6":{title:{LATAM:"Paquete de Orbes Basicos Nivel 6",USD:"Tier 6 Basic Orbs Package",PT:"Pacote de Orbes Básicos Nível 6",FR:"Pack d'Orbes Basiques Niveau 6",DE:"Basispaket Orbs Stufe 6"}},"op-orb-p-poder6":{title:{LATAM:"Paquete de Orbes de Poder Nivel 6",USD:"Tier 6 Power Orbs Package",PT:"Pacote de Orbes de Poder Nível 6",FR:"Pack d'Orbes de Pouvoir Niveau 6",DE:"Kraftpaket Orbs Stufe 6"}},"op-orb-p-xp4":{title:{LATAM:"Paquete de Orbes de EXP Nivel 4",USD:"Tier 4 Experience Orbs Package",PT:"Pacote de Orbes de EXP Nível 4",FR:"Pack d'Orbes de d'XP Niveau 4",DE:"EP-Paket Orbs Stufe 4"}},"op-orb-p-b7":{title:{LATAM:"Paquete de Orbes Basicos Nivel 7",USD:"Tier 7 Basic Orbs Package",PT:"Pacote de Orbes Básicos Nível 7",FR:"Pack d'Orbes Basiques Niveau 7",DE:"Basispaket Orbs Stufe 7"}},"orbes-n7":{title:{LATAM:"Orbes Nivel 7",USD:"Elite Level 7 Orbs",PT:"Orbes de Elite Nível 7",FR:"Orbes Élite Niveau 7",DE:"Elite-Orbs Stufe 7"},desc:{LATAM:"Introduce los orbes individuales más potentes del juego.",USD:"Introduces the record most powerful individual upgrade spheres.",PT:"Introduz as esferas de melhoria individuais mais potentes do jogo.",FR:"Introduit les sphères d'amélioration les plus puissantes du jeu.",DE:"Führt die stärksten individuellen Upgrade-Sphären des Spiels ein."}},"op-orb-n7-atk":{title:{LATAM:"Ataque Nivel 7",USD:"Attack Tier 7",PT:"Ataque Nível 7",FR:"Attaque Niveau 7",DE:"Angriff Stufe 7"}},"op-orb-n7-vida":{title:{LATAM:"Vida Nivel 7",USD:"Life Tier 7",PT:"Vida Nível 7",FR:"Vie Niveau 7",DE:"Leben Stufe 7"}},"op-orb-n7-crit":{title:{LATAM:"Critico Nivel 7",USD:"Critical Tier 7",PT:"Crítico Nível 7",FR:"Critique Niveau 7",DE:"Kritisch Stufe 7"}},"op-orb-n7-xp6":{title:{LATAM:"XP Nivel 6",USD:"EXP Tier 6",PT:"EXP Nível 6",FR:"XP Niveau 6",DE:"EP Stufe 6"}},acerca:{title:{LATAM:"Acerca de",USD:"About",PT:"Sobre",FR:"À Propos",DE:"Über"},desc:{LATAM:"Muestra detalles internos del simulador, su versión educativa actual y créditos de Smith Luque.",USD:"Shows simulator details, its active version, and credits to Smith Luque.",PT:"Mostra detalhes do simulador, sua versão ativa e créditos de Smith Luque.",FR:"Affiche les détails du simulateur, sa version active et les crédits à Smith Luque.",DE:"Zeigt Simulator-Details, die aktive Version und Credits an Smith Luque."}},"op-acerca-info":{title:{LATAM:"Informacion del Script",USD:"Script Information",PT:"Informação do Script",FR:"Informations du Script",DE:"Skript-Informationen"},desc:{LATAM:"Consulta la nota aclaratoria, créditos del desarrollador y estado de prueba.",USD:"Read the developer disclaimer, active trial credits, and test status.",PT:"Leia o aviso legal do desenvolvedor, créditos e status de teste.",FR:"Lisez les mentions légales du développeur, les crédits et l'état du test.",DE:"Lesen Sie den Entwickler-Haftungsausschluss, Credits und den Teststatus."}},"volver-main":{title:{LATAM:"Volver al Menu Principal",USD:"Back to Main Menu",PT:"Voltar ao Menu Principal",FR:"Retour au Menu Principal",DE:"Zurück zum Hauptmenü"}},volver:{title:{LATAM:"Volver",USD:"Back",PT:"Voltar",FR:"Retour",DE:"Zurück"}},atras:{title:{LATAM:"Atrás",USD:"Back",PT:"Atrás",FR:"Retour",DE:"Zurück"}},"opcion-activada":{title:{LATAM:"OPCIÓN ACTIVADA!",USD:"OPTION ACTIVATED!",PT:"OPÇÃO ATIVADA!",FR:"OPTION ACTIVÉE !",DE:"OPTION AKTIVIERT!"}},"sim-exito":{title:{LATAM:"Activación simulada completada con éxito.",USD:"Simulated activation completed successfully.",PT:"Ativação simulada concluída com sucesso.",FR:"Activation simulée complétée avec succès.",DE:"Simulierte Aktivierung erfolgreich abgeschlossen."}},"volver-menu":{title:{LATAM:"Volver al Menú",USD:"Back to Menu",PT:"Voltar ao Menu",FR:"Retour au Menu",DE:"Zurück zum Menü"}},"menu-principal-label":{title:{LATAM:"MENU PRINCIPAL",USD:"MAIN MENU",PT:"MENU PRINCIPAL",FR:"MENU PRINCIPAL",DE:"HAUPTMENÜ"}}},Nf={enter_title:{LATAM:"CONSOLA SCRIPT MGG",USD:"MGG SCRIPT CONSOLE",PT:"CONSOLE SCRIPT MGG",FR:"CONSOLE SCRIPT MGG",DE:"MGG SCRIPT KONSOLE"},enter_desc:{LATAM:"Ingresa la contraseña técnica para interactuar con la consola de manera segura.",USD:"Enter the password to interact with the simulated console environment.",PT:"Insira a senha técnica para poder interagir com o console.",FR:"Entrez le mot de passe technique pour interagir avec le console.",DE:"Geben Sie das Passwort ein, um die interaktive Konsole zu betreten."},suggested_pass:{LATAM:"Contraseña sugerida: SMITH-NEXUS-2026",USD:"Suggested password: SMITH-NEXUS-2026",PT:"Senha recomendada: SMITH-NEXUS-2026",FR:"Mot de passe suggéré : SMITH-NEXUS-2026",DE:"Empfohlenes Passwort: SMITH-NEXUS-2026"},placeholder_pass:{LATAM:"Escribe SMITH-NEXUS-2026",USD:"Type SMITH-NEXUS-2026",PT:"Digite SMITH-NEXUS-2026",FR:"Saisissez SMITH-NEXUS-2026",DE:"SMITH-NEXUS-2026 eingeben"},btn_validate:{LATAM:"Acceder a la Consola",USD:"Access Console",PT:"Acessar Console",FR:"Accéder à la console",DE:"Auf Konsole zugreifen"},incorrect_pass:{LATAM:"Contraseña incorrecta. Copia SMITH-NEXUS-2026",USD:"Incorrect password. Copy SMITH-NEXUS-2026",PT:"Senha incorreta. Verifique SMITH-NEXUS-2026",FR:"Mot de passe incorrect. Vérifiez SMITH-NEXUS-2026",DE:"Ungültiges Passwort. Verwenden Sie SMITH-NEXUS-2026"},btn_exit:{LATAM:"Regresar",USD:"Return",PT:"Regresar",FR:"Retour",DE:"Zurück"},header_title:{LATAM:"CONSOLA INTERACTIVA DE PRUEBA",USD:"INTERACTIVE TEST CONSOLE",PT:"CONSOLE DE TESTE INTERATIVO",FR:"CONSOLE DE TEST INTERACTIVE",DE:"INTERAKTIVE TESTKONSOLE"},header_subtitle:{LATAM:"Entorno de Demostración Rápida • Smith Luque",USD:"Quick Demonstration Environment • Smith Luque",PT:"Ambiente de Demonstração Rápida • Smith Luque",FR:"Environnement de Démo Rapide • Smith Luque",DE:"Schnelle Demoumgebung • Smith Luque"},disclaimer:{LATAM:"Aviso: Esta simulación sirve exclusivamente para practicar visualmente de manera segura e intuitiva.",USD:"Notice: This simulation serves exclusively to practice visually in a safe and intuitive manner.",PT:"Aviso: Esta simulação serve exclusivamente para praticar visualmente de forma segura e intuitiva.",FR:"Avis : Cette simulation sert uniquement à s'entraîne visuellement de manière sûre et intuitive.",DE:"Hinweis: Diese Simulation dient ausschließlich dem sicheren und intuitiven visuellen Training."}};function D_({isEmbedded:a=!1,onClose:s}){const{region:o}=_t(),r=z=>{var U,q;return((U=Nf[z])==null?void 0:U[o])||((q=Nf[z])==null?void 0:q.LATAM)||z},d=z=>{var q;const U=Ef[z.id];return U&&((q=U.title)!=null&&q[o])?U.title[o]:z.title},g=z=>{var q;const U=Ef[z.id];return U&&((q=U.desc)!=null&&q[o])?U.desc[o]:z.desc||""},[p,b]=B.useState(""),[_,h]=B.useState(""),[f,k]=B.useState("password"),[G,y]=B.useState([]),[v,I]=B.useState(null),S=()=>{p.trim()==="SMITH-NEXUS-2026"?(h(""),k("menu"),y([])):h(r("incorrect_pass"))},w=()=>{b("SMITH-NEXUS-2026"),h(""),k("menu"),y([])},X=z=>{z.children&&z.children.length>0?y(U=>[...U,z]):(I(z),k("success"))},H=()=>{G.length>0&&y(z=>z.slice(0,-1))},V=G.length>0?G[G.length-1]:null,Y=V?V.children||[]:sT;return c.jsx("div",{className:`w-full ${a?"p-1":"py-8 px-4"} max-w-4xl mx-auto select-none text-left`,children:c.jsxs("div",{className:"bg-[#090f1c] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col relative transition-all min-h-[500px]",children:[c.jsxs("header",{className:"bg-[#0d1527] border-b border-white/10 px-5 py-4 flex items-center justify-between gap-3 shrink-0",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("div",{className:"w-3 h-3 rounded-full bg-emerald-500 animate-pulse border border-emerald-400/40 shrink-0"}),c.jsxs("div",{className:"flex flex-col",children:[c.jsx("span",{className:"text-[10px] text-slate-400 font-black uppercase tracking-wider leading-none",children:r("header_title")}),c.jsx("span",{className:"text-[8px] text-emerald-400 font-bold uppercase tracking-widest mt-1",children:r("header_subtitle")})]})]}),s&&c.jsx("button",{onClick:s,className:"py-1 px-3 rounded-lg text-xs font-black uppercase bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 active:scale-95 transition-all cursor-pointer",children:r("btn_exit")})]}),c.jsxs("div",{className:"flex-1 p-5 md:p-8 flex flex-col justify-start",children:[f==="password"&&c.jsxs("div",{className:"max-w-md w-full mx-auto text-center space-y-6 py-6 self-center my-auto",children:[c.jsx("div",{className:"w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-emerald-400 mx-auto shadow-inner",children:c.jsx(zf,{size:24})}),c.jsxs("div",{className:"space-y-2",children:[c.jsx("h3",{className:"text-white text-lg font-black uppercase tracking-normal",children:r("enter_title")}),c.jsx("p",{className:"text-xs text-slate-400 leading-relaxed max-w-sm mx-auto",children:r("enter_desc")})]}),c.jsx("button",{onClick:w,className:"w-full bg-emerald-950/40 border border-emerald-500/20 hover:border-emerald-500/40 text-emerald-300 font-mono text-[11px] p-3 rounded-xl block transition-all active:scale-99",children:c.jsxs("div",{className:"flex items-center justify-center gap-2",children:[c.jsx(Uf,{size:11,className:"text-emerald-400 animate-pulse"}),c.jsx("span",{children:r("suggested_pass")})]})}),c.jsxs("div",{className:"space-y-3",children:[c.jsx("input",{type:"text",value:p,onChange:z=>{b(z.target.value),h("")},onKeyDown:z=>z.key==="Enter"&&S(),placeholder:r("placeholder_pass"),className:"w-full text-center bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white font-mono tracking-wider outline-none focus:border-emerald-500 transition-all uppercase placeholder:normal-case placeholder:font-sans placeholder:tracking-normal"}),_&&c.jsx("p",{className:"text-red-400 text-xs font-bold leading-none",children:_}),c.jsxs("button",{onClick:S,className:"w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black uppercase text-xs py-3.5 rounded-xl flex items-center justify-center gap-1 transition-all active:scale-95 shadow-lg shadow-emerald-500/10 cursor-pointer",children:[c.jsx(Cu,{size:14}),c.jsx("span",{children:r("btn_validate")})]})]})]}),f==="menu"&&c.jsxs("div",{className:"w-full space-y-4",children:[c.jsxs("div",{className:"flex items-center justify-between border-b border-white/5 pb-3",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"text-xs uppercase font-bold tracking-widest text-slate-400 font-mono",children:V?V.num:">>>"}),c.jsx("h3",{className:"text-white text-xs sm:text-sm font-black uppercase tracking-widest",children:V?d(V):r("menu-principal-label")})]}),G.length>0&&c.jsxs("button",{onClick:H,className:"py-1 px-2.5 rounded-lg text-[9px] font-black uppercase text-slate-400 hover:text-emerald-400 bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 transition-all cursor-pointer flex items-center gap-1 active:scale-95",children:[c.jsx(ou,{size:10,strokeWidth:2.5}),c.jsx("span",{children:r("atras")})]})]}),c.jsxs("div",{className:"space-y-2.5",children:[Y.map(z=>{const U=!z.children||z.children.length===0;return c.jsx("button",{onClick:()=>X(z),className:`w-full text-left bg-[#0c1322]/60 hover:bg-[#0c1322] border border-white/5 hover:border-emerald-500/20 rounded-xl sm:rounded-2xl transition-all flex items-center justify-between gap-4 group cursor-pointer active:scale-[0.99] ${U?"p-3":"p-4"}`,children:U?c.jsxs("div",{className:"flex items-center gap-3.5 w-full",children:[c.jsx("div",{className:"w-10 h-10 rounded-xl border border-emerald-500/20 bg-emerald-500/5 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(16,185,129,0.03)] group-hover:border-emerald-500/40 group-hover:bg-emerald-500/10 transition-all",children:c.jsx(Cu,{size:16,className:"text-emerald-400 group-hover:scale-110 transition-transform"})}),c.jsxs("div",{className:"space-y-0.5 flex-1 min-w-0",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"text-emerald-400 font-mono text-xs sm:text-sm font-black tracking-normal shrink-0",children:z.num}),c.jsx("span",{className:"text-white text-xs sm:text-sm font-black uppercase tracking-wider group-hover:text-emerald-300 transition-colors truncate",children:d(z)})]}),z.desc&&c.jsx("p",{className:"text-[10px] sm:text-xs text-slate-400 font-medium leading-relaxed tracking-wide truncate sm:whitespace-normal",children:g(z)})]}),c.jsxs("div",{className:"flex items-center gap-1.5 shrink-0 pl-1",children:[c.jsx("span",{className:"text-[9px] font-black uppercase text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity tracking-wider hidden sm:inline leading-none",children:"EJECUTAR"}),c.jsx("div",{className:"w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all shrink-0",children:c.jsx(nk,{size:10,fill:"currentColor",className:"ml-0.5",strokeWidth:2.5})})]})]}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"space-y-1",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"text-emerald-400 font-mono text-xs sm:text-sm font-black tracking-normal",children:z.num}),c.jsx("span",{className:"text-white text-xs sm:text-sm font-black uppercase tracking-wider group-hover:text-emerald-300 transition-colors",children:d(z)})]}),z.desc&&c.jsx("p",{className:"text-[10px] sm:text-xs text-slate-400 font-medium leading-relaxed tracking-wide",children:g(z)})]}),c.jsx(rr,{size:14,className:"text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all shrink-0"})]})},z.id)}),G.length>0&&c.jsxs("button",{onClick:H,className:"w-full text-left bg-red-950/5 hover:bg-red-500/[0.04] border border-red-500/10 hover:border-red-500/30 p-4 rounded-xl sm:rounded-2xl transition-all flex items-center justify-between gap-4 group cursor-pointer active:scale-[0.99]",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"text-red-400 font-mono text-xs sm:text-sm font-black",children:"[<]"}),c.jsx("span",{className:"text-red-300 text-xs sm:text-sm font-black uppercase tracking-wider group-hover:text-red-400 transition-colors",children:G.length===1?r("volver-main"):r("volver")})]}),c.jsx(ou,{size:14,className:"text-red-400/50 group-hover:text-red-400 group-hover:-translate-x-0.5 transition-all shrink-0"})]})]})]}),f==="success"&&v&&c.jsxs("div",{className:"max-w-md w-full mx-auto text-center space-y-6 py-6 self-center my-auto animate-fade-in",children:[c.jsx("div",{className:"w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto shadow-lg shadow-emerald-500/10",children:c.jsx(vi,{size:32,className:"animate-pulse"})}),c.jsxs("div",{className:"space-y-3",children:[c.jsx("h3",{className:"text-emerald-400 text-lg font-black uppercase tracking-wider leading-none",children:r("opcion-activada")}),c.jsx("div",{className:"bg-white/[0.02] border border-white/5 py-4 px-5 rounded-2xl inline-block w-full",children:c.jsx("span",{className:"text-white text-xs sm:text-sm font-black uppercase tracking-wider block leading-relaxed select-all",children:d(v)})})]}),c.jsx("p",{className:"text-[11px] text-slate-400 leading-normal max-w-xs mx-auto font-bold uppercase tracking-wide",children:r("sim-exito")}),c.jsxs("button",{onClick:()=>{I(null),k("menu")},className:"w-full bg-[#0d1527] hover:bg-[#121c33] text-emerald-400 border border-emerald-500/20 hover:border-emerald-500/40 font-black uppercase text-xs py-4 rounded-xl cursor-pointer transition-all active:scale-95 shadow-lg flex items-center justify-center gap-2",children:[c.jsx(ou,{size:13,strokeWidth:3}),c.jsx("span",{children:r("volver-menu")})]})]})]}),c.jsxs("footer",{className:"bg-[#070b13] border-t border-white/5 px-6 py-4 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-[9px] text-slate-400 uppercase font-black tracking-wider leading-relaxed",children:[c.jsxs("div",{className:"flex items-center gap-1.5 opacity-65 text-center sm:text-left",children:[c.jsx(Pf,{size:11,className:"text-yellow-500 shrink-0"}),c.jsx("span",{children:r("disclaimer")})]}),c.jsx("span",{className:"opacity-40 shrink-0",children:"SMITH • NEXUS_CONSOLE 2026"})]})]})})}const Df={download_center:{LATAM:"Centro de descargas",USD:"Download Center",PT:"Centro de Downloads",FR:"Centre de téléchargement",DE:"Download-Center"},downloads:{LATAM:"DESCARGAS",USD:"DOWNLOADS",PT:"DOWNLOADS",FR:"TÉLÉCHARGEMENTS",DE:"DOWNLOADS"},tools_desc:{LATAM:"Herramientas y recomendaciones según tu caso.",USD:"Tools and recommendations tailored to your setup.",PT:"Ferramentas e recomendações adaptadas ao seu caso.",FR:"Outils et recommandations adaptés à votre cas.",DE:"Werkzeuge und Empfehlungen für Ihren Fall."},essential_resources:{LATAM:"Recursos esenciales",USD:"Essential Resources",PT:"Recursos Essenciais",FR:"Ressources essentielles",DE:"Grundlegende Ressourcen"},download_btn:{LATAM:"Descargar",USD:"Download",PT:"Descarregar",FR:"Télécharger",DE:"Herunterladen"},gg_official:{LATAM:"GameGuardian (fuente oficial)",USD:"GameGuardian (Official Source)",PT:"GameGuardian (Fonte Oficial)",FR:"GameGuardian (Source officielle)",DE:"GameGuardian (Offizielle Quelle)"},gg_desc:{LATAM:"Evita APKs modificados. Descarga siempre desde el foro oficial. Normalmente requiere root real o virtual.",USD:"Avoid modified APKs. Always download from the official forum. Usually requires real or virtual root.",PT:"Evite APKs modificados. Sempre baixe do fórum oficial. Geralmente requer root real ou virtual.",FR:"Évitez les APK modifiés. Téléchargez toujours depuis le forum officiel. Nécessite généralement un accès root réel ou virtuel.",DE:"Vermeiden Sie modifizierte APKs. Laden Sie immer aus dem offiziellen Forum herunter. Erfordert normalerweise echten oder virtuellen Root."},mobile_vms:{LATAM:"Móvil: máquinas virtuales",USD:"Mobile: Virtual Machines",PT:"Celular: Máquinas Virtuais",FR:"Mobile : Machines virtuelles",DE:"Mobil: Virtuelle Maschinen"},pc_emulators:{LATAM:"PC: emuladores Android",USD:"PC: Android Emulators",PT:"PC: Emuladores Android",FR:"PC : Émulateurs Android",DE:"PC: Android-Emulatoren"},official_site:{LATAM:"Sitio oficial",USD:"Official Site",PT:"Site Oficial",FR:"Site officiel",DE:"Offizielle Website"},warn_title:{LATAM:"Usa bajo tu responsabilidad",USD:"Use at your own risk",PT:"Use por sua conta e risco",FR:"Utilisez à vos risques et périls",DE:"Nutzung auf eigene Gefahr"},warn_desc:{LATAM:"Esta conversión conserva la sección informativa del proyecto original.",USD:"This content is for information purposes only within this project.",PT:"Esta conversão mantém a seção informativa do projeto original.",FR:"Cette conversion conserve la section informative du projet d'origine.",DE:"Diese Konvertierung behält den informativen Teil des Originalprojekts bei."},lua_title:{LATAM:"Script LUA",USD:"Script LUA",PT:"Script LUA",FR:"Script LUA",DE:"Script LUA"},lua_desc:{LATAM:"Script definitivo para GameGuardian. Compatible con TodoCS.",USD:"Ultimate GameGuardian script. Compatible with TodoCS.",PT:"Script definitivo para GameGuardian. Compatível com TodoCS.",FR:"Script définitif pour GameGuardian. Compatible avec TodoCS.",DE:"Ultimatives Script für GameGuardian. Kompatibel mit TodoCS."},script_password:{LATAM:"Contraseña Script:",USD:"Script Password:",PT:"Senha do Script:",FR:"Mot de passe du script :",DE:"Script-Passwort:"},copy_success:{LATAM:"¡Copia Exitosa!",USD:"Copied!",PT:"Copiado!",FR:"Copié !",DE:"Kopiert!"},done:{LATAM:"Listo",USD:"Done",PT:"Pronto",FR:"Prêt",DE:"Fertig"},copy:{LATAM:"Copiar",USD:"Copy",PT:"Copiar",FR:"Copier",DE:"Kopieren"},interactive_guide_btn:{LATAM:"Ver Guía Interactiva",USD:"View Interactive Guide",PT:"Ver Guia Interativo",FR:"Voir le guide interactif",DE:"Interaktiven Guide ansehen"},close_console:{LATAM:"Cerrar Consola ✕",USD:"Close Console ✕",PT:"Fechar Console ✕",FR:"Fermer la console ✕",DE:"Konsole schließen ✕"},demo_mode:{LATAM:"Modo Demostración Académica",USD:"Academic Demonstration Mode",PT:"Modo de Demonstração Acadêmica",FR:"Mode de démonstration académique",DE:"Akademischer Demomodus"},txt_title:{LATAM:"Lista TXT",USD:"TXT List",PT:"Lista TXT",FR:"Liste TXT",DE:"TXT-Liste"},txt_desc:{LATAM:"Todos los códigos en formato de texto plano.",USD:"All codes in plain text format.",PT:"Todos os códigos em formato de texto simples.",FR:"Tous les codes au format texte brut.",DE:"Alle Codes im Klartextformat."},xlsx_title:{LATAM:"Lista Excel",USD:"Excel List",PT:"Lista Excel",FR:"Liste Excel",DE:"Excel-Liste"},xlsx_desc:{LATAM:"Base de datos completa en .xlsx para filtrado avanzado.",USD:"Complete database in .xlsx for advanced filtering.",PT:"Banco de dados completo em .xlsx para filtragem avançada.",FR:"Base de données complète en .xlsx pour un filtrage avancé.",DE:"Vollständige Datenbank im .xlsx-Format für erweitertes Filtern."},texture_title:{LATAM:"Textura MGG",USD:"MGG Texture",PT:"Textura MGG",FR:"Texture MGG",DE:"MGG-Textur"},texture_desc:{LATAM:"Nuevas texturas para la terraza, arenas e iconos.",USD:"Visual overhaul for hall, arenas, and icons.",PT:"Novas texturas para o terraço, arenas e ícones.",FR:"Nouvelles textures pour le hall, les arènes et les icônes.",DE:"Neue Texturen für die Terrasse, Arenen und Symbole."},vphone_desc:{LATAM:"Mejor opción para root virtual y compatibilidad con GG.",USD:"Best option for virtual root and GG compatibility.",PT:"Melhor opção para root virtual e compatibilidade com GG.",FR:"Option idéale pour le root virtuel et la compatibilité avec GG.",DE:"Beste Option für virtuellen Root und GG-Kompatibilität."},vmos_desc:{LATAM:"Mucha comunidad. El root y la compatibilidad cambian por versión.",USD:"Large community. Root and compatibility vary by version.",PT:"Grande comunidade. O root e a compatibilidade variam de acordo com a versão.",FR:"Grande communauté. Le root et la compatibilité varient selon la version.",DE:"Große Community. Root und Kompatibilität variieren je nach Version."},vmaster_desc:{LATAM:"Muy buena para separar apps, con root limitado.",USD:"Great for separating apps, limited root.",PT:"Muito boa para separar apps, com root limitado.",FR:"Très utile pour isoler les applications, avec root limité.",DE:"Sehr gut zum Trennen von Apps, mit eingeschränktem Root."},ldplayer_desc:{LATAM:"Equilibrio entre rendimiento y estabilidad.",USD:"Balance between performance and stability.",PT:"Equilíbrio entre desempenho e estabilidade.",FR:"Excellent équilibre entre performances et stabilité.",DE:"Gleichgewicht zwischen Leistung und Stabilität."},bluestacks_desc:{LATAM:"Alta compatibilidad para juegos.",USD:"High compatibility for games.",PT:"Alta compatibilidade para jogos.",FR:"Grande compatibilité avec les jeux.",DE:"Hohe Spielekompatibilität."},nox_desc:{LATAM:"Ideal para multi-instancia y control avanzado.",USD:"Ideal for multi-instance and advanced control.",PT:"Ideal para multi-instâncias e controle avançado.",FR:"Idéal pour le multi-instance et le contrôle avancé.",DE:"Ideal für Multi-Instanz und erweiterte Steuerung."},select_script_lang:{LATAM:"Idioma de la Script:",USD:"Script Language:",PT:"Idioma do Script:",FR:"Langue du Script :",DE:"Skript-Sprache:"},choose_lang:{LATAM:"Elegir Idioma...",USD:"Choose Language...",PT:"Escolher Idioma...",FR:"Choisir la langue...",DE:"Sprache wählen..."},download_locked:{LATAM:"BLOQUEADO",USD:"LOCKED",PT:"BLOQUEADO",FR:"BLOQUÉ",DE:"GESPERRT"},pls_select_lang:{LATAM:"⚠️ Elige un idioma arriba para descargar",USD:"⚠️ Choose a language above to download",PT:"⚠️ Escolha um idioma acima para baixar",FR:"⚠️ Choisissez une langue ci-dessus pour télécharger",DE:"⚠️ Wählen Sie oben eine Sprache zum Herunterladen"}},wf={LATAM:"https://www.mediafire.com/file/0n3xl8662tu01jw/LC_NEXUS_EDGE_ES.lua/file",USD:"https://www.mediafire.com/file/8ess1u8oljdcojj/LC_NEXUS_EDGE_EN.lua/file",PT:"https://www.mediafire.com/file/8mauh3acrehb00k/LC_NEXUS_EDGE_PT.lua/file",FR:"https://www.mediafire.com/file/8cr2r6k0e5hw6f1/LC_NEXUS_EDGE_FR.lua/file",DE:"https://www.mediafire.com/file/p64ke0qu7qyybnz/LC_NEXUS_EDGE_DE.lua/file"},ju=[{code:"LATAM",label:"Español",flag:"🇪🇸"},{code:"USD",label:"English",flag:"🇺🇸"},{code:"PT",label:"Português",flag:"🇵🇹"},{code:"FR",label:"Français",flag:"🇫🇷"},{code:"DE",label:"Deutsch",flag:"🇩🇪"}];function iT(){const{region:a,setRegion:s}=_t(),[o,r]=Wo.useState(!1),[d,g]=Wo.useState(!1),[p,b]=Wo.useState(null),[_,h]=Wo.useState(!1),f=v=>{var I,S;return((I=Df[v])==null?void 0:I[a])||((S=Df[v])==null?void 0:S.USD)||""},k=[{title:f("lua_title"),desc:f("lua_desc"),iconName:Rf,href:p?wf[p]:"",download:"SCIRPT-NUEVA.V2.lua"},{title:f("txt_title"),desc:f("txt_desc"),iconName:L2,href:"https://www.mediafire.com/file/2fg3dtp4nhay3jw/lista-codigos.txt/file",download:"lista-codigos.txt"},{title:f("xlsx_title"),desc:f("xlsx_desc"),iconName:hk,href:"https://www.mediafire.com/file/n9l7kylzrpgiplq/lista-codigos.xlsx/file",download:"lista-codigos.xlsx"},{title:f("texture_title"),desc:f("texture_desc"),iconName:Bf,href:"https://www.mediafire.com/file/gllbbith3a6i56a/Mutants_Genetic_Gladiators_Mod.apk/file",download:"Mutants_Genetic_Gladiators_Mod.apk"}],G=[["VPhoneOS",f("vphone_desc"),"https://vphoneos.com/"],["VMOS",f("vmos_desc"),""],["Virtual Master",f("vmaster_desc"),""]],y=[["LDPlayer",f("ldplayer_desc"),"https://www.ldplayer.net/"],["BlueStacks",f("bluestacks_desc"),""],["NoxPlayer",f("nox_desc"),""]];return c.jsxs("div",{className:"flex flex-col gap-6 pb-20",children:[c.jsxs("section",{className:"relative hero !p-10 md:!p-24 overflow-hidden rounded-[3rem]",children:[c.jsx("div",{className:"absolute inset-0 opacity-10 bg-grid-slate-900/[0.1] pointer-events-none"}),c.jsx("div",{className:"absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-brand/20 to-transparent -rotate-12 transform translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none"}),c.jsxs("div",{className:"relative z-10",children:[c.jsxs("div",{className:"eyebrow bg-white/5 border-white/10 px-4 py-1 rounded-full inline-flex items-center gap-2 mb-6 backdrop-blur-md",children:[c.jsx(Hf,{size:14,className:"text-blue-brand-2"}),c.jsx("span",{className:"text-[10px] font-black uppercase tracking-[0.2em]",children:f("download_center")})]}),c.jsxs("h1",{className:"text-4xl md:text-8xl lg:text-9xl font-black mt-4 mb-6 uppercase tracking-tighter leading-[0.8] md:leading-[0.85] text-white",children:[f("downloads")," ",c.jsx("br",{}),c.jsxs("span",{className:"text-blue-brand relative",children:["MÓVIL / PC",c.jsx("span",{className:"absolute -bottom-2 left-0 w-full h-1 bg-white/10 rounded-full"})]})]}),c.jsx("p",{className:"text-slate-400 text-sm md:text-lg max-w-2xl mx-auto md:mx-0 opacity-90 leading-relaxed font-medium",children:f("tools_desc")})]})]}),c.jsx(ea,{}),c.jsxs("section",{className:"flex flex-col gap-4",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("div",{className:"h-px flex-1 bg-white/5"}),c.jsx("h2",{className:"text-lg font-bold uppercase tracking-tight m-0 text-white",children:f("essential_resources")}),c.jsx("div",{className:"h-px flex-1 bg-white/5"})]}),c.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-4 gap-6",children:k.map((v,I)=>{var X,H;const S=v.iconName,w=v.title==="Textura MGG"||v.title==="MGG Texture";return c.jsxs("article",{className:`panel flex flex-col gap-4 relative transition-all duration-300 border ${w?"glow-card border-blue-brand/40 bg-blue-brand/5":"hover:border-white/10"}`,children:[w&&c.jsx("span",{className:"badge-new uppercase",children:"New"}),c.jsx("div",{className:`w-12 h-12 rounded-2xl flex items-center justify-center ${w?"bg-blue-brand text-white":"bg-white/8 text-blue-brand-2"}`,children:c.jsx(S,{size:24})}),c.jsxs("div",{children:[c.jsx("h3",{className:`text-xl font-bold tracking-tight mb-2 ${w?"text-blue-brand-2":""}`,children:v.title}),c.jsx("p",{className:"text-muted text-sm m-0 min-h-[40px] leading-relaxed",children:v.desc})]}),I===0&&c.jsxs("div",{className:"mt-1 flex flex-col gap-2.5",children:[c.jsxs("div",{className:"p-3 rounded-xl bg-black/40 border border-white/5 flex flex-col gap-1.5 relative",children:[c.jsx("span",{className:"text-[10px] text-slate-400 font-bold uppercase tracking-wider",children:f("select_script_lang")}),c.jsxs("div",{className:"relative",children:[c.jsxs("button",{type:"button",onClick:()=>h(!_),className:"w-full flex items-center justify-between gap-1.5 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-blue-brand/50 text-white text-xs font-black uppercase tracking-wider transition-all cursor-pointer relative z-20 active:scale-[0.98]",children:[c.jsxs("span",{className:"flex items-center gap-1.5",children:[c.jsx("span",{className:"text-sm leading-none",children:p?(X=ju.find(V=>V.code===p))==null?void 0:X.flag:"🌐"}),c.jsx("span",{children:p?(H=ju.find(V=>V.code===p))==null?void 0:H.label:f("choose_lang")})]}),c.jsx(Nu,{size:12,className:`text-slate-400 transition-transform ${_?"rotate-180":""}`})]}),c.jsx(fr,{children:_&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"fixed inset-0 z-30",onClick:()=>h(!1)}),c.jsx($t.div,{initial:{opacity:0,scale:.95,y:-5},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:-5},transition:{duration:.15},className:"absolute left-0 right-0 top-full mt-1.5 rounded-xl bg-[#091224] border border-white/15 shadow-2xl p-1.5 z-40 flex flex-col gap-1 select-none",children:ju.map(V=>{const Y=p===V.code;return c.jsxs("button",{type:"button",onClick:()=>{b(V.code),h(!1)},className:`flex items-center gap-2.5 w-full px-2.5 py-2.5 rounded-lg text-left text-[11px] font-black uppercase transition-all cursor-pointer ${Y?"bg-blue-brand/20 text-white border border-blue-brand/35 shadow-[0_2px_10px_rgba(37,99,235,0.2)]":"text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"}`,children:[c.jsx("span",{className:"text-sm leading-none",children:V.flag}),c.jsx("span",{children:V.label})]},V.code)})})]})})]}),p===null&&c.jsx("p",{className:"text-[9px] text-yellow-500 font-bold uppercase tracking-wider text-center m-0 mt-1 animate-pulse",children:f("pls_select_lang")})]}),c.jsxs("div",{className:"p-3 rounded-xl bg-black/40 border border-white/5 flex flex-col gap-2 text-[11px]",children:[c.jsxs("div",{className:"flex justify-between items-center text-[10px] text-slate-400 font-bold uppercase tracking-wider",children:[c.jsx("span",{children:f("script_password")}),o&&c.jsx("span",{className:"text-[#14a44d] font-black animate-pulse",children:f("copy_success")})]}),c.jsxs("div",{className:"flex items-center justify-between gap-1.5 bg-white/5 p-1 rounded-lg",children:[c.jsx("code",{className:"text-blue-brand-2 px-1.5 py-0.5 rounded font-mono font-black text-xs select-all",children:"SMITH-NEXUS-2026"}),c.jsx("button",{type:"button",onClick:V=>{V.preventDefault(),navigator.clipboard.writeText("SMITH-NEXUS-2026"),r(!0),setTimeout(()=>r(!1),2e3)},className:"py-1 px-2 rounded-md text-[9px] uppercase font-black bg-blue-brand text-white hover:brightness-110 active:scale-95 transition-all cursor-pointer shrink-0",children:f(o?"done":"copy")})]})]}),c.jsxs("button",{type:"button",onClick:()=>g(!0),className:"w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-black uppercase transition-all duration-200 active:scale-95 cursor-pointer shadow-lg",children:[c.jsxs("span",{className:"flex h-2 w-2 relative shrink-0",children:[c.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),c.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-emerald-500"})]}),c.jsx("span",{children:f("interactive_guide_btn")})]})]}),I!==0&&v.href&&v.href.includes(".lua")&&c.jsxs("div",{className:"mt-1 flex flex-col gap-2.5",children:[c.jsxs("div",{className:"p-3 rounded-xl bg-black/40 border border-white/5 flex flex-col gap-2 text-[11px]",children:[c.jsxs("div",{className:"flex justify-between items-center text-[10px] text-slate-400 font-bold uppercase tracking-wider",children:[c.jsx("span",{children:f("script_password")}),o&&c.jsx("span",{className:"text-[#14a44d] font-black animate-pulse",children:f("copy_success")})]}),c.jsxs("div",{className:"flex items-center justify-between gap-1.5 bg-white/5 p-1 rounded-lg",children:[c.jsx("code",{className:"text-blue-brand-2 px-1.5 py-0.5 rounded font-mono font-black text-xs select-all",children:"SMITH-NEXUS-2026"}),c.jsx("button",{type:"button",onClick:V=>{V.preventDefault(),navigator.clipboard.writeText("SMITH-NEXUS-2026"),r(!0),setTimeout(()=>r(!1),2e3)},className:"py-1 px-2 rounded-md text-[9px] uppercase font-black bg-blue-brand text-white hover:brightness-110 active:scale-95 transition-all cursor-pointer shrink-0",children:f(o?"done":"copy")})]})]}),c.jsxs("button",{type:"button",onClick:()=>g(!0),className:"w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-black uppercase transition-all duration-200 active:scale-95 cursor-pointer shadow-lg",children:[c.jsxs("span",{className:"flex h-2 w-2 relative shrink-0",children:[c.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),c.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-emerald-500"})]}),c.jsx("span",{children:f("interactive_guide_btn")})]})]}),I===0?p?c.jsxs("a",{className:"btn w-full relative overflow-hidden group transition-all btn-primary shadow-lg shadow-blue-brand/20 active:scale-95 duration-200 text-center flex items-center justify-center gap-2",href:wf[p],target:"_blank",rel:"noopener noreferrer",children:[c.jsx("span",{className:"font-black uppercase",children:f("download_btn")}),c.jsx("span",{className:"download-shine","aria-hidden":"true"})]}):c.jsxs("button",{type:"button",onClick:()=>h(!0),className:"btn w-full relative overflow-hidden transition-all bg-slate-900 border border-white/5 text-slate-500 opacity-50 cursor-pointer flex items-center justify-center gap-2 active:scale-98",children:[c.jsx(zf,{size:13}),c.jsx("span",{className:"font-black uppercase",children:f("download_locked")})]}):c.jsxs("a",{className:`btn w-full relative overflow-hidden group transition-all ${w?"bg-white text-black hover:bg-blue-brand-2 hover:text-white border-transparent":"btn-primary"}`,href:v.href,target:"_blank",rel:"noopener noreferrer",children:[c.jsx("span",{className:"font-black uppercase",children:f("download_btn")}),c.jsx("span",{className:"download-shine","aria-hidden":"true"})]})]},I)})})]}),c.jsxs("section",{className:"panel flex gap-4 items-center transition-all border border-white/10 bg-white/[0.02]",children:[c.jsx("div",{className:"w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-white/8 text-green-brand",children:c.jsx(dk,{size:24})}),c.jsxs("div",{className:"flex-1",children:[c.jsx("h3",{className:"text-lg font-bold tracking-tight mb-1 text-white font-black",children:f("gg_official")}),c.jsx("p",{className:"text-muted text-sm m-0",children:f("gg_desc")})]}),c.jsxs("div",{className:"hidden lg:flex gap-2",children:[c.jsx("span",{className:"px-3 py-1.5 rounded-full text-[12px] font-bold bg-white/8 text-blue-100",children:"Root real"}),c.jsx("span",{className:"px-3 py-1.5 rounded-full text-[12px] font-bold bg-white/8 text-blue-100",children:"Root virtual"})]})]}),c.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[c.jsxs("section",{className:"panel flex flex-col gap-5 border border-white/10 bg-gradient-to-br from-white/[0.01] to-transparent",children:[c.jsx("h3",{className:"text-xl font-bold tracking-tight m-0 text-white uppercase tracking-tighter",children:f("mobile_vms")}),c.jsx("div",{className:"grid gap-4",children:G.map(([v,I,S],w)=>c.jsxs("div",{className:"p-4 rounded-xl border border-white/5 bg-white/2 hover:border-white/10 transition-colors",children:[c.jsx("h4",{className:"font-bold mb-1 text-white",children:v}),c.jsx("p",{className:"text-muted text-sm mb-3 leading-relaxed",children:I}),S?c.jsxs("a",{href:S,target:"_blank",rel:"noopener noreferrer",className:"btn btn-sm text-xs py-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black",children:[c.jsx(Yn,{size:14}),c.jsx("span",{children:f("official_site")})]}):c.jsxs("button",{disabled:!0,className:"btn btn-sm text-xs py-2 opacity-50 cursor-not-allowed",children:[c.jsx(Yn,{size:14}),c.jsx("span",{children:f("official_site")})]})]},w))})]}),c.jsxs("section",{className:"panel flex flex-col gap-5 border border-white/10 bg-gradient-to-br from-white/[0.01] to-transparent",children:[c.jsx("h3",{className:"text-xl font-bold tracking-tight m-0 text-white uppercase tracking-tighter",children:f("pc_emulators")}),c.jsx("div",{className:"grid gap-4",children:y.map(([v,I,S],w)=>c.jsxs("div",{className:"p-4 rounded-xl border border-white/5 bg-white/2 hover:border-white/10 transition-colors",children:[c.jsx("h4",{className:"font-bold mb-1 text-white",children:v}),c.jsx("p",{className:"text-muted text-sm mb-3 leading-relaxed",children:I}),S?c.jsxs("a",{href:S,target:"_blank",rel:"noopener noreferrer",className:"btn btn-sm text-xs py-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black",children:[c.jsx(Yn,{size:14}),c.jsx("span",{children:f("official_site")})]}):c.jsxs("button",{disabled:!0,className:"btn btn-sm text-xs py-2 opacity-50 cursor-not-allowed",children:[c.jsx(Yn,{size:14}),c.jsx("span",{children:f("official_site")})]})]},w))})]})]}),c.jsxs("section",{className:"panel flex gap-4 items-start border-l-4 bg-yellow-brand/5 border-yellow-brand",children:[c.jsx(Pf,{size:24,className:"text-yellow-brand shrink-0 mt-1"}),c.jsxs("div",{children:[c.jsx("strong",{className:"block text-white mb-1",children:f("warn_title")}),c.jsx("p",{className:"text-muted text-sm m-0",children:f("warn_desc")})]})]}),d&&c.jsx("div",{className:"fixed inset-0 z-[110] flex items-center justify-center p-0 sm:p-4 md:p-6 bg-slate-950/95 backdrop-blur-md overflow-hidden animate-fade-in text-left text-slate-300",children:c.jsxs("div",{className:"relative w-full h-full sm:h-full max-w-6xl bg-[#070b14] border-0 sm:border-2 border-white/10 rounded-none sm:rounded-[2.5rem] shadow-[0_0_50px_rgba(16,185,129,0.15)] flex flex-col sm:max-h-[92vh] overflow-hidden select-none",children:[c.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/20 via-emerald-500 to-emerald-500/20 opacity-60"}),c.jsxs("header",{className:"flex items-center justify-between px-4 py-3.5 sm:px-6 sm:py-4.5 bg-[#0b1220] border-b border-white/5 shrink-0 relative z-20",children:[c.jsxs("div",{className:"flex items-center gap-2.5",children:[c.jsx("div",{className:"w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500 animate-pulse border border-emerald-400/40"}),c.jsxs("div",{className:"flex flex-col text-left",children:[c.jsx("span",{className:"text-[10px] sm:text-xs font-black text-white uppercase tracking-wider leading-none",children:"NEXUS INTERFACE SIMULATOR"}),c.jsx("span",{className:"text-[8px] sm:text-[10px] text-slate-400 uppercase tracking-widest mt-1 font-bold",children:"Consola Educativa de Smith Luque"})]})]}),c.jsxs("button",{type:"button",onClick:()=>g(!1),className:"py-1.5 px-3 sm:py-2.5 sm:px-5 rounded-xl sm:rounded-2xl text-[10px] sm:text-xs font-black uppercase text-red-500 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 hover:border-red-500/40 transition-all duration-200 cursor-pointer active:scale-95 flex items-center gap-1 shrink-0",children:[c.jsx("span",{className:"sm:hidden",children:"✕"}),c.jsx("span",{className:"hidden sm:inline",children:f("close_console")})]})]}),c.jsx("div",{className:"flex-1 overflow-y-auto p-3 sm:p-6 md:p-8 scrollbar-none relative z-10 bg-slate-950/40",children:c.jsx(D_,{isEmbedded:!0,onClose:()=>g(!1)})}),c.jsxs("footer",{className:"px-4 py-2.5 sm:px-6 sm:py-3 bg-[#050a14] border-t border-white/5 shrink-0 flex items-center justify-between text-[8px] sm:text-[10px] text-slate-500 font-bold uppercase tracking-wider",children:[c.jsx("span",{children:f("demo_mode")}),c.jsx("span",{children:"SMITH-NEXUS-2026"})]})]})})]})}const qf={legal_info:{LATAM:"Información Legal",USD:"Legal Information",PT:"Informação Legal",FR:"Informations légales",DE:"Rechtliche Informationen"},terms_conditions1:{LATAM:"TÉRMINOS Y ",USD:"TERMS & ",PT:"TERMOS E ",FR:"CONDITIONS & ",DE:"ALLGEMEINE "},terms_conditions2:{LATAM:"CONDICIONES",USD:"CONDITIONS",PT:"CONDIÇÕES",FR:"TERMES",DE:"GESCHÄFTSBEDINGUNGEN"},read_carefully:{LATAM:"Por favor lee atentamente las normas y condiciones de uso de Mutodex MGG.",USD:"Please read the rules and conditions of use for Mutodex MGG carefully.",PT:"Por favor, leia atentamente as regras e condições de uso do Mutodex MGG.",FR:"Veuillez lire attentivement les règles et conditions d'utilisation de Mutodex MGG.",DE:"Bitte lesen Sie die Regeln und Nutzungsbedingungen für Mutodex MGG sorgfältig durch."},rights_reserved:{LATAM:"Derechos Reservados",USD:"Rights Reserved",PT:"Direitos Reservados",FR:"Droits réserves",DE:"Rechte vorbehalten"},rights_desc:{LATAM:"Todos los derechos de diseño, desarrollo y marca personal relacionada con Mutodex MGG están reservados a Smith Luque. Cualquier reproducción parcial o total del contenido multimedia o código fuente sin autorización previa está prohibida.",USD:"All rights of design, development, and personal brand related to Mutodex MGG are reserved by Smith Luque. Any partial or total reproduction of multimedia content or source code without prior authorization is prohibited.",PT:"Todos os direitos de design, desenvolvimento e marca pessoal relacionados ao Mutodex MGG são reservados por Smith Luque. Qualquer reprodução parcial ou total do conteúdo multimídia ou código-fonte sem autorização prévia é proibida.",FR:"Tous les droits de conception, de développement et de marque personnelle liés à Mutodex MGG sont réservés par Smith Luque. Toute reproduction partielle ou totale du contenu multimédia ou du code source sans autorisation préalable est interdite.",DE:"Alle Design-, Entwicklungs- und Markenrechte im Zusammenhang mit Mutodex MGG sind Smith Luque vorbehalten. Jegliche teilweise oder vollständige Vervielfältigung von Multimedia-Inhalten oder Quellcode ohne vorherige Genehmigung ist untersagt."},risks_liability:{LATAM:"Riesgos y Responsabilidad",USD:"Risks & Liability",PT:"Riscos e Responsabilidade",FR:"Risques et responsabilité",DE:"Risiken & Haftung"},risks_desc:{LATAM:"El uso de scripts, hacks o herramientas de terceros (como Game Guardian) en Mutants Genetic Gladiators conlleva un RIESGO CRÍTICO DE BANEO de tu cuenta por parte de los desarrolladores oficiales del juego (Kobojo/Syntamon).",USD:"The use of scripts, hacks, or third-party tools (such as Game Guardian) in Mutants Genetic Gladiators carries a CRITICAL RISK OF BANNING of your account by the official game developers (Kobojo/Syntamon).",PT:"O uso de scripts, hacks ou ferramentas de terceiros (como Game Guardian) em Mutants Genetic Gladiators acarreta um RISCO CRÍTICO DE BANIMENTO de sua conta pelos desenvolvedores oficiais do jogo (Kobojo/Syntamon).",FR:"L'utilisation de scripts, de hacks ou d'outils tiers (tels que Game Guardian) dans Mutants Genetic Gladiators comporte un RISQUE CRITIQUE DE BANNISSEMENT de votre compte par les développeurs officiels du jeu (Kobojo/Syntamon).",DE:"Die Verwendung von Skripten, Hacks oder Tools von Drittanbietern (wie Game Guardian) in Mutants Genetic Gladiators birgt ein KRITISCHES BAN-RISIKO Ihres Kontos durch die offiziellen Spielentwickler (Kobojo/Syntamon)."},risk_bullet1:{LATAM:"Smith Luque no se hace responsable por pérdidas de cuentas.",USD:"Smith Luque is not responsible for any banned or lost accounts.",PT:"Smith Luque não é responsável por contas perdidas ou banidas.",FR:"Smith Luque n'est pas responsable des comptes bannis ou perdus.",DE:"Smith Luque ist nicht verantwortlich für gesperrte oder verlorene Konten."},risk_bullet2:{LATAM:"El uso del contenido de esta web es bajo tu propio riesgo.",USD:"Sourcing and testing scripts or utilizing codes is fully at your own risk.",PT:"O uso do conteúdo deste site é de sua total conta e risco.",FR:"L'utilisation du contenu de ce site se fait entièrement à vos risques et périls.",DE:"Die Verwendung der Inhalte dieser Website erfolgt auf eigene Gefahr."},risk_bullet3:{LATAM:"Recomendamos siempre probar en cuentas secundarias.",USD:"We highly recommend testing any external tools on secondary accounts first.",PT:"Recomendamos sempre testar ferramentas externas em contas secundárias primeiro.",FR:"Nous vous recommandons fortement de tester d'abord les outils externes sur des comptes secondaires.",DE:"Wir empfehlen dringend, externe Tools zuerst auf Zweitkonten zu testen."},purpose_title:{LATAM:"Propósito de la Web",USD:"Purpose of the Website",PT:"Propósito do Website",FR:"But du site internet",DE:"Zweck der Website"},purpose_desc:{LATAM:"Esta plataforma ha sido creada exclusivamente con fines de aprendizaje, investigación y entretenimiento. Nuestra misión es proporcionar una base de datos organizada para la comunidad de MGG y facilitar el acceso a la información técnica del juego.",USD:"This platform has been created exclusively for learning, research, and entertainment purposes. Our mission is to provide an organized, fast database for the MGG community and simplify secure access to the technical parameters of the game.",PT:"Esta plataforma foi criada exclusivamente para fins de aprendizagem, pesquisa e entretenimento. Nossa missão é fornecer um banco de dados organizado para a comunidade MGG e facilitar o acesso seguro aos parâmetros técnicos do jogo.",FR:"Cette plateforme a été créée exclusivement à des fins d'apprentissage, de recherche et de divertissement. Notre mission est de fournir une base de données organisée et rapide pour la communauté MGG et de simplifier l'accès sécurisé aux paramètres techniques du jeu.",DE:"Diese Plattform wurde ausschließlich zu Lern-, Forschungs- und Unterhaltungszwecken erstellt. Unsere Mission ist es, eine organisierte, schnelle Datenbank für die MGG-Community bereitzustellen und den sicheren Zugriff auf die technischen Parameter des Spiels zu vereinfachen."},benefits_title:{LATAM:"Beneficios y Utilidades",USD:"Utility & Benefits",PT:"Utilidade e Benefícios",FR:"Avantages et utilités",DE:"Nutzen & Vorteile"},benefit_bullet1:{LATAM:"Acceso instantáneo a IDs de mutantes actualizados.",USD:"Instant, secure access to updated mutant identifiers.",PT:"Acesso instantâneo e seguro aos identificadores de mutantes atualizados.",FR:"Accès instantané et sécurisé aux identifiants mis à jour des mutants.",DE:"Sofortiger, sicherer Zugriff auf aktualisierte Mutantenkennungen."},benefit_bullet2:{LATAM:"Cálculo preciso de recursos para la calculadora EVO.",USD:"Precise calculation of upgrade resources in EVO calculator.",PT:"Cálculo preciso de recursos na calculadora de EVO.",FR:"Calcul précis des ressources d'amélioration dans le calculateur EVO.",DE:"Präzise Berechnung von Upgrade-Ressourcen im EVO-Rechner."},benefit_bullet3:{LATAM:"Sincronización con el blog oficial de Mutodex.",USD:"Real-time linkups with the official Mutodex blog system.",PT:"Links em tempo real com o sistema de blog oficial do Mutodex.",FR:"Liaisons en temps réel avec le système de blog officiel de Mutodex.",DE:"Echtzeit-Verknüpfungen mit dem offiziellen Mutodex-Blog-System."},benefit_bullet4:{LATAM:"Servicios de ayuda y soporte comunitario.",USD:"Group discussion links and active community assistance.",PT:"Links de discussões de grupo e assistência ativa da comunidade.",FR:"Liens de discussion de groupe et assistance communautaire active.",DE:"Gruppen-Diskussionslinks und aktive Unterstützung der Community."},inquiries:{LATAM:"Contacto",USD:"Inquiries",PT:"Dúvidas",FR:"Demandes",DE:"Anfragen"},inquiries_desc:{LATAM:"Si tienes dudas sobre estos términos, puedes contactarme vía WhatsApp.",USD:"If you have any questions or concern regarding these policies, feel free to send a message on WhatsApp.",PT:"Se você tiver alguma dúvida ou preocupação sobre estas políticas, sinta-se à vontade para enviar uma mensagem no WhatsApp.",FR:"Si vous avez des questions ou des préoccupations concernant ces politiques, n'hésitez pas à envoyer un message sur WhatsApp.",DE:"Wenn Sie Fragen oder Bedenken bezüglich dieser Richtlinien haben, können Sie uns gerne eine Nachricht über WhatsApp senden."},get_support:{LATAM:"Consultar ayuda",USD:"Get Support",PT:"Obter Suporte",FR:"Obtenir de l'aide",DE:"Support anfordern"},last_updated:{LATAM:"Última actualización: 12 de Mayo, 2026. Al navegar por este sitio, aceptas estos términos automáticamente.",USD:"Last updated: May 12, 2026. By navigating this site, you automatically accept these terms.",PT:"Última atualização: 12 de maio de 2026. Ao navegar neste site, você aceita automaticamente estes termos.",FR:"Dernière mise à jour : 12 mai 2026. En naviguant sur ce site, vous acceptez automatiquement ces conditions.",DE:"Zuletzt aktualisiert: 12. Mai 2026. Durch das Navigieren auf dieser Website akzeptieren Sie diese Bedingungen automatisch."}};function oT(){const{region:a}=_t(),s=o=>{var r,d;return((r=qf[o])==null?void 0:r[a])||((d=qf[o])==null?void 0:d.USD)||""};return c.jsxs("div",{className:"flex flex-col gap-6",children:[c.jsxs("section",{className:"hero !p-6 md:!p-12",children:[c.jsxs("div",{className:"eyebrow scale-90 md:scale-100",children:[c.jsx(sk,{size:14}),c.jsx("span",{children:s("legal_info")})]}),c.jsxs("h1",{className:"text-3xl md:text-5xl font-black mt-4 mb-4 uppercase tracking-tighter leading-[0.9] md:leading-[1]",children:[s("terms_conditions1"),c.jsx("span",{className:"text-blue-brand-2",children:s("terms_conditions2")})]}),c.jsx("p",{className:"text-muted text-sm md:text-base max-w-2xl mx-auto px-4 opacity-80",children:s("read_carefully")})]}),c.jsx(ea,{}),c.jsxs("div",{className:"grid md:grid-cols-[1fr_0.4fr] gap-6 items-start",children:[c.jsxs("div",{className:"flex flex-col gap-6",children:[c.jsxs("section",{className:"panel flex flex-col gap-5 p-6 md:p-8",children:[c.jsxs("div",{className:"flex items-center gap-3 border-b border-line pb-4 mb-2",children:[c.jsx(vi,{className:"text-blue-brand-2",size:24}),c.jsx("h2",{className:"m-0 text-xl font-bold uppercase tracking-tight",children:s("rights_reserved")})]}),c.jsx("p",{className:"text-slate-300 leading-relaxed",children:s("rights_desc")})]}),c.jsxs("section",{className:"panel flex flex-col gap-5 p-6 md:p-8 border-l-4 border-red-brand bg-red-brand/5",children:[c.jsxs("div",{className:"flex items-center gap-3 border-b border-white/5 pb-4 mb-2",children:[c.jsx(ck,{className:"text-red-brand",size:24}),c.jsx("h2",{className:"m-0 text-xl font-bold uppercase tracking-tight text-white",children:s("risks_liability")})]}),c.jsxs("div",{className:"space-y-4",children:[c.jsx("p",{className:"text-slate-300 leading-relaxed m-0",children:s("risks_desc")}),c.jsxs("ul",{className:"grid gap-2 text-sm text-slate-400 list-disc pl-5",children:[c.jsx("li",{children:s("risk_bullet1")}),c.jsx("li",{children:s("risk_bullet2")}),c.jsx("li",{children:s("risk_bullet3")})]})]})]}),c.jsxs("section",{className:"panel flex flex-col gap-5 p-6 md:p-8",children:[c.jsxs("div",{className:"flex items-center gap-3 border-b border-line pb-4 mb-2",children:[c.jsx(Lf,{className:"text-blue-brand-2",size:24}),c.jsx("h2",{className:"m-0 text-xl font-bold uppercase tracking-tight",children:s("purpose_title")})]}),c.jsxs("div",{className:"space-y-4",children:[c.jsx("p",{className:"text-slate-300 leading-relaxed",children:s("purpose_desc")}),c.jsxs("div",{className:"bg-white/5 p-4 rounded-xl",children:[c.jsx("h3",{className:"text-sm font-bold text-blue-brand-2 mb-2 uppercase",children:s("benefits_title")}),c.jsxs("ul",{className:"grid gap-2 text-xs md:text-sm text-slate-400",children:[c.jsxs("li",{className:"flex gap-2",children:[c.jsx("span",{children:"•"})," ",c.jsx("span",{children:s("benefit_bullet1")})]}),c.jsxs("li",{className:"flex gap-2",children:[c.jsx("span",{children:"•"})," ",c.jsx("span",{children:s("benefit_bullet2")})]}),c.jsxs("li",{className:"flex gap-2",children:[c.jsx("span",{children:"•"})," ",c.jsx("span",{children:s("benefit_bullet3")})]}),c.jsxs("li",{className:"flex gap-2",children:[c.jsx("span",{children:"•"})," ",c.jsx("span",{children:s("benefit_bullet4")})]})]})]})]})]})]}),c.jsxs("aside",{className:"flex flex-col gap-4",children:[c.jsxs("div",{className:"panel p-5 bg-blue-brand/5 border-blue-brand/20",children:[c.jsx("h3",{className:"text-xs font-bold text-blue-brand-2 uppercase mb-3",children:s("inquiries")}),c.jsx("p",{className:"text-[11px] text-muted leading-relaxed mb-4",children:s("inquiries_desc")}),c.jsx("a",{href:"https://wa.me/51906328464",target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary w-full text-xs py-2.5",children:s("get_support")})]}),c.jsx("p",{className:"text-[10px] text-center text-muted px-2",children:s("last_updated")})]})]})]})}function rT(){const[a,s]=B.useState(window.location.hash.replace(/^#/,"")||"/"),[o,r]=B.useState(navigator.onLine);B.useEffect(()=>{const p=()=>{s(window.location.hash.replace(/^#/,"")||"/")},b=()=>r(!0),_=()=>r(!1);return window.addEventListener("hashchange",p),window.addEventListener("online",b),window.addEventListener("offline",_),()=>{window.removeEventListener("hashchange",p),window.removeEventListener("online",b),window.removeEventListener("offline",_)}},[]);const d=p=>{window.location.hash=p},g=()=>{switch(a){case"/":return c.jsx(Af,{});case"/novedades":return c.jsx(YA,{});case"/servicios":return c.jsx(QA,{});case"/evo":return c.jsx($A,{});case"/otros":return c.jsx(tT,{});case"/guia":return c.jsx(nT,{});case"/tutoriales":return c.jsx(aT,{});case"/descargas":return c.jsx(iT,{});case"/terminos":return c.jsx(oT,{});case"/guia-script":return c.jsx(D_,{});default:return c.jsx(Af,{})}};return c.jsx(SA,{currentPath:a,onNavigate:d,isOnline:o,children:g()})}g2.createRoot(document.getElementById("root")).render(c.jsx(B.StrictMode,{children:c.jsx(TA,{children:c.jsx(rT,{})})}));
