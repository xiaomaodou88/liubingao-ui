"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireWildcard(require("react"));
require("./style");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Progress = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Progress, _Component);
  var _super = _createSuper(Progress);
  function Progress(props) {
    var _this;
    (0, _classCallCheck2.default)(this, Progress);
    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }
  (0, _createClass2.default)(Progress, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "renderSteps",
    value: function renderSteps() {
      // const { steps = 50 } = this.props
      var list = Array.from({
        length: 50
      });
      var dom = list.map(function (item, i) {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "pp-791001348092346369-Main-CustomChart-steps",
          key: i,
          style: {
            marginLeft: '6px'
          }
        });
      });
      return dom;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        _this$props$percent = _this$props.percent,
        percent = _this$props$percent === void 0 ? '0' : _this$props$percent,
        percentInner = _this$props.percentInner,
        _this$props$linearGra = _this$props.linearGradien,
        linearGradien = _this$props$linearGra === void 0 ? ['#FC7B03', '#FCD003'] : _this$props$linearGra,
        _this$props$showStep = _this$props.showStep,
        showStep = _this$props$showStep === void 0 ? true : _this$props$showStep,
        _this$props$width = _this$props.width,
        width = _this$props$width === void 0 ? '345px' : _this$props$width,
        _this$props$backgroun = _this$props.backgroundMid,
        backgroundMid = _this$props$backgroun === void 0 ? [] : _this$props$backgroun,
        className = _this$props.className;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "app-791001348092346369-Main-CustomChart ".concat(className)
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "app-791001348092346369-Main-CustomChart-Progress",
        style: {
          width: width
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "app-791001348092346369-Main-CustomChart-middle",
        style: {
          width: percent,
          background: "linear-gradient(92deg, ".concat(backgroundMid[0], " 0%, ").concat(backgroundMid[1], " 100%)")
        }
      }), percentInner && /*#__PURE__*/_react.default.createElement("div", {
        className: "app-791001348092346369-Main-CustomChart-inner",
        style: {
          width: percentInner,
          background: "linear-gradient(92deg, ".concat(linearGradien[0], " 0%, ").concat(linearGradien[1], " 100%)")
        }
      }, showStep && this.renderSteps())));
    }
  }]);
  return Progress;
}(_react.Component);
var _default = Progress;
exports.default = _default;