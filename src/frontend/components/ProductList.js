import React from "react";
import "../pages/main.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Sidebar } from "./Sidebar";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import { Link } from "react-router-dom";
import Cart from "../pages/cart";
import { useState, useEffect } from "react";
import axios from "axios";
import { useProductListing } from "../context/productListing-context";
import {
  getFilteredCatProducts,
  getRatedProducts,
  getSortedProducts,
  getPricedProducts,
} from "../utils/index";

export default function ProductList() {
  // const [data, setData] = useState([])

  // async  function getProducts() {
  //   try {
  //     const response = await axios.get("/api/products");
  //     const res = response.data.products;
  //     setData(res);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  // useEffect(() => getProducts(), []);

  const { products, productstate, productdispatch } = useProductListing();
  // const outofStocks = getOutofStocksProducts(
  //   products,
  //   productstate.excludeoutofstocks
  // );
  const sortedProducts = getSortedProducts(products, productstate.sortBy);
  const filteredProducts = getFilteredCatProducts(
    sortedProducts,
    productstate.categories.Shirt,
    productstate.categories.Saree,
    productstate.categories.Jeans,
    productstate.categories.Activewear,
    productstate.categories.Shoes
  );

  const pricedProducts = getPricedProducts(
    filteredProducts,
    productstate.maxPrice
  );
  const FinalfilteredProducts = getRatedProducts(
    pricedProducts,
    productstate.ratings
  );
  // const FinalfilteredProducts = getLatestProducts(
  //   ratedProducts,
  //   productstate.latest
  // );

  console.log(pricedProducts);

  return (
    <div className="pad">
      <div className="card-div ">
        {FinalfilteredProducts.map((item) => (
          <>
            <div className="simple-card a">
              <a href="">
                <img src={item.image} alt="image" />
              </a>
              <span className="rate-pro">
                {" "}
                {item.rating} &nbsp;<i className="fa fa-star fa-xs"></i>
              </span>
              <h4>{item.author}</h4>
              <p>{item.title}</p>
              <div className="inline">
                <h5>Rs. {item.offerprice}</h5>
                <strike>Rs. {item.price}</strike>
              </div>
              <a href="">Add to cart</a> <a href="">Add To WishList</a>
            </div>{" "}
          </>
        ))}
      </div>
    </div>
  );
}
