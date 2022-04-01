import React from "react";
import "./header.css";
import logo from "../assets/images/amazon-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { navbar } from "../../utilities/navbar";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />

      <div className="header__search">
        <input type="text" className="header__input" />
        <SearchIcon sx={{ width: "1.4em" }} className="search__icon" />
      </div>

      <div className="header__nav">
        {navbar.map((value) => {
          return (
            <div key={value.id} className="nav__tools">
              <span>{value?.toolOne}</span>
              <span>{value?.toolTwo}</span>
            </div>
          );
        })}

        <div className="header__basket">
          <ShoppingCartIcon />
          <span className="nav__toolsTwo basket__count">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;