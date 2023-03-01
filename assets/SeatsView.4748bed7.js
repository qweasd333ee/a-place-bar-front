import{$ as y,aJ as f,aq as m,o as g,B as h,C as r,a,E as s,Q as p,ay as d,c as Q,az as U,aA as N}from"./index.89cdf58b.js";import{Q as C,a as q}from"./QToolbar.14c5ee43.js";import{Q as B,a as b}from"./QForm.e66cbfff.js";import{Q as S,a as _,b as k}from"./QToggle.26539b6c.js";import{Q as T}from"./QCardSection.362fe560.js";import{Q as D}from"./QCardActions.3b860f95.js";import{Q as v}from"./QCard.f61365b9.js";import{Q as $}from"./QDialog.4070e48b.js";import{Q as A}from"./QMarkupTable.9305f92f.js";import{Q as F}from"./QPage.f7dc70bf.js";import"./use-dark.84e67e0f.js";import"./uid.42677368.js";import"./focus-manager.d6507951.js";import"./QItemLabel.0852051e.js";import"./QMenu.287752f9.js";import"./selection.6f673553.js";import"./use-prevent-scroll.d794a277.js";import"./focusout.8f2830b1.js";import"./use-tick.83691730.js";import"./use-timeout.39ba6e12.js";import"./rtl.b51694b1.js";import"./format.865294d5.js";const E={id:"section01"},z={class:"container"},I={class:"row"},J=a("div",{class:"col-12 text-center text-white text-h3 text"},"\u5EA7\u4F4D\u7BA1\u7406",-1),L={class:"col-12 text-right"},M={class:"text-center"},P={class:"col-12"},j=a("thead",{class:"text-center"},[a("tr",null,[a("th",null,"\u7DE8\u865F"),a("th",null,"\u6A13\u5C64"),a("th",null,"\u4F4D\u6578"),a("th",null,"\u5206\u985E"),a("th",null,"\u662F\u5426\u958B\u653E"),a("th",null,"\u662F\u5426\u4F7F\u7528\u4E2D"),a("th",null,"\u7DE8\u8F2F")])],-1),G={class:"text-center"},ge={__name:"SeatsView",setup(H){const w=["\u5427\u6AAF","\u5C0F\u684C","\u4E2D\u684C","\u5927\u684C"],c={required(t){return!!t||"\u6B04\u4F4D\u5FC5\u586B"}},n=y([]),e=y({_id:"",name:"",floor:"",seatNumber:0,book:!1,using:!1,category:"",valid:!1,dialog:!1,idx:-1}),V=t=>{t===-1?(e._id="",e.name="",e.floor="",e.seatNumber=0,e.book=!1,e.using=!1,e.category="",e.valid=!1,e.idx=-1):(e._id=n[t]._id,e.name=n[t].name,e.floor=n[t].floor,e.seatNumber=n[t].seatNumber,e.book=n[t].book,e.using=n[t].using,e.category=n[t].category,e.valid=!1,e.idx=t),e.dialog=!0},x=async()=>{var o,l;const t=new FormData;t.append("name",e.name),t.append("floor",e.floor),t.append("seatNumber",e.seatNumber),t.append("book",e.book),t.append("using",e.using),t.append("category",e.category);try{if(e._id.length===0){const{data:i}=await f.post("/seats",t);n.push(i.result),m.fire({icon:"success",title:"\u6210\u529F",text:"\u65B0\u589E\u6210\u529F"})}else{const{data:i}=await f.patch("/seats/"+e._id,t);n[e.idx]=i.result,m.fire({icon:"success",title:"\u6210\u529F",text:"\u7DE8\u8F2F\u6210\u529F"})}e.dialog=!1}catch(i){m.fire({icon:"error",title:"\u5931\u6557",text:((l=(o=i==null?void 0:i.response)==null?void 0:o.data)==null?void 0:l.message)||"\u767C\u751F\u932F\u8AA4"})}};return(async()=>{var t,o;try{const{data:l}=await f.get("/seats/all");n.push(...l.result)}catch(l){m.fire({icon:"error",title:"\u5931\u6557",text:((o=(t=l==null?void 0:l.response)==null?void 0:t.data)==null?void 0:o.message)||"\u767C\u751F\u932F\u8AA4"})}})(),(t,o)=>(g(),h(F,{id:"admin-seats-view"},{default:r(()=>[a("section",E,[a("div",z,[a("div",I,[J,a("div",L,[s(p,{color:"warning",label:"\u65B0\u589E\u5EA7\u4F4D",onClick:o[0]||(o[0]=l=>V(-1)),class:"q-mb-md"}),s($,{modelValue:e.dialog,"onUpdate:modelValue":o[9]||(o[9]=l=>e.dialog=l),persistent:""},{default:r(()=>[s(v,{style:{width:"700px","max-width":"80vw"}},{default:r(()=>[s(C,{class:"bg-primary text-white"},{default:r(()=>[s(q,null,{default:r(()=>[a("div",M,d(e._id.length>0?"\u7DE8\u8F2F\u5EA7\u4F4D":"\u65B0\u589E\u5EA7\u4F4D"),1)]),_:1})]),_:1}),s(B,{modelValue:e.valid,"onUpdate:modelValue":o[8]||(o[8]=l=>e.valid=l),onSubmit:x},{default:r(()=>[s(v,{class:"q-pa-md"},{default:r(()=>[s(T,{class:"q-pt-none"},{default:r(()=>[s(b,{filled:"",modelValue:e.name,"onUpdate:modelValue":o[1]||(o[1]=l=>e.name=l),autofocus:"",label:"\u7DE8\u865F",rules:[c.required]},null,8,["modelValue","rules"]),s(b,{filled:"",modelValue:e.floor,"onUpdate:modelValue":o[2]||(o[2]=l=>e.floor=l),autofocus:"",label:"\u6A13\u5C64",rules:[c.required]},null,8,["modelValue","rules"]),s(S,{style:{"margin-bottom":"1.2rem"},filled:"",modelValue:e.category,"onUpdate:modelValue":o[3]||(o[3]=l=>e.category=l),options:w,label:"\u5206\u985E"},null,8,["modelValue"]),s(b,{filled:"",modelValue:e.seatNumber,"onUpdate:modelValue":o[4]||(o[4]=l=>e.seatNumber=l),autofocus:"",label:"\u4F4D\u6578",rules:[c.required]},null,8,["modelValue","rules"]),s(_,{style:{"margin-bottom":"1.2rem"},modelValue:e.book,"onUpdate:modelValue":o[5]||(o[5]=l=>e.book=l),label:"\u662F\u5426\u958B\u653E"},null,8,["modelValue"]),s(_,{style:{"margin-bottom":"1.2rem"},modelValue:e.using,"onUpdate:modelValue":o[6]||(o[6]=l=>e.using=l),label:"\u662F\u5426\u4F7F\u7528\u4E2D"},null,8,["modelValue"])]),_:1}),s(D,{align:"center"},{default:r(()=>[s(p,{type:"submit",label:"\u78BA\u5B9A",color:"positive"}),s(p,{onClick:o[7]||(o[7]=l=>e.dialog=!1),label:"\u53D6\u6D88",color:"negative"})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue"])]),a("div",P,[s(A,null,{default:r(()=>[j,a("tbody",G,[(g(!0),Q(N,null,U(n,(l,i)=>(g(),Q("tr",{key:l._id},[a("td",null,d(l.name),1),a("td",null,d(l.floor),1),a("td",null,d(l.seatNumber),1),a("td",null,d(l.category),1),a("td",null,[s(k,{modelValue:l.book,"onUpdate:modelValue":u=>l.book=u,color:"green"},null,8,["modelValue","onUpdate:modelValue"])]),a("td",null,[s(k,{modelValue:l.using,"onUpdate:modelValue":u=>l.using=u,color:"green"},null,8,["modelValue","onUpdate:modelValue"])]),a("td",null,[s(p,{color:"warning",icon:"edit",onClick:u=>V(i)},null,8,["onClick"])])]))),128))])]),_:1})])])])])]),_:1}))}};export{ge as default};
