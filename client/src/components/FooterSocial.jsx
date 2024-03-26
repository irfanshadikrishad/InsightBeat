import { useEffect, useState } from "react";
import FooterBrowseBox from "./FooterBrowseBox";
import { useAuth } from "../store/auth";
// ICONS
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function FooterSocial() {
  const { SERVER_URI } = useAuth();
  const [count, setCount] = useState([]);

  const GetCount = async () => {
    const request = await fetch(`${SERVER_URI}/api/blog/count`, {
      method: "GET",
    });
    const response = await request.json();
    if (request.status === 200) {
      setCount(response);
    }
  };
  useEffect(() => {
    GetCount();
  }, []);
  return (
    <div>
      <div className="footer_header">
        <p>Follow Us</p>
        <h1>Social</h1>
        <div className="footer_social">
          <a
            href="https://github.com/irfanshadikrishad"
            target="_blank"
            rel="noreferrer"
          >
            {<FaTwitter />}
          </a>
          <a
            href="https://github.com/irfanshadikrishad"
            target="_blank"
            rel="noreferrer"
          >
            {<FaInstagram />}
          </a>
          <a
            href="https://github.com/irfanshadikrishad"
            target="_blank"
            rel="noreferrer"
          >
            {<FaLinkedinIn />}
          </a>
          <a
            href="https://github.com/irfanshadikrishad"
            target="_blank"
            rel="noreferrer"
          >
            {<FaGithub />}
          </a>
        </div>
      </div>
      <div>
        <h1 className="footerHeader">Browse</h1>
        {count &&
          count.map((co, i) => {
            return (
              <FooterBrowseBox
                key={i}
                category={co.category}
                count={co.count}
              />
            );
          })}
      </div>
    </div>
  );
}
