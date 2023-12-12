import React from "react";
import { useParams } from "../../../../../hooks";
import * as Styled from "./Chyron.styles";
import InfoBox from "./InfoBox/InfoBox";

import NetworkTab from "./NetworkTab/NetworkTab";
import NewsFeed from "./NewsFeed/NewsFeed";

import { SectionsCHL, trueFalseVotesParsed } from "../../../../../types";
import { Timing } from "./Timing/Timing";
import { IntTopic } from "../../../../../globalComponents/Topics/types";

interface ChyronProps {
  isTimerPaused: boolean;
  topic: IntTopic | undefined;
  trueOrFalseVotes?: trueFalseVotesParsed;
}

const Chyron: React.FC<ChyronProps> = ({
  isTimerPaused,
  topic,
  trueOrFalseVotes
}) => {
  const { showSection } = useParams();

  if (!showSection(SectionsCHL.Chyron)) return null;

  return (
    <Styled.ChyronWrapper>
      <Styled.Chyron>
        <Timing isTimerPaused={isTimerPaused} topic={topic} />
        <NetworkTab topicName={topic?.name || ""} />

        <InfoBox
          currenTopicId={topic?._id || ""}
          trueOrFalseVotes={trueOrFalseVotes}
        />
        <NewsFeed />
      </Styled.Chyron>
    </Styled.ChyronWrapper>
  );
};

export default Chyron;
