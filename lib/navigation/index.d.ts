import { Component } from 'react';
import './style';
type item = {
    id: string;
    name: string;
    icon?: string;
};
interface PropsType {
    /**
    * @description  按钮list 每一项item = {
    *       id: string,
    *       icon: string
    *       name: string
    *    }
    * @default
    */
    navList: Array<item>;
    /**
    * @description 选中的id
    */
    activeId?: string | number;
    /**
    * @description 选中时的类名
    */
    activeClass?: string;
    /**
    * @description 点击回调,返回当前点击的item
    */
    handleClick?: Function;
    /**
    * @description 类名
    */
    className?: string;
}
declare class Navigation extends Component<PropsType> {
    componentDidMount(): void;
    render(): JSX.Element;
}
export default Navigation;
