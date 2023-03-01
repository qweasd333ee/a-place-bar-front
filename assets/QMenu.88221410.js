import{j as T,N as xe,a1 as j,X as be,a2 as N,m as y,A as ye,q as P,v as Z,a3 as pe,T as q,a4 as Te,h as we,l as b,a5 as Ce,t as Q,K as ke,a6 as Ee,a7 as Se,O as He}from"./index.185c82ca.js";import{c as Me}from"./selection.e209529a.js";import{i as qe,u as We,d as Pe,e as Le,g as Oe}from"./use-prevent-scroll.d5d80de6.js";import{u as Be,a as Ae}from"./use-dark.797c398c.js";import{p as V,u as ze,a as Fe,b as $e,c as Re,r as Ke,d as I,e as De,f as je}from"./focusout.22c22ce8.js";import{u as Ne}from"./use-tick.ea16243a.js";import{u as Qe}from"./use-timeout.12b9671f.js";import{a as Ve}from"./focus-manager.d6507951.js";const Ie={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function Xe({showing:e,avoidEmit:o,configureAnchorEl:i}){const{props:t,proxy:l,emit:c}=Z(),n=T(null);let d=null;function f(a){return n.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const r={};i===void 0&&(Object.assign(r,{hide(a){l.hide(a)},toggle(a){l.toggle(a),a.qAnchorHandled=!0},toggleKey(a){xe(a,13)===!0&&r.toggle(a)},contextClick(a){l.hide(a),j(a),be(()=>{l.show(a),a.qAnchorHandled=!0})},prevent:j,mobileTouch(a){if(r.mobileCleanup(a),f(a)!==!0)return;l.hide(a),n.value.classList.add("non-selectable");const h=a.target;N(r,"anchor",[[h,"touchmove","mobileCleanup","passive"],[h,"touchend","mobileCleanup","passive"],[h,"touchcancel","mobileCleanup","passive"],[n.value,"contextmenu","prevent","notPassive"]]),d=setTimeout(()=>{d=null,l.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){n.value.classList.remove("non-selectable"),d!==null&&(clearTimeout(d),d=null),e.value===!0&&a!==void 0&&Me()}}),i=function(a=t.contextMenu){if(t.noParentEvent===!0||n.value===null)return;let h;a===!0?l.$q.platform.is.mobile===!0?h=[[n.value,"touchstart","mobileTouch","passive"]]:h=[[n.value,"mousedown","hide","passive"],[n.value,"contextmenu","contextClick","notPassive"]]:h=[[n.value,"click","toggle","passive"],[n.value,"keyup","toggleKey","passive"]],N(r,"anchor",h)});function s(){pe(r,"anchor")}function m(a){for(n.value=a;n.value.classList.contains("q-anchor--skip");)n.value=n.value.parentNode;i()}function v(){if(t.target===!1||t.target===""||l.$el.parentNode===null)n.value=null;else if(t.target===!0)m(l.$el.parentNode);else{let a=t.target;if(typeof t.target=="string")try{a=document.querySelector(t.target)}catch{a=void 0}a!=null?(n.value=a.$el||a,i()):(n.value=null,console.error(`Anchor: target "${t.target}" not found`))}}return y(()=>t.contextMenu,a=>{n.value!==null&&(s(),i(a))}),y(()=>t.target,()=>{n.value!==null&&s(),v()}),y(()=>t.noParentEvent,a=>{n.value!==null&&(a===!0?s():i())}),ye(()=>{v(),o!==!0&&t.modelValue===!0&&n.value===null&&c("update:modelValue",!1)}),P(()=>{d!==null&&clearTimeout(d),s()}),{anchorEl:n,canShow:f,anchorEvents:r}}function Ye(e,o){const i=T(null);let t;function l(d,f){const r=`${f!==void 0?"add":"remove"}EventListener`,s=f!==void 0?f:t;d!==window&&d[r]("scroll",s,q.passive),window[r]("scroll",s,q.passive),t=f}function c(){i.value!==null&&(l(i.value),i.value=null)}const n=y(()=>e.noParentEvent,()=>{i.value!==null&&(c(),o())});return P(n),{localScrollTarget:i,unconfigureScrollTarget:c,changeScrollEvent:l}}const{notPassiveCapture:w}=q,g=[];function C(e){const o=e.target;if(o===void 0||o.nodeType===8||o.classList.contains("no-pointer-events")===!0)return;let i=V.length-1;for(;i>=0;){const t=V[i].$;if(t.type.name!=="QDialog")break;if(t.props.seamless!==!0)return;i--}for(let t=g.length-1;t>=0;t--){const l=g[t];if((l.anchorEl.value===null||l.anchorEl.value.contains(o)===!1)&&(o===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(o)===!1))e.qClickOutside=!0,l.onClickOutside(e);else return}}function _e(e){g.push(e),g.length===1&&(document.addEventListener("mousedown",C,w),document.addEventListener("touchstart",C,w))}function X(e){const o=g.findIndex(i=>i===e);o>-1&&(g.splice(o,1),g.length===0&&(document.removeEventListener("mousedown",C,w),document.removeEventListener("touchstart",C,w)))}let Y,_;function U(e){const o=e.split(" ");return o.length!==2?!1:["top","center","bottom"].includes(o[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(o[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Ue(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const W={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{W[`${e}#ltr`]=e,W[`${e}#rtl`]=e});function G(e,o){const i=e.split(" ");return{vertical:i[0],horizontal:W[`${i[1]}#${o===!0?"rtl":"ltr"}`]}}function Ge(e,o){let{top:i,left:t,right:l,bottom:c,width:n,height:d}=e.getBoundingClientRect();return o!==void 0&&(i-=o[1],t-=o[0],c+=o[1],l+=o[0],n+=o[0],d+=o[1]),{top:i,bottom:c,height:d,left:t,right:l,width:n,middle:t+(l-t)/2,center:i+(c-i)/2}}function Je(e,o,i){let{top:t,left:l}=e.getBoundingClientRect();return t+=o.top,l+=o.left,i!==void 0&&(t+=i[1],l+=i[0]),{top:t,bottom:t+1,height:1,left:l,right:l+1,width:1,middle:l,center:t}}function Ze(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function J(e,o,i){return{top:e[i.anchorOrigin.vertical]-o[i.selfOrigin.vertical],left:e[i.anchorOrigin.horizontal]-o[i.selfOrigin.horizontal]}}function et(e){if(Te.is.ios===!0&&window.visualViewport!==void 0){const d=document.body.style,{offsetLeft:f,offsetTop:r}=window.visualViewport;f!==Y&&(d.setProperty("--q-pe-left",f+"px"),Y=f),r!==_&&(d.setProperty("--q-pe-top",r+"px"),_=r)}const{scrollLeft:o,scrollTop:i}=e.el,t=e.absoluteOffset===void 0?Ge(e.anchorEl,e.cover===!0?[0,0]:e.offset):Je(e.anchorEl,e.absoluteOffset,e.offset);let l={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(l.minWidth=t.width+"px",e.cover===!0&&(l.minHeight=t.height+"px")),Object.assign(e.el.style,l);const c=Ze(e.el);let n=J(t,c,e);if(e.absoluteOffset===void 0||e.offset===void 0)M(n,t,c,e.anchorOrigin,e.selfOrigin);else{const{top:d,left:f}=n;M(n,t,c,e.anchorOrigin,e.selfOrigin);let r=!1;if(n.top!==d){r=!0;const s=2*e.offset[1];t.center=t.top-=s,t.bottom-=s+2}if(n.left!==f){r=!0;const s=2*e.offset[0];t.middle=t.left-=s,t.right-=s+2}r===!0&&(n=J(t,c,e),M(n,t,c,e.anchorOrigin,e.selfOrigin))}l={top:n.top+"px",left:n.left+"px"},n.maxHeight!==void 0&&(l.maxHeight=n.maxHeight+"px",t.height>n.maxHeight&&(l.minHeight=l.maxHeight)),n.maxWidth!==void 0&&(l.maxWidth=n.maxWidth+"px",t.width>n.maxWidth&&(l.minWidth=l.maxWidth)),Object.assign(e.el.style,l),e.el.scrollTop!==i&&(e.el.scrollTop=i),e.el.scrollLeft!==o&&(e.el.scrollLeft=o)}function M(e,o,i,t,l){const c=i.bottom,n=i.right,d=qe(),f=window.innerHeight-d,r=document.body.clientWidth;if(e.top<0||e.top+c>f)if(l.vertical==="center")e.top=o[t.vertical]>f/2?Math.max(0,f-c):0,e.maxHeight=Math.min(c,f);else if(o[t.vertical]>f/2){const s=Math.min(f,t.vertical==="center"?o.center:t.vertical===l.vertical?o.bottom:o.top);e.maxHeight=Math.min(c,s),e.top=Math.max(0,s-c)}else e.top=Math.max(0,t.vertical==="center"?o.center:t.vertical===l.vertical?o.top:o.bottom),e.maxHeight=Math.min(c,f-e.top);if(e.left<0||e.left+n>r)if(e.maxWidth=Math.min(n,r),l.horizontal==="middle")e.left=o[t.horizontal]>r/2?Math.max(0,r-n):0;else if(o[t.horizontal]>r/2){const s=Math.min(r,t.horizontal==="middle"?o.middle:t.horizontal===l.horizontal?o.right:o.left);e.maxWidth=Math.min(n,s),e.left=Math.max(0,s-e.maxWidth)}else e.left=Math.max(0,t.horizontal==="middle"?o.middle:t.horizontal===l.horizontal?o.left:o.right),e.maxWidth=Math.min(n,r-e.left)}var st=we({name:"QMenu",inheritAttrs:!1,props:{...Ie,...We,...Be,...ze,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:U},self:{type:String,validator:U},offset:{type:Array,validator:Ue},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Pe,"click","escapeKey"],setup(e,{slots:o,emit:i,attrs:t}){let l=null,c,n,d;const f=Z(),{proxy:r}=f,{$q:s}=r,m=T(null),v=T(!1),a=b(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),h=Ae(e,s),{registerTick:ee,removeTick:te}=Ne(),{registerTimeout:L}=Qe(),{transitionProps:oe,transitionStyle:ne}=Fe(e),{localScrollTarget:O,changeScrollEvent:le,unconfigureScrollTarget:ie}=Ye(e,K),{anchorEl:x,canShow:ae}=Xe({showing:v}),{hide:B}=Le({showing:v,canShow:ae,handleShow:de,handleHide:fe,hideOnRouteChange:a,processOnMount:!0}),{showPortal:A,hidePortal:z,renderPortal:ue}=$e(f,m,me,"menu"),k={anchorEl:x,innerRef:m,onClickOutside(u){if(e.persistent!==!0&&v.value===!0)return B(u),(u.type==="touchstart"||u.target.classList.contains("q-dialog__backdrop"))&&He(u),!0}},F=b(()=>G(e.anchor||(e.cover===!0?"center middle":"bottom start"),s.lang.rtl)),re=b(()=>e.cover===!0?F.value:G(e.self||"top start",s.lang.rtl)),se=b(()=>(e.square===!0?" q-menu--square":"")+(h.value===!0?" q-menu--dark q-dark":"")),ce=b(()=>e.autoClose===!0?{onClick:he}:{}),$=b(()=>v.value===!0&&e.persistent!==!0);y($,u=>{u===!0?(je(S),_e(k)):(I(S),X(k))});function E(){Ve(()=>{let u=m.value;u&&u.contains(document.activeElement)!==!0&&(u=u.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||u.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||u.querySelector("[autofocus], [data-autofocus]")||u,u.focus({preventScroll:!0}))})}function de(u){if(l=e.noRefocus===!1?document.activeElement:null,Re(D),A(),K(),c=void 0,u!==void 0&&(e.touchPosition||e.contextMenu)){const H=Ce(u);if(H.left!==void 0){const{top:ve,left:ge}=x.value.getBoundingClientRect();c={left:H.left-ge,top:H.top-ve}}}n===void 0&&(n=y(()=>s.screen.width+"|"+s.screen.height+"|"+e.self+"|"+e.anchor+"|"+s.lang.rtl,p)),e.noFocus!==!0&&document.activeElement.blur(),ee(()=>{p(),e.noFocus!==!0&&E()}),L(()=>{s.platform.is.ios===!0&&(d=e.autoClose,m.value.click()),p(),A(!0),i("show",u)},e.transitionDuration)}function fe(u){te(),z(),R(!0),l!==null&&(u===void 0||u.qClickOutside!==!0)&&(((u&&u.type.indexOf("key")===0?l.closest('[tabindex]:not([tabindex^="-"])'):void 0)||l).focus(),l=null),L(()=>{z(!0),i("hide",u)},e.transitionDuration)}function R(u){c=void 0,n!==void 0&&(n(),n=void 0),(u===!0||v.value===!0)&&(Ke(D),ie(),X(k),I(S)),u!==!0&&(l=null)}function K(){(x.value!==null||e.scrollTarget!==void 0)&&(O.value=Oe(x.value,e.scrollTarget),le(O.value,p))}function he(u){d!==!0?(De(r,u),i("click",u)):d=!1}function D(u){$.value===!0&&e.noFocus!==!0&&Se(m.value,u.target)!==!0&&E()}function S(u){i("escapeKey"),B(u)}function p(){const u=m.value;u===null||x.value===null||et({el:u,offset:e.offset,anchorEl:x.value,anchorOrigin:F.value,selfOrigin:re.value,absoluteOffset:c,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function me(){return Q(Ee,oe.value,()=>v.value===!0?Q("div",{role:"menu",...t,ref:m,tabindex:-1,class:["q-menu q-position-engine scroll"+se.value,t.class],style:[t.style,ne.value],...ce.value},ke(o.default)):null)}return P(R),Object.assign(r,{focus:E,updatePosition:p}),ue}});export{st as Q,Xe as a,Ie as u};
