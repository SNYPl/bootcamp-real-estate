import React from "react";
import style from "./style.module.css";
import Listing from "./listing/Listing";
import { useLocalStorage } from "@uidotdev/usehooks";
import { filterDefaultDataForLocalStorage } from "../lib/filterDefaultData";
import { filterListings } from "../helper/filterList";
import useGetAllListing from "../hooks/useGetAllListing";

const ListingPage = () => {
  const [filterItems] = useLocalStorage(
    "filters",
    filterDefaultDataForLocalStorage
  );

  const { data, isLoading, isError } = useGetAllListing();

  if (isLoading) {
    return <div>...loading</div>;
  }

  const filteredData = data?.filter((list) =>
    filterListings(list, filterItems)
  );

  return (
    <section className={`${style.listingPage} `}>
      {filteredData?.length == 0 && (
        <p className={style.noDataTitle}>
          აღნიშნული მონაცემებით განცხადება არ იძებნება
        </p>
      )}

      {filteredData?.map((el) => (
        <Listing {...el} key={el.id} />
      ))}
    </section>
  );
};

export default ListingPage;
