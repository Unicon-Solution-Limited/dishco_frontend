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
            <section className="wallet_top_section">
              <aside>
                <p>{token && <strong> {token}</strong>}</p>
              </aside>
              <aside>
                <p>Point Deduct</p>
                <p>1500</p>
              </aside>
              <aside>
                <p>Usable Point</p>
                <p>1500</p>
              </aside>
            </section>

            <button className="btn apply_token_btn">Apply Token</button>
            <button onClick={generateToken} className="btn Token_generate_btn">
              Generate Token
            </button>
          </main>
        </div>
      </div>
    </>
  );
};

export default CouponGen;
