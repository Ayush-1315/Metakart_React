import React from "react";
// import "./App.css";
import "./main.css";
// import logo from "./logo.png";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HomepageCategories from "../components/homepage-categories";
import {Link} from "react-router-dom";
import axios from "axios";
import {useState, useEffect} from "react";

function Home()  {
  
  
  return (
    <>
      <Navbar />
      <HomepageCategories/>

      <Footer />
    </>
  );
}

export default Home;
