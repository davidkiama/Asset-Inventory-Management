import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
        
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
                <Link to="/" className="navbar-logo" >
                                        {/* closeMobileMenu code added here so that on mobile, when 
                                                .........someone clicks the logo, it closes the menu. */}
                Wendesk <i className='fab fa-typo3' /> 
                                                  {/* To display the logo */}
            </Link>
           
           
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
  );
}

export default Navbar;