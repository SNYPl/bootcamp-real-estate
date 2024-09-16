import React, { useState, useEffect } from "react";
import style from "./style.module.css";
import axios from "axios";
import { useQuery } from "react-query";
import TypeForm from "./listingAddForms/type";
import { useForm } from "react-hook-form";
import Button from "../button/Button";
import LocationInputs from "./listingAddForms/Location";
import { getAllRegions } from "../../utils/getAllRegions";

const ListingAdd = () => {
  const [regions, setRegions] = useState([]);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, validatingFields },
  } = useForm();

  console.log(validatingFields);

  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const data = await getAllRegions();
        setRegions(data);
      } catch (error) {
        console.error("Error fetching regions:", error);
      }
    };

    fetchRegions();
  }, []);

  const onSubmit = (data) => {
    console.log(data);
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
          regions={regions}
          validatingFields={validatingFields}
        />
        <div className={style.buttons}>
          <div className={style.btnContainer}>
            <Button type={"button"} className={style.cancelBtn}>
              გაუქმება
            </Button>
          </div>
          <div className={style.btnContainer}>
            <Button type={"submit"} className={style.chooseBtn}>
              დაამატე ლისტინგი
            </Button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ListingAdd;
