import type { Meta, StoryObj } from "@storybook/react";
import { TimerItem as Component } from "../../../globalComponents";

const meta = {
  title: "Global Components/Timer Item",
  component: Component,
  tags: ["autodocs"]
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    fontSize: "36px"
  }
};
