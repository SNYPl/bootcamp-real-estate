import React from "react";
import style from "../style.module.css";
import Button from "../../../button/Button";
import { PlusSvg } from "../../../../assets/common/svg/btn";

const AgentAddBtn = () => {
  return (
    <section className={`${style.agentAddBtn} `}>
      <Button className={`${style.addBtn} ${style.agentBtn}`}>
        <span>
          <PlusSvg color={"#f93b1d"} />
        </span>
        აგენტის დამატება
      </Button>
    </section>
  );
};

export default AgentAddBtn;
