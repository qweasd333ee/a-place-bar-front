import{Q as _}from"./QMarkupTable.eb878910.js";import{Q as h}from"./QPage.06412def.js";import{a0 as m,aJ as p,ar as x,o as a,C as f,D as d,a as t,F as w,c as l,aA as i,aB as u,b as y,az as s}from"./index.d08e27b9.js";import"./use-dark.8a6f7d0a.js";const v={id:"section01"},B={class:"container"},D={class:"row"},N=t("div",{class:"col-12 text-white text-center text-h3 text"},"\u8A02\u4F4D\u660E\u7D30",-1),Q={class:"col-12"},V=t("thead",{class:"text-center"},[t("tr",null,[t("th",null,"ID"),t("th",null,"\u65E5\u671F\u3001\u6642\u9593"),t("th",null,"\u59D3\u540D"),t("th",null,"\u96FB\u8A71"),t("th",null,"\u4FE1\u7BB1"),t("th",null,"\u8A02\u4F4D\u4EBA\u6578"),t("th",null,"\u5EA7\u4F4D\u7DE8\u865F")])],-1),C={class:"text-center"},S={key:0},k=t("td",{class:"text-center text-h6",colspan:"7"},"\u6C92\u6709\u660E\u7D30",-1),A=[k],z={__name:"BookingsView",setup(F){const c=m([]);return(async()=>{try{const{data:o}=await p.get("/bookings");c.push(...o.result.map(n=>(n.totalPerson=n.seats.reduce((e,r)=>e+r.quantity,0),n)))}catch{x.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u8A02\u55AE\u5931\u6557"})}})(),(o,n)=>(a(),f(h,{id:"member-bookings-view"},{default:d(()=>[t("section",v,[t("div",B,[t("div",D,[N,t("div",Q,[w(_,null,{default:d(()=>[V,t("tbody",C,[(a(!0),l(u,null,i(c,e=>(a(),l("tr",{key:e._id},[t("td",null,s(e._id),1),t("td",null,s(new Date(e.seats[0].date).toLocaleString()),1),t("td",null,s(e.seats[0].name),1),t("td",null,s(e.seats[0].phone),1),t("td",null,s(e.seats[0].email),1),t("td",null,s(e.seats[0].s_id.seatNumber),1),t("td",null,[(a(!0),l(u,null,i(e.seats,r=>(a(),l("div",{key:r._id},s(r.s_id.name),1))),128))])]))),128)),c.length===0?(a(),l("tr",S,A)):y("",!0)])]),_:1})])])])])]),_:1}))}};export{z as default};
