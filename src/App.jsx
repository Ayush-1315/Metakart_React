import "./App.css";
import logo from "./logo.png";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./frontend/pages/home";
import Appp from "./frontend/pages/product";
import Cart from "./frontend/pages/cart";
import Signin from "./frontend/pages/signin";
import Signup from "./frontend/pages/signup";
function App() {
  return (
    <div className="App">
      
      
      
      <Routes>   
          <Route path = '/' element= {<Appp/> } /> 
          <Route path = '/home' element = {<Home/>} />
          <Route path = '/cart' element = {<Cart/>} />
          <Route path = '/signin' element = {<Signin/>} />
          <Route path = '/signup' element = {<Signup/>} />
      </Routes>
      
      
    </div>
  );
}

export default App;
