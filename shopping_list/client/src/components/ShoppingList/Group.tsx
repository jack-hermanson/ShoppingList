import React, {Component} from "react";
import GroupModel from "../../models/GroupModel";
import {Card, CardBody, CardHeader, Input, Table} from "reactstrap";
import {getGroup} from "../../api/groups";

export interface GroupProps {
    groupId: number;
}

interface State extends GroupModel {

}

export default class Group extends Component<GroupProps, State> {
    constructor(props: GroupProps) {
        super(props);
        this.state = {
            id: null,
            name: null,
            notes: null
        };
    }

    async componentDidMount() {
        const group: GroupModel = await getGroup(this.props.groupId);
        this.setState({
            id: group.id,
            name: group.name,
            notes: group.notes
        });
    }

    render() {
        return (
            <Card className="space-between">
                <CardHeader>
                    {this.state.name}
                    {this.state.notes === ""
                        ? ""
                        : <small className="d-block text-muted">{this.state.notes}</small> }
                </CardHeader>
                <Table className="mb-0 same-width" striped>

                    <tbody>
                    <tr>
                        <td>Item</td>
                        <td>
                            <Input className="ml-auto" type="checkbox" />
                        </td>
                    </tr>
                    <tr>
                        <td>Item</td>
                        <td>
                            <Input className="ml-auto" type="checkbox" />
                        </td>
                    </tr>
                    </tbody>

                </Table>
            </Card>
        )
    }


}
