import React from "react";
import style from "./style.module.css";
import FilterModal from "../FilterModal";

const FilterArea = () => {
  return (
    <FilterModal title={"ფართობის მიხედვით"}>
      <div className={style.filterArea}></div>
    </FilterModal>
  );
};

export default FilterArea;
