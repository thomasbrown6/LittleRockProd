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
        image={require("../../static/images/LR-WebPage-OurHistoryNW_vrt.jpg")}
        headerText="Our History"
        tag1="a"
        href1="/"
        Breadcrumb2="WHO WE ARE"
        tag2="a"
        href2="#"
        Breadcrumb3="OUR HISTORY"
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
                      <h1>OUR HISTORY</h1>
                    </header>
                    <p>
                      The history of Little Rock A.M.E. Zion Church is so grand
                      and glorious that the essence of its greatness can never
                      be fully captured or retold. So many courageous, dedicated
                      and visionary men and women have made immeasurable
                      contributions to this bright “Star of Zion” that only
                      small highlights can be shared. Little Rock A.M.E. Zion
                      Church was organized in the backyard of Mrs. Mary Ann
                      Hunter after pulling out from the old Clinton Chapel
                      A.M.E. Zion Church in 1884. The first church in reality
                      was a little house sitting on a rock, hence the name,
                      Little Rock.{" "}
                    </p>
                    <p>
                      The original church property was purchased for a sum of
                      four hundred and twenty five dollars on May 31, 1884
                      (corrected deed filed June 10, 1893). In 1906 under the
                      pastorate of Rev. W.R. Douglas, the frame structure was
                      moved across Seventh Street. The moving process was so
                      slow that services and even a funeral were conducted while
                      the church was in the middle of the street. The brick
                      edifice, which is now the Little Rock A.M.E. Zion
                      Community Development Center, was completed in 1911 under
                      the administration of Rev. Douglas. The edifice was a
                      blended manifestation of the turn of the century Greek and
                      Romanesque architectural style. J. M. McMichael, was the
                      architect of several imposing buildings in this community
                      including Spirit Square, St. John’s Baptist Church, and
                      Myers Park Presbyterian Church. The old Little Rock Church
                      building is a remarkable remainder of an exuberant
                      expression of faith and commitment of God’s people to
                      God’s glory. The new Sanctuary and Educational wing were
                      completed in October 1981. Rev. William White led members
                      and friends in a reverent and stately procession from the
                      Old Little Rock Church into the new edifice on Sunday,
                      December 6, 1981. Clinton E. Gravely, an American of
                      African descent, was the designer of this building. His
                      trademark of exposed wood and natural stone is prominent
                      in the present place of worship. In May 2008, the
                      groundbreaking celebration for the addition to the Little
                      Rock campus was held under the pastorate of Dr. Dwayne A.
                      Walker. Little Rock has been truly blessed with ardent and
                      eloquent pastors of which two became bishops, Bishop J. C.
                      Hoggard and Bishop George J. Leake, III. After Bishop
                      Leake assumed the Episcopacy Rev. William White was
                      appointed as pastor, erecting the present building. Dr.
                      James R. Samuel followed Rev. William White making
                      improvements to the Church and Educational Wing. In 2005
                      Dr. Dwayne A. Walker was appointed pastor and has regained
                      possession of the old church building and established
                      plans to add a Family Life Center to the campus.{" "}
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
