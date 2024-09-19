import React from "react";
import style from "./style.module.css";
import { CloseSvg } from "../../assets/common/svg/listing";
import Button from "../button/Button";

const Modal = ({
  children,
  cancelModal,
  hideButtons,
  className,
  submitClick,
}) => {
  return (
    <section
      className={`${style.overlay} `}
      onClick={(e) => {
        if (e.currentTarget === e.target) {
          cancelModal(false);
        }
      }}
    >
      <div className={`${style.modal} ${className}`}>
        <div
          className={`${style.closeIcon} `}
          onClick={() => cancelModal(false)}
        >
          <CloseSvg />
        </div>
        <div className={`${style.modalContent} `}>{children}</div>
        {!hideButtons && (
          <section className={`${style.buttons} `}>
            <div className={`${style.agentAddBtn} `}>
              <Button
                className={`${style.addBtn} ${style.agentBtn}`}
                onClick={() => cancelModal(false)}
              >
                გაუქმება
              </Button>
            </div>
            <div className={`${style.listAddBtn} `}>
              <Button
                className={`${style.addBtn} ${style.listingBtn}`}
                onClick={submitClick}
              >
                დადასტურება
              </Button>
            </div>
          </section>
        )}
      </div>
    </section>
  );
};

export default Modal;
