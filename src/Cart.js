import React from "react";

import { CartTotal } from "./Utils";

function Cart(props) {
  return (
    <div className="cart-container">
      <div className="container">
        <div className="cart-items">
          {props.cart.length > 0 ? (
            <>
              <table>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                  </tr>

                  {props.cart.map((cartItem, idx) => {
                    return (
                      <tr key={idx}>
                        <td>{cartItem.name}</td>
                        <td> &#8377;{cartItem.price}</td>
                        <td>
                          <span className="increment">
                            <a
                              href="#/"
                              className="inc"
                              data-id={cartItem.id}
                              onClick={props.handleQtyUpdate}
                            >
                              <i className="fa-solid fa-plus"></i>
                            </a>
                          </span>
                          <span>{cartItem.quantity}</span>
                          <span className="decrement">
                            <a
                              href="#/"
                              className="dec"
                              data-id={cartItem.id}
                              onClick={props.handleQtyUpdate}
                            >
                              <i className="fa-solid fa-minus"></i>
                            </a>
                          </span>
                        </td>
                        <td> &#8377; {cartItem.price * cartItem.quantity}</td>
                      </tr>
                    );
                  })}

                  <tr>
                    <td colSpan="3">Total</td>
                    <td>&#8377; {CartTotal(props.cart)}</td>
                  </tr>
                </tbody>
              </table>
              <p>
                <button className="btn" onClick={props.emptyCart}>
                  Empty Cart
                </button>
              </p>
            </>
          ) : (
            <p className="">Cart Empty &#128532;</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
