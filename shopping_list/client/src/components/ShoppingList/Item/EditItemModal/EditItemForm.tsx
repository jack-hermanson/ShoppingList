import React, {ChangeEvent, Fragment, useEffect, useState} from "react";
import {Label, FormGroup} from "reactstrap";
import TextInput from "../../../FormInput/TextInput";
import CheckboxInput from "../../../FormInput/CheckboxInput";
import ItemModel from "../../../../models/ItemModel";
import {useStoreState} from "../../../../store";
import AlertPanel from "../../../AlertPanel/AlertPanel";

interface Props {
    editedItem: ItemModel;
    handleNameTextChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleNotesTextChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleRecurringCheckChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleGroupCheckChange: (event: ChangeEvent<HTMLInputElement>, groupId: number) => void;
    handleFormSubmit: () => void;
    formName: string;
}

export const EditItemForm = (props: Props) => {

    const groups = useStoreState(state => state.groups);
    const [validationText, setValidationText] = useState<string>("");
    const [valid, setValid] = useState<boolean>(true);

    return (
        <Fragment>
            {!valid &&
            <AlertPanel color="danger" text={validationText}/>
            }
            {renderNameInput()}
            {renderNotesInput()}
            {renderRecurringInput()}
            {renderGroupsInput()}
        </Fragment>
    );

    function validateInput() {

    }

    function renderNameInput() {
        return (
            <FormGroup>
                <TextInput
                    required
                    label="Name"
                    id={`${props.formName}-name-input`}
                    type="text"
                    value={props.editedItem.name}
                    onChange={props.handleNameTextChange}
                    placeholder="The name of the item..."
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
                    id={`${props.formName}-notes-input`}
                    type="textarea"
                    value={props.editedItem.notes}
                    onChange={props.handleNotesTextChange}
                    placeholder="Optional..."
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
                        handleChange={(event) => props.handleGroupCheckChange(event, group.id!)}
                        label={group.name!}
                    />
                ))}
            </FormGroup>
        );
    }
}
