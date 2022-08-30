import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Checkout = () => {
  let navigate = useNavigate();
  const { id } = useParams("");
  const [pcname, setPcname] = useState("");
  const [price, setprice] = useState("");
  const [data, setData] = useState("");
  const [fromData, setFromData] = useState({
    name: "",
    email: "",
    number: "",
    addres: "",
    zip: "",
  });

  const getdata = async () => {
    const res = await fetch(
      `https://pcology-api.herokuapp.com/googleSheet/getDataById/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();

    setData(data.Data[0]);
  };

  useEffect(() => {
    setPcname(data.Name);
    setprice(data.Price);
    getdata();
  }, []);
  const discount = data.OldPrice - data.Price;
  ////////////////////////////SEND DATA

  const handelChange = (e) => {
    e.preventDefault();
    setFromData({ ...fromData, [e.target.name]: e.target.value });
  };

  // console.log(fromData);

  const handelonSubmit = async (e) => {
    let goData = {
      B: fromData.name,
      C: fromData.number,
      D: fromData.addres,
      E: fromData.email,
      F: fromData.zip,

      G: pcname,
      H: price,
    };

    const response = await axios.post(
      "https://pcology-api.herokuapp.com/orders/Adddata",
      goData
    );
    navigate("/");
  };

  return (
    <div>
      {" "}
      {/* <div class="top-header-area d-none d-md-block" id="sticker">
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
                    <li class="current-list-item">
                      <a href="#">Home</a>
                      <ul class="sub-menu">
                        <li>
                          <a href="index.html">Static Home</a>
                        </li>
                        <li>
                          <a href="index_2.html">Slider Home</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="#">Pages</a>
                      <ul class="sub-menu">
                        <li>
                          <a href="404.html">404 page</a>
                        </li>
                        <li>
                          <a href="about.html">About</a>
                        </li>
                        <li>
                          <a href="cart.html">Cart</a>
                        </li>
                        <li>
                          <a href="checkout.html">Check Out</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                        <li>
                          <a href="news.html">News</a>
                        </li>
                        <li>
                          <a href="shop.html">Shop</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="news.html">News</a>
                      <ul class="sub-menu">
                        <li>
                          <a href="news.html">News</a>
                        </li>
                        <li>
                          <a href="single-news.html">Single News</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                    <li>
                      <a href="shop.html">Shop</a>
                      <ul class="sub-menu">
                        <li>
                          <a href="shop.html">Shop</a>
                        </li>
                        <li>
                          <a href="checkout.html">Check Out</a>
                        </li>
                        <li>
                          <a href="single-product.html">Single Product</a>
                        </li>
                        <li>
                          <a href="cart.html">Cart</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div class="header-icons">
                        <a class="shopping-cart" href="cart.html">
                          <i class="fas fa-shopping-cart"></i>
                        </a>
                        <a class="mobile-hide search-bar-icon" href="#">
                          <i class="fas fa-search"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                </nav>
                <a class="mobile-show search-bar-icon" href="#">
                  <i class="fas fa-search"></i>
                </a>
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
              <span class="close-btn">
                <i class="fas fa-window-close"></i>
              </span>
              <div class="search-bar">
                <div class="search-bar-tablecell">
                  <h3>Search For:</h3>
                  <input type="text" placeholder="Keywords" />
                  <button type="submit">
                    Search <i class="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div class="breadcrumb-section breadcrumb-bg">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 text-center">
              <div class="breadcrumb-text">
                <p>Fresh and Organic</p>
                <h1>Check Out Product</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="checkout-section mt-150 mb-150">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="checkout-accordion-wrap">
                <div class="accordion" id="accordionExample">
                  <div class="card single-accordion">
                    <div class="card-header" id="headingOne">
                      <h5 class="mb-0">
                        <button
                          class="btn btn-link"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Billing Address
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapseOne"
                      class="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">
                        <div class="billing-address-form">
                          <form>
                            <p>
                              <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                required=""
                                onChange={handelChange}
                                value={data.name}
                              />
                            </p>
                            <p>
                              <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                required=""
                                onChange={handelChange}
                                value={data.email}
                              />
                            </p>
                            <p>
                              <input
                                type="tel"
                                placeholder="Phone"
                                name="number"
                                required=""
                                onChange={handelChange}
                                value={data.number}
                              />
                            </p>
                            <p>
                              <input
                                type="text"
                                placeholder="Pin Code"
                                name="zip"
                                required=""
                                onChange={handelChange}
                                value={data.zip}
                              />
                            </p>
                            <p>
                              <textarea
                                id="bill"
                                cols="30"
                                rows="10"
                                placeholder="Full Address "
                                name="addres"
                                required=""
                                onChange={handelChange}
                                value={data.addres}
                              ></textarea>
                            </p>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card single-accordion">
                    <div class="card-header" id="headingTwo">
                      <h5 class="mb-0">
                        <button
                          class="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          We Are Currently Operating On " Pay on Delivery "
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseTwo"
                      class="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">
                        <div class="shipping-address-form">
                          <p> We Are Currently Operating " Pay on Delivery "</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card single-accordion">
                    <div class="card-header" id="headingThree">
                      <h5 class="mb-0">
                        <button
                          class="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          You Get Confirmation Call Soon.
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseThree"
                      class="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">
                        <div class="card-details">
                          <p>You Get Confirmation Call Soon.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="order-details-wrap">
                <table class="order-details">
                  <thead>
                    <tr>
                      <th>Your order Details</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody class="order-details-body">
                    <tr>
                      <td>{data.Name}</td>
                      <td>₹{data.OldPrice}</td>
                    </tr>
                    <tr>
                      <td>discount</td>
                      <td className="text-danger">- ₹{discount}</td>
                    </tr>
                  </tbody>
                  <tbody class="checkout-details">
                    <tr>
                      <td>Shipping</td>
                      <td>₹ 00</td>
                    </tr>
                    <tr>
                      <td className="text-success ">
                        {" "}
                        <b>Total</b>
                      </td>
                      <td className="text-success ">
                        {" "}
                        <b> ₹{data.Price}</b>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <button
                  class="btn btn-outline-success btn-lg"
                  type="submit"
                  onClick={handelonSubmit}
                >
                  <b>Place Order</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
