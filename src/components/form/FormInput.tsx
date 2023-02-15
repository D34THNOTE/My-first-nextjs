import React from "react";

function FormInput(props) {

    const className = props.error === "" ? "" : "error-input";

    return (
        <>
            <label htmlFor={props.name}>
                {props.label}:
                {props.required && <span className="required">*</span>}
            </label>
            <input
                type={props.type}
                className={className}
                name={props.name}
                id={props.id}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
        </>
    )
}

export default FormInput