var ze=Object.defineProperty,Fe=Object.defineProperties;var Ke=Object.getOwnPropertyDescriptors;var Ce=Object.getOwnPropertySymbols;var qe=Object.prototype.hasOwnProperty,Ye=Object.prototype.propertyIsEnumerable;var $e=(e,t,n)=>t in e?ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ce=(e,t)=>{for(var n in t||(t={}))qe.call(t,n)&&$e(e,n,t[n]);if(Ce)for(var n of Ce(t))Ye.call(t,n)&&$e(e,n,t[n]);return e},we=(e,t)=>Fe(e,Ke(t));import{d as M,r as y,a as $,o as v,c as f,b as m,p as H,e as O,f as l,w as A,g as z,h as ne,i as le,j as T,k as Ge,l as Je,n as ke,m as Xe,q as Te,s as Be,t as xe,u as U,v as i,x as q,y as G,z as Ie,A as ue,B as J,F as K,C as X,D,E as Qe,G as Ze,H as pe,I as Se,J as et,K as oe,L as Ee,M as Re,N as he,T as tt,O as nt,P as ot}from"./vendor.cc481d46.js";const st=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}};st();var E=(e,t)=>{const n=e.__vccOpts||e;for(const[s,o]of t)n[s]=o;return n};const rt=e=>(H("data-v-6ad282d4"),e=e(),O(),e),at=rt(()=>l("div",{class:"preferences-button__cover"},null,-1)),ct=M({setup(e){const t=y(!1);return(n,s)=>{const o=$("b-icon");return v(),f("div",{class:"preferences-button",onMouseenter:s[0]||(s[0]=r=>t.value=!0),onMouseleave:s[1]||(s[1]=r=>t.value=!1)},[at,m(o,{class:"preferences-button__icon",icon:"gear",gradient:!t.value},null,8,["gradient"])],32)}}});var lt=E(ct,[["__scopeId","data-v-6ad282d4"]]);const ut=e=>e[0].toUpperCase()+e.slice(1),Ve=e=>{requestAnimationFrame(()=>{requestAnimationFrame(e)})},Me=e=>{if(e&&typeof e=="function")Ve(e);else return new Promise(t=>{Ve(t)})},it=async e=>await new Promise(t=>{const n=new Image;n.onload=t,n.src=e}),_t=e=>(t,n)=>e in t?t[e]:n,dt="modulepreload",Pe={},vt="/vue3-currency-converter/",pt=function(t,n){return!n||n.length===0?t():Promise.all(n.map(s=>{if(s=`${vt}${s}`,s in Pe)return;Pe[s]=!0;const o=s.endsWith(".css"),r=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${r}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":dt,o||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),o)return new Promise((u,c)=>{a.addEventListener("load",u),a.addEventListener("error",c)})})).then(()=>t())};const ht={},ft=e=>(H("data-v-dc4cfd66"),e=e(),O(),e),mt={id:"home"},yt={class:"home__container"},bt={class:"home__container__content"},gt=z(" Simple currency converter powered by "),Ct=z(" Fawaz Ahmed's Currency Rates API "),$t={class:"home__nav"},wt=z(" Converter "),kt=z(" Rates Table "),Tt={class:"home__source"},Bt=ft(()=>l("div",null,"Source code:",-1)),xt={href:"https://github.com/brofrain/vue3-currency-converter/",target:"_blank"};function It(e,t){const n=$("b-content-cover"),s=$("b-link"),o=$("b-btn"),r=$("b-outline-icon-btn");return v(),f("div",mt,[l("div",yt,[m(n),l("div",bt,[l("div",null,[gt,l("div",null,[m(s,{href:"https://github.com/fawazahmed0/currency-api"},{default:A(()=>[Ct]),_:1})])]),l("div",$t,[m(o,{onClick:t[0]||(t[0]=a=>e.$router.push({name:"Converter"}))},{default:A(()=>[wt]),_:1}),m(o,{onClick:t[1]||(t[1]=a=>e.$router.push({name:"Table"}))},{default:A(()=>[kt]),_:1})]),l("div",Tt,[Bt,l("a",xt,[m(r,{type:"brands",icon:"github-alt"})])])])])])}var St=E(ht,[["render",It],["__scopeId","data-v-dc4cfd66"]]),Et=()=>{const e=y(),t=y("0"),n=y("0"),s=y("100%"),o=y("100%");return ne(()=>{var d;if(!((d=e.value)==null?void 0:d.parentElement))return;const{paddingTop:a,paddingRight:u,paddingBottom:c,paddingLeft:_}=getComputedStyle(e.value.parentElement),p=[a,u,c,_];t.value=p.map(b=>`-${b}`).join(" "),n.value=p.join(" "),s.value=`calc(100% + ${u} + ${_})`,o.value=`calc(100% + ${a} + ${c})`}),{containerEl:e,margin:t,padding:n,width:s,height:o}};const Rt=e=>typeof e=="number",fe=e=>e===Object(e),Vt="center";var Mt=e=>{const t=y(),n=y(!1),s=y(0),o=()=>{n.value||!t.value||(s.value=t.value.offsetWidth)},r=()=>{var h;!((h=t.value)==null?void 0:h.parentElement)||(n.value=t.value.parentElement.offsetWidth<s.value)},a=new ResizeObserver(o),u=new ResizeObserver(r);ne(()=>{var h;!((h=t.value)==null?void 0:h.parentElement)||(a.observe(t.value),u.observe(t.value.parentElement))}),le(()=>{a.disconnect(),u.disconnect()});const c=T(()=>{const h=[];if(!n.value)return h;for(const[L,B]of e.cols.entries())fe(B)&&B.isInferior&&h.push(L);return h}),_=h=>h.filter((L,B)=>!c.value.includes(B)),p=T(()=>_(e.cols)),d=T(()=>p.value.map(h=>fe(h)?h.name:h)),b=T(()=>p.value.map(h=>fe(h)&&h.textAlign?h.textAlign:Vt)),w=T(()=>e.rows.map(h=>_(h)));return{tableEl:t,activeColNames:d,activeColTextAligns:b,activeRows:w}},Pt=()=>{let e=[];const t=async()=>{for(const o of e)for(const r of o)r.style.minWidth="auto";await ke();for(const o of e){let r=0;for(const a of o)a.offsetWidth&&a.offsetWidth>r&&(r=a.offsetWidth);for(const a of o)a.style.minWidth=`${r}px`}},n=new ResizeObserver(t),s=(o,r)=>{!o||(e[r]||(e[r]=[]),e[r].push(o),n.observe(o))};return Ge(()=>{e=[],n.disconnect()}),Je(t),ne(t),le(()=>{n.disconnect()}),{pushCellEl:s}};const Le=Xe.create({method:"get",timeout:5e3,responseType:"json"}),He={fetchRates:async()=>{const e="usd";return(await Le("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json")).data[e]},fetchNames:async()=>(await Le("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.min.json")).data},Lt=async e=>{e.currencyRates=await He.fetchRates()},Ht=async e=>{e.currencyNames=await He.fetchNames()},ie=Te("converter",()=>{const e=Be({currencyRates:{},currencyNames:{}}),t=T(()=>!!Object.keys(e.currencyRates).length&&!!Object.keys(e.currencyNames).length),n=T(()=>Object.keys(e.currencyRates).filter(u=>u in e.currencyNames).sort()),s=()=>n.value[Math.floor(Math.random()*n.value.length)],o=(u,c)=>!e.currencyRates[u]||!e.currencyRates[c]?0:e.currencyRates[c]/e.currencyRates[u],r=(u,c,_)=>_*o(u,c),a=(u,c)=>Object.assign({},...n.value.map(_=>_!==u&&{[_]:r(u,_,c)}));return Lt(e),Ht(e),we(ce({},xe(e)),{isReady:t,currencies:n,getRandomCurrency:s,getCurrencyValueMultiplier:o,getCurrencyValue:r,getCurrencyValues:a})});var Ot=(e,{emit:t})=>{const n=ie(),s=y(!0),o=()=>{s.value=!0},r={},a=(g,V)=>{r[V]=g},u=y(0),c=y(""),_=T(()=>n.currencyNames),p=T(()=>{if(!c.value)return n.currencies;const g=c.value.toLowerCase(),V={},C={};return n.currencies.filter(S=>{const F=`${S}.${_.value[S].replace(/\s+/g,"").toLowerCase()}`,te=F.search(g);return te===-1?!1:(V[S]=te,C[S]=F,!0)}).sort((S,F)=>V[S]!==V[F]?V[S]>V[F]?1:-1:C[S]>C[F]?1:-1)}),d=y(null),b=g=>g===e.currency,w=g=>g===d.value,h=g=>{g!==d.value&&(d.value=g)},L=()=>{d.value&&(d.value=null)},B=g=>{const V=r[g];if(!V){u.value=0;return}u.value=V.offsetTop+V.offsetHeight/2},I=()=>{B(e.currency)},x=()=>{d.value&&B(d.value)},R=()=>{d.value=p.value[0],!c.value&&u.value&&(u.value=0)},j=T(()=>d.value?p.value.indexOf(d.value):-1),k=()=>d.value?j.value:p.value.indexOf(e.currency),W=()=>{const g=k();g>0?d.value=p.value[g-1]:d.value||R(),x()},Z=()=>{const g=k();g!==-1&&g+1<p.value.length?d.value=p.value[g+1]:d.value||R(),x()},de=()=>{!d.value||(t("update:currency",d.value),o())};let ee=!1;const Y=g=>{if(ee)return;ee=!0,setTimeout(()=>{ee=!1},100);const V=_t(g.key)({ArrowUp:W,ArrowDown:Z,Enter:de});V&&(V(),g.preventDefault())};return U(s,async g=>{g?(document.removeEventListener("keydown",Y),window.removeEventListener("click",o)):(c.value="",d.value=null,document.addEventListener("keydown",Y),await Me(),I(),window.addEventListener("click",o))}),U(c,g=>{if(g){if(u.value&&(u.value=0),!p.value.length){d.value=null;return}(!d.value||!p.value.includes(d.value))&&(d.value=p.value[0])}}),le(()=>{document.removeEventListener("keydown",Y),window.removeEventListener("click",o)}),{collapsed:s,collapse:o,pushDropdownItemEl:a,dropdownScroll:u,search:c,currencyNames:_,currencies:p,isActiveCurrency:b,isHighlightedCurrency:w,updateHighlightedCurrency:h,unsetHighlightedCurrency:L}};const me=e=>(H("data-v-71d7d232"),e=e(),O(),e),Nt={class:"currency-input"},At={class:"currency-input__container"},jt=me(()=>l("div",{class:"currency-input__collapser__cover--fixed"},null,-1)),Wt=me(()=>l("div",{class:"currency-input__collapser__cover--local"},null,-1)),Ut={class:"currency-input__collapser__value"},Dt={class:"currency-input__dropdown"},zt=["onMousemove","onClick"],Ft=me(()=>l("div",{class:"currency-input__dropdown__item__cover"},null,-1)),Kt={class:"currency-input__dropdown__item__name"},qt={class:"currency-input__dropdown__item__code"},Yt=M({props:{value:null,currency:null},emits:["update:value","update:currency"],setup(e,{emit:t}){const n=e,{collapsed:s,collapse:o,pushDropdownItemEl:r,dropdownScroll:a,search:u,currencyNames:c,currencies:_,isActiveCurrency:p,isHighlightedCurrency:d,updateHighlightedCurrency:b,unsetHighlightedCurrency:w}=Ot(n,{emit:t}),h=B=>{t("update:value",B)},L=B=>{t("update:currency",B),o()};return(B,I)=>{const x=$("b-input"),R=$("b-transition"),j=$("b-scroll");return v(),f("div",Nt,[l("div",At,[m(x,{class:"currency-input__input",type:"number","model-value":e.value,"onUpdate:modelValue":I[0]||(I[0]=k=>h(k))},null,8,["model-value"]),l("div",{class:"currency-input__collapser",onClick:I[1]||(I[1]=k=>s.value=!i(s))},[jt,Wt,l("div",Ut,q(e.currency),1)])]),m(R,null,{default:A(()=>[i(s)?J("",!0):(v(),G(x,{key:0,modelValue:i(u),"onUpdate:modelValue":I[2]||(I[2]=k=>Ie(u)?u.value=k:null),class:"currency-input__search",type:"search",focus:"",onClick:I[3]||(I[3]=ue(()=>{},["stop"]))},null,8,["modelValue"]))]),_:1}),m(R,null,{default:A(()=>[i(s)?J("",!0):(v(),f("div",{key:0,class:"currency-input__dropdown__wrapper",onClick:I[6]||(I[6]=ue(()=>{},["stop"]))},[l("div",Dt,[m(j,{modelValue:i(a),"onUpdate:modelValue":I[5]||(I[5]=k=>Ie(a)?a.value=k:null)},{default:A(()=>[l("div",{class:"currency-input__dropdown__container",onMouseleave:I[4]||(I[4]=(...k)=>i(w)&&i(w)(...k))},[(v(!0),f(K,null,X(i(_),k=>(v(),f("div",{key:k,ref_for:!0,ref:W=>i(r)(W,k),class:D(["currency-input__dropdown__item",{"currency-input__dropdown__item--active":i(p)(k),"currency-input__dropdown__item--highlight":i(d)(k)}]),onMousemove:W=>i(b)(k),onClick:W=>L(k)},[Ft,l("div",Kt,q(i(c)[k]),1),l("div",qt,q(k),1)],42,zt))),128))],32)]),_:1},8,["modelValue"])])]))]),_:1})])}}});var ye=E(Yt,[["__scopeId","data-v-71d7d232"]]);const Oe=e=>(H("data-v-317547d6"),e=e(),O(),e),Gt={id:"converter"},Jt={class:"converter__container"},Xt={class:"converter__container__content"},Qt=Oe(()=>l("div",{class:"converter__container__text"},"Base currency:",-1)),Zt=Oe(()=>l("div",{class:"converter__container__text"},"Target currency:",-1)),en=M({setup(e){const t=ie(),n=be(),s=T(()=>n.keepChosenCurrencies),o=y(s.value&&n.converterBaseCurrency||t.getRandomCurrency()),r=y(s.value&&n.converterTargetCurrency||t.getRandomCurrency()),a=()=>{[o.value,r.value]=[r.value,o.value]},u=y(1),c=y(0),_=(x,R,j)=>t.getCurrencyValue(x,R,j),p=x=>Math.round(x*100)/100,d=()=>{u.value=p(_(r.value,o.value,c.value))},b=()=>{c.value=p(_(o.value,r.value,u.value))},w=x=>{u.value=x,b()},h=x=>{c.value=x,d()};U([o,r],b);const L=()=>{s.value&&n.updateConverterBaseCurrency(o.value)},B=()=>{s.value&&n.updateConverterTargetCurrency(r.value)},I=()=>{s.value&&(L(),B())};return U(o,L),U(r,B),U(s,I),b(),I(),(x,R)=>{const j=$("b-content-cover"),k=$("b-outline-icon-btn");return v(),f("div",Gt,[l("div",Jt,[m(j),l("div",Xt,[l("div",null,[Qt,m(i(ye),{currency:o.value,"onUpdate:currency":R[0]||(R[0]=W=>o.value=W),value:u.value,"onUpdate:value":w},null,8,["currency","value"])]),m(k,{icon:"arrow-right-arrow-left",onClick:a}),l("div",null,[Zt,m(i(ye),{currency:r.value,"onUpdate:currency":R[1]||(R[1]=W=>r.value=W),value:c.value,"onUpdate:value":h},null,8,["currency","value"])])])])])}}});var tn=E(en,[["__scopeId","data-v-317547d6"]]);const nn=e=>(H("data-v-120482f3"),e=e(),O(),e),on={id:"table"},sn={class:"table__base-currency-container"},rn={class:"table__base-currency-container__content"},an=nn(()=>l("div",null,"Base currency:",-1)),cn=M({setup(e){const t=ie(),n=be(),s=T(()=>n.keepChosenCurrencies),o=T(()=>t.currencyNames),r=y(s.value&&n.tableBaseCurrency||t.getRandomCurrency()),a=y(1),u=T(()=>t.getCurrencyValues(r.value,a.value)),c=b=>{const[w,h]=b.toFixed(4).split(".");return[w.replace(/\B(?=(\d{3})+(?!\d))/g," "),h].join(".")},_=T(()=>Object.entries(u.value).map(([b,w])=>[b.toUpperCase(),o.value[b],c(w)])),p=()=>{s.value&&n.updateTableBaseCurrency(r.value)},d=()=>{s.value&&p()};return U(r,p),U(s,d),d(),(b,w)=>{const h=$("b-content-cover"),L=$("b-table");return v(),f("div",on,[l("div",sn,[m(h),l("div",rn,[an,m(i(ye),{currency:r.value,"onUpdate:currency":w[0]||(w[0]=B=>r.value=B),value:a.value,"onUpdate:value":w[1]||(w[1]=B=>a.value=B)},null,8,["currency","value"])])]),m(L,{cols:[{name:"Currency",textAlign:"center"},{name:"Name",textAlign:"start",isInferior:!0},{name:"Value",textAlign:"end"}],rows:i(_)},null,8,["rows"])])}}});var ln=E(cn,[["__scopeId","data-v-120482f3"]]);const un=()=>pt(()=>import("./TheNotFound.5850520b.js"),["assets/TheNotFound.5850520b.js","assets/TheNotFound.52e30e14.css","assets/vendor.cc481d46.js"]),_n=[{path:"/",name:"Home",component:St},{path:"/converter",name:"Converter",component:tn},{path:"/table",name:"Table",component:ln},{path:"/:pathMatch(.*)*",name:"NotFound",component:un,meta:{hidden:!0}}],Q=Qe({history:Ze("/vue3-currency-converter/"),routes:_n}),dn=Q.getRoutes.bind({});Q.getRoutes=()=>dn().filter(e=>!e.meta.hidden);const Ne=["dark","light"],P={colorTheme:"color-theme",startingPath:"starting-path",keepChosenCurrencies:"keep-chosen-currencies",converterBaseCurrency:"converter-base-currency",converterTargetCurrency:"converter-target-currency",tableBaseCurrency:"table-base-currency"},se=e=>pe.get(e),re=(e,t)=>pe.set(e,t,{expires:365}),ae=e=>pe.remove(e),Ae=()=>{ae(P.converterBaseCurrency),ae(P.converterBaseCurrency),ae(P.converterTargetCurrency),ae(P.tableBaseCurrency)},je=e=>Ne.includes(e),vn=()=>{var e,t;return((t=(e=window.matchMedia)==null?void 0:e.call(window,"(prefers-color-scheme: dark)"))==null?void 0:t.matches)?"dark":"light"},We=e=>{const t=document.querySelector("#app");!t||(t.classList.remove(...t.classList),t.classList.add(`theme--${e}`))},pn=async e=>{const t=se(P.colorTheme),n=se(P.startingPath),s=se(P.keepChosenCurrencies),o=se(P.converterBaseCurrency),r=se(P.converterTargetCurrency),a=se(P.tableBaseCurrency);if(t&&je(t)&&(e.colorTheme=t),s==="true"?(e.keepChosenCurrencies=!0,o&&(e.converterBaseCurrency=o),r&&(e.converterTargetCurrency=r),a&&(e.tableBaseCurrency=a)):Ae(),await Q.isReady(),n&&n!=="/"&&Q.currentRoute.value.path==="/"){const u=Q.getRoutes().find(c=>c.path===n);u?(Q.replace(u),e.startingPath=n):ae(P.startingPath)}},be=Te("preferences",()=>{const e=Be({COLOR_THEMES:Ne,colorTheme:vn(),startingPath:"/",keepChosenCurrencies:!1,converterBaseCurrency:null,converterTargetCurrency:null,tableBaseCurrency:null}),t={updateColorTheme(n){je(n)&&(e.colorTheme=n,re(P.colorTheme,n))},updateStartingPath(n){e.startingPath=n,re(P.startingPath,n)},updateKeepChosenCurrencies(n){e.keepChosenCurrencies=n,re(P.keepChosenCurrencies,String(n)),n||Ae()},updateConverterBaseCurrency(n){e.converterBaseCurrency=n,re(P.converterBaseCurrency,n)},updateConverterTargetCurrency(n){e.converterTargetCurrency=n,re(P.converterTargetCurrency,n)},updateTableBaseCurrency(n){e.tableBaseCurrency=n,re(P.tableBaseCurrency,n)}};return pn(e),We(e.colorTheme),U(()=>e.colorTheme,n=>{We(n)}),ce(ce({},xe(e)),t)});const hn=e=>(H("data-v-3c99c720"),e=e(),O(),e),fn={key:0,class:"preferences-modal__container"},mn={class:"preferences-modal"},yn={class:"preferences-modal__content"},bn={class:"preferences-modal__head"},gn=hn(()=>l("div",{class:"preferences-modal__head__text"},"Preferences",-1)),Cn={class:"preferences-modal__body"},$n=z(" Starting page: "),wn=z(" Color theme: "),kn=M({props:{show:{type:Boolean}},emits:["update:show"],setup(e,{emit:t}){const n=be(),s=Se().getRoutes(),o=()=>{t("update:show",!1)},r=T(()=>n.COLOR_THEMES),a=T(()=>n.colorTheme),u=b=>{n.updateColorTheme(b)},c=T(()=>n.keepChosenCurrencies),_=b=>n.updateKeepChosenCurrencies(b),p=T(()=>n.startingPath),d=b=>n.updateStartingPath(b);return(b,w)=>{const h=$("b-outline-icon-btn"),L=$("b-radio"),B=$("b-checkbox"),I=$("b-transition");return v(),G(I,null,{default:A(()=>[e.show?(v(),f("div",fn,[l("div",{class:"preferences-modal__overlay",onClick:o}),l("div",mn,[l("div",yn,[l("div",bn,[gn,m(h,{icon:"xmark",onClick:o})]),l("div",Cn,[l("div",null,[$n,(v(!0),f(K,null,X(i(s),(x,R)=>(v(),G(L,{key:R,"model-value":x.path===i(p),label:x.name,"onUpdate:modelValue":j=>d(x.path)},null,8,["model-value","label","onUpdate:modelValue"]))),128))]),l("div",null,[wn,(v(!0),f(K,null,X(i(r),(x,R)=>(v(),G(L,{key:R,"model-value":x===i(a),label:i(ut)(x),"onUpdate:modelValue":j=>u(x)},null,8,["model-value","label","onUpdate:modelValue"]))),128))]),m(B,{"model-value":i(c),label:"Keep chosen currencies","onUpdate:modelValue":_},null,8,["model-value"])])])])])):J("",!0)]),_:1})}}});var Tn=E(kn,[["__scopeId","data-v-3c99c720"]]);const _e=e=>(H("data-v-3cd4f275"),e=e(),O(),e),Bn={id:"navbar"},xn={class:"nav-container"},In=_e(()=>l("div",{class:"nav-brand"},"Vue 3 Currency Converter",-1)),Sn=_e(()=>l("div",{class:"nav-spacer"},null,-1)),En=_e(()=>l("div",{class:"nav-item-wrapper__cover"},null,-1)),Rn=["onClick"],Vn=_e(()=>l("div",{class:"nav-item__underline"},null,-1)),Mn=M({setup(e){const{currentRoute:t,getRoutes:n}=Se(),s=n(),o=y(!0);U(t,()=>{o.value||(o.value=!0)});const r=y(!1);return(a,u)=>{const c=$("b-icon");return v(),f("div",Bn,[l("div",xn,[In,Sn,l("div",{class:D(["nav-item-wrapper",{"nav-item-wrapper--collapsed":o.value}])},[En,(v(!0),f(K,null,X(i(s),(_,p)=>(v(),f("div",{key:p,class:D(["nav-item",{"nav-item--active":_.name===i(t).name}]),onClick:d=>a.$router.push(_)},[z(q(_.name)+" ",1),Vn],10,Rn))),128))],2),l("div",{class:"nav-toggler",onClick:u[0]||(u[0]=_=>o.value=!o.value)},[m(c,{class:"nav-toggler__icon",icon:"bars"})]),m(i(lt),{onClick:u[1]||(u[1]=_=>r.value=!0)}),m(i(Tn),{show:r.value,"onUpdate:show":u[2]||(u[2]=_=>r.value=_)},null,8,["show"])])])}}});var Pn=E(Mn,[["__scopeId","data-v-3cd4f275"]]);const Ln={id:"view"},Hn=M({setup(e){const t=ie(),n=T(()=>t.isReady);return(s,o)=>{const r=$("b-transition"),a=$("router-view");return v(),f("div",Ln,[i(n)?(v(),G(a,{key:0},{default:A(({Component:u})=>[m(r,null,{default:A(()=>[(v(),G(et(u)))]),_:2},1024)]),_:1})):J("",!0)])}}});var On=E(Hn,[["__scopeId","data-v-45178328"]]);const Nn={},An=e=>(H("data-v-f309a9bc"),e=e(),O(),e),jn={id:"footer"},Wn=An(()=>l("div",{class:"footer__cover"},null,-1)),Un={class:"footer__content"},Dn=z(" MIT License "),zn=z(" \xA9 2022 Copyright: "),Fn=z(" Kajetan Welc ");function Kn(e,t){const n=$("b-link");return v(),f("div",jn,[Wn,l("div",Un,[l("div",null,[m(n,{href:"https://github.com/brofrain/vue3-currency-converter/blob/main/LICENSE"},{default:A(()=>[Dn]),_:1})]),l("div",null,[zn,m(n,{href:"https://github.com/brofrain/"},{default:A(()=>[Fn]),_:1})])])])}var qn=E(Nn,[["render",Kn],["__scopeId","data-v-f309a9bc"]]),Yn="/vue3-currency-converter/assets/cash-annie-spratt-unsplash-2400x1800.f2a6bf23.jpg",Gn="/vue3-currency-converter/assets/cash-annie-spratt-unsplash-1920x1440.1cc0b7f0.jpg";const Jn={id:"appContainer"},Xn=M({setup(e){const t=y(),n=window.innerWidth>2e3?Yn:Gn,s=()=>{t.value&&t.value.style.opacity!=="1"&&(t.value.style.opacity="1")},o=()=>{t.value&&(t.value.style.backgroundImage=`url(${n})`)};let r=!1;return(async()=>{await it(n),s(),r=!0})(),ne(()=>{o(),r&&s()}),(a,u)=>{const c=$("b-scroll");return v(),f("div",Jn,[l("div",{id:"appContainerImgCover",ref_key:"imgCoverEl",ref:t},null,512),m(c,null,{default:A(()=>[m(i(On)),m(i(qn))]),_:1})])}}});var Qn=E(Xn,[["__scopeId","data-v-5c126558"]]);const Zn=M({setup(e){return(t,n)=>(v(),f(K,null,[m(i(Pn)),m(i(Qn))],64))}});const eo={},to=e=>(H("data-v-6cfe1dfa"),e=e(),O(),e),no={class:"base__button"},oo=to(()=>l("div",{class:"base__button-cover"},null,-1)),so={class:"base__button-slot"};function ro(e,t){return v(),f("div",no,[oo,l("div",so,[oe(e.$slots,"default",{},void 0,!0)])])}var ao=E(eo,[["render",ro],["__scopeId","data-v-6cfe1dfa"]]);const co=e=>(H("data-v-e2b36f14"),e=e(),O(),e),lo={class:"base__checkbox"},uo=co(()=>l("div",{class:"base__checkbox__button__cover"},[l("div",{class:"base__checkbox__button__cover__fill"})],-1)),io=M({props:{modelValue:{type:Boolean},label:null},emits:["update:model-value"],setup(e,{emit:t}){const n=e,s=y(!1),o=()=>{t("update:model-value",!n.modelValue)};return(r,a)=>{const u=$("b-icon");return v(),f("div",lo,[l("div",{class:D(["base__checkbox__button",{"base__checkbox__button--active":e.modelValue,"base__checkbox__button--hover":s.value}]),onMouseenter:a[0]||(a[0]=c=>s.value=!0),onMouseleave:a[1]||(a[1]=c=>s.value=!1),onClick:o},[uo,m(u,{class:"base__checkbox__button__icon",icon:"xmark"})],34),e.label?(v(),f("div",{key:0,class:"base__checkbox__label",onMouseenter:a[2]||(a[2]=c=>s.value=!0),onMouseleave:a[3]||(a[3]=c=>s.value=!1),onClick:o},q(e.label),33)):J("",!0)])}}});var _o=E(io,[["__scopeId","data-v-e2b36f14"]]);const vo={},po={class:"base__content-cover"};function ho(e,t){return v(),f("div",po)}var fo=E(vo,[["render",ho],["__scopeId","data-v-b3a9e5d4"]]);const mo=M({props:{icon:null,type:{default:"solid"},gradient:{type:Boolean}},setup(e){const t=e,n=T(()=>[`fa-${t.type}`,`fa-${t.icon}`]);return(s,o)=>{const r=$("b-transition");return v(),f("div",{ref:"iconEl",class:D(["base__icon",i(n)])},[m(r,null,{default:A(()=>[Ee(l("div",{class:D(["base__icon__gradient-icon",i(n)])},null,2),[[Re,e.gradient]])]),_:1})],2)}}});var yo=E(mo,[["__scopeId","data-v-90a19f54"]]);const bo=e=>(H("data-v-b32538c4"),e=e(),O(),e),go=["type","value"],Co=bo(()=>l("div",{class:"base__input__cover"},null,-1)),$o=M({props:{modelValue:null,type:null,focus:{type:Boolean}},emits:["update:model-value"],setup(e,{emit:t}){const n=e,s=u=>{const c=u.target.value;t("update:model-value",n.type==="number"?Number(c):c)},o=y(),r=y(),a=()=>{!o.value||!r.value||(r.value.style.borderRadius=getComputedStyle(o.value).borderRadius.split(" ").map(u=>u!=="0px"?`calc(${u} * 0.7)`:u).join(" "))};return ne(()=>{var u;a(),n.focus&&((u=r.value)==null||u.focus())}),(u,c)=>{const _=$("b-icon");return v(),f("div",{ref_key:"wrapperEl",ref:o,class:"base__input__wrapper"},[l("input",{ref_key:"inputEl",ref:r,class:D(["base__input",`base__input--${e.type}`]),type:e.type==="number"?"number":"text",spellcheck:"false",value:e.modelValue,onInput:s},null,42,go),Co,e.type==="search"?(v(),f(K,{key:0},[m(_,{class:"base__input__search-icon--fixed",icon:"magnifying-glass"}),m(_,{class:"base__input__search-icon--local",icon:"magnifying-glass"})],64)):J("",!0)],512)}}});var wo=E($o,[["__scopeId","data-v-b32538c4"]]);const ko=e=>(H("data-v-eb261400"),e=e(),O(),e),To=["href"],Bo={class:"base__link__cover--fixed"},xo={class:"base__link__cover--local"},Io=ko(()=>l("div",{class:"base__link__underline"},null,-1)),So=M({props:{href:null},setup(e){return(t,n)=>(v(),f("a",{class:"base__link",href:e.href,target:"_blank"},[oe(t.$slots,"default",{},void 0,!0),l("div",Bo,[oe(t.$slots,"default",{},void 0,!0)]),l("div",xo,[oe(t.$slots,"default",{},void 0,!0)]),Io],8,To))}});var Eo=E(So,[["__scopeId","data-v-eb261400"]]);const Ue=e=>(H("data-v-3d50f6ee"),e=e(),O(),e),Ro=Ue(()=>l("div",{class:"base__outline-icon-button__primary-cover"},null,-1)),Vo=Ue(()=>l("div",{class:"base__outline-icon-button__gradient-cover"},null,-1)),Mo=M({props:{icon:null,type:null},setup(e){const t=y(!1);return(n,s)=>{const o=$("b-icon");return v(),f("div",{class:"base__outline-icon-button",onMouseenter:s[0]||(s[0]=r=>t.value=!0),onMouseleave:s[1]||(s[1]=r=>t.value=!1)},[Ro,Vo,m(o,{class:"base__outline-icon-button__icon",type:e.type,icon:e.icon,gradient:!t.value},null,8,["type","icon","gradient"])],32)}}});var Po=E(Mo,[["__scopeId","data-v-3d50f6ee"]]);const Lo=e=>(H("data-v-1f18e1d1"),e=e(),O(),e),Ho={class:"base__radio"},Oo=Lo(()=>l("div",{class:"base__radio__button__cover"},[l("div",{class:"base__radio__button__cover__fill"})],-1)),No=[Oo],Ao=M({props:{modelValue:{type:Boolean},label:null},emits:["update:model-value"],setup(e,{emit:t}){const n=e,s=y(!1),o=()=>{n.modelValue||t("update:model-value",!0)};return(r,a)=>(v(),f("div",Ho,[l("div",{class:D(["base__radio__button",{"base__radio__button--active":e.modelValue,"base__radio__button--hover":s.value}]),onMouseenter:a[0]||(a[0]=u=>s.value=!0),onMouseleave:a[1]||(a[1]=u=>s.value=!1),onClick:o},No,34),e.label?(v(),f("div",{key:0,class:"base__radio__label",onMouseenter:a[2]||(a[2]=u=>s.value=!0),onMouseleave:a[3]||(a[3]=u=>s.value=!1),onClick:o},q(e.label),33)):J("",!0)]))}});var jo=E(Ao,[["__scopeId","data-v-1f18e1d1"]]);const Wo=e=>(H("data-v-2a442f48"),e=e(),O(),e),Uo={class:"base__scroll"},Do=["onMousedown"],zo=["onMousedown"],Fo=Wo(()=>l("div",{class:"base__scroll__handle__cover"},null,-1)),Ko=[Fo],qo=M({props:{modelValue:null},emits:["update:model-value"],setup(e,{emit:t}){const n=e,{containerEl:s,margin:o,padding:r,width:a,height:u}=Et(),c=y(),_=y(100),p=y(0),d=y(document.querySelector("body")),b=y(!1),w=y(null),h=y(null),L=T(()=>`${_.value}%`),B=T(()=>c.value?Math.min(100-_.value,p.value/c.value.scrollHeight*100):0),I=T(()=>`${B.value}%`),x=T(()=>_.value!==100),R=()=>{var C;_.value=((C=c.value)==null?void 0:C.scrollHeight)?Math.min(100,c.value.offsetHeight/c.value.scrollHeight*100):100},j=()=>{var N;const C=((N=c.value)==null?void 0:N.scrollTop)||0;p.value=C,t("update:model-value",C)},k=C=>{if(!c.value||w.value===null||h.value===null)return;const S=(w.value-C.clientY)/c.value.offsetHeight;c.value.scroll({top:h.value-S*c.value.scrollHeight})},W=C=>{var N;!c.value||(b.value=!0,w.value=C.clientY,h.value=c.value.scrollTop,window.addEventListener("mousemove",k),window.addEventListener("mouseup",Z),(N=d.value)==null||N.addEventListener("mouseleave",Z))},Z=()=>{var C;b.value=!1,w.value=null,h.value=null,window.removeEventListener("mousemove",k),window.removeEventListener("mouseup",Z),(C=d.value)==null||C.removeEventListener("mouseleave",Z)},de=C=>{if(!c.value)return;const N=C.offsetY,S=()=>c.value?N<(_.value/2+B.value)/100*c.value.offsetHeight:!1,F=S();let te=null;const ve=()=>{te&&clearInterval(te),window.removeEventListener("mouseup",ve)};window.addEventListener("mouseup",ve),te=setInterval(()=>{if(!c.value)return;if(F!==S()){ve();return}const De=(F?-10:10)+c.value.scrollTop;c.value.scroll({top:De})},1)},ee=(C,N)=>{if(!c.value)return;const S=Math.max(0,C-c.value.offsetHeight/2);c.value.scroll({top:S,behavior:N})};U(()=>n.modelValue,C=>{C!==p.value&&Rt(C)&&ee(C,"smooth")});const Y=new ResizeObserver(R),g=()=>{var N;if(Y.disconnect(),!((N=c.value)==null?void 0:N.children))return;const C=c.value.children;for(let S=0;S<C.length;S++)Y.observe(C[S])},V=new MutationObserver(g);return ne(async()=>{await ke(),R(),g(),c.value&&V.observe(c.value,{childList:!0}),await Me(),n.modelValue&&ee(n.modelValue,"auto")}),le(()=>{Y.disconnect(),V.disconnect()}),(C,N)=>{const S=$("b-transition");return v(),f("div",{ref_key:"containerEl",ref:s,class:"base__scroll__container",style:he({margin:i(o),height:i(u),width:i(a)})},[l("div",{ref_key:"slotWrapperEl",ref:c,class:"base__scroll__slot-wrapper",style:he({padding:i(r)}),onScroll:j},[oe(C.$slots,"default",{},void 0,!0)],36),m(S,null,{default:A(()=>[Ee(l("div",Uo,[l("div",{class:"base__scroll__track",onMousedown:ue(de,["stop"])},[l("div",{class:D(["base__scroll__handle",{"base__scroll__handle--down":b.value}]),style:he({height:i(L),top:i(I)}),onMousedown:ue(W,["stop"])},Ko,46,zo)],40,Do)],512),[[Re,i(x)]])]),_:1})],4)}}});var Yo=E(qo,[["__scopeId","data-v-2a442f48"]]);const Go=e=>(H("data-v-b9cfc576"),e=e(),O(),e),Jo={class:"base__table__head"},Xo={class:"base__table__body"},Qo=Go(()=>l("div",{class:"base__table__body__row__cover"},null,-1)),Zo=M({props:{cols:null,rows:null},setup(e){const t=e,{tableEl:n,activeColNames:s,activeColTextAligns:o,activeRows:r}=Mt(t),{pushCellEl:a}=Pt();return(u,c)=>(v(),f("div",{ref_key:"tableEl",ref:n,class:"base__table"},[l("div",Jo,[(v(!0),f(K,null,X(i(s),(_,p)=>(v(),f("div",{key:p,ref_for:!0,ref:d=>i(a)(d,p),class:D(`base__table__head__item--${i(o)[p]}`)},q(_),3))),128))]),l("div",Xo,[(v(!0),f(K,null,X(i(r),(_,p)=>(v(),f("div",{key:p,class:"base__table__body__row"},[Qo,(v(!0),f(K,null,X(_,(d,b)=>(v(),f("div",{key:b,ref_for:!0,ref:w=>i(a)(w,b),class:D(`base__table__body__row__item--${i(o)[b]}`)},q(d),3))),128))]))),128))])],512))}});var es=E(Zo,[["__scopeId","data-v-b9cfc576"]]);const ts={};function ns(e,t){return v(),G(tt,{class:"base__transition","enter-active-class":"base__transition--enter","leave-active-class":"base__transition--leave",mode:"out-in",appear:""},{default:A(()=>[oe(e.$slots,"default",{},void 0,!0)]),_:3})}var os=E(ts,[["render",ns],["__scopeId","data-v-a972f282"]]),ss=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",BBtn:ao,BCheckbox:_o,BContentCover:fo,BIcon:yo,BInput:wo,BLink:Eo,BOutlineIconBtn:Po,BRadio:jo,BScroll:Yo,BTable:es,BTransition:os});const ge=nt(Zn);ge.use(Q).use(ot());for(const[e,t]of Object.entries(ss))ge.component(e,t);ge.mount("#app");export{E as _};
