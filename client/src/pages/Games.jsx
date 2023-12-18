import { useEffect, useState } from "react"
import Blog from "../components/Blog";

export default function Games() {
    const [blogs, setBlogs] = useState([]);
    const [noBlogs, setNoBlogs] = useState(false);

    const GetGames = async () => {
        const request = await fetch("https://insightbeat.up.railway.app/api/blog/games", {
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
        GetGames();
    }, [])
    return <>
        <section className="container individual">
            <h1>Games &gt;&gt;</h1>
            <div className="individuals">
                {!noBlogs && blogs ? blogs.map((blog) => {
                    return <Blog
                        key={blog._id}
                        title={blog.title.slice(0, 45) + "..."}
                        body={blog.body.slice(0, 150) + "..."}
                        date={String(blog.createdAt).slice(0, 10)}
                        author={blog.author}
                        category={blog.category}
                        id={blog._id}
                    />
                }) : <p>No blogs found</p>}
            </div>
        </section>
    </>
}