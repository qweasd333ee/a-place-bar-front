import{f as G,h as I,i as $,j as K,k as y,l as V,m as Y,q as J,s as S,t as W,u as X,v as Z,x as ee,y as te,z as oe,A as ae,o as r,B as d,C as o,D as le,E as e,c as H,Q as k,F as s,b as f,a,G as v,H as x,n as se,I as i,R as j}from"./index.4c904dae.js";import{Q as ne,a as re,b as B,c as L}from"./QToolbar.4e90974c.js";import{Q as ie}from"./QBadge.d7d9aaa7.js";import{Q as ue,a as P,b as ce,c as de,d as fe,e as me,_ as _e}from"./logo6.311e1697.js";import{Q as ve}from"./QMenu.0b6da042.js";import{Q as T}from"./QImg.5958a077.js";import{Q as he}from"./QResizeObserver.89c65a0e.js";import{C as D}from"./ClosePopup.b4db97d3.js";import{_ as pe}from"./logo7.1d82d0fa.js";import"./use-dark.443492ee.js";import"./TouchPan.3d0560a8.js";import"./touch.70a9dd44.js";import"./selection.2840cf96.js";import"./format.865294d5.js";import"./use-prevent-scroll.9de748b5.js";import"./use-timeout.557e88b9.js";import"./focusout.22538cca.js";import"./focus-manager.d6507951.js";import"./use-tick.2e3cfe71.js";var ge=G({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(n,{slots:z,emit:h}){const{proxy:{$q:Q}}=X(),l=W(Z,I);if(l===I)return console.error("QFooter needs to be child of QLayout"),I;const p=$(parseInt(n.heightHint,10)),m=$(!0),b=$(K.value===!0||l.isContainer.value===!0?0:window.innerHeight),g=y(()=>n.reveal===!0||l.view.value.indexOf("F")>-1||Q.platform.is.ios&&l.isContainer.value===!0),C=y(()=>l.isContainer.value===!0?l.containerHeight.value:b.value),u=y(()=>{if(n.modelValue!==!0)return 0;if(g.value===!0)return m.value===!0?p.value:0;const t=l.scroll.value.position+C.value+p.value-l.height.value;return t>0?t:0}),w=y(()=>n.modelValue!==!0||g.value===!0&&m.value!==!0),R=y(()=>n.modelValue===!0&&w.value===!0&&n.reveal===!0),F=y(()=>"q-footer q-layout__section--marginal "+(g.value===!0?"fixed":"absolute")+"-bottom"+(n.bordered===!0?" q-footer--bordered":"")+(w.value===!0?" q-footer--hidden":"")+(n.modelValue!==!0?" q-layout--prevent-focus"+(g.value!==!0?" hidden":""):"")),E=y(()=>{const t=l.rows.value.bottom,c={};return t[0]==="l"&&l.left.space===!0&&(c[Q.lang.rtl===!0?"right":"left"]=`${l.left.size}px`),t[2]==="r"&&l.right.space===!0&&(c[Q.lang.rtl===!0?"left":"right"]=`${l.right.size}px`),c});function _(t,c){l.update("footer",t,c)}function q(t,c){t.value!==c&&(t.value=c)}function U({height:t}){q(p,t),_("size",t)}function A(){if(n.reveal!==!0)return;const{direction:t,position:c,inflectionPoint:O}=l.scroll.value;q(m,t==="up"||c-O<100||l.height.value-C.value-c-p.value<300)}function M(t){R.value===!0&&q(m,!0),h("focusin",t)}V(()=>n.modelValue,t=>{_("space",t),q(m,!0),l.animate()}),V(u,t=>{_("offset",t)}),V(()=>n.reveal,t=>{t===!1&&q(m,n.modelValue)}),V(m,t=>{l.animate(),h("reveal",t)}),V([p,l.scroll,l.height],A),V(()=>Q.screen.height,t=>{l.isContainer.value!==!0&&q(b,t)});const N={};return l.instances.footer=N,n.modelValue===!0&&_("size",p.value),_("space",n.modelValue),_("offset",u.value),Y(()=>{l.instances.footer===N&&(l.instances.footer=void 0,_("size",0),_("offset",0),_("space",!1))}),()=>{const t=J(z.default,[S(he,{debounce:0,onResize:U})]);return n.elevated===!0&&t.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),S("footer",{class:F.value,style:E.value,onFocusin:M},t)}}}),be="/a-place-bar-front/assets/logo2.1b866d90.jpg";const we=a("div",{class:"toolbar-left-link col-md-1"},null,-1),ye={key:0,class:"toolbar-left-link col-11 col-md-4 text-center"},ke=a("a",{href:"/"},[a("img",{src:_e})],-1),Qe={key:1,class:"toolbar-right-link col-md-4 text-center"},Ce={class:"toolbar-right-link col-md-1 text-right"},qe={key:0,class:"q-pa-md row justify-between footer"},Ve={class:"footerCol col-3 row"},xe={class:"col-12 footerLogo"},Be={class:"col-12 footerIcons"},Le={href:"https://www.instagram.com/a.place_bar/",target:"_blank"},$e={href:"https://www.facebook.com/a.place.2020/",target:"_blank"},ze={href:"/",target:"_blank"},Fe={class:"footerCol col-3 contact"},He=a("p",null,"\u806F\u7D61\u6211\u5011",-1),Re={class:"footerCol col-3 copyRight"},Ie=a("p",null,"Designed by kaixuan",-1),Se={key:1,class:"q-pa-md row footer smallFooter"},je={class:"col-12 footerLogo"},De={class:"col-12 footerIcons"},Ne={href:"https://www.instagram.com/a.place_bar/",target:"_blank"},Pe={href:"https://www.facebook.com/a.place.2020/",target:"_blank"},Te={href:"/",target:"_blank"},Ee={class:"col-12 row contact"},Ue={class:"col-6"},Ae={class:"col-6"},Me={class:"col-12 copyRight"},Oe=a("p",null,"Designed by kaixuan",-1),ft={__name:"FrontLayout",setup(n){const z=ee(),{isLogin:h,isAdmin:Q,CartProduct:l,CartSeat:p}=te(z),{logout:m}=z,b=$(!1),g=$(!1),C=()=>{const u=window.scrollY;g.value=u>0};return oe(()=>{window.addEventListener("scroll",C),C()}),ae(()=>{window.removeEventListener("scroll",C)}),(u,w)=>{const R=le("router-view");return r(),d(ue,{id:"front-layout",view:"hHh Lpr lff"},{default:o(()=>[e(ce,{id:"navbar",class:se({white:g.value,transparent:!g.value})},{default:o(()=>[e(ne,{class:"justify-between"},{default:o(()=>[we,u.$q.screen.gt.sm?(r(),H("div",ye,[e(k,{flat:"",to:"/about"},{default:o(()=>[s(" \u95DC\u65BC\u6211\u5011 ")]),_:1}),e(k,{flat:"",to:"/product"},{default:o(()=>[s(" \u9910\u9EDE\u4ECB\u7D39 ")]),_:1})])):f("",!0),e(re,{class:"col-md-2"},{default:o(()=>[ke]),_:1}),u.$q.screen.gt.sm?(r(),H("div",Qe,[e(k,{flat:"",to:"/seat"},{default:o(()=>[s(" \u7DDA\u4E0A\u8A02\u4F4D ")]),_:1}),e(k,{flat:"",to:"/contact"},{default:o(()=>[s(" \u806F\u7D61\u6211\u5011 ")]),_:1})])):f("",!0),a("div",Ce,[v(h)?(r(),d(k,{key:0,class:"logout",flat:"",icon:"person"},{default:o(()=>[e(ie,{color:"red",rounded:"",floating:"",label:v(l)+v(p)},null,8,["label"]),e(ve,null,{default:o(()=>[e(P,{style:{"min-width":"100px"}},{default:o(()=>[v(h)&&v(Q)?x((r(),d(B,{key:0,clickable:"",to:"/admin"},{default:o(()=>[e(L,null,{default:o(()=>[s(" \u5F8C\u53F0\u7BA1\u7406 ")]),_:1})]),_:1})),[[D]]):f("",!0),v(h)?x((r(),d(B,{key:1,clickable:"",to:"/member"},{default:o(()=>[e(L,null,{default:o(()=>[s(" \u6703\u54E1\u4E2D\u5FC3 ")]),_:1})]),_:1})),[[D]]):f("",!0),v(h)?x((r(),d(B,{key:2,clickable:"",onClick:v(m)},{default:o(()=>[e(L,null,{default:o(()=>[s(" \u767B\u51FA ")]),_:1})]),_:1},8,["onClick"])),[[D]]):f("",!0)]),_:1})]),_:1})]),_:1})):f("",!0),v(h)?f("",!0):(r(),d(k,{key:1,class:"login",flat:"",to:"/login",name:"\u767B\u5165",label:"\u767B\u5165"}))]),u.$q.screen.lt.md?(r(),d(k,{key:2,class:"menu",dense:"",flat:"",round:"",icon:"menu",onClick:w[0]||(w[0]=F=>b.value=!b.value)})):f("",!0)]),_:1})]),_:1},8,["class"]),u.$q.screen.lt.md?(r(),d(de,{key:0,side:"right",modelValue:b.value,"onUpdate:modelValue":w[1]||(w[1]=F=>b.value=F),"show-if-above":"",width:200,bordered:"",class:"bg-grey-3"},{default:o(()=>[e(fe,{class:"fit"},{default:o(()=>[e(P,null,{default:o(()=>[x((r(),d(B,{clickable:"",to:"/about"},{default:o(()=>[e(L,null,{default:o(()=>[s(" \u95DC\u65BC\u6211\u5011 ")]),_:1})]),_:1})),[[j]]),x((r(),d(B,{clickable:"",to:"/product"},{default:o(()=>[e(L,null,{default:o(()=>[s(" \u9910\u9EDE\u4ECB\u7D39 ")]),_:1})]),_:1})),[[j]]),x((r(),d(B,{clickable:"",to:"/seat"},{default:o(()=>[e(L,null,{default:o(()=>[s(" \u7DDA\u4E0A\u8A02\u4F4D ")]),_:1})]),_:1})),[[j]])]),_:1})]),_:1})]),_:1},8,["modelValue"])):f("",!0),e(me,null,{default:o(()=>[e(R)]),_:1}),e(ge,{class:"bg-black"},{default:o(()=>[u.$q.screen.gt.xs?(r(),H("div",qe,[a("div",Ve,[a("div",xe,[e(T,{src:pe})]),a("div",Be,[a("a",Le,[e(i,{name:"mdi-instagram"})]),a("a",$e,[e(i,{name:"mdi-facebook"})]),a("a",ze,[e(i,{name:"mdi-twitter"})])])]),a("div",Fe,[He,a("p",null,[e(i,{name:"mdi-phone"}),s(" 0965-603-279 ")]),a("p",null,[e(i,{name:"mdi-gmail"}),s(" a.place.greenisland@gmail.com ")])]),a("div",Re,[Ie,a("p",null,[s("Copyright "),e(i,{name:"mdi-copyright"}),s("2023 a-place-bar")])])])):f("",!0),u.$q.screen.lt.sm?(r(),H("div",Se,[a("div",je,[e(T,{src:be,style:{height:"50px",width:"50px"}})]),a("div",De,[a("a",Ne,[e(i,{name:"mdi-instagram"})]),a("a",Pe,[e(i,{name:"mdi-facebook"})]),a("a",Te,[e(i,{name:"mdi-twitter"})])]),a("div",Ee,[a("div",Ue,[e(i,{name:"mdi-phone"}),s("0965-603-279")]),a("div",Ae,[e(i,{name:"mdi-gmail"}),s("a.place.greenisland@gmail.com")])]),a("div",Me,[Oe,a("p",null,[s("Copyright "),e(i,{name:"mdi-copyright"}),s("2023 a-place-bar")])])])):f("",!0)]),_:1})]),_:1})}}};export{ft as default};
