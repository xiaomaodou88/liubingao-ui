import { Component } from 'react';
import './style';
interface PropsType {
    /**
    * @description  内层百分比
    * @default
    */
    percentInner?: string;
    /**
    * @description  中间层百分比
    * @default 0
    */
    percent?: string;
    /**
    * @description  渐变色
    * @default ['#FC7B03','#FCD003']
    */
    linearGradien?: [string, string];
    /**
    * @description  是否展示分割线
    * @default true
    */
    showStep?: boolean;
    /**
    * @description  宽度
    * @default 345px
    */
    width?: string;
    /**
    * @description  中间层背景颜色
    * @default []
    */
    backgroundMid?: Array<string>;
    /**
    * @description  类名
    */
    className?: string;
}
declare class Progress extends Component<PropsType> {
    constructor(props: any);
    componentDidMount(): void;
    renderSteps(): JSX.Element[];
    render(): JSX.Element;
}
export default Progress;
