import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Layout from "../../../components/Layout";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteUser } from "../../../actions/auth";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Banner from "../../../components/Banner";
import Event from "../../../components/Event";
import { Row, Col } from "react-bootstrap";

const Users = ({ deleteUser, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    deleteUser(email, password);
  };

  const style = {
    backgroundColor: "black"
  };

  const useStyles = makeStyles((theme) => ({
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

  return (
    <Layout HomePage={true}>
      <div>
        <div className="secondary">
          <section id="two">
            <div className="inner">
              <Container></Container>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

Users.propTypes = {
  deleteUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { deleteUser })(Users);
