import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {

  const navStyle = {
    color: "gold"
  };

  return (
    <nav>
      <ul className = "navLinks">
        <Link style = {navStyle} to = "/pizza">
          <li>Pizza</li>
        </Link>
        <Link style = {navStyle} to = "/">
          <li>Home</li>
        </Link>
      </ul>
    </nav>
  );
};
  
  export default Nav;