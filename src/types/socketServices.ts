export interface SocketServicesData {
  action: string;
  uid: string;
  tid: string;
}

export interface IEmojiData {
  _id: string;
  date: Date;
  emoji: string;
}

export interface IEmojiReturn {
  _id: string;
  date: Date;
  action: string;
  broadcasterName: string;
  emojis: IEmojiData[];
  channel: string;
  tid: string;
  uid: string;
}

export type ChatMessgeReturn = {
  action: "showChatMessage" | "hideChatMessage";
  uid: string;
  tid?: string;
  message: string;
};

export type ChatRelayData = {
  uid: string;
  _id: string;
  broadcasterName: string;
  name: string;
  msg: string;
  msgEmotes: string;
  url: string;
  fontColor: string;
};
