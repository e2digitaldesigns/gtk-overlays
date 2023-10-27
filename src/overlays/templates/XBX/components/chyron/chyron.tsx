import React from "react";
import * as Styled from "./chyron.style";

import { useDataContext } from "../../../../../context";
import { useParams } from "../../../../../hooks";
import { Scroller } from "../../../../../globalComponents";

import CONFIG from "../../config.json";
import { SectionsXBX } from "../../../../../types";

const ChyronXBX: React.FC = () => {
  const { ticker } = useDataContext();
  const { showSection } = useParams();

  if (!showSection(SectionsXBX.Chyron)) return null;

  return (
    <>
      <Styled.ChyronHeader>NEWS</Styled.ChyronHeader>
      <Styled.ChyronWrapper>
        <Scroller data={ticker} timer={CONFIG.scrollTimers.newsFeed} />
      </Styled.ChyronWrapper>
    </>
  );
};

export default ChyronXBX;
