import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { React, useState, useEffect } from "react";
import { SignupCheck } from "../utils/ValidateForm";
import { signupService } from "../services/signupService";

function Signup() {
  const { auth, setAuth } = useAuth();
  const [submit, setSubmit] = useState(false);

  const [errors, setErrors] = useState({});

  const [SignupForm, setSignupForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password_CFR: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      if (submit && Object.values(errors).length === 0) {
        const token = await signupService(
          SignupForm.firstname,
          SignupForm.lastname,
          SignupForm.email,
          SignupForm.password
        );
        console.log("calling signUpService");

        localStorage.setItem("token", token);
        localStorage.setItem("isAuth", true);
        localStorage.setItem("name", SignupForm.firstname);
        localStorage.setItem("email", SignupForm.email);
        setAuth({
          token: token,
          isAuth: true,
        });
        navigate("/signin");
      }
    })();
  }, [errors]);

  const SignupHandler = async (x) => {
    x.preventDefault();
    setSubmit(true);
    setErrors(() => SignupCheck(SignupForm));
    console.log(errors);
  };
  const changeHandler = (x) => {
    const { name, value } = x.target;
    setSignupForm({ ...SignupForm, [name]: value });
  };

  return (
    <>
      <Navbar />

      <div className="avatar-div">
        {/* <!--Verification SignupForm --> */}
        <div className="active">
          <form action="">
            <label>
              First Name{" "}
              <sup>
                <span className="high">*</span>
              </sup>
            </label>
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              className="input-block"
              value={SignupForm.firstname}
              onChange={(x) => changeHandler(x)}
              required
            />
            {errors.firstname && <div>{errors.firstname}</div>}
            <label>
              Last Name{" "}
              <sup>
                <span className="high">*</span>
              </sup>
            </label>
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              className="input-block"
              value={SignupForm.lastname}
              onChange={(x) => changeHandler(x)}
              required
            />
            {errors.lastname && <div>{errors.lastname}</div>}
            <label>
              E-mail{" "}
              <sup>
                <span className="high">*</span>
              </sup>
            </label>
            <input
              type="email"
              className="input-block"
              name="email"
              placeholder="yourmail@mail.com"
              value={SignupForm.email}
              onChange={(x) => changeHandler(x)}
              required
            />
            {errors.email && <div>{errors.email}</div>}
            <label>
              Password{" "}
              <sup>
                <span className="high">*</span>
              </sup>
            </label>
            <input
              name="password"
              type="password"
              id="pass"
              placeholder="Password"
              className="input-block"
              value={SignupForm.password}
              onChange={(x) => changeHandler(x)}
              required
            />
            {errors.password && <div>{errors.password}</div>}

            {errors.password1 && <div>{errors.password1}</div>}
            <label>
              Confirm Password{" "}
              <sup>
                <span className="high">*</span>
              </sup>
            </label>
            <input
              name="password_CFR"
              type="password"
              id="pass-cfr"
              placeholder="Retype-Password"
              className="input-block"
              value={SignupForm.password_CFR}
              onChange={(x) => changeHandler(x)}
              required
            />
            {errors.password_CFR && <div>{errors.password_CFR}</div>}
            {errors.notmatching && <div>{errors.notmatching}</div>}

            <div className="Gender">
              <label>
                Gender
                <sup>
                  <span className="high">*</span>
                </sup>
              </label>
              <div className="option">
                <input
                  type="radio"
                  name="Mygender"
                  required
                  value="Male"
                  id="male"
                  checked
                />{" "}
                <label for="male">Male</label>
              </div>
              <div className="option">
                <input
                  type="radio"
                  name="Mygender"
                  required
                  value="Female"
                  id="female"
                />
                <label for="female">Female</label>
              </div>
            </div>
            <input
              type="submit"
              id="send"
              className="input-block"
              value="Sign Up"
              onClick={(x) => SignupHandler(x)}
            />
            <Link to="/signin" id="forgot">
              Registered Already? /Sign In
            </Link>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Signup;
