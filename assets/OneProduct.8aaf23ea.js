import{Q as x}from"./QImg.5958a077.js";import{Q as b,a as y}from"./QForm.e0bbd45a.js";import{x as q,i as u,$ as v,ap as Q,aD as V,o as m,B as w,C as a,aE as C,ao as B,c as k,b as S,a as s,E as o,ay as c,Q as E}from"./index.4c904dae.js";import{Q as N}from"./QCardSection.8b92e574.js";import{Q as P}from"./QCard.1c301be9.js";import{Q as U}from"./QPage.a5752a7a.js";import"./use-dark.443492ee.js";import"./uid.42677368.js";import"./focus-manager.d6507951.js";const $={key:0,id:"header"},D=s("div",{class:"text-white text-center text-h3 background"},"\u9910\u9EDE\u4ECB\u7D39",-1),I=[D],R={id:"section01"},j={class:"container"},F={class:"row"},M={class:"col-12 col-md-6 q-px-sm q-pr-lg"},O={class:"col-12 col-md-6 q-px-sm q-pl-lg"},z={class:"q-pb-xl"},A={class:"q-pb-xl text-h4"},G={class:"q-pb-xl text-body1"},te={__name:"OneProduct",setup(H){const p=C(),_=B(),f=q(),{editCartProduct:g}=f,n=u(!1),l=u(0),d={required(e){return!!e||"\u6B04\u4F4D\u5FC5\u586B"},number(e){return e>0||"\u6578\u91CF\u932F\u8AA4"}},t=v({_id:"",name:"",price:0,description:"",image:"",sell:!0,category:""}),h=()=>{g({_id:t._id,quantity:l.value})};return async function(){try{const{data:e}=await Q.get("/products/"+p.params.id);t._id=e.result._id,t.name=e.result.name,t.price=e.result.price,t.description=e.result.description,t.image=e.result.image,t.sell=e.result.sell,t.category=e.result.category,document.title="\u8CFC\u7269\u7DB2 | "+t.name}catch{V.exports.Swal.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u5546\u54C1\u5931\u6557"}),_.go(-1)}}(),(e,r)=>(m(),w(U,{id:"one-product"},{default:a(()=>[e.$q.screen.gt.sm?(m(),k("header",$,I)):S("",!0),s("section",R,[s("div",j,[s("div",F,[s("div",M,[o(x,{src:t.image,ratio:1,fit:"cover"},null,8,["src"])]),s("div",O,[o(P,{id:"card"},{default:a(()=>[o(N,{class:"column text-center"},{default:a(()=>[s("h3",z,c(t.name),1),s("h6",A,c(t.description),1),s("p",G,"$"+c(t.price),1),o(b,{class:"justify-end",modelValue:n.value,"onUpdate:modelValue":r[1]||(r[1]=i=>n.value=i),onSubmit:h},{default:a(()=>[o(y,{class:"q-pb-xl",filled:"",modelValue:l.value,"onUpdate:modelValue":r[0]||(r[0]=i=>l.value=i),modelModifiers:{number:!0},type:"number",label:"\u6578\u91CF",rules:[d.required,d.number]},null,8,["modelValue","rules"]),o(E,{label:"\u52A0\u5165\u8CFC\u7269\u8ECA",type:"submit",color:"warning"})]),_:1},8,["modelValue"])]),_:1})]),_:1})])])])])]),_:1}))}};export{te as default};
