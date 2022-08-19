import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div class="top-header-area" id="sticker">
                <div class="container-fluid hero-area hero-bg mb-4">
                    <div class="row">
                        <div class="col-lg-12 col-sm-12 text-center">
                            <div class="main-menu-wrap">

                                <div class="site-logo">
                                    <a href="/">
                                        <h2 className='text-white m-2'>PCOLOGY</h2>
                                        {/* <img src="assets/img/pcology1.png" alt="" /> */}
                                    </a>
                                </div>


                                <nav class="main-menu">
                                    <ul>
                                        <li class="current-list-item"><a href="/">Home</a>

                                        </li>
                                        <li><a href="/About">About</a></li>
                                        <li><a href="#">Pages</a>
                                            <ul class="sub-menu">
                                                <li><a href="404.html">404 page</a></li>
                                                <li><a href="/About">About</a></li>
                                                <li><a href="/Cart">Cart</a></li>
                                                <li><a href="/Checkout">Check Out</a></li>
                                                <li><a href="/Contact">Contact</a></li>
                                                <li><a href="news.html">News</a></li>
                                                <li><a href="shop.html">Shop</a></li>
                                            </ul>
                                        </li>

                                        <li><a href="/Contact">Contact</a></li>
                                        <li><a></a>
                                            {/* <ul class="sub-menu">
                                                <li><a href="shop.html">Shop</a></li>
                                                <li><a href="checkout.html">Check Out</a></li>
                                                <li><a href="single-product.html">Single Product</a></li>
                                                <li><a href="cart.html">Cart</a></li>
                                            </ul> */}
                                        </li>
                                        {/* <li>
                                            <div class="header-icons">
                                                <a class="shopping-cart" href="cart.html"><i
                                                    class="fas fa-shopping-cart"></i></a>
                                                <a class="mobile-hide search-bar-icon" href="#"><i
                                                    class="fas fa-search"></i></a>
                                            </div>
                                        </li> */}
                                    </ul>
                                </nav>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
        </div>
    )
}

export default Navbar