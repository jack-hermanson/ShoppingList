import React, {Component, Fragment} from "react";
import Item from "../Item/Item";
import {Table} from "reactstrap";
import ItemModel from "../../../models/ItemModel";
import EditItemModal from "../Item/EditItemModal/EditItemModal";
import GroupModel from "../../../models/GroupModel";
import {getItemsInGroup} from "../../../api/items";

interface Props {
    group: GroupModel;
}

interface State {
    items: Array<ItemModel> | null;
}

export default class GroupBody extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            items: null
        };
    }

    async componentDidMount() {
        const items: Array<ItemModel> = await getItemsInGroup(this.props.group.id!);
        this.setState({items: items});
    }

    render() {
        return (
            <Fragment>
                {this.state.items !== null
                    ?
                    <Table className="mb-0 same-width" striped>
                        <tbody>
                        {this.state.items.map((item: ItemModel) => (
                            <Item item={item} key={item.id}/>
                        ))}
                        </tbody>
                    </Table>
                    :
                    <h5>Loading...</h5>
                }
            </Fragment>
        );
    }
}