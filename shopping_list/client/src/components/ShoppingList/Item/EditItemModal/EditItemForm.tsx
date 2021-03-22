import React, {ChangeEvent, Fragment, useEffect} from "react";
import {Label} from "reactstrap";
import TextInput from "../../../FormInput/TextInput";
import CheckboxInput from "../../../FormInput/CheckboxInput";
import ItemModel from "../../../../models/ItemModel";

interface Props {
    editedItem: ItemModel;
    handleNameTextChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleNotesTextChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleRecurringCheckChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleFormSubmit: () => void;
}

export const EditItemForm = (props: Props) => {

    useEffect(() => {
        document.getElementById("name-input")?.focus();
    });

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
                onKeyPress={(event) => {
                    if (event.key === "Enter") {
                        props.handleFormSubmit();
                    }
                }}
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
