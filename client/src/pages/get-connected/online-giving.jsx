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
        headerText="Tithes & Offerings"
        image={require("../../static/images/LR-WebPage-GivingNW_vrt.jpg")}
        tag1="a"
        href1="/"
        Breadcrumb2="GET CONNECTED"
        tag2="a"
        href2="#"
        Breadcrumb3="Tithes & Offering"
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
                      <h1>Tithes & Offering</h1>
                    </header>
                    <img
                      className="header-image"
                      src={require("../../static/images/church-img3.jpg")}
                      alt="church image"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs={1} />
                  <Col xs={11}>
                    <br />
                    <p>
                      Your tithes and offerings are a testimony to your love for
                      God and commitment to His work. Your giving says you
                      recognize your vital responsibility as a steward over the
                      resources He has gifted to you. Your partnership with
                      Christ will yield ever increasing love for things eternal
                      and provide you comfort and peace through God’s abundant
                      love and grace. But just as you excel in everything, -see
                      that you also excel in this grace of giving. (2 Cor.8:7)
                    </p>
                    <p className="header">What is tithing?</p>
                    <p>
                      Proper stewardship involves giving in proportion to what a
                      person has received. Tithing is the practice of
                      proportionate giving of 10% of your income to God. A tithe
                      of everything… is Holy to the Lord. (Leviticus 27:30)
                    </p>

                    <p className="header">What is offering?</p>
                    <p>
                      Proper stewardship involves giving in proportion to what a
                      person has received. Tithing is the practice of
                      proportionate giving of 10% of your income to God. A tithe
                      of everything… is Holy to the Lord. (Leviticus 27:30)
                    </p>

                    <div>
                      Click To Give!
                      <form
                        action="https://www.paypal.com/cgi-bin/webscr"
                        target="blank"
                        method="post"
                      >
                        <input type="hidden" name="cmd" value="_s-xclick" />
                        <input
                          type="hidden"
                          name="hosted_button_id"
                          value="774431"
                        />
                        <input
                          name="submit"
                          type="image"
                          src="../../static/images/paypalDonate.jpg"
                          alt=""
                          align="middle"
                          border="0"
                        />
                        <img
                          alt=""
                          border="0"
                          src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                          width="1"
                          height="1"
                        />
                      </form>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </section>
      </div>
    </div>
  </Layout>
);
