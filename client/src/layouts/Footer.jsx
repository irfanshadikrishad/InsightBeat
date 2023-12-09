import FooterArticle from "../components/FooterArticle";
import FooterBrowseBox from "../components/FooterBrowseBox";
// ICONS
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return <footer>
        <section className="container footer">
            <div>
                <div className="footer_header">
                    <p>popular posts</p>
                    <h1>Popular</h1>
                </div>
                <FooterArticle />
                <FooterArticle />
                <FooterArticle />
                <FooterArticle />
            </div>
            <div>
                <div className="footer_header">
                    <p>hot topics</p>
                    <h1>Editor&apos;s pic</h1>
                </div>
                <FooterArticle />
                <FooterArticle />
                <FooterArticle />
                <FooterArticle />
            </div>
            <div>
                <div className="footer_header">
                    <p>most comments</p>
                    <h1>Trending</h1>
                </div>
                <FooterArticle />
                <FooterArticle />
                <FooterArticle />
                <FooterArticle />
            </div>
            <div>
                <div className="footer_header">
                    <p>Follow Us</p>
                    <h1>Social</h1>
                    <div className="footer_social">
                        <a href="/" target="_blank" rel="noreferrer">{<FaTwitter />}</a>
                        <a href="/" target="_blank" rel="noreferrer">{<FaInstagram />}</a>
                        <a href="/" target="_blank" rel="noreferrer">{<FaLinkedinIn />}</a>
                        <a href="/" target="_blank" rel="noreferrer">{<FaGithub />}</a>
                    </div>
                </div>
                <div>
                    <h1>Browse</h1>
                    <FooterBrowseBox tag="Travel" />
                    <FooterBrowseBox tag="Politics" />
                    <FooterBrowseBox tag="Fashion" />
                    <FooterBrowseBox tag="Beauty" />
                    <FooterBrowseBox tag="Lifestyle" />
                </div>
            </div>
        </section>
        <section className="copyright container">
            <p>All right reserved © &nbsp;
                <a href="https://github.com/irfanshadikrishad">
                    Irfan Shadik Rishad
                </a>
            </p>
        </section>
    </footer>
}