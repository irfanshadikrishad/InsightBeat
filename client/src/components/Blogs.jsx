import { useEffect, useState } from "react";
import Blog from "./Blog";
import { useAuth } from "../store/auth";

export default function Blogs() {
  const { SERVER_URI } = useAuth();
  const [blogs, setBlogs] = useState([]);

  const blogFetch = async () => {
    const request = await fetch(`${SERVER_URI}/api/blog/blogs`, {
      method: "GET",
    });
    const response = await request.json();
    if (request.status === 200) {
      setBlogs(response);
    } else {
      console.log(response);
    }
  };
  useEffect(() => {
    blogFetch();
  }, []);
  return (
    <section className="blogs">
      {blogs &&
        blogs.map((blo) => {
          return (
            <Blog
              key={blo._id}
              category={blo.category}
              author={blo.author}
              date={blo && String(blo.createdAt).slice(0, 10)}
              title={String(blo.title).slice(0, 33) + "..."}
              body={String(blo.body).slice(0, 150) + "..."}
              id={blo._id}
            />
          );
        })}
    </section>
  );
}
