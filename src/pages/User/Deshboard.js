import React from 'react'
import "./Deshboard.css";

const Deshboard = () => {
    return (
        <>
            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">s
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <p>Free Shipping</p>
                                <h1>Product Details</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynav"
                        aria-controls="mynav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand" href="#">
                        <div class="d-flex">
                            <div class="d-flex align-items-center logo bg-purple">
                                <div class="fab fa-joomla h2 text-white"></div>
                            </div>
                            <div class="ms-3 d-flex flex-column">
                                <div class="h4">Furfection</div>
                                <div class="fs-6">My pet App</div>
                            </div>
                        </div>
                    </a>
                    <div class="collapse navbar-collapse" id="mynav">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Categories <span
                                    class="fas fa-th-large px-1"></span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Exclusive</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Collections</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Blogs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <div class="cart bg-purple">
                                        <span class="fas fa-shopping-cart text-white"></span>
                                    </div>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"> <span class="fas fa-user pe-2"></span> Hello Jhon</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div class="container mt-4">
                <div class="row">
                    <div class="col-lg-3 my-lg-0 my-md-1">
                        <div id="sidebar" class="bg-purple">
                            <div class="h4 text-white">Account</div>
                            <ul>
                                <li class="active">
                                    <a href="#" class="text-decoration-none d-flex align-items-start">
                                        <div class="fas fa-box pt-2 me-3"></div>
                                        <div class="d-flex flex-column">
                                            <div class="link">My Account</div>
                                            <div class="link-desc">View & Manage orders and returns</div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-decoration-none d-flex align-items-start">
                                        <div class="fas fa-box-open pt-2 me-3"></div>
                                        <div class="d-flex flex-column">
                                            <div class="link">My Orders</div>
                                            <div class="link-desc">View & Manage orders and returns</div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-decoration-none d-flex align-items-start">
                                        <div class="far fa-address-book pt-2 me-3"></div>
                                        <div class="d-flex flex-column">
                                            <div class="link">Address Book</div>
                                            <div class="link-desc">View & Manage Addresses</div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-decoration-none d-flex align-items-start">
                                        <div class="far fa-user pt-2 me-3"></div>
                                        <div class="d-flex flex-column">
                                            <div class="link">My Profile</div>
                                            <div class="link-desc">Change your profile details & password</div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-decoration-none d-flex align-items-start">
                                        <div class="fas fa-headset pt-2 me-3"></div>
                                        <div class="d-flex flex-column">
                                            <div class="link">Help & Support</div>
                                            <div class="link-desc">Contact Us for help and support</div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-9 my-lg-0 my-1">
                        <div id="main-content" class="bg-white border">
                            <div class="d-flex flex-column">
                                <div class="h5">Hello Jhon,</div>
                                <div>Logged in as: someone@gmail.com</div>
                            </div>
                            <div class="d-flex my-4 flex-wrap">
                                <div class="box me-4 my-1 bg-light">
                                    <img src="https://www.freepnglogos.com/uploads/box-png/cardboard-box-brown-vector-graphic-pixabay-2.png"
                                        alt="" />
                                    <div class="d-flex align-items-center mt-2">
                                        <div class="tag">Orders placed</div>
                                        <div class="ms-auto number">10</div>
                                    </div>
                                </div>
                                <div class="box me-4 my-1 bg-light">
                                    <img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-campus-recreation-university-nebraska-lincoln-30.png"
                                        alt="" />
                                    <div class="d-flex align-items-center mt-2">
                                        <div class="tag">Items in Cart</div>
                                        <div class="ms-auto number">10</div>
                                    </div>
                                </div>
                                <div class="box me-4 my-1 bg-light">
                                    <img src="https://www.freepnglogos.com/uploads/love-png/love-png-heart-symbol-wikipedia-11.png"
                                        alt="" />
                                    <div class="d-flex align-items-center mt-2">
                                        <div class="tag">Wishlist</div>
                                        <div class="ms-auto number">10</div>
                                    </div>
                                </div>
                            </div>
                            <div class="text-uppercase">My recent orders</div>
                            <div class="order my-3 bg-light">
                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="d-flex flex-column justify-content-between order-summary">
                                            <div class="d-flex align-items-center">
                                                <div class="text-uppercase">Order #fur10001</div>
                                                <div class="blue-label ms-auto text-uppercase">paid</div>
                                            </div>
                                            <div class="fs-8">Products #03</div>
                                            <div class="fs-8">22 August, 2020 | 12:05 PM</div>
                                            <div class="rating d-flex align-items-center pt-1">
                                                <img src="https://www.freepnglogos.com/uploads/like-png/like-png-hand-thumb-sign-vector-graphic-pixabay-39.png"
                                                    alt="" /><span class="px-2">Rating:</span>
                                                <span class="fas fa-star"></span>
                                                <span class="fas fa-star"></span>
                                                <span class="fas fa-star"></span>
                                                <span class="fas fa-star"></span>
                                                <span class="far fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <div class="d-sm-flex align-items-sm-start justify-content-sm-between">
                                            <div class="status">Status : Delivered</div>
                                            <div class="btn btn-primary text-uppercase">order info</div>
                                        </div>
                                        <div class="progressbar-track">
                                            <ul class="progressbar">
                                                <li id="step-1" class="text-muted green">
                                                    <span class="fas fa-gift"></span>
                                                </li>
                                                <li id="step-2" class="text-muted green">
                                                    <span class="fas fa-check"></span>
                                                </li>
                                                <li id="step-3" class="text-muted green">
                                                    <span class="fas fa-box"></span>
                                                </li>
                                                <li id="step-4" class="text-muted green">
                                                    <span class="fas fa-truck"></span>
                                                </li>
                                                <li id="step-5" class="text-muted green">
                                                    <span class="fas fa-box-open"></span>
                                                </li>
                                            </ul>
                                            <div id="tracker"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="order my-3 bg-light">
                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="d-flex flex-column justify-content-between order-summary">
                                            <div class="d-flex align-items-center">
                                                <div class="text-uppercase">Order #fur10001</div>
                                                <div class="green-label ms-auto text-uppercase">cod</div>
                                            </div>
                                            <div class="fs-8">Products #03</div>
                                            <div class="fs-8">22 August, 2020 | 12:05 PM</div>
                                            <div class="rating d-flex align-items-center pt-1">
                                                <img src="https://www.freepnglogos.com/uploads/like-png/like-png-hand-thumb-sign-vector-graphic-pixabay-39.png"
                                                    alt="" /><span class="px-2">Rating:</span>
                                                <span class="fas fa-star"></span>
                                                <span class="fas fa-star"></span>
                                                <span class="fas fa-star"></span>
                                                <span class="fas fa-star"></span>
                                                <span class="far fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <div class="d-sm-flex align-items-sm-start justify-content-sm-between">
                                            <div class="status">Status : Delivered</div>
                                            <div class="btn btn-primary text-uppercase">order info</div>
                                        </div>
                                        <div class="progressbar-track">
                                            <ul class="progressbar">
                                                <li id="step-1" class="text-muted green">
                                                    <span class="fas fa-gift"></span>
                                                </li>
                                                <li id="step-2" class="text-muted">
                                                    <span class="fas fa-check"></span>
                                                </li>
                                                <li id="step-3" class="text-muted">
                                                    <span class="fas fa-box"></span>
                                                </li>
                                                <li id="step-4" class="text-muted">
                                                    <span class="fas fa-truck"></span>
                                                </li>
                                                <li id="step-5" class="text-muted">
                                                    <span class="fas fa-box-open"></span>
                                                </li>
                                            </ul>
                                            <div id="tracker"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Deshboard