import axios from "axios";
import ItemModel from "../models/ItemModel";

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
    console.log("original item", item);
    const requestItem: ItemRequestModel = {...item, groups: getItemGroupIds(item)};
    console.log(requestItem);
    try {
        await axios.put(`/api/items/edit/${item.id}`, requestItem);
    } catch(error) {
        throw error;
    }
}