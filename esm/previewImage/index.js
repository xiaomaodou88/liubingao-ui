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
var width80 = 80;
var scale = 1;
var PreviewImage = /*#__PURE__*/function (_Component) {
  _inherits(PreviewImage, _Component);
  var _super = _createSuper(PreviewImage);
  function PreviewImage(props) {
    var _this;
    _classCallCheck(this, PreviewImage);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "imgOnWheel", function (e) {
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
  _createClass(PreviewImage, [{
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
      return /*#__PURE__*/React.createElement(React.Fragment, null, visible && /*#__PURE__*/React.createElement("div", {
        className: "app-59ad9e-imgDolg ".concat(className),
        onClick: function onClick(e) {
          e.stopPropagation();
          // width80 = 80
          scale = 1;
          close();
          document.body.style.overflow = 'auto';
        },
        onWheel: this.imgOnWheel
      }, /*#__PURE__*/React.createElement("span", {
        className: "icon-coms02-Delete",
        id: "app-59ad9e-imgDolgClose",
        onClick: function onClick(e) {
          e.stopPropagation();
          // width80 = 80
          scale = 1;
          close();
          document.body.style.overflow = 'auto';
        }
      }, "\xD7"), /*#__PURE__*/React.createElement("img", {
        onClick: function onClick(e) {
          e.stopPropagation();
          // this.setState({ visible: true })
        },
        src: currentImgUrl
      })));
    }
  }]);
  return PreviewImage;
}(Component);
export default PreviewImage;