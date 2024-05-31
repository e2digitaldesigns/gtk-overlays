import mockSocket from "../../../../.storybook/__mocks__/mockSocketIoClient";
const socket = mockSocket();

const emojis = ["🤣", "😁", "🙌", "❤️", "😍", "👌", "💕", "😘", "😒", "👍"];

const selectEmoji = () => {
  return {
    _id: new Date().getTime().toString(),
    date: new Date().getTime(),
    emoji: emojis[Math.floor(Math.random() * emojis.length)]
  };
};

export const addEmoji = () => {
  socket.triggerEvent("gtkOverlayEmojis", {
    uid: "storybook",
    tid: "storybook",

    _id: new Date().getTime().toString(),
    date: new Date().getTime(),
    action: "",
    broadcasterName: "icon33",
    emojis: [selectEmoji()],
    channel: "icon33"
  });
};
