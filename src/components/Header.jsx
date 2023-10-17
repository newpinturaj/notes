import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="navbar">
          <h1>Notes</h1>
          <ul className="navbar-items">
            <li className="item1">
              <a href="#">Home</a>
            </li>
            <li className="item2">
              <a href="#">Login</a>
            </li>
            <li className="item3">
              <a href="#">Register</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
