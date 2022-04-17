import React from "react";
import "./../../assets/import.css";
const Header = () => {
  return (
    <>
      <header className="px-5">
        <a href="/" id="logo" target="_blank">
          React Redux
        </a>

        <label htmlFor="toggle-1" className="toggle-menu">
          <ul>
            <li></li> <li></li> <li></li>
          </ul>
        </label>
        <input type="checkbox" id="toggle-1" />

        <nav className="">
          <ul className="mb-0">
            <li>
              <a href="#logo">
                <i className="icon-home"></i>Home
              </a>
            </li>
            <li>
              <a href="#about">
                <i className="icon-user"></i>About
              </a>
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
              <a href="#contact">
                <i className="icon-phone"></i>Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
