import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import FilterModal from "../FilterModal";
import { getAllRegions } from "../../../../utils/getAllRegions";
import Button from "../../../button/Button";
import { useForm } from "react-hook-form";
import { useLocalStorage } from "@uidotdev/usehooks";
import { filterDefaultDataForLocalStorage } from "../../../lib/filterDefaultData";

const FilterRegion = ({ setMenu }) => {
  const [regions, setRegions] = useState([]);
  const [filterItems, setFilterItems] = useLocalStorage(
    "filters",
    filterDefaultDataForLocalStorage
  );
  const [checkedRegions, setCheckedRegions] = useState([]);

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    const allCheckedItems = filterItems?.map((el) => el.region);

    setCheckedRegions(...allCheckedItems);
  }, [filterItems.region]);

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
    setFilterItems((state) => {
      const updatedState = state.map((item) => {
        if (item.region) {
          return { ...item, region: data.checkbox };
        }
        return item;
      });

      return updatedState.length
        ? updatedState
        : [...state, { region: data.checkbox }];
    });

    setMenu("");
  };

  const handleCheckboxChange = (name) => {
    setCheckedRegions((prev) => {
      if (prev.includes(name)) {
        return prev.filter((region) => region !== name);
      } else {
        return [...prev, name];
      }
    });
  };

  return (
    <FilterModal title={"რეგიონის მიხედვით"} className={style.regionModal}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.filterRegion}>
          {regions.map(({ id, name }) => {
            const isChecked = checkedRegions.includes(name);

            return (
              <div key={id} className={`flex item-center ${style.regionItem}`}>
                <input
                  {...register("checkbox")}
                  type="checkbox"
                  value={name}
                  id={name}
                  checked={isChecked}
                  onChange={() => handleCheckboxChange(name)}
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
