import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { getProductsFromCart } from "../services/getProductsFromCart";
import { useAuth } from "./auth-context";

const cartContext = createContext();
const useCart = () => useContext(cartContext);
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ cartProducts: [] });
  const { auth } = useAuth();
  useEffect(
    () =>
      (async () => {
        if (auth.isAuth) {
          try {
            const response = await getProductsFromCart(auth.token);

            if (response.status === 200)
              setCart((previous) => ({
                ...previous,
                cartProducts: response.data.cart,
              }));
          } catch (err) {
            console.log(err.response);
          }
        } else {
          setCart((previous) => ({ ...previous, cartProducts: [] }));
        }
      })(),
    [auth.isAuth]
  );
  return (
    <cartContext.Provider value={{ cart, setCart }}>
      {children}
    </cartContext.Provider>
  );
};
export { useCart, CartProvider };
