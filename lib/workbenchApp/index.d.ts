import { Component } from 'react';
import './style';
type item = {
    id: string;
    image: string;
    name: string;
};
interface PropsType {
    /**
    * @description  按钮list 每一项item = {
    *       id: string,
    *       image: string
    *       name: string
    *    }
    * @default
    */
    appList: Array<item>;
    /**
    * @description 点击回调,返回当前点击的item
    */
    handleClick?: Function;
    /**
    * @description 类名
    */
    className?: string;
}
declare class WorkbenchApp extends Component<PropsType> {
    componentDidMount(): void;
    render(): JSX.Element;
}
export default WorkbenchApp;
