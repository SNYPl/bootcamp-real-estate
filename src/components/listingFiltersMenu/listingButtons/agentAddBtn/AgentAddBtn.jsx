import React, { useState } from "react";
import style from "../style.module.css";
import Button from "../../../button/Button";
import { PlusSvg } from "../../../../assets/common/svg/btn";
import Modal from "../../../modal/Modal";
import AgentAddForm from "../../../agentAddForm/AgentAddForm";

const AgentAddBtn = () => {
  const [agentAddModal, setAgentAddModal] = useState(false);
  return (
    <>
      {agentAddModal && (
        <Modal
          hideButtons={true}
          className={style.modal}
          setDeleteAgent={setAgentAddModal}
        >
          <AgentAddForm setAgentAddModal={setAgentAddModal} />
        </Modal>
      )}
      <section className={`${style.agentAddBtn} `}>
        <Button
          className={`${style.addBtn} ${style.agentBtn}`}
          onClick={() => setAgentAddModal((prevState) => !prevState)}
        >
          <span>
            <PlusSvg color={"#f93b1d"} />
          </span>
          აგენტის დამატება
        </Button>
      </section>
    </>
  );
};

export default AgentAddBtn;
