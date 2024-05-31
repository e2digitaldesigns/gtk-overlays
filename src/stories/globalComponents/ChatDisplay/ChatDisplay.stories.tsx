import type { Meta, StoryObj } from "@storybook/react";
import { ChatDisplay as Component } from "../../../globalComponents";
import mockSocket from "../../../../.storybook/__mocks__/mockSocketIoClient";
import { Button } from "../../storybookAssets/Button/Button";
const socket = mockSocket();

const handleShowChatMessage = () => {
  socket.triggerEvent("gtkChatDisplay", {
    uid: "storybook",
    tid: "storybook",
    action: "showChatMessage",
    message: {
      _id: "1",
      broadcasterName: "icon33",
      name: "Martin",
      msg: "LeftToRight",
      url: "https://static-cdn.jtvnw.net/jtv_user_pictures/b4a00e27-ce2e-48d7-814b-0055aa931898-profile_image-70x70.png",
      fontColor: "white",
      showTime: 10000,
      transition: "LeftToRight"
    }
  });
};

const handleHideChatMessage = () => {
  socket.triggerEvent("gtkChatDisplay", {
    uid: "storybook",
    tid: "storybook",
    action: "hideChatMessage"
  });
};

const meta = {
  title: "Global Components/ChatDisplay",
  component: Component,
  decorators: [
    Story => (
      <>
        <div
          style={{
            width: "800px",
            position: "relative",
            height: "70px",
            background: "#444",
            border: "2px solid black",
            overflow: "hidden"
          }}
        >
          <Story />
        </div>

        <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
          <Button onClick={handleShowChatMessage}>Show Chat Message</Button>
          <Button onClick={handleHideChatMessage}>Hide Chat Message</Button>
        </div>
      </>
    )
  ],
  tags: ["autodocs"],
  args: {
    imageShape: "circle"
  },
  argTypes: {}
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {}
};
