import React from "react";
import { useParams } from "../../../../../hooks";
import { Sections } from "../../../../../hooks/useParamsHook/types";
import * as Styled from "./Chyron.styles";
import InfoBox from "./InfoBox/InfoBox";
import LogoBox from "./LogoBox/LogoBox";
import NetworkTab from "./NetworkTab/NetworkTab";
import NewsFeed from "./NewsFeed/NewsFeed";

import socketServices from "../../../../../services/socketServices";
import { useDataContext } from "../../../../../context";
import { TopicActions } from "../../../../../types";

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

  if (!showSection(Sections.BnnChyron)) return null;

  return (
    <Styled.ChyronWrapper>
      <Styled.Chyron>
        <NetworkTab />
        <LogoBox image={topics?.[currentTopic]?.img} />
        <InfoBox topic={topics?.[currentTopic]} />
        <NewsFeed />
      </Styled.Chyron>
    </Styled.ChyronWrapper>
  );
};

export default Chyron;
