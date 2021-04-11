import GroupModel from "./models/GroupModel";
import {action, Action, createStore, thunk, Thunk} from "easy-peasy";
import axios from "axios";
import {createTypedHooks} from "easy-peasy";
import AlertModel from "./models/AlertModel";
import ItemModel from "./models/ItemModel";
import {deleteItem, editItem, ItemRequestModel, saveItem, toggleItemCheck} from "./api/items";
import {getGroups} from "./api/groups";

interface StoreModel {
    groups: GroupModel[];
    setGroups: Action<StoreModel, GroupModel[]>;
    fetchGroups: Thunk<StoreModel>;
    addGroup: Action<StoreModel, GroupModel>;
    saveGroup: Thunk<StoreModel, GroupModel>;

    items: ItemModel[] | null;
    setItems: Action<StoreModel, ItemModel[]>;
    fetchItems: Thunk<StoreModel>;
    editItem: Action<StoreModel, ItemModel>;
    deleteItem: Thunk<StoreModel, number>;
    saveItem: Thunk<StoreModel, ItemModel>;
    toggleItemCheck: Action<StoreModel, {itemId: number, checked: boolean}>;
    focusItem: ItemModel | null;
    setFocusItem: Action<StoreModel, ItemModel | null>;

    alerts: AlertModel[];
}

export const store = createStore<StoreModel>({
    groups: [],
    setGroups: action((state, payload) => {
        state.groups = payload;
    }),
    fetchGroups: thunk(async (actions) => {
        const res = await getGroups();
        actions.setGroups(res.sort((first: GroupModel, second: GroupModel) => {
            if (first.name === "Misc") return 1;
            if (second.name === "Misc") return -1;
            return 0;
        }));
    }),
    addGroup: action((state, payload) => {
        state.groups.push(payload);
    }),
    saveGroup: thunk(async (actions, payload) => {
        const res = await axios.post("/api/groups/", payload);
        actions.addGroup(res.data);
        return res.data;
    }),

    items: null,
    setItems: action((state, payload) => {
        state.items = payload;
    }),
    fetchItems: thunk(async (actions) => {
        const res = await axios.get("/api/items/");
        actions.setItems(res.data);
    }),
    editItem: action((state, payload) => {
        const newItem: ItemRequestModel = {
            ...payload,
            groups: payload.groups.map(group => group.groupId)
        };
        state.items = state.items!.map((item: ItemModel) => {
            if (item.id === newItem.id) {
                return payload;
            }
            return item;
        });
        const startTime = Date.now();
        editItem(newItem).then(() => {
            console.log(`Item edited. Response time: ${timeDif(startTime)}s`);
        });
    }),
    deleteItem: thunk(async (actions, itemId: number) => {
        const startTime = Date.now();
        await deleteItem(itemId);
        console.log(`Item deleted. Response time: ${timeDif(startTime)}s`);
        await actions.fetchItems();
    }),
    toggleItemCheck: action((state, payload) => {
        const startTime = Date.now();
        state.items = state.items!.map((item: ItemModel) => {
            if (item.id === payload.itemId) {
                item.checked = payload.checked;
                return item;
            }
            return item;
        });
        toggleItemCheck(payload.itemId, payload.checked).then(() => {
            console.log(`Item ${payload.checked ? "" : "un"}checked. Response time: ${timeDif(startTime)}s`);
        });
    }),
    focusItem: null,
    setFocusItem: action((state, payload) => {
        state.focusItem = payload;
    }),
    saveItem: thunk(async (actions, payload) => {
        const startTime = Date.now();
        const newItem: ItemRequestModel = {
            ...payload,
            groups: payload.groups.map(group => group.groupId)
        };
        await saveItem(newItem);
        await actions.fetchItems();
        console.log(`New item added. Response time: ${timeDif(startTime)}s`);
    }),

    alerts: [],
});

const timeDif = (originalTime: number) => {
    return (Date.now() - originalTime) / 1000;
}

const typedHooks = createTypedHooks<StoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
