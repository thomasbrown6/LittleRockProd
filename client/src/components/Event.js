import React from "react";
import { Row, Col } from "react-bootstrap";

const Event = props => (
  <Row>
    <Col xs={12}>
      <img
        className="header-image event-flyers"
        src={props.imageurl}
        alt="church image"
      />
    </Col>
  </Row>
);

export default Event;
