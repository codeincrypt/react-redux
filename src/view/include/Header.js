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

        <nav className="">
          <ul className="mb-0">
            <li>
              <Link to="/post">
                <i className="icon-user"></i>POSTS
              </Link>
            </li>
            <li>
              <Link to="/gallery">
                <i className="icon-user"></i>GALLERY
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <i className="icon-user"></i>PROFILE
              </Link>
            </li>
            <li>
              <Link to="/login">
                <i className="icon-home"></i>LOGIN
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
