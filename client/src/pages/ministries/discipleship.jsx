import React from "react";

import Layout from "../../components/Layout";
import Banner from "../../components/Banner";
import { Row, Col } from "react-bootstrap";
import SideMenu from "../../components/SideMenu";

export default () => (
  <Layout>
    <div>
      <Banner
        id="banner"
        image={require("../../static/images/LR-WebPage-AboutUsNW_vrt.jpg")}
        headerText="Discipleship"
        Breadcrumb1="HOME"
        tag1="a"
        href1="/"
        Breadcrumb2="Ministries"
        tag2="a"
        href2="#"
        Breadcrumb3="Discipleship"
        tag3="span"
      />

      <div className="secondary">
        <section id="two">
          <div className="inner">
            <Row>
              <Col xs={12}>
                <div className="left">
                  <header className="major">
                    <h1 className="">Discipleship</h1>
                    {/* <img
                        className="header-image"
                        id="churchimg3"
                        src={require("../../static/images/church3.jpg")}
                      /> */}
                  </header>
                </div>
              </Col>
            </Row>
            <SideMenu
              title1="Bread of Life Ministry"
              panelTitle1="Bread of Life Ministry"
              panelImage1={null}
              p1="Bread of Life Ministry: To promote healthy, nutritional meals to transient individuals and Senior Citizens of the community."
              title2="Heaven’s Storehouse Ministry"
              panelTitle2="Heaven’s Storehouse Ministry"
              panelImage2={null}
              p2="Heaven’s Storehouse Ministry: To provide clothing and food to those in need and with shelter when needed."
            />
          </div>
        </section>
      </div>
    </div>
  </Layout>
);
