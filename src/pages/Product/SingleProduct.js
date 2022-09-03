import React from "react";
import { useParams, Link } from "react-router-dom";

const SingleProduct = () => {

  // React.useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])

  const { id } = useParams("");

  const [data, setData] = React.useState("");

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
    console.log("====1", res);
    const data = await res.json();
    console.log("====1111", data);
    setData(data.Data[0]);
  };

  React.useEffect(() => {
    getdata();
  }, []);
  // React.useEffect(() => {
  //     fetch(`https://pcology-api.herokuapp.com/googleSheet/getDataById/${id}`)
  //         .then((res) => res.json())
  //         .then((data) => {
  //             // console.log(data);
  //             setData(data);
  //         });
  // }, []);
  //  console.log("===", data);
  return (
    <div>
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
      <div className="single-product mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="single-product.html">
                    <img src={data.Image} alt="" />
                  </a>

                  <h3>{data.Name}</h3>
                  <p className="product-price">{data.Title} </p>
                  <h4 className="product-price">
                    ₹{data.Price}{" "}
                    <del className="product-old-price">₹{data.OldPrice}</del>
                  </h4>
                  <Link to={`/Checkout/${data.id}`}>
                    <a className="cart-btn">
                      <i className="fas fa-shopping-cart"></i>Shop Now
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
                          class=" fa fa-heart"></i> Favorite
                        {/* <i class="fa fa-heart-o" ></i>*/}</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="single-product-content">
                <h3>{data.Name}</h3>
                <p className="single-product-pricing">
                  <span>{data.Title}</span>
                </p>
                <p>{data.Details}</p>
                <div className="single-product-form">
                  <p>
                    <strong>Processor: </strong>
                    <br />
                    {data.Processe}
                  </p>
                  <hr />
                  <p>
                    <strong>Graphic Card: </strong>
                    <br />
                    {data.GraphicCard}
                  </p>
                  <hr />
                  <p>
                    <strong>RAM: </strong>
                    <br />
                    {data.RAM}
                  </p>
                  <hr />
                  <p>
                    <strong>Motherboard: </strong>
                    <br />
                    {data.Motherboard}
                  </p>
                  <hr />
                  <p>
                    <strong>SMPS: </strong>
                    <br />
                    {data.SMPS}
                  </p>
                  <hr />
                  <p>
                    <strong>Secondary Storage: </strong>
                    <br />
                    {data.SSD}
                  </p>
                  <hr />
                </div>
                <h4>Share:</h4>
                <ul className="product-share">
                  <li>
                    <a href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fab fa-google-plus-g"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="more-products mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="section-title">
                <h3>
                  <span className="orange-text">Related</span> Products
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="/">
                    <img
                      src="assets/img/products/product-img-1.jpg"
                      alt="product-img"
                    />
                  </a>
                </div>
                <h3>The Gamming PC</h3>
                <p className="product-price">
                  <span>Intel 3240 Processor</span> ₹40,000{" "}
                </p>
                <a href="/" className="cart-btn">
                  <i className="fas fa-shopping-cart"></i> Shop Now
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="/">
                    <img
                      src="assets/img/products/product-img-2.jpg"
                      alt="product-img"
                    />
                  </a>
                </div>
                <h3>The Gamming PC</h3>
                <p className="product-price">
                  <span>Intel 3240 Processor</span> ₹40,000{" "}
                </p>
                <a href="/" className="cart-btn">
                  <i className="fas fa-shopping-cart"></i>Shop Now
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="/">
                    <img
                      src="assets/img/products/product-img-3.jpg"
                      alt="product-img"
                    />
                  </a>
                </div>
                <h3>The Gamming PC</h3>
                <p className="product-price">
                  <span>Intel 3240 Processor</span> ₹40,000
                </p>
                <a href="/" className="cart-btn">
                  <i className="fas fa-shopping-cart"></i> Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
