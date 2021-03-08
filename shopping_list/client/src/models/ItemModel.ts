
export default interface ItemModel {
    id?: number;
    name: string;
    notes: string;
    recurring: boolean;
    checked: boolean;
    groups: Array<{
        group_id: number;
        group_name: string;
    }>;
};