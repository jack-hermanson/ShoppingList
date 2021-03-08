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