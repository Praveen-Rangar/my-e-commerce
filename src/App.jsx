import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductListPage from "./ProductListPage";
import ProductDetails from "./ProductDetails";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NotFound from "./NotFound";
import { useState } from "react";
import Cart from "./Cart";
import Announce from "./Announce";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import ForgotPassword from "./ForgotPassword";

function App() {
  const savedDataString = localStorage.getItem("my-Cart") || "{}";
  console.log("savedadatastring is", savedDataString);
  const savedData = JSON.parse(savedDataString);

  const [cart, setCart] = useState(savedData);

  function handleAddToCart(productId, count) {
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + count };
    setCart(newCart);
    const cartString = JSON.stringify(newCart);
    localStorage.setItem("my-Cart", cartString);
  }

  const totalCount = Object.keys(cart).reduce(function (previous, current) {
    return previous + cart[current];
  }, 0);

  return (
    <>
      <Announce />
      <div className="flex flex-col h-screen overflow-scroll bg-gray-200 font-body">
        <Navbar productCount={totalCount} />

        <div className="flex items-center justify-center grow ">
          <Routes>
            <Route index element={<ProductListPage />}>
              {" "}
            </Route>
            <Route
              path="/products/:id/"
              element={<ProductDetails onAddToCart={handleAddToCart} />}
            >
              {" "}
            </Route>
            <Route path="*" element={<NotFound />}>
              {" "}
            </Route>
            <Route path="/Cart" element={<Cart cart={cart} totalcoun />}>
              {" "}
            </Route>
            <Route path="/LoginPage" element={<LoginPage />}></Route>
            <Route path="/SignUpPage" element={<SignUpPage />}></Route>
            <Route path="/ForgotPassword" element={<ForgotPassword />}></Route>
          </Routes>{" "}
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
