'use client'
import {usePathname} from "next/navigation";

function PostPage({params}: { params: { id: string } }) {
    const pathname = usePathname()
    console.log(pathname)
    return (
        <>
            <h2 className={'text-lg'}>id</h2>
            <div>post id:{params.id}</div>
        </>
    )
}

export default PostPage
