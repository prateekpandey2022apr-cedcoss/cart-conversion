import React from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import SearchBar from "./SearchBar";

function ProductList(props) {
  return (
    <>
      <SearchBar />
      <div className="product-list-container">
        <nav className="container">
          <p>Showing 1-10 of 20 results</p>
          <div className="row">
            {props.products.length > 0 ? (
              <>
                {props.products.map((product, idx) => {
                  return (
                    <Product
                      key={idx}
                      details={product}
                      handleAddCartBtn={props.handleAddCartBtn}
                    />
                  );
                })}
              </>
            ) : (
              <p>
                There are no products in the inventory.{" "}
                <Link to="/add" className="add-product">
                  Add some now
                </Link>
              </p>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}

export default ProductList;
