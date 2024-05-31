import type { Meta, StoryObj } from "@storybook/react";
import { Scroller as Component } from "../../../globalComponents";

const meta = {
  title: "Global Components/Scroller",
  component: Component,
  decorators: [
    Story => (
      <div
        style={{
          width: "800px",
          height: "50px",
          background: "#444",
          border: "2px solid black"
        }}
      >
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  args: {
    data: [
      { title: "Title1", text: "Text1" },
      { title: "The Didler", text: "Take that, take that..." },
      { title: "Title3", text: "Text3" },
      { title: "Title4", text: "Text4" },
      { title: "Title5", text: "Text5" }
    ],
    showTitle: true,
    timer: 5
  },
  argTypes: {}
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    transition: "scroll",
    transitionTime: "2s",
    textStyle: {
      backgroundColor: "purple",
      color: "white",
      padding: "0 10px"
    },
    titleStyle: {
      backgroundColor: "black",
      color: "white",
      padding: "0 10px"
    }
  }
};
