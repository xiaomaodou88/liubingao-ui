import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
import React, { Component } from 'react';
import './style/css';
var Progress = /*#__PURE__*/function (_Component) {
  _inherits(Progress, _Component);
  var _super = _createSuper(Progress);
  function Progress(props) {
    var _this;
    _classCallCheck(this, Progress);
    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }
  _createClass(Progress, [{
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
        return /*#__PURE__*/React.createElement("div", {
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
      return /*#__PURE__*/React.createElement("div", {
        className: "app-791001348092346369-Main-CustomChart ".concat(className)
      }, /*#__PURE__*/React.createElement("div", {
        className: "app-791001348092346369-Main-CustomChart-Progress",
        style: {
          width: width
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "app-791001348092346369-Main-CustomChart-middle",
        style: {
          width: percent,
          background: "linear-gradient(92deg, ".concat(backgroundMid[0], " 0%, ").concat(backgroundMid[1], " 100%)")
        }
      }), percentInner && /*#__PURE__*/React.createElement("div", {
        className: "app-791001348092346369-Main-CustomChart-inner",
        style: {
          width: percentInner,
          background: "linear-gradient(92deg, ".concat(linearGradien[0], " 0%, ").concat(linearGradien[1], " 100%)")
        }
      }, showStep && this.renderSteps())));
    }
  }]);
  return Progress;
}(Component);
export default Progress;