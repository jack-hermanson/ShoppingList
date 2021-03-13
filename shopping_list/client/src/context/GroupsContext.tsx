import GroupModel from "../models/GroupModel";
import React from "react";
import {getGroups} from "../api/groups";

const defaultGroups: Array<GroupModel> = [];

interface GroupsContextType {
    groups: Array<GroupModel>;
    setGroups: React.Dispatch<React.SetStateAction<Array<GroupModel>>>
}

export const GroupsContext = React.createContext<GroupsContextType | undefined>(undefined);

interface Props {
    children: React.ReactNode
}

export const GroupsProvider = (props: Props) => {
    const [groups, setGroups] = React.useState(defaultGroups);

    React.useEffect(() => {
        getGroups().then(groupsFromApi => {
            setGroups(groupsFromApi);
        });
    }, []);

    return (
        <GroupsContext.Provider value={{groups: groups, setGroups}}>
            {props.children}
        </GroupsContext.Provider>
    );
}