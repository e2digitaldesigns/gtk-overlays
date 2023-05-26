import React from "react";
import TimeClock from "./TimeClock/TimeClock";
import TimerCount from "./TimeCount/TimeCount";
import * as Styled from "./Topic.styles";
import { IntTopic, TopicStates } from "./types";

import { setTopicLiState } from "./Utils/setTopicLiState";
import socketServices from "../../services/socketServices";
import { TopicActions } from "../../types";
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

  setTopicDescription?: (string: string) => void;
  setTopicVideoId?: (string: string) => void;
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

  setTopicDescription
}) => {
  const containerRef = React.useRef<any>();
  const [activeTopicIndex, setActiveTopicIndex] = React.useState<number>(0);
  const [activeParentName, setActiveParentName] = React.useState<string>("");
  const [isTimerPaused, setIsTimerPaused] = React.useState<boolean>(false);
  const [ulTop, setUlTop] = React.useState<number>(0);
  const [currentTopicState, setCurrentTopicState] = React.useState<IntTopic>();
  const [counter, setCounter] = React.useState<number>(0);

  const queryParams = new URLSearchParams(window.location.search);

  React.useEffect(() => {
    let stillHere = true;

    socketServices.subscribeOverlayActions(
      (err: unknown, data: { action: string; uid: string; tid?: string }) => {
        if (data?.uid !== queryParams.get("uid")) return;
        if (data?.tid && data.tid !== queryParams.get("tid")) return;

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
    setTopicDescription && setTopicDescription(currentTopic?.desc || "");

    const parentId = currentTopic?.parentId;
    const parentName = data.find(topic => topic._id === parentId)?.name;
    setActiveParentName(parentName || "");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTopicIndex]);

  React.useEffect(() => {
    if (data.length <= viewableTopicCount) return;

    const maxUlTop =
      (data.length - viewableTopicCount) * adjustedSizes.topicLiHeight;
    const newUlTopAbs = counter * adjustedSizes.topicLiHeight;
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
                timer={currentTopicState.timer}
                paused={isTimerPaused}
              />
            ) : (
              <TimeClock />
            )}
          </Styled.ClockDiv>
        )}

        <Styled.TopicListItemParent
          compHeight={adjustedSizes.topicLiHeight}
          gradient={gradient}
          listItemState={TopicStates.Active}
          sx={sxTopicLi}
          isViewable={
            !!currentTopicState?.isChild && !!currentTopicState?.parentId
          }
          bgColors={{
            active: bgColorActive,
            normal: bgColorNormal,
            clicked: bgColorClicked
          }}
        >
          <div>{activeParentName}</div>
        </Styled.TopicListItemParent>

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
                listItemState={setTopicLiState(activeTopicIndex, index)}
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
                    {setTopicLiState(activeTopicIndex, index)}
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
