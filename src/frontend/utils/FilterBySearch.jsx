const getSearchedProducts = (products, searchItem) => {
    if (searchItem) {
     return  [...products].filter((product) =>(
      console.log(product),
        product.title.toLowerCase().includes(searchItem?.toLowerCase()) ||
        product.categoryName.toLowerCase().includes(searchItem?.toLowerCase()) ||
        product.author.toLowerCase().includes(searchItem?.toLowerCase()))
      );
    } else {
      return products;
    }
  };
  export { getSearchedProducts };