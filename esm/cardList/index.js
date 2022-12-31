import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
import React, { Component } from 'react';
import './style/css';
var CardList = /*#__PURE__*/function (_Component) {
  _inherits(CardList, _Component);
  var _super = _createSuper(CardList);
  function CardList() {
    _classCallCheck(this, CardList);
    return _super.apply(this, arguments);
  }
  _createClass(CardList, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        cardList = _this$props.cardList,
        className = _this$props.className;
      return /*#__PURE__*/React.createElement("div", {
        className: "app-cardList container ".concat(className)
      }, /*#__PURE__*/React.createElement("div", {
        className: "row"
      }, cardList.map(function (item) {
        return /*#__PURE__*/React.createElement("div", {
          className: "card",
          key: item.id,
          onClick: function onClick() {
            item.handleClick && item.handleClick(item);
          }
        }, /*#__PURE__*/React.createElement("div", {
          className: "inner ".concat(item.showMarkNew ? 'cornermark' : '')
        }, /*#__PURE__*/React.createElement("a", {
          href: item.url || 'javascript:;'
        }, /*#__PURE__*/React.createElement("div", {
          className: "left"
        }, /*#__PURE__*/React.createElement("img", {
          src: item.image,
          alt: ""
        })), /*#__PURE__*/React.createElement("div", {
          className: "right"
        }, /*#__PURE__*/React.createElement("h2", {
          className: item.titleClass
        }, item.title), /*#__PURE__*/React.createElement("p", null, item.describe)))));
      })));
    }
  }]);
  return CardList;
}(Component);
export default CardList;