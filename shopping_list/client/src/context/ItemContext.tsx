import ItemModel from "../models/ItemModel";
import React from "react";

interface ItemContextType {
    item: ItemModel | undefined;
    setItem: React.Dispatch<React.SetStateAction<ItemModel | undefined>>;
}

export const ItemContext = React.createContext<ItemContextType | undefined>(undefined);

interface Props {
    children: React.ReactNode;
}

export const ItemProvider = ({children}: Props) => {
    const [item, setItem] = React.useState<ItemModel>();

    return (
        <ItemContext.Provider value={{item, setItem}}>
            {children}
        </ItemContext.Provider>
    );
}
