import ItemModel from "../../../models/ItemModel";

export function validateEditItemForm(editedItem: ItemModel): {
    isValid: boolean,
    alertText: string
} {
    let valid = true;
    let alertText = "";
    if (editedItem.groups.length < 1) {
        valid = false;
        alertText += "At least one group is required. ";
    }
    if (editedItem.name.replace(" ", "").length < 2) {
        valid = false;
        alertText += "The 'name' field must have at least 2 characters. ";
    }
    return {isValid: valid, alertText};
}

export const defaultNewItem: ItemModel = {
    name: "",
    notes: "",
    groups: [],
    checked: false,
    recurring: false,
    id: undefined
}