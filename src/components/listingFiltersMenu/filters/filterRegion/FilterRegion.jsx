import React from "react";
import style from "./style.module.css";
import FilterModal from "../FilterModal";

const FilterRegion = () => {
  return (
    <FilterModal title={"რეგიონის მიხედვით"}>
      <div className={style.filterRegion}></div>
    </FilterModal>
  );
};

export default FilterRegion;
