import React, {Component, Fragment} from "react";
import {GroupsContext} from "../../../context/GroupsContext";
import Group from "./Group";

export default class Groups extends Component<any, any> {
    static contextType = GroupsContext;
    context!: React.ContextType<typeof GroupsContext>;

    render() {
        return (
            <Fragment>
                {this.context.map(group => (
                    <Group key={group.id} group={group} />
                ))}
            </Fragment>
        );
    }
}