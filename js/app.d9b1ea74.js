(function(){"use strict";var e={1155:function(e,t,a){var o=a(5102),n=a(9269);function l(e,t,a,o,l,r){const s=(0,n.up)("custom-form");return(0,n.wg)(),(0,n.j4)(s)}const r={class:"q-pa-md"},s={class:"q-gutter-md flex column items-center"},i={class:"first_input"},u={class:"q-pa-md",style:{"max-width":"300px"}},c={class:"row items-center justify-end"},m={class:"row items-center justify-end"},d={class:"second_input"},p={class:"q-pa-md",style:{"max-width":"300px"}},f={class:"row items-center justify-end"},v={class:"row items-center justify-end"};function w(e,t,a,o,l,w){const h=(0,n.up)("q-item-label"),b=(0,n.up)("q-btn"),g=(0,n.up)("q-date"),y=(0,n.up)("q-popup-proxy"),D=(0,n.up)("q-icon"),_=(0,n.up)("q-time"),V=(0,n.up)("q-input"),I=(0,n.up)("custom-table"),W=(0,n.Q2)("close-popup");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",r,[(0,n._)("div",s,[(0,n._)("div",i,[(0,n.Wm)(h,{class:"labels"},{default:(0,n.w5)((()=>[(0,n.Uk)("От:")])),_:1}),(0,n._)("div",u,[(0,n.Wm)(V,{filled:"",modelValue:o.fromDateString,"onUpdate:modelValue":t[2]||(t[2]=e=>o.fromDateString=e)},{prepend:(0,n.w5)((()=>[(0,n.Wm)(D,{name:"event",class:"cursor-pointer"},{default:(0,n.w5)((()=>[(0,n.Wm)(y,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,n.w5)((()=>[(0,n.Wm)(g,{modelValue:o.fromDateString,"onUpdate:modelValue":t[0]||(t[0]=e=>o.fromDateString=e),mask:"YYYY-MM-DD HH:mm:ss"},{default:(0,n.w5)((()=>[(0,n._)("div",c,[(0,n.wy)((0,n.Wm)(b,{label:"Close",color:"primary",flat:""},null,512),[[W]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),append:(0,n.w5)((()=>[(0,n.Wm)(D,{name:"access_time",class:"cursor-pointer"},{default:(0,n.w5)((()=>[(0,n.Wm)(y,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,n.w5)((()=>[(0,n.Wm)(_,{modelValue:o.fromDateString,"onUpdate:modelValue":t[1]||(t[1]=e=>o.fromDateString=e),mask:"YYYY-MM-DD HH:mm:ss","with-seconds":"",format24h:""},{default:(0,n.w5)((()=>[(0,n._)("div",m,[(0,n.wy)((0,n.Wm)(b,{label:"Close",color:"primary",flat:""},null,512),[[W]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])]),(0,n._)("div",d,[(0,n.Wm)(h,{class:"labels"},{default:(0,n.w5)((()=>[(0,n.Uk)("До:")])),_:1}),(0,n._)("div",p,[(0,n.Wm)(V,{filled:"",modelValue:o.toDateString,"onUpdate:modelValue":t[5]||(t[5]=e=>o.toDateString=e)},{prepend:(0,n.w5)((()=>[(0,n.Wm)(D,{name:"event",class:"cursor-pointer"},{default:(0,n.w5)((()=>[(0,n.Wm)(y,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,n.w5)((()=>[(0,n.Wm)(g,{modelValue:o.toDateString,"onUpdate:modelValue":t[3]||(t[3]=e=>o.toDateString=e),mask:"YYYY-MM-DD HH:mm:ss"},{default:(0,n.w5)((()=>[(0,n._)("div",f,[(0,n.wy)((0,n.Wm)(b,{label:"Close",color:"primary",flat:""},null,512),[[W]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),append:(0,n.w5)((()=>[(0,n.Wm)(D,{name:"access_time",class:"cursor-pointer"},{default:(0,n.w5)((()=>[(0,n.Wm)(y,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,n.w5)((()=>[(0,n.Wm)(_,{modelValue:o.toDateString,"onUpdate:modelValue":t[4]||(t[4]=e=>o.toDateString=e),mask:"YYYY-MM-DD HH:mm:ss","with-seconds":"",format24h:""},{default:(0,n.w5)((()=>[(0,n._)("div",v,[(0,n.wy)((0,n.Wm)(b,{label:"Close",color:"primary",flat:""},null,512),[[W]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])])]),(0,n.Wm)(b,{class:"btn",type:"submit",onClick:o.fetchRides},{default:(0,n.w5)((()=>[(0,n.Uk)("Submit")])),_:1},8,["onClick"])]),o.tableVisible?((0,n.wg)(),(0,n.j4)(I,{key:0,columns:o.columns,rows:o.rows},null,8,["columns","rows"])):(0,n.kq)("",!0)],64)}var h=a(6237),b=a(2965);function g(e,t){const a=(0,h.iH)(!1),o=(0,h.iH)({}),n=43,l="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1MCwidXNlcm5hbWUiOiJnbG90IiwiZXhwIjoxNjkyOTU2MDg4LCJlbWFpbCI6IiJ9.tmTpbDW0Da4Pezf83hXmuKjrQQXA9kKl9MVwb4gQ0oc",r=async()=>{try{const r=await b.Z.get(`https://glot.kz/api/v1/report/${n}`,{method:"GET",headers:{"Access-Control-Allow-Origin":"*",Authorization:`Bearer ${l}`},params:{type:1,from:e.value,to:t.value}});o.value=r.data,a.value=!0}catch(r){alert("Ошибка во время запроса"),a.value=!1}};return{tableVisible:a,resultOfRides:o,fetchingRides:r}}const y={class:"q-pa-md"};function D(e,t,a,o,l,r){const s=(0,n.up)("q-table"),i=(0,n.up)("custom-map");return(0,n.wg)(),(0,n.iD)("div",y,[(0,n.Wm)(s,{flat:"",bordered:"",rows:a.rows,columns:a.columns,"row-key":"Нач. дата",separator:o.separator,selection:"single",selected:o.selected,"onUpdate:selected":[t[0]||(t[0]=e=>o.selected=e),o.fetchCoordinates]},null,8,["rows","columns","separator","selected","onUpdate:selected"]),o.mapVisible?((0,n.wg)(),(0,n.j4)(i,{key:0,coords:o.toMap},null,8,["coords"])):(0,n.kq)("",!0)])}const _={class:"map-container"},V=(0,n._)("div",{id:"map",class:"map"},null,-1),I=[V];function W(e,t,a,o,l,r){return(0,n.wg)(),(0,n.iD)("div",_,I)}var k=a(6947),C=a.n(k),H={name:"custom-map",props:{coords:{type:Array}},setup(e){const t=(0,h.iH)(null),a=(0,h.iH)(null);(0,n.bv)((()=>{t.value=C().map("map").setView([42.3172,69.5915],13),C().tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(t.value),a.value=C().layerGroup().addTo(t.value),e.coords&&e.coords.length>=2&&o(e.coords)})),(0,n.YP)((()=>e.coords),(e=>{e&&e.length>=2?o(e):l()}));const o=e=>{l();const o=C().polyline(e,{color:"blue"}).addTo(a.value);t.value.fitBounds(o.getBounds())},l=()=>{a.value&&a.value.clearLayers()};return{map:t}}},M=a(7617);const O=(0,M.Z)(H,[["render",W]]);var j=O,J=a(9698),U=a.n(J);function Y(e,t){const a=(0,h.iH)(!1),o=(0,h.iH)(""),n=(0,h.iH)([]),l=43,r="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1MCwidXNlcm5hbWUiOiJnbG90IiwiZXhwIjoxNjkyOTU2MDg4LCJlbWFpbCI6IiJ9.tmTpbDW0Da4Pezf83hXmuKjrQQXA9kKl9MVwb4gQ0oc",s=async()=>{try{const s=await b.Z.get(`https://glot.kz/api/v1/route/${l}`,{method:"GET",headers:{Authorization:`Bearer ${r}`},params:{from:e.value,to:t.value}});o.value=s.data,n.value=U().decode(o.value),a.value=!0}catch(s){alert("Ошибка во время запроса"),a.value=!1}};return{mapVisible:a,decodedPolyline:n,fetchingCoordinates:s}}var Z={name:"custom-table",components:{CustomMap:j},props:{columns:{type:Array},rows:{type:Array}},setup(){const e=(0,h.iH)("cell"),t=(0,h.iH)([]),a=(0,h.iH)("14.08.2023, 08:15:05"),o=(0,h.iH)("14.05.2023, 08:43:09"),l=(0,n.Fl)((()=>{const e=a.value.split(/[\s.,:]+/),t=parseInt(e[0],10),o=parseInt(e[1],10),n=parseInt(e[2],10),l=parseInt(e[3],10),r=parseInt(e[4],10),s=parseInt(e[5],10),i=new Date(n,o-1,t,l,r,s).getTime()/1e3;return Math.floor(i)})),r=(0,n.Fl)((()=>{const e=o.value.split(/[\s.,:]+/),t=parseInt(e[0],10),a=parseInt(e[1],10),n=parseInt(e[2],10),l=parseInt(e[3],10),r=parseInt(e[4],10),s=parseInt(e[5],10),i=new Date(n,a-1,t,l,r,s).getTime()/1e3;return Math.floor(i)})),s=(0,h.iH)([]),{mapVisible:i,decodedPolyline:u,fetchingCoordinates:c}=Y(l,r),m=async()=>{t.value.length>0&&(a.value=t.value[0]["Нач. дата"],o.value=t.value[0]["Кон. дата"],await c(),s.value=u.value)};return{mapVisible:i,fetchCoordinates:m,toMap:s,selected:t,separator:e}}},Q=a(2165),T=a(1410),q=a.n(T);const x=(0,M.Z)(Z,[["render",D]]);var S=x;q()(Z,"components",{QTable:Q.Z});var A={name:"custom-form",components:{CustomTable:S},data(){return{}},setup(){const e=(0,h.iH)([]),t=(0,h.iH)([]),a=(0,h.iH)("2023-08-14 00:00:00"),o=(0,h.iH)("2023-08-14 23:59:59"),l=(0,n.Fl)((()=>{const e=new Date(a.value);return Math.floor(e/1e3)})),r=(0,n.Fl)((()=>{const e=new Date(o.value);return Math.floor(e/1e3)})),{tableVisible:s,resultOfRides:i,fetchingRides:u}=g(l,r),c=()=>{u().then((()=>{i.value&&i.value.schema&&i.value.data&&(e.value=i.value.schema.fields.map((e=>({name:e.name,label:e.name.toUpperCase(),field:e.name}))),t.value=i.value.data.map((t=>{const a={};return e.value.forEach((e=>{a[e.field]=t[e.field]})),a})))}))};return{tableVisible:s,fromDateString:a,toDateString:o,columns:e,rows:t,fetchRides:c}}},X=a(3712),P=a(6931),z=a(4633),F=a(9778),G=a(2397),L=a(570),K=a(1131),N=a(8819);const R=(0,M.Z)(A,[["render",w]]);var B=R;q()(A,"components",{QItemLabel:X.Z,QInput:P.Z,QIcon:z.Z,QPopupProxy:F.Z,QDate:G.Z,QBtn:L.Z,QTime:K.Z}),q()(A,"directives",{ClosePopup:N.Z});var E={name:"App",components:{CustomForm:B}};const $=(0,M.Z)(E,[["render",l]]);var ee=$,te=a(4478),ae={config:{},plugins:{}};const oe=(0,o.ri)(ee);oe.use(te.Z,ae).mount("#app")}},t={};function a(o){var n=t[o];if(void 0!==n)return n.exports;var l=t[o]={exports:{}};return e[o].call(l.exports,l,l.exports,a),l.exports}a.m=e,function(){var e=[];a.O=function(t,o,n,l){if(!o){var r=1/0;for(c=0;c<e.length;c++){o=e[c][0],n=e[c][1],l=e[c][2];for(var s=!0,i=0;i<o.length;i++)(!1&l||r>=l)&&Object.keys(a.O).every((function(e){return a.O[e](o[i])}))?o.splice(i--,1):(s=!1,l<r&&(r=l));if(s){e.splice(c--,1);var u=n();void 0!==u&&(t=u)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[o,n,l]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,l,r=o[0],s=o[1],i=o[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(i)var c=i(a)}for(t&&t(o);u<r.length;u++)l=r[u],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(c)},o=self["webpackChunkgps_test"]=self["webpackChunkgps_test"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(1155)}));o=a.O(o)})();
//# sourceMappingURL=app.d9b1ea74.js.map