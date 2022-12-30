import { Component } from 'react';
type StateType = {
    notices: any;
};
interface ToastBox {
    transitionTime: number;
    state: StateType;
}
declare class ToastBox extends Component {
    constructor(props: {} | Readonly<{}>);
    componentDidMount(): void;
    getNoticeKey(): string;
    addNotice(notice: any): () => void;
    removeNotice(key: any): void;
    render(): JSX.Element;
}
export default ToastBox;
