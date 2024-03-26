import { useEffect, useState } from "react";
import Blog from "../components/Blog";
import { useAuth } from "../store/auth";

export default function Games() {
  const { SERVER_URI } = useAuth();
  const [blogs, setBlogs] = useState([]);

  const GetGames = async () => {
    const request = await fetch(`${SERVER_URI}/api/blog/games`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const response = await request.json();
    if (request.status === 200) {
      setBlogs(response);
    } else {
      console.log(response);
    }
  };

  useEffect(() => {
    GetGames();
  }, []);
  return (
    <>
      <section className="container individual">
        <h1>Games &gt;&gt;</h1>
        <div className="individuals">
          {blogs.length > 0 ? (
            blogs.map((blog) => {
              return (
                <Blog
                  key={blog._id}
                  title={blog.title.slice(0, 45) + "..."}
                  body={blog.body.slice(0, 150) + "..."}
                  date={String(blog.createdAt).slice(0, 10)}
                  author={blog.author}
                  category={blog.category}
                  id={blog._id}
                />
              );
            })
          ) : (
            <p>No blogs found in this category</p>
          )}
        </div>
      </section>
    </>
  );
}
