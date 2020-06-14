import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { logout } from "../actions/auth";

const Menu2 = ({ auth: { isAuthenticated }, logout }) => {
  const handleLogOut = () => {
    logout();
  };

  const AuthenticatedComp = () => {
    return (
      <Link className="icon fa-user-circle" to="/" onClick={handleLogOut}>
        logout
        <span className="label"></span>
      </Link>
    );
  };

  const UnAuthenticatedComp = () => {
    return (
      <Link className="icon fa-user-circle" to="/admin">
        <span className="label"></span>
      </Link>
    );
  };

  return (
    <nav id="menu2">
      <div className="menu2-container">
        <ul className="top-menu">
          <li>
            <Link to="/get-connected/visitors">New Here?</Link>
          </li>
          <li>
            <Link to="/media-resources/watch-online">Watch Live</Link>
          </li>
          <li>
            <Link to="/get-connected/tithes-offerings">Give Today</Link>
          </li>
        </ul>
        <div className="spacer" />
        <ul className="icons">
          <li>
            <a
              href="https://twitter.com/littlerockamez?lang=en"
              target="_blank"
              className="icon fa-twitter"
            >
              <span className="label"></span>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/LittleRockAMEZion/"
              target="_blank"
              className="icon fa-facebook-square"
            >
              <span className="label"></span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/littlerockamezion/" target="_blank" className="icon fa-instagram">
              <span className="label"></span>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCZ3K2j4WbnJ_jqL6Wmqi4mA/featured"
              target="_blank"
              className="icon fa-youtube"
            >
              <span className="label"></span>
            </a>
          </li>
          <li>
            {isAuthenticated ? <AuthenticatedComp /> : <UnAuthenticatedComp />}
          </li>
        </ul>
      </div>
    </nav>
  );
};

Menu2.propTypes = {
  auth: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Menu2);
