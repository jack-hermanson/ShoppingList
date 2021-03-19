import React, {Component} from "react";
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
import {GroupsProvider} from "../../context/GroupsContext";

interface State {
    actionsDropdownOpen: boolean;
}


export default class ShoppingList extends Component<any, State> {

    constructor(props: any) {
        super(props);

        this.state = {
            actionsDropdownOpen: false
        };
    }

    render() {
        return (
            <div>
                <Heading title="Shopping List">
                    {this.renderDropdownMenu()}
                </Heading>
                <Row>
                    <Col sm={12} lg={8}>
                        {this.renderGroups()}
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
    }

    renderGroups() {
        return (
            <GroupsProvider>
                <Groups/>
            </GroupsProvider>
        );
    }

    renderDropdownMenu() {
        return (
            <ButtonDropdown isOpen={this.state.actionsDropdownOpen} toggle={() => this.toggleActionsMenu()}
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

    toggleActionsMenu() {
        this.setState({
            actionsDropdownOpen: !this.state.actionsDropdownOpen
        });
    }
}