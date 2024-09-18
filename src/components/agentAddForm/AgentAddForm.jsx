import React from "react";
import style from "./style.module.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import Button from "../button/Button";
import AgentDetailsInputs from "./AgentDetailsInputs";
import ImageUploadInput from "../listingAdd/listingAddForms/ImageUpload";
import { useMutation } from "react-query";

const AgentAddForm = ({ setAgentAddModal }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm();

  const mutation = useMutation((data) => {
    return axios.post(
      "https://api.real-estate-manager.redberryinternship.ge/api/agents",
      data,
      {
        headers: {
          Authorization: "Bearer 9d04c1f4-4b69-4c2e-923a-e717ad5764fc",
        },
      }
    );
  });

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("surname", data.surname);
    formData.append("email", data.email);
    formData.append("phone", data.phone);

    if (data.avatar) {
      formData.append("avatar", data.avatar);
    }

    mutation.mutate(formData, {
      onSuccess: (response) => {
        console.log("Agent added successfully:", response.data);
        setAgentAddModal(false);
      },
      onError: (error) => {
        console.error("Error adding agent:", error);
      },
    });
  };

  const cancelBtnHandler = () => {
    setAgentAddModal(false);
  };

  return (
    <section className={`${style.listingAdd} `}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>აგენტის დამატება</h2>
        <AgentDetailsInputs register={register} errors={errors} />
        <ImageUploadInput
          register={register}
          errors={errors}
          setValue={setValue}
          s
        />
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
