import React, { useState, useEffect } from "react";
import style from "./style.module.css";
import FilterModal from "../FilterModal";
import { useForm } from "react-hook-form";
import Button from "../../../button/Button";
import { useLocalStorage } from "@uidotdev/usehooks";
import { filterDefaultDataForLocalStorage } from "../../../lib/filterDefaultData";

const FilterArea = ({ setMenu }) => {
  const [areaValue, setAreaValue] = useState({
    fromArea: "",
    toArea: "",
  });
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fromArea: areaValue.fromArea && areaValue.fromArea,
      toArea: areaValue.toArea && areaValue.toArea,
    },
  });

  const [filterItems, setFilterItems] = useLocalStorage(
    "filters",
    filterDefaultDataForLocalStorage
  );

  useEffect(() => {
    const areaValues = filterItems?.map((el) => el.area);

    setAreaValue(...areaValues);
  }, []);

  const pickPrices = [50, 100, 200, 300, 400];

  const toArea = watch("toArea");

  const onSubmit = (data) => {
    setFilterItems((prevState) => {
      return prevState.map((item) => {
        if (item.price) {
          return { ...item, area: data };
        }
        return item;
      });
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
                value={areaValue.fromArea}
                style={{ borderColor: errors.fromArea ? "#F93B1D" : "" }}
                {...register("fromArea", {
                  validate: (value) => {
                    if (Number(value) > Number(toArea)) {
                      return "ჩაწერეთ ვალიდური მონაცემები";
                    }
                    return true;
                  },
                })}
                onChange={(e) => {
                  setAreaValue((prevState) => ({
                    ...prevState,
                    fromArea: e.target.value,
                  }));
                }}
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
                value={areaValue.toArea}
                style={{ borderColor: errors.fromArea ? "#F93B1D" : "" }}
                {...register("toArea")}
                onChange={(e) => {
                  setAreaValue((prevState) => ({
                    ...prevState,
                    toArea: e.target.value,
                  }));
                }}
              />
              <span className={style.lariSign}>მ²</span>
            </div>
          </div>

          <div className={style.suggestPrices}>
            <div className={style.priceList}>
              <h4>მინ. მ²</h4>
              {pickPrices.map((value) => (
                <button
                  type="button"
                  key={value}
                  onClick={() => {
                    handleSuggestionClick(value, "fromArea");
                    setAreaValue((prevState) => ({
                      ...prevState,
                      fromArea: value,
                    }));
                  }}
                >
                  {value} მ²
                </button>
              ))}
            </div>

            <div className={style.priceList}>
              <h4>მაქს. მ²</h4>
              {pickPrices.map((value) => (
                <button
                  type="button"
                  key={value}
                  onClick={() => {
                    handleSuggestionClick(value, "toArea");
                    setAreaValue((prevState) => ({
                      ...prevState,
                      toArea: value,
                    }));
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
