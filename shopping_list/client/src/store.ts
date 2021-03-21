import GroupModel from "./models/GroupModel";
import {action, Action, createStore, thunk, Thunk} from "easy-peasy";
import axios from "axios";
import {createTypedHooks} from "easy-peasy";

interface StoreModel {
    groups: GroupModel[];
    addGroup: Action<StoreModel, GroupModel>;
    saveGroup: Thunk<StoreModel, GroupModel>;
}

export const store = createStore<StoreModel>({
    groups: [],
    addGroup: action((state, payload) => {
        state.groups.push(payload);
    }),
    saveGroup: thunk(async (actions, payload) => {
        const result = await axios.post(`/api/groups/`, payload);
        actions.addGroup(result.data);
    })
});

const typedHooks = createTypedHooks<StoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
