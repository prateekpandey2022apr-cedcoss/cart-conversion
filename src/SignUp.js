import React from "react";
import { Link } from "react-router-dom";

import { CartTotal } from "./Utils";

function Login(props) {
  return (
    <div className="checkout-container">
      <div className="container">
        <div className="">
          <div className="col-4 login">
            <h2>Sign Up</h2>
            <form action="/success">
              <div className="form-element">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>

              <div className="form-element">
                <input type="email" placeholder="email" />
              </div>

              <div className="form-element">
                <input type="text" placeholder="Password" />
              </div>

              <div className="form-element">
                <input type="submit" value="Sign Up" className="cart-btn" />
              </div>

              <div className="form-element">
                <Link to="/login">Already have an account? Login</Link>
              </div>
            </form>
          </div>
          <div className="col-2 order-summary">
            {/* <h4>Order Summary</h4>

            <hr style={{ margin: "2em 0" }} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
