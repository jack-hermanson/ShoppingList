import axios from "axios";
import GroupModel from "../models/GroupModel";

export const getGroups = async (): Promise<Array<GroupModel>> => {
    const response = await axios.get("/api/groups/");
    return response.data.map((group: GroupModel) => {
        return {...group, visible: true};
    });
};