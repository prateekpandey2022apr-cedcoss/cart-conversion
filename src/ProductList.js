import React from "react";
import { Link } from "react-router-dom";
import { inventory } from "./data";
import Product from "./Product";
import SearchBar from "./SearchBar";
import { CartCarousel } from "./CartCarousel";

function ProductList(props) {
  return (
    <>
      {/* <hr /> */}
      {/* <CartCarousel /> */}

      {props.isSearchSubmit ? (
        <>
          <div className="result-container">
            <div className="container">
              <div className="row">
                <div className="col-4">
                  <p>{props.products.length} results found.</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="carousel-container"></div>

          <div className="callout-container">
            <div className="container">
              <div className="row">
                <div className="col-4">
                  <h2>TOP RATED PRODUCTS </h2>
                  <p>
                    Only the top rated products added recently in our catalog
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="filter-container">
        <div className="container">
          <div className="row filter">
            <div className="col-4">
              <form>
                <select
                  value={props.priceSort}
                  onChange={(event) => {
                    props.setPriceSort(() => event.target.value);
                    props.handleSearchSubmit(event);
                  }}
                >
                  <option value="">Price Filter (Default)</option>
                  <option value="asc">Incresing</option>
                  <option value="desc">Decreasing</option>
                </select>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="product-list-container">
        <nav className="container">
          {/* <p>Showing 1-10 of 20 results</p> */}
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
              <></>
            )}
          </div>
        </nav>
      </div>

      <div className="services-container">
        <div className="container">
          <div className="row">
            <div className="col-1">
              <p>
                <i className="fa-solid fa-truck"></i>
              </p>
              <p>Free shipping on all orders</p>
            </div>

            <div className="col-1">
              <p>
                <i className="fa-solid fa-store"></i>
              </p>
              <p>Active stores near you</p>
            </div>

            <div className="col-1">
              <p>
                <i className="fa-solid fa-arrow-rotate-left"></i>
              </p>
              <p>No Questions asked returns</p>
            </div>

            <div className="col-1">
              <p>
                <i className="fa-solid fa-handshake-angle"></i>
              </p>
              <p>Data Club benefits</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
