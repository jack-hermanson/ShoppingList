import React, {ChangeEvent, Component, KeyboardEvent, Fragment, useEffect} from "react";
import {Input, Label} from "reactstrap";

interface Props {
    label: string;
    id: string;
    type: "text" | "textarea";
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
    required?: boolean;
    placeholder?: string;
    autofocus?: boolean;
}

export const TextInput: React.FC<Props> = (props) => {

    useEffect(() => {
        if (props.autofocus) {
            document.getElementById(props.id)?.focus();
        }
    });

    return (
        <Fragment>
            <Label required={props.required} htmlFor={props.id}>{props.label}</Label>
            <Input
                required={props.required}
                id={props.id}
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                onKeyPress={props.onKeyPress}
                placeholder={props.placeholder}
                autoFocus={props.autofocus}
            />
        </Fragment>
    );
}