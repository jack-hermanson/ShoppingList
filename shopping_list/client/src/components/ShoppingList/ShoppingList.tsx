import React, {Fragment, useState} from "react";
import Heading from "../Heading/Heading";
import {
    Card,
    Row,
    Col,
    CardBody,
    CardHeader,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";
import Groups from "./Group/Groups";
import {EditItemModal} from "./Item/EditItemModal/EditItemModal";
import {NewGroupForm} from "./Group/NewGroupForm";

export const ShoppingList = () => {
    return (
        <Fragment>
            <div>
                <Heading title="Shopping List">
                    {ActionsDropdownMenu()}
                </Heading>
                <Row>
                    <Col sm={12} lg={8}>
                        <Groups />
                    </Col>
                    <Col>
                        <Card className="space-between mt-3 mt-lg-0">
                            <CardHeader>New Group</CardHeader>
                            <CardBody className="pt-2">
                                <NewGroupForm/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
            <EditItemModal />
        </Fragment>
    )
};

const ActionsDropdownMenu = () => {
    const [showActionsDropdown, setShowActionsDropdown] = useState<boolean>(false);

    const toggleDropdown = () => {
        setShowActionsDropdown(!showActionsDropdown);
    }

    return (
        <ButtonDropdown isOpen={showActionsDropdown} toggle={toggleDropdown}
                        size="sm" color="info">
            <DropdownToggle caret>
                Actions
            </DropdownToggle>
            <DropdownMenu right>
                <DropdownItem>Test</DropdownItem>
                <DropdownItem>Test</DropdownItem>
            </DropdownMenu>
        </ButtonDropdown>
    );
}