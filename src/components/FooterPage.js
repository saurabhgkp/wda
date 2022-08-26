import React from "react";
import { Link } from "react-router-dom";
const FooterPage = () => {
  return (
    <div>
      <div class="footer-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="footer-box about-widget">
                <h2 class="widget-title">About us</h2>
                <p>
                  We are dedicated to our customers. We have great experience in
                  building computers for our clients. We deal in all kinds of
                  Gaming & Productivity PC Builds and we suggest our customers
                  the best they should get according to their needs and
                  requirements..
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="footer-box get-in-touch">
                <h2 class="widget-title">Get in Touch</h2>
                <ul>
                  <li>Near Ashoka Gas Godam Singhariya,Kunraghat, Gorakhpur</li>
                  <li>pcologyofficial@gmail.com</li>
                  <li>+91 6393647326</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="footer-box pages">
                <h2 class="widget-title">Pages</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/About">About</Link>
                  </li>
                  <li>
                    <Link to="/">Shop</Link>
                  </li>

                  <li>
                    <Link to="/Contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="footer-box subscribe">
                <h2 class="widget-title">Subscribe</h2>
                <p>Subscribe to our mailing list to get the latest updates.</p>
                <form action="index.html">
                  <input type="email" placeholder="Email" />
                  <button type="submit">
                    <i class="fas fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-12">
              <p>
                Copyrights &copy; 2022 -{" "}
                <a href="https://pcology.in/">Pcology</a>, All Rights Reserved.
                <br />
              </p>
            </div>
            <div class="col-lg-6 text-right col-md-12">
              <div class="social-icons">
                <ul>
                  <li>
                    <a href="#" target="_blank">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/invites/contact/?i=1kofhxkj77wfm&utm_content=p43j7ct" target="_blank">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
