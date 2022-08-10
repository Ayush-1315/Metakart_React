import React from "react";
import "./main.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useCart } from "../context/cart-context";
import CartCard from "../components/cartCard";
import { totalPrice, totalQty } from "../utils/totalPriceAndQuantity";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function Cart() {
  const { cart, setCart } = useCart();
  let finalQuantity;
  let finalPrice;

  if (cart.cartProducts.length > 0) {
    finalQuantity = totalQty(cart.cartProducts);
    finalPrice = totalPrice(cart.cartProducts);
  } else {
    finalQuantity = 0;
    finalPrice = 0;
  }

  return (
    <>
      <Navbar />
      <div>
        {cart.cartProducts.length === 0 && <div><h1 style= {{margin:"26vh 0vh" }}>Oops.... Your Cart is Empty</h1> <button className="btn "><Link to ="/products" className="top-menu">Shop Now </Link></button></div>}
      </div>
      <div className="cart-div">
        <div className="item">
          {cart.cartProducts &&
            cart.cartProducts.map((products) => (
              <CartCard products={products} key={products._id} />
            ))}
        </div>
      </div>
      

      {cart.cartProducts.length != 0 &&<div className="checkout-div">
        <div className="price-head">PRICE DETAILS</div>
        <hr />
        <div className="amount-breakup">
          <div>Price ({finalQuantity} items)</div>
          <div>₹{Math.round(finalPrice)}</div>
        </div>

        <div className="amount-breakup">
          <div>Discount</div>
          <div>
            <span style={{ color: "green" }}>-₹{Math.round(finalPrice * (8 / 100))}</span>
          </div>
        </div>

        <div className="amount-breakup">
          <div>Delivery charges</div>
          <div>
            <span style={{ color: "green" }}> FREE </span>
          </div>
        </div>

        <hr />
        <div className="amount-breakup">
          <div>
            <h3>TOTAL PRICE</h3>
          </div>
          <div>
            <h3>₹{Math.round(finalPrice - finalPrice * (8 / 100))}</h3>
          </div>
        </div>

        <hr />
        <div className="price-head">
          <span style={{ color: "green" }}>
            {" "}
            You Will save ₹{Math.round(finalPrice * (8 / 100))} on this order
          </span>
        </div>
        <hr />
        <div style={{ textAlign: "right" }}>
          <button className="order-btn" onClick={()=>toast.success("Order placed successfully")}>
            {" "}
            <Link to = "/summary" className="top-menu"> PLACE ORDER </Link>{" "}
          </button>
        </div>
      </div>}              

      <Footer />
    </>
  );
}

export default Cart;
