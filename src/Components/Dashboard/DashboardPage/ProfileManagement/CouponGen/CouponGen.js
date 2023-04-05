import React from "react";
import { useState } from "react";

const CouponGen = () => {
  const [token, setToken] = useState("");

  function generateToken() {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setToken(result);
  }

  return (
    <div className="container">
      <button onClick={generateToken} className="btn btn-primary">
        {" "}
        Generate Token
      </button>
      <br />
      {token && <strong> {token}</strong>}
    </div>
  );
};

export default CouponGen;
