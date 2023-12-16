import React from "react";
import * as Styled from "./UpNext.style";
import _range from "lodash/range";

import { CSSObject } from "styled-components";
import { useSimpleTopic } from "../../hooks";

export interface UpNextProps {
  titleCss?: CSSObject;
  topicCss?: CSSObject;
  numOfTopics?: number;
}

const UpNext: React.FC<UpNextProps> = ({
  titleCss = {},
  topicCss = {},
  numOfTopics = 3
}) => {
  const { topic: activeTopic, topics } = useSimpleTopic();
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const topicUlRef = React.useRef<HTMLUListElement>(null);
  const [ulTop, setUlTop] = React.useState(0);

  const parentHeight: number =
    wrapperRef?.current?.parentElement?.clientHeight || 0;

  const topicLiHeight = (parentHeight - 10) / numOfTopics;

  const emptyArray = _range(0, numOfTopics - 1);

  React.useEffect(() => {
    const newTopp = topicLiHeight * topics.indexOf(activeTopic) * -1;
    setUlTop(newTopp);
  }, [topicLiHeight, activeTopic, topics]);

  const activeTopicIndex = topics.indexOf(activeTopic);

  return (
    <>
      <Styled.UpNextTitleDiv titleCss={titleCss}>Up Next</Styled.UpNextTitleDiv>

      <Styled.TopicWrapper ref={wrapperRef}>
        <Styled.TopicUl ref={topicUlRef} ulTop={ulTop}>
          {topics.map((topic, index) => {
            if (!index) return null;
            return (
              <Styled.TopicLi
                key={topic._id}
                liPosition={index - activeTopicIndex}
                liHeight={topicLiHeight}
                topicCss={topicCss}
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
    </>
  );
};

export default UpNext;
