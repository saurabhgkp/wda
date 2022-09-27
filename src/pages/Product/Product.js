import { Link } from "react-router-dom";

import React from "react";
const Product = () => {
  const [data, setData] = React.useState("");
  // const handelonUpdate = async (e) => {
  //   console.log(data);
  //   // e.preventDefault();

  //   const res = await axios.put('http://localhost:4000/users/addItem', data, {
  //     params: {
  //       email: email
  //     },
  //   });
  // }
  React.useEffect(() => {
    fetch("http://localhost:4000/product/showAllProduct")
      .then((res) => res.json())
      .then((data) => {

        setData(data.data);
      });
  }, []);
  console.log("========", data && data[0]._id);
  return (
    <div>

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
            {data && data.map((item, index) => {
              return (
                <>
                  {item._id ? (
                    <div className="col-lg-4 col-md-6  offset-md-3 offset-lg-0 text-center">
                      <div className="single-product-item">
                        <div className="product-image">
                          <img src={item.image} alt="pc" />
                        </div>
                        <h3>{item.name}</h3>
                        <p className="">{item.title} </p>
                        <h4 className="product-price">
                          ₹{item.price}{" "}
                          <del className="product-old-price">
                            ₹{item.old_price}
                          </del>
                        </h4>
                        <Link to={`SingleProduct/${item._id}`}>
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
                              class=" fas fa-shopping-cart"></i> Add</a> </div>
                          {/* <div className="shopping-cart col mr">
                            <a className="cart-btn"
                            >
                              <i
                                class=" fa fa-heart"></i>Favorite
                            </a></div> */}
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
