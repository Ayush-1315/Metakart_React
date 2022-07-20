import axios from "axios";

const getProductsFromCart = async (token) => {
  return await axios.get("/api/user/cart", {
    headers: { authorization: token },
  });
};
export { getProductsFromCart };
