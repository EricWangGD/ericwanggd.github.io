var ChatModule;!function(){"use strict";var e={2400:function(e,n,t){var r={"./ChatModule":function(){return Promise.all([t.e(671),t.e(694),t.e(393)]).then((function(){return function(){return t(6481)}}))}},o=function(e,n){return t.R=n,n=t.o(r,e)?r[e]():Promise.resolve().then((function(){throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,n},u=function(e,n){if(t.S){var r="default",o=t.S[r];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[r]=e,t.I(r,n)}};t.d(n,{get:function(){return o},init:function(){return u}})}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var u=n[r]={id:r,loaded:!1,exports:{}};return e[r].call(u.exports,u,u.exports,t),u.loaded=!0,u.exports}t.m=e,t.c=n,t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,{a:n}),n},function(){var e,n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};t.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var u=Object.create(null);t.r(u);var i={};e=e||[null,n({}),n([]),n(n)];for(var f=2&o&&r;"object"==typeof f&&!~e.indexOf(f);f=n(f))Object.getOwnPropertyNames(f).forEach((function(e){i[e]=function(){return r[e]}}));return i.default=function(){return r},t.d(u,i),u}}(),t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))},t.u=function(e){return"static/js/"+e+"."+{164:"2034fb17",393:"2c8dc8ce",661:"692f5d90",671:"5b1d5a31",694:"e4912697",756:"e991d86a",791:"fb4f0ad6"}[e]+".chunk.js"},t.miniCssF=function(e){return"static/css/"+e+".c25443cf.chunk.css"},t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e={},n="tfin-ui-project-template:";t.l=function(r,o,u,i){if(e[r])e[r].push(o);else{var f,c;if(void 0!==u)for(var a=document.getElementsByTagName("script"),l=0;l<a.length;l++){var s=a[l];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==n+u){f=s;break}}f||(c=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,t.nc&&f.setAttribute("nonce",t.nc),f.setAttribute("data-webpack",n+u),f.src=r),e[r]=[o];var d=function(n,t){f.onerror=f.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],f.parentNode&&f.parentNode.removeChild(f),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=d.bind(null,f.onerror),f.onload=d.bind(null,f.onload),c&&document.head.appendChild(f)}}}(),t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},function(){t.S={};var e={},n={};t.I=function(r,o){o||(o=[]);var u=n[r];if(u||(u=n[r]={}),!(o.indexOf(u)>=0)){if(o.push(u),e[r])return e[r];t.o(t.S,r)||(t.S[r]={});var i=t.S[r],f="tfin-ui-project-template",c=function(e,n,t,r){var o=i[e]=i[e]||{},u=o[n];(!u||!u.loaded&&(!r!=!u.eager?r:f>u.from))&&(o[n]={get:t,from:f,eager:!!r})},a=[];if("default"===r)c("react-dom","18.0.0",(function(){return Promise.all([t.e(164),t.e(756)]).then((function(){return function(){return t(4164)}}))})),c("react","18.0.0",(function(){return t.e(791).then((function(){return function(){return t(2791)}}))}));return a.length?e[r]=Promise.all(a).then((function(){return e[r]=1})):e[r]=1}}}(),function(){var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e}(),function(){var e=function(e){var n=function(e){return e.split(".").map((function(e){return+e==e?+e:e}))},t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),r=t[1]?n(t[1]):[];return t[2]&&(r.length++,r.push.apply(r,n(t[2]))),t[3]&&(r.push([]),r.push.apply(r,n(t[3]))),r},n=function(n,t){n=e(n),t=e(t);for(var r=0;;){if(r>=n.length)return r<t.length&&"u"!=(typeof t[r])[0];var o=n[r],u=(typeof o)[0];if(r>=t.length)return"u"==u;var i=t[r],f=(typeof i)[0];if(u!=f)return"o"==u&&"n"==f||"s"==f||"u"==u;if("o"!=u&&"u"!=u&&o!=i)return o<i;r++}},r=function(e){var n=e[0],t="";if(1===e.length)return"*";if(n+.5){t+=0==n?">=":-1==n?"<":1==n?"^":2==n?"~":n>0?"=":"!=";for(var o=1,u=1;u<e.length;u++)o--,t+="u"==(typeof(f=e[u]))[0]?"-":(o>0?".":"")+(o=2,f);return t}var i=[];for(u=1;u<e.length;u++){var f=e[u];i.push(0===f?"not("+c()+")":1===f?"("+c()+" || "+c()+")":2===f?i.pop()+" "+i.pop():r(f))}return c();function c(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=function(n,t){if(0 in n){t=e(t);var r=n[0],u=r<0;u&&(r=-r-1);for(var i=0,f=1,c=!0;;f++,i++){var a,l,s=f<n.length?(typeof n[f])[0]:"";if(i>=t.length||"o"==(l=(typeof(a=t[i]))[0]))return!c||("u"==s?f>r&&!u:""==s!=u);if("u"==l){if(!c||"u"!=s)return!1}else if(c)if(s==l)if(f<=r){if(a!=n[f])return!1}else{if(u?a>n[f]:a<n[f])return!1;a!=n[f]&&(c=!1)}else if("s"!=s&&"n"!=s){if(u||f<=r)return!1;c=!1,f--}else{if(f<=r||l<s!=u)return!1;c=!1}else"s"!=s&&"n"!=s&&(c=!1,f--)}}var d=[],p=d.pop.bind(d);for(i=1;i<n.length;i++){var h=n[i];d.push(1==h?p()|p():2==h?p()&p():h?o(h,t):!p())}return!!p()},u=function(e,t){var r=e[t];return Object.keys(r).reduce((function(e,t){return!e||!r[e].loaded&&n(e,t)?t:e}),0)},i=function(e,n,t,o){return"Unsatisfied version "+t+" from "+(t&&e[n][t].from)+" of shared singleton module "+n+" (required "+r(o)+")"},f=function(e,n,t,r){var o=u(e,t);return a(e[t][o])},c=function(e,n,t,r){var f=u(e,t);return o(r,f)||"undefined"!==typeof console&&console.warn&&console.warn(i(e,t,f,r)),a(e[t][f])},a=function(e){return e.loaded=1,e.get()},l=function(e){return function(n,r,o,u){var i=t.I(n);return i&&i.then?i.then(e.bind(e,n,t.S[n],r,o,u)):e(n,t.S[n],r,o,u)}},s=l((function(e,n,r,o){return n&&t.o(n,r)?f(n,0,r):o()})),d=l((function(e,n,r,o,u){return n&&t.o(n,r)?c(n,0,r,o):u()})),p={},h={756:function(){return d("default","react",[1,18,0,0],(function(){return t.e(791).then((function(){return function(){return t(2791)}}))}))},1672:function(){return d("default","react",[1,18],(function(){return t.e(791).then((function(){return function(){return t(2791)}}))}))},2672:function(){return d("default","react",[4,18,0,0],(function(){return t.e(791).then((function(){return function(){return t(2791)}}))}))},5183:function(){return d("default","react-dom",[1,18],(function(){return Promise.all([t.e(164),t.e(756)]).then((function(){return function(){return t(4164)}}))}))},7082:function(){return s("default","react",(function(){return t.e(791).then((function(){return function(){return t(2791)}}))}))}},v={694:[1672,2672,5183,7082],756:[756]};t.f.consumes=function(e,n){t.o(v,e)&&v[e].forEach((function(e){if(t.o(p,e))return n.push(p[e]);var r=function(n){p[e]=0,t.m[e]=function(r){delete t.c[e],r.exports=n()}},o=function(n){delete p[e],t.m[e]=function(r){throw delete t.c[e],n}};try{var u=h[e]();u.then?n.push(p[e]=u.then(r).catch(o)):r(u)}catch(i){o(i)}}))}}(),function(){var e=function(e){return new Promise((function(n,r){var o=t.miniCssF(e),u=t.p+o;if(function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=(i=t[r]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===n))return i}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){var i;if((o=(i=u[r]).getAttribute("data-href"))===e||o===n)return i}}(o,u))return n();!function(e,n,t,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(u){if(o.onerror=o.onload=null,"load"===u.type)t();else{var i=u&&("load"===u.type?"missing":u.type),f=u&&u.target&&u.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+f+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=f,o.parentNode.removeChild(o),r(c)}},o.href=n;var u=document.querySelector("body");u.parentNode.insertBefore(o,u.nextSibling)}(e,u,n,r)}))},n={703:0};t.f.miniCss=function(t,r){n[t]?r.push(n[t]):0!==n[t]&&{393:1}[t]&&r.push(n[t]=e(t).then((function(){n[t]=0}),(function(e){throw delete n[t],e})))}}(),function(){var e={703:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else if(756!=n){var u=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=u);var i=t.p+t.u(n),f=new Error;t.l(i,(function(r){if(t.o(e,n)&&(0!==(o=e[n])&&(e[n]=void 0),o)){var u=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;f.message="Loading chunk "+n+" failed.\n("+u+": "+i+")",f.name="ChunkLoadError",f.type=u,f.request=i,o[1](f)}}),"chunk-"+n,n)}else e[n]=0};var n=function(n,r){var o,u,i=r[0],f=r[1],c=r[2],a=0;if(i.some((function(n){return 0!==e[n]}))){for(o in f)t.o(f,o)&&(t.m[o]=f[o]);if(c)c(t)}for(n&&n(r);a<i.length;a++)u=i[a],t.o(e,u)&&e[u]&&e[u][0](),e[u]=0},r=self.webpackChunktfin_ui_project_template=self.webpackChunktfin_ui_project_template||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t(2400);ChatModule=r}();
//# sourceMappingURL=ChatModuleEntry.js.map