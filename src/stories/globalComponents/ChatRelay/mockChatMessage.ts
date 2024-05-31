import mockSocket from "../../../../.storybook/__mocks__/mockSocketIoClient";
import { messages, usernames } from "../__mock__data__/mockData";
const socket = mockSocket();

export const sendMessage = () => {
  const msgToSend = messages[Math.floor(Math.random() * messages.length)];

  socket.triggerEvent("gtkChatRelay", {
    action: "new-chat-message",
    _id: new Date().getTime().toString(),
    uid: "storybook",
    tid: "storybook",
    broadcasterName: "icon33",
    name: usernames[Math.floor(Math.random() * usernames.length)],
    msg: msgToSend,
    msgEmotes: msgToSend,
    url: "",
    fontColor: "green"
  });
};

export const clearChat = () => {
  socket.triggerEvent("gtkChatRelay", {
    uid: "storybook",
    tid: "storybook",
    action: "clear-chat-messages"
  });
};

export const removeLastMessage = () => {
  socket.triggerEvent("gtkChatRelay", {
    uid: "storybook",
    tid: "storybook",
    action: "remove-last-message"
  });
};
