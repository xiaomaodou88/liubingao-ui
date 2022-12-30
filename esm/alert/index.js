import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
import React, { Component } from 'react';
import { is, fromJS } from 'immutable';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './style';
var defaultState = {
  kind: 'info',
  alertStatus: false,
  title: '',
  content: '',
  close: function close() {}
};
var Alert = /*#__PURE__*/function (_Component) {
  _inherits(Alert, _Component);
  var _super = _createSuper(Alert);
  function Alert() {
    var _this;
    _classCallCheck(this, Alert);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "state", _objectSpread({}, defaultState));
    _defineProperty(_assertThisInitialized(_this), "FirstChild", function (props) {
      var childrenArray = React.Children.toArray(props.children);
      return childrenArray[0] || null;
    });
    _defineProperty(_assertThisInitialized(_this), "confirm", function () {
      _this.setState({
        alertStatus: false
      });
      _this.state.close();
    });
    _defineProperty(_assertThisInitialized(_this), "open", function (options) {
      options = options || {};
      options.alertStatus = true;
      _this.setState(_objectSpread(_objectSpread({}, defaultState), options));
    });
    return _this;
  }
  _createClass(Alert, [{
    key: "close",
    value: function close() {
      this.state.close();
      this.setState(_objectSpread({}, defaultState));
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
    }
  }, {
    key: "renderSuccess",
    value: function renderSuccess() {
      return /*#__PURE__*/React.createElement("div", {
        className: "body-wrapper"
      }, /*#__PURE__*/React.createElement("div", {
        className: "confirm-body"
      }, /*#__PURE__*/React.createElement("div", {
        className: "title"
      }, /*#__PURE__*/React.createElement("span", {
        className: "anticon-success-circle"
      }, "\u221A"), /*#__PURE__*/React.createElement("span", {
        className: "success-title"
      }, this.state.content))), /*#__PURE__*/React.createElement("div", {
        className: "confirm-btns"
      }, /*#__PURE__*/React.createElement("div", {
        className: "primary-btn",
        onClick: this.confirm
      }, "\u77E5\u9053\u4E86")));
    }
  }, {
    key: "renderInfo",
    value: function renderInfo() {
      var kind = this.state.kind;
      return /*#__PURE__*/React.createElement("div", {
        className: "body-wrapper"
      }, /*#__PURE__*/React.createElement("div", {
        className: "confirm-body"
      }, /*#__PURE__*/React.createElement("div", {
        className: "title"
      }, kind === 'info' && /*#__PURE__*/React.createElement("span", {
        className: "anticon-info-circle"
      }, "i"), kind === 'error' && /*#__PURE__*/React.createElement("span", {
        className: "anticon-error-circle"
      }, "\xD7"), kind === 'warning' && /*#__PURE__*/React.createElement("span", {
        className: "anticon-warning-circle"
      }, "!"), /*#__PURE__*/React.createElement("span", {
        className: "info-title"
      }, this.state.title)), /*#__PURE__*/React.createElement("div", {
        className: "confirm-content"
      }, this.state.content)), /*#__PURE__*/React.createElement("div", {
        className: "confirm-btns"
      }, /*#__PURE__*/React.createElement("div", {
        className: "primary-btn",
        onClick: this.confirm
      }, "\u77E5\u9053\u4E86")));
    }
  }, {
    key: "render",
    value: function render() {
      var kind = this.state.kind;
      return /*#__PURE__*/React.createElement(ReactCSSTransitionGroup, {
        component: this.FirstChild,
        transitionName: "hide",
        transitionEnterTimeout: 300,
        transitionLeaveTimeout: 300
      }, /*#__PURE__*/React.createElement("div", {
        className: "alert-con",
        style: this.state.alertStatus ? {
          display: 'flex'
        } : {
          display: 'none'
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "alert-context"
      }, /*#__PURE__*/React.createElement("div", {
        className: "alert-body"
      }, kind === 'success' ? this.renderSuccess() : this.renderInfo()))));
    }
  }]);
  return Alert;
}(Component);
var div = document.createElement('div');
var props = {};
document.body.appendChild(div);
var Box = ReactDOM.render( /*#__PURE__*/React.createElement(Alert, props), div);
export default Box;