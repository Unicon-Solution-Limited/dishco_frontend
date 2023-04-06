import React from "react";
import { useState } from "react";
import TopbarNav from "../../../Layouts/TopbarNav";
import SidebarNav from "../../../Layouts/SidebarNav";
import "./CouponGen.css";

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
    <>
      <TopbarNav />
      <div id="layoutSidenav">
        <SidebarNav />
        <div id="layoutSidenav_content">
          <main className="customer_point_wallet_main">
            <button onClick={generateToken} className="btn btn-info mb-4">
              Generate Token
            </button>
            <section className="wallet_top_section">
              <aside>
                <p>Token: {token && <strong> {token}</strong>}</p>
                <button className="btn MyBtn">Use</button>
              </aside>
              <aside>
                <p>Point Deduct</p>
                <p>1500</p>
              </aside>
              <aside>
                <p>Total Points</p>
                <p>1500</p>
              </aside>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default CouponGen;
