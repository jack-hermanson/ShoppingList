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

export const saveGroup = async (group: GroupModel): Promise<void> => {
    const response: {data: GroupModel} = await axios.post(`/api/groups/`, group);
    await setSuccessAlert("added", `group "${response.data.name}"`);
}

export const editGroup = async (group: GroupModel): Promise<void> => {
    console.log({group});
    const response: {data: GroupModel} = await axios.put(`/api/groups/edit/${group.id}`, group);
    await setSuccessAlert("edited", `group "${response.data.name}"`);
}

export const deleteGroup = async (group: GroupModel): Promise<void> => {
    interface DeleteGroupResponse extends GroupModel {
        itemsDeleted: number;
    }

    const response: { data: DeleteGroupResponse } = await axios.delete(`/api/groups/delete/${group.id}`);
    await setSuccessAlert("deleted", `group "${response.data.name}" and ${response.data.itemsDeleted} items`);
};