import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <main className="header_main_body">
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
          <Link>Login</Link>
          <Link>Sign Up</Link>
        </aside>
      </section>
    </main>
  );
};

export default Header;
