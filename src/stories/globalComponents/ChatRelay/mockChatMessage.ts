import mockSocket from "../../../../.storybook/__mocks__/mockSocketIoClient";
const socket = mockSocket();

const usernames = [
  "AliceGamer",
  "BobTheBuilder",
  "CharliePlays",
  "DianaStream",
  "EthanLive",
  "FionaQuest",
  "GeorgeGaming",
  "HannahPlayz",
  "IsaacStreamer",
  "JuliaJoy"
];

const messages = [
  "I can't believe she forgot my birthday again.",
  "The meeting has been rescheduled to next Monday.",
  "He finally finished reading that book I recommended.",
  "The weather is supposed to be sunny all week.",
  "She's thinking about adopting a rescue dog.",
  "I love the new restaurant that opened downtown.",
  "They're planning a surprise party for his retirement.",
  "I'm not sure if I can make it to the concert tonight.",
  "He didn't realize how much work it would be.",
  "She's been feeling under the weather lately.",
  "We need to finalize the project by Friday.",
  "He just started his new job and loves it.",
  "The traffic was terrible this morning.",
  "She's going to bake a cake for the celebration.",
  "I'm looking forward to the weekend getaway.",
  "They moved into their new house last weekend.",
  "He missed his flight and had to book another one.",
  "She's been practicing yoga every morning.",
  "I can't find my keys anywhere.",
  "The movie was much better than I expected.",
  "He's planning to run a marathon next month.",
  "She bought a new car and it's beautiful.",
  "The kids are excited about their trip to the zoo.",
  "He accidentally deleted all his photos.",
  "She started a new diet and feels great.",
  "I need to call the plumber about the leak.",
  "They're having a barbecue this Saturday.",
  "He forgot to bring his lunch to work.",
  "She painted her living room a bright yellow.",
  "I'm learning to play the guitar.",
  "He adopted a kitten from the animal shelter.",
  "She's going to visit her grandparents next weekend.",
  "I lost my wallet at the mall.",
  "They're thinking about starting a family.",
  "He got promoted to senior manager.",
  "She volunteered at the local food bank.",
  "I'm planning a surprise dinner for her birthday.",
  "He found a new hobby in gardening.",
  "She completed her first 5K run.",
  "The power went out during the storm last night.",
  "He's studying for his final exams.",
  "She got a new job offer and accepted it.",
  "I can't wait for the holidays to begin.",
  "They went hiking in the mountains over the weekend.",
  "He learned to cook a new recipe."
];

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
