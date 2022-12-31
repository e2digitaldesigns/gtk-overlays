import React from "react";
import Chyron from "./Components/Chyron/Chyron";
import ContentBoxes from "./Components/ContentBoxes/ContentBoxes";
import Hosts from "./Components/Hosts/Hosts";

const OverlayCNN: React.FC = () => {
  return (
    <>
      <ContentBoxes />
      <Hosts />
      <Chyron />
    </>
  );
};

export default OverlayCNN;
