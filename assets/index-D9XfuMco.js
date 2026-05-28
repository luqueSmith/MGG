(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))l(p);new MutationObserver(p=>{for(const m of p)if(m.type==="childList")for(const d of m.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function i(p){const m={};return p.integrity&&(m.integrity=p.integrity),p.referrerPolicy&&(m.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?m.credentials="include":p.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function l(p){if(p.ep)return;p.ep=!0;const m=i(p);fetch(p.href,m)}})();var Wc={exports:{}},ho={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ch;function Ux(){if(Ch)return ho;Ch=1;var s=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function i(l,p,m){var d=null;if(m!==void 0&&(d=""+m),p.key!==void 0&&(d=""+p.key),"key"in p){m={};for(var h in p)h!=="key"&&(m[h]=p[h])}else m=p;return p=m.ref,{$$typeof:s,type:l,key:d,ref:p!==void 0?p:null,props:m}}return ho.Fragment=n,ho.jsx=i,ho.jsxs=i,ho}var Dh;function Px(){return Dh||(Dh=1,Wc.exports=Ux()),Wc.exports}var u=Px(),tu={exports:{}},rt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oh;function Yx(){if(Oh)return rt;Oh=1;var s=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),k=Symbol.for("react.activity"),y=Symbol.iterator;function G(T){return T===null||typeof T!="object"?null:(T=y&&T[y]||T["@@iterator"],typeof T=="function"?T:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,A={};function N(T,U,J){this.props=T,this.context=U,this.refs=A,this.updater=J||M}N.prototype.isReactComponent={},N.prototype.setState=function(T,U){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,U,"setState")},N.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function K(){}K.prototype=N.prototype;function R(T,U,J){this.props=T,this.context=U,this.refs=A,this.updater=J||M}var z=R.prototype=new K;z.constructor=R,I(z,N.prototype),z.isPureReactComponent=!0;var L=Array.isArray;function O(){}var q={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function F(T,U,J){var W=J.ref;return{$$typeof:s,type:T,key:U,ref:W!==void 0?W:null,props:J}}function Z(T,U){return F(T.type,U,T.props)}function it(T){return typeof T=="object"&&T!==null&&T.$$typeof===s}function pt(T){var U={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(J){return U[J]})}var Nt=/\/+/g;function qt(T,U){return typeof T=="object"&&T!==null&&T.key!=null?pt(""+T.key):U.toString(36)}function Et(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(O,O):(T.status="pending",T.then(function(U){T.status==="pending"&&(T.status="fulfilled",T.value=U)},function(U){T.status==="pending"&&(T.status="rejected",T.reason=U)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function D(T,U,J,W,lt){var st=typeof T;(st==="undefined"||st==="boolean")&&(T=null);var vt=!1;if(T===null)vt=!0;else switch(st){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(T.$$typeof){case s:case n:vt=!0;break;case x:return vt=T._init,D(vt(T._payload),U,J,W,lt)}}if(vt)return lt=lt(T),vt=W===""?"."+qt(T,0):W,L(lt)?(J="",vt!=null&&(J=vt.replace(Nt,"$&/")+"/"),D(lt,U,J,"",function(yn){return yn})):lt!=null&&(it(lt)&&(lt=Z(lt,J+(lt.key==null||T&&T.key===lt.key?"":(""+lt.key).replace(Nt,"$&/")+"/")+vt)),U.push(lt)),1;vt=0;var le=W===""?".":W+":";if(L(T))for(var Lt=0;Lt<T.length;Lt++)W=T[Lt],st=le+qt(W,Lt),vt+=D(W,U,J,st,lt);else if(Lt=G(T),typeof Lt=="function")for(T=Lt.call(T),Lt=0;!(W=T.next()).done;)W=W.value,st=le+qt(W,Lt++),vt+=D(W,U,J,st,lt);else if(st==="object"){if(typeof T.then=="function")return D(Et(T),U,J,W,lt);throw U=String(T),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return vt}function Q(T,U,J){if(T==null)return T;var W=[],lt=0;return D(T,W,"","",function(st){return U.call(J,st,lt++)}),W}function $(T){if(T._status===-1){var U=T._result;U=U(),U.then(function(J){(T._status===0||T._status===-1)&&(T._status=1,T._result=J)},function(J){(T._status===0||T._status===-1)&&(T._status=2,T._result=J)}),T._status===-1&&(T._status=0,T._result=U)}if(T._status===1)return T._result.default;throw T._result}var ct=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)},mt={map:Q,forEach:function(T,U,J){Q(T,function(){U.apply(this,arguments)},J)},count:function(T){var U=0;return Q(T,function(){U++}),U},toArray:function(T){return Q(T,function(U){return U})||[]},only:function(T){if(!it(T))throw Error("React.Children.only expected to receive a single React element child.");return T}};return rt.Activity=k,rt.Children=mt,rt.Component=N,rt.Fragment=i,rt.Profiler=p,rt.PureComponent=R,rt.StrictMode=l,rt.Suspense=f,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,rt.__COMPILER_RUNTIME={__proto__:null,c:function(T){return q.H.useMemoCache(T)}},rt.cache=function(T){return function(){return T.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(T,U,J){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var W=I({},T.props),lt=T.key;if(U!=null)for(st in U.key!==void 0&&(lt=""+U.key),U)!X.call(U,st)||st==="key"||st==="__self"||st==="__source"||st==="ref"&&U.ref===void 0||(W[st]=U[st]);var st=arguments.length-2;if(st===1)W.children=J;else if(1<st){for(var vt=Array(st),le=0;le<st;le++)vt[le]=arguments[le+2];W.children=vt}return F(T.type,lt,W)},rt.createContext=function(T){return T={$$typeof:d,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:m,_context:T},T},rt.createElement=function(T,U,J){var W,lt={},st=null;if(U!=null)for(W in U.key!==void 0&&(st=""+U.key),U)X.call(U,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(lt[W]=U[W]);var vt=arguments.length-2;if(vt===1)lt.children=J;else if(1<vt){for(var le=Array(vt),Lt=0;Lt<vt;Lt++)le[Lt]=arguments[Lt+2];lt.children=le}if(T&&T.defaultProps)for(W in vt=T.defaultProps,vt)lt[W]===void 0&&(lt[W]=vt[W]);return F(T,st,lt)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(T){return{$$typeof:h,render:T}},rt.isValidElement=it,rt.lazy=function(T){return{$$typeof:x,_payload:{_status:-1,_result:T},_init:$}},rt.memo=function(T,U){return{$$typeof:b,type:T,compare:U===void 0?null:U}},rt.startTransition=function(T){var U=q.T,J={};q.T=J;try{var W=T(),lt=q.S;lt!==null&&lt(J,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(O,ct)}catch(st){ct(st)}finally{U!==null&&J.types!==null&&(U.types=J.types),q.T=U}},rt.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},rt.use=function(T){return q.H.use(T)},rt.useActionState=function(T,U,J){return q.H.useActionState(T,U,J)},rt.useCallback=function(T,U){return q.H.useCallback(T,U)},rt.useContext=function(T){return q.H.useContext(T)},rt.useDebugValue=function(){},rt.useDeferredValue=function(T,U){return q.H.useDeferredValue(T,U)},rt.useEffect=function(T,U){return q.H.useEffect(T,U)},rt.useEffectEvent=function(T){return q.H.useEffectEvent(T)},rt.useId=function(){return q.H.useId()},rt.useImperativeHandle=function(T,U,J){return q.H.useImperativeHandle(T,U,J)},rt.useInsertionEffect=function(T,U){return q.H.useInsertionEffect(T,U)},rt.useLayoutEffect=function(T,U){return q.H.useLayoutEffect(T,U)},rt.useMemo=function(T,U){return q.H.useMemo(T,U)},rt.useOptimistic=function(T,U){return q.H.useOptimistic(T,U)},rt.useReducer=function(T,U,J){return q.H.useReducer(T,U,J)},rt.useRef=function(T){return q.H.useRef(T)},rt.useState=function(T){return q.H.useState(T)},rt.useSyncExternalStore=function(T,U,J){return q.H.useSyncExternalStore(T,U,J)},rt.useTransition=function(){return q.H.useTransition()},rt.version="19.2.6",rt}var Rh;function np(){return Rh||(Rh=1,tu.exports=Yx()),tu.exports}var Y=np(),eu={exports:{}},bo={},au={exports:{}},su={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hh;function Xx(){return Hh||(Hh=1,(function(s){function n(D,Q){var $=D.length;D.push(Q);t:for(;0<$;){var ct=$-1>>>1,mt=D[ct];if(0<p(mt,Q))D[ct]=Q,D[$]=mt,$=ct;else break t}}function i(D){return D.length===0?null:D[0]}function l(D){if(D.length===0)return null;var Q=D[0],$=D.pop();if($!==Q){D[0]=$;t:for(var ct=0,mt=D.length,T=mt>>>1;ct<T;){var U=2*(ct+1)-1,J=D[U],W=U+1,lt=D[W];if(0>p(J,$))W<mt&&0>p(lt,J)?(D[ct]=lt,D[W]=$,ct=W):(D[ct]=J,D[U]=$,ct=U);else if(W<mt&&0>p(lt,$))D[ct]=lt,D[W]=$,ct=W;else break t}}return Q}function p(D,Q){var $=D.sortIndex-Q.sortIndex;return $!==0?$:D.id-Q.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;s.unstable_now=function(){return m.now()}}else{var d=Date,h=d.now();s.unstable_now=function(){return d.now()-h}}var f=[],b=[],x=1,k=null,y=3,G=!1,M=!1,I=!1,A=!1,N=typeof setTimeout=="function"?setTimeout:null,K=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function z(D){for(var Q=i(b);Q!==null;){if(Q.callback===null)l(b);else if(Q.startTime<=D)l(b),Q.sortIndex=Q.expirationTime,n(f,Q);else break;Q=i(b)}}function L(D){if(I=!1,z(D),!M)if(i(f)!==null)M=!0,O||(O=!0,pt());else{var Q=i(b);Q!==null&&Et(L,Q.startTime-D)}}var O=!1,q=-1,X=5,F=-1;function Z(){return A?!0:!(s.unstable_now()-F<X)}function it(){if(A=!1,O){var D=s.unstable_now();F=D;var Q=!0;try{t:{M=!1,I&&(I=!1,K(q),q=-1),G=!0;var $=y;try{e:{for(z(D),k=i(f);k!==null&&!(k.expirationTime>D&&Z());){var ct=k.callback;if(typeof ct=="function"){k.callback=null,y=k.priorityLevel;var mt=ct(k.expirationTime<=D);if(D=s.unstable_now(),typeof mt=="function"){k.callback=mt,z(D),Q=!0;break e}k===i(f)&&l(f),z(D)}else l(f);k=i(f)}if(k!==null)Q=!0;else{var T=i(b);T!==null&&Et(L,T.startTime-D),Q=!1}}break t}finally{k=null,y=$,G=!1}Q=void 0}}finally{Q?pt():O=!1}}}var pt;if(typeof R=="function")pt=function(){R(it)};else if(typeof MessageChannel<"u"){var Nt=new MessageChannel,qt=Nt.port2;Nt.port1.onmessage=it,pt=function(){qt.postMessage(null)}}else pt=function(){N(it,0)};function Et(D,Q){q=N(function(){D(s.unstable_now())},Q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(D){D.callback=null},s.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<D?Math.floor(1e3/D):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_next=function(D){switch(y){case 1:case 2:case 3:var Q=3;break;default:Q=y}var $=y;y=Q;try{return D()}finally{y=$}},s.unstable_requestPaint=function(){A=!0},s.unstable_runWithPriority=function(D,Q){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var $=y;y=D;try{return Q()}finally{y=$}},s.unstable_scheduleCallback=function(D,Q,$){var ct=s.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ct+$:ct):$=ct,D){case 1:var mt=-1;break;case 2:mt=250;break;case 5:mt=1073741823;break;case 4:mt=1e4;break;default:mt=5e3}return mt=$+mt,D={id:x++,callback:Q,priorityLevel:D,startTime:$,expirationTime:mt,sortIndex:-1},$>ct?(D.sortIndex=$,n(b,D),i(f)===null&&D===i(b)&&(I?(K(q),q=-1):I=!0,Et(L,$-ct))):(D.sortIndex=mt,n(f,D),M||G||(M=!0,O||(O=!0,pt()))),D},s.unstable_shouldYield=Z,s.unstable_wrapCallback=function(D){var Q=y;return function(){var $=y;y=Q;try{return D.apply(this,arguments)}finally{y=$}}}})(su)),su}var zh;function Kx(){return zh||(zh=1,au.exports=Xx()),au.exports}var nu={exports:{}},ie={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lh;function Fx(){if(Lh)return ie;Lh=1;var s=np();function n(f){var b="https://react.dev/errors/"+f;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)b+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+f+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var l={d:{f:i,r:function(){throw Error(n(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},p=Symbol.for("react.portal");function m(f,b,x){var k=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:k==null?null:""+k,children:f,containerInfo:b,implementation:x}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(f,b){if(f==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return ie.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,ie.createPortal=function(f,b){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(n(299));return m(f,b,null,x)},ie.flushSync=function(f){var b=d.T,x=l.p;try{if(d.T=null,l.p=2,f)return f()}finally{d.T=b,l.p=x,l.d.f()}},ie.preconnect=function(f,b){typeof f=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,l.d.C(f,b))},ie.prefetchDNS=function(f){typeof f=="string"&&l.d.D(f)},ie.preinit=function(f,b){if(typeof f=="string"&&b&&typeof b.as=="string"){var x=b.as,k=h(x,b.crossOrigin),y=typeof b.integrity=="string"?b.integrity:void 0,G=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;x==="style"?l.d.S(f,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:k,integrity:y,fetchPriority:G}):x==="script"&&l.d.X(f,{crossOrigin:k,integrity:y,fetchPriority:G,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},ie.preinitModule=function(f,b){if(typeof f=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var x=h(b.as,b.crossOrigin);l.d.M(f,{crossOrigin:x,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&l.d.M(f)},ie.preload=function(f,b){if(typeof f=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var x=b.as,k=h(x,b.crossOrigin);l.d.L(f,x,{crossOrigin:k,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},ie.preloadModule=function(f,b){if(typeof f=="string")if(b){var x=h(b.as,b.crossOrigin);l.d.m(f,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:x,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else l.d.m(f)},ie.requestFormReset=function(f){l.d.r(f)},ie.unstable_batchedUpdates=function(f,b){return f(b)},ie.useFormState=function(f,b,x){return d.H.useFormState(f,b,x)},ie.useFormStatus=function(){return d.H.useHostTransitionStatus()},ie.version="19.2.6",ie}var Bh;function Zx(){if(Bh)return nu.exports;Bh=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(n){console.error(n)}}return s(),nu.exports=Fx(),nu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uh;function Qx(){if(Uh)return bo;Uh=1;var s=Kx(),n=np(),i=Zx();function l(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function m(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function d(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function h(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function f(t){if(m(t)!==t)throw Error(l(188))}function b(t){var e=t.alternate;if(!e){if(e=m(t),e===null)throw Error(l(188));return e!==t?null:t}for(var a=t,o=e;;){var r=a.return;if(r===null)break;var c=r.alternate;if(c===null){if(o=r.return,o!==null){a=o;continue}break}if(r.child===c.child){for(c=r.child;c;){if(c===a)return f(r),t;if(c===o)return f(r),e;c=c.sibling}throw Error(l(188))}if(a.return!==o.return)a=r,o=c;else{for(var g=!1,_=r.child;_;){if(_===a){g=!0,a=r,o=c;break}if(_===o){g=!0,o=r,a=c;break}_=_.sibling}if(!g){for(_=c.child;_;){if(_===a){g=!0,a=c,o=r;break}if(_===o){g=!0,o=c,a=r;break}_=_.sibling}if(!g)throw Error(l(189))}}if(a.alternate!==o)throw Error(l(190))}if(a.tag!==3)throw Error(l(188));return a.stateNode.current===a?t:e}function x(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=x(t),e!==null)return e;t=t.sibling}return null}var k=Object.assign,y=Symbol.for("react.element"),G=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),K=Symbol.for("react.consumer"),R=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),F=Symbol.for("react.activity"),Z=Symbol.for("react.memo_cache_sentinel"),it=Symbol.iterator;function pt(t){return t===null||typeof t!="object"?null:(t=it&&t[it]||t["@@iterator"],typeof t=="function"?t:null)}var Nt=Symbol.for("react.client.reference");function qt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Nt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case I:return"Fragment";case N:return"Profiler";case A:return"StrictMode";case L:return"Suspense";case O:return"SuspenseList";case F:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case R:return t.displayName||"Context";case K:return(t._context.displayName||"Context")+".Consumer";case z:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case q:return e=t.displayName||null,e!==null?e:qt(t.type)||"Memo";case X:e=t._payload,t=t._init;try{return qt(t(e))}catch{}}return null}var Et=Array.isArray,D=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},ct=[],mt=-1;function T(t){return{current:t}}function U(t){0>mt||(t.current=ct[mt],ct[mt]=null,mt--)}function J(t,e){mt++,ct[mt]=t.current,t.current=e}var W=T(null),lt=T(null),st=T(null),vt=T(null);function le(t,e){switch(J(st,e),J(lt,t),J(W,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?nh(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=nh(e),t=oh(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}U(W),J(W,t)}function Lt(){U(W),U(lt),U(st)}function yn(t){t.memoizedState!==null&&J(vt,t);var e=W.current,a=oh(e,t.type);e!==a&&(J(lt,t),J(W,a))}function Do(t){lt.current===t&&(U(W),U(lt)),vt.current===t&&(U(vt),uo._currentValue=$)}var Cl,qp;function es(t){if(Cl===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);Cl=e&&e[1]||"",qp=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Cl+t+qp}var Dl=!1;function Ol(t,e){if(!t||Dl)return"";Dl=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(e){var P=function(){throw Error()};if(Object.defineProperty(P.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(P,[])}catch(C){var E=C}Reflect.construct(t,[],P)}else{try{P.call()}catch(C){E=C}t.call(P.prototype)}}else{try{throw Error()}catch(C){E=C}(P=t())&&typeof P.catch=="function"&&P.catch(function(){})}}catch(C){if(C&&E&&typeof C.stack=="string")return[C.stack,E.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=o.DetermineComponentFrameRoot(),g=c[0],_=c[1];if(g&&_){var v=g.split(`
`),w=_.split(`
`);for(r=o=0;o<v.length&&!v[o].includes("DetermineComponentFrameRoot");)o++;for(;r<w.length&&!w[r].includes("DetermineComponentFrameRoot");)r++;if(o===v.length||r===w.length)for(o=v.length-1,r=w.length-1;1<=o&&0<=r&&v[o]!==w[r];)r--;for(;1<=o&&0<=r;o--,r--)if(v[o]!==w[r]){if(o!==1||r!==1)do if(o--,r--,0>r||v[o]!==w[r]){var H=`
`+v[o].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=o&&0<=r);break}}}finally{Dl=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?es(a):""}function k0(t,e){switch(t.tag){case 26:case 27:case 5:return es(t.type);case 16:return es("Lazy");case 13:return t.child!==e&&e!==null?es("Suspense Fallback"):es("Suspense");case 19:return es("SuspenseList");case 0:case 15:return Ol(t.type,!1);case 11:return Ol(t.type.render,!1);case 1:return Ol(t.type,!0);case 31:return es("Activity");default:return""}}function Cp(t){try{var e="",a=null;do e+=k0(t,a),a=t,t=t.return;while(t);return e}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Rl=Object.prototype.hasOwnProperty,Hl=s.unstable_scheduleCallback,zl=s.unstable_cancelCallback,y0=s.unstable_shouldYield,G0=s.unstable_requestPaint,_e=s.unstable_now,v0=s.unstable_getCurrentPriorityLevel,Dp=s.unstable_ImmediatePriority,Op=s.unstable_UserBlockingPriority,Oo=s.unstable_NormalPriority,M0=s.unstable_LowPriority,Rp=s.unstable_IdlePriority,T0=s.log,j0=s.unstable_setDisableYieldValue,Gn=null,xe=null;function Ga(t){if(typeof T0=="function"&&j0(t),xe&&typeof xe.setStrictMode=="function")try{xe.setStrictMode(Gn,t)}catch{}}var ke=Math.clz32?Math.clz32:I0,A0=Math.log,S0=Math.LN2;function I0(t){return t>>>=0,t===0?32:31-(A0(t)/S0|0)|0}var Ro=256,Ho=262144,zo=4194304;function as(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Lo(t,e,a){var o=t.pendingLanes;if(o===0)return 0;var r=0,c=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var _=o&134217727;return _!==0?(o=_&~c,o!==0?r=as(o):(g&=_,g!==0?r=as(g):a||(a=_&~t,a!==0&&(r=as(a))))):(_=o&~c,_!==0?r=as(_):g!==0?r=as(g):a||(a=o&~t,a!==0&&(r=as(a)))),r===0?0:e!==0&&e!==r&&(e&c)===0&&(c=r&-r,a=e&-e,c>=a||c===32&&(a&4194048)!==0)?e:r}function vn(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function V0(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hp(){var t=zo;return zo<<=1,(zo&62914560)===0&&(zo=4194304),t}function Ll(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function Mn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function w0(t,e,a,o,r,c){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var _=t.entanglements,v=t.expirationTimes,w=t.hiddenUpdates;for(a=g&~a;0<a;){var H=31-ke(a),P=1<<H;_[H]=0,v[H]=-1;var E=w[H];if(E!==null)for(w[H]=null,H=0;H<E.length;H++){var C=E[H];C!==null&&(C.lane&=-536870913)}a&=~P}o!==0&&zp(t,o,0),c!==0&&r===0&&t.tag!==0&&(t.suspendedLanes|=c&~(g&~e))}function zp(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var o=31-ke(e);t.entangledLanes|=e,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Lp(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var o=31-ke(a),r=1<<o;r&e|t[o]&e&&(t[o]|=e),a&=~r}}function Bp(t,e){var a=e&-e;return a=(a&42)!==0?1:Bl(a),(a&(t.suspendedLanes|e))!==0?0:a}function Bl(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ul(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Up(){var t=Q.p;return t!==0?t:(t=window.event,t===void 0?32:Sh(t.type))}function Pp(t,e){var a=Q.p;try{return Q.p=t,e()}finally{Q.p=a}}var va=Math.random().toString(36).slice(2),Wt="__reactFiber$"+va,pe="__reactProps$"+va,js="__reactContainer$"+va,Pl="__reactEvents$"+va,E0="__reactListeners$"+va,N0="__reactHandles$"+va,Yp="__reactResources$"+va,Tn="__reactMarker$"+va;function Yl(t){delete t[Wt],delete t[pe],delete t[Pl],delete t[E0],delete t[N0]}function As(t){var e=t[Wt];if(e)return e;for(var a=t.parentNode;a;){if(e=a[js]||a[Wt]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=dh(t);t!==null;){if(a=t[Wt])return a;t=dh(t)}return e}t=a,a=t.parentNode}return null}function Ss(t){if(t=t[Wt]||t[js]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function jn(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(l(33))}function Is(t){var e=t[Yp];return e||(e=t[Yp]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Jt(t){t[Tn]=!0}var Xp=new Set,Kp={};function ss(t,e){Vs(t,e),Vs(t+"Capture",e)}function Vs(t,e){for(Kp[t]=e,t=0;t<e.length;t++)Xp.add(e[t])}var q0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Fp={},Zp={};function C0(t){return Rl.call(Zp,t)?!0:Rl.call(Fp,t)?!1:q0.test(t)?Zp[t]=!0:(Fp[t]=!0,!1)}function Bo(t,e,a){if(C0(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var o=e.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function Uo(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function aa(t,e,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+o)}}function Ve(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Qp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function D0(t,e,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var r=o.get,c=o.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(g){a=""+g,c.call(this,g)}}),Object.defineProperty(t,e,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Xl(t){if(!t._valueTracker){var e=Qp(t)?"checked":"value";t._valueTracker=D0(t,e,""+t[e])}}function Jp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),o="";return t&&(o=Qp(t)?t.checked?"true":"false":t.value),t=o,t!==a?(e.setValue(t),!0):!1}function Po(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var O0=/[\n"\\]/g;function we(t){return t.replace(O0,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Kl(t,e,a,o,r,c,g,_){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),e!=null?g==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Ve(e)):t.value!==""+Ve(e)&&(t.value=""+Ve(e)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),e!=null?Fl(t,g,Ve(e)):a!=null?Fl(t,g,Ve(a)):o!=null&&t.removeAttribute("value"),r==null&&c!=null&&(t.defaultChecked=!!c),r!=null&&(t.checked=r&&typeof r!="function"&&typeof r!="symbol"),_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.name=""+Ve(_):t.removeAttribute("name")}function $p(t,e,a,o,r,c,g,_){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),e!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||e!=null)){Xl(t);return}a=a!=null?""+Ve(a):"",e=e!=null?""+Ve(e):a,_||e===t.value||(t.value=e),t.defaultValue=e}o=o??r,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=_?t.checked:!!o,t.defaultChecked=!!o,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),Xl(t)}function Fl(t,e,a){e==="number"&&Po(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ws(t,e,a,o){if(t=t.options,e){e={};for(var r=0;r<a.length;r++)e["$"+a[r]]=!0;for(a=0;a<t.length;a++)r=e.hasOwnProperty("$"+t[a].value),t[a].selected!==r&&(t[a].selected=r),r&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Ve(a),e=null,r=0;r<t.length;r++){if(t[r].value===a){t[r].selected=!0,o&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Wp(t,e,a){if(e!=null&&(e=""+Ve(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+Ve(a):""}function td(t,e,a,o){if(e==null){if(o!=null){if(a!=null)throw Error(l(92));if(Et(o)){if(1<o.length)throw Error(l(93));o=o[0]}a=o}a==null&&(a=""),e=a}a=Ve(e),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Xl(t)}function Es(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var R0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ed(t,e,a){var o=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":o?t.setProperty(e,a):typeof a!="number"||a===0||R0.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function ad(t,e,a){if(e!=null&&typeof e!="object")throw Error(l(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||e!=null&&e.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var r in e)o=e[r],e.hasOwnProperty(r)&&a[r]!==o&&ed(t,r,o)}else for(var c in e)e.hasOwnProperty(c)&&ed(t,c,e[c])}function Zl(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var H0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),z0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yo(t){return z0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function sa(){}var Ql=null;function Jl(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ns=null,qs=null;function sd(t){var e=Ss(t);if(e&&(t=e.stateNode)){var a=t[pe]||null;t:switch(t=e.stateNode,e.type){case"input":if(Kl(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+we(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var o=a[e];if(o!==t&&o.form===t.form){var r=o[pe]||null;if(!r)throw Error(l(90));Kl(o,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(e=0;e<a.length;e++)o=a[e],o.form===t.form&&Jp(o)}break t;case"textarea":Wp(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&ws(t,!!a.multiple,e,!1)}}}var $l=!1;function nd(t,e,a){if($l)return t(e,a);$l=!0;try{var o=t(e);return o}finally{if($l=!1,(Ns!==null||qs!==null)&&(Ei(),Ns&&(e=Ns,t=qs,qs=Ns=null,sd(e),t)))for(e=0;e<t.length;e++)sd(t[e])}}function An(t,e){var a=t.stateNode;if(a===null)return null;var o=a[pe]||null;if(o===null)return null;a=o[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(l(231,e,typeof a));return a}var na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wl=!1;if(na)try{var Sn={};Object.defineProperty(Sn,"passive",{get:function(){Wl=!0}}),window.addEventListener("test",Sn,Sn),window.removeEventListener("test",Sn,Sn)}catch{Wl=!1}var Ma=null,tr=null,Xo=null;function od(){if(Xo)return Xo;var t,e=tr,a=e.length,o,r="value"in Ma?Ma.value:Ma.textContent,c=r.length;for(t=0;t<a&&e[t]===r[t];t++);var g=a-t;for(o=1;o<=g&&e[a-o]===r[c-o];o++);return Xo=r.slice(t,1<o?1-o:void 0)}function Ko(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Fo(){return!0}function id(){return!1}function de(t){function e(a,o,r,c,g){this._reactName=a,this._targetInst=r,this.type=o,this.nativeEvent=c,this.target=g,this.currentTarget=null;for(var _ in t)t.hasOwnProperty(_)&&(a=t[_],this[_]=a?a(c):c[_]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Fo:id,this.isPropagationStopped=id,this}return k(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Fo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Fo)},persist:function(){},isPersistent:Fo}),e}var ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zo=de(ns),In=k({},ns,{view:0,detail:0}),L0=de(In),er,ar,Vn,Qo=k({},In,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nr,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vn&&(Vn&&t.type==="mousemove"?(er=t.screenX-Vn.screenX,ar=t.screenY-Vn.screenY):ar=er=0,Vn=t),er)},movementY:function(t){return"movementY"in t?t.movementY:ar}}),ld=de(Qo),B0=k({},Qo,{dataTransfer:0}),U0=de(B0),P0=k({},In,{relatedTarget:0}),sr=de(P0),Y0=k({},ns,{animationName:0,elapsedTime:0,pseudoElement:0}),X0=de(Y0),K0=k({},ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),F0=de(K0),Z0=k({},ns,{data:0}),rd=de(Z0),Q0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},J0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function W0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=$0[t])?!!e[t]:!1}function nr(){return W0}var t1=k({},In,{key:function(t){if(t.key){var e=Q0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ko(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?J0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nr,charCode:function(t){return t.type==="keypress"?Ko(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ko(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),e1=de(t1),a1=k({},Qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cd=de(a1),s1=k({},In,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nr}),n1=de(s1),o1=k({},ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),i1=de(o1),l1=k({},Qo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),r1=de(l1),c1=k({},ns,{newState:0,oldState:0}),u1=de(c1),p1=[9,13,27,32],or=na&&"CompositionEvent"in window,wn=null;na&&"documentMode"in document&&(wn=document.documentMode);var d1=na&&"TextEvent"in window&&!wn,ud=na&&(!or||wn&&8<wn&&11>=wn),pd=" ",dd=!1;function md(t,e){switch(t){case"keyup":return p1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Cs=!1;function m1(t,e){switch(t){case"compositionend":return gd(e);case"keypress":return e.which!==32?null:(dd=!0,pd);case"textInput":return t=e.data,t===pd&&dd?null:t;default:return null}}function g1(t,e){if(Cs)return t==="compositionend"||!or&&md(t,e)?(t=od(),Xo=tr=Ma=null,Cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ud&&e.locale!=="ko"?null:e.data;default:return null}}var h1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!h1[t.type]:e==="textarea"}function bd(t,e,a,o){Ns?qs?qs.push(o):qs=[o]:Ns=o,e=Hi(e,"onChange"),0<e.length&&(a=new Zo("onChange","change",null,a,o),t.push({event:a,listeners:e}))}var En=null,Nn=null;function b1(t){$g(t,0)}function Jo(t){var e=jn(t);if(Jp(e))return t}function fd(t,e){if(t==="change")return e}var _d=!1;if(na){var ir;if(na){var lr="oninput"in document;if(!lr){var xd=document.createElement("div");xd.setAttribute("oninput","return;"),lr=typeof xd.oninput=="function"}ir=lr}else ir=!1;_d=ir&&(!document.documentMode||9<document.documentMode)}function kd(){En&&(En.detachEvent("onpropertychange",yd),Nn=En=null)}function yd(t){if(t.propertyName==="value"&&Jo(Nn)){var e=[];bd(e,Nn,t,Jl(t)),nd(b1,e)}}function f1(t,e,a){t==="focusin"?(kd(),En=e,Nn=a,En.attachEvent("onpropertychange",yd)):t==="focusout"&&kd()}function _1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Jo(Nn)}function x1(t,e){if(t==="click")return Jo(e)}function k1(t,e){if(t==="input"||t==="change")return Jo(e)}function y1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ye=typeof Object.is=="function"?Object.is:y1;function qn(t,e){if(ye(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),o=Object.keys(e);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var r=a[o];if(!Rl.call(e,r)||!ye(t[r],e[r]))return!1}return!0}function Gd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function vd(t,e){var a=Gd(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=e&&o>=e)return{node:a,offset:e-t};t=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Gd(a)}}function Md(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Md(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Td(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Po(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=Po(t.document)}return e}function rr(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var G1=na&&"documentMode"in document&&11>=document.documentMode,Ds=null,cr=null,Cn=null,ur=!1;function jd(t,e,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ur||Ds==null||Ds!==Po(o)||(o=Ds,"selectionStart"in o&&rr(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Cn&&qn(Cn,o)||(Cn=o,o=Hi(cr,"onSelect"),0<o.length&&(e=new Zo("onSelect","select",null,e,a),t.push({event:e,listeners:o}),e.target=Ds)))}function os(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var Os={animationend:os("Animation","AnimationEnd"),animationiteration:os("Animation","AnimationIteration"),animationstart:os("Animation","AnimationStart"),transitionrun:os("Transition","TransitionRun"),transitionstart:os("Transition","TransitionStart"),transitioncancel:os("Transition","TransitionCancel"),transitionend:os("Transition","TransitionEnd")},pr={},Ad={};na&&(Ad=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function is(t){if(pr[t])return pr[t];if(!Os[t])return t;var e=Os[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in Ad)return pr[t]=e[a];return t}var Sd=is("animationend"),Id=is("animationiteration"),Vd=is("animationstart"),v1=is("transitionrun"),M1=is("transitionstart"),T1=is("transitioncancel"),wd=is("transitionend"),Ed=new Map,dr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");dr.push("scrollEnd");function Be(t,e){Ed.set(t,e),ss(e,[t])}var $o=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ee=[],Rs=0,mr=0;function Wo(){for(var t=Rs,e=mr=Rs=0;e<t;){var a=Ee[e];Ee[e++]=null;var o=Ee[e];Ee[e++]=null;var r=Ee[e];Ee[e++]=null;var c=Ee[e];if(Ee[e++]=null,o!==null&&r!==null){var g=o.pending;g===null?r.next=r:(r.next=g.next,g.next=r),o.pending=r}c!==0&&Nd(a,r,c)}}function ti(t,e,a,o){Ee[Rs++]=t,Ee[Rs++]=e,Ee[Rs++]=a,Ee[Rs++]=o,mr|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function gr(t,e,a,o){return ti(t,e,a,o),ei(t)}function ls(t,e){return ti(t,null,null,e),ei(t)}function Nd(t,e,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var r=!1,c=t.return;c!==null;)c.childLanes|=a,o=c.alternate,o!==null&&(o.childLanes|=a),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(r=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,r&&e!==null&&(r=31-ke(a),t=c.hiddenUpdates,o=t[r],o===null?t[r]=[e]:o.push(e),e.lane=a|536870912),c):null}function ei(t){if(50<so)throw so=0,vc=null,Error(l(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Hs={};function j1(t,e,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ge(t,e,a,o){return new j1(t,e,a,o)}function hr(t){return t=t.prototype,!(!t||!t.isReactComponent)}function oa(t,e){var a=t.alternate;return a===null?(a=Ge(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function qd(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function ai(t,e,a,o,r,c){var g=0;if(o=t,typeof t=="function")hr(t)&&(g=1);else if(typeof t=="string")g=wx(t,a,W.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case F:return t=Ge(31,a,e,r),t.elementType=F,t.lanes=c,t;case I:return rs(a.children,r,c,e);case A:g=8,r|=24;break;case N:return t=Ge(12,a,e,r|2),t.elementType=N,t.lanes=c,t;case L:return t=Ge(13,a,e,r),t.elementType=L,t.lanes=c,t;case O:return t=Ge(19,a,e,r),t.elementType=O,t.lanes=c,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:g=10;break t;case K:g=9;break t;case z:g=11;break t;case q:g=14;break t;case X:g=16,o=null;break t}g=29,a=Error(l(130,t===null?"null":typeof t,"")),o=null}return e=Ge(g,a,e,r),e.elementType=t,e.type=o,e.lanes=c,e}function rs(t,e,a,o){return t=Ge(7,t,o,e),t.lanes=a,t}function br(t,e,a){return t=Ge(6,t,null,e),t.lanes=a,t}function Cd(t){var e=Ge(18,null,null,0);return e.stateNode=t,e}function fr(t,e,a){return e=Ge(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Dd=new WeakMap;function Ne(t,e){if(typeof t=="object"&&t!==null){var a=Dd.get(t);return a!==void 0?a:(e={value:t,source:e,stack:Cp(e)},Dd.set(t,e),e)}return{value:t,source:e,stack:Cp(e)}}var zs=[],Ls=0,si=null,Dn=0,qe=[],Ce=0,Ta=null,Fe=1,Ze="";function ia(t,e){zs[Ls++]=Dn,zs[Ls++]=si,si=t,Dn=e}function Od(t,e,a){qe[Ce++]=Fe,qe[Ce++]=Ze,qe[Ce++]=Ta,Ta=t;var o=Fe;t=Ze;var r=32-ke(o)-1;o&=~(1<<r),a+=1;var c=32-ke(e)+r;if(30<c){var g=r-r%5;c=(o&(1<<g)-1).toString(32),o>>=g,r-=g,Fe=1<<32-ke(e)+r|a<<r|o,Ze=c+t}else Fe=1<<c|a<<r|o,Ze=t}function _r(t){t.return!==null&&(ia(t,1),Od(t,1,0))}function xr(t){for(;t===si;)si=zs[--Ls],zs[Ls]=null,Dn=zs[--Ls],zs[Ls]=null;for(;t===Ta;)Ta=qe[--Ce],qe[Ce]=null,Ze=qe[--Ce],qe[Ce]=null,Fe=qe[--Ce],qe[Ce]=null}function Rd(t,e){qe[Ce++]=Fe,qe[Ce++]=Ze,qe[Ce++]=Ta,Fe=e.id,Ze=e.overflow,Ta=t}var te=null,Ct=null,xt=!1,ja=null,De=!1,kr=Error(l(519));function Aa(t){var e=Error(l(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw On(Ne(e,t)),kr}function Hd(t){var e=t.stateNode,a=t.type,o=t.memoizedProps;switch(e[Wt]=t,e[pe]=o,a){case"dialog":ht("cancel",e),ht("close",e);break;case"iframe":case"object":case"embed":ht("load",e);break;case"video":case"audio":for(a=0;a<oo.length;a++)ht(oo[a],e);break;case"source":ht("error",e);break;case"img":case"image":case"link":ht("error",e),ht("load",e);break;case"details":ht("toggle",e);break;case"input":ht("invalid",e),$p(e,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ht("invalid",e);break;case"textarea":ht("invalid",e),td(e,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||o.suppressHydrationWarning===!0||ah(e.textContent,a)?(o.popover!=null&&(ht("beforetoggle",e),ht("toggle",e)),o.onScroll!=null&&ht("scroll",e),o.onScrollEnd!=null&&ht("scrollend",e),o.onClick!=null&&(e.onclick=sa),e=!0):e=!1,e||Aa(t,!0)}function zd(t){for(te=t.return;te;)switch(te.tag){case 5:case 31:case 13:De=!1;return;case 27:case 3:De=!0;return;default:te=te.return}}function Bs(t){if(t!==te)return!1;if(!xt)return zd(t),xt=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Rc(t.type,t.memoizedProps)),a=!a),a&&Ct&&Aa(t),zd(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(l(317));Ct=ph(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(l(317));Ct=ph(t)}else e===27?(e=Ct,La(t.type)?(t=Uc,Uc=null,Ct=t):Ct=e):Ct=te?Re(t.stateNode.nextSibling):null;return!0}function cs(){Ct=te=null,xt=!1}function yr(){var t=ja;return t!==null&&(be===null?be=t:be.push.apply(be,t),ja=null),t}function On(t){ja===null?ja=[t]:ja.push(t)}var Gr=T(null),us=null,la=null;function Sa(t,e,a){J(Gr,e._currentValue),e._currentValue=a}function ra(t){t._currentValue=Gr.current,U(Gr)}function vr(t,e,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,o!==null&&(o.childLanes|=e)):o!==null&&(o.childLanes&e)!==e&&(o.childLanes|=e),t===a)break;t=t.return}}function Mr(t,e,a,o){var r=t.child;for(r!==null&&(r.return=t);r!==null;){var c=r.dependencies;if(c!==null){var g=r.child;c=c.firstContext;t:for(;c!==null;){var _=c;c=r;for(var v=0;v<e.length;v++)if(_.context===e[v]){c.lanes|=a,_=c.alternate,_!==null&&(_.lanes|=a),vr(c.return,a,t),o||(g=null);break t}c=_.next}}else if(r.tag===18){if(g=r.return,g===null)throw Error(l(341));g.lanes|=a,c=g.alternate,c!==null&&(c.lanes|=a),vr(g,a,t),g=null}else g=r.child;if(g!==null)g.return=r;else for(g=r;g!==null;){if(g===t){g=null;break}if(r=g.sibling,r!==null){r.return=g.return,g=r;break}g=g.return}r=g}}function Us(t,e,a,o){t=null;for(var r=e,c=!1;r!==null;){if(!c){if((r.flags&524288)!==0)c=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var g=r.alternate;if(g===null)throw Error(l(387));if(g=g.memoizedProps,g!==null){var _=r.type;ye(r.pendingProps.value,g.value)||(t!==null?t.push(_):t=[_])}}else if(r===vt.current){if(g=r.alternate,g===null)throw Error(l(387));g.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(t!==null?t.push(uo):t=[uo])}r=r.return}t!==null&&Mr(e,t,a,o),e.flags|=262144}function ni(t){for(t=t.firstContext;t!==null;){if(!ye(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ps(t){us=t,la=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ee(t){return Ld(us,t)}function oi(t,e){return us===null&&ps(t),Ld(t,e)}function Ld(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},la===null){if(t===null)throw Error(l(308));la=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else la=la.next=e;return a}var A1=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},S1=s.unstable_scheduleCallback,I1=s.unstable_NormalPriority,Pt={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tr(){return{controller:new A1,data:new Map,refCount:0}}function Rn(t){t.refCount--,t.refCount===0&&S1(I1,function(){t.controller.abort()})}var Hn=null,jr=0,Ps=0,Ys=null;function V1(t,e){if(Hn===null){var a=Hn=[];jr=0,Ps=Ic(),Ys={status:"pending",value:void 0,then:function(o){a.push(o)}}}return jr++,e.then(Bd,Bd),e}function Bd(){if(--jr===0&&Hn!==null){Ys!==null&&(Ys.status="fulfilled");var t=Hn;Hn=null,Ps=0,Ys=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function w1(t,e){var a=[],o={status:"pending",value:null,reason:null,then:function(r){a.push(r)}};return t.then(function(){o.status="fulfilled",o.value=e;for(var r=0;r<a.length;r++)(0,a[r])(e)},function(r){for(o.status="rejected",o.reason=r,r=0;r<a.length;r++)(0,a[r])(void 0)}),o}var Ud=D.S;D.S=function(t,e){jg=_e(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&V1(t,e),Ud!==null&&Ud(t,e)};var ds=T(null);function Ar(){var t=ds.current;return t!==null?t:It.pooledCache}function ii(t,e){e===null?J(ds,ds.current):J(ds,e.pool)}function Pd(){var t=Ar();return t===null?null:{parent:Pt._currentValue,pool:t}}var Xs=Error(l(460)),Sr=Error(l(474)),li=Error(l(542)),ri={then:function(){}};function Yd(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Xd(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(sa,sa),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Fd(t),t;default:if(typeof e.status=="string")e.then(sa,sa);else{if(t=It,t!==null&&100<t.shellSuspendCounter)throw Error(l(482));t=e,t.status="pending",t.then(function(o){if(e.status==="pending"){var r=e;r.status="fulfilled",r.value=o}},function(o){if(e.status==="pending"){var r=e;r.status="rejected",r.reason=o}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Fd(t),t}throw gs=e,Xs}}function ms(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(gs=a,Xs):a}}var gs=null;function Kd(){if(gs===null)throw Error(l(459));var t=gs;return gs=null,t}function Fd(t){if(t===Xs||t===li)throw Error(l(483))}var Ks=null,zn=0;function ci(t){var e=zn;return zn+=1,Ks===null&&(Ks=[]),Xd(Ks,t,e)}function Ln(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function ui(t,e){throw e.$$typeof===y?Error(l(525)):(t=Object.prototype.toString.call(e),Error(l(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Zd(t){function e(S,j){if(t){var V=S.deletions;V===null?(S.deletions=[j],S.flags|=16):V.push(j)}}function a(S,j){if(!t)return null;for(;j!==null;)e(S,j),j=j.sibling;return null}function o(S){for(var j=new Map;S!==null;)S.key!==null?j.set(S.key,S):j.set(S.index,S),S=S.sibling;return j}function r(S,j){return S=oa(S,j),S.index=0,S.sibling=null,S}function c(S,j,V){return S.index=V,t?(V=S.alternate,V!==null?(V=V.index,V<j?(S.flags|=67108866,j):V):(S.flags|=67108866,j)):(S.flags|=1048576,j)}function g(S){return t&&S.alternate===null&&(S.flags|=67108866),S}function _(S,j,V,B){return j===null||j.tag!==6?(j=br(V,S.mode,B),j.return=S,j):(j=r(j,V),j.return=S,j)}function v(S,j,V,B){var nt=V.type;return nt===I?H(S,j,V.props.children,B,V.key):j!==null&&(j.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===X&&ms(nt)===j.type)?(j=r(j,V.props),Ln(j,V),j.return=S,j):(j=ai(V.type,V.key,V.props,null,S.mode,B),Ln(j,V),j.return=S,j)}function w(S,j,V,B){return j===null||j.tag!==4||j.stateNode.containerInfo!==V.containerInfo||j.stateNode.implementation!==V.implementation?(j=fr(V,S.mode,B),j.return=S,j):(j=r(j,V.children||[]),j.return=S,j)}function H(S,j,V,B,nt){return j===null||j.tag!==7?(j=rs(V,S.mode,B,nt),j.return=S,j):(j=r(j,V),j.return=S,j)}function P(S,j,V){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=br(""+j,S.mode,V),j.return=S,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case G:return V=ai(j.type,j.key,j.props,null,S.mode,V),Ln(V,j),V.return=S,V;case M:return j=fr(j,S.mode,V),j.return=S,j;case X:return j=ms(j),P(S,j,V)}if(Et(j)||pt(j))return j=rs(j,S.mode,V,null),j.return=S,j;if(typeof j.then=="function")return P(S,ci(j),V);if(j.$$typeof===R)return P(S,oi(S,j),V);ui(S,j)}return null}function E(S,j,V,B){var nt=j!==null?j.key:null;if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return nt!==null?null:_(S,j,""+V,B);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case G:return V.key===nt?v(S,j,V,B):null;case M:return V.key===nt?w(S,j,V,B):null;case X:return V=ms(V),E(S,j,V,B)}if(Et(V)||pt(V))return nt!==null?null:H(S,j,V,B,null);if(typeof V.then=="function")return E(S,j,ci(V),B);if(V.$$typeof===R)return E(S,j,oi(S,V),B);ui(S,V)}return null}function C(S,j,V,B,nt){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return S=S.get(V)||null,_(j,S,""+B,nt);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case G:return S=S.get(B.key===null?V:B.key)||null,v(j,S,B,nt);case M:return S=S.get(B.key===null?V:B.key)||null,w(j,S,B,nt);case X:return B=ms(B),C(S,j,V,B,nt)}if(Et(B)||pt(B))return S=S.get(V)||null,H(j,S,B,nt,null);if(typeof B.then=="function")return C(S,j,V,ci(B),nt);if(B.$$typeof===R)return C(S,j,V,oi(j,B),nt);ui(j,B)}return null}function tt(S,j,V,B){for(var nt=null,kt=null,at=j,dt=j=0,_t=null;at!==null&&dt<V.length;dt++){at.index>dt?(_t=at,at=null):_t=at.sibling;var yt=E(S,at,V[dt],B);if(yt===null){at===null&&(at=_t);break}t&&at&&yt.alternate===null&&e(S,at),j=c(yt,j,dt),kt===null?nt=yt:kt.sibling=yt,kt=yt,at=_t}if(dt===V.length)return a(S,at),xt&&ia(S,dt),nt;if(at===null){for(;dt<V.length;dt++)at=P(S,V[dt],B),at!==null&&(j=c(at,j,dt),kt===null?nt=at:kt.sibling=at,kt=at);return xt&&ia(S,dt),nt}for(at=o(at);dt<V.length;dt++)_t=C(at,S,dt,V[dt],B),_t!==null&&(t&&_t.alternate!==null&&at.delete(_t.key===null?dt:_t.key),j=c(_t,j,dt),kt===null?nt=_t:kt.sibling=_t,kt=_t);return t&&at.forEach(function(Xa){return e(S,Xa)}),xt&&ia(S,dt),nt}function ot(S,j,V,B){if(V==null)throw Error(l(151));for(var nt=null,kt=null,at=j,dt=j=0,_t=null,yt=V.next();at!==null&&!yt.done;dt++,yt=V.next()){at.index>dt?(_t=at,at=null):_t=at.sibling;var Xa=E(S,at,yt.value,B);if(Xa===null){at===null&&(at=_t);break}t&&at&&Xa.alternate===null&&e(S,at),j=c(Xa,j,dt),kt===null?nt=Xa:kt.sibling=Xa,kt=Xa,at=_t}if(yt.done)return a(S,at),xt&&ia(S,dt),nt;if(at===null){for(;!yt.done;dt++,yt=V.next())yt=P(S,yt.value,B),yt!==null&&(j=c(yt,j,dt),kt===null?nt=yt:kt.sibling=yt,kt=yt);return xt&&ia(S,dt),nt}for(at=o(at);!yt.done;dt++,yt=V.next())yt=C(at,S,dt,yt.value,B),yt!==null&&(t&&yt.alternate!==null&&at.delete(yt.key===null?dt:yt.key),j=c(yt,j,dt),kt===null?nt=yt:kt.sibling=yt,kt=yt);return t&&at.forEach(function(Bx){return e(S,Bx)}),xt&&ia(S,dt),nt}function St(S,j,V,B){if(typeof V=="object"&&V!==null&&V.type===I&&V.key===null&&(V=V.props.children),typeof V=="object"&&V!==null){switch(V.$$typeof){case G:t:{for(var nt=V.key;j!==null;){if(j.key===nt){if(nt=V.type,nt===I){if(j.tag===7){a(S,j.sibling),B=r(j,V.props.children),B.return=S,S=B;break t}}else if(j.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===X&&ms(nt)===j.type){a(S,j.sibling),B=r(j,V.props),Ln(B,V),B.return=S,S=B;break t}a(S,j);break}else e(S,j);j=j.sibling}V.type===I?(B=rs(V.props.children,S.mode,B,V.key),B.return=S,S=B):(B=ai(V.type,V.key,V.props,null,S.mode,B),Ln(B,V),B.return=S,S=B)}return g(S);case M:t:{for(nt=V.key;j!==null;){if(j.key===nt)if(j.tag===4&&j.stateNode.containerInfo===V.containerInfo&&j.stateNode.implementation===V.implementation){a(S,j.sibling),B=r(j,V.children||[]),B.return=S,S=B;break t}else{a(S,j);break}else e(S,j);j=j.sibling}B=fr(V,S.mode,B),B.return=S,S=B}return g(S);case X:return V=ms(V),St(S,j,V,B)}if(Et(V))return tt(S,j,V,B);if(pt(V)){if(nt=pt(V),typeof nt!="function")throw Error(l(150));return V=nt.call(V),ot(S,j,V,B)}if(typeof V.then=="function")return St(S,j,ci(V),B);if(V.$$typeof===R)return St(S,j,oi(S,V),B);ui(S,V)}return typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint"?(V=""+V,j!==null&&j.tag===6?(a(S,j.sibling),B=r(j,V),B.return=S,S=B):(a(S,j),B=br(V,S.mode,B),B.return=S,S=B),g(S)):a(S,j)}return function(S,j,V,B){try{zn=0;var nt=St(S,j,V,B);return Ks=null,nt}catch(at){if(at===Xs||at===li)throw at;var kt=Ge(29,at,null,S.mode);return kt.lanes=B,kt.return=S,kt}finally{}}}var hs=Zd(!0),Qd=Zd(!1),Ia=!1;function Ir(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vr(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Va(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function wa(t,e,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Gt&2)!==0){var r=o.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),o.pending=e,e=ei(t),Nd(t,null,a),e}return ti(t,o,e,a),ei(t)}function Bn(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var o=e.lanes;o&=t.pendingLanes,a|=o,e.lanes=a,Lp(t,a)}}function wr(t,e){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var r=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?r=c=g:c=c.next=g,a=a.next}while(a!==null);c===null?r=c=e:c=c.next=e}else r=c=e;a={baseState:o.baseState,firstBaseUpdate:r,lastBaseUpdate:c,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var Er=!1;function Un(){if(Er){var t=Ys;if(t!==null)throw t}}function Pn(t,e,a,o){Er=!1;var r=t.updateQueue;Ia=!1;var c=r.firstBaseUpdate,g=r.lastBaseUpdate,_=r.shared.pending;if(_!==null){r.shared.pending=null;var v=_,w=v.next;v.next=null,g===null?c=w:g.next=w,g=v;var H=t.alternate;H!==null&&(H=H.updateQueue,_=H.lastBaseUpdate,_!==g&&(_===null?H.firstBaseUpdate=w:_.next=w,H.lastBaseUpdate=v))}if(c!==null){var P=r.baseState;g=0,H=w=v=null,_=c;do{var E=_.lane&-536870913,C=E!==_.lane;if(C?(ft&E)===E:(o&E)===E){E!==0&&E===Ps&&(Er=!0),H!==null&&(H=H.next={lane:0,tag:_.tag,payload:_.payload,callback:null,next:null});t:{var tt=t,ot=_;E=e;var St=a;switch(ot.tag){case 1:if(tt=ot.payload,typeof tt=="function"){P=tt.call(St,P,E);break t}P=tt;break t;case 3:tt.flags=tt.flags&-65537|128;case 0:if(tt=ot.payload,E=typeof tt=="function"?tt.call(St,P,E):tt,E==null)break t;P=k({},P,E);break t;case 2:Ia=!0}}E=_.callback,E!==null&&(t.flags|=64,C&&(t.flags|=8192),C=r.callbacks,C===null?r.callbacks=[E]:C.push(E))}else C={lane:E,tag:_.tag,payload:_.payload,callback:_.callback,next:null},H===null?(w=H=C,v=P):H=H.next=C,g|=E;if(_=_.next,_===null){if(_=r.shared.pending,_===null)break;C=_,_=C.next,C.next=null,r.lastBaseUpdate=C,r.shared.pending=null}}while(!0);H===null&&(v=P),r.baseState=v,r.firstBaseUpdate=w,r.lastBaseUpdate=H,c===null&&(r.shared.lanes=0),Da|=g,t.lanes=g,t.memoizedState=P}}function Jd(t,e){if(typeof t!="function")throw Error(l(191,t));t.call(e)}function $d(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Jd(a[t],e)}var Fs=T(null),pi=T(0);function Wd(t,e){t=fa,J(pi,t),J(Fs,e),fa=t|e.baseLanes}function Nr(){J(pi,fa),J(Fs,Fs.current)}function qr(){fa=pi.current,U(Fs),U(pi)}var ve=T(null),Oe=null;function Ea(t){var e=t.alternate;J(Bt,Bt.current&1),J(ve,t),Oe===null&&(e===null||Fs.current!==null||e.memoizedState!==null)&&(Oe=t)}function Cr(t){J(Bt,Bt.current),J(ve,t),Oe===null&&(Oe=t)}function tm(t){t.tag===22?(J(Bt,Bt.current),J(ve,t),Oe===null&&(Oe=t)):Na()}function Na(){J(Bt,Bt.current),J(ve,ve.current)}function Me(t){U(ve),Oe===t&&(Oe=null),U(Bt)}var Bt=T(0);function di(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Lc(a)||Bc(a)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ca=0,ut=null,jt=null,Yt=null,mi=!1,Zs=!1,bs=!1,gi=0,Yn=0,Qs=null,E1=0;function Rt(){throw Error(l(321))}function Dr(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!ye(t[a],e[a]))return!1;return!0}function Or(t,e,a,o,r,c){return ca=c,ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,D.H=t===null||t.memoizedState===null?Om:$r,bs=!1,c=a(o,r),bs=!1,Zs&&(c=am(e,a,o,r)),em(t),c}function em(t){D.H=Fn;var e=jt!==null&&jt.next!==null;if(ca=0,Yt=jt=ut=null,mi=!1,Yn=0,Qs=null,e)throw Error(l(300));t===null||Xt||(t=t.dependencies,t!==null&&ni(t)&&(Xt=!0))}function am(t,e,a,o){ut=t;var r=0;do{if(Zs&&(Qs=null),Yn=0,Zs=!1,25<=r)throw Error(l(301));if(r+=1,Yt=jt=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}D.H=Rm,c=e(a,o)}while(Zs);return c}function N1(){var t=D.H,e=t.useState()[0];return e=typeof e.then=="function"?Xn(e):e,t=t.useState()[0],(jt!==null?jt.memoizedState:null)!==t&&(ut.flags|=1024),e}function Rr(){var t=gi!==0;return gi=0,t}function Hr(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function zr(t){if(mi){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}mi=!1}ca=0,Yt=jt=ut=null,Zs=!1,Yn=gi=0,Qs=null}function re(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Yt===null?ut.memoizedState=Yt=t:Yt=Yt.next=t,Yt}function Ut(){if(jt===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=jt.next;var e=Yt===null?ut.memoizedState:Yt.next;if(e!==null)Yt=e,jt=t;else{if(t===null)throw ut.alternate===null?Error(l(467)):Error(l(310));jt=t,t={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},Yt===null?ut.memoizedState=Yt=t:Yt=Yt.next=t}return Yt}function hi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xn(t){var e=Yn;return Yn+=1,Qs===null&&(Qs=[]),t=Xd(Qs,t,e),e=ut,(Yt===null?e.memoizedState:Yt.next)===null&&(e=e.alternate,D.H=e===null||e.memoizedState===null?Om:$r),t}function bi(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Xn(t);if(t.$$typeof===R)return ee(t)}throw Error(l(438,String(t)))}function Lr(t){var e=null,a=ut.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var o=ut.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(e={data:o.data.map(function(r){return r.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=hi(),ut.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),o=0;o<t;o++)a[o]=Z;return e.index++,a}function ua(t,e){return typeof e=="function"?e(t):e}function fi(t){var e=Ut();return Br(e,jt,t)}function Br(t,e,a){var o=t.queue;if(o===null)throw Error(l(311));o.lastRenderedReducer=a;var r=t.baseQueue,c=o.pending;if(c!==null){if(r!==null){var g=r.next;r.next=c.next,c.next=g}e.baseQueue=r=c,o.pending=null}if(c=t.baseState,r===null)t.memoizedState=c;else{e=r.next;var _=g=null,v=null,w=e,H=!1;do{var P=w.lane&-536870913;if(P!==w.lane?(ft&P)===P:(ca&P)===P){var E=w.revertLane;if(E===0)v!==null&&(v=v.next={lane:0,revertLane:0,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),P===Ps&&(H=!0);else if((ca&E)===E){w=w.next,E===Ps&&(H=!0);continue}else P={lane:0,revertLane:w.revertLane,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},v===null?(_=v=P,g=c):v=v.next=P,ut.lanes|=E,Da|=E;P=w.action,bs&&a(c,P),c=w.hasEagerState?w.eagerState:a(c,P)}else E={lane:P,revertLane:w.revertLane,gesture:w.gesture,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},v===null?(_=v=E,g=c):v=v.next=E,ut.lanes|=P,Da|=P;w=w.next}while(w!==null&&w!==e);if(v===null?g=c:v.next=_,!ye(c,t.memoizedState)&&(Xt=!0,H&&(a=Ys,a!==null)))throw a;t.memoizedState=c,t.baseState=g,t.baseQueue=v,o.lastRenderedState=c}return r===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Ur(t){var e=Ut(),a=e.queue;if(a===null)throw Error(l(311));a.lastRenderedReducer=t;var o=a.dispatch,r=a.pending,c=e.memoizedState;if(r!==null){a.pending=null;var g=r=r.next;do c=t(c,g.action),g=g.next;while(g!==r);ye(c,e.memoizedState)||(Xt=!0),e.memoizedState=c,e.baseQueue===null&&(e.baseState=c),a.lastRenderedState=c}return[c,o]}function sm(t,e,a){var o=ut,r=Ut(),c=xt;if(c){if(a===void 0)throw Error(l(407));a=a()}else a=e();var g=!ye((jt||r).memoizedState,a);if(g&&(r.memoizedState=a,Xt=!0),r=r.queue,Xr(im.bind(null,o,r,t),[t]),r.getSnapshot!==e||g||Yt!==null&&Yt.memoizedState.tag&1){if(o.flags|=2048,Js(9,{destroy:void 0},om.bind(null,o,r,a,e),null),It===null)throw Error(l(349));c||(ca&127)!==0||nm(o,e,a)}return a}function nm(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=ut.updateQueue,e===null?(e=hi(),ut.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function om(t,e,a,o){e.value=a,e.getSnapshot=o,lm(e)&&rm(t)}function im(t,e,a){return a(function(){lm(e)&&rm(t)})}function lm(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!ye(t,a)}catch{return!0}}function rm(t){var e=ls(t,2);e!==null&&fe(e,t,2)}function Pr(t){var e=re();if(typeof t=="function"){var a=t;if(t=a(),bs){Ga(!0);try{a()}finally{Ga(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:t},e}function cm(t,e,a,o){return t.baseState=a,Br(t,jt,typeof o=="function"?o:ua)}function q1(t,e,a,o,r){if(ki(t))throw Error(l(485));if(t=e.action,t!==null){var c={payload:r,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){c.listeners.push(g)}};D.T!==null?a(!0):c.isTransition=!1,o(c),a=e.pending,a===null?(c.next=e.pending=c,um(e,c)):(c.next=a.next,e.pending=a.next=c)}}function um(t,e){var a=e.action,o=e.payload,r=t.state;if(e.isTransition){var c=D.T,g={};D.T=g;try{var _=a(r,o),v=D.S;v!==null&&v(g,_),pm(t,e,_)}catch(w){Yr(t,e,w)}finally{c!==null&&g.types!==null&&(c.types=g.types),D.T=c}}else try{c=a(r,o),pm(t,e,c)}catch(w){Yr(t,e,w)}}function pm(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){dm(t,e,o)},function(o){return Yr(t,e,o)}):dm(t,e,a)}function dm(t,e,a){e.status="fulfilled",e.value=a,mm(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,um(t,a)))}function Yr(t,e,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do e.status="rejected",e.reason=a,mm(e),e=e.next;while(e!==o)}t.action=null}function mm(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function gm(t,e){return e}function hm(t,e){if(xt){var a=It.formState;if(a!==null){t:{var o=ut;if(xt){if(Ct){e:{for(var r=Ct,c=De;r.nodeType!==8;){if(!c){r=null;break e}if(r=Re(r.nextSibling),r===null){r=null;break e}}c=r.data,r=c==="F!"||c==="F"?r:null}if(r){Ct=Re(r.nextSibling),o=r.data==="F!";break t}}Aa(o)}o=!1}o&&(e=a[0])}}return a=re(),a.memoizedState=a.baseState=e,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gm,lastRenderedState:e},a.queue=o,a=qm.bind(null,ut,o),o.dispatch=a,o=Pr(!1),c=Jr.bind(null,ut,!1,o.queue),o=re(),r={state:e,dispatch:null,action:t,pending:null},o.queue=r,a=q1.bind(null,ut,r,c,a),r.dispatch=a,o.memoizedState=t,[e,a,!1]}function bm(t){var e=Ut();return fm(e,jt,t)}function fm(t,e,a){if(e=Br(t,e,gm)[0],t=fi(ua)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var o=Xn(e)}catch(g){throw g===Xs?li:g}else o=e;e=Ut();var r=e.queue,c=r.dispatch;return a!==e.memoizedState&&(ut.flags|=2048,Js(9,{destroy:void 0},C1.bind(null,r,a),null)),[o,c,t]}function C1(t,e){t.action=e}function _m(t){var e=Ut(),a=jt;if(a!==null)return fm(e,a,t);Ut(),e=e.memoizedState,a=Ut();var o=a.queue.dispatch;return a.memoizedState=t,[e,o,!1]}function Js(t,e,a,o){return t={tag:t,create:a,deps:o,inst:e,next:null},e=ut.updateQueue,e===null&&(e=hi(),ut.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,e.lastEffect=t),t}function xm(){return Ut().memoizedState}function _i(t,e,a,o){var r=re();ut.flags|=t,r.memoizedState=Js(1|e,{destroy:void 0},a,o===void 0?null:o)}function xi(t,e,a,o){var r=Ut();o=o===void 0?null:o;var c=r.memoizedState.inst;jt!==null&&o!==null&&Dr(o,jt.memoizedState.deps)?r.memoizedState=Js(e,c,a,o):(ut.flags|=t,r.memoizedState=Js(1|e,c,a,o))}function km(t,e){_i(8390656,8,t,e)}function Xr(t,e){xi(2048,8,t,e)}function D1(t){ut.flags|=4;var e=ut.updateQueue;if(e===null)e=hi(),ut.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function ym(t){var e=Ut().memoizedState;return D1({ref:e,nextImpl:t}),function(){if((Gt&2)!==0)throw Error(l(440));return e.impl.apply(void 0,arguments)}}function Gm(t,e){return xi(4,2,t,e)}function vm(t,e){return xi(4,4,t,e)}function Mm(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Tm(t,e,a){a=a!=null?a.concat([t]):null,xi(4,4,Mm.bind(null,e,t),a)}function Kr(){}function jm(t,e){var a=Ut();e=e===void 0?null:e;var o=a.memoizedState;return e!==null&&Dr(e,o[1])?o[0]:(a.memoizedState=[t,e],t)}function Am(t,e){var a=Ut();e=e===void 0?null:e;var o=a.memoizedState;if(e!==null&&Dr(e,o[1]))return o[0];if(o=t(),bs){Ga(!0);try{t()}finally{Ga(!1)}}return a.memoizedState=[o,e],o}function Fr(t,e,a){return a===void 0||(ca&1073741824)!==0&&(ft&261930)===0?t.memoizedState=e:(t.memoizedState=a,t=Sg(),ut.lanes|=t,Da|=t,a)}function Sm(t,e,a,o){return ye(a,e)?a:Fs.current!==null?(t=Fr(t,a,o),ye(t,e)||(Xt=!0),t):(ca&42)===0||(ca&1073741824)!==0&&(ft&261930)===0?(Xt=!0,t.memoizedState=a):(t=Sg(),ut.lanes|=t,Da|=t,e)}function Im(t,e,a,o,r){var c=Q.p;Q.p=c!==0&&8>c?c:8;var g=D.T,_={};D.T=_,Jr(t,!1,e,a);try{var v=r(),w=D.S;if(w!==null&&w(_,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var H=w1(v,o);Kn(t,e,H,Ae(t))}else Kn(t,e,o,Ae(t))}catch(P){Kn(t,e,{then:function(){},status:"rejected",reason:P},Ae())}finally{Q.p=c,g!==null&&_.types!==null&&(g.types=_.types),D.T=g}}function O1(){}function Zr(t,e,a,o){if(t.tag!==5)throw Error(l(476));var r=Vm(t).queue;Im(t,r,e,$,a===null?O1:function(){return wm(t),a(o)})}function Vm(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:$},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function wm(t){var e=Vm(t);e.next===null&&(e=t.alternate.memoizedState),Kn(t,e.next.queue,{},Ae())}function Qr(){return ee(uo)}function Em(){return Ut().memoizedState}function Nm(){return Ut().memoizedState}function R1(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=Ae();t=Va(a);var o=wa(e,t,a);o!==null&&(fe(o,e,a),Bn(o,e,a)),e={cache:Tr()},t.payload=e;return}e=e.return}}function H1(t,e,a){var o=Ae();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ki(t)?Cm(e,a):(a=gr(t,e,a,o),a!==null&&(fe(a,t,o),Dm(a,e,o)))}function qm(t,e,a){var o=Ae();Kn(t,e,a,o)}function Kn(t,e,a,o){var r={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ki(t))Cm(e,r);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=e.lastRenderedReducer,c!==null))try{var g=e.lastRenderedState,_=c(g,a);if(r.hasEagerState=!0,r.eagerState=_,ye(_,g))return ti(t,e,r,0),It===null&&Wo(),!1}catch{}finally{}if(a=gr(t,e,r,o),a!==null)return fe(a,t,o),Dm(a,e,o),!0}return!1}function Jr(t,e,a,o){if(o={lane:2,revertLane:Ic(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},ki(t)){if(e)throw Error(l(479))}else e=gr(t,a,o,2),e!==null&&fe(e,t,2)}function ki(t){var e=t.alternate;return t===ut||e!==null&&e===ut}function Cm(t,e){Zs=mi=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function Dm(t,e,a){if((a&4194048)!==0){var o=e.lanes;o&=t.pendingLanes,a|=o,e.lanes=a,Lp(t,a)}}var Fn={readContext:ee,use:bi,useCallback:Rt,useContext:Rt,useEffect:Rt,useImperativeHandle:Rt,useLayoutEffect:Rt,useInsertionEffect:Rt,useMemo:Rt,useReducer:Rt,useRef:Rt,useState:Rt,useDebugValue:Rt,useDeferredValue:Rt,useTransition:Rt,useSyncExternalStore:Rt,useId:Rt,useHostTransitionStatus:Rt,useFormState:Rt,useActionState:Rt,useOptimistic:Rt,useMemoCache:Rt,useCacheRefresh:Rt};Fn.useEffectEvent=Rt;var Om={readContext:ee,use:bi,useCallback:function(t,e){return re().memoizedState=[t,e===void 0?null:e],t},useContext:ee,useEffect:km,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,_i(4194308,4,Mm.bind(null,e,t),a)},useLayoutEffect:function(t,e){return _i(4194308,4,t,e)},useInsertionEffect:function(t,e){_i(4,2,t,e)},useMemo:function(t,e){var a=re();e=e===void 0?null:e;var o=t();if(bs){Ga(!0);try{t()}finally{Ga(!1)}}return a.memoizedState=[o,e],o},useReducer:function(t,e,a){var o=re();if(a!==void 0){var r=a(e);if(bs){Ga(!0);try{a(e)}finally{Ga(!1)}}}else r=e;return o.memoizedState=o.baseState=r,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},o.queue=t,t=t.dispatch=H1.bind(null,ut,t),[o.memoizedState,t]},useRef:function(t){var e=re();return t={current:t},e.memoizedState=t},useState:function(t){t=Pr(t);var e=t.queue,a=qm.bind(null,ut,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:Kr,useDeferredValue:function(t,e){var a=re();return Fr(a,t,e)},useTransition:function(){var t=Pr(!1);return t=Im.bind(null,ut,t.queue,!0,!1),re().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var o=ut,r=re();if(xt){if(a===void 0)throw Error(l(407));a=a()}else{if(a=e(),It===null)throw Error(l(349));(ft&127)!==0||nm(o,e,a)}r.memoizedState=a;var c={value:a,getSnapshot:e};return r.queue=c,km(im.bind(null,o,c,t),[t]),o.flags|=2048,Js(9,{destroy:void 0},om.bind(null,o,c,a,e),null),a},useId:function(){var t=re(),e=It.identifierPrefix;if(xt){var a=Ze,o=Fe;a=(o&~(1<<32-ke(o)-1)).toString(32)+a,e="_"+e+"R_"+a,a=gi++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=E1++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Qr,useFormState:hm,useActionState:hm,useOptimistic:function(t){var e=re();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=Jr.bind(null,ut,!0,a),a.dispatch=e,[t,e]},useMemoCache:Lr,useCacheRefresh:function(){return re().memoizedState=R1.bind(null,ut)},useEffectEvent:function(t){var e=re(),a={impl:t};return e.memoizedState=a,function(){if((Gt&2)!==0)throw Error(l(440));return a.impl.apply(void 0,arguments)}}},$r={readContext:ee,use:bi,useCallback:jm,useContext:ee,useEffect:Xr,useImperativeHandle:Tm,useInsertionEffect:Gm,useLayoutEffect:vm,useMemo:Am,useReducer:fi,useRef:xm,useState:function(){return fi(ua)},useDebugValue:Kr,useDeferredValue:function(t,e){var a=Ut();return Sm(a,jt.memoizedState,t,e)},useTransition:function(){var t=fi(ua)[0],e=Ut().memoizedState;return[typeof t=="boolean"?t:Xn(t),e]},useSyncExternalStore:sm,useId:Em,useHostTransitionStatus:Qr,useFormState:bm,useActionState:bm,useOptimistic:function(t,e){var a=Ut();return cm(a,jt,t,e)},useMemoCache:Lr,useCacheRefresh:Nm};$r.useEffectEvent=ym;var Rm={readContext:ee,use:bi,useCallback:jm,useContext:ee,useEffect:Xr,useImperativeHandle:Tm,useInsertionEffect:Gm,useLayoutEffect:vm,useMemo:Am,useReducer:Ur,useRef:xm,useState:function(){return Ur(ua)},useDebugValue:Kr,useDeferredValue:function(t,e){var a=Ut();return jt===null?Fr(a,t,e):Sm(a,jt.memoizedState,t,e)},useTransition:function(){var t=Ur(ua)[0],e=Ut().memoizedState;return[typeof t=="boolean"?t:Xn(t),e]},useSyncExternalStore:sm,useId:Em,useHostTransitionStatus:Qr,useFormState:_m,useActionState:_m,useOptimistic:function(t,e){var a=Ut();return jt!==null?cm(a,jt,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Lr,useCacheRefresh:Nm};Rm.useEffectEvent=ym;function Wr(t,e,a,o){e=t.memoizedState,a=a(o,e),a=a==null?e:k({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var tc={enqueueSetState:function(t,e,a){t=t._reactInternals;var o=Ae(),r=Va(o);r.payload=e,a!=null&&(r.callback=a),e=wa(t,r,o),e!==null&&(fe(e,t,o),Bn(e,t,o))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var o=Ae(),r=Va(o);r.tag=1,r.payload=e,a!=null&&(r.callback=a),e=wa(t,r,o),e!==null&&(fe(e,t,o),Bn(e,t,o))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=Ae(),o=Va(a);o.tag=2,e!=null&&(o.callback=e),e=wa(t,o,a),e!==null&&(fe(e,t,a),Bn(e,t,a))}};function Hm(t,e,a,o,r,c,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,c,g):e.prototype&&e.prototype.isPureReactComponent?!qn(a,o)||!qn(r,c):!0}function zm(t,e,a,o){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,o),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,o),e.state!==t&&tc.enqueueReplaceState(e,e.state,null)}function fs(t,e){var a=e;if("ref"in e){a={};for(var o in e)o!=="ref"&&(a[o]=e[o])}if(t=t.defaultProps){a===e&&(a=k({},a));for(var r in t)a[r]===void 0&&(a[r]=t[r])}return a}function Lm(t){$o(t)}function Bm(t){console.error(t)}function Um(t){$o(t)}function yi(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(o){setTimeout(function(){throw o})}}function Pm(t,e,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function ec(t,e,a){return a=Va(a),a.tag=3,a.payload={element:null},a.callback=function(){yi(t,e)},a}function Ym(t){return t=Va(t),t.tag=3,t}function Xm(t,e,a,o){var r=a.type.getDerivedStateFromError;if(typeof r=="function"){var c=o.value;t.payload=function(){return r(c)},t.callback=function(){Pm(e,a,o)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){Pm(e,a,o),typeof r!="function"&&(Oa===null?Oa=new Set([this]):Oa.add(this));var _=o.stack;this.componentDidCatch(o.value,{componentStack:_!==null?_:""})})}function z1(t,e,a,o,r){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(e=a.alternate,e!==null&&Us(e,a,r,!0),a=ve.current,a!==null){switch(a.tag){case 31:case 13:return Oe===null?Ni():a.alternate===null&&Ht===0&&(Ht=3),a.flags&=-257,a.flags|=65536,a.lanes=r,o===ri?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([o]):e.add(o),jc(t,o,r)),!1;case 22:return a.flags|=65536,o===ri?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([o]):a.add(o)),jc(t,o,r)),!1}throw Error(l(435,a.tag))}return jc(t,o,r),Ni(),!1}if(xt)return e=ve.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=r,o!==kr&&(t=Error(l(422),{cause:o}),On(Ne(t,a)))):(o!==kr&&(e=Error(l(423),{cause:o}),On(Ne(e,a))),t=t.current.alternate,t.flags|=65536,r&=-r,t.lanes|=r,o=Ne(o,a),r=ec(t.stateNode,o,r),wr(t,r),Ht!==4&&(Ht=2)),!1;var c=Error(l(520),{cause:o});if(c=Ne(c,a),ao===null?ao=[c]:ao.push(c),Ht!==4&&(Ht=2),e===null)return!0;o=Ne(o,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=r&-r,a.lanes|=t,t=ec(a.stateNode,o,t),wr(a,t),!1;case 1:if(e=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Oa===null||!Oa.has(c))))return a.flags|=65536,r&=-r,a.lanes|=r,r=Ym(r),Xm(r,t,a,o),wr(a,r),!1}a=a.return}while(a!==null);return!1}var ac=Error(l(461)),Xt=!1;function ae(t,e,a,o){e.child=t===null?Qd(e,null,a,o):hs(e,t.child,a,o)}function Km(t,e,a,o,r){a=a.render;var c=e.ref;if("ref"in o){var g={};for(var _ in o)_!=="ref"&&(g[_]=o[_])}else g=o;return ps(e),o=Or(t,e,a,g,c,r),_=Rr(),t!==null&&!Xt?(Hr(t,e,r),pa(t,e,r)):(xt&&_&&_r(e),e.flags|=1,ae(t,e,o,r),e.child)}function Fm(t,e,a,o,r){if(t===null){var c=a.type;return typeof c=="function"&&!hr(c)&&c.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=c,Zm(t,e,c,o,r)):(t=ai(a.type,null,o,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(c=t.child,!uc(t,r)){var g=c.memoizedProps;if(a=a.compare,a=a!==null?a:qn,a(g,o)&&t.ref===e.ref)return pa(t,e,r)}return e.flags|=1,t=oa(c,o),t.ref=e.ref,t.return=e,e.child=t}function Zm(t,e,a,o,r){if(t!==null){var c=t.memoizedProps;if(qn(c,o)&&t.ref===e.ref)if(Xt=!1,e.pendingProps=o=c,uc(t,r))(t.flags&131072)!==0&&(Xt=!0);else return e.lanes=t.lanes,pa(t,e,r)}return sc(t,e,a,o,r)}function Qm(t,e,a,o){var r=o.children,c=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((e.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,t!==null){for(o=e.child=t.child,r=0;o!==null;)r=r|o.lanes|o.childLanes,o=o.sibling;o=r&~c}else o=0,e.child=null;return Jm(t,e,c,a,o)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&ii(e,c!==null?c.cachePool:null),c!==null?Wd(e,c):Nr(),tm(e);else return o=e.lanes=536870912,Jm(t,e,c!==null?c.baseLanes|a:a,a,o)}else c!==null?(ii(e,c.cachePool),Wd(e,c),Na(),e.memoizedState=null):(t!==null&&ii(e,null),Nr(),Na());return ae(t,e,r,a),e.child}function Zn(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Jm(t,e,a,o,r){var c=Ar();return c=c===null?null:{parent:Pt._currentValue,pool:c},e.memoizedState={baseLanes:a,cachePool:c},t!==null&&ii(e,null),Nr(),tm(e),t!==null&&Us(t,e,o,!0),e.childLanes=r,null}function Gi(t,e){return e=Mi({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function $m(t,e,a){return hs(e,t.child,null,a),t=Gi(e,e.pendingProps),t.flags|=2,Me(e),e.memoizedState=null,t}function L1(t,e,a){var o=e.pendingProps,r=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(xt){if(o.mode==="hidden")return t=Gi(e,o),e.lanes=536870912,Zn(null,t);if(Cr(e),(t=Ct)?(t=uh(t,De),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ta!==null?{id:Fe,overflow:Ze}:null,retryLane:536870912,hydrationErrors:null},a=Cd(t),a.return=e,e.child=a,te=e,Ct=null)):t=null,t===null)throw Aa(e);return e.lanes=536870912,null}return Gi(e,o)}var c=t.memoizedState;if(c!==null){var g=c.dehydrated;if(Cr(e),r)if(e.flags&256)e.flags&=-257,e=$m(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(l(558));else if(Xt||Us(t,e,a,!1),r=(a&t.childLanes)!==0,Xt||r){if(o=It,o!==null&&(g=Bp(o,a),g!==0&&g!==c.retryLane))throw c.retryLane=g,ls(t,g),fe(o,t,g),ac;Ni(),e=$m(t,e,a)}else t=c.treeContext,Ct=Re(g.nextSibling),te=e,xt=!0,ja=null,De=!1,t!==null&&Rd(e,t),e=Gi(e,o),e.flags|=4096;return e}return t=oa(t.child,{mode:o.mode,children:o.children}),t.ref=e.ref,e.child=t,t.return=e,t}function vi(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(l(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function sc(t,e,a,o,r){return ps(e),a=Or(t,e,a,o,void 0,r),o=Rr(),t!==null&&!Xt?(Hr(t,e,r),pa(t,e,r)):(xt&&o&&_r(e),e.flags|=1,ae(t,e,a,r),e.child)}function Wm(t,e,a,o,r,c){return ps(e),e.updateQueue=null,a=am(e,o,a,r),em(t),o=Rr(),t!==null&&!Xt?(Hr(t,e,c),pa(t,e,c)):(xt&&o&&_r(e),e.flags|=1,ae(t,e,a,c),e.child)}function tg(t,e,a,o,r){if(ps(e),e.stateNode===null){var c=Hs,g=a.contextType;typeof g=="object"&&g!==null&&(c=ee(g)),c=new a(o,c),e.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=tc,e.stateNode=c,c._reactInternals=e,c=e.stateNode,c.props=o,c.state=e.memoizedState,c.refs={},Ir(e),g=a.contextType,c.context=typeof g=="object"&&g!==null?ee(g):Hs,c.state=e.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Wr(e,a,g,o),c.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(g=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),g!==c.state&&tc.enqueueReplaceState(c,c.state,null),Pn(e,o,c,r),Un(),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308),o=!0}else if(t===null){c=e.stateNode;var _=e.memoizedProps,v=fs(a,_);c.props=v;var w=c.context,H=a.contextType;g=Hs,typeof H=="object"&&H!==null&&(g=ee(H));var P=a.getDerivedStateFromProps;H=typeof P=="function"||typeof c.getSnapshotBeforeUpdate=="function",_=e.pendingProps!==_,H||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(_||w!==g)&&zm(e,c,o,g),Ia=!1;var E=e.memoizedState;c.state=E,Pn(e,o,c,r),Un(),w=e.memoizedState,_||E!==w||Ia?(typeof P=="function"&&(Wr(e,a,P,o),w=e.memoizedState),(v=Ia||Hm(e,a,v,o,E,w,g))?(H||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(e.flags|=4194308)):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=o,e.memoizedState=w),c.props=o,c.state=w,c.context=g,o=v):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),o=!1)}else{c=e.stateNode,Vr(t,e),g=e.memoizedProps,H=fs(a,g),c.props=H,P=e.pendingProps,E=c.context,w=a.contextType,v=Hs,typeof w=="object"&&w!==null&&(v=ee(w)),_=a.getDerivedStateFromProps,(w=typeof _=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g!==P||E!==v)&&zm(e,c,o,v),Ia=!1,E=e.memoizedState,c.state=E,Pn(e,o,c,r),Un();var C=e.memoizedState;g!==P||E!==C||Ia||t!==null&&t.dependencies!==null&&ni(t.dependencies)?(typeof _=="function"&&(Wr(e,a,_,o),C=e.memoizedState),(H=Ia||Hm(e,a,H,o,E,C,v)||t!==null&&t.dependencies!==null&&ni(t.dependencies))?(w||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(o,C,v),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(o,C,v)),typeof c.componentDidUpdate=="function"&&(e.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&E===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&E===t.memoizedState||(e.flags|=1024),e.memoizedProps=o,e.memoizedState=C),c.props=o,c.state=C,c.context=v,o=H):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&E===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&E===t.memoizedState||(e.flags|=1024),o=!1)}return c=o,vi(t,e),o=(e.flags&128)!==0,c||o?(c=e.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:c.render(),e.flags|=1,t!==null&&o?(e.child=hs(e,t.child,null,r),e.child=hs(e,null,a,r)):ae(t,e,a,r),e.memoizedState=c.state,t=e.child):t=pa(t,e,r),t}function eg(t,e,a,o){return cs(),e.flags|=256,ae(t,e,a,o),e.child}var nc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function oc(t){return{baseLanes:t,cachePool:Pd()}}function ic(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=je),t}function ag(t,e,a){var o=e.pendingProps,r=!1,c=(e.flags&128)!==0,g;if((g=c)||(g=t!==null&&t.memoizedState===null?!1:(Bt.current&2)!==0),g&&(r=!0,e.flags&=-129),g=(e.flags&32)!==0,e.flags&=-33,t===null){if(xt){if(r?Ea(e):Na(),(t=Ct)?(t=uh(t,De),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ta!==null?{id:Fe,overflow:Ze}:null,retryLane:536870912,hydrationErrors:null},a=Cd(t),a.return=e,e.child=a,te=e,Ct=null)):t=null,t===null)throw Aa(e);return Bc(t)?e.lanes=32:e.lanes=536870912,null}var _=o.children;return o=o.fallback,r?(Na(),r=e.mode,_=Mi({mode:"hidden",children:_},r),o=rs(o,r,a,null),_.return=e,o.return=e,_.sibling=o,e.child=_,o=e.child,o.memoizedState=oc(a),o.childLanes=ic(t,g,a),e.memoizedState=nc,Zn(null,o)):(Ea(e),lc(e,_))}var v=t.memoizedState;if(v!==null&&(_=v.dehydrated,_!==null)){if(c)e.flags&256?(Ea(e),e.flags&=-257,e=rc(t,e,a)):e.memoizedState!==null?(Na(),e.child=t.child,e.flags|=128,e=null):(Na(),_=o.fallback,r=e.mode,o=Mi({mode:"visible",children:o.children},r),_=rs(_,r,a,null),_.flags|=2,o.return=e,_.return=e,o.sibling=_,e.child=o,hs(e,t.child,null,a),o=e.child,o.memoizedState=oc(a),o.childLanes=ic(t,g,a),e.memoizedState=nc,e=Zn(null,o));else if(Ea(e),Bc(_)){if(g=_.nextSibling&&_.nextSibling.dataset,g)var w=g.dgst;g=w,o=Error(l(419)),o.stack="",o.digest=g,On({value:o,source:null,stack:null}),e=rc(t,e,a)}else if(Xt||Us(t,e,a,!1),g=(a&t.childLanes)!==0,Xt||g){if(g=It,g!==null&&(o=Bp(g,a),o!==0&&o!==v.retryLane))throw v.retryLane=o,ls(t,o),fe(g,t,o),ac;Lc(_)||Ni(),e=rc(t,e,a)}else Lc(_)?(e.flags|=192,e.child=t.child,e=null):(t=v.treeContext,Ct=Re(_.nextSibling),te=e,xt=!0,ja=null,De=!1,t!==null&&Rd(e,t),e=lc(e,o.children),e.flags|=4096);return e}return r?(Na(),_=o.fallback,r=e.mode,v=t.child,w=v.sibling,o=oa(v,{mode:"hidden",children:o.children}),o.subtreeFlags=v.subtreeFlags&65011712,w!==null?_=oa(w,_):(_=rs(_,r,a,null),_.flags|=2),_.return=e,o.return=e,o.sibling=_,e.child=o,Zn(null,o),o=e.child,_=t.child.memoizedState,_===null?_=oc(a):(r=_.cachePool,r!==null?(v=Pt._currentValue,r=r.parent!==v?{parent:v,pool:v}:r):r=Pd(),_={baseLanes:_.baseLanes|a,cachePool:r}),o.memoizedState=_,o.childLanes=ic(t,g,a),e.memoizedState=nc,Zn(t.child,o)):(Ea(e),a=t.child,t=a.sibling,a=oa(a,{mode:"visible",children:o.children}),a.return=e,a.sibling=null,t!==null&&(g=e.deletions,g===null?(e.deletions=[t],e.flags|=16):g.push(t)),e.child=a,e.memoizedState=null,a)}function lc(t,e){return e=Mi({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Mi(t,e){return t=Ge(22,t,null,e),t.lanes=0,t}function rc(t,e,a){return hs(e,t.child,null,a),t=lc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function sg(t,e,a){t.lanes|=e;var o=t.alternate;o!==null&&(o.lanes|=e),vr(t.return,e,a)}function cc(t,e,a,o,r,c){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:r,treeForkCount:c}:(g.isBackwards=e,g.rendering=null,g.renderingStartTime=0,g.last=o,g.tail=a,g.tailMode=r,g.treeForkCount=c)}function ng(t,e,a){var o=e.pendingProps,r=o.revealOrder,c=o.tail;o=o.children;var g=Bt.current,_=(g&2)!==0;if(_?(g=g&1|2,e.flags|=128):g&=1,J(Bt,g),ae(t,e,o,a),o=xt?Dn:0,!_&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sg(t,a,e);else if(t.tag===19)sg(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(r){case"forwards":for(a=e.child,r=null;a!==null;)t=a.alternate,t!==null&&di(t)===null&&(r=a),a=a.sibling;a=r,a===null?(r=e.child,e.child=null):(r=a.sibling,a.sibling=null),cc(e,!1,r,a,c,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&di(t)===null){e.child=r;break}t=r.sibling,r.sibling=a,a=r,r=t}cc(e,!0,a,null,c,o);break;case"together":cc(e,!1,null,null,void 0,o);break;default:e.memoizedState=null}return e.child}function pa(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),Da|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(Us(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(l(153));if(e.child!==null){for(t=e.child,a=oa(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=oa(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function uc(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&ni(t)))}function B1(t,e,a){switch(e.tag){case 3:le(e,e.stateNode.containerInfo),Sa(e,Pt,t.memoizedState.cache),cs();break;case 27:case 5:yn(e);break;case 4:le(e,e.stateNode.containerInfo);break;case 10:Sa(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Cr(e),null;break;case 13:var o=e.memoizedState;if(o!==null)return o.dehydrated!==null?(Ea(e),e.flags|=128,null):(a&e.child.childLanes)!==0?ag(t,e,a):(Ea(e),t=pa(t,e,a),t!==null?t.sibling:null);Ea(e);break;case 19:var r=(t.flags&128)!==0;if(o=(a&e.childLanes)!==0,o||(Us(t,e,a,!1),o=(a&e.childLanes)!==0),r){if(o)return ng(t,e,a);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),J(Bt,Bt.current),o)break;return null;case 22:return e.lanes=0,Qm(t,e,a,e.pendingProps);case 24:Sa(e,Pt,t.memoizedState.cache)}return pa(t,e,a)}function og(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)Xt=!0;else{if(!uc(t,a)&&(e.flags&128)===0)return Xt=!1,B1(t,e,a);Xt=(t.flags&131072)!==0}else Xt=!1,xt&&(e.flags&1048576)!==0&&Od(e,Dn,e.index);switch(e.lanes=0,e.tag){case 16:t:{var o=e.pendingProps;if(t=ms(e.elementType),e.type=t,typeof t=="function")hr(t)?(o=fs(t,o),e.tag=1,e=tg(null,e,t,o,a)):(e.tag=0,e=sc(null,e,t,o,a));else{if(t!=null){var r=t.$$typeof;if(r===z){e.tag=11,e=Km(null,e,t,o,a);break t}else if(r===q){e.tag=14,e=Fm(null,e,t,o,a);break t}}throw e=qt(t)||t,Error(l(306,e,""))}}return e;case 0:return sc(t,e,e.type,e.pendingProps,a);case 1:return o=e.type,r=fs(o,e.pendingProps),tg(t,e,o,r,a);case 3:t:{if(le(e,e.stateNode.containerInfo),t===null)throw Error(l(387));o=e.pendingProps;var c=e.memoizedState;r=c.element,Vr(t,e),Pn(e,o,null,a);var g=e.memoizedState;if(o=g.cache,Sa(e,Pt,o),o!==c.cache&&Mr(e,[Pt],a,!0),Un(),o=g.element,c.isDehydrated)if(c={element:o,isDehydrated:!1,cache:g.cache},e.updateQueue.baseState=c,e.memoizedState=c,e.flags&256){e=eg(t,e,o,a);break t}else if(o!==r){r=Ne(Error(l(424)),e),On(r),e=eg(t,e,o,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ct=Re(t.firstChild),te=e,xt=!0,ja=null,De=!0,a=Qd(e,null,o,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(cs(),o===r){e=pa(t,e,a);break t}ae(t,e,o,a)}e=e.child}return e;case 26:return vi(t,e),t===null?(a=bh(e.type,null,e.pendingProps,null))?e.memoizedState=a:xt||(a=e.type,t=e.pendingProps,o=zi(st.current).createElement(a),o[Wt]=e,o[pe]=t,se(o,a,t),Jt(o),e.stateNode=o):e.memoizedState=bh(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return yn(e),t===null&&xt&&(o=e.stateNode=mh(e.type,e.pendingProps,st.current),te=e,De=!0,r=Ct,La(e.type)?(Uc=r,Ct=Re(o.firstChild)):Ct=r),ae(t,e,e.pendingProps.children,a),vi(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&xt&&((r=o=Ct)&&(o=_x(o,e.type,e.pendingProps,De),o!==null?(e.stateNode=o,te=e,Ct=Re(o.firstChild),De=!1,r=!0):r=!1),r||Aa(e)),yn(e),r=e.type,c=e.pendingProps,g=t!==null?t.memoizedProps:null,o=c.children,Rc(r,c)?o=null:g!==null&&Rc(r,g)&&(e.flags|=32),e.memoizedState!==null&&(r=Or(t,e,N1,null,null,a),uo._currentValue=r),vi(t,e),ae(t,e,o,a),e.child;case 6:return t===null&&xt&&((t=a=Ct)&&(a=xx(a,e.pendingProps,De),a!==null?(e.stateNode=a,te=e,Ct=null,t=!0):t=!1),t||Aa(e)),null;case 13:return ag(t,e,a);case 4:return le(e,e.stateNode.containerInfo),o=e.pendingProps,t===null?e.child=hs(e,null,o,a):ae(t,e,o,a),e.child;case 11:return Km(t,e,e.type,e.pendingProps,a);case 7:return ae(t,e,e.pendingProps,a),e.child;case 8:return ae(t,e,e.pendingProps.children,a),e.child;case 12:return ae(t,e,e.pendingProps.children,a),e.child;case 10:return o=e.pendingProps,Sa(e,e.type,o.value),ae(t,e,o.children,a),e.child;case 9:return r=e.type._context,o=e.pendingProps.children,ps(e),r=ee(r),o=o(r),e.flags|=1,ae(t,e,o,a),e.child;case 14:return Fm(t,e,e.type,e.pendingProps,a);case 15:return Zm(t,e,e.type,e.pendingProps,a);case 19:return ng(t,e,a);case 31:return L1(t,e,a);case 22:return Qm(t,e,a,e.pendingProps);case 24:return ps(e),o=ee(Pt),t===null?(r=Ar(),r===null&&(r=It,c=Tr(),r.pooledCache=c,c.refCount++,c!==null&&(r.pooledCacheLanes|=a),r=c),e.memoizedState={parent:o,cache:r},Ir(e),Sa(e,Pt,r)):((t.lanes&a)!==0&&(Vr(t,e),Pn(e,null,null,a),Un()),r=t.memoizedState,c=e.memoizedState,r.parent!==o?(r={parent:o,cache:o},e.memoizedState=r,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=r),Sa(e,Pt,o)):(o=c.cache,Sa(e,Pt,o),o!==r.cache&&Mr(e,[Pt],a,!0))),ae(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(l(156,e.tag))}function da(t){t.flags|=4}function pc(t,e,a,o,r){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(r&335544128)===r)if(t.stateNode.complete)t.flags|=8192;else if(Eg())t.flags|=8192;else throw gs=ri,Sr}else t.flags&=-16777217}function ig(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!yh(e))if(Eg())t.flags|=8192;else throw gs=ri,Sr}function Ti(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Hp():536870912,t.lanes|=e,en|=e)}function Qn(t,e){if(!xt)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Dt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(e)for(var r=t.child;r!==null;)a|=r.lanes|r.childLanes,o|=r.subtreeFlags&65011712,o|=r.flags&65011712,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)a|=r.lanes|r.childLanes,o|=r.subtreeFlags,o|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=o,t.childLanes=a,e}function U1(t,e,a){var o=e.pendingProps;switch(xr(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dt(e),null;case 1:return Dt(e),null;case 3:return a=e.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),e.memoizedState.cache!==o&&(e.flags|=2048),ra(Pt),Lt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Bs(e)?da(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,yr())),Dt(e),null;case 26:var r=e.type,c=e.memoizedState;return t===null?(da(e),c!==null?(Dt(e),ig(e,c)):(Dt(e),pc(e,r,null,o,a))):c?c!==t.memoizedState?(da(e),Dt(e),ig(e,c)):(Dt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==o&&da(e),Dt(e),pc(e,r,t,o,a)),null;case 27:if(Do(e),a=st.current,r=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==o&&da(e);else{if(!o){if(e.stateNode===null)throw Error(l(166));return Dt(e),null}t=W.current,Bs(e)?Hd(e):(t=mh(r,o,a),e.stateNode=t,da(e))}return Dt(e),null;case 5:if(Do(e),r=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==o&&da(e);else{if(!o){if(e.stateNode===null)throw Error(l(166));return Dt(e),null}if(c=W.current,Bs(e))Hd(e);else{var g=zi(st.current);switch(c){case 1:c=g.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:c=g.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":c=g.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":c=g.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":c=g.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof o.is=="string"?g.createElement("select",{is:o.is}):g.createElement("select"),o.multiple?c.multiple=!0:o.size&&(c.size=o.size);break;default:c=typeof o.is=="string"?g.createElement(r,{is:o.is}):g.createElement(r)}}c[Wt]=e,c[pe]=o;t:for(g=e.child;g!==null;){if(g.tag===5||g.tag===6)c.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break t;for(;g.sibling===null;){if(g.return===null||g.return===e)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}e.stateNode=c;t:switch(se(c,r,o),r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&da(e)}}return Dt(e),pc(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==o&&da(e);else{if(typeof o!="string"&&e.stateNode===null)throw Error(l(166));if(t=st.current,Bs(e)){if(t=e.stateNode,a=e.memoizedProps,o=null,r=te,r!==null)switch(r.tag){case 27:case 5:o=r.memoizedProps}t[Wt]=e,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||ah(t.nodeValue,a)),t||Aa(e,!0)}else t=zi(t).createTextNode(o),t[Wt]=e,e.stateNode=t}return Dt(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(o=Bs(e),a!==null){if(t===null){if(!o)throw Error(l(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(l(557));t[Wt]=e}else cs(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Dt(e),t=!1}else a=yr(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(Me(e),e):(Me(e),null);if((e.flags&128)!==0)throw Error(l(558))}return Dt(e),null;case 13:if(o=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(r=Bs(e),o!==null&&o.dehydrated!==null){if(t===null){if(!r)throw Error(l(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(l(317));r[Wt]=e}else cs(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Dt(e),r=!1}else r=yr(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),r=!0;if(!r)return e.flags&256?(Me(e),e):(Me(e),null)}return Me(e),(e.flags&128)!==0?(e.lanes=a,e):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=e.child,r=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(r=o.alternate.memoizedState.cachePool.pool),c=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(c=o.memoizedState.cachePool.pool),c!==r&&(o.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),Ti(e,e.updateQueue),Dt(e),null);case 4:return Lt(),t===null&&Nc(e.stateNode.containerInfo),Dt(e),null;case 10:return ra(e.type),Dt(e),null;case 19:if(U(Bt),o=e.memoizedState,o===null)return Dt(e),null;if(r=(e.flags&128)!==0,c=o.rendering,c===null)if(r)Qn(o,!1);else{if(Ht!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(c=di(t),c!==null){for(e.flags|=128,Qn(o,!1),t=c.updateQueue,e.updateQueue=t,Ti(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)qd(a,t),a=a.sibling;return J(Bt,Bt.current&1|2),xt&&ia(e,o.treeForkCount),e.child}t=t.sibling}o.tail!==null&&_e()>Vi&&(e.flags|=128,r=!0,Qn(o,!1),e.lanes=4194304)}else{if(!r)if(t=di(c),t!==null){if(e.flags|=128,r=!0,t=t.updateQueue,e.updateQueue=t,Ti(e,t),Qn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!c.alternate&&!xt)return Dt(e),null}else 2*_e()-o.renderingStartTime>Vi&&a!==536870912&&(e.flags|=128,r=!0,Qn(o,!1),e.lanes=4194304);o.isBackwards?(c.sibling=e.child,e.child=c):(t=o.last,t!==null?t.sibling=c:e.child=c,o.last=c)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=_e(),t.sibling=null,a=Bt.current,J(Bt,r?a&1|2:a&1),xt&&ia(e,o.treeForkCount),t):(Dt(e),null);case 22:case 23:return Me(e),qr(),o=e.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(e.flags|=8192):o&&(e.flags|=8192),o?(a&536870912)!==0&&(e.flags&128)===0&&(Dt(e),e.subtreeFlags&6&&(e.flags|=8192)):Dt(e),a=e.updateQueue,a!==null&&Ti(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),o!==a&&(e.flags|=2048),t!==null&&U(ds),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),ra(Pt),Dt(e),null;case 25:return null;case 30:return null}throw Error(l(156,e.tag))}function P1(t,e){switch(xr(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ra(Pt),Lt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Do(e),null;case 31:if(e.memoizedState!==null){if(Me(e),e.alternate===null)throw Error(l(340));cs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Me(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(l(340));cs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return U(Bt),null;case 4:return Lt(),null;case 10:return ra(e.type),null;case 22:case 23:return Me(e),qr(),t!==null&&U(ds),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return ra(Pt),null;case 25:return null;default:return null}}function lg(t,e){switch(xr(e),e.tag){case 3:ra(Pt),Lt();break;case 26:case 27:case 5:Do(e);break;case 4:Lt();break;case 31:e.memoizedState!==null&&Me(e);break;case 13:Me(e);break;case 19:U(Bt);break;case 10:ra(e.type);break;case 22:case 23:Me(e),qr(),t!==null&&U(ds);break;case 24:ra(Pt)}}function Jn(t,e){try{var a=e.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var r=o.next;a=r;do{if((a.tag&t)===t){o=void 0;var c=a.create,g=a.inst;o=c(),g.destroy=o}a=a.next}while(a!==r)}}catch(_){Tt(e,e.return,_)}}function qa(t,e,a){try{var o=e.updateQueue,r=o!==null?o.lastEffect:null;if(r!==null){var c=r.next;o=c;do{if((o.tag&t)===t){var g=o.inst,_=g.destroy;if(_!==void 0){g.destroy=void 0,r=e;var v=a,w=_;try{w()}catch(H){Tt(r,v,H)}}}o=o.next}while(o!==c)}}catch(H){Tt(e,e.return,H)}}function rg(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{$d(e,a)}catch(o){Tt(t,t.return,o)}}}function cg(t,e,a){a.props=fs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Tt(t,e,o)}}function $n(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(r){Tt(t,e,r)}}function Qe(t,e){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(r){Tt(t,e,r)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(r){Tt(t,e,r)}else a.current=null}function ug(t){var e=t.type,a=t.memoizedProps,o=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(r){Tt(t,t.return,r)}}function dc(t,e,a){try{var o=t.stateNode;dx(o,t.type,a,e),o[pe]=e}catch(r){Tt(t,t.return,r)}}function pg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&La(t.type)||t.tag===4}function mc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||pg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&La(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gc(t,e,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=sa));else if(o!==4&&(o===27&&La(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(gc(t,e,a),t=t.sibling;t!==null;)gc(t,e,a),t=t.sibling}function ji(t,e,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(o!==4&&(o===27&&La(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(ji(t,e,a),t=t.sibling;t!==null;)ji(t,e,a),t=t.sibling}function dg(t){var e=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,r=e.attributes;r.length;)e.removeAttributeNode(r[0]);se(e,o,a),e[Wt]=t,e[pe]=a}catch(c){Tt(t,t.return,c)}}var ma=!1,Kt=!1,hc=!1,mg=typeof WeakSet=="function"?WeakSet:Set,$t=null;function Y1(t,e){if(t=t.containerInfo,Dc=Ki,t=Td(t),rr(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var r=o.anchorOffset,c=o.focusNode;o=o.focusOffset;try{a.nodeType,c.nodeType}catch{a=null;break t}var g=0,_=-1,v=-1,w=0,H=0,P=t,E=null;e:for(;;){for(var C;P!==a||r!==0&&P.nodeType!==3||(_=g+r),P!==c||o!==0&&P.nodeType!==3||(v=g+o),P.nodeType===3&&(g+=P.nodeValue.length),(C=P.firstChild)!==null;)E=P,P=C;for(;;){if(P===t)break e;if(E===a&&++w===r&&(_=g),E===c&&++H===o&&(v=g),(C=P.nextSibling)!==null)break;P=E,E=P.parentNode}P=C}a=_===-1||v===-1?null:{start:_,end:v}}else a=null}a=a||{start:0,end:0}}else a=null;for(Oc={focusedElem:t,selectionRange:a},Ki=!1,$t=e;$t!==null;)if(e=$t,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$t=t;else for(;$t!==null;){switch(e=$t,c=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)r=t[a],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&c!==null){t=void 0,a=e,r=c.memoizedProps,c=c.memoizedState,o=a.stateNode;try{var tt=fs(a.type,r);t=o.getSnapshotBeforeUpdate(tt,c),o.__reactInternalSnapshotBeforeUpdate=t}catch(ot){Tt(a,a.return,ot)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)zc(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":zc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(l(163))}if(t=e.sibling,t!==null){t.return=e.return,$t=t;break}$t=e.return}}function gg(t,e,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ha(t,a),o&4&&Jn(5,a);break;case 1:if(ha(t,a),o&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(g){Tt(a,a.return,g)}else{var r=fs(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(r,e,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Tt(a,a.return,g)}}o&64&&rg(a),o&512&&$n(a,a.return);break;case 3:if(ha(t,a),o&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{$d(t,e)}catch(g){Tt(a,a.return,g)}}break;case 27:e===null&&o&4&&dg(a);case 26:case 5:ha(t,a),e===null&&o&4&&ug(a),o&512&&$n(a,a.return);break;case 12:ha(t,a);break;case 31:ha(t,a),o&4&&fg(t,a);break;case 13:ha(t,a),o&4&&_g(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=tx.bind(null,a),kx(t,a))));break;case 22:if(o=a.memoizedState!==null||ma,!o){e=e!==null&&e.memoizedState!==null||Kt,r=ma;var c=Kt;ma=o,(Kt=e)&&!c?ba(t,a,(a.subtreeFlags&8772)!==0):ha(t,a),ma=r,Kt=c}break;case 30:break;default:ha(t,a)}}function hg(t){var e=t.alternate;e!==null&&(t.alternate=null,hg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Yl(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ot=null,me=!1;function ga(t,e,a){for(a=a.child;a!==null;)bg(t,e,a),a=a.sibling}function bg(t,e,a){if(xe&&typeof xe.onCommitFiberUnmount=="function")try{xe.onCommitFiberUnmount(Gn,a)}catch{}switch(a.tag){case 26:Kt||Qe(a,e),ga(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Kt||Qe(a,e);var o=Ot,r=me;La(a.type)&&(Ot=a.stateNode,me=!1),ga(t,e,a),lo(a.stateNode),Ot=o,me=r;break;case 5:Kt||Qe(a,e);case 6:if(o=Ot,r=me,Ot=null,ga(t,e,a),Ot=o,me=r,Ot!==null)if(me)try{(Ot.nodeType===9?Ot.body:Ot.nodeName==="HTML"?Ot.ownerDocument.body:Ot).removeChild(a.stateNode)}catch(c){Tt(a,e,c)}else try{Ot.removeChild(a.stateNode)}catch(c){Tt(a,e,c)}break;case 18:Ot!==null&&(me?(t=Ot,rh(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),un(t)):rh(Ot,a.stateNode));break;case 4:o=Ot,r=me,Ot=a.stateNode.containerInfo,me=!0,ga(t,e,a),Ot=o,me=r;break;case 0:case 11:case 14:case 15:qa(2,a,e),Kt||qa(4,a,e),ga(t,e,a);break;case 1:Kt||(Qe(a,e),o=a.stateNode,typeof o.componentWillUnmount=="function"&&cg(a,e,o)),ga(t,e,a);break;case 21:ga(t,e,a);break;case 22:Kt=(o=Kt)||a.memoizedState!==null,ga(t,e,a),Kt=o;break;default:ga(t,e,a)}}function fg(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{un(t)}catch(a){Tt(e,e.return,a)}}}function _g(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{un(t)}catch(a){Tt(e,e.return,a)}}function X1(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new mg),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new mg),e;default:throw Error(l(435,t.tag))}}function Ai(t,e){var a=X1(t);e.forEach(function(o){if(!a.has(o)){a.add(o);var r=ex.bind(null,t,o);o.then(r,r)}})}function ge(t,e){var a=e.deletions;if(a!==null)for(var o=0;o<a.length;o++){var r=a[o],c=t,g=e,_=g;t:for(;_!==null;){switch(_.tag){case 27:if(La(_.type)){Ot=_.stateNode,me=!1;break t}break;case 5:Ot=_.stateNode,me=!1;break t;case 3:case 4:Ot=_.stateNode.containerInfo,me=!0;break t}_=_.return}if(Ot===null)throw Error(l(160));bg(c,g,r),Ot=null,me=!1,c=r.alternate,c!==null&&(c.return=null),r.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)xg(e,t),e=e.sibling}var Ue=null;function xg(t,e){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ge(e,t),he(t),o&4&&(qa(3,t,t.return),Jn(3,t),qa(5,t,t.return));break;case 1:ge(e,t),he(t),o&512&&(Kt||a===null||Qe(a,a.return)),o&64&&ma&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var r=Ue;if(ge(e,t),he(t),o&512&&(Kt||a===null||Qe(a,a.return)),o&4){var c=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){t:{o=t.type,a=t.memoizedProps,r=r.ownerDocument||r;e:switch(o){case"title":c=r.getElementsByTagName("title")[0],(!c||c[Tn]||c[Wt]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=r.createElement(o),r.head.insertBefore(c,r.querySelector("head > title"))),se(c,o,a),c[Wt]=t,Jt(c),o=c;break t;case"link":var g=xh("link","href",r).get(o+(a.href||""));if(g){for(var _=0;_<g.length;_++)if(c=g[_],c.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&c.getAttribute("rel")===(a.rel==null?null:a.rel)&&c.getAttribute("title")===(a.title==null?null:a.title)&&c.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(_,1);break e}}c=r.createElement(o),se(c,o,a),r.head.appendChild(c);break;case"meta":if(g=xh("meta","content",r).get(o+(a.content||""))){for(_=0;_<g.length;_++)if(c=g[_],c.getAttribute("content")===(a.content==null?null:""+a.content)&&c.getAttribute("name")===(a.name==null?null:a.name)&&c.getAttribute("property")===(a.property==null?null:a.property)&&c.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&c.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(_,1);break e}}c=r.createElement(o),se(c,o,a),r.head.appendChild(c);break;default:throw Error(l(468,o))}c[Wt]=t,Jt(c),o=c}t.stateNode=o}else kh(r,t.type,t.stateNode);else t.stateNode=_h(r,o,t.memoizedProps);else c!==o?(c===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):c.count--,o===null?kh(r,t.type,t.stateNode):_h(r,o,t.memoizedProps)):o===null&&t.stateNode!==null&&dc(t,t.memoizedProps,a.memoizedProps)}break;case 27:ge(e,t),he(t),o&512&&(Kt||a===null||Qe(a,a.return)),a!==null&&o&4&&dc(t,t.memoizedProps,a.memoizedProps);break;case 5:if(ge(e,t),he(t),o&512&&(Kt||a===null||Qe(a,a.return)),t.flags&32){r=t.stateNode;try{Es(r,"")}catch(tt){Tt(t,t.return,tt)}}o&4&&t.stateNode!=null&&(r=t.memoizedProps,dc(t,r,a!==null?a.memoizedProps:r)),o&1024&&(hc=!0);break;case 6:if(ge(e,t),he(t),o&4){if(t.stateNode===null)throw Error(l(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(tt){Tt(t,t.return,tt)}}break;case 3:if(Ui=null,r=Ue,Ue=Li(e.containerInfo),ge(e,t),Ue=r,he(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{un(e.containerInfo)}catch(tt){Tt(t,t.return,tt)}hc&&(hc=!1,kg(t));break;case 4:o=Ue,Ue=Li(t.stateNode.containerInfo),ge(e,t),he(t),Ue=o;break;case 12:ge(e,t),he(t);break;case 31:ge(e,t),he(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ai(t,o)));break;case 13:ge(e,t),he(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ii=_e()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ai(t,o)));break;case 22:r=t.memoizedState!==null;var v=a!==null&&a.memoizedState!==null,w=ma,H=Kt;if(ma=w||r,Kt=H||v,ge(e,t),Kt=H,ma=w,he(t),o&8192)t:for(e=t.stateNode,e._visibility=r?e._visibility&-2:e._visibility|1,r&&(a===null||v||ma||Kt||_s(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){v=a=e;try{if(c=v.stateNode,r)g=c.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{_=v.stateNode;var P=v.memoizedProps.style,E=P!=null&&P.hasOwnProperty("display")?P.display:null;_.style.display=E==null||typeof E=="boolean"?"":(""+E).trim()}}catch(tt){Tt(v,v.return,tt)}}}else if(e.tag===6){if(a===null){v=e;try{v.stateNode.nodeValue=r?"":v.memoizedProps}catch(tt){Tt(v,v.return,tt)}}}else if(e.tag===18){if(a===null){v=e;try{var C=v.stateNode;r?ch(C,!0):ch(v.stateNode,!1)}catch(tt){Tt(v,v.return,tt)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Ai(t,a))));break;case 19:ge(e,t),he(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ai(t,o)));break;case 30:break;case 21:break;default:ge(e,t),he(t)}}function he(t){var e=t.flags;if(e&2){try{for(var a,o=t.return;o!==null;){if(pg(o)){a=o;break}o=o.return}if(a==null)throw Error(l(160));switch(a.tag){case 27:var r=a.stateNode,c=mc(t);ji(t,c,r);break;case 5:var g=a.stateNode;a.flags&32&&(Es(g,""),a.flags&=-33);var _=mc(t);ji(t,_,g);break;case 3:case 4:var v=a.stateNode.containerInfo,w=mc(t);gc(t,w,v);break;default:throw Error(l(161))}}catch(H){Tt(t,t.return,H)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function kg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;kg(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function ha(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)gg(t,e.alternate,e),e=e.sibling}function _s(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:qa(4,e,e.return),_s(e);break;case 1:Qe(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&cg(e,e.return,a),_s(e);break;case 27:lo(e.stateNode);case 26:case 5:Qe(e,e.return),_s(e);break;case 22:e.memoizedState===null&&_s(e);break;case 30:_s(e);break;default:_s(e)}t=t.sibling}}function ba(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var o=e.alternate,r=t,c=e,g=c.flags;switch(c.tag){case 0:case 11:case 15:ba(r,c,a),Jn(4,c);break;case 1:if(ba(r,c,a),o=c,r=o.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(w){Tt(o,o.return,w)}if(o=c,r=o.updateQueue,r!==null){var _=o.stateNode;try{var v=r.shared.hiddenCallbacks;if(v!==null)for(r.shared.hiddenCallbacks=null,r=0;r<v.length;r++)Jd(v[r],_)}catch(w){Tt(o,o.return,w)}}a&&g&64&&rg(c),$n(c,c.return);break;case 27:dg(c);case 26:case 5:ba(r,c,a),a&&o===null&&g&4&&ug(c),$n(c,c.return);break;case 12:ba(r,c,a);break;case 31:ba(r,c,a),a&&g&4&&fg(r,c);break;case 13:ba(r,c,a),a&&g&4&&_g(r,c);break;case 22:c.memoizedState===null&&ba(r,c,a),$n(c,c.return);break;case 30:break;default:ba(r,c,a)}e=e.sibling}}function bc(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Rn(a))}function fc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Rn(t))}function Pe(t,e,a,o){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)yg(t,e,a,o),e=e.sibling}function yg(t,e,a,o){var r=e.flags;switch(e.tag){case 0:case 11:case 15:Pe(t,e,a,o),r&2048&&Jn(9,e);break;case 1:Pe(t,e,a,o);break;case 3:Pe(t,e,a,o),r&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Rn(t)));break;case 12:if(r&2048){Pe(t,e,a,o),t=e.stateNode;try{var c=e.memoizedProps,g=c.id,_=c.onPostCommit;typeof _=="function"&&_(g,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(v){Tt(e,e.return,v)}}else Pe(t,e,a,o);break;case 31:Pe(t,e,a,o);break;case 13:Pe(t,e,a,o);break;case 23:break;case 22:c=e.stateNode,g=e.alternate,e.memoizedState!==null?c._visibility&2?Pe(t,e,a,o):Wn(t,e):c._visibility&2?Pe(t,e,a,o):(c._visibility|=2,$s(t,e,a,o,(e.subtreeFlags&10256)!==0||!1)),r&2048&&bc(g,e);break;case 24:Pe(t,e,a,o),r&2048&&fc(e.alternate,e);break;default:Pe(t,e,a,o)}}function $s(t,e,a,o,r){for(r=r&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var c=t,g=e,_=a,v=o,w=g.flags;switch(g.tag){case 0:case 11:case 15:$s(c,g,_,v,r),Jn(8,g);break;case 23:break;case 22:var H=g.stateNode;g.memoizedState!==null?H._visibility&2?$s(c,g,_,v,r):Wn(c,g):(H._visibility|=2,$s(c,g,_,v,r)),r&&w&2048&&bc(g.alternate,g);break;case 24:$s(c,g,_,v,r),r&&w&2048&&fc(g.alternate,g);break;default:$s(c,g,_,v,r)}e=e.sibling}}function Wn(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,o=e,r=o.flags;switch(o.tag){case 22:Wn(a,o),r&2048&&bc(o.alternate,o);break;case 24:Wn(a,o),r&2048&&fc(o.alternate,o);break;default:Wn(a,o)}e=e.sibling}}var to=8192;function Ws(t,e,a){if(t.subtreeFlags&to)for(t=t.child;t!==null;)Gg(t,e,a),t=t.sibling}function Gg(t,e,a){switch(t.tag){case 26:Ws(t,e,a),t.flags&to&&t.memoizedState!==null&&Ex(a,Ue,t.memoizedState,t.memoizedProps);break;case 5:Ws(t,e,a);break;case 3:case 4:var o=Ue;Ue=Li(t.stateNode.containerInfo),Ws(t,e,a),Ue=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=to,to=16777216,Ws(t,e,a),to=o):Ws(t,e,a));break;default:Ws(t,e,a)}}function vg(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function eo(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var o=e[a];$t=o,Tg(o,t)}vg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Mg(t),t=t.sibling}function Mg(t){switch(t.tag){case 0:case 11:case 15:eo(t),t.flags&2048&&qa(9,t,t.return);break;case 3:eo(t);break;case 12:eo(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Si(t)):eo(t);break;default:eo(t)}}function Si(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var o=e[a];$t=o,Tg(o,t)}vg(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:qa(8,e,e.return),Si(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,Si(e));break;default:Si(e)}t=t.sibling}}function Tg(t,e){for(;$t!==null;){var a=$t;switch(a.tag){case 0:case 11:case 15:qa(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Rn(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,$t=o;else t:for(a=t;$t!==null;){o=$t;var r=o.sibling,c=o.return;if(hg(o),o===a){$t=null;break t}if(r!==null){r.return=c,$t=r;break t}$t=c}}}var K1={getCacheForType:function(t){var e=ee(Pt),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return ee(Pt).controller.signal}},F1=typeof WeakMap=="function"?WeakMap:Map,Gt=0,It=null,gt=null,ft=0,Mt=0,Te=null,Ca=!1,tn=!1,_c=!1,fa=0,Ht=0,Da=0,xs=0,xc=0,je=0,en=0,ao=null,be=null,kc=!1,Ii=0,jg=0,Vi=1/0,wi=null,Oa=null,Zt=0,Ra=null,an=null,_a=0,yc=0,Gc=null,Ag=null,so=0,vc=null;function Ae(){return(Gt&2)!==0&&ft!==0?ft&-ft:D.T!==null?Ic():Up()}function Sg(){if(je===0)if((ft&536870912)===0||xt){var t=Ho;Ho<<=1,(Ho&3932160)===0&&(Ho=262144),je=t}else je=536870912;return t=ve.current,t!==null&&(t.flags|=32),je}function fe(t,e,a){(t===It&&(Mt===2||Mt===9)||t.cancelPendingCommit!==null)&&(sn(t,0),Ha(t,ft,je,!1)),Mn(t,a),((Gt&2)===0||t!==It)&&(t===It&&((Gt&2)===0&&(xs|=a),Ht===4&&Ha(t,ft,je,!1)),Je(t))}function Ig(t,e,a){if((Gt&6)!==0)throw Error(l(327));var o=!a&&(e&127)===0&&(e&t.expiredLanes)===0||vn(t,e),r=o?J1(t,e):Tc(t,e,!0),c=o;do{if(r===0){tn&&!o&&Ha(t,e,0,!1);break}else{if(a=t.current.alternate,c&&!Z1(a)){r=Tc(t,e,!1),c=!1;continue}if(r===2){if(c=e,t.errorRecoveryDisabledLanes&c)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){e=g;t:{var _=t;r=ao;var v=_.current.memoizedState.isDehydrated;if(v&&(sn(_,g).flags|=256),g=Tc(_,g,!1),g!==2){if(_c&&!v){_.errorRecoveryDisabledLanes|=c,xs|=c,r=4;break t}c=be,be=r,c!==null&&(be===null?be=c:be.push.apply(be,c))}r=g}if(c=!1,r!==2)continue}}if(r===1){sn(t,0),Ha(t,e,0,!0);break}t:{switch(o=t,c=r,c){case 0:case 1:throw Error(l(345));case 4:if((e&4194048)!==e)break;case 6:Ha(o,e,je,!Ca);break t;case 2:be=null;break;case 3:case 5:break;default:throw Error(l(329))}if((e&62914560)===e&&(r=Ii+300-_e(),10<r)){if(Ha(o,e,je,!Ca),Lo(o,0,!0)!==0)break t;_a=e,o.timeoutHandle=ih(Vg.bind(null,o,a,be,wi,kc,e,je,xs,en,Ca,c,"Throttled",-0,0),r);break t}Vg(o,a,be,wi,kc,e,je,xs,en,Ca,c,null,-0,0)}}break}while(!0);Je(t)}function Vg(t,e,a,o,r,c,g,_,v,w,H,P,E,C){if(t.timeoutHandle=-1,P=e.subtreeFlags,P&8192||(P&16785408)===16785408){P={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sa},Gg(e,c,P);var tt=(c&62914560)===c?Ii-_e():(c&4194048)===c?jg-_e():0;if(tt=Nx(P,tt),tt!==null){_a=c,t.cancelPendingCommit=tt(Rg.bind(null,t,e,c,a,o,r,g,_,v,H,P,null,E,C)),Ha(t,c,g,!w);return}}Rg(t,e,c,a,o,r,g,_,v)}function Z1(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var r=a[o],c=r.getSnapshot;r=r.value;try{if(!ye(c(),r))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ha(t,e,a,o){e&=~xc,e&=~xs,t.suspendedLanes|=e,t.pingedLanes&=~e,o&&(t.warmLanes|=e),o=t.expirationTimes;for(var r=e;0<r;){var c=31-ke(r),g=1<<c;o[c]=-1,r&=~g}a!==0&&zp(t,a,e)}function Ei(){return(Gt&6)===0?(no(0),!1):!0}function Mc(){if(gt!==null){if(Mt===0)var t=gt.return;else t=gt,la=us=null,zr(t),Ks=null,zn=0,t=gt;for(;t!==null;)lg(t.alternate,t),t=t.return;gt=null}}function sn(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,hx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),_a=0,Mc(),It=t,gt=a=oa(t.current,null),ft=e,Mt=0,Te=null,Ca=!1,tn=vn(t,e),_c=!1,en=je=xc=xs=Da=Ht=0,be=ao=null,kc=!1,(e&8)!==0&&(e|=e&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=e;0<o;){var r=31-ke(o),c=1<<r;e|=t[r],o&=~c}return fa=e,Wo(),a}function wg(t,e){ut=null,D.H=Fn,e===Xs||e===li?(e=Kd(),Mt=3):e===Sr?(e=Kd(),Mt=4):Mt=e===ac?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Te=e,gt===null&&(Ht=1,yi(t,Ne(e,t.current)))}function Eg(){var t=ve.current;return t===null?!0:(ft&4194048)===ft?Oe===null:(ft&62914560)===ft||(ft&536870912)!==0?t===Oe:!1}function Ng(){var t=D.H;return D.H=Fn,t===null?Fn:t}function qg(){var t=D.A;return D.A=K1,t}function Ni(){Ht=4,Ca||(ft&4194048)!==ft&&ve.current!==null||(tn=!0),(Da&134217727)===0&&(xs&134217727)===0||It===null||Ha(It,ft,je,!1)}function Tc(t,e,a){var o=Gt;Gt|=2;var r=Ng(),c=qg();(It!==t||ft!==e)&&(wi=null,sn(t,e)),e=!1;var g=Ht;t:do try{if(Mt!==0&&gt!==null){var _=gt,v=Te;switch(Mt){case 8:Mc(),g=6;break t;case 3:case 2:case 9:case 6:ve.current===null&&(e=!0);var w=Mt;if(Mt=0,Te=null,nn(t,_,v,w),a&&tn){g=0;break t}break;default:w=Mt,Mt=0,Te=null,nn(t,_,v,w)}}Q1(),g=Ht;break}catch(H){wg(t,H)}while(!0);return e&&t.shellSuspendCounter++,la=us=null,Gt=o,D.H=r,D.A=c,gt===null&&(It=null,ft=0,Wo()),g}function Q1(){for(;gt!==null;)Cg(gt)}function J1(t,e){var a=Gt;Gt|=2;var o=Ng(),r=qg();It!==t||ft!==e?(wi=null,Vi=_e()+500,sn(t,e)):tn=vn(t,e);t:do try{if(Mt!==0&&gt!==null){e=gt;var c=Te;e:switch(Mt){case 1:Mt=0,Te=null,nn(t,e,c,1);break;case 2:case 9:if(Yd(c)){Mt=0,Te=null,Dg(e);break}e=function(){Mt!==2&&Mt!==9||It!==t||(Mt=7),Je(t)},c.then(e,e);break t;case 3:Mt=7;break t;case 4:Mt=5;break t;case 7:Yd(c)?(Mt=0,Te=null,Dg(e)):(Mt=0,Te=null,nn(t,e,c,7));break;case 5:var g=null;switch(gt.tag){case 26:g=gt.memoizedState;case 5:case 27:var _=gt;if(g?yh(g):_.stateNode.complete){Mt=0,Te=null;var v=_.sibling;if(v!==null)gt=v;else{var w=_.return;w!==null?(gt=w,qi(w)):gt=null}break e}}Mt=0,Te=null,nn(t,e,c,5);break;case 6:Mt=0,Te=null,nn(t,e,c,6);break;case 8:Mc(),Ht=6;break t;default:throw Error(l(462))}}$1();break}catch(H){wg(t,H)}while(!0);return la=us=null,D.H=o,D.A=r,Gt=a,gt!==null?0:(It=null,ft=0,Wo(),Ht)}function $1(){for(;gt!==null&&!y0();)Cg(gt)}function Cg(t){var e=og(t.alternate,t,fa);t.memoizedProps=t.pendingProps,e===null?qi(t):gt=e}function Dg(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=Wm(a,e,e.pendingProps,e.type,void 0,ft);break;case 11:e=Wm(a,e,e.pendingProps,e.type.render,e.ref,ft);break;case 5:zr(e);default:lg(a,e),e=gt=qd(e,fa),e=og(a,e,fa)}t.memoizedProps=t.pendingProps,e===null?qi(t):gt=e}function nn(t,e,a,o){la=us=null,zr(e),Ks=null,zn=0;var r=e.return;try{if(z1(t,r,e,a,ft)){Ht=1,yi(t,Ne(a,t.current)),gt=null;return}}catch(c){if(r!==null)throw gt=r,c;Ht=1,yi(t,Ne(a,t.current)),gt=null;return}e.flags&32768?(xt||o===1?t=!0:tn||(ft&536870912)!==0?t=!1:(Ca=t=!0,(o===2||o===9||o===3||o===6)&&(o=ve.current,o!==null&&o.tag===13&&(o.flags|=16384))),Og(e,t)):qi(e)}function qi(t){var e=t;do{if((e.flags&32768)!==0){Og(e,Ca);return}t=e.return;var a=U1(e.alternate,e,fa);if(a!==null){gt=a;return}if(e=e.sibling,e!==null){gt=e;return}gt=e=t}while(e!==null);Ht===0&&(Ht=5)}function Og(t,e){do{var a=P1(t.alternate,t);if(a!==null){a.flags&=32767,gt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){gt=t;return}gt=t=a}while(t!==null);Ht=6,gt=null}function Rg(t,e,a,o,r,c,g,_,v){t.cancelPendingCommit=null;do Ci();while(Zt!==0);if((Gt&6)!==0)throw Error(l(327));if(e!==null){if(e===t.current)throw Error(l(177));if(c=e.lanes|e.childLanes,c|=mr,w0(t,a,c,g,_,v),t===It&&(gt=It=null,ft=0),an=e,Ra=t,_a=a,yc=c,Gc=r,Ag=o,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,ax(Oo,function(){return Ug(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||o){o=D.T,D.T=null,r=Q.p,Q.p=2,g=Gt,Gt|=4;try{Y1(t,e,a)}finally{Gt=g,Q.p=r,D.T=o}}Zt=1,Hg(),zg(),Lg()}}function Hg(){if(Zt===1){Zt=0;var t=Ra,e=an,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=D.T,D.T=null;var o=Q.p;Q.p=2;var r=Gt;Gt|=4;try{xg(e,t);var c=Oc,g=Td(t.containerInfo),_=c.focusedElem,v=c.selectionRange;if(g!==_&&_&&_.ownerDocument&&Md(_.ownerDocument.documentElement,_)){if(v!==null&&rr(_)){var w=v.start,H=v.end;if(H===void 0&&(H=w),"selectionStart"in _)_.selectionStart=w,_.selectionEnd=Math.min(H,_.value.length);else{var P=_.ownerDocument||document,E=P&&P.defaultView||window;if(E.getSelection){var C=E.getSelection(),tt=_.textContent.length,ot=Math.min(v.start,tt),St=v.end===void 0?ot:Math.min(v.end,tt);!C.extend&&ot>St&&(g=St,St=ot,ot=g);var S=vd(_,ot),j=vd(_,St);if(S&&j&&(C.rangeCount!==1||C.anchorNode!==S.node||C.anchorOffset!==S.offset||C.focusNode!==j.node||C.focusOffset!==j.offset)){var V=P.createRange();V.setStart(S.node,S.offset),C.removeAllRanges(),ot>St?(C.addRange(V),C.extend(j.node,j.offset)):(V.setEnd(j.node,j.offset),C.addRange(V))}}}}for(P=[],C=_;C=C.parentNode;)C.nodeType===1&&P.push({element:C,left:C.scrollLeft,top:C.scrollTop});for(typeof _.focus=="function"&&_.focus(),_=0;_<P.length;_++){var B=P[_];B.element.scrollLeft=B.left,B.element.scrollTop=B.top}}Ki=!!Dc,Oc=Dc=null}finally{Gt=r,Q.p=o,D.T=a}}t.current=e,Zt=2}}function zg(){if(Zt===2){Zt=0;var t=Ra,e=an,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=D.T,D.T=null;var o=Q.p;Q.p=2;var r=Gt;Gt|=4;try{gg(t,e.alternate,e)}finally{Gt=r,Q.p=o,D.T=a}}Zt=3}}function Lg(){if(Zt===4||Zt===3){Zt=0,G0();var t=Ra,e=an,a=_a,o=Ag;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Zt=5:(Zt=0,an=Ra=null,Bg(t,t.pendingLanes));var r=t.pendingLanes;if(r===0&&(Oa=null),Ul(a),e=e.stateNode,xe&&typeof xe.onCommitFiberRoot=="function")try{xe.onCommitFiberRoot(Gn,e,void 0,(e.current.flags&128)===128)}catch{}if(o!==null){e=D.T,r=Q.p,Q.p=2,D.T=null;try{for(var c=t.onRecoverableError,g=0;g<o.length;g++){var _=o[g];c(_.value,{componentStack:_.stack})}}finally{D.T=e,Q.p=r}}(_a&3)!==0&&Ci(),Je(t),r=t.pendingLanes,(a&261930)!==0&&(r&42)!==0?t===vc?so++:(so=0,vc=t):so=0,no(0)}}function Bg(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Rn(e)))}function Ci(){return Hg(),zg(),Lg(),Ug()}function Ug(){if(Zt!==5)return!1;var t=Ra,e=yc;yc=0;var a=Ul(_a),o=D.T,r=Q.p;try{Q.p=32>a?32:a,D.T=null,a=Gc,Gc=null;var c=Ra,g=_a;if(Zt=0,an=Ra=null,_a=0,(Gt&6)!==0)throw Error(l(331));var _=Gt;if(Gt|=4,Mg(c.current),yg(c,c.current,g,a),Gt=_,no(0,!1),xe&&typeof xe.onPostCommitFiberRoot=="function")try{xe.onPostCommitFiberRoot(Gn,c)}catch{}return!0}finally{Q.p=r,D.T=o,Bg(t,e)}}function Pg(t,e,a){e=Ne(a,e),e=ec(t.stateNode,e,2),t=wa(t,e,2),t!==null&&(Mn(t,2),Je(t))}function Tt(t,e,a){if(t.tag===3)Pg(t,t,a);else for(;e!==null;){if(e.tag===3){Pg(e,t,a);break}else if(e.tag===1){var o=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Oa===null||!Oa.has(o))){t=Ne(a,t),a=Ym(2),o=wa(e,a,2),o!==null&&(Xm(a,o,e,t),Mn(o,2),Je(o));break}}e=e.return}}function jc(t,e,a){var o=t.pingCache;if(o===null){o=t.pingCache=new F1;var r=new Set;o.set(e,r)}else r=o.get(e),r===void 0&&(r=new Set,o.set(e,r));r.has(a)||(_c=!0,r.add(a),t=W1.bind(null,t,e,a),e.then(t,t))}function W1(t,e,a){var o=t.pingCache;o!==null&&o.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,It===t&&(ft&a)===a&&(Ht===4||Ht===3&&(ft&62914560)===ft&&300>_e()-Ii?(Gt&2)===0&&sn(t,0):xc|=a,en===ft&&(en=0)),Je(t)}function Yg(t,e){e===0&&(e=Hp()),t=ls(t,e),t!==null&&(Mn(t,e),Je(t))}function tx(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),Yg(t,a)}function ex(t,e){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,r=t.memoizedState;r!==null&&(a=r.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(l(314))}o!==null&&o.delete(e),Yg(t,a)}function ax(t,e){return Hl(t,e)}var Di=null,on=null,Ac=!1,Oi=!1,Sc=!1,za=0;function Je(t){t!==on&&t.next===null&&(on===null?Di=on=t:on=on.next=t),Oi=!0,Ac||(Ac=!0,nx())}function no(t,e){if(!Sc&&Oi){Sc=!0;do for(var a=!1,o=Di;o!==null;){if(t!==0){var r=o.pendingLanes;if(r===0)var c=0;else{var g=o.suspendedLanes,_=o.pingedLanes;c=(1<<31-ke(42|t)+1)-1,c&=r&~(g&~_),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,Zg(o,c))}else c=ft,c=Lo(o,o===It?c:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(c&3)===0||vn(o,c)||(a=!0,Zg(o,c));o=o.next}while(a);Sc=!1}}function sx(){Xg()}function Xg(){Oi=Ac=!1;var t=0;za!==0&&gx()&&(t=za);for(var e=_e(),a=null,o=Di;o!==null;){var r=o.next,c=Kg(o,e);c===0?(o.next=null,a===null?Di=r:a.next=r,r===null&&(on=a)):(a=o,(t!==0||(c&3)!==0)&&(Oi=!0)),o=r}Zt!==0&&Zt!==5||no(t),za!==0&&(za=0)}function Kg(t,e){for(var a=t.suspendedLanes,o=t.pingedLanes,r=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var g=31-ke(c),_=1<<g,v=r[g];v===-1?((_&a)===0||(_&o)!==0)&&(r[g]=V0(_,e)):v<=e&&(t.expiredLanes|=_),c&=~_}if(e=It,a=ft,a=Lo(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===e&&(Mt===2||Mt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&zl(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||vn(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(o!==null&&zl(o),Ul(a)){case 2:case 8:a=Op;break;case 32:a=Oo;break;case 268435456:a=Rp;break;default:a=Oo}return o=Fg.bind(null,t),a=Hl(a,o),t.callbackPriority=e,t.callbackNode=a,e}return o!==null&&o!==null&&zl(o),t.callbackPriority=2,t.callbackNode=null,2}function Fg(t,e){if(Zt!==0&&Zt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ci()&&t.callbackNode!==a)return null;var o=ft;return o=Lo(t,t===It?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Ig(t,o,e),Kg(t,_e()),t.callbackNode!=null&&t.callbackNode===a?Fg.bind(null,t):null)}function Zg(t,e){if(Ci())return null;Ig(t,e,!0)}function nx(){bx(function(){(Gt&6)!==0?Hl(Dp,sx):Xg()})}function Ic(){if(za===0){var t=Ps;t===0&&(t=Ro,Ro<<=1,(Ro&261888)===0&&(Ro=256)),za=t}return za}function Qg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Yo(""+t)}function Jg(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function ox(t,e,a,o,r){if(e==="submit"&&a&&a.stateNode===r){var c=Qg((r[pe]||null).action),g=o.submitter;g&&(e=(e=g[pe]||null)?Qg(e.formAction):g.getAttribute("formAction"),e!==null&&(c=e,g=null));var _=new Zo("action","action",null,o,r);t.push({event:_,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(za!==0){var v=g?Jg(r,g):new FormData(r);Zr(a,{pending:!0,data:v,method:r.method,action:c},null,v)}}else typeof c=="function"&&(_.preventDefault(),v=g?Jg(r,g):new FormData(r),Zr(a,{pending:!0,data:v,method:r.method,action:c},c,v))},currentTarget:r}]})}}for(var Vc=0;Vc<dr.length;Vc++){var wc=dr[Vc],ix=wc.toLowerCase(),lx=wc[0].toUpperCase()+wc.slice(1);Be(ix,"on"+lx)}Be(Sd,"onAnimationEnd"),Be(Id,"onAnimationIteration"),Be(Vd,"onAnimationStart"),Be("dblclick","onDoubleClick"),Be("focusin","onFocus"),Be("focusout","onBlur"),Be(v1,"onTransitionRun"),Be(M1,"onTransitionStart"),Be(T1,"onTransitionCancel"),Be(wd,"onTransitionEnd"),Vs("onMouseEnter",["mouseout","mouseover"]),Vs("onMouseLeave",["mouseout","mouseover"]),Vs("onPointerEnter",["pointerout","pointerover"]),Vs("onPointerLeave",["pointerout","pointerover"]),ss("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ss("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ss("onBeforeInput",["compositionend","keypress","textInput","paste"]),ss("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ss("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ss("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(oo));function $g(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],r=o.event;o=o.listeners;t:{var c=void 0;if(e)for(var g=o.length-1;0<=g;g--){var _=o[g],v=_.instance,w=_.currentTarget;if(_=_.listener,v!==c&&r.isPropagationStopped())break t;c=_,r.currentTarget=w;try{c(r)}catch(H){$o(H)}r.currentTarget=null,c=v}else for(g=0;g<o.length;g++){if(_=o[g],v=_.instance,w=_.currentTarget,_=_.listener,v!==c&&r.isPropagationStopped())break t;c=_,r.currentTarget=w;try{c(r)}catch(H){$o(H)}r.currentTarget=null,c=v}}}}function ht(t,e){var a=e[Pl];a===void 0&&(a=e[Pl]=new Set);var o=t+"__bubble";a.has(o)||(Wg(e,t,2,!1),a.add(o))}function Ec(t,e,a){var o=0;e&&(o|=4),Wg(a,t,o,e)}var Ri="_reactListening"+Math.random().toString(36).slice(2);function Nc(t){if(!t[Ri]){t[Ri]=!0,Xp.forEach(function(a){a!=="selectionchange"&&(rx.has(a)||Ec(a,!1,t),Ec(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ri]||(e[Ri]=!0,Ec("selectionchange",!1,e))}}function Wg(t,e,a,o){switch(Sh(e)){case 2:var r=Dx;break;case 8:r=Ox;break;default:r=Fc}a=r.bind(null,e,a,t),r=void 0,!Wl||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),o?r!==void 0?t.addEventListener(e,a,{capture:!0,passive:r}):t.addEventListener(e,a,!0):r!==void 0?t.addEventListener(e,a,{passive:r}):t.addEventListener(e,a,!1)}function qc(t,e,a,o,r){var c=o;if((e&1)===0&&(e&2)===0&&o!==null)t:for(;;){if(o===null)return;var g=o.tag;if(g===3||g===4){var _=o.stateNode.containerInfo;if(_===r)break;if(g===4)for(g=o.return;g!==null;){var v=g.tag;if((v===3||v===4)&&g.stateNode.containerInfo===r)return;g=g.return}for(;_!==null;){if(g=As(_),g===null)return;if(v=g.tag,v===5||v===6||v===26||v===27){o=c=g;continue t}_=_.parentNode}}o=o.return}nd(function(){var w=c,H=Jl(a),P=[];t:{var E=Ed.get(t);if(E!==void 0){var C=Zo,tt=t;switch(t){case"keypress":if(Ko(a)===0)break t;case"keydown":case"keyup":C=e1;break;case"focusin":tt="focus",C=sr;break;case"focusout":tt="blur",C=sr;break;case"beforeblur":case"afterblur":C=sr;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=ld;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=U0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=n1;break;case Sd:case Id:case Vd:C=X0;break;case wd:C=i1;break;case"scroll":case"scrollend":C=L0;break;case"wheel":C=r1;break;case"copy":case"cut":case"paste":C=F0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=cd;break;case"toggle":case"beforetoggle":C=u1}var ot=(e&4)!==0,St=!ot&&(t==="scroll"||t==="scrollend"),S=ot?E!==null?E+"Capture":null:E;ot=[];for(var j=w,V;j!==null;){var B=j;if(V=B.stateNode,B=B.tag,B!==5&&B!==26&&B!==27||V===null||S===null||(B=An(j,S),B!=null&&ot.push(io(j,B,V))),St)break;j=j.return}0<ot.length&&(E=new C(E,tt,null,a,H),P.push({event:E,listeners:ot}))}}if((e&7)===0){t:{if(E=t==="mouseover"||t==="pointerover",C=t==="mouseout"||t==="pointerout",E&&a!==Ql&&(tt=a.relatedTarget||a.fromElement)&&(As(tt)||tt[js]))break t;if((C||E)&&(E=H.window===H?H:(E=H.ownerDocument)?E.defaultView||E.parentWindow:window,C?(tt=a.relatedTarget||a.toElement,C=w,tt=tt?As(tt):null,tt!==null&&(St=m(tt),ot=tt.tag,tt!==St||ot!==5&&ot!==27&&ot!==6)&&(tt=null)):(C=null,tt=w),C!==tt)){if(ot=ld,B="onMouseLeave",S="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(ot=cd,B="onPointerLeave",S="onPointerEnter",j="pointer"),St=C==null?E:jn(C),V=tt==null?E:jn(tt),E=new ot(B,j+"leave",C,a,H),E.target=St,E.relatedTarget=V,B=null,As(H)===w&&(ot=new ot(S,j+"enter",tt,a,H),ot.target=V,ot.relatedTarget=St,B=ot),St=B,C&&tt)e:{for(ot=cx,S=C,j=tt,V=0,B=S;B;B=ot(B))V++;B=0;for(var nt=j;nt;nt=ot(nt))B++;for(;0<V-B;)S=ot(S),V--;for(;0<B-V;)j=ot(j),B--;for(;V--;){if(S===j||j!==null&&S===j.alternate){ot=S;break e}S=ot(S),j=ot(j)}ot=null}else ot=null;C!==null&&th(P,E,C,ot,!1),tt!==null&&St!==null&&th(P,St,tt,ot,!0)}}t:{if(E=w?jn(w):window,C=E.nodeName&&E.nodeName.toLowerCase(),C==="select"||C==="input"&&E.type==="file")var kt=fd;else if(hd(E))if(_d)kt=k1;else{kt=_1;var at=f1}else C=E.nodeName,!C||C.toLowerCase()!=="input"||E.type!=="checkbox"&&E.type!=="radio"?w&&Zl(w.elementType)&&(kt=fd):kt=x1;if(kt&&(kt=kt(t,w))){bd(P,kt,a,H);break t}at&&at(t,E,w),t==="focusout"&&w&&E.type==="number"&&w.memoizedProps.value!=null&&Fl(E,"number",E.value)}switch(at=w?jn(w):window,t){case"focusin":(hd(at)||at.contentEditable==="true")&&(Ds=at,cr=w,Cn=null);break;case"focusout":Cn=cr=Ds=null;break;case"mousedown":ur=!0;break;case"contextmenu":case"mouseup":case"dragend":ur=!1,jd(P,a,H);break;case"selectionchange":if(G1)break;case"keydown":case"keyup":jd(P,a,H)}var dt;if(or)t:{switch(t){case"compositionstart":var _t="onCompositionStart";break t;case"compositionend":_t="onCompositionEnd";break t;case"compositionupdate":_t="onCompositionUpdate";break t}_t=void 0}else Cs?md(t,a)&&(_t="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(_t="onCompositionStart");_t&&(ud&&a.locale!=="ko"&&(Cs||_t!=="onCompositionStart"?_t==="onCompositionEnd"&&Cs&&(dt=od()):(Ma=H,tr="value"in Ma?Ma.value:Ma.textContent,Cs=!0)),at=Hi(w,_t),0<at.length&&(_t=new rd(_t,t,null,a,H),P.push({event:_t,listeners:at}),dt?_t.data=dt:(dt=gd(a),dt!==null&&(_t.data=dt)))),(dt=d1?m1(t,a):g1(t,a))&&(_t=Hi(w,"onBeforeInput"),0<_t.length&&(at=new rd("onBeforeInput","beforeinput",null,a,H),P.push({event:at,listeners:_t}),at.data=dt)),ox(P,t,w,a,H)}$g(P,e)})}function io(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Hi(t,e){for(var a=e+"Capture",o=[];t!==null;){var r=t,c=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||c===null||(r=An(t,a),r!=null&&o.unshift(io(t,r,c)),r=An(t,e),r!=null&&o.push(io(t,r,c))),t.tag===3)return o;t=t.return}return[]}function cx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function th(t,e,a,o,r){for(var c=e._reactName,g=[];a!==null&&a!==o;){var _=a,v=_.alternate,w=_.stateNode;if(_=_.tag,v!==null&&v===o)break;_!==5&&_!==26&&_!==27||w===null||(v=w,r?(w=An(a,c),w!=null&&g.unshift(io(a,w,v))):r||(w=An(a,c),w!=null&&g.push(io(a,w,v)))),a=a.return}g.length!==0&&t.push({event:e,listeners:g})}var ux=/\r\n?/g,px=/\u0000|\uFFFD/g;function eh(t){return(typeof t=="string"?t:""+t).replace(ux,`
`).replace(px,"")}function ah(t,e){return e=eh(e),eh(t)===e}function At(t,e,a,o,r,c){switch(a){case"children":typeof o=="string"?e==="body"||e==="textarea"&&o===""||Es(t,o):(typeof o=="number"||typeof o=="bigint")&&e!=="body"&&Es(t,""+o);break;case"className":Uo(t,"class",o);break;case"tabIndex":Uo(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Uo(t,a,o);break;case"style":ad(t,o,c);break;case"data":if(e!=="object"){Uo(t,"data",o);break}case"src":case"href":if(o===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Yo(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(e!=="input"&&At(t,e,"name",r.name,r,null),At(t,e,"formEncType",r.formEncType,r,null),At(t,e,"formMethod",r.formMethod,r,null),At(t,e,"formTarget",r.formTarget,r,null)):(At(t,e,"encType",r.encType,r,null),At(t,e,"method",r.method,r,null),At(t,e,"target",r.target,r,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Yo(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=sa);break;case"onScroll":o!=null&&ht("scroll",t);break;case"onScrollEnd":o!=null&&ht("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(l(61));if(a=o.__html,a!=null){if(r.children!=null)throw Error(l(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=Yo(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":ht("beforetoggle",t),ht("toggle",t),Bo(t,"popover",o);break;case"xlinkActuate":aa(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":aa(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":aa(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":aa(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":aa(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":aa(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":aa(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":aa(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":aa(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Bo(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=H0.get(a)||a,Bo(t,a,o))}}function Cc(t,e,a,o,r,c){switch(a){case"style":ad(t,o,c);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(l(61));if(a=o.__html,a!=null){if(r.children!=null)throw Error(l(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Es(t,o):(typeof o=="number"||typeof o=="bigint")&&Es(t,""+o);break;case"onScroll":o!=null&&ht("scroll",t);break;case"onScrollEnd":o!=null&&ht("scrollend",t);break;case"onClick":o!=null&&(t.onclick=sa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Kp.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(r=a.endsWith("Capture"),e=a.slice(2,r?a.length-7:void 0),c=t[pe]||null,c=c!=null?c[a]:null,typeof c=="function"&&t.removeEventListener(e,c,r),typeof o=="function")){typeof c!="function"&&c!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,o,r);break t}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Bo(t,a,o)}}}function se(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ht("error",t),ht("load",t);var o=!1,r=!1,c;for(c in a)if(a.hasOwnProperty(c)){var g=a[c];if(g!=null)switch(c){case"src":o=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,e));default:At(t,e,c,g,a,null)}}r&&At(t,e,"srcSet",a.srcSet,a,null),o&&At(t,e,"src",a.src,a,null);return;case"input":ht("invalid",t);var _=c=g=r=null,v=null,w=null;for(o in a)if(a.hasOwnProperty(o)){var H=a[o];if(H!=null)switch(o){case"name":r=H;break;case"type":g=H;break;case"checked":v=H;break;case"defaultChecked":w=H;break;case"value":c=H;break;case"defaultValue":_=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(l(137,e));break;default:At(t,e,o,H,a,null)}}$p(t,c,_,v,w,g,r,!1);return;case"select":ht("invalid",t),o=g=c=null;for(r in a)if(a.hasOwnProperty(r)&&(_=a[r],_!=null))switch(r){case"value":c=_;break;case"defaultValue":g=_;break;case"multiple":o=_;default:At(t,e,r,_,a,null)}e=c,a=g,t.multiple=!!o,e!=null?ws(t,!!o,e,!1):a!=null&&ws(t,!!o,a,!0);return;case"textarea":ht("invalid",t),c=r=o=null;for(g in a)if(a.hasOwnProperty(g)&&(_=a[g],_!=null))switch(g){case"value":o=_;break;case"defaultValue":r=_;break;case"children":c=_;break;case"dangerouslySetInnerHTML":if(_!=null)throw Error(l(91));break;default:At(t,e,g,_,a,null)}td(t,o,r,c);return;case"option":for(v in a)if(a.hasOwnProperty(v)&&(o=a[v],o!=null))switch(v){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:At(t,e,v,o,a,null)}return;case"dialog":ht("beforetoggle",t),ht("toggle",t),ht("cancel",t),ht("close",t);break;case"iframe":case"object":ht("load",t);break;case"video":case"audio":for(o=0;o<oo.length;o++)ht(oo[o],t);break;case"image":ht("error",t),ht("load",t);break;case"details":ht("toggle",t);break;case"embed":case"source":case"link":ht("error",t),ht("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in a)if(a.hasOwnProperty(w)&&(o=a[w],o!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,e));default:At(t,e,w,o,a,null)}return;default:if(Zl(e)){for(H in a)a.hasOwnProperty(H)&&(o=a[H],o!==void 0&&Cc(t,e,H,o,a,void 0));return}}for(_ in a)a.hasOwnProperty(_)&&(o=a[_],o!=null&&At(t,e,_,o,a,null))}function dx(t,e,a,o){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,c=null,g=null,_=null,v=null,w=null,H=null;for(C in a){var P=a[C];if(a.hasOwnProperty(C)&&P!=null)switch(C){case"checked":break;case"value":break;case"defaultValue":v=P;default:o.hasOwnProperty(C)||At(t,e,C,null,o,P)}}for(var E in o){var C=o[E];if(P=a[E],o.hasOwnProperty(E)&&(C!=null||P!=null))switch(E){case"type":c=C;break;case"name":r=C;break;case"checked":w=C;break;case"defaultChecked":H=C;break;case"value":g=C;break;case"defaultValue":_=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(l(137,e));break;default:C!==P&&At(t,e,E,C,o,P)}}Kl(t,g,_,v,w,H,c,r);return;case"select":C=g=_=E=null;for(c in a)if(v=a[c],a.hasOwnProperty(c)&&v!=null)switch(c){case"value":break;case"multiple":C=v;default:o.hasOwnProperty(c)||At(t,e,c,null,o,v)}for(r in o)if(c=o[r],v=a[r],o.hasOwnProperty(r)&&(c!=null||v!=null))switch(r){case"value":E=c;break;case"defaultValue":_=c;break;case"multiple":g=c;default:c!==v&&At(t,e,r,c,o,v)}e=_,a=g,o=C,E!=null?ws(t,!!a,E,!1):!!o!=!!a&&(e!=null?ws(t,!!a,e,!0):ws(t,!!a,a?[]:"",!1));return;case"textarea":C=E=null;for(_ in a)if(r=a[_],a.hasOwnProperty(_)&&r!=null&&!o.hasOwnProperty(_))switch(_){case"value":break;case"children":break;default:At(t,e,_,null,o,r)}for(g in o)if(r=o[g],c=a[g],o.hasOwnProperty(g)&&(r!=null||c!=null))switch(g){case"value":E=r;break;case"defaultValue":C=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(l(91));break;default:r!==c&&At(t,e,g,r,o,c)}Wp(t,E,C);return;case"option":for(var tt in a)if(E=a[tt],a.hasOwnProperty(tt)&&E!=null&&!o.hasOwnProperty(tt))switch(tt){case"selected":t.selected=!1;break;default:At(t,e,tt,null,o,E)}for(v in o)if(E=o[v],C=a[v],o.hasOwnProperty(v)&&E!==C&&(E!=null||C!=null))switch(v){case"selected":t.selected=E&&typeof E!="function"&&typeof E!="symbol";break;default:At(t,e,v,E,o,C)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ot in a)E=a[ot],a.hasOwnProperty(ot)&&E!=null&&!o.hasOwnProperty(ot)&&At(t,e,ot,null,o,E);for(w in o)if(E=o[w],C=a[w],o.hasOwnProperty(w)&&E!==C&&(E!=null||C!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(l(137,e));break;default:At(t,e,w,E,o,C)}return;default:if(Zl(e)){for(var St in a)E=a[St],a.hasOwnProperty(St)&&E!==void 0&&!o.hasOwnProperty(St)&&Cc(t,e,St,void 0,o,E);for(H in o)E=o[H],C=a[H],!o.hasOwnProperty(H)||E===C||E===void 0&&C===void 0||Cc(t,e,H,E,o,C);return}}for(var S in a)E=a[S],a.hasOwnProperty(S)&&E!=null&&!o.hasOwnProperty(S)&&At(t,e,S,null,o,E);for(P in o)E=o[P],C=a[P],!o.hasOwnProperty(P)||E===C||E==null&&C==null||At(t,e,P,E,o,C)}function sh(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function mx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var r=a[o],c=r.transferSize,g=r.initiatorType,_=r.duration;if(c&&_&&sh(g)){for(g=0,_=r.responseEnd,o+=1;o<a.length;o++){var v=a[o],w=v.startTime;if(w>_)break;var H=v.transferSize,P=v.initiatorType;H&&sh(P)&&(v=v.responseEnd,g+=H*(v<_?1:(_-w)/(v-w)))}if(--o,e+=8*(c+g)/(r.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Dc=null,Oc=null;function zi(t){return t.nodeType===9?t:t.ownerDocument}function nh(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function oh(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Rc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Hc=null;function gx(){var t=window.event;return t&&t.type==="popstate"?t===Hc?!1:(Hc=t,!0):(Hc=null,!1)}var ih=typeof setTimeout=="function"?setTimeout:void 0,hx=typeof clearTimeout=="function"?clearTimeout:void 0,lh=typeof Promise=="function"?Promise:void 0,bx=typeof queueMicrotask=="function"?queueMicrotask:typeof lh<"u"?function(t){return lh.resolve(null).then(t).catch(fx)}:ih;function fx(t){setTimeout(function(){throw t})}function La(t){return t==="head"}function rh(t,e){var a=e,o=0;do{var r=a.nextSibling;if(t.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(r),un(e);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")lo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,lo(a);for(var c=a.firstChild;c;){var g=c.nextSibling,_=c.nodeName;c[Tn]||_==="SCRIPT"||_==="STYLE"||_==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=g}}else a==="body"&&lo(t.ownerDocument.body);a=r}while(a);un(e)}function ch(t,e){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function zc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":zc(a),Yl(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function _x(t,e,a,o){for(;t.nodeType===1;){var r=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Tn])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==r.rel||t.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||t.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||t.getAttribute("title")!==(r.title==null?null:r.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(r.src==null?null:r.src)||t.getAttribute("type")!==(r.type==null?null:r.type)||t.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var c=r.name==null?null:""+r.name;if(r.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=Re(t.nextSibling),t===null)break}return null}function xx(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Re(t.nextSibling),t===null))return null;return t}function uh(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Re(t.nextSibling),t===null))return null;return t}function Lc(t){return t.data==="$?"||t.data==="$~"}function Bc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function kx(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var o=function(){e(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Re(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Uc=null;function ph(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return Re(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function dh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function mh(t,e,a){switch(e=zi(a),t){case"html":if(t=e.documentElement,!t)throw Error(l(452));return t;case"head":if(t=e.head,!t)throw Error(l(453));return t;case"body":if(t=e.body,!t)throw Error(l(454));return t;default:throw Error(l(451))}}function lo(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Yl(t)}var He=new Map,gh=new Set;function Li(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var xa=Q.d;Q.d={f:yx,r:Gx,D:vx,C:Mx,L:Tx,m:jx,X:Sx,S:Ax,M:Ix};function yx(){var t=xa.f(),e=Ei();return t||e}function Gx(t){var e=Ss(t);e!==null&&e.tag===5&&e.type==="form"?wm(e):xa.r(t)}var ln=typeof document>"u"?null:document;function hh(t,e,a){var o=ln;if(o&&typeof e=="string"&&e){var r=we(e);r='link[rel="'+t+'"][href="'+r+'"]',typeof a=="string"&&(r+='[crossorigin="'+a+'"]'),gh.has(r)||(gh.add(r),t={rel:t,crossOrigin:a,href:e},o.querySelector(r)===null&&(e=o.createElement("link"),se(e,"link",t),Jt(e),o.head.appendChild(e)))}}function vx(t){xa.D(t),hh("dns-prefetch",t,null)}function Mx(t,e){xa.C(t,e),hh("preconnect",t,e)}function Tx(t,e,a){xa.L(t,e,a);var o=ln;if(o&&t&&e){var r='link[rel="preload"][as="'+we(e)+'"]';e==="image"&&a&&a.imageSrcSet?(r+='[imagesrcset="'+we(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(r+='[imagesizes="'+we(a.imageSizes)+'"]')):r+='[href="'+we(t)+'"]';var c=r;switch(e){case"style":c=rn(t);break;case"script":c=cn(t)}He.has(c)||(t=k({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),He.set(c,t),o.querySelector(r)!==null||e==="style"&&o.querySelector(ro(c))||e==="script"&&o.querySelector(co(c))||(e=o.createElement("link"),se(e,"link",t),Jt(e),o.head.appendChild(e)))}}function jx(t,e){xa.m(t,e);var a=ln;if(a&&t){var o=e&&typeof e.as=="string"?e.as:"script",r='link[rel="modulepreload"][as="'+we(o)+'"][href="'+we(t)+'"]',c=r;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=cn(t)}if(!He.has(c)&&(t=k({rel:"modulepreload",href:t},e),He.set(c,t),a.querySelector(r)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(co(c)))return}o=a.createElement("link"),se(o,"link",t),Jt(o),a.head.appendChild(o)}}}function Ax(t,e,a){xa.S(t,e,a);var o=ln;if(o&&t){var r=Is(o).hoistableStyles,c=rn(t);e=e||"default";var g=r.get(c);if(!g){var _={loading:0,preload:null};if(g=o.querySelector(ro(c)))_.loading=5;else{t=k({rel:"stylesheet",href:t,"data-precedence":e},a),(a=He.get(c))&&Pc(t,a);var v=g=o.createElement("link");Jt(v),se(v,"link",t),v._p=new Promise(function(w,H){v.onload=w,v.onerror=H}),v.addEventListener("load",function(){_.loading|=1}),v.addEventListener("error",function(){_.loading|=2}),_.loading|=4,Bi(g,e,o)}g={type:"stylesheet",instance:g,count:1,state:_},r.set(c,g)}}}function Sx(t,e){xa.X(t,e);var a=ln;if(a&&t){var o=Is(a).hoistableScripts,r=cn(t),c=o.get(r);c||(c=a.querySelector(co(r)),c||(t=k({src:t,async:!0},e),(e=He.get(r))&&Yc(t,e),c=a.createElement("script"),Jt(c),se(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},o.set(r,c))}}function Ix(t,e){xa.M(t,e);var a=ln;if(a&&t){var o=Is(a).hoistableScripts,r=cn(t),c=o.get(r);c||(c=a.querySelector(co(r)),c||(t=k({src:t,async:!0,type:"module"},e),(e=He.get(r))&&Yc(t,e),c=a.createElement("script"),Jt(c),se(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},o.set(r,c))}}function bh(t,e,a,o){var r=(r=st.current)?Li(r):null;if(!r)throw Error(l(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=rn(a.href),a=Is(r).hoistableStyles,o=a.get(e),o||(o={type:"style",instance:null,count:0,state:null},a.set(e,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=rn(a.href);var c=Is(r).hoistableStyles,g=c.get(t);if(g||(r=r.ownerDocument||r,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,g),(c=r.querySelector(ro(t)))&&!c._p&&(g.instance=c,g.state.loading=5),He.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},He.set(t,a),c||Vx(r,t,a,g.state))),e&&o===null)throw Error(l(528,""));return g}if(e&&o!==null)throw Error(l(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=cn(a),a=Is(r).hoistableScripts,o=a.get(e),o||(o={type:"script",instance:null,count:0,state:null},a.set(e,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,t))}}function rn(t){return'href="'+we(t)+'"'}function ro(t){return'link[rel="stylesheet"]['+t+"]"}function fh(t){return k({},t,{"data-precedence":t.precedence,precedence:null})}function Vx(t,e,a,o){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?o.loading=1:(e=t.createElement("link"),o.preload=e,e.addEventListener("load",function(){return o.loading|=1}),e.addEventListener("error",function(){return o.loading|=2}),se(e,"link",a),Jt(e),t.head.appendChild(e))}function cn(t){return'[src="'+we(t)+'"]'}function co(t){return"script[async]"+t}function _h(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var o=t.querySelector('style[data-href~="'+we(a.href)+'"]');if(o)return e.instance=o,Jt(o),o;var r=k({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),Jt(o),se(o,"style",r),Bi(o,a.precedence,t),e.instance=o;case"stylesheet":r=rn(a.href);var c=t.querySelector(ro(r));if(c)return e.state.loading|=4,e.instance=c,Jt(c),c;o=fh(a),(r=He.get(r))&&Pc(o,r),c=(t.ownerDocument||t).createElement("link"),Jt(c);var g=c;return g._p=new Promise(function(_,v){g.onload=_,g.onerror=v}),se(c,"link",o),e.state.loading|=4,Bi(c,a.precedence,t),e.instance=c;case"script":return c=cn(a.src),(r=t.querySelector(co(c)))?(e.instance=r,Jt(r),r):(o=a,(r=He.get(c))&&(o=k({},a),Yc(o,r)),t=t.ownerDocument||t,r=t.createElement("script"),Jt(r),se(r,"link",o),t.head.appendChild(r),e.instance=r);case"void":return null;default:throw Error(l(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(o=e.instance,e.state.loading|=4,Bi(o,a.precedence,t));return e.instance}function Bi(t,e,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=o.length?o[o.length-1]:null,c=r,g=0;g<o.length;g++){var _=o[g];if(_.dataset.precedence===e)c=_;else if(c!==r)break}c?c.parentNode.insertBefore(t,c.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function Pc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Yc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Ui=null;function xh(t,e,a){if(Ui===null){var o=new Map,r=Ui=new Map;r.set(a,o)}else r=Ui,o=r.get(a),o||(o=new Map,r.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),r=0;r<a.length;r++){var c=a[r];if(!(c[Tn]||c[Wt]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var g=c.getAttribute(e)||"";g=t+g;var _=o.get(g);_?_.push(c):o.set(g,[c])}}return o}function kh(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function wx(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function yh(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Ex(t,e,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var r=rn(o.href),c=e.querySelector(ro(r));if(c){e=c._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Pi.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=c,Jt(c);return}c=e.ownerDocument||e,o=fh(o),(r=He.get(r))&&Pc(o,r),c=c.createElement("link"),Jt(c);var g=c;g._p=new Promise(function(_,v){g.onload=_,g.onerror=v}),se(c,"link",o),a.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Pi.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var Xc=0;function Nx(t,e){return t.stylesheets&&t.count===0&&Xi(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&Xi(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+e);0<t.imgBytes&&Xc===0&&(Xc=62500*mx());var r=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Xi(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>Xc?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(r)}}:null}function Pi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xi(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Yi=null;function Xi(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Yi=new Map,e.forEach(qx,t),Yi=null,Pi.call(t))}function qx(t,e){if(!(e.state.loading&4)){var a=Yi.get(t);if(a)var o=a.get(null);else{a=new Map,Yi.set(t,a);for(var r=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<r.length;c++){var g=r[c];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),o=g)}o&&a.set(null,o)}r=e.instance,g=r.getAttribute("data-precedence"),c=a.get(g)||o,c===o&&a.set(null,r),a.set(g,r),this.count++,o=Pi.bind(this),r.addEventListener("load",o),r.addEventListener("error",o),c?c.parentNode.insertBefore(r,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(r,t.firstChild)),e.state.loading|=4}}var uo={$$typeof:R,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function Cx(t,e,a,o,r,c,g,_,v){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ll(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ll(0),this.hiddenUpdates=Ll(null),this.identifierPrefix=o,this.onUncaughtError=r,this.onCaughtError=c,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function Gh(t,e,a,o,r,c,g,_,v,w,H,P){return t=new Cx(t,e,a,g,v,w,H,P,_),e=1,c===!0&&(e|=24),c=Ge(3,null,null,e),t.current=c,c.stateNode=t,e=Tr(),e.refCount++,t.pooledCache=e,e.refCount++,c.memoizedState={element:o,isDehydrated:a,cache:e},Ir(c),t}function vh(t){return t?(t=Hs,t):Hs}function Mh(t,e,a,o,r,c){r=vh(r),o.context===null?o.context=r:o.pendingContext=r,o=Va(e),o.payload={element:a},c=c===void 0?null:c,c!==null&&(o.callback=c),a=wa(t,o,e),a!==null&&(fe(a,t,e),Bn(a,t,e))}function Th(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function Kc(t,e){Th(t,e),(t=t.alternate)&&Th(t,e)}function jh(t){if(t.tag===13||t.tag===31){var e=ls(t,67108864);e!==null&&fe(e,t,67108864),Kc(t,67108864)}}function Ah(t){if(t.tag===13||t.tag===31){var e=Ae();e=Bl(e);var a=ls(t,e);a!==null&&fe(a,t,e),Kc(t,e)}}var Ki=!0;function Dx(t,e,a,o){var r=D.T;D.T=null;var c=Q.p;try{Q.p=2,Fc(t,e,a,o)}finally{Q.p=c,D.T=r}}function Ox(t,e,a,o){var r=D.T;D.T=null;var c=Q.p;try{Q.p=8,Fc(t,e,a,o)}finally{Q.p=c,D.T=r}}function Fc(t,e,a,o){if(Ki){var r=Zc(o);if(r===null)qc(t,e,o,Fi,a),Ih(t,o);else if(Hx(r,t,e,a,o))o.stopPropagation();else if(Ih(t,o),e&4&&-1<Rx.indexOf(t)){for(;r!==null;){var c=Ss(r);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var g=as(c.pendingLanes);if(g!==0){var _=c;for(_.pendingLanes|=2,_.entangledLanes|=2;g;){var v=1<<31-ke(g);_.entanglements[1]|=v,g&=~v}Je(c),(Gt&6)===0&&(Vi=_e()+500,no(0))}}break;case 31:case 13:_=ls(c,2),_!==null&&fe(_,c,2),Ei(),Kc(c,2)}if(c=Zc(o),c===null&&qc(t,e,o,Fi,a),c===r)break;r=c}r!==null&&o.stopPropagation()}else qc(t,e,o,null,a)}}function Zc(t){return t=Jl(t),Qc(t)}var Fi=null;function Qc(t){if(Fi=null,t=As(t),t!==null){var e=m(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=d(e),t!==null)return t;t=null}else if(a===31){if(t=h(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Fi=t,null}function Sh(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(v0()){case Dp:return 2;case Op:return 8;case Oo:case M0:return 32;case Rp:return 268435456;default:return 32}default:return 32}}var Jc=!1,Ba=null,Ua=null,Pa=null,po=new Map,mo=new Map,Ya=[],Rx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ih(t,e){switch(t){case"focusin":case"focusout":Ba=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":Pa=null;break;case"pointerover":case"pointerout":po.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":mo.delete(e.pointerId)}}function go(t,e,a,o,r,c){return t===null||t.nativeEvent!==c?(t={blockedOn:e,domEventName:a,eventSystemFlags:o,nativeEvent:c,targetContainers:[r]},e!==null&&(e=Ss(e),e!==null&&jh(e)),t):(t.eventSystemFlags|=o,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Hx(t,e,a,o,r){switch(e){case"focusin":return Ba=go(Ba,t,e,a,o,r),!0;case"dragenter":return Ua=go(Ua,t,e,a,o,r),!0;case"mouseover":return Pa=go(Pa,t,e,a,o,r),!0;case"pointerover":var c=r.pointerId;return po.set(c,go(po.get(c)||null,t,e,a,o,r)),!0;case"gotpointercapture":return c=r.pointerId,mo.set(c,go(mo.get(c)||null,t,e,a,o,r)),!0}return!1}function Vh(t){var e=As(t.target);if(e!==null){var a=m(e);if(a!==null){if(e=a.tag,e===13){if(e=d(a),e!==null){t.blockedOn=e,Pp(t.priority,function(){Ah(a)});return}}else if(e===31){if(e=h(a),e!==null){t.blockedOn=e,Pp(t.priority,function(){Ah(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zi(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=Zc(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Ql=o,a.target.dispatchEvent(o),Ql=null}else return e=Ss(a),e!==null&&jh(e),t.blockedOn=a,!1;e.shift()}return!0}function wh(t,e,a){Zi(t)&&a.delete(e)}function zx(){Jc=!1,Ba!==null&&Zi(Ba)&&(Ba=null),Ua!==null&&Zi(Ua)&&(Ua=null),Pa!==null&&Zi(Pa)&&(Pa=null),po.forEach(wh),mo.forEach(wh)}function Qi(t,e){t.blockedOn===e&&(t.blockedOn=null,Jc||(Jc=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,zx)))}var Ji=null;function Eh(t){Ji!==t&&(Ji=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Ji===t&&(Ji=null);for(var e=0;e<t.length;e+=3){var a=t[e],o=t[e+1],r=t[e+2];if(typeof o!="function"){if(Qc(o||a)===null)continue;break}var c=Ss(a);c!==null&&(t.splice(e,3),e-=3,Zr(c,{pending:!0,data:r,method:a.method,action:o},o,r))}}))}function un(t){function e(v){return Qi(v,t)}Ba!==null&&Qi(Ba,t),Ua!==null&&Qi(Ua,t),Pa!==null&&Qi(Pa,t),po.forEach(e),mo.forEach(e);for(var a=0;a<Ya.length;a++){var o=Ya[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ya.length&&(a=Ya[0],a.blockedOn===null);)Vh(a),a.blockedOn===null&&Ya.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var r=a[o],c=a[o+1],g=r[pe]||null;if(typeof c=="function")g||Eh(a);else if(g){var _=null;if(c&&c.hasAttribute("formAction")){if(r=c,g=c[pe]||null)_=g.formAction;else if(Qc(r)!==null)continue}else _=g.action;typeof _=="function"?a[o+1]=_:(a.splice(o,3),o-=3),Eh(a)}}}function Nh(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(g){return r=g})},focusReset:"manual",scroll:"manual"})}function e(){r!==null&&(r(),r=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,r=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),r!==null&&(r(),r=null)}}}function $c(t){this._internalRoot=t}$i.prototype.render=$c.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(l(409));var a=e.current,o=Ae();Mh(a,o,t,e,null,null)},$i.prototype.unmount=$c.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Mh(t.current,2,null,t,null,null),Ei(),e[js]=null}};function $i(t){this._internalRoot=t}$i.prototype.unstable_scheduleHydration=function(t){if(t){var e=Up();t={blockedOn:null,target:t,priority:e};for(var a=0;a<Ya.length&&e!==0&&e<Ya[a].priority;a++);Ya.splice(a,0,t),a===0&&Vh(t)}};var qh=n.version;if(qh!=="19.2.6")throw Error(l(527,qh,"19.2.6"));Q.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(l(188)):(t=Object.keys(t).join(","),Error(l(268,t)));return t=b(e),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var Lx={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wi.isDisabled&&Wi.supportsFiber)try{Gn=Wi.inject(Lx),xe=Wi}catch{}}return bo.createRoot=function(t,e){if(!p(t))throw Error(l(299));var a=!1,o="",r=Lm,c=Bm,g=Um;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(o=e.identifierPrefix),e.onUncaughtError!==void 0&&(r=e.onUncaughtError),e.onCaughtError!==void 0&&(c=e.onCaughtError),e.onRecoverableError!==void 0&&(g=e.onRecoverableError)),e=Gh(t,1,!1,null,null,a,o,null,r,c,g,Nh),t[js]=e.current,Nc(t),new $c(e)},bo.hydrateRoot=function(t,e,a){if(!p(t))throw Error(l(299));var o=!1,r="",c=Lm,g=Bm,_=Um,v=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(r=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(_=a.onRecoverableError),a.formState!==void 0&&(v=a.formState)),e=Gh(t,1,!0,e,a??null,o,r,v,c,g,_,Nh),e.context=vh(null),a=e.current,o=Ae(),o=Bl(o),r=Va(o),r.callback=null,wa(a,r,o),a=o,e.current.lanes=a,Mn(e,a),Je(e),t[js]=e.current,Nc(t),new $i(e)},bo.version="19.2.6",bo}var Ph;function Jx(){if(Ph)return eu.exports;Ph=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(n){console.error(n)}}return s(),eu.exports=Qx(),eu.exports}var $x=Jx();/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),tk=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,i,l)=>l?l.toUpperCase():i.toLowerCase()),Yh=s=>{const n=tk(s);return n.charAt(0).toUpperCase()+n.slice(1)},Tf=(...s)=>s.filter((n,i,l)=>!!n&&n.trim()!==""&&l.indexOf(n)===i).join(" ").trim(),ek=s=>{for(const n in s)if(n.startsWith("aria-")||n==="role"||n==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ak={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sk=Y.forwardRef(({color:s="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:l,className:p="",children:m,iconNode:d,...h},f)=>Y.createElement("svg",{ref:f,...ak,width:n,height:n,stroke:s,strokeWidth:l?Number(i)*24/Number(n):i,className:Tf("lucide",p),...!m&&!ek(h)&&{"aria-hidden":"true"},...h},[...d.map(([b,x])=>Y.createElement(b,x)),...Array.isArray(m)?m:[m]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=(s,n)=>{const i=Y.forwardRef(({className:l,...p},m)=>Y.createElement(sk,{ref:m,iconNode:n,className:Tf(`lucide-${Wx(Yh(s))}`,`lucide-${s}`,l),...p}));return i.displayName=Yh(s),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nk=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],Su=bt("archive",nk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ok=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Iu=bt("book-open",ok);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ik=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],ou=bt("calculator",ik);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lk=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],rk=bt("calendar",lk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ck=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],uk=bt("chevron-down",ck);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pk=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],_l=bt("circle-check",pk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dk=[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],mk=bt("circle-play",dk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gk=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],hk=bt("code",gk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bk=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Vu=bt("copy",bk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fk=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],_k=bt("credit-card",fk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xk=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],jf=bt("download",xk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kk=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Za=bt("external-link",kk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yk=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Gk=bt("eye",yk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vk=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Mk=bt("file-text",vk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tk=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],Xh=bt("flask-conical",Tk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jk=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],Kh=bt("funnel",jk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ak=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],wu=bt("house",Ak);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sk=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Af=bt("info",Sk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ik=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],Vk=bt("lightbulb",Ik);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wk=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],Ek=bt("link",wk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nk=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],qk=bt("message-circle",Nk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ck=[["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",key:"39pd36"}],["rect",{width:"8",height:"4",x:"10",y:"6",rx:"1",key:"aywv1n"}]],Sf=bt("newspaper",Ck);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dk=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],If=bt("palette",Dk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ok=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]],fo=bt("pin",Ok);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rk=[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]],Hk=bt("scale",Rk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zk=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Eu=bt("search",zk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lk=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],Bk=bt("settings-2",Lk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uk=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],Pk=bt("shield-alert",Uk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yk=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Xk=bt("shield-check",Yk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kk=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],Go=bt("shopping-bag",Kk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fk=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Zk=bt("sparkles",Fk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qk=[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]],Jk=bt("table",Qk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $k=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Wk=bt("triangle-alert",$k);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],xl=bt("users",t2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Fh=bt("x",e2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],ll=bt("youtube",a2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],n2=bt("zap",s2);/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const iu=[{name:"Inicio",path:"/",key:"nav.inicio"},{name:"Novedades",path:"/novedades",key:"nav.novedades"},{name:"Servicios",path:"/servicios",key:"nav.servicios"},{name:"Evo",path:"/evo",key:"nav.evo"},{name:"Otros códigos",path:"/otros",key:"nav.otros"},{name:"Guía",path:"/guia",key:"nav.guia"},{name:"Tutoriales",path:"/tutoriales",key:"nav.tutoriales"},{name:"Descargas",path:"/descargas",key:"nav.descargas"}],Fa=[{id:"a",name:"Cibernético",shortName:"CYBER",icon:"Cpu",image:"https://github.com/luqueSmith/MGG/blob/main/img/cyber.png?raw=true"},{id:"b",name:"Zombi",shortName:"ZOMBI",icon:"Skull",image:"https://github.com/luqueSmith/MGG/blob/main/img/necro.png?raw=true"},{id:"c",name:"Guerrero",shortName:"Sword",icon:"Sword",image:"https://github.com/luqueSmith/MGG/blob/main/img/sable.png?raw=true"},{id:"d",name:"Bestia",shortName:"ZOOMORFO",icon:"PawPrint",image:"https://github.com/luqueSmith/MGG/blob/main/img/zomorfo.png?raw=true"},{id:"e",name:"Galáctico",shortName:"GALAXY",icon:"Star",image:"https://github.com/luqueSmith/MGG/blob/main/img/galactico.png?raw=true"},{id:"f",name:"Mítico",shortName:"MYTHIC",icon:"FlaskConical",image:"https://github.com/luqueSmith/MGG/blob/main/img/mitico.png?raw=true"}],_o={a:["#38bdf8","#2563eb"],b:["#a855f7","#6d28d9"],c:["#f59e0b","#d97706"],d:["#22c55e","#15803d"],e:["#06b6d4","#0f766e"],f:["#ec4899","#be185d"],n:["#64748b","#334155"]},lu=[{id:"offer_1",nombre:"54 Hornos 1M de Oro",nombreEn:"54 Furnaces 1M Gold",precio:37,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/1MdeOro.png?raw=true",descripcion:"Oferta relámpago: pack de 54 hornos con 1 millón de oro directo.",descripcionEn:"Flash offer: pack of 54 furnaces with 1 million gold direct.",features:["Entrega prioritaria","Ahorro del 20%","Soporte exclusivo"],featuresEn:["Priority delivery","20% Savings","Exclusive support"],categoria:"OFFER"},{id:"offer_2",nombre:"54 Hornos 2M de Oro",nombreEn:"54 Furnaces 2M Gold",precio:48,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/2MdeOro.png?raw=true",descripcion:"Pack industrial para jugadores de alto nivel con 2 millones de oro.",descripcionEn:"Industrial pack for high-level players with 2 million gold.",features:["Capacidad máxima","Optimización de recursos","Bonus de velocidad"],featuresEn:["Maximum capacity","Resource optimization","Speed bonus"],categoria:"OFFER"},{id:"offer_3",nombre:"54 Hornos 3M de Oro",nombreEn:"54 Furnaces 3M Gold",precio:59,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/3MdeOro.png?raw=true",descripcion:"La máxima potencia disponible en el mercado actual.",descripcionEn:"The maximum power available in the current market.",features:["Máximo beneficio","Inyección instantánea","Certificado Elite"],featuresEn:["Maximum benefit","Instant injection","Elite certificate"],categoria:"OFFER"},{id:"main_1",nombre:"Horno de Oro",nombreEn:"Gold Furnace",precio:7,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/Hornos%20de%20oro.png?raw=true",descripcion:"Aceleración masiva de producción de oro.",descripcionEn:"Massive acceleration of gold production.",features:["Entrega en menos de 10 min","Soporte 24/7","Proceso guiado"],featuresEn:["Delivery in < 10 min","24/7 Support","Guided process"],categoria:"MAIN"},{id:"main_2",nombre:"Mutante",nombreEn:"Mutant",precio:2,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/mutante.png?raw=true",descripcion:"Obtención de mutantes raros según disponibilidad.",descripcionEn:"Get rare mutants depending on availability.",features:["Selección a elegir","Stats máximos","Entrega rápida"],featuresEn:["Custom selection","Max stats","Fast delivery"],categoria:"MAIN"},{id:"main_3",nombre:"Orbes Basic 6 x 10",nombreEn:"Basic Orbs 6 x 10",precio:1,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/bsic-orb6.png?raw=true",descripcion:"Pack de orbes básicos para fortalecer a tu equipo.",descripcionEn:"Basic orb pack to strengthen your team.",features:["Stock ilimitado","Precio promocional","Ideal para nuevos"],featuresEn:["Unlimited stock","Promotional price","Ideal for beginners"],categoria:"MAIN"},{id:"main_4",nombre:"1M de Oro Directo",nombreEn:"1M Direct Gold",precio:35,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/1MOro.png?raw=true",descripcion:"Paquete de moneda premium gestionado con verificación.",descripcionEn:"Premium currency package managed with verification.",features:["Proceso guiado","Entrega coordinada","Soporte manual"],featuresEn:["Guided process","Coordinated delivery","Manual support"],categoria:"MAIN"},{id:"main_5",nombre:"ORB Nivel 7 Elite",nombreEn:"ORB Level 7 Elite",precio:6,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/obrNVL7.png?raw=true",descripcion:"Orbes de alto nivel para máximo rendimiento.",descripcionEn:"High-level orbs for maximum performance.",features:["Efectos críticos","Rareza extrema","Compatibilidad total"],featuresEn:["Critical effects","Extreme rarity","Total compatibility"],categoria:"MAIN"},{id:"main_6",nombre:"Mutante Bug Platino",nombreEn:"Platinum Bug Mutant",precio:6,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/bf8515d2-211a-411c-a1d9-da10c59ff4dd.png?raw=true",descripcion:"Mutante con estética platino y habilidades especiales.",descripcionEn:"Mutant with platinum aesthetics and special abilities.",features:["Visual único","Habilidades especiales","Edición 2026"],featuresEn:["Unique visual","Special skills","2026 Edition"],categoria:"MAIN"},{id:"main_7",nombre:"100k Tarros XP",nombreEn:"100k XP Jars",precio:15,imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRWQsH6i8OPIj8DtvkxDggsiG4FfvRNj4zkA&s",descripcion:"Nivelación rápida para tu ejército de gladiadores.",descripcionEn:"Fast leveling for your gladiator army.",features:["Sube a nivel alto","Ahorro de tiempo","Fácil aplicación"],featuresEn:["Level up high","Time saving","Easy application"],categoria:"MAIN"},{id:"main_8",nombre:"100k Fichas JackPot",nombreEn:"100k Jackpot Tokens",precio:15,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/fichasjacpot.png?raw=true",descripcion:"Pack masivo de fichas para eventos y ruletas.",descripcionEn:"Massive token pack for events and roulettes.",features:["Alta recompensa","Giro automático","Uso flexible"],featuresEn:["High reward","Auto spin","Flexible use"],categoria:"MAIN"},{id:"main_9",nombre:"Expansión Laboratorio",nombreEn:"Laboratory Expansion",precio:4,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/laboratorio.png?raw=true",descripcion:"Desbloquea slots y mejoras del laboratorio.",descripcionEn:"Unlock laboratory slots and improvements.",features:["Más slots","Mejora visual","Multi-breeding"],featuresEn:["More slots","Visual improvement","Multi-breeding"],categoria:"MAIN"},{id:"main_10",nombre:"Orbe Velocidad Nivel 5",nombreEn:"Level 5 Speed Orb",precio:2,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/orbelvl5.png?raw=true",descripcion:"Potenciador de velocidad para mejorar turnos.",descripcionEn:"Speed booster to improve turns.",features:["Primer golpe","Agilidad +50%","Recarga rápida"],featuresEn:["First strike","Agility +50%","Fast recharge"],categoria:"MAIN"},{id:"main_11",nombre:"ORB Nivel ATK 6 x 10",nombreEn:"ORB ATK Level 6 x 10",precio:6,imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkvqT-WxlpjpLTxcrwKAUQmGTTv6vtrVHxkA&s",descripcion:"Pack ofensivo para maximizar DPS, Te entrego 10 orbes del paquete.",descripcionEn:"Offensive pack to maximize DPS, I deliver 10 orbs from the package.",features:["Daño puro","Críticos frecuentes","Efecto sangrado"],featuresEn:["Pure damage","Frequent crits","Bleeding effect"],categoria:"MAIN"},{id:"main_12",nombre:"BIG BOSS",nombreEn:"BIG BOSS",precio:10,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/bigboss.png?raw=true",descripcion:"Te consigo a BigBoss en tu cuenta.",descripcionEn:"I get BigBoss in your account.",features:["Resistencia temporal","Fuerza X2","Drop mejorado"],featuresEn:["Temporary resistance","2X Strength","Improved drop"],categoria:"MAIN"},{id:"other_1",nombre:"Doxeo para +51",nombreEn:"Doxxing for +51",precio:5,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/doxeo.png?raw=true",descripcion:"Saco informacion como DNI, Arbol Familiar antencedentes y etc con el numero o nombre para Peru.",descripcionEn:"I extract information like ID, Family Tree, records, etc. with number or name for Peru.",features:["Fuentes públicas","Reporte PDF","Enfoque de privacidad"],featuresEn:["Public sources","PDF Report","Privacy focused"],categoria:"OTHER"},{id:"other_2",nombre:"Desarrollo Web Next-Gen",nombreEn:"Next-Gen Web Development",precio:40,imagen:"https://www.freecodecamp.org/news/content/images/2019/09/lua_script.jpg",descripcion:"Creación de portafolios, tiendas o landing pages y etc, solo 40 soles por una web alojada en GitHub, Si te interesa una web con dominio .com dale en ver mas..",descripcionEn:"Creation of portfolios, stores or landing pages etc, only 40 soles for a website hosted on GitHub. If you are interested in a website with a .com domain click see more..",features:["UI/UX único","Optimización SEO","Host incluido","Entrega profesional"],featuresEn:["Unique UI/UX","SEO Optimization","Host included","Professional delivery"],categoria:"OTHER",saberMas:"https://webcraft-ux.github.io/webcraft/"},{id:"other_3",nombre:"Scripts Custom MGG",nombreEn:"Custom MGG Scripts",precio:15,imagen:"https://callcenters.by/images/asterisk/lua%20plugin.jpg",descripcion:"Automatizaciones personalizadas para productividad.",descripcionEn:"Custom automations for productivity.",features:["Auto-farm","Logs de actividades","Configuración guiada","Soporte"],featuresEn:["Auto-farm","Activity logs","Guided configuration","Support"],categoria:"OTHER"},{id:"other_4",nombre:"ChatGPT Premium",nombreEn:"ChatGPT Premium",precio:8,imagen:"https://spanish.entrepreneur.com/wp-content/uploads/sites/3/2024/12/1733494589-openai-chatgpt-premium-subscription-1224-g2186754261.jpg",descripcion:"Acceso premium para chatGPT barato y con descuento por cantidad.",descripcionEn:"Premium access for cheap ChatGPT with quantity discount.",features:["Asistencia rápida","Uso personal","Configuración guiada","Soporte base"],featuresEn:["Fast assistance","Personal use","Guided configuration","Basic support"],categoria:"OTHER"}],Zh={Cajas:`Box Cyber	mystery_cyber	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_cyber.png
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
Orbe Respuesta +20%	orb_basic_retaliate_06	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_retaliate_06.png`},Vf="51906328464",op="https://chat.whatsapp.com/DALbalnNe9N6bD4W1Wp0HM?mode=gi_t",o2=[0,50,60,65,70,75,80,85,90],wf=[{id:"pe",name:"Perú",currency:"PEN",symbol:"S/",rate:1,exchangeRate:1,flag:"🇵🇪"},{id:"mx",name:"México",currency:"MXN",symbol:"$",rate:1,exchangeRate:5.07,flag:"🇲🇽"},{id:"es",name:"España",currency:"EUR",symbol:"€",rate:1,exchangeRate:.25,flag:"🇪🇸"},{id:"cl",name:"Chile",currency:"CLP",symbol:"$",rate:1,exchangeRate:262.23,flag:"🇨🇱"},{id:"ar",name:"Argentina",currency:"ARS",symbol:"$",rate:1,exchangeRate:408.14,flag:"🇦🇷"},{id:"ve",name:"Venezuela",currency:"VES",symbol:"Bs",rate:1,exchangeRate:150.82,flag:"🇻🇪"},{id:"co",name:"Colombia",currency:"COP",symbol:"$",rate:1,exchangeRate:1110.59,flag:"🇨🇴"},{id:"bo",name:"Bolivia",currency:"BOB",symbol:"Bs",rate:1,exchangeRate:2.02,flag:"🇧🇴"}],i2=[{name:"Western Union",logo:"https://play-lh.googleusercontent.com/2O6TfOnCMQ8aWdhcME3CwHK_od33WPBw02ZpG_lpvnwRPHfCKBlmCeaLJ_tL8oqchBg",info:"Global money transfer. Available at physical agents worldwide.",infoEs:"Envío de dinero global. Disponible en agentes físicos."},{name:"Binance",logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe9rjRtIJJM5o6xP2LqfQFFcWejwFgRA1rag&s",info:"Direct deposits via USDT (Tron Network TRC20). Fast & Secure.",infoEs:"Depósitos directos vía USDT (Red Tron TRC20)."},{name:"PayPal",logo:"https://play-lh.googleusercontent.com/iQ8f5plIFy9rrY46Q2TNRwq_8nCvh9LZVwytqMBpOEcfnIU3vTkICQ6L1-RInWS93oQg",info:"Secure international payment with card or balance.",infoEs:"Pago internacional seguro con tarjeta o saldo."},{name:"Yape",logo:"https://play-lh.googleusercontent.com/y5S3ZIz-ohg3FirlISnk3ca2yQ6cd825OpA0YK9qklc5W8MLSe0NEIEqoV-pZDvO0A8",info:"Exclusive for PERU (PEN). Immediate transfer.",infoEs:"Exclusivo para PERÚ (Soles). Transferencia inmediata."},{name:"Airtm",logo:"https://s3-eu-west-1.amazonaws.com/tpd/logos/5d6d32510d8627000132ad10/0x0.png",info:"Digital wallet recommended for Latin America.",infoEs:"Billetera digital recomendada para Latinoamérica."}],Qh=["CH","LU","DK","NO","IS","US","DE","SG","IE","AU","CA","GB","ES","IT","KR","IL","CL","UY"],l2={"4.0":["CH","LU","DK","NO","IS"],"3.0":["US","DE","SG","IE","AU","CA","GB"],"2.0":["IT","KR","IL","UY"],"1.5":["BR","FR","JP"]},Ef=`A00-C0R3-C0NTR0L aa_99
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
`,ip=Y.createContext({});function lp(s){const n=Y.useRef(null);return n.current===null&&(n.current=s()),n.current}const r2=typeof window<"u",Nf=r2?Y.useLayoutEffect:Y.useEffect,Vl=Y.createContext(null);function rp(s,n){s.indexOf(n)===-1&&s.push(n)}function kl(s,n){const i=s.indexOf(n);i>-1&&s.splice(i,1)}const ea=(s,n,i)=>i>n?n:i<s?s:i;let cp=()=>{};const Ja={},qf=s=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(s),Cf=s=>typeof s=="object"&&s!==null,Df=s=>/^0[^.\s]+$/u.test(s);function Of(s){let n;return()=>(n===void 0&&(n=s()),n)}const Le=s=>s,wo=(...s)=>s.reduce((n,i)=>l=>i(n(l))),Ao=(s,n,i)=>{const l=n-s;return l?(i-s)/l:1};class up{constructor(){this.subscriptions=[]}add(n){return rp(this.subscriptions,n),()=>kl(this.subscriptions,n)}notify(n,i,l){const p=this.subscriptions.length;if(p)if(p===1)this.subscriptions[0](n,i,l);else for(let m=0;m<p;m++){const d=this.subscriptions[m];d&&d(n,i,l)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Se=s=>s*1e3,ze=s=>s/1e3,Rf=(s,n)=>n?s*(1e3/n):0,Hf=(s,n,i)=>(((1-3*i+3*n)*s+(3*i-6*n))*s+3*n)*s,c2=1e-7,u2=12;function p2(s,n,i,l,p){let m,d,h=0;do d=n+(i-n)/2,m=Hf(d,l,p)-s,m>0?i=d:n=d;while(Math.abs(m)>c2&&++h<u2);return d}function Eo(s,n,i,l){if(s===n&&i===l)return Le;const p=m=>p2(m,0,1,s,i);return m=>m===0||m===1?m:Hf(p(m),n,l)}const zf=s=>n=>n<=.5?s(2*n)/2:(2-s(2*(1-n)))/2,Lf=s=>n=>1-s(1-n),Bf=Eo(.33,1.53,.69,.99),pp=Lf(Bf),Uf=zf(pp),Pf=s=>s>=1?1:(s*=2)<1?.5*pp(s):.5*(2-Math.pow(2,-10*(s-1))),dp=s=>1-Math.sin(Math.acos(s)),Yf=Lf(dp),Xf=zf(dp),d2=Eo(.42,0,1,1),m2=Eo(0,0,.58,1),Kf=Eo(.42,0,.58,1),g2=s=>Array.isArray(s)&&typeof s[0]!="number",Ff=s=>Array.isArray(s)&&typeof s[0]=="number",h2={linear:Le,easeIn:d2,easeInOut:Kf,easeOut:m2,circIn:dp,circInOut:Xf,circOut:Yf,backIn:pp,backInOut:Uf,backOut:Bf,anticipate:Pf},b2=s=>typeof s=="string",Jh=s=>{if(Ff(s)){cp(s.length===4);const[n,i,l,p]=s;return Eo(n,i,l,p)}else if(b2(s))return h2[s];return s},tl=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function f2(s,n){let i=new Set,l=new Set,p=!1,m=!1;const d=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function f(x){d.has(x)&&(b.schedule(x),s()),x(h)}const b={schedule:(x,k=!1,y=!1)=>{const M=y&&p?i:l;return k&&d.add(x),M.add(x),x},cancel:x=>{l.delete(x),d.delete(x)},process:x=>{if(h=x,p){m=!0;return}p=!0;const k=i;i=l,l=k,i.forEach(f),i.clear(),p=!1,m&&(m=!1,b.process(x))}};return b}const _2=40;function Zf(s,n){let i=!1,l=!0;const p={delta:0,timestamp:0,isProcessing:!1},m=()=>i=!0,d=tl.reduce((R,z)=>(R[z]=f2(m),R),{}),{setup:h,read:f,resolveKeyframes:b,preUpdate:x,update:k,preRender:y,render:G,postRender:M}=d,I=()=>{const R=Ja.useManualTiming,z=R?p.timestamp:performance.now();i=!1,R||(p.delta=l?1e3/60:Math.max(Math.min(z-p.timestamp,_2),1)),p.timestamp=z,p.isProcessing=!0,h.process(p),f.process(p),b.process(p),x.process(p),k.process(p),y.process(p),G.process(p),M.process(p),p.isProcessing=!1,i&&n&&(l=!1,s(I))},A=()=>{i=!0,l=!0,p.isProcessing||s(I)};return{schedule:tl.reduce((R,z)=>{const L=d[z];return R[z]=(O,q=!1,X=!1)=>(i||A(),L.schedule(O,q,X)),R},{}),cancel:R=>{for(let z=0;z<tl.length;z++)d[tl[z]].cancel(R)},state:p,steps:d}}const{schedule:wt,cancel:$a,state:ne,steps:ru}=Zf(typeof requestAnimationFrame<"u"?requestAnimationFrame:Le,!0);let rl;function x2(){rl=void 0}const ce={now:()=>(rl===void 0&&ce.set(ne.isProcessing||Ja.useManualTiming?ne.timestamp:performance.now()),rl),set:s=>{rl=s,queueMicrotask(x2)}},Qf=s=>n=>typeof n=="string"&&n.startsWith(s),Jf=Qf("--"),k2=Qf("var(--"),mp=s=>k2(s)?y2.test(s.split("/*")[0].trim()):!1,y2=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function $h(s){return typeof s!="string"?!1:s.split("/*")[0].includes("var(--")}const _n={test:s=>typeof s=="number",parse:parseFloat,transform:s=>s},So={..._n,transform:s=>ea(0,1,s)},el={..._n,default:1},vo=s=>Math.round(s*1e5)/1e5,gp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function G2(s){return s==null}const v2=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,hp=(s,n)=>i=>!!(typeof i=="string"&&v2.test(i)&&i.startsWith(s)||n&&!G2(i)&&Object.prototype.hasOwnProperty.call(i,n)),$f=(s,n,i)=>l=>{if(typeof l!="string")return l;const[p,m,d,h]=l.match(gp);return{[s]:parseFloat(p),[n]:parseFloat(m),[i]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},M2=s=>ea(0,255,s),cu={..._n,transform:s=>Math.round(M2(s))},Gs={test:hp("rgb","red"),parse:$f("red","green","blue"),transform:({red:s,green:n,blue:i,alpha:l=1})=>"rgba("+cu.transform(s)+", "+cu.transform(n)+", "+cu.transform(i)+", "+vo(So.transform(l))+")"};function T2(s){let n="",i="",l="",p="";return s.length>5?(n=s.substring(1,3),i=s.substring(3,5),l=s.substring(5,7),p=s.substring(7,9)):(n=s.substring(1,2),i=s.substring(2,3),l=s.substring(3,4),p=s.substring(4,5),n+=n,i+=i,l+=l,p+=p),{red:parseInt(n,16),green:parseInt(i,16),blue:parseInt(l,16),alpha:p?parseInt(p,16)/255:1}}const Nu={test:hp("#"),parse:T2,transform:Gs.transform},No=s=>({test:n=>typeof n=="string"&&n.endsWith(s)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${s}`}),ka=No("deg"),ta=No("%"),et=No("px"),j2=No("vh"),A2=No("vw"),Wh={...ta,parse:s=>ta.parse(s)/100,transform:s=>ta.transform(s*100)},mn={test:hp("hsl","hue"),parse:$f("hue","saturation","lightness"),transform:({hue:s,saturation:n,lightness:i,alpha:l=1})=>"hsla("+Math.round(s)+", "+ta.transform(vo(n))+", "+ta.transform(vo(i))+", "+vo(So.transform(l))+")"},Ft={test:s=>Gs.test(s)||Nu.test(s)||mn.test(s),parse:s=>Gs.test(s)?Gs.parse(s):mn.test(s)?mn.parse(s):Nu.parse(s),transform:s=>typeof s=="string"?s:s.hasOwnProperty("red")?Gs.transform(s):mn.transform(s),getAnimatableNone:s=>{const n=Ft.parse(s);return n.alpha=0,Ft.transform(n)}},S2=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function I2(s){var n,i;return isNaN(s)&&typeof s=="string"&&(((n=s.match(gp))==null?void 0:n.length)||0)+(((i=s.match(S2))==null?void 0:i.length)||0)>0}const Wf="number",t_="color",V2="var",w2="var(",tb="${}",E2=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function bn(s){const n=s.toString(),i=[],l={color:[],number:[],var:[]},p=[];let m=0;const h=n.replace(E2,f=>(Ft.test(f)?(l.color.push(m),p.push(t_),i.push(Ft.parse(f))):f.startsWith(w2)?(l.var.push(m),p.push(V2),i.push(f)):(l.number.push(m),p.push(Wf),i.push(parseFloat(f))),++m,tb)).split(tb);return{values:i,split:h,indexes:l,types:p}}function N2(s){return bn(s).values}function e_({split:s,types:n}){const i=s.length;return l=>{let p="";for(let m=0;m<i;m++)if(p+=s[m],l[m]!==void 0){const d=n[m];d===Wf?p+=vo(l[m]):d===t_?p+=Ft.transform(l[m]):p+=l[m]}return p}}function q2(s){return e_(bn(s))}const C2=s=>typeof s=="number"?0:Ft.test(s)?Ft.getAnimatableNone(s):s,D2=(s,n)=>typeof s=="number"?n!=null&&n.trim().endsWith("/")?s:0:C2(s);function O2(s){const n=bn(s);return e_(n)(n.values.map((l,p)=>D2(l,n.split[p])))}const Ke={test:I2,parse:N2,createTransformer:q2,getAnimatableNone:O2};function uu(s,n,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(n-s)*6*i:i<1/2?n:i<2/3?s+(n-s)*(2/3-i)*6:s}function R2({hue:s,saturation:n,lightness:i,alpha:l}){s/=360,n/=100,i/=100;let p=0,m=0,d=0;if(!n)p=m=d=i;else{const h=i<.5?i*(1+n):i+n-i*n,f=2*i-h;p=uu(f,h,s+1/3),m=uu(f,h,s),d=uu(f,h,s-1/3)}return{red:Math.round(p*255),green:Math.round(m*255),blue:Math.round(d*255),alpha:l}}function yl(s,n){return i=>i>0?n:s}const Vt=(s,n,i)=>s+(n-s)*i,pu=(s,n,i)=>{const l=s*s,p=i*(n*n-l)+l;return p<0?0:Math.sqrt(p)},H2=[Nu,Gs,mn],z2=s=>H2.find(n=>n.test(s));function eb(s){const n=z2(s);if(!n)return!1;let i=n.parse(s);return n===mn&&(i=R2(i)),i}const ab=(s,n)=>{const i=eb(s),l=eb(n);if(!i||!l)return yl(s,n);const p={...i};return m=>(p.red=pu(i.red,l.red,m),p.green=pu(i.green,l.green,m),p.blue=pu(i.blue,l.blue,m),p.alpha=Vt(i.alpha,l.alpha,m),Gs.transform(p))},qu=new Set(["none","hidden"]);function L2(s,n){return qu.has(s)?i=>i<=0?s:n:i=>i>=1?n:s}function B2(s,n){return i=>Vt(s,n,i)}function bp(s){return typeof s=="number"?B2:typeof s=="string"?mp(s)?yl:Ft.test(s)?ab:Y2:Array.isArray(s)?a_:typeof s=="object"?Ft.test(s)?ab:U2:yl}function a_(s,n){const i=[...s],l=i.length,p=s.map((m,d)=>bp(m)(m,n[d]));return m=>{for(let d=0;d<l;d++)i[d]=p[d](m);return i}}function U2(s,n){const i={...s,...n},l={};for(const p in i)s[p]!==void 0&&n[p]!==void 0&&(l[p]=bp(s[p])(s[p],n[p]));return p=>{for(const m in l)i[m]=l[m](p);return i}}function P2(s,n){const i=[],l={color:0,var:0,number:0};for(let p=0;p<n.values.length;p++){const m=n.types[p],d=s.indexes[m][l[m]],h=s.values[d]??0;i[p]=h,l[m]++}return i}const Y2=(s,n)=>{const i=Ke.createTransformer(n),l=bn(s),p=bn(n);return l.indexes.var.length===p.indexes.var.length&&l.indexes.color.length===p.indexes.color.length&&l.indexes.number.length>=p.indexes.number.length?qu.has(s)&&!p.values.length||qu.has(n)&&!l.values.length?L2(s,n):wo(a_(P2(l,p),p.values),i):yl(s,n)};function s_(s,n,i){return typeof s=="number"&&typeof n=="number"&&typeof i=="number"?Vt(s,n,i):bp(s)(s,n)}const X2=s=>{const n=({timestamp:i})=>s(i);return{start:(i=!0)=>wt.update(n,i),stop:()=>$a(n),now:()=>ne.isProcessing?ne.timestamp:ce.now()}},n_=(s,n,i=10)=>{let l="";const p=Math.max(Math.round(n/i),2);for(let m=0;m<p;m++)l+=Math.round(s(m/(p-1))*1e4)/1e4+", ";return`linear(${l.substring(0,l.length-2)})`},Gl=2e4;function fp(s){let n=0;const i=50;let l=s.next(n);for(;!l.done&&n<Gl;)n+=i,l=s.next(n);return n>=Gl?1/0:n}function K2(s,n=100,i){const l=i({...s,keyframes:[0,n]}),p=Math.min(fp(l),Gl);return{type:"keyframes",ease:m=>l.next(p*m).value/n,duration:ze(p)}}const zt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Cu(s,n){return s*Math.sqrt(1-n*n)}const F2=12;function Z2(s,n,i){let l=i;for(let p=1;p<F2;p++)l=l-s(l)/n(l);return l}const du=.001;function Q2({duration:s=zt.duration,bounce:n=zt.bounce,velocity:i=zt.velocity,mass:l=zt.mass}){let p,m,d=1-n;d=ea(zt.minDamping,zt.maxDamping,d),s=ea(zt.minDuration,zt.maxDuration,ze(s)),d<1?(p=b=>{const x=b*d,k=x*s,y=x-i,G=Cu(b,d),M=Math.exp(-k);return du-y/G*M},m=b=>{const k=b*d*s,y=k*i+i,G=Math.pow(d,2)*Math.pow(b,2)*s,M=Math.exp(-k),I=Cu(Math.pow(b,2),d);return(-p(b)+du>0?-1:1)*((y-G)*M)/I}):(p=b=>{const x=Math.exp(-b*s),k=(b-i)*s+1;return-du+x*k},m=b=>{const x=Math.exp(-b*s),k=(i-b)*(s*s);return x*k});const h=5/s,f=Z2(p,m,h);if(s=Se(s),isNaN(f))return{stiffness:zt.stiffness,damping:zt.damping,duration:s};{const b=Math.pow(f,2)*l;return{stiffness:b,damping:d*2*Math.sqrt(l*b),duration:s}}}const J2=["duration","bounce"],$2=["stiffness","damping","mass"];function sb(s,n){return n.some(i=>s[i]!==void 0)}function W2(s){let n={velocity:zt.velocity,stiffness:zt.stiffness,damping:zt.damping,mass:zt.mass,isResolvedFromDuration:!1,...s};if(!sb(s,$2)&&sb(s,J2))if(n.velocity=0,s.visualDuration){const i=s.visualDuration,l=2*Math.PI/(i*1.2),p=l*l,m=2*ea(.05,1,1-(s.bounce||0))*Math.sqrt(p);n={...n,mass:zt.mass,stiffness:p,damping:m}}else{const i=Q2({...s,velocity:0});n={...n,...i,mass:zt.mass},n.isResolvedFromDuration=!0}return n}function vl(s=zt.visualDuration,n=zt.bounce){const i=typeof s!="object"?{visualDuration:s,keyframes:[0,1],bounce:n}:s;let{restSpeed:l,restDelta:p}=i;const m=i.keyframes[0],d=i.keyframes[i.keyframes.length-1],h={done:!1,value:m},{stiffness:f,damping:b,mass:x,duration:k,velocity:y,isResolvedFromDuration:G}=W2({...i,velocity:-ze(i.velocity||0)}),M=y||0,I=b/(2*Math.sqrt(f*x)),A=d-m,N=ze(Math.sqrt(f/x)),K=Math.abs(A)<5;l||(l=K?zt.restSpeed.granular:zt.restSpeed.default),p||(p=K?zt.restDelta.granular:zt.restDelta.default);let R,z,L,O,q,X;if(I<1)L=Cu(N,I),O=(M+I*N*A)/L,R=Z=>{const it=Math.exp(-I*N*Z);return d-it*(O*Math.sin(L*Z)+A*Math.cos(L*Z))},q=I*N*O+A*L,X=I*N*A-O*L,z=Z=>Math.exp(-I*N*Z)*(q*Math.sin(L*Z)+X*Math.cos(L*Z));else if(I===1){R=it=>d-Math.exp(-N*it)*(A+(M+N*A)*it);const Z=M+N*A;z=it=>Math.exp(-N*it)*(N*Z*it-M)}else{const Z=N*Math.sqrt(I*I-1);R=qt=>{const Et=Math.exp(-I*N*qt),D=Math.min(Z*qt,300);return d-Et*((M+I*N*A)*Math.sinh(D)+Z*A*Math.cosh(D))/Z};const it=(M+I*N*A)/Z,pt=I*N*it-A*Z,Nt=I*N*A-it*Z;z=qt=>{const Et=Math.exp(-I*N*qt),D=Math.min(Z*qt,300);return Et*(pt*Math.sinh(D)+Nt*Math.cosh(D))}}const F={calculatedDuration:G&&k||null,velocity:Z=>Se(z(Z)),next:Z=>{if(!G&&I<1){const pt=Math.exp(-I*N*Z),Nt=Math.sin(L*Z),qt=Math.cos(L*Z),Et=d-pt*(O*Nt+A*qt),D=Se(pt*(q*Nt+X*qt));return h.done=Math.abs(D)<=l&&Math.abs(d-Et)<=p,h.value=h.done?d:Et,h}const it=R(Z);if(G)h.done=Z>=k;else{const pt=Se(z(Z));h.done=Math.abs(pt)<=l&&Math.abs(d-it)<=p}return h.value=h.done?d:it,h},toString:()=>{const Z=Math.min(fp(F),Gl),it=n_(pt=>F.next(Z*pt).value,Z,30);return Z+"ms "+it},toTransition:()=>{}};return F}vl.applyToOptions=s=>{const n=K2(s,100,vl);return s.ease=n.ease,s.duration=Se(n.duration),s.type="keyframes",s};const ty=5;function o_(s,n,i){const l=Math.max(n-ty,0);return Rf(i-s(l),n-l)}function Du({keyframes:s,velocity:n=0,power:i=.8,timeConstant:l=325,bounceDamping:p=10,bounceStiffness:m=500,modifyTarget:d,min:h,max:f,restDelta:b=.5,restSpeed:x}){const k=s[0],y={done:!1,value:k},G=X=>h!==void 0&&X<h||f!==void 0&&X>f,M=X=>h===void 0?f:f===void 0||Math.abs(h-X)<Math.abs(f-X)?h:f;let I=i*n;const A=k+I,N=d===void 0?A:d(A);N!==A&&(I=N-k);const K=X=>-I*Math.exp(-X/l),R=X=>N+K(X),z=X=>{const F=K(X),Z=R(X);y.done=Math.abs(F)<=b,y.value=y.done?N:Z};let L,O;const q=X=>{G(y.value)&&(L=X,O=vl({keyframes:[y.value,M(y.value)],velocity:o_(R,X,y.value),damping:p,stiffness:m,restDelta:b,restSpeed:x}))};return q(0),{calculatedDuration:null,next:X=>{let F=!1;return!O&&L===void 0&&(F=!0,z(X),q(X)),L!==void 0&&X>=L?O.next(X-L):(!F&&z(X),y)}}}function ey(s,n,i){const l=[],p=i||Ja.mix||s_,m=s.length-1;for(let d=0;d<m;d++){let h=p(s[d],s[d+1]);if(n){const f=Array.isArray(n)?n[d]||Le:n;h=wo(f,h)}l.push(h)}return l}function ay(s,n,{clamp:i=!0,ease:l,mixer:p}={}){const m=s.length;if(cp(m===n.length),m===1)return()=>n[0];if(m===2&&n[0]===n[1])return()=>n[1];const d=s[0]===s[1];s[0]>s[m-1]&&(s=[...s].reverse(),n=[...n].reverse());const h=ey(n,l,p),f=h.length,b=x=>{if(d&&x<s[0])return n[0];let k=0;if(f>1)for(;k<s.length-2&&!(x<s[k+1]);k++);const y=Ao(s[k],s[k+1],x);return h[k](y)};return i?x=>b(ea(s[0],s[m-1],x)):b}function sy(s,n){const i=s[s.length-1];for(let l=1;l<=n;l++){const p=Ao(0,n,l);s.push(Vt(i,1,p))}}function ny(s){const n=[0];return sy(n,s.length-1),n}function oy(s,n){return s.map(i=>i*n)}function iy(s,n){return s.map(()=>n||Kf).splice(0,s.length-1)}function Mo({duration:s=300,keyframes:n,times:i,ease:l="easeInOut"}){const p=g2(l)?l.map(Jh):Jh(l),m={done:!1,value:n[0]},d=oy(i&&i.length===n.length?i:ny(n),s),h=ay(d,n,{ease:Array.isArray(p)?p:iy(n,p)});return{calculatedDuration:s,next:f=>(m.value=h(f),m.done=f>=s,m)}}const ly=s=>s!==null;function wl(s,{repeat:n,repeatType:i="loop"},l,p=1){const m=s.filter(ly),h=p<0||n&&i!=="loop"&&n%2===1?0:m.length-1;return!h||l===void 0?m[h]:l}const ry={decay:Du,inertia:Du,tween:Mo,keyframes:Mo,spring:vl};function i_(s){typeof s.type=="string"&&(s.type=ry[s.type])}class _p{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(n=>{this.resolve=n})}notifyFinished(){this.resolve()}then(n,i){return this.finished.then(n,i)}}const cy=s=>s/100;class Ml extends _p{constructor(n){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var l,p;const{motionValue:i}=this.options;i&&i.updatedAt!==ce.now()&&this.tick(ce.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(p=(l=this.options).onStop)==null||p.call(l))},this.options=n,this.initAnimation(),this.play(),n.autoplay===!1&&this.pause()}initAnimation(){const{options:n}=this;i_(n);const{type:i=Mo,repeat:l=0,repeatDelay:p=0,repeatType:m,velocity:d=0}=n;let{keyframes:h}=n;const f=i||Mo;f!==Mo&&typeof h[0]!="number"&&(this.mixKeyframes=wo(cy,s_(h[0],h[1])),h=[0,100]);const b=f({...n,keyframes:h});m==="mirror"&&(this.mirroredGenerator=f({...n,keyframes:[...h].reverse(),velocity:-d})),b.calculatedDuration===null&&(b.calculatedDuration=fp(b));const{calculatedDuration:x}=b;this.calculatedDuration=x,this.resolvedDuration=x+p,this.totalDuration=this.resolvedDuration*(l+1)-p,this.generator=b}updateTime(n){const i=Math.round(n-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(n,i=!1){const{generator:l,totalDuration:p,mixKeyframes:m,mirroredGenerator:d,resolvedDuration:h,calculatedDuration:f}=this;if(this.startTime===null)return l.next(0);const{delay:b=0,keyframes:x,repeat:k,repeatType:y,repeatDelay:G,type:M,onUpdate:I,finalKeyframe:A}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-p/this.speed,this.startTime)),i?this.currentTime=n:this.updateTime(n);const N=this.currentTime-b*(this.playbackSpeed>=0?1:-1),K=this.playbackSpeed>=0?N<0:N>p;this.currentTime=Math.max(N,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=p);let R=this.currentTime,z=l;if(k){const X=Math.min(this.currentTime,p)/h;let F=Math.floor(X),Z=X%1;!Z&&X>=1&&(Z=1),Z===1&&F--,F=Math.min(F,k+1),!!(F%2)&&(y==="reverse"?(Z=1-Z,G&&(Z-=G/h)):y==="mirror"&&(z=d)),R=ea(0,1,Z)*h}let L;K?(this.delayState.value=x[0],L=this.delayState):L=z.next(R),m&&!K&&(L.value=m(L.value));let{done:O}=L;!K&&f!==null&&(O=this.playbackSpeed>=0?this.currentTime>=p:this.currentTime<=0);const q=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&O);return q&&M!==Du&&(L.value=wl(x,this.options,A,this.speed)),I&&I(L.value),q&&this.finish(),L}then(n,i){return this.finished.then(n,i)}get duration(){return ze(this.calculatedDuration)}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+ze(n)}get time(){return ze(this.currentTime)}set time(n){n=Se(n),this.currentTime=n,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=n,this.tick(n))}getGeneratorVelocity(){const n=this.currentTime;if(n<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(n);const i=this.generator.next(n).value;return o_(l=>this.generator.next(l).value,n,i)}get speed(){return this.playbackSpeed}set speed(n){const i=this.playbackSpeed!==n;i&&this.driver&&this.updateTime(ce.now()),this.playbackSpeed=n,i&&this.driver&&(this.time=ze(this.currentTime))}play(){var p,m;if(this.isStopped)return;const{driver:n=X2,startTime:i}=this.options;this.driver||(this.driver=n(d=>this.tick(d))),(m=(p=this.options).onPlay)==null||m.call(p);const l=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=l):this.holdTime!==null?this.startTime=l-this.holdTime:this.startTime||(this.startTime=i??l),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ce.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var n,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(n=this.options).onComplete)==null||i.call(n)}cancel(){var n,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(n=this.options).onCancel)==null||i.call(n)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}attachTimeline(n){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),n.observe(this)}}function uy(s){for(let n=1;n<s.length;n++)s[n]??(s[n]=s[n-1])}const vs=s=>s*180/Math.PI,Ou=s=>{const n=vs(Math.atan2(s[1],s[0]));return Ru(n)},py={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:s=>(Math.abs(s[0])+Math.abs(s[3]))/2,rotate:Ou,rotateZ:Ou,skewX:s=>vs(Math.atan(s[1])),skewY:s=>vs(Math.atan(s[2])),skew:s=>(Math.abs(s[1])+Math.abs(s[2]))/2},Ru=s=>(s=s%360,s<0&&(s+=360),s),nb=Ou,ob=s=>Math.sqrt(s[0]*s[0]+s[1]*s[1]),ib=s=>Math.sqrt(s[4]*s[4]+s[5]*s[5]),dy={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:ob,scaleY:ib,scale:s=>(ob(s)+ib(s))/2,rotateX:s=>Ru(vs(Math.atan2(s[6],s[5]))),rotateY:s=>Ru(vs(Math.atan2(-s[2],s[0]))),rotateZ:nb,rotate:nb,skewX:s=>vs(Math.atan(s[4])),skewY:s=>vs(Math.atan(s[1])),skew:s=>(Math.abs(s[1])+Math.abs(s[4]))/2};function Hu(s){return s.includes("scale")?1:0}function zu(s,n){if(!s||s==="none")return Hu(n);const i=s.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let l,p;if(i)l=dy,p=i;else{const h=s.match(/^matrix\(([-\d.e\s,]+)\)$/u);l=py,p=h}if(!p)return Hu(n);const m=l[n],d=p[1].split(",").map(gy);return typeof m=="function"?m(d):d[m]}const my=(s,n)=>{const{transform:i="none"}=getComputedStyle(s);return zu(i,n)};function gy(s){return parseFloat(s.trim())}const xn=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],kn=new Set([...xn,"pathRotation"]),lb=s=>s===_n||s===et,hy=new Set(["x","y","z"]),by=xn.filter(s=>!hy.has(s));function fy(s){const n=[];return by.forEach(i=>{const l=s.getValue(i);l!==void 0&&(n.push([i,l.get()]),l.set(i.startsWith("scale")?1:0))}),n}const Qa={width:({x:s},{paddingLeft:n="0",paddingRight:i="0",boxSizing:l})=>{const p=s.max-s.min;return l==="border-box"?p:p-parseFloat(n)-parseFloat(i)},height:({y:s},{paddingTop:n="0",paddingBottom:i="0",boxSizing:l})=>{const p=s.max-s.min;return l==="border-box"?p:p-parseFloat(n)-parseFloat(i)},top:(s,{top:n})=>parseFloat(n),left:(s,{left:n})=>parseFloat(n),bottom:({y:s},{top:n})=>parseFloat(n)+(s.max-s.min),right:({x:s},{left:n})=>parseFloat(n)+(s.max-s.min),x:(s,{transform:n})=>zu(n,"x"),y:(s,{transform:n})=>zu(n,"y")};Qa.translateX=Qa.x;Qa.translateY=Qa.y;const Ms=new Set;let Lu=!1,Bu=!1,Uu=!1;function l_(){if(Bu){const s=Array.from(Ms).filter(l=>l.needsMeasurement),n=new Set(s.map(l=>l.element)),i=new Map;n.forEach(l=>{const p=fy(l);p.length&&(i.set(l,p),l.render())}),s.forEach(l=>l.measureInitialState()),n.forEach(l=>{l.render();const p=i.get(l);p&&p.forEach(([m,d])=>{var h;(h=l.getValue(m))==null||h.set(d)})}),s.forEach(l=>l.measureEndState()),s.forEach(l=>{l.suspendedScrollY!==void 0&&window.scrollTo(0,l.suspendedScrollY)})}Bu=!1,Lu=!1,Ms.forEach(s=>s.complete(Uu)),Ms.clear()}function r_(){Ms.forEach(s=>{s.readKeyframes(),s.needsMeasurement&&(Bu=!0)})}function _y(){Uu=!0,r_(),l_(),Uu=!1}class xp{constructor(n,i,l,p,m,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...n],this.onComplete=i,this.name=l,this.motionValue=p,this.element=m,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(Ms.add(this),Lu||(Lu=!0,wt.read(r_),wt.resolveKeyframes(l_))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:i,element:l,motionValue:p}=this;if(n[0]===null){const m=p==null?void 0:p.get(),d=n[n.length-1];if(m!==void 0)n[0]=m;else if(l&&i){const h=l.readValue(i,d);h!=null&&(n[0]=h)}n[0]===void 0&&(n[0]=d),p&&m===void 0&&p.set(n[0])}uy(n)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(n=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,n),Ms.delete(this)}cancel(){this.state==="scheduled"&&(Ms.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const xy=s=>s.startsWith("--");function c_(s,n,i){xy(n)?s.style.setProperty(n,i):s.style[n]=i}const ky={};function u_(s,n){const i=Of(s);return()=>ky[n]??i()}const yy=u_(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),p_=u_(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),ko=([s,n,i,l])=>`cubic-bezier(${s}, ${n}, ${i}, ${l})`,rb={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ko([0,.65,.55,1]),circOut:ko([.55,0,1,.45]),backIn:ko([.31,.01,.66,-.59]),backOut:ko([.33,1.53,.69,.99])};function d_(s,n){if(s)return typeof s=="function"?p_()?n_(s,n):"ease-out":Ff(s)?ko(s):Array.isArray(s)?s.map(i=>d_(i,n)||rb.easeOut):rb[s]}function Gy(s,n,i,{delay:l=0,duration:p=300,repeat:m=0,repeatType:d="loop",ease:h="easeOut",times:f}={},b=void 0){const x={[n]:i};f&&(x.offset=f);const k=d_(h,p);Array.isArray(k)&&(x.easing=k);const y={delay:l,duration:p,easing:Array.isArray(k)?"linear":k,fill:"both",iterations:m+1,direction:d==="reverse"?"alternate":"normal"};return b&&(y.pseudoElement=b),s.animate(x,y)}function m_(s){return typeof s=="function"&&"applyToOptions"in s}function vy({type:s,...n}){return m_(s)&&p_()?s.applyToOptions(n):(n.duration??(n.duration=300),n.ease??(n.ease="easeOut"),n)}class g_ extends _p{constructor(n){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!n)return;const{element:i,name:l,keyframes:p,pseudoElement:m,allowFlatten:d=!1,finalKeyframe:h,onComplete:f}=n;this.isPseudoElement=!!m,this.allowFlatten=d,this.options=n,cp(typeof n.type!="string");const b=vy(n);this.animation=Gy(i,l,p,b,m),b.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!m){const x=wl(p,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(x),c_(i,l,x),this.animation.cancel()}f==null||f(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var n,i;(i=(n=this.animation).finish)==null||i.call(n)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:n}=this;n==="idle"||n==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var i,l,p;const n=(i=this.options)==null?void 0:i.element;!this.isPseudoElement&&(n!=null&&n.isConnected)&&((p=(l=this.animation).commitStyles)==null||p.call(l))}get duration(){var i,l;const n=((l=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:l.call(i).duration)||0;return ze(Number(n))}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+ze(n)}get time(){return ze(Number(this.animation.currentTime)||0)}set time(n){const i=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Se(n),i&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(n){n<0&&(this.finishedTime=null),this.animation.playbackRate=n}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(n){this.manualStartTime=this.animation.startTime=n}attachTimeline({timeline:n,rangeStart:i,rangeEnd:l,observe:p}){var m;return this.allowFlatten&&((m=this.animation.effect)==null||m.updateTiming({easing:"linear"})),this.animation.onfinish=null,n&&yy()?(this.animation.timeline=n,i&&(this.animation.rangeStart=i),l&&(this.animation.rangeEnd=l),Le):p(this)}}const h_={anticipate:Pf,backInOut:Uf,circInOut:Xf};function My(s){return s in h_}function Ty(s){typeof s.ease=="string"&&My(s.ease)&&(s.ease=h_[s.ease])}const mu=10;class jy extends g_{constructor(n){Ty(n),i_(n),super(n),n.startTime!==void 0&&n.autoplay!==!1&&(this.startTime=n.startTime),this.options=n}updateMotionValue(n){const{motionValue:i,onUpdate:l,onComplete:p,element:m,...d}=this.options;if(!i)return;if(n!==void 0){i.set(n);return}const h=new Ml({...d,autoplay:!1}),f=Math.max(mu,ce.now()-this.startTime),b=ea(0,mu,f-mu),x=h.sample(f).value,{name:k}=this.options;m&&k&&c_(m,k,x),i.setWithVelocity(h.sample(Math.max(0,f-b)).value,x,b),h.stop()}}const cb=(s,n)=>n==="zIndex"?!1:!!(typeof s=="number"||Array.isArray(s)||typeof s=="string"&&(Ke.test(s)||s==="0")&&!s.startsWith("url("));function Ay(s){const n=s[0];if(s.length===1)return!0;for(let i=0;i<s.length;i++)if(s[i]!==n)return!0}function Sy(s,n,i,l){const p=s[0];if(p===null)return!1;if(n==="display"||n==="visibility")return!0;const m=s[s.length-1],d=cb(p,n),h=cb(m,n);return!d||!h?!1:Ay(s)||(i==="spring"||m_(i))&&l}function Pu(s){s.duration=0,s.type="keyframes"}const b_=new Set(["opacity","clipPath","filter","transform"]),Iy=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function Vy(s){for(let n=0;n<s.length;n++)if(typeof s[n]=="string"&&Iy.test(s[n]))return!0;return!1}const wy=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),Ey=Of(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function Ny(s){var k;const{motionValue:n,name:i,repeatDelay:l,repeatType:p,damping:m,type:d,keyframes:h}=s;if(!(((k=n==null?void 0:n.owner)==null?void 0:k.current)instanceof HTMLElement))return!1;const{onUpdate:b,transformTemplate:x}=n.owner.getProps();return Ey()&&i&&(b_.has(i)||wy.has(i)&&Vy(h))&&(i!=="transform"||!x)&&!b&&!l&&p!=="mirror"&&m!==0&&d!=="inertia"}const qy=40;class Cy extends _p{constructor({autoplay:n=!0,delay:i=0,type:l="keyframes",repeat:p=0,repeatDelay:m=0,repeatType:d="loop",keyframes:h,name:f,motionValue:b,element:x,...k}){var M;super(),this.stop=()=>{var I,A;this._animation&&(this._animation.stop(),(I=this.stopTimeline)==null||I.call(this)),(A=this.keyframeResolver)==null||A.cancel()},this.createdAt=ce.now();const y={autoplay:n,delay:i,type:l,repeat:p,repeatDelay:m,repeatType:d,name:f,motionValue:b,element:x,...k},G=(x==null?void 0:x.KeyframeResolver)||xp;this.keyframeResolver=new G(h,(I,A,N)=>this.onKeyframesResolved(I,A,y,!N),f,b,x),(M=this.keyframeResolver)==null||M.scheduleResolve()}onKeyframesResolved(n,i,l,p){var N,K;this.keyframeResolver=void 0;const{name:m,type:d,velocity:h,delay:f,isHandoff:b,onUpdate:x}=l;this.resolvedAt=ce.now();let k=!0;Sy(n,m,d,h)||(k=!1,(Ja.instantAnimations||!f)&&(x==null||x(wl(n,l,i))),n[0]=n[n.length-1],Pu(l),l.repeat=0);const G={startTime:p?this.resolvedAt?this.resolvedAt-this.createdAt>qy?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...l,keyframes:n},M=k&&!b&&Ny(G),I=(K=(N=G.motionValue)==null?void 0:N.owner)==null?void 0:K.current;let A;if(M)try{A=new jy({...G,element:I})}catch{A=new Ml(G)}else A=new Ml(G);A.finished.then(()=>{this.notifyFinished()}).catch(Le),this.pendingTimeline&&(this.stopTimeline=A.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=A}get finished(){return this._animation?this.animation.finished:this._finished}then(n,i){return this.finished.finally(n).then(()=>{})}get animation(){var n;return this._animation||((n=this.keyframeResolver)==null||n.resume(),_y()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(n){this.animation.time=n}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(n){this.animation.speed=n}get startTime(){return this.animation.startTime}attachTimeline(n){return this._animation?this.stopTimeline=this.animation.attachTimeline(n):this.pendingTimeline=n,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var n;this._animation&&this.animation.cancel(),(n=this.keyframeResolver)==null||n.cancel()}}function f_(s,n,i,l=0,p=1){const m=Array.from(s).sort((b,x)=>b.sortNodePosition(x)).indexOf(n),d=s.size,h=(d-1)*l;return typeof i=="function"?i(m,d):p===1?m*l:h-m*l}const ub=30,Dy=s=>!isNaN(parseFloat(s));class Oy{constructor(n,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=l=>{var m;const p=ce.now();if(this.updatedAt!==p&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(l),this.current!==this.prev&&((m=this.events.change)==null||m.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(n),this.owner=i.owner}setCurrent(n){this.current=n,this.updatedAt=ce.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=Dy(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,i){this.events[n]||(this.events[n]=new up);const l=this.events[n].add(i);return n==="change"?()=>{l(),wt.read(()=>{this.events.change.getSize()||this.stop()})}:l}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,i){this.passiveEffect=n,this.stopPassiveEffect=i}set(n){this.passiveEffect?this.passiveEffect(n,this.updateAndNotify):this.updateAndNotify(n)}setWithVelocity(n,i,l){this.set(i),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-l}jump(n,i=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var n;(n=this.events.change)==null||n.notify(this.current)}addDependent(n){this.dependents||(this.dependents=new Set),this.dependents.add(n)}removeDependent(n){this.dependents&&this.dependents.delete(n)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const n=ce.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>ub)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,ub);return Rf(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(n){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=n(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var n,i;(n=this.dependents)==null||n.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function fn(s,n){return new Oy(s,n)}function __(s,n){if(s!=null&&s.inherit&&n){const{inherit:i,...l}=s;return{...n,...l}}return s}function kp(s,n){const i=(s==null?void 0:s[n])??(s==null?void 0:s.default)??s;return i!==s?__(i,s):i}const Ry={type:"spring",stiffness:500,damping:25,restSpeed:10},Hy=s=>({type:"spring",stiffness:550,damping:s===0?2*Math.sqrt(550):30,restSpeed:10}),zy={type:"keyframes",duration:.8},Ly={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},By=(s,{keyframes:n})=>n.length>2?zy:kn.has(s)?s.startsWith("scale")?Hy(n[1]):Ry:Ly,Uy=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function Py(s){for(const n in s)if(!Uy.has(n))return!0;return!1}const yp=(s,n,i,l={},p,m)=>d=>{const h=kp(l,s)||{},f=h.delay||l.delay||0;let{elapsed:b=0}=l;b=b-Se(f);const x={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:n.getVelocity(),...h,delay:-b,onUpdate:y=>{n.set(y),h.onUpdate&&h.onUpdate(y)},onComplete:()=>{d(),h.onComplete&&h.onComplete()},name:s,motionValue:n,element:m?void 0:p};Py(h)||Object.assign(x,By(s,x)),x.duration&&(x.duration=Se(x.duration)),x.repeatDelay&&(x.repeatDelay=Se(x.repeatDelay)),x.from!==void 0&&(x.keyframes[0]=x.from);let k=!1;if((x.type===!1||x.duration===0&&!x.repeatDelay)&&(Pu(x),x.delay===0&&(k=!0)),(Ja.instantAnimations||Ja.skipAnimations||p!=null&&p.shouldSkipAnimations||h.skipAnimations)&&(k=!0,Pu(x),x.delay=0),x.allowFlatten=!h.type&&!h.ease,k&&!m&&n.get()!==void 0){const y=wl(x.keyframes,h);if(y!==void 0){wt.update(()=>{x.onUpdate(y),x.onComplete()});return}}return h.isSync?new Ml(x):new Cy(x)},Yy=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Xy(s){const n=Yy.exec(s);if(!n)return[,];const[,i,l,p]=n;return[`--${i??l}`,p]}function x_(s,n,i=1){const[l,p]=Xy(s);if(!l)return;const m=window.getComputedStyle(n).getPropertyValue(l);if(m){const d=m.trim();return qf(d)?parseFloat(d):d}return mp(p)?x_(p,n,i+1):p}function pb(s){const n=[{},{}];return s==null||s.values.forEach((i,l)=>{n[0][l]=i.get(),n[1][l]=i.getVelocity()}),n}function Gp(s,n,i,l){if(typeof n=="function"){const[p,m]=pb(l);n=n(i!==void 0?i:s.custom,p,m)}if(typeof n=="string"&&(n=s.variants&&s.variants[n]),typeof n=="function"){const[p,m]=pb(l);n=n(i!==void 0?i:s.custom,p,m)}return n}function Ts(s,n,i){const l=s.getProps();return Gp(l,n,i!==void 0?i:l.custom,s)}const k_=new Set(["width","height","top","left","right","bottom",...xn]),Yu=s=>Array.isArray(s);function Ky(s,n,i){s.hasValue(n)?s.getValue(n).set(i):s.addValue(n,fn(i))}function Fy(s){return Yu(s)?s[s.length-1]||0:s}function Zy(s,n){const i=Ts(s,n);let{transitionEnd:l={},transition:p={},...m}=i||{};m={...m,...l};for(const d in m){const h=Fy(m[d]);Ky(s,d,h)}}const oe=s=>!!(s&&s.getVelocity);function Qy(s){return!!(oe(s)&&s.add)}function Xu(s,n){const i=s.getValue("willChange");if(Qy(i))return i.add(n);if(!i&&Ja.WillChange){const l=new Ja.WillChange("auto");s.addValue("willChange",l),l.add(n)}}function vp(s){return s.replace(/([A-Z])/g,n=>`-${n.toLowerCase()}`)}const Jy="framerAppearId",y_="data-"+vp(Jy);function G_(s){return s.props[y_]}function $y({protectedKeys:s,needsAnimating:n},i){const l=s.hasOwnProperty(i)&&n[i]!==!0;return n[i]=!1,l}function v_(s,n,{delay:i=0,transitionOverride:l,type:p}={}){let{transition:m,transitionEnd:d,...h}=n;const f=s.getDefaultTransition();m=m?__(m,f):f;const b=m==null?void 0:m.reduceMotion,x=m==null?void 0:m.skipAnimations;l&&(m=l);const k=[],y=p&&s.animationState&&s.animationState.getState()[p],G=m==null?void 0:m.path;G&&G.animateVisualElement(s,h,m,i,k);for(const M in h){const I=s.getValue(M,s.latestValues[M]??null),A=h[M];if(A===void 0||y&&$y(y,M))continue;const N={delay:i,...kp(m||{},M)};x&&(N.skipAnimations=!0);const K=I.get();if(K!==void 0&&!I.isAnimating()&&!Array.isArray(A)&&A===K&&!N.velocity){wt.update(()=>I.set(A));continue}let R=!1;if(window.MotionHandoffAnimation){const O=G_(s);if(O){const q=window.MotionHandoffAnimation(O,M,wt);q!==null&&(N.startTime=q,R=!0)}}Xu(s,M);const z=b??s.shouldReduceMotion;I.start(yp(M,I,A,z&&k_.has(M)?{type:!1}:N,s,R));const L=I.animation;L&&k.push(L)}if(d){const M=()=>wt.update(()=>{d&&Zy(s,d)});k.length?Promise.all(k).then(M):M()}return k}function Ku(s,n,i={}){var f;const l=Ts(s,n,i.type==="exit"?(f=s.presenceContext)==null?void 0:f.custom:void 0);let{transition:p=s.getDefaultTransition()||{}}=l||{};i.transitionOverride&&(p=i.transitionOverride);const m=l?()=>Promise.all(v_(s,l,i)):()=>Promise.resolve(),d=s.variantChildren&&s.variantChildren.size?(b=0)=>{const{delayChildren:x=0,staggerChildren:k,staggerDirection:y}=p;return Wy(s,n,b,x,k,y,i)}:()=>Promise.resolve(),{when:h}=p;if(h){const[b,x]=h==="beforeChildren"?[m,d]:[d,m];return b().then(()=>x())}else return Promise.all([m(),d(i.delay)])}function Wy(s,n,i=0,l=0,p=0,m=1,d){const h=[];for(const f of s.variantChildren)f.notify("AnimationStart",n),h.push(Ku(f,n,{...d,delay:i+(typeof l=="function"?0:l)+f_(s.variantChildren,f,l,p,m)}).then(()=>f.notify("AnimationComplete",n)));return Promise.all(h)}function tG(s,n,i={}){s.notify("AnimationStart",n);let l;if(Array.isArray(n)){const p=n.map(m=>Ku(s,m,i));l=Promise.all(p)}else if(typeof n=="string")l=Ku(s,n,i);else{const p=typeof n=="function"?Ts(s,n,i.custom):n;l=Promise.all(v_(s,p,i))}return l.then(()=>{s.notify("AnimationComplete",n)})}const eG={test:s=>s==="auto",parse:s=>s},M_=s=>n=>n.test(s),T_=[_n,et,ta,ka,A2,j2,eG],db=s=>T_.find(M_(s));function aG(s){return typeof s=="number"?s===0:s!==null?s==="none"||s==="0"||Df(s):!0}const sG=new Set(["brightness","contrast","saturate","opacity"]);function nG(s){const[n,i]=s.slice(0,-1).split("(");if(n==="drop-shadow")return s;const[l]=i.match(gp)||[];if(!l)return s;const p=i.replace(l,"");let m=sG.has(n)?1:0;return l!==i&&(m*=100),n+"("+m+p+")"}const oG=/\b([a-z-]*)\(.*?\)/gu,Fu={...Ke,getAnimatableNone:s=>{const n=s.match(oG);return n?n.map(nG).join(" "):s}},Zu={...Ke,getAnimatableNone:s=>{const n=Ke.parse(s);return Ke.createTransformer(s)(n.map(l=>typeof l=="number"?0:typeof l=="object"?{...l,alpha:1}:l))}},mb={..._n,transform:Math.round},iG={rotate:ka,pathRotation:ka,rotateX:ka,rotateY:ka,rotateZ:ka,scale:el,scaleX:el,scaleY:el,scaleZ:el,skew:ka,skewX:ka,skewY:ka,distance:et,translateX:et,translateY:et,translateZ:et,x:et,y:et,z:et,perspective:et,transformPerspective:et,opacity:So,originX:Wh,originY:Wh,originZ:et},Tl={borderWidth:et,borderTopWidth:et,borderRightWidth:et,borderBottomWidth:et,borderLeftWidth:et,borderRadius:et,borderTopLeftRadius:et,borderTopRightRadius:et,borderBottomRightRadius:et,borderBottomLeftRadius:et,width:et,maxWidth:et,height:et,maxHeight:et,top:et,right:et,bottom:et,left:et,inset:et,insetBlock:et,insetBlockStart:et,insetBlockEnd:et,insetInline:et,insetInlineStart:et,insetInlineEnd:et,padding:et,paddingTop:et,paddingRight:et,paddingBottom:et,paddingLeft:et,paddingBlock:et,paddingBlockStart:et,paddingBlockEnd:et,paddingInline:et,paddingInlineStart:et,paddingInlineEnd:et,margin:et,marginTop:et,marginRight:et,marginBottom:et,marginLeft:et,marginBlock:et,marginBlockStart:et,marginBlockEnd:et,marginInline:et,marginInlineStart:et,marginInlineEnd:et,fontSize:et,backgroundPositionX:et,backgroundPositionY:et,...iG,zIndex:mb,fillOpacity:So,strokeOpacity:So,numOctaves:mb},lG={...Tl,color:Ft,backgroundColor:Ft,outlineColor:Ft,fill:Ft,stroke:Ft,borderColor:Ft,borderTopColor:Ft,borderRightColor:Ft,borderBottomColor:Ft,borderLeftColor:Ft,filter:Fu,WebkitFilter:Fu,mask:Zu,WebkitMask:Zu},j_=s=>lG[s],rG=new Set([Fu,Zu]);function A_(s,n){let i=j_(s);return rG.has(i)||(i=Ke),i.getAnimatableNone?i.getAnimatableNone(n):void 0}const cG=new Set(["auto","none","0"]);function uG(s,n,i){let l=0,p;for(;l<s.length&&!p;){const m=s[l];typeof m=="string"&&!cG.has(m)&&bn(m).values.length&&(p=s[l]),l++}if(p&&i)for(const m of n)s[m]=A_(i,p)}class pG extends xp{constructor(n,i,l,p,m){super(n,i,l,p,m,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:i,name:l}=this;if(!i||!i.current)return;super.readKeyframes();for(let x=0;x<n.length;x++){let k=n[x];if(typeof k=="string"&&(k=k.trim(),mp(k))){const y=x_(k,i.current);y!==void 0&&(n[x]=y),x===n.length-1&&(this.finalKeyframe=k)}}if(this.resolveNoneKeyframes(),!k_.has(l)||n.length!==2)return;const[p,m]=n,d=db(p),h=db(m),f=$h(p),b=$h(m);if(f!==b&&Qa[l]){this.needsMeasurement=!0;return}if(d!==h)if(lb(d)&&lb(h))for(let x=0;x<n.length;x++){const k=n[x];typeof k=="string"&&(n[x]=parseFloat(k))}else Qa[l]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:i}=this,l=[];for(let p=0;p<n.length;p++)(n[p]===null||aG(n[p]))&&l.push(p);l.length&&uG(n,l,i)}measureInitialState(){const{element:n,unresolvedKeyframes:i,name:l}=this;if(!n||!n.current)return;l==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Qa[l](n.measureViewportBox(),window.getComputedStyle(n.current)),i[0]=this.measuredOrigin;const p=i[i.length-1];p!==void 0&&n.getValue(l,p).jump(p,!1)}measureEndState(){var h;const{element:n,name:i,unresolvedKeyframes:l}=this;if(!n||!n.current)return;const p=n.getValue(i);p&&p.jump(this.measuredOrigin,!1);const m=l.length-1,d=l[m];l[m]=Qa[i](n.measureViewportBox(),window.getComputedStyle(n.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([f,b])=>{n.getValue(f).set(b)}),this.resolveNoneKeyframes()}}function S_(s,n,i){if(s==null)return[];if(s instanceof EventTarget)return[s];if(typeof s=="string"){let l=document;const p=(i==null?void 0:i[s])??l.querySelectorAll(s);return p?Array.from(p):[]}return Array.from(s).filter(l=>l!=null)}const Qu=(s,n)=>n&&typeof s=="number"?n.transform(s):s;function cl(s){return Cf(s)&&"offsetHeight"in s&&!("ownerSVGElement"in s)}const{schedule:Mp}=Zf(queueMicrotask,!1),Xe={x:!1,y:!1};function I_(){return Xe.x||Xe.y}function dG(s){return s==="x"||s==="y"?Xe[s]?null:(Xe[s]=!0,()=>{Xe[s]=!1}):Xe.x||Xe.y?null:(Xe.x=Xe.y=!0,()=>{Xe.x=Xe.y=!1})}function V_(s,n){const i=S_(s),l=new AbortController,p={passive:!0,...n,signal:l.signal};return[i,p,()=>l.abort()]}function mG(s){return!(s.pointerType==="touch"||I_())}function gG(s,n,i={}){const[l,p,m]=V_(s,i);return l.forEach(d=>{let h=!1,f=!1,b;const x=()=>{d.removeEventListener("pointerleave",M)},k=A=>{b&&(b(A),b=void 0),x()},y=A=>{h=!1,window.removeEventListener("pointerup",y),window.removeEventListener("pointercancel",y),f&&(f=!1,k(A))},G=()=>{h=!0,window.addEventListener("pointerup",y,p),window.addEventListener("pointercancel",y,p)},M=A=>{if(A.pointerType!=="touch"){if(h){f=!0;return}k(A)}},I=A=>{if(!mG(A))return;f=!1;const N=n(d,A);typeof N=="function"&&(b=N,d.addEventListener("pointerleave",M,p))};d.addEventListener("pointerenter",I,p),d.addEventListener("pointerdown",G,p)}),m}const w_=(s,n)=>n?s===n?!0:w_(s,n.parentElement):!1,Tp=s=>s.pointerType==="mouse"?typeof s.button!="number"||s.button<=0:s.isPrimary!==!1,hG=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function bG(s){return hG.has(s.tagName)||s.isContentEditable===!0}const fG=new Set(["INPUT","SELECT","TEXTAREA"]);function _G(s){return fG.has(s.tagName)||s.isContentEditable===!0}const ul=new WeakSet;function gb(s){return n=>{n.key==="Enter"&&s(n)}}function gu(s,n){s.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const xG=(s,n)=>{const i=s.currentTarget;if(!i)return;const l=gb(()=>{if(ul.has(i))return;gu(i,"down");const p=gb(()=>{gu(i,"up")}),m=()=>gu(i,"cancel");i.addEventListener("keyup",p,n),i.addEventListener("blur",m,n)});i.addEventListener("keydown",l,n),i.addEventListener("blur",()=>i.removeEventListener("keydown",l),n)};function hb(s){return Tp(s)&&!I_()}const bb=new WeakSet;function kG(s,n,i={}){const[l,p,m]=V_(s,i),d=h=>{const f=h.currentTarget;if(!hb(h)||bb.has(h))return;ul.add(f),i.stopPropagation&&bb.add(h);const b=n(f,h),x=(G,M)=>{window.removeEventListener("pointerup",k),window.removeEventListener("pointercancel",y),ul.has(f)&&ul.delete(f),hb(G)&&typeof b=="function"&&b(G,{success:M})},k=G=>{x(G,f===window||f===document||i.useGlobalTarget||w_(f,G.target))},y=G=>{x(G,!1)};window.addEventListener("pointerup",k,p),window.addEventListener("pointercancel",y,p)};return l.forEach(h=>{(i.useGlobalTarget?window:h).addEventListener("pointerdown",d,p),cl(h)&&(h.addEventListener("focus",b=>xG(b,p)),!bG(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),m}function jp(s){return Cf(s)&&"ownerSVGElement"in s}const pl=new WeakMap;let Ka;const E_=(s,n,i)=>(l,p)=>p&&p[0]?p[0][s+"Size"]:jp(l)&&"getBBox"in l?l.getBBox()[n]:l[i],yG=E_("inline","width","offsetWidth"),GG=E_("block","height","offsetHeight");function vG({target:s,borderBoxSize:n}){var i;(i=pl.get(s))==null||i.forEach(l=>{l(s,{get width(){return yG(s,n)},get height(){return GG(s,n)}})})}function MG(s){s.forEach(vG)}function TG(){typeof ResizeObserver>"u"||(Ka=new ResizeObserver(MG))}function jG(s,n){Ka||TG();const i=S_(s);return i.forEach(l=>{let p=pl.get(l);p||(p=new Set,pl.set(l,p)),p.add(n),Ka==null||Ka.observe(l)}),()=>{i.forEach(l=>{const p=pl.get(l);p==null||p.delete(n),p!=null&&p.size||Ka==null||Ka.unobserve(l)})}}const dl=new Set;let gn;function AG(){gn=()=>{const s={get width(){return window.innerWidth},get height(){return window.innerHeight}};dl.forEach(n=>n(s))},window.addEventListener("resize",gn)}function SG(s){return dl.add(s),gn||AG(),()=>{dl.delete(s),!dl.size&&typeof gn=="function"&&(window.removeEventListener("resize",gn),gn=void 0)}}function fb(s,n){return typeof s=="function"?SG(s):jG(s,n)}function IG(s){return jp(s)&&s.tagName==="svg"}const VG=[...T_,Ft,Ke],wG=s=>VG.find(M_(s)),_b=()=>({translate:0,scale:1,origin:0,originPoint:0}),hn=()=>({x:_b(),y:_b()}),xb=()=>({min:0,max:0}),Qt=()=>({x:xb(),y:xb()}),EG=new WeakMap;function El(s){return s!==null&&typeof s=="object"&&typeof s.start=="function"}function Io(s){return typeof s=="string"||Array.isArray(s)}const Ap=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Sp=["initial",...Ap];function Nl(s){return El(s.animate)||Sp.some(n=>Io(s[n]))}function N_(s){return!!(Nl(s)||s.variants)}function NG(s,n,i){for(const l in n){const p=n[l],m=i[l];if(oe(p))s.addValue(l,p);else if(oe(m))s.addValue(l,fn(p,{owner:s}));else if(m!==p)if(s.hasValue(l)){const d=s.getValue(l);d.liveStyle===!0?d.jump(p):d.hasAnimated||d.set(p)}else{const d=s.getStaticValue(l);s.addValue(l,fn(d!==void 0?d:p,{owner:s}))}}for(const l in i)n[l]===void 0&&s.removeValue(l);return n}const Ju={current:null},q_={current:!1},qG=typeof window<"u";function CG(){if(q_.current=!0,!!qG)if(window.matchMedia){const s=window.matchMedia("(prefers-reduced-motion)"),n=()=>Ju.current=s.matches;s.addEventListener("change",n),n()}else Ju.current=!1}const kb=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let jl={};function C_(s){jl=s}function DG(){return jl}class OG{scrapeMotionValuesFromProps(n,i,l){return{}}constructor({parent:n,props:i,presenceContext:l,reducedMotionConfig:p,skipAnimations:m,blockInitialAnimation:d,visualState:h},f={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=xp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const G=ce.now();this.renderScheduledAt<G&&(this.renderScheduledAt=G,wt.render(this.render,!1,!0))};const{latestValues:b,renderState:x}=h;this.latestValues=b,this.baseTarget={...b},this.initialValues=i.initial?{...b}:{},this.renderState=x,this.parent=n,this.props=i,this.presenceContext=l,this.depth=n?n.depth+1:0,this.reducedMotionConfig=p,this.skipAnimationsConfig=m,this.options=f,this.blockInitialAnimation=!!d,this.isControllingVariants=Nl(i),this.isVariantNode=N_(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:k,...y}=this.scrapeMotionValuesFromProps(i,{},this);for(const G in y){const M=y[G];b[G]!==void 0&&oe(M)&&M.set(b[G])}}mount(n){var i,l;if(this.hasBeenMounted)for(const p in this.initialValues)(i=this.values.get(p))==null||i.jump(this.initialValues[p]),this.latestValues[p]=this.initialValues[p];this.current=n,EG.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((p,m)=>this.bindToMotionValue(m,p)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(q_.current||CG(),this.shouldReduceMotion=Ju.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(l=this.parent)==null||l.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var n;this.projection&&this.projection.unmount(),$a(this.notifyUpdate),$a(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(n=this.parent)==null||n.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const l=this.features[i];l&&(l.unmount(),l.isMounted=!1)}this.current=null}addChild(n){this.children.add(n),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(n)}removeChild(n){this.children.delete(n),this.enteringChildren&&this.enteringChildren.delete(n)}bindToMotionValue(n,i){if(this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)(),i.accelerate&&b_.has(n)&&this.current instanceof HTMLElement){const{factory:d,keyframes:h,times:f,ease:b,duration:x}=i.accelerate,k=new g_({element:this.current,name:n,keyframes:h,times:f,ease:b,duration:Se(x)}),y=d(k);this.valueSubscriptions.set(n,()=>{y(),k.cancel()});return}const l=kn.has(n);l&&this.onBindTransform&&this.onBindTransform();const p=i.on("change",d=>{this.latestValues[n]=d,this.props.onUpdate&&wt.preRender(this.notifyUpdate),l&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let m;typeof window<"u"&&window.MotionCheckAppearSync&&(m=window.MotionCheckAppearSync(this,n,i)),this.valueSubscriptions.set(n,()=>{p(),m&&m()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in jl){const i=jl[n];if(!i)continue;const{isEnabled:l,Feature:p}=i;if(!this.features[n]&&p&&l(this.props)&&(this.features[n]=new p(this)),this.features[n]){const m=this.features[n];m.isMounted?m.update():(m.mount(),m.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Qt()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,i){this.latestValues[n]=i}update(n,i){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let l=0;l<kb.length;l++){const p=kb[l];this.propEventSubscriptions[p]&&(this.propEventSubscriptions[p](),delete this.propEventSubscriptions[p]);const m="on"+p,d=n[m];d&&(this.propEventSubscriptions[p]=this.on(p,d))}this.prevMotionValues=NG(this,this.scrapeMotionValuesFromProps(n,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(n),()=>i.variantChildren.delete(n)}addValue(n,i){const l=this.values.get(n);i!==l&&(l&&this.removeValue(n),this.bindToMotionValue(n,i),this.values.set(n,i),this.latestValues[n]=i.get())}removeValue(n){this.values.delete(n);const i=this.valueSubscriptions.get(n);i&&(i(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,i){if(this.props.values&&this.props.values[n])return this.props.values[n];let l=this.values.get(n);return l===void 0&&i!==void 0&&(l=fn(i===null?void 0:i,{owner:this}),this.addValue(n,l)),l}readValue(n,i){let l=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:this.getBaseTargetFromProps(this.props,n)??this.readValueFromInstance(this.current,n,this.options);return l!=null&&(typeof l=="string"&&(qf(l)||Df(l))?l=parseFloat(l):!wG(l)&&Ke.test(i)&&(l=A_(n,i)),this.setBaseTarget(n,oe(l)?l.get():l)),oe(l)?l.get():l}setBaseTarget(n,i){this.baseTarget[n]=i}getBaseTarget(n){var m;const{initial:i}=this.props;let l;if(typeof i=="string"||typeof i=="object"){const d=Gp(this.props,i,(m=this.presenceContext)==null?void 0:m.custom);d&&(l=d[n])}if(i&&l!==void 0)return l;const p=this.getBaseTargetFromProps(this.props,n);return p!==void 0&&!oe(p)?p:this.initialValues[n]!==void 0&&l===void 0?void 0:this.baseTarget[n]}on(n,i){return this.events[n]||(this.events[n]=new up),this.events[n].add(i)}notify(n,...i){this.events[n]&&this.events[n].notify(...i)}scheduleRenderMicrotask(){Mp.render(this.render)}}class D_ extends OG{constructor(){super(...arguments),this.KeyframeResolver=pG}sortInstanceNodePosition(n,i){return n.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(n,i){const l=n.style;return l?l[i]:void 0}removeValueFromRenderState(n,{vars:i,style:l}){delete i[n],delete l[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;oe(n)&&(this.childSubscription=n.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}class Wa{constructor(n){this.isMounted=!1,this.node=n}update(){}}function O_({top:s,left:n,right:i,bottom:l}){return{x:{min:n,max:i},y:{min:s,max:l}}}function RG({x:s,y:n}){return{top:n.min,right:s.max,bottom:n.max,left:s.min}}function HG(s,n){if(!n)return s;const i=n({x:s.left,y:s.top}),l=n({x:s.right,y:s.bottom});return{top:i.y,left:i.x,bottom:l.y,right:l.x}}function hu(s){return s===void 0||s===1}function $u({scale:s,scaleX:n,scaleY:i}){return!hu(s)||!hu(n)||!hu(i)}function ys(s){return $u(s)||R_(s)||s.z||s.rotate||s.rotateX||s.rotateY||s.skewX||s.skewY}function R_(s){return yb(s.x)||yb(s.y)}function yb(s){return s&&s!=="0%"}function Al(s,n,i){const l=s-i,p=n*l;return i+p}function Gb(s,n,i,l,p){return p!==void 0&&(s=Al(s,p,l)),Al(s,i,l)+n}function Wu(s,n=0,i=1,l,p){s.min=Gb(s.min,n,i,l,p),s.max=Gb(s.max,n,i,l,p)}function H_(s,{x:n,y:i}){Wu(s.x,n.translate,n.scale,n.originPoint),Wu(s.y,i.translate,i.scale,i.originPoint)}const vb=.999999999999,Mb=1.0000000000001;function zG(s,n,i,l=!1){var h;const p=i.length;if(!p)return;n.x=n.y=1;let m,d;for(let f=0;f<p;f++){m=i[f],d=m.projectionDelta;const{visualElement:b}=m.options;b&&b.props.style&&b.props.style.display==="contents"||(l&&m.options.layoutScroll&&m.scroll&&m!==m.root&&(We(s.x,-m.scroll.offset.x),We(s.y,-m.scroll.offset.y)),d&&(n.x*=d.x.scale,n.y*=d.y.scale,H_(s,d)),l&&ys(m.latestValues)&&ml(s,m.latestValues,(h=m.layout)==null?void 0:h.layoutBox))}n.x<Mb&&n.x>vb&&(n.x=1),n.y<Mb&&n.y>vb&&(n.y=1)}function We(s,n){s.min+=n,s.max+=n}function Tb(s,n,i,l,p=.5){const m=Vt(s.min,s.max,p);Wu(s,n,i,m,l)}function jb(s,n){return typeof s=="string"?parseFloat(s)/100*(n.max-n.min):s}function ml(s,n,i){const l=i??s;Tb(s.x,jb(n.x,l.x),n.scaleX,n.scale,n.originX),Tb(s.y,jb(n.y,l.y),n.scaleY,n.scale,n.originY)}function z_(s,n){return O_(HG(s.getBoundingClientRect(),n))}function LG(s,n,i){const l=z_(s,i),{scroll:p}=n;return p&&(We(l.x,p.offset.x),We(l.y,p.offset.y)),l}const BG={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},UG=xn.length;function PG(s,n,i){let l="",p=!0;for(let d=0;d<UG;d++){const h=xn[d],f=s[h];if(f===void 0)continue;let b=!0;if(typeof f=="number")b=f===(h.startsWith("scale")?1:0);else{const x=parseFloat(f);b=h.startsWith("scale")?x===1:x===0}if(!b||i){const x=Qu(f,Tl[h]);if(!b){p=!1;const k=BG[h]||h;l+=`${k}(${x}) `}i&&(n[h]=x)}}const m=s.pathRotation;return m&&(p=!1,l+=`rotate(${Qu(m,Tl.pathRotation)}) `),l=l.trim(),i?l=i(n,p?"":l):p&&(l="none"),l}function Ip(s,n,i){const{style:l,vars:p,transformOrigin:m}=s;let d=!1,h=!1;for(const f in n){const b=n[f];if(kn.has(f)){d=!0;continue}else if(Jf(f)){p[f]=b;continue}else{const x=Qu(b,Tl[f]);f.startsWith("origin")?(h=!0,m[f]=x):l[f]=x}}if(n.transform||(d||i?l.transform=PG(n,s.transform,i):l.transform&&(l.transform="none")),h){const{originX:f="50%",originY:b="50%",originZ:x=0}=m;l.transformOrigin=`${f} ${b} ${x}`}}function L_(s,{style:n,vars:i},l,p){const m=s.style;let d;for(d in n)m[d]=n[d];p==null||p.applyProjectionStyles(m,l);for(d in i)m.setProperty(d,i[d])}function Ab(s,n){return n.max===n.min?0:s/(n.max-n.min)*100}const xo={correct:(s,n)=>{if(!n.target)return s;if(typeof s=="string")if(et.test(s))s=parseFloat(s);else return s;const i=Ab(s,n.target.x),l=Ab(s,n.target.y);return`${i}% ${l}%`}},YG={correct:(s,{treeScale:n,projectionDelta:i})=>{const l=s,p=Ke.parse(s);if(p.length>5)return l;const m=Ke.createTransformer(s),d=typeof p[0]!="number"?1:0,h=i.x.scale*n.x,f=i.y.scale*n.y;p[0+d]/=h,p[1+d]/=f;const b=Vt(h,f,.5);return typeof p[2+d]=="number"&&(p[2+d]/=b),typeof p[3+d]=="number"&&(p[3+d]/=b),m(p)}},tp={borderRadius:{...xo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:xo,borderTopRightRadius:xo,borderBottomLeftRadius:xo,borderBottomRightRadius:xo,boxShadow:YG};function B_(s,{layout:n,layoutId:i}){return kn.has(s)||s.startsWith("origin")||(n||i!==void 0)&&(!!tp[s]||s==="opacity")}function Vp(s,n,i){var d;const l=s.style,p=n==null?void 0:n.style,m={};if(!l)return m;for(const h in l)(oe(l[h])||p&&oe(p[h])||B_(h,s)||((d=i==null?void 0:i.getValue(h))==null?void 0:d.liveStyle)!==void 0)&&(m[h]=l[h]);return m}function XG(s){return window.getComputedStyle(s)}class KG extends D_{constructor(){super(...arguments),this.type="html",this.renderInstance=L_}readValueFromInstance(n,i){var l;if(kn.has(i))return(l=this.projection)!=null&&l.isProjecting?Hu(i):my(n,i);{const p=XG(n),m=(Jf(i)?p.getPropertyValue(i):p[i])||0;return typeof m=="string"?m.trim():m}}measureInstanceViewportBox(n,{transformPagePoint:i}){return z_(n,i)}build(n,i,l){Ip(n,i,l.transformTemplate)}scrapeMotionValuesFromProps(n,i,l){return Vp(n,i,l)}}const FG={offset:"stroke-dashoffset",array:"stroke-dasharray"},ZG={offset:"strokeDashoffset",array:"strokeDasharray"};function QG(s,n,i=1,l=0,p=!0){s.pathLength=1;const m=p?FG:ZG;s[m.offset]=`${-l}`,s[m.array]=`${n} ${i}`}const JG=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function U_(s,{attrX:n,attrY:i,attrScale:l,pathLength:p,pathSpacing:m=1,pathOffset:d=0,...h},f,b,x){if(Ip(s,h,b),f){s.style.viewBox&&(s.attrs.viewBox=s.style.viewBox);return}s.attrs=s.style,s.style={};const{attrs:k,style:y}=s;k.transform&&(y.transform=k.transform,delete k.transform),(y.transform||k.transformOrigin)&&(y.transformOrigin=k.transformOrigin??"50% 50%",delete k.transformOrigin),y.transform&&(y.transformBox=(x==null?void 0:x.transformBox)??"fill-box",delete k.transformBox);for(const G of JG)k[G]!==void 0&&(y[G]=k[G],delete k[G]);n!==void 0&&(k.x=n),i!==void 0&&(k.y=i),l!==void 0&&(k.scale=l),p!==void 0&&QG(k,p,m,d,!1)}const P_=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Y_=s=>typeof s=="string"&&s.toLowerCase()==="svg";function $G(s,n,i,l){L_(s,n,void 0,l);for(const p in n.attrs)s.setAttribute(P_.has(p)?p:vp(p),n.attrs[p])}function X_(s,n,i){const l=Vp(s,n,i);for(const p in s)if(oe(s[p])||oe(n[p])){const m=xn.indexOf(p)!==-1?"attr"+p.charAt(0).toUpperCase()+p.substring(1):p;l[m]=s[p]}return l}class WG extends D_{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Qt}getBaseTargetFromProps(n,i){return n[i]}readValueFromInstance(n,i){if(kn.has(i)){const l=j_(i);return l&&l.default||0}return i=P_.has(i)?i:vp(i),n.getAttribute(i)}scrapeMotionValuesFromProps(n,i,l){return X_(n,i,l)}build(n,i,l){U_(n,i,this.isSVGTag,l.transformTemplate,l.style)}renderInstance(n,i,l,p){$G(n,i,l,p)}mount(n){this.isSVGTag=Y_(n.tagName),super.mount(n)}}const tv=Sp.length;function K_(s){if(!s)return;if(!s.isControllingVariants){const i=s.parent?K_(s.parent)||{}:{};return s.props.initial!==void 0&&(i.initial=s.props.initial),i}const n={};for(let i=0;i<tv;i++){const l=Sp[i],p=s.props[l];(Io(p)||p===!1)&&(n[l]=p)}return n}function F_(s,n){if(!Array.isArray(n))return!1;const i=n.length;if(i!==s.length)return!1;for(let l=0;l<i;l++)if(n[l]!==s[l])return!1;return!0}const ev=[...Ap].reverse(),av=Ap.length;function sv(s){return n=>Promise.all(n.map(({animation:i,options:l})=>tG(s,i,l)))}function nv(s){let n=sv(s),i=Sb(),l=!0,p=!1;const m=b=>(x,k)=>{var G;const y=Ts(s,k,b==="exit"?(G=s.presenceContext)==null?void 0:G.custom:void 0);if(y){const{transition:M,transitionEnd:I,...A}=y;x={...x,...A,...I}}return x};function d(b){n=b(s)}function h(b){const{props:x}=s,k=K_(s.parent)||{},y=[],G=new Set;let M={},I=1/0;for(let N=0;N<av;N++){const K=ev[N],R=i[K],z=x[K]!==void 0?x[K]:k[K],L=Io(z),O=K===b?R.isActive:null;O===!1&&(I=N);let q=z===k[K]&&z!==x[K]&&L;if(q&&(l||p)&&s.manuallyAnimateOnMount&&(q=!1),R.protectedKeys={...M},!R.isActive&&O===null||!z&&!R.prevProp||El(z)||typeof z=="boolean")continue;if(K==="exit"&&R.isActive&&O!==!0){R.prevResolvedValues&&(M={...M,...R.prevResolvedValues});continue}const X=ov(R.prevProp,z);let F=X||K===b&&R.isActive&&!q&&L||N>I&&L,Z=!1;const it=Array.isArray(z)?z:[z];let pt=it.reduce(m(K),{});O===!1&&(pt={});const{prevResolvedValues:Nt={}}=R,qt={...Nt,...pt},Et=$=>{F=!0,G.has($)&&(Z=!0,G.delete($)),R.needsAnimating[$]=!0;const ct=s.getValue($);ct&&(ct.liveStyle=!1)};for(const $ in qt){const ct=pt[$],mt=Nt[$];if(M.hasOwnProperty($))continue;let T=!1;Yu(ct)&&Yu(mt)?T=!F_(ct,mt)||X:T=ct!==mt,T?ct!=null?Et($):G.add($):ct!==void 0&&G.has($)?Et($):R.protectedKeys[$]=!0}R.prevProp=z,R.prevResolvedValues=pt,R.isActive&&(M={...M,...pt}),(l||p)&&s.blockInitialAnimation&&(F=!1);const D=q&&X;F&&(!D||Z)&&y.push(...it.map($=>{const ct={type:K};if(typeof $=="string"&&(l||p)&&!D&&s.manuallyAnimateOnMount&&s.parent){const{parent:mt}=s,T=Ts(mt,$);if(mt.enteringChildren&&T){const{delayChildren:U}=T.transition||{};ct.delay=f_(mt.enteringChildren,s,U)}}return{animation:$,options:ct}}))}if(G.size){const N={};if(typeof x.initial!="boolean"){const K=Ts(s,Array.isArray(x.initial)?x.initial[0]:x.initial);K&&K.transition&&(N.transition=K.transition)}G.forEach(K=>{const R=s.getBaseTarget(K),z=s.getValue(K);z&&(z.liveStyle=!0),N[K]=R??null}),y.push({animation:N})}let A=!!y.length;return l&&(x.initial===!1||x.initial===x.animate)&&!s.manuallyAnimateOnMount&&(A=!1),l=!1,p=!1,A?n(y):Promise.resolve()}function f(b,x){var y;if(i[b].isActive===x)return Promise.resolve();(y=s.variantChildren)==null||y.forEach(G=>{var M;return(M=G.animationState)==null?void 0:M.setActive(b,x)}),i[b].isActive=x;const k=h(b);for(const G in i)i[G].protectedKeys={};return k}return{animateChanges:h,setActive:f,setAnimateFunction:d,getState:()=>i,reset:()=>{i=Sb(),p=!0}}}function ov(s,n){return typeof n=="string"?n!==s:Array.isArray(n)?!F_(n,s):!1}function ks(s=!1){return{isActive:s,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Sb(){return{animate:ks(!0),whileInView:ks(),whileHover:ks(),whileTap:ks(),whileDrag:ks(),whileFocus:ks(),exit:ks()}}function ep(s,n){s.min=n.min,s.max=n.max}function Ye(s,n){ep(s.x,n.x),ep(s.y,n.y)}function Ib(s,n){s.translate=n.translate,s.scale=n.scale,s.originPoint=n.originPoint,s.origin=n.origin}const Z_=1e-4,iv=1-Z_,lv=1+Z_,Q_=.01,rv=0-Q_,cv=0+Q_;function ue(s){return s.max-s.min}function uv(s,n,i){return Math.abs(s-n)<=i}function Vb(s,n,i,l=.5){s.origin=l,s.originPoint=Vt(n.min,n.max,s.origin),s.scale=ue(i)/ue(n),s.translate=Vt(i.min,i.max,s.origin)-s.originPoint,(s.scale>=iv&&s.scale<=lv||isNaN(s.scale))&&(s.scale=1),(s.translate>=rv&&s.translate<=cv||isNaN(s.translate))&&(s.translate=0)}function To(s,n,i,l){Vb(s.x,n.x,i.x,l?l.originX:void 0),Vb(s.y,n.y,i.y,l?l.originY:void 0)}function wb(s,n,i,l=0){const p=l?Vt(i.min,i.max,l):i.min;s.min=p+n.min,s.max=s.min+ue(n)}function pv(s,n,i,l){wb(s.x,n.x,i.x,l==null?void 0:l.x),wb(s.y,n.y,i.y,l==null?void 0:l.y)}function Eb(s,n,i,l=0){const p=l?Vt(i.min,i.max,l):i.min;s.min=n.min-p,s.max=s.min+ue(n)}function Sl(s,n,i,l){Eb(s.x,n.x,i.x,l==null?void 0:l.x),Eb(s.y,n.y,i.y,l==null?void 0:l.y)}function Nb(s,n,i,l,p){return s-=n,s=Al(s,1/i,l),p!==void 0&&(s=Al(s,1/p,l)),s}function dv(s,n=0,i=1,l=.5,p,m=s,d=s){if(ta.test(n)&&(n=parseFloat(n),n=Vt(d.min,d.max,n/100)-d.min),typeof n!="number")return;let h=Vt(m.min,m.max,l);s===m&&(h-=n),s.min=Nb(s.min,n,i,h,p),s.max=Nb(s.max,n,i,h,p)}function qb(s,n,[i,l,p],m,d){dv(s,n[i],n[l],n[p],n.scale,m,d)}const mv=["x","scaleX","originX"],gv=["y","scaleY","originY"];function Cb(s,n,i,l){qb(s.x,n,mv,i?i.x:void 0,l?l.x:void 0),qb(s.y,n,gv,i?i.y:void 0,l?l.y:void 0)}function Db(s){return s.translate===0&&s.scale===1}function J_(s){return Db(s.x)&&Db(s.y)}function Ob(s,n){return s.min===n.min&&s.max===n.max}function hv(s,n){return Ob(s.x,n.x)&&Ob(s.y,n.y)}function Rb(s,n){return Math.round(s.min)===Math.round(n.min)&&Math.round(s.max)===Math.round(n.max)}function $_(s,n){return Rb(s.x,n.x)&&Rb(s.y,n.y)}function Hb(s){return ue(s.x)/ue(s.y)}function zb(s,n){return s.translate===n.translate&&s.scale===n.scale&&s.originPoint===n.originPoint}function $e(s){return[s("x"),s("y")]}function bv(s,n,i){let l="";const p=s.x.translate/n.x,m=s.y.translate/n.y,d=(i==null?void 0:i.z)||0;if((p||m||d)&&(l=`translate3d(${p}px, ${m}px, ${d}px) `),(n.x!==1||n.y!==1)&&(l+=`scale(${1/n.x}, ${1/n.y}) `),i){const{transformPerspective:b,rotate:x,pathRotation:k,rotateX:y,rotateY:G,skewX:M,skewY:I}=i;b&&(l=`perspective(${b}px) ${l}`),x&&(l+=`rotate(${x}deg) `),k&&(l+=`rotate(${k}deg) `),y&&(l+=`rotateX(${y}deg) `),G&&(l+=`rotateY(${G}deg) `),M&&(l+=`skewX(${M}deg) `),I&&(l+=`skewY(${I}deg) `)}const h=s.x.scale*n.x,f=s.y.scale*n.y;return(h!==1||f!==1)&&(l+=`scale(${h}, ${f})`),l||"none"}const W_=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],fv=W_.length,Lb=s=>typeof s=="string"?parseFloat(s):s,Bb=s=>typeof s=="number"||et.test(s);function _v(s,n,i,l,p,m){p?(s.opacity=Vt(0,i.opacity??1,xv(l)),s.opacityExit=Vt(n.opacity??1,0,kv(l))):m&&(s.opacity=Vt(n.opacity??1,i.opacity??1,l));for(let d=0;d<fv;d++){const h=W_[d];let f=Ub(n,h),b=Ub(i,h);if(f===void 0&&b===void 0)continue;f||(f=0),b||(b=0),f===0||b===0||Bb(f)===Bb(b)?(s[h]=Math.max(Vt(Lb(f),Lb(b),l),0),(ta.test(b)||ta.test(f))&&(s[h]+="%")):s[h]=b}(n.rotate||i.rotate)&&(s.rotate=Vt(n.rotate||0,i.rotate||0,l))}function Ub(s,n){return s[n]!==void 0?s[n]:s.borderRadius}const xv=t0(0,.5,Yf),kv=t0(.5,.95,Le);function t0(s,n,i){return l=>l<s?0:l>n?1:i(Ao(s,n,l))}function yv(s,n,i){const l=oe(s)?s:fn(s);return l.start(yp("",l,n,i)),l.animation}function Vo(s,n,i,l={passive:!0}){return s.addEventListener(n,i,l),()=>s.removeEventListener(n,i)}const Gv=(s,n)=>s.depth-n.depth;class vv{constructor(){this.children=[],this.isDirty=!1}add(n){rp(this.children,n),this.isDirty=!0}remove(n){kl(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(Gv),this.isDirty=!1,this.children.forEach(n)}}function Mv(s,n){const i=ce.now(),l=({timestamp:p})=>{const m=p-i;m>=n&&($a(l),s(m-n))};return wt.setup(l,!0),()=>$a(l)}function gl(s){return oe(s)?s.get():s}class Tv{constructor(){this.members=[]}add(n){rp(this.members,n);for(let i=this.members.length-1;i>=0;i--){const l=this.members[i];if(l===n||l===this.lead||l===this.prevLead)continue;const p=l.instance;(!p||p.isConnected===!1)&&!l.snapshot&&(kl(this.members,l),l.unmount())}n.scheduleRender()}remove(n){if(kl(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(n){var i;for(let l=this.members.indexOf(n)-1;l>=0;l--){const p=this.members[l];if(p.isPresent!==!1&&((i=p.instance)==null?void 0:i.isConnected)!==!1)return this.promote(p),!0}return!1}promote(n,i){var p;const l=this.lead;if(n!==l&&(this.prevLead=l,this.lead=n,n.show(),l)){l.updateSnapshot(),n.scheduleRender();const{layoutDependency:m}=l.options,{layoutDependency:d}=n.options;(m===void 0||m!==d)&&(n.resumeFrom=l,i&&(l.preserveOpacity=!0),l.snapshot&&(n.snapshot=l.snapshot,n.snapshot.latestValues=l.animationValues||l.latestValues),(p=n.root)!=null&&p.isUpdating&&(n.isLayoutDirty=!0)),n.options.crossfade===!1&&l.hide()}}exitAnimationComplete(){this.members.forEach(n=>{var i,l,p,m,d;(l=(i=n.options).onExitComplete)==null||l.call(i),(d=(p=n.resumingFrom)==null?void 0:(m=p.options).onExitComplete)==null||d.call(m)})}scheduleRender(){this.members.forEach(n=>n.instance&&n.scheduleRender(!1))}removeLeadSnapshot(){var n;(n=this.lead)!=null&&n.snapshot&&(this.lead.snapshot=void 0)}}const hl={hasAnimatedSinceResize:!0,hasEverUpdated:!1},bu=["","X","Y","Z"],jv=1e3;let Av=0;function fu(s,n,i,l){const{latestValues:p}=n;p[s]&&(i[s]=p[s],n.setStaticValue(s,0),l&&(l[s]=0))}function e0(s){if(s.hasCheckedOptimisedAppear=!0,s.root===s)return;const{visualElement:n}=s.options;if(!n)return;const i=G_(n);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:p,layoutId:m}=s.options;window.MotionCancelOptimisedAnimation(i,"transform",wt,!(p||m))}const{parent:l}=s;l&&!l.hasCheckedOptimisedAppear&&e0(l)}function a0({attachResizeListener:s,defaultParent:n,measureScroll:i,checkIsScrollRoot:l,resetTransform:p}){return class{constructor(d={},h=n==null?void 0:n()){this.id=Av++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(Vv),this.nodes.forEach(Dv),this.nodes.forEach(Ov),this.nodes.forEach(wv)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let f=0;f<this.path.length;f++)this.path[f].shouldResetTransform=!0;this.root===this&&(this.nodes=new vv)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new up),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const f=this.eventHandlers.get(d);f&&f.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=jp(d)&&!IG(d),this.instance=d;const{layoutId:h,layout:f,visualElement:b}=this.options;if(b&&!b.current&&b.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(f||h)&&(this.isLayoutDirty=!0),s){let x,k=0;const y=()=>this.root.updateBlockedByResize=!1;wt.read(()=>{k=window.innerWidth}),s(d,()=>{const G=window.innerWidth;G!==k&&(k=G,this.root.updateBlockedByResize=!0,x&&x(),x=Mv(y,250),hl.hasAnimatedSinceResize&&(hl.hasAnimatedSinceResize=!1,this.nodes.forEach(Xb)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&b&&(h||f)&&this.addEventListener("didUpdate",({delta:x,hasLayoutChanged:k,hasRelativeLayoutChanged:y,layout:G})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const M=this.options.transition||b.getDefaultTransition()||Bv,{onLayoutAnimationStart:I,onLayoutAnimationComplete:A}=b.getProps(),N=!this.targetLayout||!$_(this.targetLayout,G),K=!k&&y;if(this.options.layoutRoot||this.resumeFrom||K||k&&(N||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const R={...kp(M,"layout"),onPlay:I,onComplete:A};(b.shouldReduceMotion||this.options.layoutRoot)&&(R.delay=0,R.type=!1),this.startAnimation(R),this.setAnimationOrigin(x,K,R.path)}else k||Xb(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=G})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),$a(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Rv),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&e0(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let x=0;x<this.path.length;x++){const k=this.path[x];k.shouldResetTransform=!0,(typeof k.latestValues.x=="string"||typeof k.latestValues.y=="string")&&(k.isLayoutDirty=!0),k.updateScroll("snapshot"),k.options.layoutRoot&&k.willUpdate(!1)}const{layoutId:h,layout:f}=this.options;if(h===void 0&&!f)return;const b=this.getTransformTemplate();this.prevTransformTemplateValue=b?b(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const f=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),f&&this.nodes.forEach(Nv),this.nodes.forEach(Pb);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Yb);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(qv),this.nodes.forEach(Cv),this.nodes.forEach(Sv),this.nodes.forEach(Iv)):this.nodes.forEach(Yb),this.clearAllSnapshots();const h=ce.now();ne.delta=ea(0,1e3/60,h-ne.timestamp),ne.timestamp=h,ne.isProcessing=!0,ru.update.process(ne),ru.preRender.process(ne),ru.render.process(ne),ne.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Mp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Ev),this.sharedNodes.forEach(Hv)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,wt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){wt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ue(this.snapshot.measuredBox.x)&&!ue(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let f=0;f<this.path.length;f++)this.path[f].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=Qt()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&this.instance){const f=l(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:f,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:f}}}resetTransform(){if(!p)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!J_(this.projectionDelta),f=this.getTransformTemplate(),b=f?f(this.latestValues,""):void 0,x=b!==this.prevTransformTemplateValue;d&&this.instance&&(h||ys(this.latestValues)||x)&&(p(this.instance,b),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let f=this.removeElementScroll(h);return d&&(f=this.removeTransform(f)),Uv(f),{animationId:this.root.animationId,measuredBox:h,layoutBox:f,latestValues:{},source:this.id}}measurePageBox(){var b;const{visualElement:d}=this.options;if(!d)return Qt();const h=d.measureViewportBox();if(!(((b=this.scroll)==null?void 0:b.wasRoot)||this.path.some(Pv))){const{scroll:x}=this.root;x&&(We(h.x,x.offset.x),We(h.y,x.offset.y))}return h}removeElementScroll(d){var f;const h=Qt();if(Ye(h,d),(f=this.scroll)!=null&&f.wasRoot)return h;for(let b=0;b<this.path.length;b++){const x=this.path[b],{scroll:k,options:y}=x;x!==this.root&&k&&y.layoutScroll&&(k.wasRoot&&Ye(h,d),We(h.x,k.offset.x),We(h.y,k.offset.y))}return h}applyTransform(d,h=!1,f){var x,k;const b=f||Qt();Ye(b,d);for(let y=0;y<this.path.length;y++){const G=this.path[y];!h&&G.options.layoutScroll&&G.scroll&&G!==G.root&&(We(b.x,-G.scroll.offset.x),We(b.y,-G.scroll.offset.y)),ys(G.latestValues)&&ml(b,G.latestValues,(x=G.layout)==null?void 0:x.layoutBox)}return ys(this.latestValues)&&ml(b,this.latestValues,(k=this.layout)==null?void 0:k.layoutBox),b}removeTransform(d){var f;const h=Qt();Ye(h,d);for(let b=0;b<this.path.length;b++){const x=this.path[b];if(!ys(x.latestValues))continue;let k;x.instance&&($u(x.latestValues)&&x.updateSnapshot(),k=Qt(),Ye(k,x.measurePageBox())),Cb(h,x.latestValues,(f=x.snapshot)==null?void 0:f.layoutBox,k)}return ys(this.latestValues)&&Cb(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ne.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var G;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const f=!!this.resumingFrom||this!==h;if(!(d||f&&this.isSharedProjectionDirty||this.isProjectionDirty||(G=this.parent)!=null&&G.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:x,layoutId:k}=this.options;if(!this.layout||!(x||k))return;this.resolvedRelativeTargetAt=ne.timestamp;const y=this.getClosestProjectingParent();y&&this.linkedParentVersion!==y.layoutVersion&&!y.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&y&&y.layout?this.createRelativeTarget(y,this.layout.layoutBox,y.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Qt(),this.targetWithTransforms=Qt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),pv(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Ye(this.target,this.layout.layoutBox),H_(this.target,this.targetDelta)):Ye(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&y&&!!y.resumingFrom==!!this.resumingFrom&&!y.options.layoutScroll&&y.target&&this.animationProgress!==1?this.createRelativeTarget(y,this.target,y.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||$u(this.parent.latestValues)||R_(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,h,f){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Qt(),this.relativeTargetOrigin=Qt(),Sl(this.relativeTargetOrigin,h,f,this.options.layoutAnchor||void 0),Ye(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var M;const d=this.getLead(),h=!!this.resumingFrom||this!==d;let f=!0;if((this.isProjectionDirty||(M=this.parent)!=null&&M.isProjectionDirty)&&(f=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(f=!1),this.resolvedRelativeTargetAt===ne.timestamp&&(f=!1),f)return;const{layout:b,layoutId:x}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(b||x))return;Ye(this.layoutCorrected,this.layout.layoutBox);const k=this.treeScale.x,y=this.treeScale.y;zG(this.layoutCorrected,this.treeScale,this.path,h),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=Qt());const{target:G}=d;if(!G){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Ib(this.prevProjectionDelta.x,this.projectionDelta.x),Ib(this.prevProjectionDelta.y,this.projectionDelta.y)),To(this.projectionDelta,this.layoutCorrected,G,this.latestValues),(this.treeScale.x!==k||this.treeScale.y!==y||!zb(this.projectionDelta.x,this.prevProjectionDelta.x)||!zb(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",G))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),d){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=hn(),this.projectionDelta=hn(),this.projectionDeltaWithTransform=hn()}setAnimationOrigin(d,h=!1,f){const b=this.snapshot,x=b?b.latestValues:{},k={...this.latestValues},y=hn();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const G=Qt(),M=b?b.source:void 0,I=this.layout?this.layout.source:void 0,A=M!==I,N=this.getStack(),K=!N||N.members.length<=1,R=!!(A&&!K&&this.options.crossfade===!0&&!this.path.some(Lv));this.animationProgress=0;let z;const L=f==null?void 0:f.interpolateProjection(d);this.mixTargetDelta=O=>{const q=O/1e3,X=L==null?void 0:L(q);X?(y.x.translate=X.x,y.x.scale=Vt(d.x.scale,1,q),y.x.origin=d.x.origin,y.x.originPoint=d.x.originPoint,y.y.translate=X.y,y.y.scale=Vt(d.y.scale,1,q),y.y.origin=d.y.origin,y.y.originPoint=d.y.originPoint):(Kb(y.x,d.x,q),Kb(y.y,d.y,q)),this.setTargetDelta(y),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Sl(G,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),zv(this.relativeTarget,this.relativeTargetOrigin,G,q),z&&hv(this.relativeTarget,z)&&(this.isProjectionDirty=!1),z||(z=Qt()),Ye(z,this.relativeTarget)),A&&(this.animationValues=k,_v(k,x,this.latestValues,q,R,K)),X&&X.rotate!==void 0&&(this.animationValues||(this.animationValues=k),this.animationValues.pathRotation=X.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=q},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var h,f,b;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(b=(f=this.resumingFrom)==null?void 0:f.currentAnimation)==null||b.stop(),this.pendingAnimation&&($a(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=wt.update(()=>{hl.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=fn(0)),this.motionValue.jump(0,!1),this.currentAnimation=yv(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:x=>{this.mixTargetDelta(x),d.onUpdate&&d.onUpdate(x)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(jv),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:f,layout:b,latestValues:x}=d;if(!(!h||!f||!b)){if(this!==d&&this.layout&&b&&s0(this.options.animationType,this.layout.layoutBox,b.layoutBox)){f=this.target||Qt();const k=ue(this.layout.layoutBox.x);f.x.min=d.target.x.min,f.x.max=f.x.min+k;const y=ue(this.layout.layoutBox.y);f.y.min=d.target.y.min,f.y.max=f.y.min+y}Ye(h,f),ml(h,x),To(this.projectionDeltaWithTransform,this.layoutCorrected,h,x)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new Tv),this.sharedNodes.get(d).add(h);const b=h.options.initialPromotionConfig;h.promote({transition:b?b.transition:void 0,preserveFollowOpacity:b&&b.shouldPreserveFollowOpacity?b.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var h;const{layoutId:d}=this.options;return d?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:d}=this.options;return d?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:f}={}){const b=this.getStack();b&&b.promote(this,f),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:f}=d;if((f.z||f.rotate||f.rotateX||f.rotateY||f.rotateZ||f.skewX||f.skewY)&&(h=!0),!h)return;const b={};f.z&&fu("z",d,b,this.animationValues);for(let x=0;x<bu.length;x++)fu(`rotate${bu[x]}`,d,b,this.animationValues),fu(`skew${bu[x]}`,d,b,this.animationValues);d.render();for(const x in b)d.setStaticValue(x,b[x]),this.animationValues&&(this.animationValues[x]=b[x]);d.scheduleRender()}applyProjectionStyles(d,h){if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const f=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=gl(h==null?void 0:h.pointerEvents)||"",d.transform=f?f(this.latestValues,""):"none";return}const b=this.getLead();if(!this.projectionDelta||!this.layout||!b.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=gl(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!ys(this.latestValues)&&(d.transform=f?f({},""):"none",this.hasProjected=!1);return}d.visibility="";const x=b.animationValues||b.latestValues;this.applyTransformsToTarget();let k=bv(this.projectionDeltaWithTransform,this.treeScale,x);f&&(k=f(x,k)),d.transform=k;const{x:y,y:G}=this.projectionDelta;d.transformOrigin=`${y.origin*100}% ${G.origin*100}% 0`,b.animationValues?d.opacity=b===this?x.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:x.opacityExit:d.opacity=b===this?x.opacity!==void 0?x.opacity:"":x.opacityExit!==void 0?x.opacityExit:0;for(const M in tp){if(x[M]===void 0)continue;const{correct:I,applyTo:A,isCSSVariable:N}=tp[M],K=k==="none"?x[M]:I(x[M],b);if(A){const R=A.length;for(let z=0;z<R;z++)d[A[z]]=K}else N?this.options.visualElement.renderState.vars[M]=K:d[M]=K}this.options.layoutId&&(d.pointerEvents=b===this?gl(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(Pb),this.root.sharedNodes.clear()}}}function Sv(s){s.updateLayout()}function Iv(s){var i;const n=((i=s.resumeFrom)==null?void 0:i.snapshot)||s.snapshot;if(s.isLead()&&s.layout&&n&&s.hasListeners("didUpdate")){const{layoutBox:l,measuredBox:p}=s.layout,{animationType:m}=s.options,d=n.source!==s.layout.source;if(m==="size")$e(k=>{const y=d?n.measuredBox[k]:n.layoutBox[k],G=ue(y);y.min=l[k].min,y.max=y.min+G});else if(m==="x"||m==="y"){const k=m==="x"?"y":"x";ep(d?n.measuredBox[k]:n.layoutBox[k],l[k])}else s0(m,n.layoutBox,l)&&$e(k=>{const y=d?n.measuredBox[k]:n.layoutBox[k],G=ue(l[k]);y.max=y.min+G,s.relativeTarget&&!s.currentAnimation&&(s.isProjectionDirty=!0,s.relativeTarget[k].max=s.relativeTarget[k].min+G)});const h=hn();To(h,l,n.layoutBox);const f=hn();d?To(f,s.applyTransform(p,!0),n.measuredBox):To(f,l,n.layoutBox);const b=!J_(h);let x=!1;if(!s.resumeFrom){const k=s.getClosestProjectingParent();if(k&&!k.resumeFrom){const{snapshot:y,layout:G}=k;if(y&&G){const M=s.options.layoutAnchor||void 0,I=Qt();Sl(I,n.layoutBox,y.layoutBox,M);const A=Qt();Sl(A,l,G.layoutBox,M),$_(I,A)||(x=!0),k.options.layoutRoot&&(s.relativeTarget=A,s.relativeTargetOrigin=I,s.relativeParent=k)}}}s.notifyListeners("didUpdate",{layout:l,snapshot:n,delta:f,layoutDelta:h,hasLayoutChanged:b,hasRelativeLayoutChanged:x})}else if(s.isLead()){const{onExitComplete:l}=s.options;l&&l()}s.options.transition=void 0}function Vv(s){s.parent&&(s.isProjecting()||(s.isProjectionDirty=s.parent.isProjectionDirty),s.isSharedProjectionDirty||(s.isSharedProjectionDirty=!!(s.isProjectionDirty||s.parent.isProjectionDirty||s.parent.isSharedProjectionDirty)),s.isTransformDirty||(s.isTransformDirty=s.parent.isTransformDirty))}function wv(s){s.isProjectionDirty=s.isSharedProjectionDirty=s.isTransformDirty=!1}function Ev(s){s.clearSnapshot()}function Pb(s){s.clearMeasurements()}function Nv(s){s.isLayoutDirty=!0,s.updateLayout()}function Yb(s){s.isLayoutDirty=!1}function qv(s){s.isAnimationBlocked&&s.layout&&!s.isLayoutDirty&&(s.snapshot=s.layout,s.isLayoutDirty=!0)}function Cv(s){const{visualElement:n}=s.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),s.resetTransform()}function Xb(s){s.finishAnimation(),s.targetDelta=s.relativeTarget=s.target=void 0,s.isProjectionDirty=!0}function Dv(s){s.resolveTargetDelta()}function Ov(s){s.calcProjection()}function Rv(s){s.resetSkewAndRotation()}function Hv(s){s.removeLeadSnapshot()}function Kb(s,n,i){s.translate=Vt(n.translate,0,i),s.scale=Vt(n.scale,1,i),s.origin=n.origin,s.originPoint=n.originPoint}function Fb(s,n,i,l){s.min=Vt(n.min,i.min,l),s.max=Vt(n.max,i.max,l)}function zv(s,n,i,l){Fb(s.x,n.x,i.x,l),Fb(s.y,n.y,i.y,l)}function Lv(s){return s.animationValues&&s.animationValues.opacityExit!==void 0}const Bv={duration:.45,ease:[.4,0,.1,1]},Zb=s=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(s),Qb=Zb("applewebkit/")&&!Zb("chrome/")?Math.round:Le;function Jb(s){s.min=Qb(s.min),s.max=Qb(s.max)}function Uv(s){Jb(s.x),Jb(s.y)}function s0(s,n,i){return s==="position"||s==="preserve-aspect"&&!uv(Hb(n),Hb(i),.2)}function Pv(s){var n;return s!==s.root&&((n=s.scroll)==null?void 0:n.wasRoot)}const Yv=a0({attachResizeListener:(s,n)=>Vo(s,"resize",n),measureScroll:()=>{var s,n;return{x:document.documentElement.scrollLeft||((s=document.body)==null?void 0:s.scrollLeft)||0,y:document.documentElement.scrollTop||((n=document.body)==null?void 0:n.scrollTop)||0}},checkIsScrollRoot:()=>!0}),_u={current:void 0},n0=a0({measureScroll:s=>({x:s.scrollLeft,y:s.scrollTop}),defaultParent:()=>{if(!_u.current){const s=new Yv({});s.mount(window),s.setOptions({layoutScroll:!0}),_u.current=s}return _u.current},resetTransform:(s,n)=>{s.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:s=>window.getComputedStyle(s).position==="fixed"}),wp=Y.createContext({transformPagePoint:s=>s,isStatic:!1,reducedMotion:"never"});function $b(s,n){if(typeof s=="function")return s(n);s!=null&&(s.current=n)}function Xv(...s){return n=>{let i=!1;const l=s.map(p=>{const m=$b(p,n);return!i&&typeof m=="function"&&(i=!0),m});if(i)return()=>{for(let p=0;p<l.length;p++){const m=l[p];typeof m=="function"?m():$b(s[p],null)}}}}function Kv(...s){return Y.useCallback(Xv(...s),s)}class Fv extends Y.Component{getSnapshotBeforeUpdate(n){const i=this.props.childRef.current;if(cl(i)&&n.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const l=i.offsetParent,p=cl(l)&&l.offsetWidth||0,m=cl(l)&&l.offsetHeight||0,d=getComputedStyle(i),h=this.props.sizeRef.current;h.height=parseFloat(d.height),h.width=parseFloat(d.width),h.top=i.offsetTop,h.left=i.offsetLeft,h.right=p-h.width-h.left,h.bottom=m-h.height-h.top,h.direction=d.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function Zv({children:s,isPresent:n,anchorX:i,anchorY:l,root:p,pop:m}){var y;const d=Y.useId(),h=Y.useRef(null),f=Y.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:b}=Y.useContext(wp),x=((y=s.props)==null?void 0:y.ref)??(s==null?void 0:s.ref),k=Kv(h,x);return Y.useInsertionEffect(()=>{const{width:G,height:M,top:I,left:A,right:N,bottom:K,direction:R}=f.current;if(n||m===!1||!h.current||!G||!M)return;const z=R==="rtl",L=i==="left"?z?`right: ${N}`:`left: ${A}`:z?`left: ${A}`:`right: ${N}`,O=l==="bottom"?`bottom: ${K}`:`top: ${I}`;h.current.dataset.motionPopId=d;const q=document.createElement("style");b&&(q.nonce=b);const X=p??document.head;return X.appendChild(q),q.sheet&&q.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${G}px !important;
            height: ${M}px !important;
            ${L}px !important;
            ${O}px !important;
          }
        `),()=>{var F;(F=h.current)==null||F.removeAttribute("data-motion-pop-id"),X.contains(q)&&X.removeChild(q)}},[n]),u.jsx(Fv,{isPresent:n,childRef:h,sizeRef:f,pop:m,children:m===!1?s:Y.cloneElement(s,{ref:k})})}const Qv=({children:s,initial:n,isPresent:i,onExitComplete:l,custom:p,presenceAffectsLayout:m,mode:d,anchorX:h,anchorY:f,root:b})=>{const x=lp(Jv),k=Y.useId();let y=!0,G=Y.useMemo(()=>(y=!1,{id:k,initial:n,isPresent:i,custom:p,onExitComplete:M=>{x.set(M,!0);for(const I of x.values())if(!I)return;l&&l()},register:M=>(x.set(M,!1),()=>x.delete(M))}),[i,x,l]);return m&&y&&(G={...G}),Y.useMemo(()=>{x.forEach((M,I)=>x.set(I,!1))},[i]),Y.useEffect(()=>{!i&&!x.size&&l&&l()},[i]),s=u.jsx(Zv,{pop:d==="popLayout",isPresent:i,anchorX:h,anchorY:f,root:b,children:s}),u.jsx(Vl.Provider,{value:G,children:s})};function Jv(){return new Map}function o0(s=!0){const n=Y.useContext(Vl);if(n===null)return[!0,null];const{isPresent:i,onExitComplete:l,register:p}=n,m=Y.useId();Y.useEffect(()=>{if(s)return p(m)},[s]);const d=Y.useCallback(()=>s&&l&&l(m),[m,l,s]);return!i&&l?[!1,d]:[!0]}const al=s=>s.key||"";function Wb(s){const n=[];return Y.Children.forEach(s,i=>{Y.isValidElement(i)&&n.push(i)}),n}const xu=({children:s,custom:n,initial:i=!0,onExitComplete:l,presenceAffectsLayout:p=!0,mode:m="sync",propagate:d=!1,anchorX:h="left",anchorY:f="top",root:b})=>{const[x,k]=o0(d),y=Y.useMemo(()=>Wb(s),[s]),G=d&&!x?[]:y.map(al),M=Y.useRef(!0),I=Y.useRef(y),A=lp(()=>new Map),N=Y.useRef(new Set),[K,R]=Y.useState(y),[z,L]=Y.useState(y);Nf(()=>{M.current=!1,I.current=y;for(let X=0;X<z.length;X++){const F=al(z[X]);G.includes(F)?(A.delete(F),N.current.delete(F)):A.get(F)!==!0&&A.set(F,!1)}},[z,G.length,G.join("-")]);const O=[];if(y!==K){let X=[...y];for(let F=0;F<z.length;F++){const Z=z[F],it=al(Z);G.includes(it)||(X.splice(F,0,Z),O.push(Z))}return m==="wait"&&O.length&&(X=O),L(Wb(X)),R(y),null}const{forceRender:q}=Y.useContext(ip);return u.jsx(u.Fragment,{children:z.map(X=>{const F=al(X),Z=d&&!x?!1:y===z||G.includes(F),it=()=>{if(N.current.has(F))return;if(A.has(F))N.current.add(F),A.set(F,!0);else return;let pt=!0;A.forEach(Nt=>{Nt||(pt=!1)}),pt&&(q==null||q(),L(I.current),d&&(k==null||k()),l&&l())};return u.jsx(Qv,{isPresent:Z,initial:!M.current||i?void 0:!1,custom:n,presenceAffectsLayout:p,mode:m,root:b,onExitComplete:Z?void 0:it,anchorX:h,anchorY:f,children:X},F)})})},i0=Y.createContext({strict:!1}),tf={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let ef=!1;function $v(){if(ef)return;const s={};for(const n in tf)s[n]={isEnabled:i=>tf[n].some(l=>!!i[l])};C_(s),ef=!0}function l0(){return $v(),DG()}function Wv(s){const n=l0();for(const i in s)n[i]={...n[i],...s[i]};C_(n)}const t3=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Il(s){return s.startsWith("while")||s.startsWith("drag")&&s!=="draggable"||s.startsWith("layout")||s.startsWith("onTap")||s.startsWith("onPan")||s.startsWith("onLayout")||t3.has(s)}let r0=s=>!Il(s);function e3(s){typeof s=="function"&&(r0=n=>n.startsWith("on")?!Il(n):s(n))}try{e3(require("@emotion/is-prop-valid").default)}catch{}function a3(s,n,i){const l={};for(const p in s)p==="values"&&typeof s.values=="object"||oe(s[p])||(r0(p)||i===!0&&Il(p)||!n&&!Il(p)||s.draggable&&p.startsWith("onDrag"))&&(l[p]=s[p]);return l}const ql=Y.createContext({});function s3(s,n){if(Nl(s)){const{initial:i,animate:l}=s;return{initial:i===!1||Io(i)?i:void 0,animate:Io(l)?l:void 0}}return s.inherit!==!1?n:{}}function n3(s){const{initial:n,animate:i}=s3(s,Y.useContext(ql));return Y.useMemo(()=>({initial:n,animate:i}),[af(n),af(i)])}function af(s){return Array.isArray(s)?s.join(" "):s}const Ep=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function c0(s,n,i){for(const l in n)!oe(n[l])&&!B_(l,i)&&(s[l]=n[l])}function o3({transformTemplate:s},n){return Y.useMemo(()=>{const i=Ep();return Ip(i,n,s),Object.assign({},i.vars,i.style)},[n])}function i3(s,n){const i=s.style||{},l={};return c0(l,i,s),Object.assign(l,o3(s,n)),l}function l3(s,n){const i={},l=i3(s,n);return s.drag&&s.dragListener!==!1&&(i.draggable=!1,l.userSelect=l.WebkitUserSelect=l.WebkitTouchCallout="none",l.touchAction=s.drag===!0?"none":`pan-${s.drag==="x"?"y":"x"}`),s.tabIndex===void 0&&(s.onTap||s.onTapStart||s.whileTap)&&(i.tabIndex=0),i.style=l,i}const u0=()=>({...Ep(),attrs:{}});function r3(s,n,i,l){const p=Y.useMemo(()=>{const m=u0();return U_(m,n,Y_(l),s.transformTemplate,s.style),{...m.attrs,style:{...m.style}}},[n]);if(s.style){const m={};c0(m,s.style,s),p.style={...m,...p.style}}return p}const c3=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Np(s){return typeof s!="string"||s.includes("-")?!1:!!(c3.indexOf(s)>-1||/[A-Z]/u.test(s))}function u3(s,n,i,{latestValues:l},p,m=!1,d){const f=(d??Np(s)?r3:l3)(n,l,p,s),b=a3(n,typeof s=="string",m),x=s!==Y.Fragment?{...b,...f,ref:i}:{},{children:k}=n,y=Y.useMemo(()=>oe(k)?k.get():k,[k]);return Y.createElement(s,{...x,children:y})}function p3({scrapeMotionValuesFromProps:s,createRenderState:n},i,l,p){return{latestValues:d3(i,l,p,s),renderState:n()}}function d3(s,n,i,l){const p={},m=l(s,{});for(const y in m)p[y]=gl(m[y]);let{initial:d,animate:h}=s;const f=Nl(s),b=N_(s);n&&b&&!f&&s.inherit!==!1&&(d===void 0&&(d=n.initial),h===void 0&&(h=n.animate));let x=i?i.initial===!1:!1;x=x||d===!1;const k=x?h:d;if(k&&typeof k!="boolean"&&!El(k)){const y=Array.isArray(k)?k:[k];for(let G=0;G<y.length;G++){const M=Gp(s,y[G]);if(M){const{transitionEnd:I,transition:A,...N}=M;for(const K in N){let R=N[K];if(Array.isArray(R)){const z=x?R.length-1:0;R=R[z]}R!==null&&(p[K]=R)}for(const K in I)p[K]=I[K]}}}return p}const p0=s=>(n,i)=>{const l=Y.useContext(ql),p=Y.useContext(Vl),m=()=>p3(s,n,l,p);return i?m():lp(m)},m3=p0({scrapeMotionValuesFromProps:Vp,createRenderState:Ep}),g3=p0({scrapeMotionValuesFromProps:X_,createRenderState:u0}),h3=Symbol.for("motionComponentSymbol");function b3(s,n,i){const l=Y.useRef(i);Y.useInsertionEffect(()=>{l.current=i});const p=Y.useRef(null);return Y.useCallback(m=>{var h;m&&((h=s.onMount)==null||h.call(s,m)),n&&(m?n.mount(m):n.unmount());const d=l.current;if(typeof d=="function")if(m){const f=d(m);typeof f=="function"&&(p.current=f)}else p.current?(p.current(),p.current=null):d(m);else d&&(d.current=m)},[n])}const d0=Y.createContext({});function dn(s){return s&&typeof s=="object"&&Object.prototype.hasOwnProperty.call(s,"current")}function f3(s,n,i,l,p,m){var R,z;const{visualElement:d}=Y.useContext(ql),h=Y.useContext(i0),f=Y.useContext(Vl),b=Y.useContext(wp),x=b.reducedMotion,k=b.skipAnimations,y=Y.useRef(null),G=Y.useRef(!1);l=l||h.renderer,!y.current&&l&&(y.current=l(s,{visualState:n,parent:d,props:i,presenceContext:f,blockInitialAnimation:f?f.initial===!1:!1,reducedMotionConfig:x,skipAnimations:k,isSVG:m}),G.current&&y.current&&(y.current.manuallyAnimateOnMount=!0));const M=y.current,I=Y.useContext(d0);M&&!M.projection&&p&&(M.type==="html"||M.type==="svg")&&_3(y.current,i,p,I);const A=Y.useRef(!1);Y.useInsertionEffect(()=>{M&&A.current&&M.update(i,f)});const N=i[y_],K=Y.useRef(!!N&&typeof window<"u"&&!((R=window.MotionHandoffIsComplete)!=null&&R.call(window,N))&&((z=window.MotionHasOptimisedAnimation)==null?void 0:z.call(window,N)));return Nf(()=>{G.current=!0,M&&(A.current=!0,window.MotionIsMounted=!0,M.updateFeatures(),M.scheduleRenderMicrotask(),K.current&&M.animationState&&M.animationState.animateChanges())}),Y.useEffect(()=>{M&&(!K.current&&M.animationState&&M.animationState.animateChanges(),K.current&&(queueMicrotask(()=>{var L;(L=window.MotionHandoffMarkAsComplete)==null||L.call(window,N)}),K.current=!1),M.enteringChildren=void 0)}),M}function _3(s,n,i,l){const{layoutId:p,layout:m,drag:d,dragConstraints:h,layoutScroll:f,layoutRoot:b,layoutAnchor:x,layoutCrossfade:k}=n;s.projection=new i(s.latestValues,n["data-framer-portal-id"]?void 0:m0(s.parent)),s.projection.setOptions({layoutId:p,layout:m,alwaysMeasureLayout:!!d||h&&dn(h),visualElement:s,animationType:typeof m=="string"?m:"both",initialPromotionConfig:l,crossfade:k,layoutScroll:f,layoutRoot:b,layoutAnchor:x})}function m0(s){if(s)return s.options.allowProjection!==!1?s.projection:m0(s.parent)}function ku(s,{forwardMotionProps:n=!1,type:i}={},l,p){l&&Wv(l);const m=i?i==="svg":Np(s),d=m?g3:m3;function h(b,x){let k;const y={...Y.useContext(wp),...b,layoutId:x3(b)},{isStatic:G}=y,M=n3(b),I=d(b,G);if(!G&&typeof window<"u"){k3();const A=y3(y);k=A.MeasureLayout,M.visualElement=f3(s,I,y,p,A.ProjectionNode,m)}return u.jsxs(ql.Provider,{value:M,children:[k&&M.visualElement?u.jsx(k,{visualElement:M.visualElement,...y}):null,u3(s,b,b3(I,M.visualElement,x),I,G,n,m)]})}h.displayName=`motion.${typeof s=="string"?s:`create(${s.displayName??s.name??""})`}`;const f=Y.forwardRef(h);return f[h3]=s,f}function x3({layoutId:s}){const n=Y.useContext(ip).id;return n&&s!==void 0?n+"-"+s:s}function k3(s,n){Y.useContext(i0).strict}function y3(s){const n=l0(),{drag:i,layout:l}=n;if(!i&&!l)return{};const p={...i,...l};return{MeasureLayout:i!=null&&i.isEnabled(s)||l!=null&&l.isEnabled(s)?p.MeasureLayout:void 0,ProjectionNode:p.ProjectionNode}}function G3(s,n){if(typeof Proxy>"u")return ku;const i=new Map,l=(m,d)=>ku(m,d,s,n),p=(m,d)=>l(m,d);return new Proxy(p,{get:(m,d)=>d==="create"?l:(i.has(d)||i.set(d,ku(d,void 0,s,n)),i.get(d))})}const v3=(s,n)=>n.isSVG??Np(s)?new WG(n):new KG(n,{allowProjection:s!==Y.Fragment});class M3 extends Wa{constructor(n){super(n),n.animationState||(n.animationState=nv(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();El(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:i}=this.node.prevProps||{};n!==i&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)==null||n.call(this)}}let T3=0;class j3 extends Wa{constructor(){super(...arguments),this.id=T3++,this.isExitComplete=!1}update(){var m;if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:i}=this.node.presenceContext,{isPresent:l}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===l)return;if(n&&l===!1){if(this.isExitComplete){const{initial:d,custom:h}=this.node.getProps();if(typeof d=="string"||typeof d=="object"&&d!==null&&!Array.isArray(d)){const f=Ts(this.node,d,h);if(f){const{transition:b,transitionEnd:x,...k}=f;for(const y in k)(m=this.node.getValue(y))==null||m.jump(k[y])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const p=this.node.animationState.setActive("exit",!n);i&&!n&&p.then(()=>{this.isExitComplete=!0,i(this.id)})}mount(){const{register:n,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),n&&(this.unmount=n(this.id))}unmount(){}}const A3={animation:{Feature:M3},exit:{Feature:j3}};function qo(s){return{point:{x:s.pageX,y:s.pageY}}}const S3=s=>n=>Tp(n)&&s(n,qo(n));function jo(s,n,i,l){return Vo(s,n,S3(i),l)}const g0=({current:s})=>s?s.ownerDocument.defaultView:null,sf=(s,n)=>Math.abs(s-n);function I3(s,n){const i=sf(s.x,n.x),l=sf(s.y,n.y);return Math.sqrt(i**2+l**2)}const nf=new Set(["auto","scroll"]);class h0{constructor(n,i,{transformPagePoint:l,contextWindow:p=window,dragSnapToOrigin:m=!1,distanceThreshold:d=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=G=>{this.handleScroll(G.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=sl(this.lastRawMoveEventInfo,this.transformPagePoint));const G=yu(this.lastMoveEventInfo,this.history),M=this.startEvent!==null,I=I3(G.offset,{x:0,y:0})>=this.distanceThreshold;if(!M&&!I)return;const{point:A}=G,{timestamp:N}=ne;this.history.push({...A,timestamp:N});const{onStart:K,onMove:R}=this.handlers;M||(K&&K(this.lastMoveEvent,G),this.startEvent=this.lastMoveEvent),R&&R(this.lastMoveEvent,G)},this.handlePointerMove=(G,M)=>{this.lastMoveEvent=G,this.lastRawMoveEventInfo=M,this.lastMoveEventInfo=sl(M,this.transformPagePoint),wt.update(this.updatePoint,!0)},this.handlePointerUp=(G,M)=>{this.end();const{onEnd:I,onSessionEnd:A,resumeAnimation:N}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&N&&N(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const K=yu(G.type==="pointercancel"?this.lastMoveEventInfo:sl(M,this.transformPagePoint),this.history);this.startEvent&&I&&I(G,K),A&&A(G,K)},!Tp(n))return;this.dragSnapToOrigin=m,this.handlers=i,this.transformPagePoint=l,this.distanceThreshold=d,this.contextWindow=p||window;const f=qo(n),b=sl(f,this.transformPagePoint),{point:x}=b,{timestamp:k}=ne;this.history=[{...x,timestamp:k}];const{onSessionStart:y}=i;y&&y(n,yu(b,this.history)),this.removeListeners=wo(jo(this.contextWindow,"pointermove",this.handlePointerMove),jo(this.contextWindow,"pointerup",this.handlePointerUp),jo(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(n){let i=n.parentElement;for(;i;){const l=getComputedStyle(i);(nf.has(l.overflowX)||nf.has(l.overflowY))&&this.scrollPositions.set(i,{x:i.scrollLeft,y:i.scrollTop}),i=i.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(n){const i=this.scrollPositions.get(n);if(!i)return;const l=n===window,p=l?{x:window.scrollX,y:window.scrollY}:{x:n.scrollLeft,y:n.scrollTop},m={x:p.x-i.x,y:p.y-i.y};m.x===0&&m.y===0||(l?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=m.x,this.lastMoveEventInfo.point.y+=m.y):this.history.length>0&&(this.history[0].x-=m.x,this.history[0].y-=m.y),this.scrollPositions.set(n,p),wt.update(this.updatePoint,!0))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),$a(this.updatePoint)}}function sl(s,n){return n?{point:n(s.point)}:s}function of(s,n){return{x:s.x-n.x,y:s.y-n.y}}function yu({point:s},n){return{point:s,delta:of(s,b0(n)),offset:of(s,V3(n)),velocity:w3(n,.1)}}function V3(s){return s[0]}function b0(s){return s[s.length-1]}function w3(s,n){if(s.length<2)return{x:0,y:0};let i=s.length-1,l=null;const p=b0(s);for(;i>=0&&(l=s[i],!(p.timestamp-l.timestamp>Se(n)));)i--;if(!l)return{x:0,y:0};l===s[0]&&s.length>2&&p.timestamp-l.timestamp>Se(n)*2&&(l=s[1]);const m=ze(p.timestamp-l.timestamp);if(m===0)return{x:0,y:0};const d={x:(p.x-l.x)/m,y:(p.y-l.y)/m};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function E3(s,{min:n,max:i},l){return n!==void 0&&s<n?s=l?Vt(n,s,l.min):Math.max(s,n):i!==void 0&&s>i&&(s=l?Vt(i,s,l.max):Math.min(s,i)),s}function lf(s,n,i){return{min:n!==void 0?s.min+n:void 0,max:i!==void 0?s.max+i-(s.max-s.min):void 0}}function N3(s,{top:n,left:i,bottom:l,right:p}){return{x:lf(s.x,i,p),y:lf(s.y,n,l)}}function rf(s,n){let i=n.min-s.min,l=n.max-s.max;return n.max-n.min<s.max-s.min&&([i,l]=[l,i]),{min:i,max:l}}function q3(s,n){return{x:rf(s.x,n.x),y:rf(s.y,n.y)}}function C3(s,n){let i=.5;const l=ue(s),p=ue(n);return p>l?i=Ao(n.min,n.max-l,s.min):l>p&&(i=Ao(s.min,s.max-p,n.min)),ea(0,1,i)}function D3(s,n){const i={};return n.min!==void 0&&(i.min=n.min-s.min),n.max!==void 0&&(i.max=n.max-s.min),i}const ap=.35;function O3(s=ap){return s===!1?s=0:s===!0&&(s=ap),{x:cf(s,"left","right"),y:cf(s,"top","bottom")}}function cf(s,n,i){return{min:uf(s,n),max:uf(s,i)}}function uf(s,n){return typeof s=="number"?s:s[n]||0}const R3=new WeakMap;class H3{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Qt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=n}start(n,{snapToCursor:i=!1,distanceThreshold:l}={}){const{presenceContext:p}=this.visualElement;if(p&&p.isPresent===!1)return;const m=k=>{i&&this.snapToCursor(qo(k).point),this.stopAnimation()},d=(k,y)=>{const{drag:G,dragPropagation:M,onDragStart:I}=this.getProps();if(G&&!M&&(this.openDragLock&&this.openDragLock(),this.openDragLock=dG(G),!this.openDragLock))return;this.latestPointerEvent=k,this.latestPanInfo=y,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),$e(N=>{let K=this.getAxisMotionValue(N).get()||0;if(ta.test(K)){const{projection:R}=this.visualElement;if(R&&R.layout){const z=R.layout.layoutBox[N];z&&(K=ue(z)*(parseFloat(K)/100))}}this.originPoint[N]=K}),I&&wt.update(()=>I(k,y),!1,!0),Xu(this.visualElement,"transform");const{animationState:A}=this.visualElement;A&&A.setActive("whileDrag",!0)},h=(k,y)=>{this.latestPointerEvent=k,this.latestPanInfo=y;const{dragPropagation:G,dragDirectionLock:M,onDirectionLock:I,onDrag:A}=this.getProps();if(!G&&!this.openDragLock)return;const{offset:N}=y;if(M&&this.currentDirection===null){this.currentDirection=L3(N),this.currentDirection!==null&&I&&I(this.currentDirection);return}this.updateAxis("x",y.point,N),this.updateAxis("y",y.point,N),this.visualElement.render(),A&&wt.update(()=>A(k,y),!1,!0)},f=(k,y)=>{this.latestPointerEvent=k,this.latestPanInfo=y,this.stop(k,y),this.latestPointerEvent=null,this.latestPanInfo=null},b=()=>{const{dragSnapToOrigin:k}=this.getProps();(k||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:x}=this.getProps();this.panSession=new h0(n,{onSessionStart:m,onStart:d,onMove:h,onSessionEnd:f,resumeAnimation:b},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:x,distanceThreshold:l,contextWindow:g0(this.visualElement),element:this.visualElement.current})}stop(n,i){const l=n||this.latestPointerEvent,p=i||this.latestPanInfo,m=this.isDragging;if(this.cancel(),!m||!p||!l)return;const{velocity:d}=p;this.startAnimation(d);const{onDragEnd:h}=this.getProps();h&&wt.postRender(()=>h(l,p))}cancel(){this.isDragging=!1;const{projection:n,animationState:i}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:l}=this.getProps();!l&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(n,i,l){const{drag:p}=this.getProps();if(!l||!nl(n,p,this.currentDirection))return;const m=this.getAxisMotionValue(n);let d=this.originPoint[n]+l[n];this.constraints&&this.constraints[n]&&(d=E3(d,this.constraints[n],this.elastic[n])),m.set(d)}resolveConstraints(){var m;const{dragConstraints:n,dragElastic:i}=this.getProps(),l=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(m=this.visualElement.projection)==null?void 0:m.layout,p=this.constraints;n&&dn(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&l?this.constraints=N3(l.layoutBox,n):this.constraints=!1,this.elastic=O3(i),p!==this.constraints&&!dn(n)&&l&&this.constraints&&!this.hasMutatedConstraints&&$e(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=D3(l.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:i}=this.getProps();if(!n||!dn(n))return!1;const l=n.current,{projection:p}=this.visualElement;if(!p||!p.layout)return!1;p.root&&(p.root.scroll=void 0,p.root.updateScroll());const m=LG(l,p.root,this.visualElement.getTransformPagePoint());let d=q3(p.layout.layoutBox,m);if(i){const h=i(RG(d));this.hasMutatedConstraints=!!h,h&&(d=O_(h))}return d}startAnimation(n){const{drag:i,dragMomentum:l,dragElastic:p,dragTransition:m,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),f=this.constraints||{},b=$e(x=>{if(!nl(x,i,this.currentDirection))return;let k=f&&f[x]||{};(d===!0||d===x)&&(k={min:0,max:0});const y=p?200:1e6,G=p?40:1e7,M={type:"inertia",velocity:l?n[x]:0,bounceStiffness:y,bounceDamping:G,timeConstant:750,restDelta:1,restSpeed:10,...m,...k};return this.startAxisValueAnimation(x,M)});return Promise.all(b).then(h)}startAxisValueAnimation(n,i){const l=this.getAxisMotionValue(n);return Xu(this.visualElement,n),l.start(yp(n,l,0,i,this.visualElement,!1))}stopAnimation(){$e(n=>this.getAxisMotionValue(n).stop())}getAxisMotionValue(n){const i=`_drag${n.toUpperCase()}`,p=this.visualElement.getProps()[i];return p||this.visualElement.getValue(n,this.visualElement.latestValues[n]??0)}snapToCursor(n){$e(i=>{const{drag:l}=this.getProps();if(!nl(i,l,this.currentDirection))return;const{projection:p}=this.visualElement,m=this.getAxisMotionValue(i);if(p&&p.layout){const{min:d,max:h}=p.layout.layoutBox[i],f=m.get()||0;m.set(n[i]-Vt(d,h,.5)+f)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:i}=this.getProps(),{projection:l}=this.visualElement;if(!dn(i)||!l||!this.constraints)return;this.stopAnimation();const p={x:0,y:0};$e(d=>{const h=this.getAxisMotionValue(d);if(h&&this.constraints!==!1){const f=h.get();p[d]=C3({min:f,max:f},this.constraints[d])}});const{transformTemplate:m}=this.visualElement.getProps();this.visualElement.current.style.transform=m?m({},""):"none",l.root&&l.root.updateScroll(),l.updateLayout(),this.constraints=!1,this.resolveConstraints(),$e(d=>{if(!nl(d,n,null))return;const h=this.getAxisMotionValue(d),{min:f,max:b}=this.constraints[d];h.set(Vt(f,b,p[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;R3.set(this.visualElement,this);const n=this.visualElement.current,i=jo(n,"pointerdown",b=>{const{drag:x,dragListener:k=!0}=this.getProps(),y=b.target,G=y!==n&&_G(y);x&&k&&!G&&this.start(b)});let l;const p=()=>{const{dragConstraints:b}=this.getProps();dn(b)&&b.current&&(this.constraints=this.resolveRefConstraints(),l||(l=z3(n,b.current,()=>this.scalePositionWithinConstraints())))},{projection:m}=this.visualElement,d=m.addEventListener("measure",p);m&&!m.layout&&(m.root&&m.root.updateScroll(),m.updateLayout()),wt.read(p);const h=Vo(window,"resize",()=>this.scalePositionWithinConstraints()),f=m.addEventListener("didUpdate",(({delta:b,hasLayoutChanged:x})=>{this.isDragging&&x&&($e(k=>{const y=this.getAxisMotionValue(k);y&&(this.originPoint[k]+=b[k].translate,y.set(y.get()+b[k].translate))}),this.visualElement.render())}));return()=>{h(),i(),d(),f&&f(),l&&l()}}getProps(){const n=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:l=!1,dragPropagation:p=!1,dragConstraints:m=!1,dragElastic:d=ap,dragMomentum:h=!0}=n;return{...n,drag:i,dragDirectionLock:l,dragPropagation:p,dragConstraints:m,dragElastic:d,dragMomentum:h}}}function pf(s){let n=!0;return()=>{if(n){n=!1;return}s()}}function z3(s,n,i){const l=fb(s,pf(i)),p=fb(n,pf(i));return()=>{l(),p()}}function nl(s,n,i){return(n===!0||n===s)&&(i===null||i===s)}function L3(s,n=10){let i=null;return Math.abs(s.y)>n?i="y":Math.abs(s.x)>n&&(i="x"),i}class B3 extends Wa{constructor(n){super(n),this.removeGroupControls=Le,this.removeListeners=Le,this.controls=new H3(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Le}update(){const{dragControls:n}=this.node.getProps(),{dragControls:i}=this.node.prevProps||{};n!==i&&(this.removeGroupControls(),n&&(this.removeGroupControls=n.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Gu=s=>(n,i)=>{s&&wt.update(()=>s(n,i),!1,!0)};class U3 extends Wa{constructor(){super(...arguments),this.removePointerDownListener=Le}onPointerDown(n){this.session=new h0(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:g0(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:i,onPan:l,onPanEnd:p}=this.node.getProps();return{onSessionStart:Gu(n),onStart:Gu(i),onMove:Gu(l),onEnd:(m,d)=>{delete this.session,p&&wt.postRender(()=>p(m,d))}}}mount(){this.removePointerDownListener=jo(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let vu=!1;class P3 extends Y.Component{componentDidMount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:l,layoutId:p}=this.props,{projection:m}=n;m&&(i.group&&i.group.add(m),l&&l.register&&p&&l.register(m),vu&&m.root.didUpdate(),m.addEventListener("animationComplete",()=>{this.safeToRemove()}),m.setOptions({...m.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),hl.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:i,visualElement:l,drag:p,isPresent:m}=this.props,{projection:d}=l;return d&&(d.isPresent=m,n.layoutDependency!==i&&d.setOptions({...d.options,layoutDependency:i}),vu=!0,p||n.layoutDependency!==i||i===void 0||n.isPresent!==m?d.willUpdate():this.safeToRemove(),n.isPresent!==m&&(m?d.promote():d.relegate()||wt.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:n,layoutAnchor:i}=this.props,{projection:l}=n;l&&(l.options.layoutAnchor=i,l.root.didUpdate(),Mp.postRender(()=>{!l.currentAnimation&&l.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:l}=this.props,{projection:p}=n;vu=!0,p&&(p.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(p),l&&l.deregister&&l.deregister(p))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function f0(s){const[n,i]=o0(),l=Y.useContext(ip);return u.jsx(P3,{...s,layoutGroup:l,switchLayoutGroup:Y.useContext(d0),isPresent:n,safeToRemove:i})}const Y3={pan:{Feature:U3},drag:{Feature:B3,ProjectionNode:n0,MeasureLayout:f0}};function df(s,n,i){const{props:l}=s;s.animationState&&l.whileHover&&s.animationState.setActive("whileHover",i==="Start");const p="onHover"+i,m=l[p];m&&wt.postRender(()=>m(n,qo(n)))}class X3 extends Wa{mount(){const{current:n}=this.node;n&&(this.unmount=gG(n,(i,l)=>(df(this.node,l,"Start"),p=>df(this.node,p,"End"))))}unmount(){}}class K3 extends Wa{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=wo(Vo(this.node.current,"focus",()=>this.onFocus()),Vo(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function mf(s,n,i){const{props:l}=s;if(s.current instanceof HTMLButtonElement&&s.current.disabled)return;s.animationState&&l.whileTap&&s.animationState.setActive("whileTap",i==="Start");const p="onTap"+(i==="End"?"":i),m=l[p];m&&wt.postRender(()=>m(n,qo(n)))}class F3 extends Wa{mount(){const{current:n}=this.node;if(!n)return;const{globalTapTarget:i,propagate:l}=this.node.props;this.unmount=kG(n,(p,m)=>(mf(this.node,m,"Start"),(d,{success:h})=>mf(this.node,d,h?"End":"Cancel")),{useGlobalTarget:i,stopPropagation:(l==null?void 0:l.tap)===!1})}unmount(){}}const sp=new WeakMap,Mu=new WeakMap,Z3=s=>{const n=sp.get(s.target);n&&n(s)},Q3=s=>{s.forEach(Z3)};function J3({root:s,...n}){const i=s||document;Mu.has(i)||Mu.set(i,{});const l=Mu.get(i),p=JSON.stringify(n);return l[p]||(l[p]=new IntersectionObserver(Q3,{root:s,...n})),l[p]}function $3(s,n,i){const l=J3(n);return sp.set(s,i),l.observe(s),()=>{sp.delete(s),l.unobserve(s)}}const W3={some:0,all:1};class t5 extends Wa{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var f;(f=this.stopObserver)==null||f.call(this);const{viewport:n={}}=this.node.getProps(),{root:i,margin:l,amount:p="some",once:m}=n,d={root:i?i.current:void 0,rootMargin:l,threshold:typeof p=="number"?p:W3[p]},h=b=>{const{isIntersecting:x}=b;if(this.isInView===x||(this.isInView=x,m&&!x&&this.hasEnteredView))return;x&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",x);const{onViewportEnter:k,onViewportLeave:y}=this.node.getProps(),G=x?k:y;G&&G(b)};this.stopObserver=$3(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:i}=this.node;["amount","margin","root"].some(e5(n,i))&&this.startObserver()}unmount(){var n;(n=this.stopObserver)==null||n.call(this),this.hasEnteredView=!1,this.isInView=!1}}function e5({viewport:s={}},{viewport:n={}}={}){return i=>s[i]!==n[i]}const a5={inView:{Feature:t5},tap:{Feature:F3},focus:{Feature:K3},hover:{Feature:X3}},s5={layout:{ProjectionNode:n0,MeasureLayout:f0}},n5={...A3,...a5,...Y3,...s5},ya=G3(n5,v3),_0=Y.createContext(void 0),o5={LATAM:{"nav.inicio":"Inicio","nav.novedades":"Novedades","nav.servicios":"Servicios","nav.evo":"Evo","nav.otros":"Otros códigos","nav.guia":"Guía","nav.tutoriales":"Tutoriales","nav.descargas":"Descargas","home.search_placeholder":"Nombre o código...","home.sort_az":"Nombre A-Z","home.sort_za":"Nombre Z-A","home.sort_code_asc":"Código Asc.","home.sort_code_desc":"Código Desc.","home.sort_hp_desc":"M. Mayor Vida","home.sort_atk_desc":"M. Mayor Ataque","home.sort_spd_desc":"M. Mayor Velocidad","home.show":"Mostrar","home.hide":"Ocultar","home.filtered":"Filtrados","home.total_base":"Base Total","services.title":"Servicios Exclusivos","services.subtitle":"Potencia tu cuenta con nuestros servicios especializados de Mutants: Genetic Gladiators.","services.buy":"Adquirir","services.payment_methods":"Métodos de Pago","services.contact_us":"Contáctanos","region.latam":"LATAM","region.usd":"USD","tip.label":"Tip:","tip.text":"Para asegurar la sincronización de datos, se recomienda acceder vía Facebook o limpiar cookies/caché del navegador (Modo Incógnito).","footer.renovated":"Versión renovada","footer.nav":"Navegación","footer.legal":"Información Legal","footer.terms":"Términos y Condiciones","footer.rights":"© 2026 Smith Luque. Todos los derechos reservados.","footer.desc":"Base de datos de códigos de Mutantes de MGG para Game Guardian. Aquí hay contenido para aprender y recursos para usar.","whatsapp.title":"Grupo de WhatsApp","whatsapp.desc":"Únete para ayuda, consejos y enseñanza dentro de la comunidad.","whatsapp.btn":"Unirme al grupo","stats.mutants":"Mutantes","stats.version":"Versión","home.main_database":"Base principal","home.main_desc":"Lista completa de mutantes con búsqueda rápida, filtros por genes y carga automática desde tu archivo de códigos.","home.featured_mutants":"Novedades Destacadas","home.explore_catalog":"Explorar Catálogo","home.reset_engine":"Reiniciar Motor","home.genetic_config":"Configuración Genética","home.search_engine":"Motor de Búsqueda","home.sort_filters":"Filtros de Orden","home.no_results":"No se encontraron mutantes con esos filtros.","home.hidden_results":"Resultados ocultos.","home.active":"Activos","home.total":"Total","gene.dominant":"Dominante","gene.active":"Activo","gene.inactive":"Inactivo","layout.by_author":"Por Smith Luque","layout.select_language":"SELECCIONAR IDIOMA","layout.active_support":"Grupo Activo","mutant.verified":"Verificado","mutant.extract_code":"Extraer Código","home.load_more_rem":"Cargar más ({rem} restantes)","layout.color_theme":"Color de Diseño","home.single_gene_only":"Solo 1 Gen (Monogénicos)","home.all_genes":"Todos los genes"},USD:{"nav.inicio":"Home","nav.novedades":"News","nav.servicios":"Services","nav.evo":"Evo Calc","nav.otros":"Other Codes","nav.guia":"Guide","nav.tutoriales":"Tutorials","nav.descargas":"Downloads","home.search_placeholder":"Name or code...","home.sort_az":"Name A-Z","home.sort_za":"Name Z-A","home.sort_code_asc":"Code Asc.","home.sort_code_desc":"Code Desc.","home.sort_hp_desc":"M. Highest HP","home.sort_atk_desc":"M. Highest ATK","home.sort_spd_desc":"M. Highest Speed","home.show":"Show","home.hide":"Hide","home.filtered":"Filtered","home.total_base":"Total Base","services.title":"Exclusive Services","services.subtitle":"Boost your account with our specialized Mutants: Genetic Gladiators services.","services.buy":"Purchase","services.payment_methods":"Payment Methods","services.contact_us":"Contact Us","region.latam":"LATAM","region.usd":"USD","tip.label":"Tip:","tip.text":"To ensure data synchronization, it is recommended to access via Facebook or clear browser cookies/cache (Incognito Mode).","footer.renovated":"Renewed Version","footer.nav":"Navigation","footer.legal":"Legal Information","footer.terms":"Terms & Conditions","footer.rights":"© 2026 Smith Luque. All rights reserved.","footer.desc":"MGG Mutant code database for Game Guardian. Here is content to learn and resources to use.","whatsapp.title":"WhatsApp Group","whatsapp.desc":"Join for help, tips, and teaching within the community.","whatsapp.btn":"Join the group","stats.mutants":"Mutants","stats.version":"Version","home.main_database":"Main Database","home.main_desc":"Full mutant list with fast search, gene filters, and automatic code loading.","home.featured_mutants":"Featured New Mutants","home.explore_catalog":"Explore Catalog","home.reset_engine":"Reset Engine","home.genetic_config":"Genetic Configuration","home.search_engine":"Search Engine","home.sort_filters":"Sort Filters","home.no_results":"No mutants found with those filters.","home.hidden_results":"Results hidden.","home.active":"Active","home.total":"Total","gene.dominant":"Dominant","gene.active":"Active","gene.inactive":"Inactive","layout.by_author":"By Smith Luque","layout.select_language":"SELECT LANGUAGE","layout.active_support":"Active Support","mutant.verified":"Verified","mutant.extract_code":"Extract Code","home.load_more_rem":"Load More ({rem} remaining)","layout.color_theme":"Design Color","home.single_gene_only":"Single Gene Only (Pure)","home.all_genes":"All Genes"},PT:{"nav.inicio":"Início","nav.novedades":"Novidades","nav.servicios":"Serviços","nav.evo":"Evo","nav.otros":"Outros códigos","nav.guia":"Guia","nav.tutoriales":"Tutoriais","nav.descargas":"Downloads","home.search_placeholder":"Nome ou código...","home.sort_az":"Nome A-Z","home.sort_za":"Nome Z-A","home.sort_code_asc":"Código Cresc.","home.sort_code_desc":"Código Decresc.","home.sort_hp_desc":"M. Maior Vida","home.sort_atk_desc":"M. Maior Ataque","home.sort_spd_desc":"M. Maior Velocidade","home.show":"Mostrar","home.hide":"Ocultar","home.filtered":"Filtrados","home.total_base":"Total Base","services.title":"Serviços Exclusivos","services.subtitle":"Melhore sua conta com nossos serviços especializados de Mutants: Genetic Gladiators.","services.buy":"Adquirir","services.payment_methods":"Métodos de Pagamento","services.contact_us":"Contate-nos","region.latam":"LATAM","region.usd":"USD","tip.label":"Dica:","tip.text":"Para garantir a sincronização de dados, recomenda-se acessar via Facebook ou limpar os cookies/cache do navegador (Modo Incógnito).","footer.renovated":"Versão Renovada","footer.nav":"Navegação","footer.legal":"Informação Legal","footer.terms":"Termos e Condições","footer.rights":"© 2026 Smith Luque. Todos os direitos reservados.","footer.desc":"Banco de dados de códigos de Mutants MGG para Game Guardian. Conteúdos para aprendizagem e recursos.","whatsapp.title":"Grupo de WhatsApp","whatsapp.desc":"Entre para obter ajuda, dicas e suporte na comunidade.","whatsapp.btn":"Entrar no grupo","stats.mutants":"Mutantes","stats.version":"Versão","home.main_database":"Base Principal","home.main_desc":"Lista completa de mutantes com busca rápida, filtros de genes e carregamento automático a partir do seu arquivo de códigos.","home.featured_mutants":"Novidades em Destaque","home.explore_catalog":"Explorar Catálogo","home.reset_engine":"Reiniciar Mecanismo","home.genetic_config":"Configuração Genética","home.search_engine":"Mecanismo de Busca","home.sort_filters":"Filtros de Ordenação","home.no_results":"Nenhum mutante encontrado com esses filtros.","home.hidden_results":"Resultados ocultos.","home.active":"Ativos","home.total":"Total","gene.dominant":"Dominante","gene.active":"Ativo","gene.inactive":"Inativo","layout.by_author":"Por Smith Luque","layout.select_language":"SELECIONAR IDIOMA","layout.active_support":"Grupo Ativo","mutant.verified":"Verificado","mutant.extract_code":"Extrair Código","home.load_more_rem":"Carregar mais ({rem} restantes)","layout.color_theme":"Cor do Design","home.single_gene_only":"Apenas 1 Gene (Monogênicos)","home.all_genes":"Todos os genes"},FR:{"nav.inicio":"Accueil","nav.novedades":"Actualités","nav.servicios":"Services","nav.evo":"Evos","nav.otros":"Autres codes","nav.guia":"Guide","nav.tutoriales":"Tutoriels","nav.descargas":"Téléchargements","home.search_placeholder":"Nom ou code...","home.sort_az":"Nom A-Z","home.sort_za":"Nom Z-A","home.sort_code_asc":"Code Asc.","home.sort_code_desc":"Code Desc.","home.sort_hp_desc":"M. Plus de vie","home.sort_atk_desc":"M. Plus d'attaque","home.sort_spd_desc":"M. Plus de vitesse","home.show":"Afficher","home.hide":"Masquer","home.filtered":"Filtrés","home.total_base":"Base totale","services.title":"Services exclusifs","services.subtitle":"Améliorez votre compte avec nos services spécialisés Mutants: Genetic Gladiators.","services.buy":"Acheter","services.payment_methods":"Modes de paiement","services.contact_us":"Contactez-nous","region.latam":"LATAM","region.usd":"USD","tip.label":"Conseil:","tip.text":"Pour garantir la synchronisation des données, il est recommandé de se connecter via Facebook ou d'effacer les cookies/cache du navigateur (Mode Incognito).","footer.renovated":"Version rénovée","footer.nav":"Navigation","footer.legal":"Informations légales","footer.terms":"Conditions générales","footer.rights":"© 2026 Smith Luque. Tous droits réservés.","footer.desc":"Base de données des codes Mutants MGG pour Game Guardian. Tutoriels d'apprentissage et ressources à utiliser.","whatsapp.title":"Groupe WhatsApp","whatsapp.desc":"Rejoignez-nous pour obtenir de l'aide, des conseils et échanger avec la communauté.","whatsapp.btn":"Rejoindre le groupe","stats.mutants":"Mutants","stats.version":"Version","home.main_database":"Base principale","home.main_desc":"Liste complète des mutants avec recherche rapide, filtres de gènes et chargement automatique depuis votre fichier de codes.","home.featured_mutants":"Nouveautés en Vedette","home.explore_catalog":"Explorer le Catalogue","home.reset_engine":"Réinitialiser le moteur","home.genetic_config":"Configuration Génétique","home.search_engine":"Moteur de Recherche","home.sort_filters":"Filtres de Tri","home.no_results":"Aucun mutant trouvé avec ces filtres.","home.hidden_results":"Résultats masqués.","home.active":"Actifs","home.total":"Total","gene.dominant":"Dominant","gene.active":"Actif","gene.inactive":"Inactif","layout.by_author":"Par Smith Luque","layout.select_language":"SÉLECTIONNER LA LANGUE","layout.active_support":"Groupe Actif","mutant.verified":"Vérifié","mutant.extract_code":"Extraire le Code","home.load_more_rem":"Charger plus ({rem} restants)","layout.color_theme":"Couleur du Design","home.single_gene_only":"Un seul gène (Monogénique)","home.all_genes":"Tous les gènes"},DE:{"nav.inicio":"Startseite","nav.novedades":"Neuigkeiten","nav.servicios":"Dienste","nav.evo":"Evo","nav.otros":"Andere Codes","nav.guia":"Leitfaden","nav.tutoriales":"Tutorials","nav.descargas":"Downloads","home.search_placeholder":"Name oder Code...","home.sort_az":"Name A-Z","home.sort_za":"Name Z-A","home.sort_code_asc":"Code Aufst.","home.sort_code_desc":"Code Abst.","home.sort_hp_desc":"M. Höchste LP","home.sort_atk_desc":"M. Höchster Angriff","home.sort_spd_desc":"M. Höchste Geschwindigkeit","home.show":"Anzeigen","home.hide":"Ausblenden","home.filtered":"Gefiltert","home.total_base":"Gesamtbasis","services.title":"Exklusive Dienste","services.subtitle":"Verbessern Sie Ihr Konto mit unseren spezialisierten Mutants: Genetic Gladiators-Diensten.","services.buy":"Erwerben","services.payment_methods":"Zahlungsarten","services.contact_us":"Kontakt","region.latam":"LATAM","region.usd":"USD","tip.label":"Tipp:","tip.text":"Um die Datensynchronisation sicherzustellen, wird empfohlen, sich über Facebook anzumelden oder Browser-Cookies/-Cache zu löschen (Inkognito-Modus).","footer.renovated":"Renovierte Version","footer.nav":"Navigation","footer.legal":"Rechtliche Hinweise","footer.terms":"AGB","footer.rights":"© 2026 Smith Luque. Alle Rechte vorbehalten.","footer.desc":"MGG Mutanten-Code-Datenbank für Game Guardian. Tutorials zum Lernen und Ressourcen zur Nutzung.","whatsapp.title":"WhatsApp-Gruppe","whatsapp.desc":"Treten Sie bei für Hilfe, Tipps und Austausch in der Gesellschaft.","whatsapp.btn":"Gruppe beitreten","stats.mutants":"Mutanten","stats.version":"Version","home.main_database":"Haupt-Datenbank","home.main_desc":"Vollständige Mutantenliste mit Schnellsuche, Genfiltern und automatischem Laden von Codes.","home.featured_mutants":"Hervorgehobene Neuigkeiten","home.explore_catalog":"Katalog erkunden","home.reset_engine":"Zuchtrechner zurücksetzen","home.genetic_config":"Genetische Konfiguration","home.search_engine":"Suchmaschine","home.sort_filters":"Sortierfilter","home.no_results":"Keine Mutanten mit diesen Filtern gefunden.","home.hidden_results":"Ergebnisse ausgeblendet.","home.active":"Aktiv","home.total":"Gesamt","gene.dominant":"Dominant","gene.active":"Aktiv","gene.inactive":"Inaktiv","layout.by_author":"Von Smith Luque","layout.select_language":"SPRACHE AUSWÄHLEN","layout.active_support":"Aktive Gruppe","mutant.verified":"Verifiziert","mutant.extract_code":"Code Extrahieren","home.load_more_rem":"Mehr laden ({rem} verbleibend)","layout.color_theme":"Design Farbe","home.single_gene_only":"Nur 1 Gen (Monogenisch)","home.all_genes":"Alle Gene"}},i5={blue:{brand:"#2563eb",brand2:"#3b82f6"},green:{brand:"#14532d",brand2:"#15803d"},red:{brand:"#dc2626",brand2:"#ef4444"},pink:{brand:"#db2777",brand2:"#ec4899"},purple:{brand:"#7c3aed",brand2:"#8b5cf6"},white:{brand:"#d1d5db",brand2:"#ffffff"}},l5=({children:s})=>{const[n,i]=Y.useState(()=>localStorage.getItem("user-color-theme")||"blue"),l=y=>{localStorage.setItem("user-color-theme",y),i(y)};Y.useEffect(()=>{const y=i5[n];y&&(document.documentElement.style.setProperty("--blue-brand",y.brand),document.documentElement.style.setProperty("--blue-brand-2",y.brand2))},[n]);const[p,m]=Y.useState(()=>{const y=localStorage.getItem("user-region"),G=localStorage.getItem("user-country-code"),M=!!localStorage.getItem("user-manual-force");let I=y||"LATAM";G==="PE"&&(I="LATAM");const A=G?d(G):1;return{region:I,countryCode:G||null,multiplier:A,isManual:M,detectedCountry:null}});Y.useEffect(()=>{const y=localStorage.getItem("user-region"),G=localStorage.getItem("user-country-code"),M=!!localStorage.getItem("user-manual-force");G==="PE"&&y==="USD"&&!M&&(localStorage.setItem("user-region","LATAM"),m(I=>({...I,region:"LATAM"})))},[]);function d(y){const G=y.toUpperCase(),M=wf.find(I=>I.id.toUpperCase()===G);if(M)return M.rate;for(const[I,A]of Object.entries(l2))if(A.includes(G))return parseFloat(I);return Qh.includes(G)?1.5:1}const h=async()=>{var y;try{const I=(y=(await(await fetch("https://ipapi.co/json/")).json()).country_code)==null?void 0:y.toUpperCase();if(!I)return;const A=Qh.includes(I),N=I==="PE",K=d(I),R=localStorage.getItem("user-region");let z=A?"USD":"LATAM";R&&(N&&R==="USD"&&!localStorage.getItem("user-manual-force")?z="LATAM":z=R),m(L=>({...L,region:z,countryCode:L.isManual?L.countryCode:I,detectedCountry:I,multiplier:L.isManual?L.multiplier:K}))}catch(G){console.error("IP Detection failed:",G)}};Y.useEffect(()=>{h()},[]);const f=y=>{localStorage.setItem("user-region",y),localStorage.setItem("user-manual-force","true"),m(G=>({...G,region:y,isManual:!0}))},b=y=>{const G=y.toUpperCase(),M=d(G),A=["PE","MX","AR","CL","CO","BO","VE","EC","UY","PY","PA","PR","CR","HN","SV","NI","GT","DO","ES"].includes(G)?"LATAM":"USD";localStorage.setItem("user-region",A),localStorage.setItem("user-country-code",G),localStorage.setItem("user-manual-force","true"),m(N=>({...N,region:A,countryCode:G,multiplier:M,isManual:!0}))},x=()=>{localStorage.removeItem("user-region"),localStorage.removeItem("user-country-code"),localStorage.removeItem("user-manual-force"),m(y=>({...y,isManual:!1})),h()},k=(y,G)=>{let M=o5[p.region][y]||y;return G&&Object.entries(G).forEach(([I,A])=>{M=M.replace(`{${I}}`,String(A))}),M};return u.jsx(_0.Provider,{value:{...p,colorTheme:n,setColorTheme:l,setRegion:f,setCountry:b,resetSelection:x,translate:k},children:s})},Ie=()=>{const s=Y.useContext(_0);if(s===void 0)throw new Error("useRegion must be used within a RegionProvider");return s},gf={"/":wu,"/novedades":Sf,"/servicios":Go,"/evo":n2,"/otros":Su,"/guia":Iu,"/tutoriales":ll,"/descargas":jf},ol={LATAM:{flag:"🇪🇸",label:"Español"},USD:{flag:"🇺🇸",label:"English"},PT:{flag:"🇵🇹",label:"Português"},FR:{flag:"🇫🇷",label:"Français"},DE:{flag:"🇩🇪",label:"Deutsch"}};function r5({children:s,currentPath:n,onNavigate:i,isOnline:l}){var z,L;const[p,m]=Y.useState(!1),[d,h]=Y.useState(!1),{region:f,setRegion:b,countryCode:x,setCountry:k,translate:y,colorTheme:G,setColorTheme:M}=Ie(),I=f!=="LATAM"&&f!=="PT"?"https://chat.whatsapp.com/IdBIvXWUPNjDLcPmBvkp1B":op,A=O=>{i(O),m(!1),window.scrollTo({top:0,behavior:"smooth"})},N="text-blue-brand-2",K="from-blue-brand to-blue-brand-2";return u.jsxs("div",{className:"min-h-screen",children:[u.jsx("div",{className:"grid-overlay"}),u.jsxs("header",{className:"site-header sticky top-0 z-50 transition-all duration-300",children:[u.jsx("div",{className:"absolute inset-0 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.4)] bg-[#050a14]/60"}),u.jsxs("div",{className:"mx-auto px-4 lg:px-8 header-inner relative flex items-center justify-between min-h-[64px] max-w-[1400px]",children:[u.jsxs("div",{className:"brand flex items-center gap-3 cursor-pointer group",onClick:()=>A("/"),children:[u.jsxs("div",{className:"relative",children:[u.jsx("div",{className:"absolute inset-0 blur-md opacity-0 group-hover:opacity-40 transition-opacity bg-blue-brand"}),u.jsx("div",{className:`brand-logo w-9 h-9 md:w-10 md:h-10 relative flex items-center justify-center rounded-lg md:rounded-xl bg-gradient-to-br ${K} overflow-hidden shadow-lg group-hover:scale-105 transition-transform shrink-0 border border-white/20`,children:u.jsx("img",{src:"https://github.com/luqueSmith/MGG/blob/main/img/Logo_mgg.png?raw=true",alt:"Logo MGG",className:"w-full h-full object-cover"})})]}),u.jsxs("div",{className:"flex flex-col text-left",children:[u.jsx("strong",{className:`block text-white text-[13px] md:text-[15px] font-black tracking-tight uppercase leading-none mb-0.5 group-hover:${N} transition-colors`,children:"Mutodex MGG"}),u.jsx("span",{className:`block text-[7px] md:text-[9px] ${N} uppercase tracking-[0.25em] font-black opacity-80`,children:y("layout.by_author")})]})]}),u.jsx("nav",{className:"hidden",children:iu.map(O=>{const q=gf[O.path]||wu,X=n===O.path,F=O.key;return u.jsxs("button",{onClick:()=>A(O.path),className:`flex items-center gap-2 px-3 py-2 rounded-xl text-[11px] font-black uppercase tracking-wider border transition-all duration-300 relative group/btn ${X?"bg-blue-brand/20 border-blue-brand text-white shadow-[0_2px_15px_rgba(37,99,235,0.25)]":"text-slate-400 border-transparent hover:bg-white/5 hover:text-white"}`,children:[u.jsx(q,{size:14,className:`${X?"text-blue-brand-2 animate-pulse":"text-slate-400 group-hover/btn:scale-110 transition-transform"}`}),u.jsx("span",{children:y(F)})]},O.path)})}),u.jsxs("div",{className:"flex items-center gap-2 md:gap-3",children:[u.jsxs("div",{className:"hidden",children:[u.jsxs("span",{className:"text-[10px] text-slate-400 font-black uppercase tracking-wider mr-1",children:[y("layout.color_theme"),":"]}),["blue","green","red","pink","purple","white"].map(O=>{const q=G===O,X={blue:"bg-[#2563eb]",green:"bg-[#14532d]",red:"bg-[#dc2626]",pink:"bg-[#db2777]",purple:"bg-[#7c3aed]",white:"bg-white"};return u.jsx("button",{onClick:()=>M(O),title:O.toUpperCase(),className:`w-4.5 h-4.5 rounded-full ${X[O]} transition-all duration-300 relative shrink-0 cursor-pointer ${q?"scale-115 ring-2 ring-offset-2 ring-offset-[#050a14] ring-white shadow-lg":"opacity-60 hover:opacity-100 hover:scale-105"}`,children:q&&u.jsx("span",{className:"absolute inset-0 m-auto w-1 h-1 rounded-full bg-[#050a14]"})},O)})]}),u.jsxs("div",{className:"relative",children:[u.jsxs("button",{onClick:()=>h(!d),className:"flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-[10px] md:text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer",children:[u.jsx("span",{className:"text-sm md:text-base",children:((z=ol[f])==null?void 0:z.flag)||"🇪🇸"}),u.jsx("span",{className:"hidden sm:inline",children:((L=ol[f])==null?void 0:L.label)||"Español"}),u.jsx("span",{className:"text-slate-500 text-[8px] opacity-60",children:"▼"})]}),u.jsx(xu,{children:d&&u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>h(!1)}),u.jsxs(ya.div,{initial:{opacity:0,y:10,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.95},transition:{duration:.15},className:"absolute right-0 mt-2 w-48 rounded-2xl bg-[#091224] border border-white/10 shadow-2xl p-2 z-50 flex flex-col gap-1",children:[u.jsx("span",{className:"text-[8px] text-slate-500 uppercase font-black tracking-widest block px-3 py-1.5 border-b border-white/5 mb-1",children:y("layout.select_language")}),Object.keys(ol).map(O=>{const q=ol[O],X=f===O;return u.jsxs("button",{onClick:()=>{b(O),h(!1)},className:`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-left text-[11px] font-black uppercase transition-all cursor-pointer ${X?"bg-blue-brand/20 text-white border border-blue-brand/35 shadow-[0_2px_10px_rgba(37,99,235,0.2)]":"text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"}`,children:[u.jsx("span",{className:"text-sm leading-none",children:q.flag}),u.jsx("span",{children:q.label})]},O)})]})]})})]}),u.jsxs("button",{className:"w-11 h-11 flex flex-col items-center justify-center gap-1.5 border border-white/10 rounded-xl text-white bg-white/5 active:scale-95 transition-all relative overflow-hidden group",onClick:()=>m(!p),children:[u.jsx("div",{className:"absolute inset-0 bg-blue-brand opacity-0 group-active:opacity-10 transition-opacity"}),u.jsx(xu,{mode:"wait",children:p?u.jsx(ya.div,{initial:{rotate:-90,opacity:0,scale:.5},animate:{rotate:0,opacity:1,scale:1},exit:{rotate:90,opacity:0,scale:.5},children:u.jsx(Fh,{size:22,className:"text-blue-brand-2"})},"x"):u.jsxs(ya.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"flex flex-col gap-1.25 items-center justify-center",children:[u.jsx("span",{className:"w-5 h-0.5 bg-white rounded-full block"}),u.jsx("span",{className:"w-5 h-0.5 bg-blue-brand-2 rounded-full block"}),u.jsx("span",{className:"w-3 h-0.5 bg-white rounded-full block self-end"})]},"menu")})]})]})]})]}),u.jsx(xu,{children:p&&u.jsxs(u.Fragment,{children:[u.jsx(ya.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>m(!1),className:"fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm"}),u.jsxs(ya.nav,{initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{type:"spring",damping:25,stiffness:200},className:"fixed top-0 right-0 bottom-0 w-[280px] md:w-[340px] z-[60] bg-[#050a14] border-l border-white/10 flex flex-col shadow-2xl shadow-blue-brand/20",children:[u.jsx("div",{className:"absolute inset-0 opacity-5 pointer-events-none bg-grid-slate-900/[0.1] bg-[bottom_1px_center] [mask-image:linear-gradient(to_bottom,white,transparent)]"}),u.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-brand to-transparent opacity-50"}),u.jsxs("header",{className:"flex items-center justify-between p-4 border-b border-white/10 relative z-10 bg-black/40",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:"w-12 h-12 rounded-xl overflow-hidden border border-white/10 shadow-lg shadow-blue-brand/20 bg-[#0a1224] flex items-center justify-center shrink-0",children:u.jsx("img",{src:"https://github.com/luqueSmith/MGG/blob/main/img/Logo_mgg.png?raw=true",alt:"",className:"w-10 h-10 object-contain"})}),u.jsxs("div",{className:"flex flex-col gap-0.5",children:[u.jsx("strong",{className:"text-[13px] font-black uppercase text-white tracking-tight leading-none",children:"Sistema Mutodex"}),u.jsx("span",{className:"text-[8px] text-blue-brand-2 font-black uppercase tracking-[0.2em] opacity-80 leading-none mt-0.5",children:"v2.1.2 Build 550"})]})]}),u.jsx("button",{onClick:()=>m(!1),className:"w-10 h-10 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 text-white/50 hover:text-white transition-colors active:scale-90",children:u.jsx(Fh,{size:18})})]}),u.jsxs("div",{className:"flex-1 overflow-y-auto p-5 flex flex-col gap-3.5 relative z-10 scrollbar-none",children:[u.jsx("div",{className:"space-y-2.5 pb-2",children:iu.map((O,q)=>{const X=gf[O.path]||wu,F=n===O.path,Z=O.key;return u.jsxs(ya.button,{initial:{opacity:0,x:25},animate:{opacity:1,x:0},transition:{delay:q*.04,type:"spring",stiffness:150},onClick:()=>A(O.path),className:`flex items-center gap-4 w-full p-3.5 rounded-2xl text-[13px] md:text-sm font-black uppercase tracking-wider transition-all relative group border ${F?"bg-blue-brand/20 text-white border-blue-brand shadow-[0_4px_25px_rgba(37,99,235,0.25)] scale-[1.02]":"bg-white/[0.03] text-slate-300 border-white/5 hover:bg-white/8 hover:text-white hover:scale-[1.01]"}`,children:[u.jsx("div",{className:`p-2 rounded-xl transition-all ${F?"bg-blue-brand text-white shadow-md":"bg-white/5 group-hover:bg-white/10 group-hover:scale-105"}`,children:u.jsx(X,{size:18})}),u.jsx("span",{className:"relative z-10 font-extrabold tracking-wide",children:y(Z)}),F&&u.jsx("div",{className:"ml-auto w-1.5 h-4 bg-blue-brand-2 rounded-full shadow-[0_0_12px_#3b82f6]"})]},O.path)})}),u.jsxs("div",{className:"border-t border-white/10 pt-5 mt-3",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-3.5 px-2",children:[u.jsx(If,{size:13,className:"text-blue-brand-2 animate-pulse"}),u.jsx("span",{className:"text-[10px] text-slate-400 font-black uppercase tracking-[0.15em] leading-none",children:y("layout.color_theme")})]}),u.jsx("div",{className:"bg-white/[0.02] border border-white/5 rounded-2xl p-2 grid grid-cols-2 gap-2",children:["blue","green","red","pink","purple","white"].map(O=>{const q=G===O,F={blue:{label:"BLUE",dotBg:"bg-[#2563eb]",activeStyle:"border-[#2563eb]/50 text-blue-400 bg-[#2563eb]/10 shadow-[0_0_12px_rgba(37,99,235,0.35)] scale-[1.02]",inactiveStyle:"border-white/5 bg-white/[0.02] text-slate-400 hover:text-white",glowBg:"bg-[#2563eb]"},green:{label:"GREEN",dotBg:"bg-[#15803d]",activeStyle:"border-[#15803d]/60 text-green-400 bg-[#15803d]/15 shadow-[0_0_12px_rgba(21,128,61,0.4)] scale-[1.02]",inactiveStyle:"border-white/5 bg-white/[0.02] text-slate-400 hover:text-white",glowBg:"bg-[#15803d]"},red:{label:"RED",dotBg:"bg-[#dc2626]",activeStyle:"border-[#dc2626]/50 text-red-400 bg-[#dc2626]/10 shadow-[0_0_12px_rgba(220,38,38,0.4)] scale-[1.02]",inactiveStyle:"border-white/5 bg-white/[0.02] text-slate-400 hover:text-white",glowBg:"bg-[#dc2626]"},pink:{label:"PINK",dotBg:"bg-[#db2777]",activeStyle:"border-[#db2777]/50 text-pink-400 bg-[#db2777]/10 shadow-[0_0_12px_rgba(219,39,119,0.35)] scale-[1.02]",inactiveStyle:"border-white/5 bg-white/[0.02] text-slate-400 hover:text-white",glowBg:"bg-[#db2777]"},purple:{label:"PURPLE",dotBg:"bg-[#7c3aed]",activeStyle:"border-[#7c3aed]/50 text-purple-400 bg-[#7c3aed]/10 shadow-[0_0_12px_rgba(124,58,237,0.35)] scale-[1.02]",inactiveStyle:"border-white/5 bg-white/[0.02] text-slate-400 hover:text-white",glowBg:"bg-[#7c3aed]"},white:{label:"WHITE",dotBg:"bg-white",activeStyle:"border-white/30 text-white bg-white/10 shadow-[0_0_12px_rgba(255,255,255,0.25)] scale-[1.02]",inactiveStyle:"border-white/5 bg-white/[0.02] text-slate-400 hover:text-white",glowBg:"bg-white"}}[O];return u.jsxs("button",{onClick:()=>M(O),className:`flex items-center gap-2.5 w-full py-3 px-3 rounded-[14px] text-[10px] font-black uppercase tracking-wider transition-all duration-300 border active:scale-95 cursor-pointer relative group ${q?F.activeStyle:F.inactiveStyle}`,children:[u.jsxs("div",{className:"relative flex items-center justify-center shrink-0 w-4 h-4",children:[q&&u.jsx(ya.div,{layoutId:`dot-glow-${O}`,className:`absolute -inset-0.5 rounded-full blur-sm opacity-50 ${F.glowBg}`}),u.jsx("div",{className:`w-3.5 h-3.5 rounded-full ${F.dotBg} border border-white/15 relative z-10 transition-transform group-hover:scale-110 shadow-inner`})]}),u.jsx("span",{className:`font-black relative z-10 transition-colors ${q?"text-white":"text-slate-400 group-hover:text-white"}`,children:F.label}),q&&u.jsx("div",{className:"ml-auto flex items-center shrink-0",children:u.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${F.glowBg} animate-pulse relative`})})]},O)})})]}),u.jsx("div",{className:"border-t border-white/10 pt-5 mt-3",children:u.jsxs("a",{href:I,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-between p-4 rounded-2xl bg-[#25d366]/10 border border-[#25d366]/30 text-white hover:bg-[#25d366]/15 transition-all group scale-[1] active:scale-95",children:[u.jsxs("div",{className:"flex items-center gap-3.5",children:[u.jsx("div",{className:"p-2.5 rounded-xl bg-[#25d366] text-white shadow-[0_0_12px_rgba(37,211,102,0.35)] shrink-0",children:u.jsx(xl,{size:16})}),u.jsxs("div",{className:"flex flex-col text-left",children:[u.jsx("span",{className:"text-[11px] font-black uppercase text-[#25d366] tracking-wider leading-none mb-1",children:y("layout.active_support")}),u.jsx("span",{className:"text-[10px] text-slate-300 font-bold leading-tight",children:y("whatsapp.title")})]})]}),u.jsx("div",{className:"flex items-center justify-center w-6 h-6 rounded-full bg-[#25d366]/15 group-hover:translate-x-0.5 transition-transform shrink-0",children:u.jsx("span",{className:"text-[#25d366] text-xs font-black",children:"→"})})]})})]}),u.jsx("div",{className:"p-4 border-t border-white/10 relative z-10 bg-black/50",children:u.jsxs("div",{className:"flex flex-col gap-2",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("span",{className:"text-[7px] text-slate-600 uppercase font-black tracking-widest leading-none",children:"Powered by"}),u.jsx("strong",{className:"text-blue-brand-2 text-[9px] uppercase font-black tracking-wider leading-none",children:"Smith Luque"})]}),u.jsx("div",{className:"w-full h-0.5 bg-white/5 rounded-full overflow-hidden",children:u.jsx(ya.div,{initial:{width:0},animate:{width:"100%"},transition:{duration:1.5,ease:"easeInOut"},className:"h-full bg-blue-brand"})})]})})]})]})}),u.jsx("main",{className:"app-shell pb-20 pt-4 lg:pt-6",children:u.jsxs("div",{className:"container mx-auto px-4 max-w-[1180px]",children:[u.jsxs("section",{className:"panel mb-6 !p-0 overflow-hidden flex flex-col lg:flex-row items-stretch border transition-all duration-500 bg-blue-brand/5 border-blue-brand/20",children:[u.jsxs("div",{className:"flex items-center gap-6 px-5 py-3 border-b lg:border-b-0 lg:border-r border-white/5 bg-black/20 shrink-0",children:[u.jsxs("div",{className:"flex flex-col",children:[u.jsx("span",{className:`text-[10px] font-black uppercase tracking-widest leading-none mb-1 ${N}`,children:y("stats.mutants")}),u.jsx("strong",{className:"text-white text-sm font-black",children:"550+"})]}),u.jsxs("div",{className:"flex flex-col border-l border-white/10 pl-4",children:[u.jsx("span",{className:`text-[10px] font-black uppercase tracking-widest leading-none mb-1 ${N}`,children:y("stats.version")}),u.jsx("strong",{className:"text-white/80 text-sm font-black",children:"2.1.2"})]})]}),u.jsxs("div",{className:"flex-1 flex items-center gap-3 px-5 py-3 min-h-[50px]",children:[u.jsx("div",{className:"w-2 h-2 rounded-full animate-pulse shrink-0 bg-blue-brand mt-0.5 self-start md:self-center"}),u.jsxs("p",{className:"text-[10px] md:text-xs text-slate-300 font-bold m-0 italic leading-relaxed",children:[u.jsx("span",{className:`${N} uppercase mr-2 opacity-70 whitespace-nowrap`,children:y("tip.label")}),y("tip.text")]})]}),u.jsx("div",{className:"hidden xl:flex items-center gap-2 px-5 py-3 bg-black/10 shrink-0",children:u.jsxs("a",{href:I,target:"_blank",rel:"noopener noreferrer",className:"text-[10px] font-black uppercase flex items-center gap-2 hover:brightness-125 transition-all text-green-brand",children:[u.jsx("div",{className:"w-1.5 h-1.5 rounded-full animate-ping bg-green-brand"}),y("layout.active_support")]})})]}),s,u.jsx("section",{className:"panel mt-[18px] transition-all duration-500",children:u.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3.5",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"m-0 mb-1.5 text-lg font-bold",children:y("whatsapp.title")}),u.jsx("p",{className:"text-muted m-0 text-sm",children:y("whatsapp.desc")})]}),u.jsxs("a",{className:"btn px-6 btn-primary",target:"_blank",rel:"noopener noreferrer",href:I,children:[u.jsx(xl,{size:18}),u.jsx("span",{children:y("whatsapp.btn")})]})]})})]})}),u.jsx("footer",{className:"site-footer border-t border-line bg-black/35 py-11",children:u.jsxs("div",{className:"container mx-auto px-4 max-w-[1180px] grid lg:grid-cols-[1.2fr_1fr_0.8fr] gap-6",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"brand flex items-center gap-3.5 mb-3",children:[u.jsx("div",{className:`brand-logo w-11 h-11 flex items-center justify-center rounded-[14px] bg-gradient-to-br ${K} overflow-hidden shadow-lg`,children:u.jsx("img",{src:"https://github.com/luqueSmith/MGG/blob/main/img/Logo_mgg.png?raw=true",alt:"Logo MGG",className:"w-full h-full object-cover"})}),u.jsxs("div",{children:[u.jsx("strong",{className:"block text-white uppercase tracking-tight",children:"Mutodex MGG"}),u.jsx("span",{className:`block text-[11px] ${N} uppercase tracking-[0.22em] font-bold`,children:y("footer.renovated")})]})]}),u.jsx("p",{className:"text-muted text-sm",children:y("footer.desc")})]}),u.jsxs("div",{children:[u.jsx("div",{className:"kv-label mb-3",children:y("footer.nav")}),u.jsx("div",{className:"grid gap-2",children:iu.map(O=>u.jsx("button",{onClick:()=>A(O.path),className:`text-slate-300 hover:text-white text-sm text-left flex items-center gap-2 transition-colors ${n===O.path?N:""}`,children:y(O.key)},O.path))})]}),u.jsxs("div",{children:[u.jsx("div",{className:"kv-label mb-1.5",children:y("footer.legal")}),u.jsxs("div",{className:"flex flex-col gap-2",children:[u.jsx("button",{onClick:()=>A("/terminos"),className:"text-slate-400 hover:text-white text-xs text-left transition-colors",children:y("footer.terms")}),u.jsx("p",{className:"text-muted text-[11px] m-0 leading-relaxed mt-2",children:y("footer.rights")})]})]})]})})]})}const c5={a_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_a_01_platinum.png",a_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_a_02_platinum.png",aa_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_01_platinum.png",aa_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_02.png",ab_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_01_platinum.png",ab_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_02_platinum.png",ab_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_03_platinum.png",ac_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_01_platinum.png",ac_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_02_platinum.png",ac_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_03_platinum.png",ad_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_01_platinum.png",ad_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_02_platinum.png",ae_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_01_platinum.png",ae_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_02_silver.png",af_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_01_platinum.png",af_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_02_silver.png",b_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_b_01_platinum.png",b_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_b_02_platinum.png",b_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_b_03.png",ba_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_01_platinum.png",ba_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_02_platinum.png",bb_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_01_platinum.png",bb_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_02_platinum.png",bc_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_01_platinum.png",bc_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_02_platinum.png",bd_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_01_platinum.png",bd_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_02_silver.png",be_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_01_platinum.png",be_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_02_silver.png",be_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_03_platinum.png",bf_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_01_platinum.png",bf_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_02_platinum.png",c_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_c_01_platinum.png",c_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_c_02_platinum.png",ca_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_01_platinum.png",ca_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_02_platinum.png",ca_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_03_platinum.png",cb_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_01_platinum.png",cb_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_02_platinum.png",cc_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_01_platinum.png",cc_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_02_platinum.png",cd_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_01_platinum.png",cd_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_02_silver.png",cd_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_03_platinum.png",ce_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_01_platinum.png",ce_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_03_platinum.png",cf_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_01_platinum.png",cf_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_02_platinum.png",d_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_d_01_platinum.png",da_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_01_platinum.png",da_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_02_platinum.png",db_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_01_platinum.png",db_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_02_platinum.png",db_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_03_platinum.png",dc_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_01_platinum.png",dc_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_02_silver.png",dc_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_03_gothic.png",dd_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_01_platinum.png",dd_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_02_platinum.png",de_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_01_platinum.png",de_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_02_platinum.png",df_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_01_platinum.png",df_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_02_platinum.png",e_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_e_01_platinum.png",ea_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_01_platinum.png",ea_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_02_platinum.png",ea_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_03_silver.png",eb_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_01_platinum.png",eb_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_02_platinum.png",eb_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_03_platinum.png",ec_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_01_platinum.png",ec_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_02_platinum.png",ed_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_01_platinum.png",ed_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_02_platinum.png",ee_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_01_platinum.png",ee_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_02_platinum.png",ee_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_03_platinum.png",ef_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_01_platinum.png",ef_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_02_heroes.png",ef_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_03_silver.png",f_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_f_01_platinum.png",f_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_f_03.png",fa_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_01_platinum.png",fa_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_02_platinum.png",fb_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_01_platinum.png",fb_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_02_silver.png",fb_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_03_platinum.png",fc_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_01_platinum.png",fc_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_02.png",fd_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_01_platinum.png",fd_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_02_platinum.png",fd_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_03_japan.png",fe_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_01_platinum.png",fe_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_02_platinum.png",ff_01:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_01_platinum.png",ff_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_02_platinum.png",fc_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_03.png",cb_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_03_platinum.png",ba_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_03_platinum.png",ff_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_03_platinum.png",bb_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_03_platinum.png",de_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_03_platinum.png",da_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_03_platinum.png",bf_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_03_silver.png",cd_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_04_platinum.png",dc_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_04_platinum.png",aa_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_03_platinum.png",d_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_d_03.png",ec_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_03_platinum.png",bc_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_03_platinum.png",ad_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_03_silver.png",af_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_04_platinum.png",ae_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_03_platinum.png",fb_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_04_platinum.png",bd_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_03_platinum.png",cf_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_04_platinum.png",ce_02:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_02_silver.png",dd_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_03_platinum.png",cc_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_03_platinum.png",df_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_03_platinum.png",ed_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_03_platinum.png",af_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_03_platinum.png",bc_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_04.png",db_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_04.png",fa_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_03_platinum.png",fe_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_04_platinum.png",fe_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_03_platinum.png",a_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_a_03.png",cf_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_03_platinum.png",de_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_04_platinum.png",ba_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_04_platinum.png",cb_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_04_platinum.png",fd_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_04_platinum.png",fc_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_04.png",fa_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_04.png",bf_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_04_starwars.png",fe_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_05_silver.png",ca_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_04_platinum.png",df_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_04_platinum.png",ed_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_04.png",ac_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_04.png",eb_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_04_platinum.png",de_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_05_platinum.png",bf_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_05_platinum.png",c_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_c_03.png",ec_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_04.png",ef_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_04_platinum.png",ff_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_04_platinum.png",ad_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_04_platinum.png",cc_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_04.png",ab_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_04_platinum.png",ce_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_04_platinum.png",bd_99:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_99_platinum.png",bb_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_04_platinum.png",aa_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_04_platinum.png",ae_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_04.png",cb_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_05.png",af_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_05.png",da_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_04_platinum.png",bd_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_04_platinum.png",fc_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_05.png",ee_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_04_platinum.png",dd_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_04_platinum.png",be_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_04_platinum.png",ea_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_04_platinum.png",ef_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_05_platinum.png",df_99:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_99.png",fb_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_05_platinum.png",eb_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_05_platinum.png",ca_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_05_platinum.png",ac_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_05_platinum.png",ab_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_05_gachaboss.png",aa_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_05_platinum.png",fa_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_05_platinum.png",fe_99:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_99_platinum.png",ce_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_05_villains.png",e_03:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_e_03_platinum.png",cc_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_05_platinum.png",da_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_05_platinum.png",df_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_05_platinum.png",db_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_05.png",bc_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_05_platinum.png",dc_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_05_platinum.png",ed_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_05_platinum.png",ec_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_05_platinum.png",fd_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_05_platinum.png",ec_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_06_olympians.png",ff_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_05_platinum.png",be_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_05_platinum.png",ad_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_05_platinum.png",bd_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_05_platinum.png",dd_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_05_platinum.png",da_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_06_platinum.png",cf_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_05_platinum.png",bb_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_05_platinum.png",cf_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_06.png",cd_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_05.png",ea_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_05_platinum.png",af_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_06.png",ae_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_05_platinum.png",ee_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_05_platinum.png",ba_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_05_platinum.png",ce_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_06_platinum.png",fb_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_06_platinum.png",bc_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_06_platinum.png",fd_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_06_platinum.png",dc_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_06_platinum.png",ed_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_06_platinum.png",fa_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_06_movies.png",bf_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_06_platinum.png",ad_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_06_platinum.png",cd_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_06_platinum.png",db_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_06_platinum.png",ac_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_06_platinum.png",fe_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_06_platinum.png",eb_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_06_elements.png",ea_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_06_platinum.png",be_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_06_platinum.png",b_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_b_04.png",ab_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_06_platinum.png",ef_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_06_platinum.png",fc_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_06_platinum.png",df_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_06.png",cb_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_06.png",dd_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_06_platinum.png",de_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_06.png",ca_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_06_platinum.png",ff_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_06_platinum.png",bd_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_06_platinum.png",af_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_07_platinum.png",cf_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_07.png",ae_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_06_platinum.png",ba_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_06_platinum.png",ec_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_07_platinum.png",ed_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_07_platinum.png",bd_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_07_soldiers.png",db_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_07_platinum.png",da_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_07_platinum.png",fe_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_07_platinum.png",ab_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_07.png",df_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_07_platinum.png",bf_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_07_platinum.png",ee_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_06_platinum.png",aa_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_06_platinum.png",ce_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_07_platinum.png",cc_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_06_platinum.png",cc_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_07.png",fc_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_07_platinum.png",ba_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_07_platinum.png",f_04:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_f_04.png",fd_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_07_platinum.png",ef_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_07_platinum.png",ad_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_07_platinum.png",ac_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_07_lucha.png",ca_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_07_platinum.png",fb_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_07_platinum.png",fa_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_07_platinum.png",de_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_07_platinum.png",cb_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_07_platinum.png",bc_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_07_platinum.png",cd_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_07.png",ea_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_07_platinum.png",ee_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_07_platinum.png",be_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_07_platinum.png",dd_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_07_platinum.png",eb_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_07_platinum.png",ec_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_08_platinum.png",cf_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_08_platinum.png",bc_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_08_platinum.png",ac_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_08_platinum.png",dd_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_08_platinum.png",de_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_08_platinum.png",fc_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_08_platinum.png",ae_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_07_platinum.png",db_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_08_platinum.png",af_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_08_platinum.png",fa_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_08_platinum.png",ff_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_07.png",bb_06:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_06_platinum.png",ef_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_08.png",da_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_08_platinum.png",cb_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_08_platinum.png",ea_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_08.png",fb_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_08_platinum.png",bf_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_08_platinum.png",ad_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_08_platinum.png",fc_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_09_fantasy.png",ce_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_08_platinum.png",ba_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_08_platinum.png",ae_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_08_platinum.png",bd_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_08_platinum.png",fa_99:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_99.png",eb_99:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_99.png",cd_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_08_platinum.png",dc_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_07.png",ed_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_08_platinum.png",fd_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_08_platinum.png",ca_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_08_platinum.png",df_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_08_platinum.png",eb_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_08.png",cf_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_09_platinum.png",ad_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_09_platinum.png",dc_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_08_platinum.png",bb_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_07_platinum.png",aa_07:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_07_platinum.png",ac_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_09_platinum.png",bd_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_09_platinum.png",ff_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_08_platinum.png",ee_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_08_platinum.png",be_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_08_platinum.png",aa_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_08_platinum.png",ca_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_09.png",eb_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_09_platinum.png",df_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_09_platinum.png",fe_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_08_platinum.png",bb_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_08_platinum.png",ec_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_09_platinum.png",de_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_09_platinum.png",ab_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_08_platinum.png",be_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_09_platinum.png",ca_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_10_platinum.png",ea_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_09_platinum.png",cc_08:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_08_platinum.png",bf_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_09.png",cc_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_09_platinum.png",ae_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_09_platinum.png",cd_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_09_platinum.png",da_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_09_music.png",fd_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_09_platinum.png",af_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_09_platinum.png",a_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_a_05_platinum.png",ea_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_10.png",dd_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_09_platinum.png",fd_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_10.png",ab_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_09.png",ac_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_10_platinum.png",df_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_10_platinum.png",bc_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_09_platinum.png",af_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_10_platinum.png",bb_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_09_platinum.png",de_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_10_platinum.png",cb_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_09_platinum.png",db_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_09_platinum.png",dc_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_09_platinum.png",fe_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_09_platinum.png",ba_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_09_platinum.png",bf_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_10_western.png",fa_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_09_platinum.png",aa_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_09_platinum.png",cf_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_10_platinum.png",ce_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_09_platinum.png",ef_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_09_platinum.png",da_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_10_platinum.png",ee_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_09_platinum.png",ff_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_09_platinum.png",fb_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_10_platinum.png",ed_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_09_platinum.png",fb_09:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_09_platinum.png",ef_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_10_platinum.png",ed_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_10_platinum.png",cb_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_10_platinum.png",ae_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_10.png",dc_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_10_platinum.png",bd_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_10_platinum.png",fe_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_10_platinum.png",fa_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_10_platinum.png",cd_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_10_platinum.png",ad_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_10_platinum.png",fc_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_10_platinum.png",bb_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_10_platinum.png",af_99:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_99_platinum.png",bc_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_10_platinum.png",ce_99:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_99.png",dd_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_10_platinum.png",aa_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_10_platinum.png",ba_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_10_platinum.png",cc_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_10_platinum.png",db_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_10_platinum.png",ec_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_10_platinum.png",eb_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_10_platinum.png",ab_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_10_platinum.png",be_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_10_platinum.png",ce_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_10.png",eb_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_11_platinum.png",ff_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_10_platinum.png",db_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_11.png",fc_99:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_99_platinum.png",ee_10:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_10_platinum.png",ac_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_11_platinum.png",bd_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_11_platinum.png",fa_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_11_platinum.png",af_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_11.png",ce_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_11_platinum.png",ca_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_11_beach.png",cd_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_11_platinum.png",fb_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_11_platinum.png",da_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_11_platinum.png",ed_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_11_platinum.png",aa_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_11_platinum.png",bb_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_11.png",ef_99:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_99.png",fd_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_11_platinum.png",cb_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_11_platinum.png",bf_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_11.png",de_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_11_platinum.png",ae_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_11_platinum.png",ec_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_11.png",dc_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_11_platinum.png",ba_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_11_platinum.png",ff_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_11_platinum.png",df_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_11.png",b_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_b_05_platinum.png",ee_99:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_99.png",fc_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_11_platinum.png",cf_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_11.png",cc_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_11.png",c_05:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_c_05_platinum.png",fb_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_12_platinum.png",ad_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_11.png",dd_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_11_platinum.png",be_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_11_platinum.png",fe_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_11_platinum.png",ac_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_12_platinum.png",ea_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_11.png",ca_99:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_99.png",ab_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_11_platinum.png",ee_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_11_platinum.png",ef_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_12_platinum.png",bc_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_11_platinum.png",bb_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_12.png",de_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_12_platinum.png",e_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_e_12_platinum.png",d_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_d_12_platinum.png",af_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_12.png",df_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_12_vegetal.png",cf_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_12_platinum.png",cb_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_12_platinum.png",fa_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_12_platinum.png",dd_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_12.png",ef_11:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_11_platinum.png",fc_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_12.png",ff_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_12_platinum.png",ed_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_12_platinum.png",ca_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_12_platinum.png",db_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_12.png",ec_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_12_platinum.png",cd_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_12.png",ed_99:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_99.png",eb_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_12_platinum.png",fd_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_12_platinum.png",f_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_f_13_platinum.png",ab_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_12_platinum.png",bc_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_12.png",aa_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_12_platinum.png",fe_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_12.png",bf_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_12_platinum.png",c_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_c_13_platinum.png",ae_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_12_platinum.png",ce_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_12.png",be_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_12_platinum.png",fe_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_13.png",da_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_12_platinum.png",dc_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_12.png",f_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_f_12_platinum.png",ad_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_12_platinum.png",b_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_b_12_platinum.png",d_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_d_13_platinum.png",bd_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_12_platinum.png",aa_99:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_99.png",cf_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_13_platinum.png",ea_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_12_platinum.png",b_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_b_13_platinum.png",bf_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_13.png",dd_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_13_platinum.png",ee_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_12.png",ad_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_13_platinum.png",fa_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_13.png",da_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_13_platinum.png",ca_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_13.png",bc_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_13_platinum.png",de_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_13.png",ba_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_12_platinum.png",a_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_a_13_platinum.png",ef_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_13_platinum.png",cb_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_13_platinum.png",eb_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_13.png",ab_99:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_99.png",ae_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_13_platinum.png",cf_99:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_99.png",bb_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_13_platinum.png",fd_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_13.png",cc_12:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_12_platinum.png",bc_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_14.png",e_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_e_13_platinum.png",dc_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_13_platinum.png",ac_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_13.png",fe_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_14_platinum.png",fc_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_13_platinum.png",ef_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_14.png",cc_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_13_platinum.png",ff_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_13_platinum.png",ae_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_14.png",aa_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_13_platinum.png",cd_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_13_platinum.png",cb_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_14_platinum.png",ba_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_13_platinum.png",dc_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_14.png",df_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_13_platinum.png",ca_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_14_olympics.png",db_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_13_platinum.png",ae_99:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_99.png",ac_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_14_platinum.png",af_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_13_platinum.png",db_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_14.png",ec_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_13_platinum.png",ce_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_13_platinum.png",ea_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_13_platinum.png",ea_99:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_99.png",af_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_14_platinum.png",ff_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_14.png",dd_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_14_platinum.png",fd_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_14.png",fb_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_13_platinum.png",ab_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_13_platinum.png",ed_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_13_platinum.png",bd_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_14_platinum.png",da_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_14.png",c_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_c_14_platinum.png",ed_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_14_platinum.png",de_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_14.png",a_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_a_14_platinum.png",ee_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_13_platinum.png",ff_99:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_99.png",f_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_f_14_platinum.png",fb_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_14.png",bd_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_13_platinum.png",cd_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_14_platinum.png",cc_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_14_chess.png",b_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_b_14_platinum.png",ab_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_14.png",be_13:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_13_platinum.png",ea_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_14_platinum.png",ba_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_14.png",cf_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_14_platinum.png",de_15:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_15.png",ad_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_14_platinum.png",ab_15:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_15.png",e_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_e_14_platinum.png",bf_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_14_platinum.png",be_15:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_15.png",ce_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_14_platinum.png",ea_15:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_15_platinum.png",d_14:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_d_14_platinum.png",dd_15:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_15.png"};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const il={vida:"https://pokradex.org/MutantsGG/assets/icon_hp.png",velocidad:"https://pokradex.org/MutantsGG/assets/icon_speed.png"},Co=[];Co.push(`1. Robot
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
   Habilidad: 700 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png`);Co.push(`141. Incubus
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
   Habilidad: 1,791 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png`);Co.push(`241. Búho Sabio
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
   Habilidad: 1,117 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png`);Co.push(`341. Sir Galahad de Oro
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
   Habilidad: 1,556 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png`);function hf(s){const n=s.split("|").map(h=>h.trim()),i=n[0]||"",l=n.find(h=>h.toLowerCase().includes("triple:")),p=l?l.toLowerCase().includes("sí"):i.toLowerCase().includes("x3"),m=n.find(h=>h.toLowerCase().includes("icono:")),d=m?m.replace(/icono:/i,"").trim():"";return{valor:i,es_triple:p,icono:d}}function u5(s){const n=s.split("|").map(m=>m.trim()),i=n[0]||"",l=n.find(m=>m.toLowerCase().includes("icono:")),p=l?l.replace(/icono:/i,"").trim():"";return{valor:i,icono:p}}const x0=["a_01","a_02","aa_01","aa_02","ab_01","ab_02","ab_03","ac_01","ac_02","ac_03","ad_01","ad_02","ae_01","ae_02","af_01","af_02","b_01","b_02","b_03","ba_01","ba_02","bb_01","bb_02","bc_01","bc_02","bd_01","bd_02","be_01","be_02","be_03","bf_01","bf_02","c_01","c_02","ca_01","ca_02","ca_03","cb_01","cb_02","cc_01","cc_02","cd_01","cd_02","cd_03","ce_01","ce_03","cf_01","cf_02","d_01","da_01","da_02","db_01","db_02","db_03","dc_01","dc_02","dc_03","dd_01","dd_02","de_01","de_02","df_01","df_02","e_01","ea_01","ea_02","ea_03","eb_01","eb_02","eb_03","ec_01","ec_02","ed_01","ed_02","ee_01","ee_02","ee_03","ef_01","ef_02","ef_03","f_01","f_03","fa_01","fa_02","fb_01","fb_02","fb_03","fc_01","fc_02","fd_01","fd_02","fd_03","fe_01","fe_02","ff_01","ff_02","fc_03","cb_03","ba_03","ff_03","bb_03","de_03","da_03","bf_03","cd_04","dc_04","aa_03","d_03","ec_03","bc_03","ad_03","af_04","ae_03","fb_04","bd_03","cf_04","ce_02","dd_03","cc_03","df_03","ed_03","af_03","bc_04","db_04","fa_03","fe_04","fe_03","a_03","cf_03","de_04","ba_04","cb_04","fd_04","fc_04","fa_04","bf_04","fe_05","ca_04","df_04","ed_04","ac_04","eb_04","de_05","bf_05","c_03","ec_04","ef_04","ff_04","ad_04","cc_04","ab_04","ce_04","bd_99","bb_04","aa_04","ae_04","cb_05","af_05","da_04","bd_04","fc_05","ee_04","dd_04","be_04","ea_04","ef_05","df_99","fb_05","eb_05","ca_05","ac_05","ab_05","aa_05","fa_05","fe_99","ce_05","e_03","cc_05","da_05","df_05","db_05","bc_05","dc_05","ed_05","ec_05","fd_05","ec_06","ff_05","be_05","ad_05","bd_05","dd_05","da_06","cf_05","bb_05","cf_06","cd_05","ea_05","af_06","ae_05","ee_05","ba_05","ce_06","fb_06","bc_06","fd_06","dc_06","ed_06","fa_06","bf_06","ad_06","cd_06","db_06","ac_06","fe_06","eb_06","ea_06","be_06","b_04","ab_06","ef_06","fc_06","df_06","cb_06","dd_06","de_06","ca_06","ff_06","bd_06","af_07","cf_07","ae_06","ba_06","ec_07","ed_07","bd_07","db_07","da_07","fe_07","ab_07","df_07","bf_07","ee_06","aa_06","ce_07","cc_06","cc_07","fc_07","ba_07","f_04","fd_07","ef_07","ad_07","ac_07","ca_07","fb_07","fa_07","de_07","cb_07","bc_07","cd_07","ea_07","ee_07","be_07","dd_07","eb_07","ec_08","cf_08","bc_08","ac_08","dd_08","de_08","fc_08","ae_07","db_08","af_08","fa_08","ff_07","bb_06","ef_08","da_08","cb_08","ea_08","fb_08","bf_08","ad_08","fc_09","ce_08","ba_08","ae_08","bd_08","fa_99","eb_99","cd_08","dc_07","ed_08","fd_08","ca_08","df_08","eb_08","cf_09","ad_09","dc_08","bb_07","aa_07","ac_09","bd_09","ff_08","ee_08","be_08","aa_08","ca_09","eb_09","df_09","fe_08","bb_08","ec_09","de_09","ab_08","be_09","ca_10","ea_09","cc_08","bf_09","cc_09","ae_09","cd_09","da_09","fd_09","af_09","a_05","ea_10","dd_09","fd_10","ab_09","ac_10","df_10","bc_09","af_10","bb_09","de_10","cb_09","db_09","dc_09","fe_09","ba_09","bf_10","fa_09","aa_09","cf_10","ce_09","ef_09","da_10","ee_09","ff_09","fb_10","ed_09","fb_09","ef_10","ed_10","cb_10","ae_10","dc_10","bd_10","fe_10","fa_10","cd_10","ad_10","fc_10","bb_10","af_99","bc_10","ce_99","dd_10","aa_10","ba_10","cc_10","db_10","ec_10","eb_10","ab_10","be_10","ce_10","eb_11","ff_10","db_11","fc_99","ee_10","ac_11","bd_11","fa_11","af_11","ce_11","ca_11","cd_11","fb_11","da_11","ed_11","aa_11","bb_11","ef_99","fd_11","cb_11","bf_11","de_11","ae_11","ec_11","dc_11","ba_11","ff_11","df_11","b_05","ee_99","fc_11","cf_11","cc_11","c_05","fb_12","ad_11","dd_11","be_11","fe_11","ac_12","ea_11","ca_99","ab_11","ee_11","ef_12","bc_11","bb_12","de_12","e_12","d_12","af_12","df_12","cf_12","cb_12","fa_12","dd_12","ef_11","fc_12","ff_12","ed_12","ca_12","db_12","ec_12","cd_12","ed_99","eb_12","fd_12","f_13","ab_12","bc_12","aa_12","fe_12","bf_12","c_13","ae_12","ce_12","be_12","fe_13","da_12","dc_12","f_12","ad_12","b_12","d_13","bd_12","aa_99","cf_13","ea_12","b_13","bf_13","dd_13","ee_12","ad_13","fa_13","da_13","ca_13","bc_13","de_13","ba_12","a_13","ef_13","cb_13","eb_13","ab_99","ae_13","cf_99","bb_13","fd_13","cc_12","bc_14","e_13","dc_13","ac_13","fe_14","fc_13","ef_14","cc_13","ff_13","ae_14","aa_13","cd_13","cb_14","ba_13","dc_14","df_13","ca_14","db_13","ae_99","ac_14","af_13","db_14","ec_13","ce_13","ea_13","ea_99","af_14","ff_14","dd_14","fd_14","fb_13","ab_13","ed_13","bd_14","da_14","c_14","ed_14","de_14","a_14","ee_13","ff_99","f_14","fb_14","bd_13","cd_14","cc_14","b_14","ab_14","be_13","ea_14","ba_14","cf_14","de_15","ad_14","ab_15","e_14","bf_14","be_15","ce_14","ea_15","d_14","dd_15"],bl={};x0.forEach((s,n)=>{bl[s.toLowerCase()]=n+1});const yo={};Ef.split(/\r?\n/).forEach(s=>{const n=s.trim();if(!n)return;const i=n.lastIndexOf(" ");if(i!==-1){const l=n.substring(0,i).trim(),p=n.substring(i+1).trim().toLowerCase(),m=c5[p]||"";yo[p]={nombre:l,imagen:m||`https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_${p}.png`,codigo:p.toUpperCase()}}});const fl=[];function p5(){if(fl.length>0)return;const i=Co.join(`
`).split(/\r?\n(?=\d+\.)/).map(m=>{var lt;const d=m.split(/\r?\n/).map(st=>st.trim()).filter(Boolean);if(d.length<2)return null;const h=d[0],f=h.match(/^\d+\.\s+(.+)$/),b=f?f[1].trim():h,x=d.find(st=>st.startsWith("Imagen mutante:")),k=x?x.replace("Imagen mutante:","").trim():"",y=k.match(/specimen_([a-z]+_\d+)/i),G=y?y[1].toLowerCase():"a_01",M=yo[G],I=M?M.nombre:b,A=M?M.imagen:k,N=M?M.codigo:G.toUpperCase(),K=String(bl[G]||((lt=h.match(/^(\d+)\./))==null?void 0:lt[1])||"001"),R=d.find(st=>st.startsWith("Vida:")),z=R?R.replace("Vida:","").trim():"",L=d.find(st=>st.startsWith("Velocidad:")),O=L?L.replace("Velocidad:","").trim():"",q=d.find(st=>st.startsWith("Ataque 1:")),X=hf(q?q.replace("Ataque 1:","").trim():""),F=d.find(st=>st.startsWith("Ataque 2:")),Z=hf(F?F.replace("Ataque 2:","").trim():""),it=d.find(st=>st.startsWith("Habilidad:")),pt=u5(it?it.replace("Habilidad:","").trim():""),Nt=N.toLowerCase().split("_")[0].split(""),qt=[...Nt].sort().join(""),Et=Fa.find(st=>st.id===Nt[0]),D=Fa.find(st=>st.id===Nt[1])||Et,Q=(Et==null?void 0:Et.image)||"",$=(D==null?void 0:D.image)||Q,ct=parseFloat(z.replace(/,/g,""))||0,mt=parseFloat(O)||0,T=X.valor.toLowerCase().replace("x3","").replace(/,/g,"").trim(),U=parseFloat(T)||0,J=pt.valor.toLowerCase().replace(/,/g,"").trim(),W=parseFloat(J)||0;return{id:K,nombre:I,imagen:A,vida:z,velocidad:O,ataques:[X,Z],habilidad:pt,tipoIcono:Q,skinIcono:$,codigo:N,genes:Nt,sortedGenes:qt,stats:{hp:ct,atk:U,spd:mt,def:W,hab:W}}}).filter(m=>m!==null),l=new Set(i.map(m=>m.codigo.toLowerCase())),p=[];x0.forEach(m=>{const d=m.toLowerCase();if(!l.has(d)){const h=yo[d];if(h){const f=String(bl[d]),b=h.nombre,x=h.imagen,k=h.codigo,y=d.split("_")[0].split(""),G=[...y].sort().join(""),M=Fa.find(L=>L.id===y[0]),I=Fa.find(L=>L.id===y[1])||M,A=(M==null?void 0:M.image)||"",N=(I==null?void 0:I.image)||A,K={valor:"1,500",es_triple:!1,icono:A},R={valor:"1,500",es_triple:!1,icono:N},z={valor:"1,000",icono:"https://pokradex.org/MutantsGG/assets/ability_shield_big.png"};p.push({id:f,nombre:b,imagen:x,vida:"12,000",velocidad:"4.00",ataques:[K,R],habilidad:z,tipoIcono:A,skinIcono:N,codigo:k,genes:y,sortedGenes:G,stats:{hp:12e3,atk:1500,spd:4,def:1e3,hab:1e3}}),l.add(d)}}}),Object.keys(yo).forEach(m=>{if(!l.has(m)){const d=yo[m];if(d){const h=String(bl[m]||i.length+p.length+1),f=d.nombre,b=d.imagen,x=d.codigo,k=m.split("_")[0].split(""),y=[...k].sort().join(""),G=Fa.find(z=>z.id===k[0]),M=Fa.find(z=>z.id===k[1])||G,I=(G==null?void 0:G.image)||"",A=(M==null?void 0:M.image)||I,N={valor:"1,500",es_triple:!1,icono:I},K={valor:"1,500",es_triple:!1,icono:A},R={valor:"1,000",icono:"https://pokradex.org/MutantsGG/assets/ability_shield_big.png"};p.push({id:h,nombre:f,imagen:b,vida:"12,000",velocidad:"4.00",ataques:[N,K],habilidad:R,tipoIcono:I,skinIcono:A,codigo:x,genes:k,sortedGenes:y,stats:{hp:12e3,atk:1500,spd:4,def:1e3,hab:1e3}}),l.add(m)}}}),fl.push(...i,...p),fl.sort((m,d)=>parseInt(m.id,10)-parseInt(d.id,10))}p5();/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function d5(s){const n=String(s||"").split("_")[0].toLowerCase().split(""),i=_o[n[0]]||_o.n,l=_o[n[1]]||_o[n[0]]||_o.n;return[i[0],l[1]||l[0]]}function m5(s,n){const[i,l]=d5(n),p=String(s||n||"?").replace(/[^A-Za-zÁÉÍÓÚÜÑ0-9 ]/g," ").split(/\s+/).filter(Boolean).slice(0,2).map(h=>h[0]).join("").toUpperCase()||"MG",m=String(s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;"),d=`
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
  </svg>`;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(d)}`}function pn(s){return Number(s).toLocaleString("es-PE",{minimumFractionDigits:0,maximumFractionDigits:2})}const bf=({mutant:s})=>{var x,k,y,G,M,I,A,N,K,R,z,L;const{translate:n}=Ie(),[i,l]=Y.useState(!1),m=s.codigo.split("_")[0].split("").map(O=>Fa.find(q=>q.id===O)).filter(Boolean),d=()=>{navigator.clipboard.writeText(s.codigo.toUpperCase()).catch(()=>{}),l(!0),setTimeout(()=>l(!1),2e3)},h=((x=s.ataques[0])==null?void 0:x.es_triple)||((k=s.ataques[0])==null?void 0:k.valor.toLowerCase().includes("x3")),f=((y=s.ataques[1])==null?void 0:y.es_triple)||((G=s.ataques[1])==null?void 0:G.valor.toLowerCase().includes("x3")),b=s.fallbackImagen||m5(s.nombre,s.codigo);return u.jsxs(u.Fragment,{children:[u.jsxs("article",{className:"hidden sm:flex group relative flex-col transition-all duration-500 hover:-translate-y-2 h-full",children:[u.jsx("div",{className:"absolute inset-0 bg-blue-brand/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"}),u.jsxs("div",{className:"relative flex flex-col h-full w-full bg-[#0a1224]/80 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transition-all group-hover:border-blue-brand/50",children:[u.jsxs("div",{className:"thumb-wrap aspect-square flex items-center justify-center p-2.5 sm:p-4 relative overflow-hidden bg-gradient-to-br from-white/[0.03] to-transparent",children:[u.jsx("div",{className:"absolute inset-0 opacity-10 pointer-events-none bg-grid-slate-900/[0.1] bg-[center_1px_center]"}),u.jsx("img",{className:"mutant-thumb max-w-[85%] max-h-[85%] object-contain transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2",src:s.imagen,alt:s.nombre,loading:"lazy",onError:O=>{const q=O.currentTarget;q.src=b,q.onerror=null}}),u.jsx("div",{className:"absolute top-2 right-2 sm:top-3 sm:right-3 flex flex-col gap-1 sm:gap-2 scale-90 sm:scale-100 transition-transform",children:m.map((O,q)=>u.jsxs("div",{className:"relative group/badge",children:[u.jsx("img",{src:O==null?void 0:O.image,alt:O==null?void 0:O.name,className:"w-[26px] h-[26px] sm:w-8 sm:h-8 rounded-lg sm:rounded-xl border border-white/20 sm:border-2 shadow-xl bg-black/40 backdrop-blur-md"}),u.jsx("div",{className:"absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-black text-[8px] font-black uppercase tracking-widest text-white rounded-md opacity-0 group-hover/badge:opacity-100 transition-opacity whitespace-nowrap border border-white/10",children:O==null?void 0:O.name})]},q))}),u.jsxs("div",{className:"absolute bottom-2 left-2 sm:bottom-3 sm:left-3 px-1.5 py-0.5 sm:px-2 sm:py-1 bg-blue-brand text-white text-[8px] sm:text-[9px] font-black rounded-md sm:rounded-lg shadow-lg shadow-blue-brand/40 uppercase tracking-tighter",children:["#",s.id]})]}),u.jsxs("div",{className:"card-body p-2.5 sm:p-4 flex flex-col flex-1 gap-2.5 sm:gap-3",children:[u.jsxs("div",{className:"space-y-1 text-left",children:[u.jsx("h3",{className:"m-0 text-sm sm:text-base font-black text-white uppercase tracking-tighter leading-tight sm:leading-none group-hover:text-blue-brand-2 transition-colors",children:s.nombre}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-blue-brand animate-pulse"}),u.jsx("div",{className:"font-mono font-bold text-[8px] sm:text-[10px] tracking-[0.1em] sm:tracking-[0.2em] uppercase text-slate-500",children:s.codigo})]})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-1.5 sm:gap-2 mt-0.5 sm:mt-1",children:[u.jsxs("div",{className:"flex items-center gap-1 sm:gap-2 p-1.5 sm:p-2 bg-white/[0.02] border border-white/5 rounded-xl sm:rounded-2xl hover:bg-white/[0.05] transition-colors min-w-0 text-left",children:[u.jsx("img",{src:il.vida,alt:"Vida",className:"w-3.5 h-3.5 sm:w-[18px] sm:h-[18px] object-contain shrink-0"}),u.jsxs("div",{className:"flex flex-col min-w-0",children:[u.jsx("span",{className:"text-[6px] sm:text-[7px] text-slate-500 uppercase font-black tracking-wider sm:tracking-widest leading-none",children:"Vida"}),u.jsx("span",{className:"text-[10px] sm:text-[11px] font-mono font-bold text-white mt-0.5 leading-none break-all",children:s.vida})]})]}),u.jsxs("div",{className:"flex items-center gap-1 sm:gap-2 p-1.5 sm:p-2 bg-white/[0.02] border border-white/5 rounded-xl sm:rounded-2xl hover:bg-white/[0.05] transition-colors min-w-0 text-left",children:[u.jsx("img",{src:il.velocidad,alt:"Velocidad",className:"w-3.5 h-3.5 sm:w-[18px] sm:h-[18px] object-contain shrink-0"}),u.jsxs("div",{className:"flex flex-col min-w-0",children:[u.jsx("span",{className:"text-[6px] sm:text-[7px] text-slate-500 uppercase font-black tracking-wider sm:tracking-widest leading-none",children:"Velocidad"}),u.jsx("span",{className:"text-[10px] sm:text-[11px] font-mono font-bold text-white mt-0.5 leading-none break-all",children:s.velocidad})]})]})]}),u.jsxs("div",{className:"flex flex-col gap-1.5 sm:gap-2 mt-0.5 sm:mt-1 text-left",children:[u.jsxs("div",{className:"flex items-center justify-between p-1.5 sm:p-2 bg-white/[0.02] border border-white/5 rounded-xl sm:rounded-2xl hover:bg-white/[0.05] transition-colors gap-1 sm:gap-2 min-w-0",children:[u.jsxs("div",{className:"flex items-center gap-1 sm:gap-2 min-w-0",children:[u.jsx("img",{src:(M=s.ataques[0])==null?void 0:M.icono,alt:"Ataque 1",className:"w-4 h-4 sm:w-5 sm:h-5 object-contain shrink-0"}),u.jsxs("div",{className:"flex flex-col min-w-0",children:[u.jsx("span",{className:"text-[6px] sm:text-[7px] text-slate-500 uppercase font-black tracking-wider sm:tracking-widest leading-none",children:"Ataque 1"}),u.jsx("span",{className:"text-[10px] sm:text-[11px] font-mono font-bold text-white mt-0.5 leading-none break-all",children:(I=s.ataques[0])==null?void 0:I.valor})]})]}),u.jsx("span",{className:`text-[6.5px] sm:text-[8px] font-black uppercase tracking-wider px-1 sm:px-1.5 py-0.5 rounded-md border shrink-0 leading-none ${h?"bg-amber-500/10 text-amber-400 border-amber-500/20":"bg-blue-brand/10 text-blue-brand-2 border-blue-brand/20"}`,children:h?"Triple":"Normal"})]}),s.ataques[1]&&u.jsxs("div",{className:"flex items-center justify-between p-1.5 sm:p-2 bg-white/[0.02] border border-white/5 rounded-xl sm:rounded-2xl hover:bg-white/[0.05] transition-colors gap-1 sm:gap-2 min-w-0",children:[u.jsxs("div",{className:"flex items-center gap-1 sm:gap-2 min-w-0",children:[u.jsx("img",{src:(A=s.ataques[1])==null?void 0:A.icono,alt:"Ataque 2",className:"w-4 h-4 sm:w-5 sm:h-5 object-contain shrink-0"}),u.jsxs("div",{className:"flex flex-col min-w-0",children:[u.jsx("span",{className:"text-[6px] sm:text-[7px] text-slate-500 uppercase font-black tracking-wider sm:tracking-widest leading-none",children:"Ataque 2"}),u.jsx("span",{className:"text-[10px] sm:text-[11px] font-mono font-bold text-white mt-0.5 leading-none break-all",children:(N=s.ataques[1])==null?void 0:N.valor})]})]}),u.jsx("span",{className:`text-[6.5px] sm:text-[8px] font-black uppercase tracking-wider px-1 sm:px-1.5 py-0.5 rounded-md border shrink-0 leading-none ${f?"bg-amber-500/10 text-amber-400 border-amber-500/20":"bg-blue-brand/10 text-blue-brand-2 border-blue-brand/20"}`,children:f?"Triple":"Normal"})]}),s.habilidad&&u.jsxs("div",{className:"flex items-center gap-1 sm:gap-2 p-1.5 sm:p-2 bg-white/[0.02] border border-white/5 rounded-xl sm:rounded-2xl hover:bg-white/[0.05] transition-colors min-w-0",children:[u.jsx("img",{src:s.habilidad.icono,alt:"Habilidad",className:"w-4 h-4 sm:w-5 sm:h-5 object-contain shrink-0"}),u.jsxs("div",{className:"flex flex-col min-w-0",children:[u.jsx("span",{className:"text-[6px] sm:text-[7px] text-slate-500 uppercase font-black tracking-wider sm:tracking-widest leading-none",children:"Habilidad"}),u.jsx("span",{className:"text-[10px] sm:text-[11px] font-mono font-bold text-white mt-0.5 leading-none break-all",children:s.habilidad.valor})]})]})]}),u.jsx("button",{className:`group/btn relative overflow-hidden w-full mt-1.5 sm:mt-2 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-[8px] sm:text-[10px] font-black uppercase tracking-[0.1em] sm:tracking-[0.2em] transition-all flex items-center justify-center gap-1.5 sm:gap-2 border-2 ${i?"bg-green-brand/20 border-green-brand/40 text-green-brand":"bg-white/5 border-white/10 text-white hover:border-blue-brand/50 hover:bg-blue-brand/10"}`,onClick:d,children:i?u.jsxs(u.Fragment,{children:[u.jsx(_l,{size:12,className:"animate-bounce shrink-0"}),u.jsx("span",{children:n("mutant.verified")})]}):u.jsxs(u.Fragment,{children:[u.jsx(Vu,{size:12,className:"group-hover/btn:rotate-12 transition-transform shrink-0"}),u.jsx("span",{children:n("mutant.extract_code")})]})})]})]})]}),u.jsx("article",{className:"flex sm:hidden group relative w-full bg-[#0a1224]/90 backdrop-blur-md border border-white/10 hover:border-blue-brand/40 transition-all rounded-xl overflow-hidden shadow-lg h-full",children:u.jsxs("div",{className:"flex items-stretch w-full min-h-[96px]",children:[u.jsxs("div",{className:"relative w-[78px] shrink-0 border-r border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent flex items-center justify-center p-1",children:[u.jsx("img",{className:"w-[90%] h-[90%] object-contain transition-transform duration-500 group-hover:scale-105",src:s.imagen,alt:s.nombre,loading:"lazy",onError:O=>{const q=O.currentTarget;q.src=b,q.onerror=null}}),u.jsxs("div",{className:"absolute -bottom-1 -left-1 px-1.5 py-0.5 bg-blue-brand text-white text-[8px] font-black rounded-lg shadow-md border border-white/10 uppercase tracking-tighter z-10",children:["#",s.id]}),u.jsx("div",{className:"absolute top-1 right-1 flex flex-col gap-0.5 p-0.5 bg-black/40 rounded-md backdrop-blur-sm",children:m.map((O,q)=>u.jsx("img",{src:O==null?void 0:O.image,alt:O==null?void 0:O.name,className:"w-3 h-3 object-contain"},q))})]}),u.jsxs("div",{className:"flex flex-col justify-between p-2 flex-1 min-w-0 border-r border-white/5 text-left bg-gradient-to-br from-white/[0.01] to-transparent",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"m-0 text-[13px] font-black text-white uppercase tracking-tight leading-tight group-hover:text-blue-brand-2 transition-colors break-words whitespace-normal min-w-0 pr-1 line-clamp-2",children:s.nombre}),u.jsx("div",{className:"flex items-center mt-1",children:u.jsx("span",{className:"font-mono font-black text-[9.5px] tracking-wider uppercase text-blue-brand-2 bg-blue-brand/20 px-1.5 py-0.5 rounded border border-blue-brand/35 shadow-sm leading-none",children:s.codigo})})]}),u.jsx("button",{className:`w-full mt-1.5 py-1 px-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider flex items-center justify-center gap-1 border border-white/5 transition-all outline-none ${i?"bg-green-brand/20 border-green-brand/35 text-green-brand":"bg-white/5 hover:bg-blue-brand/10 hover:border-blue-brand/25 text-white/70"}`,onClick:d,children:i?u.jsxs(u.Fragment,{children:[u.jsx(_l,{size:11,className:"shrink-0 animate-bounce"}),u.jsx("span",{className:"truncate",children:"¡Copiado!"})]}):u.jsxs(u.Fragment,{children:[u.jsx(Vu,{size:10,className:"shrink-0"}),u.jsx("span",{className:"truncate",children:"Copiar"})]})})]}),u.jsxs("div",{className:"grid grid-cols-2 grid-rows-2 w-[140px] shrink-0",children:[u.jsxs("div",{className:"flex items-center gap-1 p-1 px-1.5 border-r border-b border-white/5 bg-white/[0.01] text-left min-w-0",children:[u.jsx("img",{src:il.vida,alt:"Vida",className:"w-[14px] h-[14px] object-contain shrink-0"}),u.jsxs("div",{className:"flex flex-col min-w-0",children:[u.jsx("span",{className:"text-[6px] text-slate-500 uppercase font-bold leading-none",children:"Vida"}),u.jsx("span",{className:"text-[9.5px] font-mono font-black text-white leading-none mt-0.5 truncate",children:s.vida})]})]}),u.jsxs("div",{className:"flex items-center gap-1 p-1 px-1.5 border-b border-white/5 bg-white/[0.01] text-left min-w-0",children:[u.jsx("img",{src:(K=s.ataques[0])==null?void 0:K.icono,alt:"Ataque 1",className:"w-[14px] h-[14px] object-contain shrink-0"}),u.jsxs("div",{className:"flex flex-col min-w-0",children:[u.jsx("span",{className:"text-[6px] text-slate-500 uppercase font-bold leading-none",children:"Atk 1"}),u.jsx("span",{className:`text-[9.5px] font-mono font-black leading-none mt-0.5 truncate ${h?"text-amber-400":"text-white"}`,children:(R=s.ataques[0])==null?void 0:R.valor})]})]}),u.jsxs("div",{className:"flex items-center gap-1 p-1 px-1.5 border-r border-white/5 bg-white/[0.01] text-left min-w-0",children:[u.jsx("img",{src:il.velocidad,alt:"Velocidad",className:"w-[14px] h-[14px] object-contain shrink-0"}),u.jsxs("div",{className:"flex flex-col min-w-0",children:[u.jsx("span",{className:"text-[6px] text-slate-500 uppercase font-bold leading-none",children:"Velocidad"}),u.jsx("span",{className:"text-[9.5px] font-mono font-black text-white leading-none mt-0.5 truncate",children:s.velocidad})]})]}),u.jsxs("div",{className:"flex items-center justify-between p-1 px-1.5 bg-white/[0.01] text-left gap-1 min-w-0 relative",children:[s.ataques[1]?u.jsxs("div",{className:"flex items-center gap-1 min-w-0",children:[u.jsx("img",{src:(z=s.ataques[1])==null?void 0:z.icono,alt:"Ataque 2",className:"w-[14px] h-[14px] object-contain shrink-0"}),u.jsxs("div",{className:"flex flex-col min-w-0",children:[u.jsx("span",{className:"text-[6px] text-slate-500 uppercase font-bold leading-none",children:"Atk 2"}),u.jsx("span",{className:`text-[9.5px] font-mono font-black leading-none mt-0.5 truncate ${f?"text-amber-400":"text-white"}`,children:(L=s.ataques[1])==null?void 0:L.valor})]})]}):s.habilidad?u.jsxs("div",{className:"flex items-center gap-1 min-w-0",children:[u.jsx("img",{src:s.habilidad.icono,alt:"Habilidad",className:"w-[14px] h-[14px] object-contain shrink-0"}),u.jsxs("div",{className:"flex flex-col min-w-0",children:[u.jsx("span",{className:"text-[6px] text-slate-500 uppercase font-bold leading-none",children:"Hab"}),u.jsx("span",{className:"text-[9.5px] font-mono font-black text-white leading-none mt-0.5 truncate",children:s.habilidad.valor})]})]}):u.jsx("div",{className:"flex items-center justify-center w-full",children:u.jsx("span",{className:"text-[6px] text-slate-500",children:"-"})}),s.ataques[1]&&s.habilidad&&u.jsx("div",{className:"absolute bottom-1 right-2 shrink-0 flex items-center",children:u.jsx("div",{className:"relative group/mini",children:u.jsx("img",{src:s.habilidad.icono,alt:"Habilidad",className:"w-[11px] h-[11px] object-contain border border-white/10 rounded bg-black/60 shadow-lg"})})})]})]})]})})]})},ts=()=>{const{region:s,translate:n}=Ie(),i=s!=="LATAM"&&s!=="PT"?"https://chat.whatsapp.com/IdBIvXWUPNjDLcPmBvkp1B":op;return u.jsxs(ya.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{duration:.4},className:"panel p-6 md:p-8 rounded-3xl bg-[#0c1222]/95 border border-white/10 shadow-2xl relative overflow-hidden group max-w-4xl mx-auto w-full my-6 flex flex-col md:flex-row md:items-center justify-between gap-6 text-left",children:[u.jsx("div",{className:"absolute inset-0 bg-[#25D366]/[0.02] pointer-events-none"}),u.jsxs("div",{className:"relative z-10 flex-1",children:[u.jsx("h3",{className:"text-xl md:text-2xl font-black text-white tracking-tight leading-tight m-0 mb-2",children:n("whatsapp.title")}),u.jsx("p",{className:"text-muted text-sm md:text-base leading-relaxed opacity-80 m-0 max-w-2xl",children:n("whatsapp.desc")})]}),u.jsx("div",{className:"relative z-10 shrink-0 w-full md:w-auto flex justify-start md:justify-end",children:u.jsxs("a",{href:i,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-blue-brand hover:brightness-110 active:scale-[0.98] transition-all text-white font-black text-sm md:text-base shadow-lg shadow-blue-brand/20 hover:shadow-blue-brand/40 select-none w-full md:w-auto",children:[u.jsx(xl,{size:18,className:"shrink-0"}),u.jsx("span",{children:n("whatsapp.btn")})]})})]})};function ff(){const{region:s,translate:n}=Ie(),[i,l]=Y.useState(""),[p,m]=Y.useState([]),[d,h]=Y.useState(!1),[f,b]=Y.useState("code-az"),[x,k]=Y.useState(!0),[y,G]=Y.useState(30),M=Y.useMemo(()=>fl,[]),I=Y.useMemo(()=>Ef.split(/\r?\n/).map(L=>L.trim()).filter(Boolean).length,[]),A="text-blue-brand-2",N=Y.useMemo(()=>{const L=i.toLowerCase(),O=M.filter(q=>{const X=L===""||q.nombre.toLowerCase().includes(L)||q.codigo.toLowerCase().includes(L),F=p.length===0||(p.length===1?q.genes.includes(p[0]):q.genes[0]===p[0]&&q.genes[1]===p[1]),Z=!d||q.genes.length===1||q.genes.length===2&&q.genes[0]===q.genes[1];return X&&F&&Z});return O.sort((q,X)=>{var F,Z,it,pt,Nt,qt;return f==="name-az"?q.nombre.localeCompare(X.nombre):f==="name-za"?X.nombre.localeCompare(q.nombre):f==="code-az"?q.codigo.localeCompare(X.codigo,void 0,{numeric:!0,sensitivity:"base"}):f==="code-za"?X.codigo.localeCompare(q.codigo,void 0,{numeric:!0,sensitivity:"base"}):f==="hp-desc"?(((F=X.stats)==null?void 0:F.hp)||0)-(((Z=q.stats)==null?void 0:Z.hp)||0):f==="atk-desc"?(((it=X.stats)==null?void 0:it.atk)||0)-(((pt=q.stats)==null?void 0:pt.atk)||0):f==="spd-desc"?(((Nt=X.stats)==null?void 0:Nt.spd)||0)-(((qt=q.stats)==null?void 0:qt.spd)||0):X.codigo.localeCompare(q.codigo,void 0,{numeric:!0,sensitivity:"base"})}),O},[M,i,p,f,d]),K=Y.useMemo(()=>{const L=["Apiarca","Ornitorrinco"];return M.filter(O=>L.some(q=>q.toLowerCase()===O.nombre.toLowerCase()))},[M]),R=Y.useMemo(()=>N.slice(0,y),[N,y]),z=L=>{G(30),m(O=>{const q=O.filter(X=>X===L).length;return q>0?q===2?O.filter(X=>X!==L):O.length===1?[L,L]:O.filter(X=>X!==L):O.length<2?[...O,L]:[O[1],L]})};return u.jsxs("div",{className:"flex flex-col gap-8 pb-20",children:[u.jsxs("section",{className:"relative hero !p-8 md:!p-20 overflow-hidden rounded-3xl",children:[u.jsx("div",{className:"absolute inset-0 opacity-10 bg-grid-slate-900/[0.1] pointer-events-none"}),u.jsx("div",{className:"absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-brand/20 to-transparent -rotate-12 transform translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none"}),u.jsxs("div",{className:"relative z-10",children:[u.jsxs("div",{className:"eyebrow bg-white/5 border-white/10 px-4 py-1 rounded-full inline-flex items-center gap-2 mb-6 backdrop-blur-md",children:[u.jsx(Xh,{size:14,className:"text-blue-brand-2"}),u.jsx("span",{className:"text-[10px] font-black uppercase tracking-[0.2em]",children:n("home.main_database")})]}),u.jsxs("h1",{className:"text-4xl md:text-8xl lg:text-9xl font-black mt-4 mb-6 uppercase tracking-tighter leading-[0.8] md:leading-[0.85] text-white",children:["MUTANTS ",u.jsx("br",{}),u.jsxs("span",{className:"text-blue-brand relative",children:["GLADIATORS",u.jsx("span",{className:"absolute -bottom-2 left-0 w-full h-1 bg-white/10 rounded-full"})]})]}),u.jsx("p",{className:"text-slate-400 text-sm md:text-lg max-w-2xl mx-auto md:mx-0 opacity-90 leading-relaxed font-medium",children:n("home.main_desc")})]})]}),u.jsx(ts,{}),u.jsxs("section",{className:"panel flex flex-col gap-6 !p-6 md:!p-8 border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent rounded-3xl relative overflow-hidden group",children:[u.jsx("div",{className:"absolute top-0 left-0 w-1 h-full bg-blue-brand"}),u.jsx("div",{className:"flex items-center justify-between relative z-10",children:u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx(Zk,{size:20,className:"text-blue-brand-2"}),u.jsx("h2",{className:"text-xl md:text-2xl font-black uppercase tracking-tighter m-0 text-white",children:n("home.featured_mutants")})]})}),u.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 relative z-10",children:K.map((L,O)=>u.jsx(bf,{mutant:L},O))})]}),u.jsxs("section",{className:"flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-[2.5rem] border border-white/10 bg-[#0a1224]/50 backdrop-blur-2xl relative overflow-hidden",children:[u.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-grid-slate-900/[0.05] pointer-events-none"}),u.jsxs("div",{className:"flex items-center gap-6 relative z-10",children:[u.jsxs("div",{className:"relative group/avatar",children:[u.jsx("div",{className:"absolute inset-0 bg-blue-brand blur-xl opacity-20 group-hover:opacity-40 transition-opacity"}),u.jsx("img",{src:"https://github.com/luqueSmith/MGG/blob/main/img/perfil.png?raw=true",alt:"Smith Luque",className:"w-20 h-20 md:w-24 md:h-24 rounded-[2rem] border-4 border-white/10 shadow-2xl relative z-10 object-cover group-hover:rotate-3 transition-transform"}),u.jsx("div",{className:"absolute -bottom-1 -right-1 w-6 h-6 bg-green-brand border-4 border-[#050a14] rounded-full z-20"})]}),u.jsxs("div",{className:"text-left",children:[u.jsx("h3",{className:"m-0 text-2xl font-black text-white uppercase tracking-tighter",children:"Smith Luque"}),u.jsxs("div",{className:"flex flex-col gap-1",children:[u.jsx("p",{className:"text-blue-brand-2 text-xs m-0 font-black uppercase tracking-widest leading-none",children:"Full Stack Developer"}),u.jsx("div",{className:"px-2 py-0.5 rounded bg-white/5 border border-white/5 inline-flex self-start",children:u.jsx("span",{className:"text-[8px] font-bold text-muted uppercase tracking-[0.2em]",children:"Founder of Sistema Mutodex"})})]})]})]}),u.jsxs("div",{className:"flex gap-8 items-center px-8 w-full md:w-auto border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 relative z-10",children:[u.jsxs("div",{className:"flex-1 md:flex-none",children:[u.jsx("span",{className:"block text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-2",children:n("home.filtered")}),u.jsxs("div",{className:"flex items-baseline gap-1",children:[u.jsx("strong",{className:"text-4xl font-black text-blue-brand-2 leading-none",children:N.length}),u.jsx("span",{className:"text-xs font-bold text-white/20 uppercase tracking-widest",children:n("home.active")})]})]}),u.jsxs("div",{className:"flex-1 md:flex-none",children:[u.jsx("span",{className:"block text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-2",children:n("home.total_base")}),u.jsxs("div",{className:"flex items-baseline gap-1",children:[u.jsx("strong",{className:"text-4xl font-black text-white/50 leading-none",children:I}),u.jsx("span",{className:"text-xs font-bold text-muted/20 uppercase tracking-widest",children:n("home.total")})]})]})]})]}),u.jsxs("section",{className:"panel flex flex-col gap-6 !p-6 md:!p-8 border border-white/10 relative overflow-hidden group",children:[u.jsx("div",{className:"absolute inset-0 opacity-5 pointer-events-none bg-grid-slate-900/[0.1] bg-[bottom_1px_center] [mask-image:linear-gradient(to_bottom,white,transparent)]"}),u.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:"w-1.5 h-6 bg-blue-brand rounded-full"}),u.jsx("h2",{className:"text-xl md:text-2xl font-black uppercase tracking-tighter m-0",children:n("home.explore_catalog")})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("div",{className:"px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-bold text-muted uppercase tracking-widest leading-none",children:"Control Panel v2.0"}),(p.length>0||d)&&u.jsx("button",{onClick:()=>{m([]),h(!1)},className:"text-[10px] uppercase font-black text-white bg-red-brand/40 px-3 py-1 rounded-full hover:bg-red-brand transition-all active:scale-95 shadow-lg shadow-red-brand/20",children:n("home.reset_engine")})]})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10",children:[u.jsx("div",{className:"lg:col-span-8 flex flex-col gap-6",children:u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(Kh,{size:14,className:A}),u.jsx("span",{className:"text-[11px] uppercase font-black tracking-[0.2em] opacity-60",children:n("home.genetic_config")})]}),u.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3",children:Fa.map(L=>{const O=p.filter(X=>X===L.id).length,q=O>0;return p.indexOf(L.id),u.jsxs("button",{onClick:()=>z(L.id),className:`flex items-center gap-3 p-3 rounded-xl border-2 transition-all relative group/gene overflow-hidden ${q?"bg-blue-brand/20 border-blue-brand text-white shadow-[0_0_20px_rgba(37,99,235,0.2)]":"bg-white/[0.02] border-white/10 text-slate-400 hover:border-white/30 hover:bg-white/[0.05]"}`,children:[u.jsx("div",{className:`p-1.5 rounded-lg transition-all ${q?"bg-blue-brand shadow-lg":"bg-white/5 group-hover/gene:scale-110"}`,children:u.jsx("img",{src:L.image,alt:"",className:`w-6 h-6 object-contain ${q?"brightness-125":"grayscale opacity-50"}`})}),u.jsxs("div",{className:"flex flex-col items-start",children:[u.jsx("span",{className:"text-[11px] font-black uppercase tracking-tight line-clamp-1",children:L.name}),u.jsx("span",{className:"text-[8px] font-bold opacity-40 uppercase tracking-widest",children:n(q?O===2?"gene.dominant":"gene.active":"gene.inactive")})]}),q&&u.jsx("div",{className:"absolute top-1 right-1 flex gap-0.5",children:[...Array(O)].map((X,F)=>u.jsx("div",{className:"w-1 h-3 bg-blue-brand-2 rounded-full"},F))})]},L.id)})})]})}),u.jsxs("div",{className:"lg:col-span-4 flex flex-col gap-6 lg:border-l lg:border-white/10 lg:pl-8",children:[u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(Eu,{size:14,className:A}),u.jsx("span",{className:"text-[11px] uppercase font-black tracking-[0.2em] opacity-60",children:n("home.search_engine")})]}),u.jsxs("div",{className:"relative group/search",children:[u.jsx("input",{value:i,onChange:L=>{l(L.target.value),G(30)},placeholder:n("home.search_placeholder"),className:"w-full bg-white/[0.04] border-2 border-white/10 rounded-2xl pl-4 pr-12 py-4 text-sm font-bold placeholder:text-white/20 outline-none focus:border-blue-brand/50 transition-all focus:bg-white/[0.06] focus:shadow-2xl focus:shadow-blue-brand/5"}),u.jsx("div",{className:"absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-white/5 text-white/40",children:u.jsx(Eu,{size:16})})]})]}),u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(Bk,{size:14,className:A}),u.jsx("span",{className:"text-[11px] uppercase font-black tracking-[0.2em] opacity-60",children:n("home.sort_filters")})]}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsxs("div",{className:"relative group/sort",children:[u.jsxs("select",{value:f,onChange:L=>{b(L.target.value),G(30)},className:"w-full bg-white/[0.04] border-2 border-white/10 rounded-2xl px-5 py-4 text-xs font-black uppercase tracking-widest outline-none text-white focus:border-blue-brand/50 cursor-pointer appearance-none focus:bg-white/[0.06]",children:[u.jsx("option",{value:"name-az",className:"bg-[#0a1224]",children:n("home.sort_az")}),u.jsx("option",{value:"name-za",className:"bg-[#0a1224]",children:n("home.sort_za")}),u.jsx("option",{value:"code-az",className:"bg-[#0a1224]",children:n("home.sort_code_asc")}),u.jsx("option",{value:"code-za",className:"bg-[#0a1224]",children:n("home.sort_code_desc")}),u.jsx("option",{value:"hp-desc",className:"bg-[#0a1224]",children:n("home.sort_hp_desc")}),u.jsx("option",{value:"atk-desc",className:"bg-[#0a1224]",children:n("home.sort_atk_desc")}),u.jsx("option",{value:"spd-desc",className:"bg-[#0a1224]",children:n("home.sort_spd_desc")})]}),u.jsx(uk,{size:16,className:"absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-40"})]}),u.jsxs("button",{className:`group relative overflow-hidden w-full py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 border-2 ${d?"bg-blue-brand/20 border-blue-brand text-blue-brand-2":"bg-white/5 border-white/10 text-white/40 hover:border-white/20"}`,onClick:()=>h(!d),children:[u.jsx(Xh,{size:14,className:`${d?"animate-pulse":""}`}),n("home.single_gene_only")]}),u.jsxs("button",{className:`group relative overflow-hidden w-full py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 border-2 ${x?"bg-blue-brand/10 border-blue-brand/30 text-blue-brand-2":"bg-white/5 border-white/10 text-white/40 hover:border-white/20"}`,onClick:()=>k(!x),children:[u.jsx(Kh,{size:14,className:`${x?"animate-pulse":""}`}),n(x?"home.hide":"home.show")]})]})]})]})]})]}),u.jsx("section",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4",children:x?N.length>0?u.jsxs(u.Fragment,{children:[R.map((L,O)=>u.jsx(bf,{mutant:L},O)),y<N.length&&u.jsx("div",{className:"col-span-full py-8 flex justify-center",children:u.jsx("button",{onClick:()=>G(L=>L+30),className:"px-8 py-3 bg-blue-brand/10 border-2 border-blue-brand/30 rounded-2xl text-blue-brand-2 font-black uppercase tracking-widest hover:bg-blue-brand/20 transition-all active:scale-95",children:n("home.load_more_rem",{rem:N.length-y})})})]}):u.jsx("div",{className:"col-span-full py-12 text-center text-muted border border-line rounded-2xl bg-panel",children:n("home.no_results")}):u.jsx("div",{className:"col-span-full py-12 text-center text-muted border border-line rounded-2xl bg-panel",children:n("home.hidden_results")})})]})}const g5="https://mutodex.blogspot.com/feeds/posts/default?alt=json-in-script&max-results=8";function h5(s){if(!s)return"Reciente";const n=new Date(s);return Number.isNaN(n.getTime())?s:n.toLocaleDateString("es-PE",{year:"numeric",month:"short",day:"numeric"})}function b5(s){return String(s||"").replace(/<script[\s\S]*?<\/script>/gi,"").replace(/<style[\s\S]*?<\/style>/gi,"").replace(/<[^>]+>/g," ").replace(/&nbsp;/gi," ").replace(/&amp;/gi,"&").replace(/\s+/g," ").trim()}function f5(s){const n=String(s||"").match(/<img[^>]+src="([^"]+)"/i);return n?n[1]:""}function _5(s){var h,f,b,x,k,y;const n=((h=s.title)==null?void 0:h.$t)||s.title||"Sin título",i=((f=s.published)==null?void 0:f.$t)||s.published||"",l=((b=s.content)==null?void 0:b.$t)||s.content||((x=s.summary)==null?void 0:x.$t)||s.summary||"",p=Array.isArray(s.link)?((k=s.link.find(G=>G.rel==="alternate"))==null?void 0:k.href)||((y=s.link[0])==null?void 0:y.href)||"#":s.url||s.href||"#",m=f5(l)||s.image||"",d=b5(l);return{title:n,published:i,dateLabel:h5(i),excerpt:d.slice(0,220)+(d.length>220?"…":""),excerptFull:d,rawText:d,link:p,image:m}}function x5(s){const n=String(s||"").replace(/\s+/g," ").trim();if(!n)return[];const i=["ANUNCIOS:","OFERTAS:","MINI EVENTO:","CRONOLOGIA:"],l=[];for(let p=0;p<i.length;p++){const m=i[p],d=n.indexOf(m);if(d===-1)continue;let h=n.length;for(let b=p+1;b<i.length;b++){const x=n.indexOf(i[b],d+m.length);if(x!==-1){h=x;break}}const f=n.slice(d+m.length,h).trim();f&&l.push({title:m.replace(":",""),body:f.length>320?f.slice(0,320)+"…":f})}return l.length||l.push({title:"Resumen",body:n.length>420?n.slice(0,420)+"…":n}),l.slice(0,4)}function k5(){const{region:s,translate:n}=Ie(),i=s==="USD",[l,p]=Y.useState([]),[m,d]=Y.useState(!0),[h,f]=Y.useState(!1);return Y.useEffect(()=>{let b=null;const x=`mggFeedCallback_${Date.now()}`,k=()=>{b&&b.parentNode&&b.parentNode.removeChild(b);try{window[x]=void 0}catch{}};return window[x]=y=>{var G;k();try{const I=(((G=y==null?void 0:y.feed)==null?void 0:G.entry)||[]).map(_5);p(I),d(!1)}catch{f(!0),d(!1)}},b=document.createElement("script"),b.src=`${g5}&callback=${x}`,b.onerror=()=>{k(),f(!0),d(!1)},document.body.appendChild(b),k},[]),u.jsxs("div",{className:"flex flex-col gap-6",children:[u.jsxs("section",{className:"hero transition-all duration-700 !p-6 md:!p-12 relative overflow-hidden bg-gradient-to-br from-blue-brand/10 via-blue-brand-2/5 to-transparent border-blue-brand-2/20 shadow-blue-brand-2/5",children:[u.jsxs("div",{className:"eyebrow scale-90 md:scale-100",children:[u.jsx(Sf,{size:14,className:"text-blue-brand-2"}),u.jsx("span",{children:i?"News Feed":"Portal informativo"})]}),u.jsxs("h1",{className:"text-3xl md:text-6xl font-black mt-4 mb-4 uppercase tracking-tighter leading-[0.9] md:leading-[0.95] text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-brand-2/80 to-blue-brand-2",children:[i?"NEWS":"NOVEDADES"," ",u.jsx("span",{className:"text-blue-brand-2 block",children:"MUTODEX"})]}),u.jsx("p",{className:"text-muted text-sm md:text-base max-w-2xl mx-auto px-4 opacity-80",children:i?"Latest news delivered directly from the official Mutodex blog.":"Noticias actualizadas directamente desde el blog oficial de Mutodex."})]}),u.jsx(ts,{}),u.jsxs("div",{className:"grid lg:grid-cols-[1fr_350px] gap-6 items-start",children:[u.jsx("section",{className:"flex flex-col gap-5 order-2 lg:order-1",children:m?u.jsx("div",{className:"panel text-center py-12 text-muted bg-blue-brand/5 border-blue-brand/20",children:i?"Loading posts...":"Cargando publicaciones…"}):h?u.jsx("div",{className:"panel text-center py-12 text-muted bg-blue-brand/5 border-blue-brand/20",children:i?"Could not load posts at this moment.":"No se pudieron cargar las publicaciones en este momento."}):l.length===0?u.jsx("div",{className:"panel text-center py-12 text-muted bg-blue-brand/5 border-blue-brand/20",children:i?"No posts found.":"No se encontraron publicaciones."}):l.map((b,x)=>{const k=x5(b.excerptFull||b.rawText||b.excerpt||"");return u.jsxs("article",{className:"panel p-0 overflow-hidden flex flex-col group transition-all duration-300 border-white/10 hover:border-blue-brand-2/30 shadow-lg hover:shadow-blue-brand-2/[0.04]",children:[u.jsxs("div",{className:"p-5 md:p-7 pb-0",children:[u.jsxs("div",{className:"flex items-center gap-2 font-mono font-bold text-[10px] uppercase tracking-widest mb-3 text-blue-brand-2",children:[u.jsx(rk,{size:12}),b.dateLabel]}),u.jsx("h2",{className:"m-0 text-xl md:text-3xl font-bold leading-tight tracking-tight",children:u.jsx("a",{href:b.link,target:"_blank",rel:"noopener noreferrer",className:"transition-colors hover:text-blue-brand-2",children:b.title})})]}),b.image&&u.jsx("div",{className:"px-5 md:px-7 mt-5",children:u.jsx("div",{className:"relative aspect-[16/8] overflow-hidden rounded-xl border border-white/10",children:u.jsx("img",{className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",src:b.image,alt:b.title,loading:"lazy",referrerPolicy:"no-referrer"})})}),u.jsx("div",{className:"p-5 md:p-7 pt-5 grid gap-4",children:k.map((y,G)=>u.jsxs("div",{className:"border-l-2 pl-4 py-1 border-blue-brand/30",children:[u.jsx("h3",{className:"m-0 mb-1.5 text-[11px] md:text-xs uppercase tracking-widest font-black text-white/90",children:y.title}),u.jsx("p",{className:"m-0 text-muted text-sm md:text-base leading-relaxed opacity-90",children:y.body})]},G))}),u.jsx("div",{className:"p-5 md:p-7 pt-0 mt-auto",children:u.jsxs("a",{className:"btn btn-primary w-full md:w-auto transition-all",target:"_blank",rel:"noopener noreferrer",href:b.link,children:[u.jsx(Za,{size:16}),u.jsx("span",{children:i?"Read on Mutodex":"Leer en Mutodex"})]})})]},x)})}),u.jsxs("aside",{className:"flex flex-col gap-6 order-1 lg:order-2",children:[u.jsxs("section",{className:"panel !p-5 flex flex-col gap-4 border border-white/5 bg-blue-brand/2",children:[u.jsxs("div",{className:"kv-label text-[10px] opacity-60 flex items-center gap-2",children:[u.jsx(Ek,{size:12}),i?"Quick Access":"Acceso Rápido"]}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2",children:[{name:i?"Official Mutant List":"Lista oficial: mutantes",url:"https://mutodex.blogspot.com/p/lista-oficial-mutantes.html"},{name:i?"Secret Breeding":"Hibridaciones secretas",url:"https://mutodex.blogspot.com/p/hibridaciones-secretas.html"},{name:i?"Attack/HP Orbs":"Orbes de ataque/hp",url:"https://mutodex.blogspot.com/p/orbes.html"},{name:i?"EVO Discount":"Descuento de EVO",url:"https://mutodex.blogspot.com/p/descuento-de-evo.html"},{name:i?"Stats Calculator":"Calculadora stats",url:"https://mutodex.blogspot.com/p/calculadora-de-stats.html"}].map((b,x)=>u.jsxs("a",{className:"flex items-center justify-between p-3 rounded-xl bg-white/3 border border-line text-xs font-medium hover:border-blue-brand-2/50 hover:bg-blue-brand-2/10 transition-all duration-300",target:"_blank",rel:"noopener noreferrer",href:b.url,children:[b.name,u.jsx(Za,{size:12,className:"opacity-40"})]},x))})]}),u.jsxs("section",{className:"panel !p-5 flex flex-col gap-4 border border-white/5 bg-blue-brand/2",children:[u.jsx("div",{className:"kv-label text-[10px] opacity-60",children:i?"Blog Entries":"Entradas de Blog"}),u.jsx("div",{className:"flex flex-col gap-2",children:m?u.jsx("div",{className:"text-muted text-xs animate-pulse",children:i?"Synchronizing...":"Sincronizando..."}):l.slice(0,6).map((b,x)=>u.jsxs("a",{className:"block p-3 rounded-xl bg-white/3 border border-line transition-all duration-300 hover:border-blue-brand-2/40 group",target:"_blank",rel:"noopener noreferrer",href:b.link,children:[u.jsx("div",{className:"text-[9px] font-bold mb-1 opacity-70 text-blue-brand-2",children:b.dateLabel}),u.jsx("div",{className:"text-xs font-bold text-white/90 line-clamp-1 group-hover:text-blue-brand-2",children:b.title})]},x))})]}),u.jsx("div",{className:"panel !p-4 border border-blue-brand/20 bg-blue-brand/5 shadow-inner",children:u.jsx("p",{className:"text-muted text-[10px] m-0 leading-relaxed",children:i?"Data is loaded via JSONP from Blogger to avoid CORS. If news is not visible, check your connection.":"Los datos se cargan vía JSONP desde Blogger para evitar problemas de CORS. Si no ves las noticias, revisa tu conexión."})})]})]})]})}const Tu=({service:s,isOffer:n,isOther:i,variant:l="default"})=>{const{region:p,multiplier:m,translate:d,countryCode:h}=Ie(),f=p!=="LATAM",b=f&&s.nombreEn?s.nombreEn:s.nombre,x=f&&s.descripcionEn?s.descripcionEn:s.descripcion,k=f&&s.featuresEn?s.featuresEn:s.features,y=h?wf.find(R=>R.id.toUpperCase()===h.toUpperCase()):null,G="$";let M="";const I=s.precio;I>0?M=(I/3.7*1.15*1.1*.9).toFixed(2):M="0.00",(()=>{const R=h==null?void 0:h.toUpperCase();return R==="PE"?"🇵🇪":R==="US"?"🇺🇸":y?y.flag:R?"🌎":"🇵🇪"})();const N=()=>{const R=s.precio===0;let z="";R?p==="LATAM"?z="GRATIS":p==="PT"?z="GRÁTIS":p==="FR"?z="GRATUIT":p==="DE"?z="KOSTENLOS":z="FREE":z=`${G}${M}`;let L="";p==="LATAM"?L=`¡Hola! Me interesa el servicio: ${b} (ID: ${s.id}) - Precio: ${z}`:p==="PT"?L=`Olá! Estou interessado no serviço: ${b} (ID: ${s.id}) - Preço: ${z}`:p==="FR"?L=`Bonjour! Je suis intéressé par le service: ${b} (ID: ${s.id}) - Prix: ${z}`:p==="DE"?L=`Hallo! Ich habe Interesse an dem Service: ${b} (ID: ${s.id}) - Preis: ${z}`:L=`Hello! I'm interested in: ${b} (ID: ${s.id}) - Price: ${z}`,window.open(`https://wa.me/${Vf}?text=${encodeURIComponent(L)}`,"_blank")},K=d("services.buy");return l==="compact"?u.jsxs("article",{className:"panel !p-3 flex items-center justify-between gap-4 group transition-all duration-300 bg-white/[0.02] border hover:border-blue-brand/50",children:[u.jsxs("div",{className:"flex items-center gap-3 flex-1 min-w-0",children:[u.jsx("div",{className:"w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden shrink-0 bg-white/5 border border-white/10 group-hover:border-blue-brand/30 transition-colors",children:s.imagen?u.jsx("img",{src:s.imagen,alt:"",className:"w-full h-full object-cover"}):u.jsx("div",{className:"w-full h-full flex items-center justify-center text-blue-brand-2",children:u.jsx(Go,{size:20})})}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsx("h4",{className:"m-0 text-xs md:text-sm font-black uppercase text-white truncate group-hover:text-blue-brand-2 transition-colors",children:b}),u.jsx("div",{className:"text-[10px] md:text-[11px] font-black text-blue-brand-2 mt-0.5",children:s.precio===0?"GRATIS":`${G} ${M}`})]})]}),u.jsxs("button",{onClick:N,className:"btn btn-sm !px-3 h-8 md:h-9 border-transparent shrink-0 bg-blue-brand/10 text-blue-brand-2 hover:bg-blue-brand hover:text-white",children:[u.jsx(Go,{size:14,className:"md:size-4"}),u.jsx("span",{className:"hidden sm:inline text-[10px] font-black uppercase",children:K})]})]}):u.jsxs("article",{className:`card flex flex-col group transition-all duration-300 hover:border-blue-brand/50 ${n?"outline-1 outline-blue-brand/35 border-blue-brand/30 bg-blue-brand/5":""}`,children:[s.imagen&&u.jsxs("div",{className:"relative overflow-hidden aspect-[16/10]",children:[u.jsx("img",{src:s.imagen,alt:b,className:"w-full h-full object-cover block transition-transform duration-500 group-hover:scale-110"}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"})]}),u.jsxs("div",{className:"card-body p-4 md:p-5 flex flex-col flex-1",children:[u.jsx("h3",{className:"m-0 mb-2 text-base md:text-lg font-black uppercase tracking-tight text-white line-clamp-1 group-hover:text-blue-brand-2 transition-colors",children:b}),u.jsx("p",{className:"text-muted text-sm mb-4 leading-relaxed line-clamp-2 md:line-clamp-none",children:x}),u.jsx("div",{className:"flex flex-wrap gap-2 mb-5",children:k==null?void 0:k.map((R,z)=>u.jsx("span",{className:"px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-slate-400 text-[10px] md:text-[11px] font-bold uppercase",children:R},z))}),u.jsxs("div",{className:"flex items-end justify-between mt-auto pt-4 border-t border-white/5",children:[u.jsx("div",{className:"text-xl md:text-2xl font-black tracking-tighter text-white",children:s.precio===0?u.jsx("span",{className:"text-green-brand",children:"GRATIS"}):`${G} ${M}`}),u.jsxs("div",{className:"flex gap-2",children:[s.saberMas&&u.jsx("a",{href:s.saberMas,target:"_blank",rel:"noopener noreferrer",className:"btn btn-sm px-3 bg-white/5 border-white/5 text-slate-400 hover:text-white",title:"Saber más",children:u.jsx(Za,{size:16})}),u.jsxs("button",{className:`btn btn-sm px-4 ${n?"btn-primary":i?"bg-green-brand text-white":"bg-blue-brand/20 text-blue-brand-2 hover:bg-blue-brand hover:text-white"}`,onClick:N,children:[s.precio===0?u.jsx(Gk,{size:16}):u.jsx(Go,{size:16}),u.jsx("span",{className:"text-[11px] font-black uppercase",children:s.precio===0?"Ver":K})]})]})]})]})]})};function y5(){const{region:s,countryCode:n,setCountry:i,translate:l}=Ie(),p=s==="USD",m=s!=="LATAM"&&s!=="PT"?"https://chat.whatsapp.com/IdBIvXWUPNjDLcPmBvkp1B":op,d=lu.filter(b=>b.categoria==="OFFER"),h=lu.filter(b=>b.categoria==="MAIN"),f=lu.filter(b=>b.categoria==="OTHER");return u.jsxs("div",{className:"flex flex-col gap-8 pb-20",children:[u.jsxs("section",{className:"relative hero !p-10 md:!p-24 overflow-hidden rounded-[3rem]",children:[u.jsx("div",{className:"absolute inset-0 opacity-10 bg-grid-slate-900/[0.1] pointer-events-none"}),u.jsx("div",{className:"absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-brand/20 to-transparent -rotate-12 transform translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none"}),u.jsxs("div",{className:"relative z-10",children:[u.jsxs("div",{className:"eyebrow bg-white/5 border-white/10 px-4 py-1 rounded-full inline-flex items-center gap-2 mb-6 backdrop-blur-md",children:[u.jsx(Go,{size:14,className:"text-blue-brand-2"}),u.jsx("span",{className:"text-[10px] font-black uppercase tracking-[0.2em]",children:p?"Premium Hub":"Centro de Servicios"})]}),u.jsxs("h1",{className:"text-4xl md:text-8xl lg:text-9xl font-black mt-4 mb-6 uppercase tracking-tighter leading-[0.8] md:leading-[0.85] text-white",children:[l("nav.servicios").split(" ")[0]," ",u.jsx("br",{}),u.jsxs("span",{className:"text-blue-brand relative",children:[l("nav.servicios").split(" ")[1]||"PREMIUM",u.jsx("span",{className:"absolute -bottom-2 left-0 w-full h-1 bg-white/10 rounded-full"})]})]}),u.jsx("p",{className:"text-slate-400 text-sm md:text-lg max-w-2xl mx-auto md:mx-0 opacity-90 leading-relaxed font-medium",children:l("services.subtitle")})]})]}),u.jsxs("section",{className:"panel !p-8 md:!p-12 relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-brand/10 to-transparent border-blue-brand/20",children:[u.jsx("div",{className:"absolute inset-0 opacity-5 bg-grid-tech pointer-events-none"}),u.jsxs("div",{className:"flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10",children:[u.jsxs("div",{className:"text-center lg:text-left space-y-3",children:[u.jsx("h3",{className:"m-0 text-3xl font-black uppercase tracking-tighter text-white",children:p?"Need Expert Assistance?":"¿Tienes dudas?"}),u.jsx("p",{className:"text-slate-400 m-0 text-sm md:text-base font-medium max-w-xl",children:p?"Chat with our command center directly via WhatsApp for instant support.":"Escríbeme directamente por WhatsApp o entra al grupo de ayuda para soporte inmediato."})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto min-w-[min(400px,100%)]",children:[u.jsxs("a",{className:"group/btn relative overflow-hidden py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 bg-blue-brand text-white shadow-xl shadow-blue-brand/40 hover:scale-105 active:scale-95",target:"_blank",rel:"noopener noreferrer",href:`https://wa.me/${Vf}`,children:[u.jsx(qk,{size:20,className:"group-hover/btn:-translate-y-1 transition-transform"}),u.jsx("span",{children:p?"Direct Command":"WhatsApp Directo"})]}),u.jsxs("a",{className:"group/btn relative overflow-hidden py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 bg-white/5 border-2 border-white/10 text-white hover:bg-white/10 active:scale-95",target:"_blank",rel:"noopener noreferrer",href:m,children:[u.jsx(xl,{size:20,className:"group-hover/btn:scale-110 transition-transform"}),u.jsx("span",{children:l("whatsapp.btn")})]})]})]})]}),u.jsxs("div",{className:"space-y-12",children:[u.jsxs("section",{className:"flex flex-col gap-6",children:[u.jsxs("div",{className:"flex items-center gap-4",children:[u.jsx("div",{className:"w-2 h-8 bg-blue-brand rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]"}),u.jsx("h2",{className:"text-2xl font-black uppercase tracking-tighter m-0 text-white",children:p?"Limited Time Offers":"Ofertas Especiales"}),u.jsx("div",{className:"h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:d.map(b=>u.jsx(Tu,{service:b,isOffer:!0},b.id))})]}),u.jsxs("section",{className:"flex flex-col gap-6",children:[u.jsxs("div",{className:"flex items-center gap-4",children:[u.jsx("div",{className:"w-2 h-8 bg-blue-brand-2 rounded-full opacity-50"}),u.jsx("h2",{className:"text-2xl font-black uppercase tracking-tighter m-0 text-white",children:p?"Core Protocols":"Servicios Principales"}),u.jsx("div",{className:"h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:h.map(b=>u.jsx(Tu,{service:b,variant:"compact"},b.id))})]}),u.jsxs("section",{className:"flex flex-col gap-6",children:[u.jsxs("div",{className:"flex items-center gap-4",children:[u.jsx("div",{className:"w-2 h-8 bg-slate-700 rounded-full"}),u.jsx("h2",{className:"text-2xl font-black uppercase tracking-tighter m-0 text-white",children:p?"Expansion Packs":"Otros Servicios"}),u.jsx("div",{className:"h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:f.map(b=>u.jsx(Tu,{service:b,isOther:!0},b.id))})]})]}),u.jsxs("section",{className:"flex flex-col gap-8 mt-12 pb-12",children:[u.jsxs("div",{className:"flex items-center gap-4 justify-center",children:[u.jsx("div",{className:"h-px w-10 md:w-20 bg-gradient-to-r from-transparent to-blue-brand"}),u.jsx("h2",{className:"text-xl md:text-3xl font-black uppercase tracking-tighter m-0 text-white text-center",children:l("services.payment_methods")}),u.jsx("div",{className:"h-px w-10 md:w-20 bg-gradient-to-l from-transparent to-blue-brand"})]}),u.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-5 gap-6",children:i2.map((b,x)=>u.jsxs("article",{className:"group relative flex flex-col p-6 bg-[#0a1224] border-2 border-white/5 rounded-[2rem] transition-all hover:border-blue-brand/50 hover:-translate-y-2",children:[u.jsx("div",{className:"absolute inset-0 bg-blue-brand/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]"}),u.jsx("div",{className:"w-full aspect-video flex items-center justify-center p-3 relative z-10",children:u.jsx("img",{src:b.logo,alt:b.name,className:"max-w-[80%] max-h-[80%] object-contain group-hover:scale-110 transition-transform duration-500"})}),u.jsxs("div",{className:"mt-4 text-center relative z-10 w-full overflow-hidden",children:[u.jsx("span",{className:"text-[11px] block font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-blue-brand-2 transition-colors mb-2",children:b.name}),u.jsx("p",{className:"text-[9px] text-slate-500 font-bold m-0 leading-relaxed italic opacity-80 line-clamp-2",children:(p?b.info:b.infoEs)||b.info})]})]},x))}),u.jsxs("div",{className:"panel !p-6 flex flex-col md:flex-row items-center gap-6 bg-blue-brand/5 border-blue-brand/20 relative overflow-hidden",children:[u.jsx("div",{className:"absolute inset-0 bg-grid-tech opacity-5 pointer-events-none"}),u.jsx("div",{className:"w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 bg-blue-brand/20 text-blue-brand border border-blue-brand/30 shadow-xl relative z-10",children:u.jsx(_k,{size:28})}),u.jsxs("p",{className:"m-0 text-xs md:text-sm text-slate-400 font-medium leading-relaxed relative z-10",children:[u.jsx("strong",{className:"text-white uppercase tracking-widest mr-2",children:p?"Secure Transmission:":"Información de Pago:"})," ",p?"Payments are coordinated directly via WhatsApp to ensure security. We will provide payment details after selection.":"Los pagos son coordinados directamente vía WhatsApp para garantizar la seguridad de la transacción. Al elegir un método, te proporcionaremos los datos necesarios."]})]})]})]})}const G5=[0,0,0,0,0,2e4,3e4,38700,49e3,1e5,15e4,174e3,204e3,237e3,76e4,11e5,157e4,235e4,262e4,403e4,445e4,488e4,533e4,581e4,882e4,954e4,103e5,111e5,119e5,181e5,194e5,206e5,22e6,233e5,37e6,392e5,414e5,437e5,46e6,484e5,508e5,533e5,559e5,585e5,612e5,64e6,668e5,697e5,726e5,756e5,787e5,818e5,849e5,882e5,915e5,948e5,982e5,102e6,105e6,109e6,113e6,116e6,12e7,124e6,128e6,132e6,136e6,14e7,144e6,148e6,152e6,157e6,161e6,166e6,17e7,175e6,179e6,184e6,189e6,194e6,198e6,203e6,208e6,213e6,218e6,224e6,229e6,234e6,24e7,245e6,25e7,256e6,262e6,267e6,273e6,279e6,285e6,29e7,296e6,302e6,308e6,315e6,321e6,327e6,333e6,34e7,346e6,353e6,359e6,366e6,373e6,379e6,386e6,393e6,4e8,407e6,414e6,421e6,428e6,435e6,443e6,45e7,458e6,465e6,473e6,48e7,488e6,495e6,503e6,511e6,519e6,527e6,535e6,543e6,551e6,559e6,568e6,576e6,584e6,593e6,601e6,61e7,618e6,627e6,636e6,645e6,653e6,662e6,671e6,68e7,69e7,699e6,708e6,717e6,727e6,736e6,745e6,755e6,764e6,774e6,779e6,784e6,789e6,793e6,798e6,803e6,808e6,813e6,818e6,813e6,818e6,823e6,827e6,832e6,837e6,842e6,847e6,852e6,856e6,861e6,866e6,871e6,876e6,881e6,885e6,89e7,895e6,9e8,905e6,91e7,914e6,919e6,924e6,929e6,934e6,939e6,943e6,948e6,953e6,958e6,963e6,968e6,973e6,977e6,982e6,987e6,992e6,997e6,1e9,101e7,101e7,102e7,102e7,103e7,103e7,104e7,104e7,105e7,105e7,105e7,106e7,106e7,107e7,107e7,108e7,108e7,109e7,109e7,11e8,11e8,111e7,111e7,112e7,112e7,113e7,113e7,114e7,114e7,115e7,115e7,116e7,116e7,117e7,117e7,118e7,118e7,119e7,119e7,12e8,12e8,12e8,121e7,121e7,122e7,122e7,123e7,123e7,124e7,124e7,125e7,125e7,126e7,126e7,127e7,127e7,128e7,128e7,129e7,129e7,13e8,13e8,131e7,131e7,132e7,132e7,133e7,133e7,134e7,134e7,135e7,135e7,135e7,136e7,136e7,137e7,137e7,138e7,138e7,139e7,139e7,14e8,14e8,141e7,141e7,142e7,142e7,143e7,143e7,144e7,144e7,145e7,145e7,146e7,146e7,147e7,147e7,148e7,148e7,149e7,149e7,15e8,15e8,15e8,151e7,151e7,152e7,152e7,153e7,153e7,154e7,154e7,155e7,155e7,156e7,156e7,157e7,157e7,158e7,158e7,159e6],v5=[0,0,0,0,0,5,8,10,12,25,38,44,51,59,190,275,393,588,655,1008,1113,1220,1333,1453,2205,2385,2575,2775,2975,3e3],_f=328,ju=159e7,xf=30,Au=3e3,kf={math_tool:{LATAM:"Herramienta de cálculo",USD:"Math Tool",PT:"Ferramenta de cálculo",FR:"Outil de calcul",DE:"Berechnungstool"},calculator:{LATAM:"CALCULADORA",USD:"CALCULATOR",PT:"CALCULADORA",FR:"CALCULATEUR",DE:"RECHNER"},hero_desc:{LATAM:"Calcula hasta qué EVO puedes subir según tus recursos y el descuento.",USD:"Calculate your maximum EVO based on your resources and active discounts.",PT:"Calcule o EVO máximo que você pode atingir com base em seus recursos e descontos.",FR:"Calculez votre EVO maximum en fonction de vos ressources et des réductions.",DE:"Berechnen Sie Ihr maximales EVO basierend auf Ihren Ressourcen und Rabatten."},current_evo:{LATAM:"EVO actual",USD:"Current EVO",PT:"EVO atual",FR:"EVO actuel",DE:"Aktuelles EVO"},available_credits:{LATAM:"Créditos disponibles",USD:"Available Credits",PT:"Créditos disponíveis",FR:"Crédits disponibles",DE:"Verfügbare Credits"},available_gold:{LATAM:"Oro disponible",USD:"Available Gold",PT:"Ouro disponível",FR:"Or disponible",DE:"Verfügbares Gold"},applied_discount:{LATAM:"Descuento aplicado",USD:"Applied Discount",PT:"Desconto aplicado",FR:"Réduction appliquée",DE:"Angewandter Rabatt"},calculate_evo:{LATAM:"Calcular EVO",USD:"Calculate EVO",PT:"Calcular EVO",FR:"Calculer l'EVO",DE:"EVO berechnen"},reset:{LATAM:"Reiniciar",USD:"Reset",PT:"Reiniciar",FR:"Réinitialiser",DE:"Zurücksetzen"},you_will_reach:{LATAM:"Llegarás a",USD:"YOU WILL REACH",PT:"VOCÊ VAI ALCANÇAR",FR:"VOUS ATTEINDREZ",DE:"SIE WERDEN ERREICHEN"},levels:{LATAM:"niveles",USD:"levels",PT:"níveis",FR:"niveaux",DE:"Ebenen"},discount:{LATAM:"Descuento",USD:"Discount",PT:"Desconto",FR:"Réduction",DE:"Rabatt"},credits_spent:{LATAM:"Gasto Créditos",USD:"Credits Spent",PT:"Créditos Gastos",FR:"Crédits dépensés",DE:"Verwendete Credits"},gold_spent:{LATAM:"Gasto Oro",USD:"Gold Spent",PT:"Ouro Gasto",FR:"Or dépensé",DE:"Verwendetes Gold"},credits_left:{LATAM:"Sobran Créditos",USD:"Credits Left",PT:"Créditos Restantes",FR:"Crédits restants",DE:"Verbleibende Credits"},gold_left:{LATAM:"Sobra Oro",USD:"Gold Left",PT:"Ouro Restante",FR:"Or restant",DE:"Verbleibendes Gold"},enter_resources:{LATAM:"Ingresa tus recursos y presiona Calcular para ver el resultado.",USD:"Enter your resources and press Calculate to see the result.",PT:"Insira seus recursos e pressione Calcular para ver o resultado.",FR:"Saisissez vos ressources et cliquez sur Calculer pour voir le résultat.",DE:"Geben Sie Ihre Ressourcen ein und drücken Sie Berechnen, um das Ergebnis zu sehen."},note:{LATAM:"Nota:",USD:"Note:",PT:"Nota:",FR:"Remarque :",DE:"Hinweis:"},note_desc:{LATAM:"Cálculo basado en reglas de MGG: cap de oro (30) y cap de créditos (328).",USD:"Calculation based on MGG rules: gold cap (30) and credit cap (328).",PT:"Cálculo baseado nas regras do MGG: limite de ouro (30) e limite de créditos (328).",FR:"Calcul basé sur les règles du MGG : limite d'or (30) et limite de crédits (328).",DE:"Berechnung basierend auf MGG-Regeln: Goldgrenze (30) und Creditgrenze (328)."}};function M5(){const{region:s}=Ie(),[n,i]=Y.useState(1),[l,p]=Y.useState(0),[m,d]=Y.useState(0),[h,f]=Y.useState(0),[b,x]=Y.useState(null),k=M=>{var I,A;return((I=kf[M])==null?void 0:I[s])||((A=kf[M])==null?void 0:A.USD)||""},y=()=>{let M=l,I=m,A=n;const N=h,K=A,R=(100-N)*.01,z=M,L=I;let O=0;if(A>=_f){const F=ju*R,Z=Math.floor(M/F);M-=Z*F,O=A+Z}else for(;;){if(A>=_f){const Z=ju*R,it=Math.floor(M/Z);M-=it*Z,O=A+it;break}const F=Math.floor((G5[A]??ju)*R);if(M-F>=0)M-=F,A+=1;else{O=A;break}}let q=0;if(O>=xf){const F=Au*R,Z=Math.floor(I/F);I-=Z*F,q=Z}else for(;;){if(q+O>=xf){const it=Au*R,pt=Math.floor(I/it);I-=pt*it,q=pt;break}const F=v5[O+q]??Au,Z=Math.round(F*R);if(I-Z>=0)I-=Z,q+=1;else break}const X=O+q;x({nuevoEvo:X,incremento:X-K,gastoCreditos:Math.max(0,z-M),gastoOro:Math.max(0,L-I),sobraCreditos:M,sobraOro:I,descuentoAplicado:N})},G=()=>{i(1),p(0),d(0),f(0),x(null)};return u.jsxs("div",{className:"flex flex-col gap-6",children:[u.jsxs("section",{className:"hero transition-all duration-700 !p-6 md:!p-12 relative overflow-hidden bg-gradient-to-br from-blue-brand/10 via-blue-brand-2/5 to-transparent border-blue-brand-2/20 shadow-blue-brand-2/5",children:[u.jsx("div",{className:"absolute top-0 right-0 p-8 opacity-20",children:u.jsx(ou,{size:120,className:"text-blue-brand-2"})}),u.jsxs("div",{className:"eyebrow scale-90 md:scale-100",children:[u.jsx(ou,{size:14,className:"mr-1 text-blue-brand-2"}),u.jsx("span",{children:k("math_tool")})]}),u.jsxs("h1",{className:"text-3xl md:text-6xl font-black mt-4 mb-4 uppercase tracking-tighter leading-[0.9] md:leading-[0.95] text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-brand-2/80 to-blue-brand-2",children:["EVO ",u.jsx("span",{className:"text-blue-brand-2",children:k("calculator")})]}),u.jsx("p",{className:"text-muted text-sm md:text-base max-w-2xl mx-auto px-4 opacity-80",children:k("hero_desc")})]}),u.jsx(ts,{}),u.jsxs("div",{className:"grid md:grid-cols-[1fr_1.2fr] gap-4 md:gap-6 items-start",children:[u.jsx("section",{className:"panel flex flex-col gap-5 !p-4 md:!p-6 border border-white/10 bg-white/[0.01] hover:border-blue-brand/20 transition-all",children:u.jsxs("div",{className:"grid gap-3.5",children:[u.jsxs("label",{className:"kv",children:[u.jsx("span",{className:"kv-label text-[10px]",children:k("current_evo")}),u.jsx("input",{value:n,onChange:M=>i(Number(M.target.value)),className:"input py-2.5 text-sm focus:border-blue-brand-2/60 bg-white/[0.02] text-white transition-all",type:"number"})]}),u.jsxs("label",{className:"kv",children:[u.jsx("span",{className:"kv-label text-[10px]",children:k("available_credits")}),u.jsx("input",{value:l,onChange:M=>p(Number(M.target.value)),className:"input py-2.5 text-sm focus:border-blue-brand-2/60 bg-white/[0.02] text-white transition-all",type:"number"})]}),u.jsxs("label",{className:"kv",children:[u.jsx("span",{className:"kv-label text-[10px]",children:k("available_gold")}),u.jsx("input",{value:m,onChange:M=>d(Number(M.target.value)),className:"input py-2.5 text-sm focus:border-blue-brand-2/60 bg-white/[0.02] text-white transition-all",type:"number"})]}),u.jsxs("div",{children:[u.jsx("div",{className:"kv-label text-[10px] mb-2",children:k("applied_discount")}),u.jsx("div",{className:"grid grid-cols-3 gap-2",children:o2.map(M=>u.jsxs("button",{onClick:()=>f(M),className:`btn py-2 text-xs rounded-xl transition-all duration-200 ${h===M?"btn-primary":"bg-white/5 opacity-60 hover:bg-white/10 hover:border-white/15"}`,children:[M,"%"]},M))})]}),u.jsxs("div",{className:"flex gap-2 mt-2",children:[u.jsx("button",{onClick:y,className:"btn btn-primary flex-[2] py-3 text-sm transition-all duration-200",children:k("calculate_evo")}),u.jsx("button",{onClick:G,className:"btn flex-1 py-3 text-sm border border-white/5 bg-white/[0.03] text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200",children:k("reset")})]})]})}),u.jsx("section",{className:"h-full min-h-[360px]",children:b?u.jsxs("div",{className:"panel h-full flex flex-col items-center justify-center text-center p-6 md:p-8 relative overflow-hidden transition-all duration-700 border-none bg-gradient-to-br from-blue-brand/35 via-blue-brand-2/15 to-[#0b0f19] shadow-2xl shadow-blue-brand-2/10",children:[u.jsx("div",{className:"absolute inset-0 bg-[url('https://github.com/luqueSmith/MGG/blob/main/img/Logo_mgg.png?raw=true')] bg-no-repeat bg-center opacity-[0.03] scale-150 pointer-events-none"}),u.jsx("div",{className:"kv-label uppercase tracking-widest text-[10px] opacity-70 mb-2 z-10 text-blue-200",children:k("you_will_reach")}),u.jsx("div",{className:"text-[5rem] md:text-[6rem] font-black tracking-tighter leading-none mb-2 z-10 drop-shadow-xl text-white",children:pn(b.nuevoEvo)}),u.jsxs("p",{className:"text-xs md:text-sm mb-6 z-10 font-bold opacity-80 text-blue-200",children:["+",pn(b.incremento)," ",k("levels")," · ",b.descuentoAplicado,"% ",k("discount")]}),u.jsxs("div",{className:"grid grid-cols-2 gap-2 md:gap-3 w-full z-10",children:[u.jsxs("div",{className:"border border-white/5 bg-black/40 p-3 rounded-xl flex flex-col items-center shadow-inner",children:[u.jsx("span",{className:"text-[8px] md:text-[9px] uppercase font-bold mb-1 text-blue-200/50",children:k("credits_spent")}),u.jsx("strong",{className:"text-sm md:text-base text-white",children:pn(b.gastoCreditos)})]}),u.jsxs("div",{className:"border border-white/5 bg-black/40 p-3 rounded-xl flex flex-col items-center shadow-inner",children:[u.jsx("span",{className:"text-[8px] md:text-[9px] uppercase font-bold mb-1 text-blue-200/50",children:k("gold_spent")}),u.jsx("strong",{className:"text-sm md:text-base text-white",children:pn(b.gastoOro)})]}),u.jsxs("div",{className:"border border-white/5 bg-black/20 p-3 rounded-xl flex flex-col items-center shadow-inner",children:[u.jsx("span",{className:"text-[8px] md:text-[9px] uppercase font-bold mb-1 text-white/30",children:k("credits_left")}),u.jsx("strong",{className:"text-sm md:text-base text-white/80",children:pn(b.sobraCreditos)})]}),u.jsxs("div",{className:"border border-white/5 bg-black/20 p-3 rounded-xl flex flex-col items-center shadow-inner",children:[u.jsx("span",{className:"text-[8px] md:text-[9px] uppercase font-bold mb-1 text-white/30",children:k("gold_left")}),u.jsx("strong",{className:"text-sm md:text-base text-white/80",children:pn(b.sobraOro)})]})]})]}):u.jsxs("div",{className:"panel h-full flex flex-col items-center justify-center text-muted gap-4 border-dashed border-white/10 hover:border-blue-brand/20 transition-all bg-white/[0.01] hover:bg-white/[0.02]",children:[u.jsx(ou,{size:48,className:"opacity-10"}),u.jsx("p",{className:"text-sm max-w-[200px] text-center",children:k("enter_resources")})]})})]}),u.jsxs("section",{className:"panel flex gap-4 items-center transition-all border border-blue-brand/20 bg-blue-brand/5 shadow-inner !p-4",children:[u.jsx(Af,{size:20,className:"text-blue-brand-2 shrink-0"}),u.jsxs("div",{className:"text-[11px] md:text-xs leading-relaxed",children:[u.jsx("strong",{className:"text-white",children:k("note")})," ",k("note_desc")]})]})]})}const T5={"Ficha Reactor":"Reactor Token","Ficha Jackpot":"Jackpot Token","Tickets x25":"Energy Tickets x25","Tickets x5":"Energy Tickets x5","Triple Experiencia":"Triple Experience","Cuádruple Regeneración":"Quadruple Regeneration","Ficha Reto":"Challenge Token","Doble Experiencia":"Double Experience","Ataques Críticos":"Critical Attacks","Escudo Anticrítico":"Anticritical Shield","Doble Regeneración":"Double Regeneration"};function j5(){const{region:s,translate:n}=Ie(),i=s==="USD",l=Object.keys(Zh),[p,m]=Y.useState(""),[d,h]=Y.useState(l[0]),[f,b]=Y.useState(12),x=A=>i?A.startsWith("Orbe ")?A.replace("Orbe Ataque","Attack Orb").replace("Orbe Vida","Life Orb").replace("Orbe Críticos","Critical Orb").replace("Orbe Experiencia","Experience Orb").replace("Orbe Regeneración","Regeneration Orb").replace("Orbe Respuesta","Retaliate Orb"):T5[A]||A:A,k=Y.useMemo(()=>{const A=[];return Object.entries(Zh).forEach(([N,K])=>{String(K||"").split(/\r?\n/).map(R=>R.trim()).filter(Boolean).forEach(R=>{const z=R.split("	");A.push({nombre:(z[0]||"").trim(),codigo:(z[1]||"").trim(),categoria:N,imagen:(z[2]||"").trim()||void 0})})}),A},[]),y=Y.useMemo(()=>{const A=p.toLowerCase();return k.filter(N=>N.categoria===d&&(N.nombre.toLowerCase().includes(A)||N.codigo.toLowerCase().includes(A)))},[k,p,d]),[G,M]=Y.useState(null),I=A=>{navigator.clipboard.writeText(A.toLowerCase()).catch(()=>{}),M(A),setTimeout(()=>M(null),2e3)};return u.jsxs("div",{className:"flex flex-col gap-6",children:[u.jsxs("section",{className:"hero !p-6 md:!p-12 relative overflow-hidden",children:[u.jsxs("div",{className:"eyebrow scale-90 md:scale-100",children:[u.jsx(Su,{size:14}),u.jsx("span",{children:i?"Secondary Catalog":"Catálogo secundario"})]}),u.jsxs("h1",{className:"text-3xl md:text-6xl font-black mt-4 mb-4 uppercase tracking-tighter leading-[0.9] md:leading-[0.95]",children:[i?"EXTRA":"OTROS"," ",u.jsx("span",{className:"text-blue-brand-2",children:i?"CODES":"CÓDIGOS"})]}),u.jsx("p",{className:"text-muted text-sm md:text-base max-w-2xl mx-auto px-4 opacity-80",children:i?"Orbs, consumables, structures, boxes, and offers filtered by category.":"Orbes, consumibles, estructuras, cajas y ofertas filtradas por categoría."})]}),u.jsx(ts,{}),u.jsxs("section",{className:"panel flex flex-col gap-4 !p-4 md:!p-6 transition-all border",children:[u.jsx("div",{className:"flex flex-wrap gap-2 text-center",children:l.map(A=>u.jsx("button",{onClick:()=>{h(A),b(12)},className:`flex-1 min-w-[120px] px-4 py-3 rounded-xl border text-[10px] font-black uppercase tracking-widest transition-all ${d===A?"bg-blue-brand border-blue-brand-2 text-white shadow-lg":"bg-white/5 border-transparent text-slate-400 hover:bg-white/10"}`,children:i?A==="Cajas"?"Boxes":A==="Recursos"?"Resources":A==="Orbes"?"Orbs":A:A},A))}),u.jsxs("div",{className:"relative",children:[u.jsx(Eu,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-white/40"}),u.jsx("input",{value:p,onChange:A=>m(A.target.value),placeholder:i?`Search in ${d}...`:`Buscar en ${d}...`,className:"input pl-11 py-3.5 text-sm"})]})]}),u.jsx("section",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-4",children:y.length>0?y.slice(0,f).map((A,N)=>u.jsxs("article",{className:"card p-4 flex flex-col gap-3 group transition-all border hover:border-blue-brand/40",children:[A.imagen?u.jsx("div",{className:"flex items-center justify-center p-3 rounded-xl aspect-square overflow-hidden transition-colors bg-white/5",children:u.jsx("img",{src:A.imagen,alt:x(A.nombre),className:"w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"})}):u.jsx("div",{className:"flex items-center justify-center p-3 rounded-xl aspect-square overflow-hidden opacity-30 bg-blue-brand/10 text-blue-brand-2",children:u.jsx(Su,{size:32})}),u.jsxs("div",{className:"flex-1 flex flex-col pt-1",children:[u.jsx("h3",{className:"text-xs md:text-sm font-black uppercase tracking-tight mb-1 line-clamp-1 transition-colors",children:x(A.nombre)}),u.jsx("div",{className:"font-mono font-bold text-[9px] md:text-[10px] tracking-widest uppercase mb-4 opacity-80 text-blue-brand-2",children:A.codigo}),u.jsxs("button",{onClick:()=>I(A.codigo),className:`btn w-full text-[10px] font-black uppercase tracking-widest py-2.5 rounded-xl mt-auto transition-all ${G===A.codigo?"bg-green-brand/20 border-green-brand/30 text-green-brand":"hover:bg-blue-brand/15"}`,children:[G===A.codigo?u.jsx(_l,{size:12}):u.jsx(Vu,{size:12}),u.jsx("span",{children:G===A.codigo?i?"DONE":"LISTO":i?"COPY":"COPIAR"})]})]})]},N)):u.jsx("div",{className:"col-span-full py-16 text-center border font-bold uppercase tracking-widest text-[10px] rounded-2xl bg-[#0d1421] border-line text-muted",children:i?"No codes found in this section.":"No se encontraron códigos en esta sección."})}),y.length>f&&u.jsx("div",{className:"flex justify-center mt-6",children:u.jsx("button",{onClick:()=>b(A=>A+12),className:"btn px-12 py-3.5 rounded-xl font-black uppercase tracking-widest text-xs transition-all bg-blue-brand/10 border-blue-brand/20 hover:bg-blue-brand/20",children:i?"Load More":"Cargar más"})})]})}const yf={quick_manual:{LATAM:"Manual rápido",USD:"Quick Manual",PT:"Manual Rápido",FR:"Manuel Rapide",DE:"Schnellstart-Anleitung"},title1:{LATAM:"GUÍA",USD:"USER",PT:"GUIA",FR:"GUIDE",DE:"BENUTZER"},title2:{LATAM:"DE USO",USD:"GUIDE",PT:"DO USUÁRIO",FR:"D'UTILISATION",DE:"HANDBUCH"},subtitle:{LATAM:"Todo lo básico para usar el catálogo sin perderte.",USD:"Everything you need to know to use the catalog without getting lost.",PT:"Tudo o que você precisa saber para usar o catálogo sem se perder.",FR:"Tout ce que vous devez savoir pour utiliser le catalogue sans vous perdre.",DE:"Alles, was Sie wissen müssen, um den Katalog zu nutzen, ohne sich zu verlaufen."},sec1_title:{LATAM:"1) Buscar por nombre o por código",USD:"1) Search by name or code",PT:"1) Buscar por nome ou por código",FR:"1) Recherche par nom ou code",DE:"1) Suche nach Name oder Code"},sec1_items:{LATAM:["Escribe parte del nombre o el código en el buscador.","El listado se filtra en tiempo real."],USD:["Type part of the name or code in the search box.","The list filters in real time."],PT:["Digite parte do nome ou código na caixa de busca.","A lista é filtrada em tempo real."],FR:["Saisissez une partie du nom ou du code dans la barre de recherche.","La liste est filtrée en temps réel."],DE:["Geben Sie einen Teil des Namens oder Codes im Suchfeld ein.","Die Liste filtert in Echtzeit."]},sec2_title:{LATAM:"2) Filtros por genes (máximo 2)",USD:"2) Gene filters (max 2)",PT:"2) Filtros de genes (máximo 2)",FR:"2) Filtres de gènes (max 2)",DE:"2) Genfilter (max. 2)"},sec2_items:{LATAM:["Puedes activar hasta 2 genes a la vez.","El filtro exige que el mutante tenga ambos genes seleccionados."],USD:["You can activate up to 2 genes at once.","The filter requires the mutant to have both selected genes."],PT:["Você pode ativar até 2 genes ao mesmo tempo.","O filtro exige que o mutante tenha ambos os genes selecionados."],FR:["Vous pouvez activer jusqu'à 2 gènes à la fois.","Le filtre exige que le mutant possède les deux gènes sélectionnés."],DE:["Sie können bis zu 2 Gene gleichzeitig aktivieren.","Der Filter erfordert, dass der Mutant beide ausgewählten Gene besitzt."]},sec3_title:{LATAM:"3) Copiar códigos sin errores",USD:"3) Copy codes without errors",PT:"3) Copiar códigos sem erros",FR:"3) Copier les codes sans erreur",DE:"3) Codes fehlerfrei kopieren"},sec3_items:{LATAM:["Pulsa el botón “Copiar código”.","El texto se envía al portapapeles automáticamente."],USD:['Click the "Copy Code" button.',"The text is automatically sent to the clipboard."],PT:['Clique no botão "Copiar código".',"O texto é enviado automaticamente para a área de transferência."],FR:['Cliquez sur le bouton "Copier le code".',"Le texte est automatiquement envoyé dans le presse-papiers."],DE:['Klicken Sie auf die Schaltfläche "Code kopieren".',"Der Text wird automatisch in die Zwischenablage kopiert."]},sec4_title:{LATAM:"4) Qué hay en cada página",USD:"4) What is on each page",PT:"4) O que há em cada página",FR:"4) Contenu de chaque page",DE:"4) Was ist auf jeder Seite"},sec4_items:{LATAM:["Inicio: base de mutantes.","Servicios: packs y pedidos.","Evo: calculadora.","Otros códigos: orbes y extras.","Descargas y tutoriales: recursos y videos."],USD:["Home: mutant database.","Services: packs and orders.","Evo: calculator.","Other codes: orbs and extras.","Downloads and tutorials: resources and videos."],PT:["Início: banco de dados de mutantes.","Serviços: pacotes e pedidos.","Evo: calculadora.","Outros códigos: orbes e extras.","Downloads e tutoriais: recursos e vídeos."],FR:["Accueil: base de données de mutants.","Services: packs et commandes.","Evo: calculateur.","Autres codes: orbes et suppléments.","Téléchargements et tutoriels: ressources et vidéos."],DE:["Startseite: Mutanten-Datenbank.","Dienste: Pakete und Bestellungen.","Evo: Rechner.","Andere Codes: Orbs und Extras.","Downloads und Tutorials: Ressourcen und Videos."]},sec5_title:{LATAM:"5) Rendimiento (menos lag)",USD:"5) Performance (less lag)",PT:"5) Desempenho (menos lag)",FR:"5) Performance (moins de décalage)",DE:"5) Leistung (weniger Lag)"},sec5_items:{LATAM:["La versión React utiliza componentes dinámicos para mayor fluidez.","Si algo se ve raro, recarga la aplicación."],USD:["The React version uses dynamic components for better fluidity.","If something looks weird, reload the application."],PT:["A versão React usa componentes dinâmicos para melhor fluidez.","Se algo parecer estranho, recarregue o aplicativo."],FR:["La version React utilise des composants dynamiques pour une meilleure fluidité.","Si quelque chose semble anormal, rechargez l'application."],DE:["Die React-Version verwendet dynamische Komponenten für mehr Flüssigkeit.","Wenn etwas seltsam aussieht, laden Sie die Anwendung neu."]}};function A5(){const{region:s}=Ie(),n=l=>{var p,m;return((p=yf[l])==null?void 0:p[s])||((m=yf[l])==null?void 0:m.USD)||""},i=[{title:n("sec1_title"),items:n("sec1_items"),icon:fo},{title:n("sec2_title"),items:n("sec2_items"),icon:fo},{title:n("sec3_title"),items:n("sec3_items"),icon:fo},{title:n("sec4_title"),items:n("sec4_items"),icon:fo},{title:n("sec5_title"),items:n("sec5_items"),icon:fo}];return u.jsxs("div",{className:"flex flex-col gap-6",children:[u.jsxs("section",{className:"hero transition-all duration-700 !p-6 md:!p-12 relative overflow-hidden bg-gradient-to-br from-blue-brand/10 via-blue-brand-2/5 to-transparent border-blue-brand-2/20 shadow-blue-brand-2/5",children:[u.jsx("div",{className:"absolute top-0 right-0 p-8 opacity-20",children:u.jsx(Iu,{size:120,className:"text-blue-brand-2"})}),u.jsxs("div",{className:"eyebrow scale-90 md:scale-100",children:[u.jsx(Iu,{size:16,className:"text-blue-brand-2"}),u.jsx("span",{children:n("quick_manual")})]}),u.jsxs("h1",{className:"text-4xl md:text-6xl font-black mt-2.5 mb-2.5 uppercase tracking-tighter leading-[0.95] text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-brand-2/80 to-blue-brand-2",children:[n("title1")," ",u.jsx("span",{className:"text-blue-brand-2",children:n("title2")})]}),u.jsx("p",{className:"text-muted max-w-2xl mx-auto px-4 opacity-80",children:n("subtitle")})]}),u.jsx(ts,{}),u.jsx("section",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:i.map((l,p)=>{const m=l.icon;return u.jsxs("article",{className:"panel flex flex-col gap-4 border border-white/10 bg-white/[0.01] hover:border-blue-brand-2/30 hover:bg-white/[0.02] shadow-lg transition-all duration-300",children:[u.jsx("div",{className:"w-12 h-12 rounded-2xl flex items-center justify-center transition-colors bg-white/8 text-blue-brand-2",children:u.jsx(m,{size:24})}),u.jsx("h3",{className:"text-xl font-bold tracking-tight m-0 text-white",children:l.title}),u.jsx("div",{className:"flex flex-col gap-2",children:l.items.map((d,h)=>u.jsx("p",{className:"text-muted m-0 text-sm leading-relaxed opacity-90",children:d},h))})]},p)})})]})}const Gf={multimedia:{LATAM:"Contenido multimedia",USD:"Multimedia",PT:"Conteúdo multimídia",FR:"Contenu multimédia",DE:"Multimedia-Inhalte"},tutoriales_title1:{LATAM:"TUTORIALES",USD:"YOUTUBE",PT:"TUTORIAIS",FR:"TUTORIELS",DE:"TUTORIALS"},tutoriales_title2:{LATAM:"YOUTUBE",USD:"GUIDES",PT:"YOUTUBE",FR:"YOUTUBE",DE:"YOUTUBE"},tutoriales_desc:{LATAM:"Aquí subo guías rápidas y tips sobre el catálogo y Mutants: Genetic Gladiators.",USD:"Quick guides and tips about the catalog and Mutants: Genetic Gladiators.",PT:"Aqui eu posto guias rápidos e dicas sobre o catálogo e Mutants: Genetic Gladiators.",FR:"Ici, je publie des guides rapides et des conseils sur le catalogue et Mutants: Genetic Gladiators.",DE:"Hier lade ich Kurzanleitungen und Tipps zum Katalog und Mutants: Genetic Gladiators hoch."},youtube_channel:{LATAM:"Canal de YouTube",USD:"YouTube Channel",PT:"Canal do YouTube",FR:"Chaîne YouTube",DE:"YouTube-Kanal"},youtube_channel_desc:{LATAM:"Si estás en móvil, puede abrir la app de YouTube si la tienes instalada.",USD:"If you are on mobile, it might open the YouTube app directly.",PT:"Se estiver no celular, pode abrir o aplicativo do YouTube diretamente.",FR:"Si vous êtes sur mobile, cela peut ouvrir directement l'application YouTube.",DE:"Wenn Sie mobil unterwegs sind, wird möglicherweise direkt die YouTube-App geöffnet."},go_to:{LATAM:"Ir a @spieler_Lc",USD:"Go to @spieler_Lc",PT:"Ir para @spieler_Lc",FR:"Aller sur @spieler_Lc",DE:"Gehe zu @spieler_Lc"},view_videos:{LATAM:"Ver videos",USD:"View videos",PT:"Ver vídeos",FR:"Voir les vidéos",DE:"Videos anzeigen"},want_to_find:{LATAM:"¿Qué vas a encontrar?",USD:"What will you find?",PT:"O que você vai encontrar?",FR:"Que trouverez-vous ?",DE:"Was werden Sie finden?"},bullet1:{LATAM:"Cómo buscar mutantes y copiar códigos sin errores.",USD:"How to search for mutants and copy codes without errors.",PT:"Como procurar mutantes e copiar códigos sem erros.",FR:"Comment rechercher des mutants et copier des codes sans erreur.",DE:"So suchen Sie nach Mutanten und kopieren Codes fehlerfrei."},bullet2:{LATAM:"Cómo usar filtros por genes.",USD:"How to use gene filters.",PT:"Como usar filtros por genes.",FR:"Comment utiliser les filtres par gènes.",DE:"So verwenden Sie Genfilter."},bullet3:{LATAM:"Consejos para usar emuladores y reducir el lag.",USD:"Tips for using emulators and reducing lag.",PT:"Dicas para usar emuladores e reduzir o lag.",FR:"Conseils pour utiliser des émulateurs et réduire le décalage (lag).",DE:"Tipps zur Verwendung von Emulatoren und zur Reduzierung von Lag."}};function S5(){const{region:s}=Ie(),n=i=>{var l,p;return((l=Gf[i])==null?void 0:l[s])||((p=Gf[i])==null?void 0:p.USD)||""};return u.jsxs("div",{className:"flex flex-col gap-6",children:[u.jsxs("section",{className:"hero transition-all duration-700 !p-6 md:!p-12 relative overflow-hidden bg-gradient-to-br from-blue-brand/10 via-blue-brand-2/5 to-transparent border-blue-brand-2/20 shadow-blue-brand-2/5",children:[u.jsx("div",{className:"absolute top-0 right-0 p-8 opacity-20",children:u.jsx(ll,{size:120,className:"text-blue-brand-2"})}),u.jsxs("div",{className:"eyebrow scale-90 md:scale-100",children:[u.jsx(ll,{size:16,className:"text-blue-brand-2"}),u.jsx("span",{children:n("multimedia")})]}),u.jsxs("h1",{className:"text-4xl md:text-6xl font-black mt-2.5 mb-2.5 uppercase tracking-tighter leading-[0.95] text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-brand-2/80 to-blue-brand-2",children:[n("tutoriales_title1")," ",u.jsx("span",{className:"text-blue-brand-2",children:n("tutoriales_title2")})]}),u.jsx("p",{className:"text-muted max-w-2xl mx-auto px-4 opacity-80",children:n("tutoriales_desc")})]}),u.jsx(ts,{}),u.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[u.jsxs("section",{className:"panel flex flex-col gap-5 transition-all duration-300 border border-white/10 bg-white/[0.01] hover:border-blue-brand-2/30 hover:bg-white/[0.02]",children:[u.jsx("div",{className:"w-12 h-12 rounded-2xl flex items-center justify-center bg-white/8 text-red-500 shadow-lg shadow-red-500/10",children:u.jsx(ll,{size:24})}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-xl font-bold tracking-tight mb-2 text-white",children:n("youtube_channel")}),u.jsx("p",{className:"text-muted text-sm m-0 leading-relaxed opacity-90",children:n("youtube_channel_desc")})]}),u.jsxs("div",{className:"flex flex-wrap gap-3 mt-auto",children:[u.jsxs("a",{className:"btn btn-primary px-6 transition-all duration-200",target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/@spieler_Lc",children:[u.jsx(Za,{size:18}),u.jsx("span",{children:n("go_to")})]}),u.jsxs("a",{className:"btn px-6 border-white/10 hover:border-blue-brand-2 hover:bg-blue-brand-2/10 transition-all duration-200",target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/@spieler_Lc/videos",children:[u.jsx(mk,{size:18}),u.jsx("span",{children:n("view_videos")})]})]})]}),u.jsxs("section",{className:"panel flex flex-col gap-5 transition-all duration-300 border border-white/10 bg-white/[0.01] hover:border-blue-brand-2/30 hover:bg-white/[0.02]",children:[u.jsx("div",{className:"w-12 h-12 rounded-2xl flex items-center justify-center bg-white/8 text-yellow-brand shadow-lg shadow-yellow-brand/10",children:u.jsx(Vk,{size:24})}),u.jsx("h3",{className:"text-xl font-bold tracking-tight m-0 text-white",children:n("want_to_find")}),u.jsxs("ul",{className:"text-muted text-sm space-y-3 pl-5 list-disc marker:text-blue-brand-2/50",children:[u.jsx("li",{children:n("bullet1")}),u.jsx("li",{children:n("bullet2")}),u.jsx("li",{children:n("bullet3")})]})]})]})]})}const vf={download_center:{LATAM:"Centro de descargas",USD:"Download Center",PT:"Centro de Downloads",FR:"Centre de téléchargement",DE:"Download-Center"},downloads:{LATAM:"DESCARGAS",USD:"DOWNLOADS",PT:"DOWNLOADS",FR:"TÉLÉCHARGEMENTS",DE:"DOWNLOADS"},tools_desc:{LATAM:"Herramientas y recomendaciones según tu caso.",USD:"Tools and recommendations tailored to your setup.",PT:"Ferramentas e recomendações adaptadas ao seu caso.",FR:"Outils et recommandations adaptés à votre cas.",DE:"Werkzeuge und Empfehlungen für Ihren Fall."},essential_resources:{LATAM:"Recursos esenciales",USD:"Essential Resources",PT:"Recursos Essenciais",FR:"Ressources essentielles",DE:"Grundlegende Ressourcen"},download_btn:{LATAM:"Descargar",USD:"Download",PT:"Descarregar",FR:"Télécharger",DE:"Herunterladen"},gg_official:{LATAM:"GameGuardian (fuente oficial)",USD:"GameGuardian (Official Source)",PT:"GameGuardian (Fonte Oficial)",FR:"GameGuardian (Source officielle)",DE:"GameGuardian (Offizielle Quelle)"},gg_desc:{LATAM:"Evita APKs modificados. Descarga siempre desde el foro oficial. Normalmente requiere root real o virtual.",USD:"Avoid modified APKs. Always download from the official forum. Usually requires real or virtual root.",PT:"Evite APKs modificados. Sempre baixe do fórum oficial. Geralmente requer root real ou virtual.",FR:"Évitez les APK modifiés. Téléchargez toujours depuis le forum officiel. Nécessite généralement un accès root réel ou virtuel.",DE:"Vermeiden Sie modifizierte APKs. Laden Sie immer aus dem offiziellen Forum herunter. Erfordert normalerweise echten oder virtuellen Root."},mobile_vms:{LATAM:"Móvil: máquinas virtuales",USD:"Mobile: Virtual Machines",PT:"Celular: Máquinas Virtuais",FR:"Mobile : Machines virtuelles",DE:"Mobil: Virtuelle Maschinen"},pc_emulators:{LATAM:"PC: emuladores Android",USD:"PC: Android Emulators",PT:"PC: Emuladores Android",FR:"PC : Émulateurs Android",DE:"PC: Android-Emulatoren"},official_site:{LATAM:"Sitio oficial",USD:"Official Site",PT:"Site Oficial",FR:"Site officiel",DE:"Offizielle Website"},warn_title:{LATAM:"Usa bajo tu responsabilidad",USD:"Use at your own risk",PT:"Use por sua conta e risco",FR:"Utilisez à vos risques et périls",DE:"Nutzung auf eigene Gefahr"},warn_desc:{LATAM:"Esta conversión conserva la sección informativa del proyecto original.",USD:"This content is for information purposes only within this project.",PT:"Esta conversão mantém a seção informativa do projeto original.",FR:"Cette conversion conserve la section informative du projet d'origine.",DE:"Diese Konvertierung behält den informativen Teil des Originalprojekts bei."},lua_title:{LATAM:"Script LUA",USD:"Script LUA",PT:"Script LUA",FR:"Script LUA",DE:"Script LUA"},lua_desc:{LATAM:"Script definitivo para GameGuardian. Compatible con TodoCS.",USD:"Ultimate GameGuardian script. Compatible with TodoCS.",PT:"Script definitivo para GameGuardian. Compatível com TodoCS.",FR:"Script définitif pour GameGuardian. Compatible avec TodoCS.",DE:"Ultimatives Script für GameGuardian. Kompatibel mit TodoCS."},txt_title:{LATAM:"Lista TXT",USD:"TXT List",PT:"Lista TXT",FR:"Liste TXT",DE:"TXT-Liste"},txt_desc:{LATAM:"Todos los códigos en formato de texto plano.",USD:"All codes in plain text format.",PT:"Todos os códigos em formato de texto simples.",FR:"Tous les codes au format texte brut.",DE:"Alle Codes im Klartextformat."},xlsx_title:{LATAM:"Lista Excel",USD:"Excel List",PT:"Lista Excel",FR:"Liste Excel",DE:"Excel-Liste"},xlsx_desc:{LATAM:"Base de datos completa en .xlsx para filtrado avanzado.",USD:"Complete database in .xlsx for advanced filtering.",PT:"Banco de dados completo em .xlsx para filtragem avançada.",FR:"Base de données complète en .xlsx pour un filtrage avancé.",DE:"Vollständige Datenbank im .xlsx-Format für erweitertes Filtern."},texture_title:{LATAM:"Textura MGG",USD:"MGG Texture",PT:"Textura MGG",FR:"Texture MGG",DE:"MGG-Textur"},texture_desc:{LATAM:"Nuevas texturas para la terraza, arenas e iconos.",USD:"Visual overhaul for hall, arenas, and icons.",PT:"Novas texturas para o terraço, arenas e ícones.",FR:"Nouvelles textures pour le hall, les arènes et les icônes.",DE:"Neue Texturen für die Terrasse, Arenen und Symbole."},vphone_desc:{LATAM:"Mejor opción para root virtual y compatibilidad con GG.",USD:"Best option for virtual root and GG compatibility.",PT:"Melhor opção para root virtual e compatibilidade com GG.",FR:"Option idéale pour le root virtuel et la compatibilité avec GG.",DE:"Beste Option für virtuellen Root und GG-Kompatibilität."},vmos_desc:{LATAM:"Mucha comunidad. El root y la compatibilidad cambian por versión.",USD:"Large community. Root and compatibility vary by version.",PT:"Grande comunidade. O root e a compatibilidade variam de acordo com a versão.",FR:"Grande communauté. Le root et la compatibilité varient selon la version.",DE:"Große Community. Root und Kompatibilität variieren je nach Version."},vmaster_desc:{LATAM:"Muy buena para separar apps, con root limitado.",USD:"Great for separating apps, limited root.",PT:"Muito boa para separar apps, com root limitado.",FR:"Très utile pour isoler les applications, avec root limité.",DE:"Sehr gut zum Trennen von Apps, mit eingeschränktem Root."},ldplayer_desc:{LATAM:"Equilibrio entre rendimiento y estabilidad.",USD:"Balance between performance and stability.",PT:"Equilíbrio entre desempenho e estabilidade.",FR:"Excellent équilibre entre performances et stabilité.",DE:"Gleichgewicht zwischen Leistung und Stabilität."},bluestacks_desc:{LATAM:"Alta compatibilidad para juegos.",USD:"High compatibility for games.",PT:"Alta compatibilidade para jogos.",FR:"Grande compatibilité avec les jeux.",DE:"Hohe Spielekompatibilität."},nox_desc:{LATAM:"Ideal para multi-instancia y control avanzado.",USD:"Ideal for multi-instance and advanced control.",PT:"Ideal para multi-instâncias e controle avançado.",FR:"Idéal pour le multi-instance et le contrôle avancé.",DE:"Ideal für Multi-Instanz und erweiterte Steuerung."}};function I5(){const{region:s}=Ie(),n=m=>{var d,h;return((d=vf[m])==null?void 0:d[s])||((h=vf[m])==null?void 0:h.USD)||""},i=[{title:n("lua_title"),desc:n("lua_desc"),iconName:hk,href:"https://www.mediafire.com/file/llyxjrgzkrvmu61/DEFINITIVA-CS-v2.lua/file",download:"SCIRPT-NUEVA.V2.lua"},{title:n("txt_title"),desc:n("txt_desc"),iconName:Mk,href:"https://www.mediafire.com/file/2fg3dtp4nhay3jw/lista-codigos.txt/file",download:"lista-codigos.txt"},{title:n("xlsx_title"),desc:n("xlsx_desc"),iconName:Jk,href:"https://www.mediafire.com/file/n9l7kylzrpgiplq/lista-codigos.xlsx/file",download:"lista-codigos.xlsx"},{title:n("texture_title"),desc:n("texture_desc"),iconName:If,href:"https://www.mediafire.com/file/gllbbith3a6i56a/Mutants_Genetic_Gladiators_Mod.apk/file",download:"Mutants_Genetic_Gladiators_Mod.apk"}],l=[["VPhoneOS",n("vphone_desc"),"https://vphoneos.com/"],["VMOS",n("vmos_desc"),""],["Virtual Master",n("vmaster_desc"),""]],p=[["LDPlayer",n("ldplayer_desc"),"https://www.ldplayer.net/"],["BlueStacks",n("bluestacks_desc"),""],["NoxPlayer",n("nox_desc"),""]];return u.jsxs("div",{className:"flex flex-col gap-6 pb-20",children:[u.jsxs("section",{className:"relative hero !p-10 md:!p-24 overflow-hidden rounded-[3rem]",children:[u.jsx("div",{className:"absolute inset-0 opacity-10 bg-grid-slate-900/[0.1] pointer-events-none"}),u.jsx("div",{className:"absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-brand/20 to-transparent -rotate-12 transform translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none"}),u.jsxs("div",{className:"relative z-10",children:[u.jsxs("div",{className:"eyebrow bg-white/5 border-white/10 px-4 py-1 rounded-full inline-flex items-center gap-2 mb-6 backdrop-blur-md",children:[u.jsx(jf,{size:14,className:"text-blue-brand-2"}),u.jsx("span",{className:"text-[10px] font-black uppercase tracking-[0.2em]",children:n("download_center")})]}),u.jsxs("h1",{className:"text-4xl md:text-8xl lg:text-9xl font-black mt-4 mb-6 uppercase tracking-tighter leading-[0.8] md:leading-[0.85] text-white",children:[n("downloads")," ",u.jsx("br",{}),u.jsxs("span",{className:"text-blue-brand relative",children:["MÓVIL / PC",u.jsx("span",{className:"absolute -bottom-2 left-0 w-full h-1 bg-white/10 rounded-full"})]})]}),u.jsx("p",{className:"text-slate-400 text-sm md:text-lg max-w-2xl mx-auto md:mx-0 opacity-90 leading-relaxed font-medium",children:n("tools_desc")})]})]}),u.jsx(ts,{}),u.jsxs("section",{className:"flex flex-col gap-4",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:"h-px flex-1 bg-white/5"}),u.jsx("h2",{className:"text-lg font-bold uppercase tracking-tight m-0 text-white",children:n("essential_resources")}),u.jsx("div",{className:"h-px flex-1 bg-white/5"})]}),u.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-4 gap-6",children:i.map((m,d)=>{const h=m.iconName,f=m.title==="Textura MGG"||m.title==="MGG Texture";return u.jsxs("article",{className:`panel flex flex-col gap-4 relative transition-all duration-300 border ${f?"glow-card border-blue-brand/40 bg-blue-brand/5":"hover:border-white/10"}`,children:[f&&u.jsx("span",{className:"badge-new uppercase",children:"New"}),u.jsx("div",{className:`w-12 h-12 rounded-2xl flex items-center justify-center ${f?"bg-blue-brand text-white":"bg-white/8 text-blue-brand-2"}`,children:u.jsx(h,{size:24})}),u.jsxs("div",{children:[u.jsx("h3",{className:`text-xl font-bold tracking-tight mb-2 ${f?"text-blue-brand-2":""}`,children:m.title}),u.jsx("p",{className:"text-muted text-sm m-0 min-h-[40px] leading-relaxed",children:m.desc})]}),u.jsxs("a",{className:`btn w-full relative overflow-hidden group transition-all ${f?"bg-white text-black hover:bg-blue-brand-2 hover:text-white border-transparent":"btn-primary"}`,href:m.href,target:"_blank",rel:"noopener noreferrer",children:[u.jsx("span",{className:"font-black uppercase",children:n("download_btn")}),u.jsx("span",{className:"download-shine","aria-hidden":"true"})]})]},d)})})]}),u.jsxs("section",{className:"panel flex gap-4 items-center transition-all border border-white/10 bg-white/[0.02]",children:[u.jsx("div",{className:"w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-white/8 text-green-brand",children:u.jsx(Xk,{size:24})}),u.jsxs("div",{className:"flex-1",children:[u.jsx("h3",{className:"text-lg font-bold tracking-tight mb-1 text-white font-black",children:n("gg_official")}),u.jsx("p",{className:"text-muted text-sm m-0",children:n("gg_desc")})]}),u.jsxs("div",{className:"hidden lg:flex gap-2",children:[u.jsx("span",{className:"px-3 py-1.5 rounded-full text-[12px] font-bold bg-white/8 text-blue-100",children:"Root real"}),u.jsx("span",{className:"px-3 py-1.5 rounded-full text-[12px] font-bold bg-white/8 text-blue-100",children:"Root virtual"})]})]}),u.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[u.jsxs("section",{className:"panel flex flex-col gap-5 border border-white/10 bg-gradient-to-br from-white/[0.01] to-transparent",children:[u.jsx("h3",{className:"text-xl font-bold tracking-tight m-0 text-white uppercase tracking-tighter",children:n("mobile_vms")}),u.jsx("div",{className:"grid gap-4",children:l.map(([m,d,h],f)=>u.jsxs("div",{className:"p-4 rounded-xl border border-white/5 bg-white/2 hover:border-white/10 transition-colors",children:[u.jsx("h4",{className:"font-bold mb-1 text-white",children:m}),u.jsx("p",{className:"text-muted text-sm mb-3 leading-relaxed",children:d}),h?u.jsxs("a",{href:h,target:"_blank",rel:"noopener noreferrer",className:"btn btn-sm text-xs py-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black",children:[u.jsx(Za,{size:14}),u.jsx("span",{children:n("official_site")})]}):u.jsxs("button",{disabled:!0,className:"btn btn-sm text-xs py-2 opacity-50 cursor-not-allowed",children:[u.jsx(Za,{size:14}),u.jsx("span",{children:n("official_site")})]})]},f))})]}),u.jsxs("section",{className:"panel flex flex-col gap-5 border border-white/10 bg-gradient-to-br from-white/[0.01] to-transparent",children:[u.jsx("h3",{className:"text-xl font-bold tracking-tight m-0 text-white uppercase tracking-tighter",children:n("pc_emulators")}),u.jsx("div",{className:"grid gap-4",children:p.map(([m,d,h],f)=>u.jsxs("div",{className:"p-4 rounded-xl border border-white/5 bg-white/2 hover:border-white/10 transition-colors",children:[u.jsx("h4",{className:"font-bold mb-1 text-white",children:m}),u.jsx("p",{className:"text-muted text-sm mb-3 leading-relaxed",children:d}),h?u.jsxs("a",{href:h,target:"_blank",rel:"noopener noreferrer",className:"btn btn-sm text-xs py-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black",children:[u.jsx(Za,{size:14}),u.jsx("span",{children:n("official_site")})]}):u.jsxs("button",{disabled:!0,className:"btn btn-sm text-xs py-2 opacity-50 cursor-not-allowed",children:[u.jsx(Za,{size:14}),u.jsx("span",{children:n("official_site")})]})]},f))})]})]}),u.jsxs("section",{className:"panel flex gap-4 items-start border-l-4 bg-yellow-brand/5 border-yellow-brand",children:[u.jsx(Wk,{size:24,className:"text-yellow-brand shrink-0 mt-1"}),u.jsxs("div",{children:[u.jsx("strong",{className:"block text-white mb-1",children:n("warn_title")}),u.jsx("p",{className:"text-muted text-sm m-0",children:n("warn_desc")})]})]})]})}const Mf={legal_info:{LATAM:"Información Legal",USD:"Legal Information",PT:"Informação Legal",FR:"Informations légales",DE:"Rechtliche Informationen"},terms_conditions1:{LATAM:"TÉRMINOS Y ",USD:"TERMS & ",PT:"TERMOS E ",FR:"CONDITIONS & ",DE:"ALLGEMEINE "},terms_conditions2:{LATAM:"CONDICIONES",USD:"CONDITIONS",PT:"CONDIÇÕES",FR:"TERMES",DE:"GESCHÄFTSBEDINGUNGEN"},read_carefully:{LATAM:"Por favor lee atentamente las normas y condiciones de uso de Mutodex MGG.",USD:"Please read the rules and conditions of use for Mutodex MGG carefully.",PT:"Por favor, leia atentamente as regras e condições de uso do Mutodex MGG.",FR:"Veuillez lire attentivement les règles et conditions d'utilisation de Mutodex MGG.",DE:"Bitte lesen Sie die Regeln und Nutzungsbedingungen für Mutodex MGG sorgfältig durch."},rights_reserved:{LATAM:"Derechos Reservados",USD:"Rights Reserved",PT:"Direitos Reservados",FR:"Droits réserves",DE:"Rechte vorbehalten"},rights_desc:{LATAM:"Todos los derechos de diseño, desarrollo y marca personal relacionada con Mutodex MGG están reservados a Smith Luque. Cualquier reproducción parcial o total del contenido multimedia o código fuente sin autorización previa está prohibida.",USD:"All rights of design, development, and personal brand related to Mutodex MGG are reserved by Smith Luque. Any partial or total reproduction of multimedia content or source code without prior authorization is prohibited.",PT:"Todos os direitos de design, desenvolvimento e marca pessoal relacionados ao Mutodex MGG são reservados por Smith Luque. Qualquer reprodução parcial ou total do conteúdo multimídia ou código-fonte sem autorização prévia é proibida.",FR:"Tous les droits de conception, de développement et de marque personnelle liés à Mutodex MGG sont réservés par Smith Luque. Toute reproduction partielle ou totale du contenu multimédia ou du code source sans autorisation préalable est interdite.",DE:"Alle Design-, Entwicklungs- und Markenrechte im Zusammenhang mit Mutodex MGG sind Smith Luque vorbehalten. Jegliche teilweise oder vollständige Vervielfältigung von Multimedia-Inhalten oder Quellcode ohne vorherige Genehmigung ist untersagt."},risks_liability:{LATAM:"Riesgos y Responsabilidad",USD:"Risks & Liability",PT:"Riscos e Responsabilidade",FR:"Risques et responsabilité",DE:"Risiken & Haftung"},risks_desc:{LATAM:"El uso de scripts, hacks o herramientas de terceros (como Game Guardian) en Mutants Genetic Gladiators conlleva un RIESGO CRÍTICO DE BANEO de tu cuenta por parte de los desarrolladores oficiales del juego (Kobojo/Syntamon).",USD:"The use of scripts, hacks, or third-party tools (such as Game Guardian) in Mutants Genetic Gladiators carries a CRITICAL RISK OF BANNING of your account by the official game developers (Kobojo/Syntamon).",PT:"O uso de scripts, hacks ou ferramentas de terceiros (como Game Guardian) em Mutants Genetic Gladiators acarreta um RISCO CRÍTICO DE BANIMENTO de sua conta pelos desenvolvedores oficiais do jogo (Kobojo/Syntamon).",FR:"L'utilisation de scripts, de hacks ou d'outils tiers (tels que Game Guardian) dans Mutants Genetic Gladiators comporte un RISQUE CRITIQUE DE BANNISSEMENT de votre compte par les développeurs officiels du jeu (Kobojo/Syntamon).",DE:"Die Verwendung von Skripten, Hacks oder Tools von Drittanbietern (wie Game Guardian) in Mutants Genetic Gladiators birgt ein KRITISCHES BAN-RISIKO Ihres Kontos durch die offiziellen Spielentwickler (Kobojo/Syntamon)."},risk_bullet1:{LATAM:"Smith Luque no se hace responsable por pérdidas de cuentas.",USD:"Smith Luque is not responsible for any banned or lost accounts.",PT:"Smith Luque não é responsável por contas perdidas ou banidas.",FR:"Smith Luque n'est pas responsable des comptes bannis ou perdus.",DE:"Smith Luque ist nicht verantwortlich für gesperrte oder verlorene Konten."},risk_bullet2:{LATAM:"El uso del contenido de esta web es bajo tu propio riesgo.",USD:"Sourcing and testing scripts or utilizing codes is fully at your own risk.",PT:"O uso do conteúdo deste site é de sua total conta e risco.",FR:"L'utilisation du contenu de ce site se fait entièrement à vos risques et périls.",DE:"Die Verwendung der Inhalte dieser Website erfolgt auf eigene Gefahr."},risk_bullet3:{LATAM:"Recomendamos siempre probar en cuentas secundarias.",USD:"We highly recommend testing any external tools on secondary accounts first.",PT:"Recomendamos sempre testar ferramentas externas em contas secundárias primeiro.",FR:"Nous vous recommandons fortement de tester d'abord les outils externes sur des comptes secondaires.",DE:"Wir empfehlen dringend, externe Tools zuerst auf Zweitkonten zu testen."},purpose_title:{LATAM:"Propósito de la Web",USD:"Purpose of the Website",PT:"Propósito do Website",FR:"But du site internet",DE:"Zweck der Website"},purpose_desc:{LATAM:"Esta plataforma ha sido creada exclusivamente con fines de aprendizaje, investigación y entretenimiento. Nuestra misión es proporcionar una base de datos organizada para la comunidad de MGG y facilitar el acceso a la información técnica del juego.",USD:"This platform has been created exclusively for learning, research, and entertainment purposes. Our mission is to provide an organized, fast database for the MGG community and simplify secure access to the technical parameters of the game.",PT:"Esta plataforma foi criada exclusivamente para fins de aprendizagem, pesquisa e entretenimento. Nossa missão é fornecer um banco de dados organizado para a comunidade MGG e facilitar o acesso seguro aos parâmetros técnicos do jogo.",FR:"Cette plateforme a été créée exclusivement à des fins d'apprentissage, de recherche et de divertissement. Notre mission est de fournir une base de données organisée et rapide pour la communauté MGG et de simplifier l'accès sécurisé aux paramètres techniques du jeu.",DE:"Diese Plattform wurde ausschließlich zu Lern-, Forschungs- und Unterhaltungszwecken erstellt. Unsere Mission ist es, eine organisierte, schnelle Datenbank für die MGG-Community bereitzustellen und den sicheren Zugriff auf die technischen Parameter des Spiels zu vereinfachen."},benefits_title:{LATAM:"Beneficios y Utilidades",USD:"Utility & Benefits",PT:"Utilidade e Benefícios",FR:"Avantages et utilités",DE:"Nutzen & Vorteile"},benefit_bullet1:{LATAM:"Acceso instantáneo a IDs de mutantes actualizados.",USD:"Instant, secure access to updated mutant identifiers.",PT:"Acesso instantâneo e seguro aos identificadores de mutantes atualizados.",FR:"Accès instantané et sécurisé aux identifiants mis à jour des mutants.",DE:"Sofortiger, sicherer Zugriff auf aktualisierte Mutantenkennungen."},benefit_bullet2:{LATAM:"Cálculo preciso de recursos para la calculadora EVO.",USD:"Precise calculation of upgrade resources in EVO calculator.",PT:"Cálculo preciso de recursos na calculadora de EVO.",FR:"Calcul précis des ressources d'amélioration dans le calculateur EVO.",DE:"Präzise Berechnung von Upgrade-Ressourcen im EVO-Rechner."},benefit_bullet3:{LATAM:"Sincronización con el blog oficial de Mutodex.",USD:"Real-time linkups with the official Mutodex blog system.",PT:"Links em tempo real com o sistema de blog oficial do Mutodex.",FR:"Liaisons en temps réel avec le système de blog officiel de Mutodex.",DE:"Echtzeit-Verknüpfungen mit dem offiziellen Mutodex-Blog-System."},benefit_bullet4:{LATAM:"Servicios de ayuda y soporte comunitario.",USD:"Group discussion links and active community assistance.",PT:"Links de discussões de grupo e assistência ativa da comunidade.",FR:"Liens de discussion de groupe et assistance communautaire active.",DE:"Gruppen-Diskussionslinks und aktive Unterstützung der Community."},inquiries:{LATAM:"Contacto",USD:"Inquiries",PT:"Dúvidas",FR:"Demandes",DE:"Anfragen"},inquiries_desc:{LATAM:"Si tienes dudas sobre estos términos, puedes contactarme vía WhatsApp.",USD:"If you have any questions or concern regarding these policies, feel free to send a message on WhatsApp.",PT:"Se você tiver alguma dúvida ou preocupação sobre estas políticas, sinta-se à vontade para enviar uma mensagem no WhatsApp.",FR:"Si vous avez des questions ou des préoccupations concernant ces politiques, n'hésitez pas à envoyer un message sur WhatsApp.",DE:"Wenn Sie Fragen oder Bedenken bezüglich dieser Richtlinien haben, können Sie uns gerne eine Nachricht über WhatsApp senden."},get_support:{LATAM:"Consultar ayuda",USD:"Get Support",PT:"Obter Suporte",FR:"Obtenir de l'aide",DE:"Support anfordern"},last_updated:{LATAM:"Última actualización: 12 de Mayo, 2026. Al navegar por este sitio, aceptas estos términos automáticamente.",USD:"Last updated: May 12, 2026. By navigating this site, you automatically accept these terms.",PT:"Última atualização: 12 de maio de 2026. Ao navegar neste site, você aceita automaticamente estes termos.",FR:"Dernière mise à jour : 12 mai 2026. En naviguant sur ce site, vous acceptez automatiquement ces conditions.",DE:"Zuletzt aktualisiert: 12. Mai 2026. Durch das Navigieren auf dieser Website akzeptieren Sie diese Bedingungen automatisch."}};function V5(){const{region:s}=Ie(),n=i=>{var l,p;return((l=Mf[i])==null?void 0:l[s])||((p=Mf[i])==null?void 0:p.USD)||""};return u.jsxs("div",{className:"flex flex-col gap-6",children:[u.jsxs("section",{className:"hero !p-6 md:!p-12",children:[u.jsxs("div",{className:"eyebrow scale-90 md:scale-100",children:[u.jsx(Hk,{size:14}),u.jsx("span",{children:n("legal_info")})]}),u.jsxs("h1",{className:"text-3xl md:text-5xl font-black mt-4 mb-4 uppercase tracking-tighter leading-[0.9] md:leading-[1]",children:[n("terms_conditions1"),u.jsx("span",{className:"text-blue-brand-2",children:n("terms_conditions2")})]}),u.jsx("p",{className:"text-muted text-sm md:text-base max-w-2xl mx-auto px-4 opacity-80",children:n("read_carefully")})]}),u.jsx(ts,{}),u.jsxs("div",{className:"grid md:grid-cols-[1fr_0.4fr] gap-6 items-start",children:[u.jsxs("div",{className:"flex flex-col gap-6",children:[u.jsxs("section",{className:"panel flex flex-col gap-5 p-6 md:p-8",children:[u.jsxs("div",{className:"flex items-center gap-3 border-b border-line pb-4 mb-2",children:[u.jsx(_l,{className:"text-blue-brand-2",size:24}),u.jsx("h2",{className:"m-0 text-xl font-bold uppercase tracking-tight",children:n("rights_reserved")})]}),u.jsx("p",{className:"text-slate-300 leading-relaxed",children:n("rights_desc")})]}),u.jsxs("section",{className:"panel flex flex-col gap-5 p-6 md:p-8 border-l-4 border-red-brand bg-red-brand/5",children:[u.jsxs("div",{className:"flex items-center gap-3 border-b border-white/5 pb-4 mb-2",children:[u.jsx(Pk,{className:"text-red-brand",size:24}),u.jsx("h2",{className:"m-0 text-xl font-bold uppercase tracking-tight text-white",children:n("risks_liability")})]}),u.jsxs("div",{className:"space-y-4",children:[u.jsx("p",{className:"text-slate-300 leading-relaxed m-0",children:n("risks_desc")}),u.jsxs("ul",{className:"grid gap-2 text-sm text-slate-400 list-disc pl-5",children:[u.jsx("li",{children:n("risk_bullet1")}),u.jsx("li",{children:n("risk_bullet2")}),u.jsx("li",{children:n("risk_bullet3")})]})]})]}),u.jsxs("section",{className:"panel flex flex-col gap-5 p-6 md:p-8",children:[u.jsxs("div",{className:"flex items-center gap-3 border-b border-line pb-4 mb-2",children:[u.jsx(Af,{className:"text-blue-brand-2",size:24}),u.jsx("h2",{className:"m-0 text-xl font-bold uppercase tracking-tight",children:n("purpose_title")})]}),u.jsxs("div",{className:"space-y-4",children:[u.jsx("p",{className:"text-slate-300 leading-relaxed",children:n("purpose_desc")}),u.jsxs("div",{className:"bg-white/5 p-4 rounded-xl",children:[u.jsx("h3",{className:"text-sm font-bold text-blue-brand-2 mb-2 uppercase",children:n("benefits_title")}),u.jsxs("ul",{className:"grid gap-2 text-xs md:text-sm text-slate-400",children:[u.jsxs("li",{className:"flex gap-2",children:[u.jsx("span",{children:"•"})," ",u.jsx("span",{children:n("benefit_bullet1")})]}),u.jsxs("li",{className:"flex gap-2",children:[u.jsx("span",{children:"•"})," ",u.jsx("span",{children:n("benefit_bullet2")})]}),u.jsxs("li",{className:"flex gap-2",children:[u.jsx("span",{children:"•"})," ",u.jsx("span",{children:n("benefit_bullet3")})]}),u.jsxs("li",{className:"flex gap-2",children:[u.jsx("span",{children:"•"})," ",u.jsx("span",{children:n("benefit_bullet4")})]})]})]})]})]})]}),u.jsxs("aside",{className:"flex flex-col gap-4",children:[u.jsxs("div",{className:"panel p-5 bg-blue-brand/5 border-blue-brand/20",children:[u.jsx("h3",{className:"text-xs font-bold text-blue-brand-2 uppercase mb-3",children:n("inquiries")}),u.jsx("p",{className:"text-[11px] text-muted leading-relaxed mb-4",children:n("inquiries_desc")}),u.jsx("a",{href:"https://wa.me/51906328464",target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary w-full text-xs py-2.5",children:n("get_support")})]}),u.jsx("p",{className:"text-[10px] text-center text-muted px-2",children:n("last_updated")})]})]})]})}function w5(){const[s,n]=Y.useState(window.location.hash.replace(/^#/,"")||"/"),[i,l]=Y.useState(navigator.onLine);Y.useEffect(()=>{const d=()=>{n(window.location.hash.replace(/^#/,"")||"/")},h=()=>l(!0),f=()=>l(!1);return window.addEventListener("hashchange",d),window.addEventListener("online",h),window.addEventListener("offline",f),()=>{window.removeEventListener("hashchange",d),window.removeEventListener("online",h),window.removeEventListener("offline",f)}},[]);const p=d=>{window.location.hash=d},m=()=>{switch(s){case"/":return u.jsx(ff,{});case"/novedades":return u.jsx(k5,{});case"/servicios":return u.jsx(y5,{});case"/evo":return u.jsx(M5,{});case"/otros":return u.jsx(j5,{});case"/guia":return u.jsx(A5,{});case"/tutoriales":return u.jsx(S5,{});case"/descargas":return u.jsx(I5,{});case"/terminos":return u.jsx(V5,{});default:return u.jsx(ff,{})}};return u.jsx(r5,{currentPath:s,onNavigate:p,isOnline:i,children:m()})}$x.createRoot(document.getElementById("root")).render(u.jsx(Y.StrictMode,{children:u.jsx(l5,{children:u.jsx(w5,{})})}));
