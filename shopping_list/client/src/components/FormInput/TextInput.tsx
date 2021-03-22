import React, {ChangeEvent, Component, KeyboardEvent, Fragment} from "react";
import {Input, Label} from "reactstrap";

interface Props {
    label: string;
    id: string;
    type: "text" | "textarea";
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
}

export default class TextInput extends Component<Props, any> {
    render() {
        return (
            <Fragment>
                <Label htmlFor={this.props.id}>{this.props.label}</Label>
                <Input
                    id={this.props.id}
                    type={this.props.type}
                    value={this.props.value}
                    onChange={this.props.onChange}
                    onKeyPress={this.props.onKeyPress}
                />
            </Fragment>
        );
    }
}