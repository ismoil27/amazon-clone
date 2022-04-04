import { Button, Input } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "./login.css";
import { makeStyles } from "@mui/styles";

import { auth } from "../../firebase.js";

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
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={logo} alt="" />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>Email</h5>
          <Input
            value={email}
            sx={{ marginBottom: "10px", width: "98%" }}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <Input
            value={password}
            sx={{ marginBottom: "10px", width: "98%" }}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            className={classes.root}
            fullWidth
            variant="primary"
            onClick={signIn}
          >
            Sign in
          </Button>
        </form>
        <p>
          By creating an account, you agree to Amazon's Conditions of Use and
          Privacy Notice.
        </p>
        <Button className={classes.root} variant="primary" onClick={register}>
          Create your Amazon account
        </Button>
      </div>
    </div>
  );
};

export default Login;
