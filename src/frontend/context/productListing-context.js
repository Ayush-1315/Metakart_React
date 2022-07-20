import { createContext, useContext, useState,useEffect, useReducer} from "react";
import { FilterReducerFun, FilterInitialvalues } from "../reducers/filterReducer";
import axios from "axios";
import { getProducts } from "../services/productfetch";


const ProductListing = createContext();
const useProductListing = () => useContext(ProductListing);

const ProductProvider=({children})=>{
    const [productstate, productdispatch] = useReducer(FilterReducerFun,FilterInitialvalues)
    const [products, setProducts] = useState([])
    useEffect(() =>{
        (async()=>{
     const product  = await  getProducts()
     setProducts(product)
    })();
  }, []);

  return(
        <ProductListing.Provider value={{products,productstate,productdispatch}}>
            {children}
        </ProductListing.Provider>
    )
}
export {useProductListing, ProductProvider} 
