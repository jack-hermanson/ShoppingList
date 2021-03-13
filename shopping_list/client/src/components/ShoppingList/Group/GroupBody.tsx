import React, {Component, Fragment} from "react";
import Item from "../Item/Item";
import {Table} from "reactstrap";
import ItemModel from "../../../models/ItemModel";
import EditItemModal from "../Item/EditItemModal/EditItemModal";
import GroupModel from "../../../models/GroupModel";

interface Props {
    group: GroupModel;
}

export default class GroupBody extends Component<Props, any> {

    render() {
        return (
            <Fragment>
                <Table className="mb-0 same-width" striped>
                    <tbody>

                    </tbody>
                </Table>
            </Fragment>
        );
    }
}