import React from "react";
import style from "./style.module.css";
import axios from "axios";
import { useQuery } from "react-query";
import { useForm } from "react-hook-form";
import Button from "../button/Button";
import AgentDetailsInputs from "./AgentDetailsInputs";
import ImageUploadInput from "../listingAdd/listingAddForms/ImageUpload";

const AgentAddForm = ({ setAgentAddModal }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const cancelBtnHandler = () => {
    setAgentAddModal(false);
  };

  return (
    <section className={`${style.listingAdd} `}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>აგენტის დამატება</h2>
        <AgentDetailsInputs register={register} errors={errors} />
        <ImageUploadInput register={register} errors={errors} />
        <div className={style.buttons}>
          <div className={style.btnContainer}>
            <Button
              type={"button"}
              className={style.cancelBtn}
              onClick={cancelBtnHandler}
            >
              გაუქმება
            </Button>
          </div>
          <div className={style.btnContainer}>
            <Button type={"submit"} className={style.chooseBtn}>
              დაამატე აგენტი
            </Button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default AgentAddForm;
