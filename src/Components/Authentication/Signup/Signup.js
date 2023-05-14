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
  const numberRef = useRef();
  const addressRef = useRef();

  // navigation changer
  useEffect(() => {
    setIsNavigate(true);
  });

  // sign with email and password
  //without user details
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

      // Firebase signup succeeded, get jwt token
      const currentUser = {
        email: emailRef.current.value,
      };

      const response = await fetch("https://server.dishcofood.com/jwt", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      });

      if (response.ok) {
        const data = await response.json();

        // store jwt token in local storage
        localStorage.setItem("dishco-token", data.token);
        setLoading(false);

        // navigate to home page
        history.push("/");
      } else {
        throw new Error("Failed to get jwt token");
      }
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  //signup with user details
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (passwordRef.current.value.length < 6) {
  //     return setError("password must be at least 6 characters");
  //   }
  //   if (passwordRef.current.value !== confirmPasswordRef.current.value) {
  //     return setError("Password does not matched!");
  //   }
  //   try {
  //     setError("");
  //     setLoading(true);
  //     await signup(
  //       nameRef.current.value,
  //       emailRef.current.value,
  //       passwordRef.current.value
  //     );

  //     // Firebase signup succeeded, get jwt token
  //     const currentUser = {
  //       email: emailRef.current.value,
  //     };

  //     const response = await fetch("https://server.dishcofood.com/jwt", {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify(currentUser),
  //     });

  //     if (response.ok) {
  //       const data = await response.json();

  //       // store jwt token in local storage
  //       localStorage.setItem("dishco-token", data.token);

  //       const userExtraData = {
  //         phoneNumber: numberRef?.current?.value,
  //         customerAdress: addressRef?.current?.value,
  //       };

  //       const responseUserDetails = await fetch(
  //         "https://server.dishcofood.com/userDetails",
  //         {
  //           method: "POST",
  //           headers: {
  //             "content-type": "application/json",
  //           },
  //           body: JSON.stringify(userExtraData),
  //         }
  //       );

  //       if (responseUserDetails.ok) {
  //         setLoading(false);

  //         // navigate to home page
  //         history.push("/");
  //       } else {
  //         throw new Error("Failed to post user details");
  //       }
  //     } else {
  //       throw new Error("Failed to get jwt token");
  //     }
  //   } catch (err) {
  //     setError(err.message);
  //     setLoading(false);
  //   }
  // };

  return (
    <>
      <Header />
      <section className="container-fluid my-5">
        <h4 className="text-center">Create an account</h4>
        <form onSubmit={handleSubmit} className="auth_form">
          <div className="row">
            <div className="col-md-12 mb-2">
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

            {/* <div className="col-md-6 mb-2">
              <label htmlFor="displayNumber" className="form-label">
                Contact Number
              </label>
              <input
                ref={numberRef}
                type="number"
                className="form-control"
                id="displayNumber"
                aria-describedby="phoneNumber"
                required
              />
            </div> */}

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

            {/* <div className="mb-2">
              <label htmlFor="addressInput" className="form-label">
                Your address
              </label>
              <input
                ref={addressRef}
                required
                type="text"
                className="form-control"
                id="addressInput"
                aria-describedby="address"
              />
            </div> */}

            <div className="col-md-6 mb-2">
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

            <div className="col-md-6 mb-2">
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
          <p className="error mb-2">{error}</p>

          <button type="submit" className="MyBtn auth_btn d-grid mx-auto">
            {loading ? (
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              "Sign up"
            )}
          </button>
        </form>
        <p className="text-center mt-2">-------Or-------</p>
        {/* google sign button*/}
        {/* <div className="google_auth">
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
