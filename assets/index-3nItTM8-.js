(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))l(p);new MutationObserver(p=>{for(const m of p)if(m.type==="childList")for(const d of m.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function i(p){const m={};return p.integrity&&(m.integrity=p.integrity),p.referrerPolicy&&(m.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?m.credentials="include":p.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function l(p){if(p.ep)return;p.ep=!0;const m=i(p);fetch(p.href,m)}})();var Jc={exports:{}},bo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nh;function Ux(){if(Nh)return bo;Nh=1;var s=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function i(l,p,m){var d=null;if(m!==void 0&&(d=""+m),p.key!==void 0&&(d=""+p.key),"key"in p){m={};for(var h in p)h!=="key"&&(m[h]=p[h])}else m=p;return p=m.ref,{$$typeof:s,type:l,key:d,ref:p!==void 0?p:null,props:m}}return bo.Fragment=n,bo.jsx=i,bo.jsxs=i,bo}var qh;function Px(){return qh||(qh=1,Jc.exports=Ux()),Jc.exports}var u=Px(),$c={exports:{}},lt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ch;function Yx(){if(Ch)return lt;Ch=1;var s=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),k=Symbol.for("react.activity"),y=Symbol.iterator;function G(j){return j===null||typeof j!="object"?null:(j=y&&j[y]||j["@@iterator"],typeof j=="function"?j:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,A={};function q(j,P,J){this.props=j,this.context=P,this.refs=A,this.updater=J||M}q.prototype.isReactComponent={},q.prototype.setState=function(j,P){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,P,"setState")},q.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function K(){}K.prototype=q.prototype;function O(j,P,J){this.props=j,this.context=P,this.refs=A,this.updater=J||M}var N=O.prototype=new K;N.constructor=O,I(N,q.prototype),N.isPureReactComponent=!0;var R=Array.isArray;function B(){}var D={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function F(j,P,J){var et=J.ref;return{$$typeof:s,type:j,key:P,ref:et!==void 0?et:null,props:J}}function Z(j,P){return F(j.type,P,j.props)}function it(j){return typeof j=="object"&&j!==null&&j.$$typeof===s}function nt(j){var P={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(J){return P[J]})}var Ut=/\/+/g;function Ct(j,P){return typeof j=="object"&&j!==null&&j.key!=null?nt(""+j.key):P.toString(36)}function zt(j){switch(j.status){case"fulfilled":return j.value;case"rejected":throw j.reason;default:switch(typeof j.status=="string"?j.then(B,B):(j.status="pending",j.then(function(P){j.status==="pending"&&(j.status="fulfilled",j.value=P)},function(P){j.status==="pending"&&(j.status="rejected",j.reason=P)})),j.status){case"fulfilled":return j.value;case"rejected":throw j.reason}}throw j}function z(j,P,J,et,rt){var dt=typeof j;(dt==="undefined"||dt==="boolean")&&(j=null);var vt=!1;if(j===null)vt=!0;else switch(dt){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(j.$$typeof){case s:case n:vt=!0;break;case _:return vt=j._init,z(vt(j._payload),P,J,et,rt)}}if(vt)return rt=rt(j),vt=et===""?"."+Ct(j,0):et,R(rt)?(J="",vt!=null&&(J=vt.replace(Ut,"$&/")+"/"),z(rt,P,J,"",function(Gn){return Gn})):rt!=null&&(it(rt)&&(rt=Z(rt,J+(rt.key==null||j&&j.key===rt.key?"":(""+rt.key).replace(Ut,"$&/")+"/")+vt)),P.push(rt)),1;vt=0;var le=et===""?".":et+":";if(R(j))for(var Ht=0;Ht<j.length;Ht++)et=j[Ht],dt=le+Ct(et,Ht),vt+=z(et,P,J,dt,rt);else if(Ht=G(j),typeof Ht=="function")for(j=Ht.call(j),Ht=0;!(et=j.next()).done;)et=et.value,dt=le+Ct(et,Ht++),vt+=z(et,P,J,dt,rt);else if(dt==="object"){if(typeof j.then=="function")return z(zt(j),P,J,et,rt);throw P=String(j),Error("Objects are not valid as a React child (found: "+(P==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.")}return vt}function Q(j,P,J){if(j==null)return j;var et=[],rt=0;return z(j,et,"","",function(dt){return P.call(J,dt,rt++)}),et}function $(j){if(j._status===-1){var P=j._result;P=P(),P.then(function(J){(j._status===0||j._status===-1)&&(j._status=1,j._result=J)},function(J){(j._status===0||j._status===-1)&&(j._status=2,j._result=J)}),j._status===-1&&(j._status=0,j._result=P)}if(j._status===1)return j._result.default;throw j._result}var ut=typeof reportError=="function"?reportError:function(j){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var P=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof j=="object"&&j!==null&&typeof j.message=="string"?String(j.message):String(j),error:j});if(!window.dispatchEvent(P))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",j);return}console.error(j)},_t={map:Q,forEach:function(j,P,J){Q(j,function(){P.apply(this,arguments)},J)},count:function(j){var P=0;return Q(j,function(){P++}),P},toArray:function(j){return Q(j,function(P){return P})||[]},only:function(j){if(!it(j))throw Error("React.Children.only expected to receive a single React element child.");return j}};return lt.Activity=k,lt.Children=_t,lt.Component=q,lt.Fragment=i,lt.Profiler=p,lt.PureComponent=O,lt.StrictMode=l,lt.Suspense=f,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,lt.__COMPILER_RUNTIME={__proto__:null,c:function(j){return D.H.useMemoCache(j)}},lt.cache=function(j){return function(){return j.apply(null,arguments)}},lt.cacheSignal=function(){return null},lt.cloneElement=function(j,P,J){if(j==null)throw Error("The argument must be a React element, but you passed "+j+".");var et=I({},j.props),rt=j.key;if(P!=null)for(dt in P.key!==void 0&&(rt=""+P.key),P)!X.call(P,dt)||dt==="key"||dt==="__self"||dt==="__source"||dt==="ref"&&P.ref===void 0||(et[dt]=P[dt]);var dt=arguments.length-2;if(dt===1)et.children=J;else if(1<dt){for(var vt=Array(dt),le=0;le<dt;le++)vt[le]=arguments[le+2];et.children=vt}return F(j.type,rt,et)},lt.createContext=function(j){return j={$$typeof:d,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null},j.Provider=j,j.Consumer={$$typeof:m,_context:j},j},lt.createElement=function(j,P,J){var et,rt={},dt=null;if(P!=null)for(et in P.key!==void 0&&(dt=""+P.key),P)X.call(P,et)&&et!=="key"&&et!=="__self"&&et!=="__source"&&(rt[et]=P[et]);var vt=arguments.length-2;if(vt===1)rt.children=J;else if(1<vt){for(var le=Array(vt),Ht=0;Ht<vt;Ht++)le[Ht]=arguments[Ht+2];rt.children=le}if(j&&j.defaultProps)for(et in vt=j.defaultProps,vt)rt[et]===void 0&&(rt[et]=vt[et]);return F(j,dt,rt)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(j){return{$$typeof:h,render:j}},lt.isValidElement=it,lt.lazy=function(j){return{$$typeof:_,_payload:{_status:-1,_result:j},_init:$}},lt.memo=function(j,P){return{$$typeof:b,type:j,compare:P===void 0?null:P}},lt.startTransition=function(j){var P=D.T,J={};D.T=J;try{var et=j(),rt=D.S;rt!==null&&rt(J,et),typeof et=="object"&&et!==null&&typeof et.then=="function"&&et.then(B,ut)}catch(dt){ut(dt)}finally{P!==null&&J.types!==null&&(P.types=J.types),D.T=P}},lt.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},lt.use=function(j){return D.H.use(j)},lt.useActionState=function(j,P,J){return D.H.useActionState(j,P,J)},lt.useCallback=function(j,P){return D.H.useCallback(j,P)},lt.useContext=function(j){return D.H.useContext(j)},lt.useDebugValue=function(){},lt.useDeferredValue=function(j,P){return D.H.useDeferredValue(j,P)},lt.useEffect=function(j,P){return D.H.useEffect(j,P)},lt.useEffectEvent=function(j){return D.H.useEffectEvent(j)},lt.useId=function(){return D.H.useId()},lt.useImperativeHandle=function(j,P,J){return D.H.useImperativeHandle(j,P,J)},lt.useInsertionEffect=function(j,P){return D.H.useInsertionEffect(j,P)},lt.useLayoutEffect=function(j,P){return D.H.useLayoutEffect(j,P)},lt.useMemo=function(j,P){return D.H.useMemo(j,P)},lt.useOptimistic=function(j,P){return D.H.useOptimistic(j,P)},lt.useReducer=function(j,P,J){return D.H.useReducer(j,P,J)},lt.useRef=function(j){return D.H.useRef(j)},lt.useState=function(j){return D.H.useState(j)},lt.useSyncExternalStore=function(j,P,J){return D.H.useSyncExternalStore(j,P,J)},lt.useTransition=function(){return D.H.useTransition()},lt.version="19.2.6",lt}var Dh;function ap(){return Dh||(Dh=1,$c.exports=Yx()),$c.exports}var Y=ap(),Wc={exports:{}},fo={},tu={exports:{}},eu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oh;function Xx(){return Oh||(Oh=1,(function(s){function n(z,Q){var $=z.length;z.push(Q);t:for(;0<$;){var ut=$-1>>>1,_t=z[ut];if(0<p(_t,Q))z[ut]=Q,z[$]=_t,$=ut;else break t}}function i(z){return z.length===0?null:z[0]}function l(z){if(z.length===0)return null;var Q=z[0],$=z.pop();if($!==Q){z[0]=$;t:for(var ut=0,_t=z.length,j=_t>>>1;ut<j;){var P=2*(ut+1)-1,J=z[P],et=P+1,rt=z[et];if(0>p(J,$))et<_t&&0>p(rt,J)?(z[ut]=rt,z[et]=$,ut=et):(z[ut]=J,z[P]=$,ut=P);else if(et<_t&&0>p(rt,$))z[ut]=rt,z[et]=$,ut=et;else break t}}return Q}function p(z,Q){var $=z.sortIndex-Q.sortIndex;return $!==0?$:z.id-Q.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;s.unstable_now=function(){return m.now()}}else{var d=Date,h=d.now();s.unstable_now=function(){return d.now()-h}}var f=[],b=[],_=1,k=null,y=3,G=!1,M=!1,I=!1,A=!1,q=typeof setTimeout=="function"?setTimeout:null,K=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function N(z){for(var Q=i(b);Q!==null;){if(Q.callback===null)l(b);else if(Q.startTime<=z)l(b),Q.sortIndex=Q.expirationTime,n(f,Q);else break;Q=i(b)}}function R(z){if(I=!1,N(z),!M)if(i(f)!==null)M=!0,B||(B=!0,nt());else{var Q=i(b);Q!==null&&zt(R,Q.startTime-z)}}var B=!1,D=-1,X=5,F=-1;function Z(){return A?!0:!(s.unstable_now()-F<X)}function it(){if(A=!1,B){var z=s.unstable_now();F=z;var Q=!0;try{t:{M=!1,I&&(I=!1,K(D),D=-1),G=!0;var $=y;try{e:{for(N(z),k=i(f);k!==null&&!(k.expirationTime>z&&Z());){var ut=k.callback;if(typeof ut=="function"){k.callback=null,y=k.priorityLevel;var _t=ut(k.expirationTime<=z);if(z=s.unstable_now(),typeof _t=="function"){k.callback=_t,N(z),Q=!0;break e}k===i(f)&&l(f),N(z)}else l(f);k=i(f)}if(k!==null)Q=!0;else{var j=i(b);j!==null&&zt(R,j.startTime-z),Q=!1}}break t}finally{k=null,y=$,G=!1}Q=void 0}}finally{Q?nt():B=!1}}}var nt;if(typeof O=="function")nt=function(){O(it)};else if(typeof MessageChannel<"u"){var Ut=new MessageChannel,Ct=Ut.port2;Ut.port1.onmessage=it,nt=function(){Ct.postMessage(null)}}else nt=function(){q(it,0)};function zt(z,Q){D=q(function(){z(s.unstable_now())},Q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_next=function(z){switch(y){case 1:case 2:case 3:var Q=3;break;default:Q=y}var $=y;y=Q;try{return z()}finally{y=$}},s.unstable_requestPaint=function(){A=!0},s.unstable_runWithPriority=function(z,Q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var $=y;y=z;try{return Q()}finally{y=$}},s.unstable_scheduleCallback=function(z,Q,$){var ut=s.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ut+$:ut):$=ut,z){case 1:var _t=-1;break;case 2:_t=250;break;case 5:_t=1073741823;break;case 4:_t=1e4;break;default:_t=5e3}return _t=$+_t,z={id:_++,callback:Q,priorityLevel:z,startTime:$,expirationTime:_t,sortIndex:-1},$>ut?(z.sortIndex=$,n(b,z),i(f)===null&&z===i(b)&&(I?(K(D),D=-1):I=!0,zt(R,$-ut))):(z.sortIndex=_t,n(f,z),M||G||(M=!0,B||(B=!0,nt()))),z},s.unstable_shouldYield=Z,s.unstable_wrapCallback=function(z){var Q=y;return function(){var $=y;y=Q;try{return z.apply(this,arguments)}finally{y=$}}}})(eu)),eu}var Rh;function Kx(){return Rh||(Rh=1,tu.exports=Xx()),tu.exports}var au={exports:{}},ie={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zh;function Fx(){if(zh)return ie;zh=1;var s=ap();function n(f){var b="https://react.dev/errors/"+f;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)b+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+f+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var l={d:{f:i,r:function(){throw Error(n(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},p=Symbol.for("react.portal");function m(f,b,_){var k=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:k==null?null:""+k,children:f,containerInfo:b,implementation:_}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(f,b){if(f==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return ie.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,ie.createPortal=function(f,b){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(n(299));return m(f,b,null,_)},ie.flushSync=function(f){var b=d.T,_=l.p;try{if(d.T=null,l.p=2,f)return f()}finally{d.T=b,l.p=_,l.d.f()}},ie.preconnect=function(f,b){typeof f=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,l.d.C(f,b))},ie.prefetchDNS=function(f){typeof f=="string"&&l.d.D(f)},ie.preinit=function(f,b){if(typeof f=="string"&&b&&typeof b.as=="string"){var _=b.as,k=h(_,b.crossOrigin),y=typeof b.integrity=="string"?b.integrity:void 0,G=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;_==="style"?l.d.S(f,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:k,integrity:y,fetchPriority:G}):_==="script"&&l.d.X(f,{crossOrigin:k,integrity:y,fetchPriority:G,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},ie.preinitModule=function(f,b){if(typeof f=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var _=h(b.as,b.crossOrigin);l.d.M(f,{crossOrigin:_,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&l.d.M(f)},ie.preload=function(f,b){if(typeof f=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var _=b.as,k=h(_,b.crossOrigin);l.d.L(f,_,{crossOrigin:k,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},ie.preloadModule=function(f,b){if(typeof f=="string")if(b){var _=h(b.as,b.crossOrigin);l.d.m(f,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:_,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else l.d.m(f)},ie.requestFormReset=function(f){l.d.r(f)},ie.unstable_batchedUpdates=function(f,b){return f(b)},ie.useFormState=function(f,b,_){return d.H.useFormState(f,b,_)},ie.useFormStatus=function(){return d.H.useHostTransitionStatus()},ie.version="19.2.6",ie}var Hh;function Zx(){if(Hh)return au.exports;Hh=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(n){console.error(n)}}return s(),au.exports=Fx(),au.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lh;function Qx(){if(Lh)return fo;Lh=1;var s=Kx(),n=ap(),i=Zx();function l(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function m(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function d(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function h(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function f(t){if(m(t)!==t)throw Error(l(188))}function b(t){var e=t.alternate;if(!e){if(e=m(t),e===null)throw Error(l(188));return e!==t?null:t}for(var a=t,o=e;;){var r=a.return;if(r===null)break;var c=r.alternate;if(c===null){if(o=r.return,o!==null){a=o;continue}break}if(r.child===c.child){for(c=r.child;c;){if(c===a)return f(r),t;if(c===o)return f(r),e;c=c.sibling}throw Error(l(188))}if(a.return!==o.return)a=r,o=c;else{for(var g=!1,x=r.child;x;){if(x===a){g=!0,a=r,o=c;break}if(x===o){g=!0,o=r,a=c;break}x=x.sibling}if(!g){for(x=c.child;x;){if(x===a){g=!0,a=c,o=r;break}if(x===o){g=!0,o=c,a=r;break}x=x.sibling}if(!g)throw Error(l(189))}}if(a.alternate!==o)throw Error(l(190))}if(a.tag!==3)throw Error(l(188));return a.stateNode.current===a?t:e}function _(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=_(t),e!==null)return e;t=t.sibling}return null}var k=Object.assign,y=Symbol.for("react.element"),G=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),K=Symbol.for("react.consumer"),O=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),F=Symbol.for("react.activity"),Z=Symbol.for("react.memo_cache_sentinel"),it=Symbol.iterator;function nt(t){return t===null||typeof t!="object"?null:(t=it&&t[it]||t["@@iterator"],typeof t=="function"?t:null)}var Ut=Symbol.for("react.client.reference");function Ct(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Ut?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case I:return"Fragment";case q:return"Profiler";case A:return"StrictMode";case R:return"Suspense";case B:return"SuspenseList";case F:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case O:return t.displayName||"Context";case K:return(t._context.displayName||"Context")+".Consumer";case N:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case D:return e=t.displayName||null,e!==null?e:Ct(t.type)||"Memo";case X:e=t._payload,t=t._init;try{return Ct(t(e))}catch{}}return null}var zt=Array.isArray,z=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},ut=[],_t=-1;function j(t){return{current:t}}function P(t){0>_t||(t.current=ut[_t],ut[_t]=null,_t--)}function J(t,e){_t++,ut[_t]=t.current,t.current=e}var et=j(null),rt=j(null),dt=j(null),vt=j(null);function le(t,e){switch(J(dt,e),J(rt,t),J(et,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?ah(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=ah(e),t=sh(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}P(et),J(et,t)}function Ht(){P(et),P(rt),P(dt)}function Gn(t){t.memoizedState!==null&&J(vt,t);var e=et.current,a=sh(e,t.type);e!==a&&(J(rt,t),J(et,a))}function Co(t){rt.current===t&&(P(et),P(rt)),vt.current===t&&(P(vt),po._currentValue=$)}var Nl,Ep;function ts(t){if(Nl===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);Nl=e&&e[1]||"",Ep=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Nl+t+Ep}var ql=!1;function Cl(t,e){if(!t||ql)return"";ql=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(e){var U=function(){throw Error()};if(Object.defineProperty(U.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(U,[])}catch(C){var E=C}Reflect.construct(t,[],U)}else{try{U.call()}catch(C){E=C}t.call(U.prototype)}}else{try{throw Error()}catch(C){E=C}(U=t())&&typeof U.catch=="function"&&U.catch(function(){})}}catch(C){if(C&&E&&typeof C.stack=="string")return[C.stack,E.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=o.DetermineComponentFrameRoot(),g=c[0],x=c[1];if(g&&x){var v=g.split(`
`),w=x.split(`
`);for(r=o=0;o<v.length&&!v[o].includes("DetermineComponentFrameRoot");)o++;for(;r<w.length&&!w[r].includes("DetermineComponentFrameRoot");)r++;if(o===v.length||r===w.length)for(o=v.length-1,r=w.length-1;1<=o&&0<=r&&v[o]!==w[r];)r--;for(;1<=o&&0<=r;o--,r--)if(v[o]!==w[r]){if(o!==1||r!==1)do if(o--,r--,0>r||v[o]!==w[r]){var H=`
`+v[o].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=o&&0<=r);break}}}finally{ql=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ts(a):""}function k0(t,e){switch(t.tag){case 26:case 27:case 5:return ts(t.type);case 16:return ts("Lazy");case 13:return t.child!==e&&e!==null?ts("Suspense Fallback"):ts("Suspense");case 19:return ts("SuspenseList");case 0:case 15:return Cl(t.type,!1);case 11:return Cl(t.type.render,!1);case 1:return Cl(t.type,!0);case 31:return ts("Activity");default:return""}}function Np(t){try{var e="",a=null;do e+=k0(t,a),a=t,t=t.return;while(t);return e}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Dl=Object.prototype.hasOwnProperty,Ol=s.unstable_scheduleCallback,Rl=s.unstable_cancelCallback,y0=s.unstable_shouldYield,G0=s.unstable_requestPaint,_e=s.unstable_now,v0=s.unstable_getCurrentPriorityLevel,qp=s.unstable_ImmediatePriority,Cp=s.unstable_UserBlockingPriority,Do=s.unstable_NormalPriority,M0=s.unstable_LowPriority,Dp=s.unstable_IdlePriority,T0=s.log,j0=s.unstable_setDisableYieldValue,vn=null,xe=null;function Ga(t){if(typeof T0=="function"&&j0(t),xe&&typeof xe.setStrictMode=="function")try{xe.setStrictMode(vn,t)}catch{}}var ke=Math.clz32?Math.clz32:I0,A0=Math.log,S0=Math.LN2;function I0(t){return t>>>=0,t===0?32:31-(A0(t)/S0|0)|0}var Oo=256,Ro=262144,zo=4194304;function es(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ho(t,e,a){var o=t.pendingLanes;if(o===0)return 0;var r=0,c=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var x=o&134217727;return x!==0?(o=x&~c,o!==0?r=es(o):(g&=x,g!==0?r=es(g):a||(a=x&~t,a!==0&&(r=es(a))))):(x=o&~c,x!==0?r=es(x):g!==0?r=es(g):a||(a=o&~t,a!==0&&(r=es(a)))),r===0?0:e!==0&&e!==r&&(e&c)===0&&(c=r&-r,a=e&-e,c>=a||c===32&&(a&4194048)!==0)?e:r}function Mn(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function V0(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Op(){var t=zo;return zo<<=1,(zo&62914560)===0&&(zo=4194304),t}function zl(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function Tn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function w0(t,e,a,o,r,c){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var x=t.entanglements,v=t.expirationTimes,w=t.hiddenUpdates;for(a=g&~a;0<a;){var H=31-ke(a),U=1<<H;x[H]=0,v[H]=-1;var E=w[H];if(E!==null)for(w[H]=null,H=0;H<E.length;H++){var C=E[H];C!==null&&(C.lane&=-536870913)}a&=~U}o!==0&&Rp(t,o,0),c!==0&&r===0&&t.tag!==0&&(t.suspendedLanes|=c&~(g&~e))}function Rp(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var o=31-ke(e);t.entangledLanes|=e,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function zp(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var o=31-ke(a),r=1<<o;r&e|t[o]&e&&(t[o]|=e),a&=~r}}function Hp(t,e){var a=e&-e;return a=(a&42)!==0?1:Hl(a),(a&(t.suspendedLanes|e))!==0?0:a}function Hl(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ll(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Lp(){var t=Q.p;return t!==0?t:(t=window.event,t===void 0?32:jh(t.type))}function Bp(t,e){var a=Q.p;try{return Q.p=t,e()}finally{Q.p=a}}var va=Math.random().toString(36).slice(2),Wt="__reactFiber$"+va,pe="__reactProps$"+va,Ts="__reactContainer$"+va,Bl="__reactEvents$"+va,E0="__reactListeners$"+va,N0="__reactHandles$"+va,Up="__reactResources$"+va,jn="__reactMarker$"+va;function Ul(t){delete t[Wt],delete t[pe],delete t[Bl],delete t[E0],delete t[N0]}function js(t){var e=t[Wt];if(e)return e;for(var a=t.parentNode;a;){if(e=a[Ts]||a[Wt]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=uh(t);t!==null;){if(a=t[Wt])return a;t=uh(t)}return e}t=a,a=t.parentNode}return null}function As(t){if(t=t[Wt]||t[Ts]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function An(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(l(33))}function Ss(t){var e=t[Up];return e||(e=t[Up]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Jt(t){t[jn]=!0}var Pp=new Set,Yp={};function as(t,e){Is(t,e),Is(t+"Capture",e)}function Is(t,e){for(Yp[t]=e,t=0;t<e.length;t++)Pp.add(e[t])}var q0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xp={},Kp={};function C0(t){return Dl.call(Kp,t)?!0:Dl.call(Xp,t)?!1:q0.test(t)?Kp[t]=!0:(Xp[t]=!0,!1)}function Lo(t,e,a){if(C0(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var o=e.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function Bo(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function aa(t,e,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+o)}}function Ve(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function D0(t,e,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var r=o.get,c=o.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(g){a=""+g,c.call(this,g)}}),Object.defineProperty(t,e,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Pl(t){if(!t._valueTracker){var e=Fp(t)?"checked":"value";t._valueTracker=D0(t,e,""+t[e])}}function Zp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),o="";return t&&(o=Fp(t)?t.checked?"true":"false":t.value),t=o,t!==a?(e.setValue(t),!0):!1}function Uo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var O0=/[\n"\\]/g;function we(t){return t.replace(O0,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Yl(t,e,a,o,r,c,g,x){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),e!=null?g==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Ve(e)):t.value!==""+Ve(e)&&(t.value=""+Ve(e)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),e!=null?Xl(t,g,Ve(e)):a!=null?Xl(t,g,Ve(a)):o!=null&&t.removeAttribute("value"),r==null&&c!=null&&(t.defaultChecked=!!c),r!=null&&(t.checked=r&&typeof r!="function"&&typeof r!="symbol"),x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.name=""+Ve(x):t.removeAttribute("name")}function Qp(t,e,a,o,r,c,g,x){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),e!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||e!=null)){Pl(t);return}a=a!=null?""+Ve(a):"",e=e!=null?""+Ve(e):a,x||e===t.value||(t.value=e),t.defaultValue=e}o=o??r,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=x?t.checked:!!o,t.defaultChecked=!!o,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),Pl(t)}function Xl(t,e,a){e==="number"&&Uo(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Vs(t,e,a,o){if(t=t.options,e){e={};for(var r=0;r<a.length;r++)e["$"+a[r]]=!0;for(a=0;a<t.length;a++)r=e.hasOwnProperty("$"+t[a].value),t[a].selected!==r&&(t[a].selected=r),r&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Ve(a),e=null,r=0;r<t.length;r++){if(t[r].value===a){t[r].selected=!0,o&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Jp(t,e,a){if(e!=null&&(e=""+Ve(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+Ve(a):""}function $p(t,e,a,o){if(e==null){if(o!=null){if(a!=null)throw Error(l(92));if(zt(o)){if(1<o.length)throw Error(l(93));o=o[0]}a=o}a==null&&(a=""),e=a}a=Ve(e),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Pl(t)}function ws(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var R0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Wp(t,e,a){var o=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":o?t.setProperty(e,a):typeof a!="number"||a===0||R0.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function td(t,e,a){if(e!=null&&typeof e!="object")throw Error(l(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||e!=null&&e.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var r in e)o=e[r],e.hasOwnProperty(r)&&a[r]!==o&&Wp(t,r,o)}else for(var c in e)e.hasOwnProperty(c)&&Wp(t,c,e[c])}function Kl(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var z0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),H0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Po(t){return H0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function sa(){}var Fl=null;function Zl(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Es=null,Ns=null;function ed(t){var e=As(t);if(e&&(t=e.stateNode)){var a=t[pe]||null;t:switch(t=e.stateNode,e.type){case"input":if(Yl(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+we(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var o=a[e];if(o!==t&&o.form===t.form){var r=o[pe]||null;if(!r)throw Error(l(90));Yl(o,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(e=0;e<a.length;e++)o=a[e],o.form===t.form&&Zp(o)}break t;case"textarea":Jp(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&Vs(t,!!a.multiple,e,!1)}}}var Ql=!1;function ad(t,e,a){if(Ql)return t(e,a);Ql=!0;try{var o=t(e);return o}finally{if(Ql=!1,(Es!==null||Ns!==null)&&(wi(),Es&&(e=Es,t=Ns,Ns=Es=null,ed(e),t)))for(e=0;e<t.length;e++)ed(t[e])}}function Sn(t,e){var a=t.stateNode;if(a===null)return null;var o=a[pe]||null;if(o===null)return null;a=o[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(l(231,e,typeof a));return a}var na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jl=!1;if(na)try{var In={};Object.defineProperty(In,"passive",{get:function(){Jl=!0}}),window.addEventListener("test",In,In),window.removeEventListener("test",In,In)}catch{Jl=!1}var Ma=null,$l=null,Yo=null;function sd(){if(Yo)return Yo;var t,e=$l,a=e.length,o,r="value"in Ma?Ma.value:Ma.textContent,c=r.length;for(t=0;t<a&&e[t]===r[t];t++);var g=a-t;for(o=1;o<=g&&e[a-o]===r[c-o];o++);return Yo=r.slice(t,1<o?1-o:void 0)}function Xo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ko(){return!0}function nd(){return!1}function de(t){function e(a,o,r,c,g){this._reactName=a,this._targetInst=r,this.type=o,this.nativeEvent=c,this.target=g,this.currentTarget=null;for(var x in t)t.hasOwnProperty(x)&&(a=t[x],this[x]=a?a(c):c[x]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Ko:nd,this.isPropagationStopped=nd,this}return k(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ko)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ko)},persist:function(){},isPersistent:Ko}),e}var ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fo=de(ss),Vn=k({},ss,{view:0,detail:0}),L0=de(Vn),Wl,tr,wn,Zo=k({},Vn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ar,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wn&&(wn&&t.type==="mousemove"?(Wl=t.screenX-wn.screenX,tr=t.screenY-wn.screenY):tr=Wl=0,wn=t),Wl)},movementY:function(t){return"movementY"in t?t.movementY:tr}}),od=de(Zo),B0=k({},Zo,{dataTransfer:0}),U0=de(B0),P0=k({},Vn,{relatedTarget:0}),er=de(P0),Y0=k({},ss,{animationName:0,elapsedTime:0,pseudoElement:0}),X0=de(Y0),K0=k({},ss,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),F0=de(K0),Z0=k({},ss,{data:0}),id=de(Z0),Q0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},J0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function W0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=$0[t])?!!e[t]:!1}function ar(){return W0}var t1=k({},Vn,{key:function(t){if(t.key){var e=Q0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Xo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?J0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ar,charCode:function(t){return t.type==="keypress"?Xo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),e1=de(t1),a1=k({},Zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ld=de(a1),s1=k({},Vn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ar}),n1=de(s1),o1=k({},ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),i1=de(o1),l1=k({},Zo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),r1=de(l1),c1=k({},ss,{newState:0,oldState:0}),u1=de(c1),p1=[9,13,27,32],sr=na&&"CompositionEvent"in window,En=null;na&&"documentMode"in document&&(En=document.documentMode);var d1=na&&"TextEvent"in window&&!En,rd=na&&(!sr||En&&8<En&&11>=En),cd=" ",ud=!1;function pd(t,e){switch(t){case"keyup":return p1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qs=!1;function m1(t,e){switch(t){case"compositionend":return dd(e);case"keypress":return e.which!==32?null:(ud=!0,cd);case"textInput":return t=e.data,t===cd&&ud?null:t;default:return null}}function g1(t,e){if(qs)return t==="compositionend"||!sr&&pd(t,e)?(t=sd(),Yo=$l=Ma=null,qs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return rd&&e.locale!=="ko"?null:e.data;default:return null}}var h1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function md(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!h1[t.type]:e==="textarea"}function gd(t,e,a,o){Es?Ns?Ns.push(o):Ns=[o]:Es=o,e=Ri(e,"onChange"),0<e.length&&(a=new Fo("onChange","change",null,a,o),t.push({event:a,listeners:e}))}var Nn=null,qn=null;function b1(t){Qg(t,0)}function Qo(t){var e=An(t);if(Zp(e))return t}function hd(t,e){if(t==="change")return e}var bd=!1;if(na){var nr;if(na){var or="oninput"in document;if(!or){var fd=document.createElement("div");fd.setAttribute("oninput","return;"),or=typeof fd.oninput=="function"}nr=or}else nr=!1;bd=nr&&(!document.documentMode||9<document.documentMode)}function _d(){Nn&&(Nn.detachEvent("onpropertychange",xd),qn=Nn=null)}function xd(t){if(t.propertyName==="value"&&Qo(qn)){var e=[];gd(e,qn,t,Zl(t)),ad(b1,e)}}function f1(t,e,a){t==="focusin"?(_d(),Nn=e,qn=a,Nn.attachEvent("onpropertychange",xd)):t==="focusout"&&_d()}function _1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qo(qn)}function x1(t,e){if(t==="click")return Qo(e)}function k1(t,e){if(t==="input"||t==="change")return Qo(e)}function y1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ye=typeof Object.is=="function"?Object.is:y1;function Cn(t,e){if(ye(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),o=Object.keys(e);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var r=a[o];if(!Dl.call(e,r)||!ye(t[r],e[r]))return!1}return!0}function kd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function yd(t,e){var a=kd(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=e&&o>=e)return{node:a,offset:e-t};t=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=kd(a)}}function Gd(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Gd(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function vd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Uo(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=Uo(t.document)}return e}function ir(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var G1=na&&"documentMode"in document&&11>=document.documentMode,Cs=null,lr=null,Dn=null,rr=!1;function Md(t,e,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;rr||Cs==null||Cs!==Uo(o)||(o=Cs,"selectionStart"in o&&ir(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Dn&&Cn(Dn,o)||(Dn=o,o=Ri(lr,"onSelect"),0<o.length&&(e=new Fo("onSelect","select",null,e,a),t.push({event:e,listeners:o}),e.target=Cs)))}function ns(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var Ds={animationend:ns("Animation","AnimationEnd"),animationiteration:ns("Animation","AnimationIteration"),animationstart:ns("Animation","AnimationStart"),transitionrun:ns("Transition","TransitionRun"),transitionstart:ns("Transition","TransitionStart"),transitioncancel:ns("Transition","TransitionCancel"),transitionend:ns("Transition","TransitionEnd")},cr={},Td={};na&&(Td=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function os(t){if(cr[t])return cr[t];if(!Ds[t])return t;var e=Ds[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in Td)return cr[t]=e[a];return t}var jd=os("animationend"),Ad=os("animationiteration"),Sd=os("animationstart"),v1=os("transitionrun"),M1=os("transitionstart"),T1=os("transitioncancel"),Id=os("transitionend"),Vd=new Map,ur="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ur.push("scrollEnd");function Be(t,e){Vd.set(t,e),as(e,[t])}var Jo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ee=[],Os=0,pr=0;function $o(){for(var t=Os,e=pr=Os=0;e<t;){var a=Ee[e];Ee[e++]=null;var o=Ee[e];Ee[e++]=null;var r=Ee[e];Ee[e++]=null;var c=Ee[e];if(Ee[e++]=null,o!==null&&r!==null){var g=o.pending;g===null?r.next=r:(r.next=g.next,g.next=r),o.pending=r}c!==0&&wd(a,r,c)}}function Wo(t,e,a,o){Ee[Os++]=t,Ee[Os++]=e,Ee[Os++]=a,Ee[Os++]=o,pr|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function dr(t,e,a,o){return Wo(t,e,a,o),ti(t)}function is(t,e){return Wo(t,null,null,e),ti(t)}function wd(t,e,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var r=!1,c=t.return;c!==null;)c.childLanes|=a,o=c.alternate,o!==null&&(o.childLanes|=a),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(r=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,r&&e!==null&&(r=31-ke(a),t=c.hiddenUpdates,o=t[r],o===null?t[r]=[e]:o.push(e),e.lane=a|536870912),c):null}function ti(t){if(50<no)throw no=0,yc=null,Error(l(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Rs={};function j1(t,e,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ge(t,e,a,o){return new j1(t,e,a,o)}function mr(t){return t=t.prototype,!(!t||!t.isReactComponent)}function oa(t,e){var a=t.alternate;return a===null?(a=Ge(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Ed(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function ei(t,e,a,o,r,c){var g=0;if(o=t,typeof t=="function")mr(t)&&(g=1);else if(typeof t=="string")g=wx(t,a,et.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case F:return t=Ge(31,a,e,r),t.elementType=F,t.lanes=c,t;case I:return ls(a.children,r,c,e);case A:g=8,r|=24;break;case q:return t=Ge(12,a,e,r|2),t.elementType=q,t.lanes=c,t;case R:return t=Ge(13,a,e,r),t.elementType=R,t.lanes=c,t;case B:return t=Ge(19,a,e,r),t.elementType=B,t.lanes=c,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case O:g=10;break t;case K:g=9;break t;case N:g=11;break t;case D:g=14;break t;case X:g=16,o=null;break t}g=29,a=Error(l(130,t===null?"null":typeof t,"")),o=null}return e=Ge(g,a,e,r),e.elementType=t,e.type=o,e.lanes=c,e}function ls(t,e,a,o){return t=Ge(7,t,o,e),t.lanes=a,t}function gr(t,e,a){return t=Ge(6,t,null,e),t.lanes=a,t}function Nd(t){var e=Ge(18,null,null,0);return e.stateNode=t,e}function hr(t,e,a){return e=Ge(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var qd=new WeakMap;function Ne(t,e){if(typeof t=="object"&&t!==null){var a=qd.get(t);return a!==void 0?a:(e={value:t,source:e,stack:Np(e)},qd.set(t,e),e)}return{value:t,source:e,stack:Np(e)}}var zs=[],Hs=0,ai=null,On=0,qe=[],Ce=0,Ta=null,Fe=1,Ze="";function ia(t,e){zs[Hs++]=On,zs[Hs++]=ai,ai=t,On=e}function Cd(t,e,a){qe[Ce++]=Fe,qe[Ce++]=Ze,qe[Ce++]=Ta,Ta=t;var o=Fe;t=Ze;var r=32-ke(o)-1;o&=~(1<<r),a+=1;var c=32-ke(e)+r;if(30<c){var g=r-r%5;c=(o&(1<<g)-1).toString(32),o>>=g,r-=g,Fe=1<<32-ke(e)+r|a<<r|o,Ze=c+t}else Fe=1<<c|a<<r|o,Ze=t}function br(t){t.return!==null&&(ia(t,1),Cd(t,1,0))}function fr(t){for(;t===ai;)ai=zs[--Hs],zs[Hs]=null,On=zs[--Hs],zs[Hs]=null;for(;t===Ta;)Ta=qe[--Ce],qe[Ce]=null,Ze=qe[--Ce],qe[Ce]=null,Fe=qe[--Ce],qe[Ce]=null}function Dd(t,e){qe[Ce++]=Fe,qe[Ce++]=Ze,qe[Ce++]=Ta,Fe=e.id,Ze=e.overflow,Ta=t}var te=null,Et=null,xt=!1,ja=null,De=!1,_r=Error(l(519));function Aa(t){var e=Error(l(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Rn(Ne(e,t)),_r}function Od(t){var e=t.stateNode,a=t.type,o=t.memoizedProps;switch(e[Wt]=t,e[pe]=o,a){case"dialog":gt("cancel",e),gt("close",e);break;case"iframe":case"object":case"embed":gt("load",e);break;case"video":case"audio":for(a=0;a<io.length;a++)gt(io[a],e);break;case"source":gt("error",e);break;case"img":case"image":case"link":gt("error",e),gt("load",e);break;case"details":gt("toggle",e);break;case"input":gt("invalid",e),Qp(e,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":gt("invalid",e);break;case"textarea":gt("invalid",e),$p(e,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||o.suppressHydrationWarning===!0||th(e.textContent,a)?(o.popover!=null&&(gt("beforetoggle",e),gt("toggle",e)),o.onScroll!=null&&gt("scroll",e),o.onScrollEnd!=null&&gt("scrollend",e),o.onClick!=null&&(e.onclick=sa),e=!0):e=!1,e||Aa(t,!0)}function Rd(t){for(te=t.return;te;)switch(te.tag){case 5:case 31:case 13:De=!1;return;case 27:case 3:De=!0;return;default:te=te.return}}function Ls(t){if(t!==te)return!1;if(!xt)return Rd(t),xt=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Dc(t.type,t.memoizedProps)),a=!a),a&&Et&&Aa(t),Rd(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(l(317));Et=ch(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(l(317));Et=ch(t)}else e===27?(e=Et,La(t.type)?(t=Lc,Lc=null,Et=t):Et=e):Et=te?Re(t.stateNode.nextSibling):null;return!0}function rs(){Et=te=null,xt=!1}function xr(){var t=ja;return t!==null&&(be===null?be=t:be.push.apply(be,t),ja=null),t}function Rn(t){ja===null?ja=[t]:ja.push(t)}var kr=j(null),cs=null,la=null;function Sa(t,e,a){J(kr,e._currentValue),e._currentValue=a}function ra(t){t._currentValue=kr.current,P(kr)}function yr(t,e,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,o!==null&&(o.childLanes|=e)):o!==null&&(o.childLanes&e)!==e&&(o.childLanes|=e),t===a)break;t=t.return}}function Gr(t,e,a,o){var r=t.child;for(r!==null&&(r.return=t);r!==null;){var c=r.dependencies;if(c!==null){var g=r.child;c=c.firstContext;t:for(;c!==null;){var x=c;c=r;for(var v=0;v<e.length;v++)if(x.context===e[v]){c.lanes|=a,x=c.alternate,x!==null&&(x.lanes|=a),yr(c.return,a,t),o||(g=null);break t}c=x.next}}else if(r.tag===18){if(g=r.return,g===null)throw Error(l(341));g.lanes|=a,c=g.alternate,c!==null&&(c.lanes|=a),yr(g,a,t),g=null}else g=r.child;if(g!==null)g.return=r;else for(g=r;g!==null;){if(g===t){g=null;break}if(r=g.sibling,r!==null){r.return=g.return,g=r;break}g=g.return}r=g}}function Bs(t,e,a,o){t=null;for(var r=e,c=!1;r!==null;){if(!c){if((r.flags&524288)!==0)c=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var g=r.alternate;if(g===null)throw Error(l(387));if(g=g.memoizedProps,g!==null){var x=r.type;ye(r.pendingProps.value,g.value)||(t!==null?t.push(x):t=[x])}}else if(r===vt.current){if(g=r.alternate,g===null)throw Error(l(387));g.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(t!==null?t.push(po):t=[po])}r=r.return}t!==null&&Gr(e,t,a,o),e.flags|=262144}function si(t){for(t=t.firstContext;t!==null;){if(!ye(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function us(t){cs=t,la=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ee(t){return zd(cs,t)}function ni(t,e){return cs===null&&us(t),zd(t,e)}function zd(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},la===null){if(t===null)throw Error(l(308));la=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else la=la.next=e;return a}var A1=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},S1=s.unstable_scheduleCallback,I1=s.unstable_NormalPriority,Pt={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vr(){return{controller:new A1,data:new Map,refCount:0}}function zn(t){t.refCount--,t.refCount===0&&S1(I1,function(){t.controller.abort()})}var Hn=null,Mr=0,Us=0,Ps=null;function V1(t,e){if(Hn===null){var a=Hn=[];Mr=0,Us=Ac(),Ps={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Mr++,e.then(Hd,Hd),e}function Hd(){if(--Mr===0&&Hn!==null){Ps!==null&&(Ps.status="fulfilled");var t=Hn;Hn=null,Us=0,Ps=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function w1(t,e){var a=[],o={status:"pending",value:null,reason:null,then:function(r){a.push(r)}};return t.then(function(){o.status="fulfilled",o.value=e;for(var r=0;r<a.length;r++)(0,a[r])(e)},function(r){for(o.status="rejected",o.reason=r,r=0;r<a.length;r++)(0,a[r])(void 0)}),o}var Ld=z.S;z.S=function(t,e){Mg=_e(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&V1(t,e),Ld!==null&&Ld(t,e)};var ps=j(null);function Tr(){var t=ps.current;return t!==null?t:It.pooledCache}function oi(t,e){e===null?J(ps,ps.current):J(ps,e.pool)}function Bd(){var t=Tr();return t===null?null:{parent:Pt._currentValue,pool:t}}var Ys=Error(l(460)),jr=Error(l(474)),ii=Error(l(542)),li={then:function(){}};function Ud(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Pd(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(sa,sa),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Xd(t),t;default:if(typeof e.status=="string")e.then(sa,sa);else{if(t=It,t!==null&&100<t.shellSuspendCounter)throw Error(l(482));t=e,t.status="pending",t.then(function(o){if(e.status==="pending"){var r=e;r.status="fulfilled",r.value=o}},function(o){if(e.status==="pending"){var r=e;r.status="rejected",r.reason=o}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Xd(t),t}throw ms=e,Ys}}function ds(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ms=a,Ys):a}}var ms=null;function Yd(){if(ms===null)throw Error(l(459));var t=ms;return ms=null,t}function Xd(t){if(t===Ys||t===ii)throw Error(l(483))}var Xs=null,Ln=0;function ri(t){var e=Ln;return Ln+=1,Xs===null&&(Xs=[]),Pd(Xs,t,e)}function Bn(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function ci(t,e){throw e.$$typeof===y?Error(l(525)):(t=Object.prototype.toString.call(e),Error(l(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Kd(t){function e(S,T){if(t){var V=S.deletions;V===null?(S.deletions=[T],S.flags|=16):V.push(T)}}function a(S,T){if(!t)return null;for(;T!==null;)e(S,T),T=T.sibling;return null}function o(S){for(var T=new Map;S!==null;)S.key!==null?T.set(S.key,S):T.set(S.index,S),S=S.sibling;return T}function r(S,T){return S=oa(S,T),S.index=0,S.sibling=null,S}function c(S,T,V){return S.index=V,t?(V=S.alternate,V!==null?(V=V.index,V<T?(S.flags|=67108866,T):V):(S.flags|=67108866,T)):(S.flags|=1048576,T)}function g(S){return t&&S.alternate===null&&(S.flags|=67108866),S}function x(S,T,V,L){return T===null||T.tag!==6?(T=gr(V,S.mode,L),T.return=S,T):(T=r(T,V),T.return=S,T)}function v(S,T,V,L){var st=V.type;return st===I?H(S,T,V.props.children,L,V.key):T!==null&&(T.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===X&&ds(st)===T.type)?(T=r(T,V.props),Bn(T,V),T.return=S,T):(T=ei(V.type,V.key,V.props,null,S.mode,L),Bn(T,V),T.return=S,T)}function w(S,T,V,L){return T===null||T.tag!==4||T.stateNode.containerInfo!==V.containerInfo||T.stateNode.implementation!==V.implementation?(T=hr(V,S.mode,L),T.return=S,T):(T=r(T,V.children||[]),T.return=S,T)}function H(S,T,V,L,st){return T===null||T.tag!==7?(T=ls(V,S.mode,L,st),T.return=S,T):(T=r(T,V),T.return=S,T)}function U(S,T,V){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=gr(""+T,S.mode,V),T.return=S,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case G:return V=ei(T.type,T.key,T.props,null,S.mode,V),Bn(V,T),V.return=S,V;case M:return T=hr(T,S.mode,V),T.return=S,T;case X:return T=ds(T),U(S,T,V)}if(zt(T)||nt(T))return T=ls(T,S.mode,V,null),T.return=S,T;if(typeof T.then=="function")return U(S,ri(T),V);if(T.$$typeof===O)return U(S,ni(S,T),V);ci(S,T)}return null}function E(S,T,V,L){var st=T!==null?T.key:null;if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return st!==null?null:x(S,T,""+V,L);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case G:return V.key===st?v(S,T,V,L):null;case M:return V.key===st?w(S,T,V,L):null;case X:return V=ds(V),E(S,T,V,L)}if(zt(V)||nt(V))return st!==null?null:H(S,T,V,L,null);if(typeof V.then=="function")return E(S,T,ri(V),L);if(V.$$typeof===O)return E(S,T,ni(S,V),L);ci(S,V)}return null}function C(S,T,V,L,st){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return S=S.get(V)||null,x(T,S,""+L,st);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case G:return S=S.get(L.key===null?V:L.key)||null,v(T,S,L,st);case M:return S=S.get(L.key===null?V:L.key)||null,w(T,S,L,st);case X:return L=ds(L),C(S,T,V,L,st)}if(zt(L)||nt(L))return S=S.get(V)||null,H(T,S,L,st,null);if(typeof L.then=="function")return C(S,T,V,ri(L),st);if(L.$$typeof===O)return C(S,T,V,ni(T,L),st);ci(T,L)}return null}function W(S,T,V,L){for(var st=null,kt=null,at=T,pt=T=0,ft=null;at!==null&&pt<V.length;pt++){at.index>pt?(ft=at,at=null):ft=at.sibling;var yt=E(S,at,V[pt],L);if(yt===null){at===null&&(at=ft);break}t&&at&&yt.alternate===null&&e(S,at),T=c(yt,T,pt),kt===null?st=yt:kt.sibling=yt,kt=yt,at=ft}if(pt===V.length)return a(S,at),xt&&ia(S,pt),st;if(at===null){for(;pt<V.length;pt++)at=U(S,V[pt],L),at!==null&&(T=c(at,T,pt),kt===null?st=at:kt.sibling=at,kt=at);return xt&&ia(S,pt),st}for(at=o(at);pt<V.length;pt++)ft=C(at,S,pt,V[pt],L),ft!==null&&(t&&ft.alternate!==null&&at.delete(ft.key===null?pt:ft.key),T=c(ft,T,pt),kt===null?st=ft:kt.sibling=ft,kt=ft);return t&&at.forEach(function(Xa){return e(S,Xa)}),xt&&ia(S,pt),st}function ot(S,T,V,L){if(V==null)throw Error(l(151));for(var st=null,kt=null,at=T,pt=T=0,ft=null,yt=V.next();at!==null&&!yt.done;pt++,yt=V.next()){at.index>pt?(ft=at,at=null):ft=at.sibling;var Xa=E(S,at,yt.value,L);if(Xa===null){at===null&&(at=ft);break}t&&at&&Xa.alternate===null&&e(S,at),T=c(Xa,T,pt),kt===null?st=Xa:kt.sibling=Xa,kt=Xa,at=ft}if(yt.done)return a(S,at),xt&&ia(S,pt),st;if(at===null){for(;!yt.done;pt++,yt=V.next())yt=U(S,yt.value,L),yt!==null&&(T=c(yt,T,pt),kt===null?st=yt:kt.sibling=yt,kt=yt);return xt&&ia(S,pt),st}for(at=o(at);!yt.done;pt++,yt=V.next())yt=C(at,S,pt,yt.value,L),yt!==null&&(t&&yt.alternate!==null&&at.delete(yt.key===null?pt:yt.key),T=c(yt,T,pt),kt===null?st=yt:kt.sibling=yt,kt=yt);return t&&at.forEach(function(Bx){return e(S,Bx)}),xt&&ia(S,pt),st}function St(S,T,V,L){if(typeof V=="object"&&V!==null&&V.type===I&&V.key===null&&(V=V.props.children),typeof V=="object"&&V!==null){switch(V.$$typeof){case G:t:{for(var st=V.key;T!==null;){if(T.key===st){if(st=V.type,st===I){if(T.tag===7){a(S,T.sibling),L=r(T,V.props.children),L.return=S,S=L;break t}}else if(T.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===X&&ds(st)===T.type){a(S,T.sibling),L=r(T,V.props),Bn(L,V),L.return=S,S=L;break t}a(S,T);break}else e(S,T);T=T.sibling}V.type===I?(L=ls(V.props.children,S.mode,L,V.key),L.return=S,S=L):(L=ei(V.type,V.key,V.props,null,S.mode,L),Bn(L,V),L.return=S,S=L)}return g(S);case M:t:{for(st=V.key;T!==null;){if(T.key===st)if(T.tag===4&&T.stateNode.containerInfo===V.containerInfo&&T.stateNode.implementation===V.implementation){a(S,T.sibling),L=r(T,V.children||[]),L.return=S,S=L;break t}else{a(S,T);break}else e(S,T);T=T.sibling}L=hr(V,S.mode,L),L.return=S,S=L}return g(S);case X:return V=ds(V),St(S,T,V,L)}if(zt(V))return W(S,T,V,L);if(nt(V)){if(st=nt(V),typeof st!="function")throw Error(l(150));return V=st.call(V),ot(S,T,V,L)}if(typeof V.then=="function")return St(S,T,ri(V),L);if(V.$$typeof===O)return St(S,T,ni(S,V),L);ci(S,V)}return typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint"?(V=""+V,T!==null&&T.tag===6?(a(S,T.sibling),L=r(T,V),L.return=S,S=L):(a(S,T),L=gr(V,S.mode,L),L.return=S,S=L),g(S)):a(S,T)}return function(S,T,V,L){try{Ln=0;var st=St(S,T,V,L);return Xs=null,st}catch(at){if(at===Ys||at===ii)throw at;var kt=Ge(29,at,null,S.mode);return kt.lanes=L,kt.return=S,kt}finally{}}}var gs=Kd(!0),Fd=Kd(!1),Ia=!1;function Ar(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Sr(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Va(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function wa(t,e,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Gt&2)!==0){var r=o.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),o.pending=e,e=ti(t),wd(t,null,a),e}return Wo(t,o,e,a),ti(t)}function Un(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var o=e.lanes;o&=t.pendingLanes,a|=o,e.lanes=a,zp(t,a)}}function Ir(t,e){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var r=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?r=c=g:c=c.next=g,a=a.next}while(a!==null);c===null?r=c=e:c=c.next=e}else r=c=e;a={baseState:o.baseState,firstBaseUpdate:r,lastBaseUpdate:c,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var Vr=!1;function Pn(){if(Vr){var t=Ps;if(t!==null)throw t}}function Yn(t,e,a,o){Vr=!1;var r=t.updateQueue;Ia=!1;var c=r.firstBaseUpdate,g=r.lastBaseUpdate,x=r.shared.pending;if(x!==null){r.shared.pending=null;var v=x,w=v.next;v.next=null,g===null?c=w:g.next=w,g=v;var H=t.alternate;H!==null&&(H=H.updateQueue,x=H.lastBaseUpdate,x!==g&&(x===null?H.firstBaseUpdate=w:x.next=w,H.lastBaseUpdate=v))}if(c!==null){var U=r.baseState;g=0,H=w=v=null,x=c;do{var E=x.lane&-536870913,C=E!==x.lane;if(C?(bt&E)===E:(o&E)===E){E!==0&&E===Us&&(Vr=!0),H!==null&&(H=H.next={lane:0,tag:x.tag,payload:x.payload,callback:null,next:null});t:{var W=t,ot=x;E=e;var St=a;switch(ot.tag){case 1:if(W=ot.payload,typeof W=="function"){U=W.call(St,U,E);break t}U=W;break t;case 3:W.flags=W.flags&-65537|128;case 0:if(W=ot.payload,E=typeof W=="function"?W.call(St,U,E):W,E==null)break t;U=k({},U,E);break t;case 2:Ia=!0}}E=x.callback,E!==null&&(t.flags|=64,C&&(t.flags|=8192),C=r.callbacks,C===null?r.callbacks=[E]:C.push(E))}else C={lane:E,tag:x.tag,payload:x.payload,callback:x.callback,next:null},H===null?(w=H=C,v=U):H=H.next=C,g|=E;if(x=x.next,x===null){if(x=r.shared.pending,x===null)break;C=x,x=C.next,C.next=null,r.lastBaseUpdate=C,r.shared.pending=null}}while(!0);H===null&&(v=U),r.baseState=v,r.firstBaseUpdate=w,r.lastBaseUpdate=H,c===null&&(r.shared.lanes=0),Da|=g,t.lanes=g,t.memoizedState=U}}function Zd(t,e){if(typeof t!="function")throw Error(l(191,t));t.call(e)}function Qd(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Zd(a[t],e)}var Ks=j(null),ui=j(0);function Jd(t,e){t=fa,J(ui,t),J(Ks,e),fa=t|e.baseLanes}function wr(){J(ui,fa),J(Ks,Ks.current)}function Er(){fa=ui.current,P(Ks),P(ui)}var ve=j(null),Oe=null;function Ea(t){var e=t.alternate;J(Lt,Lt.current&1),J(ve,t),Oe===null&&(e===null||Ks.current!==null||e.memoizedState!==null)&&(Oe=t)}function Nr(t){J(Lt,Lt.current),J(ve,t),Oe===null&&(Oe=t)}function $d(t){t.tag===22?(J(Lt,Lt.current),J(ve,t),Oe===null&&(Oe=t)):Na()}function Na(){J(Lt,Lt.current),J(ve,ve.current)}function Me(t){P(ve),Oe===t&&(Oe=null),P(Lt)}var Lt=j(0);function pi(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||zc(a)||Hc(a)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ca=0,ct=null,jt=null,Yt=null,di=!1,Fs=!1,hs=!1,mi=0,Xn=0,Zs=null,E1=0;function Dt(){throw Error(l(321))}function qr(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!ye(t[a],e[a]))return!1;return!0}function Cr(t,e,a,o,r,c){return ca=c,ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,z.H=t===null||t.memoizedState===null?Cm:Qr,hs=!1,c=a(o,r),hs=!1,Fs&&(c=tm(e,a,o,r)),Wd(t),c}function Wd(t){z.H=Zn;var e=jt!==null&&jt.next!==null;if(ca=0,Yt=jt=ct=null,di=!1,Xn=0,Zs=null,e)throw Error(l(300));t===null||Xt||(t=t.dependencies,t!==null&&si(t)&&(Xt=!0))}function tm(t,e,a,o){ct=t;var r=0;do{if(Fs&&(Zs=null),Xn=0,Fs=!1,25<=r)throw Error(l(301));if(r+=1,Yt=jt=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}z.H=Dm,c=e(a,o)}while(Fs);return c}function N1(){var t=z.H,e=t.useState()[0];return e=typeof e.then=="function"?Kn(e):e,t=t.useState()[0],(jt!==null?jt.memoizedState:null)!==t&&(ct.flags|=1024),e}function Dr(){var t=mi!==0;return mi=0,t}function Or(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function Rr(t){if(di){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}di=!1}ca=0,Yt=jt=ct=null,Fs=!1,Xn=mi=0,Zs=null}function re(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Yt===null?ct.memoizedState=Yt=t:Yt=Yt.next=t,Yt}function Bt(){if(jt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=jt.next;var e=Yt===null?ct.memoizedState:Yt.next;if(e!==null)Yt=e,jt=t;else{if(t===null)throw ct.alternate===null?Error(l(467)):Error(l(310));jt=t,t={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},Yt===null?ct.memoizedState=Yt=t:Yt=Yt.next=t}return Yt}function gi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Kn(t){var e=Xn;return Xn+=1,Zs===null&&(Zs=[]),t=Pd(Zs,t,e),e=ct,(Yt===null?e.memoizedState:Yt.next)===null&&(e=e.alternate,z.H=e===null||e.memoizedState===null?Cm:Qr),t}function hi(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Kn(t);if(t.$$typeof===O)return ee(t)}throw Error(l(438,String(t)))}function zr(t){var e=null,a=ct.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var o=ct.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(e={data:o.data.map(function(r){return r.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=gi(),ct.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),o=0;o<t;o++)a[o]=Z;return e.index++,a}function ua(t,e){return typeof e=="function"?e(t):e}function bi(t){var e=Bt();return Hr(e,jt,t)}function Hr(t,e,a){var o=t.queue;if(o===null)throw Error(l(311));o.lastRenderedReducer=a;var r=t.baseQueue,c=o.pending;if(c!==null){if(r!==null){var g=r.next;r.next=c.next,c.next=g}e.baseQueue=r=c,o.pending=null}if(c=t.baseState,r===null)t.memoizedState=c;else{e=r.next;var x=g=null,v=null,w=e,H=!1;do{var U=w.lane&-536870913;if(U!==w.lane?(bt&U)===U:(ca&U)===U){var E=w.revertLane;if(E===0)v!==null&&(v=v.next={lane:0,revertLane:0,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),U===Us&&(H=!0);else if((ca&E)===E){w=w.next,E===Us&&(H=!0);continue}else U={lane:0,revertLane:w.revertLane,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},v===null?(x=v=U,g=c):v=v.next=U,ct.lanes|=E,Da|=E;U=w.action,hs&&a(c,U),c=w.hasEagerState?w.eagerState:a(c,U)}else E={lane:U,revertLane:w.revertLane,gesture:w.gesture,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},v===null?(x=v=E,g=c):v=v.next=E,ct.lanes|=U,Da|=U;w=w.next}while(w!==null&&w!==e);if(v===null?g=c:v.next=x,!ye(c,t.memoizedState)&&(Xt=!0,H&&(a=Ps,a!==null)))throw a;t.memoizedState=c,t.baseState=g,t.baseQueue=v,o.lastRenderedState=c}return r===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Lr(t){var e=Bt(),a=e.queue;if(a===null)throw Error(l(311));a.lastRenderedReducer=t;var o=a.dispatch,r=a.pending,c=e.memoizedState;if(r!==null){a.pending=null;var g=r=r.next;do c=t(c,g.action),g=g.next;while(g!==r);ye(c,e.memoizedState)||(Xt=!0),e.memoizedState=c,e.baseQueue===null&&(e.baseState=c),a.lastRenderedState=c}return[c,o]}function em(t,e,a){var o=ct,r=Bt(),c=xt;if(c){if(a===void 0)throw Error(l(407));a=a()}else a=e();var g=!ye((jt||r).memoizedState,a);if(g&&(r.memoizedState=a,Xt=!0),r=r.queue,Pr(nm.bind(null,o,r,t),[t]),r.getSnapshot!==e||g||Yt!==null&&Yt.memoizedState.tag&1){if(o.flags|=2048,Qs(9,{destroy:void 0},sm.bind(null,o,r,a,e),null),It===null)throw Error(l(349));c||(ca&127)!==0||am(o,e,a)}return a}function am(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=ct.updateQueue,e===null?(e=gi(),ct.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function sm(t,e,a,o){e.value=a,e.getSnapshot=o,om(e)&&im(t)}function nm(t,e,a){return a(function(){om(e)&&im(t)})}function om(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!ye(t,a)}catch{return!0}}function im(t){var e=is(t,2);e!==null&&fe(e,t,2)}function Br(t){var e=re();if(typeof t=="function"){var a=t;if(t=a(),hs){Ga(!0);try{a()}finally{Ga(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:t},e}function lm(t,e,a,o){return t.baseState=a,Hr(t,jt,typeof o=="function"?o:ua)}function q1(t,e,a,o,r){if(xi(t))throw Error(l(485));if(t=e.action,t!==null){var c={payload:r,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){c.listeners.push(g)}};z.T!==null?a(!0):c.isTransition=!1,o(c),a=e.pending,a===null?(c.next=e.pending=c,rm(e,c)):(c.next=a.next,e.pending=a.next=c)}}function rm(t,e){var a=e.action,o=e.payload,r=t.state;if(e.isTransition){var c=z.T,g={};z.T=g;try{var x=a(r,o),v=z.S;v!==null&&v(g,x),cm(t,e,x)}catch(w){Ur(t,e,w)}finally{c!==null&&g.types!==null&&(c.types=g.types),z.T=c}}else try{c=a(r,o),cm(t,e,c)}catch(w){Ur(t,e,w)}}function cm(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){um(t,e,o)},function(o){return Ur(t,e,o)}):um(t,e,a)}function um(t,e,a){e.status="fulfilled",e.value=a,pm(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,rm(t,a)))}function Ur(t,e,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do e.status="rejected",e.reason=a,pm(e),e=e.next;while(e!==o)}t.action=null}function pm(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function dm(t,e){return e}function mm(t,e){if(xt){var a=It.formState;if(a!==null){t:{var o=ct;if(xt){if(Et){e:{for(var r=Et,c=De;r.nodeType!==8;){if(!c){r=null;break e}if(r=Re(r.nextSibling),r===null){r=null;break e}}c=r.data,r=c==="F!"||c==="F"?r:null}if(r){Et=Re(r.nextSibling),o=r.data==="F!";break t}}Aa(o)}o=!1}o&&(e=a[0])}}return a=re(),a.memoizedState=a.baseState=e,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dm,lastRenderedState:e},a.queue=o,a=Em.bind(null,ct,o),o.dispatch=a,o=Br(!1),c=Zr.bind(null,ct,!1,o.queue),o=re(),r={state:e,dispatch:null,action:t,pending:null},o.queue=r,a=q1.bind(null,ct,r,c,a),r.dispatch=a,o.memoizedState=t,[e,a,!1]}function gm(t){var e=Bt();return hm(e,jt,t)}function hm(t,e,a){if(e=Hr(t,e,dm)[0],t=bi(ua)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var o=Kn(e)}catch(g){throw g===Ys?ii:g}else o=e;e=Bt();var r=e.queue,c=r.dispatch;return a!==e.memoizedState&&(ct.flags|=2048,Qs(9,{destroy:void 0},C1.bind(null,r,a),null)),[o,c,t]}function C1(t,e){t.action=e}function bm(t){var e=Bt(),a=jt;if(a!==null)return hm(e,a,t);Bt(),e=e.memoizedState,a=Bt();var o=a.queue.dispatch;return a.memoizedState=t,[e,o,!1]}function Qs(t,e,a,o){return t={tag:t,create:a,deps:o,inst:e,next:null},e=ct.updateQueue,e===null&&(e=gi(),ct.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,e.lastEffect=t),t}function fm(){return Bt().memoizedState}function fi(t,e,a,o){var r=re();ct.flags|=t,r.memoizedState=Qs(1|e,{destroy:void 0},a,o===void 0?null:o)}function _i(t,e,a,o){var r=Bt();o=o===void 0?null:o;var c=r.memoizedState.inst;jt!==null&&o!==null&&qr(o,jt.memoizedState.deps)?r.memoizedState=Qs(e,c,a,o):(ct.flags|=t,r.memoizedState=Qs(1|e,c,a,o))}function _m(t,e){fi(8390656,8,t,e)}function Pr(t,e){_i(2048,8,t,e)}function D1(t){ct.flags|=4;var e=ct.updateQueue;if(e===null)e=gi(),ct.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function xm(t){var e=Bt().memoizedState;return D1({ref:e,nextImpl:t}),function(){if((Gt&2)!==0)throw Error(l(440));return e.impl.apply(void 0,arguments)}}function km(t,e){return _i(4,2,t,e)}function ym(t,e){return _i(4,4,t,e)}function Gm(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function vm(t,e,a){a=a!=null?a.concat([t]):null,_i(4,4,Gm.bind(null,e,t),a)}function Yr(){}function Mm(t,e){var a=Bt();e=e===void 0?null:e;var o=a.memoizedState;return e!==null&&qr(e,o[1])?o[0]:(a.memoizedState=[t,e],t)}function Tm(t,e){var a=Bt();e=e===void 0?null:e;var o=a.memoizedState;if(e!==null&&qr(e,o[1]))return o[0];if(o=t(),hs){Ga(!0);try{t()}finally{Ga(!1)}}return a.memoizedState=[o,e],o}function Xr(t,e,a){return a===void 0||(ca&1073741824)!==0&&(bt&261930)===0?t.memoizedState=e:(t.memoizedState=a,t=jg(),ct.lanes|=t,Da|=t,a)}function jm(t,e,a,o){return ye(a,e)?a:Ks.current!==null?(t=Xr(t,a,o),ye(t,e)||(Xt=!0),t):(ca&42)===0||(ca&1073741824)!==0&&(bt&261930)===0?(Xt=!0,t.memoizedState=a):(t=jg(),ct.lanes|=t,Da|=t,e)}function Am(t,e,a,o,r){var c=Q.p;Q.p=c!==0&&8>c?c:8;var g=z.T,x={};z.T=x,Zr(t,!1,e,a);try{var v=r(),w=z.S;if(w!==null&&w(x,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var H=w1(v,o);Fn(t,e,H,Ae(t))}else Fn(t,e,o,Ae(t))}catch(U){Fn(t,e,{then:function(){},status:"rejected",reason:U},Ae())}finally{Q.p=c,g!==null&&x.types!==null&&(g.types=x.types),z.T=g}}function O1(){}function Kr(t,e,a,o){if(t.tag!==5)throw Error(l(476));var r=Sm(t).queue;Am(t,r,e,$,a===null?O1:function(){return Im(t),a(o)})}function Sm(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:$},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Im(t){var e=Sm(t);e.next===null&&(e=t.alternate.memoizedState),Fn(t,e.next.queue,{},Ae())}function Fr(){return ee(po)}function Vm(){return Bt().memoizedState}function wm(){return Bt().memoizedState}function R1(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=Ae();t=Va(a);var o=wa(e,t,a);o!==null&&(fe(o,e,a),Un(o,e,a)),e={cache:vr()},t.payload=e;return}e=e.return}}function z1(t,e,a){var o=Ae();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},xi(t)?Nm(e,a):(a=dr(t,e,a,o),a!==null&&(fe(a,t,o),qm(a,e,o)))}function Em(t,e,a){var o=Ae();Fn(t,e,a,o)}function Fn(t,e,a,o){var r={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(xi(t))Nm(e,r);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=e.lastRenderedReducer,c!==null))try{var g=e.lastRenderedState,x=c(g,a);if(r.hasEagerState=!0,r.eagerState=x,ye(x,g))return Wo(t,e,r,0),It===null&&$o(),!1}catch{}finally{}if(a=dr(t,e,r,o),a!==null)return fe(a,t,o),qm(a,e,o),!0}return!1}function Zr(t,e,a,o){if(o={lane:2,revertLane:Ac(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},xi(t)){if(e)throw Error(l(479))}else e=dr(t,a,o,2),e!==null&&fe(e,t,2)}function xi(t){var e=t.alternate;return t===ct||e!==null&&e===ct}function Nm(t,e){Fs=di=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function qm(t,e,a){if((a&4194048)!==0){var o=e.lanes;o&=t.pendingLanes,a|=o,e.lanes=a,zp(t,a)}}var Zn={readContext:ee,use:hi,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useLayoutEffect:Dt,useInsertionEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useSyncExternalStore:Dt,useId:Dt,useHostTransitionStatus:Dt,useFormState:Dt,useActionState:Dt,useOptimistic:Dt,useMemoCache:Dt,useCacheRefresh:Dt};Zn.useEffectEvent=Dt;var Cm={readContext:ee,use:hi,useCallback:function(t,e){return re().memoizedState=[t,e===void 0?null:e],t},useContext:ee,useEffect:_m,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,fi(4194308,4,Gm.bind(null,e,t),a)},useLayoutEffect:function(t,e){return fi(4194308,4,t,e)},useInsertionEffect:function(t,e){fi(4,2,t,e)},useMemo:function(t,e){var a=re();e=e===void 0?null:e;var o=t();if(hs){Ga(!0);try{t()}finally{Ga(!1)}}return a.memoizedState=[o,e],o},useReducer:function(t,e,a){var o=re();if(a!==void 0){var r=a(e);if(hs){Ga(!0);try{a(e)}finally{Ga(!1)}}}else r=e;return o.memoizedState=o.baseState=r,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},o.queue=t,t=t.dispatch=z1.bind(null,ct,t),[o.memoizedState,t]},useRef:function(t){var e=re();return t={current:t},e.memoizedState=t},useState:function(t){t=Br(t);var e=t.queue,a=Em.bind(null,ct,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:Yr,useDeferredValue:function(t,e){var a=re();return Xr(a,t,e)},useTransition:function(){var t=Br(!1);return t=Am.bind(null,ct,t.queue,!0,!1),re().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var o=ct,r=re();if(xt){if(a===void 0)throw Error(l(407));a=a()}else{if(a=e(),It===null)throw Error(l(349));(bt&127)!==0||am(o,e,a)}r.memoizedState=a;var c={value:a,getSnapshot:e};return r.queue=c,_m(nm.bind(null,o,c,t),[t]),o.flags|=2048,Qs(9,{destroy:void 0},sm.bind(null,o,c,a,e),null),a},useId:function(){var t=re(),e=It.identifierPrefix;if(xt){var a=Ze,o=Fe;a=(o&~(1<<32-ke(o)-1)).toString(32)+a,e="_"+e+"R_"+a,a=mi++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=E1++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Fr,useFormState:mm,useActionState:mm,useOptimistic:function(t){var e=re();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=Zr.bind(null,ct,!0,a),a.dispatch=e,[t,e]},useMemoCache:zr,useCacheRefresh:function(){return re().memoizedState=R1.bind(null,ct)},useEffectEvent:function(t){var e=re(),a={impl:t};return e.memoizedState=a,function(){if((Gt&2)!==0)throw Error(l(440));return a.impl.apply(void 0,arguments)}}},Qr={readContext:ee,use:hi,useCallback:Mm,useContext:ee,useEffect:Pr,useImperativeHandle:vm,useInsertionEffect:km,useLayoutEffect:ym,useMemo:Tm,useReducer:bi,useRef:fm,useState:function(){return bi(ua)},useDebugValue:Yr,useDeferredValue:function(t,e){var a=Bt();return jm(a,jt.memoizedState,t,e)},useTransition:function(){var t=bi(ua)[0],e=Bt().memoizedState;return[typeof t=="boolean"?t:Kn(t),e]},useSyncExternalStore:em,useId:Vm,useHostTransitionStatus:Fr,useFormState:gm,useActionState:gm,useOptimistic:function(t,e){var a=Bt();return lm(a,jt,t,e)},useMemoCache:zr,useCacheRefresh:wm};Qr.useEffectEvent=xm;var Dm={readContext:ee,use:hi,useCallback:Mm,useContext:ee,useEffect:Pr,useImperativeHandle:vm,useInsertionEffect:km,useLayoutEffect:ym,useMemo:Tm,useReducer:Lr,useRef:fm,useState:function(){return Lr(ua)},useDebugValue:Yr,useDeferredValue:function(t,e){var a=Bt();return jt===null?Xr(a,t,e):jm(a,jt.memoizedState,t,e)},useTransition:function(){var t=Lr(ua)[0],e=Bt().memoizedState;return[typeof t=="boolean"?t:Kn(t),e]},useSyncExternalStore:em,useId:Vm,useHostTransitionStatus:Fr,useFormState:bm,useActionState:bm,useOptimistic:function(t,e){var a=Bt();return jt!==null?lm(a,jt,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:zr,useCacheRefresh:wm};Dm.useEffectEvent=xm;function Jr(t,e,a,o){e=t.memoizedState,a=a(o,e),a=a==null?e:k({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var $r={enqueueSetState:function(t,e,a){t=t._reactInternals;var o=Ae(),r=Va(o);r.payload=e,a!=null&&(r.callback=a),e=wa(t,r,o),e!==null&&(fe(e,t,o),Un(e,t,o))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var o=Ae(),r=Va(o);r.tag=1,r.payload=e,a!=null&&(r.callback=a),e=wa(t,r,o),e!==null&&(fe(e,t,o),Un(e,t,o))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=Ae(),o=Va(a);o.tag=2,e!=null&&(o.callback=e),e=wa(t,o,a),e!==null&&(fe(e,t,a),Un(e,t,a))}};function Om(t,e,a,o,r,c,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,c,g):e.prototype&&e.prototype.isPureReactComponent?!Cn(a,o)||!Cn(r,c):!0}function Rm(t,e,a,o){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,o),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,o),e.state!==t&&$r.enqueueReplaceState(e,e.state,null)}function bs(t,e){var a=e;if("ref"in e){a={};for(var o in e)o!=="ref"&&(a[o]=e[o])}if(t=t.defaultProps){a===e&&(a=k({},a));for(var r in t)a[r]===void 0&&(a[r]=t[r])}return a}function zm(t){Jo(t)}function Hm(t){console.error(t)}function Lm(t){Jo(t)}function ki(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(o){setTimeout(function(){throw o})}}function Bm(t,e,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Wr(t,e,a){return a=Va(a),a.tag=3,a.payload={element:null},a.callback=function(){ki(t,e)},a}function Um(t){return t=Va(t),t.tag=3,t}function Pm(t,e,a,o){var r=a.type.getDerivedStateFromError;if(typeof r=="function"){var c=o.value;t.payload=function(){return r(c)},t.callback=function(){Bm(e,a,o)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){Bm(e,a,o),typeof r!="function"&&(Oa===null?Oa=new Set([this]):Oa.add(this));var x=o.stack;this.componentDidCatch(o.value,{componentStack:x!==null?x:""})})}function H1(t,e,a,o,r){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(e=a.alternate,e!==null&&Bs(e,a,r,!0),a=ve.current,a!==null){switch(a.tag){case 31:case 13:return Oe===null?Ei():a.alternate===null&&Ot===0&&(Ot=3),a.flags&=-257,a.flags|=65536,a.lanes=r,o===li?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([o]):e.add(o),Mc(t,o,r)),!1;case 22:return a.flags|=65536,o===li?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([o]):a.add(o)),Mc(t,o,r)),!1}throw Error(l(435,a.tag))}return Mc(t,o,r),Ei(),!1}if(xt)return e=ve.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=r,o!==_r&&(t=Error(l(422),{cause:o}),Rn(Ne(t,a)))):(o!==_r&&(e=Error(l(423),{cause:o}),Rn(Ne(e,a))),t=t.current.alternate,t.flags|=65536,r&=-r,t.lanes|=r,o=Ne(o,a),r=Wr(t.stateNode,o,r),Ir(t,r),Ot!==4&&(Ot=2)),!1;var c=Error(l(520),{cause:o});if(c=Ne(c,a),so===null?so=[c]:so.push(c),Ot!==4&&(Ot=2),e===null)return!0;o=Ne(o,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=r&-r,a.lanes|=t,t=Wr(a.stateNode,o,t),Ir(a,t),!1;case 1:if(e=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Oa===null||!Oa.has(c))))return a.flags|=65536,r&=-r,a.lanes|=r,r=Um(r),Pm(r,t,a,o),Ir(a,r),!1}a=a.return}while(a!==null);return!1}var tc=Error(l(461)),Xt=!1;function ae(t,e,a,o){e.child=t===null?Fd(e,null,a,o):gs(e,t.child,a,o)}function Ym(t,e,a,o,r){a=a.render;var c=e.ref;if("ref"in o){var g={};for(var x in o)x!=="ref"&&(g[x]=o[x])}else g=o;return us(e),o=Cr(t,e,a,g,c,r),x=Dr(),t!==null&&!Xt?(Or(t,e,r),pa(t,e,r)):(xt&&x&&br(e),e.flags|=1,ae(t,e,o,r),e.child)}function Xm(t,e,a,o,r){if(t===null){var c=a.type;return typeof c=="function"&&!mr(c)&&c.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=c,Km(t,e,c,o,r)):(t=ei(a.type,null,o,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(c=t.child,!rc(t,r)){var g=c.memoizedProps;if(a=a.compare,a=a!==null?a:Cn,a(g,o)&&t.ref===e.ref)return pa(t,e,r)}return e.flags|=1,t=oa(c,o),t.ref=e.ref,t.return=e,e.child=t}function Km(t,e,a,o,r){if(t!==null){var c=t.memoizedProps;if(Cn(c,o)&&t.ref===e.ref)if(Xt=!1,e.pendingProps=o=c,rc(t,r))(t.flags&131072)!==0&&(Xt=!0);else return e.lanes=t.lanes,pa(t,e,r)}return ec(t,e,a,o,r)}function Fm(t,e,a,o){var r=o.children,c=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((e.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,t!==null){for(o=e.child=t.child,r=0;o!==null;)r=r|o.lanes|o.childLanes,o=o.sibling;o=r&~c}else o=0,e.child=null;return Zm(t,e,c,a,o)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&oi(e,c!==null?c.cachePool:null),c!==null?Jd(e,c):wr(),$d(e);else return o=e.lanes=536870912,Zm(t,e,c!==null?c.baseLanes|a:a,a,o)}else c!==null?(oi(e,c.cachePool),Jd(e,c),Na(),e.memoizedState=null):(t!==null&&oi(e,null),wr(),Na());return ae(t,e,r,a),e.child}function Qn(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Zm(t,e,a,o,r){var c=Tr();return c=c===null?null:{parent:Pt._currentValue,pool:c},e.memoizedState={baseLanes:a,cachePool:c},t!==null&&oi(e,null),wr(),$d(e),t!==null&&Bs(t,e,o,!0),e.childLanes=r,null}function yi(t,e){return e=vi({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Qm(t,e,a){return gs(e,t.child,null,a),t=yi(e,e.pendingProps),t.flags|=2,Me(e),e.memoizedState=null,t}function L1(t,e,a){var o=e.pendingProps,r=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(xt){if(o.mode==="hidden")return t=yi(e,o),e.lanes=536870912,Qn(null,t);if(Nr(e),(t=Et)?(t=rh(t,De),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ta!==null?{id:Fe,overflow:Ze}:null,retryLane:536870912,hydrationErrors:null},a=Nd(t),a.return=e,e.child=a,te=e,Et=null)):t=null,t===null)throw Aa(e);return e.lanes=536870912,null}return yi(e,o)}var c=t.memoizedState;if(c!==null){var g=c.dehydrated;if(Nr(e),r)if(e.flags&256)e.flags&=-257,e=Qm(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(l(558));else if(Xt||Bs(t,e,a,!1),r=(a&t.childLanes)!==0,Xt||r){if(o=It,o!==null&&(g=Hp(o,a),g!==0&&g!==c.retryLane))throw c.retryLane=g,is(t,g),fe(o,t,g),tc;Ei(),e=Qm(t,e,a)}else t=c.treeContext,Et=Re(g.nextSibling),te=e,xt=!0,ja=null,De=!1,t!==null&&Dd(e,t),e=yi(e,o),e.flags|=4096;return e}return t=oa(t.child,{mode:o.mode,children:o.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Gi(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(l(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function ec(t,e,a,o,r){return us(e),a=Cr(t,e,a,o,void 0,r),o=Dr(),t!==null&&!Xt?(Or(t,e,r),pa(t,e,r)):(xt&&o&&br(e),e.flags|=1,ae(t,e,a,r),e.child)}function Jm(t,e,a,o,r,c){return us(e),e.updateQueue=null,a=tm(e,o,a,r),Wd(t),o=Dr(),t!==null&&!Xt?(Or(t,e,c),pa(t,e,c)):(xt&&o&&br(e),e.flags|=1,ae(t,e,a,c),e.child)}function $m(t,e,a,o,r){if(us(e),e.stateNode===null){var c=Rs,g=a.contextType;typeof g=="object"&&g!==null&&(c=ee(g)),c=new a(o,c),e.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=$r,e.stateNode=c,c._reactInternals=e,c=e.stateNode,c.props=o,c.state=e.memoizedState,c.refs={},Ar(e),g=a.contextType,c.context=typeof g=="object"&&g!==null?ee(g):Rs,c.state=e.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Jr(e,a,g,o),c.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(g=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),g!==c.state&&$r.enqueueReplaceState(c,c.state,null),Yn(e,o,c,r),Pn(),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308),o=!0}else if(t===null){c=e.stateNode;var x=e.memoizedProps,v=bs(a,x);c.props=v;var w=c.context,H=a.contextType;g=Rs,typeof H=="object"&&H!==null&&(g=ee(H));var U=a.getDerivedStateFromProps;H=typeof U=="function"||typeof c.getSnapshotBeforeUpdate=="function",x=e.pendingProps!==x,H||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(x||w!==g)&&Rm(e,c,o,g),Ia=!1;var E=e.memoizedState;c.state=E,Yn(e,o,c,r),Pn(),w=e.memoizedState,x||E!==w||Ia?(typeof U=="function"&&(Jr(e,a,U,o),w=e.memoizedState),(v=Ia||Om(e,a,v,o,E,w,g))?(H||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(e.flags|=4194308)):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=o,e.memoizedState=w),c.props=o,c.state=w,c.context=g,o=v):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),o=!1)}else{c=e.stateNode,Sr(t,e),g=e.memoizedProps,H=bs(a,g),c.props=H,U=e.pendingProps,E=c.context,w=a.contextType,v=Rs,typeof w=="object"&&w!==null&&(v=ee(w)),x=a.getDerivedStateFromProps,(w=typeof x=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g!==U||E!==v)&&Rm(e,c,o,v),Ia=!1,E=e.memoizedState,c.state=E,Yn(e,o,c,r),Pn();var C=e.memoizedState;g!==U||E!==C||Ia||t!==null&&t.dependencies!==null&&si(t.dependencies)?(typeof x=="function"&&(Jr(e,a,x,o),C=e.memoizedState),(H=Ia||Om(e,a,H,o,E,C,v)||t!==null&&t.dependencies!==null&&si(t.dependencies))?(w||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(o,C,v),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(o,C,v)),typeof c.componentDidUpdate=="function"&&(e.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&E===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&E===t.memoizedState||(e.flags|=1024),e.memoizedProps=o,e.memoizedState=C),c.props=o,c.state=C,c.context=v,o=H):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&E===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&E===t.memoizedState||(e.flags|=1024),o=!1)}return c=o,Gi(t,e),o=(e.flags&128)!==0,c||o?(c=e.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:c.render(),e.flags|=1,t!==null&&o?(e.child=gs(e,t.child,null,r),e.child=gs(e,null,a,r)):ae(t,e,a,r),e.memoizedState=c.state,t=e.child):t=pa(t,e,r),t}function Wm(t,e,a,o){return rs(),e.flags|=256,ae(t,e,a,o),e.child}var ac={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sc(t){return{baseLanes:t,cachePool:Bd()}}function nc(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=je),t}function tg(t,e,a){var o=e.pendingProps,r=!1,c=(e.flags&128)!==0,g;if((g=c)||(g=t!==null&&t.memoizedState===null?!1:(Lt.current&2)!==0),g&&(r=!0,e.flags&=-129),g=(e.flags&32)!==0,e.flags&=-33,t===null){if(xt){if(r?Ea(e):Na(),(t=Et)?(t=rh(t,De),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ta!==null?{id:Fe,overflow:Ze}:null,retryLane:536870912,hydrationErrors:null},a=Nd(t),a.return=e,e.child=a,te=e,Et=null)):t=null,t===null)throw Aa(e);return Hc(t)?e.lanes=32:e.lanes=536870912,null}var x=o.children;return o=o.fallback,r?(Na(),r=e.mode,x=vi({mode:"hidden",children:x},r),o=ls(o,r,a,null),x.return=e,o.return=e,x.sibling=o,e.child=x,o=e.child,o.memoizedState=sc(a),o.childLanes=nc(t,g,a),e.memoizedState=ac,Qn(null,o)):(Ea(e),oc(e,x))}var v=t.memoizedState;if(v!==null&&(x=v.dehydrated,x!==null)){if(c)e.flags&256?(Ea(e),e.flags&=-257,e=ic(t,e,a)):e.memoizedState!==null?(Na(),e.child=t.child,e.flags|=128,e=null):(Na(),x=o.fallback,r=e.mode,o=vi({mode:"visible",children:o.children},r),x=ls(x,r,a,null),x.flags|=2,o.return=e,x.return=e,o.sibling=x,e.child=o,gs(e,t.child,null,a),o=e.child,o.memoizedState=sc(a),o.childLanes=nc(t,g,a),e.memoizedState=ac,e=Qn(null,o));else if(Ea(e),Hc(x)){if(g=x.nextSibling&&x.nextSibling.dataset,g)var w=g.dgst;g=w,o=Error(l(419)),o.stack="",o.digest=g,Rn({value:o,source:null,stack:null}),e=ic(t,e,a)}else if(Xt||Bs(t,e,a,!1),g=(a&t.childLanes)!==0,Xt||g){if(g=It,g!==null&&(o=Hp(g,a),o!==0&&o!==v.retryLane))throw v.retryLane=o,is(t,o),fe(g,t,o),tc;zc(x)||Ei(),e=ic(t,e,a)}else zc(x)?(e.flags|=192,e.child=t.child,e=null):(t=v.treeContext,Et=Re(x.nextSibling),te=e,xt=!0,ja=null,De=!1,t!==null&&Dd(e,t),e=oc(e,o.children),e.flags|=4096);return e}return r?(Na(),x=o.fallback,r=e.mode,v=t.child,w=v.sibling,o=oa(v,{mode:"hidden",children:o.children}),o.subtreeFlags=v.subtreeFlags&65011712,w!==null?x=oa(w,x):(x=ls(x,r,a,null),x.flags|=2),x.return=e,o.return=e,o.sibling=x,e.child=o,Qn(null,o),o=e.child,x=t.child.memoizedState,x===null?x=sc(a):(r=x.cachePool,r!==null?(v=Pt._currentValue,r=r.parent!==v?{parent:v,pool:v}:r):r=Bd(),x={baseLanes:x.baseLanes|a,cachePool:r}),o.memoizedState=x,o.childLanes=nc(t,g,a),e.memoizedState=ac,Qn(t.child,o)):(Ea(e),a=t.child,t=a.sibling,a=oa(a,{mode:"visible",children:o.children}),a.return=e,a.sibling=null,t!==null&&(g=e.deletions,g===null?(e.deletions=[t],e.flags|=16):g.push(t)),e.child=a,e.memoizedState=null,a)}function oc(t,e){return e=vi({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function vi(t,e){return t=Ge(22,t,null,e),t.lanes=0,t}function ic(t,e,a){return gs(e,t.child,null,a),t=oc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function eg(t,e,a){t.lanes|=e;var o=t.alternate;o!==null&&(o.lanes|=e),yr(t.return,e,a)}function lc(t,e,a,o,r,c){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:r,treeForkCount:c}:(g.isBackwards=e,g.rendering=null,g.renderingStartTime=0,g.last=o,g.tail=a,g.tailMode=r,g.treeForkCount=c)}function ag(t,e,a){var o=e.pendingProps,r=o.revealOrder,c=o.tail;o=o.children;var g=Lt.current,x=(g&2)!==0;if(x?(g=g&1|2,e.flags|=128):g&=1,J(Lt,g),ae(t,e,o,a),o=xt?On:0,!x&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&eg(t,a,e);else if(t.tag===19)eg(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(r){case"forwards":for(a=e.child,r=null;a!==null;)t=a.alternate,t!==null&&pi(t)===null&&(r=a),a=a.sibling;a=r,a===null?(r=e.child,e.child=null):(r=a.sibling,a.sibling=null),lc(e,!1,r,a,c,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&pi(t)===null){e.child=r;break}t=r.sibling,r.sibling=a,a=r,r=t}lc(e,!0,a,null,c,o);break;case"together":lc(e,!1,null,null,void 0,o);break;default:e.memoizedState=null}return e.child}function pa(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),Da|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(Bs(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(l(153));if(e.child!==null){for(t=e.child,a=oa(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=oa(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function rc(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&si(t)))}function B1(t,e,a){switch(e.tag){case 3:le(e,e.stateNode.containerInfo),Sa(e,Pt,t.memoizedState.cache),rs();break;case 27:case 5:Gn(e);break;case 4:le(e,e.stateNode.containerInfo);break;case 10:Sa(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Nr(e),null;break;case 13:var o=e.memoizedState;if(o!==null)return o.dehydrated!==null?(Ea(e),e.flags|=128,null):(a&e.child.childLanes)!==0?tg(t,e,a):(Ea(e),t=pa(t,e,a),t!==null?t.sibling:null);Ea(e);break;case 19:var r=(t.flags&128)!==0;if(o=(a&e.childLanes)!==0,o||(Bs(t,e,a,!1),o=(a&e.childLanes)!==0),r){if(o)return ag(t,e,a);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),J(Lt,Lt.current),o)break;return null;case 22:return e.lanes=0,Fm(t,e,a,e.pendingProps);case 24:Sa(e,Pt,t.memoizedState.cache)}return pa(t,e,a)}function sg(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)Xt=!0;else{if(!rc(t,a)&&(e.flags&128)===0)return Xt=!1,B1(t,e,a);Xt=(t.flags&131072)!==0}else Xt=!1,xt&&(e.flags&1048576)!==0&&Cd(e,On,e.index);switch(e.lanes=0,e.tag){case 16:t:{var o=e.pendingProps;if(t=ds(e.elementType),e.type=t,typeof t=="function")mr(t)?(o=bs(t,o),e.tag=1,e=$m(null,e,t,o,a)):(e.tag=0,e=ec(null,e,t,o,a));else{if(t!=null){var r=t.$$typeof;if(r===N){e.tag=11,e=Ym(null,e,t,o,a);break t}else if(r===D){e.tag=14,e=Xm(null,e,t,o,a);break t}}throw e=Ct(t)||t,Error(l(306,e,""))}}return e;case 0:return ec(t,e,e.type,e.pendingProps,a);case 1:return o=e.type,r=bs(o,e.pendingProps),$m(t,e,o,r,a);case 3:t:{if(le(e,e.stateNode.containerInfo),t===null)throw Error(l(387));o=e.pendingProps;var c=e.memoizedState;r=c.element,Sr(t,e),Yn(e,o,null,a);var g=e.memoizedState;if(o=g.cache,Sa(e,Pt,o),o!==c.cache&&Gr(e,[Pt],a,!0),Pn(),o=g.element,c.isDehydrated)if(c={element:o,isDehydrated:!1,cache:g.cache},e.updateQueue.baseState=c,e.memoizedState=c,e.flags&256){e=Wm(t,e,o,a);break t}else if(o!==r){r=Ne(Error(l(424)),e),Rn(r),e=Wm(t,e,o,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Et=Re(t.firstChild),te=e,xt=!0,ja=null,De=!0,a=Fd(e,null,o,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(rs(),o===r){e=pa(t,e,a);break t}ae(t,e,o,a)}e=e.child}return e;case 26:return Gi(t,e),t===null?(a=gh(e.type,null,e.pendingProps,null))?e.memoizedState=a:xt||(a=e.type,t=e.pendingProps,o=zi(dt.current).createElement(a),o[Wt]=e,o[pe]=t,se(o,a,t),Jt(o),e.stateNode=o):e.memoizedState=gh(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Gn(e),t===null&&xt&&(o=e.stateNode=ph(e.type,e.pendingProps,dt.current),te=e,De=!0,r=Et,La(e.type)?(Lc=r,Et=Re(o.firstChild)):Et=r),ae(t,e,e.pendingProps.children,a),Gi(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&xt&&((r=o=Et)&&(o=_x(o,e.type,e.pendingProps,De),o!==null?(e.stateNode=o,te=e,Et=Re(o.firstChild),De=!1,r=!0):r=!1),r||Aa(e)),Gn(e),r=e.type,c=e.pendingProps,g=t!==null?t.memoizedProps:null,o=c.children,Dc(r,c)?o=null:g!==null&&Dc(r,g)&&(e.flags|=32),e.memoizedState!==null&&(r=Cr(t,e,N1,null,null,a),po._currentValue=r),Gi(t,e),ae(t,e,o,a),e.child;case 6:return t===null&&xt&&((t=a=Et)&&(a=xx(a,e.pendingProps,De),a!==null?(e.stateNode=a,te=e,Et=null,t=!0):t=!1),t||Aa(e)),null;case 13:return tg(t,e,a);case 4:return le(e,e.stateNode.containerInfo),o=e.pendingProps,t===null?e.child=gs(e,null,o,a):ae(t,e,o,a),e.child;case 11:return Ym(t,e,e.type,e.pendingProps,a);case 7:return ae(t,e,e.pendingProps,a),e.child;case 8:return ae(t,e,e.pendingProps.children,a),e.child;case 12:return ae(t,e,e.pendingProps.children,a),e.child;case 10:return o=e.pendingProps,Sa(e,e.type,o.value),ae(t,e,o.children,a),e.child;case 9:return r=e.type._context,o=e.pendingProps.children,us(e),r=ee(r),o=o(r),e.flags|=1,ae(t,e,o,a),e.child;case 14:return Xm(t,e,e.type,e.pendingProps,a);case 15:return Km(t,e,e.type,e.pendingProps,a);case 19:return ag(t,e,a);case 31:return L1(t,e,a);case 22:return Fm(t,e,a,e.pendingProps);case 24:return us(e),o=ee(Pt),t===null?(r=Tr(),r===null&&(r=It,c=vr(),r.pooledCache=c,c.refCount++,c!==null&&(r.pooledCacheLanes|=a),r=c),e.memoizedState={parent:o,cache:r},Ar(e),Sa(e,Pt,r)):((t.lanes&a)!==0&&(Sr(t,e),Yn(e,null,null,a),Pn()),r=t.memoizedState,c=e.memoizedState,r.parent!==o?(r={parent:o,cache:o},e.memoizedState=r,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=r),Sa(e,Pt,o)):(o=c.cache,Sa(e,Pt,o),o!==r.cache&&Gr(e,[Pt],a,!0))),ae(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(l(156,e.tag))}function da(t){t.flags|=4}function cc(t,e,a,o,r){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(r&335544128)===r)if(t.stateNode.complete)t.flags|=8192;else if(Vg())t.flags|=8192;else throw ms=li,jr}else t.flags&=-16777217}function ng(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!xh(e))if(Vg())t.flags|=8192;else throw ms=li,jr}function Mi(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Op():536870912,t.lanes|=e,tn|=e)}function Jn(t,e){if(!xt)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(e)for(var r=t.child;r!==null;)a|=r.lanes|r.childLanes,o|=r.subtreeFlags&65011712,o|=r.flags&65011712,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)a|=r.lanes|r.childLanes,o|=r.subtreeFlags,o|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=o,t.childLanes=a,e}function U1(t,e,a){var o=e.pendingProps;switch(fr(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nt(e),null;case 1:return Nt(e),null;case 3:return a=e.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),e.memoizedState.cache!==o&&(e.flags|=2048),ra(Pt),Ht(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ls(e)?da(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,xr())),Nt(e),null;case 26:var r=e.type,c=e.memoizedState;return t===null?(da(e),c!==null?(Nt(e),ng(e,c)):(Nt(e),cc(e,r,null,o,a))):c?c!==t.memoizedState?(da(e),Nt(e),ng(e,c)):(Nt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==o&&da(e),Nt(e),cc(e,r,t,o,a)),null;case 27:if(Co(e),a=dt.current,r=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==o&&da(e);else{if(!o){if(e.stateNode===null)throw Error(l(166));return Nt(e),null}t=et.current,Ls(e)?Od(e):(t=ph(r,o,a),e.stateNode=t,da(e))}return Nt(e),null;case 5:if(Co(e),r=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==o&&da(e);else{if(!o){if(e.stateNode===null)throw Error(l(166));return Nt(e),null}if(c=et.current,Ls(e))Od(e);else{var g=zi(dt.current);switch(c){case 1:c=g.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:c=g.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":c=g.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":c=g.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":c=g.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof o.is=="string"?g.createElement("select",{is:o.is}):g.createElement("select"),o.multiple?c.multiple=!0:o.size&&(c.size=o.size);break;default:c=typeof o.is=="string"?g.createElement(r,{is:o.is}):g.createElement(r)}}c[Wt]=e,c[pe]=o;t:for(g=e.child;g!==null;){if(g.tag===5||g.tag===6)c.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break t;for(;g.sibling===null;){if(g.return===null||g.return===e)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}e.stateNode=c;t:switch(se(c,r,o),r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&da(e)}}return Nt(e),cc(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==o&&da(e);else{if(typeof o!="string"&&e.stateNode===null)throw Error(l(166));if(t=dt.current,Ls(e)){if(t=e.stateNode,a=e.memoizedProps,o=null,r=te,r!==null)switch(r.tag){case 27:case 5:o=r.memoizedProps}t[Wt]=e,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||th(t.nodeValue,a)),t||Aa(e,!0)}else t=zi(t).createTextNode(o),t[Wt]=e,e.stateNode=t}return Nt(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(o=Ls(e),a!==null){if(t===null){if(!o)throw Error(l(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(l(557));t[Wt]=e}else rs(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Nt(e),t=!1}else a=xr(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(Me(e),e):(Me(e),null);if((e.flags&128)!==0)throw Error(l(558))}return Nt(e),null;case 13:if(o=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(r=Ls(e),o!==null&&o.dehydrated!==null){if(t===null){if(!r)throw Error(l(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(l(317));r[Wt]=e}else rs(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Nt(e),r=!1}else r=xr(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),r=!0;if(!r)return e.flags&256?(Me(e),e):(Me(e),null)}return Me(e),(e.flags&128)!==0?(e.lanes=a,e):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=e.child,r=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(r=o.alternate.memoizedState.cachePool.pool),c=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(c=o.memoizedState.cachePool.pool),c!==r&&(o.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),Mi(e,e.updateQueue),Nt(e),null);case 4:return Ht(),t===null&&wc(e.stateNode.containerInfo),Nt(e),null;case 10:return ra(e.type),Nt(e),null;case 19:if(P(Lt),o=e.memoizedState,o===null)return Nt(e),null;if(r=(e.flags&128)!==0,c=o.rendering,c===null)if(r)Jn(o,!1);else{if(Ot!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(c=pi(t),c!==null){for(e.flags|=128,Jn(o,!1),t=c.updateQueue,e.updateQueue=t,Mi(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Ed(a,t),a=a.sibling;return J(Lt,Lt.current&1|2),xt&&ia(e,o.treeForkCount),e.child}t=t.sibling}o.tail!==null&&_e()>Ii&&(e.flags|=128,r=!0,Jn(o,!1),e.lanes=4194304)}else{if(!r)if(t=pi(c),t!==null){if(e.flags|=128,r=!0,t=t.updateQueue,e.updateQueue=t,Mi(e,t),Jn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!c.alternate&&!xt)return Nt(e),null}else 2*_e()-o.renderingStartTime>Ii&&a!==536870912&&(e.flags|=128,r=!0,Jn(o,!1),e.lanes=4194304);o.isBackwards?(c.sibling=e.child,e.child=c):(t=o.last,t!==null?t.sibling=c:e.child=c,o.last=c)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=_e(),t.sibling=null,a=Lt.current,J(Lt,r?a&1|2:a&1),xt&&ia(e,o.treeForkCount),t):(Nt(e),null);case 22:case 23:return Me(e),Er(),o=e.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(e.flags|=8192):o&&(e.flags|=8192),o?(a&536870912)!==0&&(e.flags&128)===0&&(Nt(e),e.subtreeFlags&6&&(e.flags|=8192)):Nt(e),a=e.updateQueue,a!==null&&Mi(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),o!==a&&(e.flags|=2048),t!==null&&P(ps),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),ra(Pt),Nt(e),null;case 25:return null;case 30:return null}throw Error(l(156,e.tag))}function P1(t,e){switch(fr(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ra(Pt),Ht(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Co(e),null;case 31:if(e.memoizedState!==null){if(Me(e),e.alternate===null)throw Error(l(340));rs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Me(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(l(340));rs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return P(Lt),null;case 4:return Ht(),null;case 10:return ra(e.type),null;case 22:case 23:return Me(e),Er(),t!==null&&P(ps),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return ra(Pt),null;case 25:return null;default:return null}}function og(t,e){switch(fr(e),e.tag){case 3:ra(Pt),Ht();break;case 26:case 27:case 5:Co(e);break;case 4:Ht();break;case 31:e.memoizedState!==null&&Me(e);break;case 13:Me(e);break;case 19:P(Lt);break;case 10:ra(e.type);break;case 22:case 23:Me(e),Er(),t!==null&&P(ps);break;case 24:ra(Pt)}}function $n(t,e){try{var a=e.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var r=o.next;a=r;do{if((a.tag&t)===t){o=void 0;var c=a.create,g=a.inst;o=c(),g.destroy=o}a=a.next}while(a!==r)}}catch(x){Tt(e,e.return,x)}}function qa(t,e,a){try{var o=e.updateQueue,r=o!==null?o.lastEffect:null;if(r!==null){var c=r.next;o=c;do{if((o.tag&t)===t){var g=o.inst,x=g.destroy;if(x!==void 0){g.destroy=void 0,r=e;var v=a,w=x;try{w()}catch(H){Tt(r,v,H)}}}o=o.next}while(o!==c)}}catch(H){Tt(e,e.return,H)}}function ig(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{Qd(e,a)}catch(o){Tt(t,t.return,o)}}}function lg(t,e,a){a.props=bs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Tt(t,e,o)}}function Wn(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(r){Tt(t,e,r)}}function Qe(t,e){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(r){Tt(t,e,r)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(r){Tt(t,e,r)}else a.current=null}function rg(t){var e=t.type,a=t.memoizedProps,o=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(r){Tt(t,t.return,r)}}function uc(t,e,a){try{var o=t.stateNode;dx(o,t.type,a,e),o[pe]=e}catch(r){Tt(t,t.return,r)}}function cg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&La(t.type)||t.tag===4}function pc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||cg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&La(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function dc(t,e,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=sa));else if(o!==4&&(o===27&&La(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(dc(t,e,a),t=t.sibling;t!==null;)dc(t,e,a),t=t.sibling}function Ti(t,e,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(o!==4&&(o===27&&La(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Ti(t,e,a),t=t.sibling;t!==null;)Ti(t,e,a),t=t.sibling}function ug(t){var e=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,r=e.attributes;r.length;)e.removeAttributeNode(r[0]);se(e,o,a),e[Wt]=t,e[pe]=a}catch(c){Tt(t,t.return,c)}}var ma=!1,Kt=!1,mc=!1,pg=typeof WeakSet=="function"?WeakSet:Set,$t=null;function Y1(t,e){if(t=t.containerInfo,qc=Xi,t=vd(t),ir(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var r=o.anchorOffset,c=o.focusNode;o=o.focusOffset;try{a.nodeType,c.nodeType}catch{a=null;break t}var g=0,x=-1,v=-1,w=0,H=0,U=t,E=null;e:for(;;){for(var C;U!==a||r!==0&&U.nodeType!==3||(x=g+r),U!==c||o!==0&&U.nodeType!==3||(v=g+o),U.nodeType===3&&(g+=U.nodeValue.length),(C=U.firstChild)!==null;)E=U,U=C;for(;;){if(U===t)break e;if(E===a&&++w===r&&(x=g),E===c&&++H===o&&(v=g),(C=U.nextSibling)!==null)break;U=E,E=U.parentNode}U=C}a=x===-1||v===-1?null:{start:x,end:v}}else a=null}a=a||{start:0,end:0}}else a=null;for(Cc={focusedElem:t,selectionRange:a},Xi=!1,$t=e;$t!==null;)if(e=$t,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$t=t;else for(;$t!==null;){switch(e=$t,c=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)r=t[a],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&c!==null){t=void 0,a=e,r=c.memoizedProps,c=c.memoizedState,o=a.stateNode;try{var W=bs(a.type,r);t=o.getSnapshotBeforeUpdate(W,c),o.__reactInternalSnapshotBeforeUpdate=t}catch(ot){Tt(a,a.return,ot)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)Rc(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Rc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(l(163))}if(t=e.sibling,t!==null){t.return=e.return,$t=t;break}$t=e.return}}function dg(t,e,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ha(t,a),o&4&&$n(5,a);break;case 1:if(ha(t,a),o&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(g){Tt(a,a.return,g)}else{var r=bs(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(r,e,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Tt(a,a.return,g)}}o&64&&ig(a),o&512&&Wn(a,a.return);break;case 3:if(ha(t,a),o&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Qd(t,e)}catch(g){Tt(a,a.return,g)}}break;case 27:e===null&&o&4&&ug(a);case 26:case 5:ha(t,a),e===null&&o&4&&rg(a),o&512&&Wn(a,a.return);break;case 12:ha(t,a);break;case 31:ha(t,a),o&4&&hg(t,a);break;case 13:ha(t,a),o&4&&bg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=tx.bind(null,a),kx(t,a))));break;case 22:if(o=a.memoizedState!==null||ma,!o){e=e!==null&&e.memoizedState!==null||Kt,r=ma;var c=Kt;ma=o,(Kt=e)&&!c?ba(t,a,(a.subtreeFlags&8772)!==0):ha(t,a),ma=r,Kt=c}break;case 30:break;default:ha(t,a)}}function mg(t){var e=t.alternate;e!==null&&(t.alternate=null,mg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Ul(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var qt=null,me=!1;function ga(t,e,a){for(a=a.child;a!==null;)gg(t,e,a),a=a.sibling}function gg(t,e,a){if(xe&&typeof xe.onCommitFiberUnmount=="function")try{xe.onCommitFiberUnmount(vn,a)}catch{}switch(a.tag){case 26:Kt||Qe(a,e),ga(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Kt||Qe(a,e);var o=qt,r=me;La(a.type)&&(qt=a.stateNode,me=!1),ga(t,e,a),ro(a.stateNode),qt=o,me=r;break;case 5:Kt||Qe(a,e);case 6:if(o=qt,r=me,qt=null,ga(t,e,a),qt=o,me=r,qt!==null)if(me)try{(qt.nodeType===9?qt.body:qt.nodeName==="HTML"?qt.ownerDocument.body:qt).removeChild(a.stateNode)}catch(c){Tt(a,e,c)}else try{qt.removeChild(a.stateNode)}catch(c){Tt(a,e,c)}break;case 18:qt!==null&&(me?(t=qt,ih(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),cn(t)):ih(qt,a.stateNode));break;case 4:o=qt,r=me,qt=a.stateNode.containerInfo,me=!0,ga(t,e,a),qt=o,me=r;break;case 0:case 11:case 14:case 15:qa(2,a,e),Kt||qa(4,a,e),ga(t,e,a);break;case 1:Kt||(Qe(a,e),o=a.stateNode,typeof o.componentWillUnmount=="function"&&lg(a,e,o)),ga(t,e,a);break;case 21:ga(t,e,a);break;case 22:Kt=(o=Kt)||a.memoizedState!==null,ga(t,e,a),Kt=o;break;default:ga(t,e,a)}}function hg(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{cn(t)}catch(a){Tt(e,e.return,a)}}}function bg(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{cn(t)}catch(a){Tt(e,e.return,a)}}function X1(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new pg),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new pg),e;default:throw Error(l(435,t.tag))}}function ji(t,e){var a=X1(t);e.forEach(function(o){if(!a.has(o)){a.add(o);var r=ex.bind(null,t,o);o.then(r,r)}})}function ge(t,e){var a=e.deletions;if(a!==null)for(var o=0;o<a.length;o++){var r=a[o],c=t,g=e,x=g;t:for(;x!==null;){switch(x.tag){case 27:if(La(x.type)){qt=x.stateNode,me=!1;break t}break;case 5:qt=x.stateNode,me=!1;break t;case 3:case 4:qt=x.stateNode.containerInfo,me=!0;break t}x=x.return}if(qt===null)throw Error(l(160));gg(c,g,r),qt=null,me=!1,c=r.alternate,c!==null&&(c.return=null),r.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)fg(e,t),e=e.sibling}var Ue=null;function fg(t,e){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ge(e,t),he(t),o&4&&(qa(3,t,t.return),$n(3,t),qa(5,t,t.return));break;case 1:ge(e,t),he(t),o&512&&(Kt||a===null||Qe(a,a.return)),o&64&&ma&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var r=Ue;if(ge(e,t),he(t),o&512&&(Kt||a===null||Qe(a,a.return)),o&4){var c=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){t:{o=t.type,a=t.memoizedProps,r=r.ownerDocument||r;e:switch(o){case"title":c=r.getElementsByTagName("title")[0],(!c||c[jn]||c[Wt]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=r.createElement(o),r.head.insertBefore(c,r.querySelector("head > title"))),se(c,o,a),c[Wt]=t,Jt(c),o=c;break t;case"link":var g=fh("link","href",r).get(o+(a.href||""));if(g){for(var x=0;x<g.length;x++)if(c=g[x],c.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&c.getAttribute("rel")===(a.rel==null?null:a.rel)&&c.getAttribute("title")===(a.title==null?null:a.title)&&c.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(x,1);break e}}c=r.createElement(o),se(c,o,a),r.head.appendChild(c);break;case"meta":if(g=fh("meta","content",r).get(o+(a.content||""))){for(x=0;x<g.length;x++)if(c=g[x],c.getAttribute("content")===(a.content==null?null:""+a.content)&&c.getAttribute("name")===(a.name==null?null:a.name)&&c.getAttribute("property")===(a.property==null?null:a.property)&&c.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&c.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(x,1);break e}}c=r.createElement(o),se(c,o,a),r.head.appendChild(c);break;default:throw Error(l(468,o))}c[Wt]=t,Jt(c),o=c}t.stateNode=o}else _h(r,t.type,t.stateNode);else t.stateNode=bh(r,o,t.memoizedProps);else c!==o?(c===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):c.count--,o===null?_h(r,t.type,t.stateNode):bh(r,o,t.memoizedProps)):o===null&&t.stateNode!==null&&uc(t,t.memoizedProps,a.memoizedProps)}break;case 27:ge(e,t),he(t),o&512&&(Kt||a===null||Qe(a,a.return)),a!==null&&o&4&&uc(t,t.memoizedProps,a.memoizedProps);break;case 5:if(ge(e,t),he(t),o&512&&(Kt||a===null||Qe(a,a.return)),t.flags&32){r=t.stateNode;try{ws(r,"")}catch(W){Tt(t,t.return,W)}}o&4&&t.stateNode!=null&&(r=t.memoizedProps,uc(t,r,a!==null?a.memoizedProps:r)),o&1024&&(mc=!0);break;case 6:if(ge(e,t),he(t),o&4){if(t.stateNode===null)throw Error(l(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(W){Tt(t,t.return,W)}}break;case 3:if(Bi=null,r=Ue,Ue=Hi(e.containerInfo),ge(e,t),Ue=r,he(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{cn(e.containerInfo)}catch(W){Tt(t,t.return,W)}mc&&(mc=!1,_g(t));break;case 4:o=Ue,Ue=Hi(t.stateNode.containerInfo),ge(e,t),he(t),Ue=o;break;case 12:ge(e,t),he(t);break;case 31:ge(e,t),he(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ji(t,o)));break;case 13:ge(e,t),he(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Si=_e()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ji(t,o)));break;case 22:r=t.memoizedState!==null;var v=a!==null&&a.memoizedState!==null,w=ma,H=Kt;if(ma=w||r,Kt=H||v,ge(e,t),Kt=H,ma=w,he(t),o&8192)t:for(e=t.stateNode,e._visibility=r?e._visibility&-2:e._visibility|1,r&&(a===null||v||ma||Kt||fs(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){v=a=e;try{if(c=v.stateNode,r)g=c.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{x=v.stateNode;var U=v.memoizedProps.style,E=U!=null&&U.hasOwnProperty("display")?U.display:null;x.style.display=E==null||typeof E=="boolean"?"":(""+E).trim()}}catch(W){Tt(v,v.return,W)}}}else if(e.tag===6){if(a===null){v=e;try{v.stateNode.nodeValue=r?"":v.memoizedProps}catch(W){Tt(v,v.return,W)}}}else if(e.tag===18){if(a===null){v=e;try{var C=v.stateNode;r?lh(C,!0):lh(v.stateNode,!1)}catch(W){Tt(v,v.return,W)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,ji(t,a))));break;case 19:ge(e,t),he(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ji(t,o)));break;case 30:break;case 21:break;default:ge(e,t),he(t)}}function he(t){var e=t.flags;if(e&2){try{for(var a,o=t.return;o!==null;){if(cg(o)){a=o;break}o=o.return}if(a==null)throw Error(l(160));switch(a.tag){case 27:var r=a.stateNode,c=pc(t);Ti(t,c,r);break;case 5:var g=a.stateNode;a.flags&32&&(ws(g,""),a.flags&=-33);var x=pc(t);Ti(t,x,g);break;case 3:case 4:var v=a.stateNode.containerInfo,w=pc(t);dc(t,w,v);break;default:throw Error(l(161))}}catch(H){Tt(t,t.return,H)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function _g(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;_g(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function ha(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)dg(t,e.alternate,e),e=e.sibling}function fs(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:qa(4,e,e.return),fs(e);break;case 1:Qe(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&lg(e,e.return,a),fs(e);break;case 27:ro(e.stateNode);case 26:case 5:Qe(e,e.return),fs(e);break;case 22:e.memoizedState===null&&fs(e);break;case 30:fs(e);break;default:fs(e)}t=t.sibling}}function ba(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var o=e.alternate,r=t,c=e,g=c.flags;switch(c.tag){case 0:case 11:case 15:ba(r,c,a),$n(4,c);break;case 1:if(ba(r,c,a),o=c,r=o.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(w){Tt(o,o.return,w)}if(o=c,r=o.updateQueue,r!==null){var x=o.stateNode;try{var v=r.shared.hiddenCallbacks;if(v!==null)for(r.shared.hiddenCallbacks=null,r=0;r<v.length;r++)Zd(v[r],x)}catch(w){Tt(o,o.return,w)}}a&&g&64&&ig(c),Wn(c,c.return);break;case 27:ug(c);case 26:case 5:ba(r,c,a),a&&o===null&&g&4&&rg(c),Wn(c,c.return);break;case 12:ba(r,c,a);break;case 31:ba(r,c,a),a&&g&4&&hg(r,c);break;case 13:ba(r,c,a),a&&g&4&&bg(r,c);break;case 22:c.memoizedState===null&&ba(r,c,a),Wn(c,c.return);break;case 30:break;default:ba(r,c,a)}e=e.sibling}}function gc(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&zn(a))}function hc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&zn(t))}function Pe(t,e,a,o){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)xg(t,e,a,o),e=e.sibling}function xg(t,e,a,o){var r=e.flags;switch(e.tag){case 0:case 11:case 15:Pe(t,e,a,o),r&2048&&$n(9,e);break;case 1:Pe(t,e,a,o);break;case 3:Pe(t,e,a,o),r&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&zn(t)));break;case 12:if(r&2048){Pe(t,e,a,o),t=e.stateNode;try{var c=e.memoizedProps,g=c.id,x=c.onPostCommit;typeof x=="function"&&x(g,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(v){Tt(e,e.return,v)}}else Pe(t,e,a,o);break;case 31:Pe(t,e,a,o);break;case 13:Pe(t,e,a,o);break;case 23:break;case 22:c=e.stateNode,g=e.alternate,e.memoizedState!==null?c._visibility&2?Pe(t,e,a,o):to(t,e):c._visibility&2?Pe(t,e,a,o):(c._visibility|=2,Js(t,e,a,o,(e.subtreeFlags&10256)!==0||!1)),r&2048&&gc(g,e);break;case 24:Pe(t,e,a,o),r&2048&&hc(e.alternate,e);break;default:Pe(t,e,a,o)}}function Js(t,e,a,o,r){for(r=r&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var c=t,g=e,x=a,v=o,w=g.flags;switch(g.tag){case 0:case 11:case 15:Js(c,g,x,v,r),$n(8,g);break;case 23:break;case 22:var H=g.stateNode;g.memoizedState!==null?H._visibility&2?Js(c,g,x,v,r):to(c,g):(H._visibility|=2,Js(c,g,x,v,r)),r&&w&2048&&gc(g.alternate,g);break;case 24:Js(c,g,x,v,r),r&&w&2048&&hc(g.alternate,g);break;default:Js(c,g,x,v,r)}e=e.sibling}}function to(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,o=e,r=o.flags;switch(o.tag){case 22:to(a,o),r&2048&&gc(o.alternate,o);break;case 24:to(a,o),r&2048&&hc(o.alternate,o);break;default:to(a,o)}e=e.sibling}}var eo=8192;function $s(t,e,a){if(t.subtreeFlags&eo)for(t=t.child;t!==null;)kg(t,e,a),t=t.sibling}function kg(t,e,a){switch(t.tag){case 26:$s(t,e,a),t.flags&eo&&t.memoizedState!==null&&Ex(a,Ue,t.memoizedState,t.memoizedProps);break;case 5:$s(t,e,a);break;case 3:case 4:var o=Ue;Ue=Hi(t.stateNode.containerInfo),$s(t,e,a),Ue=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=eo,eo=16777216,$s(t,e,a),eo=o):$s(t,e,a));break;default:$s(t,e,a)}}function yg(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function ao(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var o=e[a];$t=o,vg(o,t)}yg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Gg(t),t=t.sibling}function Gg(t){switch(t.tag){case 0:case 11:case 15:ao(t),t.flags&2048&&qa(9,t,t.return);break;case 3:ao(t);break;case 12:ao(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Ai(t)):ao(t);break;default:ao(t)}}function Ai(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var o=e[a];$t=o,vg(o,t)}yg(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:qa(8,e,e.return),Ai(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,Ai(e));break;default:Ai(e)}t=t.sibling}}function vg(t,e){for(;$t!==null;){var a=$t;switch(a.tag){case 0:case 11:case 15:qa(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:zn(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,$t=o;else t:for(a=t;$t!==null;){o=$t;var r=o.sibling,c=o.return;if(mg(o),o===a){$t=null;break t}if(r!==null){r.return=c,$t=r;break t}$t=c}}}var K1={getCacheForType:function(t){var e=ee(Pt),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return ee(Pt).controller.signal}},F1=typeof WeakMap=="function"?WeakMap:Map,Gt=0,It=null,mt=null,bt=0,Mt=0,Te=null,Ca=!1,Ws=!1,bc=!1,fa=0,Ot=0,Da=0,_s=0,fc=0,je=0,tn=0,so=null,be=null,_c=!1,Si=0,Mg=0,Ii=1/0,Vi=null,Oa=null,Zt=0,Ra=null,en=null,_a=0,xc=0,kc=null,Tg=null,no=0,yc=null;function Ae(){return(Gt&2)!==0&&bt!==0?bt&-bt:z.T!==null?Ac():Lp()}function jg(){if(je===0)if((bt&536870912)===0||xt){var t=Ro;Ro<<=1,(Ro&3932160)===0&&(Ro=262144),je=t}else je=536870912;return t=ve.current,t!==null&&(t.flags|=32),je}function fe(t,e,a){(t===It&&(Mt===2||Mt===9)||t.cancelPendingCommit!==null)&&(an(t,0),za(t,bt,je,!1)),Tn(t,a),((Gt&2)===0||t!==It)&&(t===It&&((Gt&2)===0&&(_s|=a),Ot===4&&za(t,bt,je,!1)),Je(t))}function Ag(t,e,a){if((Gt&6)!==0)throw Error(l(327));var o=!a&&(e&127)===0&&(e&t.expiredLanes)===0||Mn(t,e),r=o?J1(t,e):vc(t,e,!0),c=o;do{if(r===0){Ws&&!o&&za(t,e,0,!1);break}else{if(a=t.current.alternate,c&&!Z1(a)){r=vc(t,e,!1),c=!1;continue}if(r===2){if(c=e,t.errorRecoveryDisabledLanes&c)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){e=g;t:{var x=t;r=so;var v=x.current.memoizedState.isDehydrated;if(v&&(an(x,g).flags|=256),g=vc(x,g,!1),g!==2){if(bc&&!v){x.errorRecoveryDisabledLanes|=c,_s|=c,r=4;break t}c=be,be=r,c!==null&&(be===null?be=c:be.push.apply(be,c))}r=g}if(c=!1,r!==2)continue}}if(r===1){an(t,0),za(t,e,0,!0);break}t:{switch(o=t,c=r,c){case 0:case 1:throw Error(l(345));case 4:if((e&4194048)!==e)break;case 6:za(o,e,je,!Ca);break t;case 2:be=null;break;case 3:case 5:break;default:throw Error(l(329))}if((e&62914560)===e&&(r=Si+300-_e(),10<r)){if(za(o,e,je,!Ca),Ho(o,0,!0)!==0)break t;_a=e,o.timeoutHandle=nh(Sg.bind(null,o,a,be,Vi,_c,e,je,_s,tn,Ca,c,"Throttled",-0,0),r);break t}Sg(o,a,be,Vi,_c,e,je,_s,tn,Ca,c,null,-0,0)}}break}while(!0);Je(t)}function Sg(t,e,a,o,r,c,g,x,v,w,H,U,E,C){if(t.timeoutHandle=-1,U=e.subtreeFlags,U&8192||(U&16785408)===16785408){U={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sa},kg(e,c,U);var W=(c&62914560)===c?Si-_e():(c&4194048)===c?Mg-_e():0;if(W=Nx(U,W),W!==null){_a=c,t.cancelPendingCommit=W(Dg.bind(null,t,e,c,a,o,r,g,x,v,H,U,null,E,C)),za(t,c,g,!w);return}}Dg(t,e,c,a,o,r,g,x,v)}function Z1(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var r=a[o],c=r.getSnapshot;r=r.value;try{if(!ye(c(),r))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function za(t,e,a,o){e&=~fc,e&=~_s,t.suspendedLanes|=e,t.pingedLanes&=~e,o&&(t.warmLanes|=e),o=t.expirationTimes;for(var r=e;0<r;){var c=31-ke(r),g=1<<c;o[c]=-1,r&=~g}a!==0&&Rp(t,a,e)}function wi(){return(Gt&6)===0?(oo(0),!1):!0}function Gc(){if(mt!==null){if(Mt===0)var t=mt.return;else t=mt,la=cs=null,Rr(t),Xs=null,Ln=0,t=mt;for(;t!==null;)og(t.alternate,t),t=t.return;mt=null}}function an(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,hx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),_a=0,Gc(),It=t,mt=a=oa(t.current,null),bt=e,Mt=0,Te=null,Ca=!1,Ws=Mn(t,e),bc=!1,tn=je=fc=_s=Da=Ot=0,be=so=null,_c=!1,(e&8)!==0&&(e|=e&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=e;0<o;){var r=31-ke(o),c=1<<r;e|=t[r],o&=~c}return fa=e,$o(),a}function Ig(t,e){ct=null,z.H=Zn,e===Ys||e===ii?(e=Yd(),Mt=3):e===jr?(e=Yd(),Mt=4):Mt=e===tc?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Te=e,mt===null&&(Ot=1,ki(t,Ne(e,t.current)))}function Vg(){var t=ve.current;return t===null?!0:(bt&4194048)===bt?Oe===null:(bt&62914560)===bt||(bt&536870912)!==0?t===Oe:!1}function wg(){var t=z.H;return z.H=Zn,t===null?Zn:t}function Eg(){var t=z.A;return z.A=K1,t}function Ei(){Ot=4,Ca||(bt&4194048)!==bt&&ve.current!==null||(Ws=!0),(Da&134217727)===0&&(_s&134217727)===0||It===null||za(It,bt,je,!1)}function vc(t,e,a){var o=Gt;Gt|=2;var r=wg(),c=Eg();(It!==t||bt!==e)&&(Vi=null,an(t,e)),e=!1;var g=Ot;t:do try{if(Mt!==0&&mt!==null){var x=mt,v=Te;switch(Mt){case 8:Gc(),g=6;break t;case 3:case 2:case 9:case 6:ve.current===null&&(e=!0);var w=Mt;if(Mt=0,Te=null,sn(t,x,v,w),a&&Ws){g=0;break t}break;default:w=Mt,Mt=0,Te=null,sn(t,x,v,w)}}Q1(),g=Ot;break}catch(H){Ig(t,H)}while(!0);return e&&t.shellSuspendCounter++,la=cs=null,Gt=o,z.H=r,z.A=c,mt===null&&(It=null,bt=0,$o()),g}function Q1(){for(;mt!==null;)Ng(mt)}function J1(t,e){var a=Gt;Gt|=2;var o=wg(),r=Eg();It!==t||bt!==e?(Vi=null,Ii=_e()+500,an(t,e)):Ws=Mn(t,e);t:do try{if(Mt!==0&&mt!==null){e=mt;var c=Te;e:switch(Mt){case 1:Mt=0,Te=null,sn(t,e,c,1);break;case 2:case 9:if(Ud(c)){Mt=0,Te=null,qg(e);break}e=function(){Mt!==2&&Mt!==9||It!==t||(Mt=7),Je(t)},c.then(e,e);break t;case 3:Mt=7;break t;case 4:Mt=5;break t;case 7:Ud(c)?(Mt=0,Te=null,qg(e)):(Mt=0,Te=null,sn(t,e,c,7));break;case 5:var g=null;switch(mt.tag){case 26:g=mt.memoizedState;case 5:case 27:var x=mt;if(g?xh(g):x.stateNode.complete){Mt=0,Te=null;var v=x.sibling;if(v!==null)mt=v;else{var w=x.return;w!==null?(mt=w,Ni(w)):mt=null}break e}}Mt=0,Te=null,sn(t,e,c,5);break;case 6:Mt=0,Te=null,sn(t,e,c,6);break;case 8:Gc(),Ot=6;break t;default:throw Error(l(462))}}$1();break}catch(H){Ig(t,H)}while(!0);return la=cs=null,z.H=o,z.A=r,Gt=a,mt!==null?0:(It=null,bt=0,$o(),Ot)}function $1(){for(;mt!==null&&!y0();)Ng(mt)}function Ng(t){var e=sg(t.alternate,t,fa);t.memoizedProps=t.pendingProps,e===null?Ni(t):mt=e}function qg(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=Jm(a,e,e.pendingProps,e.type,void 0,bt);break;case 11:e=Jm(a,e,e.pendingProps,e.type.render,e.ref,bt);break;case 5:Rr(e);default:og(a,e),e=mt=Ed(e,fa),e=sg(a,e,fa)}t.memoizedProps=t.pendingProps,e===null?Ni(t):mt=e}function sn(t,e,a,o){la=cs=null,Rr(e),Xs=null,Ln=0;var r=e.return;try{if(H1(t,r,e,a,bt)){Ot=1,ki(t,Ne(a,t.current)),mt=null;return}}catch(c){if(r!==null)throw mt=r,c;Ot=1,ki(t,Ne(a,t.current)),mt=null;return}e.flags&32768?(xt||o===1?t=!0:Ws||(bt&536870912)!==0?t=!1:(Ca=t=!0,(o===2||o===9||o===3||o===6)&&(o=ve.current,o!==null&&o.tag===13&&(o.flags|=16384))),Cg(e,t)):Ni(e)}function Ni(t){var e=t;do{if((e.flags&32768)!==0){Cg(e,Ca);return}t=e.return;var a=U1(e.alternate,e,fa);if(a!==null){mt=a;return}if(e=e.sibling,e!==null){mt=e;return}mt=e=t}while(e!==null);Ot===0&&(Ot=5)}function Cg(t,e){do{var a=P1(t.alternate,t);if(a!==null){a.flags&=32767,mt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){mt=t;return}mt=t=a}while(t!==null);Ot=6,mt=null}function Dg(t,e,a,o,r,c,g,x,v){t.cancelPendingCommit=null;do qi();while(Zt!==0);if((Gt&6)!==0)throw Error(l(327));if(e!==null){if(e===t.current)throw Error(l(177));if(c=e.lanes|e.childLanes,c|=pr,w0(t,a,c,g,x,v),t===It&&(mt=It=null,bt=0),en=e,Ra=t,_a=a,xc=c,kc=r,Tg=o,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,ax(Do,function(){return Lg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,r=Q.p,Q.p=2,g=Gt,Gt|=4;try{Y1(t,e,a)}finally{Gt=g,Q.p=r,z.T=o}}Zt=1,Og(),Rg(),zg()}}function Og(){if(Zt===1){Zt=0;var t=Ra,e=en,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var o=Q.p;Q.p=2;var r=Gt;Gt|=4;try{fg(e,t);var c=Cc,g=vd(t.containerInfo),x=c.focusedElem,v=c.selectionRange;if(g!==x&&x&&x.ownerDocument&&Gd(x.ownerDocument.documentElement,x)){if(v!==null&&ir(x)){var w=v.start,H=v.end;if(H===void 0&&(H=w),"selectionStart"in x)x.selectionStart=w,x.selectionEnd=Math.min(H,x.value.length);else{var U=x.ownerDocument||document,E=U&&U.defaultView||window;if(E.getSelection){var C=E.getSelection(),W=x.textContent.length,ot=Math.min(v.start,W),St=v.end===void 0?ot:Math.min(v.end,W);!C.extend&&ot>St&&(g=St,St=ot,ot=g);var S=yd(x,ot),T=yd(x,St);if(S&&T&&(C.rangeCount!==1||C.anchorNode!==S.node||C.anchorOffset!==S.offset||C.focusNode!==T.node||C.focusOffset!==T.offset)){var V=U.createRange();V.setStart(S.node,S.offset),C.removeAllRanges(),ot>St?(C.addRange(V),C.extend(T.node,T.offset)):(V.setEnd(T.node,T.offset),C.addRange(V))}}}}for(U=[],C=x;C=C.parentNode;)C.nodeType===1&&U.push({element:C,left:C.scrollLeft,top:C.scrollTop});for(typeof x.focus=="function"&&x.focus(),x=0;x<U.length;x++){var L=U[x];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}Xi=!!qc,Cc=qc=null}finally{Gt=r,Q.p=o,z.T=a}}t.current=e,Zt=2}}function Rg(){if(Zt===2){Zt=0;var t=Ra,e=en,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var o=Q.p;Q.p=2;var r=Gt;Gt|=4;try{dg(t,e.alternate,e)}finally{Gt=r,Q.p=o,z.T=a}}Zt=3}}function zg(){if(Zt===4||Zt===3){Zt=0,G0();var t=Ra,e=en,a=_a,o=Tg;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Zt=5:(Zt=0,en=Ra=null,Hg(t,t.pendingLanes));var r=t.pendingLanes;if(r===0&&(Oa=null),Ll(a),e=e.stateNode,xe&&typeof xe.onCommitFiberRoot=="function")try{xe.onCommitFiberRoot(vn,e,void 0,(e.current.flags&128)===128)}catch{}if(o!==null){e=z.T,r=Q.p,Q.p=2,z.T=null;try{for(var c=t.onRecoverableError,g=0;g<o.length;g++){var x=o[g];c(x.value,{componentStack:x.stack})}}finally{z.T=e,Q.p=r}}(_a&3)!==0&&qi(),Je(t),r=t.pendingLanes,(a&261930)!==0&&(r&42)!==0?t===yc?no++:(no=0,yc=t):no=0,oo(0)}}function Hg(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,zn(e)))}function qi(){return Og(),Rg(),zg(),Lg()}function Lg(){if(Zt!==5)return!1;var t=Ra,e=xc;xc=0;var a=Ll(_a),o=z.T,r=Q.p;try{Q.p=32>a?32:a,z.T=null,a=kc,kc=null;var c=Ra,g=_a;if(Zt=0,en=Ra=null,_a=0,(Gt&6)!==0)throw Error(l(331));var x=Gt;if(Gt|=4,Gg(c.current),xg(c,c.current,g,a),Gt=x,oo(0,!1),xe&&typeof xe.onPostCommitFiberRoot=="function")try{xe.onPostCommitFiberRoot(vn,c)}catch{}return!0}finally{Q.p=r,z.T=o,Hg(t,e)}}function Bg(t,e,a){e=Ne(a,e),e=Wr(t.stateNode,e,2),t=wa(t,e,2),t!==null&&(Tn(t,2),Je(t))}function Tt(t,e,a){if(t.tag===3)Bg(t,t,a);else for(;e!==null;){if(e.tag===3){Bg(e,t,a);break}else if(e.tag===1){var o=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Oa===null||!Oa.has(o))){t=Ne(a,t),a=Um(2),o=wa(e,a,2),o!==null&&(Pm(a,o,e,t),Tn(o,2),Je(o));break}}e=e.return}}function Mc(t,e,a){var o=t.pingCache;if(o===null){o=t.pingCache=new F1;var r=new Set;o.set(e,r)}else r=o.get(e),r===void 0&&(r=new Set,o.set(e,r));r.has(a)||(bc=!0,r.add(a),t=W1.bind(null,t,e,a),e.then(t,t))}function W1(t,e,a){var o=t.pingCache;o!==null&&o.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,It===t&&(bt&a)===a&&(Ot===4||Ot===3&&(bt&62914560)===bt&&300>_e()-Si?(Gt&2)===0&&an(t,0):fc|=a,tn===bt&&(tn=0)),Je(t)}function Ug(t,e){e===0&&(e=Op()),t=is(t,e),t!==null&&(Tn(t,e),Je(t))}function tx(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),Ug(t,a)}function ex(t,e){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,r=t.memoizedState;r!==null&&(a=r.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(l(314))}o!==null&&o.delete(e),Ug(t,a)}function ax(t,e){return Ol(t,e)}var Ci=null,nn=null,Tc=!1,Di=!1,jc=!1,Ha=0;function Je(t){t!==nn&&t.next===null&&(nn===null?Ci=nn=t:nn=nn.next=t),Di=!0,Tc||(Tc=!0,nx())}function oo(t,e){if(!jc&&Di){jc=!0;do for(var a=!1,o=Ci;o!==null;){if(t!==0){var r=o.pendingLanes;if(r===0)var c=0;else{var g=o.suspendedLanes,x=o.pingedLanes;c=(1<<31-ke(42|t)+1)-1,c&=r&~(g&~x),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,Kg(o,c))}else c=bt,c=Ho(o,o===It?c:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(c&3)===0||Mn(o,c)||(a=!0,Kg(o,c));o=o.next}while(a);jc=!1}}function sx(){Pg()}function Pg(){Di=Tc=!1;var t=0;Ha!==0&&gx()&&(t=Ha);for(var e=_e(),a=null,o=Ci;o!==null;){var r=o.next,c=Yg(o,e);c===0?(o.next=null,a===null?Ci=r:a.next=r,r===null&&(nn=a)):(a=o,(t!==0||(c&3)!==0)&&(Di=!0)),o=r}Zt!==0&&Zt!==5||oo(t),Ha!==0&&(Ha=0)}function Yg(t,e){for(var a=t.suspendedLanes,o=t.pingedLanes,r=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var g=31-ke(c),x=1<<g,v=r[g];v===-1?((x&a)===0||(x&o)!==0)&&(r[g]=V0(x,e)):v<=e&&(t.expiredLanes|=x),c&=~x}if(e=It,a=bt,a=Ho(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===e&&(Mt===2||Mt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Rl(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Mn(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(o!==null&&Rl(o),Ll(a)){case 2:case 8:a=Cp;break;case 32:a=Do;break;case 268435456:a=Dp;break;default:a=Do}return o=Xg.bind(null,t),a=Ol(a,o),t.callbackPriority=e,t.callbackNode=a,e}return o!==null&&o!==null&&Rl(o),t.callbackPriority=2,t.callbackNode=null,2}function Xg(t,e){if(Zt!==0&&Zt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(qi()&&t.callbackNode!==a)return null;var o=bt;return o=Ho(t,t===It?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Ag(t,o,e),Yg(t,_e()),t.callbackNode!=null&&t.callbackNode===a?Xg.bind(null,t):null)}function Kg(t,e){if(qi())return null;Ag(t,e,!0)}function nx(){bx(function(){(Gt&6)!==0?Ol(qp,sx):Pg()})}function Ac(){if(Ha===0){var t=Us;t===0&&(t=Oo,Oo<<=1,(Oo&261888)===0&&(Oo=256)),Ha=t}return Ha}function Fg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Po(""+t)}function Zg(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function ox(t,e,a,o,r){if(e==="submit"&&a&&a.stateNode===r){var c=Fg((r[pe]||null).action),g=o.submitter;g&&(e=(e=g[pe]||null)?Fg(e.formAction):g.getAttribute("formAction"),e!==null&&(c=e,g=null));var x=new Fo("action","action",null,o,r);t.push({event:x,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ha!==0){var v=g?Zg(r,g):new FormData(r);Kr(a,{pending:!0,data:v,method:r.method,action:c},null,v)}}else typeof c=="function"&&(x.preventDefault(),v=g?Zg(r,g):new FormData(r),Kr(a,{pending:!0,data:v,method:r.method,action:c},c,v))},currentTarget:r}]})}}for(var Sc=0;Sc<ur.length;Sc++){var Ic=ur[Sc],ix=Ic.toLowerCase(),lx=Ic[0].toUpperCase()+Ic.slice(1);Be(ix,"on"+lx)}Be(jd,"onAnimationEnd"),Be(Ad,"onAnimationIteration"),Be(Sd,"onAnimationStart"),Be("dblclick","onDoubleClick"),Be("focusin","onFocus"),Be("focusout","onBlur"),Be(v1,"onTransitionRun"),Be(M1,"onTransitionStart"),Be(T1,"onTransitionCancel"),Be(Id,"onTransitionEnd"),Is("onMouseEnter",["mouseout","mouseover"]),Is("onMouseLeave",["mouseout","mouseover"]),Is("onPointerEnter",["pointerout","pointerover"]),Is("onPointerLeave",["pointerout","pointerover"]),as("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),as("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),as("onBeforeInput",["compositionend","keypress","textInput","paste"]),as("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),as("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),as("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(io));function Qg(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],r=o.event;o=o.listeners;t:{var c=void 0;if(e)for(var g=o.length-1;0<=g;g--){var x=o[g],v=x.instance,w=x.currentTarget;if(x=x.listener,v!==c&&r.isPropagationStopped())break t;c=x,r.currentTarget=w;try{c(r)}catch(H){Jo(H)}r.currentTarget=null,c=v}else for(g=0;g<o.length;g++){if(x=o[g],v=x.instance,w=x.currentTarget,x=x.listener,v!==c&&r.isPropagationStopped())break t;c=x,r.currentTarget=w;try{c(r)}catch(H){Jo(H)}r.currentTarget=null,c=v}}}}function gt(t,e){var a=e[Bl];a===void 0&&(a=e[Bl]=new Set);var o=t+"__bubble";a.has(o)||(Jg(e,t,2,!1),a.add(o))}function Vc(t,e,a){var o=0;e&&(o|=4),Jg(a,t,o,e)}var Oi="_reactListening"+Math.random().toString(36).slice(2);function wc(t){if(!t[Oi]){t[Oi]=!0,Pp.forEach(function(a){a!=="selectionchange"&&(rx.has(a)||Vc(a,!1,t),Vc(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Oi]||(e[Oi]=!0,Vc("selectionchange",!1,e))}}function Jg(t,e,a,o){switch(jh(e)){case 2:var r=Dx;break;case 8:r=Ox;break;default:r=Xc}a=r.bind(null,e,a,t),r=void 0,!Jl||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),o?r!==void 0?t.addEventListener(e,a,{capture:!0,passive:r}):t.addEventListener(e,a,!0):r!==void 0?t.addEventListener(e,a,{passive:r}):t.addEventListener(e,a,!1)}function Ec(t,e,a,o,r){var c=o;if((e&1)===0&&(e&2)===0&&o!==null)t:for(;;){if(o===null)return;var g=o.tag;if(g===3||g===4){var x=o.stateNode.containerInfo;if(x===r)break;if(g===4)for(g=o.return;g!==null;){var v=g.tag;if((v===3||v===4)&&g.stateNode.containerInfo===r)return;g=g.return}for(;x!==null;){if(g=js(x),g===null)return;if(v=g.tag,v===5||v===6||v===26||v===27){o=c=g;continue t}x=x.parentNode}}o=o.return}ad(function(){var w=c,H=Zl(a),U=[];t:{var E=Vd.get(t);if(E!==void 0){var C=Fo,W=t;switch(t){case"keypress":if(Xo(a)===0)break t;case"keydown":case"keyup":C=e1;break;case"focusin":W="focus",C=er;break;case"focusout":W="blur",C=er;break;case"beforeblur":case"afterblur":C=er;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=od;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=U0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=n1;break;case jd:case Ad:case Sd:C=X0;break;case Id:C=i1;break;case"scroll":case"scrollend":C=L0;break;case"wheel":C=r1;break;case"copy":case"cut":case"paste":C=F0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=ld;break;case"toggle":case"beforetoggle":C=u1}var ot=(e&4)!==0,St=!ot&&(t==="scroll"||t==="scrollend"),S=ot?E!==null?E+"Capture":null:E;ot=[];for(var T=w,V;T!==null;){var L=T;if(V=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||V===null||S===null||(L=Sn(T,S),L!=null&&ot.push(lo(T,L,V))),St)break;T=T.return}0<ot.length&&(E=new C(E,W,null,a,H),U.push({event:E,listeners:ot}))}}if((e&7)===0){t:{if(E=t==="mouseover"||t==="pointerover",C=t==="mouseout"||t==="pointerout",E&&a!==Fl&&(W=a.relatedTarget||a.fromElement)&&(js(W)||W[Ts]))break t;if((C||E)&&(E=H.window===H?H:(E=H.ownerDocument)?E.defaultView||E.parentWindow:window,C?(W=a.relatedTarget||a.toElement,C=w,W=W?js(W):null,W!==null&&(St=m(W),ot=W.tag,W!==St||ot!==5&&ot!==27&&ot!==6)&&(W=null)):(C=null,W=w),C!==W)){if(ot=od,L="onMouseLeave",S="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(ot=ld,L="onPointerLeave",S="onPointerEnter",T="pointer"),St=C==null?E:An(C),V=W==null?E:An(W),E=new ot(L,T+"leave",C,a,H),E.target=St,E.relatedTarget=V,L=null,js(H)===w&&(ot=new ot(S,T+"enter",W,a,H),ot.target=V,ot.relatedTarget=St,L=ot),St=L,C&&W)e:{for(ot=cx,S=C,T=W,V=0,L=S;L;L=ot(L))V++;L=0;for(var st=T;st;st=ot(st))L++;for(;0<V-L;)S=ot(S),V--;for(;0<L-V;)T=ot(T),L--;for(;V--;){if(S===T||T!==null&&S===T.alternate){ot=S;break e}S=ot(S),T=ot(T)}ot=null}else ot=null;C!==null&&$g(U,E,C,ot,!1),W!==null&&St!==null&&$g(U,St,W,ot,!0)}}t:{if(E=w?An(w):window,C=E.nodeName&&E.nodeName.toLowerCase(),C==="select"||C==="input"&&E.type==="file")var kt=hd;else if(md(E))if(bd)kt=k1;else{kt=_1;var at=f1}else C=E.nodeName,!C||C.toLowerCase()!=="input"||E.type!=="checkbox"&&E.type!=="radio"?w&&Kl(w.elementType)&&(kt=hd):kt=x1;if(kt&&(kt=kt(t,w))){gd(U,kt,a,H);break t}at&&at(t,E,w),t==="focusout"&&w&&E.type==="number"&&w.memoizedProps.value!=null&&Xl(E,"number",E.value)}switch(at=w?An(w):window,t){case"focusin":(md(at)||at.contentEditable==="true")&&(Cs=at,lr=w,Dn=null);break;case"focusout":Dn=lr=Cs=null;break;case"mousedown":rr=!0;break;case"contextmenu":case"mouseup":case"dragend":rr=!1,Md(U,a,H);break;case"selectionchange":if(G1)break;case"keydown":case"keyup":Md(U,a,H)}var pt;if(sr)t:{switch(t){case"compositionstart":var ft="onCompositionStart";break t;case"compositionend":ft="onCompositionEnd";break t;case"compositionupdate":ft="onCompositionUpdate";break t}ft=void 0}else qs?pd(t,a)&&(ft="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ft="onCompositionStart");ft&&(rd&&a.locale!=="ko"&&(qs||ft!=="onCompositionStart"?ft==="onCompositionEnd"&&qs&&(pt=sd()):(Ma=H,$l="value"in Ma?Ma.value:Ma.textContent,qs=!0)),at=Ri(w,ft),0<at.length&&(ft=new id(ft,t,null,a,H),U.push({event:ft,listeners:at}),pt?ft.data=pt:(pt=dd(a),pt!==null&&(ft.data=pt)))),(pt=d1?m1(t,a):g1(t,a))&&(ft=Ri(w,"onBeforeInput"),0<ft.length&&(at=new id("onBeforeInput","beforeinput",null,a,H),U.push({event:at,listeners:ft}),at.data=pt)),ox(U,t,w,a,H)}Qg(U,e)})}function lo(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Ri(t,e){for(var a=e+"Capture",o=[];t!==null;){var r=t,c=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||c===null||(r=Sn(t,a),r!=null&&o.unshift(lo(t,r,c)),r=Sn(t,e),r!=null&&o.push(lo(t,r,c))),t.tag===3)return o;t=t.return}return[]}function cx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function $g(t,e,a,o,r){for(var c=e._reactName,g=[];a!==null&&a!==o;){var x=a,v=x.alternate,w=x.stateNode;if(x=x.tag,v!==null&&v===o)break;x!==5&&x!==26&&x!==27||w===null||(v=w,r?(w=Sn(a,c),w!=null&&g.unshift(lo(a,w,v))):r||(w=Sn(a,c),w!=null&&g.push(lo(a,w,v)))),a=a.return}g.length!==0&&t.push({event:e,listeners:g})}var ux=/\r\n?/g,px=/\u0000|\uFFFD/g;function Wg(t){return(typeof t=="string"?t:""+t).replace(ux,`
`).replace(px,"")}function th(t,e){return e=Wg(e),Wg(t)===e}function At(t,e,a,o,r,c){switch(a){case"children":typeof o=="string"?e==="body"||e==="textarea"&&o===""||ws(t,o):(typeof o=="number"||typeof o=="bigint")&&e!=="body"&&ws(t,""+o);break;case"className":Bo(t,"class",o);break;case"tabIndex":Bo(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Bo(t,a,o);break;case"style":td(t,o,c);break;case"data":if(e!=="object"){Bo(t,"data",o);break}case"src":case"href":if(o===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Po(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(e!=="input"&&At(t,e,"name",r.name,r,null),At(t,e,"formEncType",r.formEncType,r,null),At(t,e,"formMethod",r.formMethod,r,null),At(t,e,"formTarget",r.formTarget,r,null)):(At(t,e,"encType",r.encType,r,null),At(t,e,"method",r.method,r,null),At(t,e,"target",r.target,r,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Po(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=sa);break;case"onScroll":o!=null&&gt("scroll",t);break;case"onScrollEnd":o!=null&&gt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(l(61));if(a=o.__html,a!=null){if(r.children!=null)throw Error(l(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=Po(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":gt("beforetoggle",t),gt("toggle",t),Lo(t,"popover",o);break;case"xlinkActuate":aa(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":aa(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":aa(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":aa(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":aa(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":aa(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":aa(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":aa(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":aa(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Lo(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=z0.get(a)||a,Lo(t,a,o))}}function Nc(t,e,a,o,r,c){switch(a){case"style":td(t,o,c);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(l(61));if(a=o.__html,a!=null){if(r.children!=null)throw Error(l(60));t.innerHTML=a}}break;case"children":typeof o=="string"?ws(t,o):(typeof o=="number"||typeof o=="bigint")&&ws(t,""+o);break;case"onScroll":o!=null&&gt("scroll",t);break;case"onScrollEnd":o!=null&&gt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=sa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Yp.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(r=a.endsWith("Capture"),e=a.slice(2,r?a.length-7:void 0),c=t[pe]||null,c=c!=null?c[a]:null,typeof c=="function"&&t.removeEventListener(e,c,r),typeof o=="function")){typeof c!="function"&&c!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,o,r);break t}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Lo(t,a,o)}}}function se(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gt("error",t),gt("load",t);var o=!1,r=!1,c;for(c in a)if(a.hasOwnProperty(c)){var g=a[c];if(g!=null)switch(c){case"src":o=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,e));default:At(t,e,c,g,a,null)}}r&&At(t,e,"srcSet",a.srcSet,a,null),o&&At(t,e,"src",a.src,a,null);return;case"input":gt("invalid",t);var x=c=g=r=null,v=null,w=null;for(o in a)if(a.hasOwnProperty(o)){var H=a[o];if(H!=null)switch(o){case"name":r=H;break;case"type":g=H;break;case"checked":v=H;break;case"defaultChecked":w=H;break;case"value":c=H;break;case"defaultValue":x=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(l(137,e));break;default:At(t,e,o,H,a,null)}}Qp(t,c,x,v,w,g,r,!1);return;case"select":gt("invalid",t),o=g=c=null;for(r in a)if(a.hasOwnProperty(r)&&(x=a[r],x!=null))switch(r){case"value":c=x;break;case"defaultValue":g=x;break;case"multiple":o=x;default:At(t,e,r,x,a,null)}e=c,a=g,t.multiple=!!o,e!=null?Vs(t,!!o,e,!1):a!=null&&Vs(t,!!o,a,!0);return;case"textarea":gt("invalid",t),c=r=o=null;for(g in a)if(a.hasOwnProperty(g)&&(x=a[g],x!=null))switch(g){case"value":o=x;break;case"defaultValue":r=x;break;case"children":c=x;break;case"dangerouslySetInnerHTML":if(x!=null)throw Error(l(91));break;default:At(t,e,g,x,a,null)}$p(t,o,r,c);return;case"option":for(v in a)if(a.hasOwnProperty(v)&&(o=a[v],o!=null))switch(v){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:At(t,e,v,o,a,null)}return;case"dialog":gt("beforetoggle",t),gt("toggle",t),gt("cancel",t),gt("close",t);break;case"iframe":case"object":gt("load",t);break;case"video":case"audio":for(o=0;o<io.length;o++)gt(io[o],t);break;case"image":gt("error",t),gt("load",t);break;case"details":gt("toggle",t);break;case"embed":case"source":case"link":gt("error",t),gt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in a)if(a.hasOwnProperty(w)&&(o=a[w],o!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,e));default:At(t,e,w,o,a,null)}return;default:if(Kl(e)){for(H in a)a.hasOwnProperty(H)&&(o=a[H],o!==void 0&&Nc(t,e,H,o,a,void 0));return}}for(x in a)a.hasOwnProperty(x)&&(o=a[x],o!=null&&At(t,e,x,o,a,null))}function dx(t,e,a,o){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,c=null,g=null,x=null,v=null,w=null,H=null;for(C in a){var U=a[C];if(a.hasOwnProperty(C)&&U!=null)switch(C){case"checked":break;case"value":break;case"defaultValue":v=U;default:o.hasOwnProperty(C)||At(t,e,C,null,o,U)}}for(var E in o){var C=o[E];if(U=a[E],o.hasOwnProperty(E)&&(C!=null||U!=null))switch(E){case"type":c=C;break;case"name":r=C;break;case"checked":w=C;break;case"defaultChecked":H=C;break;case"value":g=C;break;case"defaultValue":x=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(l(137,e));break;default:C!==U&&At(t,e,E,C,o,U)}}Yl(t,g,x,v,w,H,c,r);return;case"select":C=g=x=E=null;for(c in a)if(v=a[c],a.hasOwnProperty(c)&&v!=null)switch(c){case"value":break;case"multiple":C=v;default:o.hasOwnProperty(c)||At(t,e,c,null,o,v)}for(r in o)if(c=o[r],v=a[r],o.hasOwnProperty(r)&&(c!=null||v!=null))switch(r){case"value":E=c;break;case"defaultValue":x=c;break;case"multiple":g=c;default:c!==v&&At(t,e,r,c,o,v)}e=x,a=g,o=C,E!=null?Vs(t,!!a,E,!1):!!o!=!!a&&(e!=null?Vs(t,!!a,e,!0):Vs(t,!!a,a?[]:"",!1));return;case"textarea":C=E=null;for(x in a)if(r=a[x],a.hasOwnProperty(x)&&r!=null&&!o.hasOwnProperty(x))switch(x){case"value":break;case"children":break;default:At(t,e,x,null,o,r)}for(g in o)if(r=o[g],c=a[g],o.hasOwnProperty(g)&&(r!=null||c!=null))switch(g){case"value":E=r;break;case"defaultValue":C=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(l(91));break;default:r!==c&&At(t,e,g,r,o,c)}Jp(t,E,C);return;case"option":for(var W in a)if(E=a[W],a.hasOwnProperty(W)&&E!=null&&!o.hasOwnProperty(W))switch(W){case"selected":t.selected=!1;break;default:At(t,e,W,null,o,E)}for(v in o)if(E=o[v],C=a[v],o.hasOwnProperty(v)&&E!==C&&(E!=null||C!=null))switch(v){case"selected":t.selected=E&&typeof E!="function"&&typeof E!="symbol";break;default:At(t,e,v,E,o,C)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ot in a)E=a[ot],a.hasOwnProperty(ot)&&E!=null&&!o.hasOwnProperty(ot)&&At(t,e,ot,null,o,E);for(w in o)if(E=o[w],C=a[w],o.hasOwnProperty(w)&&E!==C&&(E!=null||C!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(l(137,e));break;default:At(t,e,w,E,o,C)}return;default:if(Kl(e)){for(var St in a)E=a[St],a.hasOwnProperty(St)&&E!==void 0&&!o.hasOwnProperty(St)&&Nc(t,e,St,void 0,o,E);for(H in o)E=o[H],C=a[H],!o.hasOwnProperty(H)||E===C||E===void 0&&C===void 0||Nc(t,e,H,E,o,C);return}}for(var S in a)E=a[S],a.hasOwnProperty(S)&&E!=null&&!o.hasOwnProperty(S)&&At(t,e,S,null,o,E);for(U in o)E=o[U],C=a[U],!o.hasOwnProperty(U)||E===C||E==null&&C==null||At(t,e,U,E,o,C)}function eh(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function mx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var r=a[o],c=r.transferSize,g=r.initiatorType,x=r.duration;if(c&&x&&eh(g)){for(g=0,x=r.responseEnd,o+=1;o<a.length;o++){var v=a[o],w=v.startTime;if(w>x)break;var H=v.transferSize,U=v.initiatorType;H&&eh(U)&&(v=v.responseEnd,g+=H*(v<x?1:(x-w)/(v-w)))}if(--o,e+=8*(c+g)/(r.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var qc=null,Cc=null;function zi(t){return t.nodeType===9?t:t.ownerDocument}function ah(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function sh(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Dc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Oc=null;function gx(){var t=window.event;return t&&t.type==="popstate"?t===Oc?!1:(Oc=t,!0):(Oc=null,!1)}var nh=typeof setTimeout=="function"?setTimeout:void 0,hx=typeof clearTimeout=="function"?clearTimeout:void 0,oh=typeof Promise=="function"?Promise:void 0,bx=typeof queueMicrotask=="function"?queueMicrotask:typeof oh<"u"?function(t){return oh.resolve(null).then(t).catch(fx)}:nh;function fx(t){setTimeout(function(){throw t})}function La(t){return t==="head"}function ih(t,e){var a=e,o=0;do{var r=a.nextSibling;if(t.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(r),cn(e);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")ro(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,ro(a);for(var c=a.firstChild;c;){var g=c.nextSibling,x=c.nodeName;c[jn]||x==="SCRIPT"||x==="STYLE"||x==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=g}}else a==="body"&&ro(t.ownerDocument.body);a=r}while(a);cn(e)}function lh(t,e){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function Rc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Rc(a),Ul(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function _x(t,e,a,o){for(;t.nodeType===1;){var r=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[jn])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==r.rel||t.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||t.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||t.getAttribute("title")!==(r.title==null?null:r.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(r.src==null?null:r.src)||t.getAttribute("type")!==(r.type==null?null:r.type)||t.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var c=r.name==null?null:""+r.name;if(r.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=Re(t.nextSibling),t===null)break}return null}function xx(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Re(t.nextSibling),t===null))return null;return t}function rh(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Re(t.nextSibling),t===null))return null;return t}function zc(t){return t.data==="$?"||t.data==="$~"}function Hc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function kx(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var o=function(){e(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Re(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Lc=null;function ch(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return Re(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function uh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function ph(t,e,a){switch(e=zi(a),t){case"html":if(t=e.documentElement,!t)throw Error(l(452));return t;case"head":if(t=e.head,!t)throw Error(l(453));return t;case"body":if(t=e.body,!t)throw Error(l(454));return t;default:throw Error(l(451))}}function ro(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Ul(t)}var ze=new Map,dh=new Set;function Hi(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var xa=Q.d;Q.d={f:yx,r:Gx,D:vx,C:Mx,L:Tx,m:jx,X:Sx,S:Ax,M:Ix};function yx(){var t=xa.f(),e=wi();return t||e}function Gx(t){var e=As(t);e!==null&&e.tag===5&&e.type==="form"?Im(e):xa.r(t)}var on=typeof document>"u"?null:document;function mh(t,e,a){var o=on;if(o&&typeof e=="string"&&e){var r=we(e);r='link[rel="'+t+'"][href="'+r+'"]',typeof a=="string"&&(r+='[crossorigin="'+a+'"]'),dh.has(r)||(dh.add(r),t={rel:t,crossOrigin:a,href:e},o.querySelector(r)===null&&(e=o.createElement("link"),se(e,"link",t),Jt(e),o.head.appendChild(e)))}}function vx(t){xa.D(t),mh("dns-prefetch",t,null)}function Mx(t,e){xa.C(t,e),mh("preconnect",t,e)}function Tx(t,e,a){xa.L(t,e,a);var o=on;if(o&&t&&e){var r='link[rel="preload"][as="'+we(e)+'"]';e==="image"&&a&&a.imageSrcSet?(r+='[imagesrcset="'+we(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(r+='[imagesizes="'+we(a.imageSizes)+'"]')):r+='[href="'+we(t)+'"]';var c=r;switch(e){case"style":c=ln(t);break;case"script":c=rn(t)}ze.has(c)||(t=k({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),ze.set(c,t),o.querySelector(r)!==null||e==="style"&&o.querySelector(co(c))||e==="script"&&o.querySelector(uo(c))||(e=o.createElement("link"),se(e,"link",t),Jt(e),o.head.appendChild(e)))}}function jx(t,e){xa.m(t,e);var a=on;if(a&&t){var o=e&&typeof e.as=="string"?e.as:"script",r='link[rel="modulepreload"][as="'+we(o)+'"][href="'+we(t)+'"]',c=r;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=rn(t)}if(!ze.has(c)&&(t=k({rel:"modulepreload",href:t},e),ze.set(c,t),a.querySelector(r)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(uo(c)))return}o=a.createElement("link"),se(o,"link",t),Jt(o),a.head.appendChild(o)}}}function Ax(t,e,a){xa.S(t,e,a);var o=on;if(o&&t){var r=Ss(o).hoistableStyles,c=ln(t);e=e||"default";var g=r.get(c);if(!g){var x={loading:0,preload:null};if(g=o.querySelector(co(c)))x.loading=5;else{t=k({rel:"stylesheet",href:t,"data-precedence":e},a),(a=ze.get(c))&&Bc(t,a);var v=g=o.createElement("link");Jt(v),se(v,"link",t),v._p=new Promise(function(w,H){v.onload=w,v.onerror=H}),v.addEventListener("load",function(){x.loading|=1}),v.addEventListener("error",function(){x.loading|=2}),x.loading|=4,Li(g,e,o)}g={type:"stylesheet",instance:g,count:1,state:x},r.set(c,g)}}}function Sx(t,e){xa.X(t,e);var a=on;if(a&&t){var o=Ss(a).hoistableScripts,r=rn(t),c=o.get(r);c||(c=a.querySelector(uo(r)),c||(t=k({src:t,async:!0},e),(e=ze.get(r))&&Uc(t,e),c=a.createElement("script"),Jt(c),se(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},o.set(r,c))}}function Ix(t,e){xa.M(t,e);var a=on;if(a&&t){var o=Ss(a).hoistableScripts,r=rn(t),c=o.get(r);c||(c=a.querySelector(uo(r)),c||(t=k({src:t,async:!0,type:"module"},e),(e=ze.get(r))&&Uc(t,e),c=a.createElement("script"),Jt(c),se(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},o.set(r,c))}}function gh(t,e,a,o){var r=(r=dt.current)?Hi(r):null;if(!r)throw Error(l(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=ln(a.href),a=Ss(r).hoistableStyles,o=a.get(e),o||(o={type:"style",instance:null,count:0,state:null},a.set(e,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ln(a.href);var c=Ss(r).hoistableStyles,g=c.get(t);if(g||(r=r.ownerDocument||r,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,g),(c=r.querySelector(co(t)))&&!c._p&&(g.instance=c,g.state.loading=5),ze.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ze.set(t,a),c||Vx(r,t,a,g.state))),e&&o===null)throw Error(l(528,""));return g}if(e&&o!==null)throw Error(l(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=rn(a),a=Ss(r).hoistableScripts,o=a.get(e),o||(o={type:"script",instance:null,count:0,state:null},a.set(e,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,t))}}function ln(t){return'href="'+we(t)+'"'}function co(t){return'link[rel="stylesheet"]['+t+"]"}function hh(t){return k({},t,{"data-precedence":t.precedence,precedence:null})}function Vx(t,e,a,o){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?o.loading=1:(e=t.createElement("link"),o.preload=e,e.addEventListener("load",function(){return o.loading|=1}),e.addEventListener("error",function(){return o.loading|=2}),se(e,"link",a),Jt(e),t.head.appendChild(e))}function rn(t){return'[src="'+we(t)+'"]'}function uo(t){return"script[async]"+t}function bh(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var o=t.querySelector('style[data-href~="'+we(a.href)+'"]');if(o)return e.instance=o,Jt(o),o;var r=k({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),Jt(o),se(o,"style",r),Li(o,a.precedence,t),e.instance=o;case"stylesheet":r=ln(a.href);var c=t.querySelector(co(r));if(c)return e.state.loading|=4,e.instance=c,Jt(c),c;o=hh(a),(r=ze.get(r))&&Bc(o,r),c=(t.ownerDocument||t).createElement("link"),Jt(c);var g=c;return g._p=new Promise(function(x,v){g.onload=x,g.onerror=v}),se(c,"link",o),e.state.loading|=4,Li(c,a.precedence,t),e.instance=c;case"script":return c=rn(a.src),(r=t.querySelector(uo(c)))?(e.instance=r,Jt(r),r):(o=a,(r=ze.get(c))&&(o=k({},a),Uc(o,r)),t=t.ownerDocument||t,r=t.createElement("script"),Jt(r),se(r,"link",o),t.head.appendChild(r),e.instance=r);case"void":return null;default:throw Error(l(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(o=e.instance,e.state.loading|=4,Li(o,a.precedence,t));return e.instance}function Li(t,e,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=o.length?o[o.length-1]:null,c=r,g=0;g<o.length;g++){var x=o[g];if(x.dataset.precedence===e)c=x;else if(c!==r)break}c?c.parentNode.insertBefore(t,c.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function Bc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Uc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Bi=null;function fh(t,e,a){if(Bi===null){var o=new Map,r=Bi=new Map;r.set(a,o)}else r=Bi,o=r.get(a),o||(o=new Map,r.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),r=0;r<a.length;r++){var c=a[r];if(!(c[jn]||c[Wt]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var g=c.getAttribute(e)||"";g=t+g;var x=o.get(g);x?x.push(c):o.set(g,[c])}}return o}function _h(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function wx(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function xh(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Ex(t,e,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var r=ln(o.href),c=e.querySelector(co(r));if(c){e=c._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Ui.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=c,Jt(c);return}c=e.ownerDocument||e,o=hh(o),(r=ze.get(r))&&Bc(o,r),c=c.createElement("link"),Jt(c);var g=c;g._p=new Promise(function(x,v){g.onload=x,g.onerror=v}),se(c,"link",o),a.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Ui.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var Pc=0;function Nx(t,e){return t.stylesheets&&t.count===0&&Yi(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&Yi(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+e);0<t.imgBytes&&Pc===0&&(Pc=62500*mx());var r=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Yi(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>Pc?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(r)}}:null}function Ui(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Yi(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Pi=null;function Yi(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Pi=new Map,e.forEach(qx,t),Pi=null,Ui.call(t))}function qx(t,e){if(!(e.state.loading&4)){var a=Pi.get(t);if(a)var o=a.get(null);else{a=new Map,Pi.set(t,a);for(var r=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<r.length;c++){var g=r[c];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),o=g)}o&&a.set(null,o)}r=e.instance,g=r.getAttribute("data-precedence"),c=a.get(g)||o,c===o&&a.set(null,r),a.set(g,r),this.count++,o=Ui.bind(this),r.addEventListener("load",o),r.addEventListener("error",o),c?c.parentNode.insertBefore(r,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(r,t.firstChild)),e.state.loading|=4}}var po={$$typeof:O,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function Cx(t,e,a,o,r,c,g,x,v){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=zl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zl(0),this.hiddenUpdates=zl(null),this.identifierPrefix=o,this.onUncaughtError=r,this.onCaughtError=c,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function kh(t,e,a,o,r,c,g,x,v,w,H,U){return t=new Cx(t,e,a,g,v,w,H,U,x),e=1,c===!0&&(e|=24),c=Ge(3,null,null,e),t.current=c,c.stateNode=t,e=vr(),e.refCount++,t.pooledCache=e,e.refCount++,c.memoizedState={element:o,isDehydrated:a,cache:e},Ar(c),t}function yh(t){return t?(t=Rs,t):Rs}function Gh(t,e,a,o,r,c){r=yh(r),o.context===null?o.context=r:o.pendingContext=r,o=Va(e),o.payload={element:a},c=c===void 0?null:c,c!==null&&(o.callback=c),a=wa(t,o,e),a!==null&&(fe(a,t,e),Un(a,t,e))}function vh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function Yc(t,e){vh(t,e),(t=t.alternate)&&vh(t,e)}function Mh(t){if(t.tag===13||t.tag===31){var e=is(t,67108864);e!==null&&fe(e,t,67108864),Yc(t,67108864)}}function Th(t){if(t.tag===13||t.tag===31){var e=Ae();e=Hl(e);var a=is(t,e);a!==null&&fe(a,t,e),Yc(t,e)}}var Xi=!0;function Dx(t,e,a,o){var r=z.T;z.T=null;var c=Q.p;try{Q.p=2,Xc(t,e,a,o)}finally{Q.p=c,z.T=r}}function Ox(t,e,a,o){var r=z.T;z.T=null;var c=Q.p;try{Q.p=8,Xc(t,e,a,o)}finally{Q.p=c,z.T=r}}function Xc(t,e,a,o){if(Xi){var r=Kc(o);if(r===null)Ec(t,e,o,Ki,a),Ah(t,o);else if(zx(r,t,e,a,o))o.stopPropagation();else if(Ah(t,o),e&4&&-1<Rx.indexOf(t)){for(;r!==null;){var c=As(r);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var g=es(c.pendingLanes);if(g!==0){var x=c;for(x.pendingLanes|=2,x.entangledLanes|=2;g;){var v=1<<31-ke(g);x.entanglements[1]|=v,g&=~v}Je(c),(Gt&6)===0&&(Ii=_e()+500,oo(0))}}break;case 31:case 13:x=is(c,2),x!==null&&fe(x,c,2),wi(),Yc(c,2)}if(c=Kc(o),c===null&&Ec(t,e,o,Ki,a),c===r)break;r=c}r!==null&&o.stopPropagation()}else Ec(t,e,o,null,a)}}function Kc(t){return t=Zl(t),Fc(t)}var Ki=null;function Fc(t){if(Ki=null,t=js(t),t!==null){var e=m(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=d(e),t!==null)return t;t=null}else if(a===31){if(t=h(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Ki=t,null}function jh(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(v0()){case qp:return 2;case Cp:return 8;case Do:case M0:return 32;case Dp:return 268435456;default:return 32}default:return 32}}var Zc=!1,Ba=null,Ua=null,Pa=null,mo=new Map,go=new Map,Ya=[],Rx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ah(t,e){switch(t){case"focusin":case"focusout":Ba=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":Pa=null;break;case"pointerover":case"pointerout":mo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":go.delete(e.pointerId)}}function ho(t,e,a,o,r,c){return t===null||t.nativeEvent!==c?(t={blockedOn:e,domEventName:a,eventSystemFlags:o,nativeEvent:c,targetContainers:[r]},e!==null&&(e=As(e),e!==null&&Mh(e)),t):(t.eventSystemFlags|=o,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function zx(t,e,a,o,r){switch(e){case"focusin":return Ba=ho(Ba,t,e,a,o,r),!0;case"dragenter":return Ua=ho(Ua,t,e,a,o,r),!0;case"mouseover":return Pa=ho(Pa,t,e,a,o,r),!0;case"pointerover":var c=r.pointerId;return mo.set(c,ho(mo.get(c)||null,t,e,a,o,r)),!0;case"gotpointercapture":return c=r.pointerId,go.set(c,ho(go.get(c)||null,t,e,a,o,r)),!0}return!1}function Sh(t){var e=js(t.target);if(e!==null){var a=m(e);if(a!==null){if(e=a.tag,e===13){if(e=d(a),e!==null){t.blockedOn=e,Bp(t.priority,function(){Th(a)});return}}else if(e===31){if(e=h(a),e!==null){t.blockedOn=e,Bp(t.priority,function(){Th(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fi(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=Kc(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Fl=o,a.target.dispatchEvent(o),Fl=null}else return e=As(a),e!==null&&Mh(e),t.blockedOn=a,!1;e.shift()}return!0}function Ih(t,e,a){Fi(t)&&a.delete(e)}function Hx(){Zc=!1,Ba!==null&&Fi(Ba)&&(Ba=null),Ua!==null&&Fi(Ua)&&(Ua=null),Pa!==null&&Fi(Pa)&&(Pa=null),mo.forEach(Ih),go.forEach(Ih)}function Zi(t,e){t.blockedOn===e&&(t.blockedOn=null,Zc||(Zc=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Hx)))}var Qi=null;function Vh(t){Qi!==t&&(Qi=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Qi===t&&(Qi=null);for(var e=0;e<t.length;e+=3){var a=t[e],o=t[e+1],r=t[e+2];if(typeof o!="function"){if(Fc(o||a)===null)continue;break}var c=As(a);c!==null&&(t.splice(e,3),e-=3,Kr(c,{pending:!0,data:r,method:a.method,action:o},o,r))}}))}function cn(t){function e(v){return Zi(v,t)}Ba!==null&&Zi(Ba,t),Ua!==null&&Zi(Ua,t),Pa!==null&&Zi(Pa,t),mo.forEach(e),go.forEach(e);for(var a=0;a<Ya.length;a++){var o=Ya[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ya.length&&(a=Ya[0],a.blockedOn===null);)Sh(a),a.blockedOn===null&&Ya.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var r=a[o],c=a[o+1],g=r[pe]||null;if(typeof c=="function")g||Vh(a);else if(g){var x=null;if(c&&c.hasAttribute("formAction")){if(r=c,g=c[pe]||null)x=g.formAction;else if(Fc(r)!==null)continue}else x=g.action;typeof x=="function"?a[o+1]=x:(a.splice(o,3),o-=3),Vh(a)}}}function wh(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(g){return r=g})},focusReset:"manual",scroll:"manual"})}function e(){r!==null&&(r(),r=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,r=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),r!==null&&(r(),r=null)}}}function Qc(t){this._internalRoot=t}Ji.prototype.render=Qc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(l(409));var a=e.current,o=Ae();Gh(a,o,t,e,null,null)},Ji.prototype.unmount=Qc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Gh(t.current,2,null,t,null,null),wi(),e[Ts]=null}};function Ji(t){this._internalRoot=t}Ji.prototype.unstable_scheduleHydration=function(t){if(t){var e=Lp();t={blockedOn:null,target:t,priority:e};for(var a=0;a<Ya.length&&e!==0&&e<Ya[a].priority;a++);Ya.splice(a,0,t),a===0&&Sh(t)}};var Eh=n.version;if(Eh!=="19.2.6")throw Error(l(527,Eh,"19.2.6"));Q.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(l(188)):(t=Object.keys(t).join(","),Error(l(268,t)));return t=b(e),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var Lx={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$i.isDisabled&&$i.supportsFiber)try{vn=$i.inject(Lx),xe=$i}catch{}}return fo.createRoot=function(t,e){if(!p(t))throw Error(l(299));var a=!1,o="",r=zm,c=Hm,g=Lm;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(o=e.identifierPrefix),e.onUncaughtError!==void 0&&(r=e.onUncaughtError),e.onCaughtError!==void 0&&(c=e.onCaughtError),e.onRecoverableError!==void 0&&(g=e.onRecoverableError)),e=kh(t,1,!1,null,null,a,o,null,r,c,g,wh),t[Ts]=e.current,wc(t),new Qc(e)},fo.hydrateRoot=function(t,e,a){if(!p(t))throw Error(l(299));var o=!1,r="",c=zm,g=Hm,x=Lm,v=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(r=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(x=a.onRecoverableError),a.formState!==void 0&&(v=a.formState)),e=kh(t,1,!0,e,a??null,o,r,v,c,g,x,wh),e.context=yh(null),a=e.current,o=Ae(),o=Hl(o),r=Va(o),r.callback=null,wa(a,r,o),a=o,e.current.lanes=a,Tn(e,a),Je(e),t[Ts]=e.current,wc(t),new Ji(e)},fo.version="19.2.6",fo}var Bh;function Jx(){if(Bh)return Wc.exports;Bh=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(n){console.error(n)}}return s(),Wc.exports=Qx(),Wc.exports}var $x=Jx();/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),tk=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,i,l)=>l?l.toUpperCase():i.toLowerCase()),Uh=s=>{const n=tk(s);return n.charAt(0).toUpperCase()+n.slice(1)},Tf=(...s)=>s.filter((n,i,l)=>!!n&&n.trim()!==""&&l.indexOf(n)===i).join(" ").trim(),ek=s=>{for(const n in s)if(n.startsWith("aria-")||n==="role"||n==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ak={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sk=Y.forwardRef(({color:s="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:l,className:p="",children:m,iconNode:d,...h},f)=>Y.createElement("svg",{ref:f,...ak,width:n,height:n,stroke:s,strokeWidth:l?Number(i)*24/Number(n):i,className:Tf("lucide",p),...!m&&!ek(h)&&{"aria-hidden":"true"},...h},[...d.map(([b,_])=>Y.createElement(b,_)),...Array.isArray(m)?m:[m]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ht=(s,n)=>{const i=Y.forwardRef(({className:l,...p},m)=>Y.createElement(sk,{ref:m,iconNode:n,className:Tf(`lucide-${Wx(Uh(s))}`,`lucide-${s}`,l),...p}));return i.displayName=Uh(s),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nk=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],ju=ht("archive",nk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ok=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Au=ht("book-open",ok);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ik=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],su=ht("calculator",ik);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lk=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],rk=ht("calendar",lk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ck=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],uk=ht("chevron-down",ck);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pk=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],hl=ht("circle-check",pk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dk=[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],mk=ht("circle-play",dk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gk=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],hk=ht("code",gk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bk=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Su=ht("copy",bk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fk=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],_k=ht("credit-card",fk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xk=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],jf=ht("download",xk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kk=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Fa=ht("external-link",kk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yk=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Gk=ht("eye",yk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vk=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Mk=ht("file-text",vk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tk=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],Ph=ht("flask-conical",Tk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jk=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],Yh=ht("funnel",jk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ak=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Iu=ht("house",Ak);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sk=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Af=ht("info",Sk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ik=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],Vk=ht("lightbulb",Ik);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wk=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],Ek=ht("link",wk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nk=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],qk=ht("message-circle",Nk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ck=[["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",key:"39pd36"}],["rect",{width:"8",height:"4",x:"10",y:"6",rx:"1",key:"aywv1n"}]],Sf=ht("newspaper",Ck);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dk=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],If=ht("palette",Dk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ok=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]],_o=ht("pin",Ok);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rk=[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]],zk=ht("scale",Rk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hk=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Vu=ht("search",Hk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lk=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],Bk=ht("settings-2",Lk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uk=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],Pk=ht("shield-alert",Uk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yk=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Xk=ht("shield-check",Yk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kk=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],yo=ht("shopping-bag",Kk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fk=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Zk=ht("sparkles",Fk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qk=[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]],Jk=ht("table",Qk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $k=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Wk=ht("triangle-alert",$k);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],bl=ht("users",t2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Xh=ht("x",e2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],il=ht("youtube",a2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],n2=ht("zap",s2);/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const nu=[{name:"Inicio",path:"/",key:"nav.inicio"},{name:"Novedades",path:"/novedades",key:"nav.novedades"},{name:"Servicios",path:"/servicios",key:"nav.servicios"},{name:"Evo",path:"/evo",key:"nav.evo"},{name:"Otros códigos",path:"/otros",key:"nav.otros"},{name:"Guía",path:"/guia",key:"nav.guia"},{name:"Tutoriales",path:"/tutoriales",key:"nav.tutoriales"},{name:"Descargas",path:"/descargas",key:"nav.descargas"}],fl=[{id:"a",name:"Cibernético",shortName:"CYBER",icon:"Cpu",image:"https://github.com/luqueSmith/MGG/blob/main/img/cyber.png?raw=true"},{id:"b",name:"Zombi",shortName:"ZOMBI",icon:"Skull",image:"https://github.com/luqueSmith/MGG/blob/main/img/necro.png?raw=true"},{id:"c",name:"Guerrero",shortName:"Sword",icon:"Sword",image:"https://github.com/luqueSmith/MGG/blob/main/img/sable.png?raw=true"},{id:"d",name:"Bestia",shortName:"ZOOMORFO",icon:"PawPrint",image:"https://github.com/luqueSmith/MGG/blob/main/img/zomorfo.png?raw=true"},{id:"e",name:"Galáctico",shortName:"GALAXY",icon:"Star",image:"https://github.com/luqueSmith/MGG/blob/main/img/galactico.png?raw=true"},{id:"f",name:"Mítico",shortName:"MYTHIC",icon:"FlaskConical",image:"https://github.com/luqueSmith/MGG/blob/main/img/mitico.png?raw=true"}],pn={a:["#38bdf8","#2563eb"],b:["#a855f7","#6d28d9"],c:["#f59e0b","#d97706"],d:["#22c55e","#15803d"],e:["#06b6d4","#0f766e"],f:["#ec4899","#be185d"],n:["#64748b","#334155"]},ou=[{id:"offer_1",nombre:"54 Hornos 1M de Oro",nombreEn:"54 Furnaces 1M Gold",precio:37,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/1MdeOro.png?raw=true",descripcion:"Oferta relámpago: pack de 54 hornos con 1 millón de oro directo.",descripcionEn:"Flash offer: pack of 54 furnaces with 1 million gold direct.",features:["Entrega prioritaria","Ahorro del 20%","Soporte exclusivo"],featuresEn:["Priority delivery","20% Savings","Exclusive support"],categoria:"OFFER"},{id:"offer_2",nombre:"54 Hornos 2M de Oro",nombreEn:"54 Furnaces 2M Gold",precio:48,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/2MdeOro.png?raw=true",descripcion:"Pack industrial para jugadores de alto nivel con 2 millones de oro.",descripcionEn:"Industrial pack for high-level players with 2 million gold.",features:["Capacidad máxima","Optimización de recursos","Bonus de velocidad"],featuresEn:["Maximum capacity","Resource optimization","Speed bonus"],categoria:"OFFER"},{id:"offer_3",nombre:"54 Hornos 3M de Oro",nombreEn:"54 Furnaces 3M Gold",precio:59,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/3MdeOro.png?raw=true",descripcion:"La máxima potencia disponible en el mercado actual.",descripcionEn:"The maximum power available in the current market.",features:["Máximo beneficio","Inyección instantánea","Certificado Elite"],featuresEn:["Maximum benefit","Instant injection","Elite certificate"],categoria:"OFFER"},{id:"main_1",nombre:"Horno de Oro",nombreEn:"Gold Furnace",precio:7,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/Hornos%20de%20oro.png?raw=true",descripcion:"Aceleración masiva de producción de oro.",descripcionEn:"Massive acceleration of gold production.",features:["Entrega en menos de 10 min","Soporte 24/7","Proceso guiado"],featuresEn:["Delivery in < 10 min","24/7 Support","Guided process"],categoria:"MAIN"},{id:"main_2",nombre:"Mutante",nombreEn:"Mutant",precio:2,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/mutante.png?raw=true",descripcion:"Obtención de mutantes raros según disponibilidad.",descripcionEn:"Get rare mutants depending on availability.",features:["Selección a elegir","Stats máximos","Entrega rápida"],featuresEn:["Custom selection","Max stats","Fast delivery"],categoria:"MAIN"},{id:"main_3",nombre:"Orbes Basic 6 x 10",nombreEn:"Basic Orbs 6 x 10",precio:1,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/bsic-orb6.png?raw=true",descripcion:"Pack de orbes básicos para fortalecer a tu equipo.",descripcionEn:"Basic orb pack to strengthen your team.",features:["Stock ilimitado","Precio promocional","Ideal para nuevos"],featuresEn:["Unlimited stock","Promotional price","Ideal for beginners"],categoria:"MAIN"},{id:"main_4",nombre:"1M de Oro Directo",nombreEn:"1M Direct Gold",precio:35,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/1MOro.png?raw=true",descripcion:"Paquete de moneda premium gestionado con verificación.",descripcionEn:"Premium currency package managed with verification.",features:["Proceso guiado","Entrega coordinada","Soporte manual"],featuresEn:["Guided process","Coordinated delivery","Manual support"],categoria:"MAIN"},{id:"main_5",nombre:"ORB Nivel 7 Elite",nombreEn:"ORB Level 7 Elite",precio:6,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/obrNVL7.png?raw=true",descripcion:"Orbes de alto nivel para máximo rendimiento.",descripcionEn:"High-level orbs for maximum performance.",features:["Efectos críticos","Rareza extrema","Compatibilidad total"],featuresEn:["Critical effects","Extreme rarity","Total compatibility"],categoria:"MAIN"},{id:"main_6",nombre:"Mutante Bug Platino",nombreEn:"Platinum Bug Mutant",precio:6,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/bf8515d2-211a-411c-a1d9-da10c59ff4dd.png?raw=true",descripcion:"Mutante con estética platino y habilidades especiales.",descripcionEn:"Mutant with platinum aesthetics and special abilities.",features:["Visual único","Habilidades especiales","Edición 2026"],featuresEn:["Unique visual","Special skills","2026 Edition"],categoria:"MAIN"},{id:"main_7",nombre:"100k Tarros XP",nombreEn:"100k XP Jars",precio:15,imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRWQsH6i8OPIj8DtvkxDggsiG4FfvRNj4zkA&s",descripcion:"Nivelación rápida para tu ejército de gladiadores.",descripcionEn:"Fast leveling for your gladiator army.",features:["Sube a nivel alto","Ahorro de tiempo","Fácil aplicación"],featuresEn:["Level up high","Time saving","Easy application"],categoria:"MAIN"},{id:"main_8",nombre:"100k Fichas JackPot",nombreEn:"100k Jackpot Tokens",precio:15,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/fichasjacpot.png?raw=true",descripcion:"Pack masivo de fichas para eventos y ruletas.",descripcionEn:"Massive token pack for events and roulettes.",features:["Alta recompensa","Giro automático","Uso flexible"],featuresEn:["High reward","Auto spin","Flexible use"],categoria:"MAIN"},{id:"main_9",nombre:"Expansión Laboratorio",nombreEn:"Laboratory Expansion",precio:4,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/laboratorio.png?raw=true",descripcion:"Desbloquea slots y mejoras del laboratorio.",descripcionEn:"Unlock laboratory slots and improvements.",features:["Más slots","Mejora visual","Multi-breeding"],featuresEn:["More slots","Visual improvement","Multi-breeding"],categoria:"MAIN"},{id:"main_10",nombre:"Orbe Velocidad Nivel 5",nombreEn:"Level 5 Speed Orb",precio:2,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/orbelvl5.png?raw=true",descripcion:"Potenciador de velocidad para mejorar turnos.",descripcionEn:"Speed booster to improve turns.",features:["Primer golpe","Agilidad +50%","Recarga rápida"],featuresEn:["First strike","Agility +50%","Fast recharge"],categoria:"MAIN"},{id:"main_11",nombre:"ORB Nivel ATK 6 x 10",nombreEn:"ORB ATK Level 6 x 10",precio:6,imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkvqT-WxlpjpLTxcrwKAUQmGTTv6vtrVHxkA&s",descripcion:"Pack ofensivo para maximizar DPS, Te entrego 10 orbes del paquete.",descripcionEn:"Offensive pack to maximize DPS, I deliver 10 orbs from the package.",features:["Daño puro","Críticos frecuentes","Efecto sangrado"],featuresEn:["Pure damage","Frequent crits","Bleeding effect"],categoria:"MAIN"},{id:"main_12",nombre:"BIG BOSS",nombreEn:"BIG BOSS",precio:10,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/bigboss.png?raw=true",descripcion:"Te consigo a BigBoss en tu cuenta.",descripcionEn:"I get BigBoss in your account.",features:["Resistencia temporal","Fuerza X2","Drop mejorado"],featuresEn:["Temporary resistance","2X Strength","Improved drop"],categoria:"MAIN"},{id:"other_1",nombre:"Doxeo para +51",nombreEn:"Doxxing for +51",precio:5,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/doxeo.png?raw=true",descripcion:"Saco informacion como DNI, Arbol Familiar antencedentes y etc con el numero o nombre para Peru.",descripcionEn:"I extract information like ID, Family Tree, records, etc. with number or name for Peru.",features:["Fuentes públicas","Reporte PDF","Enfoque de privacidad"],featuresEn:["Public sources","PDF Report","Privacy focused"],categoria:"OTHER"},{id:"other_2",nombre:"Desarrollo Web Next-Gen",nombreEn:"Next-Gen Web Development",precio:40,imagen:"https://www.freecodecamp.org/news/content/images/2019/09/lua_script.jpg",descripcion:"Creación de portafolios, tiendas o landing pages y etc, solo 40 soles por una web alojada en GitHub, Si te interesa una web con dominio .com dale en ver mas..",descripcionEn:"Creation of portfolios, stores or landing pages etc, only 40 soles for a website hosted on GitHub. If you are interested in a website with a .com domain click see more..",features:["UI/UX único","Optimización SEO","Host incluido","Entrega profesional"],featuresEn:["Unique UI/UX","SEO Optimization","Host included","Professional delivery"],categoria:"OTHER",saberMas:"https://webcraft-ux.github.io/webcraft/"},{id:"other_3",nombre:"Scripts Custom MGG",nombreEn:"Custom MGG Scripts",precio:15,imagen:"https://callcenters.by/images/asterisk/lua%20plugin.jpg",descripcion:"Automatizaciones personalizadas para productividad.",descripcionEn:"Custom automations for productivity.",features:["Auto-farm","Logs de actividades","Configuración guiada","Soporte"],featuresEn:["Auto-farm","Activity logs","Guided configuration","Support"],categoria:"OTHER"},{id:"other_4",nombre:"ChatGPT Premium",nombreEn:"ChatGPT Premium",precio:8,imagen:"https://spanish.entrepreneur.com/wp-content/uploads/sites/3/2024/12/1733494589-openai-chatgpt-premium-subscription-1224-g2186754261.jpg",descripcion:"Acceso premium para chatGPT barato y con descuento por cantidad.",descripcionEn:"Premium access for cheap ChatGPT with quantity discount.",features:["Asistencia rápida","Uso personal","Configuración guiada","Soporte base"],featuresEn:["Fast assistance","Personal use","Guided configuration","Basic support"],categoria:"OTHER"}],Kh={Cajas:`Box Cyber	mystery_cyber	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_cyber.png
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
Orbe Respuesta +20%	orb_basic_retaliate_06	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_retaliate_06.png`},Vf="51906328464",sp="https://chat.whatsapp.com/DALbalnNe9N6bD4W1Wp0HM?mode=gi_t",o2=[0,50,60,65,70,75,80,85,90],wf=[{id:"pe",name:"Perú",currency:"PEN",symbol:"S/",rate:1,exchangeRate:1,flag:"🇵🇪"},{id:"mx",name:"México",currency:"MXN",symbol:"$",rate:1,exchangeRate:5.07,flag:"🇲🇽"},{id:"es",name:"España",currency:"EUR",symbol:"€",rate:1,exchangeRate:.25,flag:"🇪🇸"},{id:"cl",name:"Chile",currency:"CLP",symbol:"$",rate:1,exchangeRate:262.23,flag:"🇨🇱"},{id:"ar",name:"Argentina",currency:"ARS",symbol:"$",rate:1,exchangeRate:408.14,flag:"🇦🇷"},{id:"ve",name:"Venezuela",currency:"VES",symbol:"Bs",rate:1,exchangeRate:150.82,flag:"🇻🇪"},{id:"co",name:"Colombia",currency:"COP",symbol:"$",rate:1,exchangeRate:1110.59,flag:"🇨🇴"},{id:"bo",name:"Bolivia",currency:"BOB",symbol:"Bs",rate:1,exchangeRate:2.02,flag:"🇧🇴"}],i2=[{name:"Western Union",logo:"https://play-lh.googleusercontent.com/2O6TfOnCMQ8aWdhcME3CwHK_od33WPBw02ZpG_lpvnwRPHfCKBlmCeaLJ_tL8oqchBg",info:"Global money transfer. Available at physical agents worldwide.",infoEs:"Envío de dinero global. Disponible en agentes físicos."},{name:"Binance",logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe9rjRtIJJM5o6xP2LqfQFFcWejwFgRA1rag&s",info:"Direct deposits via USDT (Tron Network TRC20). Fast & Secure.",infoEs:"Depósitos directos vía USDT (Red Tron TRC20)."},{name:"PayPal",logo:"https://play-lh.googleusercontent.com/iQ8f5plIFy9rrY46Q2TNRwq_8nCvh9LZVwytqMBpOEcfnIU3vTkICQ6L1-RInWS93oQg",info:"Secure international payment with card or balance.",infoEs:"Pago internacional seguro con tarjeta o saldo."},{name:"Yape",logo:"https://play-lh.googleusercontent.com/y5S3ZIz-ohg3FirlISnk3ca2yQ6cd825OpA0YK9qklc5W8MLSe0NEIEqoV-pZDvO0A8",info:"Exclusive for PERU (PEN). Immediate transfer.",infoEs:"Exclusivo para PERÚ (Soles). Transferencia inmediata."},{name:"Airtm",logo:"https://s3-eu-west-1.amazonaws.com/tpd/logos/5d6d32510d8627000132ad10/0x0.png",info:"Digital wallet recommended for Latin America.",infoEs:"Billetera digital recomendada para Latinoamérica."}],Fh=["CH","LU","DK","NO","IS","US","DE","SG","IE","AU","CA","GB","ES","IT","KR","IL","CL","UY"],l2={"4.0":["CH","LU","DK","NO","IS"],"3.0":["US","DE","SG","IE","AU","CA","GB"],"2.0":["IT","KR","IL","UY"],"1.5":["BR","FR","JP"]},Ef=`A00-C0R3-C0NTR0L aa_99
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
`,np=Y.createContext({});function op(s){const n=Y.useRef(null);return n.current===null&&(n.current=s()),n.current}const r2=typeof window<"u",Nf=r2?Y.useLayoutEffect:Y.useEffect,Sl=Y.createContext(null);function ip(s,n){s.indexOf(n)===-1&&s.push(n)}function _l(s,n){const i=s.indexOf(n);i>-1&&s.splice(i,1)}const ea=(s,n,i)=>i>n?n:i<s?s:i;let lp=()=>{};const Qa={},qf=s=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(s),Cf=s=>typeof s=="object"&&s!==null,Df=s=>/^0[^.\s]+$/u.test(s);function Of(s){let n;return()=>(n===void 0&&(n=s()),n)}const Le=s=>s,Vo=(...s)=>s.reduce((n,i)=>l=>i(n(l))),jo=(s,n,i)=>{const l=n-s;return l?(i-s)/l:1};class rp{constructor(){this.subscriptions=[]}add(n){return ip(this.subscriptions,n),()=>_l(this.subscriptions,n)}notify(n,i,l){const p=this.subscriptions.length;if(p)if(p===1)this.subscriptions[0](n,i,l);else for(let m=0;m<p;m++){const d=this.subscriptions[m];d&&d(n,i,l)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Se=s=>s*1e3,He=s=>s/1e3,Rf=(s,n)=>n?s*(1e3/n):0,zf=(s,n,i)=>(((1-3*i+3*n)*s+(3*i-6*n))*s+3*n)*s,c2=1e-7,u2=12;function p2(s,n,i,l,p){let m,d,h=0;do d=n+(i-n)/2,m=zf(d,l,p)-s,m>0?i=d:n=d;while(Math.abs(m)>c2&&++h<u2);return d}function wo(s,n,i,l){if(s===n&&i===l)return Le;const p=m=>p2(m,0,1,s,i);return m=>m===0||m===1?m:zf(p(m),n,l)}const Hf=s=>n=>n<=.5?s(2*n)/2:(2-s(2*(1-n)))/2,Lf=s=>n=>1-s(1-n),Bf=wo(.33,1.53,.69,.99),cp=Lf(Bf),Uf=Hf(cp),Pf=s=>s>=1?1:(s*=2)<1?.5*cp(s):.5*(2-Math.pow(2,-10*(s-1))),up=s=>1-Math.sin(Math.acos(s)),Yf=Lf(up),Xf=Hf(up),d2=wo(.42,0,1,1),m2=wo(0,0,.58,1),Kf=wo(.42,0,.58,1),g2=s=>Array.isArray(s)&&typeof s[0]!="number",Ff=s=>Array.isArray(s)&&typeof s[0]=="number",h2={linear:Le,easeIn:d2,easeInOut:Kf,easeOut:m2,circIn:up,circInOut:Xf,circOut:Yf,backIn:cp,backInOut:Uf,backOut:Bf,anticipate:Pf},b2=s=>typeof s=="string",Zh=s=>{if(Ff(s)){lp(s.length===4);const[n,i,l,p]=s;return wo(n,i,l,p)}else if(b2(s))return h2[s];return s},Wi=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function f2(s,n){let i=new Set,l=new Set,p=!1,m=!1;const d=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function f(_){d.has(_)&&(b.schedule(_),s()),_(h)}const b={schedule:(_,k=!1,y=!1)=>{const M=y&&p?i:l;return k&&d.add(_),M.add(_),_},cancel:_=>{l.delete(_),d.delete(_)},process:_=>{if(h=_,p){m=!0;return}p=!0;const k=i;i=l,l=k,i.forEach(f),i.clear(),p=!1,m&&(m=!1,b.process(_))}};return b}const _2=40;function Zf(s,n){let i=!1,l=!0;const p={delta:0,timestamp:0,isProcessing:!1},m=()=>i=!0,d=Wi.reduce((O,N)=>(O[N]=f2(m),O),{}),{setup:h,read:f,resolveKeyframes:b,preUpdate:_,update:k,preRender:y,render:G,postRender:M}=d,I=()=>{const O=Qa.useManualTiming,N=O?p.timestamp:performance.now();i=!1,O||(p.delta=l?1e3/60:Math.max(Math.min(N-p.timestamp,_2),1)),p.timestamp=N,p.isProcessing=!0,h.process(p),f.process(p),b.process(p),_.process(p),k.process(p),y.process(p),G.process(p),M.process(p),p.isProcessing=!1,i&&n&&(l=!1,s(I))},A=()=>{i=!0,l=!0,p.isProcessing||s(I)};return{schedule:Wi.reduce((O,N)=>{const R=d[N];return O[N]=(B,D=!1,X=!1)=>(i||A(),R.schedule(B,D,X)),O},{}),cancel:O=>{for(let N=0;N<Wi.length;N++)d[Wi[N]].cancel(O)},state:p,steps:d}}const{schedule:wt,cancel:Ja,state:ne,steps:iu}=Zf(typeof requestAnimationFrame<"u"?requestAnimationFrame:Le,!0);let ll;function x2(){ll=void 0}const ce={now:()=>(ll===void 0&&ce.set(ne.isProcessing||Qa.useManualTiming?ne.timestamp:performance.now()),ll),set:s=>{ll=s,queueMicrotask(x2)}},Qf=s=>n=>typeof n=="string"&&n.startsWith(s),Jf=Qf("--"),k2=Qf("var(--"),pp=s=>k2(s)?y2.test(s.split("/*")[0].trim()):!1,y2=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Qh(s){return typeof s!="string"?!1:s.split("/*")[0].includes("var(--")}const xn={test:s=>typeof s=="number",parse:parseFloat,transform:s=>s},Ao={...xn,transform:s=>ea(0,1,s)},tl={...xn,default:1},Go=s=>Math.round(s*1e5)/1e5,dp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function G2(s){return s==null}const v2=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,mp=(s,n)=>i=>!!(typeof i=="string"&&v2.test(i)&&i.startsWith(s)||n&&!G2(i)&&Object.prototype.hasOwnProperty.call(i,n)),$f=(s,n,i)=>l=>{if(typeof l!="string")return l;const[p,m,d,h]=l.match(dp);return{[s]:parseFloat(p),[n]:parseFloat(m),[i]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},M2=s=>ea(0,255,s),lu={...xn,transform:s=>Math.round(M2(s))},ys={test:mp("rgb","red"),parse:$f("red","green","blue"),transform:({red:s,green:n,blue:i,alpha:l=1})=>"rgba("+lu.transform(s)+", "+lu.transform(n)+", "+lu.transform(i)+", "+Go(Ao.transform(l))+")"};function T2(s){let n="",i="",l="",p="";return s.length>5?(n=s.substring(1,3),i=s.substring(3,5),l=s.substring(5,7),p=s.substring(7,9)):(n=s.substring(1,2),i=s.substring(2,3),l=s.substring(3,4),p=s.substring(4,5),n+=n,i+=i,l+=l,p+=p),{red:parseInt(n,16),green:parseInt(i,16),blue:parseInt(l,16),alpha:p?parseInt(p,16)/255:1}}const wu={test:mp("#"),parse:T2,transform:ys.transform},Eo=s=>({test:n=>typeof n=="string"&&n.endsWith(s)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${s}`}),ka=Eo("deg"),ta=Eo("%"),tt=Eo("px"),j2=Eo("vh"),A2=Eo("vw"),Jh={...ta,parse:s=>ta.parse(s)/100,transform:s=>ta.transform(s*100)},gn={test:mp("hsl","hue"),parse:$f("hue","saturation","lightness"),transform:({hue:s,saturation:n,lightness:i,alpha:l=1})=>"hsla("+Math.round(s)+", "+ta.transform(Go(n))+", "+ta.transform(Go(i))+", "+Go(Ao.transform(l))+")"},Ft={test:s=>ys.test(s)||wu.test(s)||gn.test(s),parse:s=>ys.test(s)?ys.parse(s):gn.test(s)?gn.parse(s):wu.parse(s),transform:s=>typeof s=="string"?s:s.hasOwnProperty("red")?ys.transform(s):gn.transform(s),getAnimatableNone:s=>{const n=Ft.parse(s);return n.alpha=0,Ft.transform(n)}},S2=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function I2(s){var n,i;return isNaN(s)&&typeof s=="string"&&(((n=s.match(dp))==null?void 0:n.length)||0)+(((i=s.match(S2))==null?void 0:i.length)||0)>0}const Wf="number",t_="color",V2="var",w2="var(",$h="${}",E2=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function fn(s){const n=s.toString(),i=[],l={color:[],number:[],var:[]},p=[];let m=0;const h=n.replace(E2,f=>(Ft.test(f)?(l.color.push(m),p.push(t_),i.push(Ft.parse(f))):f.startsWith(w2)?(l.var.push(m),p.push(V2),i.push(f)):(l.number.push(m),p.push(Wf),i.push(parseFloat(f))),++m,$h)).split($h);return{values:i,split:h,indexes:l,types:p}}function N2(s){return fn(s).values}function e_({split:s,types:n}){const i=s.length;return l=>{let p="";for(let m=0;m<i;m++)if(p+=s[m],l[m]!==void 0){const d=n[m];d===Wf?p+=Go(l[m]):d===t_?p+=Ft.transform(l[m]):p+=l[m]}return p}}function q2(s){return e_(fn(s))}const C2=s=>typeof s=="number"?0:Ft.test(s)?Ft.getAnimatableNone(s):s,D2=(s,n)=>typeof s=="number"?n!=null&&n.trim().endsWith("/")?s:0:C2(s);function O2(s){const n=fn(s);return e_(n)(n.values.map((l,p)=>D2(l,n.split[p])))}const Ke={test:I2,parse:N2,createTransformer:q2,getAnimatableNone:O2};function ru(s,n,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(n-s)*6*i:i<1/2?n:i<2/3?s+(n-s)*(2/3-i)*6:s}function R2({hue:s,saturation:n,lightness:i,alpha:l}){s/=360,n/=100,i/=100;let p=0,m=0,d=0;if(!n)p=m=d=i;else{const h=i<.5?i*(1+n):i+n-i*n,f=2*i-h;p=ru(f,h,s+1/3),m=ru(f,h,s),d=ru(f,h,s-1/3)}return{red:Math.round(p*255),green:Math.round(m*255),blue:Math.round(d*255),alpha:l}}function xl(s,n){return i=>i>0?n:s}const Vt=(s,n,i)=>s+(n-s)*i,cu=(s,n,i)=>{const l=s*s,p=i*(n*n-l)+l;return p<0?0:Math.sqrt(p)},z2=[wu,ys,gn],H2=s=>z2.find(n=>n.test(s));function Wh(s){const n=H2(s);if(!n)return!1;let i=n.parse(s);return n===gn&&(i=R2(i)),i}const tb=(s,n)=>{const i=Wh(s),l=Wh(n);if(!i||!l)return xl(s,n);const p={...i};return m=>(p.red=cu(i.red,l.red,m),p.green=cu(i.green,l.green,m),p.blue=cu(i.blue,l.blue,m),p.alpha=Vt(i.alpha,l.alpha,m),ys.transform(p))},Eu=new Set(["none","hidden"]);function L2(s,n){return Eu.has(s)?i=>i<=0?s:n:i=>i>=1?n:s}function B2(s,n){return i=>Vt(s,n,i)}function gp(s){return typeof s=="number"?B2:typeof s=="string"?pp(s)?xl:Ft.test(s)?tb:Y2:Array.isArray(s)?a_:typeof s=="object"?Ft.test(s)?tb:U2:xl}function a_(s,n){const i=[...s],l=i.length,p=s.map((m,d)=>gp(m)(m,n[d]));return m=>{for(let d=0;d<l;d++)i[d]=p[d](m);return i}}function U2(s,n){const i={...s,...n},l={};for(const p in i)s[p]!==void 0&&n[p]!==void 0&&(l[p]=gp(s[p])(s[p],n[p]));return p=>{for(const m in l)i[m]=l[m](p);return i}}function P2(s,n){const i=[],l={color:0,var:0,number:0};for(let p=0;p<n.values.length;p++){const m=n.types[p],d=s.indexes[m][l[m]],h=s.values[d]??0;i[p]=h,l[m]++}return i}const Y2=(s,n)=>{const i=Ke.createTransformer(n),l=fn(s),p=fn(n);return l.indexes.var.length===p.indexes.var.length&&l.indexes.color.length===p.indexes.color.length&&l.indexes.number.length>=p.indexes.number.length?Eu.has(s)&&!p.values.length||Eu.has(n)&&!l.values.length?L2(s,n):Vo(a_(P2(l,p),p.values),i):xl(s,n)};function s_(s,n,i){return typeof s=="number"&&typeof n=="number"&&typeof i=="number"?Vt(s,n,i):gp(s)(s,n)}const X2=s=>{const n=({timestamp:i})=>s(i);return{start:(i=!0)=>wt.update(n,i),stop:()=>Ja(n),now:()=>ne.isProcessing?ne.timestamp:ce.now()}},n_=(s,n,i=10)=>{let l="";const p=Math.max(Math.round(n/i),2);for(let m=0;m<p;m++)l+=Math.round(s(m/(p-1))*1e4)/1e4+", ";return`linear(${l.substring(0,l.length-2)})`},kl=2e4;function hp(s){let n=0;const i=50;let l=s.next(n);for(;!l.done&&n<kl;)n+=i,l=s.next(n);return n>=kl?1/0:n}function K2(s,n=100,i){const l=i({...s,keyframes:[0,n]}),p=Math.min(hp(l),kl);return{type:"keyframes",ease:m=>l.next(p*m).value/n,duration:He(p)}}const Rt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Nu(s,n){return s*Math.sqrt(1-n*n)}const F2=12;function Z2(s,n,i){let l=i;for(let p=1;p<F2;p++)l=l-s(l)/n(l);return l}const uu=.001;function Q2({duration:s=Rt.duration,bounce:n=Rt.bounce,velocity:i=Rt.velocity,mass:l=Rt.mass}){let p,m,d=1-n;d=ea(Rt.minDamping,Rt.maxDamping,d),s=ea(Rt.minDuration,Rt.maxDuration,He(s)),d<1?(p=b=>{const _=b*d,k=_*s,y=_-i,G=Nu(b,d),M=Math.exp(-k);return uu-y/G*M},m=b=>{const k=b*d*s,y=k*i+i,G=Math.pow(d,2)*Math.pow(b,2)*s,M=Math.exp(-k),I=Nu(Math.pow(b,2),d);return(-p(b)+uu>0?-1:1)*((y-G)*M)/I}):(p=b=>{const _=Math.exp(-b*s),k=(b-i)*s+1;return-uu+_*k},m=b=>{const _=Math.exp(-b*s),k=(i-b)*(s*s);return _*k});const h=5/s,f=Z2(p,m,h);if(s=Se(s),isNaN(f))return{stiffness:Rt.stiffness,damping:Rt.damping,duration:s};{const b=Math.pow(f,2)*l;return{stiffness:b,damping:d*2*Math.sqrt(l*b),duration:s}}}const J2=["duration","bounce"],$2=["stiffness","damping","mass"];function eb(s,n){return n.some(i=>s[i]!==void 0)}function W2(s){let n={velocity:Rt.velocity,stiffness:Rt.stiffness,damping:Rt.damping,mass:Rt.mass,isResolvedFromDuration:!1,...s};if(!eb(s,$2)&&eb(s,J2))if(n.velocity=0,s.visualDuration){const i=s.visualDuration,l=2*Math.PI/(i*1.2),p=l*l,m=2*ea(.05,1,1-(s.bounce||0))*Math.sqrt(p);n={...n,mass:Rt.mass,stiffness:p,damping:m}}else{const i=Q2({...s,velocity:0});n={...n,...i,mass:Rt.mass},n.isResolvedFromDuration=!0}return n}function yl(s=Rt.visualDuration,n=Rt.bounce){const i=typeof s!="object"?{visualDuration:s,keyframes:[0,1],bounce:n}:s;let{restSpeed:l,restDelta:p}=i;const m=i.keyframes[0],d=i.keyframes[i.keyframes.length-1],h={done:!1,value:m},{stiffness:f,damping:b,mass:_,duration:k,velocity:y,isResolvedFromDuration:G}=W2({...i,velocity:-He(i.velocity||0)}),M=y||0,I=b/(2*Math.sqrt(f*_)),A=d-m,q=He(Math.sqrt(f/_)),K=Math.abs(A)<5;l||(l=K?Rt.restSpeed.granular:Rt.restSpeed.default),p||(p=K?Rt.restDelta.granular:Rt.restDelta.default);let O,N,R,B,D,X;if(I<1)R=Nu(q,I),B=(M+I*q*A)/R,O=Z=>{const it=Math.exp(-I*q*Z);return d-it*(B*Math.sin(R*Z)+A*Math.cos(R*Z))},D=I*q*B+A*R,X=I*q*A-B*R,N=Z=>Math.exp(-I*q*Z)*(D*Math.sin(R*Z)+X*Math.cos(R*Z));else if(I===1){O=it=>d-Math.exp(-q*it)*(A+(M+q*A)*it);const Z=M+q*A;N=it=>Math.exp(-q*it)*(q*Z*it-M)}else{const Z=q*Math.sqrt(I*I-1);O=Ct=>{const zt=Math.exp(-I*q*Ct),z=Math.min(Z*Ct,300);return d-zt*((M+I*q*A)*Math.sinh(z)+Z*A*Math.cosh(z))/Z};const it=(M+I*q*A)/Z,nt=I*q*it-A*Z,Ut=I*q*A-it*Z;N=Ct=>{const zt=Math.exp(-I*q*Ct),z=Math.min(Z*Ct,300);return zt*(nt*Math.sinh(z)+Ut*Math.cosh(z))}}const F={calculatedDuration:G&&k||null,velocity:Z=>Se(N(Z)),next:Z=>{if(!G&&I<1){const nt=Math.exp(-I*q*Z),Ut=Math.sin(R*Z),Ct=Math.cos(R*Z),zt=d-nt*(B*Ut+A*Ct),z=Se(nt*(D*Ut+X*Ct));return h.done=Math.abs(z)<=l&&Math.abs(d-zt)<=p,h.value=h.done?d:zt,h}const it=O(Z);if(G)h.done=Z>=k;else{const nt=Se(N(Z));h.done=Math.abs(nt)<=l&&Math.abs(d-it)<=p}return h.value=h.done?d:it,h},toString:()=>{const Z=Math.min(hp(F),kl),it=n_(nt=>F.next(Z*nt).value,Z,30);return Z+"ms "+it},toTransition:()=>{}};return F}yl.applyToOptions=s=>{const n=K2(s,100,yl);return s.ease=n.ease,s.duration=Se(n.duration),s.type="keyframes",s};const ty=5;function o_(s,n,i){const l=Math.max(n-ty,0);return Rf(i-s(l),n-l)}function qu({keyframes:s,velocity:n=0,power:i=.8,timeConstant:l=325,bounceDamping:p=10,bounceStiffness:m=500,modifyTarget:d,min:h,max:f,restDelta:b=.5,restSpeed:_}){const k=s[0],y={done:!1,value:k},G=X=>h!==void 0&&X<h||f!==void 0&&X>f,M=X=>h===void 0?f:f===void 0||Math.abs(h-X)<Math.abs(f-X)?h:f;let I=i*n;const A=k+I,q=d===void 0?A:d(A);q!==A&&(I=q-k);const K=X=>-I*Math.exp(-X/l),O=X=>q+K(X),N=X=>{const F=K(X),Z=O(X);y.done=Math.abs(F)<=b,y.value=y.done?q:Z};let R,B;const D=X=>{G(y.value)&&(R=X,B=yl({keyframes:[y.value,M(y.value)],velocity:o_(O,X,y.value),damping:p,stiffness:m,restDelta:b,restSpeed:_}))};return D(0),{calculatedDuration:null,next:X=>{let F=!1;return!B&&R===void 0&&(F=!0,N(X),D(X)),R!==void 0&&X>=R?B.next(X-R):(!F&&N(X),y)}}}function ey(s,n,i){const l=[],p=i||Qa.mix||s_,m=s.length-1;for(let d=0;d<m;d++){let h=p(s[d],s[d+1]);if(n){const f=Array.isArray(n)?n[d]||Le:n;h=Vo(f,h)}l.push(h)}return l}function ay(s,n,{clamp:i=!0,ease:l,mixer:p}={}){const m=s.length;if(lp(m===n.length),m===1)return()=>n[0];if(m===2&&n[0]===n[1])return()=>n[1];const d=s[0]===s[1];s[0]>s[m-1]&&(s=[...s].reverse(),n=[...n].reverse());const h=ey(n,l,p),f=h.length,b=_=>{if(d&&_<s[0])return n[0];let k=0;if(f>1)for(;k<s.length-2&&!(_<s[k+1]);k++);const y=jo(s[k],s[k+1],_);return h[k](y)};return i?_=>b(ea(s[0],s[m-1],_)):b}function sy(s,n){const i=s[s.length-1];for(let l=1;l<=n;l++){const p=jo(0,n,l);s.push(Vt(i,1,p))}}function ny(s){const n=[0];return sy(n,s.length-1),n}function oy(s,n){return s.map(i=>i*n)}function iy(s,n){return s.map(()=>n||Kf).splice(0,s.length-1)}function vo({duration:s=300,keyframes:n,times:i,ease:l="easeInOut"}){const p=g2(l)?l.map(Zh):Zh(l),m={done:!1,value:n[0]},d=oy(i&&i.length===n.length?i:ny(n),s),h=ay(d,n,{ease:Array.isArray(p)?p:iy(n,p)});return{calculatedDuration:s,next:f=>(m.value=h(f),m.done=f>=s,m)}}const ly=s=>s!==null;function Il(s,{repeat:n,repeatType:i="loop"},l,p=1){const m=s.filter(ly),h=p<0||n&&i!=="loop"&&n%2===1?0:m.length-1;return!h||l===void 0?m[h]:l}const ry={decay:qu,inertia:qu,tween:vo,keyframes:vo,spring:yl};function i_(s){typeof s.type=="string"&&(s.type=ry[s.type])}class bp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(n=>{this.resolve=n})}notifyFinished(){this.resolve()}then(n,i){return this.finished.then(n,i)}}const cy=s=>s/100;class Gl extends bp{constructor(n){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var l,p;const{motionValue:i}=this.options;i&&i.updatedAt!==ce.now()&&this.tick(ce.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(p=(l=this.options).onStop)==null||p.call(l))},this.options=n,this.initAnimation(),this.play(),n.autoplay===!1&&this.pause()}initAnimation(){const{options:n}=this;i_(n);const{type:i=vo,repeat:l=0,repeatDelay:p=0,repeatType:m,velocity:d=0}=n;let{keyframes:h}=n;const f=i||vo;f!==vo&&typeof h[0]!="number"&&(this.mixKeyframes=Vo(cy,s_(h[0],h[1])),h=[0,100]);const b=f({...n,keyframes:h});m==="mirror"&&(this.mirroredGenerator=f({...n,keyframes:[...h].reverse(),velocity:-d})),b.calculatedDuration===null&&(b.calculatedDuration=hp(b));const{calculatedDuration:_}=b;this.calculatedDuration=_,this.resolvedDuration=_+p,this.totalDuration=this.resolvedDuration*(l+1)-p,this.generator=b}updateTime(n){const i=Math.round(n-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(n,i=!1){const{generator:l,totalDuration:p,mixKeyframes:m,mirroredGenerator:d,resolvedDuration:h,calculatedDuration:f}=this;if(this.startTime===null)return l.next(0);const{delay:b=0,keyframes:_,repeat:k,repeatType:y,repeatDelay:G,type:M,onUpdate:I,finalKeyframe:A}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-p/this.speed,this.startTime)),i?this.currentTime=n:this.updateTime(n);const q=this.currentTime-b*(this.playbackSpeed>=0?1:-1),K=this.playbackSpeed>=0?q<0:q>p;this.currentTime=Math.max(q,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=p);let O=this.currentTime,N=l;if(k){const X=Math.min(this.currentTime,p)/h;let F=Math.floor(X),Z=X%1;!Z&&X>=1&&(Z=1),Z===1&&F--,F=Math.min(F,k+1),!!(F%2)&&(y==="reverse"?(Z=1-Z,G&&(Z-=G/h)):y==="mirror"&&(N=d)),O=ea(0,1,Z)*h}let R;K?(this.delayState.value=_[0],R=this.delayState):R=N.next(O),m&&!K&&(R.value=m(R.value));let{done:B}=R;!K&&f!==null&&(B=this.playbackSpeed>=0?this.currentTime>=p:this.currentTime<=0);const D=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&B);return D&&M!==qu&&(R.value=Il(_,this.options,A,this.speed)),I&&I(R.value),D&&this.finish(),R}then(n,i){return this.finished.then(n,i)}get duration(){return He(this.calculatedDuration)}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+He(n)}get time(){return He(this.currentTime)}set time(n){n=Se(n),this.currentTime=n,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=n,this.tick(n))}getGeneratorVelocity(){const n=this.currentTime;if(n<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(n);const i=this.generator.next(n).value;return o_(l=>this.generator.next(l).value,n,i)}get speed(){return this.playbackSpeed}set speed(n){const i=this.playbackSpeed!==n;i&&this.driver&&this.updateTime(ce.now()),this.playbackSpeed=n,i&&this.driver&&(this.time=He(this.currentTime))}play(){var p,m;if(this.isStopped)return;const{driver:n=X2,startTime:i}=this.options;this.driver||(this.driver=n(d=>this.tick(d))),(m=(p=this.options).onPlay)==null||m.call(p);const l=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=l):this.holdTime!==null?this.startTime=l-this.holdTime:this.startTime||(this.startTime=i??l),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ce.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var n,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(n=this.options).onComplete)==null||i.call(n)}cancel(){var n,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(n=this.options).onCancel)==null||i.call(n)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}attachTimeline(n){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),n.observe(this)}}function uy(s){for(let n=1;n<s.length;n++)s[n]??(s[n]=s[n-1])}const Gs=s=>s*180/Math.PI,Cu=s=>{const n=Gs(Math.atan2(s[1],s[0]));return Du(n)},py={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:s=>(Math.abs(s[0])+Math.abs(s[3]))/2,rotate:Cu,rotateZ:Cu,skewX:s=>Gs(Math.atan(s[1])),skewY:s=>Gs(Math.atan(s[2])),skew:s=>(Math.abs(s[1])+Math.abs(s[2]))/2},Du=s=>(s=s%360,s<0&&(s+=360),s),ab=Cu,sb=s=>Math.sqrt(s[0]*s[0]+s[1]*s[1]),nb=s=>Math.sqrt(s[4]*s[4]+s[5]*s[5]),dy={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:sb,scaleY:nb,scale:s=>(sb(s)+nb(s))/2,rotateX:s=>Du(Gs(Math.atan2(s[6],s[5]))),rotateY:s=>Du(Gs(Math.atan2(-s[2],s[0]))),rotateZ:ab,rotate:ab,skewX:s=>Gs(Math.atan(s[4])),skewY:s=>Gs(Math.atan(s[1])),skew:s=>(Math.abs(s[1])+Math.abs(s[4]))/2};function Ou(s){return s.includes("scale")?1:0}function Ru(s,n){if(!s||s==="none")return Ou(n);const i=s.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let l,p;if(i)l=dy,p=i;else{const h=s.match(/^matrix\(([-\d.e\s,]+)\)$/u);l=py,p=h}if(!p)return Ou(n);const m=l[n],d=p[1].split(",").map(gy);return typeof m=="function"?m(d):d[m]}const my=(s,n)=>{const{transform:i="none"}=getComputedStyle(s);return Ru(i,n)};function gy(s){return parseFloat(s.trim())}const kn=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],yn=new Set([...kn,"pathRotation"]),ob=s=>s===xn||s===tt,hy=new Set(["x","y","z"]),by=kn.filter(s=>!hy.has(s));function fy(s){const n=[];return by.forEach(i=>{const l=s.getValue(i);l!==void 0&&(n.push([i,l.get()]),l.set(i.startsWith("scale")?1:0))}),n}const Za={width:({x:s},{paddingLeft:n="0",paddingRight:i="0",boxSizing:l})=>{const p=s.max-s.min;return l==="border-box"?p:p-parseFloat(n)-parseFloat(i)},height:({y:s},{paddingTop:n="0",paddingBottom:i="0",boxSizing:l})=>{const p=s.max-s.min;return l==="border-box"?p:p-parseFloat(n)-parseFloat(i)},top:(s,{top:n})=>parseFloat(n),left:(s,{left:n})=>parseFloat(n),bottom:({y:s},{top:n})=>parseFloat(n)+(s.max-s.min),right:({x:s},{left:n})=>parseFloat(n)+(s.max-s.min),x:(s,{transform:n})=>Ru(n,"x"),y:(s,{transform:n})=>Ru(n,"y")};Za.translateX=Za.x;Za.translateY=Za.y;const vs=new Set;let zu=!1,Hu=!1,Lu=!1;function l_(){if(Hu){const s=Array.from(vs).filter(l=>l.needsMeasurement),n=new Set(s.map(l=>l.element)),i=new Map;n.forEach(l=>{const p=fy(l);p.length&&(i.set(l,p),l.render())}),s.forEach(l=>l.measureInitialState()),n.forEach(l=>{l.render();const p=i.get(l);p&&p.forEach(([m,d])=>{var h;(h=l.getValue(m))==null||h.set(d)})}),s.forEach(l=>l.measureEndState()),s.forEach(l=>{l.suspendedScrollY!==void 0&&window.scrollTo(0,l.suspendedScrollY)})}Hu=!1,zu=!1,vs.forEach(s=>s.complete(Lu)),vs.clear()}function r_(){vs.forEach(s=>{s.readKeyframes(),s.needsMeasurement&&(Hu=!0)})}function _y(){Lu=!0,r_(),l_(),Lu=!1}class fp{constructor(n,i,l,p,m,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...n],this.onComplete=i,this.name=l,this.motionValue=p,this.element=m,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(vs.add(this),zu||(zu=!0,wt.read(r_),wt.resolveKeyframes(l_))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:i,element:l,motionValue:p}=this;if(n[0]===null){const m=p==null?void 0:p.get(),d=n[n.length-1];if(m!==void 0)n[0]=m;else if(l&&i){const h=l.readValue(i,d);h!=null&&(n[0]=h)}n[0]===void 0&&(n[0]=d),p&&m===void 0&&p.set(n[0])}uy(n)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(n=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,n),vs.delete(this)}cancel(){this.state==="scheduled"&&(vs.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const xy=s=>s.startsWith("--");function c_(s,n,i){xy(n)?s.style.setProperty(n,i):s.style[n]=i}const ky={};function u_(s,n){const i=Of(s);return()=>ky[n]??i()}const yy=u_(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),p_=u_(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),ko=([s,n,i,l])=>`cubic-bezier(${s}, ${n}, ${i}, ${l})`,ib={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ko([0,.65,.55,1]),circOut:ko([.55,0,1,.45]),backIn:ko([.31,.01,.66,-.59]),backOut:ko([.33,1.53,.69,.99])};function d_(s,n){if(s)return typeof s=="function"?p_()?n_(s,n):"ease-out":Ff(s)?ko(s):Array.isArray(s)?s.map(i=>d_(i,n)||ib.easeOut):ib[s]}function Gy(s,n,i,{delay:l=0,duration:p=300,repeat:m=0,repeatType:d="loop",ease:h="easeOut",times:f}={},b=void 0){const _={[n]:i};f&&(_.offset=f);const k=d_(h,p);Array.isArray(k)&&(_.easing=k);const y={delay:l,duration:p,easing:Array.isArray(k)?"linear":k,fill:"both",iterations:m+1,direction:d==="reverse"?"alternate":"normal"};return b&&(y.pseudoElement=b),s.animate(_,y)}function m_(s){return typeof s=="function"&&"applyToOptions"in s}function vy({type:s,...n}){return m_(s)&&p_()?s.applyToOptions(n):(n.duration??(n.duration=300),n.ease??(n.ease="easeOut"),n)}class g_ extends bp{constructor(n){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!n)return;const{element:i,name:l,keyframes:p,pseudoElement:m,allowFlatten:d=!1,finalKeyframe:h,onComplete:f}=n;this.isPseudoElement=!!m,this.allowFlatten=d,this.options=n,lp(typeof n.type!="string");const b=vy(n);this.animation=Gy(i,l,p,b,m),b.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!m){const _=Il(p,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(_),c_(i,l,_),this.animation.cancel()}f==null||f(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var n,i;(i=(n=this.animation).finish)==null||i.call(n)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:n}=this;n==="idle"||n==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var i,l,p;const n=(i=this.options)==null?void 0:i.element;!this.isPseudoElement&&(n!=null&&n.isConnected)&&((p=(l=this.animation).commitStyles)==null||p.call(l))}get duration(){var i,l;const n=((l=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:l.call(i).duration)||0;return He(Number(n))}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+He(n)}get time(){return He(Number(this.animation.currentTime)||0)}set time(n){const i=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Se(n),i&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(n){n<0&&(this.finishedTime=null),this.animation.playbackRate=n}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(n){this.manualStartTime=this.animation.startTime=n}attachTimeline({timeline:n,rangeStart:i,rangeEnd:l,observe:p}){var m;return this.allowFlatten&&((m=this.animation.effect)==null||m.updateTiming({easing:"linear"})),this.animation.onfinish=null,n&&yy()?(this.animation.timeline=n,i&&(this.animation.rangeStart=i),l&&(this.animation.rangeEnd=l),Le):p(this)}}const h_={anticipate:Pf,backInOut:Uf,circInOut:Xf};function My(s){return s in h_}function Ty(s){typeof s.ease=="string"&&My(s.ease)&&(s.ease=h_[s.ease])}const pu=10;class jy extends g_{constructor(n){Ty(n),i_(n),super(n),n.startTime!==void 0&&n.autoplay!==!1&&(this.startTime=n.startTime),this.options=n}updateMotionValue(n){const{motionValue:i,onUpdate:l,onComplete:p,element:m,...d}=this.options;if(!i)return;if(n!==void 0){i.set(n);return}const h=new Gl({...d,autoplay:!1}),f=Math.max(pu,ce.now()-this.startTime),b=ea(0,pu,f-pu),_=h.sample(f).value,{name:k}=this.options;m&&k&&c_(m,k,_),i.setWithVelocity(h.sample(Math.max(0,f-b)).value,_,b),h.stop()}}const lb=(s,n)=>n==="zIndex"?!1:!!(typeof s=="number"||Array.isArray(s)||typeof s=="string"&&(Ke.test(s)||s==="0")&&!s.startsWith("url("));function Ay(s){const n=s[0];if(s.length===1)return!0;for(let i=0;i<s.length;i++)if(s[i]!==n)return!0}function Sy(s,n,i,l){const p=s[0];if(p===null)return!1;if(n==="display"||n==="visibility")return!0;const m=s[s.length-1],d=lb(p,n),h=lb(m,n);return!d||!h?!1:Ay(s)||(i==="spring"||m_(i))&&l}function Bu(s){s.duration=0,s.type="keyframes"}const b_=new Set(["opacity","clipPath","filter","transform"]),Iy=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function Vy(s){for(let n=0;n<s.length;n++)if(typeof s[n]=="string"&&Iy.test(s[n]))return!0;return!1}const wy=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),Ey=Of(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function Ny(s){var k;const{motionValue:n,name:i,repeatDelay:l,repeatType:p,damping:m,type:d,keyframes:h}=s;if(!(((k=n==null?void 0:n.owner)==null?void 0:k.current)instanceof HTMLElement))return!1;const{onUpdate:b,transformTemplate:_}=n.owner.getProps();return Ey()&&i&&(b_.has(i)||wy.has(i)&&Vy(h))&&(i!=="transform"||!_)&&!b&&!l&&p!=="mirror"&&m!==0&&d!=="inertia"}const qy=40;class Cy extends bp{constructor({autoplay:n=!0,delay:i=0,type:l="keyframes",repeat:p=0,repeatDelay:m=0,repeatType:d="loop",keyframes:h,name:f,motionValue:b,element:_,...k}){var M;super(),this.stop=()=>{var I,A;this._animation&&(this._animation.stop(),(I=this.stopTimeline)==null||I.call(this)),(A=this.keyframeResolver)==null||A.cancel()},this.createdAt=ce.now();const y={autoplay:n,delay:i,type:l,repeat:p,repeatDelay:m,repeatType:d,name:f,motionValue:b,element:_,...k},G=(_==null?void 0:_.KeyframeResolver)||fp;this.keyframeResolver=new G(h,(I,A,q)=>this.onKeyframesResolved(I,A,y,!q),f,b,_),(M=this.keyframeResolver)==null||M.scheduleResolve()}onKeyframesResolved(n,i,l,p){var q,K;this.keyframeResolver=void 0;const{name:m,type:d,velocity:h,delay:f,isHandoff:b,onUpdate:_}=l;this.resolvedAt=ce.now();let k=!0;Sy(n,m,d,h)||(k=!1,(Qa.instantAnimations||!f)&&(_==null||_(Il(n,l,i))),n[0]=n[n.length-1],Bu(l),l.repeat=0);const G={startTime:p?this.resolvedAt?this.resolvedAt-this.createdAt>qy?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...l,keyframes:n},M=k&&!b&&Ny(G),I=(K=(q=G.motionValue)==null?void 0:q.owner)==null?void 0:K.current;let A;if(M)try{A=new jy({...G,element:I})}catch{A=new Gl(G)}else A=new Gl(G);A.finished.then(()=>{this.notifyFinished()}).catch(Le),this.pendingTimeline&&(this.stopTimeline=A.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=A}get finished(){return this._animation?this.animation.finished:this._finished}then(n,i){return this.finished.finally(n).then(()=>{})}get animation(){var n;return this._animation||((n=this.keyframeResolver)==null||n.resume(),_y()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(n){this.animation.time=n}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(n){this.animation.speed=n}get startTime(){return this.animation.startTime}attachTimeline(n){return this._animation?this.stopTimeline=this.animation.attachTimeline(n):this.pendingTimeline=n,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var n;this._animation&&this.animation.cancel(),(n=this.keyframeResolver)==null||n.cancel()}}function f_(s,n,i,l=0,p=1){const m=Array.from(s).sort((b,_)=>b.sortNodePosition(_)).indexOf(n),d=s.size,h=(d-1)*l;return typeof i=="function"?i(m,d):p===1?m*l:h-m*l}const rb=30,Dy=s=>!isNaN(parseFloat(s));class Oy{constructor(n,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=l=>{var m;const p=ce.now();if(this.updatedAt!==p&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(l),this.current!==this.prev&&((m=this.events.change)==null||m.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(n),this.owner=i.owner}setCurrent(n){this.current=n,this.updatedAt=ce.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=Dy(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,i){this.events[n]||(this.events[n]=new rp);const l=this.events[n].add(i);return n==="change"?()=>{l(),wt.read(()=>{this.events.change.getSize()||this.stop()})}:l}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,i){this.passiveEffect=n,this.stopPassiveEffect=i}set(n){this.passiveEffect?this.passiveEffect(n,this.updateAndNotify):this.updateAndNotify(n)}setWithVelocity(n,i,l){this.set(i),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-l}jump(n,i=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var n;(n=this.events.change)==null||n.notify(this.current)}addDependent(n){this.dependents||(this.dependents=new Set),this.dependents.add(n)}removeDependent(n){this.dependents&&this.dependents.delete(n)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const n=ce.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>rb)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,rb);return Rf(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(n){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=n(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var n,i;(n=this.dependents)==null||n.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function _n(s,n){return new Oy(s,n)}function __(s,n){if(s!=null&&s.inherit&&n){const{inherit:i,...l}=s;return{...n,...l}}return s}function _p(s,n){const i=(s==null?void 0:s[n])??(s==null?void 0:s.default)??s;return i!==s?__(i,s):i}const Ry={type:"spring",stiffness:500,damping:25,restSpeed:10},zy=s=>({type:"spring",stiffness:550,damping:s===0?2*Math.sqrt(550):30,restSpeed:10}),Hy={type:"keyframes",duration:.8},Ly={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},By=(s,{keyframes:n})=>n.length>2?Hy:yn.has(s)?s.startsWith("scale")?zy(n[1]):Ry:Ly,Uy=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function Py(s){for(const n in s)if(!Uy.has(n))return!0;return!1}const xp=(s,n,i,l={},p,m)=>d=>{const h=_p(l,s)||{},f=h.delay||l.delay||0;let{elapsed:b=0}=l;b=b-Se(f);const _={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:n.getVelocity(),...h,delay:-b,onUpdate:y=>{n.set(y),h.onUpdate&&h.onUpdate(y)},onComplete:()=>{d(),h.onComplete&&h.onComplete()},name:s,motionValue:n,element:m?void 0:p};Py(h)||Object.assign(_,By(s,_)),_.duration&&(_.duration=Se(_.duration)),_.repeatDelay&&(_.repeatDelay=Se(_.repeatDelay)),_.from!==void 0&&(_.keyframes[0]=_.from);let k=!1;if((_.type===!1||_.duration===0&&!_.repeatDelay)&&(Bu(_),_.delay===0&&(k=!0)),(Qa.instantAnimations||Qa.skipAnimations||p!=null&&p.shouldSkipAnimations||h.skipAnimations)&&(k=!0,Bu(_),_.delay=0),_.allowFlatten=!h.type&&!h.ease,k&&!m&&n.get()!==void 0){const y=Il(_.keyframes,h);if(y!==void 0){wt.update(()=>{_.onUpdate(y),_.onComplete()});return}}return h.isSync?new Gl(_):new Cy(_)},Yy=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Xy(s){const n=Yy.exec(s);if(!n)return[,];const[,i,l,p]=n;return[`--${i??l}`,p]}function x_(s,n,i=1){const[l,p]=Xy(s);if(!l)return;const m=window.getComputedStyle(n).getPropertyValue(l);if(m){const d=m.trim();return qf(d)?parseFloat(d):d}return pp(p)?x_(p,n,i+1):p}function cb(s){const n=[{},{}];return s==null||s.values.forEach((i,l)=>{n[0][l]=i.get(),n[1][l]=i.getVelocity()}),n}function kp(s,n,i,l){if(typeof n=="function"){const[p,m]=cb(l);n=n(i!==void 0?i:s.custom,p,m)}if(typeof n=="string"&&(n=s.variants&&s.variants[n]),typeof n=="function"){const[p,m]=cb(l);n=n(i!==void 0?i:s.custom,p,m)}return n}function Ms(s,n,i){const l=s.getProps();return kp(l,n,i!==void 0?i:l.custom,s)}const k_=new Set(["width","height","top","left","right","bottom",...kn]),Uu=s=>Array.isArray(s);function Ky(s,n,i){s.hasValue(n)?s.getValue(n).set(i):s.addValue(n,_n(i))}function Fy(s){return Uu(s)?s[s.length-1]||0:s}function Zy(s,n){const i=Ms(s,n);let{transitionEnd:l={},transition:p={},...m}=i||{};m={...m,...l};for(const d in m){const h=Fy(m[d]);Ky(s,d,h)}}const oe=s=>!!(s&&s.getVelocity);function Qy(s){return!!(oe(s)&&s.add)}function Pu(s,n){const i=s.getValue("willChange");if(Qy(i))return i.add(n);if(!i&&Qa.WillChange){const l=new Qa.WillChange("auto");s.addValue("willChange",l),l.add(n)}}function yp(s){return s.replace(/([A-Z])/g,n=>`-${n.toLowerCase()}`)}const Jy="framerAppearId",y_="data-"+yp(Jy);function G_(s){return s.props[y_]}function $y({protectedKeys:s,needsAnimating:n},i){const l=s.hasOwnProperty(i)&&n[i]!==!0;return n[i]=!1,l}function v_(s,n,{delay:i=0,transitionOverride:l,type:p}={}){let{transition:m,transitionEnd:d,...h}=n;const f=s.getDefaultTransition();m=m?__(m,f):f;const b=m==null?void 0:m.reduceMotion,_=m==null?void 0:m.skipAnimations;l&&(m=l);const k=[],y=p&&s.animationState&&s.animationState.getState()[p],G=m==null?void 0:m.path;G&&G.animateVisualElement(s,h,m,i,k);for(const M in h){const I=s.getValue(M,s.latestValues[M]??null),A=h[M];if(A===void 0||y&&$y(y,M))continue;const q={delay:i,..._p(m||{},M)};_&&(q.skipAnimations=!0);const K=I.get();if(K!==void 0&&!I.isAnimating()&&!Array.isArray(A)&&A===K&&!q.velocity){wt.update(()=>I.set(A));continue}let O=!1;if(window.MotionHandoffAnimation){const B=G_(s);if(B){const D=window.MotionHandoffAnimation(B,M,wt);D!==null&&(q.startTime=D,O=!0)}}Pu(s,M);const N=b??s.shouldReduceMotion;I.start(xp(M,I,A,N&&k_.has(M)?{type:!1}:q,s,O));const R=I.animation;R&&k.push(R)}if(d){const M=()=>wt.update(()=>{d&&Zy(s,d)});k.length?Promise.all(k).then(M):M()}return k}function Yu(s,n,i={}){var f;const l=Ms(s,n,i.type==="exit"?(f=s.presenceContext)==null?void 0:f.custom:void 0);let{transition:p=s.getDefaultTransition()||{}}=l||{};i.transitionOverride&&(p=i.transitionOverride);const m=l?()=>Promise.all(v_(s,l,i)):()=>Promise.resolve(),d=s.variantChildren&&s.variantChildren.size?(b=0)=>{const{delayChildren:_=0,staggerChildren:k,staggerDirection:y}=p;return Wy(s,n,b,_,k,y,i)}:()=>Promise.resolve(),{when:h}=p;if(h){const[b,_]=h==="beforeChildren"?[m,d]:[d,m];return b().then(()=>_())}else return Promise.all([m(),d(i.delay)])}function Wy(s,n,i=0,l=0,p=0,m=1,d){const h=[];for(const f of s.variantChildren)f.notify("AnimationStart",n),h.push(Yu(f,n,{...d,delay:i+(typeof l=="function"?0:l)+f_(s.variantChildren,f,l,p,m)}).then(()=>f.notify("AnimationComplete",n)));return Promise.all(h)}function tG(s,n,i={}){s.notify("AnimationStart",n);let l;if(Array.isArray(n)){const p=n.map(m=>Yu(s,m,i));l=Promise.all(p)}else if(typeof n=="string")l=Yu(s,n,i);else{const p=typeof n=="function"?Ms(s,n,i.custom):n;l=Promise.all(v_(s,p,i))}return l.then(()=>{s.notify("AnimationComplete",n)})}const eG={test:s=>s==="auto",parse:s=>s},M_=s=>n=>n.test(s),T_=[xn,tt,ta,ka,A2,j2,eG],ub=s=>T_.find(M_(s));function aG(s){return typeof s=="number"?s===0:s!==null?s==="none"||s==="0"||Df(s):!0}const sG=new Set(["brightness","contrast","saturate","opacity"]);function nG(s){const[n,i]=s.slice(0,-1).split("(");if(n==="drop-shadow")return s;const[l]=i.match(dp)||[];if(!l)return s;const p=i.replace(l,"");let m=sG.has(n)?1:0;return l!==i&&(m*=100),n+"("+m+p+")"}const oG=/\b([a-z-]*)\(.*?\)/gu,Xu={...Ke,getAnimatableNone:s=>{const n=s.match(oG);return n?n.map(nG).join(" "):s}},Ku={...Ke,getAnimatableNone:s=>{const n=Ke.parse(s);return Ke.createTransformer(s)(n.map(l=>typeof l=="number"?0:typeof l=="object"?{...l,alpha:1}:l))}},pb={...xn,transform:Math.round},iG={rotate:ka,pathRotation:ka,rotateX:ka,rotateY:ka,rotateZ:ka,scale:tl,scaleX:tl,scaleY:tl,scaleZ:tl,skew:ka,skewX:ka,skewY:ka,distance:tt,translateX:tt,translateY:tt,translateZ:tt,x:tt,y:tt,z:tt,perspective:tt,transformPerspective:tt,opacity:Ao,originX:Jh,originY:Jh,originZ:tt},vl={borderWidth:tt,borderTopWidth:tt,borderRightWidth:tt,borderBottomWidth:tt,borderLeftWidth:tt,borderRadius:tt,borderTopLeftRadius:tt,borderTopRightRadius:tt,borderBottomRightRadius:tt,borderBottomLeftRadius:tt,width:tt,maxWidth:tt,height:tt,maxHeight:tt,top:tt,right:tt,bottom:tt,left:tt,inset:tt,insetBlock:tt,insetBlockStart:tt,insetBlockEnd:tt,insetInline:tt,insetInlineStart:tt,insetInlineEnd:tt,padding:tt,paddingTop:tt,paddingRight:tt,paddingBottom:tt,paddingLeft:tt,paddingBlock:tt,paddingBlockStart:tt,paddingBlockEnd:tt,paddingInline:tt,paddingInlineStart:tt,paddingInlineEnd:tt,margin:tt,marginTop:tt,marginRight:tt,marginBottom:tt,marginLeft:tt,marginBlock:tt,marginBlockStart:tt,marginBlockEnd:tt,marginInline:tt,marginInlineStart:tt,marginInlineEnd:tt,fontSize:tt,backgroundPositionX:tt,backgroundPositionY:tt,...iG,zIndex:pb,fillOpacity:Ao,strokeOpacity:Ao,numOctaves:pb},lG={...vl,color:Ft,backgroundColor:Ft,outlineColor:Ft,fill:Ft,stroke:Ft,borderColor:Ft,borderTopColor:Ft,borderRightColor:Ft,borderBottomColor:Ft,borderLeftColor:Ft,filter:Xu,WebkitFilter:Xu,mask:Ku,WebkitMask:Ku},j_=s=>lG[s],rG=new Set([Xu,Ku]);function A_(s,n){let i=j_(s);return rG.has(i)||(i=Ke),i.getAnimatableNone?i.getAnimatableNone(n):void 0}const cG=new Set(["auto","none","0"]);function uG(s,n,i){let l=0,p;for(;l<s.length&&!p;){const m=s[l];typeof m=="string"&&!cG.has(m)&&fn(m).values.length&&(p=s[l]),l++}if(p&&i)for(const m of n)s[m]=A_(i,p)}class pG extends fp{constructor(n,i,l,p,m){super(n,i,l,p,m,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:i,name:l}=this;if(!i||!i.current)return;super.readKeyframes();for(let _=0;_<n.length;_++){let k=n[_];if(typeof k=="string"&&(k=k.trim(),pp(k))){const y=x_(k,i.current);y!==void 0&&(n[_]=y),_===n.length-1&&(this.finalKeyframe=k)}}if(this.resolveNoneKeyframes(),!k_.has(l)||n.length!==2)return;const[p,m]=n,d=ub(p),h=ub(m),f=Qh(p),b=Qh(m);if(f!==b&&Za[l]){this.needsMeasurement=!0;return}if(d!==h)if(ob(d)&&ob(h))for(let _=0;_<n.length;_++){const k=n[_];typeof k=="string"&&(n[_]=parseFloat(k))}else Za[l]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:i}=this,l=[];for(let p=0;p<n.length;p++)(n[p]===null||aG(n[p]))&&l.push(p);l.length&&uG(n,l,i)}measureInitialState(){const{element:n,unresolvedKeyframes:i,name:l}=this;if(!n||!n.current)return;l==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Za[l](n.measureViewportBox(),window.getComputedStyle(n.current)),i[0]=this.measuredOrigin;const p=i[i.length-1];p!==void 0&&n.getValue(l,p).jump(p,!1)}measureEndState(){var h;const{element:n,name:i,unresolvedKeyframes:l}=this;if(!n||!n.current)return;const p=n.getValue(i);p&&p.jump(this.measuredOrigin,!1);const m=l.length-1,d=l[m];l[m]=Za[i](n.measureViewportBox(),window.getComputedStyle(n.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([f,b])=>{n.getValue(f).set(b)}),this.resolveNoneKeyframes()}}function S_(s,n,i){if(s==null)return[];if(s instanceof EventTarget)return[s];if(typeof s=="string"){let l=document;const p=(i==null?void 0:i[s])??l.querySelectorAll(s);return p?Array.from(p):[]}return Array.from(s).filter(l=>l!=null)}const Fu=(s,n)=>n&&typeof s=="number"?n.transform(s):s;function rl(s){return Cf(s)&&"offsetHeight"in s&&!("ownerSVGElement"in s)}const{schedule:Gp}=Zf(queueMicrotask,!1),Xe={x:!1,y:!1};function I_(){return Xe.x||Xe.y}function dG(s){return s==="x"||s==="y"?Xe[s]?null:(Xe[s]=!0,()=>{Xe[s]=!1}):Xe.x||Xe.y?null:(Xe.x=Xe.y=!0,()=>{Xe.x=Xe.y=!1})}function V_(s,n){const i=S_(s),l=new AbortController,p={passive:!0,...n,signal:l.signal};return[i,p,()=>l.abort()]}function mG(s){return!(s.pointerType==="touch"||I_())}function gG(s,n,i={}){const[l,p,m]=V_(s,i);return l.forEach(d=>{let h=!1,f=!1,b;const _=()=>{d.removeEventListener("pointerleave",M)},k=A=>{b&&(b(A),b=void 0),_()},y=A=>{h=!1,window.removeEventListener("pointerup",y),window.removeEventListener("pointercancel",y),f&&(f=!1,k(A))},G=()=>{h=!0,window.addEventListener("pointerup",y,p),window.addEventListener("pointercancel",y,p)},M=A=>{if(A.pointerType!=="touch"){if(h){f=!0;return}k(A)}},I=A=>{if(!mG(A))return;f=!1;const q=n(d,A);typeof q=="function"&&(b=q,d.addEventListener("pointerleave",M,p))};d.addEventListener("pointerenter",I,p),d.addEventListener("pointerdown",G,p)}),m}const w_=(s,n)=>n?s===n?!0:w_(s,n.parentElement):!1,vp=s=>s.pointerType==="mouse"?typeof s.button!="number"||s.button<=0:s.isPrimary!==!1,hG=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function bG(s){return hG.has(s.tagName)||s.isContentEditable===!0}const fG=new Set(["INPUT","SELECT","TEXTAREA"]);function _G(s){return fG.has(s.tagName)||s.isContentEditable===!0}const cl=new WeakSet;function db(s){return n=>{n.key==="Enter"&&s(n)}}function du(s,n){s.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const xG=(s,n)=>{const i=s.currentTarget;if(!i)return;const l=db(()=>{if(cl.has(i))return;du(i,"down");const p=db(()=>{du(i,"up")}),m=()=>du(i,"cancel");i.addEventListener("keyup",p,n),i.addEventListener("blur",m,n)});i.addEventListener("keydown",l,n),i.addEventListener("blur",()=>i.removeEventListener("keydown",l),n)};function mb(s){return vp(s)&&!I_()}const gb=new WeakSet;function kG(s,n,i={}){const[l,p,m]=V_(s,i),d=h=>{const f=h.currentTarget;if(!mb(h)||gb.has(h))return;cl.add(f),i.stopPropagation&&gb.add(h);const b=n(f,h),_=(G,M)=>{window.removeEventListener("pointerup",k),window.removeEventListener("pointercancel",y),cl.has(f)&&cl.delete(f),mb(G)&&typeof b=="function"&&b(G,{success:M})},k=G=>{_(G,f===window||f===document||i.useGlobalTarget||w_(f,G.target))},y=G=>{_(G,!1)};window.addEventListener("pointerup",k,p),window.addEventListener("pointercancel",y,p)};return l.forEach(h=>{(i.useGlobalTarget?window:h).addEventListener("pointerdown",d,p),rl(h)&&(h.addEventListener("focus",b=>xG(b,p)),!bG(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),m}function Mp(s){return Cf(s)&&"ownerSVGElement"in s}const ul=new WeakMap;let Ka;const E_=(s,n,i)=>(l,p)=>p&&p[0]?p[0][s+"Size"]:Mp(l)&&"getBBox"in l?l.getBBox()[n]:l[i],yG=E_("inline","width","offsetWidth"),GG=E_("block","height","offsetHeight");function vG({target:s,borderBoxSize:n}){var i;(i=ul.get(s))==null||i.forEach(l=>{l(s,{get width(){return yG(s,n)},get height(){return GG(s,n)}})})}function MG(s){s.forEach(vG)}function TG(){typeof ResizeObserver>"u"||(Ka=new ResizeObserver(MG))}function jG(s,n){Ka||TG();const i=S_(s);return i.forEach(l=>{let p=ul.get(l);p||(p=new Set,ul.set(l,p)),p.add(n),Ka==null||Ka.observe(l)}),()=>{i.forEach(l=>{const p=ul.get(l);p==null||p.delete(n),p!=null&&p.size||Ka==null||Ka.unobserve(l)})}}const pl=new Set;let hn;function AG(){hn=()=>{const s={get width(){return window.innerWidth},get height(){return window.innerHeight}};pl.forEach(n=>n(s))},window.addEventListener("resize",hn)}function SG(s){return pl.add(s),hn||AG(),()=>{pl.delete(s),!pl.size&&typeof hn=="function"&&(window.removeEventListener("resize",hn),hn=void 0)}}function hb(s,n){return typeof s=="function"?SG(s):jG(s,n)}function IG(s){return Mp(s)&&s.tagName==="svg"}const VG=[...T_,Ft,Ke],wG=s=>VG.find(M_(s)),bb=()=>({translate:0,scale:1,origin:0,originPoint:0}),bn=()=>({x:bb(),y:bb()}),fb=()=>({min:0,max:0}),Qt=()=>({x:fb(),y:fb()}),EG=new WeakMap;function Vl(s){return s!==null&&typeof s=="object"&&typeof s.start=="function"}function So(s){return typeof s=="string"||Array.isArray(s)}const Tp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],jp=["initial",...Tp];function wl(s){return Vl(s.animate)||jp.some(n=>So(s[n]))}function N_(s){return!!(wl(s)||s.variants)}function NG(s,n,i){for(const l in n){const p=n[l],m=i[l];if(oe(p))s.addValue(l,p);else if(oe(m))s.addValue(l,_n(p,{owner:s}));else if(m!==p)if(s.hasValue(l)){const d=s.getValue(l);d.liveStyle===!0?d.jump(p):d.hasAnimated||d.set(p)}else{const d=s.getStaticValue(l);s.addValue(l,_n(d!==void 0?d:p,{owner:s}))}}for(const l in i)n[l]===void 0&&s.removeValue(l);return n}const Zu={current:null},q_={current:!1},qG=typeof window<"u";function CG(){if(q_.current=!0,!!qG)if(window.matchMedia){const s=window.matchMedia("(prefers-reduced-motion)"),n=()=>Zu.current=s.matches;s.addEventListener("change",n),n()}else Zu.current=!1}const _b=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Ml={};function C_(s){Ml=s}function DG(){return Ml}class OG{scrapeMotionValuesFromProps(n,i,l){return{}}constructor({parent:n,props:i,presenceContext:l,reducedMotionConfig:p,skipAnimations:m,blockInitialAnimation:d,visualState:h},f={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=fp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const G=ce.now();this.renderScheduledAt<G&&(this.renderScheduledAt=G,wt.render(this.render,!1,!0))};const{latestValues:b,renderState:_}=h;this.latestValues=b,this.baseTarget={...b},this.initialValues=i.initial?{...b}:{},this.renderState=_,this.parent=n,this.props=i,this.presenceContext=l,this.depth=n?n.depth+1:0,this.reducedMotionConfig=p,this.skipAnimationsConfig=m,this.options=f,this.blockInitialAnimation=!!d,this.isControllingVariants=wl(i),this.isVariantNode=N_(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:k,...y}=this.scrapeMotionValuesFromProps(i,{},this);for(const G in y){const M=y[G];b[G]!==void 0&&oe(M)&&M.set(b[G])}}mount(n){var i,l;if(this.hasBeenMounted)for(const p in this.initialValues)(i=this.values.get(p))==null||i.jump(this.initialValues[p]),this.latestValues[p]=this.initialValues[p];this.current=n,EG.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((p,m)=>this.bindToMotionValue(m,p)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(q_.current||CG(),this.shouldReduceMotion=Zu.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(l=this.parent)==null||l.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var n;this.projection&&this.projection.unmount(),Ja(this.notifyUpdate),Ja(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(n=this.parent)==null||n.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const l=this.features[i];l&&(l.unmount(),l.isMounted=!1)}this.current=null}addChild(n){this.children.add(n),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(n)}removeChild(n){this.children.delete(n),this.enteringChildren&&this.enteringChildren.delete(n)}bindToMotionValue(n,i){if(this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)(),i.accelerate&&b_.has(n)&&this.current instanceof HTMLElement){const{factory:d,keyframes:h,times:f,ease:b,duration:_}=i.accelerate,k=new g_({element:this.current,name:n,keyframes:h,times:f,ease:b,duration:Se(_)}),y=d(k);this.valueSubscriptions.set(n,()=>{y(),k.cancel()});return}const l=yn.has(n);l&&this.onBindTransform&&this.onBindTransform();const p=i.on("change",d=>{this.latestValues[n]=d,this.props.onUpdate&&wt.preRender(this.notifyUpdate),l&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let m;typeof window<"u"&&window.MotionCheckAppearSync&&(m=window.MotionCheckAppearSync(this,n,i)),this.valueSubscriptions.set(n,()=>{p(),m&&m()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in Ml){const i=Ml[n];if(!i)continue;const{isEnabled:l,Feature:p}=i;if(!this.features[n]&&p&&l(this.props)&&(this.features[n]=new p(this)),this.features[n]){const m=this.features[n];m.isMounted?m.update():(m.mount(),m.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Qt()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,i){this.latestValues[n]=i}update(n,i){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let l=0;l<_b.length;l++){const p=_b[l];this.propEventSubscriptions[p]&&(this.propEventSubscriptions[p](),delete this.propEventSubscriptions[p]);const m="on"+p,d=n[m];d&&(this.propEventSubscriptions[p]=this.on(p,d))}this.prevMotionValues=NG(this,this.scrapeMotionValuesFromProps(n,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(n),()=>i.variantChildren.delete(n)}addValue(n,i){const l=this.values.get(n);i!==l&&(l&&this.removeValue(n),this.bindToMotionValue(n,i),this.values.set(n,i),this.latestValues[n]=i.get())}removeValue(n){this.values.delete(n);const i=this.valueSubscriptions.get(n);i&&(i(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,i){if(this.props.values&&this.props.values[n])return this.props.values[n];let l=this.values.get(n);return l===void 0&&i!==void 0&&(l=_n(i===null?void 0:i,{owner:this}),this.addValue(n,l)),l}readValue(n,i){let l=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:this.getBaseTargetFromProps(this.props,n)??this.readValueFromInstance(this.current,n,this.options);return l!=null&&(typeof l=="string"&&(qf(l)||Df(l))?l=parseFloat(l):!wG(l)&&Ke.test(i)&&(l=A_(n,i)),this.setBaseTarget(n,oe(l)?l.get():l)),oe(l)?l.get():l}setBaseTarget(n,i){this.baseTarget[n]=i}getBaseTarget(n){var m;const{initial:i}=this.props;let l;if(typeof i=="string"||typeof i=="object"){const d=kp(this.props,i,(m=this.presenceContext)==null?void 0:m.custom);d&&(l=d[n])}if(i&&l!==void 0)return l;const p=this.getBaseTargetFromProps(this.props,n);return p!==void 0&&!oe(p)?p:this.initialValues[n]!==void 0&&l===void 0?void 0:this.baseTarget[n]}on(n,i){return this.events[n]||(this.events[n]=new rp),this.events[n].add(i)}notify(n,...i){this.events[n]&&this.events[n].notify(...i)}scheduleRenderMicrotask(){Gp.render(this.render)}}class D_ extends OG{constructor(){super(...arguments),this.KeyframeResolver=pG}sortInstanceNodePosition(n,i){return n.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(n,i){const l=n.style;return l?l[i]:void 0}removeValueFromRenderState(n,{vars:i,style:l}){delete i[n],delete l[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;oe(n)&&(this.childSubscription=n.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}class $a{constructor(n){this.isMounted=!1,this.node=n}update(){}}function O_({top:s,left:n,right:i,bottom:l}){return{x:{min:n,max:i},y:{min:s,max:l}}}function RG({x:s,y:n}){return{top:n.min,right:s.max,bottom:n.max,left:s.min}}function zG(s,n){if(!n)return s;const i=n({x:s.left,y:s.top}),l=n({x:s.right,y:s.bottom});return{top:i.y,left:i.x,bottom:l.y,right:l.x}}function mu(s){return s===void 0||s===1}function Qu({scale:s,scaleX:n,scaleY:i}){return!mu(s)||!mu(n)||!mu(i)}function ks(s){return Qu(s)||R_(s)||s.z||s.rotate||s.rotateX||s.rotateY||s.skewX||s.skewY}function R_(s){return xb(s.x)||xb(s.y)}function xb(s){return s&&s!=="0%"}function Tl(s,n,i){const l=s-i,p=n*l;return i+p}function kb(s,n,i,l,p){return p!==void 0&&(s=Tl(s,p,l)),Tl(s,i,l)+n}function Ju(s,n=0,i=1,l,p){s.min=kb(s.min,n,i,l,p),s.max=kb(s.max,n,i,l,p)}function z_(s,{x:n,y:i}){Ju(s.x,n.translate,n.scale,n.originPoint),Ju(s.y,i.translate,i.scale,i.originPoint)}const yb=.999999999999,Gb=1.0000000000001;function HG(s,n,i,l=!1){var h;const p=i.length;if(!p)return;n.x=n.y=1;let m,d;for(let f=0;f<p;f++){m=i[f],d=m.projectionDelta;const{visualElement:b}=m.options;b&&b.props.style&&b.props.style.display==="contents"||(l&&m.options.layoutScroll&&m.scroll&&m!==m.root&&(We(s.x,-m.scroll.offset.x),We(s.y,-m.scroll.offset.y)),d&&(n.x*=d.x.scale,n.y*=d.y.scale,z_(s,d)),l&&ks(m.latestValues)&&dl(s,m.latestValues,(h=m.layout)==null?void 0:h.layoutBox))}n.x<Gb&&n.x>yb&&(n.x=1),n.y<Gb&&n.y>yb&&(n.y=1)}function We(s,n){s.min+=n,s.max+=n}function vb(s,n,i,l,p=.5){const m=Vt(s.min,s.max,p);Ju(s,n,i,m,l)}function Mb(s,n){return typeof s=="string"?parseFloat(s)/100*(n.max-n.min):s}function dl(s,n,i){const l=i??s;vb(s.x,Mb(n.x,l.x),n.scaleX,n.scale,n.originX),vb(s.y,Mb(n.y,l.y),n.scaleY,n.scale,n.originY)}function H_(s,n){return O_(zG(s.getBoundingClientRect(),n))}function LG(s,n,i){const l=H_(s,i),{scroll:p}=n;return p&&(We(l.x,p.offset.x),We(l.y,p.offset.y)),l}const BG={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},UG=kn.length;function PG(s,n,i){let l="",p=!0;for(let d=0;d<UG;d++){const h=kn[d],f=s[h];if(f===void 0)continue;let b=!0;if(typeof f=="number")b=f===(h.startsWith("scale")?1:0);else{const _=parseFloat(f);b=h.startsWith("scale")?_===1:_===0}if(!b||i){const _=Fu(f,vl[h]);if(!b){p=!1;const k=BG[h]||h;l+=`${k}(${_}) `}i&&(n[h]=_)}}const m=s.pathRotation;return m&&(p=!1,l+=`rotate(${Fu(m,vl.pathRotation)}) `),l=l.trim(),i?l=i(n,p?"":l):p&&(l="none"),l}function Ap(s,n,i){const{style:l,vars:p,transformOrigin:m}=s;let d=!1,h=!1;for(const f in n){const b=n[f];if(yn.has(f)){d=!0;continue}else if(Jf(f)){p[f]=b;continue}else{const _=Fu(b,vl[f]);f.startsWith("origin")?(h=!0,m[f]=_):l[f]=_}}if(n.transform||(d||i?l.transform=PG(n,s.transform,i):l.transform&&(l.transform="none")),h){const{originX:f="50%",originY:b="50%",originZ:_=0}=m;l.transformOrigin=`${f} ${b} ${_}`}}function L_(s,{style:n,vars:i},l,p){const m=s.style;let d;for(d in n)m[d]=n[d];p==null||p.applyProjectionStyles(m,l);for(d in i)m.setProperty(d,i[d])}function Tb(s,n){return n.max===n.min?0:s/(n.max-n.min)*100}const xo={correct:(s,n)=>{if(!n.target)return s;if(typeof s=="string")if(tt.test(s))s=parseFloat(s);else return s;const i=Tb(s,n.target.x),l=Tb(s,n.target.y);return`${i}% ${l}%`}},YG={correct:(s,{treeScale:n,projectionDelta:i})=>{const l=s,p=Ke.parse(s);if(p.length>5)return l;const m=Ke.createTransformer(s),d=typeof p[0]!="number"?1:0,h=i.x.scale*n.x,f=i.y.scale*n.y;p[0+d]/=h,p[1+d]/=f;const b=Vt(h,f,.5);return typeof p[2+d]=="number"&&(p[2+d]/=b),typeof p[3+d]=="number"&&(p[3+d]/=b),m(p)}},$u={borderRadius:{...xo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:xo,borderTopRightRadius:xo,borderBottomLeftRadius:xo,borderBottomRightRadius:xo,boxShadow:YG};function B_(s,{layout:n,layoutId:i}){return yn.has(s)||s.startsWith("origin")||(n||i!==void 0)&&(!!$u[s]||s==="opacity")}function Sp(s,n,i){var d;const l=s.style,p=n==null?void 0:n.style,m={};if(!l)return m;for(const h in l)(oe(l[h])||p&&oe(p[h])||B_(h,s)||((d=i==null?void 0:i.getValue(h))==null?void 0:d.liveStyle)!==void 0)&&(m[h]=l[h]);return m}function XG(s){return window.getComputedStyle(s)}class KG extends D_{constructor(){super(...arguments),this.type="html",this.renderInstance=L_}readValueFromInstance(n,i){var l;if(yn.has(i))return(l=this.projection)!=null&&l.isProjecting?Ou(i):my(n,i);{const p=XG(n),m=(Jf(i)?p.getPropertyValue(i):p[i])||0;return typeof m=="string"?m.trim():m}}measureInstanceViewportBox(n,{transformPagePoint:i}){return H_(n,i)}build(n,i,l){Ap(n,i,l.transformTemplate)}scrapeMotionValuesFromProps(n,i,l){return Sp(n,i,l)}}const FG={offset:"stroke-dashoffset",array:"stroke-dasharray"},ZG={offset:"strokeDashoffset",array:"strokeDasharray"};function QG(s,n,i=1,l=0,p=!0){s.pathLength=1;const m=p?FG:ZG;s[m.offset]=`${-l}`,s[m.array]=`${n} ${i}`}const JG=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function U_(s,{attrX:n,attrY:i,attrScale:l,pathLength:p,pathSpacing:m=1,pathOffset:d=0,...h},f,b,_){if(Ap(s,h,b),f){s.style.viewBox&&(s.attrs.viewBox=s.style.viewBox);return}s.attrs=s.style,s.style={};const{attrs:k,style:y}=s;k.transform&&(y.transform=k.transform,delete k.transform),(y.transform||k.transformOrigin)&&(y.transformOrigin=k.transformOrigin??"50% 50%",delete k.transformOrigin),y.transform&&(y.transformBox=(_==null?void 0:_.transformBox)??"fill-box",delete k.transformBox);for(const G of JG)k[G]!==void 0&&(y[G]=k[G],delete k[G]);n!==void 0&&(k.x=n),i!==void 0&&(k.y=i),l!==void 0&&(k.scale=l),p!==void 0&&QG(k,p,m,d,!1)}const P_=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Y_=s=>typeof s=="string"&&s.toLowerCase()==="svg";function $G(s,n,i,l){L_(s,n,void 0,l);for(const p in n.attrs)s.setAttribute(P_.has(p)?p:yp(p),n.attrs[p])}function X_(s,n,i){const l=Sp(s,n,i);for(const p in s)if(oe(s[p])||oe(n[p])){const m=kn.indexOf(p)!==-1?"attr"+p.charAt(0).toUpperCase()+p.substring(1):p;l[m]=s[p]}return l}class WG extends D_{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Qt}getBaseTargetFromProps(n,i){return n[i]}readValueFromInstance(n,i){if(yn.has(i)){const l=j_(i);return l&&l.default||0}return i=P_.has(i)?i:yp(i),n.getAttribute(i)}scrapeMotionValuesFromProps(n,i,l){return X_(n,i,l)}build(n,i,l){U_(n,i,this.isSVGTag,l.transformTemplate,l.style)}renderInstance(n,i,l,p){$G(n,i,l,p)}mount(n){this.isSVGTag=Y_(n.tagName),super.mount(n)}}const tv=jp.length;function K_(s){if(!s)return;if(!s.isControllingVariants){const i=s.parent?K_(s.parent)||{}:{};return s.props.initial!==void 0&&(i.initial=s.props.initial),i}const n={};for(let i=0;i<tv;i++){const l=jp[i],p=s.props[l];(So(p)||p===!1)&&(n[l]=p)}return n}function F_(s,n){if(!Array.isArray(n))return!1;const i=n.length;if(i!==s.length)return!1;for(let l=0;l<i;l++)if(n[l]!==s[l])return!1;return!0}const ev=[...Tp].reverse(),av=Tp.length;function sv(s){return n=>Promise.all(n.map(({animation:i,options:l})=>tG(s,i,l)))}function nv(s){let n=sv(s),i=jb(),l=!0,p=!1;const m=b=>(_,k)=>{var G;const y=Ms(s,k,b==="exit"?(G=s.presenceContext)==null?void 0:G.custom:void 0);if(y){const{transition:M,transitionEnd:I,...A}=y;_={..._,...A,...I}}return _};function d(b){n=b(s)}function h(b){const{props:_}=s,k=K_(s.parent)||{},y=[],G=new Set;let M={},I=1/0;for(let q=0;q<av;q++){const K=ev[q],O=i[K],N=_[K]!==void 0?_[K]:k[K],R=So(N),B=K===b?O.isActive:null;B===!1&&(I=q);let D=N===k[K]&&N!==_[K]&&R;if(D&&(l||p)&&s.manuallyAnimateOnMount&&(D=!1),O.protectedKeys={...M},!O.isActive&&B===null||!N&&!O.prevProp||Vl(N)||typeof N=="boolean")continue;if(K==="exit"&&O.isActive&&B!==!0){O.prevResolvedValues&&(M={...M,...O.prevResolvedValues});continue}const X=ov(O.prevProp,N);let F=X||K===b&&O.isActive&&!D&&R||q>I&&R,Z=!1;const it=Array.isArray(N)?N:[N];let nt=it.reduce(m(K),{});B===!1&&(nt={});const{prevResolvedValues:Ut={}}=O,Ct={...Ut,...nt},zt=$=>{F=!0,G.has($)&&(Z=!0,G.delete($)),O.needsAnimating[$]=!0;const ut=s.getValue($);ut&&(ut.liveStyle=!1)};for(const $ in Ct){const ut=nt[$],_t=Ut[$];if(M.hasOwnProperty($))continue;let j=!1;Uu(ut)&&Uu(_t)?j=!F_(ut,_t)||X:j=ut!==_t,j?ut!=null?zt($):G.add($):ut!==void 0&&G.has($)?zt($):O.protectedKeys[$]=!0}O.prevProp=N,O.prevResolvedValues=nt,O.isActive&&(M={...M,...nt}),(l||p)&&s.blockInitialAnimation&&(F=!1);const z=D&&X;F&&(!z||Z)&&y.push(...it.map($=>{const ut={type:K};if(typeof $=="string"&&(l||p)&&!z&&s.manuallyAnimateOnMount&&s.parent){const{parent:_t}=s,j=Ms(_t,$);if(_t.enteringChildren&&j){const{delayChildren:P}=j.transition||{};ut.delay=f_(_t.enteringChildren,s,P)}}return{animation:$,options:ut}}))}if(G.size){const q={};if(typeof _.initial!="boolean"){const K=Ms(s,Array.isArray(_.initial)?_.initial[0]:_.initial);K&&K.transition&&(q.transition=K.transition)}G.forEach(K=>{const O=s.getBaseTarget(K),N=s.getValue(K);N&&(N.liveStyle=!0),q[K]=O??null}),y.push({animation:q})}let A=!!y.length;return l&&(_.initial===!1||_.initial===_.animate)&&!s.manuallyAnimateOnMount&&(A=!1),l=!1,p=!1,A?n(y):Promise.resolve()}function f(b,_){var y;if(i[b].isActive===_)return Promise.resolve();(y=s.variantChildren)==null||y.forEach(G=>{var M;return(M=G.animationState)==null?void 0:M.setActive(b,_)}),i[b].isActive=_;const k=h(b);for(const G in i)i[G].protectedKeys={};return k}return{animateChanges:h,setActive:f,setAnimateFunction:d,getState:()=>i,reset:()=>{i=jb(),p=!0}}}function ov(s,n){return typeof n=="string"?n!==s:Array.isArray(n)?!F_(n,s):!1}function xs(s=!1){return{isActive:s,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function jb(){return{animate:xs(!0),whileInView:xs(),whileHover:xs(),whileTap:xs(),whileDrag:xs(),whileFocus:xs(),exit:xs()}}function Wu(s,n){s.min=n.min,s.max=n.max}function Ye(s,n){Wu(s.x,n.x),Wu(s.y,n.y)}function Ab(s,n){s.translate=n.translate,s.scale=n.scale,s.originPoint=n.originPoint,s.origin=n.origin}const Z_=1e-4,iv=1-Z_,lv=1+Z_,Q_=.01,rv=0-Q_,cv=0+Q_;function ue(s){return s.max-s.min}function uv(s,n,i){return Math.abs(s-n)<=i}function Sb(s,n,i,l=.5){s.origin=l,s.originPoint=Vt(n.min,n.max,s.origin),s.scale=ue(i)/ue(n),s.translate=Vt(i.min,i.max,s.origin)-s.originPoint,(s.scale>=iv&&s.scale<=lv||isNaN(s.scale))&&(s.scale=1),(s.translate>=rv&&s.translate<=cv||isNaN(s.translate))&&(s.translate=0)}function Mo(s,n,i,l){Sb(s.x,n.x,i.x,l?l.originX:void 0),Sb(s.y,n.y,i.y,l?l.originY:void 0)}function Ib(s,n,i,l=0){const p=l?Vt(i.min,i.max,l):i.min;s.min=p+n.min,s.max=s.min+ue(n)}function pv(s,n,i,l){Ib(s.x,n.x,i.x,l==null?void 0:l.x),Ib(s.y,n.y,i.y,l==null?void 0:l.y)}function Vb(s,n,i,l=0){const p=l?Vt(i.min,i.max,l):i.min;s.min=n.min-p,s.max=s.min+ue(n)}function jl(s,n,i,l){Vb(s.x,n.x,i.x,l==null?void 0:l.x),Vb(s.y,n.y,i.y,l==null?void 0:l.y)}function wb(s,n,i,l,p){return s-=n,s=Tl(s,1/i,l),p!==void 0&&(s=Tl(s,1/p,l)),s}function dv(s,n=0,i=1,l=.5,p,m=s,d=s){if(ta.test(n)&&(n=parseFloat(n),n=Vt(d.min,d.max,n/100)-d.min),typeof n!="number")return;let h=Vt(m.min,m.max,l);s===m&&(h-=n),s.min=wb(s.min,n,i,h,p),s.max=wb(s.max,n,i,h,p)}function Eb(s,n,[i,l,p],m,d){dv(s,n[i],n[l],n[p],n.scale,m,d)}const mv=["x","scaleX","originX"],gv=["y","scaleY","originY"];function Nb(s,n,i,l){Eb(s.x,n,mv,i?i.x:void 0,l?l.x:void 0),Eb(s.y,n,gv,i?i.y:void 0,l?l.y:void 0)}function qb(s){return s.translate===0&&s.scale===1}function J_(s){return qb(s.x)&&qb(s.y)}function Cb(s,n){return s.min===n.min&&s.max===n.max}function hv(s,n){return Cb(s.x,n.x)&&Cb(s.y,n.y)}function Db(s,n){return Math.round(s.min)===Math.round(n.min)&&Math.round(s.max)===Math.round(n.max)}function $_(s,n){return Db(s.x,n.x)&&Db(s.y,n.y)}function Ob(s){return ue(s.x)/ue(s.y)}function Rb(s,n){return s.translate===n.translate&&s.scale===n.scale&&s.originPoint===n.originPoint}function $e(s){return[s("x"),s("y")]}function bv(s,n,i){let l="";const p=s.x.translate/n.x,m=s.y.translate/n.y,d=(i==null?void 0:i.z)||0;if((p||m||d)&&(l=`translate3d(${p}px, ${m}px, ${d}px) `),(n.x!==1||n.y!==1)&&(l+=`scale(${1/n.x}, ${1/n.y}) `),i){const{transformPerspective:b,rotate:_,pathRotation:k,rotateX:y,rotateY:G,skewX:M,skewY:I}=i;b&&(l=`perspective(${b}px) ${l}`),_&&(l+=`rotate(${_}deg) `),k&&(l+=`rotate(${k}deg) `),y&&(l+=`rotateX(${y}deg) `),G&&(l+=`rotateY(${G}deg) `),M&&(l+=`skewX(${M}deg) `),I&&(l+=`skewY(${I}deg) `)}const h=s.x.scale*n.x,f=s.y.scale*n.y;return(h!==1||f!==1)&&(l+=`scale(${h}, ${f})`),l||"none"}const W_=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],fv=W_.length,zb=s=>typeof s=="string"?parseFloat(s):s,Hb=s=>typeof s=="number"||tt.test(s);function _v(s,n,i,l,p,m){p?(s.opacity=Vt(0,i.opacity??1,xv(l)),s.opacityExit=Vt(n.opacity??1,0,kv(l))):m&&(s.opacity=Vt(n.opacity??1,i.opacity??1,l));for(let d=0;d<fv;d++){const h=W_[d];let f=Lb(n,h),b=Lb(i,h);if(f===void 0&&b===void 0)continue;f||(f=0),b||(b=0),f===0||b===0||Hb(f)===Hb(b)?(s[h]=Math.max(Vt(zb(f),zb(b),l),0),(ta.test(b)||ta.test(f))&&(s[h]+="%")):s[h]=b}(n.rotate||i.rotate)&&(s.rotate=Vt(n.rotate||0,i.rotate||0,l))}function Lb(s,n){return s[n]!==void 0?s[n]:s.borderRadius}const xv=t0(0,.5,Yf),kv=t0(.5,.95,Le);function t0(s,n,i){return l=>l<s?0:l>n?1:i(jo(s,n,l))}function yv(s,n,i){const l=oe(s)?s:_n(s);return l.start(xp("",l,n,i)),l.animation}function Io(s,n,i,l={passive:!0}){return s.addEventListener(n,i,l),()=>s.removeEventListener(n,i)}const Gv=(s,n)=>s.depth-n.depth;class vv{constructor(){this.children=[],this.isDirty=!1}add(n){ip(this.children,n),this.isDirty=!0}remove(n){_l(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(Gv),this.isDirty=!1,this.children.forEach(n)}}function Mv(s,n){const i=ce.now(),l=({timestamp:p})=>{const m=p-i;m>=n&&(Ja(l),s(m-n))};return wt.setup(l,!0),()=>Ja(l)}function ml(s){return oe(s)?s.get():s}class Tv{constructor(){this.members=[]}add(n){ip(this.members,n);for(let i=this.members.length-1;i>=0;i--){const l=this.members[i];if(l===n||l===this.lead||l===this.prevLead)continue;const p=l.instance;(!p||p.isConnected===!1)&&!l.snapshot&&(_l(this.members,l),l.unmount())}n.scheduleRender()}remove(n){if(_l(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(n){var i;for(let l=this.members.indexOf(n)-1;l>=0;l--){const p=this.members[l];if(p.isPresent!==!1&&((i=p.instance)==null?void 0:i.isConnected)!==!1)return this.promote(p),!0}return!1}promote(n,i){var p;const l=this.lead;if(n!==l&&(this.prevLead=l,this.lead=n,n.show(),l)){l.updateSnapshot(),n.scheduleRender();const{layoutDependency:m}=l.options,{layoutDependency:d}=n.options;(m===void 0||m!==d)&&(n.resumeFrom=l,i&&(l.preserveOpacity=!0),l.snapshot&&(n.snapshot=l.snapshot,n.snapshot.latestValues=l.animationValues||l.latestValues),(p=n.root)!=null&&p.isUpdating&&(n.isLayoutDirty=!0)),n.options.crossfade===!1&&l.hide()}}exitAnimationComplete(){this.members.forEach(n=>{var i,l,p,m,d;(l=(i=n.options).onExitComplete)==null||l.call(i),(d=(p=n.resumingFrom)==null?void 0:(m=p.options).onExitComplete)==null||d.call(m)})}scheduleRender(){this.members.forEach(n=>n.instance&&n.scheduleRender(!1))}removeLeadSnapshot(){var n;(n=this.lead)!=null&&n.snapshot&&(this.lead.snapshot=void 0)}}const gl={hasAnimatedSinceResize:!0,hasEverUpdated:!1},gu=["","X","Y","Z"],jv=1e3;let Av=0;function hu(s,n,i,l){const{latestValues:p}=n;p[s]&&(i[s]=p[s],n.setStaticValue(s,0),l&&(l[s]=0))}function e0(s){if(s.hasCheckedOptimisedAppear=!0,s.root===s)return;const{visualElement:n}=s.options;if(!n)return;const i=G_(n);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:p,layoutId:m}=s.options;window.MotionCancelOptimisedAnimation(i,"transform",wt,!(p||m))}const{parent:l}=s;l&&!l.hasCheckedOptimisedAppear&&e0(l)}function a0({attachResizeListener:s,defaultParent:n,measureScroll:i,checkIsScrollRoot:l,resetTransform:p}){return class{constructor(d={},h=n==null?void 0:n()){this.id=Av++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(Vv),this.nodes.forEach(Dv),this.nodes.forEach(Ov),this.nodes.forEach(wv)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let f=0;f<this.path.length;f++)this.path[f].shouldResetTransform=!0;this.root===this&&(this.nodes=new vv)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new rp),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const f=this.eventHandlers.get(d);f&&f.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=Mp(d)&&!IG(d),this.instance=d;const{layoutId:h,layout:f,visualElement:b}=this.options;if(b&&!b.current&&b.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(f||h)&&(this.isLayoutDirty=!0),s){let _,k=0;const y=()=>this.root.updateBlockedByResize=!1;wt.read(()=>{k=window.innerWidth}),s(d,()=>{const G=window.innerWidth;G!==k&&(k=G,this.root.updateBlockedByResize=!0,_&&_(),_=Mv(y,250),gl.hasAnimatedSinceResize&&(gl.hasAnimatedSinceResize=!1,this.nodes.forEach(Pb)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&b&&(h||f)&&this.addEventListener("didUpdate",({delta:_,hasLayoutChanged:k,hasRelativeLayoutChanged:y,layout:G})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const M=this.options.transition||b.getDefaultTransition()||Bv,{onLayoutAnimationStart:I,onLayoutAnimationComplete:A}=b.getProps(),q=!this.targetLayout||!$_(this.targetLayout,G),K=!k&&y;if(this.options.layoutRoot||this.resumeFrom||K||k&&(q||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const O={..._p(M,"layout"),onPlay:I,onComplete:A};(b.shouldReduceMotion||this.options.layoutRoot)&&(O.delay=0,O.type=!1),this.startAnimation(O),this.setAnimationOrigin(_,K,O.path)}else k||Pb(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=G})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Ja(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Rv),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&e0(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let _=0;_<this.path.length;_++){const k=this.path[_];k.shouldResetTransform=!0,(typeof k.latestValues.x=="string"||typeof k.latestValues.y=="string")&&(k.isLayoutDirty=!0),k.updateScroll("snapshot"),k.options.layoutRoot&&k.willUpdate(!1)}const{layoutId:h,layout:f}=this.options;if(h===void 0&&!f)return;const b=this.getTransformTemplate();this.prevTransformTemplateValue=b?b(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const f=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),f&&this.nodes.forEach(Nv),this.nodes.forEach(Bb);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Ub);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(qv),this.nodes.forEach(Cv),this.nodes.forEach(Sv),this.nodes.forEach(Iv)):this.nodes.forEach(Ub),this.clearAllSnapshots();const h=ce.now();ne.delta=ea(0,1e3/60,h-ne.timestamp),ne.timestamp=h,ne.isProcessing=!0,iu.update.process(ne),iu.preRender.process(ne),iu.render.process(ne),ne.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Gp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Ev),this.sharedNodes.forEach(zv)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,wt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){wt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ue(this.snapshot.measuredBox.x)&&!ue(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let f=0;f<this.path.length;f++)this.path[f].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=Qt()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&this.instance){const f=l(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:f,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:f}}}resetTransform(){if(!p)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!J_(this.projectionDelta),f=this.getTransformTemplate(),b=f?f(this.latestValues,""):void 0,_=b!==this.prevTransformTemplateValue;d&&this.instance&&(h||ks(this.latestValues)||_)&&(p(this.instance,b),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let f=this.removeElementScroll(h);return d&&(f=this.removeTransform(f)),Uv(f),{animationId:this.root.animationId,measuredBox:h,layoutBox:f,latestValues:{},source:this.id}}measurePageBox(){var b;const{visualElement:d}=this.options;if(!d)return Qt();const h=d.measureViewportBox();if(!(((b=this.scroll)==null?void 0:b.wasRoot)||this.path.some(Pv))){const{scroll:_}=this.root;_&&(We(h.x,_.offset.x),We(h.y,_.offset.y))}return h}removeElementScroll(d){var f;const h=Qt();if(Ye(h,d),(f=this.scroll)!=null&&f.wasRoot)return h;for(let b=0;b<this.path.length;b++){const _=this.path[b],{scroll:k,options:y}=_;_!==this.root&&k&&y.layoutScroll&&(k.wasRoot&&Ye(h,d),We(h.x,k.offset.x),We(h.y,k.offset.y))}return h}applyTransform(d,h=!1,f){var _,k;const b=f||Qt();Ye(b,d);for(let y=0;y<this.path.length;y++){const G=this.path[y];!h&&G.options.layoutScroll&&G.scroll&&G!==G.root&&(We(b.x,-G.scroll.offset.x),We(b.y,-G.scroll.offset.y)),ks(G.latestValues)&&dl(b,G.latestValues,(_=G.layout)==null?void 0:_.layoutBox)}return ks(this.latestValues)&&dl(b,this.latestValues,(k=this.layout)==null?void 0:k.layoutBox),b}removeTransform(d){var f;const h=Qt();Ye(h,d);for(let b=0;b<this.path.length;b++){const _=this.path[b];if(!ks(_.latestValues))continue;let k;_.instance&&(Qu(_.latestValues)&&_.updateSnapshot(),k=Qt(),Ye(k,_.measurePageBox())),Nb(h,_.latestValues,(f=_.snapshot)==null?void 0:f.layoutBox,k)}return ks(this.latestValues)&&Nb(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ne.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var G;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const f=!!this.resumingFrom||this!==h;if(!(d||f&&this.isSharedProjectionDirty||this.isProjectionDirty||(G=this.parent)!=null&&G.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:_,layoutId:k}=this.options;if(!this.layout||!(_||k))return;this.resolvedRelativeTargetAt=ne.timestamp;const y=this.getClosestProjectingParent();y&&this.linkedParentVersion!==y.layoutVersion&&!y.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&y&&y.layout?this.createRelativeTarget(y,this.layout.layoutBox,y.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Qt(),this.targetWithTransforms=Qt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),pv(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Ye(this.target,this.layout.layoutBox),z_(this.target,this.targetDelta)):Ye(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&y&&!!y.resumingFrom==!!this.resumingFrom&&!y.options.layoutScroll&&y.target&&this.animationProgress!==1?this.createRelativeTarget(y,this.target,y.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Qu(this.parent.latestValues)||R_(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,h,f){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Qt(),this.relativeTargetOrigin=Qt(),jl(this.relativeTargetOrigin,h,f,this.options.layoutAnchor||void 0),Ye(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var M;const d=this.getLead(),h=!!this.resumingFrom||this!==d;let f=!0;if((this.isProjectionDirty||(M=this.parent)!=null&&M.isProjectionDirty)&&(f=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(f=!1),this.resolvedRelativeTargetAt===ne.timestamp&&(f=!1),f)return;const{layout:b,layoutId:_}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(b||_))return;Ye(this.layoutCorrected,this.layout.layoutBox);const k=this.treeScale.x,y=this.treeScale.y;HG(this.layoutCorrected,this.treeScale,this.path,h),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=Qt());const{target:G}=d;if(!G){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Ab(this.prevProjectionDelta.x,this.projectionDelta.x),Ab(this.prevProjectionDelta.y,this.projectionDelta.y)),Mo(this.projectionDelta,this.layoutCorrected,G,this.latestValues),(this.treeScale.x!==k||this.treeScale.y!==y||!Rb(this.projectionDelta.x,this.prevProjectionDelta.x)||!Rb(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",G))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),d){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=bn(),this.projectionDelta=bn(),this.projectionDeltaWithTransform=bn()}setAnimationOrigin(d,h=!1,f){const b=this.snapshot,_=b?b.latestValues:{},k={...this.latestValues},y=bn();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const G=Qt(),M=b?b.source:void 0,I=this.layout?this.layout.source:void 0,A=M!==I,q=this.getStack(),K=!q||q.members.length<=1,O=!!(A&&!K&&this.options.crossfade===!0&&!this.path.some(Lv));this.animationProgress=0;let N;const R=f==null?void 0:f.interpolateProjection(d);this.mixTargetDelta=B=>{const D=B/1e3,X=R==null?void 0:R(D);X?(y.x.translate=X.x,y.x.scale=Vt(d.x.scale,1,D),y.x.origin=d.x.origin,y.x.originPoint=d.x.originPoint,y.y.translate=X.y,y.y.scale=Vt(d.y.scale,1,D),y.y.origin=d.y.origin,y.y.originPoint=d.y.originPoint):(Yb(y.x,d.x,D),Yb(y.y,d.y,D)),this.setTargetDelta(y),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(jl(G,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),Hv(this.relativeTarget,this.relativeTargetOrigin,G,D),N&&hv(this.relativeTarget,N)&&(this.isProjectionDirty=!1),N||(N=Qt()),Ye(N,this.relativeTarget)),A&&(this.animationValues=k,_v(k,_,this.latestValues,D,O,K)),X&&X.rotate!==void 0&&(this.animationValues||(this.animationValues=k),this.animationValues.pathRotation=X.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=D},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var h,f,b;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(b=(f=this.resumingFrom)==null?void 0:f.currentAnimation)==null||b.stop(),this.pendingAnimation&&(Ja(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=wt.update(()=>{gl.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=_n(0)),this.motionValue.jump(0,!1),this.currentAnimation=yv(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:_=>{this.mixTargetDelta(_),d.onUpdate&&d.onUpdate(_)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(jv),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:f,layout:b,latestValues:_}=d;if(!(!h||!f||!b)){if(this!==d&&this.layout&&b&&s0(this.options.animationType,this.layout.layoutBox,b.layoutBox)){f=this.target||Qt();const k=ue(this.layout.layoutBox.x);f.x.min=d.target.x.min,f.x.max=f.x.min+k;const y=ue(this.layout.layoutBox.y);f.y.min=d.target.y.min,f.y.max=f.y.min+y}Ye(h,f),dl(h,_),Mo(this.projectionDeltaWithTransform,this.layoutCorrected,h,_)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new Tv),this.sharedNodes.get(d).add(h);const b=h.options.initialPromotionConfig;h.promote({transition:b?b.transition:void 0,preserveFollowOpacity:b&&b.shouldPreserveFollowOpacity?b.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var h;const{layoutId:d}=this.options;return d?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:d}=this.options;return d?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:f}={}){const b=this.getStack();b&&b.promote(this,f),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:f}=d;if((f.z||f.rotate||f.rotateX||f.rotateY||f.rotateZ||f.skewX||f.skewY)&&(h=!0),!h)return;const b={};f.z&&hu("z",d,b,this.animationValues);for(let _=0;_<gu.length;_++)hu(`rotate${gu[_]}`,d,b,this.animationValues),hu(`skew${gu[_]}`,d,b,this.animationValues);d.render();for(const _ in b)d.setStaticValue(_,b[_]),this.animationValues&&(this.animationValues[_]=b[_]);d.scheduleRender()}applyProjectionStyles(d,h){if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const f=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=ml(h==null?void 0:h.pointerEvents)||"",d.transform=f?f(this.latestValues,""):"none";return}const b=this.getLead();if(!this.projectionDelta||!this.layout||!b.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=ml(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!ks(this.latestValues)&&(d.transform=f?f({},""):"none",this.hasProjected=!1);return}d.visibility="";const _=b.animationValues||b.latestValues;this.applyTransformsToTarget();let k=bv(this.projectionDeltaWithTransform,this.treeScale,_);f&&(k=f(_,k)),d.transform=k;const{x:y,y:G}=this.projectionDelta;d.transformOrigin=`${y.origin*100}% ${G.origin*100}% 0`,b.animationValues?d.opacity=b===this?_.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:_.opacityExit:d.opacity=b===this?_.opacity!==void 0?_.opacity:"":_.opacityExit!==void 0?_.opacityExit:0;for(const M in $u){if(_[M]===void 0)continue;const{correct:I,applyTo:A,isCSSVariable:q}=$u[M],K=k==="none"?_[M]:I(_[M],b);if(A){const O=A.length;for(let N=0;N<O;N++)d[A[N]]=K}else q?this.options.visualElement.renderState.vars[M]=K:d[M]=K}this.options.layoutId&&(d.pointerEvents=b===this?ml(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(Bb),this.root.sharedNodes.clear()}}}function Sv(s){s.updateLayout()}function Iv(s){var i;const n=((i=s.resumeFrom)==null?void 0:i.snapshot)||s.snapshot;if(s.isLead()&&s.layout&&n&&s.hasListeners("didUpdate")){const{layoutBox:l,measuredBox:p}=s.layout,{animationType:m}=s.options,d=n.source!==s.layout.source;if(m==="size")$e(k=>{const y=d?n.measuredBox[k]:n.layoutBox[k],G=ue(y);y.min=l[k].min,y.max=y.min+G});else if(m==="x"||m==="y"){const k=m==="x"?"y":"x";Wu(d?n.measuredBox[k]:n.layoutBox[k],l[k])}else s0(m,n.layoutBox,l)&&$e(k=>{const y=d?n.measuredBox[k]:n.layoutBox[k],G=ue(l[k]);y.max=y.min+G,s.relativeTarget&&!s.currentAnimation&&(s.isProjectionDirty=!0,s.relativeTarget[k].max=s.relativeTarget[k].min+G)});const h=bn();Mo(h,l,n.layoutBox);const f=bn();d?Mo(f,s.applyTransform(p,!0),n.measuredBox):Mo(f,l,n.layoutBox);const b=!J_(h);let _=!1;if(!s.resumeFrom){const k=s.getClosestProjectingParent();if(k&&!k.resumeFrom){const{snapshot:y,layout:G}=k;if(y&&G){const M=s.options.layoutAnchor||void 0,I=Qt();jl(I,n.layoutBox,y.layoutBox,M);const A=Qt();jl(A,l,G.layoutBox,M),$_(I,A)||(_=!0),k.options.layoutRoot&&(s.relativeTarget=A,s.relativeTargetOrigin=I,s.relativeParent=k)}}}s.notifyListeners("didUpdate",{layout:l,snapshot:n,delta:f,layoutDelta:h,hasLayoutChanged:b,hasRelativeLayoutChanged:_})}else if(s.isLead()){const{onExitComplete:l}=s.options;l&&l()}s.options.transition=void 0}function Vv(s){s.parent&&(s.isProjecting()||(s.isProjectionDirty=s.parent.isProjectionDirty),s.isSharedProjectionDirty||(s.isSharedProjectionDirty=!!(s.isProjectionDirty||s.parent.isProjectionDirty||s.parent.isSharedProjectionDirty)),s.isTransformDirty||(s.isTransformDirty=s.parent.isTransformDirty))}function wv(s){s.isProjectionDirty=s.isSharedProjectionDirty=s.isTransformDirty=!1}function Ev(s){s.clearSnapshot()}function Bb(s){s.clearMeasurements()}function Nv(s){s.isLayoutDirty=!0,s.updateLayout()}function Ub(s){s.isLayoutDirty=!1}function qv(s){s.isAnimationBlocked&&s.layout&&!s.isLayoutDirty&&(s.snapshot=s.layout,s.isLayoutDirty=!0)}function Cv(s){const{visualElement:n}=s.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),s.resetTransform()}function Pb(s){s.finishAnimation(),s.targetDelta=s.relativeTarget=s.target=void 0,s.isProjectionDirty=!0}function Dv(s){s.resolveTargetDelta()}function Ov(s){s.calcProjection()}function Rv(s){s.resetSkewAndRotation()}function zv(s){s.removeLeadSnapshot()}function Yb(s,n,i){s.translate=Vt(n.translate,0,i),s.scale=Vt(n.scale,1,i),s.origin=n.origin,s.originPoint=n.originPoint}function Xb(s,n,i,l){s.min=Vt(n.min,i.min,l),s.max=Vt(n.max,i.max,l)}function Hv(s,n,i,l){Xb(s.x,n.x,i.x,l),Xb(s.y,n.y,i.y,l)}function Lv(s){return s.animationValues&&s.animationValues.opacityExit!==void 0}const Bv={duration:.45,ease:[.4,0,.1,1]},Kb=s=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(s),Fb=Kb("applewebkit/")&&!Kb("chrome/")?Math.round:Le;function Zb(s){s.min=Fb(s.min),s.max=Fb(s.max)}function Uv(s){Zb(s.x),Zb(s.y)}function s0(s,n,i){return s==="position"||s==="preserve-aspect"&&!uv(Ob(n),Ob(i),.2)}function Pv(s){var n;return s!==s.root&&((n=s.scroll)==null?void 0:n.wasRoot)}const Yv=a0({attachResizeListener:(s,n)=>Io(s,"resize",n),measureScroll:()=>{var s,n;return{x:document.documentElement.scrollLeft||((s=document.body)==null?void 0:s.scrollLeft)||0,y:document.documentElement.scrollTop||((n=document.body)==null?void 0:n.scrollTop)||0}},checkIsScrollRoot:()=>!0}),bu={current:void 0},n0=a0({measureScroll:s=>({x:s.scrollLeft,y:s.scrollTop}),defaultParent:()=>{if(!bu.current){const s=new Yv({});s.mount(window),s.setOptions({layoutScroll:!0}),bu.current=s}return bu.current},resetTransform:(s,n)=>{s.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:s=>window.getComputedStyle(s).position==="fixed"}),Ip=Y.createContext({transformPagePoint:s=>s,isStatic:!1,reducedMotion:"never"});function Qb(s,n){if(typeof s=="function")return s(n);s!=null&&(s.current=n)}function Xv(...s){return n=>{let i=!1;const l=s.map(p=>{const m=Qb(p,n);return!i&&typeof m=="function"&&(i=!0),m});if(i)return()=>{for(let p=0;p<l.length;p++){const m=l[p];typeof m=="function"?m():Qb(s[p],null)}}}}function Kv(...s){return Y.useCallback(Xv(...s),s)}class Fv extends Y.Component{getSnapshotBeforeUpdate(n){const i=this.props.childRef.current;if(rl(i)&&n.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const l=i.offsetParent,p=rl(l)&&l.offsetWidth||0,m=rl(l)&&l.offsetHeight||0,d=getComputedStyle(i),h=this.props.sizeRef.current;h.height=parseFloat(d.height),h.width=parseFloat(d.width),h.top=i.offsetTop,h.left=i.offsetLeft,h.right=p-h.width-h.left,h.bottom=m-h.height-h.top,h.direction=d.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function Zv({children:s,isPresent:n,anchorX:i,anchorY:l,root:p,pop:m}){var y;const d=Y.useId(),h=Y.useRef(null),f=Y.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:b}=Y.useContext(Ip),_=((y=s.props)==null?void 0:y.ref)??(s==null?void 0:s.ref),k=Kv(h,_);return Y.useInsertionEffect(()=>{const{width:G,height:M,top:I,left:A,right:q,bottom:K,direction:O}=f.current;if(n||m===!1||!h.current||!G||!M)return;const N=O==="rtl",R=i==="left"?N?`right: ${q}`:`left: ${A}`:N?`left: ${A}`:`right: ${q}`,B=l==="bottom"?`bottom: ${K}`:`top: ${I}`;h.current.dataset.motionPopId=d;const D=document.createElement("style");b&&(D.nonce=b);const X=p??document.head;return X.appendChild(D),D.sheet&&D.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${G}px !important;
            height: ${M}px !important;
            ${R}px !important;
            ${B}px !important;
          }
        `),()=>{var F;(F=h.current)==null||F.removeAttribute("data-motion-pop-id"),X.contains(D)&&X.removeChild(D)}},[n]),u.jsx(Fv,{isPresent:n,childRef:h,sizeRef:f,pop:m,children:m===!1?s:Y.cloneElement(s,{ref:k})})}const Qv=({children:s,initial:n,isPresent:i,onExitComplete:l,custom:p,presenceAffectsLayout:m,mode:d,anchorX:h,anchorY:f,root:b})=>{const _=op(Jv),k=Y.useId();let y=!0,G=Y.useMemo(()=>(y=!1,{id:k,initial:n,isPresent:i,custom:p,onExitComplete:M=>{_.set(M,!0);for(const I of _.values())if(!I)return;l&&l()},register:M=>(_.set(M,!1),()=>_.delete(M))}),[i,_,l]);return m&&y&&(G={...G}),Y.useMemo(()=>{_.forEach((M,I)=>_.set(I,!1))},[i]),Y.useEffect(()=>{!i&&!_.size&&l&&l()},[i]),s=u.jsx(Zv,{pop:d==="popLayout",isPresent:i,anchorX:h,anchorY:f,root:b,children:s}),u.jsx(Sl.Provider,{value:G,children:s})};function Jv(){return new Map}function o0(s=!0){const n=Y.useContext(Sl);if(n===null)return[!0,null];const{isPresent:i,onExitComplete:l,register:p}=n,m=Y.useId();Y.useEffect(()=>{if(s)return p(m)},[s]);const d=Y.useCallback(()=>s&&l&&l(m),[m,l,s]);return!i&&l?[!1,d]:[!0]}const el=s=>s.key||"";function Jb(s){const n=[];return Y.Children.forEach(s,i=>{Y.isValidElement(i)&&n.push(i)}),n}const fu=({children:s,custom:n,initial:i=!0,onExitComplete:l,presenceAffectsLayout:p=!0,mode:m="sync",propagate:d=!1,anchorX:h="left",anchorY:f="top",root:b})=>{const[_,k]=o0(d),y=Y.useMemo(()=>Jb(s),[s]),G=d&&!_?[]:y.map(el),M=Y.useRef(!0),I=Y.useRef(y),A=op(()=>new Map),q=Y.useRef(new Set),[K,O]=Y.useState(y),[N,R]=Y.useState(y);Nf(()=>{M.current=!1,I.current=y;for(let X=0;X<N.length;X++){const F=el(N[X]);G.includes(F)?(A.delete(F),q.current.delete(F)):A.get(F)!==!0&&A.set(F,!1)}},[N,G.length,G.join("-")]);const B=[];if(y!==K){let X=[...y];for(let F=0;F<N.length;F++){const Z=N[F],it=el(Z);G.includes(it)||(X.splice(F,0,Z),B.push(Z))}return m==="wait"&&B.length&&(X=B),R(Jb(X)),O(y),null}const{forceRender:D}=Y.useContext(np);return u.jsx(u.Fragment,{children:N.map(X=>{const F=el(X),Z=d&&!_?!1:y===N||G.includes(F),it=()=>{if(q.current.has(F))return;if(A.has(F))q.current.add(F),A.set(F,!0);else return;let nt=!0;A.forEach(Ut=>{Ut||(nt=!1)}),nt&&(D==null||D(),R(I.current),d&&(k==null||k()),l&&l())};return u.jsx(Qv,{isPresent:Z,initial:!M.current||i?void 0:!1,custom:n,presenceAffectsLayout:p,mode:m,root:b,onExitComplete:Z?void 0:it,anchorX:h,anchorY:f,children:X},F)})})},i0=Y.createContext({strict:!1}),$b={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Wb=!1;function $v(){if(Wb)return;const s={};for(const n in $b)s[n]={isEnabled:i=>$b[n].some(l=>!!i[l])};C_(s),Wb=!0}function l0(){return $v(),DG()}function Wv(s){const n=l0();for(const i in s)n[i]={...n[i],...s[i]};C_(n)}const t3=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Al(s){return s.startsWith("while")||s.startsWith("drag")&&s!=="draggable"||s.startsWith("layout")||s.startsWith("onTap")||s.startsWith("onPan")||s.startsWith("onLayout")||t3.has(s)}let r0=s=>!Al(s);function e3(s){typeof s=="function"&&(r0=n=>n.startsWith("on")?!Al(n):s(n))}try{e3(require("@emotion/is-prop-valid").default)}catch{}function a3(s,n,i){const l={};for(const p in s)p==="values"&&typeof s.values=="object"||oe(s[p])||(r0(p)||i===!0&&Al(p)||!n&&!Al(p)||s.draggable&&p.startsWith("onDrag"))&&(l[p]=s[p]);return l}const El=Y.createContext({});function s3(s,n){if(wl(s)){const{initial:i,animate:l}=s;return{initial:i===!1||So(i)?i:void 0,animate:So(l)?l:void 0}}return s.inherit!==!1?n:{}}function n3(s){const{initial:n,animate:i}=s3(s,Y.useContext(El));return Y.useMemo(()=>({initial:n,animate:i}),[tf(n),tf(i)])}function tf(s){return Array.isArray(s)?s.join(" "):s}const Vp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function c0(s,n,i){for(const l in n)!oe(n[l])&&!B_(l,i)&&(s[l]=n[l])}function o3({transformTemplate:s},n){return Y.useMemo(()=>{const i=Vp();return Ap(i,n,s),Object.assign({},i.vars,i.style)},[n])}function i3(s,n){const i=s.style||{},l={};return c0(l,i,s),Object.assign(l,o3(s,n)),l}function l3(s,n){const i={},l=i3(s,n);return s.drag&&s.dragListener!==!1&&(i.draggable=!1,l.userSelect=l.WebkitUserSelect=l.WebkitTouchCallout="none",l.touchAction=s.drag===!0?"none":`pan-${s.drag==="x"?"y":"x"}`),s.tabIndex===void 0&&(s.onTap||s.onTapStart||s.whileTap)&&(i.tabIndex=0),i.style=l,i}const u0=()=>({...Vp(),attrs:{}});function r3(s,n,i,l){const p=Y.useMemo(()=>{const m=u0();return U_(m,n,Y_(l),s.transformTemplate,s.style),{...m.attrs,style:{...m.style}}},[n]);if(s.style){const m={};c0(m,s.style,s),p.style={...m,...p.style}}return p}const c3=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function wp(s){return typeof s!="string"||s.includes("-")?!1:!!(c3.indexOf(s)>-1||/[A-Z]/u.test(s))}function u3(s,n,i,{latestValues:l},p,m=!1,d){const f=(d??wp(s)?r3:l3)(n,l,p,s),b=a3(n,typeof s=="string",m),_=s!==Y.Fragment?{...b,...f,ref:i}:{},{children:k}=n,y=Y.useMemo(()=>oe(k)?k.get():k,[k]);return Y.createElement(s,{..._,children:y})}function p3({scrapeMotionValuesFromProps:s,createRenderState:n},i,l,p){return{latestValues:d3(i,l,p,s),renderState:n()}}function d3(s,n,i,l){const p={},m=l(s,{});for(const y in m)p[y]=ml(m[y]);let{initial:d,animate:h}=s;const f=wl(s),b=N_(s);n&&b&&!f&&s.inherit!==!1&&(d===void 0&&(d=n.initial),h===void 0&&(h=n.animate));let _=i?i.initial===!1:!1;_=_||d===!1;const k=_?h:d;if(k&&typeof k!="boolean"&&!Vl(k)){const y=Array.isArray(k)?k:[k];for(let G=0;G<y.length;G++){const M=kp(s,y[G]);if(M){const{transitionEnd:I,transition:A,...q}=M;for(const K in q){let O=q[K];if(Array.isArray(O)){const N=_?O.length-1:0;O=O[N]}O!==null&&(p[K]=O)}for(const K in I)p[K]=I[K]}}}return p}const p0=s=>(n,i)=>{const l=Y.useContext(El),p=Y.useContext(Sl),m=()=>p3(s,n,l,p);return i?m():op(m)},m3=p0({scrapeMotionValuesFromProps:Sp,createRenderState:Vp}),g3=p0({scrapeMotionValuesFromProps:X_,createRenderState:u0}),h3=Symbol.for("motionComponentSymbol");function b3(s,n,i){const l=Y.useRef(i);Y.useInsertionEffect(()=>{l.current=i});const p=Y.useRef(null);return Y.useCallback(m=>{var h;m&&((h=s.onMount)==null||h.call(s,m)),n&&(m?n.mount(m):n.unmount());const d=l.current;if(typeof d=="function")if(m){const f=d(m);typeof f=="function"&&(p.current=f)}else p.current?(p.current(),p.current=null):d(m);else d&&(d.current=m)},[n])}const d0=Y.createContext({});function dn(s){return s&&typeof s=="object"&&Object.prototype.hasOwnProperty.call(s,"current")}function f3(s,n,i,l,p,m){var O,N;const{visualElement:d}=Y.useContext(El),h=Y.useContext(i0),f=Y.useContext(Sl),b=Y.useContext(Ip),_=b.reducedMotion,k=b.skipAnimations,y=Y.useRef(null),G=Y.useRef(!1);l=l||h.renderer,!y.current&&l&&(y.current=l(s,{visualState:n,parent:d,props:i,presenceContext:f,blockInitialAnimation:f?f.initial===!1:!1,reducedMotionConfig:_,skipAnimations:k,isSVG:m}),G.current&&y.current&&(y.current.manuallyAnimateOnMount=!0));const M=y.current,I=Y.useContext(d0);M&&!M.projection&&p&&(M.type==="html"||M.type==="svg")&&_3(y.current,i,p,I);const A=Y.useRef(!1);Y.useInsertionEffect(()=>{M&&A.current&&M.update(i,f)});const q=i[y_],K=Y.useRef(!!q&&typeof window<"u"&&!((O=window.MotionHandoffIsComplete)!=null&&O.call(window,q))&&((N=window.MotionHasOptimisedAnimation)==null?void 0:N.call(window,q)));return Nf(()=>{G.current=!0,M&&(A.current=!0,window.MotionIsMounted=!0,M.updateFeatures(),M.scheduleRenderMicrotask(),K.current&&M.animationState&&M.animationState.animateChanges())}),Y.useEffect(()=>{M&&(!K.current&&M.animationState&&M.animationState.animateChanges(),K.current&&(queueMicrotask(()=>{var R;(R=window.MotionHandoffMarkAsComplete)==null||R.call(window,q)}),K.current=!1),M.enteringChildren=void 0)}),M}function _3(s,n,i,l){const{layoutId:p,layout:m,drag:d,dragConstraints:h,layoutScroll:f,layoutRoot:b,layoutAnchor:_,layoutCrossfade:k}=n;s.projection=new i(s.latestValues,n["data-framer-portal-id"]?void 0:m0(s.parent)),s.projection.setOptions({layoutId:p,layout:m,alwaysMeasureLayout:!!d||h&&dn(h),visualElement:s,animationType:typeof m=="string"?m:"both",initialPromotionConfig:l,crossfade:k,layoutScroll:f,layoutRoot:b,layoutAnchor:_})}function m0(s){if(s)return s.options.allowProjection!==!1?s.projection:m0(s.parent)}function _u(s,{forwardMotionProps:n=!1,type:i}={},l,p){l&&Wv(l);const m=i?i==="svg":wp(s),d=m?g3:m3;function h(b,_){let k;const y={...Y.useContext(Ip),...b,layoutId:x3(b)},{isStatic:G}=y,M=n3(b),I=d(b,G);if(!G&&typeof window<"u"){k3();const A=y3(y);k=A.MeasureLayout,M.visualElement=f3(s,I,y,p,A.ProjectionNode,m)}return u.jsxs(El.Provider,{value:M,children:[k&&M.visualElement?u.jsx(k,{visualElement:M.visualElement,...y}):null,u3(s,b,b3(I,M.visualElement,_),I,G,n,m)]})}h.displayName=`motion.${typeof s=="string"?s:`create(${s.displayName??s.name??""})`}`;const f=Y.forwardRef(h);return f[h3]=s,f}function x3({layoutId:s}){const n=Y.useContext(np).id;return n&&s!==void 0?n+"-"+s:s}function k3(s,n){Y.useContext(i0).strict}function y3(s){const n=l0(),{drag:i,layout:l}=n;if(!i&&!l)return{};const p={...i,...l};return{MeasureLayout:i!=null&&i.isEnabled(s)||l!=null&&l.isEnabled(s)?p.MeasureLayout:void 0,ProjectionNode:p.ProjectionNode}}function G3(s,n){if(typeof Proxy>"u")return _u;const i=new Map,l=(m,d)=>_u(m,d,s,n),p=(m,d)=>l(m,d);return new Proxy(p,{get:(m,d)=>d==="create"?l:(i.has(d)||i.set(d,_u(d,void 0,s,n)),i.get(d))})}const v3=(s,n)=>n.isSVG??wp(s)?new WG(n):new KG(n,{allowProjection:s!==Y.Fragment});class M3 extends $a{constructor(n){super(n),n.animationState||(n.animationState=nv(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();Vl(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:i}=this.node.prevProps||{};n!==i&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)==null||n.call(this)}}let T3=0;class j3 extends $a{constructor(){super(...arguments),this.id=T3++,this.isExitComplete=!1}update(){var m;if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:i}=this.node.presenceContext,{isPresent:l}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===l)return;if(n&&l===!1){if(this.isExitComplete){const{initial:d,custom:h}=this.node.getProps();if(typeof d=="string"||typeof d=="object"&&d!==null&&!Array.isArray(d)){const f=Ms(this.node,d,h);if(f){const{transition:b,transitionEnd:_,...k}=f;for(const y in k)(m=this.node.getValue(y))==null||m.jump(k[y])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const p=this.node.animationState.setActive("exit",!n);i&&!n&&p.then(()=>{this.isExitComplete=!0,i(this.id)})}mount(){const{register:n,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),n&&(this.unmount=n(this.id))}unmount(){}}const A3={animation:{Feature:M3},exit:{Feature:j3}};function No(s){return{point:{x:s.pageX,y:s.pageY}}}const S3=s=>n=>vp(n)&&s(n,No(n));function To(s,n,i,l){return Io(s,n,S3(i),l)}const g0=({current:s})=>s?s.ownerDocument.defaultView:null,ef=(s,n)=>Math.abs(s-n);function I3(s,n){const i=ef(s.x,n.x),l=ef(s.y,n.y);return Math.sqrt(i**2+l**2)}const af=new Set(["auto","scroll"]);class h0{constructor(n,i,{transformPagePoint:l,contextWindow:p=window,dragSnapToOrigin:m=!1,distanceThreshold:d=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=G=>{this.handleScroll(G.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=al(this.lastRawMoveEventInfo,this.transformPagePoint));const G=xu(this.lastMoveEventInfo,this.history),M=this.startEvent!==null,I=I3(G.offset,{x:0,y:0})>=this.distanceThreshold;if(!M&&!I)return;const{point:A}=G,{timestamp:q}=ne;this.history.push({...A,timestamp:q});const{onStart:K,onMove:O}=this.handlers;M||(K&&K(this.lastMoveEvent,G),this.startEvent=this.lastMoveEvent),O&&O(this.lastMoveEvent,G)},this.handlePointerMove=(G,M)=>{this.lastMoveEvent=G,this.lastRawMoveEventInfo=M,this.lastMoveEventInfo=al(M,this.transformPagePoint),wt.update(this.updatePoint,!0)},this.handlePointerUp=(G,M)=>{this.end();const{onEnd:I,onSessionEnd:A,resumeAnimation:q}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&q&&q(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const K=xu(G.type==="pointercancel"?this.lastMoveEventInfo:al(M,this.transformPagePoint),this.history);this.startEvent&&I&&I(G,K),A&&A(G,K)},!vp(n))return;this.dragSnapToOrigin=m,this.handlers=i,this.transformPagePoint=l,this.distanceThreshold=d,this.contextWindow=p||window;const f=No(n),b=al(f,this.transformPagePoint),{point:_}=b,{timestamp:k}=ne;this.history=[{..._,timestamp:k}];const{onSessionStart:y}=i;y&&y(n,xu(b,this.history)),this.removeListeners=Vo(To(this.contextWindow,"pointermove",this.handlePointerMove),To(this.contextWindow,"pointerup",this.handlePointerUp),To(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(n){let i=n.parentElement;for(;i;){const l=getComputedStyle(i);(af.has(l.overflowX)||af.has(l.overflowY))&&this.scrollPositions.set(i,{x:i.scrollLeft,y:i.scrollTop}),i=i.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(n){const i=this.scrollPositions.get(n);if(!i)return;const l=n===window,p=l?{x:window.scrollX,y:window.scrollY}:{x:n.scrollLeft,y:n.scrollTop},m={x:p.x-i.x,y:p.y-i.y};m.x===0&&m.y===0||(l?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=m.x,this.lastMoveEventInfo.point.y+=m.y):this.history.length>0&&(this.history[0].x-=m.x,this.history[0].y-=m.y),this.scrollPositions.set(n,p),wt.update(this.updatePoint,!0))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Ja(this.updatePoint)}}function al(s,n){return n?{point:n(s.point)}:s}function sf(s,n){return{x:s.x-n.x,y:s.y-n.y}}function xu({point:s},n){return{point:s,delta:sf(s,b0(n)),offset:sf(s,V3(n)),velocity:w3(n,.1)}}function V3(s){return s[0]}function b0(s){return s[s.length-1]}function w3(s,n){if(s.length<2)return{x:0,y:0};let i=s.length-1,l=null;const p=b0(s);for(;i>=0&&(l=s[i],!(p.timestamp-l.timestamp>Se(n)));)i--;if(!l)return{x:0,y:0};l===s[0]&&s.length>2&&p.timestamp-l.timestamp>Se(n)*2&&(l=s[1]);const m=He(p.timestamp-l.timestamp);if(m===0)return{x:0,y:0};const d={x:(p.x-l.x)/m,y:(p.y-l.y)/m};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function E3(s,{min:n,max:i},l){return n!==void 0&&s<n?s=l?Vt(n,s,l.min):Math.max(s,n):i!==void 0&&s>i&&(s=l?Vt(i,s,l.max):Math.min(s,i)),s}function nf(s,n,i){return{min:n!==void 0?s.min+n:void 0,max:i!==void 0?s.max+i-(s.max-s.min):void 0}}function N3(s,{top:n,left:i,bottom:l,right:p}){return{x:nf(s.x,i,p),y:nf(s.y,n,l)}}function of(s,n){let i=n.min-s.min,l=n.max-s.max;return n.max-n.min<s.max-s.min&&([i,l]=[l,i]),{min:i,max:l}}function q3(s,n){return{x:of(s.x,n.x),y:of(s.y,n.y)}}function C3(s,n){let i=.5;const l=ue(s),p=ue(n);return p>l?i=jo(n.min,n.max-l,s.min):l>p&&(i=jo(s.min,s.max-p,n.min)),ea(0,1,i)}function D3(s,n){const i={};return n.min!==void 0&&(i.min=n.min-s.min),n.max!==void 0&&(i.max=n.max-s.min),i}const tp=.35;function O3(s=tp){return s===!1?s=0:s===!0&&(s=tp),{x:lf(s,"left","right"),y:lf(s,"top","bottom")}}function lf(s,n,i){return{min:rf(s,n),max:rf(s,i)}}function rf(s,n){return typeof s=="number"?s:s[n]||0}const R3=new WeakMap;class z3{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Qt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=n}start(n,{snapToCursor:i=!1,distanceThreshold:l}={}){const{presenceContext:p}=this.visualElement;if(p&&p.isPresent===!1)return;const m=k=>{i&&this.snapToCursor(No(k).point),this.stopAnimation()},d=(k,y)=>{const{drag:G,dragPropagation:M,onDragStart:I}=this.getProps();if(G&&!M&&(this.openDragLock&&this.openDragLock(),this.openDragLock=dG(G),!this.openDragLock))return;this.latestPointerEvent=k,this.latestPanInfo=y,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),$e(q=>{let K=this.getAxisMotionValue(q).get()||0;if(ta.test(K)){const{projection:O}=this.visualElement;if(O&&O.layout){const N=O.layout.layoutBox[q];N&&(K=ue(N)*(parseFloat(K)/100))}}this.originPoint[q]=K}),I&&wt.update(()=>I(k,y),!1,!0),Pu(this.visualElement,"transform");const{animationState:A}=this.visualElement;A&&A.setActive("whileDrag",!0)},h=(k,y)=>{this.latestPointerEvent=k,this.latestPanInfo=y;const{dragPropagation:G,dragDirectionLock:M,onDirectionLock:I,onDrag:A}=this.getProps();if(!G&&!this.openDragLock)return;const{offset:q}=y;if(M&&this.currentDirection===null){this.currentDirection=L3(q),this.currentDirection!==null&&I&&I(this.currentDirection);return}this.updateAxis("x",y.point,q),this.updateAxis("y",y.point,q),this.visualElement.render(),A&&wt.update(()=>A(k,y),!1,!0)},f=(k,y)=>{this.latestPointerEvent=k,this.latestPanInfo=y,this.stop(k,y),this.latestPointerEvent=null,this.latestPanInfo=null},b=()=>{const{dragSnapToOrigin:k}=this.getProps();(k||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:_}=this.getProps();this.panSession=new h0(n,{onSessionStart:m,onStart:d,onMove:h,onSessionEnd:f,resumeAnimation:b},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:_,distanceThreshold:l,contextWindow:g0(this.visualElement),element:this.visualElement.current})}stop(n,i){const l=n||this.latestPointerEvent,p=i||this.latestPanInfo,m=this.isDragging;if(this.cancel(),!m||!p||!l)return;const{velocity:d}=p;this.startAnimation(d);const{onDragEnd:h}=this.getProps();h&&wt.postRender(()=>h(l,p))}cancel(){this.isDragging=!1;const{projection:n,animationState:i}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:l}=this.getProps();!l&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(n,i,l){const{drag:p}=this.getProps();if(!l||!sl(n,p,this.currentDirection))return;const m=this.getAxisMotionValue(n);let d=this.originPoint[n]+l[n];this.constraints&&this.constraints[n]&&(d=E3(d,this.constraints[n],this.elastic[n])),m.set(d)}resolveConstraints(){var m;const{dragConstraints:n,dragElastic:i}=this.getProps(),l=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(m=this.visualElement.projection)==null?void 0:m.layout,p=this.constraints;n&&dn(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&l?this.constraints=N3(l.layoutBox,n):this.constraints=!1,this.elastic=O3(i),p!==this.constraints&&!dn(n)&&l&&this.constraints&&!this.hasMutatedConstraints&&$e(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=D3(l.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:i}=this.getProps();if(!n||!dn(n))return!1;const l=n.current,{projection:p}=this.visualElement;if(!p||!p.layout)return!1;p.root&&(p.root.scroll=void 0,p.root.updateScroll());const m=LG(l,p.root,this.visualElement.getTransformPagePoint());let d=q3(p.layout.layoutBox,m);if(i){const h=i(RG(d));this.hasMutatedConstraints=!!h,h&&(d=O_(h))}return d}startAnimation(n){const{drag:i,dragMomentum:l,dragElastic:p,dragTransition:m,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),f=this.constraints||{},b=$e(_=>{if(!sl(_,i,this.currentDirection))return;let k=f&&f[_]||{};(d===!0||d===_)&&(k={min:0,max:0});const y=p?200:1e6,G=p?40:1e7,M={type:"inertia",velocity:l?n[_]:0,bounceStiffness:y,bounceDamping:G,timeConstant:750,restDelta:1,restSpeed:10,...m,...k};return this.startAxisValueAnimation(_,M)});return Promise.all(b).then(h)}startAxisValueAnimation(n,i){const l=this.getAxisMotionValue(n);return Pu(this.visualElement,n),l.start(xp(n,l,0,i,this.visualElement,!1))}stopAnimation(){$e(n=>this.getAxisMotionValue(n).stop())}getAxisMotionValue(n){const i=`_drag${n.toUpperCase()}`,p=this.visualElement.getProps()[i];return p||this.visualElement.getValue(n,this.visualElement.latestValues[n]??0)}snapToCursor(n){$e(i=>{const{drag:l}=this.getProps();if(!sl(i,l,this.currentDirection))return;const{projection:p}=this.visualElement,m=this.getAxisMotionValue(i);if(p&&p.layout){const{min:d,max:h}=p.layout.layoutBox[i],f=m.get()||0;m.set(n[i]-Vt(d,h,.5)+f)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:i}=this.getProps(),{projection:l}=this.visualElement;if(!dn(i)||!l||!this.constraints)return;this.stopAnimation();const p={x:0,y:0};$e(d=>{const h=this.getAxisMotionValue(d);if(h&&this.constraints!==!1){const f=h.get();p[d]=C3({min:f,max:f},this.constraints[d])}});const{transformTemplate:m}=this.visualElement.getProps();this.visualElement.current.style.transform=m?m({},""):"none",l.root&&l.root.updateScroll(),l.updateLayout(),this.constraints=!1,this.resolveConstraints(),$e(d=>{if(!sl(d,n,null))return;const h=this.getAxisMotionValue(d),{min:f,max:b}=this.constraints[d];h.set(Vt(f,b,p[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;R3.set(this.visualElement,this);const n=this.visualElement.current,i=To(n,"pointerdown",b=>{const{drag:_,dragListener:k=!0}=this.getProps(),y=b.target,G=y!==n&&_G(y);_&&k&&!G&&this.start(b)});let l;const p=()=>{const{dragConstraints:b}=this.getProps();dn(b)&&b.current&&(this.constraints=this.resolveRefConstraints(),l||(l=H3(n,b.current,()=>this.scalePositionWithinConstraints())))},{projection:m}=this.visualElement,d=m.addEventListener("measure",p);m&&!m.layout&&(m.root&&m.root.updateScroll(),m.updateLayout()),wt.read(p);const h=Io(window,"resize",()=>this.scalePositionWithinConstraints()),f=m.addEventListener("didUpdate",(({delta:b,hasLayoutChanged:_})=>{this.isDragging&&_&&($e(k=>{const y=this.getAxisMotionValue(k);y&&(this.originPoint[k]+=b[k].translate,y.set(y.get()+b[k].translate))}),this.visualElement.render())}));return()=>{h(),i(),d(),f&&f(),l&&l()}}getProps(){const n=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:l=!1,dragPropagation:p=!1,dragConstraints:m=!1,dragElastic:d=tp,dragMomentum:h=!0}=n;return{...n,drag:i,dragDirectionLock:l,dragPropagation:p,dragConstraints:m,dragElastic:d,dragMomentum:h}}}function cf(s){let n=!0;return()=>{if(n){n=!1;return}s()}}function H3(s,n,i){const l=hb(s,cf(i)),p=hb(n,cf(i));return()=>{l(),p()}}function sl(s,n,i){return(n===!0||n===s)&&(i===null||i===s)}function L3(s,n=10){let i=null;return Math.abs(s.y)>n?i="y":Math.abs(s.x)>n&&(i="x"),i}class B3 extends $a{constructor(n){super(n),this.removeGroupControls=Le,this.removeListeners=Le,this.controls=new z3(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Le}update(){const{dragControls:n}=this.node.getProps(),{dragControls:i}=this.node.prevProps||{};n!==i&&(this.removeGroupControls(),n&&(this.removeGroupControls=n.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const ku=s=>(n,i)=>{s&&wt.update(()=>s(n,i),!1,!0)};class U3 extends $a{constructor(){super(...arguments),this.removePointerDownListener=Le}onPointerDown(n){this.session=new h0(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:g0(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:i,onPan:l,onPanEnd:p}=this.node.getProps();return{onSessionStart:ku(n),onStart:ku(i),onMove:ku(l),onEnd:(m,d)=>{delete this.session,p&&wt.postRender(()=>p(m,d))}}}mount(){this.removePointerDownListener=To(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let yu=!1;class P3 extends Y.Component{componentDidMount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:l,layoutId:p}=this.props,{projection:m}=n;m&&(i.group&&i.group.add(m),l&&l.register&&p&&l.register(m),yu&&m.root.didUpdate(),m.addEventListener("animationComplete",()=>{this.safeToRemove()}),m.setOptions({...m.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),gl.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:i,visualElement:l,drag:p,isPresent:m}=this.props,{projection:d}=l;return d&&(d.isPresent=m,n.layoutDependency!==i&&d.setOptions({...d.options,layoutDependency:i}),yu=!0,p||n.layoutDependency!==i||i===void 0||n.isPresent!==m?d.willUpdate():this.safeToRemove(),n.isPresent!==m&&(m?d.promote():d.relegate()||wt.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:n,layoutAnchor:i}=this.props,{projection:l}=n;l&&(l.options.layoutAnchor=i,l.root.didUpdate(),Gp.postRender(()=>{!l.currentAnimation&&l.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:l}=this.props,{projection:p}=n;yu=!0,p&&(p.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(p),l&&l.deregister&&l.deregister(p))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function f0(s){const[n,i]=o0(),l=Y.useContext(np);return u.jsx(P3,{...s,layoutGroup:l,switchLayoutGroup:Y.useContext(d0),isPresent:n,safeToRemove:i})}const Y3={pan:{Feature:U3},drag:{Feature:B3,ProjectionNode:n0,MeasureLayout:f0}};function uf(s,n,i){const{props:l}=s;s.animationState&&l.whileHover&&s.animationState.setActive("whileHover",i==="Start");const p="onHover"+i,m=l[p];m&&wt.postRender(()=>m(n,No(n)))}class X3 extends $a{mount(){const{current:n}=this.node;n&&(this.unmount=gG(n,(i,l)=>(uf(this.node,l,"Start"),p=>uf(this.node,p,"End"))))}unmount(){}}class K3 extends $a{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Vo(Io(this.node.current,"focus",()=>this.onFocus()),Io(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function pf(s,n,i){const{props:l}=s;if(s.current instanceof HTMLButtonElement&&s.current.disabled)return;s.animationState&&l.whileTap&&s.animationState.setActive("whileTap",i==="Start");const p="onTap"+(i==="End"?"":i),m=l[p];m&&wt.postRender(()=>m(n,No(n)))}class F3 extends $a{mount(){const{current:n}=this.node;if(!n)return;const{globalTapTarget:i,propagate:l}=this.node.props;this.unmount=kG(n,(p,m)=>(pf(this.node,m,"Start"),(d,{success:h})=>pf(this.node,d,h?"End":"Cancel")),{useGlobalTarget:i,stopPropagation:(l==null?void 0:l.tap)===!1})}unmount(){}}const ep=new WeakMap,Gu=new WeakMap,Z3=s=>{const n=ep.get(s.target);n&&n(s)},Q3=s=>{s.forEach(Z3)};function J3({root:s,...n}){const i=s||document;Gu.has(i)||Gu.set(i,{});const l=Gu.get(i),p=JSON.stringify(n);return l[p]||(l[p]=new IntersectionObserver(Q3,{root:s,...n})),l[p]}function $3(s,n,i){const l=J3(n);return ep.set(s,i),l.observe(s),()=>{ep.delete(s),l.unobserve(s)}}const W3={some:0,all:1};class t5 extends $a{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var f;(f=this.stopObserver)==null||f.call(this);const{viewport:n={}}=this.node.getProps(),{root:i,margin:l,amount:p="some",once:m}=n,d={root:i?i.current:void 0,rootMargin:l,threshold:typeof p=="number"?p:W3[p]},h=b=>{const{isIntersecting:_}=b;if(this.isInView===_||(this.isInView=_,m&&!_&&this.hasEnteredView))return;_&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",_);const{onViewportEnter:k,onViewportLeave:y}=this.node.getProps(),G=_?k:y;G&&G(b)};this.stopObserver=$3(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:i}=this.node;["amount","margin","root"].some(e5(n,i))&&this.startObserver()}unmount(){var n;(n=this.stopObserver)==null||n.call(this),this.hasEnteredView=!1,this.isInView=!1}}function e5({viewport:s={}},{viewport:n={}}={}){return i=>s[i]!==n[i]}const a5={inView:{Feature:t5},tap:{Feature:F3},focus:{Feature:K3},hover:{Feature:X3}},s5={layout:{ProjectionNode:n0,MeasureLayout:f0}},n5={...A3,...a5,...Y3,...s5},ya=G3(n5,v3),_0=Y.createContext(void 0),o5={LATAM:{"nav.inicio":"Inicio","nav.novedades":"Novedades","nav.servicios":"Servicios","nav.evo":"Evo","nav.otros":"Otros códigos","nav.guia":"Guía","nav.tutoriales":"Tutoriales","nav.descargas":"Descargas","home.search_placeholder":"Nombre o código...","home.sort_az":"Nombre A-Z","home.sort_za":"Nombre Z-A","home.sort_code_asc":"Código Asc.","home.sort_code_desc":"Código Desc.","home.sort_hp_desc":"M. Mayor Vida","home.sort_atk_desc":"M. Mayor Ataque","home.sort_spd_desc":"M. Mayor Velocidad","home.show":"Mostrar","home.hide":"Ocultar","home.filtered":"Filtrados","home.total_base":"Base Total","services.title":"Servicios Exclusivos","services.subtitle":"Potencia tu cuenta con nuestros servicios especializados de Mutants: Genetic Gladiators.","services.buy":"Adquirir","services.payment_methods":"Métodos de Pago","services.contact_us":"Contáctanos","region.latam":"LATAM","region.usd":"USD","tip.label":"Tip:","tip.text":"Para asegurar la sincronización de datos, se recomienda acceder vía Facebook o limpiar cookies/caché del navegador (Modo Incógnito).","footer.renovated":"Versión renovada","footer.nav":"Navegación","footer.legal":"Información Legal","footer.terms":"Términos y Condiciones","footer.rights":"© 2026 Smith Luque. Todos los derechos reservados.","footer.desc":"Base de datos de códigos de Mutantes de MGG para Game Guardian. Aquí hay contenido para aprender y recursos para usar.","whatsapp.title":"Grupo de WhatsApp","whatsapp.desc":"Únete para ayuda, consejos y enseñanza dentro de la comunidad.","whatsapp.btn":"Unirme al grupo","stats.mutants":"Mutantes","stats.version":"Versión","home.main_database":"Base principal","home.main_desc":"Lista completa de mutantes con búsqueda rápida, filtros por genes y carga automática desde tu archivo de códigos.","home.featured_mutants":"Novedades Destacadas","home.explore_catalog":"Explorar Catálogo","home.reset_engine":"Reiniciar Motor","home.genetic_config":"Configuración Genética","home.search_engine":"Motor de Búsqueda","home.sort_filters":"Filtros de Orden","home.no_results":"No se encontraron mutantes con esos filtros.","home.hidden_results":"Resultados ocultos.","home.active":"Activos","home.total":"Total","gene.dominant":"Dominante","gene.active":"Activo","gene.inactive":"Inactivo","layout.by_author":"Por Smith Luque","layout.select_language":"SELECCIONAR IDIOMA","layout.active_support":"Grupo Activo","mutant.verified":"Verificado","mutant.extract_code":"Extraer Código","home.load_more_rem":"Cargar más ({rem} restantes)","layout.color_theme":"Color de Diseño","home.single_gene_only":"Solo 1 Gen (Monogénicos)","home.all_genes":"Todos los genes"},USD:{"nav.inicio":"Home","nav.novedades":"News","nav.servicios":"Services","nav.evo":"Evo Calc","nav.otros":"Other Codes","nav.guia":"Guide","nav.tutoriales":"Tutorials","nav.descargas":"Downloads","home.search_placeholder":"Name or code...","home.sort_az":"Name A-Z","home.sort_za":"Name Z-A","home.sort_code_asc":"Code Asc.","home.sort_code_desc":"Code Desc.","home.sort_hp_desc":"M. Highest HP","home.sort_atk_desc":"M. Highest ATK","home.sort_spd_desc":"M. Highest Speed","home.show":"Show","home.hide":"Hide","home.filtered":"Filtered","home.total_base":"Total Base","services.title":"Exclusive Services","services.subtitle":"Boost your account with our specialized Mutants: Genetic Gladiators services.","services.buy":"Purchase","services.payment_methods":"Payment Methods","services.contact_us":"Contact Us","region.latam":"LATAM","region.usd":"USD","tip.label":"Tip:","tip.text":"To ensure data synchronization, it is recommended to access via Facebook or clear browser cookies/cache (Incognito Mode).","footer.renovated":"Renewed Version","footer.nav":"Navigation","footer.legal":"Legal Information","footer.terms":"Terms & Conditions","footer.rights":"© 2026 Smith Luque. All rights reserved.","footer.desc":"MGG Mutant code database for Game Guardian. Here is content to learn and resources to use.","whatsapp.title":"WhatsApp Group","whatsapp.desc":"Join for help, tips, and teaching within the community.","whatsapp.btn":"Join the group","stats.mutants":"Mutants","stats.version":"Version","home.main_database":"Main Database","home.main_desc":"Full mutant list with fast search, gene filters, and automatic code loading.","home.featured_mutants":"Featured New Mutants","home.explore_catalog":"Explore Catalog","home.reset_engine":"Reset Engine","home.genetic_config":"Genetic Configuration","home.search_engine":"Search Engine","home.sort_filters":"Sort Filters","home.no_results":"No mutants found with those filters.","home.hidden_results":"Results hidden.","home.active":"Active","home.total":"Total","gene.dominant":"Dominant","gene.active":"Active","gene.inactive":"Inactive","layout.by_author":"By Smith Luque","layout.select_language":"SELECT LANGUAGE","layout.active_support":"Active Support","mutant.verified":"Verified","mutant.extract_code":"Extract Code","home.load_more_rem":"Load More ({rem} remaining)","layout.color_theme":"Design Color","home.single_gene_only":"Single Gene Only (Pure)","home.all_genes":"All Genes"},PT:{"nav.inicio":"Início","nav.novedades":"Novidades","nav.servicios":"Serviços","nav.evo":"Evo","nav.otros":"Outros códigos","nav.guia":"Guia","nav.tutoriales":"Tutoriais","nav.descargas":"Downloads","home.search_placeholder":"Nome ou código...","home.sort_az":"Nome A-Z","home.sort_za":"Nome Z-A","home.sort_code_asc":"Código Cresc.","home.sort_code_desc":"Código Decresc.","home.sort_hp_desc":"M. Maior Vida","home.sort_atk_desc":"M. Maior Ataque","home.sort_spd_desc":"M. Maior Velocidade","home.show":"Mostrar","home.hide":"Ocultar","home.filtered":"Filtrados","home.total_base":"Total Base","services.title":"Serviços Exclusivos","services.subtitle":"Melhore sua conta com nossos serviços especializados de Mutants: Genetic Gladiators.","services.buy":"Adquirir","services.payment_methods":"Métodos de Pagamento","services.contact_us":"Contate-nos","region.latam":"LATAM","region.usd":"USD","tip.label":"Dica:","tip.text":"Para garantir a sincronização de dados, recomenda-se acessar via Facebook ou limpar os cookies/cache do navegador (Modo Incógnito).","footer.renovated":"Versão Renovada","footer.nav":"Navegação","footer.legal":"Informação Legal","footer.terms":"Termos e Condições","footer.rights":"© 2026 Smith Luque. Todos os direitos reservados.","footer.desc":"Banco de dados de códigos de Mutants MGG para Game Guardian. Conteúdos para aprendizagem e recursos.","whatsapp.title":"Grupo de WhatsApp","whatsapp.desc":"Entre para obter ajuda, dicas e suporte na comunidade.","whatsapp.btn":"Entrar no grupo","stats.mutants":"Mutantes","stats.version":"Versão","home.main_database":"Base Principal","home.main_desc":"Lista completa de mutantes com busca rápida, filtros de genes e carregamento automático a partir do seu arquivo de códigos.","home.featured_mutants":"Novidades em Destaque","home.explore_catalog":"Explorar Catálogo","home.reset_engine":"Reiniciar Mecanismo","home.genetic_config":"Configuração Genética","home.search_engine":"Mecanismo de Busca","home.sort_filters":"Filtros de Ordenação","home.no_results":"Nenhum mutante encontrado com esses filtros.","home.hidden_results":"Resultados ocultos.","home.active":"Ativos","home.total":"Total","gene.dominant":"Dominante","gene.active":"Ativo","gene.inactive":"Inativo","layout.by_author":"Por Smith Luque","layout.select_language":"SELECIONAR IDIOMA","layout.active_support":"Grupo Ativo","mutant.verified":"Verificado","mutant.extract_code":"Extrair Código","home.load_more_rem":"Carregar mais ({rem} restantes)","layout.color_theme":"Cor do Design","home.single_gene_only":"Apenas 1 Gene (Monogênicos)","home.all_genes":"Todos os genes"},FR:{"nav.inicio":"Accueil","nav.novedades":"Actualités","nav.servicios":"Services","nav.evo":"Evos","nav.otros":"Autres codes","nav.guia":"Guide","nav.tutoriales":"Tutoriels","nav.descargas":"Téléchargements","home.search_placeholder":"Nom ou code...","home.sort_az":"Nom A-Z","home.sort_za":"Nom Z-A","home.sort_code_asc":"Code Asc.","home.sort_code_desc":"Code Desc.","home.sort_hp_desc":"M. Plus de vie","home.sort_atk_desc":"M. Plus d'attaque","home.sort_spd_desc":"M. Plus de vitesse","home.show":"Afficher","home.hide":"Masquer","home.filtered":"Filtrés","home.total_base":"Base totale","services.title":"Services exclusifs","services.subtitle":"Améliorez votre compte avec nos services spécialisés Mutants: Genetic Gladiators.","services.buy":"Acheter","services.payment_methods":"Modes de paiement","services.contact_us":"Contactez-nous","region.latam":"LATAM","region.usd":"USD","tip.label":"Conseil:","tip.text":"Pour garantir la synchronisation des données, il est recommandé de se connecter via Facebook ou d'effacer les cookies/cache du navigateur (Mode Incognito).","footer.renovated":"Version rénovée","footer.nav":"Navigation","footer.legal":"Informations légales","footer.terms":"Conditions générales","footer.rights":"© 2026 Smith Luque. Tous droits réservés.","footer.desc":"Base de données des codes Mutants MGG pour Game Guardian. Tutoriels d'apprentissage et ressources à utiliser.","whatsapp.title":"Groupe WhatsApp","whatsapp.desc":"Rejoignez-nous pour obtenir de l'aide, des conseils et échanger avec la communauté.","whatsapp.btn":"Rejoindre le groupe","stats.mutants":"Mutants","stats.version":"Version","home.main_database":"Base principale","home.main_desc":"Liste complète des mutants avec recherche rapide, filtres de gènes et chargement automatique depuis votre fichier de codes.","home.featured_mutants":"Nouveautés en Vedette","home.explore_catalog":"Explorer le Catalogue","home.reset_engine":"Réinitialiser le moteur","home.genetic_config":"Configuration Génétique","home.search_engine":"Moteur de Recherche","home.sort_filters":"Filtres de Tri","home.no_results":"Aucun mutant trouvé avec ces filtres.","home.hidden_results":"Résultats masqués.","home.active":"Actifs","home.total":"Total","gene.dominant":"Dominant","gene.active":"Actif","gene.inactive":"Inactif","layout.by_author":"Par Smith Luque","layout.select_language":"SÉLECTIONNER LA LANGUE","layout.active_support":"Groupe Actif","mutant.verified":"Vérifié","mutant.extract_code":"Extraire le Code","home.load_more_rem":"Charger plus ({rem} restants)","layout.color_theme":"Couleur du Design","home.single_gene_only":"Un seul gène (Monogénique)","home.all_genes":"Tous les gènes"},DE:{"nav.inicio":"Startseite","nav.novedades":"Neuigkeiten","nav.servicios":"Dienste","nav.evo":"Evo","nav.otros":"Andere Codes","nav.guia":"Leitfaden","nav.tutoriales":"Tutorials","nav.descargas":"Downloads","home.search_placeholder":"Name oder Code...","home.sort_az":"Name A-Z","home.sort_za":"Name Z-A","home.sort_code_asc":"Code Aufst.","home.sort_code_desc":"Code Abst.","home.sort_hp_desc":"M. Höchste LP","home.sort_atk_desc":"M. Höchster Angriff","home.sort_spd_desc":"M. Höchste Geschwindigkeit","home.show":"Anzeigen","home.hide":"Ausblenden","home.filtered":"Gefiltert","home.total_base":"Gesamtbasis","services.title":"Exklusive Dienste","services.subtitle":"Verbessern Sie Ihr Konto mit unseren spezialisierten Mutants: Genetic Gladiators-Diensten.","services.buy":"Erwerben","services.payment_methods":"Zahlungsarten","services.contact_us":"Kontakt","region.latam":"LATAM","region.usd":"USD","tip.label":"Tipp:","tip.text":"Um die Datensynchronisation sicherzustellen, wird empfohlen, sich über Facebook anzumelden oder Browser-Cookies/-Cache zu löschen (Inkognito-Modus).","footer.renovated":"Renovierte Version","footer.nav":"Navigation","footer.legal":"Rechtliche Hinweise","footer.terms":"AGB","footer.rights":"© 2026 Smith Luque. Alle Rechte vorbehalten.","footer.desc":"MGG Mutanten-Code-Datenbank für Game Guardian. Tutorials zum Lernen und Ressourcen zur Nutzung.","whatsapp.title":"WhatsApp-Gruppe","whatsapp.desc":"Treten Sie bei für Hilfe, Tipps und Austausch in der Gesellschaft.","whatsapp.btn":"Gruppe beitreten","stats.mutants":"Mutanten","stats.version":"Version","home.main_database":"Haupt-Datenbank","home.main_desc":"Vollständige Mutantenliste mit Schnellsuche, Genfiltern und automatischem Laden von Codes.","home.featured_mutants":"Hervorgehobene Neuigkeiten","home.explore_catalog":"Katalog erkunden","home.reset_engine":"Zuchtrechner zurücksetzen","home.genetic_config":"Genetische Konfiguration","home.search_engine":"Suchmaschine","home.sort_filters":"Sortierfilter","home.no_results":"Keine Mutanten mit diesen Filtern gefunden.","home.hidden_results":"Ergebnisse ausgeblendet.","home.active":"Aktiv","home.total":"Gesamt","gene.dominant":"Dominant","gene.active":"Aktiv","gene.inactive":"Inaktiv","layout.by_author":"Von Smith Luque","layout.select_language":"SPRACHE AUSWÄHLEN","layout.active_support":"Aktive Gruppe","mutant.verified":"Verifiziert","mutant.extract_code":"Code Extrahieren","home.load_more_rem":"Mehr laden ({rem} verbleibend)","layout.color_theme":"Design Farbe","home.single_gene_only":"Nur 1 Gen (Monogenisch)","home.all_genes":"Alle Gene"}},i5={blue:{brand:"#2563eb",brand2:"#3b82f6"},green:{brand:"#14532d",brand2:"#15803d"},red:{brand:"#dc2626",brand2:"#ef4444"},pink:{brand:"#db2777",brand2:"#ec4899"},purple:{brand:"#7c3aed",brand2:"#8b5cf6"},white:{brand:"#d1d5db",brand2:"#ffffff"}},l5=({children:s})=>{const[n,i]=Y.useState(()=>localStorage.getItem("user-color-theme")||"blue"),l=y=>{localStorage.setItem("user-color-theme",y),i(y)};Y.useEffect(()=>{const y=i5[n];y&&(document.documentElement.style.setProperty("--blue-brand",y.brand),document.documentElement.style.setProperty("--blue-brand-2",y.brand2))},[n]);const[p,m]=Y.useState(()=>{const y=localStorage.getItem("user-region"),G=localStorage.getItem("user-country-code"),M=!!localStorage.getItem("user-manual-force");let I=y||"LATAM";G==="PE"&&(I="LATAM");const A=G?d(G):1;return{region:I,countryCode:G||null,multiplier:A,isManual:M,detectedCountry:null}});Y.useEffect(()=>{const y=localStorage.getItem("user-region"),G=localStorage.getItem("user-country-code"),M=!!localStorage.getItem("user-manual-force");G==="PE"&&y==="USD"&&!M&&(localStorage.setItem("user-region","LATAM"),m(I=>({...I,region:"LATAM"})))},[]);function d(y){const G=y.toUpperCase(),M=wf.find(I=>I.id.toUpperCase()===G);if(M)return M.rate;for(const[I,A]of Object.entries(l2))if(A.includes(G))return parseFloat(I);return Fh.includes(G)?1.5:1}const h=async()=>{var y;try{const I=(y=(await(await fetch("https://ipapi.co/json/")).json()).country_code)==null?void 0:y.toUpperCase();if(!I)return;const A=Fh.includes(I),q=I==="PE",K=d(I),O=localStorage.getItem("user-region");let N=A?"USD":"LATAM";O&&(q&&O==="USD"&&!localStorage.getItem("user-manual-force")?N="LATAM":N=O),m(R=>({...R,region:N,countryCode:R.isManual?R.countryCode:I,detectedCountry:I,multiplier:R.isManual?R.multiplier:K}))}catch(G){console.error("IP Detection failed:",G)}};Y.useEffect(()=>{h()},[]);const f=y=>{localStorage.setItem("user-region",y),localStorage.setItem("user-manual-force","true"),m(G=>({...G,region:y,isManual:!0}))},b=y=>{const G=y.toUpperCase(),M=d(G),A=["PE","MX","AR","CL","CO","BO","VE","EC","UY","PY","PA","PR","CR","HN","SV","NI","GT","DO","ES"].includes(G)?"LATAM":"USD";localStorage.setItem("user-region",A),localStorage.setItem("user-country-code",G),localStorage.setItem("user-manual-force","true"),m(q=>({...q,region:A,countryCode:G,multiplier:M,isManual:!0}))},_=()=>{localStorage.removeItem("user-region"),localStorage.removeItem("user-country-code"),localStorage.removeItem("user-manual-force"),m(y=>({...y,isManual:!1})),h()},k=(y,G)=>{let M=o5[p.region][y]||y;return G&&Object.entries(G).forEach(([I,A])=>{M=M.replace(`{${I}}`,String(A))}),M};return u.jsx(_0.Provider,{value:{...p,colorTheme:n,setColorTheme:l,setRegion:f,setCountry:b,resetSelection:_,translate:k},children:s})},Ie=()=>{const s=Y.useContext(_0);if(s===void 0)throw new Error("useRegion must be used within a RegionProvider");return s},df={"/":Iu,"/novedades":Sf,"/servicios":yo,"/evo":n2,"/otros":ju,"/guia":Au,"/tutoriales":il,"/descargas":jf},nl={LATAM:{flag:"🇪🇸",label:"Español"},USD:{flag:"🇺🇸",label:"English"},PT:{flag:"🇵🇹",label:"Português"},FR:{flag:"🇫🇷",label:"Français"},DE:{flag:"🇩🇪",label:"Deutsch"}};function r5({children:s,currentPath:n,onNavigate:i,isOnline:l}){var N,R;const[p,m]=Y.useState(!1),[d,h]=Y.useState(!1),{region:f,setRegion:b,countryCode:_,setCountry:k,translate:y,colorTheme:G,setColorTheme:M}=Ie(),I=f!=="LATAM"&&f!=="PT"?"https://chat.whatsapp.com/IdBIvXWUPNjDLcPmBvkp1B":sp,A=B=>{i(B),m(!1),window.scrollTo({top:0,behavior:"smooth"})},q="text-blue-brand-2",K="from-blue-brand to-blue-brand-2";return u.jsxs("div",{className:"min-h-screen",children:[u.jsx("div",{className:"grid-overlay"}),u.jsxs("header",{className:"site-header sticky top-0 z-50 transition-all duration-300",children:[u.jsx("div",{className:"absolute inset-0 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.4)] bg-[#050a14]/60"}),u.jsxs("div",{className:"mx-auto px-4 lg:px-8 header-inner relative flex items-center justify-between min-h-[64px] max-w-[1400px]",children:[u.jsxs("div",{className:"brand flex items-center gap-3 cursor-pointer group",onClick:()=>A("/"),children:[u.jsxs("div",{className:"relative",children:[u.jsx("div",{className:"absolute inset-0 blur-md opacity-0 group-hover:opacity-40 transition-opacity bg-blue-brand"}),u.jsx("div",{className:`brand-logo w-9 h-9 md:w-10 md:h-10 relative flex items-center justify-center rounded-lg md:rounded-xl bg-gradient-to-br ${K} overflow-hidden shadow-lg group-hover:scale-105 transition-transform shrink-0 border border-white/20`,children:u.jsx("img",{src:"https://github.com/luqueSmith/MGG/blob/main/img/Logo_mgg.png?raw=true",alt:"Logo MGG",className:"w-full h-full object-cover"})})]}),u.jsxs("div",{className:"flex flex-col text-left",children:[u.jsx("strong",{className:`block text-white text-[13px] md:text-[15px] font-black tracking-tight uppercase leading-none mb-0.5 group-hover:${q} transition-colors`,children:"Mutodex MGG"}),u.jsx("span",{className:`block text-[7px] md:text-[9px] ${q} uppercase tracking-[0.25em] font-black opacity-80`,children:y("layout.by_author")})]})]}),u.jsx("nav",{className:"hidden",children:nu.map(B=>{const D=df[B.path]||Iu,X=n===B.path,F=B.key;return u.jsxs("button",{onClick:()=>A(B.path),className:`flex items-center gap-2 px-3 py-2 rounded-xl text-[11px] font-black uppercase tracking-wider border transition-all duration-300 relative group/btn ${X?"bg-blue-brand/20 border-blue-brand text-white shadow-[0_2px_15px_rgba(37,99,235,0.25)]":"text-slate-400 border-transparent hover:bg-white/5 hover:text-white"}`,children:[u.jsx(D,{size:14,className:`${X?"text-blue-brand-2 animate-pulse":"text-slate-400 group-hover/btn:scale-110 transition-transform"}`}),u.jsx("span",{children:y(F)})]},B.path)})}),u.jsxs("div",{className:"flex items-center gap-2 md:gap-3",children:[u.jsxs("div",{className:"hidden",children:[u.jsxs("span",{className:"text-[10px] text-slate-400 font-black uppercase tracking-wider mr-1",children:[y("layout.color_theme"),":"]}),["blue","green","red","pink","purple","white"].map(B=>{const D=G===B,X={blue:"bg-[#2563eb]",green:"bg-[#14532d]",red:"bg-[#dc2626]",pink:"bg-[#db2777]",purple:"bg-[#7c3aed]",white:"bg-white"};return u.jsx("button",{onClick:()=>M(B),title:B.toUpperCase(),className:`w-4.5 h-4.5 rounded-full ${X[B]} transition-all duration-300 relative shrink-0 cursor-pointer ${D?"scale-115 ring-2 ring-offset-2 ring-offset-[#050a14] ring-white shadow-lg":"opacity-60 hover:opacity-100 hover:scale-105"}`,children:D&&u.jsx("span",{className:"absolute inset-0 m-auto w-1 h-1 rounded-full bg-[#050a14]"})},B)})]}),u.jsxs("div",{className:"relative",children:[u.jsxs("button",{onClick:()=>h(!d),className:"flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-[10px] md:text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer",children:[u.jsx("span",{className:"text-sm md:text-base",children:((N=nl[f])==null?void 0:N.flag)||"🇪🇸"}),u.jsx("span",{className:"hidden sm:inline",children:((R=nl[f])==null?void 0:R.label)||"Español"}),u.jsx("span",{className:"text-slate-500 text-[8px] opacity-60",children:"▼"})]}),u.jsx(fu,{children:d&&u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>h(!1)}),u.jsxs(ya.div,{initial:{opacity:0,y:10,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.95},transition:{duration:.15},className:"absolute right-0 mt-2 w-48 rounded-2xl bg-[#091224] border border-white/10 shadow-2xl p-2 z-50 flex flex-col gap-1",children:[u.jsx("span",{className:"text-[8px] text-slate-500 uppercase font-black tracking-widest block px-3 py-1.5 border-b border-white/5 mb-1",children:y("layout.select_language")}),Object.keys(nl).map(B=>{const D=nl[B],X=f===B;return u.jsxs("button",{onClick:()=>{b(B),h(!1)},className:`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-left text-[11px] font-black uppercase transition-all cursor-pointer ${X?"bg-blue-brand/20 text-white border border-blue-brand/35 shadow-[0_2px_10px_rgba(37,99,235,0.2)]":"text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"}`,children:[u.jsx("span",{className:"text-sm leading-none",children:D.flag}),u.jsx("span",{children:D.label})]},B)})]})]})})]}),u.jsxs("button",{className:"w-11 h-11 flex flex-col items-center justify-center gap-1.5 border border-white/10 rounded-xl text-white bg-white/5 active:scale-95 transition-all relative overflow-hidden group",onClick:()=>m(!p),children:[u.jsx("div",{className:"absolute inset-0 bg-blue-brand opacity-0 group-active:opacity-10 transition-opacity"}),u.jsx(fu,{mode:"wait",children:p?u.jsx(ya.div,{initial:{rotate:-90,opacity:0,scale:.5},animate:{rotate:0,opacity:1,scale:1},exit:{rotate:90,opacity:0,scale:.5},children:u.jsx(Xh,{size:22,className:"text-blue-brand-2"})},"x"):u.jsxs(ya.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"flex flex-col gap-1.25 items-center justify-center",children:[u.jsx("span",{className:"w-5 h-0.5 bg-white rounded-full block"}),u.jsx("span",{className:"w-5 h-0.5 bg-blue-brand-2 rounded-full block"}),u.jsx("span",{className:"w-3 h-0.5 bg-white rounded-full block self-end"})]},"menu")})]})]})]})]}),u.jsx(fu,{children:p&&u.jsxs(u.Fragment,{children:[u.jsx(ya.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>m(!1),className:"fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm"}),u.jsxs(ya.nav,{initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{type:"spring",damping:25,stiffness:200},className:"fixed top-0 right-0 bottom-0 w-[280px] md:w-[340px] z-[60] bg-[#050a14] border-l border-white/10 flex flex-col shadow-2xl shadow-blue-brand/20",children:[u.jsx("div",{className:"absolute inset-0 opacity-5 pointer-events-none bg-grid-slate-900/[0.1] bg-[bottom_1px_center] [mask-image:linear-gradient(to_bottom,white,transparent)]"}),u.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-brand to-transparent opacity-50"}),u.jsxs("header",{className:"flex items-center justify-between p-4 border-b border-white/10 relative z-10 bg-black/40",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:"w-12 h-12 rounded-xl overflow-hidden border border-white/10 shadow-lg shadow-blue-brand/20 bg-[#0a1224] flex items-center justify-center shrink-0",children:u.jsx("img",{src:"https://github.com/luqueSmith/MGG/blob/main/img/Logo_mgg.png?raw=true",alt:"",className:"w-10 h-10 object-contain"})}),u.jsxs("div",{className:"flex flex-col gap-0.5",children:[u.jsx("strong",{className:"text-[13px] font-black uppercase text-white tracking-tight leading-none",children:"Sistema Mutodex"}),u.jsx("span",{className:"text-[8px] text-blue-brand-2 font-black uppercase tracking-[0.2em] opacity-80 leading-none mt-0.5",children:"v2.1.2 Build 550"})]})]}),u.jsx("button",{onClick:()=>m(!1),className:"w-10 h-10 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 text-white/50 hover:text-white transition-colors active:scale-90",children:u.jsx(Xh,{size:18})})]}),u.jsxs("div",{className:"flex-1 overflow-y-auto p-5 flex flex-col gap-3.5 relative z-10 scrollbar-none",children:[u.jsx("div",{className:"space-y-2.5 pb-2",children:nu.map((B,D)=>{const X=df[B.path]||Iu,F=n===B.path,Z=B.key;return u.jsxs(ya.button,{initial:{opacity:0,x:25},animate:{opacity:1,x:0},transition:{delay:D*.04,type:"spring",stiffness:150},onClick:()=>A(B.path),className:`flex items-center gap-4 w-full p-3.5 rounded-2xl text-[13px] md:text-sm font-black uppercase tracking-wider transition-all relative group border ${F?"bg-blue-brand/20 text-white border-blue-brand shadow-[0_4px_25px_rgba(37,99,235,0.25)] scale-[1.02]":"bg-white/[0.03] text-slate-300 border-white/5 hover:bg-white/8 hover:text-white hover:scale-[1.01]"}`,children:[u.jsx("div",{className:`p-2 rounded-xl transition-all ${F?"bg-blue-brand text-white shadow-md":"bg-white/5 group-hover:bg-white/10 group-hover:scale-105"}`,children:u.jsx(X,{size:18})}),u.jsx("span",{className:"relative z-10 font-extrabold tracking-wide",children:y(Z)}),F&&u.jsx("div",{className:"ml-auto w-1.5 h-4 bg-blue-brand-2 rounded-full shadow-[0_0_12px_#3b82f6]"})]},B.path)})}),u.jsxs("div",{className:"border-t border-white/10 pt-5 mt-3",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-3.5 px-2",children:[u.jsx(If,{size:13,className:"text-blue-brand-2 animate-pulse"}),u.jsx("span",{className:"text-[10px] text-slate-400 font-black uppercase tracking-[0.15em] leading-none",children:y("layout.color_theme")})]}),u.jsx("div",{className:"bg-white/[0.02] border border-white/5 rounded-2xl p-2 grid grid-cols-2 gap-2",children:["blue","green","red","pink","purple","white"].map(B=>{const D=G===B,F={blue:{label:"BLUE",dotBg:"bg-[#2563eb]",activeStyle:"border-[#2563eb]/50 text-blue-400 bg-[#2563eb]/10 shadow-[0_0_12px_rgba(37,99,235,0.35)] scale-[1.02]",inactiveStyle:"border-white/5 bg-white/[0.02] text-slate-400 hover:text-white",glowBg:"bg-[#2563eb]"},green:{label:"GREEN",dotBg:"bg-[#15803d]",activeStyle:"border-[#15803d]/60 text-green-400 bg-[#15803d]/15 shadow-[0_0_12px_rgba(21,128,61,0.4)] scale-[1.02]",inactiveStyle:"border-white/5 bg-white/[0.02] text-slate-400 hover:text-white",glowBg:"bg-[#15803d]"},red:{label:"RED",dotBg:"bg-[#dc2626]",activeStyle:"border-[#dc2626]/50 text-red-400 bg-[#dc2626]/10 shadow-[0_0_12px_rgba(220,38,38,0.4)] scale-[1.02]",inactiveStyle:"border-white/5 bg-white/[0.02] text-slate-400 hover:text-white",glowBg:"bg-[#dc2626]"},pink:{label:"PINK",dotBg:"bg-[#db2777]",activeStyle:"border-[#db2777]/50 text-pink-400 bg-[#db2777]/10 shadow-[0_0_12px_rgba(219,39,119,0.35)] scale-[1.02]",inactiveStyle:"border-white/5 bg-white/[0.02] text-slate-400 hover:text-white",glowBg:"bg-[#db2777]"},purple:{label:"PURPLE",dotBg:"bg-[#7c3aed]",activeStyle:"border-[#7c3aed]/50 text-purple-400 bg-[#7c3aed]/10 shadow-[0_0_12px_rgba(124,58,237,0.35)] scale-[1.02]",inactiveStyle:"border-white/5 bg-white/[0.02] text-slate-400 hover:text-white",glowBg:"bg-[#7c3aed]"},white:{label:"WHITE",dotBg:"bg-white",activeStyle:"border-white/30 text-white bg-white/10 shadow-[0_0_12px_rgba(255,255,255,0.25)] scale-[1.02]",inactiveStyle:"border-white/5 bg-white/[0.02] text-slate-400 hover:text-white",glowBg:"bg-white"}}[B];return u.jsxs("button",{onClick:()=>M(B),className:`flex items-center gap-2.5 w-full py-3 px-3 rounded-[14px] text-[10px] font-black uppercase tracking-wider transition-all duration-300 border active:scale-95 cursor-pointer relative group ${D?F.activeStyle:F.inactiveStyle}`,children:[u.jsxs("div",{className:"relative flex items-center justify-center shrink-0 w-4 h-4",children:[D&&u.jsx(ya.div,{layoutId:`dot-glow-${B}`,className:`absolute -inset-0.5 rounded-full blur-sm opacity-50 ${F.glowBg}`}),u.jsx("div",{className:`w-3.5 h-3.5 rounded-full ${F.dotBg} border border-white/15 relative z-10 transition-transform group-hover:scale-110 shadow-inner`})]}),u.jsx("span",{className:`font-black relative z-10 transition-colors ${D?"text-white":"text-slate-400 group-hover:text-white"}`,children:F.label}),D&&u.jsx("div",{className:"ml-auto flex items-center shrink-0",children:u.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${F.glowBg} animate-pulse relative`})})]},B)})})]}),u.jsx("div",{className:"border-t border-white/10 pt-5 mt-3",children:u.jsxs("a",{href:I,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-between p-4 rounded-2xl bg-[#25d366]/10 border border-[#25d366]/30 text-white hover:bg-[#25d366]/15 transition-all group scale-[1] active:scale-95",children:[u.jsxs("div",{className:"flex items-center gap-3.5",children:[u.jsx("div",{className:"p-2.5 rounded-xl bg-[#25d366] text-white shadow-[0_0_12px_rgba(37,211,102,0.35)] shrink-0",children:u.jsx(bl,{size:16})}),u.jsxs("div",{className:"flex flex-col text-left",children:[u.jsx("span",{className:"text-[11px] font-black uppercase text-[#25d366] tracking-wider leading-none mb-1",children:y("layout.active_support")}),u.jsx("span",{className:"text-[10px] text-slate-300 font-bold leading-tight",children:y("whatsapp.title")})]})]}),u.jsx("div",{className:"flex items-center justify-center w-6 h-6 rounded-full bg-[#25d366]/15 group-hover:translate-x-0.5 transition-transform shrink-0",children:u.jsx("span",{className:"text-[#25d366] text-xs font-black",children:"→"})})]})})]}),u.jsx("div",{className:"p-4 border-t border-white/10 relative z-10 bg-black/50",children:u.jsxs("div",{className:"flex flex-col gap-2",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("span",{className:"text-[7px] text-slate-600 uppercase font-black tracking-widest leading-none",children:"Powered by"}),u.jsx("strong",{className:"text-blue-brand-2 text-[9px] uppercase font-black tracking-wider leading-none",children:"Smith Luque"})]}),u.jsx("div",{className:"w-full h-0.5 bg-white/5 rounded-full overflow-hidden",children:u.jsx(ya.div,{initial:{width:0},animate:{width:"100%"},transition:{duration:1.5,ease:"easeInOut"},className:"h-full bg-blue-brand"})})]})})]})]})}),u.jsx("main",{className:"app-shell pb-20 pt-4 lg:pt-6",children:u.jsxs("div",{className:"container mx-auto px-4 max-w-[1180px]",children:[u.jsxs("section",{className:"panel mb-6 !p-0 overflow-hidden flex flex-col lg:flex-row items-stretch border transition-all duration-500 bg-blue-brand/5 border-blue-brand/20",children:[u.jsxs("div",{className:"flex items-center gap-6 px-5 py-3 border-b lg:border-b-0 lg:border-r border-white/5 bg-black/20 shrink-0",children:[u.jsxs("div",{className:"flex flex-col",children:[u.jsx("span",{className:`text-[10px] font-black uppercase tracking-widest leading-none mb-1 ${q}`,children:y("stats.mutants")}),u.jsx("strong",{className:"text-white text-sm font-black",children:"550+"})]}),u.jsxs("div",{className:"flex flex-col border-l border-white/10 pl-4",children:[u.jsx("span",{className:`text-[10px] font-black uppercase tracking-widest leading-none mb-1 ${q}`,children:y("stats.version")}),u.jsx("strong",{className:"text-white/80 text-sm font-black",children:"2.1.2"})]})]}),u.jsxs("div",{className:"flex-1 flex items-center gap-3 px-5 py-3 min-h-[50px]",children:[u.jsx("div",{className:"w-2 h-2 rounded-full animate-pulse shrink-0 bg-blue-brand mt-0.5 self-start md:self-center"}),u.jsxs("p",{className:"text-[10px] md:text-xs text-slate-300 font-bold m-0 italic leading-relaxed",children:[u.jsx("span",{className:`${q} uppercase mr-2 opacity-70 whitespace-nowrap`,children:y("tip.label")}),y("tip.text")]})]}),u.jsx("div",{className:"hidden xl:flex items-center gap-2 px-5 py-3 bg-black/10 shrink-0",children:u.jsxs("a",{href:I,target:"_blank",rel:"noopener noreferrer",className:"text-[10px] font-black uppercase flex items-center gap-2 hover:brightness-125 transition-all text-green-brand",children:[u.jsx("div",{className:"w-1.5 h-1.5 rounded-full animate-ping bg-green-brand"}),y("layout.active_support")]})})]}),s,u.jsx("section",{className:"panel mt-[18px] transition-all duration-500",children:u.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3.5",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"m-0 mb-1.5 text-lg font-bold",children:y("whatsapp.title")}),u.jsx("p",{className:"text-muted m-0 text-sm",children:y("whatsapp.desc")})]}),u.jsxs("a",{className:"btn px-6 btn-primary",target:"_blank",rel:"noopener noreferrer",href:I,children:[u.jsx(bl,{size:18}),u.jsx("span",{children:y("whatsapp.btn")})]})]})})]})}),u.jsx("footer",{className:"site-footer border-t border-line bg-black/35 py-11",children:u.jsxs("div",{className:"container mx-auto px-4 max-w-[1180px] grid lg:grid-cols-[1.2fr_1fr_0.8fr] gap-6",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"brand flex items-center gap-3.5 mb-3",children:[u.jsx("div",{className:`brand-logo w-11 h-11 flex items-center justify-center rounded-[14px] bg-gradient-to-br ${K} overflow-hidden shadow-lg`,children:u.jsx("img",{src:"https://github.com/luqueSmith/MGG/blob/main/img/Logo_mgg.png?raw=true",alt:"Logo MGG",className:"w-full h-full object-cover"})}),u.jsxs("div",{children:[u.jsx("strong",{className:"block text-white uppercase tracking-tight",children:"Mutodex MGG"}),u.jsx("span",{className:`block text-[11px] ${q} uppercase tracking-[0.22em] font-bold`,children:y("footer.renovated")})]})]}),u.jsx("p",{className:"text-muted text-sm",children:y("footer.desc")})]}),u.jsxs("div",{children:[u.jsx("div",{className:"kv-label mb-3",children:y("footer.nav")}),u.jsx("div",{className:"grid gap-2",children:nu.map(B=>u.jsx("button",{onClick:()=>A(B.path),className:`text-slate-300 hover:text-white text-sm text-left flex items-center gap-2 transition-colors ${n===B.path?q:""}`,children:y(B.key)},B.path))})]}),u.jsxs("div",{children:[u.jsx("div",{className:"kv-label mb-1.5",children:y("footer.legal")}),u.jsxs("div",{className:"flex flex-col gap-2",children:[u.jsx("button",{onClick:()=>A("/terminos"),className:"text-slate-400 hover:text-white text-xs text-left transition-colors",children:y("footer.terms")}),u.jsx("p",{className:"text-muted text-[11px] m-0 leading-relaxed mt-2",children:y("footer.rights")})]})]})]})})]})}const mf={a_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_a_01_platinum.png",a_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_a_02_platinum.png",aa_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_01_platinum.png",aa_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_02.png",ab_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_01_platinum.png",ab_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_02_platinum.png",ab_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_03_platinum.png",ac_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_01_platinum.png",ac_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_02_platinum.png",ac_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_03_platinum.png",ad_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_01_platinum.png",ad_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_02_platinum.png",ae_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_01_platinum.png",ae_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_02_silver.png",af_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_01_platinum.png",af_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_02_silver.png",b_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_b_01_platinum.png",b_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_b_02_platinum.png",b_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_b_03.png",ba_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_01_platinum.png",ba_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_02_platinum.png",bb_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_01_platinum.png",bb_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_02_platinum.png",bc_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_01_platinum.png",bc_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_02_platinum.png",bd_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_01_platinum.png",bd_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_02_silver.png",be_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_01_platinum.png",be_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_02_silver.png",be_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_03_platinum.png",bf_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_01_platinum.png",bf_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_02_platinum.png",c_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_c_01_platinum.png",c_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_c_02_platinum.png",ca_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_01_platinum.png",ca_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_02_platinum.png",ca_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_03_platinum.png",cb_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_01_platinum.png",cb_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_02_platinum.png",cc_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_01_platinum.png",cc_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_02_platinum.png",cd_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_01_platinum.png",cd_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_02_silver.png",cd_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_03_platinum.png",ce_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_01_platinum.png",ce_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_03_platinum.png",cf_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_01_platinum.png",cf_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_02_platinum.png",d_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_d_01_platinum.png",da_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_01_platinum.png",da_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_02_platinum.png",db_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_01_platinum.png",db_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_02_platinum.png",db_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_03_platinum.png",dc_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_01_platinum.png",dc_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_02_silver.png",dc_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_03_gothic.png",dd_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_01_platinum.png",dd_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_02_platinum.png",de_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_01_platinum.png",de_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_02_platinum.png",df_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_01_platinum.png",df_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_02_platinum.png",e_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_e_01_platinum.png",ea_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_01_platinum.png",ea_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_02_platinum.png",ea_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_03_silver.png",eb_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_01_platinum.png",eb_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_02_platinum.png",eb_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_03_platinum.png",ec_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_01_platinum.png",ec_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_02_platinum.png",ed_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_01_platinum.png",ed_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_02_platinum.png",ee_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_01_platinum.png",ee_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_02_platinum.png",ee_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_03_platinum.png",ef_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_01_platinum.png",ef_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_02_heroes.png",ef_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_03_silver.png",f_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_f_01_platinum.png",f_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_f_03.png",fa_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_01_platinum.png",fa_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_02_platinum.png",fb_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_01_platinum.png",fb_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_02_silver.png",fb_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_03_platinum.png",fc_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_01_platinum.png",fc_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_02.png",fd_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_01_platinum.png",fd_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_02_platinum.png",fd_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_03_japan.png",fe_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_01_platinum.png",fe_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_02_platinum.png",ff_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_01_platinum.png",ff_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_02_platinum.png",fc_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_03.png",cb_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_03_platinum.png",ba_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_03_platinum.png",ff_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_03_platinum.png",bb_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_03_platinum.png",de_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_03_platinum.png",da_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_03_platinum.png",bf_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_03_silver.png",cd_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_04_platinum.png",dc_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_04_platinum.png",aa_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_03_platinum.png",d_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_d_03.png",ec_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_03_platinum.png",bc_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_03_platinum.png",ad_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_03_silver.png",af_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_04_platinum.png",ae_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_03_platinum.png",fb_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_04_platinum.png",bd_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_03_platinum.png",cf_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_04_platinum.png",ce_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_02_silver.png",dd_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_03_platinum.png",cc_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_03_platinum.png",df_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_03_platinum.png",ed_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_03_platinum.png",af_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_03_platinum.png",bc_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_04.png",db_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_04.png",fa_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_03_platinum.png",fe_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_04_platinum.png",fe_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_03_platinum.png",a_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_a_03.png",cf_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_03_platinum.png",de_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_04_platinum.png",ba_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_04_platinum.png",cb_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_04_platinum.png",fd_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_04_platinum.png",fc_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_04.png",fa_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_04.png",bf_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_04_starwars.png",fe_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_05_silver.png",ca_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_04_platinum.png",df_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_04_platinum.png",ed_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_04.png",ac_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_04.png",eb_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_04_platinum.png",de_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_05_platinum.png",bf_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_05_platinum.png",c_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_c_03.png",ec_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_04.png",ef_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_04_platinum.png",ff_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_04_platinum.png",ad_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_04_platinum.png",cc_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_04.png",ab_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_04_platinum.png",ce_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_04_platinum.png",bd_99:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_99_platinum.png",bb_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_04_platinum.png",aa_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_04_platinum.png",ae_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_04.png",cb_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_05.png",af_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_05.png",da_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_04_platinum.png",bd_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_04_platinum.png",fc_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_05.png",ee_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_04_platinum.png",dd_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_04_platinum.png",be_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_04_platinum.png",ea_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_04_platinum.png",ef_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_05_platinum.png",df_99:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_99.png",fb_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_05_platinum.png",eb_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_05_platinum.png",ca_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_05_platinum.png",ac_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_05_platinum.png",ab_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_05_gachaboss.png",aa_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_05_platinum.png",fa_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_05_platinum.png",fe_99:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_99_platinum.png",ce_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_05_villains.png",e_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_e_03_platinum.png",cc_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_05_platinum.png",da_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_05_platinum.png",df_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_05_platinum.png",db_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_05.png",bc_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_05_platinum.png",dc_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_05_platinum.png",ed_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_05_platinum.png",ec_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_05_platinum.png",fd_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_05_platinum.png",ec_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_06_olympians.png",ff_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_05_platinum.png",be_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_05_platinum.png",ad_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_05_platinum.png",bd_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_05_platinum.png",dd_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_05_platinum.png",da_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_06_platinum.png",cf_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_05_platinum.png",bb_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_05_platinum.png",cf_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_06.png",cd_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_05.png",ea_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_05_platinum.png",af_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_06.png",ae_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_05_platinum.png",ee_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_05_platinum.png",ba_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_05_platinum.png",ce_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_06_platinum.png",fb_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_06_platinum.png",bc_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_06_platinum.png",fd_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_06_platinum.png",dc_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_06_platinum.png",ed_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_06_platinum.png",fa_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_06_movies.png",bf_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_06_platinum.png",ad_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_06_platinum.png",cd_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_06_platinum.png",db_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_06_platinum.png",ac_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_06_platinum.png",fe_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_06_platinum.png",eb_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_06_elements.png",ea_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_06_platinum.png",be_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_06_platinum.png",b_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_b_04.png",ab_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_06_platinum.png",ef_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_06_platinum.png",fc_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_06_platinum.png",df_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_06.png",cb_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_06.png",dd_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_06_platinum.png",de_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_06.png",ca_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_06_platinum.png",ff_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_06_platinum.png",bd_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_06_platinum.png",af_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_07_platinum.png",cf_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_07.png",ae_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_06_platinum.png",ba_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_06_platinum.png",ec_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_07_platinum.png",ed_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_07_platinum.png",bd_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_07_soldiers.png",db_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_07_platinum.png",da_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_07_platinum.png",fe_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_07_platinum.png",ab_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_07.png",df_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_07_platinum.png",bf_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_07_platinum.png",ee_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_06_platinum.png",aa_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_06_platinum.png",ce_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_07_platinum.png",cc_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_06_platinum.png",cc_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_07.png",fc_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_07_platinum.png",ba_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_07_platinum.png",f_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_f_04.png",fd_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_07_platinum.png",ef_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_07_platinum.png",ad_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_07_platinum.png",ac_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_07_lucha.png",ca_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_07_platinum.png",fb_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_07_platinum.png",fa_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_07_platinum.png",de_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_07_platinum.png",cb_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_07_platinum.png",bc_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_07_platinum.png",cd_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_07.png",ea_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_07_platinum.png",ee_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_07_platinum.png",be_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_07_platinum.png",dd_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_07_platinum.png",eb_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_07_platinum.png",ec_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_08_platinum.png",cf_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_08_platinum.png",bc_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_08_platinum.png",ac_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_08_platinum.png",dd_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_08_platinum.png",de_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_08_platinum.png",fc_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_08_platinum.png",ae_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_07_platinum.png",db_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_08_platinum.png",af_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_08_platinum.png",fa_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_08_platinum.png",ff_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_07.png",bb_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_06_platinum.png",ef_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_08.png",da_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_08_platinum.png",cb_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_08_platinum.png",ea_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_08.png",fb_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_08_platinum.png",bf_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_08_platinum.png",ad_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_08_platinum.png",fc_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_09_fantasy.png",ce_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_08_platinum.png",ba_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_08_platinum.png",ae_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_08_platinum.png",bd_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_08_platinum.png",fa_99:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_99.png",eb_99:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_99.png",cd_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_08_platinum.png",dc_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_07.png",ed_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_08_platinum.png",fd_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_08_platinum.png",ca_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_08_platinum.png",df_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_08_platinum.png",eb_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_08.png",cf_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_09_platinum.png",ad_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_09_platinum.png",dc_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_08_platinum.png",bb_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_07_platinum.png",aa_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_07_platinum.png",ac_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_09_platinum.png",bd_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_09_platinum.png",ff_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_08_platinum.png",ee_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_08_platinum.png",be_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_08_platinum.png",aa_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_08_platinum.png",ca_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_09.png",eb_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_09_platinum.png",df_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_09_platinum.png",fe_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_08_platinum.png",bb_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_08_platinum.png",ec_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_09_platinum.png",de_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_09_platinum.png",ab_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_08_platinum.png",be_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_09_platinum.png",ca_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_10_platinum.png",ea_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_09_platinum.png",cc_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_08_platinum.png",bf_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_09.png",cc_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_09_platinum.png",ae_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_09_platinum.png",cd_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_09_platinum.png",da_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_09_music.png",fd_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_09_platinum.png",af_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_09_platinum.png",a_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_a_05_platinum.png",ea_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_10.png",dd_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_09_platinum.png",fd_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_10.png",ab_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_09.png",ac_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_10_platinum.png",df_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_10_platinum.png",bc_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_09_platinum.png",af_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_10_platinum.png",bb_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_09_platinum.png",de_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_10_platinum.png",cb_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_09_platinum.png",db_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_09_platinum.png",dc_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_09_platinum.png",fe_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_09_platinum.png",ba_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_09_platinum.png",bf_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_10_western.png",fa_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_09_platinum.png",aa_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_09_platinum.png",cf_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_10_platinum.png",ce_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_09_platinum.png",ef_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_09_platinum.png",da_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_10_platinum.png",ee_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_09_platinum.png",ff_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_09_platinum.png",fb_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_10_platinum.png",ed_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_09_platinum.png",fb_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_09_platinum.png",ef_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_10_platinum.png",ed_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_10_platinum.png",cb_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_10_platinum.png",ae_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_10.png",dc_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_10_platinum.png",bd_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_10_platinum.png",fe_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_10_platinum.png",fa_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_10_platinum.png",cd_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_10_platinum.png",ad_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_10_platinum.png",fc_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_10_platinum.png",bb_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_10_platinum.png",af_99:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_99_platinum.png",bc_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_10_platinum.png",ce_99:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_99.png",dd_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_10_platinum.png",aa_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_10_platinum.png",ba_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_10_platinum.png",cc_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_10_platinum.png",db_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_10_platinum.png",ec_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_10_platinum.png",eb_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_10_platinum.png",ab_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_10_platinum.png",be_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_10_platinum.png",ce_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_10.png",eb_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_11_platinum.png",ff_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_10_platinum.png",db_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_11.png",fc_99:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_99_platinum.png",ee_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_10_platinum.png",ac_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_11_platinum.png",bd_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_11_platinum.png",fa_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_11_platinum.png",af_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_11.png",ce_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_11_platinum.png",ca_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_11_beach.png",cd_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_11_platinum.png",fb_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_11_platinum.png",da_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_11_platinum.png",ed_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_11_platinum.png",aa_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_11_platinum.png",bb_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_11.png",ef_99:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_99.png",fd_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_11_platinum.png",cb_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_11_platinum.png",bf_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_11.png",de_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_11_platinum.png",ae_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_11_platinum.png",ec_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_11.png",dc_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_11_platinum.png",ba_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_11_platinum.png",ff_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_11_platinum.png",df_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_11.png",b_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_b_05_platinum.png",ee_99:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_99.png",fc_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_11_platinum.png",cf_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_11.png",cc_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_11.png",c_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_c_05_platinum.png",fb_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_12_platinum.png",ad_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_11.png",dd_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_11_platinum.png",be_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_11_platinum.png",fe_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_11_platinum.png",ac_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_12_platinum.png",ea_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_11.png",ca_99:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_99.png",ab_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_11_platinum.png",ee_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_11_platinum.png",ef_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_12_platinum.png",bc_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_11_platinum.png",bb_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_12.png",de_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_12_platinum.png",e_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_e_12_platinum.png",d_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_d_12_platinum.png",af_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_12.png",df_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_12_vegetal.png",cf_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_12_platinum.png",cb_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_12_platinum.png",fa_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_12_platinum.png",dd_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_12.png",ef_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_11_platinum.png",fc_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_12.png",ff_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_12_platinum.png",ed_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_12_platinum.png",ca_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_12_platinum.png",db_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_12.png",ec_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_12_platinum.png",cd_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_12.png",ed_99:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_99.png",eb_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_12_platinum.png",fd_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_12_platinum.png",f_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_f_13_platinum.png",ab_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_12_platinum.png",bc_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_12.png",aa_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_12_platinum.png",fe_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_12.png",bf_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_12_platinum.png",c_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_c_13_platinum.png",ae_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_12_platinum.png",ce_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_12.png",be_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_12_platinum.png",fe_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_13.png",da_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_12_platinum.png",dc_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_12.png",f_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_f_12_platinum.png",ad_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_12_platinum.png",b_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_b_12_platinum.png",d_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_d_13_platinum.png",bd_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_12_platinum.png",aa_99:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_99.png",cf_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_13_platinum.png",ea_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_12_platinum.png",b_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_b_13_platinum.png",bf_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_13.png",dd_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_13_platinum.png",ee_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_12.png",ad_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_13_platinum.png",fa_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_13.png",da_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_13_platinum.png",ca_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_13.png",bc_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_13_platinum.png",de_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_13.png",ba_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_12_platinum.png",a_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_a_13_platinum.png",ef_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_13_platinum.png",cb_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_13_platinum.png",eb_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_13.png",ab_99:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_99.png",ae_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_13_platinum.png",cf_99:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_99.png",bb_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_13_platinum.png",fd_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_13.png",cc_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_12_platinum.png",bc_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_14.png",e_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_e_13_platinum.png",dc_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_13_platinum.png",ac_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_13.png",fe_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_14_platinum.png",fc_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_13_platinum.png",ef_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_14.png",cc_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_13_platinum.png",ff_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_13_platinum.png",ae_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_14.png",aa_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_13_platinum.png",cd_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_13_platinum.png",cb_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_14_platinum.png",ba_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_13_platinum.png",dc_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_14.png",df_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_13_platinum.png",ca_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_14_olympics.png",db_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_13_platinum.png",ae_99:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_99.png",ac_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_14_platinum.png",af_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_13_platinum.png",db_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_14.png",ec_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_13_platinum.png",ce_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_13_platinum.png",ea_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_13_platinum.png",ea_99:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_99.png",af_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_14_platinum.png",ff_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_14.png",dd_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_14_platinum.png",fd_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_14.png",fb_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_13_platinum.png",ab_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_13_platinum.png",ed_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_13_platinum.png",bd_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_14_platinum.png",da_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_14.png",c_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_c_14_platinum.png",ed_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_14_platinum.png",de_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_14.png",a_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_a_14_platinum.png",ee_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_13_platinum.png",ff_99:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_99.png",f_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_f_14_platinum.png",fb_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_14.png",bd_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_13_platinum.png",cd_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_14_platinum.png",cc_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_14_chess.png",b_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_b_14_platinum.png",ab_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_14.png",be_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_13_platinum.png",ea_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_14_platinum.png",ba_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_14.png",cf_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_14_platinum.png",de_15:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_15.png",ad_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_14_platinum.png",ab_15:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_15.png",e_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_e_14_platinum.png",bf_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_14_platinum.png",be_15:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_15.png",ce_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_14_platinum.png",ea_15:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_15_platinum.png",d_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_d_14_platinum.png",dd_15:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_15.png"};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const ol={vida:"https://pokradex.org/MutantsGG/assets/icon_hp.png",velocidad:"https://pokradex.org/MutantsGG/assets/icon_speed.png"},qo=[];qo.push(`1. Robot
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
   Ataque 1: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
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

115. Oso Presuntuoso
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
   Habilidad: 700 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png`);qo.push(`141. Incubus
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_05_silver.png
   Vida: 11,825
   Velocidad: 4.17
   Ataque 1: 5882 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5882 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,471 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

142. Chupa Chupas
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_04.png
   Vida: 14,013
   Velocidad: 3.45
   Ataque 1: 7262 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 7262 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 2,179 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

143. Capitán Planeta
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_05.png
   Vida: 12,050
   Velocidad: 4.17
   Ataque 1: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 1,620 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

144. Gumball Machine
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_04_gumball.png
   Vida: 12,444
   Velocidad: 4.55
   Ataque 1: 1729 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 1729 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 1,556 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

145. Cernunnos
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_05.png
   Vida: 14,846
   Velocidad: 3.70
   Ataque 1: 5712 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5712 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,714 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

146. Klock
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_06_silver.png
   Vida: 12,498
   Velocidad: 3.85
   Ataque 1: 6222 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 6222 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,556 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

147. Chimpancé Cósmico
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_04_platinum.png
   Vida: 13,036
   Velocidad: 3.45
   Ataque 1: 6963 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 6963 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,437 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

148. Mamut de Guerra
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_04.png
   Vida: 14,416
   Velocidad: 3.33
   Ataque 1: 7650 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 7650 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 3,443 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

149. Ciberpapá
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_04_platinum.png
   Vida: 11,888
   Velocidad: 4.17
   Ataque 1: 8250 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 8250 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 2,475 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

150. Santa Claus
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_05_xmas.png
   Vida: 14,846
   Velocidad: 3.70
   Ataque 1: 5807 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 5807 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 2,904 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

151. Krampus
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_05_xmas.png
   Vida: 10,724
   Velocidad: 4.76
   Ataque 1: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,112 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

152. Duendecilio
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_05_xmas.png
   Vida: 11,351
   Velocidad: 4.76
   Ataque 1: 4753 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 4753 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 1,426 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

153. G.I. Joe
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_05_platinum.png
   Vida: 11,648
   Velocidad: 5.26
   Ataque 1: 4481 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 4481 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,568 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

154. Lincoln
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_07_silver.png
   Vida: 12,084
   Velocidad: 4.00
   Ataque 1: 5610 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5610 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,403 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

155. Buck Maurice Débil
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_02_weak_platinum.png
   Vida: 2,750
   Velocidad: 3.33
   Ataque 1: 1700 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 955 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -383 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

156. Tutankaka
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_04_mumy.png
   Vida: 12,532
   Velocidad: 3.70
   Ataque 1: 5693 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 5693 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 2,562 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

157. Jinete del Apocalipsis
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_05_silver.png
   Vida: 12,940
   Velocidad: 3.70
   Ataque 1: 5797 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5797 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,449 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

158. Dark Lord
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_04_vader.png
   Vida: 13,036
   Velocidad: 3.45
   Ataque 1: 7140 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 4114 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,785 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

159. Sir Lancelot
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_05_silver.png
   Vida: 12,050
   Velocidad: 4.17
   Ataque 1: 5293 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5293 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,323 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

160. Desgarrador
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_05_silver.png
   Vida: 14,846
   Velocidad: 3.70
   Ataque 1: 5494 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5494 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,472 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

161. Darwin
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_04_silver.png
   Vida: 12,104
   Velocidad: 4.17
   Ataque 1: 5249 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5249 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,312 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

162. Señor de la Guerra
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_05_platinum.png
   Vida: 10,770
   Velocidad: 5.26
   Ataque 1: 3950 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 3950 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,580 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

163. Sincera
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_04_silver.png
   Vida: 12,621
   Velocidad: 3.85
   Ataque 1: 5971 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 5971 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 2,388 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

164. Leñador Loco
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_05_silver.png
   Vida: 12,648
   Velocidad: 3.70
   Ataque 1: 6528 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 6528 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,958 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

165. Ojo del Halcón
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_05.png
   Vida: 8,335
   Velocidad: 8.70
   Ataque 1: 2983 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 2983 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 895 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

166. Capitán de la Cripta
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_06_silver.png
   Vida: 12,104
   Velocidad: 4.17
   Ataque 1: 5293 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 5293 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 1,323 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

167. Sacerdotisa de la Cripta
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_06.png
   Vida: 9,090
   Velocidad: 6.25
   Ataque 1: 3180 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3180 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -795 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

168. Alquimista
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_06_silver.png
   Vida: 12,648
   Velocidad: 3.70
   Ataque 1: 6528 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 6528 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 2,611 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

169. Ninja de la Cripta
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_08_silver.png
   Vida: 11,888
   Velocidad: 4.17
   Ataque 1: 5882 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5882 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,471 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

170. Cazador de Cabezas
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_05_silver.png
   Vida: 12,940
   Velocidad: 3.70
   Ataque 1: 5797 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5797 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,739 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

171. El Padrino
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_06.png
   Vida: 11,186
   Velocidad: 4.00
   Ataque 1: 5471 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5471 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,368 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

172. Monstruo del Pantano
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_05_silver.png
   Vida: 12,104
   Velocidad: 4.17
   Ataque 1: 5249 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5249 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,312 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

173. Jinete de la Cripta
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_06_silver.png
   Vida: 12,104
   Velocidad: 4.17
   Ataque 1: 5249 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 5249 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,312 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

174. Centurión de la Cripta
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_06_silver.png
   Vida: 12,940
   Velocidad: 3.70
   Ataque 1: 5797 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5797 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,449 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

175. Monje Shaolin
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_09_martial.png
   Vida: 9,731
   Velocidad: 5.00
   Ataque 1: 5712 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5712 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,714 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

176. Karateca
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_07_martial.png
   Vida: 10,724
   Velocidad: 4.76
   Ataque 1: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,334 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

177. Sumo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_07_martial.png
   Vida: 15,926
   Velocidad: 3.33
   Ataque 1: 7218 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 7218 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,516 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

178. Golem de Arcilla
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_06.png
   Vida: 9,926
   Velocidad: 4.35
   Ataque 1: 4536 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 4536 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,134 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

179. Cyber Chimp
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_07.png
   Vida: 12,648
   Velocidad: 3.70
   Ataque 1: 6528 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 6528 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,958 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

180. Buck Maurice Chino
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_02_china.png
   Vida: 15,926
   Velocidad: 3.33
   Ataque 1: 8250 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5249 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,811 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

181. Tengu
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_07_japan.png
   Vida: 10,724
   Velocidad: 4.76
   Ataque 1: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,556 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

182. Sirena Japonesa
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_07_japan.png
   Vida: 10,812
   Velocidad: 4.55
   Ataque 1: 4627 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 4627 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 1,288 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

183. Ninja de Fuego
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_10_japan.png
   Vida: 11,888
   Velocidad: 4.17
   Ataque 1: 5882 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5882 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,765 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

184. Samurái
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_10_japan.png
   Vida: 12,050
   Velocidad: 4.17
   Ataque 1: 5293 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5293 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,323 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

185. Orochi
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_07_japan.png
   Vida: 11,825
   Velocidad: 4.17
   Ataque 1: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,350 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

186. Dragón Dorado
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_08_japan.png
   Vida: 12,940
   Velocidad: 3.70
   Ataque 1: 5797 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5797 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,739 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

187. Invasor Extraterrestre
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_08_retro.png
   Vida: 12,104
   Velocidad: 4.17
   Ataque 1: 5249 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 5249 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,312 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

188. Cernunnos de Otoño
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_05_autumn.png
   Vida: 14,846
   Velocidad: 3.70
   Ataque 1: 5712 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5712 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -2,000 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

189. Buck Maurice Americano
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_02_american.png
   Vida: 15,926
   Velocidad: 3.33
   Ataque 1: 8250 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5249 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,811 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

190. Sir Lancelot de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_05_gold.png
   Vida: 12,050
   Velocidad: 4.17
   Ataque 1: 5293 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5293 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,588 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

191. C-Zanne de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_04_gold.png
   Vida: 13,036
   Velocidad: 3.45
   Ataque 1: 8500 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 8500 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -3,612 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

192. Behemoth de Lava
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_02_lava.png
   Vida: 11,920
   Velocidad: 3.57
   Ataque 1: 6351 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 6351 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 2,223 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

193. Behemoth de Hielo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_02_ice.png
   Vida: 11,920
   Velocidad: 3.57
   Ataque 1: 6351 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 6351 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 2,223 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

194. Alquimista de Hielo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_06_ice.png
   Vida: 12,648
   Velocidad: 3.70
   Ataque 1: 6528 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 6528 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 3,262 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

195. Dragón de Hielo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_08_ice.png
   Vida: 12,940
   Velocidad: 3.70
   Ataque 1: 5797 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5797 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,029 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

196. Horus de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_02_gold.png
   Vida: 8,548
   Velocidad: 8.70
   Ataque 1: 3835 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3835 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 1,342 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

197. Gandolphus de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_01_gold.png
   Vida: 7,732
   Velocidad: 9.09
   Ataque 1: 2564 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 2564 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,282 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

198. Valkiria de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_01_gold.png
   Vida: 10,581
   Velocidad: 5.00
   Ataque 1: 4250 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 4250 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -2,550 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

199. Medusa de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_01_gold.png
   Vida: 10,248
   Velocidad: 4.55
   Ataque 1: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,112 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

200. Virgon de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_02_gold.png
   Vida: 8,535
   Velocidad: 10.53
   Ataque 1: 2577 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 2577 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 2,165 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

201. Monocerus de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_02_gold.png
   Vida: 10,724
   Velocidad: 5.26
   Ataque 1: 4291 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 4291 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 2,263 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

202. Lord Blood de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_01_gold.png
   Vida: 14,627
   Velocidad: 4.17
   Ataque 1: 6215 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 3570 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 4,124 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

203. Cancernia de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_02_gold.png
   Vida: 10,825
   Velocidad: 4.76
   Ataque 1: 5233 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 5233 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 4,186 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

204. Sagitauro de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_02_gold.png
   Vida: 8,199
   Velocidad: 5.00
   Ataque 1: 5879 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5879 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -2,469 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

205. Cáprika de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_02_gold.png
   Vida: 8,120
   Velocidad: 6.67
   Ataque 1: 4663 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 4663 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 3,359 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

206. Leohart de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_02_gold.png
   Vida: 9,525
   Velocidad: 4.17
   Ataque 1: 5808 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5808 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -3,261 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

207. Líbraro de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_02_gold.png
   Vida: 11,253
   Velocidad: 9.09
   Ataque 1: 2714 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 2714 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 1,304 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

208. Cernunnos de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_05_gold.png
   Vida: 14,846
   Velocidad: 3.70
   Ataque 1: 5712 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5712 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -2,000 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

209. G.I. Joe de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_05_gold.png
   Vida: 11,648
   Velocidad: 5.26
   Ataque 1: 4481 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 4481 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,880 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

210. Chimpancé Cósmico de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_04_gold.png
   Vida: 13,036
   Velocidad: 3.45
   Ataque 1: 6963 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 6963 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,924 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

211. Desgarrador de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_05_gold.png
   Vida: 14,846
   Velocidad: 3.70
   Ataque 1: 5494 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5494 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,965 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

212. Krampus de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_05_gold.png
   Vida: 10,724
   Velocidad: 4.76
   Ataque 1: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,556 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

213. Duendecilio de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_05_gold.png
   Vida: 11,351
   Velocidad: 4.76
   Ataque 1: 4753 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 4753 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 1,710 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

214. Dark Lord de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_04_gold.png
   Vida: 13,036
   Velocidad: 3.45
   Ataque 1: 7140 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 4114 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -2,142 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

215. Capitán Planeta de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_05_gold.png
   Vida: 12,050
   Velocidad: 4.17
   Ataque 1: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 1,944 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

216. Tutankaka de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_04_gold.png
   Vida: 12,532
   Velocidad: 3.70
   Ataque 1: 5693 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 5693 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 3,074 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

217. Jinete del Apocalipsis de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_05_gold.png
   Vida: 12,940
   Velocidad: 3.70
   Ataque 1: 5797 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5797 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,739 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

218. Maiko
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_06.png
   Vida: 8,834
   Velocidad: 6.25
   Ataque 1: 3009 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3009 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -752 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

219. Hanzaki
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_05_japan.png
   Vida: 11,888
   Velocidad: 4.17
   Ataque 1: 5249 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5249 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,312 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

220. Jinete del Viento
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_08.png
   Vida: 8,313
   Velocidad: 8.33
   Ataque 1: 2714 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 2714 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -679 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

221. Gato de la Suerte
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_11_japan.png
   Vida: 12,621
   Velocidad: 3.85
   Ataque 1: 5971 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5971 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,493 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

222. Oni de Hielo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_06.png
   Vida: 12,648
   Velocidad: 3.70
   Ataque 1: 6528 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 6528 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,958 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

223. Geisha lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_f_02_japan.png
   Vida: 14,096
   Velocidad: 3.45
   Ataque 1: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: -2,211 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

224. Kabuki
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_09_japan.png
   Vida: 10,098
   Velocidad: 5.88
   Ataque 1: 3271 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3271 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -818 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

225. Kappa
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_08.png
   Vida: 9,486
   Velocidad: 5.26
   Ataque 1: 3754 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 3754 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -938 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

226. Kitsune
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_06_japan.png
   Vida: 9,090
   Velocidad: 6.25
   Ataque 1: 3180 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 3180 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -795 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

227. Tanuki
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_09_japan.png
   Vida: 12,553
   Velocidad: 4.55
   Ataque 1: 4481 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 4481 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,344 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

228. Ronin
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_08_japan.png
   Vida: 12,036
   Velocidad: 3.85
   Ataque 1: 5515 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5515 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,379 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

229. Ninja lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_09_japan.png
   Vida: 9,335
   Velocidad: 10.00
   Ataque 1: 2026 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 2026 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -506 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

230. Dragón del Templo lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_10_japan.png
   Vida: 14,096
   Velocidad: 3.45
   Ataque 1: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,211 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

231. Emperador Chino
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_11_china.png
   Vida: 12,498
   Velocidad: 3.85
   Ataque 1: 6222 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 6222 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,179 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

232. Guerrera de Terracota
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_10_china.png
   Vida: 11,920
   Velocidad: 4.17
   Ataque 1: 5249 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5249 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,312 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

233. General Chino
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_11_china.png
   Vida: 12,940
   Velocidad: 3.70
   Ataque 1: 5797 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5797 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,449 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

234. Oso Panda lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_12_china.png
   Vida: 12,553
   Velocidad: 4.55
   Ataque 1: 4481 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 4481 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,344 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

235. Dragón Anciano lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_13_china.png
   Vida: 15,926
   Velocidad: 3.33
   Ataque 1: 7218 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 7218 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,516 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

236. Monje de Bronce lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_12_china.png
   Vida: 9,731
   Velocidad: 5.00
   Ataque 1: 5712 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5712 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,428 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

237. Águila Real
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_14_native.png
   Vida: 11,888
   Velocidad: 4.17
   Ataque 1: 5882 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5882 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,765 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

238. Bisonte de Guerra
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_15_native.png
   Vida: 15,926
   Velocidad: 3.33
   Ataque 1: 7218 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 7218 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,516 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

239. Perro de las Praderas
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_16_native.png
   Vida: 8,806
   Velocidad: 7.69
   Ataque 1: 3216 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 3216 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 965 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

240. Alce Guardián
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_17_native.png
   Vida: 12,621
   Velocidad: 3.85
   Ataque 1: 5971 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5971 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,791 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png`);qo.push(`241. Búho Sabio
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_18_native.png
   Vida: 9,090
   Velocidad: 6.25
   Ataque 1: 3180 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 3180 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 954 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

242. Oso de Guerra
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_19_native.png
   Vida: 14,096
   Velocidad: 3.45
   Ataque 1: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,211 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

243. Lobo Solitario
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_20_native.png
   Vida: 10,724
   Velocidad: 4.76
   Ataque 1: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,334 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

244. Guardián Tótem m
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_21_native.png
   Vida: 14,846
   Velocidad: 3.70
   Ataque 1: 5807 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5807 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,742 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

245. Chamán de la Tribu lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_22_native.png
   Vida: 11,825
   Velocidad: 4.17
   Ataque 1: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,620 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

246. Centurión lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_12_rome.png
   Vida: 14,096
   Velocidad: 3.45
   Ataque 1: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,843 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

247. Gladiador lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_13_rome.png
   Vida: 11,920
   Velocidad: 4.17
   Ataque 1: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,334 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

248. León de Nemea
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_23_rome.png
   Vida: 11,825
   Velocidad: 4.17
   Ataque 1: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,620 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

249. Cíclope lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_24_rome.png
   Vida: 14,846
   Velocidad: 3.70
   Ataque 1: 5807 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5807 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,742 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

250. Minotauro lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_25.png
   Vida: 14,096
   Velocidad: 3.45
   Ataque 1: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,211 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

251. Pegaso lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_26_rome.png
   Vida: 8,806
   Velocidad: 7.69
   Ataque 1: 3216 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 3216 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 965 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

252. Cerbero infernal lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_09_rome.png
   Vida: 11,825
   Velocidad: 4.17
   Ataque 1: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,350 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

253. Medusa Imperial lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_06_rome.png
   Vida: 12,050
   Velocidad: 4.17
   Ataque 1: 5293 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5293 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,323 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

254. Emperador Romano lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_10_rome.png
   Vida: 14,846
   Velocidad: 3.70
   Ataque 1: 5807 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5807 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,452 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

255. Legionario Romano lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_11_rome.png
   Vida: 14,096
   Velocidad: 3.45
   Ataque 1: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,843 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

256. Mago del Olimpo lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_11_rome.png
   Vida: 11,888
   Velocidad: 4.17
   Ataque 1: 5882 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5882 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,471 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

257. Cupido lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_07_rome.png
   Vida: 8,806
   Velocidad: 7.69
   Ataque 1: 3216 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3216 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -804 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

258. León de Nemea de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_23_gold.png
   Vida: 11,825
   Velocidad: 4.17
   Ataque 1: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,025 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

259. Cupido de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_07_gold.png
   Vida: 8,806
   Velocidad: 7.69
   Ataque 1: 3216 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3216 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,126 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

260. Faraón del Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_04_gold.png
   Vida: 12,532
   Velocidad: 3.70
   Ataque 1: 5693 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 5693 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 3,074 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

261. Alquimista de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_06_gold.png
   Vida: 12,648
   Velocidad: 3.70
   Ataque 1: 6528 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 6528 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 3,262 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

262. Buck Maurice de Hielo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_02_ice.png
   Vida: 15,926
   Velocidad: 3.33
   Ataque 1: 8250 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5249 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -2,063 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

263. Sir Lancelot de Hielo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_05_ice.png
   Vida: 12,050
   Velocidad: 4.17
   Ataque 1: 5293 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5293 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,588 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

264. Krampus de Hielo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_05_ice.png
   Vida: 10,724
   Velocidad: 4.76
   Ataque 1: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,556 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

265. Duendecilio de Hielo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_05_ice.png
   Vida: 11,351
   Velocidad: 4.76
   Ataque 1: 4753 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 4753 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 1,710 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

266. Desgarrador de Hielo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_05_ice.png
   Vida: 14,846
   Velocidad: 3.70
   Ataque 1: 5494 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5494 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,965 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

267. Jinete del Apocalipsis de Hielo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_05_ice.png
   Vida: 12,940
   Velocidad: 3.70
   Ataque 1: 5797 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5797 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,739 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

268. C-Zanne de Hielo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_04_ice.png
   Vida: 13,036
   Velocidad: 3.45
   Ataque 1: 8500 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 8500 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -3,612 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

269. Virgon de Hielo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_02_ice.png
   Vida: 8,535
   Velocidad: 10.53
   Ataque 1: 2577 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 2577 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 2,165 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

270. Sagitauro de Hielo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_02_ice.png
   Vida: 8,199
   Velocidad: 5.00
   Ataque 1: 5879 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5879 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -2,469 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

271. Cáprika de Hielo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_02_ice.png
   Vida: 8,120
   Velocidad: 6.67
   Ataque 1: 4663 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 4663 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 3,359 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

272. Dragón de Foco lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_27_fire.png
   Vida: 14,096
   Velocidad: 3.45
   Ataque 1: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,211 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

273. Bestia de Fuego lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_28_fire.png
   Vida: 11,825
   Velocidad: 4.17
   Ataque 1: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,620 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

274. Golem de Fuego lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_29_fire.png
   Vida: 14,846
   Velocidad: 3.70
   Ataque 1: 5807 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5807 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,742 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

275. Pájaro de Fuego lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_30_fire.png
   Vida: 8,806
   Velocidad: 7.69
   Ataque 1: 3216 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 3216 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 965 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

276. Monje de Fuego lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_13_fire.png
   Vida: 11,888
   Velocidad: 4.17
   Ataque 1: 5882 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5882 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,471 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

277. Samurái de Fuego lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_12_fire.png
   Vida: 12,050
   Velocidad: 4.17
   Ataque 1: 5293 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5293 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,323 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

278. Ángel de Fuego lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_12_fire.png
   Vida: 10,724
   Velocidad: 4.76
   Ataque 1: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,112 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

279. Sirena de Fuego lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_08_fire.png
   Vida: 10,812
   Velocidad: 4.55
   Ataque 1: 4627 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 4627 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 1,288 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

280. Gato de Fuego lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_14_fire.png
   Vida: 12,621
   Velocidad: 3.85
   Ataque 1: 5971 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5971 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,493 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

281. Esfinge lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_31_egypt.png
   Vida: 12,621
   Velocidad: 3.85
   Ataque 1: 5971 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5971 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,791 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

282. Horus lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_32_egypt.png
   Vida: 10,724
   Velocidad: 4.76
   Ataque 1: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,334 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

283. Sobek lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_33_egypt.png
   Vida: 14,096
   Velocidad: 3.45
   Ataque 1: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,211 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

284. Momia de Oro lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_34_egypt.png
   Vida: 14,846
   Velocidad: 3.70
   Ataque 1: 5807 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5807 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,742 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

285. Faraón de Oro lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_35_egypt.png
   Vida: 11,825
   Velocidad: 4.17
   Ataque 1: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,620 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

286. Anubis lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_15.png
   Vida: 11,888
   Velocidad: 4.17
   Ataque 1: 5882 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5882 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,471 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

287. Cleo lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_16_egypt.png
   Vida: 9,731
   Velocidad: 5.00
   Ataque 1: 5712 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5712 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,428 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

288. Bastet lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_09_egypt.png
   Vida: 10,812
   Velocidad: 4.55
   Ataque 1: 4627 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 4627 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 1,288 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

289. Escarabajo lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_10_egypt.png
   Vida: 11,825
   Velocidad: 4.17
   Ataque 1: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,350 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

290. Sapo de Oro lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_36_china.png
   Vida: 8,806
   Velocidad: 7.69
   Ataque 1: 3216 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 3216 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 965 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

291. Chango de Oro lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_37_china.png
   Vida: 11,825
   Velocidad: 4.17
   Ataque 1: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,620 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

292. Tigre de Oro lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_38_china.png
   Vida: 12,621
   Velocidad: 3.85
   Ataque 1: 5971 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5971 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,791 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

293. Golem de Piedra y Lodo lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_11_stone.png
   Vida: 12,648
   Velocidad: 3.70
   Ataque 1: 6528 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 6528 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,632 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

294. Behemoth de Piedras lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_04_stone.png
   Vida: 11,920
   Velocidad: 3.57
   Ataque 1: 6351 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 6351 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 1,905 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

295. Valkiria de Piedra lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_06_stone.png
   Vida: 10,581
   Velocidad: 5.00
   Ataque 1: 4250 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 4250 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,870 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

296. Thor de Piedra lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_39_stone.png
   Vida: 13,036
   Velocidad: 3.45
   Ataque 1: 7140 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 7140 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,785 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

297. Medusa de Piedra lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_03_stone.png
   Vida: 10,248
   Velocidad: 4.55
   Ataque 1: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,112 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

298. Gargantua de Piedras lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_06_stone.png
   Vida: 10,738
   Velocidad: 4.76
   Ataque 1: 5249 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5249 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -3,937 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

299. Golem de Lava lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_12_lava.png
   Vida: 12,648
   Velocidad: 3.70
   Ataque 1: 6528 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 6528 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,958 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

300. Thor de Lava lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_40_lava.png
   Vida: 13,036
   Velocidad: 3.45
   Ataque 1: 7140 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 7140 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,211 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

301. Medusa de Lava lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_04_lava.png
   Vida: 10,248
   Velocidad: 4.55
   Ataque 1: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,334 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

302. Gárgola lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_07_stone.png
   Vida: 9,908
   Velocidad: 6.67
   Ataque 1: 3019 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 3019 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,208 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

303. Gárgola de Lava lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_08_lava.png
   Vida: 9,908
   Velocidad: 6.67
   Ataque 1: 3019 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 3019 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,408 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

304. Esfinge de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_31_gold.png
   Vida: 12,621
   Velocidad: 3.85
   Ataque 1: 5971 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5971 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,089 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

305. Bastet de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_09_gold.png
   Vida: 10,812
   Velocidad: 4.55
   Ataque 1: 4627 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 4627 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 1,510 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

306. Pegaso de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_26_gold.png
   Vida: 8,806
   Velocidad: 7.69
   Ataque 1: 3216 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 3216 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,126 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

307. Invasor Extraterrestre de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_08_gold.png
   Vida: 12,104
   Velocidad: 4.17
   Ataque 1: 5249 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 5249 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,512 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

308. Behemoth de Oro (Otoño)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_02_gold.png
   Vida: 11,920
   Velocidad: 3.57
   Ataque 1: 6351 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 6351 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 2,223 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

309. Cleo de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_16_gold.png
   Vida: 9,731
   Velocidad: 5.00
   Ataque 1: 5712 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5712 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,714 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

310. Cerbero de Oro (Otoño)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_01_gold.png
   Vida: 10,098
   Velocidad: 5.88
   Ataque 1: 3271 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 3271 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -2,159 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

311. Fénix de Oro lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_30_gold.png
   Vida: 8,806
   Velocidad: 7.69
   Ataque 1: 3216 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 3216 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,126 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

312. Dragón de Fuego de Oro lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_27_gold.png
   Vida: 14,096
   Velocidad: 3.45
   Ataque 1: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,574 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

313. Gato de Fuego de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_14_gold.png
   Vida: 12,621
   Velocidad: 3.85
   Ataque 1: 5971 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5971 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,791 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

314. Gárgola de Oro lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_07_gold.png
   Vida: 9,908
   Velocidad: 6.67
   Ataque 1: 3019 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 3019 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,408 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

315. Golem de Oro lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_06_gold.png
   Vida: 9,926
   Velocidad: 4.35
   Ataque 1: 4536 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 4536 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,350 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

316. Águila Real de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_14_gold.png
   Vida: 11,888
   Velocidad: 4.17
   Ataque 1: 5882 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5882 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,059 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

317. Alce Guardián de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_17_gold.png
   Vida: 12,621
   Velocidad: 3.85
   Ataque 1: 5971 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5971 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,089 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

318. Búho Sabio de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_18_gold.png
   Vida: 9,090
   Velocidad: 6.25
   Ataque 1: 3180 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 3180 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,080 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

319. Capitán Mecano de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_02_gold.png
   Vida: 15,926
   Velocidad: 4.76
   Ataque 1: 5515 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 5515 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 3,971 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

320. Dezinger de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_03_gold.png
   Vida: 16,279
   Velocidad: 3.45
   Ataque 1: 6963 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 6963 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 3,421 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

321. Behemoth de Oro (Lava)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_02_gold.png
   Vida: 11,920
   Velocidad: 3.57
   Ataque 1: 6351 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 6351 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 2,223 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

322. Sir Lancelot de Oro (Otoño)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_05_gold.png
   Vida: 12,050
   Velocidad: 4.17
   Ataque 1: 5293 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5293 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,588 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

323. Sir Lancelot de Bronce lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_05_bronze.png
   Vida: 12,050
   Velocidad: 4.17
   Ataque 1: 5293 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5293 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,323 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

324. Dezinger de Bronce lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_03_bronze.png
   Vida: 16,279
   Velocidad: 3.45
   Ataque 1: 6963 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 6963 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 2,785 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

325. C-Zanne de Bronce lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_04_bronze.png
   Vida: 13,036
   Velocidad: 3.45
   Ataque 1: 8500 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 8500 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -3,145 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

326. Sir Lancelot (Starwars)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_05_starwars.png
   Vida: 12,050
   Velocidad: 4.17
   Ataque 1: 5293 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5293 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,323 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

327. Dragón Dorado de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_08_gold.png
   Vida: 12,940
   Velocidad: 3.70
   Ataque 1: 5797 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5797 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,029 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

328. Geisha de Oro lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_f_02_gold.png
   Vida: 14,096
   Velocidad: 3.45
   Ataque 1: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: -2,580 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

329. Kabuki de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_09_gold.png
   Vida: 10,098
   Velocidad: 5.88
   Ataque 1: 3271 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3271 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,063 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

330. Kitsune de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_06_gold.png
   Vida: 9,090
   Velocidad: 6.25
   Ataque 1: 3180 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 3180 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,034 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

331. Samurái de Oro lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_10_gold.png
   Vida: 12,050
   Velocidad: 4.17
   Ataque 1: 5293 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5293 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,588 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

332. Tanuki de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_09_gold.png
   Vida: 12,553
   Velocidad: 4.55
   Ataque 1: 4481 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 4481 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,569 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

333. Sir Galahad lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_06_rome.png
   Vida: 12,050
   Velocidad: 4.17
   Ataque 1: 5293 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5293 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,323 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

334. Cernunnos de Oro (Otoño)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_05_gold.png
   Vida: 14,846
   Velocidad: 3.70
   Ataque 1: 5712 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5712 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -2,000 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

335. Humanoide Pérfido de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_01_gold.png
   Vida: 9,731
   Velocidad: 5.00
   Ataque 1: 3992 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 3992 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 2,142 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

336. Coloso de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_01_gold.png
   Vida: 11,261
   Velocidad: 4.35
   Ataque 1: 5059 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 5059 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 2,477 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

337. Sentry de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_02_gold.png
   Vida: 9,826
   Velocidad: 6.25
   Ataque 1: 3502 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 3502 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,277 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

338. Behemoth de Cenizas lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_05_ash.png
   Vida: 11,920
   Velocidad: 3.57
   Ataque 1: 6351 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 6351 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 1,905 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

339. Androide de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_01_gold.png
   Vida: 10,540
   Velocidad: 6.67
   Ataque 1: 3529 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 2026 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,324 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

340. Súper Robot
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_04_retro.png
   Vida: 10,540
   Velocidad: 6.67
   Ataque 1: 3529 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 2026 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,117 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png`);qo.push(`341. Sir Galahad de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_06_gold.png
   Vida: 12,050
   Velocidad: 4.17
   Ataque 1: 5293 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5293 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,588 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

342. Leonidas lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_14_rome.png
   Vida: 14,096
   Velocidad: 3.45
   Ataque 1: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,843 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

343. León de Nemera de Bronce lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_23_bronze.png
   Vida: 11,825
   Velocidad: 4.17
   Ataque 1: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,620 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

344. León de Nemea de Plata lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_23_silver.png
   Vida: 11,825
   Velocidad: 4.17
   Ataque 1: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,782 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

345. Medusa de Bronce lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_03_bronze.png
   Vida: 10,248
   Velocidad: 4.55
   Ataque 1: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,112 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

346. Medusa Imperial de Plata lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_06_silver.png
   Vida: 12,050
   Velocidad: 4.17
   Ataque 1: 5293 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5293 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,455 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

347. Cíclope de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_24_gold.png
   Vida: 14,846
   Velocidad: 3.70
   Ataque 1: 5807 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5807 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,089 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

348. Centurión lll de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_12_gold.png
   Vida: 14,096
   Velocidad: 3.45
   Ataque 1: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -2,580 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

349. Gladiador lll de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_13_gold.png
   Vida: 11,920
   Velocidad: 4.17
   Ataque 1: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,867 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

350. Samurái de Plata lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_10_silver.png
   Vida: 12,050
   Velocidad: 4.17
   Ataque 1: 5293 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5293 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,455 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

351. Samurái de Bronce lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_10_bronze.png
   Vida: 12,050
   Velocidad: 4.17
   Ataque 1: 5293 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5293 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,323 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

352. Esfinge de Plata lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_31_silver.png
   Vida: 12,621
   Velocidad: 3.85
   Ataque 1: 5971 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5971 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,970 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

353. Esfinge de Bronce lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_31_bronze.png
   Vida: 12,621
   Velocidad: 3.85
   Ataque 1: 5971 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5971 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,791 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

354. Cleo de Plata lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_16_silver.png
   Vida: 9,731
   Velocidad: 5.00
   Ataque 1: 5712 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5712 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,571 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

355. Cleo de Bronce lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_16_bronze.png
   Vida: 9,731
   Velocidad: 5.00
   Ataque 1: 5712 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5712 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,428 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

356. Gato de Fuego de Plata lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_14_silver.png
   Vida: 12,621
   Velocidad: 3.85
   Ataque 1: 5971 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5971 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,640 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

357. Gato de Fuego de Bronce lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_14_bronze.png
   Vida: 12,621
   Velocidad: 3.85
   Ataque 1: 5971 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5971 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,493 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

358. Pregonero Romano de Plata lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_15_rome.png
   Vida: 11,888
   Velocidad: 4.17
   Ataque 1: 5882 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5882 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,617 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

359. Pregonero Romano de Oro lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_15_gold.png
   Vida: 11,888
   Velocidad: 4.17
   Ataque 1: 5882 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5882 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -2,059 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

360. Esfinge de Oro (Egipto)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_31_egypt_gold.png
   Vida: 12,621
   Velocidad: 3.85
   Ataque 1: 5971 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5971 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,089 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

361. Cleo de Oro (Egipto)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_16_egypt_gold.png
   Vida: 9,731
   Velocidad: 5.00
   Ataque 1: 5712 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5712 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,714 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

362. Gato de Fuego de Oro (Fuego)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_14_fire_gold.png
   Vida: 12,621
   Velocidad: 3.85
   Ataque 1: 5971 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5971 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,791 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

363. León de Oro (Otoño)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_23_gold_fall.png
   Vida: 11,825
   Velocidad: 4.17
   Ataque 1: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,025 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

364. Gárgola de Oro (Piedras)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_07_stone_gold.png
   Vida: 9,908
   Velocidad: 6.67
   Ataque 1: 3019 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 3019 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,408 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

365. Cernunnos de Oro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_05_gold.png
   Vida: 14,846
   Velocidad: 3.70
   Ataque 1: 5712 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5712 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -2,000 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

366. Thor de Oro (Piedras)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_39_stone_gold.png
   Vida: 13,036
   Velocidad: 3.45
   Ataque 1: 7140 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 7140 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,501 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

367. Gárgola de Oro (Lava)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_08_lava_gold.png
   Vida: 9,908
   Velocidad: 6.67
   Ataque 1: 3019 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 3019 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,408 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

368. Thor de Oro (Lava)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_40_lava_gold.png
   Vida: 13,036
   Velocidad: 3.45
   Ataque 1: 7140 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 7140 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,501 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

369. Sobek de Oro (Egipto)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_33_egypt_gold.png
   Vida: 14,096
   Velocidad: 3.45
   Ataque 1: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,574 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

370. Sobek de Plata (Egipto)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_33_egypt_silver.png
   Vida: 14,096
   Velocidad: 3.45
   Ataque 1: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,330 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

371. Sobek de Bronce (Egipto)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_33_egypt_bronze.png
   Vida: 14,096
   Velocidad: 3.45
   Ataque 1: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,211 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

372. Anubis de Oro lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_15_gold.png
   Vida: 11,888
   Velocidad: 4.17
   Ataque 1: 5882 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5882 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,765 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

373. Anubis de Plata lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_15_silver.png
   Vida: 11,888
   Velocidad: 4.17
   Ataque 1: 5882 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5882 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,598 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

374. Anubis de Bronce lll
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_15_bronze.png
   Vida: 11,888
   Velocidad: 4.17
   Ataque 1: 5882 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5882 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,471 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

375. Centurión de Oro (Roma)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_12_gold_rome.png
   Vida: 14,096
   Velocidad: 3.45
   Ataque 1: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -2,580 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

376. Centurión de Plata (Roma)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_12_silver_rome.png
   Vida: 14,096
   Velocidad: 3.45
   Ataque 1: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -2,119 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

377. Centurión de Bronce (Roma)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_12_bronze_rome.png
   Vida: 14,096
   Velocidad: 3.45
   Ataque 1: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,843 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

378. Gladiador de Plata lll (Roma)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_13_silver_rome.png
   Vida: 11,920
   Velocidad: 4.17
   Ataque 1: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,534 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

379. Gladiador de Bronce lll (Roma)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_13_bronze_rome.png
   Vida: 11,920
   Velocidad: 4.17
   Ataque 1: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,334 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

380. Cerbero Infernal de Plata lll (Roma)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_09_silver_rome.png
   Vida: 11,825
   Velocidad: 4.17
   Ataque 1: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,482 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

381. Cerbero Infernal de Bronce lll (Roma)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_09_bronze_rome.png
   Vida: 11,825
   Velocidad: 4.17
   Ataque 1: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,350 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

382. Cerbero Infernal de Oro lll (Roma)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_09_gold_rome.png
   Vida: 11,825
   Velocidad: 4.17
   Ataque 1: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,620 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

383. Cernunnos de Oro lll (Otoño)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_05_gold_fall.png
   Vida: 14,846
   Velocidad: 3.70
   Ataque 1: 5712 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5712 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -2,000 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

384. Cernunnos de Plata lll (Otoño)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_05_silver_fall.png
   Vida: 14,846
   Velocidad: 3.70
   Ataque 1: 5712 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5712 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,811 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

385. Cernunnos de Bronce lll (Otoño)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_05_bronze_fall.png
   Vida: 14,846
   Velocidad: 3.70
   Ataque 1: 5712 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5712 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,714 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

386. Águila Real de Plata (Nativo)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_14_native_silver.png
   Vida: 11,888
   Velocidad: 4.17
   Ataque 1: 5882 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5882 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,859 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

387. Águila Real de Bronce (Nativo)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_14_native_bronze.png
   Vida: 11,888
   Velocidad: 4.17
   Ataque 1: 5882 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5882 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,765 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

388. Oso de Guerra de Plata (Nativo)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_19_native_silver.png
   Vida: 14,096
   Velocidad: 3.45
   Ataque 1: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,330 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

389. Oso de Guerra de Bronce (Nativo)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_19_native_bronze.png
   Vida: 14,096
   Velocidad: 3.45
   Ataque 1: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,211 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

390. Oso de Guerra de Oro (Nativo)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_19_native_gold.png
   Vida: 14,096
   Velocidad: 3.45
   Ataque 1: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,574 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

391. Bisonte de Guerra de Plata (Nativo)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_15_native_silver.png
   Vida: 15,926
   Velocidad: 3.33
   Ataque 1: 7218 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 7218 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,651 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

392. Bisonte de Guerra de Bronce (Nativo)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_15_native_bronze.png
   Vida: 15,926
   Velocidad: 3.33
   Ataque 1: 7218 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 7218 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,516 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

393. Bisonte de Guerra de Oro (Nativo)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_15_native_gold.png
   Vida: 15,926
   Velocidad: 3.33
   Ataque 1: 7218 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 7218 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,929 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

394. Lobo Solitario de Plata (Nativo)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_20_native_silver.png
   Vida: 10,724
   Velocidad: 4.76
   Ataque 1: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,467 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

395. Lobo Solitario de Bronce (Nativo)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_20_native_bronze.png
   Vida: 10,724
   Velocidad: 4.76
   Ataque 1: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,334 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

396. Lobo Solitario de Oro (Nativo)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_20_native_gold.png
   Vida: 10,724
   Velocidad: 4.76
   Ataque 1: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,556 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

397. Búho Sabio de Plata (Nativo)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_18_native_silver.png
   Vida: 9,090
   Velocidad: 6.25
   Ataque 1: 3180 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 3180 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,018 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

398. Búho Sabio de Bronce (Nativo)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_18_native_bronze.png
   Vida: 9,090
   Velocidad: 6.25
   Ataque 1: 3180 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 3180 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 954 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

399. Alce Guardián de Plata (Nativo)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_17_native_silver.png
   Vida: 12,621
   Velocidad: 3.85
   Ataque 1: 5971 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5971 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,970 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

400. Alce Guardián de Bronce (Nativo)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_17_native_bronze.png
   Vida: 12,621
   Velocidad: 3.85
   Ataque 1: 5971 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5971 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,791 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

401. Horus de Plata (Egipto)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_32_egypt_silver.png
   Vida: 10,724
   Velocidad: 4.76
   Ataque 1: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,467 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

402. Horus de Bronce (Egipto)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_32_egypt_bronze.png
   Vida: 10,724
   Velocidad: 4.76
   Ataque 1: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,334 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

403. Momia de Plata (Egipto)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_34_egypt_silver.png
   Vida: 14,846
   Velocidad: 3.70
   Ataque 1: 5807 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5807 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,917 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

404. Momia de Bronce (Egipto)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_34_egypt_bronze.png
   Vida: 14,846
   Velocidad: 3.70
   Ataque 1: 5807 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5807 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,742 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

405. Momia de Oro (Egipto)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_34_egypt_gold_specimen.png
   Vida: 14,846
   Velocidad: 3.70
   Ataque 1: 5807 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5807 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,089 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

406. Faraón de Plata (Egipto)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_35_egypt_silver.png
   Vida: 11,825
   Velocidad: 4.17
   Ataque 1: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,782 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

407. Faraón de Bronce (Egipto)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_35_egypt_bronze.png
   Vida: 11,825
   Velocidad: 4.17
   Ataque 1: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,620 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

408. Faraón de Oro (Egipto)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_35_egypt_gold_specimen.png
   Vida: 11,825
   Velocidad: 4.17
   Ataque 1: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,025 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

409. Bastet de Plata (Egipto)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_09_egypt_silver.png
   Vida: 10,812
   Velocidad: 4.55
   Ataque 1: 4627 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 4627 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 1,399 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

410. Bastet de Bronce (Egipto)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_09_egypt_bronze.png
   Vida: 10,812
   Velocidad: 4.55
   Ataque 1: 4627 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 4627 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 1,288 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

411. Horus de Oro (Egipto)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_32_egypt_gold.png
   Vida: 10,724
   Velocidad: 4.76
   Ataque 1: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,556 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png`);function gf(s){const n=s.split("|").map(h=>h.trim()),i=n[0]||"",l=n.find(h=>h.toLowerCase().includes("triple:")),p=l?l.toLowerCase().includes("sí"):i.toLowerCase().includes("x3"),m=n.find(h=>h.toLowerCase().includes("icono:")),d=m?m.replace(/icono:/i,"").trim():"";return{valor:i,es_triple:p,icono:d}}function c5(s){const n=s.split("|").map(m=>m.trim()),i=n[0]||"",l=n.find(m=>m.toLowerCase().includes("icono:")),p=l?l.replace(/icono:/i,"").trim():"";return{valor:i,icono:p}}const u5=["a_01","a_02","aa_01","aa_02","ab_01","ab_02","ab_03","ac_01","ac_02","ac_03","ad_01","ad_02","ae_01","ae_02","af_01","af_02","b_01","b_02","b_03","ba_01","ba_02","bb_01","bb_02","bc_01","bc_02","bd_01","bd_02","be_01","be_02","be_03","bf_01","bf_02","c_01","c_02","ca_01","ca_02","ca_03","cb_01","cb_02","cc_01","cc_02","cd_01","cd_02","cd_03","ce_01","ce_03","cf_01","cf_02","d_01","da_01","da_02","db_01","db_02","db_03","dc_01","dc_02","dc_03","dd_01","dd_02","de_01","de_02","df_01","df_02","e_01","ea_01","ea_02","ea_03","eb_01","eb_02","eb_03","ec_01","ec_02","ed_01","ed_02","ee_01","ee_02","ee_03","ef_01","ef_02","ef_03","f_01","f_03","fa_01","fa_02","fb_01","fb_02","fb_03","fc_01","fc_02","fd_01","fd_02","fd_03","fe_01","fe_02","ff_01","ff_02","fc_03","cb_03","ba_03","ff_03","bb_03","de_03","da_03","bf_03","cd_04","dc_04","aa_03","d_03","ec_03","bc_03","ad_03","af_04","ae_03","fb_04","bd_03","cf_04","ce_02","dd_03","cc_03","df_03","ed_03","af_03","bc_04","db_04","fa_03","fe_04","fe_03","a_03","cf_03","de_04","ba_04","cb_04","fd_04","fc_04","fa_04","bf_04","fe_05","ca_04","df_04","ed_04","ac_04","eb_04","de_05","bf_05","c_03","ec_04","ef_04","ff_04","ad_04","cc_04","ab_04","ce_04","bd_99","bb_04","aa_04","ae_04","cb_05","af_05","da_04","bd_04","fc_05","ee_04","dd_04","be_04","ea_04","ef_05","df_99","fb_05","eb_05","ca_05","ac_05","ab_05","aa_05","fa_05","fe_99","ce_05","e_03","cc_05","da_05","df_05","db_05","bc_05","dc_05","ed_05","ec_05","fd_05","ec_06","ff_05","be_05","ad_05","bd_05","dd_05","da_06","cf_05","bb_05","cf_06","cd_05","ea_05","af_06","ae_05","ee_05","ba_05","ce_06","fb_06","bc_06","fd_06","dc_06","ed_06","fa_06","bf_06","ad_06","cd_06","db_06","ac_06","fe_06","eb_06","ea_06","be_06","b_04","ab_06","ef_06","fc_06","df_06","cb_06","dd_06","de_06","ca_06","ff_06","bd_06","af_07","cf_07","ae_06","ba_06","ec_07","ed_07","bd_07","db_07","da_07","fe_07","ab_07","df_07","bf_07","ee_06","aa_06","ce_07","cc_06","cc_07","fc_07","ba_07","f_04","fd_07","ef_07","ad_07","ac_07","ca_07","fb_07","fa_07","de_07","cb_07","bc_07","cd_07","ea_07","ee_07","be_07","dd_07","eb_07","ec_08","cf_08","bc_08","ac_08","dd_08","de_08","fc_08","ae_07","db_08","af_08","fa_08","ff_07","bb_06","ef_08","da_08","cb_08","ea_08","fb_08","bf_08","ad_08","fc_09","ce_08","ba_08","ae_08","bd_08","fa_99","eb_99","cd_08","dc_07","ed_08","fd_08","ca_08","df_08","eb_08","cf_09","ad_09","dc_08","bb_07","aa_07","ac_09","bd_09","ff_08","ee_08","be_08","aa_08","ca_09","eb_09","df_09","fe_08","bb_08","ec_09","de_09","ab_08","be_09","ca_10","ea_09","cc_08","bf_09","cc_09","ae_09","cd_09","da_09","fd_09","af_09","a_05","ea_10","dd_09","fd_10","ab_09","ac_10","df_10","bc_09","af_10","bb_09","de_10","cb_09","db_09","dc_09","fe_09","ba_09","bf_10","fa_09","aa_09","cf_10","ce_09","ef_09","da_10","ee_09","ff_09","fb_10","ed_09","fb_09","ef_10","ed_10","cb_10","ae_10","dc_10","bd_10","fe_10","fa_10","cd_10","ad_10","fc_10","bb_10","af_99","bc_10","ce_99","dd_10","aa_10","ba_10","cc_10","db_10","ec_10","eb_10","ab_10","be_10","ce_10","eb_11","ff_10","db_11","fc_99","ee_10","ac_11","bd_11","fa_11","af_11","ce_11","ca_11","cd_11","fb_11","da_11","ed_11","aa_11","bb_11","ef_99","fd_11","cb_11","bf_11","de_11","ae_11","ec_11","dc_11","ba_11","ff_11","df_11","b_05","ee_99","fc_11","cf_11","cc_11","c_05","fb_12","ad_11","dd_11","be_11","fe_11","ac_12","ea_11","ca_99","ab_11","ee_11","ef_12","bc_11","bb_12","de_12","e_12","d_12","af_12","df_12","cf_12","cb_12","fa_12","dd_12","ef_11","fc_12","ff_12","ed_12","ca_12","db_12","ec_12","cd_12","ed_99","eb_12","fd_12","f_13","ab_12","bc_12","aa_12","fe_12","bf_12","c_13","ae_12","ce_12","be_12","fe_13","da_12","dc_12","f_12","ad_12","b_12","d_13","bd_12","aa_99","cf_13","ea_12","b_13","bf_13","dd_13","ee_12","ad_13","fa_13","da_13","ca_13","bc_13","de_13","ba_12","a_13","ef_13","cb_13","eb_13","ab_99","ae_13","cf_99","bb_13","fd_13","cc_12","bc_14","e_13","dc_13","ac_13","fe_14","fc_13","ef_14","cc_13","ff_13","ae_14","aa_13","cd_13","cb_14","ba_13","dc_14","df_13","ca_14","db_13","ae_99","ac_14","af_13","db_14","ec_13","ce_13","ea_13","ea_99","af_14","ff_14","dd_14","fd_14","fb_13","ab_13","ed_13","bd_14","da_14","c_14","ed_14","de_14","a_14","ee_13","ff_99","f_14","fb_14","bd_13","cd_14","cc_14","b_14","ab_14","be_13","ea_14","ba_14","cf_14","de_15","ad_14","ab_15","e_14","bf_14","be_15","ce_14","ea_15","d_14","dd_15"],x0={};u5.forEach((s,n)=>{x0[s.toLowerCase()]=n+1});function p5(s){const n=s.toLowerCase().match(/^([a-f]{1,2}_\d+)/);return n?n[1]:""}function hf(s){return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+de\s+(oro|plata|bronce|platino|hielo|elite|silver|gold|bronze|platinum|ice)/g,"").trim()}const mn=[];function d5(){if(mn.length>0)return;const n=qo.join(`
`).split(/\r?\n(?=\d+\.)/),i=[];n.forEach(l=>{const p=l.split(/\r?\n/).map(nt=>nt.trim()).filter(Boolean);if(p.length<2)return;const m=p[0],d=m.match(/^\d+\.\s+(.+)$/),h=d?d[1].trim():m,f=p.find(nt=>nt.startsWith("Imagen mutante:")),b=f?f.replace("Imagen mutante:","").trim():"",_=b.match(/specimen_([a-z]{1,2}_\d+)/i),k=_?_[1].toLowerCase():"",y=p.find(nt=>nt.startsWith("Vida:")),G=y?y.replace("Vida:","").trim():"",M=p.find(nt=>nt.startsWith("Velocidad:")),I=M?M.replace("Velocidad:","").trim():"",A=p.find(nt=>nt.startsWith("Ataque 1:")),q=gf(A?A.replace("Ataque 1:","").trim():""),K=p.find(nt=>nt.startsWith("Ataque 2:")),O=gf(K?K.replace("Ataque 2:","").trim():""),N=p.find(nt=>nt.startsWith("Habilidad:")),R=c5(N?N.replace("Habilidad:","").trim():""),B=parseFloat(G.replace(/,/g,""))||0,D=parseFloat(I)||0,X=q.valor.toLowerCase().replace("x3","").replace(/,/g,"").trim(),F=parseFloat(X)||0,Z=R.valor.toLowerCase().replace(/,/g,"").trim(),it=parseFloat(Z)||0;i.push({nombreOriginal:h,rawImagen:b,baseCode:k,vida:G,velocidad:I,ataques:[q,O],habilidad:R,stats:{hp:B,atk:F,spd:D,def:it,hab:it}})}),Ef.split(/\r?\n/).forEach(l=>{const p=l.trim();if(!p)return;const m=p.search(/\s\S+$/);if(m===-1)return;const d=p.substring(0,m).trim(),h=p.substring(m).trim().toLowerCase(),f=p5(h),b=i.filter(O=>O.baseCode===f);let _=null;if(b.length>0){let O=-1;_=b[0],b.forEach(N=>{let R=0;const B=N.nombreOriginal.toLowerCase(),D=d.toLowerCase();B===D?R+=100:hf(N.nombreOriginal)===hf(d)&&(R+=80);const X=mf[h]||"";X&&N.rawImagen.toLowerCase()===X.toLowerCase()&&(R+=50),!D.includes("oro")&&B.includes("oro")&&(R-=30),!D.includes("hielo")&&B.includes("hielo")&&(R-=30),!D.includes("gold")&&N.rawImagen.toLowerCase().includes("_gold")&&(R-=20),!D.includes("ice")&&N.rawImagen.toLowerCase().includes("_ice")&&(R-=20),R>O&&(O=R,_=N)})}const k=String(x0[f]||mn.length+1),y=mf[h]||`https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_${h}.png`,G=f.split("_")[0].split(""),M=[...G].sort().join(""),I=fl.find(O=>O.id===G[0]),A=fl.find(O=>O.id===G[1])||I,q=(I==null?void 0:I.image)||"",K=(A==null?void 0:A.image)||q;if(_)mn.push({id:k,nombre:d,imagen:y,vida:_.vida,velocidad:_.velocidad,ataques:_.ataques,habilidad:_.habilidad,tipoIcono:q,skinIcono:K,codigo:h.toUpperCase(),genes:G,sortedGenes:M,stats:_.stats});else{const O={valor:"1,500",es_triple:!1,icono:q},N={valor:"1,500",es_triple:!1,icono:K};mn.push({id:k,nombre:d,imagen:y,vida:"12,000",velocidad:"4.00",ataques:[O,N],habilidad:{valor:"1,000",icono:"https://pokradex.org/MutantsGG/assets/ability_shield_big.png"},tipoIcono:q,skinIcono:K,codigo:h.toUpperCase(),genes:G,sortedGenes:M,stats:{hp:12e3,atk:1500,spd:4,def:1e3,hab:1e3}})}}),mn.sort((l,p)=>parseInt(l.id,10)-parseInt(p.id,10))}d5();/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function m5(s){const n=String(s||"").split("_")[0].toLowerCase().split(""),i=pn[n[0]]||pn.n,l=pn[n[1]]||pn[n[0]]||pn.n;return[i[0],l[1]||l[0]]}function g5(s,n){const[i,l]=m5(n),p=String(s||n||"?").replace(/[^A-Za-zÁÉÍÓÚÜÑ0-9 ]/g," ").split(/\s+/).filter(Boolean).slice(0,2).map(h=>h[0]).join("").toUpperCase()||"MG",m=String(s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;"),d=`
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
    <text x="300" y="495" text-anchor="middle" fill="white" font-family="Inter, Arial, sans-serif" font-weight="700" font-size="28" opacity="0.92">${m.slice(0,24)}</text>
  </svg>`;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(d)}`}function un(s){return Number(s).toLocaleString("es-PE",{minimumFractionDigits:0,maximumFractionDigits:2})}const bf=({mutant:s})=>{var A,q,K,O;const{translate:n}=Ie(),[i,l]=Y.useState(!1),p=s.codigo.split("_")[0].toLowerCase().split(""),m=p.map(N=>fl.find(R=>R.id===N)).filter(Boolean),d=()=>{navigator.clipboard.writeText(s.codigo.toUpperCase()).catch(()=>{}),l(!0),setTimeout(()=>l(!1),2e3)},h=s.ataques[0],f=s.ataques[1]||s.ataques[0],b=(h==null?void 0:h.es_triple)||(h==null?void 0:h.valor.toLowerCase().includes("x3")),_=(f==null?void 0:f.es_triple)||(f==null?void 0:f.valor.toLowerCase().includes("x3")),k=N=>N?N.toLowerCase().replace(/\s*x3/g,"").toUpperCase():"1,500",y=s.fallbackImagen||g5(s.nombre,s.codigo),G=s.nombre.replace(/^#\d+\s*/i,"").replace(/^\d+\.\s*/i,""),M=p[0]||"n",I=pn[M]||["#64748b","#334155"];return u.jsxs(u.Fragment,{children:[u.jsxs("article",{className:"group relative flex sm:hidden w-full items-stretch bg-[#080f1d] border border-white/[0.06] hover:border-blue-500/30 rounded-[22px] overflow-hidden shadow-2xl transition-all duration-300",children:[u.jsx("div",{className:"absolute inset-0 opacity-[0.02] pointer-events-none transition-opacity duration-300 group-hover:opacity-[0.05]",style:{background:`radial-gradient(circle at center, ${I[0]}, transparent 70%)`}}),u.jsxs("div",{className:"relative w-[120px] xs:w-[135px] shrink-0 flex items-center justify-center p-3 overflow-hidden bg-gradient-to-b from-[#111d35] to-[#080f1d] border-r border-white/[0.04]",children:[u.jsx("div",{className:"absolute inset-0 opacity-25 pointer-events-none",style:{background:`radial-gradient(ellipse at 50% 0%, ${I[0]}50, transparent 75%)`}}),u.jsx("img",{className:"mutant-thumb max-w-[85%] max-h-[85%] object-contain transition-transform duration-300 group-hover:scale-105",src:s.imagen,alt:G,loading:"lazy",onError:N=>{const R=N.currentTarget;R.src=y,R.onerror=null}}),u.jsx("div",{className:"absolute top-2.5 left-2.5 flex flex-row gap-2 z-20",children:m.map((N,R)=>u.jsx("div",{className:"w-[30px] h-[30px] xs:w-[34px] xs:h-[34px] rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center",children:u.jsx("img",{src:N==null?void 0:N.image,alt:N==null?void 0:N.name,className:"w-[82%] h-[82%] object-contain text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"})},R))})]}),u.jsxs("div",{className:"flex-1 p-3 flex flex-col justify-between gap-1.5 text-left min-w-0",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"m-0 text-[13px] font-black text-white uppercase tracking-tight leading-none truncate pr-1",children:G}),u.jsxs("div",{className:"flex items-center gap-1.5 mt-1",children:[u.jsx("span",{className:"w-1.5 h-1.5 rounded-full",style:{backgroundColor:I[0],boxShadow:`0 0 6px ${I[0]}a0`}}),u.jsx("span",{className:"font-mono font-bold text-[9px] uppercase text-slate-400 tracking-wider",children:s.codigo})]})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-1 px-0.5",children:[u.jsxs("div",{className:"bg-[#0b1325]/90 border border-white/[0.03] rounded-lg py-1 px-1.5 flex items-center gap-1.5",children:[u.jsx("img",{src:ol.vida,alt:"HP",className:"w-[13px] h-[13px] object-contain shrink-0"}),u.jsxs("div",{className:"min-w-0",children:[u.jsx("span",{className:"block text-[7px] font-black uppercase tracking-wider text-slate-500 leading-none",children:"HP"}),u.jsx("span",{className:"text-white font-mono font-black text-[9.5px] leading-tight block select-all truncate",children:s.vida})]})]}),u.jsxs("div",{className:"bg-[#0b1325]/90 border border-white/[0.03] rounded-lg py-1 px-1.5 flex items-center gap-1.5",children:[u.jsx("img",{src:ol.velocidad,alt:"SPD",className:"w-[13px] h-[13px] object-contain shrink-0"}),u.jsxs("div",{className:"min-w-0",children:[u.jsx("span",{className:"block text-[7px] font-black uppercase tracking-wider text-slate-500 leading-none",children:"SPD"}),u.jsx("span",{className:"text-white font-mono font-black text-[9.5px] leading-tight block select-all truncate",children:s.velocidad})]})]}),u.jsxs("div",{className:"bg-[#0b1325]/90 border border-white/[0.03] rounded-lg py-1 px-1.5 flex items-center gap-1.5",children:[u.jsx("img",{src:(h==null?void 0:h.icono)||s.tipoIcono,alt:"AT",className:"w-[13px] h-[13px] object-contain shrink-0"}),u.jsxs("div",{className:"min-w-0 flex-1",children:[u.jsxs("span",{className:"block text-[7px] font-black uppercase tracking-wider text-slate-500 leading-none",children:["AT1",b&&u.jsx("span",{className:"text-amber-500 font-extrabold ml-0.5 text-[6px]",children:"x3"})]}),u.jsx("span",{className:`font-mono font-black text-[9.5px] leading-tight block select-all truncate ${b?"text-amber-400":"text-white"}`,children:k(h==null?void 0:h.valor)})]})]}),u.jsxs("div",{className:"bg-[#0b1325]/90 border border-white/[0.03] rounded-lg py-1 px-1.5 flex items-center gap-1.5",children:[u.jsx("img",{src:(f==null?void 0:f.icono)||s.skinIcono,alt:"AT",className:"w-[13px] h-[13px] object-contain shrink-0"}),u.jsxs("div",{className:"min-w-0 flex-1",children:[u.jsxs("span",{className:"block text-[7px] font-black uppercase tracking-wider text-slate-500 leading-none",children:["AT2",_&&u.jsx("span",{className:"text-amber-500 font-extrabold ml-0.5 text-[6px]",children:"x3"})]}),u.jsx("span",{className:`font-mono font-black text-[9.5px] leading-tight block select-all truncate ${_?"text-amber-400":"text-white"}`,children:k(f==null?void 0:f.valor)})]})]}),u.jsxs("div",{className:"col-span-2 bg-[#0b1325]/90 border border-white/[0.03] rounded-lg py-1 px-1.5 flex items-center justify-between gap-1.5",children:[u.jsxs("div",{className:"flex items-center gap-1 min-w-0",children:[u.jsx("img",{src:((A=s.habilidad)==null?void 0:A.icono)||"https://pokradex.org/MutantsGG/assets/ability_shield_big.png",alt:"DEF",className:"w-[13px] h-[13px] object-contain shrink-0"}),u.jsx("span",{className:"text-[7px] font-black uppercase tracking-wider text-slate-500 leading-none",children:"DEF / HAB"})]}),u.jsx("span",{className:"text-white font-mono font-black text-[9.5px] leading-none select-all truncate pr-1",children:((q=s.habilidad)==null?void 0:q.valor)||"1,000"})]})]}),u.jsx("button",{onClick:d,className:`w-full py-1.5 text-[8px] font-black uppercase tracking-[0.14em] transition-all flex items-center justify-center gap-1.5 border leading-none ${i?"bg-green-500/10 border-green-500/20 text-green-400":"bg-transparent border-white/[0.08] text-white active:scale-[0.97]"}`,style:{borderRadius:"100px"},children:i?u.jsxs(u.Fragment,{children:[u.jsx(hl,{size:10,className:"shrink-0 text-green-400 animate-bounce"}),u.jsx("span",{children:n("mutant.verified")})]}):u.jsxs(u.Fragment,{children:[u.jsx(Su,{size:9,className:"shrink-0 opacity-85"}),u.jsx("span",{children:n("mutant.extract_code")})]})})]})]}),u.jsxs("article",{className:"group relative hidden sm:flex flex-col w-full h-full max-w-[340px] sm:max-w-none mx-auto bg-[#080f1d] border border-white/[0.06] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-1",style:{"--dynamic-glow":I[0]},children:[u.jsx("div",{className:"absolute inset-0 rounded-[24px] sm:rounded-[28px] border border-transparent transition-colors duration-300 group-hover:border-[var(--dynamic-glow)]/40 pointer-events-none z-30",style:{content:'""'}}),u.jsx("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0",style:{background:`radial-gradient(circle at center, ${I[0]}15, transparent 75%)`}}),u.jsxs("div",{className:"relative h-32 sm:h-36 w-full flex items-center justify-center p-2 sm:p-3 overflow-hidden bg-gradient-to-b from-[#111d35] to-[#080f1d] border-b border-white/[0.04] z-10 shrink-0",children:[u.jsx("div",{className:"absolute inset-0 opacity-25 pointer-events-none transition-opacity duration-300 group-hover:opacity-40",style:{background:`radial-gradient(ellipse at 50% 0%, ${I[0]}60, transparent 75%)`}}),u.jsx("img",{className:"mutant-thumb max-w-[80%] max-h-[80%] object-contain transition-transform duration-500 group-hover:scale-105",src:s.imagen,alt:G,loading:"lazy",onError:N=>{const R=N.currentTarget;R.src=y,R.onerror=null}}),u.jsx("div",{className:"absolute top-3 left-3 flex flex-row gap-2.5 z-20",children:m.map((N,R)=>u.jsxs("div",{className:"relative group/badge",children:[u.jsx("div",{className:"w-[34px] h-[34px] sm:w-[42px] sm:h-[42px] rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg",children:u.jsx("img",{src:N==null?void 0:N.image,alt:N==null?void 0:N.name,className:"w-[84%] h-[84%] object-contain text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"})}),u.jsx("div",{className:"absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-black text-[8px] font-black uppercase tracking-widest text-white rounded-md opacity-0 group-hover/badge:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none shadow-xl z-30",children:N==null?void 0:N.name})]},R))})]}),u.jsxs("div",{className:"p-3 sm:p-3.5 flex flex-col flex-grow gap-2.5 text-left z-10",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"m-0 text-xs sm:text-xs md:text-sm font-black text-white uppercase tracking-tight leading-snug group-hover:text-amber-400 transition-colors break-words line-clamp-1 pr-1",children:G}),u.jsxs("div",{className:"flex items-center gap-1.5 mt-1.5",children:[u.jsx("span",{className:"w-2 h-2 rounded-full shadow-lg",style:{backgroundColor:I[0],boxShadow:`0 0 8px ${I[0]}`}}),u.jsx("span",{className:"font-mono font-bold text-[9px] uppercase text-slate-400 tracking-wider",children:s.codigo})]})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-1.5",children:[u.jsxs("div",{className:"bg-[#0b1325]/80 border border-white/[0.04] rounded-xl py-1 px-2 flex flex-col items-center justify-center hover:border-red-500/30 hover:bg-[#0b1325] transition-all",children:[u.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-slate-400",children:[u.jsx("img",{src:ol.vida,alt:"HP",className:"w-[14px] h-[14px] object-contain shrink-0"}),u.jsx("span",{className:"text-[8px] font-black uppercase tracking-wider leading-none",children:"HP"})]}),u.jsx("span",{className:"text-white font-mono font-black text-xs mt-1 tracking-tight leading-none truncate block select-all",children:s.vida})]}),u.jsxs("div",{className:"bg-[#0b1325]/80 border border-white/[0.04] rounded-xl py-1 px-2 flex flex-col items-center justify-center hover:border-sky-500/30 hover:bg-[#0b1325] transition-all",children:[u.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-slate-400",children:[u.jsx("img",{src:ol.velocidad,alt:"SPD",className:"w-[14px] h-[14px] object-contain shrink-0"}),u.jsx("span",{className:"text-[8px] font-black uppercase tracking-wider leading-none",children:"SPD"})]}),u.jsx("span",{className:"text-white font-mono font-black text-xs mt-1 tracking-tight leading-none truncate block select-all",children:s.velocidad})]}),u.jsxs("div",{className:"bg-[#0b1325]/80 border border-white/[0.04] rounded-xl py-1 px-2 flex flex-col items-center justify-center hover:border-amber-500/30 hover:bg-[#0b1325] transition-all relative",children:[u.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-slate-400",children:[u.jsx("img",{src:(h==null?void 0:h.icono)||s.tipoIcono,alt:"ATK 1",className:"w-[14px] h-[14px] object-contain shrink-0"}),u.jsx("span",{className:"text-[8px] font-black uppercase tracking-wider leading-none",children:"ATK 1"}),b&&u.jsx("span",{className:"text-[6px] text-amber-500 font-extrabold px-0.5 rounded bg-amber-500/10 border border-amber-500/20 leading-none",children:"x3"})]}),u.jsx("span",{className:`font-mono font-black text-xs mt-1 tracking-tight leading-none truncate block select-all ${b?"text-amber-400":"text-white"}`,children:k(h==null?void 0:h.valor)})]}),u.jsxs("div",{className:"bg-[#0b1325]/80 border border-white/[0.04] rounded-xl py-1 px-2 flex flex-col items-center justify-center hover:border-amber-500/30 hover:bg-[#0b1325] transition-all relative",children:[u.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-slate-400",children:[u.jsx("img",{src:(f==null?void 0:f.icono)||s.skinIcono,alt:"ATK 2",className:"w-[14px] h-[14px] object-contain shrink-0"}),u.jsx("span",{className:"text-[8px] font-black uppercase tracking-wider leading-none",children:"ATK 2"}),_&&u.jsx("span",{className:"text-[6px] text-amber-500 font-extrabold px-0.5 rounded bg-amber-500/10 border border-amber-500/20 leading-none",children:"x3"})]}),u.jsx("span",{className:`font-mono font-black text-xs mt-1 tracking-tight leading-none truncate block select-all ${_?"text-amber-400":"text-white"}`,children:k(f==null?void 0:f.valor)})]}),u.jsxs("div",{className:"col-span-2 bg-[#0b1325]/80 border border-white/[0.04] rounded-xl py-1 px-3 flex flex-col items-center justify-center hover:border-emerald-500/30 hover:bg-[#0b1325] transition-all",children:[u.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-slate-400",children:[u.jsx("img",{src:((K=s.habilidad)==null?void 0:K.icono)||"https://pokradex.org/MutantsGG/assets/ability_shield_big.png",alt:"DEF",className:"w-[14px] h-[14px] object-contain shrink-0"}),u.jsx("span",{className:"text-[8px] font-black uppercase tracking-wider leading-none",children:"DEF / HABILIDAD"})]}),u.jsx("span",{className:"text-white font-mono font-black text-xs mt-1 tracking-tight leading-none truncate block select-all",children:((O=s.habilidad)==null?void 0:O.valor)||"1,000"})]})]}),u.jsx("div",{className:"mt-auto pt-1",children:u.jsx("button",{onClick:d,className:`group/btn relative overflow-hidden w-full py-2.5 text-[10px] font-black uppercase tracking-[0.16em] transition-all flex items-center justify-center gap-2 border leading-none ${i?"bg-green-500/10 border-green-500/30 text-green-400":"bg-transparent border-white/[0.08] text-white hover:border-[var(--hover-color)] hover:bg-[var(--hover-bg)] active:scale-[0.98]"}`,style:{borderRadius:"100px","--hover-color":`${I[0]}50`,"--hover-bg":`${I[0]}12`},children:i?u.jsxs(u.Fragment,{children:[u.jsx(hl,{size:12,className:"shrink-0 text-green-400 animate-bounce"}),u.jsx("span",{children:n("mutant.verified")})]}):u.jsxs(u.Fragment,{children:[u.jsx(Su,{size:11,className:"group-hover/btn:scale-110 transition-transform shrink-0 opacity-80"}),u.jsx("span",{children:n("mutant.extract_code")})]})})})]})]})]})},Wa=()=>{const{region:s,translate:n}=Ie(),i=s!=="LATAM"&&s!=="PT"?"https://chat.whatsapp.com/IdBIvXWUPNjDLcPmBvkp1B":sp;return u.jsxs(ya.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{duration:.4},className:"panel p-6 md:p-8 rounded-3xl bg-[#0c1222]/95 border border-white/10 shadow-2xl relative overflow-hidden group max-w-4xl mx-auto w-full my-6 flex flex-col md:flex-row md:items-center justify-between gap-6 text-left",children:[u.jsx("div",{className:"absolute inset-0 bg-[#25D366]/[0.02] pointer-events-none"}),u.jsxs("div",{className:"relative z-10 flex-1",children:[u.jsx("h3",{className:"text-xl md:text-2xl font-black text-white tracking-tight leading-tight m-0 mb-2",children:n("whatsapp.title")}),u.jsx("p",{className:"text-muted text-sm md:text-base leading-relaxed opacity-80 m-0 max-w-2xl",children:n("whatsapp.desc")})]}),u.jsx("div",{className:"relative z-10 shrink-0 w-full md:w-auto flex justify-start md:justify-end",children:u.jsxs("a",{href:i,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-blue-brand hover:brightness-110 active:scale-[0.98] transition-all text-white font-black text-sm md:text-base shadow-lg shadow-blue-brand/20 hover:shadow-blue-brand/40 select-none w-full md:w-auto",children:[u.jsx(bl,{size:18,className:"shrink-0"}),u.jsx("span",{children:n("whatsapp.btn")})]})})]})};function ff(){const{region:s,translate:n}=Ie(),[i,l]=Y.useState(""),[p,m]=Y.useState([]),[d,h]=Y.useState(!1),[f,b]=Y.useState("code-az"),[_,k]=Y.useState(!0),[y,G]=Y.useState(30),M=Y.useMemo(()=>mn,[]),I=Y.useMemo(()=>Ef.split(/\r?\n/).map(R=>R.trim()).filter(Boolean).length,[]),A="text-blue-brand-2",q=Y.useMemo(()=>{const R=i.toLowerCase(),B=M.filter(D=>{const X=R===""||D.nombre.toLowerCase().includes(R)||D.codigo.toLowerCase().includes(R),F=p.length===0||(p.length===1?D.genes.includes(p[0]):D.genes[0]===p[0]&&D.genes[1]===p[1]),Z=!d||D.genes.length===1||D.genes.length===2&&D.genes[0]===D.genes[1];return X&&F&&Z});return B.sort((D,X)=>{var F,Z,it,nt,Ut,Ct;return f==="name-az"?D.nombre.localeCompare(X.nombre):f==="name-za"?X.nombre.localeCompare(D.nombre):f==="code-az"?D.codigo.localeCompare(X.codigo,void 0,{numeric:!0,sensitivity:"base"}):f==="code-za"?X.codigo.localeCompare(D.codigo,void 0,{numeric:!0,sensitivity:"base"}):f==="hp-desc"?(((F=X.stats)==null?void 0:F.hp)||0)-(((Z=D.stats)==null?void 0:Z.hp)||0):f==="atk-desc"?(((it=X.stats)==null?void 0:it.atk)||0)-(((nt=D.stats)==null?void 0:nt.atk)||0):f==="spd-desc"?(((Ut=X.stats)==null?void 0:Ut.spd)||0)-(((Ct=D.stats)==null?void 0:Ct.spd)||0):X.codigo.localeCompare(D.codigo,void 0,{numeric:!0,sensitivity:"base"})}),B},[M,i,p,f,d]),K=Y.useMemo(()=>{const R=["Apiarca","Ornitorrinco"];return M.filter(B=>R.some(D=>D.toLowerCase()===B.nombre.toLowerCase()))},[M]),O=Y.useMemo(()=>q.slice(0,y),[q,y]),N=R=>{G(30),m(B=>{const D=B.filter(X=>X===R).length;return D>0?D===2?B.filter(X=>X!==R):B.length===1?[R,R]:B.filter(X=>X!==R):B.length<2?[...B,R]:[B[1],R]})};return u.jsxs("div",{className:"flex flex-col gap-8 pb-20",children:[u.jsxs("section",{className:"relative hero !p-8 md:!p-20 overflow-hidden rounded-3xl",children:[u.jsx("div",{className:"absolute inset-0 opacity-10 bg-grid-slate-900/[0.1] pointer-events-none"}),u.jsx("div",{className:"absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-brand/20 to-transparent -rotate-12 transform translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none"}),u.jsxs("div",{className:"relative z-10",children:[u.jsxs("div",{className:"eyebrow bg-white/5 border-white/10 px-4 py-1 rounded-full inline-flex items-center gap-2 mb-6 backdrop-blur-md",children:[u.jsx(Ph,{size:14,className:"text-blue-brand-2"}),u.jsx("span",{className:"text-[10px] font-black uppercase tracking-[0.2em]",children:n("home.main_database")})]}),u.jsxs("h1",{className:"text-4xl md:text-8xl lg:text-9xl font-black mt-4 mb-6 uppercase tracking-tighter leading-[0.8] md:leading-[0.85] text-white",children:["MUTANTS ",u.jsx("br",{}),u.jsxs("span",{className:"text-blue-brand relative",children:["GLADIATORS",u.jsx("span",{className:"absolute -bottom-2 left-0 w-full h-1 bg-white/10 rounded-full"})]})]}),u.jsx("p",{className:"text-slate-400 text-sm md:text-lg max-w-2xl mx-auto md:mx-0 opacity-90 leading-relaxed font-medium",children:n("home.main_desc")})]})]}),u.jsx(Wa,{}),u.jsxs("section",{className:"panel flex flex-col gap-6 !p-6 md:!p-8 border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent rounded-3xl relative overflow-hidden group",children:[u.jsx("div",{className:"absolute top-0 left-0 w-1 h-full bg-blue-brand"}),u.jsx("div",{className:"flex items-center justify-between relative z-10",children:u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx(Zk,{size:20,className:"text-blue-brand-2"}),u.jsx("h2",{className:"text-xl md:text-2xl font-black uppercase tracking-tighter m-0 text-white",children:n("home.featured_mutants")})]})}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative z-10",children:K.map((R,B)=>u.jsx(bf,{mutant:R},B))})]}),u.jsxs("section",{className:"flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-[2.5rem] border border-white/10 bg-[#0a1224]/50 backdrop-blur-2xl relative overflow-hidden",children:[u.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-grid-slate-900/[0.05] pointer-events-none"}),u.jsxs("div",{className:"flex items-center gap-6 relative z-10",children:[u.jsxs("div",{className:"relative group/avatar",children:[u.jsx("div",{className:"absolute inset-0 bg-blue-brand blur-xl opacity-20 group-hover:opacity-40 transition-opacity"}),u.jsx("img",{src:"https://github.com/luqueSmith/MGG/blob/main/img/perfil.png?raw=true",alt:"Smith Luque",className:"w-20 h-20 md:w-24 md:h-24 rounded-[2rem] border-4 border-white/10 shadow-2xl relative z-10 object-cover group-hover:rotate-3 transition-transform"}),u.jsx("div",{className:"absolute -bottom-1 -right-1 w-6 h-6 bg-green-brand border-4 border-[#050a14] rounded-full z-20"})]}),u.jsxs("div",{className:"text-left",children:[u.jsx("h3",{className:"m-0 text-2xl font-black text-white uppercase tracking-tighter",children:"Smith Luque"}),u.jsxs("div",{className:"flex flex-col gap-1",children:[u.jsx("p",{className:"text-blue-brand-2 text-xs m-0 font-black uppercase tracking-widest leading-none",children:"Full Stack Developer"}),u.jsx("div",{className:"px-2 py-0.5 rounded bg-white/5 border border-white/5 inline-flex self-start",children:u.jsx("span",{className:"text-[8px] font-bold text-muted uppercase tracking-[0.2em]",children:"Founder of Sistema Mutodex"})})]})]})]}),u.jsxs("div",{className:"flex gap-8 items-center px-8 w-full md:w-auto border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 relative z-10",children:[u.jsxs("div",{className:"flex-1 md:flex-none",children:[u.jsx("span",{className:"block text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-2",children:n("home.filtered")}),u.jsxs("div",{className:"flex items-baseline gap-1",children:[u.jsx("strong",{className:"text-4xl font-black text-blue-brand-2 leading-none",children:q.length}),u.jsx("span",{className:"text-xs font-bold text-white/20 uppercase tracking-widest",children:n("home.active")})]})]}),u.jsxs("div",{className:"flex-1 md:flex-none",children:[u.jsx("span",{className:"block text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-2",children:n("home.total_base")}),u.jsxs("div",{className:"flex items-baseline gap-1",children:[u.jsx("strong",{className:"text-4xl font-black text-white/50 leading-none",children:I}),u.jsx("span",{className:"text-xs font-bold text-muted/20 uppercase tracking-widest",children:n("home.total")})]})]})]})]}),u.jsxs("section",{className:"panel flex flex-col gap-6 !p-6 md:!p-8 border border-white/10 relative overflow-hidden group",children:[u.jsx("div",{className:"absolute inset-0 opacity-5 pointer-events-none bg-grid-slate-900/[0.1] bg-[bottom_1px_center] [mask-image:linear-gradient(to_bottom,white,transparent)]"}),u.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:"w-1.5 h-6 bg-blue-brand rounded-full"}),u.jsx("h2",{className:"text-xl md:text-2xl font-black uppercase tracking-tighter m-0",children:n("home.explore_catalog")})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("div",{className:"px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-bold text-muted uppercase tracking-widest leading-none",children:"Control Panel v2.0"}),(p.length>0||d)&&u.jsx("button",{onClick:()=>{m([]),h(!1)},className:"text-[10px] uppercase font-black text-white bg-red-brand/40 px-3 py-1 rounded-full hover:bg-red-brand transition-all active:scale-95 shadow-lg shadow-red-brand/20",children:n("home.reset_engine")})]})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10",children:[u.jsx("div",{className:"lg:col-span-8 flex flex-col gap-6",children:u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(Yh,{size:14,className:A}),u.jsx("span",{className:"text-[11px] uppercase font-black tracking-[0.2em] opacity-60",children:n("home.genetic_config")})]}),u.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3",children:fl.map(R=>{const B=p.filter(X=>X===R.id).length,D=B>0;return p.indexOf(R.id),u.jsxs("button",{onClick:()=>N(R.id),className:`flex items-center gap-3 p-3 rounded-xl border-2 transition-all relative group/gene overflow-hidden ${D?"bg-blue-brand/20 border-blue-brand text-white shadow-[0_0_20px_rgba(37,99,235,0.2)]":"bg-white/[0.02] border-white/10 text-slate-400 hover:border-white/30 hover:bg-white/[0.05]"}`,children:[u.jsx("div",{className:`p-1.5 rounded-lg transition-all ${D?"bg-blue-brand shadow-lg":"bg-white/5 group-hover/gene:scale-110"}`,children:u.jsx("img",{src:R.image,alt:"",className:`w-6 h-6 object-contain ${D?"brightness-125":"grayscale opacity-50"}`})}),u.jsxs("div",{className:"flex flex-col items-start",children:[u.jsx("span",{className:"text-[11px] font-black uppercase tracking-tight line-clamp-1",children:R.name}),u.jsx("span",{className:"text-[8px] font-bold opacity-40 uppercase tracking-widest",children:n(D?B===2?"gene.dominant":"gene.active":"gene.inactive")})]}),D&&u.jsx("div",{className:"absolute top-1 right-1 flex gap-0.5",children:[...Array(B)].map((X,F)=>u.jsx("div",{className:"w-1 h-3 bg-blue-brand-2 rounded-full"},F))})]},R.id)})})]})}),u.jsxs("div",{className:"lg:col-span-4 flex flex-col gap-6 lg:border-l lg:border-white/10 lg:pl-8",children:[u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(Vu,{size:14,className:A}),u.jsx("span",{className:"text-[11px] uppercase font-black tracking-[0.2em] opacity-60",children:n("home.search_engine")})]}),u.jsxs("div",{className:"relative group/search",children:[u.jsx("input",{value:i,onChange:R=>{l(R.target.value),G(30)},placeholder:n("home.search_placeholder"),className:"w-full bg-white/[0.04] border-2 border-white/10 rounded-2xl pl-4 pr-12 py-4 text-sm font-bold placeholder:text-white/20 outline-none focus:border-blue-brand/50 transition-all focus:bg-white/[0.06] focus:shadow-2xl focus:shadow-blue-brand/5"}),u.jsx("div",{className:"absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-white/5 text-white/40",children:u.jsx(Vu,{size:16})})]})]}),u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(Bk,{size:14,className:A}),u.jsx("span",{className:"text-[11px] uppercase font-black tracking-[0.2em] opacity-60",children:n("home.sort_filters")})]}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsxs("div",{className:"relative group/sort",children:[u.jsxs("select",{value:f,onChange:R=>{b(R.target.value),G(30)},className:"w-full bg-white/[0.04] border-2 border-white/10 rounded-2xl px-5 py-4 text-xs font-black uppercase tracking-widest outline-none text-white focus:border-blue-brand/50 cursor-pointer appearance-none focus:bg-white/[0.06]",children:[u.jsx("option",{value:"name-az",className:"bg-[#0a1224]",children:n("home.sort_az")}),u.jsx("option",{value:"name-za",className:"bg-[#0a1224]",children:n("home.sort_za")}),u.jsx("option",{value:"code-az",className:"bg-[#0a1224]",children:n("home.sort_code_asc")}),u.jsx("option",{value:"code-za",className:"bg-[#0a1224]",children:n("home.sort_code_desc")}),u.jsx("option",{value:"hp-desc",className:"bg-[#0a1224]",children:n("home.sort_hp_desc")}),u.jsx("option",{value:"atk-desc",className:"bg-[#0a1224]",children:n("home.sort_atk_desc")}),u.jsx("option",{value:"spd-desc",className:"bg-[#0a1224]",children:n("home.sort_spd_desc")})]}),u.jsx(uk,{size:16,className:"absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-40"})]}),u.jsxs("button",{className:`group relative overflow-hidden w-full py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 border-2 ${d?"bg-blue-brand/20 border-blue-brand text-blue-brand-2":"bg-white/5 border-white/10 text-white/40 hover:border-white/20"}`,onClick:()=>h(!d),children:[u.jsx(Ph,{size:14,className:`${d?"animate-pulse":""}`}),n("home.single_gene_only")]}),u.jsxs("button",{className:`group relative overflow-hidden w-full py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 border-2 ${_?"bg-blue-brand/10 border-blue-brand/30 text-blue-brand-2":"bg-white/5 border-white/10 text-white/40 hover:border-white/20"}`,onClick:()=>k(!_),children:[u.jsx(Yh,{size:14,className:`${_?"animate-pulse":""}`}),n(_?"home.hide":"home.show")]})]})]})]})]})]}),u.jsx("section",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4",children:_?q.length>0?u.jsxs(u.Fragment,{children:[O.map((R,B)=>u.jsx(bf,{mutant:R},B)),y<q.length&&u.jsx("div",{className:"col-span-full py-8 flex justify-center",children:u.jsx("button",{onClick:()=>G(R=>R+30),className:"px-8 py-3 bg-blue-brand/10 border-2 border-blue-brand/30 rounded-2xl text-blue-brand-2 font-black uppercase tracking-widest hover:bg-blue-brand/20 transition-all active:scale-95",children:n("home.load_more_rem",{rem:q.length-y})})})]}):u.jsx("div",{className:"col-span-full py-12 text-center text-muted border border-line rounded-2xl bg-panel",children:n("home.no_results")}):u.jsx("div",{className:"col-span-full py-12 text-center text-muted border border-line rounded-2xl bg-panel",children:n("home.hidden_results")})})]})}const h5="https://mutodex.blogspot.com/feeds/posts/default?alt=json-in-script&max-results=8";function b5(s){if(!s)return"Reciente";const n=new Date(s);return Number.isNaN(n.getTime())?s:n.toLocaleDateString("es-PE",{year:"numeric",month:"short",day:"numeric"})}function f5(s){return String(s||"").replace(/<script[\s\S]*?<\/script>/gi,"").replace(/<style[\s\S]*?<\/style>/gi,"").replace(/<[^>]+>/g," ").replace(/&nbsp;/gi," ").replace(/&amp;/gi,"&").replace(/\s+/g," ").trim()}function _5(s){const n=String(s||"").match(/<img[^>]+src="([^"]+)"/i);return n?n[1]:""}function x5(s){var h,f,b,_,k,y;const n=((h=s.title)==null?void 0:h.$t)||s.title||"Sin título",i=((f=s.published)==null?void 0:f.$t)||s.published||"",l=((b=s.content)==null?void 0:b.$t)||s.content||((_=s.summary)==null?void 0:_.$t)||s.summary||"",p=Array.isArray(s.link)?((k=s.link.find(G=>G.rel==="alternate"))==null?void 0:k.href)||((y=s.link[0])==null?void 0:y.href)||"#":s.url||s.href||"#",m=_5(l)||s.image||"",d=f5(l);return{title:n,published:i,dateLabel:b5(i),excerpt:d.slice(0,220)+(d.length>220?"…":""),excerptFull:d,rawText:d,link:p,image:m}}function k5(s){const n=String(s||"").replace(/\s+/g," ").trim();if(!n)return[];const i=["ANUNCIOS:","OFERTAS:","MINI EVENTO:","CRONOLOGIA:"],l=[];for(let p=0;p<i.length;p++){const m=i[p],d=n.indexOf(m);if(d===-1)continue;let h=n.length;for(let b=p+1;b<i.length;b++){const _=n.indexOf(i[b],d+m.length);if(_!==-1){h=_;break}}const f=n.slice(d+m.length,h).trim();f&&l.push({title:m.replace(":",""),body:f.length>320?f.slice(0,320)+"…":f})}return l.length||l.push({title:"Resumen",body:n.length>420?n.slice(0,420)+"…":n}),l.slice(0,4)}function y5(){const{region:s,translate:n}=Ie(),i=s==="USD",[l,p]=Y.useState([]),[m,d]=Y.useState(!0),[h,f]=Y.useState(!1);return Y.useEffect(()=>{let b=null;const _=`mggFeedCallback_${Date.now()}`,k=()=>{b&&b.parentNode&&b.parentNode.removeChild(b);try{window[_]=void 0}catch{}};return window[_]=y=>{var G;k();try{const I=(((G=y==null?void 0:y.feed)==null?void 0:G.entry)||[]).map(x5);p(I),d(!1)}catch{f(!0),d(!1)}},b=document.createElement("script"),b.src=`${h5}&callback=${_}`,b.onerror=()=>{k(),f(!0),d(!1)},document.body.appendChild(b),k},[]),u.jsxs("div",{className:"flex flex-col gap-6",children:[u.jsxs("section",{className:"hero transition-all duration-700 !p-6 md:!p-12 relative overflow-hidden bg-gradient-to-br from-blue-brand/10 via-blue-brand-2/5 to-transparent border-blue-brand-2/20 shadow-blue-brand-2/5",children:[u.jsxs("div",{className:"eyebrow scale-90 md:scale-100",children:[u.jsx(Sf,{size:14,className:"text-blue-brand-2"}),u.jsx("span",{children:i?"News Feed":"Portal informativo"})]}),u.jsxs("h1",{className:"text-3xl md:text-6xl font-black mt-4 mb-4 uppercase tracking-tighter leading-[0.9] md:leading-[0.95] text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-brand-2/80 to-blue-brand-2",children:[i?"NEWS":"NOVEDADES"," ",u.jsx("span",{className:"text-blue-brand-2 block",children:"MUTODEX"})]}),u.jsx("p",{className:"text-muted text-sm md:text-base max-w-2xl mx-auto px-4 opacity-80",children:i?"Latest news delivered directly from the official Mutodex blog.":"Noticias actualizadas directamente desde el blog oficial de Mutodex."})]}),u.jsx(Wa,{}),u.jsxs("div",{className:"grid lg:grid-cols-[1fr_350px] gap-6 items-start",children:[u.jsx("section",{className:"flex flex-col gap-5 order-2 lg:order-1",children:m?u.jsx("div",{className:"panel text-center py-12 text-muted bg-blue-brand/5 border-blue-brand/20",children:i?"Loading posts...":"Cargando publicaciones…"}):h?u.jsx("div",{className:"panel text-center py-12 text-muted bg-blue-brand/5 border-blue-brand/20",children:i?"Could not load posts at this moment.":"No se pudieron cargar las publicaciones en este momento."}):l.length===0?u.jsx("div",{className:"panel text-center py-12 text-muted bg-blue-brand/5 border-blue-brand/20",children:i?"No posts found.":"No se encontraron publicaciones."}):l.map((b,_)=>{const k=k5(b.excerptFull||b.rawText||b.excerpt||"");return u.jsxs("article",{className:"panel p-0 overflow-hidden flex flex-col group transition-all duration-300 border-white/10 hover:border-blue-brand-2/30 shadow-lg hover:shadow-blue-brand-2/[0.04]",children:[u.jsxs("div",{className:"p-5 md:p-7 pb-0",children:[u.jsxs("div",{className:"flex items-center gap-2 font-mono font-bold text-[10px] uppercase tracking-widest mb-3 text-blue-brand-2",children:[u.jsx(rk,{size:12}),b.dateLabel]}),u.jsx("h2",{className:"m-0 text-xl md:text-3xl font-bold leading-tight tracking-tight",children:u.jsx("a",{href:b.link,target:"_blank",rel:"noopener noreferrer",className:"transition-colors hover:text-blue-brand-2",children:b.title})})]}),b.image&&u.jsx("div",{className:"px-5 md:px-7 mt-5",children:u.jsx("div",{className:"relative aspect-[16/8] overflow-hidden rounded-xl border border-white/10",children:u.jsx("img",{className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",src:b.image,alt:b.title,loading:"lazy",referrerPolicy:"no-referrer"})})}),u.jsx("div",{className:"p-5 md:p-7 pt-5 grid gap-4",children:k.map((y,G)=>u.jsxs("div",{className:"border-l-2 pl-4 py-1 border-blue-brand/30",children:[u.jsx("h3",{className:"m-0 mb-1.5 text-[11px] md:text-xs uppercase tracking-widest font-black text-white/90",children:y.title}),u.jsx("p",{className:"m-0 text-muted text-sm md:text-base leading-relaxed opacity-90",children:y.body})]},G))}),u.jsx("div",{className:"p-5 md:p-7 pt-0 mt-auto",children:u.jsxs("a",{className:"btn btn-primary w-full md:w-auto transition-all",target:"_blank",rel:"noopener noreferrer",href:b.link,children:[u.jsx(Fa,{size:16}),u.jsx("span",{children:i?"Read on Mutodex":"Leer en Mutodex"})]})})]},_)})}),u.jsxs("aside",{className:"flex flex-col gap-6 order-1 lg:order-2",children:[u.jsxs("section",{className:"panel !p-5 flex flex-col gap-4 border border-white/5 bg-blue-brand/2",children:[u.jsxs("div",{className:"kv-label text-[10px] opacity-60 flex items-center gap-2",children:[u.jsx(Ek,{size:12}),i?"Quick Access":"Acceso Rápido"]}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2",children:[{name:i?"Official Mutant List":"Lista oficial: mutantes",url:"https://mutodex.blogspot.com/p/lista-oficial-mutantes.html"},{name:i?"Secret Breeding":"Hibridaciones secretas",url:"https://mutodex.blogspot.com/p/hibridaciones-secretas.html"},{name:i?"Attack/HP Orbs":"Orbes de ataque/hp",url:"https://mutodex.blogspot.com/p/orbes.html"},{name:i?"EVO Discount":"Descuento de EVO",url:"https://mutodex.blogspot.com/p/descuento-de-evo.html"},{name:i?"Stats Calculator":"Calculadora stats",url:"https://mutodex.blogspot.com/p/calculadora-de-stats.html"}].map((b,_)=>u.jsxs("a",{className:"flex items-center justify-between p-3 rounded-xl bg-white/3 border border-line text-xs font-medium hover:border-blue-brand-2/50 hover:bg-blue-brand-2/10 transition-all duration-300",target:"_blank",rel:"noopener noreferrer",href:b.url,children:[b.name,u.jsx(Fa,{size:12,className:"opacity-40"})]},_))})]}),u.jsxs("section",{className:"panel !p-5 flex flex-col gap-4 border border-white/5 bg-blue-brand/2",children:[u.jsx("div",{className:"kv-label text-[10px] opacity-60",children:i?"Blog Entries":"Entradas de Blog"}),u.jsx("div",{className:"flex flex-col gap-2",children:m?u.jsx("div",{className:"text-muted text-xs animate-pulse",children:i?"Synchronizing...":"Sincronizando..."}):l.slice(0,6).map((b,_)=>u.jsxs("a",{className:"block p-3 rounded-xl bg-white/3 border border-line transition-all duration-300 hover:border-blue-brand-2/40 group",target:"_blank",rel:"noopener noreferrer",href:b.link,children:[u.jsx("div",{className:"text-[9px] font-bold mb-1 opacity-70 text-blue-brand-2",children:b.dateLabel}),u.jsx("div",{className:"text-xs font-bold text-white/90 line-clamp-1 group-hover:text-blue-brand-2",children:b.title})]},_))})]}),u.jsx("div",{className:"panel !p-4 border border-blue-brand/20 bg-blue-brand/5 shadow-inner",children:u.jsx("p",{className:"text-muted text-[10px] m-0 leading-relaxed",children:i?"Data is loaded via JSONP from Blogger to avoid CORS. If news is not visible, check your connection.":"Los datos se cargan vía JSONP desde Blogger para evitar problemas de CORS. Si no ves las noticias, revisa tu conexión."})})]})]})]})}const vu=({service:s,isOffer:n,isOther:i,variant:l="default"})=>{const{region:p,multiplier:m,translate:d,countryCode:h}=Ie(),f=p!=="LATAM",b=f&&s.nombreEn?s.nombreEn:s.nombre,_=f&&s.descripcionEn?s.descripcionEn:s.descripcion,k=f&&s.featuresEn?s.featuresEn:s.features,y=h?wf.find(O=>O.id.toUpperCase()===h.toUpperCase()):null,G="$";let M="";const I=s.precio;I>0?M=(I/3.7*1.15*1.1*.9).toFixed(2):M="0.00",(()=>{const O=h==null?void 0:h.toUpperCase();return O==="PE"?"🇵🇪":O==="US"?"🇺🇸":y?y.flag:O?"🌎":"🇵🇪"})();const q=()=>{const O=s.precio===0;let N="";O?p==="LATAM"?N="GRATIS":p==="PT"?N="GRÁTIS":p==="FR"?N="GRATUIT":p==="DE"?N="KOSTENLOS":N="FREE":N=`${G}${M}`;let R="";p==="LATAM"?R=`¡Hola! Me interesa el servicio: ${b} (ID: ${s.id}) - Precio: ${N}`:p==="PT"?R=`Olá! Estou interessado no serviço: ${b} (ID: ${s.id}) - Preço: ${N}`:p==="FR"?R=`Bonjour! Je suis intéressé par le service: ${b} (ID: ${s.id}) - Prix: ${N}`:p==="DE"?R=`Hallo! Ich habe Interesse an dem Service: ${b} (ID: ${s.id}) - Preis: ${N}`:R=`Hello! I'm interested in: ${b} (ID: ${s.id}) - Price: ${N}`,window.open(`https://wa.me/${Vf}?text=${encodeURIComponent(R)}`,"_blank")},K=d("services.buy");return l==="compact"?u.jsxs("article",{className:"panel !p-3 flex items-center justify-between gap-4 group transition-all duration-300 bg-white/[0.02] border hover:border-blue-brand/50",children:[u.jsxs("div",{className:"flex items-center gap-3 flex-1 min-w-0",children:[u.jsx("div",{className:"w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden shrink-0 bg-white/5 border border-white/10 group-hover:border-blue-brand/30 transition-colors",children:s.imagen?u.jsx("img",{src:s.imagen,alt:"",className:"w-full h-full object-cover"}):u.jsx("div",{className:"w-full h-full flex items-center justify-center text-blue-brand-2",children:u.jsx(yo,{size:20})})}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsx("h4",{className:"m-0 text-xs md:text-sm font-black uppercase text-white truncate group-hover:text-blue-brand-2 transition-colors",children:b}),u.jsx("div",{className:"text-[10px] md:text-[11px] font-black text-blue-brand-2 mt-0.5",children:s.precio===0?"GRATIS":`${G} ${M}`})]})]}),u.jsxs("button",{onClick:q,className:"btn btn-sm !px-3 h-8 md:h-9 border-transparent shrink-0 bg-blue-brand/10 text-blue-brand-2 hover:bg-blue-brand hover:text-white",children:[u.jsx(yo,{size:14,className:"md:size-4"}),u.jsx("span",{className:"hidden sm:inline text-[10px] font-black uppercase",children:K})]})]}):u.jsxs("article",{className:`card flex flex-col group transition-all duration-300 hover:border-blue-brand/50 ${n?"outline-1 outline-blue-brand/35 border-blue-brand/30 bg-blue-brand/5":""}`,children:[s.imagen&&u.jsxs("div",{className:"relative overflow-hidden aspect-[16/10]",children:[u.jsx("img",{src:s.imagen,alt:b,className:"w-full h-full object-cover block transition-transform duration-500 group-hover:scale-110"}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"})]}),u.jsxs("div",{className:"card-body p-4 md:p-5 flex flex-col flex-1",children:[u.jsx("h3",{className:"m-0 mb-2 text-base md:text-lg font-black uppercase tracking-tight text-white line-clamp-1 group-hover:text-blue-brand-2 transition-colors",children:b}),u.jsx("p",{className:"text-muted text-sm mb-4 leading-relaxed line-clamp-2 md:line-clamp-none",children:_}),u.jsx("div",{className:"flex flex-wrap gap-2 mb-5",children:k==null?void 0:k.map((O,N)=>u.jsx("span",{className:"px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-slate-400 text-[10px] md:text-[11px] font-bold uppercase",children:O},N))}),u.jsxs("div",{className:"flex items-end justify-between mt-auto pt-4 border-t border-white/5",children:[u.jsx("div",{className:"text-xl md:text-2xl font-black tracking-tighter text-white",children:s.precio===0?u.jsx("span",{className:"text-green-brand",children:"GRATIS"}):`${G} ${M}`}),u.jsxs("div",{className:"flex gap-2",children:[s.saberMas&&u.jsx("a",{href:s.saberMas,target:"_blank",rel:"noopener noreferrer",className:"btn btn-sm px-3 bg-white/5 border-white/5 text-slate-400 hover:text-white",title:"Saber más",children:u.jsx(Fa,{size:16})}),u.jsxs("button",{className:`btn btn-sm px-4 ${n?"btn-primary":i?"bg-green-brand text-white":"bg-blue-brand/20 text-blue-brand-2 hover:bg-blue-brand hover:text-white"}`,onClick:q,children:[s.precio===0?u.jsx(Gk,{size:16}):u.jsx(yo,{size:16}),u.jsx("span",{className:"text-[11px] font-black uppercase",children:s.precio===0?"Ver":K})]})]})]})]})]})};function G5(){const{region:s,countryCode:n,setCountry:i,translate:l}=Ie(),p=s==="USD",m=s!=="LATAM"&&s!=="PT"?"https://chat.whatsapp.com/IdBIvXWUPNjDLcPmBvkp1B":sp,d=ou.filter(b=>b.categoria==="OFFER"),h=ou.filter(b=>b.categoria==="MAIN"),f=ou.filter(b=>b.categoria==="OTHER");return u.jsxs("div",{className:"flex flex-col gap-8 pb-20",children:[u.jsxs("section",{className:"relative hero !p-10 md:!p-24 overflow-hidden rounded-[3rem]",children:[u.jsx("div",{className:"absolute inset-0 opacity-10 bg-grid-slate-900/[0.1] pointer-events-none"}),u.jsx("div",{className:"absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-brand/20 to-transparent -rotate-12 transform translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none"}),u.jsxs("div",{className:"relative z-10",children:[u.jsxs("div",{className:"eyebrow bg-white/5 border-white/10 px-4 py-1 rounded-full inline-flex items-center gap-2 mb-6 backdrop-blur-md",children:[u.jsx(yo,{size:14,className:"text-blue-brand-2"}),u.jsx("span",{className:"text-[10px] font-black uppercase tracking-[0.2em]",children:p?"Premium Hub":"Centro de Servicios"})]}),u.jsxs("h1",{className:"text-4xl md:text-8xl lg:text-9xl font-black mt-4 mb-6 uppercase tracking-tighter leading-[0.8] md:leading-[0.85] text-white",children:[l("nav.servicios").split(" ")[0]," ",u.jsx("br",{}),u.jsxs("span",{className:"text-blue-brand relative",children:[l("nav.servicios").split(" ")[1]||"PREMIUM",u.jsx("span",{className:"absolute -bottom-2 left-0 w-full h-1 bg-white/10 rounded-full"})]})]}),u.jsx("p",{className:"text-slate-400 text-sm md:text-lg max-w-2xl mx-auto md:mx-0 opacity-90 leading-relaxed font-medium",children:l("services.subtitle")})]})]}),u.jsxs("section",{className:"panel !p-8 md:!p-12 relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-brand/10 to-transparent border-blue-brand/20",children:[u.jsx("div",{className:"absolute inset-0 opacity-5 bg-grid-tech pointer-events-none"}),u.jsxs("div",{className:"flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10",children:[u.jsxs("div",{className:"text-center lg:text-left space-y-3",children:[u.jsx("h3",{className:"m-0 text-3xl font-black uppercase tracking-tighter text-white",children:p?"Need Expert Assistance?":"¿Tienes dudas?"}),u.jsx("p",{className:"text-slate-400 m-0 text-sm md:text-base font-medium max-w-xl",children:p?"Chat with our command center directly via WhatsApp for instant support.":"Escríbeme directamente por WhatsApp o entra al grupo de ayuda para soporte inmediato."})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto min-w-[min(400px,100%)]",children:[u.jsxs("a",{className:"group/btn relative overflow-hidden py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 bg-blue-brand text-white shadow-xl shadow-blue-brand/40 hover:scale-105 active:scale-95",target:"_blank",rel:"noopener noreferrer",href:`https://wa.me/${Vf}`,children:[u.jsx(qk,{size:20,className:"group-hover/btn:-translate-y-1 transition-transform"}),u.jsx("span",{children:p?"Direct Command":"WhatsApp Directo"})]}),u.jsxs("a",{className:"group/btn relative overflow-hidden py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 bg-white/5 border-2 border-white/10 text-white hover:bg-white/10 active:scale-95",target:"_blank",rel:"noopener noreferrer",href:m,children:[u.jsx(bl,{size:20,className:"group-hover/btn:scale-110 transition-transform"}),u.jsx("span",{children:l("whatsapp.btn")})]})]})]})]}),u.jsxs("div",{className:"space-y-12",children:[u.jsxs("section",{className:"flex flex-col gap-6",children:[u.jsxs("div",{className:"flex items-center gap-4",children:[u.jsx("div",{className:"w-2 h-8 bg-blue-brand rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]"}),u.jsx("h2",{className:"text-2xl font-black uppercase tracking-tighter m-0 text-white",children:p?"Limited Time Offers":"Ofertas Especiales"}),u.jsx("div",{className:"h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:d.map(b=>u.jsx(vu,{service:b,isOffer:!0},b.id))})]}),u.jsxs("section",{className:"flex flex-col gap-6",children:[u.jsxs("div",{className:"flex items-center gap-4",children:[u.jsx("div",{className:"w-2 h-8 bg-blue-brand-2 rounded-full opacity-50"}),u.jsx("h2",{className:"text-2xl font-black uppercase tracking-tighter m-0 text-white",children:p?"Core Protocols":"Servicios Principales"}),u.jsx("div",{className:"h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:h.map(b=>u.jsx(vu,{service:b,variant:"compact"},b.id))})]}),u.jsxs("section",{className:"flex flex-col gap-6",children:[u.jsxs("div",{className:"flex items-center gap-4",children:[u.jsx("div",{className:"w-2 h-8 bg-slate-700 rounded-full"}),u.jsx("h2",{className:"text-2xl font-black uppercase tracking-tighter m-0 text-white",children:p?"Expansion Packs":"Otros Servicios"}),u.jsx("div",{className:"h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:f.map(b=>u.jsx(vu,{service:b,isOther:!0},b.id))})]})]}),u.jsxs("section",{className:"flex flex-col gap-8 mt-12 pb-12",children:[u.jsxs("div",{className:"flex items-center gap-4 justify-center",children:[u.jsx("div",{className:"h-px w-10 md:w-20 bg-gradient-to-r from-transparent to-blue-brand"}),u.jsx("h2",{className:"text-xl md:text-3xl font-black uppercase tracking-tighter m-0 text-white text-center",children:l("services.payment_methods")}),u.jsx("div",{className:"h-px w-10 md:w-20 bg-gradient-to-l from-transparent to-blue-brand"})]}),u.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-5 gap-6",children:i2.map((b,_)=>u.jsxs("article",{className:"group relative flex flex-col p-6 bg-[#0a1224] border-2 border-white/5 rounded-[2rem] transition-all hover:border-blue-brand/50 hover:-translate-y-2",children:[u.jsx("div",{className:"absolute inset-0 bg-blue-brand/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]"}),u.jsx("div",{className:"w-full aspect-video flex items-center justify-center p-3 relative z-10",children:u.jsx("img",{src:b.logo,alt:b.name,className:"max-w-[80%] max-h-[80%] object-contain group-hover:scale-110 transition-transform duration-500"})}),u.jsxs("div",{className:"mt-4 text-center relative z-10 w-full overflow-hidden",children:[u.jsx("span",{className:"text-[11px] block font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-blue-brand-2 transition-colors mb-2",children:b.name}),u.jsx("p",{className:"text-[9px] text-slate-500 font-bold m-0 leading-relaxed italic opacity-80 line-clamp-2",children:(p?b.info:b.infoEs)||b.info})]})]},_))}),u.jsxs("div",{className:"panel !p-6 flex flex-col md:flex-row items-center gap-6 bg-blue-brand/5 border-blue-brand/20 relative overflow-hidden",children:[u.jsx("div",{className:"absolute inset-0 bg-grid-tech opacity-5 pointer-events-none"}),u.jsx("div",{className:"w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 bg-blue-brand/20 text-blue-brand border border-blue-brand/30 shadow-xl relative z-10",children:u.jsx(_k,{size:28})}),u.jsxs("p",{className:"m-0 text-xs md:text-sm text-slate-400 font-medium leading-relaxed relative z-10",children:[u.jsx("strong",{className:"text-white uppercase tracking-widest mr-2",children:p?"Secure Transmission:":"Información de Pago:"})," ",p?"Payments are coordinated directly via WhatsApp to ensure security. We will provide payment details after selection.":"Los pagos son coordinados directamente vía WhatsApp para garantizar la seguridad de la transacción. Al elegir un método, te proporcionaremos los datos necesarios."]})]})]})]})}const v5=[0,0,0,0,0,2e4,3e4,38700,49e3,1e5,15e4,174e3,204e3,237e3,76e4,11e5,157e4,235e4,262e4,403e4,445e4,488e4,533e4,581e4,882e4,954e4,103e5,111e5,119e5,181e5,194e5,206e5,22e6,233e5,37e6,392e5,414e5,437e5,46e6,484e5,508e5,533e5,559e5,585e5,612e5,64e6,668e5,697e5,726e5,756e5,787e5,818e5,849e5,882e5,915e5,948e5,982e5,102e6,105e6,109e6,113e6,116e6,12e7,124e6,128e6,132e6,136e6,14e7,144e6,148e6,152e6,157e6,161e6,166e6,17e7,175e6,179e6,184e6,189e6,194e6,198e6,203e6,208e6,213e6,218e6,224e6,229e6,234e6,24e7,245e6,25e7,256e6,262e6,267e6,273e6,279e6,285e6,29e7,296e6,302e6,308e6,315e6,321e6,327e6,333e6,34e7,346e6,353e6,359e6,366e6,373e6,379e6,386e6,393e6,4e8,407e6,414e6,421e6,428e6,435e6,443e6,45e7,458e6,465e6,473e6,48e7,488e6,495e6,503e6,511e6,519e6,527e6,535e6,543e6,551e6,559e6,568e6,576e6,584e6,593e6,601e6,61e7,618e6,627e6,636e6,645e6,653e6,662e6,671e6,68e7,69e7,699e6,708e6,717e6,727e6,736e6,745e6,755e6,764e6,774e6,779e6,784e6,789e6,793e6,798e6,803e6,808e6,813e6,818e6,813e6,818e6,823e6,827e6,832e6,837e6,842e6,847e6,852e6,856e6,861e6,866e6,871e6,876e6,881e6,885e6,89e7,895e6,9e8,905e6,91e7,914e6,919e6,924e6,929e6,934e6,939e6,943e6,948e6,953e6,958e6,963e6,968e6,973e6,977e6,982e6,987e6,992e6,997e6,1e9,101e7,101e7,102e7,102e7,103e7,103e7,104e7,104e7,105e7,105e7,105e7,106e7,106e7,107e7,107e7,108e7,108e7,109e7,109e7,11e8,11e8,111e7,111e7,112e7,112e7,113e7,113e7,114e7,114e7,115e7,115e7,116e7,116e7,117e7,117e7,118e7,118e7,119e7,119e7,12e8,12e8,12e8,121e7,121e7,122e7,122e7,123e7,123e7,124e7,124e7,125e7,125e7,126e7,126e7,127e7,127e7,128e7,128e7,129e7,129e7,13e8,13e8,131e7,131e7,132e7,132e7,133e7,133e7,134e7,134e7,135e7,135e7,135e7,136e7,136e7,137e7,137e7,138e7,138e7,139e7,139e7,14e8,14e8,141e7,141e7,142e7,142e7,143e7,143e7,144e7,144e7,145e7,145e7,146e7,146e7,147e7,147e7,148e7,148e7,149e7,149e7,15e8,15e8,15e8,151e7,151e7,152e7,152e7,153e7,153e7,154e7,154e7,155e7,155e7,156e7,156e7,157e7,157e7,158e7,158e7,159e6],M5=[0,0,0,0,0,5,8,10,12,25,38,44,51,59,190,275,393,588,655,1008,1113,1220,1333,1453,2205,2385,2575,2775,2975,3e3],_f=328,Mu=159e7,xf=30,Tu=3e3,kf={math_tool:{LATAM:"Herramienta de cálculo",USD:"Math Tool",PT:"Ferramenta de cálculo",FR:"Outil de calcul",DE:"Berechnungstool"},calculator:{LATAM:"CALCULADORA",USD:"CALCULATOR",PT:"CALCULADORA",FR:"CALCULATEUR",DE:"RECHNER"},hero_desc:{LATAM:"Calcula hasta qué EVO puedes subir según tus recursos y el descuento.",USD:"Calculate your maximum EVO based on your resources and active discounts.",PT:"Calcule o EVO máximo que você pode atingir com base em seus recursos e descontos.",FR:"Calculez votre EVO maximum en fonction de vos ressources et des réductions.",DE:"Berechnen Sie Ihr maximales EVO basierend auf Ihren Ressourcen und Rabatten."},current_evo:{LATAM:"EVO actual",USD:"Current EVO",PT:"EVO atual",FR:"EVO actuel",DE:"Aktuelles EVO"},available_credits:{LATAM:"Créditos disponibles",USD:"Available Credits",PT:"Créditos disponíveis",FR:"Crédits disponibles",DE:"Verfügbare Credits"},available_gold:{LATAM:"Oro disponible",USD:"Available Gold",PT:"Ouro disponível",FR:"Or disponible",DE:"Verfügbares Gold"},applied_discount:{LATAM:"Descuento aplicado",USD:"Applied Discount",PT:"Desconto aplicado",FR:"Réduction appliquée",DE:"Angewandter Rabatt"},calculate_evo:{LATAM:"Calcular EVO",USD:"Calculate EVO",PT:"Calcular EVO",FR:"Calculer l'EVO",DE:"EVO berechnen"},reset:{LATAM:"Reiniciar",USD:"Reset",PT:"Reiniciar",FR:"Réinitialiser",DE:"Zurücksetzen"},you_will_reach:{LATAM:"Llegarás a",USD:"YOU WILL REACH",PT:"VOCÊ VAI ALCANÇAR",FR:"VOUS ATTEINDREZ",DE:"SIE WERDEN ERREICHEN"},levels:{LATAM:"niveles",USD:"levels",PT:"níveis",FR:"niveaux",DE:"Ebenen"},discount:{LATAM:"Descuento",USD:"Discount",PT:"Desconto",FR:"Réduction",DE:"Rabatt"},credits_spent:{LATAM:"Gasto Créditos",USD:"Credits Spent",PT:"Créditos Gastos",FR:"Crédits dépensés",DE:"Verwendete Credits"},gold_spent:{LATAM:"Gasto Oro",USD:"Gold Spent",PT:"Ouro Gasto",FR:"Or dépensé",DE:"Verwendetes Gold"},credits_left:{LATAM:"Sobran Créditos",USD:"Credits Left",PT:"Créditos Restantes",FR:"Crédits restants",DE:"Verbleibende Credits"},gold_left:{LATAM:"Sobra Oro",USD:"Gold Left",PT:"Ouro Restante",FR:"Or restant",DE:"Verbleibendes Gold"},enter_resources:{LATAM:"Ingresa tus recursos y presiona Calcular para ver el resultado.",USD:"Enter your resources and press Calculate to see the result.",PT:"Insira seus recursos e pressione Calcular para ver o resultado.",FR:"Saisissez vos ressources et cliquez sur Calculer pour voir le résultat.",DE:"Geben Sie Ihre Ressourcen ein und drücken Sie Berechnen, um das Ergebnis zu sehen."},note:{LATAM:"Nota:",USD:"Note:",PT:"Nota:",FR:"Remarque :",DE:"Hinweis:"},note_desc:{LATAM:"Cálculo basado en reglas de MGG: cap de oro (30) y cap de créditos (328).",USD:"Calculation based on MGG rules: gold cap (30) and credit cap (328).",PT:"Cálculo baseado nas regras do MGG: limite de ouro (30) e limite de créditos (328).",FR:"Calcul basé sur les règles du MGG : limite d'or (30) et limite de crédits (328).",DE:"Berechnung basierend auf MGG-Regeln: Goldgrenze (30) und Creditgrenze (328)."}};function T5(){const{region:s}=Ie(),[n,i]=Y.useState(1),[l,p]=Y.useState(0),[m,d]=Y.useState(0),[h,f]=Y.useState(0),[b,_]=Y.useState(null),k=M=>{var I,A;return((I=kf[M])==null?void 0:I[s])||((A=kf[M])==null?void 0:A.USD)||""},y=()=>{let M=l,I=m,A=n;const q=h,K=A,O=(100-q)*.01,N=M,R=I;let B=0;if(A>=_f){const F=Mu*O,Z=Math.floor(M/F);M-=Z*F,B=A+Z}else for(;;){if(A>=_f){const Z=Mu*O,it=Math.floor(M/Z);M-=it*Z,B=A+it;break}const F=Math.floor((v5[A]??Mu)*O);if(M-F>=0)M-=F,A+=1;else{B=A;break}}let D=0;if(B>=xf){const F=Tu*O,Z=Math.floor(I/F);I-=Z*F,D=Z}else for(;;){if(D+B>=xf){const it=Tu*O,nt=Math.floor(I/it);I-=nt*it,D=nt;break}const F=M5[B+D]??Tu,Z=Math.round(F*O);if(I-Z>=0)I-=Z,D+=1;else break}const X=B+D;_({nuevoEvo:X,incremento:X-K,gastoCreditos:Math.max(0,N-M),gastoOro:Math.max(0,R-I),sobraCreditos:M,sobraOro:I,descuentoAplicado:q})},G=()=>{i(1),p(0),d(0),f(0),_(null)};return u.jsxs("div",{className:"flex flex-col gap-6",children:[u.jsxs("section",{className:"hero transition-all duration-700 !p-6 md:!p-12 relative overflow-hidden bg-gradient-to-br from-blue-brand/10 via-blue-brand-2/5 to-transparent border-blue-brand-2/20 shadow-blue-brand-2/5",children:[u.jsx("div",{className:"absolute top-0 right-0 p-8 opacity-20",children:u.jsx(su,{size:120,className:"text-blue-brand-2"})}),u.jsxs("div",{className:"eyebrow scale-90 md:scale-100",children:[u.jsx(su,{size:14,className:"mr-1 text-blue-brand-2"}),u.jsx("span",{children:k("math_tool")})]}),u.jsxs("h1",{className:"text-3xl md:text-6xl font-black mt-4 mb-4 uppercase tracking-tighter leading-[0.9] md:leading-[0.95] text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-brand-2/80 to-blue-brand-2",children:["EVO ",u.jsx("span",{className:"text-blue-brand-2",children:k("calculator")})]}),u.jsx("p",{className:"text-muted text-sm md:text-base max-w-2xl mx-auto px-4 opacity-80",children:k("hero_desc")})]}),u.jsx(Wa,{}),u.jsxs("div",{className:"grid md:grid-cols-[1fr_1.2fr] gap-4 md:gap-6 items-start",children:[u.jsx("section",{className:"panel flex flex-col gap-5 !p-4 md:!p-6 border border-white/10 bg-white/[0.01] hover:border-blue-brand/20 transition-all",children:u.jsxs("div",{className:"grid gap-3.5",children:[u.jsxs("label",{className:"kv",children:[u.jsx("span",{className:"kv-label text-[10px]",children:k("current_evo")}),u.jsx("input",{value:n,onChange:M=>i(Number(M.target.value)),className:"input py-2.5 text-sm focus:border-blue-brand-2/60 bg-white/[0.02] text-white transition-all",type:"number"})]}),u.jsxs("label",{className:"kv",children:[u.jsx("span",{className:"kv-label text-[10px]",children:k("available_credits")}),u.jsx("input",{value:l,onChange:M=>p(Number(M.target.value)),className:"input py-2.5 text-sm focus:border-blue-brand-2/60 bg-white/[0.02] text-white transition-all",type:"number"})]}),u.jsxs("label",{className:"kv",children:[u.jsx("span",{className:"kv-label text-[10px]",children:k("available_gold")}),u.jsx("input",{value:m,onChange:M=>d(Number(M.target.value)),className:"input py-2.5 text-sm focus:border-blue-brand-2/60 bg-white/[0.02] text-white transition-all",type:"number"})]}),u.jsxs("div",{children:[u.jsx("div",{className:"kv-label text-[10px] mb-2",children:k("applied_discount")}),u.jsx("div",{className:"grid grid-cols-3 gap-2",children:o2.map(M=>u.jsxs("button",{onClick:()=>f(M),className:`btn py-2 text-xs rounded-xl transition-all duration-200 ${h===M?"btn-primary":"bg-white/5 opacity-60 hover:bg-white/10 hover:border-white/15"}`,children:[M,"%"]},M))})]}),u.jsxs("div",{className:"flex gap-2 mt-2",children:[u.jsx("button",{onClick:y,className:"btn btn-primary flex-[2] py-3 text-sm transition-all duration-200",children:k("calculate_evo")}),u.jsx("button",{onClick:G,className:"btn flex-1 py-3 text-sm border border-white/5 bg-white/[0.03] text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200",children:k("reset")})]})]})}),u.jsx("section",{className:"h-full min-h-[360px]",children:b?u.jsxs("div",{className:"panel h-full flex flex-col items-center justify-center text-center p-6 md:p-8 relative overflow-hidden transition-all duration-700 border-none bg-gradient-to-br from-blue-brand/35 via-blue-brand-2/15 to-[#0b0f19] shadow-2xl shadow-blue-brand-2/10",children:[u.jsx("div",{className:"absolute inset-0 bg-[url('https://github.com/luqueSmith/MGG/blob/main/img/Logo_mgg.png?raw=true')] bg-no-repeat bg-center opacity-[0.03] scale-150 pointer-events-none"}),u.jsx("div",{className:"kv-label uppercase tracking-widest text-[10px] opacity-70 mb-2 z-10 text-blue-200",children:k("you_will_reach")}),u.jsx("div",{className:"text-[5rem] md:text-[6rem] font-black tracking-tighter leading-none mb-2 z-10 drop-shadow-xl text-white",children:un(b.nuevoEvo)}),u.jsxs("p",{className:"text-xs md:text-sm mb-6 z-10 font-bold opacity-80 text-blue-200",children:["+",un(b.incremento)," ",k("levels")," · ",b.descuentoAplicado,"% ",k("discount")]}),u.jsxs("div",{className:"grid grid-cols-2 gap-2 md:gap-3 w-full z-10",children:[u.jsxs("div",{className:"border border-white/5 bg-black/40 p-3 rounded-xl flex flex-col items-center shadow-inner",children:[u.jsx("span",{className:"text-[8px] md:text-[9px] uppercase font-bold mb-1 text-blue-200/50",children:k("credits_spent")}),u.jsx("strong",{className:"text-sm md:text-base text-white",children:un(b.gastoCreditos)})]}),u.jsxs("div",{className:"border border-white/5 bg-black/40 p-3 rounded-xl flex flex-col items-center shadow-inner",children:[u.jsx("span",{className:"text-[8px] md:text-[9px] uppercase font-bold mb-1 text-blue-200/50",children:k("gold_spent")}),u.jsx("strong",{className:"text-sm md:text-base text-white",children:un(b.gastoOro)})]}),u.jsxs("div",{className:"border border-white/5 bg-black/20 p-3 rounded-xl flex flex-col items-center shadow-inner",children:[u.jsx("span",{className:"text-[8px] md:text-[9px] uppercase font-bold mb-1 text-white/30",children:k("credits_left")}),u.jsx("strong",{className:"text-sm md:text-base text-white/80",children:un(b.sobraCreditos)})]}),u.jsxs("div",{className:"border border-white/5 bg-black/20 p-3 rounded-xl flex flex-col items-center shadow-inner",children:[u.jsx("span",{className:"text-[8px] md:text-[9px] uppercase font-bold mb-1 text-white/30",children:k("gold_left")}),u.jsx("strong",{className:"text-sm md:text-base text-white/80",children:un(b.sobraOro)})]})]})]}):u.jsxs("div",{className:"panel h-full flex flex-col items-center justify-center text-muted gap-4 border-dashed border-white/10 hover:border-blue-brand/20 transition-all bg-white/[0.01] hover:bg-white/[0.02]",children:[u.jsx(su,{size:48,className:"opacity-10"}),u.jsx("p",{className:"text-sm max-w-[200px] text-center",children:k("enter_resources")})]})})]}),u.jsxs("section",{className:"panel flex gap-4 items-center transition-all border border-blue-brand/20 bg-blue-brand/5 shadow-inner !p-4",children:[u.jsx(Af,{size:20,className:"text-blue-brand-2 shrink-0"}),u.jsxs("div",{className:"text-[11px] md:text-xs leading-relaxed",children:[u.jsx("strong",{className:"text-white",children:k("note")})," ",k("note_desc")]})]})]})}const j5={"Ficha Reactor":"Reactor Token","Ficha Jackpot":"Jackpot Token","Tickets x25":"Energy Tickets x25","Tickets x5":"Energy Tickets x5","Triple Experiencia":"Triple Experience","Cuádruple Regeneración":"Quadruple Regeneration","Ficha Reto":"Challenge Token","Doble Experiencia":"Double Experience","Ataques Críticos":"Critical Attacks","Escudo Anticrítico":"Anticritical Shield","Doble Regeneración":"Double Regeneration"};function A5(){const{region:s,translate:n}=Ie(),i=s==="USD",l=Object.keys(Kh),[p,m]=Y.useState(""),[d,h]=Y.useState(l[0]),[f,b]=Y.useState(12),_=A=>i?A.startsWith("Orbe ")?A.replace("Orbe Ataque","Attack Orb").replace("Orbe Vida","Life Orb").replace("Orbe Críticos","Critical Orb").replace("Orbe Experiencia","Experience Orb").replace("Orbe Regeneración","Regeneration Orb").replace("Orbe Respuesta","Retaliate Orb"):j5[A]||A:A,k=Y.useMemo(()=>{const A=[];return Object.entries(Kh).forEach(([q,K])=>{String(K||"").split(/\r?\n/).map(O=>O.trim()).filter(Boolean).forEach(O=>{const N=O.split("	");A.push({nombre:(N[0]||"").trim(),codigo:(N[1]||"").trim(),categoria:q,imagen:(N[2]||"").trim()||void 0})})}),A},[]),y=Y.useMemo(()=>{const A=p.toLowerCase();return k.filter(q=>q.categoria===d&&(q.nombre.toLowerCase().includes(A)||q.codigo.toLowerCase().includes(A)))},[k,p,d]),[G,M]=Y.useState(null),I=A=>{navigator.clipboard.writeText(A.toLowerCase()).catch(()=>{}),M(A),setTimeout(()=>M(null),2e3)};return u.jsxs("div",{className:"flex flex-col gap-6",children:[u.jsxs("section",{className:"hero !p-6 md:!p-12 relative overflow-hidden",children:[u.jsxs("div",{className:"eyebrow scale-90 md:scale-100",children:[u.jsx(ju,{size:14}),u.jsx("span",{children:i?"Secondary Catalog":"Catálogo secundario"})]}),u.jsxs("h1",{className:"text-3xl md:text-6xl font-black mt-4 mb-4 uppercase tracking-tighter leading-[0.9] md:leading-[0.95]",children:[i?"EXTRA":"OTROS"," ",u.jsx("span",{className:"text-blue-brand-2",children:i?"CODES":"CÓDIGOS"})]}),u.jsx("p",{className:"text-muted text-sm md:text-base max-w-2xl mx-auto px-4 opacity-80",children:i?"Orbs, consumables, structures, boxes, and offers filtered by category.":"Orbes, consumibles, estructuras, cajas y ofertas filtradas por categoría."})]}),u.jsx(Wa,{}),u.jsxs("section",{className:"panel flex flex-col gap-4 !p-4 md:!p-6 transition-all border",children:[u.jsx("div",{className:"flex flex-wrap gap-2 text-center",children:l.map(A=>u.jsx("button",{onClick:()=>{h(A),b(12)},className:`flex-1 min-w-[120px] px-4 py-3 rounded-xl border text-[10px] font-black uppercase tracking-widest transition-all ${d===A?"bg-blue-brand border-blue-brand-2 text-white shadow-lg":"bg-white/5 border-transparent text-slate-400 hover:bg-white/10"}`,children:i?A==="Cajas"?"Boxes":A==="Recursos"?"Resources":A==="Orbes"?"Orbs":A:A},A))}),u.jsxs("div",{className:"relative",children:[u.jsx(Vu,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-white/40"}),u.jsx("input",{value:p,onChange:A=>m(A.target.value),placeholder:i?`Search in ${d}...`:`Buscar en ${d}...`,className:"input pl-11 py-3.5 text-sm"})]})]}),u.jsx("section",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-4",children:y.length>0?y.slice(0,f).map((A,q)=>u.jsxs("article",{className:"card p-4 flex flex-col gap-3 group transition-all border hover:border-blue-brand/40",children:[A.imagen?u.jsx("div",{className:"flex items-center justify-center p-3 rounded-xl aspect-square overflow-hidden transition-colors bg-white/5",children:u.jsx("img",{src:A.imagen,alt:_(A.nombre),className:"w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"})}):u.jsx("div",{className:"flex items-center justify-center p-3 rounded-xl aspect-square overflow-hidden opacity-30 bg-blue-brand/10 text-blue-brand-2",children:u.jsx(ju,{size:32})}),u.jsxs("div",{className:"flex-1 flex flex-col pt-1",children:[u.jsx("h3",{className:"text-xs md:text-sm font-black uppercase tracking-tight mb-1 line-clamp-1 transition-colors",children:_(A.nombre)}),u.jsx("div",{className:"font-mono font-bold text-[9px] md:text-[10px] tracking-widest uppercase mb-4 opacity-80 text-blue-brand-2",children:A.codigo}),u.jsxs("button",{onClick:()=>I(A.codigo),className:`btn w-full text-[10px] font-black uppercase tracking-widest py-2.5 rounded-xl mt-auto transition-all ${G===A.codigo?"bg-green-brand/20 border-green-brand/30 text-green-brand":"hover:bg-blue-brand/15"}`,children:[G===A.codigo?u.jsx(hl,{size:12}):u.jsx(Su,{size:12}),u.jsx("span",{children:G===A.codigo?i?"DONE":"LISTO":i?"COPY":"COPIAR"})]})]})]},q)):u.jsx("div",{className:"col-span-full py-16 text-center border font-bold uppercase tracking-widest text-[10px] rounded-2xl bg-[#0d1421] border-line text-muted",children:i?"No codes found in this section.":"No se encontraron códigos en esta sección."})}),y.length>f&&u.jsx("div",{className:"flex justify-center mt-6",children:u.jsx("button",{onClick:()=>b(A=>A+12),className:"btn px-12 py-3.5 rounded-xl font-black uppercase tracking-widest text-xs transition-all bg-blue-brand/10 border-blue-brand/20 hover:bg-blue-brand/20",children:i?"Load More":"Cargar más"})})]})}const yf={quick_manual:{LATAM:"Manual rápido",USD:"Quick Manual",PT:"Manual Rápido",FR:"Manuel Rapide",DE:"Schnellstart-Anleitung"},title1:{LATAM:"GUÍA",USD:"USER",PT:"GUIA",FR:"GUIDE",DE:"BENUTZER"},title2:{LATAM:"DE USO",USD:"GUIDE",PT:"DO USUÁRIO",FR:"D'UTILISATION",DE:"HANDBUCH"},subtitle:{LATAM:"Todo lo básico para usar el catálogo sin perderte.",USD:"Everything you need to know to use the catalog without getting lost.",PT:"Tudo o que você precisa saber para usar o catálogo sem se perder.",FR:"Tout ce que vous devez savoir pour utiliser le catalogue sans vous perdre.",DE:"Alles, was Sie wissen müssen, um den Katalog zu nutzen, ohne sich zu verlaufen."},sec1_title:{LATAM:"1) Buscar por nombre o por código",USD:"1) Search by name or code",PT:"1) Buscar por nome ou por código",FR:"1) Recherche par nom ou code",DE:"1) Suche nach Name oder Code"},sec1_items:{LATAM:["Escribe parte del nombre o el código en el buscador.","El listado se filtra en tiempo real."],USD:["Type part of the name or code in the search box.","The list filters in real time."],PT:["Digite parte do nome ou código na caixa de busca.","A lista é filtrada em tempo real."],FR:["Saisissez une partie du nom ou du code dans la barre de recherche.","La liste est filtrée en temps réel."],DE:["Geben Sie einen Teil des Namens oder Codes im Suchfeld ein.","Die Liste filtert in Echtzeit."]},sec2_title:{LATAM:"2) Filtros por genes (máximo 2)",USD:"2) Gene filters (max 2)",PT:"2) Filtros de genes (máximo 2)",FR:"2) Filtres de gènes (max 2)",DE:"2) Genfilter (max. 2)"},sec2_items:{LATAM:["Puedes activar hasta 2 genes a la vez.","El filtro exige que el mutante tenga ambos genes seleccionados."],USD:["You can activate up to 2 genes at once.","The filter requires the mutant to have both selected genes."],PT:["Você pode ativar até 2 genes ao mesmo tempo.","O filtro exige que o mutante tenha ambos os genes selecionados."],FR:["Vous pouvez activer jusqu'à 2 gènes à la fois.","Le filtre exige que le mutant possède les deux gènes sélectionnés."],DE:["Sie können bis zu 2 Gene gleichzeitig aktivieren.","Der Filter erfordert, dass der Mutant beide ausgewählten Gene besitzt."]},sec3_title:{LATAM:"3) Copiar códigos sin errores",USD:"3) Copy codes without errors",PT:"3) Copiar códigos sem erros",FR:"3) Copier les codes sans erreur",DE:"3) Codes fehlerfrei kopieren"},sec3_items:{LATAM:["Pulsa el botón “Copiar código”.","El texto se envía al portapapeles automáticamente."],USD:['Click the "Copy Code" button.',"The text is automatically sent to the clipboard."],PT:['Clique no botão "Copiar código".',"O texto é enviado automaticamente para a área de transferência."],FR:['Cliquez sur le bouton "Copier le code".',"Le texte est automatiquement envoyé dans le presse-papiers."],DE:['Klicken Sie auf die Schaltfläche "Code kopieren".',"Der Text wird automatisch in die Zwischenablage kopiert."]},sec4_title:{LATAM:"4) Qué hay en cada página",USD:"4) What is on each page",PT:"4) O que há em cada página",FR:"4) Contenu de chaque page",DE:"4) Was ist auf jeder Seite"},sec4_items:{LATAM:["Inicio: base de mutantes.","Servicios: packs y pedidos.","Evo: calculadora.","Otros códigos: orbes y extras.","Descargas y tutoriales: recursos y videos."],USD:["Home: mutant database.","Services: packs and orders.","Evo: calculator.","Other codes: orbs and extras.","Downloads and tutorials: resources and videos."],PT:["Início: banco de dados de mutantes.","Serviços: pacotes e pedidos.","Evo: calculadora.","Outros códigos: orbes e extras.","Downloads e tutoriais: recursos e vídeos."],FR:["Accueil: base de données de mutants.","Services: packs et commandes.","Evo: calculateur.","Autres codes: orbes et suppléments.","Téléchargements et tutoriels: ressources et vidéos."],DE:["Startseite: Mutanten-Datenbank.","Dienste: Pakete und Bestellungen.","Evo: Rechner.","Andere Codes: Orbs und Extras.","Downloads und Tutorials: Ressourcen und Videos."]},sec5_title:{LATAM:"5) Rendimiento (menos lag)",USD:"5) Performance (less lag)",PT:"5) Desempenho (menos lag)",FR:"5) Performance (moins de décalage)",DE:"5) Leistung (weniger Lag)"},sec5_items:{LATAM:["La versión React utiliza componentes dinámicos para mayor fluidez.","Si algo se ve raro, recarga la aplicación."],USD:["The React version uses dynamic components for better fluidity.","If something looks weird, reload the application."],PT:["A versão React usa componentes dinâmicos para melhor fluidez.","Se algo parecer estranho, recarregue o aplicativo."],FR:["La version React utilise des composants dynamiques pour une meilleure fluidité.","Si quelque chose semble anormal, rechargez l'application."],DE:["Die React-Version verwendet dynamische Komponenten für mehr Flüssigkeit.","Wenn etwas seltsam aussieht, laden Sie die Anwendung neu."]}};function S5(){const{region:s}=Ie(),n=l=>{var p,m;return((p=yf[l])==null?void 0:p[s])||((m=yf[l])==null?void 0:m.USD)||""},i=[{title:n("sec1_title"),items:n("sec1_items"),icon:_o},{title:n("sec2_title"),items:n("sec2_items"),icon:_o},{title:n("sec3_title"),items:n("sec3_items"),icon:_o},{title:n("sec4_title"),items:n("sec4_items"),icon:_o},{title:n("sec5_title"),items:n("sec5_items"),icon:_o}];return u.jsxs("div",{className:"flex flex-col gap-6",children:[u.jsxs("section",{className:"hero transition-all duration-700 !p-6 md:!p-12 relative overflow-hidden bg-gradient-to-br from-blue-brand/10 via-blue-brand-2/5 to-transparent border-blue-brand-2/20 shadow-blue-brand-2/5",children:[u.jsx("div",{className:"absolute top-0 right-0 p-8 opacity-20",children:u.jsx(Au,{size:120,className:"text-blue-brand-2"})}),u.jsxs("div",{className:"eyebrow scale-90 md:scale-100",children:[u.jsx(Au,{size:16,className:"text-blue-brand-2"}),u.jsx("span",{children:n("quick_manual")})]}),u.jsxs("h1",{className:"text-4xl md:text-6xl font-black mt-2.5 mb-2.5 uppercase tracking-tighter leading-[0.95] text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-brand-2/80 to-blue-brand-2",children:[n("title1")," ",u.jsx("span",{className:"text-blue-brand-2",children:n("title2")})]}),u.jsx("p",{className:"text-muted max-w-2xl mx-auto px-4 opacity-80",children:n("subtitle")})]}),u.jsx(Wa,{}),u.jsx("section",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:i.map((l,p)=>{const m=l.icon;return u.jsxs("article",{className:"panel flex flex-col gap-4 border border-white/10 bg-white/[0.01] hover:border-blue-brand-2/30 hover:bg-white/[0.02] shadow-lg transition-all duration-300",children:[u.jsx("div",{className:"w-12 h-12 rounded-2xl flex items-center justify-center transition-colors bg-white/8 text-blue-brand-2",children:u.jsx(m,{size:24})}),u.jsx("h3",{className:"text-xl font-bold tracking-tight m-0 text-white",children:l.title}),u.jsx("div",{className:"flex flex-col gap-2",children:l.items.map((d,h)=>u.jsx("p",{className:"text-muted m-0 text-sm leading-relaxed opacity-90",children:d},h))})]},p)})})]})}const Gf={multimedia:{LATAM:"Contenido multimedia",USD:"Multimedia",PT:"Conteúdo multimídia",FR:"Contenu multimédia",DE:"Multimedia-Inhalte"},tutoriales_title1:{LATAM:"TUTORIALES",USD:"YOUTUBE",PT:"TUTORIAIS",FR:"TUTORIELS",DE:"TUTORIALS"},tutoriales_title2:{LATAM:"YOUTUBE",USD:"GUIDES",PT:"YOUTUBE",FR:"YOUTUBE",DE:"YOUTUBE"},tutoriales_desc:{LATAM:"Aquí subo guías rápidas y tips sobre el catálogo y Mutants: Genetic Gladiators.",USD:"Quick guides and tips about the catalog and Mutants: Genetic Gladiators.",PT:"Aqui eu posto guias rápidos e dicas sobre o catálogo e Mutants: Genetic Gladiators.",FR:"Ici, je publie des guides rapides et des conseils sur le catalogue et Mutants: Genetic Gladiators.",DE:"Hier lade ich Kurzanleitungen und Tipps zum Katalog und Mutants: Genetic Gladiators hoch."},youtube_channel:{LATAM:"Canal de YouTube",USD:"YouTube Channel",PT:"Canal do YouTube",FR:"Chaîne YouTube",DE:"YouTube-Kanal"},youtube_channel_desc:{LATAM:"Si estás en móvil, puede abrir la app de YouTube si la tienes instalada.",USD:"If you are on mobile, it might open the YouTube app directly.",PT:"Se estiver no celular, pode abrir o aplicativo do YouTube diretamente.",FR:"Si vous êtes sur mobile, cela peut ouvrir directement l'application YouTube.",DE:"Wenn Sie mobil unterwegs sind, wird möglicherweise direkt die YouTube-App geöffnet."},go_to:{LATAM:"Ir a @spieler_Lc",USD:"Go to @spieler_Lc",PT:"Ir para @spieler_Lc",FR:"Aller sur @spieler_Lc",DE:"Gehe zu @spieler_Lc"},view_videos:{LATAM:"Ver videos",USD:"View videos",PT:"Ver vídeos",FR:"Voir les vidéos",DE:"Videos anzeigen"},want_to_find:{LATAM:"¿Qué vas a encontrar?",USD:"What will you find?",PT:"O que você vai encontrar?",FR:"Que trouverez-vous ?",DE:"Was werden Sie finden?"},bullet1:{LATAM:"Cómo buscar mutantes y copiar códigos sin errores.",USD:"How to search for mutants and copy codes without errors.",PT:"Como procurar mutantes e copiar códigos sem erros.",FR:"Comment rechercher des mutants et copier des codes sans erreur.",DE:"So suchen Sie nach Mutanten und kopieren Codes fehlerfrei."},bullet2:{LATAM:"Cómo usar filtros por genes.",USD:"How to use gene filters.",PT:"Como usar filtros por genes.",FR:"Comment utiliser les filtres par gènes.",DE:"So verwenden Sie Genfilter."},bullet3:{LATAM:"Consejos para usar emuladores y reducir el lag.",USD:"Tips for using emulators and reducing lag.",PT:"Dicas para usar emuladores e reduzir o lag.",FR:"Conseils pour utiliser des émulateurs et réduire le décalage (lag).",DE:"Tipps zur Verwendung von Emulatoren und zur Reduzierung von Lag."}};function I5(){const{region:s}=Ie(),n=i=>{var l,p;return((l=Gf[i])==null?void 0:l[s])||((p=Gf[i])==null?void 0:p.USD)||""};return u.jsxs("div",{className:"flex flex-col gap-6",children:[u.jsxs("section",{className:"hero transition-all duration-700 !p-6 md:!p-12 relative overflow-hidden bg-gradient-to-br from-blue-brand/10 via-blue-brand-2/5 to-transparent border-blue-brand-2/20 shadow-blue-brand-2/5",children:[u.jsx("div",{className:"absolute top-0 right-0 p-8 opacity-20",children:u.jsx(il,{size:120,className:"text-blue-brand-2"})}),u.jsxs("div",{className:"eyebrow scale-90 md:scale-100",children:[u.jsx(il,{size:16,className:"text-blue-brand-2"}),u.jsx("span",{children:n("multimedia")})]}),u.jsxs("h1",{className:"text-4xl md:text-6xl font-black mt-2.5 mb-2.5 uppercase tracking-tighter leading-[0.95] text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-brand-2/80 to-blue-brand-2",children:[n("tutoriales_title1")," ",u.jsx("span",{className:"text-blue-brand-2",children:n("tutoriales_title2")})]}),u.jsx("p",{className:"text-muted max-w-2xl mx-auto px-4 opacity-80",children:n("tutoriales_desc")})]}),u.jsx(Wa,{}),u.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[u.jsxs("section",{className:"panel flex flex-col gap-5 transition-all duration-300 border border-white/10 bg-white/[0.01] hover:border-blue-brand-2/30 hover:bg-white/[0.02]",children:[u.jsx("div",{className:"w-12 h-12 rounded-2xl flex items-center justify-center bg-white/8 text-red-500 shadow-lg shadow-red-500/10",children:u.jsx(il,{size:24})}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-xl font-bold tracking-tight mb-2 text-white",children:n("youtube_channel")}),u.jsx("p",{className:"text-muted text-sm m-0 leading-relaxed opacity-90",children:n("youtube_channel_desc")})]}),u.jsxs("div",{className:"flex flex-wrap gap-3 mt-auto",children:[u.jsxs("a",{className:"btn btn-primary px-6 transition-all duration-200",target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/@spieler_Lc",children:[u.jsx(Fa,{size:18}),u.jsx("span",{children:n("go_to")})]}),u.jsxs("a",{className:"btn px-6 border-white/10 hover:border-blue-brand-2 hover:bg-blue-brand-2/10 transition-all duration-200",target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/@spieler_Lc/videos",children:[u.jsx(mk,{size:18}),u.jsx("span",{children:n("view_videos")})]})]})]}),u.jsxs("section",{className:"panel flex flex-col gap-5 transition-all duration-300 border border-white/10 bg-white/[0.01] hover:border-blue-brand-2/30 hover:bg-white/[0.02]",children:[u.jsx("div",{className:"w-12 h-12 rounded-2xl flex items-center justify-center bg-white/8 text-yellow-brand shadow-lg shadow-yellow-brand/10",children:u.jsx(Vk,{size:24})}),u.jsx("h3",{className:"text-xl font-bold tracking-tight m-0 text-white",children:n("want_to_find")}),u.jsxs("ul",{className:"text-muted text-sm space-y-3 pl-5 list-disc marker:text-blue-brand-2/50",children:[u.jsx("li",{children:n("bullet1")}),u.jsx("li",{children:n("bullet2")}),u.jsx("li",{children:n("bullet3")})]})]})]})]})}const vf={download_center:{LATAM:"Centro de descargas",USD:"Download Center",PT:"Centro de Downloads",FR:"Centre de téléchargement",DE:"Download-Center"},downloads:{LATAM:"DESCARGAS",USD:"DOWNLOADS",PT:"DOWNLOADS",FR:"TÉLÉCHARGEMENTS",DE:"DOWNLOADS"},tools_desc:{LATAM:"Herramientas y recomendaciones según tu caso.",USD:"Tools and recommendations tailored to your setup.",PT:"Ferramentas e recomendações adaptadas ao seu caso.",FR:"Outils et recommandations adaptés à votre cas.",DE:"Werkzeuge und Empfehlungen für Ihren Fall."},essential_resources:{LATAM:"Recursos esenciales",USD:"Essential Resources",PT:"Recursos Essenciais",FR:"Ressources essentielles",DE:"Grundlegende Ressourcen"},download_btn:{LATAM:"Descargar",USD:"Download",PT:"Descarregar",FR:"Télécharger",DE:"Herunterladen"},gg_official:{LATAM:"GameGuardian (fuente oficial)",USD:"GameGuardian (Official Source)",PT:"GameGuardian (Fonte Oficial)",FR:"GameGuardian (Source officielle)",DE:"GameGuardian (Offizielle Quelle)"},gg_desc:{LATAM:"Evita APKs modificados. Descarga siempre desde el foro oficial. Normalmente requiere root real o virtual.",USD:"Avoid modified APKs. Always download from the official forum. Usually requires real or virtual root.",PT:"Evite APKs modificados. Sempre baixe do fórum oficial. Geralmente requer root real ou virtual.",FR:"Évitez les APK modifiés. Téléchargez toujours depuis le forum officiel. Nécessite généralement un accès root réel ou virtuel.",DE:"Vermeiden Sie modifizierte APKs. Laden Sie immer aus dem offiziellen Forum herunter. Erfordert normalerweise echten oder virtuellen Root."},mobile_vms:{LATAM:"Móvil: máquinas virtuales",USD:"Mobile: Virtual Machines",PT:"Celular: Máquinas Virtuais",FR:"Mobile : Machines virtuelles",DE:"Mobil: Virtuelle Maschinen"},pc_emulators:{LATAM:"PC: emuladores Android",USD:"PC: Android Emulators",PT:"PC: Emuladores Android",FR:"PC : Émulateurs Android",DE:"PC: Android-Emulatoren"},official_site:{LATAM:"Sitio oficial",USD:"Official Site",PT:"Site Oficial",FR:"Site officiel",DE:"Offizielle Website"},warn_title:{LATAM:"Usa bajo tu responsabilidad",USD:"Use at your own risk",PT:"Use por sua conta e risco",FR:"Utilisez à vos risques et périls",DE:"Nutzung auf eigene Gefahr"},warn_desc:{LATAM:"Esta conversión conserva la sección informativa del proyecto original.",USD:"This content is for information purposes only within this project.",PT:"Esta conversão mantém a seção informativa do projeto original.",FR:"Cette conversion conserve la section informative du projet d'origine.",DE:"Diese Konvertierung behält den informativen Teil des Originalprojekts bei."},lua_title:{LATAM:"Script LUA",USD:"Script LUA",PT:"Script LUA",FR:"Script LUA",DE:"Script LUA"},lua_desc:{LATAM:"Script definitivo para GameGuardian. Compatible con TodoCS.",USD:"Ultimate GameGuardian script. Compatible with TodoCS.",PT:"Script definitivo para GameGuardian. Compatível com TodoCS.",FR:"Script définitif pour GameGuardian. Compatible avec TodoCS.",DE:"Ultimatives Script für GameGuardian. Kompatibel mit TodoCS."},txt_title:{LATAM:"Lista TXT",USD:"TXT List",PT:"Lista TXT",FR:"Liste TXT",DE:"TXT-Liste"},txt_desc:{LATAM:"Todos los códigos en formato de texto plano.",USD:"All codes in plain text format.",PT:"Todos os códigos em formato de texto simples.",FR:"Tous les codes au format texte brut.",DE:"Alle Codes im Klartextformat."},xlsx_title:{LATAM:"Lista Excel",USD:"Excel List",PT:"Lista Excel",FR:"Liste Excel",DE:"Excel-Liste"},xlsx_desc:{LATAM:"Base de datos completa en .xlsx para filtrado avanzado.",USD:"Complete database in .xlsx for advanced filtering.",PT:"Banco de dados completo em .xlsx para filtragem avançada.",FR:"Base de données complète en .xlsx pour un filtrage avancé.",DE:"Vollständige Datenbank im .xlsx-Format für erweitertes Filtern."},texture_title:{LATAM:"Textura MGG",USD:"MGG Texture",PT:"Textura MGG",FR:"Texture MGG",DE:"MGG-Textur"},texture_desc:{LATAM:"Nuevas texturas para la terraza, arenas e iconos.",USD:"Visual overhaul for hall, arenas, and icons.",PT:"Novas texturas para o terraço, arenas e ícones.",FR:"Nouvelles textures pour le hall, les arènes et les icônes.",DE:"Neue Texturen für die Terrasse, Arenen und Symbole."},vphone_desc:{LATAM:"Mejor opción para root virtual y compatibilidad con GG.",USD:"Best option for virtual root and GG compatibility.",PT:"Melhor opção para root virtual e compatibilidade com GG.",FR:"Option idéale pour le root virtuel et la compatibilité avec GG.",DE:"Beste Option für virtuellen Root und GG-Kompatibilität."},vmos_desc:{LATAM:"Mucha comunidad. El root y la compatibilidad cambian por versión.",USD:"Large community. Root and compatibility vary by version.",PT:"Grande comunidade. O root e a compatibilidade variam de acordo com a versão.",FR:"Grande communauté. Le root et la compatibilité varient selon la version.",DE:"Große Community. Root und Kompatibilität variieren je nach Version."},vmaster_desc:{LATAM:"Muy buena para separar apps, con root limitado.",USD:"Great for separating apps, limited root.",PT:"Muito boa para separar apps, com root limitado.",FR:"Très utile pour isoler les applications, avec root limité.",DE:"Sehr gut zum Trennen von Apps, mit eingeschränktem Root."},ldplayer_desc:{LATAM:"Equilibrio entre rendimiento y estabilidad.",USD:"Balance between performance and stability.",PT:"Equilíbrio entre desempenho e estabilidade.",FR:"Excellent équilibre entre performances et stabilité.",DE:"Gleichgewicht zwischen Leistung und Stabilität."},bluestacks_desc:{LATAM:"Alta compatibilidad para juegos.",USD:"High compatibility for games.",PT:"Alta compatibilidade para jogos.",FR:"Grande compatibilité avec les jeux.",DE:"Hohe Spielekompatibilität."},nox_desc:{LATAM:"Ideal para multi-instancia y control avanzado.",USD:"Ideal for multi-instance and advanced control.",PT:"Ideal para multi-instâncias e controle avançado.",FR:"Idéal pour le multi-instance et le contrôle avancé.",DE:"Ideal für Multi-Instanz und erweiterte Steuerung."}};function V5(){const{region:s}=Ie(),n=m=>{var d,h;return((d=vf[m])==null?void 0:d[s])||((h=vf[m])==null?void 0:h.USD)||""},i=[{title:n("lua_title"),desc:n("lua_desc"),iconName:hk,href:"https://www.mediafire.com/file/llyxjrgzkrvmu61/DEFINITIVA-CS-v2.lua/file",download:"SCIRPT-NUEVA.V2.lua"},{title:n("txt_title"),desc:n("txt_desc"),iconName:Mk,href:"https://www.mediafire.com/file/2fg3dtp4nhay3jw/lista-codigos.txt/file",download:"lista-codigos.txt"},{title:n("xlsx_title"),desc:n("xlsx_desc"),iconName:Jk,href:"https://www.mediafire.com/file/n9l7kylzrpgiplq/lista-codigos.xlsx/file",download:"lista-codigos.xlsx"},{title:n("texture_title"),desc:n("texture_desc"),iconName:If,href:"https://www.mediafire.com/file/gllbbith3a6i56a/Mutants_Genetic_Gladiators_Mod.apk/file",download:"Mutants_Genetic_Gladiators_Mod.apk"}],l=[["VPhoneOS",n("vphone_desc"),"https://vphoneos.com/"],["VMOS",n("vmos_desc"),""],["Virtual Master",n("vmaster_desc"),""]],p=[["LDPlayer",n("ldplayer_desc"),"https://www.ldplayer.net/"],["BlueStacks",n("bluestacks_desc"),""],["NoxPlayer",n("nox_desc"),""]];return u.jsxs("div",{className:"flex flex-col gap-6 pb-20",children:[u.jsxs("section",{className:"relative hero !p-10 md:!p-24 overflow-hidden rounded-[3rem]",children:[u.jsx("div",{className:"absolute inset-0 opacity-10 bg-grid-slate-900/[0.1] pointer-events-none"}),u.jsx("div",{className:"absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-brand/20 to-transparent -rotate-12 transform translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none"}),u.jsxs("div",{className:"relative z-10",children:[u.jsxs("div",{className:"eyebrow bg-white/5 border-white/10 px-4 py-1 rounded-full inline-flex items-center gap-2 mb-6 backdrop-blur-md",children:[u.jsx(jf,{size:14,className:"text-blue-brand-2"}),u.jsx("span",{className:"text-[10px] font-black uppercase tracking-[0.2em]",children:n("download_center")})]}),u.jsxs("h1",{className:"text-4xl md:text-8xl lg:text-9xl font-black mt-4 mb-6 uppercase tracking-tighter leading-[0.8] md:leading-[0.85] text-white",children:[n("downloads")," ",u.jsx("br",{}),u.jsxs("span",{className:"text-blue-brand relative",children:["MÓVIL / PC",u.jsx("span",{className:"absolute -bottom-2 left-0 w-full h-1 bg-white/10 rounded-full"})]})]}),u.jsx("p",{className:"text-slate-400 text-sm md:text-lg max-w-2xl mx-auto md:mx-0 opacity-90 leading-relaxed font-medium",children:n("tools_desc")})]})]}),u.jsx(Wa,{}),u.jsxs("section",{className:"flex flex-col gap-4",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:"h-px flex-1 bg-white/5"}),u.jsx("h2",{className:"text-lg font-bold uppercase tracking-tight m-0 text-white",children:n("essential_resources")}),u.jsx("div",{className:"h-px flex-1 bg-white/5"})]}),u.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-4 gap-6",children:i.map((m,d)=>{const h=m.iconName,f=m.title==="Textura MGG"||m.title==="MGG Texture";return u.jsxs("article",{className:`panel flex flex-col gap-4 relative transition-all duration-300 border ${f?"glow-card border-blue-brand/40 bg-blue-brand/5":"hover:border-white/10"}`,children:[f&&u.jsx("span",{className:"badge-new uppercase",children:"New"}),u.jsx("div",{className:`w-12 h-12 rounded-2xl flex items-center justify-center ${f?"bg-blue-brand text-white":"bg-white/8 text-blue-brand-2"}`,children:u.jsx(h,{size:24})}),u.jsxs("div",{children:[u.jsx("h3",{className:`text-xl font-bold tracking-tight mb-2 ${f?"text-blue-brand-2":""}`,children:m.title}),u.jsx("p",{className:"text-muted text-sm m-0 min-h-[40px] leading-relaxed",children:m.desc})]}),u.jsxs("a",{className:`btn w-full relative overflow-hidden group transition-all ${f?"bg-white text-black hover:bg-blue-brand-2 hover:text-white border-transparent":"btn-primary"}`,href:m.href,target:"_blank",rel:"noopener noreferrer",children:[u.jsx("span",{className:"font-black uppercase",children:n("download_btn")}),u.jsx("span",{className:"download-shine","aria-hidden":"true"})]})]},d)})})]}),u.jsxs("section",{className:"panel flex gap-4 items-center transition-all border border-white/10 bg-white/[0.02]",children:[u.jsx("div",{className:"w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-white/8 text-green-brand",children:u.jsx(Xk,{size:24})}),u.jsxs("div",{className:"flex-1",children:[u.jsx("h3",{className:"text-lg font-bold tracking-tight mb-1 text-white font-black",children:n("gg_official")}),u.jsx("p",{className:"text-muted text-sm m-0",children:n("gg_desc")})]}),u.jsxs("div",{className:"hidden lg:flex gap-2",children:[u.jsx("span",{className:"px-3 py-1.5 rounded-full text-[12px] font-bold bg-white/8 text-blue-100",children:"Root real"}),u.jsx("span",{className:"px-3 py-1.5 rounded-full text-[12px] font-bold bg-white/8 text-blue-100",children:"Root virtual"})]})]}),u.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[u.jsxs("section",{className:"panel flex flex-col gap-5 border border-white/10 bg-gradient-to-br from-white/[0.01] to-transparent",children:[u.jsx("h3",{className:"text-xl font-bold tracking-tight m-0 text-white uppercase tracking-tighter",children:n("mobile_vms")}),u.jsx("div",{className:"grid gap-4",children:l.map(([m,d,h],f)=>u.jsxs("div",{className:"p-4 rounded-xl border border-white/5 bg-white/2 hover:border-white/10 transition-colors",children:[u.jsx("h4",{className:"font-bold mb-1 text-white",children:m}),u.jsx("p",{className:"text-muted text-sm mb-3 leading-relaxed",children:d}),h?u.jsxs("a",{href:h,target:"_blank",rel:"noopener noreferrer",className:"btn btn-sm text-xs py-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black",children:[u.jsx(Fa,{size:14}),u.jsx("span",{children:n("official_site")})]}):u.jsxs("button",{disabled:!0,className:"btn btn-sm text-xs py-2 opacity-50 cursor-not-allowed",children:[u.jsx(Fa,{size:14}),u.jsx("span",{children:n("official_site")})]})]},f))})]}),u.jsxs("section",{className:"panel flex flex-col gap-5 border border-white/10 bg-gradient-to-br from-white/[0.01] to-transparent",children:[u.jsx("h3",{className:"text-xl font-bold tracking-tight m-0 text-white uppercase tracking-tighter",children:n("pc_emulators")}),u.jsx("div",{className:"grid gap-4",children:p.map(([m,d,h],f)=>u.jsxs("div",{className:"p-4 rounded-xl border border-white/5 bg-white/2 hover:border-white/10 transition-colors",children:[u.jsx("h4",{className:"font-bold mb-1 text-white",children:m}),u.jsx("p",{className:"text-muted text-sm mb-3 leading-relaxed",children:d}),h?u.jsxs("a",{href:h,target:"_blank",rel:"noopener noreferrer",className:"btn btn-sm text-xs py-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black",children:[u.jsx(Fa,{size:14}),u.jsx("span",{children:n("official_site")})]}):u.jsxs("button",{disabled:!0,className:"btn btn-sm text-xs py-2 opacity-50 cursor-not-allowed",children:[u.jsx(Fa,{size:14}),u.jsx("span",{children:n("official_site")})]})]},f))})]})]}),u.jsxs("section",{className:"panel flex gap-4 items-start border-l-4 bg-yellow-brand/5 border-yellow-brand",children:[u.jsx(Wk,{size:24,className:"text-yellow-brand shrink-0 mt-1"}),u.jsxs("div",{children:[u.jsx("strong",{className:"block text-white mb-1",children:n("warn_title")}),u.jsx("p",{className:"text-muted text-sm m-0",children:n("warn_desc")})]})]})]})}const Mf={legal_info:{LATAM:"Información Legal",USD:"Legal Information",PT:"Informação Legal",FR:"Informations légales",DE:"Rechtliche Informationen"},terms_conditions1:{LATAM:"TÉRMINOS Y ",USD:"TERMS & ",PT:"TERMOS E ",FR:"CONDITIONS & ",DE:"ALLGEMEINE "},terms_conditions2:{LATAM:"CONDICIONES",USD:"CONDITIONS",PT:"CONDIÇÕES",FR:"TERMES",DE:"GESCHÄFTSBEDINGUNGEN"},read_carefully:{LATAM:"Por favor lee atentamente las normas y condiciones de uso de Mutodex MGG.",USD:"Please read the rules and conditions of use for Mutodex MGG carefully.",PT:"Por favor, leia atentamente as regras e condições de uso do Mutodex MGG.",FR:"Veuillez lire attentivement les règles et conditions d'utilisation de Mutodex MGG.",DE:"Bitte lesen Sie die Regeln und Nutzungsbedingungen für Mutodex MGG sorgfältig durch."},rights_reserved:{LATAM:"Derechos Reservados",USD:"Rights Reserved",PT:"Direitos Reservados",FR:"Droits réserves",DE:"Rechte vorbehalten"},rights_desc:{LATAM:"Todos los derechos de diseño, desarrollo y marca personal relacionada con Mutodex MGG están reservados a Smith Luque. Cualquier reproducción parcial o total del contenido multimedia o código fuente sin autorización previa está prohibida.",USD:"All rights of design, development, and personal brand related to Mutodex MGG are reserved by Smith Luque. Any partial or total reproduction of multimedia content or source code without prior authorization is prohibited.",PT:"Todos os direitos de design, desenvolvimento e marca pessoal relacionados ao Mutodex MGG são reservados por Smith Luque. Qualquer reprodução parcial ou total do conteúdo multimídia ou código-fonte sem autorização prévia é proibida.",FR:"Tous les droits de conception, de développement et de marque personnelle liés à Mutodex MGG sont réservés par Smith Luque. Toute reproduction partielle ou totale du contenu multimédia ou du code source sans autorisation préalable est interdite.",DE:"Alle Design-, Entwicklungs- und Markenrechte im Zusammenhang mit Mutodex MGG sind Smith Luque vorbehalten. Jegliche teilweise oder vollständige Vervielfältigung von Multimedia-Inhalten oder Quellcode ohne vorherige Genehmigung ist untersagt."},risks_liability:{LATAM:"Riesgos y Responsabilidad",USD:"Risks & Liability",PT:"Riscos e Responsabilidade",FR:"Risques et responsabilité",DE:"Risiken & Haftung"},risks_desc:{LATAM:"El uso de scripts, hacks o herramientas de terceros (como Game Guardian) en Mutants Genetic Gladiators conlleva un RIESGO CRÍTICO DE BANEO de tu cuenta por parte de los desarrolladores oficiales del juego (Kobojo/Syntamon).",USD:"The use of scripts, hacks, or third-party tools (such as Game Guardian) in Mutants Genetic Gladiators carries a CRITICAL RISK OF BANNING of your account by the official game developers (Kobojo/Syntamon).",PT:"O uso de scripts, hacks ou ferramentas de terceiros (como Game Guardian) em Mutants Genetic Gladiators acarreta um RISCO CRÍTICO DE BANIMENTO de sua conta pelos desenvolvedores oficiais do jogo (Kobojo/Syntamon).",FR:"L'utilisation de scripts, de hacks ou d'outils tiers (tels que Game Guardian) dans Mutants Genetic Gladiators comporte un RISQUE CRITIQUE DE BANNISSEMENT de votre compte par les développeurs officiels du jeu (Kobojo/Syntamon).",DE:"Die Verwendung von Skripten, Hacks oder Tools von Drittanbietern (wie Game Guardian) in Mutants Genetic Gladiators birgt ein KRITISCHES BAN-RISIKO Ihres Kontos durch die offiziellen Spielentwickler (Kobojo/Syntamon)."},risk_bullet1:{LATAM:"Smith Luque no se hace responsable por pérdidas de cuentas.",USD:"Smith Luque is not responsible for any banned or lost accounts.",PT:"Smith Luque não é responsável por contas perdidas ou banidas.",FR:"Smith Luque n'est pas responsable des comptes bannis ou perdus.",DE:"Smith Luque ist nicht verantwortlich für gesperrte oder verlorene Konten."},risk_bullet2:{LATAM:"El uso del contenido de esta web es bajo tu propio riesgo.",USD:"Sourcing and testing scripts or utilizing codes is fully at your own risk.",PT:"O uso do conteúdo deste site é de sua total conta e risco.",FR:"L'utilisation du contenu de ce site se fait entièrement à vos risques et périls.",DE:"Die Verwendung der Inhalte dieser Website erfolgt auf eigene Gefahr."},risk_bullet3:{LATAM:"Recomendamos siempre probar en cuentas secundarias.",USD:"We highly recommend testing any external tools on secondary accounts first.",PT:"Recomendamos sempre testar ferramentas externas em contas secundárias primeiro.",FR:"Nous vous recommandons fortement de tester d'abord les outils externes sur des comptes secondaires.",DE:"Wir empfehlen dringend, externe Tools zuerst auf Zweitkonten zu testen."},purpose_title:{LATAM:"Propósito de la Web",USD:"Purpose of the Website",PT:"Propósito do Website",FR:"But du site internet",DE:"Zweck der Website"},purpose_desc:{LATAM:"Esta plataforma ha sido creada exclusivamente con fines de aprendizaje, investigación y entretenimiento. Nuestra misión es proporcionar una base de datos organizada para la comunidad de MGG y facilitar el acceso a la información técnica del juego.",USD:"This platform has been created exclusively for learning, research, and entertainment purposes. Our mission is to provide an organized, fast database for the MGG community and simplify secure access to the technical parameters of the game.",PT:"Esta plataforma foi criada exclusivamente para fins de aprendizagem, pesquisa e entretenimento. Nossa missão é fornecer um banco de dados organizado para a comunidade MGG e facilitar o acesso seguro aos parâmetros técnicos do jogo.",FR:"Cette plateforme a été créée exclusivement à des fins d'apprentissage, de recherche et de divertissement. Notre mission est de fournir une base de données organisée et rapide pour la communauté MGG et de simplifier l'accès sécurisé aux paramètres techniques du jeu.",DE:"Diese Plattform wurde ausschließlich zu Lern-, Forschungs- und Unterhaltungszwecken erstellt. Unsere Mission ist es, eine organisierte, schnelle Datenbank für die MGG-Community bereitzustellen und den sicheren Zugriff auf die technischen Parameter des Spiels zu vereinfachen."},benefits_title:{LATAM:"Beneficios y Utilidades",USD:"Utility & Benefits",PT:"Utilidade e Benefícios",FR:"Avantages et utilités",DE:"Nutzen & Vorteile"},benefit_bullet1:{LATAM:"Acceso instantáneo a IDs de mutantes actualizados.",USD:"Instant, secure access to updated mutant identifiers.",PT:"Acesso instantâneo e seguro aos identificadores de mutantes atualizados.",FR:"Accès instantané et sécurisé aux identifiants mis à jour des mutants.",DE:"Sofortiger, sicherer Zugriff auf aktualisierte Mutantenkennungen."},benefit_bullet2:{LATAM:"Cálculo preciso de recursos para la calculadora EVO.",USD:"Precise calculation of upgrade resources in EVO calculator.",PT:"Cálculo preciso de recursos na calculadora de EVO.",FR:"Calcul précis des ressources d'amélioration dans le calculateur EVO.",DE:"Präzise Berechnung von Upgrade-Ressourcen im EVO-Rechner."},benefit_bullet3:{LATAM:"Sincronización con el blog oficial de Mutodex.",USD:"Real-time linkups with the official Mutodex blog system.",PT:"Links em tempo real com o sistema de blog oficial do Mutodex.",FR:"Liaisons en temps réel avec le système de blog officiel de Mutodex.",DE:"Echtzeit-Verknüpfungen mit dem offiziellen Mutodex-Blog-System."},benefit_bullet4:{LATAM:"Servicios de ayuda y soporte comunitario.",USD:"Group discussion links and active community assistance.",PT:"Links de discussões de grupo e assistência ativa da comunidade.",FR:"Liens de discussion de groupe et assistance communautaire active.",DE:"Gruppen-Diskussionslinks und aktive Unterstützung der Community."},inquiries:{LATAM:"Contacto",USD:"Inquiries",PT:"Dúvidas",FR:"Demandes",DE:"Anfragen"},inquiries_desc:{LATAM:"Si tienes dudas sobre estos términos, puedes contactarme vía WhatsApp.",USD:"If you have any questions or concern regarding these policies, feel free to send a message on WhatsApp.",PT:"Se você tiver alguma dúvida ou preocupação sobre estas políticas, sinta-se à vontade para enviar uma mensagem no WhatsApp.",FR:"Si vous avez des questions ou des préoccupations concernant ces politiques, n'hésitez pas à envoyer un message sur WhatsApp.",DE:"Wenn Sie Fragen oder Bedenken bezüglich dieser Richtlinien haben, können Sie uns gerne eine Nachricht über WhatsApp senden."},get_support:{LATAM:"Consultar ayuda",USD:"Get Support",PT:"Obter Suporte",FR:"Obtenir de l'aide",DE:"Support anfordern"},last_updated:{LATAM:"Última actualización: 12 de Mayo, 2026. Al navegar por este sitio, aceptas estos términos automáticamente.",USD:"Last updated: May 12, 2026. By navigating this site, you automatically accept these terms.",PT:"Última atualização: 12 de maio de 2026. Ao navegar neste site, você aceita automaticamente estes termos.",FR:"Dernière mise à jour : 12 mai 2026. En naviguant sur ce site, vous acceptez automatiquement ces conditions.",DE:"Zuletzt aktualisiert: 12. Mai 2026. Durch das Navigieren auf dieser Website akzeptieren Sie diese Bedingungen automatisch."}};function w5(){const{region:s}=Ie(),n=i=>{var l,p;return((l=Mf[i])==null?void 0:l[s])||((p=Mf[i])==null?void 0:p.USD)||""};return u.jsxs("div",{className:"flex flex-col gap-6",children:[u.jsxs("section",{className:"hero !p-6 md:!p-12",children:[u.jsxs("div",{className:"eyebrow scale-90 md:scale-100",children:[u.jsx(zk,{size:14}),u.jsx("span",{children:n("legal_info")})]}),u.jsxs("h1",{className:"text-3xl md:text-5xl font-black mt-4 mb-4 uppercase tracking-tighter leading-[0.9] md:leading-[1]",children:[n("terms_conditions1"),u.jsx("span",{className:"text-blue-brand-2",children:n("terms_conditions2")})]}),u.jsx("p",{className:"text-muted text-sm md:text-base max-w-2xl mx-auto px-4 opacity-80",children:n("read_carefully")})]}),u.jsx(Wa,{}),u.jsxs("div",{className:"grid md:grid-cols-[1fr_0.4fr] gap-6 items-start",children:[u.jsxs("div",{className:"flex flex-col gap-6",children:[u.jsxs("section",{className:"panel flex flex-col gap-5 p-6 md:p-8",children:[u.jsxs("div",{className:"flex items-center gap-3 border-b border-line pb-4 mb-2",children:[u.jsx(hl,{className:"text-blue-brand-2",size:24}),u.jsx("h2",{className:"m-0 text-xl font-bold uppercase tracking-tight",children:n("rights_reserved")})]}),u.jsx("p",{className:"text-slate-300 leading-relaxed",children:n("rights_desc")})]}),u.jsxs("section",{className:"panel flex flex-col gap-5 p-6 md:p-8 border-l-4 border-red-brand bg-red-brand/5",children:[u.jsxs("div",{className:"flex items-center gap-3 border-b border-white/5 pb-4 mb-2",children:[u.jsx(Pk,{className:"text-red-brand",size:24}),u.jsx("h2",{className:"m-0 text-xl font-bold uppercase tracking-tight text-white",children:n("risks_liability")})]}),u.jsxs("div",{className:"space-y-4",children:[u.jsx("p",{className:"text-slate-300 leading-relaxed m-0",children:n("risks_desc")}),u.jsxs("ul",{className:"grid gap-2 text-sm text-slate-400 list-disc pl-5",children:[u.jsx("li",{children:n("risk_bullet1")}),u.jsx("li",{children:n("risk_bullet2")}),u.jsx("li",{children:n("risk_bullet3")})]})]})]}),u.jsxs("section",{className:"panel flex flex-col gap-5 p-6 md:p-8",children:[u.jsxs("div",{className:"flex items-center gap-3 border-b border-line pb-4 mb-2",children:[u.jsx(Af,{className:"text-blue-brand-2",size:24}),u.jsx("h2",{className:"m-0 text-xl font-bold uppercase tracking-tight",children:n("purpose_title")})]}),u.jsxs("div",{className:"space-y-4",children:[u.jsx("p",{className:"text-slate-300 leading-relaxed",children:n("purpose_desc")}),u.jsxs("div",{className:"bg-white/5 p-4 rounded-xl",children:[u.jsx("h3",{className:"text-sm font-bold text-blue-brand-2 mb-2 uppercase",children:n("benefits_title")}),u.jsxs("ul",{className:"grid gap-2 text-xs md:text-sm text-slate-400",children:[u.jsxs("li",{className:"flex gap-2",children:[u.jsx("span",{children:"•"})," ",u.jsx("span",{children:n("benefit_bullet1")})]}),u.jsxs("li",{className:"flex gap-2",children:[u.jsx("span",{children:"•"})," ",u.jsx("span",{children:n("benefit_bullet2")})]}),u.jsxs("li",{className:"flex gap-2",children:[u.jsx("span",{children:"•"})," ",u.jsx("span",{children:n("benefit_bullet3")})]}),u.jsxs("li",{className:"flex gap-2",children:[u.jsx("span",{children:"•"})," ",u.jsx("span",{children:n("benefit_bullet4")})]})]})]})]})]})]}),u.jsxs("aside",{className:"flex flex-col gap-4",children:[u.jsxs("div",{className:"panel p-5 bg-blue-brand/5 border-blue-brand/20",children:[u.jsx("h3",{className:"text-xs font-bold text-blue-brand-2 uppercase mb-3",children:n("inquiries")}),u.jsx("p",{className:"text-[11px] text-muted leading-relaxed mb-4",children:n("inquiries_desc")}),u.jsx("a",{href:"https://wa.me/51906328464",target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary w-full text-xs py-2.5",children:n("get_support")})]}),u.jsx("p",{className:"text-[10px] text-center text-muted px-2",children:n("last_updated")})]})]})]})}function E5(){const[s,n]=Y.useState(window.location.hash.replace(/^#/,"")||"/"),[i,l]=Y.useState(navigator.onLine);Y.useEffect(()=>{const d=()=>{n(window.location.hash.replace(/^#/,"")||"/")},h=()=>l(!0),f=()=>l(!1);return window.addEventListener("hashchange",d),window.addEventListener("online",h),window.addEventListener("offline",f),()=>{window.removeEventListener("hashchange",d),window.removeEventListener("online",h),window.removeEventListener("offline",f)}},[]);const p=d=>{window.location.hash=d},m=()=>{switch(s){case"/":return u.jsx(ff,{});case"/novedades":return u.jsx(y5,{});case"/servicios":return u.jsx(G5,{});case"/evo":return u.jsx(T5,{});case"/otros":return u.jsx(A5,{});case"/guia":return u.jsx(S5,{});case"/tutoriales":return u.jsx(I5,{});case"/descargas":return u.jsx(V5,{});case"/terminos":return u.jsx(w5,{});default:return u.jsx(ff,{})}};return u.jsx(r5,{currentPath:s,onNavigate:p,isOnline:i,children:m()})}$x.createRoot(document.getElementById("root")).render(u.jsx(Y.StrictMode,{children:u.jsx(l5,{children:u.jsx(E5,{})})}));
