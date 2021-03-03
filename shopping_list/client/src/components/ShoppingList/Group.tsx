import React, {Component} from "react";
import GroupModel from "../../models/GroupModel";
import {Card, CardBody, CardHeader} from "reactstrap";
import {getGroup} from "../api/groups";

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
            notes: group.name
        });
    }

    render() {
        return (
            <Card className="space-between">
                <CardHeader>{this.state.name}</CardHeader>
                <CardBody>{this.state.id}</CardBody>
            </Card>
        )
    }


}
