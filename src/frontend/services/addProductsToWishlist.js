import axios from "axios";

const addProductsToWishlist = async (product, token) => {
  return await axios.post(
    "/api/user/wishlist",
    { product },
    { headers: { authorization: token } }
  );
};
export { addProductsToWishlist };
