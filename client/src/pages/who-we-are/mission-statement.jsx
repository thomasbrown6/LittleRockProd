import React from "react";
import Layout from "../../components/Layout";
import Banner from "../../components/Banner";
import { Container, Row, Col } from "react-bootstrap";

export default () => (
  <Layout>
    <div>
      <Banner
        id="banner"
        image={require("../../static/images/LR-WebPage-OutreachNW_vrt.jpg")}
        headerText="Mission Statement"
        Breadcrumb1="HOME"
        tag1="a"
        href1="/"
        Breadcrumb2="WHO WE ARE"
        tag2="a"
        href2="#"
        Breadcrumb3="Mission Statement"
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
                      <h1>Mission Statement</h1>
                      <img
                        className="header-image"
                        id="churchimg3"
                        src={require("../../static/images/choir-bg.jpg")}
                      />
                    </header>
                    <p>
                      The mission of Little Rock A.M.E. Zion Church is to
                      “Proclaim the Good News of Jesus Christ” to the world by
                      word and deed with the aim of winning a positive response
                      to Him and His Church by becoming members of the same. We
                      are to mature our fellowship (Little Rock Church) through
                      “Excellence in Ministry” where God is Glorified, Jesus
                      Christ is Magnified, People are Edified, Faith is
                      Fortified and Ministry is Multiplied.” We are to make
                      disciples of all persons until He shall come again to
                      reign over us in love, mercy and justice forever.
                    </p>
                    <h3 className="bold">
                      Written by Rev. Dr. James D. Armstrong
                    </h3>
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
