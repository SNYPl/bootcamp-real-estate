import React from "react";
import style from "./style.module.css";
import { AgentEmailSvg, AgentMobileSvg } from "../../assets/common/svg/listing";
import agentImg from "../../assets/images/agentImg.png";

const AgentInfo = () => {
  return (
    <article className={`${style.listingInfoAgent} `}>
      <div className={`${style.agentImg} `}>
        <div className={`${style.agentImgContainer} `}>
          <img src={agentImg} alt="agent" />
        </div>
        <div className={`${style.agentTitle} `}>
          <h4>სოფიო გელოვანი</h4>
          <p>აგენტი</p>
        </div>
      </div>

      <div className={style.agentContact}>
        <p>
          <AgentEmailSvg /> sophio.gelovani@redberry.ge
        </p>
        <p>
          <AgentMobileSvg /> 577 777 777
        </p>
      </div>
    </article>
  );
};

export default AgentInfo;
