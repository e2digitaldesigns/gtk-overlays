import { ComponentProps } from "react";
import { ComponentMeta, Story } from "@storybook/react";

import TopicsComponent from "../../globalComponents/TopicChild/TopicChild";

import mockData from "./mockData.json";

interface ArgTypes {
  parentWidth: number;
  parentHeight: number;
  parentBgColor: string;
}

type Args = ComponentProps<typeof TopicsComponent> & ArgTypes;

export default {
  title: "GTK/GTK Topics Child",
  component: TopicsComponent,
  decorators: [Story => <Story />],
  argTypes: {
    parentWidth: {
      control: "number",
      defaultValue: 400,
      table: { category: "Parent Div" }
    },
    parentHeight: {
      control: "number",
      defaultValue: 850,
      table: { category: "Parent Div" }
    },
    parentBgColor: {
      control: "color",
      defaultValue: "#000",
      table: { category: "Parent Div" }
    },

    isDemoMode: {
      control: "boolean",
      defaultValue: true,
      table: { category: "Component" }
    },

    showTimer: {
      control: "boolean",
      defaultValue: true,
      table: { category: "Component" }
    },

    viewableTopicCount: {
      control: "number",
      defaultValue: 7,
      table: { category: "Component" }
    },
    height: {
      control: "number",
      defaultValue: 650,
      table: { category: "Component" }
    },
    width: {
      control: "number",
      defaultValue: 400,
      table: { category: "Component" }
    },

    transitionSpeed: {
      control: "number",
      defaultValue: 1,
      table: { category: "Topic List Item" }
    },

    bgColorActive: {
      control: "color",
      defaultValue: "orange",
      table: { category: "Topic List Item" }
    },
    bgColorNormal: {
      control: "color",
      defaultValue: "purple",
      table: { category: "Topic List Item" }
    },
    bgColorClicked: {
      control: "color",
      defaultValue: "black",
      table: { category: "Topic List Item" }
    },
    bgColorClock: {
      control: "color",
      defaultValue: "gray",
      table: { category: "Topic List Item" }
    },
    gradient: {
      options: ["none", "left", "right"],
      control: { type: "radio" },

      defaultValue: "left",
      table: { category: "Topic List Item" }
    },

    sxTopicLi: {
      defaultValue: {},
      table: { category: "Topic List Item" }
    },

    imageShow: {
      control: "boolean",
      defaultValue: true,
      table: { category: "Component Images" }
    },

    imageBaseUrl: {
      control: "text",
      defaultValue:
        "https://mg-show-assets.s3.us-east-1.amazonaws.com/images/user-images/",
      table: { category: "Component Images" }
    },

    imageHeight: {
      control: "number",
      defaultValue: 175,
      table: { category: "Component Images" }
    },

    imageDefault: {
      control: "text",
      defaultValue: "b1b105cd-5b5c-4cfc-b8aa-80f0c9d47998.jpg",
      table: { category: "Component Images" }
    },

    imageSx: {
      defaultValue: {},
      table: { category: "Component Images" }
    },

    sxContainer: {
      defaultValue: {},
      table: { category: "SX CSS Styling" }
    },

    sxTopicUl: {
      defaultValue: {},
      table: { category: "SX CSS Styling" }
    },

    sxClockDiv: {
      defaultValue: {},
      table: { category: "SX CSS Styling" }
    }
  }
} as ComponentMeta<typeof TopicsComponent>;

const Template: Story<Args> = args => {
  return (
    <div
      style={{
        height: args.parentHeight + "px",
        width: args.parentWidth + "px",
        background: args.parentBgColor
      }}
    >
      <TopicsComponent
        data={mockData}
        height={args.height}
        width={args.width}
        showTimer={args.showTimer}
        transitionSpeed={args.transitionSpeed}
        viewableTopicCount={args.viewableTopicCount}
        bgColorActive={args.bgColorActive}
        bgColorNormal={args.bgColorNormal}
        bgColorClicked={args.bgColorClicked}
        bgColorClock={args.bgColorClock}
        gradient={args.gradient}
        sxContainer={args.sxContainer}
        sxTopicUl={args.sxTopicUl}
        sxTopicLi={args.sxTopicLi}
        imageSx={args.imageSx}
        imageShow={args.imageShow}
        imageHeight={args.imageHeight}
        imageDefault={args.imageDefault}
        imageBaseUrl={args.imageBaseUrl}
        isDemoMode={args.isDemoMode}
        sxClockDiv={args.sxClockDiv}
      />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {};

export const Custom = Template.bind({});
Custom.args = {
  imageSx: {
    "background-color": "purple"
  },

  sxTopicLi: {
    color: "white",
    "font-family": "Bebas Neue",
    "font-size": "32px",
    "text-shadow": "1px 2px #000"
  },

  sxClockDiv: {
    color: "white",
    "font-family": "Bebas Neue",
    "font-size": "32px",
    "text-shadow": "1px 2px #000"
  }
};
