import React, { useEffect } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import axios from "axios";
const Navbar = () => {
  const navigate = useNavigate();
  const clientId =
    "274492401016-j54651qg7maf329cdddq6aavlbb5a35l.apps.googleusercontent.com";

  // function logout() {
  //   console.log("logout");
  //   localStorage.removeItem("pwd");
  //   navigate("/");
  // }

  // useEffect(() => {
  //   const initClient = () => {
  //     gapi.client.init({
  //       clientId: clientId,
  //       scope: "",
  //     });
  //   };
  //   gapi.load("client:auth2", initClient);
  // }, []);

  // useEffect(() => {
  //   const initClient = () => {
  //     gapi.client.init({
  //       clientId: clientId,
  //       scope: "",
  //     });
  //   };
  //   gapi.load("client:auth2", initClient);
  // }, []);

  // const onFailure = (response) => {
  //   console.log(response);
  //   if (response?.error !== "popup_closed_by_user")
  //     toast.error("Might be an issue!! please try again later");
  // };

  // const onSuccess = async (res) => {
  //   const { email, name } = res?.profileObj;
  //   localStorage.setItem("pwd", email);

  // if (email) {
  //   const data = await axios.post("http://localhost:4000/users/register", {
  //     email,
  //     name,
  //   });
  // }
  // };

  return (
    <>
      <Helmet></Helmet>
      <div
        style={{
          position: "sticky",
          top: "0",
          zIndex: "10",
          //backgroundColor: "#051922",
        }}
      >
        <div
          className="top-header-area d-none d-md-block"
          style={{
            backgroundColor: "#051922",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-sm-12 text-center">
                <div className="main-menu-wrap">
                  <div className="site-logo">
                    <Link to="/">
                      <img src="assets/img/pcology1.png" alt="pcology" />
                    </Link>
                  </div>

                  <nav className="main-menu">
                    <ul>
                      <li className="current-list-item">
                        <Link to="/">
                          <i class=" fa fa-home x-3"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/About">About</Link>
                      </li>
                      <li>
                        <Link to="/Contact">Contact</Link>
                      </li>
                      <li>
                        <Link to="/">Shop</Link>
                      </li>

                      <li>
                        {" "}
                        <li>
                          <div class="header-icons p-3">
                            <li>
                              {/* {console.log(token)} */}
                              {/* {!localStorage.getItem("pwd") ? (
                                <GoogleLogin
                                  clientId={clientId}
                                  buttonText=""
                                  onSuccess={onSuccess}
                                  onFailure={onFailure}
                                  cookiePolicy={"single_host_origin"}
                                >
                                  <h6>Login With Google</h6>
                                </GoogleLogin>
                              ) : (
                                <div>
                                  {" "}
                                  <a class="shopping-cart" href="/Cart">
                                    <i class=" fas fa-shopping-cart"></i>
                                  </a>
                                  <GoogleLogout
                                    clientId={clientId}
                                    buttonText=""
                                    onLogoutSuccess={logout}
                                  >
                                    <h6>Logout</h6>
                                  </GoogleLogout>
                                </div>
                              )} */}
                            </li>
                          </div>
                        </li>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default Navbar;
