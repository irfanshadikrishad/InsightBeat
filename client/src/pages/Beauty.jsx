import { useEffect, useState } from "react"
import Blog from "../components/Blog";

export default function Fashion() {
    const [blogs, setBlogs] = useState([]);
    const [noBlogs, setNoBlogs] = useState(false);

    const fashion = async () => {
        const request = await fetch("http://localhost:3000/api/blog/beauty", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
        const response = await request.json();
        if (request.status === 200) {
            setBlogs(response);
        } else if (request.status === 404) {
            setNoBlogs(true);
        } else {
            console.log(response);
        }
    }

    useEffect(() => {
        fashion();
    }, [])
    return <>
        <section className="container individual">
            <h1>Beauty &gt;&gt;</h1>
            <div className="individuals">
                {!noBlogs && blogs ? blogs.map((blog) => {
                    return <Blog
                        key={blog._id}
                        title={blog.title.slice(0, 45) + "..."}
                        body={blog.body.slice(0, 150) + "..."}
                        date={blog.createdAt}
                        author={blog.author}
                        category={blog.category}
                    />
                }) : <p>No blogs found</p>}
            </div>
        </section>
    </>
}