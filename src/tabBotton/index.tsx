import React, { Component } from 'react';
import './style';

type item = {
    id: string,
    name: string
}
interface PropsType {
    /**
    * @description  按钮list 每一项item = {
    *       id: string,
    *       name: string
    *    }
    * @default
    */
    tabBottonList: Array<item>,
    /**
    * @description 当前选中的Id
    * @default
    */
    activeId: string,
    /**
    * @description 点击时的回调
    * @default
    */
    onChange: Function,
    /**
    * @description 类名
    */
    className?: string
}

class TabBotton extends Component<PropsType> {
    componentDidMount() {
    }
    render() {
        const { tabBottonList, activeId, className } = this.props
        return (
            <div className={`app-791001348092346369-TabBotton ${className}`}>
                {
                    tabBottonList.map((item, i) => (
                        <div
                            key={i}
                            className={activeId === item.id ? 'app-791001348092346369-TabBotton-active app-791001348092346369-TabBotton-item' : 'app-791001348092346369-TabBotton-item'}
                            onClick={() => { this.props.onChange(item.id) }}
                        >{item.name}</div>
                    ))
                }
            </div>
        );
    }
}

export default TabBotton