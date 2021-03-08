import axios from "axios";
import ItemModel from "../models/ItemModel";
import {setAlert, setSuccessAlert} from "./alerts";

export const getItem = async (itemId: number): Promise<ItemModel> => {
    const response = await axios.get(`/api/items/${itemId}`);
    return {
        id: response.data.id,
        name: response.data.name,
        notes: response.data.notes,
        checked: response.data.checked,
        groups: response.data.groups,
        recurring: response.data.recurring
    };
}

const getItemGroupIds = (item: ItemModel): Array<number> => {
    let output: Array<number> = [];
    item.groups.forEach(group => {
        output.push(group.groupId);
    });
    return output;
}

interface ItemRequestModel extends Omit<ItemModel, "groups"> {
    groups: Array<number>;
}

export const editItem = async (item: ItemModel): Promise<void> => {
    const requestItem: ItemRequestModel = {...item, groups: getItemGroupIds(item)};
    try {
        const response = await axios.put(`/api/items/edit/${item.id}`, requestItem);
        const responseData: ItemModel = response.data;
        await setSuccessAlert("updated", `item "${responseData.name}"`)
    } catch(error) {
        throw error;
    }
}