import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Layout from "../../components/Layout";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
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
import Banner from "../../components/Banner";
import Event from "../../components/Event";
import { Row, Col } from "react-bootstrap";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
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

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Layout HomePage={true}>
      <div>
        <div className="secondary">
          <section id="two">
            <div className="inner">
              <Container>
                <Container>
                  <Container>
                    <div className={"admin-login " + classes.paper}>
                      <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                      </Avatar>
                      <Typography component="h1" variant="h5">
                        Admin Only Sign in
                      </Typography>
                      <form
                        className={classes.form}
                        noValidate
                        onSubmit={(e) => handleSubmit(e)}
                      >
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          value={email}
                          autoComplete="email"
                          autoFocus
                          onChange={(e) => handleInputChange(e)}
                        />
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          name="password"
                          value={password}
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="current-password"
                          onChange={(e) => handleInputChange(e)}
                        />

                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          color="primary"
                          className={classes.submit + " admin-login-btn"}
                        >
                          Sign In
                        </Button>
                        {/* <Grid container>
                          <Grid item>
                            <Link to="/register" variant="body2">
                              {"Don't have an account? Sign Up"}
                            </Link>
                          </Grid>
                        </Grid> */}
                      </form>
                      <Typography component="p" variant="p">
                        If you don't know the login, please contact support
                      </Typography>
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

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
