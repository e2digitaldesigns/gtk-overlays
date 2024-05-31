import mockSocket from "../../../../.storybook/__mocks__/mockSocketIoClient";
import { messages, usernames } from "../__mock__data__/mockData";
const socket = mockSocket();

export const handleShowChatMessage = () => {
  socket.triggerEvent("gtkChatDisplay", {
    uid: "storybook",
    tid: "storybook",
    action: "showChatMessage",
    message: {
      _id: new Date().getTime().toString(),
      broadcasterName: "icon33",
      name: usernames[Math.floor(Math.random() * usernames.length)],
      msg: messages[Math.floor(Math.random() * messages.length)],
      url: "https://placekitten.com/200/300",
      fontColor: "white",
      showTime: 10000,
      transition: "LeftToRight"
    }
  });
};

export const handleHideChatMessage = () => {
  socket.triggerEvent("gtkChatDisplay", {
    uid: "storybook",
    tid: "storybook",
    action: "hideChatMessage"
  });
};
