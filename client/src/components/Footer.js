import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "../styles/Footer.css"

export const Footer = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();
  

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };

  return (
    <footer className="app-footer">
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="social-links">
        <a href="#" className="social-icon">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#" className="social-icon">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#" className="social-icon">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
      <div className="app-info">
        <p>&copy; {new Date().getFullYear()} Recipe App</p>
        <p>Contact us at: wefour1234@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
