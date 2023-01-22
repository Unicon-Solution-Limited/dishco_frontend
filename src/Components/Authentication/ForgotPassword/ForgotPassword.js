import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext/AuthContext";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { passwordResetEmail } = useAuth();
  const emailRef = useRef();

  // submit user information for reset password
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await passwordResetEmail(emailRef.current.value);
      setMessage("Check your email for further instructions");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };
  return (
    <div>
      <div>
        <h4>Password Reset</h4>
        <form onSubmit={handleSubmit}>
          <div>
            <span id="basic-addon1">@</span>
            <input
              required
              ref={emailRef}
              type="email"
              className="form-control"
              placeholder="Your Email"
              aria-label="Your Email"
              aria-describedby="basic-addon1"
            />
          </div>

          <input
            type="submit"
            disabled={loading}
            value={`${loading ? "Sending" : "Submit"}`}
          />
        </form>
      </div>

      {/* Message for user */}
      <p
        style={{
          color: "green",
          textAlign: "center",
          fontWeight: "700",
          paddingTop: "10px",
        }}
      >
        {message}
      </p>
      <p style={{ color: "red", textAlign: "center", fontWeight: "700" }}>
        {error}
      </p>

      <div>
        <p>Already have an account ?</p>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
