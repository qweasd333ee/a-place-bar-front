import{a0 as p,o,C as x,D as h,aL as _,at as i,a as t,F as u,c as r,aC as g,aD as f,b as w,aB as s,Q as k}from"./index.94b621dd.js";import{Q as y}from"./QMarkupTable.18613219.js";import{Q as v}from"./QPage.ccae7a9f.js";import"./use-dark.45a25f8d.js";const B={id:"section01"},C={class:"container"},Q={class:"row"},b=t("div",{class:"col-12 text-center text-white text-h3 text"},"\u6703\u54E1\u7BA1\u7406",-1),V={class:"col-12"},D=t("thead",{class:"text-center"},[t("tr",null,[t("th",null,"\u5E33\u865F"),t("th",null,"\u59D3\u540D"),t("th",null,"\u4FE1\u7BB1"),t("th",null,"\u96FB\u8A71"),t("th",null,"\u5730\u5740"),t("th",null,"\u6027\u5225"),t("th",null,"\u5E74\u9F61"),t("th",null,"\u522A\u9664")])],-1),N={class:"text-center"},F={key:0},L=t("td",{class:"text-center text-h6",colspan:"8"},"\u6C92\u6709\u6703\u54E1",-1),M=[L],T={__name:"MembersView",setup(S){const l=p([]),d=async()=>{var n,a;try{const{data:e}=await _.get("/users/all");l.splice(0,l.length),l.push(...e.result)}catch(e){i.fire({icon:"error",title:"\u5931\u6557",text:((a=(n=e==null?void 0:e.response)==null?void 0:n.data)==null?void 0:a.message)||"\u767C\u751F\u932F\u8AA4"})}};d();const m=async n=>{var a,e;try{await _.delete("/users/"+n),await i.fire({icon:"success",title:"\u6210\u529F",text:"\u522A\u9664\u6210\u529F"}),d()}catch(c){await i.fire({icon:"error",title:"\u5931\u6557",text:((e=(a=c==null?void 0:c.response)==null?void 0:a.data)==null?void 0:e.message)||"\u767C\u751F\u932F\u8AA4"})}};return(n,a)=>(o(),x(v,{id:"admin-members-view"},{default:h(()=>[t("section",B,[t("div",C,[t("div",Q,[b,t("div",V,[u(y,null,{default:h(()=>[D,t("tbody",N,[(o(!0),r(f,null,g(l,e=>(o(),r("tr",{key:e._id},[t("td",null,s(e.account),1),t("td",null,s(e.name),1),t("td",null,s(e.email),1),t("td",null,s(e.phone),1),t("td",null,s(e.address),1),t("td",null,s(e.gender),1),t("td",null,s(e.age),1),t("td",null,[u(k,{color:"red",icon:"mdi-trash-can",onClick:c=>m(e._id)},null,8,["onClick"])])]))),128)),l.length===0?(o(),r("tr",F,M)):w("",!0)])]),_:1})])])])])]),_:1}))}};export{T as default};
