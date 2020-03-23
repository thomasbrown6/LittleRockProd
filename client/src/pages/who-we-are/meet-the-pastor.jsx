import React from "react";

import Layout from "../../components/Layout";
import Banner from "../../components/Banner";
import { Container, Row, Col } from "react-bootstrap";

export default () => (
  <Layout>
    <div>
      <Banner
        id="banner"
        image={require("../../static/images/LR-WebPage-OurPastorNW_vrt.jpg")}
        headerText=""
        Breadcrumb1="HOME"
        tag1="a"
        href1="/"
        Breadcrumb2="WHO WE ARE"
        tag2="a"
        href2="#"
        Breadcrumb3="MEET THE PASTOR"
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
                      <h1>Meet The Pastor</h1>
                      <img
                        id="pastor-img"
                        src={require("../../static/images/pastor.jpg")}
                        />
                        <h2>REVEREND DR. DWAYNE ANTHONY WALKER</h2>
                    </header>
                    <p>
                      Rev. Dr. Dwayne Anthony Walker was born in Rock Hill,
                      South Carolina. He later moved with his family to Chicago,
                      Illinois, where he received his early education in the
                      Chicago Public Schools. He is a graduate of Livingstone
                      College, Salisbury, North Carolina where he received the
                      Bachelor of Arts Degree in Political Science.{" "}
                    </p>
                    <p>
                      After accepting the call to preach, he enrolled at Wesley
                      Theological Seminary in Washington, D.C. While a student,
                      he served as Assistant Pastor for Youth and Young Adult
                      Ministry at John Wesley A.M.E. Zion Church in Washington,
                      D.C.
                    </p>
                    <p>
                      {" "}
                      He received the Master of Divinity Degree in 1989 and in
                      June that year, he was appointed Pastor of Metropolitan
                      A.M.E. Zion Church in Detroit, Michigan. In November of
                      1994, Dr. Walker was appointed to serve as Pastor of Jones
                      Tabernacle A.M.E. Zion Church, Indianapolis, Indiana. In
                      addition to serving as Pastor of Jones Tabernacle, Dr.
                      Walker served as Administrator of Kuumba Horizons Child
                      Development Center. He was also a member of the board of
                      Celebration of Hope, member of the board of Volunteers of
                      America and a member of the Advisory Board of United
                      Negro College Fund. In May 2004, Dr. Walker received the
                      Doctor of Ministry degree from Wesley Theological
                      Seminary, Washington, D.C.
                    </p>
                    <p>
                      {" "}
                      In September of 2005, he was appointed as pastor of Little
                      Rock A.M.E. Zion Church, Charlotte, North Carolina. Dr.
                      Walker currently serves as a member of The Board of
                      Trustees of Livingstone College, The Board of Dorothy
                      Walls Conference and Retreat Center, member of The Black
                      Political Caucus, The NAACP, the Chairman of the Little
                      Rock Community Development Corporation, a former member of
                      the Charlotte Mecklenburg Planning Commission and Vice
                      Chair of the Charlotte Mecklenburg Community Relations
                      Committee.
                    </p>
                    <p>
                      {" "}
                      Dr. Walker is the son of Retired Bishop and Mrs. George
                      W.C. Walker, Sr. He was married to the late Geneva T.
                      Moore Walker who God welcomed Mrs. Walker home a few years
                      ago. He is the proud father of four beautiful daughters,
                      DeAndra, Dana, Daivene and Deborah. Dr. Walker has one
                      grandson Dylan Amir and one granddaughter, Meliya Geneva.
                    </p>
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
