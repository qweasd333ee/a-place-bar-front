import{u as s,a as n}from"./use-dark.3d62a111.js";import{h as u,l as d,t as e,K as b,v as q}from"./index.641e7fac.js";const c=["horizontal","vertical","cell","none"];var m=u({name:"QMarkupTable",props:{...s,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:a=>c.includes(a)}},setup(a,{slots:t}){const r=q(),l=n(a,r.proxy.$q),o=d(()=>`q-markup-table q-table__container q-table__card q-table--${a.separator}-separator`+(l.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(a.dense===!0?" q-table--dense":"")+(a.flat===!0?" q-table--flat":"")+(a.bordered===!0?" q-table--bordered":"")+(a.square===!0?" q-table--square":"")+(a.wrapCells===!1?" q-table--no-wrap":""));return()=>e("div",{class:o.value},[e("table",{class:"q-table"},b(t.default))])}});export{m as Q};
