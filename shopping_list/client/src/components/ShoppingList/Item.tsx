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
                <td>
                    {this.props.item.name}
                    {this.props.item.notes === ""
                        ? ""
                        : <small className="text-muted d-block">{this.props.item.notes}</small>
                    }
                </td>
                <td>
                    <Input className="ml-auto" type="checkbox" />
                </td>
            </tr>
        );
    }

}