import React from "react";
import * as Styled from "./News.styles";
import { theme } from "../../Theme/GlobalTheme";

import { Scroller } from "../../../../../globalComponents";
import { useDataContext } from "../../../../../context";
import CONFIG from "../../config.json";

export const NewsCNN: React.FC = () => {
  const { ticker: data } = useDataContext();
  return (
    <Styled.NewsWrapper>
      <div />
      <Styled.NewsHeader>news</Styled.NewsHeader>

      <Scroller
        data={data}
        fontSize={26}
        timer={CONFIG.scrollTimers.newsFeed}
        sx={{
          text: { color: theme.colors.font2, padding: "0 .5rem" }
        }}
      />
      <div />
    </Styled.NewsWrapper>
  );
};
