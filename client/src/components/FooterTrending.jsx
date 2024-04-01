import { useState, useEffect } from "react";
import FooterArticle from "./FooterArticle";
import { useAuth } from "../store/auth";

export default function FooterTrending() {
  const { SERVER_URI } = useAuth();
  const [trending, setTrending] = useState([]);

  const trend = async () => {
    const request = await fetch(`${SERVER_URI}/api/blog/trending`, {
      method: "GET",
    });
    const response = await request.json();
    if (request.status === 200) {
      setTrending(response);
    } else {
      console.log(response.message);
    }
  };

  useEffect(() => {
    trend();
  }, []);
  return (
    <div>
      <div className="footer_header">
        <p>most comments</p>
        <h1>Trending</h1>
      </div>
      {trending &&
        trending.map(({ _id, category, title, author, createdAt }) => {
          return (
            <FooterArticle
              key={_id}
              category={category}
              title={String(title).slice(0, 40) + "..."}
              author={author}
              date={String(createdAt).slice(0, 10)}
              id={_id}
            />
          );
        })}
    </div>
  );
}
