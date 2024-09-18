import React from "react";
import style from "./style.module.css";
import { AgentEmailSvg, AgentMobileSvg } from "../../assets/common/svg/listing";
import agentImg from "../../assets/images/agentImg.png";

const AgentInfo = ({ agent }) => {
  console.log(agent);
  return (
    <article className={`${style.listingInfoAgent} `}>
      <div className={`${style.agentImg} `}>
        <div className={`${style.agentImgContainer} `}>
          <img src={agent.avatar} alt="agent" />
        </div>
        <div className={`${style.agentTitle} `}>
          <h4>
            {agent.name} {agent.surname}
          </h4>
          <p>აგენტი</p>
        </div>
      </div>

      <div className={style.agentContact}>
        <p>
          <AgentEmailSvg /> {agent.email}
        </p>
        <p>
          <AgentMobileSvg /> {agent.phone}
        </p>
      </div>
    </article>
  );
};

export default AgentInfo;
