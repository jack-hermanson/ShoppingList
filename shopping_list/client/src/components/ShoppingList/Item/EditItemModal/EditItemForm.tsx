import React, {ChangeEvent, Fragment, useEffect} from "react";
import {Label, FormGroup} from "reactstrap";
import TextInput from "../../../FormInput/TextInput";
import CheckboxInput from "../../../FormInput/CheckboxInput";
import ItemModel from "../../../../models/ItemModel";
import {useStoreState} from "../../../../store";

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

    const groups = useStoreState(state => state.groups);

    return (
        <Fragment>
            {renderNameInput()}
            {renderNotesInput()}
            {renderRecurringInput()}
            {renderGroupsInput()}
        </Fragment>
    );


    function renderNameInput() {
        return (
            <FormGroup>
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
            </FormGroup>
        );
    }

    function renderNotesInput() {
        return (
            <FormGroup>
                <TextInput
                    label="Notes"
                    id="notes-input"
                    type="textarea"
                    value={props.editedItem.notes}
                    onChange={props.handleNotesTextChange}
                />
            </FormGroup>
        );
    }

    function renderRecurringInput() {
        return (
            <FormGroup>
                <Label className="mb-0">Recurring</Label>
                <CheckboxInput
                    checked={props.editedItem.recurring}
                    handleChange={props.handleRecurringCheckChange}
                    label="Item repeats"
                />
            </FormGroup>
        );
    }

    function renderGroupsInput() {
        return (
            <FormGroup>
                <Label className="mb-0">Groups</Label>
                {groups.map(group => (
                    <CheckboxInput
                        key={group.id}
                        checked={props.editedItem.groups.some(_group => _group.groupId === group.id)}
                        handleChange={(event) => console.log("change", event.target.checked)}
                        label={group.name!}
                    />
                ))}
            </FormGroup>
        );
    }
}
