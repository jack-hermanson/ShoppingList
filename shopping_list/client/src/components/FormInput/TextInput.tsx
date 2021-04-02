import React, {ChangeEvent, Component, KeyboardEvent, Fragment} from "react";
import {Input, Label} from "reactstrap";

interface Props {
    label: string;
    id: string;
    type: "text" | "textarea";
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
    required?: boolean;
    placeholder?: string;
}

export default class TextInput extends Component<Props, any> {
    render() {
        return (
            <Fragment>
                <Label required={this.props.required} htmlFor={this.props.id}>{this.props.label}</Label>
                <Input
                    required={this.props.required}
                    id={this.props.id}
                    type={this.props.type}
                    value={this.props.value}
                    onChange={this.props.onChange}
                    onKeyPress={this.props.onKeyPress}
                    placeholder={this.props.placeholder}
                />
            </Fragment>
        );
    }
}