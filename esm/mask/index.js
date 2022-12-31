import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
import React from 'react';
import './style/css';
var Mask = /*#__PURE__*/function (_React$Component) {
  _inherits(Mask, _React$Component);
  var _super = _createSuper(Mask);
  function Mask() {
    _classCallCheck(this, Mask);
    return _super.apply(this, arguments);
  }
  _createClass(Mask, [{
    key: "render",
    value: function render() {
      var _this = this;
      var _this$props = this.props,
        className = _this$props.className,
        visible = _this$props.visible;
      return /*#__PURE__*/React.createElement("div", {
        className: "app-59ad9e-Mask ".concat(className, " ").concat(!visible ? 'ecode-hide' : ''),
        onClick: function onClick(e) {
          // if (!e.target.className.includes('wea-slide-modal')) return
          _this.props.onChange();
        }
      }, this.props.children);
    }
  }]);
  return Mask;
}(React.Component);
export default Mask;