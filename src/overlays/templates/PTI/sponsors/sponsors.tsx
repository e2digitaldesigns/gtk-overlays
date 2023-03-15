import React from "react";
import { useParams } from "../../../../hooks";
import { SectionsPTI } from "../../../../types";
import * as Styled from "./sponsors.style";

const Sponsors: React.FC = () => {
  const { showSection } = useParams();

  if (!showSection(SectionsPTI.Sponsors)) return null;

  return <Styled.SponsorsWrapper />;
};

export default Sponsors;
