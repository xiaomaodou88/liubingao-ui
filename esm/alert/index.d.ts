import React, { Component } from 'react';
import './style';
declare class Alert extends Component {
    state: {
        kind: string;
        alertStatus: boolean;
        title: string;
        content: string;
        close: () => void;
    };
    FirstChild: (props: any) => string | number | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null;
    confirm: () => void;
    open: (options: any) => void;
    close(): void;
    shouldComponentUpdate(nextProps: any, nextState: any): boolean;
    renderSuccess(): JSX.Element;
    renderInfo(): JSX.Element;
    render(): JSX.Element;
}
declare let Box: Alert;
export default Box;
