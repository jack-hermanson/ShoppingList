import React, {Fragment} from "react";
import GroupModel from "../../../models/GroupModel";
import {Card} from "reactstrap";
import GroupHeader from "./GroupHeader";
import {GroupBody} from "./GroupBody";

interface Props {
    group: GroupModel;
}

export const Group = ({group}: Props) => {
    return (
        <Fragment>
            <Card className="space-between">
                <GroupHeader
                    name={group.name!}
                    notes={group.notes!}
                />
                {group.visible !== false && (
                    <GroupBody group={group}/>
                )}
            </Card>
        </Fragment>
    );
};
