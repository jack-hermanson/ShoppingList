import React, {ChangeEvent, Component} from "react";
import {FormGroup, Input, Label} from "reactstrap";

interface Props {
    label: string;
    id: string;
    type: "text" | "textarea";
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default class TextInput extends Component<Props, any> {
    render() {
        return (
            <FormGroup>
                <Label htmlFor={this.props.id}>{this.props.label}</Label>
                <Input
                    id={this.props.id}
                    type={this.props.type}
                    value={this.props.value}
                    onChange={this.props.onChange}
                />
            </FormGroup>
        );
    }
}