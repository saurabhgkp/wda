import React, { useState } from "react";
import { Link } from "react-router-dom";

const SubNav = () => {
const [token,setToken] = useState()
  const aaa = localStorage.getItem('pwd')
function login () {
  var token = "gsgggsfgh";
  localStorage.setItem("pwd",token)
  setToken(token)
  console.log(token);
}
function logout () {
  localStorage.removeItem("pwd")
  setToken()
}


  return (
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
                      <Link to="/"><i class=" fa fa-home x-3"></i></Link>
                    </li>
                    <li>
                      <Link to="/About">About</Link>
                    </li>
                    <li>
                      <Link to="/Contact">Contact</Link>
                    </li>
                    <li>
                      <Link to="/User">Shop</Link>
                    </li>

                    <li> <li>
                      <div class="header-icons">
                        <a class="shopping-cart" href="/Cart"><i
                          class=" fas fa-shopping-cart"></i></a>
 <li>{ aaa ? <Link to="/" onClick={login}><a  >Login</a></Link>:<Link to ="/" onClick={logout}><a >LogOut</a></Link> }</li> 

                       

                        
                      </div>
                    </li></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNav;
