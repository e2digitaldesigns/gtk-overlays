import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Storybook Assets/Button",
  component: Button,
  decorators: [
    Story => (
      <>
        <Story />
      </>
    )
  ],
  tags: ["autodocs"]
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Click Me",
    rounded: true
  }
};
