import React from 'react';
// import "./App.css";
 import "./main.css";
// import logo from "./logo.png";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar"
import {Routes, Route} from "react-router-dom";
import Home from "./home";
import {Link} from "react-router-dom";
import Cart from "./cart";

function Appp() {
  return (<>
    
            <Navbar/>
        
           <Sidebar/>
    
    
    
    <div className="pad">

            <div className="card-div ">
                
                
                <div className="simple-card a"> 
                    
                    <a href=""><img src="https://bit.ly/34D1GuL" alt="image"/></a>
                    <h4>HIGHLANDER</h4>
                    <p>Slim fit casual shirt</p>
                    <div className="inline"><h5>Rs. 799</h5><strike>Rs. 999</strike></div><a href="cart.html">Shop now</a> <a href="">Add To WishList</a>

                </div>
                
                <div className="simple-card"> 
                    
                    <a href=""><img src="https://bit.ly/3BhlRdr" alt="image"/></a>
                    <h4>HIGHLANDER</h4>
                    <p>Slim fit casual shirt</p>
                    <div className="inline"><h5>Rs. 799</h5><strike>Rs. 999</strike></div><a href="cart.html">Shop now</a> <a href="">Add To WishList</a>


                </div>

                <div className="simple-card"> 
                    
                    <a href=""><img src="https://bit.ly/3oLqTKd" alt="image"/></a>
                    <h4>HIGHLANDER</h4>
                    <p>Slim fit casual shirt</p>
                    <div className="inline"><h5>Rs. 799</h5><strike>Rs. 999</strike></div><a href="cart.html">Shop now</a> <a href="">Add To WishList</a>


                </div>

                <div className="simple-card"> 
                    
                    <a href=""><img src="https://bit.ly/3Bf1ZYF" alt="image"/></a>
                    <h4>HIGHLANDER</h4>
                    <p>Slim fit casual shirt</p>
                    <div className="inline"><h5>Rs. 799</h5><strike>Rs. 999</strike></div><a href="cart.html">Shop now</a> <a href="">Add To WishList</a>


                </div>
            

            
            </div>

            <div className="card-div b">
                <div className="simple-card"> 
                    
                    <a href=""><img src="https://bit.ly/3rKrI84" alt="image"/></a>
                    <h4>ROADSTER</h4>
                    <p>Slim fit casual shirt</p>
                    <div className="inline"><h5>Rs. 799</h5><strike>Rs. 999</strike></div><a href="cart.html">Shop now</a> <a href="">Add To WishList</a>

                </div>
                
                <div className="simple-card"> 
                    
                    <a href=""><img src="https://bit.ly/3HL6ht9" alt="image"/></a>
                    <h4>ROADSTER</h4>
                    <p>Slim fit casual shirt</p>
                    <div className="inline"><h5>Rs. 799</h5><strike>Rs. 999</strike></div><a href="cart.html">Shop now</a> <a href="">Add To WishList</a>


                </div>

                <div className="simple-card"> 
                    
                    <a href=""><img src="https://bit.ly/34O2blo" alt="image"/></a>
                    <h4>ROADSTER</h4>
                    <p>Slim fit casual shirt</p>
                    <div className="inline"><h5>Rs. 799</h5><strike>Rs. 999</strike></div><a href="cart.html">Shop now</a> <a href="">Add To WishList</a>


                </div>

                <div className="simple-card"> 
                    
                    <a href=""><img src="https://bit.ly/34RHBRg" alt="image"/></a>
                    <h4>ROADSTER</h4>
                    <p>Slim fit casual shirt</p>
                    <div className="inline"><h5>Rs. 799</h5><strike>Rs. 999</strike></div><a href="cart.html">Shop now</a> <a href="">Add To WishList</a>


                </div>

            </div>
            
        
        </div>

        <Footer/>

        
        
        </>
  );
}

export default Appp;
