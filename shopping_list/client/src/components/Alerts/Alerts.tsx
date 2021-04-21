import React, {Fragment} from "react";
import AlertPanel from "./AlertPanel";
import {useStoreState} from "../../store";

export const Alerts = () => {
    const alerts = useStoreState(state => state.alerts);

    return (
        <Fragment>
            {alerts?.map(alert => (
                <AlertPanel color={alert.color} text={alert.text} />
            ))}
        </Fragment>
    );
}