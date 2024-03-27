import { useEffect, useState } from "react";
import TrendingBox from "./TrendingBox";
import { useAuth } from "../store/auth";

export default function Trending() {
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
    <section className="trending_boxes">
      {trending &&
        trending.map((tren) => {
          return (
            <TrendingBox
              key={tren && tren._id}
              category={tren && tren.category}
              title={tren && tren.title.slice(0, 50) + "..."}
              author={tren && tren.author}
              date={tren && String(tren.createdAt).slice(0, 10)}
              id={tren && tren._id}
            />
          );
        })}
    </section>
  );
}
