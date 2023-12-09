import randomColor from "random-color";

// eslint-disable-next-line react/prop-types
export default function FooterBrowseBox({ tag }) {
    const color = randomColor();
    return <>
        <div className="footer_browse_main">
            <div className="footer_browse">
                <a href="/">{tag}</a>
                <p className="footer_browse_count"
                    style={{ backgroundColor: color.hexString() }}>
                    15 blogs
                </p>
            </div>
            <hr />
        </div>
    </>
}