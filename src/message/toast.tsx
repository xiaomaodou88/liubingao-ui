import React, { Component } from 'react'


type StateType = {
    notices: any,
}

interface ToastBox {
    transitionTime: number
    state: StateType;
    // props: PropsType
}
class ToastBox extends Component {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.transitionTime = 300
        this.state = { notices: [] }
        this.removeNotice = this.removeNotice.bind(this)
    }
    componentDidMount(): void {
    }
    getNoticeKey() {
        const { notices } = this.state
        return `notice-${new Date().getTime()}-${notices.length}`
    }

    addNotice(notice:any) {
        const { notices } = this.state
        notice.key = this.getNoticeKey()

        // notices.push(notice);//展示所有的提示
        notices[0] = notice;//仅展示最后一个提示

        this.setState({ notices })
        if (notice.duration > 0) {
            
            setTimeout(() => {

                const dom:any = document.querySelector('.toast_progress')
                if (!dom) return
                dom.style.width = 0
            });
            
            setTimeout(() => {
                this.removeNotice(notice.key)
            }, notice.duration)
        }
        return () => { this.removeNotice(notice.key) }
    }

    removeNotice(key: any) {
        const { notices } = this.state
        this.setState({
            notices: notices.filter((notice: any) => {
                // console.log(notice)
                if (notice.key === key) {
                    if (notice.onClose) setTimeout(notice.onClose, this.transitionTime)
                    return false
                }
                return true
            })
        })
    }

    render() {
        const { notices } = this.state
        const icons:any = {
            info: 'toast_info',
            success: 'toast_success',
            error: 'toast_error',
            warning: 'toast_warning',
            loading: 'toast_loading'
        }
        const  className:any= {
            info: 'toast_info_box',
            success: 'toast_success_box',
            error: 'toast_error_box',
            warning: 'toast_warning_box',
            loading: 'toast_loading_box'
        }
        return (
            <div className="toast">
                {
                    notices.map((notice:any) => (
                        <div className={`toast_bg ${className[notice.type]}`} key={notice.key}>
                            <div  className={`toast_box`}>
                                <div className="toast_close" onClick={()=>{this.removeNotice(notice.key)}}>×</div>
                                <div className={`toast_icon ${icons[notice.type]}`}></div>
                                <div className='toast_text'>{notice.content}</div>
                                {notice.type !== 'loading' && <div className='toast_progress' style={{transition: `width ${notice.duration/1000}s linear`}}></div>}
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default ToastBox