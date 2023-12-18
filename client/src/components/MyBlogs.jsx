import Blog from "./Blog"
import { useAuth } from "../store/auth"
import { useEffect, useState } from "react";

export default function MyBlogs() {
    const { user, loading } = useAuth();
    const [username, setUsername] = useState(null);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        if (!loading && user) {
            const bloog = async () => {
                setUsername(user.username);
                const request = await fetch("https://insightbeat.up.railway.app/api/blog/user",
                    {
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ username })
                    })
                // eslint-disable-next-line no-unused-vars
                const response = await request.json();
                if (request.status === 200) {
                    setBlogs(response);
                }
            }
            bloog();
        }
    }, [loading, user, username, setUsername, blogs, setBlogs])
    return <section>
        <h1 className="my_blogs">&lt; My Blogs &gt;</h1>
        <div className="blogs">
            {blogs && blogs.map((blog) => {
                return <Blog
                    key={blog._id}
                    title={blog.title.slice(0, 35) + "..."}
                    body={blog.body.slice(0, 250) + "..."}
                    author={blog.author}
                    date={blog.createdAt && blog.createdAt.slice(0, 10)}
                    category={blog.category}
                />
            })}
        </div>
    </section>
}