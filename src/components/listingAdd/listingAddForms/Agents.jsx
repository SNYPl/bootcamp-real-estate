import React from "react";
import style from "./style.module.css";
import styles from "../style.module.css";
import axios from "axios";
import { useQuery } from "react-query";

const Agents = ({ register, errors }) => {
  const options = {
    method: "GET",
    url: "https://api.real-estate-manager.redberryinternship.ge/api/agents",
    headers: {
      accept: "application/json",
      Authorization: "Bearer 9d04c1f4-4b69-4c2e-923a-e717ad5764fc",
    },
  };

  const { data, isLoading, isError } = useQuery(
    ["getAllAgentList"],
    async () => {
      try {
        const response = await axios.request(options);

        return response.data;
      } catch (error) {
        console.error("Error fetching agent list", error);
        throw new Error("Error fetching agent list");
      }
    }
  );

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
