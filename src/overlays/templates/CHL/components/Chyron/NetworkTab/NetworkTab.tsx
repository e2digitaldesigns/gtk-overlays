import * as React from "react";
import { useDataContext } from "../../../../../../context";
import * as Styled from "./NetworkTab.styles";

import { Scroller, socialToScroller } from "../../../../../../globalComponents";
import CONFIG from "../../../config.json";

const NetworkTab: React.FC = () => {
  const { socialNetworks } = useDataContext();
  const data = socialToScroller(socialNetworks, true);

  return (
    <Styled.NetworkTab>
      <Scroller
        data={data}
        timer={CONFIG.scrollTimers.networkTab}
        sx={{
          title: { padding: "0 .5rem 0 0" },
          text: { "font-weight": "bold" }
        }}
      />
    </Styled.NetworkTab>
  );
};

export default NetworkTab;
