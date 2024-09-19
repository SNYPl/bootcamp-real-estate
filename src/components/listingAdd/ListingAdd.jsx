import React from "react";
import style from "./style.module.css";
import TypeForm from "./listingAddForms/type";
import { useForm } from "react-hook-form";
import Button from "../button/Button";
import LocationInputs from "./listingAddForms/Location";
import Details from "./listingAddForms/Details";
import Agents from "./listingAddForms/Agents";
import { useNavigate } from "react-router-dom";
import useGetAllAgents from "../hooks/useGetAllAgents";
import useGetAllRegion from "../hooks/useGetAllRegion";
import { useMutation } from "react-query";
import axios from "axios";

const ListingAdd = () => {
  const navigate = useNavigate();
  const {
    data: agentsData,
    isLoading: agentsLoading,
    isError: agentsError,
  } = useGetAllAgents();

  const {
    data: regionData,
    isLoading: regionLoading,
    isError: regionError,
  } = useGetAllRegion();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, validatingFields },
  } = useForm();

  const mutation = useMutation((data) => {
    return axios.post(
      "https://api.real-estate-manager.redberryinternship.ge/api/real-estates",
      data,
      {
        headers: {
          Authorization: "Bearer 9d04c1f4-4b69-4c2e-923a-e717ad5764fc",
        },
      }
    );
  });

  const onSubmit = (data) => {
    const isRental = data.type === "იყიდება" ? 0 : 1;
    const formData = new FormData();
    formData.append("address", data.address);
    formData.append("region_id", data.region);
    formData.append("description", data.description);
    formData.append("city_id", data.city);
    formData.append("zip_code", data.zip_code);
    formData.append("price", data.price);
    formData.append("area", data.area);
    formData.append("agent_id", data.agent);
    formData.append("bedrooms", data.bedroom);
    formData.append("is_rental", isRental);
    formData.append("image", data.avatar);

    console.log(formData);

    mutation.mutate(formData, {
      onSuccess: (response) => {
        console.log("real estate added successfully:", response.data);
        navigate("/");
      },
      onError: (error) => {
        console.error("Error adding real estate:", error);
      },
    });
  };

  const cancelBtnHandler = () => {
    navigate("/");
  };

  return (
    <section className={`${style.listingAdd} `}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>ლისტინგის დამატება</h2>
        <TypeForm register={register} errors={errors} />
        <LocationInputs
          register={register}
          errors={errors}
          watch={watch}
          regions={regionData}
          validatingFields={validatingFields}
        />
        <Details
          register={register}
          errors={errors}
          validatingFields={validatingFields}
          setValue={setValue}
        />
        <Agents register={register} errors={errors} data={agentsData} />
        <div className={style.buttons}>
          {mutation?.isSuccess ? <p> ლისტი წარმატებით დაემატა</p> : ""}
          <div className={style.btns}>
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
                {mutation.isLoading ? "ემატება" : "დაამატე ლისტინგი"}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ListingAdd;
