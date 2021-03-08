export default interface ItemModel {
    id?: number;
    name: string;
    notes: string;
    recurring: boolean;
    checked: boolean;
    groups: Array<{
        groupId: number;
        groupName: string;
    }>;
};