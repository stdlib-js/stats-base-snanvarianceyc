"use strict";var m=function(a,v){return function(){try{return v||a((v={exports:{}}).exports,v),v.exports}catch(o){throw (v=0, o)}};};var j=m(function(B,N){
var q=require('@stdlib/number-float64-base-to-float32/dist');function T(a,v,o,u){var l,i,t,s,r,e,f,n;if(a<=0)return NaN;if(a===1||u===0)return r=o[0],r===r&&a-v>0?0:NaN;for(u<0?i=(1-a)*u:i=0,n=0;n<a&&(r=o[i],r!==r);n++)i+=u;if(n===a)return NaN;for(i+=u,l=r,s=0,n+=1,f=1,n;n<a;n++)r=o[i],r===r&&(f+=1,l=q(l+r),e=q(q(f*r)-l),s=q(s+q(q(q(1/(f*(f-1)))*e)*e))),i+=u;return t=f-v,t<=0?NaN:q(s/t)}N.exports=T
});var k=m(function(C,b){
var y=require('@stdlib/number-float64-base-to-float32/dist');function _(a,v,o,u,l){var i,t,s,r,e,f,n,c;if(a<=0)return NaN;if(a===1||u===0)return e=o[l],e===e&&a-v>0?0:NaN;for(t=l,c=0;c<a&&(e=o[t],e!==e);c++)t+=u;if(c===a)return NaN;for(t+=u,i=e,r=0,c+=1,n=1,c;c<a;c++)e=o[t],e===e&&(n+=1,i=y(i+e),f=y(y(n*e)-i),r=y(r+y(y(y(1/(n*(n-1)))*f)*f))),t+=u;return s=n-v,s<=0?NaN:y(r/s)}b.exports=_
});var R=m(function(D,F){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=j(),O=k();E(x,"ndarray",O);F.exports=x
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=R(),p,S=h(g(__dirname,"./native.js"));w(S)?p=z:p=S;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
