import React from "react";
import "../pages/main.css";
import { useProductListing } from "../context/productListing-context";
import {
  getFilteredCatProducts,
  getRatedProducts,
  getSortedProducts,
  getPricedProducts,
} from "../utils/index";
import ProductCard from "./productCard";

export default function ProductList() {
  const { products, productstate, productdispatch } = useProductListing();

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

  // console.log(pricedProducts);

  return (
    <div className="pad">
      <div className="card-div ">
        {FinalfilteredProducts.map((items) => (
          <ProductCard products={items} key={items._id} />
        ))}
      </div>
    </div>
  );
}
