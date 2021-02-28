import React, {Component} from "react";
import {Alert} from "reactstrap";

export interface AlertPanelProps {
    color: string;
    text: string;
}

interface State {
    visible: boolean;
}


export default class AlertPanel extends Component<AlertPanelProps, State> {
    constructor(props: AlertPanelProps) {
        super(props);

        this.props = props;

        this.state = {
            visible: true
        };
    }

    props: AlertPanelProps;

    render() {
        return (
            <Alert color={this.props.color}>
                {this.props.text}
            </Alert>
        );
    }
}