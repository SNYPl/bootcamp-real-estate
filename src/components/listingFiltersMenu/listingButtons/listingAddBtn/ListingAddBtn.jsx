import React from "react";
import style from "../style.module.css";
import Button from "../../../button/Button";
import { PlusSvg } from "../../../../assets/common/svg/btn";
import { useNavigate } from "react-router-dom";

const ListingAddBtn = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/add-listing");
  };

  return (
    <section className={`${style.listAddBtn} `}>
      <Button
        className={`${style.addBtn} ${style.listingBtn}`}
        onClick={handleButtonClick}
      >
        <span>
          <PlusSvg color={"#fff"} />
        </span>
        ლისტინგის დამატება
      </Button>
    </section>
  );
};

export default ListingAddBtn;
