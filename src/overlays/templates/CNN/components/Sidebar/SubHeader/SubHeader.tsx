import React from "react";
import * as Styled from "./SubHeader.styles";
import { useDataContext } from "../../../../../../context";

import { Scroller, socialToScroller } from "../../../../../../globalComponents";

import CONFIG from "../../../config.json";

export const SubHeaderCNN: React.FC = () => {
  const { name, socialNetworks } = useDataContext();
  const data = socialToScroller(socialNetworks, true);

  return (
    <Styled.SubHeaderWrapper>
      <Styled.SubHeaderTitle> {name} </Styled.SubHeaderTitle>
      <Styled.SubHeaderSubtitle>
        <Scroller
          data={data}
          timer={CONFIG.scrollTimers.networkTab}
          sx={{
            title: { padding: "0 .5rem 0 0", "font-size": "1.125rem" },
            text: { "font-size": "1.125rem" }
          }}
        />
      </Styled.SubHeaderSubtitle>
    </Styled.SubHeaderWrapper>
  );
};
