import type { Meta, StoryObj } from "@storybook/react";
import { BGTextScroll as Component } from "../../../globalComponents";

const meta = {
  title: "Global Components/BG Scroller",
  component: Component,
  decorators: [
    Story => (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#444",
          border: "2px solid black",
          overflow: "hidden"
        }}
      >
        <Story />
      </div>
    )
  ],
  tags: ["autodocs"],
  args: {},
  argTypes: {}
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "GAMER TOOL KIT",
    xSpacer: 60,
    ySpacer: 4,
    fontSize: "24px"
  }
};
