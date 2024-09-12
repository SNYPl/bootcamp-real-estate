import React from "react";
import style from "./style.module.css";
import FilterModal from "../FilterModal";
import { useForm } from "react-hook-form";
import Button from "../../../button/Button";

const FilterPrice = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const pickPrices = [50000, 100000, 150000, 200000, 300000];

  const fromPrice = watch("fromPrice");
  const toPrice = watch("toPrice");

  const onSubmit = (data) => console.log(data);

  const handleSuggestionClick = (value, inputName) => {
    setValue(inputName, value);
  };

  const formatNumber = (value) => {
    return new Intl.NumberFormat("en-US").format(value);
  };

  return (
    <FilterModal title={"ფასის მიხედვით"} className={style.priceModal}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <article>
          <div className={`${style.priceInputs} flex`}>
            <div className={style.fromInput}>
              <input
                type="number"
                placeholder="დან"
                style={{ borderColor: errors.fromPrice ? "#F93B1D" : "" }}
                {...register("fromPrice", {
                  min: { value: 0, message: "Minimum value is 0" },
                  validate: (value) =>
                    value <= toPrice || "ჩაწერეთ ვალიდური მონაცემები",
                })}
              />
              <span className={style.lariSign}>₾</span>
              {errors.fromPrice && (
                <p className={style.error}>{errors.fromPrice.message}</p>
              )}
            </div>

            <div className={style.toInput}>
              <input
                type="number"
                style={{ borderColor: errors.fromPrice ? "#F93B1D" : "" }}
                placeholder="მდე"
                {...register("toPrice", {
                  min: { value: 0, message: "Minimum value is 0" },
                  validate: (value) => value >= fromPrice || "",
                })}
              />
              <span className={style.lariSign}>₾</span>
            </div>
          </div>

          <div className={style.suggestPrices}>
            <div className={style.priceList}>
              <h4>მინ. ფასი</h4>
              {pickPrices.map((value) => (
                <button
                  type="button"
                  key={value}
                  onClick={() => handleSuggestionClick(value, "fromPrice")}
                >
                  {formatNumber(value)} ₾
                </button>
              ))}
            </div>

            <div className={style.priceList}>
              <h4>მაქს. ფასი</h4>
              {pickPrices.map((value) => (
                <button
                  type="button"
                  key={value}
                  onClick={() => handleSuggestionClick(value, "toPrice")}
                >
                  {formatNumber(value)} ₾
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

export default FilterPrice;
