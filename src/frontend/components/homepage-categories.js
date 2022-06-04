import React from "react";
import "../pages/main.css";
import axios from "axios";
import {useState, useEffect} from "react";
import {Link} from 'react-router-dom';




export default function HomepageCategories() {
    
        const [data, setData] = useState([])

async  function getCategories() {
  try {
    const response = await axios.get("/api/categories");
    const res = response.data.categories;
    setData(res);
  } catch (error) {
    console.error(error);
  }
}
useEffect(() => getCategories(), []);

return (
  <>
    
    <div className="hero-text">
      Trending Featured Sections 
  </div>
  <div className="categories shadow-image">
  {
    data.map((item) =>
          <Link to={item.path}><div className="shadow-image-hover">
          <img src={item.image} alt="image" id="hover-img"/></div></Link> 
    )     
    
  }
  </div> </>
    );
}