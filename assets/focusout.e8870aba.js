import{af as f,j as P,B as F,ag as D,t as q,ah as Q,ai as S,aj as _,l as w,N as k,a4 as $}from"./index.b6c41a35.js";import{r as m,b as G}from"./focus-manager.d6507951.js";const c=[];function M(e){return c.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function K(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return f(e)}else if(e.__qPortal===!0){const n=f(e);return n!==void 0&&n.$options.name==="QPopupProxy"?(e.hide(t),n):e}e=f(e)}while(e!=null)}function N(e,t,n){for(;n!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(n--,e.$options.name==="QMenu"){e=K(e,t);continue}e.hide(t)}e=f(e)}}function L(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function B(e,t,n,s){const a=P(!1),u=P(!1);let l=null;const d={},p=s==="dialog"&&L(e);function C(h){if(h===!0){m(d),u.value=!0;return}u.value=!1,a.value===!1&&(p===!1&&l===null&&(l=S(!1,s)),a.value=!0,c.push(e.proxy),G(d))}function g(h){if(u.value=!1,h!==!0)return;m(d),a.value=!1;const v=c.indexOf(e.proxy);v!==-1&&c.splice(v,1),l!==null&&(_(l),l=null)}return F(()=>{g(!0)}),e.proxy.__qPortal=!0,D(e.proxy,"contentEl",()=>t.value),{showPortal:C,hidePortal:g,portalIsActive:a,portalIsAccessible:u,renderPortal:()=>p===!0?n():a.value===!0?[q(Q,{to:l},n())]:void 0}}const H={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function I(e,t=()=>{},n=()=>{}){return{transitionProps:w(()=>{const s=`q-transition--${e.transitionShow||t()}`,a=`q-transition--${e.transitionHide||n()}`;return{appear:!0,enterFromClass:`${s}-enter-from`,enterActiveClass:`${s}-enter-active`,enterToClass:`${s}-enter-to`,leaveFromClass:`${a}-leave-from`,leaveActiveClass:`${a}-leave-active`,leaveToClass:`${a}-leave-to`}}),transitionStyle:w(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}const o=[];let r;function O(e){r=e.keyCode===27}function T(){r===!0&&(r=!1)}function j(e){r===!0&&(r=!1,k(e,27)===!0&&o[o.length-1](e))}function b(e){window[e]("keydown",O),window[e]("blur",T),window[e]("keyup",j),r=!1}function W(e){$.is.desktop===!0&&(o.push(e),o.length===1&&b("addEventListener"))}function U(e){const t=o.indexOf(e);t>-1&&(o.splice(t,1),o.length===0&&b("removeEventListener"))}const i=[];function E(e){i[i.length-1](e)}function z(e){$.is.desktop===!0&&(i.push(e),i.length===1&&document.body.addEventListener("focusin",E))}function J(e){const t=i.indexOf(e);t>-1&&(i.splice(t,1),i.length===0&&document.body.removeEventListener("focusin",E))}export{I as a,B as b,z as c,U as d,K as e,W as f,M as g,N as h,c as p,J as r,H as u};
