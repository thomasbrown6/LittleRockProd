import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Menu = props => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li className="nav-li">
          <Link to="/" className="nav-link">
            <span onClick={props.onToggleMenu}>Home</span>
          </Link>
        </li>
        <li className="nav-li">
          <Link to="/who-we-are" className="nav-link">
            <span onClick={props.onToggleMenu}>Who We Are</span>
          </Link>
        </li>

        {/* <div className="dropdown-navbar">
                    <ul className="nav-navbar">
                        <li className="nav-li"><Link href="/#"><a className="nav-link"><span onClick={props.onHoverMenu}>Meet The Pastor</span></a></Link></li>
                        <li className="nav-li"><Link href="/#"><a className="nav-link"><span onClick={props.onHoverMenu}>What We Believe</span></a></Link></li>
                        <li className="nav-li"><Link href="/#"><a className="nav-link"><span onClick={props.onHoverMenu}>What is the A.M.E. ZION CHURCH</span></a></Link></li>
                        <li className="nav-li"><Link href="/#"><a className="nav-link"><span onClick={props.onHoverMenu}>Our History</span></a></Link></li>
                        <li className="nav-li"><Link href="/#"><a className="nav-link"><span onClick={props.onHoverMenu}>Our Staff</span></a></Link></li>
                        <li className="nav-li"><Link href="/#"><a className="nav-link"><span onClick={props.onHoverMenu}>Stewards & Trustees</span></a></Link></li>
                        <li className="nav-li"><Link href="/#"><a className="nav-link"><span onClick={props.onHoverMenu}>Times & Directions</span></a></Link></li>
                    </ul>
                </div> */}
        <li className="nav-li">
          <Link className="nav-link" to="/get-connected">
            <span onClick={props.onToggleMenu}>Get Connected</span>
          </Link>
        </li>
        <li className="nav-li">
          <Link className="nav-link" to="/ministries">
            <span onClick={props.onToggleMenu}>Ministries</span>
          </Link>
        </li>
        <li className="nav-li">
          <Link to="/news-events">
            <a className="nav-link">
              <span onClick={props.onToggleMenu}>News & Events</span>
            </a>
          </Link>
        </li>
        <li className="nav-li">
          <Link className="nav-link" to="/media-resources">
            <span onClick={props.onToggleMenu}>Media & Resources</span>
          </Link>
        </li>
        <li className="nav-li">
          <Link className="nav-link" to="/quick-links">
            <span onClick={props.onToggleMenu}>Quick Links</span>
          </Link>
        </li>
      </ul>
      <ul className="actions vertical">
        <li className="nav-li">
          {/* <a href="#" className="button">
            Watch Online
          </a> */}
          <Link className="button" to="/media-resources/watch-online">
            Watch Online
          </Link>
        </li>
        {/* <li className="nav-li"><a to="#" className="button fit">Log In</a></li> */}
      </ul>
    </div>
    <a className="close" onClick={props.onToggleMenu} href="javascript:;">
      Close
    </a>
  </nav>
);

Menu.propTypes = {
  onToggleMenu: PropTypes.func
};

export default Menu;
