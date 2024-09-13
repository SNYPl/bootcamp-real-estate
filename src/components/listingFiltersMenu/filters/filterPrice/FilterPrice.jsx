import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import FilterModal from "../FilterModal";
import { useForm } from "react-hook-form";
import Button from "../../../button/Button";
import { useLocalStorage } from "@uidotdev/usehooks";
import { filterDefaultDataForLocalStorage } from "../../../lib/filterDefaultData";

const FilterPrice = ({ setMenu }) => {
  const [priceValue, setPriceValue] = useState({
    fromPrice: "",
    toPrice: "",
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,

    formState: { errors },
  } = useForm({
    defaultValues: {
      fromPrice: priceValue.fromPrice && priceValue.fromPrice,
      toPrice: priceValue.toPrice && priceValue.toPrice,
    },
  });

  const [filterItems, setFilterItems] = useLocalStorage(
    "filters",
    filterDefaultDataForLocalStorage
  );

  useEffect(() => {
    const priceValues = filterItems?.map((el) => el.price);

    setPriceValue(...priceValues);
  }, [filterItems.price]);

  const pickPrices = [50000, 100000, 150000, 200000, 300000];

  const toPrice = watch("toPrice");

  const onSubmit = (data) => {
    setFilterItems((prevState) => {
      return prevState.map((item) => {
        if (item.price) {
          return { ...item, price: data };
        }
        return item;
      });
    });

    setMenu("");
  };

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
                value={priceValue.fromPrice}
                style={{ borderColor: errors.fromPrice ? "#F93B1D" : "" }}
                {...register("fromPrice", {
                  validate: (value) => {
                    if (Number(value) > Number(toPrice)) {
                      return "ჩაწერეთ ვალიდური მონაცემები";
                    }
                    return true;
                  },
                })}
                onChange={(e) => {
                  setPriceValue((prevState) => ({
                    ...prevState,
                    fromPrice: e.target.value,
                  }));
                }}
              />
              <span className={style.lariSign}>₾</span>
              {errors.fromPrice && (
                <p className={style.error}>{errors.fromPrice.message}</p>
              )}
            </div>

            <div className={style.toInput}>
              <input
                type="number"
                value={priceValue.toPrice}
                style={{ borderColor: errors.fromPrice ? "#F93B1D" : "" }}
                placeholder="მდე"
                {...register("toPrice")}
                onChange={(e) => {
                  setPriceValue((prevState) => ({
                    ...prevState,
                    toPrice: e.target.value,
                  }));
                }}
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
                  onClick={() => {
                    handleSuggestionClick(value, "fromPrice");
                    setPriceValue((prevState) => ({
                      ...prevState,
                      fromPrice: value,
                    }));
                  }}
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
                  onClick={() => {
                    handleSuggestionClick(value, "toPrice");
                    setPriceValue((prevState) => ({
                      ...prevState,
                      toPrice: value,
                    }));
                  }}
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
