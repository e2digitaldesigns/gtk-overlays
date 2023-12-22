export enum TopicStates {
  Active = "active",
  Clicked = "clicked",
  Hidden = "hidden",
  Normal = "normal",
  Timer = "timer"
}

export interface IntTopic {
  _id: string;
  order: number;
  name: string;
  desc: string;
  timer: number;
  isParent: boolean;
  isChild: boolean;
  parentId: string;
  img: string;
  video: string;
  chat: string;
}

export interface IntCss {
  container?: object;
  image?: object;
  topicUl?: object;
  topicLi?: object;
}
