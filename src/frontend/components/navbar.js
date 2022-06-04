import React from "react";
import {Link} from "react-router-dom";
import "../pages/main.css";

export default function Navbar(){
    return(
        <nav className="top-navbar">
        <div className="top-navbar-icon">
            <Link to="/home"><img src="https://bit.ly/3v2WZoY" alt = "logo"/></Link>
            <div className="title">MetaKart</div>
        </div>
            <div className="single">
                <label style={{color: 'white' ,  padding: '.5rem' }} className="fa fa-search fa-2x"></label>
                <input type="search" name="search" id="search1" placeholder="Search"/>
            </div>
        
        <div className="top-navbar-menu">
            <Link to = "/signin" className="top-menu home"><button className="btn">Login</button></Link> &nbsp;&nbsp;&nbsp;
            <Link className="top-menu" to="/cart"><i className="fa fa-shopping-cart fa-2x"><span>2</span></i></Link> &nbsp;&nbsp;
            <Link  className="top-menu" to="/wishlist"><i className="fa fa-heart fa-2x"><span>4</span></i></Link>
            &nbsp;&nbsp;&nbsp;            
            &nbsp;&nbsp;&nbsp;
        </div>
    </nav>
    );
}