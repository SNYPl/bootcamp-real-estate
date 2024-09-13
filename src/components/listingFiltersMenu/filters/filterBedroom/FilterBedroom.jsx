import React, { useState } from "react";
import style from "./style.module.css";
import FilterModal from "../FilterModal";
import { useForm } from "react-hook-form";
import Button from "../../../button/Button";

const FilterBedroom = () => {
  const [bedroom, setBedroom] = useState(null);
  const bedroomList = [1, 2, 3, 4, 5];

  const { handleSubmit, setValue } = useForm({
    defaultValues: {
      bedroom: null,
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <FilterModal
      title={"საძინებლების რაოდენობა"}
      className={style.bedroomModal}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.filterBedroom}>
          {bedroomList.map((el) => (
            <div
              className={`${style.bedroomItem} ${
                bedroom === el ? style.active : ""
              }`}
              key={el}
              onClick={() => {
                setBedroom(() => el);
                setValue("bedroom", el);
              }}
            >
              {el}
            </div>
          ))}
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
