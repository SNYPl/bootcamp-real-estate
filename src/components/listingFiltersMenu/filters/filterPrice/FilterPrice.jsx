import React from "react";
import style from "./style.module.css";
import FilterModal from "../FilterModal";

const FilterPrice = () => {
  return (
    <FilterModal title={"რეგიონის მიხედვით"}>
      <div className={style.filterPrice}></div>
    </FilterModal>
  );
};

export default FilterPrice;
