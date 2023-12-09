import { NavLink } from "react-router-dom";
import randomColor from "random-color";

export default function FooterArticle() {
    const color = randomColor();
    return <>
        <article className="footer_article">
            <NavLink to="/" className="footer_cat" style={{ backgroundColor: color.hexString() }}>
                travel
            </NavLink>
            <h1 className="footer_article_header">
                Lorem ipsum dolor sit amet consectetur.
            </h1>
            <div className="footer_author">
                <p>Mimiko Asashi
                    <span className="footer_article_date">- October 28, 2023
                    </span>
                </p>
            </div>
        </article>
    </>
}