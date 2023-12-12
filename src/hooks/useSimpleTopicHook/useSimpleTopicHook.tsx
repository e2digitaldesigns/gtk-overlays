import React from "react";
import { IntTopic } from "../../globalComponents/Topics/types";
import socketServices from "../../services/socketServices";
import { STORAGE_KEY, TopicActions } from "../../types";

const useSimpleTopicHook = (data: IntTopic[], loop: boolean = false) => {
  const queryParams = new URLSearchParams(window.location.search);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [topics, setTopics] = React.useState<IntTopic[]>(data);
  const [currentTopicIndex, setCurrentTopicIndex] = React.useState<number>(0);
  const [isTimerPaused, setIsTimerPaused] = React.useState<boolean>(true);

  React.useEffect(() => {
    const value = topics[currentTopicIndex]._id;

    window.localStorage.setItem(
      STORAGE_KEY.CURRENT_TOPIC,
      JSON.stringify(value)
    );

    const topicVoting = window.localStorage.getItem(
      STORAGE_KEY.TOPIC_VOTING_COUNT
    );

    const topicVotingTrueFalse = window.localStorage.getItem(
      STORAGE_KEY.TOPIC_VOTING_TRUE_FALSE
    );

    if (topicVoting) {
      const voting = JSON.parse(topicVoting);

      if (!voting?.[value]) {
        window.localStorage.setItem(
          STORAGE_KEY.TOPIC_VOTING_COUNT,
          JSON.stringify({ ...voting, [value]: [] })
        );
      }
    } else {
      window.localStorage.setItem(
        STORAGE_KEY.TOPIC_VOTING_COUNT,
        JSON.stringify({ [value]: [] })
      );
    }

    if (topicVotingTrueFalse) {
      const voting = JSON.parse(topicVotingTrueFalse);

      if (!voting?.[value]) {
        window.localStorage.setItem(
          STORAGE_KEY.TOPIC_VOTING_TRUE_FALSE,
          JSON.stringify({ ...voting, [value]: {} })
        );
      }
    } else {
      window.localStorage.setItem(
        STORAGE_KEY.TOPIC_VOTING_TRUE_FALSE,
        JSON.stringify({ [value]: {} })
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTopicIndex]);

  React.useEffect(() => {
    let stillHere = true;

    const prevTopic = () => {
      const index = currentTopicIndex > 0 ? currentTopicIndex - 1 : 0;
      setCurrentTopicIndex(index);
    };

    const nextTopic = () => {
      const atLimit = loop ? 0 : topics.length - 1;
      const index =
        currentTopicIndex >= topics.length - 1
          ? atLimit
          : currentTopicIndex + 1;

      setCurrentTopicIndex(index);
    };

    socketServices.subscribeOverlayActions((err: unknown, data: any) => {
      if (data?.uid !== queryParams.get("uid")) return;
      if (data?.tid && data.tid !== queryParams.get("tid")) return;

      switch (data.action) {
        case TopicActions.TopicPrevious:
          if (stillHere) {
            prevTopic();
            setIsTimerPaused(true);
          }
          break;

        case TopicActions.TopicNext:
          if (stillHere) {
            nextTopic();
            setIsTimerPaused(true);
          }
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
    });

    return () => {
      stillHere = false;
      socketServices.unSubscribeOverlayActions();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTopicIndex]);

  return {
    topic: topics?.[currentTopicIndex],
    index: currentTopicIndex,
    isTimerPaused
  };
};

export default useSimpleTopicHook;
