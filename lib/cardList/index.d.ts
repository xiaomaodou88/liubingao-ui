import { Component } from 'react';
import './style';
type item = {
    id: string | number;
    image: string;
    title: string;
    describe: string;
    showMarkNew?: boolean;
    url?: string;
    titleClass?: string;
    handleClick?: Function;
};
interface PropsType {
    /**
    * @description  详情看下边item API
    * @default
    */
    cardList: Array<item>;
    /**
    * @description 类名
    */
    className?: string;
}
declare class CardList extends Component<PropsType> {
    componentDidMount(): void;
    render(): JSX.Element;
}
export default CardList;
