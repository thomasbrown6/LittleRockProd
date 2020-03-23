import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SidePanel from "./SidePanel";

class SideMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      activeIndex: 0
    };
  }

  handleClick = index => {
    this.setState({
      activeIndex: index
    });
  };

  render() {
    return (
      <Row>
        <Col xs={3}>
          <div className="sidemenu">
            <ul className="sidemenu-ul">
              {this.props.title1 != null && (
                <li
                  className={
                    this.state.activeIndex === 0
                      ? "sidemenu-item-active"
                      : "sidemenu-item"
                  }
                >
                  <span
                    onClick={event => this.handleClick(0)}
                    className="sidemenu-item-link"
                  >
                    {this.props.title1}
                  </span>
                </li>
              )}
              {this.props.title2 != null && (
                <li
                  className={
                    this.state.activeIndex === 1
                      ? "sidemenu-item-active"
                      : "sidemenu-item"
                  }
                >
                  <span
                    onClick={event => this.handleClick(1)}
                    className="sidemenu-item-link"
                  >
                    {this.props.title2}
                  </span>
                </li>
              )}
              {this.props.title3 != null && (
                <li
                  className={
                    this.state.activeIndex === 2
                      ? "sidemenu-item-active"
                      : "sidemenu-item"
                  }
                >
                  <span
                    onClick={event => this.handleClick(2)}
                    className="sidemenu-item-link"
                  >
                    {this.props.title3}
                  </span>
                </li>
              )}
              {this.props.title4 != null && (
                <li
                  className={
                    this.state.activeIndex === 3
                      ? "sidemenu-item-active"
                      : "sidemenu-item"
                  }
                >
                  <span
                    onClick={event => this.handleClick(3)}
                    className="sidemenu-item-link"
                  >
                    {this.props.title4}
                  </span>
                </li>
              )}
              {this.props.title5 != null && (
                <li
                  className={
                    this.state.activeIndex === 4
                      ? "sidemenu-item-active"
                      : "sidemenu-item"
                  }
                >
                  <span
                    onClick={event => this.handleClick(4)}
                    className="sidemenu-item-link"
                  >
                    {this.props.title5}
                  </span>
                </li>
              )}
              {this.props.title6 != null && (
                <li
                  className={
                    this.state.activeIndex === 5
                      ? "sidemenu-item-active"
                      : "sidemenu-item"
                  }
                >
                  <span
                    onClick={event => this.handleClick(5)}
                    className="sidemenu-item-link"
                  >
                    {this.props.title6}
                  </span>
                </li>
              )}
              {this.props.title7 != null && (
                <li
                  className={
                    this.state.activeIndex === 6
                      ? "sidemenu-item-active"
                      : "sidemenu-item"
                  }
                >
                  <span
                    onClick={event => this.handleClick(6)}
                    className="sidemenu-item-link"
                  >
                    {this.props.title7}
                  </span>
                </li>
              )}
              {this.props.title8 != null && (
                <li
                  className={
                    this.state.activeIndex === 7
                      ? "sidemenu-item-active"
                      : "sidemenu-item"
                  }
                >
                  <span
                    onClick={event => this.handleClick(7)}
                    className="sidemenu-item-link"
                  >
                    {this.props.title8}
                  </span>
                </li>
              )}
              {this.props.title9 != null && (
                <li
                  className={
                    this.state.activeIndex === 8
                      ? "sidemenu-item-active"
                      : "sidemenu-item"
                  }
                >
                  <span
                    onClick={event => this.handleClick(8)}
                    className="sidemenu-item-link"
                  >
                    {this.props.title9}
                  </span>
                </li>
              )}
              {this.props.title10 != null && (
                <li
                  className={
                    this.state.activeIndex === 9
                      ? "sidemenu-item-active"
                      : "sidemenu-item"
                  }
                >
                  <span
                    onClick={event => this.handleClick(9)}
                    className="sidemenu-item-link"
                  >
                    {this.props.title10}
                  </span>
                </li>
              )}
              {this.props.title11 != null && (
                <li
                  className={
                    this.state.activeIndex === 10
                      ? "sidemenu-item-active"
                      : "sidemenu-item"
                  }
                >
                  <span
                    onClick={event => this.handleClick(10)}
                    className="sidemenu-item-link"
                  >
                    {this.props.title11}
                  </span>
                </li>
              )}
              {this.props.title12 != null && (
                <li
                  className={
                    this.state.activeIndex === 11
                      ? "sidemenu-item-active"
                      : "sidemenu-item"
                  }
                >
                  <span
                    onClick={event => this.handleClick(11)}
                    className="sidemenu-item-link"
                  >
                    {this.props.title12}
                  </span>
                </li>
              )}
              {this.props.title13 != null && (
                <li
                  className={
                    this.state.activeIndex === 12
                      ? "sidemenu-item-active"
                      : "sidemenu-item"
                  }
                >
                  <span
                    onClick={event => this.handleClick(12)}
                    className="sidemenu-item-link"
                  >
                    {this.props.title13}
                  </span>
                </li>
              )}
              {this.props.title14 != null && (
                <li
                  className={
                    this.state.activeIndex === 13
                      ? "sidemenu-item-active"
                      : "sidemenu-item"
                  }
                >
                  <span
                    onClick={event => this.handleClick(13)}
                    className="sidemenu-item-link"
                  >
                    {this.props.title14}
                  </span>
                </li>
              )}
              {this.props.title15 != null && (
                <li
                  className={
                    this.state.activeIndex === 14
                      ? "sidemenu-item-active"
                      : "sidemenu-item"
                  }
                >
                  <span
                    onClick={event => this.handleClick(14)}
                    className="sidemenu-item-link"
                  >
                    {this.props.title15}
                  </span>
                </li>
              )}
              {this.props.title16 != null && (
                <li
                  className={
                    this.state.activeIndex === 15
                      ? "sidemenu-item-active"
                      : "sidemenu-item"
                  }
                >
                  <span
                    onClick={event => this.handleClick(15)}
                    className="sidemenu-item-link"
                  >
                    {this.props.title16}
                  </span>
                </li>
              )}
              {this.props.title17 != null && (
                <li
                  className={
                    this.state.activeIndex === 16
                      ? "sidemenu-item-active"
                      : "sidemenu-item"
                  }
                >
                  <span
                    onClick={event => this.handleClick(16)}
                    className="sidemenu-item-link"
                  >
                    {this.props.title17}
                  </span>
                </li>
              )}
              {this.props.title18 != null && (
                <li
                  className={
                    this.state.activeIndex === 17
                      ? "sidemenu-item-active"
                      : "sidemenu-item"
                  }
                >
                  <span
                    onClick={event => this.handleClick(17)}
                    className="sidemenu-item-link"
                  >
                    {this.props.title18}
                  </span>
                </li>
              )}
              {this.props.title19 != null && (
                <li
                  className={
                    this.state.activeIndex === 18
                      ? "sidemenu-item-active"
                      : "sidemenu-item"
                  }
                >
                  <span
                    onClick={event => this.handleClick(18)}
                    className="sidemenu-item-link"
                  >
                    {this.props.title19}
                  </span>
                </li>
              )}
              {this.props.title20 != null && (
                <li
                  className={
                    this.state.activeIndex === 19
                      ? "sidemenu-item-active"
                      : "sidemenu-item"
                  }
                >
                  <span
                    onClick={event => this.handleClick(19)}
                    className="sidemenu-item-link"
                  >
                    {this.props.title20}
                  </span>
                </li>
              )}
              {this.props.title21 != null && (
                <li
                  className={
                    this.state.activeIndex === 20
                      ? "sidemenu-item-active"
                      : "sidemenu-item"
                  }
                >
                  <span
                    onClick={event => this.handleClick(20)}
                    className="sidemenu-item-link"
                  >
                    {this.props.title21}
                  </span>
                </li>
              )}
            </ul>
          </div>
        </Col>
        <Col xs={9}>
          <SidePanel
            activeIndex={this.state.activeIndex}
            panelTitle1={this.props.title1}
            panelImage1={this.props.panelImage1}
            p1={this.props.p1}
            panelTitle2={this.props.title2}
            panelImage2={this.props.panelImage2}
            p2={this.props.p2}
            panelTitle3={this.props.title3}
            panelImage3={this.props.panelImage3}
            p3={this.props.p3}
            panelTitle4={this.props.title4}
            panelImage4={this.props.panelImage4}
            p4={this.props.p4}
            panelTitle5={this.props.title5}
            panelImage5={this.props.panelImage5}
            p5={this.props.p5}
            panelTitle6={this.props.title6}
            panelImage6={this.props.panelImage6}
            p6={this.props.p6}
            panelTitle7={this.props.title7}
            panelImage7={this.props.panelImage7}
            p7={this.props.p7}
            panelTitle8={this.props.title8}
            panelImage8={this.props.panelImage8}
            p8={this.props.p8}
            panelTitle9={this.props.title9}
            panelImage9={this.props.panelImage9}
            p9={this.props.p9}
            panelTitle10={this.props.title10}
            panelImage10={this.props.panelImage10}
            p10={this.props.p10}
            panelTitle11={this.props.title11}
            panelImage11={this.props.panelImage11}
            p11={this.props.p11}
            panelTitle12={this.props.title12}
            panelImage12={this.props.panelImage12}
            p12={this.props.p12}
            panelTitle13={this.props.title13}
            panelImage13={this.props.panelImage13}
            p13={this.props.p13}
            panelTitle14={this.props.title14}
            panelImage14={this.props.panelImage14}
            p14={this.props.p14}
            panelTitle15={this.props.title15}
            panelImage15={this.props.panelImage15}
            p15={this.props.p15}
            panelTitle16={this.props.title16}
            panelImage16={this.props.panelImage16}
            p16={this.props.p16}
            panelTitle17={this.props.title17}
            panelImage17={this.props.panelImage17}
            p17={this.props.p17}
            panelTitle18={this.props.title18}
            panelImage18={this.props.panelImage18}
            p18={this.props.p18}
            panelTitle19={this.props.title19}
            panelImage19={this.props.panelImage19}
            p19={this.props.p19}
            panelTitle20={this.props.title20}
            panelImage20={this.props.panelImage20}
            p20={this.props.p20}
            panelTitle21={this.props.title21}
            panelImage21={this.props.panelImage21}
            p21={this.props.p21}
          />
        </Col>
      </Row>
    );
  }
}

export default SideMenu;
