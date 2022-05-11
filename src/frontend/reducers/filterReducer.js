let FilterInitialvalues = {
  sortBy: "",
  categories: {
    Shirt: false,
    Saree: false,
    Jeans: false,
    Activewear: false,
    Shoes: false
  },
  ratings: 1,
  maxPrice: 4999,
  search:""
};
const FilterReducerFun = (state, action) => {
  switch (action.type) {
    case "HIGH_TO_LOW":
      return { ...state, sortBy: action.type };
    case "LOW_TO_HIGH":
      return { ...state, sortBy: action.type };
    case "Saree":
      return {
        ...state,
        categories: {
          ...state.categories,
          Saree: !state.categories.Saree,
        },
      };
    case "Shirt":
      return {
        ...state,
        categories: {
          ...state.categories,
          Shirt: !state.categories.Shirt,
        },
      };
    case "Jeans":
      return {
        ...state,
        categories: {
          ...state.categories,
          Jeans: !state.categories.Jeans,
        },
      };
    case "Activewear":
      return {
        ...state,
        categories: {
          ...state.categories,
          Activewear: !state.categories.Activewear,
        },
      };
      case "Shoes":
      return {
        ...state,
        categories: {
          ...state.categories,
          Shoes: !state.categories.Shoes,
        },
      };
    

    case "FILTER_BY_PRICE":
      return { ...state, maxPrice: action.payload };
    case "FILTER_BY_RATINGS":
      return { ...state, ratings: action.payload };
    case "FILTER_BY_SEARCH" :
      return {...state,search:action.payload}
    case "CLEAR":
      return {
        sortBy: "",
        categories: {
            Shirt: false,
            Saree: false,
            Jeans: false,
            Activewear: false,
            Shoes: false
        },
        ratings: 1,
        maxPrice: 4999,
      
      };
    default:
      return state;
  }
};

export { FilterInitialvalues, FilterReducerFun };