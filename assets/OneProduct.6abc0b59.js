import{Q as x}from"./QImg.ed28bbfd.js";import{Q as y,a as b}from"./QForm.d150eae2.js";import{y as q,j as d,a0 as v,aq as Q,aE as V,o as u,C as w,D as r,aF as C,ap as k,c as B,b as S,a as s,F as o,az as c,Q as F}from"./index.641e7fac.js";import{Q as N}from"./QCardSection.034b5834.js";import{Q as P}from"./QCard.c586ff69.js";import{Q as U}from"./QPage.cb7bf8bf.js";import"./use-dark.3d62a111.js";import"./uid.42677368.js";import"./focus-manager.d6507951.js";const j={key:0,id:"header"},D=s("div",{class:"text-white text-center text-h3 background"},"\u9910\u9EDE\u4ECB\u7D39",-1),E=[D],I={id:"section01"},R={class:"container"},$={class:"row"},z={class:"col-12 col-md-6 q-px-sm q-pr-lg"},M={class:"col-12 col-md-6 q-px-sm q-pl-lg"},O={class:"q-pb-xl"},A={class:"q-pb-xl text-h4"},G={class:"q-pb-xl text-body1"},te={__name:"OneProduct",setup(H){const m=C(),p=k(),_=q(),{editCartProduct:f}=_,n=d(!1),l=d(0),g={quantity:[e=>!!e||"\u6B04\u4F4D\u5FC5\u586B",e=>e>0||"\u6578\u91CF\u932F\u8AA4"]},t=v({_id:"",name:"",price:0,description:"",image:"",sell:!0,category:""}),h=()=>{f({_id:t._id,quantity:l.value})};return async function(){try{const{data:e}=await Q.get("/products/"+m.params.id);t._id=e.result._id,t.name=e.result.name,t.price=e.result.price,t.description=e.result.description,t.image=e.result.image,t.sell=e.result.sell,t.category=e.result.category,document.title="\u8CFC\u7269\u7DB2 | "+t.name}catch{V.exports.Swal.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u5546\u54C1\u5931\u6557"}),p.go(-1)}}(),(e,a)=>(u(),w(U,{id:"one-product"},{default:r(()=>[e.$q.screen.gt.sm?(u(),B("header",j,E)):S("",!0),s("section",I,[s("div",R,[s("div",$,[s("div",z,[o(x,{src:t.image,ratio:1,fit:"cover"},null,8,["src"])]),s("div",M,[o(P,{id:"card"},{default:r(()=>[o(N,{class:"column text-center"},{default:r(()=>[s("h3",O,c(t.name),1),s("h6",A,c(t.description),1),s("p",G,"$"+c(t.price),1),o(y,{class:"justify-end",modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=i=>n.value=i),onSubmit:h},{default:r(()=>[o(b,{class:"q-pb-xl",filled:"",modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=i=>l.value=i),modelModifiers:{number:!0},type:"number",label:"\u6578\u91CF",rules:g.quantity},null,8,["modelValue","rules"]),o(F,{label:"\u52A0\u5165\u8CFC\u7269\u8ECA",type:"submit",color:"warning"})]),_:1},8,["modelValue"])]),_:1})]),_:1})])])])])]),_:1}))}};export{te as default};
