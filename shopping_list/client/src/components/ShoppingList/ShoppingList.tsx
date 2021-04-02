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
import {EditItemModal} from "./Item/EditItemModal";
import {NewGroupForm} from "./Group/NewGroupForm";
import {NewItemForm} from "./Item/NewItemForm";
import {scrollIntoView} from "../../utils";
import {StickyTop} from "../Utils/StickyTop";

export const ShoppingList = () => {

    const ActionsDropdownMenu = () => {
        const [showActionsDropdown, setShowActionsDropdown] = useState<boolean>(false);

        const toggleDropdown = () => {
            setShowActionsDropdown(!showActionsDropdown);
        };

        return (
            <ButtonDropdown isOpen={showActionsDropdown} toggle={toggleDropdown}
                            size="sm" color="info">
                <DropdownToggle caret>
                    Actions
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem onClick={() => {
                        scrollIntoView("new-item-form-card");
                    }}>New Item</DropdownItem>
                    <DropdownItem onClick={() => {
                        scrollIntoView("new-group-form-card");
                    }}>New Group</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        );
    }

    return (
        <Fragment>
            <div>
                <Heading title="Shopping List">
                    {ActionsDropdownMenu()}
                </Heading>
                <Row>
                    <Col sm={12} lg={8}>
                        <Groups/>
                    </Col>
                    <Col>
                        <StickyTop>
                            <Card id="new-item-form-card" className="space-between mt-3 mt-lg-0">
                                <CardHeader>New Item</CardHeader>
                                <CardBody className="pt-2">
                                    <NewItemForm/>
                                </CardBody>
                            </Card>
                            <Card id="new-group-form-card" className="space-between">
                                <CardHeader>New Group</CardHeader>
                                <CardBody className="pt-2">
                                    <NewGroupForm/>
                                </CardBody>
                            </Card>
                        </StickyTop>
                    </Col>
                </Row>
            </div>
            <EditItemModal/>
        </Fragment>
    )
};

