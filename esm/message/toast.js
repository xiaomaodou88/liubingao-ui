import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
import React, { Component } from 'react';
var ToastBox = /*#__PURE__*/function (_Component) {
  _inherits(ToastBox, _Component);
  var _super = _createSuper(ToastBox);
  function ToastBox(props) {
    var _this;
    _classCallCheck(this, ToastBox);
    _this = _super.call(this, props);
    _this.transitionTime = 300;
    _this.state = {
      notices: []
    };
    _this.removeNotice = _this.removeNotice.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(ToastBox, [{
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
      return /*#__PURE__*/React.createElement("div", {
        className: "toast"
      }, notices.map(function (notice) {
        return /*#__PURE__*/React.createElement("div", {
          className: "toast_bg ".concat(className[notice.type]),
          key: notice.key
        }, /*#__PURE__*/React.createElement("div", {
          className: "toast_box"
        }, /*#__PURE__*/React.createElement("div", {
          className: "toast_close",
          onClick: function onClick() {
            _this4.removeNotice(notice.key);
          }
        }, "\xD7"), /*#__PURE__*/React.createElement("div", {
          className: "toast_icon ".concat(icons[notice.type])
        }), /*#__PURE__*/React.createElement("div", {
          className: "toast_text"
        }, notice.content), notice.type !== 'loading' && /*#__PURE__*/React.createElement("div", {
          className: "toast_progress",
          style: {
            transition: "width ".concat(notice.duration / 1000, "s linear")
          }
        })));
      }));
    }
  }]);
  return ToastBox;
}(Component);
export default ToastBox;