(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))l(p);new MutationObserver(p=>{for(const g of p)if(g.type==="childList")for(const d of g.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function i(p){const g={};return p.integrity&&(g.integrity=p.integrity),p.referrerPolicy&&(g.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?g.credentials="include":p.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function l(p){if(p.ep)return;p.ep=!0;const g=i(p);fetch(p.href,g)}})();var Qu={exports:{}},ho={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wh;function Ox(){if(wh)return ho;wh=1;var a=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function i(l,p,g){var d=null;if(g!==void 0&&(d=""+g),p.key!==void 0&&(d=""+p.key),"key"in p){g={};for(var h in p)h!=="key"&&(g[h]=p[h])}else g=p;return p=g.ref,{$$typeof:a,type:l,key:d,ref:p!==void 0?p:null,props:g}}return ho.Fragment=s,ho.jsx=i,ho.jsxs=i,ho}var Eh;function zx(){return Eh||(Eh=1,Qu.exports=Ox()),Qu.exports}var c=zx(),Ju={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nh;function Lx(){if(Nh)return ie;Nh=1;var a=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),g=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),G=Symbol.for("react.activity"),k=Symbol.iterator;function v(A){return A===null||typeof A!="object"?null:(A=k&&A[k]||A["@@iterator"],typeof A=="function"?A:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,I={};function E(A,B,J){this.props=A,this.context=B,this.refs=I,this.updater=J||M}E.prototype.isReactComponent={},E.prototype.setState=function(A,B){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,B,"setState")},E.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function K(){}K.prototype=E.prototype;function O(A,B,J){this.props=A,this.context=B,this.refs=I,this.updater=J||M}var C=O.prototype=new K;C.constructor=O,S(C,E.prototype),C.isPureReactComponent=!0;var z=Array.isArray;function P(){}var H={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function Z(A,B,J){var te=J.ref;return{$$typeof:a,type:A,key:B,ref:te!==void 0?te:null,props:J}}function F(A,B){return Z(A.type,B,A.props)}function oe(A){return typeof A=="object"&&A!==null&&A.$$typeof===a}function pe(A){var B={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(J){return B[J]})}var Be=/\/+/g;function Ce(A,B){return typeof A=="object"&&A!==null&&A.key!=null?pe(""+A.key):B.toString(36)}function Oe(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(P,P):(A.status="pending",A.then(function(B){A.status==="pending"&&(A.status="fulfilled",A.value=B)},function(B){A.status==="pending"&&(A.status="rejected",A.reason=B)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function D(A,B,J,te,le){var de=typeof A;(de==="undefined"||de==="boolean")&&(A=null);var ve=!1;if(A===null)ve=!0;else switch(de){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(A.$$typeof){case a:case s:ve=!0;break;case x:return ve=A._init,D(ve(A._payload),B,J,te,le)}}if(ve)return le=le(A),ve=te===""?"."+Ce(A,0):te,z(le)?(J="",ve!=null&&(J=ve.replace(Be,"$&/")+"/"),D(le,B,J,"",function(ks){return ks})):le!=null&&(oe(le)&&(le=F(le,J+(le.key==null||A&&A.key===le.key?"":(""+le.key).replace(Be,"$&/")+"/")+ve)),B.push(le)),1;ve=0;var lt=te===""?".":te+":";if(z(A))for(var ze=0;ze<A.length;ze++)te=A[ze],de=lt+Ce(te,ze),ve+=D(te,B,J,de,le);else if(ze=v(A),typeof ze=="function")for(A=ze.call(A),ze=0;!(te=A.next()).done;)te=te.value,de=lt+Ce(te,ze++),ve+=D(te,B,J,de,le);else if(de==="object"){if(typeof A.then=="function")return D(Oe(A),B,J,te,le);throw B=String(A),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return ve}function Q(A,B,J){if(A==null)return A;var te=[],le=0;return D(A,te,"","",function(de){return B.call(J,de,le++)}),te}function $(A){if(A._status===-1){var B=A._result;B=B(),B.then(function(J){(A._status===0||A._status===-1)&&(A._status=1,A._result=J)},function(J){(A._status===0||A._status===-1)&&(A._status=2,A._result=J)}),A._status===-1&&(A._status=0,A._result=B)}if(A._status===1)return A._result.default;throw A._result}var ue=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)},_e={map:Q,forEach:function(A,B,J){Q(A,function(){B.apply(this,arguments)},J)},count:function(A){var B=0;return Q(A,function(){B++}),B},toArray:function(A){return Q(A,function(B){return B})||[]},only:function(A){if(!oe(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};return ie.Activity=G,ie.Children=_e,ie.Component=E,ie.Fragment=i,ie.Profiler=p,ie.PureComponent=O,ie.StrictMode=l,ie.Suspense=f,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,ie.__COMPILER_RUNTIME={__proto__:null,c:function(A){return H.H.useMemoCache(A)}},ie.cache=function(A){return function(){return A.apply(null,arguments)}},ie.cacheSignal=function(){return null},ie.cloneElement=function(A,B,J){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var te=S({},A.props),le=A.key;if(B!=null)for(de in B.key!==void 0&&(le=""+B.key),B)!X.call(B,de)||de==="key"||de==="__self"||de==="__source"||de==="ref"&&B.ref===void 0||(te[de]=B[de]);var de=arguments.length-2;if(de===1)te.children=J;else if(1<de){for(var ve=Array(de),lt=0;lt<de;lt++)ve[lt]=arguments[lt+2];te.children=ve}return Z(A.type,le,te)},ie.createContext=function(A){return A={$$typeof:d,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:g,_context:A},A},ie.createElement=function(A,B,J){var te,le={},de=null;if(B!=null)for(te in B.key!==void 0&&(de=""+B.key),B)X.call(B,te)&&te!=="key"&&te!=="__self"&&te!=="__source"&&(le[te]=B[te]);var ve=arguments.length-2;if(ve===1)le.children=J;else if(1<ve){for(var lt=Array(ve),ze=0;ze<ve;ze++)lt[ze]=arguments[ze+2];le.children=lt}if(A&&A.defaultProps)for(te in ve=A.defaultProps,ve)le[te]===void 0&&(le[te]=ve[te]);return Z(A,de,le)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(A){return{$$typeof:h,render:A}},ie.isValidElement=oe,ie.lazy=function(A){return{$$typeof:x,_payload:{_status:-1,_result:A},_init:$}},ie.memo=function(A,B){return{$$typeof:b,type:A,compare:B===void 0?null:B}},ie.startTransition=function(A){var B=H.T,J={};H.T=J;try{var te=A(),le=H.S;le!==null&&le(J,te),typeof te=="object"&&te!==null&&typeof te.then=="function"&&te.then(P,ue)}catch(de){ue(de)}finally{B!==null&&J.types!==null&&(B.types=J.types),H.T=B}},ie.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},ie.use=function(A){return H.H.use(A)},ie.useActionState=function(A,B,J){return H.H.useActionState(A,B,J)},ie.useCallback=function(A,B){return H.H.useCallback(A,B)},ie.useContext=function(A){return H.H.useContext(A)},ie.useDebugValue=function(){},ie.useDeferredValue=function(A,B){return H.H.useDeferredValue(A,B)},ie.useEffect=function(A,B){return H.H.useEffect(A,B)},ie.useEffectEvent=function(A){return H.H.useEffectEvent(A)},ie.useId=function(){return H.H.useId()},ie.useImperativeHandle=function(A,B,J){return H.H.useImperativeHandle(A,B,J)},ie.useInsertionEffect=function(A,B){return H.H.useInsertionEffect(A,B)},ie.useLayoutEffect=function(A,B){return H.H.useLayoutEffect(A,B)},ie.useMemo=function(A,B){return H.H.useMemo(A,B)},ie.useOptimistic=function(A,B){return H.H.useOptimistic(A,B)},ie.useReducer=function(A,B,J){return H.H.useReducer(A,B,J)},ie.useRef=function(A){return H.H.useRef(A)},ie.useState=function(A){return H.H.useState(A)},ie.useSyncExternalStore=function(A,B,J){return H.H.useSyncExternalStore(A,B,J)},ie.useTransition=function(){return H.H.useTransition()},ie.version="19.2.7",ie}var Ch;function tp(){return Ch||(Ch=1,Ju.exports=Lx()),Ju.exports}var Y=tp(),$u={exports:{}},bo={},Wu={exports:{}},ec={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dh;function Ux(){return Dh||(Dh=1,(function(a){function s(D,Q){var $=D.length;D.push(Q);e:for(;0<$;){var ue=$-1>>>1,_e=D[ue];if(0<p(_e,Q))D[ue]=Q,D[$]=_e,$=ue;else break e}}function i(D){return D.length===0?null:D[0]}function l(D){if(D.length===0)return null;var Q=D[0],$=D.pop();if($!==Q){D[0]=$;e:for(var ue=0,_e=D.length,A=_e>>>1;ue<A;){var B=2*(ue+1)-1,J=D[B],te=B+1,le=D[te];if(0>p(J,$))te<_e&&0>p(le,J)?(D[ue]=le,D[te]=$,ue=te):(D[ue]=J,D[B]=$,ue=B);else if(te<_e&&0>p(le,$))D[ue]=le,D[te]=$,ue=te;else break e}}return Q}function p(D,Q){var $=D.sortIndex-Q.sortIndex;return $!==0?$:D.id-Q.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var g=performance;a.unstable_now=function(){return g.now()}}else{var d=Date,h=d.now();a.unstable_now=function(){return d.now()-h}}var f=[],b=[],x=1,G=null,k=3,v=!1,M=!1,S=!1,I=!1,E=typeof setTimeout=="function"?setTimeout:null,K=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function C(D){for(var Q=i(b);Q!==null;){if(Q.callback===null)l(b);else if(Q.startTime<=D)l(b),Q.sortIndex=Q.expirationTime,s(f,Q);else break;Q=i(b)}}function z(D){if(S=!1,C(D),!M)if(i(f)!==null)M=!0,P||(P=!0,pe());else{var Q=i(b);Q!==null&&Oe(z,Q.startTime-D)}}var P=!1,H=-1,X=5,Z=-1;function F(){return I?!0:!(a.unstable_now()-Z<X)}function oe(){if(I=!1,P){var D=a.unstable_now();Z=D;var Q=!0;try{e:{M=!1,S&&(S=!1,K(H),H=-1),v=!0;var $=k;try{t:{for(C(D),G=i(f);G!==null&&!(G.expirationTime>D&&F());){var ue=G.callback;if(typeof ue=="function"){G.callback=null,k=G.priorityLevel;var _e=ue(G.expirationTime<=D);if(D=a.unstable_now(),typeof _e=="function"){G.callback=_e,C(D),Q=!0;break t}G===i(f)&&l(f),C(D)}else l(f);G=i(f)}if(G!==null)Q=!0;else{var A=i(b);A!==null&&Oe(z,A.startTime-D),Q=!1}}break e}finally{G=null,k=$,v=!1}Q=void 0}}finally{Q?pe():P=!1}}}var pe;if(typeof O=="function")pe=function(){O(oe)};else if(typeof MessageChannel<"u"){var Be=new MessageChannel,Ce=Be.port2;Be.port1.onmessage=oe,pe=function(){Ce.postMessage(null)}}else pe=function(){E(oe,0)};function Oe(D,Q){H=E(function(){D(a.unstable_now())},Q)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(D){D.callback=null},a.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<D?Math.floor(1e3/D):5},a.unstable_getCurrentPriorityLevel=function(){return k},a.unstable_next=function(D){switch(k){case 1:case 2:case 3:var Q=3;break;default:Q=k}var $=k;k=Q;try{return D()}finally{k=$}},a.unstable_requestPaint=function(){I=!0},a.unstable_runWithPriority=function(D,Q){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var $=k;k=D;try{return Q()}finally{k=$}},a.unstable_scheduleCallback=function(D,Q,$){var ue=a.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ue+$:ue):$=ue,D){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=$+_e,D={id:x++,callback:Q,priorityLevel:D,startTime:$,expirationTime:_e,sortIndex:-1},$>ue?(D.sortIndex=$,s(b,D),i(f)===null&&D===i(b)&&(S?(K(H),H=-1):S=!0,Oe(z,$-ue))):(D.sortIndex=_e,s(f,D),M||v||(M=!0,P||(P=!0,pe()))),D},a.unstable_shouldYield=F,a.unstable_wrapCallback=function(D){var Q=k;return function(){var $=k;k=Q;try{return D.apply(this,arguments)}finally{k=$}}}})(ec)),ec}var Hh;function Bx(){return Hh||(Hh=1,Wu.exports=Ux()),Wu.exports}var tc={exports:{}},it={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rh;function Yx(){if(Rh)return it;Rh=1;var a=tp();function s(f){var b="https://react.dev/errors/"+f;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)b+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+f+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var l={d:{f:i,r:function(){throw Error(s(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},p=Symbol.for("react.portal");function g(f,b,x){var G=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:G==null?null:""+G,children:f,containerInfo:b,implementation:x}}var d=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(f,b){if(f==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return it.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,it.createPortal=function(f,b){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(s(299));return g(f,b,null,x)},it.flushSync=function(f){var b=d.T,x=l.p;try{if(d.T=null,l.p=2,f)return f()}finally{d.T=b,l.p=x,l.d.f()}},it.preconnect=function(f,b){typeof f=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,l.d.C(f,b))},it.prefetchDNS=function(f){typeof f=="string"&&l.d.D(f)},it.preinit=function(f,b){if(typeof f=="string"&&b&&typeof b.as=="string"){var x=b.as,G=h(x,b.crossOrigin),k=typeof b.integrity=="string"?b.integrity:void 0,v=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;x==="style"?l.d.S(f,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:G,integrity:k,fetchPriority:v}):x==="script"&&l.d.X(f,{crossOrigin:G,integrity:k,fetchPriority:v,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},it.preinitModule=function(f,b){if(typeof f=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var x=h(b.as,b.crossOrigin);l.d.M(f,{crossOrigin:x,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&l.d.M(f)},it.preload=function(f,b){if(typeof f=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var x=b.as,G=h(x,b.crossOrigin);l.d.L(f,x,{crossOrigin:G,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},it.preloadModule=function(f,b){if(typeof f=="string")if(b){var x=h(b.as,b.crossOrigin);l.d.m(f,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:x,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else l.d.m(f)},it.requestFormReset=function(f){l.d.r(f)},it.unstable_batchedUpdates=function(f,b){return f(b)},it.useFormState=function(f,b,x){return d.H.useFormState(f,b,x)},it.useFormStatus=function(){return d.H.useHostTransitionStatus()},it.version="19.2.7",it}var Oh;function Px(){if(Oh)return tc.exports;Oh=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(s){console.error(s)}}return a(),tc.exports=Yx(),tc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zh;function Xx(){if(zh)return bo;zh=1;var a=Bx(),s=tp(),i=Px();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function g(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function d(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(g(e)!==e)throw Error(l(188))}function b(e){var t=e.alternate;if(!t){if(t=g(e),t===null)throw Error(l(188));return t!==e?null:e}for(var n=e,o=t;;){var r=n.return;if(r===null)break;var u=r.alternate;if(u===null){if(o=r.return,o!==null){n=o;continue}break}if(r.child===u.child){for(u=r.child;u;){if(u===n)return f(r),e;if(u===o)return f(r),t;u=u.sibling}throw Error(l(188))}if(n.return!==o.return)n=r,o=u;else{for(var m=!1,_=r.child;_;){if(_===n){m=!0,n=r,o=u;break}if(_===o){m=!0,o=r,n=u;break}_=_.sibling}if(!m){for(_=u.child;_;){if(_===n){m=!0,n=u,o=r;break}if(_===o){m=!0,o=u,n=r;break}_=_.sibling}if(!m)throw Error(l(189))}}if(n.alternate!==o)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:t}function x(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=x(e),t!==null)return t;e=e.sibling}return null}var G=Object.assign,k=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),K=Symbol.for("react.consumer"),O=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),Z=Symbol.for("react.activity"),F=Symbol.for("react.memo_cache_sentinel"),oe=Symbol.iterator;function pe(e){return e===null||typeof e!="object"?null:(e=oe&&e[oe]||e["@@iterator"],typeof e=="function"?e:null)}var Be=Symbol.for("react.client.reference");function Ce(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Be?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case S:return"Fragment";case E:return"Profiler";case I:return"StrictMode";case z:return"Suspense";case P:return"SuspenseList";case Z:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case O:return e.displayName||"Context";case K:return(e._context.displayName||"Context")+".Consumer";case C:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return t=e.displayName||null,t!==null?t:Ce(e.type)||"Memo";case X:t=e._payload,e=e._init;try{return Ce(e(t))}catch{}}return null}var Oe=Array.isArray,D=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},ue=[],_e=-1;function A(e){return{current:e}}function B(e){0>_e||(e.current=ue[_e],ue[_e]=null,_e--)}function J(e,t){_e++,ue[_e]=e.current,e.current=t}var te=A(null),le=A(null),de=A(null),ve=A(null);function lt(e,t){switch(J(de,t),J(le,e),J(te,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?th(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=th(t),e=nh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}B(te),J(te,e)}function ze(){B(te),B(le),B(de)}function ks(e){e.memoizedState!==null&&J(ve,e);var t=te.current,n=nh(t,e.type);t!==n&&(J(le,e),J(te,n))}function Eo(e){le.current===e&&(B(te),B(le)),ve.current===e&&(B(ve),co._currentValue=$)}var wl,qp;function ta(e){if(wl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);wl=t&&t[1]||"",qp=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+wl+e+qp}var El=!1;function Nl(e,t){if(!e||El)return"";El=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var U=function(){throw Error()};if(Object.defineProperty(U.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(U,[])}catch(N){var w=N}Reflect.construct(e,[],U)}else{try{U.call()}catch(N){w=N}e.call(U.prototype)}}else{try{throw Error()}catch(N){w=N}(U=e())&&typeof U.catch=="function"&&U.catch(function(){})}}catch(N){if(N&&w&&typeof N.stack=="string")return[N.stack,w.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=o.DetermineComponentFrameRoot(),m=u[0],_=u[1];if(m&&_){var y=m.split(`
`),q=_.split(`
`);for(r=o=0;o<y.length&&!y[o].includes("DetermineComponentFrameRoot");)o++;for(;r<q.length&&!q[r].includes("DetermineComponentFrameRoot");)r++;if(o===y.length||r===q.length)for(o=y.length-1,r=q.length-1;1<=o&&0<=r&&y[o]!==q[r];)r--;for(;1<=o&&0<=r;o--,r--)if(y[o]!==q[r]){if(o!==1||r!==1)do if(o--,r--,0>r||y[o]!==q[r]){var R=`
`+y[o].replace(" at new "," at ");return e.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",e.displayName)),R}while(1<=o&&0<=r);break}}}finally{El=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ta(n):""}function b1(e,t){switch(e.tag){case 26:case 27:case 5:return ta(e.type);case 16:return ta("Lazy");case 13:return e.child!==t&&t!==null?ta("Suspense Fallback"):ta("Suspense");case 19:return ta("SuspenseList");case 0:case 15:return Nl(e.type,!1);case 11:return Nl(e.type.render,!1);case 1:return Nl(e.type,!0);case 31:return ta("Activity");default:return""}}function wp(e){try{var t="",n=null;do t+=b1(e,n),n=e,e=e.return;while(e);return t}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Cl=Object.prototype.hasOwnProperty,Dl=a.unstable_scheduleCallback,Hl=a.unstable_cancelCallback,f1=a.unstable_shouldYield,_1=a.unstable_requestPaint,_t=a.unstable_now,x1=a.unstable_getCurrentPriorityLevel,Ep=a.unstable_ImmediatePriority,Np=a.unstable_UserBlockingPriority,No=a.unstable_NormalPriority,G1=a.unstable_LowPriority,Cp=a.unstable_IdlePriority,k1=a.log,y1=a.unstable_setDisableYieldValue,ys=null,xt=null;function vn(e){if(typeof k1=="function"&&y1(e),xt&&typeof xt.setStrictMode=="function")try{xt.setStrictMode(ys,e)}catch{}}var Gt=Math.clz32?Math.clz32:T1,v1=Math.log,M1=Math.LN2;function T1(e){return e>>>=0,e===0?32:31-(v1(e)/M1|0)|0}var Co=256,Do=262144,Ho=4194304;function na(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ro(e,t,n){var o=e.pendingLanes;if(o===0)return 0;var r=0,u=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var _=o&134217727;return _!==0?(o=_&~u,o!==0?r=na(o):(m&=_,m!==0?r=na(m):n||(n=_&~e,n!==0&&(r=na(n))))):(_=o&~u,_!==0?r=na(_):m!==0?r=na(m):n||(n=o&~e,n!==0&&(r=na(n)))),r===0?0:t!==0&&t!==r&&(t&u)===0&&(u=r&-r,n=t&-t,u>=n||u===32&&(n&4194048)!==0)?t:r}function vs(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function A1(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dp(){var e=Ho;return Ho<<=1,(Ho&62914560)===0&&(Ho=4194304),e}function Rl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ms(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function I1(e,t,n,o,r,u){var m=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var _=e.entanglements,y=e.expirationTimes,q=e.hiddenUpdates;for(n=m&~n;0<n;){var R=31-Gt(n),U=1<<R;_[R]=0,y[R]=-1;var w=q[R];if(w!==null)for(q[R]=null,R=0;R<w.length;R++){var N=w[R];N!==null&&(N.lane&=-536870913)}n&=~U}o!==0&&Hp(e,o,0),u!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=u&~(m&~t))}function Hp(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-Gt(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|n&261930}function Rp(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-Gt(n),r=1<<o;r&t|e[o]&t&&(e[o]|=t),n&=~r}}function Op(e,t){var n=t&-t;return n=(n&42)!==0?1:Ol(n),(n&(e.suspendedLanes|t))!==0?0:n}function Ol(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function zl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function zp(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:Th(e.type))}function Lp(e,t){var n=Q.p;try{return Q.p=e,t()}finally{Q.p=n}}var Mn=Math.random().toString(36).slice(2),We="__reactFiber$"+Mn,pt="__reactProps$"+Mn,Aa="__reactContainer$"+Mn,Ll="__reactEvents$"+Mn,j1="__reactListeners$"+Mn,S1="__reactHandles$"+Mn,Up="__reactResources$"+Mn,Ts="__reactMarker$"+Mn;function Ul(e){delete e[We],delete e[pt],delete e[Ll],delete e[j1],delete e[S1]}function Ia(e){var t=e[We];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Aa]||n[We]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=uh(e);e!==null;){if(n=e[We])return n;e=uh(e)}return t}e=n,n=e.parentNode}return null}function ja(e){if(e=e[We]||e[Aa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function As(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function Sa(e){var t=e[Up];return t||(t=e[Up]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Je(e){e[Ts]=!0}var Bp=new Set,Yp={};function aa(e,t){Va(e,t),Va(e+"Capture",t)}function Va(e,t){for(Yp[e]=t,e=0;e<t.length;e++)Bp.add(t[e])}var V1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Pp={},Xp={};function q1(e){return Cl.call(Xp,e)?!0:Cl.call(Pp,e)?!1:V1.test(e)?Xp[e]=!0:(Pp[e]=!0,!1)}function Oo(e,t,n){if(q1(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function zo(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function nn(e,t,n,o){if(o===null)e.removeAttribute(n);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+o)}}function Vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function w1(e,t,n){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var r=o.get,u=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(m){n=""+m,u.call(this,m)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return n},setValue:function(m){n=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Bl(e){if(!e._valueTracker){var t=Kp(e)?"checked":"value";e._valueTracker=w1(e,t,""+e[t])}}function Zp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=Kp(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function Lo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var E1=/[\n"\\]/g;function qt(e){return e.replace(E1,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Yl(e,t,n,o,r,u,m,_){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Vt(t)):e.value!==""+Vt(t)&&(e.value=""+Vt(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?Pl(e,m,Vt(t)):n!=null?Pl(e,m,Vt(n)):o!=null&&e.removeAttribute("value"),r==null&&u!=null&&(e.defaultChecked=!!u),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.name=""+Vt(_):e.removeAttribute("name")}function Fp(e,t,n,o,r,u,m,_){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){Bl(e);return}n=n!=null?""+Vt(n):"",t=t!=null?""+Vt(t):n,_||t===e.value||(e.value=t),e.defaultValue=t}o=o??r,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=_?e.checked:!!o,e.defaultChecked=!!o,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m),Bl(e)}function Pl(e,t,n){t==="number"&&Lo(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function qa(e,t,n,o){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&o&&(e[n].defaultSelected=!0)}else{for(n=""+Vt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,o&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function Qp(e,t,n){if(t!=null&&(t=""+Vt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Vt(n):""}function Jp(e,t,n,o){if(t==null){if(o!=null){if(n!=null)throw Error(l(92));if(Oe(o)){if(1<o.length)throw Error(l(93));o=o[0]}n=o}n==null&&(n=""),t=n}n=Vt(t),e.defaultValue=n,o=e.textContent,o===n&&o!==""&&o!==null&&(e.value=o),Bl(e)}function wa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var N1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $p(e,t,n){var o=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,n):typeof n!="number"||n===0||N1.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Wp(e,t,n){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,n!=null){for(var o in n)!n.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var r in t)o=t[r],t.hasOwnProperty(r)&&n[r]!==o&&$p(e,r,o)}else for(var u in t)t.hasOwnProperty(u)&&$p(e,u,t[u])}function Xl(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var C1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),D1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Uo(e){return D1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function an(){}var Kl=null;function Zl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ea=null,Na=null;function ed(e){var t=ja(e);if(t&&(e=t.stateNode)){var n=e[pt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Yl(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+qt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var r=o[pt]||null;if(!r)throw Error(l(90));Yl(o,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)o=n[t],o.form===e.form&&Zp(o)}break e;case"textarea":Qp(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&qa(e,!!n.multiple,t,!1)}}}var Fl=!1;function td(e,t,n){if(Fl)return e(t,n);Fl=!0;try{var o=e(t);return o}finally{if(Fl=!1,(Ea!==null||Na!==null)&&(Si(),Ea&&(t=Ea,e=Na,Na=Ea=null,ed(t),e)))for(t=0;t<e.length;t++)ed(e[t])}}function Is(e,t){var n=e.stateNode;if(n===null)return null;var o=n[pt]||null;if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,t,typeof n));return n}var sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ql=!1;if(sn)try{var js={};Object.defineProperty(js,"passive",{get:function(){Ql=!0}}),window.addEventListener("test",js,js),window.removeEventListener("test",js,js)}catch{Ql=!1}var Tn=null,Jl=null,Bo=null;function nd(){if(Bo)return Bo;var e,t=Jl,n=t.length,o,r="value"in Tn?Tn.value:Tn.textContent,u=r.length;for(e=0;e<n&&t[e]===r[e];e++);var m=n-e;for(o=1;o<=m&&t[n-o]===r[u-o];o++);return Bo=r.slice(e,1<o?1-o:void 0)}function Yo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Po(){return!0}function ad(){return!1}function dt(e){function t(n,o,r,u,m){this._reactName=n,this._targetInst=r,this.type=o,this.nativeEvent=u,this.target=m,this.currentTarget=null;for(var _ in e)e.hasOwnProperty(_)&&(n=e[_],this[_]=n?n(u):u[_]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Po:ad,this.isPropagationStopped=ad,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Po)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Po)},persist:function(){},isPersistent:Po}),t}var sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xo=dt(sa),Ss=G({},sa,{view:0,detail:0}),H1=dt(Ss),$l,Wl,Vs,Ko=G({},Ss,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vs&&(Vs&&e.type==="mousemove"?($l=e.screenX-Vs.screenX,Wl=e.screenY-Vs.screenY):Wl=$l=0,Vs=e),$l)},movementY:function(e){return"movementY"in e?e.movementY:Wl}}),sd=dt(Ko),R1=G({},Ko,{dataTransfer:0}),O1=dt(R1),z1=G({},Ss,{relatedTarget:0}),er=dt(z1),L1=G({},sa,{animationName:0,elapsedTime:0,pseudoElement:0}),U1=dt(L1),B1=G({},sa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Y1=dt(B1),P1=G({},sa,{data:0}),od=dt(P1),X1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},K1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Z1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function F1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Z1[e])?!!t[e]:!1}function tr(){return F1}var Q1=G({},Ss,{key:function(e){if(e.key){var t=X1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?K1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tr,charCode:function(e){return e.type==="keypress"?Yo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),J1=dt(Q1),$1=G({},Ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),id=dt($1),W1=G({},Ss,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tr}),e0=dt(W1),t0=G({},sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),n0=dt(t0),a0=G({},Ko,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),s0=dt(a0),o0=G({},sa,{newState:0,oldState:0}),i0=dt(o0),l0=[9,13,27,32],nr=sn&&"CompositionEvent"in window,qs=null;sn&&"documentMode"in document&&(qs=document.documentMode);var r0=sn&&"TextEvent"in window&&!qs,ld=sn&&(!nr||qs&&8<qs&&11>=qs),rd=" ",ud=!1;function cd(e,t){switch(e){case"keyup":return l0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ca=!1;function u0(e,t){switch(e){case"compositionend":return pd(t);case"keypress":return t.which!==32?null:(ud=!0,rd);case"textInput":return e=t.data,e===rd&&ud?null:e;default:return null}}function c0(e,t){if(Ca)return e==="compositionend"||!nr&&cd(e,t)?(e=nd(),Bo=Jl=Tn=null,Ca=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ld&&t.locale!=="ko"?null:t.data;default:return null}}var p0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!p0[e.type]:t==="textarea"}function gd(e,t,n,o){Ea?Na?Na.push(o):Na=[o]:Ea=o,t=Di(t,"onChange"),0<t.length&&(n=new Xo("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var ws=null,Es=null;function d0(e){Fm(e,0)}function Zo(e){var t=As(e);if(Zp(t))return e}function md(e,t){if(e==="change")return t}var hd=!1;if(sn){var ar;if(sn){var sr="oninput"in document;if(!sr){var bd=document.createElement("div");bd.setAttribute("oninput","return;"),sr=typeof bd.oninput=="function"}ar=sr}else ar=!1;hd=ar&&(!document.documentMode||9<document.documentMode)}function fd(){ws&&(ws.detachEvent("onpropertychange",_d),Es=ws=null)}function _d(e){if(e.propertyName==="value"&&Zo(Es)){var t=[];gd(t,Es,e,Zl(e)),td(d0,t)}}function g0(e,t,n){e==="focusin"?(fd(),ws=t,Es=n,ws.attachEvent("onpropertychange",_d)):e==="focusout"&&fd()}function m0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zo(Es)}function h0(e,t){if(e==="click")return Zo(t)}function b0(e,t){if(e==="input"||e==="change")return Zo(t)}function f0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kt=typeof Object.is=="function"?Object.is:f0;function Ns(e,t){if(kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var r=n[o];if(!Cl.call(t,r)||!kt(e[r],t[r]))return!1}return!0}function xd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gd(e,t){var n=xd(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xd(n)}}function kd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?kd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Lo(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Lo(e.document)}return t}function or(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var _0=sn&&"documentMode"in document&&11>=document.documentMode,Da=null,ir=null,Cs=null,lr=!1;function vd(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lr||Da==null||Da!==Lo(o)||(o=Da,"selectionStart"in o&&or(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Cs&&Ns(Cs,o)||(Cs=o,o=Di(ir,"onSelect"),0<o.length&&(t=new Xo("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=Da)))}function oa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ha={animationend:oa("Animation","AnimationEnd"),animationiteration:oa("Animation","AnimationIteration"),animationstart:oa("Animation","AnimationStart"),transitionrun:oa("Transition","TransitionRun"),transitionstart:oa("Transition","TransitionStart"),transitioncancel:oa("Transition","TransitionCancel"),transitionend:oa("Transition","TransitionEnd")},rr={},Md={};sn&&(Md=document.createElement("div").style,"AnimationEvent"in window||(delete Ha.animationend.animation,delete Ha.animationiteration.animation,delete Ha.animationstart.animation),"TransitionEvent"in window||delete Ha.transitionend.transition);function ia(e){if(rr[e])return rr[e];if(!Ha[e])return e;var t=Ha[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Md)return rr[e]=t[n];return e}var Td=ia("animationend"),Ad=ia("animationiteration"),Id=ia("animationstart"),x0=ia("transitionrun"),G0=ia("transitionstart"),k0=ia("transitioncancel"),jd=ia("transitionend"),Sd=new Map,ur="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ur.push("scrollEnd");function Ut(e,t){Sd.set(e,t),aa(t,[e])}var Fo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},wt=[],Ra=0,cr=0;function Qo(){for(var e=Ra,t=cr=Ra=0;t<e;){var n=wt[t];wt[t++]=null;var o=wt[t];wt[t++]=null;var r=wt[t];wt[t++]=null;var u=wt[t];if(wt[t++]=null,o!==null&&r!==null){var m=o.pending;m===null?r.next=r:(r.next=m.next,m.next=r),o.pending=r}u!==0&&Vd(n,r,u)}}function Jo(e,t,n,o){wt[Ra++]=e,wt[Ra++]=t,wt[Ra++]=n,wt[Ra++]=o,cr|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function pr(e,t,n,o){return Jo(e,t,n,o),$o(e)}function la(e,t){return Jo(e,null,null,t),$o(e)}function Vd(e,t,n){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n);for(var r=!1,u=e.return;u!==null;)u.childLanes|=n,o=u.alternate,o!==null&&(o.childLanes|=n),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(r=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,r&&t!==null&&(r=31-Gt(n),e=u.hiddenUpdates,o=e[r],o===null?e[r]=[t]:o.push(t),t.lane=n|536870912),u):null}function $o(e){if(50<ao)throw ao=0,Gu=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Oa={};function y0(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(e,t,n,o){return new y0(e,t,n,o)}function dr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function on(e,t){var n=e.alternate;return n===null?(n=yt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function qd(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Wo(e,t,n,o,r,u){var m=0;if(o=e,typeof e=="function")dr(e)&&(m=1);else if(typeof e=="string")m=Ix(e,n,te.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Z:return e=yt(31,n,t,r),e.elementType=Z,e.lanes=u,e;case S:return ra(n.children,r,u,t);case I:m=8,r|=24;break;case E:return e=yt(12,n,t,r|2),e.elementType=E,e.lanes=u,e;case z:return e=yt(13,n,t,r),e.elementType=z,e.lanes=u,e;case P:return e=yt(19,n,t,r),e.elementType=P,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:m=10;break e;case K:m=9;break e;case C:m=11;break e;case H:m=14;break e;case X:m=16,o=null;break e}m=29,n=Error(l(130,e===null?"null":typeof e,"")),o=null}return t=yt(m,n,t,r),t.elementType=e,t.type=o,t.lanes=u,t}function ra(e,t,n,o){return e=yt(7,e,o,t),e.lanes=n,e}function gr(e,t,n){return e=yt(6,e,null,t),e.lanes=n,e}function wd(e){var t=yt(18,null,null,0);return t.stateNode=e,t}function mr(e,t,n){return t=yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ed=new WeakMap;function Et(e,t){if(typeof e=="object"&&e!==null){var n=Ed.get(e);return n!==void 0?n:(t={value:e,source:t,stack:wp(t)},Ed.set(e,t),t)}return{value:e,source:t,stack:wp(t)}}var za=[],La=0,ei=null,Ds=0,Nt=[],Ct=0,An=null,Zt=1,Ft="";function ln(e,t){za[La++]=Ds,za[La++]=ei,ei=e,Ds=t}function Nd(e,t,n){Nt[Ct++]=Zt,Nt[Ct++]=Ft,Nt[Ct++]=An,An=e;var o=Zt;e=Ft;var r=32-Gt(o)-1;o&=~(1<<r),n+=1;var u=32-Gt(t)+r;if(30<u){var m=r-r%5;u=(o&(1<<m)-1).toString(32),o>>=m,r-=m,Zt=1<<32-Gt(t)+r|n<<r|o,Ft=u+e}else Zt=1<<u|n<<r|o,Ft=e}function hr(e){e.return!==null&&(ln(e,1),Nd(e,1,0))}function br(e){for(;e===ei;)ei=za[--La],za[La]=null,Ds=za[--La],za[La]=null;for(;e===An;)An=Nt[--Ct],Nt[Ct]=null,Ft=Nt[--Ct],Nt[Ct]=null,Zt=Nt[--Ct],Nt[Ct]=null}function Cd(e,t){Nt[Ct++]=Zt,Nt[Ct++]=Ft,Nt[Ct++]=An,Zt=t.id,Ft=t.overflow,An=e}var et=null,we=null,xe=!1,In=null,Dt=!1,fr=Error(l(519));function jn(e){var t=Error(l(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Hs(Et(t,e)),fr}function Dd(e){var t=e.stateNode,n=e.type,o=e.memoizedProps;switch(t[We]=e,t[pt]=o,n){case"dialog":me("cancel",t),me("close",t);break;case"iframe":case"object":case"embed":me("load",t);break;case"video":case"audio":for(n=0;n<oo.length;n++)me(oo[n],t);break;case"source":me("error",t);break;case"img":case"image":case"link":me("error",t),me("load",t);break;case"details":me("toggle",t);break;case"input":me("invalid",t),Fp(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":me("invalid",t);break;case"textarea":me("invalid",t),Jp(t,o.value,o.defaultValue,o.children)}n=o.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||o.suppressHydrationWarning===!0||Wm(t.textContent,n)?(o.popover!=null&&(me("beforetoggle",t),me("toggle",t)),o.onScroll!=null&&me("scroll",t),o.onScrollEnd!=null&&me("scrollend",t),o.onClick!=null&&(t.onclick=an),t=!0):t=!1,t||jn(e,!0)}function Hd(e){for(et=e.return;et;)switch(et.tag){case 5:case 31:case 13:Dt=!1;return;case 27:case 3:Dt=!0;return;default:et=et.return}}function Ua(e){if(e!==et)return!1;if(!xe)return Hd(e),xe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Cu(e.type,e.memoizedProps)),n=!n),n&&we&&jn(e),Hd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));we=rh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));we=rh(e)}else t===27?(t=we,Un(e.type)?(e=zu,zu=null,we=e):we=t):we=et?Rt(e.stateNode.nextSibling):null;return!0}function ua(){we=et=null,xe=!1}function _r(){var e=In;return e!==null&&(bt===null?bt=e:bt.push.apply(bt,e),In=null),e}function Hs(e){In===null?In=[e]:In.push(e)}var xr=A(null),ca=null,rn=null;function Sn(e,t,n){J(xr,t._currentValue),t._currentValue=n}function un(e){e._currentValue=xr.current,B(xr)}function Gr(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function kr(e,t,n,o){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var u=r.dependencies;if(u!==null){var m=r.child;u=u.firstContext;e:for(;u!==null;){var _=u;u=r;for(var y=0;y<t.length;y++)if(_.context===t[y]){u.lanes|=n,_=u.alternate,_!==null&&(_.lanes|=n),Gr(u.return,n,e),o||(m=null);break e}u=_.next}}else if(r.tag===18){if(m=r.return,m===null)throw Error(l(341));m.lanes|=n,u=m.alternate,u!==null&&(u.lanes|=n),Gr(m,n,e),m=null}else m=r.child;if(m!==null)m.return=r;else for(m=r;m!==null;){if(m===e){m=null;break}if(r=m.sibling,r!==null){r.return=m.return,m=r;break}m=m.return}r=m}}function Ba(e,t,n,o){e=null;for(var r=t,u=!1;r!==null;){if(!u){if((r.flags&524288)!==0)u=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var m=r.alternate;if(m===null)throw Error(l(387));if(m=m.memoizedProps,m!==null){var _=r.type;kt(r.pendingProps.value,m.value)||(e!==null?e.push(_):e=[_])}}else if(r===ve.current){if(m=r.alternate,m===null)throw Error(l(387));m.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(co):e=[co])}r=r.return}e!==null&&kr(t,e,n,o),t.flags|=262144}function ti(e){for(e=e.firstContext;e!==null;){if(!kt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function pa(e){ca=e,rn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function tt(e){return Rd(ca,e)}function ni(e,t){return ca===null&&pa(e),Rd(e,t)}function Rd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},rn===null){if(e===null)throw Error(l(308));rn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else rn=rn.next=t;return n}var v0=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},M0=a.unstable_scheduleCallback,T0=a.unstable_NormalPriority,Ye={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function yr(){return{controller:new v0,data:new Map,refCount:0}}function Rs(e){e.refCount--,e.refCount===0&&M0(T0,function(){e.controller.abort()})}var Os=null,vr=0,Ya=0,Pa=null;function A0(e,t){if(Os===null){var n=Os=[];vr=0,Ya=Au(),Pa={status:"pending",value:void 0,then:function(o){n.push(o)}}}return vr++,t.then(Od,Od),t}function Od(){if(--vr===0&&Os!==null){Pa!==null&&(Pa.status="fulfilled");var e=Os;Os=null,Ya=0,Pa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function I0(e,t){var n=[],o={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(o.status="rejected",o.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),o}var zd=D.S;D.S=function(e,t){vm=_t(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&A0(e,t),zd!==null&&zd(e,t)};var da=A(null);function Mr(){var e=da.current;return e!==null?e:Se.pooledCache}function ai(e,t){t===null?J(da,da.current):J(da,t.pool)}function Ld(){var e=Mr();return e===null?null:{parent:Ye._currentValue,pool:e}}var Xa=Error(l(460)),Tr=Error(l(474)),si=Error(l(542)),oi={then:function(){}};function Ud(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Bd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(an,an),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Pd(e),e;default:if(typeof t.status=="string")t.then(an,an);else{if(e=Se,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=o}},function(o){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Pd(e),e}throw ma=t,Xa}}function ga(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ma=n,Xa):n}}var ma=null;function Yd(){if(ma===null)throw Error(l(459));var e=ma;return ma=null,e}function Pd(e){if(e===Xa||e===si)throw Error(l(483))}var Ka=null,zs=0;function ii(e){var t=zs;return zs+=1,Ka===null&&(Ka=[]),Bd(Ka,e,t)}function Ls(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function li(e,t){throw t.$$typeof===k?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Xd(e){function t(j,T){if(e){var V=j.deletions;V===null?(j.deletions=[T],j.flags|=16):V.push(T)}}function n(j,T){if(!e)return null;for(;T!==null;)t(j,T),T=T.sibling;return null}function o(j){for(var T=new Map;j!==null;)j.key!==null?T.set(j.key,j):T.set(j.index,j),j=j.sibling;return T}function r(j,T){return j=on(j,T),j.index=0,j.sibling=null,j}function u(j,T,V){return j.index=V,e?(V=j.alternate,V!==null?(V=V.index,V<T?(j.flags|=67108866,T):V):(j.flags|=67108866,T)):(j.flags|=1048576,T)}function m(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function _(j,T,V,L){return T===null||T.tag!==6?(T=gr(V,j.mode,L),T.return=j,T):(T=r(T,V),T.return=j,T)}function y(j,T,V,L){var ae=V.type;return ae===S?R(j,T,V.props.children,L,V.key):T!==null&&(T.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===X&&ga(ae)===T.type)?(T=r(T,V.props),Ls(T,V),T.return=j,T):(T=Wo(V.type,V.key,V.props,null,j.mode,L),Ls(T,V),T.return=j,T)}function q(j,T,V,L){return T===null||T.tag!==4||T.stateNode.containerInfo!==V.containerInfo||T.stateNode.implementation!==V.implementation?(T=mr(V,j.mode,L),T.return=j,T):(T=r(T,V.children||[]),T.return=j,T)}function R(j,T,V,L,ae){return T===null||T.tag!==7?(T=ra(V,j.mode,L,ae),T.return=j,T):(T=r(T,V),T.return=j,T)}function U(j,T,V){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=gr(""+T,j.mode,V),T.return=j,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case v:return V=Wo(T.type,T.key,T.props,null,j.mode,V),Ls(V,T),V.return=j,V;case M:return T=mr(T,j.mode,V),T.return=j,T;case X:return T=ga(T),U(j,T,V)}if(Oe(T)||pe(T))return T=ra(T,j.mode,V,null),T.return=j,T;if(typeof T.then=="function")return U(j,ii(T),V);if(T.$$typeof===O)return U(j,ni(j,T),V);li(j,T)}return null}function w(j,T,V,L){var ae=T!==null?T.key:null;if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return ae!==null?null:_(j,T,""+V,L);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case v:return V.key===ae?y(j,T,V,L):null;case M:return V.key===ae?q(j,T,V,L):null;case X:return V=ga(V),w(j,T,V,L)}if(Oe(V)||pe(V))return ae!==null?null:R(j,T,V,L,null);if(typeof V.then=="function")return w(j,T,ii(V),L);if(V.$$typeof===O)return w(j,T,ni(j,V),L);li(j,V)}return null}function N(j,T,V,L,ae){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return j=j.get(V)||null,_(T,j,""+L,ae);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case v:return j=j.get(L.key===null?V:L.key)||null,y(T,j,L,ae);case M:return j=j.get(L.key===null?V:L.key)||null,q(T,j,L,ae);case X:return L=ga(L),N(j,T,V,L,ae)}if(Oe(L)||pe(L))return j=j.get(V)||null,R(T,j,L,ae,null);if(typeof L.then=="function")return N(j,T,V,ii(L),ae);if(L.$$typeof===O)return N(j,T,V,ni(T,L),ae);li(T,L)}return null}function W(j,T,V,L){for(var ae=null,Ge=null,ne=T,ce=T=0,fe=null;ne!==null&&ce<V.length;ce++){ne.index>ce?(fe=ne,ne=null):fe=ne.sibling;var ke=w(j,ne,V[ce],L);if(ke===null){ne===null&&(ne=fe);break}e&&ne&&ke.alternate===null&&t(j,ne),T=u(ke,T,ce),Ge===null?ae=ke:Ge.sibling=ke,Ge=ke,ne=fe}if(ce===V.length)return n(j,ne),xe&&ln(j,ce),ae;if(ne===null){for(;ce<V.length;ce++)ne=U(j,V[ce],L),ne!==null&&(T=u(ne,T,ce),Ge===null?ae=ne:Ge.sibling=ne,Ge=ne);return xe&&ln(j,ce),ae}for(ne=o(ne);ce<V.length;ce++)fe=N(ne,j,ce,V[ce],L),fe!==null&&(e&&fe.alternate!==null&&ne.delete(fe.key===null?ce:fe.key),T=u(fe,T,ce),Ge===null?ae=fe:Ge.sibling=fe,Ge=fe);return e&&ne.forEach(function(Kn){return t(j,Kn)}),xe&&ln(j,ce),ae}function se(j,T,V,L){if(V==null)throw Error(l(151));for(var ae=null,Ge=null,ne=T,ce=T=0,fe=null,ke=V.next();ne!==null&&!ke.done;ce++,ke=V.next()){ne.index>ce?(fe=ne,ne=null):fe=ne.sibling;var Kn=w(j,ne,ke.value,L);if(Kn===null){ne===null&&(ne=fe);break}e&&ne&&Kn.alternate===null&&t(j,ne),T=u(Kn,T,ce),Ge===null?ae=Kn:Ge.sibling=Kn,Ge=Kn,ne=fe}if(ke.done)return n(j,ne),xe&&ln(j,ce),ae;if(ne===null){for(;!ke.done;ce++,ke=V.next())ke=U(j,ke.value,L),ke!==null&&(T=u(ke,T,ce),Ge===null?ae=ke:Ge.sibling=ke,Ge=ke);return xe&&ln(j,ce),ae}for(ne=o(ne);!ke.done;ce++,ke=V.next())ke=N(ne,j,ce,ke.value,L),ke!==null&&(e&&ke.alternate!==null&&ne.delete(ke.key===null?ce:ke.key),T=u(ke,T,ce),Ge===null?ae=ke:Ge.sibling=ke,Ge=ke);return e&&ne.forEach(function(Rx){return t(j,Rx)}),xe&&ln(j,ce),ae}function je(j,T,V,L){if(typeof V=="object"&&V!==null&&V.type===S&&V.key===null&&(V=V.props.children),typeof V=="object"&&V!==null){switch(V.$$typeof){case v:e:{for(var ae=V.key;T!==null;){if(T.key===ae){if(ae=V.type,ae===S){if(T.tag===7){n(j,T.sibling),L=r(T,V.props.children),L.return=j,j=L;break e}}else if(T.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===X&&ga(ae)===T.type){n(j,T.sibling),L=r(T,V.props),Ls(L,V),L.return=j,j=L;break e}n(j,T);break}else t(j,T);T=T.sibling}V.type===S?(L=ra(V.props.children,j.mode,L,V.key),L.return=j,j=L):(L=Wo(V.type,V.key,V.props,null,j.mode,L),Ls(L,V),L.return=j,j=L)}return m(j);case M:e:{for(ae=V.key;T!==null;){if(T.key===ae)if(T.tag===4&&T.stateNode.containerInfo===V.containerInfo&&T.stateNode.implementation===V.implementation){n(j,T.sibling),L=r(T,V.children||[]),L.return=j,j=L;break e}else{n(j,T);break}else t(j,T);T=T.sibling}L=mr(V,j.mode,L),L.return=j,j=L}return m(j);case X:return V=ga(V),je(j,T,V,L)}if(Oe(V))return W(j,T,V,L);if(pe(V)){if(ae=pe(V),typeof ae!="function")throw Error(l(150));return V=ae.call(V),se(j,T,V,L)}if(typeof V.then=="function")return je(j,T,ii(V),L);if(V.$$typeof===O)return je(j,T,ni(j,V),L);li(j,V)}return typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint"?(V=""+V,T!==null&&T.tag===6?(n(j,T.sibling),L=r(T,V),L.return=j,j=L):(n(j,T),L=gr(V,j.mode,L),L.return=j,j=L),m(j)):n(j,T)}return function(j,T,V,L){try{zs=0;var ae=je(j,T,V,L);return Ka=null,ae}catch(ne){if(ne===Xa||ne===si)throw ne;var Ge=yt(29,ne,null,j.mode);return Ge.lanes=L,Ge.return=j,Ge}finally{}}}var ha=Xd(!0),Kd=Xd(!1),Vn=!1;function Ar(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ir(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function qn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function wn(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ye&2)!==0){var r=o.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),o.pending=t,t=$o(e),Vd(e,null,n),t}return Jo(e,o,t,n),$o(e)}function Us(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Rp(e,n)}}function jr(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var r=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var m={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?r=u=m:u=u.next=m,n=n.next}while(n!==null);u===null?r=u=t:u=u.next=t}else r=u=t;n={baseState:o.baseState,firstBaseUpdate:r,lastBaseUpdate:u,shared:o.shared,callbacks:o.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Sr=!1;function Bs(){if(Sr){var e=Pa;if(e!==null)throw e}}function Ys(e,t,n,o){Sr=!1;var r=e.updateQueue;Vn=!1;var u=r.firstBaseUpdate,m=r.lastBaseUpdate,_=r.shared.pending;if(_!==null){r.shared.pending=null;var y=_,q=y.next;y.next=null,m===null?u=q:m.next=q,m=y;var R=e.alternate;R!==null&&(R=R.updateQueue,_=R.lastBaseUpdate,_!==m&&(_===null?R.firstBaseUpdate=q:_.next=q,R.lastBaseUpdate=y))}if(u!==null){var U=r.baseState;m=0,R=q=y=null,_=u;do{var w=_.lane&-536870913,N=w!==_.lane;if(N?(be&w)===w:(o&w)===w){w!==0&&w===Ya&&(Sr=!0),R!==null&&(R=R.next={lane:0,tag:_.tag,payload:_.payload,callback:null,next:null});e:{var W=e,se=_;w=t;var je=n;switch(se.tag){case 1:if(W=se.payload,typeof W=="function"){U=W.call(je,U,w);break e}U=W;break e;case 3:W.flags=W.flags&-65537|128;case 0:if(W=se.payload,w=typeof W=="function"?W.call(je,U,w):W,w==null)break e;U=G({},U,w);break e;case 2:Vn=!0}}w=_.callback,w!==null&&(e.flags|=64,N&&(e.flags|=8192),N=r.callbacks,N===null?r.callbacks=[w]:N.push(w))}else N={lane:w,tag:_.tag,payload:_.payload,callback:_.callback,next:null},R===null?(q=R=N,y=U):R=R.next=N,m|=w;if(_=_.next,_===null){if(_=r.shared.pending,_===null)break;N=_,_=N.next,N.next=null,r.lastBaseUpdate=N,r.shared.pending=null}}while(!0);R===null&&(y=U),r.baseState=y,r.firstBaseUpdate=q,r.lastBaseUpdate=R,u===null&&(r.shared.lanes=0),Hn|=m,e.lanes=m,e.memoizedState=U}}function Zd(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function Fd(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Zd(n[e],t)}var Za=A(null),ri=A(0);function Qd(e,t){e=_n,J(ri,e),J(Za,t),_n=e|t.baseLanes}function Vr(){J(ri,_n),J(Za,Za.current)}function qr(){_n=ri.current,B(Za),B(ri)}var vt=A(null),Ht=null;function En(e){var t=e.alternate;J(Le,Le.current&1),J(vt,e),Ht===null&&(t===null||Za.current!==null||t.memoizedState!==null)&&(Ht=e)}function wr(e){J(Le,Le.current),J(vt,e),Ht===null&&(Ht=e)}function Jd(e){e.tag===22?(J(Le,Le.current),J(vt,e),Ht===null&&(Ht=e)):Nn()}function Nn(){J(Le,Le.current),J(vt,vt.current)}function Mt(e){B(vt),Ht===e&&(Ht=null),B(Le)}var Le=A(0);function ui(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Ru(n)||Ou(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var cn=0,re=null,Ae=null,Pe=null,ci=!1,Fa=!1,ba=!1,pi=0,Ps=0,Qa=null,j0=0;function De(){throw Error(l(321))}function Er(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kt(e[n],t[n]))return!1;return!0}function Nr(e,t,n,o,r,u){return cn=u,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Ng:Fr,ba=!1,u=n(o,r),ba=!1,Fa&&(u=Wd(t,n,o,r)),$d(e),u}function $d(e){D.H=Zs;var t=Ae!==null&&Ae.next!==null;if(cn=0,Pe=Ae=re=null,ci=!1,Ps=0,Qa=null,t)throw Error(l(300));e===null||Xe||(e=e.dependencies,e!==null&&ti(e)&&(Xe=!0))}function Wd(e,t,n,o){re=e;var r=0;do{if(Fa&&(Qa=null),Ps=0,Fa=!1,25<=r)throw Error(l(301));if(r+=1,Pe=Ae=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}D.H=Cg,u=t(n,o)}while(Fa);return u}function S0(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?Xs(t):t,e=e.useState()[0],(Ae!==null?Ae.memoizedState:null)!==e&&(re.flags|=1024),t}function Cr(){var e=pi!==0;return pi=0,e}function Dr(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Hr(e){if(ci){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ci=!1}cn=0,Pe=Ae=re=null,Fa=!1,Ps=pi=0,Qa=null}function rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?re.memoizedState=Pe=e:Pe=Pe.next=e,Pe}function Ue(){if(Ae===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=Pe===null?re.memoizedState:Pe.next;if(t!==null)Pe=t,Ae=e;else{if(e===null)throw re.alternate===null?Error(l(467)):Error(l(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Pe===null?re.memoizedState=Pe=e:Pe=Pe.next=e}return Pe}function di(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xs(e){var t=Ps;return Ps+=1,Qa===null&&(Qa=[]),e=Bd(Qa,e,t),t=re,(Pe===null?t.memoizedState:Pe.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Ng:Fr),e}function gi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Xs(e);if(e.$$typeof===O)return tt(e)}throw Error(l(438,String(e)))}function Rr(e){var t=null,n=re.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var o=re.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=di(),re.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),o=0;o<e;o++)n[o]=F;return t.index++,n}function pn(e,t){return typeof t=="function"?t(e):t}function mi(e){var t=Ue();return Or(t,Ae,e)}function Or(e,t,n){var o=e.queue;if(o===null)throw Error(l(311));o.lastRenderedReducer=n;var r=e.baseQueue,u=o.pending;if(u!==null){if(r!==null){var m=r.next;r.next=u.next,u.next=m}t.baseQueue=r=u,o.pending=null}if(u=e.baseState,r===null)e.memoizedState=u;else{t=r.next;var _=m=null,y=null,q=t,R=!1;do{var U=q.lane&-536870913;if(U!==q.lane?(be&U)===U:(cn&U)===U){var w=q.revertLane;if(w===0)y!==null&&(y=y.next={lane:0,revertLane:0,gesture:null,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),U===Ya&&(R=!0);else if((cn&w)===w){q=q.next,w===Ya&&(R=!0);continue}else U={lane:0,revertLane:q.revertLane,gesture:null,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},y===null?(_=y=U,m=u):y=y.next=U,re.lanes|=w,Hn|=w;U=q.action,ba&&n(u,U),u=q.hasEagerState?q.eagerState:n(u,U)}else w={lane:U,revertLane:q.revertLane,gesture:q.gesture,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},y===null?(_=y=w,m=u):y=y.next=w,re.lanes|=U,Hn|=U;q=q.next}while(q!==null&&q!==t);if(y===null?m=u:y.next=_,!kt(u,e.memoizedState)&&(Xe=!0,R&&(n=Pa,n!==null)))throw n;e.memoizedState=u,e.baseState=m,e.baseQueue=y,o.lastRenderedState=u}return r===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function zr(e){var t=Ue(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var o=n.dispatch,r=n.pending,u=t.memoizedState;if(r!==null){n.pending=null;var m=r=r.next;do u=e(u,m.action),m=m.next;while(m!==r);kt(u,t.memoizedState)||(Xe=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,o]}function eg(e,t,n){var o=re,r=Ue(),u=xe;if(u){if(n===void 0)throw Error(l(407));n=n()}else n=t();var m=!kt((Ae||r).memoizedState,n);if(m&&(r.memoizedState=n,Xe=!0),r=r.queue,Br(ag.bind(null,o,r,e),[e]),r.getSnapshot!==t||m||Pe!==null&&Pe.memoizedState.tag&1){if(o.flags|=2048,Ja(9,{destroy:void 0},ng.bind(null,o,r,n,t),null),Se===null)throw Error(l(349));u||(cn&127)!==0||tg(o,t,n)}return n}function tg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=re.updateQueue,t===null?(t=di(),re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ng(e,t,n,o){t.value=n,t.getSnapshot=o,sg(t)&&og(e)}function ag(e,t,n){return n(function(){sg(t)&&og(e)})}function sg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kt(e,n)}catch{return!0}}function og(e){var t=la(e,2);t!==null&&ft(t,e,2)}function Lr(e){var t=rt();if(typeof e=="function"){var n=e;if(e=n(),ba){vn(!0);try{n()}finally{vn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pn,lastRenderedState:e},t}function ig(e,t,n,o){return e.baseState=n,Or(e,Ae,typeof o=="function"?o:pn)}function V0(e,t,n,o,r){if(fi(e))throw Error(l(485));if(e=t.action,e!==null){var u={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){u.listeners.push(m)}};D.T!==null?n(!0):u.isTransition=!1,o(u),n=t.pending,n===null?(u.next=t.pending=u,lg(t,u)):(u.next=n.next,t.pending=n.next=u)}}function lg(e,t){var n=t.action,o=t.payload,r=e.state;if(t.isTransition){var u=D.T,m={};D.T=m;try{var _=n(r,o),y=D.S;y!==null&&y(m,_),rg(e,t,_)}catch(q){Ur(e,t,q)}finally{u!==null&&m.types!==null&&(u.types=m.types),D.T=u}}else try{u=n(r,o),rg(e,t,u)}catch(q){Ur(e,t,q)}}function rg(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(o){ug(e,t,o)},function(o){return Ur(e,t,o)}):ug(e,t,n)}function ug(e,t,n){t.status="fulfilled",t.value=n,cg(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,lg(e,n)))}function Ur(e,t,n){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=n,cg(t),t=t.next;while(t!==o)}e.action=null}function cg(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function pg(e,t){return t}function dg(e,t){if(xe){var n=Se.formState;if(n!==null){e:{var o=re;if(xe){if(we){t:{for(var r=we,u=Dt;r.nodeType!==8;){if(!u){r=null;break t}if(r=Rt(r.nextSibling),r===null){r=null;break t}}u=r.data,r=u==="F!"||u==="F"?r:null}if(r){we=Rt(r.nextSibling),o=r.data==="F!";break e}}jn(o)}o=!1}o&&(t=n[0])}}return n=rt(),n.memoizedState=n.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pg,lastRenderedState:t},n.queue=o,n=qg.bind(null,re,o),o.dispatch=n,o=Lr(!1),u=Zr.bind(null,re,!1,o.queue),o=rt(),r={state:t,dispatch:null,action:e,pending:null},o.queue=r,n=V0.bind(null,re,r,u,n),r.dispatch=n,o.memoizedState=e,[t,n,!1]}function gg(e){var t=Ue();return mg(t,Ae,e)}function mg(e,t,n){if(t=Or(e,t,pg)[0],e=mi(pn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=Xs(t)}catch(m){throw m===Xa?si:m}else o=t;t=Ue();var r=t.queue,u=r.dispatch;return n!==t.memoizedState&&(re.flags|=2048,Ja(9,{destroy:void 0},q0.bind(null,r,n),null)),[o,u,e]}function q0(e,t){e.action=t}function hg(e){var t=Ue(),n=Ae;if(n!==null)return mg(t,n,e);Ue(),t=t.memoizedState,n=Ue();var o=n.queue.dispatch;return n.memoizedState=e,[t,o,!1]}function Ja(e,t,n,o){return e={tag:e,create:n,deps:o,inst:t,next:null},t=re.updateQueue,t===null&&(t=di(),re.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e),e}function bg(){return Ue().memoizedState}function hi(e,t,n,o){var r=rt();re.flags|=e,r.memoizedState=Ja(1|t,{destroy:void 0},n,o===void 0?null:o)}function bi(e,t,n,o){var r=Ue();o=o===void 0?null:o;var u=r.memoizedState.inst;Ae!==null&&o!==null&&Er(o,Ae.memoizedState.deps)?r.memoizedState=Ja(t,u,n,o):(re.flags|=e,r.memoizedState=Ja(1|t,u,n,o))}function fg(e,t){hi(8390656,8,e,t)}function Br(e,t){bi(2048,8,e,t)}function w0(e){re.flags|=4;var t=re.updateQueue;if(t===null)t=di(),re.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function _g(e){var t=Ue().memoizedState;return w0({ref:t,nextImpl:e}),function(){if((ye&2)!==0)throw Error(l(440));return t.impl.apply(void 0,arguments)}}function xg(e,t){return bi(4,2,e,t)}function Gg(e,t){return bi(4,4,e,t)}function kg(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function yg(e,t,n){n=n!=null?n.concat([e]):null,bi(4,4,kg.bind(null,t,e),n)}function Yr(){}function vg(e,t){var n=Ue();t=t===void 0?null:t;var o=n.memoizedState;return t!==null&&Er(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function Mg(e,t){var n=Ue();t=t===void 0?null:t;var o=n.memoizedState;if(t!==null&&Er(t,o[1]))return o[0];if(o=e(),ba){vn(!0);try{e()}finally{vn(!1)}}return n.memoizedState=[o,t],o}function Pr(e,t,n){return n===void 0||(cn&1073741824)!==0&&(be&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Tm(),re.lanes|=e,Hn|=e,n)}function Tg(e,t,n,o){return kt(n,t)?n:Za.current!==null?(e=Pr(e,n,o),kt(e,t)||(Xe=!0),e):(cn&42)===0||(cn&1073741824)!==0&&(be&261930)===0?(Xe=!0,e.memoizedState=n):(e=Tm(),re.lanes|=e,Hn|=e,t)}function Ag(e,t,n,o,r){var u=Q.p;Q.p=u!==0&&8>u?u:8;var m=D.T,_={};D.T=_,Zr(e,!1,t,n);try{var y=r(),q=D.S;if(q!==null&&q(_,y),y!==null&&typeof y=="object"&&typeof y.then=="function"){var R=I0(y,o);Ks(e,t,R,It(e))}else Ks(e,t,o,It(e))}catch(U){Ks(e,t,{then:function(){},status:"rejected",reason:U},It())}finally{Q.p=u,m!==null&&_.types!==null&&(m.types=_.types),D.T=m}}function E0(){}function Xr(e,t,n,o){if(e.tag!==5)throw Error(l(476));var r=Ig(e).queue;Ag(e,r,t,$,n===null?E0:function(){return jg(e),n(o)})}function Ig(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pn,lastRenderedState:$},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function jg(e){var t=Ig(e);t.next===null&&(t=e.alternate.memoizedState),Ks(e,t.next.queue,{},It())}function Kr(){return tt(co)}function Sg(){return Ue().memoizedState}function Vg(){return Ue().memoizedState}function N0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=It();e=qn(n);var o=wn(t,e,n);o!==null&&(ft(o,t,n),Us(o,t,n)),t={cache:yr()},e.payload=t;return}t=t.return}}function C0(e,t,n){var o=It();n={lane:o,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},fi(e)?wg(t,n):(n=pr(e,t,n,o),n!==null&&(ft(n,e,o),Eg(n,t,o)))}function qg(e,t,n){var o=It();Ks(e,t,n,o)}function Ks(e,t,n,o){var r={lane:o,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(fi(e))wg(t,r);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var m=t.lastRenderedState,_=u(m,n);if(r.hasEagerState=!0,r.eagerState=_,kt(_,m))return Jo(e,t,r,0),Se===null&&Qo(),!1}catch{}finally{}if(n=pr(e,t,r,o),n!==null)return ft(n,e,o),Eg(n,t,o),!0}return!1}function Zr(e,t,n,o){if(o={lane:2,revertLane:Au(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},fi(e)){if(t)throw Error(l(479))}else t=pr(e,n,o,2),t!==null&&ft(t,e,2)}function fi(e){var t=e.alternate;return e===re||t!==null&&t===re}function wg(e,t){Fa=ci=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Eg(e,t,n){if((n&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Rp(e,n)}}var Zs={readContext:tt,use:gi,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useLayoutEffect:De,useInsertionEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useSyncExternalStore:De,useId:De,useHostTransitionStatus:De,useFormState:De,useActionState:De,useOptimistic:De,useMemoCache:De,useCacheRefresh:De};Zs.useEffectEvent=De;var Ng={readContext:tt,use:gi,useCallback:function(e,t){return rt().memoizedState=[e,t===void 0?null:t],e},useContext:tt,useEffect:fg,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,hi(4194308,4,kg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return hi(4194308,4,e,t)},useInsertionEffect:function(e,t){hi(4,2,e,t)},useMemo:function(e,t){var n=rt();t=t===void 0?null:t;var o=e();if(ba){vn(!0);try{e()}finally{vn(!1)}}return n.memoizedState=[o,t],o},useReducer:function(e,t,n){var o=rt();if(n!==void 0){var r=n(t);if(ba){vn(!0);try{n(t)}finally{vn(!1)}}}else r=t;return o.memoizedState=o.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},o.queue=e,e=e.dispatch=C0.bind(null,re,e),[o.memoizedState,e]},useRef:function(e){var t=rt();return e={current:e},t.memoizedState=e},useState:function(e){e=Lr(e);var t=e.queue,n=qg.bind(null,re,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Yr,useDeferredValue:function(e,t){var n=rt();return Pr(n,e,t)},useTransition:function(){var e=Lr(!1);return e=Ag.bind(null,re,e.queue,!0,!1),rt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var o=re,r=rt();if(xe){if(n===void 0)throw Error(l(407));n=n()}else{if(n=t(),Se===null)throw Error(l(349));(be&127)!==0||tg(o,t,n)}r.memoizedState=n;var u={value:n,getSnapshot:t};return r.queue=u,fg(ag.bind(null,o,u,e),[e]),o.flags|=2048,Ja(9,{destroy:void 0},ng.bind(null,o,u,n,t),null),n},useId:function(){var e=rt(),t=Se.identifierPrefix;if(xe){var n=Ft,o=Zt;n=(o&~(1<<32-Gt(o)-1)).toString(32)+n,t="_"+t+"R_"+n,n=pi++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=j0++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Kr,useFormState:dg,useActionState:dg,useOptimistic:function(e){var t=rt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Zr.bind(null,re,!0,n),n.dispatch=t,[e,t]},useMemoCache:Rr,useCacheRefresh:function(){return rt().memoizedState=N0.bind(null,re)},useEffectEvent:function(e){var t=rt(),n={impl:e};return t.memoizedState=n,function(){if((ye&2)!==0)throw Error(l(440));return n.impl.apply(void 0,arguments)}}},Fr={readContext:tt,use:gi,useCallback:vg,useContext:tt,useEffect:Br,useImperativeHandle:yg,useInsertionEffect:xg,useLayoutEffect:Gg,useMemo:Mg,useReducer:mi,useRef:bg,useState:function(){return mi(pn)},useDebugValue:Yr,useDeferredValue:function(e,t){var n=Ue();return Tg(n,Ae.memoizedState,e,t)},useTransition:function(){var e=mi(pn)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:Xs(e),t]},useSyncExternalStore:eg,useId:Sg,useHostTransitionStatus:Kr,useFormState:gg,useActionState:gg,useOptimistic:function(e,t){var n=Ue();return ig(n,Ae,e,t)},useMemoCache:Rr,useCacheRefresh:Vg};Fr.useEffectEvent=_g;var Cg={readContext:tt,use:gi,useCallback:vg,useContext:tt,useEffect:Br,useImperativeHandle:yg,useInsertionEffect:xg,useLayoutEffect:Gg,useMemo:Mg,useReducer:zr,useRef:bg,useState:function(){return zr(pn)},useDebugValue:Yr,useDeferredValue:function(e,t){var n=Ue();return Ae===null?Pr(n,e,t):Tg(n,Ae.memoizedState,e,t)},useTransition:function(){var e=zr(pn)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:Xs(e),t]},useSyncExternalStore:eg,useId:Sg,useHostTransitionStatus:Kr,useFormState:hg,useActionState:hg,useOptimistic:function(e,t){var n=Ue();return Ae!==null?ig(n,Ae,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Rr,useCacheRefresh:Vg};Cg.useEffectEvent=_g;function Qr(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:G({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Jr={enqueueSetState:function(e,t,n){e=e._reactInternals;var o=It(),r=qn(o);r.payload=t,n!=null&&(r.callback=n),t=wn(e,r,o),t!==null&&(ft(t,e,o),Us(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=It(),r=qn(o);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=wn(e,r,o),t!==null&&(ft(t,e,o),Us(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=It(),o=qn(n);o.tag=2,t!=null&&(o.callback=t),t=wn(e,o,n),t!==null&&(ft(t,e,n),Us(t,e,n))}};function Dg(e,t,n,o,r,u,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,u,m):t.prototype&&t.prototype.isPureReactComponent?!Ns(n,o)||!Ns(r,u):!0}function Hg(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&Jr.enqueueReplaceState(t,t.state,null)}function fa(e,t){var n=t;if("ref"in t){n={};for(var o in t)o!=="ref"&&(n[o]=t[o])}if(e=e.defaultProps){n===t&&(n=G({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function Rg(e){Fo(e)}function Og(e){console.error(e)}function zg(e){Fo(e)}function _i(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function Lg(e,t,n){try{var o=e.onCaughtError;o(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function $r(e,t,n){return n=qn(n),n.tag=3,n.payload={element:null},n.callback=function(){_i(e,t)},n}function Ug(e){return e=qn(e),e.tag=3,e}function Bg(e,t,n,o){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var u=o.value;e.payload=function(){return r(u)},e.callback=function(){Lg(t,n,o)}}var m=n.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){Lg(t,n,o),typeof r!="function"&&(Rn===null?Rn=new Set([this]):Rn.add(this));var _=o.stack;this.componentDidCatch(o.value,{componentStack:_!==null?_:""})})}function D0(e,t,n,o,r){if(n.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=n.alternate,t!==null&&Ba(t,n,r,!0),n=vt.current,n!==null){switch(n.tag){case 31:case 13:return Ht===null?Vi():n.alternate===null&&He===0&&(He=3),n.flags&=-257,n.flags|=65536,n.lanes=r,o===oi?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([o]):t.add(o),vu(e,o,r)),!1;case 22:return n.flags|=65536,o===oi?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([o]):n.add(o)),vu(e,o,r)),!1}throw Error(l(435,n.tag))}return vu(e,o,r),Vi(),!1}if(xe)return t=vt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,o!==fr&&(e=Error(l(422),{cause:o}),Hs(Et(e,n)))):(o!==fr&&(t=Error(l(423),{cause:o}),Hs(Et(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,o=Et(o,n),r=$r(e.stateNode,o,r),jr(e,r),He!==4&&(He=2)),!1;var u=Error(l(520),{cause:o});if(u=Et(u,n),no===null?no=[u]:no.push(u),He!==4&&(He=2),t===null)return!0;o=Et(o,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=$r(n.stateNode,o,e),jr(n,e),!1;case 1:if(t=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Rn===null||!Rn.has(u))))return n.flags|=65536,r&=-r,n.lanes|=r,r=Ug(r),Bg(r,e,n,o),jr(n,r),!1}n=n.return}while(n!==null);return!1}var Wr=Error(l(461)),Xe=!1;function nt(e,t,n,o){t.child=e===null?Kd(t,null,n,o):ha(t,e.child,n,o)}function Yg(e,t,n,o,r){n=n.render;var u=t.ref;if("ref"in o){var m={};for(var _ in o)_!=="ref"&&(m[_]=o[_])}else m=o;return pa(t),o=Nr(e,t,n,m,u,r),_=Cr(),e!==null&&!Xe?(Dr(e,t,r),dn(e,t,r)):(xe&&_&&hr(t),t.flags|=1,nt(e,t,o,r),t.child)}function Pg(e,t,n,o,r){if(e===null){var u=n.type;return typeof u=="function"&&!dr(u)&&u.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=u,Xg(e,t,u,o,r)):(e=Wo(n.type,null,o,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!lu(e,r)){var m=u.memoizedProps;if(n=n.compare,n=n!==null?n:Ns,n(m,o)&&e.ref===t.ref)return dn(e,t,r)}return t.flags|=1,e=on(u,o),e.ref=t.ref,e.return=t,t.child=e}function Xg(e,t,n,o,r){if(e!==null){var u=e.memoizedProps;if(Ns(u,o)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=o=u,lu(e,r))(e.flags&131072)!==0&&(Xe=!0);else return t.lanes=e.lanes,dn(e,t,r)}return eu(e,t,n,o,r)}function Kg(e,t,n,o){var r=o.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|n:n,e!==null){for(o=t.child=e.child,r=0;o!==null;)r=r|o.lanes|o.childLanes,o=o.sibling;o=r&~u}else o=0,t.child=null;return Zg(e,t,u,n,o)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ai(t,u!==null?u.cachePool:null),u!==null?Qd(t,u):Vr(),Jd(t);else return o=t.lanes=536870912,Zg(e,t,u!==null?u.baseLanes|n:n,n,o)}else u!==null?(ai(t,u.cachePool),Qd(t,u),Nn(),t.memoizedState=null):(e!==null&&ai(t,null),Vr(),Nn());return nt(e,t,r,n),t.child}function Fs(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Zg(e,t,n,o,r){var u=Mr();return u=u===null?null:{parent:Ye._currentValue,pool:u},t.memoizedState={baseLanes:n,cachePool:u},e!==null&&ai(t,null),Vr(),Jd(t),e!==null&&Ba(e,t,o,!0),t.childLanes=r,null}function xi(e,t){return t=ki({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Fg(e,t,n){return ha(t,e.child,null,n),e=xi(t,t.pendingProps),e.flags|=2,Mt(t),t.memoizedState=null,e}function H0(e,t,n){var o=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(xe){if(o.mode==="hidden")return e=xi(t,o),t.lanes=536870912,Fs(null,e);if(wr(t),(e=we)?(e=lh(e,Dt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:An!==null?{id:Zt,overflow:Ft}:null,retryLane:536870912,hydrationErrors:null},n=wd(e),n.return=t,t.child=n,et=t,we=null)):e=null,e===null)throw jn(t);return t.lanes=536870912,null}return xi(t,o)}var u=e.memoizedState;if(u!==null){var m=u.dehydrated;if(wr(t),r)if(t.flags&256)t.flags&=-257,t=Fg(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(l(558));else if(Xe||Ba(e,t,n,!1),r=(n&e.childLanes)!==0,Xe||r){if(o=Se,o!==null&&(m=Op(o,n),m!==0&&m!==u.retryLane))throw u.retryLane=m,la(e,m),ft(o,e,m),Wr;Vi(),t=Fg(e,t,n)}else e=u.treeContext,we=Rt(m.nextSibling),et=t,xe=!0,In=null,Dt=!1,e!==null&&Cd(t,e),t=xi(t,o),t.flags|=4096;return t}return e=on(e.child,{mode:o.mode,children:o.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Gi(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(l(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function eu(e,t,n,o,r){return pa(t),n=Nr(e,t,n,o,void 0,r),o=Cr(),e!==null&&!Xe?(Dr(e,t,r),dn(e,t,r)):(xe&&o&&hr(t),t.flags|=1,nt(e,t,n,r),t.child)}function Qg(e,t,n,o,r,u){return pa(t),t.updateQueue=null,n=Wd(t,o,n,r),$d(e),o=Cr(),e!==null&&!Xe?(Dr(e,t,u),dn(e,t,u)):(xe&&o&&hr(t),t.flags|=1,nt(e,t,n,u),t.child)}function Jg(e,t,n,o,r){if(pa(t),t.stateNode===null){var u=Oa,m=n.contextType;typeof m=="object"&&m!==null&&(u=tt(m)),u=new n(o,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Jr,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=o,u.state=t.memoizedState,u.refs={},Ar(t),m=n.contextType,u.context=typeof m=="object"&&m!==null?tt(m):Oa,u.state=t.memoizedState,m=n.getDerivedStateFromProps,typeof m=="function"&&(Qr(t,n,m,o),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(m=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),m!==u.state&&Jr.enqueueReplaceState(u,u.state,null),Ys(t,o,u,r),Bs(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){u=t.stateNode;var _=t.memoizedProps,y=fa(n,_);u.props=y;var q=u.context,R=n.contextType;m=Oa,typeof R=="object"&&R!==null&&(m=tt(R));var U=n.getDerivedStateFromProps;R=typeof U=="function"||typeof u.getSnapshotBeforeUpdate=="function",_=t.pendingProps!==_,R||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(_||q!==m)&&Hg(t,u,o,m),Vn=!1;var w=t.memoizedState;u.state=w,Ys(t,o,u,r),Bs(),q=t.memoizedState,_||w!==q||Vn?(typeof U=="function"&&(Qr(t,n,U,o),q=t.memoizedState),(y=Vn||Dg(t,n,y,o,w,q,m))?(R||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=q),u.props=o,u.state=q,u.context=m,o=y):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{u=t.stateNode,Ir(e,t),m=t.memoizedProps,R=fa(n,m),u.props=R,U=t.pendingProps,w=u.context,q=n.contextType,y=Oa,typeof q=="object"&&q!==null&&(y=tt(q)),_=n.getDerivedStateFromProps,(q=typeof _=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(m!==U||w!==y)&&Hg(t,u,o,y),Vn=!1,w=t.memoizedState,u.state=w,Ys(t,o,u,r),Bs();var N=t.memoizedState;m!==U||w!==N||Vn||e!==null&&e.dependencies!==null&&ti(e.dependencies)?(typeof _=="function"&&(Qr(t,n,_,o),N=t.memoizedState),(R=Vn||Dg(t,n,R,o,w,N,y)||e!==null&&e.dependencies!==null&&ti(e.dependencies))?(q||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(o,N,y),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(o,N,y)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||m===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=N),u.props=o,u.state=N,u.context=y,o=R):(typeof u.componentDidUpdate!="function"||m===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),o=!1)}return u=o,Gi(e,t),o=(t.flags&128)!==0,u||o?(u=t.stateNode,n=o&&typeof n.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&o?(t.child=ha(t,e.child,null,r),t.child=ha(t,null,n,r)):nt(e,t,n,r),t.memoizedState=u.state,e=t.child):e=dn(e,t,r),e}function $g(e,t,n,o){return ua(),t.flags|=256,nt(e,t,n,o),t.child}var tu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nu(e){return{baseLanes:e,cachePool:Ld()}}function au(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=At),e}function Wg(e,t,n){var o=t.pendingProps,r=!1,u=(t.flags&128)!==0,m;if((m=u)||(m=e!==null&&e.memoizedState===null?!1:(Le.current&2)!==0),m&&(r=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(xe){if(r?En(t):Nn(),(e=we)?(e=lh(e,Dt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:An!==null?{id:Zt,overflow:Ft}:null,retryLane:536870912,hydrationErrors:null},n=wd(e),n.return=t,t.child=n,et=t,we=null)):e=null,e===null)throw jn(t);return Ou(e)?t.lanes=32:t.lanes=536870912,null}var _=o.children;return o=o.fallback,r?(Nn(),r=t.mode,_=ki({mode:"hidden",children:_},r),o=ra(o,r,n,null),_.return=t,o.return=t,_.sibling=o,t.child=_,o=t.child,o.memoizedState=nu(n),o.childLanes=au(e,m,n),t.memoizedState=tu,Fs(null,o)):(En(t),su(t,_))}var y=e.memoizedState;if(y!==null&&(_=y.dehydrated,_!==null)){if(u)t.flags&256?(En(t),t.flags&=-257,t=ou(e,t,n)):t.memoizedState!==null?(Nn(),t.child=e.child,t.flags|=128,t=null):(Nn(),_=o.fallback,r=t.mode,o=ki({mode:"visible",children:o.children},r),_=ra(_,r,n,null),_.flags|=2,o.return=t,_.return=t,o.sibling=_,t.child=o,ha(t,e.child,null,n),o=t.child,o.memoizedState=nu(n),o.childLanes=au(e,m,n),t.memoizedState=tu,t=Fs(null,o));else if(En(t),Ou(_)){if(m=_.nextSibling&&_.nextSibling.dataset,m)var q=m.dgst;m=q,o=Error(l(419)),o.stack="",o.digest=m,Hs({value:o,source:null,stack:null}),t=ou(e,t,n)}else if(Xe||Ba(e,t,n,!1),m=(n&e.childLanes)!==0,Xe||m){if(m=Se,m!==null&&(o=Op(m,n),o!==0&&o!==y.retryLane))throw y.retryLane=o,la(e,o),ft(m,e,o),Wr;Ru(_)||Vi(),t=ou(e,t,n)}else Ru(_)?(t.flags|=192,t.child=e.child,t=null):(e=y.treeContext,we=Rt(_.nextSibling),et=t,xe=!0,In=null,Dt=!1,e!==null&&Cd(t,e),t=su(t,o.children),t.flags|=4096);return t}return r?(Nn(),_=o.fallback,r=t.mode,y=e.child,q=y.sibling,o=on(y,{mode:"hidden",children:o.children}),o.subtreeFlags=y.subtreeFlags&65011712,q!==null?_=on(q,_):(_=ra(_,r,n,null),_.flags|=2),_.return=t,o.return=t,o.sibling=_,t.child=o,Fs(null,o),o=t.child,_=e.child.memoizedState,_===null?_=nu(n):(r=_.cachePool,r!==null?(y=Ye._currentValue,r=r.parent!==y?{parent:y,pool:y}:r):r=Ld(),_={baseLanes:_.baseLanes|n,cachePool:r}),o.memoizedState=_,o.childLanes=au(e,m,n),t.memoizedState=tu,Fs(e.child,o)):(En(t),n=e.child,e=n.sibling,n=on(n,{mode:"visible",children:o.children}),n.return=t,n.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=n,t.memoizedState=null,n)}function su(e,t){return t=ki({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ki(e,t){return e=yt(22,e,null,t),e.lanes=0,e}function ou(e,t,n){return ha(t,e.child,null,n),e=su(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function em(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Gr(e.return,t,n)}function iu(e,t,n,o,r,u){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:r,treeForkCount:u}:(m.isBackwards=t,m.rendering=null,m.renderingStartTime=0,m.last=o,m.tail=n,m.tailMode=r,m.treeForkCount=u)}function tm(e,t,n){var o=t.pendingProps,r=o.revealOrder,u=o.tail;o=o.children;var m=Le.current,_=(m&2)!==0;if(_?(m=m&1|2,t.flags|=128):m&=1,J(Le,m),nt(e,t,o,n),o=xe?Ds:0,!_&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&em(e,n,t);else if(e.tag===19)em(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&ui(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),iu(t,!1,r,n,u,o);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&ui(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}iu(t,!0,n,null,u,o);break;case"together":iu(t,!1,null,null,void 0,o);break;default:t.memoizedState=null}return t.child}function dn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Hn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ba(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,n=on(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=on(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function lu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ti(e)))}function R0(e,t,n){switch(t.tag){case 3:lt(t,t.stateNode.containerInfo),Sn(t,Ye,e.memoizedState.cache),ua();break;case 27:case 5:ks(t);break;case 4:lt(t,t.stateNode.containerInfo);break;case 10:Sn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,wr(t),null;break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(En(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Wg(e,t,n):(En(t),e=dn(e,t,n),e!==null?e.sibling:null);En(t);break;case 19:var r=(e.flags&128)!==0;if(o=(n&t.childLanes)!==0,o||(Ba(e,t,n,!1),o=(n&t.childLanes)!==0),r){if(o)return tm(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),J(Le,Le.current),o)break;return null;case 22:return t.lanes=0,Kg(e,t,n,t.pendingProps);case 24:Sn(t,Ye,e.memoizedState.cache)}return dn(e,t,n)}function nm(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Xe=!0;else{if(!lu(e,n)&&(t.flags&128)===0)return Xe=!1,R0(e,t,n);Xe=(e.flags&131072)!==0}else Xe=!1,xe&&(t.flags&1048576)!==0&&Nd(t,Ds,t.index);switch(t.lanes=0,t.tag){case 16:e:{var o=t.pendingProps;if(e=ga(t.elementType),t.type=e,typeof e=="function")dr(e)?(o=fa(e,o),t.tag=1,t=Jg(null,t,e,o,n)):(t.tag=0,t=eu(null,t,e,o,n));else{if(e!=null){var r=e.$$typeof;if(r===C){t.tag=11,t=Yg(null,t,e,o,n);break e}else if(r===H){t.tag=14,t=Pg(null,t,e,o,n);break e}}throw t=Ce(e)||e,Error(l(306,t,""))}}return t;case 0:return eu(e,t,t.type,t.pendingProps,n);case 1:return o=t.type,r=fa(o,t.pendingProps),Jg(e,t,o,r,n);case 3:e:{if(lt(t,t.stateNode.containerInfo),e===null)throw Error(l(387));o=t.pendingProps;var u=t.memoizedState;r=u.element,Ir(e,t),Ys(t,o,null,n);var m=t.memoizedState;if(o=m.cache,Sn(t,Ye,o),o!==u.cache&&kr(t,[Ye],n,!0),Bs(),o=m.element,u.isDehydrated)if(u={element:o,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=$g(e,t,o,n);break e}else if(o!==r){r=Et(Error(l(424)),t),Hs(r),t=$g(e,t,o,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(we=Rt(e.firstChild),et=t,xe=!0,In=null,Dt=!0,n=Kd(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ua(),o===r){t=dn(e,t,n);break e}nt(e,t,o,n)}t=t.child}return t;case 26:return Gi(e,t),e===null?(n=gh(t.type,null,t.pendingProps,null))?t.memoizedState=n:xe||(n=t.type,e=t.pendingProps,o=Hi(de.current).createElement(n),o[We]=t,o[pt]=e,at(o,n,e),Je(o),t.stateNode=o):t.memoizedState=gh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ks(t),e===null&&xe&&(o=t.stateNode=ch(t.type,t.pendingProps,de.current),et=t,Dt=!0,r=we,Un(t.type)?(zu=r,we=Rt(o.firstChild)):we=r),nt(e,t,t.pendingProps.children,n),Gi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&xe&&((r=o=we)&&(o=mx(o,t.type,t.pendingProps,Dt),o!==null?(t.stateNode=o,et=t,we=Rt(o.firstChild),Dt=!1,r=!0):r=!1),r||jn(t)),ks(t),r=t.type,u=t.pendingProps,m=e!==null?e.memoizedProps:null,o=u.children,Cu(r,u)?o=null:m!==null&&Cu(r,m)&&(t.flags|=32),t.memoizedState!==null&&(r=Nr(e,t,S0,null,null,n),co._currentValue=r),Gi(e,t),nt(e,t,o,n),t.child;case 6:return e===null&&xe&&((e=n=we)&&(n=hx(n,t.pendingProps,Dt),n!==null?(t.stateNode=n,et=t,we=null,e=!0):e=!1),e||jn(t)),null;case 13:return Wg(e,t,n);case 4:return lt(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=ha(t,null,o,n):nt(e,t,o,n),t.child;case 11:return Yg(e,t,t.type,t.pendingProps,n);case 7:return nt(e,t,t.pendingProps,n),t.child;case 8:return nt(e,t,t.pendingProps.children,n),t.child;case 12:return nt(e,t,t.pendingProps.children,n),t.child;case 10:return o=t.pendingProps,Sn(t,t.type,o.value),nt(e,t,o.children,n),t.child;case 9:return r=t.type._context,o=t.pendingProps.children,pa(t),r=tt(r),o=o(r),t.flags|=1,nt(e,t,o,n),t.child;case 14:return Pg(e,t,t.type,t.pendingProps,n);case 15:return Xg(e,t,t.type,t.pendingProps,n);case 19:return tm(e,t,n);case 31:return H0(e,t,n);case 22:return Kg(e,t,n,t.pendingProps);case 24:return pa(t),o=tt(Ye),e===null?(r=Mr(),r===null&&(r=Se,u=yr(),r.pooledCache=u,u.refCount++,u!==null&&(r.pooledCacheLanes|=n),r=u),t.memoizedState={parent:o,cache:r},Ar(t),Sn(t,Ye,r)):((e.lanes&n)!==0&&(Ir(e,t),Ys(t,null,null,n),Bs()),r=e.memoizedState,u=t.memoizedState,r.parent!==o?(r={parent:o,cache:o},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),Sn(t,Ye,o)):(o=u.cache,Sn(t,Ye,o),o!==r.cache&&kr(t,[Ye],n,!0))),nt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function gn(e){e.flags|=4}function ru(e,t,n,o,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Sm())e.flags|=8192;else throw ma=oi,Tr}else e.flags&=-16777217}function am(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!_h(t))if(Sm())e.flags|=8192;else throw ma=oi,Tr}function yi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Dp():536870912,e.lanes|=t,ts|=t)}function Qs(e,t){if(!xe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags&65011712,o|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags,o|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function O0(e,t,n){var o=t.pendingProps;switch(br(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Ee(t),null;case 3:return n=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),un(Ye),ze(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ua(t)?gn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,_r())),Ee(t),null;case 26:var r=t.type,u=t.memoizedState;return e===null?(gn(t),u!==null?(Ee(t),am(t,u)):(Ee(t),ru(t,r,null,o,n))):u?u!==e.memoizedState?(gn(t),Ee(t),am(t,u)):(Ee(t),t.flags&=-16777217):(e=e.memoizedProps,e!==o&&gn(t),Ee(t),ru(t,r,e,o,n)),null;case 27:if(Eo(t),n=de.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&gn(t);else{if(!o){if(t.stateNode===null)throw Error(l(166));return Ee(t),null}e=te.current,Ua(t)?Dd(t):(e=ch(r,o,n),t.stateNode=e,gn(t))}return Ee(t),null;case 5:if(Eo(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&gn(t);else{if(!o){if(t.stateNode===null)throw Error(l(166));return Ee(t),null}if(u=te.current,Ua(t))Dd(t);else{var m=Hi(de.current);switch(u){case 1:u=m.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:u=m.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":u=m.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":u=m.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":u=m.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof o.is=="string"?m.createElement("select",{is:o.is}):m.createElement("select"),o.multiple?u.multiple=!0:o.size&&(u.size=o.size);break;default:u=typeof o.is=="string"?m.createElement(r,{is:o.is}):m.createElement(r)}}u[We]=t,u[pt]=o;e:for(m=t.child;m!==null;){if(m.tag===5||m.tag===6)u.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}t.stateNode=u;e:switch(at(u,r,o),r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&gn(t)}}return Ee(t),ru(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&gn(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(l(166));if(e=de.current,Ua(t)){if(e=t.stateNode,n=t.memoizedProps,o=null,r=et,r!==null)switch(r.tag){case 27:case 5:o=r.memoizedProps}e[We]=t,e=!!(e.nodeValue===n||o!==null&&o.suppressHydrationWarning===!0||Wm(e.nodeValue,n)),e||jn(t,!0)}else e=Hi(e).createTextNode(o),e[We]=t,t.stateNode=e}return Ee(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(o=Ua(t),n!==null){if(e===null){if(!o)throw Error(l(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(557));e[We]=t}else ua(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ee(t),e=!1}else n=_r(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Mt(t),t):(Mt(t),null);if((t.flags&128)!==0)throw Error(l(558))}return Ee(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=Ua(t),o!==null&&o.dehydrated!==null){if(e===null){if(!r)throw Error(l(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(l(317));r[We]=t}else ua(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ee(t),r=!1}else r=_r(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(Mt(t),t):(Mt(t),null)}return Mt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=o!==null,e=e!==null&&e.memoizedState!==null,n&&(o=t.child,r=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(r=o.alternate.memoizedState.cachePool.pool),u=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(u=o.memoizedState.cachePool.pool),u!==r&&(o.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),yi(t,t.updateQueue),Ee(t),null);case 4:return ze(),e===null&&Vu(t.stateNode.containerInfo),Ee(t),null;case 10:return un(t.type),Ee(t),null;case 19:if(B(Le),o=t.memoizedState,o===null)return Ee(t),null;if(r=(t.flags&128)!==0,u=o.rendering,u===null)if(r)Qs(o,!1);else{if(He!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=ui(e),u!==null){for(t.flags|=128,Qs(o,!1),e=u.updateQueue,t.updateQueue=e,yi(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)qd(n,e),n=n.sibling;return J(Le,Le.current&1|2),xe&&ln(t,o.treeForkCount),t.child}e=e.sibling}o.tail!==null&&_t()>Ii&&(t.flags|=128,r=!0,Qs(o,!1),t.lanes=4194304)}else{if(!r)if(e=ui(u),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,yi(t,e),Qs(o,!0),o.tail===null&&o.tailMode==="hidden"&&!u.alternate&&!xe)return Ee(t),null}else 2*_t()-o.renderingStartTime>Ii&&n!==536870912&&(t.flags|=128,r=!0,Qs(o,!1),t.lanes=4194304);o.isBackwards?(u.sibling=t.child,t.child=u):(e=o.last,e!==null?e.sibling=u:t.child=u,o.last=u)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=_t(),e.sibling=null,n=Le.current,J(Le,r?n&1|2:n&1),xe&&ln(t,o.treeForkCount),e):(Ee(t),null);case 22:case 23:return Mt(t),qr(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(n&536870912)!==0&&(t.flags&128)===0&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),n=t.updateQueue,n!==null&&yi(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==n&&(t.flags|=2048),e!==null&&B(da),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),un(Ye),Ee(t),null;case 25:return null;case 30:return null}throw Error(l(156,t.tag))}function z0(e,t){switch(br(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return un(Ye),ze(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Eo(t),null;case 31:if(t.memoizedState!==null){if(Mt(t),t.alternate===null)throw Error(l(340));ua()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Mt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));ua()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(Le),null;case 4:return ze(),null;case 10:return un(t.type),null;case 22:case 23:return Mt(t),qr(),e!==null&&B(da),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return un(Ye),null;case 25:return null;default:return null}}function sm(e,t){switch(br(t),t.tag){case 3:un(Ye),ze();break;case 26:case 27:case 5:Eo(t);break;case 4:ze();break;case 31:t.memoizedState!==null&&Mt(t);break;case 13:Mt(t);break;case 19:B(Le);break;case 10:un(t.type);break;case 22:case 23:Mt(t),qr(),e!==null&&B(da);break;case 24:un(Ye)}}function Js(e,t){try{var n=t.updateQueue,o=n!==null?n.lastEffect:null;if(o!==null){var r=o.next;n=r;do{if((n.tag&e)===e){o=void 0;var u=n.create,m=n.inst;o=u(),m.destroy=o}n=n.next}while(n!==r)}}catch(_){Te(t,t.return,_)}}function Cn(e,t,n){try{var o=t.updateQueue,r=o!==null?o.lastEffect:null;if(r!==null){var u=r.next;o=u;do{if((o.tag&e)===e){var m=o.inst,_=m.destroy;if(_!==void 0){m.destroy=void 0,r=t;var y=n,q=_;try{q()}catch(R){Te(r,y,R)}}}o=o.next}while(o!==u)}}catch(R){Te(t,t.return,R)}}function om(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Fd(t,n)}catch(o){Te(e,e.return,o)}}}function im(e,t,n){n.props=fa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(o){Te(e,t,o)}}function $s(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof n=="function"?e.refCleanup=n(o):n.current=o}}catch(r){Te(e,t,r)}}function Qt(e,t){var n=e.ref,o=e.refCleanup;if(n!==null)if(typeof o=="function")try{o()}catch(r){Te(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){Te(e,t,r)}else n.current=null}function lm(e){var t=e.type,n=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&o.focus();break e;case"img":n.src?o.src=n.src:n.srcSet&&(o.srcset=n.srcSet)}}catch(r){Te(e,e.return,r)}}function uu(e,t,n){try{var o=e.stateNode;rx(o,e.type,n,t),o[pt]=t}catch(r){Te(e,e.return,r)}}function rm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Un(e.type)||e.tag===4}function cu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||rm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Un(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pu(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=an));else if(o!==4&&(o===27&&Un(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(pu(e,t,n),e=e.sibling;e!==null;)pu(e,t,n),e=e.sibling}function vi(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(o===27&&Un(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(vi(e,t,n),e=e.sibling;e!==null;)vi(e,t,n),e=e.sibling}function um(e){var t=e.stateNode,n=e.memoizedProps;try{for(var o=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);at(t,o,n),t[We]=e,t[pt]=n}catch(u){Te(e,e.return,u)}}var mn=!1,Ke=!1,du=!1,cm=typeof WeakSet=="function"?WeakSet:Set,$e=null;function L0(e,t){if(e=e.containerInfo,Eu=Yi,e=yd(e),or(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var r=o.anchorOffset,u=o.focusNode;o=o.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var m=0,_=-1,y=-1,q=0,R=0,U=e,w=null;t:for(;;){for(var N;U!==n||r!==0&&U.nodeType!==3||(_=m+r),U!==u||o!==0&&U.nodeType!==3||(y=m+o),U.nodeType===3&&(m+=U.nodeValue.length),(N=U.firstChild)!==null;)w=U,U=N;for(;;){if(U===e)break t;if(w===n&&++q===r&&(_=m),w===u&&++R===o&&(y=m),(N=U.nextSibling)!==null)break;U=w,w=U.parentNode}U=N}n=_===-1||y===-1?null:{start:_,end:y}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nu={focusedElem:e,selectionRange:n},Yi=!1,$e=t;$e!==null;)if(t=$e,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$e=e;else for(;$e!==null;){switch(t=$e,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,n=t,r=u.memoizedProps,u=u.memoizedState,o=n.stateNode;try{var W=fa(n.type,r);e=o.getSnapshotBeforeUpdate(W,u),o.__reactInternalSnapshotBeforeUpdate=e}catch(se){Te(n,n.return,se)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Hu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Hu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=t.sibling,e!==null){e.return=t.return,$e=e;break}$e=t.return}}function pm(e,t,n){var o=n.flags;switch(n.tag){case 0:case 11:case 15:bn(e,n),o&4&&Js(5,n);break;case 1:if(bn(e,n),o&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(m){Te(n,n.return,m)}else{var r=fa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){Te(n,n.return,m)}}o&64&&om(n),o&512&&$s(n,n.return);break;case 3:if(bn(e,n),o&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Fd(e,t)}catch(m){Te(n,n.return,m)}}break;case 27:t===null&&o&4&&um(n);case 26:case 5:bn(e,n),t===null&&o&4&&lm(n),o&512&&$s(n,n.return);break;case 12:bn(e,n);break;case 31:bn(e,n),o&4&&mm(e,n);break;case 13:bn(e,n),o&4&&hm(e,n),o&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Q0.bind(null,n),bx(e,n))));break;case 22:if(o=n.memoizedState!==null||mn,!o){t=t!==null&&t.memoizedState!==null||Ke,r=mn;var u=Ke;mn=o,(Ke=t)&&!u?fn(e,n,(n.subtreeFlags&8772)!==0):bn(e,n),mn=r,Ke=u}break;case 30:break;default:bn(e,n)}}function dm(e){var t=e.alternate;t!==null&&(e.alternate=null,dm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ul(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ne=null,gt=!1;function hn(e,t,n){for(n=n.child;n!==null;)gm(e,t,n),n=n.sibling}function gm(e,t,n){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(ys,n)}catch{}switch(n.tag){case 26:Ke||Qt(n,t),hn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ke||Qt(n,t);var o=Ne,r=gt;Un(n.type)&&(Ne=n.stateNode,gt=!1),hn(e,t,n),lo(n.stateNode),Ne=o,gt=r;break;case 5:Ke||Qt(n,t);case 6:if(o=Ne,r=gt,Ne=null,hn(e,t,n),Ne=o,gt=r,Ne!==null)if(gt)try{(Ne.nodeType===9?Ne.body:Ne.nodeName==="HTML"?Ne.ownerDocument.body:Ne).removeChild(n.stateNode)}catch(u){Te(n,t,u)}else try{Ne.removeChild(n.stateNode)}catch(u){Te(n,t,u)}break;case 18:Ne!==null&&(gt?(e=Ne,oh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),us(e)):oh(Ne,n.stateNode));break;case 4:o=Ne,r=gt,Ne=n.stateNode.containerInfo,gt=!0,hn(e,t,n),Ne=o,gt=r;break;case 0:case 11:case 14:case 15:Cn(2,n,t),Ke||Cn(4,n,t),hn(e,t,n);break;case 1:Ke||(Qt(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"&&im(n,t,o)),hn(e,t,n);break;case 21:hn(e,t,n);break;case 22:Ke=(o=Ke)||n.memoizedState!==null,hn(e,t,n),Ke=o;break;default:hn(e,t,n)}}function mm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{us(e)}catch(n){Te(t,t.return,n)}}}function hm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{us(e)}catch(n){Te(t,t.return,n)}}function U0(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new cm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new cm),t;default:throw Error(l(435,e.tag))}}function Mi(e,t){var n=U0(e);t.forEach(function(o){if(!n.has(o)){n.add(o);var r=J0.bind(null,e,o);o.then(r,r)}})}function mt(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var r=n[o],u=e,m=t,_=m;e:for(;_!==null;){switch(_.tag){case 27:if(Un(_.type)){Ne=_.stateNode,gt=!1;break e}break;case 5:Ne=_.stateNode,gt=!1;break e;case 3:case 4:Ne=_.stateNode.containerInfo,gt=!0;break e}_=_.return}if(Ne===null)throw Error(l(160));gm(u,m,r),Ne=null,gt=!1,u=r.alternate,u!==null&&(u.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)bm(t,e),t=t.sibling}var Bt=null;function bm(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:mt(t,e),ht(e),o&4&&(Cn(3,e,e.return),Js(3,e),Cn(5,e,e.return));break;case 1:mt(t,e),ht(e),o&512&&(Ke||n===null||Qt(n,n.return)),o&64&&mn&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?o:n.concat(o))));break;case 26:var r=Bt;if(mt(t,e),ht(e),o&512&&(Ke||n===null||Qt(n,n.return)),o&4){var u=n!==null?n.memoizedState:null;if(o=e.memoizedState,n===null)if(o===null)if(e.stateNode===null){e:{o=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(o){case"title":u=r.getElementsByTagName("title")[0],(!u||u[Ts]||u[We]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=r.createElement(o),r.head.insertBefore(u,r.querySelector("head > title"))),at(u,o,n),u[We]=e,Je(u),o=u;break e;case"link":var m=bh("link","href",r).get(o+(n.href||""));if(m){for(var _=0;_<m.length;_++)if(u=m[_],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){m.splice(_,1);break t}}u=r.createElement(o),at(u,o,n),r.head.appendChild(u);break;case"meta":if(m=bh("meta","content",r).get(o+(n.content||""))){for(_=0;_<m.length;_++)if(u=m[_],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){m.splice(_,1);break t}}u=r.createElement(o),at(u,o,n),r.head.appendChild(u);break;default:throw Error(l(468,o))}u[We]=e,Je(u),o=u}e.stateNode=o}else fh(r,e.type,e.stateNode);else e.stateNode=hh(r,o,e.memoizedProps);else u!==o?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,o===null?fh(r,e.type,e.stateNode):hh(r,o,e.memoizedProps)):o===null&&e.stateNode!==null&&uu(e,e.memoizedProps,n.memoizedProps)}break;case 27:mt(t,e),ht(e),o&512&&(Ke||n===null||Qt(n,n.return)),n!==null&&o&4&&uu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(mt(t,e),ht(e),o&512&&(Ke||n===null||Qt(n,n.return)),e.flags&32){r=e.stateNode;try{wa(r,"")}catch(W){Te(e,e.return,W)}}o&4&&e.stateNode!=null&&(r=e.memoizedProps,uu(e,r,n!==null?n.memoizedProps:r)),o&1024&&(du=!0);break;case 6:if(mt(t,e),ht(e),o&4){if(e.stateNode===null)throw Error(l(162));o=e.memoizedProps,n=e.stateNode;try{n.nodeValue=o}catch(W){Te(e,e.return,W)}}break;case 3:if(zi=null,r=Bt,Bt=Ri(t.containerInfo),mt(t,e),Bt=r,ht(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{us(t.containerInfo)}catch(W){Te(e,e.return,W)}du&&(du=!1,fm(e));break;case 4:o=Bt,Bt=Ri(e.stateNode.containerInfo),mt(t,e),ht(e),Bt=o;break;case 12:mt(t,e),ht(e);break;case 31:mt(t,e),ht(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Mi(e,o)));break;case 13:mt(t,e),ht(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ai=_t()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Mi(e,o)));break;case 22:r=e.memoizedState!==null;var y=n!==null&&n.memoizedState!==null,q=mn,R=Ke;if(mn=q||r,Ke=R||y,mt(t,e),Ke=R,mn=q,ht(e),o&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||y||mn||Ke||_a(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){y=n=t;try{if(u=y.stateNode,r)m=u.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{_=y.stateNode;var U=y.memoizedProps.style,w=U!=null&&U.hasOwnProperty("display")?U.display:null;_.style.display=w==null||typeof w=="boolean"?"":(""+w).trim()}}catch(W){Te(y,y.return,W)}}}else if(t.tag===6){if(n===null){y=t;try{y.stateNode.nodeValue=r?"":y.memoizedProps}catch(W){Te(y,y.return,W)}}}else if(t.tag===18){if(n===null){y=t;try{var N=y.stateNode;r?ih(N,!0):ih(y.stateNode,!1)}catch(W){Te(y,y.return,W)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(n=o.retryQueue,n!==null&&(o.retryQueue=null,Mi(e,n))));break;case 19:mt(t,e),ht(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Mi(e,o)));break;case 30:break;case 21:break;default:mt(t,e),ht(e)}}function ht(e){var t=e.flags;if(t&2){try{for(var n,o=e.return;o!==null;){if(rm(o)){n=o;break}o=o.return}if(n==null)throw Error(l(160));switch(n.tag){case 27:var r=n.stateNode,u=cu(e);vi(e,u,r);break;case 5:var m=n.stateNode;n.flags&32&&(wa(m,""),n.flags&=-33);var _=cu(e);vi(e,_,m);break;case 3:case 4:var y=n.stateNode.containerInfo,q=cu(e);pu(e,q,y);break;default:throw Error(l(161))}}catch(R){Te(e,e.return,R)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function fm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;fm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function bn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)pm(e,t.alternate,t),t=t.sibling}function _a(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Cn(4,t,t.return),_a(t);break;case 1:Qt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&im(t,t.return,n),_a(t);break;case 27:lo(t.stateNode);case 26:case 5:Qt(t,t.return),_a(t);break;case 22:t.memoizedState===null&&_a(t);break;case 30:_a(t);break;default:_a(t)}e=e.sibling}}function fn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,r=e,u=t,m=u.flags;switch(u.tag){case 0:case 11:case 15:fn(r,u,n),Js(4,u);break;case 1:if(fn(r,u,n),o=u,r=o.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(q){Te(o,o.return,q)}if(o=u,r=o.updateQueue,r!==null){var _=o.stateNode;try{var y=r.shared.hiddenCallbacks;if(y!==null)for(r.shared.hiddenCallbacks=null,r=0;r<y.length;r++)Zd(y[r],_)}catch(q){Te(o,o.return,q)}}n&&m&64&&om(u),$s(u,u.return);break;case 27:um(u);case 26:case 5:fn(r,u,n),n&&o===null&&m&4&&lm(u),$s(u,u.return);break;case 12:fn(r,u,n);break;case 31:fn(r,u,n),n&&m&4&&mm(r,u);break;case 13:fn(r,u,n),n&&m&4&&hm(r,u);break;case 22:u.memoizedState===null&&fn(r,u,n),$s(u,u.return);break;case 30:break;default:fn(r,u,n)}t=t.sibling}}function gu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Rs(n))}function mu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Rs(e))}function Yt(e,t,n,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)_m(e,t,n,o),t=t.sibling}function _m(e,t,n,o){var r=t.flags;switch(t.tag){case 0:case 11:case 15:Yt(e,t,n,o),r&2048&&Js(9,t);break;case 1:Yt(e,t,n,o);break;case 3:Yt(e,t,n,o),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Rs(e)));break;case 12:if(r&2048){Yt(e,t,n,o),e=t.stateNode;try{var u=t.memoizedProps,m=u.id,_=u.onPostCommit;typeof _=="function"&&_(m,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(y){Te(t,t.return,y)}}else Yt(e,t,n,o);break;case 31:Yt(e,t,n,o);break;case 13:Yt(e,t,n,o);break;case 23:break;case 22:u=t.stateNode,m=t.alternate,t.memoizedState!==null?u._visibility&2?Yt(e,t,n,o):Ws(e,t):u._visibility&2?Yt(e,t,n,o):(u._visibility|=2,$a(e,t,n,o,(t.subtreeFlags&10256)!==0||!1)),r&2048&&gu(m,t);break;case 24:Yt(e,t,n,o),r&2048&&mu(t.alternate,t);break;default:Yt(e,t,n,o)}}function $a(e,t,n,o,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,m=t,_=n,y=o,q=m.flags;switch(m.tag){case 0:case 11:case 15:$a(u,m,_,y,r),Js(8,m);break;case 23:break;case 22:var R=m.stateNode;m.memoizedState!==null?R._visibility&2?$a(u,m,_,y,r):Ws(u,m):(R._visibility|=2,$a(u,m,_,y,r)),r&&q&2048&&gu(m.alternate,m);break;case 24:$a(u,m,_,y,r),r&&q&2048&&mu(m.alternate,m);break;default:$a(u,m,_,y,r)}t=t.sibling}}function Ws(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,o=t,r=o.flags;switch(o.tag){case 22:Ws(n,o),r&2048&&gu(o.alternate,o);break;case 24:Ws(n,o),r&2048&&mu(o.alternate,o);break;default:Ws(n,o)}t=t.sibling}}var eo=8192;function Wa(e,t,n){if(e.subtreeFlags&eo)for(e=e.child;e!==null;)xm(e,t,n),e=e.sibling}function xm(e,t,n){switch(e.tag){case 26:Wa(e,t,n),e.flags&eo&&e.memoizedState!==null&&jx(n,Bt,e.memoizedState,e.memoizedProps);break;case 5:Wa(e,t,n);break;case 3:case 4:var o=Bt;Bt=Ri(e.stateNode.containerInfo),Wa(e,t,n),Bt=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=eo,eo=16777216,Wa(e,t,n),eo=o):Wa(e,t,n));break;default:Wa(e,t,n)}}function Gm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function to(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var o=t[n];$e=o,ym(o,e)}Gm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)km(e),e=e.sibling}function km(e){switch(e.tag){case 0:case 11:case 15:to(e),e.flags&2048&&Cn(9,e,e.return);break;case 3:to(e);break;case 12:to(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ti(e)):to(e);break;default:to(e)}}function Ti(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var o=t[n];$e=o,ym(o,e)}Gm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Cn(8,t,t.return),Ti(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ti(t));break;default:Ti(t)}e=e.sibling}}function ym(e,t){for(;$e!==null;){var n=$e;switch(n.tag){case 0:case 11:case 15:Cn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var o=n.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Rs(n.memoizedState.cache)}if(o=n.child,o!==null)o.return=n,$e=o;else e:for(n=e;$e!==null;){o=$e;var r=o.sibling,u=o.return;if(dm(o),o===n){$e=null;break e}if(r!==null){r.return=u,$e=r;break e}$e=u}}}var B0={getCacheForType:function(e){var t=tt(Ye),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return tt(Ye).controller.signal}},Y0=typeof WeakMap=="function"?WeakMap:Map,ye=0,Se=null,ge=null,be=0,Me=0,Tt=null,Dn=!1,es=!1,hu=!1,_n=0,He=0,Hn=0,xa=0,bu=0,At=0,ts=0,no=null,bt=null,fu=!1,Ai=0,vm=0,Ii=1/0,ji=null,Rn=null,Fe=0,On=null,ns=null,xn=0,_u=0,xu=null,Mm=null,ao=0,Gu=null;function It(){return(ye&2)!==0&&be!==0?be&-be:D.T!==null?Au():zp()}function Tm(){if(At===0)if((be&536870912)===0||xe){var e=Do;Do<<=1,(Do&3932160)===0&&(Do=262144),At=e}else At=536870912;return e=vt.current,e!==null&&(e.flags|=32),At}function ft(e,t,n){(e===Se&&(Me===2||Me===9)||e.cancelPendingCommit!==null)&&(as(e,0),zn(e,be,At,!1)),Ms(e,n),((ye&2)===0||e!==Se)&&(e===Se&&((ye&2)===0&&(xa|=n),He===4&&zn(e,be,At,!1)),Jt(e))}function Am(e,t,n){if((ye&6)!==0)throw Error(l(327));var o=!n&&(t&127)===0&&(t&e.expiredLanes)===0||vs(e,t),r=o?K0(e,t):yu(e,t,!0),u=o;do{if(r===0){es&&!o&&zn(e,t,0,!1);break}else{if(n=e.current.alternate,u&&!P0(n)){r=yu(e,t,!1),u=!1;continue}if(r===2){if(u=t,e.errorRecoveryDisabledLanes&u)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var _=e;r=no;var y=_.current.memoizedState.isDehydrated;if(y&&(as(_,m).flags|=256),m=yu(_,m,!1),m!==2){if(hu&&!y){_.errorRecoveryDisabledLanes|=u,xa|=u,r=4;break e}u=bt,bt=r,u!==null&&(bt===null?bt=u:bt.push.apply(bt,u))}r=m}if(u=!1,r!==2)continue}}if(r===1){as(e,0),zn(e,t,0,!0);break}e:{switch(o=e,u=r,u){case 0:case 1:throw Error(l(345));case 4:if((t&4194048)!==t)break;case 6:zn(o,t,At,!Dn);break e;case 2:bt=null;break;case 3:case 5:break;default:throw Error(l(329))}if((t&62914560)===t&&(r=Ai+300-_t(),10<r)){if(zn(o,t,At,!Dn),Ro(o,0,!0)!==0)break e;xn=t,o.timeoutHandle=ah(Im.bind(null,o,n,bt,ji,fu,t,At,xa,ts,Dn,u,"Throttled",-0,0),r);break e}Im(o,n,bt,ji,fu,t,At,xa,ts,Dn,u,null,-0,0)}}break}while(!0);Jt(e)}function Im(e,t,n,o,r,u,m,_,y,q,R,U,w,N){if(e.timeoutHandle=-1,U=t.subtreeFlags,U&8192||(U&16785408)===16785408){U={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:an},xm(t,u,U);var W=(u&62914560)===u?Ai-_t():(u&4194048)===u?vm-_t():0;if(W=Sx(U,W),W!==null){xn=u,e.cancelPendingCommit=W(Cm.bind(null,e,t,u,n,o,r,m,_,y,R,U,null,w,N)),zn(e,u,m,!q);return}}Cm(e,t,u,n,o,r,m,_,y)}function P0(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var o=0;o<n.length;o++){var r=n[o],u=r.getSnapshot;r=r.value;try{if(!kt(u(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function zn(e,t,n,o){t&=~bu,t&=~xa,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var r=t;0<r;){var u=31-Gt(r),m=1<<u;o[u]=-1,r&=~m}n!==0&&Hp(e,n,t)}function Si(){return(ye&6)===0?(so(0),!1):!0}function ku(){if(ge!==null){if(Me===0)var e=ge.return;else e=ge,rn=ca=null,Hr(e),Ka=null,zs=0,e=ge;for(;e!==null;)sm(e.alternate,e),e=e.return;ge=null}}function as(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,px(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),xn=0,ku(),Se=e,ge=n=on(e.current,null),be=t,Me=0,Tt=null,Dn=!1,es=vs(e,t),hu=!1,ts=At=bu=xa=Hn=He=0,bt=no=null,fu=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var r=31-Gt(o),u=1<<r;t|=e[r],o&=~u}return _n=t,Qo(),n}function jm(e,t){re=null,D.H=Zs,t===Xa||t===si?(t=Yd(),Me=3):t===Tr?(t=Yd(),Me=4):Me=t===Wr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Tt=t,ge===null&&(He=1,_i(e,Et(t,e.current)))}function Sm(){var e=vt.current;return e===null?!0:(be&4194048)===be?Ht===null:(be&62914560)===be||(be&536870912)!==0?e===Ht:!1}function Vm(){var e=D.H;return D.H=Zs,e===null?Zs:e}function qm(){var e=D.A;return D.A=B0,e}function Vi(){He=4,Dn||(be&4194048)!==be&&vt.current!==null||(es=!0),(Hn&134217727)===0&&(xa&134217727)===0||Se===null||zn(Se,be,At,!1)}function yu(e,t,n){var o=ye;ye|=2;var r=Vm(),u=qm();(Se!==e||be!==t)&&(ji=null,as(e,t)),t=!1;var m=He;e:do try{if(Me!==0&&ge!==null){var _=ge,y=Tt;switch(Me){case 8:ku(),m=6;break e;case 3:case 2:case 9:case 6:vt.current===null&&(t=!0);var q=Me;if(Me=0,Tt=null,ss(e,_,y,q),n&&es){m=0;break e}break;default:q=Me,Me=0,Tt=null,ss(e,_,y,q)}}X0(),m=He;break}catch(R){jm(e,R)}while(!0);return t&&e.shellSuspendCounter++,rn=ca=null,ye=o,D.H=r,D.A=u,ge===null&&(Se=null,be=0,Qo()),m}function X0(){for(;ge!==null;)wm(ge)}function K0(e,t){var n=ye;ye|=2;var o=Vm(),r=qm();Se!==e||be!==t?(ji=null,Ii=_t()+500,as(e,t)):es=vs(e,t);e:do try{if(Me!==0&&ge!==null){t=ge;var u=Tt;t:switch(Me){case 1:Me=0,Tt=null,ss(e,t,u,1);break;case 2:case 9:if(Ud(u)){Me=0,Tt=null,Em(t);break}t=function(){Me!==2&&Me!==9||Se!==e||(Me=7),Jt(e)},u.then(t,t);break e;case 3:Me=7;break e;case 4:Me=5;break e;case 7:Ud(u)?(Me=0,Tt=null,Em(t)):(Me=0,Tt=null,ss(e,t,u,7));break;case 5:var m=null;switch(ge.tag){case 26:m=ge.memoizedState;case 5:case 27:var _=ge;if(m?_h(m):_.stateNode.complete){Me=0,Tt=null;var y=_.sibling;if(y!==null)ge=y;else{var q=_.return;q!==null?(ge=q,qi(q)):ge=null}break t}}Me=0,Tt=null,ss(e,t,u,5);break;case 6:Me=0,Tt=null,ss(e,t,u,6);break;case 8:ku(),He=6;break e;default:throw Error(l(462))}}Z0();break}catch(R){jm(e,R)}while(!0);return rn=ca=null,D.H=o,D.A=r,ye=n,ge!==null?0:(Se=null,be=0,Qo(),He)}function Z0(){for(;ge!==null&&!f1();)wm(ge)}function wm(e){var t=nm(e.alternate,e,_n);e.memoizedProps=e.pendingProps,t===null?qi(e):ge=t}function Em(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Qg(n,t,t.pendingProps,t.type,void 0,be);break;case 11:t=Qg(n,t,t.pendingProps,t.type.render,t.ref,be);break;case 5:Hr(t);default:sm(n,t),t=ge=qd(t,_n),t=nm(n,t,_n)}e.memoizedProps=e.pendingProps,t===null?qi(e):ge=t}function ss(e,t,n,o){rn=ca=null,Hr(t),Ka=null,zs=0;var r=t.return;try{if(D0(e,r,t,n,be)){He=1,_i(e,Et(n,e.current)),ge=null;return}}catch(u){if(r!==null)throw ge=r,u;He=1,_i(e,Et(n,e.current)),ge=null;return}t.flags&32768?(xe||o===1?e=!0:es||(be&536870912)!==0?e=!1:(Dn=e=!0,(o===2||o===9||o===3||o===6)&&(o=vt.current,o!==null&&o.tag===13&&(o.flags|=16384))),Nm(t,e)):qi(t)}function qi(e){var t=e;do{if((t.flags&32768)!==0){Nm(t,Dn);return}e=t.return;var n=O0(t.alternate,t,_n);if(n!==null){ge=n;return}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);He===0&&(He=5)}function Nm(e,t){do{var n=z0(e.alternate,e);if(n!==null){n.flags&=32767,ge=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ge=e;return}ge=e=n}while(e!==null);He=6,ge=null}function Cm(e,t,n,o,r,u,m,_,y){e.cancelPendingCommit=null;do wi();while(Fe!==0);if((ye&6)!==0)throw Error(l(327));if(t!==null){if(t===e.current)throw Error(l(177));if(u=t.lanes|t.childLanes,u|=cr,I1(e,n,u,m,_,y),e===Se&&(ge=Se=null,be=0),ns=t,On=e,xn=n,_u=u,xu=r,Mm=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,$0(No,function(){return zm(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=D.T,D.T=null,r=Q.p,Q.p=2,m=ye,ye|=4;try{L0(e,t,n)}finally{ye=m,Q.p=r,D.T=o}}Fe=1,Dm(),Hm(),Rm()}}function Dm(){if(Fe===1){Fe=0;var e=On,t=ns,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=D.T,D.T=null;var o=Q.p;Q.p=2;var r=ye;ye|=4;try{bm(t,e);var u=Nu,m=yd(e.containerInfo),_=u.focusedElem,y=u.selectionRange;if(m!==_&&_&&_.ownerDocument&&kd(_.ownerDocument.documentElement,_)){if(y!==null&&or(_)){var q=y.start,R=y.end;if(R===void 0&&(R=q),"selectionStart"in _)_.selectionStart=q,_.selectionEnd=Math.min(R,_.value.length);else{var U=_.ownerDocument||document,w=U&&U.defaultView||window;if(w.getSelection){var N=w.getSelection(),W=_.textContent.length,se=Math.min(y.start,W),je=y.end===void 0?se:Math.min(y.end,W);!N.extend&&se>je&&(m=je,je=se,se=m);var j=Gd(_,se),T=Gd(_,je);if(j&&T&&(N.rangeCount!==1||N.anchorNode!==j.node||N.anchorOffset!==j.offset||N.focusNode!==T.node||N.focusOffset!==T.offset)){var V=U.createRange();V.setStart(j.node,j.offset),N.removeAllRanges(),se>je?(N.addRange(V),N.extend(T.node,T.offset)):(V.setEnd(T.node,T.offset),N.addRange(V))}}}}for(U=[],N=_;N=N.parentNode;)N.nodeType===1&&U.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof _.focus=="function"&&_.focus(),_=0;_<U.length;_++){var L=U[_];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}Yi=!!Eu,Nu=Eu=null}finally{ye=r,Q.p=o,D.T=n}}e.current=t,Fe=2}}function Hm(){if(Fe===2){Fe=0;var e=On,t=ns,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=D.T,D.T=null;var o=Q.p;Q.p=2;var r=ye;ye|=4;try{pm(e,t.alternate,t)}finally{ye=r,Q.p=o,D.T=n}}Fe=3}}function Rm(){if(Fe===4||Fe===3){Fe=0,_1();var e=On,t=ns,n=xn,o=Mm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Fe=5:(Fe=0,ns=On=null,Om(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(Rn=null),zl(n),t=t.stateNode,xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(ys,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=D.T,r=Q.p,Q.p=2,D.T=null;try{for(var u=e.onRecoverableError,m=0;m<o.length;m++){var _=o[m];u(_.value,{componentStack:_.stack})}}finally{D.T=t,Q.p=r}}(xn&3)!==0&&wi(),Jt(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===Gu?ao++:(ao=0,Gu=e):ao=0,so(0)}}function Om(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Rs(t)))}function wi(){return Dm(),Hm(),Rm(),zm()}function zm(){if(Fe!==5)return!1;var e=On,t=_u;_u=0;var n=zl(xn),o=D.T,r=Q.p;try{Q.p=32>n?32:n,D.T=null,n=xu,xu=null;var u=On,m=xn;if(Fe=0,ns=On=null,xn=0,(ye&6)!==0)throw Error(l(331));var _=ye;if(ye|=4,km(u.current),_m(u,u.current,m,n),ye=_,so(0,!1),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(ys,u)}catch{}return!0}finally{Q.p=r,D.T=o,Om(e,t)}}function Lm(e,t,n){t=Et(n,t),t=$r(e.stateNode,t,2),e=wn(e,t,2),e!==null&&(Ms(e,2),Jt(e))}function Te(e,t,n){if(e.tag===3)Lm(e,e,n);else for(;t!==null;){if(t.tag===3){Lm(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Rn===null||!Rn.has(o))){e=Et(n,e),n=Ug(2),o=wn(t,n,2),o!==null&&(Bg(n,o,t,e),Ms(o,2),Jt(o));break}}t=t.return}}function vu(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new Y0;var r=new Set;o.set(t,r)}else r=o.get(t),r===void 0&&(r=new Set,o.set(t,r));r.has(n)||(hu=!0,r.add(n),e=F0.bind(null,e,t,n),t.then(e,e))}function F0(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Se===e&&(be&n)===n&&(He===4||He===3&&(be&62914560)===be&&300>_t()-Ai?(ye&2)===0&&as(e,0):bu|=n,ts===be&&(ts=0)),Jt(e)}function Um(e,t){t===0&&(t=Dp()),e=la(e,t),e!==null&&(Ms(e,t),Jt(e))}function Q0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Um(e,n)}function J0(e,t){var n=0;switch(e.tag){case 31:case 13:var o=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(l(314))}o!==null&&o.delete(t),Um(e,n)}function $0(e,t){return Dl(e,t)}var Ei=null,os=null,Mu=!1,Ni=!1,Tu=!1,Ln=0;function Jt(e){e!==os&&e.next===null&&(os===null?Ei=os=e:os=os.next=e),Ni=!0,Mu||(Mu=!0,ex())}function so(e,t){if(!Tu&&Ni){Tu=!0;do for(var n=!1,o=Ei;o!==null;){if(e!==0){var r=o.pendingLanes;if(r===0)var u=0;else{var m=o.suspendedLanes,_=o.pingedLanes;u=(1<<31-Gt(42|e)+1)-1,u&=r&~(m&~_),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,Xm(o,u))}else u=be,u=Ro(o,o===Se?u:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(u&3)===0||vs(o,u)||(n=!0,Xm(o,u));o=o.next}while(n);Tu=!1}}function W0(){Bm()}function Bm(){Ni=Mu=!1;var e=0;Ln!==0&&cx()&&(e=Ln);for(var t=_t(),n=null,o=Ei;o!==null;){var r=o.next,u=Ym(o,t);u===0?(o.next=null,n===null?Ei=r:n.next=r,r===null&&(os=n)):(n=o,(e!==0||(u&3)!==0)&&(Ni=!0)),o=r}Fe!==0&&Fe!==5||so(e),Ln!==0&&(Ln=0)}function Ym(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,r=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var m=31-Gt(u),_=1<<m,y=r[m];y===-1?((_&n)===0||(_&o)!==0)&&(r[m]=A1(_,t)):y<=t&&(e.expiredLanes|=_),u&=~_}if(t=Se,n=be,n=Ro(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,n===0||e===t&&(Me===2||Me===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Hl(o),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||vs(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(o!==null&&Hl(o),zl(n)){case 2:case 8:n=Np;break;case 32:n=No;break;case 268435456:n=Cp;break;default:n=No}return o=Pm.bind(null,e),n=Dl(n,o),e.callbackPriority=t,e.callbackNode=n,t}return o!==null&&o!==null&&Hl(o),e.callbackPriority=2,e.callbackNode=null,2}function Pm(e,t){if(Fe!==0&&Fe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(wi()&&e.callbackNode!==n)return null;var o=be;return o=Ro(e,e===Se?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Am(e,o,t),Ym(e,_t()),e.callbackNode!=null&&e.callbackNode===n?Pm.bind(null,e):null)}function Xm(e,t){if(wi())return null;Am(e,t,!0)}function ex(){dx(function(){(ye&6)!==0?Dl(Ep,W0):Bm()})}function Au(){if(Ln===0){var e=Ya;e===0&&(e=Co,Co<<=1,(Co&261888)===0&&(Co=256)),Ln=e}return Ln}function Km(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Uo(""+e)}function Zm(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function tx(e,t,n,o,r){if(t==="submit"&&n&&n.stateNode===r){var u=Km((r[pt]||null).action),m=o.submitter;m&&(t=(t=m[pt]||null)?Km(t.formAction):m.getAttribute("formAction"),t!==null&&(u=t,m=null));var _=new Xo("action","action",null,o,r);e.push({event:_,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ln!==0){var y=m?Zm(r,m):new FormData(r);Xr(n,{pending:!0,data:y,method:r.method,action:u},null,y)}}else typeof u=="function"&&(_.preventDefault(),y=m?Zm(r,m):new FormData(r),Xr(n,{pending:!0,data:y,method:r.method,action:u},u,y))},currentTarget:r}]})}}for(var Iu=0;Iu<ur.length;Iu++){var ju=ur[Iu],nx=ju.toLowerCase(),ax=ju[0].toUpperCase()+ju.slice(1);Ut(nx,"on"+ax)}Ut(Td,"onAnimationEnd"),Ut(Ad,"onAnimationIteration"),Ut(Id,"onAnimationStart"),Ut("dblclick","onDoubleClick"),Ut("focusin","onFocus"),Ut("focusout","onBlur"),Ut(x0,"onTransitionRun"),Ut(G0,"onTransitionStart"),Ut(k0,"onTransitionCancel"),Ut(jd,"onTransitionEnd"),Va("onMouseEnter",["mouseout","mouseover"]),Va("onMouseLeave",["mouseout","mouseover"]),Va("onPointerEnter",["pointerout","pointerover"]),Va("onPointerLeave",["pointerout","pointerover"]),aa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),aa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),aa("onBeforeInput",["compositionend","keypress","textInput","paste"]),aa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),aa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),aa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(oo));function Fm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],r=o.event;o=o.listeners;e:{var u=void 0;if(t)for(var m=o.length-1;0<=m;m--){var _=o[m],y=_.instance,q=_.currentTarget;if(_=_.listener,y!==u&&r.isPropagationStopped())break e;u=_,r.currentTarget=q;try{u(r)}catch(R){Fo(R)}r.currentTarget=null,u=y}else for(m=0;m<o.length;m++){if(_=o[m],y=_.instance,q=_.currentTarget,_=_.listener,y!==u&&r.isPropagationStopped())break e;u=_,r.currentTarget=q;try{u(r)}catch(R){Fo(R)}r.currentTarget=null,u=y}}}}function me(e,t){var n=t[Ll];n===void 0&&(n=t[Ll]=new Set);var o=e+"__bubble";n.has(o)||(Qm(t,e,2,!1),n.add(o))}function Su(e,t,n){var o=0;t&&(o|=4),Qm(n,e,o,t)}var Ci="_reactListening"+Math.random().toString(36).slice(2);function Vu(e){if(!e[Ci]){e[Ci]=!0,Bp.forEach(function(n){n!=="selectionchange"&&(sx.has(n)||Su(n,!1,e),Su(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ci]||(t[Ci]=!0,Su("selectionchange",!1,t))}}function Qm(e,t,n,o){switch(Th(t)){case 2:var r=wx;break;case 8:r=Ex;break;default:r=Pu}n=r.bind(null,t,n,e),r=void 0,!Ql||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),o?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function qu(e,t,n,o,r){var u=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var m=o.tag;if(m===3||m===4){var _=o.stateNode.containerInfo;if(_===r)break;if(m===4)for(m=o.return;m!==null;){var y=m.tag;if((y===3||y===4)&&m.stateNode.containerInfo===r)return;m=m.return}for(;_!==null;){if(m=Ia(_),m===null)return;if(y=m.tag,y===5||y===6||y===26||y===27){o=u=m;continue e}_=_.parentNode}}o=o.return}td(function(){var q=u,R=Zl(n),U=[];e:{var w=Sd.get(e);if(w!==void 0){var N=Xo,W=e;switch(e){case"keypress":if(Yo(n)===0)break e;case"keydown":case"keyup":N=J1;break;case"focusin":W="focus",N=er;break;case"focusout":W="blur",N=er;break;case"beforeblur":case"afterblur":N=er;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=sd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=O1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=e0;break;case Td:case Ad:case Id:N=U1;break;case jd:N=n0;break;case"scroll":case"scrollend":N=H1;break;case"wheel":N=s0;break;case"copy":case"cut":case"paste":N=Y1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=id;break;case"toggle":case"beforetoggle":N=i0}var se=(t&4)!==0,je=!se&&(e==="scroll"||e==="scrollend"),j=se?w!==null?w+"Capture":null:w;se=[];for(var T=q,V;T!==null;){var L=T;if(V=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||V===null||j===null||(L=Is(T,j),L!=null&&se.push(io(T,L,V))),je)break;T=T.return}0<se.length&&(w=new N(w,W,null,n,R),U.push({event:w,listeners:se}))}}if((t&7)===0){e:{if(w=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",w&&n!==Kl&&(W=n.relatedTarget||n.fromElement)&&(Ia(W)||W[Aa]))break e;if((N||w)&&(w=R.window===R?R:(w=R.ownerDocument)?w.defaultView||w.parentWindow:window,N?(W=n.relatedTarget||n.toElement,N=q,W=W?Ia(W):null,W!==null&&(je=g(W),se=W.tag,W!==je||se!==5&&se!==27&&se!==6)&&(W=null)):(N=null,W=q),N!==W)){if(se=sd,L="onMouseLeave",j="onMouseEnter",T="mouse",(e==="pointerout"||e==="pointerover")&&(se=id,L="onPointerLeave",j="onPointerEnter",T="pointer"),je=N==null?w:As(N),V=W==null?w:As(W),w=new se(L,T+"leave",N,n,R),w.target=je,w.relatedTarget=V,L=null,Ia(R)===q&&(se=new se(j,T+"enter",W,n,R),se.target=V,se.relatedTarget=je,L=se),je=L,N&&W)t:{for(se=ox,j=N,T=W,V=0,L=j;L;L=se(L))V++;L=0;for(var ae=T;ae;ae=se(ae))L++;for(;0<V-L;)j=se(j),V--;for(;0<L-V;)T=se(T),L--;for(;V--;){if(j===T||T!==null&&j===T.alternate){se=j;break t}j=se(j),T=se(T)}se=null}else se=null;N!==null&&Jm(U,w,N,se,!1),W!==null&&je!==null&&Jm(U,je,W,se,!0)}}e:{if(w=q?As(q):window,N=w.nodeName&&w.nodeName.toLowerCase(),N==="select"||N==="input"&&w.type==="file")var Ge=md;else if(dd(w))if(hd)Ge=b0;else{Ge=m0;var ne=g0}else N=w.nodeName,!N||N.toLowerCase()!=="input"||w.type!=="checkbox"&&w.type!=="radio"?q&&Xl(q.elementType)&&(Ge=md):Ge=h0;if(Ge&&(Ge=Ge(e,q))){gd(U,Ge,n,R);break e}ne&&ne(e,w,q),e==="focusout"&&q&&w.type==="number"&&q.memoizedProps.value!=null&&Pl(w,"number",w.value)}switch(ne=q?As(q):window,e){case"focusin":(dd(ne)||ne.contentEditable==="true")&&(Da=ne,ir=q,Cs=null);break;case"focusout":Cs=ir=Da=null;break;case"mousedown":lr=!0;break;case"contextmenu":case"mouseup":case"dragend":lr=!1,vd(U,n,R);break;case"selectionchange":if(_0)break;case"keydown":case"keyup":vd(U,n,R)}var ce;if(nr)e:{switch(e){case"compositionstart":var fe="onCompositionStart";break e;case"compositionend":fe="onCompositionEnd";break e;case"compositionupdate":fe="onCompositionUpdate";break e}fe=void 0}else Ca?cd(e,n)&&(fe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(fe="onCompositionStart");fe&&(ld&&n.locale!=="ko"&&(Ca||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&Ca&&(ce=nd()):(Tn=R,Jl="value"in Tn?Tn.value:Tn.textContent,Ca=!0)),ne=Di(q,fe),0<ne.length&&(fe=new od(fe,e,null,n,R),U.push({event:fe,listeners:ne}),ce?fe.data=ce:(ce=pd(n),ce!==null&&(fe.data=ce)))),(ce=r0?u0(e,n):c0(e,n))&&(fe=Di(q,"onBeforeInput"),0<fe.length&&(ne=new od("onBeforeInput","beforeinput",null,n,R),U.push({event:ne,listeners:fe}),ne.data=ce)),tx(U,e,q,n,R)}Fm(U,t)})}function io(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Di(e,t){for(var n=t+"Capture",o=[];e!==null;){var r=e,u=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||u===null||(r=Is(e,n),r!=null&&o.unshift(io(e,r,u)),r=Is(e,t),r!=null&&o.push(io(e,r,u))),e.tag===3)return o;e=e.return}return[]}function ox(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Jm(e,t,n,o,r){for(var u=t._reactName,m=[];n!==null&&n!==o;){var _=n,y=_.alternate,q=_.stateNode;if(_=_.tag,y!==null&&y===o)break;_!==5&&_!==26&&_!==27||q===null||(y=q,r?(q=Is(n,u),q!=null&&m.unshift(io(n,q,y))):r||(q=Is(n,u),q!=null&&m.push(io(n,q,y)))),n=n.return}m.length!==0&&e.push({event:t,listeners:m})}var ix=/\r\n?/g,lx=/\u0000|\uFFFD/g;function $m(e){return(typeof e=="string"?e:""+e).replace(ix,`
`).replace(lx,"")}function Wm(e,t){return t=$m(t),$m(e)===t}function Ie(e,t,n,o,r,u){switch(n){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||wa(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&wa(e,""+o);break;case"className":zo(e,"class",o);break;case"tabIndex":zo(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":zo(e,n,o);break;case"style":Wp(e,o,u);break;case"data":if(t!=="object"){zo(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(n);break}o=Uo(""+o),e.setAttribute(n,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(t!=="input"&&Ie(e,t,"name",r.name,r,null),Ie(e,t,"formEncType",r.formEncType,r,null),Ie(e,t,"formMethod",r.formMethod,r,null),Ie(e,t,"formTarget",r.formTarget,r,null)):(Ie(e,t,"encType",r.encType,r,null),Ie(e,t,"method",r.method,r,null),Ie(e,t,"target",r.target,r,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(n);break}o=Uo(""+o),e.setAttribute(n,o);break;case"onClick":o!=null&&(e.onclick=an);break;case"onScroll":o!=null&&me("scroll",e);break;case"onScrollEnd":o!=null&&me("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(l(61));if(n=o.__html,n!=null){if(r.children!=null)throw Error(l(60));e.innerHTML=n}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}n=Uo(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(n,""+o):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":o===!0?e.setAttribute(n,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(n,o):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(n,o):e.removeAttribute(n);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(n):e.setAttribute(n,o);break;case"popover":me("beforetoggle",e),me("toggle",e),Oo(e,"popover",o);break;case"xlinkActuate":nn(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":nn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":nn(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":nn(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":nn(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":nn(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":nn(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":nn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":nn(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Oo(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=C1.get(n)||n,Oo(e,n,o))}}function wu(e,t,n,o,r,u){switch(n){case"style":Wp(e,o,u);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(l(61));if(n=o.__html,n!=null){if(r.children!=null)throw Error(l(60));e.innerHTML=n}}break;case"children":typeof o=="string"?wa(e,o):(typeof o=="number"||typeof o=="bigint")&&wa(e,""+o);break;case"onScroll":o!=null&&me("scroll",e);break;case"onScrollEnd":o!=null&&me("scrollend",e);break;case"onClick":o!=null&&(e.onclick=an);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Yp.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),u=e[pt]||null,u=u!=null?u[n]:null,typeof u=="function"&&e.removeEventListener(t,u,r),typeof o=="function")){typeof u!="function"&&u!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,o,r);break e}n in e?e[n]=o:o===!0?e.setAttribute(n,""):Oo(e,n,o)}}}function at(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",e),me("load",e);var o=!1,r=!1,u;for(u in n)if(n.hasOwnProperty(u)){var m=n[u];if(m!=null)switch(u){case"src":o=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Ie(e,t,u,m,n,null)}}r&&Ie(e,t,"srcSet",n.srcSet,n,null),o&&Ie(e,t,"src",n.src,n,null);return;case"input":me("invalid",e);var _=u=m=r=null,y=null,q=null;for(o in n)if(n.hasOwnProperty(o)){var R=n[o];if(R!=null)switch(o){case"name":r=R;break;case"type":m=R;break;case"checked":y=R;break;case"defaultChecked":q=R;break;case"value":u=R;break;case"defaultValue":_=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(l(137,t));break;default:Ie(e,t,o,R,n,null)}}Fp(e,u,_,y,q,m,r,!1);return;case"select":me("invalid",e),o=m=u=null;for(r in n)if(n.hasOwnProperty(r)&&(_=n[r],_!=null))switch(r){case"value":u=_;break;case"defaultValue":m=_;break;case"multiple":o=_;default:Ie(e,t,r,_,n,null)}t=u,n=m,e.multiple=!!o,t!=null?qa(e,!!o,t,!1):n!=null&&qa(e,!!o,n,!0);return;case"textarea":me("invalid",e),u=r=o=null;for(m in n)if(n.hasOwnProperty(m)&&(_=n[m],_!=null))switch(m){case"value":o=_;break;case"defaultValue":r=_;break;case"children":u=_;break;case"dangerouslySetInnerHTML":if(_!=null)throw Error(l(91));break;default:Ie(e,t,m,_,n,null)}Jp(e,o,r,u);return;case"option":for(y in n)if(n.hasOwnProperty(y)&&(o=n[y],o!=null))switch(y){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ie(e,t,y,o,n,null)}return;case"dialog":me("beforetoggle",e),me("toggle",e),me("cancel",e),me("close",e);break;case"iframe":case"object":me("load",e);break;case"video":case"audio":for(o=0;o<oo.length;o++)me(oo[o],e);break;case"image":me("error",e),me("load",e);break;case"details":me("toggle",e);break;case"embed":case"source":case"link":me("error",e),me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in n)if(n.hasOwnProperty(q)&&(o=n[q],o!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Ie(e,t,q,o,n,null)}return;default:if(Xl(t)){for(R in n)n.hasOwnProperty(R)&&(o=n[R],o!==void 0&&wu(e,t,R,o,n,void 0));return}}for(_ in n)n.hasOwnProperty(_)&&(o=n[_],o!=null&&Ie(e,t,_,o,n,null))}function rx(e,t,n,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,u=null,m=null,_=null,y=null,q=null,R=null;for(N in n){var U=n[N];if(n.hasOwnProperty(N)&&U!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":y=U;default:o.hasOwnProperty(N)||Ie(e,t,N,null,o,U)}}for(var w in o){var N=o[w];if(U=n[w],o.hasOwnProperty(w)&&(N!=null||U!=null))switch(w){case"type":u=N;break;case"name":r=N;break;case"checked":q=N;break;case"defaultChecked":R=N;break;case"value":m=N;break;case"defaultValue":_=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(l(137,t));break;default:N!==U&&Ie(e,t,w,N,o,U)}}Yl(e,m,_,y,q,R,u,r);return;case"select":N=m=_=w=null;for(u in n)if(y=n[u],n.hasOwnProperty(u)&&y!=null)switch(u){case"value":break;case"multiple":N=y;default:o.hasOwnProperty(u)||Ie(e,t,u,null,o,y)}for(r in o)if(u=o[r],y=n[r],o.hasOwnProperty(r)&&(u!=null||y!=null))switch(r){case"value":w=u;break;case"defaultValue":_=u;break;case"multiple":m=u;default:u!==y&&Ie(e,t,r,u,o,y)}t=_,n=m,o=N,w!=null?qa(e,!!n,w,!1):!!o!=!!n&&(t!=null?qa(e,!!n,t,!0):qa(e,!!n,n?[]:"",!1));return;case"textarea":N=w=null;for(_ in n)if(r=n[_],n.hasOwnProperty(_)&&r!=null&&!o.hasOwnProperty(_))switch(_){case"value":break;case"children":break;default:Ie(e,t,_,null,o,r)}for(m in o)if(r=o[m],u=n[m],o.hasOwnProperty(m)&&(r!=null||u!=null))switch(m){case"value":w=r;break;case"defaultValue":N=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(l(91));break;default:r!==u&&Ie(e,t,m,r,o,u)}Qp(e,w,N);return;case"option":for(var W in n)if(w=n[W],n.hasOwnProperty(W)&&w!=null&&!o.hasOwnProperty(W))switch(W){case"selected":e.selected=!1;break;default:Ie(e,t,W,null,o,w)}for(y in o)if(w=o[y],N=n[y],o.hasOwnProperty(y)&&w!==N&&(w!=null||N!=null))switch(y){case"selected":e.selected=w&&typeof w!="function"&&typeof w!="symbol";break;default:Ie(e,t,y,w,o,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in n)w=n[se],n.hasOwnProperty(se)&&w!=null&&!o.hasOwnProperty(se)&&Ie(e,t,se,null,o,w);for(q in o)if(w=o[q],N=n[q],o.hasOwnProperty(q)&&w!==N&&(w!=null||N!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(l(137,t));break;default:Ie(e,t,q,w,o,N)}return;default:if(Xl(t)){for(var je in n)w=n[je],n.hasOwnProperty(je)&&w!==void 0&&!o.hasOwnProperty(je)&&wu(e,t,je,void 0,o,w);for(R in o)w=o[R],N=n[R],!o.hasOwnProperty(R)||w===N||w===void 0&&N===void 0||wu(e,t,R,w,o,N);return}}for(var j in n)w=n[j],n.hasOwnProperty(j)&&w!=null&&!o.hasOwnProperty(j)&&Ie(e,t,j,null,o,w);for(U in o)w=o[U],N=n[U],!o.hasOwnProperty(U)||w===N||w==null&&N==null||Ie(e,t,U,w,o,N)}function eh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ux(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),o=0;o<n.length;o++){var r=n[o],u=r.transferSize,m=r.initiatorType,_=r.duration;if(u&&_&&eh(m)){for(m=0,_=r.responseEnd,o+=1;o<n.length;o++){var y=n[o],q=y.startTime;if(q>_)break;var R=y.transferSize,U=y.initiatorType;R&&eh(U)&&(y=y.responseEnd,m+=R*(y<_?1:(_-q)/(y-q)))}if(--o,t+=8*(u+m)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Eu=null,Nu=null;function Hi(e){return e.nodeType===9?e:e.ownerDocument}function th(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function nh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Cu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Du=null;function cx(){var e=window.event;return e&&e.type==="popstate"?e===Du?!1:(Du=e,!0):(Du=null,!1)}var ah=typeof setTimeout=="function"?setTimeout:void 0,px=typeof clearTimeout=="function"?clearTimeout:void 0,sh=typeof Promise=="function"?Promise:void 0,dx=typeof queueMicrotask=="function"?queueMicrotask:typeof sh<"u"?function(e){return sh.resolve(null).then(e).catch(gx)}:ah;function gx(e){setTimeout(function(){throw e})}function Un(e){return e==="head"}function oh(e,t){var n=t,o=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(o===0){e.removeChild(r),us(t);return}o--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")o++;else if(n==="html")lo(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,lo(n);for(var u=n.firstChild;u;){var m=u.nextSibling,_=u.nodeName;u[Ts]||_==="SCRIPT"||_==="STYLE"||_==="LINK"&&u.rel.toLowerCase()==="stylesheet"||n.removeChild(u),u=m}}else n==="body"&&lo(e.ownerDocument.body);n=r}while(n);us(t)}function ih(e,t){var n=e;e=0;do{var o=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=o}while(n)}function Hu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Hu(n),Ul(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function mx(e,t,n,o){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ts])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Rt(e.nextSibling),e===null)break}return null}function hx(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Rt(e.nextSibling),e===null))return null;return e}function lh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Rt(e.nextSibling),e===null))return null;return e}function Ru(e){return e.data==="$?"||e.data==="$~"}function Ou(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function bx(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var o=function(){t(),n.removeEventListener("DOMContentLoaded",o)};n.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Rt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var zu=null;function rh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Rt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function uh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function ch(e,t,n){switch(t=Hi(n),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function lo(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ul(e)}var Ot=new Map,ph=new Set;function Ri(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Gn=Q.d;Q.d={f:fx,r:_x,D:xx,C:Gx,L:kx,m:yx,X:Mx,S:vx,M:Tx};function fx(){var e=Gn.f(),t=Si();return e||t}function _x(e){var t=ja(e);t!==null&&t.tag===5&&t.type==="form"?jg(t):Gn.r(e)}var is=typeof document>"u"?null:document;function dh(e,t,n){var o=is;if(o&&typeof t=="string"&&t){var r=qt(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),ph.has(r)||(ph.add(r),e={rel:e,crossOrigin:n,href:t},o.querySelector(r)===null&&(t=o.createElement("link"),at(t,"link",e),Je(t),o.head.appendChild(t)))}}function xx(e){Gn.D(e),dh("dns-prefetch",e,null)}function Gx(e,t){Gn.C(e,t),dh("preconnect",e,t)}function kx(e,t,n){Gn.L(e,t,n);var o=is;if(o&&e&&t){var r='link[rel="preload"][as="'+qt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+qt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+qt(n.imageSizes)+'"]')):r+='[href="'+qt(e)+'"]';var u=r;switch(t){case"style":u=ls(e);break;case"script":u=rs(e)}Ot.has(u)||(e=G({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Ot.set(u,e),o.querySelector(r)!==null||t==="style"&&o.querySelector(ro(u))||t==="script"&&o.querySelector(uo(u))||(t=o.createElement("link"),at(t,"link",e),Je(t),o.head.appendChild(t)))}}function yx(e,t){Gn.m(e,t);var n=is;if(n&&e){var o=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+qt(o)+'"][href="'+qt(e)+'"]',u=r;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=rs(e)}if(!Ot.has(u)&&(e=G({rel:"modulepreload",href:e},t),Ot.set(u,e),n.querySelector(r)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(uo(u)))return}o=n.createElement("link"),at(o,"link",e),Je(o),n.head.appendChild(o)}}}function vx(e,t,n){Gn.S(e,t,n);var o=is;if(o&&e){var r=Sa(o).hoistableStyles,u=ls(e);t=t||"default";var m=r.get(u);if(!m){var _={loading:0,preload:null};if(m=o.querySelector(ro(u)))_.loading=5;else{e=G({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Ot.get(u))&&Lu(e,n);var y=m=o.createElement("link");Je(y),at(y,"link",e),y._p=new Promise(function(q,R){y.onload=q,y.onerror=R}),y.addEventListener("load",function(){_.loading|=1}),y.addEventListener("error",function(){_.loading|=2}),_.loading|=4,Oi(m,t,o)}m={type:"stylesheet",instance:m,count:1,state:_},r.set(u,m)}}}function Mx(e,t){Gn.X(e,t);var n=is;if(n&&e){var o=Sa(n).hoistableScripts,r=rs(e),u=o.get(r);u||(u=n.querySelector(uo(r)),u||(e=G({src:e,async:!0},t),(t=Ot.get(r))&&Uu(e,t),u=n.createElement("script"),Je(u),at(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(r,u))}}function Tx(e,t){Gn.M(e,t);var n=is;if(n&&e){var o=Sa(n).hoistableScripts,r=rs(e),u=o.get(r);u||(u=n.querySelector(uo(r)),u||(e=G({src:e,async:!0,type:"module"},t),(t=Ot.get(r))&&Uu(e,t),u=n.createElement("script"),Je(u),at(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(r,u))}}function gh(e,t,n,o){var r=(r=de.current)?Ri(r):null;if(!r)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ls(n.href),n=Sa(r).hoistableStyles,o=n.get(t),o||(o={type:"style",instance:null,count:0,state:null},n.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ls(n.href);var u=Sa(r).hoistableStyles,m=u.get(e);if(m||(r=r.ownerDocument||r,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,m),(u=r.querySelector(ro(e)))&&!u._p&&(m.instance=u,m.state.loading=5),Ot.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ot.set(e,n),u||Ax(r,e,n,m.state))),t&&o===null)throw Error(l(528,""));return m}if(t&&o!==null)throw Error(l(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=rs(n),n=Sa(r).hoistableScripts,o=n.get(t),o||(o={type:"script",instance:null,count:0,state:null},n.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function ls(e){return'href="'+qt(e)+'"'}function ro(e){return'link[rel="stylesheet"]['+e+"]"}function mh(e){return G({},e,{"data-precedence":e.precedence,precedence:null})}function Ax(e,t,n,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),at(t,"link",n),Je(t),e.head.appendChild(t))}function rs(e){return'[src="'+qt(e)+'"]'}function uo(e){return"script[async]"+e}function hh(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+qt(n.href)+'"]');if(o)return t.instance=o,Je(o),o;var r=G({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Je(o),at(o,"style",r),Oi(o,n.precedence,e),t.instance=o;case"stylesheet":r=ls(n.href);var u=e.querySelector(ro(r));if(u)return t.state.loading|=4,t.instance=u,Je(u),u;o=mh(n),(r=Ot.get(r))&&Lu(o,r),u=(e.ownerDocument||e).createElement("link"),Je(u);var m=u;return m._p=new Promise(function(_,y){m.onload=_,m.onerror=y}),at(u,"link",o),t.state.loading|=4,Oi(u,n.precedence,e),t.instance=u;case"script":return u=rs(n.src),(r=e.querySelector(uo(u)))?(t.instance=r,Je(r),r):(o=n,(r=Ot.get(u))&&(o=G({},n),Uu(o,r)),e=e.ownerDocument||e,r=e.createElement("script"),Je(r),at(r,"link",o),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,Oi(o,n.precedence,e));return t.instance}function Oi(e,t,n){for(var o=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=o.length?o[o.length-1]:null,u=r,m=0;m<o.length;m++){var _=o[m];if(_.dataset.precedence===t)u=_;else if(u!==r)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Lu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Uu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var zi=null;function bh(e,t,n){if(zi===null){var o=new Map,r=zi=new Map;r.set(n,o)}else r=zi,o=r.get(n),o||(o=new Map,r.set(n,o));if(o.has(e))return o;for(o.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var u=n[r];if(!(u[Ts]||u[We]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var m=u.getAttribute(t)||"";m=e+m;var _=o.get(m);_?_.push(u):o.set(m,[u])}}return o}function fh(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Ix(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function _h(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function jx(e,t,n,o){if(n.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=ls(o.href),u=t.querySelector(ro(r));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Li.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=u,Je(u);return}u=t.ownerDocument||t,o=mh(o),(r=Ot.get(r))&&Lu(o,r),u=u.createElement("link"),Je(u);var m=u;m._p=new Promise(function(_,y){m.onload=_,m.onerror=y}),at(u,"link",o),n.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Li.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Bu=0;function Sx(e,t){return e.stylesheets&&e.count===0&&Bi(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var o=setTimeout(function(){if(e.stylesheets&&Bi(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&Bu===0&&(Bu=62500*ux());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Bi(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Bu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(r)}}:null}function Li(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Bi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ui=null;function Bi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ui=new Map,t.forEach(Vx,e),Ui=null,Li.call(e))}function Vx(e,t){if(!(t.state.loading&4)){var n=Ui.get(e);if(n)var o=n.get(null);else{n=new Map,Ui.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<r.length;u++){var m=r[u];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(n.set(m.dataset.precedence,m),o=m)}o&&n.set(null,o)}r=t.instance,m=r.getAttribute("data-precedence"),u=n.get(m)||o,u===o&&n.set(null,r),n.set(m,r),this.count++,o=Li.bind(this),r.addEventListener("load",o),r.addEventListener("error",o),u?u.parentNode.insertBefore(r,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var co={$$typeof:O,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function qx(e,t,n,o,r,u,m,_,y){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rl(0),this.hiddenUpdates=Rl(null),this.identifierPrefix=o,this.onUncaughtError=r,this.onCaughtError=u,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=y,this.incompleteTransitions=new Map}function xh(e,t,n,o,r,u,m,_,y,q,R,U){return e=new qx(e,t,n,m,y,q,R,U,_),t=1,u===!0&&(t|=24),u=yt(3,null,null,t),e.current=u,u.stateNode=e,t=yr(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:o,isDehydrated:n,cache:t},Ar(u),e}function Gh(e){return e?(e=Oa,e):Oa}function kh(e,t,n,o,r,u){r=Gh(r),o.context===null?o.context=r:o.pendingContext=r,o=qn(t),o.payload={element:n},u=u===void 0?null:u,u!==null&&(o.callback=u),n=wn(e,o,t),n!==null&&(ft(n,e,t),Us(n,e,t))}function yh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Yu(e,t){yh(e,t),(e=e.alternate)&&yh(e,t)}function vh(e){if(e.tag===13||e.tag===31){var t=la(e,67108864);t!==null&&ft(t,e,67108864),Yu(e,67108864)}}function Mh(e){if(e.tag===13||e.tag===31){var t=It();t=Ol(t);var n=la(e,t);n!==null&&ft(n,e,t),Yu(e,t)}}var Yi=!0;function wx(e,t,n,o){var r=D.T;D.T=null;var u=Q.p;try{Q.p=2,Pu(e,t,n,o)}finally{Q.p=u,D.T=r}}function Ex(e,t,n,o){var r=D.T;D.T=null;var u=Q.p;try{Q.p=8,Pu(e,t,n,o)}finally{Q.p=u,D.T=r}}function Pu(e,t,n,o){if(Yi){var r=Xu(o);if(r===null)qu(e,t,o,Pi,n),Ah(e,o);else if(Cx(r,e,t,n,o))o.stopPropagation();else if(Ah(e,o),t&4&&-1<Nx.indexOf(e)){for(;r!==null;){var u=ja(r);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var m=na(u.pendingLanes);if(m!==0){var _=u;for(_.pendingLanes|=2,_.entangledLanes|=2;m;){var y=1<<31-Gt(m);_.entanglements[1]|=y,m&=~y}Jt(u),(ye&6)===0&&(Ii=_t()+500,so(0))}}break;case 31:case 13:_=la(u,2),_!==null&&ft(_,u,2),Si(),Yu(u,2)}if(u=Xu(o),u===null&&qu(e,t,o,Pi,n),u===r)break;r=u}r!==null&&o.stopPropagation()}else qu(e,t,o,null,n)}}function Xu(e){return e=Zl(e),Ku(e)}var Pi=null;function Ku(e){if(Pi=null,e=Ia(e),e!==null){var t=g(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=d(t),e!==null)return e;e=null}else if(n===31){if(e=h(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Pi=e,null}function Th(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(x1()){case Ep:return 2;case Np:return 8;case No:case G1:return 32;case Cp:return 268435456;default:return 32}default:return 32}}var Zu=!1,Bn=null,Yn=null,Pn=null,po=new Map,go=new Map,Xn=[],Nx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ah(e,t){switch(e){case"focusin":case"focusout":Bn=null;break;case"dragenter":case"dragleave":Yn=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":po.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":go.delete(t.pointerId)}}function mo(e,t,n,o,r,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:u,targetContainers:[r]},t!==null&&(t=ja(t),t!==null&&vh(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function Cx(e,t,n,o,r){switch(t){case"focusin":return Bn=mo(Bn,e,t,n,o,r),!0;case"dragenter":return Yn=mo(Yn,e,t,n,o,r),!0;case"mouseover":return Pn=mo(Pn,e,t,n,o,r),!0;case"pointerover":var u=r.pointerId;return po.set(u,mo(po.get(u)||null,e,t,n,o,r)),!0;case"gotpointercapture":return u=r.pointerId,go.set(u,mo(go.get(u)||null,e,t,n,o,r)),!0}return!1}function Ih(e){var t=Ia(e.target);if(t!==null){var n=g(t);if(n!==null){if(t=n.tag,t===13){if(t=d(n),t!==null){e.blockedOn=t,Lp(e.priority,function(){Mh(n)});return}}else if(t===31){if(t=h(n),t!==null){e.blockedOn=t,Lp(e.priority,function(){Mh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Xu(e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);Kl=o,n.target.dispatchEvent(o),Kl=null}else return t=ja(n),t!==null&&vh(t),e.blockedOn=n,!1;t.shift()}return!0}function jh(e,t,n){Xi(e)&&n.delete(t)}function Dx(){Zu=!1,Bn!==null&&Xi(Bn)&&(Bn=null),Yn!==null&&Xi(Yn)&&(Yn=null),Pn!==null&&Xi(Pn)&&(Pn=null),po.forEach(jh),go.forEach(jh)}function Ki(e,t){e.blockedOn===t&&(e.blockedOn=null,Zu||(Zu=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Dx)))}var Zi=null;function Sh(e){Zi!==e&&(Zi=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Zi===e&&(Zi=null);for(var t=0;t<e.length;t+=3){var n=e[t],o=e[t+1],r=e[t+2];if(typeof o!="function"){if(Ku(o||n)===null)continue;break}var u=ja(n);u!==null&&(e.splice(t,3),t-=3,Xr(u,{pending:!0,data:r,method:n.method,action:o},o,r))}}))}function us(e){function t(y){return Ki(y,e)}Bn!==null&&Ki(Bn,e),Yn!==null&&Ki(Yn,e),Pn!==null&&Ki(Pn,e),po.forEach(t),go.forEach(t);for(var n=0;n<Xn.length;n++){var o=Xn[n];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Xn.length&&(n=Xn[0],n.blockedOn===null);)Ih(n),n.blockedOn===null&&Xn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(o=0;o<n.length;o+=3){var r=n[o],u=n[o+1],m=r[pt]||null;if(typeof u=="function")m||Sh(n);else if(m){var _=null;if(u&&u.hasAttribute("formAction")){if(r=u,m=u[pt]||null)_=m.formAction;else if(Ku(r)!==null)continue}else _=m.action;typeof _=="function"?n[o+1]=_:(n.splice(o,3),o-=3),Sh(n)}}}function Vh(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(m){return r=m})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),o||setTimeout(n,20)}function n(){if(!o&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function Fu(e){this._internalRoot=e}Fi.prototype.render=Fu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var n=t.current,o=It();kh(n,o,e,t,null,null)},Fi.prototype.unmount=Fu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;kh(e.current,2,null,e,null,null),Si(),t[Aa]=null}};function Fi(e){this._internalRoot=e}Fi.prototype.unstable_scheduleHydration=function(e){if(e){var t=zp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Xn.length&&t!==0&&t<Xn[n].priority;n++);Xn.splice(n,0,e),n===0&&Ih(e)}};var qh=s.version;if(qh!=="19.2.7")throw Error(l(527,qh,"19.2.7"));Q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=b(t),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var Hx={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qi.isDisabled&&Qi.supportsFiber)try{ys=Qi.inject(Hx),xt=Qi}catch{}}return bo.createRoot=function(e,t){if(!p(e))throw Error(l(299));var n=!1,o="",r=Rg,u=Og,m=zg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError)),t=xh(e,1,!1,null,null,n,o,null,r,u,m,Vh),e[Aa]=t.current,Vu(e),new Fu(t)},bo.hydrateRoot=function(e,t,n){if(!p(e))throw Error(l(299));var o=!1,r="",u=Rg,m=Og,_=zg,y=null;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(m=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError),n.formState!==void 0&&(y=n.formState)),t=xh(e,1,!0,t,n??null,o,r,y,u,m,_,Vh),t.context=Gh(null),n=t.current,o=It(),o=Ol(o),r=qn(o),r.callback=null,wn(n,r,o),n=o,t.current.lanes=n,Ms(t,n),Jt(t),e[Aa]=t.current,Vu(e),new Fi(t)},bo.version="19.2.7",bo}var Lh;function Kx(){if(Lh)return $u.exports;Lh=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(s){console.error(s)}}return a(),$u.exports=Xx(),$u.exports}var Zx=Kx();/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Qx=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,i,l)=>l?l.toUpperCase():i.toLowerCase()),Uh=a=>{const s=Qx(a);return s.charAt(0).toUpperCase()+s.slice(1)},vf=(...a)=>a.filter((s,i,l)=>!!s&&s.trim()!==""&&l.indexOf(s)===i).join(" ").trim(),Jx=a=>{for(const s in a)if(s.startsWith("aria-")||s==="role"||s==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $x={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=Y.forwardRef(({color:a="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:l,className:p="",children:g,iconNode:d,...h},f)=>Y.createElement("svg",{ref:f,...$x,width:s,height:s,stroke:a,strokeWidth:l?Number(i)*24/Number(s):i,className:vf("lucide",p),...!g&&!Jx(h)&&{"aria-hidden":"true"},...h},[...d.map(([b,x])=>Y.createElement(b,x)),...Array.isArray(g)?g:[g]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=(a,s)=>{const i=Y.forwardRef(({className:l,...p},g)=>Y.createElement(Wx,{ref:g,iconNode:s,className:vf(`lucide-${Fx(Uh(a))}`,`lucide-${a}`,l),...p}));return i.displayName=Uh(a),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],Tc=he("archive",e2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Ac=he("book-open",t2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],nc=he("calculator",n2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],s2=he("calendar",a2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],i2=he("chevron-down",o2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],gl=he("circle-check",l2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],u2=he("circle-play",r2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],p2=he("code",c2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Ic=he("copy",d2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],m2=he("credit-card",g2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Mf=he("download",h2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Fn=he("external-link",b2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],_2=he("eye",f2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],G2=he("file-text",x2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],Bh=he("flask-conical",k2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],Yh=he("funnel",y2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],jc=he("house",v2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Tf=he("info",M2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T2=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],A2=he("lightbulb",T2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],j2=he("link",I2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],V2=he("message-circle",S2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=[["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",key:"39pd36"}],["rect",{width:"8",height:"4",x:"10",y:"6",rx:"1",key:"aywv1n"}]],Af=he("newspaper",q2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],If=he("palette",w2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]],fo=he("pin",E2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]],C2=he("scale",N2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Sc=he("search",D2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],R2=he("settings-2",H2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],z2=he("shield-alert",O2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],U2=he("shield-check",L2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],Go=he("shopping-bag",B2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],P2=he("sparkles",Y2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]],K2=he("table",X2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],F2=he("triangle-alert",Z2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],ml=he("users",Q2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ph=he("x",J2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],sl=he("youtube",$2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],eG=he("zap",W2);/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const ac=[{name:"Inicio",path:"/",key:"nav.inicio"},{name:"Novedades",path:"/novedades",key:"nav.novedades"},{name:"Servicios",path:"/servicios",key:"nav.servicios"},{name:"Evo",path:"/evo",key:"nav.evo"},{name:"Otros códigos",path:"/otros",key:"nav.otros"},{name:"Guía",path:"/guia",key:"nav.guia"},{name:"Tutoriales",path:"/tutoriales",key:"nav.tutoriales"},{name:"Descargas",path:"/descargas",key:"nav.descargas"}],hl=[{id:"a",name:"Cibernético",shortName:"CYBER",icon:"Cpu",image:"https://github.com/luqueSmith/MGG/blob/main/img/cyber.png?raw=true"},{id:"b",name:"Zombi",shortName:"ZOMBI",icon:"Skull",image:"https://github.com/luqueSmith/MGG/blob/main/img/necro.png?raw=true"},{id:"c",name:"Guerrero",shortName:"Sword",icon:"Sword",image:"https://github.com/luqueSmith/MGG/blob/main/img/sable.png?raw=true"},{id:"d",name:"Bestia",shortName:"ZOOMORFO",icon:"PawPrint",image:"https://github.com/luqueSmith/MGG/blob/main/img/zomorfo.png?raw=true"},{id:"e",name:"Galáctico",shortName:"GALAXY",icon:"Star",image:"https://github.com/luqueSmith/MGG/blob/main/img/galactico.png?raw=true"},{id:"f",name:"Mítico",shortName:"MYTHIC",icon:"FlaskConical",image:"https://github.com/luqueSmith/MGG/blob/main/img/mitico.png?raw=true"}],ps={a:["#38bdf8","#2563eb"],b:["#a855f7","#6d28d9"],c:["#f59e0b","#d97706"],d:["#22c55e","#15803d"],e:["#06b6d4","#0f766e"],f:["#ec4899","#be185d"],n:["#64748b","#334155"]},sc=[{id:"offer_1",nombre:"54 Hornos 1M de Oro",nombreEn:"54 Furnaces 1M Gold",precio:37,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/1MdeOro.png?raw=true",descripcion:"Oferta relámpago: pack de 54 hornos con 1 millón de oro directo.",descripcionEn:"Flash offer: pack of 54 furnaces with 1 million gold direct.",features:["Entrega prioritaria","Ahorro del 20%","Soporte exclusivo"],featuresEn:["Priority delivery","20% Savings","Exclusive support"],categoria:"OFFER"},{id:"offer_2",nombre:"54 Hornos 2M de Oro",nombreEn:"54 Furnaces 2M Gold",precio:48,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/2MdeOro.png?raw=true",descripcion:"Pack industrial para jugadores de alto nivel con 2 millones de oro.",descripcionEn:"Industrial pack for high-level players with 2 million gold.",features:["Capacidad máxima","Optimización de recursos","Bonus de velocidad"],featuresEn:["Maximum capacity","Resource optimization","Speed bonus"],categoria:"OFFER"},{id:"offer_3",nombre:"54 Hornos 3M de Oro",nombreEn:"54 Furnaces 3M Gold",precio:59,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/3MdeOro.png?raw=true",descripcion:"La máxima potencia disponible en el mercado actual.",descripcionEn:"The maximum power available in the current market.",features:["Máximo beneficio","Inyección instantánea","Certificado Elite"],featuresEn:["Maximum benefit","Instant injection","Elite certificate"],categoria:"OFFER"},{id:"main_1",nombre:"Horno de Oro",nombreEn:"Gold Furnace",precio:7,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/Hornos%20de%20oro.png?raw=true",descripcion:"Aceleración masiva de producción de oro.",descripcionEn:"Massive acceleration of gold production.",features:["Entrega en menos de 10 min","Soporte 24/7","Proceso guiado"],featuresEn:["Delivery in < 10 min","24/7 Support","Guided process"],categoria:"MAIN"},{id:"main_2",nombre:"Mutante",nombreEn:"Mutant",precio:2,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/mutante.png?raw=true",descripcion:"Obtención de mutantes raros según disponibilidad.",descripcionEn:"Get rare mutants depending on availability.",features:["Selección a elegir","Stats máximos","Entrega rápida"],featuresEn:["Custom selection","Max stats","Fast delivery"],categoria:"MAIN"},{id:"main_3",nombre:"Orbes Basic 6 x 10",nombreEn:"Basic Orbs 6 x 10",precio:1,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/bsic-orb6.png?raw=true",descripcion:"Pack de orbes básicos para fortalecer a tu equipo.",descripcionEn:"Basic orb pack to strengthen your team.",features:["Stock ilimitado","Precio promocional","Ideal para nuevos"],featuresEn:["Unlimited stock","Promotional price","Ideal for beginners"],categoria:"MAIN"},{id:"main_4",nombre:"1M de Oro Directo",nombreEn:"1M Direct Gold",precio:35,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/1MOro.png?raw=true",descripcion:"Paquete de moneda premium gestionado con verificación.",descripcionEn:"Premium currency package managed with verification.",features:["Proceso guiado","Entrega coordinada","Soporte manual"],featuresEn:["Guided process","Coordinated delivery","Manual support"],categoria:"MAIN"},{id:"main_5",nombre:"ORB Nivel 7 Elite",nombreEn:"ORB Level 7 Elite",precio:6,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/obrNVL7.png?raw=true",descripcion:"Orbes de alto nivel para máximo rendimiento.",descripcionEn:"High-level orbs for maximum performance.",features:["Efectos críticos","Rareza extrema","Compatibilidad total"],featuresEn:["Critical effects","Extreme rarity","Total compatibility"],categoria:"MAIN"},{id:"main_6",nombre:"Mutante Bug Platino",nombreEn:"Platinum Bug Mutant",precio:6,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/bf8515d2-211a-411c-a1d9-da10c59ff4dd.png?raw=true",descripcion:"Mutante con estética platino y habilidades especiales.",descripcionEn:"Mutant with platinum aesthetics and special abilities.",features:["Visual único","Habilidades especiales","Edición 2026"],featuresEn:["Unique visual","Special skills","2026 Edition"],categoria:"MAIN"},{id:"main_7",nombre:"100k Tarros XP",nombreEn:"100k XP Jars",precio:15,imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRWQsH6i8OPIj8DtvkxDggsiG4FfvRNj4zkA&s",descripcion:"Nivelación rápida para tu ejército de gladiadores.",descripcionEn:"Fast leveling for your gladiator army.",features:["Sube a nivel alto","Ahorro de tiempo","Fácil aplicación"],featuresEn:["Level up high","Time saving","Easy application"],categoria:"MAIN"},{id:"main_8",nombre:"100k Fichas JackPot",nombreEn:"100k Jackpot Tokens",precio:15,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/fichasjacpot.png?raw=true",descripcion:"Pack masivo de fichas para eventos y ruletas.",descripcionEn:"Massive token pack for events and roulettes.",features:["Alta recompensa","Giro automático","Uso flexible"],featuresEn:["High reward","Auto spin","Flexible use"],categoria:"MAIN"},{id:"main_9",nombre:"Expansión Laboratorio",nombreEn:"Laboratory Expansion",precio:4,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/laboratorio.png?raw=true",descripcion:"Desbloquea slots y mejoras del laboratorio.",descripcionEn:"Unlock laboratory slots and improvements.",features:["Más slots","Mejora visual","Multi-breeding"],featuresEn:["More slots","Visual improvement","Multi-breeding"],categoria:"MAIN"},{id:"main_10",nombre:"Orbe Velocidad Nivel 5",nombreEn:"Level 5 Speed Orb",precio:2,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/orbelvl5.png?raw=true",descripcion:"Potenciador de velocidad para mejorar turnos.",descripcionEn:"Speed booster to improve turns.",features:["Primer golpe","Agilidad +50%","Recarga rápida"],featuresEn:["First strike","Agility +50%","Fast recharge"],categoria:"MAIN"},{id:"main_11",nombre:"ORB Nivel ATK 6 x 10",nombreEn:"ORB ATK Level 6 x 10",precio:6,imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkvqT-WxlpjpLTxcrwKAUQmGTTv6vtrVHxkA&s",descripcion:"Pack ofensivo para maximizar DPS, Te entrego 10 orbes del paquete.",descripcionEn:"Offensive pack to maximize DPS, I deliver 10 orbs from the package.",features:["Daño puro","Críticos frecuentes","Efecto sangrado"],featuresEn:["Pure damage","Frequent crits","Bleeding effect"],categoria:"MAIN"},{id:"main_12",nombre:"BIG BOSS",nombreEn:"BIG BOSS",precio:10,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/bigboss.png?raw=true",descripcion:"Te consigo a BigBoss en tu cuenta.",descripcionEn:"I get BigBoss in your account.",features:["Resistencia temporal","Fuerza X2","Drop mejorado"],featuresEn:["Temporary resistance","2X Strength","Improved drop"],categoria:"MAIN"},{id:"other_1",nombre:"Doxeo para +51",nombreEn:"Doxxing for +51",precio:5,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/doxeo.png?raw=true",descripcion:"Saco informacion como DNI, Arbol Familiar antencedentes y etc con el numero o nombre para Peru.",descripcionEn:"I extract information like ID, Family Tree, records, etc. with number or name for Peru.",features:["Fuentes públicas","Reporte PDF","Enfoque de privacidad"],featuresEn:["Public sources","PDF Report","Privacy focused"],categoria:"OTHER"},{id:"other_2",nombre:"Desarrollo Web Next-Gen",nombreEn:"Next-Gen Web Development",precio:40,imagen:"https://www.freecodecamp.org/news/content/images/2019/09/lua_script.jpg",descripcion:"Creación de portafolios, tiendas o landing pages y etc, solo 40 soles por una web alojada en GitHub, Si te interesa una web con dominio .com dale en ver mas..",descripcionEn:"Creation of portfolios, stores or landing pages etc, only 40 soles for a website hosted on GitHub. If you are interested in a website with a .com domain click see more..",features:["UI/UX único","Optimización SEO","Host incluido","Entrega profesional"],featuresEn:["Unique UI/UX","SEO Optimization","Host included","Professional delivery"],categoria:"OTHER",saberMas:"https://webcraft-ux.github.io/webcraft/"},{id:"other_3",nombre:"Scripts Custom MGG",nombreEn:"Custom MGG Scripts",precio:15,imagen:"https://callcenters.by/images/asterisk/lua%20plugin.jpg",descripcion:"Automatizaciones personalizadas para productividad.",descripcionEn:"Custom automations for productivity.",features:["Auto-farm","Logs de actividades","Configuración guiada","Soporte"],featuresEn:["Auto-farm","Activity logs","Guided configuration","Support"],categoria:"OTHER"},{id:"other_4",nombre:"ChatGPT Premium",nombreEn:"ChatGPT Premium",precio:8,imagen:"https://spanish.entrepreneur.com/wp-content/uploads/sites/3/2024/12/1733494589-openai-chatgpt-premium-subscription-1224-g2186754261.jpg",descripcion:"Acceso premium para chatGPT barato y con descuento por cantidad.",descripcionEn:"Premium access for cheap ChatGPT with quantity discount.",features:["Asistencia rápida","Uso personal","Configuración guiada","Soporte base"],featuresEn:["Fast assistance","Personal use","Guided configuration","Basic support"],categoria:"OTHER"}],Xh={Cajas:`Box Cyber	mystery_cyber	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_cyber.png
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
Orbe Respuesta +20%	orb_basic_retaliate_06	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_retaliate_06.png`},jf="51906328464",np="https://chat.whatsapp.com/DALbalnNe9N6bD4W1Wp0HM?mode=gi_t",tG=[0,50,60,65,70,75,80,85,90],Sf=[{id:"pe",name:"Perú",currency:"PEN",symbol:"S/",rate:1,exchangeRate:1,flag:"🇵🇪"},{id:"mx",name:"México",currency:"MXN",symbol:"$",rate:1,exchangeRate:5.07,flag:"🇲🇽"},{id:"es",name:"España",currency:"EUR",symbol:"€",rate:1,exchangeRate:.25,flag:"🇪🇸"},{id:"cl",name:"Chile",currency:"CLP",symbol:"$",rate:1,exchangeRate:262.23,flag:"🇨🇱"},{id:"ar",name:"Argentina",currency:"ARS",symbol:"$",rate:1,exchangeRate:408.14,flag:"🇦🇷"},{id:"ve",name:"Venezuela",currency:"VES",symbol:"Bs",rate:1,exchangeRate:150.82,flag:"🇻🇪"},{id:"co",name:"Colombia",currency:"COP",symbol:"$",rate:1,exchangeRate:1110.59,flag:"🇨🇴"},{id:"bo",name:"Bolivia",currency:"BOB",symbol:"Bs",rate:1,exchangeRate:2.02,flag:"🇧🇴"}],nG=[{name:"Western Union",logo:"https://play-lh.googleusercontent.com/2O6TfOnCMQ8aWdhcME3CwHK_od33WPBw02ZpG_lpvnwRPHfCKBlmCeaLJ_tL8oqchBg",info:"Global money transfer. Available at physical agents worldwide.",infoEs:"Envío de dinero global. Disponible en agentes físicos."},{name:"Binance",logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe9rjRtIJJM5o6xP2LqfQFFcWejwFgRA1rag&s",info:"Direct deposits via USDT (Tron Network TRC20). Fast & Secure.",infoEs:"Depósitos directos vía USDT (Red Tron TRC20)."},{name:"PayPal",logo:"https://play-lh.googleusercontent.com/iQ8f5plIFy9rrY46Q2TNRwq_8nCvh9LZVwytqMBpOEcfnIU3vTkICQ6L1-RInWS93oQg",info:"Secure international payment with card or balance.",infoEs:"Pago internacional seguro con tarjeta o saldo."},{name:"Yape",logo:"https://play-lh.googleusercontent.com/y5S3ZIz-ohg3FirlISnk3ca2yQ6cd825OpA0YK9qklc5W8MLSe0NEIEqoV-pZDvO0A8",info:"Exclusive for PERU (PEN). Immediate transfer.",infoEs:"Exclusivo para PERÚ (Soles). Transferencia inmediata."},{name:"Airtm",logo:"https://s3-eu-west-1.amazonaws.com/tpd/logos/5d6d32510d8627000132ad10/0x0.png",info:"Digital wallet recommended for Latin America.",infoEs:"Billetera digital recomendada para Latinoamérica."}],Kh=["CH","LU","DK","NO","IS","US","DE","SG","IE","AU","CA","GB","ES","IT","KR","IL","CL","UY"],aG={"4.0":["CH","LU","DK","NO","IS"],"3.0":["US","DE","SG","IE","AU","CA","GB"],"2.0":["IT","KR","IL","UY"],"1.5":["BR","FR","JP"]},sG=`A00-C0R3-C0NTR0L aa_99
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
`,ap=Y.createContext({});function sp(a){const s=Y.useRef(null);return s.current===null&&(s.current=a()),s.current}const oG=typeof window<"u",Vf=oG?Y.useLayoutEffect:Y.useEffect,Il=Y.createContext(null);function op(a,s){a.indexOf(s)===-1&&a.push(s)}function bl(a,s){const i=a.indexOf(s);i>-1&&a.splice(i,1)}const tn=(a,s,i)=>i>s?s:i<a?a:i;let ip=()=>{};const Jn={},qf=a=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a),wf=a=>typeof a=="object"&&a!==null,Ef=a=>/^0[^.\s]+$/u.test(a);function Nf(a){let s;return()=>(s===void 0&&(s=a()),s)}const Lt=a=>a,So=(...a)=>a.reduce((s,i)=>l=>i(s(l))),To=(a,s,i)=>{const l=s-a;return l?(i-a)/l:1};class lp{constructor(){this.subscriptions=[]}add(s){return op(this.subscriptions,s),()=>bl(this.subscriptions,s)}notify(s,i,l){const p=this.subscriptions.length;if(p)if(p===1)this.subscriptions[0](s,i,l);else for(let g=0;g<p;g++){const d=this.subscriptions[g];d&&d(s,i,l)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const jt=a=>a*1e3,zt=a=>a/1e3,Cf=(a,s)=>s?a*(1e3/s):0,Df=(a,s,i)=>(((1-3*i+3*s)*a+(3*i-6*s))*a+3*s)*a,iG=1e-7,lG=12;function rG(a,s,i,l,p){let g,d,h=0;do d=s+(i-s)/2,g=Df(d,l,p)-a,g>0?i=d:s=d;while(Math.abs(g)>iG&&++h<lG);return d}function Vo(a,s,i,l){if(a===s&&i===l)return Lt;const p=g=>rG(g,0,1,a,i);return g=>g===0||g===1?g:Df(p(g),s,l)}const Hf=a=>s=>s<=.5?a(2*s)/2:(2-a(2*(1-s)))/2,Rf=a=>s=>1-a(1-s),Of=Vo(.33,1.53,.69,.99),rp=Rf(Of),zf=Hf(rp),Lf=a=>a>=1?1:(a*=2)<1?.5*rp(a):.5*(2-Math.pow(2,-10*(a-1))),up=a=>1-Math.sin(Math.acos(a)),Uf=Rf(up),Bf=Hf(up),uG=Vo(.42,0,1,1),cG=Vo(0,0,.58,1),Yf=Vo(.42,0,.58,1),pG=a=>Array.isArray(a)&&typeof a[0]!="number",Pf=a=>Array.isArray(a)&&typeof a[0]=="number",dG={linear:Lt,easeIn:uG,easeInOut:Yf,easeOut:cG,circIn:up,circInOut:Bf,circOut:Uf,backIn:rp,backInOut:zf,backOut:Of,anticipate:Lf},gG=a=>typeof a=="string",Zh=a=>{if(Pf(a)){ip(a.length===4);const[s,i,l,p]=a;return Vo(s,i,l,p)}else if(gG(a))return dG[a];return a},Ji=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function mG(a,s){let i=new Set,l=new Set,p=!1,g=!1;const d=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function f(x){d.has(x)&&(b.schedule(x),a()),x(h)}const b={schedule:(x,G=!1,k=!1)=>{const M=k&&p?i:l;return G&&d.add(x),M.add(x),x},cancel:x=>{l.delete(x),d.delete(x)},process:x=>{if(h=x,p){g=!0;return}p=!0;const G=i;i=l,l=G,i.forEach(f),i.clear(),p=!1,g&&(g=!1,b.process(x))}};return b}const hG=40;function Xf(a,s){let i=!1,l=!0;const p={delta:0,timestamp:0,isProcessing:!1},g=()=>i=!0,d=Ji.reduce((O,C)=>(O[C]=mG(g),O),{}),{setup:h,read:f,resolveKeyframes:b,preUpdate:x,update:G,preRender:k,render:v,postRender:M}=d,S=()=>{const O=Jn.useManualTiming,C=O?p.timestamp:performance.now();i=!1,O||(p.delta=l?1e3/60:Math.max(Math.min(C-p.timestamp,hG),1)),p.timestamp=C,p.isProcessing=!0,h.process(p),f.process(p),b.process(p),x.process(p),G.process(p),k.process(p),v.process(p),M.process(p),p.isProcessing=!1,i&&s&&(l=!1,a(S))},I=()=>{i=!0,l=!0,p.isProcessing||a(S)};return{schedule:Ji.reduce((O,C)=>{const z=d[C];return O[C]=(P,H=!1,X=!1)=>(i||I(),z.schedule(P,H,X)),O},{}),cancel:O=>{for(let C=0;C<Ji.length;C++)d[Ji[C]].cancel(O)},state:p,steps:d}}const{schedule:qe,cancel:$n,state:st,steps:oc}=Xf(typeof requestAnimationFrame<"u"?requestAnimationFrame:Lt,!0);let ol;function bG(){ol=void 0}const ut={now:()=>(ol===void 0&&ut.set(st.isProcessing||Jn.useManualTiming?st.timestamp:performance.now()),ol),set:a=>{ol=a,queueMicrotask(bG)}},Kf=a=>s=>typeof s=="string"&&s.startsWith(a),Zf=Kf("--"),fG=Kf("var(--"),cp=a=>fG(a)?_G.test(a.split("/*")[0].trim()):!1,_G=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Fh(a){return typeof a!="string"?!1:a.split("/*")[0].includes("var(--")}const _s={test:a=>typeof a=="number",parse:parseFloat,transform:a=>a},Ao={..._s,transform:a=>tn(0,1,a)},$i={..._s,default:1},ko=a=>Math.round(a*1e5)/1e5,pp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function xG(a){return a==null}const GG=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,dp=(a,s)=>i=>!!(typeof i=="string"&&GG.test(i)&&i.startsWith(a)||s&&!xG(i)&&Object.prototype.hasOwnProperty.call(i,s)),Ff=(a,s,i)=>l=>{if(typeof l!="string")return l;const[p,g,d,h]=l.match(pp);return{[a]:parseFloat(p),[s]:parseFloat(g),[i]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},kG=a=>tn(0,255,a),ic={..._s,transform:a=>Math.round(kG(a))},ya={test:dp("rgb","red"),parse:Ff("red","green","blue"),transform:({red:a,green:s,blue:i,alpha:l=1})=>"rgba("+ic.transform(a)+", "+ic.transform(s)+", "+ic.transform(i)+", "+ko(Ao.transform(l))+")"};function yG(a){let s="",i="",l="",p="";return a.length>5?(s=a.substring(1,3),i=a.substring(3,5),l=a.substring(5,7),p=a.substring(7,9)):(s=a.substring(1,2),i=a.substring(2,3),l=a.substring(3,4),p=a.substring(4,5),s+=s,i+=i,l+=l,p+=p),{red:parseInt(s,16),green:parseInt(i,16),blue:parseInt(l,16),alpha:p?parseInt(p,16)/255:1}}const Vc={test:dp("#"),parse:yG,transform:ya.transform},qo=a=>({test:s=>typeof s=="string"&&s.endsWith(a)&&s.split(" ").length===1,parse:parseFloat,transform:s=>`${s}${a}`}),kn=qo("deg"),en=qo("%"),ee=qo("px"),vG=qo("vh"),MG=qo("vw"),Qh={...en,parse:a=>en.parse(a)/100,transform:a=>en.transform(a*100)},gs={test:dp("hsl","hue"),parse:Ff("hue","saturation","lightness"),transform:({hue:a,saturation:s,lightness:i,alpha:l=1})=>"hsla("+Math.round(a)+", "+en.transform(ko(s))+", "+en.transform(ko(i))+", "+ko(Ao.transform(l))+")"},Ze={test:a=>ya.test(a)||Vc.test(a)||gs.test(a),parse:a=>ya.test(a)?ya.parse(a):gs.test(a)?gs.parse(a):Vc.parse(a),transform:a=>typeof a=="string"?a:a.hasOwnProperty("red")?ya.transform(a):gs.transform(a),getAnimatableNone:a=>{const s=Ze.parse(a);return s.alpha=0,Ze.transform(s)}},TG=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function AG(a){var s,i;return isNaN(a)&&typeof a=="string"&&(((s=a.match(pp))==null?void 0:s.length)||0)+(((i=a.match(TG))==null?void 0:i.length)||0)>0}const Qf="number",Jf="color",IG="var",jG="var(",Jh="${}",SG=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function bs(a){const s=a.toString(),i=[],l={color:[],number:[],var:[]},p=[];let g=0;const h=s.replace(SG,f=>(Ze.test(f)?(l.color.push(g),p.push(Jf),i.push(Ze.parse(f))):f.startsWith(jG)?(l.var.push(g),p.push(IG),i.push(f)):(l.number.push(g),p.push(Qf),i.push(parseFloat(f))),++g,Jh)).split(Jh);return{values:i,split:h,indexes:l,types:p}}function VG(a){return bs(a).values}function $f({split:a,types:s}){const i=a.length;return l=>{let p="";for(let g=0;g<i;g++)if(p+=a[g],l[g]!==void 0){const d=s[g];d===Qf?p+=ko(l[g]):d===Jf?p+=Ze.transform(l[g]):p+=l[g]}return p}}function qG(a){return $f(bs(a))}const wG=a=>typeof a=="number"?0:Ze.test(a)?Ze.getAnimatableNone(a):a,EG=(a,s)=>typeof a=="number"?s!=null&&s.trim().endsWith("/")?a:0:wG(a);function NG(a){const s=bs(a);return $f(s)(s.values.map((l,p)=>EG(l,s.split[p])))}const Kt={test:AG,parse:VG,createTransformer:qG,getAnimatableNone:NG};function lc(a,s,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?a+(s-a)*6*i:i<1/2?s:i<2/3?a+(s-a)*(2/3-i)*6:a}function CG({hue:a,saturation:s,lightness:i,alpha:l}){a/=360,s/=100,i/=100;let p=0,g=0,d=0;if(!s)p=g=d=i;else{const h=i<.5?i*(1+s):i+s-i*s,f=2*i-h;p=lc(f,h,a+1/3),g=lc(f,h,a),d=lc(f,h,a-1/3)}return{red:Math.round(p*255),green:Math.round(g*255),blue:Math.round(d*255),alpha:l}}function fl(a,s){return i=>i>0?s:a}const Ve=(a,s,i)=>a+(s-a)*i,rc=(a,s,i)=>{const l=a*a,p=i*(s*s-l)+l;return p<0?0:Math.sqrt(p)},DG=[Vc,ya,gs],HG=a=>DG.find(s=>s.test(a));function $h(a){const s=HG(a);if(!s)return!1;let i=s.parse(a);return s===gs&&(i=CG(i)),i}const Wh=(a,s)=>{const i=$h(a),l=$h(s);if(!i||!l)return fl(a,s);const p={...i};return g=>(p.red=rc(i.red,l.red,g),p.green=rc(i.green,l.green,g),p.blue=rc(i.blue,l.blue,g),p.alpha=Ve(i.alpha,l.alpha,g),ya.transform(p))},qc=new Set(["none","hidden"]);function RG(a,s){return qc.has(a)?i=>i<=0?a:s:i=>i>=1?s:a}function OG(a,s){return i=>Ve(a,s,i)}function gp(a){return typeof a=="number"?OG:typeof a=="string"?cp(a)?fl:Ze.test(a)?Wh:UG:Array.isArray(a)?Wf:typeof a=="object"?Ze.test(a)?Wh:zG:fl}function Wf(a,s){const i=[...a],l=i.length,p=a.map((g,d)=>gp(g)(g,s[d]));return g=>{for(let d=0;d<l;d++)i[d]=p[d](g);return i}}function zG(a,s){const i={...a,...s},l={};for(const p in i)a[p]!==void 0&&s[p]!==void 0&&(l[p]=gp(a[p])(a[p],s[p]));return p=>{for(const g in l)i[g]=l[g](p);return i}}function LG(a,s){const i=[],l={color:0,var:0,number:0};for(let p=0;p<s.values.length;p++){const g=s.types[p],d=a.indexes[g][l[g]],h=a.values[d]??0;i[p]=h,l[g]++}return i}const UG=(a,s)=>{const i=Kt.createTransformer(s),l=bs(a),p=bs(s);return l.indexes.var.length===p.indexes.var.length&&l.indexes.color.length===p.indexes.color.length&&l.indexes.number.length>=p.indexes.number.length?qc.has(a)&&!p.values.length||qc.has(s)&&!l.values.length?RG(a,s):So(Wf(LG(l,p),p.values),i):fl(a,s)};function e_(a,s,i){return typeof a=="number"&&typeof s=="number"&&typeof i=="number"?Ve(a,s,i):gp(a)(a,s)}const BG=a=>{const s=({timestamp:i})=>a(i);return{start:(i=!0)=>qe.update(s,i),stop:()=>$n(s),now:()=>st.isProcessing?st.timestamp:ut.now()}},t_=(a,s,i=10)=>{let l="";const p=Math.max(Math.round(s/i),2);for(let g=0;g<p;g++)l+=Math.round(a(g/(p-1))*1e4)/1e4+", ";return`linear(${l.substring(0,l.length-2)})`},_l=2e4;function mp(a){let s=0;const i=50;let l=a.next(s);for(;!l.done&&s<_l;)s+=i,l=a.next(s);return s>=_l?1/0:s}function YG(a,s=100,i){const l=i({...a,keyframes:[0,s]}),p=Math.min(mp(l),_l);return{type:"keyframes",ease:g=>l.next(p*g).value/s,duration:zt(p)}}const Re={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function wc(a,s){return a*Math.sqrt(1-s*s)}const PG=12;function XG(a,s,i){let l=i;for(let p=1;p<PG;p++)l=l-a(l)/s(l);return l}const uc=.001;function KG({duration:a=Re.duration,bounce:s=Re.bounce,velocity:i=Re.velocity,mass:l=Re.mass}){let p,g,d=1-s;d=tn(Re.minDamping,Re.maxDamping,d),a=tn(Re.minDuration,Re.maxDuration,zt(a)),d<1?(p=b=>{const x=b*d,G=x*a,k=x-i,v=wc(b,d),M=Math.exp(-G);return uc-k/v*M},g=b=>{const G=b*d*a,k=G*i+i,v=Math.pow(d,2)*Math.pow(b,2)*a,M=Math.exp(-G),S=wc(Math.pow(b,2),d);return(-p(b)+uc>0?-1:1)*((k-v)*M)/S}):(p=b=>{const x=Math.exp(-b*a),G=(b-i)*a+1;return-uc+x*G},g=b=>{const x=Math.exp(-b*a),G=(i-b)*(a*a);return x*G});const h=5/a,f=XG(p,g,h);if(a=jt(a),isNaN(f))return{stiffness:Re.stiffness,damping:Re.damping,duration:a};{const b=Math.pow(f,2)*l;return{stiffness:b,damping:d*2*Math.sqrt(l*b),duration:a}}}const ZG=["duration","bounce"],FG=["stiffness","damping","mass"];function eb(a,s){return s.some(i=>a[i]!==void 0)}function QG(a){let s={velocity:Re.velocity,stiffness:Re.stiffness,damping:Re.damping,mass:Re.mass,isResolvedFromDuration:!1,...a};if(!eb(a,FG)&&eb(a,ZG))if(s.velocity=0,a.visualDuration){const i=a.visualDuration,l=2*Math.PI/(i*1.2),p=l*l,g=2*tn(.05,1,1-(a.bounce||0))*Math.sqrt(p);s={...s,mass:Re.mass,stiffness:p,damping:g}}else{const i=KG({...a,velocity:0});s={...s,...i,mass:Re.mass},s.isResolvedFromDuration=!0}return s}function xl(a=Re.visualDuration,s=Re.bounce){const i=typeof a!="object"?{visualDuration:a,keyframes:[0,1],bounce:s}:a;let{restSpeed:l,restDelta:p}=i;const g=i.keyframes[0],d=i.keyframes[i.keyframes.length-1],h={done:!1,value:g},{stiffness:f,damping:b,mass:x,duration:G,velocity:k,isResolvedFromDuration:v}=QG({...i,velocity:-zt(i.velocity||0)}),M=k||0,S=b/(2*Math.sqrt(f*x)),I=d-g,E=zt(Math.sqrt(f/x)),K=Math.abs(I)<5;l||(l=K?Re.restSpeed.granular:Re.restSpeed.default),p||(p=K?Re.restDelta.granular:Re.restDelta.default);let O,C,z,P,H,X;if(S<1)z=wc(E,S),P=(M+S*E*I)/z,O=F=>{const oe=Math.exp(-S*E*F);return d-oe*(P*Math.sin(z*F)+I*Math.cos(z*F))},H=S*E*P+I*z,X=S*E*I-P*z,C=F=>Math.exp(-S*E*F)*(H*Math.sin(z*F)+X*Math.cos(z*F));else if(S===1){O=oe=>d-Math.exp(-E*oe)*(I+(M+E*I)*oe);const F=M+E*I;C=oe=>Math.exp(-E*oe)*(E*F*oe-M)}else{const F=E*Math.sqrt(S*S-1);O=Ce=>{const Oe=Math.exp(-S*E*Ce),D=Math.min(F*Ce,300);return d-Oe*((M+S*E*I)*Math.sinh(D)+F*I*Math.cosh(D))/F};const oe=(M+S*E*I)/F,pe=S*E*oe-I*F,Be=S*E*I-oe*F;C=Ce=>{const Oe=Math.exp(-S*E*Ce),D=Math.min(F*Ce,300);return Oe*(pe*Math.sinh(D)+Be*Math.cosh(D))}}const Z={calculatedDuration:v&&G||null,velocity:F=>jt(C(F)),next:F=>{if(!v&&S<1){const pe=Math.exp(-S*E*F),Be=Math.sin(z*F),Ce=Math.cos(z*F),Oe=d-pe*(P*Be+I*Ce),D=jt(pe*(H*Be+X*Ce));return h.done=Math.abs(D)<=l&&Math.abs(d-Oe)<=p,h.value=h.done?d:Oe,h}const oe=O(F);if(v)h.done=F>=G;else{const pe=jt(C(F));h.done=Math.abs(pe)<=l&&Math.abs(d-oe)<=p}return h.value=h.done?d:oe,h},toString:()=>{const F=Math.min(mp(Z),_l),oe=t_(pe=>Z.next(F*pe).value,F,30);return F+"ms "+oe},toTransition:()=>{}};return Z}xl.applyToOptions=a=>{const s=YG(a,100,xl);return a.ease=s.ease,a.duration=jt(s.duration),a.type="keyframes",a};const JG=5;function n_(a,s,i){const l=Math.max(s-JG,0);return Cf(i-a(l),s-l)}function Ec({keyframes:a,velocity:s=0,power:i=.8,timeConstant:l=325,bounceDamping:p=10,bounceStiffness:g=500,modifyTarget:d,min:h,max:f,restDelta:b=.5,restSpeed:x}){const G=a[0],k={done:!1,value:G},v=X=>h!==void 0&&X<h||f!==void 0&&X>f,M=X=>h===void 0?f:f===void 0||Math.abs(h-X)<Math.abs(f-X)?h:f;let S=i*s;const I=G+S,E=d===void 0?I:d(I);E!==I&&(S=E-G);const K=X=>-S*Math.exp(-X/l),O=X=>E+K(X),C=X=>{const Z=K(X),F=O(X);k.done=Math.abs(Z)<=b,k.value=k.done?E:F};let z,P;const H=X=>{v(k.value)&&(z=X,P=xl({keyframes:[k.value,M(k.value)],velocity:n_(O,X,k.value),damping:p,stiffness:g,restDelta:b,restSpeed:x}))};return H(0),{calculatedDuration:null,next:X=>{let Z=!1;return!P&&z===void 0&&(Z=!0,C(X),H(X)),z!==void 0&&X>=z?P.next(X-z):(!Z&&C(X),k)}}}function $G(a,s,i){const l=[],p=i||Jn.mix||e_,g=a.length-1;for(let d=0;d<g;d++){let h=p(a[d],a[d+1]);if(s){const f=Array.isArray(s)?s[d]||Lt:s;h=So(f,h)}l.push(h)}return l}function WG(a,s,{clamp:i=!0,ease:l,mixer:p}={}){const g=a.length;if(ip(g===s.length),g===1)return()=>s[0];if(g===2&&s[0]===s[1])return()=>s[1];const d=a[0]===a[1];a[0]>a[g-1]&&(a=[...a].reverse(),s=[...s].reverse());const h=$G(s,l,p),f=h.length,b=x=>{if(d&&x<a[0])return s[0];let G=0;if(f>1)for(;G<a.length-2&&!(x<a[G+1]);G++);const k=To(a[G],a[G+1],x);return h[G](k)};return i?x=>b(tn(a[0],a[g-1],x)):b}function ek(a,s){const i=a[a.length-1];for(let l=1;l<=s;l++){const p=To(0,s,l);a.push(Ve(i,1,p))}}function tk(a){const s=[0];return ek(s,a.length-1),s}function nk(a,s){return a.map(i=>i*s)}function ak(a,s){return a.map(()=>s||Yf).splice(0,a.length-1)}function yo({duration:a=300,keyframes:s,times:i,ease:l="easeInOut"}){const p=pG(l)?l.map(Zh):Zh(l),g={done:!1,value:s[0]},d=nk(i&&i.length===s.length?i:tk(s),a),h=WG(d,s,{ease:Array.isArray(p)?p:ak(s,p)});return{calculatedDuration:a,next:f=>(g.value=h(f),g.done=f>=a,g)}}const sk=a=>a!==null;function jl(a,{repeat:s,repeatType:i="loop"},l,p=1){const g=a.filter(sk),h=p<0||s&&i!=="loop"&&s%2===1?0:g.length-1;return!h||l===void 0?g[h]:l}const ok={decay:Ec,inertia:Ec,tween:yo,keyframes:yo,spring:xl};function a_(a){typeof a.type=="string"&&(a.type=ok[a.type])}class hp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(s=>{this.resolve=s})}notifyFinished(){this.resolve()}then(s,i){return this.finished.then(s,i)}}const ik=a=>a/100;class Gl extends hp{constructor(s){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var l,p;const{motionValue:i}=this.options;i&&i.updatedAt!==ut.now()&&this.tick(ut.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(p=(l=this.options).onStop)==null||p.call(l))},this.options=s,this.initAnimation(),this.play(),s.autoplay===!1&&this.pause()}initAnimation(){const{options:s}=this;a_(s);const{type:i=yo,repeat:l=0,repeatDelay:p=0,repeatType:g,velocity:d=0}=s;let{keyframes:h}=s;const f=i||yo;f!==yo&&typeof h[0]!="number"&&(this.mixKeyframes=So(ik,e_(h[0],h[1])),h=[0,100]);const b=f({...s,keyframes:h});g==="mirror"&&(this.mirroredGenerator=f({...s,keyframes:[...h].reverse(),velocity:-d})),b.calculatedDuration===null&&(b.calculatedDuration=mp(b));const{calculatedDuration:x}=b;this.calculatedDuration=x,this.resolvedDuration=x+p,this.totalDuration=this.resolvedDuration*(l+1)-p,this.generator=b}updateTime(s){const i=Math.round(s-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(s,i=!1){const{generator:l,totalDuration:p,mixKeyframes:g,mirroredGenerator:d,resolvedDuration:h,calculatedDuration:f}=this;if(this.startTime===null)return l.next(0);const{delay:b=0,keyframes:x,repeat:G,repeatType:k,repeatDelay:v,type:M,onUpdate:S,finalKeyframe:I}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,s):this.speed<0&&(this.startTime=Math.min(s-p/this.speed,this.startTime)),i?this.currentTime=s:this.updateTime(s);const E=this.currentTime-b*(this.playbackSpeed>=0?1:-1),K=this.playbackSpeed>=0?E<0:E>p;this.currentTime=Math.max(E,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=p);let O=this.currentTime,C=l;if(G){const X=Math.min(this.currentTime,p)/h;let Z=Math.floor(X),F=X%1;!F&&X>=1&&(F=1),F===1&&Z--,Z=Math.min(Z,G+1),!!(Z%2)&&(k==="reverse"?(F=1-F,v&&(F-=v/h)):k==="mirror"&&(C=d)),O=tn(0,1,F)*h}let z;K?(this.delayState.value=x[0],z=this.delayState):z=C.next(O),g&&!K&&(z.value=g(z.value));let{done:P}=z;!K&&f!==null&&(P=this.playbackSpeed>=0?this.currentTime>=p:this.currentTime<=0);const H=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&P);return H&&M!==Ec&&(z.value=jl(x,this.options,I,this.speed)),S&&S(z.value),H&&this.finish(),z}then(s,i){return this.finished.then(s,i)}get duration(){return zt(this.calculatedDuration)}get iterationDuration(){const{delay:s=0}=this.options||{};return this.duration+zt(s)}get time(){return zt(this.currentTime)}set time(s){s=jt(s),this.currentTime=s,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=s:this.driver&&(this.startTime=this.driver.now()-s/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=s,this.tick(s))}getGeneratorVelocity(){const s=this.currentTime;if(s<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(s);const i=this.generator.next(s).value;return n_(l=>this.generator.next(l).value,s,i)}get speed(){return this.playbackSpeed}set speed(s){const i=this.playbackSpeed!==s;i&&this.driver&&this.updateTime(ut.now()),this.playbackSpeed=s,i&&this.driver&&(this.time=zt(this.currentTime))}play(){var p,g;if(this.isStopped)return;const{driver:s=BG,startTime:i}=this.options;this.driver||(this.driver=s(d=>this.tick(d))),(g=(p=this.options).onPlay)==null||g.call(p);const l=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=l):this.holdTime!==null?this.startTime=l-this.holdTime:this.startTime||(this.startTime=i??l),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ut.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var s,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(s=this.options).onComplete)==null||i.call(s)}cancel(){var s,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(s=this.options).onCancel)==null||i.call(s)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(s){return this.startTime=0,this.tick(s,!0)}attachTimeline(s){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),s.observe(this)}}function lk(a){for(let s=1;s<a.length;s++)a[s]??(a[s]=a[s-1])}const va=a=>a*180/Math.PI,Nc=a=>{const s=va(Math.atan2(a[1],a[0]));return Cc(s)},rk={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:a=>(Math.abs(a[0])+Math.abs(a[3]))/2,rotate:Nc,rotateZ:Nc,skewX:a=>va(Math.atan(a[1])),skewY:a=>va(Math.atan(a[2])),skew:a=>(Math.abs(a[1])+Math.abs(a[2]))/2},Cc=a=>(a=a%360,a<0&&(a+=360),a),tb=Nc,nb=a=>Math.sqrt(a[0]*a[0]+a[1]*a[1]),ab=a=>Math.sqrt(a[4]*a[4]+a[5]*a[5]),uk={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:nb,scaleY:ab,scale:a=>(nb(a)+ab(a))/2,rotateX:a=>Cc(va(Math.atan2(a[6],a[5]))),rotateY:a=>Cc(va(Math.atan2(-a[2],a[0]))),rotateZ:tb,rotate:tb,skewX:a=>va(Math.atan(a[4])),skewY:a=>va(Math.atan(a[1])),skew:a=>(Math.abs(a[1])+Math.abs(a[4]))/2};function Dc(a){return a.includes("scale")?1:0}function Hc(a,s){if(!a||a==="none")return Dc(s);const i=a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let l,p;if(i)l=uk,p=i;else{const h=a.match(/^matrix\(([-\d.e\s,]+)\)$/u);l=rk,p=h}if(!p)return Dc(s);const g=l[s],d=p[1].split(",").map(pk);return typeof g=="function"?g(d):d[g]}const ck=(a,s)=>{const{transform:i="none"}=getComputedStyle(a);return Hc(i,s)};function pk(a){return parseFloat(a.trim())}const xs=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Gs=new Set([...xs,"pathRotation"]),sb=a=>a===_s||a===ee,dk=new Set(["x","y","z"]),gk=xs.filter(a=>!dk.has(a));function mk(a){const s=[];return gk.forEach(i=>{const l=a.getValue(i);l!==void 0&&(s.push([i,l.get()]),l.set(i.startsWith("scale")?1:0))}),s}const Qn={width:({x:a},{paddingLeft:s="0",paddingRight:i="0",boxSizing:l})=>{const p=a.max-a.min;return l==="border-box"?p:p-parseFloat(s)-parseFloat(i)},height:({y:a},{paddingTop:s="0",paddingBottom:i="0",boxSizing:l})=>{const p=a.max-a.min;return l==="border-box"?p:p-parseFloat(s)-parseFloat(i)},top:(a,{top:s})=>parseFloat(s),left:(a,{left:s})=>parseFloat(s),bottom:({y:a},{top:s})=>parseFloat(s)+(a.max-a.min),right:({x:a},{left:s})=>parseFloat(s)+(a.max-a.min),x:(a,{transform:s})=>Hc(s,"x"),y:(a,{transform:s})=>Hc(s,"y")};Qn.translateX=Qn.x;Qn.translateY=Qn.y;const Ma=new Set;let Rc=!1,Oc=!1,zc=!1;function s_(){if(Oc){const a=Array.from(Ma).filter(l=>l.needsMeasurement),s=new Set(a.map(l=>l.element)),i=new Map;s.forEach(l=>{const p=mk(l);p.length&&(i.set(l,p),l.render())}),a.forEach(l=>l.measureInitialState()),s.forEach(l=>{l.render();const p=i.get(l);p&&p.forEach(([g,d])=>{var h;(h=l.getValue(g))==null||h.set(d)})}),a.forEach(l=>l.measureEndState()),a.forEach(l=>{l.suspendedScrollY!==void 0&&window.scrollTo(0,l.suspendedScrollY)})}Oc=!1,Rc=!1,Ma.forEach(a=>a.complete(zc)),Ma.clear()}function o_(){Ma.forEach(a=>{a.readKeyframes(),a.needsMeasurement&&(Oc=!0)})}function hk(){zc=!0,o_(),s_(),zc=!1}class bp{constructor(s,i,l,p,g,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...s],this.onComplete=i,this.name=l,this.motionValue=p,this.element=g,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(Ma.add(this),Rc||(Rc=!0,qe.read(o_),qe.resolveKeyframes(s_))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:s,name:i,element:l,motionValue:p}=this;if(s[0]===null){const g=p==null?void 0:p.get(),d=s[s.length-1];if(g!==void 0)s[0]=g;else if(l&&i){const h=l.readValue(i,d);h!=null&&(s[0]=h)}s[0]===void 0&&(s[0]=d),p&&g===void 0&&p.set(s[0])}lk(s)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(s=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,s),Ma.delete(this)}cancel(){this.state==="scheduled"&&(Ma.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const bk=a=>a.startsWith("--");function i_(a,s,i){bk(s)?a.style.setProperty(s,i):a.style[s]=i}const fk={};function l_(a,s){const i=Nf(a);return()=>fk[s]??i()}const _k=l_(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),r_=l_(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),xo=([a,s,i,l])=>`cubic-bezier(${a}, ${s}, ${i}, ${l})`,ob={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:xo([0,.65,.55,1]),circOut:xo([.55,0,1,.45]),backIn:xo([.31,.01,.66,-.59]),backOut:xo([.33,1.53,.69,.99])};function u_(a,s){if(a)return typeof a=="function"?r_()?t_(a,s):"ease-out":Pf(a)?xo(a):Array.isArray(a)?a.map(i=>u_(i,s)||ob.easeOut):ob[a]}function xk(a,s,i,{delay:l=0,duration:p=300,repeat:g=0,repeatType:d="loop",ease:h="easeOut",times:f}={},b=void 0){const x={[s]:i};f&&(x.offset=f);const G=u_(h,p);Array.isArray(G)&&(x.easing=G);const k={delay:l,duration:p,easing:Array.isArray(G)?"linear":G,fill:"both",iterations:g+1,direction:d==="reverse"?"alternate":"normal"};return b&&(k.pseudoElement=b),a.animate(x,k)}function c_(a){return typeof a=="function"&&"applyToOptions"in a}function Gk({type:a,...s}){return c_(a)&&r_()?a.applyToOptions(s):(s.duration??(s.duration=300),s.ease??(s.ease="easeOut"),s)}class p_ extends hp{constructor(s){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!s)return;const{element:i,name:l,keyframes:p,pseudoElement:g,allowFlatten:d=!1,finalKeyframe:h,onComplete:f}=s;this.isPseudoElement=!!g,this.allowFlatten=d,this.options=s,ip(typeof s.type!="string");const b=Gk(s);this.animation=xk(i,l,p,b,g),b.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!g){const x=jl(p,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(x),i_(i,l,x),this.animation.cancel()}f==null||f(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var s,i;(i=(s=this.animation).finish)==null||i.call(s)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:s}=this;s==="idle"||s==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var i,l,p;const s=(i=this.options)==null?void 0:i.element;!this.isPseudoElement&&(s!=null&&s.isConnected)&&((p=(l=this.animation).commitStyles)==null||p.call(l))}get duration(){var i,l;const s=((l=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:l.call(i).duration)||0;return zt(Number(s))}get iterationDuration(){const{delay:s=0}=this.options||{};return this.duration+zt(s)}get time(){return zt(Number(this.animation.currentTime)||0)}set time(s){const i=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=jt(s),i&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(s){s<0&&(this.finishedTime=null),this.animation.playbackRate=s}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(s){this.manualStartTime=this.animation.startTime=s}attachTimeline({timeline:s,rangeStart:i,rangeEnd:l,observe:p}){var g;return this.allowFlatten&&((g=this.animation.effect)==null||g.updateTiming({easing:"linear"})),this.animation.onfinish=null,s&&_k()?(this.animation.timeline=s,i&&(this.animation.rangeStart=i),l&&(this.animation.rangeEnd=l),Lt):p(this)}}const d_={anticipate:Lf,backInOut:zf,circInOut:Bf};function kk(a){return a in d_}function yk(a){typeof a.ease=="string"&&kk(a.ease)&&(a.ease=d_[a.ease])}const cc=10;class vk extends p_{constructor(s){yk(s),a_(s),super(s),s.startTime!==void 0&&s.autoplay!==!1&&(this.startTime=s.startTime),this.options=s}updateMotionValue(s){const{motionValue:i,onUpdate:l,onComplete:p,element:g,...d}=this.options;if(!i)return;if(s!==void 0){i.set(s);return}const h=new Gl({...d,autoplay:!1}),f=Math.max(cc,ut.now()-this.startTime),b=tn(0,cc,f-cc),x=h.sample(f).value,{name:G}=this.options;g&&G&&i_(g,G,x),i.setWithVelocity(h.sample(Math.max(0,f-b)).value,x,b),h.stop()}}const ib=(a,s)=>s==="zIndex"?!1:!!(typeof a=="number"||Array.isArray(a)||typeof a=="string"&&(Kt.test(a)||a==="0")&&!a.startsWith("url("));function Mk(a){const s=a[0];if(a.length===1)return!0;for(let i=0;i<a.length;i++)if(a[i]!==s)return!0}function Tk(a,s,i,l){const p=a[0];if(p===null)return!1;if(s==="display"||s==="visibility")return!0;const g=a[a.length-1],d=ib(p,s),h=ib(g,s);return!d||!h?!1:Mk(a)||(i==="spring"||c_(i))&&l}function Lc(a){a.duration=0,a.type="keyframes"}const g_=new Set(["opacity","clipPath","filter","transform"]),Ak=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function Ik(a){for(let s=0;s<a.length;s++)if(typeof a[s]=="string"&&Ak.test(a[s]))return!0;return!1}const jk=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),Sk=Nf(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function Vk(a){var G;const{motionValue:s,name:i,repeatDelay:l,repeatType:p,damping:g,type:d,keyframes:h}=a;if(!(((G=s==null?void 0:s.owner)==null?void 0:G.current)instanceof HTMLElement))return!1;const{onUpdate:b,transformTemplate:x}=s.owner.getProps();return Sk()&&i&&(g_.has(i)||jk.has(i)&&Ik(h))&&(i!=="transform"||!x)&&!b&&!l&&p!=="mirror"&&g!==0&&d!=="inertia"}const qk=40;class wk extends hp{constructor({autoplay:s=!0,delay:i=0,type:l="keyframes",repeat:p=0,repeatDelay:g=0,repeatType:d="loop",keyframes:h,name:f,motionValue:b,element:x,...G}){var M;super(),this.stop=()=>{var S,I;this._animation&&(this._animation.stop(),(S=this.stopTimeline)==null||S.call(this)),(I=this.keyframeResolver)==null||I.cancel()},this.createdAt=ut.now();const k={autoplay:s,delay:i,type:l,repeat:p,repeatDelay:g,repeatType:d,name:f,motionValue:b,element:x,...G},v=(x==null?void 0:x.KeyframeResolver)||bp;this.keyframeResolver=new v(h,(S,I,E)=>this.onKeyframesResolved(S,I,k,!E),f,b,x),(M=this.keyframeResolver)==null||M.scheduleResolve()}onKeyframesResolved(s,i,l,p){var E,K;this.keyframeResolver=void 0;const{name:g,type:d,velocity:h,delay:f,isHandoff:b,onUpdate:x}=l;this.resolvedAt=ut.now();let G=!0;Tk(s,g,d,h)||(G=!1,(Jn.instantAnimations||!f)&&(x==null||x(jl(s,l,i))),s[0]=s[s.length-1],Lc(l),l.repeat=0);const v={startTime:p?this.resolvedAt?this.resolvedAt-this.createdAt>qk?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...l,keyframes:s},M=G&&!b&&Vk(v),S=(K=(E=v.motionValue)==null?void 0:E.owner)==null?void 0:K.current;let I;if(M)try{I=new vk({...v,element:S})}catch{I=new Gl(v)}else I=new Gl(v);I.finished.then(()=>{this.notifyFinished()}).catch(Lt),this.pendingTimeline&&(this.stopTimeline=I.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=I}get finished(){return this._animation?this.animation.finished:this._finished}then(s,i){return this.finished.finally(s).then(()=>{})}get animation(){var s;return this._animation||((s=this.keyframeResolver)==null||s.resume(),hk()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(s){this.animation.time=s}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(s){this.animation.speed=s}get startTime(){return this.animation.startTime}attachTimeline(s){return this._animation?this.stopTimeline=this.animation.attachTimeline(s):this.pendingTimeline=s,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var s;this._animation&&this.animation.cancel(),(s=this.keyframeResolver)==null||s.cancel()}}function m_(a,s,i,l=0,p=1){const g=Array.from(a).sort((b,x)=>b.sortNodePosition(x)).indexOf(s),d=a.size,h=(d-1)*l;return typeof i=="function"?i(g,d):p===1?g*l:h-g*l}const lb=30,Ek=a=>!isNaN(parseFloat(a));class Nk{constructor(s,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=l=>{var g;const p=ut.now();if(this.updatedAt!==p&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(l),this.current!==this.prev&&((g=this.events.change)==null||g.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(s),this.owner=i.owner}setCurrent(s){this.current=s,this.updatedAt=ut.now(),this.canTrackVelocity===null&&s!==void 0&&(this.canTrackVelocity=Ek(this.current))}setPrevFrameValue(s=this.current){this.prevFrameValue=s,this.prevUpdatedAt=this.updatedAt}onChange(s){return this.on("change",s)}on(s,i){this.events[s]||(this.events[s]=new lp);const l=this.events[s].add(i);return s==="change"?()=>{l(),qe.read(()=>{this.events.change.getSize()||this.stop()})}:l}clearListeners(){for(const s in this.events)this.events[s].clear()}attach(s,i){this.passiveEffect=s,this.stopPassiveEffect=i}set(s){this.passiveEffect?this.passiveEffect(s,this.updateAndNotify):this.updateAndNotify(s)}setWithVelocity(s,i,l){this.set(i),this.prev=void 0,this.prevFrameValue=s,this.prevUpdatedAt=this.updatedAt-l}jump(s,i=!0){this.updateAndNotify(s),this.prev=s,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var s;(s=this.events.change)==null||s.notify(this.current)}addDependent(s){this.dependents||(this.dependents=new Set),this.dependents.add(s)}removeDependent(s){this.dependents&&this.dependents.delete(s)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const s=ut.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||s-this.updatedAt>lb)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,lb);return Cf(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(s){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=s(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var s,i;(s=this.dependents)==null||s.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function fs(a,s){return new Nk(a,s)}function h_(a,s){if(a!=null&&a.inherit&&s){const{inherit:i,...l}=a;return{...s,...l}}return a}function fp(a,s){const i=(a==null?void 0:a[s])??(a==null?void 0:a.default)??a;return i!==a?h_(i,a):i}const Ck={type:"spring",stiffness:500,damping:25,restSpeed:10},Dk=a=>({type:"spring",stiffness:550,damping:a===0?2*Math.sqrt(550):30,restSpeed:10}),Hk={type:"keyframes",duration:.8},Rk={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Ok=(a,{keyframes:s})=>s.length>2?Hk:Gs.has(a)?a.startsWith("scale")?Dk(s[1]):Ck:Rk,zk=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function Lk(a){for(const s in a)if(!zk.has(s))return!0;return!1}const _p=(a,s,i,l={},p,g)=>d=>{const h=fp(l,a)||{},f=h.delay||l.delay||0;let{elapsed:b=0}=l;b=b-jt(f);const x={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:s.getVelocity(),...h,delay:-b,onUpdate:k=>{s.set(k),h.onUpdate&&h.onUpdate(k)},onComplete:()=>{d(),h.onComplete&&h.onComplete()},name:a,motionValue:s,element:g?void 0:p};Lk(h)||Object.assign(x,Ok(a,x)),x.duration&&(x.duration=jt(x.duration)),x.repeatDelay&&(x.repeatDelay=jt(x.repeatDelay)),x.from!==void 0&&(x.keyframes[0]=x.from);let G=!1;if((x.type===!1||x.duration===0&&!x.repeatDelay)&&(Lc(x),x.delay===0&&(G=!0)),(Jn.instantAnimations||Jn.skipAnimations||p!=null&&p.shouldSkipAnimations||h.skipAnimations)&&(G=!0,Lc(x),x.delay=0),x.allowFlatten=!h.type&&!h.ease,G&&!g&&s.get()!==void 0){const k=jl(x.keyframes,h);if(k!==void 0){qe.update(()=>{x.onUpdate(k),x.onComplete()});return}}return h.isSync?new Gl(x):new wk(x)},Uk=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Bk(a){const s=Uk.exec(a);if(!s)return[,];const[,i,l,p]=s;return[`--${i??l}`,p]}function b_(a,s,i=1){const[l,p]=Bk(a);if(!l)return;const g=window.getComputedStyle(s).getPropertyValue(l);if(g){const d=g.trim();return qf(d)?parseFloat(d):d}return cp(p)?b_(p,s,i+1):p}function rb(a){const s=[{},{}];return a==null||a.values.forEach((i,l)=>{s[0][l]=i.get(),s[1][l]=i.getVelocity()}),s}function xp(a,s,i,l){if(typeof s=="function"){const[p,g]=rb(l);s=s(i!==void 0?i:a.custom,p,g)}if(typeof s=="string"&&(s=a.variants&&a.variants[s]),typeof s=="function"){const[p,g]=rb(l);s=s(i!==void 0?i:a.custom,p,g)}return s}function Ta(a,s,i){const l=a.getProps();return xp(l,s,i!==void 0?i:l.custom,a)}const f_=new Set(["width","height","top","left","right","bottom",...xs]),Uc=a=>Array.isArray(a);function Yk(a,s,i){a.hasValue(s)?a.getValue(s).set(i):a.addValue(s,fs(i))}function Pk(a){return Uc(a)?a[a.length-1]||0:a}function Xk(a,s){const i=Ta(a,s);let{transitionEnd:l={},transition:p={},...g}=i||{};g={...g,...l};for(const d in g){const h=Pk(g[d]);Yk(a,d,h)}}const ot=a=>!!(a&&a.getVelocity);function Kk(a){return!!(ot(a)&&a.add)}function Bc(a,s){const i=a.getValue("willChange");if(Kk(i))return i.add(s);if(!i&&Jn.WillChange){const l=new Jn.WillChange("auto");a.addValue("willChange",l),l.add(s)}}function Gp(a){return a.replace(/([A-Z])/g,s=>`-${s.toLowerCase()}`)}const Zk="framerAppearId",__="data-"+Gp(Zk);function x_(a){return a.props[__]}function Fk({protectedKeys:a,needsAnimating:s},i){const l=a.hasOwnProperty(i)&&s[i]!==!0;return s[i]=!1,l}function G_(a,s,{delay:i=0,transitionOverride:l,type:p}={}){let{transition:g,transitionEnd:d,...h}=s;const f=a.getDefaultTransition();g=g?h_(g,f):f;const b=g==null?void 0:g.reduceMotion,x=g==null?void 0:g.skipAnimations;l&&(g=l);const G=[],k=p&&a.animationState&&a.animationState.getState()[p],v=g==null?void 0:g.path;v&&v.animateVisualElement(a,h,g,i,G);for(const M in h){const S=a.getValue(M,a.latestValues[M]??null),I=h[M];if(I===void 0||k&&Fk(k,M))continue;const E={delay:i,...fp(g||{},M)};x&&(E.skipAnimations=!0);const K=S.get();if(K!==void 0&&!S.isAnimating()&&!Array.isArray(I)&&I===K&&!E.velocity){qe.update(()=>S.set(I));continue}let O=!1;if(window.MotionHandoffAnimation){const P=x_(a);if(P){const H=window.MotionHandoffAnimation(P,M,qe);H!==null&&(E.startTime=H,O=!0)}}Bc(a,M);const C=b??a.shouldReduceMotion;S.start(_p(M,S,I,C&&f_.has(M)?{type:!1}:E,a,O));const z=S.animation;z&&G.push(z)}if(d){const M=()=>qe.update(()=>{d&&Xk(a,d)});G.length?Promise.all(G).then(M):M()}return G}function Yc(a,s,i={}){var f;const l=Ta(a,s,i.type==="exit"?(f=a.presenceContext)==null?void 0:f.custom:void 0);let{transition:p=a.getDefaultTransition()||{}}=l||{};i.transitionOverride&&(p=i.transitionOverride);const g=l?()=>Promise.all(G_(a,l,i)):()=>Promise.resolve(),d=a.variantChildren&&a.variantChildren.size?(b=0)=>{const{delayChildren:x=0,staggerChildren:G,staggerDirection:k}=p;return Qk(a,s,b,x,G,k,i)}:()=>Promise.resolve(),{when:h}=p;if(h){const[b,x]=h==="beforeChildren"?[g,d]:[d,g];return b().then(()=>x())}else return Promise.all([g(),d(i.delay)])}function Qk(a,s,i=0,l=0,p=0,g=1,d){const h=[];for(const f of a.variantChildren)f.notify("AnimationStart",s),h.push(Yc(f,s,{...d,delay:i+(typeof l=="function"?0:l)+m_(a.variantChildren,f,l,p,g)}).then(()=>f.notify("AnimationComplete",s)));return Promise.all(h)}function Jk(a,s,i={}){a.notify("AnimationStart",s);let l;if(Array.isArray(s)){const p=s.map(g=>Yc(a,g,i));l=Promise.all(p)}else if(typeof s=="string")l=Yc(a,s,i);else{const p=typeof s=="function"?Ta(a,s,i.custom):s;l=Promise.all(G_(a,p,i))}return l.then(()=>{a.notify("AnimationComplete",s)})}const $k={test:a=>a==="auto",parse:a=>a},k_=a=>s=>s.test(a),y_=[_s,ee,en,kn,MG,vG,$k],ub=a=>y_.find(k_(a));function Wk(a){return typeof a=="number"?a===0:a!==null?a==="none"||a==="0"||Ef(a):!0}const ey=new Set(["brightness","contrast","saturate","opacity"]);function ty(a){const[s,i]=a.slice(0,-1).split("(");if(s==="drop-shadow")return a;const[l]=i.match(pp)||[];if(!l)return a;const p=i.replace(l,"");let g=ey.has(s)?1:0;return l!==i&&(g*=100),s+"("+g+p+")"}const ny=/\b([a-z-]*)\(.*?\)/gu,Pc={...Kt,getAnimatableNone:a=>{const s=a.match(ny);return s?s.map(ty).join(" "):a}},Xc={...Kt,getAnimatableNone:a=>{const s=Kt.parse(a);return Kt.createTransformer(a)(s.map(l=>typeof l=="number"?0:typeof l=="object"?{...l,alpha:1}:l))}},cb={..._s,transform:Math.round},ay={rotate:kn,pathRotation:kn,rotateX:kn,rotateY:kn,rotateZ:kn,scale:$i,scaleX:$i,scaleY:$i,scaleZ:$i,skew:kn,skewX:kn,skewY:kn,distance:ee,translateX:ee,translateY:ee,translateZ:ee,x:ee,y:ee,z:ee,perspective:ee,transformPerspective:ee,opacity:Ao,originX:Qh,originY:Qh,originZ:ee},kl={borderWidth:ee,borderTopWidth:ee,borderRightWidth:ee,borderBottomWidth:ee,borderLeftWidth:ee,borderRadius:ee,borderTopLeftRadius:ee,borderTopRightRadius:ee,borderBottomRightRadius:ee,borderBottomLeftRadius:ee,width:ee,maxWidth:ee,height:ee,maxHeight:ee,top:ee,right:ee,bottom:ee,left:ee,inset:ee,insetBlock:ee,insetBlockStart:ee,insetBlockEnd:ee,insetInline:ee,insetInlineStart:ee,insetInlineEnd:ee,padding:ee,paddingTop:ee,paddingRight:ee,paddingBottom:ee,paddingLeft:ee,paddingBlock:ee,paddingBlockStart:ee,paddingBlockEnd:ee,paddingInline:ee,paddingInlineStart:ee,paddingInlineEnd:ee,margin:ee,marginTop:ee,marginRight:ee,marginBottom:ee,marginLeft:ee,marginBlock:ee,marginBlockStart:ee,marginBlockEnd:ee,marginInline:ee,marginInlineStart:ee,marginInlineEnd:ee,fontSize:ee,backgroundPositionX:ee,backgroundPositionY:ee,...ay,zIndex:cb,fillOpacity:Ao,strokeOpacity:Ao,numOctaves:cb},sy={...kl,color:Ze,backgroundColor:Ze,outlineColor:Ze,fill:Ze,stroke:Ze,borderColor:Ze,borderTopColor:Ze,borderRightColor:Ze,borderBottomColor:Ze,borderLeftColor:Ze,filter:Pc,WebkitFilter:Pc,mask:Xc,WebkitMask:Xc},v_=a=>sy[a],oy=new Set([Pc,Xc]);function M_(a,s){let i=v_(a);return oy.has(i)||(i=Kt),i.getAnimatableNone?i.getAnimatableNone(s):void 0}const iy=new Set(["auto","none","0"]);function ly(a,s,i){let l=0,p;for(;l<a.length&&!p;){const g=a[l];typeof g=="string"&&!iy.has(g)&&bs(g).values.length&&(p=a[l]),l++}if(p&&i)for(const g of s)a[g]=M_(i,p)}class ry extends bp{constructor(s,i,l,p,g){super(s,i,l,p,g,!0)}readKeyframes(){const{unresolvedKeyframes:s,element:i,name:l}=this;if(!i||!i.current)return;super.readKeyframes();for(let x=0;x<s.length;x++){let G=s[x];if(typeof G=="string"&&(G=G.trim(),cp(G))){const k=b_(G,i.current);k!==void 0&&(s[x]=k),x===s.length-1&&(this.finalKeyframe=G)}}if(this.resolveNoneKeyframes(),!f_.has(l)||s.length!==2)return;const[p,g]=s,d=ub(p),h=ub(g),f=Fh(p),b=Fh(g);if(f!==b&&Qn[l]){this.needsMeasurement=!0;return}if(d!==h)if(sb(d)&&sb(h))for(let x=0;x<s.length;x++){const G=s[x];typeof G=="string"&&(s[x]=parseFloat(G))}else Qn[l]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:s,name:i}=this,l=[];for(let p=0;p<s.length;p++)(s[p]===null||Wk(s[p]))&&l.push(p);l.length&&ly(s,l,i)}measureInitialState(){const{element:s,unresolvedKeyframes:i,name:l}=this;if(!s||!s.current)return;l==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Qn[l](s.measureViewportBox(),window.getComputedStyle(s.current)),i[0]=this.measuredOrigin;const p=i[i.length-1];p!==void 0&&s.getValue(l,p).jump(p,!1)}measureEndState(){var h;const{element:s,name:i,unresolvedKeyframes:l}=this;if(!s||!s.current)return;const p=s.getValue(i);p&&p.jump(this.measuredOrigin,!1);const g=l.length-1,d=l[g];l[g]=Qn[i](s.measureViewportBox(),window.getComputedStyle(s.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([f,b])=>{s.getValue(f).set(b)}),this.resolveNoneKeyframes()}}function T_(a,s,i){if(a==null)return[];if(a instanceof EventTarget)return[a];if(typeof a=="string"){let l=document;const p=(i==null?void 0:i[a])??l.querySelectorAll(a);return p?Array.from(p):[]}return Array.from(a).filter(l=>l!=null)}const Kc=(a,s)=>s&&typeof a=="number"?s.transform(a):a;function il(a){return wf(a)&&"offsetHeight"in a&&!("ownerSVGElement"in a)}const{schedule:kp}=Xf(queueMicrotask,!1),Xt={x:!1,y:!1};function A_(){return Xt.x||Xt.y}function uy(a){return a==="x"||a==="y"?Xt[a]?null:(Xt[a]=!0,()=>{Xt[a]=!1}):Xt.x||Xt.y?null:(Xt.x=Xt.y=!0,()=>{Xt.x=Xt.y=!1})}function I_(a,s){const i=T_(a),l=new AbortController,p={passive:!0,...s,signal:l.signal};return[i,p,()=>l.abort()]}function cy(a){return!(a.pointerType==="touch"||A_())}function py(a,s,i={}){const[l,p,g]=I_(a,i);return l.forEach(d=>{let h=!1,f=!1,b;const x=()=>{d.removeEventListener("pointerleave",M)},G=I=>{b&&(b(I),b=void 0),x()},k=I=>{h=!1,window.removeEventListener("pointerup",k),window.removeEventListener("pointercancel",k),f&&(f=!1,G(I))},v=()=>{h=!0,window.addEventListener("pointerup",k,p),window.addEventListener("pointercancel",k,p)},M=I=>{if(I.pointerType!=="touch"){if(h){f=!0;return}G(I)}},S=I=>{if(!cy(I))return;f=!1;const E=s(d,I);typeof E=="function"&&(b=E,d.addEventListener("pointerleave",M,p))};d.addEventListener("pointerenter",S,p),d.addEventListener("pointerdown",v,p)}),g}const j_=(a,s)=>s?a===s?!0:j_(a,s.parentElement):!1,yp=a=>a.pointerType==="mouse"?typeof a.button!="number"||a.button<=0:a.isPrimary!==!1,dy=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function gy(a){return dy.has(a.tagName)||a.isContentEditable===!0}const my=new Set(["INPUT","SELECT","TEXTAREA"]);function hy(a){return my.has(a.tagName)||a.isContentEditable===!0}const ll=new WeakSet;function pb(a){return s=>{s.key==="Enter"&&a(s)}}function pc(a,s){a.dispatchEvent(new PointerEvent("pointer"+s,{isPrimary:!0,bubbles:!0}))}const by=(a,s)=>{const i=a.currentTarget;if(!i)return;const l=pb(()=>{if(ll.has(i))return;pc(i,"down");const p=pb(()=>{pc(i,"up")}),g=()=>pc(i,"cancel");i.addEventListener("keyup",p,s),i.addEventListener("blur",g,s)});i.addEventListener("keydown",l,s),i.addEventListener("blur",()=>i.removeEventListener("keydown",l),s)};function db(a){return yp(a)&&!A_()}const gb=new WeakSet;function fy(a,s,i={}){const[l,p,g]=I_(a,i),d=h=>{const f=h.currentTarget;if(!db(h)||gb.has(h))return;ll.add(f),i.stopPropagation&&gb.add(h);const b=s(f,h),x=(v,M)=>{window.removeEventListener("pointerup",G),window.removeEventListener("pointercancel",k),ll.has(f)&&ll.delete(f),db(v)&&typeof b=="function"&&b(v,{success:M})},G=v=>{x(v,f===window||f===document||i.useGlobalTarget||j_(f,v.target))},k=v=>{x(v,!1)};window.addEventListener("pointerup",G,p),window.addEventListener("pointercancel",k,p)};return l.forEach(h=>{(i.useGlobalTarget?window:h).addEventListener("pointerdown",d,p),il(h)&&(h.addEventListener("focus",b=>by(b,p)),!gy(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),g}function vp(a){return wf(a)&&"ownerSVGElement"in a}const rl=new WeakMap;let Zn;const S_=(a,s,i)=>(l,p)=>p&&p[0]?p[0][a+"Size"]:vp(l)&&"getBBox"in l?l.getBBox()[s]:l[i],_y=S_("inline","width","offsetWidth"),xy=S_("block","height","offsetHeight");function Gy({target:a,borderBoxSize:s}){var i;(i=rl.get(a))==null||i.forEach(l=>{l(a,{get width(){return _y(a,s)},get height(){return xy(a,s)}})})}function ky(a){a.forEach(Gy)}function yy(){typeof ResizeObserver>"u"||(Zn=new ResizeObserver(ky))}function vy(a,s){Zn||yy();const i=T_(a);return i.forEach(l=>{let p=rl.get(l);p||(p=new Set,rl.set(l,p)),p.add(s),Zn==null||Zn.observe(l)}),()=>{i.forEach(l=>{const p=rl.get(l);p==null||p.delete(s),p!=null&&p.size||Zn==null||Zn.unobserve(l)})}}const ul=new Set;let ms;function My(){ms=()=>{const a={get width(){return window.innerWidth},get height(){return window.innerHeight}};ul.forEach(s=>s(a))},window.addEventListener("resize",ms)}function Ty(a){return ul.add(a),ms||My(),()=>{ul.delete(a),!ul.size&&typeof ms=="function"&&(window.removeEventListener("resize",ms),ms=void 0)}}function mb(a,s){return typeof a=="function"?Ty(a):vy(a,s)}function Ay(a){return vp(a)&&a.tagName==="svg"}const Iy=[...y_,Ze,Kt],jy=a=>Iy.find(k_(a)),hb=()=>({translate:0,scale:1,origin:0,originPoint:0}),hs=()=>({x:hb(),y:hb()}),bb=()=>({min:0,max:0}),Qe=()=>({x:bb(),y:bb()}),Sy=new WeakMap;function Sl(a){return a!==null&&typeof a=="object"&&typeof a.start=="function"}function Io(a){return typeof a=="string"||Array.isArray(a)}const Mp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Tp=["initial",...Mp];function Vl(a){return Sl(a.animate)||Tp.some(s=>Io(a[s]))}function V_(a){return!!(Vl(a)||a.variants)}function Vy(a,s,i){for(const l in s){const p=s[l],g=i[l];if(ot(p))a.addValue(l,p);else if(ot(g))a.addValue(l,fs(p,{owner:a}));else if(g!==p)if(a.hasValue(l)){const d=a.getValue(l);d.liveStyle===!0?d.jump(p):d.hasAnimated||d.set(p)}else{const d=a.getStaticValue(l);a.addValue(l,fs(d!==void 0?d:p,{owner:a}))}}for(const l in i)s[l]===void 0&&a.removeValue(l);return s}const Zc={current:null},q_={current:!1},qy=typeof window<"u";function wy(){if(q_.current=!0,!!qy)if(window.matchMedia){const a=window.matchMedia("(prefers-reduced-motion)"),s=()=>Zc.current=a.matches;a.addEventListener("change",s),s()}else Zc.current=!1}const fb=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let yl={};function w_(a){yl=a}function Ey(){return yl}class Ny{scrapeMotionValuesFromProps(s,i,l){return{}}constructor({parent:s,props:i,presenceContext:l,reducedMotionConfig:p,skipAnimations:g,blockInitialAnimation:d,visualState:h},f={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=bp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const v=ut.now();this.renderScheduledAt<v&&(this.renderScheduledAt=v,qe.render(this.render,!1,!0))};const{latestValues:b,renderState:x}=h;this.latestValues=b,this.baseTarget={...b},this.initialValues=i.initial?{...b}:{},this.renderState=x,this.parent=s,this.props=i,this.presenceContext=l,this.depth=s?s.depth+1:0,this.reducedMotionConfig=p,this.skipAnimationsConfig=g,this.options=f,this.blockInitialAnimation=!!d,this.isControllingVariants=Vl(i),this.isVariantNode=V_(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(s&&s.current);const{willChange:G,...k}=this.scrapeMotionValuesFromProps(i,{},this);for(const v in k){const M=k[v];b[v]!==void 0&&ot(M)&&M.set(b[v])}}mount(s){var i,l;if(this.hasBeenMounted)for(const p in this.initialValues)(i=this.values.get(p))==null||i.jump(this.initialValues[p]),this.latestValues[p]=this.initialValues[p];this.current=s,Sy.set(s,this),this.projection&&!this.projection.instance&&this.projection.mount(s),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((p,g)=>this.bindToMotionValue(g,p)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(q_.current||wy(),this.shouldReduceMotion=Zc.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(l=this.parent)==null||l.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var s;this.projection&&this.projection.unmount(),$n(this.notifyUpdate),$n(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(s=this.parent)==null||s.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const l=this.features[i];l&&(l.unmount(),l.isMounted=!1)}this.current=null}addChild(s){this.children.add(s),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(s)}removeChild(s){this.children.delete(s),this.enteringChildren&&this.enteringChildren.delete(s)}bindToMotionValue(s,i){if(this.valueSubscriptions.has(s)&&this.valueSubscriptions.get(s)(),i.accelerate&&g_.has(s)&&this.current instanceof HTMLElement){const{factory:d,keyframes:h,times:f,ease:b,duration:x}=i.accelerate,G=new p_({element:this.current,name:s,keyframes:h,times:f,ease:b,duration:jt(x)}),k=d(G);this.valueSubscriptions.set(s,()=>{k(),G.cancel()});return}const l=Gs.has(s);l&&this.onBindTransform&&this.onBindTransform();const p=i.on("change",d=>{this.latestValues[s]=d,this.props.onUpdate&&qe.preRender(this.notifyUpdate),l&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let g;typeof window<"u"&&window.MotionCheckAppearSync&&(g=window.MotionCheckAppearSync(this,s,i)),this.valueSubscriptions.set(s,()=>{p(),g&&g()})}sortNodePosition(s){return!this.current||!this.sortInstanceNodePosition||this.type!==s.type?0:this.sortInstanceNodePosition(this.current,s.current)}updateFeatures(){let s="animation";for(s in yl){const i=yl[s];if(!i)continue;const{isEnabled:l,Feature:p}=i;if(!this.features[s]&&p&&l(this.props)&&(this.features[s]=new p(this)),this.features[s]){const g=this.features[s];g.isMounted?g.update():(g.mount(),g.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Qe()}getStaticValue(s){return this.latestValues[s]}setStaticValue(s,i){this.latestValues[s]=i}update(s,i){(s.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=s,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let l=0;l<fb.length;l++){const p=fb[l];this.propEventSubscriptions[p]&&(this.propEventSubscriptions[p](),delete this.propEventSubscriptions[p]);const g="on"+p,d=s[g];d&&(this.propEventSubscriptions[p]=this.on(p,d))}this.prevMotionValues=Vy(this,this.scrapeMotionValuesFromProps(s,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(s){return this.props.variants?this.props.variants[s]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(s){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(s),()=>i.variantChildren.delete(s)}addValue(s,i){const l=this.values.get(s);i!==l&&(l&&this.removeValue(s),this.bindToMotionValue(s,i),this.values.set(s,i),this.latestValues[s]=i.get())}removeValue(s){this.values.delete(s);const i=this.valueSubscriptions.get(s);i&&(i(),this.valueSubscriptions.delete(s)),delete this.latestValues[s],this.removeValueFromRenderState(s,this.renderState)}hasValue(s){return this.values.has(s)}getValue(s,i){if(this.props.values&&this.props.values[s])return this.props.values[s];let l=this.values.get(s);return l===void 0&&i!==void 0&&(l=fs(i===null?void 0:i,{owner:this}),this.addValue(s,l)),l}readValue(s,i){let l=this.latestValues[s]!==void 0||!this.current?this.latestValues[s]:this.getBaseTargetFromProps(this.props,s)??this.readValueFromInstance(this.current,s,this.options);return l!=null&&(typeof l=="string"&&(qf(l)||Ef(l))?l=parseFloat(l):!jy(l)&&Kt.test(i)&&(l=M_(s,i)),this.setBaseTarget(s,ot(l)?l.get():l)),ot(l)?l.get():l}setBaseTarget(s,i){this.baseTarget[s]=i}getBaseTarget(s){var g;const{initial:i}=this.props;let l;if(typeof i=="string"||typeof i=="object"){const d=xp(this.props,i,(g=this.presenceContext)==null?void 0:g.custom);d&&(l=d[s])}if(i&&l!==void 0)return l;const p=this.getBaseTargetFromProps(this.props,s);return p!==void 0&&!ot(p)?p:this.initialValues[s]!==void 0&&l===void 0?void 0:this.baseTarget[s]}on(s,i){return this.events[s]||(this.events[s]=new lp),this.events[s].add(i)}notify(s,...i){this.events[s]&&this.events[s].notify(...i)}scheduleRenderMicrotask(){kp.render(this.render)}}class E_ extends Ny{constructor(){super(...arguments),this.KeyframeResolver=ry}sortInstanceNodePosition(s,i){return s.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(s,i){const l=s.style;return l?l[i]:void 0}removeValueFromRenderState(s,{vars:i,style:l}){delete i[s],delete l[s]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:s}=this.props;ot(s)&&(this.childSubscription=s.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}class Wn{constructor(s){this.isMounted=!1,this.node=s}update(){}}function N_({top:a,left:s,right:i,bottom:l}){return{x:{min:s,max:i},y:{min:a,max:l}}}function Cy({x:a,y:s}){return{top:s.min,right:a.max,bottom:s.max,left:a.min}}function Dy(a,s){if(!s)return a;const i=s({x:a.left,y:a.top}),l=s({x:a.right,y:a.bottom});return{top:i.y,left:i.x,bottom:l.y,right:l.x}}function dc(a){return a===void 0||a===1}function Fc({scale:a,scaleX:s,scaleY:i}){return!dc(a)||!dc(s)||!dc(i)}function ka(a){return Fc(a)||C_(a)||a.z||a.rotate||a.rotateX||a.rotateY||a.skewX||a.skewY}function C_(a){return _b(a.x)||_b(a.y)}function _b(a){return a&&a!=="0%"}function vl(a,s,i){const l=a-i,p=s*l;return i+p}function xb(a,s,i,l,p){return p!==void 0&&(a=vl(a,p,l)),vl(a,i,l)+s}function Qc(a,s=0,i=1,l,p){a.min=xb(a.min,s,i,l,p),a.max=xb(a.max,s,i,l,p)}function D_(a,{x:s,y:i}){Qc(a.x,s.translate,s.scale,s.originPoint),Qc(a.y,i.translate,i.scale,i.originPoint)}const Gb=.999999999999,kb=1.0000000000001;function Hy(a,s,i,l=!1){var h;const p=i.length;if(!p)return;s.x=s.y=1;let g,d;for(let f=0;f<p;f++){g=i[f],d=g.projectionDelta;const{visualElement:b}=g.options;b&&b.props.style&&b.props.style.display==="contents"||(l&&g.options.layoutScroll&&g.scroll&&g!==g.root&&(Wt(a.x,-g.scroll.offset.x),Wt(a.y,-g.scroll.offset.y)),d&&(s.x*=d.x.scale,s.y*=d.y.scale,D_(a,d)),l&&ka(g.latestValues)&&cl(a,g.latestValues,(h=g.layout)==null?void 0:h.layoutBox))}s.x<kb&&s.x>Gb&&(s.x=1),s.y<kb&&s.y>Gb&&(s.y=1)}function Wt(a,s){a.min+=s,a.max+=s}function yb(a,s,i,l,p=.5){const g=Ve(a.min,a.max,p);Qc(a,s,i,g,l)}function vb(a,s){return typeof a=="string"?parseFloat(a)/100*(s.max-s.min):a}function cl(a,s,i){const l=i??a;yb(a.x,vb(s.x,l.x),s.scaleX,s.scale,s.originX),yb(a.y,vb(s.y,l.y),s.scaleY,s.scale,s.originY)}function H_(a,s){return N_(Dy(a.getBoundingClientRect(),s))}function Ry(a,s,i){const l=H_(a,i),{scroll:p}=s;return p&&(Wt(l.x,p.offset.x),Wt(l.y,p.offset.y)),l}const Oy={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},zy=xs.length;function Ly(a,s,i){let l="",p=!0;for(let d=0;d<zy;d++){const h=xs[d],f=a[h];if(f===void 0)continue;let b=!0;if(typeof f=="number")b=f===(h.startsWith("scale")?1:0);else{const x=parseFloat(f);b=h.startsWith("scale")?x===1:x===0}if(!b||i){const x=Kc(f,kl[h]);if(!b){p=!1;const G=Oy[h]||h;l+=`${G}(${x}) `}i&&(s[h]=x)}}const g=a.pathRotation;return g&&(p=!1,l+=`rotate(${Kc(g,kl.pathRotation)}) `),l=l.trim(),i?l=i(s,p?"":l):p&&(l="none"),l}function Ap(a,s,i){const{style:l,vars:p,transformOrigin:g}=a;let d=!1,h=!1;for(const f in s){const b=s[f];if(Gs.has(f)){d=!0;continue}else if(Zf(f)){p[f]=b;continue}else{const x=Kc(b,kl[f]);f.startsWith("origin")?(h=!0,g[f]=x):l[f]=x}}if(s.transform||(d||i?l.transform=Ly(s,a.transform,i):l.transform&&(l.transform="none")),h){const{originX:f="50%",originY:b="50%",originZ:x=0}=g;l.transformOrigin=`${f} ${b} ${x}`}}function R_(a,{style:s,vars:i},l,p){const g=a.style;let d;for(d in s)g[d]=s[d];p==null||p.applyProjectionStyles(g,l);for(d in i)g.setProperty(d,i[d])}function Mb(a,s){return s.max===s.min?0:a/(s.max-s.min)*100}const _o={correct:(a,s)=>{if(!s.target)return a;if(typeof a=="string")if(ee.test(a))a=parseFloat(a);else return a;const i=Mb(a,s.target.x),l=Mb(a,s.target.y);return`${i}% ${l}%`}},Uy={correct:(a,{treeScale:s,projectionDelta:i})=>{const l=a,p=Kt.parse(a);if(p.length>5)return l;const g=Kt.createTransformer(a),d=typeof p[0]!="number"?1:0,h=i.x.scale*s.x,f=i.y.scale*s.y;p[0+d]/=h,p[1+d]/=f;const b=Ve(h,f,.5);return typeof p[2+d]=="number"&&(p[2+d]/=b),typeof p[3+d]=="number"&&(p[3+d]/=b),g(p)}},Jc={borderRadius:{..._o,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:_o,borderTopRightRadius:_o,borderBottomLeftRadius:_o,borderBottomRightRadius:_o,boxShadow:Uy};function O_(a,{layout:s,layoutId:i}){return Gs.has(a)||a.startsWith("origin")||(s||i!==void 0)&&(!!Jc[a]||a==="opacity")}function Ip(a,s,i){var d;const l=a.style,p=s==null?void 0:s.style,g={};if(!l)return g;for(const h in l)(ot(l[h])||p&&ot(p[h])||O_(h,a)||((d=i==null?void 0:i.getValue(h))==null?void 0:d.liveStyle)!==void 0)&&(g[h]=l[h]);return g}function By(a){return window.getComputedStyle(a)}class Yy extends E_{constructor(){super(...arguments),this.type="html",this.renderInstance=R_}readValueFromInstance(s,i){var l;if(Gs.has(i))return(l=this.projection)!=null&&l.isProjecting?Dc(i):ck(s,i);{const p=By(s),g=(Zf(i)?p.getPropertyValue(i):p[i])||0;return typeof g=="string"?g.trim():g}}measureInstanceViewportBox(s,{transformPagePoint:i}){return H_(s,i)}build(s,i,l){Ap(s,i,l.transformTemplate)}scrapeMotionValuesFromProps(s,i,l){return Ip(s,i,l)}}const Py={offset:"stroke-dashoffset",array:"stroke-dasharray"},Xy={offset:"strokeDashoffset",array:"strokeDasharray"};function Ky(a,s,i=1,l=0,p=!0){a.pathLength=1;const g=p?Py:Xy;a[g.offset]=`${-l}`,a[g.array]=`${s} ${i}`}const Zy=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function z_(a,{attrX:s,attrY:i,attrScale:l,pathLength:p,pathSpacing:g=1,pathOffset:d=0,...h},f,b,x){if(Ap(a,h,b),f){a.style.viewBox&&(a.attrs.viewBox=a.style.viewBox);return}a.attrs=a.style,a.style={};const{attrs:G,style:k}=a;G.transform&&(k.transform=G.transform,delete G.transform),(k.transform||G.transformOrigin)&&(k.transformOrigin=G.transformOrigin??"50% 50%",delete G.transformOrigin),k.transform&&(k.transformBox=(x==null?void 0:x.transformBox)??"fill-box",delete G.transformBox);for(const v of Zy)G[v]!==void 0&&(k[v]=G[v],delete G[v]);s!==void 0&&(G.x=s),i!==void 0&&(G.y=i),l!==void 0&&(G.scale=l),p!==void 0&&Ky(G,p,g,d,!1)}const L_=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),U_=a=>typeof a=="string"&&a.toLowerCase()==="svg";function Fy(a,s,i,l){R_(a,s,void 0,l);for(const p in s.attrs)a.setAttribute(L_.has(p)?p:Gp(p),s.attrs[p])}function B_(a,s,i){const l=Ip(a,s,i);for(const p in a)if(ot(a[p])||ot(s[p])){const g=xs.indexOf(p)!==-1?"attr"+p.charAt(0).toUpperCase()+p.substring(1):p;l[g]=a[p]}return l}class Qy extends E_{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Qe}getBaseTargetFromProps(s,i){return s[i]}readValueFromInstance(s,i){if(Gs.has(i)){const l=v_(i);return l&&l.default||0}return i=L_.has(i)?i:Gp(i),s.getAttribute(i)}scrapeMotionValuesFromProps(s,i,l){return B_(s,i,l)}build(s,i,l){z_(s,i,this.isSVGTag,l.transformTemplate,l.style)}renderInstance(s,i,l,p){Fy(s,i,l,p)}mount(s){this.isSVGTag=U_(s.tagName),super.mount(s)}}const Jy=Tp.length;function Y_(a){if(!a)return;if(!a.isControllingVariants){const i=a.parent?Y_(a.parent)||{}:{};return a.props.initial!==void 0&&(i.initial=a.props.initial),i}const s={};for(let i=0;i<Jy;i++){const l=Tp[i],p=a.props[l];(Io(p)||p===!1)&&(s[l]=p)}return s}function P_(a,s){if(!Array.isArray(s))return!1;const i=s.length;if(i!==a.length)return!1;for(let l=0;l<i;l++)if(s[l]!==a[l])return!1;return!0}const $y=[...Mp].reverse(),Wy=Mp.length;function e3(a){return s=>Promise.all(s.map(({animation:i,options:l})=>Jk(a,i,l)))}function t3(a){let s=e3(a),i=Tb(),l=!0,p=!1;const g=b=>(x,G)=>{var v;const k=Ta(a,G,b==="exit"?(v=a.presenceContext)==null?void 0:v.custom:void 0);if(k){const{transition:M,transitionEnd:S,...I}=k;x={...x,...I,...S}}return x};function d(b){s=b(a)}function h(b){const{props:x}=a,G=Y_(a.parent)||{},k=[],v=new Set;let M={},S=1/0;for(let E=0;E<Wy;E++){const K=$y[E],O=i[K],C=x[K]!==void 0?x[K]:G[K],z=Io(C),P=K===b?O.isActive:null;P===!1&&(S=E);let H=C===G[K]&&C!==x[K]&&z;if(H&&(l||p)&&a.manuallyAnimateOnMount&&(H=!1),O.protectedKeys={...M},!O.isActive&&P===null||!C&&!O.prevProp||Sl(C)||typeof C=="boolean")continue;if(K==="exit"&&O.isActive&&P!==!0){O.prevResolvedValues&&(M={...M,...O.prevResolvedValues});continue}const X=n3(O.prevProp,C);let Z=X||K===b&&O.isActive&&!H&&z||E>S&&z,F=!1;const oe=Array.isArray(C)?C:[C];let pe=oe.reduce(g(K),{});P===!1&&(pe={});const{prevResolvedValues:Be={}}=O,Ce={...Be,...pe},Oe=$=>{Z=!0,v.has($)&&(F=!0,v.delete($)),O.needsAnimating[$]=!0;const ue=a.getValue($);ue&&(ue.liveStyle=!1)};for(const $ in Ce){const ue=pe[$],_e=Be[$];if(M.hasOwnProperty($))continue;let A=!1;Uc(ue)&&Uc(_e)?A=!P_(ue,_e)||X:A=ue!==_e,A?ue!=null?Oe($):v.add($):ue!==void 0&&v.has($)?Oe($):O.protectedKeys[$]=!0}O.prevProp=C,O.prevResolvedValues=pe,O.isActive&&(M={...M,...pe}),(l||p)&&a.blockInitialAnimation&&(Z=!1);const D=H&&X;Z&&(!D||F)&&k.push(...oe.map($=>{const ue={type:K};if(typeof $=="string"&&(l||p)&&!D&&a.manuallyAnimateOnMount&&a.parent){const{parent:_e}=a,A=Ta(_e,$);if(_e.enteringChildren&&A){const{delayChildren:B}=A.transition||{};ue.delay=m_(_e.enteringChildren,a,B)}}return{animation:$,options:ue}}))}if(v.size){const E={};if(typeof x.initial!="boolean"){const K=Ta(a,Array.isArray(x.initial)?x.initial[0]:x.initial);K&&K.transition&&(E.transition=K.transition)}v.forEach(K=>{const O=a.getBaseTarget(K),C=a.getValue(K);C&&(C.liveStyle=!0),E[K]=O??null}),k.push({animation:E})}let I=!!k.length;return l&&(x.initial===!1||x.initial===x.animate)&&!a.manuallyAnimateOnMount&&(I=!1),l=!1,p=!1,I?s(k):Promise.resolve()}function f(b,x){var k;if(i[b].isActive===x)return Promise.resolve();(k=a.variantChildren)==null||k.forEach(v=>{var M;return(M=v.animationState)==null?void 0:M.setActive(b,x)}),i[b].isActive=x;const G=h(b);for(const v in i)i[v].protectedKeys={};return G}return{animateChanges:h,setActive:f,setAnimateFunction:d,getState:()=>i,reset:()=>{i=Tb(),p=!0}}}function n3(a,s){return typeof s=="string"?s!==a:Array.isArray(s)?!P_(s,a):!1}function Ga(a=!1){return{isActive:a,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Tb(){return{animate:Ga(!0),whileInView:Ga(),whileHover:Ga(),whileTap:Ga(),whileDrag:Ga(),whileFocus:Ga(),exit:Ga()}}function $c(a,s){a.min=s.min,a.max=s.max}function Pt(a,s){$c(a.x,s.x),$c(a.y,s.y)}function Ab(a,s){a.translate=s.translate,a.scale=s.scale,a.originPoint=s.originPoint,a.origin=s.origin}const X_=1e-4,a3=1-X_,s3=1+X_,K_=.01,o3=0-K_,i3=0+K_;function ct(a){return a.max-a.min}function l3(a,s,i){return Math.abs(a-s)<=i}function Ib(a,s,i,l=.5){a.origin=l,a.originPoint=Ve(s.min,s.max,a.origin),a.scale=ct(i)/ct(s),a.translate=Ve(i.min,i.max,a.origin)-a.originPoint,(a.scale>=a3&&a.scale<=s3||isNaN(a.scale))&&(a.scale=1),(a.translate>=o3&&a.translate<=i3||isNaN(a.translate))&&(a.translate=0)}function vo(a,s,i,l){Ib(a.x,s.x,i.x,l?l.originX:void 0),Ib(a.y,s.y,i.y,l?l.originY:void 0)}function jb(a,s,i,l=0){const p=l?Ve(i.min,i.max,l):i.min;a.min=p+s.min,a.max=a.min+ct(s)}function r3(a,s,i,l){jb(a.x,s.x,i.x,l==null?void 0:l.x),jb(a.y,s.y,i.y,l==null?void 0:l.y)}function Sb(a,s,i,l=0){const p=l?Ve(i.min,i.max,l):i.min;a.min=s.min-p,a.max=a.min+ct(s)}function Ml(a,s,i,l){Sb(a.x,s.x,i.x,l==null?void 0:l.x),Sb(a.y,s.y,i.y,l==null?void 0:l.y)}function Vb(a,s,i,l,p){return a-=s,a=vl(a,1/i,l),p!==void 0&&(a=vl(a,1/p,l)),a}function u3(a,s=0,i=1,l=.5,p,g=a,d=a){if(en.test(s)&&(s=parseFloat(s),s=Ve(d.min,d.max,s/100)-d.min),typeof s!="number")return;let h=Ve(g.min,g.max,l);a===g&&(h-=s),a.min=Vb(a.min,s,i,h,p),a.max=Vb(a.max,s,i,h,p)}function qb(a,s,[i,l,p],g,d){u3(a,s[i],s[l],s[p],s.scale,g,d)}const c3=["x","scaleX","originX"],p3=["y","scaleY","originY"];function wb(a,s,i,l){qb(a.x,s,c3,i?i.x:void 0,l?l.x:void 0),qb(a.y,s,p3,i?i.y:void 0,l?l.y:void 0)}function Eb(a){return a.translate===0&&a.scale===1}function Z_(a){return Eb(a.x)&&Eb(a.y)}function Nb(a,s){return a.min===s.min&&a.max===s.max}function d3(a,s){return Nb(a.x,s.x)&&Nb(a.y,s.y)}function Cb(a,s){return Math.round(a.min)===Math.round(s.min)&&Math.round(a.max)===Math.round(s.max)}function F_(a,s){return Cb(a.x,s.x)&&Cb(a.y,s.y)}function Db(a){return ct(a.x)/ct(a.y)}function Hb(a,s){return a.translate===s.translate&&a.scale===s.scale&&a.originPoint===s.originPoint}function $t(a){return[a("x"),a("y")]}function g3(a,s,i){let l="";const p=a.x.translate/s.x,g=a.y.translate/s.y,d=(i==null?void 0:i.z)||0;if((p||g||d)&&(l=`translate3d(${p}px, ${g}px, ${d}px) `),(s.x!==1||s.y!==1)&&(l+=`scale(${1/s.x}, ${1/s.y}) `),i){const{transformPerspective:b,rotate:x,pathRotation:G,rotateX:k,rotateY:v,skewX:M,skewY:S}=i;b&&(l=`perspective(${b}px) ${l}`),x&&(l+=`rotate(${x}deg) `),G&&(l+=`rotate(${G}deg) `),k&&(l+=`rotateX(${k}deg) `),v&&(l+=`rotateY(${v}deg) `),M&&(l+=`skewX(${M}deg) `),S&&(l+=`skewY(${S}deg) `)}const h=a.x.scale*s.x,f=a.y.scale*s.y;return(h!==1||f!==1)&&(l+=`scale(${h}, ${f})`),l||"none"}const Q_=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],m3=Q_.length,Rb=a=>typeof a=="string"?parseFloat(a):a,Ob=a=>typeof a=="number"||ee.test(a);function h3(a,s,i,l,p,g){p?(a.opacity=Ve(0,i.opacity??1,b3(l)),a.opacityExit=Ve(s.opacity??1,0,f3(l))):g&&(a.opacity=Ve(s.opacity??1,i.opacity??1,l));for(let d=0;d<m3;d++){const h=Q_[d];let f=zb(s,h),b=zb(i,h);if(f===void 0&&b===void 0)continue;f||(f=0),b||(b=0),f===0||b===0||Ob(f)===Ob(b)?(a[h]=Math.max(Ve(Rb(f),Rb(b),l),0),(en.test(b)||en.test(f))&&(a[h]+="%")):a[h]=b}(s.rotate||i.rotate)&&(a.rotate=Ve(s.rotate||0,i.rotate||0,l))}function zb(a,s){return a[s]!==void 0?a[s]:a.borderRadius}const b3=J_(0,.5,Uf),f3=J_(.5,.95,Lt);function J_(a,s,i){return l=>l<a?0:l>s?1:i(To(a,s,l))}function _3(a,s,i){const l=ot(a)?a:fs(a);return l.start(_p("",l,s,i)),l.animation}function jo(a,s,i,l={passive:!0}){return a.addEventListener(s,i,l),()=>a.removeEventListener(s,i)}const x3=(a,s)=>a.depth-s.depth;class G3{constructor(){this.children=[],this.isDirty=!1}add(s){op(this.children,s),this.isDirty=!0}remove(s){bl(this.children,s),this.isDirty=!0}forEach(s){this.isDirty&&this.children.sort(x3),this.isDirty=!1,this.children.forEach(s)}}function k3(a,s){const i=ut.now(),l=({timestamp:p})=>{const g=p-i;g>=s&&($n(l),a(g-s))};return qe.setup(l,!0),()=>$n(l)}function pl(a){return ot(a)?a.get():a}class y3{constructor(){this.members=[]}add(s){op(this.members,s);for(let i=this.members.length-1;i>=0;i--){const l=this.members[i];if(l===s||l===this.lead||l===this.prevLead)continue;const p=l.instance;(!p||p.isConnected===!1)&&!l.snapshot&&(bl(this.members,l),l.unmount())}s.scheduleRender()}remove(s){if(bl(this.members,s),s===this.prevLead&&(this.prevLead=void 0),s===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(s){var i;for(let l=this.members.indexOf(s)-1;l>=0;l--){const p=this.members[l];if(p.isPresent!==!1&&((i=p.instance)==null?void 0:i.isConnected)!==!1)return this.promote(p),!0}return!1}promote(s,i){var p;const l=this.lead;if(s!==l&&(this.prevLead=l,this.lead=s,s.show(),l)){l.updateSnapshot(),s.scheduleRender();const{layoutDependency:g}=l.options,{layoutDependency:d}=s.options;(g===void 0||g!==d)&&(s.resumeFrom=l,i&&(l.preserveOpacity=!0),l.snapshot&&(s.snapshot=l.snapshot,s.snapshot.latestValues=l.animationValues||l.latestValues),(p=s.root)!=null&&p.isUpdating&&(s.isLayoutDirty=!0)),s.options.crossfade===!1&&l.hide()}}exitAnimationComplete(){this.members.forEach(s=>{var i,l,p,g,d;(l=(i=s.options).onExitComplete)==null||l.call(i),(d=(p=s.resumingFrom)==null?void 0:(g=p.options).onExitComplete)==null||d.call(g)})}scheduleRender(){this.members.forEach(s=>s.instance&&s.scheduleRender(!1))}removeLeadSnapshot(){var s;(s=this.lead)!=null&&s.snapshot&&(this.lead.snapshot=void 0)}}const dl={hasAnimatedSinceResize:!0,hasEverUpdated:!1},gc=["","X","Y","Z"],v3=1e3;let M3=0;function mc(a,s,i,l){const{latestValues:p}=s;p[a]&&(i[a]=p[a],s.setStaticValue(a,0),l&&(l[a]=0))}function $_(a){if(a.hasCheckedOptimisedAppear=!0,a.root===a)return;const{visualElement:s}=a.options;if(!s)return;const i=x_(s);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:p,layoutId:g}=a.options;window.MotionCancelOptimisedAnimation(i,"transform",qe,!(p||g))}const{parent:l}=a;l&&!l.hasCheckedOptimisedAppear&&$_(l)}function W_({attachResizeListener:a,defaultParent:s,measureScroll:i,checkIsScrollRoot:l,resetTransform:p}){return class{constructor(d={},h=s==null?void 0:s()){this.id=M3++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(I3),this.nodes.forEach(E3),this.nodes.forEach(N3),this.nodes.forEach(j3)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let f=0;f<this.path.length;f++)this.path[f].shouldResetTransform=!0;this.root===this&&(this.nodes=new G3)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new lp),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const f=this.eventHandlers.get(d);f&&f.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=vp(d)&&!Ay(d),this.instance=d;const{layoutId:h,layout:f,visualElement:b}=this.options;if(b&&!b.current&&b.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(f||h)&&(this.isLayoutDirty=!0),a){let x,G=0;const k=()=>this.root.updateBlockedByResize=!1;qe.read(()=>{G=window.innerWidth}),a(d,()=>{const v=window.innerWidth;v!==G&&(G=v,this.root.updateBlockedByResize=!0,x&&x(),x=k3(k,250),dl.hasAnimatedSinceResize&&(dl.hasAnimatedSinceResize=!1,this.nodes.forEach(Bb)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&b&&(h||f)&&this.addEventListener("didUpdate",({delta:x,hasLayoutChanged:G,hasRelativeLayoutChanged:k,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const M=this.options.transition||b.getDefaultTransition()||O3,{onLayoutAnimationStart:S,onLayoutAnimationComplete:I}=b.getProps(),E=!this.targetLayout||!F_(this.targetLayout,v),K=!G&&k;if(this.options.layoutRoot||this.resumeFrom||K||G&&(E||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const O={...fp(M,"layout"),onPlay:S,onComplete:I};(b.shouldReduceMotion||this.options.layoutRoot)&&(O.delay=0,O.type=!1),this.startAnimation(O),this.setAnimationOrigin(x,K,O.path)}else G||Bb(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),$n(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(C3),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&$_(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let x=0;x<this.path.length;x++){const G=this.path[x];G.shouldResetTransform=!0,(typeof G.latestValues.x=="string"||typeof G.latestValues.y=="string")&&(G.isLayoutDirty=!0),G.updateScroll("snapshot"),G.options.layoutRoot&&G.willUpdate(!1)}const{layoutId:h,layout:f}=this.options;if(h===void 0&&!f)return;const b=this.getTransformTemplate();this.prevTransformTemplateValue=b?b(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const f=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),f&&this.nodes.forEach(V3),this.nodes.forEach(Lb);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Ub);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(q3),this.nodes.forEach(w3),this.nodes.forEach(T3),this.nodes.forEach(A3)):this.nodes.forEach(Ub),this.clearAllSnapshots();const h=ut.now();st.delta=tn(0,1e3/60,h-st.timestamp),st.timestamp=h,st.isProcessing=!0,oc.update.process(st),oc.preRender.process(st),oc.render.process(st),st.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,kp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(S3),this.sharedNodes.forEach(D3)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,qe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){qe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ct(this.snapshot.measuredBox.x)&&!ct(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let f=0;f<this.path.length;f++)this.path[f].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=Qe()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&this.instance){const f=l(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:f,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:f}}}resetTransform(){if(!p)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!Z_(this.projectionDelta),f=this.getTransformTemplate(),b=f?f(this.latestValues,""):void 0,x=b!==this.prevTransformTemplateValue;d&&this.instance&&(h||ka(this.latestValues)||x)&&(p(this.instance,b),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let f=this.removeElementScroll(h);return d&&(f=this.removeTransform(f)),z3(f),{animationId:this.root.animationId,measuredBox:h,layoutBox:f,latestValues:{},source:this.id}}measurePageBox(){var b;const{visualElement:d}=this.options;if(!d)return Qe();const h=d.measureViewportBox();if(!(((b=this.scroll)==null?void 0:b.wasRoot)||this.path.some(L3))){const{scroll:x}=this.root;x&&(Wt(h.x,x.offset.x),Wt(h.y,x.offset.y))}return h}removeElementScroll(d){var f;const h=Qe();if(Pt(h,d),(f=this.scroll)!=null&&f.wasRoot)return h;for(let b=0;b<this.path.length;b++){const x=this.path[b],{scroll:G,options:k}=x;x!==this.root&&G&&k.layoutScroll&&(G.wasRoot&&Pt(h,d),Wt(h.x,G.offset.x),Wt(h.y,G.offset.y))}return h}applyTransform(d,h=!1,f){var x,G;const b=f||Qe();Pt(b,d);for(let k=0;k<this.path.length;k++){const v=this.path[k];!h&&v.options.layoutScroll&&v.scroll&&v!==v.root&&(Wt(b.x,-v.scroll.offset.x),Wt(b.y,-v.scroll.offset.y)),ka(v.latestValues)&&cl(b,v.latestValues,(x=v.layout)==null?void 0:x.layoutBox)}return ka(this.latestValues)&&cl(b,this.latestValues,(G=this.layout)==null?void 0:G.layoutBox),b}removeTransform(d){var f;const h=Qe();Pt(h,d);for(let b=0;b<this.path.length;b++){const x=this.path[b];if(!ka(x.latestValues))continue;let G;x.instance&&(Fc(x.latestValues)&&x.updateSnapshot(),G=Qe(),Pt(G,x.measurePageBox())),wb(h,x.latestValues,(f=x.snapshot)==null?void 0:f.layoutBox,G)}return ka(this.latestValues)&&wb(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==st.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var v;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const f=!!this.resumingFrom||this!==h;if(!(d||f&&this.isSharedProjectionDirty||this.isProjectionDirty||(v=this.parent)!=null&&v.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:x,layoutId:G}=this.options;if(!this.layout||!(x||G))return;this.resolvedRelativeTargetAt=st.timestamp;const k=this.getClosestProjectingParent();k&&this.linkedParentVersion!==k.layoutVersion&&!k.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&k&&k.layout?this.createRelativeTarget(k,this.layout.layoutBox,k.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Qe(),this.targetWithTransforms=Qe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),r3(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Pt(this.target,this.layout.layoutBox),D_(this.target,this.targetDelta)):Pt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&k&&!!k.resumingFrom==!!this.resumingFrom&&!k.options.layoutScroll&&k.target&&this.animationProgress!==1?this.createRelativeTarget(k,this.target,k.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Fc(this.parent.latestValues)||C_(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,h,f){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Qe(),this.relativeTargetOrigin=Qe(),Ml(this.relativeTargetOrigin,h,f,this.options.layoutAnchor||void 0),Pt(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var M;const d=this.getLead(),h=!!this.resumingFrom||this!==d;let f=!0;if((this.isProjectionDirty||(M=this.parent)!=null&&M.isProjectionDirty)&&(f=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(f=!1),this.resolvedRelativeTargetAt===st.timestamp&&(f=!1),f)return;const{layout:b,layoutId:x}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(b||x))return;Pt(this.layoutCorrected,this.layout.layoutBox);const G=this.treeScale.x,k=this.treeScale.y;Hy(this.layoutCorrected,this.treeScale,this.path,h),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=Qe());const{target:v}=d;if(!v){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Ab(this.prevProjectionDelta.x,this.projectionDelta.x),Ab(this.prevProjectionDelta.y,this.projectionDelta.y)),vo(this.projectionDelta,this.layoutCorrected,v,this.latestValues),(this.treeScale.x!==G||this.treeScale.y!==k||!Hb(this.projectionDelta.x,this.prevProjectionDelta.x)||!Hb(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),d){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=hs(),this.projectionDelta=hs(),this.projectionDeltaWithTransform=hs()}setAnimationOrigin(d,h=!1,f){const b=this.snapshot,x=b?b.latestValues:{},G={...this.latestValues},k=hs();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const v=Qe(),M=b?b.source:void 0,S=this.layout?this.layout.source:void 0,I=M!==S,E=this.getStack(),K=!E||E.members.length<=1,O=!!(I&&!K&&this.options.crossfade===!0&&!this.path.some(R3));this.animationProgress=0;let C;const z=f==null?void 0:f.interpolateProjection(d);this.mixTargetDelta=P=>{const H=P/1e3,X=z==null?void 0:z(H);X?(k.x.translate=X.x,k.x.scale=Ve(d.x.scale,1,H),k.x.origin=d.x.origin,k.x.originPoint=d.x.originPoint,k.y.translate=X.y,k.y.scale=Ve(d.y.scale,1,H),k.y.origin=d.y.origin,k.y.originPoint=d.y.originPoint):(Yb(k.x,d.x,H),Yb(k.y,d.y,H)),this.setTargetDelta(k),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ml(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),H3(this.relativeTarget,this.relativeTargetOrigin,v,H),C&&d3(this.relativeTarget,C)&&(this.isProjectionDirty=!1),C||(C=Qe()),Pt(C,this.relativeTarget)),I&&(this.animationValues=G,h3(G,x,this.latestValues,H,O,K)),X&&X.rotate!==void 0&&(this.animationValues||(this.animationValues=G),this.animationValues.pathRotation=X.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=H},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var h,f,b;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(b=(f=this.resumingFrom)==null?void 0:f.currentAnimation)==null||b.stop(),this.pendingAnimation&&($n(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=qe.update(()=>{dl.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=fs(0)),this.motionValue.jump(0,!1),this.currentAnimation=_3(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:x=>{this.mixTargetDelta(x),d.onUpdate&&d.onUpdate(x)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(v3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:f,layout:b,latestValues:x}=d;if(!(!h||!f||!b)){if(this!==d&&this.layout&&b&&e1(this.options.animationType,this.layout.layoutBox,b.layoutBox)){f=this.target||Qe();const G=ct(this.layout.layoutBox.x);f.x.min=d.target.x.min,f.x.max=f.x.min+G;const k=ct(this.layout.layoutBox.y);f.y.min=d.target.y.min,f.y.max=f.y.min+k}Pt(h,f),cl(h,x),vo(this.projectionDeltaWithTransform,this.layoutCorrected,h,x)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new y3),this.sharedNodes.get(d).add(h);const b=h.options.initialPromotionConfig;h.promote({transition:b?b.transition:void 0,preserveFollowOpacity:b&&b.shouldPreserveFollowOpacity?b.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var h;const{layoutId:d}=this.options;return d?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:d}=this.options;return d?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:f}={}){const b=this.getStack();b&&b.promote(this,f),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:f}=d;if((f.z||f.rotate||f.rotateX||f.rotateY||f.rotateZ||f.skewX||f.skewY)&&(h=!0),!h)return;const b={};f.z&&mc("z",d,b,this.animationValues);for(let x=0;x<gc.length;x++)mc(`rotate${gc[x]}`,d,b,this.animationValues),mc(`skew${gc[x]}`,d,b,this.animationValues);d.render();for(const x in b)d.setStaticValue(x,b[x]),this.animationValues&&(this.animationValues[x]=b[x]);d.scheduleRender()}applyProjectionStyles(d,h){if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const f=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=pl(h==null?void 0:h.pointerEvents)||"",d.transform=f?f(this.latestValues,""):"none";return}const b=this.getLead();if(!this.projectionDelta||!this.layout||!b.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=pl(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!ka(this.latestValues)&&(d.transform=f?f({},""):"none",this.hasProjected=!1);return}d.visibility="";const x=b.animationValues||b.latestValues;this.applyTransformsToTarget();let G=g3(this.projectionDeltaWithTransform,this.treeScale,x);f&&(G=f(x,G)),d.transform=G;const{x:k,y:v}=this.projectionDelta;d.transformOrigin=`${k.origin*100}% ${v.origin*100}% 0`,b.animationValues?d.opacity=b===this?x.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:x.opacityExit:d.opacity=b===this?x.opacity!==void 0?x.opacity:"":x.opacityExit!==void 0?x.opacityExit:0;for(const M in Jc){if(x[M]===void 0)continue;const{correct:S,applyTo:I,isCSSVariable:E}=Jc[M],K=G==="none"?x[M]:S(x[M],b);if(I){const O=I.length;for(let C=0;C<O;C++)d[I[C]]=K}else E?this.options.visualElement.renderState.vars[M]=K:d[M]=K}this.options.layoutId&&(d.pointerEvents=b===this?pl(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(Lb),this.root.sharedNodes.clear()}}}function T3(a){a.updateLayout()}function A3(a){var i;const s=((i=a.resumeFrom)==null?void 0:i.snapshot)||a.snapshot;if(a.isLead()&&a.layout&&s&&a.hasListeners("didUpdate")){const{layoutBox:l,measuredBox:p}=a.layout,{animationType:g}=a.options,d=s.source!==a.layout.source;if(g==="size")$t(G=>{const k=d?s.measuredBox[G]:s.layoutBox[G],v=ct(k);k.min=l[G].min,k.max=k.min+v});else if(g==="x"||g==="y"){const G=g==="x"?"y":"x";$c(d?s.measuredBox[G]:s.layoutBox[G],l[G])}else e1(g,s.layoutBox,l)&&$t(G=>{const k=d?s.measuredBox[G]:s.layoutBox[G],v=ct(l[G]);k.max=k.min+v,a.relativeTarget&&!a.currentAnimation&&(a.isProjectionDirty=!0,a.relativeTarget[G].max=a.relativeTarget[G].min+v)});const h=hs();vo(h,l,s.layoutBox);const f=hs();d?vo(f,a.applyTransform(p,!0),s.measuredBox):vo(f,l,s.layoutBox);const b=!Z_(h);let x=!1;if(!a.resumeFrom){const G=a.getClosestProjectingParent();if(G&&!G.resumeFrom){const{snapshot:k,layout:v}=G;if(k&&v){const M=a.options.layoutAnchor||void 0,S=Qe();Ml(S,s.layoutBox,k.layoutBox,M);const I=Qe();Ml(I,l,v.layoutBox,M),F_(S,I)||(x=!0),G.options.layoutRoot&&(a.relativeTarget=I,a.relativeTargetOrigin=S,a.relativeParent=G)}}}a.notifyListeners("didUpdate",{layout:l,snapshot:s,delta:f,layoutDelta:h,hasLayoutChanged:b,hasRelativeLayoutChanged:x})}else if(a.isLead()){const{onExitComplete:l}=a.options;l&&l()}a.options.transition=void 0}function I3(a){a.parent&&(a.isProjecting()||(a.isProjectionDirty=a.parent.isProjectionDirty),a.isSharedProjectionDirty||(a.isSharedProjectionDirty=!!(a.isProjectionDirty||a.parent.isProjectionDirty||a.parent.isSharedProjectionDirty)),a.isTransformDirty||(a.isTransformDirty=a.parent.isTransformDirty))}function j3(a){a.isProjectionDirty=a.isSharedProjectionDirty=a.isTransformDirty=!1}function S3(a){a.clearSnapshot()}function Lb(a){a.clearMeasurements()}function V3(a){a.isLayoutDirty=!0,a.updateLayout()}function Ub(a){a.isLayoutDirty=!1}function q3(a){a.isAnimationBlocked&&a.layout&&!a.isLayoutDirty&&(a.snapshot=a.layout,a.isLayoutDirty=!0)}function w3(a){const{visualElement:s}=a.options;s&&s.getProps().onBeforeLayoutMeasure&&s.notify("BeforeLayoutMeasure"),a.resetTransform()}function Bb(a){a.finishAnimation(),a.targetDelta=a.relativeTarget=a.target=void 0,a.isProjectionDirty=!0}function E3(a){a.resolveTargetDelta()}function N3(a){a.calcProjection()}function C3(a){a.resetSkewAndRotation()}function D3(a){a.removeLeadSnapshot()}function Yb(a,s,i){a.translate=Ve(s.translate,0,i),a.scale=Ve(s.scale,1,i),a.origin=s.origin,a.originPoint=s.originPoint}function Pb(a,s,i,l){a.min=Ve(s.min,i.min,l),a.max=Ve(s.max,i.max,l)}function H3(a,s,i,l){Pb(a.x,s.x,i.x,l),Pb(a.y,s.y,i.y,l)}function R3(a){return a.animationValues&&a.animationValues.opacityExit!==void 0}const O3={duration:.45,ease:[.4,0,.1,1]},Xb=a=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(a),Kb=Xb("applewebkit/")&&!Xb("chrome/")?Math.round:Lt;function Zb(a){a.min=Kb(a.min),a.max=Kb(a.max)}function z3(a){Zb(a.x),Zb(a.y)}function e1(a,s,i){return a==="position"||a==="preserve-aspect"&&!l3(Db(s),Db(i),.2)}function L3(a){var s;return a!==a.root&&((s=a.scroll)==null?void 0:s.wasRoot)}const U3=W_({attachResizeListener:(a,s)=>jo(a,"resize",s),measureScroll:()=>{var a,s;return{x:document.documentElement.scrollLeft||((a=document.body)==null?void 0:a.scrollLeft)||0,y:document.documentElement.scrollTop||((s=document.body)==null?void 0:s.scrollTop)||0}},checkIsScrollRoot:()=>!0}),hc={current:void 0},t1=W_({measureScroll:a=>({x:a.scrollLeft,y:a.scrollTop}),defaultParent:()=>{if(!hc.current){const a=new U3({});a.mount(window),a.setOptions({layoutScroll:!0}),hc.current=a}return hc.current},resetTransform:(a,s)=>{a.style.transform=s!==void 0?s:"none"},checkIsScrollRoot:a=>window.getComputedStyle(a).position==="fixed"}),jp=Y.createContext({transformPagePoint:a=>a,isStatic:!1,reducedMotion:"never"});function Fb(a,s){if(typeof a=="function")return a(s);a!=null&&(a.current=s)}function B3(...a){return s=>{let i=!1;const l=a.map(p=>{const g=Fb(p,s);return!i&&typeof g=="function"&&(i=!0),g});if(i)return()=>{for(let p=0;p<l.length;p++){const g=l[p];typeof g=="function"?g():Fb(a[p],null)}}}}function Y3(...a){return Y.useCallback(B3(...a),a)}class P3 extends Y.Component{getSnapshotBeforeUpdate(s){const i=this.props.childRef.current;if(il(i)&&s.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const l=i.offsetParent,p=il(l)&&l.offsetWidth||0,g=il(l)&&l.offsetHeight||0,d=getComputedStyle(i),h=this.props.sizeRef.current;h.height=parseFloat(d.height),h.width=parseFloat(d.width),h.top=i.offsetTop,h.left=i.offsetLeft,h.right=p-h.width-h.left,h.bottom=g-h.height-h.top,h.direction=d.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function X3({children:a,isPresent:s,anchorX:i,anchorY:l,root:p,pop:g}){var k;const d=Y.useId(),h=Y.useRef(null),f=Y.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:b}=Y.useContext(jp),x=((k=a.props)==null?void 0:k.ref)??(a==null?void 0:a.ref),G=Y3(h,x);return Y.useInsertionEffect(()=>{const{width:v,height:M,top:S,left:I,right:E,bottom:K,direction:O}=f.current;if(s||g===!1||!h.current||!v||!M)return;const C=O==="rtl",z=i==="left"?C?`right: ${E}`:`left: ${I}`:C?`left: ${I}`:`right: ${E}`,P=l==="bottom"?`bottom: ${K}`:`top: ${S}`;h.current.dataset.motionPopId=d;const H=document.createElement("style");b&&(H.nonce=b);const X=p??document.head;return X.appendChild(H),H.sheet&&H.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${v}px !important;
            height: ${M}px !important;
            ${z}px !important;
            ${P}px !important;
          }
        `),()=>{var Z;(Z=h.current)==null||Z.removeAttribute("data-motion-pop-id"),X.contains(H)&&X.removeChild(H)}},[s]),c.jsx(P3,{isPresent:s,childRef:h,sizeRef:f,pop:g,children:g===!1?a:Y.cloneElement(a,{ref:G})})}const K3=({children:a,initial:s,isPresent:i,onExitComplete:l,custom:p,presenceAffectsLayout:g,mode:d,anchorX:h,anchorY:f,root:b})=>{const x=sp(Z3),G=Y.useId();let k=!0,v=Y.useMemo(()=>(k=!1,{id:G,initial:s,isPresent:i,custom:p,onExitComplete:M=>{x.set(M,!0);for(const S of x.values())if(!S)return;l&&l()},register:M=>(x.set(M,!1),()=>x.delete(M))}),[i,x,l]);return g&&k&&(v={...v}),Y.useMemo(()=>{x.forEach((M,S)=>x.set(S,!1))},[i]),Y.useEffect(()=>{!i&&!x.size&&l&&l()},[i]),a=c.jsx(X3,{pop:d==="popLayout",isPresent:i,anchorX:h,anchorY:f,root:b,children:a}),c.jsx(Il.Provider,{value:v,children:a})};function Z3(){return new Map}function n1(a=!0){const s=Y.useContext(Il);if(s===null)return[!0,null];const{isPresent:i,onExitComplete:l,register:p}=s,g=Y.useId();Y.useEffect(()=>{if(a)return p(g)},[a]);const d=Y.useCallback(()=>a&&l&&l(g),[g,l,a]);return!i&&l?[!1,d]:[!0]}const Wi=a=>a.key||"";function Qb(a){const s=[];return Y.Children.forEach(a,i=>{Y.isValidElement(i)&&s.push(i)}),s}const bc=({children:a,custom:s,initial:i=!0,onExitComplete:l,presenceAffectsLayout:p=!0,mode:g="sync",propagate:d=!1,anchorX:h="left",anchorY:f="top",root:b})=>{const[x,G]=n1(d),k=Y.useMemo(()=>Qb(a),[a]),v=d&&!x?[]:k.map(Wi),M=Y.useRef(!0),S=Y.useRef(k),I=sp(()=>new Map),E=Y.useRef(new Set),[K,O]=Y.useState(k),[C,z]=Y.useState(k);Vf(()=>{M.current=!1,S.current=k;for(let X=0;X<C.length;X++){const Z=Wi(C[X]);v.includes(Z)?(I.delete(Z),E.current.delete(Z)):I.get(Z)!==!0&&I.set(Z,!1)}},[C,v.length,v.join("-")]);const P=[];if(k!==K){let X=[...k];for(let Z=0;Z<C.length;Z++){const F=C[Z],oe=Wi(F);v.includes(oe)||(X.splice(Z,0,F),P.push(F))}return g==="wait"&&P.length&&(X=P),z(Qb(X)),O(k),null}const{forceRender:H}=Y.useContext(ap);return c.jsx(c.Fragment,{children:C.map(X=>{const Z=Wi(X),F=d&&!x?!1:k===C||v.includes(Z),oe=()=>{if(E.current.has(Z))return;if(I.has(Z))E.current.add(Z),I.set(Z,!0);else return;let pe=!0;I.forEach(Be=>{Be||(pe=!1)}),pe&&(H==null||H(),z(S.current),d&&(G==null||G()),l&&l())};return c.jsx(K3,{isPresent:F,initial:!M.current||i?void 0:!1,custom:s,presenceAffectsLayout:p,mode:g,root:b,onExitComplete:F?void 0:oe,anchorX:h,anchorY:f,children:X},Z)})})},a1=Y.createContext({strict:!1}),Jb={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let $b=!1;function F3(){if($b)return;const a={};for(const s in Jb)a[s]={isEnabled:i=>Jb[s].some(l=>!!i[l])};w_(a),$b=!0}function s1(){return F3(),Ey()}function Q3(a){const s=s1();for(const i in a)s[i]={...s[i],...a[i]};w_(s)}const J3=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Tl(a){return a.startsWith("while")||a.startsWith("drag")&&a!=="draggable"||a.startsWith("layout")||a.startsWith("onTap")||a.startsWith("onPan")||a.startsWith("onLayout")||J3.has(a)}let o1=a=>!Tl(a);function $3(a){typeof a=="function"&&(o1=s=>s.startsWith("on")?!Tl(s):a(s))}try{$3(require("@emotion/is-prop-valid").default)}catch{}function W3(a,s,i){const l={};for(const p in a)p==="values"&&typeof a.values=="object"||ot(a[p])||(o1(p)||i===!0&&Tl(p)||!s&&!Tl(p)||a.draggable&&p.startsWith("onDrag"))&&(l[p]=a[p]);return l}const ql=Y.createContext({});function ev(a,s){if(Vl(a)){const{initial:i,animate:l}=a;return{initial:i===!1||Io(i)?i:void 0,animate:Io(l)?l:void 0}}return a.inherit!==!1?s:{}}function tv(a){const{initial:s,animate:i}=ev(a,Y.useContext(ql));return Y.useMemo(()=>({initial:s,animate:i}),[Wb(s),Wb(i)])}function Wb(a){return Array.isArray(a)?a.join(" "):a}const Sp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function i1(a,s,i){for(const l in s)!ot(s[l])&&!O_(l,i)&&(a[l]=s[l])}function nv({transformTemplate:a},s){return Y.useMemo(()=>{const i=Sp();return Ap(i,s,a),Object.assign({},i.vars,i.style)},[s])}function av(a,s){const i=a.style||{},l={};return i1(l,i,a),Object.assign(l,nv(a,s)),l}function sv(a,s){const i={},l=av(a,s);return a.drag&&a.dragListener!==!1&&(i.draggable=!1,l.userSelect=l.WebkitUserSelect=l.WebkitTouchCallout="none",l.touchAction=a.drag===!0?"none":`pan-${a.drag==="x"?"y":"x"}`),a.tabIndex===void 0&&(a.onTap||a.onTapStart||a.whileTap)&&(i.tabIndex=0),i.style=l,i}const l1=()=>({...Sp(),attrs:{}});function ov(a,s,i,l){const p=Y.useMemo(()=>{const g=l1();return z_(g,s,U_(l),a.transformTemplate,a.style),{...g.attrs,style:{...g.style}}},[s]);if(a.style){const g={};i1(g,a.style,a),p.style={...g,...p.style}}return p}const iv=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Vp(a){return typeof a!="string"||a.includes("-")?!1:!!(iv.indexOf(a)>-1||/[A-Z]/u.test(a))}function lv(a,s,i,{latestValues:l},p,g=!1,d){const f=(d??Vp(a)?ov:sv)(s,l,p,a),b=W3(s,typeof a=="string",g),x=a!==Y.Fragment?{...b,...f,ref:i}:{},{children:G}=s,k=Y.useMemo(()=>ot(G)?G.get():G,[G]);return Y.createElement(a,{...x,children:k})}function rv({scrapeMotionValuesFromProps:a,createRenderState:s},i,l,p){return{latestValues:uv(i,l,p,a),renderState:s()}}function uv(a,s,i,l){const p={},g=l(a,{});for(const k in g)p[k]=pl(g[k]);let{initial:d,animate:h}=a;const f=Vl(a),b=V_(a);s&&b&&!f&&a.inherit!==!1&&(d===void 0&&(d=s.initial),h===void 0&&(h=s.animate));let x=i?i.initial===!1:!1;x=x||d===!1;const G=x?h:d;if(G&&typeof G!="boolean"&&!Sl(G)){const k=Array.isArray(G)?G:[G];for(let v=0;v<k.length;v++){const M=xp(a,k[v]);if(M){const{transitionEnd:S,transition:I,...E}=M;for(const K in E){let O=E[K];if(Array.isArray(O)){const C=x?O.length-1:0;O=O[C]}O!==null&&(p[K]=O)}for(const K in S)p[K]=S[K]}}}return p}const r1=a=>(s,i)=>{const l=Y.useContext(ql),p=Y.useContext(Il),g=()=>rv(a,s,l,p);return i?g():sp(g)},cv=r1({scrapeMotionValuesFromProps:Ip,createRenderState:Sp}),pv=r1({scrapeMotionValuesFromProps:B_,createRenderState:l1}),dv=Symbol.for("motionComponentSymbol");function gv(a,s,i){const l=Y.useRef(i);Y.useInsertionEffect(()=>{l.current=i});const p=Y.useRef(null);return Y.useCallback(g=>{var h;g&&((h=a.onMount)==null||h.call(a,g)),s&&(g?s.mount(g):s.unmount());const d=l.current;if(typeof d=="function")if(g){const f=d(g);typeof f=="function"&&(p.current=f)}else p.current?(p.current(),p.current=null):d(g);else d&&(d.current=g)},[s])}const u1=Y.createContext({});function ds(a){return a&&typeof a=="object"&&Object.prototype.hasOwnProperty.call(a,"current")}function mv(a,s,i,l,p,g){var O,C;const{visualElement:d}=Y.useContext(ql),h=Y.useContext(a1),f=Y.useContext(Il),b=Y.useContext(jp),x=b.reducedMotion,G=b.skipAnimations,k=Y.useRef(null),v=Y.useRef(!1);l=l||h.renderer,!k.current&&l&&(k.current=l(a,{visualState:s,parent:d,props:i,presenceContext:f,blockInitialAnimation:f?f.initial===!1:!1,reducedMotionConfig:x,skipAnimations:G,isSVG:g}),v.current&&k.current&&(k.current.manuallyAnimateOnMount=!0));const M=k.current,S=Y.useContext(u1);M&&!M.projection&&p&&(M.type==="html"||M.type==="svg")&&hv(k.current,i,p,S);const I=Y.useRef(!1);Y.useInsertionEffect(()=>{M&&I.current&&M.update(i,f)});const E=i[__],K=Y.useRef(!!E&&typeof window<"u"&&!((O=window.MotionHandoffIsComplete)!=null&&O.call(window,E))&&((C=window.MotionHasOptimisedAnimation)==null?void 0:C.call(window,E)));return Vf(()=>{v.current=!0,M&&(I.current=!0,window.MotionIsMounted=!0,M.updateFeatures(),M.scheduleRenderMicrotask(),K.current&&M.animationState&&M.animationState.animateChanges())}),Y.useEffect(()=>{M&&(!K.current&&M.animationState&&M.animationState.animateChanges(),K.current&&(queueMicrotask(()=>{var z;(z=window.MotionHandoffMarkAsComplete)==null||z.call(window,E)}),K.current=!1),M.enteringChildren=void 0)}),M}function hv(a,s,i,l){const{layoutId:p,layout:g,drag:d,dragConstraints:h,layoutScroll:f,layoutRoot:b,layoutAnchor:x,layoutCrossfade:G}=s;a.projection=new i(a.latestValues,s["data-framer-portal-id"]?void 0:c1(a.parent)),a.projection.setOptions({layoutId:p,layout:g,alwaysMeasureLayout:!!d||h&&ds(h),visualElement:a,animationType:typeof g=="string"?g:"both",initialPromotionConfig:l,crossfade:G,layoutScroll:f,layoutRoot:b,layoutAnchor:x})}function c1(a){if(a)return a.options.allowProjection!==!1?a.projection:c1(a.parent)}function fc(a,{forwardMotionProps:s=!1,type:i}={},l,p){l&&Q3(l);const g=i?i==="svg":Vp(a),d=g?pv:cv;function h(b,x){let G;const k={...Y.useContext(jp),...b,layoutId:bv(b)},{isStatic:v}=k,M=tv(b),S=d(b,v);if(!v&&typeof window<"u"){fv();const I=_v(k);G=I.MeasureLayout,M.visualElement=mv(a,S,k,p,I.ProjectionNode,g)}return c.jsxs(ql.Provider,{value:M,children:[G&&M.visualElement?c.jsx(G,{visualElement:M.visualElement,...k}):null,lv(a,b,gv(S,M.visualElement,x),S,v,s,g)]})}h.displayName=`motion.${typeof a=="string"?a:`create(${a.displayName??a.name??""})`}`;const f=Y.forwardRef(h);return f[dv]=a,f}function bv({layoutId:a}){const s=Y.useContext(ap).id;return s&&a!==void 0?s+"-"+a:a}function fv(a,s){Y.useContext(a1).strict}function _v(a){const s=s1(),{drag:i,layout:l}=s;if(!i&&!l)return{};const p={...i,...l};return{MeasureLayout:i!=null&&i.isEnabled(a)||l!=null&&l.isEnabled(a)?p.MeasureLayout:void 0,ProjectionNode:p.ProjectionNode}}function xv(a,s){if(typeof Proxy>"u")return fc;const i=new Map,l=(g,d)=>fc(g,d,a,s),p=(g,d)=>l(g,d);return new Proxy(p,{get:(g,d)=>d==="create"?l:(i.has(d)||i.set(d,fc(d,void 0,a,s)),i.get(d))})}const Gv=(a,s)=>s.isSVG??Vp(a)?new Qy(s):new Yy(s,{allowProjection:a!==Y.Fragment});class kv extends Wn{constructor(s){super(s),s.animationState||(s.animationState=t3(s))}updateAnimationControlsSubscription(){const{animate:s}=this.node.getProps();Sl(s)&&(this.unmountControls=s.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:s}=this.node.getProps(),{animate:i}=this.node.prevProps||{};s!==i&&this.updateAnimationControlsSubscription()}unmount(){var s;this.node.animationState.reset(),(s=this.unmountControls)==null||s.call(this)}}let yv=0;class vv extends Wn{constructor(){super(...arguments),this.id=yv++,this.isExitComplete=!1}update(){var g;if(!this.node.presenceContext)return;const{isPresent:s,onExitComplete:i}=this.node.presenceContext,{isPresent:l}=this.node.prevPresenceContext||{};if(!this.node.animationState||s===l)return;if(s&&l===!1){if(this.isExitComplete){const{initial:d,custom:h}=this.node.getProps();if(typeof d=="string"||typeof d=="object"&&d!==null&&!Array.isArray(d)){const f=Ta(this.node,d,h);if(f){const{transition:b,transitionEnd:x,...G}=f;for(const k in G)(g=this.node.getValue(k))==null||g.jump(G[k])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const p=this.node.animationState.setActive("exit",!s);i&&!s&&p.then(()=>{this.isExitComplete=!0,i(this.id)})}mount(){const{register:s,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),s&&(this.unmount=s(this.id))}unmount(){}}const Mv={animation:{Feature:kv},exit:{Feature:vv}};function wo(a){return{point:{x:a.pageX,y:a.pageY}}}const Tv=a=>s=>yp(s)&&a(s,wo(s));function Mo(a,s,i,l){return jo(a,s,Tv(i),l)}const p1=({current:a})=>a?a.ownerDocument.defaultView:null,ef=(a,s)=>Math.abs(a-s);function Av(a,s){const i=ef(a.x,s.x),l=ef(a.y,s.y);return Math.sqrt(i**2+l**2)}const tf=new Set(["auto","scroll"]);class d1{constructor(s,i,{transformPagePoint:l,contextWindow:p=window,dragSnapToOrigin:g=!1,distanceThreshold:d=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=v=>{this.handleScroll(v.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=el(this.lastRawMoveEventInfo,this.transformPagePoint));const v=_c(this.lastMoveEventInfo,this.history),M=this.startEvent!==null,S=Av(v.offset,{x:0,y:0})>=this.distanceThreshold;if(!M&&!S)return;const{point:I}=v,{timestamp:E}=st;this.history.push({...I,timestamp:E});const{onStart:K,onMove:O}=this.handlers;M||(K&&K(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),O&&O(this.lastMoveEvent,v)},this.handlePointerMove=(v,M)=>{this.lastMoveEvent=v,this.lastRawMoveEventInfo=M,this.lastMoveEventInfo=el(M,this.transformPagePoint),qe.update(this.updatePoint,!0)},this.handlePointerUp=(v,M)=>{this.end();const{onEnd:S,onSessionEnd:I,resumeAnimation:E}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&E&&E(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const K=_c(v.type==="pointercancel"?this.lastMoveEventInfo:el(M,this.transformPagePoint),this.history);this.startEvent&&S&&S(v,K),I&&I(v,K)},!yp(s))return;this.dragSnapToOrigin=g,this.handlers=i,this.transformPagePoint=l,this.distanceThreshold=d,this.contextWindow=p||window;const f=wo(s),b=el(f,this.transformPagePoint),{point:x}=b,{timestamp:G}=st;this.history=[{...x,timestamp:G}];const{onSessionStart:k}=i;k&&k(s,_c(b,this.history)),this.removeListeners=So(Mo(this.contextWindow,"pointermove",this.handlePointerMove),Mo(this.contextWindow,"pointerup",this.handlePointerUp),Mo(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(s){let i=s.parentElement;for(;i;){const l=getComputedStyle(i);(tf.has(l.overflowX)||tf.has(l.overflowY))&&this.scrollPositions.set(i,{x:i.scrollLeft,y:i.scrollTop}),i=i.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(s){const i=this.scrollPositions.get(s);if(!i)return;const l=s===window,p=l?{x:window.scrollX,y:window.scrollY}:{x:s.scrollLeft,y:s.scrollTop},g={x:p.x-i.x,y:p.y-i.y};g.x===0&&g.y===0||(l?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=g.x,this.lastMoveEventInfo.point.y+=g.y):this.history.length>0&&(this.history[0].x-=g.x,this.history[0].y-=g.y),this.scrollPositions.set(s,p),qe.update(this.updatePoint,!0))}updateHandlers(s){this.handlers=s}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),$n(this.updatePoint)}}function el(a,s){return s?{point:s(a.point)}:a}function nf(a,s){return{x:a.x-s.x,y:a.y-s.y}}function _c({point:a},s){return{point:a,delta:nf(a,g1(s)),offset:nf(a,Iv(s)),velocity:jv(s,.1)}}function Iv(a){return a[0]}function g1(a){return a[a.length-1]}function jv(a,s){if(a.length<2)return{x:0,y:0};let i=a.length-1,l=null;const p=g1(a);for(;i>=0&&(l=a[i],!(p.timestamp-l.timestamp>jt(s)));)i--;if(!l)return{x:0,y:0};l===a[0]&&a.length>2&&p.timestamp-l.timestamp>jt(s)*2&&(l=a[1]);const g=zt(p.timestamp-l.timestamp);if(g===0)return{x:0,y:0};const d={x:(p.x-l.x)/g,y:(p.y-l.y)/g};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function Sv(a,{min:s,max:i},l){return s!==void 0&&a<s?a=l?Ve(s,a,l.min):Math.max(a,s):i!==void 0&&a>i&&(a=l?Ve(i,a,l.max):Math.min(a,i)),a}function af(a,s,i){return{min:s!==void 0?a.min+s:void 0,max:i!==void 0?a.max+i-(a.max-a.min):void 0}}function Vv(a,{top:s,left:i,bottom:l,right:p}){return{x:af(a.x,i,p),y:af(a.y,s,l)}}function sf(a,s){let i=s.min-a.min,l=s.max-a.max;return s.max-s.min<a.max-a.min&&([i,l]=[l,i]),{min:i,max:l}}function qv(a,s){return{x:sf(a.x,s.x),y:sf(a.y,s.y)}}function wv(a,s){let i=.5;const l=ct(a),p=ct(s);return p>l?i=To(s.min,s.max-l,a.min):l>p&&(i=To(a.min,a.max-p,s.min)),tn(0,1,i)}function Ev(a,s){const i={};return s.min!==void 0&&(i.min=s.min-a.min),s.max!==void 0&&(i.max=s.max-a.min),i}const Wc=.35;function Nv(a=Wc){return a===!1?a=0:a===!0&&(a=Wc),{x:of(a,"left","right"),y:of(a,"top","bottom")}}function of(a,s,i){return{min:lf(a,s),max:lf(a,i)}}function lf(a,s){return typeof a=="number"?a:a[s]||0}const Cv=new WeakMap;class Dv{constructor(s){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Qe(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=s}start(s,{snapToCursor:i=!1,distanceThreshold:l}={}){const{presenceContext:p}=this.visualElement;if(p&&p.isPresent===!1)return;const g=G=>{i&&this.snapToCursor(wo(G).point),this.stopAnimation()},d=(G,k)=>{const{drag:v,dragPropagation:M,onDragStart:S}=this.getProps();if(v&&!M&&(this.openDragLock&&this.openDragLock(),this.openDragLock=uy(v),!this.openDragLock))return;this.latestPointerEvent=G,this.latestPanInfo=k,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),$t(E=>{let K=this.getAxisMotionValue(E).get()||0;if(en.test(K)){const{projection:O}=this.visualElement;if(O&&O.layout){const C=O.layout.layoutBox[E];C&&(K=ct(C)*(parseFloat(K)/100))}}this.originPoint[E]=K}),S&&qe.update(()=>S(G,k),!1,!0),Bc(this.visualElement,"transform");const{animationState:I}=this.visualElement;I&&I.setActive("whileDrag",!0)},h=(G,k)=>{this.latestPointerEvent=G,this.latestPanInfo=k;const{dragPropagation:v,dragDirectionLock:M,onDirectionLock:S,onDrag:I}=this.getProps();if(!v&&!this.openDragLock)return;const{offset:E}=k;if(M&&this.currentDirection===null){this.currentDirection=Rv(E),this.currentDirection!==null&&S&&S(this.currentDirection);return}this.updateAxis("x",k.point,E),this.updateAxis("y",k.point,E),this.visualElement.render(),I&&qe.update(()=>I(G,k),!1,!0)},f=(G,k)=>{this.latestPointerEvent=G,this.latestPanInfo=k,this.stop(G,k),this.latestPointerEvent=null,this.latestPanInfo=null},b=()=>{const{dragSnapToOrigin:G}=this.getProps();(G||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:x}=this.getProps();this.panSession=new d1(s,{onSessionStart:g,onStart:d,onMove:h,onSessionEnd:f,resumeAnimation:b},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:x,distanceThreshold:l,contextWindow:p1(this.visualElement),element:this.visualElement.current})}stop(s,i){const l=s||this.latestPointerEvent,p=i||this.latestPanInfo,g=this.isDragging;if(this.cancel(),!g||!p||!l)return;const{velocity:d}=p;this.startAnimation(d);const{onDragEnd:h}=this.getProps();h&&qe.postRender(()=>h(l,p))}cancel(){this.isDragging=!1;const{projection:s,animationState:i}=this.visualElement;s&&(s.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:l}=this.getProps();!l&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(s,i,l){const{drag:p}=this.getProps();if(!l||!tl(s,p,this.currentDirection))return;const g=this.getAxisMotionValue(s);let d=this.originPoint[s]+l[s];this.constraints&&this.constraints[s]&&(d=Sv(d,this.constraints[s],this.elastic[s])),g.set(d)}resolveConstraints(){var g;const{dragConstraints:s,dragElastic:i}=this.getProps(),l=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(g=this.visualElement.projection)==null?void 0:g.layout,p=this.constraints;s&&ds(s)?this.constraints||(this.constraints=this.resolveRefConstraints()):s&&l?this.constraints=Vv(l.layoutBox,s):this.constraints=!1,this.elastic=Nv(i),p!==this.constraints&&!ds(s)&&l&&this.constraints&&!this.hasMutatedConstraints&&$t(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=Ev(l.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:s,onMeasureDragConstraints:i}=this.getProps();if(!s||!ds(s))return!1;const l=s.current,{projection:p}=this.visualElement;if(!p||!p.layout)return!1;p.root&&(p.root.scroll=void 0,p.root.updateScroll());const g=Ry(l,p.root,this.visualElement.getTransformPagePoint());let d=qv(p.layout.layoutBox,g);if(i){const h=i(Cy(d));this.hasMutatedConstraints=!!h,h&&(d=N_(h))}return d}startAnimation(s){const{drag:i,dragMomentum:l,dragElastic:p,dragTransition:g,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),f=this.constraints||{},b=$t(x=>{if(!tl(x,i,this.currentDirection))return;let G=f&&f[x]||{};(d===!0||d===x)&&(G={min:0,max:0});const k=p?200:1e6,v=p?40:1e7,M={type:"inertia",velocity:l?s[x]:0,bounceStiffness:k,bounceDamping:v,timeConstant:750,restDelta:1,restSpeed:10,...g,...G};return this.startAxisValueAnimation(x,M)});return Promise.all(b).then(h)}startAxisValueAnimation(s,i){const l=this.getAxisMotionValue(s);return Bc(this.visualElement,s),l.start(_p(s,l,0,i,this.visualElement,!1))}stopAnimation(){$t(s=>this.getAxisMotionValue(s).stop())}getAxisMotionValue(s){const i=`_drag${s.toUpperCase()}`,p=this.visualElement.getProps()[i];return p||this.visualElement.getValue(s,this.visualElement.latestValues[s]??0)}snapToCursor(s){$t(i=>{const{drag:l}=this.getProps();if(!tl(i,l,this.currentDirection))return;const{projection:p}=this.visualElement,g=this.getAxisMotionValue(i);if(p&&p.layout){const{min:d,max:h}=p.layout.layoutBox[i],f=g.get()||0;g.set(s[i]-Ve(d,h,.5)+f)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:s,dragConstraints:i}=this.getProps(),{projection:l}=this.visualElement;if(!ds(i)||!l||!this.constraints)return;this.stopAnimation();const p={x:0,y:0};$t(d=>{const h=this.getAxisMotionValue(d);if(h&&this.constraints!==!1){const f=h.get();p[d]=wv({min:f,max:f},this.constraints[d])}});const{transformTemplate:g}=this.visualElement.getProps();this.visualElement.current.style.transform=g?g({},""):"none",l.root&&l.root.updateScroll(),l.updateLayout(),this.constraints=!1,this.resolveConstraints(),$t(d=>{if(!tl(d,s,null))return;const h=this.getAxisMotionValue(d),{min:f,max:b}=this.constraints[d];h.set(Ve(f,b,p[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;Cv.set(this.visualElement,this);const s=this.visualElement.current,i=Mo(s,"pointerdown",b=>{const{drag:x,dragListener:G=!0}=this.getProps(),k=b.target,v=k!==s&&hy(k);x&&G&&!v&&this.start(b)});let l;const p=()=>{const{dragConstraints:b}=this.getProps();ds(b)&&b.current&&(this.constraints=this.resolveRefConstraints(),l||(l=Hv(s,b.current,()=>this.scalePositionWithinConstraints())))},{projection:g}=this.visualElement,d=g.addEventListener("measure",p);g&&!g.layout&&(g.root&&g.root.updateScroll(),g.updateLayout()),qe.read(p);const h=jo(window,"resize",()=>this.scalePositionWithinConstraints()),f=g.addEventListener("didUpdate",(({delta:b,hasLayoutChanged:x})=>{this.isDragging&&x&&($t(G=>{const k=this.getAxisMotionValue(G);k&&(this.originPoint[G]+=b[G].translate,k.set(k.get()+b[G].translate))}),this.visualElement.render())}));return()=>{h(),i(),d(),f&&f(),l&&l()}}getProps(){const s=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:l=!1,dragPropagation:p=!1,dragConstraints:g=!1,dragElastic:d=Wc,dragMomentum:h=!0}=s;return{...s,drag:i,dragDirectionLock:l,dragPropagation:p,dragConstraints:g,dragElastic:d,dragMomentum:h}}}function rf(a){let s=!0;return()=>{if(s){s=!1;return}a()}}function Hv(a,s,i){const l=mb(a,rf(i)),p=mb(s,rf(i));return()=>{l(),p()}}function tl(a,s,i){return(s===!0||s===a)&&(i===null||i===a)}function Rv(a,s=10){let i=null;return Math.abs(a.y)>s?i="y":Math.abs(a.x)>s&&(i="x"),i}class Ov extends Wn{constructor(s){super(s),this.removeGroupControls=Lt,this.removeListeners=Lt,this.controls=new Dv(s)}mount(){const{dragControls:s}=this.node.getProps();s&&(this.removeGroupControls=s.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Lt}update(){const{dragControls:s}=this.node.getProps(),{dragControls:i}=this.node.prevProps||{};s!==i&&(this.removeGroupControls(),s&&(this.removeGroupControls=s.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const xc=a=>(s,i)=>{a&&qe.update(()=>a(s,i),!1,!0)};class zv extends Wn{constructor(){super(...arguments),this.removePointerDownListener=Lt}onPointerDown(s){this.session=new d1(s,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:p1(this.node)})}createPanHandlers(){const{onPanSessionStart:s,onPanStart:i,onPan:l,onPanEnd:p}=this.node.getProps();return{onSessionStart:xc(s),onStart:xc(i),onMove:xc(l),onEnd:(g,d)=>{delete this.session,p&&qe.postRender(()=>p(g,d))}}}mount(){this.removePointerDownListener=Mo(this.node.current,"pointerdown",s=>this.onPointerDown(s))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Gc=!1;class Lv extends Y.Component{componentDidMount(){const{visualElement:s,layoutGroup:i,switchLayoutGroup:l,layoutId:p}=this.props,{projection:g}=s;g&&(i.group&&i.group.add(g),l&&l.register&&p&&l.register(g),Gc&&g.root.didUpdate(),g.addEventListener("animationComplete",()=>{this.safeToRemove()}),g.setOptions({...g.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),dl.hasEverUpdated=!0}getSnapshotBeforeUpdate(s){const{layoutDependency:i,visualElement:l,drag:p,isPresent:g}=this.props,{projection:d}=l;return d&&(d.isPresent=g,s.layoutDependency!==i&&d.setOptions({...d.options,layoutDependency:i}),Gc=!0,p||s.layoutDependency!==i||i===void 0||s.isPresent!==g?d.willUpdate():this.safeToRemove(),s.isPresent!==g&&(g?d.promote():d.relegate()||qe.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:s,layoutAnchor:i}=this.props,{projection:l}=s;l&&(l.options.layoutAnchor=i,l.root.didUpdate(),kp.postRender(()=>{!l.currentAnimation&&l.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:s,layoutGroup:i,switchLayoutGroup:l}=this.props,{projection:p}=s;Gc=!0,p&&(p.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(p),l&&l.deregister&&l.deregister(p))}safeToRemove(){const{safeToRemove:s}=this.props;s&&s()}render(){return null}}function m1(a){const[s,i]=n1(),l=Y.useContext(ap);return c.jsx(Lv,{...a,layoutGroup:l,switchLayoutGroup:Y.useContext(u1),isPresent:s,safeToRemove:i})}const Uv={pan:{Feature:zv},drag:{Feature:Ov,ProjectionNode:t1,MeasureLayout:m1}};function uf(a,s,i){const{props:l}=a;a.animationState&&l.whileHover&&a.animationState.setActive("whileHover",i==="Start");const p="onHover"+i,g=l[p];g&&qe.postRender(()=>g(s,wo(s)))}class Bv extends Wn{mount(){const{current:s}=this.node;s&&(this.unmount=py(s,(i,l)=>(uf(this.node,l,"Start"),p=>uf(this.node,p,"End"))))}unmount(){}}class Yv extends Wn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let s=!1;try{s=this.node.current.matches(":focus-visible")}catch{s=!0}!s||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=So(jo(this.node.current,"focus",()=>this.onFocus()),jo(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function cf(a,s,i){const{props:l}=a;if(a.current instanceof HTMLButtonElement&&a.current.disabled)return;a.animationState&&l.whileTap&&a.animationState.setActive("whileTap",i==="Start");const p="onTap"+(i==="End"?"":i),g=l[p];g&&qe.postRender(()=>g(s,wo(s)))}class Pv extends Wn{mount(){const{current:s}=this.node;if(!s)return;const{globalTapTarget:i,propagate:l}=this.node.props;this.unmount=fy(s,(p,g)=>(cf(this.node,g,"Start"),(d,{success:h})=>cf(this.node,d,h?"End":"Cancel")),{useGlobalTarget:i,stopPropagation:(l==null?void 0:l.tap)===!1})}unmount(){}}const ep=new WeakMap,kc=new WeakMap,Xv=a=>{const s=ep.get(a.target);s&&s(a)},Kv=a=>{a.forEach(Xv)};function Zv({root:a,...s}){const i=a||document;kc.has(i)||kc.set(i,{});const l=kc.get(i),p=JSON.stringify(s);return l[p]||(l[p]=new IntersectionObserver(Kv,{root:a,...s})),l[p]}function Fv(a,s,i){const l=Zv(s);return ep.set(a,i),l.observe(a),()=>{ep.delete(a),l.unobserve(a)}}const Qv={some:0,all:1};class Jv extends Wn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var f;(f=this.stopObserver)==null||f.call(this);const{viewport:s={}}=this.node.getProps(),{root:i,margin:l,amount:p="some",once:g}=s,d={root:i?i.current:void 0,rootMargin:l,threshold:typeof p=="number"?p:Qv[p]},h=b=>{const{isIntersecting:x}=b;if(this.isInView===x||(this.isInView=x,g&&!x&&this.hasEnteredView))return;x&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",x);const{onViewportEnter:G,onViewportLeave:k}=this.node.getProps(),v=x?G:k;v&&v(b)};this.stopObserver=Fv(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:s,prevProps:i}=this.node;["amount","margin","root"].some($v(s,i))&&this.startObserver()}unmount(){var s;(s=this.stopObserver)==null||s.call(this),this.hasEnteredView=!1,this.isInView=!1}}function $v({viewport:a={}},{viewport:s={}}={}){return i=>a[i]!==s[i]}const Wv={inView:{Feature:Jv},tap:{Feature:Pv},focus:{Feature:Yv},hover:{Feature:Bv}},eM={layout:{ProjectionNode:t1,MeasureLayout:m1}},tM={...Mv,...Wv,...Uv,...eM},yn=xv(tM,Gv),h1=Y.createContext(void 0),nM={LATAM:{"nav.inicio":"Inicio","nav.novedades":"Novedades","nav.servicios":"Servicios","nav.evo":"Evo","nav.otros":"Otros códigos","nav.guia":"Guía","nav.tutoriales":"Tutoriales","nav.descargas":"Descargas","home.search_placeholder":"Nombre o código...","home.sort_az":"Nombre A-Z","home.sort_za":"Nombre Z-A","home.sort_code_asc":"Código Asc.","home.sort_code_desc":"Código Desc.","home.sort_hp_desc":"M. Mayor Vida","home.sort_atk_desc":"M. Mayor Ataque","home.sort_spd_desc":"M. Mayor Velocidad","home.show":"Mostrar","home.hide":"Ocultar","home.filtered":"Filtrados","home.total_base":"Base Total","services.title":"Servicios Exclusivos","services.subtitle":"Potencia tu cuenta con nuestros servicios especializados de Mutants: Genetic Gladiators.","services.buy":"Adquirir","services.payment_methods":"Métodos de Pago","services.contact_us":"Contáctanos","region.latam":"LATAM","region.usd":"USD","tip.label":"Tip:","tip.text":"Para asegurar la sincronización de datos, se recomienda acceder vía Facebook o limpiar cookies/caché del navegador (Modo Incógnito).","footer.renovated":"Versión renovada","footer.nav":"Navegación","footer.legal":"Información Legal","footer.terms":"Términos y Condiciones","footer.rights":"© 2026 Smith Luque. Todos los derechos reservados.","footer.desc":"Base de datos de códigos de Mutantes de MGG para Game Guardian. Aquí hay contenido para aprender y recursos para usar.","whatsapp.title":"Grupo de WhatsApp","whatsapp.desc":"Únete para ayuda, consejos y enseñanza dentro de la comunidad.","whatsapp.btn":"Unirme al grupo","stats.mutants":"Mutantes","stats.version":"Versión","home.main_database":"Base principal","home.main_desc":"Lista completa de mutantes con búsqueda rápida, filtros por genes y carga automática desde tu archivo de códigos.","home.featured_mutants":"Novedades Destacadas","home.explore_catalog":"Explorar Catálogo","home.reset_engine":"Reiniciar Motor","home.genetic_config":"Configuración Genética","home.search_engine":"Motor de Búsqueda","home.sort_filters":"Filtros de Orden","home.no_results":"No se encontraron mutantes con esos filtros.","home.hidden_results":"Resultados ocultos.","home.active":"Activos","home.total":"Total","gene.dominant":"Dominante","gene.active":"Activo","gene.inactive":"Inactivo","layout.by_author":"Por Smith Luque","layout.select_language":"SELECCIONAR IDIOMA","layout.active_support":"Grupo Activo","mutant.verified":"Verificado","mutant.extract_code":"Extraer Código","home.load_more_rem":"Cargar más ({rem} restantes)","layout.color_theme":"Color de Diseño","home.single_gene_only":"Solo 1 Gen (Monogénicos)","home.all_genes":"Todos los genes","home.announcement_title":"Anuncio Importante","home.announcement_desc":"Me disculpo sinceramente por haber publicado previamente algunas estadísticas con errores. El problema ya ha sido completamente solucionado con los datos correctos. Si detectas cualquier otro inconveniente o error, por favor no dudes en contactarme."},USD:{"nav.inicio":"Home","nav.novedades":"News","nav.servicios":"Services","nav.evo":"Evo Calc","nav.otros":"Other Codes","nav.guia":"Guide","nav.tutoriales":"Tutorials","nav.descargas":"Downloads","home.search_placeholder":"Name or code...","home.sort_az":"Name A-Z","home.sort_za":"Name Z-A","home.sort_code_asc":"Code Asc.","home.sort_code_desc":"Code Desc.","home.sort_hp_desc":"M. Highest HP","home.sort_atk_desc":"M. Highest ATK","home.sort_spd_desc":"M. Highest Speed","home.show":"Show","home.hide":"Hide","home.filtered":"Filtered","home.total_base":"Total Base","services.title":"Exclusive Services","services.subtitle":"Boost your account with our specialized Mutants: Genetic Gladiators services.","services.buy":"Purchase","services.payment_methods":"Payment Methods","services.contact_us":"Contact Us","region.latam":"LATAM","region.usd":"USD","tip.label":"Tip:","tip.text":"To ensure data synchronization, it is recommended to access via Facebook or clear browser cookies/cache (Incognito Mode).","footer.renovated":"Renewed Version","footer.nav":"Navigation","footer.legal":"Legal Information","footer.terms":"Terms & Conditions","footer.rights":"© 2026 Smith Luque. All rights reserved.","footer.desc":"MGG Mutant code database for Game Guardian. Here is content to learn and resources to use.","whatsapp.title":"WhatsApp Group","whatsapp.desc":"Join for help, tips, and teaching within the community.","whatsapp.btn":"Join the group","stats.mutants":"Mutants","stats.version":"Version","home.main_database":"Main Database","home.main_desc":"Full mutant list with fast search, gene filters, and automatic code loading.","home.featured_mutants":"Featured New Mutants","home.explore_catalog":"Explore Catalog","home.reset_engine":"Reset Engine","home.genetic_config":"Genetic Configuration","home.search_engine":"Search Engine","home.sort_filters":"Sort Filters","home.no_results":"No mutants found with those filters.","home.hidden_results":"Results hidden.","home.active":"Active","home.total":"Total","gene.dominant":"Dominant","gene.active":"Active","gene.inactive":"Inactive","layout.by_author":"By Smith Luque","layout.select_language":"SELECT LANGUAGE","layout.active_support":"Active Support","mutant.verified":"Verified","mutant.extract_code":"Extract Code","home.load_more_rem":"Load More ({rem} remaining)","layout.color_theme":"Design Color","home.single_gene_only":"Single Gene Only (Pure)","home.all_genes":"All Genes","home.announcement_title":"Important Announcement","home.announcement_desc":"I sincerely apologize for previously publishing some incorrect stats. The issue has now been fully resolved with correct data. If you notice any other issues, please feel free to contact me."},PT:{"nav.inicio":"Início","nav.novedades":"Novidades","nav.servicios":"Serviços","nav.evo":"Evo","nav.otros":"Outros códigos","nav.guia":"Guia","nav.tutoriales":"Tutoriais","nav.descargas":"Downloads","home.search_placeholder":"Nome ou código...","home.sort_az":"Nome A-Z","home.sort_za":"Nome Z-A","home.sort_code_asc":"Código Cresc.","home.sort_code_desc":"Código Decresc.","home.sort_hp_desc":"M. Maior Vida","home.sort_atk_desc":"M. Maior Ataque","home.sort_spd_desc":"M. Maior Velocidade","home.show":"Mostrar","home.hide":"Ocultar","home.filtered":"Filtrados","home.total_base":"Total Base","services.title":"Serviços Exclusivos","services.subtitle":"Melhore sua conta com nossos serviços especializados de Mutants: Genetic Gladiators.","services.buy":"Adquirir","services.payment_methods":"Métodos de Pagamento","services.contact_us":"Contate-nos","region.latam":"LATAM","region.usd":"USD","tip.label":"Dica:","tip.text":"Para garantir a sincronização de dados, recomenda-se acessar via Facebook ou limpar os cookies/cache do navegador (Modo Incógnito).","footer.renovated":"Versão Renovada","footer.nav":"Navegação","footer.legal":"Informação Legal","footer.terms":"Termos e Condições","footer.rights":"© 2026 Smith Luque. Todos os direitos reservados.","footer.desc":"Banco de dados de códigos de Mutants MGG para Game Guardian. Conteúdos para aprendizagem e recursos.","whatsapp.title":"Grupo de WhatsApp","whatsapp.desc":"Entre para obter ajuda, dicas e suporte na comunidade.","whatsapp.btn":"Entrar no grupo","stats.mutants":"Mutantes","stats.version":"Versão","home.main_database":"Base Principal","home.main_desc":"Lista completa de mutantes com busca rápida, filtros de genes e carregamento automático a partir do seu arquivo de códigos.","home.featured_mutants":"Novidades em Destaque","home.explore_catalog":"Explorar Catálogo","home.reset_engine":"Reiniciar Mecanismo","home.genetic_config":"Configuração Genética","home.search_engine":"Mecanismo de Busca","home.sort_filters":"Filtros de Ordenação","home.no_results":"Nenhum mutante encontrado com esses filtros.","home.hidden_results":"Resultados ocultos.","home.active":"Ativos","home.total":"Total","gene.dominant":"Dominante","gene.active":"Ativo","gene.inactive":"Inativo","layout.by_author":"Por Smith Luque","layout.select_language":"SELECIONAR IDIOMA","layout.active_support":"Grupo Ativo","mutant.verified":"Verificado","mutant.extract_code":"Extrair Código","home.load_more_rem":"Carregar mais ({rem} restantes)","layout.color_theme":"Cor do Design","home.single_gene_only":"Apenas 1 Gene (Monogênicos)","home.all_genes":"Todos os genes","home.announcement_title":"Anúncio Importante","home.announcement_desc":"Peço desculpas sinceras por postar anteriormente algumas estatísticas com erros. O problema já foi totalmente resolvido com os dados corretos. Se notar qualquer outro problema, entre em contato comigo."},FR:{"nav.inicio":"Accueil","nav.novedades":"Actualités","nav.servicios":"Services","nav.evo":"Evos","nav.otros":"Autres codes","nav.guia":"Guide","nav.tutoriales":"Tutoriels","nav.descargas":"Téléchargements","home.search_placeholder":"Nom ou code...","home.sort_az":"Nom A-Z","home.sort_za":"Nom Z-A","home.sort_code_asc":"Code Asc.","home.sort_code_desc":"Code Desc.","home.sort_hp_desc":"M. Plus de vie","home.sort_atk_desc":"M. Plus d'attaque","home.sort_spd_desc":"M. Plus de vitesse","home.show":"Afficher","home.hide":"Masquer","home.filtered":"Filtrés","home.total_base":"Base totale","services.title":"Services exclusifs","services.subtitle":"Améliorez votre compte avec nos services spécialisés Mutants: Genetic Gladiators.","services.buy":"Acheter","services.payment_methods":"Modes de paiement","services.contact_us":"Contactez-nous","region.latam":"LATAM","region.usd":"USD","tip.label":"Conseil:","tip.text":"Pour garantir la synchronisation des données, il est recommandé de se connecter via Facebook ou d'effacer les cookies/cache du navigateur (Mode Incognito).","footer.renovated":"Version rénovée","footer.nav":"Navigation","footer.legal":"Informations légales","footer.terms":"Conditions générales","footer.rights":"© 2026 Smith Luque. Tous droits réservés.","footer.desc":"Base de données des codes Mutants MGG pour Game Guardian. Tutoriels d'apprentissage et ressources à utiliser.","whatsapp.title":"Groupe WhatsApp","whatsapp.desc":"Rejoignez-nous pour obtenir de l'aide, des conseils et échanger avec la communauté.","whatsapp.btn":"Rejoindre le groupe","stats.mutants":"Mutants","stats.version":"Version","home.main_database":"Base principale","home.main_desc":"Liste complète des mutants avec recherche rapide, filtres de gènes et chargement automatique depuis votre fichier de codes.","home.featured_mutants":"Nouveautés en Vedette","home.explore_catalog":"Explorer le Catalogue","home.reset_engine":"Réinitialiser le moteur","home.genetic_config":"Configuration Génétique","home.search_engine":"Moteur de Recherche","home.sort_filters":"Filtres de Tri","home.no_results":"Aucun mutant trouvé avec ces filtres.","home.hidden_results":"Résultats masqués.","home.active":"Actifs","home.total":"Total","gene.dominant":"Dominant","gene.active":"Actif","gene.inactive":"Inactif","layout.by_author":"Par Smith Luque","layout.select_language":"SÉLECTIONNER LA LANGUE","layout.active_support":"Groupe Actif","mutant.verified":"Vérifié","mutant.extract_code":"Extraire le Code","home.load_more_rem":"Charger plus ({rem} restants)","layout.color_theme":"Couleur du Design","home.single_gene_only":"Un seul gène (Monogénique)","home.all_genes":"Tous les gènes","home.announcement_title":"Annonce Importante","home.announcement_desc":"Je m'excuse sincèrement pour avoir publié précédemment des statistiques erronées. Le problème a été entièrement résolu avec les données correctes. Si vous remarquez un autre problème, n'hésitez pas à me contacter."},DE:{"nav.inicio":"Startseite","nav.novedades":"Neuigkeiten","nav.servicios":"Dienste","nav.evo":"Evo","nav.otros":"Andere Codes","nav.guia":"Leitfaden","nav.tutoriales":"Tutorials","nav.descargas":"Downloads","home.search_placeholder":"Name oder Code...","home.sort_az":"Name A-Z","home.sort_za":"Name Z-A","home.sort_code_asc":"Code Aufst.","home.sort_code_desc":"Code Abst.","home.sort_hp_desc":"M. Höchste LP","home.sort_atk_desc":"M. Höchster Angriff","home.sort_spd_desc":"M. Höchste Geschwindigkeit","home.show":"Anzeigen","home.hide":"Ausblenden","home.filtered":"Gefiltert","home.total_base":"Gesamtbasis","services.title":"Exklusive Dienste","services.subtitle":"Verbessern Sie Ihr Konto mit unseren spezialisierten Mutants: Genetic Gladiators-Diensten.","services.buy":"Erwerben","services.payment_methods":"Zahlungsarten","services.contact_us":"Kontakt","region.latam":"LATAM","region.usd":"USD","tip.label":"Tipp:","tip.text":"Um die Datensynchronisation sicherzustellen, wird empfohlen, sich über Facebook anzumelden oder Browser-Cookies/-Cache zu löschen (Inkognito-Modus).","footer.renovated":"Renovierte Version","footer.nav":"Navigation","footer.legal":"Rechtliche Hinweise","footer.terms":"AGB","footer.rights":"© 2026 Smith Luque. Alle Rechte vorbehalten.","footer.desc":"MGG Mutanten-Code-Datenbank für Game Guardian. Tutorials zum Lernen und Ressourcen zur Nutzung.","whatsapp.title":"WhatsApp-Gruppe","whatsapp.desc":"Treten Sie bei für Hilfe, Tipps und Austausch in der Gesellschaft.","whatsapp.btn":"Gruppe beitreten","stats.mutants":"Mutanten","stats.version":"Version","home.main_database":"Haupt-Datenbank","home.main_desc":"Vollständige Mutantenliste mit Schnellsuche, Genfiltern und automatischem Laden von Codes.","home.featured_mutants":"Hervorgehobene Neuigkeiten","home.explore_catalog":"Katalog erkunden","home.reset_engine":"Zuchtrechner zurücksetzen","home.genetic_config":"Genetische Konfiguration","home.search_engine":"Suchmaschine","home.sort_filters":"Sortierfilter","home.no_results":"Keine Mutanten mit diesen Filtern gefunden.","home.hidden_results":"Ergebnisse ausgeblendet.","home.active":"Aktiv","home.total":"Gesamt","gene.dominant":"Dominant","gene.active":"Aktiv","gene.inactive":"Inaktiv","layout.by_author":"Von Smith Luque","layout.select_language":"SPRACHE AUSWÄHLEN","layout.active_support":"Aktive Gruppe","mutant.verified":"Verifiziert","mutant.extract_code":"Code Extrahieren","home.load_more_rem":"Mehr laden ({rem} verbleibend)","layout.color_theme":"Design Farbe","home.single_gene_only":"Nur 1 Gen (Monogenisch)","home.all_genes":"Alle Gene","home.announcement_title":"Wichtige Ankündigung","home.announcement_desc":"Ich entschuldige mich aufrichtig dafür, dass ich zuvor fehlerhafte Statistiken veröffentlicht habe. Das Problem wurde mit den korrekten Daten vollständig behoben. Wenn Sie weitere Fehler bemerken, kontaktieren Sie mich bitte."}},aM={blue:{brand:"#2563eb",brand2:"#3b82f6"},green:{brand:"#14532d",brand2:"#15803d"},red:{brand:"#dc2626",brand2:"#ef4444"},pink:{brand:"#db2777",brand2:"#ec4899"},purple:{brand:"#7c3aed",brand2:"#8b5cf6"},white:{brand:"#d1d5db",brand2:"#ffffff"}},sM=({children:a})=>{const[s,i]=Y.useState(()=>localStorage.getItem("user-color-theme")||"blue"),l=k=>{localStorage.setItem("user-color-theme",k),i(k)};Y.useEffect(()=>{const k=aM[s];k&&(document.documentElement.style.setProperty("--blue-brand",k.brand),document.documentElement.style.setProperty("--blue-brand-2",k.brand2))},[s]);const[p,g]=Y.useState(()=>{const k=localStorage.getItem("user-region"),v=localStorage.getItem("user-country-code"),M=!!localStorage.getItem("user-manual-force");let S=k||"LATAM";v==="PE"&&(S="LATAM");const I=v?d(v):1;return{region:S,countryCode:v||null,multiplier:I,isManual:M,detectedCountry:null}});Y.useEffect(()=>{const k=localStorage.getItem("user-region"),v=localStorage.getItem("user-country-code"),M=!!localStorage.getItem("user-manual-force");v==="PE"&&k==="USD"&&!M&&(localStorage.setItem("user-region","LATAM"),g(S=>({...S,region:"LATAM"})))},[]);function d(k){const v=k.toUpperCase(),M=Sf.find(S=>S.id.toUpperCase()===v);if(M)return M.rate;for(const[S,I]of Object.entries(aG))if(I.includes(v))return parseFloat(S);return Kh.includes(v)?1.5:1}const h=async()=>{var k;try{const S=(k=(await(await fetch("https://ipapi.co/json/")).json()).country_code)==null?void 0:k.toUpperCase();if(!S)return;const I=Kh.includes(S),E=S==="PE",K=d(S),O=localStorage.getItem("user-region");let C=I?"USD":"LATAM";O&&(E&&O==="USD"&&!localStorage.getItem("user-manual-force")?C="LATAM":C=O),g(z=>({...z,region:C,countryCode:z.isManual?z.countryCode:S,detectedCountry:S,multiplier:z.isManual?z.multiplier:K}))}catch(v){console.error("IP Detection failed:",v)}};Y.useEffect(()=>{h()},[]);const f=k=>{localStorage.setItem("user-region",k),localStorage.setItem("user-manual-force","true"),g(v=>({...v,region:k,isManual:!0}))},b=k=>{const v=k.toUpperCase(),M=d(v),I=["PE","MX","AR","CL","CO","BO","VE","EC","UY","PY","PA","PR","CR","HN","SV","NI","GT","DO","ES"].includes(v)?"LATAM":"USD";localStorage.setItem("user-region",I),localStorage.setItem("user-country-code",v),localStorage.setItem("user-manual-force","true"),g(E=>({...E,region:I,countryCode:v,multiplier:M,isManual:!0}))},x=()=>{localStorage.removeItem("user-region"),localStorage.removeItem("user-country-code"),localStorage.removeItem("user-manual-force"),g(k=>({...k,isManual:!1})),h()},G=(k,v)=>{let M=nM[p.region][k]||k;return v&&Object.entries(v).forEach(([S,I])=>{M=M.replace(`{${S}}`,String(I))}),M};return c.jsx(h1.Provider,{value:{...p,colorTheme:s,setColorTheme:l,setRegion:f,setCountry:b,resetSelection:x,translate:G},children:a})},St=()=>{const a=Y.useContext(h1);if(a===void 0)throw new Error("useRegion must be used within a RegionProvider");return a},pf={"/":jc,"/novedades":Af,"/servicios":Go,"/evo":eG,"/otros":Tc,"/guia":Ac,"/tutoriales":sl,"/descargas":Mf},nl={LATAM:{flag:"🇪🇸",label:"Español"},USD:{flag:"🇺🇸",label:"English"},PT:{flag:"🇵🇹",label:"Português"},FR:{flag:"🇫🇷",label:"Français"},DE:{flag:"🇩🇪",label:"Deutsch"}};function oM({children:a,currentPath:s,onNavigate:i,isOnline:l}){var C,z;const[p,g]=Y.useState(!1),[d,h]=Y.useState(!1),{region:f,setRegion:b,countryCode:x,setCountry:G,translate:k,colorTheme:v,setColorTheme:M}=St(),S=f!=="LATAM"&&f!=="PT"?"https://chat.whatsapp.com/IdBIvXWUPNjDLcPmBvkp1B":np,I=P=>{i(P),g(!1),window.scrollTo({top:0,behavior:"smooth"})},E="text-blue-brand-2",K="from-blue-brand to-blue-brand-2";return c.jsxs("div",{className:"min-h-screen",children:[c.jsx("div",{className:"grid-overlay"}),c.jsxs("header",{className:"site-header sticky top-0 z-50 transition-all duration-300",children:[c.jsx("div",{className:"absolute inset-0 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.4)] bg-[#050a14]/60"}),c.jsxs("div",{className:"mx-auto px-4 lg:px-8 header-inner relative flex items-center justify-between min-h-[64px] max-w-[1400px]",children:[c.jsxs("div",{className:"brand flex items-center gap-3 cursor-pointer group",onClick:()=>I("/"),children:[c.jsxs("div",{className:"relative",children:[c.jsx("div",{className:"absolute inset-0 blur-md opacity-0 group-hover:opacity-40 transition-opacity bg-blue-brand"}),c.jsx("div",{className:`brand-logo w-9 h-9 md:w-10 md:h-10 relative flex items-center justify-center rounded-lg md:rounded-xl bg-gradient-to-br ${K} overflow-hidden shadow-lg group-hover:scale-105 transition-transform shrink-0 border border-white/20`,children:c.jsx("img",{src:"https://github.com/luqueSmith/MGG/blob/main/img/Logo_mgg.png?raw=true",alt:"Logo MGG",className:"w-full h-full object-cover"})})]}),c.jsxs("div",{className:"flex flex-col text-left",children:[c.jsx("strong",{className:`block text-white text-[13px] md:text-[15px] font-black tracking-tight uppercase leading-none mb-0.5 group-hover:${E} transition-colors`,children:"Mutodex MGG"}),c.jsx("span",{className:`block text-[7px] md:text-[9px] ${E} uppercase tracking-[0.25em] font-black opacity-80`,children:k("layout.by_author")})]})]}),c.jsx("nav",{className:"hidden",children:ac.map(P=>{const H=pf[P.path]||jc,X=s===P.path,Z=P.key;return c.jsxs("button",{onClick:()=>I(P.path),className:`flex items-center gap-2 px-3 py-2 rounded-xl text-[11px] font-black uppercase tracking-wider border transition-all duration-300 relative group/btn ${X?"bg-blue-brand/20 border-blue-brand text-white shadow-[0_2px_15px_rgba(37,99,235,0.25)]":"text-slate-400 border-transparent hover:bg-white/5 hover:text-white"}`,children:[c.jsx(H,{size:14,className:`${X?"text-blue-brand-2 animate-pulse":"text-slate-400 group-hover/btn:scale-110 transition-transform"}`}),c.jsx("span",{children:k(Z)})]},P.path)})}),c.jsxs("div",{className:"flex items-center gap-2 md:gap-3",children:[c.jsxs("div",{className:"hidden",children:[c.jsxs("span",{className:"text-[10px] text-slate-400 font-black uppercase tracking-wider mr-1",children:[k("layout.color_theme"),":"]}),["blue","green","red","pink","purple","white"].map(P=>{const H=v===P,X={blue:"bg-[#2563eb]",green:"bg-[#14532d]",red:"bg-[#dc2626]",pink:"bg-[#db2777]",purple:"bg-[#7c3aed]",white:"bg-white"};return c.jsx("button",{onClick:()=>M(P),title:P.toUpperCase(),className:`w-4.5 h-4.5 rounded-full ${X[P]} transition-all duration-300 relative shrink-0 cursor-pointer ${H?"scale-115 ring-2 ring-offset-2 ring-offset-[#050a14] ring-white shadow-lg":"opacity-60 hover:opacity-100 hover:scale-105"}`,children:H&&c.jsx("span",{className:"absolute inset-0 m-auto w-1 h-1 rounded-full bg-[#050a14]"})},P)})]}),c.jsxs("div",{className:"relative",children:[c.jsxs("button",{onClick:()=>h(!d),className:"flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-[10px] md:text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer",children:[c.jsx("span",{className:"text-sm md:text-base",children:((C=nl[f])==null?void 0:C.flag)||"🇪🇸"}),c.jsx("span",{className:"hidden sm:inline",children:((z=nl[f])==null?void 0:z.label)||"Español"}),c.jsx("span",{className:"text-slate-500 text-[8px] opacity-60",children:"▼"})]}),c.jsx(bc,{children:d&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>h(!1)}),c.jsxs(yn.div,{initial:{opacity:0,y:10,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.95},transition:{duration:.15},className:"absolute right-0 mt-2 w-48 rounded-2xl bg-[#091224] border border-white/10 shadow-2xl p-2 z-50 flex flex-col gap-1",children:[c.jsx("span",{className:"text-[8px] text-slate-500 uppercase font-black tracking-widest block px-3 py-1.5 border-b border-white/5 mb-1",children:k("layout.select_language")}),Object.keys(nl).map(P=>{const H=nl[P],X=f===P;return c.jsxs("button",{onClick:()=>{b(P),h(!1)},className:`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-left text-[11px] font-black uppercase transition-all cursor-pointer ${X?"bg-blue-brand/20 text-white border border-blue-brand/35 shadow-[0_2px_10px_rgba(37,99,235,0.2)]":"text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"}`,children:[c.jsx("span",{className:"text-sm leading-none",children:H.flag}),c.jsx("span",{children:H.label})]},P)})]})]})})]}),c.jsxs("button",{className:"w-11 h-11 flex flex-col items-center justify-center gap-1.5 border border-white/10 rounded-xl text-white bg-white/5 active:scale-95 transition-all relative overflow-hidden group",onClick:()=>g(!p),children:[c.jsx("div",{className:"absolute inset-0 bg-blue-brand opacity-0 group-active:opacity-10 transition-opacity"}),c.jsx(bc,{mode:"wait",children:p?c.jsx(yn.div,{initial:{rotate:-90,opacity:0,scale:.5},animate:{rotate:0,opacity:1,scale:1},exit:{rotate:90,opacity:0,scale:.5},children:c.jsx(Ph,{size:22,className:"text-blue-brand-2"})},"x"):c.jsxs(yn.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"flex flex-col gap-1.25 items-center justify-center",children:[c.jsx("span",{className:"w-5 h-0.5 bg-white rounded-full block"}),c.jsx("span",{className:"w-5 h-0.5 bg-blue-brand-2 rounded-full block"}),c.jsx("span",{className:"w-3 h-0.5 bg-white rounded-full block self-end"})]},"menu")})]})]})]})]}),c.jsx(bc,{children:p&&c.jsxs(c.Fragment,{children:[c.jsx(yn.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>g(!1),className:"fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm"}),c.jsxs(yn.nav,{initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{type:"spring",damping:25,stiffness:200},className:"fixed top-0 right-0 bottom-0 w-[280px] md:w-[340px] z-[60] bg-[#050a14] border-l border-white/10 flex flex-col shadow-2xl shadow-blue-brand/20",children:[c.jsx("div",{className:"absolute inset-0 opacity-5 pointer-events-none bg-grid-slate-900/[0.1] bg-[bottom_1px_center] [mask-image:linear-gradient(to_bottom,white,transparent)]"}),c.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-brand to-transparent opacity-50"}),c.jsxs("header",{className:"flex items-center justify-between p-4 border-b border-white/10 relative z-10 bg-black/40",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("div",{className:"w-12 h-12 rounded-xl overflow-hidden border border-white/10 shadow-lg shadow-blue-brand/20 bg-[#0a1224] flex items-center justify-center shrink-0",children:c.jsx("img",{src:"https://github.com/luqueSmith/MGG/blob/main/img/Logo_mgg.png?raw=true",alt:"",className:"w-10 h-10 object-contain"})}),c.jsxs("div",{className:"flex flex-col gap-0.5",children:[c.jsx("strong",{className:"text-[13px] font-black uppercase text-white tracking-tight leading-none",children:"Sistema Mutodex"}),c.jsx("span",{className:"text-[8px] text-blue-brand-2 font-black uppercase tracking-[0.2em] opacity-80 leading-none mt-0.5",children:"v2.1.2 Build 550"})]})]}),c.jsx("button",{onClick:()=>g(!1),className:"w-10 h-10 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 text-white/50 hover:text-white transition-colors active:scale-90",children:c.jsx(Ph,{size:18})})]}),c.jsxs("div",{className:"flex-1 overflow-y-auto p-5 flex flex-col gap-3.5 relative z-10 scrollbar-none",children:[c.jsx("div",{className:"space-y-2.5 pb-2",children:ac.map((P,H)=>{const X=pf[P.path]||jc,Z=s===P.path,F=P.key;return c.jsxs(yn.button,{initial:{opacity:0,x:25},animate:{opacity:1,x:0},transition:{delay:H*.04,type:"spring",stiffness:150},onClick:()=>I(P.path),className:`flex items-center gap-4 w-full p-3.5 rounded-2xl text-[13px] md:text-sm font-black uppercase tracking-wider transition-all relative group border ${Z?"bg-blue-brand/20 text-white border-blue-brand shadow-[0_4px_25px_rgba(37,99,235,0.25)] scale-[1.02]":"bg-white/[0.03] text-slate-300 border-white/5 hover:bg-white/8 hover:text-white hover:scale-[1.01]"}`,children:[c.jsx("div",{className:`p-2 rounded-xl transition-all ${Z?"bg-blue-brand text-white shadow-md":"bg-white/5 group-hover:bg-white/10 group-hover:scale-105"}`,children:c.jsx(X,{size:18})}),c.jsx("span",{className:"relative z-10 font-extrabold tracking-wide",children:k(F)}),Z&&c.jsx("div",{className:"ml-auto w-1.5 h-4 bg-blue-brand-2 rounded-full shadow-[0_0_12px_#3b82f6]"})]},P.path)})}),c.jsxs("div",{className:"border-t border-white/10 pt-5 mt-3",children:[c.jsxs("div",{className:"flex items-center gap-2 mb-3.5 px-2",children:[c.jsx(If,{size:13,className:"text-blue-brand-2 animate-pulse"}),c.jsx("span",{className:"text-[10px] text-slate-400 font-black uppercase tracking-[0.15em] leading-none",children:k("layout.color_theme")})]}),c.jsx("div",{className:"bg-white/[0.02] border border-white/5 rounded-2xl p-2 grid grid-cols-2 gap-2",children:["blue","green","red","pink","purple","white"].map(P=>{const H=v===P,Z={blue:{label:"BLUE",dotBg:"bg-[#2563eb]",activeStyle:"border-[#2563eb]/50 text-blue-400 bg-[#2563eb]/10 shadow-[0_0_12px_rgba(37,99,235,0.35)] scale-[1.02]",inactiveStyle:"border-white/5 bg-white/[0.02] text-slate-400 hover:text-white",glowBg:"bg-[#2563eb]"},green:{label:"GREEN",dotBg:"bg-[#15803d]",activeStyle:"border-[#15803d]/60 text-green-400 bg-[#15803d]/15 shadow-[0_0_12px_rgba(21,128,61,0.4)] scale-[1.02]",inactiveStyle:"border-white/5 bg-white/[0.02] text-slate-400 hover:text-white",glowBg:"bg-[#15803d]"},red:{label:"RED",dotBg:"bg-[#dc2626]",activeStyle:"border-[#dc2626]/50 text-red-400 bg-[#dc2626]/10 shadow-[0_0_12px_rgba(220,38,38,0.4)] scale-[1.02]",inactiveStyle:"border-white/5 bg-white/[0.02] text-slate-400 hover:text-white",glowBg:"bg-[#dc2626]"},pink:{label:"PINK",dotBg:"bg-[#db2777]",activeStyle:"border-[#db2777]/50 text-pink-400 bg-[#db2777]/10 shadow-[0_0_12px_rgba(219,39,119,0.35)] scale-[1.02]",inactiveStyle:"border-white/5 bg-white/[0.02] text-slate-400 hover:text-white",glowBg:"bg-[#db2777]"},purple:{label:"PURPLE",dotBg:"bg-[#7c3aed]",activeStyle:"border-[#7c3aed]/50 text-purple-400 bg-[#7c3aed]/10 shadow-[0_0_12px_rgba(124,58,237,0.35)] scale-[1.02]",inactiveStyle:"border-white/5 bg-white/[0.02] text-slate-400 hover:text-white",glowBg:"bg-[#7c3aed]"},white:{label:"WHITE",dotBg:"bg-white",activeStyle:"border-white/30 text-white bg-white/10 shadow-[0_0_12px_rgba(255,255,255,0.25)] scale-[1.02]",inactiveStyle:"border-white/5 bg-white/[0.02] text-slate-400 hover:text-white",glowBg:"bg-white"}}[P];return c.jsxs("button",{onClick:()=>M(P),className:`flex items-center gap-2.5 w-full py-3 px-3 rounded-[14px] text-[10px] font-black uppercase tracking-wider transition-all duration-300 border active:scale-95 cursor-pointer relative group ${H?Z.activeStyle:Z.inactiveStyle}`,children:[c.jsxs("div",{className:"relative flex items-center justify-center shrink-0 w-4 h-4",children:[H&&c.jsx(yn.div,{layoutId:`dot-glow-${P}`,className:`absolute -inset-0.5 rounded-full blur-sm opacity-50 ${Z.glowBg}`}),c.jsx("div",{className:`w-3.5 h-3.5 rounded-full ${Z.dotBg} border border-white/15 relative z-10 transition-transform group-hover:scale-110 shadow-inner`})]}),c.jsx("span",{className:`font-black relative z-10 transition-colors ${H?"text-white":"text-slate-400 group-hover:text-white"}`,children:Z.label}),H&&c.jsx("div",{className:"ml-auto flex items-center shrink-0",children:c.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${Z.glowBg} animate-pulse relative`})})]},P)})})]}),c.jsx("div",{className:"border-t border-white/10 pt-5 mt-3",children:c.jsxs("a",{href:S,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-between p-4 rounded-2xl bg-[#25d366]/10 border border-[#25d366]/30 text-white hover:bg-[#25d366]/15 transition-all group scale-[1] active:scale-95",children:[c.jsxs("div",{className:"flex items-center gap-3.5",children:[c.jsx("div",{className:"p-2.5 rounded-xl bg-[#25d366] text-white shadow-[0_0_12px_rgba(37,211,102,0.35)] shrink-0",children:c.jsx(ml,{size:16})}),c.jsxs("div",{className:"flex flex-col text-left",children:[c.jsx("span",{className:"text-[11px] font-black uppercase text-[#25d366] tracking-wider leading-none mb-1",children:k("layout.active_support")}),c.jsx("span",{className:"text-[10px] text-slate-300 font-bold leading-tight",children:k("whatsapp.title")})]})]}),c.jsx("div",{className:"flex items-center justify-center w-6 h-6 rounded-full bg-[#25d366]/15 group-hover:translate-x-0.5 transition-transform shrink-0",children:c.jsx("span",{className:"text-[#25d366] text-xs font-black",children:"→"})})]})})]}),c.jsx("div",{className:"p-4 border-t border-white/10 relative z-10 bg-black/50",children:c.jsxs("div",{className:"flex flex-col gap-2",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("span",{className:"text-[7px] text-slate-600 uppercase font-black tracking-widest leading-none",children:"Powered by"}),c.jsx("strong",{className:"text-blue-brand-2 text-[9px] uppercase font-black tracking-wider leading-none",children:"Smith Luque"})]}),c.jsx("div",{className:"w-full h-0.5 bg-white/5 rounded-full overflow-hidden",children:c.jsx(yn.div,{initial:{width:0},animate:{width:"100%"},transition:{duration:1.5,ease:"easeInOut"},className:"h-full bg-blue-brand"})})]})})]})]})}),c.jsx("main",{className:"app-shell pb-20 pt-4 lg:pt-6",children:c.jsxs("div",{className:"container mx-auto px-4 max-w-[1180px]",children:[c.jsxs("section",{className:"panel mb-6 !p-0 overflow-hidden flex flex-col lg:flex-row items-stretch border transition-all duration-500 bg-blue-brand/5 border-blue-brand/20",children:[c.jsxs("div",{className:"flex items-center gap-6 px-5 py-3 border-b lg:border-b-0 lg:border-r border-white/5 bg-black/20 shrink-0",children:[c.jsxs("div",{className:"flex flex-col",children:[c.jsx("span",{className:`text-[10px] font-black uppercase tracking-widest leading-none mb-1 ${E}`,children:k("stats.mutants")}),c.jsx("strong",{className:"text-white text-sm font-black",children:"550+"})]}),c.jsxs("div",{className:"flex flex-col border-l border-white/10 pl-4",children:[c.jsx("span",{className:`text-[10px] font-black uppercase tracking-widest leading-none mb-1 ${E}`,children:k("stats.version")}),c.jsx("strong",{className:"text-white/80 text-sm font-black",children:"2.1.2"})]})]}),c.jsxs("div",{className:"flex-1 flex items-center gap-3 px-5 py-3 min-h-[50px]",children:[c.jsx("div",{className:"w-2 h-2 rounded-full animate-pulse shrink-0 bg-blue-brand mt-0.5 self-start md:self-center"}),c.jsxs("p",{className:"text-[10px] md:text-xs text-slate-300 font-bold m-0 italic leading-relaxed",children:[c.jsx("span",{className:`${E} uppercase mr-2 opacity-70 whitespace-nowrap`,children:k("tip.label")}),k("tip.text")]})]}),c.jsx("div",{className:"hidden xl:flex items-center gap-2 px-5 py-3 bg-black/10 shrink-0",children:c.jsxs("a",{href:S,target:"_blank",rel:"noopener noreferrer",className:"text-[10px] font-black uppercase flex items-center gap-2 hover:brightness-125 transition-all text-green-brand",children:[c.jsx("div",{className:"w-1.5 h-1.5 rounded-full animate-ping bg-green-brand"}),k("layout.active_support")]})})]}),a,c.jsx("section",{className:"panel mt-[18px] transition-all duration-500",children:c.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3.5",children:[c.jsxs("div",{children:[c.jsx("h3",{className:"m-0 mb-1.5 text-lg font-bold",children:k("whatsapp.title")}),c.jsx("p",{className:"text-muted m-0 text-sm",children:k("whatsapp.desc")})]}),c.jsxs("a",{className:"btn px-6 btn-primary",target:"_blank",rel:"noopener noreferrer",href:S,children:[c.jsx(ml,{size:18}),c.jsx("span",{children:k("whatsapp.btn")})]})]})})]})}),c.jsx("footer",{className:"site-footer border-t border-line bg-black/35 py-11",children:c.jsxs("div",{className:"container mx-auto px-4 max-w-[1180px] grid lg:grid-cols-[1.2fr_1fr_0.8fr] gap-6",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"brand flex items-center gap-3.5 mb-3",children:[c.jsx("div",{className:`brand-logo w-11 h-11 flex items-center justify-center rounded-[14px] bg-gradient-to-br ${K} overflow-hidden shadow-lg`,children:c.jsx("img",{src:"https://github.com/luqueSmith/MGG/blob/main/img/Logo_mgg.png?raw=true",alt:"Logo MGG",className:"w-full h-full object-cover"})}),c.jsxs("div",{children:[c.jsx("strong",{className:"block text-white uppercase tracking-tight",children:"Mutodex MGG"}),c.jsx("span",{className:`block text-[11px] ${E} uppercase tracking-[0.22em] font-bold`,children:k("footer.renovated")})]})]}),c.jsx("p",{className:"text-muted text-sm",children:k("footer.desc")})]}),c.jsxs("div",{children:[c.jsx("div",{className:"kv-label mb-3",children:k("footer.nav")}),c.jsx("div",{className:"grid gap-2",children:ac.map(P=>c.jsx("button",{onClick:()=>I(P.path),className:`text-slate-300 hover:text-white text-sm text-left flex items-center gap-2 transition-colors ${s===P.path?E:""}`,children:k(P.key)},P.path))})]}),c.jsxs("div",{children:[c.jsx("div",{className:"kv-label mb-1.5",children:k("footer.legal")}),c.jsxs("div",{className:"flex flex-col gap-2",children:[c.jsx("button",{onClick:()=>I("/terminos"),className:"text-slate-400 hover:text-white text-xs text-left transition-colors",children:k("footer.terms")}),c.jsx("p",{className:"text-muted text-[11px] m-0 leading-relaxed mt-2",children:k("footer.rights")})]})]})]})})]})}const iM=`1. Robot
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
`,lM=`141. El Fontanero
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
`,rM=`281. Asaylan
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
`,uM=`421. Oculys
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
 */const al={vida:"https://pokradex.org/MutantsGG/assets/icon_hp.png",velocidad:"https://pokradex.org/MutantsGG/assets/icon_speed.png"};function df(a){const s=a.split("|").map(h=>h.trim()),i=s[0]||"",l=s.find(h=>h.toLowerCase().includes("triple:")),p=l?l.toLowerCase().includes("sí"):i.toLowerCase().includes("x3"),g=s.find(h=>h.toLowerCase().includes("icono:")),d=g?g.replace(/icono:/i,"").trim():"";return{valor:i,es_triple:p,icono:d}}function cM(a){const s=a.split("|").map(g=>g.trim()),i=s[0]||"",l=s.find(g=>g.toLowerCase().includes("icono:")),p=l?l.replace(/icono:/i,"").trim():"";return{valor:i,icono:p}}const pM=["a_01","a_02","aa_01","aa_02","ab_01","ab_02","ab_03","ac_01","ac_02","ac_03","ad_01","ad_02","ae_01","ae_02","af_01","af_02","b_01","b_02","b_03","ba_01","ba_02","bb_01","bb_02","bc_01","bc_02","bd_01","bd_02","be_01","be_02","be_03","bf_01","bf_02","c_01","c_02","ca_01","ca_02","ca_03","cb_01","cb_02","cc_01","cc_02","cd_01","cd_02","cd_03","ce_01","ce_03","cf_01","cf_02","d_01","da_01","da_02","db_01","db_02","db_03","dc_01","dc_02","dc_03","dd_01","dd_02","de_01","de_02","df_01","df_02","e_01","ea_01","ea_02","ea_03","eb_01","eb_02","eb_03","ec_01","ec_02","ed_01","ed_02","ee_01","ee_02","ee_03","ef_01","ef_02","ef_03","f_01","f_03","fa_01","fa_02","fb_01","fb_02","fb_03","fc_01","fc_02","fd_01","fd_02","fd_03","fe_01","fe_02","ff_01","ff_02","fc_03","cb_03","ba_03","ff_03","bb_03","de_03","da_03","bf_03","cd_04","dc_04","aa_03","d_03","ec_03","bc_03","ad_03","af_04","ae_03","fb_04","bd_03","cf_04","ce_02","dd_03","cc_03","df_03","ed_03","af_03","bc_04","db_04","fa_03","fe_04","fe_03","a_03","cf_03","de_04","ba_04","cb_04","fd_04","fc_04","fa_04","bf_04","fe_05","ca_04","df_04","ed_04","ac_04","eb_04","de_05","bf_05","c_03","ec_04","ef_04","ff_04","ad_04","cc_04","ab_04","ce_04","bd_99","bb_04","aa_04","ae_04","cb_05","af_05","da_04","bd_04","fc_05","ee_04","dd_04","be_04","ea_04","ef_05","df_99","fb_05","eb_05","ca_05","ac_05","ab_05","aa_05","fa_05","fe_99","ce_05","e_03","cc_05","da_05","df_05","db_05","bc_05","dc_05","ed_05","ec_05","fd_05","ec_06","ff_05","be_05","ad_05","bd_05","dd_05","da_06","cf_05","bb_05","cf_06","cd_05","ea_05","af_06","ae_05","ee_05","ba_05","ce_06","fb_06","bc_06","fd_06","dc_06","ed_06","fa_06","bf_06","ad_06","cd_06","db_06","ac_06","fe_06","eb_06","ea_06","be_06","b_04","ab_06","ef_06","fc_06","df_06","cb_06","dd_06","de_06","ca_06","ff_06","bd_06","af_07","cf_07","ae_06","ba_06","ec_07","ed_07","bd_07","db_07","da_07","fe_07","ab_07","df_07","bf_07","ee_06","aa_06","ce_07","cc_06","cc_07","fc_07","ba_07","f_04","fd_07","ef_07","ad_07","ac_07","ca_07","fb_07","fa_07","de_07","cb_07","bc_07","cd_07","ea_07","ee_07","be_07","dd_07","eb_07","ec_08","cf_08","bc_08","ac_08","dd_08","de_08","fc_08","ae_07","db_08","af_08","fa_08","ff_07","bb_06","ef_08","da_08","cb_08","ea_08","fb_08","bf_08","ad_08","fc_09","ce_08","ba_08","ae_08","bd_08","fa_99","eb_99","cd_08","dc_07","ed_08","fd_08","ca_08","df_08","eb_08","cf_09","ad_09","dc_08","bb_07","aa_07","ac_09","bd_09","ff_08","ee_08","be_08","aa_08","ca_09","eb_09","df_09","fe_08","bb_08","ec_09","de_09","ab_08","be_09","ca_10","ea_09","cc_08","bf_09","cc_09","ae_09","cd_09","da_09","fd_09","af_09","a_05","ea_10","dd_09","fd_10","ab_09","ac_10","df_10","bc_09","af_10","bb_09","de_10","cb_09","db_09","dc_09","fe_09","ba_09","bf_10","fa_09","aa_09","cf_10","ce_09","ef_09","da_10","ee_09","ff_09","fb_10","ed_09","fb_09","ef_10","ed_10","cb_10","ae_10","dc_10","bd_10","fe_10","fa_10","cd_10","ad_10","fc_10","bb_10","af_99","bc_10","ce_99","dd_10","aa_10","ba_10","cc_10","db_10","ec_10","eb_10","ab_10","be_10","ce_10","eb_11","ff_10","db_11","fc_99","ee_10","ac_11","bd_11","fa_11","af_11","ce_11","ca_11","cd_11","fb_11","da_11","ed_11","aa_11","bb_11","ef_99","fd_11","cb_11","bf_11","de_11","ae_11","ec_11","dc_11","ba_11","ff_11","df_11","b_05","ee_99","fc_11","cf_11","cc_11","c_05","fb_12","ad_11","dd_11","be_11","fe_11","ac_12","ea_11","ca_99","ab_11","ee_11","ef_12","bc_11","bb_12","de_12","e_12","d_12","af_12","df_12","cf_12","cb_12","fa_12","dd_12","ef_11","fc_12","ff_12","ed_12","ca_12","db_12","ec_12","cd_12","ed_99","eb_12","fd_12","f_13","ab_12","bc_12","aa_12","fe_12","bf_12","c_13","ae_12","ce_12","be_12","fe_13","da_12","dc_12","f_12","ad_12","b_12","d_13","bd_12","aa_99","cf_13","ea_12","b_13","bf_13","dd_13","ee_12","ad_13","fa_13","da_13","ca_13","bc_13","de_13","ba_12","a_13","ef_13","cb_13","eb_13","ab_99","ae_13","cf_99","bb_13","fd_13","cc_12","bc_14","e_13","dc_13","ac_13","fe_14","fc_13","ef_14","cc_13","ff_13","ae_14","aa_13","cd_13","cb_14","ba_13","dc_14","df_13","ca_14","db_13","ae_99","ac_14","af_13","db_14","ec_13","ce_13","ea_13","ea_99","af_14","ff_14","dd_14","fd_14","fb_13","ab_13","ed_13","bd_14","da_14","c_14","ed_14","de_14","a_14","ee_13","ff_99","f_14","fb_14","bd_13","cd_14","cc_14","b_14","ab_14","be_13","ea_14","ba_14","cf_14","de_15","ad_14","ab_15","e_14","bf_14","be_15","ce_14","ea_15","d_14","dd_15"],dM={};pM.forEach((a,s)=>{dM[a.toLowerCase()]=s+1});const Al=[];function gM(a){const s=a.match(/specimen_([a-zA-Z0-9_]+)/);if(!s)return"";const i=s[1].toLowerCase().split("_");return i.length>=2?`${i[0]}_${i[1]}`:i[0]||""}function mM(){if(Al.length>0)return;[iM,lM,rM,uM].forEach(s=>{const i=s.split(/\r?\n/);let l=null;for(const p of i){const g=p.trim();if(!g)continue;const d=g.match(/^(\d+)\.\s*(.+)$/);if(d){l&&gf(l),l={id:d[1],nombre:d[2],imagen:"",vida:"",velocidad:"",ataque1:"",ataque2:"",habilidad:""};continue}l&&(g.startsWith("Imagen mutante:")?l.imagen=g.replace("Imagen mutante:","").trim():g.startsWith("Vida:")?l.vida=g.replace("Vida:","").trim():g.startsWith("Velocidad:")?l.velocidad=g.replace("Velocidad:","").trim():g.startsWith("Ataque 1:")?l.ataque1=g.replace("Ataque 1:","").trim():g.startsWith("Ataque 2:")?l.ataque2=g.replace("Ataque 2:","").trim():g.startsWith("Habilidad:")&&(l.habilidad=g.replace("Habilidad:","").trim()))}l&&gf(l)}),Al.sort((s,i)=>parseInt(s.id,10)-parseInt(i.id,10))}function gf(a){const s=gM(a.imagen);let i=s.split("_")[0].split("");(i.length===0||!i[0])&&(i=["n"]);const l=[...i].sort().join(""),p=hl.find(E=>E.id===i[0]),g=hl.find(E=>E.id===i[1])||p,d=(p==null?void 0:p.image)||"",h=(g==null?void 0:g.image)||d,f=df(a.ataque1||""),b=df(a.ataque2||""),x=cM(a.habilidad||""),G=parseFloat(a.vida.replace(/,/g,""))||0,k=parseFloat(a.velocidad)||0,v=f.valor.toLowerCase().replace(/x\s*3/g,"").replace(/,/g,"").trim(),M=parseFloat(v)||0,S=x.valor.toLowerCase().replace(/,/g,"").trim(),I=parseFloat(S)||0;Al.push({id:a.id,nombre:a.nombre,imagen:a.imagen,vida:a.vida,velocidad:a.velocidad,ataques:[f,b],habilidad:x,tipoIcono:d,skinIcono:h,codigo:s.toUpperCase(),genes:i,sortedGenes:l,stats:{hp:G,atk:M,spd:k,def:I,hab:I}})}mM();/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function hM(a){const s=String(a||"").split("_")[0].toLowerCase().split(""),i=ps[s[0]]||ps.n,l=ps[s[1]]||ps[s[0]]||ps.n;return[i[0],l[1]||l[0]]}function bM(a,s){const[i,l]=hM(s),p=String(a||s||"?").replace(/[^A-Za-zÁÉÍÓÚÜÑ0-9 ]/g," ").split(/\s+/).filter(Boolean).slice(0,2).map(h=>h[0]).join("").toUpperCase()||"MG",g=String(a||"").replace(/&/g,"&amp;").replace(/</g,"&lt;"),d=`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${i}"/>
        <stop offset="100%" stop-color="${l}"/>
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
    <text x="300" y="305" text-anchor="middle" fill="white" font-family="Inter, Arial, sans-serif" font-weight="900" font-size="170">${p}</text>
    <text x="300" y="495" text-anchor="middle" fill="white" font-family="Inter, Arial, sans-serif" font-weight="700" font-size="28" opacity="0.92">${g.slice(0,24)}</text>
  </svg>`;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(d)}`}function cs(a){return Number(a).toLocaleString("es-PE",{minimumFractionDigits:0,maximumFractionDigits:2})}const mf=({mutant:a})=>{var I,E,K,O;const{translate:s}=St(),[i,l]=Y.useState(!1),p=a.codigo.split("_")[0].toLowerCase().split(""),g=p.map(C=>hl.find(z=>z.id===C)).filter(Boolean),d=()=>{navigator.clipboard.writeText(a.codigo.toUpperCase()).catch(()=>{}),l(!0),setTimeout(()=>l(!1),2e3)},h=a.ataques[0],f=a.ataques[1]||a.ataques[0],b=(h==null?void 0:h.es_triple)||(h==null?void 0:h.valor.toLowerCase().includes("x3")),x=(f==null?void 0:f.es_triple)||(f==null?void 0:f.valor.toLowerCase().includes("x3")),G=C=>C?C.toLowerCase().replace(/\s*x3/g,"").toUpperCase():"1,500",k=a.fallbackImagen||bM(a.nombre,a.codigo),v=a.nombre.replace(/^#\d+\s*/i,"").replace(/^\d+\.\s*/i,""),M=p[0]||"n",S=ps[M]||["#64748b","#334155"];return c.jsxs(c.Fragment,{children:[c.jsxs("article",{className:"group relative flex sm:hidden w-full items-stretch bg-[#080f1d] border border-white/[0.06] hover:border-blue-500/30 rounded-[22px] overflow-hidden shadow-2xl transition-all duration-300",children:[c.jsx("div",{className:"absolute inset-0 opacity-[0.02] pointer-events-none transition-opacity duration-300 group-hover:opacity-[0.05]",style:{background:`radial-gradient(circle at center, ${S[0]}, transparent 70%)`}}),c.jsxs("div",{className:"relative w-[120px] xs:w-[135px] shrink-0 flex items-center justify-center p-3 overflow-hidden bg-gradient-to-b from-[#111d35] to-[#080f1d] border-r border-white/[0.04]",children:[c.jsx("div",{className:"absolute inset-0 opacity-25 pointer-events-none",style:{background:`radial-gradient(ellipse at 50% 0%, ${S[0]}50, transparent 75%)`}}),c.jsx("img",{className:"mutant-thumb max-w-[85%] max-h-[85%] object-contain transition-transform duration-300 group-hover:scale-105",src:a.imagen,alt:v,loading:"lazy",onError:C=>{const z=C.currentTarget;z.src=k,z.onerror=null}}),c.jsx("div",{className:"absolute top-2.5 left-2.5 flex flex-row gap-2 z-20",children:g.map((C,z)=>c.jsx("div",{className:"w-[30px] h-[30px] xs:w-[34px] xs:h-[34px] rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center",children:c.jsx("img",{src:C==null?void 0:C.image,alt:C==null?void 0:C.name,className:"w-[82%] h-[82%] object-contain text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"})},z))})]}),c.jsxs("div",{className:"flex-1 p-3 flex flex-col justify-between gap-1.5 text-left min-w-0",children:[c.jsxs("div",{children:[c.jsx("h3",{className:"m-0 text-[13px] font-black text-white uppercase tracking-tight leading-none truncate pr-1",children:v}),c.jsxs("div",{className:"flex items-center gap-1.5 mt-1",children:[c.jsx("span",{className:"w-1.5 h-1.5 rounded-full",style:{backgroundColor:S[0],boxShadow:`0 0 6px ${S[0]}a0`}}),c.jsx("span",{className:"font-mono font-bold text-[9px] uppercase text-slate-400 tracking-wider",children:a.codigo})]})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-1 px-0.5",children:[c.jsxs("div",{className:"bg-[#0b1325]/90 border border-white/[0.03] rounded-lg py-1 px-1.5 flex items-center gap-1.5",children:[c.jsx("img",{src:al.vida,alt:"HP",className:"w-[13px] h-[13px] object-contain shrink-0"}),c.jsxs("div",{className:"min-w-0",children:[c.jsx("span",{className:"block text-[7px] font-black uppercase tracking-wider text-slate-500 leading-none",children:"HP"}),c.jsx("span",{className:"text-white font-mono font-black text-[9.5px] leading-tight block select-all truncate",children:a.vida})]})]}),c.jsxs("div",{className:"bg-[#0b1325]/90 border border-white/[0.03] rounded-lg py-1 px-1.5 flex items-center gap-1.5",children:[c.jsx("img",{src:al.velocidad,alt:"SPD",className:"w-[13px] h-[13px] object-contain shrink-0"}),c.jsxs("div",{className:"min-w-0",children:[c.jsx("span",{className:"block text-[7px] font-black uppercase tracking-wider text-slate-500 leading-none",children:"SPD"}),c.jsx("span",{className:"text-white font-mono font-black text-[9.5px] leading-tight block select-all truncate",children:a.velocidad})]})]}),c.jsxs("div",{className:"bg-[#0b1325]/90 border border-white/[0.03] rounded-lg py-1 px-1.5 flex items-center gap-1.5",children:[c.jsx("img",{src:(h==null?void 0:h.icono)||a.tipoIcono,alt:"AT",className:"w-[13px] h-[13px] object-contain shrink-0"}),c.jsxs("div",{className:"min-w-0 flex-1",children:[c.jsxs("span",{className:"block text-[7px] font-black uppercase tracking-wider text-slate-500 leading-none",children:["AT1",b&&c.jsx("span",{className:"text-amber-500 font-extrabold ml-0.5 text-[6px]",children:"x3"})]}),c.jsx("span",{className:`font-mono font-black text-[9.5px] leading-tight block select-all truncate ${b?"text-amber-400":"text-white"}`,children:G(h==null?void 0:h.valor)})]})]}),c.jsxs("div",{className:"bg-[#0b1325]/90 border border-white/[0.03] rounded-lg py-1 px-1.5 flex items-center gap-1.5",children:[c.jsx("img",{src:(f==null?void 0:f.icono)||a.skinIcono,alt:"AT",className:"w-[13px] h-[13px] object-contain shrink-0"}),c.jsxs("div",{className:"min-w-0 flex-1",children:[c.jsxs("span",{className:"block text-[7px] font-black uppercase tracking-wider text-slate-500 leading-none",children:["AT2",x&&c.jsx("span",{className:"text-amber-500 font-extrabold ml-0.5 text-[6px]",children:"x3"})]}),c.jsx("span",{className:`font-mono font-black text-[9.5px] leading-tight block select-all truncate ${x?"text-amber-400":"text-white"}`,children:G(f==null?void 0:f.valor)})]})]}),c.jsxs("div",{className:"col-span-2 bg-[#0b1325]/90 border border-white/[0.03] rounded-lg py-1 px-1.5 flex items-center justify-between gap-1.5",children:[c.jsxs("div",{className:"flex items-center gap-1 min-w-0",children:[c.jsx("img",{src:((I=a.habilidad)==null?void 0:I.icono)||"https://pokradex.org/MutantsGG/assets/ability_shield_big.png",alt:"DEF",className:"w-[13px] h-[13px] object-contain shrink-0"}),c.jsx("span",{className:"text-[7px] font-black uppercase tracking-wider text-slate-500 leading-none",children:"DEF / HAB"})]}),c.jsx("span",{className:"text-white font-mono font-black text-[9.5px] leading-none select-all truncate pr-1",children:((E=a.habilidad)==null?void 0:E.valor)||"1,000"})]})]}),c.jsx("button",{onClick:d,className:`w-full py-1.5 text-[8px] font-black uppercase tracking-[0.14em] transition-all flex items-center justify-center gap-1.5 border leading-none ${i?"bg-green-500/10 border-green-500/20 text-green-400":"bg-transparent border-white/[0.08] text-white active:scale-[0.97]"}`,style:{borderRadius:"100px"},children:i?c.jsxs(c.Fragment,{children:[c.jsx(gl,{size:10,className:"shrink-0 text-green-400 animate-bounce"}),c.jsx("span",{children:s("mutant.verified")})]}):c.jsxs(c.Fragment,{children:[c.jsx(Ic,{size:9,className:"shrink-0 opacity-85"}),c.jsx("span",{children:s("mutant.extract_code")})]})})]})]}),c.jsxs("article",{className:"group relative hidden sm:flex flex-col w-full h-full max-w-[340px] sm:max-w-none mx-auto bg-[#080f1d] border border-white/[0.06] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-1",style:{"--dynamic-glow":S[0]},children:[c.jsx("div",{className:"absolute inset-0 rounded-[24px] sm:rounded-[28px] border border-transparent transition-colors duration-300 group-hover:border-[var(--dynamic-glow)]/40 pointer-events-none z-30",style:{content:'""'}}),c.jsx("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0",style:{background:`radial-gradient(circle at center, ${S[0]}15, transparent 75%)`}}),c.jsxs("div",{className:"relative h-32 sm:h-36 w-full flex items-center justify-center p-2 sm:p-3 overflow-hidden bg-gradient-to-b from-[#111d35] to-[#080f1d] border-b border-white/[0.04] z-10 shrink-0",children:[c.jsx("div",{className:"absolute inset-0 opacity-25 pointer-events-none transition-opacity duration-300 group-hover:opacity-40",style:{background:`radial-gradient(ellipse at 50% 0%, ${S[0]}60, transparent 75%)`}}),c.jsx("img",{className:"mutant-thumb max-w-[80%] max-h-[80%] object-contain transition-transform duration-500 group-hover:scale-105",src:a.imagen,alt:v,loading:"lazy",onError:C=>{const z=C.currentTarget;z.src=k,z.onerror=null}}),c.jsx("div",{className:"absolute top-3 left-3 flex flex-row gap-2.5 z-20",children:g.map((C,z)=>c.jsxs("div",{className:"relative group/badge",children:[c.jsx("div",{className:"w-[34px] h-[34px] sm:w-[42px] sm:h-[42px] rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg",children:c.jsx("img",{src:C==null?void 0:C.image,alt:C==null?void 0:C.name,className:"w-[84%] h-[84%] object-contain text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"})}),c.jsx("div",{className:"absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-black text-[8px] font-black uppercase tracking-widest text-white rounded-md opacity-0 group-hover/badge:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none shadow-xl z-30",children:C==null?void 0:C.name})]},z))})]}),c.jsxs("div",{className:"p-3 sm:p-3.5 flex flex-col flex-grow gap-2.5 text-left z-10",children:[c.jsxs("div",{children:[c.jsx("h3",{className:"m-0 text-xs sm:text-xs md:text-sm font-black text-white uppercase tracking-tight leading-snug group-hover:text-amber-400 transition-colors break-words line-clamp-1 pr-1",children:v}),c.jsxs("div",{className:"flex items-center gap-1.5 mt-1.5",children:[c.jsx("span",{className:"w-2 h-2 rounded-full shadow-lg",style:{backgroundColor:S[0],boxShadow:`0 0 8px ${S[0]}`}}),c.jsx("span",{className:"font-mono font-bold text-[9px] uppercase text-slate-400 tracking-wider",children:a.codigo})]})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-1.5",children:[c.jsxs("div",{className:"bg-[#0b1325]/80 border border-white/[0.04] rounded-xl py-1 px-2 flex flex-col items-center justify-center hover:border-red-500/30 hover:bg-[#0b1325] transition-all",children:[c.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-slate-400",children:[c.jsx("img",{src:al.vida,alt:"HP",className:"w-[14px] h-[14px] object-contain shrink-0"}),c.jsx("span",{className:"text-[8px] font-black uppercase tracking-wider leading-none",children:"HP"})]}),c.jsx("span",{className:"text-white font-mono font-black text-xs mt-1 tracking-tight leading-none truncate block select-all",children:a.vida})]}),c.jsxs("div",{className:"bg-[#0b1325]/80 border border-white/[0.04] rounded-xl py-1 px-2 flex flex-col items-center justify-center hover:border-sky-500/30 hover:bg-[#0b1325] transition-all",children:[c.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-slate-400",children:[c.jsx("img",{src:al.velocidad,alt:"SPD",className:"w-[14px] h-[14px] object-contain shrink-0"}),c.jsx("span",{className:"text-[8px] font-black uppercase tracking-wider leading-none",children:"SPD"})]}),c.jsx("span",{className:"text-white font-mono font-black text-xs mt-1 tracking-tight leading-none truncate block select-all",children:a.velocidad})]}),c.jsxs("div",{className:"bg-[#0b1325]/80 border border-white/[0.04] rounded-xl py-1 px-2 flex flex-col items-center justify-center hover:border-amber-500/30 hover:bg-[#0b1325] transition-all relative",children:[c.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-slate-400",children:[c.jsx("img",{src:(h==null?void 0:h.icono)||a.tipoIcono,alt:"ATK 1",className:"w-[14px] h-[14px] object-contain shrink-0"}),c.jsx("span",{className:"text-[8px] font-black uppercase tracking-wider leading-none",children:"ATK 1"}),b&&c.jsx("span",{className:"text-[6px] text-amber-500 font-extrabold px-0.5 rounded bg-amber-500/10 border border-amber-500/20 leading-none",children:"x3"})]}),c.jsx("span",{className:`font-mono font-black text-xs mt-1 tracking-tight leading-none truncate block select-all ${b?"text-amber-400":"text-white"}`,children:G(h==null?void 0:h.valor)})]}),c.jsxs("div",{className:"bg-[#0b1325]/80 border border-white/[0.04] rounded-xl py-1 px-2 flex flex-col items-center justify-center hover:border-amber-500/30 hover:bg-[#0b1325] transition-all relative",children:[c.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-slate-400",children:[c.jsx("img",{src:(f==null?void 0:f.icono)||a.skinIcono,alt:"ATK 2",className:"w-[14px] h-[14px] object-contain shrink-0"}),c.jsx("span",{className:"text-[8px] font-black uppercase tracking-wider leading-none",children:"ATK 2"}),x&&c.jsx("span",{className:"text-[6px] text-amber-500 font-extrabold px-0.5 rounded bg-amber-500/10 border border-amber-500/20 leading-none",children:"x3"})]}),c.jsx("span",{className:`font-mono font-black text-xs mt-1 tracking-tight leading-none truncate block select-all ${x?"text-amber-400":"text-white"}`,children:G(f==null?void 0:f.valor)})]}),c.jsxs("div",{className:"col-span-2 bg-[#0b1325]/80 border border-white/[0.04] rounded-xl py-1 px-3 flex flex-col items-center justify-center hover:border-emerald-500/30 hover:bg-[#0b1325] transition-all",children:[c.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-slate-400",children:[c.jsx("img",{src:((K=a.habilidad)==null?void 0:K.icono)||"https://pokradex.org/MutantsGG/assets/ability_shield_big.png",alt:"DEF",className:"w-[14px] h-[14px] object-contain shrink-0"}),c.jsx("span",{className:"text-[8px] font-black uppercase tracking-wider leading-none",children:"DEF / HABILIDAD"})]}),c.jsx("span",{className:"text-white font-mono font-black text-xs mt-1 tracking-tight leading-none truncate block select-all",children:((O=a.habilidad)==null?void 0:O.valor)||"1,000"})]})]}),c.jsx("div",{className:"mt-auto pt-1",children:c.jsx("button",{onClick:d,className:`group/btn relative overflow-hidden w-full py-2.5 text-[10px] font-black uppercase tracking-[0.16em] transition-all flex items-center justify-center gap-2 border leading-none ${i?"bg-green-500/10 border-green-500/30 text-green-400":"bg-transparent border-white/[0.08] text-white hover:border-[var(--hover-color)] hover:bg-[var(--hover-bg)] active:scale-[0.98]"}`,style:{borderRadius:"100px","--hover-color":`${S[0]}50`,"--hover-bg":`${S[0]}12`},children:i?c.jsxs(c.Fragment,{children:[c.jsx(gl,{size:12,className:"shrink-0 text-green-400 animate-bounce"}),c.jsx("span",{children:s("mutant.verified")})]}):c.jsxs(c.Fragment,{children:[c.jsx(Ic,{size:11,className:"group-hover/btn:scale-110 transition-transform shrink-0 opacity-80"}),c.jsx("span",{children:s("mutant.extract_code")})]})})})]})]})]})},ea=()=>{const{region:a,translate:s}=St(),i=a!=="LATAM"&&a!=="PT"?"https://chat.whatsapp.com/IdBIvXWUPNjDLcPmBvkp1B":np;return c.jsxs(yn.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{duration:.4},className:"panel p-6 md:p-8 rounded-3xl bg-[#0c1222]/95 border border-white/10 shadow-2xl relative overflow-hidden group max-w-4xl mx-auto w-full my-6 flex flex-col md:flex-row md:items-center justify-between gap-6 text-left",children:[c.jsx("div",{className:"absolute inset-0 bg-[#25D366]/[0.02] pointer-events-none"}),c.jsxs("div",{className:"relative z-10 flex-1",children:[c.jsx("h3",{className:"text-xl md:text-2xl font-black text-white tracking-tight leading-tight m-0 mb-2",children:s("whatsapp.title")}),c.jsx("p",{className:"text-muted text-sm md:text-base leading-relaxed opacity-80 m-0 max-w-2xl",children:s("whatsapp.desc")})]}),c.jsx("div",{className:"relative z-10 shrink-0 w-full md:w-auto flex justify-start md:justify-end",children:c.jsxs("a",{href:i,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-blue-brand hover:brightness-110 active:scale-[0.98] transition-all text-white font-black text-sm md:text-base shadow-lg shadow-blue-brand/20 hover:shadow-blue-brand/40 select-none w-full md:w-auto",children:[c.jsx(ml,{size:18,className:"shrink-0"}),c.jsx("span",{children:s("whatsapp.btn")})]})})]})};function hf(){const{region:a,translate:s}=St(),[i,l]=Y.useState(""),[p,g]=Y.useState([]),[d,h]=Y.useState(!1),[f,b]=Y.useState("code-az"),[x,G]=Y.useState(!0),[k,v]=Y.useState(30),M=Y.useMemo(()=>Al,[]),S=Y.useMemo(()=>sG.split(/\r?\n/).map(z=>z.trim()).filter(Boolean).length,[]),I="text-blue-brand-2",E=Y.useMemo(()=>{const z=i.toLowerCase(),P=M.filter(H=>{const X=z===""||H.nombre.toLowerCase().includes(z)||H.codigo.toLowerCase().includes(z),Z=p.length===0||(p.length===1?H.genes.includes(p[0]):H.genes[0]===p[0]&&H.genes[1]===p[1]),F=!d||H.genes.length===1||H.genes.length===2&&H.genes[0]===H.genes[1];return X&&Z&&F});return P.sort((H,X)=>{var Z,F,oe,pe,Be,Ce;return f==="name-az"?H.nombre.localeCompare(X.nombre):f==="name-za"?X.nombre.localeCompare(H.nombre):f==="code-az"?H.codigo.localeCompare(X.codigo,void 0,{numeric:!0,sensitivity:"base"}):f==="code-za"?X.codigo.localeCompare(H.codigo,void 0,{numeric:!0,sensitivity:"base"}):f==="hp-desc"?(((Z=X.stats)==null?void 0:Z.hp)||0)-(((F=H.stats)==null?void 0:F.hp)||0):f==="atk-desc"?(((oe=X.stats)==null?void 0:oe.atk)||0)-(((pe=H.stats)==null?void 0:pe.atk)||0):f==="spd-desc"?(((Be=X.stats)==null?void 0:Be.spd)||0)-(((Ce=H.stats)==null?void 0:Ce.spd)||0):X.codigo.localeCompare(H.codigo,void 0,{numeric:!0,sensitivity:"base"})}),P},[M,i,p,f,d]),K=Y.useMemo(()=>{const z=["Apiarca","Ornitorrinco"];return M.filter(P=>z.some(H=>H.toLowerCase()===P.nombre.toLowerCase()))},[M]),O=Y.useMemo(()=>E.slice(0,k),[E,k]),C=z=>{v(30),g(P=>{const H=P.filter(X=>X===z).length;return H>0?H===2?P.filter(X=>X!==z):P.length===1?[z,z]:P.filter(X=>X!==z):P.length<2?[...P,z]:[P[1],z]})};return c.jsxs("div",{className:"flex flex-col gap-8 pb-20",children:[c.jsxs("section",{className:"relative hero !p-8 md:!p-20 overflow-hidden rounded-3xl",children:[c.jsx("div",{className:"absolute inset-0 opacity-10 bg-grid-slate-900/[0.1] pointer-events-none"}),c.jsx("div",{className:"absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-brand/20 to-transparent -rotate-12 transform translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none"}),c.jsxs("div",{className:"relative z-10",children:[c.jsxs("div",{className:"eyebrow bg-white/5 border-white/10 px-4 py-1 rounded-full inline-flex items-center gap-2 mb-6 backdrop-blur-md",children:[c.jsx(Bh,{size:14,className:"text-blue-brand-2"}),c.jsx("span",{className:"text-[10px] font-black uppercase tracking-[0.2em]",children:s("home.main_database")})]}),c.jsxs("h1",{className:"text-4xl md:text-8xl lg:text-9xl font-black mt-4 mb-6 uppercase tracking-tighter leading-[0.8] md:leading-[0.85] text-white",children:["MUTANTS ",c.jsx("br",{}),c.jsxs("span",{className:"text-blue-brand relative",children:["GLADIATORS",c.jsx("span",{className:"absolute -bottom-2 left-0 w-full h-1 bg-white/10 rounded-full"})]})]}),c.jsx("p",{className:"text-slate-400 text-sm md:text-lg max-w-2xl mx-auto md:mx-0 opacity-90 leading-relaxed font-medium",children:s("home.main_desc")})]})]}),c.jsx(ea,{}),c.jsxs("section",{className:"panel flex flex-col gap-6 !p-6 md:!p-8 border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent rounded-3xl relative overflow-hidden group",children:[c.jsx("div",{className:"absolute top-0 left-0 w-1 h-full bg-blue-brand"}),c.jsx("div",{className:"flex items-center justify-between relative z-10",children:c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx(P2,{size:20,className:"text-blue-brand-2"}),c.jsx("h2",{className:"text-xl md:text-2xl font-black uppercase tracking-tighter m-0 text-white",children:s("home.featured_mutants")})]})}),c.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative z-10",children:K.map((z,P)=>c.jsx(mf,{mutant:z},P))})]}),c.jsxs("section",{className:"flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-[2.5rem] border border-white/10 bg-[#0a1224]/50 backdrop-blur-2xl relative overflow-hidden",children:[c.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-grid-slate-900/[0.05] pointer-events-none"}),c.jsxs("div",{className:"flex flex-col gap-4 relative z-10 w-full md:max-w-[60%]",children:[c.jsxs("div",{className:"flex items-center gap-6",children:[c.jsxs("div",{className:"relative group/avatar",children:[c.jsx("div",{className:"absolute inset-0 bg-blue-brand blur-xl opacity-20 group-hover:opacity-40 transition-opacity"}),c.jsx("img",{src:"https://github.com/luqueSmith/MGG/blob/main/img/perfil.png?raw=true",alt:"Smith Luque",className:"w-20 h-20 md:w-24 md:h-24 rounded-[2rem] border-4 border-white/10 shadow-2xl relative z-10 object-cover group-hover:rotate-3 transition-transform"}),c.jsx("div",{className:"absolute -bottom-1 -right-1 w-6 h-6 bg-green-brand border-4 border-[#050a14] rounded-full z-20"})]}),c.jsxs("div",{className:"text-left",children:[c.jsx("h3",{className:"m-0 text-2xl font-black text-white uppercase tracking-tighter",children:"Smith Luque"}),c.jsxs("div",{className:"flex flex-col gap-1",children:[c.jsx("p",{className:"text-blue-brand-2 text-xs m-0 font-black uppercase tracking-widest leading-none",children:"Full Stack Developer"}),c.jsx("div",{className:"px-2 py-0.5 rounded bg-white/5 border border-white/5 inline-flex self-start",children:c.jsx("span",{className:"text-[8px] font-bold text-muted uppercase tracking-[0.2em]",children:"Founder of Sistema Mutodex"})})]})]})]}),c.jsxs("div",{className:"p-4 rounded-2xl border border-blue-brand/20 bg-blue-brand/5 backdrop-blur-md",children:[c.jsxs("span",{className:"block text-[10px] font-black text-blue-brand-2 uppercase tracking-[0.2em] mb-1",children:["📢 ",s("home.announcement_title")]}),c.jsx("p",{className:"text-xs text-slate-300 font-semibold leading-relaxed m-0",children:s("home.announcement_desc")})]})]}),c.jsxs("div",{className:"flex gap-8 items-center px-8 w-full md:w-auto border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 relative z-10",children:[c.jsxs("div",{className:"flex-1 md:flex-none",children:[c.jsx("span",{className:"block text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-2",children:s("home.filtered")}),c.jsxs("div",{className:"flex items-baseline gap-1",children:[c.jsx("strong",{className:"text-4xl font-black text-blue-brand-2 leading-none",children:E.length}),c.jsx("span",{className:"text-xs font-bold text-white/20 uppercase tracking-widest",children:s("home.active")})]})]}),c.jsxs("div",{className:"flex-1 md:flex-none",children:[c.jsx("span",{className:"block text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-2",children:s("home.total_base")}),c.jsxs("div",{className:"flex items-baseline gap-1",children:[c.jsx("strong",{className:"text-4xl font-black text-white/50 leading-none",children:S}),c.jsx("span",{className:"text-xs font-bold text-muted/20 uppercase tracking-widest",children:s("home.total")})]})]})]})]}),c.jsxs("section",{className:"panel flex flex-col gap-6 !p-6 md:!p-8 border border-white/10 relative overflow-hidden group",children:[c.jsx("div",{className:"absolute inset-0 opacity-5 pointer-events-none bg-grid-slate-900/[0.1] bg-[bottom_1px_center] [mask-image:linear-gradient(to_bottom,white,transparent)]"}),c.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("div",{className:"w-1.5 h-6 bg-blue-brand rounded-full"}),c.jsx("h2",{className:"text-xl md:text-2xl font-black uppercase tracking-tighter m-0",children:s("home.explore_catalog")})]}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("div",{className:"px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-bold text-muted uppercase tracking-widest leading-none",children:"Control Panel v2.0"}),(p.length>0||d)&&c.jsx("button",{onClick:()=>{g([]),h(!1)},className:"text-[10px] uppercase font-black text-white bg-red-brand/40 px-3 py-1 rounded-full hover:bg-red-brand transition-all active:scale-95 shadow-lg shadow-red-brand/20",children:s("home.reset_engine")})]})]}),c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10",children:[c.jsx("div",{className:"lg:col-span-8 flex flex-col gap-6",children:c.jsxs("div",{className:"space-y-4",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx(Yh,{size:14,className:I}),c.jsx("span",{className:"text-[11px] uppercase font-black tracking-[0.2em] opacity-60",children:s("home.genetic_config")})]}),c.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3",children:hl.map(z=>{const P=p.filter(X=>X===z.id).length,H=P>0;return p.indexOf(z.id),c.jsxs("button",{onClick:()=>C(z.id),className:`flex items-center gap-3 p-3 rounded-xl border-2 transition-all relative group/gene overflow-hidden ${H?"bg-blue-brand/20 border-blue-brand text-white shadow-[0_0_20px_rgba(37,99,235,0.2)]":"bg-white/[0.02] border-white/10 text-slate-400 hover:border-white/30 hover:bg-white/[0.05]"}`,children:[c.jsx("div",{className:`p-1.5 rounded-lg transition-all ${H?"bg-blue-brand shadow-lg":"bg-white/5 group-hover/gene:scale-110"}`,children:c.jsx("img",{src:z.image,alt:"",className:`w-6 h-6 object-contain ${H?"brightness-125":"grayscale opacity-50"}`})}),c.jsxs("div",{className:"flex flex-col items-start",children:[c.jsx("span",{className:"text-[11px] font-black uppercase tracking-tight line-clamp-1",children:z.name}),c.jsx("span",{className:"text-[8px] font-bold opacity-40 uppercase tracking-widest",children:s(H?P===2?"gene.dominant":"gene.active":"gene.inactive")})]}),H&&c.jsx("div",{className:"absolute top-1 right-1 flex gap-0.5",children:[...Array(P)].map((X,Z)=>c.jsx("div",{className:"w-1 h-3 bg-blue-brand-2 rounded-full"},Z))})]},z.id)})})]})}),c.jsxs("div",{className:"lg:col-span-4 flex flex-col gap-6 lg:border-l lg:border-white/10 lg:pl-8",children:[c.jsxs("div",{className:"space-y-4",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx(Sc,{size:14,className:I}),c.jsx("span",{className:"text-[11px] uppercase font-black tracking-[0.2em] opacity-60",children:s("home.search_engine")})]}),c.jsxs("div",{className:"relative group/search",children:[c.jsx("input",{value:i,onChange:z=>{l(z.target.value),v(30)},placeholder:s("home.search_placeholder"),className:"w-full bg-white/[0.04] border-2 border-white/10 rounded-2xl pl-4 pr-12 py-4 text-sm font-bold placeholder:text-white/20 outline-none focus:border-blue-brand/50 transition-all focus:bg-white/[0.06] focus:shadow-2xl focus:shadow-blue-brand/5"}),c.jsx("div",{className:"absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-white/5 text-white/40",children:c.jsx(Sc,{size:16})})]})]}),c.jsxs("div",{className:"space-y-4",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx(R2,{size:14,className:I}),c.jsx("span",{className:"text-[11px] uppercase font-black tracking-[0.2em] opacity-60",children:s("home.sort_filters")})]}),c.jsxs("div",{className:"flex flex-col gap-3",children:[c.jsxs("div",{className:"relative group/sort",children:[c.jsxs("select",{value:f,onChange:z=>{b(z.target.value),v(30)},className:"w-full bg-white/[0.04] border-2 border-white/10 rounded-2xl px-5 py-4 text-xs font-black uppercase tracking-widest outline-none text-white focus:border-blue-brand/50 cursor-pointer appearance-none focus:bg-white/[0.06]",children:[c.jsx("option",{value:"name-az",className:"bg-[#0a1224]",children:s("home.sort_az")}),c.jsx("option",{value:"name-za",className:"bg-[#0a1224]",children:s("home.sort_za")}),c.jsx("option",{value:"code-az",className:"bg-[#0a1224]",children:s("home.sort_code_asc")}),c.jsx("option",{value:"code-za",className:"bg-[#0a1224]",children:s("home.sort_code_desc")}),c.jsx("option",{value:"hp-desc",className:"bg-[#0a1224]",children:s("home.sort_hp_desc")}),c.jsx("option",{value:"atk-desc",className:"bg-[#0a1224]",children:s("home.sort_atk_desc")}),c.jsx("option",{value:"spd-desc",className:"bg-[#0a1224]",children:s("home.sort_spd_desc")})]}),c.jsx(i2,{size:16,className:"absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-40"})]}),c.jsxs("button",{className:`group relative overflow-hidden w-full py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 border-2 ${d?"bg-blue-brand/20 border-blue-brand text-blue-brand-2":"bg-white/5 border-white/10 text-white/40 hover:border-white/20"}`,onClick:()=>h(!d),children:[c.jsx(Bh,{size:14,className:`${d?"animate-pulse":""}`}),s("home.single_gene_only")]}),c.jsxs("button",{className:`group relative overflow-hidden w-full py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 border-2 ${x?"bg-blue-brand/10 border-blue-brand/30 text-blue-brand-2":"bg-white/5 border-white/10 text-white/40 hover:border-white/20"}`,onClick:()=>G(!x),children:[c.jsx(Yh,{size:14,className:`${x?"animate-pulse":""}`}),s(x?"home.hide":"home.show")]})]})]})]})]})]}),c.jsx("section",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4",children:x?E.length>0?c.jsxs(c.Fragment,{children:[O.map((z,P)=>c.jsx(mf,{mutant:z},P)),k<E.length&&c.jsx("div",{className:"col-span-full py-8 flex justify-center",children:c.jsx("button",{onClick:()=>v(z=>z+30),className:"px-8 py-3 bg-blue-brand/10 border-2 border-blue-brand/30 rounded-2xl text-blue-brand-2 font-black uppercase tracking-widest hover:bg-blue-brand/20 transition-all active:scale-95",children:s("home.load_more_rem",{rem:E.length-k})})})]}):c.jsx("div",{className:"col-span-full py-12 text-center text-muted border border-line rounded-2xl bg-panel",children:s("home.no_results")}):c.jsx("div",{className:"col-span-full py-12 text-center text-muted border border-line rounded-2xl bg-panel",children:s("home.hidden_results")})})]})}const fM="https://mutodex.blogspot.com/feeds/posts/default?alt=json-in-script&max-results=8";function _M(a){if(!a)return"Reciente";const s=new Date(a);return Number.isNaN(s.getTime())?a:s.toLocaleDateString("es-PE",{year:"numeric",month:"short",day:"numeric"})}function xM(a){return String(a||"").replace(/<script[\s\S]*?<\/script>/gi,"").replace(/<style[\s\S]*?<\/style>/gi,"").replace(/<[^>]+>/g," ").replace(/&nbsp;/gi," ").replace(/&amp;/gi,"&").replace(/\s+/g," ").trim()}function GM(a){const s=String(a||"").match(/<img[^>]+src="([^"]+)"/i);return s?s[1]:""}function kM(a){var h,f,b,x,G,k;const s=((h=a.title)==null?void 0:h.$t)||a.title||"Sin título",i=((f=a.published)==null?void 0:f.$t)||a.published||"",l=((b=a.content)==null?void 0:b.$t)||a.content||((x=a.summary)==null?void 0:x.$t)||a.summary||"",p=Array.isArray(a.link)?((G=a.link.find(v=>v.rel==="alternate"))==null?void 0:G.href)||((k=a.link[0])==null?void 0:k.href)||"#":a.url||a.href||"#",g=GM(l)||a.image||"",d=xM(l);return{title:s,published:i,dateLabel:_M(i),excerpt:d.slice(0,220)+(d.length>220?"…":""),excerptFull:d,rawText:d,link:p,image:g}}function yM(a){const s=String(a||"").replace(/\s+/g," ").trim();if(!s)return[];const i=["ANUNCIOS:","OFERTAS:","MINI EVENTO:","CRONOLOGIA:"],l=[];for(let p=0;p<i.length;p++){const g=i[p],d=s.indexOf(g);if(d===-1)continue;let h=s.length;for(let b=p+1;b<i.length;b++){const x=s.indexOf(i[b],d+g.length);if(x!==-1){h=x;break}}const f=s.slice(d+g.length,h).trim();f&&l.push({title:g.replace(":",""),body:f.length>320?f.slice(0,320)+"…":f})}return l.length||l.push({title:"Resumen",body:s.length>420?s.slice(0,420)+"…":s}),l.slice(0,4)}function vM(){const{region:a,translate:s}=St(),i=a==="USD",[l,p]=Y.useState([]),[g,d]=Y.useState(!0),[h,f]=Y.useState(!1);return Y.useEffect(()=>{let b=null;const x=`mggFeedCallback_${Date.now()}`,G=()=>{b&&b.parentNode&&b.parentNode.removeChild(b);try{window[x]=void 0}catch{}};return window[x]=k=>{var v;G();try{const S=(((v=k==null?void 0:k.feed)==null?void 0:v.entry)||[]).map(kM);p(S),d(!1)}catch{f(!0),d(!1)}},b=document.createElement("script"),b.src=`${fM}&callback=${x}`,b.onerror=()=>{G(),f(!0),d(!1)},document.body.appendChild(b),G},[]),c.jsxs("div",{className:"flex flex-col gap-6",children:[c.jsxs("section",{className:"hero transition-all duration-700 !p-6 md:!p-12 relative overflow-hidden bg-gradient-to-br from-blue-brand/10 via-blue-brand-2/5 to-transparent border-blue-brand-2/20 shadow-blue-brand-2/5",children:[c.jsxs("div",{className:"eyebrow scale-90 md:scale-100",children:[c.jsx(Af,{size:14,className:"text-blue-brand-2"}),c.jsx("span",{children:i?"News Feed":"Portal informativo"})]}),c.jsxs("h1",{className:"text-3xl md:text-6xl font-black mt-4 mb-4 uppercase tracking-tighter leading-[0.9] md:leading-[0.95] text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-brand-2/80 to-blue-brand-2",children:[i?"NEWS":"NOVEDADES"," ",c.jsx("span",{className:"text-blue-brand-2 block",children:"MUTODEX"})]}),c.jsx("p",{className:"text-muted text-sm md:text-base max-w-2xl mx-auto px-4 opacity-80",children:i?"Latest news delivered directly from the official Mutodex blog.":"Noticias actualizadas directamente desde el blog oficial de Mutodex."})]}),c.jsx(ea,{}),c.jsxs("div",{className:"grid lg:grid-cols-[1fr_350px] gap-6 items-start",children:[c.jsx("section",{className:"flex flex-col gap-5 order-2 lg:order-1",children:g?c.jsx("div",{className:"panel text-center py-12 text-muted bg-blue-brand/5 border-blue-brand/20",children:i?"Loading posts...":"Cargando publicaciones…"}):h?c.jsx("div",{className:"panel text-center py-12 text-muted bg-blue-brand/5 border-blue-brand/20",children:i?"Could not load posts at this moment.":"No se pudieron cargar las publicaciones en este momento."}):l.length===0?c.jsx("div",{className:"panel text-center py-12 text-muted bg-blue-brand/5 border-blue-brand/20",children:i?"No posts found.":"No se encontraron publicaciones."}):l.map((b,x)=>{const G=yM(b.excerptFull||b.rawText||b.excerpt||"");return c.jsxs("article",{className:"panel p-0 overflow-hidden flex flex-col group transition-all duration-300 border-white/10 hover:border-blue-brand-2/30 shadow-lg hover:shadow-blue-brand-2/[0.04]",children:[c.jsxs("div",{className:"p-5 md:p-7 pb-0",children:[c.jsxs("div",{className:"flex items-center gap-2 font-mono font-bold text-[10px] uppercase tracking-widest mb-3 text-blue-brand-2",children:[c.jsx(s2,{size:12}),b.dateLabel]}),c.jsx("h2",{className:"m-0 text-xl md:text-3xl font-bold leading-tight tracking-tight",children:c.jsx("a",{href:b.link,target:"_blank",rel:"noopener noreferrer",className:"transition-colors hover:text-blue-brand-2",children:b.title})})]}),b.image&&c.jsx("div",{className:"px-5 md:px-7 mt-5",children:c.jsx("div",{className:"relative aspect-[16/8] overflow-hidden rounded-xl border border-white/10",children:c.jsx("img",{className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",src:b.image,alt:b.title,loading:"lazy",referrerPolicy:"no-referrer"})})}),c.jsx("div",{className:"p-5 md:p-7 pt-5 grid gap-4",children:G.map((k,v)=>c.jsxs("div",{className:"border-l-2 pl-4 py-1 border-blue-brand/30",children:[c.jsx("h3",{className:"m-0 mb-1.5 text-[11px] md:text-xs uppercase tracking-widest font-black text-white/90",children:k.title}),c.jsx("p",{className:"m-0 text-muted text-sm md:text-base leading-relaxed opacity-90",children:k.body})]},v))}),c.jsx("div",{className:"p-5 md:p-7 pt-0 mt-auto",children:c.jsxs("a",{className:"btn btn-primary w-full md:w-auto transition-all",target:"_blank",rel:"noopener noreferrer",href:b.link,children:[c.jsx(Fn,{size:16}),c.jsx("span",{children:i?"Read on Mutodex":"Leer en Mutodex"})]})})]},x)})}),c.jsxs("aside",{className:"flex flex-col gap-6 order-1 lg:order-2",children:[c.jsxs("section",{className:"panel !p-5 flex flex-col gap-4 border border-white/5 bg-blue-brand/2",children:[c.jsxs("div",{className:"kv-label text-[10px] opacity-60 flex items-center gap-2",children:[c.jsx(j2,{size:12}),i?"Quick Access":"Acceso Rápido"]}),c.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2",children:[{name:i?"Official Mutant List":"Lista oficial: mutantes",url:"https://mutodex.blogspot.com/p/lista-oficial-mutantes.html"},{name:i?"Secret Breeding":"Hibridaciones secretas",url:"https://mutodex.blogspot.com/p/hibridaciones-secretas.html"},{name:i?"Attack/HP Orbs":"Orbes de ataque/hp",url:"https://mutodex.blogspot.com/p/orbes.html"},{name:i?"EVO Discount":"Descuento de EVO",url:"https://mutodex.blogspot.com/p/descuento-de-evo.html"},{name:i?"Stats Calculator":"Calculadora stats",url:"https://mutodex.blogspot.com/p/calculadora-de-stats.html"}].map((b,x)=>c.jsxs("a",{className:"flex items-center justify-between p-3 rounded-xl bg-white/3 border border-line text-xs font-medium hover:border-blue-brand-2/50 hover:bg-blue-brand-2/10 transition-all duration-300",target:"_blank",rel:"noopener noreferrer",href:b.url,children:[b.name,c.jsx(Fn,{size:12,className:"opacity-40"})]},x))})]}),c.jsxs("section",{className:"panel !p-5 flex flex-col gap-4 border border-white/5 bg-blue-brand/2",children:[c.jsx("div",{className:"kv-label text-[10px] opacity-60",children:i?"Blog Entries":"Entradas de Blog"}),c.jsx("div",{className:"flex flex-col gap-2",children:g?c.jsx("div",{className:"text-muted text-xs animate-pulse",children:i?"Synchronizing...":"Sincronizando..."}):l.slice(0,6).map((b,x)=>c.jsxs("a",{className:"block p-3 rounded-xl bg-white/3 border border-line transition-all duration-300 hover:border-blue-brand-2/40 group",target:"_blank",rel:"noopener noreferrer",href:b.link,children:[c.jsx("div",{className:"text-[9px] font-bold mb-1 opacity-70 text-blue-brand-2",children:b.dateLabel}),c.jsx("div",{className:"text-xs font-bold text-white/90 line-clamp-1 group-hover:text-blue-brand-2",children:b.title})]},x))})]}),c.jsx("div",{className:"panel !p-4 border border-blue-brand/20 bg-blue-brand/5 shadow-inner",children:c.jsx("p",{className:"text-muted text-[10px] m-0 leading-relaxed",children:i?"Data is loaded via JSONP from Blogger to avoid CORS. If news is not visible, check your connection.":"Los datos se cargan vía JSONP desde Blogger para evitar problemas de CORS. Si no ves las noticias, revisa tu conexión."})})]})]})]})}const yc=({service:a,isOffer:s,isOther:i,variant:l="default"})=>{const{region:p,multiplier:g,translate:d,countryCode:h}=St(),f=p!=="LATAM",b=f&&a.nombreEn?a.nombreEn:a.nombre,x=f&&a.descripcionEn?a.descripcionEn:a.descripcion,G=f&&a.featuresEn?a.featuresEn:a.features,k=h?Sf.find(O=>O.id.toUpperCase()===h.toUpperCase()):null,v="$";let M="";const S=a.precio;S>0?M=(S/3.7*1.15*1.1*.9).toFixed(2):M="0.00",(()=>{const O=h==null?void 0:h.toUpperCase();return O==="PE"?"🇵🇪":O==="US"?"🇺🇸":k?k.flag:O?"🌎":"🇵🇪"})();const E=()=>{const O=a.precio===0;let C="";O?p==="LATAM"?C="GRATIS":p==="PT"?C="GRÁTIS":p==="FR"?C="GRATUIT":p==="DE"?C="KOSTENLOS":C="FREE":C=`${v}${M}`;let z="";p==="LATAM"?z=`¡Hola! Me interesa el servicio: ${b} (ID: ${a.id}) - Precio: ${C}`:p==="PT"?z=`Olá! Estou interessado no serviço: ${b} (ID: ${a.id}) - Preço: ${C}`:p==="FR"?z=`Bonjour! Je suis intéressé par le service: ${b} (ID: ${a.id}) - Prix: ${C}`:p==="DE"?z=`Hallo! Ich habe Interesse an dem Service: ${b} (ID: ${a.id}) - Preis: ${C}`:z=`Hello! I'm interested in: ${b} (ID: ${a.id}) - Price: ${C}`,window.open(`https://wa.me/${jf}?text=${encodeURIComponent(z)}`,"_blank")},K=d("services.buy");return l==="compact"?c.jsxs("article",{className:"panel !p-3 flex items-center justify-between gap-4 group transition-all duration-300 bg-white/[0.02] border hover:border-blue-brand/50",children:[c.jsxs("div",{className:"flex items-center gap-3 flex-1 min-w-0",children:[c.jsx("div",{className:"w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden shrink-0 bg-white/5 border border-white/10 group-hover:border-blue-brand/30 transition-colors",children:a.imagen?c.jsx("img",{src:a.imagen,alt:"",className:"w-full h-full object-cover"}):c.jsx("div",{className:"w-full h-full flex items-center justify-center text-blue-brand-2",children:c.jsx(Go,{size:20})})}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsx("h4",{className:"m-0 text-xs md:text-sm font-black uppercase text-white truncate group-hover:text-blue-brand-2 transition-colors",children:b}),c.jsx("div",{className:"text-[10px] md:text-[11px] font-black text-blue-brand-2 mt-0.5",children:a.precio===0?"GRATIS":`${v} ${M}`})]})]}),c.jsxs("button",{onClick:E,className:"btn btn-sm !px-3 h-8 md:h-9 border-transparent shrink-0 bg-blue-brand/10 text-blue-brand-2 hover:bg-blue-brand hover:text-white",children:[c.jsx(Go,{size:14,className:"md:size-4"}),c.jsx("span",{className:"hidden sm:inline text-[10px] font-black uppercase",children:K})]})]}):c.jsxs("article",{className:`card flex flex-col group transition-all duration-300 hover:border-blue-brand/50 ${s?"outline-1 outline-blue-brand/35 border-blue-brand/30 bg-blue-brand/5":""}`,children:[a.imagen&&c.jsxs("div",{className:"relative overflow-hidden aspect-[16/10]",children:[c.jsx("img",{src:a.imagen,alt:b,className:"w-full h-full object-cover block transition-transform duration-500 group-hover:scale-110"}),c.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"})]}),c.jsxs("div",{className:"card-body p-4 md:p-5 flex flex-col flex-1",children:[c.jsx("h3",{className:"m-0 mb-2 text-base md:text-lg font-black uppercase tracking-tight text-white line-clamp-1 group-hover:text-blue-brand-2 transition-colors",children:b}),c.jsx("p",{className:"text-muted text-sm mb-4 leading-relaxed line-clamp-2 md:line-clamp-none",children:x}),c.jsx("div",{className:"flex flex-wrap gap-2 mb-5",children:G==null?void 0:G.map((O,C)=>c.jsx("span",{className:"px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-slate-400 text-[10px] md:text-[11px] font-bold uppercase",children:O},C))}),c.jsxs("div",{className:"flex items-end justify-between mt-auto pt-4 border-t border-white/5",children:[c.jsx("div",{className:"text-xl md:text-2xl font-black tracking-tighter text-white",children:a.precio===0?c.jsx("span",{className:"text-green-brand",children:"GRATIS"}):`${v} ${M}`}),c.jsxs("div",{className:"flex gap-2",children:[a.saberMas&&c.jsx("a",{href:a.saberMas,target:"_blank",rel:"noopener noreferrer",className:"btn btn-sm px-3 bg-white/5 border-white/5 text-slate-400 hover:text-white",title:"Saber más",children:c.jsx(Fn,{size:16})}),c.jsxs("button",{className:`btn btn-sm px-4 ${s?"btn-primary":i?"bg-green-brand text-white":"bg-blue-brand/20 text-blue-brand-2 hover:bg-blue-brand hover:text-white"}`,onClick:E,children:[a.precio===0?c.jsx(_2,{size:16}):c.jsx(Go,{size:16}),c.jsx("span",{className:"text-[11px] font-black uppercase",children:a.precio===0?"Ver":K})]})]})]})]})]})};function MM(){const{region:a,countryCode:s,setCountry:i,translate:l}=St(),p=a==="USD",g=a!=="LATAM"&&a!=="PT"?"https://chat.whatsapp.com/IdBIvXWUPNjDLcPmBvkp1B":np,d=sc.filter(b=>b.categoria==="OFFER"),h=sc.filter(b=>b.categoria==="MAIN"),f=sc.filter(b=>b.categoria==="OTHER");return c.jsxs("div",{className:"flex flex-col gap-8 pb-20",children:[c.jsxs("section",{className:"relative hero !p-10 md:!p-24 overflow-hidden rounded-[3rem]",children:[c.jsx("div",{className:"absolute inset-0 opacity-10 bg-grid-slate-900/[0.1] pointer-events-none"}),c.jsx("div",{className:"absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-brand/20 to-transparent -rotate-12 transform translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none"}),c.jsxs("div",{className:"relative z-10",children:[c.jsxs("div",{className:"eyebrow bg-white/5 border-white/10 px-4 py-1 rounded-full inline-flex items-center gap-2 mb-6 backdrop-blur-md",children:[c.jsx(Go,{size:14,className:"text-blue-brand-2"}),c.jsx("span",{className:"text-[10px] font-black uppercase tracking-[0.2em]",children:p?"Premium Hub":"Centro de Servicios"})]}),c.jsxs("h1",{className:"text-4xl md:text-8xl lg:text-9xl font-black mt-4 mb-6 uppercase tracking-tighter leading-[0.8] md:leading-[0.85] text-white",children:[l("nav.servicios").split(" ")[0]," ",c.jsx("br",{}),c.jsxs("span",{className:"text-blue-brand relative",children:[l("nav.servicios").split(" ")[1]||"PREMIUM",c.jsx("span",{className:"absolute -bottom-2 left-0 w-full h-1 bg-white/10 rounded-full"})]})]}),c.jsx("p",{className:"text-slate-400 text-sm md:text-lg max-w-2xl mx-auto md:mx-0 opacity-90 leading-relaxed font-medium",children:l("services.subtitle")})]})]}),c.jsxs("section",{className:"panel !p-8 md:!p-12 relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-brand/10 to-transparent border-blue-brand/20",children:[c.jsx("div",{className:"absolute inset-0 opacity-5 bg-grid-tech pointer-events-none"}),c.jsxs("div",{className:"flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10",children:[c.jsxs("div",{className:"text-center lg:text-left space-y-3",children:[c.jsx("h3",{className:"m-0 text-3xl font-black uppercase tracking-tighter text-white",children:p?"Need Expert Assistance?":"¿Tienes dudas?"}),c.jsx("p",{className:"text-slate-400 m-0 text-sm md:text-base font-medium max-w-xl",children:p?"Chat with our command center directly via WhatsApp for instant support.":"Escríbeme directamente por WhatsApp o entra al grupo de ayuda para soporte inmediato."})]}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto min-w-[min(400px,100%)]",children:[c.jsxs("a",{className:"group/btn relative overflow-hidden py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 bg-blue-brand text-white shadow-xl shadow-blue-brand/40 hover:scale-105 active:scale-95",target:"_blank",rel:"noopener noreferrer",href:`https://wa.me/${jf}`,children:[c.jsx(V2,{size:20,className:"group-hover/btn:-translate-y-1 transition-transform"}),c.jsx("span",{children:p?"Direct Command":"WhatsApp Directo"})]}),c.jsxs("a",{className:"group/btn relative overflow-hidden py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 bg-white/5 border-2 border-white/10 text-white hover:bg-white/10 active:scale-95",target:"_blank",rel:"noopener noreferrer",href:g,children:[c.jsx(ml,{size:20,className:"group-hover/btn:scale-110 transition-transform"}),c.jsx("span",{children:l("whatsapp.btn")})]})]})]})]}),c.jsxs("div",{className:"space-y-12",children:[c.jsxs("section",{className:"flex flex-col gap-6",children:[c.jsxs("div",{className:"flex items-center gap-4",children:[c.jsx("div",{className:"w-2 h-8 bg-blue-brand rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]"}),c.jsx("h2",{className:"text-2xl font-black uppercase tracking-tighter m-0 text-white",children:p?"Limited Time Offers":"Ofertas Especiales"}),c.jsx("div",{className:"h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:d.map(b=>c.jsx(yc,{service:b,isOffer:!0},b.id))})]}),c.jsxs("section",{className:"flex flex-col gap-6",children:[c.jsxs("div",{className:"flex items-center gap-4",children:[c.jsx("div",{className:"w-2 h-8 bg-blue-brand-2 rounded-full opacity-50"}),c.jsx("h2",{className:"text-2xl font-black uppercase tracking-tighter m-0 text-white",children:p?"Core Protocols":"Servicios Principales"}),c.jsx("div",{className:"h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:h.map(b=>c.jsx(yc,{service:b,variant:"compact"},b.id))})]}),c.jsxs("section",{className:"flex flex-col gap-6",children:[c.jsxs("div",{className:"flex items-center gap-4",children:[c.jsx("div",{className:"w-2 h-8 bg-slate-700 rounded-full"}),c.jsx("h2",{className:"text-2xl font-black uppercase tracking-tighter m-0 text-white",children:p?"Expansion Packs":"Otros Servicios"}),c.jsx("div",{className:"h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:f.map(b=>c.jsx(yc,{service:b,isOther:!0},b.id))})]})]}),c.jsxs("section",{className:"flex flex-col gap-8 mt-12 pb-12",children:[c.jsxs("div",{className:"flex items-center gap-4 justify-center",children:[c.jsx("div",{className:"h-px w-10 md:w-20 bg-gradient-to-r from-transparent to-blue-brand"}),c.jsx("h2",{className:"text-xl md:text-3xl font-black uppercase tracking-tighter m-0 text-white text-center",children:l("services.payment_methods")}),c.jsx("div",{className:"h-px w-10 md:w-20 bg-gradient-to-l from-transparent to-blue-brand"})]}),c.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-5 gap-6",children:nG.map((b,x)=>c.jsxs("article",{className:"group relative flex flex-col p-6 bg-[#0a1224] border-2 border-white/5 rounded-[2rem] transition-all hover:border-blue-brand/50 hover:-translate-y-2",children:[c.jsx("div",{className:"absolute inset-0 bg-blue-brand/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]"}),c.jsx("div",{className:"w-full aspect-video flex items-center justify-center p-3 relative z-10",children:c.jsx("img",{src:b.logo,alt:b.name,className:"max-w-[80%] max-h-[80%] object-contain group-hover:scale-110 transition-transform duration-500"})}),c.jsxs("div",{className:"mt-4 text-center relative z-10 w-full overflow-hidden",children:[c.jsx("span",{className:"text-[11px] block font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-blue-brand-2 transition-colors mb-2",children:b.name}),c.jsx("p",{className:"text-[9px] text-slate-500 font-bold m-0 leading-relaxed italic opacity-80 line-clamp-2",children:(p?b.info:b.infoEs)||b.info})]})]},x))}),c.jsxs("div",{className:"panel !p-6 flex flex-col md:flex-row items-center gap-6 bg-blue-brand/5 border-blue-brand/20 relative overflow-hidden",children:[c.jsx("div",{className:"absolute inset-0 bg-grid-tech opacity-5 pointer-events-none"}),c.jsx("div",{className:"w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 bg-blue-brand/20 text-blue-brand border border-blue-brand/30 shadow-xl relative z-10",children:c.jsx(m2,{size:28})}),c.jsxs("p",{className:"m-0 text-xs md:text-sm text-slate-400 font-medium leading-relaxed relative z-10",children:[c.jsx("strong",{className:"text-white uppercase tracking-widest mr-2",children:p?"Secure Transmission:":"Información de Pago:"})," ",p?"Payments are coordinated directly via WhatsApp to ensure security. We will provide payment details after selection.":"Los pagos son coordinados directamente vía WhatsApp para garantizar la seguridad de la transacción. Al elegir un método, te proporcionaremos los datos necesarios."]})]})]})]})}const TM=[0,0,0,0,0,2e4,3e4,38700,49e3,1e5,15e4,174e3,204e3,237e3,76e4,11e5,157e4,235e4,262e4,403e4,445e4,488e4,533e4,581e4,882e4,954e4,103e5,111e5,119e5,181e5,194e5,206e5,22e6,233e5,37e6,392e5,414e5,437e5,46e6,484e5,508e5,533e5,559e5,585e5,612e5,64e6,668e5,697e5,726e5,756e5,787e5,818e5,849e5,882e5,915e5,948e5,982e5,102e6,105e6,109e6,113e6,116e6,12e7,124e6,128e6,132e6,136e6,14e7,144e6,148e6,152e6,157e6,161e6,166e6,17e7,175e6,179e6,184e6,189e6,194e6,198e6,203e6,208e6,213e6,218e6,224e6,229e6,234e6,24e7,245e6,25e7,256e6,262e6,267e6,273e6,279e6,285e6,29e7,296e6,302e6,308e6,315e6,321e6,327e6,333e6,34e7,346e6,353e6,359e6,366e6,373e6,379e6,386e6,393e6,4e8,407e6,414e6,421e6,428e6,435e6,443e6,45e7,458e6,465e6,473e6,48e7,488e6,495e6,503e6,511e6,519e6,527e6,535e6,543e6,551e6,559e6,568e6,576e6,584e6,593e6,601e6,61e7,618e6,627e6,636e6,645e6,653e6,662e6,671e6,68e7,69e7,699e6,708e6,717e6,727e6,736e6,745e6,755e6,764e6,774e6,779e6,784e6,789e6,793e6,798e6,803e6,808e6,813e6,818e6,813e6,818e6,823e6,827e6,832e6,837e6,842e6,847e6,852e6,856e6,861e6,866e6,871e6,876e6,881e6,885e6,89e7,895e6,9e8,905e6,91e7,914e6,919e6,924e6,929e6,934e6,939e6,943e6,948e6,953e6,958e6,963e6,968e6,973e6,977e6,982e6,987e6,992e6,997e6,1e9,101e7,101e7,102e7,102e7,103e7,103e7,104e7,104e7,105e7,105e7,105e7,106e7,106e7,107e7,107e7,108e7,108e7,109e7,109e7,11e8,11e8,111e7,111e7,112e7,112e7,113e7,113e7,114e7,114e7,115e7,115e7,116e7,116e7,117e7,117e7,118e7,118e7,119e7,119e7,12e8,12e8,12e8,121e7,121e7,122e7,122e7,123e7,123e7,124e7,124e7,125e7,125e7,126e7,126e7,127e7,127e7,128e7,128e7,129e7,129e7,13e8,13e8,131e7,131e7,132e7,132e7,133e7,133e7,134e7,134e7,135e7,135e7,135e7,136e7,136e7,137e7,137e7,138e7,138e7,139e7,139e7,14e8,14e8,141e7,141e7,142e7,142e7,143e7,143e7,144e7,144e7,145e7,145e7,146e7,146e7,147e7,147e7,148e7,148e7,149e7,149e7,15e8,15e8,15e8,151e7,151e7,152e7,152e7,153e7,153e7,154e7,154e7,155e7,155e7,156e7,156e7,157e7,157e7,158e7,158e7,159e6],AM=[0,0,0,0,0,5,8,10,12,25,38,44,51,59,190,275,393,588,655,1008,1113,1220,1333,1453,2205,2385,2575,2775,2975,3e3],bf=328,vc=159e7,ff=30,Mc=3e3,_f={math_tool:{LATAM:"Herramienta de cálculo",USD:"Math Tool",PT:"Ferramenta de cálculo",FR:"Outil de calcul",DE:"Berechnungstool"},calculator:{LATAM:"CALCULADORA",USD:"CALCULATOR",PT:"CALCULADORA",FR:"CALCULATEUR",DE:"RECHNER"},hero_desc:{LATAM:"Calcula hasta qué EVO puedes subir según tus recursos y el descuento.",USD:"Calculate your maximum EVO based on your resources and active discounts.",PT:"Calcule o EVO máximo que você pode atingir com base em seus recursos e descontos.",FR:"Calculez votre EVO maximum en fonction de vos ressources et des réductions.",DE:"Berechnen Sie Ihr maximales EVO basierend auf Ihren Ressourcen und Rabatten."},current_evo:{LATAM:"EVO actual",USD:"Current EVO",PT:"EVO atual",FR:"EVO actuel",DE:"Aktuelles EVO"},available_credits:{LATAM:"Créditos disponibles",USD:"Available Credits",PT:"Créditos disponíveis",FR:"Crédits disponibles",DE:"Verfügbare Credits"},available_gold:{LATAM:"Oro disponible",USD:"Available Gold",PT:"Ouro disponível",FR:"Or disponible",DE:"Verfügbares Gold"},applied_discount:{LATAM:"Descuento aplicado",USD:"Applied Discount",PT:"Desconto aplicado",FR:"Réduction appliquée",DE:"Angewandter Rabatt"},calculate_evo:{LATAM:"Calcular EVO",USD:"Calculate EVO",PT:"Calcular EVO",FR:"Calculer l'EVO",DE:"EVO berechnen"},reset:{LATAM:"Reiniciar",USD:"Reset",PT:"Reiniciar",FR:"Réinitialiser",DE:"Zurücksetzen"},you_will_reach:{LATAM:"Llegarás a",USD:"YOU WILL REACH",PT:"VOCÊ VAI ALCANÇAR",FR:"VOUS ATTEINDREZ",DE:"SIE WERDEN ERREICHEN"},levels:{LATAM:"niveles",USD:"levels",PT:"níveis",FR:"niveaux",DE:"Ebenen"},discount:{LATAM:"Descuento",USD:"Discount",PT:"Desconto",FR:"Réduction",DE:"Rabatt"},credits_spent:{LATAM:"Gasto Créditos",USD:"Credits Spent",PT:"Créditos Gastos",FR:"Crédits dépensés",DE:"Verwendete Credits"},gold_spent:{LATAM:"Gasto Oro",USD:"Gold Spent",PT:"Ouro Gasto",FR:"Or dépensé",DE:"Verwendetes Gold"},credits_left:{LATAM:"Sobran Créditos",USD:"Credits Left",PT:"Créditos Restantes",FR:"Crédits restants",DE:"Verbleibende Credits"},gold_left:{LATAM:"Sobra Oro",USD:"Gold Left",PT:"Ouro Restante",FR:"Or restant",DE:"Verbleibendes Gold"},enter_resources:{LATAM:"Ingresa tus recursos y presiona Calcular para ver el resultado.",USD:"Enter your resources and press Calculate to see the result.",PT:"Insira seus recursos e pressione Calcular para ver o resultado.",FR:"Saisissez vos ressources et cliquez sur Calculer pour voir le résultat.",DE:"Geben Sie Ihre Ressourcen ein und drücken Sie Berechnen, um das Ergebnis zu sehen."},note:{LATAM:"Nota:",USD:"Note:",PT:"Nota:",FR:"Remarque :",DE:"Hinweis:"},note_desc:{LATAM:"Cálculo basado en reglas de MGG: cap de oro (30) y cap de créditos (328).",USD:"Calculation based on MGG rules: gold cap (30) and credit cap (328).",PT:"Cálculo baseado nas regras do MGG: limite de ouro (30) e limite de créditos (328).",FR:"Calcul basé sur les règles du MGG : limite d'or (30) et limite de crédits (328).",DE:"Berechnung basierend auf MGG-Regeln: Goldgrenze (30) und Creditgrenze (328)."}};function IM(){const{region:a}=St(),[s,i]=Y.useState(1),[l,p]=Y.useState(0),[g,d]=Y.useState(0),[h,f]=Y.useState(0),[b,x]=Y.useState(null),G=M=>{var S,I;return((S=_f[M])==null?void 0:S[a])||((I=_f[M])==null?void 0:I.USD)||""},k=()=>{let M=l,S=g,I=s;const E=h,K=I,O=(100-E)*.01,C=M,z=S;let P=0;if(I>=bf){const Z=vc*O,F=Math.floor(M/Z);M-=F*Z,P=I+F}else for(;;){if(I>=bf){const F=vc*O,oe=Math.floor(M/F);M-=oe*F,P=I+oe;break}const Z=Math.floor((TM[I]??vc)*O);if(M-Z>=0)M-=Z,I+=1;else{P=I;break}}let H=0;if(P>=ff){const Z=Mc*O,F=Math.floor(S/Z);S-=F*Z,H=F}else for(;;){if(H+P>=ff){const oe=Mc*O,pe=Math.floor(S/oe);S-=pe*oe,H=pe;break}const Z=AM[P+H]??Mc,F=Math.round(Z*O);if(S-F>=0)S-=F,H+=1;else break}const X=P+H;x({nuevoEvo:X,incremento:X-K,gastoCreditos:Math.max(0,C-M),gastoOro:Math.max(0,z-S),sobraCreditos:M,sobraOro:S,descuentoAplicado:E})},v=()=>{i(1),p(0),d(0),f(0),x(null)};return c.jsxs("div",{className:"flex flex-col gap-6",children:[c.jsxs("section",{className:"hero transition-all duration-700 !p-6 md:!p-12 relative overflow-hidden bg-gradient-to-br from-blue-brand/10 via-blue-brand-2/5 to-transparent border-blue-brand-2/20 shadow-blue-brand-2/5",children:[c.jsx("div",{className:"absolute top-0 right-0 p-8 opacity-20",children:c.jsx(nc,{size:120,className:"text-blue-brand-2"})}),c.jsxs("div",{className:"eyebrow scale-90 md:scale-100",children:[c.jsx(nc,{size:14,className:"mr-1 text-blue-brand-2"}),c.jsx("span",{children:G("math_tool")})]}),c.jsxs("h1",{className:"text-3xl md:text-6xl font-black mt-4 mb-4 uppercase tracking-tighter leading-[0.9] md:leading-[0.95] text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-brand-2/80 to-blue-brand-2",children:["EVO ",c.jsx("span",{className:"text-blue-brand-2",children:G("calculator")})]}),c.jsx("p",{className:"text-muted text-sm md:text-base max-w-2xl mx-auto px-4 opacity-80",children:G("hero_desc")})]}),c.jsx(ea,{}),c.jsxs("div",{className:"grid md:grid-cols-[1fr_1.2fr] gap-4 md:gap-6 items-start",children:[c.jsx("section",{className:"panel flex flex-col gap-5 !p-4 md:!p-6 border border-white/10 bg-white/[0.01] hover:border-blue-brand/20 transition-all",children:c.jsxs("div",{className:"grid gap-3.5",children:[c.jsxs("label",{className:"kv",children:[c.jsx("span",{className:"kv-label text-[10px]",children:G("current_evo")}),c.jsx("input",{value:s,onChange:M=>i(Number(M.target.value)),className:"input py-2.5 text-sm focus:border-blue-brand-2/60 bg-white/[0.02] text-white transition-all",type:"number"})]}),c.jsxs("label",{className:"kv",children:[c.jsx("span",{className:"kv-label text-[10px]",children:G("available_credits")}),c.jsx("input",{value:l,onChange:M=>p(Number(M.target.value)),className:"input py-2.5 text-sm focus:border-blue-brand-2/60 bg-white/[0.02] text-white transition-all",type:"number"})]}),c.jsxs("label",{className:"kv",children:[c.jsx("span",{className:"kv-label text-[10px]",children:G("available_gold")}),c.jsx("input",{value:g,onChange:M=>d(Number(M.target.value)),className:"input py-2.5 text-sm focus:border-blue-brand-2/60 bg-white/[0.02] text-white transition-all",type:"number"})]}),c.jsxs("div",{children:[c.jsx("div",{className:"kv-label text-[10px] mb-2",children:G("applied_discount")}),c.jsx("div",{className:"grid grid-cols-3 gap-2",children:tG.map(M=>c.jsxs("button",{onClick:()=>f(M),className:`btn py-2 text-xs rounded-xl transition-all duration-200 ${h===M?"btn-primary":"bg-white/5 opacity-60 hover:bg-white/10 hover:border-white/15"}`,children:[M,"%"]},M))})]}),c.jsxs("div",{className:"flex gap-2 mt-2",children:[c.jsx("button",{onClick:k,className:"btn btn-primary flex-[2] py-3 text-sm transition-all duration-200",children:G("calculate_evo")}),c.jsx("button",{onClick:v,className:"btn flex-1 py-3 text-sm border border-white/5 bg-white/[0.03] text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200",children:G("reset")})]})]})}),c.jsx("section",{className:"h-full min-h-[360px]",children:b?c.jsxs("div",{className:"panel h-full flex flex-col items-center justify-center text-center p-6 md:p-8 relative overflow-hidden transition-all duration-700 border-none bg-gradient-to-br from-blue-brand/35 via-blue-brand-2/15 to-[#0b0f19] shadow-2xl shadow-blue-brand-2/10",children:[c.jsx("div",{className:"absolute inset-0 bg-[url('https://github.com/luqueSmith/MGG/blob/main/img/Logo_mgg.png?raw=true')] bg-no-repeat bg-center opacity-[0.03] scale-150 pointer-events-none"}),c.jsx("div",{className:"kv-label uppercase tracking-widest text-[10px] opacity-70 mb-2 z-10 text-blue-200",children:G("you_will_reach")}),c.jsx("div",{className:"text-[5rem] md:text-[6rem] font-black tracking-tighter leading-none mb-2 z-10 drop-shadow-xl text-white",children:cs(b.nuevoEvo)}),c.jsxs("p",{className:"text-xs md:text-sm mb-6 z-10 font-bold opacity-80 text-blue-200",children:["+",cs(b.incremento)," ",G("levels")," · ",b.descuentoAplicado,"% ",G("discount")]}),c.jsxs("div",{className:"grid grid-cols-2 gap-2 md:gap-3 w-full z-10",children:[c.jsxs("div",{className:"border border-white/5 bg-black/40 p-3 rounded-xl flex flex-col items-center shadow-inner",children:[c.jsx("span",{className:"text-[8px] md:text-[9px] uppercase font-bold mb-1 text-blue-200/50",children:G("credits_spent")}),c.jsx("strong",{className:"text-sm md:text-base text-white",children:cs(b.gastoCreditos)})]}),c.jsxs("div",{className:"border border-white/5 bg-black/40 p-3 rounded-xl flex flex-col items-center shadow-inner",children:[c.jsx("span",{className:"text-[8px] md:text-[9px] uppercase font-bold mb-1 text-blue-200/50",children:G("gold_spent")}),c.jsx("strong",{className:"text-sm md:text-base text-white",children:cs(b.gastoOro)})]}),c.jsxs("div",{className:"border border-white/5 bg-black/20 p-3 rounded-xl flex flex-col items-center shadow-inner",children:[c.jsx("span",{className:"text-[8px] md:text-[9px] uppercase font-bold mb-1 text-white/30",children:G("credits_left")}),c.jsx("strong",{className:"text-sm md:text-base text-white/80",children:cs(b.sobraCreditos)})]}),c.jsxs("div",{className:"border border-white/5 bg-black/20 p-3 rounded-xl flex flex-col items-center shadow-inner",children:[c.jsx("span",{className:"text-[8px] md:text-[9px] uppercase font-bold mb-1 text-white/30",children:G("gold_left")}),c.jsx("strong",{className:"text-sm md:text-base text-white/80",children:cs(b.sobraOro)})]})]})]}):c.jsxs("div",{className:"panel h-full flex flex-col items-center justify-center text-muted gap-4 border-dashed border-white/10 hover:border-blue-brand/20 transition-all bg-white/[0.01] hover:bg-white/[0.02]",children:[c.jsx(nc,{size:48,className:"opacity-10"}),c.jsx("p",{className:"text-sm max-w-[200px] text-center",children:G("enter_resources")})]})})]}),c.jsxs("section",{className:"panel flex gap-4 items-center transition-all border border-blue-brand/20 bg-blue-brand/5 shadow-inner !p-4",children:[c.jsx(Tf,{size:20,className:"text-blue-brand-2 shrink-0"}),c.jsxs("div",{className:"text-[11px] md:text-xs leading-relaxed",children:[c.jsx("strong",{className:"text-white",children:G("note")})," ",G("note_desc")]})]})]})}const jM={"Ficha Reactor":"Reactor Token","Ficha Jackpot":"Jackpot Token","Tickets x25":"Energy Tickets x25","Tickets x5":"Energy Tickets x5","Triple Experiencia":"Triple Experience","Cuádruple Regeneración":"Quadruple Regeneration","Ficha Reto":"Challenge Token","Doble Experiencia":"Double Experience","Ataques Críticos":"Critical Attacks","Escudo Anticrítico":"Anticritical Shield","Doble Regeneración":"Double Regeneration"};function SM(){const{region:a,translate:s}=St(),i=a==="USD",l=Object.keys(Xh),[p,g]=Y.useState(""),[d,h]=Y.useState(l[0]),[f,b]=Y.useState(12),x=I=>i?I.startsWith("Orbe ")?I.replace("Orbe Ataque","Attack Orb").replace("Orbe Vida","Life Orb").replace("Orbe Críticos","Critical Orb").replace("Orbe Experiencia","Experience Orb").replace("Orbe Regeneración","Regeneration Orb").replace("Orbe Respuesta","Retaliate Orb"):jM[I]||I:I,G=Y.useMemo(()=>{const I=[];return Object.entries(Xh).forEach(([E,K])=>{String(K||"").split(/\r?\n/).map(O=>O.trim()).filter(Boolean).forEach(O=>{const C=O.split("	");I.push({nombre:(C[0]||"").trim(),codigo:(C[1]||"").trim(),categoria:E,imagen:(C[2]||"").trim()||void 0})})}),I},[]),k=Y.useMemo(()=>{const I=p.toLowerCase();return G.filter(E=>E.categoria===d&&(E.nombre.toLowerCase().includes(I)||E.codigo.toLowerCase().includes(I)))},[G,p,d]),[v,M]=Y.useState(null),S=I=>{navigator.clipboard.writeText(I.toLowerCase()).catch(()=>{}),M(I),setTimeout(()=>M(null),2e3)};return c.jsxs("div",{className:"flex flex-col gap-6",children:[c.jsxs("section",{className:"hero !p-6 md:!p-12 relative overflow-hidden",children:[c.jsxs("div",{className:"eyebrow scale-90 md:scale-100",children:[c.jsx(Tc,{size:14}),c.jsx("span",{children:i?"Secondary Catalog":"Catálogo secundario"})]}),c.jsxs("h1",{className:"text-3xl md:text-6xl font-black mt-4 mb-4 uppercase tracking-tighter leading-[0.9] md:leading-[0.95]",children:[i?"EXTRA":"OTROS"," ",c.jsx("span",{className:"text-blue-brand-2",children:i?"CODES":"CÓDIGOS"})]}),c.jsx("p",{className:"text-muted text-sm md:text-base max-w-2xl mx-auto px-4 opacity-80",children:i?"Orbs, consumables, structures, boxes, and offers filtered by category.":"Orbes, consumibles, estructuras, cajas y ofertas filtradas por categoría."})]}),c.jsx(ea,{}),c.jsxs("section",{className:"panel flex flex-col gap-4 !p-4 md:!p-6 transition-all border",children:[c.jsx("div",{className:"flex flex-wrap gap-2 text-center",children:l.map(I=>c.jsx("button",{onClick:()=>{h(I),b(12)},className:`flex-1 min-w-[120px] px-4 py-3 rounded-xl border text-[10px] font-black uppercase tracking-widest transition-all ${d===I?"bg-blue-brand border-blue-brand-2 text-white shadow-lg":"bg-white/5 border-transparent text-slate-400 hover:bg-white/10"}`,children:i?I==="Cajas"?"Boxes":I==="Recursos"?"Resources":I==="Orbes"?"Orbs":I:I},I))}),c.jsxs("div",{className:"relative",children:[c.jsx(Sc,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-white/40"}),c.jsx("input",{value:p,onChange:I=>g(I.target.value),placeholder:i?`Search in ${d}...`:`Buscar en ${d}...`,className:"input pl-11 py-3.5 text-sm"})]})]}),c.jsx("section",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-4",children:k.length>0?k.slice(0,f).map((I,E)=>c.jsxs("article",{className:"card p-4 flex flex-col gap-3 group transition-all border hover:border-blue-brand/40",children:[I.imagen?c.jsx("div",{className:"flex items-center justify-center p-3 rounded-xl aspect-square overflow-hidden transition-colors bg-white/5",children:c.jsx("img",{src:I.imagen,alt:x(I.nombre),className:"w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"})}):c.jsx("div",{className:"flex items-center justify-center p-3 rounded-xl aspect-square overflow-hidden opacity-30 bg-blue-brand/10 text-blue-brand-2",children:c.jsx(Tc,{size:32})}),c.jsxs("div",{className:"flex-1 flex flex-col pt-1",children:[c.jsx("h3",{className:"text-xs md:text-sm font-black uppercase tracking-tight mb-1 line-clamp-1 transition-colors",children:x(I.nombre)}),c.jsx("div",{className:"font-mono font-bold text-[9px] md:text-[10px] tracking-widest uppercase mb-4 opacity-80 text-blue-brand-2",children:I.codigo}),c.jsxs("button",{onClick:()=>S(I.codigo),className:`btn w-full text-[10px] font-black uppercase tracking-widest py-2.5 rounded-xl mt-auto transition-all ${v===I.codigo?"bg-green-brand/20 border-green-brand/30 text-green-brand":"hover:bg-blue-brand/15"}`,children:[v===I.codigo?c.jsx(gl,{size:12}):c.jsx(Ic,{size:12}),c.jsx("span",{children:v===I.codigo?i?"DONE":"LISTO":i?"COPY":"COPIAR"})]})]})]},E)):c.jsx("div",{className:"col-span-full py-16 text-center border font-bold uppercase tracking-widest text-[10px] rounded-2xl bg-[#0d1421] border-line text-muted",children:i?"No codes found in this section.":"No se encontraron códigos en esta sección."})}),k.length>f&&c.jsx("div",{className:"flex justify-center mt-6",children:c.jsx("button",{onClick:()=>b(I=>I+12),className:"btn px-12 py-3.5 rounded-xl font-black uppercase tracking-widest text-xs transition-all bg-blue-brand/10 border-blue-brand/20 hover:bg-blue-brand/20",children:i?"Load More":"Cargar más"})})]})}const xf={quick_manual:{LATAM:"Manual rápido",USD:"Quick Manual",PT:"Manual Rápido",FR:"Manuel Rapide",DE:"Schnellstart-Anleitung"},title1:{LATAM:"GUÍA",USD:"USER",PT:"GUIA",FR:"GUIDE",DE:"BENUTZER"},title2:{LATAM:"DE USO",USD:"GUIDE",PT:"DO USUÁRIO",FR:"D'UTILISATION",DE:"HANDBUCH"},subtitle:{LATAM:"Todo lo básico para usar el catálogo sin perderte.",USD:"Everything you need to know to use the catalog without getting lost.",PT:"Tudo o que você precisa saber para usar o catálogo sem se perder.",FR:"Tout ce que vous devez savoir pour utiliser le catalogue sans vous perdre.",DE:"Alles, was Sie wissen müssen, um den Katalog zu nutzen, ohne sich zu verlaufen."},sec1_title:{LATAM:"1) Buscar por nombre o por código",USD:"1) Search by name or code",PT:"1) Buscar por nome ou por código",FR:"1) Recherche par nom ou code",DE:"1) Suche nach Name oder Code"},sec1_items:{LATAM:["Escribe parte del nombre o el código en el buscador.","El listado se filtra en tiempo real."],USD:["Type part of the name or code in the search box.","The list filters in real time."],PT:["Digite parte do nome ou código na caixa de busca.","A lista é filtrada em tempo real."],FR:["Saisissez une partie du nom ou du code dans la barre de recherche.","La liste est filtrée en temps réel."],DE:["Geben Sie einen Teil des Namens oder Codes im Suchfeld ein.","Die Liste filtert in Echtzeit."]},sec2_title:{LATAM:"2) Filtros por genes (máximo 2)",USD:"2) Gene filters (max 2)",PT:"2) Filtros de genes (máximo 2)",FR:"2) Filtres de gènes (max 2)",DE:"2) Genfilter (max. 2)"},sec2_items:{LATAM:["Puedes activar hasta 2 genes a la vez.","El filtro exige que el mutante tenga ambos genes seleccionados."],USD:["You can activate up to 2 genes at once.","The filter requires the mutant to have both selected genes."],PT:["Você pode ativar até 2 genes ao mesmo tempo.","O filtro exige que o mutante tenha ambos os genes selecionados."],FR:["Vous pouvez activer jusqu'à 2 gènes à la fois.","Le filtre exige que le mutant possède les deux gènes sélectionnés."],DE:["Sie können bis zu 2 Gene gleichzeitig aktivieren.","Der Filter erfordert, dass der Mutant beide ausgewählten Gene besitzt."]},sec3_title:{LATAM:"3) Copiar códigos sin errores",USD:"3) Copy codes without errors",PT:"3) Copiar códigos sem erros",FR:"3) Copier les codes sans erreur",DE:"3) Codes fehlerfrei kopieren"},sec3_items:{LATAM:["Pulsa el botón “Copiar código”.","El texto se envía al portapapeles automáticamente."],USD:['Click the "Copy Code" button.',"The text is automatically sent to the clipboard."],PT:['Clique no botão "Copiar código".',"O texto é enviado automaticamente para a área de transferência."],FR:['Cliquez sur le bouton "Copier le code".',"Le texte est automatiquement envoyé dans le presse-papiers."],DE:['Klicken Sie auf die Schaltfläche "Code kopieren".',"Der Text wird automatisch in die Zwischenablage kopiert."]},sec4_title:{LATAM:"4) Qué hay en cada página",USD:"4) What is on each page",PT:"4) O que há em cada página",FR:"4) Contenu de chaque page",DE:"4) Was ist auf jeder Seite"},sec4_items:{LATAM:["Inicio: base de mutantes.","Servicios: packs y pedidos.","Evo: calculadora.","Otros códigos: orbes y extras.","Descargas y tutoriales: recursos y videos."],USD:["Home: mutant database.","Services: packs and orders.","Evo: calculator.","Other codes: orbs and extras.","Downloads and tutorials: resources and videos."],PT:["Início: banco de dados de mutantes.","Serviços: pacotes e pedidos.","Evo: calculadora.","Outros códigos: orbes e extras.","Downloads e tutoriais: recursos e vídeos."],FR:["Accueil: base de données de mutants.","Services: packs et commandes.","Evo: calculateur.","Autres codes: orbes et suppléments.","Téléchargements et tutoriels: ressources et vidéos."],DE:["Startseite: Mutanten-Datenbank.","Dienste: Pakete und Bestellungen.","Evo: Rechner.","Andere Codes: Orbs und Extras.","Downloads und Tutorials: Ressourcen und Videos."]},sec5_title:{LATAM:"5) Rendimiento (menos lag)",USD:"5) Performance (less lag)",PT:"5) Desempenho (menos lag)",FR:"5) Performance (moins de décalage)",DE:"5) Leistung (weniger Lag)"},sec5_items:{LATAM:["La versión React utiliza componentes dinámicos para mayor fluidez.","Si algo se ve raro, recarga la aplicación."],USD:["The React version uses dynamic components for better fluidity.","If something looks weird, reload the application."],PT:["A versão React usa componentes dinâmicos para melhor fluidez.","Se algo parecer estranho, recarregue o aplicativo."],FR:["La version React utilise des composants dynamiques pour une meilleure fluidité.","Si quelque chose semble anormal, rechargez l'application."],DE:["Die React-Version verwendet dynamische Komponenten für mehr Flüssigkeit.","Wenn etwas seltsam aussieht, laden Sie die Anwendung neu."]}};function VM(){const{region:a}=St(),s=l=>{var p,g;return((p=xf[l])==null?void 0:p[a])||((g=xf[l])==null?void 0:g.USD)||""},i=[{title:s("sec1_title"),items:s("sec1_items"),icon:fo},{title:s("sec2_title"),items:s("sec2_items"),icon:fo},{title:s("sec3_title"),items:s("sec3_items"),icon:fo},{title:s("sec4_title"),items:s("sec4_items"),icon:fo},{title:s("sec5_title"),items:s("sec5_items"),icon:fo}];return c.jsxs("div",{className:"flex flex-col gap-6",children:[c.jsxs("section",{className:"hero transition-all duration-700 !p-6 md:!p-12 relative overflow-hidden bg-gradient-to-br from-blue-brand/10 via-blue-brand-2/5 to-transparent border-blue-brand-2/20 shadow-blue-brand-2/5",children:[c.jsx("div",{className:"absolute top-0 right-0 p-8 opacity-20",children:c.jsx(Ac,{size:120,className:"text-blue-brand-2"})}),c.jsxs("div",{className:"eyebrow scale-90 md:scale-100",children:[c.jsx(Ac,{size:16,className:"text-blue-brand-2"}),c.jsx("span",{children:s("quick_manual")})]}),c.jsxs("h1",{className:"text-4xl md:text-6xl font-black mt-2.5 mb-2.5 uppercase tracking-tighter leading-[0.95] text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-brand-2/80 to-blue-brand-2",children:[s("title1")," ",c.jsx("span",{className:"text-blue-brand-2",children:s("title2")})]}),c.jsx("p",{className:"text-muted max-w-2xl mx-auto px-4 opacity-80",children:s("subtitle")})]}),c.jsx(ea,{}),c.jsx("section",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:i.map((l,p)=>{const g=l.icon;return c.jsxs("article",{className:"panel flex flex-col gap-4 border border-white/10 bg-white/[0.01] hover:border-blue-brand-2/30 hover:bg-white/[0.02] shadow-lg transition-all duration-300",children:[c.jsx("div",{className:"w-12 h-12 rounded-2xl flex items-center justify-center transition-colors bg-white/8 text-blue-brand-2",children:c.jsx(g,{size:24})}),c.jsx("h3",{className:"text-xl font-bold tracking-tight m-0 text-white",children:l.title}),c.jsx("div",{className:"flex flex-col gap-2",children:l.items.map((d,h)=>c.jsx("p",{className:"text-muted m-0 text-sm leading-relaxed opacity-90",children:d},h))})]},p)})})]})}const Gf={multimedia:{LATAM:"Contenido multimedia",USD:"Multimedia",PT:"Conteúdo multimídia",FR:"Contenu multimédia",DE:"Multimedia-Inhalte"},tutoriales_title1:{LATAM:"TUTORIALES",USD:"YOUTUBE",PT:"TUTORIAIS",FR:"TUTORIELS",DE:"TUTORIALS"},tutoriales_title2:{LATAM:"YOUTUBE",USD:"GUIDES",PT:"YOUTUBE",FR:"YOUTUBE",DE:"YOUTUBE"},tutoriales_desc:{LATAM:"Aquí subo guías rápidas y tips sobre el catálogo y Mutants: Genetic Gladiators.",USD:"Quick guides and tips about the catalog and Mutants: Genetic Gladiators.",PT:"Aqui eu posto guias rápidos e dicas sobre o catálogo e Mutants: Genetic Gladiators.",FR:"Ici, je publie des guides rapides et des conseils sur le catalogue et Mutants: Genetic Gladiators.",DE:"Hier lade ich Kurzanleitungen und Tipps zum Katalog und Mutants: Genetic Gladiators hoch."},youtube_channel:{LATAM:"Canal de YouTube",USD:"YouTube Channel",PT:"Canal do YouTube",FR:"Chaîne YouTube",DE:"YouTube-Kanal"},youtube_channel_desc:{LATAM:"Si estás en móvil, puede abrir la app de YouTube si la tienes instalada.",USD:"If you are on mobile, it might open the YouTube app directly.",PT:"Se estiver no celular, pode abrir o aplicativo do YouTube diretamente.",FR:"Si vous êtes sur mobile, cela peut ouvrir directement l'application YouTube.",DE:"Wenn Sie mobil unterwegs sind, wird möglicherweise direkt die YouTube-App geöffnet."},go_to:{LATAM:"Ir a @spieler_Lc",USD:"Go to @spieler_Lc",PT:"Ir para @spieler_Lc",FR:"Aller sur @spieler_Lc",DE:"Gehe zu @spieler_Lc"},view_videos:{LATAM:"Ver videos",USD:"View videos",PT:"Ver vídeos",FR:"Voir les vidéos",DE:"Videos anzeigen"},want_to_find:{LATAM:"¿Qué vas a encontrar?",USD:"What will you find?",PT:"O que você vai encontrar?",FR:"Que trouverez-vous ?",DE:"Was werden Sie finden?"},bullet1:{LATAM:"Cómo buscar mutantes y copiar códigos sin errores.",USD:"How to search for mutants and copy codes without errors.",PT:"Como procurar mutantes e copiar códigos sem erros.",FR:"Comment rechercher des mutants et copier des codes sans erreur.",DE:"So suchen Sie nach Mutanten und kopieren Codes fehlerfrei."},bullet2:{LATAM:"Cómo usar filtros por genes.",USD:"How to use gene filters.",PT:"Como usar filtros por genes.",FR:"Comment utiliser les filtres par gènes.",DE:"So verwenden Sie Genfilter."},bullet3:{LATAM:"Consejos para usar emuladores y reducir el lag.",USD:"Tips for using emulators and reducing lag.",PT:"Dicas para usar emuladores e reduzir o lag.",FR:"Conseils pour utiliser des émulateurs et réduire le décalage (lag).",DE:"Tipps zur Verwendung von Emulatoren und zur Reduzierung von Lag."}};function qM(){const{region:a}=St(),s=i=>{var l,p;return((l=Gf[i])==null?void 0:l[a])||((p=Gf[i])==null?void 0:p.USD)||""};return c.jsxs("div",{className:"flex flex-col gap-6",children:[c.jsxs("section",{className:"hero transition-all duration-700 !p-6 md:!p-12 relative overflow-hidden bg-gradient-to-br from-blue-brand/10 via-blue-brand-2/5 to-transparent border-blue-brand-2/20 shadow-blue-brand-2/5",children:[c.jsx("div",{className:"absolute top-0 right-0 p-8 opacity-20",children:c.jsx(sl,{size:120,className:"text-blue-brand-2"})}),c.jsxs("div",{className:"eyebrow scale-90 md:scale-100",children:[c.jsx(sl,{size:16,className:"text-blue-brand-2"}),c.jsx("span",{children:s("multimedia")})]}),c.jsxs("h1",{className:"text-4xl md:text-6xl font-black mt-2.5 mb-2.5 uppercase tracking-tighter leading-[0.95] text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-brand-2/80 to-blue-brand-2",children:[s("tutoriales_title1")," ",c.jsx("span",{className:"text-blue-brand-2",children:s("tutoriales_title2")})]}),c.jsx("p",{className:"text-muted max-w-2xl mx-auto px-4 opacity-80",children:s("tutoriales_desc")})]}),c.jsx(ea,{}),c.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[c.jsxs("section",{className:"panel flex flex-col gap-5 transition-all duration-300 border border-white/10 bg-white/[0.01] hover:border-blue-brand-2/30 hover:bg-white/[0.02]",children:[c.jsx("div",{className:"w-12 h-12 rounded-2xl flex items-center justify-center bg-white/8 text-red-500 shadow-lg shadow-red-500/10",children:c.jsx(sl,{size:24})}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-xl font-bold tracking-tight mb-2 text-white",children:s("youtube_channel")}),c.jsx("p",{className:"text-muted text-sm m-0 leading-relaxed opacity-90",children:s("youtube_channel_desc")})]}),c.jsxs("div",{className:"flex flex-wrap gap-3 mt-auto",children:[c.jsxs("a",{className:"btn btn-primary px-6 transition-all duration-200",target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/@spieler_Lc",children:[c.jsx(Fn,{size:18}),c.jsx("span",{children:s("go_to")})]}),c.jsxs("a",{className:"btn px-6 border-white/10 hover:border-blue-brand-2 hover:bg-blue-brand-2/10 transition-all duration-200",target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/@spieler_Lc/videos",children:[c.jsx(u2,{size:18}),c.jsx("span",{children:s("view_videos")})]})]})]}),c.jsxs("section",{className:"panel flex flex-col gap-5 transition-all duration-300 border border-white/10 bg-white/[0.01] hover:border-blue-brand-2/30 hover:bg-white/[0.02]",children:[c.jsx("div",{className:"w-12 h-12 rounded-2xl flex items-center justify-center bg-white/8 text-yellow-brand shadow-lg shadow-yellow-brand/10",children:c.jsx(A2,{size:24})}),c.jsx("h3",{className:"text-xl font-bold tracking-tight m-0 text-white",children:s("want_to_find")}),c.jsxs("ul",{className:"text-muted text-sm space-y-3 pl-5 list-disc marker:text-blue-brand-2/50",children:[c.jsx("li",{children:s("bullet1")}),c.jsx("li",{children:s("bullet2")}),c.jsx("li",{children:s("bullet3")})]})]})]})]})}const kf={download_center:{LATAM:"Centro de descargas",USD:"Download Center",PT:"Centro de Downloads",FR:"Centre de téléchargement",DE:"Download-Center"},downloads:{LATAM:"DESCARGAS",USD:"DOWNLOADS",PT:"DOWNLOADS",FR:"TÉLÉCHARGEMENTS",DE:"DOWNLOADS"},tools_desc:{LATAM:"Herramientas y recomendaciones según tu caso.",USD:"Tools and recommendations tailored to your setup.",PT:"Ferramentas e recomendações adaptadas ao seu caso.",FR:"Outils et recommandations adaptés à votre cas.",DE:"Werkzeuge und Empfehlungen für Ihren Fall."},essential_resources:{LATAM:"Recursos esenciales",USD:"Essential Resources",PT:"Recursos Essenciais",FR:"Ressources essentielles",DE:"Grundlegende Ressourcen"},download_btn:{LATAM:"Descargar",USD:"Download",PT:"Descarregar",FR:"Télécharger",DE:"Herunterladen"},gg_official:{LATAM:"GameGuardian (fuente oficial)",USD:"GameGuardian (Official Source)",PT:"GameGuardian (Fonte Oficial)",FR:"GameGuardian (Source officielle)",DE:"GameGuardian (Offizielle Quelle)"},gg_desc:{LATAM:"Evita APKs modificados. Descarga siempre desde el foro oficial. Normalmente requiere root real o virtual.",USD:"Avoid modified APKs. Always download from the official forum. Usually requires real or virtual root.",PT:"Evite APKs modificados. Sempre baixe do fórum oficial. Geralmente requer root real ou virtual.",FR:"Évitez les APK modifiés. Téléchargez toujours depuis le forum officiel. Nécessite généralement un accès root réel ou virtuel.",DE:"Vermeiden Sie modifizierte APKs. Laden Sie immer aus dem offiziellen Forum herunter. Erfordert normalerweise echten oder virtuellen Root."},mobile_vms:{LATAM:"Móvil: máquinas virtuales",USD:"Mobile: Virtual Machines",PT:"Celular: Máquinas Virtuais",FR:"Mobile : Machines virtuelles",DE:"Mobil: Virtuelle Maschinen"},pc_emulators:{LATAM:"PC: emuladores Android",USD:"PC: Android Emulators",PT:"PC: Emuladores Android",FR:"PC : Émulateurs Android",DE:"PC: Android-Emulatoren"},official_site:{LATAM:"Sitio oficial",USD:"Official Site",PT:"Site Oficial",FR:"Site officiel",DE:"Offizielle Website"},warn_title:{LATAM:"Usa bajo tu responsabilidad",USD:"Use at your own risk",PT:"Use por sua conta e risco",FR:"Utilisez à vos risques et périls",DE:"Nutzung auf eigene Gefahr"},warn_desc:{LATAM:"Esta conversión conserva la sección informativa del proyecto original.",USD:"This content is for information purposes only within this project.",PT:"Esta conversão mantém a seção informativa do projeto original.",FR:"Cette conversion conserve la section informative du projet d'origine.",DE:"Diese Konvertierung behält den informativen Teil des Originalprojekts bei."},lua_title:{LATAM:"Script LUA",USD:"Script LUA",PT:"Script LUA",FR:"Script LUA",DE:"Script LUA"},lua_desc:{LATAM:"Script definitivo para GameGuardian. Compatible con TodoCS.",USD:"Ultimate GameGuardian script. Compatible with TodoCS.",PT:"Script definitivo para GameGuardian. Compatível com TodoCS.",FR:"Script définitif pour GameGuardian. Compatible avec TodoCS.",DE:"Ultimatives Script für GameGuardian. Kompatibel mit TodoCS."},txt_title:{LATAM:"Lista TXT",USD:"TXT List",PT:"Lista TXT",FR:"Liste TXT",DE:"TXT-Liste"},txt_desc:{LATAM:"Todos los códigos en formato de texto plano.",USD:"All codes in plain text format.",PT:"Todos os códigos em formato de texto simples.",FR:"Tous les codes au format texte brut.",DE:"Alle Codes im Klartextformat."},xlsx_title:{LATAM:"Lista Excel",USD:"Excel List",PT:"Lista Excel",FR:"Liste Excel",DE:"Excel-Liste"},xlsx_desc:{LATAM:"Base de datos completa en .xlsx para filtrado avanzado.",USD:"Complete database in .xlsx for advanced filtering.",PT:"Banco de dados completo em .xlsx para filtragem avançada.",FR:"Base de données complète en .xlsx pour un filtrage avancé.",DE:"Vollständige Datenbank im .xlsx-Format für erweitertes Filtern."},texture_title:{LATAM:"Textura MGG",USD:"MGG Texture",PT:"Textura MGG",FR:"Texture MGG",DE:"MGG-Textur"},texture_desc:{LATAM:"Nuevas texturas para la terraza, arenas e iconos.",USD:"Visual overhaul for hall, arenas, and icons.",PT:"Novas texturas para o terraço, arenas e ícones.",FR:"Nouvelles textures pour le hall, les arènes et les icônes.",DE:"Neue Texturen für die Terrasse, Arenen und Symbole."},vphone_desc:{LATAM:"Mejor opción para root virtual y compatibilidad con GG.",USD:"Best option for virtual root and GG compatibility.",PT:"Melhor opção para root virtual e compatibilidade com GG.",FR:"Option idéale pour le root virtuel et la compatibilité avec GG.",DE:"Beste Option für virtuellen Root und GG-Kompatibilität."},vmos_desc:{LATAM:"Mucha comunidad. El root y la compatibilidad cambian por versión.",USD:"Large community. Root and compatibility vary by version.",PT:"Grande comunidade. O root e a compatibilidade variam de acordo com a versão.",FR:"Grande communauté. Le root et la compatibilité varient selon la version.",DE:"Große Community. Root und Kompatibilität variieren je nach Version."},vmaster_desc:{LATAM:"Muy buena para separar apps, con root limitado.",USD:"Great for separating apps, limited root.",PT:"Muito boa para separar apps, com root limitado.",FR:"Très utile pour isoler les applications, avec root limité.",DE:"Sehr gut zum Trennen von Apps, mit eingeschränktem Root."},ldplayer_desc:{LATAM:"Equilibrio entre rendimiento y estabilidad.",USD:"Balance between performance and stability.",PT:"Equilíbrio entre desempenho e estabilidade.",FR:"Excellent équilibre entre performances et stabilité.",DE:"Gleichgewicht zwischen Leistung und Stabilität."},bluestacks_desc:{LATAM:"Alta compatibilidad para juegos.",USD:"High compatibility for games.",PT:"Alta compatibilidade para jogos.",FR:"Grande compatibilité avec les jeux.",DE:"Hohe Spielekompatibilität."},nox_desc:{LATAM:"Ideal para multi-instancia y control avanzado.",USD:"Ideal for multi-instance and advanced control.",PT:"Ideal para multi-instâncias e controle avançado.",FR:"Idéal pour le multi-instance et le contrôle avancé.",DE:"Ideal für Multi-Instanz und erweiterte Steuerung."}};function wM(){const{region:a}=St(),s=g=>{var d,h;return((d=kf[g])==null?void 0:d[a])||((h=kf[g])==null?void 0:h.USD)||""},i=[{title:s("lua_title"),desc:s("lua_desc"),iconName:p2,href:"https://www.mediafire.com/file/llyxjrgzkrvmu61/DEFINITIVA-CS-v2.lua/file",download:"SCIRPT-NUEVA.V2.lua"},{title:s("txt_title"),desc:s("txt_desc"),iconName:G2,href:"https://www.mediafire.com/file/2fg3dtp4nhay3jw/lista-codigos.txt/file",download:"lista-codigos.txt"},{title:s("xlsx_title"),desc:s("xlsx_desc"),iconName:K2,href:"https://www.mediafire.com/file/n9l7kylzrpgiplq/lista-codigos.xlsx/file",download:"lista-codigos.xlsx"},{title:s("texture_title"),desc:s("texture_desc"),iconName:If,href:"https://www.mediafire.com/file/gllbbith3a6i56a/Mutants_Genetic_Gladiators_Mod.apk/file",download:"Mutants_Genetic_Gladiators_Mod.apk"}],l=[["VPhoneOS",s("vphone_desc"),"https://vphoneos.com/"],["VMOS",s("vmos_desc"),""],["Virtual Master",s("vmaster_desc"),""]],p=[["LDPlayer",s("ldplayer_desc"),"https://www.ldplayer.net/"],["BlueStacks",s("bluestacks_desc"),""],["NoxPlayer",s("nox_desc"),""]];return c.jsxs("div",{className:"flex flex-col gap-6 pb-20",children:[c.jsxs("section",{className:"relative hero !p-10 md:!p-24 overflow-hidden rounded-[3rem]",children:[c.jsx("div",{className:"absolute inset-0 opacity-10 bg-grid-slate-900/[0.1] pointer-events-none"}),c.jsx("div",{className:"absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-brand/20 to-transparent -rotate-12 transform translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none"}),c.jsxs("div",{className:"relative z-10",children:[c.jsxs("div",{className:"eyebrow bg-white/5 border-white/10 px-4 py-1 rounded-full inline-flex items-center gap-2 mb-6 backdrop-blur-md",children:[c.jsx(Mf,{size:14,className:"text-blue-brand-2"}),c.jsx("span",{className:"text-[10px] font-black uppercase tracking-[0.2em]",children:s("download_center")})]}),c.jsxs("h1",{className:"text-4xl md:text-8xl lg:text-9xl font-black mt-4 mb-6 uppercase tracking-tighter leading-[0.8] md:leading-[0.85] text-white",children:[s("downloads")," ",c.jsx("br",{}),c.jsxs("span",{className:"text-blue-brand relative",children:["MÓVIL / PC",c.jsx("span",{className:"absolute -bottom-2 left-0 w-full h-1 bg-white/10 rounded-full"})]})]}),c.jsx("p",{className:"text-slate-400 text-sm md:text-lg max-w-2xl mx-auto md:mx-0 opacity-90 leading-relaxed font-medium",children:s("tools_desc")})]})]}),c.jsx(ea,{}),c.jsxs("section",{className:"flex flex-col gap-4",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("div",{className:"h-px flex-1 bg-white/5"}),c.jsx("h2",{className:"text-lg font-bold uppercase tracking-tight m-0 text-white",children:s("essential_resources")}),c.jsx("div",{className:"h-px flex-1 bg-white/5"})]}),c.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-4 gap-6",children:i.map((g,d)=>{const h=g.iconName,f=g.title==="Textura MGG"||g.title==="MGG Texture";return c.jsxs("article",{className:`panel flex flex-col gap-4 relative transition-all duration-300 border ${f?"glow-card border-blue-brand/40 bg-blue-brand/5":"hover:border-white/10"}`,children:[f&&c.jsx("span",{className:"badge-new uppercase",children:"New"}),c.jsx("div",{className:`w-12 h-12 rounded-2xl flex items-center justify-center ${f?"bg-blue-brand text-white":"bg-white/8 text-blue-brand-2"}`,children:c.jsx(h,{size:24})}),c.jsxs("div",{children:[c.jsx("h3",{className:`text-xl font-bold tracking-tight mb-2 ${f?"text-blue-brand-2":""}`,children:g.title}),c.jsx("p",{className:"text-muted text-sm m-0 min-h-[40px] leading-relaxed",children:g.desc})]}),c.jsxs("a",{className:`btn w-full relative overflow-hidden group transition-all ${f?"bg-white text-black hover:bg-blue-brand-2 hover:text-white border-transparent":"btn-primary"}`,href:g.href,target:"_blank",rel:"noopener noreferrer",children:[c.jsx("span",{className:"font-black uppercase",children:s("download_btn")}),c.jsx("span",{className:"download-shine","aria-hidden":"true"})]})]},d)})})]}),c.jsxs("section",{className:"panel flex gap-4 items-center transition-all border border-white/10 bg-white/[0.02]",children:[c.jsx("div",{className:"w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-white/8 text-green-brand",children:c.jsx(U2,{size:24})}),c.jsxs("div",{className:"flex-1",children:[c.jsx("h3",{className:"text-lg font-bold tracking-tight mb-1 text-white font-black",children:s("gg_official")}),c.jsx("p",{className:"text-muted text-sm m-0",children:s("gg_desc")})]}),c.jsxs("div",{className:"hidden lg:flex gap-2",children:[c.jsx("span",{className:"px-3 py-1.5 rounded-full text-[12px] font-bold bg-white/8 text-blue-100",children:"Root real"}),c.jsx("span",{className:"px-3 py-1.5 rounded-full text-[12px] font-bold bg-white/8 text-blue-100",children:"Root virtual"})]})]}),c.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[c.jsxs("section",{className:"panel flex flex-col gap-5 border border-white/10 bg-gradient-to-br from-white/[0.01] to-transparent",children:[c.jsx("h3",{className:"text-xl font-bold tracking-tight m-0 text-white uppercase tracking-tighter",children:s("mobile_vms")}),c.jsx("div",{className:"grid gap-4",children:l.map(([g,d,h],f)=>c.jsxs("div",{className:"p-4 rounded-xl border border-white/5 bg-white/2 hover:border-white/10 transition-colors",children:[c.jsx("h4",{className:"font-bold mb-1 text-white",children:g}),c.jsx("p",{className:"text-muted text-sm mb-3 leading-relaxed",children:d}),h?c.jsxs("a",{href:h,target:"_blank",rel:"noopener noreferrer",className:"btn btn-sm text-xs py-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black",children:[c.jsx(Fn,{size:14}),c.jsx("span",{children:s("official_site")})]}):c.jsxs("button",{disabled:!0,className:"btn btn-sm text-xs py-2 opacity-50 cursor-not-allowed",children:[c.jsx(Fn,{size:14}),c.jsx("span",{children:s("official_site")})]})]},f))})]}),c.jsxs("section",{className:"panel flex flex-col gap-5 border border-white/10 bg-gradient-to-br from-white/[0.01] to-transparent",children:[c.jsx("h3",{className:"text-xl font-bold tracking-tight m-0 text-white uppercase tracking-tighter",children:s("pc_emulators")}),c.jsx("div",{className:"grid gap-4",children:p.map(([g,d,h],f)=>c.jsxs("div",{className:"p-4 rounded-xl border border-white/5 bg-white/2 hover:border-white/10 transition-colors",children:[c.jsx("h4",{className:"font-bold mb-1 text-white",children:g}),c.jsx("p",{className:"text-muted text-sm mb-3 leading-relaxed",children:d}),h?c.jsxs("a",{href:h,target:"_blank",rel:"noopener noreferrer",className:"btn btn-sm text-xs py-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black",children:[c.jsx(Fn,{size:14}),c.jsx("span",{children:s("official_site")})]}):c.jsxs("button",{disabled:!0,className:"btn btn-sm text-xs py-2 opacity-50 cursor-not-allowed",children:[c.jsx(Fn,{size:14}),c.jsx("span",{children:s("official_site")})]})]},f))})]})]}),c.jsxs("section",{className:"panel flex gap-4 items-start border-l-4 bg-yellow-brand/5 border-yellow-brand",children:[c.jsx(F2,{size:24,className:"text-yellow-brand shrink-0 mt-1"}),c.jsxs("div",{children:[c.jsx("strong",{className:"block text-white mb-1",children:s("warn_title")}),c.jsx("p",{className:"text-muted text-sm m-0",children:s("warn_desc")})]})]})]})}const yf={legal_info:{LATAM:"Información Legal",USD:"Legal Information",PT:"Informação Legal",FR:"Informations légales",DE:"Rechtliche Informationen"},terms_conditions1:{LATAM:"TÉRMINOS Y ",USD:"TERMS & ",PT:"TERMOS E ",FR:"CONDITIONS & ",DE:"ALLGEMEINE "},terms_conditions2:{LATAM:"CONDICIONES",USD:"CONDITIONS",PT:"CONDIÇÕES",FR:"TERMES",DE:"GESCHÄFTSBEDINGUNGEN"},read_carefully:{LATAM:"Por favor lee atentamente las normas y condiciones de uso de Mutodex MGG.",USD:"Please read the rules and conditions of use for Mutodex MGG carefully.",PT:"Por favor, leia atentamente as regras e condições de uso do Mutodex MGG.",FR:"Veuillez lire attentivement les règles et conditions d'utilisation de Mutodex MGG.",DE:"Bitte lesen Sie die Regeln und Nutzungsbedingungen für Mutodex MGG sorgfältig durch."},rights_reserved:{LATAM:"Derechos Reservados",USD:"Rights Reserved",PT:"Direitos Reservados",FR:"Droits réserves",DE:"Rechte vorbehalten"},rights_desc:{LATAM:"Todos los derechos de diseño, desarrollo y marca personal relacionada con Mutodex MGG están reservados a Smith Luque. Cualquier reproducción parcial o total del contenido multimedia o código fuente sin autorización previa está prohibida.",USD:"All rights of design, development, and personal brand related to Mutodex MGG are reserved by Smith Luque. Any partial or total reproduction of multimedia content or source code without prior authorization is prohibited.",PT:"Todos os direitos de design, desenvolvimento e marca pessoal relacionados ao Mutodex MGG são reservados por Smith Luque. Qualquer reprodução parcial ou total do conteúdo multimídia ou código-fonte sem autorização prévia é proibida.",FR:"Tous les droits de conception, de développement et de marque personnelle liés à Mutodex MGG sont réservés par Smith Luque. Toute reproduction partielle ou totale du contenu multimédia ou du code source sans autorisation préalable est interdite.",DE:"Alle Design-, Entwicklungs- und Markenrechte im Zusammenhang mit Mutodex MGG sind Smith Luque vorbehalten. Jegliche teilweise oder vollständige Vervielfältigung von Multimedia-Inhalten oder Quellcode ohne vorherige Genehmigung ist untersagt."},risks_liability:{LATAM:"Riesgos y Responsabilidad",USD:"Risks & Liability",PT:"Riscos e Responsabilidade",FR:"Risques et responsabilité",DE:"Risiken & Haftung"},risks_desc:{LATAM:"El uso de scripts, hacks o herramientas de terceros (como Game Guardian) en Mutants Genetic Gladiators conlleva un RIESGO CRÍTICO DE BANEO de tu cuenta por parte de los desarrolladores oficiales del juego (Kobojo/Syntamon).",USD:"The use of scripts, hacks, or third-party tools (such as Game Guardian) in Mutants Genetic Gladiators carries a CRITICAL RISK OF BANNING of your account by the official game developers (Kobojo/Syntamon).",PT:"O uso de scripts, hacks ou ferramentas de terceiros (como Game Guardian) em Mutants Genetic Gladiators acarreta um RISCO CRÍTICO DE BANIMENTO de sua conta pelos desenvolvedores oficiais do jogo (Kobojo/Syntamon).",FR:"L'utilisation de scripts, de hacks ou d'outils tiers (tels que Game Guardian) dans Mutants Genetic Gladiators comporte un RISQUE CRITIQUE DE BANNISSEMENT de votre compte par les développeurs officiels du jeu (Kobojo/Syntamon).",DE:"Die Verwendung von Skripten, Hacks oder Tools von Drittanbietern (wie Game Guardian) in Mutants Genetic Gladiators birgt ein KRITISCHES BAN-RISIKO Ihres Kontos durch die offiziellen Spielentwickler (Kobojo/Syntamon)."},risk_bullet1:{LATAM:"Smith Luque no se hace responsable por pérdidas de cuentas.",USD:"Smith Luque is not responsible for any banned or lost accounts.",PT:"Smith Luque não é responsável por contas perdidas ou banidas.",FR:"Smith Luque n'est pas responsable des comptes bannis ou perdus.",DE:"Smith Luque ist nicht verantwortlich für gesperrte oder verlorene Konten."},risk_bullet2:{LATAM:"El uso del contenido de esta web es bajo tu propio riesgo.",USD:"Sourcing and testing scripts or utilizing codes is fully at your own risk.",PT:"O uso do conteúdo deste site é de sua total conta e risco.",FR:"L'utilisation du contenu de ce site se fait entièrement à vos risques et périls.",DE:"Die Verwendung der Inhalte dieser Website erfolgt auf eigene Gefahr."},risk_bullet3:{LATAM:"Recomendamos siempre probar en cuentas secundarias.",USD:"We highly recommend testing any external tools on secondary accounts first.",PT:"Recomendamos sempre testar ferramentas externas em contas secundárias primeiro.",FR:"Nous vous recommandons fortement de tester d'abord les outils externes sur des comptes secondaires.",DE:"Wir empfehlen dringend, externe Tools zuerst auf Zweitkonten zu testen."},purpose_title:{LATAM:"Propósito de la Web",USD:"Purpose of the Website",PT:"Propósito do Website",FR:"But du site internet",DE:"Zweck der Website"},purpose_desc:{LATAM:"Esta plataforma ha sido creada exclusivamente con fines de aprendizaje, investigación y entretenimiento. Nuestra misión es proporcionar una base de datos organizada para la comunidad de MGG y facilitar el acceso a la información técnica del juego.",USD:"This platform has been created exclusively for learning, research, and entertainment purposes. Our mission is to provide an organized, fast database for the MGG community and simplify secure access to the technical parameters of the game.",PT:"Esta plataforma foi criada exclusivamente para fins de aprendizagem, pesquisa e entretenimento. Nossa missão é fornecer um banco de dados organizado para a comunidade MGG e facilitar o acesso seguro aos parâmetros técnicos do jogo.",FR:"Cette plateforme a été créée exclusivement à des fins d'apprentissage, de recherche et de divertissement. Notre mission est de fournir une base de données organisée et rapide pour la communauté MGG et de simplifier l'accès sécurisé aux paramètres techniques du jeu.",DE:"Diese Plattform wurde ausschließlich zu Lern-, Forschungs- und Unterhaltungszwecken erstellt. Unsere Mission ist es, eine organisierte, schnelle Datenbank für die MGG-Community bereitzustellen und den sicheren Zugriff auf die technischen Parameter des Spiels zu vereinfachen."},benefits_title:{LATAM:"Beneficios y Utilidades",USD:"Utility & Benefits",PT:"Utilidade e Benefícios",FR:"Avantages et utilités",DE:"Nutzen & Vorteile"},benefit_bullet1:{LATAM:"Acceso instantáneo a IDs de mutantes actualizados.",USD:"Instant, secure access to updated mutant identifiers.",PT:"Acesso instantâneo e seguro aos identificadores de mutantes atualizados.",FR:"Accès instantané et sécurisé aux identifiants mis à jour des mutants.",DE:"Sofortiger, sicherer Zugriff auf aktualisierte Mutantenkennungen."},benefit_bullet2:{LATAM:"Cálculo preciso de recursos para la calculadora EVO.",USD:"Precise calculation of upgrade resources in EVO calculator.",PT:"Cálculo preciso de recursos na calculadora de EVO.",FR:"Calcul précis des ressources d'amélioration dans le calculateur EVO.",DE:"Präzise Berechnung von Upgrade-Ressourcen im EVO-Rechner."},benefit_bullet3:{LATAM:"Sincronización con el blog oficial de Mutodex.",USD:"Real-time linkups with the official Mutodex blog system.",PT:"Links em tempo real com o sistema de blog oficial do Mutodex.",FR:"Liaisons en temps réel avec le système de blog officiel de Mutodex.",DE:"Echtzeit-Verknüpfungen mit dem offiziellen Mutodex-Blog-System."},benefit_bullet4:{LATAM:"Servicios de ayuda y soporte comunitario.",USD:"Group discussion links and active community assistance.",PT:"Links de discussões de grupo e assistência ativa da comunidade.",FR:"Liens de discussion de groupe et assistance communautaire active.",DE:"Gruppen-Diskussionslinks und aktive Unterstützung der Community."},inquiries:{LATAM:"Contacto",USD:"Inquiries",PT:"Dúvidas",FR:"Demandes",DE:"Anfragen"},inquiries_desc:{LATAM:"Si tienes dudas sobre estos términos, puedes contactarme vía WhatsApp.",USD:"If you have any questions or concern regarding these policies, feel free to send a message on WhatsApp.",PT:"Se você tiver alguma dúvida ou preocupação sobre estas políticas, sinta-se à vontade para enviar uma mensagem no WhatsApp.",FR:"Si vous avez des questions ou des préoccupations concernant ces politiques, n'hésitez pas à envoyer un message sur WhatsApp.",DE:"Wenn Sie Fragen oder Bedenken bezüglich dieser Richtlinien haben, können Sie uns gerne eine Nachricht über WhatsApp senden."},get_support:{LATAM:"Consultar ayuda",USD:"Get Support",PT:"Obter Suporte",FR:"Obtenir de l'aide",DE:"Support anfordern"},last_updated:{LATAM:"Última actualización: 12 de Mayo, 2026. Al navegar por este sitio, aceptas estos términos automáticamente.",USD:"Last updated: May 12, 2026. By navigating this site, you automatically accept these terms.",PT:"Última atualização: 12 de maio de 2026. Ao navegar neste site, você aceita automaticamente estes termos.",FR:"Dernière mise à jour : 12 mai 2026. En naviguant sur ce site, vous acceptez automatiquement ces conditions.",DE:"Zuletzt aktualisiert: 12. Mai 2026. Durch das Navigieren auf dieser Website akzeptieren Sie diese Bedingungen automatisch."}};function EM(){const{region:a}=St(),s=i=>{var l,p;return((l=yf[i])==null?void 0:l[a])||((p=yf[i])==null?void 0:p.USD)||""};return c.jsxs("div",{className:"flex flex-col gap-6",children:[c.jsxs("section",{className:"hero !p-6 md:!p-12",children:[c.jsxs("div",{className:"eyebrow scale-90 md:scale-100",children:[c.jsx(C2,{size:14}),c.jsx("span",{children:s("legal_info")})]}),c.jsxs("h1",{className:"text-3xl md:text-5xl font-black mt-4 mb-4 uppercase tracking-tighter leading-[0.9] md:leading-[1]",children:[s("terms_conditions1"),c.jsx("span",{className:"text-blue-brand-2",children:s("terms_conditions2")})]}),c.jsx("p",{className:"text-muted text-sm md:text-base max-w-2xl mx-auto px-4 opacity-80",children:s("read_carefully")})]}),c.jsx(ea,{}),c.jsxs("div",{className:"grid md:grid-cols-[1fr_0.4fr] gap-6 items-start",children:[c.jsxs("div",{className:"flex flex-col gap-6",children:[c.jsxs("section",{className:"panel flex flex-col gap-5 p-6 md:p-8",children:[c.jsxs("div",{className:"flex items-center gap-3 border-b border-line pb-4 mb-2",children:[c.jsx(gl,{className:"text-blue-brand-2",size:24}),c.jsx("h2",{className:"m-0 text-xl font-bold uppercase tracking-tight",children:s("rights_reserved")})]}),c.jsx("p",{className:"text-slate-300 leading-relaxed",children:s("rights_desc")})]}),c.jsxs("section",{className:"panel flex flex-col gap-5 p-6 md:p-8 border-l-4 border-red-brand bg-red-brand/5",children:[c.jsxs("div",{className:"flex items-center gap-3 border-b border-white/5 pb-4 mb-2",children:[c.jsx(z2,{className:"text-red-brand",size:24}),c.jsx("h2",{className:"m-0 text-xl font-bold uppercase tracking-tight text-white",children:s("risks_liability")})]}),c.jsxs("div",{className:"space-y-4",children:[c.jsx("p",{className:"text-slate-300 leading-relaxed m-0",children:s("risks_desc")}),c.jsxs("ul",{className:"grid gap-2 text-sm text-slate-400 list-disc pl-5",children:[c.jsx("li",{children:s("risk_bullet1")}),c.jsx("li",{children:s("risk_bullet2")}),c.jsx("li",{children:s("risk_bullet3")})]})]})]}),c.jsxs("section",{className:"panel flex flex-col gap-5 p-6 md:p-8",children:[c.jsxs("div",{className:"flex items-center gap-3 border-b border-line pb-4 mb-2",children:[c.jsx(Tf,{className:"text-blue-brand-2",size:24}),c.jsx("h2",{className:"m-0 text-xl font-bold uppercase tracking-tight",children:s("purpose_title")})]}),c.jsxs("div",{className:"space-y-4",children:[c.jsx("p",{className:"text-slate-300 leading-relaxed",children:s("purpose_desc")}),c.jsxs("div",{className:"bg-white/5 p-4 rounded-xl",children:[c.jsx("h3",{className:"text-sm font-bold text-blue-brand-2 mb-2 uppercase",children:s("benefits_title")}),c.jsxs("ul",{className:"grid gap-2 text-xs md:text-sm text-slate-400",children:[c.jsxs("li",{className:"flex gap-2",children:[c.jsx("span",{children:"•"})," ",c.jsx("span",{children:s("benefit_bullet1")})]}),c.jsxs("li",{className:"flex gap-2",children:[c.jsx("span",{children:"•"})," ",c.jsx("span",{children:s("benefit_bullet2")})]}),c.jsxs("li",{className:"flex gap-2",children:[c.jsx("span",{children:"•"})," ",c.jsx("span",{children:s("benefit_bullet3")})]}),c.jsxs("li",{className:"flex gap-2",children:[c.jsx("span",{children:"•"})," ",c.jsx("span",{children:s("benefit_bullet4")})]})]})]})]})]})]}),c.jsxs("aside",{className:"flex flex-col gap-4",children:[c.jsxs("div",{className:"panel p-5 bg-blue-brand/5 border-blue-brand/20",children:[c.jsx("h3",{className:"text-xs font-bold text-blue-brand-2 uppercase mb-3",children:s("inquiries")}),c.jsx("p",{className:"text-[11px] text-muted leading-relaxed mb-4",children:s("inquiries_desc")}),c.jsx("a",{href:"https://wa.me/51906328464",target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary w-full text-xs py-2.5",children:s("get_support")})]}),c.jsx("p",{className:"text-[10px] text-center text-muted px-2",children:s("last_updated")})]})]})]})}function NM(){const[a,s]=Y.useState(window.location.hash.replace(/^#/,"")||"/"),[i,l]=Y.useState(navigator.onLine);Y.useEffect(()=>{const d=()=>{s(window.location.hash.replace(/^#/,"")||"/")},h=()=>l(!0),f=()=>l(!1);return window.addEventListener("hashchange",d),window.addEventListener("online",h),window.addEventListener("offline",f),()=>{window.removeEventListener("hashchange",d),window.removeEventListener("online",h),window.removeEventListener("offline",f)}},[]);const p=d=>{window.location.hash=d},g=()=>{switch(a){case"/":return c.jsx(hf,{});case"/novedades":return c.jsx(vM,{});case"/servicios":return c.jsx(MM,{});case"/evo":return c.jsx(IM,{});case"/otros":return c.jsx(SM,{});case"/guia":return c.jsx(VM,{});case"/tutoriales":return c.jsx(qM,{});case"/descargas":return c.jsx(wM,{});case"/terminos":return c.jsx(EM,{});default:return c.jsx(hf,{})}};return c.jsx(oM,{currentPath:a,onNavigate:p,isOnline:i,children:g()})}Zx.createRoot(document.getElementById("root")).render(c.jsx(Y.StrictMode,{children:c.jsx(sM,{children:c.jsx(NM,{})})}));
