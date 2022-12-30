import { Component } from 'react';
import './style';
type avatar = {
    url: string;
    username: string;
};
interface PropsType {
    /**
    * @description  {
            url: string, 用户头像连接
            username: string, 用户名字
        }
    * @default
    */
    avatar: avatar;
    /**
    * @description 宽度
    * @default 450
    */
    width?: number;
    /**
    * @description 组织名称
    */
    organization?: string;
    /**
    * @description 部门名称
    */
    department?: string;
    /**
    * @description 类名
    */
    className?: string;
}
declare class PersonalInfoCard extends Component<PropsType> {
    componentDidMount(): void;
    getHello: () => "晚上好" | "上午好" | "中午好" | "下午好";
    render(): JSX.Element;
}
export default PersonalInfoCard;
