import React from "react";
import "../pages/main.css";
import { useProductListing } from "../context/productListing-context";

const Sidebar = () => {
  const { productstate, productdispatch } = useProductListing();
  return (
    <div className="sidebar">
      <div className="components">
        <h3 className="sidebar-heading">FILTERS</h3>
        <h4>SORT BY</h4>
        <div className="single">
          <input
            type="radio"
            name="sort"
            id="high_to_low"
            checked={productstate.sortBy === "HIGH_TO_LOW"}
            onChange={() => {
              productdispatch({
                type: "HIGH_TO_LOW",
              });
            }}
          />
          <label> High To Low</label>
        </div>
        <div className="single">
          <input
            type="radio"
            name="sort"
            id="low_to_high"
            checked={productstate.sortBy === "LOW_TO_HIGH"}
            onChange={() => {
              productdispatch({
                type: "LOW_TO_HIGH",
              });
            }}
          />
          <label> Low To High</label>
          <br />
        </div>
        <br />

        <h4>PRICE</h4>
        <div className="single">
          <input
            type="radio"
            name="price"
            value="999"
            checked={productstate.maxPrice === 999}
            onChange={(e) => {
              productdispatch({
                type: "FILTER_BY_PRICE",
                payload: Number(e.target.value),
              });
            }}
          />
          <label> upto Rs 999</label>
        </div>
        <div className="single">
          <input
            type="radio"
            name="price"
            value="1999"
            checked={productstate.maxPrice === 1999}
            onChange={(e) => {
              productdispatch({
                type: "FILTER_BY_PRICE",
                payload: Number(e.target.value),
              });
            }}
          />
          <label> upto Rs 1999</label>
          <br />
        </div>
        <div className="single">
          <input
            type="radio"
            name="price"
            value="2999"
            checked={productstate.maxPrice === 2999}
            onChange={(e) => {
              productdispatch({
                type: "FILTER_BY_PRICE",
                payload: Number(e.target.value),
              });
            }}
          />
          <label> upto Rs 2999</label>
          <br />
        </div>
        <div className="single">
          <input
            type="radio"
            name="price"
            value="4999"
            checked={productstate.maxPrice === 4999}
            onChange={(e) => {
              productdispatch({
                type: "FILTER_BY_PRICE",
                payload: Number(e.target.value),
              });
            }}
          />
          <label> upto Rs 4999</label>
          <br />
        </div>
        <br />

        <h4>CATEGORIES</h4>
        <div className="single">
          <input
            type="checkbox"
            name="category1"
            checked={productstate.categories.Shirt}
            onChange={() => {
              productdispatch({
                type: "Shirt",
              });
            }}
          />
          <label> Shirt</label>
        </div>
        <div className="single">
          <input
            type="checkbox"
            name="category2"
            checked={productstate.categories.Saree}
            onChange={() => {
              productdispatch({
                type: "Saree",
              });
            }}
          />
          <label> Saree</label>
          <br />
        </div>
        <div className="single">
          <input
            type="checkbox"
            name="category3"
            checked={productstate.categories.Jeans}
            onChange={() => {
              productdispatch({
                type: "Jeans",
              });
            }}
          />
          <label> Jeans</label>
          <br />
        </div>
        <div className="single">
          <input
            type="checkbox"
            name="category4"
            checked={productstate.categories.Activewear}
            onChange={() => {
              productdispatch({
                type: "Activewear",
              });
            }}
          />
          <label> Activewear</label>
          <br />
        </div>
        <div className="single">
          <input
            type="checkbox"
            name="category5"
            checked={productstate.categories.Shoes}
            onChange={() => {
              productdispatch({
                type: "Shoes",
              });
            }}
          />
          <label> Shoes</label>
          <br />
        </div>

        <br />
        <h4>RATING</h4>
        <div className="single">
          <input
            type="radio"
            name="rating"
            value="1"
            checked={productstate.ratings === 1}
            onChange={(e) => {
              productdispatch({
                type: "FILTER_BY_RATINGS",
                payload: Number(e.target.value),
              });
            }}
          />
          <label>
            {" "}
            <i className="fa fa-star"></i>
          </label>
        </div>
        <div className="single">
          <input
            type="radio"
            name="rating"
            value="2"
            checked={productstate.ratings === 2}
            onChange={(e) => {
              productdispatch({
                type: "FILTER_BY_RATINGS",
                payload: Number(e.target.value),
              });
            }}
          />
          <label>
            {" "}
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </label>
          <br />
        </div>
        <div className="single">
          <input
            type="radio"
            name="rating"
            value="3"
            checked={productstate.ratings === 3}
            onChange={(e) => {
              productdispatch({
                type: "FILTER_BY_RATINGS",
                payload: Number(e.target.value),
              });
            }}
          />
          <label>
            {" "}
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </label>
          <br />
        </div>
        <div className="single">
          <input
            type="radio"
            name="rating"
            value="4"
            checked={productstate.ratings === 4}
            onChange={(e) => {
              productdispatch({
                type: "FILTER_BY_RATINGS",
                payload: Number(e.target.value),
              });
            }}
          />
          <label>
            {" "}
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </label>
          <br />
        </div>
        <div className="single">
          <input
            type="radio"
            name="rating"
            value="5"
            checked={productstate.ratings === 5}
            onChange={(e) => {
              productdispatch({
                type: "FILTER_BY_RATINGS",
                payload: Number(e.target.value),
              });
            }}
          />
          <label>
            {" "}
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i> <i className="fa fa-star"></i>
          </label>
          <br />
        </div>

        <button
          className="btn"
          onClick={() => {
            console.log("clicked");
            productdispatch({
              type: "CLEAR",
            });
          }}
        >
          CLEAR ALL FILTERS{" "}
        </button>
      </div>
    </div>
  );
};
export { Sidebar };
