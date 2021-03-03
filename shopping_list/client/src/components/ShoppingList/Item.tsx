import React, {Component} from "react";
import ItemModel from "../../models/ItemModel";

interface Props {
    item: ItemModel;
}

export default class Item extends Component<Props, any> {

    render() {
        return (
            <div>{this.props.item.name}</div>
        );
    }

}