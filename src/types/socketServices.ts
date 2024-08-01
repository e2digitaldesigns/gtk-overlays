export interface SocketServicesData {
  action: string;
  uid: string;
  tid: string;
  data: Record<string, string>;
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

export type ChatVoteData = {
  action: string;
  uid: string;
  tid?: string;
  data: {
    _id: string;
    username: string;
    votes: number;
    image: string;
  };
};

export type ChatMessgeReturn = {
  action: "showChatMessage" | "hideChatMessage";
  uid: string;
  tid?: string;
  message: ChatMessage;
};

export type ChatRelayData = {
  action: string;
  uid: string;
  _id: string;
  broadcasterName: string;
  name: string;
  msg: string;
  msgEmotes: string;
  url: string;
  fontColor: string;
};

type ChatMessage = {
  _id: string;
  broadcasterName: string;
  name: string;
  msg: string | React.ReactElement;
  url: string;
  fontColor: string;
  showTime?: number;
  transition?: TransitionDirection;
};

type TransitionDirection =
  | "LeftToRight"
  | "RightToLeft"
  | "TopToBottom"
  | "BottomToTop"
  | "FadeIn"
  | "ScaleIn";
