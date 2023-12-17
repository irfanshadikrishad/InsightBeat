import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Blog({ category, title, body, author, date, id }) {
    return <article className="blog">
        <NavLink to={`/${category}`} className="blog_cat">{category}</NavLink>

        <h1 className="blog_title">{title}</h1>

        <div className="author_desc">
            <img className="feature_author_avatar"
                src="https://i.pinimg.com/564x/ea/06/ff/ea06ff188085acfab02f046996afbe0e.jpg"
                alt="avatar" />
            <div>
                <p><span className="dim_i">
                    by </span><a>{author}</a></p>
                <p className="feature_date">{date}</p>
            </div>
        </div>
        <p className="blog_body">
            {body}
        </p>
        <div className="blog_footer">
            <hr />
            <div className="blog_continue">
                <NavLink to={`/blog/${id}`}>
                    Continue Reading &gt;
                </NavLink>
            </div>
        </div>
    </article>
}