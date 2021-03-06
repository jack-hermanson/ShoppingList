import React, {Component} from "react";
import {FiRepeat} from "react-icons/fi";
import ItemModel from "../../../models/ItemModel";

interface Props {
    item: ItemModel;
}

export default class ItemLabel extends Component<Props, any> {
    render() {
        return (
            <label htmlFor={`checkbox_${this.props.item.id}`} className="custom-control-label">
                {this.props.item.name}
                {this.props.item.recurring
                    ? <FiRepeat className="ml-1" style={{paddingBottom: "3px"}}/>
                    : ""
                }
                {this.props.item.notes === ""
                    ? ""
                    : <small className="text-muted d-block">{this.props.item.notes}</small>
                }
            </label>
        );
    }
}