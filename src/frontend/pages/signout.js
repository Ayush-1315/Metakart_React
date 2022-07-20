import React from "react";
// import "./App.css";
import "./main.css";
// import logo from "./logo.png";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";

export default function Signout() {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  const signoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAuth");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    setAuth({
      token: " ",
      isAuth: false,
    });
    navigate("/");
  };

  return (
    <>
      <Navbar />

      <div className="avatar-div">
        <div className="active">
          <form>
            <label>
              Username{" "}
              <sup>
                <span className="high">*</span>
              </sup>
            </label>
            <input
              name="password"
              type="readonly"
              id="password"
              placeholder={localStorage.getItem("name")}
              value={localStorage.getItem("name")}
              className="input-block"
              disabled
            />

            <label>
              E-mail{" "}
              <sup>
                <span className="high">*</span>
              </sup>
            </label>
            <input
              type="email"
              name="email"
              className="input-block"
              id="email"
              placeholder={localStorage.getItem("email")}
              value={localStorage.getItem("email")}
              disabled
            />

            <input
              type="submit"
              id="send"
              className="input-block"
              value="Log Out"
              onClick={signoutHandler}
            />

            <input
              type="submit"
              id="send"
              className="input-block"
              value="Close"
              onClick={navigate("/")}
            />
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
