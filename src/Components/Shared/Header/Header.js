import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <main className="header_main_body">
      <div className="container">
        <section className="upper_header">
          <aside className="contact_number">
            <span>
              <i class="bi bi-telephone-fill"></i> +880 1810-098389
            </span>
            <span>
              <i class="bi bi-envelope-fill"></i> dishco@uniconbd.com
            </span>
          </aside>
          <aside className="auth_links">
            <Link className="myLinks">Login</Link> /{" "}
            <Link className="myLinks">Sign Up</Link>
          </aside>
        </section>
        <section className="lower_header row">
          <aside className="col-2"></aside>
          <aside className="col-8"></aside>
          <aside className="col-2"></aside>
        </section>
      </div>
    </main>
  );
};

export default Header;
