import React from "react";
import { useDataContext } from "../../context";
import OverlayBNN from "./BNN/BNN";
import OverlayPTI from "./PTI/PTI";
import OverlaySAS from "./SAS/SAS";
import OverlayWM from "./WM/WM";
import OverlayCHL from "./CHL/CHL";
import OverlayXBX from "./XBX/XBX";
import OverlayFGT from "./FGT/FGT";
import { useGlobalVotingInit, useGlobalTopicsInit } from "../../hooks";
import OverlayCNN from "./CNN/CNN";
import OverlayESPN from "./ESPN/ESPN";
import OverlayACT from "./ACT/ACT";

interface OverlayTemplateParserProps {}

const templateMap: { [key: string]: JSX.Element } = {
  "640cb609fe1bde3d9ae9ded5": <OverlayBNN />,
  "640cb609fe1bde3d9ae9ded3": <OverlayPTI />,
  "640cb609fe1bde3d9ae9ded6": <OverlayWM />,
  "642b676a3d3324192e538f6b": <OverlaySAS />,
  "6487a695656d253edcdca8db": <OverlayCHL />,
  "653679760a308f6ed2f75217": <OverlayXBX />,
  "655ffc71a7fd7ac529acd46e": <OverlayFGT />,
  "65a90a1a02aae02cdba1910d": <OverlayCNN />,
  "6647f6f64a90eaac951773c6": <OverlayESPN />,
  "669058fba7e42fa757369978": <OverlayACT />
};

const OverlayTemplateParser: React.FC<OverlayTemplateParserProps> = () => {
  const { templateId } = useDataContext();

  useGlobalVotingInit();
  useGlobalTopicsInit();

  return templateMap[templateId];
};

export default OverlayTemplateParser;
