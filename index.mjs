// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.1.0-esm/index.mjs";function t(r,t,n,a){var f,i,o,s,N,u,d,l;if(r<=0)return NaN;if(1===r||0===a)return(N=n[0])==N&&r-t>0?0:NaN;for(i=a<0?(1-r)*a:0,l=0;l<r&&(N=n[i])!=N;l++)i+=a;if(l===r)return NaN;for(i+=a,f=N,s=0,l+=1,d=1;l<r;l++)(N=n[i])==N&&(d+=1,f=e(f+N),u=e(e(d*N)-f),s=e(s+e(e(e(1/(d*(d-1)))*u)*u))),i+=a;return(o=d-t)<=0?NaN:e(s/o)}function n(r,t,n,a,f){var i,o,s,N,u,d,l,m;if(r<=0)return NaN;if(1===r||0===a)return(u=n[f])==u&&r-t>0?0:NaN;for(o=f,m=0;m<r&&(u=n[o])!=u;m++)o+=a;if(m===r)return NaN;for(o+=a,i=u,N=0,m+=1,l=1;m<r;m++)(u=n[o])==u&&(l+=1,i=e(i+u),d=e(e(l*u)-i),N=e(N+e(e(e(1/(l*(l-1)))*d)*d))),o+=a;return(s=l-t)<=0?NaN:e(N/s)}r(t,"ndarray",n);export{t as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
