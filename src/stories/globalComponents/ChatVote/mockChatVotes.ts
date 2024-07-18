import mockSocket from "../../../../.storybook/__mocks__/mockSocketIoClient";
const socket = mockSocket();

export const handleChatVote = (username: string, votes: number) => {
  socket.triggerEvent("gtkChatVote", {
    uid: "storybook",
    tid: "storybook",
    action: "vote",
    data: {
      username,
      votes
    }
  });
};

export const handleClearVotes = () => {
  console.log("clearing votes");
  socket.triggerEvent("gtkChatVote", {
    uid: "storybook",
    tid: "storybook",
    action: "clear"
  });
};
