import React from "react";
import style from "./style.module.css";
import styles from "../style.module.css";
import { ValidationMarkSvg } from "../../../assets/common/svg/addListing";
import Bedroom from "./Bedroom";
import Description from "./Description";

const Details = ({ register, errors }) => {
  return (
    <div className={`${style.locationInputs} ${styles.addListInputs}`}>
      <h4>ბინის დეტალები</h4>

      <div className={style.formInputs}>
        <div
          className={`${style.inputContainers} ${
            errors.address ? style.errorBtn : ""
          }`}
        >
          <label>
            <span>ფასი</span>
            <input
              type="number"
              {...register("address", {
                required: "ველი სავალდებულოა",
                minLength: {
                  value: 2,
                  message: "მხოლოდ რიცხვები",
                },
              })}
            />
          </label>

          <p
            className={`${errors.address ? style.error : style.tipText} ${
              validatingFields.address ? style.successValidate : ""
            }`}
          >
            {errors.address ? (
              errors.address.message
            ) : (
              <span>
                <ValidationMarkSvg /> მხოლოდ რიცხვები
              </span>
            )}
          </p>
        </div>

        <div
          className={`${style.inputContainers} ${
            errors.zip_code ? style.errorBtn : ""
          }`}
        >
          <label>
            <span>ფართობი</span>
            <input
              type="number"
              {...register("zip_code", {
                required: "ველი სავალდებულოა",
              })}
            />
          </label>
          <p
            className={`${errors.zip_code ? style.error : style.tipText} ${
              validatingFields.zip_code ? style.successValidate : ""
            }`}
          >
            {errors.zip_code ? (
              errors.zip_code.message
            ) : (
              <span>
                <ValidationMarkSvg /> მხოლოდ რიცხვები
              </span>
            )}
          </p>
        </div>
      </div>
      <Bedroom register={register} errors={errors} />
      <Description register={register} errors={errors} />
    </div>
  );
};

export default Details;
