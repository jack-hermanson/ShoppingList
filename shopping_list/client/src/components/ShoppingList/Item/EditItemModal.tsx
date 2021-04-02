import React, {Fragment, useEffect, useState} from "react";
import {Modal, ModalHeader, ModalBody, ModalFooter, Form, Button} from "reactstrap";
import {EditItemForm} from "./EditItemForm";
import {useStoreActions, useStoreState} from "../../../store";
import ItemModel from "../../../models/ItemModel";
import AlertPanel from "../../AlertPanel/AlertPanel";
import GroupModel from "../../../models/GroupModel";
import {defaultNewItem, validateEditItemForm} from "./utils";

export const EditItemModal = () => {

    const focusItem = useStoreState(state => state.focusItem);
    const setFocusItem = useStoreActions(actions => actions.setFocusItem);
    const editItem = useStoreActions(actions => actions.editItem);
    const groups = useStoreState(state => state.groups);
    const [validForm, setValidForm] = useState<boolean | null>(null);
    const [alertPanelText, setAlertPanelText] = useState<string>("");


    const removeFocusItem = () => {
        setFocusItem(null);
    }

    const [editedItem, setEditedItem] = useState<ItemModel>(focusItem!);

    useEffect(() => {
        setEditedItem(focusItem!);
    }, [focusItem]);

    return (
        <Form>
            {focusItem &&
            <Fragment>
                <Modal centered toggle={toggleModal} isOpen={true}>
                    <ModalHeader toggle={toggleModal} className="d-flex">
                        {focusItem.name}
                    </ModalHeader>
                    <ModalBody>
                        {renderAlert()}
                        <EditItemForm
                            formName="edit-item"
                            editedItem={editedItem}
                            handleNameTextChange={event => setEditedItem({
                                ...editedItem,
                                name: event.target.value
                            })}
                            handleNotesTextChange={event => setEditedItem({
                                ...editedItem,
                                notes: event.target.value
                            })}
                            handleRecurringCheckChange={event => setEditedItem({
                                ...editedItem,
                                recurring: event.target.checked
                            })}
                            handleGroupCheckChange={(event, groupId) => {
                                const newGroups: Array<{ groupId: number; groupName: string }> = [];
                                groups.forEach((group: GroupModel) => {
                                    if (group.id === groupId) {
                                        if (event.target.checked) {
                                            newGroups.push({groupId: group.id!, groupName: group.name!});
                                        }
                                    } else {
                                        if (editedItem.groups.some(someGroup => someGroup.groupId === group.id)) {
                                            newGroups.push({groupId: group.id!, groupName: group.name!});
                                        }
                                    }
                                });
                                setEditedItem({...editedItem, groups: newGroups});
                            }}
                            handleFormSubmit={handleFormSubmit}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={toggleModal} color="secondary">Cancel</Button>
                        <Button onClick={handleFormSubmit} type="submit" color="info">Submit</Button>
                    </ModalFooter>
                </Modal>
            </Fragment>
            }
        </Form>
    );

    function toggleModal() {
        removeFocusItem();
        setValidForm(null);
    }

    function handleFormSubmit() {
        const {isValid, alertText} = validateEditItemForm(editedItem);
        setValidForm(isValid);
        setAlertPanelText(alertText);

        if (isValid) {
            editItem(editedItem);
            removeFocusItem();
        }
    }

    function renderAlert() {
        if (validForm === false) {
            return (
                <AlertPanel color="danger" text={alertPanelText} />
            );
        }
    }
}
