import ProductListTableRow from "@/components/ProductModel/ProductListTableRow";

export default function ProductListTable({listOfProducts}: { listOfProducts: any[] } ) {
    const products = listOfProducts

    return (
        <table className="table-list">
            <thead>
            <tr>
                <th>ID:</th>
                <th>Name:</th>
                <th>Price:</th>
                <th>Production Date:</th>
                <th>End of its distribution:</th>
                <th>Options</th>
            </tr>
            </thead>
            <tbody>
            {products.map(product =>
                <ProductListTableRow productData={product} key={product.IDproduct} />
            )}
            </tbody>
        </table>
    )
}
