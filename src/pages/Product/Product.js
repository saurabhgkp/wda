import { Link } from "react-router-dom";

import React from "react";
const Product = () => {
  const [data, setData] = React.useState("");
  React.useEffect(() => {
    fetch("https://pcology-api.herokuapp.com/googleSheet/getAllData")
      .then((res) => res.json())
      .then((data) => {
        //  console.log(data.Data);
        setData(data.Data);
      });
  }, []);

  return (
    <div>
      {" "}
      <div className="product-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="section-title">
                <h3>
                  <span className="orange-text">Our</span> Products
                </h3>
              </div>
            </div>
          </div>

          <div className="row">
            {Object.keys(data).map((item, index) => {
              return (
                <>
                  {data[item].id ? (
                    <div className="col-lg-4 col-md-6  offset-md-3 offset-lg-0 text-center">
                      <div className="single-product-item">
                        <div className="product-image">
                          <img src={data[item].Image} alt="pc" />
                        </div>
                        <h3>{data[item].Name}</h3>
                        <p className="">{data[item].Title} </p>
                        <h4 className="product-price">
                          ₹{data[item].Price}{" "}
                          <del className="product-old-price">
                            ₹{data[item].OldPrice}
                          </del>
                        </h4>
                        <Link to={`SingleProduct/${data[item].id}`}>
                          <a className="cart-btn">
                            <i className="fas fa-shopping-cart"></i> Shop Now
                          </a>
                        </Link>
                        <div className=" row p-3"  >
                          <div className="shopping-cart col ml" style={
                            {
                              color: "#F28123"
                            }}>
                            <a className="cart-btn"><i
                              class=" fas fa-shopping-cart"></i> Add</a> </div><div className="shopping-cart col mr">
                            <a className="cart-btn"
                            >
                              <i
                                class=" fa fa-heart"></i>Favorite
                              {/* <i class="fa fa-heart-o" ></i>*/}</a></div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
