import React from "react";
import "../pages/main.css";

export default function Footer () {
    return (
        <footer>
            <div className="footer-div">
                <a href="https://github.com/Amandeep-sinha " className="social-icons" target="_blank"> <img
                        src="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png" alt="icon"/></a>
                <a href="https://www.linkedin.com/in/amandeep-sinha-1257251a2" target="_blank" className="social-icons"> <img
                        src="https://cdn-icons-png.flaticon.com/512/61/61109.png" alt="icon"/></a>
                <a href="https://amandeepcl.netlify.app" className="social-icons" target="_blank"> <img
                        src="https://cdn1.vectorstock.com/i/1000x1000/22/45/portfolio-icon-vector-2182245.jpg"
                        alt="icon"/></a>
            </div>
            Developed and Designed by : Amandeep<br/><br/>
        </footer>
    );
}