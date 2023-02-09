import {useRouter} from "next/router";

export default function name() {
    const router = useRouter();
    const { id } = router.query;

    return <h1>Message {id}</h1>
}