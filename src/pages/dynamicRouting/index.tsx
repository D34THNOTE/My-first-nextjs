import {placeholder} from "@/placeholder_list/placeholder";
import Link from "react-router-dom";
import listComp from "@/components/listComp";


export default function List() {
    const plc = placeholder

    return <div>
        {listComp()}
    </div>
}