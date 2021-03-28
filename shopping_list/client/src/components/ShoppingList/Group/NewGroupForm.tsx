import React, {FormEvent, useState} from "react";
import {Button, FormGroup, Input, Label} from "reactstrap";
import GroupModel from "../../../models/GroupModel";
import {useStoreActions} from "../../../store";
import TextInput from "../../FormInput/TextInput";


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
                <TextInput
                    label="Name"
                    id="group-name-input"
                    type="text"
                    value={newGroup.name!}
                    onChange={(event) => {
                        setNewGroup({...newGroup, name: event.target.value});
                    }}
                    placeholder="The name of the group..."
                    required
                />
            </FormGroup>
            <FormGroup>
                <TextInput
                    onChange={e => setNewGroup({...newGroup, notes: e.target.value})}
                    type="textarea"
                    placeholder="Optional..."
                    id="group-notes-input"
                    label="Notes"
                    value={newGroup.notes!}
                    required
                />
            </FormGroup>
            <FormGroup className="bottom-buttons">
                <Button block type="submit" color="info">Save</Button>
            </FormGroup>
        </form>
    );
}
