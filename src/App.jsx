import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductListPage from "./ProductListPage";
import ProductDetails from "./ProductDetails";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NotFound from "./NotFound";
import Cart from "./Cart";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import ForgotPassword from "./ForgotPassword";
import MobileMenu from "./MobileMenu";

import AuthRoute from "./AuthRoute";
import UserRoute from "./UserRoute";
import UserProvider from "./Providers/UserProvider";
import AlertProvider from "./Providers/AlertProvider";
import CartProvider from "./Providers/CartProvider";
import Alert from "./Alert";

function App() {
  return (
    <>
      <UserProvider>
        <CartProvider>
          <AlertProvider>
            <div className="flex flex-col h-screen overflow-scroll bg-gray-200 font-body">
              <Navbar />
              <MobileMenu />
              <Alert />

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
                        <ProductDetails />
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
                        <Cart />
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
          </AlertProvider>
        </CartProvider>
      </UserProvider>
    </>
  );
}

export default App;
