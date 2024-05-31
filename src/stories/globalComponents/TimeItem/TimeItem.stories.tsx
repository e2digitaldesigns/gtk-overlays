import type { Meta, StoryObj } from "@storybook/react";
import { TimeItem as Component } from "../../../globalComponents";

const meta = {
  title: "Global Components/Time Item",
  component: Component,
  tags: ["autodocs"]
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    hour: 0,
    zone: "UTC"
  }
};
