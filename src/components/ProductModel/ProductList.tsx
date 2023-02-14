import Link from "next/link";
import ProductListTable from "@/components/ProductModel/ProductListTable";


export default function MainList( { products } ) {
    const listOfProducts = products;

    return (
        <main>
            <h2>Products</h2>
            <ProductListTable listOfProducts={listOfProducts} />
            <div>
                <p><Link href="/ProductModel/add" className="button-add">Add a new product</Link></p>
                <p className="delete-message"></p>
            </div>
        </main>
    )
}




