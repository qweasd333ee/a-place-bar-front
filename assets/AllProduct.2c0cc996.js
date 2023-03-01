import{Q as v,a as n,b,c as y}from"./QTabPanels.12b91526.js";import{Q as g}from"./QCard.1c301be9.js";import{Q as w}from"./QPage.a5752a7a.js";import{x as Q,D as q,o as m,B as h,C as s,a as t,E as e,F as f,ay as u,Q as k,G as x,i as C,$ as P,k as V,ap as B,aq as S,c as _,az as $,aA as T,aB as N,aC as D}from"./index.4c904dae.js";import{Q as U}from"./QImg.5958a077.js";import{Q as d}from"./QItemLabel.7b063dd4.js";import"./uid.42677368.js";import"./QResizeObserver.89c65a0e.js";import"./use-tick.2e3cfe71.js";import"./use-timeout.557e88b9.js";import"./rtl.b51694b1.js";import"./use-dark.443492ee.js";import"./touch.70a9dd44.js";import"./selection.2840cf96.js";import"./use-cache.b0833c75.js";const z={class:"col-2"},A={class:"col-8 q-px-md"},E={style:{"white-space":"pre"}},F={class:"col-2 q-px-md text-center"},I={__name:"ProductCard",props:{_id:{type:String,default:""},name:{type:String,default:""},price:{type:Number,default:0},description:{type:String,default:""},image:{type:String,default:""},sell:{type:Boolean,default:!1},category:{type:String,default:""}},setup(i){const l=Q(),{editCartProduct:c}=l;return(p,r)=>{const o=q("router-link");return m(),h(g,{class:"ProductCard row items-center q-py-md",flat:"",square:""},{default:s(()=>[t("div",z,[e(U,{src:i.image,ratio:1,fit:"cover"},null,8,["src"])]),t("div",A,[e(d,{class:"text-h5 q-mb-md"},{default:s(()=>[e(o,{class:"text-warning",style:{"text-decoration":"none"},to:"/products/"+i._id},{default:s(()=>[f(u(i.name),1)]),_:1},8,["to"])]),_:1}),e(d,{class:"text-body1"},{default:s(()=>[t("p",E,u(i.description),1)]),_:1})]),t("div",F,[e(d,{class:"text-h6 q-mb-md"},{default:s(()=>[f(" $"+u(i.price),1)]),_:1}),e(d,null,{default:s(()=>[e(k,{color:"warning",icon:"shopping_cart",onClick:r[0]||(r[0]=a=>x(c)({_id:i._id,quantity:1}))})]),_:1})])]),_:1})}}},L=t("header",{id:"header"},[t("div",{class:"text-white text-center text-h3 background"},"\u9910\u9EDE\u4ECB\u7D39")],-1),j={id:"section01"},G={class:"container"},R=t("div",{class:"row justify-center text-white"},[t("div",{class:"col-12 col-md-8 col-lg-6 text-center"},[t("div",{class:"q-mb-md text-h4"},"\u9910\u9EDE\u5206\u985E"),t("p",{class:"q-mb-xl text-h6"},"\u6211\u5011\u7684\u9152\u5427\u63D0\u4F9B\u70B8\u7269\u548C\u5404\u5F0F\u8ABF\u9152\uFF0C\u5305\u62ECshot\u3001\u8336\u9152\u3001\u7279\u8ABF\u3001\u5976\u9152\u3001\u7121\u9152\u7CBE\u7B49\uFF0C\u4F9B\u60A8\u6839\u64DA\u81EA\u5DF1\u7684\u53E3\u5473\u548C\u9700\u6C42\u9032\u884C\u9078\u64C7\u3002\u7121\u8AD6\u60A8\u559C\u6B61\u6E05\u6DE1\u7684\u53E3\u611F\u9084\u662F\u6FC3\u70C8\u7684\u5473\u9053\uFF0C\u6211\u5011\u90FD\u6709\u5408\u9069\u7684\u98F2\u54C1\u4F9B\u60A8\u54C1\u5690\u3002\u671F\u5F85\u60A8\u7684\u5149\u81E8\uFF0C\u4E00\u540C\u4EAB\u53D7\u7F8E\u98DF\u548C\u7F8E\u9152\uFF01")])],-1),H={class:"row"},J={class:"q-px-md"},ie={__name:"AllProduct",setup(i){const l=C("shot"),c=P([]),p=V(()=>c.filter(r=>r.category===l.value));return(async()=>{var r,o;try{const{data:a}=await B.get("/products");c.push(...a.result)}catch(a){S.fire({icon:"error",title:"\u5931\u6557",text:((o=(r=a==null?void 0:a.response)==null?void 0:r.data)==null?void 0:o.message)||"\u767C\u751F\u932F\u8AA4"})}})(),(r,o)=>(m(),h(w,{id:"all-product"},{default:s(()=>[L,t("section",j,[t("div",G,[R,t("div",H,[e(g,{flat:"",class:"col-12"},{default:s(()=>[e(v,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=a=>l.value=a),dense:"","active-color":"warning","indicator-color":"warning","narrow-indicator":"",align:"center"},{default:s(()=>[e(n,{name:"shot",label:"shot"}),e(n,{name:"\u8336\u9152",label:"\u8336\u9152"}),e(n,{name:"\u7279\u8ABF",label:"\u7279\u8ABF"}),e(n,{name:"\u5976\u9152",label:"\u5976\u9152"}),e(n,{name:"\u5564\u9152",label:"\u5564\u9152"}),e(n,{name:"\u7121\u9152\u7CBE",label:"\u7121\u9152\u7CBE"}),e(n,{name:"\u62FC\u76E4",label:"\u62FC\u76E4"}),e(n,{name:"\u55AE\u9EDE",label:"\u55AE\u9EDE"})]),_:1},8,["modelValue"]),e(b,{modelValue:l.value,"onUpdate:modelValue":o[1]||(o[1]=a=>l.value=a),animated:""},{default:s(()=>[e(y,{class:"row",name:l.value},{default:s(()=>[(m(!0),_(T,null,$(x(p),a=>(m(),_("div",{key:a,class:"col-12 col-md-6"},[t("div",J,[e(I,N(D(a)),null,16)])]))),128))]),_:1},8,["name"])]),_:1},8,["modelValue"])]),_:1})])])])]),_:1}))}};export{ie as default};
