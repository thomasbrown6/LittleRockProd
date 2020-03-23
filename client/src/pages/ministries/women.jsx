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
        headerText="Women's Ministry"
        Breadcrumb1="HOME"
        tag1="a"
        href1="/"
        Breadcrumb2="Ministries"
        tag2="a"
        href2="#"
        Breadcrumb3="Women's Ministry"
        tag3="span"
      />

      <div className="secondary">
        <section id="two">
          <div className="inner">
            <Row>
              <Col xs={12}>
                <div className="left">
                  <header className="major">
                    <h1 className="">Women's Ministry</h1>
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
              title1="Lady Golfing Ministry"
              panelTitle1="Lady Golfing Ministry"
              panelImage1={null}
              p1="Lady Golfing Ministry: To enhance Spiritual Development and Christian Discipline through team and individual golfing, focusing on sportsmanship, and teamwork among the ladies."
              title2="Women’s Home & Overseas Missionary Society"
              panelTitle2="Women’s Home & Overseas Missionary Society"
              panelImage2={null}
              p2="Women’s Home & Overseas Missionary Society: Women's Home and Overseas Missionary Society teaches the concepts of Christian missions and provides experiences for participation in mission work and its ministries; exemplifies the principles of Christian living; promotes the cause of World Evangelism; and serves as a financial support system to under gird the world mission outreach of the A.M.E. Zion Church at home and overseas."
            />
          </div>
        </section>
      </div>
    </div>
  </Layout>
);
