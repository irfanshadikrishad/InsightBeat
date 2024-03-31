import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

export default function Blog({ category, title, body, author, date, id }) {
  const { defaultAvatar } = useAuth();

  return (
    <article className="blog">
      <NavLink to={`/${category}`} className="blog_cat">
        {category}
      </NavLink>

      <NavLink to={`/blog/${id}`} className="blogTitleLink">
        <h1 className="blog_title">{title}</h1>
      </NavLink>

      <div className="author_desc">
        <img
          className="feature_author_avatar"
          src={author && author.avatar ? author.avatar : defaultAvatar}
          alt="avatar"
        />
        <div>
          <p>
            <span className="dim_i">by </span>
            <a>{author && author.name && author.name}</a>
          </p>
          <p className="feature_date">{date}</p>
        </div>
      </div>
      <p className="blog_body">{body}</p>
    </article>
  );
}
