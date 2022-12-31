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
var _immutable = require("immutable");
var _reactDom = _interopRequireDefault(require("react-dom"));
var _reactAddonsCssTransitionGroup = _interopRequireDefault(require("react-addons-css-transition-group"));
require("./style/css");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var defaultState = {
  kind: 'info',
  alertStatus: false,
  title: '',
  content: '',
  close: function close() {}
};
var Alert = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Alert, _Component);
  var _super = _createSuper(Alert);
  function Alert() {
    var _this;
    (0, _classCallCheck2.default)(this, Alert);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", _objectSpread({}, defaultState));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "FirstChild", function (props) {
      var childrenArray = _react.default.Children.toArray(props.children);
      return childrenArray[0] || null;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "confirm", function () {
      _this.setState({
        alertStatus: false
      });
      _this.state.close();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "open", function (options) {
      options = options || {};
      options.alertStatus = true;
      _this.setState(_objectSpread(_objectSpread({}, defaultState), options));
    });
    return _this;
  }
  (0, _createClass2.default)(Alert, [{
    key: "close",
    value: function close() {
      this.state.close();
      this.setState(_objectSpread({}, defaultState));
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !(0, _immutable.is)((0, _immutable.fromJS)(this.props), (0, _immutable.fromJS)(nextProps)) || !(0, _immutable.is)((0, _immutable.fromJS)(this.state), (0, _immutable.fromJS)(nextState));
    }
  }, {
    key: "renderSuccess",
    value: function renderSuccess() {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "body-wrapper"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "confirm-body"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "title"
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "anticon-success-circle"
      }, "\u221A"), /*#__PURE__*/_react.default.createElement("span", {
        className: "success-title"
      }, this.state.content))), /*#__PURE__*/_react.default.createElement("div", {
        className: "confirm-btns"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "primary-btn",
        onClick: this.confirm
      }, "\u77E5\u9053\u4E86")));
    }
  }, {
    key: "renderInfo",
    value: function renderInfo() {
      var kind = this.state.kind;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "body-wrapper"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "confirm-body"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "title"
      }, kind === 'info' && /*#__PURE__*/_react.default.createElement("span", {
        className: "anticon-info-circle"
      }, "i"), kind === 'error' && /*#__PURE__*/_react.default.createElement("span", {
        className: "anticon-error-circle"
      }, "\xD7"), kind === 'warning' && /*#__PURE__*/_react.default.createElement("span", {
        className: "anticon-warning-circle"
      }, "!"), /*#__PURE__*/_react.default.createElement("span", {
        className: "info-title"
      }, this.state.title)), /*#__PURE__*/_react.default.createElement("div", {
        className: "confirm-content"
      }, this.state.content)), /*#__PURE__*/_react.default.createElement("div", {
        className: "confirm-btns"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "primary-btn",
        onClick: this.confirm
      }, "\u77E5\u9053\u4E86")));
    }
  }, {
    key: "render",
    value: function render() {
      var kind = this.state.kind;
      return /*#__PURE__*/_react.default.createElement(_reactAddonsCssTransitionGroup.default, {
        component: this.FirstChild,
        transitionName: "hide",
        transitionEnterTimeout: 300,
        transitionLeaveTimeout: 300
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "alert-con",
        style: this.state.alertStatus ? {
          display: 'flex'
        } : {
          display: 'none'
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "alert-context"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "alert-body"
      }, kind === 'success' ? this.renderSuccess() : this.renderInfo()))));
    }
  }]);
  return Alert;
}(_react.Component);
var div = document.createElement('div');
var props = {};
document.body.appendChild(div);
var Box = _reactDom.default.render( /*#__PURE__*/_react.default.createElement(Alert, props), div);
var _default = Box;
exports.default = _default;