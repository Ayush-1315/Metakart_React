import axios from "axios";
const removeFromCart = async (id, token) => {
  return await axios.delete(`/api/user/cart/${id}`, {
    headers: { authorization: token },
  });
};
export { removeFromCart };
