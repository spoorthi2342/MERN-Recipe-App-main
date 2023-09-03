import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPlus, faBookmark, faSignInAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };

  return (
    <div className="navbar">
      <Link to="/" className="nav-link">
        <FontAwesomeIcon icon={faHome} className="nav-icon" />
        Home
      </Link>
      <Link to="/create-recipe" className="nav-link">
        <FontAwesomeIcon icon={faPlus} className="nav-icon" />
        Create Recipe
      </Link>
      <Link to="/saved-recipes" className="nav-link">
        <FontAwesomeIcon icon={faBookmark} className="nav-icon" />
        Saved Recipes
      </Link>
      {!cookies.access_token ? (
        <Link to="/auth" className="nav-link">
          <FontAwesomeIcon icon={faSignInAlt} className="nav-icon" />
          Login/Register
        </Link>
      ) : (
        <button onClick={logout} className="logout-button">
          <FontAwesomeIcon icon={faSignOutAlt} className="nav-icon" />
          Logout
        </button>
      )}
    </div>
  );
};
