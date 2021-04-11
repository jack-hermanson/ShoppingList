import React from "react";
import {Button, CardHeader} from "reactstrap";
import {useStoreActions} from "../../../store";

interface Props {
    name: string;
    notes: string;
    id: number;
    visible: boolean | null;
}

export const GroupHeader = (props: Props) => {
    const toggleGroup = useStoreActions(actions => actions.toggleGroup);

    return (
        <CardHeader className="d-flex">
            <div className={`d-block mt-auto ${props.visible === false && "text-muted"}`} onClick={() => toggleGroup(props.id)}>
                {props.name}
                {props.notes === ""
                    ? ""
                    : <small className="d-block text-muted">{props.notes}</small>}
            </div>
            <div className="my-auto ml-auto">
                <Button size="sm" color="info">Complete</Button>
            </div>
        </CardHeader>
    );
}
