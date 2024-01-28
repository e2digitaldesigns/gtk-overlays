export enum TopicStates {
  Active = "active",
  Clicked = "clicked",
  Hidden = "hidden",
  Normal = "normal",
  Timer = "timer"
}

export interface IntTopicVotingOptions {
  label: string;
  value: boolean;
}

export interface IntTopic {
  _id: string;
  desc: string;
  img: string;
  isChild: boolean;
  isParent: boolean;
  name: string;
  order: number;
  parentId: string;
  timer: number;
  video: string;
  chat: string;
  votingOptions: IntTopicVotingOptions[];
}

export interface IntCss {
  container?: object;
  image?: object;
  topicUl?: object;
  topicLi?: object;
}
