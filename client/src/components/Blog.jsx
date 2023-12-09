import { NavLink } from "react-router-dom";

export default function Blog() {
    return <article className="blog">
        <NavLink to="/" className="blog_cat">travel</NavLink>

        <h1 className="blog_title">Lorem ipsum, dolor sit amet consectetur adipisicing.</h1>

        <div className="author_desc">
            <img className="feature_author_avatar"
                src="https://i.pinimg.com/736x/eb/3a/04/eb3a047cef0f58a921923788dc613997.jpg"
                alt="avatar" />
            <div>
                <p><span className="dim_i">
                    by </span><a>Grim Winston</a></p>
                <p className="feature_date">March 28, 2023</p>
            </div>
        </div>
        <p className="blog_body">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste,
            vel hic quisquam sunt necessitatibus accusantium distinctio placeat quae asperiores quo!
        </p>
        <div className="blog_footer">
            <hr />
            <div className="blog_continue">
                <NavLink to="/">
                    Continue Reading &gt;
                </NavLink>
            </div>
        </div>
    </article>
}