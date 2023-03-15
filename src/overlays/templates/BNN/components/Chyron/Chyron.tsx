import React from "react";
import { useParams } from "../../../../../hooks";
import * as Styled from "./Chyron.styles";
import InfoBox from "./InfoBox/InfoBox";
import LogoBox from "./LogoBox/LogoBox";
import NetworkTab from "./NetworkTab/NetworkTab";
import NewsFeed from "./NewsFeed/NewsFeed";

import socketServices from "../../../../../services/socketServices";
import { useDataContext } from "../../../../../context";
import { SectionsBNN, TopicActions } from "../../../../../types";

const Chyron: React.FC = () => {
  const { showSection } = useParams();
  const { topics: data } = useDataContext();
  const [topics, setTopics] = React.useState(data);
  const [currentTopic, setCurrentTopic] = React.useState(0);

  const prevTopic = () => {
    const index = currentTopic > 0 ? currentTopic - 1 : 0;
    setCurrentTopic(index);
  };

  const nextTopic = () => {
    const index =
      currentTopic >= topics.length - 1 ? topics.length - 1 : currentTopic + 1;
    setCurrentTopic(index);
  };

  React.useEffect(() => {
    let stillHere = true;
    socketServices.subscribeOverlayActions((err: any, data: any) => {
      switch (data.action) {
        case TopicActions.TopicPrevious:
          stillHere && prevTopic();
          break;

        case TopicActions.TopicNext:
          stillHere && nextTopic();
          break;

        default:
          break;
      }
    });

    return () => {
      stillHere = false;
      socketServices.unSubscribeOverlayActions();
    };
  }, [nextTopic, prevTopic]);

  if (!showSection(SectionsBNN.Chyron)) return null;

  return (
    <Styled.ChyronWrapper>
      <Styled.Chyron>
        <NetworkTab />
        <LogoBox />
        <InfoBox />
        <NewsFeed />
      </Styled.Chyron>
    </Styled.ChyronWrapper>
  );
};

export default Chyron;
