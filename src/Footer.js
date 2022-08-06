import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="footer-container">
      <nav className="container">
        <div className="row">
          <div className="footer-main">
            <h4>Footer content</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="footer-links">
            <div>
              <a href="#/">
                <i className="fa-brands fa-facebook"></i>
              </a>

              <a href="#/">
                <i className="fa-brands fa-instagram-square"></i>
              </a>

              <a href="#/">
                <i className="fa-brands fa-pinterest"></i>
              </a>

              <a href="#/">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
