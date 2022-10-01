import { useRouter } from "next/router";

export default function SingleBook() {
    const router = useRouter()
    console.log(router.query.id);
    return <h1>book</h1>
}