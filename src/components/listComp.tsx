import Link from "next/link";
import {placeholder} from "@/placeholder_list/placeholder";

function listComp() {

    return(
        <nav>
            <ul>
                {placeholder.map((name, index) => {
                    return <li key={index} ><Link href={`/dynamicRouting/${name.Name}`} >{name.Name}</Link></li>
                })}
            </ul>
        </nav>
    )
}

export default listComp