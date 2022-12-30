(self["webpackChunkliubingao_ui"]=self["webpackChunkliubingao_ui"]||[]).push([[731],{4063:function(){},22231:function(e,t,n){"use strict";n.d(t,{m:function(){return a.m}});var a=n(9684);n(72255)},16304:function(e,t,n){"use strict";n.r(t);var a=n(67294),r=n(96089),l=n(32575),i=n(20515),c=a.memo((e=>{var t=e.demos,n=t["navigation-basic"].component,c=t["navigation-withicon"].component,o=t["navigation-activeclass"].component,u=t["navigation-click"].component;return a.createElement(a.Fragment,null,a.createElement(a.Fragment,null,a.createElement("div",{className:"markdown"},a.createElement("h1",{id:"navigation-\u5bfc\u822a"},a.createElement(r.AnchorLink,{to:"#navigation-\u5bfc\u822a","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"Navigation \u5bfc\u822a"),a.createElement("p",null,"Navigation \u5bfc\u822a"),a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},a.createElement(r.AnchorLink,{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),a.createElement("h3",{id:"\u57fa\u672c\u7528\u6cd5"},a.createElement(r.AnchorLink,{to:"#\u57fa\u672c\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u7528\u6cd5")),a.createElement(i.default,t["navigation-basic"].previewerProps,a.createElement(n,null)),a.createElement("div",{className:"markdown"},a.createElement("h3",{id:"\u5305\u542bicon\u56fe\u6807"},a.createElement(r.AnchorLink,{to:"#\u5305\u542bicon\u56fe\u6807","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u5305\u542bicon\u56fe\u6807")),a.createElement(i.default,t["navigation-withicon"].previewerProps,a.createElement(c,null)),a.createElement("div",{className:"markdown"},a.createElement("h3",{id:"\u81ea\u5b9a\u4e49\u9009\u4e2d\u6837\u5f0f-activeclass"},a.createElement(r.AnchorLink,{to:"#\u81ea\u5b9a\u4e49\u9009\u4e2d\u6837\u5f0f-activeclass","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u81ea\u5b9a\u4e49\u9009\u4e2d\u6837\u5f0f activeClass")),a.createElement(i.default,t["navigation-activeclass"].previewerProps,a.createElement(o,null)),a.createElement("div",{className:"markdown"},a.createElement("h3",{id:"\u901a\u8fc7handleclick-\u5904\u7406\u70b9\u51fb\u4e8b\u4ef6-\u56de\u4f20\u5f53\u524d\u70b9\u51fb\u7684item\u6570\u636e"},a.createElement(r.AnchorLink,{to:"#\u901a\u8fc7handleclick-\u5904\u7406\u70b9\u51fb\u4e8b\u4ef6-\u56de\u4f20\u5f53\u524d\u70b9\u51fb\u7684item\u6570\u636e","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u901a\u8fc7handleClick \u5904\u7406\u70b9\u51fb\u4e8b\u4ef6, \u56de\u4f20\u5f53\u524d\u70b9\u51fb\u7684item\u6570\u636e")),a.createElement(i.default,t["navigation-click"].previewerProps,a.createElement(u,null)),a.createElement("div",{className:"markdown"},a.createElement("h2",{id:"api"},a.createElement(r.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"API"),a.createElement(l.Z,{src:"./index.tsx",identifier:"navigation",export:"default"}))))}));t["default"]=e=>{var t=a.useContext(r.context),n=t.demos;return a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.createElement(c,{demos:n})}},32575:function(e,t,n){"use strict";var a=n(67294),r=n(96089),l=n(21934),i={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}};t["Z"]=function(e){var t=e.identifier,n=e.export,c=(0,r.useApiData)(t),o=(0,a.useContext)(r.context),u=o.locale,m=/^zh|cn$/i.test(u)?i["zh-CN"]:i["en-US"];return a.createElement(a.Fragment,null,c&&a.createElement(l.Z,null,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,m.name),a.createElement("th",null,m.description),a.createElement("th",null,m.type),a.createElement("th",null,m.default))),a.createElement("tbody",null,c[n].map((function(e){return a.createElement("tr",{key:e.identifier},a.createElement("td",null,e.identifier),a.createElement("td",null,e.description||"--"),a.createElement("td",null,a.createElement("code",null,e.type)),a.createElement("td",null,a.createElement("code",null,e.default||e.required&&m.required||"--")))})))))}},21934:function(e,t,n){"use strict";var a=n(67294),r=n(97397),l=n.n(r);n(4063);function i(e,t){return d(e)||m(e,t)||o(e,t)||c()}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){if(e){if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function m(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(a=n.next()).done);i=!0)if(l.push(a.value),t&&l.length===t)break}catch(o){c=!0,r=o}finally{try{i||null==n["return"]||n["return"]()}finally{if(c)throw r}}return l}}function d(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,n=(0,a.useRef)(),r=(0,a.useState)(!1),c=i(r,2),o=c[0],u=c[1],m=(0,a.useState)(!1),d=i(m,2),s=d[0],E=d[1];return(0,a.useEffect)((function(){var e=n.current,t=l()((function(){u(e.scrollLeft>0),E(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),a.createElement("div",{className:"__dumi-default-table"},a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":o||void 0,"data-right-folded":s||void 0},a.createElement("table",null,t)))};t["Z"]=s}}]);