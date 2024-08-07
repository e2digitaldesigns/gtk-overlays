import * as React from "react";
import { useDataContext } from "../../../../../context";
import { Scroller, socialToScroller } from "../../../../../globalComponents";
import { useParams } from "../../../../../hooks";
import * as Styled from "./HeaderTab.style";
import CONFIG from "../../config.json";
import { SectionsACT } from "../../../../../types";

const HeaderTab: React.FC = () => {
  const { showSection } = useParams();
  const { socialNetworks } = useDataContext();

  if (!showSection(SectionsACT.Header)) return null;

  const data = socialToScroller(socialNetworks, true);

  return (
    <div>
      <Styled.HeaderTab>
        <Styled.Location>
          <Scroller
            transition="fade"
            data={data}
            timer={CONFIG.scrollTimers.headerTab}
            sx={{
              title: { "font-size": "18px", padding: "0 .25rem" },
              text: { "font-size": "24px", "font-weight": "bold" }
            }}
          />
        </Styled.Location>
      </Styled.HeaderTab>
    </div>
  );
};

export default HeaderTab;
