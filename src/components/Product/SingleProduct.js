import React from 'react'
import { useParams, Link } from 'react-router-dom';

const SingleProduct = () => {

    const { id } = useParams("");

    const [data, setData] = React.useState("");

    const getdata = async () => {

        const res = await fetch(`https://pcology-api.herokuapp.com/googleSheet/getDataById/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        console.log("====1", res);
        const data = await res.json();
        console.log("====1111", data);
        setData(data.Data[0])

    }

    React.useEffect(() => {
        getdata();
    }, [])
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
        <div><div class="single-product mt-150 mb-150">
            <div class="container">
                <div class="row">
                    <div class="col-md-5">

                        <div class="single-product-item">
                            <div class="product-image">

                                <a href="single-product.html"><img src={data.Image} alt="cpu image" /></a>

                                <h3>{data.Name}</h3>
                                <p class="product-price">{data.Title} </p>
                                <h4 class="product-price">₹{data.Price} <del
                                    class="product-old-price">₹{data.OldPrice}</del></h4>
                                <Link to={`/Checkout/${data.id}`}  >
                                    <a class="cart-btn"><i class="fas fa-shopping-cart"></i>Shop Now</a></Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div class="single-product-content">
                            <h3>{data.Name}</h3>
                            <p class="single-product-pricing"><span>{data.Title}</span></p>
                            <p>{data.Details}</p>
                            <div class="single-product-form">
                                <p><strong>Processor: </strong><br />{data.Processe}</p><hr />
                                <p><strong>Graphic Card: </strong><br />{data.GraphicCard}</p><hr />
                                <p><strong>RAM: </strong><br />{data.RAM}</p><hr />
                                <p><strong>Motherboard: </strong><br />{data.Motherboard}</p><hr />
                                <p><strong>SMPS: </strong><br />{data.SMPS}</p><hr />
                                <p><strong>Secondary Storage: </strong><br />{data.SSD}</p><hr />

                            </div>
                            <h4>Share:</h4>
                            <ul class="product-share">
                                <li><a href=""><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href=""><i class="fab fa-twitter"></i></a></li>
                                <li><a href=""><i class="fab fa-google-plus-g"></i></a></li>
                                <li><a href=""><i class="fab fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            <div class="more-products mb-150">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2 text-center">
                            <div class="section-title">
                                <h3><span class="orange-text">Related</span> Products</h3>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 text-center">
                            <div class="single-product-item">
                                <div class="product-image">
                                    <a href="/"><img src="assets/img/products/product-img-1.jpg" alt="cpu image" /></a>
                                </div>
                                <h3>The Gamming PC</h3>
                                <p class="product-price"><span>Intel 3240 Processor</span> ₹40,000 </p>
                                <a href="/" class="cart-btn"><i class="fas fa-shopping-cart"></i> Shop Now</a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 text-center">
                            <div class="single-product-item">
                                <div class="product-image">
                                    <a href="/"><img src="assets/img/products/product-img-2.jpg" alt="cpu image" /></a>
                                </div>
                                <h3>The Gamming PC</h3>
                                <p class="product-price"><span>Intel 3240 Processor</span> ₹40,000 </p>
                                <a href="/" class="cart-btn"><i class="fas fa-shopping-cart"></i>Shop Now</a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 offset-lg-0 offset-md-3 text-center">
                            <div class="single-product-item">
                                <div class="product-image">
                                    <a href="/"><img src="assets/img/products/product-img-3.jpg" alt="cpu image" /></a>
                                </div>
                                <h3>The Gamming PC</h3>
                                <p class="product-price"><span>Intel 3240 Processor</span> ₹40,000</p>
                                <a href="/" class="cart-btn"><i class="fas fa-shopping-cart"></i> Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div></div>
    )
}

export default SingleProduct