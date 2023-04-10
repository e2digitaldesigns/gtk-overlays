import React from "react";
import { useDataContext } from "../../context";
import OverlayBNN from "./BNN/BNN";
import OverlayCNN from "./CNN/CNN";
import OverlayPTI from "./PTI/PTI";
import OverlaySAS from "./SAS/SAS";
import OverlayWM from "./WM/WM";

interface OverlayTemplateParserProps {}

const templateMap: { [key: string]: JSX.Element } = {
  "640cb609fe1bde3d9ae9ded5": <OverlayBNN />,
  "640cb609fe1bde3d9ae9ded4": <OverlayCNN />,
  "640cb609fe1bde3d9ae9ded3": <OverlayPTI />,
  "640cb609fe1bde3d9ae9ded6": <OverlayWM />,
  "642b676a3d3324192e538f6b": <OverlaySAS />
};

const OverlayTemplateParser: React.FC<OverlayTemplateParserProps> = () => {
  const { templateId } = useDataContext();

  console.log({ templateId });

  return templateMap[templateId];
};

export default OverlayTemplateParser;
