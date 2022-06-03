import axios from "axios";

const addToCart = async (product, token) => {
  return await axios.post(
    "/api/user/cart/",
    { product },
    { headers: { authorization: token } }
  );
};

export { addToCart };
