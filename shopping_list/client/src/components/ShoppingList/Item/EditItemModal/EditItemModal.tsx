import React, {Fragment} from "react";
import {Modal, ModalHeader, ModalBody, ModalFooter, Form, Button} from "reactstrap";
import EditItemForm from "./EditItemForm";
import {useStoreActions, useStoreState} from "../../../../store";

export const EditItemModal = () => {

    const focusItem = useStoreState(state => state.focusItem);
    const setFocusItem = useStoreActions(actions => actions.setFocusItem);

    const removeFocusItem = () => {
        setFocusItem(null);
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
                            {/*{renderEditItemForm()}*/}
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
