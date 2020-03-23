import React from "react";
import { Row, Col } from "react-bootstrap";

const CardWrapper = props => (
  <Row>
    <Col />
    <Col xs={10}>{props.children}</Col>
    <Col />
  </Row>
);

export default CardWrapper;
