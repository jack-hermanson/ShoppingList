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
import Group from "./Group/Group";
import {getGroupIds} from "../../api/groups";


interface State {
    actionsDropdownOpen: boolean;
    groupIds: Array<number>;
}


export default class ShoppingList extends Component<any, State> {

    constructor(props: any) {
        super(props);

        this.state = {
            actionsDropdownOpen: false,
            groupIds: []
        };
    }

    async componentDidMount() {
        const groupIds = await getGroupIds();
        this.setState({groupIds: groupIds});
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
                        {this.state.groupIds.map(groupId => (
                            <Group key={groupId} groupId={groupId} />
                        ))}
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