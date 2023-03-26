!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["feeds/fold-comments"]=t():e["feeds/fold-comments"]=t()}(globalThis,(()=>(()=>{var e,t,o={749:(e,t,o)=>{var n=o(355)((function(e){return e[1]}));n.push([e.id,".bb-comment .fold-comment {\n  position: sticky;\n  bottom: 0;\n  height: 40px;\n  width: calc(100% + 48px);\n  font-size: 14px;\n  transform: translateX(-24px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: white;\n  color: #99a2aa;\n  cursor: pointer;\n  transition: all 0.2s ease-out;\n  z-index: 110;\n  border-radius: 4px;\n}\n.bb-comment .fold-comment:hover {\n  color: black;\n}\nbody.dark .bb-comment .fold-comment {\n  background-color: #444;\n  color: #eee;\n}\nbody.dark .bb-comment .fold-comment:hover {\n  color: var(--theme-color);\n}",""]),e.exports=n},355:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=e(t);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,o,n){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var r={};if(n)for(var c=0;c<this.length;c++){
// eslint-disable-next-line prefer-destructuring
var i=this[c][0];null!=i&&(r[i]=!0)}for(var s=0;s<e.length;s++){var a=[].concat(e[s]);n&&r[a[0]]||(o&&(a[2]?a[2]="".concat(o," and ").concat(a[2]):a[2]=o),t.push(a))}},t}},17:(e,t,o)=>{var n=o(749);n&&n.__esModule&&(n=n.default),e.exports="string"==typeof n?n:n.toString()},799:e=>{"use strict";e.exports=coreApis.componentApis.feeds.api},391:e=>{"use strict";e.exports=coreApis.observer}},n={};function r(e){var t=n[e];if(void 0!==t)return t.exports;var c=n[e]={id:e,exports:{}};return o[e](c,c.exports,r),c.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(o,n){if(1&n&&(o=this(o)),8&n)return o;if("object"==typeof o&&o){if(4&n&&o.__esModule)return o;if(16&n&&"function"==typeof o.then)return o}var c=Object.create(null);r.r(c);var i={};e=e||[null,t({}),t([]),t(t)];for(var s=2&n&&o;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>i[e]=()=>o[e]));return i.default=()=>o,r.d(c,i),c},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var c={};return(()=>{"use strict";r.d(c,{component:()=>a});const e=coreApis.componentApis.define,t=coreApis.componentApis.styledComponent,o=coreApis.utils.urls;var n=r(799);const i=coreApis.spinQuery;var s=r(391);const a=(0,e.defineComponentMetadata)({name:"foldComments",displayName:"快速收起评论",description:{"zh-CN":"动态里查看评论区时, 在底部添加一个`收起评论`按钮, 这样就不用再回到上面收起了."},urlInclude:o.feedsUrlsWithoutDetail,tags:[componentsTags.feeds],entry:(0,t.styledComponentEntry)((()=>Promise.resolve().then(r.t.bind(r,17,23))),(async()=>{const{forEachFeedsCard:e}=await Promise.resolve().then(r.t.bind(r,799,23)),{childList:t}=await Promise.resolve().then(r.t.bind(r,391,23)),o=".bb-comment";e({added:e=>(e=>{const r=async(t,n)=>{const r=await(0,i.select)((()=>dq(t,o)));if(null!==r.querySelector(".fold-comment"))return;if(null===r)return void console.error("未找到评论区");const c=document.createElement("div");c.classList.add("fold-comment"),c.innerHTML="收起评论",c.addEventListener("click",(()=>{n(),e.scrollIntoView({behavior:"smooth"})})),r.insertAdjacentElement("beforeend",c)};if("v2"!==n.feedsCardsManager.managerType)if("v1"!==n.feedsCardsManager.managerType)console.warn("unrecognized card type",e);else{const o=e.querySelector(".panel-area");if(null===o)return void console.warn("panelArea not found",e);const n=()=>{e.querySelector(".button-bar").children[1]?.click()};if(0===o.childElementCount){const[e]=t(o,(t=>{t.length>0&&(r(o,n),e.disconnect())}))}else r(o,n)}else{const t=dq(e,o),n=()=>{dq(e,".bili-dyn-action.comment")?.click()};t?r(t,n):(0,s.childListSubtree)(e,(()=>{dq(e,o)&&r(e,n)}))}})(e.element)})})),commitHash:"ac29c0ec62915c82ce0cde1e7bc8fb5768f46082",coreVersion:"2.7.0"})})(),c=c.component})()));