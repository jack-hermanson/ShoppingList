import React from "react";

interface Props {
    children: JSX.Element[] | JSX.Element;
}

export const StickyTop = ({children}: Props) => {
    return (
        <div className="sticky-top" style={{zIndex: 10}}>
            {children}
        </div>
    )
}