import React from "react";
import style from "./style.module.css";
import styles from "../style.module.css";
import { AddImageSvg } from "../../../assets/common/svg/addListing";

const ImageUpload = ({ register, errors }) => {
  const validateFileSize = (file) => {
    if (file && file[0].size > 1048576) {
      return "ფაილის ზომა არ უნდა აღემატებოდეს 1MB-ს";
    }
    return true;
  };

  return (
    <div className={`${style.locationInputs} ${styles.addListInputs}`}>
      <div className={`${style.formInputs} ${style.imageUploadInput}`}>
        <div
          className={`${style.inputContainers} ${
            errors.image ? style.errorBtn : ""
          }`}
        >
          <label>
            <span>ატვირთეთ სურათი*</span>
            <input
              type="file"
              accept="image/*"
              {...register("image", {
                required: "ველი სავალდებულოა",
                validate: (file) => validateFileSize(file),
              })}
              className={style.hiddenInput}
            />
            <div className={style.customFileUpload}>
              <AddImageSvg />
            </div>
          </label>

          <p className={`${errors.image ? style.error : style.tipText} `}>
            {errors.image && errors.image.message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
