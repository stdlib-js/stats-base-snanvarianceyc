// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t,e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,o=Object.prototype,n=o.toString,a=o.__defineGetter__,l=o.__defineSetter__,i=o.__lookupGetter__,u=o.__lookupSetter__;t=function(){try{return e({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var f,c,y,p;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(i.call(t,e)||u.call(t,e)?(f=t.__proto__,t.__proto__=o,delete t[e],t[e]=r.value,t.__proto__=f):t[e]=r.value),y="get"in r,p="set"in r,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(t,e,r.get),p&&l&&l.call(t,e,r.set),t};var f,c=t,y="function"==typeof Math.fround?Math.fround:null,p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),b=Object.prototype.toString,d=Object.prototype.hasOwnProperty,_="function"==typeof Symbol?Symbol.toStringTag:"";f=p&&"symbol"==typeof Symbol.toStringTag?function(t){var e,r,o,n,a;if(null==t)return b.call(t);r=t[_],a=_,e=null!=(n=t)&&d.call(n,a);try{t[_]=void 0}catch(e){return b.call(t)}return o=b.call(t),e?t[_]=r:delete t[_],o}:function(t){return b.call(t)};var s,m=f,v="function"==typeof Float32Array,N=Number.POSITIVE_INFINITY,g="function"==typeof Float32Array?Float32Array:null,h="function"==typeof Float32Array?Float32Array:void 0;s=function(){var t,e,r;if("function"!=typeof g)return!1;try{e=new g([1,3.14,-3.14,5e40]),r=e,t=(v&&r instanceof Float32Array||"[object Float32Array]"===m(r))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===N}catch(e){t=!1}return t}()?h:function(){throw new Error("not implemented")};var j=new s(1),w="function"==typeof y?y:function(t){return j[0]=t,j[0]};function S(t,e,r,o){var n,a,l,i,u,f,c,y;if(t<=0)return NaN;if(1===t||0===o)return(u=r[0])==u&&t-e>0?0:NaN;for(a=o<0?(1-t)*o:0,y=0;y<t&&(u=r[a])!=u;y++)a+=o;if(y===t)return NaN;for(a+=o,n=u,i=0,y+=1,c=1;y<t;y++)(u=r[a])==u&&(c+=1,n=w(n+u),f=w(w(c*u)-n),i=w(i+w(w(w(1/(c*(c-1)))*f)*f))),a+=o;return(l=c-e)<=0?NaN:w(i/l)}return c(S,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(t,e,r,o,n){var a,l,i,u,f,c,y,p;if(t<=0)return NaN;if(1===t||0===o)return(f=r[n])==f&&t-e>0?0:NaN;for(l=n,p=0;p<t&&(f=r[l])!=f;p++)l+=o;if(p===t)return NaN;for(l+=o,a=f,u=0,p+=1,y=1;p<t;p++)(f=r[l])==f&&(y+=1,a=w(a+f),c=w(w(y*f)-a),u=w(u+w(w(w(1/(y*(y-1)))*c)*c))),l+=o;return(i=y-e)<=0?NaN:w(u/i)}}),S},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).snanvarianceyc=e();
//# sourceMappingURL=browser.js.map
