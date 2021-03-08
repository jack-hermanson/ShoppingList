import React, {Component, Fragment} from "react";
import ItemModel from "../../../models/ItemModel";
import {Input} from "reactstrap";
import {FaInfoCircle} from "react-icons/fa";
import ItemLabel from "./ItemLabel";
import {getItem} from "../../../api/items";

interface Props {
    itemId: number;
    toggleEditItemModal: (item: ItemModel) => void;
}

interface State {
    item: ItemModel | null;
}

export default class Item extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            item: null
        }
    }

    async componentDidMount() {
        const item: ItemModel = await getItem(this.props.itemId);
        this.setState({item: item});
    }

    render() {
        if (this.state.item !== null) {
            return (
                <Fragment>
                    <tr>
                        <td>
                            <div className="custom-control custom-checkbox">
                                <Input
                                    id={`checkbox_${this.state.item.id}`}
                                    type="checkbox"
                                    className="custom-control-input"
                                    checked={this.state.item.checked}
                                    onChange={() => console.log("check toggle")}
                                />
                                <ItemLabel item={this.state.item}/>
                            </div>
                        </td>
                        <td>
                            <FaInfoCircle
                                style={{cursor: "pointer"}}
                                onClick={() => this.props.toggleEditItemModal(this.state.item as ItemModel)}
                            />
                        </td>
                    </tr>
                </Fragment>
            );
        } else {
            return (
                <tr>
                    <td colSpan={2}>Loading...</td>
                </tr>
            );
        }

    }

}