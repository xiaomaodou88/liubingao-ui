import React, { Component } from 'react';
import './style';

type item = {
    id: string,
    image: string,
    name: string,
}
interface PropsType {
    /**
    * @description  按钮list 每一项item = {
    *       id: string,
    *       image: string
    *       name: string
    *    }
    * @default
    */
    appList: Array<item>,
    /**
    * @description 点击回调,返回当前点击的item
    */
    handleClick?: Function,
    /**
    * @description 类名
    */
    className?: string
}

class WorkbenchApp extends Component<PropsType> {
    componentDidMount() {
    }
    render() {
        const { appList, handleClick, className } = this.props
        return (
            <div className={`app-workbench ${className}`}>
                {
                    appList.map(item => (
                        <div className='app-item' key={item.id} onClick = {() => {
                            handleClick && handleClick(item)
                        }}>
                            <div className="icon">
                                <img src={item.image} alt="" />
                            </div>
                            <span>{item.name}</span>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default WorkbenchApp