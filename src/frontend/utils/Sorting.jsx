const getSortedProducts = (products, sortBy) => {
    if (sortBy === "LOW_TO_HIGH")
      return [...products].sort((item1, item2) => item1.offerprice - item2.offerprice);
      if (sortBy === "HIGH_TO_LOW")
    return [...products].sort((item1, item2) => item2.offerprice - item1.offerprice);

  return products;
};

export { getSortedProducts };