import React, {useState} from "react";
import {Button, FormGroup} from "reactstrap";
import {useStoreActions, useStoreState} from "../../../store";
import {EditItemForm} from "./EditItemForm";
import AlertPanel from "../../AlertPanel/AlertPanel";
import {defaultNewItem, validateEditItemForm} from "./utils";

export const NewItemForm = () => {

    const newItem = useStoreState(state => state.newItem);
    const setNewItem = useStoreActions(actions => actions.setNewItem);

    const groups = useStoreState(state => state.groups);
    const saveItem = useStoreActions(actions => actions.saveItem)
    const [validForm, setValidForm] = useState<boolean | null>(null);
    const [alertPanelText, setAlertPanelText] = useState<string>("");

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
        }}>
            {renderAlert()}
            <EditItemForm
                formName="new-item"
                editedItem={newItem}
                handleNameTextChange={(event) => {
                    setNewItem({...newItem, name: event.target.value});
                }}
                handleNotesTextChange={(event) => {
                    setNewItem({...newItem, notes: event.target.value});
                }}
                handleRecurringCheckChange={(event) => {
                    setNewItem({...newItem, recurring: event.target.checked});
                }}
                handleGroupCheckChange={((event, groupId) => {
                    const newGroups = groups.filter(group => {
                        if (group.id === groupId) {
                            return event.target.checked;
                        }
                        return newItem.groups.some((someGroup: {groupId: number}) => someGroup.groupId === group.id);
                    }).map(fullGroup => ({
                        groupId: fullGroup.id!,
                        groupName: fullGroup.name!
                    }));
                    setNewItem({
                        ...newItem,
                        groups: newGroups
                    });
                })}
                handleFormSubmit={handleSubmit}
            />
            <FormGroup className="bottom-buttons">
                <Button block color="info" type="submit">Save</Button>
            </FormGroup>
        </form>
    );

    function renderAlert() {
        if (validForm === false) {
            return (
                <AlertPanel color="danger" text={alertPanelText} />
            );
        }
    }

    function handleSubmit() {
        const {isValid, alertText} = validateEditItemForm(newItem);
        setValidForm(isValid);
        setAlertPanelText(alertText);

        if (isValid) {
            saveItem(newItem).then(() => {
                setNewItem(defaultNewItem);
            });
        }
    }
}