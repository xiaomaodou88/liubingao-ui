(self["webpackChunkliubingao_ui"]=self["webpackChunkliubingao_ui"]||[]).push([[67],{4063:function(){},22231:function(e,t,n){"use strict";n.d(t,{m:function(){return r.m}});var r=n(9684);n(72255)},32537:function(e,t,n){"use strict";n.r(t);var r=n(67294),l=n(96089),a=n(32575),i=n(20515),c=r.memo((e=>{var t=e.demos,n=t["progress-basic"].component;return r.createElement(r.Fragment,null,r.createElement(r.Fragment,null,r.createElement("div",{className:"markdown"},r.createElement("h1",{id:"progress-\u767e\u5206\u6bd4"},r.createElement(l.AnchorLink,{to:"#progress-\u767e\u5206\u6bd4","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"Progress \u767e\u5206\u6bd4"),r.createElement("p",null,"Progress \u767e\u5206\u6bd4\u3002"),r.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},r.createElement(l.AnchorLink,{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),r.createElement("h3",{id:"\u57fa\u672c\u7528\u6cd5"},r.createElement(l.AnchorLink,{to:"#\u57fa\u672c\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u7528\u6cd5")),r.createElement(i.default,t["progress-basic"].previewerProps,r.createElement(n,null)),r.createElement("div",{className:"markdown"},r.createElement("h2",{id:"api"},r.createElement(l.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"API"),r.createElement(a.Z,{src:"./index.tsx",identifier:"progress",export:"default"}))))}));t["default"]=e=>{var t=r.useContext(l.context),n=t.demos;return r.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.createElement(c,{demos:n})}},32575:function(e,t,n){"use strict";var r=n(67294),l=n(96089),a=n(21934),i={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}};t["Z"]=function(e){var t=e.identifier,n=e.export,c=(0,l.useApiData)(t),o=(0,r.useContext)(l.context),u=o.locale,s=/^zh|cn$/i.test(u)?i["zh-CN"]:i["en-US"];return r.createElement(r.Fragment,null,c&&r.createElement(a.Z,null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,s.name),r.createElement("th",null,s.description),r.createElement("th",null,s.type),r.createElement("th",null,s.default))),r.createElement("tbody",null,c[n].map((function(e){return r.createElement("tr",{key:e.identifier},r.createElement("td",null,e.identifier),r.createElement("td",null,e.description||"--"),r.createElement("td",null,r.createElement("code",null,e.type)),r.createElement("td",null,r.createElement("code",null,e.default||e.required&&s.required||"--")))})))))}},21934:function(e,t,n){"use strict";var r=n(67294),l=n(97397),a=n.n(l);n(4063);function i(e,t){return d(e)||s(e,t)||o(e,t)||c()}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){if(e){if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done);i=!0)if(a.push(r.value),t&&a.length===t)break}catch(o){c=!0,l=o}finally{try{i||null==n["return"]||n["return"]()}finally{if(c)throw l}}return a}}function d(e){if(Array.isArray(e))return e}var m=function(e){var t=e.children,n=(0,r.useRef)(),l=(0,r.useState)(!1),c=i(l,2),o=c[0],u=c[1],s=(0,r.useState)(!1),d=i(s,2),m=d[0],f=d[1];return(0,r.useEffect)((function(){var e=n.current,t=a()((function(){u(e.scrollLeft>0),f(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),r.createElement("div",{className:"__dumi-default-table"},r.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":o||void 0,"data-right-folded":m||void 0},r.createElement("table",null,t)))};t["Z"]=m}}]);