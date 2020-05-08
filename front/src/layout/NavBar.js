import React from "react";
import logo from "./logo.svg";

import { Link } from "react-router-dom";

const backurl = "http://localhost:3001";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <Link to="/" className="nav-link">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          height="42"
          width="42"
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav ml-auto">
          {!props.user ? (
            <li className="nav-item">
              <a className="nav-link" href={`${backurl}/auth/google`}>
                Login
              </a>
            </li>
          ) : (
            <li className="nav-item">
              <a className="nav-link" href={`${backurl}/auth/logout`}>
                Logout
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
