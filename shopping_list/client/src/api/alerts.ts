import axios from "axios";

const alertsEndpoint = "/api/alerts/";

export const getAlerts = async () => {
    const response = await axios.get(alertsEndpoint);
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