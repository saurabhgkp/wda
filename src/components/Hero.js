import React from 'react'
import Product from './Product/Product'

const Hero = () => {
    return (
        <div>


            <Product />

            <section class="cart-banner pt-100 pb-100">
                <div class="container">
                    <div class="row clearfix">

                        <div class="image-column col-lg-6">
                            <div class="image">

                                <img className='img-fluid' src="assets/img/gamming.jpg" alt="" />
                            </div>
                        </div>

                        <div class="content-column col-lg-6">
                            <h3><span class="orange-text">1080 P</span> Normal Setting </h3>
                            <h4>60 FPS Approx </h4>
                            <div class="text">Powerfull Gaming CPU Grand Theft Auto V </div>

                            <div class="time-counter">
                                <div class="time-countdown clearfix" data-countdown="2020/2/01">
                                    <div class="counter-column">
                                        <div class="inner"><span class="count">1080 P</span> Normal Setting</div>
                                    </div>
                                    <div class="counter-column">
                                        <div class="inner"><span class="count">60 FPS</span>Approx </div>
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