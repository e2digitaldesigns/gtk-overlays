import useTopicsDataStore from "../../dataStores/useTopicsDataStore/useTopicsDataStore";

const useSimpleTopicHook = () => {
  const useTopicsData = useTopicsDataStore(state => state);

  return {
    topic: useTopicsData.currentTopic,
    topicId: useTopicsData.currentTopicId,
    topicIndex: useTopicsData.currentTopicIndex,
    topics: useTopicsData.topics,
    index: useTopicsData.currentTopicIndex,
    isTimerPaused: useTopicsData.isTimerPaused
  };
};

export default useSimpleTopicHook;
