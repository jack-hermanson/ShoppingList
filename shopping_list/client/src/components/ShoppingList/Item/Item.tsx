import React, {Component, Fragment} from "react";
import ItemModel from "../../../models/ItemModel";
import {Input} from "reactstrap";
import {FaInfoCircle} from "react-icons/fa";
import ItemLabel from "./ItemLabel";
import EditItemModal from "./EditItemModal/EditItemModal";

interface Props {
    item: ItemModel;
    toggleEditItemModal: (item: ItemModel) => void;
}

export default class Item extends Component<Props, any> {

    render() {
        return (
            <Fragment>
                <tr>
                    <td>
                        <div className="custom-control custom-checkbox">
                            <Input id={`checkbox_${this.props.item.id}`} type="checkbox"
                                   className="custom-control-input"/>
                            <ItemLabel item={this.props.item}/>
                        </div>
                    </td>
                    <td>
                        <FaInfoCircle
                            style={{cursor: "pointer"}}
                            onClick={() => this.props.toggleEditItemModal(this.props.item)}
                        />
                    </td>
                </tr>
            </Fragment>
        );
    }

}