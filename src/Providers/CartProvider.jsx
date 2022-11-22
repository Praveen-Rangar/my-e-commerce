import React, { useEffect, useState } from "react";
import { getCart, getProductsByIds, saveCart } from "../api";
import { CartContext } from "../Contexts";
import { withUser } from "../WithProvider";

function CartProvider({ isLoggedIn, children }) {
  const [cart, setCart] = useState([]);

  useEffect(
    function () {
      if (isLoggedIn) {
        getCart().then(function (savedCart) {
          setCart(savedCart);
        });
      } else {
        const savedDataString = localStorage.getItem("my-cart") || "{}";
        const savedData = JSON.parse(savedDataString);
        quantityMapToCart(savedData);
      }
    },
    [isLoggedIn]
  );
  console.log("cart", cart);
  function quantityMapToCart(quantityMap) {
    getProductsByIds(Object.keys(quantityMap)).then(function (products) {
      const savedCart = products.map((p) => ({
        product: p,
        quantity: quantityMap[p.id],
      }));

      setCart(savedCart);
    });
  }

  function addToCart(productId, count) {
    const quantityMap = cart.reduce(
      (m, cartItem) => ({ ...m, [cartItem.product.id]: cartItem.quantity }),
      {}
    );

    const oldCount = quantityMap[productId] || 0;

    const newCart = { ...quantityMap, [productId]: oldCount + count };
    console.log("newCart", newCart);
    updateCart(newCart);
  }

  function updateCart(quantityMap) {
    if (isLoggedIn) {
      saveCart(quantityMap).then(function (response) {
        //   setCart(response);
        quantityMapToCart(quantityMap);
      });
    } else {
      const quantityMapString = JSON.stringify(quantityMap);
      localStorage.setItem("my-cart", quantityMapString);
      quantityMapToCart(quantityMap);
    }
  }

  const cartCount = cart.reduce(function (previous, current) {
    return previous + current.quantity;
  }, 0);

  return (
    <CartContext.Provider value={{ cart, cartCount, updateCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default withUser(CartProvider);

// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import { getCart, getProductsByIds, saveCart } from "../Api";
// import { CartContext } from "../Contexts";
// import { withUser } from "../WithProvider";

// const CartProvider = ({ isLoggedIn, children }) => {
//   const [cart, setCart] = useState([]);

//   useEffect(
//     function () {
//       if (!isLoggedIn) {
//         const savedDataString = localStorage.getItem("my-cart") || "{}";
//         const savedData = JSON.parse(savedDataString);
//         getProductsByIds(Object.keys(savedData)).then(function (products) {
//           const savedCart = products.map((p) => ({
//             product: p,
//             quantity: savedData[p.id],
//           }));
//           setCart(savedCart);
//         });
//       } else {
//         getCart().then(function (savedCart) {
//           setCart(savedCart);
//         });
//       }
//     },
//     [isLoggedIn]
//   );

//   function addToCart(productId, count) {
//     const oldCount = cart[productId] || 0;
//     const newCart = { ...cart, [productId]: oldCount + count };
//     console.log("newCart", newCart);
//     updateCart(newCart);
//   }

//   function updateCart(newCart) {
//     setCart(newCart);
//     if (!isLoggedIn) {
//       const cartString = JSON.stringify(newCart);
//       localStorage.setItem("my-Cart", cartString);
//     } else {
//       saveCart(newCart);
//     }
//   }

//   const cartCount = cart.reduce(function (previous, current) {
//     return previous + current.quantity;
//   }, 0);

//   return (
//     <CartContext.Provider value={{ cart, cartCount, updateCart, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default withUser(CartProvider);
