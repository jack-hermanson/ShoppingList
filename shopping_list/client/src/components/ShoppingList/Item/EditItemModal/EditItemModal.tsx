import React, {Fragment, useCallback, useEffect, useState} from "react";
import {Modal, ModalHeader, ModalBody, ModalFooter, Form, Button} from "reactstrap";
import {EditItemForm} from "./EditItemForm";
import {useStoreActions, useStoreState} from "../../../../store";
import ItemModel from "../../../../models/ItemModel";
import AlertPanel from "../../../AlertPanel/AlertPanel";
import GroupModel from "../../../../models/GroupModel";

export const EditItemModal = () => {

    const focusItem = useStoreState(state => state.focusItem);
    const setFocusItem = useStoreActions(actions => actions.setFocusItem);
    const editItem = useStoreActions(actions => actions.editItem);
    const groups = useStoreState(state => state.groups);
    const [valid, setValid] = useState<boolean>(true);
    const [validationText, setValidationText] = useState<string>("");

    const removeFocusItem = () => {
        setFocusItem(null);
        setValid(true);
    }

    const [editedItem, setEditedItem] = useState<ItemModel>(focusItem!);

    useEffect(() => {
        setEditedItem(focusItem!);
    }, [focusItem]);

    function handleFormSubmit() {
        if (valid) {
            editItem(editedItem);
            removeFocusItem();
        }
    }

    return (
        <Form>
            {focusItem &&
            <Fragment>
                <Modal centered toggle={removeFocusItem} isOpen={true}>
                    <ModalHeader toggle={removeFocusItem} className="d-flex">
                        {focusItem.name}
                    </ModalHeader>
                    <ModalBody>
                        {!valid &&
                        <AlertPanel color="danger" text={validationText}/>
                        }
                        <EditItemForm
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
                                if (newGroups.length < 1) {
                                    setValid(false);
                                    setValidationText("Each item must be in at least one group.")
                                } else {
                                    setValid(true);
                                }
                            }}
                            handleFormSubmit={handleFormSubmit}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={removeFocusItem} color="secondary">Cancel</Button>
                        <Button disabled={!valid} onClick={handleFormSubmit} type="submit" color="info">Submit</Button>
                    </ModalFooter>
                </Modal>
            </Fragment>
            }
        </Form>
    );

}
