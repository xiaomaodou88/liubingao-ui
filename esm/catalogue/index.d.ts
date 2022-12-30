import React from 'react';
import './style';
type Item = {
    name: string;
    children: Array<Item>;
    id: string | number;
};
interface PropsType {
    /**
     * @description  目录数据,每一项见下边Item结构
     * @default
     */
    catalogueData: Array<Item>;
    /**
    * @description  当前选中的id
    * @default
    */
    activeId: string | number;
    /**
    * @description  设置activeId的方法
    * @default
    */
    setActiveId: Function;
    /**
     * @description  是否展示计数
     * @default false
     */
    showCounter?: boolean;
    /**
     * @description  一级目录是否采用汉字计数
     * @default false
     */
    toHan?: boolean;
    /**
     * @description  点击的回调,回传当前点击的item
     * @default
     */
    onChange?: Function;
    /**
     * @description  类名
     * @default
     */
    className?: string;
    children?: React.ReactNode;
}
type StateType = {
    catalogueData: any;
};
declare class Catalogue extends React.Component<PropsType, StateType> {
    constructor(props: PropsType);
    triggerCatalogue: (item: any) => void;
    render(): JSX.Element;
}
export default Catalogue;
