import type { Meta, StoryObj } from "@storybook/react";
import { TopicVotingBlock as Component } from "../../../globalComponents";

const meta = {
  title: "Global Components/Topic Voting Block",
  component: Component,
  parameters: {
    layout: "centered"
  },
  decorators: [
    Story => (
      <div
        style={{
          position: "relative",
          width: "640px",
          height: "100px",
          overflow: "hidden",
          backgroundColor: "rgba(0, 0, 0, 0.5)"
        }}
      >
        <Story />
      </div>
    )
  ],
  tags: ["autodocs"]
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    accentColor: "#31aafd",
    bgColor: "rgba(0, 0, 0, 0.98)"
  }
};
