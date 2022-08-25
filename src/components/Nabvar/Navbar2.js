import React from "react";
import { Link } from "react-router-dom";
const Navbar2 = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark "
      style={{ position: "sticky", top: "0", zIndex: "10", backgroundColor: "#051922" }}
    >
      <Link className="navbar-brand" to="/">
        <img src="assets/img/pcology1.png" alt="PCOLOGY" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/About">
              About
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/Contact">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Shop
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar2;
