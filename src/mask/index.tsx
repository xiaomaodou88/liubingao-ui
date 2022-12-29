import React from 'react';
import './style';

interface PropsType {
/**
   * @description  是否展示
   * @default
   */
    visible: boolean,
    
/**
   * @description  点击遮罩回调
   * @default
   */
    onChange: Function,
    /**
       * @description  类名
       * @default
       */
    className?: string,
    children?: React.ReactNode
}

class Mask extends React.Component<PropsType> {
    render() {
        const { className, visible } = this.props
        return (
            <div className={`app-59ad9e-Mask ${className} ${!visible ? 'ecode-hide' : ''}`} onClick={(e:any) => {
                // if (!e.target.className.includes('wea-slide-modal')) return
                this.props.onChange()
            }}>{
                    this.props.children
                }</div>
        )
    }
}

export default Mask