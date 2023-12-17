import FooterBrowseBox from "./FooterBrowseBox";
// ICONS
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function FooterSocial() {
    return <div>
        <div className="footer_header">
            <p>Follow Us</p>
            <h1>Social</h1>
            <div className="footer_social">
                <a href="https://github.com/irfanshadikrishad" target="_blank" rel="noreferrer">{<FaTwitter />}</a>
                <a href="https://github.com/irfanshadikrishad" target="_blank" rel="noreferrer">{<FaInstagram />}</a>
                <a href="https://github.com/irfanshadikrishad" target="_blank" rel="noreferrer">{<FaLinkedinIn />}</a>
                <a href="https://github.com/irfanshadikrishad" target="_blank" rel="noreferrer">{<FaGithub />}</a>
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
}