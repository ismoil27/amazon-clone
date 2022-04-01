import React from "react";
import "./header.css";
import logo from "../assets/images/amazon-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />

      <div className="header__search">
        <input type="text" className="header__input" />
        <SearchIcon sx={{ width: "1.4em" }} className="search__icon" />
      </div>

      <div className="header__nav">
        <div className="nav__tools">
          <span className="nav__toolsOne">Hello</span>
          <span className="nav__toolsTwo">Sign in</span>
        </div>

        <div className="nav__tools">
          <span className="nav__toolsOne">Return </span>
          <span className="nav__toolsTwo"> & Orders</span>
        </div>

        <div className="nav__tools">
          <span className="nav__toolsOne">Your</span>
          <span className="nav__toolsTwo">Prime</span>
        </div>

        <div className="header__basket">
          <ShoppingCartIcon />
          <span className="nav__toolsTwo basket__count">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
