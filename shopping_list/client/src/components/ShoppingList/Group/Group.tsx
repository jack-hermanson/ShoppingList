import React, {Component, Fragment} from "react";
import GroupModel from "../../../models/GroupModel";
import {Card} from "reactstrap";
import GroupHeader from "./GroupHeader";

interface Props {
    group: GroupModel;
}

export default class Group extends Component<Props, any> {

    render() {
        return (
            <Fragment>
                <Card className="space-between">
                    <GroupHeader
                        name={this.props.group.name!}
                        notes={this.props.group.notes!}
                    />
                </Card>
            </Fragment>
        )
    }
}
