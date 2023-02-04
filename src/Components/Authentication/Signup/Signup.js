import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Signup.css";
import { useAuth } from "../AuthContext/AuthContext";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";

const Signup = () => {
  let history = useHistory();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signup, setIsNavigate } = useAuth();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  // navigation changer
  useEffect(() => {
    setIsNavigate(true);
  });

  // sign with email and password
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value.length < 6) {
      return setError("password must be at least 6 characters");
    }
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Password does not matched!");
    }
    try {
      setError("");
      setLoading(true);
      await signup(
        nameRef.current.value,
        emailRef.current.value,
        passwordRef.current.value
      );
      history.push("/login");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <>
      <Header />
      <section className="container my-5">
        <h4 className="text-center">Create an account</h4>
        <form onSubmit={handleSubmit} className="auth_form">
          <div>
            <div className="">
              <label htmlFor="displayName" className="form-label">
                Your Name
              </label>
              <input
                ref={nameRef}
                required
                type="text"
                className="form-control"
                id="displayName"
                aria-describedby="nameHelp"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                ref={emailRef}
                required
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                ref={passwordRef}
                required
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <div className="">
              <label
                htmlFor="exampleInputConfirmPassword"
                className="form-label"
              >
                Confirm password
              </label>
              <input
                ref={confirmPasswordRef}
                required
                type="password"
                className="form-control"
                id="exampleInputConfirmPassword"
              />
            </div>
          </div>
          <p className="error">{error}</p>
          <input
            type="submit"
            disabled={loading}
            value="Sign up"
            className="MyBtn auth_btn d-grid mx-auto"
          />
        </form>

        <div className="auth_footer">
          <p>Already have an account?</p>
          <Link to="/login" className="MyBtn auth_btn">
            Login
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Signup;
