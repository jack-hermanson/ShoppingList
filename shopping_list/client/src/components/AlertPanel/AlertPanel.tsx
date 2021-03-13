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

        this.state = {
            visible: true
        };
    }

    render() {
        return (
            <Alert
                className="mt-3"
                color={this.props.color}
                isOpen={this.state.visible}
                toggle={() => this.setState({visible: false})}
            >
                {this.props.text}
            </Alert>
        );
    }
}