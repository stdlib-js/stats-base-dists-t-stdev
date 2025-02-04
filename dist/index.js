"use strict";var u=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var i=u(function(o,t){
var s=require('@stdlib/math-base-assert-is-nan/dist'),n=require('@stdlib/math-base-special-sqrt/dist'),a=require('@stdlib/constants-float64-pinf/dist');function q(r){return s(r)||r<=1?NaN:r<=2?a:n(r/(r-2))}t.exports=q
});var c=i();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
