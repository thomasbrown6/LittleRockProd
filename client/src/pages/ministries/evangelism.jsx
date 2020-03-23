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
        Breadcrumb1="HOME"
        headerText="EVANGELISM"
        tag1="a"
        href1="/"
        Breadcrumb2="Ministries"
        tag2="a"
        href2="#"
        Breadcrumb3="EVANGELISM"
        tag3="span"
      />

      <div className="secondary">
        <section id="two">
          <div className="inner">
            <Row>
              <Col xs={12}>
                <div className="left">
                  <header className="major">
                    <h1 className="">EVANGELISM</h1>
                    <img
                      className="header-image"
                      id="churchimg3"
                      src={require("../../static/images/church4.jpg")}
                    />
                  </header>
                </div>
              </Col>
            </Row>
            <SideMenu
              title1="Canvas Ministry"
              panelTitle1="Canvas Ministry"
              //panelImage1={require("../../static/images/image-prayerstation.jpg")}
              p1="Canvas Ministry: To help promote activities outside the doors of the church within the surrounding community."
              title2="Evangelism Ministry"
              panelTitle2="Evangelism Ministry"
              p2="Evangelism Ministry: To promote the spirit and mission of the ministry of our Lord and to employ the most effective means to accomplish the chief end of the gospel - the salvation of souls; and that the church may more vigorously apply the moral and spiritual agencies by which men are served from sin and trained for heaven."
              title3="Prison Ministry"
              panelTitle3="Prison Ministry"
              p3="Prison Ministry: To provide ministry to those who are incarcerated, were incarcerated and their families."
              title4="Street Ministry"
              panelTitle4="Street Ministry"
              p4="Street Ministry: To spread the love of God through His word and provide supplies to individuals who may be in need."
            />
          </div>
        </section>
      </div>
    </div>
  </Layout>
);
