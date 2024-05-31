import type { Meta, StoryObj } from "@storybook/react";
import { ChatRelay as Component } from "../../../globalComponents";
import { clearChat, removeLastMessage, sendMessage } from "./mockChatMessage";
import { Button } from "../../storybookAssets/Button/Button";

const meta = {
  title: "Global Components/Chat Relay",
  component: Component,
  decorators: [
    Story => (
      <>
        <div
          style={{
            width: "600px",
            height: "250px",
            position: "relative",
            overflow: "hidden",
            display: "block",
            backgroundColor: "black"
          }}
        >
          <Story />
        </div>

        <div
          style={{
            marginTop: "10px",
            display: "flex",
            gap: "10px"
          }}
        >
          <Button onClick={sendMessage}>Add new message!</Button>

          <Button onClick={clearChat}>Clear messages</Button>

          <Button onClick={removeLastMessage}>Remove last message</Button>
        </div>
      </>
    )
  ],
  tags: ["autodocs"]
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    defaultNameColor: "#31aafd",
    textColor: "#ddd",
    useTwitchNameColor: false
  }
};
