import{Q as _}from"./QMarkupTable.1f90ada1.js";import{Q as h}from"./QPage.a5752a7a.js";import{$ as p,aJ as m,aq as x,o as s,B as y,C as r,a as t,E as f,c as i,az as d,aA as u,ay as l}from"./index.4c904dae.js";import"./use-dark.443492ee.js";const w={id:"section01"},v={class:"container"},k={class:"row"},g=t("div",{class:"col-12 text-center text-white text-h3 text"},"\u8A02\u9910\u7BA1\u7406",-1),B={class:"col-12"},D=t("thead",{class:"text-center"},[t("tr",null,[t("th",null,"ID"),t("th",null,"\u65E5\u671F"),t("th",null,"\u4F7F\u7528\u8005"),t("th",null,"\u91D1\u984D"),t("th",null,"\u5546\u54C1")])],-1),Q={class:"text-center"},A={__name:"OrdersView",setup(q){const o=p([]);return(async()=>{try{const{data:c}=await m.get("/orders/all");o.push(...c.result.map(n=>(n.totalPrice=n.products.reduce((e,a)=>e+a.p_id.price*a.quantity,0),n)))}catch{x.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u8A02\u55AE\u5931\u6557"})}})(),(c,n)=>(s(),y(h,{id:"admin-orders-view"},{default:r(()=>[t("section",w,[t("div",v,[t("div",k,[g,t("div",B,[f(_,null,{default:r(()=>[D,t("tbody",Q,[(s(!0),i(u,null,d(o,e=>(s(),i("tr",{key:e._id},[t("td",null,l(e._id),1),t("td",null,l(new Date(e.date).toLocaleDateString()),1),t("td",null,l(e.u_id.account),1),t("td",null,l(e.totalPrice),1),t("td",null,[(s(!0),i(u,null,d(e.products,a=>(s(),i("div",{key:a._id},l(a.p_id.name+" * "+a.quantity),1))),128))])]))),128))])]),_:1})])])])])]),_:1}))}};export{A as default};
