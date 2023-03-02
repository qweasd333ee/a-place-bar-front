import{Q as R}from"./QImg.a8481b01.js";import{h as V,j as w,m as N,A as O,q as D,t as q,K as M,ap as $,T as G,aq as A,o as J,C as K,D as e,a,F as t,J as y,G as i,Q as z}from"./index.94b621dd.js";import{Q as n}from"./QCardSection.53cd1f7c.js";import{Q}from"./QCard.0f53d3d6.js";import{g as U}from"./scroll.84b069fb.js";import{Q as W}from"./QPage.ccae7a9f.js";import{_ as X}from"./logo7.1d82d0fa.js";import{_ as Y,a as Z}from"./pic28.a5af0525.js";import{a as aa}from"./aos.b38994d0.js";import"./use-dark.45a25f8d.js";function B(s){let o=!1,m,_;function r(){_=arguments,o!==!0&&(o=!0,m=requestAnimationFrame(()=>{s.apply(this,_),_=void 0,o=!1}))}return r.cancel=()=>{window.cancelAnimationFrame(m),o=!1},r}const{passive:j}=G;var F=V({name:"QParallax",props:{src:String,height:{type:Number,default:500},speed:{type:Number,default:1,validator:s=>s>=0&&s<=1},scrollTarget:{default:void 0},onScroll:Function},setup(s,{slots:o,emit:m}){const _=w(0),r=w(null),P=w(null),C=w(null);let u,l,E,v,f,d;N(()=>s.height,()=>{u===!0&&h()}),N(()=>s.scrollTarget,()=>{u===!0&&(T(),S())});let g=c=>{_.value=c,s.onScroll!==void 0&&m("scroll",c)};function h(){let c,p,x;d===window?(c=0,x=p=window.innerHeight):(c=A(d).top,p=$(d),x=c+p);const H=A(r.value).top,L=H+s.height;if(f!==void 0||L>c&&H<x){const I=(x-H)/(s.height+p);b((E-s.height)*I*s.speed),g(I)}}let b=c=>{l.style.transform=`translate3d(-50%,${Math.round(c)}px,0)`};function k(){E=l.naturalHeight||l.videoHeight||$(l),u===!0&&h()}function S(){u=!0,d=U(r.value,s.scrollTarget),d.addEventListener("scroll",h,j),window.addEventListener("resize",v,j),h()}function T(){u===!0&&(u=!1,d.removeEventListener("scroll",h,j),window.removeEventListener("resize",v,j),d=void 0,b.cancel(),g.cancel(),v.cancel())}return O(()=>{b=B(b),g=B(g),v=B(k),l=o.media!==void 0?P.value.children[0]:C.value,l.onload=l.onloadstart=l.loadedmetadata=k,k(),l.style.display="initial",window.IntersectionObserver!==void 0?(f=new IntersectionObserver(c=>{(c[0].isIntersecting===!0?S:T)()}),f.observe(r.value)):S()}),D(()=>{T(),f!==void 0&&f.disconnect(),l.onload=l.onloadstart=l.loadedmetadata=null}),()=>q("div",{ref:r,class:"q-parallax",style:{height:`${s.height}px`}},[q("div",{ref:P,class:"q-parallax__media absolute-full"},o.media!==void 0?o.media():[q("img",{ref:C,src:s.src})]),q("div",{class:"q-parallax__content absolute-full column flex-center"},o.content!==void 0?o.content({percentScrolled:_.value}):M(o.default))])}}),ta="/a-place-bar-front/assets/video.8aa5ebfb.mp4",ea="/a-place-bar-front/assets/pic23.9e04333f.jpeg",sa="/a-place-bar-front/assets/\u915213.4172c8f0.jpeg",oa="/a-place-bar-front/assets/pic24.ed52947f.jpeg",la="/a-place-bar-front/assets/pic16.0a0d2979.jpeg",ia="/a-place-bar-front/assets/pic34.69efee60.jpeg",ca="/a-place-bar-front/assets/pic30.3cc53a9b.jpeg",na="/a-place-bar-front/assets/pic18.27013e2d.jpeg",ra="/a-place-bar-front/assets/pic31.4058c840.jpeg",da="/a-place-bar-front/assets/pic17.a001490d.jpeg";const _a={id:"section01",class:"row items-end"},ua=a("video",{autoplay:"",muted:"",loop:"",class:"bg-video"},[a("source",{src:ta,type:"video/mp4"})],-1),ma=a("div",{class:"mask"},null,-1),fa={class:"container q-mt-xl"},ha={class:"row justify-center"},pa={class:"content col-12 text-center q-my-auto"},va={"data-aos":"fade-up","data-aos-duration":"1000"},ga=a("div",{"data-aos":"fade-up","data-aos-duration":"1000"},[a("p",{class:"text q-mb-xl text-h6"},[i(" \u591C\u665A \xA0 \u627E\u500B\u5BA4\u5167\u8212\u9069\u7684\u74B0\u5883\u8DDF\u670B\u53CB\u4E00\u8D77\u4F86\u559D\u9EDE\u5C0F\u9152\u66A2\u804A\u4E00\u6574\u665A\u5427\uFF01"),a("br"),i("\u8212\u670D\u7684\u6C99\u767C \xA0 \u512A\u7F8E\u7684\u71C8\u5149 \xA0 \u597D\u559D\u7684\u9152 \xA0 \u518D\u8212\u9069\u4E0D\u904E\u7684\u74B0\u5883 \xA0 \u7B49\u8457\u4F60\u4F86\u4EAB\u53D7 ")])],-1),ba={class:"container"},xa={class:"row justify-around"},wa={class:"col text-left"},qa={href:"/",target:"_blank"},ya={href:"https://www.facebook.com/a.place.2020/",target:"_blank"},Qa={href:"https://www.instagram.com/a.place_bar/",target:"_blank"},ja={class:"col text-right text-body1"},ka={id:"section02",class:"row"},Sa={class:"col-12"},Ta={"data-aos":"fade-up","data-aos-duration":"1000"},Ha={"data-aos":"fade-up","data-aos-duration":"1000"},za=a("br",null,null,-1),Ba={id:"section03",class:"row"},Pa={class:"col-12 col-sm-5"},Ca=a("img",{src:ea},null,-1),Ea={class:"col-12 col-sm-7"},Ia=a("div",{"data-aos":"fade-up","data-aos-duration":"1000"},[a("div",{class:"text-h4"}," \u8A02\u4F4D ")],-1),Na={"data-aos":"fade-up","data-aos-duration":"1000"},$a={"data-aos":"fade-up","data-aos-duration":"1000"},Aa={"data-aos":"fade-up","data-aos-duration":"1000"},Fa=a("div",{class:"text-h4"},"\u71DF\u696D\u6642\u9593",-1),La={"data-aos":"fade-up","data-aos-duration":"1000"},Ra={"data-aos":"fade-up","data-aos-duration":"1000"},Va={id:"section04",class:"row"},Oa={class:"col-12 col-sm-7"},Da={"data-aos":"fade-up","data-aos-duration":"1000"},Ma=a("br",null,null,-1),Ga={"data-aos":"fade-up","data-aos-duration":"1000"},Ja={class:"col-12 col-sm-5 pic"},Ka=a("img",{src:sa},null,-1),Ua=a("section",{id:"section05"},[a("div",{class:"container"},[a("div",{class:"row"},[a("div",{class:"col-12","data-aos":"zoom-in","data-aos-duration":"1000"},[a("div",{class:"text-center q-mb-lg text-h4"},"\u95DC\u65BC")]),a("div",{class:"col-12","data-aos":"zoom-in","data-aos-duration":"1000"},[a("p",{class:"text-center q-mb-xl text-h6 text"},[i(" \u4E00\u500B\u4EBA\u53EF\u4EE5\u8D70\u5F97\u5F88\u5FEB \u4F46\u4E00\u7FA4\u4EBA\u53EF\u4EE5\u8D70\u5F97\u5F88\u9060 "),a("br"),i(" \u9858\u90A3\u4E9B\u76F8\u805A\u8207\u91CD\u9022\uFF0C\u80FD\u7559\u5728\u4F60\u5011\u5FC3\u88E1\u7684\u4E00\u500B\u5730\u65B9 ")])])]),a("div",{class:"column"},[a("img",{class:"cell",src:oa}),a("img",{class:"cell",src:la}),a("img",{class:"cell",src:ia}),a("div",{class:"flex-break"}),a("img",{class:"cell",src:ca}),a("img",{class:"cell",src:na}),a("img",{class:"cell",src:ra}),a("div",{class:"flex-break"}),a("img",{class:"cell",src:da}),a("img",{class:"cell",src:Y}),a("img",{class:"cell",src:Z})])])],-1),it={__name:"HomeView",setup(s){return aa.init(),(o,m)=>(J(),K(W,{id:"home-view"},{default:e(()=>[a("header",_a,[ua,ma,a("div",fa,[a("div",ha,[a("div",pa,[a("div",va,[t(R,{class:"q-mb-xl",src:X,width:"250px"})]),ga])])]),a("div",ba,[a("div",xa,[a("div",wa,[a("a",qa,[t(y,{class:"q-mr-lg",name:"mdi-twitter"})]),a("a",ya,[t(y,{class:"q-mr-lg",name:"mdi-facebook"})]),a("a",Qa,[t(y,{class:"q-mr-lg",name:"mdi-instagram"})])]),a("div",ja,[a("p",null,[t(y,{left:"",color:"orange",class:"q-mr-md",name:"mdi-map-marker"}),i(" 951\u53F0\u6771\u7E23\u7DA0\u5CF6\u910952\u4E4B1\u865F ")])])])])]),a("section",ka,[a("div",Sa,[t(Q,{square:"",flat:"",class:"text-center"},{default:e(()=>[a("div",Ta,[t(n,{class:"text-h4"},{default:e(()=>[i(" \u9152\u9022\u77E5\u5DF1\u98F2\uFF0C\u8A69\u5411\u6703\u4EBA\u541F ")]),_:1})]),a("div",Ha,[t(n,{class:"text-h6"},{default:e(()=>[i(" \u7D20\u672A\u8B00\u9762\u7684\u6211\u5011\uFF0C\u6B64\u6642\u6B64\u523B\u90FD\u5728\u9019\u6BB5\u6642\u9593\u5167\u4E00\u8D77\u4EAB\u53D7\u7DA0\u5CF6\u7368\u7279\u7684\u60C5\u8ABF\uFF0C "),za,i(" \u5728\u300C\u4E00\u500B\u5730\u65B9\u300D\u628A\u9152\u8A00\u6B61\uFF0C\u611F\u53D7\u8457\u751F\u6D3B\u7684\u7F8E\u597D\uFF0C\u5DE5\u4F5C\u7684\u5145\u5BE6\uFF0C\u4EE5\u53CA\u56DE\u6B78\u81EA\u7136\u7684\u672C\u8CEA\u3002 ")]),_:1})])]),_:1})])]),a("section",Ba,[a("div",Pa,[t(F,{height:600},{media:e(()=>[Ca]),_:1})]),a("div",Ea,[t(Q,{square:"",flat:"",class:"column flex-center"},{default:e(()=>[t(n,null,{default:e(()=>[Ia]),_:1}),a("div",Na,[t(n,{class:"text-h6"},{default:e(()=>[i(" \u6211\u5011\u6C92\u6709\u9650\u5236\u559D\u9152\u6642\u9593\uFF0C\u5EFA\u8B70\u63D0\u524D\u8A02\u4F4D\uFF0C\u78BA\u4FDD\u6709\u4F4D\u5B50\uFF0C\u7576\u5929\u4F4D\u5B50\u4FDD\u755910\u5206\u9418\u3002 ")]),_:1})]),a("div",$a,[t(n,null,{default:e(()=>[t(z,{outline:"",label:"\u7ACB\u5373\u8A02\u4F4D",to:"/seat"})]),_:1})])]),_:1}),t(Q,{square:"",flat:"",class:"column flex-center"},{default:e(()=>[a("div",Aa,[t(n,null,{default:e(()=>[Fa]),_:1})]),a("div",La,[t(n,{class:"text-h6"},{default:e(()=>[i(" \u9031\u4E00\u81F3\u9031\u65E5\uFF0C\u665A\u4E0A19:30\u81F301:00 ")]),_:1})]),a("div",Ra,[t(n,null,{default:e(()=>[t(z,{outline:"",label:"\u95DC\u65BC\u6211\u5011",to:"/about"})]),_:1})])]),_:1})])]),a("section",Va,[a("div",Oa,[t(Q,{class:"column flex-center text-center",square:"",flat:"",style:{height:"100%"}},{default:e(()=>[a("div",Da,[t(n,{class:"text-h6"},{default:e(()=>[i(" \u4E00\u676F\u9152\u7684\u7528\u5FC3 \u9664\u4E86\u8ABF\u88FD\u904E\u7A0B\u5916 \u9084\u6709\u6070\u5230\u597D\u8655\u7684\u88DD\u98FE "),Ma,i(" \u8B93\u559D\u9152\u6642\u8996\u89BA\u5473\u89BA\u55C5\u89BA\u5806\u758A\u51FA\u591A\u91CD\u5C64\u6B21\u7684\u9957\u5BB4 \u6211\u5011\u8ABF\u7684\u4E0D\u662F\u9152 \u662F\u611B ")]),_:1})]),a("div",Ga,[t(n,null,{default:e(()=>[t(z,{outline:"",label:"\u9910\u9EDE\u4ECB\u7D39",to:"/product"})]),_:1})])]),_:1})]),a("div",Ja,[t(F,{height:600},{media:e(()=>[Ka]),_:1})])]),Ua]),_:1}))}};export{it as default};
