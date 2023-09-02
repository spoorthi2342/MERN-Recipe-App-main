// Footer.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
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
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">Twitter</a>
      </div>
      <div className="app-info">
        <p>&copy; {new Date().getFullYear()} Recipe App</p>
        <p>Contact us at: wefour1234@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
