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
        image={require("../../static/images/LR-WebPage-ChldrnMinNW_vrt.jpg")}
        headerText="CHILDREN, YOUTH & YOUNG ADULTS"
        Breadcrumb1="HOME"
        tag1="a"
        href1="/"
        Breadcrumb2="Ministries"
        tag2="a"
        href2="#"
        Breadcrumb3="CHILDREN, YOUTH & YOUNG ADULTS"
        tag3="span"
      />

      <div className="secondary">
        <section id="two">
          <div className="inner">
            <Row>
              <Col xs={12}>
                <div className="left">
                  <header className="major">
                    <h1 className="">CHILDREN, YOUTH & YOUNG ADULTS</h1>
                    {/* <img
                        className="header-image"
                        id="churchimg3"
                        src={require("../../static/images/image-youth-ministry.jpg")}
                      /> */}
                  </header>
                </div>
              </Col>
            </Row>
            <SideMenu
              title1="Athletic Ministry"
              panleTitle1=""
              panelImage1={null}
              p1="Athletic Ministry: To enhance Spiritual Development and Christian Discipline through team and individual sports, focusing on sportsmanship, dedication, teamwork, and discipline. Inclusive of all ages."
              title2="Children’s Ushers"
              panleTitle2="Children’s Ushers"
              panelImage2={null}
              p2="Children’s Ushers: To greet members and visitors, to monitor needs of the congregation, and to offer assistance throughout the worship experience."
              title3="The Nursery Ministry"
              panleTitle3=""
              panelImage3={null}
              p3="Nursery Ministry provides care for children (infants - 4 years olds) in a safe and comfortable environment during worship services."
              title4="Millennial Ministry"
              panleTitle4="Millennial Ministry"
              panelImage4={null}
              p4="Millennial Ministry: The Millennial Ministry seeks to provide access to spiritual, financial and personal development issues /concerns to those between the ages of 21-40."
              title5="Young Adults in Christian Ministry"
              panleTitle5="Young Adults in Christian Ministry"
              panelImage5={null}
              p5="Young Adults in Christian Ministry (YACM): To unite men and women, ages 22 - 40, of the A.M.E. Zion Church to use their time and talent for mission service in the church and the community."
              title6="Young Adult Ushers"
              panleTitle6="Young Adult Ushers"
              panelImage6={null}
              p6="Young Adult Ushers: To greet members and visitors, to monitor needs of the congregation, to facilitate order and decorum, and to offer assistance throughout the worship experience. Ages 22-40."
              title7="Young Adult Ministry"
              panleTitle7=""
              panelImage7={null}
              p7="Young Adult Ministry unites the community of young adults ages 18-40, in Christian fellowship and helps to guide them to their purpose. They strive to empower young adults to use their gifts to glorify God and edify the body of Christ, and to have a deeper appreciation and greater understanding of their relationship with community, Church and Christ."
              title8="Youth Ushers"
              panleTitle8="Youth Ushers"
              panelImage8={null}
              p8={
                "Youth Ushers: To greet members and visitors, to monitor needs of the congregation, to facilitate order and decorum, and to offer assistance throughout the worship experience. Ages 13-21"
              }
            />
          </div>
        </section>
      </div>
    </div>
  </Layout>
);
