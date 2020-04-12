import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Gallery from "react-photo-gallery";
import ImageGallery from "react-image-gallery";

import Layout from "../../components/Layout";
import Banner from "../../components/Banner";
import { Container, Row, Col } from "react-bootstrap";
import { getGoogleAlbum } from "../../actions/google";

const PhotoGallery = ({ getGoogleAlbum, google: { album, loaded } }) => {
  useEffect(() => {
    getGoogleAlbum();
  }, [getGoogleAlbum]);

  // if (!loaded || album === null) {
  //   getGoogleAlbum();
  // }

  const [images, setImages] = useState([]);
  const [width, setWidth] = useState([3]);
  const [height, setHeight] = useState([2]);

  if (Array.isArray(album)) {
    album.map((image) => {
      let imageobject = {
        src: image,
        width: width,
        height: height
      };
      //console.log(`image: ${image}`);
      images.push(imageobject);
    });

    if (Array.isArray(images) && loaded) {
      images.forEach((image) => {
        if (image.width > 3) {
          image.width = 2;
        } else {
          image.width = image.width + 1;
        }

        if (image.height > 3) {
          image.height = 2;
        } else {
          image.height = image.height + 1;
        }
      });
    }
  }

  return (
    <Layout>
      <div>
        <Banner
          id="banner"
          Breadcrumb1="HOME"
          headerText="Photo Gallery"
          tag1="a"
          href1="/"
          Breadcrumb2="GET CONNECTED"
          tag2="a"
          href2="#"
          Breadcrumb3="Photo Gallery"
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
                        <h1>Photo Gallery</h1>
                      </header>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <Gallery photos={images} />
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
};

PhotoGallery.propTypes = {
  google: PropTypes.object.isRequired,
  getGoogleAlbum: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  google: state.google
});

export default connect(mapStateToProps, {
  getGoogleAlbum
})(PhotoGallery);
