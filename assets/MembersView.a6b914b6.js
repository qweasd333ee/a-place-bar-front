import{$ as p,o,B as x,C as d,aJ as u,aq as i,a as t,E as h,c as _,az as f,aA as g,ay as a,Q as w}from"./index.89cdf58b.js";import{Q as y}from"./QMarkupTable.9305f92f.js";import{Q as k}from"./QPage.f7dc70bf.js";import"./use-dark.84e67e0f.js";const v={id:"section01"},B={class:"container"},Q={class:"row"},b=t("div",{class:"col-12 text-center text-white text-h3 text"},"\u6703\u54E1\u7BA1\u7406",-1),C={class:"col-12"},V=t("thead",{class:"text-center"},[t("tr",null,[t("th",null,"\u5E33\u865F"),t("th",null,"\u59D3\u540D"),t("th",null,"\u4FE1\u7BB1"),t("th",null,"\u96FB\u8A71"),t("th",null,"\u5730\u5740"),t("th",null,"\u6027\u5225"),t("th",null,"\u5E74\u9F61"),t("th",null,"\u522A\u9664")])],-1),A={class:"text-center"},$={__name:"MembersView",setup(E){const n=p([]),r=async()=>{var l,s;try{const{data:e}=await u.get("/users/all");n.splice(0,n.length),n.push(...e.result)}catch(e){i.fire({icon:"error",title:"\u5931\u6557",text:((s=(l=e==null?void 0:e.response)==null?void 0:l.data)==null?void 0:s.message)||"\u767C\u751F\u932F\u8AA4"})}};r();const m=async l=>{var s,e;try{await u.delete("/users/"+l),await i.fire({icon:"success",title:"\u6210\u529F",text:"\u522A\u9664\u6210\u529F"}),r()}catch(c){await i.fire({icon:"error",title:"\u5931\u6557",text:((e=(s=c==null?void 0:c.response)==null?void 0:s.data)==null?void 0:e.message)||"\u767C\u751F\u932F\u8AA4"})}};return(l,s)=>(o(),x(k,{id:"admin-members-view"},{default:d(()=>[t("section",v,[t("div",B,[t("div",Q,[b,t("div",C,[h(y,null,{default:d(()=>[V,t("tbody",A,[(o(!0),_(g,null,f(n,e=>(o(),_("tr",{key:e._id},[t("td",null,a(e.account),1),t("td",null,a(e.name),1),t("td",null,a(e.email),1),t("td",null,a(e.phone),1),t("td",null,a(e.address),1),t("td",null,a(e.gender),1),t("td",null,a(e.age),1),t("td",null,[h(w,{color:"red",icon:"mdi-trash-can",onClick:c=>m(e._id)},null,8,["onClick"])])]))),128))])]),_:1})])])])])]),_:1}))}};export{$ as default};