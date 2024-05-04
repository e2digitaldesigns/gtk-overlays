import React from "react";
import * as Styled from "./Topics.styles";
import { useSimpleTopic } from "../../../../../../hooks";
import useVideoPlayerDataStore from "../../../../../../dataStores/useVideoPlayerDataStore/useVideoPlayerDataStore";

export const TopicsNormalCNN: React.FC = () => {
  const { topic: activeTopic, topics } = useSimpleTopic();

  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const topicUlRef = React.useRef<HTMLUListElement>(null);
  const [ulTop, setUlTop] = React.useState(0);
  const topicLiHeight = 100;

  const { isVideoViewable } = useVideoPlayerDataStore(state => state);

  React.useEffect(() => {
    const activeTopicsIndex = topics.indexOf(activeTopic);
    const showTopicCount = 7;
    const newTopp = topicLiHeight * activeTopicsIndex * -1;
    if (activeTopicsIndex > topics.length - showTopicCount) return;
    setUlTop(newTopp);
  }, [activeTopic, topics, activeTopic.video]);

  const activeTopicIndex = topics.indexOf(activeTopic);

  return (
    <Styled.TopicsWrapperNormal showMenu={!isVideoViewable}>
      <Styled.TopicsInnerWrapper ref={wrapperRef}>
        <Styled.TopicUl ref={topicUlRef} ulTop={ulTop}>
          {topics.map((topic, index) => (
            <Styled.TopicLi
              key={topic._id}
              liPosition={index - activeTopicIndex}
              liHeight={topicLiHeight}
              clicked={index < activeTopicIndex}
              active={index === activeTopicIndex}
              hasImage={!!topic.img}
            >
              {topic.img && (
                <Styled.TopicLiImage>
                  <img src={topic.img} alt={topic.name} />
                </Styled.TopicLiImage>
              )}

              <Styled.TopicLiName
                active={index === activeTopicIndex}
                hasImage={!!topic.img}
              >
                {topic.name}
              </Styled.TopicLiName>

              <Styled.TopicLiLive active={index === activeTopicIndex}>
                {topic.video && <span>*</span>} Live Now
              </Styled.TopicLiLive>

              <Styled.TopicLiNext isNext={index === activeTopicIndex + 1}>
                Up Next
              </Styled.TopicLiNext>
            </Styled.TopicLi>
          ))}
        </Styled.TopicUl>
      </Styled.TopicsInnerWrapper>
    </Styled.TopicsWrapperNormal>
  );
};
