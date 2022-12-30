import { Component } from 'react';
import './style';
interface PropsType {
    /**
    * @description  是否展示
    * @default
    */
    visible: boolean;
    /**
    * @description  图片url
    * @default
    */
    currentImgUrl: string;
    /**
    * @description 关闭事件
    */
    close: Function;
    /**
    * @description  鼠标滚动是否可放大缩小
    * @default false
    */
    whoolScale?: boolean;
    /**
    * @description 类名
    */
    className?: string;
}
type StateType = {
    visible: boolean;
};
interface PreviewImage {
    state: StateType;
    props: PropsType;
}
declare class PreviewImage extends Component<PropsType> {
    constructor(props: PropsType);
    componentDidMount(): void;
    componentWillUnmount(): void;
    imgOnWheel: (e: any) => void;
    render(): JSX.Element;
}
export default PreviewImage;
