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

export interface ItemRequestModel extends Omit<ItemModel, "groups"> {
    groups: Array<number>;
}

export const editItem = async (item: ItemRequestModel): Promise<void> => {
    try {
        const response = await axios.put(`/api/items/edit/${item.id}`, item);
        const responseData: ItemModel = response.data;
        console.log("new name", responseData.name);
        setSuccessAlert("updated", `item "${responseData.name}"`).then(() => {
            console.log(responseData.name);
        });
    } catch(error) {
        await setAlert(`Error in editItem api call: ${error.message}`, "danger");
    }
}

export const toggleItemCheck = async (itemId: number, checked: boolean): Promise<void> => {
    try {
        await axios.put(`/api/items/toggle/${itemId}`, {"checked": checked});
    } catch (error) {
        await setAlert(`Error in toggleItemCheck api call: ${error.message}`, "danger");
    }
}

export const saveItem = async (item: ItemRequestModel): Promise<ItemModel> => {
    try {
        const response = await axios.post("/api/items/", item);
        const responseData: ItemModel = response.data;
        await setSuccessAlert("added", `item "${responseData.name}"`);
        return responseData;
    } catch (error) {
        await setAlert(`Error in the saveItem api call: ${error.message}`, "danger");
        throw new Error(error);
    }
}

export const deleteItem = async (itemId: number): Promise<void> => {
    try {
        const response: {data: {id: number, name: string}} = await axios.delete("/api/items/", {
            data: {
                id: itemId
            }
        });
        const responseData = response.data;
        await setSuccessAlert("deleted", `item "${responseData.name}"`);
    } catch (error) {
        await setAlert(`Error in the deleteItem api call: ${error.message}`, "danger");
        throw new Error(error);
    }
}