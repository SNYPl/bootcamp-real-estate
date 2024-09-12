import React from "react";
import style from "./style.module.css";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={`${style.header}`}>
      <Link to={"/"}>
        <img src={Logo} alt="logo" />
      </Link>
    </header>
  );
};

export default Header;
