import React, {Fragment, useEffect} from "react";
import {useStoreState, useStoreActions} from "../../../store";
import {Group} from "./Group";

export const Groups = () => {

    const groups = useStoreState(state => state.groups);
    const fetchGroups = useStoreActions(actions => actions.fetchGroups);
    const fetchItems = useStoreActions(actions => actions.fetchItems);

    useEffect( () => {
        fetchGroups();
        fetchItems();
    }, [fetchGroups, fetchItems]);

    console.log("Groups.tsx, groups:", groups);

    return (
        <Fragment>
            {groups.map(group => (
                <Group key={group.id} group={group} />
            ))}
        </Fragment>
    );
};