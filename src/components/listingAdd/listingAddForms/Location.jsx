import React from "react";
import style from "./style.module.css";
import styles from "../style.module.css";
import { ValidationMarkSvg } from "../../../assets/common/svg/addListing";
import axios from "axios";
import { useQuery } from "react-query";

const LocationInputs = ({
  register,
  errors,
  watch,
  regions,
  validatingFields,
  setListingAddInputs,
  listingAddInputs,
}) => {
  const region = watch("region");

  const options = {
    method: "GET",
    url: "https://api.real-estate-manager.redberryinternship.ge/api/cities",
    headers: {
      accept: "application/json",
    },
  };

  const { data, isLoading, isError } = useQuery(["getAllCities"], async () => {
    try {
      const response = await axios.request(options);

      return response.data;
    } catch (error) {
      console.error("Error fetching featured products", error);
      throw new Error("Error fetching featured products");
    }
  });

  const filteredCitiesWithRegion = data?.filter(
    (city) => city.region_id === Number(region)
  );

  return (
    <div className={`${style.locationInputs} ${styles.addListInputs}`}>
      <h4>მდებარეობა</h4>

      <div className={style.formInputs}>
        <div
          className={`${style.inputContainers} ${
            errors.address ? style.errorBtn : ""
          }`}
        >
          <label>
            <span>მისამართი*</span>
            <input
              type="text"
              {...register("address", {
                required: "ველი სავალდებულოა",
                minLength: {
                  value: 2,
                  message: "მინიმუმ ორი სიმბოლო",
                },
              })}
            />
          </label>

          <p
            className={`${errors.address ? style.error : style.tipText} ${
              validatingFields.address ? style.successValidate : ""
            }`}
          >
            {errors.address ? (
              errors.address.message
            ) : (
              <span>
                <ValidationMarkSvg /> მინიმუმ ორი სიმბოლო
              </span>
            )}
          </p>
        </div>

        <div
          className={`${style.inputContainers} ${
            errors.zip_code ? style.errorBtn : ""
          }`}
        >
          <label>
            <span>საფოსტო ინდექსი*</span>
            <input
              type="text"
              {...register("zip_code", {
                required: "ველი სავალდებულოა",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "მხოლოდ რიცხვები",
                },
              })}
            />
          </label>
          <p
            className={`${errors.zip_code ? style.error : style.tipText} ${
              validatingFields.zip_code ? style.successValidate : ""
            }`}
          >
            {errors.zip_code ? (
              errors.zip_code.message
            ) : (
              <span>
                <ValidationMarkSvg /> მხოლოდ რიცხვები
              </span>
            )}
          </p>
        </div>
      </div>

      <div className={style.selectorContainer}>
        <div
          className={`${style.inputContainers} ${
            errors.region ? style.errorBtn : ""
          }`}
        >
          <label>
            <span>რეგიონი</span>
            <select {...register("region", { required: "სავალდებულო" })}>
              <option value="">აირჩიე რეგიონი</option>
              {regions?.map((region) => {
                return (
                  <option value={region.id} key={region.id}>
                    {region.name}
                  </option>
                );
              })}
            </select>
          </label>
          {errors.region && (
            <p className={style.error}>{errors.region.message}</p>
          )}
        </div>
        {region && (
          <div
            className={`${style.inputContainers} ${
              errors.city ? style.errorBtn : ""
            }`}
          >
            <label>
              <span>ქალაქი</span>
              <select {...register("city", { required: "სავალდებულო" })}>
                <option value="">აირჩიე ქალაქი</option>
                {filteredCitiesWithRegion?.map((city) => {
                  return (
                    <option value={city.id} key={city.id}>
                      {city.name}
                    </option>
                  );
                })}
              </select>
            </label>
            {errors.city && (
              <p className={style.error}>{errors.city.message}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationInputs;
