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
var PersonalInfoCard = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(PersonalInfoCard, _Component);
  var _super = _createSuper(PersonalInfoCard);
  function PersonalInfoCard() {
    var _this;
    (0, _classCallCheck2.default)(this, PersonalInfoCard);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getHello", function () {
      var hour = new Date().getHours();
      if (hour >= 0 && hour <= 5 || hour >= 19) {
        return '晚上好';
      } else if (hour > 5 && hour < 11) {
        return '上午好';
      } else if (hour >= 11 && hour < 14) {
        return '中午好';
      } else {
        return '下午好';
      }
    });
    return _this;
  }
  (0, _createClass2.default)(PersonalInfoCard, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        avatar = _this$props.avatar,
        organization = _this$props.organization,
        department = _this$props.department,
        _this$props$width = _this$props.width,
        width = _this$props$width === void 0 ? 450 : _this$props$width,
        className = _this$props.className;
      var url = avatar.url,
        username = avatar.username;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "app-personalInfoCard ".concat(className),
        style: {
          width: width + 'px'
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "avatar"
      }, url ? /*#__PURE__*/_react.default.createElement("img", {
        src: url,
        alt: ""
      }) : /*#__PURE__*/_react.default.createElement("span", null, username.substring(0, 1))), /*#__PURE__*/_react.default.createElement("div", {
        className: "content"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "sayHello"
      }, this.getHello()), /*#__PURE__*/_react.default.createElement("div", {
        className: "name"
      }, username), /*#__PURE__*/_react.default.createElement("div", {
        className: "department"
      }, /*#__PURE__*/_react.default.createElement("span", null, organization), /*#__PURE__*/_react.default.createElement("span", {
        className: "dep"
      }, department))));
    }
  }]);
  return PersonalInfoCard;
}(_react.Component);
var _default = PersonalInfoCard;
exports.default = _default;