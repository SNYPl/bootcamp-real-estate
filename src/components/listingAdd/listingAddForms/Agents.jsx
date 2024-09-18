import React from "react";
import style from "./style.module.css";
import styles from "../style.module.css";

const Agents = ({ register, errors, data }) => {
  return (
    <div className={`${style.locationInputs} ${styles.addListInputs}`}>
      <h4>აგენტი</h4>
      <div className={style.selectorContainer}>
        <div
          className={`${style.inputContainers} ${
            errors.agent ? style.errorBtn : ""
          }`}
        >
          <label>
            <span>აირჩიე</span>
            <select {...register("agent", { required: "სავალდებულო" })}>
              <option value="">აირჩიე აგენტი</option>
              {data?.map((agent) => {
                return (
                  <option value={agent.id} key={agent.id}>
                    {agent.name}
                  </option>
                );
              })}
            </select>
          </label>
          {errors.agent && (
            <p className={style.error}>{errors.agent.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Agents;
