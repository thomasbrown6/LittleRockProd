import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

const BtnBottom = props => (
  <div className="bottom-buttons">
    <Row>
      <Col xl={6}>
        <Link className="button-bottom" to="/pastors-message">
          <p>Pastor's Message</p>
        </Link>
      </Col>
      <Col xl={6}>
        <Link className="button-bottom" to="/who-we-are/our-staff">
          <p>Our Staff</p>
        </Link>
      </Col>
    </Row>
  </div>
);

export default BtnBottom;
