import type { Meta, StoryObj } from "@storybook/react";
import { VideoPlayer as Component } from "../../../globalComponents";
import mockSocket from "../../../../.storybook/__mocks__/mockSocketIoClient";
import { createMock } from "storybook-addon-module-mock";
import { Button } from "../../storybookAssets/Button/Button";
import { topics } from "./../../../../.storybook/topicData";
import {
  VideoAction,
  VideoSize
} from "../../../globalComponents/VideoPlayer/VideoPlayer.types";
import * as hooks from "../../../hooks";

const socket = mockSocket();

const meta = {
  title: "Global Components/Video Player",
  component: Component,

  tags: ["autodocs"],
  argTypes: {
    defaultSize: {
      control: "inline-radio",
      options: ["small", "normal", "fullscreen"]
    }
  },
  args: {
    defaultSize: VideoSize.NORMAL,
    dimensions: {
      top: "77.5px",
      left: "120px",
      width: "720px",
      height: "405px"
    },
    smallScreenDimensions: {
      top: "137.5px",
      left: "242.5px",
      width: "485px",
      height: "275px"
    },
    fullScreenDimensions: {
      top: "5px",
      left: "5px",
      width: "960px",
      height: "540px"
    },
    showVideoOnLoad: true,
    videoShadow: true
  },
  decorators: [
    Story => {
      return (
        <>
          <div
            style={{
              display: "table",
              width: "980px",
              height: "560px",
              background: "#111"
            }}
          >
            <div
              style={{
                margin: "5px",
                width: "970px",
                height: "550px",
                background: "#444",
                position: "relative"
              }}
            >
              <Story />
            </div>
          </div>

          <div
            style={{
              margin: 0,
              width: "980px",
              background: "#111",
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "5px",
              padding: "5px"
            }}
          >
            {Object.keys(VideoAction).map((key, index) => (
              <Button
                key={index}
                onClick={() =>
                  socket.triggerEvent("gtkOverlayVideoPlayer", {
                    uid: "storybook",
                    tid: "storybook",
                    action: VideoAction[key as keyof typeof VideoAction]
                  })
                }
              >
                {key}
              </Button>
            ))}
          </div>
        </>
      );
    }
  ]
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VideoPlayer: Story = {};

export const ImageViewer: Story = {
  parameters: {
    moduleMock: {
      mock: () => {
        const index = 2;
        const useSimpleTopicMock = createMock(hooks, "useSimpleTopic");
        useSimpleTopicMock.mockReturnValue({
          topics,
          topic: topics[index],
          topicId: topics[index]._id,
          topicIndex: index,
          index: index,
          isTimerPaused: false
        });

        return [useSimpleTopicMock];
      }
    }
  }
};
