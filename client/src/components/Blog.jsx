// import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Blog({ category, title, body, author, date, id, avatar }) {
    // const [writer, setWriter] = useState({});

    // const GetWriter = async () => {
    //     const request = await fetch("http://localhost:3000/api/blog/blogauthor", {
    //         method: "POST",
    //         headers: {
    //             Accept: "application/json",
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(author)
    //     })
    //     const response = await request.json();
    //     console.log(response);
    // }
    // useEffect(() => {
    //     GetWriter();
    // }, [author])
    return <article className="blog">
        <NavLink to={`/${category}`} className="blog_cat">{category}</NavLink>

        <NavLink to={`/blog/${id}`} className="blogTitleLink">
            <h1 className="blog_title">{title}</h1>
        </NavLink>

        <div className="author_desc">
            <img className="feature_author_avatar"
                src={avatar ? avatar : "https://i.pinimg.com/564x/ea/06/ff/ea06ff188085acfab02f046996afbe0e.jpg"}
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
    </article>
}