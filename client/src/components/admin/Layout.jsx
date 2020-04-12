import stylesheet from "../../styles/main.scss";
import React, { Fragment, useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Header from "./Header";
import SideNav from "../SideNav";
import Footer from "../Footer";
import BtnBottom from "../BtnBottom";

const Layout = ({ isAuthenticated, children }) => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [loading, setloading] = useState("is-loading");
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setloading("");
    }, 100);
  }, []);

  if (isAuthenticated) {
    return <Redirect to="/admin/dashboard" />;
  }
  const handleToggleMenu = () => {
    setMenuVisible({
      isMenuVisible: !isMenuVisible
    });
  };

  const handleHoverMenu = () => {
    setMenuVisible({
      isMenuVisible: !isSubMenuVisible
    });
  };

  return (
    <Fragment>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

      <div id="wrapper">
        <Header onToggleMenu={handleToggleMenu} />
        {children}
        {/* <Footer /> */}
      </div>
    </Fragment>
  );
};

Layout.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect()(Layout);
