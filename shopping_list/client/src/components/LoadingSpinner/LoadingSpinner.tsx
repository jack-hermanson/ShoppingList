import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import React from "react";

interface Props {
    className?: string;
}

export default class LoadingSpinner extends React.Component<Props, any> {
    render() {
        return (
            <div className={this.props.className}>
                <Loader
                    type="Bars"
                    height={30}
                    color="#fff"
                />
            </div>
        );
    }
}