import{Q as r}from"./QMarkupTable.e07a8ce7.js";import{Q as d}from"./QPage.3c968683.js";import{a0 as _,aJ as h,ar as u,o as s,C as m,D as i,a as t,F as p,c as l,aA as x,aB as f,b as w,az as a}from"./index.41360bc0.js";import"./use-dark.9645e4af.js";const g={id:"section01"},k={class:"container"},v={class:"row"},y=t("div",{class:"col-12 text-center text-white text-h3 text"},"\u56DE\u5831\u7BA1\u7406",-1),B={class:"col-12"},D=t("thead",{class:"text-center"},[t("tr",null,[t("th",null,"\u59D3\u540D"),t("th",null,"\u4FE1\u7BB1"),t("th",null,"\u65E5\u671F"),t("th",null,"\u5167\u5BB9")])],-1),Q={class:"text-center"},V={key:0},b=t("td",{class:"text-center text-h6",colspan:"4"},"\u6C92\u6709\u56DE\u5831",-1),C=[b],z={__name:"contactsView",setup(N){const o=_([]);return(async()=>{var n,c;try{const{data:e}=await h.get("/contacts/all");o.push(...e.result)}catch(e){u.fire({icon:"error",title:"\u5931\u6557",text:((c=(n=e==null?void 0:e.response)==null?void 0:n.data)==null?void 0:c.message)||"\u767C\u751F\u932F\u8AA4"})}})(),(n,c)=>(s(),m(d,{id:"admin-contacts-view"},{default:i(()=>[t("section",g,[t("div",k,[t("div",v,[y,t("div",B,[p(r,null,{default:i(()=>[D,t("tbody",Q,[(s(!0),l(f,null,x(o,e=>(s(),l("tr",{key:e._id},[t("td",null,a(e.name),1),t("td",null,a(e.email),1),t("td",null,a(new Date(e.time).toLocaleDateString()),1),t("td",null,a(e.description),1)]))),128)),o.length===0?(s(),l("tr",V,C)):w("",!0)])]),_:1})])])])])]),_:1}))}};export{z as default};