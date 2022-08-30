import React from "react";
import Review from "../Review";

const About = () => {
  return (
    <div>
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>24/7 Support Get support all day</p>
                <h1>About Us</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="featured-text">
              <h2 className="pb-3">
                Why <span className="orange-text">Pcology</span>
              </h2>
              <div className="row">
                <div className="col-lg-6 col-md-6 mb-4 mb-md-5">
                  <div className="list-box d-flex">
                    <div className="list-icon">
                      <i className="fas fa-shipping-fast"></i>
                    </div>
                    <div className="content">
                      <h3>Home Delivery</h3>
                      <p>All packages are safely packed & shipped.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-5 mb-md-5">
                  <div className="list-box d-flex">
                    <div className="list-icon">
                      <i className="fas fa-money-bill-alt"></i>
                    </div>
                    <div className="content">
                      <h3>Best Price</h3>
                      <p>
                        We offer the best prices! Just shop from the wide
                        variety available!.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-5 mb-md-5">
                  <div className="list-box d-flex">
                    <div className="list-icon">
                      <i className="fas fa-briefcase"></i>
                    </div>
                    <div className="content">
                      <h3>GENUINE PRODUCTS</h3>
                      <p>All our products are 100% Genuine. Guranteed.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="list-box d-flex">
                    <div className="list-icon">
                      <i className="fas fa-phone-volume"></i>
                    </div>
                    <div className="content">
                      <h3>24/7 Support</h3>
                      <p>Get support all day.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mt-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="section-title">
                                <h3>Our <span className="orange-text">Team</span></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-team-item">
                                <div className="team-bg team-bg-1"></div>
                                <h4>Jimmy Doe <span>Farmer</span></h4>
                                <ul className="social-link-team">
                                    <li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-team-item">
                                <div className="team-bg team-bg-2"></div>
                                <h4>Marry Doe <span>Farmer</span></h4>
                                <ul className="social-link-team">
                                    <li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                            <div className="single-team-item">
                                <div className="team-bg team-bg-3"></div>
                                <h4>Simon Joe <span>Farmer</span></h4>
                                <ul className="social-link-team">
                                    <li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
      <div className="abt-section mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="abt-bg">
                <a
                  href="https://youtu.be/RNQvBeh1G2o"
                  className="video-play-btn popup-youtube"
                >
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="abt-text">
                <p className="top-sub">Since Year 2022</p>
                <h2>
                  We are <span className="orange-text">Pcology</span>
                </h2>
                <p>
                  We have Great amount of experience in Building Gaming PC,
                  Editing PC & Workstation PC for our clients. We build with
                  love and we know what your PC means to you 🖤 Just give us a
                  chance to serve you and get your Dream Gaming PC Build or
                  Editing PC Build from us. So if you’re looking to buy PC
                  online then you’re at the right place.
                </p>
                <p>
                  For best Online PC Build services and prices shop Pcology!
                </p>
                <a href="Contact" className="boxed-btn mt-4">
                  know more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Review />
    </div>
  );
};

export default About;
