import React, {Component, Fragment} from "react";
import GroupModel from "../../../models/GroupModel";
import {Card} from "reactstrap";
import {getGroup} from "../../../api/groups";
import ItemModel from "../../../models/ItemModel";
import axios from "axios";
import GroupHeader from "./GroupHeader";
import GroupBody from "./GroupBody";
import EditItemModal from "../Item/EditItemModal/EditItemModal";

interface Props {
    groupId: number;
}

interface State extends GroupModel {
    items: Array<ItemModel>;
    showEditItemModal: boolean;
    itemToEdit?: ItemModel;
}

export default class Group extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            id: null,
            name: null,
            notes: null,
            items: [],
            showEditItemModal: false
        };

        this.showEditItemModal = this.showEditItemModal.bind(this);
        this.toggleEditItemModal = this.toggleEditItemModal.bind(this);
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
            <Fragment>
                <Card className="space-between">
                    <GroupHeader
                        name={this.state.name as string}
                        notes={this.state.notes as string}
                    />
                    <GroupBody
                        items={this.state.items}
                        showEditItemModal={this.showEditItemModal}
                    />
                </Card>

                {this.renderEditItemModal()}
            </Fragment>
        )
    }

    async getGroupItems(): Promise<Array<ItemModel>> {
        const response = await axios.get(`/api/items/?group-id=${this.state.id}`);
        return response.data;
    }

    showEditItemModal(item: ItemModel) {
        this.setState({
            itemToEdit: item,
            showEditItemModal: true
        });
    }

    renderEditItemModal() {
        if (this.state.showEditItemModal && this.state.itemToEdit !== undefined) {
            return (
                <EditItemModal
                    showEditModal={this.state.showEditItemModal}
                    closeEditModal={this.toggleEditItemModal}
                    item={this.state.itemToEdit}
                />
            );
        } else {
            return <Fragment/>;
        }
    }

    toggleEditItemModal() {
        this.setState({showEditItemModal: !this.state.showEditItemModal});
    }

}
