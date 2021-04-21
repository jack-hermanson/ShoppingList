import axios from "axios";
import AlertModel from "../models/AlertModel";

const alertsEndpoint = "/api/alerts/";

export const getAlerts = async () => {
    const response: { data: AlertModel[] } = await axios.get(alertsEndpoint);
    console.log("getAlerts(), response.data", response.data);
    return response.data;
}

export const setAlert = async (text: string, color: string): Promise<void> => {
    const response = await axios.post(alertsEndpoint,
        {
            text: text,
            color: color
        });
    if (response.status === 200) {
        await Promise.resolve();
    } else {
        await Promise.reject();
    }
}

export const setSuccessAlert = async (verbPastTense: string, noun: string): Promise<void> => {
    const text = `Successfully ${verbPastTense} ${noun}.`;
    await setAlert(text, "success");
}