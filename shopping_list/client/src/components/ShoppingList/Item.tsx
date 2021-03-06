import React, {Component} from "react";
import ItemModel from "../../models/ItemModel";
import {Input} from "reactstrap";

interface Props {
    item: ItemModel;
}

export default class Item extends Component<Props, any> {

    render() {
        return (
            <tr>
                <td>{this.props.item.name}</td>
                <td>
                    <Input className="ml-auto" type="checkbox" />
                </td>
            </tr>
        );
    }

}