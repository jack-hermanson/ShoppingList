import React, {useState, Fragment} from "react";
import {Button, ButtonDropdown, CardHeader, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import {useStoreActions, useStoreState} from "../../../store";
import {scrollIntoView} from "../../../utils";
import {defaultNewItem} from "../Item/utils";
import {ConfirmModal} from "../../Utils/ConfirmModal";

interface Props {
    name: string;
    notes: string;
    id: number;
    visible: boolean | null;
}

export const GroupHeader = (props: Props) => {
    const toggleGroup = useStoreActions(actions => actions.toggleGroup);
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const setNewItem = useStoreActions(actions => actions.setNewItem);
    const groups = useStoreState(state => state.groups);
    const [completeModalOpen, setCompleteModalOpen] = useState<boolean>(false)
    const completeGroup = useStoreActions(actions => actions.completeGroup);

    return (
        <Fragment>
            <CardHeader style={{cursor: "pointer"}} className="d-flex">
                <div className={`d-block mt-auto ${props.visible === false && "text-muted"}`}
                     onClick={() => toggleGroup(props.id)}>
                    {props.name}
                    {props.notes !== "" &&
                    <small className="d-block text-muted">{props.notes}</small>
                    }
                </div>
                <div className="my-auto ml-auto">
                    {renderButtonDropdown()}
                </div>
            </CardHeader>
            {renderConfirmModal()}
        </Fragment>
    );

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
                                    groupName: groups.find(group => group.id === props.id)!.name!,
                                    groupId: props.id
                                }
                            ]
                        });
                    }}>New Item</DropdownItem>
                    <DropdownItem>Edit Group</DropdownItem>
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
                    completeGroup(props.id).then(() => {
                        setCompleteModalOpen(false);
                    });
                }}
                isOpen={completeModalOpen}
                toggle={() => setCompleteModalOpen(false)}
            />
        );
    }
}