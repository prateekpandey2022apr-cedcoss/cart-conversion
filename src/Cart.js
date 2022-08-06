import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import { CartTotal } from "./Utils";

function Cart(props) {
  return (
    <>
      <div className="cart-container">
        <div className="container">
          {/* <div className="cart-items"> */}
          {props.cart.length > 0 ? (
            props.cart.map((item) => {
              return (
                <div className="row">
                  <div className="col-4 cart-item">
                    <div className="item-img">
                      <img
                        alt={item.name}
                        src={item.image}
                        style={{ backgroundColor: item.bgColor }}
                      />
                    </div>

                    <div className="item-desc">
                      <h3>{item.name}</h3>
                      <p>&#8377; {item.price.toFixed(2)}</p>
                    </div>

                    <div className="item-btn">
                      <button
                        className="dec"
                        data-id={item.id}
                        onClick={props.handleQtyUpdate}
                      >
                        <i class="fa-solid fa-circle-minus"></i>
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button
                        className="inc"
                        data-id={item.id}
                        onClick={props.handleQtyUpdate}
                      >
                        <i class="fa-solid fa-circle-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="row">
              <div className="col-4">
                <p className="">Cart Empty &#128532;</p>
              </div>
            </div>
          )}

          {/* {props.cart.length > 0 ? (
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
          )} */}
          {/* </div> */}
          {props.cart.length > 0 && (
            <>
              <div className="row subtotal">
                <div className="col-4">
                  <p>Subtotal: &#8377; {CartTotal(props.cart).toFixed(2)}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {props.cart.length > 0 && (
        <>
          <div>
            <div className="btn-container">
              <div className="row proceed-checkout">
                <div className="col-4">
                  <p>
                    <Link to="/checkout" className="cart-btn">
                      Proceed to Checkout{" "}
                      <i class="fa-solid fa-indian-rupee-sign"></i>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Cart;
