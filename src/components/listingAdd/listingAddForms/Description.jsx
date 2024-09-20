import React from "react";
import style from "./style.module.css";
import styles from "../style.module.css";
import { ValidationMarkSvg } from "../../../assets/common/svg/addListing";

const Description = ({
  register,
  errors,
  setListingAddInputs,
  listingAddInputs,
}) => {
  return (
    <div className={`${style.locationInputs} ${styles.addListInputs}`}>
      <div className={`${style.formInputs} ${style.descriptionInput}`}>
        <div
          className={`${style.inputContainers} ${
            errors.description ? style.errorBtn : ""
          }`}
        >
          <label>
            <span>აღწერა*</span>
            <textarea
              className={style.textarea}
              rows="8"
              style={{ height: "135px", width: "100%" }}
              {...register("description", {
                required: "ველი სავალდებულოა",
                minLength: {
                  value: 5,
                  message: "მინიმუმ ხუთი სიმბოლო",
                },
              })}
              onChange={(e) => {
                setListingAddInputs((prevState) => ({
                  ...prevState,
                  description: e.target.value,
                }));
              }}
              value={listingAddInputs.description}
            />
          </label>

          <p className={`${errors.description ? style.error : style.tipText} `}>
            {errors.description ? (
              errors.description.message
            ) : (
              <span>
                <ValidationMarkSvg /> მინიმუმ ხუთი სიტყვა
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
