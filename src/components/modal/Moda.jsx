import React from "react";
import style from "./style.module.css";
import axios from "axios";
import { useQuery } from "react-query";
import { CloseSvg } from "../../assets/common/svg/listing";
import Button from "../button/Button";

const Modal = ({ children, setDeleteAgent }) => {
  return (
    <section className={`${style.overlay} `}>
      <div className={`${style.modal} `}>
        <div
          className={`${style.closeIcon} `}
          onClick={() => setDeleteAgent(false)}
        >
          <CloseSvg />
        </div>
        <p>{children}</p>
        <section className={`${style.buttons} `}>
          <div className={`${style.agentAddBtn} `}>
            <Button
              className={`${style.addBtn} ${style.agentBtn}`}
              onClick={() => setDeleteAgent(false)}
            >
              გაუქმება
            </Button>
          </div>
          <div className={`${style.listAddBtn} `}>
            <Button className={`${style.addBtn} ${style.listingBtn}`}>
              დადასტურება
            </Button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Modal;
