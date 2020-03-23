import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

const BtnBottom = props => (
  <div className="bottom-buttons">
    <Row>
      <Col xl={6}>
        <Link to="/pastors-message">
          <a className="button-bottom">
            <p>Pastor's Message</p>
          </a>
        </Link>
      </Col>
      <Col xl={6}>
        <Link to="/who-we-are/our-staff">
          <a className="button-bottom">
            <p>Our Staff</p>
          </a>
        </Link>
      </Col>
    </Row>
  </div>
);

export default BtnBottom;
