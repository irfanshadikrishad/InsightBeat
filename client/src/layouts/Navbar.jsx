import { NavLink } from "react-router-dom";
// ICONS
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { HiMiniBars3 } from "react-icons/hi2";

export default function Navbar() {
  return (
    <nav>
      <div className="navbar_border">
        <div className="container navbar">
          <div className="navbar_social">
            <a target="_blank" href="https://github.com/irfanshadikrishad" rel="noreferrer">{<FaTwitter />}</a>
            <a target="_blank" href="https://github.com/irfanshadikrishad" rel="noreferrer">{<FaFacebookF />}</a>
            <a target="_blank" href="https://github.com/irfanshadikrishad" rel="noreferrer">{<FaInstagram />}</a>
            <a target="_blank" href="https://github.com/irfanshadikrishad" rel="noreferrer">{<FaGithub />}</a>
          </div>
          <h1 className="navbar_title">001</h1>
          <div className="navbar_lr">
            <NavLink className="navbar_l" to="/login">
              Login
            </NavLink>
            <NavLink className="navbar_r" to="/registration">
              Become an Author
            </NavLink>
          </div>
        </div>
      </div>
      {/* breadcrumb */}
      <div className="navbar_border">
        <div className="navbar_breadcrumb container">
          <div className="breadcrumb_button">
            <button>{<HiMiniBars3 />}</button>
          </div>
          <div className="breadcrumb_ox">
            <a href="/fashion">
              <p className="breadcrumb_oxHead">Fashion</p>
              <p className="breadcrumb_oxDesc">& Beauty</p>
            </a>
            <a href="/lifestyle">
              <p className="breadcrumb_oxHead">Lifestyle</p>
              <p className="breadcrumb_oxDesc">Work & Play</p>
            </a>
            <a href="/travel">
              <p className="breadcrumb_oxHead">Travel</p>
              <p className="breadcrumb_oxDesc">in style</p>
            </a>
            <a href="/beauty">
              <p className="breadcrumb_oxHead">Beauty</p>
              <p className="breadcrumb_oxDesc">tips & trics</p>
            </a>
            <a href="/politics">
              <p className="breadcrumb_oxHead">Politics</p>
              <p className="breadcrumb_oxDesc">whats happening</p>
            </a>
          </div>
          <div className="breadcrumb_button">
            <button>{<IoSearch />}</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
