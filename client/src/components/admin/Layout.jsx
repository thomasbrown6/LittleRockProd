import stylesheet from "../../styles/main.scss";
import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "../Footer";
import BtnBottom from "../BtnBottom";

const Layout = ({ isAuthenticated, props }) => {
  if (isAuthenticated) {
    return <Redirect to="/admin/dashboard" />;
  }

  return (
    <Fragment>
      <div className={`body `}>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

        <div id="wrapper">
          <Header />
          {props.children}
          <Footer />
        </div>
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

export default connect(mapStateToProps)(Layout);
