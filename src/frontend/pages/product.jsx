import React from 'react';
// import "./App.css";
 import "./main.css";
// import logo from "./logo.png";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import {Sidebar} from "../components/Sidebar"
import {Routes, Route} from "react-router-dom";
import Home from "./home";
import {Link} from "react-router-dom";
import Cart from "./cart";
import {useState, useEffect} from "react";
import axios from "axios";
import ProductList from '../components/ProductList';

function Appp() {
   
  return (<>
    
            <Navbar/>
        
           <Sidebar/>
    
    
    
    <ProductList/>

        <Footer/>

        
        
        </>
  );
}

export default Appp;
