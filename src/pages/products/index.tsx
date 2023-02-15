import MainList from "@/components/ProductModel/ProductList";
import {getProducts} from "@/api/productAPI";
import {Product} from "@/types/product";

type Props =  {
    products: Product[]
}

export async function getServerSideProps(): Promise<{ props: Props }> {
    const data = await getProducts();

    return {
        props: {
            products: data
        }
    }
}

export default function ProductList( {products}: Props ) {

    return (
        <MainList products={products} />
    )
}

