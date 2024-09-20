import React, { useState } from "react";
import style from "./style.module.css";
import styles from "../style.module.css";
import {
  AddImageSvg,
  DeleteImageIcon,
} from "../../../assets/common/svg/addListing";

const ImageUpload = ({ register, errors, setValue }) => {
  const [imagePreview, setImagePreview] = useState(null);

  const validateFileSize = (file) => {
    if (!file?.type?.includes("image")) {
      return "ველი სავალდებულოა, აირჩიეთ ფოტო";
    } else if (file && file[0]?.size > 1048576) {
      return "ფაილის ზომა არ უნდა აღემატებოდეს 1MB-ს";
    }
    return true;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setValue("avatar", file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = () => {
    setImagePreview(null);
    setValue("avatar", null);
  };

  return (
    <div className={`${style.locationInputs} ${styles.addListInputs}`}>
      <div className={`${style.formInputs} ${style.imageUploadInput}`}>
        {imagePreview && (
          <div className={style.imagePreviewContainer}>
            <img
              src={imagePreview}
              alt="Uploaded"
              className={style.imagePreview}
            />
            <button
              type="button"
              onClick={handleDeleteImage}
              className={style.deleteButton}
            >
              <DeleteImageIcon />
            </button>
          </div>
        )}

        <div
          className={`${style.inputContainers} ${
            errors.avatar ? style.errorBtn : ""
          }`}
        >
          <label>
            <span>ატვირთეთ სურათი*</span>
            <input
              type="file"
              accept="image/*"
              {...register("avatar", {
                // required: "ველი სავალდებულოა",
                validate: (file) => validateFileSize(file),
              })}
              onChange={(e) => handleImageChange(e)}
              className={style.hiddenInput}
              onClick={(e) => {
                if (imagePreview) {
                  e.stopPropagation();
                  e.preventDefault();
                }
              }}
            />
            <div className={style.customFileUpload}>
              <AddImageSvg />
            </div>
          </label>

          <p className={`${errors.avatar ? style.error : style.tipText} `}>
            {errors.avatar && errors.avatar.message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
