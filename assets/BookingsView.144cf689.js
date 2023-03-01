import{Q as _}from"./QMarkupTable.227ced64.js";import{Q as h}from"./QPage.574aa5a0.js";import{a0 as m,aJ as p,ar as x,o as a,C as f,D as i,a as t,F as w,c,aA as d,aB as u,az as s}from"./index.cbb32ab0.js";import"./use-dark.87e9a3b0.js";const v={id:"section01"},y={class:"container"},B={class:"row"},D=t("div",{class:"col-12 text-center text-white text-h3 text"},"\u8A02\u4F4D\u7BA1\u7406",-1),Q={class:"col-12"},N=t("thead",{class:"text-center"},[t("tr",null,[t("th",null,"ID"),t("th",null,"\u59D3\u540D"),t("th",null,"\u65E5\u671F\u3001\u6642\u9593"),t("th",null,"\u96FB\u8A71"),t("th",null,"\u4FE1\u7BB1"),t("th",null,"\u8A02\u4F4D\u4EBA\u6578"),t("th",null,"\u5EA7\u4F4D\u7DE8\u865F")])],-1),S={class:"text-center"},P={__name:"BookingsView",setup(V){const o=m([]);return(async()=>{try{const{data:l}=await p.get("/bookings/all");o.push(...l.result.map(n=>(n.totalPerson=n.seats.reduce((e,r)=>e+r.quantity,0),n)))}catch(l){console.log(l),x.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u8A02\u55AE\u5931\u6557"})}})(),(l,n)=>(a(),f(h,{id:"admin-bookings-view"},{default:i(()=>[t("section",v,[t("div",y,[t("div",B,[D,t("div",Q,[w(_,null,{default:i(()=>[N,t("tbody",S,[(a(!0),c(u,null,d(o,e=>(a(),c("tr",{key:e._id},[t("td",null,s(e._id),1),t("td",null,s(e.seats[0].name),1),t("td",null,s(new Date(e.seats[0].date).toLocaleString()),1),t("td",null,s(e.seats[0].phone),1),t("td",null,s(e.seats[0].email),1),t("td",null,s(e.seats[0].s_id.seatNumber),1),t("td",null,[(a(!0),c(u,null,d(e.seats,r=>(a(),c("div",{key:r._id},s(r.s_id.name),1))),128))])]))),128))])]),_:1})])])])])]),_:1}))}};export{P as default};
