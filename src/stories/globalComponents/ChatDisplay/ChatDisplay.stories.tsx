import type { Meta, StoryObj } from "@storybook/react";
import { ChatDisplay as Component } from "../../../globalComponents";
import { Button } from "../../storybookAssets/Button/Button";
import {
  handleHideChatMessage,
  handleShowChatMessage
} from "./mockChatMessage";

const meta = {
  title: "Global Components/Chat Display",
  component: Component,
  decorators: [
    Story => (
      <>
        <div
          style={{
            width: "800px",
            position: "relative",
            height: "70px",
            background: "#444",
            border: "2px solid black",
            overflow: "hidden"
          }}
        >
          <Story />
        </div>

        <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
          <Button onClick={handleShowChatMessage}>Show Chat Message</Button>
          <Button onClick={handleHideChatMessage}>Hide Chat Message</Button>
        </div>
      </>
    )
  ],
  tags: ["autodocs"],
  args: {
    imageShape: "circle"
  },
  argTypes: {}
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {}
};
