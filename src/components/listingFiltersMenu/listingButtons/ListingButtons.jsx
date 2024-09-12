import React from "react";
import style from "./style.module.css";
import ListingAddBtn from "./listingAddBtn/ListingAddBtn";
import AgentAddBtn from "./agentAddBtn/AgentAddBtn";

const ListingButtons = () => {
  return (
    <section className={`${style.buttons} `}>
      <ListingAddBtn />
      <AgentAddBtn />
    </section>
  );
};

export default ListingButtons;
