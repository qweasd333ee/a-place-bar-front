import{Q as u}from"./QMarkupTable.918dc6b8.js";import{Q as h}from"./QPage.82532eb1.js";import{a0 as p,aJ as m,ar as x,o as a,C as y,D as i,a as t,F as f,c as n,aA as d,aB as _,b as w,az as c}from"./index.185c82ca.js";import"./use-dark.797c398c.js";const k={id:"section01"},v={class:"container"},g={class:"row"},B=t("div",{class:"col-12 text-white text-center text-h3 text"},"\u8A02\u9910\u660E\u7D30 ",-1),D={class:"col-12"},b=t("thead",{class:"text-center"},[t("tr",null,[t("th",null,"ID"),t("th",null,"\u65E5\u671F"),t("th",null,"\u91D1\u984D"),t("th",null,"\u5546\u54C1")])],-1),Q={class:"text-center"},V={key:0},C=t("td",{class:"text-center text-h6",colspan:"4"},"\u6C92\u6709\u660E\u7D30",-1),N=[C],L={__name:"OrdersView",setup(P){const r=p([]);return(async()=>{try{const{data:l}=await m.get("/orders");r.push(...l.result.map(o=>(o.totalPrice=o.products.reduce((e,s)=>e+s.p_id.price*s.quantity,0),o)))}catch{x.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u8A02\u55AE\u5931\u6557"})}})(),(l,o)=>(a(),y(h,{id:"member-orders-view"},{default:i(()=>[t("section",k,[t("div",v,[t("div",g,[B,t("div",D,[f(u,null,{default:i(()=>[b,t("tbody",Q,[(a(!0),n(_,null,d(r,e=>(a(),n("tr",{key:e._id},[t("td",null,c(e._id),1),t("td",null,c(new Date(e.date).toLocaleDateString()),1),t("td",null,c(e.totalPrice),1),t("td",null,[(a(!0),n(_,null,d(e.products,s=>(a(),n("div",{key:s._id},c(s.p_id.name+" * "+s.quantity),1))),128))])]))),128)),r.length===0?(a(),n("tr",V,N)):w("",!0)])]),_:1})])])])])]),_:1}))}};export{L as default};
