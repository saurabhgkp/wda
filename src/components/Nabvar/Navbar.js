import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ position: "sticky", top: "0", zIndex: "2" }}>
      <div class="top-header-area" id="sticker">
        <div class="container-fluid hero-area hero-bg mb-4">
          <div class="row">
            <div class="col-lg-12 col-sm-12 text-center">
              <div class="main-menu-wrap">
                <div class="site-logo">
                  <Link to="/">
                    <h2 className="text-white m-2">PCOLOGY</h2>
                    {/* <img src="assets/img/pcology1.png" alt="" /> */}
                  </Link>
                </div>
                <nav class="main-menu">
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <ul>
                    <li class="current-list-item">
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <Link to="/About">About</Link>
                    </li>
                    <li>
                      <a href="#">Pages</a>
                      <ul class="sub-menu">
                        <li>
                          <a href="404.html">404 page</a>
                        </li>
                        <li>
                          <a href="/About">About</a>
                        </li>
                        <li>
                          <a href="/Cart">Cart</a>
                        </li>
                        <li>
                          <a href="/Checkout">Check Out</a>
                        </li>
                        <li>
                          <a href="/Contact">Contact</a>
                        </li>
                        <li>
                          <a href="news.html">News</a>
                        </li>
                        <li>
                          <a href="shop.html">Shop</a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a href="/Contact">Contact</a>
                    </li>
                    <li>
                      <a href="/SingleProduct">SingleProduct</a>
                    </li>
                    <li>
                      <a></a>
                    </li>
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
