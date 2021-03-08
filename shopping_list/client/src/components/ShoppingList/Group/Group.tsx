import React, {Component, Fragment} from "react";
import GroupModel from "../../../models/GroupModel";
import {Card} from "reactstrap";
import {getGroup, getGroupItemIds} from "../../../api/groups";
import GroupHeader from "./GroupHeader";
import GroupBody from "./GroupBody";

interface Props {
    groupId: number;
    fetchNewAlerts: () => Promise<void>;
}

interface State extends GroupModel {
    itemIds: Array<number>;
}

export default class Group extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            id: null,
            name: null,
            notes: null,
            itemIds: []
        };
    }

    async componentDidMount() {
        const group: GroupModel = await getGroup(this.props.groupId);
        this.setState({
            id: group.id,
            name: group.name,
            notes: group.notes
        });
        await this.getGroupItemIds();
    }

    render() {
        return (
            <Fragment>
                <Card className="space-between">
                    <GroupHeader
                        name={this.state.name as string}
                        notes={this.state.notes as string}
                    />
                    <GroupBody
                        itemIds={this.state.itemIds}
                        fetchNewAlerts={this.props.fetchNewAlerts}
                    />
                </Card>
            </Fragment>
        )
    }

    async getGroupItemIds(): Promise<void> {
        const groupItemIds = await getGroupItemIds(this.props.groupId);
        this.setState({
            itemIds: groupItemIds
        });
    }



}
