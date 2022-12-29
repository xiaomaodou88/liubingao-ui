import React, { Component } from 'react';
import './style';

type item = {
    id: string | number,
    image: string, // 图片地址
    title: string, // 标题
    describe: string, // 描述
    showMarkNew?: boolean, // 是否显示NEW
    url?: string, // 跳转链接
    titleClass?: string,// title类名
    handleClick?: Function
}
interface PropsType {
    /**
    * @description  详情看下边item API
    * @default
    */
    cardList: Array<item>,
    /**
    * @description 类名
    */
    className?: string
}

class CardList extends Component<PropsType> {
    componentDidMount() {
    }
    render() {
        const { cardList, className } = this.props
        return (
            <div className={`app-cardList container ${className}`}>
                <div className="row">{
                    cardList.map(item => (
                        <div className="card" key={item.id} onClick={()=>{
                            item.handleClick && item.handleClick(item)
                        }}>
                            <div className={`inner ${item.showMarkNew ? 'cornermark' : ''}`}>
                                <a href={item.url || 'javascript:;'}>
                                    <div className="left">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="right">
                                        <h2 className={item.titleClass}>{item.title}</h2>
                                        <p>{item.describe}</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        );
    }
}

export default CardList