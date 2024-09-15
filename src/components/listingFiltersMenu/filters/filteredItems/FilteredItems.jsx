import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { useLocalStorage } from "@uidotdev/usehooks";
import { DeleteFilterSvg } from "../../../../assets/common/svg/filter";
import Button from "../../../button/Button";
import { filterDefaultDataForLocalStorage } from "../../../lib/filterDefaultData";

const FilteredItems = () => {
  const [filterItems, setFilterItems] = useLocalStorage("filters");
  const [filteredData, setFilteredData] = useState({});

  useEffect(() => {
    const data = filterItems;
    setFilteredData(data);
  }, [
    filterItems?.area?.fromArea,
    filterItems?.area?.toArea,
    filterItems?.price?.fromPrice,
    filterItems?.price?.toPrice,
    filterItems?.region.length,
    filterItems?.bedroom,
  ]);

  const clearBtnHandler =
    filterItems?.area?.fromArea ||
    filterItems?.area?.toArea ||
    filterItems?.price?.fromPrice ||
    filterItems?.price?.toPrice ||
    filterItems?.region.length ||
    filterItems?.bedroom;

  return (
    <div className={style.filterItems}>
      {filteredData?.region?.map((region, index) => {
        return (
          <div className={style.filterItem} key={index}>
            <p>{region}</p>
            <span
              className={style.closeSvg}
              onClick={() => {
                setFilterItems((prevState) => ({
                  ...prevState,
                  region: prevState.region.filter((_, i) => i !== index),
                }));
              }}
            >
              <DeleteFilterSvg />
            </span>
          </div>
        );
      })}

      {(filteredData?.price?.fromPrice || filteredData?.price?.toPrice) && (
        <div className={style.filterItem}>
          <p>{`${filteredData?.price?.fromPrice} ₾ - ${filteredData?.price?.toPrice} ₾`}</p>
          <span
            className={style.closeSvg}
            onClick={() => {
              setFilterItems((prevState) => ({
                ...prevState,
                price: {
                  ...prevState.price,
                  fromPrice: "",
                  toPrice: "",
                },
              }));
            }}
          >
            <DeleteFilterSvg />
          </span>
        </div>
      )}

      {(filteredData?.area?.fromArea || filteredData?.area?.toArea) && (
        <div className={style.filterItem}>
          <p>{`${filteredData?.area?.fromArea} მ² - ${filteredData?.area?.toArea} მ²`}</p>
          <span
            className={style.closeSvg}
            onClick={() => {
              setFilterItems((prevState) => ({
                ...prevState,
                area: {
                  ...prevState.area,
                  fromArea: "",
                  toArea: "",
                },
              }));
            }}
          >
            <DeleteFilterSvg />
          </span>
        </div>
      )}

      {filteredData?.bedroom && (
        <div className={style.filterItem}>
          <p>{`${filteredData?.bedroom}`}</p>
          <span
            className={style.closeSvg}
            onClick={() => {
              setFilterItems((prevState) => ({
                ...prevState,
                bedroom: "",
              }));
            }}
          >
            <DeleteFilterSvg />
          </span>
        </div>
      )}

      {clearBtnHandler && (
        <Button
          className={style.clearBtn}
          onClick={() => setFilterItems(() => filterDefaultDataForLocalStorage)}
        >
          გასუფთავება
        </Button>
      )}
    </div>
  );
};

export default FilteredItems;
