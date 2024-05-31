import { createMock } from "storybook-addon-module-mock";
import * as hooks from "../../../src/hooks";
import topicData from "./topicData.json";
import topicVotingData from "./topicVotingData.json";

export const useSimpleTopicMock = createMock(hooks, "useSimpleTopic");
useSimpleTopicMock.mockReturnValue(topicData);

export const useVotingMock = createMock(hooks, "useVoting");
useVotingMock.mockReturnValue(topicVotingData);
