import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useAuth } from "../AuthContext/AuthContext";
import "../Signup/Signup.css";
import Header from "./../../Shared/Header/Header";
import Footer from "./../../Shared/Footer/Footer";

const Login = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login, signWithGoogle, setIsNavigate } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();

  // react router dom path detect and go there
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  // navigation changer
  useEffect(() => {
    setIsNavigate(true);
  });

  // sign with email and password
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);

      //get jwt token
      const currentUser = {
        email: emailRef.current.value,
      };
      console.log(currentUser);

      fetch(`${process.env.REACT_APP_BACKEND_URL}/jwt`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            localStorage.setItem("dishco-token", data.token);
            history.replace(from);
          }
        });
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  // sign with google
  const handleGoogleSignup = async () => {
    try {
      setError("");
      setLoading(true);
      await signWithGoogle();
      history.replace(from);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };
  return (
    <>
      <Header />
      <section className="container my-5">
        <h4 className="text-center">Login</h4>
        <form onSubmit={handleSubmit} className="auth_form">
          <div>
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              ref={emailRef}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              ref={passwordRef}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>
          <Link to="/forgotPassword">Forget Password ?</Link>
          {/* error showing */}
          <p className="error mb-2">{error}</p>

          <button type="submit" className="mt-1 MyBtn auth_btn d-grid mx-auto">
            {loading ? (
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              "Login"
            )}
          </button>
        </form>
        <p className="text-center mt-2">-------Or-------</p>
        {/* google sign button*/}
        {/* <div onClick={handleGoogleSignup} className="google_auth">
          <button>
            <img
              src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1676276581/Frontend_images/logo/f9v6yxevk0isj4d8k4w1.svg"
              alt="google"
              loading="lazy"
            />
            <span>Continue with google</span>
          </button>
        </div> */}

        <div className="auth_footer">
          <p>Do not have an account?</p>
          <Link to="/signup" className="MyBtn auth_btn">
            Sign up
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
