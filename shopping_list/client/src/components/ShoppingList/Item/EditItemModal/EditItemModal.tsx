import React, {Fragment, useEffect, useState} from "react";
import {Modal, ModalHeader, ModalBody, ModalFooter, Form, Button} from "reactstrap";
import {EditItemForm} from "./EditItemForm";
import {useStoreActions, useStoreState} from "../../../../store";
import ItemModel from "../../../../models/ItemModel";

export const EditItemModal = () => {

    const focusItem = useStoreState(state => state.focusItem);
    const setFocusItem = useStoreActions(actions => actions.setFocusItem);

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
                <Modal centered toggle={removeFocusItem} isOpen={true}>
                    <ModalHeader toggle={removeFocusItem} className="d-flex">
                        {focusItem.name}
                    </ModalHeader>
                    <ModalBody>
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
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={removeFocusItem} color="secondary">Cancel</Button>
                        <Button onClick={() => console.log("submitted")} type="submit" color="info">Submit</Button>
                    </ModalFooter>
                </Modal>
            </Fragment>
            }
        </Form>
    );
}
