import { Link } from "react-router-dom";

import React from "react";
const Product = () => {
  const [data, setData] = React.useState("");
  const [item, setItem] = React.useState("");
  // const handelonUpdate = async (e) => {
  //   console.log(data);
  //   // e.preventDefault();

  //   const res = await axios.put('http://localhost:4000/users/addItem', data, {
  //    {
  //       email: email,
  // itemid:item,
  //     },
  //   });
  // }

  const additemfn = (e) => {
    setItem(e);
  };


  React.useEffect(() => {
    fetch("https://pcology.onrender.com/googleSheet/getAllData")
      .then((res) => res.json())
      .then((data) => {
        setData(data.Data);
      });
  }, []);
  console.log("========", data);
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
            {data &&
              data.map((item, index) => {
                return (
                  <>
                    {item.id ? (
                      <div className="col-lg-4 col-md-6  offset-md-3 offset-lg-0 text-center">
                        <div className="single-product-item">
                          <div className="product-image">
                            <img src={item.Image} alt="pc" />
                          </div>

                          <h3>{item.Name}</h3>
                          <p className="">{item.Title} </p>
                          <h4 className="product-price">
                            ₹{item.Price}{" "}
                            <del className="product-old-price">
                              ₹{item.OldPrice}
                            </del>
                          </h4>
                          <Link to={`SingleProduct/${item.id}`}>
                            <a className="cart-btn">
                              <i className="fas fa-shopping-cart"></i> Shop Now
                            </a>
                          </Link>
                          {/* <div className=" row p-3">
                            <div
                              className="shopping-cart col ml"
                              style={{
                                color: "#F28123",
                              }}
                            >
                              <div onClick={() => additemfn(item._id)}>
                                <a className="cart-btn">
                                  <i class=" fas fa-shopping-cart"></i> Add
                                </a>{" "}
                              </div>
                            </div>
                             <div className="shopping-cart col mr">
                            <a className="cart-btn"
                            >
                              <i
                                class=" fa fa-heart"></i>Favorite
                            </a></div> 
                          </div>*/}
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
