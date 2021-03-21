import React from "react";
import {FiRepeat} from "react-icons/fi";
import ItemModel from "../../../models/ItemModel";

interface Props {
    item: ItemModel;
}

export const ItemLabel = ({item}: Props) => (
    <label htmlFor={`checkbox_${item.id}`} className="custom-control-label">
        {item.name}
        {item.recurring
            ? <FiRepeat className="ml-1" style={{paddingBottom: "3px"}}/>
            : ""
        }
        {item.notes === ""
            ? ""
            : <small className="text-muted d-block">{item.notes}</small>
        }
    </label>
);