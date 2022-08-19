import React from 'react'
import Review from '../Review'

const About = () => {
    return (
        <div><div class="feature-bg">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7">
                        <div class="featured-text">
                            <h2 class="pb-3">Why <span class="orange-text">Pcology</span></h2>
                            <div class="row">
                                <div class="col-lg-6 col-md-6 mb-4 mb-md-5">
                                    <div class="list-box d-flex">
                                        <div class="list-icon">
                                            <i class="fas fa-shipping-fast"></i>
                                        </div>
                                        <div class="content">
                                            <h3>Home Delivery</h3>
                                            <p>All packages are safely packed & shipped.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 mb-5 mb-md-5">
                                    <div class="list-box d-flex">
                                        <div class="list-icon">
                                            <i class="fas fa-money-bill-alt"></i>
                                        </div>
                                        <div class="content">
                                            <h3>Best Price</h3>
                                            <p>We offer the best prices! Just shop from the wide variety available!.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 mb-5 mb-md-5">
                                    <div class="list-box d-flex">
                                        <div class="list-icon">
                                            <i class="fas fa-briefcase"></i>
                                        </div>
                                        <div class="content">
                                            <h3>GENUINE PRODUCTS</h3>
                                            <p>All our products are 100% Genuine. Guranteed.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="list-box d-flex">
                                        <div class="list-icon">
                                            <i class="fas fa-phone-volume"></i>
                                        </div>
                                        <div class="content">
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
        </div>



            {/* <div class="mt-150">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2 text-center">
                            <div class="section-title">
                                <h3>Our <span class="orange-text">Team</span></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <div class="single-team-item">
                                <div class="team-bg team-bg-1"></div>
                                <h4>Jimmy Doe <span>Farmer</span></h4>
                                <ul class="social-link-team">
                                    <li><a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#" target="_blank"><i class="fab fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="single-team-item">
                                <div class="team-bg team-bg-2"></div>
                                <h4>Marry Doe <span>Farmer</span></h4>
                                <ul class="social-link-team">
                                    <li><a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#" target="_blank"><i class="fab fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                            <div class="single-team-item">
                                <div class="team-bg team-bg-3"></div>
                                <h4>Simon Joe <span>Farmer</span></h4>
                                <ul class="social-link-team">
                                    <li><a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#" target="_blank"><i class="fab fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div class="abt-section mb-150">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <div class="abt-bg">
                                <a href="https://youtu.be/RNQvBeh1G2o" class="video-play-btn popup-youtube"><i
                                    class="fas fa-play"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <div class="abt-text">
                                <p class="top-sub">Since Year 2022</p>
                                <h2>We are <span class="orange-text">Pcology</span></h2>
                                <p>We have Great amount of experience in Building Gaming PC, Editing PC & Workstation PC for our clients. We build with love and we know what your PC means to you 🖤
                                    Just give us a chance to serve you and get your Dream Gaming PC Build or Editing PC Build from us. So if you’re looking to buy PC online then you’re at the right place.
                                </p>
                                <p>For best Online PC Build services and prices shop Pcology!</p>
                                <a href="Contact" class="boxed-btn mt-4">know more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Review />
        </div>
    )
}

export default About