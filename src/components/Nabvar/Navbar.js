import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        position: "sticky",
        top: "0",
        zIndex: "10",
        //backgroundColor: "#051922",
      }}
    >
      <div
        class="top-header-area d-none d-md-block"
        style={{
          backgroundColor: "#051922",
        }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-sm-12 text-center">
              <div class="main-menu-wrap">
                <div class="site-logo">
                  <Link to="/">
                    <img src="assets/img/pcology1.png" alt="" />
                  </Link>
                </div>

                <nav class="main-menu">
                  <ul>
                    <li class="current-list-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/About">About</Link>
                    </li>

                    <li>
                      <Link to="/Contact">Contact</Link>
                    </li>
                    <li>
                      <Link to="/">Shop</Link>
                    </li>

                    <li></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
