import Link from "next/link";
import ProductListTable from "@/components/ProductListTable";
import {useState} from "react";


export default function MainList() {
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        const response = await fetch("localhost:3000/api/products")
        const data = await response.json()
        setProducts(data)
    }

    return (
        <main>
            <h2>Products</h2>
            <ProductListTable listOfProducts={products} />
            <div>
                <p><Link href="/ProductModel/add" className="button-add">Add a new product</Link></p>
                <p className="delete-message"></p>
            </div>
        </main>
    )
}

