import React from "react";
import type { Preview } from "@storybook/react";
import { createMock } from "storybook-addon-module-mock";
import "../src/scss/styles.scss";
import * as hooks from "../src/hooks";
import { topics } from "./topicData";
import topicVotingData from "./topicVotingData.json";

const preview: Preview = {
  decorators: [
    Story => {
      return <Story />;
    }
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    moduleMock: {
      mock: () => {
        const useSimpleTopicMock = createMock(hooks, "useSimpleTopic");
        useSimpleTopicMock.mockReturnValue({
          topics,
          topic: topics[0],
          topicId: topics[0]._id,
          topicIndex: 0,
          index: 0,
          isTimerPaused: false
        });

        const useVotingMock = createMock(hooks, "useVoting");
        useVotingMock.mockReturnValue(topicVotingData);

        return [useSimpleTopicMock, useVotingMock];
      }
    },
    query: {
      tid: "storybook",
      uid: "storybook"
    }
  }
};

export default preview;
