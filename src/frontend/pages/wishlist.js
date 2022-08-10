import Footer from "../components/footer";
import { useWishlist } from "../context/wishlist-context";
import Navbar from "../components/navbar";
import ProductCard from "../components/productCard";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <>
      <Navbar />
      {
        <div>
          <div className="card-div">
            {wishlist.wishlistProducts.length === 0 && (
              <div> <h1>Oops.. Wishlist is Empty</h1> <button className="btn" style={{marginTop:"5rem"}}><Link to ="/products" className="top-menu">Shop Now </Link></button></div>
            )}

            {wishlist.wishlistProducts.map((products) => (
              <ProductCard products={products} key={products._id} />
            ))}
          </div>
          <Footer />
        </div>
      }
    </>
  );
};
export { Wishlist };
