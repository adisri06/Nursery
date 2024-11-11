import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faShoppingCart, faSeedling } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css"; // Ensure to import the CSS

const NavBar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav className="nav-bar">
      {/* Navigation buttons */}
      <button onClick={() => handleNavigation("/")}>
        <FontAwesomeIcon icon={faHome} /> Home
      </button>
      <button onClick={() => handleNavigation("/plantation")}>
        <FontAwesomeIcon icon={faSeedling} /> Plant Shopping
      </button>
      <button onClick={() => handleNavigation("/cart")}>
        <FontAwesomeIcon icon={faShoppingCart} /> Cart
      </button>
    </nav>
  );
};

export default NavBar;