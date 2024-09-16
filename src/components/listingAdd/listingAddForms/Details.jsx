import React from "react";
import style from "./style.module.css";
import styles from "../style.module.css";
import { ValidationMarkSvg } from "../../../assets/common/svg/addListing";
import Bedroom from "./Bedroom";
import Description from "./Description";
import ImageUpload from "./ImageUpload";

const Details = ({ register, errors, validatingFields }) => {
  return (
    <div
      className={`${style.locationInputs} ${styles.addListInputs} ${style.detailsInputs}`}
    >
      <h4>ბინის დეტალები</h4>

      <div className={style.formInputs}>
        <div
          className={`${style.inputContainers} ${
            errors.price ? style.errorBtn : ""
          }`}
        >
          <label>
            <span>ფასი</span>
            <input
              type="text"
              {...register("price", {
                required: "ველი სავალდებულოა",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "მხოლოდ რიცხვები",
                },
              })}
            />
          </label>

          <p
            className={`${errors.price ? style.error : style.tipText} ${
              validatingFields.price ? style.successValidate : ""
            }`}
          >
            {errors.price ? (
              errors.price.message
            ) : (
              <span>
                <ValidationMarkSvg /> მხოლოდ რიცხვები
              </span>
            )}
          </p>
        </div>

        <div
          className={`${style.inputContainers} ${
            errors.area ? style.errorBtn : ""
          }`}
        >
          <label>
            <span>ფართობი</span>
            <input
              type="text"
              {...register("area", {
                required: "ველი სავალდებულოა",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "მხოლოდ რიცხვები",
                },
              })}
            />
          </label>
          <p
            className={`${errors.area ? style.error : style.tipText} ${
              validatingFields.area ? style.successValidate : ""
            }`}
          >
            {errors.area ? (
              errors.area.message
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
      <ImageUpload register={register} errors={errors} />
    </div>
  );
};

export default Details;
