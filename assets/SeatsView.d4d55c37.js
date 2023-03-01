import{a0 as y,aJ as g,ar as m,o as p,C as w,D as r,a as o,F as s,Q as c,az as d,c as b,aA as N,aB as U,b as C}from"./index.641e7fac.js";import{Q as q,a as B}from"./QToolbar.69e8b851.js";import{Q as S,a as V}from"./QForm.d150eae2.js";import{Q as D,a as Q,b as k}from"./QToggle.8f4fdf66.js";import{Q as T}from"./QCardSection.034b5834.js";import{Q as F}from"./QCardActions.ef937fca.js";import{Q as h}from"./QCard.c586ff69.js";import{Q as A}from"./QDialog.f2dd503d.js";import{Q as $}from"./QMarkupTable.e58e1655.js";import{Q as z}from"./QPage.cb7bf8bf.js";import"./use-dark.3d62a111.js";import"./uid.42677368.js";import"./focus-manager.d6507951.js";import"./QItemLabel.38003696.js";import"./QMenu.67891299.js";import"./selection.dbff63c1.js";import"./use-prevent-scroll.317a1ac8.js";import"./focusout.6f4ebae9.js";import"./use-tick.317b1470.js";import"./use-timeout.b88c610a.js";import"./rtl.b51694b1.js";import"./format.865294d5.js";const E={id:"section01"},I={class:"container"},J={class:"row"},L=o("div",{class:"col-12 text-center text-white text-h3 text"},"\u5EA7\u4F4D\u7BA1\u7406",-1),M={class:"col-12 text-right"},P={class:"text-center"},j={class:"col-12"},G=o("thead",{class:"text-center"},[o("tr",null,[o("th",null,"\u7DE8\u865F"),o("th",null,"\u6A13\u5C64"),o("th",null,"\u4F4D\u6578"),o("th",null,"\u5206\u985E"),o("th",null,"\u662F\u5426\u958B\u653E"),o("th",null,"\u662F\u5426\u4F7F\u7528\u4E2D"),o("th",null,"\u7DE8\u8F2F")])],-1),H={class:"text-center"},K={key:0},O=o("td",{class:"text-center text-h6",colspan:"7"},"\u6C92\u6709\u5EA7\u4F4D",-1),R=[O],ye={__name:"SeatsView",setup(W){const v=["\u5427\u6AAF","\u5C0F\u684C","\u4E2D\u684C","\u5927\u684C"],f={required(a){return!!a||"\u6B04\u4F4D\u5FC5\u586B"}},n=y([]),e=y({_id:"",name:"",floor:"",seatNumber:0,book:!1,using:!1,category:"",valid:!1,dialog:!1,idx:-1}),_=a=>{a===-1?(e._id="",e.name="",e.floor="",e.seatNumber=0,e.book=!1,e.using=!1,e.category="",e.valid=!1,e.idx=-1):(e._id=n[a]._id,e.name=n[a].name,e.floor=n[a].floor,e.seatNumber=n[a].seatNumber,e.book=n[a].book,e.using=n[a].using,e.category=n[a].category,e.valid=!1,e.idx=a),e.dialog=!0},x=async()=>{var t,l;const a=new FormData;a.append("name",e.name),a.append("floor",e.floor),a.append("seatNumber",e.seatNumber),a.append("book",e.book),a.append("using",e.using),a.append("category",e.category);try{if(e._id.length===0){const{data:i}=await g.post("/seats",a);n.push(i.result),m.fire({icon:"success",title:"\u6210\u529F",text:"\u65B0\u589E\u6210\u529F"})}else{const{data:i}=await g.patch("/seats/"+e._id,a);n[e.idx]=i.result,m.fire({icon:"success",title:"\u6210\u529F",text:"\u7DE8\u8F2F\u6210\u529F"})}e.dialog=!1}catch(i){m.fire({icon:"error",title:"\u5931\u6557",text:((l=(t=i==null?void 0:i.response)==null?void 0:t.data)==null?void 0:l.message)||"\u767C\u751F\u932F\u8AA4"})}};return(async()=>{var a,t;try{const{data:l}=await g.get("/seats/all");n.push(...l.result)}catch(l){m.fire({icon:"error",title:"\u5931\u6557",text:((t=(a=l==null?void 0:l.response)==null?void 0:a.data)==null?void 0:t.message)||"\u767C\u751F\u932F\u8AA4"})}})(),(a,t)=>(p(),w(z,{id:"admin-seats-view"},{default:r(()=>[o("section",E,[o("div",I,[o("div",J,[L,o("div",M,[s(c,{color:"warning",label:"\u65B0\u589E\u5EA7\u4F4D",onClick:t[0]||(t[0]=l=>_(-1)),class:"q-mb-md"}),s(A,{modelValue:e.dialog,"onUpdate:modelValue":t[9]||(t[9]=l=>e.dialog=l),persistent:""},{default:r(()=>[s(h,{style:{width:"700px","max-width":"80vw"}},{default:r(()=>[s(q,{class:"bg-primary text-white"},{default:r(()=>[s(B,null,{default:r(()=>[o("div",P,d(e._id.length>0?"\u7DE8\u8F2F\u5EA7\u4F4D":"\u65B0\u589E\u5EA7\u4F4D"),1)]),_:1})]),_:1}),s(S,{modelValue:e.valid,"onUpdate:modelValue":t[8]||(t[8]=l=>e.valid=l),onSubmit:x},{default:r(()=>[s(h,{class:"q-pa-md"},{default:r(()=>[s(T,{class:"q-pt-none"},{default:r(()=>[s(V,{filled:"",modelValue:e.name,"onUpdate:modelValue":t[1]||(t[1]=l=>e.name=l),autofocus:"",label:"\u7DE8\u865F",rules:[f.required]},null,8,["modelValue","rules"]),s(V,{filled:"",modelValue:e.floor,"onUpdate:modelValue":t[2]||(t[2]=l=>e.floor=l),autofocus:"",label:"\u6A13\u5C64",rules:[f.required]},null,8,["modelValue","rules"]),s(D,{style:{"margin-bottom":"1.2rem"},filled:"",modelValue:e.category,"onUpdate:modelValue":t[3]||(t[3]=l=>e.category=l),options:v,label:"\u5206\u985E"},null,8,["modelValue"]),s(V,{filled:"",modelValue:e.seatNumber,"onUpdate:modelValue":t[4]||(t[4]=l=>e.seatNumber=l),autofocus:"",label:"\u4F4D\u6578",rules:[f.required]},null,8,["modelValue","rules"]),s(Q,{style:{"margin-bottom":"1.2rem"},modelValue:e.book,"onUpdate:modelValue":t[5]||(t[5]=l=>e.book=l),label:"\u662F\u5426\u958B\u653E"},null,8,["modelValue"]),s(Q,{style:{"margin-bottom":"1.2rem"},modelValue:e.using,"onUpdate:modelValue":t[6]||(t[6]=l=>e.using=l),label:"\u662F\u5426\u4F7F\u7528\u4E2D"},null,8,["modelValue"])]),_:1}),s(F,{align:"center"},{default:r(()=>[s(c,{type:"submit",label:"\u78BA\u5B9A",color:"positive"}),s(c,{onClick:t[7]||(t[7]=l=>e.dialog=!1),label:"\u53D6\u6D88",color:"negative"})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue"])]),o("div",j,[s($,null,{default:r(()=>[G,o("tbody",H,[(p(!0),b(U,null,N(n,(l,i)=>(p(),b("tr",{key:l._id},[o("td",null,d(l.name),1),o("td",null,d(l.floor),1),o("td",null,d(l.seatNumber),1),o("td",null,d(l.category),1),o("td",null,[s(k,{modelValue:l.book,"onUpdate:modelValue":u=>l.book=u,color:"green"},null,8,["modelValue","onUpdate:modelValue"])]),o("td",null,[s(k,{modelValue:l.using,"onUpdate:modelValue":u=>l.using=u,color:"green"},null,8,["modelValue","onUpdate:modelValue"])]),o("td",null,[s(c,{color:"warning",icon:"edit",onClick:u=>_(i)},null,8,["onClick"])])]))),128)),n.length===0?(p(),b("tr",K,R)):C("",!0)])]),_:1})])])])])]),_:1}))}};export{ye as default};
