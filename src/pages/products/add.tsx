import FormInput from "@/components/form/FormInput";
import React, {useEffect, useState} from "react";
import { useParams} from "react-router-dom"

import {formMode, getValidationErrorKey} from "@/helpers/formHelper";
import Link from "next/link"
import {validateField} from "@/helpers/validateProductFields";
import {addProductApiCall, updateProductApiCall} from "@/api/productAPI";
import FormButtons from "@/components/form/FormButtons";

type ProductID = number;

function redirectTo(url: string) {
    window.location.href = url;
}

function ProductForm() {
    const [redirect, setRedirect] = useState(false);
    const [err, setErr] = useState(null);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [message, setMessage] = useState(null)

    const { productID } = useParams();
    const currentFormMode = productID ? formMode.EDIT : formMode.NEW;

    const [allJobs, setAllJobs] = useState([]);
    const [allDepts, setAllDepts] = useState([]);

    const [product, setProduct] = useState({
        name: "",
        price: 0,
        productionDate: "",
        endDistributionDate: ""
    })

    const [formErrors, setFormErrors] = useState({
        name: "",
        price: "",
        productionDate: "",
        endDistributionDate: ""
    })



    useEffect(() => {
        if(redirect) {
            redirectTo('/products');
        }
    }, [redirect])

    function handleChange(event) {
        const { name, value } = event.target;
        const errorMessage = validateField(name, value)
        setFormErrors({
            ...formErrors,
            [name]: errorMessage
        })
        setProduct({
            ...product,
            [name]: value
        })
    }

    function hasErrors() {
        Object.values(formErrors).forEach((value) => {
            if (value.length > 0) {
                return true
            }
        })
        return false
    }

    function validateForm() {
        let isValid = true
        let serverFieldsErrors = {...formErrors}
        Object.entries(product).forEach(([key, value]) => {
            const errorMessage = validateField(key, value)
            serverFieldsErrors[key] = errorMessage
            if (errorMessage.length > 0) {
                isValid = false
            }
        })
        setFormErrors(serverFieldsErrors)
        return isValid
    }

    function handleSubmit(event) {
        event.preventDefault()
        const isValid = validateForm()
        if (isValid) {
            let promise, response
            if (currentFormMode === formMode.NEW) {
                console.log(product)
                promise = addProductApiCall(product)
            } else if (currentFormMode === formMode.EDIT) {
                promise = updateProductApiCall(productID, product)
            }
            if (promise) {
                promise
                    .then(
                        (data) => {
                            response = data
                            if (response.status === 201 || response.status === 500) {
                                return data.json()
                            }
                        }
                    )
                    .then(
                        (data) => {
                            if (!response.ok && response.status === 500) {
                                const serverFieldsErrors = {...formErrors}
                                for (const i in data) {
                                    const errorItem = data[i]
                                    const errorMessage = errorItem.message
                                    const fieldName = errorItem.path
                                    serverFieldsErrors[fieldName] = errorMessage
                                }
                                setFormErrors(serverFieldsErrors)
                                setErr(null)
                            } else {
                                setRedirect(true)
                            }
                        },
                        (error) => {
                            setErr(error)
                        }
                    )
            }
        }
    }

    const errorsSummary = hasErrors() ? "There are errors in the form" : ''
    const fetchError = err ? `Error: ${err.message}` : ''
    const globalErrorMessage = errorsSummary || fetchError || message

    return (
        <main>
            <h2>Add product</h2>
            <form className="form" onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    label="Name" required
                    error={getValidationErrorKey(formErrors["name"])}
                    name="name"
                    placeholder="placeholder message"
                    onChange={handleChange}
                    value={product["name"]}
                />
                <span id="errorName" className="errors-text">{getValidationErrorKey(formErrors["name"])}</span>

                <FormInput
                    type="number"
                    label="Price" required
                    error={getValidationErrorKey(formErrors["price"])}
                    name="price"
                    placeholder=""
                    onChange={handleChange}
                    value={product["price"]}
                />
                <span id="errorPrice" className="errors-text">{getValidationErrorKey(formErrors["price"])}</span>

                <FormInput
                    type="date"
                    label="Production date" required
                    error={getValidationErrorKey(formErrors["productionDate"])}
                    name="productionDate"
                    placeholder=""
                    onChange={handleChange}
                    value={product["productionDate"]}
                />
                <span id="errorProductionDate" className="errors-text">{getValidationErrorKey(formErrors["productionDate"])}</span>

                <FormInput
                    type="date"
                    label="End distribution date" required
                    error={getValidationErrorKey(formErrors["endDistributionDate"])}
                    name="endDistributionDate"
                    placeholder=""
                    onChange={handleChange}
                    value={product["endDistributionDate"]}
                />
                <span id="errorEndDistributionDate" className="errors-text">{getValidationErrorKey(formErrors["endDistributionDate"])}</span>

                <FormButtons
                    formMode={currentFormMode}
                    error={globalErrorMessage}
                    cancelPath="/products"
                />
            </form>
        </main>
    )
}

export default ProductForm