import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Layout from "../../components/Layout";
import Banner from "../../components/Banner";
import Event from "../../components/Event";

import { uploadEventImage, getImages, deleteImage } from "../../actions/images";

const AdminEvents = ({
  auth: { isAuthenticated },
  uploadEventImage,
  getImages,
  deleteImage,
  image: { image, loaded }
}) => {
  useEffect(() => {
    getImages();
  }, [getImages]);

  // if (!loaded && image === null) {
  //   getImages();
  //   console.log("image: " + image);
  // }

  const [picture, setPicture] = useState({
    pic: ""
  });

  const { pic } = picture;

  const handleInputChange = (e) => {
    setPicture({ pic: e.target.value });
  };

  const imageSaveHandler = (async) => {
    //console.log(picture.target.files[0]);
    console.log("uploading picture...");
    uploadEventImage(pic);
    setPicture({ pic: "" });
  };

  const deleteImageHandler = async (index) => {
    console.log("deleting image...");
    deleteImage(index);
  };

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
                      {isAuthenticated && (
                        <Row>
                          <Col xs={12}>
                            <div className="center">
                              <TextField
                                id="standard-basic"
                                margin="normal"
                                name="pic"
                                value={pic}
                                onChange={(e) => handleInputChange(e)}
                                label="Image URL"
                              />
                            </div>
                          </Col>
                        </Row>
                      )}
                      {isAuthenticated && (
                        <Row>
                          <Col xs={12}>
                            <div className="center">
                              <Button
                                variant="contained"
                                color="primary"
                                onClick={imageSaveHandler}
                              >
                                Add Image
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      )}

                      {image &&
                        Array.isArray(image.url) &&
                        image.url.map((url, index) => {
                          return (
                            <Row>
                              {!isAuthenticated && (
                                <Col xs={12}>
                                  <Event imageurl={url} />
                                </Col>
                              )}
                              {isAuthenticated && (
                                <Col xs={6}>
                                  <Event imageurl={url} />
                                </Col>
                              )}
                              {isAuthenticated && (
                                <Col xs={6}>
                                  <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={(e) => deleteImageHandler(index)}
                                  >
                                    Delete Image
                                  </Button>
                                </Col>
                              )}
                            </Row>
                          );
                        })}
                      {/* 
                       <Event
                        imageurl={require("../../../static/images/events/event10.jpeg")}
                      />
                      <Event
                        imageurl={require("../../../../static/images/events/event9.jpeg")}
                      />
                      <Event
                        imageurl={require("../../../../static/images/events/event8.jpg")}
                      />
                      <Event
                        imageurl={require("../../../../static/images/events/event6.jpg")}
                      />
                      <Event
                        imageurl={require("../../../../static/images/events/event7.jpg")}
                      />
                      <Event
                        imageurl={require("../../../../static/images/events/heritage-cultural.jpg")}
                      />
                      <Event
                        imageurl={require("../../../../static/images/events/event2.JPEG")}
                      />
                      <Event
                        imageurl={require("../../../../static/images/events/event3.JPEG")}
                      />
                      <Event
                        imageurl={require("../../../../static/images/events/event1.JPEG")}
                      />
                      <Event
                        imageurl={require("../../../../static/images/flyer.jpg")}
                      />
                      <Event
                        imageurl={require("../../../../static/images/events/IMG_2417.jpg")}
                      />
                      <Event
                        imageurl={require("../../../../static/images/events/IMG_2418.jpg")}
                      /> */}
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

AdminEvents.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  image: PropTypes.object.isRequired,
  uploadEventImage: PropTypes.func.isRequired,
  deleteImage: PropTypes.func.isRequired,
  getImages: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  image: state.image,
  auth: state.auth
});

export default connect(mapStateToProps, {
  uploadEventImage,
  getImages,
  deleteImage
})(AdminEvents);
