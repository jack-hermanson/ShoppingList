import React, {ChangeEvent, Component} from "react";
import {FormGroup, Input, Label} from "reactstrap";

interface Props {
    checked: boolean;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    label: string;
}

export default class CheckboxInput extends Component<Props, any> {
    render() {
        return (
            <FormGroup check>
                <Label check>
                    <Input
                        className="checkbox-lg"
                        checked={this.props.checked}
                        onChange={this.props.handleChange}
                        type="checkbox"
                    />
                    <span className="pl-2">{this.props.label}</span>
                </Label>
            </FormGroup>
        );
    }
}
