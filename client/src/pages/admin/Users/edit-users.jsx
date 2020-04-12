import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import Layout from "../../../components/admin/Layout";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteUser, getUsers } from "../../../actions/auth";
import { makeStyles } from "@material-ui/core/styles";
import { Row, Col } from "react-bootstrap";

const EditUsers = ({ deleteUser, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const handleInputChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    deleteUser(email, password);
  };

  const style = {
    backgroundColor: "black"
  };

  const useStyles = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  }));

  const classes = useStyles();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <Layout
      children={
        <div>
          <div className="secondary">
            <section id="two">
              <div className="inner">
                <Row>
                  <Col xs={12}></Col>
                </Row>
              </div>
            </section>
          </div>
        </div>
      }
    ></Layout>
  );
};

EditUsers.propTypes = {
  deleteUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { deleteUser })(EditUsers);
