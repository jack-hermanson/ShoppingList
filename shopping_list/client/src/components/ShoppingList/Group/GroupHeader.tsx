import React, {useState} from "react";
import {Button, ButtonDropdown, CardHeader, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import {useStoreActions} from "../../../store";

interface Props {
    name: string;
    notes: string;
    id: number;
    visible: boolean | null;
}

export const GroupHeader = (props: Props) => {
    const toggleGroup = useStoreActions(actions => actions.toggleGroup);
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

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
                        <DropdownItem>New Item</DropdownItem>
                        <DropdownItem>Edit Group</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
            </div>
        </CardHeader>
    );
}
