import axios from "axios";
import GroupModel from "../models/GroupModel";
import {setSuccessAlert} from "./alerts";

export const getGroups = async (): Promise<Array<GroupModel>> => {
    const response = await axios.get("/api/groups/");
    return response.data.map((group: GroupModel) => {
        return {...group, visible: true};
    });
};

export const completeGroup = async (group_id: number): Promise<void> => {
    const response = await axios.post(`/api/groups/complete/${group_id}`);
    if (response.status !== 200) {
        throw new Error(`Response status ${response.status} in completeGroup`);
    }
}

export const saveGroup = async (group: GroupModel) => {
    const response: {data: GroupModel} = await axios.post(`/api/groups/`, group);
    await setSuccessAlert("added", `group "${response.data.name}"`);
}