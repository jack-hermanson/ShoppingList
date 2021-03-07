import React, {Component} from "react";
import GroupModel from "../../models/GroupModel";
import {Card, Button, CardHeader, Table} from "reactstrap";
import {getGroup} from "../../api/groups";
import ItemModel from "../../models/ItemModel";
import axios from "axios";
import Item from "./Item/Item";
import {FaRedo} from "react-icons/fa";

export interface GroupProps {
    groupId: number;
}

interface State extends GroupModel {
    items: Array<ItemModel>;
}

export default class Group extends Component<GroupProps, State> {
    constructor(props: GroupProps) {
        super(props);
        this.state = {
            id: null,
            name: null,
            notes: null,
            items: []
        };
    }

    async componentDidMount() {
        const group: GroupModel = await getGroup(this.props.groupId);
        this.setState({
            id: group.id,
            name: group.name,
            notes: group.notes
        });
        const groupItems: Array<ItemModel> = await this.getGroupItems();
        this.setState({
            items: groupItems
        });
    }

    render() {
        return (
            <Card className="space-between">
                <CardHeader className="d-flex">
                    <div className="d-block mt-auto">
                        {this.state.name}
                        {this.state.notes === ""
                            ? ""
                            : <small className="d-block text-muted">{this.state.notes}</small>}
                    </div>
                    <div className="my-auto ml-auto">
                        <Button size="sm" color="info">Complete</Button>
                    </div>
                </CardHeader>
                <Table className="mb-0 same-width" striped>
                    <tbody>
                    {this.state.items.map(item => (
                        <Item key={item.id} item={item}/>
                    ))}
                    </tbody>
                </Table>
            </Card>
        )
    }

    async getGroupItems(): Promise<Array<ItemModel>> {
        const response = await axios.get(`/api/items/?group-id=${this.state.id}`);
        return response.data;
    }


}
