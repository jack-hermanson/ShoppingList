import React, {useState} from "react";
import {Button, FormGroup} from "reactstrap";
import ItemModel from "../../../models/ItemModel";
import {useStoreState} from "../../../store";
import {EditItemForm} from "./EditItemModal/EditItemForm";

export const NewItemForm = () => {

    const [newItem, setNewItem] = useState<ItemModel>({
        name: "",
        notes: "",
        groups: [],
        checked: false,
        recurring: false,
        id: undefined
    });

    const groups = useStoreState(state => state.groups);

    const handleSubmit = () => {
        console.log("submit");
    }

    return (
        <form>
            <EditItemForm
                formName="new-item"
                editedItem={newItem}
                handleNameTextChange={(event) => {
                    setNewItem({...newItem, name: event.target.value});
                }}
                handleNotesTextChange={(event) => {
                    setNewItem({...newItem, notes: event.target.value});
                }}
                handleRecurringCheckChange={(event) => {
                    setNewItem({...newItem, recurring: event.target.checked});
                }}
                handleGroupCheckChange={((event, groupId) => {
                    setNewItem({
                        ...newItem,
                        groups: groups.filter(group => {
                            if (group.id === groupId) {
                                return event.target.checked;
                            }
                            return newItem.groups.some(someGroup => someGroup.groupId === group.id);
                        }).map(fullGroup => ({
                            groupId: fullGroup.id!,
                            groupName: fullGroup.name!
                        }))
                    });
                })}
                handleFormSubmit={handleSubmit}
            />
            <FormGroup className="bottom-buttons">
                <Button block color="info" type="submit">Save</Button>
            </FormGroup>
        </form>
    )
}