import React, {Component} from "react";
import GroupModel from "../../models/GroupModel";

export interface GroupProps {
    groupId: number;
}

interface State extends GroupModel {

}

export default class Group extends Component<GroupProps, State> {

}
