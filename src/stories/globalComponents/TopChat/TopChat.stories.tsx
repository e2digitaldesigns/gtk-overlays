import type { Meta, StoryObj } from "@storybook/react";
import { TopChatRank as Component } from "../../../globalComponents";
import { createMock } from "storybook-addon-module-mock";

import axios from "axios";
import chatData from "./chatData.json";

const meta = {
  title: "Global Components/Chat Ranks",
  component: Component,
  decorators: [
    Story => (
      <div
        style={{
          width: "500px",
          height: "350px",
          position: "relative"
        }}
      >
        <Story />
      </div>
    )
  ],
  parameters: {
    moduleMock: {
      mock: () => {
        const axiosMock = createMock(axios, "get");
        axiosMock.mockReturnValue(Promise.resolve(chatData));
        return [axiosMock];
      }
    }
  },
  tags: ["autodocs"],
  args: {
    count: 5
  }
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {}
};
