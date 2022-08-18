import React from 'react'
import Product from './Product/Product'

const Hero = () => {
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
                                <div class="price-box">
                                    <div class="inner-price">
                                        <span class="price">
                                            <strong>30%</strong> <br /> off per kg
                                        </span>
                                    </div>
                                </div>
                                <img src="assets/img/a.jpg" alt="" />
                            </div>
                        </div>

                        <div class="content-column col-lg-6">
                            <h3><span class="orange-text">Deal</span> of the month</h3>
                            <h4>Hikan Strwaberry</h4>
                            <div class="text">Quisquam minus maiores repudiandae nobis, minima saepe id, fugit ullam similique!
                                Beatae, minima quisquam molestias facere ea. Perspiciatis unde omnis iste natus error sit
                                voluptatem accusant</div>

                            <div class="time-counter">
                                <div class="time-countdown clearfix" data-countdown="2020/2/01">
                                    <div class="counter-column">
                                        <div class="inner"><span class="count">00</span>Days</div>
                                    </div>
                                    <div class="counter-column">
                                        <div class="inner"><span class="count">00</span>Hours</div>
                                    </div>
                                    <div class="counter-column">
                                        <div class="inner"><span class="count">00</span>Mins</div>
                                    </div>
                                    <div class="counter-column">
                                        <div class="inner"><span class="count">00</span>Secs</div>
                                    </div>
                                </div>
                            </div>
                            <a href="cart.html" class="cart-btn mt-3"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
                        </div>
                    </div>
                </div>
            </section></div>
    )
}

export default Hero