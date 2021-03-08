import axios from "axios";

export const getAlerts = async () => {
    const response = await axios.get("/api/alerts/");
    return response.data;
}

export const setAlert = async () => {

}