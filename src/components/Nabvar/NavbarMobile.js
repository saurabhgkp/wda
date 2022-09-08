import React, {useState} from "react";
import { Link } from "react-router-dom";
const NavbarMobile = () => {

  const [token,setToken] = useState()

function login () {
  var token = "gsgggsfgh";
  localStorage.setItem("pwd",token)
  setToken(token)
  console.log(token);
}
function logout () {
  localStorage.removeItem("pwd")
  setToken('')
}
  
  return (
    <>
    <nav
      className="navbar navbar-expand-lg navbar-dark d-flex d-lg-none"
      style={{
        position: "sticky",
        top: "0",
        zIndex: "10",
        backgroundColor: "#051922",
      }}
    >
      <Link className="navbar-brand" to="/">
        <img src="assets/img/pcology1.png" alt="PCOLOGY" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/About">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Contact">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Shop
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark fixed-bottom d-flex  justify-content-around">
    <div class="container-fluid">
   
    <ul class="nav nav-pills">
  <div>  <li class="nav-item">
    <a class="nav-link text-white" href="#"><i class="fa-2x fas fa-shopping-cart"></i></a>
  </li></div><div>
  <li class="nav-item">
    <a class="nav-link text-white" href="#"><i class="fa-2x fa fa-heart" aria-hidden="true"></i></a>
  </li></div><div>
  <li class="nav-item">
    <a class="nav-link text-white" href="#"><i class="fa-2x fa fa-user-circle" aria-hidden="true"></i></a>
  </li></div><div>

  <li class="nav-item">{token? 
    <Link to ="/" onClick={logout} class="nav-link text-white"><i class="fa-2x fa fa-power-off" aria-hidden="true"></i></Link>:
    <Link to="/" onClick={login} class="nav-link text-white"><i class="fa-2x fa fa-plug" aria-hidden="true"></i></Link>}
   
  </li></div>
</ul>
  </div>
</nav>
    </>
  );
};

export default NavbarMobile;
