import React from "react"
import Link from "next/link"


function Navigation() {

    return (
        <nav>
            <ul>
                <li><Link href="/" >Main page</Link></li>
                <li><Link href="/products" >Products</Link></li>
                <li><Link href="/Order" >Orders</Link></li>
                <li><Link href="/OrderedProducts" >Ordered products</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;