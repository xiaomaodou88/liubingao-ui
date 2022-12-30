import React, { Component, ElementType } from 'react';
import { is, fromJS } from 'immutable';

import ReactDOM from 'react-dom';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './style';

let defaultState = {
  kind: 'info',
  alertStatus:false,
  title:'',
  content:'',
  close:function(){}

}

class Alert extends Component{
  state = {
    ...defaultState
  };
  // css动画组件设置为目标组件
  FirstChild = (props:any) => {
    const childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || null;
  }
  // 关闭弹框
  confirm = () => {
    this.setState({
      alertStatus:false
    })
    this.state.close();
  }
  open =(options:any)=>{
    options = options || {};
    options.alertStatus = true;
    this.setState({
      ...defaultState,
      ...options
    })
  }
  close(){
    this.state.close();
    this.setState({
      ...defaultState
    })
  }

  shouldComponentUpdate(nextProps:any, nextState:any){
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
  }
  renderSuccess(){
    return(<div className='body-wrapper'>
      <div className="confirm-body">
        <div className="title">
          <span className='anticon-success-circle'>√</span>
          <span className='success-title'>{this.state.content}</span>
        </div>
      </div>
      <div className="confirm-btns">
        <div className='primary-btn' onClick={this.confirm}>知道了</div>
      </div>
    </div>)
  }
  renderInfo(){
    const { kind } = this.state
    return(<div className='body-wrapper'>
      <div className="confirm-body">
        <div className="title">
          {kind === 'info' && <span className='anticon-info-circle'>i</span>}
          {kind === 'error' && <span className='anticon-error-circle'>×</span>}
          {kind === 'warning' && <span className='anticon-warning-circle'>!</span>}
          <span className='info-title'>{this.state.title}</span>
        </div>
        <div className="confirm-content">{
          this.state.content
        }</div>
      </div>
      <div className="confirm-btns">
        <div className='primary-btn' onClick={this.confirm}>知道了</div>
      </div>
    </div>)
  }
  render(){
    const { kind } = this.state
    return (
      <ReactCSSTransitionGroup
        component={this.FirstChild as any}
        transitionName='hide'
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
        <div className="alert-con" style={this.state.alertStatus? {display:'flex'}:{display:'none'}}>
          <div className="alert-context">
            <div className="alert-body">
              {kind === 'success' ? this.renderSuccess() :this.renderInfo()}
            </div>
            {/* <div className="alert-content-detail">
            <div className='title'>
              <span>i</span>
            </div>
            {this.state.alertTip}</div>
            <div className="comfirm" onClick={this.confirm}>确认</div> */}
          </div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}
let div = document.createElement('div');
let props = {
};
document.body.appendChild(div);
let Box = ReactDOM.render(React.createElement(
  Alert,
  props
),div);

export default Box;