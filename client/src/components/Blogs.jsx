import { useEffect, useState } from "react";
import Blog from "./Blog";
import { HiMiniArrowUturnLeft } from "react-icons/hi2";
import { useAuth } from "../store/auth";

export default function Blogs() {
  const { SERVER_URI } = useAuth();
  const [blogs, setBlogs] = useState([]);
  const [limit, setLimit] = useState(6);

  const blogFetch = async (blog_limit) => {
    const request = await fetch(`${SERVER_URI}/api/blog/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ blog_limit: limit }),
    });
    const response = await request.json();

    if (request.status === 200) {
      setBlogs(response);
    } else {
      console.log(response);
    }
  };
  useEffect(() => {
    blogFetch(limit);
  }, [limit]);
  return (
    <section>
      <section className="blogs">
        {blogs &&
          blogs.map(({ _id, category, author, createdAt, title, body }) => {
            return (
              <Blog
                key={_id}
                category={category}
                author={author}
                date={String(createdAt).slice(0, 10)}
                title={String(title).slice(0, 33) + "..."}
                body={String(body).slice(0, 150) + "..."}
                id={_id}
              />
            );
          })}
      </section>
      <div className="older_blogs">
        <button
          onClick={() => {
            setLimit((prev) => prev + 6);
          }}
        >
          Older Blogs {<HiMiniArrowUturnLeft />}
        </button>
      </div>
    </section>
  );
}
