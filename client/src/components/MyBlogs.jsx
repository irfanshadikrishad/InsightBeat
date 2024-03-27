import Blog from "./Blog";
import { useAuth } from "../store/auth";
import { useEffect, useState } from "react";

export default function MyBlogs() {
  const { user, loading, SERVER_URI } = useAuth();
  const [username, setUsername] = useState(null);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    if (!loading && user) {
      const bloog = async () => {
        setUsername(user.username);
        const request = await fetch(`${SERVER_URI}/api/blog/user`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: user._id }),
        });
        const response = await request.json();

        if (request.status === 200) {
          setBlogs(response);
        } else {
          console.log(response);
        }
      };
      bloog();
    }
  }, [loading, user, username, setUsername, setBlogs]);
  return (
    <section>
      <h1 className="my_blogs profileHeader">&lt; My Blogs &gt;</h1>
      <div className="blogs">
        {blogs &&
          blogs.map((blog) => {
            return (
              <Blog
                key={blog._id}
                title={blog.title.slice(0, 35) + "..."}
                body={blog.body.slice(0, 250) + "..."}
                author={blog.author}
                date={blog.createdAt && blog.createdAt.slice(0, 10)}
                category={blog.category}
                id={blog._id}
                avatar={blog.author && blog.author.avatar}
              />
            );
          })}
      </div>
    </section>
  );
}
