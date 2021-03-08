import React, {Component} from "react";
import {Button, CardHeader} from "reactstrap";

interface Props {
    name: string;
    notes: string;
}

export default class GroupHeader extends Component<Props, any> {
    render() {
        return (
            <CardHeader className="d-flex">
                <div className="d-block mt-auto">
                    {this.props.name}
                    {this.props.notes === ""
                        ? ""
                        : <small className="d-block text-muted">{this.props.notes}</small>}
                </div>
                <div className="my-auto ml-auto">
                    <Button size="sm" color="info">Complete</Button>
                </div>
            </CardHeader>
        );
    }
}
