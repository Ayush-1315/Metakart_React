import React from 'react';
// import "./App.css";
 import "./main.css";
// import logo from "./logo.png";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import {Link} from "react-router-dom";

export default function Signin() {
  return (<>
    
            
            
    <Navbar/>
    
    <div className="avatar-div">
        <div className="active">
            <form action="">
                <label for="e-mail">E-mail <sup><span className="high">*</span></sup></label>
                <input type="email" name="mail" className="input-block" id="e-mail" placeholder="yourmail@mail.com"
                                 required/>
                <label for="pass">Password <sup><span className="high">*</span></sup></label>
                <input name="password" type="password" id="pass" placeholder="Password" className="input-block"
                                 required/>
                    <div className="log">
                          <input type="checkbox" id="keep" name="logged" checked/>
                           <label for="keep" className="checked">Remember Me</label>
                     </div>
                 <input type="submit" id="send" className="input-block" value="Log In"/>
                 <a href="#" id="forgot">Forgot Password?</a>
                 <br/> <Link to ="/signup">Do Not Have Account? SignUp Here </Link>
            </form>
         </div>
    </div>

            <Footer/>
        
        </>
  );
}

// export default Signin;
