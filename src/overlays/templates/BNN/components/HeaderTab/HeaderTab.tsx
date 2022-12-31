import * as React from "react";
import { useDataContext } from "../../../../../context";
import { Scroller, socialToScroller } from "../../../../../globalComponents";
import { useParams } from "../../../../../hooks";
import { Sections } from "../../../../../hooks/useParamsHook/types";
import * as Styled from "./HeaderTab.style";
import CONFIG from "../../config.json";

const HeaderTab: React.FC = () => {
  const { showSection } = useParams();
  const { socialNetworks } = useDataContext();
  if (!showSection(Sections.BnnHeader)) return null;

  const data = socialToScroller(socialNetworks, true);

  return (
    <div>
      <Styled.HeaderTab>
        <Styled.Location>
          <Scroller
            data={data}
            timer={CONFIG.scrollTimers.headerTab}
            sx={{
              title: { padding: "0 .25rem" },
              text: { "font-weight": "bold" }
            }}
          />
        </Styled.Location>
        <Styled.Live>Live</Styled.Live>
      </Styled.HeaderTab>
    </div>
  );
};

export default HeaderTab;
