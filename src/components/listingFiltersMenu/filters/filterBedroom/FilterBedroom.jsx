import React, { useEffect } from "react";
import style from "./style.module.css";
import FilterModal from "../FilterModal";
import { useForm } from "react-hook-form";
import Button from "../../../button/Button";
import { filterDefaultDataForLocalStorage } from "../../../lib/filterDefaultData";
import { useLocalStorage } from "@uidotdev/usehooks";

const FilterBedroom = ({ setMenu }) => {
  const [filterItems, setFilterItems] = useLocalStorage(
    "filters",
    filterDefaultDataForLocalStorage
  );

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({});

  useEffect(() => {
    const bedroomValue = filterItems.bedroom;

    setValue("bedroom", bedroomValue);
  }, [filterItems.bedroom, setValue]);

  const bedroomOnchangeValue = Number(watch("bedroom"));

  const onSubmit = (data) => {
    setFilterItems((prevState) => {
      return { ...prevState, bedroom: Number(data.bedroom) };
    });

    setMenu("");
  };

  return (
    <FilterModal
      title={"საძინებლების რაოდენობა"}
      className={style.bedroomModal}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.filterBedroom}>
          <input
            type="number"
            placeholder=""
            value={bedroomOnchangeValue || ""}
            className={`${style.bedroomItem} `}
            style={{ borderColor: errors.bedroom ? "#F93B1D" : "" }}
            {...register("bedroom", {
              validate: (value) =>
                Number(value) > 0 || "რიცხვი უნდა იყოს 0-ზე მეტი",
            })}
          />
          {errors.bedroom && (
            <p className={style.error}>{errors.bedroom.message}</p>
          )}
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

export default FilterBedroom;
