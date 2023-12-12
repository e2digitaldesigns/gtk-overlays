import React from "react";
import { useParams } from "../../../../../hooks";
import * as Styled from "./Chyron.styles";
import InfoBox from "./InfoBox/InfoBox";

import NetworkTab from "./NetworkTab/NetworkTab";
import NewsFeed from "./NewsFeed/NewsFeed";

import { SectionsFGT } from "../../../../../types";
import { Timing } from "./Timing/Timing";
import { IntTopic } from "../../../../../globalComponents/Topics/types";
import SponsorsFGT from "./sponsors/sponsors";

interface ChyronProps {
  isTimerPaused: boolean;
  topic: IntTopic | undefined;
  trueOrFalseVotes?: any;
}

const Chyron: React.FC<ChyronProps> = ({
  isTimerPaused,
  topic,
  trueOrFalseVotes
}) => {
  const { showSection } = useParams();

  return (
    <Styled.ChyronWrapper>
      <Styled.Chyron>
        {showSection(SectionsFGT.Description) && (
          <>
            <Timing isTimerPaused={isTimerPaused} topic={topic} />
            <NetworkTab topicName={topic?.name || ""} />
            <InfoBox
              currenTopicId={topic?._id || ""}
              trueOrFalseVotes={trueOrFalseVotes}
            />
          </>
        )}

        {showSection(SectionsFGT.Sponsors) && <SponsorsFGT />}
        {showSection(SectionsFGT.NewsFeed) && <NewsFeed />}
      </Styled.Chyron>
    </Styled.ChyronWrapper>
  );
};

export default Chyron;
