import React from 'react';
import './style';
interface PropsType {
    /**
       * @description  是否展示
       * @default
       */
    visible: boolean;
    /**
       * @description  点击遮罩回调
       * @default
       */
    onChange: Function;
    /**
       * @description  类名
       * @default
       */
    className?: string;
    children?: React.ReactNode;
}
declare class Mask extends React.Component<PropsType> {
    render(): JSX.Element;
}
export default Mask;
