"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
require("./style/css");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Mask = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(Mask, _React$Component);
  var _super = _createSuper(Mask);
  function Mask() {
    (0, _classCallCheck2.default)(this, Mask);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(Mask, [{
    key: "render",
    value: function render() {
      var _this = this;
      var _this$props = this.props,
        className = _this$props.className,
        visible = _this$props.visible;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "app-59ad9e-Mask ".concat(className, " ").concat(!visible ? 'ecode-hide' : ''),
        onClick: function onClick(e) {
          // if (!e.target.className.includes('wea-slide-modal')) return
          _this.props.onChange();
        }
      }, this.props.children);
    }
  }]);
  return Mask;
}(_react.default.Component);
var _default = Mask;
exports.default = _default;