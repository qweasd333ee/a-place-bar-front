import{h as r,l as n,t as i,K as c,L as T,M as x,j as b,N as E,O as w,P as K,v as S}from"./index.641e7fac.js";import{u as I,a as R}from"./use-dark.3d62a111.js";var $=r({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:a}){const l=n(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>i("div",{class:l.value},c(a.default))}}),A=r({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:a}){const l=n(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>i("div",{class:l.value},c(a.default))}}),D=r({name:"QItem",props:{...I,...T,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:a,emit:l}){const{proxy:{$q:v}}=S(),q=R(e,v),{hasLink:m,linkAttrs:k,linkClass:h,linkTag:y,navigateOnClick:_}=x(),s=b(null),o=b(null),d=n(()=>e.clickable===!0||m.value===!0||e.tag==="label"),u=n(()=>e.disable!==!0&&d.value===!0),g=n(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(q.value===!0?" q-item--dark":"")+(m.value===!0&&e.active===null?h.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(u.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),B=n(()=>{if(e.insetLevel===void 0)return null;const t=v.lang.rtl===!0?"Right":"Left";return{["padding"+t]:16+e.insetLevel*56+"px"}});function C(t){u.value===!0&&(o.value!==null&&(t.qKeyEvent!==!0&&document.activeElement===s.value?o.value.focus():document.activeElement===o.value&&s.value.focus()),_(t))}function Q(t){if(u.value===!0&&E(t,13)===!0){w(t),t.qKeyEvent=!0;const f=new MouseEvent("click",t);f.qKeyEvent=!0,s.value.dispatchEvent(f)}l("keyup",t)}function L(){const t=K(a.default,[]);return u.value===!0&&t.unshift(i("div",{class:"q-focus-helper",tabindex:-1,ref:o})),t}return()=>{const t={ref:s,class:g.value,style:B.value,role:"listitem",onClick:C,onKeyup:Q};return u.value===!0?(t.tabindex=e.tabindex||"0",Object.assign(t,k.value)):d.value===!0&&(t["aria-disabled"]="true"),i(y.value,t,L())}}}),N=r({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:a}){const l=n(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>i("div",{class:l.value,role:"toolbar"},c(a.default))}});export{N as Q,$ as a,D as b,A as c};
