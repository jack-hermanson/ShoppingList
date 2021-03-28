import React, {FormEvent, useState} from "react";
import {Button, FormGroup, Input, Label} from "reactstrap";
import GroupModel from "../../../models/GroupModel";
import {useStoreActions} from "../../../store";


export const NewGroupForm = () => {

    const [newGroup, setNewGroup] = useState<GroupModel>({
        name: "",
        notes: "",
        id: null
    });

    const saveGroup = useStoreActions(actions => actions.saveGroup);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await saveGroup(newGroup);
        setNewGroup({...newGroup, name: "", notes: ""});
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormGroup>
                <Label required htmlFor="group-name-input">Name</Label>
                <Input required
                       value={newGroup.name!}
                       type="text"
                       placeholder="Name of the category..."
                       id="group-name-input"
                       onChange={e => setNewGroup({...newGroup, name: e.target.value})}
                />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="group-notes-input">Notes</Label>
                <Input
                    onChange={e => setNewGroup({...newGroup, notes: e.target.value})}
                    type="textarea"
                    placeholder="Optional..."
                    id="group-notes-input"
                />
            </FormGroup>
            <FormGroup className="bottom-buttons">
                <Button block type="submit" color="info">Save</Button>
            </FormGroup>
        </form>
    );
}
