import { NavLink } from "react-router-dom";
import randomColor from "random-color";
import { memo } from "react";

const FooterArticle = memo(function FooterArticle({
  category,
  title,
  author,
  date,
  id,
}) {
  const color = randomColor();

  return (
    <article className="footer_article">
      <NavLink
        to="/"
        className="footer_cat"
        style={{ backgroundColor: color.hexString() }}
      >
        {category && category}
      </NavLink>
      <a href={`/blog/${id}`}>
        <h1 className="footer_article_header">{title}</h1>
      </a>
      <div className="footer_author">
        <p>
          {author && author.name}
          <span className="footer_article_date">• {date}</span>
        </p>
      </div>
    </article>
  );
});

export default FooterArticle;
