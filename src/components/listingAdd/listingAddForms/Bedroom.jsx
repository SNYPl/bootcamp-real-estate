import React from "react";
import style from "./style.module.css";
import styles from "../style.module.css";
import { ValidationMarkSvg } from "../../../assets/common/svg/addListing";

const Bedroom = ({ register, errors }) => {
  return (
    <div className={`${style.locationInputs} ${styles.addListInputs}`}>
      <div className={style.formInputs}>
        <div
          className={`${style.inputContainers} ${
            errors.address ? style.errorBtn : ""
          }`}
        >
          <label>
            <span>საძინებლების რაოდენობა*</span>
            <input
              type="number"
              {...register("bedroom", {
                required: "ველი სავალდებულოა",
              })}
            />
          </label>

          <p className={`${errors.address ? style.error : style.tipText} `}>
            {errors.address ? (
              errors.address.message
            ) : (
              <span>
                <ValidationMarkSvg /> მხოლოდ რიცხვები
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bedroom;
