(self["webpackChunkliubingao_ui"]=self["webpackChunkliubingao_ui"]||[]).push([[957],{6534:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return r}});var l=o(7337),n=o(7294),a=1;class i extends n.Component{constructor(e){super(e),this.imgOnWheel=e=>{var t=this.props.whoolScale;if(t){document.body.style.overflow="hidden";var o=document.querySelector(".app-59ad9e-imgDolg img");if(e.nativeEvent.wheelDelta<0){if(a<=.2)return;a-=.1,o.style.scale=a}else a+=.1,o.style.scale=a}},this.state={visible:!1}}componentDidMount(){}componentWillUnmount(){document.body.style.overflow="auto"}render(){var e=this.props,t=e.visible,o=e.currentImgUrl,l=e.close,i=(e.whoolScale,e.className);return t&&(document.body.style.overflow="hidden"),n.createElement(n.Fragment,null,t&&n.createElement("div",{className:"app-59ad9e-imgDolg ".concat(i),onClick:e=>{e.stopPropagation(),a=1,l(),document.body.style.overflow="auto"},onWheel:this.imgOnWheel},n.createElement("span",{className:"icon-coms02-Delete",id:"app-59ad9e-imgDolgClose",onClick:e=>{e.stopPropagation(),a=1,l(),document.body.style.overflow="auto"}},"\xd7"),n.createElement("img",{onClick:e=>{e.stopPropagation()},src:o})))}}var c=i,r=()=>{var e=(0,n.useState)(!1),t=(0,l.Z)(e,2),o=t[0],a=t[1],i="https://img.tukuppt.com/photo-big/00/00/94/6152bc0ce6e5d805.jpg";return n.createElement("div",{style:{height:"200px",background:"#eee",padding:"20px"}},n.createElement("img",{src:i,alt:"",style:{objectFit:"contain",height:"100%",cursor:"pointer"},onClick:()=>{a(!0)}}),n.createElement(c,{visible:o,whoolScale:!0,currentImgUrl:i,close:()=>{a(!1)}}))}}}]);