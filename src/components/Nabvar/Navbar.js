import React, { useState, useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Navbar = () => {
const [token,setToken] = useState()
const clientId = '274492401016-j54651qg7maf329cdddq6aavlbb5a35l.apps.googleusercontent.com'

// function login () {
//   var token = "gsgggsfgh";
//   localStorage.setItem("pwd",token)
//   setToken(token)
//   console.log(token);
// }
function logout () {
  console.log('logout')
  localStorage.removeItem("pwd")
  setToken()
}


useEffect(() => {
  const initClient = () => {
      gapi.client.init({
          clientId: clientId,
          scope: ''
      });
  };
  gapi.load('client:auth2', initClient);
});

const onFailure = (response) => {
  console.log(response);
  toast.error("Might be an issue!! please try again later")
}

const onSuccess = (res) => {
  console.log(res?.accessToken);
  localStorage.setItem('pwd',res?.accessToken)
  setToken(res?.accessToken)
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
                        {/* <li>{ (token) ? <Link to ="/" onClick={logout}><a ><i class="fa fa-power-off" aria-hidden="true"></i>LogOut</a></Link>:<Link to="/" onClick={login}><a  >Login</a></Link> }</li>  */}
                        <li>
                          {/* {console.log(token)} */}
                           {!localStorage.getItem('pwd')?
                         <GoogleLogin
                         clientId={clientId}
                         buttonText="Login"
                         onSuccess={onSuccess}
                         onFailure={onFailure}
                         cookiePolicy={'single_host_origin'}
                         />:
                         <GoogleLogout clientId={clientId} buttonText="Logout" onLogoutSuccess={logout} />
                        }
                           </li> 
                 
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

export default Navbar;
