import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { useCart } from "../context/cart-context";
import { useWishlist } from "../context/wishlist-context";
import { useProductListing } from "../context/productListing-context";
import "../pages/main.css";

export default function Navbar() {
  const { auth } = useAuth();
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const showname = `Hi ${localStorage.getItem("name")}`;
  const { productstate, productdispatch } = useProductListing();
  const searchHandler = (e) =>{ 
    productdispatch({
      type: "FILTER_BY_SEARCH",
      payload: e.target.value
    })
  }
  return (
    <nav className="top-navbar">
      <div className="top-navbar-icon">
        <Link to="/">
          <img src="https://bit.ly/3v2WZoY" alt="logo" />
        </Link>
        <div className="title">MetaKart</div>
      </div>
      
      
        <input className = "search-box" type="search" name="search" id="search1" placeholder =" &#xf002; Search" onChange = {searchHandler} />
      

      <div className="top-navbar-menu">
        <Link
          to={auth.token ? "/signout" : "/signin"}
          className="top-menu home"
        >
          <button className="btn">
            {auth.token ? (
              <i>
                {showname} <i className="fa fa-sign-out fa-2x" />
              </i>
            ) : (
            <i>
               Login <i className="fa fa-sign-in fa-2x" />
            </i>
            )}{" "}
          </button>
        </Link>{" "}
        &nbsp;&nbsp;&nbsp;
        <Link className="top-menu" to={auth.token ? "/cart" : "/signin"}>
          <i className="fa fa-shopping-cart fa-2x">
            <span>{auth.isAuth?cart.cartProducts.length:"0"}</span>
          </i>
        </Link>{" "}
        &nbsp;&nbsp;
        <Link className="top-menu" to={auth.token ? "/wishlist" : "/signin"}>
          <i className="fa fa-heart fa-2x">
            <span>{auth.isAuth ?wishlist.wishlistProducts.length:"0"}</span>
          </i>
        </Link>
        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
      </div>
    </nav>
  );
}
