import React from "react";
import * as Styled from "./topics.style";
import { SectionsXBX } from "../../../../../types";

import { useParams, useTopicImage } from "../../../../../hooks";
import { IntTopic } from "../../../../../globalComponents/Topics/types";

export interface UpNextCHLProps {
  activeTopic: IntTopic;
  topics: IntTopic[];
}

export const TopicsXBX: React.FC<UpNextCHLProps> = ({
  activeTopic,
  topics
}) => {
  const { showSection } = useParams();
  const { topicImage } = useTopicImage();
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const topicUlRef = React.useRef<HTMLUListElement>(null);
  const [ulTop, setUlTop] = React.useState(0);
  const topicLiHeight = 235;
  const showTopicCount = 3;

  React.useEffect(() => {
    const activeTopicsIndex = topics.indexOf(activeTopic);
    const newTopp = topicLiHeight * activeTopicsIndex * -1;
    if (activeTopicsIndex > topics.length - showTopicCount) return;

    setUlTop(newTopp);
  }, [activeTopic, topics]);

  const activeTopicIndex = topics.indexOf(activeTopic);

  if (!showSection(SectionsXBX.Topics)) return null;

  return (
    <>
      <Styled.UpNextWrapper>
        <Styled.TopicWrapper ref={wrapperRef}>
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

                <Styled.TopicLiImage active={index === activeTopicIndex}>
                  {topicImage(topic.img)}
                </Styled.TopicLiImage>
              </Styled.TopicLi>
            ))}
          </Styled.TopicUl>
        </Styled.TopicWrapper>
      </Styled.UpNextWrapper>
    </>
  );
};
