import React, { ComponentProps } from "react";
import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import Scroller from "../../globalComponents/Scroller/Scroller";

const mockData = [
  { title: "Title 1", text: "article 001" },
  { title: "Title 2", text: "article 002" },
  { title: "Title 3", text: "article 003" },
  { title: "Title 4", text: "article 004" }
];

interface ArgTypes {
  parentWidth: string;
  parentHeight: number;
  parentBgColor: string;
  textColor: string;
  textBgColor: string;
  textPadding: string;
  titleColor: string;
  titleBgColor: string;
  titlePadding: string;
}

type Args = ComponentProps<typeof Scroller> & ArgTypes;

export default {
  title: "GTK/Scroller",
  component: Scroller,
  decorators: [Story => <Story />],
  argTypes: {
    parentWidth: {
      control: "text",
      defaultValue: "100%",
      table: { category: "Parent Div" }
    },

    parentHeight: {
      control: "text",
      defaultValue: "40px",
      table: { category: "Parent Div" }
    },

    parentBgColor: {
      control: "color",
      defaultValue: "black",
      table: { category: "Parent Div" }
    },

    fontSize: { control: "number" },
    timer: { control: "number" },
    titleStyle: { control: "text" },

    titleColor: {
      control: "color",
      defaultValue: "white",
      table: { category: "Title Style" }
    },

    titleBgColor: {
      control: "color",
      defaultValue: "#555",
      table: { category: "Title Style" }
    },

    titlePadding: {
      control: "text",
      defaultValue: "2px",
      table: { category: "Title Style" }
    },

    textColor: {
      control: "color",
      defaultValue: "white",
      table: { category: "Text Style" }
    },

    textBgColor: {
      control: "color",
      defaultValue: "#333",
      table: { category: "Text Style" }
    },

    textPadding: {
      control: "text",
      defaultValue: "2px",
      table: { category: "Text Style" }
    }
  }
} as ComponentMeta<typeof Scroller>;

const Template: Story<Args> = args => {
  const textStyle = {
    color: args.textColor,
    backgroundColor: args.textBgColor,
    padding: args.textPadding
  };

  const titleStyle = {
    color: args.titleColor,
    backgroundColor: args.titleBgColor,
    padding: args.titlePadding
  };

  return (
    <div
      style={{
        height: args.parentHeight,
        width: args.parentWidth,
        background: args.parentBgColor
      }}
    >
      <Scroller
        data={mockData}
        fontSize={args.fontSize}
        textStyle={textStyle}
        titleStyle={titleStyle}
        timer={args.timer}
        sx={args.sx}
      />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  fontSize: 14,
  timer: 3
};

export const CustomCss = Template.bind({});
CustomCss.args = {
  fontSize: 12,
  timer: 3,
  sx: {
    container: { background: "black" },
    text: { "font-size": "32px", background: "orange" },
    title: { "font-size": "32px", background: "purple" }
  }
};
