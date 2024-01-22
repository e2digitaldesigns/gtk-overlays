import React from "react";
import * as Styled from "./Topics.styles";
import { useSimpleTopic } from "../../../../../../hooks";

export const TopicsCNN: React.FC = () => {
  const { topic: activeTopic, topics } = useSimpleTopic();

  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const topicUlRef = React.useRef<HTMLUListElement>(null);
  const [ulTop, setUlTop] = React.useState(0);
  const topicLiHeight = 100;
  const showTopicCount = 6;

  React.useEffect(() => {
    const activeTopicsIndex = topics.indexOf(activeTopic);
    const newTopp = topicLiHeight * activeTopicsIndex * -1;
    if (activeTopicsIndex > topics.length - showTopicCount) return;

    setUlTop(newTopp);
  }, [activeTopic, topics]);

  const activeTopicIndex = topics.indexOf(activeTopic);

  return (
    <Styled.TopicsWrapper>
      <Styled.TopicsInnerWrapper ref={wrapperRef}>
        <Styled.TopicUl ref={topicUlRef} ulTop={ulTop}>
          {topics.map((topic, index) => (
            <Styled.TopicLi
              key={topic._id}
              liPosition={index - activeTopicIndex}
              liHeight={topicLiHeight}
              clicked={index < activeTopicIndex}
              active={index === activeTopicIndex}
            >
              <Styled.TopicLiName active={index === activeTopicIndex}>
                {topic.name}
              </Styled.TopicLiName>

              <Styled.TopicLiLive active={index === activeTopicIndex}>
                Live Now
              </Styled.TopicLiLive>

              <Styled.TopicLiNext isNext={index === activeTopicIndex + 1}>
                Up Next
              </Styled.TopicLiNext>
            </Styled.TopicLi>
          ))}
        </Styled.TopicUl>
      </Styled.TopicsInnerWrapper>
    </Styled.TopicsWrapper>
  );
};
