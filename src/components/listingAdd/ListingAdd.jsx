import React from "react";
import style from "./style.module.css";
import axios from "axios";
import { useQuery } from "react-query";
import TypeForm from "./listingAddForms/type";

const ListingAdd = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className={`${style.listingAdd} `}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>ლისტინგის დამატება</h2>
        <TypeForm />

        <div>
          <div className={style.btnContainer}>
            <Button type={"submit"} className={style.chooseBtn}>
              გაუქმება
            </Button>
          </div>
          <div className={style.btnContainer}>
            <Button type={"submit"} className={style.chooseBtn}>
              არჩევა
            </Button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ListingAdd;
