import React from "react";

import Layout from "../../components/Layout";
import Banner from "../../components/Banner";
import Event from "../../components/Event";
import { Container, Row, Col } from "react-bootstrap";

export default () => (
  <Layout>
    <div>
      <Banner
        id="banner"
        image={require("../../static/images/LR-WebPage-OurStaffNW_vrt.jpg")}
        Breadcrumb1="HOME"
        headerText="Event Flyers"
        tag1="a"
        href1="/"
        Breadcrumb2="GET CONNECTED"
        tag2="a"
        href2="#"
        Breadcrumb3="Event flyers"
        tag3="span"
      />

      <div className="secondary">
        <section id="two">
          <div className="inner">
            <Container>
              <Container>
                <Container>
                  <div className="left">
                    <Row>
                      <Col xs={12}>
                        <header className="major">
                          <h1>Event Flyers</h1>
                        </header>
                      </Col>
                    </Row>
                    <Event imageurl="../../static/images/events/event10.jpeg" />
                    <Event imageurl="../../static/images/events/event9.jpeg" />
                    <Event imageurl="../../static/images/events/event8.jpg" />
                    <Event imageurl="../../static/images/events/event6.jpg" />
                    <Event imageurl="../../static/images/events/event7.jpg" />
                    <Event imageurl="../../static/images/events/heritage-cultural.jpg" />
                    <Event imageurl="../../static/images/events/event2.JPEG" />
                    <Event imageurl="../../static/images/events/event3.JPEG" />
                    <Event imageurl="../../static/images/events/event1.JPEG" />
                    <Event imageurl="../../static/images/flyer.jpg" />
                    <Event imageurl="../../static/images/events/IMG_2417.jpg" />
                    <Event imageurl="../../static/images/events/IMG_2418.jpg" />
                  </div>
                </Container>
              </Container>
            </Container>
          </div>
        </section>
      </div>
    </div>
  </Layout>
);
