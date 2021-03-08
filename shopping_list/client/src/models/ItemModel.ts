
export default interface ItemModel {
    id?: number;
    name: string;
    notes: string;
    recurring: boolean;
    groups: Array<{
        group_id: number;
        group_name: string;
    }>;
};