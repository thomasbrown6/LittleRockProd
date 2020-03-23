import React from "react";

import Layout from "../../components/Layout";
import Banner from "../../components/Banner";
import { Container, Row, Col } from "react-bootstrap";

export default () => (
  <Layout>
    <div>
      <Banner
        id="banner"
        Breadcrumb1="HOME"
        headerText="Visitors"
        image={require("../../static/images/LR-WebPage-YYANW_vrt.jpg")}
        tag1="a"
        href1="/"
        Breadcrumb2="GET CONNECTED"
        tag2="a"
        href2="#"
        Breadcrumb3="Visitors"
        tag3="span"
      />

      <div className="secondary">
        <section id="two">
          <div className="inner">
            <Container>
              <div className="left">
                <Row>
                  <Col xs={12}>
                    <header className="major">
                      <h1>VISITORS</h1>
                    </header>
                    <img
                      className="header-image"
                      src={require("../../static/images/church-img.jpg")}
                      alt="church image"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs={2} />
                  <Col xs={10}>
                    <h2>
                      <br />
                      Welcome!
                    </h2>
                    <p>
                      We are delighted that you have decided to spend some time
                      with us on our website! It is our sincere and humble
                      prayer that you find your worship experience transforming
                      and you will find the content on our sight informative!
                    </p>
                  </Col>
                  <Col xs={1} />
                </Row>
              </div>
            </Container>
          </div>
        </section>
      </div>
    </div>
  </Layout>
);
