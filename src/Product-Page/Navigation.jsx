import React from "react";
import "./page.css";
const Navigation = () => {
  return (
    <>
      <div className="container">
        <img src="../public/brand_logo.png" alt="" />

        <nav className="navi">
          <li>MENU</li>
          <li>LOCATION</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </nav>

        <button>Login</button>
      </div>
    </>
  );
};

export default Navigation;
