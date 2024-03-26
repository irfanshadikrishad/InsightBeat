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
        popular.map((pop) => {
          return (
            <FooterArticle
              key={pop._id}
              category={pop.category}
              title={String(pop.title).slice(0, 40) + "..."}
              date={pop && String(pop.createdAt).slice(0, 10)}
              author={pop.author}
              id={pop._id}
            />
          );
        })}
    </div>
  );
}
