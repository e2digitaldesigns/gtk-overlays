import type { Meta, StoryObj } from "@storybook/react";
import { ChatVote as Component } from "../../../globalComponents";
import { Button } from "../../storybookAssets/Button/Button";
import { handleChatVote, handleClearVotes } from "./mockChatVotes";
import { usernames } from "../__mock__data__/mockData";

const meta = {
  title: "Global Components/Chat Vote",
  component: Component,
  parameters: {
    layout: "centered"
  },
  decorators: [
    Story => (
      <>
        <div
          style={{
            position: "relative",
            width: "640px",
            height: "300px",
            overflow: "hidden",
            backgroundColor: "rgba(0, 0, 0, 1)"
          }}
        >
          <Story />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "10px",
            marginTop: "20px"
          }}
        >
          {new Array(6).fill(0).map((_, i) => (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr repeat(2,40px)",
                background: "black"
              }}
            >
              <Button>{usernames[i]}</Button>
              <Button bgColor="#0f2665" onClick={() => handleChatVote(usernames[i], 1)}>
                U
              </Button>
              <Button onClick={() => handleChatVote(usernames[i], -1)}>D</Button>
            </div>
          ))}

          <Button onClick={handleClearVotes}>Clear Votes</Button>
        </div>
      </>
    )
  ],
  tags: ["autodocs"]
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    chatters: 4
  }
};
