const getFilteredCatProducts = (
    sortedproducts,
    Shirt,
    Saree,
    Activewear,
    Jeans,
    Shoes
  ) => {
    const filteredlist = [];
    if (
      Shirt === false &&
      Saree === false &&
      Jeans === false &&
      Activewear === false &&
      Shoes === false 
    ) {
      return sortedproducts;
    }
    if (Shirt) {
      let newList = sortedproducts.filter(
        (prod) => prod.categoryName === "Shirt"
      );
      filteredlist.push(...newList);
    }
    if (Saree) {
      let newList = sortedproducts.filter(
        (prod) => prod.categoryName === "Saree"
      );
      filteredlist.push(...newList);
    }
    if (Jeans) {
      let newList = sortedproducts.filter(
        (prod) => prod.categoryName === "Jeans"
      );
      filteredlist.push(...newList);
    }
    if (Activewear) {
      let newList = sortedproducts.filter(
        (prod) => prod.categoryName === "Activewear"
      );
      filteredlist.push(...newList);
    }
    if (Shoes) {
        let newList = sortedproducts.filter(
          (prod) => prod.categoryName === "Shoes"
        );
        filteredlist.push(...newList);
      }
      
    return filteredlist;
  };
  
  export { getFilteredCatProducts };