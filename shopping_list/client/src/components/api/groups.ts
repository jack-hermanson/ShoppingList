import axios from "axios";
import GroupModel from "../../models/GroupModel";


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
