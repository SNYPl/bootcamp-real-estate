import React from "react";
import style from "../style.module.css";
import Button from "../../../button/Button";
import { PlusSvg } from "../../../../assets/common/svg/btn";

const ListingAddBtn = () => {
  return (
    <section className={`${style.listAddBtn} `}>
      <Button className={`${style.addBtn} ${style.listingBtn}`}>
        <span>
          <PlusSvg color={"#fff"} />
        </span>
        ლისტინგის დამატება
      </Button>
    </section>
  );
};

export default ListingAddBtn;
