import { memo } from "react";
import randomColor from "random-color";

const FooterBrowseBox = memo(function FooterBrowseBox({ category, count }) {
  const color = randomColor();

  return (
    <div className="footer_browse_main">
      <div className="footer_browse">
        <a href={`/${category}`}>{category}</a>
        <p
          className="footer_browse_count"
          style={{ backgroundColor: color.hexString() }}
        >
          {count} blogs
        </p>
      </div>
      <hr />
    </div>
  );
});

export default FooterBrowseBox;
