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
            props.cart.map((item, idx) => {
              return (
                <div className="row" key={idx}>
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
                        // onClick={props.handleQtyUpdate}
                        onClick={(event) => {
                          if (item.quantity !== 1) {
                            props.handleQtyUpdate(event);
                          } else if (window.confirm("Are you sure")) {
                            props.handleQtyUpdate(event);
                          }
                        }}
                      >
                        <i className="fa-solid fa-circle-minus"></i>
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button
                        className="inc"
                        data-id={item.id}
                        onClick={props.handleQtyUpdate}
                      >
                        <i className="fa-solid fa-circle-plus"></i>
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
                      <i className="fa-solid fa-indian-rupee-sign"></i>
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
