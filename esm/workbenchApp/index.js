import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
import React, { Component } from 'react';
import './style';
var WorkbenchApp = /*#__PURE__*/function (_Component) {
  _inherits(WorkbenchApp, _Component);
  var _super = _createSuper(WorkbenchApp);
  function WorkbenchApp() {
    _classCallCheck(this, WorkbenchApp);
    return _super.apply(this, arguments);
  }
  _createClass(WorkbenchApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        appList = _this$props.appList,
        handleClick = _this$props.handleClick,
        className = _this$props.className;
      return /*#__PURE__*/React.createElement("div", {
        className: "app-workbench ".concat(className)
      }, appList.map(function (item) {
        return /*#__PURE__*/React.createElement("div", {
          className: "app-item",
          key: item.id,
          onClick: function onClick() {
            handleClick && handleClick(item);
          }
        }, /*#__PURE__*/React.createElement("div", {
          className: "icon"
        }, /*#__PURE__*/React.createElement("img", {
          src: item.image,
          alt: ""
        })), /*#__PURE__*/React.createElement("span", null, item.name));
      }));
    }
  }]);
  return WorkbenchApp;
}(Component);
export default WorkbenchApp;