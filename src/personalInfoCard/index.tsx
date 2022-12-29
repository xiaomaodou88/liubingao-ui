import React, { Component } from 'react';
import './style';

type avatar = {
    url: string,
    username: string,
}
interface PropsType {
    /**
    * @description  {
            url: string, 用户头像连接
            username: string, 用户名字
        }
    * @default
    */
    avatar: avatar,
    /**
    * @description 宽度
    * @default 450
    */
    width?: number,
    /**
    * @description 组织名称
    */
    organization?: string
    /**
    * @description 部门名称
    */
    department?: string
    /**
    * @description 类名
    */
    className?: string
}

class PersonalInfoCard extends Component<PropsType> {
    componentDidMount() {
    }

    getHello = () => {
        let hour = new Date().getHours();
        if ((hour >= 0 && hour <= 5) || hour >= 19) {
            return '晚上好'
        } else if (hour > 5 && hour < 11) {
            return '上午好'
        }else if (hour >= 11 && hour < 14) {
            return '中午好'
        } else {
            return '下午好'
        }
    }
    render() {
        const { avatar,organization, department, width = 450, className } = this.props
        const { url, username } = avatar
        return (
            <div className={`app-personalInfoCard ${className}`} style={{width: width + 'px'}}>
                <div className="avatar">{
                    url ? <img src={url} alt="" /> : <span>{username.substring(0, 1)}</span>
                }</div>
                <div className="content">
                    <div className="sayHello">{this.getHello()}</div>
                    <div className="name">{username}</div>
                    <div className="department">
                        <span>{organization}</span>
                        <span className='dep'>{department}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default PersonalInfoCard