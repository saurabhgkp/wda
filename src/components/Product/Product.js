
import React, { useEffect, useState } from "react";
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
        <div>  <div class="product-section mt-150 mb-150">
            <div class="container">
                <div class="row">

                    <div class="col-lg-8 offset-lg-2 text-center">
                        <div class="section-title">
                            <h3><span class="orange-text">Our</span> Products</h3>

                        </div>
                    </div>
                </div>

                <div class="row">
                    {Object.keys(data).map((item, index) => {
                        return (<>
                            {(data[item].id) ?

                                <div class="col-lg-4 col-md-6  offset-md-3 offset-lg-0 text-center">
                                    <div class="single-product-item">
                                        <div class="product-image">
                                            <a href="single-product.html"><img src={data[item].Image} alt="" /></a>
                                        </div>
                                        <h3>{data[item].Name}</h3>
                                        <p class="product-price">{data[item].Title} </p>
                                        <a href="cart.html" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
                                    </div>
                                </div>

                                : ""}



                        </>
                        )
                    })}
                </div>
            </div>
        </div></div>
    )
}

export default Product