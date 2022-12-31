"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireWildcard(require("react"));
require("./style/css");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var width80 = 80;
var scale = 1;
var PreviewImage = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(PreviewImage, _Component);
  var _super = _createSuper(PreviewImage);
  function PreviewImage(props) {
    var _this;
    (0, _classCallCheck2.default)(this, PreviewImage);
    _this = _super.call(this, props);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "imgOnWheel", function (e) {
      var whoolScale = _this.props.whoolScale;
      if (!whoolScale) return;
      document.body.style.overflow = 'hidden';
      var img = document.querySelector('.app-59ad9e-imgDolg img');
      if (e.nativeEvent.wheelDelta < 0) {
        // 缩小
        if (scale <= 0.2) return;
        scale = scale - 0.1;
        img.style.scale = scale;
      } else {
        // 放大
        scale = scale + 0.1;
        img.style.scale = scale;
      }
    });
    _this.state = {
      visible: false
    };
    return _this;
  }
  (0, _createClass2.default)(PreviewImage, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.style.overflow = 'auto';
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        visible = _this$props.visible,
        currentImgUrl = _this$props.currentImgUrl,
        close = _this$props.close,
        _this$props$whoolScal = _this$props.whoolScale,
        whoolScale = _this$props$whoolScal === void 0 ? false : _this$props$whoolScal,
        className = _this$props.className;
      // const { visible } = this.state
      if (visible) {
        document.body.style.overflow = 'hidden';
      }
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, visible && /*#__PURE__*/_react.default.createElement("div", {
        className: "app-59ad9e-imgDolg ".concat(className),
        onClick: function onClick(e) {
          e.stopPropagation();
          // width80 = 80
          scale = 1;
          close();
          document.body.style.overflow = 'auto';
        },
        onWheel: this.imgOnWheel
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "icon-coms02-Delete",
        id: "app-59ad9e-imgDolgClose",
        onClick: function onClick(e) {
          e.stopPropagation();
          // width80 = 80
          scale = 1;
          close();
          document.body.style.overflow = 'auto';
        }
      }, "\xD7"), /*#__PURE__*/_react.default.createElement("img", {
        onClick: function onClick(e) {
          e.stopPropagation();
          // this.setState({ visible: true })
        },
        src: currentImgUrl
      })));
    }
  }]);
  return PreviewImage;
}(_react.Component);
var _default = PreviewImage;
exports.default = _default;