import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="nav-container">
      <nav className="container">
        <ul>
          <li>
            <a href="#" className="hamburger">
              &#9776;
            </a>
          </li>
          <li>
            <Link to="/">E-commerce</Link>
          </li>
          <li className="icons">
            <ul>
              <li>
                <a href="#">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-solid fa-user"></i>
                </a>
              </li>
              <li>
                <Link to="/cart" className="cart-icon">
                  <i className="fa-solid fa-cart-shopping"></i>{" "}
                  <span className="cart-count">{props.cart.length}</span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
