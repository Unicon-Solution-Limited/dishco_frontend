import React, { createContext, useEffect, useState } from "react";

export const CartProvider = createContext();

// get cart-data from localStorage
const getLocalStorageCartData = () => {
  let cartData;
  if (typeof window !== "undefined") {
    const localData = JSON.parse(localStorage.getItem("cart")) || [];
    cartData = localData;
  }
  return cartData;
};

const CartContext = ({ children }) => {
  const [cartData, setCartData] = useState(getLocalStorageCartData());

  // save cart-data to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cartData || []));
    }
  }, [cartData]);

  return (
    <div>
      <CartProvider.Provider value={[cartData, setCartData]}>
        {children}
      </CartProvider.Provider>
    </div>
  );
};

export default CartContext;
