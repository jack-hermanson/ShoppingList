import React, {Component} from "react";
import Heading from "../Heading/Heading";
import {
    Card,
    Row,
    Col,
    CardBody,
    CardHeader,
    Button,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";


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
                </Heading>
                <Row>
                    <Col sm={12} lg={8}>
                        <Card className="space-between">
                            <CardHeader>Some Category</CardHeader>
                            <CardBody>Some Category</CardBody>
                        </Card>
                        <Card>
                            <CardHeader>Some Category</CardHeader>
                            <CardBody>Some Category</CardBody>
                        </Card>
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

    toggleActionsMenu() {
        this.setState({
            actionsDropdownOpen: !this.state.actionsDropdownOpen
        });
    }
}