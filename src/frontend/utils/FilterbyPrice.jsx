const getPricedProducts = (products, maxPrice) => {
    
  
    return [...products].filter((product) => product.offerprice <= maxPrice);
  };
  export { getPricedProducts};