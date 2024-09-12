import React from "react";
import style from "./style.module.css";

const Button = (props) => {
  return (
    <button className={`${style.btn} ${props.className}`} {...props}></button>
  );
};

export default Button;
