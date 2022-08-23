import React from "react";
import Product from "./Product/Product";
import Review from "./Review";

const Hero = () => {
<<<<<<< HEAD
  return (
    <div>
      <div class="list-section pt-80 pb-80 ">
        <div class="container">
          <br />
          <br />
          <div class="row">
            <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div class="list-box d-flex align-items-center">
                <div class="list-icon">
                  <i class="fas fa-shipping-fast"></i>
                </div>
                <div class="content">
                  <h3>Free Shipping</h3>
                  <p>With In 7 Days</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div class="list-box d-flex align-items-center">
                <div class="list-icon">
                  <i class="fas fa-phone-volume"></i>
                </div>
                <div class="content">
                  <h3>24/7 Support</h3>
                  <p>Get support all day</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="list-box d-flex justify-content-start align-items-center">
                <div class="list-icon">
                  <i class="fas fa-sync"></i>
                </div>
                <div class="content">
                  <h3>Replacement</h3>
                  <p> Guarantee 1 Year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Product />
=======
    return (
        <div>

<div class="list-section pt-80 pb-80 ">
                <div class="container">
                    <br />
                    <br />
                    <div class="row">
                        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <div class="list-box d-flex align-items-center">
                                <div class="list-icon">
                                    <i class="fas fa-shipping-fast"></i>
                                </div>
                                <div class="content">
                                    <h3>Free Shipping</h3>
                                    <p>With In 7 Days</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <div class="list-box d-flex align-items-center">
                                <div class="list-icon">
                                    <i class="fas fa-phone-volume"></i>
                                </div>
                                <div class="content">
                                    <h3>24/7 Support</h3>
                                    <p>Get support all day</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="list-box d-flex justify-content-start align-items-center">
                                <div class="list-icon">
                                    <i class="fas fa-sync"></i>
                                </div>
                                <div class="content">
                                    <h3>Replacement</h3>
                                    <p> Guarantee 1 Year</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Product />

            <section class="cart-banner pt-100 pb-100">
                <div class="container">
                    <div class="row clearfix">

                        <div class="image-column col-lg-6">
                            <div class="image">

                                <img className='img-fluid' src="assets/img/gamming.jpg" alt="" />
                            </div>
                        </div>
>>>>>>> b17505ff67e351b135f1ce7a2e62fa6c6a4c5b76

      <section class="cart-banner pt-100 pb-100">
        <div class="container">
          <div class="row clearfix">
            <div class="image-column col-lg-6">
              <div class="image">
                <img
                  className="img-fluid"
                  src="assets/img/gamming.jpg"
                  alt=""
                />
              </div>
            </div>

            <div class="content-column col-lg-6">
              <h3>
                <span class="orange-text">1080 P</span> Normal Setting{" "}
              </h3>
              <h4>60 FPS Approx </h4>
              <div class="text">Powerfull Gaming CPU Grand Theft Auto V </div>

              <div class="time-counter">
                <div class="time-countdown clearfix" data-countdown="2020/2/01">
                  <div class="counter-column">
                    <div class="inner">
                      <span class="count">1080 P</span> Normal Setting
                    </div>
                  </div>
                  <div class="counter-column">
                    <div class="inner">
                      <span class="count">60 FPS</span>Approx{" "}
                    </div>
                  </div>
                </div>
              </div>
              <a href="/" class="cart-btn mt-3">
                <i class="fas fa-shopping-cart"></i> Shop Now
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
