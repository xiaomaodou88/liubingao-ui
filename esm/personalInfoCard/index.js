import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
import React, { Component } from 'react';
import './style/css';
var PersonalInfoCard = /*#__PURE__*/function (_Component) {
  _inherits(PersonalInfoCard, _Component);
  var _super = _createSuper(PersonalInfoCard);
  function PersonalInfoCard() {
    var _this;
    _classCallCheck(this, PersonalInfoCard);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "getHello", function () {
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
  _createClass(PersonalInfoCard, [{
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
      return /*#__PURE__*/React.createElement("div", {
        className: "app-personalInfoCard ".concat(className),
        style: {
          width: width + 'px'
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "avatar"
      }, url ? /*#__PURE__*/React.createElement("img", {
        src: url,
        alt: ""
      }) : /*#__PURE__*/React.createElement("span", null, username.substring(0, 1))), /*#__PURE__*/React.createElement("div", {
        className: "content"
      }, /*#__PURE__*/React.createElement("div", {
        className: "sayHello"
      }, this.getHello()), /*#__PURE__*/React.createElement("div", {
        className: "name"
      }, username), /*#__PURE__*/React.createElement("div", {
        className: "department"
      }, /*#__PURE__*/React.createElement("span", null, organization), /*#__PURE__*/React.createElement("span", {
        className: "dep"
      }, department))));
    }
  }]);
  return PersonalInfoCard;
}(Component);
export default PersonalInfoCard;