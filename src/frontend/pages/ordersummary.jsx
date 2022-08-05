import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
const Ordersummary = () => {
  

  return (
    <>
      <Navbar />
      {
        <div>
          <div className="card-div" style={{flexFlow: "column wrap"}}>
            <h1 style={{color:"green"}}>Your Order have been placed successfully</h1> 
            <h2>it will reach your doorstep soon</h2>
            <h3>Your oder ID is :- <span style={{color:"green"}}>{Math.random().toString(36).slice(2)}</span></h3>            
            <button className="btn" style={{background:"Green"}}><Link to = "/products" className="top-menu">Continue Shopping</Link></button>
          </div>
          
          <Footer />
        </div>
      }
    </>
  );
};
export { Ordersummary };