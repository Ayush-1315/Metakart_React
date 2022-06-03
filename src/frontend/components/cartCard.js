import { useAuth } from "../context/auth-context";
import { useCart } from "../context/cart-context";
import { removeFromCart } from "../services/removeFromCart";
import { updateQuantity } from "../services/updateQuantity";

export default function CartCard({ products }) {
  const { auth } = useAuth();
  const { cart, setCart } = useCart();
  const remove = async () => {
    const res = await removeFromCart(products._id, auth.token);
    if (res.status === 200) {
      setCart((prev) => ({ ...prev, cartProducts: res.data.cart }));
    } else {
      console.log(error);
    }
  };
  const update = async (type) => {
    let res = null;
    try {
      if (products.qty === 1 && type === "decrement") {
        res = await removeFromCart(products._id, auth.token);
        setCart((prev) => ({ ...prev, cartProducts: res.data.cart }));
      } else {
        res = await updateQuantity(products._id, auth.token, type);
        setCart((prev) => ({ ...prev, cartProducts: res.data.cart }));
      }

      if (res.status === 200) {
        setCart((prev) => ({ ...prev, cartProducts: res.data.cart }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="horizontal-card" key={products._id}>
        <div>
          <img src={products.image} alt="image" />
        </div>
        <div className="card-content">
          <h2>{products.categoryName}</h2>
          <h4>
            By :- {products.author}{" "}
            <span className="rate">
              {" "}
              {products.rating} &nbsp;<i className="fa fa-star"></i>
            </span>
          </h4>
          <p>
            {products.title}
            <br />
            <br />
            <span className="price"> {products.offerprice}</span>{" "}
            <i>
              {" "}
              <strike>{products.price} </strike>18% off{" "}
            </i>
          </p>
          <div className="card-btn">
            <div>
              <button>
                <i
                  onClick={() => update("decrement")}
                  className="fa fa-minus"
                />
              </button>
              <button style={{ margin: "8px", padding: ".4rem 1rem" }}>
                {products.qty}
              </button>{" "}
              <button>
                <i onClick={() => update("increment")} className="fa fa-plus" />
              </button>
            </div>
            <button>Save For Later </button>
            <button onClick={() => remove()}>Remove</button>
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}
