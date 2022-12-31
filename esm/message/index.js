import React from 'react';
import ReactDOM from 'react-dom';
import Toast from './toast';
import './style/css';
function createNotification() {
  var div = document.createElement('div');
  document.body.appendChild(div);
  var notification = ReactDOM.render( /*#__PURE__*/React.createElement(Toast, null), div);
  return {
    addNotice: function addNotice(notice) {
      return notification.addNotice(notice);
    },
    destroy: function destroy() {
      ReactDOM.unmountComponentAtNode(div);
      document.body.removeChild(div);
    }
  };
}
var notification;
var notice = function notice(type, content) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2000;
  var onClose = arguments.length > 3 ? arguments[3] : undefined;
  if (!notification) notification = createNotification();
  // notification = createNotification()
  return notification.addNotice({
    type: type,
    content: content,
    duration: duration,
    onClose: onClose
  });
};
// const close = () => return notification.removeNotice({ type, content, duration, onClose })
// const Message = 
export default {
  info: function info(content, duration, onClose) {
    return notice('info', content, duration, onClose);
  },
  success: function success() {
    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '操作成功';
    var duration = arguments.length > 1 ? arguments[1] : undefined;
    var onClose = arguments.length > 2 ? arguments[2] : undefined;
    return notice('success', content, duration, onClose);
  },
  error: function error(content, duration, onClose) {
    return notice('error', content, duration, onClose);
  },
  warning: function warning(content, duration, onClose) {
    return notice('warning', content, duration, onClose);
  },
  loading: function loading() {
    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '加载中...';
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var onClose = arguments.length > 2 ? arguments[2] : undefined;
    return notice('loading', content, duration, onClose);
  }
};