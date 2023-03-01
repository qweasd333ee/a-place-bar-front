import{d as Ue,e as ft,f as vt,g as mt,u as St,h as $t,i as rt,j as Nt,c as Kt}from"./QForm.2c1e5fd4.js";import{h as ze,aL as gt,aM as ht,l as r,Y as jt,t as f,J as ke,aN as Qt,R as Ut,v as Le,O as ee,S as Wt,j as L,m as Ve,U as Xt,aO as Yt,V as Jt,W as Gt,q as bt,X as ne,ay as Zt,aP as el,a1 as Ke,au as _e,N as tl,an as ye,at as ll,s as yt,K as ul,aQ as we}from"./index.b944b107.js";import{u as wt,a as Vt}from"./use-dark.7ef67035.js";import{c as nl,b as al}from"./QToolbar.ba41d720.js";import{Q as ol}from"./QItemLabel.bd95feb5.js";import{Q as il}from"./QMenu.75d945fd.js";import{Q as rl}from"./QDialog.7ab3464b.js";import{r as Qe}from"./rtl.b51694b1.js";import{n as ct}from"./format.865294d5.js";import{u as cl,o as sl}from"./QCardActions.81c97904.js";var dl=ze({name:"QField",inheritAttrs:!1,props:Ue,emits:ft,setup(){return vt(mt())}});const fl={xs:8,sm:10,md:14,lg:20,xl:24};var vl=ze({name:"QChip",props:{...wt,...gt,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:c,emit:l}){const{proxy:{$q:m}}=Le(),I=Vt(e,m),o=ht(e,fl),B=r(()=>e.selected===!0||e.icon!==void 0),V=r(()=>e.selected===!0?e.iconSelected||m.iconSet.chip.selected:e.icon),b=r(()=>e.iconRemove||m.iconSet.chip.remove),z=r(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),s=r(()=>{const y=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(y?` text-${y} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(z.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(I.value===!0?" q-chip--dark q-dark":"")}),C=r(()=>{const y=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},$={...y,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||m.lang.label.remove};return{chip:y,remove:$}});function p(y){y.keyCode===13&&S(y)}function S(y){e.disable||(l("update:selected",!e.selected),l("click",y))}function A(y){(y.keyCode===void 0||y.keyCode===13)&&(ee(y),e.disable===!1&&(l("update:modelValue",!1),l("remove")))}function O(){const y=[];z.value===!0&&y.push(f("div",{class:"q-focus-helper"})),B.value===!0&&y.push(f(ke,{class:"q-chip__icon q-chip__icon--left",name:V.value}));const $=e.label!==void 0?[f("div",{class:"ellipsis"},[e.label])]:void 0;return y.push(f("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},Qt(c.default,$))),e.iconRight&&y.push(f(ke,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&y.push(f(ke,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:b.value,...C.value.remove,onClick:A,onKeyup:A})),y}return()=>{if(e.modelValue===!1)return;const y={class:s.value,style:o.value};return z.value===!0&&Object.assign(y,C.value.chip,{onClick:S,onKeyup:p}),jt("div",y,O(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[Ut,e.ripple]])}}});const Y=1e3,ml=["start","center","end","start-force","center-force","end-force"],kt=Array.prototype.filter,Sl=window.getComputedStyle(document.body).overflowAnchor===void 0?Wt:function(e,c){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const l=e.children||[];kt.call(l,I=>I.dataset&&I.dataset.qVsAnchor!==void 0).forEach(I=>{delete I.dataset.qVsAnchor});const m=l[c];m&&m.dataset&&(m.dataset.qVsAnchor="")}))};function Ce(e,c){return e+c}function je(e,c,l,m,I,o,B,V){const b=e===window?document.scrollingElement||document.documentElement:e,z=I===!0?"offsetWidth":"offsetHeight",s={scrollStart:0,scrollViewSize:-B-V,scrollMaxSize:0,offsetStart:-B,offsetEnd:-V};if(I===!0?(e===window?(s.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,s.scrollViewSize+=document.documentElement.clientWidth):(s.scrollStart=b.scrollLeft,s.scrollViewSize+=b.clientWidth),s.scrollMaxSize=b.scrollWidth,o===!0&&(s.scrollStart=(Qe===!0?s.scrollMaxSize-s.scrollViewSize:0)-s.scrollStart)):(e===window?(s.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,s.scrollViewSize+=document.documentElement.clientHeight):(s.scrollStart=b.scrollTop,s.scrollViewSize+=b.clientHeight),s.scrollMaxSize=b.scrollHeight),l!==null)for(let C=l.previousElementSibling;C!==null;C=C.previousElementSibling)C.classList.contains("q-virtual-scroll--skip")===!1&&(s.offsetStart+=C[z]);if(m!==null)for(let C=m.nextElementSibling;C!==null;C=C.nextElementSibling)C.classList.contains("q-virtual-scroll--skip")===!1&&(s.offsetEnd+=C[z]);if(c!==e){const C=b.getBoundingClientRect(),p=c.getBoundingClientRect();I===!0?(s.offsetStart+=p.left-C.left,s.offsetEnd-=p.width):(s.offsetStart+=p.top-C.top,s.offsetEnd-=p.height),e!==window&&(s.offsetStart+=s.scrollStart),s.offsetEnd+=s.scrollMaxSize-s.offsetStart}return s}function st(e,c,l,m){c==="end"&&(c=(e===window?document.body:e)[l===!0?"scrollWidth":"scrollHeight"]),e===window?l===!0?(m===!0&&(c=(Qe===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-c),window.scrollTo(c,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,c):l===!0?(m===!0&&(c=(Qe===!0?e.scrollWidth-e.offsetWidth:0)-c),e.scrollLeft=c):e.scrollTop=c}function Ae(e,c,l,m){if(l>=m)return 0;const I=c.length,o=Math.floor(l/Y),B=Math.floor((m-1)/Y)+1;let V=e.slice(o,B).reduce(Ce,0);return l%Y!==0&&(V-=c.slice(o*Y,l).reduce(Ce,0)),m%Y!==0&&m!==I&&(V-=c.slice(m,B*Y).reduce(Ce,0)),V}const gl={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},hl={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...gl};function bl({virtualScrollLength:e,getVirtualScrollTarget:c,getVirtualScrollEl:l,virtualScrollItemSizeComputed:m}){const I=Le(),{props:o,emit:B,proxy:V}=I,{$q:b}=V;let z,s,C,p=[],S;const A=L(0),O=L(0),y=L({}),$=L(null),T=L(null),W=L(null),E=L({from:0,to:0}),F=r(()=>o.tableColspan!==void 0?o.tableColspan:100);m===void 0&&(m=r(()=>o.virtualScrollItemSize));const X=r(()=>m.value+";"+o.virtualScrollHorizontal),G=r(()=>X.value+";"+o.virtualScrollSliceRatioBefore+";"+o.virtualScrollSliceRatioAfter);Ve(G,()=>{ue()}),Ve(X,te);function te(){oe(s,!0)}function ae(a){oe(a===void 0?s:a)}function Z(a,d){const g=c();if(g==null||g.nodeType===8)return;const M=je(g,l(),$.value,T.value,o.virtualScrollHorizontal,b.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd);C!==M.scrollViewSize&&ue(M.scrollViewSize),k(g,M,Math.min(e.value-1,Math.max(0,parseInt(a,10)||0)),0,ml.indexOf(d)>-1?d:s>-1&&a>s?"end":"start")}function U(){const a=c();if(a==null||a.nodeType===8)return;const d=je(a,l(),$.value,T.value,o.virtualScrollHorizontal,b.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd),g=e.value-1,M=d.scrollMaxSize-d.offsetStart-d.offsetEnd-O.value;if(z===d.scrollStart)return;if(d.scrollMaxSize<=0){k(a,d,0,0);return}C!==d.scrollViewSize&&ue(d.scrollViewSize),j(E.value.from);const H=Math.floor(d.scrollMaxSize-Math.max(d.scrollViewSize,d.offsetEnd)-Math.min(S[g],d.scrollViewSize/2));if(H>0&&Math.ceil(d.scrollStart)>=H){k(a,d,g,d.scrollMaxSize-d.offsetEnd-p.reduce(Ce,0));return}let x=0,h=d.scrollStart-d.offsetStart,P=h;if(h<=M&&h+d.scrollViewSize>=A.value)h-=A.value,x=E.value.from,P=h;else for(let w=0;h>=p[w]&&x<g;w++)h-=p[w],x+=Y;for(;h>0&&x<g;)h-=S[x],h>-d.scrollViewSize?(x++,P=h):P=S[x]+h;k(a,d,x,P)}function k(a,d,g,M,H){const x=typeof H=="string"&&H.indexOf("-force")>-1,h=x===!0?H.replace("-force",""):H,P=h!==void 0?h:"start";let w=Math.max(0,g-y.value[P]),N=w+y.value.total;N>e.value&&(N=e.value,w=Math.max(0,N-y.value.total)),z=d.scrollStart;const de=w!==E.value.from||N!==E.value.to;if(de===!1&&h===void 0){xe(g);return}const{activeElement:qe}=document,J=W.value;de===!0&&J!==null&&J!==qe&&J.contains(qe)===!0&&(J.addEventListener("focusout",le),setTimeout(()=>{J!==null&&J.removeEventListener("focusout",le)})),Sl(J,g-w);const Me=h!==void 0?S.slice(w,g).reduce(Ce,0):0;if(de===!0){const ie=N>=E.value.from&&w<=E.value.to?E.value.to:N;E.value={from:w,to:ie},A.value=Ae(p,S,0,w),O.value=Ae(p,S,N,e.value),requestAnimationFrame(()=>{E.value.to!==N&&z===d.scrollStart&&(E.value={from:E.value.from,to:N},O.value=Ae(p,S,N,e.value))})}requestAnimationFrame(()=>{if(z!==d.scrollStart)return;de===!0&&j(w);const ie=S.slice(w,g).reduce(Ce,0),fe=ie+d.offsetStart+A.value,Fe=fe+S[g];let Ie=fe+M;if(h!==void 0){const He=ie-Me,K=d.scrollStart+He;Ie=x!==!0&&K<fe&&Fe<K+d.scrollViewSize?K:h==="end"?Fe-d.scrollViewSize:fe-(h==="start"?0:Math.round((d.scrollViewSize-S[g])/2))}z=Ie,st(a,Ie,o.virtualScrollHorizontal,b.lang.rtl),xe(g)})}function j(a){const d=W.value;if(d){const g=kt.call(d.children,w=>w.classList&&w.classList.contains("q-virtual-scroll--skip")===!1),M=g.length,H=o.virtualScrollHorizontal===!0?w=>w.getBoundingClientRect().width:w=>w.offsetHeight;let x=a,h,P;for(let w=0;w<M;){for(h=H(g[w]),w++;w<M&&g[w].classList.contains("q-virtual-scroll--with-prev")===!0;)h+=H(g[w]),w++;P=h-S[x],P!==0&&(S[x]+=P,p[Math.floor(x/Y)]+=P),x++}}}function le(){W.value!==null&&W.value!==void 0&&W.value.focus()}function oe(a,d){const g=1*m.value;(d===!0||Array.isArray(S)===!1)&&(S=[]);const M=S.length;S.length=e.value;for(let x=e.value-1;x>=M;x--)S[x]=g;const H=Math.floor((e.value-1)/Y);p=[];for(let x=0;x<=H;x++){let h=0;const P=Math.min((x+1)*Y,e.value);for(let w=x*Y;w<P;w++)h+=S[w];p.push(h)}s=-1,z=void 0,A.value=Ae(p,S,0,E.value.from),O.value=Ae(p,S,E.value.to,e.value),a>=0?(j(E.value.from),ne(()=>{Z(a)})):se()}function ue(a){if(a===void 0&&typeof window!="undefined"){const h=c();h!=null&&h.nodeType!==8&&(a=je(h,l(),$.value,T.value,o.virtualScrollHorizontal,b.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd).scrollViewSize)}C=a;const d=parseFloat(o.virtualScrollSliceRatioBefore)||0,g=parseFloat(o.virtualScrollSliceRatioAfter)||0,M=1+d+g,H=a===void 0||a<=0?1:Math.ceil(a/m.value),x=Math.max(1,H,Math.ceil((o.virtualScrollSliceSize>0?o.virtualScrollSliceSize:10)/M));y.value={total:Math.ceil(x*M),start:Math.ceil(x*d),center:Math.ceil(x*(.5+d)),end:Math.ceil(x*(1+d)),view:H}}function Oe(a,d){const g=o.virtualScrollHorizontal===!0?"width":"height",M={["--q-virtual-scroll-item-"+g]:m.value+"px"};return[a==="tbody"?f(a,{class:"q-virtual-scroll__padding",key:"before",ref:$},[f("tr",[f("td",{style:{[g]:`${A.value}px`,...M},colspan:F.value})])]):f(a,{class:"q-virtual-scroll__padding",key:"before",ref:$,style:{[g]:`${A.value}px`,...M}}),f(a,{class:"q-virtual-scroll__content",key:"content",ref:W,tabindex:-1},d.flat()),a==="tbody"?f(a,{class:"q-virtual-scroll__padding",key:"after",ref:T},[f("tr",[f("td",{style:{[g]:`${O.value}px`,...M},colspan:F.value})])]):f(a,{class:"q-virtual-scroll__padding",key:"after",ref:T,style:{[g]:`${O.value}px`,...M}})]}function xe(a){s!==a&&(o.onVirtualScroll!==void 0&&B("virtualScroll",{index:a,from:E.value.from,to:E.value.to-1,direction:a<s?"decrease":"increase",ref:V}),s=a)}ue();const se=Xt(U,b.platform.is.ios===!0?120:35);Yt(()=>{ue()});let i=!1;return Jt(()=>{i=!0}),Gt(()=>{if(i!==!0)return;const a=c();z!==void 0&&a!==void 0&&a!==null&&a.nodeType!==8?st(a,z,o.virtualScrollHorizontal,b.lang.rtl):Z(s)}),bt(()=>{se.cancel()}),Object.assign(V,{scrollTo:Z,reset:te,refresh:ae}),{virtualScrollSliceRange:E,virtualScrollSliceSizeComputed:y,setVirtualScrollSize:ue,onVirtualScrollEvt:se,localResetVirtualScroll:oe,padVirtualScroll:Oe,scrollTo:Z,reset:te,refresh:ae}}const dt=e=>["add","add-unique","toggle"].includes(e),yl=".*+?^${}()|[]\\",wl=Object.keys(Ue);var Ml=ze({name:"QSelect",inheritAttrs:!1,props:{...hl,...St,...Ue,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:dt},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:String,transitionHide:String,transitionDuration:[String,Number],behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:{type:[Number,String],default:void 0},onNewValue:Function,onFilter:Function},emits:[...ft,"add","remove","inputValue","newValue","keyup","keypress","keydown","filterAbort"],setup(e,{slots:c,emit:l}){const{proxy:m}=Le(),{$q:I}=m,o=L(!1),B=L(!1),V=L(-1),b=L(""),z=L(!1),s=L(!1);let C=null,p,S,A,O=null,y,$,T,W;const E=L(null),F=L(null),X=L(null),G=L(null),te=L(null),ae=$t(e),Z=Nt(ut),U=r(()=>Array.isArray(e.options)?e.options.length:0),k=r(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:j,virtualScrollSliceSizeComputed:le,localResetVirtualScroll:oe,padVirtualScroll:ue,onVirtualScrollEvt:Oe,scrollTo:xe,setVirtualScrollSize:se}=bl({virtualScrollLength:U,getVirtualScrollTarget:At,getVirtualScrollEl:tt,virtualScrollItemSizeComputed:k}),i=mt(),a=r(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,n=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const u=e.mapOptions===!0&&p!==void 0?p:[],v=n.map(_=>_t(_,u));return e.modelValue===null&&t===!0?v.filter(_=>_!==null):v}return n}),d=r(()=>{const t={};return wl.forEach(n=>{const u=e[n];u!==void 0&&(t[n]=u)}),t}),g=r(()=>e.optionsDark===null?i.isDark.value:e.optionsDark),M=r(()=>rt(a.value)),H=r(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||a.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),x=r(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),h=r(()=>U.value===0),P=r(()=>a.value.map(t=>Q.value(t)).join(", ")),w=r(()=>e.displayValue!==void 0?e.displayValue:P.value),N=r(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),de=r(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||a.value.some(N.value))),qe=r(()=>i.focused.value===!0?e.tabindex:-1),J=r(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":o.value===!0?"true":"false","aria-controls":`${i.targetUid.value}_lb`};return V.value>=0&&(t["aria-activedescendant"]=`${i.targetUid.value}_${V.value}`),t}),Me=r(()=>({id:`${i.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),ie=r(()=>a.value.map((t,n)=>({index:n,opt:t,html:N.value(t),selected:!0,removeAtIndex:pt,toggleOption:re,tabindex:qe.value}))),fe=r(()=>{if(U.value===0)return[];const{from:t,to:n}=j.value;return e.options.slice(t,n).map((u,v)=>{const _=ve.value(u)===!0,q=t+v,R={clickable:!0,active:!1,activeClass:He.value,manualFocus:!0,focused:!1,disable:_,tabindex:-1,dense:e.optionsDense,dark:g.value,role:"option",id:`${i.targetUid.value}_${q}`,onClick:()=>{re(u)}};return _!==!0&&(De(u)===!0&&(R.active=!0),V.value===q&&(R.focused=!0),R["aria-selected"]=R.active===!0?"true":"false",I.platform.is.desktop===!0&&(R.onMousemove=()=>{o.value===!0&&me(q)})),{index:q,opt:u,html:N.value(u),label:Q.value(u),selected:R.active,focused:R.focused,toggleOption:re,setOptionIndex:me,itemProps:R}})}),Fe=r(()=>e.dropdownIcon!==void 0?e.dropdownIcon:I.iconSet.arrow.dropdown),Ie=r(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),He=r(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),K=r(()=>Pe(e.optionValue,"value")),Q=r(()=>Pe(e.optionLabel,"label")),ve=r(()=>Pe(e.optionDisable,"disable")),Be=r(()=>a.value.map(t=>K.value(t))),It=r(()=>{const t={onInput:ut,onChange:Z,onKeydown:et,onKeyup:Ge,onKeypress:Ze,onFocus:Ye,onClick(n){S===!0&&ye(n)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=Z,t});Ve(a,t=>{p=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&i.innerLoading.value!==!0&&(B.value!==!0&&o.value!==!0||M.value!==!0)&&(A!==!0&&be(),(B.value===!0||o.value===!0)&&Se(""))},{immediate:!0}),Ve(()=>e.fillInput,be),Ve(o,$e),Ve(U,Dt);function We(t){return e.emitValue===!0?K.value(t):t}function Te(t){if(t>-1&&t<a.value.length)if(e.multiple===!0){const n=e.modelValue.slice();l("remove",{index:t,value:n.splice(t,1)[0]}),l("update:modelValue",n)}else l("update:modelValue",null)}function pt(t){Te(t),i.focus()}function Xe(t,n){const u=We(t);if(e.multiple!==!0){e.fillInput===!0&&pe(Q.value(t),!0,!0),l("update:modelValue",u);return}if(a.value.length===0){l("add",{index:0,value:u}),l("update:modelValue",e.multiple===!0?[u]:u);return}if(n===!0&&De(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const v=e.modelValue.slice();l("add",{index:v.length,value:u}),v.push(u),l("update:modelValue",v)}function re(t,n){if(i.editable.value!==!0||t===void 0||ve.value(t)===!0)return;const u=K.value(t);if(e.multiple!==!0){n!==!0&&(pe(e.fillInput===!0?Q.value(t):"",!0,!0),ce()),F.value!==null&&F.value.focus(),(a.value.length===0||_e(K.value(a.value[0]),u)!==!0)&&l("update:modelValue",e.emitValue===!0?u:t);return}if((S!==!0||z.value===!0)&&i.focus(),Ye(),a.value.length===0){const q=e.emitValue===!0?u:t;l("add",{index:0,value:q}),l("update:modelValue",e.multiple===!0?[q]:q);return}const v=e.modelValue.slice(),_=Be.value.findIndex(q=>_e(q,u));if(_>-1)l("remove",{index:_,value:v.splice(_,1)[0]});else{if(e.maxValues!==void 0&&v.length>=e.maxValues)return;const q=e.emitValue===!0?u:t;l("add",{index:v.length,value:q}),v.push(q)}l("update:modelValue",v)}function me(t){if(I.platform.is.desktop!==!0)return;const n=t>-1&&t<U.value?t:-1;V.value!==n&&(V.value=n)}function Ee(t=1,n){if(o.value===!0){let u=V.value;do u=ct(u+t,-1,U.value-1);while(u!==-1&&u!==V.value&&ve.value(e.options[u])===!0);V.value!==u&&(me(u),xe(u),n!==!0&&e.useInput===!0&&e.fillInput===!0&&Re(u>=0?Q.value(e.options[u]):y))}}function _t(t,n){const u=v=>_e(K.value(v),t);return e.options.find(u)||n.find(u)||t}function Pe(t,n){const u=t!==void 0?t:n;return typeof u=="function"?u:v=>v!==null&&typeof v=="object"&&u in v?v[u]:v}function De(t){const n=K.value(t);return Be.value.find(u=>_e(u,n))!==void 0}function Ye(t){e.useInput===!0&&F.value!==null&&(t===void 0||F.value===t.target&&t.target.value===P.value)&&F.value.select()}function Je(t){tl(t,27)===!0&&o.value===!0&&(ye(t),ce(),be()),l("keyup",t)}function Ge(t){const{value:n}=t.target;if(t.keyCode!==void 0){Je(t);return}if(t.target.value="",C!==null&&(clearTimeout(C),C=null),be(),typeof n=="string"&&n.length>0){const u=n.toLocaleLowerCase(),v=q=>{const R=e.options.find(D=>q.value(D).toLocaleLowerCase()===u);return R===void 0?!1:(a.value.indexOf(R)===-1?re(R):ce(),!0)},_=q=>{v(K)!==!0&&(v(Q)===!0||q===!0||Se(n,!0,()=>_(!0)))};_()}else i.clearValue(t)}function Ze(t){l("keypress",t)}function et(t){if(l("keydown",t),ll(t)===!0)return;const n=b.value.length>0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),u=t.shiftKey!==!0&&e.multiple!==!0&&(V.value>-1||n===!0);if(t.keyCode===27){Ke(t);return}if(t.keyCode===9&&u===!1){ge();return}if(t.target===void 0||t.target.id!==i.targetUid.value)return;if(t.keyCode===40&&i.innerLoading.value!==!0&&o.value===!1){ee(t),he();return}if(t.keyCode===8&&e.hideSelected!==!0&&b.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?Te(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&l("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof b.value!="string"||b.value.length===0)&&(ee(t),V.value=-1,Ee(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&le.value!==void 0&&(ee(t),V.value=Math.max(-1,Math.min(U.value,V.value+(t.keyCode===33?-1:1)*le.value.view)),Ee(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(ee(t),Ee(t.keyCode===38?-1:1,e.multiple));const v=U.value;if((T===void 0||W<Date.now())&&(T=""),v>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||T.length>0)){o.value!==!0&&he(t);const _=t.key.toLocaleLowerCase(),q=T.length===1&&T[0]===_;W=Date.now()+1500,q===!1&&(ee(t),T+=_);const R=new RegExp("^"+T.split("").map(Ne=>yl.indexOf(Ne)>-1?"\\"+Ne:Ne).join(".*"),"i");let D=V.value;if(q===!0||D<0||R.test(Q.value(e.options[D]))!==!0)do D=ct(D+1,-1,v-1);while(D!==V.value&&(ve.value(e.options[D])===!0||R.test(Q.value(e.options[D]))!==!0));V.value!==D&&ne(()=>{me(D),xe(D),D>=0&&e.useInput===!0&&e.fillInput===!0&&Re(Q.value(e.options[D]))});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||T!=="")&&(t.keyCode!==9||u===!1))){if(t.keyCode!==9&&ee(t),V.value>-1&&V.value<v){re(e.options[V.value]);return}if(n===!0){const _=(q,R)=>{if(R){if(dt(R)!==!0)return}else R=e.newValueMode;if(q==null)return;pe("",e.multiple!==!0,!0),(R==="toggle"?re:Xe)(q,R==="add-unique"),e.multiple!==!0&&(F.value!==null&&F.value.focus(),ce())};if(e.onNewValue!==void 0?l("newValue",b.value,_):_(b.value),e.multiple!==!0)return}o.value===!0?ge():i.innerLoading.value!==!0&&he()}}function tt(){return S===!0?te.value:X.value!==null&&X.value.contentEl!==null?X.value.contentEl:void 0}function At(){return tt()}function zt(){return e.hideSelected===!0?[]:c["selected-item"]!==void 0?ie.value.map(t=>c["selected-item"](t)).slice():c.selected!==void 0?[].concat(c.selected()):e.useChips===!0?ie.value.map((t,n)=>f(vl,{key:"option-"+n,removable:i.editable.value===!0&&ve.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:qe.value,onRemove(){t.removeAtIndex(n)}},()=>f("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:Q.value(t.opt)}))):[f("span",{[de.value===!0?"innerHTML":"textContent"]:w.value})]}function lt(){if(h.value===!0)return c["no-option"]!==void 0?c["no-option"]({inputValue:b.value}):void 0;const t=c.option!==void 0?c.option:u=>f(al,{key:u.index,...u.itemProps},()=>f(nl,()=>f(ol,()=>f("span",{[u.html===!0?"innerHTML":"textContent"]:u.label}))));let n=ue("div",fe.value.map(t));return c["before-options"]!==void 0&&(n=c["before-options"]().concat(n)),yt(c["after-options"],n)}function Ot(t,n){const u=n===!0?{...J.value,...i.splitAttrs.attributes.value}:void 0,v={ref:n===!0?F:void 0,key:"i_t",class:H.value,style:e.inputStyle,value:b.value!==void 0?b.value:"",type:"search",...u,id:n===!0?i.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...It.value};return t!==!0&&S===!0&&(Array.isArray(v.class)===!0?v.class=[...v.class,"no-pointer-events"]:v.class+=" no-pointer-events"),f("input",v)}function ut(t){C!==null&&(clearTimeout(C),C=null),!(t&&t.target&&t.target.qComposing===!0)&&(Re(t.target.value||""),A=!0,y=b.value,i.focused.value!==!0&&(S!==!0||z.value===!0)&&i.focus(),e.onFilter!==void 0&&(C=setTimeout(()=>{C=null,Se(b.value)},e.inputDebounce)))}function Re(t){b.value!==t&&(b.value=t,l("inputValue",t))}function pe(t,n,u){A=u!==!0,e.useInput===!0&&(Re(t),(n===!0||u!==!0)&&(y=t),n!==!0&&Se(t))}function Se(t,n,u){if(e.onFilter===void 0||n!==!0&&i.focused.value!==!0)return;i.innerLoading.value===!0?l("filterAbort"):(i.innerLoading.value=!0,s.value=!0),t!==""&&e.multiple!==!0&&a.value.length>0&&A!==!0&&t===Q.value(a.value[0])&&(t="");const v=setTimeout(()=>{o.value===!0&&(o.value=!1)},10);O!==null&&clearTimeout(O),O=v,l("filter",t,(_,q)=>{(n===!0||i.focused.value===!0)&&O===v&&(clearTimeout(O),typeof _=="function"&&_(),s.value=!1,ne(()=>{i.innerLoading.value=!1,i.editable.value===!0&&(n===!0?o.value===!0&&ce():o.value===!0?$e(!0):o.value=!0),typeof q=="function"&&ne(()=>{q(m)}),typeof u=="function"&&ne(()=>{u(m)})}))},()=>{i.focused.value===!0&&O===v&&(clearTimeout(O),i.innerLoading.value=!1,s.value=!1),o.value===!0&&(o.value=!1)})}function Mt(){return f(il,{ref:X,class:x.value,style:e.popupContentStyle,modelValue:o.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&h.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:g.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,square:Ie.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...Me.value,onScrollPassive:Oe,onBeforeShow:at,onBeforeHide:Ft,onShow:Bt},lt)}function Ft(t){ot(t),ge()}function Bt(){se()}function Et(t){ye(t),F.value!==null&&F.value.focus(),z.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function Rt(t){ye(t),ne(()=>{z.value=!1})}function Lt(){const t=[f(dl,{class:`col-auto ${i.fieldClass.value}`,...d.value,for:i.targetUid.value,dark:g.value,square:!0,loading:s.value,itemAligned:!1,filled:!0,stackLabel:b.value.length>0,...i.splitAttrs.listeners.value,onFocus:Et,onBlur:Rt},{...c,rawControl:()=>i.getControl(!0),before:void 0,after:void 0})];return o.value===!0&&t.push(f("div",{ref:te,class:x.value+" scroll",style:e.popupContentStyle,...Me.value,onClick:Ke,onScrollPassive:Oe},lt())),f(rl,{ref:G,modelValue:B.value,position:e.useInput===!0?"top":void 0,transitionShow:$,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:at,onBeforeHide:Ht,onHide:Tt,onShow:Pt},()=>f("div",{class:"q-select__dialog"+(g.value===!0?" q-select__dialog--dark q-dark":"")+(z.value===!0?" q-select__dialog--focused":"")},t))}function Ht(t){ot(t),G.value!==null&&G.value.__updateRefocusTarget(i.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),i.focused.value=!1}function Tt(t){ce(),i.focused.value===!1&&l("blur",t),be()}function Pt(){const t=document.activeElement;(t===null||t.id!==i.targetUid.value)&&F.value!==null&&F.value!==t&&F.value.focus(),se()}function ge(){B.value!==!0&&(V.value=-1,o.value===!0&&(o.value=!1),i.focused.value===!1&&(O!==null&&(clearTimeout(O),O=null),i.innerLoading.value===!0&&(l("filterAbort"),i.innerLoading.value=!1,s.value=!1)))}function he(t){i.editable.value===!0&&(S===!0?(i.onControlFocusin(t),B.value=!0,ne(()=>{i.focus()})):i.focus(),e.onFilter!==void 0?Se(b.value):(h.value!==!0||c["no-option"]!==void 0)&&(o.value=!0))}function ce(){B.value=!1,ge()}function be(){e.useInput===!0&&pe(e.multiple!==!0&&e.fillInput===!0&&a.value.length>0&&Q.value(a.value[0])||"",!0,!0)}function $e(t){let n=-1;if(t===!0){if(a.value.length>0){const u=K.value(a.value[0]);n=e.options.findIndex(v=>_e(K.value(v),u))}oe(n)}me(n)}function Dt(t,n){o.value===!0&&i.innerLoading.value===!1&&(oe(-1,!0),ne(()=>{o.value===!0&&i.innerLoading.value===!1&&(t>n?oe():$e(!0))}))}function nt(){B.value===!1&&X.value!==null&&X.value.updatePosition()}function at(t){t!==void 0&&ye(t),l("popupShow",t),i.hasPopupOpen=!0,i.onControlFocusin(t)}function ot(t){t!==void 0&&ye(t),l("popupHide",t),i.hasPopupOpen=!1,i.onControlFocusout(t)}function it(){S=I.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?c["no-option"]!==void 0||e.onFilter!==void 0||h.value===!1:!0),$=I.platform.is.ios===!0&&S===!0&&e.useInput===!0?"fade":e.transitionShow}return Zt(it),el(nt),it(),bt(()=>{C!==null&&clearTimeout(C)}),Object.assign(m,{showPopup:he,hidePopup:ce,removeAtIndex:Te,add:Xe,toggleOption:re,getOptionIndex:()=>V.value,setOptionIndex:me,moveOptionSelection:Ee,filter:Se,updateMenuPosition:nt,updateInputValue:pe,isOptionSelected:De,getEmittingOptionValue:We,isOptionDisabled:(...t)=>ve.value.apply(null,t)===!0,getOptionValue:(...t)=>K.value.apply(null,t),getOptionLabel:(...t)=>Q.value.apply(null,t)}),Object.assign(i,{innerValue:a,fieldClass:r(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:E,targetRef:F,hasValue:M,showPopup:he,floatingLabel:r(()=>e.hideSelected!==!0&&M.value===!0||typeof b.value=="number"||b.value.length>0||rt(e.displayValue)),getControlChild:()=>{if(i.editable.value!==!1&&(B.value===!0||h.value!==!0||c["no-option"]!==void 0))return S===!0?Lt():Mt();i.hasPopupOpen===!0&&(i.hasPopupOpen=!1)},controlEvents:{onFocusin(t){i.onControlFocusin(t)},onFocusout(t){i.onControlFocusout(t,()=>{be(),ge()})},onClick(t){if(Ke(t),S!==!0&&o.value===!0){ge(),F.value!==null&&F.value.focus();return}he(t)}},getControl:t=>{const n=zt(),u=t===!0||B.value!==!0||S!==!0;if(e.useInput===!0)n.push(Ot(t,u));else if(i.editable.value===!0){const _=u===!0?J.value:void 0;n.push(f("input",{ref:u===!0?F:void 0,key:"d_t",class:"q-select__focus-target",id:u===!0?i.targetUid.value:void 0,value:w.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,..._,onKeydown:et,onKeyup:Je,onKeypress:Ze})),u===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length>0&&n.push(f("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:Ge}))}if(ae.value!==void 0&&e.disable!==!0&&Be.value.length>0){const _=Be.value.map(q=>f("option",{value:q,selected:!0}));n.push(f("select",{class:"hidden",name:ae.value,multiple:e.multiple},_))}const v=e.useInput===!0||u!==!0?void 0:i.splitAttrs.attributes.value;return f("div",{class:"q-field__native row items-center",...v},n)},getInnerAppend:()=>e.loading!==!0&&s.value!==!0&&e.hideDropdownIcon!==!0?[f(ke,{class:"q-select__dropdown-icon"+(o.value===!0?" rotate-180":""),name:Fe.value})]:null}),vt(i)}});const Ct={...wt,...gt,...St,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},xt=["update:modelValue"];function qt(e,c){const{props:l,slots:m,emit:I,proxy:o}=Le(),{$q:B}=o,V=Vt(l,B),b=L(null),{refocusTargetEl:z,refocusTarget:s}=cl(l,b),C=ht(l,sl),p=r(()=>l.val!==void 0&&Array.isArray(l.modelValue)),S=r(()=>{const k=we(l.val);return p.value===!0?l.modelValue.findIndex(j=>we(j)===k):-1}),A=r(()=>p.value===!0?S.value>-1:we(l.modelValue)===we(l.trueValue)),O=r(()=>p.value===!0?S.value===-1:we(l.modelValue)===we(l.falseValue)),y=r(()=>A.value===!1&&O.value===!1),$=r(()=>l.disable===!0?-1:l.tabindex||0),T=r(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(l.disable===!0?" disabled":"")+(V.value===!0?` q-${e}--dark`:"")+(l.dense===!0?` q-${e}--dense`:"")+(l.leftLabel===!0?" reverse":"")),W=r(()=>{const k=A.value===!0?"truthy":O.value===!0?"falsy":"indet",j=l.color!==void 0&&(l.keepColor===!0||(e==="toggle"?A.value===!0:O.value!==!0))?` text-${l.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${k}${j}`}),E=r(()=>{const k={type:"checkbox"};return l.name!==void 0&&Object.assign(k,{".checked":A.value,"^checked":A.value===!0?"checked":void 0,name:l.name,value:p.value===!0?l.val:l.trueValue}),k}),F=Kt(E),X=r(()=>{const k={tabindex:$.value,role:e==="toggle"?"switch":"checkbox","aria-label":l.label,"aria-checked":y.value===!0?"mixed":A.value===!0?"true":"false"};return l.disable===!0&&(k["aria-disabled"]="true"),k});function G(k){k!==void 0&&(ee(k),s(k)),l.disable!==!0&&I("update:modelValue",te(),k)}function te(){if(p.value===!0){if(A.value===!0){const k=l.modelValue.slice();return k.splice(S.value,1),k}return l.modelValue.concat([l.val])}if(A.value===!0){if(l.toggleOrder!=="ft"||l.toggleIndeterminate===!1)return l.falseValue}else if(O.value===!0){if(l.toggleOrder==="ft"||l.toggleIndeterminate===!1)return l.trueValue}else return l.toggleOrder!=="ft"?l.trueValue:l.falseValue;return l.indeterminateValue}function ae(k){(k.keyCode===13||k.keyCode===32)&&ee(k)}function Z(k){(k.keyCode===13||k.keyCode===32)&&G(k)}const U=c(A,y);return Object.assign(o,{toggle:G}),()=>{const k=U();l.disable!==!0&&F(k,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const j=[f("div",{class:W.value,style:C.value,"aria-hidden":"true"},k)];z.value!==null&&j.push(z.value);const le=l.label!==void 0?yt(m.default,[l.label]):ul(m.default);return le!==void 0&&j.push(f("div",{class:`q-${e}__label q-anchor--skip`},le)),f("div",{ref:b,class:T.value,...X.value,onClick:G,onKeydown:ae,onKeyup:Z},j)}}const Vl=f("div",{key:"svg",class:"q-checkbox__bg absolute"},[f("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[f("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),f("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]);var Fl=ze({name:"QCheckbox",props:Ct,emits:xt,setup(e){function c(l,m){const I=r(()=>(l.value===!0?e.checkedIcon:m.value===!0?e.indeterminateIcon:e.uncheckedIcon)||null);return()=>I.value!==null?[f("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[f(ke,{class:"q-checkbox__icon",name:I.value})])]:[Vl]}return qt("checkbox",c)}}),Bl=ze({name:"QToggle",props:{...Ct,icon:String,iconColor:String},emits:xt,setup(e){function c(l,m){const I=r(()=>(l.value===!0?e.checkedIcon:m.value===!0?e.indeterminateIcon:e.uncheckedIcon)||e.icon),o=r(()=>l.value===!0?e.iconColor:null);return()=>[f("div",{class:"q-toggle__track"}),f("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},I.value!==void 0?[f(ke,{name:I.value,color:o.value})]:void 0)]}return qt("toggle",c)}});export{Ml as Q,Fl as a,Bl as b};
