import React from "react";
import * as Styled from "./chyron.style";

import { useDataContext } from "../../../../context";
import { useParams } from "../../../../hooks";
import { Scroller } from "../../../../globalComponents";

import CONFIG from "../config.json";
import { SectionsPTI } from "../../../../types";

const Chyron: React.FC = () => {
  const { ticker } = useDataContext();
  const { showSection } = useParams();

  if (!showSection(SectionsPTI.Chyron)) return null;

  return (
    <>
      <Styled.ChyronHeader>NEWS</Styled.ChyronHeader>
      <Styled.ChyronWrapper>
        <Scroller data={ticker} timer={CONFIG.scrollTimers.newsFeed} />
      </Styled.ChyronWrapper>
    </>
  );
};

export default Chyron;
