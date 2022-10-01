import { useRouter } from "next/router";
export default function SingleSlug() {
    const router = useRouter()
    console.log('this will print an array:',  router.query.slug);
    return <h1> after books just write "slugish/12/09/2022" </h1>
}