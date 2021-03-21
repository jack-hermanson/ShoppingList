import React from "react";
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
import {Groups} from "./Group/Groups";

export const ShoppingList = () => (
    <div>
        <Heading title="Shopping List">
            {renderDropdownMenu()}
        </Heading>
        <Row>
            <Col sm={12} lg={8}>
                {renderGroups()}
            </Col>
            <Col>
                <Card className="space-between mt-3 mt-lg-0">
                    <CardHeader>New Item</CardHeader>
                    <CardBody>Form</CardBody>
                </Card>
            </Col>
        </Row>
    </div>
);


function renderGroups() {
    return (
        <Groups/>
    );
}

function renderDropdownMenu() {
    // todo
    return (
        <ButtonDropdown isOpen={false} toggle={() => null}
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