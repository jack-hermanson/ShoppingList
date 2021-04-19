import React, {useState} from "react";
import {Button, ButtonDropdown, CardHeader, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import {useStoreActions, useStoreState} from "../../../store";
import {scrollIntoView} from "../../../utils";
import {defaultNewItem} from "../Item/utils";

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

    return (
        <CardHeader className="d-flex">
            <div className={`d-block mt-auto ${props.visible === false && "text-muted"}`} onClick={() => toggleGroup(props.id)}>
                {props.name}
                {props.notes !== "" &&
                    <small className="d-block text-muted">{props.notes}</small>
                }
            </div>
            <div className="my-auto ml-auto">
                <ButtonDropdown size="sm" isOpen={dropdownOpen} toggle={() => setDropdownOpen(open => !open)}>
                    <Button color="info">Complete</Button>
                    <DropdownToggle split color="info" />
                    <DropdownMenu right>
                        <DropdownItem onClick={() => {
                            scrollIntoView("new-item-form-card");
                            setNewItem({
                                ...defaultNewItem,
                                groups: [
                                    {
                                        groupName: groups.find(group => group.id === props.id)!.name!,
                                        groupId: props.id
                                    }
                                ]
                            })
                        }}>New Item</DropdownItem>
                        <DropdownItem>Edit Group</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
            </div>
        </CardHeader>
    );
}
