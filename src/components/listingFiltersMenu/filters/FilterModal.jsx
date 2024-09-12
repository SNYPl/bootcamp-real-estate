import React from "react";
import style from "./style.module.css";

const FilterModal = ({ title, children, className }) => {
  return (
    <div className={`${style.filterModal} ${className}`}>
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default FilterModal;
