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
                        checked={this.props.checked}
                        onChange={this.props.handleChange}
                        type="checkbox"
                    />
                    {this.props.label}
                </Label>
            </FormGroup>
        );
    }
}
