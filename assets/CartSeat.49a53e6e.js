import{y as x,a0 as v,l as h,aJ as B,ar as S,o as r,C as q,D as m,ap as Q,a as t,F as l,c as d,aA as N,aB as V,b as D,az as o,H as k,Q as c,n as $,G as z}from"./index.cbb32ab0.js";import{Q as A}from"./QMarkupTable.227ced64.js";import{Q as F}from"./QPage.574aa5a0.js";import"./use-dark.87e9a3b0.js";const L={id:"section01"},P={class:"container"},T={class:"row"},E=t("div",{class:"col-12 text-white text-center text-h3 text"},"\u8A02\u4F4D\u78BA\u8A8D ",-1),G={class:"col-12 q-mb-xl"},H=t("thead",{class:"text-center"},[t("tr",null,[t("th",null,"\u5EA7\u4F4D\u7DE8\u865F"),t("th",null,"\u8A02\u4F4D\u65E5\u671F\u3001\u6642\u9593"),t("th",null,"\u59D3\u540D"),t("th",null,"\u96FB\u8A71"),t("th",null,"\u4FE1\u7BB1"),t("th",null,"\u8A02\u4F4D\u4EBA\u6578"),t("th",null,"\u64CD\u4F5C")])],-1),J={class:"text-center"},M={key:0},R=t("td",{class:"text-center text-h6",colspan:"7"},"\u6C92\u6709\u8A02\u4F4D",-1),U=[R],j={class:"col-12 text-center"},I={class:"q-mb-lg text-white"},Z={__name:"CartSeat",setup(K){const p=Q(),b=x(),{editCartSeat:g,booking:C}=b,n=v([]),i=async(e,s)=>{await g({_id:n[e].s_id._id,quantity:s}),n[e].quantity+=s,n[e].quantity<=0&&n.splice(e,1)};async function y(){await C(),p.push("/member/bookings")}const w=h(()=>n.reduce((e,s)=>e+s.quantity,0)),f=h(()=>n.length>0&&!n.some(e=>!e.s_id.book));return(async()=>{try{const{data:e}=await B.get("/users/CartSeat");n.push(...e.result)}catch{S.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u8CFC\u7269\u8ECA\u5931\u6557"})}})(),(e,s)=>(r(),q(F,{id:"member-card-seat"},{default:m(()=>[t("section",L,[t("div",P,[t("div",T,[E,t("div",G,[l(A,null,{default:m(()=>[H,t("tbody",J,[(r(!0),d(V,null,N(n,(a,u)=>(r(),d("tr",{key:a._id,class:$({"bg-red":!a.s_id.book})},[t("td",null,o(a.s_id.name),1),t("td",null,o(new Date(a.date).toLocaleString()),1),t("td",null,o(a.name),1),t("td",null,o(a.phone),1),t("td",null,o(a.email),1),t("td",null,[l(c,{color:"warning",label:"-",onClick:_=>i(u,-1)},null,8,["onClick"]),z(" \xA0"+o(a.quantity)+"\xA0 ",1),l(c,{color:"warning",label:"+",onClick:_=>i(u,1)},null,8,["onClick"])]),t("td",null,[l(c,{color:"red",onClick:_=>i(u,a.quantity*-1),label:"\u522A\u9664"},null,8,["onClick"])])],2))),128)),n.length===0?(r(),d("tr",M,U)):D("",!0)])]),_:1})]),t("div",j,[t("h5",I,"\u7E3D\u4EBA\u6578 "+o(k(w)),1),l(c,{class:"q-mb-lg",color:"warning",label:"\u8A02\u4F4D",disabled:!k(f),onClick:y},null,8,["disabled"])])])])])]),_:1}))}};export{Z as default};
