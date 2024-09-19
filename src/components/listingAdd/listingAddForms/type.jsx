import React from "react";
import style from "./style.module.css";
import styles from "../style.module.css";

const TypeForm = ({
  register,
  errors,
  setListingAddInputs,
  listingAddInputs,
}) => {
  return (
    <div className={`${style.listingAddType}  ${styles.addListInputs}`}>
      <h4>გარიგების ტიპი</h4>
      <div className={style.typeInputs}>
        <label>
          <input
            type="radio"
            value="იყიდება"
            {...register("type", {
              required: "გთხოვთ, აირჩიოთ ვარიანტი",
            })}
          />
          იყიდება
        </label>
        <label>
          <input
            type="radio"
            value="ქირავდება"
            {...register("type", {
              required: "გთხოვთ, აირჩიოთ ვარიანტი",
            })}
          />
          ქირავდება
        </label>
        {errors.type && <p className={style.error}>{errors.type.message}</p>}
      </div>
    </div>
  );
};

export default TypeForm;
