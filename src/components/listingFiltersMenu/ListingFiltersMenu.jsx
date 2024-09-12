import React from "react";
import style from "./style.module.css";
import Filters from "./filters/Filters";
import ListingButtons from "./listingButtons/ListingButtons";

const ListingFiltersMenu = () => {
  return (
    <section className={`${style.listingFIlters} `}>
      <Filters />
      <ListingButtons />
    </section>
  );
};

export default ListingFiltersMenu;
