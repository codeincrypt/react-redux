import React from "react";
import { Link } from "react-router-dom";
import "./../../assets/import.css";
const Header = () => {
  return (
    <>
      <header className="px-5">
        <a href="/" id="logo" target="_blank">
          React Redux
        </a>

        {/* <label htmlFor="toggle-1" className="toggle-menu">
          <ul>
            <li></li> <li></li> <li></li>
          </ul>
        </label>
        <input type="checkbox" id="toggle-1" /> */}

        <nav className="">
          <ul className="mb-0">
            <li>
              <Link to="/">
                <i className="icon-home"></i>Home
              </Link>
            </li>
            <li>
              <Link to="/post">
                <i className="icon-user"></i>POSTS
              </Link>
            </li>
            <li>
              <a href="#portfolio">
                <i className="icon-thumbs-up-alt"></i>Portfolio
              </a>
            </li>
            <li>
              <a href="#services">
                <i className="icon-gear"></i>Services
              </a>
            </li>
            <li>
              <a href="#gallery">
                <i className="icon-picture"></i>Gallery
              </a>
            </li>
            <li>
            <Link to="/profile">
                <i className="icon-user"></i>PROFILE
              </Link>
              <a href="/login">
                <i className="icon-phone"></i>Login
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
