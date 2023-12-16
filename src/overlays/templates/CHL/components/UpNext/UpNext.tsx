import React from "react";
import * as Styled from "./UpNext.style";
import { SectionsCHL } from "../../../../../types";

import { useParams, useSimpleTopic } from "../../../../../hooks";

export interface UpNextCHLProps {
  topicLiHeight?: number;
}

export const UpNextCHL: React.FC<UpNextCHLProps> = ({ topicLiHeight = 37 }) => {
  const { showSection } = useParams();
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const topicUlRef = React.useRef<HTMLUListElement>(null);
  const [ulTop, setUlTop] = React.useState(0);

  const { topic: activeTopic, topics } = useSimpleTopic();

  React.useEffect(() => {
    const newTopp = topicLiHeight * topics.indexOf(activeTopic) * -1;
    setUlTop(newTopp);
  }, [topicLiHeight, activeTopic, topics]);

  const activeTopicIndex = topics.indexOf(activeTopic);

  if (!showSection(SectionsCHL.UpNext)) return null;

  return (
    <>
      <Styled.UpNextWrapper>
        <Styled.UpNextTitleDiv>UP NEXT</Styled.UpNextTitleDiv>

        <Styled.TopicWrapper ref={wrapperRef}>
          <Styled.TopicUl ref={topicUlRef} ulTop={ulTop}>
            {topics.map((topic, index) => {
              if (!index) return null;
              return (
                <Styled.TopicLi
                  key={topic._id}
                  liPosition={index - activeTopicIndex}
                  liHeight={topicLiHeight}
                >
                  {topic.name}
                </Styled.TopicLi>
              );
            })}

            <li></li>
            <li></li>
            <li></li>
          </Styled.TopicUl>
        </Styled.TopicWrapper>
      </Styled.UpNextWrapper>
    </>
  );
};
