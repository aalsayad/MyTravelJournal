import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-brand">
          <img className="logo" src="./images/MyTravelJournalSVG.png" />
          <div className="logo-text">
            <h1>MY TRAVEL JOURNAL</h1>
            <p>scrimba react solo project two</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
