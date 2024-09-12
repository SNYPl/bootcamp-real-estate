import React, { useState } from "react";
import style from "./style.module.css";
import { filterMenu } from "../../lib/filterMenu";
import Button from "../../button/Button";
import { Arrow } from "../../../assets/common/svg/filter";

const Filters = () => {
  const [menu, setMenu] = useState("");
  return (
    <div className={`${style.filters} `}>
      {filterMenu.map((item) => (
        <div
          className={`flex align-center ${style.filterContainer} ${
            menu === item.title ? style.active : ""
          }`}
          key={item.title}
        >
          <Button
            className={style.menuItemBtn}
            onClick={() => {
              if (menu === item.title) {
                setMenu("");
                return;
              }
              setMenu(item.title);
            }}
          >
            {item.title}
          </Button>
          <span className={style.itemArrow}>{<Arrow />}</span>
          {menu === item.title && <item.Modal />}
        </div>
      ))}
    </div>
  );
};

export default Filters;
