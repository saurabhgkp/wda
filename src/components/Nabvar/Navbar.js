import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div class="top-header-area" id="sticker">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-sm-12 text-center">
                            <div class="main-menu-wrap">

                                <div class="site-logo">
                                    <a href="index.html">
                                        <img src="assets/img/logo.png" alt="" />
                                    </a>
                                </div>


                                <nav class="main-menu">
                                    <ul>
                                        <li class="current-list-item"><a href="#">Home</a>
                                            <ul class="sub-menu">
                                                <li><a href="index.html">Static Home</a></li>
                                                <li><a href="index_2.html">Slider Home</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="about.html">About</a></li>
                                        <li><a href="#">Pages</a>
                                            <ul class="sub-menu">
                                                <li><a href="404.html">404 page</a></li>
                                                <li><a href="about.html">About</a></li>
                                                <li><a href="cart.html">Cart</a></li>
                                                <li><a href="checkout.html">Check Out</a></li>
                                                <li><a href="contact.html">Contact</a></li>
                                                <li><a href="news.html">News</a></li>
                                                <li><a href="shop.html">Shop</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="news.html">News</a>
                                            <ul class="sub-menu">
                                                <li><a href="news.html">News</a></li>
                                                <li><a href="single-news.html">Single News</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">Contact</a></li>
                                        <li><a href="shop.html">Shop</a>
                                            <ul class="sub-menu">
                                                <li><a href="shop.html">Shop</a></li>
                                                <li><a href="checkout.html">Check Out</a></li>
                                                <li><a href="single-product.html">Single Product</a></li>
                                                <li><a href="cart.html">Cart</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div class="header-icons">
                                                <a class="shopping-cart" href="cart.html"><i
                                                    class="fas fa-shopping-cart"></i></a>
                                                <a class="mobile-hide search-bar-icon" href="#"><i
                                                    class="fas fa-search"></i></a>
                                            </div>
                                        </li>
                                    </ul>
                                </nav>
                                <a class="mobile-show search-bar-icon" href="#"><i class="fas fa-search"></i></a>
                                <div class="mobile-menu"></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="search-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <span class="close-btn"><i class="fas fa-window-close"></i></span>
                            <div class="search-bar">
                                <div class="search-bar-tablecell">
                                    <h3>Search For:</h3>
                                    <input type="text" placeholder="Keywords" />
                                    <button type="submit">Search <i class="fas fa-search"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="hero-area hero-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-9 offset-lg-2 text-center">
                            <div class="hero-text">
                                <div class="hero-text-tablecell">
                                    <p class="subtitle">Fresh & Organic</p>
                                    <h1>Delicious Seasonal Fruits</h1>
                                    <div class="hero-btns">
                                        <a href="shop.html" class="boxed-btn">Fruit Collection</a>
                                        <a href="contact.html" class="bordered-btn">Contact Us</a>
                                    </div>
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