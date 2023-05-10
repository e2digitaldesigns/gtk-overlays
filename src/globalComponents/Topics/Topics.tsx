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
  const listItemRef = React.useRef<any>([]);

  const [activeChildIndex, setActiveChildIndex] = React.useState<number>(-1);
  const [activeTopicIndex, setActiveTopicIndex] = React.useState<number>(0);
  const [activeParentId, setActiveParentId] = React.useState<string>("");
  const [isTimerPaused, setIsTimerPaused] = React.useState<boolean>(false);
  const [ulTop, setUlTop] = React.useState<number>(0);
  const [liTransitionSpeed, setLiTransitionSpeed] =
    React.useState<number>(transitionSpeed);

  const [currentTopicState, setCurrentTopicState] = React.useState<IntTopic>();
  const [counter, setCounter] = React.useState<number>(0);

  const queryParams = new URLSearchParams(window.location.search);

  React.useEffect(() => {
    let stillHere = true;

    socketServices.subscribeOverlayActions(
      (err: unknown, data: { action: string; uid: string; tid?: string }) => {
        console.log(96, data);

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
  }, [activeTopicIndex, activeChildIndex]);

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

  const handleNextTopic = () => {
    let tempActiveTopicIndex = activeTopicIndex;
    let tempActiveChildIndex = activeChildIndex;

    if (tempActiveTopicIndex === data.length - 1) return;

    const currentTopic = data[activeTopicIndex];

    if (!currentTopic.isParent) {
      tempActiveTopicIndex = activeTopicIndex + 1;
      tempActiveChildIndex = -1;
    }

    if (currentTopic.isParent) {
      const childCount = data.filter(
        (f: IntTopic) => f.isChild === true && f.parentId === currentTopic._id
      ).length;

      if (childCount === 0) {
        tempActiveTopicIndex = activeTopicIndex + 1;
        tempActiveChildIndex = -1;
      } else if (activeChildIndex === -1) {
        tempActiveChildIndex = 0;
      } else if (activeChildIndex === childCount - 1) {
        tempActiveTopicIndex = activeTopicIndex + childCount + 1;
        tempActiveChildIndex = -1;
      } else if (activeChildIndex < childCount - 1) {
        tempActiveChildIndex = tempActiveChildIndex + 1;
      }
    }

    setActiveTopicIndex(tempActiveTopicIndex);
    setActiveChildIndex(tempActiveChildIndex);
  };

  const handlePrevTopic = () => {
    let tempActiveTopicIndex = activeTopicIndex;
    let tempActiveChildIndex = activeChildIndex;

    if (activeTopicIndex === 0 && tempActiveChildIndex === -1) return;

    const currentTopic = data[activeTopicIndex];
    const prevTopic = data[activeTopicIndex - 1];

    if (currentTopic.isParent === true) {
      const childCount = data.filter(
        (f: IntTopic) => f.isChild === true && f.parentId === currentTopic._id
      ).length;

      switch (tempActiveChildIndex) {
        case -1:
          tempActiveTopicIndex = tempActiveTopicIndex - 1;
          break;

        case 0:
          tempActiveChildIndex = -1;
          break;

        case childCount - 1:
          tempActiveChildIndex = tempActiveChildIndex - 1;
          break;

        default:
          tempActiveChildIndex = tempActiveChildIndex - 1;
          break;
      }
    } else if (prevTopic.isChild === true) {
      tempActiveTopicIndex = data.findIndex(
        (f: IntTopic) => f._id === prevTopic.parentId
      );

      tempActiveChildIndex =
        data.filter((f: IntTopic) => f.parentId === prevTopic.parentId).length -
        1;
    } else {
      tempActiveTopicIndex = tempActiveTopicIndex - 1;
      tempActiveChildIndex = -1;
    }

    setActiveTopicIndex(tempActiveTopicIndex);
    setActiveChildIndex(tempActiveChildIndex);
  };

  React.useEffect(() => {
    setCounter(activeTopicIndex);

    setActiveParentId(
      data[activeTopicIndex]?.isParent ? data[activeTopicIndex]._id : ""
    );

    const currentTopic = data[activeTopicIndex + activeChildIndex + 1];

    setCurrentTopicState(currentTopic);

    if (setTopicDescription) {
      setTopicDescription(currentTopic?.desc || "");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTopicIndex, activeChildIndex]);

  React.useEffect(() => {
    if (data.length <= viewableTopicCount) return;

    const maxUlTop =
      (data.length - viewableTopicCount) * adjustedSizes.topicLiHeight;
    const newUlTopAbs = counter * adjustedSizes.topicLiHeight;
    const newUlTop = 0 - newUlTopAbs;

    const diff = ulTop - newUlTop;
    const speed = Math.abs(diff / adjustedSizes.topicLiHeight) || 1;

    setLiTransitionSpeed(speed * transitionSpeed);

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

        <Styled.TopicUlWrapper
          compHeight={adjustedSizes.topicUlHeight}
          data-testid="topic-ul-wrapper"
        >
          <Styled.TopicUl
            compHeight={adjustedSizes.topicUlHeight}
            data-testid="topic-ul"
            sx={sxTopicUl}
            transitionSpeed={liTransitionSpeed}
            top={ulTop}
          >
            {data.map((topic: IntTopic, index: number) => {
              const listItemState = setTopicLiState(
                activeChildIndex,
                activeParentId,
                activeTopicIndex,
                data,
                index,
                viewableTopicCount
              );

              return (
                <Styled.TopicListItem
                  key={topic._id}
                  compHeight={adjustedSizes.topicLiHeight}
                  data-hidden={listItemState === TopicStates.Hidden ? 1 : 0}
                  data-index={index}
                  gradient={gradient}
                  listItemState={listItemState}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  ref={element => (listItemRef.current[index] = element)}
                  sx={sxTopicLi}
                  bgColors={{
                    active: bgColorActive,
                    normal: bgColorNormal,
                    clicked: bgColorClicked
                  }}
                >
                  {isDemoMode ? (
                    <div>
                      {index} - {topic.name}- {listItemState}
                    </div>
                  ) : (
                    <div>{topic.name}</div>
                  )}
                </Styled.TopicListItem>
              );
            })}
          </Styled.TopicUl>
        </Styled.TopicUlWrapper>
      </Styled.Container>
    </>
  );
};

export default GTK_TopicComponent;
