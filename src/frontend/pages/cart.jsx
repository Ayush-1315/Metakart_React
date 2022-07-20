import React from "react";
import "./main.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useCart } from "../context/cart-context";
import CartCard from "../components/cartCard";
import { totalPrice, totalQty } from "../utils/totalPriceAndQuantity";

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
        {" "}
        {cart.cartProducts.length === 0 && <h1>Oops.... Your Cart is Empty</h1>}
      </div>
      <div className="cart-div">
        <div className="item">
          {cart.cartProducts &&
            cart.cartProducts.map((products) => (
              <CartCard products={products} key={products._id} />
            ))}
        </div>
      </div>

      <div className="checkout-div">
        <div className="price-head">PRICE DETAILS</div>
        <hr />
        <div className="amount-breakup">
          <div>Price ({finalQuantity} items)</div>
          <div>₹{finalPrice}</div>
        </div>

        <div className="amount-breakup">
          <div>Discount</div>
          <div>
            <span style={{ color: "green" }}>-₹{finalPrice * (8 / 100)}</span>
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
            <h3>₹{finalPrice - finalPrice * (8 / 100)}</h3>
          </div>
        </div>

        <hr />
        <div className="price-head">
          <span style={{ color: "green" }}>
            {" "}
            You Will save ₹{finalPrice * (8 / 100)} on this order
          </span>
        </div>
        <hr />
        <div style={{ textAlign: "right" }}>
          <button className="order-btn">
            {" "}
            <span> PLACE ORDER </span>{" "}
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Cart;
