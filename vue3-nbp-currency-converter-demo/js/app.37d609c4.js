(function(e){function t(t){for(var r,o,u=t[0],i=t[1],l=t[2],s=0,d=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);b&&b(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==c[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},c={app:0},a=[];function u(e){return i.p+"js/"+({"currency-to-currency":"currency-to-currency","currency-to-table":"currency-to-table"}[e]||e)+"."+{"currency-to-currency":"1a648680","currency-to-table":"bb09b577"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"currency-to-currency":1,"currency-to-table":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({"currency-to-currency":"currency-to-currency","currency-to-table":"currency-to-table"}[e]||e)+"."+{"currency-to-currency":"3ffe7317","currency-to-table":"8e5a6487"}[e]+".css",c=i.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var l=a[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===c))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){l=d[u],s=l.getAttribute("data-href");if(s===r||s===c)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var r=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],b.parentNode.removeChild(b),n(a)},b.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=a);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var d=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(b);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}c[e]=void 0}};var b=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue3-nbp-currency-converter-demo/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var b=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"10bc":function(e,t,n){"use strict";n("178d")},"178d":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(e,t,n,o,c,a){var u=Object(r["resolveComponent"])("TheNavbar"),i=Object(r["resolveComponent"])("TheRouterViewContainer");return Object(r["openBlock"])(),Object(r["createBlock"])(r["Fragment"],null,[Object(r["createVNode"])(u),Object(r["createVNode"])(i)],64)}n("b0c0");var c=Object(r["withScopeId"])("data-v-76f20e37");Object(r["pushScopeId"])("data-v-76f20e37");var a=Object(r["createVNode"])("b",null,"Vue.js 3",-1),u=Object(r["createTextVNode"])("  currency converter ");Object(r["popScopeId"])();var i=c((function(e,t,n,o,i,l){var s=Object(r["resolveComponent"])("mdb-navbar-brand"),d=Object(r["resolveComponent"])("mdb-navbar-toggler"),b=Object(r["resolveComponent"])("mdb-navbar-item"),f=Object(r["resolveComponent"])("mdb-navbar-nav"),p=Object(r["resolveComponent"])("mdb-collapse"),v=Object(r["resolveComponent"])("mdb-navbar");return Object(r["openBlock"])(),Object(r["createBlock"])(v,{dark:"",bg:"primary",expand:"lg",class:"px-3 py-0 py-lg-3"},{default:c((function(){return[Object(r["createVNode"])(s,{class:"text-light px-0 py-2 py-lg-0 m-0"},{default:c((function(){return[a,u]})),_:1}),Object(r["createVNode"])(d,{onClick:t[1]||(t[1]=function(e){return o.collapseContent=!o.collapseContent})}),Object(r["createVNode"])(p,{modelValue:o.collapseContent,"onUpdate:modelValue":t[2]||(t[2]=function(e){return o.collapseContent=e})},{default:c((function(){return[Object(r["createVNode"])(f,{class:"d-flex justify-content-end flex-nowrap w-100"},{default:c((function(){return[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(e.$router.getRoutes(),(function(t){return Object(r["openBlock"])(),Object(r["createBlock"])(b,{key:t.name,to:t.path,active:t.name===e.$route.name},{default:c((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(t.name),1)]})),_:2},1032,["to","active"])})),128))]})),_:1})]})),_:1},8,["modelValue"])]})),_:1})})),l={name:"TheNavbar",setup:function(){return{collapseContent:Object(r["ref"])(!1)}},watch:{$route:function(){this.collapseContent=!1}}};n("5e54");l.render=i,l.__scopeId="data-v-76f20e37";var s=l,d=Object(r["withScopeId"])("data-v-1bdb75a6"),b=d((function(e,t,n,o,c,a){var u=Object(r["resolveComponent"])("router-view"),i=Object(r["resolveComponent"])("TheFooter"),l=Object(r["resolveComponent"])("mdb-container");return Object(r["openBlock"])(),Object(r["createBlock"])(l,{id:"TheRouterViewContainer",fluid:""},{default:d((function(){return[Object(r["createVNode"])(u,{mode:"out-in"},{default:d((function(e){var t=e.Component;return[Object(r["createVNode"])(r["Transition"],{class:"animate__animated animate__faster","enter-active-class":"animate__fadeIn","leave-active-class":"animate__fadeOut",mode:"out-in",appear:""},{default:d((function(){return[(Object(r["openBlock"])(),Object(r["createBlock"])(Object(r["resolveDynamicComponent"])(t)))]})),_:2},1024)]})),_:1}),Object(r["createVNode"])(i)]})),_:1})})),f=Object(r["createVNode"])("div",{class:"p-3"},[Object(r["createVNode"])("div",null,[Object(r["createVNode"])("a",{href:"https://github.com/brofrain/vue3-nbp-currency-converter/blob/main/LICENSE",target:"_blank"}," MIT License ")]),Object(r["createVNode"])("div",null,[Object(r["createTextVNode"])(" © 2021 Copyright: "),Object(r["createVNode"])("a",{href:"https://github.com/brofrain/",target:"_blank"}," Kajetan Welc ")])],-1);function p(e,t,n,o,c,a){var u=Object(r["resolveComponent"])("mdb-footer");return Object(r["openBlock"])(),Object(r["createBlock"])(u,{bg:"dark",text:["center","light"]},{default:Object(r["withCtx"])((function(){return[f]})),_:1})}var v={name:"TheFooter"};v.render=p;var h=v,m={name:"TheRouterViewContainer",components:{TheFooter:h},methods:{stretchContainer:function(){this.$el.style.height=window.innerHeight-this.$el.offsetTop+"px"}},mounted:function(){this.stretchContainer(),window.addEventListener("resize",this.stretchContainer)},beforeUnmount:function(){window.removeEventListener("resize",this.stretchContainer)}};n("db73");m.render=b,m.__scopeId="data-v-1bdb75a6";var j=m,O=n("5502"),y={name:"App",components:{TheNavbar:s,TheRouterViewContainer:j},setup:function(){var e=Object(O["b"])();e.dispatch("fetchNBPApi")}};n("7711");y.render=o;var g=y,C=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),x=Object(r["withScopeId"])("data-v-9171f5ee");Object(r["pushScopeId"])("data-v-9171f5ee");var N={class:"welcome-box"},V=Object(r["createVNode"])("div",{class:"text text-light text-shadow"},[Object(r["createTextVNode"])(" Simple currency converter powered by "),Object(r["createVNode"])("a",{href:"https://api.nbp.pl/",target:"_blank"},[Object(r["createVNode"])("b",null,"NBP Web API")])],-1),_=Object(r["createTextVNode"])(" Currency converter "),w=Object(r["createTextVNode"])(" Exchange rates table "),k={class:"text text-light text-shadow"},T=Object(r["createTextVNode"])(" Source code: "),B=Object(r["createVNode"])("i",{class:"fab fa-github text-light"},null,-1);Object(r["popScopeId"])();var S=x((function(e,t,n,o,c,a){var u=Object(r["resolveComponent"])("mdb-btn"),i=Object(r["resolveComponent"])("mdb-container");return Object(r["openBlock"])(),Object(r["createBlock"])(i,{id:"Home",fluid:""},{default:x((function(){return[Object(r["createVNode"])("div",N,[V,Object(r["createVNode"])(u,{color:"primary",size:"lg",class:"box-shadow",onClick:t[1]||(t[1]=function(t){return e.$router.push("/converter")})},{default:x((function(){return[_]})),_:1}),Object(r["createVNode"])(u,{color:"primary",size:"lg",class:"box-shadow",onClick:t[2]||(t[2]=function(t){return e.$router.push("/table")})},{default:x((function(){return[w]})),_:1}),Object(r["createVNode"])("div",k,[T,Object(r["createVNode"])(u,{color:"dark",class:"github-btn box-shadow",tag:"a",href:"https://github.com/brofrain/vue3-nbp-currency-converter/",target:"_blank",floating:""},{default:x((function(){return[B]})),_:1})])])]})),_:1})})),P={name:"Home"};n("10bc");P.render=S,P.__scopeId="data-v-9171f5ee";var E=P,I=[{path:"/",name:"Home",component:E},{path:"/converter",name:"Currency converter",component:function(){return n.e("currency-to-currency").then(n.bind(null,"3af6"))}},{path:"/table",name:"Exchange rates table",component:function(){return n.e("currency-to-table").then(n.bind(null,"383c"))}}],A=Object(C["a"])({history:Object(C["b"])("/vue3-nbp-currency-converter-demo/"),routes:I}),R=A,L=n("b85c"),F=(n("b64b"),n("b680"),n("6c42")),$=n("bc3a"),H=n.n($),M=Object(F["b"])(),z="https://api.nbp.pl/api/exchangerates/tables/a/",D={fetchNBPApi:function(e){var t=e.commit;H.a.get(z).then((function(e){var n,r,o=null===(n=e.data)||void 0===n||null===(r=n[0])||void 0===r?void 0:r.rates;if(null===o||void 0===o||!o.length)throw"Invalid data fetched";var c,a={PLN:1},u=Object(L["a"])(o);try{for(u.s();!(c=u.n()).done;){var i=c.value;a[i.code]=i.mid}}catch(l){u.e(l)}finally{u.f()}t("setExchangeRates",a)})).catch((function(){M.error("Fetching NBP Web API has failed!")}))}},U={setExchangeRates:function(e,t){e.exchangeRates=t}},W=Object(O["a"])({actions:D,mutations:U,state:function(){return{exchangeRates:{}}},getters:{sortedCurrencyCodes:function(e){return Object.keys(e.exchangeRates).sort()},getConvertedCurrencyValue:function(e){return function(t,n,r){var o=t*e.exchangeRates[n];return(o/e.exchangeRates[r]).toFixed(2)}},getConvertedCurrenciesObj:function(e,t){return function(e,n,r){var o,c={},a=Object(L["a"])(r.sort());try{for(a.s();!(o=a.n()).done;){var u=o.value;c[u]=t.getConvertedCurrencyValue(e,n,u)}}catch(i){a.e(i)}finally{a.f()}return c}}}}),q=n("d318"),J=n("a306"),K=n("ff94"),G=Object(r["createApp"])(g).use(W).use(R);for(var Q in q)G.component(Object(K["a"])(Q),q[Q]);G.component("multiselect",J["a"]),G.use(F["a"],{position:"top-center",hideProgressBar:!0,timeout:3e3,transition:"Vue-Toastification__fade"}),G.mount("#app")},"5e54":function(e,t,n){"use strict";n("7d1e")},"722a":function(e,t,n){},7711:function(e,t,n){"use strict";n("e2c0")},"7d1e":function(e,t,n){},db73:function(e,t,n){"use strict";n("722a")},e2c0:function(e,t,n){}});
//# sourceMappingURL=app.37d609c4.js.map