import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
import React, { Component } from 'react';
import './style';
var TabBotton = /*#__PURE__*/function (_Component) {
  _inherits(TabBotton, _Component);
  var _super = _createSuper(TabBotton);
  function TabBotton() {
    _classCallCheck(this, TabBotton);
    return _super.apply(this, arguments);
  }
  _createClass(TabBotton, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this = this;
      var _this$props = this.props,
        tabBottonList = _this$props.tabBottonList,
        activeId = _this$props.activeId,
        className = _this$props.className;
      return /*#__PURE__*/React.createElement("div", {
        className: "app-791001348092346369-TabBotton ".concat(className)
      }, tabBottonList.map(function (item, i) {
        return /*#__PURE__*/React.createElement("div", {
          key: i,
          className: activeId === item.id ? 'app-791001348092346369-TabBotton-active app-791001348092346369-TabBotton-item' : 'app-791001348092346369-TabBotton-item',
          onClick: function onClick() {
            _this.props.onChange(item.id);
          }
        }, item.name);
      }));
    }
  }]);
  return TabBotton;
}(Component);
export default TabBotton;