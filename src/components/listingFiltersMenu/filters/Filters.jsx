import React, { useState } from "react";
import style from "./style.module.css";
import { filterMenu } from "../../lib/filterMenu";
import Button from "../../button/Button";
import { Arrow } from "../../../assets/common/svg/filter";

const Filters = () => {
  const [menu, setMenu] = useState("");
  return (
    <section className={`${style.filters} `}>
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
            {item.title} <span className={style.itemArrow}>{<Arrow />}</span>
          </Button>

          {menu === item.title && <item.Modal setMenu={setMenu} />}
        </div>
      ))}
    </section>
  );
};

export default Filters;
