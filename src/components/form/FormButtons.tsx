import React from "react";
import {formMode} from "../../helpers/formHelper";
import Link from "next/link";


function FormButtons(props) {
    const submitButtonLabel = props.formMode === formMode.NEW ? "Add" : "Edit";

    return (
        <div className="form-buttons">

            <p id="errorsSummary" className="errors-text">{props.error}</p>
            <input className="form-button-submit" type="submit" value={submitButtonLabel} />
            <Link href={props.cancelPath} className="form-button-cancel">Cancel</Link>
        </div>
    )
}

export default FormButtons