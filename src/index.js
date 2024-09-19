import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/css/reset.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./components/router/routes";
import { QueryClientProviderHelper } from "./utils/queryProvider";
import { AgentModalStoreProvider } from "./components/store/agentAddStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProviderHelper>
      <AgentModalStoreProvider>
        <RouterProvider router={router} />
      </AgentModalStoreProvider>
    </QueryClientProviderHelper>
  </React.StrictMode>
);
