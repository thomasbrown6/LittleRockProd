import React from "react";
import { Row, Col } from "react-bootstrap";
import Gallery from "react-photo-gallery";

let width = 3;
let height = 2;

const PhotoGallery = (props) => (
  <Row>
    <Col xs={12}>
      {Array.isArray(props.urls)(
        props.urls.map((url) => {
          <img
            className="header-image event-flyers"
            src={url}
            alt="church image"
          />;
        })
      )}
    </Col>
  </Row>
);

export default PhotoGallery;
