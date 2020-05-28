import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Menu2 from "./Menu2";
import DropdownMenu from "./DropdownMenu";
import QuickLinks from "./QuickLinks";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      activeIndex: null,
      sticky: false
    };
    this.toggle = this.toggle.bind(this);
  }

  handleHover = (value) => {
    this.setState({
      activeIndex: value
    });
  };

  handleLeave = (value) => {
    this.setState({
      activeIndex: null
    });
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  // componentDidMount() {
  //   window.addEventListener("scroll", this.handleScroll, true);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // }

  handleScroll() {
    //console.log("window offset posisition: " + deviceWindow.clientHeight);
    // if (window.pageYOffset >= sticky) {
    //   this.setState({ sticky: true });
    // } else {
    //   this.setState({ sticky: false });
    // }
  }

  render() {
    Header.propTypes = {
      onToggleMenu: PropTypes.func
    };
    return (
      <div className={`${this.state.sticky ? "sticky" : ""}`}>
        <Menu2 />
        <header id="header" className={`alt`}>
          <a className="logo">{} </a>
          <div className="nav-menu">
            <ul className="menu-ul">
              <li className="menu-li">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>

              <li className="menu-li">
                <span
                  onMouseEnter={(event) => this.handleHover(0)}
                  className="nav-link"
                >
                  Who We Are
                </span>
              </li>
              <div
                id="dropdown0"
                className={
                  this.state.activeIndex === 0
                    ? "submenu-dropdown"
                    : "submenu-dropdown hide"
                }
                onMouseLeave={(event) => this.handleLeave(0)}
              >
                <DropdownMenu
                  Title_item1="Meet The Pastor"
                  URL_item1="/who-we-are/meet-the-pastor"
                  Title_item2="Mission Statement"
                  URL_item2="/who-we-are/mission-statement"
                  Title_item3="What is the A.M.E. Zion Church?"
                  URL_item3="/who-we-are/what-is-the-a-m-e-zion-church"
                  Title_item4="Our History"
                  URL_item4="/who-we-are/our-history"
                  Title_item5="Our Staff"
                  URL_item5="/who-we-are/our-staff"
                />
              </div>

              <li className="menu-li">
                <span
                  onMouseEnter={(event) => this.handleHover(1)}
                  className="nav-link"
                >
                  Get Connected
                </span>
              </li>
              <div
                id="dropdown1"
                className={
                  this.state.activeIndex === 1 ? "submenu-dropdown" : "hide"
                }
                onMouseLeave={(event) => this.handleLeave(1)}
              >
                <DropdownMenu
                  Title_item1="Online Giving"
                  URL_item1="/get-connected/online-giving"
                  Title_item2="Members"
                  URL_item2="/get-connected/members"
                  Title_item3="Visitors"
                  URL_item3="/get-connected/visitors"
                  Title_item5="Contact Us"
                  URL_item5="/get-connected/contact-us"
                />
              </div>

              <li className="menu-li">
                <span
                  onMouseEnter={(event) => this.handleHover(2)}
                  className="nav-link"
                >
                  Ministries
                </span>
              </li>
              <div
                id="dropdown2"
                className={
                  this.state.activeIndex === 2 ? "submenu-dropdown" : "hide"
                }
                onMouseLeave={(event) => this.handleLeave(2)}
              >
                <DropdownMenu
                  Title_item1="Adult & Family Life"
                  URL_item1="/ministries/adult-family-life"
                  Title_item2="Children, Youth & Young Adults"
                  URL_item2="/ministries/children-youth-young-adults"
                  Title_item4="Discipleship"
                  URL_item4="/ministries/discipleship"
                  Title_item5="Evangelism"
                  URL_item5="/ministries/evangelism"
                  Title_item6="Praise & Worship"
                  URL_item6="/ministries/praise-worship"
                  Title_item7="Men's Ministries"
                  URL_item7="/ministries/men"
                  Title_item8="Women's Ministries"
                  URL_item8="/ministries/women"
                  Title_item9="Support Services"
                  URL_item9="/ministries/support-services"
                />
              </div>

              <li className="menu-li">
                <span
                  onMouseEnter={(event) => this.handleHover(3)}
                  className="nav-link"
                >
                  News & Events
                </span>
              </li>
              <div
                id="dropdown3"
                className={
                  this.state.activeIndex === 3 ? "submenu-dropdown" : "hide"
                }
                onMouseLeave={(event) => this.handleLeave(3)}
              >
                <DropdownMenu
                  Title_item1="Calendar"
                  URL_item1="/events/calendar"
                  Title_item2="Event Flyers"
                  URL_item2="/events/event-flyers"
                />
              </div>

              <li className="menu-li">
                <span
                  onMouseEnter={(event) => this.handleHover(4)}
                  className="nav-link"
                >
                  Media & Resources
                </span>
              </li>
              <div
                id="dropdown4"
                className={
                  this.state.activeIndex === 4 ? "submenu-dropdown" : "hide"
                }
                onMouseLeave={(event) => this.handleLeave(4)}
              >
                <DropdownMenu
                  Title_item1="Watch Online"
                  URL_item1="/media-resources/watch-online"
                  Title_item2="Photo Gallery"
                  URL_item2="/media-resources/photo-gallery"
                  Title_item3="News Letter"
                  URL_item3="/media-resources/news-letter"
                />
              </div>

              <li className="menu-li">
                <span
                  onMouseEnter={(event) => this.handleHover(5)}
                  className="nav-link"
                >
                  Quick Links
                </span>
              </li>
              <div
                id="dropdown5"
                className={
                  this.state.activeIndex === 5 ? "submenu-dropdown" : "hide"
                }
                onMouseLeave={(event) => this.handleLeave(5)}
              >
                <QuickLinks
                  Title_item1="African Methodist Episcopal Zion church Website"
                  URL_item1="https://amez.org/"
                  Title_item2="Watch Live Stream"
                  URL_item2="https://livestream.com/littlerockamezion/"
                  Title_item3="WALKER FOR ZION 2020"
                  URL_item3="https://www.walkerforzion2020.com/"
                  Title_item4="Livingstone College"
                  URL_item4="https://livingstone.edu/"
                />
              </div>
            </ul>
          </div>
          {/* <NavbarToggler className="menu-link" onClick={this.props.onToggleMenu} className="mr-2" href="javascript:;"/> */}
          <nav>
            <a
              className="menu-link"
              onClick={this.props.onToggleMenu}
              href="javascript:;"
            ></a>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
