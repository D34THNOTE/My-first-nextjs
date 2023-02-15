import {Product} from "@/types/product";

export async function getProducts() {
    const res = await fetch("http://localhost:3000/api/products")
    const data = await res.json()
    return data;
}

export function addProductApiCall(productData: Product): Promise<Response> {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
    };

    const promise = fetch('http://localhost:3000/api/products', options);
    return promise;
}

export function updateProductApiCall(productID: number, productData: Product): Promise<Response> {
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
    };
    const promise = fetch(`http://localhost:3000/api/products/${productID}`, options);
    return promise;
}