import type { Meta, StoryObj } from "@storybook/react";
import { VideoPlayer as Component } from "../../../globalComponents";
import mockSocket from "../../../../.storybook/__mocks__/mockSocketIoClient";
import { Button } from "../../storybookAssets/Button/Button";

import {
  VideoAction,
  VideoSize
} from "../../../globalComponents/VideoPlayer/VideoPlayer.types";

const socket = mockSocket();

const meta = {
  title: "Global Components/Video Player",
  component: Component,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    defaultSize: {
      control: "inline-radio",
      options: ["small", "normal", "fullscreen"]
    }
  },
  decorators: [
    Story => {
      return (
        <>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "330px 500px",
              background: "#000000",
              width: "830px",
              height: "345px"
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "5px",

                position: "relative",
                width: "320px",
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
            <div
              style={{
                position: "relative",
                width: "500px",
                height: "290px"
              }}
            >
              <Story />
            </div>
          </div>
        </>
      );
    }
  ]
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    defaultSize: VideoSize.NORMAL,
    dimensions: {
      top: "10px",
      left: "10px",
      width: "480px",
      height: "270px"
    },
    smallScreenDimensions: {
      top: "34px",
      left: "60px",
      width: "360px",
      height: "203px"
    },
    fullScreenDimensions: {
      top: "0px",
      left: "0px",
      width: "500px",
      height: "290px"
    },
    allowFullScreen: true,
    allowSmallScreen: true,
    showVideoOnLoad: true,
    videoShadow: true
  }
};
