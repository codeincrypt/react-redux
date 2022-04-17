import React from "react";

const Footer = () => {
  return (
    <>
      <section id="footer">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
              <ul className="list-unstyled list-inline social text-center">
                <li className="list-inline-item">
                  <a href="https://www.fiverr.com/share/qb8D02">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.fiverr.com/share/qb8D02">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.fiverr.com/share/qb8D02">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.fiverr.com/share/qb8D02">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.fiverr.com/share/qb8D02" rel="noreferrer"target="_blank">
                    <i className="fa fa-envelope"></i>
                  </a>
                </li>
              </ul>
            </div>
            <hr />
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
              <p>
                <u>
                  <a href="https://www.nationaltransaction.com/">
                    National Transaction Corporation
                  </a>
                </u>{" "}
                is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned
                subsidiary of U.S. Bancorp, Minneapolis, MN]
              </p>
              <p className="h6">
                © All right Reversed.
                <a
                  className="text-green ml-2"
                  href="https://www.sunlimetech.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sunlimetech
                </a>
              </p>
            </div>
            <hr />
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
