import React, {Component, Fragment} from "react";
import Item from "../Item/Item";
import {Table} from "reactstrap";
import ItemModel from "../../../models/ItemModel";
import EditItemModal from "../Item/EditItemModal/EditItemModal";

interface Props {
    itemIds: Array<number>;
}

interface State {
    showEditItemModal: boolean;
    itemToEdit: ItemModel | null;
}

export default class GroupBody extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            showEditItemModal: false,
            itemToEdit: null
        };

        this.showEditItemModal = this.showEditItemModal.bind(this);
        this.toggleEditItemModal = this.toggleEditItemModal.bind(this);
    }

    render() {
        return (
            <Fragment>
                <Table className="mb-0 same-width" striped>
                    <tbody>
                    {this.props.itemIds.map(itemId => (
                        <Item
                            key={itemId}
                            itemId={itemId}
                            toggleEditItemModal={this.showEditItemModal}
                        />
                    ))}
                    </tbody>
                </Table>
                {this.renderEditItemModal()}
            </Fragment>
        );
    }

    renderEditItemModal() {
        if (this.state.showEditItemModal && this.state.itemToEdit !== null) {
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

    showEditItemModal(item: ItemModel) {
        this.setState({
            itemToEdit: item,
            showEditItemModal: true
        });
    }
}