(()=>{"use strict";var e={404:(e,t,r)=>{r.d(t,{Z:()=>c});var o=r(81),n=r.n(o),i=r(645),a=r.n(i)()(n());a.push([e.id,'body{margin:0;width:100vw;height:100vh;display:grid;grid-template-columns:8fr 3fr}.leftSide{width:100%;grid-column:1/2;background-color:#daf5ff;padding:2%;overflow:auto;display:grid;grid-template-rows:1fr 1fr 1fr 8fr;font-family:"Roboto Serif",serif;box-sizing:border-box}.rightSide{width:100%;height:100%;grid-column:2/3;overflow:auto;display:grid;grid-template-columns:1fr;grid-template-rows:1fr;box-sizing:border-box}.rightSide video{opacity:.8;filter:brightness(50%);position:relative;grid-column:1/2;grid-row:1/3;z-index:0;width:100%;height:100%;object-fit:cover}.mainContent{color:#f8f9fa;text-align:center;box-sizing:border-box;grid-column:1/2;grid-row:1/3;z-index:1;width:100%;padding:2%;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:"Roboto Serif",serif}.date h5{color:#f8f9fa;font-size:xx-large;margin:0;letter-spacing:5px;font-family:"Roboto Serif",serif}.date p{color:#f8f9fa}.temperature{color:#ffe169;font-size:xxx-large}.inputSection{width:100%;grid-row:1/2;grid-column:1/2}.locationForm{display:flex;justify-content:center;width:100%;grid-row:1/2;grid-column:1/2;place-items:center}.locationInput{width:100%;padding:1%;border:none;border-radius:20px;grid-row:1/2;grid-column:1/2;margin:2%;transition:.2s}.locationInput:hover{background-color:#f9f9f9}.headingOne{padding-left:3%;color:#495057;margin:0;grid-row:2/3;grid-column:1/2}.highlighter{color:#212529}.week{box-sizing:border-box;width:100%;height:100%;padding-left:3%;display:grid;grid-template-rows:repeat(2, 1fr);gap:20px}.firstFourDays{box-sizing:border-box;border-radius:20px;width:100%;height:100%;grid-row:1/2;display:flex;justify-content:space-evenly;padding:2%}.card{width:20%;background-color:#6c757d;border-radius:20px;display:grid;grid-template-rows:1fr;grid-template-columns:1fr}.card video{border-radius:20px;opacity:.8;filter:brightness(50%);position:relative;grid-row:1/2;grid-column:1/2;z-index:0;width:100%;height:100%;object-fit:cover}.card div{z-index:2;width:100%;grid-row:1/2;grid-column:1/2;display:flex;flex-direction:column;align-items:center;justify-content:center}.lastThreeDays{box-sizing:border-box;border-radius:20px;padding:2%;width:100%;height:100%;grid-row:2/3;display:flex;justify-content:space-evenly}.cardDay{color:#f8f9fa}.cardTemperature{color:#ffe169;font-size:x-large}.cardDescription{color:#f8f9fa}.weekWeather{padding-left:3%;color:#495057;margin:0;text-decoration:underline}',""]);const c=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",o=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),o&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),o&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,o,n,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),n&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=n):l[4]="".concat(n)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,o=0;o<t.length;o++)if(t[o].identifier===e){r=o;break}return r}function o(e,o){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],d=o.base?s[0]+o.base:s[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var f=r(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var g=n(p,o);o.byIndex=c,t.splice(c,0,{identifier:u,updater:g,references:1})}a.push(u)}return a}function n(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,n){var i=o(e=e||[],n=n||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=r(i[a]);t[c].references--}for(var s=o(e,n),d=0;d<i.length;d++){var l=r(i[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=s}}},569:e=>{var t={};e.exports=function(e,r){var o=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var o="";r.supports&&(o+="@supports (".concat(r.supports,") {")),r.media&&(o+="@media ".concat(r.media," {"));var n=void 0!==r.layer;n&&(o+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),o+=r.css,n&&(o+="}"),r.media&&(o+="}"),r.supports&&(o+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var n=o.length-1;n>-1&&!e;)e=o[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),r.nc=void 0,(()=>{var e=r(379),t=r.n(e),o=r(795),n=r.n(o),i=r(569),a=r.n(i),c=r(565),s=r.n(c),d=r(216),l=r.n(d),u=r(589),f=r.n(u),p=r(404),g={};g.styleTagTransform=f(),g.setAttributes=s(),g.insert=a().bind(null,"head"),g.domAPI=n(),g.insertStyleElement=l(),t()(p.Z,g),p.Z&&p.Z.locals&&p.Z.locals;const m=r.p+"54a25fce6bdaa1e065e7f61e9e916ed1.mp4",h=r.p+"34b2ba748e2c535f44c8cebfe61d4f74.mp4",b=r.p+"af68c5657a5425b8056143aa325d0fb6.mp4",y=r.p+"4ba9a69c8f8979d194f094d507ac7a5f.mp4",v=r.p+"fb8f32a88fcb67c7fb963c5d0d628d4c.mp4",w=r.p+"f3a03ee7e46c6c8d9ad23e7f648d8131.mp4",x=r.p+"ca26b3b86b991b211e9500c94e15d2cf.mp4",S=r.p+"2d1409d85dc46d6203213051a921453d.mp4",T=r.p+"8e6781a088e50338e92d075474c6b347.mp4",C=r.p+"ccb948e78d79e90d9e30670dba8887f2.mp4";function k(e,t){const r=e.split(" ");if(r.length>=0)for(let e=0;e<r.length;e++){if("clear"==r[e].toString().toLowerCase()){t.src=w;break}if("cloudy"==r[e].toString().toLowerCase()){t.src=x;break}if("rain"==r[e].toString().toLowerCase()||"rain,"==r[e].toString().toLowerCase()){t.src=T;break}if("overcast"==r[e].toString().toLowerCase()){t.src=S;break}if("snow"==r[e].toString().toLowerCase()){t.src=C;break}}}const L=e=>{!function(e,t,r,o,n){for(let i=0;i<7;i++){if(0==i)e[0].innerText="Today";else if(1==i)e[1].innerText="Tomorrow";else{const t=n[i].datetime.split("-"),r=`${t[2]}-${t[1]}-${t[0]}`;e[i].innerText=r}t[i].innerText=n[i].temp,r[i].innerText=n[i].conditions,k(n[i].conditions,o[i])}}(document.querySelectorAll(".cardDay"),document.querySelectorAll(".cardTemperature"),document.querySelectorAll(".cardDescription"),document.querySelectorAll(".cardVideo"),e.days),console.log(e.days)},$=async e=>{const t=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${e}?unitGroup=metric&key=8JL7M2KVXJN3QPYPQUK4CPVEL&contentType=json`);return(e=>{document.querySelector(".temperature").innerText=e.currentConditions.temp;const t=new Date;var r;document.querySelector(".dayDate").innerText=`${r=t.getDay(),0==r?"Sun":1==r?"Mon":2==r?"Tue":3==r?"Wed":4==r?"Thu":5==r?"Fri":"Sat"}, ${t.getDate()} ${function(e){return 0==e?"Jan":1==e?"Feb":2==e?"Mar":3==e?"Apr":4==e?"May":5==e?"Jun":6==e?"Jul":7==e?"Aug":8==e?"Sep":9==e?"Oct":10==e?"Nov":"Dec"}(t.getMonth())}`,document.querySelector(".location").innerText=function(e){const t=e.split(",");return`${t[0]}, ${t[2]}`}(e.resolvedAddress),document.querySelector(".sunsetTime").innerText=`Feels like ${e.currentConditions.feelslike} . Sunset ${function(e){const t=e.split(":");return`${t[0]}:${t[1]}`}(e.currentConditions.sunset)}`,document.querySelector(".description").innerText=e.currentConditions.conditions,function(e){const t=document.querySelector(".backgroundVideo"),r=e.split(" ");if(r.length>=0)for(let e=0;e<r.length;e++){if(console.log(r[e]),"clear"==r[e].toString().toLowerCase()){t.src=m;break}if("cloudy"==r[e].toString().toLowerCase()){t.src=h;break}if("rain"==r[e].toString().toLowerCase()||"rain,"==r[e].toString().toLowerCase()){t.src=y;break}if("overcast"==r[e].toString().toLowerCase()){t.src=b;break}if("snow"==r[e].toString().toLowerCase()){t.src=v;break}}}(e.currentConditions.conditions),L(e)})(await t.json())};$();const j=document.querySelector(".locationForm");j.addEventListener("submit",(e=>{e.preventDefault();const t=document.querySelector(".locationInput");$(t.value),j.reset()}))})()})();