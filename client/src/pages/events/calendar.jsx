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
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

import Layout from "../../components/Layout";
import Banner from "../../components/Banner";
import Event from "../../components/Event";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring/web.cjs";

import { uploadEventImage } from "../../actions/images";
import { getCalendarEvents } from "../../actions/calendar";

const localizer = momentLocalizer(moment);

const AdminCalendar = ({
  auth: { isAuthenticated },
  getCalendarEvents,
  calendar: { events }
}) => {
  useEffect(() => {
    getCalendarEvents();
  }, [getCalendarEvents]);

  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState();
  const [description, setDescription] = React.useState();
  const [calendarid, setCalendarid] = React.useState();

  const classes = useStyles();

  const handleInputChange = (e) => {
    setCalendarid(e.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEventClick = (e) => {
    console.log(e);
    setTitle(e.title);
    setDescription(
      `From ${moment(e.start).format("dddd, MMMM Do, h:mma")} - ${moment(
        e.end
      ).format("h:mma")}`
    );
    setOpen(true);
  };

  return (
    <Layout>
      <div>
        <Banner
          id="banner"
          image={require("../../static/images/LR-WebPage-OurStaffNW_vrt.jpg")}
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
                          {isAuthenticated && (
                            <div>
                              <div className="center">
                                <TextField
                                  id="standard-basic"
                                  margin="normal"
                                  name="calendarid"
                                  value={calendarid}
                                  onChange={(e) => handleInputChange(e)}
                                  label="Change Calendar ID"
                                />
                              </div>
                            </div>
                          )}
                          <Calendar
                            eventLimit={4}
                            onSelectEvent={(e) => handleEventClick(e)}
                            defaultDate={new Date()}
                            defaultView="month"
                            localizer={localizer}
                            events={events ? events : []}
                            startAccessor="start"
                            endAccessor="end"
                            style={{ height: 1000 }}
                            popup={true}
                          />
                        </Col>
                        <div>
                          <Modal
                            aria-labelledby="spring-modal-title"
                            aria-describedby="spring-modal-description"
                            className={classes.modal}
                            open={open}
                            onClose={handleClose}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                              timeout: 500
                            }}
                          >
                            <Fade in={open}>
                              <div className={classes.paper}>
                                <h2 id="spring-modal-title">{title}</h2>
                                <p id="spring-modal-description">
                                  {description}
                                </p>
                              </div>
                            </Fade>
                          </Modal>
                        </div>
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
  getCalendarEvents: PropTypes.func.isRequired,
  calendar: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  calendar: state.calendar
});

export default connect(mapStateToProps, {
  getCalendarEvents
})(AdminCalendar);

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    }
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func
};
