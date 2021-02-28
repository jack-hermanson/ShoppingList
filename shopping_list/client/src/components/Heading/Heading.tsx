import React, {Component} from "react";

interface HeadingProps {
    title: string;
}

export default class Heading extends Component<HeadingProps, any> {
    render() {
        return (
            <div className="border-bottom mb-3">
                <h2>{this.props.title}</h2>
            </div>
        );
    }
}
