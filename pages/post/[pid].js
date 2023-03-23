import { useRouter } from "next/router"

const Post  = () => {
    
    const router = useRouter();
    const { pid } = router.query;

    fetch(`http://localhost:3000/api/hello`)
    .then(response => response.json())
    .then(response => console.log(response.query))
    return <p>Post: {pid}</p>
}

export default Post