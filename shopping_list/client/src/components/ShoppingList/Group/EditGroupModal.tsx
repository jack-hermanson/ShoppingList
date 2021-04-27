import React, {useEffect, useState} from "react";
import {Button, FormGroup, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import GroupModel from "../../../models/GroupModel";
import {TextInput} from "../../FormInput/TextInput";
import {useStoreActions} from "../../../store";

interface Props {
    group: GroupModel;
    toggle: () => void;
    isOpen: boolean;
}

export const EditGroupModal: React.FC<Props> = (
    {group, toggle, isOpen}
) => {
    const [editedGroup, setEditedGroup] = useState<GroupModel>(group);
    const editGroup = useStoreActions(actions => actions.editGroup);
    const deleteGroup = useStoreActions(actions => actions.deleteGroup);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState<boolean>(false);

    return (
        <Modal isOpen={isOpen} centered toggle={toggle}>
            <ModalHeader toggle={toggle}>
                Edit Group
            </ModalHeader>
            <ModalBody>
                {renderNameInput()}
                {renderNotesInput()}
                {renderDeleteConfirmation()}
            </ModalBody>
            <ModalFooter>
                <Button onClick={async () => {
                    setShowDeleteConfirm(true);
                }} className="mr-auto" color="danger">Delete</Button>
                <Button color="secondary" onClick={() => {
                    setEditedGroup(group);
                    toggle();
                }}>Cancel</Button>
                <Button onClick={async () => {
                    await submit();
                }} type="submit" color="info">Submit</Button>
            </ModalFooter>
        </Modal>
    );

    async function submit() {
        console.log("submit form");
        await editGroup(editedGroup);
        toggle();
    }

    function renderNameInput() {
        return (
            <FormGroup>
                <TextInput
                    label="Name"
                    id={`group-${group.id}-name`}
                    type="text"
                    value={editedGroup.name!}
                    onChange={event => setEditedGroup({
                        ...group,
                        name: event.target.value
                    })}
                    required
                    autofocus
                    onKeyPress={event => event.key === "Enter" && submit()}
                />
            </FormGroup>
        );
    }

    function renderNotesInput() {
        return (
            <FormGroup>
                <TextInput
                    label="Notes"
                    id={`group-${group.id}-notes`}
                    type="textarea"
                    value={editedGroup.notes!}
                    onChange={event => setEditedGroup({
                        ...group,
                        notes: event.target.value
                    })}
                />
            </FormGroup>
        );
    }

    function renderDeleteConfirmation() {
        return (
            <Modal isOpen={showDeleteConfirm} toggle={() => setShowDeleteConfirm(false)}>
                <ModalHeader toggle={() => setShowDeleteConfirm(false)}>
                    Confirm Group Deletion
                </ModalHeader>
                <ModalBody>
                    Are you sure you want to delete the group "{group.name}"?
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={() => setShowDeleteConfirm(false)}>Cancel</Button>
                    <Button color="danger" onClick={submitDelete}>Delete</Button>
                </ModalFooter>
            </Modal>
        );
    }

    async function submitDelete() {
        toggle();
        await deleteGroup(group.id!);
    }
}
