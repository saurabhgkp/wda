import React from 'react'
import Navbar from "../components/Nabvar/Navbar";
import Hero from "../pages/Hero/Hero";
import Review from "../components/Review";
//import Discount from "./components/Discount";
import { Routes, Route } from "react-router-dom";

import FooterPage from "../components/FooterPage";
import Product from "../pages/Product/Product";
import About from "../pages/About/About";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Contact from "../pages/Contact/Contact";
import SingleProduct from "../pages/Product/SingleProduct";
import NavbarMobile from "../components/Nabvar/NavbarMobile";
import { ToastContainer } from "react-toastify";
import Deshboard from '../pages/User/Deshboard';
import Login from '../pages/Login/Login';
const MainRouter = () => {
    return (
        <>
            <Navbar />
            <NavbarMobile />
            <Routes>
                <Route>
                    <Route path="/" element={<Hero />} />
                    <Route path="/" element={<Product />} />
                    <Route element={<Review />} />
                </Route>
                <Route path="/SingleProduct/:id" element={<SingleProduct />} />
                <Route>
                    <Route path="/About" element={<About />} />
                    <Route element={<Review />} />
                </Route>
                <Route path="/Cart" element={<Cart />} />
                <Route path="/Checkout/:id" element={<Checkout />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/User" element={<Deshboard />} />
                <Route path="/Login" element={<Login />} />
            </Routes>

            {/* <Discount /> */}

            <FooterPage />
            <ToastContainer />

        </>
    )
}

export default MainRouter