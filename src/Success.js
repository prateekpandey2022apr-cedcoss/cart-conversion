import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import { CartTotal } from "./Utils";

function Success(props) {
  return (
    <div className="success-container">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h2>
              Success <i class="fa-solid fa-circle-check"></i>
            </h2>
            <p>Thanks for the order</p>
            <div className="form-element">
              <p>
                <Link to="/" className="cart-btn">
                  Back to Home
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
