import React, {Component} from "react";
import Heading from "../Heading/Heading";

export default class ShoppingList extends Component {
    render() {
        return (
            <div>
                <Heading title="Shopping List" />
                <p>Stuff to buy</p>
            </div>
        );
    }
}