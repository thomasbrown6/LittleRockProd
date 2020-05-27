import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Dropdown from "./Dropdown";

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null
    };
    //this.handleClick = this.handleClick.bind(this)
    //this.handleHoverMenu = this.handleHoverMenu.bind(this)
  }

  handleClick = (value) => {
    if (value === this.state.activeIndex) {
      this.setState({
        activeIndex: null
      });
    } else {
      this.setState({
        activeIndex: value
      });
    }
  };

  onClose = () => {
    this.props.closeMenu();
    this.setState({ activeIndex: null });
  };

  render() {
    return (
      <nav id="menu">
        <div className="inner">
          <ul className="actions vertical">
            <li className="nav-li">
              <a href="#" className="button">
                Watch Online
              </a>
            </li>
          </ul>
          <ul className="links">
            <li className="nav-li">
              <Link className="nav-link" to="/">
                <span onClick={this.props.closeMenu}>Home</span>
              </Link>
            </li>
            <li className="nav-li">
              <span
                className="nav-link"
                onClick={(event) => this.handleClick(1)}
              >
                Who We Are
              </span>
            </li>
            <Dropdown
              hidden={this.state.activeIndex === 1 ? "" : "hide"}
              item1="Meet The Pastor"
              url1="/who-we-are/meet-the-pastor"
              item2="What We Believe"
              url2="/who-we-are/what-we-believe"
              item3="What is the A.M.E. Zion Church?"
              url3="/who-we-are/what-is-the-a-m-e-zion-church"
              item4="Our History"
              url4="/who-we-are/our-history"
              item5="Our Staff"
              url5="/who-we-are/our-staff"
              item6="Stewards & Trustees"
              url6="/who-we-are/stewards-and-trustees"
            />
            <li className="nav-li">
              <span
                className="nav-link"
                onClick={(event) => this.handleClick(2)}
              >
                Get Connected
              </span>
            </li>
            <Dropdown
              hidden={this.state.activeIndex === 2 ? "" : "hide"}
              item1="Members"
              url1="/get-connected/members"
              item2="Visitors"
              url2="/get-connected/visitors"
              item3="Tithes & Offerings"
              url3="/get-connected/tithes-offerings"
              item4="Have You Said Yes to Christ?"
              url4="/get-connected/have-you-said-yes-to-christ"
              item6="Contact Us"
              url6="/get-connected/contact-us"
            />
            <li className="nav-li">
              <span
                className="nav-link"
                onClick={(event) => this.handleClick(3)}
              >
                Ministries
              </span>
            </li>
            <Dropdown
              hidden={this.state.activeIndex === 3 ? "" : "hide"}
              item1="Adult & Family Life"
              url1="/ministries/adult-family-life"
              item2="Children, Youth & Young Adults"
              url2="/ministries/children-youth-young-adults"
              item4="Discipleship"
              url4="/ministries/discipleship"
              item5="Evangelism"
              url5="/ministries/evangelism"
              item6="Praise & Worship"
              url6="/ministries/praise-worship"
              item7="Men's Ministries"
              url7="/ministries/men"
            />
            <li className="nav-li">
              <span
                className="nav-link"
                onClick={(event) => this.handleClick(4)}
              >
                News & Events
              </span>
            </li>
            <Dropdown
              hidden={this.state.activeIndex === 4 ? "" : "hide"}
              item1="Event Flyers"
              url1="/events/event-flyers"
              item2="Calendar"
              url2="/events/calendar"
            />
            <li className="nav-li">
              <span
                className="nav-link"
                onClick={(event) => this.handleClick(5)}
              >
                Media & Resources
              </span>
            </li>
            <Dropdown
              hidden={this.state.activeIndex === 5 ? "" : "hide"}
              item1="Watch Online"
              url1="/media-resources/watch-online"
              item2="Photo Gallery"
              url2="/media-resources/photo-gallery"
              item3="News Letter"
              url3="/media-resources/news-letter"
            />
            <li className="nav-li">
              <span
                className="nav-link"
                onClick={(event) => this.handleClick(6)}
              >
                Quick Links
              </span>
            </li>
            <Dropdown
              hidden={this.state.activeIndex === 6 ? "" : "hide"}
              item1="African Methodist Episcopal Zion church Website"
              url1="https://amez.org/"
              item2="Watch Live Stream"
              url2="https://livestream.com/littlerockamezion/"
              item3="WALKER for ZION 2020"
              url3="https://www.walkerforzion2020.com/"
              item4="Livingstone College"
              url4="https://livingstone.edu/"
            />
          </ul>
        </div>
        <a className="close" onClick={this.onClose} href="javascript:;">
          Close
        </a>
      </nav>
    );
  }
}

SideNav.propTypes = {
  closeMenu: PropTypes.func,
  onToggleMenu: PropTypes.func
};

export default SideNav;
