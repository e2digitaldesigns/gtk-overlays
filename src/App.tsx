import React from "react";

import "./scss/styles.scss";

import OverlayTemplateParser from "./overlays/templates/overlayTemplateParser";
import { ApplicationSocket } from "./AppReset";

import { DataContextProvider } from "./context/useDataContext/dataContextProvider";

const App: React.FC = () => {
  return (
    <DataContextProvider>
      <ApplicationSocket />
      <div className="main-stage">
        <OverlayTemplateParser />
      </div>
    </DataContextProvider>
  );
};

export default App;
