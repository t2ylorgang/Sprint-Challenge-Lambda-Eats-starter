import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {

  const style = {
    color: "green"
  };

  return (
    <nav>
      <ul className = "navLinks">
        <Link to = "/pizza">
          <li>Pizza</li>
        </Link>
      </ul>
    </nav>
  );
};
  
  export default Nav;