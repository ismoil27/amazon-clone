import { Button, Input } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "./login.css";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#111",
    backgroundColor: "#f0c14b",
    marginTop: "10px",
    "&:hover": {
      backgroundColor: "#e7af21",
    },
  },
}));

const Login = () => {
  const classes = useStyles();
  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={logo} alt="" />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>Email</h5>
          <Input sx={{ marginBottom: "10px", width: "98%" }} type="email" />
          <h5>Password</h5>
          <Input sx={{ marginBottom: "10px", width: "98%" }} type="password" />
          <Button className={classes.root} fullWidth variant="primary">
            Sign in
          </Button>
        </form>
        <p>
          By creating an account, you agree to Amazon's Conditions of Use and
          Privacy Notice.
        </p>
        <Button className={classes.root} variant="primary">
          Create your Amazon account
        </Button>
      </div>
    </div>
  );
};

export default Login;
