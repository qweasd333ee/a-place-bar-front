import{a9 as s,N as d}from"./index.b944b107.js";import{g as a,h as i}from"./focusout.59e4dce0.js";function n(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}var u=s({name:"close-popup",beforeMount(e,{value:t}){const o={depth:n(t),handler(r){o.depth!==0&&setTimeout(()=>{const p=a(e);p!==void 0&&i(p,r,o.depth)})},handlerKey(r){d(r,13)===!0&&o.handler(r)}};e.__qclosepopup=o,e.addEventListener("click",o.handler),e.addEventListener("keyup",o.handlerKey)},updated(e,{value:t,oldValue:o}){t!==o&&(e.__qclosepopup.depth=n(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}});export{u as C};
