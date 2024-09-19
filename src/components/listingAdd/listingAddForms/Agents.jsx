import React, { useContext } from "react";
import style from "./style.module.css";
import styles from "../style.module.css";
import { agentContext } from "../../store/agentAddStore";

const Agents = ({
  register,
  errors,
  data,
  setListingAddInputs,
  listingAddInputs,
}) => {
  const { setAddAgentHandler } = useContext(agentContext);

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;

    if (selectedValue === "addAgent") {
      setAddAgentHandler(true);
    }
  };

  return (
    <>
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
              <select
                {...register("agent", { required: "სავალდებულო" })}
                onChange={handleSelectChange}
              >
                <option value="">აირჩიე აგენტი</option>
                <option value="addAgent">+ დაამატე აგენტი</option>
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
    </>
  );
};

export default Agents;
