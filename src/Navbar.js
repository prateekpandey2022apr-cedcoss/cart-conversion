import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="nav-container">
      <nav className="container">
        <div className="navbar">
          <div className="logo">
            <Link to="/">
              <svg
                className="pre-logo-svg"
                height="60px"
                width="60px"
                fill="#111"
                viewBox="0 0 69 32"
              >
                <path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z"></path>
              </svg>
            </Link>
          </div>
          <form className="search" onSubmit={props.handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search Here..."
              value={props.query}
              onChange={(event) => props.setQuery(event.target.value)}
            />
          </form>
          <div className="icons">
            <div>
              {/* <a href="#">
                <i className="fa-solid fa-user"></i>
              </a> */}

              <Link to="/signup" className="login-icon">
                <i class="fa-solid fa-user"></i>
              </Link>

              <Link to="/cart" className="cart-icon">
                <i className="fa-solid fa-cart-shopping"></i>{" "}
                <span className="cart-count">{props.cart.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
