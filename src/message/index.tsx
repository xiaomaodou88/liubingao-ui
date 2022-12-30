import React from 'react'
import ReactDOM from 'react-dom'
import Toast from './toast'
import './style'

function createNotification() {
  const div = document.createElement('div')
  document.body.appendChild(div)
  const notification:any = ReactDOM.render(<Toast />, div)
  return {
    addNotice(notice: any) {
      return notification.addNotice(notice)
    },
    destroy() {
      ReactDOM.unmountComponentAtNode(div)
      document.body.removeChild(div)
    }
  }
}

let notification:any
const notice = (type: string, content: string, duration = 2000, onClose: any) => {
  if (!notification) notification = createNotification()
  // notification = createNotification()
  return notification.addNotice({ type, content, duration, onClose })
}
// const close = () => return notification.removeNotice({ type, content, duration, onClose })
// const Message = 
export default {
  info(content: string, duration?: number | undefined, onClose?: any) {
    return notice('info', content, duration, onClose)
  },
  success(content = '操作成功', duration?: number | undefined, onClose?: any) {
    return notice('success', content, duration, onClose)
  },
  error(content: string, duration?: number | undefined , onClose?: any) {
    return notice('error', content, duration, onClose)
  },
  warning(content: string, duration?: number | undefined , onClose?: any) {
    return notice('warning', content, duration, onClose)
  },
  loading(content = '加载中...', duration: number | undefined = 0, onClose?: any) {
    return notice('loading', content, duration, onClose)
  }
}