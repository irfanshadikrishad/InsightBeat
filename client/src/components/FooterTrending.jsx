import { useState, useEffect } from "react";
import FooterArticle from "./FooterArticle";

export default function FooterTrending() {
    const [trending, setTrending] = useState([]);

    const trend = async () => {
        const request = await fetch("https://insightbeat.up.railway.app/api/blog/trending",
            {
                method: "GET"
            })
        const response = await request.json();
        if (request.status === 200) {
            setTrending(response)
        } else {
            console.log(response.message);
        }
    }
    useEffect(() => {
        trend();
    }, [])
    return <div>
        <div className="footer_header">
            <p>most comments</p>
            <h1>Trending</h1>
        </div>
        {trending && trending.map((tren) => {
            return <FooterArticle
                key={tren._id}
                category={tren.category}
                title={String(tren.title).slice(0, 40) + "..."}
                author={tren.author}
                date={String(tren.createdAt).slice(0, 10)}
                id={tren._id}
            />
        })}
    </div>
}