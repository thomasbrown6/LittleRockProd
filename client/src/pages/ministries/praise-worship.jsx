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
        headerText="Praise & Worship"
        Breadcrumb1="HOME"
        tag1="a"
        href1="/"
        Breadcrumb2="Ministries"
        tag2="a"
        href2="#"
        Breadcrumb3="Praise & Worship"
        tag3="span"
      />

      <div className="secondary">
        <section id="two">
          <div className="inner">
            <Row>
              <Col xs={12}>
                <div className="left">
                  <header className="major">
                    <h1 className="">Praise & Worship</h1>
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
              title1="Acolyte Ministry"
              panelTitle1="Acolyte Ministry"
              p1="Acolyte Ministry: To encourage our youth to take an active role in the Sunday Morning Worship Service by training them to light, tend and extinguish the altar flame; which is symbolic of the presence of God in our midst. You must be at least 8 years of age to participate."
              title1="Children’s Choir"
              panelTitle1="Children’s Choir"
              p1="Children’s Choir: To allow our children to participate in the worship service through song, nurturing spiritually while learning about the good news."
              title1="Hand Bell Choir"
              panelTitle1="Hand Bell Choir"
              p1="Hand Bell Choir: To provide opportunities for children – teenagers to play in an instrumental of tone chimes. Group plays on selected Sundays for special services."
              title1="Liturgical Dance Ministry"
              panelTitle1="Liturgical Dance Ministry"
              p1="Liturgical Dance Ministry: To minister before the Lord and to the congregation through praise dancing and worship."
              title1="Sanctuary Choir"
              panelTitle1="Sanctuary Choir"
              p1="Sanctuary Choir: To lead and inspire the congregation in worship services through the rendering of diverse forms of sacred music, bringing glory to God and winning souls for His kingdom. In addition, the Sanctuary Choir provides musical enrichment for all functions and events in the life of the church, as requested."
              title1="Youth and Young Adult Choir"
              panelTitle1="Youth and Young Adult Choir"
              p1="Youth and Young Adult Choir: To allow our youth and young adults, ages 12-40, an opportunity to lead and inspire the congregation in worship services through the rendering of diverse forms of sacred music. "
            />
          </div>
        </section>
      </div>
    </div>
  </Layout>
);
