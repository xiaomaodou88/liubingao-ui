import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
import React, { Component } from 'react';
import './style';
var Navigation = /*#__PURE__*/function (_Component) {
  _inherits(Navigation, _Component);
  var _super = _createSuper(Navigation);
  function Navigation() {
    _classCallCheck(this, Navigation);
    return _super.apply(this, arguments);
  }
  _createClass(Navigation, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        navList = _this$props.navList,
        activeId = _this$props.activeId,
        activeClass = _this$props.activeClass,
        handleClick = _this$props.handleClick,
        className = _this$props.className;
      return /*#__PURE__*/React.createElement("div", {
        className: "app-navigation ".concat(className)
      }, navList.map(function (item) {
        return /*#__PURE__*/React.createElement("div", {
          className: "nav-item ".concat(activeId === item.id ? activeClass || 'active' : ''),
          key: item.id,
          onClick: function onClick() {
            handleClick && handleClick(item);
          }
        }, item.icon && /*#__PURE__*/React.createElement("div", {
          className: "icon"
        }, /*#__PURE__*/React.createElement("img", {
          src: item.icon,
          alt: ""
        })), /*#__PURE__*/React.createElement("span", null, item.name));
      }));
    }
  }]);
  return Navigation;
}(Component);
export default Navigation;