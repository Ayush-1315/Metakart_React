import React from "react";
import "../pages/main.css";
import Navbar from "./navbar";
import { useProductListing } from "../context/productListing-context";
import {
  getFilteredCatProducts,
  getRatedProducts,
  getSortedProducts,
  getPricedProducts,
  getSearchedProducts,
} from "../utils/index";
import ProductCard from "./productCard";

export default function ProductList() {
  const { products, productstate, productdispatch } = useProductListing();
  const searchedProducts = getSearchedProducts(products, productstate.search);
  const sortedProducts = getSortedProducts(searchedProducts, productstate.sortBy);
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

  

  return (
    <div className="pad">
      <div >
        {FinalfilteredProducts.length === 0 && <h1>Oops.... No Items matching your search</h1>}
      </div>
      <div className="card-div ">
        {FinalfilteredProducts.map((items) => (
          <ProductCard products={items} key={items._id} />
        ))}
      </div>
    </div>
  );

}
