import MainList from "@/components/ProductModel/ProductList";

export default function ProductList( {products} ) {
    // console.log("TIS IS LIST")
    // console.log(products)
    // console.log("TIS IS END OF LIST")

    return (
        <MainList products={products} />
    )
}

export async function getStaticProps() {
    const response = await fetch("http://localhost:3000/api/products")
    const data = await response.json()
    //console.log(data)

    return {
        props: {
            products: data
        }
    }
}