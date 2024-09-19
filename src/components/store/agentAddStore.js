import React, { createContext, useState } from "react";

export const agentContext = createContext();

export const AgentModalStoreProvider = ({ children }) => {
  const [addAgentHandler, setAddAgentHandler] = useState(false);

  return (
    <agentContext.Provider value={{ addAgentHandler, setAddAgentHandler }}>
      {children}
    </agentContext.Provider>
  );
};
