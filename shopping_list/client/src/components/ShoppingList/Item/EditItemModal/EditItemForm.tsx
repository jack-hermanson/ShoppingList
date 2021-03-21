import React, {ChangeEvent, Fragment} from "react";
import {Label} from "reactstrap";
import TextInput from "../../../FormInput/TextInput";
import CheckboxInput from "../../../FormInput/CheckboxInput";
import ItemModel from "../../../../models/ItemModel";

interface Props {
    editedItem: ItemModel;
    handleNameTextChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleNotesTextChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleRecurringCheckChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const EditItemForm = (props: Props) => {

    return (
        <Fragment>
            {renderNameInput()}
            {renderNotesInput()}
            {renderRecurringInput()}
        </Fragment>
    );


    function renderNameInput() {
        return (
            <TextInput
                label="Name"
                id="name-input"
                type="text"
                value={props.editedItem.name}
                onChange={props.handleNameTextChange}
            />
        );
    }

    function renderNotesInput() {
        return (
            <TextInput
                label="Notes"
                id="notes-input"
                type="textarea"
                value={props.editedItem.notes}
                onChange={props.handleNotesTextChange}
            />
        );
    }

    function renderRecurringInput() {
        return (
            <Fragment>
                <Label className="mb-0">Recurring</Label>
                <CheckboxInput
                    checked={props.editedItem.recurring}
                    handleChange={props.handleRecurringCheckChange}
                    label="Item repeats"
                />
            </Fragment>
        )
    }
}
