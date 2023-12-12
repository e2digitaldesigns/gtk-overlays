export type ChatRankMessages = {
  _id: string;
  username: string;
  image: string;
  messageCount: number;
};

export type ChatRanker = {
  action: string;
  uid: string;
  tid: string;
  messages: ChatRankMessages[];
};
