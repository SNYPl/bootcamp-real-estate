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
            errors.bedroom ? style.errorBtn : ""
          }`}
        >
          <label>
            <span>საძინებლების რაოდენობა*</span>
            <input
              type="text"
              {...register("bedroom", {
                required: "ველი სავალდებულოა",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "მხოლოდ რიცხვები",
                },
                validate: {
                  isWholeNumber: (value) =>
                    Number.isInteger(Number(value)) ||
                    "მხოლოდ მთლიანი რიცხვები",
                },
              })}
            />
          </label>

          <p className={`${errors.bedroom ? style.error : style.tipText} `}>
            {errors.bedroom ? (
              errors.bedroom.message
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
