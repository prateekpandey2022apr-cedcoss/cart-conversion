import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import ProductList from "./ProductList";
import AddProductForm from "./AddProductForm";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Success from "./Success";

import Footer from "./Footer";

import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { inventory } from "./data";

import { useNavigate } from "react-router-dom";

function App() {
  const [products, setProducts] = useState(inventory);
  // const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [validation, setValidation] = useState("");
  const [success, setSuccess] = useState("");
  const [count, setCount] = useState(1);

  const [imgData, setImgData] = useState("");

  const [cart, setCart] = useState([]);

  const [query, setQuery] = useState("");
  const [isSearchSubmit, setIsSearchSubmit] = useState(false);

  const navigate = useNavigate();
  let location = useLocation();

  // useEffect(() => {
  //   localStorage.setItem("products", JSON.stringify(products));
  // }, [products]);

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);

  useEffect(() => {
    console.log(location);

    if (location.pathname === "/" && location.search === "") {
      setProducts(inventory);
      setIsSearchSubmit(false);
      setQuery("");
    }
  }, [location]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [cart]);

  function handleAddProductForm(event) {
    event.preventDefault();
    console.log("eee");

    setValidation("");
    setSuccess("");

    if (!product.name || !product.price || !product.quantity || !imgData) {
      console.log("one of the field is empty");
      setValidation("All fields are required");
      return;
    }

    // debugger;

    setProducts([...products, { ...product, id: count, image: imgData }]);
    setProduct({});
    setSuccess("Product successfully Added");
    setValidation("");
    setCount(count + 1);
    setImgData("");
  }

  function handleAddCartBtn(event) {
    event.preventDefault();
    console.log("cart");
    // debugger;

    const productId = event.target.getAttribute("data-id");

    //  find the product from inventory
    const _product = products.find((product) => product.id == productId);

    // check if the product exist in the cart
    const cartItem = cart.find((item) => item.id == productId);

    console.log(_product);

    if (cartItem) {
      // update quantity by 1
      setCart(
        cart.filter((item) => {
          if (item.id == productId) {
            item.quantity = item.quantity + 1;
            return item;
          }
          return item;
        })
      );
    } else {
      // add item to cart first time
      setCart([...cart, { ..._product, quantity: 1 }]);
    }
  }

  function handleQtyUpdate(event) {
    event.preventDefault();
    // debugger;
    console.log(event.target);

    if (event.currentTarget.classList.contains("inc")) {
      console.log(event.currentTarget.getAttribute("data-id"));
      const productId = event.currentTarget.getAttribute("data-id");
      console.log("incremnt");

      setCart(
        cart.map((cartItem) => {
          if (cartItem.id == productId) {
            cartItem.quantity += 1;
            return cartItem;
          }
          return cartItem;
        })
      );
    } else {
      console.log(event.currentTarget.getAttribute("data-id"));
      console.log("dec");

      const productId = event.currentTarget.getAttribute("data-id");

      setCart(
        cart.filter((cartItem) => {
          if (cartItem.id == productId) {
            if (cartItem.quantity != 1) {
              cartItem.quantity -= 1;
              return cartItem;
            } else {
              return false;
            }
          }
          return cartItem;
        })
      );
    }

    return event.target;
  }

  function handleImageUpload(event) {
    // debugger;
    console.log(event);
    console.log(event.target.files[0]);
    const file = event.target.files[0];

    if (!file.type.match("image.*")) {
      alert("Only Images are allowed");
      return;
    }

    event.target.value = "";

    const reader = new FileReader();
    reader.addEventListener("load", (event) => {
      debugger;
      console.log(event.target.result);
      setImgData(event.target.result);
    });
    reader.readAsDataURL(file);
  }

  function emptyCart(event) {
    console.log("empty cart");
    setCart([]);
  }

  function handleSearchSubmit(event) {
    event.preventDefault();
    console.log("@@");

    debugger;

    console.log(
      inventory.filter((item) => item.name.toLocaleLowerCase().includes(query))
    );

    setProducts(
      inventory.filter((item) => item.name.toLocaleLowerCase().includes(query))
    );

    setIsSearchSubmit(true);

    navigate(`?query=${query}`);
  }

  return (
    <>
      <Navbar
        query={query}
        setQuery={setQuery}
        cart={cart}
        handleSearchSubmit={handleSearchSubmit}
      />
      <Routes>
        <Route
          path="/"
          element={
            <ProductList
              query={query}
              products={products}
              inventory={inventory}
              handleAddCartBtn={handleAddCartBtn}
              isSearchSubmit={isSearchSubmit}
            />
          }
        ></Route>
        <Route
          path="/add"
          element={
            <AddProductForm
              product={product}
              setProduct={setProduct}
              handleAddProductForm={handleAddProductForm}
              validation={validation}
              success={success}
              handleImageUpload={handleImageUpload}
              imgData={imgData}
            />
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              handleQtyUpdate={handleQtyUpdate}
              emptyCart={emptyCart}
            />
          }
        ></Route>

        <Route
          path="/checkout"
          element={<Checkout cart={cart} emptyCart={emptyCart} />}
        ></Route>

        <Route
          path="/success"
          element={<Success cart={cart} emptyCart={emptyCart} />}
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
