import React from "react";
import { Link } from "react-router-dom";

const Footer = (props) => (
  <footer id="footer">
    <Link to="/">
      <img
        className="footer-image"
        src={require("../static/images/logo2.png")}
        alt=""
      />
    </Link>
    <div className="inner">
      {/* <Link href="/">
                <a className="image"><img src="/static/images/logo2.png" alt="" className="image-footer" /></a>
            </Link> */}
      <ul className="copyright">
        <li>
          <span className="bold">Little Rock AME Zion &copy; 2019 </span>| 401
          North McDowell Street, Charlotte, North Carolina 28204 |{" "}
          <span className="phone">
            <a href="tel:7043343782">(704)334-3782</a>{" "}
          </span>
        </li>
      </ul>
      <ul className="icons">
        <li>
          <a
            href="https://www.facebook.com/LittleRockAMEZion/?rf=563132967169860"
            className="icon alt fa-facebook"
          >
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a className="icon alt fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
