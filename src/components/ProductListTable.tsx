import ProductListTableRow from "@/components/ProductListTableRow";

export default function ProductListTable( listOfProducts: any[] ) {
    const products = listOfProducts

    console.log(products)
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
            {products}
            </tbody>
        </table>
    )
}
// {products.map(product =>
//     <ProductListTableRow productData={listOfProducts} key={product.IDproduct} />
// )}