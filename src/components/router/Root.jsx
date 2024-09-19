import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import style from "./style.module.css";
import Header from "../header/Header";
import { agentContext } from "../store/agentAddStore";
import AgentAddForm from "../agentAddForm/AgentAddForm";
import Modal from "../modal/Modal";

export default function Root() {
  const { addAgentHandler, setAddAgentHandler } = useContext(agentContext);
  return (
    <>
      {addAgentHandler && (
        <Modal
          hideButtons={true}
          className={style.modal}
          cancelModal={setAddAgentHandler}
        >
          <AgentAddForm setAgentAddModal={setAddAgentHandler} />
        </Modal>
      )}
      <Header />
      <Outlet />
    </>
  );
}
