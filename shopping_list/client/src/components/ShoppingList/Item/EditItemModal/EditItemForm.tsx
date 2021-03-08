import React, {ChangeEvent, Component, Fragment} from "react";
import {FormGroup, Input, Label} from "reactstrap";
import TextInput from "../../../FormInput/TextInput";
import CheckboxInput from "../../../FormInput/CheckboxInput";

interface Props {
    name: string;
    notes: string;
    recurring: boolean;
    handleNameTextChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleNotesTextChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleRecurringCheckChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default class EditItemForm extends Component<Props, any> {
    render() {
        return (
            <Fragment>
                {this.renderNameInput()}
                {this.renderNotesInput()}
                {this.renderRecurringInput()}
            </Fragment>
        );
    }

    renderNameInput() {
        return (
            <TextInput
                label="Name"
                id="name-input"
                type="text"
                value={this.props.name}
                onChange={this.props.handleNameTextChange}
            />
        );
    }

    renderNotesInput() {
        return (
            <TextInput
                label="Notes"
                id="notes-input"
                type="textarea"
                value={this.props.notes}
                onChange={this.props.handleNotesTextChange}
            />
        );
    }

    renderRecurringInput() {
        return (
            <Fragment>
                <Label className="mb-0">Recurring</Label>
                <CheckboxInput
                    checked={this.props.recurring}
                    handleChange={this.props.handleRecurringCheckChange}
                    label="Item repeats"
                />
            </Fragment>
        )
    }
}
