import React from "react";
import TimeClock from "./TimeClock/TimeClock";
import TimerCount from "./TimeCount/TimeCount";
import * as Styled from "./Topic.styles";

import { setTopicLiState } from "./Utils/setTopicLiState";
import socketServices from "../../services/socketServices";
import {
  IntTopic,
  RequestType,
  SocketServicesData,
  TopicActions
} from "../../types";
import TopicImage from "./Utils/imageParser";

interface IntTopicsProps {
  data: IntTopic[];

  height?: number;
  width?: number;
  viewableTopicCount?: number;
  showTimer?: boolean;

  bgColorActive?: string;
  bgColorNormal?: string;
  bgColorClicked?: string;
  bgColorClock?: string;

  transitionSpeed?: number;
  gradient?: "none" | "left" | "right";

  sxContainer?: object;
  imageSx?: object;
  sxTopicUl?: object;
  sxTopicLi?: object;
  sxClockDiv?: object;

  imageShow?: boolean;
  imageHeight?: number;
  imageDefault?: string;
  imageBaseUrl?: string;

  isDemoMode?: boolean;

  setTopicState?: React.Dispatch<React.SetStateAction<IntTopic | undefined>>;
  topicNext?: () => void;
  topicPrev?: () => void;
}

const GTK_TopicComponent: React.FC<IntTopicsProps> = ({
  data,
  isDemoMode = false,

  height,
  width,
  viewableTopicCount = 7,
  showTimer = true,

  bgColorActive,
  bgColorNormal,
  bgColorClicked,
  bgColorClock = "gray",

  transitionSpeed = 0.5,
  gradient = "none",

  sxContainer = {},
  imageSx = {},
  sxTopicUl = {},
  sxTopicLi = {},
  sxClockDiv = {},

  imageShow = true,
  imageHeight,
  imageDefault,
  imageBaseUrl,

  setTopicState
}) => {
  const containerRef = React.useRef<any>();
  const [activeTopicIndex, setActiveTopicIndex] = React.useState<number>(0);
  const [activeParentTopic, setActiveParentTopic] = React.useState<IntTopic>();
  const [isTimerPaused, setIsTimerPaused] = React.useState<boolean>(false);
  const [ulTop, setUlTop] = React.useState<number>(0);
  const [currentTopicState, setCurrentTopicState] = React.useState<IntTopic>();
  const [counter, setCounter] = React.useState<number>(0);

  const queryParams = new URLSearchParams(window.location.search);

  React.useEffect(() => {
    let stillHere = true;

    socketServices.subscribeOverlayActions(
      (err: unknown, data: SocketServicesData) => {
        if (data?.uid !== queryParams.get(RequestType.UserId)) return;
        if (data?.tid && data.tid !== queryParams.get(RequestType.Template))
          return;

        switch (data.action as TopicActions) {
          case TopicActions.TopicPrevious:
            stillHere && handlePrevTopic();
            break;

          case TopicActions.TopicNext:
            stillHere && handleNextTopic();
            break;

          case TopicActions.TimerResume:
            stillHere && setIsTimerPaused(false);
            break;

          case TopicActions.TimerPause:
            stillHere && setIsTimerPaused(true);
            break;

          default:
            break;
        }
      }
    );

    return () => {
      stillHere = false;
      socketServices.unSubscribeOverlayActions();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTopicIndex]);

  const sizingParser = (topicCount: number) => {
    const theHeight = height
      ? height
      : containerRef?.current?.parentNode?.style?.height;
    const theWidth = width
      ? width
      : containerRef?.current.parentNode.style.width;

    const theImageHeight = imageShow ? (imageHeight ? imageHeight : 0) : 0;
    const theLiCount = showTimer ? topicCount + 1 : topicCount;
    const topicUlHeight = parseInt(theHeight) - theImageHeight;
    const topicLiHeight = topicUlHeight / theLiCount;

    return {
      theHeight,
      theWidth,
      theImageHeight,
      topicUlHeight,
      topicLiHeight
    };
  };

  const adjustedSizes = sizingParser(viewableTopicCount);

  const handlePrevTopic = () => {
    if (!activeTopicIndex) return;
    setActiveTopicIndex(prev => prev - 1);
  };

  const handleNextTopic = () => {
    if (activeTopicIndex >= data.length - 1) {
      return;
    }
    setActiveTopicIndex(prev => prev + 1);
  };

  React.useEffect(() => {
    setCounter(activeTopicIndex);

    const currentTopic = data[activeTopicIndex];
    setCurrentTopicState(currentTopic);
    setTopicState && setTopicState(currentTopic);

    const parentId = currentTopic?.parentId;
    setActiveParentTopic(data.find(topic => topic._id === parentId));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTopicIndex]);

  React.useEffect(() => {
    const topicCount = data.length;
    if (topicCount <= viewableTopicCount) return;

    let thisCount = counter;
    if (activeParentTopic) {
      thisCount = data.findIndex(topic => topic._id === activeParentTopic._id);
    }

    const maxUlTop =
      (topicCount - viewableTopicCount) * adjustedSizes.topicLiHeight;
    const newUlTopAbs = thisCount * adjustedSizes.topicLiHeight;
    const newUlTop = 0 - newUlTopAbs;

    if (maxUlTop >= newUlTopAbs) {
      setUlTop(newUlTop);
    } else {
      setUlTop(-maxUlTop);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  return (
    <>
      <Styled.Container
        compHeight={adjustedSizes.theHeight}
        compWidth={adjustedSizes.theWidth}
        sx={sxContainer}
        ref={containerRef}
      >
        {imageShow && (
          <Styled.TopicImageWrapper
            compHeight={adjustedSizes.theImageHeight}
            sx={imageSx}
          >
            <TopicImage
              imageShow={imageShow}
              imageBaseUrl={imageBaseUrl}
              imageDefault={imageDefault}
              currentTopicState={currentTopicState}
            />
          </Styled.TopicImageWrapper>
        )}

        {showTimer && (
          <Styled.ClockDiv
            bgColor={bgColorClock}
            compHeight={adjustedSizes.topicLiHeight}
            sx={sxClockDiv}
          >
            {isDemoMode && (
              <div>
                <span onClick={handlePrevTopic}>Prev</span> -{" "}
                <span onClick={handleNextTopic}>Next</span> -
              </div>
            )}
            {currentTopicState?.timer ? (
              <TimerCount
                activeTopicIndex={activeTopicIndex}
                paused={isTimerPaused}
                timer={currentTopicState.timer}
              />
            ) : (
              <TimeClock />
            )}
          </Styled.ClockDiv>
        )}

        <Styled.TopicUlWrapper compHeight={adjustedSizes.topicUlHeight}>
          <Styled.TopicUl
            compHeight={adjustedSizes.topicUlHeight}
            data-testid="topic-ul"
            sx={sxTopicUl}
            transitionSpeed={transitionSpeed}
            top={ulTop}
          >
            {data.map((topic: IntTopic, index: number) => (
              <Styled.TopicListItem
                key={topic._id}
                compHeight={adjustedSizes.topicLiHeight}
                data-index={index}
                gradient={gradient}
                listItemState={setTopicLiState(
                  data,
                  activeParentTopic,
                  activeTopicIndex,
                  viewableTopicCount,
                  index
                )}
                sx={sxTopicLi}
                bgColors={{
                  active: bgColorActive,
                  normal: bgColorNormal,
                  clicked: bgColorClicked
                }}
              >
                {isDemoMode ? (
                  <div>
                    {index} - {topic.name}-{" "}
                    {setTopicLiState(
                      data,
                      activeParentTopic,
                      activeTopicIndex,
                      viewableTopicCount,
                      index
                    )}
                  </div>
                ) : (
                  <div>{topic.name}</div>
                )}
              </Styled.TopicListItem>
            ))}
          </Styled.TopicUl>
        </Styled.TopicUlWrapper>
      </Styled.Container>
    </>
  );
};

export default GTK_TopicComponent;
