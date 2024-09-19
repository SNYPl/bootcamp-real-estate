import React, { useContext } from "react";
import style from "../style.module.css";
import Button from "../../../button/Button";
import { PlusSvg } from "../../../../assets/common/svg/btn";
import { agentContext } from "../../../store/agentAddStore";

const AgentAddBtn = () => {
  const { setAddAgentHandler } = useContext(agentContext);

  return (
    <section className={`${style.agentAddBtn} `}>
      <Button
        className={`${style.addBtn} ${style.agentBtn}`}
        onClick={() => setAddAgentHandler((prevState) => !prevState)}
      >
        <span>
          <PlusSvg color={"#f93b1d"} />
        </span>
        აგენტის დამატება
      </Button>
    </section>
  );
};

export default AgentAddBtn;
