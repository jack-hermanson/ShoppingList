import React, {Fragment} from "react";
import ItemModel from "../../../models/ItemModel";
import {Input} from "reactstrap";
import {ItemLabel} from "./ItemLabel";
import {FaInfoCircle} from "react-icons/fa";

interface Props {
    item: ItemModel;
}

export const Item = ({item}: Props) => (
    <Fragment>
        <tr>
            <td>
                <div className="custom-control custom-checkbox">
                    <Input
                        id={`checkbox_${item.id}`}
                        type="checkbox"
                        className="custom-control-input"
                        checked={item.checked}
                        onChange={() => console.log("check toggle")}
                    />
                    <ItemLabel item={item}/>
                </div>
            </td>
            <td>
                <FaInfoCircle
                    style={{cursor: "pointer"}}
                    onClick={() => console.log("Info item", item)}
                />
            </td>
        </tr>
    </Fragment>
);

