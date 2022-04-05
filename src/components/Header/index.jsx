import React from "react";
import "./header.css";
import logo from "../assets/images/amazon-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Link } from "react-router-dom";
import { useStateValue } from "../context/contextProvider";
import { auth } from "../../firebase";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="" />
      </Link>

      <div className="header__search">
        <input type="text" className="header__input" />
        <SearchIcon sx={{ width: "1.4em" }} className="search__icon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="nav__tools">
            <span className="optionOne">
              Hello {!user ? "Guest" : user.email}{" "}
            </span>
            <span className="optionTwo">{user ? "Sign Out" : "Sign in "} </span>
          </div>
        </Link>
        <div className="nav__tools">
          <span className="optionOne">Return</span>
          <span className="optionTwo">& Orders</span>
        </div>
        <div className="nav__tools">
          <span className="optionOne">Your</span>
          <span className="optionTwo">Prime</span>
        </div>

        <Link to="/basket">
          <div className="header__basket">
            <ShoppingCartIcon />
            <span className="nav__toolsTwo basket__count">
              {" "}
              {basket?.length}{" "}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
