import React from "react";

import Layout from "../components/Layout";
import Banner from "../components/Banner";
import { Container, Row, Col } from "react-bootstrap";

export default () => (
  <Layout>
    <div>
      <Banner
        id="banner"
        image={require("../static/images/LR-WebPage-OurPastorNW_vrt.jpg")}
        headerText="PASTOR'S MESSAGE"
        Breadcrumb1="HOME"
        tag1="a"
        href1="/"
        Breadcrumb2="PASTOR'S MESSAGE"
        tag2="a"
        href2="#"
      />

      <div className="secondary">
        <section id="two">
          <div className="inner">
            <Container>
              <Row>
                <Col xs={12}>
                  <div className="left">
                    <header className="major">
                      <h1>Our Pastor's Message</h1>
                      <img
                        id=""
                        src={require("../static/images/paster2.jpg")}
                      />
                      <h2>REVEREND DR. DWAYNE ANTHONY WALKER</h2>
                    </header>
                    <p>Dear Beloved,</p>
                    <p>Praise God from Whom all blessings flow!</p>

                    <p>
                      Welcome to the Little Rock A.M.E. Zion Church website. I
                      am tremendously grateful for the awesome privilege to have
                      received my 13th appointment as pastor of Little Rock A .M
                      .E. Zion Church. I recognize the distinction we have as
                      the flagship church of The Piedmont Episcopal District. I
                      thank God for using Bishop George E. Battle, Jr. to
                      entrust me with this wonderful assignment.
                    </p>
                    <p>
                      I am absolutely excited about all God continues to show me
                      regarding the possibilities that are ours if we would only
                      believe and embrace the vision of "Excellence in
                      Ministry". I still believe in the components of this
                      vision. I sincerely believe that this vision will produce
                      a healthy church. From all we have read concerning the
                      marks of a healthy church, we certainly fit the
                      description, but I know there is still much room for
                      improvement.
                    </p>
                    <p>
                      It is my intent to do all I can to instruct, inform and
                      inspire all members and ministries to work together as we
                      do our part to fulfill the Kingdom objectives of our God.
                      I am clear in understanding that if we want God to bless
                      what we do, we must do what He blesses. I am convinced
                      that if we worship together, pray together, study together
                      and work together, we will indeed see how we will be "A
                      Healthy Church becoming Healthier!"
                    </p>
                    <p>
                      I solicit your prayers, support and cooperation as we go
                      to new and exciting levels striving for "Excellence in
                      Ministry!" If you are in search of a church home, “Welcome
                      Home” -- Little Rock would love to be your church and I
                      would love to be your Pastor!
                    </p>
                    <p>Peace and Blessings,</p>
                    <p>Dr. Dwayne Anthony Walker, Pastor</p>
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
