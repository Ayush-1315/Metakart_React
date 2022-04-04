import React from 'react';
 import "./main.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import {Link} from "react-router-dom";

function Cart() {
  return (<>
    
            
            <Navbar/>
    
    <div className="cart-div">
        <div className="item">
            {/* <!-- Horizontal Card --> */}

   <div className="horizontal-card">
    <div>
    <img src="https://bit.ly/3BhVAM5" alt="image"/>
    </div>
    <div className="card-content">
                         <h2>
                             Sport Shoes
                         </h2>
       <h4>
       By :- ADIDAS  <span className="rate"> 4.8 &nbsp;<i className="fa fa-star"></i></span>
       </h4>
       <p>
        Men's sport Running Shoes
       <br/><br/>
       <span className="price"> ₹1,499</span> <i> <strike>₹1,999 </strike>18% off </i>
                         </p>
                         <div className="card-btn">
                             <div><button><li className="fa fa-minus"></li></button><button style={{margin:'8px', padding:'.4rem 1rem'}}>1</button> <button><li className="fa fa-plus"></li></button></div>
                             <button>Save For Later</button>
                             <button>Remove</button>
                         </div>
                     </div>
                 </div>

                 <hr/> 
                 <div className="horizontal-card">
                    <div>
                    <img src="https://bit.ly/34D1GuL" alt="image"/>
                    </div>
                    <div className="card-content">
                                         <h2>
                                             CASUAL SHIRT
                                         </h2>
                       <h4>
                       By :- HIGHLANDER  <span className="rate"> 4.8 &nbsp;<i className="fa fa-star"></i></span>
                       </h4>
                       <p>
                       Slim Fit Casual Shirt
                       <br/><br/>
                       <span className="price"> ₹799</span> <i> <strike>₹999 </strike>20% off </i>
                                         </p>
                                         <div className="card-btn">
                                            <div><button><li className="fa fa-minus"></li></button><button style={{margin:'8px', padding:'.4rem 1rem'}}>1</button> <button><li className="fa fa-plus"></li></button></div>
                                            <button>Save For Later</button>
                                            <button>Remove</button>
                                         </div>
                                     </div>
                                 </div>


        </div>
        <div className="checkout-div">
                        <div className="price-head">PRICE DETAILS</div>
                        <hr/>
                        <div className="amount-breakup">
                            <div>
                                Price (2 items)
                            </div>
                            <div>
                                ₹2,998
                            </div>
                        </div>

                        <div className="amount-breakup">
                            <div>
                                Discount
                            </div>
                            <div>
                                <span style={{color : 'green' }}>-₹600</span>
                            </div>
                        </div>

                        <div className="amount-breakup">
                            <div>
                                Delivery charges 
                            </div>
                            <div>
                                <span style={{color : 'green' }}> FREE  </span>
                            </div>
                        </div>

                        <hr/>
                        <div className="amount-breakup">
                            <div>
                                <h3>TOTAL PRICE</h3> 
                            </div>
                            <div>
                                <h3>₹2,298</h3>
                            </div>
                        </div>

                        <hr/>
                        <div className="price-head"><span style={{color : 'green' }}> You Will save ₹600 on this order</span></div>
                        <hr/>
                        <div style={{textAlign: 'right'}}><button className="order-btn"> <span> PLACE ORDER </span> </button></div>
        </div>
    </div>

        
        <Footer/>
        
        </>
  );
}

export default Cart;
