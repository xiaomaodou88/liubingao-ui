(self["webpackChunkliubingao_ui"]=self["webpackChunkliubingao_ui"]||[]).push([[1712],{39552:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var o=n(67294),i=n(73935);class a extends o.Component{constructor(e){super(e),this.transitionTime=300,this.state={notices:[]},this.removeNotice=this.removeNotice.bind(this)}componentDidMount(){}getNoticeKey(){var e=this.state.notices;return"notice-".concat((new Date).getTime(),"-").concat(e.length)}addNotice(e){var t=this.state.notices;return e.key=this.getNoticeKey(),t[0]=e,this.setState({notices:t}),e.duration>0&&(setTimeout((()=>{var e=document.querySelector(".toast_progress");e&&(e.style.width=0)})),setTimeout((()=>{this.removeNotice(e.key)}),e.duration)),()=>{this.removeNotice(e.key)}}removeNotice(e){var t=this.state.notices;this.setState({notices:t.filter((t=>t.key!==e||(t.onClose&&setTimeout(t.onClose,this.transitionTime),!1)))})}render(){var e=this.state.notices,t={info:"toast_info",success:"toast_success",error:"toast_error",warning:"toast_warning",loading:"toast_loading"},n={info:"toast_info_box",success:"toast_success_box",error:"toast_error_box",warning:"toast_warning_box",loading:"toast_loading_box"};return o.createElement("div",{className:"toast"},e.map((e=>o.createElement("div",{className:"toast_bg ".concat(n[e.type]),key:e.key},o.createElement("div",{className:"toast_box"},o.createElement("div",{className:"toast_close",onClick:()=>{this.removeNotice(e.key)}},"\xd7"),o.createElement("div",{className:"toast_icon ".concat(t[e.type])}),o.createElement("div",{className:"toast_text"},e.content),"loading"!==e.type&&o.createElement("div",{className:"toast_progress",style:{transition:"width ".concat(e.duration/1e3,"s linear")}}))))))}}var s,r=a;function c(){var e=document.createElement("div");document.body.appendChild(e);var t=i.render(o.createElement(r,null),e);return{addNotice(e){return t.addNotice(e)},destroy(){i.unmountComponentAtNode(e),document.body.removeChild(e)}}}var l=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2e3,o=arguments.length>3?arguments[3]:void 0;return s||(s=c()),s.addNotice({type:e,content:t,duration:n,onClose:o})},d={info(e,t,n){return l("info",e,t,n)},success(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"\u64cd\u4f5c\u6210\u529f",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;return l("success",e,t,n)},error(e,t,n){return l("error",e,t,n)},warning(e,t,n){return l("warning",e,t,n)},loading(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"\u52a0\u8f7d\u4e2d...",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2?arguments[2]:void 0;return l("loading",e,t,n)}},u=()=>o.createElement("div",{className:"Two"},o.createElement("div",{className:"default-btn",style:{marginRight:"20px"},onClick:()=>{d.info("\u666e\u901a\u63d0\u793a",6e4)}},"info"),o.createElement("div",{className:"default-btn",style:{marginRight:"20px"},onClick:()=>{d.success("\u6210\u529f\u63d0\u793a")}},"success"),o.createElement("div",{className:"default-btn",style:{marginRight:"20px"},onClick:()=>{d.error("\u9519\u8bef\u63d0\u793a")}},"error"),o.createElement("div",{className:"default-btn",style:{marginRight:"20px"},onClick:()=>{d.warning("\u8b66\u544a\u63d0\u793a")}},"warning"),o.createElement("div",{className:"default-btn",style:{marginRight:"20px"},onClick:()=>{var e=d.loading();setTimeout((()=>{e()}),2e3)}},"loading"))}}]);