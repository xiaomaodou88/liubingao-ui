(self["webpackChunkliubingao_ui"]=self["webpackChunkliubingao_ui"]||[]).push([[2813],{3009:function(n,e,t){"use strict";t.r(e);var a=t(67294),o=t(96089),r=t(65659),s=a.memo((n=>{n.demos;return a.createElement(a.Fragment,null,a.createElement("div",{className:"markdown"},a.createElement("h1",{id:"es6\u9762\u5411\u5bf9\u8c61"},a.createElement(o.AnchorLink,{to:"#es6\u9762\u5411\u5bf9\u8c61","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"ES6\u9762\u5411\u5bf9\u8c61"),a.createElement(r.Z,{code:"//\u9762\u5411\u5bf9\u8c61\u5c01\u88c5\nclass Student{ //\u5b9a\u4e49\u7c7b (\u5c0a\u4ece\u9996\u5b57\u6bcd\u5927\u5199\u7684\u7ea6\u5b9a)\n    constructor(props){  // \u6784\u9020\u51fd\u6570 \uff08\u6784\u9020\u51fd\u6570\u5185\u5b9a\u4e8e\u5c5e\u6027\uff09\n        this.name = props.name || '\u533f\u540d'; // \u9ed8\u8ba4'\u533f\u540d'\n      this.grade = props.grade || 1;\n    }\n    hello(){ // \u5728\u6784\u9020\u51fd\u6570\u7684\u539f\u578b\u4e0a\u5b9a\u4e49\u65b9\u6cd5\n        console.log(`\u4f60\u597d,${this.name}\u540c\u5b66\uff0c\u4f60\u5728${this.grade}\u5e74\u7ea7`);\n    }\n}\n\n\n\n//\u4f7f\u7528\nfunction createStudent(props) { // \u5bf9\u4e8enew\u6784\u9020\u51fd\u6570\u7684\u5c01\u88c5\uff0c\u5176\u4f18\u70b9\uff1a\u4e00\u662f\u4e0d\u9700\u8981new\u6765\u8c03\u7528\uff0c\u4e8c\u662f\u53c2\u6570\u7075\u6d3b\n    return new Student(props || {}) // \u901a\u8fc7new\u521b\u5efa\u6784\u9020\u51fd\u6570\uff0c\u5e76\u4f20\u5165\u53c2\u6570/\u5c5e\u6027\n}\n\nlet niming = createStudent(); \nniming.hello();\n\nlet xiaoming = createStudent({\n  name:'\u5c0f\u660e',\n  grade:2\n});\nxiaoming.hello();\n\n\n\n//\u7ee7\u627f\nclass PrimaryStudent extends Student { //class \u5b50\u7c7b extends \u7236\u7c7b\n    constructor(props) {\n        super(props); // \u7528super\u8c03\u7528\u7236\u7c7b\u7684\u6784\u9020\u65b9\u6cd5\u5b9e\u73b0\u5c5e\u6027\u7ee7\u627f\n        this.age = props.age || 8; //\u65b0\u589e\u5b50\u7c7b\u5c5e\u6027\n    }\n\n    getAge() { //\u5bf9\u5b50\u7c7b\u6dfb\u52a0\u65b9\u6cd5\n        console.log(`${this.name}\u540c\u5b66\uff0c\u4f60\u4eca\u5e74${this.age}\u5c81`);\n    }\n}\n\n\n//\u4f7f\u7528\u7ee7\u627f\u540e\u7684\nfunction createPrimaryStudent(props) { // \u5bf9\u4e8enew\u6784\u9020\u51fd\u6570\u7684\u5c01\u88c5\uff0c\u5176\u4f18\u70b9\uff1a\u4e00\u662f\u4e0d\u9700\u8981\u518dnew\u6765\u8c03\u7528\uff0c\u4e8c\u662f\u53c2\u6570\u7075\u6d3b\n    return new PrimaryStudent(props || {}) // \u901a\u8fc7new\u521b\u5efa\u6784\u9020\u51fd\u6570\uff0c\u5e76\u4f20\u5165\u53c2\u6570/\u5c5e\u6027\n}\n\nlet xiaohong = createPrimaryStudent({\n  name:'\u5c0f\u7ea2',\n  grade:3,\n  age:10\n});\nxiaohong.hello();\nxiaohong.getAge();",lang:"js"})))}));e["default"]=n=>{var e=a.useContext(o.context),t=e.demos;return a.useEffect((()=>{var e;null!==n&&void 0!==n&&null!==(e=n.location)&&void 0!==e&&e.hash&&o.AnchorLink.scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))}),[]),a.createElement(s,{demos:t})}}}]);