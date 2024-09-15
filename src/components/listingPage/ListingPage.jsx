import React from "react";
import style from "./style.module.css";
import Listing from "./listing/Listing";
import axios from "axios";
import { useQuery } from "react-query";

const ListingPage = () => {
  const options = {
    method: "GET",
    url:
      "https://api.real-estate-manager.redberryinternship.ge/api/real-estates",
    headers: {
      accept: "application/json",
      Authorization: "Bearer 9d04c1f4-4b69-4c2e-923a-e717ad5764fc",
    },
  };

  const { data, isLoading, isError, isFetched } = useQuery(
    ["getAllRealEstate"],
    async () => {
      try {
        const response = await axios.request(options);

        return response.data;
      } catch (error) {
        console.error("Error fetching featured products", error);
        throw new Error("Error fetching featured products");
      }
    }
  );

  console.log(data);

  return (
    <section className={`${style.listingPage} `}>
      <Listing />
      <Listing />
    </section>
  );
};

export default ListingPage;
