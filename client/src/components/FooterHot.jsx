import FooterArticle from "./FooterArticle"

export default function FooterHot() {
    return <div>
        <div className="footer_header">
            <p>hot topics</p>
            <h1>Editor&apos;s pick</h1>
        </div>
        <FooterArticle />
        <FooterArticle />
        <FooterArticle />
        <FooterArticle />
    </div>
}