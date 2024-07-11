import * as React from "react";

import { Scroller } from "../../../../../../globalComponents";
import * as Styled from "./NewsFeed.styles";
import { useDataContext } from "../../../../../../context";
import CONFIG from "../../../config.json";

const NewsFeed: React.FC = () => {
  const { ticker: data } = useDataContext();

  return (
    <>
      <Styled.NewsFeedHeader>
        <span>NEWS</span>
      </Styled.NewsFeedHeader>
      <Styled.NewsFeed>
        <Scroller
          data={data}
          timer={CONFIG.scrollTimers.newsFeed}
          sx={{
            title: { padding: "0 .25rem", "font-weight": "bold" },
            text: { "font-weight": "bold" }
          }}
        />
      </Styled.NewsFeed>
    </>
  );
};

export default NewsFeed;
