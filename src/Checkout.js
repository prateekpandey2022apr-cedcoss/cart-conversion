import React from "react";

import { CartTotal } from "./Utils";

function Checkout(props) {
  return (
    <div className="checkout-container">
      <div className="container">
        <div className="row">
          <div className="col-2 address">
            <h2>Billing Details</h2>
            <form action="/success">
              <div className="form-element">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>

              <div className="form-element">
                <input type="text" placeholder="Street Address" />
              </div>

              <div className="form-element">
                <input type="text" placeholder="Appartment/Suite #" />
              </div>

              <div className="form-element">
                <input type="text" placeholder="State" />
                <input type="text" placeholder="Zip" />
              </div>

              <div className="form-element">
                <input type="submit" value="CHECKOUT" className="cart-btn" />
              </div>
            </form>
          </div>
          <div className="col-2 order-summary">
            <h4>Order Summary</h4>

            {/* <ul> */}
            {props.cart.map((item) => {
              return (
                <div className="item">
                  <div>
                    {item.name} x {item.quantity}
                  </div>
                  <div>
                    &#8377;
                    {(item.quantity * item.price).toFixed(2)}
                  </div>
                </div>
              );
            })}
            <hr style={{ margin: "2em 0" }} />
            <div className="item">
              <div>Total Amount:</div>
              <div>&#8377; {CartTotal(props.cart).toFixed(2)}</div>
            </div>
            {/* </ul> */}

            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p> */}
          </div>
        </div>
        {/* {props.cart.length > 0 && (
          <>
            <div className="row subtotal">
              <div className="col-2">
                <p>Subtotal</p>
              </div>
              <div className="col-2">
                <p>&#8377; {CartTotal(props.cart).toFixed(2)}</p>
              </div>
            </div>

            <div className="row proceed-checkout">
              <div className="col-2">
                <button className="cart-btn">Proceed to Checkout</button>
              </div>
            </div>
          </>
        )} */}
      </div>
    </div>
  );
}

export default Checkout;
