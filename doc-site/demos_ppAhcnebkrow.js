(self["webpackChunkliubingao_ui"]=self["webpackChunkliubingao_ui"]||[]).push([[994],{59771:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return l}});var t=n(38573),i=n(67294);class m extends i.Component{componentDidMount(){}render(){var e=this.props,a=e.appList,n=e.handleClick,t=e.className;return i.createElement("div",{className:"app-workbench ".concat(t)},a.map((e=>i.createElement("div",{className:"app-item",key:e.id,onClick:()=>{n&&n(e)}},i.createElement("div",{className:"icon"},i.createElement("img",{src:e.image,alt:""})),i.createElement("span",null,e.name)))))}}var c=m,l=()=>{var e=(0,i.useState)([{id:"0",image:"/img/3.png",name:"\u667a\u6167\u515a\u5efa"},{id:"1",image:"/img/2.png",name:"\u5927\u6570\u636e"},{id:"2",image:"/img/5.png",name:"\u7b97\u6cd5"}]),a=(0,t.Z)(e,2),n=a[0],m=(a[1],e=>{alert("\u5f53\u524d\u70b9\u51fb"+e.name)});return i.createElement("div",{style:{height:"200px",background:"#eee",padding:"20px"}},i.createElement(c,{appList:n,handleClick:m}))}}}]);