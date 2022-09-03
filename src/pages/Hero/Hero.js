import React from "react";
import Product from "../Product/Product";
import Review from "../../components/Review";

const Hero = () => {
  return (
    <div>
      <div className="list-section pt-80 pb-80 ">
        <div className="container">
          <br />
          <br />
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="list-box d-flex align-items-center">
                <div className="list-icon">
                  <i className="fas fa-shipping-fast"></i>
                </div>
                <div className="content">
                  <h3>Free Shipping</h3>
                  <p>With In 7 Days</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="list-box d-flex align-items-center">
                <div className="list-icon">
                  <i className="fas fa-phone-volume"></i>
                </div>
                <div className="content">
                  <h3>24/7 Support</h3>
                  <p>Get support all day</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="list-box d-flex justify-content-start align-items-center">
                <div className="list-icon">
                  <i className="fas fa-sync"></i>
                </div>
                <div className="content">
                  <h3>Replacement</h3>
                  <p> Guarantee 1 Year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Product />

      <section className="cart-banner pt-100 pb-100">
        <div className="container">
          <div className="row clearfix">
            <div className="image-column col-lg-6">
              <div className="image">
                <img
                  className="img-fluid"
                  src="assets/img/gamming.jpg"
                  alt="gamming pc"
                />
              </div>
            </div>

            <div className="content-column col-lg-6">
              <h3>
                <span className="orange-text">1080 P</span> Normal Setting{" "}
              </h3>
              <h4>60 FPS Approx </h4>
              <div className="text">Powerfull Gaming CPU Grand Theft Auto V </div>

              <div className="time-counter">
                <div className="time-countdown clearfix" data-countdown="2020/2/01">
                  <div className="counter-column">
                    <div className="inner">
                      <span className="count">1080 P</span> Normal Setting
                    </div>
                  </div>
                  <div className="counter-column">
                    <div className="inner">
                      <span className="count">60 FPS</span>Approx{" "}
                    </div>
                  </div>
                </div>
              </div>
              <a href="/" className="cart-btn mt-3">
                <i className="fas fa-shopping-cart"></i> Shop Now
              </a>
            </div>
          </div>
        </div>
      </section>
      <Review />
    </div>
  );
};

export default Hero;
