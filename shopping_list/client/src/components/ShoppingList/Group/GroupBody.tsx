import React, {Component, Fragment} from "react";
import Item from "../Item/Item";
import {Table} from "reactstrap";
import ItemModel from "../../../models/ItemModel";
import EditItemModal from "../Item/EditItemModal/EditItemModal";

interface Props {
    itemIds: Array<number>;
    fetchNewAlerts: () => Promise<void>;
}

interface State {
    showEditItemModal: boolean;
    itemToEdit: ItemModel | null;
    editedItemId: number | null;
    loading: boolean;
}

export default class GroupBody extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            showEditItemModal: false,
            itemToEdit: null,
            editedItemId: null,
            loading: true
        };

        this.showEditItemModal = this.showEditItemModal.bind(this);
        this.toggleEditItemModal = this.toggleEditItemModal.bind(this);
        this.submitEditItem = this.submitEditItem.bind(this);
    }

    componentDidMount() {
        this.setState({loading: false});
    }

    render() {
        return (
            this.state.loading ? (
                <p>Loading</p>
            ) : (
                <Fragment>
                    <Table className="mb-0 same-width" striped>
                        <tbody>
                        {this.props.itemIds.map(itemId => (
                            <Item
                                key={itemId}
                                itemId={itemId}
                                toggleEditItemModal={this.showEditItemModal}
                                reRenderItem={this.state.editedItemId === itemId}
                                resetEditedItemId={() => this.setState({editedItemId: null})}
                            />
                        ))}
                        </tbody>
                    </Table>
                    {this.renderEditItemModal()}
                </Fragment>
            )
        );
    }

    renderEditItemModal() {
        if (this.state.showEditItemModal && this.state.itemToEdit !== null) {
            return (
                <EditItemModal
                    showEditModal={this.state.showEditItemModal}
                    closeEditModal={this.toggleEditItemModal}
                    item={this.state.itemToEdit}
                    submitEditItem={this.submitEditItem}
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

    async submitEditItem(itemId: number) {
        this.setState({
            editedItemId: itemId,
            showEditItemModal: false
        });
        await this.props.fetchNewAlerts();
    }
}