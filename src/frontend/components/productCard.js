import React from "react";
import "../pages/main.css";
import { addToCart } from "../services/adToCart";
import { useCart } from "../context/cart-context";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { useState, useEffect } from "react";

export default function ProductCard({ products }) {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { cart, setCart } = useCart();
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    cart.cartProducts.find((prod) => prod._id === products._id) &&
      setInCart(true);
  }, [cart.cartProducts]);

  const addtocart = async () => {
    if (auth.isAuth) {
      try {
        const res = await addToCart(products, auth.token);
        if (res.status === 201) {
          setCart((prev) => ({ ...prev, cartProducts: res.data.cart }));
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="simple-card a">
        <a href="">
          <img src={products.image} alt="image" />
        </a>
        <span className="rate-pro">
          {" "}
          {products.rating} &nbsp;<i className="fa fa-star fa-xs"></i>
        </span>
        <h4>{products.author}</h4>
        <p>{products.title}</p>
        <div className="inline">
          <h5>Rs. {products.offerprice}</h5>
          <strike>Rs. {products.price}</strike>
        </div>
        <button
          onClick={
            auth.isAuth
              ? inCart
                ? () => navigate("/cart")
                : () => addtocart()
              : () => navigate("/signin")
          }
        >
          {inCart ? "View in Cart" : "Add to Cart"}
        </button>
        <button>Add To WishList</button>
      </div>{" "}
    </>
  );
}
