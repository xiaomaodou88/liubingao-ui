import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
import React from 'react';
import './style/css';
var Catalogue = /*#__PURE__*/function (_React$Component) {
  _inherits(Catalogue, _React$Component);
  var _super = _createSuper(Catalogue);
  function Catalogue(props) {
    var _this;
    _classCallCheck(this, Catalogue);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "triggerCatalogue", function (item) {
      var catalogueData = _this.state.catalogueData;
      var i = catalogueData.findIndex(function (c) {
        return c.id === item.id;
      });
      if (i < 0) return;
      catalogueData[i].showChild = !item.showChild;
      _this.setState({
        catalogueData: catalogueData
      });
    });
    _this.state = {
      catalogueData: fn(_this.props.catalogueData, 0)
    };
    return _this;
  }
  _createClass(Catalogue, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var catalogueData = this.state.catalogueData;
      var _this$props = this.props,
        activeId = _this$props.activeId,
        setActiveId = _this$props.setActiveId,
        onChange = _this$props.onChange,
        showCounter = _this$props.showCounter,
        _this$props$toHan = _this$props.toHan,
        toHan = _this$props$toHan === void 0 ? false : _this$props$toHan,
        className = _this$props.className;

      // catalogueData=fn(catalogueData,0)
      // let activeId = '57'
      return /*#__PURE__*/React.createElement("div", {
        className: "app-59ad9e-Details-catalogue ".concat(className)
      }, catalogueData.map(function (item, i) {
        return /*#__PURE__*/React.createElement("div", {
          className: "app-59ad9e-Details-catalogue-item ".concat(activeId === item.id ? 'active' : ''),
          key: item.id
        }, /*#__PURE__*/React.createElement("h3", {
          onClick: function onClick() {
            _this2.triggerCatalogue(item);
            onChange && onChange(item);
            if (item.children.length !== 0) return;
            setActiveId(item.id);
          }
        }, /*#__PURE__*/React.createElement("span", {
          className: "ecode-ellipsis",
          title: item.name
        }, showCounter && /*#__PURE__*/React.createElement("span", null, toHan ? changeNumToHan(item.counter) : item.counter, "\u3001"), item.name), /*#__PURE__*/React.createElement("span", null, item.children.length !== 0 && /*#__PURE__*/React.createElement(React.Fragment, null, item.showChild ? /*#__PURE__*/React.createElement("span", {
          className: "icon-coms-down2"
        }) : /*#__PURE__*/React.createElement("span", {
          className: "icon-coms-up2"
        })))), /*#__PURE__*/React.createElement("div", {
          className: "app-59ad9e-Details-catalogue-child",
          style: {
            display: !item.showChild ? 'block' : 'none'
          }
        }, item.children.map(function (child) {
          return /*#__PURE__*/React.createElement("div", {
            className: "app-59ad9e-Details-catalogue-child-item ecode-ellipsis ".concat(activeId === child.id ? 'active' : ''),
            key: child.id,
            onClick: function onClick() {
              setActiveId(child.id);
              _this2.triggerCatalogue(child);
            }
          }, showCounter && /*#__PURE__*/React.createElement("span", null, child.counter, " "), /*#__PURE__*/React.createElement("span", {
            title: child.name
          }, child.name));
        })));
      }));
    }
  }]);
  return Catalogue;
}(React.Component);
var fn = function fn(arr, prev) {
  if (!arr instanceof Array) return;
  var data = arr.map(function (item, i) {
    var count = i + 1;
    var counter = prev ? "".concat(prev, ".").concat(count) : count;
    // const prevNameList = []
    var prevName = item.name;
    item.children = fn(item.children, counter);
    return _objectSpread(_objectSpread({}, item), {}, {
      showChild: false,
      prevName: item.prevName,
      counter: counter
    });
  });
  return data;
};
var changeNumToHan = function changeNumToHan(num) {
  var arr1 = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  var arr2 = ['', '十', '百', '千', '万', '十', '百', '千', '亿', '十', '百', '千', '万', '十', '百', '千', '亿'];
  if (!num || isNaN(num)) return '零';
  var english = num.toString().split('');
  var result = '';
  for (var i = 0; i < english.length; i++) {
    var des_i = english.length - 1 - i; // 倒序排列设值
    result = arr2[i] + result;
    var arr1_index = english[des_i];
    result = arr1[arr1_index] + result;
  }
  result = result.replace(/零(千|百|十)/g, '零').replace(/十零/g, '十'); // 将【零千、零百】换成【零】 【十零】换成【十】
  result = result.replace(/零+/g, '零'); // 合并中间多个零为一个零
  result = result.replace(/零亿/g, '亿').replace(/零万/g, '万'); // 将【零亿】换成【亿】【零万】换成【万】
  result = result.replace(/亿万/g, '亿'); // 将【亿万】换成【亿】
  result = result.replace(/零+$/, ''); // 移除末尾的零
  // 将【一十】换成【十】
  result = result.replace(/^一十/g, '十');
  return result;
};
export default Catalogue;