import React, {Fragment} from "react";
import ItemModel from "../../../models/ItemModel";
import {Input} from "reactstrap";
import {ItemLabel} from "./ItemLabel";
import {FaInfoCircle} from "react-icons/fa";
import {useStoreActions} from "../../../store";

interface Props {
    item: ItemModel;
}

export const Item = ({item}: Props) => {
    const setFocusItem = useStoreActions(actions => actions.setFocusItem);
    const toggleItemCheck = useStoreActions(actions => actions.toggleItemCheck);

    return (
        <Fragment>
            <tr>
                <td>
                    <div className="custom-control custom-checkbox">
                        <Input
                            id={`checkbox_${item.id}`}
                            type="checkbox"
                            className="custom-control-input"
                            checked={item.checked}
                            onChange={(event) => toggleItemCheck({
                                itemId: item.id!,
                                checked: event.target.checked
                            })}
                        />
                        <ItemLabel item={item}/>
                    </div>
                </td>
                <td>
                    <FaInfoCircle
                        style={{cursor: "pointer"}}
                        onClick={() => setFocusItem(item)}
                    />
                </td>
            </tr>
        </Fragment>
    )
};

