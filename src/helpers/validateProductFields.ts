import {formValidationKeys} from "@/helpers/formHelper";
import {checkDate, checkPriceRange, checkRequired, checkTextLengthRange} from "@/helpers/validationCommon";


export function validateField(fieldName, fieldValue) {
    let errorMessage = "";
    if (fieldName === "name") {
        if(!checkRequired(fieldValue)) {
            errorMessage = formValidationKeys.notEmpty
        } else if(!checkTextLengthRange(fieldValue, 2, 60)) {
            errorMessage = formValidationKeys.len_2_60
        }
    }
    if(fieldName === "price") {
        if(!checkRequired(fieldValue)) {
            errorMessage = formValidationKeys.notEmpty
        } else if(!checkPriceRange(fieldValue)) {
            errorMessage = formValidationKeys.isPositive
        }
    }
    if(fieldName === "productionDate") {
        if(!checkRequired(fieldValue)) {
            errorMessage = formValidationKeys.notEmpty
        } else if(!checkDate(fieldValue)) {
            errorMessage = formValidationKeys.isDate
        }
    }
    // if(fieldName === "endDistributionDate") { //TODO make this work for functional components
    //     if(fieldValue && fieldValue < this.state.product.productionDate) {
    //         errorMessage = formValidationKeys.endDistributionDate
    //     }
    // }

    return errorMessage;
}