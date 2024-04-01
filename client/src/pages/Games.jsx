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
            blogs.map(({ _id, title, body, createdAt, author, category }) => {
              return (
                <Blog
                  key={_id}
                  title={title.slice(0, 45) + "..."}
                  body={body.slice(0, 150) + "..."}
                  date={String(createdAt).slice(0, 10)}
                  author={author}
                  category={category}
                  id={_id}
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
