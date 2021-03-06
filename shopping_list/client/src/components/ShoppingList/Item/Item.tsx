import React, {Component} from "react";
import ItemModel from "../../../models/ItemModel";
import {Badge, Input} from "reactstrap";
import {FaInfoCircle} from "react-icons/fa";
import {FiRepeat} from "react-icons/fi";
import ItemLabel from "./ItemLabel";

interface Props {
    item: ItemModel;
}

export default class Item extends Component<Props, any> {

    render() {
        return (
            <tr>
                <td>
                    <div className="custom-control custom-checkbox">
                        <Input id={`checkbox_${this.props.item.id}`} type="checkbox" className="custom-control-input" />
                        <ItemLabel item={this.props.item} />
                    </div>
                </td>
                <td>
                    <FaInfoCircle />
                </td>
            </tr>
        );
    }

}