import React, {Component, Fragment} from "react";
import {Item} from "../Item/Item";
import {Table} from "reactstrap";
import ItemModel from "../../../models/ItemModel";
import GroupModel from "../../../models/GroupModel";
import {getItemsInGroup} from "../../../api/items";
import {LoadingSpinner} from "../../LoadingSpinner/LoadingSpinner";

interface Props {
    group: GroupModel;
}

export const GroupBody = ({group}: Props) => (
    <Fragment>
        {/*{this.data.items !== null*/}
        {/*    ?*/}
        {/*    <Table className="mb-0 same-width" striped>*/}
        {/*        <tbody>*/}
        {/*        {this.data.items.map((item: ItemModel) => (*/}
        {/*            <Item item={item} key={item.id}/>*/}
        {/*        ))}*/}
        {/*        </tbody>*/}
        {/*    </Table>*/}
        {/*    :*/}
        {/*    <LoadingSpinner className="my-3"/>*/}
        {/*}*/}
        <pre className="p-4 mb-0">GroupBody.tsx</pre>
    </Fragment>
);