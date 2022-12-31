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
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var ToastBox = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(ToastBox, _Component);
  var _super = _createSuper(ToastBox);
  function ToastBox(props) {
    var _this;
    (0, _classCallCheck2.default)(this, ToastBox);
    _this = _super.call(this, props);
    _this.transitionTime = 300;
    _this.state = {
      notices: []
    };
    _this.removeNotice = _this.removeNotice.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(ToastBox, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "getNoticeKey",
    value: function getNoticeKey() {
      var notices = this.state.notices;
      return "notice-".concat(new Date().getTime(), "-").concat(notices.length);
    }
  }, {
    key: "addNotice",
    value: function addNotice(notice) {
      var _this2 = this;
      var notices = this.state.notices;
      notice.key = this.getNoticeKey();

      // notices.push(notice);//展示所有的提示
      notices[0] = notice; //仅展示最后一个提示

      this.setState({
        notices: notices
      });
      if (notice.duration > 0) {
        setTimeout(function () {
          var dom = document.querySelector('.toast_progress');
          if (!dom) return;
          dom.style.width = 0;
        });
        setTimeout(function () {
          _this2.removeNotice(notice.key);
        }, notice.duration);
      }
      return function () {
        _this2.removeNotice(notice.key);
      };
    }
  }, {
    key: "removeNotice",
    value: function removeNotice(key) {
      var _this3 = this;
      var notices = this.state.notices;
      this.setState({
        notices: notices.filter(function (notice) {
          // console.log(notice)
          if (notice.key === key) {
            if (notice.onClose) setTimeout(notice.onClose, _this3.transitionTime);
            return false;
          }
          return true;
        })
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;
      var notices = this.state.notices;
      var icons = {
        info: 'toast_info',
        success: 'toast_success',
        error: 'toast_error',
        warning: 'toast_warning',
        loading: 'toast_loading'
      };
      var className = {
        info: 'toast_info_box',
        success: 'toast_success_box',
        error: 'toast_error_box',
        warning: 'toast_warning_box',
        loading: 'toast_loading_box'
      };
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "toast"
      }, notices.map(function (notice) {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "toast_bg ".concat(className[notice.type]),
          key: notice.key
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "toast_box"
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "toast_close",
          onClick: function onClick() {
            _this4.removeNotice(notice.key);
          }
        }, "\xD7"), /*#__PURE__*/_react.default.createElement("div", {
          className: "toast_icon ".concat(icons[notice.type])
        }), /*#__PURE__*/_react.default.createElement("div", {
          className: "toast_text"
        }, notice.content), notice.type !== 'loading' && /*#__PURE__*/_react.default.createElement("div", {
          className: "toast_progress",
          style: {
            transition: "width ".concat(notice.duration / 1000, "s linear")
          }
        })));
      }));
    }
  }]);
  return ToastBox;
}(_react.Component);
var _default = ToastBox;
exports.default = _default;