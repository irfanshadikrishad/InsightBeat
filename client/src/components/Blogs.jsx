import { useEffect, useState } from "react"
import Blog from "./Blog"

export default function Blogs() {
    const [blogs, setBlogs] = useState([]);

    const blogFetch = async () => {
        const request = await fetch("http://localhost:3000/api/blog/blogs", {
            method: "GET"
        })
        const response = await request.json();
        if (request.status === 200) {
            setBlogs(response)
        } else {
            console.log(response);
        }
    }
    useEffect(() => {
        blogFetch();
    })
    return <>
        <section className="blogs">
            {blogs && blogs.map((blo) => {
                return <Blog
                    key={blo._id}
                    category={blo.category}
                    author={blo.author}
                    date={blo && String(blo.createdAt).slice(0, 10)}
                    title={String(blo.title).slice(0, 33) + "..."}
                    body={String(blo.body).slice(0, 150) + "..."}
                />
            })}
        </section>
    </>
}