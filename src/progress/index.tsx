import React, { Component } from 'react';
import './style';

interface PropsType {

    /**
    * @description  内层百分比
    * @default
    */
    percentInner?: string, // '30%',
    /**
    * @description  中间层百分比
    * @default 0
    */
    percent?: string, // '50%',
    /**
    * @description  渐变色
    * @default ['#FC7B03','#FCD003']
    */
    linearGradien?: [string, string], //['#FC7B03','#FCD003']
    /**
    * @description  是否展示分割线
    * @default true
    */
    showStep?: boolean,
    /**
    * @description  宽度
    * @default 345px
    */
    width?: string,
    /**
    * @description  中间层背景颜色
    * @default []
    */
    backgroundMid?: Array<string>,
    /**
    * @description  类名
    */
    className?: string
}

class Progress extends Component<PropsType> {
    constructor(props: any) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }
    renderSteps() {
        // const { steps = 50 } = this.props
        let list = Array.from({ length: 50 })
        const dom = list.map((item, i) => <div className='pp-791001348092346369-Main-CustomChart-steps' key={i} style={{ marginLeft: '6px' }}></div>)
        return dom
    }
    render() {
        const { percent = '0', percentInner, linearGradien = ['#FC7B03', '#FCD003'], showStep = true, width = '345px', backgroundMid = [], className } = this.props
        return (
            <div className={`app-791001348092346369-Main-CustomChart ${className}`}>
                <div className='app-791001348092346369-Main-CustomChart-Progress' style={{ width: width }}>
                    <div className='app-791001348092346369-Main-CustomChart-middle' style={{ width: percent, background: `linear-gradient(92deg, ${backgroundMid[0]} 0%, ${backgroundMid[1]} 100%)` }}></div>
                    {percentInner && <div className='app-791001348092346369-Main-CustomChart-inner' style={{ width: percentInner, background: `linear-gradient(92deg, ${linearGradien[0]} 0%, ${linearGradien[1]} 100%)` }}>
                        {showStep && this.renderSteps()}
                    </div>}
                </div>
            </div>
        );
    }
}

export default Progress