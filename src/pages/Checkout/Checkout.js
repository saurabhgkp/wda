import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import validator from "validator";

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
    address: "",
    zip: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    number: "",
    zip: "",
    address: ""
  })

  const getdata = async () => {
    const res = await fetch(
      `https://pcology.onrender.com/googleSheet/getDataById/${id}`,
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
    // e.preventDefault();
    setFromData({ ...fromData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {

    if (!fromData?.name || !fromData?.email || !fromData?.zip || !fromData?.address.length == 0 || fromData?.number.length == 0) {
      toast.error("All Fields are mandatory!!")
    }
    else if (!validator.isEmail(fromData?.email)) {
      toast.error('Invalid email')
    }
    else if (!validator.isMobilePhone(fromData?.number)) {
      toast.error('Invalid phone')
    }
    else {
      console.log("Submit")
      handelonSubmit()
    }

  }

  // console.log(fromData);

  const handelonSubmit = async (e) => {

    let goData = {
      B: fromData.name,
      C: fromData.number,
      D: fromData.address,
      E: fromData.email,
      F: fromData.zip,
      G: pcname,
      H: price,
    };

    const response = await axios.post(
      "https://pcology.onrender.com/orders/Adddata",
      goData
    );
    console.log(response);
    if (response.status == 200) {

      setFromData({
        name: "",
        email: "",
        number: "",
        address: "",
        zip: "",
      })

      setData({})
      toast.success("ruko zara sabr karo")
      navigate("/");
    }

  };

  return (
    <div>
      {" "}
      {/* <div className="top-header-area d-none d-md-block" id="sticker">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 text-center">
              <div className="main-menu-wrap">
                <div className="site-logo">
                  <a href="index.html">
                    <img src="assets/img/logo.png" alt="" />
                  </a>
                </div>

                <nav className="main-menu">
                  <ul>
                    <li className="current-list-item">
                      <a href="#">Home</a>
                      <ul className="sub-menu">
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
                      <ul className="sub-menu">
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
                      <ul className="sub-menu">
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
                      <ul className="sub-menu">
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
                      <div className="header-icons">
                        <a className="shopping-cart" href="cart.html">
                          <i className="fas fa-shopping-cart"></i>
                        </a>
                        <a className="mobile-hide search-bar-icon" href="#">
                          <i className="fas fa-search"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                </nav>
                <a className="mobile-show search-bar-icon" href="#">
                  <i className="fas fa-search"></i>
                </a>
                <div className="mobile-menu"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="search-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <span className="close-btn">
                <i className="fas fa-window-close"></i>
              </span>
              <div className="search-bar">
                <div className="search-bar-tablecell">
                  <h3>Search For:</h3>
                  <input type="text" placeholder="Keywords" />
                  <button type="submit">
                    Search <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>Fresh and Organic</p>
                <h1>Check Out Product</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="checkout-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="checkout-accordion-wrap">
                <div className="accordion" id="accordionExample">
                  <div className="card single-accordion">
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link"
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
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="billing-address-form">
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
                              {error.name && <div className="text-danger">Required</div>}
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
                              {/* {console.log(error.email)} */}
                              {error.email && <div className="text-danger">Required</div>}
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
                              {error.number && <div className="text-danger">Required</div>}
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
                              {error.zip && <div className="text-danger">Required</div>}
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
                              {error.address && <div className="text-danger">Required</div>}
                            </p>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card single-accordion">
                    <div className="card-header" id="headingTwo">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
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
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="shipping-address-form">
                          <p> We Are Currently Operating " Pay on Delivery "</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card single-accordion">
                    <div className="card-header" id="headingThree">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
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
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="card-details">
                          <p>You Get Confirmation Call Soon.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="order-details-wrap">
                <table className="order-details">
                  <thead>
                    <tr>
                      <th>Your order Details</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody className="order-details-body">
                    <tr>
                      <td>{data.Name}</td>
                      <td>₹{data.OldPrice}</td>
                    </tr>
                    <tr>
                      <td>discount</td>
                      <td className="text-danger">- ₹{discount}</td>
                    </tr>
                  </tbody>
                  <tbody className="checkout-details">
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
                  className="btn btn-outline-success btn-lg"
                  type="submit"
                  onClick={validateForm}
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
