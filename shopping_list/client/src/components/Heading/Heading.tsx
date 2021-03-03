import React, {Component} from "react";

interface HeadingProps {
    title: string;
}

export default class Heading extends Component<HeadingProps, any> {
    render() {
        return (
            <div>
                <div className="page-title">
                    <h4 className="title-text">{this.props.title}</h4>
                    <div className="right">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
