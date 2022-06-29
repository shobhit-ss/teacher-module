import React from 'react';
import { Link } from "react-router-dom";


const AuthMenu = () => {
  return (
    <section className="authMenu1">
      <main className="authMenu2">
        <div>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </div>
        <div>About Us</div>
        <div>Explore</div>
        <div>
          <Link className="nav-link" to="/login">
            Register
          </Link>
        </div>
      </main>
    </section>
  );
}

export default AuthMenu