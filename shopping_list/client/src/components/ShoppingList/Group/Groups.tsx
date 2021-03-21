import React, {Fragment, useEffect} from "react";
import {useStoreState, useStoreActions} from "../../../store";
import {Group} from "./Group";

export const Groups = () => {

    const groups = useStoreState(state => state.groups);
    const fetchGroups = useStoreActions(actions => actions.fetchGroups);

    useEffect( () => {
        fetchGroups();
    }, [fetchGroups]);

    console.log("Groups.tsx", groups);

    return (
        <Fragment>
            {groups.map(group => (
                <Group key={group.id} group={group} />
            ))}
            <pre>Groups.tsx</pre>
        </Fragment>
    );
};