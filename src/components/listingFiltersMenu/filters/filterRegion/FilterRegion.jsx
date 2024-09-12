import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import FilterModal from "../FilterModal";
import { getAllRegions } from "../../../../utils/getAllRegions";
import Button from "../../../button/Button";
import { useForm } from "react-hook-form";

const FilterRegion = () => {
  const [regions, setRegions] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

  const onSubmit = (data) => console.log(data);

  return (
    <FilterModal title={"რეგიონის მიხედვით"} className={style.regionModal}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.filterRegion}>
          {regions.map(({ id, name }) => {
            return (
              <div key={id} className={`flex item-center ${style.regionItem}`}>
                <input
                  {...register("checkbox")}
                  type="checkbox"
                  value={name}
                  id={name}
                />
                <label htmlFor={name}>{name}</label>
              </div>
            );
          })}
        </div>
        <div className={style.btnContainer}>
          <Button type={"submit"} className={style.chooseBtn}>
            არჩევა
          </Button>
        </div>
      </form>
    </FilterModal>
  );
};

export default FilterRegion;
