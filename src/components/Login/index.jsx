import { Button, Input } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={logo} alt="" />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>Email</h5>
          <Input sx={{ marginBottom: "10px" }} type="email" />
          <h5>Password</h5>
          <Input sx={{ marginBottom: "10px" }} type="password" />
          <Button
            variant="primary"
            sx={{
              backgroundColor: "#f0c14b",
              borderColor: "#a88734",
              marginTop: "10px",
            }}
          >
            Sign in
          </Button>
        </form>
        <p>
          By creating an account, you agree to Amazon's Conditions of Use and
          Privacy Notice.
        </p>
        <Button
          variant="primary"
          sx={{
            backgroundColor: "#f0c14b",
            borderColor: "#a88734",
            marginTop: "10px",
          }}
        >
          Create your Amazon account
        </Button>
      </div>
    </div>
  );
};

export default Login;
