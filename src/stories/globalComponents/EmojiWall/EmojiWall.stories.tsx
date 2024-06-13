import type { Meta, StoryObj } from "@storybook/react";
import { EmojiFloat as Component } from "../../../globalComponents";
import { Button } from "../../storybookAssets/Button/Button";
import { addEmoji } from "./EmojiSender";

const meta = {
  title: "Global Components/Emoji Float",
  component: Component,
  decorators: [
    Story => (
      <>
        <div
          style={{
            width: "800px",
            position: "relative",
            height: "400px",
            background: "#444",
            border: "2px solid black",
            overflow: "hidden"
          }}
        >
          <Story />
        </div>

        <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
          <Button onClick={addEmoji}>Add Emoji</Button>
        </div>
      </>
    )
  ],
  tags: ["autodocs"],
  args: {
    isDemo: true
  },
  argTypes: {}
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {}
};
