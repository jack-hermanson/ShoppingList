import axios from "axios";
import GroupModel from "../models/GroupModel";


export const getGroup = async (groupId: number): Promise<GroupModel> => {
    const response = await axios.get(`/api/groups/${groupId}`);
    return {
        id: response.data.id,
        name: response.data.name,
        notes: response.data.notes
    };
};

export const getGroups = async (): Promise<Array<GroupModel>> => {
    const response = await axios.get("/api/groups/");
    return response.data;
};

export const getGroupIds = async(): Promise<Array<number>> => {
    const response = await axios.get("/api/groups/ids/");
    return response.data;
};

export const getGroupItemIds = async (groupId: number): Promise<Array<number>> => {
    const response = await axios.get(`/api/items/group/${groupId}`);
    return response.data;
}