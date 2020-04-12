import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Layout from "../../components/Layout";
import Banner from "../../components/Banner";
import Event from "../../components/Event";
import { Container, Row, Col } from "react-bootstrap";

import { getImages } from "../../actions/images";

const EventsPage = ({ getImages, image: { image, loaded } }) => {
  useEffect(() => {
    getImages();
  }, [getImages]);

  if (!loaded || image === null) {
    getImages();
  }

  return (
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
                      {image &&
                        Array.isArray(image.url) &&
                        image.url.map((url, index) => {
                          return <Event imageurl={url} />;
                        })}
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
};

EventsPage.propTypes = {
  image: PropTypes.object.isRequired,
  getImages: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  image: state.image
});

export default connect(mapStateToProps, {
  getImages
})(EventsPage);
