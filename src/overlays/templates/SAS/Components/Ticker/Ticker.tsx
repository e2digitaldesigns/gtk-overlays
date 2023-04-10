import React from "react";
import { useDataContext } from "../../../../../context";
import { Scroller } from "../../../../../globalComponents";
import * as Styled from "./Ticker.style";
import CONFIG from "../../config.json";

const TickerSAS: React.FC = () => {
  const { ticker } = useDataContext();

  return (
    <>
      <Styled.Ticker>
        <Scroller
          data={ticker}
          sx={{
            title: { padding: "0 .25rem", "font-weight": "bold" },
            text: { "font-weight": "bold" }
          }}
          timer={CONFIG.scrollTimers.newsFeed}
        />
      </Styled.Ticker>
    </>
  );
};

export default TickerSAS;
