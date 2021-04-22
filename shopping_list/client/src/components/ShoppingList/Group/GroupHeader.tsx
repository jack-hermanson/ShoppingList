import React, {useState, Fragment} from "react";
import {Button, ButtonDropdown, CardHeader, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import {useStoreActions, useStoreState} from "../../../store";
import {scrollIntoView} from "../../../utils";
import {defaultNewItem} from "../Item/utils";
import {ConfirmModal} from "../../Utils/ConfirmModal";
import {EditGroupModal} from "./EditGroupModal";
import GroupModel from "../../../models/GroupModel";

interface Props {
    group: GroupModel;
}

export const GroupHeader: React.FC<Props> = ({group}) => {
    const toggleGroup = useStoreActions(actions => actions.toggleGroup);
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const setNewItem = useStoreActions(actions => actions.setNewItem);
    const groups = useStoreState(state => state.groups);
    const [completeModalOpen, setCompleteModalOpen] = useState<boolean>(false)
    const completeGroup = useStoreActions(actions => actions.completeGroup);
    const [showEditModal, setShowEditModal] = useState<boolean>(false);

    return (
        <Fragment>
            <CardHeader style={{cursor: "pointer"}} className="d-flex">
                <div className={`d-block mt-auto ${group.visible === false && "text-muted"}`}
                     onClick={() => toggleGroup(group.id!)}>
                    {group.name}
                    {group.notes !== "" &&
                    <small className="d-block text-muted">{group.notes}</small>
                    }
                </div>
                <div className="my-auto ml-auto">
                    {renderButtonDropdown()}
                </div>
            </CardHeader>
            {renderConfirmModal()}
            {renderEditModal()}
        </Fragment>
    );

    function renderEditModal() {
        return (
            <EditGroupModal group={group}
                            toggle={() => setShowEditModal(false)}
                            isOpen={showEditModal}
            />
        );
    }

    function renderButtonDropdown() {
        return (
            <ButtonDropdown size="sm" isOpen={dropdownOpen} toggle={() => setDropdownOpen(open => !open)}>
                <Button color="info" onClick={() => setCompleteModalOpen(open => !open)}>Complete</Button>
                <DropdownToggle split color="info"/>
                <DropdownMenu right>
                    <DropdownItem onClick={() => {
                        document.getElementById("new-item-name-input")?.focus();
                        scrollIntoView("new-item-form-card");
                        setNewItem({
                            ...defaultNewItem,
                            groups: [
                                {
                                    groupName: groups.find(group => group.id === group.id)!.name!,
                                    groupId: group.id!
                                }
                            ]
                        });
                    }}>New Item</DropdownItem>
                    <DropdownItem onClick={() => setShowEditModal(true)}>Edit Group</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        );
    }

    function renderConfirmModal() {
        return (
            <ConfirmModal
                abstract="Group Completion"
                specific="complete this group"
                dialogText={"Checked non-recurring items will be deleted. Checked recurring items will just become unchecked. Unchecked items will not be affected."}
                onConfirm={() => {
                    completeGroup(group.id!).then(() => {
                        setCompleteModalOpen(false);
                    });
                }}
                isOpen={completeModalOpen}
                toggle={() => setCompleteModalOpen(false)}
            />
        );
    }
}