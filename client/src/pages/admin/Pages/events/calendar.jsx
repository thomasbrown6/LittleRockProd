import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ImageUploader from "react-images-upload";
import { Container, Row, Col } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import * as BigCalendar from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import Layout from "../../../../components/Layout";
import Banner from "../../../../components/Banner";
import Event from "../../../../components/Event";

import { uploadEventImage } from "../../../../actions/images";
import { getCalendarEvents } from "../../../../actions/calendar";

const localizer = momentLocalizer(moment);

const AdminCalendar = ({
  isAuthenticated,
  auth,
  uploadEventImage,
  getCalendarEvents,
  image: { eventImages }
}) => {
  useEffect(() => {
    getCalendarEvents();
  }, [getCalendarEvents]);

  const [picture, setPicture] = useState({
    pic: ""
  });

  const [events, setEvents] = useState({
    events: []
  });

  const { pic } = picture;

  const handleInputChange = e => {
    setPicture({ pic: e.target.value });
  };

  const imageSaveHandler = async picture => {
    //console.log(picture.target.files[0]);
  };

  const fileUploadHandler = () => {};

  return (
    <Layout>
      <div>
        <Banner
          id="banner"
          image={require("../../../../static/images/LR-WebPage-OurStaffNW_vrt.jpg")}
          Breadcrumb1="HOME"
          headerText="Event Calendar"
          tag1="a"
          href1="/"
          Breadcrumb2="GET CONNECTED"
          tag2="a"
          href2="#"
          Breadcrumb3="Event Calendar"
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
                            <h1>Event Calendar</h1>
                          </header>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs={12}>
                          <Calendar
                            localizer={localizer}
                            events={[]}
                            startAccessor="start"
                            endAccessor="end"
                            style={{ height: 500 }}
                          />
                        </Col>
                      </Row>
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

AdminCalendar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  image: PropTypes.object.isRequired,
  uploadEventImage: PropTypes.func.isRequired,
  getCalendarEvents: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  image: state.image,
  auth: state.auth
});

export default connect(mapStateToProps, {
  uploadEventImage,
  getCalendarEvents
})(AdminCalendar);
