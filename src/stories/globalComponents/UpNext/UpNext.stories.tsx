import type { Meta, StoryObj } from "@storybook/react";
import { UpNext as Component } from "../../../globalComponents";

const meta = {
  title: "Global Components/Up Next",
  component: Component,
  decorators: [
    Story => (
      <div
        style={{
          width: "800px",
          height: "125px",
          position: "relative",
          overflow: "hidden",
          display: "block"
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
    borderColor: "#31aafd"
  }
};
