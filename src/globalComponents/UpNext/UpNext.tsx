import React from "react";
import * as Styled from "./UpNext.style";
import _range from "lodash/range";

import { useSimpleTopic } from "../../hooks";

export interface UpNextProps {
  fontColor?: string;
  numOfTopics?: number;
  borderColor?: string;
}

const UpNext: React.FC<UpNextProps> = ({
  fontColor = "white",
  numOfTopics = 3,
  borderColor = "#31aafd"
}) => {
  const { topic: activeTopic, topics } = useSimpleTopic();
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const topicUlRef = React.useRef<HTMLUListElement>(null);
  const [ulTop, setUlTop] = React.useState(0);

  const [topicLiHeight, setTopicLiHeight] = React.useState(0);

  React.useLayoutEffect(() => {
    const parentHeight = wrapperRef?.current?.parentElement?.clientHeight || 0;
    const topicHeight = (parentHeight - 10) / numOfTopics;

    setTopicLiHeight(topicHeight);
  }, [numOfTopics]);

  const emptyArray = _range(0, numOfTopics - 1);

  React.useLayoutEffect(() => {
    const index = topics.findIndex(topic => topic._id === activeTopic._id);
    const newTopp = topicLiHeight * index * -1;
    setUlTop(newTopp);
  }, [topicLiHeight, activeTopic, topics]);

  const activeTopicIndex = topics.findIndex(
    topic => topic._id === activeTopic._id
  );

  return (
    <Styled.UpNextWrapper borderColor={borderColor} fontColor={fontColor}>
      <Styled.UpNextTitleDiv borderColor={borderColor}>
        Up Next
      </Styled.UpNextTitleDiv>

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
          {emptyArray.map((_, index) => (
            <li key={index}></li>
          ))}
        </Styled.TopicUl>
      </Styled.TopicWrapper>
    </Styled.UpNextWrapper>
  );
};

export default UpNext;
