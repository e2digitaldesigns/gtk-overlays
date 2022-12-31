import React from "react";
import { useDataContext } from "../../context";
import OverlayBNN from "./BNN/BNN";
import OverlayCNN from "./CNN/CNN";
// import OverlayPTI from "./PTI/PTI";

interface OverlayTemplateParserProps {}

// const templateMap: { [key: string]: JSX.Element } = {
//   bnn: <OverlayBNN />,
//   "615de8a8b587713cb80b01af": <OverlayCNN />,
//   "615cac89b26a27ffe0b100b8": <OverlayPTI />
// };

const templateMap: { [key: string]: JSX.Element } = {
  bnn: <OverlayBNN />,
  "615de8a8b587713cb80b01af": <OverlayCNN />
};

const OverlayTemplateParser: React.FC<OverlayTemplateParserProps> = () => {
  const { templateId } = useDataContext();

  return templateMap[templateId];
};

export default OverlayTemplateParser;
