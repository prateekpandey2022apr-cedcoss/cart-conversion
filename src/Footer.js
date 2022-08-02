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
            <ul>
              <li>
                <a href="#/">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#/">
                  <i className="fa-brands fa-instagram-square"></i>
                </a>
              </li>
              <li>
                <a href="#/">
                  <i className="fa-brands fa-pinterest"></i>
                </a>
              </li>
              <li>
                <a href="#/">
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
