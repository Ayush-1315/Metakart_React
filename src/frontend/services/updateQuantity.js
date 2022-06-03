import axios from "axios";

const updateQuantity = async (id, token, type) => {
  return await axios.post(
    `/api/user/cart/${id}`,
    { action: { type } },
    { headers: { authorization: token } }
  );
};
export { updateQuantity };
