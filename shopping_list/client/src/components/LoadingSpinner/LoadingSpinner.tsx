import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import React from "react";

interface Props {
    className?: string;
}

export const LoadingSpinner = ({className}: Props) => (
    <div className={className}>
        <Loader
            type="Bars"
            height={30}
            color="#fff"
        />
    </div>
);
