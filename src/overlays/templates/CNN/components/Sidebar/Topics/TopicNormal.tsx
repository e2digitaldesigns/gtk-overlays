import React from "react";
import * as Styled from "./Topics.styles";
import { useSimpleTopic } from "../../../../../../hooks";
import useVideoPlayerDataStore from "../../../../../../dataStores/useVideoPlayerDataStore/useVideoPlayerDataStore";
import { BsYoutube } from "react-icons/bs";

export const TopicsNormalCNN: React.FC = () => {
  const { topic: activeTopic, topics } = useSimpleTopic();
  const [showTopicCount, setShowTopicCount] = React.useState(7);

  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const topicUlRef = React.useRef<HTMLUListElement>(null);
  const [ulTop, setUlTop] = React.useState(0);
  const topicLiHeight = 100;

  const { isVideoViewable } = useVideoPlayerDataStore(state => state);
  const showVideo = isVideoViewable && !!activeTopic?.content?.file;

  React.useEffect(() => {
    setShowTopicCount(isVideoViewable ? 4 : 7);
  }, [isVideoViewable]);

  React.useEffect(() => {
    const activeTopicsIndex = topics.indexOf(activeTopic);
    let newTopp = topicLiHeight * activeTopicsIndex * -1;

    if (activeTopicsIndex > topics.length - showTopicCount) {
      newTopp = topicLiHeight * (topics.length - showTopicCount) * -1;
    }

    setUlTop(newTopp);
  }, [activeTopic, topics, activeTopic.video, showTopicCount]);

  const activeTopicIndex = topics.indexOf(activeTopic);

  return (
    <Styled.TopicsWrapperNormal showVideo={showVideo}>
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
                {topic.content.file && <BsYoutube size={16} color="white" />}
                <span>Live Now</span>
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
