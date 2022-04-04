import React from 'react';
// import "./App.css";
 import "./main.css";
// import logo from "./logo.png";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import {Link} from "react-router-dom";

function Signup() {
  return (<>
    
            
            
    <Navbar/>
    
    <div className="avatar-div">
                {/* <!--Verification Form --> */}
   <div className="active">
    <form action="">
        <label for="fname">First Name <sup><span className="high">*</span></sup></label>
        <input type="text" id="fname" placeholder="First Name" className="input-block" required/>
        <label for="lname">Last Name <sup><span className="high">*</span></sup></label>
        <input type="text" id="lname" placeholder="Last Name" className="input-block" required/>
        <label for="e-mail">E-mail <sup><span className="high">*</span></sup></label>
        <input type="email" className="input-block" id="e-mail" placeholder="yourmail@mail.com" required/>
        <label for="pass">Password <sup><span className="high">*</span></sup></label>
        <input name="password" type="password" id="pass" placeholder="Password" className="input-block"
           required/>
        <label for="pass-cfr">Confirm Password <sup><span className="high">*</span></sup></label>
        <input name="password-CFR" type="password" id="pass-cfr" placeholder="Retype-Password"
           className="input-block" required/>
        <label for="age">Age<sup><span className="high">*</span></sup></label>
        <input name="Age" type="number" id="age" placeholder="Age" className="input-block" required/>
        <div className="Gender">
             <label>Gender<sup><span className="high">*</span></sup></label>
                   <div className="option">
                      <input type="radio" name="Mygender" required value="Male" id="male" checked/>                             <label for="male">Male</label>
                    </div>
                    <div className="option">
                      <input type="radio" name="Mygender" required value="Female" id="female"/> 
                      <label for="female">Female</label>
                    </div>
        </div>
        <input type="submit" id="send" className="input-block" value="Sign Up"/>
        <Link to="/signin" id="forgot">Registered Already? /Sign In</Link>
   </form>
</div>
    </div>

        
        <Footer/>
        
        </>
  );
}

export default Signup;
