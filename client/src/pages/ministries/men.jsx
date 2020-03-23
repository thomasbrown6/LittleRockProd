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
        image={require("../../static/images/LR-WebPage-MenBoostersNW_vrt.jpg")}
        headerText="Men's Ministry"
        Breadcrumb1="HOME"
        tag1="a"
        href1="/"
        Breadcrumb2="Ministries"
        tag2="a"
        href2="#"
        Breadcrumb3="Men's Ministry"
        tag3="span"
      />

      <div className="secondary">
        <section id="two">
          <div className="inner">
            <Row>
              <Col xs={12}>
                <div className="left">
                  <header className="major">
                    <h1 className="">Men's Ministry</h1>
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
              title1="Men’s Boosters Ministry"
              panelTitle1="Men’s Boosters Ministry"
              panelImage1="../../static/images/image-mens-ministry.jpg"
              p1="Men’s Boosters Ministry: To provide spiritual nurture and develop an atmosphere of Christ-like brotherhood and unity among the men of Little Rock and the community. The ministry seeks through fellowship, study, workshops and prayer to encourage and empower the men of Little Rock in their walk and spiritual development as strong Christian Men."
              title2="Men’s Choir"
              panelTitle2="Men’s Choir"
              panelImage2="../../static/images/image-mens-ministry.jpg"
              p2="Men’s Choir: To provide an opportunity for men to lead and inspire the congregation in worship services through the rendering of diverse forms of sacred music."
            />
          </div>
        </section>
      </div>
    </div>
  </Layout>
);
