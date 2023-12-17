import FooterPopular from "../components/FooterPopular";
import FooterHot from "../components/FooterHot";
import FooterTrending from "../components/FooterTrending";
import FooterSocial from "../components/FooterSocial";

export default function Footer() {
    return <footer>
        <section className="container footer">
            <FooterPopular />
            <FooterHot />
            <FooterTrending />
            <FooterSocial />
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