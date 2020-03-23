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
        image={require("../../static/images/LR-WebPage-WomenMinNW_vrt.jpg")}
        headerText="Support Services"
        Breadcrumb1="HOME"
        tag1="a"
        href1="/"
        Breadcrumb2="Ministries"
        tag2="a"
        href2="#"
        Breadcrumb3="Support Services"
        tag3="span"
      />

      <div className="secondary">
        <section id="two">
          <div className="inner">
            <Row>
              <Col xs={12}>
                <div className="left">
                  <header className="major">
                    <h1 className="">Support Services</h1>
                    <img
                      className="header-image"
                      id="churchimg3"
                      src={require("../../static/images/church3.jpg")}
                    />
                  </header>
                </div>
              </Col>
            </Row>
            <SideMenu
              title1="Counseling Ministry"
              panelTitle1="Counseling Ministry"
              panelImage1={null}
              p1="Counseling Ministry: To provide spiritual counseling to members who are experiencing personal crisis and change."
              title2="Grief Ministry"
              panelTitle2="Grief Ministry"
              panelImage2={null}
              p2="Grief Ministry: Provides Grief counselors who help persons cope with the loss of a spouse, parent, or other loved one. The ministry has a set curriculum."
              title3="Health Resource Ministry"
              panelTitle3="Health Resource Ministry"
              panelImage3={null}
              p3="Health Resource Ministry: To provide ongoing resources and information on health, safety and other related issues and to provide onsite medical care when needed."
              title4="Substance Abuse Ministry"
              panelTitle4="Substance Abuse Ministry"
              panelImage4={null}
              p4="Substance Abuse Ministry: To provide spiritual and emotional support to persons undergoing recovery from substance abuse."
              title5="Tutorial Ministry"
              panelTitle5="Tutorial Ministry"
              panelImage5={null}
              p5="Tutorial Ministry: To provide academic support to students of Little Rock and the community at large."
            />
          </div>
        </section>
      </div>
    </div>
  </Layout>
);
