import React, { useEffect, useState } from 'react'
import Navbar from "../components/Nabvar/Navbar";
import Hero from "../pages/Hero/Hero";
import Review from "../components/Review";
//import Discount from "./components/Discount";
import { Routes, Route } from "react-router-dom";

import FooterPage from "../components/FooterPage";

import About from "../pages/About/About";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Contact from "../pages/Contact/Contact";
import SingleProduct from "../pages/Product/SingleProduct";
import NavbarMobile from "../components/Nabvar/NavbarMobile";
import { ToastContainer } from "react-toastify";
import Deshboard from '../pages/User/Deshboard';
import Login from '../pages/Login/Login';
import ProtectedRoute from './ProtectedRoute';
const MainRouter = () => {

    const [islogin, setIslogin] = useState('')

    useEffect(() => {
        checkLogin()
    }, [])

    const checkLogin = () => {
        const token = localStorage.getItem('pwd')
        if (token) {
            setIslogin(true)

        } else {
            setIslogin(false)
        }
    }



    return (
        <>

            <Navbar />
            <NavbarMobile />
            <Routes>
             
            </Routes>  

            {/* <Discount /> */}

            <FooterPage />
            <ToastContainer />

        </>
    )
}

export default MainRouter