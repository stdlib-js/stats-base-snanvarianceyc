"use strict";var m=function(a,u){return function(){return u||a((u={exports:{}}).exports,u),u.exports}};var j=m(function(B,N){
var c=require('@stdlib/number-float64-base-to-float32/dist');function T(a,u,y,v){var l,i,t,o,r,e,f,n;if(a<=0)return NaN;if(a===1||v===0)return r=y[0],r===r&&a-u>0?0:NaN;for(v<0?i=(1-a)*v:i=0,n=0;n<a&&(r=y[i],r!==r);n++)i+=v;if(n===a)return NaN;for(i+=v,l=r,o=0,n+=1,f=1,n;n<a;n++)r=y[i],r===r&&(f+=1,l=c(l+r),e=c(c(f*r)-l),o=c(o+c(c(c(1/(f*(f-1)))*e)*e))),i+=v;return t=f-u,t<=0?NaN:c(o/t)}N.exports=T
});var k=m(function(C,b){
var q=require('@stdlib/number-float64-base-to-float32/dist');function _(a,u,y,v,l){var i,t,o,r,e,f,n,s;if(a<=0)return NaN;if(a===1||v===0)return e=y[l],e===e&&a-u>0?0:NaN;for(t=l,s=0;s<a&&(e=y[t],e!==e);s++)t+=v;if(s===a)return NaN;for(t+=v,i=e,r=0,s+=1,n=1,s;s<a;s++)e=y[t],e===e&&(n+=1,i=q(i+e),f=q(q(n*e)-i),r=q(r+q(q(q(1/(n*(n-1)))*f)*f))),t+=v;return o=n-u,o<=0?NaN:q(r/o)}b.exports=_
});var R=m(function(D,F){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=j(),O=k();E(x,"ndarray",O);F.exports=x
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=R(),p,S=h(g(__dirname,"./native.js"));w(S)?p=z:p=S;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
