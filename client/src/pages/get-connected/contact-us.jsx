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
        headerText="Contact Us"
        image={require("../../static/images/church-img2.jpg")}
        tag1="a"
        href1="/"
        Breadcrumb2="WHO WE ARE"
        tag2="a"
        href2="#"
        Breadcrumb3="Contact Us"
        tag3="span"
      />

      <div className="secondary">
        <section id="two">
          <div className="inner">
            <Container>
              <Row>
                <Col xs={12}>
                  <div className="left">
                    <header className="major">
                      <h1>Contact Us</h1>
                    </header>
                    <Row>
                      <Col xs={12}>
                        <h2 className="center">Service Times</h2>
                        <p className="center mb-0 bold">Sunday</p>
                        <p className="center mb-0">Worship: 10:00 AM</p>
                        <p className="center"> Sunday School: 9:00 - 9:45 AM</p>
                        <p className="center mb-0 bold">Wednesday</p>
                        <p className="center">
                          Bible Study: 12:00 PM & 7:00 PM
                        </p>

                        <hr className="center grid-divider"></hr>

                        <h2 className="center">Map/Directions</h2>
                        <p className="center mb-0 bold">
                          Little Rock A.M.E. Zion Church
                        </p>
                        <p className="center mb-0">401 North McDowell St.</p>
                        <p className="center mb-0">Charlotte, NC 28204</p>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      </div>
    </div>
  </Layout>
);
