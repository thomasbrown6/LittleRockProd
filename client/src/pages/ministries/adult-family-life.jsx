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
        image={require("../../static/images/LR-WebPage-OutreachNW_vrt.jpg")}
        headerText="Adult & Family Life"
        Breadcrumb1="HOME"
        tag1="a"
        href1="/"
        Breadcrumb2="Ministries"
        tag2="a"
        href2="#"
        Breadcrumb3="Adult & Family Life"
        tag3="span"
      />

      <div className="secondary">
        <section id="two">
          <div className="inner">
            <Row>
              <Col xs={12}>
                <div className="left">
                  <header className="major">
                    <h1 className="">ADULT & FAMILY LIFE</h1>
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
              title1="Athletic Ministry"
              panelTitle1="Athletic Ministry"
              panelImage1="../../static/images/image-mens-ministry.jpg"
              p1="To enhance Spiritual Development and Christian Discipline through team and individual sports, focusing on sportsmanship, dedication, teamwork, and discipline. Inclusive of all ages."
              title2="Banner Guild Ministry"
              panelTitle2="Banner Guild Ministry"
              panelImage2={null}
              p2="To provide seasonal liturgical banners for education and beautification of the sanctuary."
              title3="Culinary Ministry"
              panelTitle3="Culinary Ministry"
              panelImage3={null}
              p3={
                "To coordinate all meal functions and manage the upkeep of the kitchen of Little Rock."
              }
              title4="Economic Development Ministry"
              panelTitle4="Economic Development Ministry"
              panelImage4={null}
              p4={
                "Designed to encourage, promote and enhance economic prosperity through entrepreneurial and private business development."
              }
              title5="Flower Ministry"
              panelTitle5="Flower Ministry"
              panelImage5={null}
              p5={
                "Flower Ministry: To beautify the sanctuary and other areas inside the church with plants and seasonal flowers."
              }
              title6="Greeters/Announcers/Host/Hostesses Ministry"
              panelTitle6="Greeters/Announcers/Host/Hostesses Ministry"
              panelImage6={null}
              p6={
                "Greeters/Announcers/Host/Hostesses Ministry: To welcome members and register visitors into the church on Sunday mornings and before all special services, to serve as decorum ambassadors for special events held at Little Rock."
              }
              title7="Historical Society"
              panelTitle7="Historical Ministry"
              panelImage7={null}
              p7={
                "Historical Society: To collect information and articles for historical purposes."
              }
              title8="Information Technology Ministry"
              panelTitle8="Information Technology Ministry"
              panelImage8={null}
              p8={
                "Information Technology Ministry: To provide technical support and assistance to the church office and staff."
              }
              title9="Intercessory Prayer Ministry"
              panelTitle9="Intercessory Prayer Ministry"
              panelImage9={null}
              p9={
                "Intercessory Prayer Ministry: To seek God through prayer on behalf of the Church, Pastor, members and concerns of Little Rock and our community."
              }
              title10="Lay Council"
              panelTitle10="Lay Council"
              panelImage10={null}
              p10={
                "Lay Council: To organize the laity of the A.M.E. Zion Church, to deepen the spiritual life of the laity, to disseminate information, to cultivate the denominational loyalty, to expand the denomination through education and evangelism."
              }
              title11="Marriage Ministry"
              panelTitle11="Marriage Ministry"
              panelImage11={null}
              p11={
                "Marriage Ministry: To promote the spiritual growth and development of married couples through Christian fellowship and educational activities."
              }
              title12="Military Ministry"
              panelTitle12="Military Ministry"
              panelImage12={null}
              p12={
                "Military Ministry: To assist the families and loved ones in the military as well as honor the veterans and the active-duty members of our church."
              }
              title13="Nehemiah Ministry"
              panelTitle13="Nehemiah Ministry"
              panelImage13={null}
              p13={
                "Nehemiah Ministry: To coordinate and help with physical repairs to the church campus."
              }
              title14="Nursery/Children’s Church Ministry"
              panelTitle14="Nursery/Children’s Church Ministry"
              panelImage14={null}
              p14={
                "Nursery/Children’s Church Ministry: To provide a safe, Christian environment for the nurturing and care of children ages 0-9 during Sunday morning worship."
              }
              title15="Parking and Security Ministry"
              panelTitle15="Parking and Security Ministry"
              panelImage15={null}
              p15={
                "Parking and Security Ministry: To provide for security of church during special events and other church functions in addition to caring for parking needs."
              }
              title16="Pastor’s Aide"
              panelTitle16="Pastor’s Aide"
              panelImage16={null}
              p16={
                "Pastor’s Aide: To provide added support and comfort to the Pastor and family."
              }
              title17="Quilting Ministry"
              panelTitle17="Quilting Ministry"
              panelImage17={null}
              p17={
                "Quilting Ministry: To provide an instructional environment and fellowship while producing quilting products for the hospitals and terminally ill of our community."
              }
              title18="Prayer Counselor Ministry"
              panelTitle18="Prayer Counselor Ministry"
              panelImage18={null}
              p18={
                "Prayer Counselor Ministry: To serve as spiritual support and means to contact for all new members."
              }
              title19="Singles Ministry"
              panelTitle19="Singles Ministry"
              panelImage19={null}
              p19={
                "Singles Ministry: To provide spiritual support and Christian community for divorced, widowed, never married, and single parent men and women of Little Rock."
              }
              title20="Transportation Ministry"
              panelTitle20="Transportation Ministry"
              panelImage20={null}
              p20={
                "Transportation Ministry: To provide transportation to and from worship and other functions of Little Rock and to respond to the transportation needs of the membership of Little Rock."
              }
              title21="Usher Ministry"
              panelTitle21="Usher Ministry"
              panelImage21={null}
              p21={
                "Usher Ministry: To greet members and visitors, to monitor needs of the congregation, to facilitate order and decorum, and to offer assistance throughout the worship experience."
              }
            />
          </div>
        </section>
      </div>
    </div>
  </Layout>
);
