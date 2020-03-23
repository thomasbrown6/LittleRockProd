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
        headerText="Members"
        image={require("../../static/images/LR-WebPage-YYANW_vrt.jpg")}
        tag1="a"
        href1="/"
        Breadcrumb2="GET CONNECTED"
        tag2="a"
        href2="#"
        Breadcrumb3="MEMBERS"
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
                      <h1>MEMBERS</h1>
                    </header>
                    <img
                      className="header-image"
                      src={require("../../static/images/church-img3.jpg")}
                      alt="church image"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs={2} />
                  <Col xs={10}>
                    <h2>
                      <br />
                      Three Ways to Become a Member of the Church:
                    </h2>
                    <p className="header">1. PROFESSION OF FAITH</p>
                    <br />
                    <p className="header">2. THE RE-AFFIRMATION OF FAITH</p>
                    <br />
                    <p className="header">3. LETTER OF TRANSFER</p>
                    <br />
                    <p>
                      <span className="bold">ITS MEANING AND PURPOSE:</span>{" "}
                      When you walked up the aisle, stood before the altar and
                      made your vow to God in the presence of the congregation,
                      you took the most solemn obligation of your life. By
                      joining the church, you became a part of the body of
                      Christ.
                    </p>
                    <p>
                      <span className="bold">CONDITION OF MEMBERSHIP:</span>{" "}
                      “There is only one condition previously required of these
                      societies. A desire to flee from wrath and to be saved
                      from their sins. But wherever this is really fixed in the
                      soul, it will be shown by its fruits.” (A.M.E. Zion
                      Discipline).
                    </p>
                    <p>
                      <span className="bold">STEPS TO BE TAKEN:</span> In order
                      to provide each new member to Methodism an opportunity to
                      make certain of his/her decision to join our denomination,
                      let us make an effort to train him/ her in our doctrine.
                      Let great care be taken in receiving persons on probation
                      and let no one be so received as enrolled who does not
                      give satisfactory evidence of his/her desire to “flee the
                      wrath to come and to be saved from his/her sins.”
                      Probation should last no longer than six (6) months.
                    </p>
                    <p>
                      <span className="bold">
                        ADMISSION INTO FULL CONNECTION:
                      </span>{" "}
                      A probationer may be admitted into full membership
                      providing he/she has served out his/her probation, has
                      been baptized, completed the New Members Class, and on
                      examination by the Pastor before the church as required by
                      the Discipline, given satisfactory assurance both of the
                      correctness of his/her faith and of his/her willingness to
                      observe and keep the rules of the church. A member in good
                      standing in any other Methodist church, desiring to unite
                      with us, may be received on his/her certificate of
                      membership, and by giving satisfactory answers to the
                      usual questions laid down in our formula for the reception
                      of members and completion of new members orientation.
                    </p>
                    <p>
                      <span className="bold">LETTER OF TRANSFER:</span> A good
                      Christian will want to belong to a church in the city
                      where he/she lives. Therefore, we advise each person who
                      moves into the city to secure from the Pastor of the
                      former church, a letter of transfer. On presentation of
                      this letter, one who transfers from another A.M.E. Zion
                      Church will be accepted in full connection of our church.
                    </p>
                    <p>
                      <span className="bold">SPIRITUAL DUTIES:</span> Each
                      member is expected to engage in both public and private
                      worship. We recommend the use of devotional material
                      published by the A.M.E. Zion Church, and other Methodist
                      denominations as aids in private worship. We strongly
                      encourage family worship at least once per week. A good
                      member will seek to attend public worship each Sunday.
                      Whenever possible, he/she will attend mid-week bible
                      study, and other church activities. He/she will lose no
                      opportunity to cultivate his/her spiritual life.
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
