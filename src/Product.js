import React from "react";

function Product(props) {
  return (
    <div className="product">
      <h1>{props.details.name}</h1>
      <p>
        {/* <img src="http://via.placeholder.com/230" /> */}
        <img src={props.details.image} width={230} />
      </p>
      {/* <p>Camera TZ85 optical</p> */}
      <p> &#8377;{props.details.price}</p>

      <button
        data-id={props.details.id}
        className="cart-btn"
        onClick={props.handleAddCartBtn}
      >
        ADD TO CART
      </button>
    </div>
  );
}

export default Product;
