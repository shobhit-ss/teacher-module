import React from "react";
import AuthMenu from "./AuthMenu";
import LogoBlock from "./LogoBlock";
import "./navbar.css";

const Navbar = () => {
  return (
    <section className="navbarBlock1">
      <main className="navbarBlock2">
        <LogoBlock />
        <AuthMenu />
      </main>
    </section>
  );
};

export default Navbar;
