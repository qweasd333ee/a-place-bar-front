import{a0 as p,o,C as x,D as d,aJ as u,ar as i,a as t,F as h,c as _,aA as f,aB as g,az as a,Q as w}from"./index.cbb32ab0.js";import{Q as k}from"./QMarkupTable.227ced64.js";import{Q as v}from"./QPage.574aa5a0.js";import"./use-dark.87e9a3b0.js";const y={id:"section01"},B={class:"container"},Q={class:"row"},b=t("div",{class:"col-12 text-center text-white text-h3 text"},"\u6703\u54E1\u7BA1\u7406",-1),C={class:"col-12"},V=t("thead",{class:"text-center"},[t("tr",null,[t("th",null,"\u5E33\u865F"),t("th",null,"\u59D3\u540D"),t("th",null,"\u4FE1\u7BB1"),t("th",null,"\u96FB\u8A71"),t("th",null,"\u5730\u5740"),t("th",null,"\u6027\u5225"),t("th",null,"\u5E74\u9F61"),t("th",null,"\u522A\u9664")])],-1),A={class:"text-center"},U={__name:"MembersView",setup(D){const n=p([]),r=async()=>{var l,s;try{const{data:e}=await u.get("/users/all");n.splice(0,n.length),n.push(...e.result)}catch(e){i.fire({icon:"error",title:"\u5931\u6557",text:((s=(l=e==null?void 0:e.response)==null?void 0:l.data)==null?void 0:s.message)||"\u767C\u751F\u932F\u8AA4"})}};r();const m=async l=>{var s,e;try{await u.delete("/users/"+l),await i.fire({icon:"success",title:"\u6210\u529F",text:"\u522A\u9664\u6210\u529F"}),r()}catch(c){await i.fire({icon:"error",title:"\u5931\u6557",text:((e=(s=c==null?void 0:c.response)==null?void 0:s.data)==null?void 0:e.message)||"\u767C\u751F\u932F\u8AA4"})}};return(l,s)=>(o(),x(v,{id:"admin-members-view"},{default:d(()=>[t("section",y,[t("div",B,[t("div",Q,[b,t("div",C,[h(k,null,{default:d(()=>[V,t("tbody",A,[(o(!0),_(g,null,f(n,e=>(o(),_("tr",{key:e._id},[t("td",null,a(e.account),1),t("td",null,a(e.name),1),t("td",null,a(e.email),1),t("td",null,a(e.phone),1),t("td",null,a(e.address),1),t("td",null,a(e.gender),1),t("td",null,a(e.age),1),t("td",null,[h(w,{color:"red",icon:"mdi-trash-can",onClick:c=>m(e._id)},null,8,["onClick"])])]))),128))])]),_:1})])])])])]),_:1}))}};export{U as default};
