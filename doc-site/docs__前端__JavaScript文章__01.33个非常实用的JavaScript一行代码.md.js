(self["webpackChunkliubingao_ui"]=self["webpackChunkliubingao_ui"]||[]).push([[6331],{90718:function(e,n,t){"use strict";t.r(n);var a=t(67294),c=t(96089),r=t(65659),l=a.memo((e=>{e.demos;return a.createElement(a.Fragment,null,a.createElement("div",{className:"markdown"},a.createElement("h2",{id:"\u4e00\u65e5\u671f\u5904\u7406"},a.createElement(c.AnchorLink,{to:"#\u4e00\u65e5\u671f\u5904\u7406","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u4e00\u3001\u65e5\u671f\u5904\u7406"),a.createElement("h3",{id:"1-\u68c0\u5bdf\u65e5\u671f\u662f\u5426\u6709\u6548"},a.createElement(c.AnchorLink,{to:"#1-\u68c0\u5bdf\u65e5\u671f\u662f\u5426\u6709\u6548","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"1. \u68c0\u5bdf\u65e5\u671f\u662f\u5426\u6709\u6548"),a.createElement("p",null,"\u8be5\u65b9\u6cd5\u7528\u4e8e\u68c0\u6d4b\u7ed9\u51fa\u7684\u65e5\u671f\u662f\u5426\u6709\u6548\uff1a"),a.createElement(r.Z,{code:'const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());\n\nisDateValid("December 17, 1995 03:24:00");  // true\n\u590d\u5236\u4ee3\u7801',lang:"javascript"}),a.createElement("h3",{id:"2-\u8ba1\u7b97\u4e24\u4e2a\u65e5\u671f\u4e4b\u95f4\u7684\u95f4\u9694"},a.createElement(c.AnchorLink,{to:"#2-\u8ba1\u7b97\u4e24\u4e2a\u65e5\u671f\u4e4b\u95f4\u7684\u95f4\u9694","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"2. \u8ba1\u7b97\u4e24\u4e2a\u65e5\u671f\u4e4b\u95f4\u7684\u95f4\u9694"),a.createElement("p",null,"\u8be5\u65b9\u6cd5\u7528\u4e8e\u8ba1\u7b97\u4e24\u4e2a\u65e5\u671f\u4e4b\u95f4\u7684\u95f4\u9694\u65f6\u95f4\uff1a"),a.createElement(r.Z,{code:'const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)\n\ndayDif(new Date("2021-11-3"), new Date("2022-2-1"))  // 90\n\u590d\u5236\u4ee3\u7801',lang:"javascript"}),a.createElement("p",null,"\u8ddd\u79bb\u8fc7\u5e74\u8fd8\u670990\u5929~"),a.createElement("h3",{id:"3-\u67e5\u627e\u65e5\u671f\u4f4d\u4e8e\u4e00\u5e74\u4e2d\u7684\u7b2c\u51e0\u5929"},a.createElement(c.AnchorLink,{to:"#3-\u67e5\u627e\u65e5\u671f\u4f4d\u4e8e\u4e00\u5e74\u4e2d\u7684\u7b2c\u51e0\u5929","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"3. \u67e5\u627e\u65e5\u671f\u4f4d\u4e8e\u4e00\u5e74\u4e2d\u7684\u7b2c\u51e0\u5929"),a.createElement("p",null,"\u8be5\u65b9\u6cd5\u7528\u4e8e\u68c0\u6d4b\u7ed9\u51fa\u7684\u65e5\u671f\u4f4d\u4e8e\u4eca\u5e74\u7684\u7b2c\u51e0\u5929\uff1a"),a.createElement(r.Z,{code:"const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);\n\ndayOfYear(new Date());   // 307\n\u590d\u5236\u4ee3\u7801",lang:"javascript"}),a.createElement("p",null,"2021\u5e74\u5df2\u7ecf\u8fc7\u53bb300\u591a\u5929\u4e86~"),a.createElement("h3",{id:"4-\u65f6\u95f4\u683c\u5f0f\u5316"},a.createElement(c.AnchorLink,{to:"#4-\u65f6\u95f4\u683c\u5f0f\u5316","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"4. \u65f6\u95f4\u683c\u5f0f\u5316"),a.createElement("p",null,"\u8be5\u65b9\u6cd5\u53ef\u4ee5\u7528\u4e8e\u5c06\u65f6\u95f4\u8f6c\u5316\u4e3ahour:minutes:seconds\u7684\u683c\u5f0f\uff1a"),a.createElement(r.Z,{code:"const timeFromDate = date => date.toTimeString().slice(0, 8);\n\ntimeFromDate(new Date(2021, 11, 2, 12, 30, 0));  // 12:30:00\ntimeFromDate(new Date());  // \u8fd4\u56de\u5f53\u524d\u65f6\u95f4 09:00:00\n\u590d\u5236\u4ee3\u7801",lang:"javascript"}),a.createElement("h2",{id:"\u4e8c\u5b57\u7b26\u4e32\u5904\u7406"},a.createElement(c.AnchorLink,{to:"#\u4e8c\u5b57\u7b26\u4e32\u5904\u7406","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u4e8c\u3001\u5b57\u7b26\u4e32\u5904\u7406"),a.createElement("h3",{id:"1-\u5b57\u7b26\u4e32\u9996\u5b57\u6bcd\u5927\u5199"},a.createElement(c.AnchorLink,{to:"#1-\u5b57\u7b26\u4e32\u9996\u5b57\u6bcd\u5927\u5199","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"1. \u5b57\u7b26\u4e32\u9996\u5b57\u6bcd\u5927\u5199"),a.createElement("p",null,"\u8be5\u65b9\u6cd5\u7528\u4e8e\u5c06\u82f1\u6587\u5b57\u7b26\u4e32\u7684\u9996\u5b57\u6bcd\u5927\u5199\u5904\u7406\uff1a"),a.createElement(r.Z,{code:'const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)\n\ncapitalize("hello world")  // Hello world\n\u590d\u5236\u4ee3\u7801',lang:"javascript"}),a.createElement("h3",{id:"2-\u7ffb\u8f6c\u5b57\u7b26\u4e32"},a.createElement(c.AnchorLink,{to:"#2-\u7ffb\u8f6c\u5b57\u7b26\u4e32","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"2. \u7ffb\u8f6c\u5b57\u7b26\u4e32"),a.createElement("p",null,"\u8be5\u65b9\u6cd5\u7528\u4e8e\u5c06\u4e00\u4e2a\u5b57\u7b26\u4e32\u8fdb\u884c\u7ffb\u8f6c\u64cd\u4f5c\uff0c\u8fd4\u56de\u7ffb\u8f6c\u540e\u7684\u5b57\u7b26\u4e32\uff1a"),a.createElement(r.Z,{code:"const reverse = str => str.split('').reverse().join('');\n\nreverse('hello world');   // 'dlrow olleh'\n\u590d\u5236\u4ee3\u7801",lang:"javascript"}),a.createElement("h3",{id:"3-\u968f\u673a\u5b57\u7b26\u4e32"},a.createElement(c.AnchorLink,{to:"#3-\u968f\u673a\u5b57\u7b26\u4e32","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"3. \u968f\u673a\u5b57\u7b26\u4e32"),a.createElement("p",null,"\u8be5\u65b9\u6cd5\u7528\u4e8e\u751f\u6210\u4e00\u4e2a\u968f\u673a\u7684\u5b57\u7b26\u4e32\uff1a"),a.createElement(r.Z,{code:"const randomString = () => Math.random().toString(36).slice(2);\n\nrandomString();\n\u590d\u5236\u4ee3\u7801",lang:"javascript"}),a.createElement("h3",{id:"4-\u622a\u65ad\u5b57\u7b26\u4e32"},a.createElement(c.AnchorLink,{to:"#4-\u622a\u65ad\u5b57\u7b26\u4e32","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"4. \u622a\u65ad\u5b57\u7b26\u4e32"),a.createElement("p",null,"\u8be5\u65b9\u6cd5\u53ef\u4ee5\u4ece\u6307\u5b9a\u957f\u5ea6\u5904\u622a\u65ad\u5b57\u7b26\u4e32:"),a.createElement(r.Z,{code:"const truncateString = (string, length) => string.length < length ? string : `${string.slice(0, length - 3)}...`;\n\ntruncateString('Hi, I should be truncated because I am too loooong!', 36)   // 'Hi, I should be truncated because...'\n\u590d\u5236\u4ee3\u7801",lang:"javascript"}),a.createElement("h3",{id:"5-\u53bb\u9664\u5b57\u7b26\u4e32\u4e2d\u7684html"},a.createElement(c.AnchorLink,{to:"#5-\u53bb\u9664\u5b57\u7b26\u4e32\u4e2d\u7684html","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"5. \u53bb\u9664\u5b57\u7b26\u4e32\u4e2d\u7684HTML"),a.createElement("p",null,"\u8be5\u65b9\u6cd5\u7528\u4e8e\u53bb\u9664\u5b57\u7b26\u4e32\u4e2d\u7684HTML\u5143\u7d20\uff1a"),a.createElement(r.Z,{code:"const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';\n\u590d\u5236\u4ee3\u7801",lang:"javascript"}),a.createElement("h2",{id:"\u4e09\u6570\u7ec4\u5904\u7406"},a.createElement(c.AnchorLink,{to:"#\u4e09\u6570\u7ec4\u5904\u7406","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u4e09\u3001\u6570\u7ec4\u5904\u7406"),a.createElement("h3",{id:"1-\u4ece\u6570\u7ec4\u4e2d\u79fb\u9664\u91cd\u590d\u9879"},a.createElement(c.AnchorLink,{to:"#1-\u4ece\u6570\u7ec4\u4e2d\u79fb\u9664\u91cd\u590d\u9879","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"1. \u4ece\u6570\u7ec4\u4e2d\u79fb\u9664\u91cd\u590d\u9879"),a.createElement("p",null,"\u8be5\u65b9\u6cd5\u7528\u4e8e\u79fb\u9664\u6570\u7ec4\u4e2d\u7684\u91cd\u590d\u9879\uff1a"),a.createElement(r.Z,{code:"const removeDuplicates = (arr) => [...new Set(arr)];\n\nconsole.log(removeDuplicates([1, 2, 2, 3, 3, 4, 4, 5, 5, 6]));\n\u590d\u5236\u4ee3\u7801",lang:"javascript"}),a.createElement("h3",{id:"2-\u5224\u65ad\u6570\u7ec4\u662f\u5426\u4e3a\u7a7a"},a.createElement(c.AnchorLink,{to:"#2-\u5224\u65ad\u6570\u7ec4\u662f\u5426\u4e3a\u7a7a","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"2. \u5224\u65ad\u6570\u7ec4\u662f\u5426\u4e3a\u7a7a"),a.createElement("p",null,"\u8be5\u65b9\u6cd5\u7528\u4e8e\u5224\u65ad\u4e00\u4e2a\u6570\u7ec4\u662f\u5426\u4e3a\u7a7a\u6570\u7ec4\uff0c\u5b83\u5c06\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\uff1a"),a.createElement(r.Z,{code:"const isNotEmpty = arr => Array.isArray(arr) && arr.length > 0;\n\nisNotEmpty([1, 2, 3]);  // true\n\u590d\u5236\u4ee3\u7801",lang:"javascript"}),a.createElement("h3",{id:"3-\u5408\u5e76\u4e24\u4e2a\u6570\u7ec4"},a.createElement(c.AnchorLink,{to:"#3-\u5408\u5e76\u4e24\u4e2a\u6570\u7ec4","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"3. \u5408\u5e76\u4e24\u4e2a\u6570\u7ec4"),a.createElement("p",null,"\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u4e24\u4e2a\u65b9\u6cd5\u6765\u5408\u5e76\u4e24\u4e2a\u6570\u7ec4\uff1a"),a.createElement(r.Z,{code:"const merge = (a, b) => a.concat(b);\n\nconst merge = (a, b) => [...a, ...b];\n\u590d\u5236\u4ee3\u7801",lang:"javascript"}),a.createElement("h2",{id:"\u56db\u6570\u5b57\u64cd\u4f5c"},a.createElement(c.AnchorLink,{to:"#\u56db\u6570\u5b57\u64cd\u4f5c","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u56db\u3001\u6570\u5b57\u64cd\u4f5c"),a.createElement("h3",{id:"1-\u5224\u65ad\u4e00\u4e2a\u6570\u662f\u5947\u6570\u8fd8\u662f\u5076\u6570"},a.createElement(c.AnchorLink,{to:"#1-\u5224\u65ad\u4e00\u4e2a\u6570\u662f\u5947\u6570\u8fd8\u662f\u5076\u6570","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"1. \u5224\u65ad\u4e00\u4e2a\u6570\u662f\u5947\u6570\u8fd8\u662f\u5076\u6570"),a.createElement("p",null,"\u8be5\u65b9\u6cd5\u7528\u4e8e\u5224\u65ad\u4e00\u4e2a\u6570\u5b57\u662f\u5947\u6570\u8fd8\u662f\u5076\u6570\uff1a"),a.createElement(r.Z,{code:"const isEven = num => num % 2 === 0;\n\nisEven(996);\n\u590d\u5236\u4ee3\u7801",lang:"javascript"}),a.createElement("h3",{id:"2-\u83b7\u5f97\u4e00\u7ec4\u6570\u7684\u5e73\u5747\u503c"},a.createElement(c.AnchorLink,{to:"#2-\u83b7\u5f97\u4e00\u7ec4\u6570\u7684\u5e73\u5747\u503c","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"2. \u83b7\u5f97\u4e00\u7ec4\u6570\u7684\u5e73\u5747\u503c"),a.createElement(r.Z,{code:"const average = (...args) => args.reduce((a, b) => a + b) / args.length;\n\naverage(1, 2, 3, 4, 5);   // 3\n\u590d\u5236\u4ee3\u7801",lang:"javascript"}),a.createElement("h3",{id:"3-\u83b7\u53d6\u4e24\u4e2a\u6574\u6570\u4e4b\u95f4\u7684\u968f\u673a\u6574\u6570"},a.createElement(c.AnchorLink,{to:"#3-\u83b7\u53d6\u4e24\u4e2a\u6574\u6570\u4e4b\u95f4\u7684\u968f\u673a\u6574\u6570","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"3. \u83b7\u53d6\u4e24\u4e2a\u6574\u6570\u4e4b\u95f4\u7684\u968f\u673a\u6574\u6570"),a.createElement("p",null,"\u8be5\u65b9\u6cd5\u7528\u4e8e\u83b7\u53d6\u4e24\u4e2a\u6574\u6570\u4e4b\u95f4\u7684\u968f\u673a\u6574\u6570"),a.createElement(r.Z,{code:"const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);\n\nrandom(1, 50);\n\u590d\u5236\u4ee3\u7801",lang:"javascript"}),a.createElement("h3",{id:"4-\u6307\u5b9a\u4f4d\u6570\u56db\u820d\u4e94\u5165"},a.createElement(c.AnchorLink,{to:"#4-\u6307\u5b9a\u4f4d\u6570\u56db\u820d\u4e94\u5165","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"4. \u6307\u5b9a\u4f4d\u6570\u56db\u820d\u4e94\u5165"),a.createElement("p",null,"\u8be5\u65b9\u6cd5\u7528\u4e8e\u5c06\u4e00\u4e2a\u6570\u5b57\u6309\u7167\u6307\u5b9a\u4f4d\u8fdb\u884c\u56db\u820d\u4e94\u5165\uff1a"),a.createElement(r.Z,{code:'const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d)\n\nround(1.005, 2) //1.01\nround(1.555, 2) //1.56\n\u590d\u5236\u4ee3\u7801',lang:"javascript"}),a.createElement("h2",{id:"\u4e94\u989c\u8272\u64cd\u4f5c"},a.createElement(c.AnchorLink,{to:"#\u4e94\u989c\u8272\u64cd\u4f5c","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u4e94\u3001\u989c\u8272\u64cd\u4f5c"),a.createElement("h3",{id:"1-\u5c06rgb\u8f6c\u5316\u4e3a\u5341\u516d\u673a\u5236"},a.createElement(c.AnchorLink,{to:"#1-\u5c06rgb\u8f6c\u5316\u4e3a\u5341\u516d\u673a\u5236","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"1. \u5c06RGB\u8f6c\u5316\u4e3a\u5341\u516d\u673a\u5236"),a.createElement("p",null,"\u8be5\u65b9\u6cd5\u53ef\u4ee5\u5c06\u4e00\u4e2aRGB\u7684\u989c\u8272\u503c\u8f6c\u5316\u4e3a16\u8fdb\u5236\u503c\uff1a"),a.createElement(r.Z,{code:"const rgbToHex = (r, g, b) => \"#\" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);\n\nrgbToHex(255, 255, 255);  // '#ffffff'\n\u590d\u5236\u4ee3\u7801",lang:"javascript"}),a.createElement("h3",{id:"2-\u83b7\u53d6\u968f\u673a\u5341\u516d\u8fdb\u5236\u989c\u8272"},a.createElement(c.AnchorLink,{to:"#2-\u83b7\u53d6\u968f\u673a\u5341\u516d\u8fdb\u5236\u989c\u8272","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"2. \u83b7\u53d6\u968f\u673a\u5341\u516d\u8fdb\u5236\u989c\u8272"),a.createElement("p",null,"\u8be5\u65b9\u6cd5\u7528\u4e8e\u83b7\u53d6\u4e00\u4e2a\u968f\u673a\u7684\u5341\u516d\u8fdb\u5236\u989c\u8272\u503c\uff1a"),a.createElement(r.Z,{code:'const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;\n\nrandomHex();\n\u590d\u5236\u4ee3\u7801',lang:"javascript"}),a.createElement("h2",{id:"\u516d\u6d4f\u89c8\u5668\u64cd\u4f5c"},a.createElement(c.AnchorLink,{to:"#\u516d\u6d4f\u89c8\u5668\u64cd\u4f5c","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u516d\u3001\u6d4f\u89c8\u5668\u64cd\u4f5c"),a.createElement("h3",{id:"1-\u590d\u5236\u5185\u5bb9\u5230\u526a\u5207\u677f"},a.createElement(c.AnchorLink,{to:"#1-\u590d\u5236\u5185\u5bb9\u5230\u526a\u5207\u677f","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"1. \u590d\u5236\u5185\u5bb9\u5230\u526a\u5207\u677f"),a.createElement("p",null,"\u8be5\u65b9\u6cd5\u4f7f\u7528 navigator.clipboard.writeText \u6765\u5b9e\u73b0\u5c06\u6587\u672c\u590d\u5236\u5230\u526a\u8d34\u677f\uff1a"),a.createElement(r.Z,{code:'const copyToClipboard = (text) => navigator.clipboard.writeText(text);\n\ncopyToClipboard("Hello World");\n\u590d\u5236\u4ee3\u7801',lang:"javascript"}),a.createElement("h3",{id:"2-\u6e05\u9664\u6240\u6709cookie"},a.createElement(c.AnchorLink,{to:"#2-\u6e05\u9664\u6240\u6709cookie","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"2. \u6e05\u9664\u6240\u6709cookie"),a.createElement("p",null,"\u8be5\u65b9\u6cd5\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528 document.cookie \u6765\u8bbf\u95ee cookie \u5e76\u6e05\u9664\u5b58\u50a8\u5728\u7f51\u9875\u4e2d\u7684\u6240\u6709 cookie\uff1a"),a.createElement(r.Z,{code:"const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));\n\u590d\u5236\u4ee3\u7801",lang:"javascript"}),a.createElement("h3",{id:"3-\u83b7\u53d6\u9009\u4e2d\u7684\u6587\u672c"},a.createElement(c.AnchorLink,{to:"#3-\u83b7\u53d6\u9009\u4e2d\u7684\u6587\u672c","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"3. \u83b7\u53d6\u9009\u4e2d\u7684\u6587\u672c"),a.createElement("p",null,"\u8be5\u65b9\u6cd5\u901a\u8fc7\u5185\u7f6e\u7684 getSelection \u5c5e\u6027\u83b7\u53d6\u7528\u6237\u9009\u62e9\u7684\u6587\u672c\uff1a"),a.createElement(r.Z,{code:"const getSelectedText = () => window.getSelection().toString();\n\ngetSelectedText();\n\u590d\u5236\u4ee3\u7801",lang:"javascript"}),a.createElement("h3",{id:"4-\u68c0\u6d4b\u662f\u5426\u662f\u9ed1\u6697\u6a21\u5f0f"},a.createElement(c.AnchorLink,{to:"#4-\u68c0\u6d4b\u662f\u5426\u662f\u9ed1\u6697\u6a21\u5f0f","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"4. \u68c0\u6d4b\u662f\u5426\u662f\u9ed1\u6697\u6a21\u5f0f"),a.createElement("p",null,"\u8be5\u65b9\u6cd5\u7528\u4e8e\u68c0\u6d4b\u5f53\u524d\u7684\u73af\u5883\u662f\u5426\u662f\u9ed1\u6697\u6a21\u5f0f\uff0c\u5b83\u662f\u4e00\u4e2a\u5e03\u5c14\u503c\uff1a"),a.createElement(r.Z,{code:"const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches\n\nconsole.log(isDarkMode)\n\u590d\u5236\u4ee3\u7801",lang:"javascript"}),a.createElement("h3",{id:"5-\u6eda\u52a8\u5230\u9875\u9762\u9876\u90e8"},a.createElement(c.AnchorLink,{to:"#5-\u6eda\u52a8\u5230\u9875\u9762\u9876\u90e8","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"5. \u6eda\u52a8\u5230\u9875\u9762\u9876\u90e8"),a.createElement("p",null,"\u8be5\u65b9\u6cd5\u7528\u4e8e\u5728\u9875\u9762\u4e2d\u8fd4\u56de\u9876\u90e8\uff1a"),a.createElement(r.Z,{code:"const goToTop = () => window.scrollTo(0, 0);\n\ngoToTop();\n\u590d\u5236\u4ee3\u7801",lang:"javascript"}),a.createElement("h3",{id:"6-\u5224\u65ad\u5f53\u524d\u6807\u7b7e\u9875\u662f\u5426\u6fc0\u6d3b"},a.createElement(c.AnchorLink,{to:"#6-\u5224\u65ad\u5f53\u524d\u6807\u7b7e\u9875\u662f\u5426\u6fc0\u6d3b","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"6. \u5224\u65ad\u5f53\u524d\u6807\u7b7e\u9875\u662f\u5426\u6fc0\u6d3b"),a.createElement("p",null,"\u8be5\u65b9\u6cd5\u7528\u4e8e\u68c0\u6d4b\u5f53\u524d\u6807\u7b7e\u9875\u662f\u5426\u5df2\u7ecf\u6fc0\u6d3b\uff1a"),a.createElement(r.Z,{code:"const isTabInView = () => !document.hidden;\n\u590d\u5236\u4ee3\u7801",lang:"javascript"}),a.createElement("h3",{id:"7-\u5224\u65ad\u5f53\u524d\u662f\u5426\u662f\u82f9\u679c\u8bbe\u5907"},a.createElement(c.AnchorLink,{to:"#7-\u5224\u65ad\u5f53\u524d\u662f\u5426\u662f\u82f9\u679c\u8bbe\u5907","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"7. \u5224\u65ad\u5f53\u524d\u662f\u5426\u662f\u82f9\u679c\u8bbe\u5907"),a.createElement("p",null,"\u8be5\u65b9\u6cd5\u7528\u4e8e\u68c0\u6d4b\u5f53\u524d\u7684\u8bbe\u5907\u662f\u5426\u662f\u82f9\u679c\u7684\u8bbe\u5907\uff1a"),a.createElement(r.Z,{code:"const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);\n\nisAppleDevice();\n\u590d\u5236\u4ee3\u7801",lang:"javascript"}),a.createElement("h3",{id:"8-\u662f\u5426\u6eda\u52a8\u5230\u9875\u9762\u5e95\u90e8"},a.createElement(c.AnchorLink,{to:"#8-\u662f\u5426\u6eda\u52a8\u5230\u9875\u9762\u5e95\u90e8","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"8. \u662f\u5426\u6eda\u52a8\u5230\u9875\u9762\u5e95\u90e8"),a.createElement("p",null,"\u8be5\u65b9\u6cd5\u7528\u4e8e\u5224\u65ad\u9875\u9762\u662f\u5426\u5df2\u7ecf\u5e95\u90e8\uff1a"),a.createElement(r.Z,{code:"const scrolledToBottom = () => document.documentElement.clientHeight + window.scrollY >= document.documentElement.scrollHeight;\n\u590d\u5236\u4ee3\u7801",lang:"javascript"}),a.createElement("h3",{id:"9-\u91cd\u5b9a\u5411\u5230\u4e00\u4e2aurl"},a.createElement(c.AnchorLink,{to:"#9-\u91cd\u5b9a\u5411\u5230\u4e00\u4e2aurl","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"9. \u91cd\u5b9a\u5411\u5230\u4e00\u4e2aURL"),a.createElement("p",null,"\u8be5\u65b9\u6cd5\u7528\u4e8e\u91cd\u5b9a\u5411\u5230\u4e00\u4e2a\u65b0\u7684URL\uff1a"),a.createElement(r.Z,{code:'const redirect = url => location.href = url\n\nredirect("https://www.google.com/")\n\u590d\u5236\u4ee3\u7801',lang:"javascript"}),a.createElement("h3",{id:"10-\u6253\u5f00\u6d4f\u89c8\u5668\u6253\u5370\u6846"},a.createElement(c.AnchorLink,{to:"#10-\u6253\u5f00\u6d4f\u89c8\u5668\u6253\u5370\u6846","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"10. \u6253\u5f00\u6d4f\u89c8\u5668\u6253\u5370\u6846"),a.createElement("p",null,"\u8be5\u65b9\u6cd5\u7528\u4e8e\u6253\u5f00\u6d4f\u89c8\u5668\u7684\u6253\u5370\u6846\uff1a"),a.createElement(r.Z,{code:"const showPrintDialog = () => window.print()\n\u590d\u5236\u4ee3\u7801",lang:"javascript"}),a.createElement("h2",{id:"\u4e03\u5176\u4ed6\u64cd\u4f5c"},a.createElement(c.AnchorLink,{to:"#\u4e03\u5176\u4ed6\u64cd\u4f5c","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u4e03\u3001\u5176\u4ed6\u64cd\u4f5c"),a.createElement("h3",{id:"1-\u968f\u673a\u5e03\u5c14\u503c"},a.createElement(c.AnchorLink,{to:"#1-\u968f\u673a\u5e03\u5c14\u503c","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"1. \u968f\u673a\u5e03\u5c14\u503c"),a.createElement("p",null,"\u8be5\u65b9\u6cd5\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a\u968f\u673a\u7684\u5e03\u5c14\u503c\uff0c\u4f7f\u7528Math.random()\u53ef\u4ee5\u83b7\u5f970-1\u7684\u968f\u673a\u6570\uff0c\u4e0e0.5\u8fdb\u884c\u6bd4\u8f83\uff0c\u5c31\u6709\u4e00\u534a\u7684\u6982\u7387\u83b7\u5f97\u771f\u503c\u6216\u8005\u5047\u503c\u3002"),a.createElement(r.Z,{code:"const randomBoolean = () => Math.random() >= 0.5;\n\nrandomBoolean();\n\u590d\u5236\u4ee3\u7801",lang:"javascript"}),a.createElement("h3",{id:"2-\u53d8\u91cf\u4ea4\u6362"},a.createElement(c.AnchorLink,{to:"#2-\u53d8\u91cf\u4ea4\u6362","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"2. \u53d8\u91cf\u4ea4\u6362"),a.createElement("p",null,"\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u5f62\u5f0f\u5728\u4e0d\u9002\u7528\u7b2c\u4e09\u4e2a\u53d8\u91cf\u7684\u60c5\u51b5\u4e0b\uff0c\u4ea4\u6362\u4e24\u4e2a\u53d8\u91cf\u7684\u503c\uff1a"),a.createElement(r.Z,{code:"[foo, bar] = [bar, foo];\n\u590d\u5236\u4ee3\u7801",lang:"javascript"}),a.createElement("h3",{id:"3-\u83b7\u53d6\u53d8\u91cf\u7684\u7c7b\u578b"},a.createElement(c.AnchorLink,{to:"#3-\u83b7\u53d6\u53d8\u91cf\u7684\u7c7b\u578b","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"3. \u83b7\u53d6\u53d8\u91cf\u7684\u7c7b\u578b"),a.createElement("p",null,"\u8be5\u65b9\u6cd5\u7528\u4e8e\u83b7\u53d6\u4e00\u4e2a\u53d8\u91cf\u7684\u7c7b\u578b\uff1a"),a.createElement(r.Z,{code:"const trueTypeOf = (obj) => Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();\n\ntrueTypeOf('');     // string\ntrueTypeOf(0);      // number\ntrueTypeOf();       // undefined\ntrueTypeOf(null);   // null\ntrueTypeOf({});     // object\ntrueTypeOf([]);     // array\ntrueTypeOf(0);      // number\ntrueTypeOf(() => {});  // function\n\u590d\u5236\u4ee3\u7801",lang:"javascript"}),a.createElement("h3",{id:"4-\u534e\u6c0f\u5ea6\u548c\u6444\u6c0f\u5ea6\u4e4b\u95f4\u7684\u8f6c\u5316"},a.createElement(c.AnchorLink,{to:"#4-\u534e\u6c0f\u5ea6\u548c\u6444\u6c0f\u5ea6\u4e4b\u95f4\u7684\u8f6c\u5316","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"4. \u534e\u6c0f\u5ea6\u548c\u6444\u6c0f\u5ea6\u4e4b\u95f4\u7684\u8f6c\u5316"),a.createElement("p",null,"\u8be5\u65b9\u6cd5\u7528\u4e8e\u6444\u6c0f\u5ea6\u548c\u534e\u6c0f\u5ea6\u4e4b\u95f4\u7684\u8f6c\u5316\uff1a"),a.createElement(r.Z,{code:"const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;\nconst fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;\n\ncelsiusToFahrenheit(15);    // 59\ncelsiusToFahrenheit(0);     // 32\ncelsiusToFahrenheit(-20);   // -4\nfahrenheitToCelsius(59);    // 15\nfahrenheitToCelsius(32);    // 0\n\u590d\u5236\u4ee3\u7801",lang:"javascript"}),a.createElement("h3",{id:"5-\u68c0\u6d4b\u5bf9\u8c61\u662f\u5426\u4e3a\u7a7a"},a.createElement(c.AnchorLink,{to:"#5-\u68c0\u6d4b\u5bf9\u8c61\u662f\u5426\u4e3a\u7a7a","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"5. \u68c0\u6d4b\u5bf9\u8c61\u662f\u5426\u4e3a\u7a7a"),a.createElement("p",null,"\u8be5\u65b9\u6cd5\u7528\u4e8e\u68c0\u6d4b\u4e00\u4e2aJavaScript\u5bf9\u8c61\u662f\u5426\u4e3a\u7a7a\uff1a"),a.createElement(r.Z,{code:"const isEmpty = obj => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;\n\u590d\u5236\u4ee3\u7801",lang:"javascript"}),a.createElement("blockquote",null,a.createElement("p",null,"\u4f5c\u8005\uff1aCUGGZ \u94fe\u63a5\uff1a",a.createElement(c.Link,{to:"https://juejin.cn/post/7025771605422768159"},"https://juejin.cn/post/7025771605422768159")))))}));n["default"]=e=>{var n=a.useContext(c.context),t=n.demos;return a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&c.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.createElement(l,{demos:t})}}}]);