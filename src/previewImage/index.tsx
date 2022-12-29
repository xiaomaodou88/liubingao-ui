import React, { Component } from 'react';
import './style';

type item = {
    id: string,
    image: string,
    name: string,
}
interface PropsType {
    /**
    * @description  是否展示
    * @default
    */
    visible: boolean,
    /**
    * @description  图片url
    * @default
    */
    currentImgUrl: string,
    /**
    * @description 关闭事件
    */
    close: Function,
    /**
    * @description  鼠标滚动是否可放大缩小
    * @default false
    */
    whoolScale?: boolean,
    /**
    * @description 类名
    */
    className?: string
}
type StateType = {
    visible: boolean
}

interface PreviewImage {
    state: StateType;
    props: PropsType
}


let width80 = 80
let scale = 1
class PreviewImage extends Component<PropsType> {
    constructor(props: PropsType) {
        super(props);
        this.state = {
            visible: false
        }
    }
    componentDidMount() {
    }
    componentWillUnmount(): void {
        document.body.style.overflow = 'auto'
    }

    imgOnWheel = (e:any) => {
        const { whoolScale } = this.props
        if (!whoolScale) return
        document.body.style.overflow = 'hidden';
        const img: any = document.querySelector('.app-59ad9e-imgDolg img')
        if (e.nativeEvent.wheelDelta < 0) { // 缩小
            if (scale <= 0.2) return
            scale = scale - 0.1
            img.style.scale = scale
        } else {// 放大
            scale = scale + 0.1
            img.style.scale = scale
        }
    }

    render() {
        const { visible, currentImgUrl, close, whoolScale = false, className } = this.props
        // const { visible } = this.state
        if (visible) {
            document.body.style.overflow = 'hidden'
        }
        return (
            <>{visible && <div className={`app-59ad9e-imgDolg ${className}`} onClick={(e) => {
                e.stopPropagation()
                // width80 = 80
                scale = 1
                close()
                document.body.style.overflow = 'auto';
            }}
                onWheel={this.imgOnWheel}
            >
                <span className="icon-coms02-Delete" id="app-59ad9e-imgDolgClose" onClick={(e) => {
                    e.stopPropagation()
                    // width80 = 80
                    scale = 1
                    close()
                    document.body.style.overflow = 'auto';
                }}>×</span>
                <img onClick={(e) => {
                    e.stopPropagation()
                    // this.setState({ visible: true })
                }} src={currentImgUrl} />
            </div>}</>
        );
    }
}

export default PreviewImage