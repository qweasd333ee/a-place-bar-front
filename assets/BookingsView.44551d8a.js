import{Q as _}from"./QMarkupTable.e58e1655.js";import{Q as h}from"./QPage.cb7bf8bf.js";import{a0 as m,aJ as p,ar as x,o as a,C as f,D as d,a as t,F as w,c as l,aA as i,aB as u,b as y,az as s}from"./index.641e7fac.js";import"./use-dark.3d62a111.js";const v={id:"section01"},B={class:"container"},D={class:"row"},N=t("div",{class:"col-12 text-center text-white text-h3 text"},"\u8A02\u4F4D\u7BA1\u7406",-1),Q={class:"col-12"},V=t("thead",{class:"text-center"},[t("tr",null,[t("th",null,"ID"),t("th",null,"\u59D3\u540D"),t("th",null,"\u65E5\u671F\u3001\u6642\u9593"),t("th",null,"\u96FB\u8A71"),t("th",null,"\u4FE1\u7BB1"),t("th",null,"\u8A02\u4F4D\u4EBA\u6578"),t("th",null,"\u5EA7\u4F4D\u7DE8\u865F")])],-1),C={class:"text-center"},S={key:0},g=t("td",{class:"text-center text-h6",colspan:"7"},"\u6C92\u6709\u8A02\u4F4D",-1),k=[g],z={__name:"BookingsView",setup(A){const o=m([]);return(async()=>{try{const{data:n}=await p.get("/bookings/all");o.push(...n.result.map(r=>(r.totalPerson=r.seats.reduce((e,c)=>e+c.quantity,0),r)))}catch(n){console.log(n),x.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u8A02\u55AE\u5931\u6557"})}})(),(n,r)=>(a(),f(h,{id:"admin-bookings-view"},{default:d(()=>[t("section",v,[t("div",B,[t("div",D,[N,t("div",Q,[w(_,null,{default:d(()=>[V,t("tbody",C,[(a(!0),l(u,null,i(o,e=>(a(),l("tr",{key:e._id},[t("td",null,s(e._id),1),t("td",null,s(e.seats[0].name),1),t("td",null,s(new Date(e.seats[0].date).toLocaleString()),1),t("td",null,s(e.seats[0].phone),1),t("td",null,s(e.seats[0].email),1),t("td",null,s(e.seats[0].s_id.seatNumber),1),t("td",null,[(a(!0),l(u,null,i(e.seats,c=>(a(),l("div",{key:c._id},s(c.s_id.name),1))),128))])]))),128)),o.length===0?(a(),l("tr",S,k)):y("",!0)])]),_:1})])])])])]),_:1}))}};export{z as default};