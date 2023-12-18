import { NavLink } from "react-router-dom";
import randomColor from "random-color";

// eslint-disable-next-line react/prop-types
export default function TrendingBox({ category, title, author, date, id }) {
    const color = randomColor();
    return <>
        <div className="trending_box">
            <NavLink to={`/${category}`} className="trending_cat" style={{ backgroundColor: color.hexString() }}>{category}</NavLink>
            <a className="trendingTitle" href={`/blog/${id}`}><h3>{title}</h3></a>
            <div className="trending_timeline">
                <p>by <a>{author}</a> • {date}</p>
            </div>
        </div>
    </>
}