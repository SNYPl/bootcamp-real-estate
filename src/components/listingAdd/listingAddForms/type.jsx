import React from "react";
import style from "./style.module.css";
import styles from "../style.module.css";

const TypeForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  return (
    <div className={`${style.listingAddType} `}>
      <h4>გარიგების ტიპი</h4>
      <div className={style.typeInputs}>
        <div>
          <label>
            <input
              type="radio"
              value="option1"
              {...register("areaType", {
                required: "გთხოვთ, აირჩიოთ ვარიანტი",
              })}
            />
            იყიდება
          </label>
          <label>
            <input
              type="radio"
              value="option2"
              {...register("areaType", {
                required: "გთხოვთ, აირჩიოთ ვარიანტი",
              })}
            />
            ქირავდება
          </label>
          {errors.areaType && (
            <p className={style.error}>{errors.areaType.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TypeForm;
