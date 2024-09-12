import React from "react";
import style from "./style.module.css";
import FilterModal from "../FilterModal";

const FilterBedroom = () => {
  return (
    <FilterModal title={"საძინებლების რაოდენობა"}>
      <div className={style.FilterBedroom}></div>
    </FilterModal>
  );
};

export default FilterBedroom;
