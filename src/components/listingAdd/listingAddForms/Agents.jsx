import React, { useContext, useEffect } from "react";
import style from "./style.module.css";
import styles from "../style.module.css";
import { agentContext } from "../../store/agentAddStore";

const Agents = ({
  register,
  errors,
  data,
  setListingAddInputs,
  listingAddInputs,
  setValue,
}) => {
  const { setAddAgentHandler } = useContext(agentContext);

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;

    if (selectedValue === "addAgent") {
      setAddAgentHandler(true);
      return;
    }

    setListingAddInputs((prevState) => {
      return {
        ...prevState,
        agent: selectedValue,
      };
    });
  };

  useEffect(() => {
    if (listingAddInputs.agent) {
      setValue("agent", listingAddInputs.agent);
    }
  }, [listingAddInputs.agent, setValue]);

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
                value={listingAddInputs.agent || "აირჩიე აგენტი"}
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
