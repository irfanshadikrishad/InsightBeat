import { useState, useEffect } from "react";
import FooterArticle from "./FooterArticle";
import { useAuth } from "../store/auth";

export default function FooterPopular() {
  const { SERVER_URI } = useAuth();
  const [popular, setPopular] = useState([]);

  const GetPopular = async () => {
    const request = await fetch(`${SERVER_URI}/api/blog/popular`, {
      method: "GET",
    });
    const response = await request.json();
    if (request.status === 200) {
      setPopular(response);
    } else {
      console.log(response.message);
    }
  };
  useEffect(() => {
    GetPopular();
  }, []);
  return (
    <div>
      <div className="footer_header">
        <p>popular posts</p>
        <h1>Popular</h1>
      </div>
      {popular &&
        popular.map(({ _id, category, title, createdAt, author }) => {
          return (
            <FooterArticle
              key={_id}
              category={category}
              title={String(title).slice(0, 40) + "..."}
              date={String(createdAt).slice(0, 10)}
              author={author}
              id={_id}
            />
          );
        })}
    </div>
  );
}
