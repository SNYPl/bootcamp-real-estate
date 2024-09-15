import React, { useEffect } from "react";
import style from "./style.module.css";
import FilterModal from "../FilterModal";
import { useForm } from "react-hook-form";
import Button from "../../../button/Button";
import { useLocalStorage } from "@uidotdev/usehooks";
import { filterDefaultDataForLocalStorage } from "../../../lib/filterDefaultData";

const FilterArea = ({ setMenu }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const [filterItems, setFilterItems] = useLocalStorage(
    "filters",
    filterDefaultDataForLocalStorage
  );

  const pickPrices = [50, 100, 200, 300, 400];

  useEffect(() => {
    setValue("fromArea", filterItems?.area?.fromArea);
    setValue("toArea", filterItems?.area?.toArea);
  }, []);

  const fromArea = Number(watch("fromArea"));
  const toArea = Number(watch("toArea"));

  const onSubmit = (data) => {
    setFilterItems((prevState) => {
      return { ...prevState, area: data };
    });

    setMenu("");
  };

  const handleSuggestionClick = (value, inputName) => {
    setValue(inputName, value);
  };

  return (
    <FilterModal title={"ფართობის მიხედვით"} className={style.areaModal}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <article>
          <div className={`${style.areaInputs} flex`}>
            <div className={style.fromInput}>
              <input
                type="number"
                placeholder="დან"
                value={fromArea ? fromArea : ""}
                style={{ borderColor: errors.fromArea ? "#F93B1D" : "" }}
                {...register("fromArea", {
                  validate: (value) => {
                    if (Number(value) > Number(toArea)) {
                      return "ჩაწერეთ ვალიდური მონაცემები";
                    }
                    return true;
                  },
                })}
              />
              <span className={style.lariSign}>მ²</span>
              {errors.fromArea && (
                <p className={style.error}>{errors.fromArea.message}</p>
              )}
            </div>

            <div className={style.toInput}>
              <input
                type="number"
                placeholder="მდე"
                value={toArea ? toArea : ""}
                style={{ borderColor: errors.fromArea ? "#F93B1D" : "" }}
                {...register("toArea")}
              />
              <span className={style.lariSign}>მ²</span>
            </div>
          </div>

          <div className={style.suggestPrices}>
            <div className={style.areaList}>
              <h4>მინ. მ²</h4>
              {pickPrices.map((value) => (
                <button
                  type="button"
                  key={value}
                  onClick={() => {
                    handleSuggestionClick(value, "fromArea");
                  }}
                >
                  {value} მ²
                </button>
              ))}
            </div>

            <div className={style.areaList}>
              <h4>მაქს. მ²</h4>
              {pickPrices.map((value) => (
                <button
                  type="button"
                  key={value}
                  onClick={() => {
                    handleSuggestionClick(value, "toArea");
                  }}
                >
                  {value} მ²
                </button>
              ))}
            </div>
          </div>
        </article>

        <div className={style.btnContainer}>
          <Button type={"submit"} className={style.chooseBtn}>
            არჩევა
          </Button>
        </div>
      </form>
    </FilterModal>
  );
};

export default FilterArea;
