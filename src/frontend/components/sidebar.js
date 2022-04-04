import React from 'react';
import "../pages/main.css";

export default function Sidebar(){
    return(
        <div className="sidebar">
        <div className="components">
            <h3 className="sidebar-heading">FILTERS</h3> 
            <h4>PRICE</h4>
            <div className="single">
            <input type="checkbox"  name="price1" />
            <label for="price1"> Rs 499 to Rs 999</label></div>
            <div className="single">
            <input type="checkbox"  name="price2" />
            <label for="price2"> Rs 999 to Rs 1999</label><br/></div>
            <div className="single">
            <input type="checkbox"  name="price3" />
            <label for="price3"> Rs 199 to Rs 2999</label><br/></div>
            <div className="single">
            <input type="checkbox"  name="price4" />
            <label for="price4"> Rs 2999 to Rs 4999</label><br/></div>
            <br/>
    
            <h4>CATEGORIES</h4>
            <div className="single">
            <input type="checkbox"  name="category1" />
            <label for="category1"> Shirt</label></div>
            <div className="single">
            <input type="checkbox"  name="category2" />
            <label for="category2"> TShirt</label><br/></div>
            <div className="single">
            <input type="checkbox"  name="category3" />
            <label for="category3"> Jeans</label><br/></div>
            <div className="single">
            <input type="checkbox"  name="category4" />
            <label for="category4"> SweatShirt</label><br/></div>
            <div className="single">
            <input type="checkbox"  name="category5" />
            <label for="category5"> Trouser</label><br/></div>
            <div className="single">
            <input type="checkbox"  name="category6" />
            <label for="category6"> Jacket</label><br/></div>
            <div className="single">
            <input type="checkbox"  name="category7" />
            <label for="category7"> Boxer</label><br/></div>
                    <br/>
            <h4>RATING</h4>
            <div className="single">
            <input type="checkbox"  name="rating1" />
            <label for="rating1"> <i className="fa fa-star"></i></label></div>
            <div className="single">
            <input type="checkbox"  name="rating2" />
            <label for="rating2"> <i className="fa fa-star"></i><i className="fa fa-star"></i></label><br/></div>
            <div className="single">
            <input type="checkbox"  name="rating3" />
            <label for="rating3"> <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></label><br/></div>
            <div className="single">
            <input type="checkbox"  name="rating4" />
            <label for="rating4"> <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></label><br/></div>
            <div className="single">
            <input type="checkbox"  name="rating5" />
            <label for="rating5"> <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> <i className="fa fa-star"></i></label><br/></div>
        
            <button className="btn">CLEAR ALL FILTERS </button>
        
        </div>


        
    </div>
    );
}