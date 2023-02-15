import React from "react";

function FormInput(props: { error: string; name: string | undefined; label: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; required: any; type: string | (string & {}) | undefined; id: string | undefined; placeholder: string | undefined; value: string | number | readonly string[] | undefined; onChange: React.ChangeEventHandler<HTMLInputElement> | undefined; }) {

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