import React from "react";
import style from "./style.module.css";
import { ValidationMarkSvg } from "../../assets/common/svg/addListing";

const AgentDetailsInputs = ({ register, errors }) => {
  return (
    <div className={`${style.locationInputs} ${style.addListInputs}`}>
      <div className={style.formInputs}>
        <div
          className={`${style.inputContainers} ${
            errors.name ? style.errorBtn : ""
          }`}
        >
          <label>
            <span>სახელი*</span>
            <input
              type="text"
              {...register("name", {
                required: "ველი სავალდებულოა",
                minLength: {
                  value: 2,
                  message: "მინიმუმ ორი სიმბოლო",
                },
              })}
            />
          </label>

          <p className={`${errors.name ? style.error : style.tipText} `}>
            {errors.name ? (
              errors.name.message
            ) : (
              <span>
                <ValidationMarkSvg /> მინიმუმ ორი სიმბოლო
              </span>
            )}
          </p>
        </div>

        <div
          className={`${style.inputContainers} ${
            errors.surname ? style.errorBtn : ""
          }`}
        >
          <label>
            <span>გვარი*</span>
            <input
              type="text"
              {...register("surname", {
                required: "ველი სავალდებულოა",
                minLength: {
                  value: 2,
                  message: "მინიმუმ ორი სიმბოლო",
                },
              })}
            />
          </label>
          <p className={`${errors.surname ? style.error : style.tipText} `}>
            {errors.surname ? (
              errors.surname.message
            ) : (
              <span>
                <ValidationMarkSvg /> მინიმუმ ორი სიმბოლო
              </span>
            )}
          </p>
        </div>
      </div>

      <div className={style.formInputs}>
        <div
          className={`${style.inputContainers} ${
            errors.email ? style.errorBtn : ""
          }`}
        >
          <label>
            <span>ელ-ფოსტა*</span>
            <input
              type="text"
              {...register("email", {
                required: "ველი სავალდებულოა",
                pattern: {
                  value: /@redberry\.ge$/,
                  message: "ფორმატი უნდა დასრულდეს @redberry.ge",
                },
              })}
            />
          </label>
          <p className={`${errors.email ? style.error : style.tipText} `}>
            {errors.email ? (
              errors.email.message
            ) : (
              <span>
                <ValidationMarkSvg /> გამოიყენეთ @redberry.ge ფოსტა
              </span>
            )}
          </p>
        </div>

        <div
          className={`${style.inputContainers} ${
            errors.phone ? style.errorBtn : ""
          }`}
        >
          <label>
            <span>ტელეფონის ნომერი*</span>
            <input
              type="number"
              {...register("phone", {
                required: "ველი სავალდებულოა",
                pattern: {
                  value: /^5\d{8}$/,
                  message: "უნდა იყოს ფორმატის 5XXXXXXXX",
                },
              })}
            />
          </label>

          <p className={`${errors.phone ? style.error : style.tipText} `}>
            {errors.phone ? (
              errors.phone.message
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

export default AgentDetailsInputs;
