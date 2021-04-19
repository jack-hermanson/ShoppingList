import React from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

interface Props {
    abstract: string;
    specific: string;
    dialogText: string;
    onConfirm: () => any;
    isOpen: boolean;
    toggle: () => any;
}

export const ConfirmModal = (props: Props) => {
    return (
        <Modal toggle={props.toggle} isOpen={props.isOpen}>
            <ModalHeader toggle={props.toggle}>
                Confirm {props.abstract}
            </ModalHeader>
            <ModalBody>
                <p>Are you sure you want to {props.specific}?</p>
                <p className="mb-0">{props.dialogText}</p>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={props.toggle}>Cancel</Button>
                <Button color="info" onClick={props.onConfirm}>Confirm</Button>
            </ModalFooter>
        </Modal>
    );
}
