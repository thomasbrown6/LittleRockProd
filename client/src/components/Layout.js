import stylesheet from "../styles/main.scss";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import SideNav from "./SideNav";
import Footer from "./Footer";
import BtnBottom from "./BtnBottom";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuVisible: false,
      loading: "is-loading",
      isSubMenuVisible: false,
      HomePage: false
    };
    this.handleToggleMenu = this.handleToggleMenu.bind(this);
    this.handleHoverMenu = this.handleHoverMenu.bind(this);
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: "" });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  handleToggleMenu() {
    this.setState({
      isMenuVisible: !this.state.isMenuVisible
    });
  }

  handleHoverMenu() {
    this.setState({
      isMenuVisible: !this.state.isSubMenuVisible
    });
  }

  render() {
    return (
      <Fragment>
        {/* <head>
          <title>Little Rock A.M.E. Zion</title>
          <meta name="description" content="Little Rock A.M.E. Zion Church" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link href="/static/css/skel.css" rel="stylesheet" />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.css"
            integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
            crossOrigin="anonymous"
          />
          {/* <link rel="stylesheet" href="css/blueimp-gallery.min.css" />
          <script src="js/blueimp-gallery.min.js"></script> *

          <link
            href={require("../static/images/logo2.png")}
            rel="shortcut icon"
          />
          <link
            href={require("../static/images/logo2.png")}
            rel="apple-touch-icon-precomposed"
          />
          <link
            href={require("../static/images/logo2.png")}
            sizes="114x114"
            rel="apple-touch-icon-precomposed"
          />
          <link
            href={require("../static/images/logo2.png")}
            sizes="72x72"
            rel="apple-touch-icon-precomposed"
          />
          <link
            href={require("../static/images/logo2.png")}
            sizes="144x144"
            rel="apple-touch-icon-precomposed"
          />
        </head> */}
        <div
          className={`body ${this.state.loading} ${
            this.state.isMenuVisible ? "is-menu-visible" : ""
          }`}
        >
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

          <div id="wrapper">
            <Header onToggleMenu={this.handleToggleMenu} />
            {this.props.children}
            {this.props.HomePage == null && <BtnBottom />}
            <Footer />
          </div>
          <SideNav
            closeMenu={this.handleToggleMenu}
            onToggleMenu={this.handleToggleMenu}
            onHoverMenu={this.handleHoverMenu}
          />
        </div>
      </Fragment>
    );
  }
}

export default Layout;
