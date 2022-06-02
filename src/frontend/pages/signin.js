import React from "react";
// import "./App.css";
import "./main.css";
// import logo from "./logo.png";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../context/auth-context";
import { signinService } from "../services/signinService";
import { SigninCheck } from "../utils/ValidateForm";

export default function Signin() {
  const [Err, setErr] = useState();
  const [Error, setError] = useState({});
  const { showpass, setShowPass, setAuth } = useAuth();
  const [submit, setSubmit] = useState(false);
  const [SigninForm, setSigninForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  // console.log(Error);
  useEffect(() => {
    (async () => {
      if (submit && Object.values(Error).length === 0) {
        const token = await signinService(
          SigninForm.email,
          SigninForm.password
        );
        localStorage.setItem("token", token.data.encodedToken);
        localStorage.setItem("isAuth", true);
        localStorage.setItem("name", token.data.foundUser.firstName);
        localStorage.setItem("email", token.data.foundUser.email);
        console.log(token);
        setAuth({
          token,
          isAuth: true,
        });

        navigate("/");
      }
    })();
  }, [Error]);

  const LoginHandler = async (x, email, password) => {
    x.preventDefault();
    setSubmit(true);
    setError(() => SigninCheck(SigninForm));
  };

  const onchangeHandler = (x) => {
    const { name, value } = x.target;
    setSigninForm({ ...SigninForm, [name]: value });
  };

  return (
    <>
      <Navbar />

      <div className="avatar-div">
        <div className="active">
          <form
            onSubmit={(x) =>
              LoginHandler(x, SigninForm.email, SigninForm.password)
            }
          >
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
              placeholder="yourmail@mail.com"
              value={SigninForm.email}
              onChange={(x) => onchangeHandler(x)}
              required
            />
            {Error.email && <div>{Error.email}</div>}
            <label>
              Password{" "}
              <sup>
                <span className="high">*</span>
              </sup>
            </label>
            <input
              name="password"
              type={showpass ? "text" : "password"}
              id="password"
              placeholder="Password"
              className="input-block"
              value={SigninForm.password}
              onChange={(x) => onchangeHandler(x)}
              required
            />
            <br />
            <i
              class={!showpass ? "fa fa-eye" : "fa fa-eye-slash"}
              aria-hidden="true"
              onClick={() => setShowPass(!showpass)}
            >
              {" "}
              Show Password
            </i>
            {Error.password && <div>{Error.password}</div>}
            <div className="log">
              <input type="checkbox" id="keep" name="logged" defaultChecked />
              <label for="keep" className="checked">
                Remember Me
              </label>
            </div>
            <input
              type="submit"
              id="send"
              className="input-block"
              value="Log In"
              onClick={(x) =>
                LoginHandler(x, SigninForm.email, SigninForm.password)
              }
            />
            <input
              type="submit"
              id="send"
              className="input-block"
              value="Login With test Credentials 1"
              onClick={(x) =>
                setSigninForm({
                  ...SigninForm,
                  email: "mramandeepsinha@gmail.com",
                  password: "Abc@123",
                })
              }
            />
            <input
              type="submit"
              id="send"
              className="input-block"
              value="Login With test Credentials 2"
              onClick={(x) =>
                setSigninForm({
                  ...SigninForm,
                  email: "adarshbalika@gmail.com",
                  password: "adarshbalika",
                })
              }
            />
            <a href="#" id="forgot">
              Forgot Password?
            </a>
            <br /> <Link to="/signup">Do Not Have Account? SignUp Here </Link>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

// export default Signin;
