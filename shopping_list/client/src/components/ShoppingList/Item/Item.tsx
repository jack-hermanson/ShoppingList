import React, {Component, Fragment} from "react";
import ItemModel from "../../../models/ItemModel";
import {Input} from "reactstrap";
import {FaInfoCircle} from "react-icons/fa";
import ItemLabel from "./ItemLabel";
import EditItemModal from "./EditItemModal";

interface Props {
    item: ItemModel;
}

interface State {
    showEditModal: boolean;
}

export default class Item extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            showEditModal: false
        };
    }

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
                        <FaInfoCircle onClick={() => this.setState({showEditModal: true})} />
                    </td>
                </tr>

                <EditItemModal
                    showEditModal={this.state.showEditModal}
                    closeEditModal={() => this.setState({showEditModal: false})}
                    item={this.props.item}
                />
            </Fragment>
        );
    }

}