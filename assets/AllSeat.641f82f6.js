import{Q as _}from"./QMarkupTable.9305f92f.js";import{Q as h}from"./QPage.f7dc70bf.js";import{o as n,c,a as t,ay as l,E as i,Q as f,aA as u,$ as m,ap as p,aq as g,B as y,C as d,az as x,aB as B,aC as S}from"./index.89cdf58b.js";import"./use-dark.84e67e0f.js";const b={__name:"SeatTable",props:{_id:{type:String,default:""},name:{type:String,default:""},floor:{type:String,default:""},seatNumber:{type:Number,default:0},book:{type:Boolean,default:!1},using:{type:Boolean,default:!1},date:{type:String,default:"123"},category:{type:String,default:""}},setup(a){return(r,s)=>(n(),c(u,null,[t("td",null,l(a.name),1),t("td",null,l(a.floor),1),t("td",null,l(a.category),1),t("td",null,l(a.seatNumber),1),t("td",null,[i(f,{color:"warning",icon:"chair",to:"/seats/"+a._id},null,8,["to"])])],64))}},k=t("header",{id:"header"},[t("div",{class:"text-white text-center text-h3 background"},"\u7DDA\u4E0A\u8A02\u4F4D")],-1),w={id:"section01"},Q={class:"container"},v={class:"row"},N=t("thead",{class:"text-center"},[t("tr",null,[t("th",null,"\u5EA7\u4F4D\u7DE8\u865F"),t("th",null,"\u6A13\u5C64"),t("th",null,"\u5206\u985E"),t("th",null,"\u5EA7\u4F4D\u4E0A\u9650"),t("th",null,"\u8A02\u4F4D")])],-1),C={class:"text-center"},T={__name:"AllSeat",setup(a){const r=m([]);return(async()=>{var s,o;try{const{data:e}=await p.get("/seats");r.push(...e.result)}catch(e){g.fire({icon:"error",title:"\u5931\u6557",text:((o=(s=e==null?void 0:e.response)==null?void 0:s.data)==null?void 0:o.message)||"\u767C\u751F\u932F\u8AA4"})}})(),(s,o)=>(n(),y(h,{id:"all-seat"},{default:d(()=>[k,t("section",w,[t("div",Q,[t("div",v,[i(_,{class:"col-12"},{default:d(()=>[N,t("tbody",C,[(n(!0),c(u,null,x(r,e=>(n(),c("tr",{key:e._id},[i(b,B(S(e)),null,16)]))),128))])]),_:1})])])])]),_:1}))}};export{T as default};
