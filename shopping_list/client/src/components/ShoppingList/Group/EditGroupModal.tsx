import React from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import GroupModel from "../../../models/GroupModel";

interface Props {
    group: GroupModel;
    toggle: () => void;
    isOpen: boolean;
}

export const EditGroupModal: React.FC<Props> = (
    {group, toggle, isOpen}
) => {
    return (
        <Modal isOpen={isOpen} centered toggle={toggle}>
            <ModalHeader toggle={toggle}>
                Edit Group
            </ModalHeader>
            <ModalBody>
                <p>todo</p>
            </ModalBody>
            <ModalFooter>
                <Button className="mr-auto" color="danger">Delete</Button>
                <Button color="secondary">Cancel</Button>
                <Button type="submit" color="info">Submit</Button>
            </ModalFooter>
        </Modal>
    );
}
