import React, { Component } from 'react';
import './style';

type item = {
    id: string,
    name: string,
    icon?: string,
}
interface PropsType {
    /**
    * @description  按钮list 每一项item = {
    *       id: string,
    *       icon: string
    *       name: string
    *    }
    * @default
    */
    navList: Array<item>,
    /**
    * @description 选中的id
    */
    activeId?: string | number,
    /**
    * @description 选中时的类名
    */
    activeClass?: string
    /**
    * @description 点击回调,返回当前点击的item
    */
    handleClick?: Function,
    /**
    * @description 类名
    */
    className?: string
}

class Navigation extends Component<PropsType> {
    componentDidMount() {
    }
    render() {
        const { navList, activeId, activeClass, handleClick, className } = this.props
        return (
            <div className={`app-navigation ${className}`}>
                {
                    navList.map(item => (
                        <div className={`nav-item ${activeId === item.id?activeClass || 'active':''}`} key={item.id} onClick = {() => {
                            handleClick && handleClick(item)
                        }}>
                            {item.icon && <div className="icon">
                                <img src={item.icon} alt="" />
                            </div>}
                            <span>{item.name}</span>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Navigation