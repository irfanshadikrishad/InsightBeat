import { NavLink } from "react-router-dom";
import randomColor from "random-color";

// eslint-disable-next-line react/prop-types
export default function FooterArticle({ category, title, author, date, id }) {
    const color = randomColor();
    return <>
        <article className="footer_article">
            <NavLink to="/" className="footer_cat" style={{ backgroundColor: color.hexString() }}>
                {category}
            </NavLink>
            <a href={`/blog/${id}`}>
                <h1 className="footer_article_header">
                    {title}
                </h1>
            </a>
            <div className="footer_author">
                <p>{author}
                    <span className="footer_article_date">• {date}
                    </span>
                </p>
            </div>
        </article>
    </>
}