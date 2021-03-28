import React, {FormEvent} from "react";
import {Button, FormGroup, Input, Label} from "reactstrap";


export const NewGroupForm = () => {

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("submitted");
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="group-name-input">Name</Label>
                <Input type="text" id="group-name-input" />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="group-notes-input">Notes</Label>
                <Input type="textarea" id="group-notes-input" />
            </FormGroup>
            <FormGroup className="bottom-buttons">
                <Button block type="submit" color="info">Save</Button>
            </FormGroup>
        </form>
    );
}
