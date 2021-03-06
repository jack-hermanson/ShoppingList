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
                <td className="d-flex">
                    <div className="custom-control">
                        <label className="custom-control-label" />
                        <Input type="checkbox" className="custom-control-input" />
                    </div>
                    <div>
                        {this.props.item.name}
                        {this.props.item.notes === ""
                            ? ""
                            : <small className="text-muted d-block">{this.props.item.notes}</small>
                        }
                    </div>
                </td>
            </tr>
        );
    }

}