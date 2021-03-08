import React, {Component, Fragment} from "react";
import Item from "../Item/Item";
import {Table} from "reactstrap";
import ItemModel from "../../../models/ItemModel";

interface Props {
    items: Array<ItemModel>;
    showEditItemModal: (item: ItemModel) => void;
}

export default class GroupBody extends Component<Props, any> {
    render() {
        return (
            <Fragment>
                <Table className="mb-0 same-width" striped>
                    <tbody>
                    {this.props.items.map(item => (
                        <Item
                            key={item.id}
                            item={item}
                            toggleEditItemModal={this.props.showEditItemModal}
                        />
                    ))}
                    </tbody>
                </Table>
            </Fragment>
        );
    }
}