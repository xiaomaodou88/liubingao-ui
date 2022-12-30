import { Component } from 'react';
import './style';
type item = {
    id: string;
    name: string;
};
interface PropsType {
    /**
    * @description  按钮list 每一项item = {
    *       id: string,
    *       name: string
    *    }
    * @default
    */
    tabBottonList: Array<item>;
    /**
    * @description 当前选中的Id
    * @default
    */
    activeId: string;
    /**
    * @description 点击时的回调
    * @default
    */
    onChange: Function;
    /**
    * @description 类名
    */
    className?: string;
}
declare class TabBotton extends Component<PropsType> {
    componentDidMount(): void;
    render(): JSX.Element;
}
export default TabBotton;
