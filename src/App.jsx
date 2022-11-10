import React, { createContext } from "react";
import { Routes, Route } from "react-router-dom";
import ProductListPage from "./ProductListPage";
import ProductDetails from "./ProductDetails";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NotFound from "./NotFound";
import { useState } from "react";
import Cart from "./Cart";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import ForgotPassword from "./ForgotPassword";
import MobileMenu from "./MobileMenu";
import { useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import AuthRoute from "./AuthRoute";
import UserRoute from "./UserRoute";
import Alert from "./Alert";
import { AlertContext, userContext } from "./Contexts";

function App() {
  const savedDataString = localStorage.getItem("my-Cart") || "{}";
  const savedData = JSON.parse(savedDataString);

  const [cart, setCart] = useState(savedData);
  const [user, setUser] = useState();
  const [alert, setAlert] = useState();

  const removeAlert = () => {
    setAlert(undefined);
  };

  const [loading, setLoading] = useState(true);

  console.log("user", user);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      axios
        .get("https://myeasykart.codeyogi.io/me", {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          setUser(response.data);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const tokenSignup = localStorage.getItem("tokenSignup");

  useEffect(() => {
    if (tokenSignup) {
      axios
        .get("https://myeasykart.codeyogi.io/me", {
          headers: {
            Authorization: tokenSignup,
          },
        })
        .then((response) => {
          setUser(response.data);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  function handleAddToCart(productId, count) {
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + count };

    updateCart(newCart);
  }

  function updateCart(newCart) {
    setCart(newCart);
    const cartString = JSON.stringify(newCart);
    localStorage.setItem("my-Cart", cartString);
  }

  const totalCount = Object.keys(cart).reduce(function (previous, current) {
    return previous + cart[current];
  }, 0);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <userContext.Provider value={{ user, setUser }}>
        <AlertContext.Provider value={{ alert, setAlert, removeAlert }}>
          <Alert />
          <div className="flex flex-col h-screen overflow-scroll bg-gray-200 font-body">
            <Navbar productCount={totalCount} />
            <MobileMenu />{" "}
            <div className="flex items-center justify-center grow">
              <Routes>
                <Route
                  index
                  element={
                    <UserRoute>
                      <ProductListPage />
                    </UserRoute>
                  }
                >
                  {" "}
                </Route>
                <Route
                  path="/products/:id/"
                  element={
                    <UserRoute>
                      <ProductDetails onAddToCart={handleAddToCart} />
                    </UserRoute>
                  }
                >
                  {" "}
                </Route>
                <Route path="*" element={<NotFound />}>
                  {" "}
                </Route>
                <Route
                  path="/Cart"
                  element={
                    <UserRoute>
                      <Cart cart={cart} updateCart={updateCart} />
                    </UserRoute>
                  }
                >
                  {" "}
                </Route>
                <Route
                  path="/LoginPage"
                  element={
                    <AuthRoute>
                      <LoginPage />
                    </AuthRoute>
                  }
                ></Route>
                <Route
                  path="/SignUpPage"
                  element={
                    <AuthRoute>
                      <SignUpPage />
                    </AuthRoute>
                  }
                ></Route>
                <Route
                  path="/ForgotPassword"
                  element={
                    <AuthRoute>
                      <ForgotPassword />
                    </AuthRoute>
                  }
                ></Route>
              </Routes>{" "}
            </div>
            <Footer />
          </div>
        </AlertContext.Provider>
      </userContext.Provider>
    </>
  );
}

export default App;
