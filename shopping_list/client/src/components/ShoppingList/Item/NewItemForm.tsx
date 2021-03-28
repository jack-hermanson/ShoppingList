import React, {useState} from "react";
import {FormGroup} from "reactstrap";
import TextInput from "../../FormInput/TextInput";
import ItemModel from "../../../models/ItemModel";

export const NewItemForm = () => {

    const [newItem, setNewItem] = useState<ItemModel>({
        name: "",
        notes: "",
        groups: [],
        checked: false,
        recurring: false,
        id: undefined
    });

    return (
        <form>
            <FormGroup>
                <TextInput
                    label="Name"
                    id="item-name-input"
                    type="text"
                    value={newItem.name}
                    onChange={(event) => {
                        setNewItem({
                            ...newItem,
                            name: event.target.value
                        });
                    }}
                    required
                    placeholder="The name of the item..."
                />
            </FormGroup>
            <FormGroup>
                <TextInput
                    label="Notes"
                    id="item-notes-input"
                    type="textarea"
                    value={newItem.notes}
                    onChange={(event) => {
                        setNewItem({
                            ...newItem,
                            notes: event.target.value
                        });
                    }}
                    placeholder="Optional..."
                />
            </FormGroup>
        </form>
    )
}