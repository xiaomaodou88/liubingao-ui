(self["webpackChunkliubingao_ui"]=self["webpackChunkliubingao_ui"]||[]).push([[315],{8036:function(){},2231:function(e,t,n){"use strict";n.d(t,{m:function(){return r.m}});var r=n(9684);n(2255)},5788:function(e,t,n){"use strict";n.r(t);var r=n(7294),a=n(6089),l=n(805),i=n(7289),c=r.memo((e=>{var t=e.demos,n=t["personalinfocard-basic"].component,c=t["personalinfocard-withavatar"].component;return r.createElement(r.Fragment,null,r.createElement(r.Fragment,null,r.createElement("div",{className:"markdown"},r.createElement("h1",{id:"personalinfocard-\u7528\u6237\u4fe1\u606f"},r.createElement(a.AnchorLink,{to:"#personalinfocard-\u7528\u6237\u4fe1\u606f","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"PersonalInfoCard \u7528\u6237\u4fe1\u606f"),r.createElement("p",null,"PersonalInfoCard \u7528\u4e8e\u5c55\u793a\u7528\u6237\u4fe1\u606f\u7684\u5361\u7247"),r.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},r.createElement(a.AnchorLink,{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),r.createElement("h3",{id:"\u57fa\u672c\u7528\u6cd5"},r.createElement(a.AnchorLink,{to:"#\u57fa\u672c\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u7528\u6cd5"),r.createElement("p",null,"\u5f53\u5934\u50cfurl\u4e3a\u7a7a\u65f6\u5c55\u793ausername\u7684\u7b2c\u4e00\u4e2a\u5b57 width\u9ed8\u8ba4\u4e3a450")),r.createElement(i.default,t["personalinfocard-basic"].previewerProps,r.createElement(n,null)),r.createElement("div",{className:"markdown"},r.createElement("h3",{id:"\u8bbe\u7f6e\u5bbd\u5ea6--\u5c55\u793a\u5934\u50cf"},r.createElement(a.AnchorLink,{to:"#\u8bbe\u7f6e\u5bbd\u5ea6--\u5c55\u793a\u5934\u50cf","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"\u8bbe\u7f6e\u5bbd\u5ea6 && \u5c55\u793a\u5934\u50cf"),r.createElement("p",null,"width\u5c5e\u6027\u4f20\u5165\u5bbd\u5ea6")),r.createElement(i.default,t["personalinfocard-withavatar"].previewerProps,r.createElement(c,null)),r.createElement("div",{className:"markdown"},r.createElement("h2",{id:"api"},r.createElement(a.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"API"),r.createElement(l.Z,{src:"./index.tsx",identifier:"personalInfoCard",export:"default"}))))}));t["default"]=e=>{var t=r.useContext(a.context),n=t.demos;return r.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.createElement(c,{demos:n})}},805:function(e,t,n){"use strict";var r=n(7294),a=n(6089),l=n(4187),i={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}};t["Z"]=function(e){var t=e.identifier,n=e.export,c=(0,a.useApiData)(t),o=(0,r.useContext)(a.context),u=o.locale,d=/^zh|cn$/i.test(u)?i["zh-CN"]:i["en-US"];return r.createElement(r.Fragment,null,c&&r.createElement(l.Z,null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,d.name),r.createElement("th",null,d.description),r.createElement("th",null,d.type),r.createElement("th",null,d.default))),r.createElement("tbody",null,c[n].map((function(e){return r.createElement("tr",{key:e.identifier},r.createElement("td",null,e.identifier),r.createElement("td",null,e.description||"--"),r.createElement("td",null,r.createElement("code",null,e.type)),r.createElement("td",null,r.createElement("code",null,e.default||e.required&&d.required||"--")))})))))}},4187:function(e,t,n){"use strict";var r=n(7294),a=n(7397),l=n.n(a);n(8036);function i(e,t){return s(e)||d(e,t)||o(e,t)||c()}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){if(e){if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done);i=!0)if(l.push(r.value),t&&l.length===t)break}catch(o){c=!0,a=o}finally{try{i||null==n["return"]||n["return"]()}finally{if(c)throw a}}return l}}function s(e){if(Array.isArray(e))return e}var m=function(e){var t=e.children,n=(0,r.useRef)(),a=(0,r.useState)(!1),c=i(a,2),o=c[0],u=c[1],d=(0,r.useState)(!1),s=i(d,2),m=s[0],f=s[1];return(0,r.useEffect)((function(){var e=n.current,t=l()((function(){u(e.scrollLeft>0),f(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),r.createElement("div",{className:"__dumi-default-table"},r.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":o||void 0,"data-right-folded":m||void 0},r.createElement("table",null,t)))};t["Z"]=m}}]);