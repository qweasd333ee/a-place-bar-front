import{a as n,Q as _}from"./QForm.2c1e5fd4.js";import{a0 as c,o as m,C as b,D as r,c as v,b as g,a as e,F as i,Q as h,aJ as f,ar as p}from"./index.b944b107.js";import{Q as q}from"./QPage.ec7781b0.js";import{v as V}from"./index.dcec9d7a.js";import"./use-dark.7ef67035.js";import"./uid.42677368.js";import"./focus-manager.d6507951.js";const y={key:0,id:"header"},w=e("div",{class:"text-white text-center text-h3 background"},"\u806F\u7D61\u6211\u5011",-1),Q=[w],k={id:"section01"},B={class:"container"},C=e("div",{class:"row justify-center"},[e("div",{class:"col-12 col-md-8 col-lg-6 text-center"},[e("div",{class:"text-h4 q-mb-lg"},"\u806F\u7D61\u8CC7\u8A0A"),e("p",{class:"text-h6 q-mb-xl"},"\u5982\u679C\u60A8\u6709\u4EFB\u4F55\u610F\u898B\u6216\u5EFA\u8B70\uFF0C\u6B61\u8FCE\u60A8\u96A8\u6642\u8207\u6211\u5011\u806F\u7E6B\uFF0C\u6211\u5011\u6703\u8A8D\u771F\u8046\u807D\u60A8\u7684\u60F3\u6CD5\uFF0C\u70BA\u60A8\u63D0\u4F9B\u66F4\u597D\u7684\u670D\u52D9\u3002\u8B1D\u8B1D\u60A8\u7684\u652F\u6301\uFF0C\u6211\u5011\u671F\u5F85\u8457\u60A8\u7684\u5149\u81E8\uFF01")])],-1),F={class:"row"},N=e("div",{class:"col-md-3 order-last q-px-lg info"},[e("div",{class:"q-mb-sm text-h6"},"\u806F\u7D61\u4FE1\u7BB1"),e("div",{class:"q-mb-xl text-body1"},"a.place.greenisland@gmail.com"),e("div",{class:"q-mb-sm text-h6"},"\u806F\u7D61\u96FB\u8A71"),e("div",{class:"q-mb-xl text-body1"},"0965-603-279"),e("div",{class:"q-mb-sm text-h6"},"\u806F\u7D61\u5730\u5740"),e("div",{class:"q-mb-xl text-body1"},"951\u53F0\u6771\u7E23\u7DA0\u5CF6\u910952\u4E4B1\u865F"),e("div",{class:"q-mb-sm text-h6"},"\u71DF\u696D\u6642\u9593"),e("div",{class:"q-mb-xl text-body1"},"\u9031\u4E00\u81F3\u9031\u65E5\uFF0C\u665A\u4E0A19:30\u81F301:00")],-1),U={class:"col-md-9 q-px-lg"},D={class:"q-mb-lg"},E={class:"q-mb-lg"},S={class:"q-mb-lg"},H={__name:"ContactView",setup(j){const d={name:[t=>!!t||"\u6B04\u4F4D\u5FC5\u586B"],email:[t=>!!t||"\u6B04\u4F4D\u5FC5\u586B",t=>V.exports.isEmail(t)||"\u4FE1\u7BB1\u683C\u5F0F\u932F\u8AA4"],description:[t=>!!t||"\u6B04\u4F4D\u5FC5\u586B"]},u=c([]),s=c({_id:"",name:"",email:"",description:"",loading:!1}),x=async()=>{var a,l;s.loading=!0;const t=new FormData;t.append("name",s.name),t.append("age",s.age),t.append("email",s.email),t.append("description",s.description);try{const{data:o}=await f.post("/contacts",t);u.push(o.result),p.fire({icon:"success",title:"\u6210\u529F",text:"\u5DF2\u6536\u5230\u60A8\u7684\u610F\u898B\uFF0C\u5C07\u65BC\u5DE5\u4F5C\u65E5\u7531\u5C08\u4EBA\u4EE5\u90F5\u4EF6\u56DE\u8986\u60A8"}),s.dialog=!1}catch(o){p.fire({icon:"error",title:"\u5931\u6557",text:((l=(a=o==null?void 0:o.response)==null?void 0:a.data)==null?void 0:l.message)||"\u767C\u751F\u932F\u8AA4"})}s.loading=!1};return(t,a)=>(m(),b(q,{id:"contact-view"},{default:r(()=>[t.$q.screen.gt.sm?(m(),v("header",y,Q)):g("",!0),e("section",k,[e("div",B,[C,e("div",F,[N,e("div",U,[i(_,{onSubmit:x,class:"q-gutter-md"},{default:r(()=>[e("div",D,[i(n,{modelValue:s.name,"onUpdate:modelValue":a[0]||(a[0]=l=>s.name=l),filled:"",type:"text",label:"\u59D3\u540D",rules:d.name},null,8,["modelValue","rules"])]),e("div",E,[i(n,{modelValue:s.email,"onUpdate:modelValue":a[1]||(a[1]=l=>s.email=l),filled:"",type:"text",label:"\u4FE1\u7BB1",rules:d.email},null,8,["modelValue","rules"])]),e("div",S,[i(n,{modelValue:s.description,"onUpdate:modelValue":a[2]||(a[2]=l=>s.description=l),filled:"",rows:"11",type:"textarea",label:"\u5167\u5BB9",rules:d.description},null,8,["modelValue","rules"])]),e("div",null,[i(h,{label:"\u9001\u51FA",type:"submit",color:"warning"})])]),_:1})])])])])]),_:1}))}};export{H as default};
